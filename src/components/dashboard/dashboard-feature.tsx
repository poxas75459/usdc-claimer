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
    "2BXQY5g8twYo3Zt6W5bRz4DmodGKrfcS6KumNefWwK1bmUBKp1QVs8snJ1atwGZRHbXKBPGM26bUZMKgS4CLhigS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nrZUALVqBqxvsRqCdCnpWjrw4gnkGXAb4f6G5SdHcJrcyeT1gaUp7FDP7p7iujcC6LNYEXWgjUZqXaqs2E3FQAf",
  "key1": "2Mo1jXaEK5VmqD5f4PDSJRLcKoXrrHiYgBngDzDa5WgLEb6wpETDBMWPvvAQGj3S36JZT4huAbMZDFax4b8YRBeg",
  "key2": "4kTKicNBvsm3m7pN9AYRoPEEqERa6znbx9phgypJrCqWzcHgy9zwU5qhD54XfEUQBgcHMdxi46NDTCdWnfxG9CQd",
  "key3": "4C2EEDUxQgXpbv8e4VstuhSDmG8oxQi4JgR8WMnWomaXgXP1BkoYBXrJcXZ4j5G4p1MRcnqCjtaH2eS9gukMuAJe",
  "key4": "iJE8Wb3raDYmFBVuGfhM3nCLQGcvgbkcbXm2VTcejjTjQH8siMk2yocjPVA29NxZAahmhB2BGeKinU1E7zhPbrz",
  "key5": "3ja8nfj425j2w4oiKzwHdpw7uiAL5ZSkHeQ2zp1AGfpUh9gcPwE4azDXEbggVCwvVhj5WfQb6MrVHwYR5b4cwC7f",
  "key6": "3N2QjCn9wqbkiGqLjWhZJf2iHdJmvLByK3fjTHydCYgLu8VA6jhcNjzUBhwixKoerqLfAkfTQj8p37ap6XXfG4ff",
  "key7": "5EwRUXnWPFkrGkzqQaTpxKaMgxtUGatBnWFXuV6HYEGVs1vv95eXvMWt8iFDurXXmapUPMzLKJTvVpSgeh8ppYEj",
  "key8": "3qyS3Gqjhh1f7PvwnHjB48w7i5UieU4u1hwDF35Bpu62fRkjq5XDHvYe5LJGDJPstni49WWCdzukPpUf6tXySWAR",
  "key9": "3huKF8BCUuFzpbp1rSdjcfDh4VYkrTkgBotgzHECvEj3MNXFmXxcJgMQMMH9myMBuUApeEC5FWjamNMTF1rvFC46",
  "key10": "2L5JbfxbesP2SUST4uNWF81iFNoRXxPudYtbM1s8cVh1EYtD9GjzVtcQSUwAycD4MTn1M2NY9kCRk5mVVXLgSp3Z",
  "key11": "4AQPrNJxMHQ4q8GpziUp4Nu33PNeiuT5UrHijNrma9QfQMvpfJk7JbyYSzbovcMX8sEx6ULMz9TNwPkPiBZHoBMo",
  "key12": "57joAGzMnyrNr8Hw3WEVQR71BJM9C7LWWNGfFniCzUYR3vfSHCKcpgZ1GQMsiPuChLsxVAw7bqAHKT693xE2R5rG",
  "key13": "42PFwKYpXfPgDvQ4ToMYn1yhz3ivm8qqAUsxh4hJJsgNLzZWKsvFSe66y83jfnCgKMfXxuYVsRCLuZF2nuKvsyap",
  "key14": "3HVc4xHgeq7rR8v7w4CXrqwyCPtVsdLzhhBmLV2yrumcF6eKGjtziemfLz3SnLszotwh9DqUGfAmKY8WNJYcos5c",
  "key15": "53rNzdkx8XzvUYaRRdEAbG99TRwizVAENnbbDqjKstotsagK1Z8Q4Dg7raPUJZkKNiNEUL9Va47qMU8w9wFBXb68",
  "key16": "2tmKKu1yfp29DxAboipSio85A19hMcTHeZBTNNX9piLE5WEQYEcusSC27zxTAaXwYqTwYBu1x23F6DfcD6HMTXmB",
  "key17": "2E4JWQ59LymXgFDai1FpwYxceSTVTwEQWQY9Gfre7AuG8oB8NueYhZHFtaDXcvV6JB6ZFz9xaSoSUVAWNV2m1LZP",
  "key18": "59JSZCt39cMFeh5cTQiECfy7dpji94FPY71rysnioaSkefuEKi3ydHB1D7gWBxHQ29dznaTVeMafhN2szuEm8bH4",
  "key19": "4A8DgAvQ8YU3aKtjmySr6iZTTNWUZYkY1ctamfKCZhfQdZFLShey5vNbgCKrzwCaZr2WAbWx3segE2A4h7dL3jbY",
  "key20": "5TU4qhx7XwkXoWNUvTGxCicbf34HETzBE1traGWDwN9L4RNXmmRcxyeVvsJtC8Yr5T3GETcy26eAMep69dEuJn3J",
  "key21": "2Wq9exVVvkubaQj3eEa3RXDTDmGpaTNCQ7bT3X9dQ27eAi7EU5gtLDhUtssqHc61bXWDSozWu77k4fsXm4i4iXkr",
  "key22": "4fKvEtHocLCFU1TyBDVWytsoguvt1Jf3mWK5ZstQnNBDxWShz7SVSX6mbZ63tG5vGGF1ussToEsXAhU5bBPHcfp1",
  "key23": "2amHaNDRGFcYxWQcA5uWfDRKsX2LMBvjx8Qr5otJZDiPYkBqfuJcrPzZfHs1ybXfgiK4HnF6ueTPdfRn8tC1UnxK",
  "key24": "56AbSVAtKbSTafA1zss1wkdf94MWktQ5tTzAixwEmbKsoT5ksETGUdRyhPbZwNjbA6NR81KBJbmpvHUd7ieW3Ykd",
  "key25": "3cL9qvFBgg3tCu4h1GeRi3Zj6upPximZPvDryvU2bkmFEmoY1nTweZvbENCkdQpaPZHTP5J7XmM7kC3pho5BWgyn"
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
