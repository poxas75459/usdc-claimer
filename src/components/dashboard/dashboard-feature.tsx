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
    "qRbi74MQQYF3NBAN6ekDRoPZ25MP15NcppgKQXDGy4sa6CbcFywPdMZkcFKunn17k4UdYiYWNuSvCzGb1TCsokf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cwgjpJxSMpNz5t9ypjnb4yNW8L4Ypk2Za1NLRhQrYVpMzn9cN53qYZ48dWNqx7DTJ7nUSeeZ8g3c5daNbyXXpFP",
  "key1": "YpC8Cdob1Y3mGE4FJHhnvUGAvrhdfaJAyc7y47VRVvhE9QetfmhwMuDjTNGVA4UkkcXk2pARXbkDr8xDQzHPrz9",
  "key2": "5Jfgsswz2nD1posdgeojuXiYn74NhJM928gBdzJjYcjajvHm6W2q7tTUdms6HG7BuCoKnXB2c88XEJf4crdCyN6M",
  "key3": "dxBqcsJufN5Yh1pgfG21xciWQogksjuErLaRuLnrpLgAZBLbFgsBrSSRuMmXKh4PPqfVCDUccU6ju4Pu6qwMbRv",
  "key4": "41NncZUDbR9CfnL7joagwG99T3Gp4FMqr78XCpHwyFvJRq6Lxs4V5JcKNcXy7b74wbgGaC9pX5fAzFZRSW2giKvQ",
  "key5": "384PnpiiqdYdeU3HsSyRoTe3wk2yaTwbAG4wfDwNjAJid5bC3gWN5tCGHg23Rv1iSdMgrVDzBqxyqztVvvH4JWyc",
  "key6": "5H2Guv4L7136zQPHgtuC5oHfVMdo5yxrAWkt7PsNi4NYB9hQiX1gn9u36SLyqt7jHsr6dVJ86FhwRUXqVS17E7sz",
  "key7": "3eUozWaC2CgYyiZPdCtBNAiHiRoyCAHqZtZ6mxoXH7JyF9PxvyGfBAv3mdErM2gwVwoaYhEZYDZa8LYEnBpWjhQ8",
  "key8": "5Ts6PiXGjpb1W7ERrHxs13xBjMDUaTLCb5xcEdj3J6HKPYyJwTJ6vQTuwQqH3oeshqUVM9VDTbMETS9rDiZgPt2h",
  "key9": "42k3hAnxaRkMQYQZ8XM1ZJJHcXLrfQahtUAb6dBxzCh55fmxWtEDwQaLP7w3PWRnDsLwCXnRbzztv7rP7YE7hNmg",
  "key10": "41TS567WBAJVhsTnydA7VJqjKRMi1E8AsKbQVQn545GVNcbyHjfJCcPbXjXYXWbBfnCjW9r1FGFPqkd1iik2Xo9d",
  "key11": "SthHEcpqVKAsFohVKiq9jaesQHD77FwiN9JH57YxWmmn35fWzWgRwhFTa2E7B9UfZYegJQiKXRnvwyQ2RgSLPBN",
  "key12": "2WtssDptF8mpApPAgayJptrdEXzRujsC12bzWD5SyrVBHNuwGp4aeWGPDHYXKe4T2AyGA7Ncumr1aRNQufubiTLQ",
  "key13": "4xhTEYQL1su2sCX7YiGrUtsee5ufEaGf3oRQRziBUTwYCCezo3VGeshvXi4VGZPwnjpALGx94msPDwzXb2bMHbhc",
  "key14": "36rNLMVsWgBnGwk2w18BhdAV4kfB5jjRgV3CGhY86z5sish6Jv9R1Y4UdPFVVQUfjrj39wxnUFwu82H2NCVRnJs6",
  "key15": "5jjfnsSL7kLTLrRSWSvxvVFCW9QpVcU4DhYJWDpit6J7WmnqyDLu9SY1ZurN5zxhb5rJx9MqCGax7YFojxGKnttA",
  "key16": "2rFUwmSAurrk36F2ZNYhoKSRQnMw59ixS4Wu7VWx4yG4GaxrJPBuMKT34SmwCrFoQ2xGjBY9LJD6YEH46eUBg4up",
  "key17": "3hSr5tyhWEuKVcS8351dmt3oJQmubumSD3Vgn4HT9NXm4frgNAkd8HeD8vPGE1MUNoVX9QK9ARB3yw8EzFbFQMiy",
  "key18": "4uhAibYaLDFq3cptV2qyRMNtjTCHXyNUMkk57SGGzEFK1K5RVYovvhvecj4opZiHWavemSuWtFD19LCtP6PjE3F1",
  "key19": "2FMBS8dJGbgWgHs5cyMcAs8n2mXc7AfpNCCkmk5L3p3fMHv1pe7NqL7DCUn4UaVF119ubhrShjrEL16rd4F83gyW",
  "key20": "gbvj8bfjVjRnxNvobqMd5ShUCFRpbdqrbs8kK9pumFrkX481agiM9yK8daKBuxkhsgWxZ9K6nL67ofM2BZrVNEg",
  "key21": "5vKuJ4BxmKHDBMjyQQeGYkC2qZweXyEYfVv5vdcpmZPejBzYYPhgxfUCd1aM3GguiLxm3cWDK5YKMeGjuoD2g9gN",
  "key22": "2gKQ1xJ5yLXggTW5g4SDiJAeSfVRrYnbHuBbMDvNEmYdnjuv5aRBWonZmxDGygjnNjiVgxP4kopDLZBNcbywwzYx",
  "key23": "4259aL83XcZ9itmWZeTvUA2UTxmP2iqbh7Ji95Zd7QWjSdx2QrrNrAdFZDh7dVqKAPLubFbhU38qmSoiFrdjoqzy",
  "key24": "5Hb5ZS3XADw9RKLgT231o5g3BfQQa9a3BKNcZm2xcD2SJ6zZKQU6Lxm6D4MWLL5uyjsXK89fv9q94irvfSSj6sBb"
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
