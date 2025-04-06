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
    "4gKRpaBqD6k3ULXx9tiLf3q5QL7hWgL95D5AaQmZbzfWPbcApYwzLtDpb4HuN9B3S9emAowUcXD6v9tzfrA845Qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wY9dbpaAoP4ywQj11mKbAAMjY89KZzXVuL9JyGRMAkzF9jRM2TbcFXGbnpoq9cVd1b6Wt1XZpxv7zcMsBJK13aS",
  "key1": "5tVPk7F7pfhMJh9XPk2tZPJtueNP5MMPwVTPSsEson1D35beMuKMk4N1UPpBLHvzTqpjezK38RQJm21KM2yuzNq8",
  "key2": "4H32gRzSQ4rvx8AofWXqfmiMJfdBruJpNYuyMYkiWLd6wWLzSc9RrACGH3hfzUz7AoyTTKhKoYfjvXvm3rBgG4L8",
  "key3": "V7bXXoJzHxF1YKWp9QvXeZZQHS5ka42qbX6YicY6sXvB9VzyrghqyMM5y6t81dLxLQaghPct86S6H1oDH5ohpJR",
  "key4": "9L66wL6z3n16avuennFq3yGmtB18tvPUT8RGHSdHs83sxrt5S33UcSmMxZzSryANzNHpSUN8KMVZXJ4g29pyqaF",
  "key5": "5NCQMXrpmXGq7ybfVrChwzQEde6HP2CtM1pevtuCCAufaDXh7QZ6zPi5PDTgiWYjER9gJvMWAUFo3vvE9qzCiRHn",
  "key6": "3beqTAnocXi5UrSHzUTQK3vT3d8qEMkjxLXnvM35D6kFgPVRuMYWGvLF6FNQRGHimDXeLerSKUZrLZEYuC5cQZ2y",
  "key7": "h3mPDX57JA4bpPTcsUN7WQQVRas3W39vLLt3gRSz3WRTXgwU83smLuv6ABGBbfLx7BBk2PRthfFDQ1jwgm2opL4",
  "key8": "3ii4bH9VVbWo3XiFRtyH8fuAY3dqA93D9JwYWwquv1gTNf77SSmvtyLWFL9zHjNZrev94KLu5soLchWBTEn9VAUR",
  "key9": "3i9mLZtmT7xKmm37YxxFJpZ6A9rHDUxVGaHZcNnVf6dRM4DASPVd6pMdbZNdY4tqN8m2Gu2PUU24vUo6TqpPVu7j",
  "key10": "4MMzfB3okxqMLTtUn1U2sP1KtPNt887Y5BT1jxTwJKeWqBSmZpTTQ3YxuTz8iYoizMEbZb8vC915FtRDcEnTjxqv",
  "key11": "2YRL1CQujBPmAZadiKiRC4ppRC3Rz5VfFTMzWBsZcqzJq5brxF6Znk8QQKMd4WdFH7YQWdNDzyaCUzuiTrFpWVC",
  "key12": "CyA7k1QX2eJrr6HCHnH2gZDeD6f8CYKuBnRmBZn5YpQpXYVDwMwFUQ7kJKm5R69RuR6XFuYpr83LwVoyj6ZZYbL",
  "key13": "2NsWuov6dLQo8rHvVMRoyD8QsPaw3hxgyntDCRGtxsF4ad9AtjQGq3i73DF7jsfCSE3JeRPaaiD5TWwMZrN84xuM",
  "key14": "2pskVJeZ5czmdVUUnTD7vv77FEKmNgWmypRHuZHsVcWEDbyjcVN6xpjmvE4PCUWieL73qAhARMPQkYbo5CZqnfrH",
  "key15": "2JbAH2E9ptWDjmRUNp7Ce7vWoTMy3SQV2wft1MSiGtRBGgXHsfnm7ArNGdgNZeqVcsfDn7gVYM2qJX8erndxDbH5",
  "key16": "3YvTvZ6tmqY4BzZvvwCRZUEb7bBMyLqrHimfs7BaSxkhyVMTy5cR5Nhf1Czf9uqRQm3DgPhbanL6YToMjMvKRz7v",
  "key17": "3dvL6p9wR4DkXghxEPCHNvBjuLjpxgpCJGFyj62zPrNj4gr1En9Z4pzmWQdw6eHbsU4oWmwsYJZodbvj3FLoubbG",
  "key18": "AvcX7AtZoBrRTcegPPkVYhTQ7UEorV488jp1LvJh5WR9ZUESPfgtsXeAynR6nesX9UDfguFSNAf12bPB1Z4YbTH",
  "key19": "62M92aru98XgP1THQjHs8aYksgpxxYXxJ2vpMnBTZ5xy6pxiH8kj2uxknbFjTg1BocaeYPrDCSkhZ7GYrKjGuw7V",
  "key20": "5FmnEogmoEzbZeR7msLxBBDaVQdRk95xnpgeZkzGMYz5yJ7nhGSGt3RkiAagp4ebFKGLNmgjVPaNyd6BUkU4xwnX",
  "key21": "5LjAnoreWq2pC82hcTGew4bdD7YkkBMAGQQ5YA8reZdnZS86C8T94fqPWjw4hBRjMgBV36DCqgMSe89NBNrYiwmH",
  "key22": "2TdNoEqf3wjGhVno9f3gHHTxBP22gowqLmtBU8jQAyguBxwGyZ78asHZCQn2AGSyy9KNL8i77wWDNr4xmyeoDqqp",
  "key23": "4pVErbrvM5iXGh2sHzjY4wCvybTpAG7gQNyyrxSkxsty3XRzRh5KGLbtqWJhedh1bTA177syi3HiowFxEkRG4A3i",
  "key24": "2uirZ2LWTZ1chRYD4CFf4YK1ZjQXFwYjv57dVMnfpaUV9q9oi1rePekeXGXfKHrEfp2QkHj8AFuydJfmCQTGiNQr",
  "key25": "2Ah1WWXSdJwD33X7cn3EGCsp53wX4iQfZK3VRC3VuwnEuuCrhtvMHFVd4FRhfEUdjtxFHakYc1y1QXSCwU7fsiFv",
  "key26": "5aq4xUEvNLiCReEpkcPm8csNW2jhmLturjSWcg3uky6njZMddPbtacijnWsgzPer9oKnwP6LnLygY1Vtv2UHvpaK",
  "key27": "5FiqPcezfsS7TVT57BagWJ8dyMX71x1kQkuMHHzKGEbA9UHthaCJgcu6Dbn5VMu6NUfKTi7fXoschCxrDjVvTSzp",
  "key28": "marcoxGDU5necRgxjUNWQXXVpVntPx3nzPCHVEswdqPNDfy2KCrhmhHtQkw35nJLFj9DemZ221tuqJ7VEmyfB5z",
  "key29": "3aod5mBKoFhHBviwXcAGURjnybYVJJ3oTpYGc3XDztioyrGWwaxyYzrAvoJHoB8GyaxmrDPA7bAk5oZT74vuJhm",
  "key30": "2xVZoSNYGTNAfJDbqjK7YbpY53WFi3DUcbBrq9CGH4Q2wcmhGQD9Jfnke1AuPs2Ca9FFuJECQnYimhtdfeMjTtkY",
  "key31": "44JQu4isVL4CdXCajCGn1tpY4sQtWm3dYUhRhj1Qh7ZpohZozkYq7PP4S81TVtpyeC7y1MJhu9WqzH2FHzER7eMf",
  "key32": "Yk7tf3QPfwK7YhKEsE5DSGqWiVKie8zjFKTEUUPdUhPBkRbePjCejVTea6eYzbUiaresCzSnPqF4fUHoEcPKL4W",
  "key33": "2Kp5fWRuNsXdGHDgb5WyucRkmfCadkLJhZuGAXXaMbUFjtzZKt9k2VHwck5tFPAJvH8yxPUHNdo7fDBwGGcLpkbi",
  "key34": "xXBRA7Lhgqb2efSmEWGyc8TKUqnkLzVU9Uqx6P1kopZTsKtN215DJPVoqBxeGcoXuFcD48S6Z5Q2oE1h8YHGyJP"
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
