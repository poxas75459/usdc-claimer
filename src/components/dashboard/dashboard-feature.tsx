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
    "5nZozcimpLmvN1f4M156ZpHrYqffbBdFSZpyPTMsXwxYD5FEJmfkgjBoMcztUB6EkoDpANVTRENm4kHCrFkVVaV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tv1imtKxYjLZfA121KM33gPsHyn8NC1vxpWbLPs4YFjG4uFbT3qpwDBNpcJdMHHbJjbfi553x9oe5pysK7ukYe4",
  "key1": "4jRaEAXF32pEcoH9SQEsT9Xxgt99YsDWJuCq4M44KZcXNk3CcSRBmQXnw1Cq5fT5WewjXRMPmKx23SmBLifwa341",
  "key2": "kGbyPdM4QAWDWdv1owDFuyqJ31n57mHXQ7qQGhNf3DbQkSMjEHkW6MfuDLDfPi6qFnZvZFHs9HLSDNbMFofpGn5",
  "key3": "4HWN3ziLLxJeYzZfujebfaedaEs8BkJ6fqM7Cp3cFWLqGqSCYtfoFfbjEN5nZfocTA42c4RTTsDc2kLX8CnMumtu",
  "key4": "36UQ1cckfupfY49kiHCqyHkEhtgwuR25Kw3UZEHB8ziDm2csr5Fx48DBkt6GwxXVhwWqKiCN8LJRr2GDJZH3AeKX",
  "key5": "3PmXMq3P9sT8eoATvLeQzTRoeGPgor2Gd24oG8AdDgB9y8hgKGZpTK1LbW8vBcEFaKWvRqT4Hq5pFBUnBb9ZTUQj",
  "key6": "4gpuPzcg28an1fWB8Gx4ECnzzoFQk66bhfQvFmczr8uRgseSHge1rN2xhT2GiKto4cVQkVhAQn852buKf8GWS9gC",
  "key7": "GVFediHZH3EbhTiPPVQyGQohFyZwCamjk5BxYzBoZ3gRMwdfA6GQdTndaPuvq8KRJo1UvANwRDZo2niYmKzEGk3",
  "key8": "Tk7fSM19EwZzkzSTNUTAAYg3ikoMWoBDQBrvxJapvQe5AvZfbyQqUspowLqWZR4YUYWYckGEWR7f4RuVphJECUL",
  "key9": "4VUTjGBn3ioSGKn1UFE3U4uGfgxm487o8v7dqDUzFvSP8vohMZywGt6SJFFeNo7LeuYwZPVkjfCxD4KSiHTfiwHT",
  "key10": "599pJ5S3aeeN1LewscAuoDkwajCr1bQqumE5NrUdbdU27sYTinYTGuFfRMPBE2dk6K3ntHKSMfFVEqov3YUHU8oR",
  "key11": "guSBtAmWyKosG2Vfx7W5462e89HqDjxeFsJ82QeJruUWvPAf33TeUCkfJ3v1z11WQ3KXjrCz9GqrkuRj43BvxoY",
  "key12": "4jVRhteMR31AwVGQRkLvZfiCqBSViirfQPREf4Gah6V2ALSJqpCQmbLy3iyr8PdPcQvNTSmYKkaZY4m1ZwoYXDsn",
  "key13": "tG6j9GVvnvuq7AXas1pRyrXYpANLWAWz3DsXudFS8xAnzdxf9GkxP6nGeoDLNmm4sR2FV43rdkXVm7LjL8NEvFX",
  "key14": "5fFtQ7C8KVdMnkLEB6SwdGyQcQDb5TD8B94ttqSpEtGensfhNWRu3n5KrUEYd4jNuHqjuWnv54YWUdK1HYBsxc87",
  "key15": "EZBdTByqdkSo1HLuP8bcwXKSCeEsJXTg25maUP2fyouqAmiDoTYgLGz83zCptDVdfMfhHsJNcpBR646U4ehuge5",
  "key16": "3dPsQZuP2rqYM2yfBKzBepx1n9t9ebSQx4TZ6CwTPcsracDzoTMYPgU5CTFB6wdwHoLouHjNRbQ1NN2bwoek2di1",
  "key17": "YYUn264NuSu1T7gwsAqGEgBQRCdRrJ3LJ3xhDVQARBoHavR8w3dH29k3CDkVDctoqtswJPKn1WhB2Pk5d9wAqmM",
  "key18": "2P6BnG83AtijxciZM1VYbF7eMybjmyxjuNh227Eyj9hLVwN2Sy8bGRpz5fgCywpWqDoqm1FL68Cvr24W55QPhfhE",
  "key19": "3xjynpidMU9FttrZWM1wcrPeg7773Hf4pN65oSx6AYcsst7LxsEqtkFeU7cFpuj68VS1U18EeiGPJzte6xUJb7V",
  "key20": "26ft5P4ey4fkxWMDXYNFFneowctT5HzShJNSEZNUF7zwXvgCXpAN8wNouJAzEwgahWonnhyX8fnep6etMGkb1uov",
  "key21": "51wuciEGnm25mgHNBdzABYFEohCW1JgdaiPJaWSPDHUTnNUoCdGoNkJGXSRhNYPvkg4LT5Kevo6fd71uFfyKuPBY",
  "key22": "g6PyPgKGiYrrhy5e65vy3xJy8hz5fVFrvdD1WNGKuDDre9AJJKJzoHj8G5bz5ZbP2LbKiG5dGeESdFVNFTHDpZC",
  "key23": "MC2Bx5dAcU3g5bvVfGXZSLW9yucw4A1mzAPELPPkQdMdmGkuzLFPdvzG8HHgn48kvqfF7THMczVFZ27PJzBW2wM",
  "key24": "4vnbpEMbF1aDGA2nXd72JDELREhnhPMyr8chB2EseJxoHHVMDVCAigNxUyomcK8CzPLtXLVxhcL9p8RdF2N5qWsh",
  "key25": "2J71zs1LtNVdyH69iUdoU5f5DzzyujL9WRiaoYi4URJGX57ehYFjiJXn2HZvryY8VdqxVHTvgwYkhPVZqhNUd1Ms",
  "key26": "3QWuqs2irfvUsYPxxtMHYTQhLwVyWUSJKosUur2pv1gbxK7P6FAe6WHF2mMg4RWJGkXxp3JVTeiPZEoEvpdTxW7U",
  "key27": "5Jpu8EV8Wms77mSV7gio26EYx8wRUfrk7GKMivEkBq8mSP365eueJbS5goF6WDwSTtmgn6yS23xxcvvowduYoA2M",
  "key28": "sxVWWvenh2QkZXSvhLY6PFfW26TqNBXUWnXniqdBjF8qUZsQPjkL23uMv5ECF64ASAkuWhrpinGycSruuFEq5xX",
  "key29": "2uTQTgnKgAYicfFUkuPUuRQzZxC5JWmCrx5ZwVw5REwmV7bqavDfQjJUXXAArsJ3ZXvLrGViWZuf3fivuT6AqrJx",
  "key30": "4QbehMpp5qcQR3qVWXMsoctktkuQxCidKah7J5gUsC4qWFzKEpgAWmh57x8EzkG2wH4CSzaEjHrKgeH89buPu4Jt",
  "key31": "3uGnb6y2JiXmeyennrhK1sa5AaE5xXATaXubzhg8CgkpTQFfvnNughXnvf1VfARFsPgbJWrDSqfksQWyLQPfp6MY",
  "key32": "qd9kt7c7kTW6qBreVMWNciAwQdAWr3k8fFKQgDMApJDJiiYwfsNuPn7j4RuEAcbzTJStpjSXBurnbEQTKbSSKPA",
  "key33": "29HYD8WsCeCzZi6Hsj1ewKdSFaJS7p5AQoxMvX1RC4CEnrKG9GFfCxqETTAHpsTuD6hv9g9Lv9XKVbhZ59NBiPfM",
  "key34": "669si2LGRi19Lmafaxt8ATBZ29nEd38dvHQfXPuaFnGJSfNJcCXUKDLi8XDe3ka2ZepSPSq53t5ckvw74eygECBK",
  "key35": "PDyEcoTFJc4km8Qi3ngxXox52iSCSrGMTTnuUJYnLPZhrpD22fscu6e4M8uzfbkGHFurjr5PyhkTFZMCXNrbLwD",
  "key36": "4r3mqw9xJqNvM9WTKTsWyTN8rKGfHhbcMFFaRFrLRyCbTbMnxS2v74jCZxuLTe2HRDmJr4rcVhWa5jppqecb4rpS",
  "key37": "2a13MAop7NcJPXvdBs4n6FXwSZ2Uvrqb7AcFnZA5jsPCbpTNyUY4SK4dbYcgYmRr8AsSfvjHuALcXAszHJW8aRdF",
  "key38": "s8t5YL4ifm8Z7S4K1AXJ92iSi65SnR2bzPqAV4maYELi2cHU715nXFqte99DebnTCf4MPuEixKhFrBev3w3pKux",
  "key39": "2DJBb57uSyWmWDb7AZqJxMcndPa7BMsLwi7z2zLjEPVYz41HFriThJ2LbWT7iurub5oDwTERkHPDKFvrnMTpC4DG",
  "key40": "89CD7XKadKmVH83hKjDN6tDd3t8fe7rwcd26TJZUW6rV3Ep2CdwBuQRNR2DxMSKMdjzXbqw5HRsNxN9pFwEUy3v",
  "key41": "4iX7LVBF8JrBrKqNNq8azv7m9CcN9Gj3ZPmTS4ccA1wT25F4FnzLMk7eykg2LSgBXjXBrKQCEGgFXSLthNoWFTDS",
  "key42": "f4UKh4AQKphiZRgD4SvgMroHfWi7wQaEjnJUFeENFknCanLTa9bqhMtRWhUXXrq5B5svAe5h2dWx6wYpsDzeFEH",
  "key43": "oJXhYBKLJrMWfmCHq3qZJCpJ5HouTZdHtXoZb6rSwPEkA2adtKDkUk3NZkiAJfDbptsqk7oynkzRtHUY5nbfGsU",
  "key44": "PdGnq7FxqwR1Be5NXTHkBtYVCrHtWwb9kupEZEVgNGzd1N7hD3HiD1mgWMwrjxnfiAUNrsVWTvetzUMZMomUkX5",
  "key45": "QGvStfBxhrdnKsy7JejbSnZuaS4xg2Auyj8sF46Hczf1LCZZuEpPB2yXCJEJ62M8m6yniMNjfjUNJoEPXdHJdqj",
  "key46": "47mo9eshVeP8t5nP9kNYGZ82RSb8s2bvi8Mrr4tdsT4xi5QwaZbPModVEbkqmaPHSY1K43BYGpWZX1X4MpxgKivc",
  "key47": "51GREvK8GQZmxmXaAJLULB1ZMAnZV4pwYAfQLXDPtbzQgKy1zjUMYncRb2cG7T6pJUyMMuPy6s4PhQj7D9fiAz6M"
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
