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
    "28oP6ppNpTxq3rqw4VGfDAUzMQLBy3zvKrRTMFau1CSypLYYngGAd8bVq7QaddAhduUmEYTPokamQEazUzhQbFFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KhM2oLhD4qxvRbWbaCwv9jy8mm71H7MjJ5R8JW4M6M17L4Yh4y6puDvfD6qxntvRzymw3azSn6yqJBE6fnQtgwM",
  "key1": "4hBjmEFCnG1Stdi6ijfoLGcbjSNhhcBLecREZrUZqr7if5nkxNd3FygeGggmaKjD5f9QZTzQ3Y8t1BBEubgEKA3G",
  "key2": "3XJc9dJv5PqWEyEgrriWR3auRXGzc5BLka3JqWuZHGASLTmFqo1JxZPsVgg5wneQ21qzi73BadNkNRWBVGbfy4YD",
  "key3": "5M8gr6VGdqhymZqk233SeBNnagL5xJcafc2veS5w6NEVXi1bbNy9ZxPe8PcAaMXptVfiNHdMvmocxtBw2ynvce5G",
  "key4": "rQbuSEGYEZBLPmT4WjBNv2avmfh8SBtAvNuwZGs4Kv1R9z2BSAffksYKspUdjg9MBJh8k492kny9pGydBwCkWyP",
  "key5": "5jwjTZa1jfnwe7L3A4cUgePSPGiqDZ3w5U9oMtm4ZV4psMuj7i9cJyeFcZNZF8X5WjY2sHbtGASdGPV2b74QToNt",
  "key6": "4JgVmo5BXWZ1M6na4pspnLewSRYM4ZwzVQf5rms3PDP71wsoRHdG9GjGWcwx3ifXNRHNPVsKeSDYhb4NFKDuFo8g",
  "key7": "2ifQotknUoKDw3SSA7FVHSZ8Sx33ruPqES4ydwPbJR9BWZMa4twzEQXJs2SDYiCQEG5CQovemnQVqP1vZmSkcTXY",
  "key8": "3xEkXJGpqc9Pkb5ir3QePhhwCJYfepgEdwZhUFfW7BDoi4WDRPyGnriV9NqHo5wBW4nXJ4Z2xGZuMu3oZQvZykXr",
  "key9": "4hW383QRSYn3qQRKK2uND88P2g1E7Zqzv4iioCpwziioX3dXfR53Q2wWvxDoR6AriDQGLeqVxB43wqiXmVBuGojJ",
  "key10": "4oSH77wP2GnteSZdvMNL7KpbNoZrKqJSpjt15mrWtBLq8x2rpUNrrXnwVgfqW1HepKvwZXVFXELXuMUSiwyMwhKa",
  "key11": "4Tcro45iRYa37EjTz5AC1Q2fZiEsBFWs79mT7jtfDBQLmmFqYxW8ZBrLe8ttPE9WaQhyqhceFHD5UNXsH7G1scK7",
  "key12": "N14QXZiLztG7BHbT9WKNvvUQT5rrgw3DyNcDqhm87fAzsZfNmcbhZhndAuddPsFLUmcfFQUzJ8UthG2w9L8SfMc",
  "key13": "27E6tjZ1NfmPvA2XHMog6gb23sqdpDre1Fn8KPCZeM5mUa13tJsJd5ZoeeEhqfDjBug7i1JRoqJZj3oM4TYmmJFV",
  "key14": "5Jxw3twtdYbG4gC9qrea5A42TMvCt6bq75DNmJFrAhAj1gz2BeADUE2FNC3BWcQSvUL1DQTSZ5PYcPgKrazFT6dW",
  "key15": "2Yj3zEzqTKLEW7Mv16KVHkXdhkAnjKpyqaPxUV2zG3JpAsU1sCDfuepKVkygZYdvJuyBoxjrJxTBcoLXwPYF1QL6",
  "key16": "4eWZ9MHkzKPLdxUhE9YRpNfy5WRegqJU5EGxnW23sGt1ySNVLZPYYnhqfVzH9a6GMD17tS1uikUNZaSBNtv5VLqW",
  "key17": "VKZ134ZHJgP47oRYfcV5QDz1mFF9AUd7sg2sS1zMzaqDMAoEQaj5g1thfJqvU6rFF3TSBN2C9UB6MykTjeKhvCT",
  "key18": "4LEYWphwU4EbonxS6JWb8uS2x9a2mViADcG2PHebBxAPH8j1qyzDC65nGCJNnvmvypF76a1wg345GfiYoB9aVYK",
  "key19": "3S3yW9vAaXCtK51nbCaFiRneHm6KN73YW4SpWe6Gf13JZ1WC4DigdgWGDLKnDFUasu3gaHpos4yfLQoVK7djFX8P",
  "key20": "2v4uZQRMNZXUsX21F4sU1o3JvMB8Gcc8gy2SKx7TY3ySiFuHmX5EpTmfLfRRoqbotTaoinsP1szSnfvYty3czMu",
  "key21": "vT5iUiPiSKjwXEiahVDWpUTuedJur6DUpAA3atni1HZiTspFVwX64E1mh8UuxhhUzxStYkyhmKeKUKA53yMeVmd",
  "key22": "5g1jysK7QKATyBCvSZ3d6bXxdqKws2QrN2JGh9hUrPoxzEmA23wGawnE3vbyfXWamzzLbEEmCPAm4PKjcdDSQZmV",
  "key23": "5xeadttoV5LeSn7szgH2YQmbZHTTRdeFw5Wy2cnGqnCQeanjCCTpfyPbLWBRmNWup8TDUnxqyuJzcD9V8sD1NoJe",
  "key24": "KmiDJmTE2XnMNCxBmMKLsvCodFHcMnAVFnejXHpdCviwHDUWBdASLQQe6954LfQdGZEKFnvQPLxM4t3AthF4jz9",
  "key25": "3NVD74umSmPHVwjbvjdqB78dfyDKe1MhXRbieyyioGPiCWwSY4UJNVwPqvAuCfiUrS3zGjCLiJLEhyosaY1dmu5Y",
  "key26": "25C3pE9rcbqH5ihjQbjLz1h9WDoBraPvupiGmjKn1pA8N5Y6Aq26bXFxGqkMdDGPzetcwTRYtLsZaq885Zq9XMon",
  "key27": "59SWUaNHDQV3WhJuw4NiDukwS3zSY3Vw7fNRC8ruVY6v4o9fRiVGo4ztibfEp3J18kSCSDGzJf8M79i1E87AjZbH",
  "key28": "4yHmKiUovqUhTRXVRgJyGn8GTPZdXvXnuJZ4NH2d9WJXHJybpxFGFGcxv1qEXenW9fjvPmB1JQFEpmWHuqVs86Ci",
  "key29": "4jC7W4fhqvWA9ovtHUssB6aygyY7vMqpbrXPRM1GjBQsdaoL8fPi2WTA8X56cWX2EUpvnmKJyZZEyK2ygfrSFAbw",
  "key30": "3u6fDMk2wNnRxz9Fb14EEXXuCGgCTPghhTSsx8XkYLFoBw6vtBU9zGMwEifmQ3DHA2xH6xfd6XrsS5c6taido2Gs",
  "key31": "55cw1qa1h3ASdq2HKZEux2LkkhhP2bD2aWgEAU7MrDKrWiM84WRqGqRcHbe5bGnUtStd2SAdCpZBeKC2mjGRhxKW",
  "key32": "4uf3PtZuSW4t9kdZmnrwBVCuPZsMXdrfpwNuyQDxXT8ruXs99jrWpeBUCVqYUWqVcFyvFP4PEoWmQTQTJsuE8GtQ",
  "key33": "45jcmRYSM3FPPDLLPJrYf6hj5TT3D6RBPNJzLAFoV6oWvyKRne2HzFhRc7Ppyes419VhfKY6gZwKmUukt5WG7MCN",
  "key34": "39cKH1oUDwd2KTDfoxZU6XHgn2rZmBqCd2CeKnHiKtWLQDL4t9vu8VuCwpYrDZQkmiPqDDUrHZ1R8rwFE3cGQY9s",
  "key35": "63P2eqksyBthHBC3RgvYPgzM7iYqw3LexhT5Uh6eEjT8xjDBzZtZnjwd8eVX2qrvFAfKptsTZ9QEPJ8vwAEb6MPz",
  "key36": "2VVuF3zfS9rHA1TqkJe8YxWQAcjSYh86D4kFK9H2nirPcJxbGKHS85UQVL7s2U39QtAobM9fCVUf78CFCbxqisYc",
  "key37": "59Ek8L7gst5NMdv3idmCUgXpNtP5GfuorYL6aFHGSRrrA4xaEN9Lvm3F9GCLKJyKH4H9gA9FDyFbqsYG5raEmQ77",
  "key38": "58ZrsZRXtNcGgaUCZXsamSoSpXsjrEFLoE9ePxZV2cQf5x1jNDVRxULHW1AVUe3qop2s2EGNmu1z6gdCUt9JgRcN",
  "key39": "5hgXRG1RBxdnGZTz93ASVPmKLvZoeZPb78rfGns3RsLCccLEKY1YUZp4zAAQqdH6q891g14rRWZyFFMNS1FuogXD"
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
