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
    "3YdSecQVN9GoJsjwC9Bi2eprs1Fy3jNzgCyVdpenpwKcY1ekiXyDeJ8FRFg9oahRPKiaXnDjgKroJVfnWR8pDB4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PcMPuhbTW29wKfx17rRMN2zU1g5oQ7sQ7Bfc4pLmMrB9rwadkimAuFhex2wFpCx4xKKvc2jEc62aCRjwxsoWFSf",
  "key1": "2pH4jNTAPV2ncDoE1GnLrdCq9cmqSfvo43FW1AivRx3unSvLgZdyqWA4qR7zCBRikiMePyrPtMoPGisxFU9GLPoF",
  "key2": "bceypZsGyEQrc1aBCGPFFUccw8pL34HLtSmXk88dbqWACEkuNZzkTxhXTu3uGcdUEyeCgdQJu31rr6nuZxBjAap",
  "key3": "2zERwA8vnQCLQR5yefg4UjuzqgDfRkFd15g3iRowME3jbrs2N8CC53CMiWQn4PG99qxoqZzyoC2afq85RD8bEJae",
  "key4": "2yrvDu4f3eF5h6qr8jYXxAbAHfi2feiX3ZMmozwJBLMiuiKvdzpjPTJnmGftxGY7rr8HoUERbQxFoTUWnyAckrcW",
  "key5": "4ckXRUb9J2WJgkNNYSzzEHugcLQPzMj5bURXEaf27fKJqDTFiiKs4oRmW3nfNFn8Pzps2yy7niECJXg3t4WngZZ7",
  "key6": "4ZMXewVkN7tcqnkwNdnFpZPKmzzEyFVp1gEqA97XpnUBiuuTjRzCajPV2SXS9jvhr3PeXaov2ra4CcWz8MQdHUmt",
  "key7": "5eyKFB6hVCeWRMTaMgknfh9NME3QwLQ1BMfqznr1V62ykEyPuozTDyjE7JfH4rfuSHFUdBqagyGoxy4og5bx4ZGF",
  "key8": "5VNrJzWzQzLTK1WmKFN4P46GU9iPaGvSkfKfviJ9BdA52GhDNzn9h2kZmRn41JFL1Ws7L9nZFPZG4wBNWMBKwQBV",
  "key9": "23WnNg1E8VF2bkQczF9iUHvh6H6d19dm4cL1jHmMpzRD98ZBFERK3F9SSw2mLi1XtAeKeAsxiWdZLyFJN9vDPc4T",
  "key10": "5Vea5FMJfgbVTJFVx8qsLs6BJZfmq9xZxNPPp2ckPzFCH4hSfTTVyn6xEW6MrFq9Ghgus7zE7kjWovk8Qag6UL13",
  "key11": "38ZKD1E6Y4JCX9e7ixZmrKJWJwSWbThkAv9FL6RanVajj3TZRC1rjLyww88dk3qpFaoL4yEBsWjyk4g3TP4Eas4R",
  "key12": "3yf648aUNuXGWEaA8wBQgBR3cjMZkjnXN1LmyqPqh43x8hSGqbwSMbYcKPhmgrfwJjfZS2kbmqPhNdzyoaBY9nwr",
  "key13": "2yaJuenkRJHxXSd3thHqBGzGBiP9QZRPTwTJ9HecviRoR2fga4GRSgPr5tYHWVpav58UzhoGCSSUaGeU5kKr7dHL",
  "key14": "2CwTEnVRPnumRYEJRkyoATcBb4CojA37WQQ52rStjo7qeJvHeSgS3yP31Vx2YX1sAr8Zdfc9WuksFo4iUzJyc66c",
  "key15": "3gGL3b5qj8NtQXVeHZjNUD46ErJRYiv29EV2ZfZ8LmSFLPYYfd7grz68oAWbuHarjPyPUs4xMAgH8ruv5E9MGvUF",
  "key16": "5Sj7QCSzrfVReVNtiJEwGNSAX9AQ1DqYwNE5LeGSt74RUw6tRxDRns43zGoGXvbEggdPF7YhFpL75FD7pJfDiXNR",
  "key17": "2jQUfEefGqRmURBzdTjHsu3FG4mRyNsr4HsbbPvBNyfygPzaww7WyxCAdHM5qwdNubxrpebhKYSQVFYLRDc4L8gb",
  "key18": "36NJB8bREfp2FmJ3ynSjzigdK7a74XhzyM7Np2cjZGN1obqx8prF7rGzCZAFhNNVH4iHsRzm3Qey5UrvDs3B4CJR",
  "key19": "uFkZqAanHVvUr1eqkLBiCFj5TQXukUBZ2vC3NJHCraLP5Lv6fsyJkwb4VN1Nxh7WYMDagsGBQejvEYJmTEs8DEx",
  "key20": "2N5vGMgoVsWqDkMbMXDUtJyPZo1vBHTP5vjzBysWG5ZFKv7JqEoUc3AGCNB57RUSDFUz77dg82NzijQCVTmuoK2A",
  "key21": "5pqqKyJVcEfvgG25Wgd3vxVJZ2vHp52hf17Nq7dno1XQ4P1BmYC8JFkRfs4V5HxdWR4MzCiBMjHY1fihGpi27qob",
  "key22": "5wcycqRGmTkAFDqxmDCV7NY5UUsLeoGFbmq1kuKc5cR17h7dJEwj1XPkUTRdHZY79afbCyFRyXRLnpHYhKtKaaeb",
  "key23": "4jSJ8P9taJMxWsajvcPLqw9u6X8wvicn8Nyu5DPXMkVmMLmoDdXeYi4mYw71d4zJ3j1i6AYLnTcP6jqNTYHCTMHB",
  "key24": "4wKBm5bxC3vTDdNEtQ5k7NWvH4mh7K8FFz8AfncWf1zhEUiqMw76X4DaWFkMMWDr9Yms2CWEe6UPKZSPjkKrfXut",
  "key25": "59BpbyfGCvXYshYjXifLyx1obo8z9Fb9jNNQZZGMgHgASsgPhiQZuS9rdhhqyxaHk7pGX56rHkvH8WHV1KCMpkef",
  "key26": "2CiFKwQdr8zQxE7mqX3qsDofpV6Sa8A2c3ar4erC2Z47JvJd25Z9DxxeeXH3hwrWLEEbY1TdKqfKA3yXppgsaU1V",
  "key27": "3p4PHtjZJ1uoUi4kPNTTP2hPBEKb6cRrK87YsQBAs4K5GnKAAWCgu6o5TbVAhbnTFW216k1eJDuaCh7qLjzTdZAa",
  "key28": "2rV1BMgjJMbBGipC3rrzW581TMbtQ1Wg58zuinaYyfaYH4QmLwS1ADEt1LSpLu738qdj5orppWmqvL3VDfFtHLWP",
  "key29": "5DJwrhCjB2r6xHNsA5duXk522Qzjt5YpweWe6NeK2L8syTZyw9RgPAdSiFJA4Bxf3fxUWWKn9Efp5JCpxdqd5DdF",
  "key30": "5jUc8xLeWEB8pX5qtpkuvUqoR2FBS4pXdfvr9t3f9DvYyM41HFRiPE3R75SGmrsiBQDvFtpykarTbrK9EcCMzLzy",
  "key31": "3tUKwtDWYjKfLepj5umbagMD2hXEEjdEwv3CafNzLMctSDbz6VvzLjsYXefS2pZZ6si89ZtiXqdUAbSSyeh1H5Nc",
  "key32": "4FWoqvkmusqbwvQfr8HTY26sU7ysC6vaSWi4vp6SCxapFXV1SBoXqfPz4RtzhSbCnEavkE28N4V6X1RHpQAxQM8n",
  "key33": "4t9DVapAnnpfRZ4ARr4keqrrHHu4u7RcQ19oCXBziwKMosTsz9Y8LGeccCQQ7p3TrpcRRd2Hj1HNYYDcqfpfjhzm",
  "key34": "exKzCtkL9mqMQDA9cKY5yqW1bRu8eC173eBLbQENvHmZ2xMvkYc5qNF1SVfirWmLKaxh8tGwWSyYccgtMbxzafz",
  "key35": "2jh2tjTpLJUaWHT22SA9w4ahRqEbRc7nVhvEDMWDH79FzH9pvucDFDx7TBAdLpPRezpDgzhkc92hD9WgwK1kp8rE",
  "key36": "5WggyJtYKL9U44FsPNfEV92oDtg9zPNTSaBWS3HrKXvq4LZF3uvRzwE9skrYvpcmZATVu59fm4L9cZ4pjaEnTqcG"
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
