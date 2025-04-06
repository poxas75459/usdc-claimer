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
    "hw6RX1H2iUXbw1TtjQVJL9XgvaEffP52uhY8GD8zTyGhtH4YhJNrYspkQ5mY6CnZ3nKxY1WTG9P1sbKUtPU5mgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zz2tMvxqAHvvtugKDhMLzFnghY6mXeFL1LWzBMDVxh1dkCTeFX1C6QYRxRfCBGwdTXoWujfgFiLXqmLUTWc7CJn",
  "key1": "3UDNDrLz4CeL7ELAxkX1zy6yu2Aj6qnc6DrLjWbE4geUqss9jc6egBpvNe4kSc4d6gmzqQXisJRpfM82gMztZpbn",
  "key2": "43E5E5MNK1JwY91R7cfcPvSm8W2piSqQ2iHZgjm3DZDVgdJ6kiHx7FGirR19xE8rWfgt1xEsVYX8ZjRXbLRZ7ppm",
  "key3": "5rtm9jJUV7Ejxuc8nzrtgYybAbdPxxTjATSG21Z5SaJZbLwFeo43ngbyttYbxv4GfRECKuMoC5wppqX8tJA11oKe",
  "key4": "2ZVtrHdkZ4GYa27osPa94vvrhf2HFHNnbZAzqEGYVQUA7fSnqKLVi3jbRATTkjW3rK7zt1tWuBEo8j2XCMHAECsc",
  "key5": "38ci7J9LeLFCLZDnqiQsQNAY8w4FZP5gcHGjuGnpqbsdHtu6ZDWFbE8AhhZNHK8kzMJuh1pumGJZH7DVhds6GDbT",
  "key6": "3mmsiZurUHACvXXHmbNRMt2KCh1xMKH7pVaxfwSYUusy5S7zvpo3DTEGQRZPRZt1GXcMzdgvcPVs115F2vQ12pMn",
  "key7": "2QGiDxwU2bzPnoucH49NuUBYzApzzeR3Qwz3pew57o4ELzfQLx8fuT5Zs7vhsi42MxMoeSEhTbq2sBMD9eoxJjYC",
  "key8": "2ktPoqvTf8UmaZFQ5274bv723UE8aARpxyc4WN2akkYDWYe6KnWHVaGoSKFM9kBdN41QrZYimd5rJtmnbyvGShQK",
  "key9": "5KgPeDrchvMiHsGT1zTXFrtp5TjbSW1BY8jQKvRxhtdmGuSMbB7j4mn9FzwiMkhB6smuBgTPCyWgTAaahDYFU1Ny",
  "key10": "4CPKi7xec3yQ9Fv9ngByzmbhinPovHxYzfaSfkjbUhf2hH8z1TySye8768yKsbGYQunG9ywJezxdthnqkJ3g4W1k",
  "key11": "5oeYMygkAsGzdxJ4esbUebKzNsCDqvXJDNpjuQqNa2ErJm1pkpBcCtY1FncbTYuaXDVwWw9mr7AEB64wueDU4WLS",
  "key12": "2DxmkB3Z8P1X2qNhwoFRtDJ7ikepDpy29cLi1RVmJzNTmKKQShowcjSDyQLTpQ8kZ9cJqjCpofL7kFUD4ifQ6hZL",
  "key13": "3PiJXiSdNKfXCrFC3AaAqmjaaAmRf7R6WrRmcmgCtTHei63HHj54Q4jEZJvQ6xdWzCEg6tW7ZEPpFfswH91D4ybH",
  "key14": "5wTBuXWdUUVCX8y3tez5WNBr2gWY5CPKy867qjrqZ3oNBhmHXQ7NakDffejbpEX3FKmoAUgYmQ6Ji48A3Pwga6ix",
  "key15": "5NftTERyhi25ieavWHiWAUDxBUg5V5PFYX6FBpTGj4NLpzwmrRCodzBKU75zFmfAcSd5UT2MDA2okFwtJRK7y8YA",
  "key16": "5P6dWwo6DKjPoGF3AVYLoGYGNHY61vVaTNusmEywubMHrquqsTz1UnpQMUrUkGydo267mMooucyPj2N34Ggd7AFB",
  "key17": "367awXNV9nNevQoE5CK3jKXonKVucxXnkyR5ovKruAhecv81CEHUjDi5vBrmoAUdwKtUXd59P68Rw17T6yuJwhts",
  "key18": "3Z7b2dQYjc4fusJzgduu1jWtwY8bmBTaxYo7Z2yaPrP1SunCFT3Ut9gvDSVD8ZgbnH3qoP2ZmfSz7CUV89YJi7rN",
  "key19": "3AGDrxbJ2u6iEenNYTkBoNxuUriSn8Vpbc2TtK4R9CUfYttAa5gvTVsqP8SdMGSUNn81NzeqqM3UWkVznRksNY99",
  "key20": "5mTW3A57eEFEPWZfccpeN8Ria1JTqN5iRazmYsye27KAbZ2UaVBrr4i5ji7GzD1Kz4GZfGRmShDsqQTW7fMVGEGD",
  "key21": "3eqvt5qfJJigULqqR6qE9HYC6tL37TgadvAgFJiZGFa3QaE9THDepKRztQeFCpkXXt4Hsvfyy6qagYVUP1yPpna1",
  "key22": "r9ipQaeFjnfLPn9q6XsUBRhEuXjZ2bS9AM3cL3BCj6s8YfUYVv1WhLrHVhwQEavPQcSZudBMq9cPTasz4tqaCpF",
  "key23": "5tNVRQzPRMKZhVFyXcNVC1oz9GKdY84QAKuHLY86JuZ3DriuXbNgvZBfA3t3uTWyCGqD3cxsKAChYVAoopCr8Kpt",
  "key24": "2RXowAPgLiMntxAoaWyJPtyGqAvwsekDCpP4ZEzNXVs4fThz8NjGTQadNnpbk8nyueVovBgELRg1qjXTuwmEHL1s",
  "key25": "2xFYDVL4z1LLyGNGgfqUbLh7nA7r192e2AY8cPYRKRRwvyg4Ceah6BGhKMRcEtDKRzZBQH8o1newNfH5Z9XsqxSQ",
  "key26": "655pbSgaLdhx34w8VahoLuCEBun4YWVHnkZ5R8dW86C2X8jUHE7Wy3hsRa9gCcesHMMY3qkpyvqCpu3uh8qUkdcG",
  "key27": "3VyGqwXSL2sedC53Z6nW6TnEzQFSryTFoHR16zZQTWM492Ws8V6VHaHBUj4Qd4QtBh4tFZx2wUmVSy7vemiECUrF",
  "key28": "33t41Lt1vhbYTphLkJH2tGbbwV5Cf1Ta2h7PEnBXfBs5JWjCExrusGwAwroyBXgi8pQiLxS3mTLgs11sAgEZfwdy",
  "key29": "9AAYyhTb4d2vF4VpZEyczSQ5b5XufhA4UqcHCfTMuDrtsL1znNyJcX93avtW6oiDK9s3yY7uRsLnWRQ9SpHXp2S",
  "key30": "4ZDTD5FNZYV8wiA5gW18BQcFkG1hozkixoh8D5r4fbQf1JNSG2L8Aoaq92bQAazb4wsGyCuqaCCvwh5udzef3qJA",
  "key31": "2ShJjJE68JyyvbpP5vJWqFAmRuzhw7nCZuqNqQ2iP1KNW2eUMNWJQ4pt1jYEeozvicbAzSCKLA1c5dYfzpz79CJW",
  "key32": "4zckHS6ePQ4ZGtseVWQRc1wqYUh2bipCG9dSwRepX7WgvH3yi2p31BmPxFtfzeUi2nHXLgfgk31F4DeAnpyaLaKG",
  "key33": "2gKnuityc4EeEvC9g7bhKNoCxZon9ecyuPezkoNBuQ8VumPACbdstaQqVJGtDMKyaaxcsw3tmDtfUemWY6KkNpHc",
  "key34": "MHus8ShwhgQEpc5jh3oVuViJm9XtwcVuavbnmzRWqECszVhSVT5CF2n766xuNmXxowYzC4EkMdNHF1KpHiDDG9Y",
  "key35": "4WFBtpwihysrsEsVXL4oLZ5UjBFQgSjHp6Qx41TsBU9WA1sRy4DBDTK2wn4FYsFecdCvfL7Lv9GHwpfsF3CyaaWm",
  "key36": "PQXEoyzyYub8FU2CSxneKNCSXtahz3z66aYH79neVWQA2geAHpxbPxVGJi3e5vbbDNH1fzReAUjuu4CkNtUoPce",
  "key37": "4t88U5T2wRWLBL6CnkDAngGHjVdV3RqB9u5JeCk8Ujff1imCbBdcx4bKfhj1TeQwcpZi4eLMpbBc58devStCNeyY",
  "key38": "3oU4XN9dEGB6RENTa9vEBRcWuqnUGsy37mNksQz2v4beWryvBiNdJgfKYLE6TUSY2YhJqSLHNYHE8SZWhbV9RAoN",
  "key39": "1sfwR2utZ7Lre4esTCce3EpPuDkygMcMpGasFiHLewc1mseGKrUaWNoDzFGXHnTcceZJ8N8rsmdEifNct4duKTD",
  "key40": "31yb2GEiybyVwxgiEAWkCCRNBkcLpZuxqLbJ2gDX25t2V3hkmpMWqXkUpgxpVnMHKHbyaVZYQXq7tdbhmYFdoGkQ",
  "key41": "3VDwK7BPP64b4NJqxtHv5FvKAV24dw9sCj4sHbiNf2uCojDZXkvg9KmWVxvXjbWsvFxZeJeZqJn4KSsF9ZnUWqLc",
  "key42": "4Agjo7oTQ3LMmypCX2Wi1tCWo4Qy9gAwoHtxfLWe3e3iemnEChdMGpHzVsLKEMZhEtv86fVS75AfUnWDT9MMRCAs"
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
