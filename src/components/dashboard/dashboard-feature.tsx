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
    "66Tc5ueeWaLdQ9hWfGkabCfSpQ5duXN7vaUSPxdYXtxmj4TPBrmn5awbxtH1PMwbqg8d7C1z7JXcUWupbjFTWE9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34st9BV7sKNipsEstLy3hXfR7mUyoVgqcx5KUGXjvhiMtZVuSJt9WFupcHQxF5F3gtmS9Hrf3ff4k8Q2WXGdNjWX",
  "key1": "2iUAksLLrSQqxk46n9FytdkouXvQ1PzZryMXDYQCdRR7ZfrMf6USrjKnkNLCijUiY9qtTkf8wrdnZi5JnY4NJU5R",
  "key2": "3LnSPTDXr2cwQtg5yyr33XXusqrDmQESqoK1y2NGDrDRsAJTxoNqWcbSQET11J9MX8ynonVvArEGKeST7fgnhL7o",
  "key3": "Vm1UyXAmGmgjnPZ1Bawo3JXNyAvfXmKUAvES9EhGWJgAaq7WKQp5R7MXk1VCBG1oTjGMpBgahWpLVXSxiN6Zemd",
  "key4": "2f2LTryhm6ScH2ND445yq7NXx6j8RfZ4M4wwRvBCHhCXNTm7Vou5Mk3m2ziWKFPUKXqx2tGEwtejHSfEohW4cgSR",
  "key5": "2tatTtVVZ315bm4q1BkYTpPSg5rt9LkHL3RTAYyBEcEoCeo6GJJcw7hFbSs5AVMtqCqnEQPcJTuUGDPxtmKC4kQu",
  "key6": "3X1C6ymFRkkwjoCoDsggcpfwHbHdAtoZ2ET7RWFGisxR4JMVoGJdMM2wiQ7emvyYrwQnrwss7Gy68KG8ffnxUy6",
  "key7": "5usMTZ6Ah4MvVPKZpn2T9AiLPdGmpXyZgpnpPnj3vVuDFmtdgMwC1xuEdh1y6r6j52E1JAYZ5WK7Lfe5fbBQYHzF",
  "key8": "2ycGw1qBvffmnLunzSEHXoKLk8if1pJDkDDbYXCJWx4vSYaycYu7wgDTXNrUWscQLgRDnaUWhhqf4dKP8uDH4VMD",
  "key9": "4qugBMXoSXCMN3dqy5DbAnVm57brxp3KP8mozwH2Lj9VAzBVaXLgtQJDH4Spjdr7HUW2gWwMP6AiecyagjBLQXzd",
  "key10": "4ogLzTzii6hLYVTvgrTjBpYMvzhTCHiYJUxgTecG2wF7n8Nx5pWeVA9tBPEMZSBApiLSmrzW7E8mGLCdrmXgsKw1",
  "key11": "2mpHZPKwL8Ej5GnDyvPrTaFev5MKZZB5upy926ht7U7EQcg7bvkRXP3aWWwFPX2errS2cmcQUQoYpxnmjpMN1j4K",
  "key12": "pjMeNwprXZfuEn1ExPgHgLC3uy2oDnff5RAPxr7Rp67DrqNDrwJUXZpqGZbFR2PFTjrTLiFtCW4G1mWSM4qM887",
  "key13": "2kzS7v4bE6w2qfoNpVSBGUTKMhCbhuSdmCdA8SUoNxD1bbVdgcZNkW6GNY2HcDMRDXqbUk12L1o7dE8rgGKb9yfp",
  "key14": "3mP1GCNNsncSsWwKz24wu2t3HmMo7Qdu8SmCDS7UBTqtNnjXPVALx1atFSrCbw4JS1oZWLDS3nThxVdK7w13gxrD",
  "key15": "2RxxWJJk7i2aaHQenNFVZfaVoZ4DCA4zVAo4ApzC1ZFkbXWUwRtrsGaBrSMM27p875qnV5kdkb1HzK2GdwcSao9J",
  "key16": "5LTdwypDRmLqEAkvJ8GiBmpSmLitMQKBbMnzsdyHJxUrk6CsK7PcoJFSGaBo1ccbLWYVK3gw3nnEQqWofu3DWxQm",
  "key17": "3j1jYP6Ltdy42urgauXPq538c7kjfiimCPLJNm7TwAP7De5YceDYjJ8tRrNWC3VtaCvnRWxj6nFaXdjbcikFgw2z",
  "key18": "2nn5Qej1ERS59gwcVvjEi13hWbKoJAn41HULV3JpCzNaygpEoRxK6S4jM943ZYPWqQ44k4uG4mXLqyoY8Bp9RgvP",
  "key19": "4hZcU4FkE19Cgbdh5yWL3Ejvt6aWgmjUkqsGFY94eQafeadhgT6XtuKvY44RZp7kDHJRMemYQ22sjjYNUrwh8trq",
  "key20": "3e9CuWc7rtKRsZRpHisdGg28DPDLXrqgh7edoY6BqSyxfRvuxR4LixDL4F1cxy2AmK8ZoBBCihTCvADkpedXEEV4",
  "key21": "44ZFUuKriDvrkRHAGxkP2fsWQd1iUS5x1aZSo6q2tYveGPK13v2CMycXV49fbVrLdxsxpStsxC1J6eK6bcQVF43j",
  "key22": "PbGL5o7jXkxmJNDzAxjbkRKmuqvRyeBgM446omHJxfdWVwEEZ6Z6Pv4nyTWVERtMDdrowfSX3YDrLUbasGN28Hm",
  "key23": "5hi3P54Vse8hE6KUb49MNx6tJAwfEFAVpQJQzwtZt8bzpruMYptvFCvhjXKHTi1WgBJVdc2HM3VBfgPURv4LFaAo",
  "key24": "66sAj36pUkDkvyJwuovC3b5dWfEGZihotKPr82ZLpvK3SAHDLguz4UHRf1WhuJfdUptz5PkGSrZ9G4fCw44YLM3K",
  "key25": "2yvMCi5CZhoXL9PZ6mMmKZ7zRmWE2Zd3UvxJ3j8WBSHQEfRXyXmX8tgYAK4gVY9JGpdauGi66sb7SgKbevJ5f4ZB",
  "key26": "421nozyqm17L9NfBkFHWdgrmpxVtMPam56qxzM7xA4wGVSyMQg6rumHbtS9obBEoov2KQm8jXkibnGakkvzYSwv6",
  "key27": "4RvkAZ8CVKyiMztpa2nV2GzizbKFLEB2zGJVDzAYt4wobJsNH5pLpcyhVG1gai1g2aKqUEtLUzmd4orQH8CWV1dm",
  "key28": "4v78H7cRjHZ1JJ77B5K83Uy49von95okTm9BkinYMSHcfreVXiXwMxMZXwqCzSGbaqQVuWpLUqkJMCkJfsscF37n",
  "key29": "5fn2SanNakXT6farPnKdx2qGcqrwPQ95rQuNmSj1L8krtomCXRPVnu6cVpXDkowdXMxP3PU4nTyALWeX28tZo2HW",
  "key30": "5sgSxDymia4iz2qXCzDDak1ZyCoEWzRAWKnfBr6uW8NDehsURkVDBQ72gfwLGrJdoan1BsJvraT1AUnveHwMcJ6p",
  "key31": "5CWmx285wRTQVsq1VodxfSuR3pZ5Ej7RWrU9hJBGLmYgmr2RVsu3pq5u4powVAsDwiYV6Mxi1zVCwWM3KzWMTfZR",
  "key32": "5z71MDFhET2etPJq7Lct2MQjfToX6H2AKyhE4pcC4nHcisCRDJKTKaNi4MqMXkrHLj15cUPpkze9yoKDMTdC3jD9",
  "key33": "2JUstygkwJ17dDDMcRuGCacPtvA9HT81Q1qfmtDKC92phwaP84EHgZvhVZA5My4K2VS8zvVi9TSx4Tyo7RsBLoUJ",
  "key34": "4Po5ZPP8shJo1FjxkMPp1GmfrwRppZVGFS4V3f5Fsi9T5RMzhbJDvCqqUviWyof971jeZAc6Gwg1Q1hjmWDc8pKm",
  "key35": "463BDWVoMkb8R3RvYonmjuvocg9XdnbZTBddnFrZ1LFBoy7G9FLcd2C7hv3t416B1hAGJo9w5ggmXJt9CfpBi9Mt",
  "key36": "2h3aBxcG7sM5ix4C2NUGPMLy2Buza1FuB3zxESEwZdTTmFuHwakfaR1NFd95skBeYtKQ7nTXa81r8pMPfDfXWbU5",
  "key37": "5iB8Qp2LeA95bd62gZyvUTuBH53RX8HE4eKbcr3aT8Cjm96Yob7YtjtQoXDxParvy9SEirndZ3JXodcRDMsPHpmx",
  "key38": "2LNhkadqpF6id3s7rAKMa1nQCzUCmYFkBsePegoyXvk8j4kjnnYnxpsSqvm3NHxh9BhZwwDYW5GmmsU3VAvhaWj9",
  "key39": "35rS7w1PcB79CSKxmGA2t4JN4DHrEvg9o6wWRMxGjBuTfGbdYUGR4dwnRA7xTDPP7SmU1HjXYytzvraR1eFU1ZZE",
  "key40": "3oUQhhq9nEF2efC3LhwuLXgo6zrmeMZuHPYzgcoHC7i124J3BChsw6N5sKUxk281wen7JMS2GKiZ97fCrYXXC8tD",
  "key41": "4GwfmgTs5gFSNi8VWXzGnFnYPFvXGjnUYhtyTKWjo8zkEnq81Nc8sVhZ4dHR4zmPRsCnWGpDL4uGPTqVHKnTchHo",
  "key42": "5GkLwvxxgAa5MzrR3ntADrAPmVm3jgQui3px22ZyVDNvbtfwktz2YqFRAZhLSvqY9cURGkZuvPvEEQ5bEc7TXXfC",
  "key43": "49Tw1fTSj5vmACes7S7GwUrSfPjJfvzhdcpwyY9DeEsWorvN69YVdohMMK5p3zXVyocCYousg3o4KsWGpDpd9ZZT",
  "key44": "chffzMMz6e874g23k7FZ7yvD6yxjkCtApBuS9aExac4KKaEs4BCc1r1c4VdVFmTu7xKUE7DohicCUyKm4MGWrsX",
  "key45": "3q6jh1D9BwsMm11HVsfTm4rwuvUe8k5VcMeuU71BFcFbT8NPg1yWYZYthhxGz4tAd1K11Tp5j4aCzs7WxVF58J7x",
  "key46": "5EQ4zGDkhXbQyDhntdyQ1PZvszcchYV3e4JgocW2BYGxyhq1PhVWTijNp3pVyd7AV2PyqsfmwAoyjHGdx61sbLf6"
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
