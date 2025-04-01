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
    "5KxkQFRx5Sh4pqECV5cr9wA8yK3SYjWdt2ZPaEDCVkJdZ9ok3wdqQRFmSWFE1KmJ1ViPWZEkCLtu6XZhpRrdiF8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mtfCB6LDtGCv3qtZjS4zCPwPBxYWrgB1rHF5LS7N2QRt2dDzngmsb7sbhJDKXE1G6rASeSYETH3HvDsJVHS3DNb",
  "key1": "i5fEoS6SueHiBqS4cbxWRfDCUb1MZg52sDsaoJioXdBE7yih3DyPERZG5sDeJ2d6udHJrNFuaehsqmo6QefYZex",
  "key2": "2F7MksrjSrJeyfjcJnTuzBZ8HVJUpGDez2wCxNXAkZNRmNfufPVVMxvqmX4xu1AhQi29fVb7BHAJBVeuLuoN9XhQ",
  "key3": "2oEoLrvbEPadgQADKpuggPMCAJmZNaDqUX2BUUrXnxETLQtpcvGULgAWvoLMktzB3rrJBwRVjuuRrRnze4PxuWa9",
  "key4": "2h2mWZpknXL1A9EhqESpH11XFcx5UMzUDVNLFjY85uhpbSkKkSCdg3ARygwnDpt33Lon2k7kKVjZXxHV8hxyepfr",
  "key5": "4BA3pmpCV48o2Q1Rsz8aFoDpkaTgfd74Q2i4DkGobMThhbvszPkoANoYxDWvuQGc8eKV66tVKc6oM1iVGQ7r9dTA",
  "key6": "2VTPexvyaFhRKNkKecn23pxNyjQrFeBHLrRRkzgkUG6ame53L6o7bUKyFrYLNr6jRJMWneP1zYyPcJRa3znpYiRb",
  "key7": "3Nx3asP5Jc9uvcXqGFCE1r41eNnbwb2EdJaMqKihCZZ2hbkwPELzK8d2L1KTvTXjvS1g3PG6Qa6XAn6x35ZzEkCp",
  "key8": "2QqiQrAtC63cokV8bypFqkXoAvyEGTWVJS44LkXkeFiK2eQmqKMqk71HZrLCXDizFyrnEZtDH4eiynVApGT8LNtV",
  "key9": "419faLCnwokzVDLXMKXYUh7GM4iWdqrU5oEQKSH8i6z1KC2RGxRQsTea7NhWNa24xpQcYsF6azkWWkmJnemyBDLf",
  "key10": "3Xt8AxMkbsyqGLxgjqJJ3t7HJT9MHthEGmD6V4m3ERQCyvmX4oNd7WwWBupJcrxMcN9HZAfUTCGEgbvjSyuuXWyk",
  "key11": "5feAMUB71wxBNAT4e4zRWKrxAeyj17NwJSYDovn8c7iUNY8zezy6izEr91z61BshXkzEqetdyBKWT5WzbmHeq2uV",
  "key12": "5aJnzX6Gsacfo5ycRCyqNHopskmGRdkXNohqfdRPimRFiXoXLPPbW2L8cZ43e3AWEPNyFJNwJ5vMtneMftiJ2EM2",
  "key13": "62ks1yWDpazLWL94VyTa6pSVzk9XQwmMjoTCKnyzmURPoyXCXccg1yTVyGyRqdjrSZCP7q91XiJt1WqVVb2Gn5i5",
  "key14": "2GDLzVqhkwTvMRtpgTRCFJP7uEDnYbeMpov3TPJXocvvRp3njQ8y27tKWM2qmoTC8gCK3bfnaJxymnP9SMAvQrVU",
  "key15": "TTdzUkc4K2eU5i25EAhQ85myvXbKhiA5HZ4BJH1D16oLoyr9GZhUQh67BzdyaUB85sZg7Gs6CA3RvsG4SU1bhfn",
  "key16": "f5gr375W6jyknCKJ2XN6Z6x2ijRxMDmREU4uRM3viLyQ3WX8arD71PSCCj2qpEHjiiE2A2SBNRktKvHQ2svFBLH",
  "key17": "2mQpdyTovcntUbUpi3uBTeckL7rRcBdSGd6RhC76KpnsHQy4eKy7skCbMAwgDn2HN437XLaoYKcFDZ4BBESswc5k",
  "key18": "2vtAx3t5tpXxUcY8syzSFpU2Rb7bubjZ1u7YwaZrvYJx9n1uc4ceDp6tayF2yPw54hkLU5RDnKFyZMktBFYTqoxQ",
  "key19": "26hpUmEy1L3d33c21kvVaMrL8kzntYo2TSiQfx8cZgrTgWAtjiykFyBzuUTFj1DKt8dyipwhxMTKo6dPv3iyhZCX",
  "key20": "27zuWJtCvZVTk3myrkr8h5mLCay42Jn4Fto88dgpNRQycxpWYxfv5wdxbDbEJuDpgAkVvu88jMbBfA1SvpVdpUXv",
  "key21": "rhjtzvcEJJJTx9ydv42476icEs3iZZGFZ8KqCt1KAyyTDFEiEemL7sLWHBhuV5m7hQyqdpSEHdB8Fb3goV23FXm",
  "key22": "5TsEKntAkzGUk5efbatJeq7H863t6o973jCcrnnaeqzQ1hYrp4w37dvyNpqeTRVEHuciEtpQAPdtCicaCtGgKPf",
  "key23": "5Dh5fKLPYVZv9Hb89Es3g98c5dNvM9YTZH4XZKFzgL9vLGo8Hz9YGG3GoZxHwdSv18JFPnouDpq8jhwSg8JR6kNU",
  "key24": "3ZD2SMGYGPMTFS1uZyHQdYHptBYpAFVTFHTYXkoMtUwafBNnU3PsXwgZ7msqPKLsma1LZYQns9NbowQ51k7Pnzyv",
  "key25": "4KzcK8giRKLyc6WzEp4WKb8cPXELTJpeec9K5P9cfkkUN7ueuAXYGt4aqNHyfoxA7F5nJJtM6iA6UiCgzb4yKZc9",
  "key26": "65Fr9vu2FcSAe7NG47WUBXiEwAHurTWoddETessVUiFtnfnZASf9vbY3wEhvC8MGpTRHPhCAMDR5BVYMiCBHETVt",
  "key27": "39ScfYXPTWkkyXWhjBBGD4scpmihqu26NC7fV4TVURVQGJrkcXcbbhZwMKPVKiiZEU1nDnxVnUJ5U9txmX1Gbodr",
  "key28": "5VvA2cVGjDnYbyqFDWymDF6tfRSBojjD2ndURDUKAWf1rkbh9EoYM5zMvi9f7vtWymrqvqP1a4B1tNfEeY38qkc5",
  "key29": "5gLGrXPTtuuJJTuzWLjTtKczQZoFk3HPv7dRRCqWBD7aejpRd63pdEXwr8jWCEF5Hk7kQKGuCZNJq54ScF2biBpS",
  "key30": "21msYWaMGiLtLu32GBj72MviZ2ag1FPovHpBqMMz832E7eRv4BpEtXXoDhjh9HrvnLV1fLysSZhmkfGCuaqXKZwP",
  "key31": "5WrsijZdrJUQ5rn3SegTua9iAqBgog31X8TrefWVLiTP1eqzeyygc2yZTios9bLSy4MMeuswKaYyCi3NqXLBaGpQ",
  "key32": "37jYHZgwZT1pTMjES4fJTWQ9eA1qQE4Bqd1N1fnfo36iWoZ2TwGVP3xkZUBoCnuDEkeQZW7THkqCfTqT2ndjx7Hp",
  "key33": "cuT8GYPAgHUtKD5wb9cgp5SNG8r5r32yKyr5mZ2FR3Wi7BTjTxd8hfvZgR1zXAVCH6KPNkmZFdZri2LcVpvexPj",
  "key34": "eGFh9c8gRmgYHqiGgRBaRsBy67h3gY8z7CoVC8xRvb8BiXpg5jktefDsrJ4V5mJ39cL7fuMKGZ6TNkbfYwqtRsw",
  "key35": "5cxsB3khQnJTcdDchC1iKQdYMKftZT1ufiJDdBE3VKYwKYhpgywxR27P4s7wcTJ3Xf74uKGzLzpawruFdkJnDpKN",
  "key36": "28HtF4Cb5Pxcc1tUgtpVP6RjnGYDMvHv7cjfmuhd7F7f5jhBj4gwKSk9cxgPe7CYrTtUH3J5aQpLbxKunVLQXYRG",
  "key37": "5eVhZKeKoz2PfgXT2NM6d4LVJE7if9cbi2F2fuCy8iFKnRcLojHaoJqojkKALR9kz5Hs9NtttyAenAKuuY8UskQC",
  "key38": "5UxA6zevxzH24WKKAaxsFc9Ni7nDGwrtUfgj47LgqaW3ixbstarEC9aehA7boSJSptytzHtBvDBCUqRHQRtcpMGN",
  "key39": "hjmi8m3tD8k1Xpb68ZStyxNT6Uvsn9KtD3C7KKZR7Lcit5S1RJY62iFrkfEk2JkRyYDHEF5UkDV2NgKTXnYzDM5",
  "key40": "54dQLtghyrcPCrMKC3MYeRFREQoZR6sJM7s7pPgyL7nYCrvVhjRoyyazDNSSVs8gfXCM4DAcdXugYsytUSM5YzMb",
  "key41": "2zpGPcrGYUYb9VmsTCkdrKGzXxd4tQijcZQTT8Mu62hHwUGDZByRsYTuVZyC4KJWcwbtT14KGZXFUmUoXqfyFhCQ",
  "key42": "5LHsWPwUwNKy95pumH4bvK2FPNCFQgM1oZSeABKWFJdDHVjfAbzokPBfUSsAnaM1vFffXuwK3L1aKfWP2gpgQhXi",
  "key43": "3LmWD75ap2i57bpnvJjP212tWHgEDkA4AW5w5jYc4yjggNV3HGznTKbX9AyjLEYYmfvAk1qqCvsYwNHfBhYbGkrS",
  "key44": "3K5nsPSWEQCDosvPFM6xnrp3Wv3S5e5oaXULEp4KqrXtLUvU9ru8MJiD3sD97G5uMYGwbZbs9ZRL2ffswQnSK86d",
  "key45": "3tfArHiRgftGZU6BjCts8e3h6h5irS8YkHpFvxyJNBRXeJ24ypZVFag6mPCG3UaUJvSJRBLHoaZHYY1sSCNp1nTu",
  "key46": "3HUmDwejq2hFgLP9aXTJYYt56S8HRZpUbFXTUbeAmDV84uk5WBpqS3NbFwfgpAwMM3jTQxfZbBezhvPqXbCTbmE9",
  "key47": "2RoDLxhmBokM8xMYoVxvJp8SMXmJViC2DUG1LFYSAoJVx7W1mgfvL77KE1AQH4f4k9yh5XmT1QnaaGmpQrhPD5Ao",
  "key48": "4KpdDYpmb1f7HiBthhXP1MoRP8MDnY9KcxXjbfZFTzSnU9pcXki4XBnwmZtSPZDSGwgaHFBpuRz4yt32fdaYAXsH"
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
