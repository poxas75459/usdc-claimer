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
    "zfvUqcXQKRp2owBRdW9tEePpWupNc3pRXJ1JLUtkPkzuvposKB1DvaCbzV8uXJXEEX5hGRSeqkHSGagxyxbCk6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3geSUSnYu1nUg7cLscfCRRcgQ9yF7sUS6vFTN5sop8GaRQyigry75nuWXL18W7ZQm7V4YsePNL4tk81X675EarCm",
  "key1": "LoASCA1ZdrZfjEGdaXKxeMbqsXrYxUj9RUKkjKTe4XX7Ed2Jsmtb5KJ28pnhXNNAZNvc3UiAoX4vMLtJhPxcAQ3",
  "key2": "h4Ews1RNpYE61VYdyMHeXu5kbvvhCPK7shrFBz5g6Urv3xLAZ6RgBAw9pB1MVcHxuj1puVB28Laipndrcvvz7e6",
  "key3": "436rzZhWCH85tG9RGASWE2jo5VWxGCnaHkWhHKJZGSVMmyynb3v6MV3Rfx2AGtPwZvuDYvpSDuEdPs9TzR5F3WoD",
  "key4": "3YTHjgPE2MVw4ouHV6wJyPq6gQeDmDAkFehaHBDK19Z5wMoWHXUSXhQmeSes2wdRZL64GTHttwJ4mzGeHsqM9tdM",
  "key5": "4DSQEPjQTBJKTAyBmvkRb4opWekekeZFnDXnW9eWAaxxtVnGAYdPiY8j4xGAqr5Bh88VdU2dbh7ZRe9S4w6xXmfq",
  "key6": "44S7M4zxVS1XEsFV9HReRVPCEGhgjkcuqdRagb2rk9NeJLk1mQhatAjmnZRZRDQxYAY7H88rMTTqe2ir7n4kW7ey",
  "key7": "5kmK2SMckoNwxkfDXJkFkytgqxfkm4xeT6MKHVsoSBExNhpayxCH8EyCiQnDbn2Kw4pepAMmdWRRqZrvnjwBaVJ1",
  "key8": "5PgVH8Rq7R5TFhYHKPGFsK5WyZ8BZqTMS5REFJ56k7Rh2UxKda18BJZZtLG9dvNrTTRppUvXqF6WzgSdJTnBXLaa",
  "key9": "2KrH2yuq32GhP5aTqUvr77ard9L1EF4gBQnBaq9CVVJSUXzTvspfoKn2p4wzkvTz6B2pCquNY7NRkBNv77Ra5V3r",
  "key10": "4p4GDAndmsrBjecSuHRRKncnuF4keSRTBKD4Lxn7aRPAvZxoaohMo9PoDCEjt7683A61nrX4csFnNSVqicQHFKRb",
  "key11": "44y2dGXpqMmuRyj8zhB7MYGJaZs69zxU1TPPsmhkRWze5KncXWk3hY4BCyvim6xnvk6tt2riY5BSigyKhMAoQbpn",
  "key12": "5B5H5sSZoWfW5PVfP6AyLe2s7UJKx28R87D24nDQoNyPLLPuKr6tndU2JKRKN2MvfXTRY5LE9n7wn7qzCkLF1i8Q",
  "key13": "5hwYXki7xdqCHiTQ9KVDUFPFHoRzSisfPdbBomqTxGEJj9v6oFDTDKHUdyp4Zx4nGxqVLWbtXC9pd1N7LzxKbw81",
  "key14": "4KsMJ3x1bKt6ceWmFLSkd3pMbUaQi1PmZLF92ApDh7EydjnBCAh6dkkPFSkvz7iidErVR38DqoTymSVPCdKhMzNU",
  "key15": "4WtQHNEiW6rYmfhvy9yFwyZfGNWm837teDqAFGhADzDH7puo5HbxBwgrTaHZT8g9f66PYVE8k7yiczXAk8D1rUSX",
  "key16": "6rQoHuudmQCqsx3snpsGaEG6zyHCBFzzL3ZD3ViMq1MwWF6hUCwfuycLVezLvqSQTopeZFmSyirFfYu9Mew4UK5",
  "key17": "2x725dmZEqhJoxLQpTzryxznChERVe4UcRrTeFEwcez5Kmg8kDJFacC38fWyJRrSfL8jvuWY1KQ6rGBaDcx8MwiV",
  "key18": "3bc6D7i7ienavWwnT2yUyxp1Nqz3Hnf1QrUhcsHjU2oEMcGh9zDMMeNLynnbeabwn79fZNLLvxtrngivXHsBjrMq",
  "key19": "3VjLsebPEbEPtd1d74wXcmEoNXcoQiZTw6KKzU1Fv1hWJkRosogzjP24AcU5E7RbuFPYGQShtv5ah1VEnGUfuEoa",
  "key20": "4qpvEAweNJLwZFHKsSaAp9SwB7vGZ4Auzch5AgqWBchLQtsMSf1kauz2HCrsdnFHxrPZRtFfK6vnd5nJzRbaczop",
  "key21": "38xj9xgdhgYpw6zXv7fvamvyrMPEUxkL6zYMFQxNX95Ks3554SXGmyjtvGFrSCGWYTUovPvcfx8PVSDrzA3da5V5",
  "key22": "4kru2gPQXbzY5WHLzT9PsMuRVitfCqrjoA2g59xfddasKrcTYNZCvZJ3pLetq2AUrBaLaaMeKmMSxYXWDDV2YyWF",
  "key23": "5XYv4BJ5krVgbLBpme683LcYHiS2aLbCcfWMGEziJLjR43g8pPkgcd3tsZHkPPH2RQgigyanswGfuEarFstxGPRQ",
  "key24": "2ewcBYU8SC52Xhi7SG9McaLFNcvBsye167RQPxn9mTcaoyp3zATBoTAXzadNF3jHrvnNCoHaX4rwG7LTrYgdbqkT",
  "key25": "3EZnXSJMetG4BSSHoQqmkbaQ8PUrcuid7df7qGRWencP9DoKx3yDX4bChnyv6Uqv7n9NP6A5ryx9trDhbAP5m3eH",
  "key26": "2nwZpr5NQ6nAw4XLTiZZXSGWk5ZjZxatGD6JYXCgKinmDUf5hE61Uq7NFkKXrvfyrtMEBjQZ7TDJbihyXv3NC693",
  "key27": "2ySFTfaBRgmRkBzGtyfZ18oBj1VWozaAyzvHXutyEiieiK4yWj5QvWaBttCNgFJ59aiwBY8SrPmzkc73tgppuowu",
  "key28": "yMiUwB4DHFkf7mpwsNGHtbgqSpn2R9tiLdDN7RutUbw87BFipo6sp6okt7Lzi3hGEPWQzQfjSpckYnH4YaV76dW",
  "key29": "49MQoBtfK4CgVQxha9Hqw6xAw9Lz8ncjPzP9xxQZDiYoPzCunzcmVeM8sjsfLc3LeYZ2WbuzHqfuTQ2oDn1u2CCP",
  "key30": "2nM856uhyvQ6LQDByUMeejQ2MMDj4BwnYpE3ZMuWeNLMUWC7ZhjPeh28vg8VSAUfYrKNpbtMdYNnTASqfax57XPS",
  "key31": "2YCEy6Wgs6uR3FW17aXysPCjQfEs1yriWgdopm5xiMDSWQmJfKWXs9Vi5JetMc8s8jC6c6Sx3JthqGXxFQeb3szq",
  "key32": "2YEBtmCKBgzPUcr8rmtqXtfPtUQNGYJLPTZK6MCQJrkf9RBbV8GVEJq8jww2jp7GsRNbfQ2UD58MhHi2VQkUjW8n",
  "key33": "49zC6vEwcWhWLwY6mzfboA83n9e4gtebQ6DDNJPAso9h9AP74p8gARbv3rZYAydamtZkc734ynwWQ9j3Ak4TNdMK",
  "key34": "3XPaSSkH7GtqdpNrjwQYKzFTgc2omrvp3DdiNBKAo3AuCx8rXnGLJjjGP9JPC1xy5RTnQit3DAG5gGGQZdvnrYWr",
  "key35": "3NiLgMyhNspF5uny9z3qJV4xQSrFvsajAYWFxqcarEc5H1hqn7QMPFRyAcdAEN28twLRRY3di73971R3wyCyhv2",
  "key36": "2uwdfQADwKXZYnT1xCwfBvD74rfPTEPR5brqufUx4uSQcW48iLQDPhcDoc91KbHTaj7RrXzcyNWgJ3QU1E74s5od",
  "key37": "3YoyhQM8xfJMC7xcwAfwhHwkFeMzvsEKdcDstsFC21kmnLUosdSR7aVXhEDvp9FbWTr9ehneBPfwaS7UVm1HP3yw",
  "key38": "5tyuP8PrMnk8YGWoscL2qq8eKwmsgAzdrYbpjuDcqbpjZxzKsTgCx3xmTNBQS5ou7Xp3qfzHKg1CFWXhGyN8CXbL",
  "key39": "27GppKwumQCCwunTE8f2iSAnqDhxTVNUUzMvMfKMYn2tAnBXVn1DjpaWpzJVGPvauBZZx9nE5FqXvRyjGwgm6492",
  "key40": "5zDpsxiD4dspZqaxpSJ1V192HJE6qNAvLfxFc7RjJW7Fa3Y6Rnbg9WZF9PtJQgwT9wjGqFMXNkxrv61xgvHeHdzC",
  "key41": "AdooCijUkR35jtzwJEmQmjanPLU2bWw1H9p5rXHywoH7eB33ZgEHk9FmDC8yWGZfV6wLZwRtbRb8dXzF2RcwJX4",
  "key42": "2iEuVjiFYCkVtJGHVrRYs9JpR3iwjZBzYD8z3dhgf1idsE7pwtLz4D8sdJ7RMcBFMvk14Q27nBDbVxRD9bBoMuwg",
  "key43": "fHvAZyZrPQkzoGAKxy2kC65zEFRx9zzCESrs3kNAknJZY9Kkkd1TynPjj5BQoifxLgXzk2PakuHZ3nVqVKSqXzK",
  "key44": "2SWyvBVHN7dY2qHhR8ozQFYVHDfgLxh5Z1ZWREazKG2ZaLmrqeXZAgsFWrP4x39JqB9dPG2hZrxTPmPHXAHDE8Lw"
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
