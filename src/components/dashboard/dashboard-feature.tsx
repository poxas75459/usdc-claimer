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
    "ppJu6eqtuTZa37gAFxfupRDurgaBftbPA1xMU8F1b1dN1gpfMcdSRJ9Dh3p6HzWUpbSjEGmBt8jUX2o2oNziq2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CyP1jqg7nDo5VhddEuHnYNa7eZEyw554DAJ4XxwoLXsJNj5ZipMC1sgtoBHzhmDXqXUsXZGFR2wJGGdoWmRdBFS",
  "key1": "3nZhU76QPf4JZWAMFAqSSAy1JsjW6WWGn64FYewixC3ZCF67ymuPSFrKVsNaCvd4DiSGtBajrdn3AiPyYxmodzRj",
  "key2": "37QbqMMi6wEbUKkB2ga7bxdXtPeyyBbT4uLZJMadiuLh1pBZzojbSVqzR9ZyFiobQLfkFdSDGKmnEuocgqEW8qTK",
  "key3": "S2gXc4jTMxVhN83FsPbZfAwEQTutJp97Kv7MKe2mAyN5WLQHiL5pnLVRAEGbwm47nxRkyfHs8ehLbAubUvWCkrZ",
  "key4": "2GRmW6pzPZrdDzW3qPgn8uZUXkrjQncTg4Fk5FPutEMEQpk7Uaoz1DazMiq8Ucgi1dbJtkDyMdky8yuA1S9feTfK",
  "key5": "5HnniTHFAXRwx1nSMP8AUnXLsHnBt6PDkxdYhQEvw2iFQnZobCUgAp9NUFw3icXSLhAd29bjFDPdyMwLBATQyWsE",
  "key6": "3QbaTit8d2esLHxBdHdYYt8FsmnGCsDbzbEEzNjbYRyFS8kqVxWqhi3teqr3kbBkMPUyn2kSp3nHk6U2VP9B3yMm",
  "key7": "635URgZAgZgF9GYZeXWZNEnEwRbvZmVHC5xpm8MNfUi6qFYyQR8JiBikuNJHBnMRV8hsTrXttVj4n4tb6XSNB4vb",
  "key8": "5FjvupW8wfLG4VJm7sGQEUGjQpZJJh7H7MpNszTSyfQjiPKL3CRZvjcwMW5SVHmGQzv38iZyyKjurctott8qNVdP",
  "key9": "55R6H8sRXcdb78kpZVaqk1yHaEyTmkCPpjwkbDzczUXe7uB4PcHGByw83HBjvcr6cARqGgaH7yaoXAJWwDwXAdDM",
  "key10": "33iDtk5mGWg8Lubv6z6QPKRwT6TAqvJLaG1fMn65ntAFbEWFNbBXY8yamtDo4Wok74AwPbVekEBkJwSuKJ3UfDMS",
  "key11": "5GMK8iLhpTMfSjPVomGfWprzHrbFxdz76BsxuzKnPCxg882bsjaJYy6U2ZbMY2rqeLaX7gDeXs7Eev7jnqk3LyRV",
  "key12": "5nkd3JAiFfCqVDDxDjR62YPgroJHpqoQf2iu8iuePDiKhSRUYSgAX3QPdtUT2uyLiv6JRvWUkpGVVS7uVBSAw3gS",
  "key13": "W4DFWKb8j7F8x2CoRZwLuxmvdw5e4JWy41gca9iLBNPHHhMJEfahQ36Zmts7cdNYygme69V1JxWgMWgkoA1oEDw",
  "key14": "343YjPi7NedpST34oSKwfShPhxZ8N7pBj15oDjUwSDf65os3B7skgJMnT7KSuUZmVbj2wJgcC5XXsWo7SafjvgeW",
  "key15": "3omQWihmyw34S5m9hi9RsBEYz7CGn3QSCWEN5SYcHoQzH7BB8wLXjhVfAgu8hnzFfMDSKheEbGY5RpRv1ZxSdPSE",
  "key16": "46hv4WKn65tqge6fDZc49684FgCLWFvFvKqwb1AxnULfhLr9Qv1eePEosyFRmJ4ik2fLnEfFjMLTKriPNj8AV4Ws",
  "key17": "TkC6TAiarpmCYziEZg7hVXCJSvL29gkgrTiEvKaji2ULVYuJh5a3rZATgPdsFgL2tDwAs2Efdt89YdsFxb8AHN1",
  "key18": "4fYTgPieZQXw6VmxRjFw6wm2T9gTNbJ7FwzeSvSy1SiDHghVjLvxdb4PBLNNGn89ypxmc5J3Be5rpuKx5UeHztGC",
  "key19": "j61mYLoVDNLPuefmxdzxAczwqPbpyowh5d9NLa2qU3btFmPm366ygdyzNFkZmDuXsZ5fkGfVKGxAW8X9geUv6Dx",
  "key20": "2mTZQB2saNeEmk4au8mE15ddo5PeA6LWcBy8cww8EgDpZ7S1ptTcMkAFu3QEjeXtrBX7onQLGbTNPWi16qMcLerc",
  "key21": "nydLrEv5Txf534eqwb8LTV6RCs7N9wVjwLH68ffNAgkHpKPpGGyN97fzFtD1Dov47W2Quub9NdKt5iYZ2zC8ke4",
  "key22": "5RXvMHH7z4dQvUXx5AtMRmDr4SfM864KNajoei3smV9zkxHscJQcuBbCpPn3ioRNU38PT4KdiisqSdvYQLAbFzwJ",
  "key23": "4QWuXqJ14awi2ANSggyzAoyeD2AQi9HYVraBUvTSoA9P8wTaJgqZEh7mhrZ7DEHdWtDWuJ2AsCdtNJvVptVggAXw",
  "key24": "3kQbcLxTmPZCDLs24SvQAn2unDjJRGvELxdBEMFhvNQRr6S4Ftp8oK9PfFAXzyt8d3fHHjPoRtnEx561Q4pRcyQu",
  "key25": "51rRnrriqP6VWbKGQbE6MrMBppXooUhd4bQdhnX4zubV6gzYv8NEZsf4YjQ6QkfmB9LFpzipm618UYEG6PvA9TDb",
  "key26": "5aFbptSPZjWkcii8wYk6CDtkroBVutHajUCjnZV5xNHjv2dNXU9Rgxrw8NtWofA2KfM8BkimAf2bgJRnrRonL15x",
  "key27": "2Jnc4E5YdBt3PDXGxMHgbWMnAQwceqFDt9PiVajmdDDtThm2mrFnveBTs8ZMzkzZyfrpD7xkYwQgzzqpBEwyF1f8"
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
