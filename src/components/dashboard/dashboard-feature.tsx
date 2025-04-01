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
    "3BEph2UbBqdRt7sLqc7u6wvqHRGrCvYUN6o5HV8zVxpvo7XPucbre2MXS8Y78eUBzNpXzN2Dr2xekTzLThUAuyxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ksRCakYhHaTzr7pSqAMYghuZhkpDEuvZem8Hfd9aLAMbkQaAEUb54hxsk6ubGzBhBntGxJV8wsSf12afA36fULP",
  "key1": "45G8KNBJGuw3xyBKPpVnvPA8zSkb6Sv9WWqQs18xV8hHoqAhdrwkimADcDv8VAmGsCH9XTbexY4XQVWGbRSLSxq1",
  "key2": "4Rbnd5NheQXUmS8VvF9M1XtBgd3X6JKT3bnBbaGP6Ggjo16UbXUkkGiNrz5dJzDnbkJq3ZodWpPFWj7u7jPX4rwY",
  "key3": "29yDzAwmGgAeGKy4tiaDst9wJpnam9yWXfrGEGRfj2H44w7r7JX3M1gJXMCnDdcMHHygqNUmXgDrwP4hhzAKgXyx",
  "key4": "Je8LWNBt3tFZNJDNUqrDMWJbSzMD3Skkejf64csN8bvscQzZurrkNGXY1cvCMWG83Mvx7HQXWLFt2xqtTPu3wDL",
  "key5": "2otcuJquahBhmdZDAvVwvQgt4H8fdKUuftg8eYXimMy1EBSFAVKwUmGcAEXgg66CdU2drVcfN3EZGdCzaozGAN6U",
  "key6": "5iSbkeeTP5MPeeKqb4Sted8B1DjEjBAgmhsCJGxN8vg1oDsfD5zCTbY4woAoN88fHvRXA39ewY2CBq2pC3vasvEt",
  "key7": "4hGLvyEmwofnA7nfaa8B7y4VoNMomabgp3yvmpnwSLPmxL9VK7QiHs9m2ebcLsx1h6CoGLaqX2x7MKYDukWbF2dw",
  "key8": "kuqmr5d75a3xbNN9BaDLqn8cnU6HjGu8HDbeuoy4k2fYe6nnWuk3xc63ZBKGVyhKaEvLtUrURuiXY6ZcFdXcMSC",
  "key9": "2zu9QzJzyLpxv2MwD9g48HZfHExq6mjAt9Rg4cN9kh44jxVvksZmv7KfAUvikf8yPNX9feaE6Hhx9pbk5ykZ55cA",
  "key10": "3LBfvVhuWrxai9ZJwdFmuwSaS3n7FoUQi7ABM3uScCLEiPdNEmYok5okWq4agZ2wTMKqieC2eFKKqmW2ag3TLZqY",
  "key11": "2u4C8KWptGTTtBBSSKXS9YcJZyAJNqdYoEFEPr21yGyZ4HSjYbfyHTFXivosc1FsMJcLT4q1CH4AubQ2atjDaAT",
  "key12": "AEZ8jNbsRDknBadMBjbxKEPPtmSDgq9MECA6fTWCx4DMpSTcckqnvDpzQh5Trm2XnjeVeq1K6iXRWrQWefHmgTZ",
  "key13": "62uDxARo9W6ifTeMnCPSy82kjMg2Vj2MVo7URj6oF4F9btdfcF7PmvfsKFt45Uk1d7as2ztx2AHZzTYUGM8K6CaV",
  "key14": "5w2K5mCyH86mYErFYdRKuTYXrCPcprJCTKac8ek9g4K7bb8sYGKT1HDpMkPabvjVKcbUr6299uoDUWuBGWnVuJpH",
  "key15": "59fAy3SFeLy82Cjdbg3GbSgeRC5keH5RUzsLCWWETsLtpR7Fcwn6pPMqwgws7tvPVXvAebeeZRAsqUQYkDeDPeS7",
  "key16": "B1Vg5KGkegDmqHbGWRXBonX1mF6pgtEcYLraJNzvLNA59LBmuz5QznCwRxiCVbNfSphj4b1D4oepAdKRDS8i2Vt",
  "key17": "55ozPTcbvtu9mZkco3Pj5ZQyUQACCi9RMjraVURr55zBw9UkehUsUgMXaMB9fuDRWZ7E2aQ4B6V2abx1egkuwshn",
  "key18": "pLthZSdyQMcP5fVUqKn7C1p1453Nc3ZL2uUoRVkcgQqhxR6FfroJSerHWTgv5qSDEKi56ETxEmkAiftSpCxBcrf",
  "key19": "5h4gGFwRAyFNLuM8Rf7VDNj3qJyY7KVU9uGydFNHFcHEXeebjvXtiGpQQQgrxEQNxt8SSXo6vHyczyZ2kRXZBCxF",
  "key20": "FSKjR2uzxzrKSGWYsYF7hf1VK8wMFZBbkRyV3MUjwLHGv7sN2bwvZCZ8oRtwyY7reU6WPTZfh9uryyk6TZLSrBX",
  "key21": "5b4dV5PKvKJkgYE6X9ZLCaEGa7r2pQ2YC8ybeQEKjbrRztvbGwUj3WYouXWfMWGrnnys5hrzPaQZgrzDx2L1vsMY",
  "key22": "3zKxJVEb9cUuzoSXXjSqzstZfFGees8muUBo1m93M2QtkVB73eok3Dx4xX3EDZYzA9iEamSuZPQ5MsPbxLCgzeZu",
  "key23": "5SwLjksxpsogFhyusN3bpWsGS3kmQptkM2oS1hmFu83BApJGJxoBDwcUzQ3nHVe776ay5KdJJJGrfBFn7MfogHSj",
  "key24": "4AY8umLPMbHPeKsMr8FgcJFk5NtK5m3kLYwMV7GERaKredoy4rVhPJpGCFv2S1xkmR9vBEh8F1F2WaH5hnZp6kd",
  "key25": "5FiZXYfhRCn3kwWAL1hqRRZXGXBVHKa6UmNtuYkXL9beNFMCfixFPWGRuexD2MDGXrgdB3LfX4UjfUm6QY9kC4xP",
  "key26": "5rvXcqdfGHZhDSpBd6q2esiYCNeaaXaPTPw13Hmk51NH8jubz3kixwDDxJmbYpCcnij1M9LUqn4peqzZrsc3WCg1",
  "key27": "5oVUsbJtSmuUz223wgzpT3M9pHg9uRuChrTvXMznXhtowSELb3z6AtRn9g3bziBzhoZUcVKWjwjWvMVNwaeSH7zh",
  "key28": "62tZGRTQzzqaZAqDATrYrbU6HYKtUaPwQErapr2VMm5GfErPCzYwgK4EMNKqpty9zrurUyVnjWzBcnJzVRWX5R9q",
  "key29": "2kEM8GL3QXBKnFQFAaePrJ9Rfg7R3Ukcy258dn4fRQSQZGyLZZ4DYp1rdBUqF6CH9yNhLxmoU4gkXms2oEbCKDWk",
  "key30": "3M2sKf3XiWhpM1XvhacNHJuQMfGiWZwJ3z6rG2pvnWvdnFCMfu9dWLLeRdhABHRofApv1uhuEkc2s4pUh9TRDZ8r",
  "key31": "59ArUBUZGWMBGJ3f7zx1kFALnKc3Y9vu23MhXWDRJN9vsDUmzgjLvDUnAaTrNCdtVmBqhzfSHsiVen5CEZHywz5F",
  "key32": "2ghUhQR7tpyWHdVAqjTRLgFmg3GXpSzWfLoWNaAohxGg7tBmSstaTBtV9CXxm7fsLaTyQXBXh9MgJvRySmFuGY6p",
  "key33": "3K2fYzoGU75HZc9Gb1S17a53aCE26j8EsV7J15nXkJFLmChYgq9eB4cZfrF6PxKKcasW9WuxyonUwpDXdynLri3W",
  "key34": "qsSvTx84A5VGduUMCbzvnkye8v2H7bYjntr4pQ1JjYzf2ctZYT47VCvZZkJey2EdvrgmFYx9Jfg5KvrDgmzncAe",
  "key35": "b8sT8C6FkBZCZQAUaocM2zrZEfusvyD1gHwFC4UCwSrKvF9ZvHvUjts3H2NDjA2WWpezGj4RFtsYcvjh8r4geS1",
  "key36": "ccWHqhbgH5zrkrVmDFeutvK38KmoVA72smY8Y8jcRdnWiZNpCSTk98bmGKLVWpWX65S2R4JVBH1ADrDY72xEBbX"
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
