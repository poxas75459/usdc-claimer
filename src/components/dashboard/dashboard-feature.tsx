/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5Dsc5eHJcSMqn3RsLQHcjz796hArq7XCovpVkaHccc9fPSWQrYzi5utC4Qj6g261RVQGeyKPwL2rm26TsCpnKXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65eoSE1abv6Kk4U9fJpA545yy6y33uHYRHiPhF9gWfj94t24qHNtjxEtt1cDuMbh1AEsYF8SZtiUNWhG87cxu1Aj",
  "key1": "2UfqQKddLmKgPkMusNpWxrEM2TT1iLsRsYoMsSLnbEcZg1J6zEEaMrQ9Tw3UPV3VCk2xfKpPCUGCZbCbxnWYprbG",
  "key2": "5mShSUPi6LoRjZAznPQMa1TkNgxnkXRQkJzmqZqbsfE4CPbbc2tHKw5pRUVs7Mnoj6qUXpdEzX7h3ohRZRydWyeB",
  "key3": "5usHMi1LA1oJ5RK6rWT4fh2mi36otN5JHzrwmfpX9SpUSY7EZ3jeJUQSinmparwRRy5VPbonUaTqCufXBhWghTQK",
  "key4": "3tfrkE8L5CYf5rjVvSxcu3wDbhb77uHMxkoR1ZzrRo7Rk2zgqG1Uix6eUKN7yxj6EGgFimNKPCc3r2CnFxBzNzR6",
  "key5": "eQbt2ymxp6uPsW59QfhCru94bJcMuRFrUipCML6RWCsdsi9trqkyaycNWjyZ6PRtThmDMVVrH9L34sKWUorw8a2",
  "key6": "kSb2n35fCFmGeQUTBTDJJdwyy8rb2uuyhxQgkHBXsz3PN7h362D4e6UbyDDDV98U3XmDrQ7ddwFi1hJZUYeT8oa",
  "key7": "61jyBivWR6Vpa4MY7dFmswx9HZ2yCJAopEdbg66dbQd7zH6CrygCLf8YkFazJPdsiuUqZ1xPbiWnHx8WtKFfNfM2",
  "key8": "2VFUm4wZdpY6msTS9u7BbTkbst3rLYs4qmTAit2n5zQbHqKnuBEu8XjbzDUukgetQgbajUdN29Vcc6ZCqLGRFkL",
  "key9": "4pLNhTdmAQ8FVwDeFdko4r2CMzsaFxxCupDqrisVvU6jCAhpJSe6aj2YWxHRj8U3xtu9WKLGTEgHBLw4FZ89GCAj",
  "key10": "5HPFPn52v4NXAKiLPke36vM1PWSA5nkLaRJuTCRPDDw7Z8h4wM9HMjma9NJQBbr2KU7FXZ3QcQkzAEzxUh43Dcv3",
  "key11": "aH4NRCaFRWWCpRt4tyCGdnZ1a9JReBEBqkr6e1ae72de32o5JwBeTabhyykeXJcdsvK3pSTsiACRvxdPrWZVZz2",
  "key12": "4ozo8QFBMjNUer8rvDaWcRse27wKbHtNBTWLC7g9vxR44MUnMkTLc8JxFLevXoEmX1vUQDnpHUL6WtLPo4U3szg3",
  "key13": "3kdB1u6sRG9jpvxs97CHhj4EAqFKqQfHEmjhCLMuW8SGnTe9xuf67Ef4tNmXJywM9NokfMZiuFDzpPYhHNqYsipE",
  "key14": "8TL6rsU8krezNf5QQvgJ2ZWDdtiBExNiM2cjqVACktPZLEU1dsPr9tZZNdhCKYUHMDncSGrVGy1iVcqyfT9PuB9",
  "key15": "4LtfoRQfZBJcKTTqKev1N8u2dU2cFZN97FeQt1a8ggqnU8P3sqQKLzp8hp9FWHGvW6KB2L4RJk5f3dWozPL3wxCu",
  "key16": "2mTkA4Dzb9fARuuxv8MPZbRX185HBV7FgsYejpt78W7rm7Ch69VNHDbgHv1PrTsGKDphXjagvK75RcAD32bc46LW",
  "key17": "41Rr4XSTsR2aZggmG9NqCEugsQkRjYbTUxgAPzpF4VTNtvVb3GbZES81FyhZoQjtKi1jKe67LVyEdg8bZeJHhaod",
  "key18": "2EfUykzaVZT9Jbizy6dJR72pEDYfXXuVg2RAmvVFtvWPURm3C1gXP4LD6QQUfy9orwVsgpRYp2UwFivxQjqMig5j",
  "key19": "4LvSQx7Xh4o5vZjzHtSKvcQEuUok2RyvwppB6eNTVmwHPVjsbzbgGGdrzDgxJwXcdhn3rs5vfctZGVq1VoLf26HA",
  "key20": "5VwovraxqC18HHn8ebrxX3YDXcVh8R95tgNetSmU6yzVqejA5xG13Q83KGants5A76oxiVKR1cPR5s9B4GLt3UCi",
  "key21": "3aQpjNXSpP9ch2v9pC813TcE9hNuGcNTD3QTkrXCpiNvvJx9PHR3XuyBiRiDZi2hzA5qAPe2WHFovgfq5EXNsc6s",
  "key22": "5ZUPqNBtGCSj9ndWQXuih9MjLhSBe9CdNXN5qkeKE9ooH7hxE4pjSKLD2V6icLn7Eq7jXvHFvbkHA1QgbEGQEtj2",
  "key23": "3P5PRfaG86r2yncrLLg8mWNYU2uyugotYXXaBZXXZTWx6AS37hUuLBT9fk2mBSE9TduVhUAPfdRG7wytXFA8PnmN",
  "key24": "5N2sRsF11isi45Jxptv9vHy6zbyqXofTaJpMhExi2UrxdGsWaRiycwS7iZ6UbgSAm7pm8wAGrofYmZXDgD9eRw4K",
  "key25": "67MpQFPehp2HqzkfoSgaGh6vXyWsR4qLPndFMbqbEmoGaPM2zhCEzwiZSnDZDe5HEX9SFDjzqf3KviQ2xDEE3dsp",
  "key26": "4QNtm43YzhJQEHM2aUTXnMNAKEgipH5pJUeFbU6HCzYrRvTVMnbiJrFNCKoGiz8n42R7pKrjrp1DG52QM1nKFXp",
  "key27": "5sMipT17a9yFXgFJjCtoSqwbCMUjN2mF6ZQRyR7qN5zdjAmozJMjMVVzb4My6Bku4c7BSvnm7FJ7UzSUjqwrjjKp",
  "key28": "2vVB27o8DGEQfiMw3NmAT6gvXKMVu2gPQHoaa5vvePq635P4xc67eUBqUAEpbhgNybgJPT5NY4PRLJPnnk46ctGV",
  "key29": "2pioWmzh2WDj1YKDPUGcdGGhqzFaW9KJcQ4tqrisgJR8vut92mz7R8xGNbtRNmEB2MyiZ1qXgJeG5mPFarp3XyDT",
  "key30": "3E6F44guz6EFAm1khPfrTW9yuj1XUiUJovdWV5g6xLuEjpBJjuYL8gsmego6oAimYqp9LDJ8VANonra8ZpfTchh",
  "key31": "29FaCUFYSiBqHQGL4ytjsbtrWwxYaNCv6MXZ93QRZ9Q4yz8GAxcuCF5FoTwhb6jbeMFo5kr56K5CbsWomcnGwjWx",
  "key32": "Xd2iYVxNiBuBuVDP3RH2qRXtiMQjC6PpSYfbXQHGgSb2fwjAagvv2tKz8UsQVHoyCkzgQZvwB7y2cGT8yEwxATB",
  "key33": "4NdrpdjDmFv2U1Hk3oCNARmYWDYtrcHnXvUBjooU2ELmJPcmLrYLgX59VPL1WsiGYv7JjtsFdANRpniD6JoMR6Gt",
  "key34": "5p7nkYZiXhx5MK4bm39sKYXY1s5XB17g9UQQJ9pbx1Dy3Ta7svNqAAJ4LArq2gWxfAtxDLQdnHyvENwvi97fmhuq",
  "key35": "q6vDVp9tPTRXMGvFDQSW75DfMArV5Sk8ivPKAmcYpdCep7rVjst1XwNpL7UmyJMbc68zXZEvxQ2QsurdjuHqq7C",
  "key36": "7i6hX12BubW6GUJhyFZUpwJmrwfj5rdMgPdrutCk1f9wmzDBQDeq7hadHnCcb3pKPrZeuXuqNxNHSEJ66W3iegf",
  "key37": "2LgVpiwXhES2i9tnnERcPLkHbXVv8tKtyxY5xsMLwr53Bkk4QmP5LpMSF8uaZ3gqqdB27ANDvmJvA8wnEKYEBMwa",
  "key38": "667XgD4uHoZSdDecDaQsimm2LPNKZbMSfVDKtr4pBD4fVxbDyebCMSVVVfAt8SVkZiX6CiwR2QqTZvNDF2LsRkPi",
  "key39": "3HexZgLvXRcyWqpYR6KjLQtzkfvWKEgVdHbCpR2g4ynX7aXYC4pbRa6wAusCXtfrhuSonzF2QAWZixtBRfFEWugV",
  "key40": "55BNRydTicE4GVUm8Fxz6ExpSY4SbaimZCkVLpL8DtirGvEjUhMUYGMDpPATnRbTda8d8fdwQdD5gKE2uDq6gHdc",
  "key41": "2S5oU4jAxC8EzeSdR5ENFTAETnvT6R6y6eY7R23DzQMvjFbX19J2c26NZiVTuDvJo49zvq9cs2EDKC4hkNjEyiRq",
  "key42": "5QCSb1avfiN9a6Tx5WWW3d1towzq1KU79UL9X5MvWQuKPcFvh1ZHLN2Wv2Lvk2yyoMj7nGmWEwK7ohusVrAri3ce",
  "key43": "32kFQjBX4daq8Zo719oLfYcVY3jutzpGKryBjMsKyA1nHJUFzFPdyQRe9vuWXzKUFuGVJ2VxjTtwXd969RjhVqTm",
  "key44": "eHSzpwMF4qyVKpDevMnsUC5fwFFNoxkY6KnEdxgwwKvZJYHN4GJgMMm7FoYLgopV9JS3zoK66CpsgSYcpmtjbbZ",
  "key45": "5SikGEGJi3zrDEYuaQfFirfTKy4efZ6rRaNZtVs7vsZKq1mzoh3aGvwgUXtPqEws2myvAYNvFWx8cVH5PoyM8g1e",
  "key46": "3Vz7rj2uFMckJzpqYHpULLCk6nzXMnAFkWwwvCoQh5orBbcGYDE14dEiqsQLNH7pR1iFsiETss8wUQpyaYL4duin",
  "key47": "3NBvCffToB5aQKACJf9y2xRHqEtthJNsEAQZmb5W2j27T1iVhx2EYtxUS6A9UJ3nbusPGY3WSE8cyi7yeewqmwgD",
  "key48": "2CDpeTh9a76PcRXJgVmtCrMh7ts7DLtoXGbNh4xNDiTCYaqA473jeCohYpsGkG8GbvoQyzho3TNfZzD4viV8SDq7"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
