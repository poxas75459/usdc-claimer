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
    "iEnmCXVCQfHp6gc8AVSPBBSkDRYU7J5A7DFmsHbetGpST38jTVtpA68Goy44ft2Yh2ghKjbX5ux7YTydpzGQs3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w1dgQE8a5DJDv7exLtyJsxpg3Ydi7Nhd8YbZRfhcbvHUf56TU3RMwYPvtdnSLYA83NsrFrSCsQRF1TLdzvStABR",
  "key1": "39rwpDSZjdTbFVkiSHdggkmPZfpJjWpMZizwKsBg7WgzFrCvaHsGPkK9eXxTjrkzqNizkY4Emru5x7GNh67xms53",
  "key2": "4eE5vHbKaZTkp3Lh2kL37V1rXCvRj9aU6MCyKHszeidFmaRZLWwr77zjannoy9G6hZXMEJJDWT9j8DmhunGNqTxP",
  "key3": "42HeXdibPqnPDcrqQ21SP3YkYhBMC4PjTDDu5y8Sc9gCCNuvsLbHXSefLcf8Edz2dVuqzUJHgkSvcBwBouaGArsY",
  "key4": "3pgEAihFrg9b5QCdv7E8cg1UD4S6Ceyg27vFX7SU7dZwA66ZfdBV5EAJgTequAJn9BJwoSTvKFRhAMoiUwGd7nXa",
  "key5": "MAb2PSVArZuj6heakpsKn3oPAMre3FdXcL4TdZmFfXwYssKb4uhXUnDdDiVgDCS1VreA88Pzxsf1fChc4K27b1q",
  "key6": "4faYg8bHkidZnjHDqXHdJ93djghtpeGGGTUijmfz3etyZTnwGGPWqReys8Pr44uwyXaLDyXVYBR9GmFVZvpWG9K1",
  "key7": "5HfxVFitWH4EzM65jCnaQbW4VGmCkutwG74nHouW62xZVTSNE8uuZZr52Wddsa4KBscr1EoXkPCaqiMnzcxfWY13",
  "key8": "4j8E5N3F5xLy9ijfSDsPeTWARRFQtzoJfatRHXoea12Csqbuc1dqeMxjRnXcCsUz3xzJY2MM9k8Xb7T81HoykCb5",
  "key9": "DrV8K8iKLLXa2gU5P6m6ut7D9gJyFHktHseXsE8q2SVG7FLv7sgX8XX7QPJDyxPY66bPmK9v5Ag6BLGaAa8NnBd",
  "key10": "2vKa2Mssw3ZmBk5NGjwwSoERfYNDUk7Bk7roBPMPjasrrwKo6AuBJed9mhwnNrsM1M956iNmyDv6UhxeycQtx65c",
  "key11": "3eVMgQ1xjxfW5BcKYpsMnbEcaKm2X1fWzzy9jcq36kr4ouHXCMBEMATbFRiDz1NDnmmNWpwH8oxxwqcXbeMHLUk1",
  "key12": "3S3uFoCXaS8bGiPBpvd3PohBHFBAmGQKTxEvJZUgSGM2nK6cd5ZsXBBB43quDGm7iP2MDYBRtSd4X4cyBTttSwFU",
  "key13": "4VpCuNkQZzABmqanxQuxV3TJnV81P6MVjpHnEVDtGYFceEEc4zeqhLhR5eEpGr9mrrtUhhez1FhUqVJg9gNMuzXN",
  "key14": "5bFfHp8ARSFvrak7LQvbPEdjviELzV8SU2W7ehfEcMu51vnBzzn35ggQMW7NV8FzQWq8sFVWyvB8FS95TF1KBz8X",
  "key15": "3TSf3W97cAkA9q4mraMCsvAJ58CZREKMFWAEhfFXHuFJBKDrTzHRwMEAgFEZnfNu3nTtgvnXSBNXSqRUM6xJnxB5",
  "key16": "4Mq74H6nkx9FiCVsBfH8mAmoCmhAQbRaxV5FRjfMqv9vwbrRYHoyEeGwZbURU29WAwfRK33tShn9ik4rhN9yZxyD",
  "key17": "4RPNVVVMVYxGZjm4C9WjnoQozF5VVvn2Xe6aJ7Fe3x3i66YsV9QbRKivoi65QCVWuxXErFtr59gFmmtf63uSDUwr",
  "key18": "3TwqaPyJLNwWxDLjiFkDNfCmfABpy3K3cH75YTBtBNp8AbcRq9CVAbdtAJHTb8sSagtuwxF2psVXhvG3G69PqX3W",
  "key19": "2NbGEkhjewkBaAwq4Gpz5cXgBV9DGNqsDfPRe2oUxABtQSS1bvReDFPZifcKZwYhMEqyVM58yq9tSRdirsqfHyR6",
  "key20": "5TTtQnm7sVc243dSyqRZws4oxR9x91Bi4UKSgphtPojw66LfCYmkcaRuepHAkaSNWyHgrBJFccvZps2Yop25n9Dw",
  "key21": "zZTSfLMte9HNFGUM3U5GvPAeEhLM3e4kgVf6JtagskTAyiGs3dDTgrZ7okPvqk7QajjJ9Xbawm6JkvsuLh3AwUU",
  "key22": "4oxAqU7jfYy5XzZgkXK18qiUqB9eakhQLYZGPumLxCR5RVFhSfci4vXTFSemAvHciPox4928UZ3Gb7ApiW2is54W",
  "key23": "3WbZSFR7H11ar7qhf31qf6Az6aT9Ui4QivikfoLyneJPsxP8fE3hpVqTAeVLFoxNECurZqxKKphXewYi8QU8Q8qB",
  "key24": "3HSqvnxLSBnrEc15rf3jtvuN7VZ29pUC2gUErykjGH4FXQYdtEEah8W94Z6uDVofE5P8Wbb7kAeD5sVrXpBgVjN3",
  "key25": "5oVzTdt4um67aifRBpKicgU4y8k183cu3HkrQSLfcbcveXBvPjGXFJTmC4DnFmXTtb3na29HqpWFh1VZf6CgCDC1",
  "key26": "5DUCiPtL7VkgxHbsR13ZN2HiXrEEUe9anQXUHPugjUhxRobjwqcBPZBCRrekuX717X2Gu5TT8xqaGe9mhGK41iEK",
  "key27": "2GnKaukpJxejSBFrrcaj4e5fhYvGwPdGxGWzCLgETX8KrnGUtT8F4bAvRZB8b9XyWeKWPv2bwoWQrEstckgvU1Cj",
  "key28": "48FFTUckLtXPk6t2TMhS5xMBdTwgPvDcVtQmW43fuBQJAQmcziJEtyDfJnhZzz9JKd9ANx5XSPebrqBuRypYXjFZ",
  "key29": "5Vvr3t18JC7iavLSpZuUYckLoC9FNvuDCmzVe63sVWDgxQ3dDXZ7fNfCDXe2dEa23dhfFkjjw9Ebu5fUjnGDX9HY",
  "key30": "H1QSHPX2DmJQSYvrokifdKo3vEdKQWZMH68BdxjJQZFn9nrNV7kbZQccCDjAwPDGBThkLEcK7ptTNz8XAJzcmYe",
  "key31": "2QQn8GETDZXrkJVzz6dpAjaf1KGQFdUKgJfuDSSrYxjSZcy5Wawp8QupWpNxDpQFvUGYRN9SfaZszc2WvPX5a7RG",
  "key32": "rudok3EitffkRmj9iy6UHeUDFYb6JTyPAChLBAkorz2tNyZBL18JAgp26TjBtuYEz5tGw1N4EFNByfubNTmVpmJ",
  "key33": "5AneeegPg9Rxo6grJ8sUYb2CV9yLWsg2nKuiiQ7FK7kaDaLxjp2JZtxukzJ1cZmhdSgoMp4LFzcdEaEW6qpGNdgn",
  "key34": "2Eku7S6tTg7GP5XpLdpZN3Qo5NaYiwC3rWdgoKRaNeJwhfzhNWj6PquuwzkJfaXwEAku1fivhVAzyg2vqaC4NkZA",
  "key35": "2ULqfR1qkiy69EcwuM5QMjJi6x3gZX3u9ih2jzmdWv3a8u9vQjLJ4vP33J8imQh7chHYjydJ3mRLYivh39R2gAmP"
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
