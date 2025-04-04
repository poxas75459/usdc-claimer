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
    "2F9TRTJYrC3cywfsZWWf8ng46yQEFRutdPJBDGHEvwXGMaT67WNUqNXH85ksb5mFmTzh9g8thbZ2PQmghKQKtDbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s1i7wHP9VqaCpE7oe7qNM1skcbWhXytxgTjA2Ljx94hZYmEifjYV1rSacPdRQNFregTy1EMDoAgbB41kdnebSnx",
  "key1": "34dagvASRmAQTQDnYEGo4P1cDT8WnYVGXVqYYahyRqN9eqjdgjBBLprVrys3ErPLMSFQUiL394FJvu9auB61wMnx",
  "key2": "XAEX9C4KVqT6rw6prkzsbcXjTjXvfPFNTd9CQiF45aRdWUXMyzA3Fv14zXnMkzYA7vLrYa2LZwMjtNSErpnbqDG",
  "key3": "4C1cswJNvwJUL4RCZCwQ1et5yCXbR3SKFRmP3cTDhxnLAa4kX8AhqADN7FR4pb5nUFSRuv3uUj3zUAQzk24SWE2U",
  "key4": "2LnpBmXKYBPth47fAM2tRegrZuLzS4h8jk2KWGUsRwoa5Bk3JTdTtLbZABUwTCMSPi5TL8qWBVzj9oFskiwwqsNj",
  "key5": "5Ku7k3rdAsvKDwx9VXxxzbSkwi9dntzYHuakMZXhM9giherk9xiPnEJnchvzKa5o8kVsd84g1mGMAgRGUw2JpPGS",
  "key6": "5wBHDN1orwvXRLJU2DcuUUCHd9TBV2ULuB1DPVH8cZCCxeppdRiDJJDSBircpPsCDBJHbKSZ2en5h6HZ26xL9Sd8",
  "key7": "c5pzrFWDuzbRV4svvSqYxFR9ZbeDqTmUbST638fh4CFAwfh4vPvTX8PJp6uhz93xBhmL9qeaocDEDzu1XqRbNR3",
  "key8": "58FsyWPv4npAKJfJeUtYZHyB7Bm3S8AE4bLm82xxNygTLgjSYxj13dFgCQutAe2x4iHn9bAmfGaADLZXhkSJpuWF",
  "key9": "4Pi1pLvd653YHR5pfU4JQyhQVSEHthpJrhg7mwfoMWhrwVpjEJ324jFVmXgpE1Zkb9WqQQt4kE9c8y9Xt4HVdFwj",
  "key10": "3WbMVfFNV26gTpx1QPKKbMeuCuQepx4ajVGbC4XLC3VQghdAnf7Lv6KwijjDMofgC1Tj7b4VZPfjJYrmsrezbwcE",
  "key11": "4JjTPx5MnLonGoSUCxcd3jyo3ggpdgd42Vobikj4fxEx4GSgPV9fHh4KLMLoukoxEu7puNbqHPn8mWNnyaegTiSG",
  "key12": "3vpXpErf2T51bsGoAZUPdZTPHVGZR6UoPMFryjXXwWSvbUSdHFMrfu87j3NJNMp4JW76LET4UojqLnTbiV5ua2q7",
  "key13": "CEANAKBGFjfU6CvWtfWQ9NFpXMhv496AjpCSQBfArfYkZ6X9Tc8cFo2jXU1NwXtMnJBpjs1xuH5WatpS94tj7Eo",
  "key14": "5J14A9RFrBKzFQp1SPEJY7FXoq867H41ouiCdjpXQMcuTcQgTND5hKK39rf5XHMud8JZYJTWy2cdrw6JF8usC4v8",
  "key15": "DnjJAhuHwYpCtDLkThowUsbFBP1dte8QBN11C7ioNWtrRjKNRxcUTcTKPNnrnKj9dRRV9JRjgHvZNbNn4GQsDrj",
  "key16": "2HRdcnUPGy4W6y8eaPAkG549Aio81MGMTFbT6aSmQc5MKmqthSgtVpfuhQ9fBHGJYvP53JMYJPjod9rTNdVkvGgH",
  "key17": "3jypv2NHD5SU1JUdBbHEjeLXPVMAq34a9jdQ7Q3zZkJnXiGsMhGTcjFAqvwB3BnkgD9PAXnK4jauWRAM2PVierKr",
  "key18": "5udnSoTPx1wCKCxFQBNt7pumNfrsmQuKBqR82W9WLMBgCKpqccYKjjUyubtMGguJUDuQWBReyGGiAjhAkg4D5wKG",
  "key19": "49J1zF69FtGyvqDLQN2Mi8rKdHqYMjhSXfaGTqv8w49FNj4Zh2drHy9EPSdrWqEZGHd6rhGvL9qaEtzsuuey2YKa",
  "key20": "4pPeG5vciRWtxEbrjAYAN5JQNWhufB4CJhbhxTnxJzY8VhzmH17LXXWBBwtj5y7EHfFm3i9yAkptesNmFbG7edry",
  "key21": "5ghsFrJqrUirjJFH8sCj5izYxmWEN9wpWf3qFygYtwUL5vUi88rSiVtWe33T5BCTfqj81pMZ7RRDUMuag4v98zQe",
  "key22": "3mpRCSSBaTv68Yc6v66dFdNGdEtZ8HEJP4XMpXDG6z94UCEgDAZHJ1xiuC48TEwLmUn5M6qa7GF54xF2Gg9WLq7J",
  "key23": "5db3TSL9rbD4Mbewmaeb658wkrwt9zo9rMkL8kmfkFPPsUqpSSf4VRQuvno6JzbDMjUdQTM43FUxvGtsq1QB8Z2v",
  "key24": "bCgTASfEFyS3wR6WtTp6UprbDTmzPu7cvW3Y8UJq9h6D6q81BbKPJw1zQvM5YP8z2VdUKUj3qt2iJbJb5m54Q6e",
  "key25": "4oHmHZG4USn7rog4CC1fWsiCDGZMDAmbh54kNjJxrmYJmi9fsZ8chxRwJxQgGzurCMepYDSYYFtHZ3kXb7GrXotd",
  "key26": "2tubsqmbynzybYRFsePW8pMiUUi2fuhnMrLuHsVCHMB2yjFMmjpqnGx9N1RHNDFq9hFrrrroWtApLn3jynTkqcRt",
  "key27": "4YgvrEc6FfEEgjwpXVF31zZLZsUPw9y1DSVfi5Vgn5JJAZrEcMr1aHvh2mqAwcJ9DK8gVdJaikJMpc6V2X7oga7Z",
  "key28": "5xFB7V81USevSaNCMTLWiw2RxegPyAbkAAate77xkRZUyWMCP4hTDmuRBPt8wU6KQxGETqrm8uqEpikYJJLyMYKP",
  "key29": "2KwFjzb89SX92V79zrghFtehJW9iH3X9Ztby1B6EBP6Q4mWg9zy7io17bwEMXN6GRKNP39sbcAePG8AB6C3Ri4zC",
  "key30": "26tpzewkPAZjei6EmyutuozaoY7RfC2ZYAzEsvFCH6wggxfSRpidVz3wRH3jBeKCQcvvszdNZmM1zpSU3i8yqmRJ",
  "key31": "ww32xfb9PjaUv3QCaBq5QWkbd2dHmZ2DVqvpB5HmS5tFr6hPPgRrivGV5rbaDdUCizLTSTAnQ8U8a7oqXyeucjq",
  "key32": "5JR29iR8uu8zzsAyKJRzMGF3RpEPJ9WZmBpH6AvaVbUvfmVnRD8byYMjzq8YCmnPUSWH8zknxbTSUzWNyb8NYL6S",
  "key33": "D2FeyhJscFAmYBUopCV5RdjXiJ8BAWghbMHmQ6Pwr6YrvVTQSsqCS7fDdqTeRDDLZZnk2LhgsCtF9xJLYv1N76K",
  "key34": "yKXqsbogcJGELBKoNzZmHHX6tuhXLCs7JLjCgWfE3xaGViJ1gxWtc2YngCqfmsvUKUv9o1bZZPK7Vd2p8DJUoub",
  "key35": "5ofufNSAfuMF1foYq7WxT71VoNXt7ksPzERT96YgYjCyB9ckXdjZ3mLZfuzmPHC9hAk4uPWeRDQBWsz5oMPiJE7d",
  "key36": "5xvWxRpcUaog3viXeYprgXMwRFu53zeovrZq56VwV3HUyuLzwbWf1vBmpPDxCLiCfwQqg7QW9uUUCxVV5iLtWuTk"
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
