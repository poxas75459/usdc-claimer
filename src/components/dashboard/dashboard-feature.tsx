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
    "3LiuV371wmC1hCiDMHAvGKituaQCoKReZDa523Hcd63hpiS9voMjVn4UthiGDDMLTLp8fj1n1qD3rwGWb8e1stsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hWsf4dXZkCMcddxJSVCzVm9zZMDfm1idxRcmZ3GMcKzq7p3JrxZSrCTEkBd93MtcdgSKen2i1mkdjWwVfgjEd9V",
  "key1": "34mt8NYnMf9i8YzfE6xSUH6PoCFsTMSmZAS69apa7ooGGva1Bso4rmxWLGNvT1DuF8EcSi7nwetEVUujZrULdd2B",
  "key2": "5bRChTvnk4MT1t7x3HjwnqZrwGYzC5nLJ9nWhLzMXBQ8Y8xXsPaPxMhic1CXnrZsDdaXbmKtQMo5dKGgSPKoHYUD",
  "key3": "5uxsJ8M9MPNMNnoqBauMNFVjvq4aNk8YPHPVeauh3QHExqZETjTeNX8RjkxiGSHPfBJdzgh4VexVB5k1cq3hGf1x",
  "key4": "5VZfEtRbypZ29QZzPtmczwTXq1xhWLsxzJfqumtqg2xkmoxky2rTH3GESN7GF3ZLt9H4p8LkjrZjoAiovfmuMJG8",
  "key5": "23qC7kAFkhB92x1nJdNV9SYjSo2XetzxzdDTuU7smGCaiqCLMjn6yD2DaHqCuL8gsbzBeGRqC9HoDepq3TjkyNGU",
  "key6": "43tetW8TRgwDuaTahbDGgTJmXn3nHkVCS124NkCHUsA7k4ZPdNuz6Udm5S3RnGZZHFTtA85LLvufsFvpvq9j6Fgg",
  "key7": "5JbTJq5ukGk9rKkU7sHFdMZki9XgHyVxHYkEvmRiwgwRvuJ4mVneCPaer49zDfNDcA81szf8zBDvYCKqFoitSx3X",
  "key8": "4t9kucF1NHSpivRVRauSvizEGrmrQ8U7iJ7n99QvrPqcmkLz9tQ9gMDcnAyptjPbU2mdqyEyNgRWkmRLpzH8TxcA",
  "key9": "5CpqNw6tmT8TJD9Krj61NuB86kAyzNMZEAza6w4BD59LZeyfNH3pc7LAU8MAzjVyigv8jNh3EWDh1HY7Gk916Ywa",
  "key10": "Nu4PFMZueMJ35DFY4FT3vG2e4cCiMfDbxsYFmsbNnZTtLiRmvcpUDo4Y3kkzbSvjkhVnrbSusE2ZjvTyPBpcpfc",
  "key11": "SAvY7xUGTW57L3YgrgX2PnBzu9nVzHvCsas5rVEhkEXpBdQGZ2XLt9b5VHKfKjwMBfSiEak21TfLf8XLJszt6M4",
  "key12": "4TGZq5BmYqHXWisBMsqjcWWhzkjuArRAfiBaXeUea3JbSKhskBZevhozZbZi5xHBvKgmBiEbFvKBZamBjStAWW86",
  "key13": "5QHrFr3KrLmHGtv4ufLNVySfUVzziHWbpeAZ8BF9sePQZLCF9kDE1RwQcSK9bUY2nq2rEeJJ5n9g7q9rcUWfjUdC",
  "key14": "2VJuNsjfJLEBtmvkaz86hPDpQgDa9gATeP71HwoQwXT6CvF8iGrqmBvmU3QXMimeu5mdNYv59rT2ogDiJ5x5kYX2",
  "key15": "4x1Yo2QrLFT46joBaE2oiKLjqJdWuiosNYpANka3RDvGsTFsHe3VnteBLCuGyYYkM7j652EAYTTin74ydHahoyxZ",
  "key16": "ZwWzKrs1pvtCRkDDunf4N1PwVHUgYrkRW1ncWyTm4inHYb4riL6memMwDc7SkVdBt13LAb1g4dFkjxVagjodf7G",
  "key17": "zjU6SJw6SSLsQMXAVD4VyoVVMfgX46DFsnh1ZmbTWUqWouF6PXvSFRfhXPKKcpQ3ZovReq7E5rGzLdcF5s14fsh",
  "key18": "PufrSppNbRnauun8ZbYDxTfqBRf6QwkfH6uT2pgcds5i4pG227sQt4RWbghsMwNUDPzDTD6YC2HUt8gE3tYA8Hc",
  "key19": "5YFEryG84KLU9XvY8BrdvgFmV9CJa1rVMR8EjuMoKDVQWofUyhtTLHJC4narZEczd2TVqf5NKhoDWcA3RZ7PZUFr",
  "key20": "Y14AArHnEaLps878HvNumEUiZKp6aKwxw2fDQeHgxnVaBtNw68qS9khzF4gWTSYzZvQjGNwAj9ufnN2nbzJZLwH",
  "key21": "2HA2J26nasf5FvLfooAF9JFGez2MMXHdpzPy2F944GtXg9sitx8Lczp3UMJoMvVWhYPveaV2XUTsZ4bN7H3NLTwU",
  "key22": "2CndiJVTjSB78GgFMqaqmddJkVNnujUrH7si4im9qFQrfzqL2ukMiEXnvhjtXASveJpNVBMnzrAkLDo2gmxNtx9f",
  "key23": "3vbbSs9QhdQ3W32Gfu6FjGKeqi8VAi6YwQANKpVoW6vVZcjLggZxraZGL7d5HUUJ5xwL6UzvoY4chd1f85QHZBoG",
  "key24": "3M6TJmxPfLpWLbAtt46oPRwWMqE7H2HcVhThJMDzcWu3f7JoSZRRfonG2MtRbLW9VQT75vJCL859DbXigxHefrkh",
  "key25": "42fLC8GCTepZtgUoYSGbB6JEhuGrv3b1Gku7UbDMoGZ8chNaL4HCcqYUiG1CmzLv2ud2wRWFuQXFMa34wn3aHqdM",
  "key26": "5amRfsVMv8sxjjG9sdX9aQETKmUFQew4Y295fEKsFF9cfNeiJppj59qLBSVGZw1qW1gzdp6VuUSD39pD4M4A6ECe",
  "key27": "erJ1sRRimN2Qn7XUiNp3T2nv4V7xCWF8h14TXstfadTwvjj4nRMH717eRNJV37yoHG91Hu43hsUzNrB8LRiZbLa",
  "key28": "4fXPFM3YGKR27WWKLtzmaf47XikYTPbay8EtY9aFb6Rwnzn2xCjsXn1RU9Vr5EsYtq2FM9RfBgPKTy24kxCECcZs",
  "key29": "4C5hayUX8W7FQzmJiGVwpTxufQhniiBf93QEFpb6hi12u2zs9J8N6NjKzfosVCKv8AXXbG2bfFyvEayPFAAG1m3p",
  "key30": "3GEAApqRXvbqR7c2FeLXXsFwWb3G89btUgYua6GYH9fB6QMbPtdh7a8d2Dm8tSJ7BhhPq2pRfxU2pbp1U59iyLMS",
  "key31": "3f3pdh4f1qgtqVxRc1poqovV1anwQKJA2Dw5pEdNyTGXZXwLTqVYZkHqerewmc4NgJqpZmUDbNG4niLzFkzpPxP4"
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
