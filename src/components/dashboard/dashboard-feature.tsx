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
    "2fbjJeyVeW7sW6STBTaCFsbdHS8ebxSeYJ3dUcptSGA9A7W3UWcucgJo18vPDQuBh8EyYCUQYHiXEHmSLCnB8sN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tjpHQ1rF2mgVPitSAbTV62pWwpbxUA6SoPVaRt5GMBA13wMoMmEUArHmvWrZ3Gc6RRWz82Nej6ESA6mLvTwCrEh",
  "key1": "2b1cMphFPEPbMXk5jwjwBDbw8asqd5D96YBr19Y4M2fZGTfXhdcjXxgSyrXpnN6qKzViZkykXnHu72b4J5dkeD2Q",
  "key2": "1GBZXGKaBXoarp2pyc6xM3CA3EJVGsQ4PS5qVkqDgHbDgaTvo15TXYbMjivWviKa3GBvDyTteksPCJCSgHD4KvR",
  "key3": "6C5vMQgzrgi2oK7TbkUr1nw38fx4X8Agj1U4ce9wDzmXr1hQvTJDkpyKFY1XNVtj6NE64L2LonawtW4mfwA9Z5P",
  "key4": "2x3tHFV4gLiBDcgLw2mfHNZYdKKX7qDqrNsSKwmp6HGFrtjYwzxhNzpdcbVuRgCcjiz6tm6oNKu22q3NnW5MzEN",
  "key5": "4Egrtko1dnAjRoGW46zRdoucVhYvh4RAYrrb627auCyADuAhtEibNG5rJubf1nBai4ST4jxiSptxkVPTGBBUS9K6",
  "key6": "4siTFbe1zPP5N6gtBwvr4AqAPjrvEyMqis1U6eDEUKUHRmZSGjfzWvc7EBPA1J3yZ7XANuH9QvLX1MbBdzhjMksw",
  "key7": "3AbXs42BsoHzgHT43LwAAVeHdA35zEBU4VDc8VX8PNJqG7Y9QttoB9KJAkJDnFmD2mbzKPzYEtPjzvLtTskkbihH",
  "key8": "3hydi4rS2C98XFnNgNvfGPgeNrJNiftJtu3qz8XpZRm1f3yRnoYtaEmYrSBR56WiwAoUfi7xMoUJBFVVvqaHZnu9",
  "key9": "3DuvMpSKkjvLkpaE7QZTXcejRuQoVoTS6xC3qQamUasAtQrGfjPYEsVPhujXx2W3cGd9Yhu53iRaGpatpxgX8bDG",
  "key10": "64vorX5UqvZawt8rWmJ2xRKQPETGS1MGsoorsR7aVEnUuA596EKNrHkykZyZM8HqjzZELHjXQi5gG9yYKq1aqRUJ",
  "key11": "5n4XsRLzgeRSUya98JSRmkdnZ7QzbqxJLPKQc75zfWMysC2ciyhbx8hKuwD7uBDz7tjntEkgtTr1pBmGYHPb3t8V",
  "key12": "3M6mM4zHoak3QChVGNW6kJJtZ2rRbGbrWq7ykZ81FydY8JbJ7Nmf5qt2QeUCWLocJ1M36eMg5hWGEQUfaC2JQ6hp",
  "key13": "4YmpB5bTNkYk8JiR5h8qwRSzqdcPaopWgzsyXqsyGnP8HTQEvohuA8bKMpudgMwTRrK6pxnNsGDVCPsA5SKQ6frz",
  "key14": "2DDgKtg6tX66DFCDhfk849RnJbQC2vfaPyGCqT8UYS3K2SSPtGKjJCHrnxxZxrLywijZSjYe6yNQvpQNDz1Vwhs6",
  "key15": "2sUWTLRsdhLAwjJekyaxX3pbugua4tMXtsQQrXYQmDngBuJDsEYoqefxVgBQhpqGMm1Tr3RXWPXcqbPHk6oSMtX",
  "key16": "3e86CFkVdpomh73Rw3c8VdTET9cWS83phRxEbbVS715Ha5KEmy2punBayavwt1WEc9L1kJv3y1ceL5q9WrceCxKm",
  "key17": "3EJbJPfF4RPDTyJxhRs5ztQQ8Ej43Ej7XG6e15GdaiL71VykjCxznS6o6XYpGkrj3qPxZEwN6QJDY93h3uQRcn3i",
  "key18": "4AE5TCSgVBu8wA2PqB695rc6aAUpc742UDRN8iAsJrmDSubDQBcTzmrfL3ZpVQfv3EJzXpbSrwg7bX6rjp7Xat6L",
  "key19": "wfiwYBvcyqC3eoCj6JYXBoWcm9P8dexHTzS5PKzDfBd9VjQH8g3HyJg1qx5tmwt36Ye5P3Nt5TWpdvjzdsTyEnh",
  "key20": "3bm4Qm7Psv4HtBson3qBQXyfQikXzjnZsfHwzzi5NErUQjxdZxANsswQjh2cEkgFdnU74TJDM3PJYJXVyZCtqfUm",
  "key21": "ebGVqaUbB9tA7mWTHytT25yojVXC3oNucLoj9LDEY3xmdqStDdJ29EkQokzyjxvnaz3qcCzWX69R6MY814pbcYK",
  "key22": "3ViRcmNvQzZdaRrf3A9WGykRP9yRe7Trpriy59pR711PSwMHtGwDVpJvJkGf7j3Q1SbqVQsBZYxjJfDSWw4MMrNz",
  "key23": "5J27MhYskHRg9tAPJFknB5wwyMA9DrsXThSew6YnGJr9z51PAckNbVobQELBKFVeyTvZyHdgKwzhatJVpzmysok1",
  "key24": "AVmbqrfEWJv1zWF9tXDPdQizGTD8NYT95qmWarvjCPdGz1P79doTPa9mPthYUZDHX7vgkpXzmBrWZm53PfQZ1j8",
  "key25": "44GUR8QUC3YYi2iz5MpfGttQMcZGBH4NweuiAbuTpAJKHHftuaWWDa9TPe3RhmnPoyW8gmN6EgW7KEVdjkfr3xMR",
  "key26": "3tDgSqorZgRuJ9HNHRaeWxPNpxebD97yCeWDuLzpPconu5H7thUvyqJxt5M6hMs1JxKwkhACc9bVa8n7YYbgZW4j"
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
