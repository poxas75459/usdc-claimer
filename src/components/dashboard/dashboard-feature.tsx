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
    "4E5n7mNHd55MryNBNqf9bar6zvX8K3BDpm5VTVkBDPpHXTn1MCEqzHgM2g9BkzEuUfGTuNwVwAvCZwfjWjE8jZik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vLG8JthvkVjAK4GBknB4yP8aBzjSL7PqDoQpnkQrFHFCq78DzeuxVMCV8iWhz1aCkhAcShtMbTV2oCQ6HxHs3ue",
  "key1": "2qQbFbB4xmPPe9JctYBsFcFzit6XD3HmnaPSPYGD6qs9Mt1cxygc4EnewvombhF3uJaFhJqA336Qdwid3kbZeT5s",
  "key2": "4XZmdcQygEGFa4c4scwtTX4wDusy9yAcAxKYYMXvKfma9PvDdM7dgTDCAaAbg9mQnpx3ebTgy45zeUr9bkABSqBR",
  "key3": "1WVVFkRV1LLvXcT9yXLkPVXnXZsFS43AqZ1fgsvNZQRLvssHzvqr7ApqnE18dobHNwfbwcxuDgsAMVhjgtoh1tF",
  "key4": "2hGxK2gE5YAhTbLShTcPsD6Cc44SrEeJTqFiCnhbNK294rvEkUFF4vD8nLG2PRyKrfJ6vR3gwTVoUCUZTWKYYcfp",
  "key5": "59hiQja8sXFxcXLnayBFCyqy5Hjtueu7QLeaJbgopUNpR4Jged2JR1gFAqKP2q46uVvYeufyYWnsHTanpTEtKTFE",
  "key6": "4k4Ssw4kjtrsr5QC3SY2XpXgGJtdpyCM7MsbbWj3NTYu3ZH1DRL3DuN8eFXnYnnAWXR9JX2tJU61MTLqgQE9vNAE",
  "key7": "5jQg1RH8VxQqAdzSJLYLgziUi3CQ4Woycqh1raGKZ83Y5A3YJvdRrDbUXaJSwCbcXroxmtPJCi9WmSTeBou1Ttyv",
  "key8": "5n27UF1j5zazmgtPzSMryrvNoQgpp4AtJgdfdinKa2MPpr7Up3eL6jhR16gwbbaGJb4o1VFP5sLicuT3cQo9n8af",
  "key9": "5on8zn9ebUWft6PxJpFFecQ5zkpc2qrtBNtMgWZ3KGK2v1Fqn7BzqSAvw2uzAWftmwoqxFCAZWAnUioDni5riQrT",
  "key10": "2FUHw3uHXJb5szUF8xZJiBEx8YphL859K1RMAqS5KwUT8679eeHrGbxNm4WnKRAeD1T4wheJ8gW41YqkxFrvUxTL",
  "key11": "5tKc8cAo9W69ytxhfhTDJGKBviDF1kWrHCVFTUptKXJfuBex3dyjfVdtWjt7QAZD7GskwWncGABRzuqEfUgva2Q",
  "key12": "5bA3VBiYdbgjGYkHcMYmW4y6UdzyR46BVbar3vWor4MkFhnsfPWV7MyFv5oceK7HWnBvTBUnY4BzkWL6aEzvhihW",
  "key13": "hi1VC71f9a4wu8M3EKgfYJeiebDyxtnHUXieQxGv3iaPt3ijBqGnwR4NFsXMsGAQkmwx7AaS1MHQPBGWQyffe9Y",
  "key14": "2LSbGejAp1frz8MRrwakB4Wsbow1Bt4ZLZeKU9dt8YAvneRwC3QXWUQLm8796gyMz4jfXJFDMAgnzSYNWj6WkKC2",
  "key15": "5FBeuvyHXTPPcB2Vw6ihzp28gQzC2tq3LkWz3Q2bG6FPi3n8dZySre26fEFqB1Df5dqUrXcZTVwMmKY6TGTmesrL",
  "key16": "2ejKYwbNvtmzVkzvXbzaDD95pRyvyxj7qNrV3uddvRyGtUWChJA9Pwsx7vDxi5oSf1Lu761bPW51n7gwhEFruRJV",
  "key17": "3xUoRp78dJqHkfH4XKViTMcZm9yorJwMGoyjvabmDAJMrikbmGrQGk8gEe3XXezNa53s1wSAbLp17Sy1w5wRZxFA",
  "key18": "4iuoXXncKQfn4Vy8Ctg2x3i2dv3SYS3LfhR9WyNo3torK7DE8oGJuNayCLDDfLokmoxqXDz3Y43JQ5dDddyL8sCT",
  "key19": "5YTBe6Yhu4g1UhVRktaVU9hNeV3tAUFUNE6iSQzP1AUWHu4ng8yTyD8s2PnshT4B9QXC6jgSkHdKKTQmmfmnb493",
  "key20": "B3o3zNcGGKPt92b6c8ktjWfHL6cNeWPQgrVMDHp9iSMxMm92mZ1MLvwQoUt3kVvxNWMg65SsccEw9RYsB5QwpEw",
  "key21": "4zQPPurWPPqTkE4kLtcK6z6rvtEj5gXeJEmyt4XX4LAKHJnGNQyFM1rMFW9AxP7VR3LtbfNXu859kRMkNT8Gvje1",
  "key22": "7uvWfVeqAAuHrTLgDZFwdDbGikTxKiTx675EtWtBDhTeE7dUzrigfRQ6QmSQHrE8GqEXEKmZMXz7MoSmPyQFk7L",
  "key23": "66745dFqibKTTE5YnxKf9S2QsW8aySs9f4nQQf87v9H2TRDY3yJwTrRfWhAYR6Kjq65eKeVsCHF9wPk5k8NvqRg9",
  "key24": "283mT71MjcdCU3Xa59jZnMvYAFwrPuLgEL4y76CRq2EJyq5N2QHsrXAHMiXgoGRsXawFNTnTbVRFxHUBBYMtUTPP",
  "key25": "4xKqPyqDPVXYorEoacCqxCvQLd6n3wPzdLU9iCUmULCxmEQHjYwRJiWxqFPTNQAPj9hswpMDC277cpQeQDxKhkSC",
  "key26": "TxM9DG3dJQuceJ23Sfp23BfPLB2zdPVE5ZPecGYrzN5ifaBN1sBLBDmNHA69BpbBvHjrWsf81w6xaonFTs1RKfk",
  "key27": "4EsvnWAgALWLbFsTNWkdLdr3bjr4BBXNQg51X6osG7Lq1ysSVZ1iQo84SK5yTENyLyxpKvPbvJUGkxqNqgtg6Bt7",
  "key28": "3cS62thm1UTyxBUPNcyPLFdkejB2adgFNB4SNQQNz6Kp1YU4PPpG88kUPRpp7MbDzNHvwsnbFcoXjtNy2LUWM4Sx",
  "key29": "4ZARTVqSxBXaqi5wkWHNcb9LHb5cGE56ooKnjZGtYnG3wx7E6EZKWarMHWFUp4Dih4Mapqv7Bjv95Dsumb3sZrkv",
  "key30": "mTufC4dFVeRyaczwV4yCsqQCpxKcdAiAgyUndvbrtEYBrLb7rGksgfnctLsHcyptmRXaPh4Gxd6i5UsKn2PfDd7",
  "key31": "mhRjnhCViaLE8HCVD5xuQWnBcKzoeCQtXDWwy3pepbFbHZGR9mkszWnfAMX299VxweqWVsXbdN81KCNmcnAQLJd"
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
