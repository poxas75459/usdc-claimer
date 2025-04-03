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
    "2BTD2XbdNdAXhUQQS65jybWRxyDs3Qv7ostndQM45k6jPwH3okExjVu37M9DrazHgoUn1zwro9LVuDb5CkR4U6ov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TuVsuUSLgUXhwqwLCSUCAT5CktBeCr2iWgKtzDM7D7DiHbyYPyYaUMoynWqytBvTiVZAPuV9GHbpYMdVvmQuajc",
  "key1": "3JUFtkk4CoqpomwCCDLgNqJggr5zfdn5bj9iXcP2n5UF6iB8Ra5cKopVVLrsyQicTcCaKFxsFRaBUgjwNq3gerKc",
  "key2": "rgyog4zxM6b43E2KxGbdh6deJ2Mwb1LdMxGV3rT2Md754WYfR9NpPNQe9s23kWans8Z2hh6t1HT1EZcsZFGWscW",
  "key3": "3dEat9ChGbzvgsGHddNNrnFk7JGj9SMuWxE6tiEMsZWLUBirdjxVdeqwDUez52mvGCUBHYFrrz7xzQBuprze1X78",
  "key4": "5ZXaDSf4zWGFCToRNPG8ajdAPZeN7wuXJJNj6prwEbzJbe9MnzsinjH1M9MDa7s4hoDmjh8C6XxwA2f4N9EyZw66",
  "key5": "3Vygpxc7J8YxrtBpyS8heaZkQXwT71qhSwjuRncydxz96wKqZovwTLcrUsksemjnXz9C9kQjbtjxGWbcnR6AUeGd",
  "key6": "2Qetyik8NWdtjzqFoBhbEQXn3v8DqizxupFMmhUsJcKPrh9Uj95K45K4ok4H28MFuoLUijaxQi3RQtCX6H6pWNzN",
  "key7": "1Hot2AAeBzgYhvmToLriyDpYbyT6KZGjSp89ksLB8S8JWSF9AiqZM8qTaFdPvaZAKLoZf2DyCqRCmioxv25138v",
  "key8": "64stTKQB7yynB5ogUpVWiA95R899MZpKidvZy27uBe6hTnRgqH2mkqGGAhUjS9LA8bLFoaudQcQSuafmt7cS7Ymd",
  "key9": "5Ho9LHb2s59RCa7dVU22ECQ4XnZZtdLUzwoHhEYWvaDR4bdHDX5zn3yNcJivA5gRVLwT593NEC5NuBAyg3bmqn2T",
  "key10": "2Y9T2PUWk6N7XzenCYibaBqoQXzfCFnfcYQED42hWp8hNUHKavSuay9BmFf2Ftppx8oi1xwa3bmXGd4b19TSDrpH",
  "key11": "yDTQt4HwykfEmapQS933tfdn1nrGSFpBJU5EzmmgQVir7U92PhqzxgBwGvD3PHMxyAEcBqwu3LNpWg4G5rMpefs",
  "key12": "cBkr8Qw9CQR72S7JCCgXB62Ya2dA5ue316SQuF2ubp7drmowxqfyqC3wY48evonTEyPaT2ruTAnvkHDC2BGAV4e",
  "key13": "2t2VdfVxVn7D9fv1dnW7UDw29aAvsqMKimdCc36NxkV4cusjBroc7PdUkBSfUDARxs4schViKsVbDpzpoBBfydA3",
  "key14": "2hBfxGKFdgnCSHtgadwqCenuggRfoeENpYruZmiz78MKVygDDD2BH1kYzGpgRLdAyTmPDmtpiQ9Bh9GhxdhoNS8G",
  "key15": "PYpMzGiQZmBuNJXSCRiuz8Xp4pU61AGiW4DpakQCbjPR26SsbYKuKBRgQK1k9LeDza4m4k6wnc5QLNj3CoW2X7s",
  "key16": "2F4FTKJVmNKF7xoEXjtp9rgNcQbJwgp2zxg5GtBAMFScnucXkqekCEAZ4aA62Bk8u4Ww2fL6DUe2cxKLks9KgHpm",
  "key17": "3nmXvNreTt5ohCQDdX5tf8zvYVbeuWXkvPbaCs2WbBBMV9ZpCZ9dFEpnuE7LxYSkhNQqZheDLG5QASAw8gXbq3GY",
  "key18": "FGQtRaci1dE3NeyukmQFR4jidzrHGHwLcdvqKpoUCN27ixX13dJDYAQLzSAkRTtxb5WQxfS7fNYV9GLnadd5cgJ",
  "key19": "3neLCSHstDExjERr5zD6eS1f3RyFnxiGscaqZXZjtaprW1YLTjJMD88zaFFgzjnjnGBDxpBFWLypT8hfqVdFgpnF",
  "key20": "Qyx5BtiAhGPUu2s6LuESbB8BaDs2ap49jrCVF6FpY1dAu28Yvnqd19u9AyLHXDk9FovYf9ZygMJS4ALSqgUAmXn",
  "key21": "2jqYMqGrsDbZPmPAGZC8eAqvBggedSJLGcdfrawzKtcNLabPJdRoh36kD6PiatPRSo4PouwFeqAFavpjRQ5UxknV",
  "key22": "5csrEW3RnJWs6bond47eRRyidC2ksa8duRQs2DeNVziijosbbo9SGoWDKQL5TUMM81TqsCXhrtcHLi7Ucv1gnB7D",
  "key23": "31Pfw2zSJpD58sDBPLAKqqz6AfQHiKG5EZ9xQDYzauEorp4bee3HWoiEib4X5phAbaPD9hs9aaYJoGdbncqUXKSe",
  "key24": "3tBSeBE3kRGYBuFoTd4VGUVAvunncaBgyk7ncQ8fLGRkqMSLK7ZqKcFSXegsSDB2LL1gtDRzKtzZspH7q9Dct22B",
  "key25": "pq53GpvqnU1wemoRPJCxcQPX4xANfSz3tmkCFauqrPbCStPvzZsGnN2CnhhdpZQDaX1bKBiBnGJPF8wLFBNQAtA",
  "key26": "38soSaBPgs9pJvx3689VMmd8nFEMivzZuRkWepSyeeAdtGzfGij4gYzV5so9FfMJs1rCKpBknzRwQKng2WHhq8nN",
  "key27": "m824mv124NzqJeJ4eCMAxyHq6JaJud3HC8xsB74XBTe38guoSbSiH6bGV1pteSkt8awk34tmPQPuvmkvpwvaVez",
  "key28": "WHra1gZZpboxhP8CZE49uPyRpS12Wpp4AfDsMzkTrYBFHvzsBWmoUoaQpZ6BYeeJfYgH8eTnRGnSCF3ugopt2Th",
  "key29": "4MAkS7CrS3UUoQ5HSu3icPaVQcdB7j4ixm5sZgfUgTqTYYaGfMTf8UmCwFFhsnEnwhLGaMzaqmZZE2zyxfiguCVd",
  "key30": "fwdvDm6rmZL3SYjR5m8nCFSX4YzF1fxq6GdGDGcvBEfJZTosVpw7z2d7TGFtuUYnmynb7TM9gSGJXf5dpwEaehg",
  "key31": "4wqBS7Xa5bSYD7Kpa5MBwCGi3Ddw8G85HHbSYjcQjGeXWMiF9wfN5oa8kWgf8GzPoShnKMW4jJUYpwjYhX2h86jW",
  "key32": "3AEEzLzqfh1chCM3ocKj4oNazkmAHbHtNcaHhGsveDTsoEPjqSpRggVCohhXoqtF8YBsKP1fuL6Y2MTeLbLHfzxV"
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
