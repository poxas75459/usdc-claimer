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
    "2bAzANbhZitRc3vWojmRzuz37qjgtmeXVDb9qkmXuY7FxkLNQarjDUCHK3kQaTtjQaZur5FogdW5CerK7LnkSmZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WaLQabLtrsKVVR1NbuyVtuMSf31c1dHhy94uTxDXHj4b4Sj8qq5j1p3q6bkmrZ3C8NoCTm9fR9H55WXu4qx6sy",
  "key1": "T4i8kyS29dJboV7T7VekcjvZ3yuRYmGerXQtSNPtXxgfQt8HdseNA6oJWTQ5LKtvPMTk2mUWXig6k23jVjwSp7u",
  "key2": "22Rhm8ihDdxvmwh9Qpde9joL5NViK4yhsiKBA8jm7hH2saLR5JJrQQkAtPbRJmA34cp5ehL3nqYzTFMD2fsMYsiF",
  "key3": "2Z3WkiNbYXWL6eqiLhzaFMypoUmZZECDBv4jRHeES7mbZVovSwWHnWjfNM1JRGRytiFqfSkcrXTWcdL1aoGtZDQ5",
  "key4": "3C1th7gbur4uSN6ynTjKGiZgtcG5fKgytigwj1A1uaJnLAV5kukLCeEWnVXMY8PnT85ChiMcJyhESrhVXp3ir5PF",
  "key5": "48udagunu86TEvwxrJWQEoCBSAj6FsZfnU2yVP8x5UQE5SZamYCo9YhADV5WkfZd4GXrCg6qjandyrJ5zyqD1r75",
  "key6": "RhiHjVWyzV7ENNfiEzn5Wow1QnUd7evH5cw8exDSdQwMttx8MZK7kY5KEhfF6X3hCsjtFTFMMqSFU1ALgWorKef",
  "key7": "58iJJPNCJ4SgyRiCmL5MhC4HGTesJainQZxLLWeDatf1LXaWwhHycaZPzUCT8P8Ck9vts8AXp1nhQ9jXoBPZmv9p",
  "key8": "5HwJ5wCJR42Q5hrEbWGDwWP1UYf3Qou7V7ZbFuNTphmyqjF5HQD8Nau4YgbujHBVL5Dn3CCkzCM7bL5S8r3zHbqJ",
  "key9": "5kkuhTxAbcmM4XFGDsi1nvwbVn2M4YkDM6zLhGJ3gajYcUa48hn1AysVeE1s6UCczR3jrysuewr5VgiKsJmwnXLe",
  "key10": "4Ts9rJsCxXFzjic18MKeCYbpoe7M611FXuBAH7A1qUR2xMbZvGPRKCR98pYa9BsTzZsm1z1kdVjmjyJW6amvEjUj",
  "key11": "4iUYvxUfmVhw6cziaz4b5EMErp1eVCk7FWnBK8TLJiZWnxzqEgDRsmtqRdp7pSzgduxaL6xcA8BQbse4JBFcnkaG",
  "key12": "5TgiQNwH9wF9EnbTuYqn5CYcRfGcExCZbY6MFQbaAnL8cHtDiFYt7EhvDRVwkJ7GkMru4v8W9LtoYd4REAjdjrMj",
  "key13": "5sMJyi8baLTWaumZcFncnrZp7gY2jTEEdx1EEZvdQP4hM74imm1VFGWWasgonKBhNXbJaUSx829jwuMhDqXDeDz5",
  "key14": "dRk2FXYno3H33gufXiccHzMnZJuUj8QVHx7ThCconQDhxKz72fkXcrsr58TNZywoKRwuJ2Qn1N8GFeFLBPb7Xfc",
  "key15": "2Ra5T7RN3zm9F8EdviwvWmhYsFgr42HeoM6c4BfDpFRoB2QMvrRWCWNajifvk6SpuzFLtVjakcLqptfmi1DNxJzc",
  "key16": "3ip6RbHevpS5mxVEpMBhoJo5q3HpsiZ88iB4HzZpZUa7ZtpfbBwDb329gprqmTaDuPbe22RpUW5whVr7kwwva8ic",
  "key17": "4r5nDqYNDkxhWUDkaVuAkqkeVza8oG27Uk4jwpxrfLFadpDxzJceJrmAy6XTqLe9RjEf7AQQVSU8bjnHZ12UBSwq",
  "key18": "GSW9LffAHR4f6ci4KyqPZgqEY4qDfnpfk3yjAviJNHYhErhhRbvnmjskMLrcL3gdfUWobqQnH6BScpWb849pf4F",
  "key19": "2F38e3qe5i8Kb9vmroNqvkuYtBSsWXqPqCu9EwfAN1jf1jTfwAMMju3m9frJGqiik7WXxA7aVPH7e3BmoUUBMBR4",
  "key20": "3knbtgYHLC9FZwF969V7Gbm2GgYvjnSFtajMyUAUctGMhXHZwCtvvsx9Gpd7UtmvWAqM9pYQsnJtwxJ5fBhGk1D8",
  "key21": "4JeV5JvKSTLD5jZ36pMeqtUS5tkDADGiTqgBzajhgUugPGTRFL3WoPK8bDMwyuyuDSnkbmsffFLbN96ze5fGH6om",
  "key22": "CCWPjsdSzJ8uRkYH9en4ueWuYHfqN8FotY8J56NGvHeV368Vub9HA6EhZY2mTazwYqtLbrhSnhLgnqaFQnMju6a",
  "key23": "2Duj9Ya1U7XTHemnqZ1sB8J1Sgvi7dHHhQcFoVeJLaJeDMUZWeKZ3uPVV1qFM9ooRJoJp48qxYWjH8DFD7G2ziE8",
  "key24": "5UkXyMMJRJcseWCVMMihDZr9rAWtVRfzTHuBGsnrHJox2JH9JcqZQ5X5YpcebK9MAPoyDNxFdoR2oJ1JA2reB42R",
  "key25": "2V8NaqNJcZxoFCG99T2dbKhJBBnPhYbFysvcTRztofL5BmR1mMpAjgwc6Sf46NqMK4DAM84R1EZ97iRCtxFZUbxb",
  "key26": "4KT8eewt1PWmCTHTxLgoi7MRRovU3eRSYdJCTNGu9mTTDFcsWwiLT9t9jB8FrU1w7KouTTXds51aexVnsPtM7p7y",
  "key27": "dd1tuqf1KMBv7gJXmtcFQkm5yXvEvWx4TfCvgVrAvkodZXXX8odc8KvFzKPcDxR2rFN1Jr7w8f6ykaNkCYiFvpC",
  "key28": "nKRDcjBVHASwPkRzmcLAZU98mBkpaj64UE8FdSM4LYrEDpnFDzRgjviBHPeMxjeTZ8nZf95UyBsLjaGwogF2myB",
  "key29": "xGxRxF9LeCN3SB4Q8A8tzZQVMo1py5y32JbUtrbsZrcbivzrnufF3Z6V7iLQSbtB6kotKE73dinmyeKVXGzDmgE",
  "key30": "5DAYTdH8GZR7ecpEd4Nwiw2jjaSbGBQwHakDh4GVX1MVtq8BfQrQkij722KnheYexu6xr2i7gcM61KZD2XnxeDzh",
  "key31": "5M4p2wXrV6NBTXqnA9iZ5L8fZxJQaB1aPSyWFDKDzTgaDU6byf6xBDd7iHPuT5BssqropyRK5coQjwxqz2fL3PfK",
  "key32": "2G6M8QsfTQqvDHmSNR4U8nQKCpctUzmRZoYZkiEEmUbn4rVXQWtgYopJuomsrS6Nf5QztTTrczza67jhENXfN1Pq",
  "key33": "3XCLJngjBpH2J3TKaVW7U1kBvtoswQUQjVHmXnDcHov8hRXaFqebsT3TM5jbLY6iKub1xcboUXMSo8HT3Thiz4gg",
  "key34": "5sGPH7R9UMAgSB79FXbdkneBfd6vJwHNks3W8FBozRBgVdHATw2oHhZVKfTRAjbRNyfGbkPURC7urWy7pAGKwbgG",
  "key35": "Vbm4B529qrrwWxLQksXdC9uiGiGnhVYQADp2QR6TympGo44Dpwm3dxNhAFdM1jUgAyp3G4vNdgJPYAJrectBBdq",
  "key36": "4S8zegjDtZbnpsU3rXc8f8xZMFb3M1LupYiVHrUJE1WT5tk4QRGFXgu3ebTPGs2qutDZbtsuozEzb2dBtD8FRqTa"
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
