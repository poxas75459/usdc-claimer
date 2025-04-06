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
    "4qqr5bYwXnmHWBkPZqWUVtfs9XLfiq1ZgSthms2NSi5z2oTS6vVgToBRMKib76soMUPjhzEfavqCRgF8x1wLBcgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YZhuxkQ2Y2BT5uUNKWBiyZzm1aA5eSACfdgh7KBEyNEigyn6pbbGimd2ysjgsgoe8gdJgVK2n7LU9sA9Gd7Zcin",
  "key1": "9vaCNc77m9Q8tUY6YtJrx9Qg67xvEnZyXKDacWMtRejuHHP85S7SDjbJK8QnMZtkG51veciDgTuC4tH6uKVr6H5",
  "key2": "4oW3wTNE9oxDmkQTB6yqnv5Gmo6VdQxm7nrrWpZzy1iFcKuCrKjSZLAdMbtWJXs4QtB1ypFYc9Y2Vor6QmsoUvfM",
  "key3": "5MoTGjiaGyBt1EYGRHHgFE7ipv3BnDTsHc5vac8ok8jbfkRcnTmFHzshM49vzknU5XYVfxCmvw1Vty69UKsbNt8E",
  "key4": "5abdA58zP5moWz6Hj2d2ofSgBUKpcGBfYRWjsjehcRxSoxbBTd6yrWcMxQrtMkjSMmy9c63J47sscfrHtazvEopN",
  "key5": "2SWUL6sFDaf7E8UCJz7gUrVu1v8G6ggMQRM8c3YB8A7p3DvgQBZSxEScgePkHbBSgGGYH8gDBFupcTuoKr3ZkqNm",
  "key6": "67bRTCJZ29j9L1JCuJB7XZxzPMqN53FKKadGUKEpbQukvoEjDvWZpxVZUCTNaRacabxqBS4rRT6NMnXVR2uLbszh",
  "key7": "2LTVQKJp9PuzzGbxkKkctHykfbgkhsV6mwFRnZDj233QweobbWL5x5SmytPboV2736acgYKC8L1aXP4XZd7o997N",
  "key8": "HQ9qPPj2Em7He9rrfpTomvw6hn8tc8ZCEZf84ptCB9mNvw6GATXummguttyF6yNKknux8rTz8bxdbpN16im5iiM",
  "key9": "4m3jHqvfZWBeVWondbuD2eF5uFhYmQ9jL723S95CdJhBFrRyF1HBNUyC2e4T8fWp8L9zg4p4jzfu83dVuJxwpKGy",
  "key10": "tCpBPWiP5oCWRNtqfNNag1NDjmWi8832UabUknrQKrfCkgEvfj3MB8K8ax5nfZfYgMdQHiWUU2Jbe8QhNRkd3Tt",
  "key11": "5QdvvreqA5PZjbap9u5EgXSD93sMKFswUcw4DSFFPsUuxrAJtscUq9Ppe3sbHsZkHdsGvGRgcQTa2LZ2oBh16crW",
  "key12": "3mmHAdaX6WpNH12Tabk2RYNEGBvnQjWRmdbcM2TygLooWfbwcHZLQqtcBRKohhfrV5PmEUA8fHEjF75XP9Sih62N",
  "key13": "5nXsmgjTdm9yad6v2mjmsgEURPaPY9ybY8qakUGxDV1K13VCYGw1mBRsrJe36L2uU4pS9e47GLrNJStheXmmAr2Q",
  "key14": "3Ei7VUV3CnLe5nEsqZH1kDeUjZ4aLoZBPLT7mWFHh12MFS9PaGN2ZQVWZdMJvSpYPaEzefNXbRWqcsBhtyTwiJrj",
  "key15": "3CPPA2EFtYPQNVzdqgLhcpVda5ABs7p1Fhi9gv1PoiAgYBZpUjQdLthWNMfqcGJ4vSixiCEmeokknXj9F4zkPmDK",
  "key16": "Jq7JtrYhANmk2EA9inZTzfeo5zQ4fXLBCPSPB5NjjB6Xuk4SgkJuhFjGpRVgm5Tu4iBPvftBcwtinDC8WNJ8KzZ",
  "key17": "2n9Xge6eSDgqE6nTxf7E9hMYe888zGsF5DXdaMp9PXfh2yzmshBmZUHM6pwfto7AHDmTYasfnmShaBjSKqkBhyGZ",
  "key18": "3y8Wrg6uNR3pqKQB4aUihKtPBNqNbqYPDP8DBu8xGxLVLFErUfGSoGurjJjkcBPcjnuVDrLw3Z9m6SM26k1n17Pi",
  "key19": "KFHBDTZUVegs9qsPLwBJrhyK87LcRHqJAGvykSouNP7s45tmVeF922HvWPjxGq9ExcGs8RQwqKtTfv7YbUiWPHZ",
  "key20": "311Hhnz9WPjgrXdXbF7kpe42JtkrAyrCUSFumt9M1KzqVoThtQ8pqgPE5N3xxeDKQeUGwMXrSeKWHZHBNLQy2ncm",
  "key21": "2jJFZW4N3b7sKdEoihbD5WHoYwRCAwBTT4qN9pmmrwywJ4mKJjptcBq5HK3eQ5mE8GQYcVXZZf8Jo5NcRHXWMGKG",
  "key22": "2YfQL2CPKCGbrx22cXUVUENLAb5km3qnuthedCBRNRHccb13sRfSKNqySenP6cS7twfTbWG9hCKuaNvZkUYJZTxj",
  "key23": "2MzipBvkJig9QUnm8D7kkuspRErpPuLDuLj6tjpHepJG6Yi2kvaqBDZ7nrLgYujixfufyftk58fi6fZ3ocvAUryY",
  "key24": "4HNZLLqjXxABh88g4RSQ9HJcWCCeSxb6SLRCBQdzBtZzAuyL8BD6c24KmeZCULhGrS8hZs5AEhNKGeJPf9VWB8Cr",
  "key25": "3eEkcJ8saWSFkS2nFHDmqTPWNFfw7XgejALuFKRs64Hjt1cpcv4XLrcnRcpLamnTyaQmV9eb33dqU9pGWQxQFm3u",
  "key26": "2nqHzKLha68mDgzGA7q9XtJVKRrRMHWPf6By3rCL28kBNAYnmsohCfrgvPuhfMXBS3EafovV5y4pYdHVN2U8R9Ag",
  "key27": "5iKffdscH41yTkqVvHNFFXXBxnGmWYbNg5cf9Pn86DJJQg6ifZeHpB8iuthjBE4EbRwGEy9o8oPxTJFb8yLeJTR",
  "key28": "3joCAAHhvDXQ86gHBbRRYKALSrQXRrQ84FWr25JWoypKtcSgkYxuWhNDXdJU9Ehfm6xrZN1hX4AWWhqDPmZArjvg",
  "key29": "4dds7Rj5iwKhgGRxVyS6BMBrgPKbDahiSpC6Znrs579oXfRcwELFh3BSMJN2iQmQnUKs4UQyP7bvpB7wPzae4tAZ",
  "key30": "2WGnyZWNhFQUpkCsCMAf7uQAD5aJY5XSPmrLwaCzH3e2JkVc1zkDLFvNgHsd1PZcvV7xkgjoKfUu7bBhyeBgUq8y",
  "key31": "5wRrNBbDdmZc43RkNFy279NUaXqZbb8XAqcxJRbRusxzmhwmbW1Lb4ANRBnzr3DcaFCQbXR25r3Ft2BSBffPcgvP",
  "key32": "3ryZvf7yv9E5GbS5r84rdUNCPxU6RFUtSqo3T4sjSiDfqJkLhnzDueb6A1m9B91svTCFqHQSv8w9LzWG9U5uLHZS",
  "key33": "3aedNUpTuXYuJt2oa3QGWiyxUgYYT8aGyYsMp7vTZ6D7N7KbZP9B7tH6PfsZQgKfkYzi8DLCTaFw2NmSNMnHFpUk",
  "key34": "BVwwKfMuM2ZffUQveqgTiFbGnKGwfLMDdChh7xEVck5gr6BFoHuEebJ88edVZFi4sCfpvRZFUiNqHpnZsP46rY5",
  "key35": "43ymDTZC4jiSpsfycQaM4JUx5iujwqJamxiby9ZV9KwCDwUQzLZUAMba63WJ44v5gcjr6Aada3EYuuK6st7pMTuf",
  "key36": "9gcyZvTU8fRETjYjL4o5A35Yx4rvq2LNUrMAhwZTSTBP1N9Ln7PU78y3p45ipsHHVRzEHxYCRXshaNaRRVjwGtn",
  "key37": "4J9BeJUTQgVy1toGWMiXJpu2rtwjq2kuya6zChGJGnrhXLnhGwzzok58eFocEiGC1XXSMevtXmV4oSu2edrc4C9k",
  "key38": "6612D873qd9Z4b6Vsh9ta2EJbC2aEUBnnU118wXRwip6gkQ8efXPHjEs9SS5Zz2EFr5dgwbfSndnuJJeDhVw32PY",
  "key39": "AaLzxhzr8WjuPWNnKTrWchhdjxWwypmCgt73dFMqiNj9eZqJdSqkZMVgvP7NeVA8QnBu6aUd8ro6U4BYS2fuUWT",
  "key40": "AXpA1Eoi88cQtM1xuvKWjHMaLu9Zji8NiCmwWdENqn3XWwRY4s4wGTETBCi78xYJpVFhrTpK1qe9ZrdNbD6ArZu",
  "key41": "39RqxrKXWuC8fBe3k46oj99sVsaHatnd27JD35pftEmg7m5UGaaUZnwB69j84nWJv6MhLgXQG4ggqZGatY7Ua6Xf",
  "key42": "45e5VEJJKfgHk9SbXv1ob6oqc1vTPC7s2kvrsBsUaahHiiasJTnAXThQ254eptmwZZ3wa99ZRj9RE2u9yVbfRtQ3",
  "key43": "3XXnhzefsD4K3dygEv6MomhJTivCEu5rQ8912xKKudwCwLoupYoE999rgdt6guBXwaTsd5uaSzKCzpVqCqfeLGER",
  "key44": "oy4LHALPMuZfkBCGsz3phqbZLKExbajwUzxhghxPPqYqhcRDkQPKicFrnHsasQGUqtCEMZeZZMWYT5TNhXRLVXk",
  "key45": "Qa6ePLDSnZZhwk1xJK71gQqJ3HZ1de1kAegMKqYZpMe7Mhie6nez9x2C3L7j7sVZeFhGjTTjsrtbuyu3mbGP8EK",
  "key46": "5JYKaT3kFjojEeHFzCFzCEKhXdxedT1AuAnP77M4dzJa3uuUNutbu3jrGZiB6SDJu1rgcALHg7AFaDwrHLh7Qj5h"
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
