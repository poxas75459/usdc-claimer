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
    "4p2LghU3y931xUTURscPhJRoN8cQXebRpRMSa2kbtCLVqAcnR49E31RAPVusGhxRTvAzLA2sZm6d59vzCGyeGpBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AFfzxEmJG96MayRPGnLoEocpCaE6kJoosw3rji2RbCNBBfNcJ7RHeAGGNN7MMV9qLrzDDfeegjRH75UisFwdpn",
  "key1": "2FmnrF3o5JaKSQ1Zw5Y9sxUPvsMfE7juC7m9gCQPUTku4Qkg4K6wa4VmLj2pxeCFiKo2khdVpbBCdtrRP8XU8RGc",
  "key2": "2fbnyVE8iNYhjjagqFwREwA6sEjJZMNeG3Lx62JEpouUMyNd8DKE3pMw4efBQ6YSsedMnxg1XyHDDxuYTRAXNmTq",
  "key3": "621JqsStfXXW5py8Dhiehk7FU4MFhcxExXwJgPkEm7qFRwj8XqMgpDgJonguvu2AU3AADfZd3VHVbYzKHyQ24MhM",
  "key4": "tfS3MyqCEw7oiy7sZgHyzifEVzEqvStT3JmQN7dfPws53Bs743QcR2JdfUbKeWhWYRqQ7sSzN5WZMDSEW5ZiqQs",
  "key5": "33o7h91VcWZyQ8WixhLqiZkrFAHFn4J2GmgM7Yugmnz3852hHc3RrrYDz75MKEyUvDqTciPqTg28KsZhkyggXZsw",
  "key6": "c9QCWrLf512yKcHJefQBXToXJtNd5sbYQbY8Mkc8hg3nRPYmTRnaiZyZ52e1s6hMJMJDycJxkeo9w2yCaAL9TKw",
  "key7": "5nejLxhu9KT1VcQJjtUChadDtmLRhvoqCRRvDy4zYoN1Xzk7bvqAaKomLoWrhSwGaFqUqQ3YtdRUR8bdAJZiy9m7",
  "key8": "63J6cXHL5vvxF1aYNRCZzGcRLbydo3mcSg2wimBWM9DPorBhE5Zf5V2zqZBin9mKZBYFkPHvJCXu5HcVzqFgfsbY",
  "key9": "4T1yzbLbfKgmieKT36vN2L5kcb9bJdyWrad83yWo428jbAp3jxAZ2xgTXCc8gNFrervXpvmJc6vNwcd8R5QpPtBi",
  "key10": "Yq5JAxuBzcZ8YKnwrDvqRRQNgoHpumvXk3pRU4o3YF3dcPbSMPXhGgn8nci2NT3tGUqL5AMcv69Z6Piq7QLinrx",
  "key11": "2yr8mTEivCjgDGukQFcze5Ejjhp9BxnBeKFvDYgLEFUmR1hsAeLAmP1NZ4PRCpTCybLxD4yGchR5S28kUyxuHsEo",
  "key12": "WopHpkyAHcWMjqzpupVU1HzgmoWABzTunXhuxStm6eyWzfEcsPZf4s6YgVcqPW9ztYPfcfNhxVW3bsjYryovxrR",
  "key13": "2fbxBiS8pomRUkakP1U8wzpb2v5uMh5TtKsJCAHPwPfsUdCfPkwEeTiM7sbyedkAPZMtc1Jv1BoLntf7eJPD4KRL",
  "key14": "4xXfhkG6gYhtfxrTEdw4NbpXN3XwbmhYK6bySHvtJtwpQZUTF3cwmn2Qup6YkYowChFVMW3qKM2fkyE532jMf4Q7",
  "key15": "4dwinZ1W8qcrzWiruuwV6kARGZeLX7mD6yrww1vEZWVZNEH6La5LxDgDa1bDJjU2j8aEDkTpww69FuTV2h6WwxoL",
  "key16": "5EogNezfPVmwf2DwCjw2Yti1JuqDxMLaBn8oa1B76H7rTgtw8mspk1XHRDxWXLSTYCeR9J9zHx6KhgEiAK8b2QTi",
  "key17": "3PAu9bKsxMuZgQLbG2UZCf8L4aRwTRBnzcrZwjyD6kBUYJ8ThCGQt6poc2fVAFE7JQbHGWLzeN6aUwfksQBfNfHP",
  "key18": "2BpvpQArNXhUYxcRkVNxma4wuRTYjGgybrr1mogZBaGCHg7Ky5jeRGviQ6RwPzfTA4Z5NF6wpkUXD66NwUWxuXeN",
  "key19": "bNBsCTJFjW9PwGVxuta581XpDjYHQPhfGMJBHV1DunVAN1U4AK3Rs9eEF517oYMFA9iCjmfC22eUL5Dc1UyzNeG",
  "key20": "5DScxWfzrAgbFWexEpzBNdSpU26GgXVEFgmtUQRPEaCG3CNzAeoCudUwxZRFyrLLQHgEkJc7cGnCHjGmQ9pMBybM",
  "key21": "4nwd9tY1hYvFzaLbdWsBe8YSE5yCBLw18xdz21G6NHnTTmQoGSFEqJiLvMqUrGc78qgEP9bdr8275q5vznZUS2Qe",
  "key22": "P61fPbTgA5Gw2DkoSizXnc1SMmusJps9sEqP2hQZnxEzS6n1L3TWyMVg6JJKMaS49EehSRe6tq4ZodtMBBd4142",
  "key23": "5Pwx5CXUUrDTmXBbuvtFrsF8Dh77LcLkpiSbPyHAKz69AQ48in4yzgkQ3cuhhWM61PKrV64C9FfFQFXvfACSsXwd",
  "key24": "48ZukeiqMqu9NURbm8iyap8hsCcqLswLf13f8J4AHCkjgwZDTLa6wRAEHUcU5vCuhXbz3oG3b5bC5idySTjhysEa",
  "key25": "2SpaTsDV9aZ7ER9kgGDmHEoWe7xazSkc48C2LspcgKk1PeMfEsqWP1navPEv1ESmk79feEVDEbEb2f67zsjX3Ujt",
  "key26": "248m4TjqHaTad2jtyaZ6igngAGCVCa52K5MxadsdRLbyqfr2Z7kjLuiRktkeJhn4Vox6TsJqkyEaGbJJV4YMhsuq",
  "key27": "2U7gNMwP5wUB9QgY5oRK3feDu8BibGHENqJRsrwUrog697AkakBjL2BDXBbkeH8bT2MkDSPvNynkuH47aSauSAuq",
  "key28": "4GPajWGtS35EAKypuZgtzL7sUWh2ZvSPsxG91qdsSyAyFNAg4ja44eXAHtztTEZhHm6ZsmEjYNgegr2G47LieWn4",
  "key29": "5LAZJE7tumn578aA3uobrjgSqVZivir9mcZgtTmXW6rgC7GdzkbGyGC94pHYpnMDy5MjsKLi5WwDEc4efkNJi7as",
  "key30": "2oTUyU4kNYPgRaEStV8CwXS2mfnNxbPPZLtN9bPefoXk9vqLjkzfda28N3HWGgjBN2EzK99Rr4o59VoMfj5xchGn",
  "key31": "ezwyEBP8BJUY42vyyerXCeynTKC2BGcaaJGfSKHxGUs5q7RXGVMWoW7v5vQw2HXyvGGEgYMaDpTUqEpswRW7fNG",
  "key32": "3yyCx83e2V1FkLcCT3QWbDqjTEkDgFtLXrWXbMT6jC5WycyZ3hbxSp5XzrMtxLEjGWfFghzmrGcTXdvcuSAJKUkP",
  "key33": "3nKPCSHn3R9RKEcEzAcE2jLwr5G2Mp5qgxViWjoLPPqHS9WQmrBKgfpVU6uoj1xL6EZA9YbEUT4imZeLPD9m8Y1z",
  "key34": "5jq7ubCSSUS25h2K34bgPvM8GfWbbHisdVWPM8PobvXyKwV6Vq2iWSPz5C2AGxNaMreHoAPRbZvyrqNaCGkL5MA1",
  "key35": "5jvpRfj2FJ6wJGgUjZJFyfRiKMw1bD7uXTfUz33JCom9fnS1vm24b8FTchBSzbfcTb3oJUqMLggmqror4jf2at1X",
  "key36": "3EuvTAia3WyhuMbQpiAfipU4DJyqPSVjKanQ6sYWajdS3VTFNoWjBVhRHC8K6P7xtBCVczm18dQYSqGbt8HrBymY",
  "key37": "2vz2XefMwMVsii5tEweL61czoBUMaJtvbFCb9rsyVtM9Ug8F7tjMm4Pj3vYDaGw2mdkVERZXeCBnykNYL4PwY9UZ",
  "key38": "4GNpMUv8z3UtPzRi3ouEDhfLkQka7ozv5NLd2psw5yqLjx5EQ2ufyNWEBDGTPPnWEpzrqZCAM3uUuxexn8Ttj8Tc",
  "key39": "39uxEuFK64a1hysa4dLMX2aoTvRvkA3BSovMHsQoiktD3Tw5buvdB35KebrHc5sMoTRr9nLTBqw2vj7YkGb6XbkQ",
  "key40": "2WswLtAcfRpQaM9qCWK71zZJih3YBMrmFQPHcAvFPFasnxgxV4hcwxr5BRA67XmHY4kNHGvcpvwZMZ5EyuaxqXRp",
  "key41": "PEuKxEDVp79nLMpUi3b2s7yrK9781B5XHpDndvCMuDQpwnoiiC3KL3wNbFvMzhz8u7epE4vNB4xue69iZT55vP3",
  "key42": "2dDpkSayBW2TaVshS1z48CTNiz3radbvhdPuMfdFCcS3BfqAdnArpxgyBf5RFFoy3VKp9U9wCR3sDrm3utGPggPF",
  "key43": "2Pf1C8H3wmDw7f2NADeA3MnAFTbEQ9NECmYA4RHZuj3vdSNBZGp7maMkt9DG1PJzbcBnKXRC59dPTsuKDbtUd33",
  "key44": "3cMtQdkWQqe5Uw3fNMnssZJkQZS33rBLa6K5jSEpWUbztsUAUzMTLpXHs5M76BmChHnZ9ywwj5xJNwKxKp3rnkJh",
  "key45": "2Hd23nEDSnQ2htvrFLfXVSedP9eMkvrwv5mUpGQ9s2GC2sxZtyp3rwQSj7JuWByVaBUwz5WXCsDRL4yv1D8uzNgg",
  "key46": "3bakXpUJ2jz21tUqEWRMQvqNc8Mk71wK7kndpV2zUXuBmR7P1aV4K8uEuHENd64A3AzgwVy1yjp2dGXfzjJJNCCg",
  "key47": "x3QxR5uiVpMbMoWV9XYooDBd835THbVPpXAWPUFt7w9pD1X3HqeEQBDgUjSMSrx9FKJSjaPBR7TsDWhxFJxQKxD",
  "key48": "5c6CN1zU8Wx25h1oB76PXvUtmzweswvPAjfuAv3c53XkSkUc63TbLB9yV9dYa1ySHXKWCQDEccYBCdwDhVrPCCcR"
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
