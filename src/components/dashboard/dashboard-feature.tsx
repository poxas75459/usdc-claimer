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
    "36gzZ1RXaC2xPH27GdeLxx8wqoFMcJ7zQNN2pW192ZPxp8WQZpjW6GUiXFFdZzEdS5PNBHNYiR75ujRbnjhrq2b9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eJyP3k5GvcEMvJGnxsDzScEbaCUm8Y6gGkBd2VKLyUWGAnSDKwqNhQdnCRmestfkCcyjay25kiK92KyW6ad6QGb",
  "key1": "25XZBTbBhhXTHVaWd7SEvdoTiQVcRA8p6zVZ81LdedH972xoMArRhe6DQuNzunEYZRsUEMmGSNr3HYmYTRDQtBgp",
  "key2": "5R5a2Rd2ww6a9QvCejQtCP2Ca2gbHKfTVLT6kZUu2v26txtTp3UxPp8LMVXEFMy5VJVjSDXUe9MZMsHa7E3QJ1Ur",
  "key3": "HfkMU7YoL9xjbrXjAQKw2ghtUBfNVGHDmR88fJ57LJJj4qPPW8D73wKKVo7aBreJCqjM15uTFRHG9SQsjgrXLom",
  "key4": "2MZXwpAqT84UjyMcPYmi4oitbHaxfvUDXHbNR4avCxfcAG5pZEvd6WVuyPnN8xUqGJT2PWZRiiJsVu15dgdxyz5Q",
  "key5": "62dHCepYc8z36yU6TMyAEtw9qjDxV1zJHoyGPVGic2uVSJgdKnRG8gshEuHTU9i79Us7PWP3ZPzzjpa9JMyh246u",
  "key6": "qChXAiwGHwa7QUcmPrnnTmNbs8QMAHkZXKwDxWoJ2Xnk35N1JF8gGqE68gfBGcKFv3iQudPk2eph2Sx6pjNBVns",
  "key7": "4TvahvzmmAEic6MctxT7LZ7ULUfqqNuHdPz9tBGcqbUzXwE3TbKohSYfKXwcJAZDmhFmyH3Uhxije59o9VndyKzY",
  "key8": "2M7VAJwUdpuqKqzq4ZaQNBGuq16Zjs3YzsSnf3tubdPESJxvzhQeXP3D9UZCbgzJJF13FQwFeDK5r2A2iwfHr67H",
  "key9": "62f6kjoGMaEmCH6GTqm7NUGvcqqiZzQbEmsdNK2H2ZtLkeNhZjzy4LtGotTfHrbNudDB7UVDYvxcATf85ym59Hhw",
  "key10": "2u8xtEPPEs2215DvRMsrHQ1yfJxBzxBxjYjfqR2xpKKTGXgeDkfs1U7BHGG6SHxj2padpnD2ve28ooiaLzdN3yGe",
  "key11": "43kmBw83cPNRt6t5KfCfjTbiKN2PHu3nnvJ1cdrYX5uQ8n2uSU6ApKUQPfLUN6A4UGuosRMwG8iiB4fnYVFUZw5G",
  "key12": "43pbRkZGjULTmCDHaSa9mVJUkMpCq26GVHEuKgCwC9FHVPnvziZXFLHktVkjWxp16CWGhL8UYxcLxHgnedHbUXFt",
  "key13": "66Nvw6uwQ7fk7mDkHMiV4EP1bcatiwLmSY2Age2tiiaDu8E5vXrBEd52mScqcm6g5LnUhpWkNKCTQuEubpVNSqHV",
  "key14": "4y8VoZm3ApfNsifJ7YMgHEo4Q3Bqf3NEYCRJXrTjGcUCRbWvDm5EgfvuZbtoiZ6NX7EhuWTovjGiw2YzYx56NZLT",
  "key15": "2fZB13QdV86vsfnrgjogC3Xm58knbTjGuYzWvtCLV9DY1Cm2hjmLchAqEppwoTd6XFcJ9Jcttqco83cgmUYavAzy",
  "key16": "5Pk45VuAyeomYEfNrsuukfq5kmTwUcrrjWaK3uLmEuQPktsxyoaT1h1ZjAzCRdQgwKMFvc8g1kZRxGc5WnceVwDT",
  "key17": "4T8ep8SMj8TyJr8PVgaAPvYrZH5zK83Vz7x353ThKZ3r5uNGXqbeorGm9GME8VqaFFGvcFdSukE4UR6WDSSVrahF",
  "key18": "3UHcidSu4jVyfJuZocXyg3iHUt879u5MnUAaLk4jeAHDTssLoPtAPZavq14MqkbeyG1MFFkv2UtkpTA16bBh2G1i",
  "key19": "2cwiv1N1WTcG5S6aFLYuEwFuhr2yVYh2XMmriAPFrUgEE7o14NodqPYFoPxaRgWaC5n3wJ63TCd3jyPcEoXMwSQF",
  "key20": "459ZfAWipkcsxDHN9HozyrfhPqK1C5Js1Gd24aasDSiqrkhcFy6QzKpemXTvkjQ5LkKkW6TNdKamHZjxJkExzXkj",
  "key21": "3DawwEodTUKM92pHovNPoyFsC2adSb3BuRkk3ymYtdSFJbrv1DwfLyem691b3j58GdLhDJpDrA22BQpEKCET367t",
  "key22": "2qtdRfkCGiWN9Kt3ZUZbnHSXYspWoa4vFCZGPrmXqyfho5b7sRiWtXyZYwYnXf4KqFUK9uqt2YMLGnjf3unVR21a",
  "key23": "4PkxwVmZEoErCiaFz4krXTUs9qsQX8GgFjuW2DjLabkWpAWDT5obpcwsofB4npVXdfkZXCABz7K6FAAzixoNaf5N",
  "key24": "2ZBjQhwiZB5VW8WT8dH2YqxgTqst7vrYWryp2gjPMKquv4WQjGVSxbRELjscPaoPq2KgNB6FbA1TyYKnjDTu1CHy",
  "key25": "4BKn1nk8BC16QLuSU87uQt5bc5nKo5t1qiV5GwERLc2ECsu83FUYkvvGDMs73xwhAz5ySNNB8SN88ffPNWWUqU2Q",
  "key26": "123QtwGR6veqGTAy1TJQn1ANxS7mF5QyvafRt3z49QgECd5kFipiNPBgMmerBPrBKcAYjUmD1mwcBgv36sn9AZXa",
  "key27": "31L11ksQiN7UShsVqxpyMkpLt8Yex5HJ2GEBz6cpzkZJ4vXvXvd8y7GHg3M46rr1dWVg3gwZbR6WvdrHL4o8Acu4"
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
