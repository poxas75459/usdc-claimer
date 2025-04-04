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
    "53zjuwkRMttcn59ZMiqFQS2ffJroE47PFp3S2iNq8BaC4DztkdcAbZbWrHK1NH6AUew316H4Ve5X56ZvzheXxvUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ub4VX7ZTL8BZzffYjvghALmQSW8UHyYJUSb3so28xDdSvVzCRkZfW8QhM1SkcYCPoBmggcmPwYN654Rfn7NuuuW",
  "key1": "AqRE16wZW9cFbKMa8PBVw44cjjToQ6pgMYyCT6vWVvTmKWCSdopVshQfnab5SVrYNXj7ekkNgJ2vdbLrzj8zTwY",
  "key2": "5dJAr2VTd1y95xTT7AkCt1UwM1SdBco8YYhWwTgQt3N7H16Kovx2iP5dESFFR4tfFvuaxQBBjZ7PqBqNJvHjbQyZ",
  "key3": "2xmP1A9dJhKLszGosBudM1i7EbvxuWacJZsiahJUAE6nuxgSN6kuS2cS4vxGLovonKm3xFeXnKsHYg6eStCqj8sD",
  "key4": "2x76B6zdjK9XPfGymJV5LDBdr7KFnt3SU779GEvCaN6DsauVWpFjoZkRPpe5mLWbziUDVGHDM9MnGvPyMHWzHUYE",
  "key5": "226L5o28PEuTP1d7aouG9tS4dSxQ9ChsV9e4zarH7gqQff9HcQERL7DrG8otTmeWAWhNefEF7qGe7pjthorj7QsK",
  "key6": "3rRSnAe4sJcqtkahwuy2V5vn5CqEsj9nSibJ1mF3RBud9CoQ7fk9brnE7QLC8wzUaL8nHUeSkFJoYJa5qMRHFK9e",
  "key7": "3w3ByywjtmGPwuzXJSfeKHZVKamBfsxK4MUQ61R7FWhQ3LhdAYjyvgRkypyvhT9qHCsrL2SF3tSs2bCLYdqBgaQw",
  "key8": "34e8dKgXw9YpLNFNcwdqCAZGApjHMHYaav4BnyjySq6EbYjnaCBt4XtLiGx9ECeaqeFN4vRkfceNZNLwC5Vq7jPT",
  "key9": "4xaeHDfBEEF2LDaopxgABSisSRwp8a1op9mSZ9ugKeiNbD2oAFydYoD9ZWDnmkvEavWmjbqgSd2PDTqgzVpAbjWY",
  "key10": "UK1Mgc5a2iv2w4xHTaLv1aZpzJcx5NCuaCT6aoMo927RayYsUv5igvCMExNB4hxkZYFoKZwonZ35j1tuYUNHFKt",
  "key11": "yquMHY8u6xh4kG8GKz2a7H9ovmMQi3i1pFdqE723UY9sCKP2khwXzcWu5LZhnEPRL6B4d5BNTHGtv8zcSuSkzER",
  "key12": "bAy9Xne8TvWEaAun9n7ojnKSrdqwZ7f46M9Ctwk9sqDKo6Ap33sgqQktYPYQWinp7NTv8SyeoPAs9hna62aKjeL",
  "key13": "jdb8vhHBXsrNDNrbByrygwFqGigztU7bnxVF1zK9Ak3aHYTmSqeN6W5PPKjoA5KAn7R1wFf1ikwxtQ9L89f927y",
  "key14": "3auayK7PgKa9YLj62mnnnif7M7awSZY8d6eu4BUdLpEP9bLKQANCGGpNsyUjJWqLJmkpukMMec8AwzrAw3Wma1cC",
  "key15": "d4Sab3yLiwGQXhKeLRrXiUjQePYJBiybMX39bvVPYKVvVbobXx9MvhzRQoQxrKXmpYxGH45Yvn1AQcfCnEfH482",
  "key16": "4kQrG9mnXML7NmD735JHQB4BFL7vxwNgWHaaZGZR8so4PL8oy63iCz2kmFSGq2C4PjwzWxT4o9Go2B7v6owAD2cV",
  "key17": "4H9wRkUwo1YetDVEEU2BALTvieXfD7AJDwf1zgKgsdVLdZrVUfGjGmQGFbCeRUT1gnUno75M3BTLE2tyYgfVRKVg",
  "key18": "2anrm4XBQbp5482xReLfqTBys6AgNFNFebdGBkVwLWZivdEoAJEKswZQApL8mjjPRnSys7NgZWZR2nXUxDLvnBAX",
  "key19": "5PWFVFVwXva9RQBRF3MhdSogo84b2L1DPa7sUjPqKq6rTBE5oDEsCsKshHTrYzCToHH8vgqux1iv8hpPzu7675nJ",
  "key20": "2CqJHeyUK54XCVRcr1ZroDCY176xNHKprKrp3ELfdzLdfjK6NPJXgtxHC5D4zH2jkaVV1krhhsQf6LtCbRLwMn36",
  "key21": "5dtJJZVVjvEPSiPfipNgSBChqHUmXS67umaJwpaWgxUtCrMkQYGYRVCoetbXcyHmHP9UEXBfpWPsAGRwJZjeEDgz",
  "key22": "3a1twStBWri1exgozqtcuRoQmVdNNyM77NsoFE2RM77MiYWLo2pGGC3bJPQR7pE6YzRSWhXkogyewYfhGqLcCATV",
  "key23": "3sJpABcbdPhnSw9gtfXSHs4TFv5ExHuF6nw4csxtaqwNm1Na6Lc9H4JcHx3muiLtYyLs9SWi6Arn6PaXvWfDPAP5",
  "key24": "2cu2VNtKoY7MzVGXP6F7co3YJgahuVHnJJYNuHJgk93vxEN6YczCuGF8Mi7RKFfxugg8GuYDQHuFz3Rtf481tF8k"
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
