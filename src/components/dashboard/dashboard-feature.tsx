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
    "3Yxa5xruSnLGbh4nYRCJMLC53y8vwG4bx3pPwXrzpznnTY8maz1NRW3THFwf7MXEKMKBnQ5c6KeBurxp12yMeFKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GWwNvND8Q5VqrM3UzVhSbi8a1tnBUHFbsiXnaxakzfV8SYKfK3w5LL8qPvbnpKKqQfCGbPZ51dPzamYAw828F1k",
  "key1": "2wNVxF4rWvFuzZQKTHjyWmDwKBDzFRmHmtLUs6DbVi521seDKtrXpN8zMR6L5r6foJnd7YCfXUH437d7LvuUJfn8",
  "key2": "3nb3PtatPnUy7cXUnw1cFT9uvmy9qK7ci7D7XiTotWyCQCa4XZMBhcah9C8QLyD6frtQ4dJJyjRW4TmnWwC6U5a",
  "key3": "2y8UTQTjLsAGZ89V6HF2VPYgPJFsbuTSoZxGDj7zN5uLaiQZerAXYSXc6w3jgJBdTSvnqWswpWwWBVUyPJuT3SxM",
  "key4": "2eJYTvGzrrG1VdUZGrPAY8n8JsMVepT6GYdDSD8azq6MYwM4DxA38dkJfUXBwWcYGq3cNXWNxr3n9YYcPkTiSvkZ",
  "key5": "4kkM4HFZR8pwdYPzNCdYCCE36UpSqWXdgyHSybYMtqL9awaBVQLqHNqDpyoeZhLNH1yBooEJanuH4GX5YS767FQD",
  "key6": "2a1UimGNbR9f7LpefxdAd1d7Mh27QfcK3GQhd3iAGeoZCkSwhe1fC1iRD4cZnd7pdyQKkV2KaeJiQLYwjQDwfNet",
  "key7": "4d2AocEb83qRTafvKzocz9K2fdQCBVzNCFyNyAd8ybpPa2S4smP5BdgsP2TnwsKtjz41o9oHHRrnpWX4NFg365dK",
  "key8": "46kphYFEmcEFjPSLZai7iWJZY7GiknnNtrWqx69gTu8bDEhniJjiSkL7BZymvR8CfH49nSF1fPp9N534guN8iZLF",
  "key9": "39gtjsjVciYAPmQaftqR8AhumJEwtXXD8pSRDVfScGrJ6y22JYKKVsbH1UwEJGb6uCP47SWkrmLbX3PwM7ahis9R",
  "key10": "5Y5GW5gy3U8aGfyMoayMAGUerXeW6jpEzHH2qVpJZ3MK824CqhryC2m7kEETmsHuCmgMUmUHHDxQaRQcdNY3fbvc",
  "key11": "5miCNbhhTqz4vPMnR4fF8gonTTxkfyFsotCmKmdyPBQFzEfCTCmAT5vDctykxTsghKr4C7sZA5JTWCrGpJvZB4yP",
  "key12": "4DaW7CEK7qgvnf9WDUd7Y2PcmLLSmgscm7mshJpRdfU2ZhrHMiwtiVn8ustxmqedW1nVc8G7946SjjGawZsxNsPf",
  "key13": "4StytnPfmbLeVvzEd11zwxMFECztbonKUcUqvebwLWdrk7JPAesqMwrJwiipatryhWeUZXTGiWkxe8uhGXw7QDw2",
  "key14": "4R1PFNbU2GBuodaChmofdL2FrEusE1k55bjxFKRj59n8tHDH773zrhg9XaiChqx2wbHdJRMrq7koLBatKjJuFSZ1",
  "key15": "5NKghjTNGBiAksVKMh2WhJj5pis7iN7cNLts2x2RxCmSZhDVSLHpASZzDCS5p15RDUX3o6qpHsrft13bib28k1TJ",
  "key16": "3JTBsy2akfkWHH2SKDsnk5RsH8wd5vDYvu7SByn21kJFCgpoKnairoTjzVogGti5JqLYea3Ty2avyDLehJ5sAUjh",
  "key17": "4vvyDNpzoQYSZHzwSdDqvmkovnxTdQJCURBbVCkZLTYqKCaRTU9GRgpJikX1eY9BFc7fLuFQfX4Hjn5WJh6bjqsg",
  "key18": "Eekp4NbQZcPWBKBArJA7wnVnsWk3ZosVJCKY29Z64MGgtB7R5Dam8a4pwTChwwQzXB3pmMyeVhAq2dkU9ra36wU",
  "key19": "5y1HTa3w7zp1r6wjXkGwJYj1tz9XP3ScFdG6nXR3PdTLNoYfuPDa9JenvRAU3kEywZaieAeQamd2iMt89jnfYuiR",
  "key20": "48Uyc146GYXt5R5iTZ9KW7hwrNcVwWtNgjB7vX8UbJFq6RiJ3hmVuPeBGUr7zMjGeAUMwGzhH3vrVSHc58zV1UKD",
  "key21": "2Ay93rDwxS9KVtVNJB548yaqkoQdAeMbmrSEkPwVniJzrgNpmbJq5FDQwRREfpubGoVWnuJ8ELxSw172Rze2eBZX",
  "key22": "SoCr9ANoJPyB3Sv2494McRhDz8F4rD52uPy9vnrrUSnPkNbzFqKCvgsfUdkWdoWoCgXuLPqe6LAU6QYQuamAgAY",
  "key23": "28vdVZfnRtTxgHZxjyUiqK4gQ8NBzhtYGHtGTW2UH8m9kgj67nFC62XnAfJjApeeRAv5iwLfe6iR26PZqtsVFEQK",
  "key24": "4wQfcsCWfoa2kBr2w6v56JmtBbUd7DeUYv95eReP4FW99cNpCa8P8oKHjLXDBN43DsiJArqqvUnZUvHFavoVtCgX",
  "key25": "gckRdTDmzfLCjAgJbqyafirNeWfqktdnwY5KriCt1MJw4CNBb5t3AHdiWsYg5TP9K7BT7G69yFEgK7XMJeRQVJq",
  "key26": "5fmrZgYc42B6TT8sZEZtPBnLb4fD3WCxuaFhoFLRzoft55Ck2wuGUSjkhVFTwUEjT1jYVzBAYhRSXY5qR65gqWG6",
  "key27": "bYswi12Hyf9rA1NRMFo4pTYwCVCwtbtJEErVP2tw4REJAV6La3sUNy6WfgSbFdSYBgxpZg6uXYiQ6bx4gAcLYBR",
  "key28": "3kLH1wsCP4hnYJnS5JU7RpDEXGnm6hzvgfc2BBN1UpdahJ6UqnmKLYJNEcH78FW7Tpehf39VXjRUxZXy5WDhi37v",
  "key29": "53tPheqPwZFPqf37mqie2NTaHzsRG4Tn7JMCnMTywcdwnMJPG6AzK8X3NnroDR3dmHckeYHvvYUrnvsLq6y9Gq8e"
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
