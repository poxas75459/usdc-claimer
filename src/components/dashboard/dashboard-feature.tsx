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
    "4rMcN9yLFfyTcXq1yhqiKWcAvHFxmf93a3iSWc16pguxq1QTiDP8ncpPrJ8FP847wURTe7LqLDgXwEhVEFkXTCRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "314zwpz5YLGXgRPHvpuoUdgzx8ukC3631zqGo7fZ1hUCtUAsXCdRx6MGLfFQKLQWp71yCgLKcZsokofgyExGmxML",
  "key1": "255BeXy2ACPAQp66hun2dgQXhrxCeoU6Aeqth3CwaQNnmfvyiHY83DJZnHrb7C6aM97gmuFKEP4whVGZ7pyw6MUG",
  "key2": "4cCfrmX2eqjZeb5iaPysQdVnBG6jbiZa11naUteDRQCV5V6cwQMegox2CXh64LHaxWnjagkWHuDWWekJovArDt6V",
  "key3": "2NZcrPzb3Twjh7etinafVZqXsnwkAY9aLa26D54B7WxLyM3BgFyiQdrd9t7NhwdXyEVbmvLYXpd3rbHH8dy9i6vj",
  "key4": "5TmLoG4QoJekpff7PSsjcWWzc5hvXHQAahFs5hxc4NJDPmpNgtUDYZkY8CgdzhKbpq7mP3hCTJPSUNWEjUx2c8q6",
  "key5": "3SkqeBGFTpLDTyDF2NNzFVxzxtNCP5pwPETq2Mc2Cyk6AgYpaHZKHKfBfDFMHphyN9XtHbXQYmt2SAUu4rCSrDB2",
  "key6": "3mgA7WTKGHkZ5bVx9KgLH4D3LzjegQWGd6c3R8HiVYDkqg5LZYMibJcuXn2isEH6TF2Nbj6YkrJA4GyfUDS2afsx",
  "key7": "2x34tNh7i5fiHSnSHXK4TC5kK2jgkQjM8xhNHUVWTjb5pfZzvczUJYQxdDjQFtMYtJPgaenLeS7a1ZoFs6pGFEwY",
  "key8": "4q1Fm5QQyqtXQAwEnU9p6GoWCz4W8QKNro3bunpT7Y6DKSLNR6jNp8nRY7CrQUjU94L6kwuQvWULJD4M2z2eLfjL",
  "key9": "cYNV9CRW4mDB6717ngoTgsa78FKkEB3yxyXj2WAZbSUdESRrrpNhj5vRAk1tfJrfE9uL7tatd1jgeV4n6ywNaAE",
  "key10": "3GFodDgBVzdMwsvXDdXSSX7w8RXNsXyYhwjNYD2V6weAfHarcYv36qHU2BKVoah7Lyxva8r1iPAEE5zP7qqTsWMd",
  "key11": "5kgnkEVM4CY2Jt5h117x9fYAJqZeQyyiWg856LEy7YUgrMVLUVf91SLgfgSrkYWvLeQTmyzyrD8qaZDyRGL2aWWi",
  "key12": "9G6aguvBwEw9PFGLVj8ik85oHHz3omEX9Zq4VdJL3qJJHbNioHWvwbwdxTUE7E4Jfo7GNJzQzRhXG3x6empnaRu",
  "key13": "3aYKjrziLut88vT2yTUCaKvg22wB91CXpW7axKp9F4hfsGueXmWoWmUitdYPsY9MtpcBExpVQMB3JwsvcZNugytk",
  "key14": "3HAfS81mBCz45i35X2cff86evxoHi4yczKo9Gx1KXfyVf18NvcHro6Jt3vj6W3FmuVv2CAeqkVyAWutVGfL4xnFg",
  "key15": "4mQFeZWkeetvGhC7o7K8X4NaqTHJGdSJZcatK5CjaJMHY8PLcsjoP1DeCmdAR8FtvPfsfvcxs92oUCthX4X47P3x",
  "key16": "4pZt5bBNDjH24tfXa7Ue6woD7drQR24GDXPcCcKNuq4KJJXAwRJ27ZyskHr3LgYQM8GkGxYe4pmJsqRt1HgpHqmA",
  "key17": "3TwGwo36kZGQGG9njwKdjt9xGgzkD4YwUESBK9Gieck1NbnLuytiH3oxML6npiooNE5VrNqDr5tR1JYGz8UbrVU8",
  "key18": "2ExQkMo7RWb33AfY8umxxU3jb9DQqdssFWKjh9mLrnye9CZWJhKeYNXK4S5KX42uja9BtpFYnj6oScVU7AiBcSH7",
  "key19": "2CncuS45YX4namhZaeiA8TejhZKcTU57A6D64WdJQU1mDJCxkriQK5GKM9TkixNYK5zUx7KqAd7XTP81Go9WQ2zM",
  "key20": "3YfwW1TLzvvDmUoCRfV2WWEqLFiv1eNHpRHMUhTFtoVbDgxJGAzbtpjcJwyd5Tdt3QfhcxRc6kL848kzGqV66tip",
  "key21": "3fUC4d7StyokTHS1L36v2WJDKA4rR1oSdqtYxwt689n8a4NN6vm3EcmCFF3AffpXfTuuAnZwB6YaGpc4Tb6N6L99",
  "key22": "3AL6opjDAX2jZWm9L1qc14nGBDThJ54BwnA5oZ2yZYBZoVdp4HmiKwMZoAdrE7ZbZ3VaLNhL7J6G6y5xGJQxYycJ",
  "key23": "3igKr8FCQxFBCtTit6ccA7ebnSkJ5djYRKJi5ST26eoFYug6cUaBhAJN9h2xboQMFb29yHqMNuZ5RcoB45achrZv",
  "key24": "5MdPVG82KWumwKyQH2VQ5XgN1XhxuBG4TNZAxes97uryB4nYsr17enuPRm7Sky5q9Y5NazVK812k1xJcLwZ9xeT8",
  "key25": "2Lqu145h3rDkvgiLTVBrJfKx49BupRDWkZpSuXPLgbLpHnmPwmA9MqAn8LJtYfqbSQzAj1jviLVjN2SHrtLWtiLZ",
  "key26": "3411Y6jTZKaeDt9CobsvCw9bRFGQLSQ2HDZCpiwkDWA8yPcH6dZJvjVGALP5YVvuuG23YKEDbftQaa71yRoYt3CK",
  "key27": "2WoWgVDAY4hHphf2crM2dovuen9aMFwzjgVUDu4L2EVQkaKD1SsGd76sojy1pKEDuizqVi5mePKvVNaTwfX2fDUN",
  "key28": "65WuCcu34cVJuqy4UGKNLTPvKeksTywgpLgr4n8w5pmKctkzmWzVgUJonSNa5ZPycNDMDEnbLDUY9Bp1KW5dkjh",
  "key29": "4waP5x6jiG121Bv2RNrGPNEXuH64tDAPrCRgxYuKVDi1h7bV3UR1W22BgYibsY5kY6ebWr2yeVhbTXWS6gfyhBk4",
  "key30": "62AvsaxcD9hwVngjPYuJayqQrdggxW29kGYDq3N7TAN3o5GNQpZnBD3YeMP3vqJfRsCGUwvzMx594xSXKK9Poxgm",
  "key31": "28iQBc63cfmz6DF93bLtAcyi5AjM5NZ1S5Gke6DGcWn9efRdkCda7XLNjFeFNduW9HLwCQ9bgq3vjXYxYx3Zet5y",
  "key32": "2ppHiQ1BqgVsBxfrZwufmC1J9w6wG7KNtvWPkAxMPkgtm78JSqEkeCmjaGdyBc3K3m1zRXPHVsCiENq4Fiievgvy",
  "key33": "eWsJQ1gzw6z1XWw6DRqAYEB7PzkwFe6MX3CKprweXWXatkA1TCwSDuRCsBj9NxQYyns792rLZxhBgz79cXVTeLs",
  "key34": "5Ty2VQ5NwJ9cuFkdmMgtJBc7PJZfQgonTrEDu6tNkFbRH5LwgkPHzUFHDnjptTgMNnYvNCP41C5KHQPDuXWzrS2u",
  "key35": "52sEDtH4yo2mYm9APS2mq2yNt773KseTJgHN8x7NDYF7YenhngAzVEqD2C7LfVtrkknnX8YSTmcexpG8rBP5wfBx",
  "key36": "4WeDDJSFE8Fo2DoXoSXqnrw1kihfghjfRv991JAYsfpny5VodCpQzPPzdkXc5wstwED5JqkG3uVhUeabedaDu8Y3",
  "key37": "3LLFBzahmtmcbLzCjVxKqzUtBvsj9JFmm5BjXck8mHh9Qz4111W55BZjgq5asNBddFjb2SfbZRLtPu7r1qxnCEu7",
  "key38": "eF8pktCScUuvUGNDJbkDx78sVT77yfdSRjwbwM5pwYsG8FEBPsySjNphfmjh8QNo5MgrCxTM38w9WgnCS6MsDoU",
  "key39": "5w19Aj7v9QFiXToDJgwdbS7Lw9gbwqJRurhW7HrS8oCEqTzULCmqRHAXGoY9BpFNzPi5AXUvE2KBDyyQv3TGgVoy",
  "key40": "49yARW6QD2uN2VqunxWtEVmfsJhUb1d8XmuF4RifxasKEF6rDNLWmd1aNFdvbLpJ73SnzETQsNpZHP7vj9LjDqqN",
  "key41": "3YXyq5Vo2WLBPoMrNmrKpCN9hpV8A6gB7A75VimqB59nWUhqhTTMTXBq6M3WwyebkXkzbjwBQMperA84NBh42nZF",
  "key42": "5irMQDqgaM4RX1uM9Aa6gomcXyX87bN8QMu5NeXMrMC5fj3QAFQDbGnrwd2GYTdUGFyaLBiWxrD3otKnRR2XXsUN",
  "key43": "2kvc1RWNWsHdZfXA4yteSkAXyCNdwyMfFHuqvKGjvYBQHQFjMwYnMPi1fXVDVBKRZHtSYU8GUPSmBD8WGDrGEPSZ",
  "key44": "3A8p69Ftn6ePFerNxWLyDfGpx8126m5qyDUXXMbohLxd9UZ2whMP6X7pMMxNLD1VPZdrFVXdBHBgaw2S871B41JZ"
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
