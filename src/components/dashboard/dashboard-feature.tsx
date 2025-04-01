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
    "Pm7hnLALjYdNPEbgSRzQ4zjdkvgJ74PnCrB9Yti5Ph3risqSgJo4VeHVXis5cYiAJuGj6ftGbkn7N65fkhjNwhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ss9d2zTWr2Sye22yBqPq2LXGMAJ6GfGLwAhJB1p1KTfTTToyzdBrGA3mpy4a4uS5nAJhzM6gRnKP3VbEDrkzRZR",
  "key1": "5WT6XAwnAXM9Xd13ACh3z54NMsVesPfDKUJVXi1hm2Y4wvwbh5FbCStVkZCyTJoH99JcGEwyRA3fk8BmwqQZwK1S",
  "key2": "3ETB7n4DL54tTVKDVZnSCZHr3VoXpmoL1XeHWQJQsXaaDQgMo7hDjrDizshNHZm8FaWNqp94C3eLGT9D15L8uiPA",
  "key3": "4F1pyLn51Mza8ZgN777bx3UwaYp4aW5GazisPHm4oAZCgnXBZre7TPktMgknQDzt5fZrwWjrMLYWeqieG4ynypD5",
  "key4": "5TFgTFcTQE2rfHf5MBJ4rA97MWyQMDtaRvWsJ7cELwEfKnWg793pR4GsAn5fQ1nDnuGnPis9GFPgnexg7DbaV6NG",
  "key5": "2d6WBhxQgPruC2hmc47LApYNswnwvbj6NsCF8JAagqFw1c4f3zvUiZR9BH7YB8zxr5HYBXgbrihs5DgoXRnAzzSL",
  "key6": "4vEvNvYe8Ej8Cr8RPv6XWqnoR5VDko5v1PLif5W3bFvFr97WvLg1AGmuQu56gyS51J2ZAvxqq1h7DXE8mPKM6uYJ",
  "key7": "1oFvWBBUc9K9toyCRwN4B2q4KrY9hSPc2oL9Yc1WRYMcM7fuNBisGXfc2VfLGX1dJnWXZZQu5EVPBtUiK1qXjhR",
  "key8": "AseRsK9HANE1iD5AM9MxpoCPwhNVSwqKESKeMcSUKYf3L9sJu5QY8Nz5hnPbTQDZqYoJXn86VUAwpN1Gka3Ys6J",
  "key9": "3Qmj2cDKvSVjtXo4FFEY3QmrE7rMfvsFriLoL3X7ESQrpzX3Z8mvzyfkaya1reG9csLEmWCrqSaaS9fEBVLkYwJS",
  "key10": "3aRtMybrZc3QPnp5X3SXtWPamoA1qHL4qMEJAadeWrYug5B5PSC8vYW3dbHz2TVpSnJXxB8KeFBUoPtFRP9hnfdi",
  "key11": "4B2kicDEZdxrWdZeWyVAHcfBfuLA3qgbTZiEK66NvH8CP8apE3uT9FeyHs6nHEdyt1rSZRfTWTDdeB5fsvTTWoLy",
  "key12": "6VNC58tYNS1GTyBbgErfShPuqtyD7fGc6qNEJfRgctvP6XpaGJr95G3vfN97qY9BpWgAqzkzD7rojR43n3AvGMi",
  "key13": "HG21hREM1PWE6PrZM4FhntybT2kRYrLuivnpaa1FKXV6gPQNPfax78EtLoJuQiK8SSxXE6MZVJZXXeyHZcaSEeA",
  "key14": "515Xs7rojpg5YMZGzAYonpzzXeM7BYjwnkutFQL9xHhaGxP3KND1e7e4sZi7WUWiQFRkhp9JLeYsWhUpZAtms81m",
  "key15": "5gLrrcjqRARcxs5Cay4PYh8pV3821wkZEkvZa9YTk8DUrM1QywHx3qLL1rtYcHRii4gxsFZR3AePURg2MuP8pvMt",
  "key16": "4MKJE7mzQ1GwBMtZMBCUhLAUW8Lixn51R27hHGpdMUHCktt42yeXUsv5HTSUpN5DxBRgnUWc7BFFkZjTchFi8vrn",
  "key17": "5ZtPJiUiqXX5hQ6h72tER6NoejW6WP4ZFshrMfpBNHyycwbJMWW84xgJG9C8ccfCN8AbizsE97he52qhmyPqCUF4",
  "key18": "55HtKmDM8GBC75emiXo1114pbP8ohFzqtcEMiXerXQs7SsRvP15PLeP7EMXAwEmWTnkrBUgms6UExsYQQfKNp7Vq",
  "key19": "5dHSgpCnW9LYTGXWsuR5xAYvj5ikJ3bAWfmRaTEan41sX89PZ73zfySxuiirB6UuumBjSdJTvJecYUX5MNXGNZ1f",
  "key20": "4HtFgKbukkeDgA5uU5nCVyCk4ABq6N3qXr8mht7o5DMQkkTW84RUHtoPVttsaAM9x8Usfn3hZ8v1nN9eNE7a4nU7",
  "key21": "5g72HhztrduKnjM5LFvEkqeqcMEZSffu9aWcZEja9jfBV8hCrHyrv3LESYYrHFTJ3BA9ReqUMWdrQSANFoUvq97f",
  "key22": "XCpB87HqC8M86NfkHJeZxK78nPtUC371UWMWrhos47ZSe8QvbptsfoY76eWMHNZZ8qb6ueyiR9xsV3pEHL4R3rt",
  "key23": "3Q3UY9qLt9WeuyD9ZnV665J1WW6boPsxqFzg95jYqyS2bJxkXoY5SyzwNz1MZQQm32PQ4wReSVoxeCrHAzB78pWx",
  "key24": "2eKaA8E8Xk7FDevfvgFiKFxzMuskzvXy6dbXpeabCzqkDzP3qwesJB2DEEfLeHpJ9gJcgbVrqKxyjq6h6McPGRBw",
  "key25": "2Js1oN29hjeqFCWeTU87rJfmSVCiR3DV2GXNrVJk42DfvpjJsrdMw1JJXMJaxU4kNQxxxE9quB1jKmoRNa4qeNRS",
  "key26": "33tfQK1p3exU9isPuFbngAjX8AGXYPgcHkSsSa7eoeft8d5noHHuizceop5uUXZF6efuycGn5T8wPHYcyJkAaBjm",
  "key27": "32R7sA4K4X4HcK9Jca2p4Y7X8oFueaHVZybzboXBxv71DJ7uZTU12ATES5qZiPMRas9CfCTNFjjyPdSkkZra5HgW",
  "key28": "3UDyXTDJgbnGHtASDDA38HTuChZKa1f57NgrMoaBq2Mbc2HK1X36ZLR6P63Uqg2yFSHYx3NgTZRS2XXEyFMzs2qK",
  "key29": "51tVcT7EWypdvH9BNGwiM33Fg26NUrEBMaZASdFKGKrS55To7jkZ2Yhg7fZE9F6ymr83kZpuMGnLJbKZDVKLE3xM",
  "key30": "5zfD4xeV4aNRoZgZKMEN5prrfGr1xptJa9djkboTprvxe9Stqu8xHq7zKnGpvG8wMfdzGevNQvFDQWDdv8Soietu",
  "key31": "3CMnHDqskgqx2dKv2yEFRvjuhADSca87qy2XPsw4MucEVhVvTDaQAPQTMQ8mSB8FLcjq7LVqonafJ5EkHW6Y2LS8",
  "key32": "v6Ej7MBTwo9f4DSrSzwKYoD4S89ptwD1TwJTthYPxDCi86qrSc8EgDcdCa1zGRxvco18axvmQTaZf2nn6gg32Gm",
  "key33": "4N9hs792hPGxUpZZeaGq1wf7KVoqxNSEaTX4KdDFKh2yaSUoSZkV6xgDKvTCX7xRtPfys7mxcQXtq1Mi3hz2W946",
  "key34": "25pucbTNq7SbKASks1HKCAuaQ6Z7kAkbZxXZfU8AHREUe1hqqYBU7tmimUjxyiAX18FjYMJ2mZRy7bSzW67fRxz5",
  "key35": "53ZtQGmKQkfxoX5D69hPBu3nwDymqutm61TadvAXtqkVaRBxfWc5c4f7AWFDyXj4SctD7aRaaQK8EQJqUpavC4F4",
  "key36": "53Q1yZa9njVSPJtdQ8WfxA2SE2AfncAmpjeN6SkKSB7dgvAWyReDCCkCHCPNtQWHozQFCNrwrhLhdV1a65KZNsEp",
  "key37": "4w5BqaS4Fye7GweWAvZDLSQv5Zg7g1rgukGbFwxTcNgKAAETfLJkDH6bN1Sh8BBMMcAg9a2EhDyVh7c2SMeVp84V",
  "key38": "3d8Ffw9MDZEFrTxXkTCgepwGicZpdRVGQkYaMdXTY6EMsczVbg9v1V7W6Xn89gCSijp9QewLTZu8pcnPz95q4g8q",
  "key39": "3tpgNkUG47p7xPH8PiwdWkze4jLxmy5naRbh1dkZ7eFaDyuDtsPYt8HQc1bFaw347a72MQ1RqcH5XrjAgXKSt3bZ",
  "key40": "2Ripe2XgtdoDqJMKbgRkrFFD8bcCnTvVsZhdW5UjzuecvZCWUdZk7Y4YaqekykXW7TRuzBgKZh7bDQRVFNV2uKC",
  "key41": "5fjknKpvb8xQEdA9yvQYZv3936DNBwVKrNXWXPpH3Cgn51u1ThEWm8VU8f5ScoVh3wJQv8Mt2w5soH5JhAA7KiMi",
  "key42": "4SwRQERVG9ZbsRpyQuY1bdn8L8wFAhqAWoPkB2DSQFnBTwvy8gPdZmyfNWDnvCTZQaBd2J1vNqwRkwMfyDmmrmhZ",
  "key43": "2U1URVja2ducGyfSL2kBbd5zVDH1JQN1c2at32Hkj6axwe4FpgEEkRBP8Y8pPWmk1FrxsdQnNZFfSrHhUbsCmRKd",
  "key44": "56yPgntQBMbhzb4fFqtcPwrk3UgsP4n8qsYfq3uXsahBKNnejiJXcV6ux4neos5s3zM6YGPzdKnSL3yGc1WJZmLC",
  "key45": "2r9WkdatqtitG8aiab8ojgYiDAfvJ4ZWmYbmrSJvowSzesDH3VsVj8WEubDfwMHth3BhH5PjsGrUdBQUFQwdVk2A",
  "key46": "5sgJPfm54PktzvNA7Pzk4m2ANvx7oyPGVHFuPTN23m6w2nw4FLLU3dZo4AH6Dd6P7T8gWbCFDLXqo5GcTjyfs2hD",
  "key47": "2D6kV2yo3EzV8nwyTwg5tzt83T5JfaEPzHmnh1EXYvhEuszUrxsRx5ZAf1DonWCgLjTEUPpeW2XSnnqDyxQUc5iR",
  "key48": "xU49yYX7NTiTwEV9QPBzfRqrynLsDVvi6R4jkwz3928ke1XbCzETuuRT31Z2CNfhTGU78Mwua1skU1dsnZMLz9L"
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
