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
    "2DrEfrqkKstLUc45ciNeCjuDuZcULQo5NKudEMSK22KVNVDLoGDtMxd4oNCsVNTEuy5Jo9CfFkzSVKsKSHhg4tiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S1hz67dsciLe76HoJENefyd1L8ubgHTSo7YsjwxQU7dxZ81AzcQ9MpNEYLa7wEuZENFPvh7Csz4B9KpWd4q5UMT",
  "key1": "3UoY6WAVBZ4fNr4GVPV5RhYJAZpoAwtudQqmnk7Tz6VZe2yid876dda11PsrXeHuGkaYCG7Q5tLWiBguZFod5SPc",
  "key2": "5vsD3KhHBwajdTXbBrTvKg4zHgYLriropMEwU4GoGDpLnNoF7XfMBenrE7eAdBDJpPCZneSrHNVxa19HCogh4LTy",
  "key3": "5vH9rPXCjGrA4D4iDEqwibeLKAFhpbCMzYicsz8NwPnjpk58zKdsMYLyzMjRgoED22pRD4iGVnho4f5LBDWe6TZD",
  "key4": "5PT4eks8PancwACcf73Z8issh9sgU9r2VKb86r4H53hQ46VUvUVGjATfHGaBotHUaxqd2Tcwqx35Grb2xYBjNgLb",
  "key5": "5mkpbUQKi8G9JXpSRYkYm3E9RiJpeF58e9MabbViZ8e5AGMN3DbvGYVBxnGEofASWaj2nRqyYLQf7BetTuQaEGHi",
  "key6": "64hmezs6c9zTrDW97ithKc6GwyKTjAVB99eev9vvQFpRFj5JmhzkzLoZcU9WbCWoB5ZUZS3fBL3RJNmwQ1zsFSUd",
  "key7": "3CSiPuBFrkLEEBqjTBi5TTCU9VPyi5cWV11C2qvJXKEeurEpQXRVyTHRGYPBCsNoj8PXBhYfyZ2yska5WWPxebE6",
  "key8": "JUJH2bhYd2Em1zb7xP1eEYhq5RRhwfw6pX8dCegGAcepyZVctrgbYHiRUPLAhLSHaHREkXzKPCgxNRwB6jMFfxE",
  "key9": "345apD7RcaesocrabKL8DsYamixpVmu9H5NPc6xkY8iQR1CPpx6ENUaiP5xbnAzdykECwtJe4Sg8XdEKU1xe3yRf",
  "key10": "uWKTSCqUcyTioHNEnz7tmKcQWDKnFBybfhgFdnKX32T4we9qVgcGAa9WEWhxQ3NNKDAe5XSUvtQEWM1tGtoXW4T",
  "key11": "2KvL8x2DGhaPe6Rr71axQkExPnRaAprkYzEMyz2jK35VFKuGPNd1Si259yDDkehbQ92bJ2kKnekpVq43z3VXKzic",
  "key12": "4gdcUxmu9Lu2XpmBDfXVCMR4JmCenmJBVmmqBtE5Ca131WcoUkSA5WYD7JH1cQ5sdV4AL9ogvTRFpwRsM2A1ZAEi",
  "key13": "2EuYT4jtLzwa1EnDUSY8cjaFF3V6hAAszzzT8KRP26gAE5pE32ZPuE15k9e7vVsJAaGjnXhftNUQPQCMEDVDzr2u",
  "key14": "4QhMxeia1LqFwsRaGM7hXHD1Gzr9kYufZHBCA8WGTmo3Fcnf65RRKNn6jSpUuVstWUfhrnHPkGe99PWgoCmz4Gek",
  "key15": "xfGJ9MSXu763ZxFg3HXdPMzCTSBP7ZriPjkA57SEFRoYrbAYDaPBQTGj5yhfotWggx5894hLXLmPxmemirW5ouX",
  "key16": "16Qe9mS1NTXwbVtRCkS8a7y1KmSwPjDoU5R5BLqHQfQr3VY1VB4zjiLdyR3BR4JCZJixydJjp5D9ntANiYYGb7w",
  "key17": "3jdfhAYNyWLXFPKb4a9TbRAa2JchXtvXukjNqRSU1fpvaZTUBQXkVnbMtm3nUSFA5M8peJn9fVeVoijSmCr6rhUY",
  "key18": "612CBxwFxvZy2f9EdVGUCExHLX7Bz4Rt24tr5bVJmV9332kSUw5AYm6zLT5L3q6kvsyETwzPDJDaPEVeod58bLqW",
  "key19": "42HMTqyUgcskr5eGbxhDiBoVbGUVBMZeoPXLqE9w6e9wynLGRwyKxbM51Es2DtnVoSxKqzpSHFi4TaQcx2TzEJdG",
  "key20": "2zKsZ7qNpJtu5WSYXt9vTN48a15PwyEpfUT5BFYoymbUMaztG42FcPjykE3FiaHa9PKtw4UdmhDvsu5CNbY4wGx1",
  "key21": "4BngVJUMXUC76osd2ih2VcMfanf5QVeJE2bSKwLLcAWFaQwUDzqdzVA4ByTK43xcGf4m38JxFhwDxU7w8q3CPDym",
  "key22": "3gSsUEL46XXekq7wqRi2gAvrhhKuRbCkaCUT8GdSsKHtMsCRJBhSB5gUz7aE3jAhN42Bs61o5iQsJxnQwBZFxjy9",
  "key23": "V2cnUewMAnKsZaNWr6eAD3wRKgx6X2SAPuBbgYcj47nYu4Ae2aC3MGMC1UWx4GKsbNzkw6FaJsLeomFqZZXJmV5",
  "key24": "2gKpYouBJVJbqTDVzMEADEVCmCSNAPck8hda5ChLaHAokfHbN12UgzosfyKTptVS1rnZ2FeZBvrtUrFnmJF7xu1M",
  "key25": "3V7mBriT1Axoa4AvsynCSQygPKPYJQ2LWKDYwoPs6qVDBdhL9NjP2JdFnMPx59X1qMdVYiu1UoYsBDzPjbtUS2UX",
  "key26": "28AJp2GVZPKZipE3rxpo6BPCCSXxdzvyGAG9yZ9iWGPsC2EAvC5fjjkaqxs1BSj1hfSQjfJZoBpAaUHTb9B1Es7S",
  "key27": "5HLZvWhCeHk5tXoBufd3bTVcVXaGM2syaWUdQrdqx4mc2Y2kAUDFkB5gNDE5hbQcabvEPtbRFCaLHqego5aR4v4u",
  "key28": "2MFixqLApMmrFidYCL1fD1rYhruJskwbMtBgRn2onCa3PLXxNA4LNPE8PR19udmgSt5ETV3bd1BoLCNoj18Y8dym",
  "key29": "5mSY5JuvNiYhNcPBqXqLn4aenXVFL26aAroi9UaiAij2gkN3ohQZ1Zqt8jaW4gycLSvSpjNvJw2H98MnHzLsxwaJ",
  "key30": "4QKWr4VZHCfR3xaCSLiRWeNyZEZ3EosM2JdymM1S9yByuuTxs77pr86wAvTRYMhgVfGokPzFTCoVizZEDr3C7kUh",
  "key31": "57nbaUnA8A4HDMb6At8hbrCwBUn4zhNMwdXAhddmgP8NnqoEx6wxKKCygPRBpz7FMjBLxKZCpPSbJbu9zBAvrbZU",
  "key32": "5pg3mn1xpo6S4ASW2qJgFwDGMNf4YSSDiJU2kCaUuN6evBWFGDKsn6bG77XNzx2gG6mzwfFvSUMktzFyHUrt6pec",
  "key33": "2xYdTPagdQMNczdHELoXmtPU3vS7WavB4WPR22HqNFSdeGWdkYpjopSDw8D4Bws1ojMLKRcnDPbiC13satS5Fwa1"
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
