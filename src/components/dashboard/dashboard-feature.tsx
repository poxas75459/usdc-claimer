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
    "2f25NvS5NS1y9twCbgegBUDJxPhKxWPxeNnQY4VxPgXw35PAsgpoCiXs4tarWbrsKSTcHGZmTCh5c2Qrag99a9hH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zerDTPCjntgxCzjt3MoYCCei3B3goyRSQQA6mRZfQoqwBcSpRhFTx3AraMBV59d9UX4NweyutWHUzUABL2kzfEC",
  "key1": "4QsfqhUe9wfg1mo4w593XpGEBdu1JCueYqQtmYiXDqStUqtPSK2U6tWQEr7xxGisRuajWoASGa6vwD85WFQ9MQf8",
  "key2": "wvUcHSjJE9YDnnabCpEzCaVBBJRyLzJvGyuw1pELxJVD3UcsLzazcuS16mQE9VkDQ74dbuT7NzoASqen5TwSG4W",
  "key3": "4ebw6VYnzVSdz3BnRXLLcihK1JoKp2dQTnaCYUdA8fRUYFwaTmHa6KsZ1KxJSx5dDaEaMLq2YieFHfqhtPNxjPKJ",
  "key4": "63hET5yyXvbdarKuH1XiqktXG6ffmz2NvLj4uwyhbTH5riQhmtXNnNYDVQYqvtdrAMpdJF7w1NXsb2ZwnHZ12bqB",
  "key5": "VYEMQtcSoX9mztKzcAfMEK1Ak7AKM65xZkJjbH1RKqzLExgcuUxPqRVXG3RZqYwmCssvtSWKCxfPwuZwsLTWuyC",
  "key6": "4ch6Qgvspvrrtyzj9h2QSqtqoG2AoEeSp5DdEFGPumPQ3fY8do3dgknpgLs5msFkPim69LWLUjQEYRze5yLnKjy",
  "key7": "4DgiPTCgVvycT1mMRxDwyaASca4q9r8LyrDZdBxKXreqwFZAmA7ie8fRh5RxuZJuUy1VGsd6MrrMZqm1nqesENTW",
  "key8": "4FWGwTnqRzUAHRGnnzT1g9ekqoUNHstuJhaH8ckvTdh4FaVzMH5KoDHyuHBJ2Bz32Xc8oFVoeG4YEAkCdGyjdoBc",
  "key9": "4m7mxu8U2sud6Kz95h5aa2gTK1MGWQd9VHeUrgponjL84VkquY5Zisua8dQhX3uBBBVUnUbdpSR67ZkQnDMtyLvJ",
  "key10": "ppuCoV35CxV3JY3RorcBDBh3P8L2RJYbh8tbKVEUMd82peSL4BbmFAxti3MrWEz94JqKxtKzSkNDQBe92ftgvRg",
  "key11": "5vDt2WvRoAzFfv8SjipTAmCKa3aouD5Wzue2h7X3usyobrf2jFU8qnYkHtiZ4Wy25N2kPKmtrjRTeXV7pKMW3DCc",
  "key12": "5hQc3DNdD7gDJvfBiNd6u3ACFaQ8kEo5XoEQY5UbEeZutTU1SA9kdM3kpqDQJWBiDynFSvJJutch2AGsyFhZuwf9",
  "key13": "4bw6JQfrLmBNsweVQLLk8rtc4ogxBYLYa19aZNwdRPyDxuJYLojQNKTRHkZ9r1BziZZPXWWNhWDqmFZFtqg1GypX",
  "key14": "37FGvH1oxPdoBkMDM322uiPRMzMMMJkrjk6UX74zhBMDwFMnYUjMgsShPkvjuL476dX4uzrBrSqXaKj2hYH6FDp",
  "key15": "5qgWhpGCMBbi7VCuuGbLrdQnEY1vtAqCF6MQa9FGMmKwsEDKQ9SydNcPGkGwSaZnq8ypmZFHDWfgp9rhBDoZc1BB",
  "key16": "5yuUXR1hssgdJkLqnXm7zcLitWpfUtwUcT6Xb8XGN7HtSiQaT6i69DBUz7SdYBQrMyVEu57CCFov89sBAMCMXz7Z",
  "key17": "3BMBr2Nc1ybbZwdxc6BYWHxuoaZJ8mCQ1ySLhrpTgG1DotLrhtMaqan17mWVbgr1UeLjEXTjnMBeCyHBCfjhUx9Z",
  "key18": "4xMX6KLiMgmkG64KNu2dyTgUJAjK7ojpfzGpbcFwk8b7WTZwMdnH1tyWW2YXkRgxS9S2SdGygvaZKghDCzeCkGWC",
  "key19": "3vCjQy4vxrMsFuAAqyVtGqYXMupXmUbGL6FZoVnpDgcddxMmDNYZqiJSnmUvAJjzE59SuPYXFjKipayzbAmZAL1V",
  "key20": "hCPn86LLs88GuGbNr2CPs5YX6cgK9YE7wwF5mSAKjUs1KkTc6qFbQY3qNWRK6Cba7bQKFCoX8xQDCTxwwkJYJmj",
  "key21": "2d7C4nVvcu7B9WrC5VAoyCiGm7MYCiSUP1sbZTnmNkiJVGSsa4orzeAwHX3WC8Gb3jbCwbjgD4BRzrj73dG2CRBm",
  "key22": "2pNmjaEmfNad2f4qWEXNQESzyWRoFZdYrw7ERGBjqe9DMDtEfVKZky7PKWUq7W2TXJQHdGrWh2x6MxvGjyqYmG1X",
  "key23": "BrYyE7kfqyMamr8i5fhcMEZvaz4zHTCiqb2fpAmqn4Jw5frpQRmeBsawQTN7b3TLUumxd13XauH5T7vGre4rgJB",
  "key24": "2u1BEcJ9HxT46KDfrSR4mR6usP1VQ5JYkxmsmioqCs3aGNrFD1u1uh5w7BBsHrdP87YRCeN27z7PMEgjsSYJf4yc",
  "key25": "3TZPzwhJcmifYKe8Qc5hwGKkE8cFmN8sQiije2jAqQhTG4mWrX6JvaZHDRpkectS3zoLZnpe9EwELKTdZwj9VeQj",
  "key26": "2topPo6JkDJ7jGNrN89HaPLtJyyZmXAh8CTMjvkwU4WepbWsBZCwyCj5ghirDzLdv2fpeAcsEQgBxwn4KtyvjPBE",
  "key27": "3GrkSBfvEf2ZLmmT3pUghkiNAxwTf8VUGjcgshVxN21ixSrgBw3CdjL2MGkomLedn39r7L8rw3ErNUQputRoKTmx",
  "key28": "568DQZFMyFcanaREYYciXj7C5DVwLvFm7KfZjgUD5m3yPxFKNqsqvLBG7on33iWixBzj3maiGpxskf63ZvQdWLxE",
  "key29": "BHLU4hZBPoaQ6Sbsz4K9NL7TXxm7v2vguRPPtVRvbg5VdRhYbvRmdrF7EABswmCSr6TknArWoRRySuCiqb5cWB5",
  "key30": "my6Fg8Q3HbAAP3JTF8uSjqdpsqdp8G2AHDMKqVEGRSTTVXncNu9aNYHpjMjjmXQY4V6yX7nPyFUNRqpbmSQmHm6",
  "key31": "2TPTfr5SNdbUJBnYmBZnQWcUufPyQTksEbWidUWAJTu43P8XD2hWd8ytfWg8HEtJiiGdDJVFE9sgw1pkCPmt54rp",
  "key32": "46WCQC8T1KQ2n9xh5pfBZpvKubD5W5a6e4mGzSiYSPzfW25ZtHRGT9wRrAaf6LFdQFsbK8RCG2kG3q8CkFjQsG5u",
  "key33": "4rD5ofNtdekbTir7y9HYkLecvK1baRxQRkqUapNKhGS5yzAjFcDmroGkEe8AaciAVVEQ5CB48oBZFqxcoWifFc3Q",
  "key34": "5CoPiBCZ8BgEN4jotnMD3p5dx1c2pkGGz6oTHqdcMQSkZ4D3AwkEMhDfy1kmF1bk8yisv79xyQeA1DfB7U7BDsQS",
  "key35": "5o36po5DXTPPv45P5hX19kxFdNjAhHEVECyrZDbwjZKGvQoaH5xR1Weq6UW84qiRNX3DGpcWwJvQWNan567zMhhD",
  "key36": "4KniTVEDw2KNu7SfAMTt3WrHAoLTSMBWEw98GkKJCVdJCf84NqgDU2q1GL6MUueZvYacZBSWc7G2Tpw7DpNRpu2s",
  "key37": "2mon2RHCeUAFZSuYNEBAkZ9Cw26KHcddEhBUyZTkn3vHpEVHkWe3thWZPb1UQBy4yGcRBkZqLU19bVMt3AmdB1pu",
  "key38": "334iopVKxSKhxUewnFv3hon4icSJGkA7QjA3WTZuNwYND1jy5nB3gwz17PmWzjux2b54gVaxktrGUL1onG9oCUwf",
  "key39": "c5yuvWGGK4R8iYxYE4HMtPqksmJHxmDavj4f5gayBtHDPX4vxUATyZmwvyoUHHLqYoqER9QXGqmxZVt4A4vNxHt",
  "key40": "4qioYobrShrEigmMZq95CtwAtZEbThrKvQuEEQjfmeR1ZFSS39kwwZpmLpvpkbzudHEAKgqVCPGCKZzQDsenUuQD",
  "key41": "3DPXgCn6tHxJnjLX1zsnFriudYVH2nbE6QKngH7DLY48NwFucQwET6cFC7312Sygv7b434uf6rH16NpFWL5HF6fj",
  "key42": "UdFP1vBJMEJUPoGmw6Bn25LmbFJdN32aZN9vkRc7EFfHqpNWn3aVsAEmcucY5jnHZ3HyYeia6MY54Wh52QWhRn6",
  "key43": "c1uF7w3zD3FFn1VRXGDAV4yMyjhnn6dfSdG6SCiCpKckeeioghqzpC3H6mRWjRBrummWyXSbtSjZrxczcgfuTw7",
  "key44": "4o6LUNWEqvcvf9UoNAkLT9f8V2HtmQMopCr7AaBWNTt2pTKDKAtoDtLEUfpCRY8LVaQ3v86qab1vw3neURgcxKK9",
  "key45": "2mdkpHDNTiUi6QZXAJKUiPU993ibQ17UNppCamYmkqHbfH3PotnqMroPqWwFVmnFdW74angSeGxchv58fVjKUJ7T",
  "key46": "3AGEo9mb1exM8P6GUWKTdSEAJn8h6FZe3gMTj92LMKoaKKRfrwq6f2HjaBuv1xshfZNHyKJTQqqTod1gY2RQnKSU",
  "key47": "43hvXstFRmJwpRaVSGoSbXktSRYxFwtcuLhsAojsVXMb6HLTnnC2tqwGCDXg93fQrxQK4yz5KUjwPcGPaD3wzMFy",
  "key48": "2V7yiiwdrDyj41Zn7pMVXSqKkpeq2mtoREz3Y4t495FjeeQ3zog3uhtfYmUExfaBagsFgAkbFgbN2EMveZdnFoSA",
  "key49": "4hyGLWB8o1soq1KV2VRpLoARWbDjx94EFCQ8jvDS9un8L5gwWG3RUp4mzEDVxy3JZSfuBaC6sTQUabYb6rUDEAPg"
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
