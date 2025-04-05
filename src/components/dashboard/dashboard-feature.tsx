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
    "rqDDyj6YETW46b9YLwjbjqoc1btgSVw9F33HBfHXMbhzB9wWBfyRVew6zN9kK57ZGqoSp7xic54A66soT6rF33d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nB8VcZ466YJj7CLK9NVrB8PFJxt6shJgnivUUAbYgJGEhAdyMZcRZKkt5hoPpi4uucmtrvJefa7NpcGMmiyA9eq",
  "key1": "3JuKvZwEaR87LUAr8s2m46JCvnvtFnKjuutKUVBApMEoi4LNsY1rjb8iueZmCtpLwsCuTvAFcpQbs3JGFFY8sdKh",
  "key2": "4QA3ziAB7P3Nbn4WP86XR1pGhfH2JR695p8ArppdCdE8gKwfYsUqqB8xZWSsVSusCU39yLW4rxi9Kt4VKGbB3S8y",
  "key3": "3HmB48wCL8WuFWZbtc7pNHShBQaPbUcbnhkzFQb2jzXgW5SBFozgazHgefXbWV5VXsmARPB6nSA8FpN7YWnTPGQ9",
  "key4": "572LZT6nFb2RnxniYS4E5cDV9jcbHiT1jYFhuKkN6HB8uLyV9VKMNqaNWWMWqUuPHW5uUr3NvhDRN9S1wF8C8NZz",
  "key5": "cyUr8MVBnYws1Yp8M4r7eDY2sEAUstyjs6hjWENKZWp1LDe4A82dTPBbkga7CTmYxYej52Wnof3DBa5Rug4fdPP",
  "key6": "2z1rEHt2UUZ7QpeSaXqYf7zzMx35oSQwrCXaMrbxpzfEtjpNH9cZu8X4FiNe1fMsDPhBFmx2JJbCaBeu7u8duMUn",
  "key7": "2j7rKAPyfxfbWG45LgMBNbZhgN9tKwniqLMiobPnADQJPKNyus3fvDfDTKSgDKXu2fCAwoLi3W4PiUzUdvTLeTew",
  "key8": "3pPqXt3d674rxUUFFRnmzjXx3SkgawqoqpgEcDiVocxsJwdCsv924Wf2yZ9GWpB1feVoe4t4JwBPATMYLP67Z7gZ",
  "key9": "4WhYvpjmhDAMDZuPSUv3Ypse7wWgEtGkcwiD6ZutKCdee7eDZvwS9bU8ikCidnqiYgfyTsRi7BX83Qz17oKSPeX6",
  "key10": "3Z3FzTBJb6yymt3nEp1ncUBuxC5mHCCJnwGhhWqVQdJeoRmbBQhWnoycZTVt4Yv4CHUFVrRwnfXKpXa4JhJq8Jzh",
  "key11": "4M763XTmdJoSELmb9h3aTFManHShoVNY6x7hZn1VrYhTyyXZMude8C6YgoYK81K1vmY7JJSDofNwFV6hppHzcNBE",
  "key12": "5uFTs6gAsKyn3eunEi5eSCbGyndTyLBrFLghACaWsvfaMcUG3b5waHCB1KXMZKGz62FAK9gCudSujPUmyQfFAKvN",
  "key13": "5GuYGhiH3o98Gka26mvsbonVTSXXpiScLJZXS4xrX6riNmC4LPd4nUoFLv5TCFEMfrSUMnXCAx7SYweLz43ajhxS",
  "key14": "3783Z1iGGj6Wb2Mzd8jLxBDVkRdG39jpPbHmw5oqsrG6gJvRiHvm9fAQVXUNVLko6AfkafHPyWeSmPmVywuBuERi",
  "key15": "3EMKah67BpgxzLnmC1y1kSybzLW47bvKYRaESzXJNEX2xG7r3M5m16esS7mXAcfoJfpY1B1DPfz8d8KwnzRWMMLd",
  "key16": "2NqfZcRMo21s7vpPxcQqc9fAr5qzcecGAKJgxKJieWFJY1XfhvY7e89nycmEtKm6D62vXDcatCDfXaFK8CPF7o4c",
  "key17": "4Ar1fmCjnifK6NqcUJXCKVrSEijxojwBRRZVtTtUgUbpFyL7fcD2cNEJ1K8pBmrHcFrkqmgtQ2h7MbwUsCqrCMrs",
  "key18": "5Hs6pb9q5GZz49usnTMnwXz7rVqeoTzj7k7rmnSfVDnmEGXNZuHakLxrqHVLbGDRg8tDivUehNTHMozR6SzffVcL",
  "key19": "2tX21huwifigqoyFvw5UJ4Gai6ASxfEFydJ1sXACEj1zWKDMhvQqRyWz7q9n5NZGDA33d5U627HVi7MXQx3EKvm9",
  "key20": "5buNKLAiQCcvxfPD5xL2JvfYsM2BLbWusWTxZfyes7ZCoFNywFyhGESuNcLzgKaQhmquRLTRCKjSh4rHDin3gk27",
  "key21": "5U83nPVG17nLFaLo2yArxiw2zXH2AxqG69igvW9fXxKHqaxrTn7sGTqXPpfLbRFiGUWasGBvnGEpSk8SD9Qac5nZ",
  "key22": "3QSjoxdtn2sM4MLHjxqGUA5NkpjC6B1r8wREDWzgBPNmKMbqzUnLMorNjXsU4M9NUoohhWUCScxiVMxvVFQpFrHp",
  "key23": "3oWDWQP1LTQj1RRdNPJi9LQFhhxp7dCnaktChytdFicRRZaB1opcTa9emJSraCReavEv1SU1WQL8gH44uWizUYa3",
  "key24": "2AZxi4ysECyEJRrX4M8kXJHAu5v12BgnffujAxkDqc4GwGwqnAs8YxrXtM4t9Cp2Ubx75aNvFEmRvcfmdVkdWhi6",
  "key25": "2uoJ73yCL5ntA1rPgQ3Yx8wGgbSVT79HrZqiP9WnmZGEDV82wy15MpboNR4r1g1TNqm73MnXxXMvhomHBGY7Vbe2",
  "key26": "4HoNhsa9Gb3UHFQuaDk8MhrkyhuhLihN2W5hJQTKNRVXRWYMYAAeoiNkoAewTG9pNZewBf3FmT9ftGc8nL9REabh",
  "key27": "3nPY3HE2gAR7DPCYUxbcg8zCHoNH3xjk55BAQWQ9u9zrqa94NwhWL7T6iyhJyqsvk6sdfnem5Eh59JKS2ACCeRBK",
  "key28": "4mPXV6edZo4FC1iqCoyKYief8UThJcKevyufSNwNTajm4Md8uSrchfXmnQhjGB3BcBYCQRDU3TgKTLuYvwmYuaqL",
  "key29": "5UfzTnxC6YkRccFitM7fsayMxd1MoFagez6z8K3KTe3vyKy1JYfiC8XFCtfZHEYCgYSqMLUgHTHVdCRZLGoiJWX1",
  "key30": "4FvLJeyqLsSkAni3kSP9HRi1jcatcWXpco55KghwERCvXLRXirdY7Rh5RWQeifGbNpT8LdvXPbENPtvr7Nc1BVTg",
  "key31": "5marwz3t814Mz81fTWtcUuTFcxN3HmUU29eZBGb7ssu55P5Ng4Bgg5j4WwLt39CJVAKTsnJP3ST1KoGRa34hTZcK",
  "key32": "N4duBu6CshLLqiJaP1Te26dySzdsLQof5W2EqEdhVzW5VM8JzsHyv3HeVWz3joThL9iFAZoS1SgzzSntAakfvJ1"
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
