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
    "5jpGtb7Gvm1kkoxSjCeSEGPSL9PiGNrf8NkoUXR4rXXoPnGXLy5j5VdGPivnBkipRU9Kc2BqUzyuo5JAPD9uo2EQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ybEyr3pduRXcwmtDJfUfd3AGcMXDF5sfT9EBAS3La4DVscVPEtHADEz7dK3yde9c1TRUibLPTxL3R4GkNkC8NAF",
  "key1": "3esFFdCnL5YLiqD6RPikgAAPVPWWWPqrv4bnxb7xc2mqbBJYdQpKDaALq2dk9EE6RLtWpjj42S6Fpo3Aynu2nMjL",
  "key2": "5XNf54QmUDBHHNur3GwVMAro5KKfrxMMRBR9YCmwrxotUkGaU7AkoZQG5XqY9FLTSxdkyFNZDaYb8fEbZA7qBqYC",
  "key3": "3oGBaNhsfawj3EeH8Ny8m3wUqBZeP7mYihtzPARMThCaZEpvXF2cQURn271oo3mY5XVa1ZBqe9KSMQg8uVcTXcEX",
  "key4": "9qmsVxkhQUeTo213DsadeGrnN32f59fdkQ9npzRArqy584N4CvRcPkysFPNEdhNkxdRG6kBjjYF7K67XGsseiXC",
  "key5": "3YS6VJxmE7PXRVA2RLDebnepEVVaVzPpBt6zbdhzTHVUBuFhCBTJhi8urihAee8QXbMhkoy97hSX7NhC175ojgLi",
  "key6": "2xkRYYWfp7ryFTm3X8zoMJBVAMxVi1bBrDnEdNyW92eJf2SH1gmfLosmDrxjnS8CvwpJ88ksMrmxotNogo9iaMqz",
  "key7": "qawa7A7nmUr24T5WJvFhW1SBPjYcYyyjUgAfbggxrqgnkv8P7hPCgAkQwueRksXypLHG8eMpYcaR34psJ7ZCSVB",
  "key8": "2S1fLUo8YRfQzNxAwJmFhdSwMgAidLHxt3DXw5Q6V6VBgB2dKKLYoxjiVBHVKQYEK7DpJSMaaFzXoSoyb6A15hsR",
  "key9": "9gkPeMRWmosmGnk95m8kcEfFXW7berbrPWdGKE65JoQvcpkyyqNKqpEhWE9DrQHqCja4W7CSWmQF1v6augj8oy5",
  "key10": "G1kJA9ugdnNkbAskv5b276UyD6vJBNQxMsmUsc595GPV1NxhTwJV9GvKP3UMycdU4Uk3sGj4rdKxzcd8FRhbPfy",
  "key11": "4GFRqxCGXvcWWEhVWnymHTyTLMGcYuyp8pjwUNpvyyfEkr1UjBigQP7xQC4AJQXrHqYWJYdfrzj7TaNRBP9Lt95B",
  "key12": "3fhASqUmpXduWNi29cXvNV4dgo417t7D13WjbHeZbdvsqseEjVtyFRgx12tTvbztD7AjsYwr2dJU6HGPV5pabNXn",
  "key13": "38n6JD6cttiwZvcghthL3n7EzPbAGK3nwrPLCiT6uFviLcwQA1NVAbg3XJchjSXr3tUmSJMpzTEZR45sQtWw1eZx",
  "key14": "5oJvqiqLBSqZs5AEWUG57G3G9phhMWdnG22AcPVtU8HVCXvFRr4ryoxSueQW6st3F7eMfvyPqxqd6aSy6tKyWaAN",
  "key15": "ZtPn4GuVbUEbpyyj3uCE5zcSkWYAriSw69mQaaT3PPgKWyWZQdRsNs1j6fUCrGesinVvyPGXXB672VTbFENxyvi",
  "key16": "eQr9zV4dTxPzrh8jRVBwvGKnFX8y92DxEMWEDwD8yL1Yt6gfh7tSaX69sBMNJsCj7FqBPRVa6ii5iMp29DKjZ6m",
  "key17": "3e3XTnSpt9VDv9GqkDfKSDAFJcrAFLRGWrE12f1miPFSetB5vnD6JPNzYDyNPdW46w6Tz41vkXshyGpeWhk2i9Dn",
  "key18": "45FQDLX5voX5R6SSawPkmySczCbRMdNDqFnAYWP8NZX7ykTvzJzmM4sw8aqBXjvwir4CQGj7bvpaEsC59Fkk8J71",
  "key19": "2RrDzFw3Pe7phrUU2ZymqqdJcTkjDrQwLYZNzYXSKquLA4NbbfwMr48opg8YS3ubiFxQKr1Huit4BqieG8Rpa6Uo",
  "key20": "3RqiaURdVaVxH6ZDYZN7aZkKtHrZG2qVY8YWvUiXhJQcvMbkNjurZjE13S6NHXcZB4CQj6s36BE75tSGW2UPNsRi",
  "key21": "8ztokXsNYU7mes7XizAziyaeNEaVAqAVND6DSA2hE7zyRVTyknfyuoT7MCYP2AvsTZd5FXeJxT7itfzAxzUm6EN",
  "key22": "2gWteCJsyh3hR93MjkyGUbUpeXoEfY9JSfronmPQ7qPnszS52TgWgVXRXPTn1uKDuVKm5XqioNNMVEjaRTWcDSmh",
  "key23": "5ucbwpinLeFKzdXDDYkpe5a2G6a1yFqK8Vpdyd8sZ2o4swUst5qDLBSkGCHLd6oW523Z1qaVcM9BRzrzCViJ4HFG",
  "key24": "3E46PJJJuoi7CygGQim9xWW3kCug95DXYQPvUqVLgPq6Gy4aziSzY1rsXkuUDTyJ27gFcxEBsKjp4qJRMCmFogJm",
  "key25": "3qnJv1zbYqscBDQLXCtz2VS57wZNjpjiZ5LxUCJpeLpCMa1i3GN3Mr9HxpDu6VZ6F2GCfrbdSAqNAsG7CJDuqaPC",
  "key26": "3qSq1TxZSxCTjfuovWDTRuijLfNbhH1cXc2kapWMHoZAk8uYTXuc1C4VHLNm1YBaQ9G8hPwCCeehvNo9NosN6XMM",
  "key27": "4WxFPvfLGeKWE3j8dJGsyt4gZQMb79tjauiZ5JMAgr77ZhPubdBGTVUXvXqnUTU1dyw4kjUdvsqq2ARAqKASHSyP",
  "key28": "4v6dmUXmGGwQtUiy7c1HMYeKY6RWWMk8ucJAfksnacZdREVec8icbxhXYG6iPyMVHRfMwyWE3i5uqDrpDLqEijs3",
  "key29": "3CQAVjpBXEoiYNxsZf4krG238B5dSrCRt1tQByD2xPKUR2aKUGKiPtwJ22YivHhDxXJQLnT3x39E8K9gnyR6SmHt",
  "key30": "21gMy4dcQph9Vd1BdfFPEWG4jpGtojVVCywAYZHm6hupcDVpJiuD25aAfKmBAjiUdL1akk2TRytaPtJxAkxnuNYo",
  "key31": "341seidTQN9DCexese7VnGcMJd6u4prGGyG6eGq6tzzu7dPv24nDZY7ffQRgsS7XkGRSQmCsCcYfiQQcnE9N8Qv2",
  "key32": "5ggCJPkJMWyWpeYCLu7C5FFJJ5HP8boi4zukhob3BEKHyNrqC7ToeU2wfuoRZK3DVtRiU6nZdY1jafwiMNE9pj8G",
  "key33": "5FHtHbQN2owqD2Qh3JX5x9tLexoGFATeStRRigGWSawJCV1rsYCvBasK5EwHSYj4t3kkNBmjswqQsQnYBnXva78M",
  "key34": "4CH18kD7L54aRKLJZz2TaXRrnNv55WQVn3en96Vy9jB9JbggxnwFKte1LcW7P64wi2j4ZfM5fHirgSS8kxTsxhfs",
  "key35": "5WGiWX6RwbaSVMtXpNYES4MXNYCVgz6o4gWyNv3JorPfwT4ZwCHgBqR4CHvaki4ujNYCFp8r79mcATogWwkChH2G",
  "key36": "3wSbNuPwbCyE9vV5qJwDRqFxuEQn3q4e1pz1gvNABvTyJ9VFXFmmcXXthi5UA12XjNuGe6H1Dx2sxg63J1vqLSKB",
  "key37": "3gu5rtMEJPtuqxxtsV9Y9AZXftsRsMbC2aLGbtVQ3WVjqf8CroEpCxh7F6Lc3BvYaDQ7Y1Zv4dTkf6BJrHwf9auG",
  "key38": "4ptTwPwjCaeqUyYtNCutsEceUeXyvsLKD8oYTfiF6m3Ptfqmix5r9CtnMevFjEGoHPLcUtTPFiU6QEidzNwUJTCT",
  "key39": "6wMjECdsRwfGB7cGasSDi7vjydgjhd6Zsd7tFKDScSunQtKqgy1qNrXZMjQxZEijpW9B4khFWvpTvFGawnZoewH",
  "key40": "2uNgQk6Pmg17ihNCGsA7BgVpR8sMXM8WXjemNqbqvjkzSSF3Z4K7W3g4xioHVHESHXrrHtMBb9fxckGi3vtzufXg",
  "key41": "2rqeq6YjZ6QDtSEeZXzk2DEgyeLMJwVbAsKMFas8vmN3vMRog3m4Rz4A35K3qaScHPvvpgVKzXVjvvdZ18jSCjYF",
  "key42": "41wAr3cn5VxScHto4vPQMsMtrv4GFBbUQqjN15aKbM9u4JsnxrszpJUZ5fEoQKpsxpMzNGNFsu8jUTtZFBzor6aP",
  "key43": "3uQfs1jRef5D2d6FddW7SaMoe8YVZH4ZoBifgccrVcru1zsRpKVnajVTT7C4FHk2qCW7cfebEBcpMYBqxeKCK3g",
  "key44": "3d8PeoRxaFZTVWFU8TTUscoZ3CPqF38cg3QNVbTAMeWQZoitXPzH3gZ5vqj2bV4KysW3b9CUkYBMirJMM4pkPJYe",
  "key45": "4X1M5QxtKEbPC6vBvtdXzEVbDvaA5sY9fSrh5t4M39jbUdtk4NidPnBavbvu4nkZ6jUswfCh1ZasvK1gQ6nyFUD",
  "key46": "4Vpo7nfFd7XFkqhpLNybz1f2cNTabkaW48FaSzLNAvfFMibnDydNtGkNa4aBnCgbwLWtKf91ZxT8akf3n9BVNnew"
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
