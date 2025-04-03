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
    "4tuTzstsPKE865H9bP9fSNNES8boLwj8BZueTPUEh5TuPcjCaE6E2QKDbELEpcRUgttejEqrHocisRvTNJRmYri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YiheEMbEzHAAxXvPt5x5cKDAmVWD63a25ua2s8PoD6sCcu2YN8nDQ93zvKNKoZPjGu5LtkbFnuC8uU5kG3mY5YF",
  "key1": "5CwpYDp1THmfHtXgYa7BGtsr2pk7cnoUPZng85xMVK2MpDZVSKKijArt1CbeRXtH8pNGDRNyjYa3TmkcWoPjt5SL",
  "key2": "4aEt4y1Ly1p3X5FbfJcv2hYMBSpBMPjF3b5cnnd28AHPd68EzzyWHfNdvHrTs8BEXE9GVs9XABW7n9kNRseDbpZi",
  "key3": "5zdBz7dS3uJCavdZEeEdnddTMembUgFrJpVsWVi7E1w7LYVTBdDWRMa1iaKVz894W9jEMs9M2aCXFuLf7hXsrHBV",
  "key4": "5pga1PkToxsdrAp6wdepdvxRP7DM2uvZ9jNYqhWM13hDawvNqVy9kuDZ3WfCy8oZmfkjqPuFLqzh4zzg7tWc7oTT",
  "key5": "39cxpeqXDHcqPwJ4mDjDbZAfW5ZeF4WyXbkynWE2XjMsxX8oSrDiuKWphpDB83Umc7vc8yQUUBko3F19sfQyyz3Y",
  "key6": "49cCzu69odpi7CVUSpQ6KGheXMh3rgW3yBKmfkeUtBTT9mC4JFbspSatznaL1V4zE8WG4JyzF4V3Dp3BbqzxD6pF",
  "key7": "2Z2bY1vGS2TQYEMkN9rmoW9Tn5fhqEkwxshMEtWS78nwMhYBukWQDod3usysUEuyzsE5SPJMdkHbaFd1Kkj6o8oh",
  "key8": "2Qg7y9PRJBVQoVDQoshfDQsxiVAh87GR6h25Damr2VLXCx7CxHLWDL4AnNDokpMVp8BxYcX8VkuQnK6JJeBKD1A4",
  "key9": "4egk5boei4BBhqzkjaoswKo4q4DyQgxVpDLnnM7DcrMi9uV4nY72dmDbEFRwhtJ8CMgoMmzvtFKSfgu8Mgp3CQjm",
  "key10": "4GVtLNFRkcpZNvtZ81S1vVMyKuYtPcWpjX6ZWqKtkskqKWgZSjPBnCBiWKNAMWHKxYhRip1DpGBTy9BNjwWG4xAb",
  "key11": "5ZXsBJj7LiZCYqU3qZaEaDcFKg6uMgAWBq7UUcyswTrn1NatXsXK2L3cm21MfgXZbPiVtu5qs9KfeWxCwMaJh6YB",
  "key12": "4knfKA9CmF9qGzpkFh4vw5xkLbKgGewHHZR9HHF2DRTBTe73jttRdpKVNfrgupFTaYYNyed8yibiZRgBCN4tNDAy",
  "key13": "5QkLA8KNo54hC5SZc1dZytTBbRzifxqSau7hCtup7249MphKNCXYdFkfVUGZM5gvHb88qmRGPv3SsrLqYkLHSNiG",
  "key14": "5rgzK4gVnEq74uZ8ZXhnXthZWgoEUhckwaAVSRL8QfkU3q9aRFiYz2j5hvGUdFbPYscR92NmgdvDx5BQGwAQfddt",
  "key15": "41rKVvB9hSB3MNMxuEz64E2kYtxEy1836EvogxaqYHcw5zrJXFkHHnoxrBY48LHLzSL8XRCdWtuka4Z59kUTZQi6",
  "key16": "4DATEKa2tJjSntG2m2Fbhcnzvnt6bJkWoDFrduLkAqAUs4PfmQebJ4bPkotbutvhaeTVejN5hqq5WvYznKJs7mMR",
  "key17": "4vZEmdJdDj2MXZ19zr3YJvqsvy8TXxvCTb1HmjPbWHCJZMG9zdWEL4rQTFwzPSBP9iqRHENLuX2jaXj9PT7qu3Wm",
  "key18": "rLDDUo2kV3fYPU67Cr3QafV26cPHMXitSiFfiwCFHzJCnynqRCNx8xrNMrR7fVrA24DWM9uK5yy8MdueQRcDJXE",
  "key19": "5DdqePDxb9PMZkX1pucjQSQ7DveG4GRU5C9r8indSmdgZ1AKnHTbuE7RKzPzwfZBVtPTdrrDQ4VQYtVs5RVznhrG",
  "key20": "47AiWkVNxbMg1uuPR2VjZymAXHhBes4aKaQ2bPqAB4U5Gv1irzUpbG31tZ585cRFLznp5cq5pRRVFzgrMKFNFyK2",
  "key21": "NVCvw82NGpV81ugmUqHMhzzJA3bxufiJcTncV2cojvj7HMD5jCsxcvujcpjSUv5Rkuubytw1C7zdrGGtmwhnBDN",
  "key22": "1G4pSER6mnSWTsWLJzTZSXBWMkxc98xextKL6Br1pf5oKrBn9Nom5PuEuXsoCGTXLZ7XqAPkqEpWXQoj3joW8zS",
  "key23": "2aigDPg4Rzk8FFwaHd1yZC4vS23RkPzA9H2KRTHEUxCpw8TMd9G3hQNohQJsEW6XH5EZ1YNfX6tb69wppitGSTMw",
  "key24": "39b83oga7WDDnuvazMXjLNMFpuvuHkn9RCNGSNchpSkkwDWSd4kmVRN9yDGxdfRPASBohyQTiq6HEADTt9xGpV3w",
  "key25": "5AnyCQ464TSdCBDZMCyJ7PFP9YEHj1Hij7BPkNRzp9Jq9dMBDMD8otUW8WoPKcjescX99Pd5bGg8DgUhVeskJT8H",
  "key26": "3yPJNVXtCMei52qgiNrtk2yKTDTR836H3tpfwGNDcayD5EKaKU1tAzovC6ua9qnbuejRxZuLfXriFPyhYprbXY7A",
  "key27": "5psxma8B1LrNux2gn3ouQrVFw5K8FWK1QFj7PQAJbiF9QpGDVkEB9D4tuw9rTGGpYxzT8EFTizCbaTVspzqW1kuY",
  "key28": "qLjEsK6xdoDTWE54Uj3gDwgnThGzB4wwYDMMMG8N4in2teEVAQAv1bBfBKrrXrx7uKp19npSbFp2eARTw1TNVgd",
  "key29": "3AErYDiJFU3zZkRsTYnA1qUFBWyoZeaDb1dmbGQabDqZ5YYtADLMEsNrz9CXCV7NzCFiyKYHsUq2GNuAbW8sMhbu",
  "key30": "5Rbuq57vZHt7PMbbTTZRBjypnviZuQmd1YZBKb2pCCYK6K9P2thKx5W6zxwqTNYh2bPBPMkNAoQqfnXCoyMxAcfL",
  "key31": "4G9o2V7nV6jEgUtrwgjbYZFiByqXUGTkWczLbp7JwQq4uURkRKy9ras7AEXeeGynAhtCqcp2jdUBfYPN1jkYxreV",
  "key32": "RkMVWS1Qm5gJDZzypwG5FwL5mw8T1e9AvvimbWaYJQ32E2knfB7NvSv12gkDEK57ewHP8bUvCK3Sy7U9v6sGArQ",
  "key33": "8LwAfneaAV8Sy8HLKa1emRGwkw1dXypLwcXeTMxaVy6rexCUkxcqt2PvjEqpvpgZXES8QpQTJkK1HiyjMxUCifn",
  "key34": "3ap8EcqLESkLDLp2f1UJEPkELiGQh2RpPpQBff74rqHn9pVS6qKAxFQxRuQygAvnYbSa1umtrmAnE2QF2VpGFW31",
  "key35": "5Qa8DcPSM9sZWwhx3t7ARFJTqi5wkCLWwFEQKGqcEmghRL9FHNonixwdjTkpPWUVADpuyRMYMGX6SH9KhVqQ8gVh",
  "key36": "te2McopEavGZ4rVN7DXebtekL69g9pY2Trayuai3gd3DqajAt7tGJ3CcT1FTiJriah86ZfVSzdrfoR6JP62wD3D",
  "key37": "2MyRvZTLwy5U6fP6v3uuEkpNeo2RHjZNgaWPxTjTnt2BsuZEBt9oDZvG9VFneMtWJZQV28QxvzxyHNLUqRvsgSdF",
  "key38": "2KWdHyvQjuddzDnNEZqckYNC7JrTRUUXgcFpdCKz4EzGCxACpVe1ThYVP7wXtt3uMY6ksDp5njAp9D1KeTAHazou",
  "key39": "5757cg7fPtRwNjpGChkf88cXrXBksLasa4MD6PsaP2qzd4TSkS1pbujycRaaQEXoTXi1Qq7usNQogam9EN6UWcXy",
  "key40": "2jrCPSPL9jAHEQ5fofiiV5dBeNv5eLJYHWgfNGBBkAS9TMKpj8r1xM8NRG2re6NvEjjgsiHPrD2c6eCw7cqEHJjP",
  "key41": "5htnxTUA5crmiTLrdeG9qCcEXpr482TRzodJ1vCb9XCDfsy3Rgb4nUmWbZc8iZBUscYBTJypdkFCL4AUbJ8RHqdF"
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
