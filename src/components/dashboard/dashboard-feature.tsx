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
    "4Sfqxs5ZSPHsFmEjJxdjupzvX2FirHeCb88hAbshc4EBfsRub1n9M5L1kgGWf3pekS25g5TWonEEWXVprhpCvpu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YnH4AL6kX44oZJciKPuUhXNytWX7Gkq7vSRFgrSPotHrSWQ19uafJHXbffFCFwQYJ4TFQKwrp1sYojqPRN5Zcfv",
  "key1": "3zULw5bPesLZW1CmRw6oms64H1ovfUH5pJHU4Sm2LCYSokrSZzTtQ2WyhPJ3FYyx3kBA92Afk4Y9G4sG3ECikvrL",
  "key2": "3jrde2ZzPqTkba2ydNYGfatjxF3r4e9CioCy2siGkUzA95Ksv54mjCAieWNvvVHAHUoSh8NCyPvPARxEG6UzRePG",
  "key3": "wBtDuwWhdJqFYLwYexXvbzGvMq1p97GrqDc1MKT7XjjRoJGZZ6fuTYYDfGHpmPZAZwKeVtAAJdVAB8S6yALexEp",
  "key4": "4XtY1Tz8WjumtVgRLtdJvRAGrE3mqyWdNRWbeq6S8yPoxJ5dtpXXPzr9kmsvkpiaeKQmP9dqVfgXHXZBuJhNZGS",
  "key5": "jPhQP5FvT3zuPaMgLvRz6ZDgoWTLHieLGErtnwmaMSuXe1Be2EAAKQMV8SHxvjzk1tSHucytW1qKfYkeDzi7RDs",
  "key6": "5hYwq4vXucetG9zCfdydAxt3cahDssfgGZpwkZzTt2ekbgzt3jQbMUova121NzW7bQU728MPaPzZqEDJt64N5P8",
  "key7": "3BifoGCAF3rQNcwYV5a53YbPkUTRf73roZhXxKEFrEoLDWsFrrUa4JnLsjUHgi1N71UqZRfHqTkswyN4MGuUtJUb",
  "key8": "3kSH89c3d5YFRA82auSUHAbfnbg8bHbvoz8qs9Z53wxtsSArWaRgQ33iYMmAPtC8NQqrZwymyfPSxtdCVqYyLaZs",
  "key9": "5Zc2nLMFVHx1Fg7gxzm44Qvop9wjdz8Yhecw89n6bdvJnULXw724gzGDYjiEY2kTNKkhhxwu2TMF4qHKxJEUiyoD",
  "key10": "4iKsS7AbZvt8Y59DhwqevtpFwALx75UGAjJYUWkFBKqiDJVLhsvdeubMRQ26H8JuUPtz4QrLw4vJpKmHKmHC276v",
  "key11": "2hR1rQKsiCHC1fUYQdD6iPwbaZ8R3L8gFGA4Zot8r63iKhQLbiuPCQrFzFYhyssnstQKwRjw5LA1phk71Vk1ZVb3",
  "key12": "2vqq5LEVxJiZ3KrrzYHLBLRw96AeYq716Ag1a8699BaE5jPo3z6KomFTXohNFVk9ENKyySCQUwQAPAVLyr7KKQ15",
  "key13": "ZLi26iJp7sWphE7trPgvN1eVEZn4iNguRM6N1aZKukMySKipnvSnrU69LJNRJvFdyc63cChUF83V41nWJygeGJP",
  "key14": "2F3LRgug2eRNTtPngo4eBVyUbJHdPakP8J8mJyS5iRAL2oXiMQPqPzWiJRZQ3qYPqRzLHVadXjU9LC2ysyvKHXDk",
  "key15": "2AxZ8pDnH6DweY183SiEDjk5iyuMmWhSinhRG6vLx7nMEdyAp7dcw44iEyFYbWW6zPXsfEpr6Z9HWynVVvQ4PnA5",
  "key16": "5z1L5k1Bh3TEjE9RpQAJ9PsA9n8BBr8dRAgah74Jv1hdKcVFpKH4i6JSxHK7JopAqzNSWM5Y3qSAbyPPs2eXMFaF",
  "key17": "hSYsUphjd1svtizpfb7YcpE2SvzQzasGWEWpPqZxkhG2mwJgyugWX5CupWHLvvwGgrJU1xqNZA6Pfc7Lw3CK2hf",
  "key18": "4CHKtYpXcvnG5d34PbRT7JGzhV9c4wbvJwnSJ5MF6wpLzJrLB5uhFAJ4isTgqFQ2iFqj7fSx5W2cwhBmUsiEQ5bc",
  "key19": "4zoQSRvDYAQVCqRav8wznbvhbXRGnYx8jwXCTjHfaQc387FrwsKiMton6SNS6hb5WKz2csx64D9RMqrhgjCcbrzU",
  "key20": "4YousnurF2ft4jdq3KMe5kXUTTDp6665bwhxChu256dZXRWgFr7V2beLdbHAZUhHZLHX1jvUzhURWPY3EJqcu6xE",
  "key21": "55bjugr4Ed64k7woqp9vfkcNfyxyZoSfR4ehGzAf1oD4Q9BAX3RMXd5Pa7t8LuZfrjen3N4J2EZSFGm4GgAjrVif",
  "key22": "5htxiAEFmvHQZSvPUCTbw6YUD9FCnPEyGDRhMfvdTbCmz8Gon1rF9o3jdDQb1q9hKvyrZoFbtdkGUbLJghMnJbj5",
  "key23": "341vHfyo6B4hxqWN3PtaYupeimXN6wXhqnurjcTtRZMsdF8s9pEt9daW79nAmcN7aiw9q9cfUZ3ptaDoCXNX9A8Z",
  "key24": "4xkegW7oaUQLvFhDfKd2dAQnmaQsoiAAZuxXHfY8Q1NiivpbMEFqrLy82dTtadayP5zwNcZUZ9KZcNoZZZSNMAym",
  "key25": "3L8syzDiHbj4AgXwzKYXfKE9cnyDiffY7GaDFqPsxZXeLgEUMUavg4GyVrWuKMVzMo4mMAY9epZ51fVEWJBpuveN",
  "key26": "f67NPVX5pKDwJMf1krcrff3srBETHYCkghrdJkKbTET4r4XKog4iuqMgeqLxbgEiAhxDtyfLRYFMW1Yy1dC7r5Q",
  "key27": "2jMhi9fvbgTLDdP83jbF5L8SrxU8bp8vqmVs6XMBHM7Gc81Z3SCMNSJK612SVFKdtSzn94rTwEqTSEDm7azST8Ka",
  "key28": "41aTc8jwoprAXNQ1FV2xkWzMdQzRFEsSE2AGVK5Kxt6FJ7pty4ahSYqDRygU6qqGxndEcwa4NnGhgs6wS9P6oxEY",
  "key29": "2VFFp8N2zegMv4b5nP42t6aEt7XTi7WJPHZpTGds2MwCXUZ2ua8Jcr2vtZVgpfFfK14NTZYqe2rwBZAHVEhN7HaB",
  "key30": "gJvRQYV3V6gGjZibgij6uRC9yGPWX4PbNRNDYpXpgajDVQtrb6Mw39cBbFyUTG38bWkeyUwnvNpL9YNdm9pdzuu",
  "key31": "3bKxBMYJg2ubgSzPksajGr5ES7GCz1TCrnaWx7qHgpvsFCPrjVjxwPvD6unXFKfwLkqYRLg9vJs4FSL1cKUc8oxG",
  "key32": "4gyXMHQunGnhdEScCxTatNu8neefMNijwi9LWbksz8NysZV5HcEmptinTQt65c46NZFEzj3p3KX7FgMmB4px7Ni3",
  "key33": "29bXo3xrPY4VndA16Rd8hHEAygtVN8j1FD5QZA5TTiH6dGFwag3umaMAr3KuJAHomyTmKUMpVyNcDWhnMBd1fvWx",
  "key34": "nGvyEU9ig6RSd1ywEsa4CT4BHHEg8EBcM6Uv2p4hNbvrMm9sLqtfVKbkuMmCdbfFbuzeLPs2kFJjuATjsGe356j",
  "key35": "pfyfp7THq3gMjvCFu6jgSHSrbAB2bukCF9hiCrwNTkiMY1HBWjZAWDuWnGmzL8HU4uRgdj3mpTn4DgYbvWWpr3W",
  "key36": "24B7rRwgCjDZjmHfuWHqkmDHrUARUytjcQEZPo1H4mNdvCaXZyCgkfZwBywo2JoUXsBsYBavSHVmGyjJwVAM8pE3",
  "key37": "3YqkXjxfxzwwnNK1C1MeAghBDJSShvEhxkXjGk7ak7u3uWgSoH3im9kzJqGq7NccQwx7oisRojFrXpgkx8C1mHDh",
  "key38": "7vRLXExH13r2zJ5XfJqD8dw13cRiieEfAuSTzj41STAFgzg1YUSbGvydfTrGLbGuW489gHomYZyiP3UWdRrCUnY",
  "key39": "27GverRFyyUsb6PpPEZ6nhMhHznY1uz5a3yuJEqijQ1bQSMzo4heCgLyuo86bA2PHU7BcBLYUsdMMzB1e7UwhAEP"
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
