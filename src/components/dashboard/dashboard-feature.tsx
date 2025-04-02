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
    "4tNJYSVQLCzi4yfc1vsNYcocKxCMRJ3rKp72BZF8GXM5ARVx4reNsiPhxXas8Dx1VFR9fXHLUXZPEibXoPckU54e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zf4R6MJRxcDiPmfzsJRCkRDo8JdL3tzU1EAGzbxx9qCzJJvZLTpfmdCh3CiYgfWzTq7LrzBGQc6ZEjR7QB4FT3G",
  "key1": "4y3q4AFxaAD4dy8F4Q4fr157D2uU9bMhaHqJ1MbdsGPEe7e2MhVCKFYF3tKdZMrbhSDNxHiqKYvcSbMUEExiTYAN",
  "key2": "4aeT9hATDah6sjtEBn7TTcTWpF2bsfVsS6RuXB2hMDuQaoHMgm2V6p7Uy89sci3YU8VDS1NyqxWV2B5QRW5oox41",
  "key3": "4mmSPA2mQK4Z2hiWyE2zwCouumHMk8ZQ7yZEEJhz2QGWtasVG9nW1MjSwsLUh7fyi7DzzZ25mhKF4716wJbdqzJp",
  "key4": "5g95F6iNJHp7TDBCcvBomeaoF1toksQA5c2Kqj4Kq9qHU9jiDriUnZFDeNHy5Su4TgEsbQ7rdeucDiQNhqY3GdgM",
  "key5": "4TktFobpeduqxTHSWxN9RcpMaB7T3MBwipT9PtzACNMNSQ4L5d7t1EnTqKf3ctAwtAjhBR1rEVwLwUxGtgi6ZCS3",
  "key6": "54z2TiFhbJSmPeU8NpGeRcKeMvCfzFjFYj3Nv45bFKxzRDZCGnsgYmJLCBKhJYVA43BLkfdYfLW2SMLHiVcC5j1V",
  "key7": "2XuZwMwgc61s8MMsyYf8HVj2sbHK968SaznKgK7M2NCoQPi9Y4QoJvQo6S7HdnH5vbexxpdxyvs9rs1ReSDvCm7L",
  "key8": "5rLaK9r7YUSExkHBHdRWHQUoNLCr59TxLFCnzXPNiBh88FyKpXGEXES8xDM6vkCkDEpZr5WptaLvPV5fU4RDFoTL",
  "key9": "4DjghFhfBhzW5RV2phR71PMsj9TungbDDzFS2ETWwBVmPvQvp5idFp84v2HgPqfSpFSLA3S1CiCD9aUGUZjPJYAr",
  "key10": "3yTm44XETE1vwsrKrwBf3batU19gQ9JaNdRAk2y8sWooboXR1DFHoiFL8zbidCmf5nYCF2WAt4o3VCsSuR19QGDf",
  "key11": "5NRLCXasf1NQ61zYWoizQ7rcKf1NbG586Pojff2rMXty4nXw9rGQTQ5uWmd93EtEBtPWmv4pWWYBpiMCgtUcvtZV",
  "key12": "4dUacfk1VDXUyvSJQ6BKnMYNYkUqRbRuv2XqTx1Naou6eZVfntrJ34N9ipQiuijNubomcFVRYTPU7owtiyPRELbP",
  "key13": "3WnxUUwWRiiciTiwSKWhj7nfbSgr7M5ofmkx7dnhi6TwQiHD1s7MXaFnQAEXfd9DL6xigynDHwME3JuRy5hEKvrM",
  "key14": "4qQmmnMphPZQfpKDsRvKyiHR3cTCYLYYfG4NCZM9y1t2uAcc3Y2g1i7cTKC4X3pLZYf8JcrPDNKXwReYczAvm3BM",
  "key15": "5SiENfdcApuKQzwhNexCgTLFJY2EqUUPeCbE4UkThM21P9ugGfD4vf6UwwpdymxcCFAaWrozKqLNL3zUH528KJsz",
  "key16": "55FCXsfn9j3RsWbMYnwcNCXRbPNPGFraSj1RpDquUzhAaAXXTBxhkQ2WpNXabd44vmPWi2TgS2CSmaSuDQLPNhWV",
  "key17": "5eXsBB79ePVRKe698wHBFe6LPZRDtQayu71mE3eAX4QzNzfKEkYzPMgdEbaBgn8ijRTQUuqCjcAoPmz8yVHrWYj8",
  "key18": "2jyqCxuNX963tBr5mD871qWqqeu9x5mMvHjfBS3b8coJJdkJvAsjYA6yEx3AWRJu9NLfn9p4fbj7f1nyoYRjKkds",
  "key19": "37YzmBkn7aMh3Ci7WrBm7UcXAp5MPwdQQmSgYD8YouqDjQH78AV1NYUK3t6yjTmpDAuRJbnqDeZAEbUtr2RohkWG",
  "key20": "49tfwWLd1iKirFgpBy9uecqBEKV27Qh9a1PyjiVcYxjRF994jmu9PZnXn8RWvme98Pdgi8HcRTdN7SM4xBgXSd87",
  "key21": "3rhKv964f84xgYFuJg5s2jQPcqaScFMiUfSEKuAeKWMpBPDrV1QfSSD5TvWQm5oGjWNMxXNtXWKeicc8bsq7y8TS",
  "key22": "3E15mRqqQUmrhwveFow7VA93PTb3BoT118QhNuj9vyzi4JT3d3pqhgsvbaVMPhsSPpitMTTFh5rq6QMQiATcM7G5",
  "key23": "2knKF2o9imAfSPQWkqF2UogXUXUMiMNz3eLGY5QSBFFq8kpRZSVU75g9LwZYvvfwmqHh96LFvdjty1Z6kBxwfLRQ",
  "key24": "5FNfNMGKygfAxpEyvDm5Wtemxa1DqMdXptTomHAdww29M9b77tVTBjCdSJ59WMF76bHo6gxS5gf6eUaxiBPLzqGa",
  "key25": "2eLDLJeK1WAhgne43V6zCDjbjkT3ZMBpRtW1fQ1uYkfnk7k19GxoM66ocpxi3BhTiqNcewWov7pBNgmMxA8oB9Ze",
  "key26": "2NA55C4PFZ48ngHUefx3bXAWn4BskeLxJLW2R2mDBRdeafQhST5gZwDqFdosFBTqu3hYWsi8p1VWbzUE8BnChN27",
  "key27": "3X2H1468XKdDNeFqXbYba3wsCrEYoLzWExsHpAWPvJeZo1xsSXNx6zfDNmGciPSRVcjhpqugo4Ra8aRPvUei8Ddk",
  "key28": "2Bs7XfSF3L9EfFFUnjuqfdCFNpGrDVi6PPE54GSePLpEVMNgE73fevNjyoXVZfMG1ZLjeTJB5nNx3EdjYdeJokED",
  "key29": "5zBtngPbxdKRyZeir71R2M8UopCBNa5b6YJ7xWY3W5hDoX8sNUpFptaUz639bJTxAnwaoWsU6b1J6WLbkykh2zv6",
  "key30": "25MAyKJH4QDZtjmhSR4byGQJEtS2wj8hj9hwXrPuwxrBaAy47exi3Auz2vdynELw2EaKdicPqEEuynjbBvxn5ULm",
  "key31": "5N6r91aF6HZTFXocgj1FwSxair7iweQEBadZrHaE2nvXYGPbLMhjvJLZarxigV5ZAB8uk8q1pL1ZjHtvSnB7TtQE",
  "key32": "u5F19B2fCJLXRZahUeJFjnT1cHAgsc6DD4S56EwT2bRz6fcGrhxAbiA6HEWsbHZ1poK3bvK3k3Un7a9jLZGdbNk",
  "key33": "4UCXxTChKLwfZa1mg9VnZm2cYfAfGJEigh31Z4VtqPf5EXHpwcgpeTr9q1VG8f5uMT3TX6T9ymg55rJLXLJwMmZ",
  "key34": "2J23MVaSrfVVEzbpzHKBfVyA3BB3iK6LEzS3eEuDXQ6qQLSRybuZauLBG5aao23qJus9DrJs1KuYrf3PcEvJxEVu",
  "key35": "5AcnuAR43ykDxWneobCYiTUuWqRDAhV4SLyvcrCkUsbSZaei46rGyQ4dZ82mwRpjYfQFiQJ4N8CY31NuWm5Bn9vN",
  "key36": "4DaN17YNetu7i8fMBwzPEDxhsrG8fgqnXVZHTd8zrCBnQXq3DE22XWgYkS17XWWYJ8Cin39G4vuCc2Mb3tv2CkDJ",
  "key37": "4TGhtUPpCsecQ389X8Nyv5EqGR4wgFh8QLkBeAcNEbzeDB8vrM8YSDM4gmTAgEQsziX6BKqJ7oWQ9bDRUZmEatyA"
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
