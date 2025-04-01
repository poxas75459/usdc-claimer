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
    "p7kSgfBpLBhSiUoatWHM3gDSXB7QtafgvYpZ33WUZ1gaQcVkFFrzJG3aoXodqUSFgCC6kEUC7JkUG7uaH9XUTd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XKKpFw9YTtnRDFzZARSf1zyWTXNusbkWJo8ThRJDJLrtyVfHBjg8VmwNfRLqE7SXZrVRnKAGSB339bXfaLyiVky",
  "key1": "3hrap1TVzVK5k6DmnKkAz5RMizZnQ88ePHULhf63VZzJgpGeKs3S55n8jkPHBWSpibCTxqRy9vNbbgNpeDVV88Rx",
  "key2": "4Nb47NJ8XsvaFhZyECUaZ2LvXtyJ9UUqPvUm7udAcUeJzbjh67Q3DuxCB1JCMfitThqxMwSqw3hFjShjdeCBfmq6",
  "key3": "DwpeMQ7J5KijSET24jYw25Zt7AYgzWWULEQ33oTCHb41ANVPMjdNAE2bAQX2BqTip7MbmyNojCjhxzZVUUT8t2n",
  "key4": "6Fh6vFojf8matYC8bPfpRBn7pm86fbqkZ9DzZQiaaK87hjdrSwQ7Sd86HtQJ5nEgTKeBA15qdQXDCWvVZ4ytLnp",
  "key5": "58N6dBaG7LnzcHxMP5mz16SsAQz8Um9M1xiwuVKYqP94gpBb7oW4Z6dLtV1isd9rcnv3HEQsQrK2UEDn1K4JUAQ4",
  "key6": "5JKTT8xn7tE8NawXEUFBh2Fu33QjViU811b7LnUu8N6shMTcnWL4pee2W1rjnmT9XeBiiJHgY2c9Lu2R65XPzEvu",
  "key7": "3czMNLF8yDCUpWJKFHyoPKN5GKZrwarH4G5NEf1b9naxDVxFkdVbt2Lu6cPZ5nAeFZQkqGXbrRwoJCCYVcqv7TT4",
  "key8": "3E3EURuhuJEXBwGNBi1QiEzwbpYxTAr9cB2KmhfmkSNRVepCNLfDnsXksTHoy79MRGoRAziXQaVhBSdpjzvX2WX3",
  "key9": "2P5WjVFM9SBDUPEMGSPsvpjRSC7k5JftXWXkbKbeGD7RYBJejA7bNacJ1AdyxmVd67EHSReHj4PEWXiN5qSVfmws",
  "key10": "44S7TJ47Ez7s3WGjdGQoNRZWhSP5SG3EwTMTc1pji75NP64eAMUUFSVCrbZwgrPVZpdS2kcf39pJL7WEfsfuoS1t",
  "key11": "tDjGagSawGZvJ3yMZz71wEuLj9r3Ud42rxPKLY6yFY94UTeith9LEB32sv2FEoMgYJKN2NKo6HnmeDSKVDNhn4Y",
  "key12": "3EHuthwvqQxnboHEP3jBsKxqkF76rsphPco19sgRoUYMh4SSv4YoticcrPXWCiPAKwrRPG4mb3ZLVkffRmL2a9KE",
  "key13": "2F3qQaifEWf1GMs3Bbcvra59Zwv6RCAHdvHVJYzGSL5cBJ4oc1FqLpU3X1e91jSLEHjo4jKKEF3KS3xMVKw9E3hP",
  "key14": "gBgxfxGrSHgik2MPcksikGDoUBveJMjzVqLXb8qTHfZAgHD3mNJEEP3BXZDKKUQw2radSc9cyFgCgoJV4Ly5qEV",
  "key15": "3Aw96GSZZjHusszFDY8LeJrtdDvvuoYE15e67iV3mD7Z4NntryPpSHBrcKJ5Fno6jy8TneKbzdqVPFZ3VB5KXJUL",
  "key16": "2kJGEEcCdn9UdPHeWJ99aJqyviu23yS4iWyYTZ8NAFtcjH2Qs5GQmsMb2V5zCGDUWgiE5VQwdEstJ2xZqWsoV5cr",
  "key17": "4NXJRPj8ytq1WBBQnSioxSteXtN5LJwrUe9NaCoPRCD1ExaFSZYomSMj88W2wdDuwA5Ssyf5fFtMGe8tGsBfgBss",
  "key18": "5JWShXH7b49gBJHN2dhoJ7xs8pxeuQdgRzVVQUZ3qvNd7n5P5Buegd4fPX9RqYZrpMpUQx8TZRePtJ3Z8zDgTtps",
  "key19": "48yV2TVzRAsvUXWtJCf3N4pHzhuGfr4qfzqi1MKtHKt4PY1hhKJ229MidEwtnQMHeGWmjZmJbpg2zkZ18H9A6Bpp",
  "key20": "k5tmKJFUYtJehqNQ52HR6x6etQg4ju25gmGVhtvMs6upM4WBYrPuRVDhByvZV91Lwz6FLeAjBAjTdmWMUM4aUoX",
  "key21": "2tkw5KZs9tzciXBnnYCPHTnR4haXooSxcqjWTiv6hCCCJrwzsBUDQQXURPzJzhdYnVGJKE2fFeat522KZkgAM7tQ",
  "key22": "5bDNcwfoxvGEGQbDsySiPe5ogJMWt9JFe5c2wqYxMxyzDwhyJ1jqB5Fq9ZUqucasncTw73U6tZpRBywLwuNgJxbC",
  "key23": "2NA7RNbABUtc5C8Bwg1P4vFuUqTmWKwkgwH4fJNuokd7DN2t27QfaSK4XNJZinVmi3X9D96Ginh83VK7Sm5BiJxM",
  "key24": "5gKFmPmBRH8ruzmRBzGjrFLPgXoo2vDwZznuLozWEaWhSLDZKs9x6m1szFJddjK2Jh5u2an4j7AwJhADWB3yorVG",
  "key25": "248QQD7YJvwMYFWR1Hoco8ZwQVrzcjQ97HRcV3mMJ1jnSgdMUEk3YtGt4Gcm9FN9ku1g7bdhMT9EhAjEANQBkL7D",
  "key26": "2DdYJZRfWRkoWjfrNkBLFcDxn139SVr1X3tRUhGhMtNBYPLREVaidEkRCpwtxuz6g8bjGg72eNrsb8uqz8oCKJo7",
  "key27": "3o1smRsr76Si7s4BNsTJgPNLK4YzswVL3og4UF7Z8hVBSEgH3bBNzzhXkFVq5ZVwwK48gG8BQbccnHpm8wzPdeux",
  "key28": "5SG6diBFhWoNbQCc73shD4pGnobiu659kxtZqdNke4t7jmnsFFAomWgpx2pktCcnB9RzGXgC2zw1SmGjvS33UDXE",
  "key29": "n6tjUgqNjvSSWnNqTVyo6NVg9CW5qSyaTUXeT8Fe8DfUUqXLqcULQKQtptMifzT6eNk6g8CARjBgGvgzDRv9pSb",
  "key30": "vbLyM6bpA6c9nr2tzUScHYVkBid8UUp7Dk6WXEHUSCAeAiX24hJqP6YhpBgh3Qra6X5rUrp6iPS4fJjLnjNXn6T",
  "key31": "5mNVKxL1QeyGrbgd7Q5fWJFCt7unmgc4QkM2My2xX6F9XFRgWc1x97dLFjYXpFqSALsiZazMhajruEo2W22Qm8BK"
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
