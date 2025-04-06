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
    "3wBtWpWtwj1iYeA7ESgdWwK34hSBXwgsaMVNh8Q6Z2s733i8DoC6b2xYYAZTMnoAuYYoRmMa2vEEFEip3vdA2PsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tb92QFLtnjkYzAYEGWSCaPgFVb5E5vYgnjjV564RXdDo6EbRWoAv7MFoaASMpin2yEZdN1njsrtoxEG6jwXWNin",
  "key1": "5WD3NTwqxtdpdwgvZxpjeAfHJBjz7TCMuQA5Z2LoZHw39xwoEpKj5sCUxC7HDWpaJ6pYZE8MKcFycEZ81rZ2w4Xg",
  "key2": "3serVqPNr8w9HZ1Zzq1ZXdRrVz9jJD2kfVLGjHvv3eQ6uVh49sNdSrKNWQ7J2Eh7iMQGGcmm2shY1HBnrtFLfC78",
  "key3": "4XjonJm9YShmm9bPRb2T3TAbyNf3S4Y5uw98bD6phbtWDjsNTUQz1kADNvjUhGNCggV7gHGbEsXVtLTCFRBj1BrJ",
  "key4": "4YPvREoWKrgUuvBMSkgMFzARRfw2sxrAM6wUcTPq4KvxQBp1TTNEgkAt5mDxUYCnXgju7B8Abm4RLpi3HXpKTe98",
  "key5": "3jkKS1zuZZVaQCt85wvoHqt9Xms7VyXhkA8en4uiN9FE9RGqr268KNCPNWgqeAjZNAzFVi7SMRGp1NSUF3jfiFjB",
  "key6": "DnEANja5BGWGxvcZMNbsKPKF51Bo4gxV7uVhamv3Tnu6cFCf5kKuexjsvTKREVwk6k8gprGzcYuRRHdpuXTpZuC",
  "key7": "2BUBiG6TpmrMuBxHDuU3sJf3YewN8Kjm7pSSAqe2uTKc656y1rrBySSJrkeLXcwMaVkjL71X9XkhwWjqQPXNzb7m",
  "key8": "56Fwo6RUJvhEXasonaEnuF6F76aGcQwFhqpJGTYGTYSUJxkg5sUysJMCARivm9a1oeJGqtLVez9abH2wCmAFbyBP",
  "key9": "2ymDbWC6UWTquSKSJmWME7nkDW75LcPZDcNdgbq47xBRd4g5wWP7HYU9BDZN9FeBfZ1kmJ9QirR1HEFirDh2PBEY",
  "key10": "5DCZ6uFLKx5ACD8hEJPmdZCjuBYSMvU4dUSkyp5mqqxxJtCsAKeUVfVGUMucJQYbpqi28hseWQWASLWeWeLj8est",
  "key11": "5FDs9PssBDuHthsZvTCtTUgubVy2aLfTZUZLoYBifmJp4J6C96wagAZQFH2RgNzTL74u77mqxDhepLYCwTnsMgY4",
  "key12": "3JmDJQaKkEHhVxnf47nnSEWrtcqhVBJagqhQYDsGavQZaLEwyZfHGoJjYv4YdzJnSUNVy7mHiLVPgAQHJv32ebTv",
  "key13": "5GnCRpnpPN1rWhexn3pWAH12tF1vfQc2dm7j3CJqp8AsWRq841x1seHCgfo9SwEd6M8wG3bQ4vyrT59xusuUQ7Hz",
  "key14": "xJ8d5v5tgrzNzq8xbQV6kPLXAgd5caS21fgGPzqnszRWgMWhpRjvnJyBKw3GM7HHvpDT13fSMDPkefRc3a7EGd6",
  "key15": "3Hdyb4AKS4X4JEhszcwJdVMmktbmPqYnVZee89WWqBjmTNPKvkZqqdYmxvTZ6DyCD9Q24WJP74UepVs1z2k59Cy6",
  "key16": "3N2meobycvpBa3p1ibcy9fV7XZM6Tzt1tydffwLQYcwuzC6XLK5Pwznq49NRKXabpjTwNVzBrvd8AE1fGWTsnTm9",
  "key17": "2pwpZvZBrb1TofvsxXQoC3UnMLpB9ztu8RB2BMyzgUz4o4KQXGxorMbi4UTuAmZ28GqJW9Jj9UnL3rcUcBHkmfdQ",
  "key18": "aDDSYR9ZhEFpKMdLVUtxfq1nkk5kHy9hyhchBvDGij8CuThRAALJqPQ2jEMtwF1D3BYry5ucbsSSrTfpNMUFdFN",
  "key19": "4X6GpYzBPDXRWtNSMpVzhoUAAEuSzMbKwoMSBLXrrEQ6Fo2QeHhvLzxMyFbdMxgiTMUrukaoQZNsQJ7MBFHrr4LP",
  "key20": "4TwFquKdG9P4H6TbRUhLhRDjLyQxFGfdR2z4djujG24Ur3QTHc2YjHtmD4DfJKkFGURzk2Yvv5drm7vM4ufFQ1cp",
  "key21": "58wSLXfvsUMEDTnrWd3rXnjnLGPYFBNeP5rX3nfmErhypmYaG2j1kHFAsPUMFpQAJddU6fSSVg6b99BkGyVC2e4N",
  "key22": "4vvz1ajjiZiTUo9zCEJ8mogy8Mn4vUNKX9xfGypb9xts6egRJ2ewmMP6rqtA9qQGgshEdyiPf8tPkexDA9ZNSfLy",
  "key23": "5fxKHQEP3qFUFTgNsEPAE5kZ2T4AQem1snHTinRQagLeCQhGtMJWLdKgbcPJEk9CPDFEXsybWzhd2igww1a48Re5",
  "key24": "21mn7W4BjvcEu1LCaFJcyVnyo7pkYgbrkkwgj7STg1dvNhZM3jJhAiNDRNVyGDAFSw3ELepLX6nLwQLCfGxtwccH",
  "key25": "1KLJ1RJf6xbaTbATsDPCtDPHLpMS4ZpbsAn6mWypLhpTpMpSvPjyLDPQScX6emRBn9ZLQyQUYWmWKxy7yQP3mev",
  "key26": "55U1X2e2udE79eKj2MgYVUFrDmocRCLVdaBRxxmXuksS5eVNDz4FHNbdS3HDjLULpcSNSAz5i5Y4ZBjjVuB9dgra",
  "key27": "5o8Mqab56Tqg57zvkgEm2aAHQ6iq8MkxTYH9pCwfiuGD57Zyc3DETv9CfQdjXhA3z79dBQgWu316MWY2ABRwWVFC",
  "key28": "cNCdG4f8p41C3St18yD2w8NQghHpNkyAC3gKG3Wi7fQ4hzTLx7qRZAfeQFjC9aEZ7Avsajz4hjRZTPq965J4Jvc",
  "key29": "4S1wgmnZwr9DzMThi9MB2BASJGBcz8GbUegyVGKN29nEGoER1iRS2gv2sfTaDmbu9QVqhpd1wapwwMSW4UQYzMhh",
  "key30": "bWi6RiveruT9qd8N6rKzLzXPw1q67rQYnXBEcuMY3uZe2MPqmLdiRp9AxoBMs6ezPD8U3TiTdPmQacsjBceLBL2",
  "key31": "34Xxd6ADkStB9sTGPSTwwwy7ZuV9BEiav4fNy7prs82Zimkb9YGSVY1jqXWS9s5cVdAUB1ZedSpfRuAtYRqkqqCd",
  "key32": "2VQag2ieHLVNoVsDjP4ETgSkv9E3JpKFUck2S8rDsMekLT29DpG48oFyeFXzuRs2CpBD4DomtC2vJSUFCHKvtwV6",
  "key33": "2piVHd4QuzTn14oXp4s1ZP7TEYeXwFmWYSp6PKg8toqZNa5MjnBeXVUuVXTjUsxX1P81SyVLSfjyM7xEvXH4mKDP",
  "key34": "eeoLYFwVo1EUomNpfnVV9p4kNj7V7PrLjNS5z6goqbRLgEyLT9BjY5A1UitVGpoHw9GLRogCpCy6Z7MjUuKhXeP"
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
