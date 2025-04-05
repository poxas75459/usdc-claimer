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
    "3Rq1z29T5svNxu9FfaFvdGCrSpWVuqHYWBUbBjxGjMTZeSBaDNbv9uVRkzbd5s1FBRQuL48LuADuZ9vsVTha97pb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zVWJvaTtUyhDuCbzfov78nDy5Cc4qhVdtNbUiHP3bkA4Migp16YjKHBW8DqQEfQe18Xdy1z1Mg8ovdsreN6rNNZ",
  "key1": "5MHbvxMhNwwoTbfVa8wyhUntW7P53rWYoV56YXvtPAub8GFH7Dtpa9z15t5Da7GCsocuJ86gyRjL3zby92xuWJX2",
  "key2": "5KgWUp8AUb3mokRG64LwygPQZ28kmoW2i9Y7MttfcpoeMCQ6r2okipAED6CpZQThDTpCkhaT3fkNKkHYJuWsaiMe",
  "key3": "5hJPzga71Fhi5ZxZ8MZy3VL9K2xDPuhD8NKaNYbjgpmss4pNg3iZfSeQaw228zWanpATcc3nRfY2WXpvWsPjCW7Y",
  "key4": "Eeso52xoZtQMHHKuBiPHYwz4hqpkExE4JJXafxEdvk65MSz9Su7UtXEq9oM3yZvxxjUkhXKVch5STGfoHEw3rxA",
  "key5": "F1fVKB4bbb88ryinkDpNR3guZZKa58xv8yeUCQ5z55eRhL3LrnjwJiF73GeXw36utQfcom7yqpuHu3Bf8KgkVt9",
  "key6": "XvyL63xVyjQryR9Wg32fub6BTuh9MaUimYUuE5sDzZDpWe2FbWjV2pA3LPZugbNgjxowyUNHAGWBxA5XLHoM16Q",
  "key7": "WZiT4iYyCyrtUZ6VXbNHncwMTakCJWZs8qq6z5AHnwphTLGDB5AGqNQPSqqVt99xGZ6BqTw9313JAdGiBw6g2cZ",
  "key8": "412P9oznLxyQkHYPPVib7iz2GuM4ddqDDTE4emwdE42VcEWCRJCuXNidPBXVcFyGBs3JYjUdQUe8WjWhi77NFCxq",
  "key9": "3koDqMi9Mg15SQtcC1SseK2QcViWpnFHTzxKTHGyvFD2jNJrDjzZh2AypeQ2bTNsTQq6UKpYjDyCa96FW1LzX8v8",
  "key10": "3Vnv6pvVRwgAiSooawn2qBTN44dW37LXAichSupHiYWQ934nXQbTyUb9qwo3tEyfzBg6TkefJh996h22uoBncS8x",
  "key11": "vndi7oSXsxhN5wDvY8T1TvMoRnsiRxvQVG143tkVQsxvYCGDmCwzA9ShUpdqjy4vbFXA6Jt3rvsLjF23ogdkLFg",
  "key12": "4NVFspdkpQYzRiZrWCjFfwChegmBrPLaPpFBGGyMw6XQkJoAGkC6fgxfkMRZEZKKaJYphS4qsY4qJwoPtkDdvEo5",
  "key13": "3VFUPcNAtqfqnTStLvpyPx2PYKsBnpeCoML7oY5L5fBUtfV9ATVTqJaDPL7SdSYjszU3LoSo833hD9DLVo3S4d6s",
  "key14": "2fvGZ4edv4njqsrU845MoUew6P8seavvPue7Bxuskf2ZF9326AUkSnFCRGpf5sTFY7KzdLPWpbE8youMtW9asjas",
  "key15": "4euLPtsjp7ATNpremC2NVfBTeQL6RvTCcBQewXTayyzmEtmKSG3pbdMaUzyxRst22arYQqqCcVN3EaVhr367YJK2",
  "key16": "3rbSb5CwBJos9oi2ZXec4b91BEmd15wGF64WJ41KtgCd7rWRFkCfGER7j4Roagp6afaRU9yuUb4W5AC5rPU8Px1B",
  "key17": "yVHKt2pAH37RQqpJwSNd8obEJn32mgfCoV75z9SWtD3ZcdTybHNDcppfTD6MT3RD91FEEdkEy36rPPuS9EC59eQ",
  "key18": "4L81JF2jHma3Kp4V6UNY5FT64946r6TyCNAd7ummgV7g2fm5fh7v6Vp8WBSCjPU1HscPqvAoMRjtawjn2w6jDKGt",
  "key19": "21ktPGRXdqFNYdd6S3fYLsjkYnDsNULyFMtJXYoqcnf7NTrNE5PEcMxQxbBXda1NoDveteV5MCYLsUohwXtD4pHE",
  "key20": "4QJYdmGBF7g8iPMiXw5Vdv4VadjDf7sEDSbBJLCR2MZTcEWuktxLee2Q7tKMdj6Ne6NzkLciNhaWkXV9aqFC31M1",
  "key21": "55mPQFqGCQ9MSHWqusEEVCr5UJTQ6dbZjEm6yXkLXB13beTaMVHPtMNiNMc3hYiVUJ5N1szx9NVwpaY3VL92KXG7",
  "key22": "4esYWnVEBdw4HqH97rKHJj4isPdnfjQzWMGJf2jTVMsvrzveur953qTTZyS5paqj7LChn93zLfuBLY8ro9V8hqi4",
  "key23": "4Y8C6jAG53GJQDXSLWn2Q9rLQ1Rdc7ccdDBXU8V5JhNRh7ppFzHHioNTmV8viSheYcrZqi5o8ZKSpfHUtYRrfDqp",
  "key24": "4ufvEdRgkJtT7GkzUAhMsbgj7R6FQSbmuZKknDYYjdKRE8XKeHC1p136Do5omp1aRtBdfcreCebKQMsHCEEbDxWq",
  "key25": "3A1ctaKP6L2V72yiSdVc4pTKs8PAAu3KsQv3XBjG1qccBiMhUpYtsc2ZyS3RSTxsf9dHmmYEyWxsTibLGeNFUh6E",
  "key26": "24k8UjTLzYvGwro8bwzoFqjse3jgfMYUBKVZcwr2AkKwNpyJzYKhM2zwJpMxWbedFCmuGijyAbbZTiwaVfK67u1y",
  "key27": "4BujZXtjJNPQS8fUUCoCGgMLCJP6GB5Y4wRYVjo9DSPyL9ERUbkWyxnHWyjFafnixox8dFgZBJyRZmHqUuoNFJQs",
  "key28": "Eu4LaKs6VoEhPHXXdfFXpbHwjC6YqbhUN9ohUKtNvSHQ54ecYcBZ1LAqXyykDbJHhRVVdJx3sG3VnTVkN3SC9dP",
  "key29": "JV8vkjnsseZZsnL6BBeR7Boxpsp3wDrNLmzNYp8TapSppvrcceV2M32qD6rZb7BGGSJbLwpoetGHx6SiCfyXaBM",
  "key30": "5k8cJeSJY1VznfVxGT2chqEup8kKKamoZHKe3zsqdf7f2P6wPbjvSvGYuyacKrWUfJa5i2Jm1PrWT6tdt1JuHUvp",
  "key31": "5Rw1TjSu1PhKhse4GjUFCAZWhi2Wy7vYZxmsj8mi1sWyb4gazXQ5p1WXt3wQK4MmyYY9GXg3sa8KsiS3fjteDuDX",
  "key32": "4xn7FDvSy1SSkT9voGKNrAMnWz1iGXDXbmTQtshmvREQoJjAsa6s3hRamyn96u1bJHbpHMs3LTjNgnX4uNvBmLzf",
  "key33": "5HiMC5rQv4wi3rv6HBd8TZxgPSWxx8ia43i88uWqUyCupxCTmMSbUYDJdGHsjxtXxS5ZnxSmKrtMHC5oXf5C2xtN",
  "key34": "3qGAH6DcP4pu3pfCa2w95p55D4dbT9wXFSTcbnetsBA3LUrRi7YpkpeZrz2FAY5ZwR3NzQuZepuTnDkYyFg63cBP",
  "key35": "57YcRfSGf5tRV65gsvomCp2NZ2H7inPm8Egap2V92CZeKt9BfqUkF4zswguAaK81JGUrfRX538DzpShr2AG31EoA",
  "key36": "2Z7ZLCJyb1HksPJHUph3WcAMdFTRXHRDY2DE7qeHSCpKq538PU5CsuevcjXjA5r949PqFa1iK3TwCig5VqYKZzvd",
  "key37": "JsYRCdt98m1mxeiRputd8krCKRd6jGkGxzA9UU4ZVPaYTLit5CSYrVQTEnCr83ERRJh2nGXE3a7SKCw8nH45Yha",
  "key38": "5jUzkWGtohrZPxTNc3kCB4Y91emi85qiAcuWV44oPk7qHitbzkmvYavQph36sq2jkaNkMTidtxdLtgWJEm5N6Tys",
  "key39": "3LJeroQaiepZsYRk9dC6A4UNUrizquRyb4PCnvsxUhcR6DiMkLkKgQRtbnWzUrHfCZGxbEcov1P3ERceAJRQYhz2",
  "key40": "EboSn13PKUdjVx5FzEs22p2bqQyKkRjmwgQeKkoYV2sWie414F6XNsnrpReZDBvUPa2geH86RUWktND7rY7dozz",
  "key41": "3WrJY6uUvJoGF2jMJ9TFVHnjLR9acUVy1wReuXue1GmcqPbtvJF6w9H9bFHYvxyzqos1rC5vDzJ7DQvTwt2MtLTJ",
  "key42": "2SCEzweEq9BXbNuARwwRqH5aSdn4VHp6id2RdEfh1cHRfsGGj5vFWP8aNi1b8wvjHqcYRroQhbUUtgCDdwHNzTxb",
  "key43": "4WzZhHa1DErPjRTa2GcTvUy3VmG5NQ7AkaJC6CH2pPqqbV2MRhDca6cixfnJDpmw4b67ZbcFHJmysKChFBt2YM4r",
  "key44": "6XGGwB4jjNGmVefBjx35Wp7ZMQ38t6nYPKt5eXdZhQ7tMQvnqirNjKpeSCgB6pD4otdkSMY8jZgwkYRefTMzBXP",
  "key45": "62w7ftK52u7SkyzSGNRAzR9DMUfpYw7UDtBRMf2JyVhvrjzCRaDZ5JEHAAyS3bbp2VixxhJu1r7JTbgeaDQEf2Az",
  "key46": "4RyNbqzV8U4NvgPC4e3wjCFJvaQcSqhp96usB57aA3ini4BXGekCJX6BBYogz38yz4zcWvsohBc78DpY56YkTrMT",
  "key47": "B2JJ4gtBj57pgRTvU6hgJfh5nuDTgAXurX1q6myZLitqnVwek4hZGCPo9vXJVYRss77JMUUCEYi1uzhttY46RZa",
  "key48": "53JTXfu8AErTa7n1gcHAp9JQ7ctLBmo7vq1tAMcAfjPpkJAghCYjo3vnMNiFfZ1jTzq7CYh1PoL2ZGQp4TFjvDJ8"
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
