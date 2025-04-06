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
    "TGvwzgZECpxFrcbtiBvq6TxeA93BQstGD4WFhMR7TTUZu4dZ5qRhcnGruqmyQdaBordWSWq3Bw9nCqzKLRDL6Gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r3fXyYr1E4Bad1P55KC2odF56wRf5cSvpNP2uPpDmdiJsNSjMcQNvLvwob7i4giJ1iFo8v1jqDG36sBN1obD4pt",
  "key1": "2sk5dfWuUPCMR4a1HJUhkwXzbywEVKLDPcJhxvTDiw8u4EgpJRoRXmjW4yrDGsVyFdq61AFaSqKVJkqLCSad1Mp7",
  "key2": "4NjHHzxsZLUYYTBchHfUg1xTJL7CiWPsUnWp1x2odDFbgABGk5TepYgiFapGatEQUf3V2oJbA8RQQVaZ2xrMSXVb",
  "key3": "w84jhkDc1zSubZBxmnPxJSaBgKgQiiuaKm9mTwvU5vVik64yeMsvPMcrhPSBiNuz6jq3Nvs8eBJuavXPviFvR2o",
  "key4": "3N5L9yvnVm4AqKpjvk36qY3ZtZsHUWC9C35KHKQKgDNr1cK3dNS27qGHt8mqMEGmWDmW9fEJvtgcJFcWiKPwDRzH",
  "key5": "4vhu5gTMfPdEgxj5wUZvAdnTXeMAxQV93oRW19tEKMhLWzEjTMdg3JGQx76quHxwcEBtJG8z1zBtdTwDzrvFXtRn",
  "key6": "5aiWkj1xHnsvmdFuK8dFPnThAKj97eLRyJFSZxiQMwCA6huxayTHmn3R42BYPBwWvhAFt7LHEUtp33c8kZ4U1RKS",
  "key7": "42CCc3k6DiB9ZqjWAxCVMZCXseRzKQzT1ESDaf2TSE2V1nNSUzBTWuSF9pUfjpRGTcQ7wAvBXg1ZaRzU8AjXAPDd",
  "key8": "5fHtSHXwFDpvUadfYizi3GvSrAsGcYWVXxm44TvQJRYveBfqRiVDJrFFmVbNF9EStkrCaRMzHqgJDYz3DYbs3Urz",
  "key9": "5BaYGNtuCSzAa6z15TTmJiYtcrTLou21dPSJqwo6Acz6EQvJqKaD5rFWHNWmTAvbTWNQ23JHG57dFXsH2pkGaHfh",
  "key10": "3Zo2uPKWuSX2m5qA183m1TgmSWWvrA87oLNrCcabpsjMTpT8oshNMrWELfbiNxZmxP4KtKL26jicaZzV4zzH9cqK",
  "key11": "4xP5PA6zFbP3mjFjU2q6LzpZAu5eofgTUUE2KHTGDmfE1dqqrh78wY7oKGarAr6Nwk3WG2G437Va9dCRqHfYueR2",
  "key12": "5VwCxa7tr7BMYfbkGd3nXqkJnuziXyFQEcNVSV9sTkS3HRCEdhmFd9bvPQ5hTqrnYutYZGJkEhZiCgo1bodEtwS8",
  "key13": "4jAj2oarvrQa9rrhEi2pyEgb5PwMzrgbcXpQeRXqN1hmwwNEQSYTMhG8Tc52P3NYy73NNwNjmrcrVf9ywecHidZQ",
  "key14": "2QXMep1aVwMUb7CXV6t3EnnG6GnTtA8agVZisiTB15kG3cnYF4grTzNzRNSUpFkYp31vHmf1Axgro4i5b7UBPiuD",
  "key15": "44guBdpdJcSRepxDEBSufFNrehD5mVtDXFSuXY4LCLxfATJRJ6RQCRocPbJ13p2PY4wAHmA11YTMwnB4dZ4We8tj",
  "key16": "5BMYj2H2LU2j4R7i3Efd5AaTciMreo4drBqW9BfdKZAwDLXACy7TtQt4PT22C8UUogLwhkU7nJivYiaAXdkXxvK4",
  "key17": "hBcmu2cT2wV8JqXwBCHdXaMNn6V2jcLoDF6wMY61YzEmyVKZZhxwytGcFMtqpndgktRG6pUVrfexZx9QeMvrfZ4",
  "key18": "BBhtstEQVDFTopbSotEue5vf96Ynqfa1CSZrCR6U9gMQx5LurffDdB3GtFSr17untdVr2Z4pU23gehck1QuBof8",
  "key19": "5dLkdJAiBBNqFt2xYfUeXJ8XDpxdrppUsYqKUUWsLuFq4xHnUvHbnK8uz3maeHrJcZpgfvc3ztkpeYga6poXj1ix",
  "key20": "3bxMRYPwh4NgYBL5Gq6CEshSgoKKcz5myXBfE6uw7aeMoiMn4P4FbC8jfwagvswLP9GL6j1QRtSAu56VvvH3EVLP",
  "key21": "4BTg1Pn5JHi8vQybZWSJ8JJWd9XDUhZxmtirKMvKLn1J5UdnNtV5zvK6irGNz9vbmD65rb6cncyXoNsfhJUrDef5",
  "key22": "5kczxWuZCv1eHiKXFoQtQLMbtWJ8WPzKB5gior2HUxLVTCWaiyjx6VtXzHJAoK1EZFE2pH4AabTqxfdgzQaoYaiG",
  "key23": "3XqCTe8YtL8N5FxRbMPFiUr5N6U23hYKoPyPXJdYrfE65pZcHjtcoms812AparjY21LGpsur4XucznmeSW5PD9GK",
  "key24": "6QrAHwqJAxt6VTHn1H5wvux6zfVawR6jA865n4NVGmzwTA39r77stt9J3uM61YbrWdKniciz7izRaMg9xBU34Lq",
  "key25": "3CLEGAiRzCS1jqsyTNoKenfrqqbPEse1wSdZYCdtmvebLwaTs4e2jiRn8TqGk2Wnm773VzMqn3ri1FY9BwL4HQ5E",
  "key26": "BS5EXoAypgiq97Y7sbkfywedKYCsjWjBnDsu61LQHw2ZuBpcKK5vjiRar6xxPwpsN24yTLBzbEupmWK3VDvc8zF",
  "key27": "4v3RFQRKwuZiy5jKtQK5D1S4t4TSHDKrpb1bKVVxHVtE2SNwdjiRe2H6SVC6BfZy8TkzSiXPnCKuhQCjeDWSXMf7",
  "key28": "5seQvc3s5fi8QRq5k1sSbnkvfUWP8x5LSquvW8dccVM3B2sNETHXouraB6HwucMX1qQcP4r4t977jBSH16UbCjv9",
  "key29": "3ZHRMpFT4Ww3AZBpmAeVWo9bWEnbzvo2tq5gHWM3DkUKHVMPqzyE3RxfgaWe3xRQjMUNsppsBYRN72GAG3mBCTtG",
  "key30": "31M2ndpBsDRP66ndQ6rMgF1WSQ8cwJcfNguDMGJovEDXJ8vmVe1EcqtugnBc5TvB9XvcWWSTJNURmTgsfekWuXcz",
  "key31": "3Ude3e9ypXUFEBrgRxUeBqFfPbGbBwBm5dhWZjGYEdF5LkMyEHqtiNXfZj72Actq1vCNdyRVMBFk88U3UdNDU7G8"
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
