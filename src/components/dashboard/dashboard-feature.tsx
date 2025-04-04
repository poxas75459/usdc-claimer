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
    "3FX8Vu57yqsg4q2WDEc9tMhiGd9vf5e5Qwbz9a5GwrfFBGYfpjmWS4FbffquHxvcvvYgpwL9Zq88xN7evWgaT76L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fe2Ein1oXStKLtPRxwehtTmF4YnHQybJE3oS4sCArXAGiSGC3ksybegLxwRmk4kwEGoGcMMKXdqFcWeBp2TqY7y",
  "key1": "2EwATyteFMPhxFEQH7MDZuk3kx6JJLnSyz4pwWVL3kfak2HYhpNF1ToWnTSYomz46S4CMqETb8wAkFM81RAzD75x",
  "key2": "5JVykzPJvVaaCc5M6u3UzwVPJH1Bg6hqvxLPPJ8TD8bssB4rnqsqcRTwZU45wVK8nHjuAr9t9Uvm1nqeLoPGceb6",
  "key3": "3nYNNgGpS1uVVAq3P6cywUFeH2bnTTHJK5aEqr1oGe5QBFYX978fdGzbsG1Pz9LNxYUPK8b8yvkkfrBFQzzqtFjN",
  "key4": "4PaqqZCv2sPouERMwKVDUA4Gtt4UAAWh6AeqscJkQqoeC8xkJ8hKLKuiJ3adJmrsb4y9RMJzKor13YMGYzME9nng",
  "key5": "9mArxq5gG8HZZJkDwQ2fSSM2SDU3EawgJYKckyz3k8Gu4viUKas93qQ4njsS88o41yrWf3QbnEK45miWBcqtXFq",
  "key6": "4S246RNBUSdZTUTrCuMKhhs4ahgUAHvEU5FoEmro6UqgryqpV2amxdG7f4YfJ21nP15teEK9kKwvBaKMb2ZcMaMb",
  "key7": "2vyFUY5RQ9xPaTUXgDSb8pThpphVyyTLbgNmeZqrqTMcyhk9fCLr3ivP2hgKTCGfSaXQvKkBajsiygyqrojEUbfN",
  "key8": "3KuhHwHPETfsH4qWKpfHwPVReo73qiXunLPXMviAm1cAAW9FgGBVwGxzY72KyU2q2AVHSiEmkk8UZijH96zuNUpb",
  "key9": "2pkFQFxyX9TRL16i4mXwpy3SaekFSCsJrDMoGKrJpQX5fe7z1ebdPqUwi5tWPuW3AbwXEGJBuJcqaTqUXtFjG8ZA",
  "key10": "3PQABjatpT8NJu8EzoqNfECjaMzvbrDQx9mFY9BMapXqC1S3YLGJ6T6vz2zmQkyrzWi8PG8EZ5wUpNji4bAtA9h3",
  "key11": "3my3afxPtoNyaj2du7tReatAHuAoVCbi9uZKucoSeWBbxL8ABCK5373usrZGBWd1RMXPyQDkJAmm9GYGifndrDZW",
  "key12": "3DkGnzhBvWnNBT9samJUNiYJx5rKiGybCZWMaqpAnZD3BsGfg7N3RVLyf5JLAGhUP1nZ9HYD4MBPVmBVRJQyBSpX",
  "key13": "tkcqESib3wqn4ourbPLv9jM6FdS5FLuDfsztEA9GE2RsWRTBNcaW1rtwBkfzfCun6v18dGKSaFpALVoFBWjhXQq",
  "key14": "5mZdDPovnNoocDsMDRVgG28AJefqGqvvdCCWdjZwimTrRQG7YxyXz1tQUsKns5vqu1TAVgnxt5XzeDWZ11fRkAPE",
  "key15": "4b6DaNxMmre1vnfkFemgzvxr3jBYvAaDrPT7Gbxa5an5yh1GEykvi8zhDGD21zztdyGLy2LhUpR4w57PtVbcfa8u",
  "key16": "5Gu5rgTuuQNH3KDKZx2saVqpZ6yKohmK6kCamwojbwfuTq52bZPMmj5fdAbtggSwmVwGhTVQXFytbZtMbGHLV3e7",
  "key17": "5W8eino9q7CecNkoYWgQhYJqsunwUcrsZRZQ35yHks6geGiwfJb6thffQNFyvhAtwG5XzxQdkbmvMN2upw1EYN1Z",
  "key18": "4JR7wj6sVdMyi4up8Vah6CA64UCs4JCLgMwvUnXZK7yVLURU11ZpwM3MgYTC8UP22j5hvWPXTRbs8p5p94zb5vKY",
  "key19": "2KPVGdFM6f56gfbMwp1XK3ajEcWaBRgE9vkWi1mw4hgmMg8Kific3AsiCiUmFnq7zUuePdDjYrANfLqLVfmqnJkW",
  "key20": "4ZQopG7TTu5bqiFGKpCeFgnWgFXPaC65Q3VDduybUf97x43JxMHxa3oy3hihL4U8e4ed4bVB9hsV6cYH8JkdBoT4",
  "key21": "dTXyCCRHHvto8Wrh9Gds5h7DvNPpjk9hE7qs2z6CnPCLaEPu1gLCTAJ8KFVA3AXZNngLTWGjsbxQMqz4h6P6p9Q",
  "key22": "5g2TCNnYbb1aPsFPSa9dVofoADgwL6YwYByJkZtUbdwqCKsAkqL7baW65u9rcxyM31qi2sBTFPDkiujwnf7ewLwA",
  "key23": "3APUF2P8BQCZQBcJkVxFe59THusNP4wrx3rE2AZ9eDzx611oVwF88RjKX7jtSSXG1E769G8yGDyMkBovV8TCev3i",
  "key24": "2kMU2wSu4mRtKbdgPJmh7Qv8jfH6u1s9fVBBLrQH4t3iMQ53cp74oYptaEQ176fVxFi88hwPGjcdtstP6qgQbCG3",
  "key25": "3wJP1pJ66iMQ9125rGdfkjv4k35B7oTt8AymLwmLbB4Y4ufg1vYJH41GgjaThn4PtBh2cL2NzDLFXG7a3BtJ15Fc",
  "key26": "4oEbwFBHZi8mbkJkqhgYLy69fsyji9XzJG7CaLHx8SLbgkMzCmyg2iaEq9qm1yjNTjGuzdmmmcpWrCQCtEUs8duZ",
  "key27": "3RkEfA9guue6WjLtkW4PVzXPKrUyr1Vx6oyvhGS8fiw5GwBXeY1ZkmfyWENK3JRHKrRxvyYBdhxHqTf1FCHaT6Rp",
  "key28": "2CAE7g8zEjDK4Dth2bxng2Mjix2HzooRQkNV1jfG8oKgeTzeW8oHP7j4BM14JCHhbYoYaV65QGGKs3RbXwKAjX6U",
  "key29": "j94GZJp7YA6RQnuNKMTWe5ghEhxbyiL77dKKXxCkrqt17eMSP9J2SFN7EkadvLf1erGy64QtvTqHFRRGPLFZz6m",
  "key30": "at4SA24aM64AZABmPSGiqUqxThSmmA5Ykp87hLDVGfGbsuhBW5DdkgagRySydr84ACE6JqMXfXnB8R9JPzxvGca",
  "key31": "28WPKpqoYTqdjesumRQhh8cEiWrPmcZFXzTN8y2FPaqJhKNTSViodozBvT2Gm13dgx53PwFVCtq8A9xRwEqxyKot",
  "key32": "3roq6xEhdPp73nr3UauvJUYmymMBsaF352LYJeSWgpyqZfFjhGDS6RtFd5ecPiBgd5VCYRXKyhRAuUwTyGQVCAZV",
  "key33": "3Jinan15gfMPoQwySnPEtoo9sbFHNX8fpcMkTz4fJJn91c5BP5CxAuWMvuUBrswmKmbEMWPWj3bHeJ3j1hok7W6r",
  "key34": "56P367hqzdb6Xkte1LkP5chvZvRhoAERXbTZN4usiPF5jMnej5E6Evkbw1DzFCmfMmaGLFNQrVz121PtD44oAY4R",
  "key35": "2J6DtCbGW1tPxJ2og5qm2vN2GKZJo9RvPHTVNDzrcnuZvmiLw9QjMt2pSFT1pMmogCmgxcrq7Pt7rUQsPAzanvcX",
  "key36": "49D4RRCMe3KoEhPd7xb2fmXKsUV8oTXGW8qvra4LZ9TZaUzakSDyj8Rk9ZV3PrBHG9NU9HLiQKGyzX9cnC2Djeek",
  "key37": "3uyQ7fJ9gp2Uta9X6T8tR7BRox3i45DuE6FMC1dFwn4aNZosSK3NkMd9cjcm21GmFqasktgoc3CHK1kv7c8k7SFC",
  "key38": "4a2k8wFUjxwUj43MLNTwLX9suQv246wEZBahyftajsuZUpuhZPuPGTdvZCoc8FJ5i8LYBjLJJ4UuqYKW5EJbNu8P",
  "key39": "5ebjRGRVcAxqsgtDXSiChHzWEqDP18nx3n2bbFYz95yQo82yon8wVgQRBKot8NCfJo6busmzUr43dDs6SaywGNd5",
  "key40": "CSnJKfEbVyNPt8TSnR6zsfPSMPTEbbgND3nSX8Nsf2rrswzB3B7jA8kVwVPNBMHAuty2DWPa4poCVTEibVwwwYi",
  "key41": "4D5AuzyCC4cxmHc5gPshuFeeKXiuV7LJsvJRvH14RKTyDATe7ZAjg9VD1SfHcBcBva11DEmbTKje9ttMZqD4vn4G",
  "key42": "2zuaRgNrVf4BJF6vzPpN4PubWxD4At4Y7KfKV1DJX9iEjpdnvtgqqCLYG66aHXFHZZS5bGWWfm2iikahn2dZWKce",
  "key43": "EVXUvRLCCfaAwuoRsFbk2EJDWDr471V4tHLPKDGm14pSAdhUrrX34mQjZvkw5ckTWazq2uu2Ac4bHhzAifYFMrZ",
  "key44": "3xEhw7VKraBaTDby88FSsAeXndgdUELh3mSi1a1gNT2uHmXLFK6Swy26NqSGQBGoM1X3h5N7emivBAZb3dreWQuW",
  "key45": "2RvkYq6sU9EQp5Gbg86XZG9CyXW4qJ9oS1GRe3jjzGqUXU115cWwPpSQckS8CjHmv4fCf6eBHRsZAQxAsydJ1aK3",
  "key46": "334JfbT8NBwaUyKVL6wCsiY5DDEjAPGK6qorAodoTieWJurn7oCNvQ6bnBR61gdEB9L3xd1pDE3iwY1tCTJ8yrqw",
  "key47": "3pGGoxfx1R1LX6U7Hr39HkjfEPhrCwghsTyJyf7RDfwj5R8HRcRtgJdswa2s88fvfNf9LzbbZSgxZZJQhLeu1uLR",
  "key48": "4n71SDE71d2r7QMZBobsavoHpM1Wqofwc1ha9wnTbRnLariK2NM45wD2A4Md9js691Ncyitgie5BgveZezBhc61a"
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
