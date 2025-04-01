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
    "5DuTUEE4D8RB6BJxpdc1uvC9i3efhD61zYmkGsrmDXLxm5efx5AMGHCwomcfQECTBNAs1X5FcH5Nz9C8jpZttRJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66yKayRD6MWw6CP9GN1aNDt2SsyuEQWe2oBsoHEWPbhzXDmoVWxv9EDUJJyu9ycy37PNNLnTUjRQfkpcWwtrE7RT",
  "key1": "2p1oW3FMtn38mrydyvx6hTeGRvoVMeBSGxuZsHvAHofdiq2gJ8ogjDPZJKsUHFcokHMAhHC8GhYeARxPQ6Ucibe8",
  "key2": "37JCm71if1Wvi1rKcz7H56g3fKPpE3uUVjqsXNdpQTXXWWL7vtH2KvqMH9afCrj4ESBc4ArBmraJc1t8ZdeBKvP5",
  "key3": "5JVmKfYfpQqgiqfDqA8XsFrmN2vehC84mk1MeMJwc2H18RBsVuyQPfDz5AjBb216Lswgo3tUbjXr4ZnAbks3AQYh",
  "key4": "2MRnqFQmMY4kZwmNJR8PkGukyoWr9XeL4gevDGk5hjYEk53K4QTqySoyorAJQCvrCNWE3F9aVhbaxA5EoZt9xbv3",
  "key5": "5MibJcyvNb1TL7S5CqA49xj6MJMpwjxWuXDkC9KdVpvKXc6B5H5uQ8jGoMCN1BeEs9L7UojsMFsUTFiJtUWGA1RE",
  "key6": "645Lg38CHMVbAmYE1ppJY3bBmPjFySCBtmCYMF8LvGLt8X1jA1BupdMH9iLMxuth7mnZKPPqcKduVyU8T6KZ8H8P",
  "key7": "38BGNxzNfjLzfRP6EF7tH7sjhv68FPq2aLpsde4BE6oTHrHxoDQuqpaEEAUSAX5PhHiQxcUcPDNZgtDSbsqxuqyK",
  "key8": "3w7SKU73H4CLsBUJWckRKntAtpDsPGKMcCyLBnD1tS8tvoUMKhAkAQgAdoi3iRfAbDXi6jsyGXgmY9Wow5iUYpfW",
  "key9": "DguLx4TfvPs7u2WcWMSiMPS132nPHHXwZmLq4rEavhHVKGQzjyX2e1yTy9pRbSSBVATGe1TK7x5scNuFr6hnRtE",
  "key10": "2EmAUBhBwtePzufjFabNoRS1gy3CeRzqNBYJp7S3FC2j9o7uUa4LFiNpVKsV3SeYY1qMyahxpXYSTj7THosfd793",
  "key11": "2qYyknVKVCp4gLWN769UbUAJnC9X9J25QJKLiyemgqMnZ7ZRb5v1TtC3TGqRQr3rf6e1QVuUkEQnZgd8BSCi6Xq",
  "key12": "2oBzLybyVf77Dnq7ZFVy7MsgmTH8CMafRafWXVmnV7LyyURPXknWim2y25sbsXFp8bj9DoqWTviwBUAnkUwArqev",
  "key13": "3tFS9t8oCAoc3YeGczdLfajLJSoN9JZ3befM2hau7EtPREEAGCUHmBmJdFsM7WCYBtXwAEBur2sVn2vxc53FFdSx",
  "key14": "4GyLmdfTyBXEmC1UZV84WBk62nRRkoiU91ModvMmu365qGE2boN7BPRLVVG61pHGcAtaXM61CiVSkhCpVxiN1sWP",
  "key15": "3uvm8fL7EZVDshWtmqRgGzhrLJWgSV7YKhRRpgh35yp55ENHUoA3CqxzeREfJxK5jFcBryaJhGkawx4bMKhm8Wj1",
  "key16": "2rYZ5f4NiNiV9KPetY8hfX4veWLFb1sHGJNXWmVbTvsxn7MZMDJdnhq92Cu9qBgvHJh116UFfaf3uULHm6aLrHot",
  "key17": "3xeZapiGsZi4ophP2H9xJwTDNXc3E5RY7MZGMYE39Fc5EdiKEcxws2QESTqGV51qFXYzmrPLB84WBy9chP2FX7sH",
  "key18": "3ZbDf44DyhqQjqhRJ2h6UyEzQKYJk5XMRr9zypYUqhD8MRQ44SRTPk3CiS8RW8tsTC65nCdpmxKCt8X27MCoT1Ec",
  "key19": "2iKEipzgJ4SNmDFW4F1ebwZiFpv91BXWneAksXp5bgMdgiEfqqFGuSvwQh3Zf25o6mwCqRTgNwrnv4d28KeY6UNy",
  "key20": "4JiwSLtcrjpTQfLz57HFFVa93GkMhk11zzTsQ5EMufrT4LEo1cgnSLuYjzATJuiu4BEFhEKFx4YEs2Z4rnf9EL5X",
  "key21": "2KdFXcVbn2mTviopXyKbNftD8Qe9kFFGk1grS8DTYbWPUqrsSA83XFrbhK14KjHGQaF5zV9mtHsM9uBtdD4KEyR",
  "key22": "4PQvV6ZK6sSAeBtT6GKjCm6RTGYaehCaH1cTvBoynjdg9nYUMZKpP27S4aVpbdoMiHWzkAzZB2eDeZnpmprv8r2A",
  "key23": "2J9yrnhdmWrDRmSFuLWNJtashMzQxprC1y79XWScCCY4oAUXcus66cXtptWN46VeWg6U31ZMky5KhmSF5zoezEwV",
  "key24": "3Qko5xNTE694STGTb1mNCZtkozomPtgoq5tKocNHvSDVBdivSzCdcxwbeJou5L66pKDx6p18UbhtojpnfHK91MUH",
  "key25": "2qsdwmHMUTaY7P8UCef2jDG75pD8EyxEMXd255BXG2ojFJaSnN1ETfrAKqUL5X9np5Rac7ThvQ2HjnhQ7zU2UwWb",
  "key26": "5MLQpW8Cq7edvejq3TR9qPreQFySnPwPm5i6RH2yJRVs8EiXgyviiHXRM7GTapErGtsiJCrWkD2KemFRz26TiXcV",
  "key27": "4pr4X7HVPFEKdM4M6ZvJEijg7bUfLp748G6STY8GZHGA5pBsdNjqFLahj7cXjSDL1Ye7EMJ9cYMwk4RDG3dHrgg3",
  "key28": "3FNGmVoU3t9kmqxsMRc1vTEeveEhBcdicZQkJvEx2VU4hAHvwUAqkHJKFjX2t6Y25SswtKTeS3qYz7JNshmjgXBD",
  "key29": "4aLRxPF5vq63djUZgFetqMXyd5EpayDhpxxvQQ16PRUY17oSzoLKt3K6FpFGTqPPC5VxGUTuVxZcGs42Uwen5JcB",
  "key30": "5Zje8hfYKfgZpFHZZgFi5PtyrM471hvmDvgke6ZCK69Eu7LNDk7oHABdLEnobzYaXLv7Bkt12Kh4b7XEzGXjYDNV",
  "key31": "3wpqAeQqgiWCp2oX3WBmD1WMsjjv3S55fn2De8kNMwwtEh4nMcAgdZdksbxrHGvkCNgSvd6pV1JTzLUxvEeYTYYE",
  "key32": "3DLGfYTcQfCXYs6ygeWNArgBzmujSQ8xAtGDsqiwe6Eb3nZ65JkCskRZFbQei9Nd74T9RDvn1AYdzVNbmJ3mhzfS",
  "key33": "2UXGKYVWq9DtJHwPZvBVYCbTZfLcMopcfJaRr9pEZpzDo4znzzx6hCynz5FeG9FsifmiqPXxxhMLYY1M8msLprnt",
  "key34": "4ZE19EVLAN6MKMfLwqFpkzNH4Vzf5ifkvRq6Sw9DTuax9XqQRTkmtUunLxWR4JCUTbAwvoX62m7vQ6qKAsGvxCQ8",
  "key35": "2y8UQ7DNMWfLu6bLudd7ifkHYTRCVp6L7LUTxk3iikuTTtdvDHED2q6DKBWYhku7DvXrABmN4PEKpXohuVYBS23z",
  "key36": "uEP2iH4udk4YhswsWkTQfMygq3nJEUQMK16fSZUXcUWknTfYZ7EhickY8Pi4T7TTJqiJSFoRDp7EyoNRTYaPNk1",
  "key37": "3cedcHAp4d1qLHv1A5KP2bVoH4Tz8xDNJeXQYeok2q5mTYKBtjTmRZW1PhQdA1U8FCDb5Q2BbvG337SoXx2m9rtL",
  "key38": "4HZJgLrDKtZhgVmGMVdHC9PfrhrVmNQkHkHsGqNknqMcR6MoHhBPC2FWhguPXPB2itYun472As8bZ67cbmezNB13",
  "key39": "e5G6tMH1VUfh46aG4sTUgbxGUSxsf76j74RXy7rm1UQhB8Z2rkw55zVioM8tYzukEZ499oqSjkhcjz84Y9a3kzQ",
  "key40": "4J6i3JfLejp1oRtCCjacBHiGGRDfW2vYMNRjFSQUK1dZS36z3DjxErSLGo2WrbebK3HxFozSYSG74zdbECn1yC3",
  "key41": "5B7FWjQ9DYZwKQqgvBJoxfseq1pe9fsFCvpGWyB7PAkZrd9yje6ZfL5vCYMGuq7nFReP7e7Ea3E66FLzugZY6mTm"
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
