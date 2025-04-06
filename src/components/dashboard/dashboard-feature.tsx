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
    "2Xcd7s1qSpLHMaNaDUN8fkobYiQBLjeR9xCJE9wycTvdTfpMXkjhSSy8hGct4gJgqW9fCKAzZ4Ky4DkYBdF9uATP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22RebnTArZKaq7Bnq8aYnSWD8pTeX63ZEwoF4Uz4bCe8wMrfcQryMRosUdrug8ywenMRyyJ9izqEK14Qg8bQSZPV",
  "key1": "3o6Pn7tWkthDjcGJXyvixTGy7De3QPbw5kk5VQfT4bP23zbi62ZUADJyANTMK4Nq9qn6F3uLdYg3CLtUxM4ebp93",
  "key2": "nYUFWgGkA5EcbAgZwFThg68ypBWyQTz6GVcm8ubn4fAKQpgDYuiGuqUqiBYQaZgKxfqvT2GvyQtxARjJGWBCSht",
  "key3": "5B6tGZQzGxzsRE1HmwUrZuwcTfSFD6MUWfuNoj3SgdUhzTdVPxe3zBagj6pXrz8qAcoVxtysU3y4TVAwVtHeSSW4",
  "key4": "3UkhyNBRfSAftDGj2ZqpsdJqTDBPAAtr7oSXbDiueFzYmvQWRrFyJKkhWFNdPGU2vknkWPFabDnpkh7At6qtxz4Q",
  "key5": "3shih6qyVKxFzAdypQaKqhGpaM23NGMR9wPdAxy8ngfsJo5KcVMJBk62E3WYfUoQdSoDMutw3WLqeXcTwuKtpKAG",
  "key6": "3si3BdSnCry2n9ovgdJ7hXVZK9cFNjyTncXpgZvbcQFtF5y3gHamit5FBrrSYcp95AAnZtKvYkaBwE9E3GAoH4wp",
  "key7": "2HmRJFozgFpiSkf6N6SFYBNqKojN3LJbbh1oPjbzk8ffvCQ4eQXDa28i26pkojgp6iBJJeQHeGQsyPKYnsKM3Rct",
  "key8": "3bn5MR1iUSy3r2JhAf4eekLJwNKd1dNGjk3ciGH9UM8gGrxbKgpRBaeZsKiZ9ZtiSUtHin9ck8TJH3VSEzsY7nzm",
  "key9": "21mgrQo9SM5PeENWMnh5RTxYRPrqJfMQGpeDp4WdU57fwqQfyWsYjG7z8FAoU5VdC7m7jctLHFJ5CJamDYhof9Eb",
  "key10": "EVLjtVi4UXgN5PXN9uwnBiYFTkbMqbcLTupkJXK8aEQAoHw8YPpfAeNoF59rULEtWjiiVPnBjjHnBsV2MBfiFA5",
  "key11": "4YozEAVSM5N3FuyZSc2oE1XPXKiGEBF6pSECwSagkjF2sqhT9UxzCCUVBBSVJpK5BoWv4dXrkNxghk7JHnk3onau",
  "key12": "33yjN3ufqmfJiELjBtuYHZozzFHTgt6CprvmF1AP5eeByQGLU3P1Zx7eguipfy9u5Kq8As5pUPPc5LYw8jL7itRW",
  "key13": "2efboW73NZNsmEFpZdgXeEuDKMdvaukRPJDQqGBiGtBxbCo4qF7XPiVv14BarvaGkGmwfbqZW8nd9fatFdGaGGTr",
  "key14": "2Z5K6JG3wvMDgfDCpT33fpCBXJA5SnFLm9aSree6jj2W9dwrXQXpufB2qMfPiAonaqxguEZyzKsPTsTdZfoNne4F",
  "key15": "JAPhapxZ8ev4iuZhyUaSLx4AhjFND1aAUTg95RhVBKrbt2Z6MQrbByYMAbVwpoemLpKi75XPMu3HnYrvmmP9nX2",
  "key16": "w7W6cw98qcedeDRbypDqJ3RSATeg5mWr2KUwC3Rkv27F81QuKwH38bWvdoDmqBEUrB9TXKvLFtdUbhHEW3MdRa7",
  "key17": "49JPrF8VVCgCXiTv6UWfxY2mP9sECDGUmj9AHjyFJQRMbGpb8Xd6Gx4HATX5kFUqk4gVcENekGq8fnCfecSugNVZ",
  "key18": "51UJoDjaNJEVBFhX9EWdsiEMxT8UXHFi5R4J7XoJxk1LgmqJr4UJLTwtf5kxSBdEdwP4nbgiYjx4JaZUM3TMzLfA",
  "key19": "3mqUL4XDnowVBBH96fjH3CBAihH6bUwMjhra7qAMfA3vbtJK8qGs8xjip4PwC3wpkiSpgbCpw3wjW37otFDQRGj7",
  "key20": "VgZJ3fDt6v1zogG4zA6TSWB3GFqAH9rh7dcrSue5odhNiisMzqM137ztSa6RnTfhzdtapk8JPYB8Fyf7z7tTz5h",
  "key21": "jfPqUw1WBL9dEti9Am1iRdqwK15zEL7tvHQMzZ4wrBVNSyMzTe4QnTT6CCZMuYUi354DXeeyzupALsr641Hydqz",
  "key22": "3MExzrRSRJsD8YeN1AYYVgY81hpFYnpyWn4nisc8U9jk6SgyHyE1SKqRYZaWS6SdnpT5ajujfT1wjdzQcoxGHzqA",
  "key23": "UhJzoM5KcvDWwZCnXbpwPkV8D7dStdTsdq4L6opMSiiP5ETtK3Axm7ZVVSg7Yz7AwcrmRxuPKr6Lx4EVdgW4Mkw",
  "key24": "5HLdddbKCiJkzLbDTJEaHqjW1jbD7rZmKapdqQ82abrfeJQZLBeDzB8AzxyHGLcsmxoNLLFiN67VUGvr2yYDmrz4",
  "key25": "k8iMYmVq5WwLawNNjjmbPETf5qYayW7vrbCs3BtYzXhdWno2ZoWufUvQYpip3CrCemRnqRy1zvyyswfBezaHniq",
  "key26": "5kmcufN93wj69yAUaH5zE8AtHzfQsNuwzGiDVZyUtx1FfHVzVsz3TfpwPkfBtvtZCCcW2ZZabuFa343b3oFMBxWj",
  "key27": "5cWuC8y1hjsdRwzsv3KAkHn7ASxFALyxStjuPN8JD92188HFN6nE5fqwXgrLiXcpahG3dtCvmW8gpnmekEh9qK6C",
  "key28": "2qvtxkv9Hx6tknK8j9rZMTGbJB2cD8NWUineTm3gL8JQ5iAsu7Gq4RrZqGHz5HYDjPYqFMNuzfH2FX1T635FxEXX",
  "key29": "2S7xxH8iDc858icFjojJGxn2jbYWwu7vBsYEcP8WQYaGwpgMaabfRcat3Je84thHMCT3zMxjb72heMVm7BUWYbbh",
  "key30": "4myt5QSMzpssiKBSxiKHSfjmvbua31Ums5tNT4XwWTRQY54kVAvZmSf1ajk7ntGzZ1AhgbuAgYnTkAPEGGqzYgd2",
  "key31": "3ukFKBPsmweujRzUhZwKDDKwDau5qjssJYow1GbNnJqDfnMV1AUn8zTzYFop7RXSSXqGJcdb8jGTvYqHtrzsRLnJ",
  "key32": "3AtkUjhx7nkjiwxwpVnHneKX1HjN1EwY9zucdA2ezS9AAV6H6BwASprXEHhHUdyUfgdp3Y4zJcegFSK3uG5sXrhh",
  "key33": "36mCjb1owooPmituJ9v5kKr8YxBZMDsfFGXUoWokxTtoQadmzhDPDH5qfZdtyHR29YSnYgVXctHBRtxgkdemLk2W",
  "key34": "48F3KVHc8GcSVFm7pqbEqyYU8vAptc2SzujMNcuKJvfHnoCikC8Gg6a7fW9tQ1xdcBaN3NuosQLcE9gd5px9Gup1",
  "key35": "UxCZCuUAwN9JB4t5Pxsu594fmVP3QjXEFjh4jxsAhRq1EQZ3o6dN2FBY8v9R46Epr2YDB4aAPXJYtNgy1j2E5uz",
  "key36": "5oXS1JYh6m7qsRqMqiTYGfWtSDFip9JfmgBRmTpr4SZdp5kn7kgbzzFAvbg6SZ734yY62AYqmuCeudBxcdJeiiZi",
  "key37": "5QBiHKvJgHmjPdgwCi8cxRvcCPyHh3yVStTiJfHyayrzNX93aYH1rGiMYyFxBSzAaya8J6CLFGwoVf5ToqBc2yZ5",
  "key38": "Jdkwbk9AmSZ7KidYPKcnm3ngh3Prq474LEJLz9Rj4nzfauVUgUfWy2KEPiLuacrsUGnbRoAUPUSydxZ7uchmHHX",
  "key39": "5Xm7QpfiGhnVAhqq1LVL7Rd9pHno9DZJ1Kk8gabKzAGvZ2eBgTpwcC94XFy38mmnppouChy8AreRHt1MkjBAdpuL"
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
