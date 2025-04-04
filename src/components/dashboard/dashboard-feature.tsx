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
    "29r19xaruRXThhv24tn3gvr2n4Mm8wmEMGMEGLMEhpx7mzHN8Z43aFGXaknS9YWugr9C8iPzT3UUSqNNcMJA839Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22nXyz3hnff6yEKUCwRUR45Gtkx4SJaaSixLjDkcfRc2FUHMkkJEQcGjrno8FHGXpeDanw5ufJdMHBSUs1qbqpPA",
  "key1": "NymYbEuT6UKoeYUhoAMQRgdXQBHb7UByG7BsuEjyDFu6YiJ4aTRkSryDVW6uh5jGMqCFNMWMU2EThNniUsoFq4L",
  "key2": "2ac1WENazxpQKTAkeU2PQje3WSmdo3EukTRHXLNiW2CRPT9oDT1iheRLeJGCqsFN1dpqFCkVBaJVUnmfGGg8vWHd",
  "key3": "PHK5yez3zWTjS88SVfcYAkb2y6PJuiWWXrenB9EJQz7UhLWgLMMScDRsRWXbf6CRsQZeepV1WvLGD6iZaR2dxFJ",
  "key4": "3ALV2He6QKdmkVzQWRV6M5gNRbcCuSF8iVSPCjNJvEu36HtzUeQKMK6YDwZv6dDMoU6oTdZ3fNPiFFwmYpEYMiNh",
  "key5": "2Bs1rrYrVBs3EAZq8GJX2JhazkL5JMWAWU3pc89eiFkJW9xpHNsmhSzgHi4nHeMj2TakDxBBRjTCwgtzpwQcDrC1",
  "key6": "593brDeSopQ4vDrAepytxUTwA8hyPviv1QDTReYZv4LF22u6TtGQUsnn2LGWR9T8pxr1YT5GPS8TmyvwSaWo18ki",
  "key7": "fiJFiiBpzswtEYXehz33uFF2CCdWk3QNJb8tY71JqdwJYmdCe9eWiv5opSUQQLrKZaGXTh1Dq3FQBhrj5S5sfgu",
  "key8": "46KSc9wvUHLNJVWftUJ9VJ7wb8aFjTksBd5oKhUCuinEienTFHjgU82e2QRXjxPvBFxPqsELPmcn8BQSbaUfmCTH",
  "key9": "46G71Ux7TVyCSHHZndbi3qb48Myy7yGHNa1dG8gmcbde73hYpXkkuCj67yqyWRUrLm2zCqCqw9yskNwVsNDZcnYz",
  "key10": "4worrnCZKRMLyzZsW6vQhPHC4hPB5sas33ZeeDEPXCWWvUJeebXF9J6zjWuVNziSjuBWQXMQKoMJ4yonKaWFr9j2",
  "key11": "49wDCMwKMKJzAvxA4kcfPBwF4cvivjjPYbsQmipZztKMmNZqxqQ2RoCaGTBoHpXVBY2gU3GqZFnH8JDtEucTBFnD",
  "key12": "59RjJQLqw9DGjuexQFYWDL7pmBCMkJKeW97LZELuEPFQkyM89XGJxS5nZxBr4vk97qdBGTYwRfxawLJqSpgAGkEE",
  "key13": "4Zw6fNee4NcXpATmWmMJzH84vYWAU4UyBq5woNqeByBrX4EA6imX1rgaHF2RvUJw8PqX8o7qJDX9bKA3fFfhAXMZ",
  "key14": "5tJyMazNajwzt29RdCDp9x8gC1fhHA2AXb4LdrmqNQpkkbiSDexkx75DsRRrGHXL1L4FuPAN5xvhBzeTapHP2Nyz",
  "key15": "3HbDZw2tPM4A1C1oY8xP415uRXPwsj2Jq5EmXTVFpDnEswtaK6Lhc1662ncde6QThJXx7ikyNaM7gAdk74nwbGaP",
  "key16": "2hW4H8JeSyg9K6fbaJjmAciihjih9gPnram8xQyHjc3RMMRqCpWgNgqzMcKmhGS1s3T7vD6Nw5FccDoLL1JsJqnH",
  "key17": "519p4G4hFrqWNhwmTV2YHGsk64waA3UgxUGzk1HHqgAy4qQ26gtiZjxuPnJk63nZQSNAu3bM1oEe3whLU65UvmYT",
  "key18": "4mirTmU4mWyPaGYGt8HELqBpSMhEqZ5G9eCzL5fJsAaQE7gnEAk3DVxjG6UcD6tWFJNFgfPJSpfEio6UdRfEFhzt",
  "key19": "4C8ybYTNJFfutru2z5wJVgd9DvHr6yAMQcNiPseWstrag93JZzqTzoFymnWqq2As2UBRBnjgyq7taShHe1bGXTn",
  "key20": "22NdqC3zcA5fGkeFQnkeWdVvuzKRrP2rjEZQcEGMgJmuWCFuP8ASyvX275X81dRCNSWk4yPrPVKAxuJVJ3LhQ14F",
  "key21": "4Pw9wFnffkx6aKP34WCTzZt4hjsaHKgAJH6az9iz4cooSWyjkwPVV6ggiDqMx7KvAvYvcKR2tjXHkY6VrsPStiXV",
  "key22": "3mgEvcRa32Ya44Z1GFZiyG8kbsdRC1fq5YKv1sCB7gUUPaVEAjf7S9XrrXzzXU5kxCEjUUhMT6vYSe2JgFn8Wx88",
  "key23": "29MZD4Gf7TVmBQ4CZwmpqjdMKmrzZTVVxM7gUGp1RDaLpFKSAvF6FpndLXvDEgSZ1J6cnbbtZWvTbSsUJzeVNUhi",
  "key24": "4pGWjawPfJqJq3YoEdqAUrkEcqzxaHxnuwGnb5FGYsuSg7VUDqJzUuQvB4nrTEtai2kmzJsG6V2pNXPVNSoNayQq",
  "key25": "319yBMfmBQm5qmU8a5R48TsfXxYu5UQKZwrbU28NGpvQ2NayFzQ2Ys46BKsBLazutfToYirRAkQPVg3CvjYsUgPe",
  "key26": "LYvVdYqwgMwaJTyGS53KVKGokRbHbeGr8DpBmjh2YqCFNC43AJVQRkWmgpxjvLcyyC6qvcoHZLwNtBUqiG9etNL",
  "key27": "3p4zFywVsS4EqJtW6uobDrkLumj8rwwSFsGQdPMfFAHEiv2Q6m6wkfdDQW86KPVG2JW9rMBf7QcyyY7p559S1iqo",
  "key28": "4BbkM6yGf1E6F5N18Czuqbmd3csYoYpnW668FXFoGWajtyrL6CRjjHJ5qZhNUECbBGPzHhvPK2QG9SM6tU7u8EeL",
  "key29": "5jDCF1iSipssB4D1h2rJU1P7wZDxT4HdMRu4M3EwzvAkaR66SwmRTvRUC4B8WLLQwtvsKtLdHuGzVVw1E3JYUPxS",
  "key30": "2X4Wutrv4CigM1HbbfdTHU5CRgnG6vVWBXHMBEayKjpCvooFC8GnReE98tgeaXkoHe7W8UH5j33aMc4P5atk1y2q",
  "key31": "4xSKkRZJx3FdpM1u243v4WkGsK4hq9aCCCzwCAsF9VUKUHcs6nLw5fmpCCkCYhWUnuW36SWxZ6NqKgQqRnsSZmyD",
  "key32": "3qodog4EVrJyeGSPh8QBY5CwxmpZBJU6aKGAPyBmhdVPG8KQzFF7j3tHtnVVe4PL3etYjCu6M6d7Y2HQcoV3nEcq",
  "key33": "5b9WGAkgWqwrHjQi86aA9V3YaYeZ23ii2ztztyR2hRt32vc3CUzEdaZM65XRbBG93vgE19gtBKwQQMcbpei39bi1",
  "key34": "55us3rTqhtCcDW8NG7PXGJig14q1jnxXTNKTuT1x7J1giUGok5mhp6qCkVvjz5kqMrFdBbHN1xaUx3FMoV8TLQH3",
  "key35": "3GdoFHrR9tHGroF94Z94VXbC37t43DjRsEd9YFnos3aAff36uMvsf7Nqw9Ny9pawh1Gcg2hT2LVyhg3NhbvRjH8u",
  "key36": "2KGULdCLskYMCo9QjtsJdimdTB4jsqpxWfofHY2zG18rpdN95XBZXASweyBiDDxtKAACXQLnMHLoquhwxtDzqgv4",
  "key37": "pktfUTF9tgd5GFHmHpsW6m3L6h2qqxp4GKwd9qi8XZt6HjoMus9uSyLYs1BKnhwmTiQ9JYwc2z85HYgysAs3J52",
  "key38": "5GbvkXHrAp85c9egtU5qambDcbtT2pg5ysPGHDpL4VmXhTLX5Gns8nb2MJs4adkKtVx95PtBX752r8r8ERVXEdkn",
  "key39": "5oA3SQbqXtqvC6nistH2GkFgWciAitgrmAXftxUCBrCjPKK14antz8o744muXLiSCZwQjVTDXJ2WJx1eAsNMKMfU",
  "key40": "3KoArpKwHnn5ykRpVh8Fs2hmN16v8uU9YBxQT1NYmxxEg8EJ8rBDzqgmYPEkTxdVN3ptWbjgYkx2KWfcd7FegfQV",
  "key41": "3NnikKcVmSAcLjUvGHDHEnzM9tMc8LUrLY1nPcsfRf5EqUmjJrKg75J3qBKtKrcXpoyJFm9eUUJkbdqjx64fDrwK",
  "key42": "3AzbuhU1pBpYo23ihfuKMsUeTdWvfXMRZTRMPZZo3dsDLYkHaVJZwPJBHdKo8AZQ3u4wxqpDkVcYDzGbKKiqawYC",
  "key43": "3rxDTmUnYTwswHLmMsCNMk2EQSRXetzxvFPTrT3VfqFVr552HWJXeNwZj1XXzFfSwgMG5cX7RBxruoQzX4wF8qT3",
  "key44": "5yXLkSHKYWUey7ftbj3naGPjgSUrLgWtbqJfqS8HEyrAijueFe9rHyG4JV6T7QPtCBSdXo59SF4GxBKbtNX3YddC",
  "key45": "4NfhH6KoziJDYCSqpMQsRncwXyR4V6TcVeT1A5MUxT8tx6jgEW1WhZ74Ena1MfygN6nui9TzZ4ash4DbHsjuBu5",
  "key46": "3dMjP9qZ1iaaR2fbjFtqspmh5d3WyrSnsE59qXwwnJxSkgNeojF4wfQFChM8JrSnLHmVAFFSz5w2pPzDXTxFowSj"
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
