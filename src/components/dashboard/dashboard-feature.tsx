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
    "Hkkcun5CB2CCgestVAoCQDHrYsPf86yjTCV5Ci9dttZNRxfe9KyE8o5WZpgTe8xn3c2trxcbBGWDQN66f1u5hP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jF8UuVRyo4GjShRuPGkuoi8axK4SVU33B2qzhh7519hzL7KrS39LVWsNmTmsguS97bhs1kEpk8Gvch7jF3YnAiE",
  "key1": "5FC9EbiEJvWPQ8MzAENeyV6fPXww8fbvFwwjJ9R64MtUqtT6d39Fv2oeVR3SBREJghw36XGRWA32caWdYUBXFpzg",
  "key2": "3LAtorsYhCtGZQE459w31jVrP7bHiJLRwV8UDMxvCzrN92rVJgDmH22hbZz6hVTcWJZJtnUUVZPuUh8oPNRVASMC",
  "key3": "4mcEQTQGiqgCrrZLL4kKirBfJ46CEUn2JnNe8MkQn3BYjnZNNjiRLKB9SAh1Ksw1dYTswei5EnpsSAD6mJcNStgV",
  "key4": "2EJUYu2s9dLaWDNP3Z9V9c4Fr9hJfwMW31EFeSbbh9eamBH3Se5XS37KFsrohqRxGaAGY65ZBJ4RuacHtJGyZumv",
  "key5": "5mTnAo7FTKUrjyKaY7egP6BCbrULwS5J9fmYkDP443q84R7FW9KKS47EF5jwP9QkGCCb8nhvnEXFHuDttiebp67D",
  "key6": "MAoazvHaXHyBnn89EWxp7QhYTNiPFfAsb1G33T6qJ9EmnjxbvvPvRg8cxw7R3tod6RkFJ1k9j1gZ5pMEKFb3Qnh",
  "key7": "H9jZeK1F98i92fztQi6qMarug4Ypg21VmdcgjhRUYLPiqz1GwXxyf6Y6FPkKxUopgRMzG1DEXRzVGqHtDzVxPkK",
  "key8": "4LgCVPV9dToLteq5T6XDKeFQQJgLThbiAkbo1PFv2Cb3Q1LkMdbkmGYGEftSpcjK6VuhpsyyKSy3h5kg8jJqwh9Q",
  "key9": "2kAUz4NZqhDnePJCV7j62HgdTZGQJX5YjL3xwx56RprGnmH5yX6JQYk3AxZxXEj1AGjnf5zjs6BsiCXjksoDfCtM",
  "key10": "5Qsqkj3NHdfBJatY2C5fMZYWGn3A8yvbWSd6y4v13J8vx6mpSSNvPgafH9Mg4QQJ859DGid2BJ5ghYeAVxtz5AxT",
  "key11": "2KjjNVrAk5r31fv4y2PArPimWaKvsBhGyTudQt4eRkMAaN5KR41NkH8sabB4538FpTPjfqSJMsoKL81bj73k891V",
  "key12": "RYbkShFXYood3MxQrjX7pHiUBDm6hq1TzF5LooPB6kSZD8PnJPekQxLaqvCFtXdMdSxxYk2wYBUk5mmn5n2qBXc",
  "key13": "3mWZrNBCE5pg5URSWPUggEB4wXFv7bwRbP6s4RGpZMHsbx5QpLNGV1ukBvd9UsScnLB5n96A5bX9seMstwurbt4h",
  "key14": "4bw5GNDtSqBnsVAK2oNdXnVRL9yREhBcRisWjGfbwRjVVccSipijphJDF8BXtT5S41T4jBtqAdi7p2jhQTcVKKyG",
  "key15": "ouejYBCwsfGgMhZeZBX32ftXJQWHguSmtUAznkTRvctbDkAoHGTzgzzePeovoVN8B3uhqWjT3b5XiEPrJA7vRVs",
  "key16": "LtXgHoXpCryJmduNUYQFBKvK1dPX7GKkpvAqdubEVFf8LCbnSHrh5cXG3YxvZw9WJBpJtVEgx3rsqgUikwnhZ3c",
  "key17": "3efABajWCBDyUVYziop1er1KhvNgBAnCz2J7cPWu1KbUf79diwSjApqAtcqpJ3odFPuJSDadA7wm8MssGGyhU7j8",
  "key18": "gzJMn9kjHZDKK9KHKonBGGqFSG1N9ECGnxxDWiwGkicAJP45Nt9p9sA8Y943T3J9Ln7hXhvQHfRnLdysqLK7WwY",
  "key19": "5c9V6ha3xT64fdfKRSAvjcd8uEw4cUxntiD5z5AMYEJy8DYF472c3NrkXgxp8hy2fFRh7kYts7G1aRNeZ7J9F1u3",
  "key20": "4qEQPNBcx26e1GsRZCBQUUV5wVHVUtFkC8zruEPZ373vWnuvkDw1KtnkzcjFSReD3u5PEfqJR1UUj61W5dmnvPY1",
  "key21": "5JThwBQvvc1AKjhokEDVb2DppzdL4Ko4nPJCx1yqhHRTQc89KVpA9LxgxYPpK611pMuLEDuFDsRPESwZQNK5BnJv",
  "key22": "2d6wcJCjKPEpw4UKQWi8hiQDj3rEyXjewn1fZ9yehcyxihGRr5TEKNRLNFpXrHmcqE3w2f2qkbXRx9hjyhZxcgU4",
  "key23": "v19YAh9ePDgdxBF17Sak6YCtSoeGvYExGPHkx4p8uHVu7RRcQ9nyZwgABMbbUvFRK8U7hcryo6vwrXueLNM5oSv",
  "key24": "5aCfrjfRVzxiUjWb5RUEHZe8rjkZvRxdvwUxDhJUoasTTdeDTd2qJFa8bhXEJuL3bKDM4LS8ptwLozH44TejqzDM",
  "key25": "2JWz5vREsuCCXTcY2EcZpUpNLazDQ1Q2ZEpJQ4AGdWfTXFEkM4VcSdhfmeyEKCoKuQ41WmGDaBe7UD6KTrevBTD3",
  "key26": "3UDQEwCNVJ7JhH61atDRRTtddGY58NLUDLimbrNZhcQAhadZP3rediawyWqoggDF4LcLH4zodJzjHMXcMZJK4dNt",
  "key27": "2NNxwVwSJCqapgiC1CHTob4RTejzRtr2JzJSsioddxrriSjF1ZePxeRdtvuYdRxA3fChJ5Re2D5CLCD65W9p3RF9"
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
