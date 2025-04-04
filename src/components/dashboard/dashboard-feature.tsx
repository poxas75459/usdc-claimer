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
    "Phc2Jyz1QacUEHePJinn6gUVeLdQr523zhhWfgz3JPk1dFYAPc1WLhyGJYX12yQjw1nFPVmWefxK3mSyxEHxSHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52eRShU1fuKUfyQBx8MB5ectY6oBp1tutUfy7pQhEzTXGrHg2PGRHJiYEU361oht91VYcDcEdZuf33vApPNJ3L4N",
  "key1": "2tUR1RrYiiaogXRjM7mLR11CqR1C7h7987aBcQnhvGeFZPonSdFZkXWPXnuJQCiW2Nr6w7nX6UAUgQPVqiG53QTd",
  "key2": "2KYTw9enYbY6EB5ZYNQHEAjFYoR1bwELNTF2YKCzbemkrb2VUH58teAHCwSNYZmcmzgFkYkNEYNGKkuA18NG2FiW",
  "key3": "2JZK5cUfXhzqSktZGXvGkckJgW8GzyZz7JQeSBfhscREUacn3MGCGJAc62m2xxbys41U9SSj9oEpVmq1DYcqRPFr",
  "key4": "3BP6d56iezfD5ShDi3TjNqKvWmfATaqVuzZUn2PVRZP6Dy9TrfSdZrLtzzA5qgKgY91iaq8ZAM2SF4bm6RikGqhC",
  "key5": "2LBtFBbyP9Pm4VThGwMX1fc6HgJbmudBPnm42prvR8k1HGn7aNuanpM1wt2cSoZwra8Y6MDLwTs16thskqix1oxT",
  "key6": "2UJA6Kg2j8mVwv44tRe1ybgZocWzCtnxYXWrGeGbosKfzXJnz2Z21Fh3g9SmrrfNaEZCPXgKa6FR69fjYK2yTkx9",
  "key7": "4btNfHySezWrMBJVtzvu2CxbUS3hdZYhyTFPfLBmPyRQHq81HegokS3C195HoFL5hknekWs9KBBwh3pByqEyrwux",
  "key8": "5EJhSTgd836HV2HEdGXZwLHtaUpMPC11WErPfzPDNUcf4VxvoxrwgzTMG2BBnnNtawr5EZPjpzktYE8vZcwj7K3F",
  "key9": "36J4XQGBZYN2ZKLtWifiLyJAt6UnPdpUUQvQ12M9TPZ57kGfuENVPRvbguZqw1vdXcBrmJY5q8GFoHUE3yzmtVfD",
  "key10": "4zNuQQDxQVvCxC1vdUSfwZTdMTq8HYLCRsAiPQ1826xQi2MELcLY1Dk411BLZEb2UxeJn4YpP8GJz5fLSCbGKLFL",
  "key11": "43pQQHLDujWTdPzHpKrcokr9rV33ChBh7UThoqQ77hQzi9YzqoVJ9xEpk2kqxJSgkeDpkaMtMVf55cL667mUvm59",
  "key12": "4EjUF6A9x7M8tvph9aR2U3QfVBStbeHoKFkpewkdnx99MhQwZe4gD1HowL3JMxEn9v2MMYgdrVnJg81msJBNV1p8",
  "key13": "4oHuPaUPnknPbCy6VrkCo9wkXaqKJaaPbgVYX5RsEL3WJ6Jqgtvi7npgP6TNeDXDP113jcoapBUcdKvDrE7KReQj",
  "key14": "37JUud78SNRP9g2su11v6jbApLTADaBLrAx3XnVNFgGfimMkLcAhs6swuYnGoL9ZE3aCS7YyHmJTGTzfWhCJ96AX",
  "key15": "w2yZY1is4NtpgSdiwRygfMgzGgnanvLovHWDjqDf39mgFj2c4qwSgyVxdUUn2428RnfPagdTpjAsMo7wGEJGfQq",
  "key16": "2WCS5PDHEt5NAbQQhSgo8auw9DBd4wpz7vj8ckD9zbeUpJdktjgZH5ASZywXYZvepMUHTPxgD6pSDJJzWAFE4fHe",
  "key17": "3mtkmwcJG5wH6Ud6ubGCg2zrKobV8RXSWYpNxzx4D8ckML75jMqikHjs7CZQdfAjjRYAdTp51Tqy5b6Bdycj6Rvq",
  "key18": "4bpjGfs5m6WN574TvmsDw4icv6Cqv3YytgbHaRAkKtX2agyjJPsgGaAJjyge9Z8f8YoqnU1WKZmxAfYNiiTQesr9",
  "key19": "2RnirakMTHz5sD8z2VYkJWSca7gKLvGkMhCPMBoRDfF3q1XQ4VUNFbuXQgNifZymwTcctxgx5UgEG6d46zSDgLCy",
  "key20": "4Fvd4E9MSZedTE3SdsqXYzQZvUQJYcZkgFzK4HeCrrqBWgXesKRGtVzXueXD5dJtNipqYqefWyMktqmfZRZstyYQ",
  "key21": "2ACWiFPoDsZ6jjP3GeG53PyR7527KxAcMhNz7Y167SYQed83XykjbagGRRNpveR3862spWMyNpTe6PTgBtsM764f",
  "key22": "3AFnSQ6iuaVZ3vb18nHEHFvmRnqGRqEbv2ij48RZAsDAFrY8A5sRcDZjVoe9ncQ4GuU4MhnXvacB9ip5SgecMkQq",
  "key23": "466PcRaQCvU2FhydsPLawZ5u34a77k3VGk4oiMhqgZhM8jeDf23MA78vVXApW9U7vACVYsF5wMNoUuU2fJfeDpBT",
  "key24": "3TuWJFpLXKjoPjkmf2WGNMLFN6c2DzHK5B5X2qYmwWBXNSyK59mP1GC5hd3VtkjicUWkuwndSTSQBhqwsbPxRix7",
  "key25": "385x2RfXmDaLFDadonoCEvpSeU7dA6yRqRmRXhwzP72svnovzPbeYBBTh4YnuQ2mFfoFX259cT2BtQyKBs811DtF",
  "key26": "SWGDSNiFqjbNBqJhScsNoakKJTFp2Yfo8QpUwFLdzxXCENNSZCFwPMkujxD24j9ZkbbM5wsi1rg7c5ke5hYXpxQ",
  "key27": "5kNBCHypmEKhdk3pYnD3Pojpu275a9gdaaMxJ2mLTVhuiUW1VGS5r39PPepxAgZgruDojE46ASxGEmhmFjFVewJR",
  "key28": "2ZeJzYP99kj21DNhJB6T1V93L97JieWULJ4Mu26coxpd6hqQftdLk1dXzU4vWCsiPPdQnRfAE7rUc1x9xa9h6S5t",
  "key29": "4qpXHWZueokR1hfjTnjZBxAbZLaUHiTCNbcxZdCejMeVegVVLLkfcNmeipfDjR7WWXUhqzZGErMC2EkzP7qaxxV3"
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
