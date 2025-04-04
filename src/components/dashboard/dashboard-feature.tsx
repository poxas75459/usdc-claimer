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
    "4RCet3TNyt7AaN5pGWsAUmkwZ6xDpnBJdphXXsg9hgv9MSjSWAXF6mVmePSbnsXBt4drFC1pGVid7sicdQ39HJhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w6sDjcYYXi3CJ4Tn5Z8sB3cPf1gA2wFYvZ3xbMQvLExJaVwKWdo4X5p5hqbdoaKehEgsfAQptT75jbgzgdQJxpi",
  "key1": "4qAb6wTJBrpRpBbQ1WwnLzdYQZYWh7TdGBxPwx4jtyvCqqwdhrZa76kCoKENbM7Rj5Hv33CY5nvGVBKGLRzWvJCq",
  "key2": "5yMoi1iBp1Yv9Y2tArCGzFW82h1ttEZ81TPDcfCQVNMpHzrPr4zrFxxExGLXJZRBrWRDwtSKz9UwubyXbgLmcaih",
  "key3": "5iN8soXjTNSz4Tcsg91nq5WNFjEznujVeTJbNqqxLBhqE8GcJinxUFZwjxDs7w2HFSirgZ83W8Yxh2rtpHEVqSkL",
  "key4": "5Z6onjp5nZgJa6QkKPBLGEhpu9K19fkbQkgeHKTvW7JnXo9Qhex4AnJjcGEVLozTkH5Ae7K3uuSWh6SLtH54v1Bp",
  "key5": "5QuNyAdAfAgXbLtTarLxe712kcdRa1VoBeiRBYZQC8p33KvHfNW6b6uxKe6MTAo69id46pWfgCUboKkP94DgfWpr",
  "key6": "5Au4WE9s5UBL8A4BGKmWtX4eQBJsYz5BQSENmQVNAufe2C8NgUvcvnXYbTBci5GdxtUmWhKqXqfDQieDGx6DFw1u",
  "key7": "1yu5GnVjfANXbrhJMJ1MW8swMfawHVSN4JWpZg6VyXEpFSouEKHsVkYKE5SWy6Z5qSp97LizACXEiSGpHrDWrhz",
  "key8": "ytWbvh2S1hNAzw87WUBGd4MXgKvRLTVEUbqoYvpURcrBSPnxNfUQ4Et5REViRCEW4yAVqzBDXG1iApWBdgKucGW",
  "key9": "5eAGxHtVn13cXzZNEwMEm7KMoLfAsxjapgnLAd3yFkEoY7ZDWMJjMbY4Qf6pZCTg5jVhT5i7BDg8W1dBzVkCjzGc",
  "key10": "2mcP5A2ntZvKmYN3Fuh1g355UQonBiofUVy5xxoHbG6EzQoYg7UBJ3E6HWvoDYpAVNjAMoFYH7Ux1fy6TJcV8AKJ",
  "key11": "BHbDi1G4Qrsa46N6ShacqTH441JUH9EF3gHhznjspMvGtjyZ14sjkQY3rEd94U8mFvgJ61nn1vu1c1MtwXc4Wzy",
  "key12": "5wLjzPEcai6MReTzBC338SG3F14Nd4WfwZUFV1V7YUgStZ9QuG3MDp9mdZQKwMZjXB4rCrsybVtVHjJSPUWbgsJh",
  "key13": "2tjuVWgFE7w5yKWVF8TUJCaACsAWRyK7f6XD8kW9smCDdgZe5kiZp1iMP65PZX2vot3iiR4woz7ojdov1vs4D3zd",
  "key14": "3XgtCLr9ixtdKWQkkfiHrgmR7iScnjtvsUp7D6Knd6k7a5yDVEhTpqrfYEuiZoWeYM6yuFq3g6xAQmNR89iVvoBf",
  "key15": "P2UDcZxrNqxxSBZLsjgVFnz8JiEfMxZpQ3w8gtvfsF11YbJsWKTBAR2bX2zbCkCXDf61WhB6GgGgGXiLMuPDtq4",
  "key16": "tgxjMskSbaJAWisJAVqhos1DEuRt5CmRZPQkwR4jQgFT6kCWvBdBbksERW4E1KCiJx2D39p9kF9ymedjAVufmi6",
  "key17": "65U4senPJfYF7AKMJxkdAX8Cw9SiyUrjJDFtPyTwJDKB3jQBxqYbLkQA2ebMT8yQfguLfBRNGyqEQL8fVWNZAsho",
  "key18": "SWEZBvP96eDeSPrfj9mbfPgo6YEY79nkvYHuKFhyoZ9rjE2sWLp5ht3VNFKCKrKuF17qV1S2QbT9rvGeq2UbKjD",
  "key19": "5QNbpoKAgU1qFcWhFbskQNBN6FyTrw1Fzq8pTr3exWBKqQPQXiH1ayANwZGGrVLPJwFYnmBe7GcDppTcL47rH3NX",
  "key20": "5xypexQ3QaY7ggE4SucfdJjscA89FHhaZtpRX2BZ5XfyVXFnoaNB9KWkrdftnDuAWcavsPmz3nuSF2xWDcfXCRgU",
  "key21": "4vtxjGQ8agygcUR5zgLUp2hbLg4DBqQLncJ5WZs7dhkmBLJ7t4Ljs3n9PGhZbb16d6gyBEiqfNBSvB5U5aAWvetq",
  "key22": "61oTvGAKr3RJwaDBKPwQ5T6rFQ8yjXZHHvpjgjhZ5r287vxwPsjvqQFSLbXoqTW4WrGXAieZKuudZopbQdB1wccC",
  "key23": "5aZLFSaxUcfscRxXc1f21z39qbNJe7sddBMXLBL3ZszkmQu3ZTXNYScPAkDmhPKnJv6VZd2iL7h1SAhtgeU423mp",
  "key24": "QvaHyosunWphCPdu3VdoYZ3TmYZhWLNyYqhz3CDn43wEP4fhnvs7SFtpvBzmb81g8SvzcY9mBa8j6VbrwDoWzXh",
  "key25": "2cxBRg8XHeHQYx85KfcLSFx49TGhKh3F3NJfkkEfLC2N2Zu6RqYdZq1EVWXn1BXsQi94sggCRDtMgojFPUuZzNbB"
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
