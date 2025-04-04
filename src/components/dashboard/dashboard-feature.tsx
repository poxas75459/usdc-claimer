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
    "54MBPCcG2GYnPKFLMrEbfV6kvSkxcimh1Brzj7EMaBaKi8FgYGWjj2irWYJi4y3eLGUVgbEKj8SrToA3YrQuRECC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KZrh9reygzKKHWe1SmbNdqzQuZApzG5pCwEGTs6WmZzQYrNKrYzXSdJ3toLsY76CUfypkmYTa7HY5QVqZUwpM6W",
  "key1": "3roC1mb9kUsiKoQdAZXtzc5B3L4Sj33p3p8xh42736sbwfhNE6uFAZEPrM8dNW5oh86EM8U5RteE4XkjTwyWgDbG",
  "key2": "3kLX1kbc2hYmHk5wuWSi2HhTdyhUBdpcAh63wMDrHBxrhsEGkHGnhPKzGRFHJXZSAtz6ha4v1cUfkR7FrBCsxcLQ",
  "key3": "asfkcyoF5wKPSyjj2v2KzjrPCb7nGDJqFcjMqBywZrRYq5quyEkjQ2w2X1me8Xhob2rstjFTkw7CwVTmME9Dpiq",
  "key4": "3AcdorPXR8dck2tQDJFDBr3RK82fM3jGfizik5E3LyxpavWZ2DbFAYv6eeLT6GKH6PRFEU6WUSmVaHCCwevhaiTk",
  "key5": "5XsuHozGuxSRNYHp5KqHZCNnauGyAqatDDMCXYm7DKweo6mPCo8yzdQhhGzNVH75TbnqxqTLY3wJUYqyNPG4Wa8G",
  "key6": "4fVbLzajp28HkbefvCH3NS8fJEWExdMCbu8XvvFP6oGo16BbSmpTqwfeXCttSYsW5rqFNAvvPPY2wvbq8vdRZzEa",
  "key7": "4NGcGNVEmdHbdqmRTCLCa5r2fWonhzRGfnwvVynZGBocMNuWucX1WoG6w7w6oN1ZKzP3G5f1gv76MiBqPjJjvSm1",
  "key8": "2TdaMGYotG3oZUnTbXkbTHVqTVW8FoXP1JyGCxWwDdAUhCD1zTgqcXHg2hTmDQqc1BmXBwwK7VULzRobZ4ahcSL4",
  "key9": "4yRCbaf8Px7VHEVd8fEW47otJYb8UTa5zvhdu2PHy3QzWp2U28jBWDGfPhyHxkjkArQLc1g9V3nMucbtTZELFKHZ",
  "key10": "4WXnNVk39ct12XRdwrjWArkim7AJKKkRuvx6XiqbbGWTi9g9AH1Rp7RXBk7eJF6u3E9za5byaxk9U8QTHGqeaNPh",
  "key11": "2Dr5Ucs2KsAaaPGqYfv6gGSR2BkpMSRAqHfmuao4jBgcr9uzEvKjc4me5RwcXwP7asehpVHQnccFaJUsN4pBHp28",
  "key12": "5edQTigcmWiso34VjQf91gWg2EVu2RyWe9Bi3QktxCFAz47qHGmgjEbLDaSzw7Go7M3uYJsTAhpvonrwRcTsEFh3",
  "key13": "5FADCATVCYxrnqaLmT51dyCRLrzqQHERMy7wCAjpykhip3C2p5UoKLsd6Tcow7KmNuDhRz816RR9NULB7NwcAK4o",
  "key14": "3nf1pTwmDUDzkCv8NK5HbjgpbG7W1UshWSwi4gN6UDczbmmVPWRbNemupFqGG8tvJ9vsjjXZtEuL2hnf7UWps17S",
  "key15": "ADfVUL12thbKCUxcHW61gQEGGNS1PFkdhsEHD3sQgv35mLW1MCf458AP36pSDLLewiAwfQSUtryxiVFLeHQuXGE",
  "key16": "L4EMBRzTAZf42p6pZNPS7VXVsF8M3tUrhkWTKsdWGpkRhDAS5GcU59xkmZqyHauEVrYe4sJBu7woUshAK3AkFS8",
  "key17": "2UqDkxcvinAyMJdrJZUbhCWLW26eJm4uvMawo9uEQgydFMAvgzus2JWmADLa7gRdJ8T1huPh9vbLe9uDhBGuzrRx",
  "key18": "5sHLFU85JzBaeJ5oAQdaP1emLH318hXbU4F9LepLmko9akaChV7L2oSRxrfVAvdJn2MMLUNWe5j6iWB4BM9s127T",
  "key19": "xRPsfGXbMEm7nfwcM3RZKMbdAwdcCMHw9dq6MVHbdZsJHPDmkBbC1PyASubPwZn9USetvGSwRR2Sa5jnmXnEsY2",
  "key20": "3sZJv7ha8YN4mvopeiiKBcuuHBRBoHeNTFaCkvAx7qZU9E7V8zQm4tFPd3rwe9bkdCzNVHf8DPpqdi1nwBogzEig",
  "key21": "z31GQ9KU3dNDqTSdaN46jLDfQ9biyTqRrQWCZz6r8fKtKmwkQLMdYSzuUmkuHQ2Wt1sg6Bwj4FXJv3A5p5Zwaqb",
  "key22": "AxibfhLfypF3UYM38oJW8WhyDetyPfg5nyBJs1KJVXHGpC5dXuYkHDwJBgZXKRTBRctJLUiQmrN98HR2griaior",
  "key23": "4JWvL63UpXHRnfkNpwfr72o1xz16HCaEFxMsAzKkH5rXVZ8shmSCzQcQfAs217QJQpZ3yitLs7AgUdsbpcJ9RmC2",
  "key24": "4koZyumKPpchUh4QSsEmEWHa2wgA8c4hSf1ET5UFDtwfSHDR5CGHT2GqgStECz9UqYprFUYdj4htWrVhxHQ1CkqA",
  "key25": "ghenA78GNDYrz4jQe4Uu4k62UKSX2gHxWPq5ipzJWCapdR1oH4WaW9f9E3t6pWVB3WRaxucGfC464Yz3Lek3GAo",
  "key26": "2GMBfiYYxbWqDBK57wWFfQPmo2bY5nNsuWSojnNomz6qraTBFCQn7GYFogquSVVq3BAgXNbnt6RwPoD61YTc9gu5",
  "key27": "5vrMmhZjQP8e3ovVBsVGNnH8sQgJwMTYdQUSkku8ke8vztjMhrK8BvoKkA1PaV6RQ5DQjpfPrtrjniqm6TTN1W6r",
  "key28": "5DJTPeapNvXAF7DjYmNojcuTz2yMWHErUr2V954VVZVVujo4oJq2XhXgLtRmCtsEYbFFbp1Mvm2VqDDQxSN6vqE9",
  "key29": "3noS3Nt8ERhQV6rEdbabNr7bQzGZrzbyKLUe5n4f6FJsPpoBGZrsMfTeaNuXQb5vDYWeihRv31wnHMq9hWPUFLgu",
  "key30": "4Y6exLrj9oQBvKL5bAvgN1Ft3WaxW4M5khUaw5qu6B9C8Cz3k8g73mzTMaAWLjWEqY1QxbRNWEqNMXpd3fq9s6Ev",
  "key31": "3yregsz6iPwCTM8GGzpbGEXoLZEWhbr2A4D8H7wMWT6Df1FQ41damGmTVZHV4EbQq4bR6n15DjR2doDqixT5c4yy",
  "key32": "63DiRYbivb5uTrchaKQL6XzRNdT1rAZJBfkbPXwBNHGaAubo81uiYxudopYKYi2LxnmwEYT2UDfF6m9E3nHBDCLs"
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
