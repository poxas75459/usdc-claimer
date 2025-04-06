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
    "5ATSacN6U1MdeG9BggiC2VMmvzGGdRnXYhwC69DXdXCs2iYdFVCW62uaRMBk4CcfYraTYb7g8a61RjnDcNM4GY43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55icXcXkw6CKPPyifbit755UYZMoN1qmTbsz9sd32BTZFnNtvdoQojmAa5BVpAP8fdT7RkscmYzyunbpophNQqik",
  "key1": "2SjYkeuzXziwXAZh5WrEp3AypfeEbAMe5R1JfmMy5FinkToGn4qV1uMTZeesf2CWCs8tE7NxSDJJ5cHhvwWeoArV",
  "key2": "ScXUQpQK9kd7jTwJr2SmCo7AbwK4V5YGRzG3DWhP64phG7hwgG1sjDqsN7jJkAp34ZiL4KWgbN9SaScvCTJgMfQ",
  "key3": "23ToYh1WrLqvX943tx92hWSXSSJsXiKAPJCJcxuHQVbCEYnojJiwE5PKYjHpYn7rZLjnmpyJzR21ALp7V552qb9s",
  "key4": "2ofcZaGt7QJaP1uozHXmgAgwrbzpU2QfrJvdjhb8M1TQQqPo2AosuktDK9F6PSd45G8h8acMsfEEdUAfyTtnDmrY",
  "key5": "EmYc7nejHV1pccSQ7kwadMsJ6be2JoycXgh8kqy5sbZGtpmaEVFdktH8X3ZTTfadi8UpX9kgZHpQnBMeovC2xpQ",
  "key6": "3g4YWmrajNMhTfoaLSuQnsTL4WmU4aYmrrjJ5snb5iZD6jo63xkmBNCEQZZ596KmrSB3m8NczaxGtFuuE8wTgecD",
  "key7": "DUQXwrg9XVZ9zbaiW6VnVK69fUw7ihL6buxk6gRRfEaWAQ1RGAdWYiVErvqQQdwFbA1dacrFVm5NY7wskd66Skb",
  "key8": "gcsbexmej4QyN2US5dgcsmpzKGw917HnxyeG1JeJYWn28hMjFJXkfD1apYTJQ8FU1xmAr3QHVUdx5QuLBHCMsn2",
  "key9": "5EFnY5CwsTrQM64YyHPG5bXydE8mLyL6wa3Qw2a1d2QFd2cEzbn7JXUohGhn76oydcWjCHBGH4om6iR6sM2WuzPY",
  "key10": "3rwhVFFR4JSLyijVnha5g7SpmMK27h6DyvzuPEMo8xUMX5FDLRLwZHa8WskwoXqCPkUHdg81N7VFpA66Kmd4DF4F",
  "key11": "GNP1eD6g1CWLR7MPYFNEx1h6p97x1wiNWZpSTU3re4sJpHjVWXnDjzxcrxQL2CQsXfiAPeRyAmdP83GixAhRy3H",
  "key12": "4Bgg88u5rKnpmSCWdRTEG1yFAehkPuJRjAdKUfMhAwGL2PMxu39wiua5CQ58JvedUfRHyKWV59nCKXDQqcaUTzcg",
  "key13": "4m4dLwYSHsCBiNdrKJn8fxnjqpPM4ULJ2rcg3ajcrmDNXJiiK3Yyh2cmvRKZqBDjcgrT5UCicVuNFhKUKLfkNDF4",
  "key14": "ZQWpd4fEGg4KweJV4WACjf4MCrZpizExSVAL7UZWpKmVkqLcZk1xZdM8AnwsY2P2AqEw6Hv2kbkKjMVLMwgaTxB",
  "key15": "31f3hwD4y8LFco6iK9du8BBw5pRSUnBbLiXzmLjG6N4iezkqH3hrSxmBZeKe95JsTaxqGxNNrETUTaRA2h8McVMS",
  "key16": "4ZrhDSCgcHHLbaM5EQKSyux8DYmJPdu6SyqwYLNX4JENDgrk2pcJ9hgUuoeKvtsRBedubJPpupeQvewt1bXS2MvH",
  "key17": "3g9rMeN9gxMYGAxfWPxRPT6tjHWHZfgdyjsT1yPXFU4ertVavM78qfP4qAjsGrc2vobDRctpiJGrcGTdciY1sY8p",
  "key18": "5Gz3ceFmtDCsvT8Ft5VRowW85qxMFJqxrpqkrTwqXc4WrksfFgYNnw1cHTmKKbChGCTq2CyK5M2LVPzTusF9GYLy",
  "key19": "45SvHodQ13y4Bcqi4DNhqBvEojbCnJY6CTm92SR2fsKGk4FXRHGxL554QyNRskvJ4zyoPxByEiSpAUKCxJmg1VrD",
  "key20": "4eYYByiEBBmF1hoEPBHifGuo22kQbAHxNVwhK8aJPTCWzvju3rKW5XrPQSH8Es4NK72PKt3mafiUSYTNX8H23xCX",
  "key21": "5ffijhHZ3WN8k3DApheAN9AptQqqeCYsTgkT4VrWVfKBG7VKqqTQiUGmAAJ6iDVAiNyL66gPkAzWiV2R1WaJPNGz",
  "key22": "5sYLZCwxRBBnM1JKM3DUH3qFxEVvPwrWoKKGHHpwjCWQkuH37tE5wX5okf61dz9bjuYW4QuKy6w3XocKnP3dRNnf",
  "key23": "4ZDAAUAwcGVSPyLZtj98fBJk42rkpaJYEmAWUJ7vcw22p1YjHkun2hxiHXYT7mfunb1vPsexMV9hL7EvC2i2wxyi",
  "key24": "35jo1th6zV9EAcRFyfytM3wSyveTfPoTfj13RnfUSZXnVN79HGrTvsEw4SduaFtCGHvvYqwpUJBwg1auHxihR5pE",
  "key25": "3tXStgwQ6jnzUDcFWCEznauERhnxpy7nHqouFK9ShFmzCG16xnKQX9UigFgu9uni1dXEVM4EftGZWoKjiMqPUvCG",
  "key26": "4c7RDYYvJyB3iJPqHT1Ra8d6ijLLcb7ffjMahY9sHFFgMSY6zrdqbySz7wKj9kgeJvTNPvQRA7uzLnGTcrjkMmB8",
  "key27": "3vhznZh4k2WqjivFvMTRhBytd2L5K8EE6tcAVdw9sVooqSsnb6AKD2fvGzsbKjMLcc7sp9Ny1jmUYZho8gmu5QjU",
  "key28": "3qNkhW3sQen5k7cj37vGpN4Rdk4aMtSCsWxYniPNBqC5kDkXafhF2vfpBEmMPgHXdMwMi5NV1VBjGjnWJPqq1Vss",
  "key29": "3LFCF1Rtjr2qvAqWY8mjyVZbUB5muDJmgC4qH5v8W2GVoL8m2E7iLpXABEuc5zrM5NtFqpzvh48kinVAQ8kUhX2m",
  "key30": "4NdvkqAKtHTC3BGTDiPtM7i6QUmB5nLUz2pThsMjdmPPi1f8WbxFknbnGW6kZ3WKHqbkE7k6fUsBrwPoMhPsfJ2m",
  "key31": "5w88R6KHM4m5sU6G2sBP7SGK3fpNjv37UeZQGNTYRZXaidEAqAXU52zHC614z4wS95GLcxA233RPNTrk8n9sjF8W",
  "key32": "29KHEp5nWmppDjo5pCCNTrVeVZHjWFntudSmdfNG4jGsdcdboKgWd3iksv3drQdNDYnsuNEQmbXAJu2mebBUQJad",
  "key33": "2Ty6ndSqao43fEiDBASVZradN3AhjXEjFewem4DXAEJHBKjpdpyVqRFdqK92MAvpNyDv6WAwU8dEntYLWPaQY5TN",
  "key34": "3gKjHmS2p7sdC1Pt5daggeyNR1FV1GezyCSXhDiPHW4poDfcTgzgA6pmEZPg646HDpFP5wH3uvGZNJvPZmprtkcJ",
  "key35": "2JY3PNJt8ftxChd3pCEYZkaoN6DUQW9MbdytcgGjSqU8mtDF8EWwxmGSHGwLvNJR2q3ydPkMaSFJVYxPA9f33e14",
  "key36": "eymuHo8PwkCDfArowbZ4yy6VcvKwoitpCMcZdyPfrbmCZBVjd98euDtvyA8BqnQBa6ekfGCkxngDt6F89sVENSB",
  "key37": "3whPNhJjJX8FMczTHLRMxC2MmqoJo4ch7yiqM1EU7pYgxyJC6iEVGdWA63vNLwkVke5XDwHNeMU6QxHN6sBje7xL",
  "key38": "V4wd5AowTbRurcF5kmnw8Lj9C2WP1exFesG8UCUyLGwGfdNe7AgAwfmc3ZYgiaz1LFGWzaii1GFdPvPWDYvkD2q",
  "key39": "5CPMeuhiAxufgQMvFfzgvTMkNxFEdbhrfFtdcQYe7XLhwBqBz3LaL6GspxAJqA5TxodnryfYDd2A9kAmFDH5CMra",
  "key40": "2p5BEBdbJuMymPkqB2XPGvNTNeTfTXw6eq1DC9V1wDt5PpWnhnLKvWrpD1QJ8cKYNYzX56F4oBZpaq3g5tFqPTtr",
  "key41": "3vuZ6uSs9qXZ77XZMD8jRb6iXg5dCQD7764zd8DWoQSDJ8V7Gs2shpYC3nYoURSkePBkc3zVcWhQU7K27nc7wrtV",
  "key42": "2ZVzvqyDxBKsWgMdhHWF9d4ENbK5puHua2oqSAqNBicK5Ti9FZ82zucpvkywX38Efqn9pPf5rxQkZVMzdvMZTrU2",
  "key43": "37eJ4vyjKdGX4PoCNUrRtvbbgqPmmBE8jddb475KvHsK29xrenAvjgfdfFHrxG92Tgtg8fFRvkSZLuuQVAcEnzmR",
  "key44": "QSxHuv7bDqoqEPNku93aoYsobgeK8pWdT3ZUxdHEBnefv6QFqjXrbFVjPUpkzKKzGQZRs2JQYukZUXfYzjPn26k"
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
