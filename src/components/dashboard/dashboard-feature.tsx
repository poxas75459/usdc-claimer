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
    "3Dagb65MWL8iLgrWLX1m4oE4CoLx9WDGLuk7hjZnVYaZVMVmx3vfkRHt1yDXst89frqLBnGjnRVoGndhivHxgxW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HLnxCGPHggEZF7FMD5nYK91uAwfTu59h2S3XzXtgfLWWKZ4QqNBFsB4f7WnCu1Tqt7sJ5AepELF9jfhkHJbL2vD",
  "key1": "5iurwa16ECJgTbTvSeUebLjU3Q7nH42CMeNkCHf8fB3KM2r4GTH5qWAn85d1nNjzZtVUy9WnhcCMBhojZqHdqysJ",
  "key2": "yaiczEEnHtmSMowRsQwr1SJiM2ednaYyLADKvVG66VrwJx2E2e29FYWugktitsLDTiXdRC5RZSfZ8bXRWJwU9fU",
  "key3": "3g12E18eXJ7h3Xc8t5aZPJX3Z4gTRPWcnHBkxjxztboyXAjjSfnJYedt8st22sd8F9XLbqUvt56Q212yZmSJpmYg",
  "key4": "4uD3f8uQLQ84vTbY4PyLdgZQmytDgDsPwnnxREsuqCc4qVR1ykovg9WB2ThwqcVZvscRXB4yAFAH3DK2fwQH53UK",
  "key5": "vi6GvLNFv3NAiCxoRJmcWrHNr1pWHCfXMLtsiS6HGyuMcp5hqYGrs8yezW8tw6TSe1r2s81jFRxgYsikxPXWxfF",
  "key6": "2YXJPK4Pm8CLb4GHGAaXChAxE2bhfRFqJQsmyPo3KWFnaMq6X7jhocKacktQHTVqXPSXo19H7PMDddM8A7Rdk5sR",
  "key7": "2rFUem8JodGghVxEuK3JJbtraCVG2bK62aUty1xdDrw7XVHSCaoBfc9RFjTtM1URv2TMKs6mL8WPuHmgE4dV9E6C",
  "key8": "3bvwdSpPZ4AejA2poEFx2YSBypJVFpAaQUewo8947f6YjMFPFFNTGKirRgGpPuBr9rjxir9QnU9jJVGyQrbdtoCK",
  "key9": "2z3dxh6HyGJvGLiVr3YgmMEa3nQyRtHJrJ1ZSKZi9Hb1JLccz9zgBq2JbosT9karZpup92vXnxLuunXZPFzeCMC3",
  "key10": "2pt6goxdnfVS8Gc2JEjkCQU5pMGAR8sZkBNYDWzw9quqENGQgr21UvHSpAHsLk8aVuoHmTF4U9Y5NXYfZd6NviT2",
  "key11": "jCwNT31Sfs5XhAwWzzRgVN5mEHd6he2EzPW3uLvCnzRJBoaYz7yzBktqCdm1wH7rSbavYt718amnjTN7eTyQNHu",
  "key12": "3qq6AMGfvojY3Tv16gXq4CJjwhM3wk96654c5xW4L3dgbYg5nAYVc7U6gPV1SkowWSzPbpD1oVKGt3uDgS2xrCgb",
  "key13": "5WK8pH38efa6pQ4BTQPeFjqxPjsf5U2AsAiQEypbyTpqJ6RHoJ3xvagQ5etWyfZshZMxLSvjCGhdG6L49bmyZyCj",
  "key14": "kUWDzihxUEmj893pQsmbVdSbZH6esRb7XthpyVnRjA7ZuDK6yP3dsgGhMfbaUZsRMN7aDsGNEdoZy7UfgzYAjYk",
  "key15": "4N6Fu2dARj5NEBSiy9C6SZhTLWdY5f79Gc1jYsDn9cGApciXfb6ZapLQvQfbuVUfba7ZZjGXbn2uggiwjPpXvDAD",
  "key16": "5wzRZJCb66Lzyi59jV7fSStXvuGG7k7JPw1sh5BtRwAnDM5PiYbnzRJEct2EisGKzYe67xaB7kP839USr8UopqKX",
  "key17": "3f7UbxMSzK25D3WNhUAf3b7VxePUAXrPk1Tqe4KuL8RxwGLmy6RiKjCnuyxEHizg2hnMbWpvVCwrauyvVusUAzMs",
  "key18": "ToPUM65Cvi4PB3YgGgLFQtoSJhvmjvrNeoBK74Kh55B1M8Gg9TcHafYffBgZZjGMoxHKYxgnCcsGr8Z1CcJepqN",
  "key19": "5vjTEn4KzaB1mCY7uVDDHw3yY9D8AdrokPagstLHxZBDDFew6SPMJsJJSEm5ZgJg47mQBt4ZQGNJt2u6aeqxmbaA",
  "key20": "4aRmjuYq9duhkzrjUKB5BAwb5RrMSKbGWiwSpvDPkor6JmUmPfneSEwNaXStqFXyTvyVq45UcMgnB1wUUSYCoybE",
  "key21": "4B9VsqtpCj6fTWcGVWCb4Y8eT2fSsEYxyzdvroKUEzzJqLReRASi4dHt6R77pgt24NGqwUh6VCoKQYrpw86XAAib",
  "key22": "5ofbcfvN8Vuc3sQMh87pgjBgQgvn4eChWYGqB6VKDENgfctjRyJZR9o1GBWLfvb7MsRC8sHvLrMJ3oMAf8K2c48r",
  "key23": "5mVx9LrXLQEgbK15AfbtbERuQB619JaTmHB45LwjZ7a375vrxe9xBJ8R1y3yVG18a2fapXVQ9qTkPA95bM3AYRfZ",
  "key24": "26k3avhDKVMhT2zMu96pkVQ2CejBGTYW7sDe2xqcog2xYxyWafQPr1s6Svh8KGdVBFJqHAcWanYgFYN9PrKmS56z",
  "key25": "5RXCwaVgU8NqwRrHLsgYkebt3wVj8RCHRuWated3XnYQ7yMmRBPKi38zzxwUtjKgMGojpifMNzP38XbqPtq3LnJx",
  "key26": "fasEcruueSvD9pwS7Jk3Lj3f4WHrw4Cz29BVcxp4SVZhoUuwaNdeBzaxhxTuN5n5iBeJwP4pPsERZV5tRYGJWJN",
  "key27": "3U7SF5RuDisC9wSQd1V19SH89M8zKuiWAeUwZgXVpyLP5PeiayyqRJRz2uDR25d7Dmbik2CqyftumJdgWyLm6un",
  "key28": "4NDvpbFdbgW5RVta5HqmZEdaNRe1DKVoUU8U1U7WgokMitvyYymjEuu5ndVfg1jPZ3S1YYKuk8PdtJXpuoohHoJM",
  "key29": "4mBBcf4BJrSQ8jtTitafGs9NK829hsht34vujuPyDe8d1HgwenaiLV2bZ7zFDMZRC6NMLqXSB4NBRXJCE6QXD2rj",
  "key30": "85Kz1qiyoHT29h2JebbXUPJg8nk9fciqhwdStppsSVrtnJcWS7YZb9uCbeCDgwQMZ6gGYWthE1KYUky49vXbd3y",
  "key31": "3k6s4KbhT2RodJbSkfhLD222Wf3pnBFjLuXkfBK7c1viSyQTgtJ4cEF1CW4BLtSD537zKMLfK3bfiga5Bm322Bsf",
  "key32": "4h5SbDvqzPYLQmYjYNFYLHK8QpWiY2fMtSxFf4uwJ37764qYL36D14L8z54p9Df8hAzwVvCkGuYVBsX6yQB4P9BP",
  "key33": "Qf4pbuyrZnz7SNVBXvxYngNYjpMiy2gWaYUMnoDWNukJd9m5Wj3mWodA2znsJP5zMPae5VDm4gfgTvov1e9DbCa",
  "key34": "42bF6PpKNfPiYSqp6pWMs3k3GeV731evTP6jEihwTLBFL57dNa1X6ULQWTSJRUyBxGWwcM1aTgHQCdG5VLtASodk",
  "key35": "5VCsnSvmFB3JsFtx931ea8xP21GLAqHoP3hTJWQpsrnS8wpihYgmECTCrXEqNyZz3J42WwNoqSZD4HVCh7K3UEVS",
  "key36": "gnDsbetYYw1dukKdadjnpxz9zyJYQbdvZcz6VcAVDfHDzeza1cs1ZEz3DX5e38tNuAVq7Ts7fXED12tagLG4aKn",
  "key37": "2Y9JVLoErLkd2Kvcm2WKp7qdpYCbnhDkSbFqbzxTgv2sWrUhWmMzHeEovxHEiZAvye6CEcRrBtfMpLj6j8t1q5pu",
  "key38": "57AWDS9fnsK6zzx4bxK68Q2cfGvXvDUkHzeDYtzmYsvdw3HHvuCr6cQNueJpmpX7LYv62ZpYzpLdnp4jsCMwqdUx",
  "key39": "5UJ3QHBzHGq57UcXXhKfYWYEkVexyegZGHDfLWnTH2qpg7JYtLMDjASYWP8B9RTtiAQSA5YQcxo9rS7ffSTPnZwc",
  "key40": "pL1ttcHNHSPSbv79BoNXVtLypU5cP6EGmCCFGowEtMtHfJVM1vgTMaPDPUQZQjeazVe4mJboLC6fE14rED1A7vG",
  "key41": "2jxGYaAtt1BAfCF1jS1FdYVwMBPaqDgGwMZwTu55XzhPwckTx24eSuBpqctEV2iu8ynuZ18pZdnrhuHbke2CSsF8",
  "key42": "54Ha6Qyyk75LMmr2V78SEWkpgULEwCtNi3s9SngQa3n8rqZdCp3YXqN3mhfNxe6F4GqwxtiD1g3QrDMhmwJdoYca",
  "key43": "4XBsNRs5k8aamBMfwCbHzqKsbDfLMYdidyBVYsXq8oZReB5CwqZ9dR2bDzCK8w5Qsmx2MRRcmwN47YoTaNaWVwFJ",
  "key44": "3mbDS2wv3K3jhCkeRctQ7XHohJuNLrUBUwHUUzjcQ3aHE1D2YPewoWFuWVa9pZgYpJitMZGGNSqVNLC9ccqC8Kjt",
  "key45": "3wjWvMWSUmvbbXFEJFeWA33XDPDkTcCFGSNb5Lo61swEsPgewNMTKyWawYjKRdursH2aMWcuqfSQfxYvGTqXyvsP",
  "key46": "2CvNNsmMrSxZEBgQx7CkYCq9VChEL9ZJtUWRR8hhLH6vBS76s668YE3KEkGX3YYGwvvZ81xoAyMFbn4LFgWsUezn",
  "key47": "h9uT2xqiS5Uy2vbTj2RFPkoUXFrf45Bi4dvo29y1H1PZ5LPfPtS3PcwsNY9437tqijxRfoux2ZNH98G3MPW7LxC",
  "key48": "3xzo6P6fa86vk4jMUzYUe5wsbSj97fM9zDZxvB8Gjeuh9GYCZWSjbS1D4ZVT3mi8vodq4cLVHNifUFvigMZQhbMY",
  "key49": "VyqoZ6ir4DZv3bcLB6UbdMVyzCjLojgMEfwnfdyNBM8TZeTEHtMiZfvdTTAWkq63ZZDJHRt6PsKDo8VnAVNPD6D"
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
