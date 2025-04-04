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
    "4sr2efYwPnf62RTe72mFnYo69JXTeivindQ46sWkZQW3VxqWW7XsZCZbLMwrCjpwu3uDh58nLUzXGXhJGrZ5KEiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29dP1Py7uQeVcH9rnLkdpKJm5qYzH6BhUgoHiufymUuDkJxWTsty2R1vKduMF2Un3hQb6NBKQhAtt24gM4JeTBeP",
  "key1": "4zQbFpXQCyxxkNZ9zMbDwSjrxS2ATxT5TvjazJJEkJeTXLUHJVesqfAoHsNj1zqr8LfAJfVpLxsBeU9vhmqjp213",
  "key2": "3wrtrtxAuhfX9C2cKvEMRGjj8cVcb5LQfscffMADoGamNifWhQjcJQHxNQpog44jWzhPY4P8VWhpuWVd7xNSNgPd",
  "key3": "pSjR5u8w2SP72oAu27GBP4sHppTYrLv1thKLNwwt1wjmjWvgBEsyzNPqE9Q2NVBrBBmXM5h7K44TzaTmeXRKVHW",
  "key4": "LstTZs8upcPAyN6DPtL9GofpUmeJxtbazFz8hc6HmBrrdqxFfNfT7AJ61ZAKRxJwYhDfz5MfBY5Qx9r4Bisjco3",
  "key5": "2Z5baXkWDJFsRHQK9fsxoskdHfApLGGhe3tfQAxA7C5tb6SWc84bZd8ZLZ29hzTnpu8jeqbuByaHbbyfDaKfHjvX",
  "key6": "5Pp7P3SfneVwwzQRg9JpPGrMWUGQNrpWSrFQgBiy7GMzEgfr9k8VjJwrw7m7Zop7q9dN8y52dnL1nmRfwhtYhFws",
  "key7": "3MV1Hr1HEu83yfcRuqS45BjKtTby1wvc4wLpAdHbeqQToDZTwHvBpQHhBbf7xqnduqckS9M3bpZoDE3xet2BAVUZ",
  "key8": "2Tn55bgaKMnBSc46KtVm9ngQA1Gx9LWSUPQDWjHwFEGaUD6eewT4aZZXvnztiFG9tCECqRCTj5BXCu2NUU96afDv",
  "key9": "4cCkg9Gu8bBRgPPAv9fuNVQUoXwinCMYrgtsepBh9okpynYUWqaXrZvYBniGCpeNFZkkkuaPYxf2vVyAp9KUXXAv",
  "key10": "5WoVxUYf2QMzsWebPQN8iHv3yEQcQLjFjVZS5MPVPVpqphnz8EonyEi8wEkpYmXWkw1bgTfASUJbEsqQdpBsHCFz",
  "key11": "gvxn6nfDb5GCHyY3pJyz8fzHpfy8AkwouR2U6SfR921JLKM7A2ErEijMHWGZbM4NTDs38c8vxpMtK3rRTam6C4V",
  "key12": "3XG6Wj9Mg8dAp5L98AcCefFskVjN5K9XNRecrMteGp3pxjzX4TgUupJcHKVNu2AZxxXTLT9Nv12vJQPQVHaf8YB",
  "key13": "5FhDkxKewfPRZHJi4C6EHfWcbdeC8XngYNrMFNg5ZizAnRTEp5brtD23mHkhzUqGqGR6qNvThLRuoENMTQAjzX6W",
  "key14": "4jLGN6WR9dPgidRBLMKjxGC9jRVa8QN1KCeChBr7P3woEryyawFc3nL4jSX4vGQyggy5VMei2zZaGER7cAnUkUhY",
  "key15": "2jpBGgkHAvTmbhA87dFABRmJW68qtfGFYNRYkWmQRKNqjZae6ZZsgTPHJAnsgy5bhcXvNSwR1GSJKDxWPCc3hDTH",
  "key16": "2X6GrcmkmPvvsNdUG2pL4ojZLDnUQusMHGv2BhRz3DTXGeUEbDxyuXCram9wjuYyNHuUCwCf3emuQztJemumzwMp",
  "key17": "eLaTSnQYCxgU1HQwpha3PgmZ53qEoMDuPkCM7SRRpjZ5Mae5Qn3Bq98bUnmDF85YgQoEYb2PBMejaVMimiGBC97",
  "key18": "e5szs4kT7JqesfRAW2g5Z2PJ5Wav5PQY9y82ofP24AXCsXTxpcpmm6KT4nKZ4rDjb5T6boi6gpFszRa23QXJhVi",
  "key19": "EJfpLgBSv4mMBjjgvPFiSmyANQtuxvzFkM65pZpUqvXu4XSBpwXSmKLsWUYWGLosQaC6UpgT8Yo9NTrSfXS7rwg",
  "key20": "4zuvgxEqTEaghTHWukr3jG4tfszpiD9S7y5Z1TXENrAiZ34iXc4y84eot7y3uh3yanpwWkyn4s24LBJ11gxe26Co",
  "key21": "33u3BERVupi88h6FXGuCWadbKVR4FXZy7YHEuBJaYJM3VUt1vxAtsDxHVfz6d6AJ4jZDaxHmRvEtRwfYFYCPQbrd",
  "key22": "28LBXnrTSDwYynuSJ6h8qnbqrekFG69MrsNatUvUnpvLJkjzL17qTvP2GHtkjVmt4grosRXEdqHdrRfrEMmQdmjF",
  "key23": "2pDwEMxEE2Pvu5B7WcXXV6s7hxPJV7poP4GuMgHtFTKUCT37uCRDM9qg8LqQt5QUH5rMGN8wfyoLKJCdxKn4gPtG",
  "key24": "oHDXvQ9LFwLzym9yth4GF6RrwDSBmaFyj8hpR9y8SatWcpWCsnXAeM6a19fvNVPkWoD49DLKiZ9okk3n1b7rdBG",
  "key25": "34KW6SCsun4sSL7bwaeKdTkMWSvYZ4swpTQEty54mFz1qdWwxmLsnGgKhZXkG6pBLsQDsw39bjVVcbnjSAS7FksJ",
  "key26": "4tEUrqcMc3VW4TLhzoA6w8zKHrerZmrn15zinUMPQ578TjDu6LLeJxqX6jeNqmGJQRmWktekxSUsR948Z3kR9MrW",
  "key27": "4yVZPRpfH3F4M9jogwGYUzH8ox5fNEPEN38jpiUhQTT9zCa12CsdxwdEjBnQjydt49ifRTHwtnUCkTqzdKgeTWSW",
  "key28": "5zeddn8Cpiqt4ZhEQKjPmc41UuHFm26umm1NfDL8LAgFK1JeALVXsxR6cHF1uk2chd577e1jKivjky883Tk8ZY7m",
  "key29": "X1cZu7KTfZ9tKbK3xvurq8NHkn2qBKa5ApfdrNVVJh1cKnTwT8jhvcdJ5JRXsDGyLVhUbLPWNC3KQSwiQZ1XJvL",
  "key30": "336YPbQX1QK64T2HVw2AmBC6U9HGrpvpuE6683o3vN6JKgbQWZPt5w8MsT8aqg8C5xrLCn5fEyKEpve4bNjiajpF",
  "key31": "4iADynSNqpdHM4eseFpRM2ytbu1S6KT1qzg3UQ9dcoPUGoU55ZTzhpGnkZPqZL3KJURuo96tvbxXMKnUVXzfDLJP",
  "key32": "2GBrtY4NiELxcMHMvHCkMH82hJzGzytdUY7zSam76eCmBCgDFR8h35puDtdzTXyQbU6UrFwrLgSftmh16FG5GeVT",
  "key33": "3twPf4nGzj3VGNSe3ojwCnq1AmJdFYHgdAVhci1GvvzaECXSi8mVp8wnKPr9xbqKxrR4FT9anRubUn63nGHVfdqG",
  "key34": "ZKB1FiLv2AXPEjmuN6J8qoWSApcxRzWmhsPV9KKtM14y7Egg1BGvzHUAwVEF1SogPShWGHDvxegPotjj5RVCPab",
  "key35": "5UmbvyWguvKZrFq6SBVZGK89vDpfQfiLTmeWix2SekVKDP5yMhv357P8iR6YvHKa1U3kdV5bvQQEih7CHGBJSUxn",
  "key36": "5hnrF9W6ipEwers76Ukjn4xNmeDVAQ5zNMoArK7QzDXxkue7nhchMVXd618ZwxPZyixXA8j3kKViEx4MspGeTNrS",
  "key37": "2ep8TYt71zdBbfZmWqB2ZqVLcMnDLJVGsUEHYgRHNE9mgPywyeu9YE9FcfBqKFHFFcwPPh7HHKjC6PiGCWh6bvxw",
  "key38": "4mn1EiGTSfvjdL8WU9B6QuLs3tWbxtNJv6Wh4yLeRRvAvfAqXAyUvv67G46ZDpqUffDuitdL6Rb5HpboVzorWATj",
  "key39": "3yQcRiSbnFNBEpqHjDw35QagHXhY8x7nadtY5u885hYWjR4zZcANCmNrDtAigvW52hnWBo7L5JFt44ZzSCt4eBDN",
  "key40": "46Y2mHxHqF4JGuTXmeNXR9kEy6971wAC4EGnaP4z7EQagNDoHvUdyKkRMLpsmCbi8yj6kDPbYbthTEPMEVZ5GJKR",
  "key41": "3G3C6Nh4Hkd5LgDbz8vPDqBQiHefmJiGzqcjQKNXw9nw2FqM1RJfbrH88cQ21E8Cq82tT9sKCk2rTX2FA69JRzsB",
  "key42": "5QDFCfzc6Zjf3x2NcxiNedbnjWiiXVCZ3Scy79D9s9F3subehTV1MngFfDUeMLhu8Aew4drnm2XktRgkuon2YnKC",
  "key43": "54sKWs4qxU1d8edqB1PJbuqpTRFe2uEWXzc2BQPpdGUKk1AHGRWZaR2p25S79K3JdSDTf9ciWxx3R9yx2JgxJfCD",
  "key44": "2BpScR4z4E8ZJAuqMztd5hoar9UZT1C1eBdJUhB7TEcmc8y38zEa6hL6WkkoaFJXVoLJ8iShKo4xthJHNjqnfRHg",
  "key45": "4gYmP5grcSs9F4kBapm28qkPyjrrEaNVpyxtTXtUMo5nZGnsCnmzFMtzjueB5mVs7X8rcx6t9SJfDRXZN4CRonYN",
  "key46": "3ZMePAmBnbQYnMBRb96GEuPdZbGg87m3dJt9AA9faQLrrGJ2xPMNc4w5WHVpybnZyf694Jo4CZYtL13XG6dYEctv",
  "key47": "5WDibgRMPWcVfMvtv8yUE2P73S8Mg9tEPBdYBeEE5huDo8ZyACmyRLbjRxRWdP2PMsWUfcJ7a7yUbjg6m74oggR2",
  "key48": "2xmu5kL5dmXMYsmKxzKuGeVZW44hVZSfNLisgr1hDWfoXpvvksn631AudVdNMVgbTqsKZ8QirbUug2rSf4USn9do"
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
