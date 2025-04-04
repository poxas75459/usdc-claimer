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
    "2Y3VNjTpG6sw6wD5U89MCRBVe2ADBM3a1xrWs8n4qMAPSRJfbhJ3rRxLE1qfatVxfxYayzdttqSfd6MtsXFShQ7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nrjYSF7M7yZeLDM8omaVgZqd7gj4JuYpEVfektFYfyj92hGR7hRZV7Pa7RceijDo6atsaanfQwXTRqpMi59iZRw",
  "key1": "4TfbJUSJ5mCak4V5gjmhET9uyfXkARVjYyNLY6T2JJHPGCde3ezuPPn8L2YkneJXzRff5qJmq4CyfA2A7B2QPpkq",
  "key2": "5o6sZabUymJh8GJnSZuffeYZ1UHzbJYk4VC7tdTi3SUAsan1uZuRXTV8Thu7UBSXdr4fu2MS78aEJ99LJB9sDxhW",
  "key3": "4iNEQDyT3p8b7SGMGih5k9TmsCz5Y9mkowYTguibHAWkQYpFDThLNP4aXVJqFvV4XWCQPeS1AMD7KmF7vUkRTYos",
  "key4": "4LxbsvFYSFpThTzuY6amEZfBJ1JEG2CwQBdvSXyAehwfj6KhwS7FMU7iwzrGce1aNUhVB1kvGX6W3W2BFJiK4EFt",
  "key5": "UexqxoFpFnCx5zc6Uu1KQJdKvyFyLm5XgANuDfaHaAPJgcXFxcTggpmHgAmW13UYusXnU1bxMPCNyDC3gs6yRqK",
  "key6": "t9PuneCj3zCo7eEsTgw7p7fL7tLFcEiLWxZUd9vMkeyPc4yXwWjEdLXo9rAW7z9GJt1PV7sXh3A6FTppABkkWmD",
  "key7": "2xXJBB3QA22WXWU5yaJdPxu4BuKfV8MHJDmq2CKTV2Xvh6nvxBYJtguqfd6coWsiEMUuyhKopjP9B5SEBZz5URbo",
  "key8": "2kkAyEubm3YvfkmyEm6GeBFk3LWAE3XMeFe82jsV1HSTLdiYqaU28ht1T6hVUrVGaowXQGVtHtjWPjXpMB5xCWqC",
  "key9": "3DwyvMp4gULAVwoceARPrTCpk79Y5ks7SMrnWsvNkrkTGVAoCEjgyseuLmUaTURLvtcASU8nmzAqaCpdYstg7Diy",
  "key10": "2UGb2F3FzUcSU8QwFWvYy9bdUFr2eZWn6WvkpRGaiwU3Uk1XvvVmLB13m1A5tjsgZ2QuFSkCuRJrhB7mgVw91bcJ",
  "key11": "5Zsedjm9Gzgj7dhvZRfTuxaHXmiYfMEjjpinnwrdMhrWfZny5qBMy4jnsLGxVeJaYKeyviJjTQTsGsYmUTD5dAgR",
  "key12": "3x4Lw9Mmx6uzUsTgq8px55TdEvdWqnPvrL5WGz5D2Nann777WaTev6UBzU12S3hQFoLpiDBAT9Pg6gE7xTh21hQM",
  "key13": "bB9VNDooiujxRpLUJX4oNgeDDMwEfmHkGnDVsDeALMYsaLunVP4ZHXFx8KGmZhvCaVPBfY1r6w5g6JTBHtC9uUk",
  "key14": "5UVzXYjErN39SAkS5en5KFGFgxWCBAY3CVSvpVrJxPCE4VBZzFDGCFnSh63bAYLxvTrC2inxioFufmHkzzcpHatb",
  "key15": "2tPN2t7bsEzfUc6nbtbQsyy8GDvsBaAbwwibN8fnArdbwQYhWfaMGg44sMecfymzaHqY1bJHDYM6LLFb6HPgP7Te",
  "key16": "53vPtFwXQbpRsh1M6ySCpBTbQqGCiq78CwAP8hUGLZTpRbWu1HtjkUcRQmBkwD3RsCTq7KTnLfxZQSXmHxwzvCth",
  "key17": "51phTC2Nazs6Lp7g384iFtUACSUG9K9bB8xUgQ7o1kp2wTXUYRq4uJ2BQEJMjtbwsKgi2qmsN4fJPjp4u9uSaxSU",
  "key18": "579SKm4RkpKyBydWtZJzqasny2Vb3srRaBS1cLCJePcV6VRDzCHU5Vd6rRwr8Qo4GHHyemNV9F7LYxtTai2mfSSX",
  "key19": "4ApG3q7v7ScGTy9N564G1NUHzhWBNfJW786kMfLcHKQNXx3bT71CNMJQG9YWvy7L2XFiuBRJbDyXBXKd75SeyX2R",
  "key20": "3ENwWHaqy6MNVnAD4VAX52HLKDKNWF3QB9zZaMDywBozosD2WhAsWDx9T4v677GvE6gcbpn6vFcxmDu8U8CD1tbk",
  "key21": "3mHmA5gHFoWhfxK2VwiWQkGeC7TCeaPy3LcVXjfBJtLw6yHApzoRh59oRKeWwuzL1ixsmXB7XdzjSkMnk42XzMR",
  "key22": "52Y79RLHYPQzCSebxdhJ4orjQt7WXW2dHvoWpk92BhRbHuAeZgKf2Z9qS7NFmdR88gKwS9Lg4MXyWsLDJiiijWsC",
  "key23": "3C6xvzDTuSCpASy544sEGbHfMRkVrbyw5pXAyFqdssNxF2CRTcqoY9ukj4cgNMkHydXiehsfbgesw1upFNSNyTRv",
  "key24": "ZxqtkmKsX21EkBLdM2jSKu8UfLiDu3KPUeKS81jWLDo3EA1SntsT2U4tp25TZNUYvAyVH7f8bKHBJC8zGJm44Yk",
  "key25": "2pF3a68Lt9wkvbUfzbifGPm88uF2uKpgSn99PkPvkZyvkixMJKio7qvsiP7MfQ3Cnhuv99YaBLo6VbNaYyc6enic",
  "key26": "4y35aExqYUgbFQxnS1i1SMEPL3FkJzFY4EQMn3E7st4jxJnpmki8CY2vDrLvvRerw9cuKtiTsjzq65XchWdMeSQR",
  "key27": "Nfkih2QgnvKwW9QmzCMNU9x8nzzYpKvEm6fAYp9Pszcu4T55Ct3Xtt2eMGnt1tAB8NRujCT8fxspvc46cex2vxx",
  "key28": "57QjeqVdGmEQNzhdkXHCxmNXBEyTQKbjKjdNGSvLb866NFmqcyQHBXsAsDCA4emff3JZn7SR9m9hpzBV4GX9EH2R",
  "key29": "4sDXYfhqA3oHG2kW1TSbCyA5BhYR47h9zjufMS36CaeZu8ev7N5jNRmvyqkP6LzFrimmbgg7TwoYNfzkQHjEvz4B",
  "key30": "4qn2yDS2hGmHiUGtbm6po8zi6XFWwS7q8oD77qGXT7SfQMki1iimhv3eKzZJnoLjGYXuLcZ5K5bc74H4oQBqjfzh",
  "key31": "4XpdjaKeKJPMZ3U8qQc897pHmPK7fpwv2SyUJcDCLBvG55fJXma6xoyPV3jEyGKQyUN2jhKSXZQLd85QCKtccvoY",
  "key32": "5KPor1GG99peTV3g5z9Ar7xmgQNrp2iaurxnhj1CERFiZs2k3nYZyEF9ccPoaPW37gWrRenX9dA15tdRc3ATkB34",
  "key33": "2s74k4i29PWGjztTfaCe3eL3YYFpzzn5pnTWxjEYXsNjorD2ho3wRT7YJLoR6aDBrYwcMxPLVsZdU6jFPmaAmDZ8",
  "key34": "4vjZVhoS6LwgjZtWPnnvfe9oDG78SKuXC9cBhv5C1gUhz8oAT5Yx5jpzUDyCzFrmJGXp1vYThaHrBq9cLNCLRqPh",
  "key35": "5rVcGdRhG1icDyRs4wdzqGdnYynv1xx87QcE1jvKy6fwCwa4Ge9fpNSLygTdN64ffKgxkQSMJDPCR765GmTm3LdB",
  "key36": "5avP9JgTyEKYdKem5bvUhvDCpmYb8zHcEjb9DRJ3uhBn9TKTqrW4fXqY82ag4cCtqkEEXaf1suM4DFkpV9GJCgJ9",
  "key37": "2o4GRSoCHyMcgTMVUAjcvePRxKcqvFsv69e4zXY9wZFP42eWAVqnWjsFjrHbhdhANPtaeAFDVyXpCw5LymDvwf3z",
  "key38": "5npUctDUQGJzYpNVGpceYR7ELG3rWAEMC6WZZtK5LqAZGAHBPB9PKER1Vfq2efahPi7Z6DiLyeC9dWtPuuSHWSL5",
  "key39": "43jP6cP3kRxpqjeERjPwaNKHC7sYcs3CiWopfHfVvNNhfMcpLvMm3Rp8smXWMbEDENpm7qv8GX958oiykHFxBrxk",
  "key40": "ffxQN48J9KTf8FMjPsQGuG5vv9frFHUcgiFKrp3ZYTcfpjq9uL5KMpXMxSTE9ZJ7ciy8Eiu3tzGvQ9vr6wgrP9M"
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
