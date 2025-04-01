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
    "2xuVny2GZSdzq1xktyxPx9e71i2e9huLwx7ix2Rz7CwgiVkP7imAaBUb5eJANT5USdqb9mg16zPNh1TE2CdvbYk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kHf4pZwz9dTaCQcu2t9oLDSX9H2LFMto6hGMK1oVy6eTXZQfjQdiQU3nT5KR8cqTCtmWwjKZnMtakV1sxy55s9h",
  "key1": "5VFex26HdPT2sf8cKbCX65miedpMxKvFV1fH5UqLcp1RpPUDtL9bPMfJYkkB6Fw2RsuWGAPi4tNJ33CdbcMiTVMh",
  "key2": "5e41ZLyKXZW1NDAa7cZChJUSynXQGe6meRm4ACfBQUQXXEnVpjvr469TXjgDjj4jHssALDsyhdfNpBUFiT1PZHb9",
  "key3": "NyjF57TXCJcfewTj7fg8EHjrEmqjpCJbQDpBXJwvMqF15H2Wr1AYjzHktJUJN9ToiKkU4LrcyLuRwr6Yqm4FDK5",
  "key4": "5HEvrdqyHNTN7zLEgBCsoRUiUXs7zgZstFKbnN5tp78mDdNb8VcqPhsfzXp3XezkKHNcVuDHfQnHQJrpmuFYhU8y",
  "key5": "5nqbrzz9FEmNT9SJaZDGfZd97pSbwCrpCmuTVPeCdWMokECWpL4Qi3FYDdfS3uJAvkCmr8YLyUTgB7P8bnTTL4hc",
  "key6": "5icgC7MnswqnZqYAF4vkF1Nw3Pz72bAsydG5syRfdJSY4UyTeVRW7hWn21ZtCjWAkm7LmWNsu9TexaA1pQ1y4VQ1",
  "key7": "bKZjTaHzjBUbVuWCeXCitgfm8GFqcVns73bAJeWqGf35WMRsFjXtm9eSLMQdfeYmTVhCN39T4fCWJz6YnQiU8v4",
  "key8": "H6HgphWho8oaG4QLDXBWYwrXcnRzKt4zfaui5R8s7Cs3Gcycba3GM1PrAe1ZVLkQCLsmPM9aYR4Dq2GD6T9pMmU",
  "key9": "9uvCQoR5986cwCsVKm3jk5r8ri3Q2zGbD8EpQJj7UvW5cc9YiNzCBGocKS14aZ8YmF3jCa8YVWSGGwoycYtE6vo",
  "key10": "23fx1Z8z5ZYfqMdhpQkQpsivwUGWk7gHBXG53EF3ZvLsLQkBwmUVC9zWY8Ax3pE7GxYqAg54JQSX6H2qAj7XKKyk",
  "key11": "4r5bvbgbRRjx9ZFVsAu8eicmPaJfmvK5y8viSjdSF3DdqJvEJKydj9i87rshxaqwneMZpQh2Zbuh9TYFuAsmn8aK",
  "key12": "3y7P8bC6pFV3QrCZRTf4Tj4bs3DFJBrcbBgg4tLhecCaLAdKcT4qt242xuMrVsgJc11FKGCVZuoqfDEGijV2Cgfg",
  "key13": "5thqWZpea9U6atJveesJ1gb692dq1PdQg8rHn1vu6m2TP34e96d5ddnzAxkrm6DU3MMmuzkitgVJJvNPz9EZnkP7",
  "key14": "59mumnAWncwczgJaoA9QbRZ56ADvRqZP1JCbLSfQBwncTZkW7xJivWUXakjxfdoChJBuvwSuQDsMBuwpWqscmoME",
  "key15": "5TB3wciAdGxy8fxp5DeuPr1zj4iqPkoZBNNQgKGrXAaiTyoPLKwpBnM2oBUMViAVzUnqqVzc9zj6UHkM2vVe7WbV",
  "key16": "2FTCXChwRajpHd6y5Fg6kKo7qu2iU6joGSpQp3U65GkAshuC3AEzCHMZ4a2vmpetbMmnLyvkiNQRjbJyYWKPdn3b",
  "key17": "3aBXpNrnufve6YA8GHwwgx5iNmneHaa9eAbc6vP5ud9XD6GhgcXzgcuyNMHwogTsmjWLRQ6HyzuGdcwCU7C2AHis",
  "key18": "3X28r2xDi2KxPZta5C7jTNjE7NJpWNS4EAAqYYsYxHqeWUac66A4jgWSfecV3ZWKdXmasaLy3NGpJywzXwHd2jqM",
  "key19": "5qYK4bfm6bGh187QxwpZKwMwr4B3UXELq8JqVWc2CLdRchbfrsadHankddQrkFmvtoqbzbQJSjYZKa4KL89aLjCd",
  "key20": "4LsuPTdCCq8KCztEyhgaLCSpSYKJjvyBj4VEjLSfBGETpX4V3ssuZeTzu2phuJSxo3yFyDigZjuHESTDq92K5c7i",
  "key21": "3kCRhGbaoR6c2UyQi6Yo1dZoJ4U6ydXhd8TY8zuJFEN9pS9nTpubnuorJzF6pvnBFndZi1PgBUt8v7C7uD6L8DDf",
  "key22": "4mhHRhK8eLqbougbgMcymQKTCPNqQJi2aBHdXfPoZqgQQQY5pW67u3gdWnezckgKoYAs7or8Dx6Cty1XVU3yPbvZ",
  "key23": "4Mm3iEQ4S7xrCiYVy7hQLoucwe7U9dsmREuGuaN4RBa1L1YT5kngQN2VH4VTiWUCNCScjXyCCWMNHsYgFMdLwjPv",
  "key24": "39hFv3ddQS9SBmfUnLj6qLofdCQfustBUMzfMwquyV53hcQ64ptneNtfuwL5B4Uz1wng4HE8gXNhpp1fPbAbcMyL",
  "key25": "2YmQVTe8cWiepXWqYVec96USnSjffrrTRXYxg2QKxbhPKJts87ebhV2vgpb5hpmU96KZgTu1XdPbSPy22fejynJn",
  "key26": "3KM1NRR3mYNRkyMbnagoTS4JHx3P3GhLfAsGnnvN329Gi4BXkQxcUxRXTi2387Rj1mAvwKxuCtTCZEPyssz9HnLV",
  "key27": "4k6uqac1HtyoawVXpcDHZHas38SF5qXUZSuAL3ACPp4ddm3khTgWaWUrxB7tNjHhDeepYMg1W4XmMUnQViBRmsqH",
  "key28": "2HCVMa97VMGko7okKUBxBkkfpwty1toMNc21SAbhyjBT11UA5zRziit3exJdkdR3iX3ihRuLdouvx5kUJXk7kzag",
  "key29": "z5r4mFVcDKAYrx3uxzsrVyXxMKcnjNGyiksET1yMH82Vsf5wADMKx54SCSbKTtQhg47auiv4q3GH8tLoGTqC6us",
  "key30": "3fLxauM6QWQPFDU6pN1YSsiB7bQssDB9xtzMvmsUtCfPBb4cc7HJFWheWZ4iGVBFVxbKDPjy3eshgcRXd4vQpRpe",
  "key31": "4jL1eZ4yPWPWbcL4Xa1GmT1LurP1x4UEkwvTxTZfTpUUzWBL8f2gSi1X2VMo1WT1NZyWSXwicWXCVoQjH1s26q1q",
  "key32": "5TWqmzBVpvMP1ZGtCHFP1x2pGgrtcGmpFrfRpFB1sAqvoREz5yVF9yAiQ4fM1jzQZz9omYDWpoffBaSh3WpmjQe9",
  "key33": "3so8DSNrRxXWfGuQmGCmG3bxLTNg3jsVxuCxfzsKnvS4FCnKbbz9eS7H8HNCQFWVb9j4PkGtkw6D5zqhZ2ZmcPUZ",
  "key34": "3JauNtxX86W6A683wKXXoCPqLMMQH9UFoSTGdceTN7shVctUeXfmNffvUnwMeB2YDUaC9ocqomvKw18NHSZ9fKCo",
  "key35": "55sBwspPjvMz4mNqtLei84Bjv3JWh6m3PLssVL1wQ6p7ucxF3nY4eZG9X9FLXPJpczwMdetHVuiP9zq3z7nhMh8H",
  "key36": "5zd6rDSy9TvanrbrSuLi7fsSW4QV4Lyb4B6wBX1MJQqpUk2HHT5t9kNfdum2jY1AMRpaxqfEbCgQj9Lk1xHGBN2m",
  "key37": "5E3Jan8pFUAgSNFPPbJvRxSq87DcQtpa6cenzKqnvefdW4CboeVCFHFCvj2KwjcGhHw4RgbipvrYXMsDPf3jcZyn",
  "key38": "2xQmhSbnC4WCQjrm5spp3Pbg7SzxG7X6wwSRL5JgMiLrK5rJEZtyQJRF38E7EWFZpp6LBLwVcTimFBdrT8nfeNYH",
  "key39": "nSeStJPXuuxZnVh3coV7VMkMsGNa6nRYxRX8Aw8dgFJZt8h6qEPjbCy45UwRHh8k5wWq92EyaknJZWKqSFXYTVL",
  "key40": "4MkVx5iDo2JZ1udCna4MBqLFBDv5JVYJj3NtaU3swYAQB1aVcqY7etXo9sbf1nzYPo5TejcsFCvN88xSTZDzhRjs",
  "key41": "3WBgMA6G6M6isvhNVUmxyT5FBswxYwau5Y4aWNwMzePHS5s84bhaWsCkCraouSadSsx5uzHk96atJsu1FySNQ57e",
  "key42": "3fjWmGte52f81drWzVv1eUSmLGvCbn5BwgKhGWzeaQ2ghhyiN9aeSFN2ku5W6epyNo8cNsLBFSrP7AbrTJxnfFGo",
  "key43": "5ZBbDjPXur98WN3Wjh7vd4ThLm3zCBKbxq9PrVhyd7ZNr8gjGPgMDcugXLkDkUStVSz2AU7kLCa7wKUo4nkgWSJM",
  "key44": "5yKMuXQ6Wje2njEPA8pXgbNusPuF2DKw7c3694xuygJBP4SHK6VwbWA2XPSSK9RcXpUCrrs6fz3pndk4Z2pqyTJT",
  "key45": "3Gx7DBx6fJc46SNyEgmt2D59MzNnQqBEwdA2GxTMB8Pn4RXcXUhpnjf4zg5XvkiYM6XVbkruaMMTF94wSTbXNrNZ",
  "key46": "3rappX4L83gPuiGQjJ9UNmj6ovsbaf6NKUdtvAChEefGVb6QD7sT2fjpjsgc44bKd224xAQw5krYrY1KdbvHiRvp",
  "key47": "5Ykv98SwsSygdM88ajwiiYRvmbUHAH6fxCLTJogAbveBVMVD3nmKjhL2Q2XqXYJdPm9nWznGJuAnF1D3gHsE6C5U",
  "key48": "D6o85Eq4gxsAYjvZTiBGoQBCJhtTr7PMaqmuwAm9Wi8rJEq4dTfnhCsdQ7d7Yc2jzT5m5ZDwxpF6sGi8uQhKhsW"
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
