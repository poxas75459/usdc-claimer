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
    "32dgCLocLAbiovH9c7WPMRntmKefivGEg5uQa3RDcyFL2qHjp2wan5dGenhqU24tXLgMRsWZKVB7sEQUNENo19YA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k7A43u7YzqMf8ch1iTRQ4oW7VDYHA45MpRtRwB965Lw1fvzRR1cK2H6pDwnGVPqAMU3DwbRGDrFPRVnJQuEsh68",
  "key1": "4aRssbcNjwNggfdFSyqLV4SKgFkPmzo4aV9HPmjUubr6tKK1AYsjXhddWYawSUbfBfQcC5ZQNDojHnBUYjn8pF33",
  "key2": "dnfgeYHgJqTGxLrGx6RHwNujf8vYb6Rif3cxYn16ovAnfwPBH2yC1RW33ZTLU2GtmwBM3CwaDvBD8vHQgQEoXQJ",
  "key3": "411ifKySeQkEiqT619SWyQFaiBrkZUbtHDcxifMBgNMpFJzzvYFA7QbqaZr5GRzTxXuwBE8dvnamvuD8iHzyVJoW",
  "key4": "4eoWfo7afDqRqnR7MxQ7Yn27wzdH4po6aB2n1kZh9XWDZ2E4uv3VnRV5p7UiZa7EfyKPvgEGaCHBG7UVr9aFXCU6",
  "key5": "5BtEF7Feh95VCqc5aFGPG7xcUstbXAuCuLV2tBDtGTrLGLsK3VTWdMR1onbJTwiv6bwWFDo3yCt3NGmPnpTqcRYG",
  "key6": "5sWJ5qfxQZ1QVexUB6QmfBf5upkMeU69nJ6LoQFxZ6YMw4TpmJmXyfWuzUThP5Gs8G3tdaz9ytTakqmjF1o6Rx91",
  "key7": "XNQZYos7H8ABH96FQRkrvVsarQt2USdGNCFBTm9UhsEn45EyRyhh7kvnfJeyTg3iS4WHRLJswMBT3VeYe1WUt8j",
  "key8": "4h4o6RpojVQwK6y9HTEQpLMt8si9LzYW3VgMEfaUTe2baV7ed39gWoyxASMGkqWnr3jFVyPp4bMGZyMj7AQiGp6V",
  "key9": "9rUUbmNqEWXHhf9pHFy8SRKqv8THonpdxkqkPsY4vwmn4aLFhoJgwqd59AF2zsvDsXyAVoiWyynkjjfFjmLh265",
  "key10": "4GEULLrBjpnxtJytwtTEtjBMcFhUbPB4CLEPQjToxCrXXaQHkJBeFn6u5QuhgT5npBaagBbQMVqNQwJuBGZNjvpV",
  "key11": "4n32FF2XTXuhYpmjieb46ayqJG85zevpiyvuMy9cQeyyxcqCmUaAmduGXSLqmY54mAePp7rdvkZNmt5gyZVmJ1Ax",
  "key12": "5nngcWaRsZwMsGkucgEv7Vi2D3vTTH4tYXLv4jD7i5rqtHSsmpk9cCjJnzV11xU3rSqtgkh5DUnSvDNtbDMhTzyy",
  "key13": "2yNSQCPnP4NoE9jmJ4VRnHiDqxzqz2NvH3jtGbjBVJRFuFHKcj8MYhEyVRdDq9vJhaWNTjaVn6xhDs9EnMfxJN2d",
  "key14": "41VLZ4rMZvThx1XGjtTCEE3sGAqJGnkeBmfxWTddPHZLwm7uuvFTyuCMiKk6Wh3Uu6fLUcSmrxS9LP7r6xWR1ME",
  "key15": "2nMNXNEnM9yVrksPyPe7wXtniGgGqQjKYTUm7fnXLggyeyKCez4UVAZi1tmeamURfPjQBJM63wrquY24GwrPYgNg",
  "key16": "4rCUytbD5GXnU5QYdA6Vubummusf8t78Kxj18oMze96xNBJoHb1APjvgZyLb4u8PXuyavtbfJRJweBU9szpXZfwb",
  "key17": "uKHAK95MJjoeYDyNUt6dNLgXHkye6c1bofJ5Tmj47iZQg1RdrasCu4nJs9Y5GbWbuuR6n2gjUHcNWSF1gZ2d4kZ",
  "key18": "5PcJufB5dP3jg4JLdGPvrSYq3aJgeBV2ewxVw9BVD3pYYe6w9wC8JaZsiF1gnuRMDsFGdoKHhiJ5ocDVdnF1MsRD",
  "key19": "2JxfN6eMy4zcQpGbsWHArPk3WV5BFGuGXhAEpU18YC7WRtyNaTaRvJLRKA7svPsqTsPT8GxNXjbTAwqqp1jHqgg1",
  "key20": "49RejBx3Hhr3vm6ikZqknsrJHpdzm4EH4fuCghxaagLzHgF2F4qP5HdnY11C5qqNw4qZsLJfFSw7AZwLTYSqXHMD",
  "key21": "3RS44GYtzDCBJ72jEv6g7czDYakNhqWvHpfbVn3FvRtXBY8YiJxKazLxwxYD1ZAw6X6jjcwgm7URSPqFQFPRByD8",
  "key22": "2irBE81dPx84Cwj9sLDMkGSQSNegGGFMSy2akYsrwsgR6VnQStXJ3SKAU53n4aET2QFvCcRZdqh9GGNNYSch4p1r",
  "key23": "5zjKrNqQBJjUerXYbwSYGBtFp12Kz7CaDhLrpjRvZX8eKbuQMKMqKYedM5dbW7ip2msi4wM1KHrQEEywSexxWN93",
  "key24": "4vXKhLg9HCSV8xbVm8y77MwCydM7zAxSye4TAp2h8K3zH9vCMQdFqhRvfPkzk57D1cY4z6Eu6TAzC69vKE49pBbg",
  "key25": "42QaqRJHPckbYDnDRWNXuTKHkfHWxixQUyhVT7C3ueBGshPuCzTNAvXUghS9FBToNgiz51E4c9UvVnMQfbKxutnH",
  "key26": "2k83J6Mt4B9gyEtxhgXfZPGVeKwwYRLMfgb72rZAcvkMJbPr6KMTQmtrvKVWqmmTx7fVU69YFq3YyzzdpGbSPWsy",
  "key27": "4Z56r1ca22n4T8GpPNCwAmcfSLyCiH6WQnrGz8qnqo79GbenKYQr9CQKBd2XQfABXjqym3H24V9ARW7cjBTeEQ6X",
  "key28": "3vCbdrW4HqJK3PDbQoxg8hM5NHcXVeipwKuvyBu1yDgxgmSCrkqik1nPpo9xL18buZx95raGzjh3sg8Jf6bxyYPD",
  "key29": "3zSFQe14Gm61AKC9iMN2FEuwnf6YCN36Fd6g3ThPf7A6WrcDucHiyu5XeXsnCdKswb4MCkuS5UW52r3V3umvgPvo",
  "key30": "UnYNwoNPmTcdQeJY58tsFQUHDZ29dtVPFTodfhyhBtMBXqRFJMFFkPHsyWrtHmozr95sRZW2mRrL5mUbB14BBAb",
  "key31": "4DHqGftivwhsoZfyxuh6SPirUxJNcpggQat8m9HhkK7LJKRkKU36Rthv6EdmGHeNSDtPqggHBYdd8Ete8ALHPmFh",
  "key32": "5g2CnaWSZjXcg7uhVCWf9Uf9wXaDMM6hRJerWwyCH5hS7Z8AJzojVC493FWxduYGQ6XfRRbVnJtnf3TGS5MUSvdD",
  "key33": "63AgR27tP5KbQAn5fj6PR5ozNtDFMrA7KkRALrbkVQkwUmXF9EDDMu4jRp77dSLCEkxVmRJUPbdKWBZayGMNVZ8M",
  "key34": "4xGC9kCz3D3oTTgrYxe6yWjgH5FsRro3BCP8PMHZabn5JFdj45YmE9Axgyn57n56PonSS4KU4mpQhDWmdfE6PCde",
  "key35": "2yShiKVuV3T6wCq59BjUYsWwRj37LFbMbuyiXpApKqKhRHhm2yyJR5f5WP1DJQBX8ts6mSbhis2uoScmYPriLx1F",
  "key36": "4mJbWyepCRTQSTFoTyH8GE1WMxiB9hsJB29SBrSbceiJzzRiAjWpXXR47ZHheLm6NqAkG1oDgm8MkLkwAvCp4XW9",
  "key37": "4LYsBAy4cV5F2PYwvjytVMiS5xFPNnbVPJ8RQKx5cbGuwv4tr7D5q3j8pk48p2yXULbdw7FVS4yV1HEXPcqDfWeN",
  "key38": "2eW2nsFbwgvtDaQXc8boS3msyeR2dD35bttq8y74nCcadSEG6ZX6RvrgYE3PSpHtCvTF5GhpWg8coh1hnytfKSSX",
  "key39": "25gJv5wH8rLHkHJV8pfThG6aS5NohcbobN8bdVEEAWDEVS4uXvYNa31YZryg9upuLzfhobKBBJiGGfCNRGxviwuZ",
  "key40": "46aSbUYy54pfwXqh2EgcPXVftoqFwau3YxKsropTkdWnzNK16Pq85M1V3cGZtezhiX6pgqPpWCNrtXaQTrK6pAyB",
  "key41": "taVnUTXqy4V6bJJhZ24LB1S5fFTCXcz85iynLMG37TiLYjMu36w6pyhWXGSyiVHx7VPcSNGTMBJBtgNWYr5E5dE",
  "key42": "4fjjKCiFo78bDjAJewSaSbvj96xp5QLEnYA5cavzjXarsS7kcxobkcS845uNtdYZZc2beVUaFzfsEocFHhrjbFGP",
  "key43": "4ePu3hGKAeGhcmnt3muQoVi7LjQgTvpqX8QtG7Zj6xAu6M5LrAHXBT3fhGZUDPNZpNSqL1DmQFN8XNUvkT6JQUs8",
  "key44": "2FA5dHocGTPugiMcDt96ZYDGVY8PbBocyBcYHPQziguqJBy3bna1fmquoS3hbPuJUhWGkMGiVi7hcjdaBAqMB7L5",
  "key45": "3THqaWC2tuSt4MrrkmgmbM4GDViHmJsQBCKqB46RiGM1jbr44RebXrQTn2SoeTevohP6V4jXtmGBZLBRgge4J8ou",
  "key46": "3pp8itV1h1TSwm7nxqMF8oq8QJx6W8NRdYUQ7ByZoqiTakrKpDW8HLQfsuv7ofdzkthUYp4NZT6MtwwduY7UH5RW"
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
