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
    "23ashb9c56XMBqhAtFHD3gYg9M1uiBVVStp96VjC13sGVyZ33YeQ8Jvz3xXGSjSW6Vx9LVp36dhgFWY4XqzbNTmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TqSWHWrRjUpGGEkRy7so9ssaQEM78DhSMWKHvb165r4f9RCWfsNDac4tnj8ALVoySe3avyoBr9YELwbTPWUFNQH",
  "key1": "5s1TswGEZ8JwAz83ppovDBhTY3EurdUSX2uP8iHMkYJghExbGe17REhDuk1zotZ1HmaYKwpkp37D9HAVfHhHRBHq",
  "key2": "5w35ZzX9Gm8wQMsNNSw3saG4sGrgiGwmQSjWAfqe155Ch4Wbpe5d5HyqaoaWjv2evkrcENsMvfvgTMGFyYdWip5t",
  "key3": "5dQyrHMJT5Z4y4d8zWxahjH6nzGLmwV2D2ozEatL6shgr9N2yKfToGMcTrPxCBAitFWGw5fFDc8VVGb5gisecXGL",
  "key4": "31pPjYhXQGVnvge6YuW4HFq9AzqGwHYRva3uAxnLojZYf4qypzniRh4ZCcbJeqJC8nLCmnDR1LAe14NKkuVbPYpK",
  "key5": "3di5faZBxpZB6d5xBw4CrQhXKSET9S17MepMQXLNJQSJy8AX6T1GM76x4dQ8fvt9RFXb4SBrtQx9NFi49LjMJbg",
  "key6": "49LZaBNWBLN1aHiURHHbsn72WBuANA11ePULcU5SGv4C35uwFXYFmFxdwVTy7GZtkqDFgyWzr2TCcXfTV75hc3o",
  "key7": "UwopNDjZJjevQsSMwhKNCpKmEgRXnYkrLz7ojTJ16qz7kP8y7zP1kfRXD8g5LMwnt11VzGNesxiULZAxWnviL6c",
  "key8": "3Qfd6uzWE7rqFccdh7dNAvmepBCxr6xZYEquCJFs9YrtavtpeYmfmtxMhtYSTzJSJbuvcbWq573Evk3Z4DVNQvr6",
  "key9": "3wBaaXDnLP1zhvamdxtgfWruHZ7antXZnYAP5EmTxYZXrf2E471azweAkiHjZpwdWrjVqCk9GrXxZxWvT1NxVyLA",
  "key10": "MW1cAtVQgsLYu61bRVtyACNuyMoT2jKhQseUME4BujmJLhPffCxZUAQCwBnruVzJZyt9FtTafKFa86LuEFm3DWS",
  "key11": "2dZB16f9mJX2K7FyHxVKKkFVE5R5LhG1XWweawMGpbBTJtZvebfNFMfgbTanoZFEUCJUEHwah7vXhK9sQ3beYdyD",
  "key12": "CCQs1YGspgGoaTJJSXbJ84A2sQxNqraoGjnKrbCwpu3pBDrEFR6tc5ZSm5UKggrvbEBc5ZhLiPvQcEGZAEw4tkJ",
  "key13": "2VFZQhSQHzPLzcsdEtq3hDQDWxjXYq4TrxC99EBCRLZ3RgZLm2EMmfdLC4QggzURMW3HTjpxxeXiDfWysbBe8XkL",
  "key14": "4eHhb2SkHUZRu6mm1wVrWFLbirfkx3SWGsfaQmQBhsWxWfAXA87xMdicJvX7N6bL2yZcP4dZCzP3bvwEDuRPxwgc",
  "key15": "4Pg57CkjDEpeUF4sVKb2PDEHzZ8A9gqqchNdQy66SFjBuDHgSipdQUAVm5KK8d9knSPYBKgApLejA1rPER7CJV5W",
  "key16": "2cybejc7XqvZvVGmEw1kcVzctiv7xn6chLJvnF7DaA7nERNGyVFWk5jRBhxvcsmvTY8bTNtuUk3ScbctA7MYfqYf",
  "key17": "2bZGvntWnnpGpvHPVpsXS8CxFBxTMJttzACXWUKVtPBn5tPCRNNpTM1mEU7izUD2LfM3MGd6C4Tigy7MQFyxfnwP",
  "key18": "3DcAoMLubkYX11aendQo3PsoRwd5VHLPHm2GwYvukAn3mgBQoSFtWeA5BGjQ3rAhkmexiiERxEjDKhbRCPw8DmVM",
  "key19": "43wvDSKnLUtdXPJggjnHK8fc7VTsVrpgwShB8veXrm9jrGfNUDuFCJk38FSiGSTUk7e2rJeBaNMWm7sXP2TXLNv4",
  "key20": "toXZG2yNm227kLK7GTsstUxn2guAyUpqXDCistxjHzvQ6unGpjYNxBqeSGFfG9CzdLexrKNv5Zxe5rRPWq9zMxS",
  "key21": "4yXVqxBmxkXBagrk1xsPYEH46kVJPPivZg2LHHUyTdLeGQk7GC3vkLuuboQv3BJjqSJuQd1gczc1o8KCzWsbVB7A",
  "key22": "3cQAYZW2QtxErUzgs9XmAvttarnCTqrw1eagKN5dgzR1sUcRM5z34jBgXDBkKBB9u5u3GaHM2r9dUEv8zsAUokrS",
  "key23": "5BapcpzDyy5WY5yL3i9HV61W2o4nhmQCNwT18WyFyFjJAqop52ZHeBigNc5RuyK6EY42Wiw9itXzmDzzaRQLghH4",
  "key24": "3Y18ak5f8Ntd1kqCs3aLsf6xKdnRj7pGq7AjEdib8ZvXzd2aHuMK6dyLWx3VbhgR8jsreHUBCZvJXgpmNiBoTMfn",
  "key25": "RTVh6by78w5MWJZ2bKrmzeh7b37QD1gmpM661WPRKgcEnrgRtLw8F166RB9v6512QHxncwihBN6nKVKkrbubhcJ",
  "key26": "vctVucmaFbYWLfb8DhqSCQd4sjo1Uf1GUNeyRuxG6EY3ACnLyz4Decv2upAGbokesZaU7LpPvoURx8yHAWfuCEh",
  "key27": "54SwT1Px3avuDgNBaTKSZioGYWnqwctxWyMLrnJE99HrR9Zrkw8QgMDeAhNTgmvfNRY2fnn89WhkhxKfNrwekZig",
  "key28": "5tezboXRZpz5a87L8G7Xeczc2whYN9nE7sa5dQaF2J6SbXrwFcSJm9379AFFJMkrwyyk62mA4T3u7qrmG1KNJkYz",
  "key29": "tFohzVkVmWBajct8vxjHbtN7He24VAjL9arwHFML7ZAbyZ2ukc5GucHW8ettrDkdw1P8UfLVBAhZzzUGgdhWKMU",
  "key30": "4qP3tUttMDJECLQtjUo3myuL6o7omH8qzFEox1sYBx5qufhfMFDUTgv85M6jaikZ4HD9ruF8yEs7gzCrRUEn3eZj",
  "key31": "NpSE8j2iPPyRjo9Qu9A6RobAFtw5HSiAAjVRza6WYuRwaeVFBioCNbcf7vtSzKfxFjeTJ61zpRVkMoFKbR3xk46",
  "key32": "5DvLTTpxGiPMN4fT6LxbCgMHvRuZFszdKYLB369yeiaqfpeE5hYfNZY6f1LHxpEXDGw9x6BQe27g55RtmYeJbiHx",
  "key33": "3LLNXKFfxAR2ZZJjBF2xhrMHthSLegCtqu2FGbtVxjzmFhTZ3yGxodvAPhtWFkjt6XYfQ4V3Cp7HVZhk6KjwJZRe",
  "key34": "51U3aVHhPCPiCcrLr9d4n17gPSKpNpufNRpyAA83Zz8nVK8ArVt5Qroj7tK8EDTmiW2ueRMGohvxBeNozPM3hwgt",
  "key35": "42yMHLquhYqiEYg1rps678kxSF9hXv4pfnm6UbACrSoUKz2EgF31VjZxRYiepKLzHUpd5U9dYdBoqyxvLA34R5VF",
  "key36": "5RHJWh7gNagvhPPrBMGbqEApawAB6o6Hv1vU2ra8UV8xUPSezCPFnpHTDZFzSJxbmn8wztczbTh5VRwKvMf8NmNH",
  "key37": "5mw9ss1AgePV8QHYoZS74aRfgvyQvMamAEFPUxmbR3FoszBCN3wMnG35cuCUiksg7nd4uzHSqhjtTTZMzayZaDR5",
  "key38": "3gxAswvfet9ySDpdcTqJrvruXVeJvxt7H1x2EcyvdDWdfoDttP1tB2qVGc3eKEhdKExjfn9HphUjBstnVDDkJGNa",
  "key39": "5c3DrSVvickatrujCYbWhHHXAkjSnMF1R518MdXtcKPkNz3nmZa4zsZJ8a1iSyZrN11eeY89GjV3Dv5juZNXL5Va"
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
