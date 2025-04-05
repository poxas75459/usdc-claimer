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
    "2VtirmqUzgmNeEouc2jbhsTYX5Cqxt2ypea7Rjt21szNLdPsfPt555qakJ1VXvB3LnBXNPjVWF4uQmCMkF33B3o6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DCRGZsXBJxkwagTxo4Mp6y1SZAGipiSNCUzRA1gx6SUeFvHxpphPjecMLvbuzVEmY6q5URYj4VkRSTfh28eYRzY",
  "key1": "59oQ7QziP8gDnDxiCXhhZ7wAidfGLWG19H3hArjEKmurB82fu84aE8qUNjfMCWum9JZmfEV8bRuUzYoiGNj7SKQ6",
  "key2": "2aTXMwSFq25etgUt6gNYVr5wBaPy7btM5yfh84XgAyofAf8g5XqYn4QdSTbkaSGfF5BRm7hJjVVQpxe1Xc7QfQng",
  "key3": "4EuKprF3atj6tWBCiwb1cQnyanDRQtFQD2mcRhyNQz8NNMbhSjBgmuiPNkfbZENjTkH9so14gDY4v2WbPTM1rX85",
  "key4": "dghqdwRmvvrSGwYZHyjpPnptw7pD36FbR5WGSjLSiTyicT1Ygs7NUWn1X94iDRM6dg6kJosq3TdjEpEvxVacM2d",
  "key5": "4T3zErLU6K95tVqjtRAKjMpfCDpNWynKWGFGoyzkWWXBgdm2gjP4vJUWfkYWAQaLJKPDJW69o7pN2RMyqqZNTubx",
  "key6": "5VJuK3RJa3Thms6YNP4mcxQ6KqA3pyDk6XfRstZHSZxdumxyVBfADcarYaTKSJ1TMZLH9Xz5YXi8kYeDASdqLSWm",
  "key7": "5A9HSwKRmi3VhESydueR4MekZVCc2LzH3JbDy2SmnCCEBUp1FzUw79Gs5DRzhL4vDbyTiAwe38LBWc2c3S9aWwu2",
  "key8": "3WJtHJg6mSywj67Xctrjo4DsL1JreUwX6wjJjTEK4jNarzoUe2hYnMLAdfYbWigmK8gg2Y5eswBX2Ev85xX5oe1N",
  "key9": "46emMTSfJRDBg7FcMuSQJzRX1KxbbahXob7rqgwembpqSDL1u5oRMnpz8MmWDZfdR71FB9Gi37AFTpxugRDzwyDu",
  "key10": "RArvkgJnUynXHBDf6VbuDGKJjWS9o89jLQYEqC4PsWnEXuZKFkUgZqXvgWLpwC75hn1e3Cu9ePVmWm8r15MKHgA",
  "key11": "3oYvTSemPmG4aQ3qzuYv57tLoNkXYndgeZvB3NSFrqTBeWnPxi1pbD4urgpzoQRCZFRNnjF8XBKxt9C1Lm3WXsF8",
  "key12": "4eJfRa1ZaH1aAFgk5yrHB7k6DE4DtYD4jxxPqubRouyZ7zVxgSN3rtG48NnX5gLKm7uqki6jRQHi6hcw2Zy5mHGH",
  "key13": "3tmXPvaaxUvrBg1Xm2JaqyimNFsKiWoFgQAz3zNLepBZtXye1aqh7gAT6str6T1VQXkaCWvpA9yUcTCYgm48Ggty",
  "key14": "2FzZPCVpftzQsG64rSw8xkACQ132FcMXEhkkXGw1oiDTebtiyoXFkivzp7ncTRyuyR2wDuKUMXFSHDWFAaBm7RnZ",
  "key15": "4tMGksencB2jwWjrxssYjaj3tt7gxy82eY9Xbtk78bxBVYJPSbt2nVSPV2ZZYENgcXoFQqPZLnz2t8wRA1Vszndx",
  "key16": "3i6RLX8FNghVjunPxEj9WPFtBtjqtLqNQRbiTnAEBikpmfit5U2rCEzXEA6HaT36Qp5DcEBCMmSJme2xoTkEQuem",
  "key17": "2r1egRyrEAgbU6NgSpYrZf9Quh7jHd4gJWtrW4txnMuMPPuj1AUi6cyeCQeBxsQNWUsPQu37tNrvwygyWP5NPTcb",
  "key18": "2rRtw2yP3Aavj5vWCxXZg8QVhKPfExKa8k33sTEDAJZ3TfPHCR7G1gVCUWiy9HeRR9A2qun32UFgRqJJ21PHdWk1",
  "key19": "2eDQWS8emGuJoDerKiQUUcu6U8EAcsJ6rwAcPDFtttXMHhSq5gkipxvYeKNPFExWLvW6JDSbnkAUZ6JFAiho4SzG",
  "key20": "22bqCMM22hoiNW2zGgXtB8KbfECUGxPu5Ru1V3FzoQSwgjmu5YZ8usH7JQpWHj9KEwKy8eqALBtgQoPmmeBPnyLt",
  "key21": "5dtRnabwTEfKdFSh4oCPcqWrdh6zS4qniQGCEjygPTyyhL1HJQPWhDNSLyui4SP8CdNw1bj7NQLDKTNuQoX8JzC8",
  "key22": "2wK1DeFPvHXqPJJTNqMitCSmTeDQRPFqpGyZTAG4f5F4AQssubombm5ofzqS214mnf7HS2vCWZJXV4tDsN7sBzGg",
  "key23": "46JcqXhijgnHmiGqhxrFrGrGKrfpMnUsv8eVwzrFrdpmhLzfoGDJyyhQ4hPSFw93LqQ6LtGb6UVfbcXGNs8wCuSX",
  "key24": "3iceP1jGx4x5fvwZMTayHLdodNZTUc6TWxDbNCFoEhpACNp9VAApWAcWMZDLUdih3btdYK6SiLXcyxkUUYBqQ7Rw",
  "key25": "3SCcqSXW5zLunPqLqC46fPszs4STsnTmdaKvo2ab3fGN1HBVJx2CNF2sNhyZDeAkLPCxGYvgFoZXCmHignJb9g71",
  "key26": "2Yw5wP5km8VRyHnhPoYdz1gS6AA9i9JTtvgNoPX1kw7tqrT7MjoTWr4Wyzcgb18MFwCsfC5UrgHTohq9Jusk44Fj",
  "key27": "4NawGc1PPx1u97LH6SQJmNtpzhaummyxJ8YQPtHDAVX5udhWGULihRadLm14PUbyoc2vDFd6LZpywHq9mBxGqdBs",
  "key28": "3JDfarBbcxudKWb3gFfvUrnn6RVXZJsj2YMhojFvbPg1iVdMqWXwUP3QJPa4g5iQmQoUdWkxJM7fECaLbtRYhJSY",
  "key29": "4FiheHfGqPJuZXnX2n3duDfPYSMezxu5VKEFLpP98JkMuMG47hqmD2FjUtcuUzGMeMekUSefTi8Kirce1wtxYrrN",
  "key30": "tiphPZx7eeLzvmZWgx9xiySCeHC6BgKvvdwptpPEBVkywYMpsuaARoqVaAHTnLuvXuevETyFpBgo14iNWGv9gEd"
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
