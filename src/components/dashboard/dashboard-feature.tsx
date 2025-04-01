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
    "25EEV18yQKCxqMqJ5ovXhW1XyUiM8R9DrgQWq15URrbG1TXSdiz9y4yZ98587Lh9GAjXzXU7DxLtMsbhpSNC7Dz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YE9QaggYDinb25Pq1UrwDaNVNqPPfayrBZp1tKumgG1Ad1BsSLzy781iPe5yEw3wLsj8rGgUHpCyJ31vB4hJPuY",
  "key1": "5gT98armJcZmgCpDf6GtuXLq11bPDjXHtLhEoVboXAxF48DwHbcx9twHaCY6DNJuSaUQEHdhCH5WyU4rw8i48ocd",
  "key2": "32dTY3n18Hu66FM8gUtts5NoXo5KwrHW5yhWk31YmFxNmgheH49VCGyrRb1c12Ey4sVcMNYVpysuk7qNDENozeZ2",
  "key3": "5cF55Vfk8eB74E89jgFKaEh2Zbj1DTBWnb3ssfHUdgvwmfhBeTQdjZg2yMwfbm3jkSuwUL6ctGBzavC6WR2vmtvX",
  "key4": "2GjEmQH428gVrM4NMhKihN798yTpLvPkLgSc21FDFK7SXUPHbsUeuMihtt7jSZmMDVdckgsxYUL8XV44UUK8mDtZ",
  "key5": "58wdNEM4A8hQ9qFJ85znEGc6qKi93LQbBJe5dy9ofv6DPjgQPFpaUoPKWUajko9Smr6GvKxhje4RGT97vwZCMVMu",
  "key6": "4Jw3SrrHGWZKurRy43xf5v27MWff1BUfyxodCR3VUJDnk37HvGpmMauTPposCaHTvte8SeU2va23iG9S3FqyCSP5",
  "key7": "2QWwdsBvkQ6iFvWaT9nE2Bqun3tJpXpfLuhuVUDx7f3DRSP96ESj9BMSY5eP5tusefh4thvmBD6ketDCcKnxrEkP",
  "key8": "48MCQa3jbtJmR3M25LyeZLwwC8FyGNoAvJZW8fa7YuD2QeAA3aoU7CTSAzaz8SLxR3cUYgJPyKLscyGErSYicvrw",
  "key9": "5WLPUypnuJskWDc4YjRaKWvKz1AbHx1puqZ7f4EmrUN29nhVCm1R4ZQfSZinx6LvhfozRhqraWRvFCYxVuSS9SRm",
  "key10": "4omAc2g1hwVvXdFfETrf63cFdVqtFx4JLbnkSphb5YmwGhRtPr6nXZk3hUcvJzTvHDAeKufizBatuFDm7SM76JGR",
  "key11": "51af7dopevxjeYkLqNep7pR79vobec5VidR469MXypoAxFzAvkk1LPMLzSUPkW8ov4GUQtqEbHXXFdKzV6Mb5rL",
  "key12": "AoYj4aYTWJ6frJ8fdeLLWM7eghAJMmsJ58Vh8S6uVzowTB64KnSRAPzWaPYfvVuu8mq6bVZ5qecNBK6R6SRMcyK",
  "key13": "2dX1GUxX4YGzCLfYZdbdyfc4qD5DHXSECNsYxPfzHhZKtkMWXhSoGxwE6Rc3DfgsqbACNba1jkiMvMWpH229qb9k",
  "key14": "64CSs6BUS2jLCTLNfBinQ7a6bNy3PRGA8W85wJR3eoeha6GB8kZPEXPuTGKJCnNKx7zxRSWo4zhaGTYZYcJVZrfM",
  "key15": "3e3w1UjNWUBRdmCYk7EjwuopSYuV477irPD8DiJXAYhj1C8WVqYeSp3nr4q1aY3oMBgsNSoPCgmxkDhwyEyhSZVW",
  "key16": "25TJfECMxbDAAB6ngeV7Psa8Vr9yMfntF4hAvu1XZoPNPWzUeXmAMNim2g8dEfrKoRipjHi6ZwNTJaYn3m9tgkiV",
  "key17": "epX2vSh4VJUNhjgdPXwwMMberZTBHGfWMLSBRdTeU5atmugpWUZ3kUFMn8EcwAJTQmFxEnzvxqoKJyMzDYfbYcH",
  "key18": "tP4XRXxkqYQSdShjbDcxDfWT9Je2cPeUbUq4sBCvHmzfmXvfsBhBpe97zJML942pftHMShoQWcpiHm5yVLfxakz",
  "key19": "4qf6ugmGog8YtjjUrnfimCdpqdZcHEZ6uiWMeBCNG754X4CvyqNy1YHr7F2Sb13F38T2NGow2w8kSUf8BBy4vuFk",
  "key20": "2k7EBgug7jhAxCfAZYasA1YsjLRoJZkJmhasxoqiFFLsDjymmjr3dCBGTUV8KpxVpn7QHwPs3zGyeQqxG1iEfxWa",
  "key21": "2NjeWCaNum4breSZf4JXJEP9Wwy6zM6fNcJ66rP2EvwV5LWi3hbtmwDe1KCEM6zG9wDpsndxtsEAWsx6YDsBSMEP",
  "key22": "u3XRpXdEH3WgsUkDW4yBe4QzQQGgAJyPrko2KJjewuNg8hNfoxdpNvrGFX1XhX5U7ixrRgtpWvxrHUDcwikhecD",
  "key23": "eau3H5Ae4EthCxbwPxwizJ3RvCqXpTQ4biAFtLAwsKyHmuEwpCYjLzsJfDE3cNnYZriJWai5SfZiTKESdL5uCPQ",
  "key24": "4t8wqHFS3W3t46eESgZ46pGwiUWFkLhBgkQP7KWdeZVuKxzESPpivZTZwjzd7JHRjn3YU97hSEY4XSv4w7frZmSp",
  "key25": "5iW8KJL4FgstLxkQFsTN1S8zkcC9YWhAbkdPPFUSZEdrqr4CJXiAqtrVruKDvh7CMsRxNDvw3Kv3WtKaRLxTbCyn",
  "key26": "5a2DepkaGCNo78kL3UYQUwEvt6JMDXq9AYY55JPRKk2dfE4demmUj73NjGY934WoWnQZqs8G9cfWu433KfFHYQXs",
  "key27": "2oWaamtNwQwEPKnGz5oS9UxYMrVoQn2AQRJ6RxXVho9WwygMoS9pcd5syQhy1tA3if4rMjWkhtWo9SmyG9mQQhdq",
  "key28": "5Pv81kYqFnMcJvD1RKV54veTPGWKjb1ZHzFp33yMLazeLVH5oDucx728LmGms7sh2csYkhZRokYN6ciowPMtpEVd",
  "key29": "3asjAu9kxgpDwDLGNLiQCePUUT1seK2UQ9TXpkLqMGcfcbc4BJD9Z89pvTPN8w2HPf414z4yrK9BxpRSd6iMkrrS",
  "key30": "5fLpWFxSQTMaPurKrtZnv4z4nWw3JackNTrGwGSHDLNh9VarxPVXUoDdKP7f2FQA6TPHYntasdBGMVW16R9uADnx",
  "key31": "66Q84QKtm8grofXohwxJZyPzR2xFEFFGpfMSfJVAjwPb8cPcqqpJZGrhuSASg486nDiksNzzVMEZR8w9dtya5KXz",
  "key32": "5W6oUeVyxPuUKiRHMrNZYCTkv5X2m6A2iJHAyZyAFrM62wDQwvVHeqygCDRjVZWXwFNN3WLYkHTphQGEsB75St1J",
  "key33": "2jR4NoV6k5sfvcpEGvKCnyMhbc6wHjoaScbVEKNGrUbxzxhURXeSxaVuM9ierrSoNrWNrenDZobS5mvLnsCJwEgG"
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
