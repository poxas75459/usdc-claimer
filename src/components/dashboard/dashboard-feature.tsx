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
    "BocvJ5TvWcahjbETXg4PJyRkpoEfhJCzfbp32xRNwsYkH1r9WLjQGmknSnSNk6YQREjvD6hEnW3b7SDCDRGNkpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cgBLV845hG7jMHSsm6FFvLiQhcYGzcjHYnfpG6QKXTP9E8bD4xehh88vuCFyGurZE8WbV2f6h87hMQsXRmwpLgn",
  "key1": "3BBwCPHwTVoyhi4bPCRr31dDTimzAtmEj5vvotk7t34zEG1yZw2i3woyEAgQPfYizDjDB9EZbGsPfNYqJQWuMaqa",
  "key2": "BUfnwrZYpRD2jZJBEFPGeMUHMiU8R4o9scTm5AndKjetZriDNxKSXAtBB62HJPeJKfLv9TWb4r4zmhT29FQyFAG",
  "key3": "5RXKaGDfrzrWk9nycdA2Nsh9aUTbSBL2ccDVB6HDVs2oVJHgCm2MnUvmAfEkk8FzhyZUXAjJMDSmwbqeFUBAWMK",
  "key4": "31JEaPP9KY2LcrzdejnotEBCZsEkPRDtyWinoUN8Rzztmwc4kTbtXb6ncfGkFXfGkPWfYKX9vm2Rsz3zQQAEsxMR",
  "key5": "36k3TqoaxBc2b2gTqLf18GRWTApumiNJSDKPzukxzpUk9sreVNT4QMs4GtmnAmsFQFYjeEw3uZ3CvyrDFCFaH9DD",
  "key6": "5LMkcLPb2bmH89yzEoW5csSqJ6ex5kUdC1L2B43R93K68zXW86UqVMJSZ5s8nKo1K5BxEKZTWPTBhD8TT7baZnok",
  "key7": "4WRSVVySzNr1Yh9Ex6odJPv6VKZS1J6fFqxkHpZnHPGi8dcqmRpPpEVQY26wZ3DKUQZFbjF9WZ4yhsZyigHwpVWk",
  "key8": "dHfYRkgkzer1N5mYcvR2nnjP9NoDda1UPPfc4eTXoqj73wV56yAwGYeMN8HcgW5Azv7CwPxcV5G5ZrFsrB5FKxV",
  "key9": "3viA441ReT9yQJ6AWsH1ve6Tp2df4QVF1FsPZukXB5V6TLJ25NjaeGs1SbbHqMUgLp8bDjycUnXd3xfEt3GAZZ6U",
  "key10": "2tJaQf2LrEfNEWkYM5HotajSqLwVoroefCHouP81jwzN6jK8Cuv5xQkqBR45esuTdoLTYYoBtpQK9ycoeGxK5ocg",
  "key11": "2xQeuACPT1r8TkkbD81gTzzZaRjK3FmaUjxRJJ7QQD8TmjwdkkPgCUet4fKaZ3zCdUFvRny6CcsVXrub5iHH3YHg",
  "key12": "5xnKcgPR4JpppW5eTbznsdLZTAxdwBGRF2LMoTVcAy7NQmmrJA8bXup9pyjjEnMXS6MvwfdiYzvZmZCvPCEVcsiY",
  "key13": "2h9YU6LnUoY1ECv5crV5nhtpxug3pWbMx3DRcUdsVxnWxuWGiJ27okYmFzfZzZmJ935XYWwg87f6aWBJzM35X95F",
  "key14": "2p1G1ZTGkGBCxWFzXXc3Ve1UJkE57gVySh86azWd27U6mpAxubVPzKBmFpvGeUawK3ddYpPRcyKp9r4w3dEUDbSE",
  "key15": "25eT8ZcdH7Js9ieFRMCRi8MP67V5qLGfJw2vYHX6iiJE8drRTZo7FQtR8C1YT3T6CwjwrQ4nfM92UofVdCAQtnuV",
  "key16": "56Psmdo6zqiwc6a2ufwAzrMYfEyaskQeUNrS6wZQ6X6wYqgWAm8ixUcoxuyJg9Ycj3dcs9fsXU7BDBaoB5cLBxt8",
  "key17": "3ndfEDrkRjrKpzDs61d8kg9GSbqQHK34XY9GYUVtL7J7gekJNkYokN81U9qvtsosi4fEZeTm6Jihdsw8cDPaN6Jy",
  "key18": "C9w5YwhJURfGgqYUo6HqiyASTvjgkxb5YXer5a2t4PaNBJPiuzdvqb7ddncP9veoKkw551TK7BotPTzPV94VV3L",
  "key19": "3KbBw1EAkBHgVaNAHr2nm5Bz1vYSgqBqoqHesvA37Btz5BdxMamBuuVfa17qcPHaPeBrBBbUMTLtP5qp9g4K8Zt9",
  "key20": "2vAMhpsbdy3NHbTnudyJLiGvdito89x3KNcag3JsDoLWosXWt7kYe4S1Xc8T4q8Uw7mUJUaJHNY95zLQe2mxB4mP",
  "key21": "4APdKEssbBX37FtPNP3Xkg7QYiTa7ST1gwSnz6dg5gkccW8Up4RFJj41PjxjZ4dfSRfv2jx4h45BWPQ7a9ppph6C",
  "key22": "538BB3QQJYggdGvW1b6iiQ3Mkj8LeAYYQmg4G22kRSt6RzDKQhTA5VyZBXCLjZjh9oyiJ7XS9jbKujpb6p8Q7Ui8",
  "key23": "BRGXr71KKQCim7timr5vdAj1o3FRGjfXQoXNJuSAqityJfQ9MzXHDGtYs6Mu58fTiC8EvAo6P42QzCxP731ydU1",
  "key24": "36RqfnR2ou9yEPSr2N59EvfXdcdKCqmmE468WymVjqgoHoaH27pVnJ3SW1AGpFTCyKP3gPMFnBhBpxS52tHgmKwq",
  "key25": "DkKvuomJ5bDBEmHZeu6b5WbRnawZdB4CZZziSZXfbwAsco3N1YY2Z3CP7Vbd5tV1pV5EwetWEWUhDnhSA2KFtxK",
  "key26": "3zNtXv1P8qXnesJopjbe6iViuHkQ91EkHMeRTEhwmAUhp6fceMeXE8zA5RHi61XcjuXDTyJKrRsDTE2mHJ3tEc6A",
  "key27": "4mc33zWPqiMhLz198is82o23EGvuFZmJ477YEqqe5sXtEy1d95ppKDD1jAW5xX2wv5JzGwZsvRFiD73Pz7pdfKzN"
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
