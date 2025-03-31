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
    "5AiARzyL5GoMYWwf7r4sww9FEC5ynguD8B5vfog23nVo3DgSBczpSMhWEDYnx4RCyQGYhHgvJfZQYbdmjbnDKwqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UcjED9xWcSz6v6UTrWu62vfgjgdYJm8qHLU1g2QZzm5RtuC1AEpgJcL5d4DMJvLZKK8Eih6CEFzj3z9Uay8rz56",
  "key1": "66dPzSLHVnbiv57hubtnXPPLDwr7S1BnFcv2EV2bFmnQDu99ivNFJDTGt6otjAC1D7MJzE4z3j88VMJK6CBThZVv",
  "key2": "2vYKq46ehM1jS9yoXz5PYBBuNr6TdSzpLwuGTXKxsVhprRroDJ9vNrxmi9vXuKfYkxAiWevTsuRwttzHcQK9LGYt",
  "key3": "STBjir9MtuafehXQPvC7Ai4vX3EXnxSERwLb5AHxXh9yhPzym2gCCVHBPFqVQ87goYrnmyx9URRNTt1XAHLL2Mi",
  "key4": "5cgBi6HJAwmNsyjZecfZqG6T2hvPomqSFn4xjtNRnrvzmiaByjAx5kcRrv6nNjnR1mCoJdY1cCRLi3wpjuFpMkeJ",
  "key5": "RXoRnxj4ubaqhHtfd3HHdEPeUrXrQJNs2HnK1AFVwUA8gXShdDgJCdHvGQcTG5VCGWrLBBEqohLj7jXx9v1KoYo",
  "key6": "SRTLDwtni9bzrgtck3Mi9eGLk4JjxPqgzQC3Kv1XyHQQHFuWTqxukdriuumkkWtDFT9A4EPwa2DUAkwfpQQXNX3",
  "key7": "5vKKBpAcNEVkXH3pvYSxMXLLExHLtiPEKJbNF1zv5ZQcHv7bEwDFiDHVsqTWo3Cu9BLX7SyVRFmpRhbTX89aMymm",
  "key8": "5ZdVJaWDtkVyHePoeuncNjNbDbDzFvfkEpXtk96eVqgcdboKbN3wiuL7muRfX6uSuJVsiAQRUQkjGL3MRa1RH9TJ",
  "key9": "5fGFcPfVEPf88We1KgabKLHRRCmjq7AR2Szr72Z4UTe98vmHkUaqsTe42raDAc1NzNPcgLhysGRPd3PGnoRskwER",
  "key10": "64hmSnXohvNqysXrsSqQQAuXupRga6aEoQBMr72Up6BKARKcjttRWADTMtrk56BPazVaEMA4AgbToUeMiu5mmRfs",
  "key11": "5E3xqkEBUqvRBTGjaSRPeDxkF5BJCf5MdzNcZcvtYTM55kSbvNDMHvVkQymRnQkuv5N4xQMmMeFe841gn4pYTNUc",
  "key12": "5CzsvCJPBAqr2jeRVUHutBz3S4kBKUexsJnSk7wuFg68iZYTNy6DrVSVYZAcHAovCHYdx5qvjGXKopMs8oAHn3XN",
  "key13": "56TLj4ucNbCsXDPUZV3piemt61s6xr5D5FnfRMKgJnFBAK3erAcvXsMbZNdznCT8gpXQTxiT9xMGjYTGJYUi5eNy",
  "key14": "5rKPQraXPBx8SbE3P7isrDQQfxFTRec8NufQL8UukeTKJFSxR6AgvMEdtKyRnLSQMC5z4mcCk3BvUC2UXb7uktZN",
  "key15": "336mFEtxoyXYtJprSaSqXhLYiRLERHL5HBj89cTkHoZ31orHC5ypUEE2AwdCphP573GScm9CGQD7mwjjSiJWfRSH",
  "key16": "2byMSU6xcDKCi9CYzQ1mL2LyB3dXppS6JRRWYr3f9gHC74NtzkpHni8bqY5FYjQrekKXPaXBSDesE88BFvkoHUhv",
  "key17": "2hFCe3H9XCZNwC47YaxRY1MEVanxPkA4howwXYknatd92oTnNPnr1vKUiw9vpFBXJbfSEVJC1iawD3iYp8nRY7nb",
  "key18": "2xEHHBN2NnDkvb8gwK8fdGYcTnDucErdwfVoXuqaVGTYbzkrNQSXvXvRnQjheW21ycuvfcqXxLfRdLccoaXM7aZq",
  "key19": "56wx4qXygFnL4c8YhvNxunDRMkLp4B1uoRdVtGwQpLBbmCwvg4wHaLrGzUbYc81mHiTfGPou7AtRbnbk9tQLv16w",
  "key20": "35hop8d4WgBKpaQau8T4jRMu3deCUC9gBBpFJCRSGyW8f97dF8ukzdq1yNfWcNTeFVEawibPEQjsqcVtqY4H6eNL",
  "key21": "2VnKo1ufnzCNxVphPCduSnwkaTN37ttbMdmAPJXKUmzwJ2t16LEc9yVdcvD9F3fFGXHYnjfVVYdCQyUEEdWzdt7u",
  "key22": "4VQoynitoC3yp5XFMRNTkQVo7n7pEafq4mabTK15EFr7UV6awZJckEgcSSM6FGqLTudD8X8W72dLY27RUp5h3Kx6",
  "key23": "67GqkUy7Jq8MeHHxyg5XjKQfJnywNGn5LjDN5GNpmTkJaVpZrTRZQNPeEP6pj2uTZrY6BJzXi51G9v63NTrieDdA",
  "key24": "222MfXQ6EpFp5t51oBdkaueubNWG7rwwG8K8cRutWxSu7SDB6VrvgTRg7Kjezuf9aYjURBRiRZwSbcQPPBpTeXRJ",
  "key25": "4vquH8QNq4867o8HRXFtwyG162toxa6o2bYEYvPZoLV5y3SeQvjut1oxwUEMto5vfR8S13iFaHLemBgmjpVvUb1K",
  "key26": "4fqte1w82NWAK5tfPwFz426qaPSX7xDzcbU7npMsvhxZUeHMp1h2nxb1LXdNEp6yqdzLyD3UWhbSqsmXaELGLPsu",
  "key27": "64yoGR8PchyLMPwUmLUkEjtZxcK3DhGH859KUoDyGLzuP35SRBxEcCca9vGKNrtZVgjKPSHyV4enuqp6GWJRSVGx",
  "key28": "4KULdXme91DkveypsvqT1N9FcofLcvYXwXSFP4SFUmafQJVmVwgP6vYszRY884WiEvJ6WM1gEuwYVJn3TAxncUHR",
  "key29": "N11ASPyXyaX1d2v1MKRhtCkyz3WskGaLajzkPKLrXi7HQh5uu2n3oFL2yLvD7FRLUW8ssoRxbtunWKmwzLRCgen",
  "key30": "5hu4iHgKJnsSXBt1fMBWUdAE8YgJEFSbKdtnE2Yi3xZ6aoT65w9pVtZkCyxrUsC8ZwU5CCiSxa1ftdUrsyt7Bhb6",
  "key31": "5tGs6SD9Ys6Xo3sUAVFJuwzcqvPr93TXGHCUGEsGL4hBtZu5VmGnCy5dEx61xNrFCErZg7NWdGzWNQEJTqfmp5S3",
  "key32": "53ffYnXZPky5fi9ZaE95kqMi2ZpJkAG5AxHwfbNQ1RSrZrEeYWp6LLgCKc3RqygyR3jFx6ZfhkbfxA4fsZj4VVuk",
  "key33": "DBpRMbPURCb9EGLrQdpN5TSpaTq9csaBpgsfucfztt5gZjhX6tvExBaYvae1EwFy2GUBWtvnB9TZqTBiQLczArQ",
  "key34": "65PHKeAPajzdfBvi6ZTi32QLaEgBdmEKW8FE8hQcm7N9M9J42kkFxZJ5Kcuo4R5WxdB92Wr4S4gYT5cAjMTTYCeQ",
  "key35": "4WRvJznHkj5QyBbJfCYPzZRHWFZuZEBESuvbgwYwZzeZRGyQeGZtygRi6VZmcLPkwMNG244ZVbrJTzYvmR8aMLVY",
  "key36": "4Xn9NSx6uVuL1XpNRB6k2QgxNX4CgbYqfxpSftWuv6pem9nxSzZcD5WkcdkZsUZeknzD7rTHWkLeqEtykJnUwy7w",
  "key37": "2tiPMXZsYpGovWXgFjBUbZ5zX2rgbAEreeBksWVdaNduryLFbtdNh2o73fTZL4LbBR8bn5hXXWkxdAG1f2ppwRXz",
  "key38": "4wwygRZwu6GCgHS16FUrA9vxKaWFgM3n6xJwBMCU1NH1H9tJZ6vCNdS1fsaCoeohT6Kx5eJbC1jJY2nSQZ2g7B2F",
  "key39": "9MyBU6QFk2RVYoJJJy7g3LygiPBnBc38W7t7Q6xhux8RL1jhS7YDkSNbVNeDhYZAHUgtUQxV5XNbmVM8P1yApRV",
  "key40": "2qoC1nYLYR5iab86JuWxnpmqQoVUmX8LMESov1BV42gZh16VCbSkrQHsYGTJgMFNmy9RfZAriFFdnT3zHpz49Ze2",
  "key41": "5d26ohBVjDrcWtH9NU75rc2SQiBrxjEeDHoZS8BHSgULjByt1gp3dBaQiecWm1vuFXcuFS3t3jcsjjnTg9PKkrBY",
  "key42": "3JBYHh86Weign7A7hFu8KfY6T4qhqwJff1Ch97oMnQ2rRSCu6e7CX22w6TZMCQx9VqZSRckSMNgeLuPny4SoZX1w"
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
