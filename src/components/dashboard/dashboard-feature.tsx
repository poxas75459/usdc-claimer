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
    "Fec48JrnFmKqvBuTk2k2hZvrp3cHYwVieLgymZtWNy7JmGAbqP5sejc4KcPFLESFZMrNJqKKASVe6tS6Ufr7RrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A9kYPTbxTHoQKHQgJw6tw2nPa8jyURx344Ac4uUbYMs6mSoKgBeE862w4aq7yxZbkTVkiuUPpyjnBDq5F7pJ9Mb",
  "key1": "4kXrpaUZ4PYUxBWpYsJJ4hPqztey9FJHWssqTtB6akxJiNg3PPbBx2W5s6EjuAvTGoJdzMa8RxhByn5vmJMmkeuC",
  "key2": "2LnMkDyqhcVMRNz2xXW3g2foyKDikRnaTjBALvL3RuYJRj5F8VutdNxesU9o8LMBxdVKGVhisMP4PGRkNRYppLzU",
  "key3": "eHP6w6bu5avLcTfsNTQBJSuvA2jJZPjuRrQfeaxd5msny8bmoV9krHnfb9uJpAAAzXrvj1TuX8rj6sK6vAfq3Xz",
  "key4": "28BaiYAaPBBWGFHMBupAxck3UU49zudyunWGLKcgKUCLwDrRXA6gDAGVX9k2e297h8Kwis7XvcgziEunNRorcoXr",
  "key5": "kHzVhrhPMYcXiH32fQLSodFgMtdhNnKLSHzJ4JQW1CMuQttjMWDks4cMfGK1Eh6Dt17FUQHbNytJY9GrkpNVRDq",
  "key6": "5bFSsDm3bcYj8cUn1989hsLeUp4iP4sdURJVjjs2mAi18Ag5BhcGJvfRbuqWCpEL7YBFBsrsagkn8Qi65zqWn5HG",
  "key7": "2t7hq4qw5vMjg2c6ebT4RLhyjakALDdRn59Pjij7HX5Vqn6wpFcLLkN4LLZG5PL95ZF5eZJv8ov5VbBxxjhU2oSt",
  "key8": "3cFFx2Dqb4umVNSFQYXYdVCXKJyvFAA438JZu29ruiZLaghjmrKgnbrbgCWmwKX1PiUaPjq8Y8oaQuUsQQCAPscR",
  "key9": "4eBHhP9Kb7HPo7dF1nBtVsSwJyHegQotZ2aVSnv5d5ynfAZZfgiRmMTDJW5MFWwKLi5SfU4mxjGhewtoKoKvSXe1",
  "key10": "2MQq8XEi8BmR9gx6d2aa5Z1NSMfe6arWXuzFV8u8KCZxNEQ3dWHgsJRjhzuxtpDMRZdYJLzR27n48aij6Sopf58V",
  "key11": "dYfxooU9qgJ8Km7spJVBMAbpqqC2U5VdmLrU7MBYAGiAvdkAEwti6T5crPe71gB4voi4jZtu8Js6vZT2RrDaWWz",
  "key12": "5EUbTsg7hwWMK1BtyagLPnzSyALoZEQVmB7F1WJeK1iPrKTjkDZ6qbHW4ZAvrpfjftoxkkjNW8WwGSnx1bozqhQg",
  "key13": "3vRRVfLggcE94s4YUArD9A9z22a6f1ZkLS3EPGm9fsq7hJjbEEuNakrgwJHtAS4wiDtaaBzLthH6Ne12M4KRJAfC",
  "key14": "5F3nNyVmeLfJEy6W7hWCUunCNH857SSJZ9JGms7uwPcy3WXuRVjPGANgq4rap2ARWRHrrj7ZV38zHn1czfmjUMbB",
  "key15": "67DDdV7CfDVL32Z8PejVjBudW8aKqzv2RWk2BGgCgaUi2sNypDRaoyGtEiRsgtK4nTPYH6Mo31iFxL28XorByy2i",
  "key16": "56L215HFsZd9E2TcixjvZWZQCS8VrVV7TWoLL2nsW8K8jNHBa9dknXdr361KzhrvDDwctBdvCUAERB7Uke1JpDS6",
  "key17": "3qb2MpFqGMviukHUuhNXYAWC2JGyFto2w1YVhZhXieUHfUEoRMqV6rbJYq1Y3p1dzjoH4FUAvjDsUKuu4jaT6jmg",
  "key18": "2xh7fmMqrJd2W954MuoTVaYonKYLzuxCFpn8o2ZtNYs46eJcQUuFk13eYsWVNr1Twp8fREjUetL81m2LURE4k4d5",
  "key19": "4JU2t5mYKyEYuzHyBZoHL8GjoRkr22Xgfhb9ZfrbggE6QDfFZLHW6gAPihhPHYN1C8KWkLxYDzfuHJYB6P5Nb3sp",
  "key20": "Vu9HMiZZ1GhRffnVfEx73NdSRiRbvbuXJwG1GRpjaFkSCJRVpWE9bMuiyhkU8YXEhMEzi5FGNGxd5KPX2knbGT3",
  "key21": "4afKzeq1eoVgXChZekv6ZzfGmaJgMAd1R1EFu7nwDp94E6V8TGti9DPjakXXeuYDYoHsTyDFJj78wmBH8EhvDfbD",
  "key22": "5xPMPGavCGsw7EomGEE3XvZVE5wNfptUdGU79LY8qpqBUXJNkaHTz1iqYA39h1SH47TgTXrZGaX7bYwXHk6Erqsx",
  "key23": "3LKohhwUB16fTestuFzxbr7buu472C3bg5VwouGjZuUi1kUGNvqjdZFeH1xjCo7dzSP4Ks2VWcT2itQDoKmqjyBY",
  "key24": "f12w4TMZwrdeF41dVmynWs52hppp32o1cpFYPMdQFaJbECkwVEHJbRWNicAiJGT66xUvbZBbswmY8X3TuNdLS3h",
  "key25": "38VMDt2bwmFjUkijRYw5PGYsdJ825L2iAXaHFMauqbnX3aBFwGyfvvn8n3ZqirHnog3KFG2Q6Z45csByGvk1Sb7t",
  "key26": "QHpzfomGzsgLU3ZzQr7ndU6VkJRNsCXsMf7xrxJ9NzsGEFrK53d5nDoQrr9Uqv6mEFxPH69KmZcsVN6Gw7yoJmS",
  "key27": "ZY5Hf3wtwpcpAsKvLma3tu1dvgefC4SskBveQTfP8kcTMur6fBV878x2CVRGRbEvCFtp3LakmRcixrv3K9Z2Fc3",
  "key28": "47mQjL1h3u4GxqegLJwgwoyqqkEWp2NEwxG2osDp9US3SgbSUjHr1CMu3Tdba9zUQEVj2fscTJWja9NwXdX9Njz3",
  "key29": "4LjpNj6yyAbh3AgasmmWAUGFmTP76WBW9QrJJ1KGuJCYNVNQ4KhYwXq9A4ZGh3oUJXKhUqnbU7ZfCw4FeqB2X6wH",
  "key30": "5wKHZ76rQQhEXovZvKG3CpHFrbbZstjL5Xq4VHFBsV7sq8QeC25vjyABErP7raKbrtADB5p6MhTsLeraAC9Ybn9i",
  "key31": "4juDLqZ1B2JdazYNuBdiiVckdegFuPiQjF96BVm9h4GnGDkqoxuhfSqjVhYYLZ4oaqsjL1Df19PNbHmA14uKGTGc",
  "key32": "4DyrdNf4XbmTKcS1qguT3b4NMKjK2mgxCVXsed8qyqwheLbSX1uprNEYqcVVq8tRPrQj2CAABysbe96aqffPsWVW",
  "key33": "3C9cNpUB5euZLgBvf4n3Y9jBMEjncaXE1L49zBdPTnNSG5MvV5WQtNidCvtLcfCty1DZX4w8mLmuAwNLAceyePvc",
  "key34": "Eht8fEWyneaXxWKiDMX8QVJuye1k2AztfZLAMNChv8diohQ6o2khzSKsQuL8GnQwsAcbKhsGoYhw3AgSfNnXyGr",
  "key35": "5J2nsGmbauM8rqvMYARBtoAanTtEcN6vQRngWfsKSHxU46PD7TMwiXZByoXBFGNDtsL6hCWejRLu9uhzaRqUqYs8",
  "key36": "4jyVzU6RruQ63JDgz28E7xBSK1J7RmZovNqLUVAFNZxZNCf5VkKinoeUnU4e3wtQoGHt6TFfRphT2mUmZgGqPPrZ"
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
