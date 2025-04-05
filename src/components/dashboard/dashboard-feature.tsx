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
    "5Z3gwzWoXmoV8B27d1zNBdXck6ouo1mRjdkqBaJS4BqvJwD64wTy8GFUPY3ZP7PMxk1UL1xFJUxonyUAczK6X5jy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nfzUJdR7SaFmPid7Engkv9bWM5Mae5RaAvQVCmWu4U7GkajRQbz6z4aJ7tVEym2uX86VMVMJMMM2GULtrSomGDx",
  "key1": "465GQ9qju5gvTfC326nZS13LzdUYZGumbHvkrMaZ6cTPJpv65pGN6Y2nPCcX7SgavSuBWSuqe7BWH7BrnDvqBAUz",
  "key2": "31ajFSSsVP6RZWya9eABCqmwgvoPjewecS61KRSCts3oSfx84ouJMFbB52Y24t4BvupQ3yMfddKp2TrhvHvmfJLq",
  "key3": "4cujSQNPcwBRmVHp9uVH97Vz2wtd7pyDgzvrKXJB2prf6EByQhqcWKTvdP7YpNveYjkHKdu9bkykfDUDFZ2Uf2NX",
  "key4": "5Ny8UrAZKfRK4PXiEY65QNVs3k7x4wKXLsBAJJPJRdwMwmycgRcAh52N4xhgFJoBc9hQVzuYnk3C6MMowJ2YpjgF",
  "key5": "5pNRJPjSKENcdNbq1zNocNxmreQzAALgRTpS6e62waw7Fu5fvZri8oGiKvd1wueFHbqh2nhr5ppkDeXi7qzGbESh",
  "key6": "5Sc3pUdgJyi4k3vWrjZoe426YYXHbYc9jX5QW9c5DzqbF1f9KZRk27w1zLYSaJs8Fqwjpe47QbgcD4MAmPwrAeGE",
  "key7": "3vNoJNbXgEs7RGWuefanWmTimxWN4KMmuDazccc55hU6HQWzTu6jCSG6jFQ54HrUwqfogvHiZoDjcHyYrpFGxwxK",
  "key8": "zoX6rK4XmLA3ZibbXSSR8xP7tAo4VJG7icfYEE85NX4vuVigTBooRCKh8X2w2NBaAi3rNoeFKaJKfVfM1wgBzZ3",
  "key9": "SeLYpkPxSvxFZjSZb5PaN1SK75FNtNzWk6gfv2RBaaF3LwCkYBMWWu47YiDvJvjc5PfbybuxTh4HzAQnsS7CLSq",
  "key10": "5vMZ1JhKfQDruCKxMNt6fP9uRWaWogBuFLiqxVTJR75dX4rhFn5u4AyX7P1bWvK9HMzUDEkUzRMqZ529y2RrWkxc",
  "key11": "s47KkN6VC7qjcDvtTj8xtDj8jzkEHVFvJcNduFP64UEDspetfPiQLRyCLBqGvVur5mwrQfAMQo5kSwgWQN1umx2",
  "key12": "3RjH3ChYASSvv7dT7eVMEA9oeSE1TgzSSmJRjfuKmJLFUm51xP428G7DeM5U3X1hgoB4rbNmxsSk8CnsDST7ruTw",
  "key13": "ozMuMfARjy1R8RG6onwjXYPT6dB2X5PCjvG5gQNGHeY9MMoegwxPF4vvKb6dx9y5Akwa9BPJTzUQBuQapbPYkXi",
  "key14": "21gakxLLhP3fEuNvQENZbjn29W4CiC35pHMvsQ6bZ9kRPpTrCNxhtWX8xXN9XTatTf4zsog2e9nQJZ5ENiWzg4hr",
  "key15": "5XT3nN6T65T2qyhjzvCPtp972vMWVpawvceoimkrgeoJ5UH7vm1p6vS9LbhmXMV8nBMStEioqjSMavC3sxmrxnn5",
  "key16": "2Cp8vCAs2Q2UJyFgY5NrjhmukPXD5rfYwpvFnrZzug654jPgJ8iZisaTdc89UB3QgFCnmriqVwm6pbSvvFrpmixf",
  "key17": "4v5yKNYS1io1kf6Gp9vFzvJ4AdtB2GRB4UCJHmuyMbGGp4PQk7ZDNRwc6bXcAmiRWEDV1zDACsfzpexLs57fhB1r",
  "key18": "4jQweUjXRWKT7TyNeXKXQdCJHKAjNb2DLN2DrEXedkYRVoddP26Kp59MN4NWZUE3ce9RteHapMvVYhMTKmsnHCPU",
  "key19": "5KosUgue2256fzJUd9ozMDWv2uSsgXunt29WBxsfthDXSdh6BRekB4sHxGZ5VySUkrYTFyQ3ktcjNKsRNwGqSwC3",
  "key20": "3EvTBpmmiQEYxbMzhUFM8Nh1AGTRGE57gpWXDnUn4jNcHQFaVe6QBwRTGfxTv2z5NbpPJDQgzPyd7BkaaRuJRFag",
  "key21": "5rHTzsVNnhiRseYPvkASFfcJdMms5Ea2NE8PeYzM71mt8Wbnia3AhC3hnQGwYWZ95DZm8eL6WzgieViZdUZD3WT3",
  "key22": "3ZQfuKeNVVdcZt7wu5hASyGGJuPT9V7kUaHFxe3FuBB2MeDnNoVxfa2VnrKTHAmJetbagRLdusUnMRzPPbDpfAgs",
  "key23": "2chsgwaE9Fc73CmPKLjhkjqTtvELv66ehPaVPhJUCH2AKDumsf7hoBxqfCL3r9WpoY7HRWQ4CdhfhmpCnVih3aw8",
  "key24": "5rY7rGdt6vQHM5AyUk58RKVNERLnzU8DUebmLwrisJh5KYVaM7gH4cFrWCPDpEt5Xyy3F23FRJBThpu28tmLHSZV",
  "key25": "53Q52uYTbgLkuEDtMRF91Jdm4H21Am5Y2BQHeucfouVMbYbKPCDGgWLBva2cEeYVtJjun5eYpYgFECii6mnrZDkE",
  "key26": "5vwpM8K7HtpCiNHGjXwfGY78EMNvhLVUr2xtQ8zAjjAtDFg1kPgUonipxFojU8RAdMWGUSUYBMm18PKYWFXBAUot",
  "key27": "54dZhnuKsmZGEdG2nFVtcjuTrkdtEseEqFKEeb5FMwf2hK6Ny4XrbFxvMkzXBitihf37YuqbToSJJ2q7Ggs6KaD6",
  "key28": "2WYE1JJKgMXVr6Pg7kXeCaDx1TBSLmerk8KycWtZVYm8kr2TuCGThbUrzUUa7ynpMxM1xTwZTjStR75FV8anFCd5",
  "key29": "3bXBgFj4o6H48gzY9Hoavxo5U9CqA7BddYMM1FVpbRkveRKizwaqh8GFphqzyaHEqUdb372tgmVaokzh365dW1ND",
  "key30": "5NxZkzagfGZQMomVVnCJh4dHftpJRg71DotSNR1Bmtfhs6h95eMuyhYg3PsD1b3KEu1cNUX3hgnUV96WXxTSo7QV",
  "key31": "4g9A6joUuqXGHVUanPZEzWAVbzUC7x41ici3SSnwP26pj375grbtVwREkCozmoJ9S1bhP4scuDGpkvXLFwB4koVY",
  "key32": "2qkGj3mDFfwpuBfoo9TaA9f6XcJaQYs3TEBiNnNi7GWykV4Ty3y68BXJuVFXMiXQr56MrgruzC9FySuhn3LB7Rkz",
  "key33": "61VvaK9FXTTsZKbTJQGJeaDoJA99E1QaAwKcFT9Q6bARHM2yshaKcbLvYHYMmiNyPP3BPhMxGcmjosjMd7SqDQrw",
  "key34": "3RfYSRD3K2Rr661mHv5WVub5KsBzB32oDKHVTQAwdumdFumRtQwRfegY7pxXCjoWaGY1A88EtqJph8HC3Z4dd3Dm",
  "key35": "3Ud6pHXwWrNee9w4S7TsESkfx7h58vc3tC6KJorwypWCpHGg9ELVBQw3pec8izA2pFzgkUPiaf3oRVViikf87A48",
  "key36": "BUixytKXG4tmkXfcebnT41g53KcpEgaTBrwjEpJEK4JXs2YXrTLbTjpycfQJvp51Z3WZxjBbNraQDFZYk1X56HH",
  "key37": "5mRhib2fxSejt11FesHwRrj8sZScXMcosmXFagR7KjMZAzV5U7H2c7PBqK31HqRmt3kExwn83uYucuiWAyPvhHbP",
  "key38": "5urDWzxU6aroDp7U96RVmBSG6gdjAvZhj5a5FfuBoJYB8cDbR3BX2bS3ULPV4nyEkae3YQ9rCyFLReTL2PZzRYid",
  "key39": "4afTzkv18NibJKiKefeuNsjRgK6DSRajYc1JEUTzbZC1FMAeBa3XxjpLfvPzMRFydcRgixPkEVqXBoRQw5GqX3R1",
  "key40": "5QDK5PxDw7HEAVRmtHFB9m3LWR9Jg83nh51GvRb7XnkC6HLMdwnhtoSDWQLTqkCUHwbabMmoQLpmpSVW4e43XSBn",
  "key41": "7g2P3dcf4dBduGdoDgX9LPNSk2gy3ycQ322qhtv65ip4wBWMmNdKzESa4dMJXNMTRHM1xnEUXuyTT2ofZDp9uWW",
  "key42": "5pqhpcXoaSUd7WDLUhNgUPDkpeHKDn62htJAM3GekzKsBGoKpDTuCinEkktqTJpQSi7cPyVzwZ9d5a5dzyCi48dT"
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
