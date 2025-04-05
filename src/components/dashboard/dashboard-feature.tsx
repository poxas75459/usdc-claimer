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
    "29T3NiuezJAXM24KhswJgwoMFxh3oj3gQnFjg8EuJMfKqn1kZT2u17RTT9uaDToMw34Ejyn5CaytKiS73UeeX5xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fZShfno8EvcMWC7y5JMpZ4PzSCzjDTWBs4RTqpCZQkqqaqUFwYbf6yeMxhXzhKhyAG6eEy14TkqgZK7zZf3Uwdy",
  "key1": "5MNzRn4uEgRDULVKTBcY4X5YEcsDegZZiUctTuTa986SFLKu1PfQtkiUeN3SQUVYbxdQtZ8qC9dp4zZN1vgjdTc2",
  "key2": "2QbkHr7P35wPVHxZdeRB2LRx77TXy1DBdVj9fP4BBySwRUCTXr3QsjPGKchvyViPjgsWqisQ16Zj57n6nx9GukTq",
  "key3": "Ab12B7fYqNbKySkHV5baDdvxqrTx11YYjENbVAR2ho8mYfNbd7NH4rWVstV4J6zr6DgXunzEWEFx2Bo5MRVsbNc",
  "key4": "5nDd5NSj5ZP7YxyiuPzawufbrUDTCSVp8Egc5nzijxjgN1GnpmUaxfXcXL9iQutcjx1LehYHdWWqAXdso7yAee5t",
  "key5": "2nUCVcnTFUnP1rWfuRXkKWGcsbMJnKFwwC6eRpoFcJVakd4J3tJ4ZpszL9T3X9jKfm4zBtchQj1SoWGxHuycwpUm",
  "key6": "y6rFii5mZApnWrRSonvt5i3QCRBK2VPUrHFrXcndQeSKbYVjBoc9kJshhtdtYTz4Bry93ZMZ1XN5xwacAcCdKrw",
  "key7": "2NpM9xNkSA47EWyEzswDMq8ToJujvQysjgEoqmNEJCG88fMZvumb9JLeGnBfpAbwVECXiEQY8PiJikcn4EssPS8L",
  "key8": "2rymCeRaBX7YjiUnQh8QxFNsZeHssK1YzcL9PK8GwzdemNFQvni6FRmkPYjXbtAgRPPYdmzMfZKU5dtEacxmT6Dt",
  "key9": "3KA7UvYWk1oJLZSnxV4tY9FSQCYTFH6Us81DEdWtohxMEVXd45sUs4ZYAXdXDK6T7XvsU3tz77VUU2SZ5i9jXCwS",
  "key10": "3uAqBZFZegQaUQa3YuSVnxidnbS6E9hWuwgSNP1EUD13jieVVU1To9wUX6y7h5nkc68yU3NrmbjFxdWUEm39oEsQ",
  "key11": "L9tKTjUUH8kaXeUmU5hbZwAJrEdUz4EsLt1NjJCDJKTYDzTejbw9MJ3W23PB5tt3GFTME9GYhtA5ZqRPH8YpmDe",
  "key12": "5FkfAJZKu7bu3csEC5PmFS1yv7ipQM8r9igZWDDR37UfGyu3VJieBgBTM1HNrNJW1nJ1QyBNgREvJ6XkSR4QXHzz",
  "key13": "3Ux3bARb8MHKCWY5WRbtECqY5BQcWJuK8CQhvMMyGCK29A2YnJhcb2sd9tGLXcX4fxa5ZS76VorLpu9maMwotCXr",
  "key14": "5vgY2Kc2QipbrGxFcBjGfAzLzDq4Vkjm2EqWMWVf9oKtxiaSwGZAVyoqDwruW96fzjXtNhw6TnkukVhhYRfd43wC",
  "key15": "2sdYui8sKhY4XV1A8UsJEtCUDoqVgGgL7XyswwJcEDUmWAXKHKZ3f6WufHe1oBy2DmmN1AKZS2NAF5Pz3u6U8ifS",
  "key16": "38JEFUU5BGVB94kxECSfXBPXckUkDaTXm5irmoYjgZjC1dQyaXHLNowrKCVHxkforqmeNuVDp8AoB8jSFEoeNjuQ",
  "key17": "4EAZk8jxPS67XHYgCA3sHwHuW9VPdWzDMyHrc5VZajEHnkLLKvsJqoDXWBFQcQhVLpdtnZnGN8k1HW48AC4FY9Gt",
  "key18": "2QHqRee8wefucmuhK6duoa43KAAy8XWysxaWQZtLp3SBfXb8wU49HVYXQJnAPv67XVFfcHrButU9AxahctjJfmc",
  "key19": "4YVdurjsQM5yt1G8RHV5aa7sgt2ArxGxTQNPmcAkBviri9QJFWRVzma6FR5AZAxEwCHPVNt6r3oAiVEXcu2Y5CwW",
  "key20": "27xRN71qo5o6iQKBsY9vAUaFEU55Pns2uCvrMdzg9pk1yXihLMJ1xA2qviuJDQu17FnnAkF8uAh7SsU7NL9Nneja",
  "key21": "3nzPvsi4hJdn99kjL4fk9UcqvVSM2uJEJRsafW3kVtKsWjeTm9x7EKkSUdsCYei2AqhwM4SeQrgYHQq9afAzGxxe",
  "key22": "33orZEG2Yb3f9PHPnmhTnuMo79xprUPY31cQ3SnbUVayLBfn8hBcF6V36jUouL3SQs9YetypnQHUzy8GjPQjABaN",
  "key23": "4GA1zTvyT2uf6ypLEwfVYpAjw9HobZj5pSJFzPCDbFsgNCgPRhGxzkiJgHWyYR4ZjK5ksK5ktq7UWd3B1SwruDWA",
  "key24": "5MChWaqZgWShZEedsSDxqSufLKMTyQNfWVqyUJRFjfrvXFqhkMjbohXCh3kiJjgAjzsedRPHXJhLNuBigZcxtMzq",
  "key25": "2Zh4jFb1evMXeag35QbiDDogEMMh2RJSSBBTDjFUaC3igMsc67UkYrpcSPVgQB9KCqjvqvcN7WHSEPxrWY9Gn3v2",
  "key26": "f4vtYUmi3oxRrj5ymudM1wgPWGtseaTyMCsPwipd2eLbZk4J1SZJyMXnBoQ4GZfvb2FNFL9KBuvnJgSoXR78aAa"
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
