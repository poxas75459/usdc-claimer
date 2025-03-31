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
    "5sDkU3m4CvrSyGQ5AEynmbCH3r7oULcCma8JUQRrNgLYs729FvqmqB9hEVsQtVXvF8wHfL4NcXP9LZzLNQoRYE4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eKLS141L4uuiQ1u13pXk4RjZ3L2uSyK83f8AYWFduxjADfNuTPgQWf9g9qn3NfDa83rsVvorJwmLTAPPv43K95H",
  "key1": "5piViWfGVny3toLsSYVemxhGUJ8ADQn1yjNj8bJ4NbzWQdopRa1sbQk2GGbPizQKtfw6PBkfdU14x34er9eG9yba",
  "key2": "4QZPHn6Rthvnu9eAbyXtM81MNe1DsLwjUYkyR4odr3fTuvcM3iKg1iGjbxwTJcb5Cu3GSsHh2pByLRy2EXuAe7VY",
  "key3": "2ixAHZ79qZMSrUutWMze8oxR6L9BoSMe2CvQSAptdAZWXATouBVUrRpWKTDYUMay9rRcuX7GaPZN8yqyigFG1kjt",
  "key4": "2oWEXGiWLCJt1Z1QYxm6JCS8C4u2UeMKn2irzTZKdeP7zrg341WsVBZmA7SXwhm4w3ZBptLnzr9VJisXn25xryNE",
  "key5": "3cRsnZ7R6jYL8dxBFxgc54FmP8F5irDxgsoSSiC4bKSVfr4Ga2JrS3i4jdUR9Ac55WBacJUFNHNqWKGAUPTDbiUr",
  "key6": "5y7LbCmmbxpxvVbHyFheL2wCcySDksxJ7VtbtdKLBFiTw37ND7R1tMDy5rkPufPt4NeeC6NWUn1NZvt3aPjLVU48",
  "key7": "3tPwfacyBrzmfUHc1pmrkuY8WAMcKvhmusuk3ARy3Twp3ArMxjVvbgPDYzifEgKDQgCBx5Dhu2iuRBUWniuwsivo",
  "key8": "283P9e6EBHJ9sHAfbLSxXnLKNMRxhd9kmECpr2Qy84dd5wjuhBrQWLFcoE3zx45aN12Km1xFZqr7TEUsFZD3CBdQ",
  "key9": "4WiQR1JrsGr5T7te5SnamYxQkRzFjKhKLoCyxL4AvNJ7VDNPFLm7LVTema2sZ1tpcFMfmshNnksCtzdWvU35iVbp",
  "key10": "5WZtmJmDmteg1kB247ob6MzdjdaPvCf4Z9ccWtAZrgf6BooAtmJpRZcT6c4YYvXwYQ4o5QAFqtkqBKmJn3qTamEA",
  "key11": "26hJSr9dyqvymWPzihWV4t3Ni82MjcH8Lwz8YLTFM69Ri8nn7nKt6KLhvJUXdkivc3PrPqMCCYMccQgBXs8NZxP3",
  "key12": "5txLu1JrhrUapmVGd7mfXnimreSxvKwBtPMpAg2U4RBrW2bWat3LzcyhKDtpJqVugu8Kk2JjCr8qnk8GJimBBMzk",
  "key13": "4rWtfRzXE1LawZWcpJUGzRBE24V4AfXGRpvYL8pncN26ZGzt6iUcrpMTBpS7vkxSvuxnBVWwJ9av4BsivpYrVzrR",
  "key14": "5tkcBHBJrC41FZy59sTZNfersREUmgq6QduEj3mc2fSZ29w9YdChZaat4wVbeRfjRcaJAsroSgxG6dG6dfZqm2Dp",
  "key15": "5RGoPmzzRixiRNiujQqUKk3yUqepmZGzVso9RcvcaQTBxzYGWhU2ouFDVsbMuMphHx8egtxY7jL5Lrk3yuCmW1JE",
  "key16": "45t6k4p6AinkEKJ1XqgYRH5aYqCnmcFSorqdLajEaZXs2DmQ7fLLSj2774KJ3cqji5XP7JcaE4CEkMRPQUhWbLDv",
  "key17": "4H2sGKLV6k1SaoTm9FpJ927BFi2Leizt5nirPTiR39HifZwHWizYD9M78YFZud69fYk9M7aTLRbXweXxoGaTDXdR",
  "key18": "3uE4T28xkgVdiMQZaUfT83KXNpCFHRd91s5xsY2U8PSvdvZFy52fYtorx97RTUhKaVf5NQdqFyZL6to7HGa5w8wM",
  "key19": "5BGv59u9Ji56s4nJdvKjor1hDYY9KngyD5mwa4J5AzzkMD7rs1QpTMTfoyvSSfixrUE1yKQZsLqvKfBNiNyTbcbM",
  "key20": "26L413QCacJic7QYvP5WKf5q4hWfpKq8fUuySD8sL1TocBaf33WJtmi5dU5GRpXDgR64C1nmg9F9PdJD73X1TkH7",
  "key21": "yUofTvESqTSCvdvLC1kFQfzRu7uZScb3MeSsqzT6ayTRnX3fYXwMH9RwVmpD2bkzC7jssf4xbdmKazZnN15NthR",
  "key22": "2vHb4RpUKfRmNsUhFDYb4Uf9ZPMfMuZxxLtczjjobj6KAP8Dh9XivY4JYX2QrbSaVyJ6VoXrA7NrxdbYTk7oagMf",
  "key23": "2fJ8PxWsjkJYQpUsuhbJ53m18msMb6mB5jUnvXr1Rb83KohgGj7hD9WuKmfWmzZpkkmc6FS9TKHjDGXhcDVSA8HX",
  "key24": "2qsMG5yNKzWwYaAsj743JAtR9SY8UNPFTDsL2ehDCYCCc1Q9v29as4xqF45sua4j6E9tUHN8xypvEeNinZqubK8U",
  "key25": "4NJBwH5oenHVdDJGrqgxs1sn16JuxJYF7HrouQVNUYkJprdWFkgSuFSkZ2JteiuJhEBSMX7tNq15ZjGzHpkQ9pe8",
  "key26": "2JPETo8EC8usPFUfvjejedpyZuFZp7VEya8rhM6ACb9RoKgjfc2QXoJxe9jwMMz8T4XbERxztkHjWaqc5hMcHxbh",
  "key27": "DPhScGogbFx2FjbzV1MbAfrFVTTxp6cree6j4RMXr2v4uojhaRXhei2Q5Pmi6BvX5wzhP72wcTYRSvLBNEf3GNf",
  "key28": "39Rjr1MBYcMMHZbJTYLrEeLkxgwsvd3mo1RwbPZGmtvPqfU3wGQxggX5GwfLXBbhRRBSYDi97QU8My9TbYABPrDw",
  "key29": "5Gpg1FYqPGm5uiXaH8XLbBf4otk6Kan8znGaeDaWExg1rNRBLnLGPgPUJ4819sfjDDjjwMgLvV6szn8pvgPS5JM3",
  "key30": "GbbKAt9XSCeg95nNyju1NmRfHRR2yUUW38z7cc3Y8irRJibo5bmfC2K3cwkZgfmTS3KMkbEppdkbEejZsDZdHEY",
  "key31": "5k3Q2GPZEvd6NVXC2bWEEQXf7ubgNnVPkbztwgooHz4HLQfXH5SoCdAhmU1pvboTVmmRB6F9FNTbLinJsJAbTedF",
  "key32": "5JrpHhTcQM3Wp1cQPqTKQnQRCnGhYJMHhKbkcBY58s7x3Mrsgd3VUHcvhXHW2yf4uo7tLDvDq9CpTvptYP4kH9Vp",
  "key33": "2eEVrNSWgE24cTpwnDhyDNPQ6RMm3N5AAg7qxJ4w4ui6GbUC6qEsCito7ebcWSSBH6xPYohqpgRj1aCSAdYeFPtn",
  "key34": "5AQ4Q8gThdo622LrtJpZFP5E6znhMdsdJ67qhNuP6FEJPUiJtfjS6fZddaAcEPekEru9SfBnJKw77uDTPTWnBYCP",
  "key35": "5noH291oTwJ4EStPFGSARzGtrPiP3tQPNtArR4nNLHYCG3s9nsRuwJinWaRKLELWSBotzzeMZyCreKbe2cAtaGcJ",
  "key36": "671rPKpmQU6jvjhFkNShGv3GeZ15rgKaz2QNn4QPkCot2kiQpeChuKaxv2LxQhciETgdCHX95XSx2LyXAs9uTUKv",
  "key37": "5edKmWX5r7WHoQgXhtH4tLhqXufjXar5wQQvB8xqnvQACCTKaMjCp7BHCgXJC5c2u9yKTVkFtgAwdfrBtbVid4dh",
  "key38": "3gpd5Kvg914F46GPHCoEBbqZuaiVMDeHuJ97tHemhkwZvibMyBeEPJjw7yNvuM2QjiTxeZCvxUqafAvfhcYAqnaJ",
  "key39": "45Nz7kGhDeoWepjYd75XmH4gmpGTm7ztY36a7xAZ3CCnCYwuA91BrKDLJGP5h878Vxn9cRix8Zse6tCFy2moxZfF",
  "key40": "2KjcnvN2gVV1eibH8FZTEVe6tUysF7mJu2RdV26zSZ94S5zk282pcFDt7ubngJzdLQ4KM4AwX2Vzi1UgaUKwZbJo",
  "key41": "3DwhNqQfvZK5EBciJRr2EM9jP4PA3nZCGqsvHVNqTwG5UaU1F4dMGvgUGugi1LvumhsqWAAMewtrkcgzQubiUsyS",
  "key42": "511xqXAjHbu2z3TxBRJ6gWzJhR37fGNaiSzSCN2jGoibAkGeXcrbc1mPXEnCT1RuBBFKQea8oJh2RFJiAcpHCsU4",
  "key43": "3sRyuAQERhcWttYWjm3Zxgs8yETHqGCJzoMZMM65WYREeVQmwpPxoomyQY6VtFiMDNeAbCdJT1dWuo11hGTyhBhe"
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
