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
    "4fMrjm1oDUC8V57K7NHhQfESFcGSD99WPM8Sz3aSSc6fp7ki4L8xoSDzDDMhNHfDx3bVHcRNiV4cpVXugYDteC1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ymu7ZsAPXgiEYNYBUE49tzs6bWPfzBz1irbnpfV2x1f7UExbzPk8AbiEtQkjRrBJM4rWmZzb5Pgr9SaBYiCRudP",
  "key1": "2k3pXMTC7asLZCEZw3zYTP3rg8wK6np7EXTDzipH7Q2wJMK2nVBgtRBL1XWvQcAXUAi4RC6ik41AKUAy3nZ4zv8j",
  "key2": "4vT6TWJtK4DAVS57gP1aVQcFi91aVwSTMD1XZpA8A3CYyd4uBEERRwfhWK4CU7vavU7fLL6Gf5RPNz8ps2nJaDS4",
  "key3": "2E5FCD7hz6YfMbPYbNnqHSYyfNc71p95YcoDaKGfuvBBBK1bvK7wvzeYYetv5DGxWxxoyKboKSoDzyGTULCwGank",
  "key4": "2pGvjdfWbGTxHdZnupof7cKG5icg3tqbRciXhBFegLSu6xGw8cSMt9KZXbbxvq7X3Ji1VJ6YS6ei65GqPmUreuJ9",
  "key5": "65iTVBptvk6BtRZasXriBF5C5xoTbfnvtzR6cKu6DJxcCfcjZsji5zx6wbibkkc1JtQNxBXAeWLmDrfU4NHFZ6K4",
  "key6": "42sUfh2C6Jg4ZxaXjtnVCFkKLWFiFwramb9uM7zNT4sS62zBzwi78qCJrKP8CFESw27KWMXPKT7qytcSzobJAeL1",
  "key7": "2eT3QR5XrcpevoDRtUJ34te2kcs8rmUvNBukhcQYDE4ozG1t2NYZVf3yCjLm3ACx6RhfR4g525h2v5euiuDLpGc3",
  "key8": "4MeXnbKrSnaRe67e1T4FiHnnDddCYL2GLo5i6p9p2emu8hEfKGHCpvp4yNELNnUZnw9dSXPMpSiaVgNfNN7sA8Gg",
  "key9": "4r9VSskSbwebX15ShBQizttPF6yqCJSCoNKQUCYmocAuGUNXMyHE6EwAxkzFjadSNo1FgUz8zr2yy8t5th7HoMRA",
  "key10": "4zF7nesXBb87BpqRRDLkBwuEFNT98TKkbCZJp9vJKjf63hc8ETsEgNNTNDTFxLoavkbJwUMRUBVnPyZc5E2CgJfC",
  "key11": "te36K48fLDhQxFs7UE5nSiULmFEhpyefCQiKiGQq1ESYxYKrPo5gbLs55VrGCP47Lkwv7NqYrcXKks5n6NgqM5M",
  "key12": "B2WBTn6YfzGFHKmMpF73AwUxaqDUD1gFcDL4iCK2PhmKdr5iUKChMs2mexJBvfs3roNEb6SMthTTC9wZ92UjSLh",
  "key13": "33QzaWMrr7Snc5d7NFC6KqVy1oAefHLamKf6pwb2u63vpFpjEoid3sUqzDifS3YyHhUbeGbSM5batCZ6WavXiPZc",
  "key14": "4LMopT9Q2uia8p8ANPNLREHBERzVGJo8AebPDamLZD5iupgwMDPBpQgduiUAXPfu6HHgBaKXEe1HgyYcd26vmggv",
  "key15": "4uk4WPvRNWa7QBjW14cw53z2VaYz5fN2tENEqPSX1SSenogFrYRGw29GQ5AS1cHUw2HMhUheMb4JQP394ZCqez9A",
  "key16": "2SWwUyiLEah9JiVitjQmVdUE4CSnsfQZKjHv5FoqxaTVuwd99wTkAB4QwC8qn9jHtXZurN9pWvTQxv1h8g1N5ALg",
  "key17": "2VvmXBhBi45m2KnYfmhuZ77GgDAE4TRdCBSBmeYZyrxn2gfGaMKuENfWHBPG76WrbL6GJfNunhDBF3CQtSuKy95x",
  "key18": "25fMk8utqbwqQ5cjyByAp3WwBQiu7NfyPfiFP7bwTyLS8qMKfbKSzLMsn4pRwXyPNAtTWceaDf1h3TUruKDVbCzi",
  "key19": "3y4BCAWVsTqxhbgqfN2oec28drfmMr7xmDEGugkbqFCr2UcS9XSUYMKsqqHLyXATkvsJwuAdjghKxxwLsymSMHvb",
  "key20": "4ivz5V1MYLVwTEHPF5sqSh3o5ESExyeQE65vP8nLWhZRqF5pbXzpsUKCLNtcZzJRndFQgTwmbZSpsWGGJqyjwJrq",
  "key21": "2WvNXnEtfF4zuAQpmworp2G2hAKuvqA6GTe9o9V7TH1tuVZYH97rQzHBuk8GFKKra1ZGRS8GqqYxG5xLsX5M9dD4",
  "key22": "3Bgp2ZtwyxPXqyuXDhyb15LhmpDxhmED4Kcs4p1LqgLPer3PjPrmvsTVodPzFRMmvrrPmoZgcUzoEAbVFs75hDum",
  "key23": "4T3ReZqfqndnW6SVYpQDWy3sK8CSyBfaQDm1zhn1PAd1Q3TKiwM7xpoAcZhtRAmqpxFSgadboWa6zmdW3zmHdB6X",
  "key24": "WtFUpqevhCy2ZJjJ9HrEBr44k4vbaxjnvbBPovCS4JDVb1pGNmtSmx1Q2oUzxt2vUz4MvXMcL3uqFbnnwnQV7xU",
  "key25": "XDrcSnjES9LRww2HXdbR3P8ktqicYpRvCb4H8ZD3EW1BsD66JVDwMmCoYPnoHkyb7TfzXrjqsk6c6ePnmRSVCXM",
  "key26": "5GNYutsx1nqaRs9BmgBSzzkoy4x1gduJL5CZZ8GK2Jp4YvW2W4pByQABNRd4Qqdmz3LzZudvoMj5ichzQZiHLDKS",
  "key27": "vtuZ9iRx1VWagb2M6sPdRvwkRZPX8zcR4iFnBNnvBboQsoR6RtB2RYP1ooCHuLCBh244rp3WcPdVZjiLvaVC9gi",
  "key28": "4oJLvqq6eNcXNYFkbGuCFjetSqA672qAZ6vg8PZLS7dKYxakcJ2pMt3SvDUthJX1KPU5sEv2rCCyQY9bFotNKkgq",
  "key29": "3LnQ5RUtHfb2bT9jXvAMGf5joxcGPgve4PQKprE8wpYvQeA3urqGFZuJsZWKFJXNNPAL6vy4QttrEiuNqWwUM9Yf",
  "key30": "3Qzasv9vf8ztZMJN5nFmBccqiFXBQQQ2LsSUUrcq3XXPwYFamRr8JFjiPqjoP3nZVtTS9ZDmpr7bJYXMgUKFGuFB",
  "key31": "tGV3faLMCjxrkGic3aNyCjPyLAE6zumhDdK6Bc46DFFy4hLTsoNXFQtS13cJCLR3ZhnoeyED5mVxmSanACyBFuv",
  "key32": "CHFGPsHBcgBWgpCb18LCRW9s9GbfuqMmizYqggQ4g1LRZ7F9vHQKErpHRftF4CzMBuFnb8xZ7rZZoCRJ7sAy4yz",
  "key33": "2q2PWUYpRQjozoZEn3LJ5NEraHwzrmpkJB16ysdQbPPsRBXWnvV8qtT4m5VbZYndACTrFqREeX7r83ghJyCaNhfP",
  "key34": "yP7sGTNH4MkqZpuFMUZU3434jiixfSATUEs53qzxBzpLiZGBwvRZxdtavfs1EBBdxvbc52cNGbJ9LAj9q8jXhSz",
  "key35": "1u7Wxy74ZAJbD1zHNdufqQ6Xt3wP641WmRVEgsFVHFHiYYXmSrMDx6PAsribNgFfxZwk8DmgoWTRWXPmTBLkLGY",
  "key36": "269x3dPFHfnv4zMHYt773LNd5d6KwHv6sj2zdFR4pzBYUYbpt7RWf9ismXGGSQfcewDieSRQ8cN9828uuukSsS1s",
  "key37": "5zPCCPbq8Bc1npwMaYxRb3YJm4G32Qxx3N9LNX9GgH6fyfDypsGtDiYEbZs1DzEN5qFCCgqC2ai1NYgBagC1n2o4",
  "key38": "5xAzMVJCKUhFzo6Ga1aTWYPAxrFuVfambEqBf7KiCqn8TF4RbPPbnL7odrN9qJA2mnWeMAQadZTJsG1EZ8ktoP3C",
  "key39": "5mthm9CfyUg6Qxw3Q5qmxFNM5tVGH3PX4nJsTXrXTkrSJYjtA5VAn5jckqyJCR81yt5nt7u9JSFzDD85LfUT8EcW",
  "key40": "Z6wZDeT2GGsYwziZJ7EZWXsbtTzkMW6FMAf4wFKQZgSGWcMpRupjPqbv1e4ydpDoExKp3dMiNFiZgyM7g74pipm",
  "key41": "2FqV2DKgkT8QvPXzM8kcKXxr2S3uGNg89ScQB4Ran2TGMfFuYhJN3sUtj6rpJycpBHiuyo1ndiqhq61Y3LgbKbg2",
  "key42": "2bA1rd6JGiM1MQQKXG5uTfk1mDXRKwKKJVnXsMZYxqHeiFr7vT3qR6LKJZzMQNr2dDvYmp1cycj6QhGd2E78ghjQ",
  "key43": "51eyH9ZH2ppPjZfaXWej5e2Lw22mkLKT2gcddAapv2odH1U8L9HJg6KyW2Asou3biehBZMFrZXYNK8ShLkN82pCr",
  "key44": "i9Zq6s9e9ZxACZLocheQCunFtLg2sRRNWxZUyTJcmnHDx2wywHQLvVByxByTBkUNFp1NuYKtwAWr8RvNGtukfgf"
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
