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
    "mVf5932pAyRAQmU1xhVxCsoaJfLG6szJuWkoe95GmCnvagpUUpQM79YkicZe63Gz2oszXDroHkzuXsCRFrDxzoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y7NyHYkS1DjtqRnPAzSDW2nJkR74ShUYbhyfsjABVH4CisjGFghVqw1Kof9zRmQuCLG9uAwtvCtJjHbDQF1PZFm",
  "key1": "3dXUH6hNbENAUHHNVTmLDhsoUeBmpz8tjrzpZ8ttvo2njYfDZeKBJtSGzSWuQDEx3DMVMcSV3Yg6Dv96h5WCEiqk",
  "key2": "61PGLBXuYvQzr2mA58NxSof9wRydgx6E7LEoqYuCj3aUs4BfiiJNFJmobFu2Y5DCXiroBcEzStaecSqEGvfHXPKV",
  "key3": "3vNXdWZtyS1W5xt3N1LnmH8QY2QBMnmdHHoKR8iSt1x3XaHeyfmgZsHwthSq1fp8dpQ9vyWmwoyAxFJGJQniQ7n5",
  "key4": "4Li1XKroDNUTqMVn9HpHTMhVvZW8S9fPgPqC87QTqyQtpj5aABioSd9oVMwkMM39UaUK4GmCBAefCd8piRbDEt4C",
  "key5": "CXvHDbgdx7XNetj7yA5bBHQgQYN9Vv9UtSQ1oS4vDzy1oZL8pZfCZi6oUnWJMnK2G2Sn2kn4v3FkbZXqJpsqaL1",
  "key6": "4WqK2D4xxa4M6KFZqb5AntEC3ad5x8Nb7CrNsS9qEgpcpNDyJfXMsRc5ymMDNQyFu7vrE9KxHPsp1sSbvkNE2gkV",
  "key7": "ZRsKUhrDT2mniHWiMdPYHvJPsKaGaEoPTnEBddu4FfL8BjgSjW6jnXrE4DRv3FvEHDaUDgvSNBKajv4XDitNEjX",
  "key8": "58HMRsJv5q2ADgpLhBnzZW7oJ8STwe9moXvHphG3MpqcXFpqLFS8K1dqk9NQYnHJQndrNXRit6Rg22R2vZB7KxFg",
  "key9": "V7BNkHxbMnFYXdGuSMzsazFckBGUPXYTWW85s9EM8WAzTxura2MKHhGM3v3JBYu7yRg9KfkcshFV43bwLY6YFYP",
  "key10": "59K8FZxaoc5sy1ZNF2nytR8VdsLoyYJv39j9DjzEF5F1LMTtDWf2Et6QtjU3nXyLZNjSaf3UcvzXVzwgDiEFUYTD",
  "key11": "HwYih9qzyQGKbq5ybLDvVJxVKtuk42sf84yRRutSbFhZnEFNPMFR5sY4Kvnkfy1bBJWqCzqg6Ys6cnA1Az3R594",
  "key12": "2Bohf9DHrjnEUBWv7dHwyqDwyzQHrUwjqxNY7U3EhNpNqYxoYcbXA8cpiaTi6SeTLXLsLzHaFD9aw4xgCEiwCyT6",
  "key13": "3xBG3FFG7w6nLheXxVxAyc9XqxDu81vnfQMrvywQZNVgDrAVn1Kx1wdRjkBJyG6owQ3euYUmpyejMWauNeWRitkB",
  "key14": "2BDUbUGpG4PoWZDgfqFZRRAj1Q6XBBh3qp3wxWx7cC4TbALCSEx5VsGNKfuqWs9kKSF9CwRE6wTDZhNgDKMEWstA",
  "key15": "3Z824WCNkZZdVBmKE2APaHxDAHYdB8Qv8yw9s7UQmd7i4Rc2pVciv4a81M5dTn7dhCK6RQoC7UZ1vaWust9Xbx9A",
  "key16": "5U4iMWzGzXrUTFB7uK3HgJg2BdqGMue61xUtXrPrXZp1TzFNgoWEzjMAf5HQUEqBYWyPZ7L8iREqmwsreq5DEWQL",
  "key17": "rn7QDKkRwXdN2gnhD8xszmjBD633bLDKcT6JG4nM5fE5VmVzQAhrprqqfu5wdUVfHLs2sN7zNUvHrnF4xXxuPYL",
  "key18": "4YyRKGYyNu1sjuzRoPGG5JSzWjiWAEAPz1ozscp9HvN7eBVsEGq2qedn6boYvGXY4UyKpBUqNRtJ9jAp8JMayavD",
  "key19": "3EDKGJwRLMpBKoK6JnWX9ScpYEfNQBMcbCofc4u5dpRmGhPCT8VRsk31dWcdqvvD3qgxjJwoKz5P2exY6tUVK9X1",
  "key20": "NZnqFApcyu1quKM9JtsCdGDrVcV2gkYwzzo2g38SaRc53YiQrtvSCULtA1U7e59WnPpr3fHa4Qg8hN3YsT5uNwT",
  "key21": "BHxJBSjeSeebPWAtGh1giMYGXvDHGhkf4QxuUkG5rU7vbZrDzfK62PRxcUF4xLRrJnnAmJGL2mGYGrsBEQV2b6F",
  "key22": "3Y1Jp4DBCUMdU8JB5494bh1xxi9WGYyybp9vSRQa9AK7AYHuYJArDmUNaP7rTHR79miD3mKKBezgqakNMq5NFHQL",
  "key23": "2YbEBuX9SziG7LZ8uqTRp9PuJHk7gJSdTU3m8BeiwXtyHan7AUGR7zkHgXAT5qBdF5MafoVsLEFWhHV33vi8aDKD",
  "key24": "xHwEmmqhwcjbheGiVE414UDziSrJ95v7jYXJegUNQZADAAFPrQx4pkEgiLUsmb6x72yXrhYohA99Y1mu27Rnjgk",
  "key25": "4HmSotV4dsEZesWuNLx4s2iox6Nu6nxRrGNi2ekqGG3K84vxUeR7QX58Zq26P9WeVWWMLM3brNt8W2T5dn47tgkB",
  "key26": "41sXzWARLJoyah43AyDuMBR6HMqRVoxDzs1FPfhfJzWbogJ3MMixjWzCXfG918HXMJkdzRwoa6pTUoSLkzRaFX9r",
  "key27": "Ccp9seRvXEVneheFtbAYL1iP2D13f4RwKtfWfwXhhSky6nk8CfTkoX5YN9ckTQfTEcMemy9QN6hYZiRKG1njG7q",
  "key28": "5rkguNWKtzA21gx41pSECqYvVrQENWwhuJXQFfb63Rea5hbMJhLBKMnfEpsa6vd1yuZoUbZihKuoqdc2hnqb75Ba",
  "key29": "59FyuNXsdkFEd4smXJzFYAEXxbmx3hF5xESqftMtQT1P2De6JPpXE4d6AN8oVDdNW8Nmo6983F2Egw16ZC4zRQYe",
  "key30": "4kiHQyQof1tpdARgU5YU6STEk1Z2FU2c8J3mG2K2mKyXzfbPX4rTXdL4bKCJFusbWtkY2RudM5RekkQsRd13nXZv",
  "key31": "36rsVJuH4QQbfLsHzY7niymZdHRVqpYdMveBodAt84fTYMtue7AJebVkUBPEGHRPSybhNGpt4r6Ftz7P8XzzE1A8",
  "key32": "2GZW2JAWhfAYej96mfzHv8y3QVSz5ziq6JvKfBp2nFVAxg3tKmoPML3euNM3k5spoJZMNm6CuGicGi1h7wAnUfpo",
  "key33": "5Hxye2XWEi5VuMDpcqadL8FUqcxnBv7Atmy6HjuRDAjV5dcrP9EuAiYURzUvqtad89kopNZGKNHcdZ3Topj6LQ6y",
  "key34": "2CVQe8d3YkvGnaJBkGXxP3CsAkfmrkEFPDr9u1kD4prpfRfWxd9XbRA9ooW62ZWXMCp216vsCWKUX3tAKoKNDBSX",
  "key35": "2AUCj3r8U27cs67SbfxSihex1y7VW89MPHKsAukGYETta1Z7wZA32WDaGKjBQYvpo7pt6fWBuzd1nuCg6FMEwFzP",
  "key36": "5TUjZZUGqQErdkL6T4uiQRkc6aX6ekqAQsWKiraGURiwEU27anzKteBu1HSZKexpE6zPEC1LW6FyWQ8MacLLhUAu",
  "key37": "9HVX3RYZnGA9iYhHaLB2P48fC2i96k1W9e1x64adtqwKc7d92t6gD59U57CbP87ooGc9bbk6sKtkYDSi5hWdBDP",
  "key38": "kyGzXbhzcjTLhjmVXaJqDPD7ojXxbEDA3uXXoBqxbGRh77eb2U9WqqamFRFtRvPM5a5jmTZmy3zndLw4zDYu4o9",
  "key39": "4gnkEXvcCZXaARWfHv8PU8zSs68M45jpE45b4KpU16xChNtUJmFhAuyMknnDvJLoTdfQYrnqh6Y7bZgwVGSsbNzs",
  "key40": "242TffvVGKAorymkcJQ8zapdGTnMDYeuYj4C1rrjG39opwfjFNFmw2k4cGApWQnZJVRaJW1TDzyWS1cKf2xuf8Xq",
  "key41": "5Bjyn8BtAbj9HCPYHFf8ynEJBHBecayTiKe3t3iUtb5NV6E44ff5nyo3WC22KWywK5uRUZPucd9gynDc78foi1kJ",
  "key42": "Ad5yuYPbg47fjzRKR9FefDHaWzVvBt3NNxh2nC5XiJYaDiEkj5W6VDYSdaSDQ8QnYwxt5Sd4Vr1sYRnic73qxJe",
  "key43": "2cf99tVwt2eyAEFpJkC1XG3sGQWM31YX3AMjQmMiiZm5rj98zKvavm9UySYLbCaq182eLUB4fY45RgEDF5qVWunH",
  "key44": "5gotVHt9Qd63ojgBi2pjqewaxmgFDyLrQcfi1EP4JMVKVWb2SVzhBsE7nb8jFRZcYS4XLr2VHELHHiPZoakY1gH3",
  "key45": "3XASzTKZKvboGn7uehhaTesFRpkswDhES646WQRp4K2QF1SqZn2xnQZxDtnNNrX3HRw5Pd5AaR9AHknu6hnFSf8b",
  "key46": "v6togG7S2YrHoCuR9DbUhFYBrw6UGgvWernkKikx5aZdx7fvoBPVnaymSLdpNdSGbrK1r1qNceVy6QYTtAS3FpW",
  "key47": "38oth2ys2yRUaX28ssqm7TxvkxD1o63nDjTaSie452ZrrMkKkLG6e51re1M3N72jJ8D1r5ULSeEJryUecQkG1apx",
  "key48": "5FWhjdmZPCLjoqA3skoK3LPpmQ4UqnFvX3DyBjkRbgg7W21K4TBwxbaHQgCe52DFhyu6yY3hpP35Zz6Pfn3wQz3w"
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
