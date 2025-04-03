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
    "51TxrUt6B4s37EcnMocskGt8jtiHPiwWzMrK6fPL1QEX5GJuWKBYUaPHrkrStGGA7VUPRfZSmtPzHCgxSZbr1etz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mvM2qSovkThqpsYLw8PLVV2CJwCqyM5DhiRbHJVevzTUyrrYH7VGeJ5PqQFSRaxJMzPwAaeqkNeJjwPBDWyqN6J",
  "key1": "GdhU4g68PcBffLQUYkE7Yr1YBkR3tsuk8quRR9tXNgsoRUmG4pPcShcdvpbC8K8ZY4Ws4pN6tawKnmLdEAPVebt",
  "key2": "3usDqbAi7m4YUGsqNnoADJKkPnmUpbpzUKu7uwfDE4RicgB3mRuU6Yc9fgNWisTRorZhg6KRWcDqYas2k2N1LSCT",
  "key3": "3pn6B31QUJP1nHkwGd6k3SkX1FxSnEP6uDEwAy3vcxkAe7XQT3fnR2nFXgKuVdNtSCkEchqB3bSFmUxMNVqsmnWM",
  "key4": "ZciQQdG3UzhLdqo7jzjbMmL6LZV9WE9PBRWH35F9nYAzH6whFRMPNs8spa3C2eUweS6sx4maHAWQbLgGmo9jQPS",
  "key5": "5z5Y4unQda1dRkTYyS7msdeSp3FKsgZ3kJpzucK5P1fw43ByP9tYvjczX8bD9RsX6DjPXAGMApAVF1XFbDyddDhF",
  "key6": "5rNYFu9HSQTCThzPLjwtzUPEzRALVA7wThpgnsaF9RqGQqMjGgna8atZDYWSmuzsJHdaQeeEcrybxB53EANhztzV",
  "key7": "3wsY5qwyPkEPphmKr34BG4QxoaxBqGH39udMUhKfTHqhDUpz1bVUgUaY7DTvbdnNgiGEMK9Bm6gSnrZNzovh9s7q",
  "key8": "4bSiqwBFmB82AbsqfV6Nq2p8uvFnJZTDFFd5u5DKPeT3Vs4HTdDExsCyLokycbLUvuiVPxaJxF2pszJKQRBsw3KP",
  "key9": "2kiusAFtq6nBmGJjhNWg8CAN6UDD71EZXwkU8AzZxXV1S9XbtvJux15gN9WXJZXjss4LLGx7NLtA3namWsMgcg96",
  "key10": "51wDx6R9jptjQQYuHteViMfYKhTx8AbpAyRCgRyQs7XoMkKTYwbLcgADiYwkgjaCgsrn9UpWQB734ruTWK9zC1bc",
  "key11": "5THMHHFNvKWHWYzRhyJj4hMXVdCJQniSvCh5JtRMPpwagrLXCGcoSR2gwKw7NJQh76Ckx58UwRQQS2xr4HMxERVV",
  "key12": "3xBpCgpKPSozBNritgVf7Mc7bXnF4PrXdwmtK6vcLyrDAhX4NvXyfXCNnAeBQ59PaS82sB5J6kVbTNbfonMP43eu",
  "key13": "nue4Rb89QuGCD6EHwZJyykamda2eZDU5xnFXWfUChd6rqirRryXocdLKKScC1S5NRXEfouLYk9ZE5VnMGFPM7wh",
  "key14": "4YDh5NjxYnVVNLYZrCtcpyqmeroat97ZBe2g36SvvxL6cadby2n3pNuP1my2SVmXUgJqiKJhA45Geby9Lp6n6SzT",
  "key15": "3fitbquge4VnuC5tuSbkDPfDExk2szfGZznX2sunDoXezB93iDnmxrNz8cXKTs7oXCe6FmNiGpMaQRXvg1EGiXPy",
  "key16": "2YzGU9492KsJfsHyNg1gMSAmF5mp1HTjkVw6yQKcy1jys5QZyqNq74N9oiT2rzou538vLrL6HECDu3yZR2ARUWGS",
  "key17": "2SGtXfHMQAGNHwFB6Bs8iLN65PUwjYkte9AHP3cGpzjq6MdYCyCruyyKjBUJXqRNU3F9eNMfkxwmTnRf36knchjF",
  "key18": "5D18a4mVFwcsHVNQ7W3HRg5aaTcerh3DEyUnoGUH1pYZs5B3bYFkn848oiXWbMRt9Uk5ZQRsdUC8rSss5qeAT5gs",
  "key19": "2QH7xoMP7YHe9mTcCwjHBWKEyd5enczQuCghVARGgDH591y6dGpYAXqvvUEoPL72WGbRkg5tuNFnNXb9waeNH12R",
  "key20": "FWKvk5UgQ7mb8BhbUJmxV5T6GZqjkNhY4DJQpzxeEcz3xzBDd7Bk9ut2GKJLrnfe1N7QMjxyiXVGvaoK73sjTbq",
  "key21": "3nAF1ZNzsx5HCbKirHnPYfUTDEEPQVoK6LkypQvJjTgEiozmnWDGHeoWvcYjsj7qYmSuYLPuBVp6U5zNyKXScwFG",
  "key22": "5u2xHkFYnAkfB33VCkBgB5ZXsnMTSX5N7Li8AHshn6mj2KoDbvxCDyJMGjsgqbCts8owZvcKKNFn3uBapJNxJJHe",
  "key23": "3Kxxdey75oXBAZDUc35EASopVzofVALMfsrjCQsKoDqVGQVTKXjqsCjgChnTK11mm8KLMk1xnra3GjkmA69TX1Xv",
  "key24": "2u3vC2r3qVLHrkeN736NCPYMBrTUfC6PD8r45x8o1un2ZFviCV5gfi6pYcJAKRAQF6LBhD6Q8n8nLG5Jej6hUa8H",
  "key25": "4daFgAqUMQFR76cNjXa19GMYgBgux2Uv1CpJm65zYtz1wJd388jrfPgWfP3nisGxUGUYXeD7j8AZ1YqnYL6HYdFp",
  "key26": "PQzC8pVFaYDUiA2HoW23RLZbDdiwy55yDdPezykb2rhAGKg5dtndeW7jSTeN8PoHuuadY45wivm2KduqK31dGxW",
  "key27": "35y6ZqDaquuJkn3teRu43tZDwUWUhpEpTUsaqL7cDa3XNcZnyq7bhXgAYfivKG9SKy7NUb3uzDzQFBND1acqrcg5",
  "key28": "3rf6tDoe7tVCC2YNLRTgt2fso5PQeuPZgspeX7yPtfuxpT6rNtwPVzvoDsykEgZ7X4cb1S7pHNbTHNMkFvuvSvzu",
  "key29": "5ApYFkZerraf5Qguo6CDQREPQYxDnvhfsK7NX3SdmXQzotXDp2N2rKW4iYLqoHbDwJ7xNNdsbwtQtSbmVYnaVX7C",
  "key30": "2HBQfgnjZ4yM9ux8rQ6avLszG7Rt4QTQZYytVZWBZCAC3399MK7TYYCY4idL3mWMRoxZD9J8vcfC41m9EactNF1a",
  "key31": "7db4HALTbyrYdWGmoyuYRrkC9UZTGDTWQPggNWZFZxLdhANJjhUwcQZizveoDzTvdWGqH3qb61HHmtuBduKkQLp",
  "key32": "64ZQrPZ6azw5ZMPP9a2qaeWNt4A754votzRGWojg8bYWPV82cTUVKWTifoMhaWrxJhBJMM83vEeA5BLGqE9D9fcf",
  "key33": "65gJpv6jxekhBhkTLkAbQSGPZqfEnM5dfPbZJm9GYbkKcnPnHSwjxTD5s7ENAJU4ddyBVEVtZCT1R6Dwk4NN2ueT"
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
