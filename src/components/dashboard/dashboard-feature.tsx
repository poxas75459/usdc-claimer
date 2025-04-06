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
    "2BzRUMWQmFvbw7SFDm7zU1jSnYkPLuvjDK1QD1gVAQYHAiinwyNApVsnyz2xUBaxZsLbozBKgDi3JucmGmEcZ1H6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vZCBZFyjk5hFk8j6ZMTpwsUVmYZUmLAqetgMATBY87Wm1g37gygBZaJ3ipRC2E9iSM9BbSUetr8KdRPvctvStQb",
  "key1": "jGvtexwVg59f37jY8QtXoQKPgoLULLjHSKxRThWJxJtRwti1CPJjP7RFZoAzZn8adJeKZZXKYGv4HTRmhDtoT1D",
  "key2": "51hvjGCRYhHNEaYMi32eACQPQnzxD62NGDgkJtQT7qswzYT4RBAjZYbAKDvTN8McEgE4oUUvQ68qtcxUztJFKZ7b",
  "key3": "4SrAsZfWtpQN95voR9vk37rx9KqZT7AyhZMkW1hc7XCQw1Ne68dsZgCxyjp773bEFaiYaiUS7QoqkgMKjq8s8gXQ",
  "key4": "5ddmPDcJFqgA5WeXnKmPFJLbRE6SVLoNb5bmnqw5obQY4tHAfKvPY3sUC5U7jQ7J1FAxmyyBAh9TTBRibsNVW2Bg",
  "key5": "sB1ScFG2Px3LqjaUtr2ACbtpZ7YSMDcDu5B7paXW6bLwtXefpcALt8AduSKK6KNwFxhpB9xxXJcyEqV2xpgq5Pr",
  "key6": "4oDQxokbyEuNXUvp9Nf5n4J9yh5wyUx3JLKdPzkw2r3nhYuxryf9PH55rpxUaYB1NxWr9qpjfnFyQm6obyfBTYjh",
  "key7": "SYmWEGtwtN2xn5nfPiDo8Upfttap66iWncwME4irNsc2Ef5nn3gBVxjPt7b3PqkmKY2Ls2LhKx4jgdf5uzQbMCr",
  "key8": "4fQtP9ES3jrZyprv3Fh5PXdvcUFTgVunZYTMmy6cNzXqk3DxxopFctZCxpjn2J8ezChJ2ULxDPQaWEiVR3wncjc1",
  "key9": "3S5wMpUFNn4swvJ2vnF8MRqf1iMZxDn433gEtkc2wvGwFNnYBW2GEWh4UocHbyZYgt29ZaaNnLWNRjazAYZCmfKh",
  "key10": "4r45RtXJNPyaE752yVeHFHLmdfVXDSPWj1PDf6RUDSgExJNXNL9ujvJkMcYgfzPSZmgy2SRfxGc2Sqg3qNFRyA4P",
  "key11": "3eNpBeGCqSaxb4AKt5q26CmCkowgGCY2DWq4JymEXoJEcCfz4RT1HF2EEB1Az4T7t4dF4SgYjxw2Kg9iAaWgti5u",
  "key12": "3QshUkKUH2Dzze7qRY83svQ1r853iQxQWQcRu1bJM4uC4bDMiwsT3VBBNVX4Tq9A31QvUAbANYRrvSAx4CXk3Vjp",
  "key13": "4VDywgxbqbyFHUobpKFQFzkVnokn7W3epTmpVSpRYM53xHs3KNWSZ1WmojDhuSw3q7KKjb1hSWxfrQAtNj25hEVc",
  "key14": "4YJ6d1kvhnUZkMXgsWWPmcaajQjWJmj8paoCW1Af72DeMR6j67m2cuPLzXP26v3qjAjkGhkfwU96EpUgJuipoG6w",
  "key15": "3EsrHMhaLmWpGpFxatMnJzuMfQ38PQvcVjnbFaZcKraF6kt6q4zWKbiv4gt7B9Nt7LexvFQUFvmo3FkaBpX4JdR",
  "key16": "qdp4Es4guPxrN4Eaw4kgeBx83WkUdkr3TM8Frbh8ejXfMFG9zT9inHXcxNjUMT6gziLQwVYUFWJuAuyXbmM4CEZ",
  "key17": "2xQktJanw1A7wpUfJFZSc5LV2V1oy6cjwiyz6gfZwNkTzzthpxm7u6A8LiBQDXKHgUFi3VoQcGPq84TqDiGQw9UX",
  "key18": "3WQND87YaCzrHds6in8LuTye5UNx1eZ5f1vqgEqzQvdh2DAddvD8B1prjpHrcx1dNdLcDzPsh4Lp4vh1NCT5JeTp",
  "key19": "5kjjoMEmWYZQ6URxwx4bvFBaAMzHea5wn9bf6yHrxtW3EwwfP8wqW4tYWr8E3WnUxHtzyQDfiKKfqomHFeYQRfSA",
  "key20": "4aX57AYUAVxYpbDJBk16Parm335TfJca9ecRmphx5VZzjn4sjHubyz9ha7x1wFExDd1YgMkC6purvyesqz8ZrZ3K",
  "key21": "5ycQUYATE5Tzkcnj4EEhfqNKsswA9V44DM63qnTyJDqG4UXANT8SCtAVFw4mUCzcBzCd1ioiRmTAPASeD4snyZWW",
  "key22": "5rPc2oU3cL61jLF6bb5cXqg56pZYWLoA8bG73FLP33NQmfHQMXLUjwZLR5W7wEXFWyUR5DuTndBLyGydEJMRa1Ui",
  "key23": "4krTrPJv7zAZkVKQ3wLwFW1A9Fzre5ebpo3sMLavATLRVwopVtrB6ta4G1QBXNVi6NsjytVFErD6ypqqxDtB2R9T",
  "key24": "5rU3oqf2JRkrFybadgxwoqr1hXeaS5SZmkmpHR1AHgPW6tt7RFuVDx3iBAMwzNX3u4ytG7FsUn45pF7JPYkLNzPo",
  "key25": "h8Eru3VoWLYoWRLffJfhpfKMY8hsidBSewsf15X4smxTVGjFCp6qTBCbhnRvDoHYBcM7RoV4SQz8Lt5zaPFkcpY",
  "key26": "493MrjuiLqpp4QoRA885rL4cAm64i14vuARz8NZmupbo8tCy1xgRH98B3ieUTPAq4VzoyNCN41U2EgAf8U8ix9mJ",
  "key27": "2RSipm8gbR8dcT9YMpxSTcb66vPPA5uNxvNW9vzfZApxoMJYbTcnCRdSRnthMD6RqBc5oH64QufVi9KJYdPVV7wA",
  "key28": "bVkpvS2RvgmgdpFFMb6ELcbqyD6ncLyg7MhWnYnGjBLcvn53G12vJ2SkT2G4sxB9eX4wucubkfcnfW44pyEQSr4",
  "key29": "sW6nafoLBH4XmknyfLveAxLAbYRHdpXEGvpHXMtFAnoMctVukE1dFLWC56eNCdjtZniyZGTvQN7tkQX6RMtUs1S",
  "key30": "3WrJU8nWGjXdk7gzaEo7pYfsEoSCFsaRZuWe6mscQuvG5WZBLT1mVVUu8JK6R4Mjujf1fx2A89eCyZe8bTd1aMHf",
  "key31": "2LEyKsVvF4wEch29DEVQcJNGJEGGu3mvW7Hg2buqidf1KPZZ9eVxFTVjZvmhZ4j7bk5inQLjFTGT775oteTnrmmd",
  "key32": "4ArGNduxNYZYtfnFkLs8ke3XGcsb1XQtr52mPAXpCrib3qa2HoqUtPg66zCejae5Tqi1xSYA3QVHfmrVYxPyT48C",
  "key33": "65facD7Uy8x6pu4vhQKgpgGwZpzK2B1HJjEiAhQPkuUR3PfLGaD1AZmvwXP4xSdD3BUdHwrjMoPiBMwAWZYTofgY",
  "key34": "4kKUmZ25KwobcJHFuSKwYPQGWX7orxzzMt5hsbZU9XpEFFW5LVJb83MnigMje9oBbq7K4ZGxpHasZD3moTkJXoGc",
  "key35": "3M24FH9sxFcneRiH88iYa4Sotfmjfcph45mYuD7FV3AJPB3XoUhTPfQagGMs4XDs9fvqEx2XuMhjo3fcscRowQxx",
  "key36": "3T5sym89Loh19HAynxhjADVpieBqDz6nPxx3au5RrzqUCzxQ5NED6MKd3o3ZbZj7Lyjuv1Ngyp1o2jtR34AoaXcz",
  "key37": "3rGbZt6ky4QhEFL9ZsVqtDFa3bmfSpuFvske7cHW61iNeJDU1PfU8Ynn5Gts6S1SoEqRiuE7GX2u8ynfGj1LK24Q",
  "key38": "3Rn8NvBRLwTuL33NWRaK3SA5mR354LW11Z8KR2kQh4SN4dVdD2y4LdBkGLAZAw2CZ1cUFmGEZ5VNJREoZAdcxLJj",
  "key39": "48EruMX3AWyn698XbpNhxQ4ZhxqyjBs1T8kTG8TT4TfugjBye8kSEQmN8TQxVcyPmKcWFkXEB7XacAEGvHEE2GhF",
  "key40": "5JfG3SRMbeD9kru5zKNEAtNthQpJ84dGcUkF2423JxKCpKsZWA62K7yPStfXZEPGSM6Fs9gL7MYestuk8MG2561v",
  "key41": "2uuewUMdACjfEc2543EgN27PE1gsrBw9vpGaaEvBK5y7JofvPXNtquj1No5CtoPVKNjMs5PMrkiyrYQjXCjckjNo",
  "key42": "B5rULvuhoYSYRRhGJvJAmn9rFDGbFyrjj1wQcRYFedNmrBxdu3dQuwtgWx1hKriUCN1i5QXC1gQvCJ5FBAUQ7kF",
  "key43": "21eht4rJX8dU7VGxQcRdaUnJUH2Gdnnd2DP1ASnn2PqD7jM1tBmRMaxijsE89EwSULFhXZRiA84e3sEd1xqBo9Gm",
  "key44": "4kuZme6NxXP3PWmtQo5AqXcV2X6tp1evdQxtsxA46mnx6t7xRG3GR5hBar5MDNwdPVu7RfnjxqduChaeuXbkAtA9",
  "key45": "Cb6V9Bw3oMEYRrR1mqL5dJGoHri4ubGQX1o1crHEhK8hLkCNm3LuWnPSxRAmFnXnoXqqfmfNE8BbLRsXh1cmfm9",
  "key46": "2U6GoSsaQf5RSzqPhkcB59MWao1FN84TndAZRSb7yZpexpK4cGAKwrLt4dMQNMBE1DEyjtEFTheoRtYdAesfTPJ4",
  "key47": "NTFVJQzSU2vMNYNAGZZphznMVFWVia8QBzradjGKodXYZLzJ7CyYNAFLDZnqk1ayEYJcRmWS5WBcWs2rCFNS1DX",
  "key48": "5aM7ev1M2wBk6kMJD1ETRSci9fpu9w6SCpY1FGVEn2b6bkRn7DAx9t1fSr3pNhj2cgn9xZJ8DaCB2QqUTJctYTNb"
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
