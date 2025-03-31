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
    "3RvnGnobFsyL4WwPqB6YxCKwDSa7KGdT3YGtCvxtzWHzzsxnyj1Exhnism3xccpyrXon17Eq4YbJDxPLZXUNedsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zP7WgcXhMCXp1BQmGNGh1GtEmKDPBVZU1pf2YTcneyQCC6JGbucNku8PEgthw4JNNADfPmAUp8QFZFT3xZzVZkw",
  "key1": "4RBdep2nwanh3azSBFta7k2CS6wfXWznNSxc5h66LzmEA3J9ux9ppX7EQj7adidutfSHXFxvsdosL4ZzdVHnUoQ9",
  "key2": "4cedpqH3ccidGaBFxEhczxBptvEBqswgaZADSwGCTkfQ9idFZBsLeM9xYJqsAsfe1abpJE5J87nvycLF94RB7J8A",
  "key3": "hX4LbKS2jKK96Y6LsPsPDTjyBwossa5BHiv3ciySdXHKwcHU35xY93BTazsrHsU6WdZdFwBpJ8y3ENWFFtzYXTD",
  "key4": "4NBiEUcKdpQ5Z6TwguLf5o2gnzcJ6oUTmeVxvs55XWgzvg69yDpaDCntFvkWMyTMWkRvzAgNnPpm27C4umXK6hY6",
  "key5": "pEqWmDBALBbdt98PwRF7sdwdUUBjjdi3GLaMLgZmnjizVmoLYbjrNBeY6Ykm3ccfEDE8ssMuyjLzdU2Y7tpgb4f",
  "key6": "5qXQAv3wvYntUQzMs5BJFSG7fTXtyBHmEn7fbfXSvxBcLDuMm6aXvkx5RqyCbwKTiszELfEWt6bDdqLUaNShNKT6",
  "key7": "51RbHWBd1RMyJtwHbiRhkPyZmQMnBZxBNMghJJfJpNbEyiDVzJZmoaoJhj2E2ntJqaawhsrBTrsXHbv4Y3EeCrb2",
  "key8": "4fX1CKawGBvbrfRZBDMmPZc3ipGxB8aHBUnCtYkoS1qVSfHPRRWnwRyuGP7gqrwg687SBeTvKGAUcS1LfbbYVxyP",
  "key9": "4v4Exr65KQVX6AV1dFPzdJePtFgu4MhvJ2skNjm5HDEBPq2R7MMiN9wVtTAUCFiMx1sdUGUnUKD5gDhUP5qTtyZC",
  "key10": "2YVD3N4SWa2kAPaMa7MwVPojBNuXGo4QQ52QkKKPdZ18pZbWhSMZCBmFvuD7TZtLRZCH2CoYYoivrUZcXJH2SEa3",
  "key11": "67HWDabPZQ3Y2SCHgxWg5o14M1taiHrVe537H6U9TZU9hzEQ5C3KopLZKfvFzPCnAHQ1bCiq8g9oaj4RjLGDeaxi",
  "key12": "4pjPUJmvZLEcmE7VJjBwZumt3jLrvXBStG4aisaGDRtxZfFDHmWUrmG84jmsQxJg59quipGD9beGD6ZXqsJnfSfx",
  "key13": "3DM5P4mdogezJZMbf6443mcAVe5Fvr23LirvfTQJvYJgCRsukhzwTh1rJfTsdU4XZJP5euggcn3TuAXsbzwQoyr3",
  "key14": "4iEnzeZXYV8EsMeZHUqqvtXvuW8TYPo9zyzCh92uJTxDZsXmx6sV46RwLKX4cJSVhnEe8J15ahxHGsss6KEubLSx",
  "key15": "5VboNtgmD6NjVVYYCvjGkz4ENufAuU9p442B3Rre4xqwAGiCgCnMNMtGTbyftVvUpicdKsWh6hCRX2Yr1PPPP8jd",
  "key16": "5hh9o2hGozx24bdvVa5ppwo3MhEi64u9PDr5mZzXiqjobep9z41HexLLxNtemmBUCSe7nfR4rc6ta55oyAarjSak",
  "key17": "5bcumpR2E6hG46NTFeZ2oddpdPxfRpvx9t4azBJfJQumJL4pnrGX9ZXrQN3Ytobx59sPkpz5BJgVSjKyL8cKrPNN",
  "key18": "3yxthXsNdDz7y9xoZZEA51RLVp3FJTMJLiocXqBzh1uviqSnn62fGVRFrRGmkR8gdErm8g9DvcCP8ddeDLrXGXU1",
  "key19": "4WgBCt3YLLCtvwNNhSvRnmd5U4sumMLu8VbcdjHtSoGjfrBUa84QuC7zpfPPbasSSEi4wvBGk4RqA7NHT1ki1uee",
  "key20": "62u4tcioCWJGi41dyqN83UoLyysJbN3byu9ePpBJr5QAsQM8HpBvQmbsEcdHXYzzm6UzE1shzhY4GbNAAvdML3ym",
  "key21": "pwBSKK6Z2mfVNqJ8x54VQLmvN5fw1qr9yTDFa6KGrB1yaBuZgav7DnntHii1ahKkbxnCvdiPMKxJJ9NdWo3Bxdj",
  "key22": "3gEyQ24kxSfSUZA599ekEFCqpZNsWkVWA6TCv4LEyVSj54cMyF8Ts2bAC98HPDVurGj1Ggffm2sW1hyBERN7KaJC",
  "key23": "YtvXhPbiC5jgWgJUuiJu92nnsQ7gJ2Pf9SGw6nyDQm6rPNGSdYX1PmejZg1hiigPufqs5E1gvtGiNGyT5ZpdQ1v",
  "key24": "5cWhvJdkyKFuZdJu3S9jZmzgEDtAA1bUY6tqMEL2K2q59ua4DYMbH9cXzbBuQiYtBDfumv2YvNaUWSy6YSrmRNHB",
  "key25": "Lci5yQfJQRpQsJsgXPUJZvnDgLZ2XuE8eygBhfSdynwS8jwynPar2NqUtW2ZF1RYLHAvMo6f8nq2Hb2iMhfruXU",
  "key26": "2AK4DmG7exa9RKyPvg1dQtAoV4THXD7d2L6sHu4YGH8iB4QCDVfWsyUTfxQy6KdTFWCWXha6CmWAPZwUCszuX2pz",
  "key27": "3dXafwVriDcn2XqPGzaVKuDwR8euZCvqzuteApgt2ZkVzSfoWfZs3W3eA7xCDWRbvaC4oVchiBJn7Z85VvrxAwtx",
  "key28": "cbJAMHUiQwSVBznG5ipVu5oyGWBrcuGbzA5VzKTuqukLe8u5qayhdMiTMGsfFX9aLin1eMJHMXoKPuJZm9174cz",
  "key29": "5vRtEnH4G6bCUukZTp7zKS3UdKFpvYYddZviU7WDRPCWr4gMQ64xDNv4wuH4enbjdNkB9QXCnqS1tpyU686qq3fi",
  "key30": "5s7bBHaaz6wK2P41F3jByQJNws9Ju3DgzDDoZhXdjKaYq61zvLEtJkRbVj2GSFpwHB4hymuRBpTCzvdeQKA4tH3A",
  "key31": "2TFhrHzBE72ynTCScLveGL9YKBoJ4AAmqwisroLFUDeXBx373U8R2xH4xd3LVxeSRbMKDKGTg2YQDndGmfpgjPF8",
  "key32": "4XqnyL63vEDhJ4LWMqfPdZy42KHjFmNp2yH695VxUFL6sGF9DmfrJRtG4KmahgH9jiKJ1FZDSpNdqkSeFG9EpRXg",
  "key33": "2gaeGLJY77Dtt6YRjaqK4mjiAXwmDd3hWr1yp7Uvok27Xp9rcjJYgxE7FMzSmiVhaZhdNGEhafpJQp8xsQxwSAm4",
  "key34": "5PMDh1k3McXZmpkRzgyfLtB3aewjyFqnDTnBihL7khm8s6CZSMfWLvpJ1HrdDj7q4aX1K5Jw2xi4jGoHF4r4VvhF",
  "key35": "2N6WfEwaZvyCggUE7SSYef2imCTxnvVLPmDqWdzAeBQY3eEY7ATazBEgZeXbjDH2rHdm2beYjsUNVQdLJFs5XLUL",
  "key36": "3Zytss3C2S89FBXk9k2qZVEeJWUGWVtRWnFzraqYsCDPDDSN9TenoyMGthN7yuhNJwAVbnSkaDVXkiqy7EadQCSe",
  "key37": "YuT2j7tG8u4GEZJR2YmGdFrrbH8brbuFVuPdm9i9uz7znrq8QHhL8cYf5p1MKAqaDQefTjauxXabny1YwCpEseJ",
  "key38": "3zhTZ4Fprz7L2dZSu1bVxS5LoaJ1iDWRpHEByRYxtzgMSNZJNurYugCUNPMSbNqJEKYYYSSutWhxHjJwRzLLGCn3",
  "key39": "54mbjPDctZahnUyEQeeTLM87qiNgTB1c1JhEhH1cb66bzvoiTBajCSBrr19hYsmWWvK5xnMXkhPPxH4UgC6sx97Q",
  "key40": "39dk2eec2GYLrBCigVZck7vp4opDqPuQC9WxqDDHZgZ9ATBoF9od32YHCWDq8mAGYCtsQ5vbccmp65GeqdyeNuGW",
  "key41": "2fWQBLgv3y76Fu8T8okQhC3WoeDLeMKTwsBKPwPyprnTkNnsJKz7oadf7ebgVDESMKmC2DHerbprgk9skt7sJ1os",
  "key42": "56pT4qifez1tAvCabkMX7j8x9JsWgdQA26Y67T1fuDWribb47sG8RidMdu5KVufGtBGxkRqQfkd51CaujoKX7JK3",
  "key43": "5rceXwNSY1CRgjkpPwHCEmbriMuryuHjWMCrpzCtzugtPW97QKRmS8Vxnfn5SkfZATFxr9ZE87murDLqiPprnbaw"
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
