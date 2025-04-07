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
    "3RGb6mrDm7zCsZ5AAeLQ1NoSMBXhnNRedvfyqWE9STkEa419oMF9qsXHscq1gAZm3k6hFap18iEyh9b4nZqFVkUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qf96F1bVcVvAiitWyHBir6HpBNvbcCQDWUkRK34SZBx3FMx1nPdvMsfYjZgDGA8RYnNH1Ct8movsYR3mMDEq8rz",
  "key1": "uNfHhg2EqRu5n3HvWZ8tSXz3qtzQqpr4EmWJgZ9UH8L9AUxkf3Ky6j5eVcuNmvPCUBDBkYm1ceTQEEv2N89riAY",
  "key2": "gZBFGF8HzH3TMsRTCu8gi1JpEAQxWH5PZhbXi2JdihC87BZGtWGNGbtaxTYkYEJwBmc69Y4Xi6HurJKiiAqdtNq",
  "key3": "4Dv7Ad2UzLejt13Aptk2NqBF2WxvqXKRoxejwDnykjbMuDvw9eps2azG5HSqLWpK2xcZ4Rc9eDK4uSqnwc1oYuQb",
  "key4": "2yHmvEoHt2oosStWWgCA5HujqzQeFxBNdiavm363hbziyJbwVySZAJGUKwsFWQR5fjAzNDnmfb2eUrZpaac4msLp",
  "key5": "5ceuJwBGCLkh6Dwm2VGTstbt2fNdngxuZ2oPWyYyyJdovuo6cNfcUPz6pa7kMUnf9zQEuZt1mJFWmPPUd5ncexJD",
  "key6": "59SGDnYWQL2g2P7PiVA3pMmE5DmnEARkFDVVVYutL6FGDP9NwJk5HAu6xRcBFZ488eGsKDLdcK5HLZmrGF86cthe",
  "key7": "2mdkn8wCg1372beZpQRjXk2To4YpEdM91TqfEmAMgPm1YnpcugEu69MXu1HBxnHSxbyq66qWARGHSGMEjysQYeK3",
  "key8": "4fFJ9xwQ391fcoBFXymuFPHVbau7VUw4VSjnXpLRS2TybB4akhKUSG2AdVGH1idoJgVoRzsVrsxp8DuPMhTaKLaK",
  "key9": "47rcqh5ZEL3Lr36ckrgxaFHxPArygazeV3fF2ne1a8nPySx89ojmzfHLGge6k817sCTQLcYGRtn2BVZTkA4244Ht",
  "key10": "3XWdCCqcW7udz86GsZq57MQscWCiegi97kgZcKpVDfShwvYyJ5enL4pNhaLQwr1QKabRURpa6wiMyS8vVN7uef9w",
  "key11": "2C9pP9Liy3CzyuiHW8L2ZA2ejPHNNXc7kF4kEAbcf766bX5UH11tzUZ6Kwztx55yijvMDkrjXxCC9CYawkuqkbaA",
  "key12": "4HBGYaFVKwbVJuxf1WDfrX7jvfCfwCJes7CtpiLmhuhMAbMAu73NwnegKziqvvUQoTFv17RHBTUsPHjipzMtvjNZ",
  "key13": "3QkLic8zZM3S51BtQ33UJU9p7qza3evzsSNEnQUJ3sQwxZvhYRz2XwRsFCYGWNVNkUQQHdGezQ6jctfwiN4EK4Ym",
  "key14": "3xfN6LUYA3fMGkPga4AMxdhfn68cH6A3WSAN2gRVGz4XPfyw1j9MwYRRLSAUbBAMMbYttd6dRUNNXqkgkQ3YP4nx",
  "key15": "pqJo5sCYSnY17nrcJ9jKkW2UjRMHazpyp68CQbd7JY9miVyqYSVUHcNwVU4G5ZCDoTU7uHR5mN7y7rkVhc5E2p9",
  "key16": "3LmehozMrX7hN8t1kZrt3rhaxRa11j8coqcpt2ydsN9mfjp9ktZLRinvLckMRHv3EfwhTEqenrqYDsVTFNotmh57",
  "key17": "5wTjM8hQRmZBpdQdoXkM3qHcPYAtGG2363ewWEdaQJ8sEoJReNcwsBMCW4SDjGLiBPcyeaqD3RiANHee5S6omDpm",
  "key18": "3kBKS3dsWdmcvRUeKff6dcRnQbgv6D2ww2ft9qXfFi6FFbR5q2ej2NbEbSaoEzxp4KpoRkf6TT3KStJ8MfGw2jt2",
  "key19": "4oAH7wdLrF9qfxHkC8FQEG9m8gGC3dAdyCUC9ArjDDm6BE4NWKWbudKhLwPyuxtCfiYWziTq3wmncMbbutMCB4j2",
  "key20": "3yrDmWCRSKkAPcqWJgdyJuw7m9qqsJcmAN7RtBtssTMzmtpodcBaRD6usEUXc24qznjFNsZh6EVRGr8w6NkZEH5F",
  "key21": "3pHUV6kPBvtrWtaRBzhayhGfknYun1FFnDSDCGgcAC8zBvrXDjgXNtLmTCzHw876dziVTCkb2p7wtjnTH9bSRp5J",
  "key22": "4iZc6LFAUNtt6Ta5CyojLkYY3SFsyLvud9C9RUDdwgoSAXywRRbo8AY1hs4q5Aixq5CG2dbjR66AW3Bibo7AiJ4j",
  "key23": "4tTdpJk4mcxWPM1DPELqzHqgf2mYkqJkBMptsP8LgUN7vLX4kMRFXmDu9tq6NdrPqv8C4cei2qu7ugVHuuZoJvio",
  "key24": "KSSGBnfm33iPdsuoQ3d5bhTQwxAjfmwD6SUtAumvDxaeMTKAvWGwzzrmo69opeSJ3EdeFJAMuc5QbGLV8qJJwEh",
  "key25": "5ntcijkf1QLHifSHHwNkwUEhWJ2hANJfcQyqvjMGpatLBsEzamPbT3ebJvyBLdtAKF36tRGiUgmxoXQUZZpcPZbh",
  "key26": "65xF8LKxdNgKfHkmGL76uiBAhkCiiYZr6JSXiwFfDJy3G76RuraowNvexsMZUpK3VdKL4CtdZi7eqHxVkzWGwEPm",
  "key27": "27r9wNjJS1psSGE1qLogrZRSMniS1VA61j77Q8Wb69h42XDYCgeTptE7WjmnmvXdj4o3qYFF6Q2R1rNe5Yyo1mJz",
  "key28": "2w4BbTk3LkKSaASRv8Gm2ruiHRNLKgR172pvsAQBdZeAFe4agpvM9hb7ud6bHuAE1sFyd7zv76rSiVBLabpMnYbA",
  "key29": "2w7bsEM9X8KhMbA6eLRhEvShyM6kj1ih7V8t1toDDySt4NWpvRW8rpPhyZfsaDkECoaG4MiEiQxaisf2vnDDBZEY",
  "key30": "5SdNwWH9hNG6o6QEWo94cXyYnHRH9DdZkcwQW2jZ436o7cx18KrLS5Rg4m67Z7hK3Mtv4BMC9FCeohFsqtucCCu5",
  "key31": "4ryUiVSQzeNaZhW6T86cz7VdhMoaK8wtsedVckFbwoGgUhBd7TPcLVoQcqtQ6EyZuFVA2ctsZa7BShgHGPSYizqF",
  "key32": "o6E3RyuddGiRSy8TKKdcDTyk4MkMYDJ37QVXWT1mRUDf92FfTRVmQq3ymMFiLwKQtmQTQgDurD2GBGgwZPVHCVs"
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
