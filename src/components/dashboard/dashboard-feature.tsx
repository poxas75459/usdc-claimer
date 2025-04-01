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
    "2WAdn68XWGVdF2vWwwcm34K5zRoErsXbbC69vrnFqRJ2ykxsrkoFwQ5eqhpC4ihB9yQj2t24g7NKckxKGj8yw1YW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sV1Lfyw9ESozMG9146ZVhfNP1bDSxLoy88Nme247qEpVzVNbdQPwTp6NrsZGsg3og3yhZXs7Jj55b444My4byuQ",
  "key1": "4nN4sTJyXYzCZsXgke6XytSFkVc7SuoYZYc9XDqruafWsgLeiEj96C3GFa1QffWLjNxERYt6JBazFDH9X3x85JYg",
  "key2": "3PLUUrU2zPmRexo4g6FG6NjzUtY1wtgySNP28kfFv8L2YoCdrCcfpHazuFABUi1uUhe7iLnheGvu3hHhTpkHTVqb",
  "key3": "44b7dhvGfrjjVdgHuecAu7gf85MPUDUK5JtzvoUF4rbRWw9sJAfEsa13F3cP7zTgKjqodzTYt8o19m5TfMppzKD9",
  "key4": "4B6GmUfWcv4KNsvsJC2j6VjFWK25Xkd3kKBKjjjprLnFY1N9pVLKxsqhMqMasSaGaPchczTG9Vsyj11EL5Sijk1J",
  "key5": "3QnJRhxwhVXjLtafRHWfmhSmoJTawFGMv6V5HiaxxcAYrXPUCJMgBu41Lcg2XS8Jrx9Y8nUFYz85MqoonxDVWS2Q",
  "key6": "4PhrRf49usjFT81cQWmvik7eCYM99N9bk4EkyotQmHpq5iyjqDFijxkaHX5Bgth56Rak24MCYno6b4ijiGhErG5X",
  "key7": "nY4AQYGtKnXFADMji4RzTUjcZy9NiQ9kVw5udrts2sCE4AqBjZRiYtmmYHMcemxspwwYY8M6xwVJoAeBMxp7iUv",
  "key8": "2Y9q4gVmweNrtxpsA1pnNTmh8Qq8ZkkdAE9u6wuHS5NHmdoVwUAqmVDPJmEqM5mzSYPSqAi62gL2VSwDkgm7ZJUZ",
  "key9": "126vbRNUWUuDtqocqkdF9Hr9nbUgiecE63838DgeS7T6iyW8dFkB3SnHdrvhLTfccRjXsHBRAoV8Gacts2UvADhM",
  "key10": "4uoAu6URLYQ26FpDTtuqTWeH2EmhqvfZmwtzEqAf9idbx8GbvFnsnxHg1V1ofJiAWsCX8FC9xbLb91Vzkn5tV97X",
  "key11": "3qiKgnm5C8KLUbaewAAAtFV4y3nXdNto42ru7CSocASrUYwmupcnFeG2ncA4KULWidAvPjHRfookpcWB6sCRxnUx",
  "key12": "3WDmYo5V6JqTZNL8c6gwj7WEWxZBLGVjKKsmFbfx1X94ij6N8132EF5SgeSXs6R7WpSUUVRgrWDoesh6zo3vhi22",
  "key13": "2DVWN7NeCK7M9yHpMFQfQQCMiyUrCDXfzELWuPrct12xxFBZCgf26Rhp1KGBhdZcgdkE5AdGmHeVonEdYvY9ApSu",
  "key14": "4zg1gumobZkkgie2KfxcJzeKQeyLjmuDjW3qiQXSpQDUB6hCjzoPCNYHDQyaSmxkKADMgFwXNHkyZSX5bdG4StFr",
  "key15": "27d6EdFhitgPaQWHqUqdT7nyoRRb2dm55CsTUfVjtUTeXL1k3D59NPvck99vYiqdUionKMNDAJU9qUD59kf9Snov",
  "key16": "4H1fEoCoGQxg546ChqnZRcbM9PyNrxcZv9ZgW5iGdFbtS9d7yCud36qtKPZ3rpVCzfRvrb3E7GtmrVNuk5QTFPgW",
  "key17": "44i9KMBrzyxaEGdS6gfZvS4LmTDob7W4JNgV3Jbwx9kYtKTRJBQkBN2V47XKUN99tp5aZbqBP9ykvGSYagWTsbe1",
  "key18": "5ve9Tn6Vsmw7G7BKAH4EgALZKBLrXuN4mVESTJ9b1ZqH7AKf5bavbTeVTtyAxvaNicFV52X5jGnePfJooN3vW7au",
  "key19": "4TreX3Rs15i5b5wKRBijw63FXuaRPAFyyYL1zT96kdkj4uTHPMkh6r23vUsaavVwaUi6G3YqTUUdouiPYuhnrnjo",
  "key20": "23zmHSnZndjyeuaEpznb3VXXU1ANUV86UbzGUY9SfwsgkqRNaNw4JmBzuiyjwETHuGATwK6QMzZdi7xjmuYEeTXj",
  "key21": "32wyFsDnfBsSj6xa91a8666EXLoWgbEbR5jUf7w45c12Ekxmqqz2rpwQz5GVQsWXK6ZdJmnABayegkd91vkKC4Ui",
  "key22": "2yQPpHuirsp9yB56hQJFhWCWsu9Hn5b2ysQuZZBAmXmNyzQDP1XE7Wcix8dmZZixEsUVCUzqLQEfWYbiBU9XYmX4",
  "key23": "4uPQNQLdJPCMTMX8YHpqU91n2bXuarzi2ypkBjX4H7izAigFBMVpC4KzHHAHDR6x2J8SFWiYirwwyQuucTF2rrh",
  "key24": "61nkcEcs2RXzdbhbzEA5w3w4TuKYRaNXBj6LehNMwHCwDdNnG8bdQh4VHb7EYPJvm8jSjyFxvoiF3rPsyKaVEw5e"
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
