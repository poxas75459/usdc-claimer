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
    "4AhQjcbu3bpma6RBPgbtrpesNoijeutMBgH2a8QdJ43nAG2QaCvpeCp1XEoMgbrsHd9r9Qrx3HpheoKUmyk92Bx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BbB531YrFF1z7m1VhjVz8frkkgycEAzc3jbwbvBn7Pdh863ronvxUCkAkUmSwjVBLmsVti17YRPmFCgxTPKr1Vc",
  "key1": "5apCJQJKeMp9UVFG2swFfnordgdiKqYbv54i4ABnHiJ4gQJ5G3Tas5E5TuRxH4gUtwWyZ2w9pq6y1gtYdG547GfX",
  "key2": "3TYrBLSrV4R7593X35pbxECznYTtHVmLxaq922DrgeVWqCSaUVAwuPW5GzVwB2n6gieuK9T5XHkWBW47Jzv59wHW",
  "key3": "4pKGzqMuR8Y1EBtatajGcoNdN54BvgAxNEFHCLhzbdwUCY84Npfj2L57Mi2MUgmLComVcH4RsNw7gEAU4b26Peb5",
  "key4": "2abYZBj9wrzAwja392ZsqHS9ugHLpuy637nvofLhqSf2bto6Tt15uCndLwtaqaMmuWmqFw4Wf5c6iTd6Pd7noNrw",
  "key5": "34fz1d7eYDZaqssKdSDsJTQVcHuMQZaX4YrdDJXFhnbebU6srpFbXE3GfPDjYhJKEHvmspdJsu3pcG59Ct4ScR1Q",
  "key6": "2qnvdBxtYfCXJ9APwTzEdC3EiPjTqjwjgjXvudVnUjfC2XWtGxuTVvqqHYyXDJdHY4yeEhBMwVchkfGqKzPfmKtF",
  "key7": "2mCNPuB8nty672KqjDw7RUa3qMx2rttikQt3ikNXEm5nLRHArzKjxcy7v6kUxXin34JPKxxaKV7v7cKvV3pnZbuv",
  "key8": "2cVdNWjrz7q8kWd9kEcBjN7NmkawQLK3AWUe4PPhLVVPuP5BBXcJwRRqrfRCWRDSLNEH6bqfWV1MbiZWdZSckMJD",
  "key9": "48aoGMndd1S3s7KEY82DtHnaPF788kQYEJVfeKHxpxdgEjLEUZXVQi3ctsaiZK6KSpWpawbUQ22GBhAczx5de7gh",
  "key10": "32R457grPoS4HXXuKNjr3Liqt5u4MpnRw1hxaRDBGoAHLDtQwkzW8J9wSRXSAzTJNXr4cLYvXHW8NpQkfRSKfG5W",
  "key11": "3Wzu7gmUL2pMmTHtA8TCsDuwXa79jHY8jZwZ3xEeFmu2yTAh6EtybYLDK7KSBT9Uik2sciHmmnaAG3w2jZNEhyam",
  "key12": "2osBy7Ts6S9bC8HwxCYw4fVtoE3h4PnYXVvHR28iCAQMQrju8dApFdhnckDTssUiWJvzt3uaCGFyVFaGzUQYaz8i",
  "key13": "5Z9NqWfdnX6MbBUziQMjyEpcrfhivfdpFo1Hv5k9qU6LXqnQNMxyjBCiHZMjj4wq4RE1q6p4DJEfAEQnEkd35z4i",
  "key14": "N89uttiRDLCZ7gJi6Fg9TCgCLtZDEvmimP6WXmxyzzPPWo2UB2w9uUTde6ubmi2KyRgj1dGNPTNKmAbWhaHfKrA",
  "key15": "5ZsEzKxkUDyKW7xwstNebd9YsvUvCps5Thu73rWhiRqT7ddDpRkWubqqzy2S9Rp3FXfqDkYJg9g2dMB8oF9G7xse",
  "key16": "2KgWyb1tTrm12ZwEZFGu7K4sqP9Y8SWsKjHHcMm2yz8jbgqf8SjCqdMuQ2yBqsoFEGQZTiWfmx9J1cVA8kqsnaZP",
  "key17": "2DFEmgVcX3LtY6BEqygLF69ystP1DmL1FjZaSzHNcwXQihaeXZ1odjcmC5GaB94crwHWxn9tjvJPRbdPn1uaXBm7",
  "key18": "4vwLbwunDgXGaHbbXHS6kieZaFYKSMxvJo91LpXbM6Rz6i9NZKGwRbi85naS9j1eHMP1Eq5BxKKWpi9skqrhHpb9",
  "key19": "2pcVBe2SMBa874eVFvwyJonQmqqraCkbgs45xSSjmQd7JZbzo7nHycTEqadVsFqAKZgDKjyT6uatTkhbvHegDTRw",
  "key20": "5gB5uLxR193TdnB9HxNM3W5Cn2V7ibta2y5uxRFntYA7uCgzPrP2js8k6SjLRwK75DXZZdKDkeqGsJwxc86dpT1D",
  "key21": "4pSkBv8EHYfaa7wsug9nqvco36WUFQFakXBrmtUxVRELtHS7Z7PdZzu6QWEfghoRFBLze8NQ1zevGvRPAS8JhuMz",
  "key22": "3vvMSHgneaYxK9NKQaY4vaxg2woDFJymMhKJ636Nmrbq4cZbP7NsRr16KgukuNtk8YMw3BQb9ryzcJC19431rwm7",
  "key23": "2DeN17QL9sTUN79S8EQwDsTv5Rqsw5E3Wa9ZFoBW3PVzaYkyipVPQAF3QSSv9kxN2SBWjgNvfn6mTjmMc961HkDd",
  "key24": "4WqTHMPCJud784Zj6NeUDG6eHubfcCBf1pbjS9TRft3UpqfczLDN7aUCuizm1jZAghXL8jfu7H1SnFewzvzMMjsH",
  "key25": "vdpHPRp69ammMc5EaKkoCwz9KjYfJr7wkhrvumXLmtfiUbYZjF3cbRGXsBRCyH5dT5SPQwa4TQwv5eDdSC4bfSK"
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
