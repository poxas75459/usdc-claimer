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
    "5CBeVHyW4XUyrwVQweCTvkqhE1DmFVU43J75uViUqWhB4QAJKbiNri2kaRmwswM6poscuch7zRoxWZ8EiLnhUAku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63SMkxf66yp91tdLaFCFRkVrtVstHnBFFk95RyMUc4eEXuadMTCWdN2FnPANF4YKZMGZAvmrpr5Z1Cb3jpC5kbT9",
  "key1": "5gLk45UJFRvLvnptYAqGeyRD8M5Rs6Mj71Y5imP2SWwQ1bgMzMVhnjDGpy5H5XrTUjaeLUjDjWwuc1KAPj6BhYqo",
  "key2": "3v2A2Suy6nJPEafEYiG7B8Ja6pMccziVRFtMe7nadMw4FANC8t3cLGQqRKhGBWYxSyVxztWkEJxMKWKkm4xrE5Se",
  "key3": "4VnPeTMBB72pkUBESKFHcPAQdFqNY2hjDtneBfCtcSiJz7fuUepmwVFSXkKpJcujD31RA3KcKeyFm2413DBFQ1ba",
  "key4": "36SZgpFSigz6WKX7M76ke12Dc7ayS3N9TuTAK3Vjn3rUw9psL3MshUonbJjTkMbYQt7KsTpB2Lei8qzmr7Xg4pd6",
  "key5": "4zUBnHboQsY86YUDh5jwouFxRPh8NpXjRTypoRaC5hrxWP2QFoVcyMGtWvVsPSAsFrL7Bjp78o4xV1KEoXPXR93z",
  "key6": "4HB5tbwqRmCYYmmFSYdxaxkiavL6J7NhMhhwDacbVRHcySCuXV5KaE7kXbCtSY1dDKz6KAccXxrcHwSPCcAizBgY",
  "key7": "28UJ3bqpnPX9xsZTs4k1NbFEaUwH2Asb3GkWkbZCKQCMWzRMREvcTUPdH6gUZbrupcy4fug9Pg54TE1yURtYCQR7",
  "key8": "DPg94aWfAzN8d5xwqX5iPtkpigY7u7cZ78SaesuX9CTUBbpGDSacr6KFeuVh1DZ56qfJRgFsyVYh7CN28JH4en7",
  "key9": "2LvPnBV55aNUhSCaFUGvZp875v79qnLFaZCuNtmxT2Atrckkaznu1XAsSzCtHvzEZgQ4wKp2XEJsRc5YNchabdPa",
  "key10": "5ZTdMLyNtdhE2rV4BDvNoYPrjT6mtcp2FnWi5pqpgG1ro2kpizVuaEhw79dXJ2gjN1R1i58R27tsd9eBhNS2Ya8k",
  "key11": "29pFF6VgdrZmoBfGhQA2bKXyxg88PksDgYSY2Lr6pFvZWqUf4z64PsUz58amDqbEDFkQfSHgDE5z7sYW58B5Bqdk",
  "key12": "5Qcdnaqg48hZrfDCR4As3hidNFW8aJQiCuKQrd2QJxHgFG1DEim79w3aJ99NbV2bdWxH5KkynzUKTQuD8g4JLuEf",
  "key13": "4H7qpJdvb7vnnad4H6hTNuSizDtE75b1zrByjgQXSEPRc1dZGG6fdi3YcdwJdcGuHikkq5t36mvEDxNvAxYeQm9N",
  "key14": "3X7Kndfrq5hqN2peJUF3u7Uvvjxg7kqsSy56Z2Q1GB4uMtaJnZgumqgqrgPH5m5MEWvGCsEqdBdAfUTqWUw8pmbj",
  "key15": "3u7cwZ53s33FQHEMhDx9FLTdzi1MEE89fH7PFVEMfnUyaXVtm4vCuxCZRqYvKnXK5EyPrD4TZZe9S6dbLfzjCCh3",
  "key16": "57dqskFiCecP1z5YVPvuSfskPj9gom1rG3CjiX8fNkX3RbgcftvUvmnUs6HvQEYVQ553wepuzxE2dBTDMWgr2beL",
  "key17": "AE3NzupH9goANzbyh4hVKSx1jeLUhjU4DwVyxomAMmSJp48vcwLSRh9vraGU61LCN87Rvcq85UE6RCgMrSUKevo",
  "key18": "5drxzEF2p4aKQnzZqS3RHZHxtNDXsvquVvFE5LfNShieUHtEBQ1xDSy8mehFvcpKGLdbcskbTuAfA2Uv16iViWdz",
  "key19": "3qRytcBdvjGy6n1jGaagkTXb7RstdT8K3y5cPD4CtCCCLMDVXufTpghxjJdLAVqMjcTv9RMqpYNz158JfuDsj2Qt",
  "key20": "3eX7WJNT7MAgTQBQhn8kMCFYkNENBtEQTUM72Hdp4MzdWCSzi1aX4j1n13G5xHkNMbkVjsCveT6HZmEBRGvdSA2C",
  "key21": "4PMfYJD41Gmc3B3Gqd6LtydxYhMYpdvNUfDL8zgDTooXa8reBQip3RRjsP6mqtXoZsuPZaCAizxAzh6BBZDznfQS",
  "key22": "22mHJ6v9iCtXBfPRa3aCFnnwAf6i2LxKj6g9AookKgw9swXXX7LXCRgQBtESDZ6dH3hP9eqVzynA3rQT89WXu854",
  "key23": "5wvoTz96NErhZtoh2LcnbpS9atMtfJf3wzjRP28dAU67NyyvMr7CSSV34wdNnfWf43kbFzFYPXZ65UrKFdH6Xdye",
  "key24": "36xs47rjf38xwumk3QtxVcf3PpNmHhNi3fjGPdTDCjU2YjP4uRXVAKYbwQSUT4rU7N8gs7aj3wnnn5bgPJE3E78U",
  "key25": "2KjH72ArTdRopr61monFLQz7qwR619g7w7rbE8zpUvJVc5Z7m4Lus7RKLHuya352dhYoMo4Z6GdmLHirL9PR4muH",
  "key26": "2QKTMVTHZLSPjCifdMNBh6dvuYPrhWyfrvCjS8Z7ifzf3ZtVixGvUSGdHTnNoe5XbSHeBW7HMvXDadNTCgoeW9S9",
  "key27": "3zrkvRoQeWY1PFnNjEn7UVzGaRgzKv59veRLJgfWikRmbY6v1CAbVG3BXFDTrksAB6p5yXNe8ZJiZABHz9QAPxUu",
  "key28": "3j6VFhQkMhfTExzmn6YWhUgJ3vWqZ2t76GSZDoMHnjf1p9TYcQhUCkW82zF3kYuN9Ft86j7gHAd6XpMFs1taRren",
  "key29": "2Qsmi3uMwLvzPVPRhAiKdPtSprqu2vN7Te6qF4FyezgQjuFcadaExr6J7dPtRC7VfkHeSW31vwZFM6a6973Wb1uB",
  "key30": "2N94GmibzzfpnVnqS2paAo6mUy6XZ6CLJJkTj89DfK9tNsWLeBRAjJUDf7hB7NYSXZg7W43tYjGJ4TGFMrCUu8mo",
  "key31": "3qQZoetLaCNvRRgTgkETTigRgPvYSjcjTnMBhEY8FA4YwRgNV5JebudGjxx2e9oHBcyeWZAZdVxoyUcrpZRyQzYU",
  "key32": "5GcEUquK85U6WhJbfaKhZVDPmLkfyyC71fjiAVtg79iUSdx4wZDgJezrjJrtTquW1oFzNPZVLgnzSUbkw3PXZMyL",
  "key33": "2eHYJ2s4ZJ9fTPA1E2UgDJ59PEZ4HRJeUCMyntmVSuygiCUEVPGGLPwCHMwiGSknsR19QNJ8TVKH1vfkWD5Zetv7",
  "key34": "3ZdQniuhwJFbaDEitbVKcmeWJdoY2Ci57ab3PoTZqkwnfx9eJaUW8L4UMJ4i7Nwr9Au7TRZ8z16DvqbMmH8P5pC1",
  "key35": "3BQGX8NHDktpzCDBRKaMH1fqd9f4ck4aLaykqwNWgswKxHTnPW1LenyKEUgVzo7ZLDC9ePKrBvsj2KCjzCWzvDyz",
  "key36": "5UsMv2hHUrsuLZaqQ3z3bCETKETUcDTPEuGSCTvd11MYVqeT5zagVNA97eP1EaoY7esecEnywCvfFL4kw4q8S5bn",
  "key37": "EjirbmBXa7WzcyajkzpqVnSvwthCfSyHjBPoXoXLQ2wK5WVbyXVZ8DGJSKG3veYtsntpDAWanTngmgZ1KmFYVMd",
  "key38": "3D5LzqhxJSjXYFKMHSRjiuCoemZCZPuJ2BR3gpTvUozBXWXaEM1qtohyoguPQoa2VX5w13FNQJGV9jNFsABSEBCe",
  "key39": "3WtkEjSyQ64Xb8BipMLQCeNDPxk1i79BdYzy6CQxFYW161p5kzyqcbXDJp2V1Bd7shRtgZL8VS1sVkqrDco1Wjqs",
  "key40": "2LH6czSVDXpHQhmvBr3fKTmCu92tw4ncYxpY7Pdzd1P6TokkCSM2YaespWT3YYzeWkDSjdpboJTHy8nsa9BkH1fh",
  "key41": "386XaowXiDpp48jF1uCUk3eSo4P13LLNcT41poVaRMgkvTdPr6m5H2RSWEAR5ro5LGWFuRKhaK2QGBDQXXcBV3EL",
  "key42": "3wgQMEpfP591rfM8nktw52LfjudxyyLmXYBAtocRriEJdoZZCd5BAKeCavZE7XR6cBLeMEEgPmH9bB5uv8tKeoo6"
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
