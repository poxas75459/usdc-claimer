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
    "2ishENxL5fLCmgbQ3mmKqRTmHnAYCPhWaZim1UGADFeD8TpkDMA42j9sXgmRmrD1DhouVYp5jVJnskjDKgvkFySG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6493XiaiLY7GRSD14i1GrbgW5SVwE8bBd5cAxnhXdkMHA63qWm1vU4UszizrYaCKVQ78Li21ojnGdnihZtKhnYNW",
  "key1": "3QSBXYWv5bZBCxCxmhLpfxzYb4wGdX5n9dXDYuaE5QaWs6RUfvNRhBrM382Sq863cCUmGCs3B4q9woVKzpVAgY6d",
  "key2": "4fE7U3w2n5kpsK5JsDe5r3o5sjs1dc3ACZbbapzGKamEEKHFBQkkAfR1gKS8Br56nhX6zuSCACVXqUxryFdG1mLg",
  "key3": "4S35RBjXURBwK6rEUeijQQ1ZhFkfz8os9GcT3ghBEc7VwUmu4WGF99xJPcXgfeyDqVdqxSP1PjJ6XRjieoYGomNf",
  "key4": "4c6JAU8QFGephL3WvBjDv7SVXMug6fN1nsEEyJrx7i2vzyU2bWcWuqtwMNryBGEGTvYbZ2WSwK3XqoRoNWHEcwcE",
  "key5": "2mRto1BnzkTGBrWvuezvkfdihBJ13DqzZSSDXY9W7mtFE5uo3xnbTmLSsxGmUppVwWX2HcZRkJ8p8a4Gk6M2jV3p",
  "key6": "5FTNjFGeuwpA9dH6rkqnXEosZt4bH4Cp8dfbFLisLSwbYLNBBydqdj75yav7T93FucBVGsJPbdpjejHy8SbJT3fY",
  "key7": "gEgaZte44TACvKq9mBJ3MutgFtRvN4GDdHPBYCBkCDUgHCUq4P2ycL56eDoG634f55MEKVsu9ygYVzQA6m6LUrQ",
  "key8": "59vhqLNwM5NBwoReQ5hWEhrS1JZpiLAVvTXpJArdj54h7dWiSXmtw4iKFWRgHcsLVghTRapAznrTNBbDzjFqiw3s",
  "key9": "58NpD6cNU3TgSUEBEPjJ4eSBMGnwKXYNdFV7KocZMs1ojz7FubxGYMYkEFYcWNPhvMbjDruoYuoyA1QzLj27Tkbm",
  "key10": "4vHLQ46MuEEYWazKr5WGCJao268knrU9GG6kLBoVaFqR3oMaMGSXZw2PJUKRKENGYN9NfpfaBkwphyz1ysKZaQay",
  "key11": "AdtzCXAi39Wjxur2fZ58WnGaPJD1S1Xje2KR7oytsy1mZv9Y7rcPZqooJ9TbCPi4tqDEJWjBrBssXHUfgyfPwdA",
  "key12": "53tgb82qLJwT27rU8zQ49UXYejgggRzyunW6k3YkneeeeWzL5R9d3u1A3XoxznfzTbxGJfDmFAHGXKmez8eM7XTx",
  "key13": "3CMN15gqtPQ6nstP6R7ECmaDw1TTK6Rbo1h2Ev7GfWQu5fjqtk36BTBgT6DD4uUw46AsqV76kPNoJ6JkQWuKJkTC",
  "key14": "4u1iFVGwcNouW8UNUZ5aYGJdnDsB8WT6g68HaXJeuZHJW26Uv9vhxt2vvvYGWAjma9FsRN55f5nxR3HKTfpVAMX6",
  "key15": "4DrL54U5V4AqHLtoZFbJ5QTww5XXxNnG2WSFXcpiRUQ7CMoNrkEwJetoud9GLgLCovbDfS9qSesEQQkEspgZUwnH",
  "key16": "31zMMYJ4w6nuPLMi3y7sE42tcFvuoTiGt8Gw7oEyGxPWcQLwxKR4F4ViZGMzZnpDctYFfthHCzASxj2nQFYpbeWm",
  "key17": "4BDYXDxcdMuXLgLqMeHuDYJHW2QdAXUSpBT7PLkJmsxkfzbSLdviLSj5noWKcjpRTRuZDeAAwUPio2D1gHTpk9U9",
  "key18": "56w2Y1VoUXDi6cJnC3um4stT9XUkeFrHgnD94mPsp8FQKdECUE2efAgQTBAtr85MAsN1PfnfSiCjKVviYsBmxhUa",
  "key19": "GP2A8YBZ1xfBYFcMASQvF3etnFzZ3CheN9xWp1aQncfx374zwL545XcpYW9zoSzgsyBaPPoPoYe2WCErG8GXW7B",
  "key20": "4XFM8e8x9xJgYn6G1x3Bh3BaXSyLT85qtLhHN87NehDE4ZyUmpVoCsRBbH5JozAukECYfhsrrs9FxrJpt4jcjYDc",
  "key21": "tzsxvyCHfPfoGMRBmoJtXtBPFpMTqSvXaLasw9Bz7aksdnTKuAhqnRqDhZeh7KEJuzvLigM9nWNHKLt3XWL2ZpR",
  "key22": "buezWSmn3HCYFgoy1ZRou3dAcZgoarFemoauBBLz2FozX3f6EsCLwxjq5x9VfAJaQyQwk5ydQKWpuxV4hoMcvLz",
  "key23": "4NMek47msnLGQCLokzM8aFy7xUUWPJiQ5mwjaKw9YfLmWC5rCtnn5CCog81eh2zZUtEGG42Dj25teN16oAjQgBjs",
  "key24": "LzpLSstVWW7aNVjjDfe25srMEbEjuetsoPXBhB6kBESf5SzUbwWRjEaVHTZqpyuivj4pEjiGsh6jW7K5DS6xRWp",
  "key25": "2TpNPA5Vs7TGZmSH1TQunGnrek9oym3sNeFR2SQgzhQEnoAM92DaJhL6f5W5iSCo4rjZDpALy7xNdnEqFvkovgpQ",
  "key26": "kzEBBZq4eaqFNzCKdo8xEFxsmN3X3EW4xHJsWQMfmjJvXW8YMrchSYuNkvsXvdiswLjHpFaC9EhvUzmipcpqRT5",
  "key27": "42oWUEvUzuCiZfwttDQSRVr7TvJMUmJVyZ7cGtMjT1PYxFB8trU5m4txqA745eqsoAorpAgsRB4EtWak7FiVptKM",
  "key28": "5Qd347PxR1sRU87mZwC6ZBaWzeBeE2NHmiJdPKEadqVuUm8osiJdYgU11xC16gi9kJxSqGk5rqXccnnK11AQcCdw",
  "key29": "3vZjg3NeAMdLAcb2cVzJaFp4uAiSNAytEmGyZgyBnmktdNBhjh5a5QmabjXFovtBzFXWYLtQi6bCgP6UFS6SXvKn",
  "key30": "4kGmxPNxbfFZWizNuHB8oqEHp7uyRQRjCToVUfLXXiydQwwnuh1YrEgGwaueCiewCbtkjE2kUEKsED8Z5ZvG8i29",
  "key31": "bBkpJve2km1yVd7nJ5Xibmf3oVgYSyWytbc5sNAeDwTsWksXEqZ8q5b1Eq6cYVkiaEcxtrkwcDLgreLLnXoa8Wd",
  "key32": "2ZF1ehB9uXYzGUrP7jdZ4cNtuBxQZgMwShGvzT2Ekpce5sUbiyRyE7bXyj5EXD3rS7LRAaGj1taYuSLYi2gfmSLf",
  "key33": "y85xPEqzo4ECykriTUYjuBWdiHGauXSBYi4woCDnCCQra3LY2dirNUd1D1gef9U6SPs48QjT9EGRtHL5Rvh7PEu",
  "key34": "4Q5NXWhpF35kXHGpiNP31YuD2naPBtukCs8HAEqnBeZPsMRdcoDzwt7NZmVsjfq7GXdxS1y3YtqbsUdEBm9F6sWi",
  "key35": "Lskatw2RrtuGnnVfYzjQe9VSeLCoGp8NT8SxSKQBg6sNVCnsZGGJb2iKWpzjN6FCHdbvf6M8go42fmGcrNFuoo8"
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
