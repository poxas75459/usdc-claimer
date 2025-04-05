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
    "5DqTsVMRKvaE5FEoAz6ZdxjVBYtkd4ssBqt6w9bLRMYYkJhtHxQtBM9BLuXZL9XGHs2p3Zkkpn2k6244Qy7a3Xhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28KQuX37GBhdGLqJtD9Pw289LCbX5EAUUt289qFUGpkXSmahxiKNqKaVGVDUzV6TPrm1kojkNKgMaD2j3ojwQX1m",
  "key1": "3Qty61Yh4YkvRm6UzJa3PAnByP6G68A8E7Jy8qMgkUVGP5FFJ5Vpjj5PD7uMWQUwpz4WwFZ7Zgb317MLc9rGUaGo",
  "key2": "3CxPqb2d4JprS7LdezPvUkiXpcL58TkJTqwTA7HwfxJoUxTsBdifnLCD2sCpxW5Yk4gpGVr2oSh48s8ymUyYJSbr",
  "key3": "u4NAxevy4yLDRJRUg7enMFxvdap4xT6dqBj8NoYk2xgq32DjuiMyVYHGLuphih9CuBebXT1kk1PAgnziXEFotaW",
  "key4": "4onbaEG45MyYZTyBxZDf6vPsjxhTWiRgsSkzEeuJQaZQez2U9oXphqpegFghpqYMPcijaC5CNahJ7mSAfCQythgv",
  "key5": "3YBceJY8FTtmzP3JNLScpXSfCo5DD7nafy6WNJJB42br948VCM5h7CfB4u1xGkYSCRnDxgoa4oZXDrNNWiw4bB9G",
  "key6": "NvJr375GUqBDQNDJcNDjtnZQceAtTGFZSKAj79NbbamSwSZc4V7oACwJkkZ9vBtd7ZeqdSrtvVhcsSxzDABquYb",
  "key7": "2dFBUGi8Z5xNYFy5nn5V86tQCZCLQ1stVgGfojjb3c5xr59Cbw1Yx5jNardrZU58v6nNwi3S9i9zwkL4B9yRCKoy",
  "key8": "2vWNyCtF4fU3GQJLH773fBa5XCMLPQRNRDRraW9URPBJByjtBkL9fAtmefpBb9HVN6oP3PHwsjwPGRPBL51yiYMh",
  "key9": "4mFSonLYPsbYvqkwufPPuLkynsfRqChzvX3UReXUUcn8A8KMUpBSSYHx43qs5VynKwUZnz5N42mwdEwsGAiDbSBk",
  "key10": "41jGYyy8PJE8HmY8184Qqfg2SrPCqBBQGfWJuSktoZANL6CDWZCDJZGd1K8oyMPmRBEkJcFVgWQwvWCpbp6ofifS",
  "key11": "3QozADe8QDeqmQqdQzqwtG3sPrr6SRFLjsm2KtZnqJFXa55f1sXAC2Q3eoibcia7V1H8nAtrmcF26YA3WgAZrr5r",
  "key12": "2hCP9GigAeDcFfWxgMa4r2UhxLwVW8k95rCStmNdPjLMgS1xRJTjt98jA6ztrdYV2abkDNLonEZHfw2NDW9d52jU",
  "key13": "2xx9oWeNDUV1zRs8xEEL9wSawLLQMHs8kpN6pMS3QxUmxYkoabp3CeV6EkwCSkZw5vs4efWmu2dwJ2YhKsfyZdwV",
  "key14": "4m67FDB1QN9xQBXzEem62Xi9jBqwAviadUPZypGn8GqdhVy2qsD8MijSDC3mcp25HXZ3xXaw6SrYqfSXpPCkJQos",
  "key15": "23XwVmdfD9NTYxkoWDtjys8MCPMi1Yhq7xSbq4SKhkisRsnUSh1FaN8rjfDh9ssMhAg6b4GyXoakFAGibN1kihNJ",
  "key16": "4hCiFWxEGYzqSvdBLWTevvySCQXg6eXa7D8ZxabWZgAtTarqnr9GWff317JnTa3utTu6h8KgaZ8ndpg2LsYmfWEm",
  "key17": "eThSqq7CyXcNPvc63whGsGsiLhKQX3yoLFwQ3TUzn4ojjDBDE8hxZLEi93YsNvd5vURv2UMBMuudQ6EECGxpdD9",
  "key18": "3j3feobiV9DJ5rtV9b2LBBNdehyRHNfoxgHgD4ht1265QneWbzEpQ8kH1NvY2WHsMXpQmuH2zZHJGwR8Sd1juHBx",
  "key19": "47a9BrjYvemNKL3jdEPoEmtbdQoRAgYHH6fVeJiATGnb6aDnYrP4pe4vJRV9g8XM62kMtEXR9Uy7pPTTMmNUsbi6",
  "key20": "3GTZmQYxfP9AeKDrSBBMPoHF37MxFYjwLS5YWUgztSeTEann4q1x9jMY4RwYXqSWH6NJ61Ei4LMoaMiDDkVSpH4h",
  "key21": "3Ut7pmsfuVR68gFEEukoD6TV5JxRkhy866yfXoAvApbXiF2pZgaGaP8d72bCtxv5dXLXmsjzHLn2GAMfoSCmtnuJ",
  "key22": "FNAjRZbMaMUo71cwCbSQ1nKWKH6dResuZt17uWP8Wz89dyK6pQRrHSHycq96sBURZaXqoyVvvEhqzMGGj41GxeX",
  "key23": "5uMDxrWKTZ2CDB1vPjvNrAG1nCMx91BPEJMBLAhJNmwDpRQ9zp5sx6oRZ65RNGgpk6Dp2z88hctVK5T1ekk4FQME",
  "key24": "LDkVaDMjSKiuBtCvfo4osWBKV6NdeqS7ynkW3d9SKAKXPtqFBiytqPmSH3xArR8FV3fCprQDgrWX6gxqUdEtnQS",
  "key25": "2GSoQqG84YJwRwfBoKx9MpLBogs32onYTMs7U5gT2awRU8Amb4dhWneKBfFCdmcUTft2HxZWniG5nDPKdCMqGmRY",
  "key26": "5LRxHhggKMCWqnP6Z7AhuNrcVCS2PTDfk2Ha2AhprUxQBmMUTmkDY5ekzcRYKKtWUuPTJpbTA8auqnmJZHv9JMiR",
  "key27": "5bcDGNUDNdm66NmWxiiUk7CfDbhEs5se4WfGVmM9ESyRTTncDJNyjDuFDtVEksnHfif3mjbsZTxvNxXdu27Fw8V3",
  "key28": "5yyJwrSVY9si8c49of9QPNg341th7tsZAtQUmQGVwc6a1Ykfn4FcqQvvF3iF5fdk9DWmHggtmtJrJd84Qp2KEMHv",
  "key29": "3sAq2RGa4WXqhkWdtdWvGzqcCnM41iHoZYGFWkeZ7392SxCvMzKgxLzrtH5LJfV9tSmsErRkMUhWBW8n295JYy5y",
  "key30": "2YM4GucYh2QHttGx4sU4ZNUgTSbvzd5DFZef2yYCvVzjdkt2B1qqaWbgoCHdrEQRVReXPLRqhtZF7THc6s4YEvw7",
  "key31": "3upEhgBgKNweAQEHxCN5NTqCv5gW3qUFsRKK2QFYHCcJUpVQ4BuH6nNqPGGRwzVCRwgDUGfSjKZEWaUevfSkepiC",
  "key32": "4WtoAZwyPn56PT5L2sHfSWtuDmafxMwEuJKpjeoH1guZbSyxNoE5Cs4QWFtAiaa2y8bVFw8Lvk9iMUTGd74it8CC",
  "key33": "FiztZy1cddWsdc1hdjdAnpAt5Zvrg8zfw8f2Ve6Xjwnfmu81xmr6LdeaDR3kuKtshVxX2Cb6ZPuD7TyQP5h8r9m",
  "key34": "5jAEtAEwEvEWSC9wEZQ5rco4bM5zwZ5GoBWNMBSrFjGuxuDRztkCT3iG37iXUHEUdh9Jgf4BPBaF1tZBrAc5Ck7H",
  "key35": "BsUtzbnZAY4Yy75ixNKgvfc6VxbAFhtheBMW4qiPMuwvp3kLt1VHpXUZNtyY5u7ZSPDE43XDf141Dg1xQbu8Mqf",
  "key36": "3ieCX5yQndbTD5ApSpNewk68kLDinngYa6wy12XksUKaSFhvNMfwYAeHgaDgquKZpKLSLCrrrHPm6hQAUwAvxvsM",
  "key37": "5Rcyx6qdQzTXasW1W4WXa3ZHmBvpY9r86kHZghgwPdfRBZZCwMQcWwEYeiE2AdiZg7juXqu8xkfeBYPRkeJbAe7Z",
  "key38": "5bKbxEbPWDm7cq95e497kdsNNVmB43syWP9p9Q8JQoijgWzAvtijKFQsZ3uquS4UtRiGUSXHE2xC7YJNZW2NnKXh",
  "key39": "gaK6vaVc5XFfYgAPDeiQW6ZMpgHrGX8jfWQUtRoByr2P6uFirSNja89vTJf8p2dFkYpxXUNoyMUiZH1ycPXeAfc",
  "key40": "2y5iAfummn9M165n6gpHfaD7fNSfUw3wzWqXeKubzo46LsQ7AdsNEKZJRmVggsa6UqiB35NwiJoKUanmnAPSVQi4",
  "key41": "2NY6U5BRSH7kXfq9NdaxsGQhCSgCKHT3gE7pWhd9Lv8r8eR5t1HW2AXECK8djzgiFYPhbbsmEX4N2RU27E8mxANm",
  "key42": "4HsJxc85Dg2RR1EYcFnsWs85sKzhkna38HeNwTE1PzPZVsumnEMHTkmpE8VuQJwAre2WmuHCuuEHivRSnPxemcym",
  "key43": "677eQzcoKwDYuKtiD1etkYeSFuTHbHqU9a1SDwZkVnbekpMsBycxKd8hXhxLq6XzQvXBDCmzS2GvVMujWJsiQX5D",
  "key44": "579DJB2wS2vAUVdt2BsVFoa4YAi82y9d2vecRCZen1MQabbH2aK3z3Jpo8XBiQ1nj4ivr3SEearRvPxmK27sG7Xh",
  "key45": "3B3k9Yew3LhELYUtZGgCpPyS78bSaZRT2VT3yL7jLyCfCcnyxg5GXg856ecWxm1ADsbiQyf8RmM5z13QhFqV3vXp",
  "key46": "4DkTGyVBXJqFed3ouKn31ES96kwmN6mC8PrjCexrh78yH7rThqUgJbQPg5E1MB83K1cxFEvcmoGZuJkk7gfktWLT",
  "key47": "626kV4osYfMZnytpKoDv4ctabY3vkgoo2msABwtXeL1cNmTPhDxVwtZedfvnw4YgV67a1zoZgU7WUcvcettUAxff",
  "key48": "2P5GYZvui4x8eQugTiD5oFpZ6pTXw3frc3r54gPKHAad85gFN1W7yJpBehTVJhTTQ1Nu7JFDf2cFqsVJu4Y6gfem"
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
