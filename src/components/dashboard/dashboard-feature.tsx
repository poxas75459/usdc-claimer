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
    "3faPUEnh5RKKSdDgswFdeTnpw6nqkH2vzC4sYQ6YLAE8Pc5uxkDYr4BnuFKgqzS1yxEnUY4ofjyGPjA6HpEAwEuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y2AbPPYQG2j7Qc72Xrhri9TekUAurKt8x9vv5PHGF6SB1wMfUUZzR5sWaFbpNTquZn59c1dJx6renCQMF7ers1b",
  "key1": "4GGTcCjpbdQWNKQiMWr5BaYEtQt3MKsfQrFJYe6D133B4QTRECtHc7VavA7htihTzsCPtsKninyn2xqcpih5pMgN",
  "key2": "4xkLNuodbnS6kDePu3dFURuDpAbKJdQQwEHovJ79GWCtBpjqQZWHnqENyKuFtCy3EyNdMmBC28WbY9mCDEuKixBR",
  "key3": "3BgmnEo9Pr1Dm6Gy3yKbuhbijSoP1D11hyy2R8mw3yp4WfdwwPZBkFcirSeeEc9yCAn58no9SUXV2CcFxrd2enLg",
  "key4": "5PrDGcyH9ZZhJb2wcTMJCnZfsdCfduLTPrqrV7ZUT8ZHMnYb7Xp4itfJAhdFunAxuGXUrQagbpkTsQ27rU4TYN6h",
  "key5": "4Aye56pqbUrQU9H6pn6SeUNpDvogCe61LZ51xrhbXseujUWsaeX2tnsfCk8PSGjerApaYKL2fq8WyK16U1FoNRYc",
  "key6": "P8YsBa8qsUvAunVhJd84kj1WAwNXYo5zWiweBoMDvUPfAu7LDbB9XyHQBnwCgoetMDcPqJPmDQrhDgciCPYp1za",
  "key7": "3JUoM47TqBPJBf357rtYFW2doh5CjVybCpZeNDVpA4iPGSAxDZ8r1peGp3Aur5WBEQ3a3yB7cjNhKtwT4twEQgtA",
  "key8": "53ra81BBTLY51Ma7FAWUjFUsW3Rfd2ju5Dse1cHvcyTyodsi3a9JExTvrrB8wriB9kmXf3c6MPsbhrh2hfEECjHp",
  "key9": "5NnnXSRKgAEtUW7HJophX75njT6gbZcZzmiXDotY6JVcAhMcgDcGz7CDfPcbPCbN33xYWGaRtnxzaRwyf2PqHUbD",
  "key10": "DDLMxKubKyvEoDCKHYYDTT9QgQhthWFAz8YmagEvScpJP43bEseNHq78sd9gCdUgzF6x4udX7Lavb73W1FKsXhZ",
  "key11": "5GCpSKg8xpvoXhxtccKX7M3A6THYfbUe1z7u7wx3BVKc2dpcGpJSyxFysAF6eNRVKJyLKBpkPVo3DgSxByP2GnBr",
  "key12": "2qopudWuqtRZQxVtPYhZ44znPtDhzJgVRLgCtYTy4eYL9kT5QMekdyZHXpSxvZx8Z3yVKgL43GUFhEvW7v6vRRct",
  "key13": "2sdYAJ41cLFu81hLhEhwwNeyjNKSR4s4y2BgCUsdxabdEQmpMS88Y5UhrPRFe7bfBvFkERRB1SmFaLU8kTmxCtHy",
  "key14": "4H7bJdJbicbd21FPu9Arw9LwksvzHBM6wmF6xTrNG7RhskkizZaVydey4AVLKNyKiD2a1UfA9okQdEBSxcifs8Yj",
  "key15": "3sfrBcR747BTAksEF7CghMo6WqhBBDMTscXJPdGV9XuLwqzEgZXemxSLJ9WwCDkokCpJnYwd3WVdynMZrD7iiFKc",
  "key16": "485o8ReQmKU2wBECjkP3AzWmpyVn3vFsjvemjaAVinQTiDYP5tg9tdfP5osLHpMrRJgamW1z2NKsjsaQEqaLmuGY",
  "key17": "5EhpAVgXc6mgA6TBMnkrRYa69kiPMSWjc8SBnCrQJsA17zVMV8HNjVsktxuSUg49Y847hcDu6KJTNUpwSTxwkLRr",
  "key18": "3D7oVgS6CG5HNVAjnUzuyh38mhw1y67FPaZQ3CWjMKB8awzrTbvsnmob6AUJkNtK4XYXsjktDTyRToUJVpoUZ6xS",
  "key19": "pfR7Ltu2qJzJNQmRyzTKzJsfkyJHbVGQdMWFDYvxiHPforgBS2dP7BxR7ABd6exeWTtgHmSWFAcPWUfmWpaUzhP",
  "key20": "3z9aQjxH4yy6fwdCthjV3NKVoyrBmeaxtzHfY5Pspqq2SSufavqW9Mno3RSjo4noC1F2qNKm2yM6KKfxicVYW6z1",
  "key21": "cbvfVKWf9w7yYDtdpZXTbhqowvLRQyZWsT89NYFipKYnc2sQu2THCJYYGPFaphFjBgqFdwXpFtfFzkCsPYECNhE",
  "key22": "2VfvR9aV6PTTpYHiAbJ2XQurzSFocmVZfvUu9RAhB4WhJAK1kpgVDQFHoGqMJ2NaxY7uAgbCYyL7LX4s2HyPXUsb",
  "key23": "xzmzkB73fbjAC3SRHX4YUU3ckynNQcdwkhy3fknqUABkM775tcdABkdstQWZdgNr4K5jHMrG9ZvET6UCJAnJnKc",
  "key24": "5sWHihTinKyso5AVdTyALrqxLEqwQGwv5zBUxMZhE6sjNmMZuKGvc3oL4ABmR7p9bUZCnHc6VS1utKBraJn3URNa",
  "key25": "2grWBdMP8n5e2KLuoH8xnJdLz3mkFmP4ArAR8V5TfWRAWPGZU7vJDLvojGLJHL5hR6d7ZDM1mGK5ZPSruKuujKxS",
  "key26": "3zaCAasgZW76CMMqSUvVViPQSDzsrKRDEpvE4SEoCqfpzo9ZMURdHz43mA3vmEHAL2WdAn8PHogYJP59LxYbXVKk",
  "key27": "3gpcktsbJQTuCbti92PEGv535WegWXLbnKykr7Y7QycZ1ZZgGmTeDnyAz6nA9RfiqPT6qtrHwkcwYVzqdW5bUQ8Y",
  "key28": "35fEC8UzQ2ehZsDNVhWUxPqA3q8Fdv8i6fwkcHuRg3wjptpbxWECchhSa7bDbs1TKJHUYcq4y6srYRRNcsw6LNsD",
  "key29": "5oY3R8ALKTPjdow4VJAU2MWhJfFTWzB7KXT6SESaEcrtsWcEtxaDv6yDGM3rvxDcW8DRKYCMPRHFRN5WMPrcjkWa",
  "key30": "jfxrBYNXZjVQP4F4p4DhCyWe2AXFy7zc1Ux8n9mfKr2k3X2hBWBgRdxyD9rpyju7LmW7dwL6C7JJhiPy6BZxqWc",
  "key31": "3MXyPcfVvY9SRF8jfQvwSMmVDXLrvtHtnUPcbaU75SxLFuyYYQNTD4Yn7v8pxKLDpd6t9nNznT5rkBrLotFHnguh",
  "key32": "EugU9UMVtvQ3Ls6dCdfQ75SNXwTbHKu2FeU6duxCVp5xyLrvXXKEhgMp6BkH9D215Nq2TnrXcF1QrMhcMJQsCQB",
  "key33": "3oXo73DCmBNAVmh2T2fbm7knwZVeNQuWCN1FYCALbHKHLgMZaYhDFXeNChhMLhsgq8pLoiJysftfCxNnFJxqGVpJ",
  "key34": "5ZqUQHU4VSGbd9PYfV9Mf8qn9xmjQWmCc7iCsBBXPj3QKZVYo1YbT5rDBVm7RGVNZjrEf3mPCvCQjBotaPSGdqYx",
  "key35": "3rRufkcFaDiSQKshGqUjABSYzLSo8qzPnkogYMsGQQMxnQb2WRvsjyKxrM4eYqUyEis4D8iQyxNtjJyvZc75ujy",
  "key36": "4FeFAJaSNBeMSxdk8MXn9ZPLuc49nyHgFgpzSMdBwUA48H8QnrsRfutqL2SUaxDA85bnoss7zPoeZsbSPGVURFRR",
  "key37": "3q7b8QyAMj8cygFcdjNU7acDXARUozMukqtoz9ZEq7841YUSSbS7QBV3RZXx8ZWbLr1xa9t3yXSD1vNCPGEGza8s",
  "key38": "3d8QTkmzKTWTvNDoxNDmw8Hk4XuiWn7srqgTFei9vxawjRo7ktXutfYSjuFqceVp3ocbhQ3eKoTyco4R1igVxYAx",
  "key39": "2XpMJAsosuyztz6iTKWPSywbAmfw2iBuDiDeZRF2Hf2f5izLgWzzqH5jVNUXDDy576zqFbgvRuHXtnU3DP4oRb2i",
  "key40": "4As8i7aE3khfcduLaLpt38FyiPb5cEMR32qbAXU7xNVgmd21NvDsVUyf151WnYtmw8Fger7CJdfZ8nxrT2BrYZJn",
  "key41": "3XWPn3Nx7jmGmmARpZq5Hgv5dNogn1b7cWXSqTVt3P2EcPsK7iRU2f3dnURTBYw7m5FLkQmo2Do5nZWizF3Gf7HJ",
  "key42": "5CnvTRJkN8EtbwUeMoUQXM4va9tKmRr7V7KuwGiyfQMB4UwWrGZ2ZKFPwBzz1t4wMu8V2LTL6PeSffeVDUkznx4p",
  "key43": "yHfL6z3JAmKUCuSUXUx4K3cGcccdzdhnYjii7acEUXjKHZQGz8MsrkPjrV6uhvaRnf4jANZvx7s7FAvRkrZx6n9",
  "key44": "4KKj6naCXSSDMyEJM9HZGTCf7qQ1sy1k9VcJpaiY9APE8etYXVjbMibfDd1PGk9TCkxnxHdMFRmWiuYzZYvimCUQ"
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
