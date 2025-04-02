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
    "5CRYWbZUfu3jRgqHzre3NXfMqv1K2DxGBAB48x3wAqJ5X7w4JHszA3ToL6PMngG7TuWKSPZRqYXwbejepEhz1k33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FJ4n5JMLPHairDVQNFWHNMhXCRbH26kWxeReryhVBdTm1CRdaCv6GoMRKYU7AhBYBW86u2rBRDVAmwBdSLnA7L",
  "key1": "4meNis6gLvBgMurMeLZtbajVQY6mUrhD4N7Mpkzdpy6wVadgyfYoKk4xz5S9JcHwPCSpruwT3iSMw3Gx86dX1mK8",
  "key2": "5cdkRRzVs1ViVefZqGgZdgTVJWPS3tXk6L1fexFV2zZ4qLQGMMkahbzeGdKuYtmVscXY7ydGypn8zNt1fJwmo9KC",
  "key3": "47LjzCAc4V1ZuF49VUfVtVeiTcAh3z5Z6cJ1qyarihLQjtFstMa8R62wnnnEGJcZpqCq7BVJLac4x4N9LzkgwYDH",
  "key4": "41ErB4baMWMYFJy7xGbgGDRKjjJqFmoQ4nfaFmmhLKo2QAs5aGmQm24n8Rx29BAZsdNWzRhDtTnXH2enm1K51mea",
  "key5": "2Y2vo2QhK8PRdvJMfbY8sP95JCBkoiDuU5q99iTUckZGT4Tvgx2Znay5KShFfSWxqbZ7npR2EeEj7nBXbEwM9mG6",
  "key6": "24DotXkjF1AHcTLisVaHCHGyQUsBCdkFVhVe5Zb5VXiGPU9xt56kNTYwZpoNyDJZLUFg2GvSSjiKQB3DwXkAZE9e",
  "key7": "YNQsuNX861gQBuB5hzxwuwoq9XKGf28mcrdtDYc8DTedE5af4xiGQah82jUbFJTduNe8DLkNXHsP27x2iur2VJa",
  "key8": "5DDMMjZ62t1SNq9a7PSdh32LCSqcByBXdHhTLoEeKJPhyo3xMaLXXE4z4RktfooiBVSm6U3EtdmMPXWYxQn9gE6e",
  "key9": "2QNQehCxX6gJ5FBx2Fs6XgqERyAiBMWWxrXT8PcUMn6n7xcV9QGd7DzA8izvAkToFr4TSxbyeMHCLPKAmfZo9N2e",
  "key10": "2WjU7PQaFGKW3DbehpD5zXaAXWccMDEznsWDULtBqhtg6xrYRw52z6kHPQM71VQ9yKSNPLS5nJjemLhqWqsszCDL",
  "key11": "5NF1qFeYT74vKwgqJa37yp6oXfB7hKymQUTYa9XRX6nfRXrguHkuvheNbKyebkHz37BJa7UDxGYnTeiB61DnhuZc",
  "key12": "3oUXonPVuV7tyNJDib8FirSzbBtHM1KGZeofjWoAZUqQu7S67TLaKf8Vcoh6uJEWAgxqDR1KZVCvbvyzaYh4GmbC",
  "key13": "5vq88eZJdpbpdUGvWtAuQseBdNPvYT9e3Jfn7nygC7ykBYQERkGdZSHHadEHjFV1cDuTFL5D69hczmyQC5Luebs3",
  "key14": "3ofjWaTTndY8fic2MRHTReexXWjtU51QQK97Bq9nHvZjyfUVPwGzMGkR98GdaakyRkoPvz4jgcm2ahpqmjJNMn2B",
  "key15": "4S87XUY78aaw3dmm7889jXUubkP8w6uV6FwXEhSXWrXXUicFj84nySdfcm6mt5WaFr5gxepBqyfS9vMPLmDbs1r1",
  "key16": "4uzkBspgrmXEVMVdadbur7cKGiAVeaTdfxuQQfaSXZGZzczsVd54q9HNa5ipuV4DSH3fuaXSgypS9pscgYLdmh3S",
  "key17": "4asZmwfPXs8hCDJDyWXzuSon6QNhdiHWfzUoHjuxNeE2EGJRRwHfCuwaY4ptziqZGCZPmrGNjbn932mkhN15HiSv",
  "key18": "H14DWDsLUJX6g4DakYXGmu1h4Lpg5v4H9rY7ibomPxfe7ewEVn4NbYQckX7k9MkHCCubJ1XitAabxXhP5eUbyUQ",
  "key19": "5xDXmh9A9CGFptnbFvqFiDWRNmXD2EX8157jgWNpa2TUJJ1iKWghFfutWDTUQ8KGsvrJbsq8fEZdFdVLjLgdfJa4",
  "key20": "2DXNrocey6UnzDxJwHA6FjeKXvQSXDbs6j9bpVCvnKCv5VH2RJf2VBpBGhF5AJBnEXtQsyMuWE7TGancJB11P3sk",
  "key21": "3B8YTTkJMp7cBLXWpq4HZJ3LRuWCutRUXUYgSpUdEMkZhod7ZmxDpAa19dcJpNz2XY9Sw6vxGjX2EDjxfBVhmxwm",
  "key22": "62yvP9D41DNLFw2a1CeU3BSfgzLXVgZsd7kgaf6kGu2pQPGeSz4qPJQvUzNPWj1xm8LNVYhzi2dsBhgpMTAuyoYB",
  "key23": "2RHpXEWbyXhUL1qazUnW8vGAUsHF48hTYczBmyyMFSL6uJPhPpW3BqE5XxonZjSpHwF4VC2HRWxRrzdTQMsURTKe",
  "key24": "2QHQx4nZBNd9U4gstdnGJeqQt9jGcU7ARrneG4GxLa7qGKKhnaNFECCajhQ99d8jfThdhRNbqoLLGiszQWQChce9"
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
