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
    "5mwjrYt1FdzmQGF2So4utBoF1vWpMr5NnZpDxW5SR8zT6yzTtB1ST7PymsMLtNcKB4DkS4ZCeQWf51QKg8wq51oN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EYZBEThV9bDTRV9NG9YVxbjbRz3dnjYZc93UJRdjBV4dA73M1P7ZDg79DCWMX7w5pNAZKkNL7jaWNYeNppLAvcy",
  "key1": "57QhnoRnpNjy2657iRkQTBEuAtBcp1nP9pvb5FzcX3j7aP6AFd3fHF1H6r5b3cMJkrsTR4UK44CzTRXVF3tHmhAy",
  "key2": "5B9VmG9F54tjW4e5SQqukJdSztkjfj5G3ZP4mevSmZs4WqydsLAUUWJC7w8u8JhmwN9rDp9c4ScXiU6skNg4wV5s",
  "key3": "4KSZKGnvoPRfLF6fNwwg2oqYkNgxvZrrkmNuKeyzSSKZAns6BivuoPHSndpWepLQrk4DK8nMVU2vFanTzpcviucX",
  "key4": "3iLrju5MGbAcY2LD1adZ861CEKT7NYu8pwSLknuFJ1E8bwePidTc49CQAGpFbbDGSV7wpLfXvojVpKQinezLkSPg",
  "key5": "3LXbp7u6N3ezWowuY4BpZAdemQkc4pdZVqhE4qwVYLgFMA1rZHuP7zXU8ic74z87ZFuaNPh64KxBw5HJbD2C9mj2",
  "key6": "4xDfxhu9JAY7p6B17sh2F4AssvRtUPyHayaGfWrBSCot6RNdqFP3jrmrKqbUAiNLY2DJY6MXktWiqUpGYiFgrLcZ",
  "key7": "51m6KKBoMWVMaxmDPgPWtdDRLPhybayrZdag8ZZhoPgVAfpArgUGYFJe2uiGH9X2gEo5XVjrFSwdui5dzvkVB7Nw",
  "key8": "5hdX2oPWRLYbXLHdfDjZndCuZxx5DqWXy4jmK2sDhX1fCyKHeHVViouTpbQC6rVN7a23zmerfEBcGZJSQiFTa1xM",
  "key9": "4bgRx5FJNxxZirPh8CYAUY6C4yN2NnrECWxCa85AQca43fyLxPFQq2fMWa38qvZdHjtf6L9F7Gcnstu48fAB9KZp",
  "key10": "h5kued7AQMrof1GSfmnVqvPkQxs4fT6MY8NuicxtQd7QGgvGhaLXNioZzs7DRbn7w3RgfUW6wJbehhrtD2cS5hw",
  "key11": "oWEGpEW3jzY4jza7RhLvPvGr2Qc2f4d8rBrCTYx1h4b8Pk5NgMH56KnPdXtAGzCyEbk6RwtfsXWWx1VKNEHAFKN",
  "key12": "2KpN4ZF7NXMUKUXxpmaRbXbYDvwAFQaSNUiFyoTrmxSSvecoLLFuLYBZp6yPXDaZxBFKvuZQLWSfUyHttNLPbbfU",
  "key13": "4GFH3tDB6Zg5fXk2yhoSkxjsPSCfFuhbNLJuH1w2M8PXv5hgJ15FQLK6tFwxCyYGdiyH4uKB8CsxBmDUwo64w2ap",
  "key14": "35SdHvRH7w4S5HnFpP65k4F2hvHLAg79uLSasFc9UcVP82Pna53vDWdeW1wmGcXHHugkoyf5uWLb89mu5FQLojNd",
  "key15": "FXg5evB4XZGUpPz2srdH7YfLctL9uxoL1r6vvUi2Lw79HhpdhmGyvPuoGTtEt3JKnFBWwuQgtRU86C6D1gZj5sk",
  "key16": "63HjgX2NEjU2hEwoxwR1HXd6jPJWmo14svrFty9WGYGP4U2v2uSjpQ5aPE2BjQ1dTF8n5dWwDj4PQrSWD2Y5YTL4",
  "key17": "5HHyiSUV7PSjYH2ftFuQoGfD9dRBk8ub4bz58CDqVMCptL3frZqKxW3R3q2xkgSU4T6cFY9AejFmPfc7exCvZGaN",
  "key18": "4XHFskRGaQBacEKxbR6j34TtEcYWfsuB5snCs9BAafGGenhTyNaY3H8QCZaTdU2F6VZRqU3q4igSj4cdVGif54NG",
  "key19": "43MM8ZHwMH24muuzhR9CYJcTFUoL3HjiwGCZgoQdeeJzhsiqzC5N2yWRsXJmLKcpp5Y41unFe6X6SErdr6We227v",
  "key20": "3vxs62G9Pc9c4kQcCMt7sYD6LHo6vWCVRDbN6jJ5qrbRvDE4pLuTLcvy5wh6gdDHW7c9hMwoXWKChCYP334j4uUJ",
  "key21": "4Ym5Tym3cWGAJkgwPWoLFvzpmrzSnmCCN16EeMgo5aGugzzasXbtUKMbknPuyADuQ5TjxrRRuPbDLcTuLDhXJ7yq",
  "key22": "4CsRQWUXEgn4XKSo6paLHFD5XW8cPaCYKraiji7VCPHjRzCcBB25ngodXkAQwVQyzDtcbtAVgVYr3vU2kXJznHQd",
  "key23": "DwZg4kdynfawRaFewEkN84tVeyZ6mLPid1WxZoEZpWVnLY3NPBvV4AS4RW2VUiRjJNzMeQxBEAWMu5VeVfKvRyg",
  "key24": "4kK6p8jKxuCVL5uXKXdkwJJWmpXmmfFxRqs3q5tc8iaUGacmN6DePcPWPEMUkDhJcuvGGB8RZA4BvNwkAjg22VCP",
  "key25": "4gg1AR6qaw2GsmbAX1rwGdpjaUTFENQ7PRfJbTDLKGD86GgeXRhWbeVx99utU3zFX6yiLKKZpxTegRhgbjXUbNjb",
  "key26": "55qvwpfKXemEELZk1Ftto91gSn3bdXKancBy3jphHp3HLDphY3dLtgNTh6UGkkqN6hw8T5B4WtUKaB1VK5DRKnxZ",
  "key27": "5hjux6zvtJxMeiEMRhwxRFwzsLAeLdxxvCTQ4Qg3ZFDxg9dE1sbxtQQtvz87BXGrLQ6kqELch88BEwHtNGSsfZgU",
  "key28": "4Pe7kpaUwQRSsB9jef8PDQAGMCKnFSjaQZK8i1P19An3aLyCTrSyYUuGFon5Sp481sdQyD4kX6g9iEgAxjRdxtkY",
  "key29": "4kBtTdsrAanZ2BqZMJUgGeVqEK8mAS1cAa3WTNWeAUmexTUHmZDxpLXayXeF3NDb5GRDxzqT7f8vSS5HvmvTZw1S",
  "key30": "4EGFUbUC4jwf5gMdSeJUkberAeD3ScU8C8ocjqGJSEc8u3VMTzd2ik9jaAqqsTcGCj5stFvhMNDNiuLEnxszfCkS",
  "key31": "hPyPGCdC8CAg7BbPwThDmAyv9vYRSckdi6y4fBYPf5DNopmpNGA2NBEU8UTVQtDMHfCiUUgHRke955sN62rA4nc",
  "key32": "CGheSLpK3xk7UbfgbpDyqUg4My7Ah8zrT61D6ouy6uVvCnsuduv9dz6oLd2zgwghSdUnzMzSh4r8o9E3KXa4pmN",
  "key33": "3qhqg7UzRkfXk6Gth3JhfYBW7aCsQiCWz55qtyvjaeeFqmfoAgKhYNPqDqAYX8QzqQFfHwCCur8nMsGLt6Jz7XJg",
  "key34": "5PZ8o6wa6nowQUPpPTCG9ffmr3QCc6neCcHhvs9pAtKtaUDcASmarqcENWnbaqDbpbJrbXoKHLjN4EUY6MRWF1B7",
  "key35": "56d3CHZbJwQwpMV868JbXASk1PTpHvLY7sT82jZfAriBn6CZarMHaY5DxNea5nnt1H2QimpkPeMgxrJ49YNpHxS4",
  "key36": "41yuyS6Jo7aaGmBi9w9bb418oABQv9K8gzjhWsoowzd6TYboXkmfs8ncDnAN72YEsYGfSoK6x5cx4ec7s74imrnL",
  "key37": "5rKUyuKVzGz1v5CyjEgGZbyLcXw6EF29AFgPoMvZH6V1GBRKcuszsco1jFJbG9iuKkcJz2Nmt5E1QhtfzgAdz9Gd",
  "key38": "3CNAgL8xYJKnvdo3qTLcFCBLweEEJsnyMvrnHzBmsTF2Do2fZujCgnQbxcroHPKfwkyaJt4hf1t4gMr4sFZb5UDA",
  "key39": "2jWNdJWykyDEQstbFojZSYwx3L5B8od9k8cQkdZHEE1HVihmPQHKdyDcrsea9EsffuWUpHB9HM1bCmxgyo7wvXdv",
  "key40": "Q51SgWYTJYi3cmLWjMgWRGezfBYv7fyDEFERYPhTeMGNqCuju4qLRNcRESbnFhPX9pcC4m6zzcr56FgQrGw9aye",
  "key41": "61ZZBY4DbJu6eofjjhU2VP57LzJjp9fnmgGhUHZFPb375kuRFSPMx8DwPq48NNTSghoGLnt7AMRpZXkGA8LGN7xk",
  "key42": "3Spf1BRMUyGbQH3pqf7avUTw6iAUmoSrGPUdtb2dLej3f83ALno3HH5N94LdTxkujmgDoBXtXnR9dpSUKAbELXjd"
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
