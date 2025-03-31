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
    "63fdw2YZunC4ofiBrpP9at9R7YGeYJVcnrUFi2bGYe7qXvuWykgkkuLe27gxzHYGS2k6bL4sXj4hFKJAGvhTYgn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jrdhkgLx8sQp1HCHV64HJcKLkBnaAEFbVNLCcysZqLv6tc1H3CzePPwSFgnbYyAHFekvot65TGMGSqGQah9GPWC",
  "key1": "2hbpM6MCNDmo9wEreTWs2S9FhLUYcJ3zswecvL1xP7MAoCDhTjfTn2mfvnvnttCYy1r5oPQURqFDyFS38avC8jXF",
  "key2": "7S5S7Fb6TBXd1Jn2D2imZus2rSuNhz2ch78rWJFjv3QCtvEUqS2y2mZB1RzZ8bEuDv6SqG5Q4EVVQ2LoU2RmyZU",
  "key3": "2ADp6XTft3nUAhYqM3F3RVeeVLjtATFgykVCMb3p5AayH3myP6wuUutfuKP16R9C5v472TfbLsDhgYJkuj6xSYPs",
  "key4": "3MtyXpzp5eHpASs5uGA6XwxeJSyVosBmEgyjcFxbLw6DhcnjTTE4mianYeZwyBgSiFB3QqYt2kitwcLHvthqC87m",
  "key5": "2LFRtrp7uWPxY5VshoR7hoF187kfiuSZnLLBDzDa5Tbf6rCjtK5Z6sHqUW6QByGtvCEDwUD3NQ4ZwC2M2wWDyTuE",
  "key6": "2UmQNrVN21mMiurmA7uq8nJteyhyf7WiFKrpwKhduEhePbwctpd7ij5jhGqhvGod8MZxfdX3PitQSgbExtChTgQC",
  "key7": "5EtRBGqxmbSsSkk2Sa7QDWrbaRc1hLM2KHM489HtxikfmuBQM85YsrzG17HVk2VN7GSzhuBuH6wbddihafL9TYJh",
  "key8": "3QQLk5EL3B8giVGuDZTagjhYeE9BsWK36GYVqQ7jcauxiBe178cS2scVZcSa7HzHtUruKMSVpCmLfJaoJAXb2h4Z",
  "key9": "46wFcSjKsVd5nKQqCNCaQFfGFLMBfvms4QMh15X1vFPzXqW2anZwnJ5r9BgGVPXF6BzwT77XsUZsNoyd38FX1EV3",
  "key10": "4b4GCrrpABsrfyAFHyRBJpRNFPaaxgV8P9WSo84oDUgNSxXHaUUEDWyKEtTi3DjxEF8nEW5MvzwzCW783WogdiJ8",
  "key11": "4pMPJuEwAXn8Fg8MFCQ4zyfpPExftCHpR6knksnwh8Psabb6wE6UnWVTJcgC2gSVM8QDB2Np5CmxZRuWWiNAPUTu",
  "key12": "2Pi3fxR359WBDxMYa7pv6TU6SSntX6yFgfJAvWFm7NJWQjoZaBKWikaXvZsqYJG1N94nmtEoMAyCwjXumNcKbuGM",
  "key13": "4k4oDFU6M2GhgT1ncST7Uao9CrF7apEd6ZgZP4hZGnNPEmZ3VkJUAvhQ7pPSBa5ZVrZLyfTcy9HN614B2un7ktbc",
  "key14": "63X7DzpLgUg11w6VQg89XAhUuRSW9BustpWyYLNF1hWXG14rpgDfC3mCSZ9n6F7rNAhHByb2FkoVtFAnwCqdyL2z",
  "key15": "25pp4Nk3gvFUQSh8gHNfjSRUshVpJUxyR7Gj8vExHjtPvfwTtLNgygARk7oWf4bs9QBLEfErHUWHxzWyzZs4gBi6",
  "key16": "3kFvZRUZQK2cL3Xv8JE5ms58Y91tUNKj7W3L2CPGTZgGemZTPb5C7wmcFJAtMrQn4xwUzovNQBkzZqC9ang6rHaS",
  "key17": "3Uiqwf1kJq9tiA6QgUA3ZPCcMcHNQx8xTueaw7SPEvSxK39Y16U1gaxnHHcdvG9PrKmGMvNMsiBkMcnPQpR76Tnh",
  "key18": "26AKMoML5wv33Hkhbt1ZfYfRkmWCZiy5Gnu9qJpVpsKfTri6vLycmSqxvVNwwkUxDo5pTmwc88xa83VioufNHuLa",
  "key19": "493sagkJomwrzLBUe8XCGXf9WUVQAH8gQFBYWCou5TTCC1VAgZqkATNm38yGGJy1mPeb9oyRMtQgfwmpoVEbYf9o",
  "key20": "2BYGHJCz8bwbFPxZVzN1G3qzmSrYNDjwfUw48CM69bfRn9d9ifKh8M3c2HBtZa3ML3p43As8cUFJw7YpRDxiGS86",
  "key21": "26mW295b7xxdY69eqRHKfxpbed1k9CmSvH8gBHErnhgk7c3hQqaTVRc2AqYB4WLnNZ8hRgG3FL6brpLmdyAGqwMK",
  "key22": "2jPJEEsCX8K5yBuS774AuW4Xak4vxAdchwuP2yEWyU98d1fv1tqnPuVoZpyCV8cSAokCkjQcygqXmUf4821dyGrh",
  "key23": "2K4dG7HoHDGGHM76eLPJTN8BVXUUQR6V8Y2eKn5gPcW1mVW7cN2nxPe6W52nZ4E75dLJhYB5Jg4twcpV6u9wUemH",
  "key24": "J7XGv5ZLDTWfcr6EWpW8quJZXWKD4iUHM1wwiBtZTp6dNxhE7mJfC17P5YmeDcPajVtwM7iLRETv9NKP42hRLWX",
  "key25": "2EtUhwWEjAVWjrWSUdUck87hB5Jp9T1yaqixWtmW3kPJD2xpxfQWcEPGpfgqsiTWr1WswdCB6zAPoz8mHFmgJFkT",
  "key26": "4CDhYL29QrFL4qmAC3QNthwLBha3KeV7sNLbZ7DeR33Uoj6mHqtRVsRVf8gJe6XEx5BHBCyVZ4CP5Syhp8WtZn5F",
  "key27": "2CBdqXtTcQFhsL8njPs275XRKAfFbVm4krcPRkbc1YG6ULknjrjJDpdRy2KJDE6Kr49hALhzDB5ZgNw2unbhkpnq",
  "key28": "3s6Q792ACJjZ9nQBzGDr14Ygi6Z7eZXu1KPHJc6eeRrngGcgxtsrZbzSHS1ajSUwQGdvhLGcdM99ogMFGak9M3Qb",
  "key29": "XSk5D1VjNC51C2GntQnzH2z2jPPfDgw7QfQP9iB5vvruMnFA3fiGzFfZ3acHSeJ1XkPNhsDwbQrh4o9KyD3y3EA",
  "key30": "TTNYBMD7hv14m5zUa9FhhaHxchb9qKCtTSTZ7ME6tHasnSBuuahWTumwoJk9Eh8uG5RzeC7upGwNaDU3JaJxY7N",
  "key31": "rKAU5YmjmxeqrVLpHXi3XZRJco6ax4taix87mJqtVsWZgWMAy2E27oqUs6n3XCNXCLyHeJ931kLYnt6QPjdhEw1",
  "key32": "2CqHwvutprZaF6ZUvZpqBGs5h2N9tWkDiyUP6hKUbz2SgnYo1CoJUH4d6JQYuZEtXmv2v44ouBERp9S3ErRQTVzT",
  "key33": "4ALHzLVFh1YCWzKZnAYZvSfS9o3puKamzuGJcjUaxg8UM9Hp5tmYpMtRorHNjPiFqUjdoEtRm5QqG1YhPDhe5Wee",
  "key34": "2htQkzhma7oK7hUcyFYQc3XNoxLqQZuLMMpzjYuBmRFrKSzPgKsZuhCaySQFzBjVgskaCFXmhWZhkdX9oJwt3iBK",
  "key35": "4QiFa9V1D5CmSJipdg9uWYTo2zZVJrvAfMzH3mQjh1bbwS1ABxrPrgx7XYbF5Lujx5oVsVq2Uwavpq6e1azhMStv",
  "key36": "2fYjhif2RSwgDuTG5dLNPsQzpX1MQwKfQSCFLmWTCrQUAquRaUvxYdUVwLwUpzbfh5gFo3H2WH6BYJLkPgwMBjgM",
  "key37": "4ygeKYdCPuAFn5s9WTi5KacEpnDo8Sh3n9JGrJjFhVAKfgNJ5FN3WLoS4opaoFW6V2ze8DEqQ3oZBbtDia5LcEcD",
  "key38": "4VzEXw1jEhZgnLnA3kXhdMaL8hqukqvRnmz55RvKyEUhV17CHPuo5DVFB65EEdhrAWRSsSSC6BopAxLPWWiCwK1r",
  "key39": "4GyoF6TtJhhKzRWguFeaDgzFe5zqejFqdE5e18tcMaAo1uY1ZBCXUqnNc4AZDqbc16GU38nWaEicy3JQ2sph26s1",
  "key40": "4zNabH7B6c2ZcPpXCf9ZynfweaRkuhjNZcTPEA5pcjUfJdojsa4o7We8ptEvwdXJJ9e1zwD6Nnu7s11gjjVWfBQ3",
  "key41": "33cGirwcLgohVGRLwTciRXysCUSqkYTvidfj9CVwcNT3VZSR7qKC5xsbGykqqZJqPZ4A7D9sphSWgTz632jEok7s",
  "key42": "2DvbPEEkQNBYReQzyi8tn4L6cXBbUFaCSZ3Zj21m8iUEhNuAGQ9obTRGpCL1kAs6PkYUAh7qZ54ngxu8uG6yFXEW",
  "key43": "5C8qV8zk7DKSZuFJLRoyqXcokuvtZUHPtBi46h87t4fbYhm9LuVLHvwvuFf67t5DJK7tBM21jtW9vm35GNGZZvkL",
  "key44": "24doF4AsD3jxHeTG39tMyFJ8FojVRs4YRNV2AY2JuFNDsCPbhJUM8hVCNJRc5ZSDSMFU8dmACWx8drGH9bZP3KuU",
  "key45": "4ijxhEwNWUY376ED2Nd2RaPWo9HWhxoQBnnGuS62MtXTVtRRQciXrAbJs5CmiGpMF2JmirvHZSypbnN6h4yEjJzu",
  "key46": "4f5WVqkof9X2UuKhafU5Z8PYsfAFZZK7VRDDT9z3JnTCazDb1sLTr6dFjBafpLk5Gf5ngy2zcG1oXMBayV739djd",
  "key47": "2LESkZ5QDU8qCWxCZQh7sgm9czAZhSM71k8YagN7gWfjhnQ7VbufEnqNGozTPPDWuP1d235KHj2vrTkvYTxfHWVF"
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
