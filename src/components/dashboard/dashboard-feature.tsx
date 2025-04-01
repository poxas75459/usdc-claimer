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
    "3y7ccPvtCrL7Qbk4j46Ss7Ei5JKRjapsWfH28FWiFqfVBYpMUDKBbRfwJErXh1PNLUKEzSFfMxPmWZYrsrYKUGPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2889R9jPvrw1dR15RNDDxGRtPCjUyPDM4wAaBMadPnFKK1tCGtx1AQSmRr8YpRoQob5gja9edmBP9Tr7yjBWmzzC",
  "key1": "8agwLVCikPXJsXHRXw3f7id1zuJF6EKWTPBKviGVUMvaxZm6EfYHW8mQH8YtCpdsyGxHE97E8yQ6ogfwKsftb7v",
  "key2": "43LeeCAna7ZZxeC19VHVQwrcNWqDKZq2TKCBRAVjMr94vFNrzn7w1NmHmQWcLHebP1o3FyZzbN7PzapniFBScBgz",
  "key3": "2qYQGC5763rVPSqUbnyVK3CeXrXdGmg665pYvjsAxESJpqgS276SidYARi9u8CrkkoRW3GRQmSzwKCkSmKv2eSo",
  "key4": "2HUBAuVTLMBaLWy5WMH7VZN39vJzVHhW89rBD7fCG4kffyEisYYbbxwh5WkcgrbPpNkzKT3JoazeGHVTbzQaHK66",
  "key5": "4uqVxQgJEBVD46TiS1AetStzzi6JQrKkeoivz8oRQoHKQLtCSNCUobPXgXSM4BoSK2dZsA8QpZHHvr9wEGq1ZYRg",
  "key6": "2qcKS9hDc6m8h7jFStMmivgTXS6c6iQfLL34AraKnv1mTxKmQ2E2nCyg8zSptwYk72RpbTDn2Xb5yf4JDrwXEHDb",
  "key7": "zJmGFFmdQdY1FwF8KmBZ5vB61wjGRAAcwcqmokkANfw8uoCBnq7KwD5FWAZQP5E46yawD2aifHz66QHwnYocfyw",
  "key8": "4zy3da9uanzwa82wMXqpdjTHmRKFPB7eSjZ8huMPu49uaEL4r912NHXD3MGcFXaGBm2kjmVheRn314DuuxvmGFUg",
  "key9": "3YooPwRq23vgdE4qKKjUHoKhLx9SqgPqWA2wZA1LmfcGcrnErr4jt95iDv2ABuMnLdFzuVus4XEMRD4WpZw2KzMB",
  "key10": "h5CdMoAbTgJcov6deyiwPZQfTSLdRX9fPEShCXsxKuRxAC4H39Wqa8Ns9e4XLbZytv81Kri8qtQH8JYHggUP8Sn",
  "key11": "2nHQNsxHdLJdWwRqmcdjxSj7DmJ9hqYdzDY8q53Ecb2exKtU3oSvytj2NgBFwTncQ6ERLVAvgJ6db5ph73a6BXxs",
  "key12": "2EMA14mxkjDCt7vuveAE37gup8xUXrH6pTGnrkygQP4pYDuMHfn5iH4jmWWEmv39XTvfWr9hKT19C2AGApH89qdC",
  "key13": "DU5j1tQnjSwe6Kzq1d3TT7dmxtVQ8D2ChriUS6x8BJoGjNjgiMhgiQPZ5bZ7Urn2puZ5LhS7EeSdqd8XJcuAoXs",
  "key14": "4NbumpcXE9eay7dUwzo4ogp37zcfXYZzgFFhmf3roSGHz4uGXpggD93BPoL1Ds5nBf1MVcHq7Y7qxYZX8UEaw92p",
  "key15": "4nELPHXVsrupgs2umKcWtfmGY4vHuhCRwoPUgNu5qNtLL9HXNraisSU5gQ7bZcAcvBNJyu9nWaSNwLdN4eofSvLB",
  "key16": "5nbM7W8ijwHQHp4UsiqTdcdmEGa5SWkR2isSX1x3DRifb2xxRQ1bY3b4DXUFzVw5ijk2fyHPLbWSQGGokk1dbasp",
  "key17": "2if4gpqoppUtjvTwU4FYkCYcZkDDv4iZxzSW83N6rS8Ax1Y47vBaLnrDKTdKFPZx48SniVVL2ZZ3wmEwbGjxRen1",
  "key18": "4s59bypzi8hycD6TPytqpvynQoLU4YQxf7ERo4GshcDi9VnUeUixCiEWDN2qwob4SiWGfxonAHHhbkHEtqqEUxUn",
  "key19": "4TPab6W5Lnhj2AcRyGFPwPc3Mn4MoiCELn5UoanaKtNzWLWkUZ2LqCfNiv39p3s25A8nQeNTfPFTfmMug5XZqNRs",
  "key20": "281nkrgCXYmNFk6Lsi7iWUGf3Ddw9wZoz3yDcFyuxjHojumMtpMDgZVJ5JzuD81f6d8KvnQUg4TjTLYiakjSDayD",
  "key21": "41fCn7RB88D5Pae3YN5Arpc1N8JpjQthU8Xuogcz4oDr1BUYAHJ6dQwg4BUJcp1PR7uqx94SiSwpSRmWwZ3DsJ56",
  "key22": "3EsRS3faZLPDV35kwqRE174U1KH7K8Zvi4NdN8tfNFoijRj9pxFtPh4Nu4AgNbanKJrDV3jQaPtxTCXBCXb478ni",
  "key23": "66Zz1aTpMeyTxb8mEEPAgzZiSB5J2Eyciyhxnge6fWtHbRuQqxhoom1GN5fGSCnuCeU5HSBcqXvKx6GHdWCs5LPs",
  "key24": "3c8HLeMPLAYWc1krdRWKwDRJ7xSEj2cTyek6v1dKhbb6P8mhw7R2pvZxFKKC4xp1g1izqimhLbUB1PxRhDmw4Wab",
  "key25": "4gFCAVwmzJWWEJAV3MAMzdfZqzqi8ZWCzydgUoBuD5UHBvMJ1qBmhgnExgTSqLhVBJ5cUi5y6Y4uf9eJZnajkzVi",
  "key26": "5Adfcrw1TTUjnTZyu82GMVomp4hfp1iCJkbGQAhTus5U37n8VHfhpvR9WVR3ecGTnxr4cjydVTfK3EBqwd4HsEAs",
  "key27": "5mNWnWsNunCHA8GFbv1UeyqctsLpUaVRqzSYVKYSxYS1KsYJNiRgAm4wgtWdFShXs8pWdqNjRiJbaAS1uyKM856S",
  "key28": "5AAjfYn6BFNGcG9MWfYufA2BbCczd3gEVEFMh7ND5eVEqANyV1rHPDM2CtuskNj4j27tVEk6MKmoZd9Z5LpgPvgY",
  "key29": "4VXnMjG1JSMS6Xw2kwajVquhZp56aCmrL1ssu4Rwyxj8GvFQaVuBTVBuwxfhdzU7Zkd54PVbXZJ67EdL8vMXAvPw",
  "key30": "24sy7F38HDRwm1JLjk4mNvGwsqKTg5LcUmdoJaCP8ZfZNXQFk7eayJZh32DiAz9u6UupH94daowVmAWWAb87wHpz",
  "key31": "4RZN3v5ML1zNT2uN3hmk39mYtmbcFqJ6frt3mxA8V67DSJaGE5gwKsT8aTTA1hWqRCC8dZMwUC9MPoaa3rFnE6Sr",
  "key32": "3pqmqGq1Pa54q9uXHDCVKcDynD17vmzmakCcAE94jSKJqNmkQkpGyQV4ipye1q9rm7mvi3TvqRBXF19MNj6wbfZv"
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
