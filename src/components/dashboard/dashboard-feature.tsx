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
    "5dmEqdGwx3mQdcije5hx8FzKd9whbUs3x2i4Kh7Yesm25UZWynftvsVuF7vcoZdL3gZp6QTEKfb6jmNnE7pLDBn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rAwjoK5qTxfk5GiDGM7bU1tenLruJqLmt13f1JTJR6ubeoxBcSQDq19k3RXp6hiGoJhnWzDd6TWNzVGPaVuQRWp",
  "key1": "3iwRVG2JFrWbFZNCh4xisqo75tKY2jq2KCPJq7gMVxREqCk8TBRK8Psmys5fFFErPwJNM8jxdF4nJpjrhaZhfoxU",
  "key2": "K98Yoq4SHxwgUaHLrN59KRV2jqQc4tFJWnFfYbXPbCrS5rUkB8oL6c4mZGvDuGDxF3648PLjkwvEcAMohGQA4Pn",
  "key3": "3uWkpQfvn64gySNQ2HghqhPU3sjfHHd5r3mkCEpE29zeRDmRWv8pGRVr9oViAQAfpzWtR2mBfKgoXBRAjyMuUnMF",
  "key4": "4ge8sN3bM7Kqmupw9eBuaptJen1caWp1nYAgsNEyp7Qws9rBgJi8NZaAtpnVCBJ2pkpnoacJWKEKLwWdkeuyGEfD",
  "key5": "3ADpctYuw4oUyGVyD8m4NZAetAvWtFk6piyWG6G63ReykaWMRGhzVTx3CLpgMATV4nrXqh4vkTjKie7JxNUtUrNi",
  "key6": "oLxVa6E8Cgupoy3pRZpsJtWnTMgmowKxH5zCHMu2ArihgiaskA1Qc5SWQKAafYYaMTLAExavULiXjg594bWVMCj",
  "key7": "8nR1g3H1yS6FbXvESk44GJj5b6gWqBE3TYM5pSkSTyz8XpnGDSMxKzyD8XC6Cjor1RujBj3WEYDxEhqTdRzxutN",
  "key8": "5129Rgg2Dtsa6D1K8J7aGKFfa3wqJwtcuW9GyPPZnWc666r8scY2qCSs8YzBwak7zTFzrSPFDmkX66yYV9gPda9",
  "key9": "pYVLtwHr3Z2hUoy7nXwy8FjF4Xmyj8da4b8PkTXvLcEgdaKazfa8Qvu1c7n7GwZABMjpR5BBgPGgAbo78SZZb2A",
  "key10": "6AkPqLdLkHMhFCe6n8NsocPSC7EywgF3YeoxxGQtRkcgf5Wv6rty1iPvXwCbc8SatmrdqUcdLuEqW3YhECfUCm4",
  "key11": "48q6SqweUNnyvxPrvciHhCS9V8xjAFN55Z2DSpbeTdtKgde1UMqBFm7VyvdX5y6XgcF8SiCdS1YKdkcXcCUvbjSY",
  "key12": "4tefPkno5qC6knVaGpxZbTizAwBxafzATrVEjiXq3f6KyacCgNTGKt9i8EHRs7y8RCLwZG7BkMH6nDvkaPQA8sMn",
  "key13": "4npTCkAd3mLUh6mfdt8skU5BP4tYRUCnL4TNqVaBTauSXACqzD89VC5x9xKdvKqSHhq3wJnsqoG3CuyVUaEpfBmp",
  "key14": "5UcpcWsXghxwWpS1VpVhDZHChwexZTHimnV7Cp3sLs8HsbHKaECq2avqY2jAzPwkmFYn5axh4EkBEJpbDRkLe82Z",
  "key15": "5EzfNTVNfxtv86xGS6X2pvnDnf8mrCWvXAvSue5wNZzzF81FMwx5fbcWEzHB9BKnox7dmKtxHRWqnWXKzRCVV6kj",
  "key16": "3TzQnEdp52HNioHpnq92hfkkBNujirQZBRmDif1wVxfHt3KH3QJX9SYYwoc2HQmk7dmF7F6tTbDFA9o17YmKmxTZ",
  "key17": "29gHXoe5ZW2MwBc66CSTZy2dCvd99Wn1h1M6ZvzRJvEsvF9b5fJCj9tbmo759TfCyFvghv4oHHPYpGrDVN8hmHgE",
  "key18": "5XxUEHCFYSs5F39KS7fhMB7y7TkKMvoRh1uKm1oJUs5k7N69tBDp9oNCeet5f7JgWHBiG6WcSs7nquTXvN5bH41L",
  "key19": "3C8G9YYDBDmCbQvBk4juW65UcBMFMBMrAHDZyvkQVn8CZoht7ghfVhgjPmJZQnKSAn6w8BL2HKbtQTcf6W4FMbyw",
  "key20": "669qk5FfQQutfRfbcVBhTetv3HKNTVHt7PWsUTEuTQnU3BwmaW3P6s2nTZWszvUSRmcoumVunxCmLMkvkarKXvBZ",
  "key21": "4ALB9wAnPJrfPYQ8W6FVeornVkBpku8kemxqrS8PgYVRKUU9p3ddd6gvf2MaGMEUi4uusxbTNHHdXWSdj41nT8Sw",
  "key22": "2exHgYaqnW4LF7ArzKTVwRz4vCRx9Qd7kCGzRygTkDf3qnNAzv1JCyiWtTgyJZrRCpVoPie9pxX75xAx8L5nzuv2",
  "key23": "31Ny4uTA6DfbAUjWRu95sfhuToiqme6EDRgq89WwtPtF7XV5Yw8h8SFT8hhEo2oB7iYDtyomMJN1jupozpRG5Fi",
  "key24": "rGTF9iYgvyFKQZd4REmJHe5dKTdvQX9pMveNxxuCfTEu54symrAAyPKGyjph8XfqC2AUQpySaRAPm5xTrm57Ki5",
  "key25": "5tnU8vLzYymqywjMWbpifd3SmUezThJia8tQuSfduD74mDzU5mSnHkH5g22ALz56hrUroKyvSXoQhzkkqS9UVKsh",
  "key26": "4kBEt1oWLhx3aQj4Bw8bJRhjJroQMh2SS4LAcLXgBsSyB3fbmVKeJoYU57nVUuXgzjJykgYTf74QH5Fied4jLydE",
  "key27": "4XDWNrDbbDZi2AadJbtNjbmzELMdeNxCa7RjTes6VhtHU3WVGjLsbqApBccfG2HoGsqXN714EvQjcRZP4d9dYjXq",
  "key28": "4bBeaxCDxots4fHQH1doE8geUKN8q3ALctFodpKmPqsLLna26jX5psPUo21AcMQzL2YPDasxXAwo2T6sMWi59D4U",
  "key29": "dtGzDsWFmCMc5EDvVZNkiAp59Vwpw6aEsKdBVSknXDjnH66Eja5gS1jvUmgrDira4aE6WyD8xw5mjfmanT2Lri1",
  "key30": "4kHqMS6c2qLqZbcGaaacvHtsFJmnuJvn98WZy7V89TjVtaDdNXKnazmiCd2PoAxQWrZei5iGrU9kkjmF1QzQ4bKx"
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
