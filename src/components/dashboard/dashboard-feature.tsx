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
    "31hgKv3hALSYqMCpY59ZWne1pwVA6PhUsA2D4NGEH2cbD4AEgpRBw38NGePJrjBQv3unZ1g6gy8H4X1pJpF9z2qH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z2VRNSuTF5Spr4tTD72T2pE4furCU8WuYoTtZE4Xu9AEJs5ojAVLAgX6Ps6PJT6WMDZ5HpRRwA4LLMgbN9fL3zU",
  "key1": "3QHYeU5Mg9VAz9WvcFtPvL857ajtRyvMa3RtZmwDrsWTgVi1PmVdbexYCBULtc25n3yrvZbEKPzVj7CZTV9rirRh",
  "key2": "62CiNbWUSuEtYqX4fGoVfyGqAQ12NULBvnSXB37S8X8ihasPGkD33JgaLsjz6wNsKFed4FbaVM6djQMkawHEZwwr",
  "key3": "5rp83ojNLgQ86F66nHfvZRLuhfHKpSjzo4TAHqyKxYh6GMAQ3fq7jTBLe3n5H3muKBhwST2BafPsxvpPE4F4xn63",
  "key4": "2E857wsTGDvLxGCoTRrMomNf6YBntES4bpLkzNxFsJ2huNinkQF2kPBUxcoa5jMW5sUXZyhd1qbXiLx5cQKUWjaR",
  "key5": "adpHMoCwQtX29df9YKBLXXNpFtjkEcagwjoDofbtXnFsmuyqFuT55155BvaRwr8NUUirmcRme9ioRgNhcEydS8q",
  "key6": "31P53C8ZhhfJUAAYX3BXQ9AV29nP935wJ52q1Rgi639etffkX1KZxMDBg13SrYBh9eZeaKSJKiNnpDocrT9bjavy",
  "key7": "2jmK8jnvgV3FJzeyaaYvSrWWR988zHyLmVDQW9AjKAxTd4SgUfeG36KU4KRv1fHqxxJBSZsh5vdGuoCTTMK9KDV",
  "key8": "5C7MrS4yru6wstpqbeCLYZUygHLdiFoBUtwDnAtd2bRvnxwWC7q8yWySgwuRvSeJJvwXcPjJy9961v9bj9ryNL48",
  "key9": "3NEfh99zXvPTd84dR4mvGnuVsWghmDAVTmZ19EpKatDihh8pj7PhEyTXQFSLiF5fpo2ZVDCPvFnngjKWfRD61xHS",
  "key10": "2xb46J6qiMqB6CJcWzkoY8pKv4zxRFUZU9d8quuD9EcvprQn1JcML5bnuPiXkCGWUh1DEgB6aZyjaPxyfmRgdvVx",
  "key11": "2KCwjjcjX9MhYsDujgc35wdguYiuLWWPe34ajT4XSyVFJxShf5Txi5xXz1ytzzJ6c6LaBCZFKK3WPqp2oqf7qerE",
  "key12": "3YCJ5923hD3pxe3x7X2xDf6P2wZfxPtbbw9RWbMx4m2u2UaRctpKJWe8n4tvZBjf3tSxwi1VjY7vfxs9JjXdRCoC",
  "key13": "2EGFQgSSwvg6zZrJNYsX4VaULQbPubTaBUtzVdXbrCeN21nWqGiFhVBNmJM52x7zmFLgUuTrsGqop45GiQTsVRfs",
  "key14": "Sr24zEvEeGdrfNHRqAcLc94GE1RfcLRVMdyK7sWSkuXSovJ4YsNUAbXHdRLxwyRifqqm4397iLZRmZr3z4YU67d",
  "key15": "51WUxPNq1QrZNyqDwJj3a2eP1EjsqBKjkoFVUs1ouTFYpu2QEHtiNjYVMjAQNXkQSAvf2yMnfkGxW4ZxKkztZXja",
  "key16": "Lj6DWAY4fa1qRSSGcdc1Rvr4EpTpN8QSwZmP7tXfFtNPLQt5ZrgoyY9vYzthMaW1bH9rfBkRvwvw1Jqd5B5Jnho",
  "key17": "4F9gf6n2DjfzRHnEBDA7ZMizzVp61qxfwjFMvs2XEWA4rvkN1WxgKZJ1j42px4VmhjWijYqxip68EwMyGvKEQzNe",
  "key18": "2hhzfcW82NnCP6hb5GwZVgoPZwSRk8Yvd6EzsuGCxj6iCSCej7WjjGZK1jUZw58Zbng6KJEpFueXi3VDov9Z1cEL",
  "key19": "tkx8jmqExR4PpT56TxKtJp47psCyAJX2W9tQdZPyGY1aasEznnATy9X9MMU5mwwLkD35Wv4GQvDQfqtWyPBJVsd",
  "key20": "59uqWKSAshPB9ybTs7srKQeyS5EGE9G4NvV7x21eNahtQCWcsVKFuJE2N9hRfQ7PKcowdgzrFkfD39KKq2gD6ieY",
  "key21": "5RWsz5eJDMjKkhfsZnhMVNTEeSzn8AEhsSpxugsKLC9fpBzQC4fi99e3mPPBedV3yXPTmbfWJs6UdsVpSgYLVxWK",
  "key22": "3W7NidAhvAHA2mFLd95AzrR58rdSg4ao7LG1XR8fwpLAxdwiFWmkP9hzfxVR6qs2N285Hr9h8ttHNNMuymJdxpHX",
  "key23": "2SWrMRe8nqe4UTX3tAxVq4YmbwwJhswBUHpoBBuAqdoCWV94rmWqbMTEsU2UYjmMe9rSGaAajUxZrKkTWBTArUPh",
  "key24": "523YbNKeRRshdSnCPbXi8Z6htCMWFi1UqKz4MYA8Pv4xcZDTZh8ZuBgTdCChjLCVdijrm3412jt9HUiG3FkuJEJT",
  "key25": "436MuEgrvB7f3fKBFZkZP3DLwZMHJYWyUevopgqRuwD5AdRw4AZXUCzCFZB3AU9jWYunB72F53wRnB3GzCYgrgXV",
  "key26": "XaaP3e8pbcifHwX4PgqDsDvVAZg2KmxvZa2xLqi4MzETrTD9LE4bpwbwvV65Z4pNd7M5Fi21kQNFwyvogy8NWYH",
  "key27": "JvdosDTrWk5vqBDF4mXAFtJmNHv7UqEzQe3jcg4SkrytaQuYzHjkVddfDohdketsbDeUVvAnMdk8S6NKz7fXBVM",
  "key28": "35fytUAXE5qU4RiQZByVWWFs1zX1eVPysPNi4usZBD7A3t9M8kHhkJS3WcGD7P1dzdbjVyiTutW2jLy1QHsxpLbK"
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
