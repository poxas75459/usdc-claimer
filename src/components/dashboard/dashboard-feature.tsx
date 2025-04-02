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
    "442b6EYsx9z5Fcy7jy7j9YGUL66V1aJZUqK7antDEdwPbzoViMhamdruhnTPnCYmFkFmxhUQthGcBGktHGCba9Zk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FWBWZd2CkLYcxfLJwymjVGcBt8pwgboyNXSVFt5DApGkez8CpSKU3QCTnByGkyAiVWtDXj7EsbS9JrJyt9LoGkg",
  "key1": "52C5K9Gztr7SRTcWyuo3RMCUCscZbcV99jh4SkzxuZUg8E2xBYbo86u7nrTzUAwYCGwXkA9ZzeCg5aJzf29Zxq5L",
  "key2": "2qS7iBWLEaHaPCStJHbnbNmQq1VNiUbmo7gfusqom5qLeTVvPSosBsQjDfJFPD17p8R3TsgWZC7SqKzdf4RHwjQC",
  "key3": "2AzP3n7yrGLKFz4u5w9uCNVXK7EVqEwNhDVwWeGeqCBviWz6UnuuaY4WioShq9AonwzdoxNBx1Md6AmQjmLL1yMa",
  "key4": "62FJRsGuKXBYw51VwzX1HqZz1Tq6xMoBYzpN5m498KosYv8TUnLK53nuGzD6UjcZvjoNu6KyDZQveosjv3imrvqt",
  "key5": "9nBEP1jRHu8kEwS7cwLcexGYDCZ58JUR93c5T7GGwrKFdG4pKPCSEj4ywsL1Hvpmii32kYpH5irUXEcTyz5sBfM",
  "key6": "5RUGaYRRYiPeV67sU63KCNNubfBicSYFbANgj7jm7vy7wvNm8WCTrZt4WDPpERUtp3MnJEPSvPFcUhGa9tZrMa65",
  "key7": "2q3CzLMi8feogrKe7xd2XdAkUMqEV9xnwKNWuoUGaeTFfYakkJP9qRewh5CqUFJmqdaKvY4567f4w5a4fkLHRfC6",
  "key8": "2in3kFNHmCbnpaRUfbm2K9K5xkyRLgndcpPxzwo8vYZi43Bh7j7kcuopWXQgTGXmMMEQTZTwhPH59akenurTD3KQ",
  "key9": "VvjxSaWuzo5sBWpseDfi7Anif6kiXVkpd638fVA9GiwvkjGPNQgWfTB2UXn8n35sXh7BG3CL8ivHRQuGgak4hGU",
  "key10": "4BKDgKHeaSKkcP6xM6GDNnesXt2GBozicZ9Kkb1kZjkYpXhfe9iSMQaf9GKZhJqpR1kxMN3vfkkqu2xevsfQdEMc",
  "key11": "1aNu67MEizjcB3PCqWDGaoDjUu29damXB9FtDZq1qssCsittWbCgkD4iRv64jdkDtJG3PwvU6NsLRprhncvzoyM",
  "key12": "2mPupzoW4PdJdi2zLk9Hzt6NGiTxG279gsc3DsXx5LbLgeWGh4sF5P4YvEuTXK4YrDhRHVDjgCMuyEgGi9MzPpkA",
  "key13": "2KsahP2KamdwcrDeNjX8ZK8T1b9SVDWRxy8qBQZ23kKW9rwECJBt4txaFuy6E34vNbJwsrQTG5TsyYzSBA2EWEPa",
  "key14": "56QWN1RLpPeix6hYk6UXZ6EKthUZJwSLRDQrNCcb9cAsWcun1RCJ9xDiftgfnkeGp3mmskobZ5pk59RLzsCL9Ekb",
  "key15": "5umRfMoLVNaVqtUwgNSGG7gebUnQmBVibLtACs49amSa5C3XmqsvwoxJYyf8Aj9ShoKnXfFuAbwcDMQhKSXvB4VR",
  "key16": "57nn66r3djaxsgtKrFNKTynBpMwjjCW7rPJdCUat1477CMhuyKuP9GqxiZbM6oLxkXzAB3NfqwWSM6J96FtRCz5k",
  "key17": "3cpMS2xQdtArqJuFCCNEozsMouRXnw8W4gLxrCzuP1H5B9EUfxAbtQaUVetRFoucEfN3iZTpM7CwSdj6g8bWbizj",
  "key18": "62mjJ9atLKZbrcUrZsAqH4QKd2wE76cFxouFrckX6uyVRn9UYrVWTgrryo3z4keJwhqEubGNwT2CMUrQGWFRQamg",
  "key19": "4jYBssfUgSx14Xb9s9SojiWhG5LL5LRksiufgkiWzSCaRJtV5E8zWg5GWtG4GAMRhH8QZbGeZwfjNsxz77Dkkyga",
  "key20": "4xL5JafU7jRVLNpWjkmxHfXCmGcrcsXW68yRyj7SbtUHb35xXg6LTsd5uW1peJVUJYqb83N7sF33czKgfeX82eth",
  "key21": "5qXhewbrXeQrnYgdgKA3Um625s9etcGjpMUUvHaF9SS1fXLZbnmbgosW3WFHqTRRVvt7jt9HHG3knqhnTkcKjSGN",
  "key22": "gSeJXcSdVjL9dgN9PNU9xeScaJ2K33Cki1ZJua4qEXgrzkQGWECpui1rHXiPs8QrodKd14e4A9gxNjdD4Gi3BJz",
  "key23": "5NiNiKYM4VooYMrYVhQdPdPSMk3bcMwFVu12TVQU4dsztWdRZRU1RD8ftkqGbRPZMRFwMPZVtQBavM4C6WSoHC6f",
  "key24": "2xfZ7Uwpzh5FAd67D562r8WmnZcsV8pR2S4i45H1A2g6nVBj2p1MtsVmH4yWNUD1xuDeJbJsYDAY81s1bZj7kdmz",
  "key25": "3PhgAExLxREjyCDSo9YiKG9S8TJaC9ppEJkRaztrtnA5YxSJFEPePWbeKAXCv9t8knLscxMqvhGNPhnQGhdqw8uM",
  "key26": "4FuxQ732dynobvoD8uDkXFPiuQpVxfXQR6VsAwCWmb3TurfXufwqNACZWCJzT44VS8GiiwfPjAANxvkabrz4nbah",
  "key27": "3ZKQpsNQ5eMHzeKS9UrC1LZ331dv1rDQXHHqhhBHEGFwQgJwoGmq5MWtJCcZNSK6oBMAa4wPoWRf4k7dX4uyp18d",
  "key28": "PJu1wK1KzEQXDe3XeX48SRAp96dbUdt6q13Lf1e4dyYQSj9y7h1xwz4efYiRqJzDi8L8a8iTWgrNBdoiYKLdX8c",
  "key29": "4ca6HeBEiBrvMyXEtjQW1A61EQYcLCX9LJ1bFaeUZVkryE9x7W8FsGo8GojWNKiAb1nzNGjBrRtU4oYLjqSqv12N",
  "key30": "Nh1i25DGfSJvHAhFgiPFbFrazAZw6t65YPUXUmwA2pCtEi5VS5cnXHR4Y5VLKPQD1qjuRguryURMRUiRDjWtAAv",
  "key31": "5Yg3Cm42gd8o9x173sDKHD7y51DnKtLhnVNjWtjcDq9Q1JPavunkNHe947orgDrcMThxuiHT2PJ84Lai441SVNZK",
  "key32": "64K316FyoMMy9pqWEPo8xysF4cWCxKHYGckc64a77jwMAzkZPW4SoiEDQnGh7F9QM7J3YyM9imiLqD4hW2bWj4Bb",
  "key33": "4aUWjRUiV3HMBfmoTfz57vGyozPA7Cfsr8ZQGp28fuxE2sy3A6TngVrofMBsFQqpB99cgAC5ALjw43uVXxZNcZuT",
  "key34": "44Gn513etxMuGeg4obq7Vuqnk1WeJMjSrWeTNsKkz7dkjNappTQFKtEWCDuC48kYFLW9V7Rrmuty47wvgemz4Nid",
  "key35": "3doF7FrPqhY9GqFRyXM6CJsDvisxCMfsXgXzUPtBEAtRRvmv1tdvjYMM3uiMD6brYA1tZNSXk4QXf2anfdrDqNdr"
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
