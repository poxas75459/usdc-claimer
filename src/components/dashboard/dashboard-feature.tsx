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
    "2qxqmEQUSSwR1eDgHDGyT77mocoNiQ4Yh6s6xsxQKKyUgXEbkfqqnHXTvqrsz2V65jLEiVTHVpcJqUBoGhm7vYNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gMNakzj3SxZaXy2EcnjW6YwxsJjBmu7RmxXzNkrPucRrJQosPtYUKdfjgpzQzZmxPegc2dDYzvnY8QsNdxa4BTG",
  "key1": "2fHVbLspcKuZGMBmXSTxA8zVtRVgfzdotv2qcfrzTGbw1aM61CN9z6hgaccdc1AZDgeK6r1YRfzaXRbnghkCyyC",
  "key2": "3GbXbSdr33CfFNUhGeaesqmYwHJT3ybLejJi3JbmbstB6QRfpCr75KqECu35p3V8W8kBusThrGpU95GaywDiX1Hj",
  "key3": "DFaVBJ249gceuHwpUtYgeqkXAeP4BWfvCGSxXGkvA4jL8viJPrWZYJLPeqGGghPRzpWdVETrLy442rDKUFggjFr",
  "key4": "5EmkugUknZZjZzsrwHvJ9viKZgJSpsUQLB1Ptwq4aYMdfL4r6HaTV3bwTBQY5Tcy7VK6XW1ViqL1yqMLWLa79BiH",
  "key5": "n22g37tgFivoekB4Dfb2WNNRcKsdGVUpccjvgEYLmcbDCNUE7R5eaQf9SfBQ4DmMVZBjA2aVCfeNvMDHtyTuqRh",
  "key6": "5U746WHL7JZ9cqAPHegB6FChAQh28x7vw3ajbGydGFaRQTu4ZbdJVtVNxwWmNJu6PqF1norYyELxy2Z9jsmZNPD7",
  "key7": "4V34qTYkxGQcaKDq7CDALftgNsuzgJqBYLcSf8ozerDgqqa15TXPkWvKsHWV1nYYcmLQSEK6PiHfToA3sKTz1hTk",
  "key8": "2rA4WcsPJtJswyN9fHvUR6tnYRpuBZ641M95t4QXLjRgWnREfTagWu9Cb1oQWz1eYXWGxe9E48nJVb47sFMXZUHf",
  "key9": "5QTH9aKqgBiWq8GBH7SjPkUSPhc7KE4kQerYBo8kqn4CxnRHuSFVu5nZwXJsNUo53RomQWsKjJyvxcsQdLuGy5PG",
  "key10": "3mfcMXK4Wr5QQRb78mGuyiysyAsc3hrdhioMugA2NUR7Dxu6REF4yDRFc3WfDfwapUZMLVn67D7sbYFtXmZ5NLvk",
  "key11": "2XzbWrJRY5ToeKuK8LnTp55fmXACDSdmMWHwBvBDoJ24TWCw5v4N6b8hcAn5BN14UHtJA7qttFVuz4pN5VD3L84f",
  "key12": "123hFCGzqks8FmRnDyEho7YLH69aMeP3aHLj93UctCjrEoH5khHUBiAcUNyMdFdgmqPtQ7B9SHDMNReDVkufJCno",
  "key13": "41pwnbGUTNeXDTKyfmgxAHmAWUy13o1HGium1c7b9vWownaGKUfRYWeftAeuyzAB5wfTGnr9R2oxstAn1c4x2KY2",
  "key14": "2QufRMVDj6DLVz1jXofRQrHKNHASLRKkQEpuMoM8xRRSFXMjx3yiPt54KcEcS8GXTVbqPtfdwJ8hBctGWrdmwsmj",
  "key15": "5fDtY5FzysPCi8BmTw3CfzazUcCiBxkK9hgL8Ze6fnykewPgafz2AaLL1oCys5Vf3gHhaBFgfH1CsqdMcP1HNUMS",
  "key16": "xhtRaENBNK2LkmV2jwiD7jFpjkbLx4sMv2wxBDL3hJ2Kv6a3o2yvPtxiAubHUYVfzUMHqY176L2gEQmZZkCTXZT",
  "key17": "3z8jzb5TggLuLoM4CZj4WgAN3J9XHcoof1bXavLE8MPfTwbKhQ1TEsgndc9bEhoqRLfmMUVYA48KFhkBQfdaHzHk",
  "key18": "nTfxUwKRPDcGiSz65DjYadVmgyrFpZRAN3h4WsjjKdjqrYZP8DqGCaQgSFt8mBiDY8VRroy5h1nUDuRr3qGhHCz",
  "key19": "3EPPAMvGjotmSMzWSHV31v4aZh1G3G5gN35M4pvCfM3Fq97cwcQ1RwGHQbvnCsJUYEqJkPk5t1REdsP4LV15AtsE",
  "key20": "4B6AdgK1ktidoezv8KtQNzSaPRcC947VLD3s2dSakArRra7c9bWxxjQmJ8WtdoPWCKTxWsTTWcPGrbc412dUJw7e",
  "key21": "2b1PG8nPfADEV1kTN41JEP5ywXUcUNkQhGz1AXdqeex2svYujk7CD1r3ZjtnEwjjh9RFRtS2mzYGm71xGoHy1SDP",
  "key22": "52LWtbmPxX4TqAMRbykqz2wZny1N7YXwt4fY2raY93LsLn3ZNYLfzAxvQdFvjPgd9tMH9QDAdULCX7PgdJbHD5QM",
  "key23": "3BffJdHtD991JFmCVJgyE38wmmCXp2HjPdpjjAUHDiYrA2zm2gytRSfgA2h9HoQMfwcVnRwKBs2pDwSCfPLqiGN3",
  "key24": "5oxxoX9drJeZhJGVkVJaobmuwZpkCjKXbgurYhXoqk2CvuSGQaC2mQccik4Wq72DPBeevabj7iZt391MEs3iZG82",
  "key25": "2d6bfZXDBQbZ8yLYytmb8wbsevXQmzEKPsUnf7TRfM5S7Z2dFtq6x78iwpFP3VvzMkdw2A2BEyJdnNRSXTodkNRJ",
  "key26": "51thUGErwKryRscTyd5FZAQUpMKY3NQNqCV6Tjn5xf7hy7tR5tmLUPPHdiwdyxQKvLdQkxjaWfDCYd7iAFftbCbe",
  "key27": "4rr8mrBVUQ8N84FmgEqgpRxHRzCwrdqRX3cMwNEX5Xgfck2vr8a2r3zzd4ymLKAJSg66NWZbVsYtEZQW1bDNr7ao",
  "key28": "4LPxLRy3PxrPTweJJwT3FxkYjD9ChLZ8rHiwQHG3apidTmdbWRMBxyw5A8xVHquGzHqZfTKQuLhSgaRytEREfu5a",
  "key29": "3cLFf5nrSeaUzatKfqngcxf4KdtM8t74mFaiJJscSGL8e4rkQKQQmiVLJ6RMf49F4a4XPYMGvJ8GB8zoMEWwjPWe",
  "key30": "43Vc49YsyvrdtuqMQcLkAppzLnh5phxaLMrHNR9GX9nbXtuA7y3pdzS6WavEozdkbgUnt7W3rvzvUBt9ExTZd4iW",
  "key31": "2TQ2nkBY65zWxXUqBSAkkejAp9fwXa2fPxJqAhURuQ6MRck69LEyDvj4eBy8Y7C6uHkDtN38FWaYgfKmzV2vF9g",
  "key32": "3RTdkhxaoPuYLhGd243TvfGDDMRHfpPRadTifDVVvURbEy1r2TNmSfVafbCwtRjS8f785wnHtJ9tsxdCLvXtamkm",
  "key33": "5mWyzdMK6U26erCZevNp99qsCfVn97vUwRTQqSQVhpGVkNdHBtEinfre9BRQTiLbPXYFmc1a4JPnk1u9dJSu1T5",
  "key34": "32GpvmP89aSUPusM6UUXR6YafD9hLjnyaKfA5ggUJXRK3P4n52FRfFNgbtHPKwe7k3iMZb3x7CZttTV1Ts6H4UTM",
  "key35": "BM8jYKWeasSZXqA9898eNxUqkARmGWMfTje7RK8ZbTqwVK3FPXce4W9j6FbXYbDBHE5EQz79Mruxa1dB6Xnf5ic",
  "key36": "4Sr1sa3CW8yVJy4dhA586yBhA79awmUSCuwj3j1NAJwCfMCVYMvv1jfmpxGSDFZV7XCPkgfsjXx2DjqwYpxxikCr",
  "key37": "eJ2PDn4Nb78J4uq9dcpD1N8dkDnYCvC1hAuWwrnRdkPq6pq9ZrfnrcygTENpzRvDEWJa7vb5vhBFBQox9v5BLnx",
  "key38": "4HZ9VaZpgVCRME3jaUVoABvQLXwb8znUr6fEB7GAujQhB9A7Mfn1LKsQ7jaiYKrQi1u54bMKd53MrxQPrPbNaZD7",
  "key39": "9MRAT4dcU2YUH8j6A7cjegLKadVgzDCGLNHwZMbD2pb4F36sX1KVc8EbVjB7tusc5v7UPF3u5EtC5gxp9QeuX2T",
  "key40": "32VHwkMmELMxvvMuXyqkPn8PveQDUe43YXiPxiAnNzHiena3Hp9tXkpJgsKXedbGXuFdiozLXpr6ztdBvMjE7h1n",
  "key41": "JnmsfNu8hGrMtjzG3utg22ohYGBmJrQWzWoMTb787sDBirtp6eC4tpyhyj8khdaSTZXqn6QsZqnfwqhAc4PWXus",
  "key42": "47qHd1zjvyVs9jv8zjdTPtkwYsjD66CdkvMFjYWsk5dmn9Nng4BNAM51vNutVGQff3JFGDZqnU3JDQvAcz1hEE5H",
  "key43": "3h25C3maAw3dWg7LQTALRa98uuLc4vQbDzcWwoW9tp6SAC7kesenWX3vUCzMN7TR59GPbpR4JWA6ZeRoxWSdG9bm",
  "key44": "3dSdjcEZs5Pgr7Vnb8SrUTrP6Nyzw7u7Hg3iQzjrCnKJs13wRHBDzaAFGRgAXZjbmZ8rzv5WRe7Sv63h6Gpcq12w",
  "key45": "4mZE2STLZMVRu5bpURc5RqU5SzRwcoMX7fN1jftAJY6VsQoYhz6WqKZ7tyU2vnRaxqsNX5XUYbDwnZyjHbTsvdnD"
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
