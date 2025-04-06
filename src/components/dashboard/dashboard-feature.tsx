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
    "3eP9MdHF5mDuQkai2s7yPqB9nXVDyc2JWsej8pT7jdYBeKKqE42o9boBBvV4opGWYEi1isGaMqKKEuGRELZn1o7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AzCZLDhy8rp7FePB4pNdXJDkXvcVMLPWzKz8h7VbpweCiP2aDDkn2vw8WDD2M3u4rgTi3opXc1X3P1LcQJzJowN",
  "key1": "3BuJu729j4j8AwaUN2XLg73e1UDjEKj2ScFmRKqzkYWLunTm3SxbCggQzfhm44xQaStz2Jh7Z228aTj5Gmtgghig",
  "key2": "67U82inY1xUTRCd4evak3DbEsb33rVWFAUZsvrRMVic47ocbjzfGGFQu2hSxsNJuf9RMSwEuTgn9VmvskW6TwcyG",
  "key3": "2QhUAtH47dDHivytrUw7xpNcWYX4MaGcdAdyBuHQWEcDRLVup5r4F7Dw1mWpdhoWBmZgecAZwACtVEYF5AB5FxYP",
  "key4": "VvMyoayNM3eMaFB7cqYz9pzWM5ph9FndWZaK6qLxupmHrXZA2fdnjSEdLnyqkrNx3JdwReLU3Av1ph8Zo6sBAhL",
  "key5": "5ZnDKRY5CKX72uhct9WojQpHweMmNiaSx8k6yxKn2SG94VsUYFfemkHPjs16XVSkuoSequxB7pYFQcu6zAYkTK21",
  "key6": "41rg6RDYhmWmUmFLHLQUUuw6FLqvSNRkVto46cHdBirpFBymhbqFnHGHqCjhXEsmpEvvv2JWpbF77kB9WS4WJ1gL",
  "key7": "3guEmsh7qpZcWJPL9h6Tcjxcpby2NyJ9C3kd1Srz668oU73sRJ6gKTS4EQCpbKWCeVzKX4xvLH4h2swdjtHMt63N",
  "key8": "2y7oPJtzYdU2mPFFutC8mrXKNnSGj5ccfegFhBhVbKGTucdFuBN3sW2zqHMw3eodDrsi7YbGK4JjHn46p2gPZ7tf",
  "key9": "5vjmG3jjQb8CZWECoCCSGUE1R27BJWFHW6UAGA2Sffj8H8bML5reUb7AJnP2AruXP1FmXfgMUdYGCBM4KnGkDKYz",
  "key10": "4iPyv4FbgorR7Ju58G5xsyBbVEiWsiTn8vtQCw9LNcTJ5kJLMQgGdmsmJM4ZR2h8P6oGs1mkEL6R8usi8GATrR2D",
  "key11": "4GtU3JhNQ4Exps1AKuc3QzJxzYnE19p9FivMnkRsC7aVuRCZc1MnzUKokoXusa8VcYBADsRWhBYNe8vE4bvbayAm",
  "key12": "5rLGfRYXQXqp4rCT9GK1iyB2UcYrPHZinRxgAajtocmbLfh5UgPRH2CqmAVySokEMnMMiKjaLguNM8VmoPagtUY1",
  "key13": "29sb6oc4hzALTg6baNm7wou7HSesyDSFLamJoNHpP9QGzuw1x7YAKUFkFDUtGnyaATJnH9s6aXqydT3wN66nktZj",
  "key14": "5e3ZgoiBGtKhJnyJ48142PfkpjzAHnuiyak17HpiBnu7aKSchs7187HU8R6WkB2oer7GYXBmr1Ds3F8K8TJ4UN47",
  "key15": "wESMw2u7T3BUi3qKiujJeQkdLdAidUwSXmYFJuRnC3ykJhRx1HrFaso1sdogvRXXg9CPi2rr48ALBZJYU9FT46e",
  "key16": "4A4KodkNaCmrztuWKeDs4TXMVEGMRqkwNhr4EnGDCKBTvqEJTNqcdzQDo6rpyR3sKu2WASjMmGpnXwQsek3YW8BS",
  "key17": "2L9aUuvnp1nwxhmiduU6JJ6XuTbJqq18nRXdh6LRr1VahRNpSXnRUkSzfiKnFXJvia5u1KNLPm8JcHGH3LctbKot",
  "key18": "5Zc4SPsPRpoPugrMFeHzfGcUQg9se62mytaSuUNLA4ifEf3RAHie6CRUjff5TT6wEDpMGmKWjgUFisH38jwY1Doh",
  "key19": "eYiHZjei6UfN1XXMpheWwLwTnaDfbsRAEZXywS9uHfu5RibBUW5jcss4nY263P49y3MKRfmMNdJMQ5tdc9XZCFN",
  "key20": "3cqB6GpA7ht8pBwDozNry7Y3Vdx7f1TV2h9q9CDmKVsWhE2fB8zTEBseUkze17UzBCcpcYJ4zbHW6726m676LmSG",
  "key21": "t1yG33cn3mgYJqTCMwvaTmzhteQsqcm79aV82pGuXLqB4APEf7CJ2MzY4dVKG84mZGvP8Z3F5bDc6U54mqa5GHi",
  "key22": "2kDKPQrpL7odRXj5Td64toRNNJVySVjd3YGDEqJcxBPjXzwz3kfVzK21pcsuoEFAEdyoYWSjebQWHUkZDTntj7Ui",
  "key23": "bFWzKGzDQ6ZAozPMFQ52rwZHXhixUCJKmAEhHji9wuiiybodNzVNEyfqf1po9D5xYVcGbWsb3SrQmSiDzR2h5Mu",
  "key24": "ufcAasxyGocAf8kTHzFx4FpQDvJLCqSak9PCA9tgT5r8E6pvEuYXs8WEgcwfkaDCJBCzA87CJKnFjhqezTYpPfM",
  "key25": "4J4Zo23Pg74JSRxEVujAS6m8bjv6xAPCAwq29ktb97UZGCE1vWacjpY3J943CK9vK5keFGWaiHmZcAfsBme66HiB",
  "key26": "4eYAEdv4hfg9QNyexfRrDgHsGWQCFtoH8tT8h5WUe9ooYRRsugP2H7TEcbjGdj3aXvi6uroUFMpEfeKAxNg4LN7q",
  "key27": "NgaNeGYGCWosJ6Ws7KJffKY4qUQhbN3Cpq6nyzK4bhyBHDHcTqSf4UDJPrx6N4nMT57AYLwoCEvDWpFa4SFinHw"
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
