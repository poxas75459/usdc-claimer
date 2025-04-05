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
    "5gHbhLetKgFosiea7tDxEn6otQUBvC8qWbYAUrveHfHZPnbn5RNac84Q4wznbY5DmD3xmmo38KxEqTmBRp7kQhSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jqutR3n8JJLQ14ovm8wbM9aRy4qpM7eLN2tRJL5FexibehF6aGKXRnjjtQMYofpkXP75w6nBiUGzQGVix1dWpXi",
  "key1": "4xKX6xc51ojFCfV32g4m9B4C8uCnJPiKm6AsAkdQ2ZzDH6DxPz7DdGrdDDhKGKTVGgUzwr7qRcyC4ezqLVyMtpva",
  "key2": "4HDxPW7kHV5hN6WYNhqVX9RFXKFcnYLK6TAF7R8VK9rsKLYiVjqyJBnM7vy9GRtnvUurHmwJ6ecbUAnDcjNyeUvZ",
  "key3": "5iUAfJEhszr5xuZ3ebAVnYJUcJyDuqUzRP2Hm4YtLzywFieooD5pkcH8T2k4hrWxH96q9y4aUxpnWfRbo54ZxvzZ",
  "key4": "3P457HWWTE8bmBmRGKyvkrM9tcLAZSMt65Ft5xpTgP9QDphC4grP2Dpyoey4kHFtihdwYvyxRDGNgMX8WkiGbBkA",
  "key5": "49SYvLL4fEW1ZvF5GPGzWgpWvgdNgw9XermKnsPvY6cKSFAQ4o1Rr4nREEC98Kh29yVDcpx2JiNYryFi2EWrdcBW",
  "key6": "2QTaPMaQgG1m7V39kgwthizswP9HBKw1MXwxAK9svB5CGKWV6EfgABb5dzTc58yX55C5a9iyVjpSDhRcAthmDmbR",
  "key7": "AEL6dGVJY2LMi8PMxdAP5H5PsGF4b58GqTKnJmbXs1GMTdkYpWNaX54pPvnYokxosyX9FPnJ8LwCErxx4CTJ8UC",
  "key8": "4XV627fLR3LD2tYKveniK6KsFWjYPe67RAknpvTyspAjfRzGtF1MuztpTJJDRR71ZW8fYSx9xMmAmja1ntgc7HtF",
  "key9": "3gafgMVjS2yu7nfosN38zAUF5oVKtpeMF1Qf1Yc6hJnH8GwFMus1qDHhiXFi7rBgJqhHmtai4ov2C2LgUsUjJvkk",
  "key10": "3qLrHQwdk8q1GYbxGeQtijgePdJgkMwL4CKYYhxZpbdNxHVahasX84uNxAvWrD9E7h5HNnSC43262jGuhVzCxcmc",
  "key11": "44QfPYgUGkN9YWC86F4xjcGJuT15Bk6dB33jtTwKsRtZQWwEEVVpt8xBmCoipSVBkSMGAC3aKjMvZK2Q288PcLjt",
  "key12": "3DdjvXhB2WtdkiWJNYSXjpecQeXpBPD2AzckPyqoierid59LBU6DQ9TxK1Pjsjj5vdj3jV2zR6yMk63aa4ppzAiH",
  "key13": "4w4KNHzi6aV2b6ia7WAZ6My4s4GizzSQDBDR1NsZNvkTc7PrHgopqUeDM2mfxGafWhxZv22Jrx4STkWsD7UKzFpw",
  "key14": "5jB9dyhYJp5vTvKgYdVgYTV3dxiQc5nsPkvHUfRuwxdEGsYqkBZEtWmkTqL7xi7EfyTTszat13knTtnD7MLN6ggr",
  "key15": "hq5cTbrXHBNQXi3sfn2W71QCjyVPpGvDPh8MAY1KRPmpDRBtWDQrNP9hjsPZLSk44do8C4b48AjZAiqyzyKkx27",
  "key16": "3KWd383vBm8ds88NBMZx8R842yeZggHh4uKnu9jk3dCAU5ChfDTe35nQ7ScJ45rVA2aitGjvKD31C1hSMNFXnewr",
  "key17": "3QVzPjq4KxQViWTZfpFtsqykQ9VEYbvwrKnHCRXYGu1NiwYc5WGCdXcTW3XJk49GBAURtRPXm8QEVtUdKFj37EPF",
  "key18": "2Yxys5wzHPNshjXXyBfhErwhMBDqtwspmFrQD4SVmgULxHfRvV13JPheKe3rSVqvnmi7WD14iFg7jzNeu5e2rv3C",
  "key19": "Xzr2hSbJTj9Qn2ozi5Vtb7ojG8ZmNnsYMmgNTfQ382hurdaQeyzYprgKXiikgtfqBcrK4bYHsEtvmXXv1KRd9N7",
  "key20": "3fM4deXF4zog2grbxAJ3TUxfNmuTRUTDEBqYmM3mHBFDtvGVaXXE3ixHM2nqWenPUpV7VYxagF3k7hLkF5xGTAJz",
  "key21": "oTdWZqJmTQ7c65CjF32q1GzLAV5oo8eY3o66TN8e5DugKG5fPpi5C21tBV48m2oWf2D96XosBYFuaRxYfBC3Wwt",
  "key22": "PsH87ZMY1895qG1kzKBUmemVsgXdeLWLz8HdKA5Mpw7kixayXrGwgsUyaexe9Htg6rKScUeYZU25ayQ6C5ykmQL",
  "key23": "5HGyJAHzGgF3Kw7JFFPHQBxA86VJNPoy6achFqy6YiZYNZDx6EyTrgu99ExexYsNsCggbx7RCqGYoNsf9LLDccJh",
  "key24": "4A5seNQDsZXiyKFKvf95HkAUYCyafSftDMd9WQUpbzPJ76LxK8nX68ySpk3jyhF2zwqNE8tgLCGPL8vtDGTgFmS7",
  "key25": "LpzAK6NYvZj5mHSeWEvwpR7zQoZkKzmPYQx9vrv36jtcckxZRDc6kHcVMJLYbVJ3ZA82MDucSugDnXXqWD4omu3",
  "key26": "21gh2ZdhwzdNutqdYaaVnoWbhktbggxpxJn8PgzfzY5nEuVSvXJVAEo2T1aQtoqDbMfNj2GKHzMbNty1x9tCMTZ9",
  "key27": "3SbYKA74itrWdsezg3K8t66ziYtHBR8AuemRLpLUwWfo27Fz9JXvaZsERdKu4ryv7GXJPQgY6CjUu1kWDUFUyU8e",
  "key28": "28pg8UYpV6A1VNxjLZPMkuYnJxpykWFoU4GoCZN9KGX2xBq1SAzAL5WrwaFWrgoH3PQGnnjBeiEbXZhYtkKthx9R",
  "key29": "5TpsrsGqaXzvUFEBynx4u6bK9pAKtBkCQEyUEZhk63HFmKAmddaffP4cw4nTVKFgfbB99NQ6naKGHZdFAhoN5pzp",
  "key30": "2LYmmbYkdsKVYfVSt8PjN9PhiFqmSUEbJEpn1GH1rCLxxSEJ7mxt5uc5L1cambp4wmBr3D8CnBNhpBy2Wb1ojnjn",
  "key31": "5FeCmKv3Ww5zLVvgtQxe7gA1M2wx1Q58xvTNnteYmczSXmEgBjw5tBhCBFHx7u5sUVZxqy82EkTSn8StWthTeS3L",
  "key32": "4XPySC62ZwpAPbnNcfa24NCHyWjdZ9tqcxg7SEDhEyD3K3yFFxkG4c2VpydTPBerqshpj545xnNLu3iDcRbNNzbC",
  "key33": "2mstWJ9BXoy4qSeqKoGQVnumZbVR6GFmuiHD58hUMq1HCP3KHPqtsEq5PokHsFnToQ1KXbfLhorZNeVKwoTs9Ucd",
  "key34": "xFJviwBSqV1gZgLYyLCmkvf2kh9sbrxFnPxSxeJnCg7cyttVRKSF3DYf3wCntgUvw8c781CagvzHaeVReVSPJyR",
  "key35": "5HE78fMWKjtyPUpzZE1hZwYJzfjnebU9YQzN1AcFuaXaH3frSGun2pxNpCcCYwFETZkq61XruRv9153HixqJghmM",
  "key36": "3L12qgPMnfWQpmLUcwmVAfxjMrK3J8TxYTtT7fQWLY5cBi7cRWkBhi4ZWHyjn1uSW1pk1u7DiD2UdFcoG2q7Un9T",
  "key37": "2bihxt3QFq84F8eKx1Fpc8D1uQzrgQn4Tnph7LMCxMc1C4zGMapkPDmGdev6q2V3rU1tkJTpztjESDsfoMcpqE6a",
  "key38": "5TvrNd9SiYdaJbTWnrK5ydECxzh7XTiFrzESLvzG8UVQXFrALxJb7RQQvb15eN23utDacyVqCoVjrDV4geQQnf5S",
  "key39": "BZNx3zg6gxYEDdXDXTkWACpzYvP9GYRrWg3sjx4MTQzG9xuEKGq2HiBwgFLSL4ZpDH8Jv2bH5718xW4s8sLWegc",
  "key40": "WBcAor8x1ei3WpQVHn6ugexUh5kg9k8k2mqsz5ueuc6TBnuARwb9VXoMV9Av3tU9Rfe6Kje3y38rYKMHH2AURWL",
  "key41": "5F37SDfWRhrDyawJBcvb3ju3VUx1VUCcwMmQ9zBYbZianFgCqeGQMqP5KBPYtmNSx8FJkQuPMYsdHzU83xc5zVYb",
  "key42": "24NiWYuz6kknJGzgLPB2TiPynaXstVbEgqXdQR4QpqPgU4YgXCUwncyVdpH7RMJHhHZDzPGhrjLkj37DovKJneAC",
  "key43": "3NsrwWv372Nhpxy9YWKsUR4FYr7uMBM5viei2uXv8NbGtykbhSNzkKYp6SDNUeYmfTVPgCUms8VC2fyuiqZRGSfK",
  "key44": "5Nco8ctcDmimCNnW6L6pDfPLCFdJADdrRXid4pNQTCNXmBFr3y4gFnn5zwb5EyQMGVrwhu5iGH8mcsjKy2r8QE8D",
  "key45": "5RYVSoqnv3dGUTphvZjH2m24XTsWe4UoHSgkmDv1oEeoRwJ5fVbP5M2KPk8R6q2TqD834Atyq3MEbGYPkJud1Fgf"
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
