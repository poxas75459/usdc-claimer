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
    "4X2wQQE9ekH3zS8UydVgPDEu5FAthfip6pZbPjYzpVmJUvbrAdyj3m8ibbukFvYRkj37stLdJDFM5vzXoET1eEGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32U7aL5JmWo5kqbz8CVKWiyNifY85aMYMwgwLw7W2nJo1vKtDDYrxb7cyPAcoR97ZYKhvG5bdFQRA8Ksb6cG4t1n",
  "key1": "4ga6jnKP39VULPZF1cYr3nAwE9fPcduM92VEgLpjHia9PqGUbgaVpksLRwotGss3ACRuuXGmkNARXZSBbsjs5TZP",
  "key2": "8JCqaKyEy276aSEdzR2S52fZiH9fYu3qkdJCDfxaUAB7rA5rSfHoFPetjULXtHYkzCKnzZtwhPaWA2qPAfJsbw8",
  "key3": "5TjPdwZLxbYsbSKwkuukm3hJPcWPhJkmzMbSgkkPT3X1prm3CAVEcjzpnty41ZQjRjMWXRAeKLVgqbePJijSyb57",
  "key4": "2yBkxfZVYyusjNEzu3QMpHiBBLh65QU8cJ8tmKtkekHXNVFKTzbZUy7sg2BxiqGNnV11pJd7wCEivSSVLMH2Zprp",
  "key5": "mtoDhsxAj2ALhBQaoUYVdtsRiwTot6vjfFS68qhTJiGA1TkhVVe4uAtvmuzqZ1uEAwkbjbHcjwBJd91zEt7ScDf",
  "key6": "5yQbtLnFkwG9ksU2rXFdeiEVoeXdJavKRYfLhrQSLac5JhKvf7AwHwMfuYJCtQUgnKzviZ3hjcqXxa9Uz6mEq5ha",
  "key7": "4c8Gjz1vZakc8CZpWbcfuyEycV8xDFSop2cLH1N1osLHmtfqSuq6xEVphDS1isniPVFsuqKWspxLSadfJ89WdmZ1",
  "key8": "3CniEPwZK6AikfcpetKktr9M9PVvvmcz9ksjKae2V8sJZwUHcdSrcocWjQUKHRUNfXX3LqXBz5ntUs4pQYst5pj",
  "key9": "3mgMLsgcJX2CooBbWG7A9XSYwUq9erQaahq27gYen5bznU8N3ezmPCvEyKM55EtAkYMvJcbsLnEgvBCSHpgyumAR",
  "key10": "k8JJpccci3fPRjU2fJbtyUxGSKM7wkzajAydyDH98fbh8idsJALp2XvjnBYrf1igQDQZQLL9ZKSMKRk2LjX5D8b",
  "key11": "3xTV49cXTMogJpxwDipqFxRPMgdW9Eyix98VjRxzW7HRCakd3HMWsebb3c42LE5XybvJSqVW3GVoj6jUNnw2n8xi",
  "key12": "SXLjLq74LhQfbBW4GWVmSiBpBFLXNk7kvgRMjYgFrTmyA5awAkPom7KVEeEidvsPcYvNt4F8KZGouzMFYj4RdTj",
  "key13": "3pUL6QUjvjXUvmr7UZh5FLDUpCbUbvDKdMNWauUYgHY88g4ewsfwewi2Xi7EJUWnUeyTm6X5GDkKeJUxP6KhbZvt",
  "key14": "3Bzr252tDtdpyzgCTehYZrziZEiruhrKTfpTATBjGi62wGByc9vxBuHmuQVo6GqxmZFbXs1PajWeSJVr4LWdvezr",
  "key15": "3A3tiNygsDrxznszcbzXL7zb2EAsLwPvDdkwSmGWifFN8s5zN7nStUZofGT5HmVzs1yZXACRx9NuU6naoK2JxJSy",
  "key16": "3bxeKUdt8c5tiRKax3i1fB5WKRq4SK3ZVtCcB5fXs5ZqQx3iSFbGQizXB3m1Ajfuvv2pQJLakg4GUEgt3rzTCfW7",
  "key17": "4pLxD5UVj6nRBYUFLJKLKrfo9NdyARKEac4stS6gtUrjSisZKsC7pQ2ovEADwZSoY7hU5Aq5yNrC3kAXfe9R493F",
  "key18": "5yppX5AjBXQ3GSy8J8H1ffmDhkZeB8DKao94mdmzL4utfqyU8qFzqb6bes8XPKm4MAPAgYfcdUG8k6kwQ7vuxR3e",
  "key19": "4ZrThpbznCSpnVa8vtwiVMdv8MsjzScauxfzLkCP87bBKLjgnKwQK4GvrmmDazHuppdhwiQvyXJfS4WUWXuNR6mx",
  "key20": "4VkeLJgSmP8wT9ssfnfuKmSfjXoMPAUdARirdVypQWqGHBtxJcmL9svLd7vbPqJB8usKQoTzqN5gAEE72iauJFGb",
  "key21": "kAfa9wtKagthz7zcVaW29UA255H9WVVkB3aYngbq31FnPiu6RoC1WD9E8Kmif4cKWPgGd2PZ3oxQZWUNsV3qCQZ",
  "key22": "2vUFjDZfeM9UHBieW4KCKzmxbubmuHeqAATy3gGud2k7WJ6uzLUMsFwKYGGUgiegQQ5C7qe2HcLnfVZGXzC8kz7R",
  "key23": "RCLN8bN4x3iD6qSVRRQ8wfeWKLxt14ubsX7uhix3gb2uGNXMPxsX8cVGafeQPFmfSLB995WbCiqNDhybFM1Am4b",
  "key24": "3K1vLJvpwSAxvTNQAJQs3U6vFdNZsEQof4jpwAE7AzjDrTvD6zSXFR6Mi3H4qx7ZNntFw35qwX1ZN8KKMof63X4K",
  "key25": "XQkjQWFp6251bM7Mb6chaUGhLwSrAnWqvHMBWqju8zt9kpxhrkDh1AnLLGDn8gBtzdjtWGjTD1ZWZHPDqbjZinm",
  "key26": "2h1M2nA31MFbpyrtGMT4BEHroeVEDwtmrvsJkeBqUpxh693ipaJfo2QA453u4zjbew4kPDGffnAAKsrakwyqq2h2",
  "key27": "4krdDuXA2nBMosWVr4pFjknaxuHUEZUDz3EsKXdwqjAJ5HyhouBiBuFjpCT5P7v6KFdRu64tSkwsnMb39QmV3g2d",
  "key28": "3M11WCXxxKN3cSKouGRH2cQrYSyqmLkUbr869ZU5k4Kb5ZRNbCy2AqCTZ7GgkZFm3VwXfFpqaiA7HyBVe5UU3uJt",
  "key29": "2FVfTZavJfUGXWFgMgcy9GWtAdnWEKsu1FHBz7JyfK8q9vQt5cYShcTpoQGdKeFJJjW79eHCM3YPteoHFNwTsUjj",
  "key30": "28XKhMcPvmsqpDR5amgtuthqdDjYiNADZEhQaHAJBygqopWhWp4Po32SZzFE8nYKN39a5THnHoTtgYCMXtghP57T",
  "key31": "5r6JyZ8TMAZVYckAz5BxmYoBtr49CxyR9778jA2b2czSVSYHhddKU8JzvXfMwpbJcaPfaVjtub5g5fFNYgRevHh3",
  "key32": "2D3QAy81MC25x3n5KN2HrRVkyDjo2yLETuUF6zYecUQzuLmZRoUuX6GNWaypghAmVeDTL49iWrcA5Tb5XKzAc4Du",
  "key33": "2ZJuerPrfnoPcjA3HhhfSTLbEH6NsySqkGf68S4mie3jkgHPT4NLvBLn2RXtTQpB3zEQEu5RqMLwv7NYWLmBJwdk",
  "key34": "3t1CSLkTThGkH4bZFH5BbPZqo847JYRcvw7J2xXJ8td9ytgLXJmGYk11BrDSwVGpt6MhaPjRFeH9cesqDt8h7xyJ",
  "key35": "35tKUotwuF3QfpPX8kAWZZtwVPRrPmzp7wHoM9w4tVg6tYUxNrTdWPr7e3xbpdiH5ixBRsxjNH6ZQVojEeMWuLjZ",
  "key36": "5kKD9gLXvSKkLCpK54hoYUD4yyeu3ELDHdVHSjXtfHd5gg8TYHE81TCriveRjsZhm1rmNhyiTo9eSXP9Fai7CUDD",
  "key37": "2ShvMEaLS8tompTmHWdDvxG47NCSQ6x4PMaZ6GqaAHczpv4QaFAj17b5GNu1izd2mScTDjZTfWgQT6b3K323QMVc",
  "key38": "TGjoSnpBBvcp3pNT4m7RbFhQ7FTRYeBceVLXcdk6idEMGdkmy25qXba1vryMtJHkkbiJ9WEBEEtKHF22DBT7deo"
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
