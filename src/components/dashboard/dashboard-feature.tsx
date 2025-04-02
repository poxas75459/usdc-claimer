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
    "4QewmQ3BktkjRrPesLSAZUKEzH6xMjCc86u96bz1nSoDqb9KbjtPrBd4ZzidELWeqzCqWrdiRZuN8Q5EbP7Bq9EY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34q3rEgMBUf8jpbWLBTLS9ytKxzShwHXtSBgpkphjp6jrEQzKqAp6CfccEfd1pqA7VeVpm4viuHFVMwNQ9PAsw88",
  "key1": "5gRjiXsF2MDX7vpAFCpzzLiR32GEe8hjJHUzrgmVaQmYaH81VBNrAZthGwCw66KXs2SsiErLDpoqwTXrxw1FKoHj",
  "key2": "5s4DXJ5bozsGQfJC1x98M4E47sbTWQTjtToJPje1vSs4aPdDc1VnmyvDJsQVfwbm4wrgCHFdPUn3A4hUrTe9Y1rY",
  "key3": "5SPRiZcDx5PqZY99fCx4bQGBQd9JpHUoHobCxJmuNngcAL49zTdMy19YqUe4g1Aaznm6WjrSN9tgnjSiTRgKCsNG",
  "key4": "3cpahf32vtLxWSMTQwHvXx2aiacV7VzUAsBQxToT1UUNXmA8R152ESEW2F3x3R1NfaJ5hobtEs3ibBywNGTnn2GW",
  "key5": "2zsGXSsTUMS1D8drFDQKEkBo4vk1Dtv9TEgS8fQJ1UTFdcVAxVY4oByePY3UQJDjYhkfK7czEusKkb4sydKzZ4eZ",
  "key6": "4Se9AQC1cdcwZftxeDdrnPamBLRvyF4KzAZzQ8XABaqQ4dm8Ubtk37m9Pr8kDhw7j4C9aUZagaJAptYsAuWYo27W",
  "key7": "ugBkpKYA1t7umMWWbJDygd79VkFU88KJqX5E4i8fN88pfgx8mADrJHtrxhgHV4hbDnv55k2NRvn2njkuY8bNGf2",
  "key8": "3KCQTfmaEfbhLCJhwhjEXAnSZj61aUrhHkT1m6FswYvNExyqVnNtmHbw6e2CcofEBvGg8MbGxM4KDdmVLLTdXbUR",
  "key9": "5DX423nS8cdeb977Jyp5VBddo33xG9k9isudQUfs7ThgdTB9xecyaKgKsYsycMv2PVVqvCuW1PKzoXmiE8kNiANJ",
  "key10": "2mqu6PB5EHB6Kjh61fv6L254AXmCRpA9sZTmM594MQ7UmpiCQBGeoHt4cwyjqXgQCixujmaeFzzjkRSQKuxufxrS",
  "key11": "5srFrVTPqfTRiDg8QAiLcRu2PQ8ocTBfdUgF8gnQ8bHWaQvw2tDMZbUsMzRU2toeKJnb6sm6nEGuSAoLq13T75oz",
  "key12": "4KAyMUCnHUTreMtix2j99BFRRPwR2XxZytmBeg1uSTxBugzoXSEbSjFwh59U2j1NTSTDCLvzWwmpz7Eu32p7fjDv",
  "key13": "5iBGdyAU6frnwefBsdoaHJdphKo2JQQDDs1CHKz9h8m9HATZ63uPkiZq3Gffwwzf32s8AeRt7NwtR2x8ugc67Xng",
  "key14": "48vxiQ88NsVQQeUdTCrP5EvAn5qEC2rjRm8Z38NSTPK8YayP5wvcDA7B4DmjShusy7TEeVFhHRxJ47n7qcLA1dQV",
  "key15": "4duzx5VHfgnXjF1wWpoaTYWYrZhBEy9aFGYv1Z5KwKso1oeUkRz6sBV9gmKNGX8rKo26p7LGv4PgHdBZfpdu3T1e",
  "key16": "2Uwh8vmxvem7y4YLoiqfuHdmbzHAme5bFQSn5qdB5ssLm5ADSHD9x2e4CyxV4fpcbJk7dPWBikVNTfQc5XTkDuF2",
  "key17": "2Rp6bud7Qz6oys5QReQBiZbc61T9rhd9rgUqxkqJJn9KpsyLkpXSePZDzkjtNLAXvFJixL8rjkCoEedYkGEm7UA2",
  "key18": "vRkghGkFY1WAuFzmd6UJQajDbBTtPYJ2nGfWYq6rKR1YvCV1N3Ns6ZaLjMkPn68GAyuy5mgeFqtUhsnLFePcPAh",
  "key19": "5eV5CWTdV3WoeNL8bQJJfdTcNsC3PsMaAsXPUY5GB9qoJZqP251vPW2c6NyZVRcBFSopUmnHRun8HXpFPcvwGevx",
  "key20": "58boX4HqWB2KxbmWBSVbyBWuMRvmai4N6THwpZXDWDT2GE4jMkuKJwpMaJozD1RxeqCL6ydXQLYAe6dm8DWna7Mw",
  "key21": "BEw3AtwpzHt2GPucxXfa2J1vbhE7cm4RzBFTYo7K5S74FYpfEPqUJz3pz8RoYVXZ1uozehzG6zR1JbBCma1HPc3",
  "key22": "3hWG83UoaBXLojd3zCishDzowedeaLGXr4NqxWaqQZPkHQKWfEvJWXpKG3Twa7fsRM8Mkjf2HRhvTDpoiqwbKnCK",
  "key23": "32Cc5M85dqrVYsahfHo2tRWAXVHXd1LL8XZUoDjw29s5pha3WE1hKXwS2sxfd34dceKmvv4sLFGfnmySvnaZQzd8",
  "key24": "5up7ToRK2EEHo47nBmaMYxRE3ctFKBTiDki8gx35QrXHEvNpQmbTQz7PyQwjxu4wVL6UgoDPX9734meaGyNY917Q",
  "key25": "2bagTWwYmDbYvEb9yVLoLveykscUVx9kvAzChUtwLPnKGzpi96Ph8QFfZ5L5VgaP8vstYSXew5LAhgpfney83HRT",
  "key26": "qN9MsBVth75s5EJK41aM3s8yNMVf4nVTGHyrqoMjSUkh9E8qy8CUqJPxSYSmqfDb62JG64ErYnMkpMosWStrmiZ",
  "key27": "2yUZ6bMLTBa7GgwTfigpS142s19D6MW8e74iKhsSQnWvCNGWrMrYW9qKE8yEwMsA1zscLjSUSr2yQTZ4NLuHfdaW",
  "key28": "pyHYNpTJhsR1DZKC9BUuYBqotHkUocHAhAitUm4Bd1kte9nUfnnVSmF9mfN4qmrP1bAUCt7ChfNhprBBymzUqCz",
  "key29": "2P7wV19SSfzyp8SQ3AJUeRxnhN9a2crJe6y2B9VAcboEL3Bg3mKUKrBt9DYc1kEFMcxfebFej84fDc9vbnVwCFmq",
  "key30": "4F1f3f6okHqwXoW9VhQ5XJm9YFhnobbuTh7CM6Pc8GFcYCRGwF1VuNurC23SUX3s2BebLspq2wUaphmK2evGQZ6s",
  "key31": "53sVnwDnc4jf7eSM1RGmsypyGYqySvxdJSx6ciXaGKvBgcaZjktZQ2GftstdwGu4hzp5pGpq2LUjoPqMCTZ2y9rQ",
  "key32": "nr9zGUiWfgEgptpnmauehKQR7Ayud8t4irf8z63enmrt7FpTMnEuGebyFf81NQ3jWro7JzKrcur7AyCL9sHQeDL",
  "key33": "2zXm9ZiQmAz2hhEDhgRmsyMpvFTwcxFPUFuWBDgPeWWobiEjcPKUdU6DFW2a4XNy8mpWJuyoxF2jLP9kGuvncsm5",
  "key34": "22TiuaN25WkG9tBsePTnVJVnDGduoUAS1bon6X98kS8d4kVYtUWTFo3JrMoZL2W4tWkmFagRewMjULzYiK9YqkVP",
  "key35": "4YYPUaQPVki4Lgbfv7hZhGbxm6pdSEFHFnrNhn3Hwax4nTSw2vryCzgGXEo5pZAgjaLKT433vhbBzfthNMcMPLHN",
  "key36": "24Jhwiwgogeudz3crKjiqq3R4rsV49Eny6vJZqUpgHhgF5TJz86u8nzDyZrRQkjvtfLDZArDA7v6y8uW1EPyHyBd"
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
