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
    "67Hg4vByxSwRHixhVEDuMQLuofPJV9WCdnEKUgnRwTthbUP1SqHssE6Rbtbw6a2i62nyDxoDg7DxYxriydgifUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LquEQzccRNLzDx13MDhLC7qDYEDbzss9JDhXDUKEa2nhSKvE5pptGZGyaDScGdfyV3bBRu2fpX58HanMLLqYj4z",
  "key1": "3h3eDdKhMxfPUvUGoNVcNaD9LZZXPCidX49UtgP26AVt7K4vJuyWBRRkmTQVNM9QWXHHQGxNLQEMg5G5n5zbTX21",
  "key2": "5iu2tyMAmsNwUPfTcUECTPPzU71ymkynf2EN4zeZvSwXDpEBAbVvXSzvgEhVmUEKc166trQfQadGAKCPjq2qiH32",
  "key3": "3BkNvewttzEALn8ts9Yzfwydbhhws2Z8s3Kkr767HtGVdKxCo338gVa2HgwtAA4inYUvxCbphjvnfJECFfSKY1ei",
  "key4": "4y6A2nQg6tatRGdPgRsFwvvGGWDLJNUWdgkRNtKoB8x9cMjaKbqVwqnpkWzEgDi6XcvHGKo9YNryy5xTRpDSxz4K",
  "key5": "2Yx2QRbWv2Xzeh8AwpPXqyKF1WhPyodu3g4Ta2BYtRsmH7iN6SznWePq6CeXbpMszovucwPm9iQtDJnwhjKHELPD",
  "key6": "2eQ4Up1MPQTDGcQmwccNS13SztTnvoRNx7ARfQQTKRBNRrJGzCRz5MvuiLqRGroW3SxjdjCfoxkF216PNUHpbbrA",
  "key7": "3Juj9XLjvjLaPLKn3WS5EfmeyC7gmZwca14ysVGSe4rLApzZzutc1Xc4YXY4rRRcrkmyXs7xLivSMM4mh8JuxYsy",
  "key8": "3pFgrpVZf4JdrEtrx6xqtVAaHix94oqYEpxsPyBmJCEhzJ1po9sHs3zUidHqWi55u9qxN9bXDNRWpwJEUK4nDcYG",
  "key9": "CN84hu3PD61F3SekNAU3F9D9m4MkwFTxu8ddAAtZUqN3picursG6a8W8FexohYYiQ4fsD9k5SP1Jr6Ahfa4wYna",
  "key10": "SQhAE3qTcY82NiEQXH8zm4NyjfFT8kc6uBa1cDAd8YzBui66sNn23XaqtatMAqabmZ4fJsJjHqi3imn41er3qdQ",
  "key11": "2q81H4VsVjyGfF9Kw4hMhdfvcJayJj79Hc2DgSraeYRFtfGjCFaP8eFSMuLqfFSGRt62XJsmc97hCUAGA9jR4Sd1",
  "key12": "5yuY3vUUt7LgY3si5Z6ryBt8pBe8fGX3W1Vr1jMgK1AUHrZ4feB3p8jQ1oZfjoUmAZTerjaySXaUBb5xK1ud7jR",
  "key13": "2eaiJBb2Zm49WAbq52RxAHkSFSuzgJ7VWwm6SZTP4MMFjksryy62eqXwBoJhs6fnTW3F29LcHskZVnSGuWgBMoo9",
  "key14": "3iWXXSDHoxFmwyMTJhN3MjSmrGeraBDNmoUFR6XyS6Lsjh6cJygz8wjjT6LKDg9uDpeAKnLD6t33UBeZceYPgFMp",
  "key15": "4pWeeGHjPRbAkDZB7hdy9dU9VAB2wbMK2SKgaSSDPZyPDowwV15g6qZLM5NstnGdKuP46YTc21DCx2bAQTJZ4HPw",
  "key16": "4VAwHpre9UU4PT3YkdHVx4GURHKX65qd488tm97NgV6HTo9uyRZ1Lkogzy1P1E1zF1H6zBe1363pm3yPXUUgcF7q",
  "key17": "4KFFvGu8QNoYzgGdsps3enASrh5exdkZkQVs4iDCbBD2y7Ghb4PAvK6WY4wvWLEgGfG59ijGFgeLFSq1FsSwHr3e",
  "key18": "2C6femdYxnu8hTXz98kgKTovSa9UAXbJE8GEGod65DzjcSqL2jpBXqLEUAcDN6jwfu8HQED9VaVPm3PuD5RDZFJJ",
  "key19": "4Uet7QKjKGfN2tMLy97SCNnATrPJtvJqVkn8XhzwQBdknWfRiU56MxB3fPanDg2ATnr6PBjKNZkhCJEHbbYF3S1C",
  "key20": "3g6MB1x7iYuND4y7y2m8v1mduWEaArTiP81DPF3vm6dtHEpWwNGqhxosvXuhosKGm8UFE9icJyBHNHXq9Cs94Djg",
  "key21": "HN532yBDN7GaGPn9WmKt4E6CeA5zTaqtV3eVStmrW7CU2BhEw3Saw7R2nut14sH6Ff3ZszjhbpXBEmumS8D5vW8",
  "key22": "4hot5cuTy6j3GVf9qb9EuGTnzJH1e8Q2GfEykxcEKpz7v7hvjZejXW9MiXo3QHXyAQc3PLybMgtRijAaYZrdKFba",
  "key23": "5J3FYRY3Qf48Gn39KeDiYHsMGxeC3D8gaN58SUZveKrLpAUmA1G8q4kDd4Wf7sHjiMQC5TzxZf5yupMZCtmgGmB",
  "key24": "cPwhP75jbWJ68cSK1A8Fj7RrjcGfnWGnQ2QbcdBLNCu1k4ftj1GPd5RpcfikFiY7JA6mjCTDc8886x4mQkwBGaH",
  "key25": "21NDsxXgXoR8p3YL6uMwiH66d89CGBGuLzoypPvDL7vfymU78YxzYFHocRta2hPHubEqLfXrcYsjWsJYhzRV7e8o",
  "key26": "27oJETBe1Vye25o3GHT6bdHCKg6pKWQ69bwyWs5TSBsHokQZmFzgk3BbGqxnuCkctGeat67GpRP7P2HfvCZ3uQDE",
  "key27": "9TgPD38TLuk7WPgZKz6LxkM8Au74rgWvobA8KNpDjSUJSPatxiP3ERtEbY1mSAaJc4AkaZb7iwBBHdSvVtg84Yn"
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
