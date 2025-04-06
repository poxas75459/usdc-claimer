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
    "5g19bbqbrinjKFAc6FstdowKFZojXvwm74eATbtBhgMJgtDD23ZhQM4DWX1K1qvmDo69wMd7okZN3RXGe15AMMJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FYTdeJ4F6NqgNiPLQCE71WnAB1mqN9zjnhJUgPbjn8eeTL7S8AawZAzTiS5m567rjRko1Ff48jmM2Ro9bhFHY7U",
  "key1": "4WE1zNyRgPDQHtd6QXs8JKj2DtEUAhcugSV4goKQ6wqSDBtgECZWajuyn6Pmh5Z8i6UvGahkUjuDWHpp8kZREWTQ",
  "key2": "3WzDxGyCxo8HVLNvFxroPYzwLTH4Q6QkZRSxg9v12Rd67YQRsmF6z5aEFxpVXZ7v7EXeptt3mkFm3FhskrGupZXs",
  "key3": "2EE53VYZnWjiHRSsg2ucGjRyXCcPkLE2x6eu9Rc4H4sZFRAw893kUNeTi7Kx93qWPSCTsAzhyTJvYAxhrV2vBLVc",
  "key4": "gy1u9Nr4dvbHBoqds1rgcBnXc1EYxkyF3BdzFLBu31hszKEPHxwu1kNikBb7oLrt2ropLVJfvTmjZH2hctJkkHN",
  "key5": "3WBAscaZoSn1y8vcTxUiGoYdKjnh4gx3Styo9992fZRZ1oeZcha7gG7tu7srSso3XGh3PXDw34MMME3yfKY8HYno",
  "key6": "4BTBHNfzgpVYDtJPYWAHxbhmakJX75te3tME7DkffCzWasJrtTiSq4tLHmmaoBvtoDEo6xReVC88CyctzPknFeGt",
  "key7": "2eyBneJbXxc9bjpUqDeg45VQTMf7xKTSmrCSTNdzB6qzGpBSQY3DXdmLK38jjqDsB6VnHFRK4fHykT5FAgQ6q9hj",
  "key8": "3vKoZrG3g2UCr3tQrDAtybi28RUh3K118k7uA8y5TaYRUrB61kNHv6aqKHaDWwDQeSNTpcmaHMFi4wScxD468vLU",
  "key9": "3fSb6SLoQLHFZBvwjxwcEKdyWzHXy19zKAgqHfjiRncDuoCbAjEN8S7RumJFhEK4oavmHSSQv1JTo5uVLRUSrFuA",
  "key10": "5MrvYZyBCG9wdUv9r29SBXgZkFbV7EJsZdVNhYAB2xpZwNjdbrW8mBCUtzepFUoQ5F7yo7CW51kDivdytn7ninYZ",
  "key11": "52XZYa4QPTRsD99muYzMLwfik5vwqxxHpaLcPsVjvF3ygMVniGGpb415d43iNqkty4uLCyLgSnNm5ArgjWanu3eT",
  "key12": "2aorp2pqyeSuLb4Zyj6S2WGVTXa3FCfy3g74MhKofRNf8rQQVWfdXqa5oBYtWxdScmXnQ94DxMNf5HjJoG3LAnbB",
  "key13": "XUR1LAwped8rxGH4WuBtTeWr7iNYthGPaUShibjBwDmYeMpBm8stzEfjDx2fMwFvzUimwBBujFX3LVCLm3QiYsV",
  "key14": "52wNHqUoFmgMLohNkP4gt4jA5NBC5YGX6QVkLBNWSPZx7f2jMUQZY11abfLPwcduVfXdLfpk5jNBai3KwqYQH4vq",
  "key15": "5cuBvn2oc81eyMzQsX4EfuYWBii9w25pxsvGmxSBjrrf1A1xy1Umtq27dbm1Yjip2W9t9CSaqbtgLD84SHjmkTAV",
  "key16": "2Fw9F862jx4ho8y3j6Sg2fQwZFBeWmcGADv2kkdvNj7SqdXXAbrMgrsMzpYbQVMkqhA5HmXmbVqi4HLwowLhFFSQ",
  "key17": "52TR46yYAAYaiJTb5SwuSbczw22TmYAr6PzqygBKSWX84wqdZXFXnHtg41xvMABTboECyRcL71zEdYAsSMmKBLq1",
  "key18": "2Hjh2hEBRKRsdZeyqJethLin1FiPH9u6XH2NmDuhp7WoFsUFYYXsxQ2C37dbhJUzxAPxrWd5DGxtMsjgXd13qWqd",
  "key19": "5Eq76TRUkxKe3moULGxqm2SgkZzUzFs6xGrg4e4xbP2eh5cwPMk58WXBaHreP4Jgomqby6X4FagMCjQKYdLQ2dXk",
  "key20": "4S6rfkChA6zotHHeC91qmFeLNNWfQkmqPNYxgArkurfcDPAd2EZygTHQhxaxBCEpcevqZQ2LogxmuL7s73TqecGn",
  "key21": "3WyxErFSM6oFA8xjvrCmHY3Ss5tmVJV3oss1Dyop7KMds4xMpZpNwT9vLak8qcFUHLXYzBTvCHA4ccKKmLMJULnq",
  "key22": "32nSyWQhRDivGceT2UTyenCA9kDTsWnJ1q6PPtPstSL9zKmSSPdfXeQTZeFzsafTaQkFBDech9d47CcyyabT7oSk",
  "key23": "TAR444Mg1i1J4cp8kNgnqQGBLWUio1mHX6jqbiq3BnB4nxKDCu41Hmz9cU71DTrKwuQECUz1A8vqH5NvHzcQJsN",
  "key24": "McNsfc7AHmd3oWDbdtB3giRnKcNzgme582rxPrUKHj71q7w9ta2tvvjbmVswJnBtFsVzXdoiFWeA6KHbyDNpu18",
  "key25": "ZDDmwWMJiDsxqZeRRKX86AptpEjPDmChd8j1bWyrhzCuv9tpDFmc8yzqFBALMgh7n8nVooiZZwATVu8wcK9fRA7",
  "key26": "3gBNgoPqY7XWBW4caSRVH3VbF8H3bman3NEoeWuVVKvJ1J5eSgMGZ4DP9pH2fK2Sr69c3oQV9647m1SwTZ6bTLm2",
  "key27": "CsbBjbreJvCMa7qgQyJzRP9SXSEEFMcgganeZ725LsXohHWUsNxczjc3M5MpnKZ4AGVj7Jzr2yDWVNd8dDQ4xzG",
  "key28": "5Bpn18GpQD23QfLxkii6ctYEzrYeMzPKFqQECmqAfzPYzyNAxKaHCt3Sy6mTVJaK8SHNmBHnproi2yR3ctPAy6ym",
  "key29": "3SR9rUQ1b1tvFz71BAUigEZBtpExdB7orKTf5vnsiw9jf1pjzwHdW6Gzn5WMAngHV4Uyy8EMmPQubTN7huZVCTyp",
  "key30": "jRc75a5KJbuW39ibD15aNdzc2MhygMEWqjJxKAAbkeJPCGodVWe5Gacnt4DKR5Q15eQQv4jRJ4WBHPhi1sH25k6",
  "key31": "2mtEEbT2ahnN6vbXWGtYxP3PffQG8G9QzeWSWgEkdAdVdofoKNf7KEXPXvXsBXkuF8F15XLvfY9WkBBL2RayBdBj",
  "key32": "4wZxFrzbxNm2oKCGCQUU8sitDWhFGkuCWPcpx4fSxCcftEL1qWWR2ohXXKttVtiM6FxgcgvUSozYUntD2JPigNjB",
  "key33": "Aqe4jnuVCJS2g73LLm1ebgs97cCpXMNc23vMYsmQvkVjyoTJhd9syeHzV8MEEy99giY23rueQ1Q3ngwWArGVPqG",
  "key34": "2s7q1fTbh1nPbkMK1BuGfeDhuS4FVuFTXeprir4gU8RTiKDvwdLMw2rjm6iKy599mw3DaUWZPnQpvxjiJAHaxTG4",
  "key35": "5uSYKqXj7CpJ9EUcz6n23i1z7Zq2cdJszrh9NbRRTwTrT2dwtAjdefgc1rxgLxsAhcLX5BQmpCmYcsjwp1HDzwBw",
  "key36": "26TJtva2pNC7FRPabpzCATCZAMJTK1en6jfoJpy8f7HFVitYutvdGBVSr75Ahseu8kaJatkgv3NJf2Ej4edfdhUo",
  "key37": "3ZhJQqiXYybh3Pr2cQcuCVYtygnSCm5b5riEKzd8K2MVzR4rvUrC4d3yg4tKaremENz9D2tjLsa9aSYc5udqgAhe",
  "key38": "rTxU91kcZ3o52YNpniGvd9TTf5FGJGmijQzFGVcnhyxhjUUj4Mqw2XfctS9bZB7xDe3sWad2mPVgjmLXnEGYPLV",
  "key39": "2dqi6bP89irg8RQx9PvnD3sUaNYU33ZegdWL7v9XFB3Y4WTMRuJAzdsgJucV4dm7CsjtLEUXas2CnWXe5QYAz4s",
  "key40": "3e6SPVYu9wNBif4DuY7YJoRHK3okL26fWBb8NUUjnNSnqwcppyXRxwzhL8EdDvEEJKYyCuh52VVaJLWmSm1j5Ebf",
  "key41": "3t9RZ7FuVbrVbjAamRkDNRmzhJZf5WfqoTNNG3Jjmt2f9Ahg6hJYwHEdw9aLEFtegcapjbCHGt8uhYRHUA6rLy25",
  "key42": "3niVabyAJ5tQyfTD7vUbkSss5PR1WL87xEQmxPCdio9QacVUjVgdU3YKzcwSfN3VgkseqDJGrRoVFGGJCcnYqwZh"
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
