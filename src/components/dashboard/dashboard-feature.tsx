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
    "35wmDGj9yT2QexSivdaJPYvDDqj89XqELUmSg2xeD6i4U5whjUfqDb8F8LQvDt3fwSyYegXAsoHyD6TqjwagrxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFVCkwrDZWq2jGZgHnYWYe1fZ8y1GvtMMM3SQZq8RJiP2cQujqSbi9oUCuAkggCcUoNNNfvkBNojzXaqMxVj6nK",
  "key1": "npntQAjnhMqtRNxMsfcvrjbQordgvP6SchZrpyaUoYdeLHU6oJBExAiCJsEqmnWMBD7MQ9q6Z7wNWsnmLVdHRSS",
  "key2": "22QyHF4Dp73vSRX8Fdobgzdwbnx3V6Xu4k21ALFLGkrSYXUh8WweCiVedcngqnjvJUdN5SrunGEkofHM6ZxQnhA9",
  "key3": "4yLEUsa4tCaDRcY739WyjLSo8Zav5WngpSJ52NZm9UFNT9ULDiP2Nhx96Jpv7McFwDRiNhWUV9g7hrj2srHmaFn7",
  "key4": "4FmWyxuMLR1fyQFBdMLrKfYNDU5ymZyXzCJr3YZsxDh3ztAoLN5LJbaWW2nJgDDtVGcbUFAHE18p46JMakSDZ7Bc",
  "key5": "4VpkXBjJK98dMikCQNTtj3aDaPQ4qLi5FqGgoSpn7qwUN1GUv6k5mQuepLNodTfHMN5QM2yjkAcUFfnwMY6DwaUb",
  "key6": "2uCcWNkQd5DZVTjFFPvGmQL1R9ZKfeP4E5mG1TBRjh4rhkjT2JNr9cKK4JxLHR4eamyqPQ8VqDHunyJ2HdHKFoY5",
  "key7": "4HubCmRUhCSpmUQoPWpTdzCZZmDSAzinngJVmLHvWtrLXcr7NrimRbNzkNQL8rXZA3Bu9xXoV1WsTMzCVefYJcLj",
  "key8": "574pPWBkp9L4quh7eoojkGyy8shVSwUxjEr3AVnhepeLvHwRmSVeFYYSidJV44mi2ukWEpQLAQkmjBbNzQVvG6zz",
  "key9": "38TKN4XdLEycLbjxBy3nTdf5357CHyfpXhPynGSXYdP8aHpJt5yx5nnFaM3BdHknmoVoqR7ZuY7fPRtCbJehXxF8",
  "key10": "fAyhL32koYvjj6BocPx6Qc5z8a6YRit5XEgzscyjFx6jnv6n6Yk9nk13oHoHjTkYPvKPLFeTES1HxTPxZ1BGQAc",
  "key11": "3ofmNs2AqFojReZA5e5B5hYV7Sxx75wcqJ9ZY9tzCT9UyGJxZQNngg26Cc2784ksr4Mw6zAF5qhkFCoCep1nxDKw",
  "key12": "4Mqjgo7KYhSwUPxhLUY3M3VLUQpyChn1W8Ft1sXmzvJ73r55US7i5Eaq9r967CK91PC37GehZqg5Nv3pKY1hLADn",
  "key13": "h8jPcQUiVt6rbmzJWwLMEsqBQXJiLWxxLwFW9Jyst1wkDKRrTyDfjPWUPfifYmoUkC5qXGoGdvXDQhu6otUHBvw",
  "key14": "3RmjN961ZyySgLHbcsbcEtVsa6LkzugtkDCchW8sTNqGCQ1KyEud6WCGHS2HNPUCd7iL68DRQT26QhG6DcSbpCMs",
  "key15": "5ieYDHicxk4m3kMo9bnV5ivBLhL4v7UExUcWeVjwBsARi1iT5HhYqnVKhbAAVds4umNFUrCMWDnmLcCzcCRF3Wud",
  "key16": "PN2ewh1DkLyE2mx2X5SoSWZcfk6J9cuanmD8siHSdg8ssrJYM2Cx3MxYmoJhnY7ded27JvFFu4DdJUDMkF1gK4G",
  "key17": "2uVATumksUNim9HUQTVA1Yew8FK3PyAYadjAK6Siy8he6acm4RVqsn22E9GL63W4XS4GfaJk9RJjvGHpNRYrm5vG",
  "key18": "MyqkAk8eKybWhFLba28UmMCPFGK8LTE1Ksyt7sEmhxNDmYQfKUBWEMUjcGoTgTejZsiT9uGaKdq9DAmxjZ3feAq",
  "key19": "HZBp9ReuhKcWVbSNvouUPJob2YaKGdUQ7WqQ9wKvDVNV2FjpSnh6cj6T1eCGBoUFwnz8iS4dcWSygjzHHZQgh5v",
  "key20": "3MfMsP2i71tVUwz3JM19wNuEUro2k2YmGCvqiCQyvrn4eqanrVgyUxCc8GQXNyAcrhYVoUT4bZhVYyFs2Uei7mN1",
  "key21": "5fSYck6KWDgizgCqT1BF8E93pnzQGNr9rbgs2ARcZAPBkRBEZk8mdPZxYWCcTbZKWp39atGcTJHPuvoTxwNiJsEk",
  "key22": "561V3LXjFSiJbtAMXSTtZWVGLVno5riK2B3x6UGuHTSYmN75ty3rSsB8K9yRXFh71RxPxut8dPQMNZsbgUoowvKb",
  "key23": "vpXCgBvWLnmagpGt4tY9cj6m3MJd5ASXgGg26XFDRr7bCF8MaArjDiLXoUFB4JLHXzT8DzUXNLroZEQe3bW9yzw",
  "key24": "3m3BfxS5QCYsox2rdKTaCDG7CFfxYckbi77KV16WFrhHDacgAoT87FpswqX5C16asc6EEWPijHRz9xeVfXFw55mX",
  "key25": "U9h7U7A8fZcEb6gPohHCeaEF85zmxWYv8jF37zz689QfEjvPBk7amqP2VmG8pwxnK98copkAmk2JpAntBRKynoe",
  "key26": "2JC3tLWFshpWCGzkJsTEkfZecSw1ufXvr1iuwkLwyEcs26FFRh7oCooQLFniJprxoadTarBMw6edmo2mMySF4ags",
  "key27": "3Z5zfFo2CAXyAYPrPM2SBm9BTatihgFnnBYHuU5s4AK6JSF51VWJk3iVLfVifHY7e4an5X7Ur3tZKPnf5jpXNYDe",
  "key28": "3HPEyEnzpAHHtaqqQDQBMPnDk9XPnmpSWejYQmRUd2UrPQ6bWeuCZhjU9VHR1uW6WXr5MMUkuTSvceFw2PhW1v6E",
  "key29": "4rTQRR7YQ7pVrY1c9tiVvjXV1HM9ZgSp4BizkxtZSkBtYDcp8EZCE3X3ZdnAbzE23ueeUDd1mEdekVoE4pHxCcrM",
  "key30": "fHogf76Rhjp1Q45kXJEZm3PhZjtBJ27TzgxFveAvmpSyBcGhESjDoTThqNnyK8XzBSar2aQvytBifntsH4X2nbx",
  "key31": "4cqmK1DZXPtqtbqHT3X89Jq6DU1dEE6Xom2JLXzVx5U169zWBKTTswBEpGJHSvrRJnVQH9ntURELPnB3GmSUXc3B",
  "key32": "jcVYhMsRhgzAWKycLnxD17TDQpJJ7ED8KHQttxHejQdKoeeYcTVsWuehBRiYYuowJugP8ofNkHrze3M4DkJSCMn",
  "key33": "5SDyHae7SPh8D9fQs37HDUkaVzjfKfG3yWPigW46Q7MNwSNEnxe66tXMdSstLzbCZ665nKAsxGoENmhbG4RRicY3",
  "key34": "5SQxmo1tdQkQRLnixQM2qeH3UP7E9qcEoUxg8zai3qgR6AtWpVmgmy2MjjuwCyJBr3MQuQCWKy2qa7ku1MGosfC9",
  "key35": "Gh2FdUkD4m8qqVz4KRBT391MNupWYDRE7vSa2TkDX91av54aTx4T6jVKsTNYRh13L9KFPaPWzyhcPgNQQoSeKcr",
  "key36": "4jvEVqaTudzWus4CMiPZ7bepPgYEEGXJeAczXzksz3XMh2YWFBq4n83tnRimktJ7wi62T2p5nHAK7utHHFVNLJxd",
  "key37": "4eYZWe2SZf61zqc5sA2fkAdcYaGoT9APBTFWHV4F4xx9wRZb76EVeRBFF8uffDga1h9BtCY2nA5SJJywvGqsR8PH",
  "key38": "2RnvwoozgMiQ49qsPEBd9eBJ96g627C4oVyiadVGeSwQQMzFpJbdjGYEHCSQJu9iDrv3EwqWFHDS7V6tQwTwVnmu",
  "key39": "vFNtoHGdCUX8G5jaRRzZ7dPzVuDDVtRUM35iiM8sXFaS7uyEtesgv8MFdtYRmDVU61efc2XtUgXnW2et4P2r671"
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
