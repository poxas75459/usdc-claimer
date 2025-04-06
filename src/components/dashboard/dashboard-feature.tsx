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
    "5rfwNSGhRV6FkR2iCE3x7X1J2UeYGMQ86S27FFG2oMEhZZMdCa7SrvWfYDjeuTHSnSGbWL4siEiYpaZ3u8wCrVHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M3J6rBVZm9LkEPBdcPnpqLeJJ4wRGP2TZSHtCBDrBy2r33mZ9WyYxxy2NdiAVuZeDQc14MGKyQ6PKpt79vke3Lb",
  "key1": "3oRLQQu71uUEvTj1VTSZogV3KycYn9hwDPJGiKzDbsuMehYsAnSCHphKsJehLJxYxCNTNbm5mfJgr9EnBncvgPGn",
  "key2": "4YqfGRRMgLQ5hbNYtkLKpYAb7JgHedEFndtHbnRLxBX6xMsQPb9t5ot1r1MLDh55J8BT6J5KCb78C6sxsWnQJvam",
  "key3": "2Zcwb195dGtLKdJLFtJNh3RR5ruaENJ6Gn3UGuSGEaWW5B5Pt44eakbJuS5FGYdb7T8JT6nrRgJ8F8srchtQLFHm",
  "key4": "5EMERSywu6aRhxLui7UwQRJ5PXfRWMEewV5vwnE8Hv9PZmK7aGGwZXWxW98SruiLTERwyywX1fecyg5KQTSJyhga",
  "key5": "3upGXtMjMX1UGpaKbn2UcxZxVuusMPxgdT3ToFeZMKrdWuVALYemWARTJkAsHUGefHoke7J3z8Kxs6fJg5AUHzNG",
  "key6": "5qWiUrbFcfW7L19HvdtVjXCkwuRGh987PN2oYzPcG8GvSNocxG79WdXYA8PNk5UPgMeyirK4hm7Q3fZXXtwB7CFo",
  "key7": "31AZzsuU6jFc556SjZ28wBjC6AXJowGw5chSfhgkz5RtK9hMbpTELSbXH8DbeUqvkFNErgr5ZpmYU5PJoZT6a3Zs",
  "key8": "3fN23QTJKtEUKDqiz5hArAZws4ytT6kap8KkSdrUBAF7mCDAxEjwjq9DuMtH66bHoXE8dQP1fh5HvX27BkQ6i8Xo",
  "key9": "4oLeBZv7oip8dLunthKR78GBeMi1FoZrqrp8tcw4k8RnRzvWjDrD4qxiNzgdv5HXZzWy4227tgAC6ndvtoLD76Fs",
  "key10": "272rL4wWNh5vrKj6fmH4sdbCiU4AyHdJtaAFVYazFjASdFBw8AeRtFUoMZcHjw5PfJjnnqAF2J9DYbLQku7FkW8U",
  "key11": "Z37J797mbCCVyaUBb4yV8oYAZVEJh1UttzvUB6qjmssjkxTP7LgXe79sZN1r7KinNytf8JCaVKLu2Dj3ngpUFrS",
  "key12": "4TBo8bLokSwH78bJZqMATWTkFucXYac5gnFkQVSdwrhi4XyNoChMdFyiPiLegtqZYKfcYHJFLQMucvHc24hfDAkf",
  "key13": "jdsvcNzygYqLpTScReRx3591UaJSUYD1LfXfmn6aFkPXRbWKpDvbjR6D8MJ1rstpRc515qxfJFX9VQfhqtbC9sA",
  "key14": "4e2L86CUWTFJfCT77UWnNWEKx1yY37t8mUbv7H4bwbMHoeb9M8gwvGtobbsTpLsXQpqvk6KQ7NXfDmXC4FqwW1vB",
  "key15": "b3na3MDbhFGBpR4ZG2wWEuArSxA4E3Dkc3qS6q8ZQ6DKSu2kkPLiR41WTFnTZPWVyS8eZ1S2QdTboXXYSAx4hAg",
  "key16": "3RQDKZ8wrqQeAsESehEBeP9KTUZG7kjt3t88JEMTeifq72fwyFGJ32uiHiMVN1a3dX6ydVPXvQR1rbGFWT7NXmK4",
  "key17": "4oJC9h72EfbiyKU4E7ENqokbbVivMQMinrS57ubczgJMVszofp9CT8GYxXYjKRvCvy527aDmJWaXbxeMXVc4eg6r",
  "key18": "3eKC1JyenLNGcgRJiQHTAc72favLhtp6FGkwVARnppwFoJEW3YLCxbZ9wJC7RKx7SUjwWvjbrdzxpynBvfa5EaUf",
  "key19": "5WCeFXamcrcEwShaUa6PrXuqFPa8FWsctLK965Z3VJLj3Epj87QDe9y2eNqzNXudaeW8Tpqm9ZTnKwYHNvNPizPH",
  "key20": "58S7srnTuSGtmMS4ckJEzFsRfraX5ebwxztHDT6kopTFp1RoZBnSLYEKHj8P1sEMSER4bcht3y1fNJnjJEcVBwDi",
  "key21": "22FiFoMn4XC8dkAJo64EzRLdzTRLrT1TbbMpTKhhxPT1xmJL2nAPrBe9aCz4fRLjeKDBYk3z9auqCHYKFAh5m1p7",
  "key22": "3oHZ3skJRMj4b7uvDobMeha1yrAUdoxhcvkFQriyWUsKHgDFD6PTvE8maCm3mAkTkn1uHywv9yWon2ACBsJqDbnd",
  "key23": "2DnfKBa7YSVeitAUu5e3dBrm6AdcQym3skS7nRpwgX8vP3hAgz9uCWJVjU4Sfvay2pxUbLzsneC31aeJzVhHjZwQ",
  "key24": "5vMsc6zH9AsCiLSJZjx7ouk1ryADE8M1THeN3vSTZufXnDKSmWyht1AE2bv1ucx4rLVSct1QyzTbhWdC4JFd3tmH",
  "key25": "3AYuYeoaVq7M4vkBvnLt9qS5gyXRNUYUiYQMAccodZXKgSnA3dUN37nyXSrgauR5Z9P6W9DEkekXcJJDuc979esD",
  "key26": "2jaN5jTYTn4ALCFUpfXtSngMTadmwnnXHHLZscLGCGWVYHvU29N7PGyPpWzu1tiPNcLHAFS5skQtw1ULSLNHDoCb",
  "key27": "35VSNjy1Dvxds5Cev1ud8JTByajh2BiSaoRTB9scKRAei26r8mVmBXwfBRYFKbWB8UpZkYEzU58MxpBu4rxnBdM",
  "key28": "3zRq5FaAk7msGUPi1MzMp4AvdFFLvDfNcb9JoGrAHyEWSSYoU39WfxU77agzzbwLdCmpdQiH4Bo2Aga4y7d5xvsh",
  "key29": "2tcvpNd936AnExVnEQ9oFUPatSzPd58he9HcMwzpvnRWngA2aVJNGAws6KQBJJLVKiMALDsBDRMEEXJ41pJUycQn",
  "key30": "mpD3YiAcaAVqzjHcKs8AqCFrm3LDCGtinPmkr3atEJXbW1RbrvnP6sDqkfo8e2EK3ekKZiAT3er6GYuextxKZqa",
  "key31": "4FQaA5oXuXbLEZPaQBBDDGx4ch4rkxvA2xWEnZYJVfVYMrUcA2acd45mRgBisL12w4frxuKUK9DwnfF7HJdda4Ac",
  "key32": "5KyiafDGDSmvD6rGyqLiMfJeFvDKbZHiFiRmLADXfZ9NEnkrTk5hibSWX2TueGLof62Ftiy4KjNVHAWb8LX4EZ7X",
  "key33": "4mZUKmd3NT5DEjAT8BMqbtnYBx1QVohZ9Xckupe5jTrtENrguGGpoauoehbed2RNFJK9jDmehRqNLb6FtWm1Hv26",
  "key34": "2UbKbBtHLsue9ZUPcQCAs6QqFM5TUjJTVGeuCJwQzaNagUCh6ZPcv1tfFsWWeGtUi4AyRmBxB9QWF6AprkU6moeG",
  "key35": "Nw8soqUCajx8k66z8fJYUzXnPZmDu7Kk2Jukr2ACYEy8hQnrbXUXvKstGQJYASi4jwqZffB2yR97hiAvZgppkLC",
  "key36": "4bUc2fJDyjE5Ddw8vTGVkPunUmcDdxbwrsfNhAQM2CBm43ocqbfjqzmS4Cwo8PrhRZsLsqvcw9jnjuWvMpii8xWC",
  "key37": "4Zqg6sEEeP7EE2sosiygx3EjXCBou3CL1mGWn6eN1P5UvKRNFBfKZgD5xsEuZ3ZfHFyzoDmm1hivJjF9p3Q86KEJ",
  "key38": "4GAUoh2DHJdPE7LUxYnpFFPE7UwKB4uirLZixcGHJkVBY4QCtKr6xBoAVgxtipBTmB49pPXPEwZmjdW84zQrPTDd",
  "key39": "3vUSWHria7noBrSXE8sWEr2y53QWNTcjNJKEFTa9NV1DbkPd96edFGs4ZcAw791iipvowEfsdmoxF7E6ZLA23oHD"
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
