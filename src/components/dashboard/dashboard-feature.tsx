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
    "64eTCsgKga3NwGekGAeQpzTD774SWM4mkkn5e4a3jWNzkRhdJBgvS9mJHvBibpSUV1usq5wr6MXnrrwi5AYVWYzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qw5qt8Rq81jugEWygSRuwoTDessQ7kaovQKLUPhR5PWSxNXbGrAfLuvZLBpLB3PP4W24EvXjQVVTBPhvto7tXdE",
  "key1": "5qqR7XuGBjrq6bPQCQp3t9QBPny1cCmbEuHzgsnz5HPjpNZ7GcWjaCsg7MdcmFr44Trtf8s6htZHKPgvH9whouhh",
  "key2": "5bZKudxQjRjKz8CDh78vVm1XQesVKEkSoxzam4Bf3A1zEQvMcqqQncF8yjDzdiS7yv21XwSvRjDUtdCnnFkv2CMb",
  "key3": "4JkL6YCM268VcnVcYMQ3GbBn96zEcXAHe2cQd7UN5CnLsg4Ed99FgXjr9GaHhg7g9ccUetqixqG1WHdGDf8sN9Mv",
  "key4": "2dEZros3oCXSf2WvQERzkyKgnzhTUji3MpgE5PEgbJmqVJJDuhvDxfi48bEndpYnhehJX7T4aSSgnf3uLgkhwwed",
  "key5": "3SKgZCcfyp3hgKGs7e2zKeKZqRHdKERPGbm3KoN12u4oVD7FN5XyjHCuKeNoc5CGH3ggN1tB2bAQUHXmj8LDKqQx",
  "key6": "5kwqbinqrm4ex76ZY5g9c99edX2UnJwqSwrSqcEMEbpkA6oftLpDwsnwTYpJAvykLmd25afP3orc7gWvJ3SzhGxb",
  "key7": "RJvTQgWMUgkzzghPf8rv3JDyqfWVLoZvGKU2DkZTJNus1bh5e7G9aCgW4hFoTu1roW9ciHRWwvu9ft9Dk8Qw6Po",
  "key8": "ChuKvC9J7MTmBc5gZvRqXAGjYHFhv46tifqXX5aqeSasCgQVfnu8pQaoM3XBDgWnSr2f2uJdQYXfqT2KsmMC15r",
  "key9": "2qN1a7vgfMxizfQByFhxessHUByjreMwvn4bPSUGVQXudrXWuwTrUMzQjaawBAoEP9nSyj5997T5kyY5x1jXCNaT",
  "key10": "5AY7S9txdvSbBzB4CD7mrNRVreEU5TL2un8VdYKQkvEibpMNTuHKBhnKTUypCSvmDgWtgmvs713cD2CzvY44ZdDB",
  "key11": "39dMX9T47YE3cUTgwz6fPsKvQenQv9eXxCbQ7z8QzTVuNv17JBKQhxcSMEaR2FC4bhuvW9B4mDoKqyDHNBD9Pzk4",
  "key12": "2mTYGJbYmQ59D9TiSxCvQJXz1Mhubd3A5LKWMnUeneNdkYi5QiR8Coe3y7pfLyEXWt2XTSJsWd8dtXBhgDAdZLv5",
  "key13": "51B1NxpmM6a5BXTZ85LHsn2BLdwtfm6VbETiq822TFRP4QEQCNv9SsvC4jpMG87AHnoKVNp1xNUtajK3ChTmwB59",
  "key14": "427KWnLzDeEYBMwCxCZ1kRyp8L2tn5XeUfM7bRxVGEmoKrNGGQgao7a1kezNTcEg5YSQk1SAJeGHTVpgNSJJ1ngs",
  "key15": "2qQY1iEdBj8fmVPd5KykFf73VmKDzbWnrscDNgvpcS71Vw35VroMxN8g2pH6Z14qoumBzVbKdrAbqndqWqMq5DBj",
  "key16": "5vBeMMPfGRZxDMjeiCr7Tt8Wa5tdLczKM9UDkmecGeQA3JdYXQbHsrQoTmpfSK9o63TRvCr9u3RskYnpLQ4qKQMx",
  "key17": "4rDdBAyc44h8Uhx2avyQ1Lj3xryE65NtwPgV2Pnq1vHQxinEREsLmTdJabfmVYHKnZsi1VKpTAqeAhMnzZoffLES",
  "key18": "3zJRfVqZTo1YDx6KZqRvBnGppWEDyFE7L1acWnG5XR6WibmohTHbQLHYTxvxZX1rwoyYVye9LekHS5okYWDgpEo3",
  "key19": "KeyxDPDtwCcZSdGdxvJHiww7TQxns9XEGNr1sgeFFBkX5pQ3pUGRKewystP9CtSpdbbgepF8jg587WpnWg9vpt3",
  "key20": "5dQ9B5g8QzABASa4FADk8KRvs4XbDSfowjYfJYpjhUPbt7HxVnLpS5M4ZUTfeAyFyT9xSsuELJwDzNDgdrEkqJF8",
  "key21": "37Ni9sp6B77YUrw7GxYq7N6eRb7ze4nXYCKv5emNjDLLDjpp7ZmExng78i6GdaqurTDUxLa5xHKnXgtz8oPJ1hHh",
  "key22": "2mDCHqrJZsxXvV6V41gckDW4njxA1yvgzmNZnqHo6LBEg7oUHkungZXfQScGNRvNVUgpuN2BCQZNyRmyETKH35Tf",
  "key23": "3ff7jFuyAWCRz1RtVAvyP2b194gtThwMENGU9sVidmuwPYfzdYUfDzVyFo7rjyo2frAD6dAGUMHj3E6mmKpLCMuG",
  "key24": "5QrP1iH8YbdtrNDjHEXDQANCwhaBp6CwBqx3AifkVwae4i2VjMMaNMdYYAFfUpb9PGwpuo3yoME8W63SPVY3ZDpn",
  "key25": "3zZd92gq5bXGQnDJEeFF62r2oHu4bfHscQTLZZyvh2TjrG8VnjaC1MKVEcJTCgFKrdZLDDmyCo5WTQoG5UUeh9XB",
  "key26": "3maWzbqnSVmopir4PfTBM1pdTSFkumHud7hrTbUTfwAtRggYfP2nP2aXVX5pxwoTJakjxiiTYunSsQfzmfwgWYFn",
  "key27": "ctyFQ2RRRtamqfYbxSHt44CQ1wz3Zic5gCb1TSXHvM6oaxeL2yCGxCwCrruGH3g4d3UhNR63xqbg6s8zMxNoW3a",
  "key28": "47Q1NYKkP8n2vQisUT4sGGotZUr9FY1m1JY6TtPTmPtCDX3BV1sAUoWp4TMZGtFTDfLHVjGvoYzK7UHujB9qkEvo",
  "key29": "2b1B4oV6HkTtemxjAxH24ayAEoFK7Ln37MHvFgjKuij1y8nRQVSAq1yz3jTt5FffWTi5A4zkKfh9cQQDxVvdzXQr",
  "key30": "356XLeVVZSYmBrNygZh9DnUNGBpjGwYrT4Qdbn4Z4DxAfry1ziz9CgKzdsQN1vQxwu7QRzQ559wcqhEyDFsiijcn"
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
