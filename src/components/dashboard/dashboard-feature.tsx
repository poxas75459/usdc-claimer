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
    "5Gnrf3naGYzTstwjS6LkPGK8eAPfTwVyDduoYjDwNL3RU4YxVfnEJrobzZ5thptX7K5WCpVKFmUmYX8EJsQxBQzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oabf5ByGwpzrndV5Z5QrYmWZxsNL7y9QcHYEv7buhfHrDVHYxiUGSdmNJdowsLPEQfRG4KbSAmDcJE3aMcxNjMV",
  "key1": "4H8gXnq7wUqzJv4oB9JAV7fJAJBMnUoc7mSuAp12gHNZckN6BqvnmHrj5puEoWymKJXHtWCtxJP3kPW5toN4VJ25",
  "key2": "5at8mUxtUunij8G75MjSKUa7BPuS1CQDMC2rgqbJiMe4NPaeVwFq7QYUJvEr1cFuXtBXJvVs3a9qo2o8WPeamKhS",
  "key3": "Tz5pEF51ZM3bGvcSm2Bb7posLQiYZeaPpEje3f7iCspn7p84R7TZDWzNaRWetNZKRpUmzX7pNEyhZmterXoXa7n",
  "key4": "3o6LeBCSb3vD1a9hGnpMe5nUFxVwnJALKjqaKBDEBAjeEdYyWKx5f1BkJpveJeLRyRgTCuZHFm6NknDktq6Wq9o4",
  "key5": "2oTjR6dj76GJENnPDUexrkJFoqu8dBYzgMBySJEtWHvZMmmgFygeNZZTzJbMCUARFFxdyjq7tmt4ugWPH56C3H8M",
  "key6": "4YZrkqL8DQq4XEPABh9EhT9vDi9U8TSpv9mSJPAbuXksR63GGxo6CtmtyN68aCLHvWrPTU9LR6ZF1Z1hskdnNX9d",
  "key7": "8uiDGBZNzzA2TvqXVRR1SqkhT7uWVrCP7rWKNug9kmmadXtnTEZ83ccE76H6QGSArQU2mGu6QFQS7UeFGhhnPtp",
  "key8": "4eJ41VYVmXT9YCRKc63rHBxNWXuG5Xn8bKTHM2Gck8yN4iR1tu5ybpVVUVdXwZWjyERAUtAUGUzsFkHjydd996Vn",
  "key9": "4oc9PrH6Cmc8N3AtMxTz5XtJSLEc9QqARJeWNtggHA4ZzMXfQYxa1zb3Sjt7SHCVgGtHQoHY7RpsYef5r8ZoiKQA",
  "key10": "31XMEkLcQY9NbyMWDsHq3jqCUGZ9vNi7TZqYcLQBN8L6CFc5PYDv9KTzmPxZwMmTrm47dGwZgg7fYgtzDK8MhBkz",
  "key11": "61LV1uSAa9EnUcr7s6mTm14bkMo6t1c38VEsXDcTGYWrowNTsCEGGPoHM69jumfxaU18QVWJAEYkJbcESVb67V3G",
  "key12": "WVkzEtBxrN2TJH8vrV8dmP7EysbEr4UFQvAthYkjBiTG3KNGZDrmfuWdLi7v7FoXaFep3dvgPdheMwh5EWKTqDy",
  "key13": "4PLdgTgHMhqjm7kCL5vsfHQfsVoqsggecveLjWcsFdhZtDoAi1ZFxv512YWx4c8uQN949qjUQMoyG3mWgwCYGkwJ",
  "key14": "3pRqbGSTFBdTHomxexYLuAJxu1oWD8gwkuoJWEVf1Vmgknbk6e8kLFQmzXr6w7vthYSKdkTx22M4n9BDk2A2KKMS",
  "key15": "2MJhABSV9gByCgqxJKeiiQ9R6AEY57HNtP1Uygp4emdBBKUUndpXcB4GLHqQHN7SdLmHFsaqePtvbckhJaoYt62g",
  "key16": "4qUmtEriZazzATd3t3vK16NpQPZTHhjBqj3BoEPXpvAH89QyLXqcm5T8ub3Rya8VSjUUNXtRjZMpMPkWMmCkH4oG",
  "key17": "KVoX9BdS1VtyhKGLmNQt3uXSNq7f5KyWC9r4s9jQXHQvWUSkPcnmMBWo4kCtbW7xn2r8xmZMfH2DTtDynfZeQ1m",
  "key18": "4UwCq6wELrsbnR7Wd2rrydUZrGyxkDNDSdnm4rzvJysBTwyjsbAxoMzMDJ9MJMXx95hJ1u4EMo6RSHCQ7owKQNuQ",
  "key19": "428g5k3dKmytAm3WpnsY7QWPLUYzAgQyaWKA7ho2JjA8jksnTgeGCa5MUzjBATvP71drriVjNb8ki2fDv7epdEG",
  "key20": "5pyb3J2zP5akxJF8PYUVU2gK3RENSng2F1hzu1fofdnyhwdbZ1bNmLCHxirdKTf9dgjNUzFEJ6xTJZzmF2Nx24Kh",
  "key21": "2yiSGSnMJCPHZ4cR3NUZFKH2SkBLv7BUPv2jjipEGKVUZbv1ojYFvnSPcnzfgwXPp1Y3G4psV8K2vsPQfvoDdB3U",
  "key22": "2AsGDfejhFL41a585SkWr1LFifk4XBqCX4BawwY4drrCPiPysZcCfM73jRRiAyrgdLVpTVLtx2iKTFJyyD6PCugj",
  "key23": "4AYFog6ki6xQdeyweASzG5JihGWoyzn97jbMwSVcBjQNuy6mQnD82PjTRKzjuiHLAU7xhETcH5UFniib3nbSX55J",
  "key24": "dZxstwTD4BVyjQ5g7mRwbhjEMNWfiuWjDuYAFpSin5ZGHCLxwNZ7RpWisfGkoQmU7G4BsGvqATyUwr1k6rqXTEJ",
  "key25": "35WS9fM1mAr3QvbLq2evjYJruAGoYZDRzqiAtSezz8QR5d4DreqDivvGA5dhz7VU8sNTfyWiUEF5PRERP63AiqfV",
  "key26": "hqmrYptH4CTECRrhHcznUKAHfN8GjAvet6wdeGuRceVVFuRD7GozkChxnDaYFTCGktPBBiQ6iQPqMoCHSCiZVH9",
  "key27": "xPAkio8bt8Apzaa3rdkZR89ctvfLZUSUe2gxP8xjsDMWwGKhQuMYbX2SQUF97n3ED3twrE263c7MhY7mehFMJTN",
  "key28": "LRy6s1EYNfyFtiRbmYexK9fYeNBtWLFunbv6jwaLNY791sGB59zaAmgk7X1bhtmoM3NndeEg5RwiWc2A8UH1477",
  "key29": "3kBYgb7bCm5QnxaNnLR1v7cKoVgR6CQJ7Rt9r6d9NsUGSWRcx2PGi3EELe87TY4ruVf2idpNUKw1HvFG7byFy33Z",
  "key30": "3N66HA9UH4xXPavYSwJtwze3c5DM9TxtXNd9rznqMsp1T89LCG4pcHTX8K6h53JiDAgvRLRYTe6rMo5VvMBrKry1",
  "key31": "4YPqjzbvMkB3yzG8kDWb86CnCuLmCjgBnANpybQLBSs9m4XrP91AoLF6BY8tQYidvuN66Zen7gvHLQCnC1td2sMR",
  "key32": "1r269iYminB9BRHoUDBra3WWubPFV1EszWEmVNRYnG5kgektcQCYhcHU8roCwqt5FeSyacaYDwFeeWrc1tKCpcf",
  "key33": "5qF9GPMfgRiBUvEbt4MMne4sM97jo1aRBtKeBp59jz2gLTrmKzvvKQsSXu4RDZbYmLesHdKFZ17JPHkcxi3zJy9w",
  "key34": "2xN5QsLW2J2tfbs8oscqN9opkCujHJhvkDNtE1X1PM66wegbACUwE8TYtM9RVt77Lx3y5UgWgEbsJsvsErTm5yFD",
  "key35": "46YfhyJ6MAKeAffyHLGsfo1dzJRRg5K68LmtNxHXajeXbkLwdwkF7kWngEj7fDbNRo5fyaQLPkqSnqGbcqm55nCF",
  "key36": "2V6CDGuDzk3SyApEPcuwiEXBR6Fa9vBP8pQ6HzRinnbPii1dcq1SEM1imBE3fgyHNdyBiF3zjuPXME9jj2hSnKgf",
  "key37": "4KjXqNdYDndnfVKvbJxneveWw3uRei9vQX5nyE43dUppHapZmD91D2Yyqg1SXRNmNXJGP4UFiZaRq6x4Jad95RVY",
  "key38": "pBmEQAHGDzREKWpAo7EWDSknifp1D6ecPUjJW44ZokB1vyJv2AhHH6HBawFsCUmaJ3WywazRuubbZ5pz9y3tLSD",
  "key39": "5kxNmsvLgQMbshbagrkWNpMTe2CHT9teAS8RgiRfzg5kQvcuUYBkr4iAugDCpNX79WzbLbF9wPbKGkAn9GoWcav",
  "key40": "4srWaBVSmoVmcwfvNHutKX8zDru5trwjxccRNqnP7JCRuNAz1j9jCXkeM5JbZ64gvDPqQuu5CKRZgMutAdshAq7d",
  "key41": "2AGbzBiejcCScwNpRsfJvqUaHpQfkZEcbt3yCmKyKvdRtXzePtoWFPApuYMeXDJK4vM6Zkchcd6CHux9BLYKAW5i",
  "key42": "5LpKDkEq8Z7F3CTZWkHJmJ3WsQiQq7GKWiTGhtNEPBQ6RQSss7XUyRUrujfB614QoLKu99YNLCt3SbVABBSL4qaj",
  "key43": "4oguvKPSGowDC1jNCiSiB4UKFHMfE1KiGWoK4wTU6TPSrzgZMKsdTV2rr1FRv3UdHY2VyiVBYZiBMHY138kbc5do",
  "key44": "49PJmrbVysE7srch6SfqZ4Dj7NfEQrgmVshsQamntbeuWmrEMLRHEJLcgWMmq7sKgVtB7TefgZ9TcDdiQHipjME6",
  "key45": "2dPX5EweEe4MSmHxxZEtwRbmg3D7fRRgDRbukm3YhVKfuw3EVNRsoBP9AteaWWjFPQsP3HsdFtAWyTSYPVo3KjgZ"
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
