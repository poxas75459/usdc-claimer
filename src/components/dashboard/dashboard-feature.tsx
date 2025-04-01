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
    "2WivyWp9DKLM9u1cyT1Ckxp9wfAf7HwyYEDfJSimmGJq3ASfci1sBNSjTMeUHHiatUcrFqNNyG7fkwkeDwX2cKM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vAQxQgrWZMUkkfaCxx8D4NyfGwKWrmi36xjV6yL9i6FiknsCbzhb8PCkrRJWbVbz44LNjurYCdqEa4tgrNcjzc",
  "key1": "4YZfQBw3dBC7ppNv8EusBBQWoEr1fMCqLCVf9Ps5bGCMZfrMNrN9zHY4RzYtG3xaXmbeB6UmQLT7L3jyZDojb97N",
  "key2": "49Qqf5dGioY4ZstxHWMAtVcZFPcES4mEqPrca3n9LgstGYAnFKdYHmy4GXCF3rd4UxB3eaViuTyuxwh81oh34ycV",
  "key3": "2j99mg8XCWtUUyRN4sxo661Rtq9TM6M3RF5gobLwpxyqLhiYy8YWtbxQ1kdEmhGtEKmtJTktTrD9qJDq7176Gauv",
  "key4": "4PFDJsvyWtkju4twtx7P1MvLDTWv1pt47v3oL4Xa4JGsKRCLeiDNTXMZjhPr3Hn28uPQDoRfhmdgkM59WGQzpYTW",
  "key5": "5mtcRsayngYzgF7uuWXwD8sba665U4FDZUmzvJomLATR1z5TpPkEebsYBgZTRH2AHysuSwxHrtH7MdbBi2Bh4gks",
  "key6": "3WWHkkGsMra2Ne3cMnHxCKz8BFRHdEZyYaMnBfDjGug5tNG9y8qfEQxJV4ebNbFAiV94HKakGu1zm542qv7R37h3",
  "key7": "3Lp9SzPbEuZw7boY8aEx2StNSSBmgN6A5vK8XpHZKzngUfLQ6T3zD4dms5Th3eqPJc6TKd4J8ADWeGzSxeRamoQr",
  "key8": "3cQVmWXLa6B94JRcvdtBt8v5MbkbYXcaUQxg2YgqbK2ii5yAZfC82Z7aqEunq4LeoFt9n66zzAgnoK1nYnwfgJxV",
  "key9": "49m3dBe63zb6bpF9LhTkBF7hi2q1hx5wuVAWV8zT6vtEev6wwPpKHxjqUFDApNSdxbs3AahArsocPUh4vLvAR8L6",
  "key10": "2kPmtw2yG6G9DRRiPjxVs1qm6afc2xPba5RL3Aje1DP9gF7CbjjXfpX5t2wW3xqj1YJ6pidGsD8rbEZmRiRdNCnM",
  "key11": "3NcQLF1rUra63vLfwJtjEDbAbfCJM13mQso1sNZMh3t6URToBCEQjq2izhrgP13aLRpKcYtMJVJhmSdWAjMYcA7X",
  "key12": "5MRLVEca98wm3NH2BDgxKigwGJhbDBjTRo8zMzLddBaa5uNzm4gXCzQqupmARpTrjek1RSiKPXDLvb3ruVenjJqN",
  "key13": "5raVLfQGDX3h28jdhTq6ZcygKADoD1jBZMrJAbDecuey5nSwF9zsgrpvw7bEkmjjcu5WxTq93QBoUSq7yMWMANQ7",
  "key14": "3jSgKPA3pTVpfcaR58Su6emcBgg8hTMXsFLEf5izgBAdKm4duLi8dD1oF1vdTcUgecGCyisJ1Sc4X3EFUZBq9fN7",
  "key15": "4ktqSP5BbNubhTwTovJ8Q2HShG1RGpgvvbNPwhDvr9ZC2QYDQhBNG2vnMGrkaESmjcQxnaAzd5c5hppJkdXf7CLN",
  "key16": "4dqkDjhZsXMchoQZUEtjsYMLcCaMgL2jQmnjJKxhPW9d7PtyVoQVyf5rkdzk7dd4DG1Rt5ZdXV69yK7jYpuA2Nr1",
  "key17": "4Re9T3WKPBQFYkELostNZ2r8VHcd1yov3WrLoU3KRVJhpot3wfFibAW1vLaxLhVGsf2RxqdBhE66Ut8284okbhFa",
  "key18": "5RLUEmiymYAmzoW7jdVaQN4KhT8BuBmh5CdkENVkH492zXhXqn7M3EJkTJgvQTmmgmEL9vFA2389JCUYbQWnyxUS",
  "key19": "23qduAXwkPkxtGAnaiHxvASUGcMTGm2hUcLWzjz1CZetfjZ2AtraA8nxLa1VMxWvVpGYZoiLscBTBSm1eQc3rm8v",
  "key20": "2wBHLmPctqFE7Fm4RJpZw7jhjVwJAnwxnsEV97qNJaCa23h8qCsSBpTrxkvZMePy1bTP8UJDcBSfr4qSPhPGTT5R",
  "key21": "P2HfH2XGyn8vdqFprGNNaWUdV4Ks5uD9MHFyvZXk2ttsydDjje6e3XG8zg81ApUHFYefaVWsnmcGTXaAqesrUjC",
  "key22": "2QFYwbStkVpZ5TrND9dLnJQR2QjP77WSv8Z4gFx36EqwUiAR8x2aGNdW45EgMEXQXYuPiCgv3cgjB5Bzx6nWpHMY",
  "key23": "4E81R3xLxvU8Dsmjcz5tTkhAn7i7aRqGHbvbT1TxWnPP1JsnRbuLpubgiwKH1KAqVMyFkptEAgY2EohEHcZ6jbnx",
  "key24": "2Rr3cU1Dm9EP27bMs4a79DNJJq8AsnUYK5cZ1uKEbVeYMGmojqQidvwVCgXQA7SG12f4cxFUUb7mFAPtik2AtiKW",
  "key25": "4sWUZ1zftrQ6GUBpRjLcVkEHABpdNUxXcEibFGHQVkVigYNbpX6FVbLvrFVFCFhwHgJtSkb7HbBHEpY4RmMWK6wL",
  "key26": "6irvQPfgvhTrSEvvKhVcgFNwTF4ZKskQHFbRERTUX8E4JQ9es8iAruRa23Su7dGv5ArDw1gADYe311cAh8Dj4xN",
  "key27": "5s1dQyLCaK41hrrE76JJvb6KU39V9YkkbQEDf589Rz49jumKSxrFEXL9EmjuLdpz6WVa11yEPDxZh5xgESfXkJcH",
  "key28": "2QxMxoSyeVmQhiwyQRfrCdV3bYaAGz7BcEGTgwAfzqSGPHHrvo1vSbGmsYseTZejtwAY6QCsctgKEZ1zBuso36Su",
  "key29": "65CX1DKudJZnqHAsCN1rMsMYUxns7JUpXLFSMzK47BBADPcK7dCMRPttFpUKT5aQ7J2FDi7hiaeaRveEtrrYh2v2",
  "key30": "TxbiWrvEYq1M3zvbWdCES76hD2SyNoeyKUx5ts3dkK57tgufrczZ9vw51f3Hcr6W3NMG5mK2N2ejbmVNGyNVeJP",
  "key31": "2dnyoqrkuH8qfRh9GJ9Tbq9i8vMix7J9hUq6SyaRnxFizaPzkoKQUPaGJKwgCKgZ5kw7dT2nhJK1RFka7euai3Cx",
  "key32": "655bjSZtzj8SruyB7BRLrEExAmmAEWvDgEc1uK8NzPkZHC3SBWdpYfqhbssC8QA4hAANvwaRWB6oruJzAcDBHq2A",
  "key33": "2M3RY9hS2LhVH4BWeu9gaXoEbknJmHv4ryL5q4ZGvKqAaSWgbRToYtFSYWHQr1gNNkB8nFuPbDuVvRmsHLSs18fT",
  "key34": "4Jp9ERtEj8ioLby3kwPmcnCexLEWhQgzPNx3qkTnWgT8iGycZmUWSK8xSg7emXNxCxYedkjxEw93SDeK3Yd9gYpo",
  "key35": "4HnaEcM3MV6hp9V5qkL3FgmApVD1uffxZs9QfS4D7Y1QtKQT8HL28FrNxS6ujcXSxbVmVLMAoEyfS9imctJExVPh",
  "key36": "67py4s6GtgsStvZGuvh3XYKMLWwLxtkoXgjqfRomnTFngaJcbi7yBxEGv1N2anFytWZCHKaiXxgxnpTPbWQnWo8V",
  "key37": "2zKiYtfyiimr4qjNT8E8ba3PTXQmCJnwVofa4eBZaSWjw9oYx6vM8D5ZZeHhffSeMPtoRcRGmByDnYkHRfWFo4Tz",
  "key38": "59tELRujQVj5AjRC3WKjGCkMvgEGVCXQA3VWiVMu4GHWUzEjioxaUFH786kMuEzcK9nbPfpQufcFKGMU4yPfJRjb",
  "key39": "5vbAiAn8GCnkZ6ZPqMuzGwTRRfs3NQNjmBPorVwHPrrjoznK2S2z61Bu6fTfMEmNXYGmKUwbhX8q1VkJ7KskRMhE",
  "key40": "2UYMAhG2WEF2RJQsw92mKxJuBPKwFWuKVCdaad47wvTPXv5bUJsRn2ivDT4j5JnG939ZArAnTLnkwNqvRGjPTP9",
  "key41": "3taRv6kXqaJ7m6TDgt3N9cpxAssNaFazPGwH4M65PY73M7GDPto8g5v7Kzmxf4LLZPvGih2tDbUfTFk95d4iHmhm",
  "key42": "ov261XwnJ7ixdjvWf9eADRjrNPACRv49H19qXDXpBHqWzapK7m3mpS6En4mqqKSDDKnRttZ8HPCgrg36897NQbv",
  "key43": "2Cq69hwoEefeXrfagGGPNEp489AJakEU8bDFjTuD8vxc6kWZULJQ2B4JxLLLR3g5koUD8zXJCrpDkzAsVTyRBmys",
  "key44": "3DBKbQP44vz4Xex99reTgWoWCT1q1ghF9CY2aNvpWgy7CTGWzmubVrQZpwkAuc3Wq2AZtDmmGAigfGiKdfkfpewT",
  "key45": "GgapKbVLhNXNTUqCyXJMvnpJBLGcfTekbatGBbQVP6v1hBLCZKFoiudcg4fwKGHTHiqTv94JrGzyDtxUKidSDG4",
  "key46": "qw6r2dG4m2crCwRsN2euuUVMtpFjM2kEpYyDVj1RWZ3cEkev8RNGadsaNawwJDEEVgqFNfuxVghEioLtzg6mcD4",
  "key47": "3sK35S2BjNAV4SPDcFMUG4KiuZn1R25jyB5PPyozsgUp1AdJRmBozd9nKiJ4v9qc29SwMcRKUAySixujuKgEGyYT",
  "key48": "65vMjB4t523do4PankHfjzZ4qoPWReVgUC3BWPGBTyb3XprawKNkYMieBXkMQizJoAhF3PCJSaDaBkyKW6TNsp1e",
  "key49": "3HLS2puAbobciYV2jKbq67rYwsXgkmaHocbogvQem2nerrVZ9MMPAwm6UzGtAoqHNbZMdcjPp4YJBoYYwgjwc76e"
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
