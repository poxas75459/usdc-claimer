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
    "2AdXgwQkxsbXqaBdpSquXT6sLmPEUJM3fVPS6M1rykgS7AnJz4MvDaW4eTvRFQNbRs7GssxVLnQ5jLEf5dw9BEqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NQEJjHeEuMBnWMk2N2R1TymvxXHy5BEVpfwTv2pybRsytxavKTmsMi38N6CtK9kFRQH9cTidD4WgEryh6G3V6LN",
  "key1": "51TqjrViH8Vag7KtYnXiHB72jnoufKE2KUyLfKy3J8E2JXQhsxpUr7BpyKHszprWGkwyPZwHGj1asJk7oLjz4gAA",
  "key2": "5V5BP8fGoC7PKfLTviGVx9ps4bkNoLxFKxq78JjDZJxzi2mnQmHyG94wZF9oMwgBVbVgBnvD6SCHXjCJt9Zkaea9",
  "key3": "5oF9JYXhJLPgZKVFD5o2zJZxfgayXpcz4GySgiMKcaYoLbcEzJXGwXZhDRt9zvoCaeSoKJ3BuLnHJQtry8uqWxMt",
  "key4": "2ifmRW5mjA2aiaK6zLqyQJi3mcgU2ghNunDp3Winu6r2PGLcYgLFUAnQjrJqWCLtcvAYsrp9GXFt1JrHR2LG3rrM",
  "key5": "3cbJF6Y4zqqyBgM443ywv6p7pJ7AWQr5Ppw6wtPjH8CSHB5CRjk8PDhfk6yH44dZJyRpTRAJZ2b96sifzU23ut5M",
  "key6": "4M7Z5MPA5c8e8rFVny3HMHVZCSHzwF1tHhxAu9ch6RD6jD91fN1qP7vWR3Gm27bWCSuuPrgNNaEpB6ZeMPaCL7SR",
  "key7": "3L71uWSp1m2SrAgeGaJSdDhua2R1qAR2CzG4MQfHkmXQeLnAPzjBwihdaC8ry9sPcfsfoCVAGBozwGXDVyfdUcxf",
  "key8": "55LBv5Qnzu1BmSWhN5jsda2jRPBiBGwDSdyphz3aZ63qJa2DrxvAPd7xen76jogBdPHEqXG7XLWKZBat18qogMDh",
  "key9": "37BECfKmQBoBcaU7fnDQbWtQEmubAKq9v9V48v2sNBTFk69rkvL1Ct2J7sCmoK8HQ5edKsuHGKrFfranhXxknUiz",
  "key10": "2BEg236bkYAmiQ691FC1W2PXdWekjt3uaG7W4FXsrZvMpzFTf3TzaFRC5s4JQrDBNEVQqDETKCxFgeJNELApSAwF",
  "key11": "5us8SX8jdeVvG5XfGomSBXgchNersgjjZx7JaqNM2oJCmZ3R7XFBmrhHixwnkBAkWDLbFj5TuzPjG3gkd6WV2m3Y",
  "key12": "3jUCK6hSs4gB2EC4uK96A7tq2jFjH7kkHzxqgjTRq6t6RY662iaJP8LAxJtyHPjWexcMkD8eBbrrNYUwXJNFuGgy",
  "key13": "24xcJ1HHP7moPxfqLYMMcLtWprbT9KjEwUDULshbYXfBserbQU2YXC6pADJiB7m67qVybKYVbYBhEy5RMecrrk4r",
  "key14": "316DyDfmC3mRegPzgCPbg3uNsg9uMzXyVwy1kAHkrN8CFAHR2ePXFSBfHE1RnTftwSD3pXvHN1UkhkdbDRthP2WC",
  "key15": "36t36UFQLruaqEFCGGxS4ZbtJnkmZCDeAiJiJfuXkZy8Q8VafcFYpHdBw6DmoxV49fiTH3U4KiAAupQup1erxFHR",
  "key16": "2Uwk1KBZEsLBEFsDJeiKGwjcNgdwRHwvEQbv8K6Y7tE3Z7RaC4CfCUkWr99g5CJRm5emGETVR8mGUdp7UeJkmmaW",
  "key17": "3MnSsADXvEKnnD7nzHCs5uDoPZPRjsWdejSvExr29tok3fyksqiHhr9M19AimxPtKEkXnH1VNAa1LozhyVFHGcV3",
  "key18": "5YiXuA8EFKJRaM5JmU9q7fkk1PhzEHtT4wizL2ioxqqntEFyUvHxu8YdtTwskBxnUUmLPmL1izW7vLH2YCbbKrje",
  "key19": "32DkMMejPn2NxeL8QhbDoUvSYsiYkb3JVqZhtwieRYSCbZVGqMFu7AgnshZsJXiXv2EGvFVuZTJ1UfEitTgdmWjE",
  "key20": "4d5XJuV8axZSjotZ2aF9cQrpHHxNTWGaSQq4iETdPsMS2Gk7g8PUJvYGKrP3nfynQYcjg7EatR3kX1HdLP9PtfZ8",
  "key21": "Veg9zANvohUTtDZP3agqFHsnPURVC8ctGKVwpChwLbGqpjwZzQF5nbrinU4AYi8NaYQBsfTXt3i69sTkMqyJFMR",
  "key22": "1zTkWQwBmMBFuevdwY2C8ZdhJ8DKagtDRjmSaz2L4mgMw11MrmxKmjYy14DHCKbZktTedbtRn4ZYT1atENuNfUx",
  "key23": "4Fig9gMaprV679BspnrYQqPzg76KG84PeptSKenUi14MgsM3R7QxWfd3Bw9CeaAZwWjvqhvvWyJnyJM3ou19JWBE",
  "key24": "3dtnbBraM7MKm3Y4ebei79co1XfNx8TfutJcAXwAmTuV7Uz2tXqS7EJpGc8xt5L4TeNJVh8zJF3Jwt2jsyFShumq",
  "key25": "49j5yTbh9hHn75NGmQUPGzxEw2mhpTMhw92ZKw5Pw5U2km1V55jvb4A3iFU5P8AB1K7hzfkLU7R3TFY4y8YJFhEw",
  "key26": "3LNUz4b4tNHr41xANZph6cnhwp1p8cp79w9eY95o7LjALT6kmumuX6jDBbxLF82xisYrCDhJdwRXK6bcbAwyoopu",
  "key27": "4a4Bveb322kRiZ6hctcgsPQBwx91XL2LpB3zJTxxRd9Tr1h4CYfhtEpZHmr1mBD7RSu6JxJwtuBWmnCkU9j2RkXA",
  "key28": "4SJt4Pk1bMhYVUFybYXLshmEHub9yQMbJVfSs2ebS9tmprSF7XRsoB3vLfxH4eCZb57GmxsWsSFqxWEvfTYis7H8",
  "key29": "cqcxmE1H7vsigajGpd5T7JdQdJvf8Z1RtqpD7sx5Azh6d9Qrp2PS6msFT1KC7Lz2RLBzYKRfPTMPRrrTi1stcvU",
  "key30": "2V7XVitcrZfCMSVV2zsVBmqPvXZ1mT38MGb3RCd3RmNCBdLJ3hc24YfnFXWHgoc9UQrJikUEj9BUR3JErrVQDwW3",
  "key31": "UAbgQvZXv8LWdEHQpbydgNW7UJFTbwLsBmebYrJ5CWyYgnMM99HS9BkkzjC3KyM3WG5dViAmcLGAKJqDxYZAihf",
  "key32": "2w2LAm5Qr3HdiRSbgHjLTHRKhWB9H9fL4XjQ4f5ZKcobqpnT5YnwA8pPWPbWdGc17UPPFV8mCP3QSoXjgzXMvqpb",
  "key33": "3mR8W6JaZ9smehLZy3xAa7J68VgNSJQnduqvKtHy9y6cMoDLFpfM2eL1rg9sbyfCaJ7FekeYNspkH8s4a9oTcGR4",
  "key34": "65oDhLHonTd9qeoz6A5UnbaUEJi9mwBa3YMrsSqrhpnjfyR1XiT6CAVgMmfe2f9mUS5cDBCijLL7wLrNXrVMtSgT",
  "key35": "4HKfxfq7a8Besovo3BK2Emg8eKLc5v3ifPWfsix3WuRupbEHp4Afh6yBB26P1rqKHBAbwBxX8HU7UrJ7YVDU15Vh",
  "key36": "2HXn71ScLBCjDNb4Bwq7oXS8QpDJbuziwsFXkkyZbEWeHGot5TGyRpn1xF8AqJ66pYyfrRQsox5J845tbSc5HtdT",
  "key37": "aGJEA14SPxXrE6QmuG7FcPpVsbSyuAHjNMe4oCrwJXEFFGrxRd69V5cmNjk9YYLhe4zgs6TLq9d2iP6iG7gnnQE",
  "key38": "4uUtyPCoBmy2tx9sTXc4CKJ5AxA8p6QTbnXgybgxaqxoPYwCq8eJ4sGWNh59sCdsWaf1DXsWmwRZvae7jZ5xzSCC",
  "key39": "4yk9xY2GAWJ87civTGuP4DtSgNkQsff1HqhEM93KbF1HT7guuExAd4R4nYrEDRooo25vCoc6hLcEMdPJ7617K456",
  "key40": "3kHcqtBEeWhr9b7xmekPg8Sz54xvRmgoHaMg53ax4Tiwjfpy29BUUmsvS6BEGnREfRPAGjMwMVgCKoy187B5dZkp",
  "key41": "28ssUbnV8wiCRnfuZMtpuQ5yacHCCDoDjEVqEZjZ6SvPuoAreBHaLREDFXsqu8Qp4NCvheqwm6WwnYHWTrrbFnxS",
  "key42": "62if6R4QmyvytmeHU6Hf4ZFTb49dHo2qhep8GZgz3fTNnVx8tuicMF6AyL6KchVLh4o66EePxrLon6rD6EKSfThv",
  "key43": "3YiMoSo3P8eBsLx1fcdk4mWEHboAjTv5PrTEB9fayPmFNXvTQHFnVz97Bqtg8Rh1CXDc5QSKXpGkvM7iP4qsk8mv",
  "key44": "267g646dA2uEz8ogiXk4DSyRswLKKaxHPqUjLJAYwRsU552jykMazJFS1wDVa4vYKckzdcp6yRBpLKyJJerEaYch",
  "key45": "5ECNYAxM7sfDxP1nXb1YyW58Fdp3W5CQUpF9njBekxtjvHBtJ8EWnUNUA8VFj6NB9jPGQrknR7axSgiTgRSCpPAd",
  "key46": "5r9Y8UCNHq7XA9Q2aRv1SRoS9LCttBTNGgSA2ecVbGUKeyW7yfyn6VCoKHCNK1j8fkeKXViD8WVE2XXDM1PAWozp",
  "key47": "3Z79Py6ACKS4P6xndCnHAvj29s58QCcbYvw7iefEk8Lii3uq7VTBoBqF9j9wFQMq3GdeGhNsDEFewdgmQnQCbRN1",
  "key48": "3vsNsLoxLVtytdoFB95o5xyu6HJHe6QWNQLyevVosKJK7EQebPJuKUDjo7iJPh6MJPcwvoutwwF1o9K7cM96GMS8",
  "key49": "2LSGfqcNG7nyaYBYtpU3Yi2oWXoxwa7fTgCHctjwZEY1m3A9B7j4Xyfngr79QKQ3APRT7Ex2Wn6fGhKb5gs8u2Te"
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
