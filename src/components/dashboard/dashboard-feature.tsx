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
    "5B2ohYFJYE9YTWac3txj2VBtcvsGvC7RDd5E1iRW8xvaZ1PvnBnHPYSPY3KbRZ4eounVbAobKeeainUHE9Brnrc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XRQ8L4TSTn54fHkQw89ZBvXwJUZvSGcQz7KjPWkcCT9DV77YCeqUhTyNGZtzDy2uhiZBH3M6vHrMDAK2xcQyhKy",
  "key1": "5j2UZdu82QeJomLsJ2XKovauvQdc7v7bUmmkCXuAVcP56248CqtEVaeHfZRhg21sFDHjmTL5WYYpsT9XC2docuQB",
  "key2": "2kcQ3EGQjmD9DJQXtCVoPBxcwgV453tKrmFCcqfGveMwhfUNQ2pM9jvRqV2LnuVVoZZ8VivSHFnRh7uSmUfg7wKM",
  "key3": "3ZwE652VKJYvmobxCupggLtzkDiHgqko7kJZVypSHEP6u1cPTs3oXaX1xBgbiPK7wAmrSuvPjmbw2nwRwWGekADH",
  "key4": "q1jh3vMTytNctzoR2YN8NLVy8D1qJmZMP1HZ8NufGngbXpZGaGyb8CxZfvbMXPqqzWr3uzRt8E6bknYEKN5inJr",
  "key5": "45yVHceScJLKd2Nu3HzPzXKSvBfJLU1Q9qpYorqxY1E5ABJMH4E8fNpaMkFhPAvbiSA6bG7GWKnahtYiZwqb5eY3",
  "key6": "4zhBeCLLe1m6kBc9B9rDmvudpbxxR5U3wuTSaojsN9KER8o3HFfKPCzVxsMY1PKL8XCN85QDoVdzk6yWKjfB5bVc",
  "key7": "4oXsgrwBE4RiwTk7yRs3cfXs8bQmwh95FX3DPvwTDSDAvSk2UEWYvxi1omgDxwnAzBsv5BtNevjEYyDvKv76dncY",
  "key8": "HXKxjbS3xjvKEtpCjUfgCzty7ed85FTfn71mQgAYAyKDdFVqoYpFz4tYtLtDtV6f3eo2e5T6vdLZoCEkY3LifRi",
  "key9": "wqGa5zWXS32wVpHtoEiF7niYN9ntrF9hsvBpsYTx5Ayn6E73HEQnTW35GYCR7Jqkkj3mjDG1PzKzTvCcMQNa5rh",
  "key10": "XvWh1g7ZgqDPsMtoMdFrc4Q5B3iRLXoZHjWGXqeV88LYEMFfV1vWrV58J89oD1XEYXpx3wxE4vxmP9DagB1MFKm",
  "key11": "5uYh2XYroASxuq6ADSwrCtxCzNrALYNBiS9yeXXX1urkvcsteZDvgRr9tUvLtQ6bchUxpeD9Hp5ZuZAQ6aZmnUzh",
  "key12": "4ZjuufrJ1uiAoL4tgMhLFeb7LNsKU8aEXnFRmutxs8d8m6m9V3MMScLHrZN5yi48K4MuKdKrbQDwbjPYc6vxYkF4",
  "key13": "4itXamrp8ubVAquWWGjHsQPj9XG7C5SFx6KQKkLULUxUCjZ1yWmVUnedmZcQXtr4hNtE36psFShtU5ognWFeVuTF",
  "key14": "6Ebe7myB7eWrzqM1bjv8BQ1ip9Jgoz4Xvc9ZeaQvRjKdDMQhhAjY3uZwc2ubP5QwmxGvmazo5Fgwzon3jfftQ2b",
  "key15": "4qvS5Q5cYSd3oYxx4uMcjh9n3tHpLNrCzUKSoiEbFgr128mtoRcoJ3wHrpnzHwS2Npaz52agDeoxFgh2dMX8tNoU",
  "key16": "4TsZkaEGYoTzpuYc4iTx8E8osxmhHSneXgtoFvoaGB2t4LPhLntycZ4mBTdsFAfX7566aGVotAqTwLZS1q6xnhAw",
  "key17": "36czPRVoD1Lb5Ai2thPCJYNzvLeR2H7vXmMNmL185WgJF7EvHdoKvgbvY42PBvXQwovQDSyr4oT8zfNGrGWSeuyi",
  "key18": "31MmDm9qrgFuQuqYTqpdWGa4DJrdRtguG8mxb4jVdJAdjQSG6XSnuNxw96RbPgk1bymz5xi5y8j4Gqr4fgAeprAs",
  "key19": "5enUSrCrB4rJyVFQRiqBomQJLGheQoAjWWrmLQ2aTo1wzZkvXNgmNq8pBW5vJ5fwC5y1BzYa2C2cAs1uURSiQnuJ",
  "key20": "2xDkcYZ1SeVPXgMJ1kF7s4niwpfQRUPGVq3e5AgxfU962xET81R5eCU2smWJ8EYHYpofFw8R3RoJJuvZUwjepDzn",
  "key21": "57cpp3WzM186Mm9xoHTpEGYgPayEVF98AgYFr1kAUWfQiCkp6JSgmuXV9MYqYsqKEMvzAfsW7b7PqTgY13LmWjca",
  "key22": "2eYkKU4D2r5LA9CDtdsKxEfDPSCC7nKqZ3dWs32TL56ARzNWXC1X8AAhgdgpeceFuR3WTCujRHdL7jYPtPiog4JQ",
  "key23": "2YxitWmS6Ey5rWAM5mHnMuuLCXsodhRm7nZ4Viw4eVamjUsUJYHfkVTuoZT3TWjVwvJHVNf1PpkoSrMpwfGo1PTj",
  "key24": "2TzwwmcEAH859G3mg7YrbkaKg48fxTPEKWJtxRbQkee6wBoEa1sz1UQdwTzKwdi8SpUiSr4pDFPkT8U7a6BxgoR8",
  "key25": "3VPw8YpTm23yNNgWcU13iWnMB2Jr3mnUGUYbJRdYubKdogtisQKHwpSaWiWGxwGkvhnURniVsx4qvhigx7L7q96t",
  "key26": "5JMRXEjPeczh2vPY3UrYZNJDgE49ky1W34bSUcch7rNgDQ1qVioWuppni6BddnGvnbNPCpig5fiLrCPtWukoV8AA",
  "key27": "4A8VmeiN6jgcfrkLAHV2LjNDssuz7dENnPVprHLGZX2r6HHGzAFbRsr3utcw7RZ6iBKKJRNGDnVrRgBJcBmHbVvN",
  "key28": "5AU4EaLqX2zjYjh1bN6iGajJ53NKH1tz2VXzgpLHVwLYatBuo4cPxEj285RKqiupjKT1Xy4LeYJkHkt9e9qcAp5a",
  "key29": "58Edb2P1ZG2EJ1bwKmVArYbwkdiuqe39uVLK3rzpXaJQCe4dPKBCnBJR9rgqvYpvYqTchc3VUqKBWperFyNAAnbX",
  "key30": "3pxXGtiv6e5fAVygE2etLx1NneUfh7YqFgPJrHhh3sCfu4GsaqmPeDz6pu8AVBh57Xmk33sh8zawXjXaxTHQiPVv",
  "key31": "21jEoW1DmrvDrEwNjmm7AWjorjsupi8k1BNUbyApzKesnrTQ6uboUhJtUmuS8rPbbM1FStPAaVGsBWc9AD8ZRMZQ",
  "key32": "3Qg7iq3krAX46VXcZwnguMBUiQ466xxkAtBaTbdHg9PS41pUMv1QiRC1Ctksxm5ydhks3Xuuu29wFYnhA32hYUzt",
  "key33": "4XYknQxpqypB3WiMHp9edsrom42wTah9SsiXHtjzkDp6KZacJJkw5U8SWBTM3giWVK1hqRNwopESeEs6SJPkMVD2",
  "key34": "63VYA4uLjTQ6dimvnk5EBSf51LAMghnBYbY2mBiKamVK8LmGytBnJEmmi7PsyYV7n2kPvm4peL4dRxNxiwMttYiD"
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
