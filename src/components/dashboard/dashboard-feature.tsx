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
    "2gKMYUPydDU1VFuDoorh8tnCkEQTMDEEMcRzPtUiR1UxLQphuKGU7F6kMS7r9yop6943JGvbLezAM5G1ChKdeGJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XKXTUojHqvVtDeNq9Vv5PCu3kgWTjoMT6ArH2C2qHPEJySv6qnosyJAHc7SqwgzLwbMS2HDVorGqNGHRgMKSzYB",
  "key1": "5fb7sEj1N1umu3nyztqYu7zSpzWZmEJGNwS38e2cj9ege8XzPUjk45byRiu6wzQassmRyNpkScYBagnZ9D9YfGiT",
  "key2": "4TrxC78uhoi4zohByjNTiKtjhj9kQTzDWeT7DawCkDK8VwtqziXHaYPZhkkiPj92FDaqFbiRFZ38xUUNHBp5rPrV",
  "key3": "3S2SPq9LAAsnNZ1JQhNDQ3mjar7BHwwSQ4P48Svjz4pUQotBWEv2NqFkS3m49Di3rKL4rdBuKa1b2oLeCc8mQGNK",
  "key4": "4F8tLDduMZQNJk5Y12qVpMaiBxnsioHYq4ptLuSg23YfAaqwL2s4jV4rwutPKjehFC9sEehrMWoR5WqiHqj4pZn2",
  "key5": "4qnD7QW4o2r2i23QHXjstYbdfAbygnatSh6K2uonRoVGpvMX2doLxMXqQ6CYoAcYbBtKzBrpd9HbXADPLfCupSey",
  "key6": "5eaQSJKzAbfwafnYCJnNz6Wdu6ixTTptvH2Ji4ii12z4Nj62Z9n1bA8V1VCHN65Z4XoNg4SoRcZZVcbdDyJmE2RG",
  "key7": "5o52mUefrWo8qj665ByVw1zkBdtqxxqLTTDajWNYz61ZVPxoT1jB9SGpSUP5DMQ7BNVZTUb4esvhY2B3omwxwZZ5",
  "key8": "5xPkGgvTDgzQj2ZeGaSc9BnZHTuHt45tmTs1VYcGrG7HMG8LCLQcjiSi2f8wbBYjsiSewUPdw4k4tfjmQ4FHcivV",
  "key9": "2AdbVUbJtnU9DNRHMX3ds1MJHCc8nS56CyUdqRdyFmPXN4qZEoDkvjbowLtwoej264tpqjU8fJHzuCMVLLsQdWoU",
  "key10": "T1otyvKFRdW4foQCbafjgm1gkgR8eCd35YxfSPZZ4m23rejMPaNdZMxrwxyKasnrrsp6cVQ5Wqr7NpQmFtERph8",
  "key11": "2w4HbGFt3dahnJVb88k3cRcMAF3AiGR6RXbfhJ9jN6jpgia6X7T4BrN9PvZfdaoGSji2vt1s9Mi2ponZBxuyJ8jg",
  "key12": "2d5bhLVUhMRCsSbm1RnZ321bD73LuKQpFiCNBrdRgUqDLJcqxUT9gnzs3qMrKRFSKXWhpHuxk2uGgZq17GaobLWE",
  "key13": "uAo6fjU8BiE5T5NjAKNZNz9vEjKDtNHqa7whu8771q9MssaWBqwwyB1rJaj4AguMmW3HFSE58MPHfLaHXTB3b24",
  "key14": "31FMVNqfHLYV2vHtZ3AYtPhQqHVq9NdJWsXxgiuHLpfHXb4Uk5PKATNH2JPAZgRL5mkPWTetnvDHcCmK8yUJgHrD",
  "key15": "57q2CQtU19jpLMHvXUA9FygYAbC6ukPkgkzXRjHhHPqojn1ac2464ybCysxYaQY6Wa5ZzASH8YrzaYB6kXPirsXz",
  "key16": "46c4LidqYwW4XKVrhyfB9k9nQaWhb7nfCDdVgT451C2ENceWbhjeFkt5kpF3Ka36x1bdAx2moiQKYa2fKDW5E3Xp",
  "key17": "4FcxG5HofjZWb5Pw5HxwzYQ2x7ffxeuN91sgAWCJf8iXTzVUoNteCivUwDVFVwsoKB3Gvj12j6KjcLXjBzVd1g6U",
  "key18": "5fJzMkWZZBPkVetmDcXko5HuuYZgX83hTLU9atggMW2Jhn3GdiQKgUgdCx25oG5gzYKFRV9f96hL86rJmhUS25s4",
  "key19": "4FG4wB6Fj4qBTFNhEpaMzB4yWxy8VH5AsdE8mN69ihYVez14769Dje6r4kPD2UEzYcdqqCAz8UZNaWH4kp2VKMp3",
  "key20": "pVLWgPZLQaeDmcEdwqGMPGtysqDKGzCfGCiC2n2sU6LAW1xspo9pCXt5NT6cQNCHyp4FbDpjAk89zyDjo97Z16W",
  "key21": "3CTXuQ4PEDRqoKwk4WeaqR1hR9KVJyvR4McCHFjgtVGE8PD2MKdY5QBiy5ASqjkfKnViNYL2u8Ao26zpj5QjhV5n",
  "key22": "49VXKsb4qvMKoz7XJaRzTCTUSuH2tRU9zf1wYGNLYExeyHNgiMgQ8XVSRzV3GUjrcTr5E4TiRFe81otxK7L31oTb",
  "key23": "HtCfEvNzr7iPeKM7EbutmxkR9HHfA2KoA8hqph1XLE2B7inroZE1wYq2JYkcJJNWDbHbWxridRMMqsCi7MtUVzY",
  "key24": "42z7DHQEVx2MWR9MmERzpYnJJx2y3Vsep34Ko5gzjP2hYqbbEaf6y4jftfXh3vtAQ94frDbm5JQ3LWezW1BSDcaJ",
  "key25": "4PERmnU5jh5BTqMUtYR3hy4MxY6CKhgkhB5Tu4Gt5wGvTuSnEGoA2MqPuXcQj45aK2MFGyTPJQ9inGUsx6TMoX2",
  "key26": "2b1QbkFqg35jG4Smuxh4xG2L3pqVQbKMPYArg4noAnofR3Gvd67Jya3Xp386KNCytQVUi3ngkn6JjiAzVqP6FKdc",
  "key27": "67pkyGkNFaxMBDPG9HXm4i9RYUGdVSFkQuyqkBfzNYNpiNRTJiYAg1kVSb3shBNV3meuiMbTYQW2ZNdMpRoh2DdG",
  "key28": "2x1SSFN6Ytk1i63VRJqKBb4odCH59T6zUzNfUeXgwRrT8q9Eg44RAozfwAFayrADDg5LWUz6oMhKDRCpbszohbt9",
  "key29": "3QFEekcUKM4negP8TXyCweRcGT214nwDn2GNjPwGvukRaNBB5WXzeyKceX4VHvoHVZA4nZrRGPyzbCZjWHhbkhcq",
  "key30": "CzeY4edaRmCus6u4qN9fVzRyNT5JL7Q8xn9eDyByohNeU1vcnUqqgjr78BtbhLyVFmR7US5wd8ghrC8WJ3dMEFL",
  "key31": "3NtMNuAZRDEmitxEf4kZd3qpjBPhTUHZePzxij3tp5f36V1pZ3eyBkvHoWuELspqcUJA6HpyMRnsZorrzcE4EzdZ",
  "key32": "4zEDF6bXkL6RFtrFStsM7vYT8QLEUfgqHPnJF25sfsU8ijM8ZCqZMhN5E2LvRFiVYLBw7ZijSPstoozvsxDUyXNC",
  "key33": "2fXdUnDroAZb7eidCwEZPQdtT5nMHdcdCQga8xBLrCcfei9LQS2mKpS35N9U8tAeGx82m71bWu1WqsaEEkskospb",
  "key34": "4ddfYTyideBT8dBjYhcBj3Mx3xDVEL6EmqfheDNdayrhPuqZaN9Rr9VFqR3jNzVRMN6W1xBM2YQeB9KATmTXiKpS",
  "key35": "3kU1Zw9ZJEyL45CVk3sCnQ5tNeBWjS5F46VzZx15bMRSyStBueAmRQFCHvc6b7w5d8KeJMU7WtJ1wTbeDvsroq8y",
  "key36": "2adtxxekyxehc8vZAf66e2UFQ6YkdQAem1B8D3Y7Fp8FK1aY157Hyg8aP9N5BpmctMFn8cbaxBThabq6SqSNVs9W",
  "key37": "51QtBuYrkqfeuX9r1buhGSopb9GL5RwGEzzfAwWwUNJnFJXkZUNAgyfY2mCdkvNbhrwMgqd8k9smtafsY2aY3Az1",
  "key38": "4oytvWmtLhL4W3vw1YsSr3x1cWz3W11YbYKW7rNiqGNWiWGmZktBxdxPjnsaLyHHdWUCfPMVR9x8o9orkjBeYueJ",
  "key39": "3zYB9bcrDPtWnyTHVeeDEsthPhcokMHVUMYKyKkvXRA2VmabASRTcXHpjC6bXGX34rF8SjTn7aFQ4jAjovGZSGZY",
  "key40": "3Cip6P1N8npaDYKuBEvDCFvbPB4UaFZwWPEq41zk4cefR2meaAp94CAdtKMuVhenGmz9QLgjLv1kWMBzZY3VvrcH"
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
