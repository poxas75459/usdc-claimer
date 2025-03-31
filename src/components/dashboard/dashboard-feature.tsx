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
    "4fvJb1GxsC8qcK3Lv1EJw7B3jkQejNf7CZz5sepV4EGN55m2rPrM2evtLkhQceLEsQUkfirmbAsTYWXG6b2G98Nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ckysAYRDgEKSs2ZHsmhEMcuRQJnRQpVA8van6h4nJgqF7N5K26VnMSLsMd4ahSseMoRpbHCeNK4BpafLjMK8jR",
  "key1": "nTqYcHmEkNcCfQXsXD1FHEqCKZFsdTjWRaYJGhnmv2M1YyRNVwCV1HDHxnZMBaNZwCkrt2d6gDgBezQrELsMeHU",
  "key2": "3TntH9ohrbUSHUFhqJw4C1xnxFHZjaZJDiUMsMutGuqiHtsu8QfnFoJJknvKq9J2TKjVxva7YneGo7URjy72pLRY",
  "key3": "4eBtRK8TjjLm1HEoKG1BPznNqbVCkE4SJBaukGvJ8pizPNTwUWSMQ9qD3iFCPeTSev8gJdyeq8xfkJrBTSMKBaME",
  "key4": "37cEAgBtAhgdc1YZ2W64eqXXmp79yANMLRLH2NC4YUaxGHvFWBgvTNEWv8JHECku79kgMr9XMoKXkeNiQNQzbCUu",
  "key5": "2XWmvS7pACzPu7jANQ6K6EBxVekBnWGJasmmFTU5Y1yNV95fsYvmVK64VRnNpYQMSrzdTgeYEj3Yp4haXTgwfbk5",
  "key6": "5tfYSeGGrVXtGrtUQmo54ADKBfVigF7rgeDb2s2sTruyC5d5SWLPxwUi5h1tZQwuqXVsdZLTYfPvSKVRStVJpDzC",
  "key7": "4ZFQwqgosKTgj9zaseDKg6gTiCGD9TDhhSGK7Pf93mrwtTweyKSdqMXDwKc9aEhY5TufPrxXPePDjQ1AUErGm1dy",
  "key8": "1hXedZ2Y6RNDYhF6qxzZR2D7MLLAswn8MwaHbhGivbKkYBxZ2mRunrCVAENLzxsQtXwthGaD9qkgUd39kZGJxkJ",
  "key9": "4W8vDx8tXkFSJ9cvVi9TxsikhTSkNogS23nbx2QizSndMmB4sJNKkpuqDXm7M4vGGVrCUd2ae88xKuFoELRjyMXZ",
  "key10": "3Uua7rg2MiEEQWd46FJfnqTXoNiFRJubEgD1WVAsLmceGMUWCTij7w3H4Lm9kbAGW9evTAVJGMEb28ekYbkVFVZy",
  "key11": "432EroEbNzr1KwNcxXxxZeHEswi7xkGDYCMcfozLaT4KwXsA5wWf4ZhGmpHhF6nLC33VCvFNrfRDUGm5tZkzyCwP",
  "key12": "zLM6hkETyQbzsLm4u1TX4uDAKBcxUYDukrunpN8sTose3REtawPwrPqYehFJX8YJXp3kAtkbrfV4E7sV9wxjX3M",
  "key13": "4ARrXyv3D3U83ApshseciyFuWQoRMc2qnfHQAMQF6By5zRo97sW499BnLoVbgkmkUAZPZUa3nUn8QzfSf6vMJ5ds",
  "key14": "3Ai16VXvMsqZjcA8RVFYK8oPyczfwieD6iDBYYER2ty9LK4fyzG5v4PuNLVTTvWpSQj9PiZuW6gHNLNoqWHvmwPm",
  "key15": "63kU74kCM2B8GaTTTKhfHvXoEnHRWHRJVdpKEMmscT2WCBEzE3cvWasNMh3ph2QmWSXEWgv7iajXu9nzufo1uW44",
  "key16": "3px2kaFdzeTaELtM6toamdPuvNe7S1gim3u2mYra1Bcx2H3wdmWYG5PUS8LSXQNpyZurKhrWXDQnKBHDKQNX7bFb",
  "key17": "2MeFE69oPG1fwiAfp6CcmGGsAtFeAzH3vuTRqsqjNDmwKMZPTknDNyY4sq6HuzzuLTxUu1t7rKpr6kk5YnvMtYWc",
  "key18": "hTmeLoVenWrhscx88YR5nxnKotqBFuVktJWPKMPmKj5PfA4uZ7KfJ52NbERtcECVxt9fB3iukK71xn1QvTMonT6",
  "key19": "5b9ihjeSP2NRsASygZC7PpECNjeqdqM22vpdq5NJ8n9ho8sMwVHk6XhjTtMLLzCVmkB6jRN8euVgoQEVfEt8qeAY",
  "key20": "4tQCn7mnYqJ4kEcqPTUb6EGRp2aJrMaoYv2i8tBgkSCs3CruLCmFGnYDnuaXHr3ghkgK6bnZQb41ozxfvHFu1tPZ",
  "key21": "3huvnG6X8cpwwu9V1gMSZAjsv4T7YC6zBR5m5Qnh7aW8L7Es3cYAM34unAbDMHXBVg4YAuajFUAqEUyiTDDEkFkn",
  "key22": "5tUkWrkSw9XgaMVzzmkR2P36xm4PegJ88QmWaipQwSvc3vdkHttXCry8Gvq2mvPwUGFwPCTxHdEXEXZbXA48g7WW",
  "key23": "3hAtAybwGyBGWYnfHDn4Fehs9KnCppGnwqzEzmAaeDVoU8rzSquykU6XDFzdYZRH43rurHiRqdQtGMLYBrt5EFWM",
  "key24": "3w7yEK47Gx7i6DreR8oWopcdegbbcCmmYMJka2tkkoReWTpBgdamCoGM3m8a8BbsoqEHjTxnxUnZKS6ubCNuq4W4",
  "key25": "5LYhBqxB1CPQ8VYwQe8CpUbYVVAp7LMBRKv7FUujJMb4gUpGjTveJKndQMSQkQnWdW8BavyCSg1odejtgWf6H93B",
  "key26": "iWPc5kcUVYBfmWkCbNaqR9wEgtngPWpAGdMD3rhijx81t29nx1q2kkNsuCkYQxdrBZdPYSVpmDCjqfGYwtmBkEh",
  "key27": "dtmrZdq8L3JJmGtjHk7Hjr1tkrBoWzNZQ7dMVZSjmgWSXSbGp9kbdnGx9oXBoe6Xtoj8HyxYFBeJhXYuLqCRw4x",
  "key28": "5Ka9ppHt8czMP8yjMhxF72FQcDeC1NFmpAczG1jN8GkJBTMeFG3m7RgZYs4LJsjDKiLSWYSdHTNyybyCNsNjYSZP",
  "key29": "5doL2exhHhz6bSA8xZm1fRDGckVr3zw5rzHfDicuzund55dMhR84jXyuNH5bKv4ErTfiLh3F1rRkVhPtHoRYCGWq",
  "key30": "5EistRrxy6XGm1RZgwurXQWoJs3YsGKZmYEThc9BG6PZWFjHwrP5Pv6WwXDvoUFFhwj9P1N2XQ92qmaCE56PcgBm",
  "key31": "4ZJEqUU6ufbHK13tQRB5dVYNTbTcPWRSy9HtdAicRe8ZA33jLLCN4gEUdZnhBiLVTaq9ownYX3ECNScaXpX6iTrg",
  "key32": "2Zj4Dkt5PkoNAZbhYKKBMBPnaQPjX1vKWthe9Et1DgBoam1L765dofeqKXWznHwVQPrTHucUffReFuDr56T2zfUX",
  "key33": "48akTAgRSW3K6tZLN8c8DTAawx5baxXmsxbpDao41nxd9Xa5WafWE6jAL1hCfLwQp56MLZeRaUWzERv2yzntXkoQ",
  "key34": "2VCo37fwnemdZnnZzXC2eNgysUnfq3TmADMQhWj4WAcYGbUqiPb52waNKxm4ANgm3iFJBD3N2GU6mQcgEZA9m5UF",
  "key35": "zyLh8tQGE8LM5TDm7hqFEwQuCGo3romMysxUj7gxCu2BeyRbXSoQu8XGf281HhfUtKqJnQQ182NUg57CxitbJf6",
  "key36": "2mw84tNi93z1gS62fgNHXDAmJysWTVgWbeJJMmjzuLC33TMYYLMJfEF3GCrS3brB92t8qcnSXtH5B6STbVMfH7XQ",
  "key37": "y1uYuAuCb7JknMvfrTScKCEwwZhZww6v1WXbGZPGQWiEEiTmL5d1eXAYaKnFoYMKJMB8ffHHLjQ2w577Mf3P3MP"
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
