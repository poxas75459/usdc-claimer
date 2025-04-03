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
    "4HdhJDjSczsjTG5ARTzQqmUVP9cxR6VSG2o8Kx9GDRA723J2PMAK3XQuZH2a2sLx1xahyEgbszuBf2DUEnRUMHym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D5MmiSnRYJjWRDvFnrv4wNSg8oD3Nut6ohzPGVqaJ1qfHoc3m7yaHq1pm3T149D5h9DgkQaRghQEwBgFwdKZYB",
  "key1": "4VkQcfphE55xdxAgNfASShcTq6jFFprDYSMGwPUiq5Z9EEBBMYeFDGeYTHpQyVNSynWJPbFFa6wzGrTdTGBJLvM4",
  "key2": "4N3Exbrhrp9aTTTknLKCWiCZC8VrRENUZoHHb8gzJ4Mv9DMySgGEfaBoAqL8SL6J6XrbVCfcXty4MBxcmypNnvMt",
  "key3": "JNaAoa4uRYs63KTSQCpALGsnCwQzMw3hwzBn17rGAHqg1VMiosuQUe6nMLpazCbF55vLrtMG2nu3PWQQSZkbb6V",
  "key4": "Ud7D1YvVzKj3Sake2c62RwqpFa4vShN1zBxoqYvrfvEz1VGJDX9VACwqyRCRjba8psptqPFsveEtU4R3udWAeQY",
  "key5": "2vT9wN77LKKJHKDinGJEF5m4rkMeBuWK2YEE72W9A9jDPEqExcyZJpaLd6jPghjoXDF6h7Td5YEVdiPxgCNEXbCR",
  "key6": "4FBGpfHYghZtuVeMVanKFGFNhaFExiDCF926DFTHb8kesv7QiKnQudXQFQrSB4segL5XdaNNzDaNrUwwxan7roc",
  "key7": "5T4mbVKCUxwNk3pxjpnYCa37JHtEGvmTGPbGtVhAmXBhpwQ82Y8BwSRQBThSJcAiZKTFVXy1sebgvCngqjqjskBG",
  "key8": "Jd3TmSJN7no7CLGFJVJStr2P7T3MePaWK6hkkGmycUYK6JC81Bb1yCosUVMnnLTgc8aNv2bwKEtRy29N9nwmuWA",
  "key9": "3jubtT2DCGPimTMmqDgbd8DpupuBr69AP8ynobSgy3q3NsAL1g6cXnQNZBoGWCQ1nYRcQDZVHF8EQYZhpCzbE4Zj",
  "key10": "bcoxS2GPRYD39hYkbNpYcM9fU4PRzj78o3CzuAqydtdesiy6FALxiW3y8rzGLKDwvfhJmTFATVrXd76ymsMB5uP",
  "key11": "BuPN2zQRyC5StZkfvKT77q8WqvJhNccRiaKRWaMi79LeyKsq1YYsjVLENyCxGWTueUrgaJ5N7mXBYtoLk2Z4hYF",
  "key12": "3GMi3sJdpmr1wmMetwqxrsHtcRUi5isne6kygpZG7L3y7DwqGY7eiJcy4nKYrqftZzEt7nBs4niDzyzLPw68zt4H",
  "key13": "4uNWsjEPKZtTrq7a1NazxyL4kSab4DyDEFcsJAxUaHDA4jY8gFuUQZ3ibWPiVTo4VUc5ELxMArMMLSUPiT821MKu",
  "key14": "3XDmyPtWeGwJAxVPw8Ch3zrzX3fZp24ttq2VTHQMU3HqgasLWiv8EF9RaEv79wrRCqKMTEv6LbDDPhGDZdww49vz",
  "key15": "55tPR39Kf1bDKhuWSEtf9DNz2qKDaEoXnkdpMVGtFHivNxuLiPfNYSSqF7F8dTdprExYojC5bfBVhfnknQYGjJQd",
  "key16": "2S8atYRwM43aQTAwkhrZvc3Zg2JjiphPnTocKwxEckWJ6ggQ8sP4XG8bPtomrnuSaX5GZJLgooRNq1FbsSQBBhoa",
  "key17": "aPhFpj8fR35wLajUJcdgZoD7F1WHYqtDiesdZ68YFVjUfZg2BjFG9i2yYYpWK3vnTgXdwd4nT9QQp5pMapZgT2q",
  "key18": "UjbD7M1sAXxPpJCSXKtttpcTc46JWwrDmR37pzjsi4ZPoLZKGUCKBincMvR6jkidgCREqfoRjwxJgQNz74TjNo4",
  "key19": "546ePxorPYm5mnhrxiJJEm7iysvrqzUyMzvLXjAdK9z652d5E299Cv2tQz1JrFrhs2MvMQLh2cx69aAGkdj4FRwK",
  "key20": "5kaSbafh4qqsfv7Gou4yb9p93ZrpR84x9EGLoTz8zL4LwPKLSmEk2DRYJuhJ32jyqKpdHmUwLtKUf9s5SWerLx7M",
  "key21": "3oSTDCA1PL4rZ5N8KrUtorc1uhZTCWrVtsYg3oGMyY188QrvngKPzmtpQQdErU3Q4fVoq8vAj2Y2ymWBS2XSpnrA",
  "key22": "4GqmhAwrRftfNi5ZJtx8Pm1LmjvBs3xbao2pXWNZhzaPvQgDCFQwoBSNBNHMnSDG35yy952uvtp6CcUUSmhatYs1",
  "key23": "5mjnPuddP9nXUMYnhC9BP7aFnanAh1sB6cGf9B8qnkBhFYnKK2HtuDzf7Q5Kz9TyzASJKSrsVu9KoEY6LadyyvgW",
  "key24": "3saVQfiy95o9EMBakZ2u1YdA3cbZ4ZJJCAtfASNT6tpkJPiVz2UktgHTbtFTknX5Qa2SMgaJsu5iUiYwBhGS9Shi",
  "key25": "51rDtxoEf9iY9gPsYBUMEywMfwBfGYaihyn81tv2nV4Lhq2Rdg4xYHWEBvdb37waPhHMUx4YLFq8ys7nXdKsg88D",
  "key26": "5Vq518fPberhnFNmi7U2iZmBVYaXQqnf7fQq1bcqikk4bJMmWNWhrzuTPuXHb6T9ijmKwx9p3WfXFQHfmihgyh2T",
  "key27": "4mjKe54FTZ5i9wQf8fE7X4LXhUcing9HzRHD7YWmVStMaGfc2a5X99nGX3VSB4LaDuMYKwDps8yiNAyMuRv7ijm9",
  "key28": "HYgk3gYi38NPrvhrE75zBEMZmubkk3CA7X4jYVza2p75FYqT9GACuwVyf9a29n78xf7oDPPvW4EaMJSs3ZcPJtd",
  "key29": "4ef2vNrnjaL9UarekppRgB3uJ4miGxgnqdzo1YtJgJZyPWxYm3Mn6huH4kPZucgf1sLWLJAqxubZiaVtx9XGQ7dq",
  "key30": "2iXNT9RF52HMgL2ehHzgnXMc1Lubesiix6uBuZ1Fn4kBaREDQnbKivBQiZCkC1iRBqgjiCnNBCH69MVJThT3pRtn",
  "key31": "2vu6SCwRnmo1Q7S3LuAPFhhFC6hRw6NpUEXvuGcERPfhdgQkVcTh1y9RvSe1wdFprtiSH3N4Kh6bCNJRFN1JcNk9",
  "key32": "4FqSfwgFMZeThh9ifwyFPmRmaKxeySwZG5b4j3NZTqjkQwNg36XnaN6wgVnDEn1VnvSSK3epXabGQsnTzUAEvMkZ",
  "key33": "2Xk4xkwHaAw6X8uB8LgMW5ZkJ4eqj2kGyDZQt7yJ332CumNG4QbaSNdvJLRTfi6MoBUWgkjuuyPQocQh593TXeQA",
  "key34": "2RJiCrVLuwbhui2EctFP8kTstBWARGn4VpgmgAcxDDuaShdYVXDWJsvGVSpA3uaQDPAjRv9D9gZeCCxsReDZYX42",
  "key35": "4wAcgcVRec8Gro8SsNTCdoKCiSFidohisyMtsxRS7zaK99vJyfWncm7CgbjRi9jw8MByu4kDi8oENkybZsD5HHv7",
  "key36": "41a7S5Nu78T3E2yeXroLgQZDGtBthquGKueLgEmCcm3MGJVa2Fw13hZev2QzdBAV1xMSSf91QststiaVxqL1AXVn",
  "key37": "2q5r8WWF8ar9iNVGztTLeB2x7nBME3CRPGQ9dSPSLwQym6qASiiGiXosiSSQLFFokw4wXbwVmXdNhNjzzwY6dDZv",
  "key38": "43gfivDDo8iDV7zt33shRMwsnrTYaarBCxbzP71EqYFA8Yxwjo2L2hzmctfECRH5SGbXKy4iy2C58Hm5BuTr8jPE",
  "key39": "vZqXgJxfsm3Q2wskTJ1gWzUqTQVVYStaFbD1CCn4WGxMvWA9ftJ1X9uWCqWeUtzw6advvqYdqy8x5cEzADr8RM7",
  "key40": "5tE5YYG3J48AKNuBsZ7cU7gbrMUKvWfpia2VL97MJRc6258uAQrr25yY9vfnyk32H2ZE996iZE5FbHHrMxCTzgDx",
  "key41": "5hZPzrc7r97z8PDQQ5z6HkpvPWpm58HAsg61goPzgT6M5NUBBN9NmJem9rToxAPkdGT8UGFgBGxXWu45K1RnvJxL",
  "key42": "5XVNWZJjJn4f1hKAZrs2oRAeBQTq8UZiC3YRsyo56wRxge43m5sYqXRtab4Y5wqZBnBfDJJv311PtQhsGKBSADj8",
  "key43": "3sjrhbEU7mqb6KC61RowDcu5ipxRDokg71VpJbXE47q9XDJ8dXWCUv73ZXWw3tYrt38pBhK8sZaPwUB6Qec5PFxY",
  "key44": "3D6MyLRLq4xuDdiyFghBjPPAXfKrzeDrNPZiNGr3GpJNHVDKbF1T6T3dibUoFSJhCFvCfmek36LcSp8URdL7KjGp"
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
