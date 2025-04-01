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
    "4BgbN51EV6AiSXwEHYFVQwbz43gdrtBFRK15HrRD9exNhmLkCDMmA5cc1gBTeM3B2Sr26c3sWySZ4Ux2jRhdJnzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43oUhJGbtMP5kphRL4t2gtneMKSfQRXqVNbDHPKgW5Lj4X9iqRd9nhw8N1Xk1RPY9an8Gw6xkDtRGJn2vyVrADN8",
  "key1": "3Kp9jacqGySToGxhcdPQAuxdZjY2qe9ZwgSoarnZhZ3cAwavW7YSiNNeyToyXMyWgEg1Ck8NpnNZaUSuonMT4uUK",
  "key2": "46KpYEcXdofvF7MeKnSmN6X79hFogi5Q4GEh8AgqezihDke9C97CGJZWpHQ4WiGsRa3xdUhDdpVNdUoZbLZ7KPbM",
  "key3": "4Kqwn1WMAunSw1H4Q9SSxv6DxtXnib11uABK6SvPRSGYHcnyBaPUJ3nytRD5g45v9Qg45hLfpaMTbw3pzWpTB7HE",
  "key4": "4GSCnh7KRwxbuRuKv7LzXGwvcBY2qDceFW6MQPC6oFRZG15dX9LwqZhhVfjUUfUmMcJgNMBA4zA2oQczhWT9WSvQ",
  "key5": "JjpBN6AiwA9pUR2QM5UCzdEQh2xxYzDDmJote59Myw8vy2vcGEKYrcsrk2yQoSCYz4gWyF7eHSh7vKZH5gM9jCR",
  "key6": "3PjbgP5xiE1jPRJF1uLjod5SHR9bJCp2ocLfxouuN7Ehn2whLe9Fx5REE1nFhCJ9VCnDZ8R21e3KxFJAQasedggp",
  "key7": "5vHgNf3dkADqXAMpHRS1WFuRT4fyNBmxjQb4jkj9RaGDj7EV2maprTX4D64SESxtXn6RtzCqySDnztjJFHnjjBdu",
  "key8": "46ZPb9Rt89zzjDv4prVJvsJ4aYNQZjE1kLMxaa4JEFqiVx3xxWpYpFNzb8MNjtu4ZXJcmajnP7SzGUE2JFoscGAQ",
  "key9": "LjChvAf8zyqAgnBZYFCdnXQnQ81cXjsV3WCnxzHcu4CU44BDiWiy4s88MB2MPnmGF5j9xtX9pRw4zTbh5GtBEMf",
  "key10": "3oKfjaASxv4nv6eXUfdJTcCJXSNcZ2EmJTDtkYUwgg6Chkg12hcCn2UcbaJ9WGRVGBhSW3epQq4zXng3GjK93eCX",
  "key11": "2FcKX8K94auh42rL65jaeYts4iSJhJ7XSkUynp8XAWQJ5aXaQuYF9TgAcfgR1KnLXxwCQ3D55nofdQceCHuZYgWL",
  "key12": "wD26KQTrCxT9tQKSywPktHf4d2PoPxtNEaNndugGwYHXZ9cK6FB3FUtP9u4NfeZqLE3BUReREZK4yFJ2jeg1nHr",
  "key13": "23RNDgksaxDCRiyUoH26geuvu7HSN1NNiQzRyaPiyKgaJfh5zS9n7fzfA7a8qxPjAcG8BGn2g3RWKARNq9dRL9St",
  "key14": "sLUejU8BiJa4ZEaPXquonXekxdcYsEGZVJru9eLrg3XDaVBSxkog6e4H96d7PVP4ETRLi5s6vZx3oxRRPXR5WF2",
  "key15": "3viXqQ4mAqY3HrwMg9KvovV1iwuvWt5b2i3gi28kiy3S2kUKXddvRmjVWSMMzTbrSQhsN5oWnP1Av78La2sjAmKk",
  "key16": "3SjHGZqMpbBZt9kL63cxrPWkcs8fU5vHuWb5GEWRmrPaTqpfjd9gPsKfP7VMiAPfw6Fp4s1bbraKXWeBLizefa9N",
  "key17": "E3YMow1Rvf2VUXbDCaYh7aei45ZKrWVLYKsEsfxFdhiAcuWK8yECMVYGS5P3XBS8H7tGddDub5X1fk8aKm3kCqu",
  "key18": "2Ez7MdVWP3P72QCkmt3Fiu7aRPmkH5jBTr1Ctk8iPzrtqzEAd4KA96i7ETQcSAy4rmG3Yzq6iTAjjFk8vwgBufSy",
  "key19": "iTREQbuTGQ9UzaKwkaXQVX2FSKPByVjsBQwUYfveydcPkFSaKAu7V7vVMiTppuYds9YBg61nogMjBcvTKLgNPyk",
  "key20": "4djv6ZagDKY3LYGn7Uc9DiAL1CxRodfceLnjPhCsvPww8prsA5NuXWFK5NMnfUPb2zUJW2Ky5PkfQMX21ivbnvWL",
  "key21": "2DfJ2FEzGyb3hm9Uqwctcg9AW6B1fLJ7u9V538gk3MKvA3MHfxkZF3vvCx2wpzKnrZxZVVMMX3e13FtodsnmbMoP",
  "key22": "5MHYBhSjyzfhqLXPW9jmVQVf6GkwGymSx2z7du9LKA1z6mV2FhUrq8s3K7RGLJaserC5ngnyPcp37p7Gjy8ZGanR",
  "key23": "3XedesLKQm1ppCiLFMSiMTSEr5sHSSLA1hmDaj5zkMedKknJebvWkxFvXCNFC7NeoAmBWh9ume7xH9MZZNtPP5tA",
  "key24": "2vRetMpaq8tHx1ENW7wywHm4zh77N7DkxiKphk4RU4NwkgZdHkZsTpciQHfDDP3wEFmxFRorD8MSWbBFeZF573SF",
  "key25": "5AQcb4JG2VN38R1oCLjxnYPDtTsdeou1DVumFAsEJ76c4r3Q5V6m6U5zwD9U528SW61CPeeSrQeB6CiiAP3QVepQ",
  "key26": "Qeyc3tKchtDFULZQiD6CtLNDxQ7nWQR9FfUoJaw7Tuu4SPxbEucU32Lbw8TGC3ZdGGF1v9c5NSN192qdFoP2Xsc",
  "key27": "3AEJELhuq4yGeQnktfEPm6xPBr1V1QUFXHLPgTbakTT4gmepWHhCpVwnW6PoVTtezT2m859kyJYnH9UhJTAKD1q5",
  "key28": "2Ec27JXYAd8t8kN3wXz8LucsHk2QQ5HEMSDRD322CPimwD97vbATo9diPUSfdiqYUuKzNPK4L5PwECH3FiahPx6u",
  "key29": "2n2ehSGB6EGGu1cjWtQhUM7gMxuqFbikfcH4rnHRpjrqbu9o8UsaVbeT9W5unirKPna1FUBYkxZm1g8XY3eLFVf3",
  "key30": "iRTKkUShxp7VCW1KuZCrz9HoJj7pxFNcLuwWN3Ku2AEmu61qV4Ep5p2wQbmbCutTqoaNPeRZx28PsSpwedaLxpU",
  "key31": "2RkVi4cysiyeWYgUJExfXswXF4TeVDQvRCrTwqKaatMMKttQ1PXpH9zXnsWEQMYVyY9sxRn5iULF2FaP1oQzHDrC",
  "key32": "5A1kHNoD6mqJHdyDwF5SNzH93mnqvkekuRJYkbPduoSEirWP7bHALKQASqF61XpqK9EHH4ssbhn472eoV6s5wYkp",
  "key33": "57KBH2XnV18PfvcAazmBrYpVFQoPdDnBGtraZk6F1sBiduVNtaV6khRUugKj8QinEnHFzWciFhicR53jyWLJRtap",
  "key34": "2abGZ8CR6LEyXd3d1od8gL5SJWXvCdEBk281gsNPh9nEetorKxS1PHudQbKpzrWap4FfyyWtMvrY54gY3WkcXiM4",
  "key35": "4qHefg8Df5GUYTMHGYoZ1EuEcAM8yQwWQZgvMmYCM2az7LRrjXGroyyUHqjkg2ogG6GPvhVc5EU3ggninbVzyWie",
  "key36": "2Vh41DoH8uQJ63xWoUQ89MDJc8RFstgtgu3LdJyaASEbNSPjytYr7uFZxqFGpRW6HmxjcLEyVGFDhtZyZ71LHar3",
  "key37": "7QAQ6VGQ9aQzvxwihgZunjyjV5Q8skpstMxVTsBym9t5iykpTzcR2H6TU5WitstYMnQTaxP8ud93aR7nAFyDDes",
  "key38": "21A6TVHyYRjZpCxeFkhA8exYYmMYD95gF5pfED7zAwuAYCQZL56dSC3HMCpJ896Y1LaZhqZCthyoN4WjDmmfgj6h",
  "key39": "3rmBjEk8jGJBCYsBZ5DmwcrqEXQg68MsvqNwWncqGsZZj51swxMBvk3qh4zoMiUTRM61gvRKBfUSoLsg4U7V88R3",
  "key40": "2eq3g58ChdnYj4NBXYfMpbBTEGxBZKvLj4XziCiLcjy3sZdpBotFdo4qf1m3QnFxuWogBHTSofQYtVkr88mR82BY"
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
