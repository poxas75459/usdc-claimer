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
    "zyRNSzHLX21JXRSt5DoGNP4MVZK3MmSpAZWy2Hx4xbHWHsW14bRPdwHY7ef8YDtqqE4mCd8VCPz9XvhTSwtLm2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bVGjizMLc3MgpKeVHkFPvwb6wsDFCFHv2vM4dxc5dy9TsUfwBpkGaxbC8PEy19Nzwxw5HpvBaUjQjkRctiWutqG",
  "key1": "n9SnHjRqJctYBr4t262JnmSUmyMRk2ztXaKvD83fdBSWi18zJ4MUsUQZosCPK8MWH2XofBjsS59yErup8JBF3pU",
  "key2": "5ixa6gGAAeqfUMgS3KhbnY2f9QXsvmVa2dHPxTPGDzAR7sRuroZoYDqfebb9kNwkBJXqgnqV9ZWp9GZHdRL9We81",
  "key3": "mJZaJv3iuwcbXKzgrqsnrRgM7ZDbKWYBiEsNT6tYjEBqqoXoNHWkAKwidpALLyExZM8KcYXrgfz2RZZb85VFzmd",
  "key4": "4NSKSNH1Kj62WdbVPfZK6vEd3cxTtrMWvYB52cmL1XC8qSAZGK6FjaLPKW6CdW9i5VmBgEcC17zESnwHqikYk9Zp",
  "key5": "2hJacLqx5YENh7rApZV9LARxUiNi9Tndc5yJYciuB9ce6P6M1jQiYxYMVXmhrGpGX9cCYA8zMva7zMzpbgWC5N3k",
  "key6": "5i4os78vvTdZPvQwdcDGXSxFp66wrKTwtawpRS7fXhs1yZNxgT2Juu1vvetPyFBRw74egQTMjPUNyPZtK9xNoeA7",
  "key7": "4DJ1L4FSqHrAYBp7YU1mfXB72FCNMRxhPz2RcnC2npM9NoRWY91MYqET63d6aU8A5PVu53FAsEhyy6weLy29z2g7",
  "key8": "wAjdcBvXNSG7tc8zYqMzGKMPwati3VUjVzv88MQfwZw6s2BFKRLVi8BEZ9yYukuzYNv5q7bJc3CU2zMz7GVUE6z",
  "key9": "5oLCmHQJ9gbTG9CqZFJbdXztfkHuMCEXg9aogWXFCZxBw6NA26xKT2TgbLuiJjK8ahQy2T58Epgt5euFFHHJrthe",
  "key10": "5hjgmzNS3tTy83D7oqrAgvjtjXdzG9adVT6sC8oSD8XRQqVBWqoDUgu71KrMz6ktVczp3qWud8ncTZJvgrMzRivf",
  "key11": "NLqmosSkkDdMWhUgG3yt2yFsJHjFXP9yekgiEYxYbbK64YLofmE41TNCdJVCvYMAGQcvPYJDYCiZpwfo9VMRCBc",
  "key12": "28eUEuu1u9ZVRQB8eNqTMCbJvC7GAMTMBLzKS21GPsafhSUXLxTvwDrJxofzvhvMvh5S7TWk3jRsrFXUaxzQpVak",
  "key13": "62rJLAzAiGHwjYF7RtUGeMVosB14EswgHkpBJsYPNmJaMyzz9HjHG8DsTmhPAdMTJxfbbrdLRxTUw5Q7RijZTF3A",
  "key14": "5XQZTjdBYbygnmnimoyRbYrpstv4u5uPiSX1W9smAakb48rs7Wakr8e83Gt29cQ4BoAXYuKuZeKaaTEZf3epugyy",
  "key15": "45eqFCg8gZoYXxd8EL9mbxhBGdjATcpTxQbrcpQ1aJT3Kd3qRGT51incXUNvXZvkDRJS2BtMnREijJud411TgLUV",
  "key16": "51au3EFx4PSxUtcr8qHaAMUGFPV65dVLc5fSQweVi9kbETqjNoUWBx2zBFSSECjJPcaEeoy72szyinVdWbWFPBFL",
  "key17": "3qsycbTQNmY8iAZ2pfd3Fe34HkZJAixPyWhaz7UtGWhXbf1d6wYBQua2ShVrW9tckaU35ghGewuxx1uc1Uv6V3cW",
  "key18": "4ELhfTrAgKU8zHWLX5JPYZo3CrtDBxnUN1HgQ3gvYnhgvWBq9gwRBFhX5ymfpi9KLe9NskLp8CXi6Epynkyj3X5n",
  "key19": "29Qpi77kN6WPzTiHZzAiqtfhTWVW1MBX89p4Joxu6463JdwZPTAaxGpCYDWb4sAUrgeY1GD1L4GbjJQVuE1dRx45",
  "key20": "53rXYFtQDv18V9av4jsdjGmWQbpaeg2zD9JFgusdMfFdSXGRoRsD2NtTCjHyKD3jfkSHQYsjnZ84U9Gs4qbaiQUs",
  "key21": "3FP7Kpe9tYsqxSWWj9PBd5MqTxT2a4zGTcR1P55Cajjp1qCRAtk4Gx5DDfgZKRUASyBaipxfTUfLkdMZrALvuu8F",
  "key22": "56MSexXh222SWXgcF3bePca1t2nVqnNZK7xr4nwg7TSHwhLWAvuTt5ak6gYu9D6Q64UTBn5r2ry1CneKgRCyteYT",
  "key23": "4UuFCY8M4tScH7iJwP72KxXukzVRKKcGgoPvU73FpvDTowNJbjnTWAUQg3ajHYtJYEBWVF3ARNMNZvNygxnLB3Y1",
  "key24": "2DixXQSe1i1eQzFgxzbiZUUQWZjKu5g4PHBXZTyXovGXeFC41JGnnmPoBhYRoN3RF3FZyZXbKww3TpCJoFBoNtti",
  "key25": "4xj5SdWiqZcsEWv7ZAPiLxNWCoXbu5wd578hZ6ukvJJfnc1NbgWPKeu9Yi9v1XVjZZMqCCxgG8NPZQUPKsRwTVfQ",
  "key26": "4f55HLsHougdRMb4HyL2m3GjBzjaDwxhWFmmCe15spE4EjBKsA8NddrRvUNbVygR676LDPirca5Pe4MDfDQ3BXka",
  "key27": "457Q2Qrkquq9UhVjjjkLuzTQ2BbXP1bgiNvpDSumGudQRzpEqR8bsyXdDEpEHddaXLtDUrDEsQWsBdAxqTid4vM3",
  "key28": "2CbHwwaEe3DgCaS9FD8TVuHQ1TPi5RyED9Ekd53kV4y3zsZR5LJJM25x7MaCkA3Xu4L4GntNRWFEatk7nkwjFve5",
  "key29": "28NL5UrS2Y3YSjjuJQiZpe6x169QvNUWDoGGNhBGW9rbb8F6xE3k8QHNnKUmNS53MHRLTuB5s5f5fDu25jzjspXU",
  "key30": "5v7bEEMWGxXx1Q4BHBAGEMKVQtNuyC8Gh7DYV6rzEd94f77zFPBvZJeX9vsThhkz3BPJSoUxWYDy3DoVHvqDqBNg",
  "key31": "LNau9uAtQfMKoPNbqwTrcCvDvEMegdVhTDzFMxTf9EWULMdBnVNUDsZbRE5w1gXZjirmRVwii3PW96MKY1Hsocz",
  "key32": "39sNvn92T33T78CCziqS1heUgy3HyJukahYbdpcWJj8yV5NaAY3cW2dvuxSJTFykctdZpsL3VqNzoRgeTW6j3LQ",
  "key33": "3TFqqSXMa5HYp6z5KM67BfWvjbKW5wRwa74EgToJEUcrnoqMtZosaUYso4zvgGYEfhwNDeGoXp4V3G6TQmkT6cMr",
  "key34": "379iPPt6t1d3FMrXEMPqR1hvtJScLQVkaei5eb7FiKogFdZLF1aH7ff2ef2BUNWjzGsxzxo9mvNBkm4dbeQPB56R",
  "key35": "53MnykY5nECmGdHDan4v2GMGiQu2CvGiXCqS9VMuDiTuiCVECg3CeyC3x5dgD9EB1pe4c4Pud1aEwQBrrQxuEhMu",
  "key36": "5a6RADPYoYWr2t9vgp7d4NqMQcJteWPMdQdWnF8YU3SuCifQ96toDKRtUEdabtAZYVYZdsvQAcVKbQh5GwZzHyoC",
  "key37": "4z68125s1XusxayYHLeSv4U1V7qqcJSujaWrMDjMnzTDQ9dFJAsiXBcnxBcQUXDdTfR514MvhWEY8yJ78FT5tsya",
  "key38": "4ZBD1woqdnjtvFmdQSKLPgBKwNzC7KQNM6W3kJPQP68566eXG5GYEyvyE14ScZ9izCABngqU59qmxWUSxhmq4cjF",
  "key39": "5kV63CyxWj2FGPb7qntVQ9HYAn2AGYSdroJCjWAt1Qzs3naZ4wR65e1QJeGNLAGuCz26tbNcKJfn8hfXV4TEyjgq",
  "key40": "4tMHfiekbdtLbG1GT6dtxCcritixvnvgQdX7NuSGPk6NCSGfgUtFCCMWJHu1iinffqJire5xjMKkyub1ortDKtHG",
  "key41": "2UUBY6u3ax9RWAxeuYpSieA59YTKhHMwvkY1wnRQu8JYBXsZwb8q9nJezF4T55PCQ41fayzXUGoaPd3iswKkcaJM",
  "key42": "5ybUYwz9sjeU2LiJBUPekZ9Zi3mxdxLWL7fEwzG4z8wpEpiVYDFiXHXHno7L8TCN4pMGbYgdRyaMVM7NJvNo239G",
  "key43": "3neQo4jpWJSrx29PFcCjhkyN7qjQyTEhTPVg2q5k5WzPCNYGSwBAVkUDmLR9enswichfR1UW4wb5MJtkFG2tqZ8B",
  "key44": "3SznmuoUXV4cXgLwPmAdCDktXDwkoRe3wKZfHZxqvhqMSMRkqnkjacfbjoiwuJkwJJEfFwWFsgbbmSjYxgSktso1",
  "key45": "4daSrR5SnUMyixW6HXM2J3eFdky5LFZaEkN7bf3mG1MarsBMVd2j7njfXugNuvEhe3tpH4Zh5k8VTc5fQeCL4WyF"
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
