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
    "2XhZXWT5xQb2g9vpnihKPAdycJQPspicPEA4Vr87rXcbnPaNJgL8TpkUefXX2J6XVi613J1t12ExwRdYyHM5vbeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZM2Voc75tcPncJg8oX4gZYN8jboCkZL7oeruSbnnGQvMbsrx2tDy2gmDR44pGUNyLFLsQb6Z6skuWC4JfuCppHF",
  "key1": "3EeWxwLcn7qQcbMa3CYJJLfmc7Uinm9tEazCfGRqZ2TpBfZQkEMKbz42wwDNnFzqsDNCTKrAKH6T7pcdk4xwC34F",
  "key2": "2DRCQ7in6Xst7xUnfrC5vW5o7mbVP1BsgJRown2GhKs4FcWafGW97TzrNWBSxgUSTTZpsqiB1He7GnxEePH3YdxR",
  "key3": "54adr9TnbnZEznf2ginLpFvnd193ouvwt7sdxsnvmqr9GH4fjQXpzQuvJgRsz6i6gTwDxr5eJb6fnfDePZyukBkj",
  "key4": "3erqXPbygiZeCgwTJCJQxpZ8UR6QDixHUR8AqD7a4379HGhindLmw58xAxYnHKyxSmG8S1Vi9ZLN3PnLrNqUXi6z",
  "key5": "39vujyWp3bwtysMxQD24MpcqTg3GRxyxhZpex9gHMF31KoHdwrszMBWAQEhs5X8DRuw9K1MWDeBEfvqL4zfEvhbo",
  "key6": "2pA4N3ZoPuFhhULdNonUPSH6USYFxCprUyLvC8m31RrKVdbJhTf9wRuRQDxQzDrjBnTawnSpSAHoGL3NMaAhYHnB",
  "key7": "3LYLJ8y9rZni53Qy3h3FYWtxWN1x6wUG4CqFE3eBy3fk6seksGYCUFVqPRmrkgqmxJ4Rh1LtuDLVzfF6UsCg4DAY",
  "key8": "4MpcxGJ8ea9f3q3Tg2TAGwZJUNXmScetDvWGnA3CyaNErveAHQhAcbi1QektzjAtWLuR9GKaneFRWT8KPh6rftB8",
  "key9": "3hooJ2gTusmaNByVXD5cknXHTNAYUDNLZjzs7WPWg26HqowAwqUToiya2ptxFXocRfVJYsKjfkiqo6WgXDHNspbL",
  "key10": "29pxec9xW4aRXb94oxkgG7xJCvNvwuhdkuRu1r84BZRSMEu3mnuxyLv1UWPfYNDh7M5q8aYzqZNsMBfNbSsgS8hR",
  "key11": "3y5mN5aiTzvaN7xgMt25NQkgrt5hbtGU2tVQ4ZZDfRiQyHkorYjgEb9HPj3VDSWYSE5PtfA8D4BNB7qJ7p7kutwu",
  "key12": "4Ldb4kzH74Vd8pNmXXPjNiTx7w16X7FWPr93TG4yPaxQtRcABAntRsEnGVXFfb4fCowUaggCuA5sjgzxAVkwGxqC",
  "key13": "3GA7QYCoyPHiuV1eDnd7mTSsvXZ6BAJn7oKcensmTNr9PtPHV8C3ndGTxxSMxZ7UBoQavHgUdDyVg4MgZCdThzPn",
  "key14": "3vfJBeXhf6kWnZVoeDm3gWf94Tqyx56a7RVNvYj4ekaxmjxUvHJbPuB5LN9nwPdrSij1vsNyjPtWaU3xsJ6xzUb8",
  "key15": "5waYgq6EHSWbruP9EY1yfjTRYP6umGdyuERLLUvFdA8Be8hv4tqZvaLwXkntwuZw2bpAW6kVHT5GFwYFQFPhEWAq",
  "key16": "3juSsH4m1kt5vDGcFfregQBryy3gEmhmCH8SWWPNoM9Ho6e82byCL8aLANLXmD5xUQxsB154kLAP6qtapCemGR9j",
  "key17": "2cC5GMNmYexvBcJKYrPGYVr5JXhA5pjLr29xZbutWQ6VTh6xP4iwZN2TKdADkg8pDTRQB2Cj7RvkFZUvZ8pWHswF",
  "key18": "5VLbXrrwQYLxxjK8F21eFy1Dmd94pnedeXzXxTb7Xv4G9H3APnZ84fFDzbBwtCzJDMSECWV68877w3NPyeHMZ3pN",
  "key19": "5m6NY98xB5nhNom3wQF97ZB7seKi7KEoEk9Yqx9CJxEwM8HWoe7rKLPbc1uiirSzBE89L8wcpreFV374TDLis7jQ",
  "key20": "2KhhzdM2JYS91yX4DZUHiiR1KSvK2GxjtKaNmwBjpmauaGoB8arqKNYYZJcYFbtPFWDgaUbkcMx2A3vXfGVbarBB",
  "key21": "VHy1oEi2ojmQ3fEo9TNUm2UJYzX4frGBn98xheXx8zbq41hBBj5nwGam7kBCUeCHc9HeqCuvBkEcqs8sNexegqB",
  "key22": "2BmdFs9kr3USkRVv3HtxjbD27xSBiLS6fxmKKukqo9r6hxZy4ZH81GT2csr1napuRkMZSMesQFxhnSdYJ79UvvKF",
  "key23": "4XAoXxosmnVStN9zDbXEweZK9xyk7PsKxHKdfVzJ4brcff4YL5xY8MR4jhWCGNTL9JP3bKPngaCNRVbnu1sQsFQj",
  "key24": "2uVPsQxeR7MpcFbQrZjCZacpgwDKkRijPY6BDNQbbuCTnNi1oE5CB1eB8qMTz6cq6sUsvCJfRHAhzH9BmKmubmWJ",
  "key25": "29bBrqsni4Ty6bcSmjnBte1wHuyxBfDUcUGcUgDqSEvXUNR5jKzzisqtC2E3nFaGUq6mfofQovtg7ewA4KrzkS8Q",
  "key26": "4TeHmVrUGBLaM8CrDsHubJcES2DRw5JEdqh95aVuCazH21RzZMjpTaecvQzsVGozumBoVu8zSTKyRBrgZuB8vk7U",
  "key27": "3uv1wFP6bxQrS3M3THuoqvBALETPQaGooQfzzkFEKt8145dgm6tDBJC6BNoyFRpGSYM1SpTMmAFxQk4qLNgowxxo",
  "key28": "KCG9sdAHrxaooBEF2XF6iVF4pLUghdBbw3dgwDUR5MoJGfYDdYE1FRzoVVzLx6zQ2Q9nZa8iQjbWFT7uxpZqfk8",
  "key29": "5ffDg1pJngNeVdnA7Xg6581MtT1YBTakG74sTvySowxW2HfnzDMAEjdgPNPS2U4dqQuX65xT9R74o4rqPDw3edxC",
  "key30": "B1yJcAtRA8DZb2rTd15Z6Rztyinx3uxRtkmyLejadfSUnHhPwMe7S6skVpfP7iSzLUUMJA7oPV3xGWi5aXNH6Z2",
  "key31": "33YmX3zd4BFVcYmN82ruWsm4QtXbdNmbmXaXLCmjgDWE4A43bc859SekRJ4AwD4Lq6nuuNJZPLfe3JAA3r2ah1LT",
  "key32": "5UjgPLeykMUigss3YfwERpQQEBh8i2LUbQSUUF4LmBcRVTbS6Eh15cs2fsWbXzqqzsziYNdtNYQC7U6jBcirstpw",
  "key33": "5zp1dEVXiJ1Wts5jjrLAqE7M6kK2RYHjchz1KHzbxuXP6MZtHQ8HCj4e57ij1m8REyp4ij4fsrD7zZmEeDrHfsM2",
  "key34": "67YPT1YZSXMUtTK12ukiV9ZKhsYxuDTNQPZ8xdt1NxwqhSW1zBufjfeNa2j1Tt8HhRiL41vPm2S5dF8qXjuvSXW6",
  "key35": "2RLHr5Nh8eRenAF2GpJN4giPbPMEip7SjXJWsp7kR9DciQMezmuWJ6sxQYJNhybTaPFh7uCndeqS8m4vKVx6vcBj"
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
