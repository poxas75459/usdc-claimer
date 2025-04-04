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
    "b629WL2GvPF6QjVnE9zKW3VxrK1ZnQ5cn7pGv1E1NeJegDWFR2XG3TdLfEkeRg9QxcPH5C5vLbtWDSYhpmeTGpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mcuL7xeTXMm7P6yuoKucnVYMio5mm9ZTfTFoXetoybes5qsrbGGacQiAGiEUksZaE7SCoSZQ5TDmtWgPeCg3crA",
  "key1": "3twarN2qH8E65qeR7L7JzNPNgQccLj7TUJ92zu17Qsyik3PypkPWTR8S7uwZTSbCxPhAqLZBUqWpMd9AfXNcJxz3",
  "key2": "125BaFJuye4VgeLdcwnBmXzuERNtyoqugwXDzEguRfzZdKSvjDjqcqUc3u4rmSChsExjkE7gfvNzqSvBDtaFsHFt",
  "key3": "62YpfqustUaTpnzb1Rnk7Yjjeu1E8J3syYax4agfnvFTrSMrw1tmS84Ztica86K9NFcTJ1LpGV8jhDoJYW5Memvf",
  "key4": "2mubmWYPq5e9BudgABfaMTeGZeELacrEq1VqyKXYReaJ9wcazqQpEQjAJRzN84i7UjeDeP7jPaJnXjmGPdJx1Tdd",
  "key5": "3p6cEa9nNQEGASxw1XmnZ9365qrRBbB27VGQyDiQGpdo6M6aZwjb8VgYEF9zwMBQD2wwtPxuc3CCXakpaBd696mn",
  "key6": "bMEcJicDNB4kZTRsPuHUs3dqQ8vzfmDZ327mZJRgWGQqmAxSWWSdSNVFxn3jWVod8LzVBPbCuyXZGRmyBpCaSKY",
  "key7": "2KHCPUJaBdg4rHAbBJdF1SAMRjinPQaKrutSy5mYNg7K1vWTBB5hgvd2GJKkdQ5HzKzZFxMvnpJTnEjvVrZAdBgR",
  "key8": "3nMsMoV7Fi4BCpsHtAP6TLvbGDJ4t9UxF9TQL5tt18kVGUpPuvdLKqhCpWKGEPFfYo1q6EBvXFZcaCy6F3JmwEEr",
  "key9": "2UHibxwqarUN8bV8QmtHVMvmzqGTYUxioqdab4rPjU5tu1xyqjSt8vAEksTZFUn1JzSDqvkN4qV83EZv6RD3H9nL",
  "key10": "2waSk1XWqELvsKXaJJDSdsDvjaMJ8UuAu3tjFGjGsrq3vYTfCz3kL3Jw5ZAw7v7z9zPKW7vueZ6fGJ2exbGYYfwt",
  "key11": "22123onMC51Ws62noXhMxNsYYKaNRXCSabGwJU6pxSXEbAfKQqZ6GSNbBWF6DcYST4YujCNym1niX5Db3xqhjEUo",
  "key12": "N4prV1moP1U1N2VJFQxt54h3kTf1mEpzNuWmyX3dA8QNbEyoohnFdywXjkua6phJcprGWBRFqkGApxGKfsorDXV",
  "key13": "4y4aEnNhvzJDcXpodioqKQAytarFpJWKszZwgKXaiHQuEBtYphSVLzEhrCmCLA8S768Gf8r5YbNpVKsWf4YYXFUJ",
  "key14": "4AdqGuew8z6YaypuJEbtGdbLY9suD64g3ySuTASFfEceR14PviJG7hVHxXzm9hxt2k1i7GVSM5mLPneQ457yUkDU",
  "key15": "5TeV8uYLXE6VLLJbgoSLrbvauh55UUviUQPrt5xPSiDaaUdqmPMQg9QbeaE7mB8HnzVfCNEhmC1oVebdaxsPYJh4",
  "key16": "5jYi9FHBMGz16LZ4oxiWWX7p7kQaPBAJfqJvxwQd3A3XDjoMnWX8vhPhFaQiU3jh8yGkR3cHRmz19aVJMLohfGF3",
  "key17": "DEBygJBHTeNU9qmrtkyaiPJv2wzGTZANieMGddBqHMg8RbnKX1Uvvis8YdRyCouhMUfKv1ioG13DmjPRJtAPuh5",
  "key18": "MDmgLk2Uu3nNBFpMJdqw7NpCoJYZF6i2pVGodQ2REU8FfJJQdGnQ8g9ofN8Zdpn68EL6ssri3eMsbyQtGvF8qNU",
  "key19": "5jfTnWQQpzKzTJG9rCYvcNai5aBc3GLj3GQgHE9GL2Dij3CDcYUZQU7QBLJkBbfCmDX4vCUnK3HnhvgYVGcix72j",
  "key20": "dCTvJvf5Rw2cUAJnjMfQLjwQakwaWH3ZnvLhp19FkiMz5mtCBM1ymiX5pmwAHZMVtxiVS6Y8WGNVufSBrk6UddM",
  "key21": "3tsfJjhYuXzQhp64UVpTWkAMhgfrXaE3vaNEwGCHLA47eJfV5fwxTZK744JCzG6qsSASnenmABmRGvKafpTPpBmg",
  "key22": "3WSPuZJNZTXamEQZNdffpQn4ETQCW2p4qVKjBndESCyiNkAVwMa5euwqAoMX6Krsm3VKsuv4Yx1BnzDRoSvFFypU",
  "key23": "g9URCsBVTznD6qXK6U9gL4oEQeXZrLgY7yRK5ePRt7oEz26Yvfh8ewDar8pUQviv29XEuzZTrbwbchsNfHEG4nt",
  "key24": "5gqBQ3SatksK7nHxtKCJH1aHK3YkKuKBibjgFqyeTr1nYAxJZrdCLA1WnfhFyZdMvgc2GiuJKo29fGEcwvyKwyUf",
  "key25": "2Ymkr6Dz7qwozMTUSLMYEQmg59qsAGLdyrUoWCoQVxpy2MHgFrZZvevxryZqRRyJxeDVHSKqZhMvPoR7VQsnN5v8",
  "key26": "XYL4jSRedYEj5zeGWVjULyW5fYLmcTnBx6fQTKVFDCN6fGUpAKBJuavyuWxV8iwMbywFMaGaAmbadSVrg1zuwoM",
  "key27": "4nG8SxpG43YZdxFP23ezgN6VAoHRWZD26BLuEKqicGA24AN6Y2DUpvgeLvnbrwTpaDtnNcbQ4MGZyo2ZkLVdmXqi",
  "key28": "7FHMDhDmQJriiYRdgKZnou31ZLxdweuq8yjW9veU7Vqbke8bNraGSi7x8LHfa7triJ9j1X3HRp6hTqiurWaSwNN",
  "key29": "aMXfjy7DHonMKbRYMLexVHiCQdaTpcZnErPAY1bd3e7MNkJDMPutEe7KYiVqMqj7fuMN5oyxgvHqyQcBvi9CfxG",
  "key30": "2aJLKbYTiFkf9y9igauaqsUSc49ptmidQuGAXP3CabztqP9vbGZifcvZoDozpsBLoxJEFwekHM5hbURWQxR74SX6",
  "key31": "2enD7zSPN9qdg4oUA4wDEyFApmLfpvJzRDArVTS8yUKhbbrBq67kn7bwLUpyFnDUpqprS7eX5LymudWw3Nf4JQzY",
  "key32": "4FJUngnMV194n6fwmWNLs6ZS55WfkacnuMKpif6eN2QxexytHA4kY4aKJP2CGnnKCGPN4YJragqG57oc1pX4W5aW",
  "key33": "3oq9eQ2GoG9AobkjarHFHw816fXecVpnRGfvSitrpYBsXWu54dEQgFAmqMVJUPsqJdRNfD8A3m2BNwTaHxrERe3E",
  "key34": "4QXfnyhqUcwHyg1sMqNzu5drGS3k12VRQMEtmsQQ7BTBYf7GtrTJAvzetgCNSMmQFfoPpCLtUEQWVgM7igX4doWJ",
  "key35": "4KoRXYg78UvfZnWFctCp5fPk2otiSG3r8EW1ScNXLVEnAxX1Sj3G1Y8R1bi6DvDA3AvS2uuD199kujRyfGK6YXrU",
  "key36": "2nyx8geR3Rg5Asu1wdUWKxAHTtoBtqZbtphGUWPrp3MkF6QnkNJFg7Bi6wA1dmRX1sYWf8Ze48WQ2gb5nkUsVt2Y"
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
