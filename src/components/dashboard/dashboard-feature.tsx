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
    "373wLT7wxu4E3rtfy93sq5juJwzRfR7trhwTwKewpXcjtnhsABWJbyxxgLU3NKBKkXEUbpZwyUhH2WaUuxGXRDRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32jrzZDWii7A1T3BQmP37xt3dXR6rWViMstCHBQaDofzJHJkhjy11zJCBKsfZZypbu4Bdukcfy2SqXjviuv3GWxW",
  "key1": "312PxC16KPfDPpnqL2gHtJH9xTe1TVqY9nWAeiDwKJKXwyEv8EVyAdhzCaMb13jXh564xVsRpq4e99cwzLg9DSev",
  "key2": "XQx1zkmpQMKfnSCPUQucTbY8CYCRx2HPQR67bsPrVLUKZB5iU8QBjn7fKfT5nX1MvZ5xgvm26SzTGgnS6MaXJNf",
  "key3": "3bprZsT6Wts8izktwJw4GsRe3pnVGadMf3TrVoafHdegYbc29B7jXHyqpuBUTmv8Lk2cKgaQTPqo26kJxm6yy4jR",
  "key4": "M33kbLGoCMDksfZqhgqMuFufnq5mxJi7iYuVeiJFSwWXENhKKAym5aUQU1yBgFyAZxjY6qLSQh3HS3odTxCeLrX",
  "key5": "4aBShzWzhrJ9iNR5bq8pK2sf2BYoKgj1JDbth6sVTDxN96x9gk3CkaPyTVPKaUZ7FoHFtbNdFpPDJkMUB6C4UKMz",
  "key6": "2nZZ1hVyFFLPNtt1JwUGyeFauvxByHUaqb7JbY9Puhg7d6AHEWL33owcZLesoVNAftSMCBHbCfFzyp2hPikNaWcA",
  "key7": "5zS9nQGeHfTtywhF2Ym17tUsC4gEamKnwxUai1VoXygmLmL9utaSKazDWWhWsp3m45AezjQpR4hnKwcJS1ta8D92",
  "key8": "4gJiesf8AavCoYzFjMfVq8f1UptCuBvdYxjewy42Sd75kojtnMinh2J497xKvNduPQXyJy5xDhQWeekd8wHHuDnS",
  "key9": "eAZfbAssEpC7dHPL2EwDPQsb2q1Xk6am2UnFHp8bBzzW9YXJFkExpUvBEAT7SHx43qTQxQsvWA5aj1uhzMsTN8U",
  "key10": "2M66pjFDWjMKWG94LRbKTZieJxULgPZJja8oc4q6JWg9dfoCsmvKNaJs7JwBJFo3VUycq944k3hLPvAV56qa6fQc",
  "key11": "4mANe6oBxSLSQ8Y6Nn9BjuKmFFMMtcNKea4z6QGBnjA6hENLdtqPTkFQQYB7Hkbc55SEREwQRtTCxth9h3okBYZR",
  "key12": "26kT3tiWwvQxC6346P3y1fxAgNL5Wb1fXLqycoDPKraub5Se34HQfjYTWZTT1uBMUUeCG7RpzU5Ad99TwCYd9T43",
  "key13": "32NnveQuPXviNHNH33zHKyv32cATAG3Cddq9Cc2A7V1iFby1otKyktZgXfoCbTriAzsLBUxLkLUobggUQEi4EkY2",
  "key14": "56hFunj1MbSE9Rxc9RLqXVXz4DkG65BBASicHtnAy8ru2hWkefo3ZstjCgGmpfgf9ZcK5Z2Bzr9fPakA4KZ97BAM",
  "key15": "24WK9sMF3RS5JB7NrnNew21QkBStnbxERkgp2uSRWmDTAVZFn2ZuFahVkhbx7eN3R5uuRLmhfLPCi4emKq4HWBzG",
  "key16": "GMRyUidRJsGKR7BRtGQWdYoDAV9S4QnkTcifS3xe4uv65WbwgjYKar4f8Eq5fAqGQYppSYk7w7G4LA97ZkGbiwa",
  "key17": "2qCcDPQ3AJ563JhbrvnYsPPXAvsT3dpYxyCPSFVn9sciz4yh9pa2PgqnVs7w8M7sy73K8C5YZRCgLPjSkrzRgRCy",
  "key18": "2Zu43eQuWTGLck4wErRiFHXP4EgkQL6TU57DUQkbwbbfbht9UjhMGRJUtU3EbAXgH2VxBoa1yxdBr3MGFFFU7Aon",
  "key19": "tiTBKWgcNgzurbd6crGdYpfaJ9CaP6Dx9suShjGWtgthQKiKinH18dLaHKbSXWKxr6ZqAL9Sxef91cffRqWLV5B",
  "key20": "BVSnZPUp8KCaMpRK276Mx5xNdmjpxJsvV672UHmrhJVZDUQayWyyFURmpKaTcvwh1Rzh51dZApouR4y5ZB1JsKb",
  "key21": "2dbTTE2YzrqUXfuPCbcy7EbxS7LZmVBFbzMsgYws7WpfQd54zwreaN9QCE8CLp3aTMBi75NA2o3cwAZom5sbrc2D",
  "key22": "2qtwurw3Z2zDShbH8rVB6ucMbGE3WBy8XJ4Xcj6h4UPkoMWV3NQp71AufeSiLrNTRbkuvAkLZrmrFzhizNLag4oy",
  "key23": "2u9woZhiJdXroosY6mTXsTL3UhRXGXAvQ7xutj2wtAG7aXWHNwEcPjzWCjfqz1ApXC2FPT2bAB17TdUCtjSw7hyZ",
  "key24": "4zCzBwuTCFAh4Zs4ThB3QThyPV57uezVAzCXJZzR66ptYQW9gfUTqhdEYixVN2qWU6vr1M22a2oYxiANP4dCz89E",
  "key25": "4BfaETjvkq3NNJLWtCCezVejYGcWX9M4cXxZg2TnYRfbAsyZXnvdJKTiTuTs4Th8biJFu4Yna5pMbrC7fWPUr1KX",
  "key26": "3mv9PK32PDc7Q9W88Hv69hxAMf8GNWgDGVBjmGiVek3W3t8wGJWSM1E28xMJqccwv2tn2E9bNUgMABDTh6zJXAt",
  "key27": "4bntnyEL6kpVLmxQ7Jm1kTW7hqSSJnAt9ugahQe7tgnwDYoiUwxeECVA24ykTWmcFXJfRtEXTCyJ8dFtvzcY2zhW",
  "key28": "4KP96heAjFwTA6VW8DXmcCZjRZp5Ma82nbAZjjQPefwPRDqvsc6S4it7Lk1DWYLi4W2T95me6AvGAujiXf1uXDxc",
  "key29": "4MswiudcRam4QdobXXr4ZymEDkJR6hZinU88Ev2d8Zyp9oBmCUvPAm22WqwHAso8hUfnvtgfUuPkMm9D8F8Py8Cg",
  "key30": "5k1WyE5gXcUWAu1eavVSFgCJSwbVHJ2rjShXPxfNWLxMXoBV3fJ6L48gwcEfVpRhuMYgo7w2zN8RQ8xNQNiDsiXQ",
  "key31": "5u6nCsoxmnAixMakVQ5NLXawYaB7N8AzAESCAVgSxhXWAQb6qN4ncNMhn7MSkcKfRLGxujoRCut339QChbCowSNj",
  "key32": "3wa89aFh5RjREHb7q37BjHLEQDVHTqhbZrFJ16LqXwgEfecwnaCpZc1qGTkna62NYvf7L2m6FfDZdd99Z9iFnGW6",
  "key33": "3Wo242gBmLv5fb1BzeFhDbDZEP3X4yLQsX2CowR2P4787bE3iyX7VXVVANTBLZurYjYQpPbA6yVgAnRcC8LCqqTJ",
  "key34": "5m1f8yY8yPXiDZNR1gs2ufJRxVGipNbhpVsCdgngF78EjmGiVJGY8Q7gFMap54xuSxMEWMw3HFNiC4qvn95H6dp6",
  "key35": "vjZnzKPoZGPrS1DaBDcYnSahshf4AYiyYbN4EqoHNL1yjP8rr6q1mnsyrnYjaMQCn9kxoieKmZvdqdiMEdy3dyQ",
  "key36": "2VpizVZt4aQFbiXoWYEEfcJSEhVd4KkcRmdhzpVaMDBXswT7zAax5Ds7JtYuwFQvYtpWQQJLb9NiZxG4Taq3erZ1",
  "key37": "5KdDr6UwCn6buL5nX6xGhVXTvBPfe3bBvRY4975JvhBSeLh11qyKAmK7Ht7TYpaHKjs9x9ru4xWhMC2v3gbkwwxL",
  "key38": "3UCW9GMhuphhpscAGLD6jHkDyEUv8PQgrdKNUdHCiffDtxC7Qe37Hyj61pEcE4k3bZnNTvwgjYjGS6omxPVLJUur",
  "key39": "VMtPugLntff6FRLbWa7BW5spWPeP15RsNRcLyKJzbV4TZkMwcWPeyKexSpumSvVrXVZDxonT2rYUaN99MM9iwzq",
  "key40": "21VGcz8v8cKLfTX7ftjYi3AtAnrZAFbhgurXY8qpVDkfsKSRi4p8jsgLtNmkCxXpoASKT32Ddauq6y3vEK25KNc2",
  "key41": "3T4YtHxoNxhsLED1YGnxof6zi7kZhMdJ3JPoZo5F52MiYLsDNHo9PL7XRnbyruPmQkWDYTPdi9DpTtsTmops2VNE",
  "key42": "55BACZ2vTtXtUmXMQreXnPwXF9fQEj2sdFDPuwDKpCNHw8DkGkXagsQV7JbA7y4B9v4S9sDFVbryzQeeDx9cvAjc"
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
