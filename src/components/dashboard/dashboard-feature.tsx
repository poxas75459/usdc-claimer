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
    "4iArpAmn3kfD2HMytpP3ryf7vTCvfkBKrDJFTVHBdU3wzP7ZtKeKZ5XVp2Dm2m18oXzQ5V1AtrTyswcCtCwxboje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eFwdxFE11BazYWTqrZkrzfgU3fWy1uS1KYn4FjjguctKfBycSkzYq7AAePWxHEwAF7SasEbXzRFhFvrehVDpKKH",
  "key1": "4XNx524vg3qospuTb7ytFwmNKzWwL2GCUmBfqFao8gj2guv6wseDF1SJqMaA3sFTcR3Er1h29g4ihwULyTiQLQwg",
  "key2": "2uSpjZYE2ta1ntNx3XnujusKsRpsbZLa1ktcrUHYTR3P4ESut5zvMNoaF58MFjzeqfzvqoSVdRm2uES3M15LxfyG",
  "key3": "eU6eTDCkiF2HyVXYaVppRKMYxHX7RRgHMekJswJH1ZVdx3hWeViSH4gBF1WQRGw3KTgnH5zuqXBAGpagARgz4Ca",
  "key4": "2yRYMWG1iyxBgeMfrEA6exoYPWYC9jRt6c5XyfNxy9ip4H5cNbfWP1mks6NuWB4Xy3gFxdKuwy9wGKN91FcLdkDN",
  "key5": "2hsHsbV41UDpYK83i5aMWfU7T3esGxv8dwsRg96m6dxPM5jcCCy9Yhqd5jdDn7C2M4nBTg1ezitvSCiPSoBXDTA3",
  "key6": "2JGBgKmwznNYnTNkcTmsgFpvAQ42sH4yrowAJgcRHJnHV3k4nAVthxrw8MViaDWPEsz1N7FToFj6e3PX5R3YSJuG",
  "key7": "3AdhJjU21sXxZznK9uTXmGy9pBAnGgZyZSBzvadHF4z83SU3b1XTR11abWm5NiEaFhnxzg42qMFX6J39DM1eeyEb",
  "key8": "3Cj38y2BS9H7zgDuN6U2MR123zotsk9ZKmMoZvrybf7RDBfw9SpDQ1FsxQZRUAFoyUyU76NwVjWHMKgu5cmaJk7k",
  "key9": "5qCAE2RXGgJjUjVjZpfBCsXT9EKR5q8miHTVeMVpZMkXnbNfLYuKMunvTxhryUbYpp89w88zoj9pMgXDytxcUzN7",
  "key10": "5Ngzeethrj5J2fPNzi3C3yVwTgXkQHbCPBN3guiEAf5wBd578KV3No1Ske8fAhKoyp6Q8PciLn2K9NbeAiZiBoQ3",
  "key11": "W3b9LVMC7VuAcYoyA33TVz2Xw9mt5daX768krd2eD6zzXv9Dux1rKKqRSUXLFkqSuJ9esfVRTsCPxnxvKt2jdXn",
  "key12": "2rwdhDVmH7zp2yN8G4715GiBD2rspRcQeZRTG3PnfDxRiMNhdaePiawVzjhvucAR5T6wKajS51yeHWqreKXrv8Zu",
  "key13": "PrPBN8FsJbTftrzLjfp9VdY1ggRQ5MCAeAmSPSfxF5ALjmi9da4SLxpMPF5eJC2sfZ7HANhDESgp3vDQMH683H9",
  "key14": "3Ephboj2sc6Zjwugk5vPGX3EotJzbW4KD9DBJWx8qceAqoGFigQfThpnRBBeKyjNNmj37spGAdjP7hiRFhFPxJVC",
  "key15": "2mgMAtPbvcPWP5ZC9jeV2sLJiF92CEBuRmSCZ94p5MChkm3i2zTSfm7P6j81xxxCZCoMrdC6gfvN1dM3LQcJVNNR",
  "key16": "dCSQyb4zqFqVChcB8JVV9p1ymDxAhAVddxt4kuWedBJ9gVxJ7vR7bao22tC5sKpXh156Rq3fFLhYU5DaY2VCdDL",
  "key17": "2vRNSS5mnYdn7xBuJhjsYh5ctj5sCTt8rgW3AtuBjdTiDCphxr6x27HTcvF35GtqeJKs2qFzHiDYjLSarPVYAMob",
  "key18": "24M2S18AjxMqcCGd3sHT7ZZQg9oSgEBWuUvUmAptugv3L1ZHDfGKqu1YAihtP5BR25V82YCQRWujdbnAjmeTthLB",
  "key19": "3ERuq5Rf583TTo8XgoLQQHF82amXoQLmHEbHJ9TQPoXUxrNbHCXfeqyzoEs6FgsXd4CqCdHbpX9fWUM4bovp62Kw",
  "key20": "5CfRTw6Sipyco1c2otN8ZJqqx93Nc47VsHs27BLCM3kLksNu6idCgwgYsq8q7eWcDmSvbwo4VAaCiDyyU2SrGS5k",
  "key21": "65rQUKzScAUkyQxK6nFuKYLtgiYVZoEyfjzHeLYKfnXvBrMrWy5DEmiRmZuKKwv2xw916MSTpMHcA6TJsb1M69ye",
  "key22": "2iKzANFjrsBBz5j1rwArjbbcS3LVRQ1mChF3JUgvjtXq7Xp8UTLz7oZLXap52U73ve7hRAou4yV51SX4i32Tkihs",
  "key23": "391z1TEios28rnypLyoN8uGwxp9Gy16C8mmUrgbaENMUivCsEXvCLmmmBQZjcxxUBZQNLmnaPCRym32D6onCYoW",
  "key24": "2S1LqQEcyFc68qczLEuKkqPzkSziG3t3LcfrojMcFiUvkhW42CsQKJJR92LjfsfBWDAX4wzPzSFhZ1ChFmFDfadK",
  "key25": "horsRdJCBPnhM7qkVP8ENN3xEaC2dfGhWb9dB5ty9HRzPmgFgePcm2LLChXtz8jm3zYyq3cguRuS16mDiFuMaQX",
  "key26": "4ieX8rUGPmhPoqitdqvyKPfUj6pv2occuycFovSqe2Jbm6WzNL8saGw7HS6LcstSEAuWrikvfFEzudGmwxYu7kcJ",
  "key27": "2KB1yWWMuwnM5CjwsHFfZHc7CuunvZkBSyksfaVZp4rfExRLFP2G7eun2L9WZmm5428dqFXpBWUPKR2ixWp2XDEk",
  "key28": "3zWWZNerLCDd38iVPgyx8amZtcwcJzUDRKdpPo3J1eNNW6dvQpzkPBhst5xhcsq613Q3rCPuWyL2xp7r6aR6cuQQ",
  "key29": "VcE5pRLKi1bGJjGjwBZJSJLsG64hV4Jzzqvm88z4CtBneRS1Rp9DSEiAjLZT4KJ94DJ6ceHPSY1AVKLyscauq86",
  "key30": "4Y2u5JL2dduRy9cSb54zBwVaUbfPgUpVFWVVX1qFAhakd8psc5UUPCEDQ48KAbyi4BxfawYF83m4FaeSsuREz4Go",
  "key31": "2eRLRatBdNy5PiLbFUyQ2eeg44LnwkhmCvTG5s9NrnFZX7eg2tYJYkAd5TCtTAubEPQBT3zPyi7Sa49PvbhWmWaN",
  "key32": "2AxRF1QkkZitLNJaXoDAYmQqpue1sZHBnrmXX6LMJetLTYs44KUGMg439m7WUbzjikss5oJ7CzmhyaxhvQv3mi3f",
  "key33": "2tNMHPq3V28zwgFBZVverie8SK1YMCYLCvimHhKVSEqAJcdNMBx5HRFQKdCYGAfkxf7WoBRGEoU5YgajJ8mAufaK",
  "key34": "3JAh59zmJmuDhBGuvwYVGyAxtWYzCPF6buewNz2GRHSPwsho6p9VME2AAoJKvbHngvg53NGfCf45iBZieMxnVL9i",
  "key35": "2eg4okKLv3ADuUMNo8mxkKjYz4QTL2C6P7PtmSSJwuhrALJvpjqmYhg394GZehHkJ8DMw63VjErRbsFHBh1jk9b3",
  "key36": "4cJz89LjoNXW6vikawPSrEECXeRZSwoYrY2S3PkuUqvFRXsSLwpAse6rQL6rgqRp7tdCrtWXtj8NPbjmPXwG371o",
  "key37": "iQgdTs2NxthvvF8mFB61maRnmrVQZnZxX3UgovYmk8bQJ7QszgwPZ9FUsp4TSi2xX4vRGnLer3fEHCRrRjbWxSq",
  "key38": "wsjVLGsmcrc2pGVvYSNGsDeMRzsghGnzVVnzLcj6f1PvzewDNUN3fH5wAQMHdKUaZrWUDvLaxe6JBg2pjihZNq6"
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
