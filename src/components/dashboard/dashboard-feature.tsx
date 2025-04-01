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
    "4x1k93tqMmfRGusb3NXg3GQMutmdxAybHQ3nxax1f4w9sTj93Q95nAB78SPyx6G3at7FBJnP39tVVMhfJUo3etqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54EsEJ4TXwe5kGkzg4h4FLFPBL9QKADE73tnxpVZg7L9TKuUrtMdcyp1adyCa371zBmDkEHkjyhgpjkF5NwZXWrd",
  "key1": "2qm8aW7rmJhHYu55f6g6QnnUHmpseDALNdS7w49V4frnthhPg6tYN8wGTMU3LC2L95X9D8MoJ5hyVrdx71mX4dCT",
  "key2": "vF7Ecsgp5Rc8DmbczJCdn33LvBvZZ9e5Md7sF8Mxb1fF1p2Q32PYj9MSpftUmJgFzehPz2yuvPixv9FHvidM9Wn",
  "key3": "2oRjQumV1KyXAhY7PjrHTSkhHUVU2xUkeg21PotzGAxTDaL1EgKYFbnDKsBHvSQfXMeZUVcPygy1kbsa66nmCQoQ",
  "key4": "5GHto1eWZ94ueqfbojoCpz2SWaEQR5wMTCmVN3qu114UGynQW5Uqa8EuWeUnXdwSdgEzm7ZmVrF8xJG8m9WEKnhw",
  "key5": "13mDxVZ95HUWjDBtwgCFxVE2xpAyZzP8hosDptEjp7kcHUfvc5zeWmtz4VD1DexL39VN93AvAb7u5ex1tjGQDnP",
  "key6": "3TMJWzaCSX4T19DFMseEfP7WH4UBNcL4qgajW3iRei167NiXUGunPEEhCUNJoZ1njxoEYVa97v9DFN6318ZbSynS",
  "key7": "3xGNSxdk1VksUX8RFqhasZQpr6Agdpf2UGCRztK5153Gqdxwv2LNAKNLPsZcCfPTn7FtfGbVSP2jhXd6WAGsBYen",
  "key8": "4S5L7iKtuQUWsZqgAnCfffEEhtzLMND4gfQHTqZa9tdzjeYeDJxfFSfTXA6BXPsZoE4Jsnta3YwpxmWAtTYxHhFA",
  "key9": "4PZGfVRMrJbvvY7V5fAxMP16CYcT7aM2sHoZKibNPRezUKa9zdNRdWWma48kYHc3hHdXXahyDpQFoAKTqv1gLuwF",
  "key10": "43GDGCHJ5sKJUXFhgUcJTLLkDQGNiHsqbjpnKpTJqyEhq9rFjcymxfUN9vgvZ7zXwNGGFvGdzVEs4ZAqT7EpAzAT",
  "key11": "4wdTsijDukLSGzQvCvPsvicHW4y6GqbWetaQNJUWCjZRvQ7J7oSBdx4wEo3mRth5AHGN8daRu9QKG7cWgLhWyNnV",
  "key12": "3nXmiCfmxtM9murAW2Y8YoVaiETF5PkvzTgFfqbT7ddK7C3qdkiocgHEPoeKJ2TxTtWKuGA4LiPEUDtoETHSfYv9",
  "key13": "3yp3wN4KkPRXcFvq1DJyAVaCrqYna9fVTSBYuygGyEASajQZUxjXhoUCN22oftEDxAcEzt4XUv72qzQcaYVvuGmy",
  "key14": "2TkGYQ2QW1rMxRUj6BHg444AXtdEuy1akbtGhehKAiJRXRGap6STcq8cgyYvGGteNR21mUuGC9G9wuuJuKVaPifu",
  "key15": "42ZrHdcDaeYt6XVZC54yhBPujkAZSmdEYtCx1sXAFuyK1YL6Kfg1NS51dcTB9Uo14ERbwsMfLViHTy7LFHpc2qLm",
  "key16": "2tCRNyyVCgEpz55ERFznzewMBGa1BZrnBf9nzoWThTqGjL7Vo3mrbayBuSM7F5c4kwAo6Se3BkEPwb86KcfxGRzh",
  "key17": "3MaSTaKRo8HhJVg9E2YSQgSZEpNMRZed7XqBuBMysHNXhakByV9YcbiesjBYGBgsr6yHLFthECjFN6Kh1k6XuvfT",
  "key18": "5fwvD8t1yqGuFmGyYaF3s9hcT1kHh5Z8BuxJc4CNZ96s2jz8VQCbyLxrZ1G8WoZo9qosLjQMktTGVRA18MkVzzYr",
  "key19": "4PHaCrDfNLyorhNFA9xJxu6o91KZxSh4gNv8Gk7pZJ4zzNT5G7BDbSxbrDzMACit2Ga5NRVqapgxTeb9wJcLiDEu",
  "key20": "2x1fYmVEWqgzAmWeAPwprXF6LFAyZtR181vZotcoesbo216n5N8QbBFEU4zKKs68bZfT8txv9kX8VojXAr2j7tPh",
  "key21": "PYiMT9qhUwLytyPHc3XcE1Tjp3gNAP8gByeY3dAydyN8SHMUTMoq4mLa8tW4KQmW4xz1zuQS7QemhYbhYoXvjcd",
  "key22": "3NZ3dFndJxMUYMqQEiPMH3Jx9NEZNrkceQfbY3UpNFNVERREUnX5CZr8dsb7no252A9VD7xqGPs8kHkPsviH9q4C",
  "key23": "4ztLGpuLfPq1NAkJKZ3tdPHQJBXhqnBb7GGVgD4JA7GAwKf4Jxr6rYJ8TDgWxqXRVjuWdBwJXYFweFf4gZuSmTjn",
  "key24": "2TJ1jMjN36Dqjd4dZBTgPfobYKiGw5A5R2NMUunVKufvhwNXHAaZDziQhGMUQyGg4mpdRugGwsAgdU2idyQZdNfp",
  "key25": "2haGhA4yjkQQ5oUPayN6L48HKhDZTTuk2csupqiE2ETseYn2YTeGkgbKERwdgBLPjCmKqndanFbnPcUt5YCyKYpY",
  "key26": "5ZjX196fFhZXJtoVRX2AZj8foT8pB7gurJMWW9KMKji8NF8d8AsRRDGi81zvThXms3mejwPW3ojBdWj1Vdrf2aQQ",
  "key27": "BS416xUNRcCCdu1yuWKFPbE95AJ6Eq8Y7VEnNQ15tuHMqa4XM4CVJAELMLemyPBeVhjYxCKhDKRBw9JHe4bH42b",
  "key28": "4ZFbHPtVeQjwrhfCarwrndYAbxKKyhdbZb7HG9gx9vHpv7uFDDtt3wquy3H64YSGbxhShDZ9d7YbV8H89pyUhFqB",
  "key29": "216VbkJ3niN7Vaf6fTJZPKXT6MJ8CNHdUb76bxQThzVPJ6rj8w5Gvo9JReigx7B7fsjHNc8UGTRGzvniaWmvJbEW",
  "key30": "2a7kgiGbUAK2nxYsBcznWNPdHafCF5pnpVBPQ36P5oqpvf9RVxrqrHz36KmEjqQyAZi49NUmSVcNGN9Zj3nMLtCc",
  "key31": "5duPyATW9cpudQUAwj7PYMCgLW971GQ41Ysk3PphCejfFmwh2TCEK6k5TPaMtJ4sZ8ynwJKkCt3DTiMCuowqGNst",
  "key32": "4DP7hmbhEepdLUVkPph2upgWA199LG5nzjDvjexZdWgCCzFrgVorVjj5d69GKSj1FZLbpSJbu9axMN8sFXXi9k9y",
  "key33": "JvU17kiMDdjR6WfDZSEadNmEfhgL2WradLCHG2Jjo7rMunYXYjKsK9XjVgQBQYViaHyYYttv6YQebym25yE2Sdx",
  "key34": "2tTdPVj61FQhbChLaNg9ex4QWLQBRKCQHoYz6yujekuW7uTpaaDs3o3nTVyWjBsdqEjMM7qi356Gc9iujtzz2WUG",
  "key35": "HM9mAcxzbjj7F5TNYnnWA9pcK2ZDyFo3wzTyzFdVhH8WX4ZZdnzvYAA8n3SWC8HJuKcVmVfj89Qy5kicY6gnR89",
  "key36": "5DNjNnaLnzEMFUjvyPyGCVE7eEGS6Td3npFTWqKShdS7SiDnKuTRdsfYeqEZ6e42yqPykeEFNVYsWyABm6gDyKPa",
  "key37": "28WTJid6aT4B7xKub9Qj8U4GEg2kfaXT14TGQCbS15WTiXsLByCskNAaz3Ysnm8aM54nDzs93ReT6nuiYfzJV2Fm",
  "key38": "5U2sqsWcJ5AoygHTDeKEz9QVzzT4Fx8A2CXtFkBTVMSF9t9djC4cMcq3ESdP2qsna9cmatRa27jboy78PLu3mBp7",
  "key39": "NoeRSZwQVvi4vYPfFBfFnhePrjddBfLFQ5fBgemSS1awE5ZcWNfWwR3hjvHGCNyk4Jte4XEzL8S3wA8wotBJwTA",
  "key40": "4WWyr8hGHGcf8FP9RncSdqK8xNUtY1eCHPFxPk4RzK7Bp1rt4XqPxZa9KzMxVDe9Rt4RWDCfDrkP26w5xJAmkNn6",
  "key41": "W48BucQ3xoqygAjjR83Kto1bt1pcDrdRajAjBPDfiUjdrhBin4GwNRqUQttWuxBmF61VdgqwDHGJnRaQA1iEYBV",
  "key42": "66rSQwXFSFP2gUqT1VmtTbT4TmjYYGnamjmfSdEWf4fHRu7ozPnAGWaG34v9Dz4cZdyKJToFGmJEKrMavgTDGTmL",
  "key43": "3MXuuEpCi4hHJCUMGgMLW5mF5pW63AgfcPJovQ9phqFT3fh8BX4P8G3WJAbzugLLYJp49jydZPqZpUmsX89DVKch",
  "key44": "2id9xUPP6453fKWoenn2KwzuiLAPqoj47AGkidCNgen3fK1uZqDk4CqLJVw4bSyjmQ7dG2cvm9f3oauSBLT2VSY6",
  "key45": "KNmCFCJwNsHJpUedn34dbu5g81dSCLykaNmfFcmqUFXcqDeEMicn5EVCWSJJYQFeaCzmqGgRvAsJmrosCTdKhhf"
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
