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
    "3V7pGqiBwCbLM2RpkUg2PGyu9m4fqmWw1xCkyTKXoyNzww2EkQGPkRjiwLp5adGFkD1QCM4Bi4iLqFKubiaieC2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XWqg5UNNW5FLMGK57xbCpVyN8EgiuYMy3oZb8KDaYg88LTDuxR654RreJDzSG7YyxuBAiHCQMuHad3s9yCcskRJ",
  "key1": "3j2RNrGAMUL5FwC2wsnSN7r57SBfbrcD2iybbFzKbg9sBXGDL7EXah1DD2JbSWgBgnN9owz8MJ6CNW9m4wj1geNe",
  "key2": "31AnfFGVhWV4sB4M3uW2F4Hk1PrTceFFpaf8j5eD7mBgTv3a8cdofhRHE9hKfh56ND4bsTZE1BdYQfvtuYFDjhNp",
  "key3": "3cKVW94CccUtJpHUEbZeMRtKPccyCfPEVY3GZnffh51t4foyvK7Z3q6cUBZw4vg6j64jvm7rKm6nYWBtPc6Prpom",
  "key4": "5fzd6e9Z5T66uYKRQxXiAmrC5govcDbs1Fc15HDkrBeh2iL81gCZSZwqp7Yg9vpcpXFNXagjRrCnQi2eqFGjBbRz",
  "key5": "2n9kvkStQKm6Niog9e76VGbhVHukCFYyJC2xanyzWWxCnAyGneCF5PE8Bqz9ucFXnNjatrNFfu2Ef4mBg4vpc2AU",
  "key6": "27uwNpSbCkZsgCrkd3ev7YSewPPCFaRHfLzTurVeVgwztxSwxvL4pkgMhW7LYeEQ42b6KRuTVscTAcpEQdnZHjG8",
  "key7": "48vch3TsnopVH61gWj3PZBfrxtaBzisSjqYwRp1pVwHsWpZWKzmCuKzbCYvRNB7QL4Kzvjdve2Y2URyd2J2KCSgX",
  "key8": "5PKvYyebQXxAjpCgJkVZHKBAhmXBjsNsyQRN752sgrRMpf2zkHXn7kedNmdARHQP8hU3eKE3Th2X8ueJ2q23RgYS",
  "key9": "38EiX2NXmtGTujHkjPGu8RqvrKMd3RcaSC8HrHGJNrajgpY8hudNZfXgJatZdYYGeDirnsDfyA1Y28zZyymsCW47",
  "key10": "5jjvXEQVVVQCBUZyMReuDaVFiMmrZj5cDPcU1jC3UcqCknXohwMZDarvfn3uiwfiNMfW3QP8myh25CMYGWSAMXUi",
  "key11": "29N3g7szhbjyuEppHy9DmCbMoE83mR5TJpoNs4R2KfhZG2rvqd8sQG6iAqKQ2QH85yrA9i2W58QMGwRfcvADJ5g9",
  "key12": "3m91QvG4NEg7iAbaBhxvsxF2Y1FoseTswx9NDXCpoatpzFefUX29dkyFZtEXKNRTSbCjLfRWYQWkhE9MsrwHpxFm",
  "key13": "5fQTfGTuMj1C7p7gwrcz7FQ3DqDcEvQswJ3mCVu15uWKU9in9PBJYZyCdDSGsRaywu7ecyXKgq8WiyCQQarz1FRL",
  "key14": "3xBuGhSSktC3RbtW1Whup8HEYxVctB4wvM3gnRobf4bKJMQ8xDJ72fkjmJW82yHGTa889T9BRPF8oMz5VuXiJ8ED",
  "key15": "2MfQaExXSJVnb9qM9NBcaTtC3sgcVVfXUqZDXPasY5EsQkhusd9nHBTxBbAkvEoa1YpEjiwxeEgwQgmTwh1YCCD6",
  "key16": "4Vrgn1TvhqtsiHHegos3HFEEWbhL9zqxcttGPt8ed8TTpWtQnnbQ81GphqbrhM2woLcNkATaZW62MhUrbz2VZDyD",
  "key17": "2c3t6QoCiEzdx2aHGVMH98fV1aqcVkjMHqcLci1RcY7XeZRxmfe63DZqCwAyuQLG84SbuWTwo7pau2CDUgqH9wT4",
  "key18": "2bVtVDK9KMUKTp1G5fQvYVWfGuJLz5yheN3Xnxm9eUJFky5y1Ew5qFkh5jnkKJd9vPaKvprgUfUgSCDgeLZa2JBB",
  "key19": "2kbmQSj9UJW2Y4hBSKY7nYynwpMrwpH2i7yc48ZZxM4UB56NpkGMup73wDZVGsb6EbQWw3kEfQebCpp1Xy8iaJkf",
  "key20": "3CqTRbChGPodtoiMBnWQMRQp7x6P79fNoTG98q3dD6xyxLtpxqUb3CkfWur2RjkXgD7CfDGBDWocFJMn8Jx8oeMu",
  "key21": "4eQDtSnTRNe7Mu8ehDUvKr6VFcfRG6MKEwZKZirvfRAgGhM51JnrbLK3XRdyqnckzUxFjbuTZmxWbvrHE92gxdS9",
  "key22": "62PhNroPhcfVG71PHmhU5xpoc2dqF82ToD9YVhmWXC8LfdufXxmCWPGRdtGD3v4GzaCqC8F2ypJpfDcDydUzKmXa",
  "key23": "4fbXPww9kFM83AFwXs3VqwApbeFwxyLnqF2C93i7YBFKwLw2gc3cavaxc7HLQi9kCw1LRfAjtA1W5WLGx3ppui9v",
  "key24": "xLMGLf4B61kYQ531j4jvKKuunxiAa3jwwFWQ7rC4Gije29EjLpBR12XzTKmG91skFUrksNAeFQE1t89SCqcmrJN",
  "key25": "25vGPATPB7JwXCUt1uTtQEQ45TRKb2yXnaMGLWtBrUnGyzNLjwnWJx4ZCEvWQcGd9k8LdyFVP62MbogSQvb9XR2x",
  "key26": "4GghAouWJ3xAPMMJWQKhUW6QY56Bb3EGeJXRNWe4V5QBB6oU8dcvukuc99gayZJG6PYArUk4KRr4yFhaecWo1WCV"
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
