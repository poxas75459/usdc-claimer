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
    "Auo5XRSMqhcoTTSfeHfN79QJN8w2B3TyasrqpDAYdie7AtT1LCUAd6PpHMvESkukNG9w5oLRwRYqLDFQGsyZD63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jCAZQ78YVHqsPpva6DJBzna6aKTTaexa54B3rZG92pDmrvn6GNxC4do7dAi84feNwoYcFFFsyf5FgEtpEZ5qFti",
  "key1": "3fWiWfzWSvWQCUi7aaBvxymAy1kVBiS1SMLpBLQzHBQ2rTyWTf5NKBSs8CJmRyd5JzYJG88pBZmmGxtAtK8kFgTa",
  "key2": "5t7yzEQ9eCWkZjYczxQ3iLqQxnqoK4HJzwj6VrWsNV9EPNzLBqNPqVQtmLgZsTbWiv3sB6heAFxKA5wYsALsMSoK",
  "key3": "3cS2RnRktNguHnLwSH2Ax86D24sMmidSiN2YRTpPSZyywgN3PhdhdPAjUCbv3QXxdA9JBm6bWKkt9nKLwYAynbmj",
  "key4": "SbKyA64gSEkAnUCBMvMeGfCZhXy8gC1epgcojUucqfuoMV1td3yXLNfaCXyKgx5EtVE1BXGuhu5yVZpRM7WM3C6",
  "key5": "5Gs48NoEAf4jF75zW66fVJTq9gvhdEivMbCYkm8UruFMqPj9xVmBSxUdSTB24Npvh4uabCSANqjb8GbrBrRReNd5",
  "key6": "2wz6WFQZSRXaBFBGLE9t6jrfnfVSQNFJsy845E3RLgCUZ61NMzZSgTrmGF2eGLks9QmqE14d8Sn7dSaU5ZeqDQtF",
  "key7": "2iU2BmK2gan6ACipgdvd99YsS8gmWBZWpTCH5Gg7tDzPx3fhGkyyKM7YwgNpWBgD7umph1foK3FwbAhJhq4g11XS",
  "key8": "5mS9qKynPnJBodiRXvnnftGiB3U8BS4yo9EHLFRZPb9ZPYeSqTPQpxahSGRp5bsx9GR4AJpYja8cVfzMvXZd762i",
  "key9": "5Fnwk8z46SzKXieWjTcNiQUMSbZusFzKGNKDNGJ4d97SEZ6ZAszB2bKMdxNDQ6JEzy5MsZ6m33ErQLnMhfvhdnog",
  "key10": "4Uid7N2EXcn4VdcZxVGZa9f3NDQFkn9RSTxzt7qFS4bDnBQQ3eBac8LpJt493pAJf95jjWt5nZHCQMxzNB5tSsfY",
  "key11": "BYPtYfoKnsnjhHnfWQ6ocRZinbJWHuP2dDLoWAG6NczBh34afB3tDFRz74DQXedhuqwVJumgY4EjEihisrgEfa2",
  "key12": "25Phm2AjMBKGLD56TsDHj57UvEcMkyT2U8b771XyNk12NyZm4LghJJGFWHasBsEKKGaaMBi7fRuHiBvCAHgZ1WBu",
  "key13": "2D7nCPUTXFar5n62snkgff9s9mvEu1qNVy5FSH6yxXcdnkz5CfTLLinZwq3j2Vn5wCQvjdk4hK7kZBa8gAgPtGxz",
  "key14": "LGqztFD2458bzL5oJCCBLP4hp4CkAdojKKnAN86cinQzH4PX9qX8UD1PMMjGi7FPLuGBqX9jCn3PDnnJYdvEMH6",
  "key15": "41yQQ1oVYuTM4EQvm1Msy1QANf1p5t5Rh5mtQmfmjqcj278t6A7NHiMRAqApYwUX4q6jqoWcAQNzdEX9PbPriySN",
  "key16": "3vErEPhncKpB1mMxowAYg5vUnRupiDrPcQ7rsJmCVECJFvSU2MTy1DFbPTqGLjBt9rPhkjPiCV2G6jeZM8nqnaWy",
  "key17": "25UesT4jRJLvihE9PT9CGrMyWbbbe4KnmjwguGRkwx3WgUK4jSsN9WHqnx1AQonqGB9TbxjXQjs7zXkY1NMbP8zE",
  "key18": "3tkUVohi28rZyQJf3AS9EArcgUMp2K1X2rx1jRoqDHamZdsC67ZDTFwvAJ4zu87J5QiPtzSrfahE4vksjN9uLU6w",
  "key19": "597BNkYrHYdmkuXan5jFUQisckWKzaMp7N5KRp1hTf2Tk82G5e2UwsJsA6HiBV4fWjPRHATQqBFp5qY9fQwBj7YQ",
  "key20": "5Cjvchyn7yYCznYUkVy7rcyNtHPM7MdSAouhaHcdWZk4tZpRbtaVWCouBz3yk8dHBmNLjbBEQChJXd3yfEY5Md9p",
  "key21": "5YbHLEf4SH3pMJJ8j38VDXEnZ4iZn3Th8ZpvxMApX8rN6aPJQtQPKQjrhE7RKJogGAhJHgYrcpStf5EZxGSax8Ch",
  "key22": "3a9CbKLu3eSRkD2TrpCZoiC6SsMqhxZaYAmY9mGw8gCk4KmPwQE2dnSMCcNJBptta5PTFVedS95jYgz8b9a5TngM",
  "key23": "5BbeNP3ZRwjToVgTkddMHvetHo5M4GUnrLSb6hvDofVwuaNGpmxJNpV8wgnmSDfN3Y4iciaX58k8Fix1VrA9AKWu",
  "key24": "66TrdsXwK3S9Ga826DmSuQYKpgCHZz1AS8j7F7XB5QGiSwS8vUyLnL8WFbEuwtQLo1bkujvcR6jfofM6vBHYiL4k",
  "key25": "4UB1qKxd7H1JqryXFcWhB9YXZj8tfsPNwyxiXdE44K5Q4HhgBUL4PfnKrVMdz99Mvc2gbeRfyPF6fSr8PyA1TrJJ",
  "key26": "vU9Dz2mUuxT57ch8w2LHPd5Wir3aTAgYRxvH4YrfQjffaeoxAwaAMULPihVUhxLq6YupcdaeiKwy5EUyuVCfk9w",
  "key27": "3Dwkgu8JWWEb45ccDS3KWzeZwjzBX18KKWnX44w8bYwoSAwqMNoaFSknQKGqmG36bbjTbKxMefdPuACXhsMGr3PY",
  "key28": "3knn14idi4gWihE3p5yFVFTZ2vbEaGMauGRt6urGVihbRt5wePpeoQwFVpSyPsyhq2yQkqjQBtK8q32tXfoW6wZa",
  "key29": "3zaGiEvvadx7vKiSRsMiWpcgQVck2fSHQTdrKASncs5Yido8VCsv2CrDit8gAgvVWYGu913vjX9N2v1QhVQHgsi9",
  "key30": "2xxYGEbWw6X7HziJbh2P1JWHjG5tNeGRGL3yjyzCR9gXFDgKsrakt5muquC4YbBFEwCAhEtGEiiU43KAZWYj6SEA",
  "key31": "2cMq1rx2YMDcFzUShEX6ULMGpkJUJGDBhuFwp4j3n938BSv9WznkNKRHssd2bSdMNk8mMg876AXsRx6oqRUdSzJW",
  "key32": "5zyKVKTGHzgr7G4ixJD9tCEVNArPtBgQP1TxJLNFtCJo39kdU7uVn7xHcmaWT8EjisLa9Ec5RHdqWpcCAV6JcXfH",
  "key33": "Wv57iJaxxLmSvn2RZ1tbDw43TkevnvyzZDAX432Sd9i2uewdSb6TsJEUNmQ6xGZvXzB47L9Ns9zHeKbx7sVkpc1",
  "key34": "4NLA4gaD5FzzKMQdL7DHcBUE1S6tdwszDAujdXospLmK6CGQwsZ2htz4jWuxrM32s8XWZJ7FLL4Trcpv9aLr57qV"
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
