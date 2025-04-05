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
    "LrSvCU3JRGqgkA1Pn2rmp5ku6qE3g47iLkPoWiKbvmgV4PxhAPe8EyvSUC9ruvdEbgg4bZR9f7W4Jpi82N5iRmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pJzGr4XMxQbT8vva4jSLCCVvqeQ8RGHQdYtTqdjnhmWSYW6nvKtQRQ5qnU6hWDcQSiEGy2XEMrAaw9jBaaafvzr",
  "key1": "qbqL6WCPpYYJaet7wnvev5iZpdXnXhPWbvvEqfM8nKrPdDEPouNohG8nVFEpGUZNR2MvkYEjRbuySz7m3X88c3a",
  "key2": "q9MWpaehuAN3tDsvY3y3Z4v7v6CWHWpjjWYc2ayVDAe3RYmeFnysp9x1VyefbonNjVYRqoWKZD1m2QcXXLmuSJH",
  "key3": "5TerDUk8gJZ5S9H2fujg9A1ZFnSVDwHwGryH9hvqSF6qfeUHPkUh3NR8BQ5KE2uamPhXut94GHL4nDHiudu1VDxh",
  "key4": "4Qx4xC9msQ4FBYrRbNhHK2qvmHhaXaqdb8rF3WQtwTv68QrMKSH3xAXdQb1PmFWK81WtDscoJata3pQrdLy4TPHu",
  "key5": "2vTiLMVP9vE4DVA4s1UVZGEEyYqp948pv2ZnZzZsNuUW5JrvoseEPzVeVDg5JBf2iePZ7vBpNBgWSwy22JKujsT2",
  "key6": "NbESLKyCnbUiBMo4wYSHezQ63sYPR1SC5QqLiXVEdmXCPQAeoBAycjCW5wcLjtjgpooEvqocpMKeKbDfznCk7WD",
  "key7": "41JECfQWbed3wgPphjpJgfqWHgT8MxWtZkxAg5HYRh4fLSrJqRedGneKyKS6cgR7fzAWt6oo5fFKPh6TyuFyect4",
  "key8": "2w4pSvPyNsGXAwFS2gG2pCqRyvdZj4eJXu2Dxe5pNXcyKqKAyChbDUCZfVNwoQpA2tQhM7G7xKkdH5UZ4cYmGYDh",
  "key9": "365SSi3sx82za4VY2tYxJ1DwvjgVXsGSzSL2V8ZZJb2nqvJhNsZHFLtR1PmEJcUkqheeLCfBgMUX1W3AHVZp2REb",
  "key10": "35Lx8xT3svKUxxKPcpXD6yQZgh3FQPuV3wP2CGWAu8zV7N29jDnpKft4DU4Q9yAPPHQ5kwan12si1zLsjRpsNbS8",
  "key11": "3Xgfj82qYrDnmV4zmgKxWNe1QgQtbpKmdndVVj8fTLVngsUL5LUkZaqHKksEtPSbTtPSQMHGAzLJZqFyzBVz2G4B",
  "key12": "2VVzDpunVBCX8pGPcRTWxgJkYA8tEgcFERGrGKSUVaykDKMhvStDjU9LViFNnVSGTotPvhkESkFP4cC6kSDjL7cV",
  "key13": "45UmwMbjQK8aaPwgTepAKBpqyLCqjcz1tCCr5JtY8tm4sAJGHLmYKH3m762gpPZXpEsNKAwMUGHxbCueutUR6rTr",
  "key14": "5WyBeQsiigSWA1nDALfKMNekPTaBpqGuajyUoa9pD5V2uHPMDKJjEd7D43eLGzk3W2BFsmkTdoyMx4dLmEy3frPp",
  "key15": "3YVt2mtJGk4snKaCXw7CBX7xv7k5UestsQwfKqQeEcfbXKQZpxL1itPVJfYEnrQVDNgeTqb3ZgvVMXhrtpfxTBpa",
  "key16": "LxsauXapiY6Br8jEXq5zbFLu4Pi8Sa7w3ksRqBaDkQJMdiiTjRFEePmxyT7d4JeLsCBVLT6j8dPNJ62RcpZhMPV",
  "key17": "2tZG49nSYNafkFp8r31YMResvi1FRX41yyVFG423hcqy6deDeGcBNfs1hUerJgt983juXtEXBSbnMvrUHDNxhFvF",
  "key18": "4bzZiJBRFKKn4kJH8w1RZBvayQ5sBF8vwkABmcq2kpYcMdvFeFiKteZ6pjqfHHdMrm7gYH2jfCMM9FjWSUnRxfL9",
  "key19": "4AbMQS17uZf61gLm9Cws6rfZaQUe6qTvpLfeVhMZTSx6wJsVstz5tgVKzpQmsBmHMueQpEfn2JXkpnyBGPXNHMaL",
  "key20": "5kJowDu2UMEoJydnsgNn5KhQqLwtAPXAjY4Zfb6sP99UAvVrrMP2RMzvbAk8Ezm71QFYDXtQ6sege5PbL5DMawca",
  "key21": "3ECKTa8Va3yujw8rSb9EGXpecxSUFBQJA3NcBc8vDQb9X939d3vG9fNPMsb6tnXbQD76oGcRJzmxTm13Q6nTdrJw",
  "key22": "n4DA7UaihU3BpiKCfiuFmBvLySepTF9323CWcfF32PZwx4d1sfRL7WUfeKStpMWjkvxsnsAzeJcg9MKpLAEbxHo",
  "key23": "iuLTJoxZRRPQvx5B5EG8jjfk8WQfpRFGZGE4RWVnHRkxSu6ENikmSaDTEwZnPPABShDFeCqweXiFsJaaGJ7wgRA",
  "key24": "3FTpXJzoFcFSKC4Ed2LaBYfnmfPA389nwUtsmJ1YwvwvW8gynMXGpVPBonDLmq1v9fHRshpQLJmzyW6zBySR2A3q",
  "key25": "5oUGnUQj4RL2GiEgxw9NDoTcDLtjEcKg2DCBvon2FXRgxSrGaG4Ka2NNXsbddkYD8Xy1aHsH3QWLQ99rcwgf2Lji",
  "key26": "3W1TCr8vxvy2TgxmopP9cVKvfBUHuYLbniJG81mFWFQfvH29xzzCFURPsu9qSN7CKqoWSuHJ1ebTj7PpFnWWPASf",
  "key27": "q7YMFQTJgaCxVkq6YQ7ipZGUdHqVwyf6ZcM6kCBBUR44T2SZkeNHz4p9juwmEAxbBoqUJecC4aNKFrJuYqErnTS",
  "key28": "joJxAjUXz378xPC4xRgQWp5YaZkJcsTtW9FjJZn2whkZNdKQt4vb6sRkon1qo415uC31un7UQNtKRj28mF6rnuk",
  "key29": "3BMXD3UtcKSWhRHmjRK7MXUMUUvgzZE2n1bJ2sguvdyamWv3EkTR8a7qJ5dPSLokMSj1Kx2PnUAxLCDvL8UPBcTG",
  "key30": "3aDsepDYK1UbFH8MzVZeAdiv6FPEu9C8STUw8hFCvh8MNKmYtiuWkpe8vNpdYV5ojop3M9GRnVUgVDFowcMajUZy",
  "key31": "3hQdr452HiGyY4h9guBec2Zjxbbip4fhaiVcoMNNUGkj1oDfX5wdbr2CnqwaqGD7XrbyiyE5Trp9dkCKC11XMtPh"
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
