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
    "2sdHuvz6RdQsMNrF6445wTKWbauCWEyEAG3bkSFdDEZsDUdh8vt2CFT6kbXLopimiYToTS3wyBgMJi52ubpxPzTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y6CqPxBhTCBx9evGoiRa5fYzugqr8ZpKwKNr98cGGf1LYA1FYCds7K8y5T5BGPKAAKNUdVj8XzCALAjvXNatGq9",
  "key1": "VfQvukuknHHNvxWgBoYTMo51qJM5i9W9jVeTpKgPmk2rhZhbJkgZizCC4ogtSTZXu2Tn3DeCRSSm8iU95CERoAj",
  "key2": "Sxn6c9eG2PZPzVTrAe8esNtgYSPkizMUrtsjms1hL2b6RKJQc81WbZ4EngmzmmXYgM5nKESckG1CU6CnTBs4PDV",
  "key3": "42FB8yW7FjhvqUGdPKbxZRwqpY7KkjqktApVZgus1HdLK13gtmxYhCkdjSgXx24DWWUdj8K7Qq6Xa6e3zjv9jJem",
  "key4": "2e3FHj9GDuFuw2AfEfGsmqdaB8kmnuzTjpGdKRh8YzfZLs9qXKQ9u34htpQyBwSY7zJdCC7k1n2kBPGyZ9ydHJY5",
  "key5": "4wQFbCtAWbuGSv8QQkLtgqEGmbxAbbWYFajH1gQc5VXQdNaJas4Qi29BD1JosTwmKWSetaVVfBucNrLWSQpiV1o9",
  "key6": "DEEHFF73YEhUJkvns79cXhN5riepfbdkJDwspdkxbTMUnZxfUQBivGxMhFec7szU7aYdkSabiRpmiZF6BWkjYXJ",
  "key7": "48aVLt1z2vtqYgkt3vtBRESkMisL3V28zvdLZA3wNPAyprTwGPcwkC1SpAkc29Zfaz8mpTKdCZFTTDd83SVJpmUm",
  "key8": "4FPx1Zp2n9JoMAgNNnyfSEZgNwcm8YMmfAGQWG4znU26Ajbpt4UXGjUrF1uvtA45hzpavM7sDyEFVhMwrGfFPr9p",
  "key9": "3X47jS6CQ69UPM2vnJzbmV7cen8sikEpZSmrnunrLCibxiRdtyozR4uQmE4CHGKGrbbvuw99LrSrRQr98yrgBmVt",
  "key10": "4fYDfFz7XiLgjAt1cBfPM2HfLiSeXpkchJr2v8o36PY7AQbU53sDc4wzmm8GUzj675jCkAonH2ZS7QRTsXHGv1W2",
  "key11": "4qU6QwxrapKFeVtj16uj5BQ66jy4p99JwPkZfCNG4zP684YG3GoJrZhreiYsMGMCyC3rF4Vq1DmFk8yaaU3bzUVm",
  "key12": "2e8s2Q6i7XvbKDQkw6z9x4qdrFRtxML43oPvkw7ixPjPwgxbZnh3pe6njUAKV7DLPVyFZVC4XuSM8cEFBRwZ3KAj",
  "key13": "2J92fBRuAmEC9eiYedidoBv3PpnpApNRwmxTk6PvTEHP9LvSGwhfPqUuDDYuGyxhvwmuJfhJ5gPmgQt8ANThok5R",
  "key14": "5GV8EiaQfVbKEFtKUUnHJN4KdAEFF4qbVYDuwc3RxyVUFzqzjhV1UcHG4J4CCu4Ky64L2CfhVj69m2XJB4Pkwdzj",
  "key15": "3SwBGT1dWYzYkWnfBwjKTDz4pKkodvqcmnMumoC9h5i8JpGrvguWd5FTTKBniRStyToWts8hsSR3T1hKcmc2N2bb",
  "key16": "5BRDJ1QSL3HJpXdAU1K5kTErJcxJT8PyA1VsGEYmbgciRnmUxiLXJ4bm4JHhbFvfmm6hHfpFyCB3kUZn2rtjnZJx",
  "key17": "4kuEJ4aNYJEWtkyiToKwAoVMzSQeoRoo6LHegreJmcqaWVTKhhPKDXpedfqs7h2vGWdGzxvyhxKVG83tCN4kbxNX",
  "key18": "SwpSA8KBZnm9r14FMwrQkHKogv2izyodotSy5HReRCLMUy8Yt9QU6QurxWRi6snQSWJssq7iwTJ8MFGvbHP78nf",
  "key19": "3v8E6ue9KwfaqxFVrmtsg5xAXPhaa4y2Hn47awxwAjqJNY9CFCZiPhnjmWnJak3R6xHQnoc8YzYWtGy4UjZBeGqR",
  "key20": "KroZxXSTByjkqzgZWwxqDPchiYBFi6487FrJtq7UdghrrmZAZCTwDvaZQCmCedZ39WiKCcEiNbmUdd24WrDBK8D",
  "key21": "f3Pf74eKukMYYLyKAQxRoLHV8V8nN9qsDiNATg4Gxx1t3C7R8Pfp5E6Bd3dMsoabTdoSmthQjHjj9p4LH9ktKqd",
  "key22": "3RDP4EzUMRJGyk4D5toxURGDPyNB66YSz9596sEpp1A8NcqqFk8tNWUay7Lmy8UfAHCToMqMphyoxfouMnkS8THc",
  "key23": "knRVP8UGYn65uVoPhHMt9Sgut92uXxkns1L4k4XD7K6fJ2xasSjbXWEMT1oznraxB7axR19h8yJpc8iXpU8VTy5",
  "key24": "2aocrNCEz3GqvF7VAA9xq4gv4XmxwbTSRmP15Xga9jsDu1ahGtZKrQHCFiQk4WQkf8VYz1imJgmq94Uf5NJnHc2Y",
  "key25": "3KCchHjAjjppjPqFz8NVtCBk8yBhQXjbYenHkgnF1LJgdBbbwCAEi5HJkxn6obx2jRtfxU7xTvB6hvyE8Ep3LddB",
  "key26": "2zoSdzd4V5QSudstEUfyoAhQRWsJtRbtoyG6XAffevZxCbUneCkqjMwxp3Dzu9Xez2CUEhJGS3HxTNNvu17Urudt",
  "key27": "53Du9tbJ3ygDJz4ecNTkkhbXhh2JyM3RziC4koMgNfrgWEN5DrXcmWMwqyEGVW3ThccMYUvAqNdzd4ETA1QxSE5X",
  "key28": "2dpuoeem1G6vcPLqwDgopstXwHBxbbWWunvAPGdweAemoKWoBrQuWVBh7BYwEQ5j9HM1x92G7A1bsyGCpw27JSGF",
  "key29": "56YDe1F2FseTBxn6AdUdkBhBjtERmhy9Tzjf6s1GRxsUgeL7Y1xuK4jYCzQe2qpGwrmYRWRdhwBDissKfSGj5kvC",
  "key30": "47zdhMiDNkzVAoQhVNKTg8EuNsxC6N1VdupoiHmrjzt2VGWXKchBXhTg8RL96UomusCHz5YBPPCARcTdSomQkPPM",
  "key31": "3TjdnCDeVun98VVPF3T9xjCcnkpJ59GhVHm6V888eUutG7RCRpmPotSgjYdRaqTdwhUATpMTLddBJay1Zfa3jhVv",
  "key32": "5hWks3YbiqD2zir7mXhVAosGucWYEGACiJDHppdw6feq4HSNNN5fpx2YtEc1YcY4mCBUVMM9JfxzcaxBErC1Kwm4",
  "key33": "jVSWdXasNyJQrGsHJjX71PYdUdDHd2LJYuRV9FEJGHVA6HhNcYxzdi9akEfdA75pAFGLxGGCMAwwbSoSMXjXNuo",
  "key34": "2aXaaWm9oL2PgZQtQFLm3c3BS6KuPS6pbhVS4gmVkCBLeqNcvNNFUV4qYM6gjW8trojsqwLnSi6Xsr38sx7tQJt7",
  "key35": "43jGQ8UFJcoQuSgyKXfape8XF28honexkyATCt9NSWsQzayYSkyjsuCiK8dKTDRrULjZmk17B8Dare1pZRc6JWv6",
  "key36": "3CYBzN5g7psQ5VX6CZUux8LtbCKi9ZPieuztSRk6xPZHe8zwNLUYdFUqkJzp61hk9w77nK38RNyDvjeUKt2mWh7o",
  "key37": "4Jk3gcUnuebwnKEM9KqW5DwezmdEj2pAC31oH2x4K2Lbj46avKTb4aT8NRKLztU4efpVKssPHh5xrce9Kodn7gds",
  "key38": "qPt7sUqk69xQ8bYstMbi9kCpfuTu4evczEB2arZsiTp338U3c1KQgmFSaFSa7t52XtLS4znXcGbJepZTHRJKmk2",
  "key39": "2knptAUn8GWgdPLEXbSR1hZVAwiRuvuSLNmY4KRTu9Yp76YFNryoe4Qj1CG8cfeoSXo9o8ZEVkueMpdqce51ujLy",
  "key40": "qtgRjEoci5KtduRzPh6vrSmxvUMxXryxadRC5QxbsPp4eDpthWoAwEtm2T8UEtrU2fwTNB87Fyb7VjGiUqJPpCM",
  "key41": "2tgRMWJ8S6jUxbYVrPW9FxeX81vGTvtcWweucxT7MVPiEqmcZhjUB85c8vazYikc8nhufdVLgvmdo5ibM38JipA9",
  "key42": "5srpfHTcuUW2oBdsAQqedN61NUQqrAJX4op5iARRTF4k9MFYTxPz8rUzqHsipe8Y9FNfJf8r1GBSdw9j7hasR59v",
  "key43": "3Tz52S9PBzXZkeo8uAELPLwzJjg77K2zZNRVuRphUyNVxJbx2UHf4sZN9Y3s2G7Qr7oHL9K814tAsZdPNhaXRxrX",
  "key44": "3Px73ydyg2bvKxJJQKePcrh7hsWQ4tfUMZoButMP8VDxtnUgC2sPM1FUMUwYc72DSEXpHFaV3AxkSGvgB8m3zqHE"
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
