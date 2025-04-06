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
    "4VTiNdHF5P481FrazvwAh9Gn1BAu72rTpMdrxEpUqzTCutNgrDfoRUL6UrEp1XHihXNTUT3UJQmX4t54ijsXe3g6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oW2fMjS2pzRNzRR386EJmqPV683BhX6VYZVdJynNDykw5mG9AgfUTP9gz7DDUVhTt4Xw5KAB6Fj2zu6zfX6T4za",
  "key1": "3zyEvdDhRZnWNwi35ursFQRs5LtBjjQo8u6twRyUqyqjw4uaQ2jGLCsv7V6tBq2x9VPtyJZVyPiNhKkvLZsU6xCG",
  "key2": "4bodQ1VUxrLVYpb5TSUXZhAfG7GzKHuqrzBB25QE8i2XtXR3LSZjAbBw7zUsL9wQaPNfvf6C2xcitGuQb9cKSstT",
  "key3": "3VJX6HUDgXFuuJCMnKRVQa8tx5ZPcbaXu8dNf97ALGNPSxnyns9hoF8Zm8T7ExF154LjdWccwd164e2prbpCbmqM",
  "key4": "4CRn4T9njogxZPnH8rwDWhmVwepg4FUjGWQ2MBFEXtgk5vVKwxibSRmYjHqsErXnjdfJtzKiZ1XEbShSWNLnPLrA",
  "key5": "4NfvZfFJtLw884JUCAMk6L8iiGds73W7Jvdf1Lpm87iVyYqQz7wUo7LLU2j3PM3sGo6qfU13gbDaVi8265cL6en5",
  "key6": "5uZ2ZaQM8vnmJRimLgbmzFVWWooqgMu4pnVVtV4mqyBFEY9JeVVJaCmjsUnsJkT8aA61LppgVwwDcYoTfC3f1cco",
  "key7": "Z72QvGUFeCdcUuxnniUa97wLgkDHGHFcPfcHVBHX8F6RBWNciJcXAK14CG8yPXy1DkiAWFEvYVji9vqKghUZzQc",
  "key8": "4pXnQtSnLkT8xF1hNKZL2KyozwUXAQPEXqtLi7RaLw44pwyg3AG9G6uXMgGiuvsJMCCknT8AQV4wvFmvmwiTk5eu",
  "key9": "J5GuvUyMB58cQpX1bga19A1WU5gmMciQH2DFCUeFFeZNTP2YnRsVMfCdzzcGvUdoS3Vj5zmaMjr3xzQH5WgimY5",
  "key10": "5Fw6cKtF8pF9s7VfmxLevkhvfuxrhdiBg3GidXU2FgfVHFbgkrZhGuzt6XoAiAiKWXSmRLdPfCjbu1gBoZdXsjxA",
  "key11": "242kxNWRDVj88xbBK2kY1nYtC2G6q5diSjodfAPkgbksijmaap8TwJqTNBZ6jrxPfEu5Wq3nnASe3n5L6U8ZJYs6",
  "key12": "2XL7pwsPR12L4RjwgA6rt8cri7Xgz1GxTwTt4ZqKpkTcU3cLboiM1PPusPyyDwNCnDKZDCFuWoAxJL7aL2UjX2DX",
  "key13": "2RH6fGwiCaRR7YL7vQQMRCMzsqskHCr87ZT8psPPzqJaBNcaWqg69mR71AqmoC3MWhD7kN3sm8o7enrpTxGyMmXb",
  "key14": "2b9gzU6ZTk66qAEZ1bYyuDbcv2NzT1DckJNG765RbwKQ1A9CYVnB4gZkH988UG2yKKR9EvhpJ2jgCdErye58fLzo",
  "key15": "353TeKNkpQ11uhbW7vPKZ1wDdv8JzBsS8Grc7FcypkTzMQqU8JiXEhNZ98Lv6jPCMDCyjEtwrfh5CxZ1ymySpeAE",
  "key16": "3beT7yxUXVfX161SjjobiC68PJBFcRuaXqkZJ492qcob9SneY7E1XW1konvTd3GemBVyhV5JWWAJYU9eRUKMMaLU",
  "key17": "42RLuybJoAHxhbGrYY2wbxPtkwoU2TKnRiwfyGQa1TZrqTcatjyvvKqUAbrTpCXkd6g8nTL16jJiLhpKBBUuxp5f",
  "key18": "4nB6UTF2DQGGcn7wND4ZtJVeFmP23aJEHdEN3GCvFwuWvdjYf7oZyemjRh2vWRUPF4eCt7C2WM2bE5SY4e2b59RU",
  "key19": "2SpqnZsbWTbQm62WEAMZajndydHzf9F95k9tdfFwPYtFjNfr9UWwJo1Avqw6kqwK3bNNdTui3gmeYWXayr8J38VF",
  "key20": "4pRp3UuGXYnGiyFt2nvoKyr3889z42fmatfZxpMn8BtU4BvWWqXfaNvQ4NB5bWazgD6SN9VwkJLczC1SiPYyfPyL",
  "key21": "5raUkWUfPPt7GxPw9YXy9x2AhQiHBcQEXvbBFdHbXFV2AZSEKrVBWAkvXz7U9SdLtL8ftgszjBkL2erXQv1tUMQY",
  "key22": "3Wo4KjPXSjn6J2NLFS7Pa2gYJbjzUPo54rVgMiCEGUP72RNPSWquPq3CbsgoLuBDzerssWjsuuPfkteFzc3PB8yA",
  "key23": "3FLony227bBcXBW5ksdiuqeAgcGPtmZPbYtoXpAqL8hcX7Mw8rHFNGYTRSGF1V5qmoasb3RKqgpvBuWM88kdravp",
  "key24": "3JMf4W513NADypRkPgvLQofMeUSzq8C2K6CbHr8urcPrZfLGXAZcra8ny4h7Trp53RjCVQZ9ejoFSf93XtYdqR5Y",
  "key25": "2kiaUH4nG58MFgKbncif3DSY4kMJdufH7QToB9Y6rwSvM6Ae8D58xqF3PGZkvwBaaafUqkBg2atpfaqktLGkpGKf",
  "key26": "2KU7GENaxyRafmLK9p7WduG2UDGC9BUuCpahTFnxTqzbJ6PDA8RK5S222fE1gTJgGYm7ghcffNusJBkrPwQzWybz",
  "key27": "54YbjoQTanCfByyTkZ95DjQkSBudzfcQzYfBb5t3yZmnVjHUe7Zf3nUmkDEQtxoifefu9KwSKtFUpWLSNpcphp5G",
  "key28": "5cTS8m8V7PwnmK4gxUVmpgPjpEhbErzmU4Pb7baU9FNDjDDsvD2iYG8e2XYU2Qd1jA7XcGbHpEzbzwkw1H3TRZfu",
  "key29": "51Z6dpjuYCZfWarcPNMgRWx9hZwTKEy9191N124SzVnLycQoYZbxKaF7SxDX23xVZcnuGmNgwYHj71yjtAB4Wwsn",
  "key30": "h6ed2unPoDbmSPpuREPQPDegzs3ffo96LRmq1k65Bdeiftt7Ao3pEvS759tkHyfzEdvrCtyDnXSjdpMtuiRu9WX",
  "key31": "4NkQU5xGxwfNhizTRqqTU1Uc84sNNNtiFp2S6uUJugz5DGQzTJWULtb6zyfM3kgv6R57DkwsWzJr8kNHwFxBmRaL",
  "key32": "3ibmMc6MM4v3JvzvY7QXvHvfsTqaSwttMWuRmXssxqXjENmPSEMWERUAD8aoZauoKSBNXBYDF7qTEarhTkjiuJrh",
  "key33": "W47XvkRiKgwRnQSi2zUAuCD5oDuu49Aodyp314j1x4PHGZ9Mjpdrwi5AiMzuyrZsi2ofx6HcdGyGB4SzaQpjt4k",
  "key34": "4W12NDGhhcSov665eqGvfzwqYTceBdhQK3eGMUzCuxwqD3gpjkNSywUkJEGQmq78YEdnBbUbPKpcD9pvfEXZVBvW",
  "key35": "5PhHk9uM6j9PSa22jD8migiqcLyux2pDyxmAH5KeNYoQL9QvZ7L2bKaWjeLRnFc3x5c8WoP659BppDZqSYWWhHEj"
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
