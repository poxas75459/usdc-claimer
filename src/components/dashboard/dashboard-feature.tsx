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
    "4RFfPE5vSfvyq83xJxKKFxCc6tkk9Shwt12eUzJJZsgBwo8i3ArV4sKP2hFtaz51Ao46QVde8UpLVdK1hTsePNtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qKA53godr8pYyHxWkZTFPdKrc56gYhLybDSPu3HZ1KQtan3oThgGLM6ryFLSTB3xG3uo5rrhGeXFXfJgAmcg6K",
  "key1": "3PdS11byw5TYShDm6XoivosHMwvSjXuKkGtPeCwZpcxEJQJEKUMqdJKQz3SEdjJey4tpJ8HGAPQQaBJgFnXW3KhU",
  "key2": "45Wb7ZQNwjLXxjT6chcLerBwrJ4f2kfpVfKRqioKwcrPDM9m8hfe8mzVHT3nM4ZzX4dA2AFGKjVnP7kh2MxBJKAE",
  "key3": "K8h5geHFQhXp8ADCtTNzS5qpWxR4Mg7Ee8TJuNMvMdhX5YD6jKM2Wa5BEJneAcC3acaU83Z2TQRJLDfrqSvy5P6",
  "key4": "5AqJkwkeRMLbK4yGjYRHXYdK8uqwvjLjSDCaWR4qbQicuMzoxoDrsuJ3occSzUAAJ258wjMybDQEAaZnKPDhgByy",
  "key5": "3gzSrsY2hgYYDQ8EJavf4eqmkwoXxCVCYDx8QU8Sg8YpXRtin39oTb3HfmHkhozZirJDEzBaMVKBLCtMP3iVzD6m",
  "key6": "3TM1ZLHA8Wr8B4ZtbyQEWc1Sd1AwzbDYzLLDdHcxqK2FSoBeEcEFGpyQk7Au7PNTDQqVTXW3s6xULSJnjpgybXfm",
  "key7": "zpuQTAQ1aFstYfzdqEX33kQx4n2E5xd4PNnevQcS4svcgLF5YxN8ooMQCWEmgwG1G2ftG8hLygHnVT13Qdd6gqx",
  "key8": "3z3ZoygLDrJwpF5qWPF1CUbP2KfJtCicFR3mmvp8ghaPH226sgXxPKYw8jfWzFyPVcgidok5sGS6wHetsc8Tdys9",
  "key9": "4yNEKvE6AjwXZh2fV3WoNyWN9PGHfpwFoaePoHmL2JCfFVMda1LQuCcGDAf8f1388nwkjKBeNJzYFqLPPrU8q7cA",
  "key10": "2MxvKmD8bApg5kDMZBRobdzMEzcAU28q1aSZm1HhoHAWTihNQWMh2qRw5uyVro2VVh39Uoou52mi39cdHQ9EnqhM",
  "key11": "3bvYcH7kZpFNNXqubDVsie3erfvdk6P3rwJ62vTYVjXdexet9NuYYg45Jht8mNENqSmxaeQbX7xECXjVMNubPA8B",
  "key12": "61nvbtoEL36RcQGe98jD8dYpVLUUYKnS4ze9DnkQx1rdoA2x8TW4iGFv12kimxj7RmGtcT7xgLU3LXp77yDw7WDB",
  "key13": "5k7eVwWYSPSvxu3mbTcmYtjc7LXGkv1yEd5XvejaPUBzS62AXF2QE5cALE53r1bj83W4qZaEjr5ntNHSCcxKsQ9a",
  "key14": "G8rNnEk5UYnYzazL3HJ7VXWc5JZDWS1dwb3cfWuKHAkAAWCTNktMSJvo345yLP3hk7qDyCkxFeiC2YUANBm9wNU",
  "key15": "3nTx8z1kEJRstfrirkyaBDS4jhG19h4FtPgFWsmG9zePY2aUUQHiHUfQMuELAMMR8PxBnvbjWXYsNvWgzd7vAXje",
  "key16": "5u4L5Es9Vtxsfa4Tu8xyp5rmRBXenEbmpZG3244yBcJgJXPqKPHtNn9FQVK92hsZm5vDQ4SRC9UN4JvSCsNzmqtu",
  "key17": "3eatzVAGMrLeUd86eQz8eNfyGeYFhmf9f5fFyHE8BqUuWi5p6KGYLHZ5oCDNGsSkFJSpRTPTys1Zg6J2jz51oy1R",
  "key18": "4yeCpADJyS1smvbVKf8bqXeSLwdbUC5YUBFEcNPmkZQXk1T3zjgFu2vxZ1u4eXioSFyb2M2MRrXXNTVxTCNbHZtX",
  "key19": "3Fiubs2XLKhepDQV3CZNZPu5g4MT8VByWn653rTknbq1gKWeXL4xZF4sPm5io5vgFTFgCDmdbWFUfaUjyfTuv7zo",
  "key20": "2LheDzjbG4mHHFZ4AE82DkbpGBxMjP47W1QYGzdv3kJ3mfbniB8j3rwmCFzzub4oVKqRoMpgUDnobkyuG4jMc1fd",
  "key21": "d3Q8gncdHraHbbwDKFiV5S1hKX3Ag1u1d6oXF6aoaXyK29ccs3HxDZUvQ9ie5qKSe5xtvgfpvHPEkAmHYDazCH2",
  "key22": "4ccaSM61YD2yHp8n1yFrKiVSWiPUytLQEwiAGkmvzihM7yoVCS79HWhZFH5hsrFGMGdpRgEnBfRjtBfWdZNtmfPJ",
  "key23": "61jyvduRXNburW9d9cuzHRSZHYcpETFAroHiNWiRwQtC3A2F8NRGt9Dd88PZEjcE8QLF9GpMiHyrcUNhegjBCFLg",
  "key24": "5wkGa4RL3ypEaD8akKBYvDeDdrNUQDAHHEWYAkGGbJVCuTdLLmv7cWR6dKK6FKnTszCKpzg29S5VhJmWHzaWu5pE",
  "key25": "2Mqq7fjAazFaEzBHWy8aJipR3Ma4Whi71RFEEWUay1wJQb6eBtyZFWVS3wFeWiabdMSxuMzuyoA1YF9w3Was28JM",
  "key26": "4JkuHjpHj2VyTTfyDUyBJrtymRS5EcBMVWU4cuoDsHZq1ZdkLLYHuXEmrMRvs1qwYkmBGD67wY4PkPg3rJAJsgN",
  "key27": "4PQ1w8b4MP2z7ee9npgTcazSPCkXb3YQ51mCmKYovGzyFAitkf6iSJHF7eQirvaoQecURoGK6JMzb6cJoLikVUzx",
  "key28": "3JYQoMhpiC5cGJg5XHk5LVpQw8GkGUVYoPNEuKLPd6jUkxu53w5MduawRnrpmwMgcpqqNK12dHZRTxup2CaHpzEo",
  "key29": "M6U4UDFS7bLW3hfACVSEQB3GeDCdxVgqgwvyhbL6A1VEWaFUaNnvwWGzUHxuzMgkzjj8D7zpsVDnVH4yE7hWd77",
  "key30": "3qMDfACn923oWHH2DR87cZvNR6ufHmotgtKf6QtAyAvrC1QzRyyHvFiZv7XgjS6Y7xRXRbyifj4g9DGxeYgGqUje",
  "key31": "64unRLFWv84qKU9zzcgq7wqMd66LQTXoDMbvWEPMmSHpnS2TFGMfkZd5oGrLkJ2RvMjmqeu3cH9cax4UrRmUX8do",
  "key32": "3eXBsNBGFNMdjtTF8cziTNzJ25qMmwdtU5Mp2A1mWutv2YNe8qtk7Jwztmx5xhaRVTf2Agh2GnfX7eZx6c4MfExG",
  "key33": "3uZqYSH3FDJtz8SF5ThCzNQ52t5acaJU9nCCSZGFdajmV64uKcmEpZx3TUhcMJ2ckA6aNMUW2itDNjXJyYrjPzxq",
  "key34": "53kRxJpaKmkjWtNugUTgS6dWn38QzHqig7wJzejF3qyjm1Uep3y6CA45LA6gbkCwNJ6N7nxnDM4cJP3FDuLoZzy7",
  "key35": "kkG9QkE2PoER42ba9S8jdqag6RGRcqMu9v9cpbuoCapHW3WQB2V3a6TrT2KHi4y82Qi5Thuzr5F8xxPQzXxFpDp",
  "key36": "3MsR1B1zbjyT4iU3JrxGS8fKKLzGDaxxDP2X67TKMYUFRtahG2KS3vRGE5utVwqc6wgHiDJKEasVVJmLYB7PMP6a",
  "key37": "2x41jKYVb8XYwmxrMcJwT6C9k1HdipBNbrhb3TWKAdkaikDNq6dDQUB88ccfNfPJw4DoJC8PwvqtiUaEQLcQYPj9",
  "key38": "63LPAFdWMzkQWZg7SivZjYGnBTZ37THiB1SSgG987K9AZJBTsHSsNRe3GkaFbccoYR7Ybx6QuacLdvKE26M9gm5w"
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
