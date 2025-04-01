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
    "CScxEZPrfBEpFXmd6Jhf681hjM9hQnc3kxevhiMMCD4anMMdsMXQMyEZaszF2VmFY73J9H4VpC2ahE1ZKxTXpgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nro74VmGWbV7jVWnALMsBS4WELkSaVtRfu1aMJ3cR4R6BfGfPKHSUJSVDhHj15KjmuC4rSKgAcJo2TAHT91SbHj",
  "key1": "3Zq1icv6mmJtMLwTvXAtJAjitcdYB61mhq23qMw1iXamcYGMPNnEygxL34iaqtsxGfqfTHdvbwMFJSeSiPxoabhK",
  "key2": "4hUqTuHcDFfUHRGJ87oe7j4dWAVZNKuDSEyRy6ThHrWEiZN6jaa3TtGFPvuzSY1XBMAfqy3sB2yE4dfaojC9386Z",
  "key3": "2fbrNZoZTXbPdqanDSCh54FfW9LNX551jcaPtk5M7StQWTxdFZ5LFiWhNu6GcfiM4XdY75pJ9kA5979rryszW6Ug",
  "key4": "4oYbvYyej2ysVQDggwnmXe2ohfVJEBsCe6WpV4r9LBUs1E4wLdvckFrYrLPg9u82kS5zZRLikV2Kjh5vtxM4V7jz",
  "key5": "4XuWGrDZiyNHdwhyBquR3zvxYX2hf4dgzzQRQVjdtGLQcBmFiLpCqsrMKG4NQEFqz4AqAGxCN7TiR8dy1aeENhSY",
  "key6": "5yVvaPRftS5vpy9sSiVQkm4ecetd6bbnvF8knrrG3RvFXHwhq9TpDmydDorxVqSTgW4M6YiijVogmjeRBPQQUEQg",
  "key7": "5s9ez9jkehGN9FPFYuqULzRAtmFQuNq2QnS44dR2YWMvjZmRL1rwcTuSYqB2wimuUAy2heGXyVacDorybA8yzmmd",
  "key8": "2CwRGm7eUtwLbQs2Vuwopqcr56nSxvPocYtEx6TfxY7ST9F4LfEUnQ8pPYa94E8HQAoBwqwLZeZSoL9tjRde54xj",
  "key9": "3w9c8y4d4Y15fzSWLBJoBzjxcfD7NA3Cy8MP2hswteMXurfnxV478j3Qfv9toAXKouQqrhbiD4wuLg7dMBE725ka",
  "key10": "3h1WvcZE6fZLGDqnLZfBHJGsSGxKRkZBUEMyBuTkGmo4zuon1SfugDTkBNFeWftKU35Sjxjtk8q3j8YDTYgoCfzA",
  "key11": "2SRBSv4A4ByjQaiuLcCRov1woU9pCqNcQSv5qpjVwB4fPEkEisP5xApfY5ggBkPYCGPx6YyiSWHxrX2QC5fMueiK",
  "key12": "3VrYwCoHrYy8e8xd3ezXQjBDPhZJtynEPzdF2kFPKDjvGvfUAMPo4VBVitRtbV7UYU9y7o2RKwjAvjX7fPuebZx6",
  "key13": "5ZzspLgVJHDfZP5SrD21fRGKpTJJzBjrHq38NNqytFK6MvRPi7j3RUTWrf2fgAVt48oEXE9SDMRrDTGnskKzarnT",
  "key14": "44qm5TQDAzm7FqMcRMK782XritxFsdxRkEtcxesHWwwuZUX3Bk4T29YLnzLz9TeK3BJ5tFu9k7qrppJYQXpwTN7z",
  "key15": "2vK9Nf546zVgkjQk6EhA9m6SZfwhsFAJEviqRJBukZHxpmkeGgi3YjUbGRSHqerwaErsNHniJ9qXpbjgubmQx6QP",
  "key16": "3JT1Qme2vbCpffgXB7fGT3BN1UPgrjhcnQouT335E3DbXBSjEMdxSFVrBMW8BL8brzW9qJHbX19TGTLdGXmhJr8u",
  "key17": "5v8i2FR4GGJdaRgJVtXJkuSFx9y8FMJtidqFffBV9SFSrGXHHoLa28nHektCu3GAt95r9jPBQQ9kfQpcY39qnGsR",
  "key18": "3dWo6Y33CSYJfdD2kLi1qg6BmMx96276EPFq4iwhWRwWbx1HawchFvS818C3vhwb5joLkqouKymVQe2vk1uK6iAC",
  "key19": "2DYgVnZZ7Wpi7GsT8SUr7XeqVuE2P6UtW6xriCNiTdazrohjRLiy9MVAUyMk8qwWVFwgwk1g81wJPMQWjt9WNruh",
  "key20": "PhiZGd9KfUNq5DyxZgjX92PpxGaW5zB9zdxEC4EsxX95ttQEQ5Ktkwdcn3gTTvnLLrFRCfimDVnFwKgBsPgUj3t",
  "key21": "3z9Xx2DyVEMBWnjWfZQEoZDE1QosWuyNpnqPUMrMEhMKdAaATLxPAj8vAhHW7rNXbEbvUCiDBVhSPgjS9SPZosX4",
  "key22": "5wmvKMXVtWiGtPtnqXeHtv4zq7vBmv8QmJNtmsFVvtTR6YVURCQ5VCJ9Ujq2MLM6f8wB3xSUTCgh5jfwZhK1tdAT",
  "key23": "4C7BJXDJuHqoPpVrXNguV8K2uNKoPPLHKD8mGj2TUbo4FerVd9t3n4FtG1eRt79ft2gFxP8kr8xVo5fvouELWyp7",
  "key24": "3kQ8ySfDWT8ygBZCZP2KY3qWA8JTD3JAANzAjp6sEqeEkeD4Y4Mo4SsYkZj8ZaR4NpSDypR5WuryDQpFFu1uSu5H",
  "key25": "2pbVhw9XUDKkc9JpPMWYANdTadiGDXguDQjqJGUtacE3aDJoWNy2KbJPMMjqcVyXBnVquQhLFJxPMBdTw5VNMBdE",
  "key26": "YEBpQdxVHzmoe1BgZVF4CrC2duXvuSeE66Lmk2QiZFem27LyG2o2WdkinXM4Juf676HTTLzg6599MSiJGK8L5dA",
  "key27": "4ajPRbTsC7H7Ya8sjzZuF4eXXKaJigo3bgbV9HujU1sBURLibGx1XLyJGcEuMpvvXF7oGwANVodUCXfDcJ5VoHWQ",
  "key28": "Q7Yzbocqqut58qNXu7KScu9Fzcgm4AqBcVcZgWdkmMWTdRdDQqCK23vKfCWg2BESFUsCTz8DWfyEDfsChfcq8yM",
  "key29": "3zahspdDe3NL9XK1WEXotkCqA23JGBgaZP6LUmVyXKZ2tXDx1PpeHD2wZpYSyFWD35ijmoVyXmvRGub4KtWDLkd7",
  "key30": "31iaW76zNEop2uHbESiTcYowr3QNDCHQDTr3qjygUkMC88DzM3gJtdhFYPPW1zEniZT5m3EafrttD1pevnvpwUKW",
  "key31": "42gcs796PYYS4SkjBFpTKVZP1FQeAPFCRkhzbCPbX5NrDbCfT9dtdJWMvC6P6LHKsiit25fNJ7fzEVRK4vd43JKa",
  "key32": "2fgVLReFqE3UhwXWv6mH4grFoDap1cBYuC6JxZBLRVTXgRKYq92Fm22PmLfvg8d67qfAnFS1ktjB2ACAs88ybhyt",
  "key33": "2sEX5tfV1sn78vabyBvGqXHeuHsYGgJvCHQ3dR3KXCvHSmCb8vfHPCNt5jMpSCRv5mnaaUzspP2SDrVTXHmb3iYc",
  "key34": "3RSR55sXgXGCmoSfCDuu4dgs3ZfiUVQ8rdpYu9bPSEuoBY5NhRRtfWjpPZbLrvEz6QMG4mii5m5admoBd82oTX7A",
  "key35": "2QpMS15Q9edeLqdpsfuEYyGB3TJxdo96QsaksQf9MKUvF29tVSc5L1ZRrBDaSxEjKHRp8Vb1Pyu1i9qzbu8pizSd",
  "key36": "64Mic5tga4p8m2upUa6GtHZXurrbD5oXzgrTdAr3isaWYf5gzgMNS1BYSWoxp8nmmjmCjgrgJygArvnvscTM61vY",
  "key37": "5xBEoo5PPig4yEw4Y286MSkT7FjujxVhsrNUdhTfNTUKpQ1frxvvBH3gzq1g2Snhtu41GEPYsDh4XAXQSZZrVMPQ",
  "key38": "3rEYTMgj3g5P2NjQ9DzCmDho862WtDRDkiVYKJauVLcoTrH9XoVeeeYmu2i1CEjrQqDCGQrr7mUWWZgQi8CME7gx",
  "key39": "2P4oXrXVp9QEK6nLhkE4ZSWm65xNcCAW1bnTahvhK6UwkQm7QLpnHUQQnRcsrguAFD36tkCwM81KfqLtD7imront"
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
