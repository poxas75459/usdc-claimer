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
    "36Xm3yrkG8SDyAupQNr3DqpqZd8DeyQUAFTGQUUjKjBGsAeNAfB4VJWrv3jPGMnEAMKALojJU1AWnX6tTur56n7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XLTRgo1wg1VTruWjgNk5mwpeZfFd1emYTMueWqHgS4gQb6YXpEPPiZjnq4sNyuWPDvoy3XRWKrJgE7jbhhMBz7p",
  "key1": "4Jubo5cP5M17fsXjbzUsqKEfYYN5XTj9wiRbXBFc4CzaKNhm5aQMCFXsNRju9LUpP7aodzGTm8TZUa2XRGsGLhwn",
  "key2": "5bp38utLGEbULxGaWj1Ha8eBcixnzWohgZrpZUhDDZnm89HpDiNeK9RPMcDwsTToy48CfUffcxkd2QnbVdDaa9eX",
  "key3": "o7T5ibKWznjqBMEvv4BXNvQLmkrjhb2Xr5pxiRZ9UH1z7fAC4DDXN3uZJ3g1rKhJBSL31jBtuNpsos7eaeefGff",
  "key4": "1hGrGdFJn3kuGheDr91DeHwy5s2brj21xUWoQYvLNpoppJwZsEkNB3Y9ffEUEWmNJi7KVGN7hGFb2nX3AudUSA9",
  "key5": "344awHAPRKjMjHTEF732pLwfUkD3hH2iqf7Gs7RM5AXpcAZZpG9x3MgnpdQ1crt6kfxV4eW9cUcQSdbYgEve5qJY",
  "key6": "4f8URFJoy4Tqs6wBxVRsGV1tCNeFH5WJXEcAWvyPxtboqkvFotk7ueu1vof1nWzRLeXQ3Yf4oZv5qmjprGu7gWUF",
  "key7": "5Kq3pkXSW4LrMPDP9SPEXmPAQPnyaeComipi5iN7HcMTY8HzvezZYDW5aUssMQF9yc79dkMBEUXFzDkGwHBDqWsq",
  "key8": "5PWbdmMbCSyzbhmzJtBijqAJ4JMLgZ1rSF3z8tpXzoFTyGqT8CMECS38MAxgXBeaHYg4ydx6Z7JrC4ngAbVyE8oP",
  "key9": "2eGuVX8NKG3L2ATCJxJnk2VXJCbhazSFBsyryrUQBfubzPDuwSVKDiXWCZyisGXFGHBg2CQpFuNxFxaun2YFrxSW",
  "key10": "2pSu6dzd3LPV6PfMaXVnyBvMzs3YzM4b7JoBQQYEsEjkDmAJ5oxfH1169gvz5nf79G55YFhjfjQ6Hz6bheEfW1ZJ",
  "key11": "DWvJ1gNwdUbzg5CY6HCeqWzyk387gDEtM32LtuNxVvDM8pcCmzFTAvW3HFzotDiuXGhP2qcggwUSzooLPB7CWAW",
  "key12": "4T6AndvCNPP7SW8HxxjbomzDNTrZgaxqmYfvZ9LjaN6PV92BhwW2NkzF9RuqZ8yvFyhEvvZ4KN2e2eKD8e6M88bb",
  "key13": "557xhNLGWbU7NRWucenMf5pLMM6MPYknFG7UbnBzoZ8mkoHQBRetDfer7SaMqNoqdc1UV1masCNNLj8U1vRk2asm",
  "key14": "4csXQNLpuRCYK8ZzoJfwZDD5AbPp3Vs4asRNa21k3LoYtKZfY12HASMWSeBLbMY3C6S2j7wGW5huWdTnnLkgW3nc",
  "key15": "58W2AE2yaBZF5kqyTQZEYtxdb6M94iuB8rWfbkHzXo8CD6hXQPn9xPLPm5yzj8127wiMNGfhQU7hj748hFd2Hy5X",
  "key16": "4DJGXQd3gz37piRzcJ3evDhHosmqdPZn2SDEBaMwocCzN8YUUXz7SowKV139dzmPUmfahSryodDji4DYYZp33LSZ",
  "key17": "4b5zjPUf9XM2Sf3TnC5fZKCuzfNkJJbDACwozfsWzdKxULusWgvzHmtLxSW7SpJ7GPWLUKB1qzRmjdv8H1UerJbd",
  "key18": "57mrxdYfxWEKZmZ2BEtstcKrSFFfg79EhTCG4NsUMqNrvChiCpHRSgo7EnMtAbBKfdAtbDssgx7TEU66f4pnNjqE",
  "key19": "3irhQ48v2v7x2RaLPYDa1xVTJJRc3vp4zjxvMojF7EWhSkbAFuvJtsnutSRWiAEYYLuXrz4YgY553EMRqMU5ebhk",
  "key20": "2CVJu34P6NwYNRthByGZApnVA6N5JKGu51GK2MnstRphLBwysvtReDdxNHy9n3eJvWMFPDmwPe7pPY8TrXkWvupC",
  "key21": "2DMrH3SGAYVPeuGRtwxnTxqckxdnCMA7uaQJxSmkUu6Qfe4rYqeJSCRV9XfS2HSGNzNVfAATbZvhm3rf8UcaWEPe",
  "key22": "2iVp6aBYboCWmUuavogMCToJfsVGmdygkEMgbm7r8DfhwNBQCWDZxMMA9Sn8KtZvs9fvHgDqimeUrntmPrFE2hZF",
  "key23": "5UsJHgWxkt5HDdp6qG4eqv3f7X4c4piRQsABHtkhgAtWoicw162cgLkBYTgQKjEpbkuNU3GGFuqEJprHyLrB5tJZ",
  "key24": "5J6Zig18uwCAduMP3iTh79JvLvzdYXwcoHCLo1mzSnaD7A7XApKi9KGd4reye4q1uXAQUbAF3s8SNGbCkTMzs8ev",
  "key25": "5AEShiPhvsEzTTSx5HYZxYXWA1Vsf6mK6gUNzbrEWEguVtuPQa8kQGNiHpJSbXMxQPGWKoCDFPi824GjHU3FzaG5",
  "key26": "3AjRvpijBT4QCLr5c3r7cqGveDbz3ypv97hxw4wgy9vGiRnCwfiCCfXwrrWNBSNC7nP1DvqKAAndu1MhMvH5FmzC",
  "key27": "Yj6oE3dH9teD8rwgCbqkAt1ombrMQkSZEP1ajW6KMFjXUew9YEcb36XXoAx63T4cN2gyVQCLVPnbx7sZ5KpSfFL",
  "key28": "3S3UrqrtQUbyhVKnfSGVNm863DYZFF2YzTTZuHnh2g8fWXVvQN8UUNoezsENGSwGikGd61s9twazsVE2snb5MCgh",
  "key29": "5F1pJbAGzXssdeWwKzgSSCZQeEgW2pEPjXtN5ypTi7yNhXucLYASNqnuWef2pu2SsFrM3dAWuweFTaPU5XBHtL2w",
  "key30": "2LLhV5ezyojHEjfrdLefWrnFFxCPyjhNB8ai3usCycBctYaQL6EscstJAhjvZ7Ve6A5xR5MNor513DAVwFnqXkpM",
  "key31": "6Nc2eps9HnVAEY4gAB21LTpMrSJ5UUtvJHYFGT7oPG3bqmpS1GrJPTxNk23ixDyu7b1FPKTdJG1qL3b1RT7RpMs",
  "key32": "4TXejnVuM1Ysjbpof2PxVUKC5v4chnSnCNdLhzHUfx36iyG2DfcthAnnYKCsXUiSyqQFn4KXWorEvxLMFVwuaSXw",
  "key33": "5DYJtzA97bV3MAf7VWtMQLA6soQ57xvQKGyp8PEfQyxyTJVQXjc2ie7aa75oCxZ8hWyjxAvPCRkd6VQ9b2MmWp1Y",
  "key34": "e5ThMgGYP1ZDaRs2u93BZuMqrq54xEyESx3RnaQtMTdJNLrV9t1Egw86r9htYBhSumXNkEXadmXwM3sS3kbdpJB",
  "key35": "268w7Tu9ibg3k3JxE2wePYYDgiVq1rLkiJwcYChVpYS2YdEsEAoXKcX6rgSzPycHj2WgpW3P4eosDHocKu6MiN7p",
  "key36": "4sNUpbg6jngT1jJLNBMpDtjrABkyExCWHh9hfjuBkAhzQFsUV1DyhX9394nE3UM15UVAhWL49n3w5Gt12CWeto9T",
  "key37": "5JxTQC56fQU8xAoXAGh6CUxgYyF7D65Qq9AyDExo2AryS2mg3HNiNDRqRNSrNBqYiLPbL9WvhqEX1hsD14ANKk5N"
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
