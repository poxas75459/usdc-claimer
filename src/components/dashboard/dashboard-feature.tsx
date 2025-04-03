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
    "5Y2RLvNAWN6rQ7CtK9SUcKVmS6MEvTgqfz71EVthes6soCdyvi1iJfwMck6JHB6EpQgQrUKCHs6ow2xP8gXTErke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8kBVtiWvx8xt6XnZXHesAqm3bd69KW6Hb4psvHnzPczfYxNbfsxGntKUfevB5Sp4Yf3WZv72RBHH1Xc2sbQLa15",
  "key1": "5qk2H8gnhyfGe9nqoEsDmpjAbPdvSQcYMGtxL1VcHh6aPRue5npNBctAKPTrj5ivpnWXJmpD6jgJY81G14aSP618",
  "key2": "DnmL43zB6w6X9MnVJGwGNhHuPAT6xfpLapXxWbnKedZUCNdVYRssQmFNJzEvvY4PbxTRABh4qEbxCWzfs3BAGqH",
  "key3": "jEVEE6T9cBN7FyJ5iYSpwqbQp7nnVwPQCTyZEMMMEhSfdpUWFyopWR2SaFUEfMUiuMPzCycY6kzrqQqRCbgQUiE",
  "key4": "2fKGqi8TpzHs5umnf4EFmFi1hRB4MmfdQD52713p1EtDpBcTniTRqf4Q62Aec4awQsUCnGryhYmrxnRdsxPfWsMy",
  "key5": "5aGWpakW9zn7fWLGthu3pZ21dwN1gmtANEZtB3uQi7PWrPm1CzQ6tBTyQEhTSLNEDH4AWzkXLeSmTLApRbNXkgwn",
  "key6": "4PGYFd1r6yoR1jHLA5zPLA8upn5mx2oqL9kywTiyYX5hBa4r7D9oYctBhasqqHBN7Kix4MhWLQieHUjvdmy7jMRJ",
  "key7": "59ZyY9Kv7So4voGVnsWX9yQFbJXtckHifEJcbcBYKPDaF7pgc8CLVDtUXEfk3apCeew6wiJPpcrLw7HCmr2aY6ay",
  "key8": "5sp97Fv4jfe8LkgtvD9LEMjBkM77m7Sf2aYdVjJvvbKLkkhKotbi3D6gXsUsaXFS5doyBAnTS4xRN9SRjAMhRuGp",
  "key9": "4AyrDyFcCYCbcPLdmPsRWN4G5grz9UeVjShwckE5i1nSxtqNht4w6uDvaGhDXDwXiVv6sUfruBSzkEZqf5vXDKog",
  "key10": "3fGMxu5Zzdz5u9VgQM9qf3ksp5ToMLRkbj5tYvNKVf7Pi73xFwqDuQc1YBPWkDPWy6tPVszf67s2sJA1SWjQmrZq",
  "key11": "2wiRrYK75fuU3f53Mk1J9nCjJmAEcupw5RLLRbY2Dz5zM1L9h1uxRyMWrT1fvS6uStYYCdSmZDcPTjfEaxV8EAqC",
  "key12": "2NpTD4tCaPei6WjB4RXsCbdmps6w4bWbVYbaRhWrhCjNnXk1geoov8F2b9CFPXkLZyhBeQn3yM8kotBMiktdJFkQ",
  "key13": "CzyLPjto14pUiPkoq4Ye6bo9QNjHfZyGE7zT8s7dEjqER259wrjtQiHDkhn7H4EBz2dGbJSqGb7gSENRD4zAvfk",
  "key14": "bbg1Jks2KvWtvxUqDrj8d1hGyh6DBV31yJmPcBjZs6FdbSg5s3mJM5zzvyLMUvkSPuuv8Yu9kLw2aLwUmGVskgf",
  "key15": "25Di9XMtJQmHa3owX1geAB3ZopWjQuvQFgNSCQd8UUA53m78GwAXtUPEWcFMePPNQzs45ZvD1TyAGdXUqjdDNgHF",
  "key16": "51s4wjzbff86ZapY6bbehvJkSff9sBrNWCyHsJXKG89VTxFgHrnaSodabYXdECK38QLbbWKDVgRP3fVKpvXcEwFP",
  "key17": "V77KKvZSWJMwnbyBKdnhxkgHp9S2tcinWporABJC3iUUzJCDE5PupnxYrC4oVgewELRhJAxQ3UHdzaGpdGmYfdr",
  "key18": "5ZiKuYRiVijsGAhRtpEeBrCvwPoiYZcPhShTstoVPB8AEnMsUwR6EQirYQtqnjP2PZe88J9QAiAEhp6QADGUWFhc",
  "key19": "4mxAY9vEpTUGohauVyHNZ7aQDsR5aSxPAZxtZDs14wGEgFpMQwgZChakiQj7KvfiCB8w857QweEd8CtZ7hxfknSE",
  "key20": "icqSWrEVsrEuSxQVD4wkp5ZEGEyoqAAWTTNrasP71sDtqn1iAjwT8CYG2AFg4cwrK1zYNzeSDEdkTdKUgMjutc3",
  "key21": "5x62v1Rf927hVd6xox3rgVfifdoNCVFKkGxt6pZhqKFKgE28GehFLyvAiGsXDqJ7UWhv5Zb1yvmfFG4QknRj9GSb",
  "key22": "Hk9gHM4zBrTvE7NriGpRQQ9tzWEXFAYCdk4VHTjuPj5terfyab141Uf8x9ncQcyR2163dW8PYNwnjNMnRaXUGrZ",
  "key23": "5jmz6a1A8MDe1pcnz28VVJNdVumSgr8jw7jkFAXzzT8faWuYdqKdKtvCwtiwwkng8CzqTEneV2M3FvMEqyjZ8nio",
  "key24": "41i5o1Uif4v5mouFrGh7mqRp1ZA1oB5aG7CXd7zAZR8DyWyeDfKoxjXsycE7nnSgsRf6X4vBq881fnpa2dT6Gzbr",
  "key25": "4imVCy3n991ECHEV9D3usJSMwsiYfVLzPCDdsdoN6LgnEQt8ns5LQB5FjPQSbi9fqM4gPUY28QM4Wo5yRNfLAwnw",
  "key26": "2xwoLwre7cDT7MGLFig1GDcsRm79GcNDdX1YeV6bRzGiNsKg52HCm61QH6HbpiTesDur3kkjd5USpmX4im3WgQyd",
  "key27": "s1r6jL1cD8hpqSYbyLLVV4jEgG4CdJARtGYVG9FHeeJnnygmjsKSRmVZsXV9ZPGq2rimGu7EeMmuQCuhfL1KswU",
  "key28": "4dVmvqB5WtkD8WjDvt5QPPWAYLvhAbmeGZtcAMHJwCaujyzzadjFfKni561SHRi5Q2CopjRUrn3wu8wGu2hKBp63",
  "key29": "3ExgDRkWA8qSwuXGYeAxzWkHfDDaqdnmz5Dw7Z7iPi9jc5SrigN9y9f7G4JvNPViJUPVGJ4o1WRJJZ9S7i5tSjBb",
  "key30": "2haqa6BDJfac1Sg4VNtWdmYjR3iKXveBdPFtrtok6FixfNNWWXNLQij3iSNmWxzoR4LooVHHNDNTYxarZT5DML1U"
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
