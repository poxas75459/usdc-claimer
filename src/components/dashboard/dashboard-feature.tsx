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
    "hKWDvu16yxiHWycBUZfvFg8sZU8jHNGZUQQSL5ot5EuJS3pR34CDKYPDksMXSPAVKN2RRMGYXfToPB7YfBvQzHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J1vnZVrvEyArqEbXHNi4NzFdtUPPJcaAGGPe5eUvJqKDg3hzpVTybkHc2zPsH4tHEawXMG9T5WhKckSBh7w5FDq",
  "key1": "62Hw2kxxdxgenRYJWSrTv7fqdM1NLBGuS9qpTQE8M8va5RX4LBVxt1BiYFB7c3ZDAQe24QF9TTvH2Ema4xuB97hY",
  "key2": "2YuvmgVwL5gNadikxGxQLLzEcFyxrW2edBmG5Zuiut2qWu2xab4pbeDQziHfKJ98SKMqkSG8upEVeoMQqWcTxASW",
  "key3": "4v6pizHnmULRoaJM4xqwz7SVz2JQaL18uMpVCpkvjy5DLQjppUaqJPUTAs4TED22FDYnvyFpYpMqyJrjVgPgEHSW",
  "key4": "4745FuPhb6cmKjTLwWvbcj65ZToQKXp3vtNA4qX7JWPCrUHBhruXJJD17zv4Li4K2FWfsEL8fHLV5L2LYBsyiSgy",
  "key5": "3Hn98pjZrFmbvWwqZVdMfjyVpbvfBhUWmupgyUoWNQuGEYVxhroUztzRUpPaToLy5pcGUwgqWBMTR725J7RVB4TX",
  "key6": "5EBq6vTzZ2haXSdJUL6hLGXhA2bYtxBTNtUbQP4smLFTEFxRsya9Ye5nTDQLMAaXrt6oigCJsjSmEzuh4c3yaC4M",
  "key7": "uQA7sNkHTfkdazoWTUQXn41Vz8sQy1xCruHoQ3sCUGs8eJbXQMRzX6S2svPvFy5eNqbnWjAkV559doAJXH8kJiz",
  "key8": "5Cqe9XYk121eF2ZekY9BrwmVdku6BpMzrVEX59DzhfFsruqj48WTb8BEv72fkx1umREheVSZHVTNHxW124BUtNXj",
  "key9": "5Lozv1TWegDVnUL7etYusTsj4mSSYzqowX41bVNyAnJWZKLpKETsJwTaTHD9q25pZVb7PVJBwoYfY2dskk5KEwpC",
  "key10": "2uY1rzLrzNqGLw5AaJ3HGxk249eZGZxmWBe2znKuiL2DEDDDp1hFbbqiTrsonpAXRMiKhWYDEYZTEZ5jKD95VzX3",
  "key11": "S9LqjLNaR2tt5y3yQJvyskz1SwQRLuJaUyYdXnUzEQuUXCgdxKeJ48bPGZp5KT6i6t7oy4F1wGSBCEgrhgkaGpN",
  "key12": "3TbwWHWw3TKLWSn1WL5fPSwmppDYbA96gZsF8GydXpxvMNKV4fm8DYMNB9cvzw1k2L7MrWFbSGSgo8qN7f1QrPYH",
  "key13": "3PuQ4NxjFKsCtANtK2ep9aRCLWh1XStwosoN4dmpoHsXGZ81rLKcsbubLsQqadzt2a9U3DW94gpUf3def2NHnNc6",
  "key14": "5Tnb63Sd3L4bxCV4qSPsgUAhpwNuJoc1rpGcD9LfAfXsjhyv5TZj5cBqHHbmxGadWM6DxD4sR44U9uwY5UysBcfT",
  "key15": "2eDsfMZ9CkcZjgXHWWBwAGoXmtUPq2GCrXXa4jv3AVzN2dYze5bx7STb5ZQQen2aHGrnQkAk9QmeMYap6BLHgP3u",
  "key16": "5BE5RgAFMTw9P3Ww8HoD9xaC1bfeZZfV4nkmwjWo8ru5AKVTtB5civwGDAzJkQPf2ZHxHzD6sxKoF6mBKJXikU3s",
  "key17": "65LULYeo34DZYUP1syj7NkMNRKUuUQHSZhtx3fUP5udbhezc8umKrrY49bumCnP1h5NTp5uj3juNwkeEf3UfYeSD",
  "key18": "4zSHpCjKa1DFvcuDQCQ5coBECRDxBtntvQJF85CmhnYJQYeDMK4Fjdo19ac3PqVtEdn5tXFGE3BubWhUGM3TRcTu",
  "key19": "2hEUs7BUpv8gyYcBaWEgZF67PyU1ep64ZUcCUf3pCaXG7M5v884evYBNYsHHVd5SyZQJyrmqMUQA5cV87yapLyan",
  "key20": "2fWXNCCJmduKtAoKoaWX5QHQuwVT8bYPJH4nubEFpJUsosf5tA6EwzSp6hvJt2fEsWnf9vsh35rra2ycxzVyzQGr",
  "key21": "2KrQ5jKX9HtnKgyoBF2sdcjMRMMzYGWQXDFDhe5rtRwkcDj26QBBbfwTgu5hCKL4Rn1uvHGMQQf6UeemjsSN4U1y",
  "key22": "4mEea218C6UaycE8D7sgfi5HMrpZByqr3aL3Ws4Fkq8iqLGN7iBypTi7E2X7VwvF7HgPiB5k5ZV9amink22xyc9H",
  "key23": "4RaTWPAb57wQ9JmnHfz1mE5DpeKoYK7wjAy1MixSFEedSf9uaKCDNC87VrmenDtajPzFg3sqcoWFZWMRhju92ZWP",
  "key24": "5xNAmxdWdzjMroaWTvLqjCzt4P6sLpvHLVoGykaasq9m2oJ4cUH3o7zYtW8PViB25TLask85uAf4EMjW2ACNZ4dM",
  "key25": "5tA6B8ATkyyWxjf4qYSMBqy3MXXZQuMNp5fULMBnCkDuod4AJGk78Fs1Prfo7aTx1mmw4jHH8CTn9Lza3z98yC5m",
  "key26": "mWaSJTmZ3ZRZ16qZYVkTXhygdqc3EDfHEu6SHXTbUXaPfJNT9xtCqGvNSaUbpgN9NiPfnFPTsEx66miSpdqnHtE",
  "key27": "4EdnySe4AsddWHfjuXN61mAVJGsczy6RPC44N4oqzzo76LoCD4iR9gK7BbvzhCWngd9QfMqQtGFQiGWnh7CHB32s",
  "key28": "2nEz5GAcVi2QuZ1ovcWQs2WJee8UVsf9fxVdgRa8PdjZzMLcFZ4MCKmMkALRaeJ2qmQ4oYtxSMeeX69JjnTzTd7r",
  "key29": "5KxEeHGpppcaVR4v5eJzg9QhkpGgaWTr9ZwA3Y9uen2CA2wjaDsqcT95iSwgpSStLryNMhoP1CCkHrDWzTbRM7nf",
  "key30": "xqVfRXqxz71ZxniDr6sJAgMLQNAgSWmas7ZmAjrw1Pb1iQJUogCexYMpN9dNPnjzZewJnd1SY9CFe519Ky7j6Ut",
  "key31": "5t2zmhP8omxGhPdxkF84HwRJv1nFTRVAyXLWMw6Dm1vfWPT6qt2DyBDo4xPRCfzipqfjP17phXGH9aWHCghWYuoJ",
  "key32": "4z6LQfKun6b7jiYRXApP4iVkrhiKGFcikfZnbj6LWizqrjtSm9Niix63d98me3RGLFpA3SUMTWQf9wYuaEy7gtXy",
  "key33": "587fs7oz63xa2g1hMqNtGnnuWZ5w8WuJCUKgbVswx84QZmrAGALkSSyi9ofo1V8JB7zxPrxtDSg8npbXoakcJUbX",
  "key34": "5ozaUoLVdK9NaB1sSbc1CTdjWmFKqktuKTSkxSrfqLrQvae5A8MN6LcimNPUe3iMBERV22YNDiHK2ToNKofdhjNM",
  "key35": "3cxBNvcutiYcACzdzSvPa41U5TmoAWmPejCHiZa5ZWxuqSJojWCSkBxTyAQfXnpxGbRNfBvDhNVEi4BmNTU6knmm",
  "key36": "Mjsnbebg1441y4gUNpYDYJFQauDk2ndj1Jbno246A2jUws92hTwL2gkBqG7Unv5TCB3n82tYexXjdgBLHq3jxQ7",
  "key37": "QWAtW84qNcUiXQX2xCpPgfxmVFAPD553FwpNap8NafY4CCgSCu2TzPWVVLe4eSzEUwAdUsCKwbFUa3XEjC7GReg",
  "key38": "ZPB7pWb2KzSKM968EUL5HNy6aZiBG7jooekP7VHgUa2tmVotB99qAP3hVvEaFkVkZ49tGHLfK2f8CATCFnMSPSh",
  "key39": "3vpxfJNkFYFzmG58Gfzs5pbDUDdAyrcE4R7fz2CjYoNCrqHjB1RVX7Z5qMmK819evbVwAHhKHupuBA8AxSAXfBMr",
  "key40": "56hDPH8onqfS4tEmNw2mDko26PDpoCgeTkgQAiVJiy9JtT2fZX8uek9TZ4gdk2K2JAJkm63w24yn3DhPT3p26ttX",
  "key41": "32zFfW39KRkRi8hHVWV6osJuUMRw2mspmccMH2QbxpqeNNQjUgs2yMxXzb3bh5dwLPL25gYqvVgqGVtxCepsb4Lh",
  "key42": "2ucjyihHpJUHEJf6ibeWTHraXWPRZpZE8fEwSbwnpXEPa5hAiSBDVZtVQjbKyMbXV9sXc1RFzBhu3Yb5ePYW1jj6"
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
