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
    "5t1fj12JqNnLDcZfSaWAM36aBa8jE3inn9mUWddcEPPCxHojENrKnvRvzEA3Dc2Km4VCxAvpno2Cve26GxdbqbCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jg8XjEhQTi713ykQ8sLYTU4sBS5QCPEse1t4ZtSfDbAPjcPxDndtoXJHZyw9yishVQ5cMowWPKowUCWFxm41wW",
  "key1": "4dz7KnVkbJQeFwgfCyAxMVFEVAP8Sbfkug5DbvCdG2eeaE4FcWTJimz4DKon3PCMGXnJYsvYec9Xu8T2shWPSffQ",
  "key2": "2fSV2om36B3SASpv19hqQeCTWNi4QG3zNZeuN8RAhRNSvJaSzX8c8YizarqFFMdKBzp4m6wK7JbLgkqB2CLpFjkv",
  "key3": "4sPV4DNzt7zZuPC5Gjy1w9fJDYxEf5GsmJVimzdM9coB6BXi5Z2uxngJrtMojbot8fofdsdTBomzGsZjnCHcfE14",
  "key4": "3PZPXLLNCeoJToceFE8GYsLj1MasbhoswFYYfXVf6Lz76GsuG1uzmiTn91mVzBEHMx3NjXwT3RXMt5x4qSCWyR9b",
  "key5": "3NApMTy8B1yHk4z74gXrTFeuXKCoWHRmMzQrBEEKqRurNRAiaMw5NrNR1KnVrCA4xWrS5GDrBUfGJP2nHm9ZHugs",
  "key6": "2pp1EupbWjuu4N2U6T5kQ5utwQ5NK8FwSsBTJpJoHrxHUP4uaeSAognr7iJ2Tc833w9Bh4wJ6KnuuNQsmfFUQSWt",
  "key7": "5tutbKhHxkUqTgkKwydKL9JtzJEbzbVy4SeDyhub1urQ9xvReZfP3Udqw6eSzYQgcYpYNMgVSMdL2cZRB6dMd1CX",
  "key8": "99Hqvt3qEcsKuZtTDuGFNHyfoSyjEDgRuAgmBzG1x5853cNS4hTCVmNpAVvWq4GZTkWejpHDCMFaG4hVwHKb2eg",
  "key9": "3xVptScs6EqjiTnDNY2CDM5SJPUEQKXj4T3VzMWUF6GKyu4rS2NG8EQY8MjJ4LoMLsZKT3MnThFsvw3woT6DQf3N",
  "key10": "4TDd25qRreWKpKJq2E3DiyCgG31wKxWnrnKtMgmHvMjL3Wo6AigUAL5AWdYGTmjapBc5TjCLNL3AYsmpsccMjkLK",
  "key11": "4fyDKbaXk1TY5aKRamLs65mfzPzRnZvJEUFb8srdv1LL8ftp2gEYbn7FLVf6x8xEoLfY8ztkmaBmj8QmFF9VNbau",
  "key12": "4voURpQfQqBipah4VrCfQZkaNcf5J3R51e5f7tNGjZW4McgHT5Bn6A1vpnbXVGbq1EEV918UA4ZwWFNHSGVBNDg8",
  "key13": "3THtVTqjEzo4wGDFVSBPocphSkagrVndU9bZhNjGtoXcLZ4jhpSSyRTrLxb7cpwWgsZoFfsK7YdBUCSNomKs6ikq",
  "key14": "5CjgKFNeyRdBpHvrp9jDpBLPukAZGqG8eS55YG1dzjp2oKn7Jrt8n2HvoCUY5s9GVqduaLquEL2tJ6jqV1hkdNsS",
  "key15": "2EbAV9aHQsJYwCPZGMnmSGkb3xvdmyez8soW29GwM9wCGxSzMwVmAZVKnWAtpzR3SGS2KrYTAsb7C1Ms15hDWVZ9",
  "key16": "JuJBSXjaKetEWZiLu4A9QHjQWMCwZmjAQTinW4ae25QR29JZiNDRn8KccJ8nYrPAhBGrr6Aqz6KKZvhbCGDf8Di",
  "key17": "3t8dNLH5aC9WYUsQmNUaJvjFz4TyhYf1CTbTZ9htfCW3V2rn6bE9Yx1D6tTQukgGKSVn1Y3KYHAURz8xdmYYCkdT",
  "key18": "35Gs1bYoy9QPxfPRgpydWxUx2989iP613nmUaAAgrNAiDhyn4aniNbNpbt9jqR2q7TtafQfhcWisLhFoVaNECBin",
  "key19": "3WZC1WDkY1Va8i4yEyaEL4u5ioh29bXtDQCnN2r5jNLVYq9htVdaCax5Y1x7igRPsRkPJb1zb96C3HbWwKAnJTAR",
  "key20": "33DdtDzme3QbjnYHHQijcmVKThr55ga7ULkEKZ8dH8eQU5DFeKehDtxEGukgEU8pdXgXRBT9qVbguxeCejd3MH9S",
  "key21": "36oSfRSTVss716C4AYkAs8VKk4sGgJ6pRgvX4HSzPa7hdNfaTtamUQrQvRuMy5esWSQLFn5MuCEMEVg6Z15JMf5v",
  "key22": "4uHGvh4GqLKUBfBouraZjFPW8C8BBaEKwZW5CHJtYPSB2vvfKaifgWxUKacCmomM8Ct13S88oPENRQ6okRANybxD",
  "key23": "3H6PtijmNPZ96gPfvbeApVSVACNaMs2mYk4m6Nnkg8M7ixLfpF3kH9vcHsTfGn9L2h54Lgj2mTHLr4zkG5h8sjXG",
  "key24": "5nYFh3NATSoR9QSbdKUBUDyUY7MgtQpuNhUwKY4S6aKk5ERZHU39u2v8niYDCcQNdeWavuZDdiyfujtwc3HbMtwy",
  "key25": "3zRt2sJvW6rq4HPc1bjsi12mLQsDexK6CmYF4C7vtUFGpGxhoapi7fZt8PDcfEnLJ54rxrf79Z8JUEMVbQbLX3md",
  "key26": "tz1aEwqGsyY5t7H5N6dYzzfi86qxForqnSLpnpZR6kZ8hD934yhQJESsnHN9CrJtz2eu1cjLgfHR3AcS2ZGvjM5",
  "key27": "2wi3EUJ8wUQHVCehaZY8MRxTBZK1yhF7M4995hF1nL2GBbzoJ4aEgXPzqMFhHZC7zesDpa4J4yxhfj3gtQsdvz3w",
  "key28": "5BiDfTudtRWGJ62iMY5wLtdmFgwSh45jPknDJTx2h7ZMnBLnyiEm2uS8M6haa4qJmLGWPAHqJM766nszGieLto9t",
  "key29": "52LGrBsA5jb9ZVrTsZRw3cDfCP41ySSkiLFAbwrWjGbQ9LcaQtsZgcUdVjn9tT3UvYTVbufbpdye5nWzXva7NMkX",
  "key30": "5W8CKDwXrKDaDWcWR3rE8a7914GeMJimbuJJBCSgGnsjd8k8bZynUrVizYmoU5KVjAg6TARY1CJJReyH5s8FgMkT",
  "key31": "32syt7fNE5kpf2PQViuZqrBpfmxjcX8y17VCVeeditXUMrV9ZTttPA7Xh9yoNo4U6wCvwTkjXQL8Rpm5MEwuHQc6",
  "key32": "5XcQj8xCFxTQfJ5q2T8NkusnpSWdKaetfzBopynSu5kGppnwou4seYemQzqMdtSnDZPcTQAFKVVoSg1WqKgPe4fd",
  "key33": "ngApzoKSSv33MCGFhnzTN2WDBM1GLZ1XNYs9p9RvY2XNMqmrUwE4SanTnSk54oYuSosRbzH1sARQmX6MqVx7YFj",
  "key34": "2PMiPWZjQg8boE38sAEXxfvjLj7PFZVfywHVfTr7ceBQEL1iiTvsQHtU3ydu8GwiRpDsUj8nzXnqT1T8uLH7TkLb",
  "key35": "5SYhWKn8aHUPWuoTyYSbpMGhYoaHCbGH5z9n2S7KabcAVzjtSUWFS7jsDftHEC2Gmktr6vZZyn8998nNaNnTVJTJ",
  "key36": "29SUAGq2DEKqa3jKtkCkMuskD7ch5qJ2rQNkMeyYFovmndVwXRDGdq27v8u6zFBAA44LJSAZjYGcAw6jLEGVHA4A"
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
