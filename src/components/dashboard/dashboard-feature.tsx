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
    "5qcnzsCNVhrFQimhmyjQGQ3167d9CjVYg7vS2Uu6ZjfxjNqrVLoFWdWoDLF2U5WF3zVrgdLUybVdAq1TfMmfHC3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TbXHD7xu34sjpyGQhdh1mknnd1gwVhLujhJ9iSJCphgWw93GvToyWUsrAsapejh1kSNJXzHs3jV9cEG3nNARbL7",
  "key1": "4TdUzrz1nKNc3T8NqkbQy2QEBCKpkWpWXTt9Q6yms3zdAbvLckFFS1rtuZYWcz91dJ75a4WNCiqTzgAqQoShuAmS",
  "key2": "hmEfy19NArxAbNUs8RiKe6QL2PxxfrMUYscbfB6ACHb6dHNqgh7NersaJUbX1VM6QR2G3AEqDqzwQ9LGzetR6Cb",
  "key3": "7qQaS9wSYjpTASy8SKA6wZhszdVwMdrSMmiBPXQubRYBHqRAJDutoCYKaNghSLi2okBuWrT7uNQ4GHztnuRb6yR",
  "key4": "57BCyQy8ay23w7PcQHv2HQjnyALmiVT9LrWWqTeFXK8acEASzM8jxYa4UM1pvYVfcN3Do3Fk9fMNdRA9f5WEryr9",
  "key5": "3Ugbc6ndUE7cQJe1xH56fBebJHxjnif6yxzNvDwWb2UH2SECq95agHeLDmP8ByYbHFs87b6TstBCwwf3cf5zqR2r",
  "key6": "35SJLywPo6oz66EZhE3Q8N6Qvyn5rSgFurCMLtnujNrB5T1iM9tq7HbgjjhbTBQCNbHrFGtLjFJM4SXp1drYwoM2",
  "key7": "5dc8CDHz5Fv7whYukcihduCgNPjnCBpnXcFxg2DmsVYrsnfzeNnxCxQysj2nVc9x6Vk1ZEYLTA7AFKQ5wLEmLGgF",
  "key8": "3L5U8CyARf2BJqKatkUMxzKmF5dSvddpE8S6eR2Yr6LDdQicg5xgyCxpLqdyc3RGDVdhvMwnaV6k6YXMWBZhvkuA",
  "key9": "n6PLaEqMTGEwiMiKqDDAZv7rXcDpCyqZoC5GANxpT1Jzb9zwEshVfUMjohk2zTgjCVkqbY3MYGBYqrz1JhH9k8c",
  "key10": "5DSeRfmcqyKcDYhmrWXZSpahzjrMUdYaybpbZ4dfNGWb7dADwx2bnexU4xgwLK5SovEuFbvPyBRWv6grvo24vYms",
  "key11": "3KiUqE3LT8p2zLb6upwkxZj4bVAZ93kXKRXfDMUjqeSq57ZxosKqLUaGyPJjAiCd1uN8PWV75SYVzanS55kGeYC3",
  "key12": "3HrKwgVq8iQ8Y8dxDxjg7e2cJyBuef59NnW5EtmGcJZ6jZq3xAykvXJHeeVqhrUDfVqvcicT9bLp4piDouFT6PCV",
  "key13": "Do3GWE9GYiYee9c8WR2mSbzv8Dg9bfuNo3F4HeujqDXjdeBXqEvTYCaK9PLXLgHiPSE2wWhZ4Lp5HmTFPKswbiD",
  "key14": "65DRkyrJfetKYcUFSeD2hynKYuDhKbSE9nmqHKCSRk6Qdrthaa5G81PZwaPaifs9Ej7sueBS8mcc9dmEAXKQG6Rg",
  "key15": "5DzX4CqqiPfLaAyKkN1HT3mqbGg88dh44tzVv6PM9XHxeSLqsAgAoE2JS3oSQAXSFeRdqr9pBETMnyy4BmPGnJxo",
  "key16": "4bXQGXbGyNBctUCRJzar3vt4LwbcqysdtW7pxWePpSqSv48ecyDLX9kSM8WLGZbqFAeEjt3jhDikWqiDVEZryKXn",
  "key17": "3pwQDexDk3JGdaPvv1k15JefVbQv6eqVpZdr6bqhysYoyy6emqaMefU2sao8UNtGARe16zRm9o1aECv1eyjtgmKL",
  "key18": "A6psNG5a5gVoBtW7agXYPkgyaaPgwQzjEcaUztdphJNdEPMvQtSVASC36J233Qn3GM4FZ1yZwoEsM9JKgNBPXw2",
  "key19": "57g9JEGdjwkJ9xJ1o7WHQD28aiULcN6H3F5MhRVHyLg3o2DpGZcCsKUAq6qK7umrsvx5daBwJKtykvf3WwcYDeUk",
  "key20": "5t1PVZgfrDkdzVbovRZbdgm3fuGNUB1BS7Y9c8HXaR25b9u2utMYaSNJZn16T3Z9a6tZCEVzGG753Cc4u7Q1e5v",
  "key21": "59w5cwDSS9BPKXRac39dwczThCVTA5GbVi5Djuy6YdDBfMcPsSytYvd6pKEfGpodhNVhNdgeoR6eRQXF67PD9HAq",
  "key22": "ufyFToDDzHCh8tue5PCqMDzX9C5rVEPD1eggaP41BDxyKTCjRGYeLoyqx9N56u81mJxBT2ieBUW7LacPNwzEfja",
  "key23": "AieFJWMFXgnttb71Jr1oQnffgDsjQAte4my82zEamemzKqP6cU2GUYqs3M9FwowYMv9gPNeq8W29yirZT1YLs7y",
  "key24": "3TunYkpyT52fifdwuHbDerGH9L8nPto85t2oASq2p9i6jXxDRHoJg6fyRwawNDDpWUc5o2gPtTocfrm6EE3PkpBn",
  "key25": "3Wk4LX5CS8za76pqCLmYMFUvZocaeUatFkjmdHKPRaPzJimRd388GcUGAgGPkhy2KzMUiQfc2MQAt7trGY7b7fpz",
  "key26": "2Vs5e4vFYhGtauLEVQupescZhS1Z4guyoVxnyKEY88hbNJ5Q8tHUnRihRsmZuhifrS74bLz45WCn4JDisMuGTDzq",
  "key27": "3ZQkFPt9dtUxD5kRGvX4pZ2Bk3e6D2KcqCEP4obQ4aTM6eqHrUJZJrjgYx8o1uCgBaywMbUKnsJ4nmgz9WYW3xDD",
  "key28": "BaSEZghajsjZV7V9w4vPf6DDmsLsR4fcAfbwEjU9sJLhcQMJd1k7ixAGSjoaozpa41gkwKs9fBx1mVRZwZy43rt",
  "key29": "5MpEvTp3DmMAZfX6iCnw2VN18KuKCAv7pVyk7G9FNM8WGUL6g67PYiiGebiPr44Let1YsKmDfhYUgBz4cf6CzmGp",
  "key30": "2fzpAmMsevnLnPkHfpku2CtYvDohpCr72EiEgFmYpUsvpUov8596jBrdS78ZWKCW5Rcp8rPZAQKgiabMzkkqcBWq",
  "key31": "5PiZRXb5wtUBVnpoKLTJrmubQz5w8FuxksDbgXZhiQYfcXA2wy7MHbyb3c4ZBL4AWVytRzgaJ3viobWg8sCDwDvC",
  "key32": "4TPF7dC4udfY2uGqtCeJ2ePvgRfjobXpYxLaXxqHsrak55bvXB31J4cNc9H4shmZBKRtxVVd1VCdmDX4o4mUrK4U",
  "key33": "2X5BgX2NJUjAz5qBJGPgrRW8BAqLYGogGCjDuuGkNmA9XqMMQXV1YF5hpyDeLmPXmYX85nEfJZ7risBe3E3gXLz7",
  "key34": "3iNic6HJti1QqMiLH8xknDH3UWaK7dAvbN9FaunnRDjf8WzrmYEhzLyEUxB5sziaGi7DB5uwGF1tLCuMgfPiAk8V",
  "key35": "53gHWFmBbiY2VazTCf7TjnvDghvSsgcqpNPA9V1KyVAhot3FQTmczbhbCbmQGHqRKmEhCo7AcCDJJenBmr5uhyF3",
  "key36": "2rQQQBrsjXoJJ37h6LosRTtwAxVpD48LzBBg7rzNqbHzoKT7J82BDAWDRoQKccX5RhErciuL6gtacnTYSsWh8693",
  "key37": "2SsDJUty6j63dHjA8oV48XKJV81LXV5cuDRHmZXAJfXTvx8KuMbtpWxVdTq58SY6kSYRhh1wB36wD3LfmZ546EWj",
  "key38": "3HqpmjsfX79PJtcrPNnzNYbNxf4hqdoMbVVrjMzhg9ZehehuSbpmFDWr9WJQfqNLoWYjQeMqQGRbsMavYj7sAS4j",
  "key39": "42kyg6r2ayeD8Yw5pDsBmkXxixfuVoxn8De3pqzyfHQoMTc9KRTaUUCgs3ztue8wwCJtGqDsrtwEBPSxjsbVFFvr",
  "key40": "52u4rPq1NK929cfMBjyqZDhy2Xq2uZgyJRZWdq9qVH93eoQbuYStZjozgXerpLgscU3kCvz8QEkFsLpLiEULL3v3"
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
