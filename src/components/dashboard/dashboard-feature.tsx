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
    "tcS2Nd8dY6cM3CAuQYc6NXJhd4Pts2Wr24Ndv2E6grm7xABBXAFa1nFZk4AoFTzdhybNrBPeCYaCZ9r3ywGyLz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jS1uUhEd5KsVgKFb6GBqkhuaFiw55p358U2jg4BoYqspigpRj8qiEiyzqPyeQZQQynFFDrpn92FN9nPoab92YUj",
  "key1": "5HB6oGn9RJYWUsUTZB22uqgm3qzNo4pEbLkwkgHB6Nk55yG6pLuC3whWntzuJtsD815BvWThtiNUiotrmxSpgdze",
  "key2": "5pRBaHo9szpqgAykumS5jLqgi4Vdth1DsXypgBm2dMQRSNQLiGABFnnaZJytyo3vBQMTpRGb3v3PeEgTuiPzmMBL",
  "key3": "5KuuBbE4n6sZxGxCefdo2TFeMPgEN6LVxCDofueBzsUxnrx3eWViLLvFLQ5BXCzgyCq58RwdLkCg1e6H47YxkUQo",
  "key4": "DZXknKRRkfuimZM27MJrsGk6rSyVnfxVo3D3MJzzFZ4GujQiGxzjPWMPNJPXmLFwHVkrYoNjSzRfJz9W4hPoega",
  "key5": "SpbYGykVou1Hp9yedLbJoN9h1tNH3vf4xkzbGRsUcFZWVHRJ3gg1XsuP1S6Dceo9AcK8V9JNaXWpjo1UkrJcYvr",
  "key6": "4v2uzCkx9ZAVvEhr9F5rE71Vs8i3ftJ4SG48KDcJqTVLmaVRqcPcYvHmipjYXAqZRBxumbDLpgZw8aHYPYu5LNxA",
  "key7": "5kbgGy9GfZDzkuGNFyC9e66JFMnXxgcjPYzLwkFukajcFustat73TPUuZqsERu7QjnYu7rfRwyG4yV3PgnT8JsGo",
  "key8": "5GeqxpJHn9m2esHK7RLd352sHbTipV9B3R1hXciXLy39pzv5vHA5VuxfLH7dvjDJLjFXtMu8rGkSutn3EuW4hqry",
  "key9": "enpXjAYg8ACwnnH5AsUFKpB6BGxFKHmHpp4axrxjarwBNbj4EfAEThgqCukoVzxk7Jr5J9PUbNgWfuw5BaAEaPd",
  "key10": "qa8e7pBCpQULZ1PDsXTuWCHrGuvygQLFrL1XAAdbpYtsgH2K1zgyvakjqmCZdQqtTbFi3PPYUeeDwwS8D9BQBBy",
  "key11": "3bY5BgGa43LretcmKKDN5oCLqYNnephkZgXmdxtEzmCzGkkw8dVqrpzARh15yDEjBNzK17DsJePJVwbQfqMsU2eU",
  "key12": "4sszAbCXTXwHRJEcmrq347HCjzgLBPYpgnw8QsUj3Hb2kam2TZTUTfYbg6HiomaugaKDq3tsUEyqo9HVyg4t9CMn",
  "key13": "62AstDLQjCe5x83cNL4GYEGv8MiQAT8NhSGJTkeGYoL3EJJtLn6uTKekrLpiC9Zd9ycg8XzD2RNzVHXE3zyAKJ7T",
  "key14": "2G8qSpoDZ36pJZvZsLPHC6wqeu7s9vhp7KwidvYqf39fC5dXGyNRksNbddLMgAaisyutY2TR9tEfq6rGr6M1fwwj",
  "key15": "2WKmZvVcbyoXYHQdFqjZVu2DFLiTu99N6RgZ5ugWEfoWmFnDLqBWBD6wN8ftWZiCXzKGLvEATEb8yfwDuWTpzPzc",
  "key16": "5SmiN7ARdsUKn6Kkyf9aT9KB2n7P1t44D32MnRESwFpmS41CmybbYneKCzaM64RMEzwRcdWJGF5oM8et9xieQsoz",
  "key17": "3yY1ooe1Vt2a1fCYWGENTnLjXPb6QvjSswFp6cDZ2E1yngUv1TQe3iEn4VLgEAuZeydkGov3pPwcRPReC3wKZESg",
  "key18": "5QAx5RBVqpWa87pqnE25fbf4Xd5NxMGWnYAtY1PfhkMvQHEVQWhenXuhm18fmbLqi7Sxo6425zrT9LGpgHRMPwkG",
  "key19": "2eWX2kzPHL2fPZhMzxCYQkiDkECL8pyEtDCH3EkL1YnQCmxRvkwv9qtuwf6z7gF58jqPhCTyYF9VgS6Fs4BJ3owx",
  "key20": "2qDECoPVqLsfxPPidhT4Fzum6hcQ6MQnrGqWXkXL4VJ1nPbyQWjKNczrySghEA3KahLXkZ9ZnUSGNAbhYs4Ajwzp",
  "key21": "3WP58TxKfCg2rdTwq6pR4yEtw14oE7VRe65KUpJ1mDMUpH7Ro482eNjsdhhJ4URP7BQagzATM52wn94CRoz6xiSg",
  "key22": "zYUNMMyKn4DskJ54azirKYgkftU1vBB15Bd8BBvFy2U5joELu4JS17CvnqZkiH1g6Jmaeranmgne7jDQR2kvqte",
  "key23": "4E7ro9dyi1CKjMeBtAwAxpZbKXftQ1YNbXqtvUQVEjJ1W8q4BBCcFjhZSNMyC9QQWK8FzzjNNLPkH7Tyh7JYodCS",
  "key24": "SR4xxbU6TPgfzxY6wTBsFjKubqo8EY5M55aVUtoDdm1QucgfXuF24fetodPfPfrRLa4SvRydiAQZKxn9DV9K4xb",
  "key25": "4LwV6jFMrFYJWpcHUkuTSLgydos1yF3HGLVrFR9mSHxAbiQgH9h2AcnV4wY1ko4cmvnvRywhmN6DT7yFLjoBoi99",
  "key26": "2YZJyZYzVsjFhh3TcYohhBBThSLN3hUDdGVZpM7F2RjcSArdvXCfmmqwZs4F2de28u7yepLDHVBHgX2R4aPHh3sn",
  "key27": "ALEppj2MMZFb7qcE9sA78HvbFLLDbMFKErTvSojiTrS1B5nVVyNLVKcKFSgFH3r9VmuonRB1xFMF1Lv4Rvp6898",
  "key28": "3ewdJRpob5fbDHUnhwXAa5DswEt9oeVGR69cE4zoQLVNaVyPoiSKdRcgVkfj9buc3idyAsk75eKtLsAHUTHFryBs",
  "key29": "5PjVBshFpoV45s9WYM47oGsK73H9M9q7BSQahedz1D9AnYbCKYEB92xUeSMzQsU73PoknUES76pkKzt6ypVPkPRu",
  "key30": "2tCbf2BwKtM11fAe3JQAKisZvYsjKvppPwF9ntPEuKucHyuQ8RrpU5RxFAsaeLQQfNdUBDfo931HnAPrxFC4Jqvy",
  "key31": "3cbehFv6jbfbysu7agpAUkhd3ntymBCrvCfDb9JMuLBm81JPHhqDBgfCtAHQyUHJNpL2DdT5385e7BU3i7KMLcBZ",
  "key32": "56YWzEwSdWAu6PaG1yGc6ERcP7oxsY1eKEqyK9EyViGM6PMcwx6th4j3XRbJLP9YQ7s8xnZKdd8Juer5y2t4ovEA",
  "key33": "4Zvq5WoBMCxnpoPSkEk3BzjoV8tfQcWEvDKfEy9hpN4etTdPbhFhEt7CRUjApEhj1dJeWg7DAmybFaRUq6eoY9SG",
  "key34": "3JRCbiF32JDQ4Wwstn5Rg4gDuM6pVdJQi497enkagUkJ7g2Q1E68ZrEeTQ9LZt143kbUSvjgDQ28Q3YJGSrBSjaC",
  "key35": "2ytvbsqWDiuDbMP4KxaHjGYt6mxg9W4JrCHRKeUi2C7B7m3nHPVgiTtFR9VT9QJrZYcA1tzJHpKbi75aDbrTVAom",
  "key36": "5PtncJh2YYLZvrj1TMimJHc1AFa6AoSX98oFn4uT2NdtaSKamwCGuLxHY9JCzgsPKF4pxrU3mPVMazmWPdXv8uF4",
  "key37": "4srRzNKEHnddKkfYp7gFgEyawcBkzPkbrh5s4igEBq2T5BUqD6YhiatJ2iBCTPvcVmL2Yy69gAdF1uV2uhEmXcSm",
  "key38": "4T2aVCbUGCsZn2x9C21f5fAdvrMvGwqvMh4WTWXpvKHRJsMpRKxtnGYEgvhNHam9aa5DvkHL6eFz1Cb6ueHUUz62",
  "key39": "3Fb1yi1HNje1LNssrHm9iAzsVFhPcwsDxY7R8gMuSFJVP8oPJGiFb1aK6RQKvgXunSEoV6Td1FzaMtTxueVAe5Gp",
  "key40": "2UuXJb7PavjzWkMMNPDbKC11UfTK2sjWgraMPutUqDqBi7HvDiWg236HWBYz4AWAgHmrYfBw4BBJphZ2XAPGjqC8",
  "key41": "2EZdX4ChEpCCRuq1a8sCpteqXeo9hmCKovq4y94bscbhVfjqCSQuw1FXcu1UB6Q91u97AqhfgPbqSSEDgPfw77kA",
  "key42": "3wsvWhTCp6SXQ1UBbyhdydjUg3KtNyLnvdrHp6favs7aRndBXcgkLxhusF4cZ8K3aLyMykLubZKt9rCpA9ZqiZ11",
  "key43": "29SAjcFpFwjhiykyQbWmBDUaPJw9KX9rZF8cYAqFkMkku6gQShiv7ojjdLsBMQWsA5N29YGQ9RN1EpY4nhAwNQ9m",
  "key44": "1jzKiMaFi6VavqZkER1QvKgbGAoaZpBeHSd7q9yH8bA4zc5S96eghMoBXMMEF4g5xDYxv7xrLZcsaCqAx4qXbic",
  "key45": "ghosBSGS5x8UULcWFT2CvrJCZScpX2cLwokSA599a7679a7CfUEs6gkf46HygkqxtFiWdtLPkzCKYf23g8wRGjx",
  "key46": "64pnn3esRGEx4TFQw7WqUcTzG5u5hEeQDo1Lf7SVfUgFps9kpBXwFGTmRTCNv3BJdYBdPE6WTZneZMhfQmZMVheF",
  "key47": "5iK8iz6n2MoAfvaU4EoY7zqA5qa75Pw2Aj8tUBh94ESYKgZkvwNZ1FyFsSUfBdbwaDvvX6Bm6E3ZQBknDjUKfW8z"
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
