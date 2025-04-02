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
    "29bA3PyDDirSdEUduVheGyMYBFffgzvkmi4UHw5KCNZehsLd4UFRoW7ZiAdYbS5rbN3qa1UDZ8rADEwjHkxwV33d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2txmadzv5vBbJLS22XrxMRtG3HNwtBkrhqQC6JUz4Zd6JdePCXid8rmRvvvhvYMCrPLFdM8vy2fSi7suBQmXdgLN",
  "key1": "3tbQidE3xpnwTTgQfcvxigKbBbmaWRsbiMRs2uZMGBbYPiH2aF5Sxrcsy9D78Rs4PUEfaNN6boub1duDRb3xE2Kc",
  "key2": "4nmoq87hho4E4Ro79WBWrhskdto7zdJ5tZPnuu2B5mfpRZxSTJz6bZJch6eWCoDBJ6suwoCoiJNBE5fALYmiUECG",
  "key3": "4Jtpiv4otfZMxNjERXZQYh6RvL8Hh3H4siWSEyBxLgufCjrUtwaCh4SgCrk3vHprPMjQnMz8yNJkCtXWkXcsRvGv",
  "key4": "bKWAPYUQ1bDJXggLvihuEBbjayAVpyY1Yai1DMuLhRA2aw2ekAUNfHjqh3gAm9bB43p5X9MsD4LqNWFU5Ytgt65",
  "key5": "mHMxPsDgAU1TfVfsP4pyXjet8KqfVRVPokBGDmBzrtasyNt5GLV7KyWdnLAUn9bsrLdgSMD83U9EmsA8Gs3TpKf",
  "key6": "5YpZtjeKMq8vL1rKqG7t9Y9EBReToN7hAeeuijNmoJwFs9W5JUeVG3kpnC9mV2oZdwWvyFP5RyG3MM9jp4C3BV9f",
  "key7": "2F7VuY2BZwBmhWFSzurqXmk4fXNPXx3QhmxXADv2fQKBdgfRfvCibyUWVUm9X47gkWXCVTjDWV9GKRcVyWdno5Ud",
  "key8": "2Jq8Z6J4FPP1LDsaUu7mnrr32GYDZ7AN7Fuo51aj62ji8gt86pDUxnXsLzdUBkqGiky2S8aX5rMJQgnngLF9bJk1",
  "key9": "5s1v6SBjKhTe67ZYHP47Ym8qJvUivcFRB6jjUEXB88CKKyswLPj18HoDgEpRmzQ1FWhRAFBWESBT675b91fHBNY",
  "key10": "3QmUxFHt9tt5FFqbf6dbVEGGFWqXvnN35AvEeoPeWUd772qvdPPjWGXaN8n4cwrxDhSQmEMoPgkqjCiiMVc8QZ6A",
  "key11": "2wSctTQsGUhhiVnsA3S4kqHpXSNVmp4UdJmMmtpqBw6LMk3JXSqmjER7qWKFoVjfQ78WNSnAiJXYzs4pwzB4YREu",
  "key12": "2ntxwZD6T2QA2yynGNGG9oNWU8nWfSZXjziwX1vRJeRYh8CnVE7zVeLLC571FCGhBegNZwM4G8wTekjRrd9gSbZh",
  "key13": "Y47shPL6f7yUd6y7mumEoFRBNxfuRtMWPoRMu8EVzTSzdh6RpoThamPnAk2uUDv2UiobnRqGzD152CEncmDv3gh",
  "key14": "2YuAQ3YdmWDki3NPpDHDW4RVbnXU552RYbYAPRkPDHVagWQYidZaB1hpdFCWTduAEeJPcn9Z3irQNdWFgux8seu6",
  "key15": "4TLeeLndfL462Boc66V148ZXHiyHw39dsPyHGRYUTiybo3rbkoCb1W61hRoLNrdfuEHBAKTYu61xGi1yMbw2aWvc",
  "key16": "3n3BMxn7SoNcaVGDKwHKe41nDiJFzbRTGTCPbSkfLzQAhhnuFvrhPyENhUARVV9Qp146pkbnNxreW1KEDj7PP8p5",
  "key17": "4gnM41xfcEDnj3ByMnqSe1iech685XLynE1nnDiktp3PA9ghigR6GveDfAK5Wbr86FQ2gwkMSa187ApPJub25Tz4",
  "key18": "29dKMbsG99rUdDtaacXJ8CuJt9vzdMnR1EU36h8CLBSfvDbrjYq5EujuFLCje2S2as6wby5gDrYj9QQa91pP4FbS",
  "key19": "61LykQtm9YYQEjQveauB1Zx2Ccs19hKkGUS3EXyukbZapcThfDBnLQWTeK5MG63DnCm9HfEgw5ff2wTxp8y3Yb37",
  "key20": "5tv75kL4SmDX3bSKzaQkbxcUhZqsQ49pmnXRWPeELQZGc9wT2bXvHvqHHSLA2SM1ESzenN1Gb5XML849ZDAUmg8A",
  "key21": "5XY64LFFcUWLHy8DzWZ6ovWXu9WJQzG1STn6mP7UFhX3hsRtSNm2ujvEHiEnvEpoAPFkNyXd1ugdLZs4FZrbrudS",
  "key22": "4mf4NuQDUKAUpvT9qhq5u2a46JpBbTm5tnu6cKHP45pPoHixbZtsxwjarMLN84CfA9D7vSZZRoYrDH3WRkWQE6PP",
  "key23": "5T6gXprUzw3Etb3krK5E98GG185gPEeNwg9p6re47PStqbhs5ZofpKf2ZWYMd8JXaqMpRCuNW6AZNX4Ps83Pihzb",
  "key24": "5CJZfPnSAnfd5p4xiTrT8VQk6j2UV5HhpxVuJgzk5YmZ9bzC2fcrabiRSwTkzGsj8Lo3cXp5iWoaz3KsnCXLvaNp",
  "key25": "4d3jWfiv9MMzk35iWkuvcSAa3JTJoar4kzQr7CyrCsU42BU6YJnr7UcWcsi6CoPJDAhV1hK1BNAWyc34eBXvCpYG",
  "key26": "3wWPMK7WCPKoT91bTGzdSh3hKdYhpEYdQ8NHoBZKJ8qsGE2BnMFMxKBNhFvx8pZ71dYpsT39UPSxje2eRRMGmrBN",
  "key27": "2y6Tn2jX4pj1Bzg6N2jPrwNkXN6cTEwYts4kFjsMjCeB1S2bQ5Kf2JoxL4iWpDMs3CiCJN4oJ7krvg7iYF56mJUo",
  "key28": "4x7DWEULRnDu85uKJYumjberXAe1rc5sbyzKDdpBqT1atnmyH6bHaZeWzEXCSGbwERoYXuR5Nmd6i2BALqVWSD7X",
  "key29": "3i5gzjubSHb4onKToiuDvZHhVtfp6JmijHxqr5kC5rBRDZ8bHhVH2uB4ZQrWzgAd4BbFBiN9Aj7zx5QKM1onRPah",
  "key30": "tCfqgvbxsqCHZddQZNytqH7KiFfcEPqqXGihGzaTzcPMDnbSsveFUqsB8We4mC1e3eXy6U9QQkofmJ36y79aH4L",
  "key31": "3ywQHXbMCeZ2ufmBA88EjuzF1z1uTGJbWvMoQQvGgLXSxF6hjnV55NLAgsF8Dee7rVQkbyYZSuA2UchXYsfUE79s",
  "key32": "259apbSwnJmDvQqonj9cBvQtZ42JN6oKXGKMEYKDPsWqewRYiMgPUZC6tifASAg17sDAcmc3SLaTWQi5Xv7qM8St",
  "key33": "ihYwy8UKaZzmeKVNq7Wo6rRbu16zVDWEer44MXiX25orMZfFxFMrYjGbDjhd6B3PDqV39sBuqYfrKHrv3RBKaEp",
  "key34": "47qqPm8JqfFxjWzov2TJwX5QEXuuEF78YUhjpiHfbVszkNzdRadkv4iQknJzVvUwH9gZ46zU5Z3wobVrkAsrPqYV",
  "key35": "3ZWSXwGnspC46GZnPo57Z28bwLDi4YYyU5NYRUNhDn2om8HXyteaZxLJwir6RbVWJdDjNQZiHX8wndjSk299yNbX",
  "key36": "BoaRznKHLwKjCa1K2cj8xG5G9fQhcqJHWpjqqvNSL5KkMasxbjkNaU9Sh4UdCsrwLJR7SoMoSpp6sSYnMH7GZRq",
  "key37": "4JiTDyheGyL8GtxSRC11sR9c2GvfqdMs8aZoJU2jdb3VzcCn7vfvcqNySw1cVSDDzpgfQpTHtNuK3KxnuZS5RbHe",
  "key38": "HPKxC5cbjjaUAoXjPxUQmYxSENZev6Wpk8mAb4afnJKMURkBrKo67juLpZR5m4MUqJ7rdZjum68WTLJZvtG6VH4",
  "key39": "3fEP8FsdCXqR133hWnXUvjXMTZiipJXMqNS1PTk4invM4Bn8ErUt2unrcPVVCLj3PKwEcNZzk8YEhQCucCjFzKuU",
  "key40": "3k3DqXAavJyPPM5MWW37sZXHGYKnu9UCwkGQsTAU9VgcTnwwrFZGB6sBvjJ2WMUtAwL7VRhbFPW2UWvCx7PwwyFs",
  "key41": "JLfdXhbPA9kvRcoCLZNokzTR7sSk5ENiZz3wYi3H2pLV9zD86G64JHr91oiLwbsahicQpCbbebicSMqi7idZvCs",
  "key42": "5P29EiYShcepVTHCJ8FN2EtXKhULAFabnM9NKfRH7WUCGq3xjfUvrUyZupYdodumMZqPjLAH7sxzFJxC5M7zyFLZ",
  "key43": "3DVHQVa6kUSE3oNjaRcVqpbRWRgg3dh76FeAx4rE6Cz1z6iLZM1hoBcv8bUX2XcxyeLgFNbmUCHqP7CsS7LzVmCA",
  "key44": "4fzyZcwytDesF8Rn1LEtPAReJ8UoMSRTyjdMwcUuffvRm3MNJzWbbnk9pXwsMWEEfFEEEWY5GSN6ik8gt3RQZUpq",
  "key45": "5NEho6Aee33AR9SbNZBtdrfAA7HY1a1up8RTKaM9aBxYPiUAC45EQXsk2rRuGEtEzxsD1RBMC1K2WbhACgdUTVzU"
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
