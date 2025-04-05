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
    "3WibNS6kVjkuS4Z5MZiw7LHeTJ5mHiALvTu5jzR8nqAr4Av54fE1j6iAs218WzvfCdBXF1PXYk4qSeZuGQ52xX9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M3gquJ95zAXYPF9AC9Hy4bUWnw9avivh3iP5YzEeFQdj6WhYwjacR4Dw87EP7hG6UdER1Vs768RTW5WJmu9JLpw",
  "key1": "24NEv4iMut8PJTBghA4k4Z62ydCr81ZV8xHzh3yQDMEmnrXCWoePJ7jub7SnKwbtE6XTKnecc1yUPa7QXqhx7Sug",
  "key2": "4fwz2wWeaf8hdHH4VjfuDzpyhz4S8NvApq2SuB33TzQNUBKkV497i8rcK7WdX5ccFr9iopgQSvab6EoF6qtit7GM",
  "key3": "5KWvj1jjCZ4K1ZwU1awhw9T4fciPkwKk1vmQXncVtNTjn7J44Wqywb4Jqd7x9wqVLCNraCwF3YAvS5zgyyurDe2z",
  "key4": "2Wxgsr17mSQpnrSimPTnHqQAHpcog85rLPZo9HvHkfpXt175sJKQiUJ7JEzVWDxfWfpSQdyKfjNWipjfNeybdVho",
  "key5": "3X1ioS7TUg1jCiZmksZsMrq6Vg7hfKpWgedJGyf3zX9Q35yp7jP5PzPpbg3Fh1eLzz3FYN82AFfw3gUSSLQNixzx",
  "key6": "4bQvc9ACH2EdekWYNJzNrRDouH6TXQFu1zKP2bb9YP8cNHrmfD5C7SVZEZfzQEjZUXqSmNShBHrMFG7jeAsspo7b",
  "key7": "nBBDj8Reogoo4SwFzNHMPkAPAs9GJ2gX1kd3qTZkN7kK3jSHgRhkCDxKfSamJdXDFsWvBbH9NFZvVki1yXCCtKx",
  "key8": "5hTfQwKWxbAwevGv6XpMSMD94eK1RUDWvJ3F7d8TK6tUbT4C1KueTHk6kdjTTPESMFyUFr6D36tBeb9EKnrZFQNx",
  "key9": "2JYR8pFArpEwxL8sPgAmDKDhz6qXJskqtNHjxbQ1fERdSwxEK7UFDQc3qSp8EuvSz7ovUTaGT5hmZ6UvzPXZ9E1N",
  "key10": "62PnYGeZkkLSt4qkDoispypScqsxf59CRhevwTx9LCpS1BrErAduRtfFdvKVaNf6afGx1zQhDUNTMq3gVDxPRW5x",
  "key11": "4JKWewW4ncpGHjcyzUUBbHEnK9SUdihcyqPxkEMmicKGuewK99KQsMgQKsubPcKg9GR69iKfFakj15atvA7idZbL",
  "key12": "ed4ZRBW8ew9nJ6RA8ykEf3RFV5hKC3a2wa5rdTBMiGtEFYyS9AHZ7w6SWa2EMbyjUcKbM5bAJ6Lgycr7CrZYjD9",
  "key13": "4AfvhJx83VabEes67h39Vq14LQJucrRtm5W17oRtFYLyiUWBCXWg9PuKcKz6kJweYj19srCT5n3K2YnSrePq6K9S",
  "key14": "hB21B4KAe8GHjH7pVtSA5cXtWgFu1M9VRJ2nzb8UEaYuRLTsnxVJZiioxfpEQS3AK4PYSyrSEQkjhZ8ThJw7kxB",
  "key15": "2LWiYPXvAcXiDrB4p1jiGMPPe3rfJoaxdG9LzoRRVLvEPHSZPwQz8YVnH6d4fxqGkuEZUnCP217rSNkmkzZdxPm3",
  "key16": "35WrffpMCzMJTJ7nwazmYPN13Sdgiyn3rFUPfwfepQZveTsGmEf1sNCcPZv23G9yYguJYaPuiMeSMeh1FTDqrusz",
  "key17": "2F6gYv8MpiFVDHPD873mE9TPh2V8EafuCmb9Sq2xLep2baAMSvngDhU9dHRbQs92cv2g4VEMiU2tLPK9vgLagBHM",
  "key18": "SYGtXNja4PjoM7QeTM2Ch4KZG9CUVV44pcVsF2Fm2TPmpkqr9Wq9z3tvgZyoq1s9EzAZwDXJeDcWmeFS9ZTG1GF",
  "key19": "2bCz95dShwtvLfsQVbA4gAMGFzdZgX2mQbbyN7hNVQefAEEPGYkgLPXC25zX5n1UdHzf1DCs9eEBR72xepzjAywj",
  "key20": "4y2AqBu5bJCNqcmfwAmmVgB4HirGj8ENrPp4Frwcn1ArTfeuxZStvFgGVE49ZXps5osC9AKypdjk8mFpQ2RUJRjZ",
  "key21": "uRHHEZQTY4onAyCmJJ29wVWb3LTtCLD9e41nSAdGPNj2GteZodkvzsgkEfy3j9oN36VCNnNxu87ghBHTug2kfs8",
  "key22": "LyB43fbWRuVV7Nv3zAcqgctpZzwvSgZds6ciLdGoMbfBCzXyao13YnhpSnDH5bpWzePyS4EVb1Bm9UYcEeDHoni",
  "key23": "4bwnquF3A1Z1cJoU4D3yndRV7nhScrYWawk9GZty292EHw3ZbJWdeQPw8gprmp12AtdhhJr26YbchpS8dKUykThJ",
  "key24": "4khYrABjwKsKWfS6SYWmawo1pD1EqMDYgTQ3EahiXYEg6Eqsx7VFCt7E2mUgBjj3egmETLsWdL1qLLBhPzmVe44r"
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
