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
    "2HnxedKo83PdjnrkgFntCpHTXsjjihcGTZ3Pn9cmU4zxzM7dxbGnPDc5nyqHfw7HNXs9iXoqSQfKCuSaXkqRoK46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G7bVup3DvSCjEk7rC8zJRtH6qacdyjvBcVW2tQNrXadCjqoDQesXL8eSw8pVYkWmBQ7PvJi969XFVgvS6gY8SWU",
  "key1": "64ng3Uw8WV3UWMjDr7Vm21Ltxet7RnRRni6DkKuUxPWVsm2si9nHzjZb4kB6PDtfB6teKhA7jxzR65wdFQvRiK5N",
  "key2": "2hYRecicBncdEaA2XvM9NfkUmP6nH1QwL3TLevQQ1uxFKwVBRCCAtprZENC1Bbv8K7qy9t62bARXqpzhxQM2zUt3",
  "key3": "3DwvtXZYBWgEokSCDaVtjVoTFCYKUdEMnz6Sa9APQWLjAMEtKQ7v4WBSz6RkgyV3KBifNJWWeHTyXsin3HaTfh6Z",
  "key4": "aGGVccJykhGSXXjMUkaZtCtjCmV42DafEU8PaxMQ59f8LLVETFQo6gAHP87U1ZL7dfNdPLqp3h3ga4dB38MbWun",
  "key5": "3aMMLkh968MjfHiSkc2mQXTnad3g2t3xi9xHRroPZxG7RKTZ1adHrVjHWghD68Dugv4327gJZ74WNigLUTxg5xYL",
  "key6": "53dCGeETdDJz7Z4Y5EzYjCDWWJMDXbmZJTKFhZWhxFSmkUbvBmnBZKZvrqwsgsuVf9y7NVM6vaBMxfLQhtAC96jB",
  "key7": "56izbEE8cKxuZc2K9AgfFH6FkSxiwxeKFrnb3hsrCVCfJxLqkHwrk28SNmz8af2P6GR9NphtAkRdV3U6LYd3i2wU",
  "key8": "38BJyJ83mzbYAwgn9WUcC72vzeTSFJsgJ3SGaicQegUqZFYKDqD8WrFi5bag3MAi3Byg1AuRnafoCwF9vV4LQ4Zn",
  "key9": "4vexNX3Gc95B4zhoizK1hx9BeG8fSUq1bDPx9d1ocwSFhnmMgzkcYD33idsP5SZrLdnatt6UHv6bQx7oQV7fceaz",
  "key10": "64CoBcFaWKFM1FYZ3s51iv6W4Fp5XPoM5nE8q5P6KzFemMWMVyYVP6t1SZsbMh6KZkq3yhqeTfRJztAjiMGoX3hZ",
  "key11": "2sYtF287r5LdiNxgnoKZysGhc57pp7R5RL28fm5qmxLw6TDubm4i1zWkX4Ga13noYWwW3qyuubw64WStbyhroArp",
  "key12": "44duuZzZvK6um9xfVNtoVR9gFkZdrENuBtTbvx9RTR9X6hX6veMeZWeJSpWw15DtVQSy6XBDM5LdkuAc8tJWRCPo",
  "key13": "5cswZVAaXoNizi4a9GspvRLWdEc9ZGnHYyf4FBbzwUMPifhHAnSM4RgX12sFbcoTdwoLu8QadCnN66rB4rZ5HLMC",
  "key14": "2N4F6JDnh1V8xMkXWuNNLHdUNocsrHqXn8ugkxHGgoQPcudbvDvKG5wEwqZvdty1w6amVGJpWTc8seszU6AbaCpc",
  "key15": "58mzNMJh651nk1GLQo4DBNX5owm4mkatQSgkbzgZAp6rtmapoSnajupReocWycAuK6DQRxFhWjzmZJxbsyvwNRvF",
  "key16": "JHv2KWCLYZioqQNFDLwRuXzQ7sAEEZX3uvipg4wqSyDASbihsZdYymyYKKC3GdhmN9Y5F5bh2K4m8P6YU7CSRgi",
  "key17": "65vFdj1udXN2R5Jn1DEbayncXTdiLLo9gdPbzuxJxXKXa4o9CBPeGvqB8iZE6NDL8dfoowvcH5Bo2GrkriC1n7mS",
  "key18": "5VhEb6WYnM352Ef2PYKCWvbbbaDRGUeJSALCqAgcUBUR7Nz1d3saWM1Uy35wkM7xzxxhNGfZpdyxZZZzZJJbw9b8",
  "key19": "4wXUtJmfnLp8DUPcU4bnquVgnNZ1RXVYVQJhkkpGZkYsqPbf2ypcFSpX9LfzSQBWMApeEPHwWmHFDaiAGhLzRqob",
  "key20": "4UrpzqwZbZt8uSGDhXRfrpoddVA5HSW6Jbww6Z132oLSktAxhaLH9dh2ViTYEpHhM4fJ4UYEibmtTojyBDMxDXga",
  "key21": "2p6s2qSi2Mun6Rjz55SUCjG1TZYAX1sNQUds9sMqzFsgbUFX5PEDguw57nk4NKFtrJMXpaA497grps539dpbBJEB",
  "key22": "frXvhnNcYvDTVh75p3brCqa5WafnnZhPu6iLZzGNvNs3gpThMixc5iKRTaNaYUSwaTG8B3NynJtkubP9xRuBYFs",
  "key23": "35EmoVU3HoCmn4ieeFizBhrT1Ae7cYywuQX8iY37wzPKq9gN1UVA4XxonCjRyFWE1PHtp44fPPJcxLHyUW9gtsXA",
  "key24": "UoJ2c3woKbk4QKFwhpqC9LimBRZzMZrmFpXNn4i9wGgcGpJ32UXfbJ8tBVz3QsfN9FwTwa19UQzZf5pNkGbNJZi",
  "key25": "215a9Bfvh3TUE71V8RacvLQZeKNVpvXbKrj9tTBRjzK85bnBbVEY4E8ucTVWPPLnid8wBGEXR4JDpHEUgA3a1psg",
  "key26": "6Dc1sXFcoLcHU6JpZJz6CjamGtqQUGkyseywYCrQVbLSFhUVpYv5NpSGqoaXvG2L1rWGwEPZnBhBunsPGfPJUdZ",
  "key27": "2sXfBcWj4roqM4uGCYoYoVjwZ1bCqCWvzZ573KdRUqSP6kR7CHqGrbnmVZhpdzW8UdJSdEDefKfbmMZVrmqQDvS2",
  "key28": "4CSU1pM6HwCKiJfSEBtwYBGpzJ6wdWFrQSAEXZYXTBUe13btyrRVirygVW9UU4VJ8PaDiFZV1PY1aQ8RQYbMcMDd",
  "key29": "5PPx6fuMcAFHFMhcCRa594ihKh3TN1rBexxwZxz6qA71ANF5joCCrE6TTJSgnazq3H2DdFvf4xTsaSfwYM8kA76P",
  "key30": "n6U73rUHNMSd7h6DsR1m39j6dwUyf1GXHpzVrroNyBr5JxLQGQMTpnVXLAViZ4SBF6xHXirT7zYuGN8KyrATgvU",
  "key31": "5vbxCgV6n7BsbdirL2gVGBK7xAq1bmqZ8hZ3FqbmvYp4PzeTWvUd2YjM6ikk9CyECw6ovSVNySjmfVzvHsaa9eqM",
  "key32": "3mLf91ohzBukCv3kjo32XYUPvLA5mKiKc6tRk3Fw8NQ1ZCk516W46CEQE3dw3MRBQoJ4sUf76C8XcFNx6GGw6aU",
  "key33": "H3Ah5biq6tu3ewsnekdyKtsX6pqVXaKXsPMFeLY3PVRfRu8VVUnmbnTJcjeyMDosQgrZfnyAUQJxc2RYtBkwHxi",
  "key34": "4KxnUG7ftrfJJTtxm9LZrNKwQN6EdMvxFt4BMifrrLkUDQw5HAK6HzELCZwtysudZxbFbjoyZXppbt32aEnNn7yX",
  "key35": "2w5zPhMybZ4PWzaeqK7T9tzmvCAW67XM6e2S4AWuVHXTnrRtGtWH2PMDJ2cyF1RdjXPJxd8YwHdLiPHU4g1WnJ9N",
  "key36": "5aYqX9ekRMswhnm2dVFkFTGNuYGprkL1YyP6iygrUKEYFoFV79m2YuJskb5fznFkfe3FhEYosPD1Xw2tp4wfGfWE",
  "key37": "4SBDir9bw2wswDNpB29PgjAX1dydNg3TpTZ2Xx13q4kw88ZjrTprXLaMARjML9WGBs4RA6dEyzTvSbTvC7N9fE4p",
  "key38": "52czAP282GjYgXZDp2fwUMWi2niguShA4HUT32ShzM3tu3jwuYxKYWjZnLzakst5L7mjCAsRJrpAWfcy8nSpu1au",
  "key39": "53YPCGuKvkjSa89Ncxs1HQtPMRdoUcBfkr5ZTXK1fwr49B2iP8EabpKsY9oWTt1gdbwjjPX2BL5knUqJuimora5e",
  "key40": "4ZBKxTFsdQPTsX6QjgiUqJas9Jppafv6tDpJMWqbn3efWp7ADyzLBtULBqEmPWHDCxdzf1gRnNieysATupUCTf9n",
  "key41": "4DjAFaBgxPcwNNwXxajHYp2kp2ius47eViFBEx3gFnLbDFBGTBbJkkco4mg1KnhXQZ18x1bWsiVXVxqsywKLMTKQ",
  "key42": "sGsHnWdY6vHUheibJkdtvZBUqTLL3qMSNpL3eWq5VEzc9PWxG5SiuEMyo6NmCKcsz6R1kQgCbwMip1rkoieJJpo",
  "key43": "1NwYNDJRD1n1XDgr8BDC4xutWwsVJW1yXvMt9vbbZ6E1gcHeY1kyoFcqTXbHfJKnWh2j47MEM6FrfLdthmmHsK8",
  "key44": "5eFQ3jA6n6nWWSGvdTRhep9DAcNijov6PyxPkQTuNtN8DcTMn7m5nJhoumfaKoc9Hsu81vZ4uaXhgJVWqGPz5ijE",
  "key45": "5UoQVd26Z2XxEnFj9uAKTXxuUXp3xEVq1uNo9zKsvsUgaPwvFNVTgfJd4DDByS5myanvVqMdbZS4cWsGwa1H6bJh",
  "key46": "4ij9BWDmcrtY3FWnrSr6GRHgfcg4tZWND9XWSzaJmUMXxoshPE2mzbiakfLXmCSRPNCorjtAFQAcYUzhw1CrpJ1H",
  "key47": "2wAjmEgpKhbaqzgHRS1QGvFSNodqmuav2iFK72L2yRXg5PmYpACjRyk6aiYLf9RPmDUtg5sRfpuzPNwJuDfogZ6M"
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
