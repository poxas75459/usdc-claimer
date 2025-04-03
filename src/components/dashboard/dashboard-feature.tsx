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
    "5x6HPoqbsNJLqw2cCZLc1FSx6L2ew6ocstmpc4FpGF2Mr12j4dTkrjvShrWQTuXh4MUyze2j1f1bNqv9KtzZLW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4inWtj5R9vQGCoDrfSuXPKYTEQ4NE53JV5wDjY9xov6rifbGK769ZguK98KkWNnoyhuoD7uHZa9LjeKfLVAn14gK",
  "key1": "QRa1s97AuLEbw8WwxNJ6AWWZSbJi6SUEkf3DhF7TFDsPmcdcRwfRwrWXH1ZrtDC78by6bh2uejoQFKcJnufZc2G",
  "key2": "GpicacqzN4HjqbBXrUdJCAS6nczvDnCvvAVHyKJVMNk9Kf6WDLxK7a172JPyhzrjEpsLqyMpfQSF8omQrbMKKiB",
  "key3": "3ze5qWVTkHHsbNHTpjMUTfnVYWyteRUDM8ZCGTsft3n3VJ1WoWNVsidQ7sJsHduX4BTvdsogZGfWbiFRr4yaNqFk",
  "key4": "5x3XNEZparsGPjNe8Er8TvEbivjqGBPZE8Nr2Xdr1i5GYHZVhYNSCmDikQZ71KHjMjbQu8QZoLaveAo4FGfEct31",
  "key5": "3A47nyXL3RwTXUQP6zH3BXneHV57dxmSwXfX1sMCixaxrWoMyCNCNjigFYJdGCFUtnMm1DfLYZfJtzrqMeizEhpL",
  "key6": "4BVXgvLg8BKMZUKngyoz5fSuuRuzFtCAJ8T4tPQW8sS2ZHEnDttU7hMjoWPPMokxQKa7JJXDzaVmyasZv3uxaBoU",
  "key7": "4xpVdVvcDRD5RLrXwCT8Er7hur4j4ktutkJAZtyz3dfSYvYiSf5X92ziKCndcpusjUS6X1fsxk4SJc4ZqFfsyhPd",
  "key8": "t8pALSHZu32uLh8C3m5VBLMvHNsfTPUZ5T5yDboeLKsSxmPPMwUkS8g4njXJF4EmKjhEB8hvfm18K63c6uSNWBV",
  "key9": "5DaejxEe4tJM88tRvhuyeWwsot7xEWXRzfpHTe6WmST5NSG8TjEQc4qntwsUoQA4SrPEQSVqx4LBdTWefzXxVxKP",
  "key10": "3ofr7Amb8zE9iPj2nFCutVKKaJ2dMgAwgmQjSdBxeNxqq6rkijMEjr7sr8dgxEbMjCkHEtrN5C5CnpjP5R2Ji2GW",
  "key11": "4KhNV66cGnnBYS4i6Rx9Hbu43iCqgoJcRQaGf5Q3cA3hcU8JdbSdPTCoHGwW7aBBxSDFroJSvmvEVsgm4n2Js6D2",
  "key12": "3uJoNXHZ486v2hwdMebMKD1YofpwLrgGz9G18r9QVSWbRwMucgaDc55JNArydRM3EmTZa5LLUsRoYxk9PtiyV1wD",
  "key13": "5QMU5VTNVSXc8TU4NXWuy8xy3JTZsKeYRYZWiQU8ozDZSjGqXzpb29NuRiTkVhLgqsPP5PcnSE6BBygErJuU7MGC",
  "key14": "2ZXqgdEKku66mexVT3Dg7is2hZDpM77U6jEKKcGQeEjHVQuog2pnSCL3RddmTNB23dsQqP9f8HWLgz7712xZLhwk",
  "key15": "4boH3BYM6R1Pc8mhKgScz7zLPVQKSWqgtF7S9KFKPX4HY5czborqoNfL3w25fboE5ABkC8Zew8cWegUdn5BfPTVu",
  "key16": "4DLrSAGFbhNiA8H2QjLoyUayRYTUsXvowPqDQmj34QDJcNCvMF5HDYgGksfALjJPWkSwiu8v9BDdhqcVKWbAZjnU",
  "key17": "4hXTzLkFsvsYRrUF2yYJTiz9sy9YkQ3cAbZE47GkDqpRZm8cGMzhoonWfACByXyfSLY3QrC5of8yWadcvmHAVesx",
  "key18": "2TDTMRFh9RTMumWnbKpMU3CD8WLucZt2sL9E6GP75jqX9UK5teiKhVSzrBn3fiGaJWU1tgDZson8Gtd9jrFy3rrw",
  "key19": "4CSgy42Ubbv4hAmL14qRcuzkUFyGazePELWLXNd2NzwjT7YdYk6FdZy4BVB4W7AAj3eLhT678gRqvs8ijS81n7bf",
  "key20": "5rjeR9RKAe8EvAdzbAzpuosqPxGeGQPiPYVRAwmzyKTr6AEYyBchdPMmRgHqJY1yPqDstxxcofS3DaCLx5YqYyft",
  "key21": "2DBABtxcJkdVRaAvXnLcxk4coAHWkbLx3Pqka8MofaZmg6RSPXiYFm8n19E5cPptwV73Lqq2YL3ebuAaZJSyYegR",
  "key22": "CRkvcvhULgPDrmDUA4y3d3ovuoeA3TYoX8Jk1NNyzpyW5EsK8SWKF41pqpqqThhLo1VwXYEucTZ4joBTxqoQxT2",
  "key23": "LGjijxpger8kiBDPGTs7bqxQsDkxXwNkHPMYuJ42hiLW6RcxwP3kohNyc4VUBqJQGoBXhqVeNVGiQXhMLx4RZLF",
  "key24": "2bcN8KibnhMubBecs2znYEX4aNoHeCXR9jmQQ8cQ3qqy7ksUXR7Nss9nx4hQh8sFJJNtqD2JanaZXskQQHFT3ewd",
  "key25": "2xzKUvPiXRxYW81phKEEKPkHyLqB56iMmhTC3MGT5moom5huhw38LPVgrqM6pUqztUy1JdKw7tv1SCHurMA55jg3",
  "key26": "4ghUAsNz67qrzi7nkJfFuepzqB8Uw9C8sjJ89ab8NJ2rETWW4egvrXmmwSjbwYfEMSXi4kNWTmNKcP6cDCuwceFJ",
  "key27": "2FfQ6qPivTWu4wXnCEc7Nffm6ytqGbVASVbJMRU1RrdYQnNTYi2eJ7N4roXyBkmJ3sSK8hMrDQXdubSvmvzz7Pqs",
  "key28": "4fS2EpRqjwA6akoP7c8Z5MqtfRWaAUaxLXb2KcuEhjTRmHicWWKN4xxpULgdmQQ75sMWcC3WQK1HmeUCNV2khUdj",
  "key29": "rWH6PLoyWguZbxrfgVh2oCzYUizmuPPCmLWfrbZZMr7QvBvUjJoKbF6d8QW5oBuSfGajzUUjqWe3EZSMG9znrYJ",
  "key30": "2MFfa27ZpTAy6ZmYuLdE9qWLsMEMPybCJucYF73aUR5GTX971ciw7oHnjtKxLW8B4KDX1RgbNxrQKmwzp4hW6zkZ",
  "key31": "2dy43fgSKs5btUFNF14Y4FVr5aTFgqCWXdQupK3tsENSv2XEPGeHNHeHUU4PXiJPay4mgyHXBjtS2C67LjpqGpT1",
  "key32": "484RtCz7HvTRVwXKi2pvwxfX9YG6ACfh496kADyNqRDXVwRRtjdTav7bVf2Tcb7csSbyc8ApWBSjYMi1gxqdbCh9",
  "key33": "2TNfxUyQTVtbbRzjHySUjq9gGdcfpbjryki1cidBxxfzn28HpTAFW13Yc4T3WmFwCumCzRaqyzG725Ko7hadbLv4",
  "key34": "5e2T8Ry2oHwqj9KT8z7oGRP6mKwfQe8XaPT5yHvd3ukyVHBLsVEZsLdktCo1fAUa4SGBgftsJJMcSE3TBRmod7zN",
  "key35": "3NMWofZLLXauH6ZXv2P8Az57yruMBCMd3ziCaZfCVEKi6UEynWGPMMkSXk9pHvq7tzbcpqHrADCNSa3Htm2J8Nev",
  "key36": "2vmRkLm6VyXP3E5eGiRywWVvBrvdrR2Ut8mG3BFbwXBBQopn3agYFSBDcywSJJT4uaJ4gUYnpJfFwweKFEbb11ZJ",
  "key37": "2NNE8za1uhxMVZBATTzAjFqYAaQuuJxWmFmSficcesMHqeQ47DtB72ZiQJkKK44j1uNLb6mGAuLZZZ6HSMjQLR23",
  "key38": "4bbXPGKTpKr25xwBRNYyHKmawupLuwqgiEdbpppiLfDN4mGyzuYD5SLPgCur5qMV3GSpvHpoidz1BW31U2gn1j4P"
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
