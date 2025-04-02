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
    "3FixgcidAChyCbrop9cz93tHMRTmM7qNyW7siAFgYx4hAdSKbBwmoy5Vs7jUGArE3zioJhc8WyCCqpnXZi3neQ1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zvzrPmueVADArj76ECVowaNknazaYx5kLoH8KTumTNJaPJrcRanXwHVPAXyvztdwKBD19t5ZYESNpKQzTKSpVoj",
  "key1": "2WxHKYPHnxwGc3zAWvbMuarFXvK4iTAPJuvNy4gUdkjAFe6R2VTf27Ukk4L1Ts9zKAyerwU2n3J3uYgvXaJgZgRw",
  "key2": "2s3Yx366thEsMKddRvBoSMPJVAzFGGyhE4e4wTXjCNGx4R8EM1Za5p15ByknjfxcpB5feqad9V5A9XCkrjpDTnVF",
  "key3": "aX1n5eT9PFQprtwNrGB4hzd28tntEukBjsPngQCb76Gpg98rda8VdrbMxyx4atJkMZD2w96fQ2aZwdDEszo4zvy",
  "key4": "iFqdhHVMVKQsksjARFtsWykRnDrhuVQScrNMWWr5rxm9Z7DTjwGA11F7RxW1rcR1NViXNasHMv873NjLC2fRCf3",
  "key5": "2HRKqrjoqK9zhzp3PaMuXkomWDn9vGHmT4S33fTAcQCxwuVCKZy9DJS9u19kTDpR4j85ukkEBa77fMDWnuWs879d",
  "key6": "5M25rRN1eskq8niVProExpLFgbkGuFXf7YfH7ggLojtDsUGJfp8Lhh2esdTp1PyYtARnenpDBs6177eEBcVWDeyW",
  "key7": "5qm6ysSMsVw9ozsKPELC5awy1nNbGSd2ptkGFUaWf2kP546tzhr6yqRpiaUsbdEw9bNpUobeV7ZMvMzqyY1GSJW",
  "key8": "5WoJvGR5Bv6ChQdkyqA3e26AoE3d84WrxHqdbL4TBGRdrWTafFqnLArQwqoNfC3nbMxnCC37QyEtvHrCTbJhpZNr",
  "key9": "2qHY2ENjCmP7wdGf5yyAhuPfd7yk7TtJyhBCypaY7xq7mkJXLiXAdNJfHEGC1yLP5iHKn4bNW3ACAUrthcfiAEtU",
  "key10": "669HRtHMXZPiCh76KcTuF7vMejVyB9kZsxkcixudqigUQhEFcknHWowN756Hz1Sjyd87mAnjXcAWBgRfA7XPUrZL",
  "key11": "3mbyMVS5aK59XU5e3UykzzG7htdoxrdAmWegGbukKByUXZABw7ELuHeCVq1B16PvbZrMFmixqGK9EfX5qreyiwQs",
  "key12": "sGiiGk2Qqs8adwNS1EceMjSobRBRoinBYVQYTLX9MccGCvcpecpvggBiaK7ANim272zZC51U2b2qJdNYh7h2dzP",
  "key13": "2kA3wQ1CgGWvNAoRnLywdGDNTP9FvfnwgcMXWyJ46XA9Mnu8jj6joG6Dto2Hg1xDo9gQEMfZffw2cK9QM95ALdUZ",
  "key14": "4K2bBMTBMekjRiZDNfpjXacGGrXQrD6b8eNCM8pBzC5MKPpFTW2YLK87GftTdgBewhrGLahU4WNaVLzZ7VCdm7ud",
  "key15": "5Q4qz4JMP3xsKCXB2xsFeufqf9ifMEP8jFewWE2Kn6rPu33UX1XpksuiAhwfTxskacs4DMa2QtHmBmSDL7DqVPJf",
  "key16": "4JQz1BhmQgv6TFTMnXNNJGXQyg58iXjU31w4gYQUK3xvYm8oEC6waaQT5i6U1uVMNAZ4yVkJYyB438scoKHxqgnE",
  "key17": "5PGq5jFTiH5TpC3DnMVDJ5uAxzGQypcDnpnSX3NmAjP4nE7fTbPZBYwrivWa7L7o8ocLpkL6AwJ8BSErBWUiWEzU",
  "key18": "2jqJvwvEtqaUfjvbVDxzb8UoZREbJQrykSR374F9Kt9uo4LQwtWSB9AAUh2qq7UJHe9tVrmf7mgJi6Ujsvd1rAKQ",
  "key19": "36kZHQWgXs9rmS4Mg7EcdSV9FbmWa8yp6obFWU1agYkhZfpA9oBUSbgw4pBjjAVojk7dWVQP77PwowATUJjFANTh",
  "key20": "1vxdcRNR2VNUDwiWJA7rS1jVdksTeXV79As1SJ1bDgQjJcxM9kL9pDZZZjA6EVzgXmStXkFoHM9nPxXCjpFCXp4",
  "key21": "3oCVZ94XrGwKZQZm9XNS8VXYqLM9diLcupWuZrBuSkt9DF4NhuPiVy6giRFsY3v23dnYJVnHtJRNgyE5uqDVvKEL",
  "key22": "2b7X9FEDr6BmwGFYcjDqm9vaG4Fi643tmPKGh7gV3w4iUiWK9ETntCydLXPsWEeeSrQ4iyoDqzZxNn7jCDy3jk7F",
  "key23": "5PWasQrHyyodcXAD6AkhHhwEQ7Hssh3szsBoz4oGBkTgkDHTChngMc8FqkFp4u4cMDWRTHdSJiBsmnMEBJWmbaPk",
  "key24": "61d79aV6G9rFuXhxnh1bHutfbvV5WtYWGetjF88X5LRix1adgJsU7tsG2mnVCW6JXNeaWXN5aj3VsJTa4MbRU3Cy",
  "key25": "4Thfb4YkMYan2QSqayjreU3D6eTi5ucp1DswL5bKBKzWTT5sQkbGocDk6NBVokaPbRrRVW81tep4nWWjjkvVTYPX",
  "key26": "5P2PLYejubecxnpyLEWJuipMZecevvcVBvVcrXvwxoRTERm1FgV7RDk9PVAYj7Rwyyq6NmDcdm3Xba4C45zLpW6u",
  "key27": "BG5ZYx7wtNyVbXqwMQQS5kQdkfMoT7mLctPxDJZUBKsp3H7mkoGVmx1ZaTp3kiWP4fn5ARsUxrmCSwxQZQy5x3r"
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
