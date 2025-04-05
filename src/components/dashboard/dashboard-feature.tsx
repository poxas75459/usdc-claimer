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
    "35n3Pvzfz2cSscNHt9HyELtVSRStb2tfTiNaThCfmQ7ukW3XSa1S9DSqBP3szJKzh2DkruGaNwXJbcQ13MmnbQiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qph2JkEArCMfz932BPWrG2f6cK7SZJHaJKtNWcfom9BUYGYScEip1NvVLW2eJTFL11k1QYqf6CWaWuaUavUygHs",
  "key1": "2yR6S3GhZSQZkCdWnvyEXoFMeJfvRBi4Gn42KHF68E48M6ruWkavTuBqvV2CUKgmTr6eUGtLx4Dpcd45jKLAK7CG",
  "key2": "2dmbXvKjzTUGU4hes4qfVa9Anopyf1QzdZNCskpSQBN5HRRM9NBZY4J9XCKaPbQdvNtCRngu8AMAWhK6nngbyFfQ",
  "key3": "35Fno1VWfsVU1vcizaDdBGtSD2rS9FwZBRhLHtFjFu4imgW4mi62EscY2yxALHhvxmoPikYmKiz75wQTv1VaYn74",
  "key4": "3uXuFKjT3LQ24M7DH8EsptYDJqkb2eotrPb3J3XU8YKFMdf3F27mFT22eg4rs5ApayqHs1D9EGCAwCBAcPbYW3pk",
  "key5": "4SY7qkkfd4QJJ4JRUArowXohmqqu4uV9UzQUaH3SHmkgtYT2S5c5ZWB8EjNKbf98gV5CrbzBCbX6Utoud7tE6N8",
  "key6": "54Y5PFgQodYEJhcYDzRixrnEG51c7hwm8jK96ZwRheu5eZrPwAN5m5vZsSsUqriAxXjmZdfaRVDGTZqt3spvLffY",
  "key7": "3M68B4eZaVCoiW945Nabjjejafb8rZAW1P6WvVLhdrD9SRCXkLbjhGUQtcYkrnoYuMKUhibo8KAYGvEkyVY4wUpJ",
  "key8": "4KAYLXTdjmTgYvkXbN7vi743U827qYYyKgXUsADJfxyWZ6MYJTdv4T7uN2mqDKwsRPvVQPRWxoExKKaA1oJbEgDT",
  "key9": "4rrdxqqeb2okoguCypmvvJDYfqVS9NrjfTnXCktFgAsFY8NadnWcs66ymTEMya9EzitE9B4WkYdqW3U3HUSbnzYB",
  "key10": "23a82RbdG6YMYJe5yCh8sKpYhFqS7qbxFbFpToEkBJDoNAw3FLVZxuqr5qsie6JJJd2c1WhRm4Lwxy6q9gn7MMvo",
  "key11": "54JqgqGtNyo5VpdNeiJSGuUPyotXRqDw8omhjqpZqhA7isCZQNCoar5uFAsUUqT4rppcXFTgoKnshmE16Bx3nzPx",
  "key12": "4SDYFrWMpsjcEu5GvCpN9R1f3ZF2RjYsp5NR6RcjxThbkrvE3GAeHKQNqSHkUTRuEb4DJY51gcnnB5nDoewLX4c2",
  "key13": "5Ku6j2EmsBPnkTSYMLANx8iTrsvJHGkGqbsie6u5YCce4dEJ6DFyEmyoYSvjjmSE5egzd19d8c1xb2d9feT9Unwc",
  "key14": "4Bk9QNcicKxrxJXk8Jw34DB36yeb6jBfCcqRGhPobC9pnjKXw1vfrCFSsd1xBBLWwqXR7ED81JtYZxToahSZKzuP",
  "key15": "gy8KaDWL9xJMPfY2AhyjnDbao6wzESoHk8dtPtCyK5K3Zoded7wRRzJ5eBwec3UCeWYJSmmXUEJvcsM55r68iik",
  "key16": "3eVoY7DEtz2Ex421rs8SLnUTQdpPEqg7JsvATdjJMgyF2UQabg1MGPdDUvk5ytz4rcVjRfdZLHBddPhUxTM2zx4F",
  "key17": "nsLCByX3AKRQ9pUZKGoo9HWrPt3cqFFXTqgawVKWscY2CaskoycMqUazapc54D2Q2qZyLohpn3G6n3HhezQqvee",
  "key18": "5YAAyVFtz2gY6TwPSoF1roRqK8hRDd4rn1CzQSU5NMLYExp4fd5repr1gNGEbSBWZJR3yy6FAp4yMWas4fRjkbuq",
  "key19": "4yDEUhFGMc2Ac4RrjvtaCjFaFa7NDviFVcw4Z19PgTBSjSvZKP2aGgK3Yz5xZQePzJobnjLshq9hMNszkSfkEXHt",
  "key20": "4CdKvdDiciRrxwHUEitpkWNuFC7wAkxkBt2jhoWpNsfYGHnQm1q6giDqhzckv4ZMuysWeFPCfnsVXQbMDZTbXoFb",
  "key21": "XEWBUj7MtxPL7zzmMZnAU1RDCXgtHbQCLvBVGiZCAjhWSxZP1rKLPf8XSoJkFs4qFaGecksPTUQyA4q7uJWn5Hf",
  "key22": "5CyvVP29oDB4pnnCrxubEz9MgkTmKb797uLVFui3jxgHQZvi6BkUZMgr67vP9TyF8nXGbGY6t4VthRw8piSS8PsD",
  "key23": "2FiiMvDYwsTEbQrNG9CEGYb9SBEhRN7Wquday6wAaAroBTTPrSfbEi3vwZrV6XMWeGAiosWckq1KpXV9572Mpi2P",
  "key24": "2i7jGKsE8NiRXKRuVzmn8vw6nt2BwrGR1kta5xQf7kb3WmgZ2BKyEAPJRqvCGte1MghFuqPKWdRcdoCHKJjZ35Xo",
  "key25": "3yR3az2VA1iky1JJq7usRzDD4huiU46bu9gqNjt5bP3QZHRGRW9B3w9AzbXLYrV1r42qUMpZ6JtpuhsY7MoKxBp8",
  "key26": "31Excf7tfNoysRq5p6kkDdDyD3G1HCuT5qjLLxF6k9XtpjBBVwQRCXRhiPSf4v5sQG8txYhduHaGeED7agaonDWW",
  "key27": "2cNqwLR1dmcC4i2KwUGAd1tG4phVNDPnJekqtubuoJq2mpdYRARwL9e9DTnPfCpoYFD5bvqqfp9ik9GxKUJNU8QS",
  "key28": "5t1fW6F5dhqN7Bk5qeWRZhnLGB4g4FDCykMijMwCjXLt2jdxdkzS66wSu5czs4XTeikcU5QedVTRNVnKoEVUy7i9",
  "key29": "3NVdeuuYjwuMr1ERw7HAxutZxvpMoNRPXFKqgLrg5rZtcfZNBrGS6EB9rgAH3kEwoXEwDeJNP1EFiAXMs8YaAAdd",
  "key30": "2dkwV1fbvx1vaQNgvTx3D76PECsK19WNTB479tF3AXDPJLMJYk7H1pxuiJwEmpBVAYXLRD67Q1mNJhH1yhKgRCtm",
  "key31": "5kwz8xJGkWe3pcaSwSiHudkJr5y6AqFx1sxR7zFk7mKy5QmJKXxkXaWGzNujhs3M5Z8TaeW71Gdh9mEU9exrXunF",
  "key32": "LwiLfaBfZbbWKRGYn9DcVLwn1f3xQn1vmMvaZUSgcjo4jAQ2nQvbw44s1WqepUVHECkwChni9woiPg1WGb5naXJ",
  "key33": "jrDF9bdvN5CWyukg5xGEGXrzeWpUHLWvPDLuxMYs9NkHp62DDD5164sGMNqXV8Y7suUkJQfCSo5yjPSCL8jHNma",
  "key34": "m865fybRr4ReqKxDe59AG8CYLxMQeBzEeYGAQLaDG5JiXaz3ZDcSxGkSXWBcF3AnpAUVYxLEwuoXq5aD1pqf7xT",
  "key35": "4N7t4z1wAY1bqurU5ovezE3EsECtSJE9T4LeZBhGBioPt3bsmW3DnnmP9dqt8RpDvvvPCHSgfNfDMt3rmUrtPvBL",
  "key36": "WuhaCjjdkijbNAoZ7vGjkfeoGBzfs6PFnR4xvT58uBQ7LME6oFndD6JSPd9ahD8vyPNK49yZ9rLHvG6o6fzaKyb",
  "key37": "5RwcDRxXjWjcZYwegj8RaE3hMm6E4a5DKDt8Yn73pHCzLBVwWJaq4zELjpvo2KSzqjqCSdQWXG1cHn7Hyi3x6865",
  "key38": "4MV8w3PQGnFnzRLEKjEpqKjBPkunUeeMzYLr3HxL8Y5XYBZVD1JKXZTngDNDw1DkL5S38EMG817YvhYVSUtxmSTk",
  "key39": "2QYWKTQU9x9Q8cnorpU3T4bC5Pku12zJMe2tSV5JF9Wty7weodULn3aYamjJQ1AtN5xx1R8gmhziKQCspHWjsqhw",
  "key40": "2FgTdqjzd5gskVq1v5iQWPNMSmWfyrub7Qv7faJxrSRMgZDSCeXxpvE95eFWof7kPCKT8VFqXVe6anLBN7FxhbFm",
  "key41": "2fjYEiCFTvk84KmbhAFBfQWpyEk4rcAnF31WJWfgNYsgASdCSrUjPWzwmj7rj6d9fF437QWt2uRjWZGg8aD3g3Lv",
  "key42": "31dBjFCMU4S7zrcBkCy1VkaJdMKVMboyHGiEMnWeCstkpyrEWMMy6MyjpriQN55cHjPBFdRFrwHrzJbNyDoYXfMj",
  "key43": "5nFwHzSeRP9zbfpPCGQdR3wStLAWmqEKD6CAM9voEvRTxccxCpRnzAVJrtb6Exsd3mLfANs1Trj4QohT8mAfa1U8",
  "key44": "2yfbtufAcBouWFoaPaWjuiyuMRkBfRTyvJiWBEszVLQ5mEuzKGB32bZCdu3EQ9CmnF4ytLvQSoUvyrfaBxgNSjMk",
  "key45": "43xqqURexxwUzTEP8rpTKXv61ShHmXV8dFeZbas2A4K5TEfcsmkJNQT3JhpsZod2beG5XzF7iziHMa8JqVePtac",
  "key46": "4YneBkYrXfxiksLoccEufizwQ92ctEHk9PVEvGM4jdyLvNzPVBz6Lg6kyq4bTkFoyzrhL8xHnY24X3hPj1MsJwmY"
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
