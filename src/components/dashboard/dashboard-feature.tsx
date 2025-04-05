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
    "oGdGUgWeKANqmq7Veh1QtPeBcaWnNEztFaR46C4vEiKYWPMimPCT5t8mX6EZttAPNkHrPExN7Sd9REBHsXuYkVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gL6BnesDJNrJRHj5ui6o5JzLnQQ2ykbKvVwiMn9cmN92hJ4uK2jfb4VGCgTswQiwuNSvVekwP2K1rtM1tm9HASV",
  "key1": "61U7aGpo6QPMXRfEkQHRgxTRcfiQtQDTNkrk34vsxLhSJmprxtK7BtqR3f8Eq8EuArdqyU1XUY6rZfvtfR12utJv",
  "key2": "2DWjS9wbx5RqZeJwb12NJqunCUZ2XQexiPmDfSZ1vmWhur4H6rMLrSuCP7XrYGemdcELqE8KvQT97awd1kMr1Pnq",
  "key3": "5q1gx4taDcfEW6YXCGzMtXAiswjPNiFPTRB1oqgxsdosvwWiV9prZVrXha1RBVRJ9gHAHkFPbZf8BxGBpJhgmh5E",
  "key4": "2WZ3NzkQE6DfqEF8u5D8qaPRvB7cJw9FbvWMJiwgyqQoBnvanxTE3wcKaMGMhyCDz1A61VrdWtjB4M6dseS3P8BW",
  "key5": "46hTfy8XqEfNmpuSHkjq7hiaGjS2ZVHgJEkqimhFrc4SpnTHUiyqhsZqSWZqSreHNJMq5kWV8hb7x1f12fUBrapC",
  "key6": "3LKwnA2B9C9KMvCNFcjkgmenAu2qqLquJx9kqsr8GEyzCHuJnwD61FMHrWtnXwHbSrFWok4hmfgPh2y8QEi399yw",
  "key7": "27nSnD5QEJ6thnHudJiqGcoia87EAQHvXzcRsoweuSZnRH7WTKRKtiCM7BX3K7gsQM8TC6FgPy3BmViqEFwSSycB",
  "key8": "5xFnAnTLfdVH7ggSrVRixomoX2X5sMdG4s17y49FnSqMKoxSy3QAq8WS58TLWkpnUEp4rQhfYuuh9PWLw1v4rGYJ",
  "key9": "499YwR8f2deoB6QL8eSgV2ikdeUczrau4yXzpA1PdiZhrDA8KtoX3gbeDWsDqRxsyXMHsiU2tQdTF4BGzgXzhtVH",
  "key10": "3Ex7e1Js7299UJkBqQg66aMQ4cAWwW6RNAnD3xEuLXLmb4ztT3PHPeYPPzG7UfMgg6WE9UrBfdHv1HsK3a6wdsG2",
  "key11": "2UP9KmoZB1ezir2m8jCRq8gvAvhVH8k8BGZXFk6Gh5Va16AhDhCUccGQ9Dxqzv1gTjUDLTkGYAoh2UyzcSyTm3FX",
  "key12": "2tYxYGgPEvSFDMhJL785NEu9escFMpF8N4nDKN1d4EPSR46K3q5SpRJLBV53kuA9AB3dodHVifqj1JRfU2bx9h9L",
  "key13": "5M3gsoxskJ7cVKdr5ogTq51b24kE2htj5skUbnMqGfLNNj8wqxHNxHFUpAoCu3UMGj3oSi9CqgLGSYa5SsrDG8EQ",
  "key14": "5XyaF4LgpytENrhQ5ypfPvxMwWhPJhKoUkYmvdyabNVDsrrDeRKmbJERmj2L4582rawdtHd97T6cLfeXNtMtdu2g",
  "key15": "5oJeCdd5Y4hZFjDVtrDC8GT2qGr5ibiaVmLsAXZ84HNKkFLtFqBgF2pobFHVeuAA4pE7cBLG2CTkDb1XZFeToiqT",
  "key16": "348K49rQJLRv9dKNCoq91pFDH9r5HSCbR6rzTHH1L29YnPquY7h17H97GtHCUknjyWmd5qGVCSz6KhFmRGngHqZJ",
  "key17": "5mZXehDaDr4P2fb5uC8wfPRZFXVuD8PJZ8gkG7uChCmC8bXEywcovnTHhDaZTgutpYqcj6WgyBjb9Qdo9WQKqSEz",
  "key18": "3S1BSG8JcvEjhuHTYmGRNTrxKEupY6wGMiN6CfpVPsuovT897tyvacq6neAHJFkd5vogn67NFCJqyX8ZHepvBwjv",
  "key19": "2tas63nG9xtDAouwMJdmzeeazVEBpNebuUrrGhVk6HXeFxmBgfKTrj977y7eRNGE3FXDzWPrJEX4YwdxRRt2DMxX",
  "key20": "47qXECZuV2tkXeBQRKtJTKUY8R2iVqjfbt99sFdmJfHvXakgE7AkSebRHHYNvAvXDtjQaCB5GRPnMES6iP8rDiCN",
  "key21": "5HzZSb1pZBjWLLCHcjxzYcARDYLKLCU6bj4VedvAPBK2UUwKRcGSp7AztTTrEJBTcohDoyFq3hdL89GH9VXDXyr4",
  "key22": "EwWBz8TKR1q7Dme6uSWRwj75JjSQLU4DXYPAKgTat2xEJRbwKSZY8eQE6pYyqhyTtEGzeyqJqFcP6W1cbU4cvod",
  "key23": "ugkuLdFsCFZWkbTqUjiLQLvVLhSpHEt7JAmH9VefFGqdsPgz8GadBQsUSD168hvYgs59MBFLGuidw6GPRiq2wye",
  "key24": "4Wrgm4KXGeF8mnWLcy9B9X9QwR1hcVqmwSMnhnnPViGkCxMNnCgjq1H1zYJJZBffv4qRrxLjcuB8dPJkofAu94Tr",
  "key25": "37duB7EurZL3JmEztwFKppdxQBMWuvA3rxZ8UjzfNvpfwBGEfNuEcxG1GS4EVawVecgSmKw7NWKrFhXwUJ2mem8J",
  "key26": "5cxjfTdz6YRrH7HKDFCAbBuzjzNkecBeNRw8uZfot7kBQXRW3jUbjuVLMS3aHNDKVHWoe9MCfu2PxK5hgQmG961N",
  "key27": "5gzv7ZEHp7CUYR8jVsvFuaCbvFw4ctDev6Tp3Tca9GB3Ad57P5ivYJywebSKmyHteZ4f11j8PcZTY7HLK7NR4wrv",
  "key28": "DLxN7oGFs99riwhpJAeid2BD9iudFE9ySP1FoaUobWkYFvAsAqcB62A7UQVtXY4gx4t9T1WespE5pb2ZVzZidh3",
  "key29": "2zfWtxy4GorGXEZCQHfoPazv1yngiUqwZFjYNmZYVDKvsYSNhcukfxGT6Rt5AQKovWf3zUY6ubQLfSAzjt36qt3T",
  "key30": "ucFsiyWCpt9wJDHAJbsjn2CMXZMBRefp6Mw5xezaaEjxRRfuFsSHyHcvLeXrhnkWuFDcNEoFWpoJEpcHGWcdp5x",
  "key31": "PVcKoo6Tp1y21zqQSqpS6zJBK742kGRSsMv8GhrA9st4PagJpraRKwT3ATsjmCTyCGpJuFYvN9ULqiSMy3P1YrS",
  "key32": "2g2bweraVuH1bKZWEerhJkqrTzf7y7fVtEfWd8Szvw6JqdUxSEz2UcYw9X7Q2TPCxZRKxiDH4ozXe8sK4qB32QWH",
  "key33": "GAiyRKoDGRLLkQHeGUyvkT7o3Wh1gjYE2wfE45zWhRsZt4qW46hBQEaor1ZcJoisbqugbasma3z9TXV6Y1dyg8r",
  "key34": "5wCLAKokGqmNxnvyP1bXyL3zxxch5qfxBCsKdeikbBAvoLwaoXWWtwWFgdrkSF2DhkbWkdNtT7apTTxFmzRkebh7",
  "key35": "2ZzgBJjvkjPAbov3XbRfAmhYbeD5v4Qa2o1BSQSE61C8pHE9q5BS4823PeimRgkgj3tMQeMX5QHtzJUV5vqFakZG",
  "key36": "4P1Sh97ULvpMw94nesD65yvsia9op28oL5dKcj4DbJ7pTP6vEqo6k1TRZHeSBRiBX4dbK5JGowAeh4BvpHreuPgw",
  "key37": "5VCwndpt7GoAnPZThT329Prnk3hWbLRdJKdk46reGATU7NZiodqpP8GaZBRWZzSm62QoY73CaQFosheWnHhBcV2E",
  "key38": "5j3BhcuRK3cZMdQgCAqbMAHdSxqbU7TEivDEDNHz5TKeStPCmNeT5Lq5MMcHNkFJBDzE2HDj8TzxbccZ6YrthvEY",
  "key39": "3xbHCGRjui5tXatHsZvxL6tArvCSznAqp71oPGUFuhvykPbrnK7rsY8SKqzrA3WhUmGsSf7drYk9SN8iEeSMSvaj",
  "key40": "BCMoWGwKsXvbZPjXo6hiRLTQGg5f81ch3LmsiVdNEawAePAzY7adCmtAFicXxhVZc6sCJEWhkKryhUB7GXHzpJb",
  "key41": "5TgpFQAPwBfdMT2Ez2VEAe1kVcL11N9pzgZAd6eB2Q3xV6vp26krnTLFzC5YPvP5WCYJQANK9yKHhVUybD5oVTuc",
  "key42": "3ujvCYUwzcdeuZwSDSTTV4u9nDdkbbcPmcYmnfnvq3DP69zesyMc3Jm9oRUDBprVGuqChArJNeJtjfWFhS5cPneG"
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
