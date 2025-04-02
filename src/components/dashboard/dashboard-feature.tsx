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
    "Qg8Fi6xLNVzqkT363cEscYnueLEfdzNK2e4Xi8CM6ufce6AqgyvgmoZ8JQEUEYbv281cyHP5YVGJ584pzKG9Y2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kZg3rVNJTaxdgDgKNScr6WMdptXekkNoo3cGKsQkaua5AtSxbHjDoj4gRfFi7tcgbj38NzhTmbUS8Sm5JZaDWrH",
  "key1": "2qty3qBCQddvf67ihvg5TMZPLBcDtApcvcQAL2eVBk4LE1vqhonxk2d4u2Mq3VWPovD1f51je2xwJEw1dWRv72CY",
  "key2": "oGZEN9m1JHYjHxcc91UQf1jcYUTwZ4gEpubKoFq23TQjopcgUXjen6vYs6eS8fxCH6ZNEMxQzU9ZEPsrkcPYZ6H",
  "key3": "3UfWAzYKsq5hLKfMkeiHpjUFHMcugw2XRPi9izziM5YQhCWcWdDvSanb9yFara5WRrLTv2MktkXdov2HrUab2tjV",
  "key4": "3Ks9HjCGEsT9wh5Zkm13nJixZ9MBTHBH2LFTsDYHCq7Xubami6GkbYztJHSbQ7GoFEK8sVmXTfALRgMnhp3Jyvvj",
  "key5": "2XoxdFbGybZLef6M5qLFETztPR9fz7tyELXEm5ogE8GTMij8o3AZ2ywTPzpksmoK7T7DinfHpK5mMaNSrnm5pg7S",
  "key6": "3ZtTMow6Esad5bx3QRde19oQny6zguJLJtvEKfvcYVc1tj8s8NsysmGTkZZWcwz8UAwKomwjV2vbtx9vfD8tmAuU",
  "key7": "fiY9JyqfusKxktRSGNmYmS8CiZWPppsXSPfYZ7osHCqBEKEX1LAacpHFBngxjkvb5rugJhVXShShJbCAsw2st8f",
  "key8": "5pfBCyQBqbi8AU8T3rURkRr4oHMSBNhLJj1xyHJ11kjMK1B7sixqhcu6shh1N5VJAqmGuxZUrPtZRt4Mdo2F5dbV",
  "key9": "bgGkcG8HNVWEkxXA8dTjkMEQwjR3bGpvDGh29szCLjfLqutZWMJWnsHogeCrNGefnBag8KCgKW7dSBS6R5bAhYJ",
  "key10": "5HJjBRRuRuPt12dHCosN2bdHKqcUxAaHSegDmwkzcjvhLLnvQ27VJXAvrtVmfGcmJykjHr152KLLEAA6W397oSdw",
  "key11": "2PzwFtujmbkFMfRupLE5snwmH7uaoo3UaphP3NRLtyL8JctrXyESDthPr6BA9A96TsP4HCwGjtofpTdhvPNDimG6",
  "key12": "2wJvikQzVCCQzzabpKaooPtVh4Ts1ucaeSpUB7zPnN2yW1jpiRgMhLRSayCSTsMn7YUuAJmUsNxWdZYgfiNfukzJ",
  "key13": "2izi2vFeyjRAVMc3MNonBo7tnraKSbtkiNcqQgwWYqyfVb4x99muCrpEhUGFTJr63QLufL5n3Jqbe9Qj12Y8nbyA",
  "key14": "4JctqfejTJPSjf2dLsn9jNMgFzNyTLx2F8Z6NVh9BSmb7bSXjp45L1p53inKoksQsKmFkoNXS1KSXV2Du1YxaVti",
  "key15": "2jsGQKi621t1St8NnqHCTMXyrsUapnj9aaXkYXWb7NEfocgXduVd2jFjXAr9ENxJNv7MEQZDLuNKqEo4fuuv4mG4",
  "key16": "3dYYR2ui6yeuaFUo6sDgANkN9kKuJtmLKsGmfpoeQpAxoPjM4B3qY5GtyWvjGsqboRZPFNn1chKDQ8ALuhKHoVoZ",
  "key17": "FcwP62tQQqesMpnA6gfpJJGy9pXYWpiP2tAfFgn9UaT36YhnWXVxrXmQSZKxBk2r3mdRniwMvVe2rB82rzNHV1i",
  "key18": "5M1AUHnQqn2uVgThE4qgLtLaA8GiFt7tDmYgs524atY1Y71HsgPPWBtaiUovRNFBw2ju4qhCDTQW6KnjGLLbriKf",
  "key19": "677crKT6qqqTRP5bymURD1vw9C3k9C7peQa5xPvQ8U6RtvNcvMjxGZGfpZhTjEpJXkLwGci73baC8UECXbFvgPG2",
  "key20": "cP9KSia6TmJC8AcvE6Vtkt2K6yodJY7hxCqtK8nXAtd5MrJPkwU5CqXoDDwR87otgyycFRZe3wi1xUnGAqGvqqi",
  "key21": "5z2X22ebKtN7uxK4Mxt7g46A71JXMAiAEFEnuqwqYV6ofEu7DFoW1arCudVHVpmkCk9XNAAti3hDNb1vymMoGCbB",
  "key22": "2Kx8mp8pmxPqdxSmiweE5gWUd37Y6KDLKmomekumbvQW8pzGstRFsfjsYnnK6s5LSNoTPCjkgFVrb42f8zLsYKF7",
  "key23": "UfJGqmVizqxL5L6UyEhmbkP2hJhUSqEMhAJzaU2Ax9oF4NUdNWyLhbXFwAzcXybyK96ZHRfqPeoZquu1QHSZSpV",
  "key24": "3AMsJnS2spPk2HTnvv3pBNjYvubGLoJiKgKpAqHytyyevuZ2F48rJegMJfucdR8ADCYtpXffoi9L5KNid4et9Kaj"
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
