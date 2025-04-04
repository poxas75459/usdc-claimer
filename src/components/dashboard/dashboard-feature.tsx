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
    "2q5Pk8iEDqo2PfYSSY6L5Nqi2v4vuE42DtycENzp7p11djvm2fHx28NzHSeSZxz1LZmCPsLxxJZd1F4iL7iuqi7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pGetVGWTnsQLb5F3oHH6Bcbxs8Y8CwuDECgEaXqkR9P5txYtPsr12iekZcJRtP1wySRpDJUWFvY7C3u2p7CG3J3",
  "key1": "Wqaop9qyt3tUmY1PsNG5xY4T7rwZc7rV2zBsCpi9yV4cDPCYg49viLd6XB3EgVVbdHU3awJULgNwhBuDTAVwoaB",
  "key2": "34bY2BtuV9j5xxL7i1gggNCtpe2rzzHmdxPPeaYsLKEos66FmCgeVpKPy5LpuSqviPm4zkJavPp7joAGqmNj4GqG",
  "key3": "SLVHUfzZz8uN5DrKXGcxQ9SeGpgPjRftVemSDsSxwVJXAPG7ztVe9riWLVzBRHfXH7zq2CVd8SBDVwq8HVwcPwJ",
  "key4": "3YWqZVtNcHafVhjgEcPPLUKfhnz3bxFJntpnoPBknnqr27hFCv3cWwjnAVqU7JEgiqcEdjFYqiYFK5RipheNgANa",
  "key5": "37AiNRLJyyRHFfnTXBftuXLbZ1jdLab39dwg2yCDT9dcczgatHJKPNedPeAtc5TkJHdRT9yNiBq43JmnrZusSzCU",
  "key6": "C4EPf1TcEw2KwfBASxKV6L76VDEpGixQcqKZ63zNF2e1YpBa3ct96mQkQPQALUGtNgoUt2HWN5UF4VoQJVjBVNb",
  "key7": "5nsf8NstQ3yBuK88nJLxbcFiTGzbUgf6ogZMJkXxAdDzqtECFdj6gJ1TUSgU4LkkM8FBaA1nvr5D5uhLHC9hPmUx",
  "key8": "5VoCa2qCA8Te7j4YVizFGYaHNL1UCJTLaVzkP3AdUcLuc6sGkbtWHXpNv7RpmMDwsCwmFGyc4ZV9uxagvxEuC55T",
  "key9": "3ryxY1NuURHsHgZSegMRFSWD3ja6qmL8PpAKWPXPHVKiGj7AC85Cm5Dwu1JDaaEsXAN5KiNmCtYcS6uK18MAmzD8",
  "key10": "4j9qEvG2Yocz8EEHJyh6C5uegpu3Kk3e3kXhYLfXVvM3mw1Fv31q8TDmFZSysWM9HepAns4kRtU3EPkmyVn26NUi",
  "key11": "kWjpZKCWGJPVQJNXSxpA7NYG7nB7MyDDgcz6BtoT4MM8xxKhoHdFPnmqi1VUCM5kWEQAV5bmoxqEYX4CFQgA9oP",
  "key12": "ZTsrT3pBkkqpJtuBS3JeTzzy5VeSmUMXbiiUh8cQEduko7xQo8dxp7GwWpvqE1MYMkYnxrqhUF1RvoW7UeGtVSW",
  "key13": "2GYZyGxb4wQbJZazC1J7rJvFKbE9YPMMF1fFbsdeHMicTAvZCvY8oCB49exBPQ75vva5i7CGag8TgNvv63KzAQCk",
  "key14": "5mpBXg2HE2BkwEyrcpRYPkc8SPte4Mo4GSW7i3reg2qbtJAmTJBQyNQNMP351YZDALbvYP6aH1C5HmzBrKxDoNXF",
  "key15": "47y7Xt9V1cwHyRZNeyrCw2zHDhbjk1LC2js4HBKJJn13rroYYQrbni6XriWRFVz2kPfWpAGQDAn6ZJS6rLyPFbfQ",
  "key16": "t8acomdnb71dFPcueWFA6icznLKUmv6AMPiQdYUaYHgCc5gHzinMa2vvrrzRu6aZZbDagrgTHt24BziavdCoCqT",
  "key17": "4wQYw1o53TXHzFYYKnMVTFQTy3XwyKoYnkNjooVGAYXbF4xt3jx9htjWk3RKspyDKxAQWkx9sC7J7K9N5Mps3Ux3",
  "key18": "24inq44C2Jb1GhmxZtQdJCZAgmFRCMGXvx9Pd3BDEfvaPAteXrDDf2fEwjn7ZJjopFB1CXaVqM3kG3QEUgAYAKKN",
  "key19": "3FRQS7yF5MQvFiew14HsTKcNyuLv1h2smPjkk6Eq1L6vtn6QHtg6f2HcQakevCMUToS2EjxRrfVmAcPLzsW1C1Ag",
  "key20": "2W8mPEgzDNdpN2Hr4sKnH9phXUNqjsxqSBgHQmwTkEPRCjD5YfviFXdLEGy6tvyS5JsVk5HtZmxDgFFvK4LNKahT",
  "key21": "4Bf2jnfxpkbvxoMNCh3e44MKjVtXnU8rwGaf319PDXy9ouJzSnn4Jt7sR7MdLAX158xcYxDjembRTVfmTq8QPpsd",
  "key22": "4xdo5i489N4Fd98PmaMRDiqRSj9pt54jsoiHw2HN96BXEraNLmGSwbXMCxL7rg8VAowNTVKf58meTsFiLmTVCAm6",
  "key23": "2bXT94NjXnb2zkMMvyaNXFKUn64dMDBmTLQKhC35wTbEiVNEnzGcfhyD7JAsV9N18WhxsFfU2vjzVsJ4r1C5L2Yk",
  "key24": "2uAySKQCxm1aDSPvFAE99pLZhUgDqVx7a1s6sATbEjptsDzVWQJWqQpAbd6vPak9vcxgZawNZX5A5zSTMvsGXo1J",
  "key25": "2hgBgePHK1kAW4CZxQQdH5HiRoWw5KHGQ1cHZQmAnPsdjnfedwRmsru7pYpx7w4HGXhcXMKU45PKgKm5MPUUDkG1",
  "key26": "2o2kgh9XKUexfKkuGJtQE8mMx86u5LSkjb5nqjnU39cRT6dw2z5pwWtNHqHFaU81ig7xdUELqjR4LZE8KXPCZWE5",
  "key27": "5HBu5YY7iYFaCRP8UrNUy4JTkMmjoonSe5TodKidRieJ1pqdNm4oppLwkjK4T2SYC1D9DoiaWaB33PXfVtdDuari",
  "key28": "z92A93t7zQPAEaWiZPUnw8cj3i5TZz4DzTgfh8yowprdYjmEuugSeKhdUYZTDc9SKgUMLBhtAjxmj6svLjSYdNB",
  "key29": "5yg3TKEkBV4cNQSxwNWVDpJ2ep4sNXrNbp1h98oPeZEUSBsfF3AHBSjmkCMz81EuUs1aGYGW71B2sZsKDkNBNkJY",
  "key30": "5zvX5xLAzZa1jdxUe4iQMYCo7WkDLfLXLfLiNSnrvhgwDXJUi5hT85GANT3qVzaLC2VeBUFaAJ2ea1CVsy9BMFcx",
  "key31": "3zuNqzciUtHapZLVor3psBmgguLT1tAm2pL7LgkZm4h4iv5Fx2NWFuXrqxpt1P4vaZXrt38bNXRmhZcDC3QU4vrv",
  "key32": "4wgfZSBSr2x62Spn64LuNHGCmJTRxzBZxbTJWKzXYfK7A1qqBLeLEAJYDxn5yTKwpAPZpWP6FTSCUiyJCGThBkbF",
  "key33": "fWyoo77oPRhG3ciTCmPg5crvZiF8NbqKW3Bzn43EeT2e9jU5YBqR7bWL6ATg73L35m88XUMMWnsGKCenf2CGyuU",
  "key34": "5uviTgTk9SXodu4h4PGTfb6xzSULXiEgcMbJMGavRw3oUjgKpz8zYHJ2wyQd9wq8neH5hpF2MNHt9Ak1EU6Dwy1J",
  "key35": "5uDumZ8hgpqeHEvFcDXNpChPjdjiMpgAVY1hLw1Gr9pUngCRFPW6ZAUoB3uY1zqMHDE1rFkrfLZBNz7J5TXZyFDX",
  "key36": "3BD7qDFV52e2ED3AsRwJjHDa2vUohmkp5Agerd4iyiNJMCEzm1Y9RtZnPbsXNTvz1SX6P6km5Y8jrnU6b4jfiUyF",
  "key37": "4eTy5kY2bNr3BqqcPaQEDzJyMU56bXNW4tbwiHhXDNnzU2DkJxnhVo7b8bJw6UaP3NyzJP8R28LZWfoWj3KtWwDS"
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
