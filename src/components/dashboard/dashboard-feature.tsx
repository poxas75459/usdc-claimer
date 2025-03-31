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
    "RCkcvt12ki4gwaYpJpdQnnYYa5nokH8sixMv8jM74AxMyM9fQ5JG2toTRUwVsMqThwmZD4TG1a263HZ1UaiWuHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHyw3DYgnqcEAYJE2GqBrNz5qer3rbNNjxQzQsZ1qWJDqbsKi3DfZPNVtuQpLzDTnMRsDAWvnqGGGMbBYNJWaW2",
  "key1": "4Kq5oqKxTyCWTvVyzfsYmFCDTV3pU2Zwe6nmLJz3RioEHUMKFzG9ZceLMtyB8uqJU1Lpbwh7KThEWrW9buMuSx6x",
  "key2": "EWuaKSvpmDtf5YWUsAhXYVivQeEp8bLrHNt4oQAgYVCZAQwZWYoSNnVuuxwHkP9H4K4zPpLGENQnELkxjyCZKWy",
  "key3": "3UqsXHRGL9xv3SgoJWgrszMSjpukfiJ11yFBSS3mbSUQRUKgjsiHwr5DChiVCmRDmaFTadTHymjQ81BZCCfxNu7a",
  "key4": "TmEV6K8xaPjoq4NCL9FSNM5Tng3TvpuDeodSKxWJEps6dd2KqUSL2d4kq47WcESRrkrWqG1UsHP2pxhGrff2oSS",
  "key5": "5eS8RfXnmM91fZ2q4RoQuToFThpiTXUkNPx9NvZMPdGX1HkRP8nGd5431jyxXedHYfyAcx1vTri8NyjCTMA84mHG",
  "key6": "59i8BApg4cvHVfqiaGeQJrvNqDgk6TEjo3VBVavFUwYx1XZ4j2jvS5qUhbuZFr3sqVzNMa2v3mdpMoz5sETX5jDo",
  "key7": "2HsiJg3J3VaQRH9DEKiX8Cr552rpT3zNXz3P15R1ACJvsgbeus4vX2SHWiGG2mPE5bJeyEGKU2qdgLzkL8mAkqkA",
  "key8": "2qsWoGiX3t4VwtXA7jMdhNQEX76hTsxcPTmAqjZPpxvH7pa8kyjwMY79nu8CmyNmQRpN991BEU6B7zxWKqeMhQ6k",
  "key9": "2cEL3uYm51xobuCSqPFg5Ano35rx14V51yVVxrakpDuq6eHZ2ejHtxED5Ymb2AVn5Z5EVPXj3AZyAFVxhJ7DWMqk",
  "key10": "4wwDkmxKfxuza5ht3bLzt5ef772PrGVW85DD2ZbE2afyYghnMPyMWsuZNPte45SuFe3sTEarhzqvpwAVMKLnddLJ",
  "key11": "5uoCY7kBBF2arS3TURzxgxtTWbFNUbAQpseTrgBVQanvuQ7KNPkDi1F4QN57t3A9spjqHb66fcmCr2YcewtWf3d3",
  "key12": "5CRseQbhS9Tf95VMmkWpKwndddsC36zXo2dqZFDRYXSnCWg3zEL2AfpjzMuCLMM9awG6FcA34iooygSCeRDMFXuZ",
  "key13": "4Hvtc2hRpphAFkdgzNc48NsJKHJGMzdLsG6nKRBVAP77F1fRkorimyCck8sZsBZzSfmoPityxUKEDrCQU3EU4Je9",
  "key14": "35MQ6JKLihpACLeyaBjF2kayMvyueAmAanWhrvYDXAddwcUzQJeFsSURTVnXsWyZL2Q3PFVsQLVcDJjP9UsamGoW",
  "key15": "3EGHpjKTx9eX7WDJpPHk1mYJc9A4PSFDujTLnaMStBx5dFstAXhhrCr4DPH5iG93Lw9CzZPWCT3BB5xFHQv8FSSQ",
  "key16": "2UzDkFDJwcLFDM28ydf7isRTRMzAYSoQs82ZQoqTKWBftruPUtsESY7jGeq1tFb1dEaWhDaaepwjJHgyLwoonREn",
  "key17": "2j7oYqhoXoQkKS5CXuRiw3scdUFdhQ3qKUKQbKi48eYcDfzwS3pxVoX4Rb8ijzh1gPEXB1WkYza6UXqaQYGMtLmd",
  "key18": "3Uui8cH4nsckTAeKmjV55TDmhnP3SSh7GGcGF2DTLNn1o7sc4VVESkVwMPyFVnvGwdXP1J9AUfeKj5kES9VVahTK",
  "key19": "2LndFo4tj6QjzWE8ooCvzi4JMrh2UhnQdyAyn3YT883Rtfaz6nBH8ChYf9DwpqhuGoYZ9t94KXS8e4W6o9UzqpT3",
  "key20": "4RxJDncZJg3U4YnMiSd9WF8HGunmoXLPtqFzhzBvfGrM8JCApk3V327Ed9xpCrMjcPJgNqbJT4FADpGCiSKC2Te4",
  "key21": "5vYEroaDUv2WByC4hGUTyqEAy3Bqo3dbPY5FM7xFpXYeHbJyKDUuQnomjvsH6hq4mbrBbWhKMXEDN8G6bf4jySk6",
  "key22": "YA7p9y7ApBNp8fPHoqj1ZLFbrXdKrgPvyNTwU7johrvwcybQbmvf4xUToGR3gSL9tDWZtFnTqqAmuwF6ynMsYNu",
  "key23": "41yruyLt4Tar7j4yaenWDAH49uTCN4Jhgt5SmsvVvSscV7NEK7B7Fsyv3WGm14npA1s71sP99X8mZe5Vt7FamipD",
  "key24": "rGmFzTUKjSbUKdsunBsAAA4X3z1yPXSmecvbR3GompKVb7qCTXCPQEL3cWXoFubSDTTALKPvVNgJnXABVSvcRMw",
  "key25": "3BymZmLZuvZRjvkCfC3aNRe8MyGHxbRc5iU91DX4HLWwVjH58bhdysDHhrRr6sfTLzddCkSR4GEhK34oFHVuMVa5",
  "key26": "ATHzzKHVCAcxT1dcndjc4iCY9KUPk87ZrfsmaqJCSiwVBXxXMistFddLtsfy67xNJoR7DWogh9LAJKf8jqLMiaf",
  "key27": "2Ny4BRhayta6YeCxXHDKJu3BjycrKrPoVnV4rGPK9kJbftuAmdWkMbDxTBGecTUNXYupeY1YE3UXMrj61xc2CpL1",
  "key28": "4Xz7rjymvLcUCMjgHhKpXEvjuxp5iyAb6J33QQHt5Ju1arPbNXrKNZp3A7iVWQfYnEncnyBtc4bs6FzGhUnsCEkH",
  "key29": "3y34c927mCZYUC1MqbLbKtuGaGQKWEJoTnFRCh9jXLTnpW2F9ZZa25FyJVAtZ7k2oWvB1SH7w2wqgEj9PhXgmJeo",
  "key30": "3yHnuQKKdxdmiDAWqBc8e4TWju3tJWtdUZXwgLgUKyRsw6uc5mzyV6LghGqGceb77z3C5ynHdcj3bLkUbTTufHz2",
  "key31": "5beJnXdcUzdYPC7SrjBXPB4vNqc1rvrUHJ4QjkddiBhGJe4eMZF7jsG6h9uGzGAcv7TKnPDckywe5Dx1CNEr9iT",
  "key32": "5SsGnCy8zvAUYbypGAX6p7rSDu6ssLn9YTe8mrWdZK5JCWYK7dmWTxPyT2CCA8HSexgw2BVNrXp3yP8KtCigpEW3",
  "key33": "5rZwY3TfWDkwd2atvm3TtY4DKd11ZjTyST1kQHq5bMANMfgoBbhd59mLYWoXCdoQiEJj9L2f8cfmMwNj7nHQQfYp",
  "key34": "59iah3xWxaErTcGs5v9od5FvZZyhM2o65q1bdmPdu7Yw3P7Hym8FCD2y9JNuM2o2dLitDara1ThU6HY2ZoKEk1H8",
  "key35": "65M9xKNiMzXZmG9vWj4EmK5TNu3EVmqW7jCC82JTLVHhriRcinanZhwTFU24sR8Nfx7tzME4xu6Wi9TZ5cKECYxR",
  "key36": "2P217G71Fi4ewHScaxkasH7FsGeErUER5vJW4PSjuZgoZ3eaQfGN71Yx2xuqFVSbmkUvKbhEsTghbj26ku4zPkao",
  "key37": "65xsX7gmNYqL8gjRkej8gFu7tvbfBgt6rNbjinpWiGZEhZ62Mm9ogV2hQtjbfGUqkCiXNRFtaBiEvfcpiYHntLkT",
  "key38": "5TM9RVm7BaywyPWbaDPBUF4vBjyEAP9VcZomtcVABNzW4hoRWKeqYb5jrvGgtFVXbwWwKhT8eMKK3pduNu2HQhpe",
  "key39": "4DZQnBjCmRxrE1nJXHCVgq57NKiVmQn3rbvsPWYL6fvgi473ng4GjkzSaoFgaWv3mZBwvCdcK1mAi9bzaDGm8x9j",
  "key40": "5fmRB1rMS6ArtvupZHN7XfZ4Fkmx1wHBsFYZDRb4LU1DLX23Fq61aTfsmzmU6pTt4nT4X37rm6HHNn5dNQVVJG11",
  "key41": "2U37V3xGYBRpJX5s34GrqR6GHVXgqmG8BXA6UheHSjCG6MnVXejV2WkdEJFmUGdEPowRKYpoETYDm9WiFGbsfx8w",
  "key42": "3SNxdHBg9x22eT5HHXQDXko5fVn452wpwJc6kkFmxJ9yoTiE1su3Cnmn6RHk4Rf3p29q46qtnE8t87RsrbHLEu76",
  "key43": "2yFCY4SAqEGDAhCrfFKgBwQo8s6jBtM4mz8dhDtZT6DB8TUxWVXVJ6ZKYbL4asUuooy7zvrMuaju3rAKLMDHbeEP",
  "key44": "aTUxnbHhBGpMSjtJjbvwDMpTnH1nSxaCf7apUAJJwm9QZh9Ljr2b14eraokynivGFJnxAE8EvsNuknZaVUTW8JK"
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
