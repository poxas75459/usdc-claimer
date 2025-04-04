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
    "QuJivU1FTnW2VCRzZDYYc6LgmYZL5hKyW7bkyzk4cvf8EhNvwUvMaMUTnivcVriWDXKPLPrmkrrfM8QmGdNT3ND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53GXAUKZy1Ez6nWTw6QbymXhn3YuNoXSAyWERmMV7owki4ARkcxak2S9bCjCNbohkNvjv8ixEnHuggDkrcgh7J9b",
  "key1": "4GWimpjMH5fx8V2yvU3L2cnQkuhbxV6dbFKkmZkmwhVFMLyJfQgSFwbASfsVjAWGsXd2cKh41HqCUdzp5BUxex5D",
  "key2": "37rV37n3NfAXDoAHhVnGnMu2YNb9W3zpgRTKF69iuVWgLTpAnBXUM3GamP64j7p5tmmoA49kaGL7kV3Xs6mPqjAQ",
  "key3": "5YZV3HJKG2upDAnYoU2f4AFeprBRGNM5QEX2Zfh6agpeAsAE4C9si1c3P5DgZe1DnVznHwcZmnNdjFnnkKfmb6x3",
  "key4": "3KFrHNtmYtwy7Tc4bZ9Gev2aDZcnv9dLP4aveVe4WmdAwiodRyWdmkZGqd53Pi8LcR34eJEZqjq7aWKE2Up3BoQG",
  "key5": "5DGquNNVf15jQHLYigPkheDHN5FvamZo99b2AnBbsMXy7ckKSm7sNsFMEXakmgY67uxRTuaVCqwKVAuTJ8xYZVv6",
  "key6": "MyZNwwo3onrn2ktUSo12ubVUZnzFV2axDZCWJ4FhFFadhahy65PLFoTinmZdYLmmvZpLJk3HkQT8gc7g4J7Bjpf",
  "key7": "3BwsUZo7DnLNXiqgRc5LdCcJuBcSG68Py12zoCHxTneHN4wFz81uU4PcCTsuLcCbuLdsKpCqXaLL6xHFW5qVetdC",
  "key8": "2wHCE1FKm1w536FTEHYmikkYZZaGpSA7R32g47ymakTRDCDrNTXf1HtdXZYo4qc2bugWyqPUFUNwNGnx9ghzVLeW",
  "key9": "HEkrok4gnmqxUUuFMf4sNKP3gZGHKegrFcfYG4QDJVZUwBxWbuNMrori42uHNhTA9u7HpvkVPnLvH4GyGaXaJwh",
  "key10": "j95xa6Mgztkw3Nk9LQUJxEBKVieYuxN5DAeieo5zsXBhLYvrzDswwCYtk1dsU27VuJ58gfM6RrA11r9BzQut8Xf",
  "key11": "f3yzH2mEeTndqSjTnBRPfun6pbLLzK9ZpDc2MrTpoKTG1BgDqgZQ5uNNZft4pqwH6jUj36g5NU2ACnsXaTCQS8G",
  "key12": "3KkwSND1joBmgkS3cU6FNuopoTFNsk65b1PUE1w2agYRmtMZr7RQUiD9vCEdt11dpFqFV4LenBmtNGKsmBTastKK",
  "key13": "625Y1uwYkgXxTEAZowhMiphqBq5TP7tPddyUNSV6fXyWarPVzdHCBZTJ9TgBipoFTShe2Lihi3GfgxtQZjtKy2rE",
  "key14": "4vSAPZu6WPfQ1vmbvSwjdZmzBftYBCwrTnhdJycCmpSsaWDJMY4NimSySM4UccxySkoSZpbLttD9nCzvZdZqYTGo",
  "key15": "67FxmUjLsawVopQKCGWgoy4q6qS7jiuPy9PhNeVunaARtirsK7vuWdMbBbhNk4zhYw6wmjtRRbq46gTE1w1nftwq",
  "key16": "3FLc54zi5ydJv3xRzZQEKU6JeFdbr58r2NUZJAyMvr1AVPnRMhFWeWBnKoBhXMYwNBQ1zCzW6jshaSM1XbxGUR37",
  "key17": "5oHbFqnrWMeArYtH72o6ggjXaNK12BX8bc7rQF3hbVxXqQ2vU36iSPTfjqJ6ZqP22LoetDrZLAGyRQmknrNSrfab",
  "key18": "7UAxnAKcaSpPpRRwkN6Qr8aGTSeww8SrLnuomDPzNoqgSRGyjjR7THDHsSAm2gqrj5Di1vPP1vBfW44iHuKKANh",
  "key19": "2puSAL3Hrig3kauhWZeD6JWEp4fkYqfqWychFxgcidRs3KM3e8STdRNh5oTbSB8DwQdxuyq6d8FK2KwS8tucXGfT",
  "key20": "3de49q2h1qApDHH2GvPvMo9N3FKRPw735pmz4ikmgpgEvCXwDg1zc9PBAEd66hGY7b5iMkTHqUptn73P7a2YxD6r",
  "key21": "R7pXvLxkKei7LcF76fzNLyAx3xbxBqwKhpttQtoeMpZD8K24S9zrdpZZBdCJz9uhQLEh3BG5wRDdypCSJTyXUwW",
  "key22": "Cb9pjbSxzCtZQugDH8DqvVLXL1sKShoDvfDQWJDdVpQ7Cx1Ws1c1RuG29VuDafCz6SsfEc3fLJqw2YvujbCQTrB",
  "key23": "DHQ8Uj2rL4o1tYn9s2XHtnFiAGyYkVL1JMGx5W5PjFzCpJgmUiVNzBEzUV7NHHxhsm7k7ovJ8UUnNuTiAwCj1aZ",
  "key24": "2R4hYzShFsQHJ9cSZDdCq5jtPeCbC4XrTqeHAWA11KMDMkbCH1MXXKvTJFukNXtQVd1i84wUS2d8L81ihFH6ThNF",
  "key25": "2yYCqr2CJRdaM4M9wut1Vm5TxAWMrKciiPsaNWMrUV7k1hhMCvWPSzgmzxrTxTqzkx2mmGFpikMR36rGH5t4DeNr",
  "key26": "3RuCgbHKUyGEL3Ke4Atb9tS5TXyAtPEPEbrYqpvH4geRwKrHaMuzZZ9KSngUdSZwG7AZo29abLjQwvwZh648gywu",
  "key27": "5CFN1dAt4BciSvD1gLCUGZamwgeXg9XEkXaGZTQdqVuHjyHPATS7XW8F4Wv72gZS6iRMZS7VZEo5Rha1k7hCwrTC",
  "key28": "5HVRPVkpY3aV8JdYfWRySJ3kfcpxzSuXUvAaH5Njsomp59KDxZvpHbNAhvKGiy9VW8pj8F7ML8nB5YNqJ98AiisW",
  "key29": "2pUPbFy9gxGD8MjBAWi32wVjS3fGywJfPUsAH8wgeDp7LjodiJdJFXnvVy1iRDKBY47SDcf475hkMDg93cjcG5ST",
  "key30": "nTcKFkSdXsKGHNntL2jfmHtgnnCKpwyjJetbrTSXeV51fMhdmNe4YkLTjQTPqVUdzTHH31nRzqr3bNsEc9C1T49",
  "key31": "1qKwY4ri79Mie1HdS2e3EDfhGu6bK2rXmi7EjUYhUoQWooAnJnDGaoz2rJLhxbip9WXrhnhXcNiLXPfx7ZkNSis",
  "key32": "3WxuDFkXg9ZU1QMDc5dkTr5F6g4WDAaaY3tWFmzY6p52oZdz56QYVLotTcRvD1BVEB1Px4ePfEroWeXqne6twfdF",
  "key33": "465AoA4nBGdi87kCBHRFNC8FdVr4LuSzo1Eib45YT64wemKyJKDMTxVSAEPyh1fe6huRSRnceJJJWkiF5PtT77pn",
  "key34": "5p9sqbEySjrsbQxQLNyXHNgsz7PTHDAowSKJxyEDmnRMB889eVYodcAnbgyR6eaPR5eQNVGczXYcHeLtPsSCF4ww",
  "key35": "2srCHcwTxNU5Xha6xLcPz3piMMT2vxTBrZ12rdWFkPn7n3JPbvEjNQiT2RM4j8BUDQkqmrS3Y4tLoQBkQKhMxURY",
  "key36": "438hdrELnaCQhX6rwKmLGm3aMdrCNQXnkxC1qdERCmjS4AzwvBJjAw9xDv2tz6QjutDW9YEC2WKgkBzN7Nmq3KdM",
  "key37": "3rQJNuG9bAhQViPB1mMSQ5kiVgE3LzZp6Ede6Zdc8AkgddpX9vT7XRxKqNhVv2WdvEzFJB3kw19mDXQuGtUPnbf9",
  "key38": "Q4h219EsEkVd1MDxjxcCLqk4Jhv8yWTZjYN1JE1pTDbQwzEKRCFGS5i1cCiFk7ukbz2GWyZp2L9t7xsxWRKof6w",
  "key39": "2JMYEvAufrDzrQEQDay6gWbdRxcY51Y5XobzvbPAUHaGakbZo1muRK6Q5SmMYQ3TY45xqH8kGu4unDfRybKaiayv",
  "key40": "kq5Y9t71ERMs9VTUo4SqX1LYZtfRjx8wD5PzEF96VVk43Zku67UHw8UWUet5aapaTMSS3KfqCsWeQa7fuVsigVW",
  "key41": "2mzgfHe263n3vy9iEP2k3S51ayHfc3GyB2MnvoeTEJMwxCCigpDMKM4dyqb5QuuwvP3qyWsYMggDthS6CNfCe6f",
  "key42": "Ck55Bgzk7qnv1bqxQLuugUayJf7LpmnSRSvPh4RSqGCSLtTNzVtxvWxVgwukpXKhJtoegjXff4LE1oeD6SGYnyw",
  "key43": "234rcztdFs2TLtiRDqE3c3jMrJ4iJt5rZf4B9mkYEVfmXmxTZCpGzQEVxxTfZMEzXCU7KxY9zcenMopYdjtZm24p",
  "key44": "28GVmDRpnWtnvDY2dYDXJBSJ8ujR6LVKQekuEh1eMiwyzMJuM3jL56H5NPB1WXF8YvCmXaLQWG1NNXUzXT3aL7ud",
  "key45": "26FUrR7JVAdA1sSK8C2RCaB2vi4YetBBiYwamkCnwiKyZ2hCiHYuNNFLr89hM77M9Wwfu6pKhyMHv8RtuzZGQE1k",
  "key46": "5JNcJiyeTDzw69RB1rByrnRfc6n3ESWfjNUnLt6knyVmqHN4gCcHB3jUfirN8mqa5YrwKYnV3kAMcANJE9ozh8yr",
  "key47": "8Pp3WrHxjCahA27wxFu6E5qZb3ja8gbyd2Vm5Ch3H4QCAChpqDPUySYtUuiJ2Fu57jjGFuK5XpozBddEQSmzUma"
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
