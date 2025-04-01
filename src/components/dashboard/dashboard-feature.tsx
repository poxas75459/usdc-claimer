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
    "5f8Rxznz8tX45VUuMbL2LDnbH4mtX4F4pvVtohm2at8eEPEmJgk6dqYHBrzCgFPFxqUAuBie6LPyvxcxaYAdgrrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hhhbMz6UVnRCGawpox9okGBgEjLQrRBAbx8Wtp7qvskkRanut5ApVXrwHLWBCR6eCiQ9Bv2sWqnW7t1dGQG8gMN",
  "key1": "5orzmEX4WKVe9TP9AbYb335SgyTZCdWALQEvXaZfaacrr1TkFYy5DCPkicnn7RFFDWYqSi8Eaagi4ukQqfgUZWgR",
  "key2": "5s156JgUHqZExyEkR7896gfMrzrVuPgfY7EDYtWiTeRufYfrYAeV8gsnzRgjq8t5o46ynKRoESse9haeQgzoHhHm",
  "key3": "3KkJC1MxNRXfAniSu8FQ9oZwm3Y6wb2ukVBsTb7VLZc6Y2ALqbxDjAxWFEawyKNdyxMF8Z1DKvYFPNM4nGcgtzpL",
  "key4": "5yZMJyXu9Q18zkLWzYbbo5ZyxQ5zQDPAR5NBxctcmDqWBG34aMF3jBTrku6gMaBZpfNSNvVjdtE88A6a4Uq3U8q9",
  "key5": "f4nxf1kckCfUFqt8AES2iMLqC8thMZmT7W8ccstEUJtpNbLidLzci2FJaWX1g2KXz5ivTEWfNwT2PYPEbhdjHzz",
  "key6": "2JUkVqnUYEyrKddQJ5dmSx5naQQ5fBSNukj5TnLxYw6rS2E6558RxQM7fjTB1JHYEq599Ny7Zosk5AHF4eh9YrS3",
  "key7": "3s6y2mCVsA6N6WG4WTJXFzv8MauQFMcryTkQ3MAoXQC9eHXrweqgzsCSByNtiZmMrrspKP3LJHQBfM14k8mdFrU",
  "key8": "2VoVCYsQLUTKM7EFL3kCLG3Wu87xtboSUWoXX3LEg21AeJFRakM5n54DcnG5ToqygxQjKUjDXAED4oDpi7TQSiDH",
  "key9": "3TtQ15Jgw3DWnVbKWz9EPLebUs7xrkjxfqbTZVkFGtoV1GtARCn5cwEkPdBfXdda2LYaLUiYcb7m7js78Hs1Mv17",
  "key10": "645Kg9cMfsqmxRvkrFBuBaSSZShZLtZJVxAMYUUtwBobNbap84m6vWEFPGd72XhBMA9QVMUApZGX1PPxoRJhnGyb",
  "key11": "4jxHaPxYee7mPYaHszcb9gacgbQ1g6d8soT5UtVuTjEqvEnZN2g5uF7agGdSEJ4A3tVjhxkQN74Eezp1T4weuYyc",
  "key12": "5HVCSkzPYehqqRTm5zhHFaWCj3m9ppqT6uXVVo4W5f3XYr3BnAwT4nTQNX3PHExcHr7sEWwv1HwYMFNw2nwWZp1s",
  "key13": "5y3rRkndiVS3a3bSZkEqUbXpksTMUcmZSPAScFGXxUs2nkewATd4jCWPfzzEqMG67dM5G9UEpPNMCdMKARMiA3yW",
  "key14": "2cJHaX6j7Y8pPTHNkzoT4fLzF6eXKtDz2z1oRnUdqZrY8vwcagAifemZqiPfyceAVMzNKkq279AqBaU5EjFo6Kji",
  "key15": "4uTZsDzbZobh8QwVqgehHdPaG9fBChSLKsE7TU8CVsKubTQqPTiAPmjemBD3LvJbaWt2d8qk5wxda97dmaSt4TYm",
  "key16": "43Gz6t14yHKEQSYvmPMEME6sLdazbaqqi2Lz1Wx88iierfS2974paMe17Nhzwnpg4RVbCTpSKpbKxsJud9n6hVFG",
  "key17": "2ZmfBejBz9wfzfeD8ijp2rytTJnsWDXsGNwfwSiYxZuQazA3Q5CggeH3yoVH5wixEXQbRK4xdpdSzsM9sR9sGuaG",
  "key18": "425JaokwZcLEpLADmaMM8ifun6hnYtHFQjC8MdBZBNG8MdqempWykm3ZaYJo3HFVh7mxot4ZDfyRNPa6hLCLXHc1",
  "key19": "2p4NMjCYRkVkwWD4zv46Bpk7uF31uFNfSSMqa8tZxANFBE4t4ERZzP65vzKfquXBNK2VuYMTHQ6tzfSDRYMkpkeg",
  "key20": "E92AV21jKTZMJkTsP3rqm2unru7vgpMLiUKkk8N1X98RuPLhGuYb8biUhgSHqE6KGHTsWHHspF1kujanX2x8GfN",
  "key21": "49vxzHADCs2tgcUG4XbKh4HXSMJoUHSuztXm84gHvtDtVPqVsZmrkqmA58uybpcxSHkd7guJpBHKYEy88T4QQq5v",
  "key22": "4vsGhKzZRBK96RLbaLrkqaWUnpzn5WpAAbLcbbBTNsMtG743XAGE9e26Fg8guXLRNPsj1wQVb4CqT1B1zSm8nuyz",
  "key23": "2y7cw6NiZNuMycbpgUNTrmXDRUJBJSX3QPrPcVwa8FskAVy83t2Q6jwnuuTcCZskMD8egWewKfMqZofbxDtgT86J",
  "key24": "pYJsPhzfVZbfBLdadLgV8AE8EU81M2qb2j1c8E8WWudKS72iSwacr8rcAFXpFjpaqic6ta1MTNzyrAs26aG9E58",
  "key25": "5UfXrDnmJD5P6vsc8GYVqP68Go7aFWzGirLnCinVG3Tet7fyMigWmD6x1wyf3JyPSiswT4radfhi9jgnJhm2xJ4h",
  "key26": "3RGktVgTyi5eL1Uouv5Ktw56QJXPxgkjjcr981V47ZHP9bf8NXkgk4WnLziQjdpj8REy2s4dbg3U5CHNFbQhjCwn",
  "key27": "4j2Xx22m7WdnwFdCHwwzYgKXexLVE7k1oFKDsWmzHLL3z6g5QeZuBqYJVz2kUKJ1899ZruYqPQ9pWePYQ4qSXVwc",
  "key28": "2gPy6HMrGRE4bRagZck7pfmG3G422nXv9siN1Dm8HMp8BBEgS9qaYUJKeteRLcAdA7SCstU3aqG7knZg7ErY2bZ2",
  "key29": "32pPPAwL6xvy1ZDCEhaXSVFBuKbrSiFHtGXkifPhdrCct9MDo4YC6TK73Ybux2Q5ZTABeP8vgbRqxFGLKLLZ4LZk",
  "key30": "3DRAYL3unRtNrmqw7fUGzcbgcrjuw33mXpBhWKBLBr9UyHezp3w3nqJtVisprTPY1AcYDAQoZ863dUZGiztcht1",
  "key31": "3wqSDJPTCdMKJCo2uUscjqv3bS16F8ax9w6Yq1qAsRvwAQVFKoHLurdywAFUZG9gTmY8fWBkhR5TRM4rTYN43rzE",
  "key32": "4Ps41w9t3rfzxLN7t8eNAVnktabECBmFL6xgSyyrN5JcWaLW7weTZmAg7ZT8kLh9BpuUhGzWjDJGkRCcg7FWBJUY",
  "key33": "4d7cvMDgMbcNaL6j9CjyvysJ7TBwrQFxWx8oT64NQLkyLBq3rkJ8svtU17oAYP9DCBh12KKWdtEdHQTi3HeR6mkE",
  "key34": "2xe29x68JWi8zcp1yJ2s3PEPb8uhaHXp3Pjs1Jha4BZSe8G3uzFcZpnFBVqSXYeKt461fYtJgooDSy3jBvBe5Abr",
  "key35": "2GHNr6garWngGu7KUDup6YPvVniD1HoDYvbQM41HT4a8t1HeKczQemr5a1b6AafUG1nsyHcBF8rm5B2gmEDpTza9",
  "key36": "5W5jrhsMKVbb1rXGQG1ptW8hjiU1n5hjT1op3gENhrrwptgxaFj7hFew6NVY1eyLxJNwuxixeFqhorsGkgHS1FDE",
  "key37": "4Y8GTKBQEEBn1cp3N6uidcjTJaBNAV8Ue9Rn8nfnkEiXh2ZNWKPT4Tar3DMXLYw26yezCFxFbvXmeJ9CpK8jWjd2",
  "key38": "3TgJ5MEbhwyveSeej1rxWJ6Nu4gQ56qYdgSVbiVwpKrxXviF5yrfSae79wamsfzdhtg9yZuKoWiVsmGbWmQ8v4w3",
  "key39": "m3xenM7aD24QHBgeZQnJLPJcR8hCKxrEhqcrfVbhgKzdpi7nQngEGNZ97pz2PYUsf63dLg6d3QoQbwFHMzXHn7e",
  "key40": "48zEwK3r5UCjBoctDiH2BDFGQ5Qu5Xmv1tkQnGcn3q9NGBR772UmoDKcL4VqqNWL8DyyUm74ep7Crg5a3gSrVsvx",
  "key41": "5eBCM7Fp9AEM6Mw6pvMJqRV2ZaqBX6qzHXetbhMdhn9WDSwDq3BtdAx7sbUYkUZDnTKXGDbK7aA7KVcfjAh23U68",
  "key42": "2dTFpUGUF3rbjeiiT3TUpPYZYJMeDkYMAmn6Haum7KjJyRAAUzgcKGrPHN3Mkh13RRedppgkQpdKyYQQhq3BtHLW",
  "key43": "5cqCpmGZS9z56ASAjA2FFbwnBLgYUoS2ecoQWH15hzVbNZAx37aLDLUr6eqFB8TKposEw65FnbhdzCAoGX6wfuEx",
  "key44": "5jQ2y8FGPNZkjZ6HQWaxi9RQV6PoSB3DZac1ZgLevmz2V3edJUaqq39JrAr1v4g26S6GW7ahqm5Y7Ct2Y9n5qpss",
  "key45": "5jBhSQEa3qFffK73R7yTQMWkpKDeiuFTkExqziK9ifMmt6Kbc898qRKoWpQ1oRQfMtAznUFgSDYq3KxHbdYZLpbv",
  "key46": "hBFmT5FReo7Eavkeys1eHZRXnChQerxi3MbidpGrcrXr2QMHfTsbhg89XSA3FCQ7YTAVuX3KJgqNmVcnV84KQrd"
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
