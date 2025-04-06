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
    "4Ae6CGCUcc89pNocWXAYvYxQz5wdrhr1HYBgA8zzdPqcpYG8imHoJ4ECUNDMQFG7LuDpZxnomSuKYU7FqbQGwPy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kcdPAWiKLxUPQRZ2YSTCJFDDzpPaRe6pUZ4vjK7AZzuU8Qe6BpiBfyVF9Pk6nQtiQjzkQSzU1Jw2Zn9hK5Tb5gs",
  "key1": "1rVrhBTHJtoka8VohjNvH19t3zSaZ1AZcvYMGBpvUKuS9s1DVmHgNXPLBCXyyxbwjNgf3vonEJctfj9CVf3TStv",
  "key2": "67gnyz4i2bVi893DkWeeUQLkL8MoSqiu8ZgK3fSpgyJphsBu3bBRyN2nJnHd8Z2UTb5qmqG5GfREr7vpJLj9MBNs",
  "key3": "5VfciHncPyLaMsMhDXN9B7UeD5GU9dN5ENDVsvHqcsHS23EuN5SaHj6p92txzhWhV2gs4sRiXVf54BNwpThyTDuz",
  "key4": "3qnMfHXZRNj9dZ9z6ue71yQ95wVx6JVEwk2xrfojZDTGoRBHNykgnznmoU838acUrN9D9gxnymiB299f4CQRGTTu",
  "key5": "5VuDHmr1Tqq2BeidCwpqLsowF3mu5jsjxzFY5FGVHnJaB7xYBSXMxhKTx9po1yhW4r1DqLpQ9o1CcXuoLHbck6Uy",
  "key6": "5jX21udiYXbLFCP4P6XEisLCYeKBEVfzjdbaibC84jfePhTA1QePqtf9jL1A6Pn7NCMXCVLNPyJBZut6LcBGnGwi",
  "key7": "GdaYSondjLNhNG5CnkpAxWickCuBuakVmRLWQFEvSR1iiq7mK9z4NnzMUAZENiRnqAir7bzKaXJf52A8h2WgcdG",
  "key8": "53EsTyoVDKyVYAmHJjp27abWBaAVChz5V9y2Hb3bts6HCkkyMSBUniDeEBdSem3arMcQz7XGw3BeuUbUeh9iq4zb",
  "key9": "57tETgAJsLapNL3PeNjmoKFuoeER2BQBm3CvEu5yyVSibJRoXBuXyoYZUfyHnznHpoHE56h2MHjt8wpVwtmRvQH4",
  "key10": "486FFWnYzhSuAmPwczKAtvyHTwtqUTwt7QeBdcr47YMxMSAyiinam1EeZp85r5t5DX66b86uavjh9NmqbtE7M4KT",
  "key11": "2tzUUxYiVrHMHsBAtU1BnVR6Y4sWazL6VKaHGYZBaYZCs14MnqLS6Wbom1PvJnUSSskoJnfq5rh5uSyNwwXNwDmS",
  "key12": "3WsAqPVsjYjXe7sh2NtuXbxX3K4oDTjibKDZKcYNFCtfZLt9SZrEzjLjziZC9UcbmkpX6oTBh3dj7PA7vQLZoBJR",
  "key13": "7GDZ2FQtrTUxAVExzLTCr54EnHzu482fbQaYCPGH46dyMiyEu2Q2VcUwLRpC1dGLcKBt5mBXBGvLNzDDB5Uay24",
  "key14": "3VvNo1dFhmPncGLSY8EcEBtzf8NbNW8UR5jvhCr6VY4W3c3vuuxmhAvj9upXAcu4mjESVMqoYsy571Y3AJSfCy6U",
  "key15": "3PvydNJxXuyuYiJ6B5be93AvsipsNcCmrjjFKsAqWPYMxt3snbPhHEiGxfKNcFbNfXePH97AmmwrUJzRzJTQuS3q",
  "key16": "q7Q1LefWJeJJgauBB45ZVVknGGMu9KmJMmzgyt4CNm1cwtd4ooKuPrTF59KLjgMEKiuBKWZp3AdfxwogXZH3zyW",
  "key17": "2Ekp246Rw2m4vWVVK8kUt8rkyTF3mAG7gTFMtBoWab5N2S6rimQWT6NouTdFJGpvPXTGwwHzCKjDa2T7TEh3CiUR",
  "key18": "2ptLMdW6H72uViw2epayxoseyEnXUyW8Gx97Gvvp28mWCT1LxYHK6rcyoUuSiyB4fCE7QEZS4MPM4LUCsUyA2R7z",
  "key19": "2Wq9fLmA6psrg3N27PcPaK7RzZ12BHFXfsHUaayCUpR6cqdy3f81zxisGK4CSHshj7tyu7AmSMpqCQkiHmJb8JeU",
  "key20": "4TJ4MSBJ15TRAFoKkPRiSG6MJs3p5duVkmhtmZqGcVVG2woTYhhCmWaknZKHk91Fi1MLRGGZaLEGxVLygc2B18tC",
  "key21": "4EezCR3jpVvvp8SZdhJrBTfACapE9dn6K1c5UYqqxTM8XAuY837Sa1NeyzjpaKQVEFJpSoJKGJXWRDxS8CoVD56D",
  "key22": "5cNs4vstDN77SaQrdpbPSJTLVHCFP8KY78gWygs2VzTrGAWZZmZuZvsELq9RhURpNiDC9KYqZc3pvhyYYNM5E4k1",
  "key23": "4v2Txn4V8z5mvV9jyDFGcvjpmLAhxjqt3xuAuR9vTcJnzZTdfB352wkoE2AckYxi7qk42CnkVnMdD4mvw6EP68Gy",
  "key24": "43u1kpck3Txv9PhX1gQfJBJqJMP5NWMpboDjbACYXJhY5BbfqovTG3y13cbr8szQpJwcqP8JyMptJSyyhZz7bQw7",
  "key25": "48QfJHctLdrW43aEXMBZ34GSBy1dXWPm9hGVVxcgAMi7r1soMTXPJ4MGg5SvV5kv3S4fpU1a6qLoDomhVFBdwkcn"
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
