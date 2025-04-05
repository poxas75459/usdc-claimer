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
    "3Bube3gcf8kTv4GVB9xCwMdndDsw4ng5xFtPmv9k2GV7e2pt54H22mc8DPf4HJszST37jtempnFPdaVZTEc7Hxqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59NruW85WG1jJwtLoFEBgcutaQdM2q7RTknUTmBqvcCnWmGziSQrAmgQrBceRURK94Lf6rjAF75UYhDr8SJxSKJ2",
  "key1": "3G4TJnSdKT2ipgnyyv5EAzo9derVfwe7MLVn64tZK7ZrvkTHevpou5JSBb4H5XssWLkWMJy4aCt2wytDGi3mkbuq",
  "key2": "4rQjA8whLwoy6BwmU4xyEixjn4xp5DWh4xodQUwCaiSUM6mTXuiXQjG6DczhmtJhA56tcBPEdFbbaCZ5k8iikAG5",
  "key3": "2qGx8AisqGwUrHxqVG4kqtoaJoN4PqrfYxexv2x9TfbLtUxNUf6QWUVT8ERdsE6SEyRARSqxt35PB6HNKT8NsfBF",
  "key4": "4JXAUH4KAz3aBHETbDXvYevhLi8hoL8wD4Tiyfih2UQtp1NtpzAbF4rcvJVMtoruasqPZ29E2n8e5qcu5LH7XLQ",
  "key5": "5xBqPp9ZWtKcr1jqzzea8kNeYitxv4ZDaZEBTknhnWqv7CGoQAUtYW8h5vExoJh7CoRagKRhsKSmJ6VGiCJjjXiV",
  "key6": "2ndYXWXJ678dKacJMzC4t8QnfXhSEH4m5h4h9zRW1XmWQmMwyGLizgwVh9aVXT6d64Zgu5SvtvWqX216YMMxyR9E",
  "key7": "1BA3DaTeUTmSVYo6j5uRU44MXw9BhZeukmN9vfFydPeFYQe3KP42oygUmkSxSAcyH9et6wG11gLzsxaot18RxnF",
  "key8": "5TVTY4gN4svioHKZaeeRJVTwCHL8J2EYDVagMs5x5pJB7uQGwLABN2C3PuUeTNTUZy4Di6siLDWUTqbkR9wxKZ2n",
  "key9": "2nAqLBhhFxqbZVpRMN1E736C7aum3jdxieshr9qpRca1UeUn2BppK6eSDHsuiYc6QjzZJcqkD1f2yZcysdX57eU5",
  "key10": "SA95qdRdVUbhd5azKgTu5doLjkpK5RhfafbsVsEPEakWEnposY1pVb16au6hqoeXQfYTiUL3EQVvvuagCt27aYU",
  "key11": "3YRi8DJPrFDkiFMAQkcfgG7TCdsdphZMxCMWMVPyUHGEphSXHd4J9q61ZaLSXswK7Gaz23mwpA2PW1LC5sHiHkjW",
  "key12": "3mdgbSUjMza98TK1MngXbuDHqcScWKD3ns4hLaLkoZ7BGBkmATMhhPELtEnsUPzrN3jADg5GoaQsvYmpnJqetM1b",
  "key13": "dD1WgtRCZUWvwN257FHKCzCmNfxwSuFEArdna5hExwhak6fh5bTNpNhUmpaXTNGRmSFMCq4Uh7VxG6GEC3hgZPx",
  "key14": "4rYgzdJWxXZ1JYZhk5XnRtE7CUULW8sR4vvHB2rmALtdRWMtaGeJeK7qjLFa9pr2C1tRxoZbeBWeDDHgHWLiWUJj",
  "key15": "4EvdJ9g4wug74Rw3G1Lrj152ADXoLhNKey63BGKNomu2Wu4zeEFxJpYN5AcDY6iB7cAPCPqXjEccU4GhZsqEdX3E",
  "key16": "3jwuhrSMZFCYju1hV6NhMubqw9jGoMLx4SaB2ue7ZiMzBVw1CKn4nXCJj43LsZEjS4UaSULdvzSwD4TKMgdm1icR",
  "key17": "2U44B2nCMLdX5RhYaPEfRx1mtLCELNjyxoFYYxy1dNfvXiaF2Qfn4HBEyi4nBoc78awZQubr8VqQVxWXHAkSLYU5",
  "key18": "ivr7yLiPnZagDma7S32E9zwZ7u2vwkNZP7wfxyGr9g9UAoRo2HLbjohhH5xst8PXhzS4mkDX4sgXYq2NSqh7zDv",
  "key19": "5YRjECVijDXNAC2GXaktvRok6egA9pE77DaWtUFQ7brCJAjsbkGKTHv3xodHjbEW9da9YiNBbPLtTtEbAjj7GY55",
  "key20": "5pX5RBPvveFqxtjKzq9Xg5EjQ8W1hXhNUrW7KxCTq8f5AdvhgLrW67UjTinbd6hpXUvXpHHi3D2TtnPqoM1xyCgD",
  "key21": "4d8dUbmRYjvcnZJcgdYafSDQszCEvHNBoHhTu3jHSx3WRhBDreyD7mGr3qmgFjsyfpssyCEU6v1zCEyPoEEpVMaN",
  "key22": "Vjz3y7EDBoUcr69R1preVZDzwe93oLtVc8kF9iSmo5qVBF6nKdG3HVLhF5Ckb7GUtCWFubMgGUr1RQ8AEZhLRk5",
  "key23": "3HEyjpFZnNY9YnTewxtUdEJFosoHVCEuH2ZSKzE7JN3Gd3RaNTbrkxV9XakBmXQE63Kah6QQsgWJKvPfoFuSEBNg",
  "key24": "3n2AjD9Rg2yKhy8nitbNRwzcLdfZpcoa6Hrvsc1VXHdeFzSgtMMVBotgr57bNhhvMYEjiNAJMKuGT3fZQAFQnWyp",
  "key25": "362mogPJuxRd51mTqeDAQPhQPRwvAEEwt6qQ3twCgUw3gWQpB122Y8uopJFVUfo6eSdJZiqYhjYjutmGFCkKXRXo",
  "key26": "5vRqSnwCbmjje8SAf7TwF8NdMRrbewGXZS8wk3aF4SvS4KAAhY6xwxz2YBxbE6156h7hWSbGkF1c4dMkjyBfArki",
  "key27": "4zssz8BG7r1nPHUM2sMJaTmJQjEEyZ4i4WWW5HxZsEWTdEjDMqnMCAxC5kEAFYeAzPRYW2MpTzRZcZwtgWFyXLqa",
  "key28": "2TKAhMuiUt9j2oSKwxBvXLwjpotpTtQkSKSRyuWhSmddvQ5hP7vCdLCXNBbMsEMaeHWUiwaLk2mqsdBx4YhFhWeh",
  "key29": "38upan2TDDdn7D2ZMLJxbCcoFbormiFE3DWfLkBuLHwNyeez1AZY6rLzMkF5rDKBcdkYUrpfWmKzvtzPTFm5Ygzr",
  "key30": "3RzKqhbk1gcbBxEmfyStYTMWrNdAKhcGHMXfzPHDvv4fNyVvs7JGM91Mxn9hCCunxWdVuE8QEBuD8iiErj2wt38b",
  "key31": "5ANUq2rHLdVZuvyeozrQKxYEDGbBs2XZ9rgGC9hoN91WZ6UK1zuYddt4rZXfZskY87TBecftYKPg15emzSmW3A9S",
  "key32": "62LzzBBU29e7rRzdDN7coqiXWn62jVf8667emYx4qvkBMRv2U1cP1wR7abg5uhnBtWoVGy947bi3b3dAfYo9NejG",
  "key33": "7MomNhpn5sSUG4qx442U3zLGJf3bQ5jnngGz6D1Qb18hx9BHw7p6ftdcBKSXjvb8iZWQbTCyNFD74z6dEtjq8XN",
  "key34": "2QsWLpCfvWXd3tm31dGtDZVfXUVuc1Z6VaPSr95KGxB2fpNe6K6Sj4CFAMcNgeBYazr4bSDitTHBgQdrpVnu6Lf",
  "key35": "2LsuzNW24V9ZjL4NW1VV6KEugxDE2BLmjq2iHQUv4UcdhwwuLYPD4495sWTeRz1zCrw1ThiHmxVqB1tVC2Mfy8Lz",
  "key36": "9ZNbW73UnKdMNuJwj3kSyHGNcbUHHYyh5AUM4qxh1RgUPxQ1hA9zQYiXBoFnAoBcXFv5Zwj5PFhNq9adq84Pqxc",
  "key37": "31YwXGSEyrLfttRgUjApATsC8MSLZdUdihnSEhVEUvYGjcRjBV5Z6dMxck3R2yqdFihkkNHqjZYjFVELMrYorJpV",
  "key38": "4ZA3ASLfVSBrYWuVNGooZ47NnSaKStgFkwnXeMgnzK7QYDq4Yahokysagt5ntPXdDXDA6z4FiL6Hf85K8cyZBjoz",
  "key39": "APDZyVvEYihWCrfTwdkCL12RWR2tmaFKUiZNJ5f3PoqHUEyj6EFNpMux7EfdBEtHL2tUyWHvXUmr9VXXXAdBn47",
  "key40": "4d4FqtS2RjyxtzpAvwkQZ2R96Y4dDpaFDypPSa1fxozPDMY6aGex9YsG1jnbzEpvEWssoHjixfveRKVcCmoLPwF5",
  "key41": "iJEZMaaNREpDJ6Z54QLvbGtwKqeJdWDTisXgbCCm7SVrVc7rgKrFyJ5kWbspkeAg6woQSpriV9iMye1xm36ssud",
  "key42": "4avshL3vsAMDuQQ9UsV4LEXbaYCvBBXdGUXuwswsFBDYkSG88FPXy7Sj8yo9Y1UE9p5Nqa2P8PiqAmCdHbe5McKM"
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
