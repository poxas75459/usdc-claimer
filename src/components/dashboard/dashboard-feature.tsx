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
    "saLnHFZQGLtyCBX2qXyTQkkxgvh6gdsFhpnnzFpgiv1fT8qZcfXVJrPfqhrSKwZnM3KWxwBPeAXQv6R2x9TXiSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eJgo3dVo5cFwMbYV9SGZ3j38Prae7s2YW2ccPYH7fdfusiNz3tEeaPXdmGa1sMnAsDMjrz1Nm7ctogwhYYXggvA",
  "key1": "5MRCrXibDD1Z94VYjX7wj5oG1iyBEQGLaniBguN4ihNjYiAEcXdfNN2SgywpDjvQeFGKPDT86dBn2CqaU5sf2QyD",
  "key2": "4TRYdnH5QRffCUXQnSauUTta3sEKA8DbUPgXeDfmhDUbi9RntMJMZgKzhtgKposaLmrKFXGfxS9CTfHu3ZoRsNTJ",
  "key3": "5NGARtU38tLniNbNHFLpeAx67zgQ3exNUtTwp2RjaF2oGMvAyH1RpuvddtkuFpDUwdN8r57RnAcjTnenPnubz6B8",
  "key4": "4pw1d4GCVDxG8qwbuLKv1rAQ1N9aqeZeUsZZU68F2UUansiU4drxfrKDFNWD59zS48WJtJGwzVoWJfAC3Ba8CHYY",
  "key5": "5uquMqg7MQbo4WX7GhNYXygx4nktCEXLNEU1aKjF6NMjydj86BZZ6DdrPiDEvxtuVi664FhjNwxQsSqUannZrqe7",
  "key6": "5qkXM32Jsq6v9Nn9Y7cZWAgCLh2UCnipLDe9JqCgxt4kkTJcDEDUeyKicrtEUYqvTWqdA3H9MjGRo63PrnSfa4Jd",
  "key7": "2bikKEbX7bc5tCTBxqGCzyg7YnGXcYCCvCBW1np8MjPk5VGTDk2nCC3XCfWv77aAK3Efxw6mTWcunfPyzUf1VQH4",
  "key8": "5zMQNt4MTZY2erdPAbnH4xYs9a775X1pVf6sJMLMQrMHAk7z5LSP31tFUkzC6ahu2XXfi1VW2wche2KYFMar2hvo",
  "key9": "62gtoVJpuMdxCZSQY5kC1FTy3B4tmX7YhDBxKjwbRr6qWEQy518M72BRAbp9jMaRMX6dvog5xUuexYtV9t2MSfD6",
  "key10": "5THKvt2VtfxAAovTurR8fm3havSE7CxxpNywmUFoDrZzbuTEfZ2nQSzUyYQLEDz747Fa7dbLwyddkP7X9hg9BJoz",
  "key11": "5pahrr6ERPyDPH3RKFzHrk6RQEwhzpFE12XkK6YE2moBou84F66XEidtWj4zYbRrxAPzvfuk7gWFVKpEnQxCfLft",
  "key12": "5AueFUjBSHo35kXAdQk9H4dztezmPQMbJKh6eVPVYj8PAshQ3GQvEX99w1qd4VmgrAbVLfm6QR6g7Puaugsbxhdh",
  "key13": "59b1zDW9GTxQyVTHUaLq7fyYHoonU95QumwhASfHCiNs1nRUm8wAFDFS7bSbiZLLdEpE48ztbzogCkvx9vmo2xWH",
  "key14": "fwdEcZj9gVN1mixUMgwfSgCsKQqco1cj3HZ9CBqaWiM6E6QVU9ySrGHE9bHN4t2oPYQ8AtrC3kair9aEFC8NpXd",
  "key15": "3XNEVsxGopmYfhp2VXV8AAfE1JugAKQV6UWqFbRYCzse92QczjhpN8zea8HwT7GKZdUQBzZ4PMt8xbHJCjHhxSm4",
  "key16": "GVGJAFkxKeYawDTpYBMeRJN4U4VDHPtZbsbdsEAD6isajp8a1sd7hatAjbkj1GaiFHtvovGbbU5VXbZBqLXFmhR",
  "key17": "3XZYGN16pNtN5ptdF7r1jpdW82QmmDG2muD4nwUGc9j5PNauomhqrSM1TgbmhiP3UaccASLQ6sTymyMWqTj7nZPh",
  "key18": "4NVekZXqQ9y2kZ2ukesCWu7u6PLc9dmGUSzjrfirw6vkJjj5E62JvKg8v914GxhWhYeGKcamRPLqJxs6BhXBYxU9",
  "key19": "seDRNXkV9wVH7WGdBzv5SbY4WpTfD6HcEBYopxGJ93R7mtzJC3SNb4AKdkP8TTtQjeK153P1xGsnjMzDyxVBYpY",
  "key20": "44AsvchjYXejtDpLyvE8eeudoJALznAW3G7VcS7gpWAb5niUMYwffCpvUcJCswVB5UbTHixvK6nyb7dnEgBYfdBL",
  "key21": "AZCyUynBiqkEd92fCbEVhEa2PwD5L7z2FDHqachDWce5vkrW5BiNiJvKyemhAy5CxuFYHdxNPFbX6fm4A3iZA98",
  "key22": "3VWFzVG2U3iLnMjub7s3XmihpyFtZeUFV5goHEdcir3mpGcXzwp8Y8DXXnVJFZK7a43Dm4n84zByVHMjJr5DoVVH",
  "key23": "ZUyBrBwmFGb6QAzhqB1zz3AZsypc7Xwn3BSRCr6jmE1E5JsKuyEboDCTeCYCgCJ5RpsKjp8fcqM9sXvbcNLJPQZ",
  "key24": "4wX1CqqC58ibng7wpbYEQRh9ffWhJrAdJXQbWCUTT4DH1gcahgxoCNNa5BCX48g45rKbyid8QBMHfykDoYXyxVx6",
  "key25": "LNQ8AAFNb7U4TyHLio6Hakg5mtR9U9XFG5rqEL2cN8rJA3NMb27WWz5WjWfSpF56iYfmbMr23Rfsc8PEHAnWZzY",
  "key26": "3ZKvPqiYsnWGJUHG6wV7ywt2eGF1ydrRzkBVdhNvQzhFdX9hWkUVDKiqc45uG3d65AehudB8Z4A2U4r6uvh8Y28J",
  "key27": "2nLnm7UkWp2FSxgJ7XTMP3BKgVzTikudi3TiTQQHJVcgeak7JAr8AdL6CqbDZXeo6VNSy347AJLpFQghYS8WL65j",
  "key28": "64kudborTbhPQPYaFXG4tF6nwad8vBeVHrYA635szntVuxJMnfSoUVYXMmmkPA6kU4U83JntDpRJhvrqk6cUqvgS",
  "key29": "4f93vcckZEBqehc6iu889z8P1qsFESsk3DjuNEff25czYPsWJeMjPmQGCaQWmKr6X5kLTft68sr1JqcVdHMzCZxS",
  "key30": "3KeX2Bjw2rzVmqkBiteGnARZutrXaxpPe9PvvGYzJ42PTNs5K2aQtwupTQ6LijhUAFvCqqZCkDM1B7XmWnJFbc2i",
  "key31": "59o5C6ipfJfv8dGDAhGhPbT7HSvZwyhgbsZ84DTtaZgHW18r2LE2ek8CHKAfCdksFNsHtUJDoTvfxQxYxtobTGie",
  "key32": "5kkLZGEPxQ7SGzQPDnXFk5rPScMD4W8NKQEVLLy63RByzoE2MgDwS3p888qyRZqTVenmSVAvxeLFWzNHDjVCiLdu",
  "key33": "4xWFxwxXhbuqfWFnEpri6ncsaKGssJsNVe5AYaH9HD99cuxYB97LEyaAtpwVkuTAYHzK4KJj1XSyqQRps7JjxGi8",
  "key34": "6a2GWUJEH2wfgUZY3Lxw8FPU3WopJyMXkpczadrqkU1xwHtg3EDKuEZy8qSTkPQ4YWBf47XRTycGEbTmqs51HLc",
  "key35": "34gDpLMRUZ9yYkvhAFvUtFDdqVdEFvqitgtH6TrcfkZokg4T4Bu15mL8gsTxutrCnVYQ2B9YezVcrycqEjZTBJNA",
  "key36": "2SJ1ZjzAjMbq697w9a11TXYzYjHg4dXJNHjKTRFnRHmRhaBWZsb41tGTb5dxg4Muqt57B7uDujCMFuw7hNSYvkRb",
  "key37": "29VcuYXqDL85ADN2qEVBk9nvX69m9wqufyKvn5KWvPh2EYSbQUdu17kqtbE7xXk4WZoZU8M5ptgzciprUvVtqHRN",
  "key38": "5oszAZaRxBkJD1dRFCWhgdAkahdR4Bv7pBin2rY4G8g6uQPEi7dzEPyXp4ZD3117NC4YXTog6QUUtgf2Qfo8WWuD",
  "key39": "JWYFDtcJ9R7noUPu6ph6Xc7dFWjGgX78bzMBZdUVCkZAohB4vVGcNdyDEy1JfXZJKDXixBPoW5X1DgKU1f55P58",
  "key40": "3a3Lfy7pQRzBpG3NYjQfJGaMzhbzDJkge22WcuExSgtMTdoVk8uCE8Q8FrqNYAS3ZMdnsPzzLtvf7GTdChA6diev",
  "key41": "2oPGFRBBVXhQXDNhcAFG8SuE5Lq5Ln2USDj4sZghQbVHJu6YLeUGLCgQe9iCqpZWw6QNDjhSFh4YQ9Hkk45rLnZj",
  "key42": "5uMUsX5BSBtgznLtXdB9hchV2cwr4d5ui71K5tKugUvtrMzemXUejrWnndQqfvZcv336pveDJ4R8ARzudWUBx6qC"
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
