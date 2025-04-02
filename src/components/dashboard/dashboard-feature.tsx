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
    "5wWfJjxJQEmHxw3sNi8hLcLwRogEZpPkXVmfb8EiJ1voTBuqTsqzwHqGVV3xgZm1N3pQvgEy7Rkj5jtJfsh1NYaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gjyS8oqcWnuq8sDdBhpnkXZqCt3k1icj5ZFCZhZ5SWRQiVEbDn1KawbxeTPq8VrjC6wGDmE4guKaLLvERPgreZJ",
  "key1": "4n9ADTbLy6JeShyadeXm6YqsEUscvS9LhtPR9agtDpT8MxgAuvHb4KUNyZuFsKQLb6nVx7CvAZe6Ekae8WHfsSWZ",
  "key2": "4oFKrX7eKFpf91FfxrUzvet5ERpe6rXwaBkxNopdJd9TNgcHJSN7qB1BfY1pNtoYHFNGJEKLv2wg9gEhVMUiujDh",
  "key3": "3cZ6nj4Squ63iF4Ri2sk4hkm2TLpqzG7RS4VTBQ969h6uJjEsmhXxpNuAQsEng7Mg7hTpWTRLnNTpRVjTN65ck44",
  "key4": "4gx1SRh2eXhJjUQH8vdymiHFLgWtvCn7BRyji7uaQsRktd6uit6SRs9dHUafAsHU8peV8M11uweSJrwPk7abrJXJ",
  "key5": "3yP6hdztgJm3BwXWhqgaGASoHuvoWY5UZ2DmAVSzRydGGjkqF1YKhAPjjugBLrdfNjqKKqa53uYpM7GcQDWXKvnv",
  "key6": "3HX3babLkfN6WWpxDMchyM77ySMyRTcCQ5MhGrFvHeJMAatay3wf8JBZLBNZqRUzR97oVD8FzTBAEYKsL1h3RPzd",
  "key7": "5sm3N35VW6cyDhCxeBk3o32jAAjX5EzgDQ8oQ454aRT4q4mbRz7wj7qwf7cnsjGm6THLsK4B25sdjUYwUEp2XRf2",
  "key8": "cuqgvjuWusxsEgKPYiDQM6bgZN7dmvkaGRRddhuAJU9QuAvKTaqcfjprCYEvB9ooi1XoXduyLwPmj323NjPrPvZ",
  "key9": "4Mwsdtps3ooVnHW3MYFmr2aEC6DH2hzGnzM8CCmUBbRMnLrpqz5mrP4JmHyKX3xD7Fd3LwAg5fYLS62kDczSaA96",
  "key10": "3rqSSEsnXzRjvGB9SrjYr7XNjCGtWdyUcwHv5h3y2JTNx6TeztSJ6yaHByHvf4ivRB9PNtwMKduKQ21JyABg85hY",
  "key11": "3sFiiYd4KkRpa9krnCCoTGkMpzhqBU72hQtVvd79ff5CUGnL1YgfV4g7wDk9DkTtJDrsTD5oDGbpW9yNo1DXE5kv",
  "key12": "wyG3vHtVy4axdjPEummaKekPkazML4CGQdGo8Kn2A99VcBPSUyhsaTb5ZRWfphicCDUEoJqb3rvwrHnZEPM2BUW",
  "key13": "5WiUH3jERqAcJp8z2BPhNRyeJhBr4hEn7GH4ABvxtDKVyrxjzF4Z7pnthmcEb29CdJ8z8vbjBJw77mYxLgdcjGrr",
  "key14": "cZ3nUvazcsJ5jpuhXofPAsQk2bLrbTfWdtHu8dFfcmBpP2uccsng3PdXAu5iTpwNnTNJK1XP7Lqms828YfsaWSJ",
  "key15": "LXDmYNMEGUgL4c1fRRSVvWEvcz9PAcJFVPJfuohUzqdzNWxBgrYc4w51qGYe9QzXDfRce4LG1kDfRwbjBQGzKS7",
  "key16": "QitsKZQFEaBkzqPFNNBQ7h3V513dmFxPYm9QGAV71mtriZL1cvmsA35RzZUmVPkFt6RgLmggcci11HLdWr1Awro",
  "key17": "4MkSG5E52FBMgmyBoxLoFqBd5MC1APisuELJGUoHMmfPR4SJxivHzFd4RGXKin1CnqQPBtaEXZ1ZYWD7MhmcXoK2",
  "key18": "41d4SBZHBaJx8zwkMJu1j6c21n18DmQtXN78U8x7Z4c3gvMqvKhCDmJyjdNE36kur235XL5yUTrSUQRzvj4mHwvW",
  "key19": "HWtmrLib2ggvLBHoKaPNR3hHcAMuoDt7fvTbdQwXjynBKh1dJyNfavMjvhgyW3RzQfUSt4txw8wYbVRBKoz1FJv",
  "key20": "aNhgaEZ7SSVwjQLQRvzEDn4Dn2TjB9kA4v8fZRPAVMMmNKcsPUoPjmNY9Xbm1sgsKDNEnpFVZ7Z2Jge3T9kkVpn",
  "key21": "2fsyDrDqyeQbMSpbXagwA8zDgJFjvPEfS9jGUheXgmM8vHF2NuGGuv2dJVECCGizRputLvjxsxZ2dVfDXiabuNL2",
  "key22": "5UGeUgCnYATbyJAvYnsBnaxUvUMqJwzh9sQJGWbrm1dvMFK3ccQzJp7fFhTGE9HvHKtU6iPDEuFhV6MmY92KjoeA",
  "key23": "4UDXRDd9wiPKJsu7VBmRUcf6LvB5aNZhP17wS211Q7PSFYpkaWvnisQazDk55qo9fws8LqQk9VeowH8prEEm4wsD",
  "key24": "4GGa1seVNNkvRCNjCMGUZMwtFyYuvfwLKiKfAUzbxom3yATBG1NU4ymnhwKM8WT58cFMiZKrMU9XuxfnUPyLEm8F",
  "key25": "2rr7WRz5gWb4dc4mv1mV3CCKRVMc6DqD3UeL9wHG6LUKTCfebbtdDKZ6NFNrdnUs3f5zJD9R7tfH8k82DGy6yWTK",
  "key26": "51T86azVnf9zbs7NwC8nDV7hKCkvPxVgfmGVu2kFdW5atW8cPWy3ZBz8d7J2tf89mnYeWrNVVnU4RXGKhpfL3bGL",
  "key27": "2FvBSMxiBfjZ4zGZ5hTmeuneQDUuujbJinYLixtDGH3KjPvNUgrAWtpxfHikuPME36amn9QmJ4fjmK254CmyL9Ve",
  "key28": "XcJ2ck2bCMEK337QfYg2wsiHKznbib3LztJqkHm81EqmrunrDWksppsJuSeFsNSY5pmfH6cXTCSpJEY6a3LSxAo",
  "key29": "DPK2wT6FEhd32auE4R3NJfYsaDr9HfRGRoXC2EY3D9QemEETeUkNPSShdzAzJS9j2t16iHtjaJ9HVGjtYoqUrY2",
  "key30": "223VdRnWAr57Hf484wXeynqzWtZ9eFFzv1hvuxCPffw1AfPEvC9L82tYgf9y35uvrp5bR9gsi8cvwqm91Ct48eor",
  "key31": "5YsjLqBTZKpYvN4wKpr5WHEgs19VZkTtGZaZtYJb6CdLhh8AADbhYkVbss9gqhbA4gHV7WajixDwaPua112PQ3oc",
  "key32": "32ybraCeA4MdfQAQi4UxXpL29j8WPeJG9Vu2zSdZ63kuSCAuTA7G35a61gNFiRkqjxZUD9pBF51sUMtAWWXDnxg6",
  "key33": "26F3WHZ5qJ5QFyfwMZyQCx6GomEfJ6Mdg68jkrB9FjNNCsYA5BgGMEMopJwudW5ZQmvsP74B7izDGhs88rEVso4k",
  "key34": "57MEdVoGVyDZdUCHFxGhfeHM8mcx3yp4D3Qp5FevKV2b1hNzEA5xDKQMLvc3chWLX4r8WKJz4tNyRDefzSmXkMhT"
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
