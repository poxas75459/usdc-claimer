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
    "24L55c4pSQMRyg64ZsLCMBejYm9rgK3d17kp43oYm2uiwn4b8RHRYcfv57wMwWNeuFrXwVy5YA4LC9TkRrkBdJRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VbjGu9teKUEs7pZDFTWL8KfF3jpUGGGhoBttrVrb7fxXh7DfZz5Fx3Cb2jZNTRFt6ymgj7mmPdtL6roLTnbhyNt",
  "key1": "3KEtBenVK3MTmqx32C4CPWtatGNZ8ZA5Ea99XktQ8K8MVH8zVMPEUByjZentQV63S8egdbhGptUgBEbj2Y2GjybY",
  "key2": "27Aid7pbhxKkEbV82CCuLf9uywpidp8QhzdMGZWUFMANPdUUZroRNG9AQpcTMCQmz5hCsZYDJaoa7oCNXu2o6enN",
  "key3": "f8FTzFDvK9Q4UdtLbUEaw3B4w1hGhm7EkaQaomRU8vMGxeNBFHgNW5T7MK3ALhFgvwbSuZMiZJPht8erTkj7y5H",
  "key4": "2dwEBAwtkMQ1k2wdzhjhZAVB21w9hyewSUttKnLB1S5cgh4JRZv2yeE2aNC274vxaoMR5KFrNYXPeu8YrUb2GHGg",
  "key5": "5Rs2zknDbPDZEHfLm5Hhim5tMG8QWPt9Qrc6TS2AfEVCWr6sDcdNwLvHemtabC5zViqYStXDue6bKM8hWhoyTR8H",
  "key6": "3CWDA1kmUfLgcE7CXF9DYcmVyEFT3USTNhzCDGWHU7xZNPu7Cd6VeCziefyTdVzQwWFqETkLWcWLvnKTiuYRH2mt",
  "key7": "4Q38cDSvJsSGoFU84qUts6ugJrgHDdKmwPdbndM11ZJxgZXzg6MicWjSmhefPbFo2jvszYAc7dzNYsL1eRG2XFYr",
  "key8": "5o5MFF2uXWM9sYh3jzDU4jxwT5pAgA85fMrhK3rc5nPqXBUbvanHc27GDSP5wVb5pma3dZtyDiizJMPTACSjzCvJ",
  "key9": "3J2E4njSXBu7MJZAJWZ5h9SSL69882H5XFuP4veHiiHhaiea12YGbaMJsW2yenfjutozHKhVb5fDf8pfEqbNpTMN",
  "key10": "4RTf2NSUW3rmVAUJe48EvvyukxFPLPW17kdehoRwbeJE33kVJ2zorMN5wzDArfPr4nc2RPkRzqRDS2wuSwWibDh",
  "key11": "4H9h3ofipk6PCMQDqpFQDrEMA8skgj3YvxAmpvQWtp8872rPNBSDzMyUMPAoQ6PansRAZzvKq79tX5o867Uzevwb",
  "key12": "65pEBfgDnjKtd4iFNTU7bAUWS3RPicBAtBEfyeAN7TttvkKWFAP5vSK3S8xEWHczSgzq6K8gD6T11LgpBpiZzK1E",
  "key13": "3LyVr8a3AF59fjkjvobQCALYQz2RhrLoDi1bf7tr881xg6JphGeifrcT5ahN3LfEEefAML6tKckFoJCNJFriqVBw",
  "key14": "5ec8bFehnVURzs8RGEaRAGPtMH1x7sFuE3BtUtyFPj8Fb6LgC5fnicQm6xksKVCBeSYgg4x3AsVbSPgqYGccRwRw",
  "key15": "wb9hm6J4KSCjmjDhoE4kSxswuNvM7SdB5Ez7qvf8yr2vpNZbvWDSjKunmHfhExEQb4JUvE6buG1JSY66ABnKEzn",
  "key16": "58pwkzXjwk8jZqa7YGWvafB88HAXucBvzDdpv5uQA4qQHUiUhpscJYqGt5vhdRCdTefeoXEnkhWNsUVD88vmA84o",
  "key17": "4RDhJWMzE7Zs95RrrcJcZAUiHkBsFuWeTowV548ezTNrcQL4XGYWHsZqHTYQs5FMgsw3TjepRMX6KCrohxqtCyCV",
  "key18": "32t2yeQ9qB859ERdvxhKymx6kU1RVWPAz3RWV96iqmXgvfzrmmy4uzJxrWN7Szy1R9nK2DTvSDq9X6HcG4KzAuP2",
  "key19": "ZVanyCk3FG2V6dC4gVzHD5Gaj6eTDmcpKv2hHqSASxYgWXhKm1xVTqMjm6LTFMsBBgYxMiTK2GA9CkJH8w8ZQJr",
  "key20": "3AhktkQ9yzwEL3LpkbUp1334qSqv8FYsYGPD5NoQTCLB5996ycNaHgYYYUZK7PT8gQqyBG5hkujvwNTRtaH9xiEr",
  "key21": "2412WwGnv5HVcazzr2D4Kgte4tiJPeeVJsK6rU5WzQtNbGu4SqicKhkheg5tRpwmCbZMisZXR3BTzUcbQE5uvFTD",
  "key22": "2JMQGrpHHBPTBpVqpsF9duPG5xnkC5NFo5CXki6Vn7BwR9S7SpWjjkUbsAbx6vCCxoWsnwGjk2ifTmWjqbfsMcND",
  "key23": "2WrEKT9kbMTgNeRMaRT38B8czMrouDaFBozJXhf1eSJ3KAyxNVNrgZfUAJrpjtWeoqNo56AkuWVxJgJTFF8dkUKn",
  "key24": "cr9kxbTH5wAndtSB3stN7TLANXyScKkPw5Es4wdEh5Sbv3u77Zyfe349dzTYS47VRSFCeqCV3gWgrzkBFce1Xiz",
  "key25": "3oBbB9o1tesugecVtHe7LHRR5BWUvaSaoJSAJWiDwTt3bZ8325xJFbqZemH38SoUdQXvwiqSZpsJBKLaNZ1QKYKb",
  "key26": "5FgSnTUWzcA6F3YxRgvhong5uUhrCJrTLyfZFk9FJQRJEopupeyk1piWf1s6UvTBu7SthQVjhyGM4b2WwufGTD6M",
  "key27": "5rjJBs2UfPmHxJ19FkQGHszPcTb6Y1sbmgv8JEdhoNdgsgLdTvYMptrtEMH8cSiNoQr6UspYn9SLa9wWkAYHSxiT",
  "key28": "3UgEsbgPGiQR8dQMNvTThdJde4saRDR1tY3dkxVxYqoFj1wKaGnvnNQ7B8PybmTxeyfyi7DougALbSTYPxueZxbU",
  "key29": "xGxo6ETrqdCXs9kv1vg5vo5tyEo8YBxQyiFR3b51LH2CwGGM8nG6aVBMbQBBhcmPtxz62GCt5tFuUPFJz3yP1YG",
  "key30": "45JA64KdrjYorB9HvQMrfWWDbkjHtK5zmEY58koDNZcg2YwxjR88sciQeMYyvN4swVAmvmfCEKaqoRuLXVm9BF2c",
  "key31": "2B5CWs9tCpRQzHaT3shgQzkMQV1r9XusLFa6x2RjgWzPVGjsaEdnbKRrWoGbh1sGpQt7mcoLzuQ5fwjn75bgzMsN",
  "key32": "uJvooDx87uQNfdBwFkJJjLexRBS9V5sgqVtedRiTCM3zaMuBHA67MgoABDCTmhPWefFbTwiPvYTJLSRiibgakuZ",
  "key33": "5V946pHiw7SiiV694t3PqrSpgKoMhAP9D34PZM9duWBDvYD7tfF7u61yZC3i7TZt9dy3aGgrwyjD1A38pf7LFUei"
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
