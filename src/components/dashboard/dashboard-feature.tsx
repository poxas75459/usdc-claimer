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
    "5Gnh7E6254aGGcMvuBCLPUfPbhy3o4JBkPnzu7vJHg3Sm6GyinnfjsaKzcMwSoTxwWtw2A2Es2i81X8TJA5gAgtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wyUfX1ZFEYLw6xcG6iEhJDmS45L5Bmjrq1KUxzfbckHb7irkHYo5SnKm14kGPD2wCAkPa3NoSd7jFzGtaCv4Xd7",
  "key1": "3B5raPFN2bKQrowuLYtK8FXZMEHesvxTqqvfJ3UdgK2sWVWkhi7xhuNdCGjmdQ4iZ6UvmaCmHZaTdFQjkLQV37WE",
  "key2": "XNheQxxqHAojKEGZJeAEw3tEds4oeJhXzMnodBhqybLdp1mQXb4aQzTXzZ4ueTFK66zJRfgLxnDJWiSuXi7ButY",
  "key3": "4ijZ6LgzGBZqnFSN9WMuzuuiMhnH3tANeT1DnFxphhHjgGcSjaoyyE4EACTSSRYCUWhzMDiAapCccyR31oEHJbBq",
  "key4": "vaKTpQUQkCwauczJPwsGvBfVfTVy7tfmsRJnemDMDftp6fKtiw2GyXCvmLYagyxBZpctqLvPZ7FfVv2o6X9XVUX",
  "key5": "3XhPDS2jXjXm2PGJ7HZfLB7VpFM26RwdDNjzm8Dk8NwceYSSSnck3f4mC4zeHFLfARXKNnpKBZ51V8Hh2BsPQLgS",
  "key6": "5GAUgKw5wxeH9Gh2DKqoPSRGc9WVJWtAo3LmbwxP6FwDxQEUAoULb6Sqe4wBhkxtrbRtEmSgwdjbrJosB5HaZy59",
  "key7": "2qd4w26rCzV7k86gRdCNRbKZ6GoSHC31e7GBA6j5KBjUTMeQN1PjKX4Kabf7bwTr5Aa1mvrAWp6GTEfpRj6PqKaL",
  "key8": "41YEmHHisRZAi6Uqqu6tEqovQ7DQc5u1yJUoVRYVmsBKFNUuZnjetZmrikpK9aEGRGwWhRm751doCEz5Dp4LHFGc",
  "key9": "2s1f7ZdXx698YYCx2982rgzcajm4wimVfxk514BvfqG1BYxhjZfjiSfHQN4hQ9D4zUZz43skxbMFLJKEbkphBXV8",
  "key10": "4RV198jK4T89VwDPXLvSLLNjwUtD5JcptKVcey8iRBwAq61xVczhD16e3DW5uwMX9Aevp2tkzY6sGtG3zzD1qCuE",
  "key11": "4gyMNQv7ySBwhRaXqGvGRQrrFufqEZLW6PKkf1tTuSeJExDHG77fL9YF3smywi6xxCm3ne8eiS8WPt3YcSfV1wTE",
  "key12": "4bE338yxzMjEEHsQvVPK5TX5e5v319o41yLvtr2YeoCaNnVhWGACuzFnXSERGuyAnobMWhERsCTdKPw6zP6NUxxk",
  "key13": "QmdRUtawk1tKkcRvZrWbX7UmFPndSxSbE2MGTxz2bfMYJLnv2a72hiHdUdSUyeZxN2KFXrZgqvjzLuExF3durVG",
  "key14": "3c1uSiPCR5YBFFHkAmWoN66VVQ3pXkZsKFRpf6n4Kb7CptfZqyRGrwoDUJvi49Prj8kdUSSzM4tMArP59BMbu3Dx",
  "key15": "5SWwoxT7poLYQxXhnavJVScmDLDHsTmcAYfxaFfZGyAaVtRWzTASqqVAhczDJ88zYEykGucaFmgkr3DWPpMbdeby",
  "key16": "5fhqus36vUzCawaiGm7sc8NPvr9vhdsiXYH7mHMbRcjGTuAN5U2EkuutrE9xvae1uRq4MmP7XxhZHahnM8b96Eot",
  "key17": "4mCm5k6kGSVBCrhvaTin586GLfUYBTdHSeEvqs7CSvppYjq4ssrPmQQs6epHUzoKFkaAGNK25qBTg8mebYwNv6km",
  "key18": "4DT64M3Fq4mESvnWkk9Sws4ZhuLbhnJE6ttXb4Q8REVza6pWjz33pKgtETLu5NkzXPi9aWZT1BpqAmaNb2tJAqhY",
  "key19": "2aipdF5vsypx4MStXi4B2NH9VBwFhQmcRfYFRsXSAQh1Vo2trriMbxA3SMF5iCYeGMuegFH8aH6quwSy5oVU92Hx",
  "key20": "34WJCfGuRMtFAnCKV57qbLapYqiafHKMP9ie7yY9dnscXLurfkahK4uJyLVysVjn5GT2HGEUXNrpd4nBpi1W9Bz4",
  "key21": "uJ1tMdeE9EfEBd9nrPxmNrfFTVtocMauP2BZW2T9Fi2NMY7YiGg7CcrZhe3ToQbmrZBrQuk775bptYWrL6dnDW6",
  "key22": "4E3gnV9nwr52En6TxsyrrHU24nh28sGLgca2yS49D7KAB9uEQbHQ4mRaR5HBV9qzWF4VdmQkH7fvzgEJRqhKvD5E",
  "key23": "5L39haSBPHe9pb8LRFasGAA862jMcPiTsWonzWGZnMAjS6cDxgj3b9YNhvn7PayvHDTmGVeyqFeYqqpE7vJfjGHX",
  "key24": "4xSmyokSXF98Mjycz1LV29N4qdggWpiq1wSr1KrZp4WewJLbszxX455mHxaUNnKwtx6jmAuwMskCLAdHqHr2Rmx1",
  "key25": "3Fi3U4ZgLbwj8uMgGDz8MHy843rNEJAjoVVT7SfiQwse5F8rvtYC3KMFWw9iMd19VzkiY62FHwwoDmxxdJL3dMQs",
  "key26": "2Sw2quyVeZkSTRPZavnMZkk8M1iUg9LczZQfKDUDixxTk9oD2SS3ZjFkUiqkowBrwW8UviexdmZGvHJPJhVr4Vhy",
  "key27": "4D3zzWDuGNiGPzsQU9bRsMWS7TLZMaLjp1TUNPPBf9pCFYS3HYw5Q9wFuwZKv5jRAaHHVHTUXizattxHAC5Jbaqw",
  "key28": "5odPzLeGarnACzD6nZkbdGczsDiKB3TLAkERqtN9pez8JThQSKBuRyHh5FtyzWRJAeWybPKc8aKZTvdx4kG3iShb",
  "key29": "hG5rjwqM71ZsEhG99qTQaiP6TQbjUPaZWaFBFDydi4aEXGoZL8uUUwBGrYQni7e6zQQvq1A9acNRVYbj2PLEM26",
  "key30": "3HKES9pLTn9CnRckyNvnwpGMm3ndzqG4j9PxoCC8JQGtBTm9jKpoLoRgYHQAJizYxNjiDtsuwHvdDbCQryMfcBQP",
  "key31": "3Q5sJQ7xwBGiJ2YFNVGyabfgvvfbagS6sdn5hVfzyG6w7aU16pz6UiYnCgy7jXmi9vrNLXfWas8RcJ79S5GGQLJK",
  "key32": "3ySxNrYbxiUHmxCn6H5ftXd2AmbLPJGgC26DjJ4LFBNswd7p61NWPBzKAYuizbtHMgWUrnipEn5TGvKe2zhEUHbU",
  "key33": "2hfWpdS1XU2Fz7GAQXMDpSBSPmEKmLL5kuqYArW37dMK6GYerQmSo9uKBVGBXPWw3R7AiDDW39ceJK6f4LmxDTwy",
  "key34": "4MjhqCoEa4t4XnQB9LV4Uz5osQvbZZR25mYti1fGB7tD1ng4dDtt7jve14vMDcYXsNj5c9Wb9CJdpLEkqphVFXT4",
  "key35": "4isj48WTkEtXPFgoFtYBB9HdnBW1rmNkw1QToAzxEHxuFf3Kfp8NitMahXMZKno9EiuDePMrhKVszMScvNxAiot8",
  "key36": "5yMJu7omN4Qvyj82bwz2CgQRmsfEVx94Ez7QVcLPmtYe4bNbysTfBDzxZon1GbDW1jA3Hp1Hb8m4tTx1n3jHRti8",
  "key37": "3d7gqW8jB8Srh9HZBtHaLAgbeNZvoiLpi9uzNoUZMmCZAs5Jw8eeSjcTQvVejJM8Jcq1fLzRS8sGXoCRdgfEivyS",
  "key38": "3KcG3aYqFej2Knj89guMphUswyVJc1runwHr9W9a9EdfJax4zpLcBv6AubuBPiaXyknmFvH5DYc6XkpSMtitYqZg",
  "key39": "4H3FpfeSjPfYZZ5U6DsLiURqZtRTNggknk8YDDQVDjSSxbLrRiNZiZpJZzuY1VguhMp5ofDvcHSLpzBcGpEYCaQr",
  "key40": "3PfgKMNzNa3ZTA69Ed7iorDWUTRAjK2nwx2Z6ce8tuDYpN799DHGYZP6amSDzbs6yZyB2ioESyHzNraN46AMCcxD",
  "key41": "f5Akp6xUnZs2LYuvbzjqXjFuBzVr2JHSmz3kniRwBGBqp2K8gYsDZiidfJrHu8TJydWHggmGabbbFYCtdXSLztG",
  "key42": "4p5pKjcFepz12B8zTViV8Cv1eDArc9fW2yjkqripZvupCRpghbaKn8arD5ZsMaLbt48UftBAkMxSgZQyc5eN4ucz",
  "key43": "3U1Ez6Kuqx84f13xamKJW5QifRafmbiuenH91Ry3uZ5oaPnr6wkMRZNpwMWGz5CdgrGzVhjyzx1RSf5WYU5DZqx5",
  "key44": "J1Ln9QjwfZYL9msxWELS1g1q5mpyW2BYEjVXSusJ7FPQfze9ng1e5kbJ1C2TMCLyVoV29uUCVkA3e7WSoyWbtmy",
  "key45": "2QvwEpq85iRSmFoev3AX3PJ9k23Mg7s7CN8GsWADuDPZ5uhPsk1zejhUCjPj8rtxrkoRGMsfkgRhn7R4pv4Ahzmt"
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
