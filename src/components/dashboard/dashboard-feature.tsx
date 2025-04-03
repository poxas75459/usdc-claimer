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
    "3rG5EPTmqRzEeeNvmtXg1bQNMksi44p7p7wzWdUn8yAiHqAs4kLjUo91qHR9ot89UzADoZ6RGWHphZxhvHXaFsgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qocqErh57APb116hnNvx6YXA1kRcToDNNPF4YZJ3fWD3hvpL41QkjLT5xLsBdkAABJseyywpbWyPeYzUJRusF9P",
  "key1": "iYq4kT8Ygf92SzvKP2jJYSvFe7URH8ABiMmTfioetFje74CEezWYNtJaq2JHJgHSvpWo48wrprak3wfPrXt4vmY",
  "key2": "5qXiusgWJ3xuVg4XtztXE2M6p2tmNmkDmfq6juXEmK5yhMjgj1oii5EFik5SsBQcYeHki41tNSrYMo8RiTieTV5n",
  "key3": "jBaWPPLHtX5nD8YiLiQuRMLEahUTF1UkiEJdRhMuuCm8qSjJeaDfpDSPdAKpSG9iCmgJ4wbMp5rKani9tjmPMeE",
  "key4": "UYCfe8sUJoXVLyh1rxp3jiRm83QBRoJPMzbJo7xqFDZKbsRJsEtJmvbpRWWt5WYsmnc4EsMxYTfMbxAEW6GaTVq",
  "key5": "2rRWtp14Xe358RAa4xjPFYmTbTbmEWbUJRqwFynoQuK2jSYoMfrGeeCszrVzXaN9bhWSToar3GXn7HNqgQ15BhEg",
  "key6": "YdRy4HHvmzwQ8pzRKeJd9QCpvQbrjAWmQ63izX4ZWbep4cbi5nhouff617aqz6HunDwNwWvhRaGZm6WKwKskzkf",
  "key7": "4ccgFutrXQ3Afhvmk9mgBLoKGHPWnCKahr5uW2gy8M9Dk8HcN8xNxeURn7h6mFohjBrhr5ikvwMWsf48jVggijBn",
  "key8": "fFh1ggCkRYU2Wg2pB2NmThEFTXNjJGPnGPxioG59B8L4hr9NHqGWvoSnv1K16qWGVcKoFo62LroUG2HF5SpM3xT",
  "key9": "53p83BevkZon1Sd6jxRG5DABf2XN8EPZTY2TnnzYXDUm9HSQsxrC6bfme8k2A54j3HMYGoSrhejE57K8o1YPa8Mj",
  "key10": "3iWtUtbqcL9tX9HSiqY2JMmeg8USsFdJAKmTWWTxeTo7AGTCX3oodk29xiBHHq1CL5yJjVgJQ1r3TRs82WWoNKFZ",
  "key11": "5wVNyg1D8LmrKKQvPovSfBaL6uabd6fcwPBPgSCWtn7myBLG2LRFFKwLdM5hdH3RKUumxDP79ttv1BNNTuFvhejx",
  "key12": "bGLwZ5mEpLNGT2R6MeEiZmJA2qHeo7CPrpDP2nNj94r9vniaFY8RJQdDCTbczGnXDwwcHNAD5g3AbsaHYujZ76P",
  "key13": "5RehTbovHNegBRK5qKyTUZZMna9o6JT3D2oyhmUbSKmHNS6Tk9z456ixW2SS4d68FWe9GtCCgE4saBALDMJzBdwJ",
  "key14": "2uMEaEBhCRCmyJyrkPRcQEaLLQMdUzembmLXgGq3V52LgnCve7qY5jaZonugPY6CXsdZaQcAg1KCrmcd7vn5aZsp",
  "key15": "5AeUp83EVKaJfCoTrnNTP6MivRRorkUMaWevmSVQWHtkguiKmQE5RjErZpqCq4sdK7mysy1X9t4Dh2rgwHm62tja",
  "key16": "2bdEq9rxtn14Mv6itDD9gNjh4efd8P9GPDuT8nSFG7sCDfF2ydMpwYDEgeBmggUiZcrGe2MWH3hssVqCWhHZc5aM",
  "key17": "ZyXyZ6TUEXDGhgix2apfQs8qM5Dnq5wND3ZcmhkbJb2FZACuh1VEdgiJzot5M7ST8hnF9QiZeMgmmVEq9CTvRgA",
  "key18": "zEYMh5LbpKtHf8zbAokiRXA43q4zKnEMd1RRr3mbPH7EU2nd2moYK5K9hkoSxFVb25YomVEEGgBHCScVdjxBCXb",
  "key19": "5SuVyL5XzWBujZnv6qUeMhWf1ebsGiZoXREuDLHs7U132UxXzkUqo2wzXhQ1bBTEsaQ7Tty9YyVoCHA17fotRuH",
  "key20": "4D7HFAe5pwjBqVGosjGpMXnsATp5bTRFqWXU9J195hPkV31czkGmMUg3Dzz2YL9pK5cpM9doNb1Dnq88XMCxN7kW",
  "key21": "4R4tqJbJLZ9jtuE58bgXMXR2r1zQWTd4TSNCmw6PBUTttmyvUNWLozvZ9ciRoWJjYNu8vVEuTeXH9s6DZKN5meRg",
  "key22": "QAHaRyTR2HwAQ9EqviXVLkoNWeoRx5iSYDN3QJVnbbysodd88NGjj8Z4JqFaR4zDPget77G1hqantpjxiE5h62d",
  "key23": "42iSY6YDUxSwxo5q5M9yYNw3FSfEDTP7KYe84cKrCxeF7piNCcKy3tXvbGDurZHdfkH4TG6iuM2imNpqpVqjVPMH",
  "key24": "4wZ9faJ3kw6Y8eXrinB11WFLR8nn44xacUNNvhX3gECohZUMmozaDvdnS8KoVoP31mu8eeLQfrxLTcveexb5khD4",
  "key25": "49oieqGY4h4CYgAqop8tUtXytGA5ncurimoxP6eNvuocq6LSU5tAPYk6Ya88hCao7hfWHAANpix2g9eCTKUaFAbC",
  "key26": "3pnop9XNKjPyha8dyU3mciU8ijCk2LEK5KHYNBJn1W9Hij56mz2Vy1XwxzxPkNjad24aSmSDEN8GGerhF77YgVA7",
  "key27": "49XHzYZREBnaeHrYyCKs4zhpk9RJhbdjUxersD89BkSC1N4wpv1FbvPtGii6aQ2yDjSPvt1XwHFgfWW6nsSMT1j2",
  "key28": "4xX2CdfduTpAHdP2mZNedhHds86UqLRwryHdFZ1Qu5diKtbHNr2VsQCJy9w9eTgTMZgssaujZz6sBzqfehZwVyUw",
  "key29": "32if1K32uQa3C31o888HLPF2zwx4ryfYnCN1R23VR2ocGgFJWyuYa7vXKdBzQfGkAzaUEWzVoGoWL1Lz4pbXazRw",
  "key30": "3xdKiLYtgW14jfuiW4GnGQVjec2CgXtYWGQFPCu8Zy1Yo1ZaLqJQUzHdcrkHAEDybCuuMyZznHmusrr32dqXQHG1",
  "key31": "hpmP326BFXzzhUvQgobov1gpPqH9QY9g6PFPmfRdtVz6F6MdNdEP5fsiexbKicQ942fVEmAy4dAZRSftLZiutjo",
  "key32": "4ZgZWvnioT6Wry4spWzehRyadXHWwk9apLCRaXh46CjapE9Ks6rUrY1fr9aNDz4i5ksZivHAj8DLc5X9WvYT4yi7",
  "key33": "3dTrhf9f84G19Gb84EfPChRFesUffeVJskQLoTC3LbFEDDRbFnnxKRCArZibRNwYC5VpY8VSPBQgduAxWhaFYVtJ",
  "key34": "hHNbyxpvzgcRDM3ksNHC3h6d7B5D9WdCbE3aBDcGh72CCARHhWmEHtb8utGLkJxqYDL4Uiaq2rRo19QMHvHVXGY"
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
