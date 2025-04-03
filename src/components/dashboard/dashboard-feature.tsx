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
    "3JhqvgKgyY3seeyXyVFRj6ASa6osY7BCsrdVkTpHvHnXYTqHVyE4K4dWPS36raTzby2HV5QqyKPxyEewzxeGYnG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "guH72U5sALa5pYXWt1NtW2tCTt4hWLBTJu9Ziu9Q2ZxDQXq8hi1KGp4SjLHND5tJpAiho2RyDcajkqroo664Fie",
  "key1": "4DZ8AbNNRKMNqofzpTejd92MzPAXcpkntp3CWY6Fo3cxk6xeFQDCCrH9xdK6Kfvv8UA888eA4PjvA2aRTrZeE4Hu",
  "key2": "318Yj7D6LKu3f7Df79veTpbfAEwgysFrAfUixefJCUBchAo95adTF72ghfU8hrWJYDr6ExpPLVdyAKgYkqZ5mSLU",
  "key3": "5RSzYjxGXinMnM3YnrXgiyEZbVRVHAcf4SXaRgXcHkaGrsc6eSDjTGN6oGUNFNV9oG9BdZjLTThE2UyosffjuStZ",
  "key4": "KfzYFmmfvGYvoj2QJoC8TWwwwhoDmxoMz3ADE1aP8mKohczC6gEkwf75fqMV7qmNqEzp2icj8DHu5E4EmjDsAz1",
  "key5": "5us2WjdFg8qLPYsBF7k48xybQh4MrmjAsMMGPyeGXgEUi3rxt18sXmzGe2SX5iAf7sP1QdorwCSeY88pWuXuHCyy",
  "key6": "5viYcGLxHvax9P3zz9PGbnoFLXGbF9vbRSWLb46fZUJAP8EFTqRraCCmXudRgSEj1VpQf47jcw7APQprs67h9AQy",
  "key7": "3ixgm5VVYjC3gV96eaJMvwDS67p9gD5swYG8cAogvm2VNpRrPNKKHbrtLWNgHirsHissg3phcxBeFy9FMw84MbVY",
  "key8": "4G4398DxMt16knhtkgnSxVWw6ZuA2iPVXgHfpMkWgbTrd593z6e7CQVYCUucHu7M3UWfxnLrUNQDWSJaDbnmwgvg",
  "key9": "U9G7BjmBT2FZEoFbAjBuXb9gZs4Ptp1H6HSdYNVGWduDD8RsjYrJbr4jtLqiqAfb517rMnui45KdbXfcXeevGeK",
  "key10": "5dQfi8ujPw4EkDtBjVsbTfXu882B2A5HiogxSsYd4exiA1PdHPJ7o6d2ddDDeMrS3KLeVHxDJdTy14Jsf8ii48zS",
  "key11": "55fpfKwXDP1RVPbp84M8r47wyjdaJZtsXhBHkWyM6JGk4RGU71rcYP7JTzbdrCjx826iUrJMeWRwG8ABMqAjHB1b",
  "key12": "3kocfvd2MQyze4y8kSxAKm8yhh4WaFuzQZ3JD8vUh55yYg4poaYdycAiMZMhm2nAC8j2joPmr2dY7bVjPsyCio1H",
  "key13": "4XyKqDJE9k9Yfboq7J6Yb8uugiy8o6PLCFY1wLeKKVa641j3VLLbkbQ2aXHHSCd8qwdmQ3pWs24G531evkabxtzd",
  "key14": "37THc3JUUWW2vJGRrnkC336T9kBZwgjVeoKtdAXWXnEbB75tpe8xxFkvUSQBuHBY98agEQT3yemNR5FwdNAUzXnQ",
  "key15": "rfrez5MTtrMvZ3hbkyhgHR1xcp4hjM3gzUddgiRm3DCXXAaz3P2pV5GDYBtjiKVxg8wP7ikjuTkfAnwqzDMPKVu",
  "key16": "2ZN7kNyJjxdB6wpj4NcQbcS9SJ3tE9tS8bYGeSu8mkvo3TkEDxzsM6jwsGKbEeVbG9m2xZiwhqztZc9NnFB5VfKX",
  "key17": "3oKNmhdRQvBFUh5YwHywNg2bjFiXMeePxgjKVcHD7vZuYjbUgJBAo8Sq7dQ1ZhaefrgUG9nmhg16Mh69XpbNdSVE",
  "key18": "5kiEimeZ3XYbS4mtGhrK4diUJ5qHw63DwCrVGUxMPcnwgvgQgnHRtt24okxFJuzmYtvaJvLRPVqhd7k6s8kkAigu",
  "key19": "pJzTgbMeJqrKBRUST5Km9tGBJyqgJeCv1ujPMTuiifb9G4FdG8DozrjdJ4Qqu7d1eMNs9nuh5xGzRwAmY75vvQp",
  "key20": "5VMhWgaJXuojZCWswg9EETJTJF48nQcPBUYAAayieFYVSamiQwg4jBNCCPb3yGjjLHHpZZnzv5mzSwKkGgjqfRW8",
  "key21": "49DgVgW5CGHJwr5neYqM6qRoaUJ72enigZ4uAqgNdv9tst8CHBQU2ER38SqtXknDwcPV9kfgqMBaNX1LHTRrgrWC",
  "key22": "3Qvgw5ST1jdR8QmvqfCxg4FN5LUazqodfzw2GSVEuj8jRzhfesAyVh9aZUf91NUkp54jTmL1hd9phewCqF7ZwPmJ",
  "key23": "LPUVGEC973KEFac7n5S6z3BQQbGqazYtGEJMLBA6nweCYAVzsAzyJcCtB1gi9nbt4fkBth64jPWhHRFXSUNPErL",
  "key24": "sU3HRxTe6x4ne1H1yfKMU7Y1ZQdnSJ2QAYnH8CarCsomndpFaJEnsMPirqGNpUgtH9u4VCQGmMnryehW7gqUxSH",
  "key25": "2BhmE4C6G1LSZp6cZFyhwnGpakKuShgJhaqQeqQqPkTKM4XUTJZGjFK7utMHQzyovDbosMtQZ6pjmvMK95MUHmAZ",
  "key26": "4hX4zbp2w1nEpvb5GSwCxfiKzZEm3YQDDVkUhPdsR8jnoMVbyd8iKHtRA5iR1Ujn6dhhpNxNdBVZm2B845oFTfKT",
  "key27": "2rraZnSqGWJdmDkihgL1srjEh4mDpa2ypuxkUb9LkGtL6FbfMepCBFtmp1FeJWCJSK9HS9Uo5vZbyDtf6J1ySw3P",
  "key28": "4tyJjo3nyq6feZPQ5CaJihgBLvdVfMbrSvJ4VA8QZQdY2amijBeZrCABXvtTM6GEi7HKX5YAQFtxsSBrZ5pWZjyr",
  "key29": "2ssaSyzS1ZQ1pBgeZ1Bnk7ZKmSr9JzbRyh6QkbvLpQw2HSrU494v7EfXcRfyqP4tkFgfZ2U4e5wH83mCJajRBpCr",
  "key30": "4R5XD1Ua6HMByMv46k2xrm6F8AshoXecthGS8PSTZUuQMbieF4jyyn9BnqjrFBKPQDMgJpfSPZSgHbNPewD5cVUh",
  "key31": "3tT1NXPoNe7MJwoZG43RDGR6wrwmPZoeF8bDtoYG3c2EKQgUMiZJC6PyrY6bU7f19T11Z5h5MZgPgvrSHUC8Noif",
  "key32": "5nHcTJYhruhhfbFYCddAWPTtXGo2b9X1gUps1EbRY94HAxx82AuG7VsRRtrV7TX6TVZm2ZVH3aZmHtxk9ABU6BAG",
  "key33": "4f1jrWCTGF7pYcjmD4t9WDkCvE6EQT5VrCUUVc1VujfJQNk1esVM9Z62ctVcbixJyCaLhUR251P5SaTPmDfBo6VA",
  "key34": "5kjv6Q6sn7DEbK8FuGvo5CUvEi952FepaqY7ujT3y1JGXgfFnUPihQpasTarHa6fzjTvxNdjcHE9SQLbtdSyeCTR",
  "key35": "4mcQyzvsyB4Zrq8JxQGHfmJYbrA1U4ss2HKfMMqRQQZgEtJqnzNJ49PHZadVotY218tpiTbEAN8XiQ8NQF7RmNYq",
  "key36": "7e5w7h4453znaGFKcPG5rGVEpfFdCi6AbucturdkKwcLuPy6uZQBJ2QKow1T3DNsczwa87S5nSLfc79mCnz2xEp",
  "key37": "4vGoac9U54HeqL6Hoew96eQ8ptZDzBjxeDBb9tq882EX1uLvDAFRuiF5fjJkm8whn48kv1DehkPjiwnA2VhWmLMG",
  "key38": "5Dk3jFWFd7UMyTAvguA2jqR32cNN9wamH1PsTgD39s6apV7jSoB41vjxz44sWNrBN6XAZzVGYmBk4NUjUsBBZSuz",
  "key39": "kgCJwGfPoWFFvCJFJ6Wm6iKWdvPs9v8ETfNZyxCajs5XwVC87rWGDcpJCd3y2cKHphMdYne7TBDjyDVwMA3MvPM",
  "key40": "3j1bvUB4TQct6AS5iVdM9bCrMcbiub8mxHrm2vDhRxJ44QPNU8ynGsfSVB9hXbndyU2qfWaHg2Dxvy9j4AP2KLvy",
  "key41": "45RFA4h7awYiMUSLYkiirSKYrZKCcYjYfVTH9GwDV1V1hDU8khBZEg79Y5tWHWnsh1AbvLFpko2R9Tt9jhrzTthF",
  "key42": "5YWU3gPy6qrruRiHxR2ouwVFb9NjNAbna4rJbD3MC1YJV2gYFPCpUnePogtpgDvKA8xxveusizrpDQyXatDswJKU",
  "key43": "2NJRoiAtM1vQ8GZ983GCiXi1y75kdGdtFtg8HXkEFqAcNc5HZmz9NChnSETmckJ62U3j84HVy99CF1dFVjCxRgkG",
  "key44": "3LaBw38ybEw1Qb9dSdWukTKmD2kxBUZLhnGyPejucoV9mNPXCJFH3fUqepfm6D4hZU9YMGG7R7HBYTJ6tXwqY4wS"
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
