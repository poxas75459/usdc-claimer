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
    "2jRMuQNTp9t6k3hv5o53xm5R1BCmrrgUvuVAvTV29pXoFWwJAfZkuXWaT3d8djFtjbtrbtpsctK81qossGnrnRjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FJ86hKCpqiZBP5Mo1gwVCAe59CtZifRjHTU9aVfHgXZ61CtCZ3FoNcWtTX3Ckkbmz8HvePUTV8ogRYa9P3gA8Fw",
  "key1": "5GCZwCa1dLvLZCtyajf7KouUt8gxV6dVuWj9FeBFQt1BmTqW5AFKrPZ5F2jrBE6EivrQwhEcrxNbvPBeRgnZ2zZ7",
  "key2": "3TC8SFKwC3HF3bqKWd3MeHQ8qo2GcQ6EYxMrfBoe9QQuu7TZeJomJq1jkZjL8tCxgKv3XNTZpyCffN3zcyEUkBJr",
  "key3": "dw2wmtfbuFnWhDUnR7TZRzknzDtV5sz4jY5E3eptQ5hq5AnMoZ2W1oPYakLKwdETAxwZAs9tdYakbWYRGcEh6Gz",
  "key4": "4bcYse5amtiMNNbpskdxi8iKJaTmFSDBEGS6KRJjuSKqrE7QrBdKMq5LqnCYTHR7RZZ4cyEk5VyXMYMuJchesaTL",
  "key5": "2c8wsFk196sABS5RMtoWyLZYi65aW4kmR9etHSnNCZpGm8xJTwxh6adqWk65kSS2XurgX2pvApvdG8FYaRNY5WWX",
  "key6": "xSJNtVeHEpPbQ3DYEf8hRF5sjTgrNCg95Nny496kCCcU7ebH6vjk3xUHVmoA5sj6TKrHmhT6XgbgfZeYn5uFXxp",
  "key7": "33TUjDwbtpp31qZuQfBabMshUUm8e9hRfTE3uqPeJccbsKNutvDZSwYGg9PpSGZxqGGkQfz1WZoy7F6hz55QW9yp",
  "key8": "n3aFavqbDvfXTQtQR2hwE54uMRtdchbDL99YEXpfEYHBFzX2aXG1E8r4AgyfnBEyTGDK2yyZatZ9vj3isxTSYht",
  "key9": "2jWeU1F9F8PjvuLRy7jr7dEP8q6M7LLmFKWS4FEZMRW216kdsnAap1uVTu2XN9zRKpB9xtAuYRi3YrFEDhSWBe13",
  "key10": "5XVu7rN63aAR4LF75HA2HjRGTgwWyxtSQPqs4Z4jKzKhrLXkVgFAyoLMSKs6PR5sofTQm9nJvyWtShfWNLMrTZK4",
  "key11": "3Yn1swPQFkD6UBJhUQLy11gjRUFvP5kfGuCQoU95bLRmHcjEU6FYgdL2MgXZmeEMh1QFXn6JWKsaRWgNc4ga3E7i",
  "key12": "2md9zawDZtuStR5Ck8ztQKEA43uV9SHe5USYZqpJRFds2A6mUqspxn38DXrWxH3PD48SMEhebf7D7PVRcEfBh6oR",
  "key13": "2Po2K6AHswY6ki9j9HdM3aJHAXssUp2W2GLt3RPGNVrv9xqY2nMzw6rGkHyxHJvMpxgV5VJnQaYEZCXWEX6dGzxj",
  "key14": "2ECHENcY4QKXTApE8ZPPP8pmiMqjGxFNh8FUmmfBkHK8gmz8xBLD17WQnNEnx9aW2KFkezFXHYU69evRarHKKBsE",
  "key15": "58fq6Jm4HqPV2CEyC7FF1LU74cEjkDfLRLwjRkutpDjYGzhdfGRJttWNiXPsjCniSfSR7VXwYWUvJ5EifgNQjnUH",
  "key16": "4d7WE1Q39PjkusRGo8hnC59NUBqRRHHi5tcAHT7tQ2dNnzfAysFBXF6sgGeAZaMAeJA4F1MYKZNdSmR5nuN4jF4Q",
  "key17": "4Zm9HK1exTpWpsdYpYKfJh3vETbXzSRhdh8fy3qdrqVSPeGS4TSFAXteT2EZcBFmHwp6cYTVm4k6yaXNhWWz2o5v",
  "key18": "5KoXbUXG2M31F1yNJQwxRpRK5KAnNGqsF1RqoLGaSJJWppAAvjCDdFGZUjqHVYKUh7nqrBeZway1hbb8jr7evAoY",
  "key19": "3kwXKWxQce4NTtrVZcXwd8JbJHomCFQtMZwjPN2apHLAFko5D4wdMY2Spb9uSAL2YLGyHdR3EBC92DQDxp37b7Pd",
  "key20": "51VF3GFAmsEpMaoTgdsTV46LDwB1kNZjb6uK4Zqx8QLqYuZFAdxYBN7BoLskxZujn9zSi7GW1qTPsx4o1nyKu2aQ",
  "key21": "29EvadHMSyyZ3zTUqWtGSUEDEtoFCL6s2XrQrwyjjWxMHRo3NmKcEzLdDAjGNArxvCJya6rcQ5rg6GfGg7DYxEYe",
  "key22": "3qYhbpKHnCFd1i6XiVeQg6Pi2e4F3PNDsfWght8undMGfoQ7q7B1FLgnYUUrKcLXjjfdiMgfq4AD37DogGY5oMxj",
  "key23": "S2F9bD67U6UtHZ793jLBggRnnMjYuiK2Pn9YLtGSPZ6YH9b6syooQvb9NhgbinXJysCNHsZQnnX1Myo4pjNNvqv",
  "key24": "57GTxqccFTDADtsnPHXcoVtWb27oeDjVZTeuTPG2n9WWaECmRrowkmhtdkqtdAaLTG5NnEouXS6fA4pX51ox2pyn",
  "key25": "2npq9aiBEyKPxNcLmFgWK2sYtHctvK7x82JrnpuGfXxTUS2TxmupQuGgxNyaV6QSAcitqBdKdaL4ynkpmSubACWn",
  "key26": "vMy2KLds2F9mpaxHyNvJ6hi72wWDneb1rQnCKg1FtjazEuZHuwASFG75YThMH7MRdrwZ3TMDTCXN6yZAA6Cq6jk",
  "key27": "tqWNzDcGfWojJWLSNScUFoTX9t3qhZFHYxDcSJBU3Leo4x7A18T73Tw1L5nMpMwvwyRj6vrE8FZjW3TK54Kb7rn",
  "key28": "4dXCW5cKBdC4EZUeXFJt5DbixsHr53nohxQp8zebYxYQ9QD3vH17g2HjzShzHafmdx6oC2UGqf8WMLY8fs2daQrq",
  "key29": "Hq3toYkfHPPEbxrsQaLCRRwN2RD2D4DQmqv8u2qPTJYFcpEz3txueDj2Ai73sER6ugAts8fXVPbhiWLTjS4jXz9",
  "key30": "3WjUAg1888aiBCGH8gdTmXe3LCqPdCDJw6BvZ319iBrNhkTXRZgbprRMeG9Koy8JWcXC7MY1q9eKkKeHHfkCpViR",
  "key31": "h5dW5B2fraUVYcqxQZujW1kd7GFVy2i4cQu6ouey4MeWzxxVgdJpb48LUxqAnLVVbCA3MpsSMczc9KN3boi8JUm",
  "key32": "5ycdp7iqMDgfghRpMqbBYS8zJn3iqAXzgpA4xcUZ7LBdzknMy9kUme8mrLxks9BBAjGVKsYKtGxK7YEcGa7R3G6A",
  "key33": "33TUwwNFPUAZ2gT487taccyQrFuDou26jMEze6boSxg8GD1wuttTNhHrCRYj6Qi4qSLVQbH6Hntev7KKjw3uaMXF",
  "key34": "2YFfU6w7djhCJ3Ct4q6PTzd5gwGwnj6zA64w5KAifsDV5Ran1FGNJwa12JSnZwRwtcJu35EKoQKjNRxUzKoNWcAf",
  "key35": "5KcCaBkXBa7VXCAtNqxet7F9QCkYwZ3tBQP6od3Kvq63w9ugWMkHZXDg5hcgMbBYw8D2fcW9EHmehaVWbQ6zsCUb",
  "key36": "5SfghrFBLk2mhF8HYQP7pMP1JXuxR7eNsSPwzxWVtDRrPTus5bufyXo6f9TnE6MmkjWVVZxES1d57d1K48E3aAox",
  "key37": "49fFnrQ2kKf3wCTQr1CAauPuhFbHCpnt9VHaf7xEx2JpqfDM5GM2FdTPZS8E9wiGDSHwhHqXkuzLF3QaYCM19dZH",
  "key38": "5vVuqbobe4sm1Qi6f5p1KAxcK7Kgk8V2FH7uUzihSFeirYDTwNUNoAztYWd6DPJxw1g2s1GyD937Ei7Tkn4X5ccj",
  "key39": "2hR2Bc5cVekxcHJfJ4rRTaqFLsLbkCWj8zV5V4L1Mxc2RW2LqyERRZ2VcK8hNkTuJ7ndnNzhQTXYCKH24wyhxmJc",
  "key40": "bQKhYqbH9LKpGEF9jiKa9mdRYojYiLefYfJhpC9s6Vw2FaHyzmMsiqzADUiZ55H2gunjMdeJA55jZ9mxxoxHLQG",
  "key41": "1AnT9gWBsP2cmZJd2LZYwnM6nc9iZCMhR9GiyYHbXGADubKfn2tNgDtwZ9wRtivhNDBs2px1umSJgH8ykhfg284"
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
