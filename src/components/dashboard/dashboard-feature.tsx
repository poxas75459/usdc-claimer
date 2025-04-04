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
    "4NqNsFauoRpsqyD4p3GoeLK62aZTgVG81R9H7CMvuSakobCBANucYGvNNbkkg1zgAd7RcDSDjs45Nonsp15F6RfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vnKsoqVc6JkDCReuT1MmanypCAgTfmtq2B8PJmwgofcZpmwH4gHGMa9Dh63Fy1sTdHiPhzqJdka1qkC5qBGa7vP",
  "key1": "3SkAfTnj3DRKBCxbpnWpzcPBuSyhBcAs8WQR9D9JvF96fmXcEdo6816pWKB4RmcD9nujNzMix5mT3d2mgmQeyNLD",
  "key2": "29bo4GkUUxine2uRuHkdDy5nVQzCbMHXHdajxT5eHG1qYgEgWm7nJ9gx268JCWxufawJtVckYPUoBcxeQrLwCrqm",
  "key3": "26pWS5WWL2NMQivgZ9ERncNy6CUBKCX7rc9pbEuPWTK2NZ8UcF9swjHcisDEdMVp6EzFqF9oLZzjEQrfkdjGhkCR",
  "key4": "vj6yXzoNy7aEBFBRsG44StLFEkPpbMaTdMb9nAdkTj5QDr78gefGXbE2EoVfemKuZYG2wkD7fMuxgSWJxB4oYvY",
  "key5": "2zXgf5fkYfz4aEc1w7WUCTLZyFdEhtGstNFpTe189BWgPPgjKutdMuYggh5mnGioWKoLMEwhxHFAzQcLUtTzhH7p",
  "key6": "3TNzjxadYECioTiioGUAfgGWDMXCUzVDL3imVkbKuZN1qqzfNtyHBDEEbakhfo3LyVsBvh4Uuv92UDyTzawMfHgz",
  "key7": "4oFpuExxLJeVjj8rjqYR6C7fRRf3kE8XpAXbUYTC2MjyJ7Smqk5A8tbKPPcumT8PbcV8wsDYy5miU8LHJphTg1so",
  "key8": "2Je1yMTmJuPdx7M85SmP5yrF5MydFnQ77Lduc8M4j6siZ3LDjXKvaQ49KVQ9fhPvQvHg4D7HG9UHQpJdbkQpPK6W",
  "key9": "56bgrbER1uMzLgQrKvSNuY7WPQavw2atZPAurAQgnNHnd45rkYQcPbHKPAcZfhEmvdRjQb667qWgmzyxuLDcFDmp",
  "key10": "5VvLffgKtShuUXJFim6ZeBsxPe7JzWwBFRxZRMzWzSDcEhWvcj8DZBmgVpkQ3uhoe1AfLDUpRWQ8hEj15Kc5hXsX",
  "key11": "4aJr2KoxMfchpZV5JSDznt4nyU6bpZvx9m9rmQhEG5e9eAnXC5Sa6M4v3kpvbXVWok9eingRBJK3VUqyCHKMM3ma",
  "key12": "29gtp1FEGbUp84CGDtc3rxxMPohPK28VcJ1adZsfJxyDz1cftif83SQFm1JSbmD9MLmejyZME3iEMPsxWtWtAk22",
  "key13": "5hW3AHFLCWjfSaqbtwN75fHK9ofjgwoDcBr6pQ8WoebeJYFptaN2d743tHAZprSFXJggGS5rJ31CS6jxopEZEqV4",
  "key14": "5EE53SWSkoaUdTHD5psVyLUH5EpiaDgHC3vgEPyMwpt4hqxuq2GRPyebbmGfAd8tZCxNPDCr3R3p48DZxpzwp3Qn",
  "key15": "4LSYMP7BBT6BN1foqQcXrWpK54baf9JkAJ49c2PiMt7LhzLfVVDrFmJYbgHpv8YELBLvYPzjYp4ozvk7zdgzNHz3",
  "key16": "3VoS1bMDHj7Z6AbhRDbsa96F73P5rMWFwZzuRhpPeHSYtnab144P1iSMqCsicWRWi8eYH2ES93esxsXHhwZau7XC",
  "key17": "2GAMhUkNZWNqJnXLkYaHsyBQEu7SJr5CcLhqmydTfpSkhrUXaGcsm1RZXHpitD1EcDHs53UDbGxEzmiWTaVYDfDc",
  "key18": "sHyu7sZHLMK8UENXQsoqV6RkAuXAC3WESdqF1uEoYWnvDY7kuJH6aghE8FjZXf1jmizNTsp5yR2mVVFaBaypJKi",
  "key19": "2omvaNUQNUyoWmyaZtvuDxXQmutYxo6iPrqNTQsfXTTyGakscXLAmmY753mFUXa4EMEyDTzEjqLKcL16Vv2sF2cY",
  "key20": "3PKXqR7vDJ8GN4zNFd9UhfuynBrz8rf5cPCzS6NVCGgYYMf6a3ig5DfvKsWioA1vpdmTV5Jprj6o8YnaxjR6gguS",
  "key21": "5kiqa9opbPiFc5oUWAvp76yCJAno68EJfB9AD447FPCL1MjEYyCmxuAUwNgodd5bEaRtEzHUxTndLQZpjTyQd6pK",
  "key22": "5pJ8mNj7MoD55gg3E48uypYG9TQHDbhCoomqiHkJJDdcKnndKVh5Zux7ACKNcyCymwBhR1chg1ERKMFe9SMBzATm",
  "key23": "397uVqPNAkW5MWhw69oCPaGatEHnsPwtiJMNy9ryTKNVdjMmxjoBCFU2FL4xkPmWcDgm1zdbDDEhQnZoCQx1fvvp",
  "key24": "P6XEPr4VrR9jZub85aXEXxgJn5Xu6Fx1qb7y89wdh7PU4cbNjn5vPz9BYTbMPuCy8xZi3krbNcTRCXBpf7ee6BB",
  "key25": "vUgV7MTRgtmMFK6xdtEGkzBUBZ772UU8yJhPK3eKQiZtpuMAS2ooi1EauuLJdSNoYuGdik6ZkmTfhdQi1w6Pggy",
  "key26": "2PnPkyKBJeGcBDAKcvLPKUEodRvXEfDRzXagBVvFZUvUQwRA4GxJ1qwGKGQn8WMCW7zEwmu97mKkPKtAcBjGXvHm",
  "key27": "2NTYUaxxFT7NwV6o8UpRJFnk4WHmREaNBcBiVgHPnvM1vnDBqnBrwKPJeDfVjc8VY9entSvAvEYLLHghG1zEZggk",
  "key28": "4QCsnnN7HtiGzN28aGGrcRueoPUmTo96FKBbeAtC5dkmhrVwq7fB2e8VadFN9sAtY41BqWbiTTJ6yyupZZA9P3FW",
  "key29": "399PbTLGP5w3BJG6sBPrtm9sQWfVCcnp3Sw7xJ2SR1pwA4V93izE43zSnz2Y1VZokuvXE3PLjiT7zior267aJqia",
  "key30": "4enaUYxnLmZ2cLiv8TKDuqsQWiC2tiwp4f1EEpJniB3nWLXmobpvDJ5J9AE5FVRoDg7mJu42Sjo8qzH2a93ERW6z",
  "key31": "2zatk73EHR6kwP7dLP2ExeHahZKs7rQuviXXJtAFCZS3uqCEMAogwRPjed4F4Y1itLEBxraeacAbqWqeDDBSpj9Q",
  "key32": "5LFHArLbtJMZhowQCiJiiEDNMMjFZA2FN92oeS46JCrZa33RnPUzdgAuicWN6YC1iNTyuaNjmoj7SfBXR4NPSDaa",
  "key33": "37N584WzqwpShLBK47LyEFM615xPi7xHQABd46p5ZkftjfA4GmsZBd7UgLNBSoLQhLLkLUfAde6Ni4cjzqooMymT",
  "key34": "2pvjPb9X9L4eUsnMNNGw43WcfoqQ1i47K2w5Ks1PDcRsn4vxY7DbF53u5jjhaZW5hDafnTah7wv522Uade3PkfYL",
  "key35": "5mvkBitoywC1USSamH2hYWqVptEJhcr4iDgSiGkDftW8wSsyuDqYp6RQZPGUff5p3azsZYZPLAHWkHFG64Y3YKEQ",
  "key36": "3ZhAXK7u2hfL9KkA9LcWsfRw2N4wiVtFGYwBMHot4KQhLgci2KJ7pscr8mpoHUzNuFN7g3fpxG56SJwvNnxDd7NA"
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
