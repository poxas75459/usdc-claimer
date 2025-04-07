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
    "411iJR776GXnqXiM9mK4bxzAwqpRDfZE7q8T77nducr2jPp6yjs1PtAd4CxcPcaVtJih9SoUCp2v4ySj6YjSUbKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a43w19u5iqSqTh2iGxBnbFCAoHjjda6YQXuhWmbD1LaJNCmYJaksZpgUYMLx95a8X5PfrBYKyPNUoSwauMD6ixT",
  "key1": "8ei2FcqUeo9fA5JvVPjXAf4kG6bAGapXgn861KUzM2yAgiMETTLFroyEqeoq3KUZxKRvxnAXaoTyK42HWVzKnVU",
  "key2": "3oAmZx3iHaU7crgrcbwBWrpfpuvM8ThcGyW8kj17SqjDZu71S1h8fDfYikpZUkXBaXAhkxHEFiEQV9KbdDrRU3E8",
  "key3": "BkUycZqCTMd6TnQdPLLrctS8v9Xutg8ZZZF3yCs3rbnrPP82mqFemRaPYPwC5P2PcZEk7CNHPXNZPJyKheUH3US",
  "key4": "H819NtjDSu6FeJuJCYHBNedwB8a7jRMpgRuEnpgsxKQrrMfhwwmewv9C5GLEhvE77KHwkBRgdeimwbfK41i2WVL",
  "key5": "5zhD8ZwWpHaWNm7KJ3F7MNtGThBy8QaH5jV3J5qAcC9XG1kxzP1h7uJmrBDpMy16RCxBWKhVMSvjCtzkcm5BR2ZF",
  "key6": "2eEXTVH8gn1LPMwkeHbUEYnHhHug6SznxRzLCBnrN3Uy5tTah5EtgXuwP8VqCzKRYemz9yDVmRgTZR3sZRr3huYv",
  "key7": "5tKaMSx6RohWtFekYYaJWEygc6R9dBnsLULqb4z1xPsJSws6JwH5Cbu321PXawYu571vd1Mry8iqenAoYuUvcdGt",
  "key8": "4CeUJYpjHWe9yK1hUzPUwYbNWEeZ8xVqM4Bpv1naoc3SZEDx7zqHH3b98uZ5ehtEbvfz4zM7mr44WSVotVfxU5Vn",
  "key9": "4dgUrboXtXa53hqMN2Qtf3gATjWgvjY7tBGb4Gbb6MUob441ax38vUwnNE4rQwWpr6e384gNDXWfSf8D6LNJhfaS",
  "key10": "44Xytj3AAkZUBRNbu1s5a5HY1deC6TNzfgFr1yuTXDyYg7EwCjgLcz1icLebeY6YE99bUtn1AJLS1RtoyxGMmYnr",
  "key11": "tvwMGX85HdS7d8jVUSDkPBCJ1DMoGFdkbAWZja6G1XtddjiHWnCiv3yaG9zNs171NJ6XqpweRfN17H2CyFibzFe",
  "key12": "5kRiA9M9zqHZ1EDj11x3ryQQQuNJhun69vuTgHmAqZ4XVCHP5weTixySZigrjx3RewLdfGgVWC8M2GhCbnU31B7M",
  "key13": "pbPkQXZsRNZ8B72z6NSnagjujuobn112Cf82i4GA6QPn6bT7E9iz3LEG92wbkeRrV4ww2iC27NuyuBHStktjMhf",
  "key14": "Y2gTf1X3CmPJhc8ZbQZABjAVVAjwZ7fRhiNRUbKPFAfW2odfK8suDNWm4NRx2dHCQ3mgiiC6DTm14B2ksiEkwJg",
  "key15": "uj8gZjsgFbLjPw8ysVkahNRrKo9Um5CycWC2vNJCo88RHQ576tYG9BBk3QGRvTJcehzMhFjH5nUnJ3txWLRhgXJ",
  "key16": "5CftFH9SQVxFdtDgqKmyrBaNqQYmvMBUSSC6i5BzQimXPvuq6jMmBBwfB6nQKuHsYEPPHEam6YqiUZ3L24RRB76w",
  "key17": "zRroE2WZqvKPqCU4F4hTMtGjvAVUz9t7wQipxtLncMHocKN9gr5oxj3NYKFoGcRpfETRG9auatpN9ukqw4C7s3G",
  "key18": "4vgvZSX89oRYKdPuDJugghcretEhLY4LjPFWCk3ZdW8r8DNyaRoBqNxbUMat53k7FGCv4pp3LYTpAXNL5EP8yipr",
  "key19": "3PH5SeZzkjeDZoEiXDwC2tuVoyGRiSqRcsVxU6HXYPHdkyi9PxCYRrGANfQ9U9F2dLPM5XAZ21FwyX8iqmhzcpxj",
  "key20": "62sMMDKKGWNxZbcDp1xkt1UtGpYfG5UtPDzhyFyGm1HxEAtupmvc2kXR9e65DdMiNVvF2CEnHZyc5GdfkQ6zcc81",
  "key21": "2muLdw5TkPB56C1Qw5U8cA8jqzDiNwutpk5fUJruWUXHGEDM9Wzgq5ENXTYKczPfk138pSFXTc33ZTCbnYhyKZbj",
  "key22": "2BGVVPjiEuYCXVm6gqB9koxGsVAavieDo3LUc27BSies4iGCaVdR6tnmkPTPNVXBUjV1944ZQRXD56nVbqnwE8dy",
  "key23": "KpykCpGX6H7BBN11BLRKypfYypMHQNoueqyniW3ZFt9rqRQSdih7QoaezWx3djjDjc63xATu9Gcxks6ZfWRkcvm",
  "key24": "2qQWpv8mwNR83w9aKv76B8RCRzYvkVw7AHNqr1pHWia1HhZzqhtHCaXVxay3u5LMG1smvJ19qG7vnmG5bLhBeJ7W",
  "key25": "3z5LmJ4Mk1PEiajspBQf1KRcy4Lt3fBPv73s5kEZKdsCVuQmm1rc7AgoeF8exDq2t2bvgSwF34E1424QFjorA3L1",
  "key26": "kZhsDojLmEV346FkjbP3HBsHYGEceuHPqh7UJFY5LsReKpheFuJeUQ6ZnvuD4C6fzc2H3ecqGUuJTcvfEFxRgQU",
  "key27": "2NojWNkVda5GyS5LpnYRGSpNEFtbeCugNbmWGeePKXFbe7Qc8DFQ9E9tmjW5ZeXSnm27LDtmu8e6vNdBkKE64Zas",
  "key28": "4785HaPpdcQ8wox4Ab7Q2dUzeRajdYrAUahyjv1ox98DFq4mUgjDf2HbDXTiiP3UV12SGTaLpVMggW3NcDVXkhsB",
  "key29": "2DTnZc66zJMrakAEfv8EHEXMmgSwuskwbRZzemttiWkNAXapWdiueXygFHMbPqz9CR4bWtdUni8xN6GwAyfY725M"
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
