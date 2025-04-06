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
    "5FDQfcba6x9tSNifkswAqkzFqucbAp12t3JNw2JAQKDNCGYRPTvbriifWL8ViiDS7TfPxVh7NQ97uWwkrPHKRgZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UxPHTZKeVPmgztHogUU5oVkgzmKupGMDry9jLEbTD3CGf1Ch2Q5xhZoiqhgFKsD3k41X9etLDsvs6un6uodk1rJ",
  "key1": "2iXgfwFMLAs8Kx4YpHcmUCqGHCCR3L2N4yPLRPwmRAjurk8D3waz815zStRg6pcGmKEpGTHV67oGNnVU5CEcqppF",
  "key2": "2vpXZEpkx8soo3UVqy1p5Y2K8x68nr5y5BFo81fGpmomNUyYCN8DLQJyqhmGuFfT5dBrzaQE5x6c2Rsq3cZhtYLB",
  "key3": "3kQZ6U5d9vZgwj4r33DSzm2NLXnp4xxHBA3gf7KdjmZxZ8Bb4XDTRPaBmbKrag5zb8Zxp86U5jkpjUFf3arSHr2M",
  "key4": "61ySJ3NKYmApjssoNAe6F5a5aLHynHDGpAiHUmTz4Ds9mjtWENeMLNbgC57PdrupEp6KUvYhyEV34dmTGVkM91Au",
  "key5": "54QWxpunA4Xf4iYjDZCRQHTaU9mA7vCNVUs6v3tTTS25JpfGeuctNZDEynToM9CTGnhgFTudi7Zqdmk6E9AY4bp1",
  "key6": "ajABxRgcptpHXmgKUGhfmEVHRbxbaWmxSYrZj1MSrbikitoSN3a1qqB7tNvDa4PGooosoyShiWLmYYP9HemM8NJ",
  "key7": "en41VnPNdQnad8NRLgLCYk3vZXeuzyjbEMfYr6PDRBpAeRw1NYaWQ847tFPotsVLvDboACqZq6hWBpvtQVK3hfC",
  "key8": "5SKd9km5WDRXChpL84m4wiPGo6w8HXKiLMJUNcAbcr98U19PbQav7yRtwcFCXf5dNEhDJbn8aD2sNKu6BggYj1Sk",
  "key9": "29Fv4JVzJBeTsngDvWPFXeod9ixxwSvyBsJCp3uQ2BipdKjr1jK7GTyWeNysys5ikb4Cn1NxQERZBAseRZwvW4Pv",
  "key10": "5H5EbJSqUZED98jwYkqBS6hrJ21RiLQyCferxFJP3i3r7YDfZ5doQEhWG7TYaqsjfPskCGH9EYtbwr5ePebmXyuR",
  "key11": "3PrCBmpgFLFcbaKxyrbWRdm4mqsTp6nQq2pC9i98LMgHn5MjDLeXghCBZUUbZ1hjAEqcC9ZHxPaz9y1xMLqmPNAQ",
  "key12": "2CkcdQSDj7wGTe7X33JXS6EQJbCJmW5hAHNxmWwuxD6iHq5i4gAvA5zMtJnwEnbS8Nzb48fCSjBAhMUBVExn16mC",
  "key13": "3EGjsyJnLCxGSY9KqNmMJTeXUgYRpDf7xnWeHpZuiTYYjNddszboCNdCk6QJe875UFrUXy6RdkTMzHr1a9479wL9",
  "key14": "4HB9YAVWYUuCuxJ9L25yn7wgLM9CqrqcDuy3NkzduFqbTBqF8xSJWPHAMrpDtqizxMC3wRuGUDcQmZMnhKbWV9Z7",
  "key15": "2AXgQsvaBBShsdEDwLEsgyosEcoGXfSVpcLi56r5RWCveDjYTBmciNyHN45dkMjvDo7sZCMJLdHnEh8K3ahPnzNW",
  "key16": "4C9WxbfxiJdxnc11R7KKcEgUqbRe3fMMvTCUBR75Jn4LJanpL3YBu2HhLetffGmDZz7hUqZJNMKjFjY56GpGfNv6",
  "key17": "44zLNStkmihBF6VFszvcYZm2Qu7zmNidi1asdo8gAy3FKYSiCuZom3PV7dNcRxWjBh7LDXZmSGXajmDVzKwTT2D",
  "key18": "4ZY75zqikY7vAiwfwHTuuvSQF5dK5VStbQ7p1cia16Kf2feU7inT8WUMUMhiKdRteMF5faxb83Riv4sJS7nbKe2K",
  "key19": "FuEb1osHR4Gd6gzqVZGKSdFQCFENJra3AXDb19kgdKYaUewfUCw53FbAkPTfyvWPEu2kg5FgZ8sLcZAyrT5WSdb",
  "key20": "48Yc8Nuku2cR4sCuhya2c5vaabfRavPDqLL5dzoL1DjEwsQBjCcUv7age4v4kGiE8oU9CxUpNMBD86rBTaJRnyKa",
  "key21": "5gWmTcNNZH1K3A9opbhDbHWGmJV4gJxfG89zPKqfBgF8xhrZrne85HmYandb2PgE5zDKM1eGLiP4aKDAvHyoFr9S",
  "key22": "4Vmczh3YuBfVxjekujvpYTqtoCuvcBM3nZJjphVNJp7GveBfq2Tf8oWKBkkAffEAcNZ22KVuiHzQ2vvr6TX9LXcs",
  "key23": "4AU6AVuZJ6HS123chZje6d4CvKfWCaFvZaTghsSXd5RuQ2Bmg5qqoPay93rtsj9X18oDANZwsvMfqFB3nXbEmw2t",
  "key24": "4jYQHcQKNdjqySF9TK9n3oyNHvSvHFJqbpRpiWz27jmtSLojPAYwXacS7o3qVXaprwpqo8WpYeU442uckD4toztu",
  "key25": "2fXzRcHZ5qkzDhtFRXEd6Q2Bn8ZxaS6HFxss7hkkJg8nYiJxv7uUHFuxZsAM3n2hBB6RMsxxXRak9Um1dycBCSSK",
  "key26": "5iQEzcEuM4Nxo6DwEZSEANAuN7KnjYGbMnhZY6PNLoYYeutnqagWeRLQSLC9peCQdDWdUfdVnJReHc63sRdHUWYJ",
  "key27": "4hYyu3g2oTctiv3Nup6t8B7UVu4RHTpfLCuSiYzKJnvkF3Lf4RFN8s9WiUdahed23etgPLSL8iWukPxv8ADrbe6Q",
  "key28": "5vba1UgpdukzYEnSc47yPTpRCUwWcnfw8kxrBm61Rdb2FmpJJRERDEd6r6HXjbPiRBzFFpz6PGNbj4JXqC54Fg1H",
  "key29": "2gXvjzrAh6VgHao1GSXaSRbu71kcUSHg7ptkHMAA48ZRwQ3LfJXF9uRSiqMkTu8CnxERGUJMtqArthKs2k4C86ix",
  "key30": "2YPJBVtc3UTiV8X5bndcVA3PYQUzELZAg4Yui6bt2JUX8W5GALsMqE4gdVHt7Gsvp5yuSWRYbbJrp2ijxui55Kra",
  "key31": "kZazumuDWhfeuAY9FJh1pvwdPKQq2AwqcWj3Vg9PQ82PpRV6PwMGuKaa9nTmJgc6RqUCgFfLRwF7fwLaBY23R3y"
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
