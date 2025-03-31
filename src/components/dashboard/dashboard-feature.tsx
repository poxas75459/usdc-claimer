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
    "2G7UEWLWBgfX1SSf7HgnfaGbmUgBCzChF8PvAAV1qBxxTxFUVZnFVHpZQMumpcaUaCoFvYmEs6LfBrWENuSrD35i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EuVKQ3da6U3GLmxLj8w37YA4RLpiP27Kz2xZwXGhzMGMhpGHCLJ1DQ24nzcg1Vu9sEMEVv2nbttmwaoKfACLmHZ",
  "key1": "584MJ3zwpo41f2dpXAgmVKwxBb8wamedpp7DJKF36o9SqXMpkBqMsC6KzmF6aJifm88hU2Yy5qiJCn9yhgHc92uz",
  "key2": "4eb52L2X8CR8QsWQBwwnn6LRhe916HTSUvh5TTcMP6H6QYxYNpE6Bdz3TTRdjU68eyPBcvFShob7nLc5kNLQBwpg",
  "key3": "4Vj4PAKQPZv3xDtpEyTFCp4nte8UJnprV1vZZeUqdzbj3sD6DFYCHE7NPEnbNSP1Ym9WZmHCkSDdm5yVrnR6N4co",
  "key4": "2XU2wTMaGX1Tg8LHE5WHsXPQptfKYQyuui8W8vGhHN2h1M6YkEFqBV5eELSrAsCzcVrEmb84STxKP4QWVCK6oc6J",
  "key5": "2WfgsEstoQd75Cq6UCpnR81nAKU9gNAv3Dk9Q2oZM2dnAhgSbnzyr2L8RiUA6S2nmjuvJ3Y1q3FRHQX88HUmfSEr",
  "key6": "Gx6WGxmeksxvmDaL2My5RSbDQe5utsW9NtkCpcar76V3K1bLWYctGcuGwYvfaXR4wMZKvtVUDudYpDVTFuTuh1a",
  "key7": "iPhmxXHYJ7y5iSYTu6vNznwV1akgGrSAKS5acoz4QqdD16mNryQZ2AouFgDUJte9hLGSruXJBEm1xUbp7UqNSkF",
  "key8": "fFkVpdHmEG9KoFGfX2HTs4NzYLFjXDuc8aS7vAwXyPD8SpEkramRqi7WHydTQA8zBcG2qoxpxEwJaQFatGjKx5D",
  "key9": "54JEyJqb2TkA83H8UfupNrsWF357MfEPjpTje78mVSQ9PtUEPSFebkLEzpN9RYeC8hxCo8Dha9JtHLDnScj9jFJY",
  "key10": "4g2T3EGTHdYwzwpMrkm8RXn2ELK3d22pT59aHMTxMdsQUTruBZsNyFaBcPo48YX78NqnBn1PWiGm4PgZVnM5VxSK",
  "key11": "5rwH7ErSCdvyZB5M5Y86VrY4QgwU71QWUF8w3sNNy2eWaq7rqxpkpnmpuiUfxw1zi9kA3ahbAY3beESZaLXG3h4Y",
  "key12": "2rm1nQeTKk5wdDdBziBoGNQ8fessjzuEJoC7HZ1JRz9VXLJUi7HVYahXhqeeZsARwDGMrJxy9QKWgRg6vhERnc6w",
  "key13": "4VyvxRoNTtGvBqrKsJWi34dhLTegiNg1pzKfQFxX6CniphdcAT8Yv7D8PM57bMroeq3SrWwTTkmyqgAxyeKzRnDV",
  "key14": "3zNbjDoNXY5VyZCsGbQF7iFXQzCmKKRvPKAUpkPkY3c2MzD1T7BLaSTYdWy9HrMknb77QHviNXx8ncab7kMwLurf",
  "key15": "4dei7ggfLCTFgN5ALAxxtC75Q8FiDEe6yuuVTSKtZ15GJxjBe9knUz7tJtAGh8ctnKahTL3i8wGEedEw3MvBMLwz",
  "key16": "4JWpugRq8XygGaajZD1DSPCKDBzbz11sZuGqG7poqg6XRxysJscEsdXY8pwT2oWXiGnNiT4PLPeBocSoLXbcTHvu",
  "key17": "56ArRWFiztKEiAsJSY6ewHLHzKtf3mtZBauu5mn1T9wev6TqSeJ3thPSJVcNjxbTQ1ZV1bw3m3naJqQcm7U1FNR7",
  "key18": "2jSpZUjYSR6r39gr9S12YzzotXQDXZEcFD6wPM1GFdPxucLxtyMKkN3shnFfQ6ifcC5tS1dqQj2DShGVEhvN7obn",
  "key19": "5wTZYeRypxzZgVdTf22r1x6kuJ9ZTRf2pmP5hujvm8mbCxNdyWaDHE8a19W6gbTDUNi86D9XjrTMoXocye9oLB6f",
  "key20": "4hYC327hub9kMcw89B4qttJsyLNprjgxHCBwP5TXr8RJN7z8UDJH6KfuXVCRZcC3Weezq3VngvgtNMj2hDAG2cAp",
  "key21": "YGVXiPrxzVePN5dtQm6TFQmBC9s5CKNSTy3qDuqVEk1nMkrTVRVS8F2ScJd7hMTUyrL1fRemebCxx8tPf1crNZG",
  "key22": "3hBdV4nk7E4H8CfvjrY2cxkQTfGPxLrQ672YwfqxZyZFam5C9iNCdTV89tHk4PTykQPweB67syLyQGHSfpMCHAjJ",
  "key23": "duVENteCvvER6SptBM8FY1mpNgncbhEcKqkdFFHJVvbs17Fg6wP8BdEYf9r4hmw9Mi8VfQnchPe6GUPanGKuVrj",
  "key24": "EGErVgUV4mMGaF43CkUeR2DcYL9pX4koF3khGsyiYZ6DR2vxpvQk9Xp7D75pB7kDbyzYW5oSo9w87yRUfUgJfBa",
  "key25": "3u5Kox4KhVySFQv5C81TKtEpucURNf1ReUcHSdkHiYouGJ81PFdKVpGPWQmbu17SVm8x7LLmS2365tN1wDAP1CUG",
  "key26": "YSobuLu4NgVmRiMK4fTvyZSFTinyJyKLXQeuZ9bQ7sDQVcDNoboYHZoQ7xuxCfAG7iAJs1a94XJZmCzC6F14uSk",
  "key27": "4eT24ygJEhaqJd8ct1dCFgVRLaMHawqWEysnwQrc8695sDw9ufunqe98iXVTRz4bf7DgwXU3zWmNhYNv66vYCor3",
  "key28": "5YndJRsGz1rWosTTaTR1x6vWc7V3g9tA9UBMaSY1GEc2SkFjCjenorntQAmu6FUjtAKnshR5QeGPREgUnHkCoi6M",
  "key29": "5bqc87rothLgSA7kuauqSx7cfCERvQ7MPsg9ykRMuDHBTjG88dgj5o18YamHthkrJP7DrDnyGbVDsf8k6AjkpF6R",
  "key30": "2oJQ8NRwZ8pPSnMBv8mHmnjyXBWER5VNQx3qwWikcoPepUbNqVswGPbiz6ihc6WfgfCSd8gsDJzJuufRP2uf8Rpa",
  "key31": "61ooEvcRtNDD4YCJLSYKEw2TwwQ27FGBb6TWrDW3BZdxx4XMyRpkxMQ6ZggwKdfMyUgE8Zj7kyLqDDv9hcAmFvwx",
  "key32": "3ZzsgBX4mpRdZn6FkLBY1pxgQAVa54HJgCtGDkXYDBYREZzkb4x7b5HfcT1r8dhx37rtvjA3ufe5Evd673eRxTqT",
  "key33": "3enf9Q3kFRVvXWacX6RptU3VvdZisJyXGj3vaWe3nQTejUTbFsuzcQLr5XEKreXz8J3QWZEgw667dSAKX4tUE49h",
  "key34": "4ZVXz1DvozHijYtixziXVLLMWgGeLgTHp2M3af2CsZ8se1qkTYTMpGe4PnZQq6RLUoNGDx5hC6h2RYdZTMC7mLZT",
  "key35": "5SHHFJhzGbcMJdGDMkVUQWYxEUwkHubHHGp7ZcSYSgdgaVFjoM53RJRfmnFJRH5mNHBznAa1GHRK9jajvTBcBJZA",
  "key36": "4ZNQGbvmNuSWxEpfewe8rt7vbi5RyshFwcYeZX27W739oRhGpGbSrLsBtryBkADiNw7JDVNs7cHhjUTpC2wTt2sW",
  "key37": "3gpFEUX5PmyLyRy4gxhNN7qhp4Mb5ruNobSrFUv9qAK8w6FPrsbmvZou34S2yyjWaGr6JfnfAXVEEqFBuahVxsGF"
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
