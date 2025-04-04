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
    "5FKopNTvH6r3WxpPLHBKVbmxbwJ45c2dzLwcxCecf2PRVz97agBepq1nqr3t8pZz1dxqEKCbY8zmr2EXoVvaZA6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SSoVYUmkHEerBpzFxQzfCjwTYhTaT5ZQFnoBucpbWGqMx8HeXaBaA9jUPtTrG1zcNSSytEbnRxge8SLdyMjfdPF",
  "key1": "5vS4vqrpJXtNJ1AXASgydUqKSoWpEN3EoxDeztxPZNvLJzkbMiM9hKdcoQKGDJMcQeYoc1R8RxBDgfPCiBAcfDKE",
  "key2": "5qLr4jRpucbXPJczw2Wk7S9G4TFBrXtsJ9Z2SzQoRyRXdAwFeqdgbsdQH3iLiiA661SHJWTHvBaqfaxZuM5DmLmm",
  "key3": "4J9eM9NyrLFe8AAP6BxFpZL17QbMCcDVbJXZXvCksmrRGrVKpsB7PSmnEFHo8Qv6NacavyXG26o5Q3LyjRKt1Jgq",
  "key4": "3KF76Ceb5PkJdEdQnFt25H91rLwaE2zhh5dUHVY3xizjHH5G47pekWSpLk3JCBqF8hBtugGZf13WuZxSB8yiatdQ",
  "key5": "577xoxrN6qyjh45C5rw7CTeM5vdj8UYX3nzvt2sFNPkbHd7aJtMboSYuxV4kwHZ2ZsT8zi7RKJbZshbk9QxWj86c",
  "key6": "5D9pGVGqafCfdwaQhoLrx8CBCnFsbFXmdfJuP4JRcaUVxMFey6FCuamsG6V8XQWWRRxAcnYhCh6tnbD1vgfkSYbi",
  "key7": "5ctvdfSHnAfacXYZpLTP7WcMsyHNoJiMYTvT94KXBQBne9MWay3CbsHD7B9h9SxnUBd8jJTxgFA4Gie6VwWuEzGv",
  "key8": "2ZjEuPDjAfnaeMZmcqe917GN3ywdVDyJrBbqUDbjKsmmJi5W6bALUx1m3gK5efb4cybH9t8gh8MvT2g1cYEDDDVP",
  "key9": "2S2Yg8uBqPQmzo42HJFUyEs1zDB4iosJ2Cxbn6Gr3fnheyph9ztwwiQ9aWKHREPvDFD1K9QfVHi9S3d7QRLnN4z1",
  "key10": "4mnhwPDyxmQCgXepXqDK9vgeM6ofSA3mF1C4B8JL9XPZjaNMFSWKMYwwjsi2rWZz9Aq8HwGpBUQrcipRib5avZu7",
  "key11": "2uwRFKfdikLDXNoYE89YDB6Z9YP2cciSGdNpEYkFx3z4Ts76kCfTuRpcusRkZPkUKapAkNJVmWzN9Lb5Ws9xABou",
  "key12": "4uQjcKUxhPUE5RyD2sVuXh9zaod42Ax8GDs9uu5a2sUoaRrSdLAuLhNWPeziaU1guKRXxjczWKpD2KLFBdtpAGt4",
  "key13": "4hzJvmxcvcG1oZyhGyyf5J4vcCSPXYn8dBw19eZAwg2tP4vhAdo4mp572EJ3MKKVWxTBYWfPz3TpaZvybeNfHVXG",
  "key14": "62EedoTWoGzLUnjWNnq1Uv22THkLnBuk1X4h4MFyLok742tXdTXcudwiGZ4KhEUvhmBdZtdYww5FWbrZzNa569bS",
  "key15": "3nP3rngscPGQBcxYuupjRnHn1Wph5K9tWGKFL5JSUrKuxfXik6gwAe6CF6yLmbJVGv1WK61xuaamP7TDHsipqV3G",
  "key16": "4t1LsfatpqK4HTLgzG4Y1HQpfdEMrmCoH1WxUAELKLXZ6QqjeRsD7XBACg3yZBzcWgA3q2W8ZopCFxWX82Epdj4g",
  "key17": "3tEAWwLnviEDiY1JGZhKTjCuatT5u1gLaTcnDJFi71SAgpNKHsQvWMy9rVK5iYBnQfJxTAT1a3kxaazov93SSHkJ",
  "key18": "4tjHxpKAVuBvFm14zwn2TYhZxSqhZst8M2R4CvSXoeje2B6NEftGcDMGVKBEBaK96XZaaLCkXLA6TcYazFThrdg1",
  "key19": "5B6H5rgLoMyPdBP9KcYi1vmZLqAejoGQCAsxjxQeSgnBsrn18zMgrw9imG9j5BkxspbXi8gqZAYFL2h6YWFq7f21",
  "key20": "5AAYQghiqi4e3RM2XYBA4wu9TiyDxfzUFGWd2vrtzsqSZJYKosE6sveW165ucvH6n5GLkAavpytC2j9QxajFvtzu",
  "key21": "4eT9nMiQBDq65W84LuSpU8x1RW32JkWPFWbUxSeXhMAPihN1yZpqumsiyNbnYjZBheej4yzDcHUMMW4SsTKAnUfY",
  "key22": "3orAVdf8mjE2D1GUNHwrYHMddrSRCDKVq9ffFKxVEAt3qSMXyoL96YPtjRBg2jLVQQ2CqCGtQVNEg4kTMJLitSS9",
  "key23": "uZL65MVnN3CCi7ebhvMbrt5FnGgDmuWpKYCQyx4ZVdnMWKJcHqXynjdD7LdgqVs6cv5JH4S5VXBEz9mv5LsSTTQ",
  "key24": "2MbvUNpvYsreWogxQZvspsud4NTtt9pj9UoEEF99hQe3J3E5BGgZ714oXFbi5qSQJs4EvMLjjEMfssjh4nuHkFXV",
  "key25": "5QAWzk1tjGzoN4h7K967DEAXYLPDHtwsdVVpYnPcDFenhxVjoZZ738dq9szd1M8EkJzvCs3tuPVJMrHRtirzrEzT"
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
