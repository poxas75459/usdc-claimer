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
    "2zVRwTJn1JgnNyAa2BCCtLpjEiVpqCDsCdSdnY3yqgCzSDkskGheNH2uxL2NLcmsnFdQEB3hXEjfWNvfA5ipSfFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BDKwC9q6qJ95KkpRDGnebtKaX3UMwhAtWVKMJrzBhkHcQGEys7aV63oh8pwjzjosZ2X9y53M9K8vfMaoinMVxPG",
  "key1": "233AcoSN7G1kjJdShugRSYVeGdojtq5qtb4AfjFCxYAZyho2etGB65MKwhmHinkj65X8saH3pi3zQxHUfLk4UrQ8",
  "key2": "3xAnX4CyqMmRm3HQ3kDTmu1XKhhTo8MmmBV75JgTxKs669o9xEnBwG8qcPtza9kdwFtAUprMCriwyFhfSm9MJ6FT",
  "key3": "41Z8Sb8vrMo8am9pL8qAKH2BUbCyjfqVizdaiudvTmHFyk3WRVsbrivYifXMww45gdi5KJueR32NRPgh1rP2o8S5",
  "key4": "5wgd4GmQB2398MimEx8NYVT41EcTryeGrXPs7ST52DQHshrZHpL4K3kM45CEby2rj4hcE1vfRDYcoGtFk8PJoKNK",
  "key5": "5dTQQKHXhhSwL4xsekW6azcidHZGZGF9kFMP5UMnDnVQiGqdGHLmH2oJFdUcmEFCw2hFaZDazX4vM9PLx7537R5V",
  "key6": "39RqNoHNdbSLh254NqFJXVTZaCpKgfVbopv7utuwznAsh7rte7muz1wJ6cqwSqansurxTimyVFMYtMVLkDLFWy6M",
  "key7": "4tXuu5WssVJn5rMWqv5bwBHHmzVdMgxk5wtB5yge2XazvjYodp5yTLLknhKTYw9E799dXonCV2PfaLetVjiVMyCo",
  "key8": "Tbbo4neuVMzYMAfoV9dmUBvNRAJJ1qCqFim9gAxQ9NF1F4WDxT8HuDJXzy2EwP6hcvjYDwfjBnd6e8nQq3MKq1y",
  "key9": "uQ7p5X47FSRuLuEofdtm7ab8KhuMFo51yKaqTPh6y2hCJgYM27aWtV2sKUWwByeskV78YGd9HqxdtBoCXpv4zau",
  "key10": "pTegqEdmVfBaGycDRdTuU8MGLb6WJi8hRD5EoMLXzTSQC9NZ3v7ksqxojiup46jcHBn1cXEHnAHLEPPDCCtQMav",
  "key11": "2XY4Ex1GjgnYd9AEcFyxfpZvvyuFdtNUDaToacvDsXG2gtWgQ3nWaHEWSwD5NG9NXuCrX6JsqFS8zwQzkdNC2wsj",
  "key12": "NqWsh1iJTBS4ySWe7sHtKDq8yC5HiEEpKLKANTPBZqeCx4HhhVijzLRU7uvonEmJkiYUhzyjT7HGto2RvmWNWT4",
  "key13": "X4quzmAM5eNwSuc1zjvXbBpay7aULB2LKc5shcKDgYmqrwxM5PTck38d42KqmpgnkVFxZfJvhzgSAhf1JgY1Xv3",
  "key14": "41kfoZeRY4DZ7kd71G3mjZNHinAL9V8RJhczy5fH97dDmgUpja3zRLr1BSEEZbi26mvKjXTF9XK5dXtKFFGjes92",
  "key15": "4z9XsP8zbDtBADkdXaUp2WUcPzZJpnfZBNTqffW1xsE1tX6eQgVFGHF6kBgjL2P1PoCAKW7afXq1btYWhiq5g6yq",
  "key16": "3SkMeZUHUEutPcr8wkUYEq42sraLdNrbqV4DWpszZGy4oPobuuHgPLXJkg7uHajWpoH9Qi5fsT5soYE8kaWUK7iq",
  "key17": "3kzA6ekbdC8f2pybs2hhdNgivAwAwZgzNJCDqJLTwxCTdYhrUdE4prVmgUyYhRuxhR7eAUFPPYzFGiMq3PeoEVou",
  "key18": "5WZjAh63KQZVfreUX1ybcm43r1iRuyo6VBbhaLx8fbsLfxqSgZs6dB3VgDjbU2tvWec83yhcHryknGqiBieQoeZH",
  "key19": "5PXmPxBfPBQ6nmaX434UWeMguYSfhgd5PtV6rbDHcQvH784bwVJjv7sMTGAQPdYFsjwGJvnTz6ZhccQYaaGNDjDJ",
  "key20": "5EWbwzca9ZwcZtoEY83jt41oiH9oFnq3i1qbfcf8UQdFCxJJnCc3jrHSkgSfiJPqVaq3tfjWWKTBs5WHcCTrxeM2",
  "key21": "4oQkddn8BJuJT1qJ7yV8uZSxpv4LczrdZiYwqSZ4JMQsdsBQXQGWWRqb4f8GdpMotJF5csisHNtT1sPtV4u3TtEM",
  "key22": "3kUVH39xkGLE2Vdsasyi7Zc6YMBx3maJbPrVrAwEKcqyFpH9CYh3hwM9WTiukZw4PEhuTsFnA24i4fKrBjuaRRXH",
  "key23": "5hez5wNZJu3WUyMsxju9jnyW3Dg3JGmnBDEZZ4Jr4ixpGfkWUYgcqRwpWtfVaw2ZWcKptH7La3Mk3GbsUKneG5iu",
  "key24": "kvR3QVmLatU3foyQ8q6gS9qgMymzQ2BTumc8t78W8jcMbv1HkdsyvSy6kPejHNu2RMwrUew4Xnf7CJLQAiYevrY",
  "key25": "5MesNwkhsMxNnbH1ufG9Qstzs8ZtTQcbG16N9CRCcYaJncy8hLSnaeTRRq3CxACPNtmR5EdVwrL7RWhW8TEd3gjZ",
  "key26": "3paYFZWKDDaNiNgr8iwvewPv6YYfvPeh91hTzkGUCdSAejHYWx4PWCSq3um9yj7pQj2zFPduutv5z7qv1FxnXyGN",
  "key27": "a76tRGutQJGpDVzPgkX5hZL6QTwNts2K1KwsDpAQjDdTc755poGz1rsYFRVx1HPR6HeDixHyGTedaz5wm5ShbCy",
  "key28": "4VXXuaZzis9Ebf3iF9b7uFhHDD3o6zSeix3fzuEA2H1drUEiE4rd6ShTLQhUZ3oJZDH9hnhjaCPCgKUs75aDV2ZX",
  "key29": "5rJ9u73ahdpiGztVF5znHW1XSoTiWpLeqgfAXymBnbXXcJTi7RqBBzFLB9RSQuArv7RVR9vERUxALSrMEvpCkAyT",
  "key30": "4iFqH1dCenJbRaioLYoT6awk5BMQtAmVXaSMnFEjLCQE8oETQiz4UaJmvdQATMCVhnEKKkoBD1XbSxtmFRYS4AVD",
  "key31": "2LUYiYp8wkip6pun8BX1kVyprhHA3AoV6z2iFSGbQhPJdP9HSkFiDuTfQKSdQmhYnWXz2vgfV2zL2QeopUL7tE5o",
  "key32": "45Sp6oGxvbPgHGYzd7JaM3SNUm1Cg4XUnvovM68KEqrT7mReCnCZd4Sf8fRFuZppEJK2JTRoYRD88yKJDGTYjMpU",
  "key33": "4WHbr3P362XcZHFDJBMf2f6VeMoi5EoFHQrRygCgVF8w2DDghXeze5A7iCeN7yNFMP2SN52HyvMxCqUTaZ4aRkRc",
  "key34": "2AxoAkWNqGpiAupegVkY8MxRzb4jsgk6oXEz9kAXFQhRiuqUHn4nXgrB4KPgeSsUC3wxBxFpfWoWzyjFNZARNrpH",
  "key35": "2GbXvvKHY9WwXCN4KFTxXDgUGa1UHbBU95YAp6Eo3yW6c88zmudkitfSKP4kipVQE37JZKcc6sC2hCN3zrpp58fY",
  "key36": "5pJDpWABRhJidwtTBXxbCD3XpbYs1nmirynDZ1MUMhmiB7cYv5KFLEr6fhj1zvfDv79M2HgRw9SQJUi8GoU9EciF",
  "key37": "8Bk9A5yTw7NYwTQufcT5mVVhcbNN5RWAaFn5Sb1kbBPZDadj9M9hffB6kDhbrBeL1f1bRf8hL2ks9LME2UqumcM",
  "key38": "4pJ6oTUqBj2hMtPxh8e7MpFk4YJYG2WbsQMdEeTFPus1q6DE2Pu73W5pbqKUebXZoJnEntqyqvrP1icNHuQafUyX",
  "key39": "5DrHrxFFxLLbmn2RyXwuAYRmP82nipQZNuvamCmJvsvTH9XAFU8yYksYC2NKJC4AD4RuL5EttCuqGbyheq2GQj7U",
  "key40": "3B1UUKyQ5Edz7vYRd8fPfkeAC6shs4viE6ovGnJeKwvyQzLzPMstsi113WCqaVX5j5PcyDwDrERTJA5te8U77x75"
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
