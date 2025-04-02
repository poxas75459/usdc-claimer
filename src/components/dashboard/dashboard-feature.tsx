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
    "3M1n2DAJikjmRgqL3ipTtzEbVte9sZ4ryktWxatNZtuPEVXbc4iPKQxMctGscLXSNKTyKALeTjECTkVJS8zxFjYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "252EFdjdio4YkTxY6J3iXjuyYAyH5kSSPxQzcKx8xDXBy15x4UGpm1AY4JRD9GSoYijPubjGWH8SffpzLARQtAKs",
  "key1": "2om5XLXo7xPxG58EUkys7DiUBnVz8RniU92M5iCLcaL13ZQ9VAPeQv6dNt2MmMWRfWtXKBqztcLsrieV6h3koKjP",
  "key2": "12eaGxTQgHCDMGA7EVZDyycveurgmspXtGaFx9JeFQX7Fb9YHAoLiG2vQQVd7uKVwvfxwigjPPX6a9aMvBBFLve",
  "key3": "2brvmv4uLYFgHpZTAwkjqbQoD34h8Jtipa4vMDCgMBT4WGBZGJBgErTFcZApbfAuGPcs4rHrQcLv32FGarJtbQ7K",
  "key4": "5rmp6x334Q5zdMKCRa3sGdLLPGrZ8pYXWRAVuF1iaxFowxZMHaaw1nzpgke7MtQtiKEeYTuGW97zaowt3s55VWNe",
  "key5": "3KJmDV9VGNtj2zDsNv8fg8UNFZ72DDEuVfKpR5YDB5fvmwtfy4MAYkg4aKVhX19WRoeoMXju1ArDGQYZkeKQ2AE3",
  "key6": "umKeuqYCZBE7k1dgLr8KA1VbyQsmPvv9hzTBxeBrJCb9e275njSfboT3rCmD7SrDwXsgBkjZjPUbna7XpVCmQX6",
  "key7": "51K8AyXZp4F6eziimhbRPh9tAShh8tpKmMhj7gSTp2hcjG9MJEuvt4GnpuFHmCH3ZQkdG5PvAYzTpPU2CQxDYoay",
  "key8": "2Ha5iusJKzyPk732hCEabS5E23J72q3SUhj1hS6AeVDQNHjhvkd2E28eUiM2druF1QRTqvBHx2fkh9CpW8PfMU1q",
  "key9": "4YWNRdExKKyjpzNiC4XMM8nS7D6ZnNZ66FvoLe1CiSJkisHdMgy2QorQCAi5X75syrjuedRNtmmSBYEhnUAAxCvb",
  "key10": "3EJZzm2ByytEdXSHeZGQfAdUcQTrd64GEZMKz2NmaQHT4CJDULdtAdzaK8wZBggjYgFfby32DJo7qUiNAZ4Hzmaz",
  "key11": "4if6WESeWhvbrZBSTi6Wsdp954c9xHXpowSREDVxRkKWeefGrtfHvJvEdjw46GNYjda5kULtWKBtZvApTYXacz8E",
  "key12": "2PtfkQZEECeNBxrwZxo8Cuy9cBPov5CuEN6YVNNtwp5uyqDDiT7YusbQUQJLzrfrhGW4PS3RRnSUYR6yDC99t5gP",
  "key13": "BQkkNM2YHgmw4GkF1VbsVQRL2aZnVc7yWjCsBY5hUrPcDhhYzu5jUVL3w67H7RbeBnGyafWVuQdDLtWj4XUZXWD",
  "key14": "bfVBgTZ4qgLfdSJyZwYCNqikFraYHHfK6GgTZCSoNYQtd2tNjR7ToRQGdt3biggzEeYF5koeQAdq26man4W7xKQ",
  "key15": "3rGmLVq8Di3j4VSEcr7RPfG3rSaopyPLytVFtsBChszWWviRbxofsDVcqMXGdLY99BdicM89mFyGXa93EZ9o6Mgv",
  "key16": "26LFQSLEQf7yyX1cpqhSoQAjJUbKVrEGoBnemhMcqbm1NQgzE7pmcwY3e1RRGZjYoWcv2AUWZixDhe7zLSPNpXiC",
  "key17": "KDRfe4yCsdWZtJYvHLNhpQ44wcJu4smmE1NQDVgmFsPyPNnPxeRfpnjrVscQMQkxpfdLipq8DWK8cC1xcmm5THd",
  "key18": "5RaM2UuMUjaTpZgEskMroaaz1TibJQ5yPp3uidrAj6DFuC15sqM9GdThttcS2ki1ZUoqK1Wuaejn9qrBqhytb8V7",
  "key19": "3vndrfyCzzaRT22VPNY3fGJqC5jegJeANqMhuwj4pTE5pVC5urT26uLo9wjr8C2apM4UmL3WqAoLRQb68NCTJGfE",
  "key20": "59ms7yHbSWMWsksEDgPpqFR6CJ6hULjDSw7gmGavzUyHgqGX9RDYBM5WXaUDQJuLyF1vdrBeu7oUQ5b4AnTmBQwR",
  "key21": "2AhQhMF66L12CDqFV6DoQPEB32BeebZAKR4cvVr7tHBgca4D4gzDPkbE26ZWc7zQCLEKMRN2MyG5eecDFyp59TM2",
  "key22": "3tqsRkNNCPiAV2JxA8APF5mGRQBLSLn8rANenuLnTdRZawHyAm8Z7ChoHmHb6vNywwuaeeqzUgWP62KhiBxLkAKt",
  "key23": "4bq8WqvFNJq42k7weDCA7MoYdWi9iAMcXttGiVZBZsCFRGqfCPbRGqPPxQ7cEAvXkJvEgNFC3pYg21HCnPX2XX2D",
  "key24": "2nTW9vCJ7AmdNvjaA2wz11stYXqqgtdwTxedFJnVTW2E2B1FRhVzmEcXdi8xue8Lzj6th3dh8yVXhTfTzrQfDxnS",
  "key25": "32fzfRs9doTsiFS7BwDfDDZkPMqdKD7GiFPobF95ZAs2QEnZreTpuRSUiZKkZ6NWufT9nYQQo8MgKV15DJ8bdBjR",
  "key26": "2cwAtf9eEtTttvsDJxv8v7G1YubqetRZWC3qibL7jeWjw8hCJkCmB12r6rq7d6KCM7TKf8QdW3itjUSxf6RLYXi2",
  "key27": "f3HKcGqtQBg2FFNFyU9jgqX7oZzHvaChSj1g84vm3BtytPouXczMnvkP4RjhZh5KaeCYhv8ASN56QpSY465mfJT",
  "key28": "5ts4MQLybxs2UdGetq9XCxypcFmZa422dLRHapogLbdDTPB8Wpib1JpSd6UW7k99qJSJJ7Dbeqw87t2agseAHj8x",
  "key29": "2pPiCUNQxpHQBUYSzv4jWXgThaGZL33yETK4VFCDFybLbgVD2P5wX4zGTkadvMMd3gLPrd14ECZrNszbFEES6GGz",
  "key30": "3w3v2VLTZtUpLgM4JbHGa91ueqP9NyNsNavDa3au7aybB6H8tbR8FoVEZJ1zLpvqY6jKG2Yb3fwg3QXXV36Z4Nfb",
  "key31": "3CqbMHPZuDVgnGYXivoogrkQuqMcYy2KFuYZpsv9auGFZaFAenXKBpTdQ4tNZbf8n4RotfAmG1xXmXnTVnTBsnrC",
  "key32": "3B8aeWSsq5fAkMd5pvLreeBBQnFKv4xCGYs7MG3CrA5UwpG8ApgFH8KKn4SgS5bSn2EirnGxcstB6jxQqaFYaFi2",
  "key33": "5tH3X3Z8RWBQkFj6f2m2H4xDhKczmE619RDGbdVd24db8CC5Cdw8aiko8kG1Wwk65ttPdL1WozGzZkG28cPvG48M",
  "key34": "5Gpck6pPi9fkEsJd3hBHvxr2URZcN1yQxEkC2ARjXXFbB6jZordsW1ukrZbWzxNEw2jBuaLdBsDnEN3SBwLXxRuu",
  "key35": "7jn78g4H5BuspLKigqCYL4FF8ZjxjRrCdMYKCShMg58Uy274bEACnwMU5bqBwftdk2MSoEPB1a6y5iV4u4JbkFW",
  "key36": "5Gu7v68rq6eyD5EyPXAD8k2HkpbDhifXkF57nARyMRjzxMwBQLt8CbB3N6UarAauBE8XJ83uugVP1c9EWiCeeRva",
  "key37": "5Ed7S2qAbEbekak2SRUEdJWsXvWBpAY97x5xMBLHnhzicnyWUhwKLcJWLrdvSjqyZTJoduxqnqu4sXUWmhgmuFTU",
  "key38": "Xyocx7ZsatJyJg3YKPoeeC6uDQAqupmzYCfPkFhk5V5ECu9sAbGT6Ye2YPLnNkxvXghbZ9AWGgBD7CnSDrSCQ6N",
  "key39": "6xSxaayDPSyNzbQn8dJ2ieZTBUgLLoxH3h3aG3DRDcEqHSXZYF2EZsn6bqJ7LAtu6ufjpJ48agJpUPQEoWwT2qk",
  "key40": "33BskEofwyCpHd76dJLLqpE6HgRYDxwbRERE8NAje4ryKsfDYsLXWuWk1QgA5L1ep3jTKTetKFiTh1thD56biVFc",
  "key41": "2b5BrEQS4vwUg2TertGnPp1HbneG9g1aziHwyfQmhMvrKLnUomRVqzopNn2GjLWyqiLzW4pxgVY79jrpSSjqcRmb",
  "key42": "mDjdnMPWtfX4AHsZ82StnTa2NRadF2HNMPgqH6QiKTLdHRWMuY76jstEyGQ1VkDPVp5jD7HGYXyfDjP6My7YuAN",
  "key43": "2VW8t12yQofDLm6RTiXqmPR7x1WoouK4xoDwR1bxhpK27bEBhWQBY6QSAsW5xsNL2Y8csMD41NAfWJPRJoFNEpgr",
  "key44": "23KcAhH2q2NLT8dvUxBBTbWF9qR72obzPQid2KeHfWMfhACcNKCqG6Rq56h9VdYwxSK6jUEZXePhaVsHoYGL9M4G",
  "key45": "3CWJeYwroeeHzPcyREqjRFTYJ25TnH4sa7QJScjpSTDDgyrjBvp64ZksSkwTY8fkT33AfbuqP48zp7LhU6qFCngB"
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
