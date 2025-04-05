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
    "3JH7epakWpm31PTtZ9wPJW6Y8oeEinN3nSe4spSKRUwmJPhvZnW16x7bXraanjMNkKx1DDMzQLJTvMbRFZ8sFfsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XUR3pVzNFpzPPCe3N8zxHSvE2EPtncWSRNFtL9ReUv3kUszmHr9zrSVFrUxbbiQeq1fEYDHFEVxkqYXtP4jD6Nr",
  "key1": "58rzBWsQYp2Er9xAAswkHxaDiNLVFxTHxyoQTKbdjVag49fBtKkEwVnrqyzVMFCvYV38bPphX8izYDUGcQLG6Cbw",
  "key2": "3mHvkdKFtEHaRUsykqCagESSnK5Dz5gdSxLJTxG16x5Vkiiw1eYxo3wSAvtZonjCsVFSuxdqAJ2KHkkBk1UaTkby",
  "key3": "sviWcwSCbu8qf3Rdp7k1XFCHhhmbxqGFeTKpXG1h1mvUjF4T4BzdzgaUraVPxdE1Yov8NwuS2ZAbfUr8e9smGam",
  "key4": "2u4iAQ4oEyxnWqDPEH12qhYCPiiowJzQ4zR8KN7XyLfCn37XC4W8U1o6GgGo2iF7TG3rLh5H3N9PZs7RVLmKYQqN",
  "key5": "27inY5c4XLTLRXY688GF377EMbWtdFtHSbVgzmhfB438U2ES5afXjKsvFiPg5GNytSoaTShPNYwKA6UDgoTUHDH1",
  "key6": "5GLsie3YwZw7SLrqPVNonraMpuG8uZMjjBXeBHgRcHsTkVX3cmivn9GrpicBNykRrTEP2JgMNxLF77Yv23QWBFAb",
  "key7": "4NpEq8vqBHFF2V842ayzkq5R7df8Nk6Ww1Cm4yUV4GmB3FEhhPRf1mrc3t9ow6fEY2fVaV4BdNxemXX4cyVcL9Vf",
  "key8": "2DWT2UXe1T3Gt9GsvsfatZGgwEagQVzFRokYPVEL7Dx1ZC42wRu3RaXKWcWHFNK4MgBTBmBMdTEfvFsFfW5jLDNU",
  "key9": "sx7kSWLJTsUm953EaiTkrCz5EJiUT4xujcfSV22Wo3ZPb91iYEKHeNP71UbH6SNa42ULTVEk1Jb6TncaxBc3j48",
  "key10": "2EmhDGM55wtdW9qBtAzKR5nCmnTjneFEmxCe5pTUReWzgqMi2crRuqjpiLS9fUJrBe35hSRdtRrBCsoc2fSrbrLR",
  "key11": "33fMZAyeyVbBKjRW8kMXppgMaDwVCNAYYwKGofyXDnG37G4PVqeLYTGJkSwhnrxqqnjZnud147j3RJkP3fCqxhrb",
  "key12": "3gPgRV7BWaS76HV3ZSqYyFqboSpaqo51GWGC2V71zLyJgfRkZ9tNM42uB18E77vFn4CoD8JSpFg9F4HEaSPnFmwH",
  "key13": "63TWZJUCJjvdy78zBE8tTCdexCJj3GUSnsgLJvzgE1negU7Fh91eRc5rsf1Z8yvpf37FCntzMH5DtnonhNiNkWNX",
  "key14": "5RiFiv4sARJzgs5W5FbgXBYpQygL1ABmurfB1PVrjFevTpjVggQ4rqyi2e67bWjGCvmpxw82XYmi9k5mfyWtMSMV",
  "key15": "4zyusGVLSRcCADjfsjwS88wFa6Pc2kfzWtJjxu8NntKveApCYJur376LKKMwB7878HtWhy5k8FjmAPwxGafGAVjK",
  "key16": "yrD897dcnbX42mh7LRkkptrsz785xohQhGnmZf6ChPUATR2cADcA9CdGu16C2j1BN1mRA4XR4cmnuibgz28zav4",
  "key17": "5ZpQgg5KV3RJ7pnuRTjg5JDdByrbVXSDZuYyLy3pYqY5CHTdQsBsrp9HkAnDXg3gP4TB7sNBe1qX9VN7sa3WdygE",
  "key18": "57qDU5DQJZvy4oyWVrFjUr6fKnvZPf1DKv5vFHxYF8CFJHPGVGgCjaLxbGdfUNDpysFWJWd9BNHKEz8gzPkBjBD7",
  "key19": "3ttierBcbCzunoR82U6bgvHj5fFtkMi8YZnvJPsHCWedwdxJ78E13RDqgyEd7vtHMki1gHqHpBFisZdC8276gkEF",
  "key20": "2sZ1T9ZgntrMKsQ7YChtypkAt4CR59nyyLJ5mfPMUGGhEEfEJPJNHAptqNnpPWUHZrcbjxxb8DRH5bGt9g59U5bb",
  "key21": "4vsCrB9daAepur9ZfryQKrNNmq57zXhKgWDVexxQSmaPhs72HdbG8mfoYqDt9jeYBh5QXbXoKyKE4ZX5cLCe28k7",
  "key22": "Yhyt7VwvESsWDfMDYBFAQrUhKVJXECN1uRe66DB7WsAU8eYPrVugpRAMn5cgBgEz4wNqc7vAc83mzxxk1hjcTME",
  "key23": "4Mx4mt5wZ8JQez9wJoLHtdXWYXHPVqdW5mYJZ3vnF9spZERK1mCjYhsMiQZhcRizbYPw7kYR1BFttmXEoCHnByVJ",
  "key24": "5XoMfT9sih73h9nBE6yhh9C6uMnLiDsm4KzCddzLyX8pKDvn7hYhySTDFej9tD5FCNgT4dzfE8TwHMxsuVsWYNa7",
  "key25": "3PRzCV5egyEb2pt45x3Bm5SsGHrS6K56VsCd7zHNy5U9vVxGYErxeAdYTZNZNTH9Hs19hGfRTgP7jceajSPbwoVo",
  "key26": "24zhMLiJJ4XHAzqaKcvcKQVd2aYUT3uD5d97kFqgV9gP6C3XGN5ewoG9iV9ftoht2BGRVocmwHwSpR2C5TayPWRm",
  "key27": "3ykmHk7XdGYgRw9cZSfeTmDGnddxwNu2bTPUVKcv4Xnc9SWeGpGjC1fvwaXXjBEwteynThiYfuNhqKCMUwZEzemE",
  "key28": "598zykxB2k7ri786tYyEjExoXyGyFwwjThCiyA4uBcym6Nu9Y11wM487fYPLFTauJ2ofcvnnxpA5Sq3wGF7a7p3C",
  "key29": "fdJgk3C8DEgteucVa4MARPhFKQeGXqBL25UHhTrQVBSe3opVbPRYPDEMEUzN22iJ83fSA4G8pb77nxvhxTzhpnf",
  "key30": "5d14FzCAaouv6kepyEZ3kZP3bRifBGPjpLDi5hy5CTSdn2bt9RXDQwcG3wgzvieWc7AkCTkMLwQwSW4ZXq4Kw1Qu",
  "key31": "5vtUQsbRreoaNQZrk4nWBdetiXWr8kxmptrsCF7NrDwLM8P1DV5V1BZ2AT5u8YCmXg9ZpyNfXjfPehB4N1P7fhg2",
  "key32": "3Sjh9YnZKNjy2zKttzqHQT6EL2UskAaB2ceDfGvsYRKZNbLELZddUnywG4JuZ6TnvnHpX8jMbcPmRdwrWBxTPU3i",
  "key33": "2dUGtRYgHsDAcJoeeKtu67A7d5Z7wGhffziiiJjuPeVwdXWPgD4g2v4YqqZBX6BdW1Q8NLFsU2NzRB8quAVWxseD",
  "key34": "2CnKxiDfvknxBWf6qLgJwtSRaqbSfNm1gGwLqm36fC8YbJx4cUUaBbcHmGCRzxzPe91z5z2ZBNzpRQxf1ZtsBbvK",
  "key35": "4MQSBek1NAJSbfz56gZETmzvNoVfimTdB4m5aNupFCHpktNooVJELg4Wf7UdsQ4SRuaPiMgR8WHU7xRbmwFCcXWW",
  "key36": "57mqMtY6ve2ksAvzvz3m1NrC7nmQ7vES1CykXjS5ycsYty4dbvoxfqqP3nnfez7NqeHQxvSKGmZkQULYp7QDqGjb"
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
