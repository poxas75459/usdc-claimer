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
    "4C8CZZaLNQ4xp5j3FkSbdhvaxQ2aUMeAQQycsgZxpYPWcL4Nz4dQGvgrJSU1Q8p3Q6BsXLMkygxDBE4a2ksbbSed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NQPFLtqht6NbH92F6XPo64XHEsNbD868PGNfM1pCqBF7gcLxz9hHUkPL7fZj88ZjFq8PrxinAF2RVb5M4vY3zLC",
  "key1": "zy6s79ttJn2ZmAYH8shunUaMNPGa9aosQfbS8pGYNQXeqj2tuT7foDCo1AsK42ULgnCQfUzk9rLpGeyF7XaKA3K",
  "key2": "2Gh2H8LvQriT9sBrkSERSzhTaLzL7YRqcunczpBWkpSaz3ZexGs7CaS58wMQSNoFrLyJcF1LmUuJJnRnN1Evyy7B",
  "key3": "2U9aNfoucWyhszmNNbQGfChEKtAd5K6fLorziUpSTEigeGuDVsm39KFSvWgbVGNbBWsigGagAmSAPLHqftt1wnxf",
  "key4": "2LM1z4JuVZMgiR6aC8czveYSovhiJ9sH86CYHwTgUs9qVBoghCoDs7SRTrtLjHnsW3qZRtCVQTCFmWYrR4N6QuqM",
  "key5": "SsVDuCcCXPPKPnxFWdAcE868jbH3TPx9BCoQFj1viP54QXLAASV9S98VHEwnhyCQHG1ByNj3qKE3A5D1gcnNEn5",
  "key6": "2MRz3cngYMvscSa2Kx3qZPMk5EvXsv8P5U3MXY22vpkG2Zm8ov3NWhiErDKzT2hv5VJDgkFC6Bqe1GzJ7Dxo3X1t",
  "key7": "MxbWk93jsKeGUQ42T6kbqB81GxWauy6cNEVadRQ1B7j6dQgCC8LyMgD4H3zidSdPy74Pj1ZA3WMmn1VwVuC22j5",
  "key8": "5Vk9UVN8GRhrcsv1DG3Gmf7bds73mJSocjPS5dgiW2SRu1oNwQqSGdVLrc7JoitSZfTpeMEzx3MCMSn7EkDfJDHf",
  "key9": "4LRf7VA93K74sizAcYJ5okACqQkpxcxpiCAh3V3Zq24sA9UTtYdw3BNEPnFyGNbuaMhjepMqHkzwPo5FQDa9FmW",
  "key10": "33viv8wUCtRwRzQZMGqtwLR7EsP1tX4DseFkUqNj9phPWNMAj8E1JjLvBPVuYx4FKxMBJQUtoZUTn6KTJ145yCdq",
  "key11": "5BvjxsavG8DWz3uyfVBDFqkvgwSB38HNj5NRihrYyxsxctNsKXLcS28nTHjvYXJcp4nkmgbnJYpQbHRsXxMRkVKU",
  "key12": "2eCDwVCvuGLJVPaA3PkEcWLB1LzFSU9ZZzEiEWr2w59VG6xakwdTcKyX1dSFwc45xNyQiYgF6bGosW9FDYbRN3AK",
  "key13": "5upkGvQ2y7ptHuh1dwNseKcHhVdxH1WxRfCaDZbBATDHLpNqTaycreJDz4zvYbUzLdDbRSZwN9bFoDFM7PCBGXSt",
  "key14": "dihpBBuSddSRzbMVGqXHC3oxdteCnKCqMMtB5EKBEwSFMRYs5HVWYVXUJ5E3S5ZKWBcRAgi2t3dgbpSv4ePZ876",
  "key15": "4NJUChYkJAtZ8SJkEk6gSLYYwA6G1RxtXs83VctHmhHrmuSizkXZX8zBWBY59uD9exNDWZxL2qnDaZf2xCgU1kAd",
  "key16": "5Qz6aoNHR5jHzaYSMy2WQiahuK66r4v7YL11BrGbkKdZCA2aCqFeMZGhhFk6YAtEcJYkr3dmQCEtX9S2w2NbFRSN",
  "key17": "2zhcBsmhxpPL5biEtEMBxaDfo6AGYMCrH5Mn7eqWejPtZD5VdhQrPydbtueNnDZ4GpdsgJo1umpKRNraaMe2MmZS",
  "key18": "5V9mmgkmHYdfQtBSuRLBT7fyNsoDXx8MyTKhMn1DbDgxxRXzFg2iZCgnCejxMTKM6TDytEA7wAZsKbQz2ZGqwBXX",
  "key19": "jkBUH1KvgnbgYdrXKDdSd6HM5WvH45ZZWzdhrzbzDxUENZUBMyVUYRez4Y5K3GKSQUtm8F3bghJEr6Pm1UeWWRG",
  "key20": "4isuZ2cXkPFDoTW1D9AtYJksTKFGfVsSvniekEgczDhef3uXSfqpt55tbyE2msKvAShLhwMQzotB1fkWnkxHK9bR",
  "key21": "3x9Rex3z8jreQJWNxZ6NozueyuDromEYRwwjY3EaSuHmpu1jvXsJ94EXRgh1mHApUEnABcE3YZEK13Ux56XS2qn5",
  "key22": "iN4AjVwmA1Lw7sab4obn39aDhLCcpL4dRjMXvpwkAtrPxoGbfh4vCpfPLJL19BLokVff7btAiA2YBR7aZeunLMK",
  "key23": "5GYvuk9fRrkBy3LSjCVDRaWYErcd6JT5TDDRJJ2AH6AeZemWcXeQ4KHnZrinsdWVfEMb7Sn1PiinG3r7Fye5zUg8",
  "key24": "3HaYT9ow7CEaS1HQQke2RrVC7CVvUp9jm9KZJH9DA5KF2WsDA7YRMfQ8s8fKLNAVyreeDTL3Z9uD1tnsC6wythjD",
  "key25": "3SmY7tsE6fVjknYd4Lrcn9nHVHQCCLAXwvFYHNu55xgbGX7czzqDERHFyC1LbAyjKBmwH4JB6KVA7E1J8KYGF9d",
  "key26": "3cHFB8phuVzbPtqVLJdtAfuJj7whEvsb6dHXMbL3KSvyBba9BxMqYkYwgA4NMe5BwQB5XG7GWZj6oNTgi4Kmmud4"
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
