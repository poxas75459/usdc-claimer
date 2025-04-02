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
    "5353bJaT9Gjx5sCtGQmvdjZDo1TddKw5sGpusyqhEHexG6WL2LP3C9u15YFKCA5aC1xpSv9kRHr4giDe4ebkWKWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zoUvMtACPPLQPwef3guCQ2maJc56XteqdGhmnYNp6oqdS5Fikoqm5UbSE2gSiHysLfRSjN1Kj3HmWtpFQJEXJfS",
  "key1": "3WTmNUFUrPndfeVaJoH1hftsvWPGg2HGJcH2CmMZkfR3GYyHnLM9dxnixGogWZmdWFrv48XuBfi3QgVQcg7S5bWk",
  "key2": "5vMGshHeZHWLshj3i5a1NWUFKSizxN6shvYrmoczyqDqvyVi5UwwqDvCGwTTVwFFzMSrof74TQExtsCAjSe3FRDq",
  "key3": "3BTYezcdZ1r7SYYZ4PPVnp9MNiYPn6qmEMbNS571Mp3XKeG8fMX8qZwZtkdnzcveeAJS8bWYzi21goi7sFay4uKB",
  "key4": "48r8Y71yRDSj5YcUtKu8Rbn59xnLeofmEWKduUk45Esz7uMXCb8GvvTgioaMP9t7p5yauphbqjEikMoUh5Ujxvms",
  "key5": "3i2uGJ22VG2759rXMYt52hGJTGqHFwdVR6sD3SB8LHQKPRNCs2w3WCqshe8oXaEsdSSHwUH7okVFCfzwfVzhfG4p",
  "key6": "TWgyupMLP98rjcLa3mVWE3diEzMrQwHNUvm1yNDVYffkaknffpFw8maqbLGGTgUpM7yn4S39vpUhdPSnLopEp5f",
  "key7": "3rHgRKKM1ENU9aynzCfVVQGpKmJyKoXVEgW8cZHeNPT2H74QGftguXkvGmznJxxHpcmxhNGgJoA1R9VVasbasVm",
  "key8": "37qeq631oitVvgos2ZdmBciKzWbQhkkFJAgV8z9JZUfK6B2vdnt6X9WRyXRsjL5XEaQYKKmp8Vndd3VNQsfiomEE",
  "key9": "2ubZJxW9XfxnVxxxhsBzfrP953dVn9hNpF9z73jdPbkoAme89NC7KWQypQnteEdqWrvn9a1kuM4KNXrKhnWnMXxv",
  "key10": "2afvmYRbvdHrjLFmnUUjCttecfrmSNAZRNJ449vNrKzAwucRhu6V3QL76PgVGAd8rytdkrc2ZujZQszkjniTpHsp",
  "key11": "HcQUpB5jwCrGsbhVU3bN5FWAyHGa4SEBBPaG4Bnjp7cM2Dx1GK5MJDWt7qmVmrMhHpxhE5C21WSPewHvJmcbJH4",
  "key12": "3LXubPgsUjpax1XCt4G8YMhea4vip7yMAz1waygNNWjt5tS1FMphMqGWNpBSbJuFtw6HvXFMgDYNeCLX6HU5v6Lr",
  "key13": "ERgfzP7ZKN8C9eDTsFGGSZifsRLGuv59Npivje3b75Qq91QyVC1jr5GihNUxq3UcDuXGkxJYiSKTk4ntJdqvb9L",
  "key14": "23CVPVnsCouVJSJPS9f3XiTntoBcCiwCREDnq88XrmQvjmsksvB1pH34x8EjcTMFCCeq8AHhF7DeJ6QFzMko44KM",
  "key15": "3neBhcKybsPqVhDbGgXgocNtHbFvrZzNwgebyqV3kvNmqgXcrxMTgJJre9eBqdSUukeZjmYb7ihGfpQzEcTDEFJ",
  "key16": "5uK8EQbJpycEP1xfnqtw4XgDQtZHk1hXhQi3dc5wQyUT1KKC3wdpMQJWasgaqvK8B5GyTWy3VSU9qvchaXPyun5",
  "key17": "2L7PCUujdjV4RTRTTrDGkUazJVPqE5rrnLByJ7BUGvCZxtjvxQnRmrcH48KrWCmwBnAshWW6bmGs6VJk5wYKrdNc",
  "key18": "cos8Ee1L6sW7SXUTui3XcsH4A9RL8LUkE16uwicMsms8K6ikbcGyBVwnZd4h8XPEU6i24GZtm9qneTXgYiCKzRa",
  "key19": "5YYC2XyaFyJn2ZcDbnjs1QzduSUkswdzUkHa83aMiJHjioy642GVCPZFhJxwuMvQmVaw4JHa3xV2G5Hiwqr3XdEJ",
  "key20": "YMVjHL9nKEqTDTKVwJpeKUU8tcMG59cdyWcBUU45qzdCGs5tbmwAsPGCHZzmkYdF3BttYUZWMr3jNUCi9crifM9",
  "key21": "3oJJY8pyrjy1cip9c55V9dr8XtSpX6SEsrnyT8codTEP2mAd364bNaXjxSvmqMdpgqhvJd9sAhN4uBCJwGrTe3yT",
  "key22": "54wFrHtCCuJD5uy9WPiJG74TQgL7H4EwUKf47bH9ZbpMZ3qT2VCL63Rr7RKCfjhkqdhkNbWCCTsBMrEwDfAFTRwR",
  "key23": "5GcSMXNSm6R5ueFDzUF86FrmVtR8BfR5d3b48bkXSjhmJrppn3wZxeAkJgFRn6bjBNBeEsPFcZebBdLm8uM6hcsP",
  "key24": "dib4h9mxZFHm5BFupwmE9ujuP35P7hh4k6LpSfa3BMjqnXrHLhLa7YiisZ8ndDNp5YkfTXDYUGUW6JmMGvJs3P1",
  "key25": "4y6QfZ6K3yBcMGgpXqQN7dPs2mDgq7Z21goR5wd1ZwKUJpS42BRUucjbRV2SNa8UEP3Qutk5tVi6xJfhEJPdodbR",
  "key26": "rirjs36QAX14SkKHWZXUi6D2KeszBvtNXQbvgQknaCPb84mSkn7aVBEAaH6WUq5S3Y6YEHqdhQS5danCoQ7HQHx"
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
