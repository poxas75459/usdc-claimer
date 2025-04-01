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
    "5MzDnMsF6v8Qyx8rBAvxgWb9u5x7dzpWTetkjZJcmu5ZTAtTxd969Lm5ApMukcKUvpfWetrPGKTXdHQtk5WYWrqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BptttFKG1zG8yNLBFbebvNvAoS7kYM8gpzSWGXayrVrKDKK9fKsAKvpr89X6JojRFr3aF39ybGtcUpNwnx2wRLV",
  "key1": "5QmvsTAPv98zf7tChfoTE4RNnBPNLkxfke5EvFRjZhobCZyq38ixCd49v46iyvpfrbK8s2LKS4HtK7gWi96tTuoU",
  "key2": "3RY6SufeNR41pVMdNmogv4ePiAgNLGkR1HktwaasetYHzy5HNA233qrBxe8qpBVzUpeqf5HdKvyRX111Kgn4sHhJ",
  "key3": "662vaPZutxEcGAdihiTwM8bDPczuhKHagKUKR8mWNaRwsTVgc5sZS93c5W6iKF6U2bFxLXv8rxrv1gn7VRwgm46",
  "key4": "THRHgzERQRoAdzhREYFh41RAnAQ3KZausdRJxtmEf188vC8A3wpYXY3P7MPuSaakTd9ZiAFfEaqC7RvLQu78agd",
  "key5": "2QTdy7K9AZYmCePgmUSapAt2cKHRjpWDXnxbH7hzeDRMQbyk4mAhuxnd5EfbCM6YaqRM26FNk9TbsuHQN8PgftF9",
  "key6": "3LpR7pyZG79yGxWLMJ7TZPWNQZWdCmWbRy5m4vKc2oACiU5Npc41Ut8KuQkimNaw8949YcUC4hSobgzMNSBXKQxZ",
  "key7": "269dV185bi7wUdh8jaeQH5rvsEfKQA8gDRjvjD7RgCpGqiJdZK8z6eKS4CQhGJ6DYKMKkadhMUe8A2aJ2PfonQmr",
  "key8": "3mrssqY5cjFUrUQsu7YfL5pWHoBn4zBQN7DJWadrKyigVfhbCk5zxqwkC5aZ8EgsQ7TsXMLu8douCAFkTcqeEHC5",
  "key9": "3gYA1dQz5jETKtwDgpZinUU5SkiU5KeKLaUcMoDVvs2qwkxisb1nNut25aUC51fKYfjz8Yv8SN4zob9CFdKDvwuD",
  "key10": "QSY6V6RxpKkFT7SsS9maNzhCkkXg9CSQrJv35gbBPT2T1BkzYbmyCKehLn4PxG6TtS8KrzJqFikPUcQmURrVFnh",
  "key11": "27g7x2zzahtVHBCSn3hc9Br5S7pC5ARxjNDr8XaSXrJhEMe5HQa2Skgj8bu67rJ7ZPW7Yb3QTk55zZTXtLvvkjQ7",
  "key12": "4o9fe9D5STmVDjqbPmKTAsmeYLKwp2UbFLdUxxg6BKyrjFGUCwAtPytJyuhGdsa15zUiBo5CDmG1xXRATHyFKvRc",
  "key13": "47aDvjZfYmwHm851nQaPBxZewN6iCPtNcVgnWHf1r2iWaDe69sVtbNB4e4eqCwb76xQcNNhvtJfoCsU3xiiK1b8i",
  "key14": "Js9g8k5eQomMoDW7QeZoTa5Gx3nMCuxYy2pmbsQDQUwKtSViwePcjmq5LNHkqnQqL6DtASRJyXUFvsrqCHPux5p",
  "key15": "5SaHPXWGB9XXr4JBeji8b9QvA6uf8q71E7Zoq9jUES51eqXfdxAJrKkJYReRj8A1L71sMqUooqKa61G2t3ocDxHG",
  "key16": "3aE5dc9PA87uFVf8Be2mvdCV6CZsvWVGbiWohKhZiMXrAe6kLCs9UWUnFaY7xU5DqAG9w7W6LyTr1cSUbpnhrSTW",
  "key17": "2b6Jv3KHLh3ThLvh57sy9cTAD8oyYyAggipv7nUprc4oz44fY6sbxjseXDi94mj8sZ9Q1SijroUWYrLq25J4cRpY",
  "key18": "2ij2Kj1vaVqXFSqQH3TTWWu5tr4rk5CjHyWk8DW1uC2EtXexQpEV256wAS7eAbUzQ7FWJ8dmCdpmaUjHrgM3LV6N",
  "key19": "2UZB26Xp4EwQJg696JNZSD5ZTPCEpuQTFKDH9XGz591sV5bHnfR2rN28Vpe2ur2yuDipYKFnUWTwtZ8M6dCGnycD",
  "key20": "4AETVXWVaAjuEkn71tuZ1U6Vtfk7s6yT65Fhoz3ozZ7cbV9KV6AD5wQjd5wBmi19iJuVHGnyJPLHhktJsSe4GQsS",
  "key21": "WqF7wryujw6GB5Rp1mxoezpk6GkFUeWioLCg6M2FV3vA5NBsSr7diutEoCttuXP3PFwsNBWU3bjrpDaVmK2JD87",
  "key22": "2xDn2n7nFQSUrvW99zw35QfJe8d81DDNHkWFf9WVzPCLv1uFxzXMzn2Zm2URm5qbVARQzQBQcw12tD3VvJveem9v",
  "key23": "48i5umS6gdiwcxAynwwXsNqPpekT9Wx7fjZWyuKFBQYj3MW3hTrnMdxyZtPNewMdAoa56KfcBm18r94EqF2zEAYt",
  "key24": "2oZQn7YW1TqCmu7H7cB1Msy63n1HUhuWSygG9Qt99KeKwfJSkCS3ufiqmUiHR7PbevdTSmyt6FiBCtyTgveyaTts",
  "key25": "4McNr1p8SyKtqykeGS6DYECHz5krKkLUp7a2vdCXAYbTrEPxRLLS8k4Xupkr6KLfYev1YU4kesbf9nwTKZ5FSA3A",
  "key26": "2ovndWGhqrjpPnQD4soZCw2sMPtZyaVZ7WN8dNhdXuQUPn6ZnfijhT44K7KfVbTtH2poHyCF441tUzhxZs8pJMoN",
  "key27": "4wRgZXktTP9uoqTma8UW6LZaVPGaS3xydCWdZpR3KiFaHZGvxdfzB7dFQ13fwVv1TqD5sAnmRnV1m7Z9oMcsYUY3",
  "key28": "hBNPweg41QDiMNbTsxyMtBqaJ76pj9aCQkZWCdXM46Q2b1jURfb61FfMm3vWCM4STcokSjyHWbYrFbbhp37wy33",
  "key29": "2QK7E6RBA3ZSMhc8S6dW2MJRDviUL5L6MEp5TsBS4utuT13Ccw3mHtb6sRPZoiHJUCb1BfUqb46jQhhztqvsVTB1",
  "key30": "4FkcFeDEerGLbJoZoNBfdDTd927qW8xgEwXbkyjypsYEjft2sEvh8NtBXUa8QaX1z9RphEJXhrzA2qhyE1TRcWnZ",
  "key31": "24cwBTNqG5dGVApvyZUXm29pPbpHn4iqU1PyiaGsgazFscWzNx7HAL6fGE53ug4jA11GxuNyCrqGucMj8XjL6vKV",
  "key32": "2dDDZohSPdL9xN2XFDtS1xYE6ziLG4qqaeNdj7yEBBrVDQ5xumB3CkAqMAXg1sHdaN2tA8G6wwYxEZaDfXnKmWBj",
  "key33": "3hcWspYGKyk2st7rbVGnDunM3LT8fkKJVG3C5TaCc93T8ZQStBvsUEeLHAarMXSkmDJ3PrsLgbRc1HkBofqyVZdH",
  "key34": "39XoTvozgw2vH2E3uH6Cuot7oDyoSz9eLCtf9yDveRLinDhPmZdy5UxbX4zv9cTwST7mJWfeQz45D2ykNL7CUheH",
  "key35": "3S4dMxzhuZ6TXBZj64xGUNHtFnyUdXA9RMHyAWbD3RMUNs33YNgoAYRDAPg7PNrs4USdQ4TZGNDwHWvifwK9So4t",
  "key36": "ZW7TWcuXXFSeux78DDmnrtgon8twbhKJEZ8hBcoaLkKYpVVCR5bUnkQHTv7sq6FoLNzdEce7whN8JCWZNQkWHSb",
  "key37": "3E6WhWNMnSx7DM9kPfPHaRj3vzhT7KetcjR4t4qufr6apnmUWoYbFtxzEzSiPr929nepHw2oQMCDSqUZtxB2B8Rf",
  "key38": "3vBWuHtL33CmgapoRFVyfhxZe1Wk1N52ZMEpRi18PZLke8Bsfqv27VyQsXs2My5LUhDUmJbQzKk9Pr9rYWnMZqEr",
  "key39": "4M2zmsPXxjjcqNH1vXc3uqcunXRXuzDqMTAoYZvDSpL5GiAHTKvfoKd5hEFMzGjJDa8Dn5dqcgatfBt5srkZvST1",
  "key40": "3QBs5PMbF9CCUv9EAZKbSJS9NFfz82EsWEYnG7S3D5RFzmxu1T6wSEJkrznhKLwoBAs98SsGF9MJ6uynHWYN6Jxz"
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
