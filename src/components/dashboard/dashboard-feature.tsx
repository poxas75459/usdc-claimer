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
    "5enfRCT2rznrQyPGVTgCfi9yEdGQm7CinJ9BYAtGTHxeVxrGwwszpjjtXyPsaAFXXMaH6D7dNaVjvBZ46LCSBpFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ED15dhMfjNHYv1PefLVv1N49q8bpq3M6Zg2e6DryXmWJ6Atj6TttAJG8oNnpMkpqWP5LPbSpzX1j5zoqiw1xL6C",
  "key1": "4qxZpSmeCtmLLK3Jo5MDPyGYGcrN2MRWYS3vsjJHx8PuL8xvVgMxmuugz48ESBabGGWcuWGLJqRMfsRpQnVb6HWE",
  "key2": "2g3s5GXnbrgVqRwkuxGNmwDbTRNsr5pyH7v6cHvQ2pf5QFyzDmHrvLXa63AZheMniVTxgVxwtT4tVjxRaQcLGUrQ",
  "key3": "4d6Z5N5GotNHUeTaswNf9w6rHWaCxvopkipZpYjJmYKs6NADq6BjNHPeGNzhQc5KpyUAPGy4a3YkqrTdeTrXPP41",
  "key4": "3gdW7g4ntPN3cVFTkxc8YvZmmfyZmDvdaMfUPdFoAgzrmt1JSsY1By6AcfriSQqK2pEdwx8FN8MHcFTVQeaw1FtV",
  "key5": "63LoKgRdJJcVzEmmBbvxmEPXQBD6TWuiTjcG6iMugH1E14AjdfYvqn22uPuUeWJi2fSabKg4JADw1JQhZya4vRuG",
  "key6": "55ZH2fvJGFFHQkCJbkjCL9CtkjZwnseB1aU6cv1vmQEYfAUPpXZvg8SSpLJvhjYunz7ybQeagbkj8nbB34TKHstS",
  "key7": "5iGbVoR5K5EK3Qypt7JzghoQV32dYejdYFDJx64WYy6Pnqrpq4R26AL6ngQit5SWzKbtNRRdL3b9K26NBy1pGkmP",
  "key8": "5YdppUkLzVPm5bZpW8z4ka9f7jjkrRBcKYgyrZaH6ZP3GB2UwFeLnReqMtSfKNHnZV9dTUCunk5Y3cvLTDpBX3hq",
  "key9": "4o5hFkG3i1akxv5RJPKEaMamHXDvEJCXs34tSTFhFoEikWQNqZw5iEcZMRvHnfCfd2TvU1t3QYDFf3uPVxBr7fPa",
  "key10": "5y62UQYJtrwEf96WjeMWA31DbcgSPmo8xChBkgL7SXjVupjuemn74SSLnpGDJZruvb7yk83fkcXhn6z2y6637My5",
  "key11": "2TUMfTZg2NJSHcn1mSyfmaLWejPWbx6bCeH26z5Le5j7zpyv7gkRQNzRfjVUYRcyFuJdLTxFLVyjHcCHBpMtCRQZ",
  "key12": "3B6gHJ3XbixEZUAR4NxhAD4wAXGuVstiRVqHA5nXvcbmLCTm5NDDm6rsKaNawiJm1VT8gC8HPjg8EmzagpVcPqVy",
  "key13": "47vCdebHJTTpFttuVyT6Dnb7hhBLqn1iawqoJdHvUn7UNdSkBWvqJ7HZvGak8PH8ybJXxacstyUWYwG6vwv1XRS6",
  "key14": "wTP5ibJGbUEwWvfSWxp9sgMMgYpW7o7T1L8445uCra47admV2jBsduFrPeNUwf5nMv2i1G6RxLHc28nurqYBRPt",
  "key15": "e3hvNkTApiuKS3MY8CDkWyTqCRy529uhZCCYWjhH6Y57N4kiB84ddv33pX3vwB7PateXrx7FBhVuqtKRbBS9476",
  "key16": "5dvpAEjQKstDnnGQXRaEUmp9EmYA7HgiJAv3KE7qB9z1WHq4Yhzx71ZLqFHKnGYVk1Qp615rgk83o3kv4GS8o1s4",
  "key17": "Lcc3ac5VHiuso3HUZeYkyAfz1yDdusbHaWjnguHdfYYNYEb4NYFCH4wn6VrhUbWbnjyn2VmUCovyB9havzmfM7Y",
  "key18": "2bT7ZTgdFstq6yegXMNpocMPF6vrrdRP5E1EksshzdM6ZSqc3e5KmSsSb6KHDd2fmVTxDTEcXf2jppHErgUbXiSq",
  "key19": "27ncj6tGKuPYX7AzPYmiYkgHkXAoY4hY7HhtSiccqJYwgKMRgiyxq9JeMuY7SwELkv8spFXxwdVXNguokSZas2MS",
  "key20": "4M2hwetVEGDjL33scLk2oByXBVoD3y4LoL4XMJKWgHC2SHPEo5vHu4pzJGM2diWLLkPnfKhatH8De4t6cPQszY8p",
  "key21": "2WLNJUuEMmPwD1RrzZ1R83MQTEKMi9tgBnnk8JJY5rXL4mjCo4kK5sq59ZtWtoiumQSV4WSEmC7jSAzmo3KRayHj",
  "key22": "381VDSXRoAQbR8AzVUvyFNC67nMpHQa3oZChtCkhyS1X1ukpM3tzCgM4c3xVPMD66JZUingMLPht6fKFGF2NPm1u",
  "key23": "3zxYpAGC79S1cCkCAZ7PsNZ5TwEMm2L9ZvYeRth18wvVMEkbDcSxtH4kZxyV3jvQDVFKXmvaC7SoatFRUF5SQEW3",
  "key24": "4JkJf2BHXShDWdwsrV9CkN9NqafYEDaqu7WLt3UsXiDFv8JEu79TdYPspEJ4dABTYrBmqhki3JiDTpumeK3bofGF",
  "key25": "256tZe2X3tTKc5FjY19zCbe9SJaXckg48DaBnFC5QWrCeMC4r7sXumZWrHZNSrjzC9McdW9vs3uKg1U6qYYdsSJG",
  "key26": "5VEqqs4V9xbJm75YYwKCLDczERWd46ZmqUQNAte5tVgU1tZE1rfHnyXE53zmgUqEcrPkygW5LWQt6SPGHLU6VZze",
  "key27": "btGVDM6r2x7jWKXnvYA9VVYj3hr7BkKy5NVzUHyq2DRBXRPQtiNidPUWY33Urt6cuLBZuB3WHEZm9rysyiKsSWi",
  "key28": "mqytwChLmLCbLjFnq2sYBYnSU2KvYjykTbHmngaJkAUJsTbmbjbayMxkpZjpswdyWgggZTMEtciW8SehvMoZTjU",
  "key29": "5mqdGpyUjYisu33oxg82p91KFeswLDyxcV9tCWnZhGVxkF9GBupJjroHTuwMCuKerAFEu6Ti8hWDsscoHASS2Zi2",
  "key30": "4Ae6C6dAQqmYPLByq657gfcTUGLrPdGvsrxpA8USy8eNT9kUqvDzkA3mTJ7bRZX1PJ3gC57qodmXVWuzzpQzpJVp",
  "key31": "2WThv3hwSxvP44CceCZL7azL22P9JYkmtcYte4TnF8sWJRLhsBXuj3sR29LUswVXxqHj8rtY3dj5aS5hbFyuynnH",
  "key32": "3PvM1yG9TxEAJfVEz8D7rHmJgp2PQnEGYtFFJ7Bim2rzReE8Mq1b3YMRqToQqDGLvJ6r8yhEhBKcy6bp4ybDmwCF",
  "key33": "5b8xwbFf4uwG9nKSAMWFqPNp5axjbJhquicGefHr1fQpNcz9cMA5BGqGJ6zsy6Qczb2aWj2m7YU28ZWSY8kxtHMb",
  "key34": "DPYNB6SyMGpGF1GovMVTjxPLYh3RHrthbMTxHB1Z5r7ukNkfByPxHe6qHp79bpj2WsRWcdWQ1kLvSuCKSKEJtUi",
  "key35": "3JXWVXurYVPhmL8yjFU5yjRAeJkdZSV9qWDqPM52Tm3bXfJtyY2cgVaRPoTNx526pKmLRV5i8pjGNQRx2J4N8jnb",
  "key36": "4ebvcxsvMyTPfzMmwURhUKEV97FasuNAukMDSyjdLDBjt42tJiGyRqucCzcGyfEB65PcRie54ZPiAVJxpzcPaB6k",
  "key37": "4qisJZ3DNsM3qLmT5g3etKTidVaEGsGuvYeKytBDmD7cYjD8VThhQwGZUiRJ9yDDUVNN6tyGAhBnkpt8L9fXvuxS",
  "key38": "2NB5G6A6Hu5YCj5eq7gcYR8ccJkQzJJc7WTWTyRKYSXEcWCg6Q8MpJuTapQ4DM7dteqNrujG2fHR9hmbZDFuYPY4",
  "key39": "3hZwmR3NM3J2TXa7MP6tSgXyhr5bj2ocVXES93g4Z4zas4vkiPNmHwcuqMJP24bVHpBq2aF6yeo6EKLJiQKCviFz",
  "key40": "3BZwjqpEpS5PKaA7RmbjEgymubD2J1M3dHJr3Ux3AmnqV2kuyhUZk1DGZ8TPWToXDocLzvX5oi77c7tHJnvF8k9m",
  "key41": "nHeAcUcMk6kBBik6ZfjtnxDtoWTD5kdU74c8bC1aZS9XQtYcxL4aaXjxZY1j2mwkE9ZDTT4e2SHKP5tvyQkkDuW",
  "key42": "31a91PPDQa2VAcGZVJt4dUXtT48yLcWy1dnBujnTsaKBnmdHC7GNQ7KJqzGRYaDsneQHjjPHpXempX5kAMSiFvP5",
  "key43": "3wTsQxFuQHiN5L4pjSsjiLDGdV6uvw4xad1q2Y3fPtWXPgsTgHokN8yJWw9GPrKo3iYsvVNbi1tHn6TFtAveCEqg"
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
