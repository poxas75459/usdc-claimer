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
    "tZgGggnG6EnfBriM5PZ2TzM1HwUURv7JnJX2oRfkFPFuvVRAU72C9MuxNcRHbAn8wahQHzBb9WonaJh6B6MopQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UgvfKRzVT9sM5eB5fT6ZBFk53DzSSS63HguMzjLs9KnRynPJ8BShadttzgm67pf3MFNE4HZKTe4152mQ1BNfekF",
  "key1": "61FJjt9jNLoNggsynCEQ4NQ23jNyamyCMfUVyz8nZPcNhVGG4pYMhMkC7k7ZdJviuFKQrCBjuHLaNZkpzFsnVuA7",
  "key2": "3sWcSSNydB1XvPjpcjLaz7j2VoHfKg5eqMi8xrjRgWco1EdzEuyQGJKGdXeQ9Nbur9SM8AauAAB1kwJ8zXw3cXK3",
  "key3": "4XDzMcRc9TBvA4AcaZVBhSRm1eVSJ45aNZfJHfoaPWd2ak3qgj8nuGA7KB36N2Lsdi1ZiYHD4MRyXkwfYP38n1dM",
  "key4": "3fWgnpGp69C45VmH6NfMvii34ejkSFfxyGr2QiYpxnpCxLenaCPx59Kug8pBcuB94Z3pJDVd4YjrYKMebsAnyACx",
  "key5": "4QS6imGyfrrDdE8KLH5RumMzcRatddStPNEGH4KXd6aoShFFXqMNaLbgfxFn3nYJ1YnEN9WfoSFfjk62EywW9ZSQ",
  "key6": "4tKZZ41WQrWNojD2jMSwwGAD48BEshMwpjo1YUFe3Agjppjm5GUd1AnF7AfMNFUSBoDThfA6d8aebggQ3WMEDE6o",
  "key7": "3wfRD7fQaXLzxQVBZhXuK7swhWJ6gBCdeZNBNgSboX5W7dw2NFBqd6HVovEva2Q99God8RWJiReRSnzJWVNkvGM6",
  "key8": "4FrZWYD9kx4DZkE2QiwxpW2vrHnFCsKiX8nMm3a1yce5rrr9wBTJG2UqRjT6Z23gqiShMFV3j4DXDrqQdrcMNqDn",
  "key9": "556Ps6XkfePergTuP5XK38ECbYFFGoYVPbmAue6mvZaq1dZHMkhnE35ht6qXAn3XbkLwtBPVzNMb2uGoKA4rPkST",
  "key10": "4zvmXag9mv5ivHcBBDMoi21ujQTzUKpDL6fCKC5e4tFberEE9FmiEmA174d4HKTms4SFWTmjXvGzMGdNmwLRyuAw",
  "key11": "4vUbPMZLtMwgUUKd16WFrkZj4GnFjgVfH4PVqBRUP948XXZZac6tZtZU5nNvi1vNu8H8FqqZxUamGxMTRKWdNbo5",
  "key12": "4PhB2CjArq9nk3gusamJrb5t4MG7WcuhnkunJgFWA9KFWEqVjrsZe3DaTAge3hnPVXyd3oVp5j1DDjUgYcPbLFJU",
  "key13": "FLWvABHWaD6XYmU2bp9SJomhDVvYgUMvdd177GLvhB2pQizphQ57WNTC8TqjRW22Z2jXnC4aYfKxZMLJpKEuUoC",
  "key14": "2vt4HNqFAeWMNhNJhTjj2SGkTj7dPfBEUd1mLcZKFCy8SFpQMWJWiDpRb8DzUv5MXEnqm4oUA2tifzBvm4k8sCMN",
  "key15": "32oKtmhotyoXT1tp4n2bQdaqiFvqtfdw7mGJGxsoZJEhCdbVmUCoscWaP7oKswXSoVmF17isyZcvJbgkPda4nj7F",
  "key16": "3vyEwUwLhC9iL9RtoyyzYAoky7n9xJJxUv9SW13JZoUWSwTLv19QwNuo7CkYXdoEfk13mt5gXHoQbCkQ5qCWbJMZ",
  "key17": "3KHKMnYe5LMRi3tVVAgCvpenDqeEw4aespGCZ5QzcKP5vKpTLBQJn1HZa6WYKpn3kfTF1uFDRb7CkPtHxJdZfnvA",
  "key18": "3DJV5ZyZhCMsaPiSZrxixfJHBZJbEjQSz7EEaqBCFy4G8NP9jucK5Y1adftPsbahtv4mdoRohJfifMNbJSSJYGEx",
  "key19": "RdxLTEwQGkEBwQjUFwe34KUpecfZfFJU3XZBPme93TGYwC6VYeAoApDZChXB8putfMy9b7nH2J72z7oLWmspNMD",
  "key20": "444Hz8dmUviF5n65ZDpGzMvQrjej5Z1YHtVEmZnRyyBNbtjvYsWRkQWRqQAYfNpskb6dLZkEABdxwjjy8zjPSaAU",
  "key21": "4sHMt7ykJSkb43ZwYk9J2DDFRWjkbQdpjG8AQhP62hpcUv7LCZ9rvKPo5HMd5ReczRCFZezZ5fQVt8MeujheXgfj",
  "key22": "2Lc64NUKhpsTfSuPWskZYqdEary3DUUtTPm5jrqiStbWAbPkDKynZcdn6fFAvArbvcycQm5tmwy4ty5qNpCTUm44",
  "key23": "5ZLuuHdPEg3rCxmp2YisRneTeBQQU9yak3CLjqZMkuWJDRpJXzTGoCX8YNEbw3F9khpqR5iuXRJ1TZj9cC98drvm",
  "key24": "4HQNJsRrQbqd5D1QgT4XGufbY29pGoWjuRxmpnmh7tQvDzdH2UyFmWkVvGsP7WRY1NuF5y9D3JMYfP58fjw9kvqv"
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
