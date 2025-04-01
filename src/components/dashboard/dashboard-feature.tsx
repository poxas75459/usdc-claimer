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
    "4Mw7Drw8fW22VuP3GLz5Pg3YR5WBZJaD8rcBjqxrndgWdLqDZsQVRVU6z27Fsb17umDknneNtooPfGJgnzm6DadJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j6fcFm3UAPXpBiwXd4MTKhNbVsGGxhwMiZYUuTPWqMSB2ejCzHQsQsWs2VmTMmN9S2HwMpQLhCfRftXdTbCTRww",
  "key1": "DLxabcp1fwrJvs966BZSSvZcsT6nRUBZstfqkUQAFujY9tBYvk2VrZtnQGkMa7xEMdvBNYszuxCEDqnCqv9mN8m",
  "key2": "JEsAjqXJZ1GLU2MvjCgQKyVGW4rsbm96SUZWtR6KpCaiVZ1VctfKzVhxsfFaJHwwsEh8mwSnB3SWPsbZweub6v8",
  "key3": "56GdYEVK62xwugVaBSuK8hGsf1WuXzVtBfEuw31nAtaxpasc3ZRL8Stf7DFta8W3jMbUEVkqptfvSbecYePyHtdU",
  "key4": "4F5y8tSRuBUqHqMYicTMdfdQP7yJLHJPcRCW8Za5Kbpw68CR9EZTQ6FNZ7A59dsJBRVjbyF8KX6Hv1sLq6bLCa1S",
  "key5": "3q6kXKusnVGZbrgje952ef8q2MrfxVcWRvYGMkuEM8PYQ2fTDUfzDji7FytP4sU2nPN8hEbr19eyvaUAgWmCndQU",
  "key6": "4GkqbFpBrY64w17hNTfwUqQPvEUYDpgEYVGcWXGq6dEETurfyvW5WuW2gVKxQRSXsoLz8M5C7RyXYSU5yJXYH1Tm",
  "key7": "5T35cut9HgQWWWidVCvRSgVKq2jZRvu49N5Txp6ysDAeR5gMojhgwTDhdyFJCcLKKqTK2qyqbA4gEhRnDu4UYQ34",
  "key8": "351mRUZjvFk7md5penUHA4qKu97XjRAfEpBxLU1PFTu5RcmnJXxkBWf4Xzi78dLMUgQYyWSRX7pN4rhxMmwJSYJn",
  "key9": "59hd6TLemGPvDk3Ty4tM3rN8PdK6WRCUorBPt8MKZxVShqv3QfAZzuG7id5jpPckw4wDj81tcE3YSaPpijFEipUz",
  "key10": "4cEAsrfeJMrHnpvSFeTE959eDsYPF9EpoDxx2NXgnCMLAp4U4wjW3XtCMPKGSXxbU8ba6vcw3VQnRzFvMMehHcK5",
  "key11": "646r7LSy4cJVFae3u7TC9hmVGPGqKbvUi1CJrJoFiGTBBWWPjUmZAM3qGism6mxULoU78F192t69AnWyxzHtxwyb",
  "key12": "2aXAS77kfXQEXvkTr43MLx8dXXWtgkxVmeU6VPJYyqSrGmv3Va6cH55FhYPsDAefGzFrAwpVw9dqSZavcve2bj7t",
  "key13": "3uStkacZg9zefvdhpJDSS9iLpeqytvy1gH7TrywDwcswUxtu3rDyqrPVEfHTbEuj4iLKzp2NRBCUQjVD9XnkZcnq",
  "key14": "uKhpG2c9RR21542fLBVhrewATwFXdCLjYphNCioxbMiaS5bTMrq9YVmvx5jdhtKz1QxzcLSAcwrbZjGG56VnvH1",
  "key15": "4YDWTKJ3ueQUSJp9yUANcBZYV1joYGRs3wc5P88X13Tc78JNZxQyXXWmimqiGSkck2Y2DL5xAF4zKbNbZVp96Vyw",
  "key16": "gbhwnd1G4LJ8b9hAJV8MFH69Bs58Sui5QgKQ1Assu31fHQqC3xxXA3manzCZaZ1pQuoQmWzZx4PUYDkWMwc2Msa",
  "key17": "2J1AY2c88ES4uEAKfMZwE1u2dNDjGoDNSp2n4X99e8kgbnmA2mb6kBuvhRB1TpPrKWWFzyvT7zTmysrUduu286bn",
  "key18": "5p1BjpU8Smx5D3tz3LLrr68uFwJqtUvGCBcLu9iWGD32q9vNBgX2DBtXSGrfG79RktzTZNj3QZJWg6g1L6hx2u5e",
  "key19": "3oNwYwnH72ueF2SGJBds8LjeJ1SHjM51gUUPNBWHYx8cLZkeX4JfEP6YY2jsz2JDigwqXUAufGj6mbVb1HrHnHtS",
  "key20": "2pe3Bhggg58inZoTtJxoGFCHVCTcxa7K5bFmMuGpf8Z4h3V4Hudvz2nn5JdUrED2AgH2uQZk6t6wiM5BHX7HzHFm",
  "key21": "29UEuCqPo6uMshJdZF2q43ud2YUZPZZmWQAUJKDsStm5i73pfcex5ZMKevJKaXREBHa7Pic5kA6aEDiaGbcU58u3",
  "key22": "2ERHryhdxs61H7NKGMDEdNuBDJjTxHwsnN22LEiVe3w4EA9WtKpreSFLqxDbfR2SPyN3xxTiJ8gcue2kY48twLHw",
  "key23": "5q2aHz23ErfDZizLsMC9zU4xk2iWTcCbaJN4fMoqBeRUgS1jAJpcub6zGjAh2tRwzHraG3HpjMXzJnH5AbMkXbF9",
  "key24": "5qxzKAFoopVj1tPj5oNQ48MUzxYovit5E2wMHZKVQByLdeWHBYh8L5pSaeBYxECBWewgrTjTPZWFryDvo9fBrFgE",
  "key25": "3s7a9zX6nK8e6S7PG9AnAJrFVcdoW76kBrjjkhUzbpHAEy6r91BiBztWDN6JYG9YEQdq44AoJ8MrUMsx1apoRZw",
  "key26": "4w9dFREmhce5oFMLgKT12xysSWQpgBrPKchuVLoAx9JDsKr8RQbwgJizCJUZoEBESBxAaoHXmv575MbWbzoT3hMQ",
  "key27": "2bpGuXfYPZME8TtqZGk9r5UJmwrMj9QeiCvDFsXQbbtegBikLG4EeP1sqDuWQf7DUXZ6WGfDBk44HgmtbSRhtMj5",
  "key28": "2X7wKTzv5CHai4nuJYYzbZKqS1jXmbRNhFrFht14hYNU5rg8rNa1Mwbmw82J6yGnyp3YyndU6j5oAQrJru8vU3tv",
  "key29": "3o6rXeJ3tMHQ1nHpME4PgF9ppgoPEShgLYoPcGEkFrh3bEPq3rVR9U2gbncyDWvqV4SRJwJSudBNmYeBwi8RgaV4",
  "key30": "5u8SE6BfsSNejYphp74AspNY76Gpm2HdJWVJPpK2LZti3TJ18TsxFS8yVgvpR6KrCvJvGY966vbxZ7cMHYfxFdQ6",
  "key31": "BXTFBd98KXbeSfAoWCxAVH7uSujqMVzom3j3pdUotyWFgXvFPB9HDFk3yVEX6LTfBCjm1cvMRy19JLjuraAspDJ",
  "key32": "2y1dnXiHZRjh49bzVjGwBZW1rDsqoTRAc6PAkN7ud2rrdbY3NS4UK5KjE8f3B7Dk8AHWszrneT1YnztaTtwYXZ5Y",
  "key33": "5uZxXxh9bqUz6PurU8a8Wa2uFS2wtJqNcaBcWyMUxhagXgayx4B1uAK47kiBjiBUA7R8HPxZH9uMFHuwcrJDE3iJ",
  "key34": "4wHRhRHwKc6Mh44rXeSJpWct9XixSw2AviRJNupFz9Yj2tFTk4pZAheSq6vGhZH4ee6ML2pxDkGPH6472N5jPmzY",
  "key35": "48KVCvFKwiqk2jbLqihENfXK1DKe44dT2yxGy7wpbwWjLQmujeZNvMeKjVe9fa9NDKoYP7FMWo6qfvRwhda5QzeJ",
  "key36": "522SHQAMMtvoXtoeLj4bsghGUgu2dBqQixhtL2SmbB6ggWLok99rXsEiLFp2bN8KRkGSVY8vCcR95KJV1wmJzNM3",
  "key37": "4EJzwxSbbuKN5dPDVqEgvEivDEHcdPDPsZE8UknrfYky6SVWLqvmUsJxrujeLy1uhG9Zqs6pZ9rFbvqkRYAEQaD7",
  "key38": "5H8cWjdGz75i3jBKD8QczyGky4gA5YsSpDAGR7479WFWmBqDU8YhsmFtdw7tkrGsBQqqNy53LbMn57pACYGc1dD9",
  "key39": "2zESTX6Lz9FzTd4RG1yUgwcqDoHX5ugAzqcpJFkqMznUFQ6ssZ7njKkNALvvw6nXUcuWXzjJQxGNj8NvGgm83Tf9",
  "key40": "54LpWwXPSvnF42wuvPEZzbKDWm5Poo5Cc1eNjHRHjbZpQapdo6bXWtnNRfsnbjsxSLsR4YETNvzKJGoVFDxmyTQt",
  "key41": "5phhnU1FK6Pk2SqBbjheWX6n9GkZtH559pUzhpju9AoYXQBRe7G38g83sZk5QmTaPfyWYWZuFixdD977bGb2pur1",
  "key42": "5N9eUb1x4NcNnKTch9PioEfs8vNj5jNySCxCV5jdNvzH4qmNbW5hGvzDSChFJ2pUsd31kkmyKB9FhT7yAAmn1sj8",
  "key43": "4sW6Dh2rv8g57E9U9knV2R9SvDJMviEjrKjEqwKgLxXNC5niSWN7VWBJM4dnpZ2mRT9ufmmKBWxn69u3qwkGWVLL"
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
