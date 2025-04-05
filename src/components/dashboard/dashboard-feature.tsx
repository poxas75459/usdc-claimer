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
    "5DwASY9ThK3bxkweqNskg3v9ZuNNbXJsGkSC5wC8MFpbZftXHa8R8smWDP4xM4iMvrefXY3gVp5JNyYjL1zPD9kG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vi1iWQb3Rvzqa7qdVYUNGXc72fkhqKHRezWuUzFDxg16f1jQ5wJu8NoEwwDnmDSFpn4dT6HGKPK7ikkPHHzLz6J",
  "key1": "2NGHpiedg5vc3bPyX8BiUVvK3omBvsFYh9xrq36BPwj9hfbJyTeAw8bDrEFFcA86Mr4cQk1beaGfimEFZarYAZYE",
  "key2": "5dBqmRU4ptwrYMcwf6kov3efe4jVsjsLQCx9oC6To3HrXaAvVZV3xjQskx2PLTzMtHm7fC8mhhMhaVuqaPsWbLsr",
  "key3": "4yDLNMHWPvuYCH6FCDqvTfM1H3ZcpjAoijFrsEpVYcL7ad3zFkiA55gXdE7FuHwEHaJjUP4jzsDNtCpuSrzTUByZ",
  "key4": "KkTy62VvDa8VUd93tdP2ziHcX89jcYbvnmnyNkgknLxco83d3USm3w49vKd2EuDVyKYSfcsZDJw6rKuDUrYYN6V",
  "key5": "P3WhxuhUWp3DJ2rpKrFeDbJb9s3GNgpkmVe1t91GAZXpyRCAK3Kg1FFVXPxPBjFNisW4Tq7nak4udVj41rUgS7F",
  "key6": "3AqWkfAgZFx8QJnwaN1XhNmP5DB3j5KFCgAhxtz38Qhk6nKvHNw6Gg5pDy8xzU3XAZkGYjJYJbCmhwSK1ji79F8L",
  "key7": "4tzEbFURNxfi3Ge8JELABtxee2tqnDvuZNiQj5Yt6So8jNHQ4DV9Y7sPkCFkrsaFubZ3XqNMMWjNLVg8W1aSWBFH",
  "key8": "21ocd2KzHYdocgv9UYyBLeS6mtaYEkM9hjYwJSY8YgQ1jfWz5w7wU6m3pwDvHxjKG75zqt36Qn1oPmnPkCF8VoCu",
  "key9": "52aL4faAhpWNpSAaVCdGuMRjyr11jZZQvCKmsTcRS3kN32Ut5JWkwwKjYAmn6TmAyJCBF2Z1pAr2dv6AkozzjhuL",
  "key10": "2amV5YKfoBN2f9rWQv9n89bxgYRpyoDzD1ZaoMro59P2VLwazgGbPmpEvXYjywiPzHHaL3Bcs3mjfBGXMwf9ptfj",
  "key11": "5eyG23BtJgG6cfWbKdDuVfwi5ZJG6jAW9aaXKb1sQjNFdRz3aNFJUW5xSnWY9kQnMVBMTMKircumDCVJ851XXMQS",
  "key12": "5SYtqg4QwRCee1RZrsvSE7vLpmshnHiB9WxtYf3jMRHAM2hAzSQP6gQ51D6L47Geak9k9wYDHUzAhsDLcXty3zJh",
  "key13": "4HbgPs6eCysaRbB8TE4gAcUDwSgcgjxJqQSe3gpaH23CUVU3goB9hk84DA8U1tbTE8pf1tQsGDc1Uevs4Zj55jx6",
  "key14": "ZbWfj2nFJYqG7fhfcRX7LNsNWP7SixBftAUthTV83M9ZuMRbKKYUhSeJij17AyT2pnCTrDAvGvrmibW49Kfhkkc",
  "key15": "4t5j93fpXVbxjnZMVMNEacUsFiMJXePa3QbEFeYQQiU4Mkw8o9tdM9j283YhDAcbKUwEa3yRsck4yfVw2f3jLJjj",
  "key16": "5rhHj1XgEGCPfaFMGVxfngUzF6aBd4BVCPwona9pdW7S8QZzhx8URYbLyeVvehr3kxpYCgJAXEQyST6oQDDSpi7Z",
  "key17": "2rXCwtKjUMbtihWUoDS9TgxMWhqbyCdv6k2zfbv5mH89EegP5HbrQLEoJqHivyiqHmBDedeKRe2rTwzHSREocNt",
  "key18": "3y5J9apYWY6GYh5cxC7g2UTD9hXyKcN8ke7wuVxMxUU4xci73mbA4W45dRpcjACa2c4ibrnqPu3MxVG8pP6Vhcm5",
  "key19": "4sQngBdts8nTQw6vsG4udyqPht6PwzWSVRtdJY4kF4TSpSUpkbVrZrKhr3ceZuf6Xtfsmh8goksLzjNpGNpzqSBP",
  "key20": "4egVd2b5RU1bQKU5GqBovNg4nNDu61eV72VsMr6apZkhSkE6AUmT3F5QsSta8BnWPA3wRBL77sf6nB2R1ccFGP1V",
  "key21": "29W3ZLMsj47rJvxsdrNtz9wFoXsA5iGB83mZQypvKAaZezNgnY7x1Zfc8EUm3G9rcHowQAEDQ6XQeaxSzfLrTJmn",
  "key22": "2dXJWdmY8QWSTCRLkmmeS7WyCZVz1xdwQoq2r8KuJ32TTuVWb83UYHTb6Q5kVj9DeofxztaGRewn2kzebm6GNe5q",
  "key23": "3KrbHYc2zuWh94EoDbT4qXEViSpHfwRsdUZp4dHBK9L6fvmEXC6sMRwQQvxk4dVHiGv9zwzmPbzhy7QdDQYR8EQX",
  "key24": "fauDB6wBmQJRdZhqN8MYesqusSERU6c5gYqBg121kA61UHnhxFeY24Sqhpq5onnK8hZXffUwgd4nP8CCgJjrYMv",
  "key25": "4ntEe73KDfytYow9EXnYwHJJ16ZopAo18PfdoGy1fZvZUoTvTdpFUuBunJXTDpDpSennGYKsPApmJJ8UzDfD4Mjh",
  "key26": "56MuTCRx8DT66zg3RSaXVb9j5vDsjHwXf8ptKFLu5eJ4bAGKpXdnyaBMnARdfkmhdHYgs2gMes6dFoKTLF1e6VgM"
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
