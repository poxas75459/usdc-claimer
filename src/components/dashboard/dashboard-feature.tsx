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
    "4gU51PnbvaidncAr5apfHfeKTSEYBDWTxDbCTLipb3YhNqWqdrn6NzBtVsLYTsj2RsjveCSzHxqe817gs9htRW37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N2U3XBvkmY9k1o5PTcd2i6WeUboUo79wLK3Rsej4ejrteTFMiStUKgy9SvwuCRfUCLfBLb2kja5pL5m6be27Ts3",
  "key1": "3kLM1eBBTKtdGCDvNPTVm3phsqocfDsWErnLo5sgEXcEEAQuFYPdtwkyZZJFuXguXKKEYizXz3sWLZifc15wwGHj",
  "key2": "PCDfs1dXSLEk74nEeWvF2acuWEgg1oqe9dj9Mc7KCHVmvsBcTcFDUQshDeHqauD3p6mPVxmKShFWybhkATrDKMT",
  "key3": "45sfA173v7R4GfKwpHhsJVvPQw8y3vbkscxzT3R1LDguBjhz2Pmca5YZUSByX86jgf1gxbEvBtvnVpkPPpuLfB4a",
  "key4": "Y8VZ6tvWxeuN1o8YFR3ht2vMZyX5kQdFVJKiQN8nNv4RcqmECQCrgdJMV2NNmc6pxm3wqJzj67VJXUfNWEQLFUz",
  "key5": "4oDDopDKHnRFA29knDmjeGmh8DBjrwKFH9u7DPDyATizEvMZ1KpAioVHAr4t5peB9t3N3oAn3YBPkc63rNkXeLv6",
  "key6": "gvqTcXuPofRJLQzuGS8uxpJykU7oFrgYoc8Lsirm33hDpxcaCC38MQHtvdy7MybzRLkjHfSn1eMhUsV5gJdt531",
  "key7": "2hMxPQYPiyzuKg3QnMUo2BytvQ7XEryZ5kvKderhX5AzwYktp4gUVBk24BCTY51ncFhmt3BhQGRopNhDK1u56Uqs",
  "key8": "2xjXEK84LaruP6nZpn4vbS9KsAXdUQb9aWhQMqJLdw5kn3DTobVCjrDRzU2gVg8XhVM4tFr3iQ9zj3T71vFg5CwC",
  "key9": "5LxkMwH7ewtJKvqXDJEz45xVe5d6iES4qRHr2mNiaSHs5EmR82ekirjSBQcauNgCQEfobfnEPaVqjgNoG2fQ8S8t",
  "key10": "3wxcxK4QdGqj3XyRQpGtEU5BjD9w17YRHrv8aCzXUvWbQTVKSf8XLNv3k61KX4EmX6s8CGxkkB2YXrtqECxhVLJu",
  "key11": "5739fn9s6ic9yRHKAAEnxDpuG9UZiTaDeNdTjDiNGMZCBnpAtqAgBq9sNeAtDHrFa6GTakqdvCTdoGRuK7zL4cRK",
  "key12": "3W6qKSWky1eGcoBMX9zAbRNyZY12jizcm228yqD42kLNNVis5PmoNu9z3AnifDL6PR3t9dfi3cpdxBFvxKFe64u7",
  "key13": "5wzEVct5zsh2tZesTascA1TmWJ4U23cfoDNYUyJmrXqvPRUcBKvtEZeSA5cAQQEGmTkxNmyMqDPT4h3zTkw9hD9G",
  "key14": "2x6iQhZ6iQAGviQkWgdxsyUuSxF4yxGKuMujPBGHR7Cd3WzDZ4W7PSvW5ex3GwtThResuPp6fr9Xq2534dPXqLG",
  "key15": "569pwiimXamSAZeUCzF64DfpjtcLKpcSm5DWKSZRXYYDLUbKa28nFaxS2x15Q4mrTtmTpGXmi6SGxdMCHGZtKSYs",
  "key16": "4zumrsRFP3emNWBoN2dAajwEFvBYmzpHSSRrTnPebEiktYmexmetG3V7ckz23qHsnxcqhgrBwV9snpSvU4PrfBPG",
  "key17": "5AEo7edYj7vA7VED4LEgspduFUydjWx1ktrp29UJrnu3WT7P2Dk26KTMgQSeJyUPZtYx8Ve9pnot5g7qH4ASFPr4",
  "key18": "3ihu5Xma2NrTpXskpkhHidrkfHA6ZocStDtjjsVRHwYp62KGbMVwMqiKPN4r1aBtLfdNZBqFsBVNY7dzVK3Veaqe",
  "key19": "62WorjjHHkMaVcHN5EjVaRu3gR5ZBLtwuVwfEtU4wNqT82BtAHUKcpWG8y1Ew8kSSd2Xi8tVWDkrUXFkFUmAhA3d",
  "key20": "2Kj3s2YvHxuF7EdhQRCqpwfQMqur2NU3pZas63viph22oBZMzBFvL9FQtT97EfDuPnbYYUMDwJTBqM5YLNtSQpHE",
  "key21": "5gD2SchRRqSAVeUpEme6ezKmDfpXCRyR5Q8zV4Wnq5rYHTTpKer7gg2HeXeeG9rkv9EMq6Kgr13g2ZVdjXGAihvi",
  "key22": "3AJDS7r6TBYi3mHExvw9sGx2rx932M9MheoPtT9F6NoxkfbCRTG7bfEVEbzv37TaYmxPCpLCA2upDwh9tT35zyzF",
  "key23": "3Uu2j5EaP9pZZXZQM3uyv5kaLbzkEAruUG7CGGnc9AMbbuh3y8z53qgxCCh3yqZa7ngpanYnps6xGyuCzVYrp4Wg",
  "key24": "3hs718LoXFoLqrbpyeQi1WNCtiF8kKaCkaoG8yACiYxvXJtWRS2Aze8GXd6VMBWp2Mawkrzr9YVicL8Jmuq59t7y",
  "key25": "uuMf7YeueHWEMfLPCzSAio8wUJFhUxWnBJjymc3uaJAEHfS9NEDr7WbE2Ts4HPaEwT2sicACEqpQyAM2y2ZxY9p",
  "key26": "2d3gszQvEVd8WWRCrewivBUigo41f6TyqfSYSWKTZuhEdJEbxqouZRRXLGQgGkK2dQGC5Map2aWwNx2QgeH3waKX",
  "key27": "48BBiJedk93K8e8K5PVAhT2uowkd36JzK13b15Yk68uwh7ERDUzMU68tLta5ikf64KykKd2tUj9t1bQ87gtHDfd",
  "key28": "5BwLGvRPEcApiPw55JDQrRAZP4HRcEQvVWFzPyf7Gdjj3Ee55j6DsJprZnBh5kPeZVerfc1MBeWFz5aYNcAt7WKr",
  "key29": "2SWVL7GFLgezvBsvYwy2F7bGCotwbt7QkUfNLwNHzF6iEAj1cqJGJbV5unws3S8nCMAMi7VkwQaGfSA1L6bVvcF9",
  "key30": "42JprTeF98AqJJN2Lbw5BM44MA9FPRGPAZYXP96WFbjvBHbqYBcRXF9mMiNJYTgetH9sx9p3vrdYjnW4QRBk1CmD",
  "key31": "YmsENGZNGSRuAKmbkz8m2injYmgfcSvJEVxAe3xX9RjeKw2pMsTau2hrhvUPWyBQwZAR6A1pfDCZgyg14bNwxAS",
  "key32": "3pGN6UEMAvbnQb7cfrxETLSG8v5t89tvv4yuNLP9GJMNJkz5P3vf8d8cFwkrz92e7ypvmiL4e8VShUFYUaJ3sNnH",
  "key33": "4Cd5S2XvFjid9FKQH5srz3NeYtB7RcQ15Eoa8YkiRNuirPSd73VjJvjJkBUyC5tkJRZqndiSx2eSpQSB1LPRPTXK",
  "key34": "63eVkzEZ6b8L78ApPKzv62HSkc2tDqKXx4WWoaTZMrLWYLqmCUcLHNvKPPrCHGftTdHzZoLJ4HGswdXhHtYd8HvY",
  "key35": "4ocdrkeYmJGcuorHgCbQE3oXEyiVypErPDsT1sPfNGT3TY2VhngMw45ZTQUy2ZYVKhPaerbZSfz4rzZTdGXRobBR",
  "key36": "4GkBxPu4kCwH3KBpawuQWVkPXp3ubL28FEtTpjoBNKoBPyXvndWmH7LbVMB1emriBCwA2u3mGy8wUzjhRNR6kVBt",
  "key37": "328KAt1hG1NyxCGcx4S8NM3RZRwG9DPYEQFNabj6JDHmRCBuPviciBwAK8ib56CNqF4BQYSkyXU33KH8xzpdYcPM",
  "key38": "3SQjVWP8B6rvsm5YPZuXUQqJUPQEzSHkuYTGxnaANUmtQRHPfxxCnsxggPuj3cdNVmg3odyC1FXpXaUtonRVpET8"
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
