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
    "2A1quiikaco2w7gA3p4k5oatTa9MH3JJwc1Gxz68J8nDwMQm64QCzTUtrpyhZT88MEcsufkeRiqWtjZYKVYQTeJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YCATCCji6r3VrzVWr7e1xvWFezUZi4qVqbAzSTqjNjTh3dGHwDc7BSh6tpHyMhtqJ8eZQQ4iguXDcLtJFYbyGhY",
  "key1": "4cmSi4drcbkQAfp9TjSKNqJvW5t6L4uZA7ZqGA44bBywzPT7cPeWWpuBvFzddxNgiudw5eZ5q6joqviiB7A7XtZP",
  "key2": "7X2igUBVgUXDRiTwieLHAiWMaEqhCMqYPTKVgmXdUiu2S5PRQyxJFGBfSzP79kB68KTUcUKazfcsKNM3A7b2bop",
  "key3": "2C3FiWHPpvrNcSEG3gNRydmQiGWRjhUfCTr77i6eonx5BHYtJn27U8RRPTYuQ6TxgJNMw3bAV8srh9pKJmB4Byoo",
  "key4": "4cDo7wny5jgMCKibgQ8drdkWiPsx5woYH5YnxLXrj1Q4pRvPs1Lv5EGDKoHTryvxxxegyKVyXoXk3k287pjdRzS1",
  "key5": "5zAHrfoz32EVRUioP7QR3o2zZCGX5a3DDhTXtMxkW2g5AedZnmj5WLNogXiFcgmFWBYJ5reCDsifedDcXMyaz1XZ",
  "key6": "2t6PQSDus46pGXERXaj4W4nL6eFDzBN7JoLh6EPoFRpGjFLxyWoENC43yBGKQf1zy42JuJC1hMJ6bL9pp8pPFokJ",
  "key7": "2T2caQJvyZPSZ7ZZxduF1evWqtf9Wr2Qbv4pDcHGJUTaN9dghCnVYV8pAk9JopRLsSVCLgAk12BzJQaSAPPm3fKJ",
  "key8": "5eRxLZzDnUyv6jNcTXmusuij3DYiG1PCoig2gXNRmTWJy5gsU7scUf5SSZ5LG92oRvsTQ4ZsUkDeRXW5MtawoNSD",
  "key9": "acN8cjywRTBpWKFniZSLjS9jiWECGfCmtEEKJEQ6rGrboEqd9pRE6sX2nygdy7G5nbjiy4P1kJYLv6AvftQazhR",
  "key10": "5GwLQdv6unAW2kubqB6BpuopDKo8Dsbr3VMQ4FMNDkLeTQuRYdgsZBDvvnFyDRMX1Vad7AEjwi69psYTFpBK17Pw",
  "key11": "5wAkro5eqxgaQpCLWju116N9ev2kNheG1JcjjMhyYvF72R5pDEg2Kwigz3w3dF24b6eUt1KrEupDVEkdyNYMBQVQ",
  "key12": "58ypEFdv3F5bLXmU351TsJM51bS7ckcR5aghfKdSSykbrQZLu2vo9DLuhmSdBoMFiij2RGM2piLKx92fdFXdBDQ1",
  "key13": "35aS8oppRipuLvMKbYQHtPLpeKbWq2NZtifUpMcAV1BgTwQdAAAxLkqKW2KhNpxhZNJKMVwiXdXahiBDtRVc8GS6",
  "key14": "EQSSQBEFuN499aZp4vPN619Mmh9gKBbQdbvUsqUU86FXg87CLo9ijfu9v4AtyuKz8N7Zc7EGqwwL5hhqnQLbp6w",
  "key15": "2QoHfXs72zP7ZAGPzejgS41BkhW6SpRobSwwggSvMyDvWfMLMX2krTth5ckXL9DujD3pSi1MMeDC35wznzs8jwoK",
  "key16": "4hUhD1vcp5EK2VZQBeB4xnYRBhE9Bz5rZnfx3idTaZW27U1MYSeJeVy4Efgqjf9XBScZ4NAHeqqbcUoLMCsLYqZj",
  "key17": "5x2RYbhVRzLghSbiphSXwgtc7fvtU59yrDbjoHF86WojHrsBsLJKJg7T7x2VEqf5enUAEUHRo71sB7T1fp15LCXW",
  "key18": "23TRzcR3S9FT37szUWWFsTtLmNPZWbcxdPBUMG7xGKZ4fyMaDj3gJ1wzQzkNYdwf9D2GpE8qyrxQHxLZjxVXGdeX",
  "key19": "4wZ34RKi5uHYiX8cYHzu8reL3VKHK6i33XAegbc2PxJ4gs1h5aJpic9EB71BvXW2Aoa4AGX3mF5HcbmokGqt1XUv",
  "key20": "25tv17UgZysBryCV9UFTawomtCuKEfTRnkDqnuVHeSHcToxwXxbLtPu5Nc8zYjC8vqkApoShFfnDAMMJFkqxtqwG",
  "key21": "5DMkiuvHzFtzwNwQEdtA1HGeA87vh8WtNL84tfLGQoXLRzmboPV5FnqzVYVNoD7LZfuVnoDNyqtow37aEwL2Gcmb",
  "key22": "357uca3g8Vb9sabcKACr8B5KsgYXMg1Eq6TEUwgygPxtHm9eoJRj6Q9jTqxNyYa3eZaYELmsT97Y7HpwQTvMEorM",
  "key23": "2crgMacxkcjUBbgBFTqGDP7qp9uWfd4WdQ4snL6umsRGZb7KPLrtSsvHuuyjdT9aVAenrszc7LrQim8dctWrwXi1",
  "key24": "fAJM2EypUe2hzPa5tMNNNkAN1dPWRo2daX8LHvZ3BkCHmawFzavrWpxRY6r7GeLHdaqMZPfgdzMtn25X87QMtXt",
  "key25": "596do1D6ZjdoLZ3rQPxCQ3LSna1mSXuR4pFUardPzLqHeHK74vzsqmcBysif2zUp4sD9TrnS2hbT5wwxaULV5cyK",
  "key26": "3FehwF99j4NRdmsbsbQWGVBZnadZ42zGmSTZwts2BBEnR68HT4q2d9REyDNgV4Scuo2Gm7d24Xtzb4UnwsZ2kTZt",
  "key27": "5vLcd35MypYhiNkSaVvChUFPaBwvPi12QeqTcy72MGypNWUTAFVL2XGr4GJBu77F1Vg9hAX5bLLCrRQFmQuh8DNt"
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
