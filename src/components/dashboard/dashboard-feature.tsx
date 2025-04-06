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
    "4yZeQLYC53NMAUshxRcf6bxPCmZN1V3vV3smhQ6DenVYHaQ9eHm7A5Padcr8EPAvaDqZQPeBjsqdZtM2EeRZsosb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HCk6FQgezYftJi66tvv7DLaWA2PQ9Rk5E1RHBYEj9HHPCNBwvuoi49tnavaZuGL93Fy1BAzogigT4Xd3WH7N2rh",
  "key1": "5xTuHF8AZ2LYMoFNkJqXzWQukHyfDQAP81XyjPTfs48Gve7RWAXBohgpNPvCyLNCsUqVDBTsUhX4eZGAepFaUwAZ",
  "key2": "2t9Q53RnhtHLtHTfTu6uiZLqXWs8NLTDmPu9sFqFVAYESFTE2AjGdf2HKAnwkRxQgLXrebm5ZU5WwhwtvcKNwDZF",
  "key3": "9RPVXjVZjg1j4DLJ8aGvW3zSCNwHex1D5APcvLTSGkZSz1JYpN4H6tGtZNZVu5xDJTesWZAjtXG7zaaBytQ1TDV",
  "key4": "3sPps6fhnwMzPfkpo5FB4NuWXgp5Pe67rMDSbGhymo2cHRxBKJG5vbZt8XGENqXa8AoVBhqBYoUYhGCYqQQMTg8N",
  "key5": "4jZZad4b5PDqaypTzzpRt3sSnkb9sXWdviBLh2LGK9QpR8BHpoqZqGUBxJNWiCGsFU7Ltm7kqaDH4emGKSkR8GDo",
  "key6": "4qC5BrHqoV221bbzb26TSoCQsxx5sxowTmFZ2oKGaxJf791D8s6tesm6RZAUo3v85vTp9mpsixwCshnhg4j2KM3G",
  "key7": "3Fv8QPKA8AKFjFjgPdKZBHKLHCgwqnrc6EBjrje99K3Yw4RmbetCEydZDKgfEU5Lw5dShBf7NVkdTttNXwWC1pT",
  "key8": "4EpdF1UfzMQSVXEavHbVaCsC2Zr4DsH7LDQaN4PFtzkLid8k8B4y5wYMi6hj7uz3zfC3TeGgdGoEc3JeHCnovTuN",
  "key9": "4v7XFR5BfUZ4XwYzWuou6EjzqpzuC5sa2HcQvanyTZgXF9eyxM3a7mev5KkKiF1xoWPgPrQQPsfbKiHr24ss7Yuv",
  "key10": "3ZJS7PbsrWiCkdDQCZsV4cbfsbDMJvu9TTRzGSWqMQLLZF8CCK8wPvapyAQgHNi9zvGkdFKVh5Zd8dhZKt3KdXAL",
  "key11": "48gbvx6t9xq68EEMaPkkSVaCDug7Z5xnUbzbnEvbEvVobNeMffp4fWfnm91kcWnVPW2Mw2Teu3iFcn9L7bRjjN64",
  "key12": "47xhSZrpiMC3h5pep4bwR2au7uqm1UjCv3hSUJmN9VKUDzzJkhytPZGEceADaYCQuv5UtmQLFTrZhDe86gmKp7bo",
  "key13": "49iCkqigKxVvoiC8aAgqDxVYiDWrMnxk1e9RbhJxbh3oyqrghk2dQZoBgnwBCctUSSXk2SThzB6dW6bBGZr7Ce6F",
  "key14": "2FZ3VpBF3JTqGuyx8AaBAsqABMcmMbyRJmyak3EKRDgh8GZfn6o6SqZWt8uEohfsFi1thhbHyorZ51kfsTCYVva7",
  "key15": "47nWQSrSHKHCyLtoYT2FtH5c5aDtDgeUdwg7wEudD3Kv8wEZxHwJdn6nEYaqjPiM92TbutiVAjnuKKwymUvoQETT",
  "key16": "24KTHrxtst8gZ2bxZajohLJZtryYPyECaTAtHrxAteERobmSZbuAgG18X7g7K35J1McfrmrmzaLLtZqDSm7CrSdw",
  "key17": "5qQRPP7nvrUm3dPtNdPZvour9QAhEMQojF6cf7hmw24JN4euzLbH6DFXZM7BtSz9fS1ns48fooBKGpb9GCR3i87n",
  "key18": "3HM1dzwoSxToL13GjuzCTbvSFWSFTgSKXvT94smmJDesFgTu6fcqspG1PnC7ZHzg5gomiPhKW4QUNZFnDKmPit24",
  "key19": "5YPcut7n711GdXmUzDkYZGzXhBoAfitLuQaGyEdjUywndYHWpfD54bVMbUxnahxAVmnmwwCv9KKoPiPuGZM6qvSe",
  "key20": "4NmMN6zkkmf9Pn4uwfhD5ZmEm8tokntut6RtDxeaNgwGSm42AxYGXjpgoSE5SECc2YVAsdwyRyLKENfaUPazKruz",
  "key21": "3yrg4CRHcYWUb4QtQHstRe5HWj5yTy3CS19fMMX9nDtdqB8BUNcAdBpcwhwpqzgARW1tP2a45iK6cPsa5f6o1yJd",
  "key22": "4BiBcQULKS1TnmAUtnswR7gWMXdUwDBvpRMZGRi4rLAco2xKb7B4YsrZLqKSQtyx2kaskZrAn81cv7iKB86nvzzi",
  "key23": "2V2jr8WSyPGG3LmXmcDYiuKiMyRj1mAfV3WurWrwH3ZGKvp2t3QKgHDxTzqQwq4of7FX9KTWDd1AD41HZEzeaEC8",
  "key24": "4Q8T9yFjKFqBmVtX1dJrNQWTRXdMwhcnZCkacd8vidVvJ4negAT6JmyaWjkNVCK7wt2AxiJ4GbMp2SZETpuLNpbe",
  "key25": "5pMYroAbrBZYoBVTMg2CB9Sxi3iLrS3M2vDbMVMt4XByqfUUWhxYdzXQWn9sJznvMHCXb1o69gghME8ozvGy2UWG",
  "key26": "3ptUf998V1MudN4WY9APAhMqSafPZiJm6AWHu2FAmxdFwwdWxE4kYtgVg1piDQXYnwnrb35bhCBa6UN6uSbo18PR",
  "key27": "36tZ3hEaEd4FYtzNsGt6tFEdiFjGs3rxie6FXD132ZVAYJeg4FmSpgmpNK6841iC7dkHh9SmfKooDHQkTehnTqvR",
  "key28": "468V8uf2bJxRPYnzQkBNC3XctQqbrW4LpagD8B6k1cUzQ5EjE1cehVxfJU5M2sXMb6z9e6YeTVjSub24trVLfHKi",
  "key29": "262VEJihK9odrw3PB25APMCRAShSMsnY7jayydkvsXjNHMv3vrd5dB234qzJ5QSWGqtHyBwPEFNUUkHNQVXc4Vmt",
  "key30": "3NiPqG3Cpeox6mHetJqQLGF68L3ZvXidGZ7sRp3Q2wpke6oawP16Z1QsxqzUr7SGNfbiH7Dxqp4KCETMi3syejkC",
  "key31": "5fKHZVqBts34FQxH4nh4WZros5ctre7mxQX3bti4hyJ5PoMQ5sPqbZCmHJ8fKPqsrEYZufbbjTGJBS6J6DyYBDVt",
  "key32": "4SgZC4b7qruy3oeQS5kFs9pS4kPnKZCV4rEpKbmCt4VWuNvcfmjNB9GJxwVm4LkHPZKwLg3R6fsJvKh4E1NpDYyj",
  "key33": "QKFFC32FECt37VyNssr63Kf3yAMq7VRace4Mqw2CYDni5A19Rqc9dQSAHTGRoZcDhJgktjVQkS5c56CYohRET1f",
  "key34": "434kJaZNGXt67QARAUH1nFXrgfFGXaSKHZWjrNRAnoeXLwbxDtj5LF4Y5tskznJJDxwwEcyJ4PvUaPZe4iWsX6ks",
  "key35": "2sRbHN9eKxxUmjD4qNVR6RZxc4BDuAD9r5s17kxEDRaBTx6RiAR5dvidEAFtNZmp3uVHn5q83Z47CQtuS4wFdECB",
  "key36": "3CdTY4WvLBKKoVwyRqiAYBj3kqspyuaXdtDnawMgkojTachDRGR7ga2u4UUDgyTzgeah1miAzzxiUo2zxDDxN9nm",
  "key37": "3UrnPj6hV4c4aX9rCNwyG8gbz8h1JUC7PThE3amMNF3qypdFVArotweYxnCRnjPu6Av4aPBHME6uTjbGYjRUjWSB",
  "key38": "3aHeKz9e42wnfSkpos7oJkAnksavduwpFMYVQr96fSUttqwgrV23nFsrSadJxqkXyD72dh5fx5mXNjuDbJ3kpsyj",
  "key39": "4jUs3cGnNopgzhw2WWmDPmphW3DiyUK2rBa3uGQKGs3fUJuDJSDLHSfaneTap3qKHscKxhWYawHJMnd6ixvJb1Hz",
  "key40": "MPd7en7czyNJL6Ko3dnEnYGs8tEghYH4xbNKsDYpqHUbr1FR7azgMpx8Vkn3hKS2ycrdxgjPiVVsyvGyuwEnP5A",
  "key41": "4Ems8rV2zsER1wkqVLz5PQXXh4mRyVNhA5DPe3fdyxEaJbW4n9S2v7fZeedPNx4drZAkUhSdAKECJ81EcAVEpvpb",
  "key42": "4DAu48a7SsPLGDS48AaJsAduppvLxAZdA5TFZDC1EgakwFRAJvwHgXHYqQS13oZXQkDzc1c98XdsnNdQha7WYX2r",
  "key43": "qJdeDKnp56WSKL5yxY1ffT3FMjgX7dmGCMihJiBxM7kmZZzznQ52ME3kK6foyA4UHGoKBHzUiYhxpjQrsynKH3F",
  "key44": "mwCj5ftMC3HCjWddTHKNd3sUUWok2eHK3kutb4jNPpEeDgjJRY38QDd9432WQax6G37k1gEunco6Nu9N6T5VVtg",
  "key45": "22zmCNMnMZHhrbj5B69QQbXizs3MFiaJTLbVgb4K88snsKUq8howe9eKXAhRZ6PLV9vUURVqBgAk2cs5TC5Z3qua",
  "key46": "47TuT3CjY74ah6zpNUr6jQ5NJJzo6GzcjqfVi42FRGPWrV3ujhawskxbVThUL3nA6K55KKpd1QwEWkx8qV751M4z",
  "key47": "4KDxPiuivXmKihDBmL2pUw9SBrhsYbSiTFpJRvtRC1ngKQ29ySntponZWozRfjyxgUEuaNShzP3MX5aLdbK9Zuk"
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
