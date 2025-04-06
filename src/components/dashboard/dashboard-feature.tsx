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
    "4U84ozFH1aWKi1PoF9xKdMU8aY6EYSPKAqoSXUmvns8echQ8aKGofhr1havYkpcceKZaFwwZLwNQGdUFBjS1BFZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UhkvfshVkWq13HAu324QmUoT8Ed2SSX4bQNDWWan51dfKPuRf9SUeAh7UJRsftczDA7WcAwE9t2XSi36p7WA5YE",
  "key1": "2u9JyokHCKip8WZ3JPuVBPyub7iwu7sAcm4djBQrD5EochXhxa1u6mDt6c4s8J2gcC9pMmbu2J2GxfSXkxnfg4R2",
  "key2": "41Pk63pG79LHSj4cAVBUCGA3H35f8ZuiAxyvjhrAt462aYcdkFQvf49Ez54GroiHsdGP2oJy31ZLHembyBrQGPKh",
  "key3": "5qgngktWQXUW17P6jXwr82bkYKmPh4HgF4sBnpK1xQ83E98Z4fPXZfGnEEU1cEJKAJNaMrhZGTeHJXRhU6p2gQZd",
  "key4": "23TsdZpqC3xbLKAE2FpQXWH5iBXbzc5sSRGykNL9QaTALnivTBmWCgiNiwXxDftAmB4Hwu61RrAu7tY1frph5nMy",
  "key5": "3X1R8w4oisd1fjetpkQCjaSpxSzHd6RzVkd6gDhPEomjqP8zZWEXd1J4nSCy9cUoSnP4yS2JphDNpsnjCgtptBF8",
  "key6": "2tbLyTvxDw7k54JaPX1jKCgDhZKrFQM9oX9wn3EeXdbaKjT9e3pQPtQTfBQMxxEH3hsWV6AXV26q1K8K9q3jMZ4Q",
  "key7": "4upCUNQinE4zKTXxLEZjqp1xdtkqLyVaKXafRh1CAjqgavj6fr7zAv3CFGywYsgTpuFbTBqnTk8s5zW6Kc34Xgbf",
  "key8": "5vrWqjMTvH3mGGsg1ANVYsdvVjE1cEwJeFzU7aBeAUJnyVoKgjVFEDKdhdXwi2D17KHJ8evris33U6yvFgPvJPqg",
  "key9": "2HdmNace7zRmcdiWabtAJaYxZvT7wJfV8ycqZ1cbwVSqmio4ZFfnrqAuaxtA7sSkkHDDt1jTU4aNPL6fRgCLPEtN",
  "key10": "jxAtPxvm3D6AVQM87V2iXPrAgPzEFphiJ2sUJ7iuJv8uCz4x4LDDSSnuf2tj6RkB1kFmqKmPc6SbDdQGVeeQBwV",
  "key11": "44WKk2XGaKHSzVQbmrREp4EDw1s6ZPzR5vKS5FPNUE6ohkDvfNG4k2zAn5zs9iDqHwBRHN124PBS89CoU7A6NQGg",
  "key12": "4Ax9KEujY2Lb9LxWja43h3CJn5tnk25FYrKKt1x7DuNG7VvGBspmramaBiV8ssAq8YYoyWb7KDvF2Gp48uf5PXv9",
  "key13": "5Ji6KGE5xPv4oa1LqHGhGeDfvj8BAGmy6bsxyzbV8aFabe2NSv54TWPd3qoxvpF5Essa8CH5jnnTd3y8wqjGkdfS",
  "key14": "sNYWTLiu7czD18grj6stK9eB1YoE9JPcLm1jMQSiNVkxSFWHaiHhiPVMjS9JkdtznMNhqszw12obr8QvigsU23j",
  "key15": "3V2CcFKu5WAtL7M7qpVC76BjRkRDR8MoWu75ojK7rxasqugefX7omLSP74NVGGKqtTz1rAogJMpYa27Vpko5faWP",
  "key16": "39oUsXdPk9sDaVEDCQbNDWEuacfMBKdtvzcYspNUKThwQ86LZ7QnTALWsNd16rwmRZGvSmTuUCexRYwwY93iyWoX",
  "key17": "4i8madxMGhcfcfKbkXiiFfvCGamPrmWTZv32JtBJppJiQLGZ6QMitVEKXWkUy6EpKkhxaZhVwHyrWTES17GYMTQj",
  "key18": "81N9sECP5Mr5C8LVBuKmqunt2Ra1sR7ApS3a11qCQ3T7SRz2mght3WBf7eew4wMx32YxbL34hrYAqgX1kLiURdk",
  "key19": "5fjaH6fd4xCiQfa69eacAc8ApTPdvPKEPGwVXqaDMt8TEdzMmy7tqVZYpzpVJcgebDVrps16KQ6fLUh4JS4zd9od",
  "key20": "3QJW18pmed4EgmbQh2vCx2zKkain1Raw3r5Y14XRj64Vrxewb7yidM5hNbqDc92oD2UCNgJfAJJfiqeqVidWYZhD",
  "key21": "2RWq5z8evJP73MfwizXzxRddXKQEXPtJfabwFbTsWYbuUsYZk53dfixh7iNzPfoe5D2YQ42pcrubktrnefiwJL75",
  "key22": "BgGrmuxKa8B3xu85Vpi4HAT32ror7GEQk7E7pKA3AKQ8G3DgT5ucV1eM7FVtu8jhzQFo5uAb3VaP1frB2XZ3Fpy",
  "key23": "Gp5UJGfhH5VTm7ZJE4HEbKwLFwatmJe4BR4UbTmbaqDQkUZUGMjm1MB6tHsGFKuUjJqUZ4cx74uJFf9wBdD6wEh",
  "key24": "5z9p8MRLRdzoV5cZyKbqNsEzVd64T4xdQGX3rXCMJzgQAWGwimWCnoyNH1vTht4LiG5UqkW5ek8EWNSdp39RLYhB",
  "key25": "3DGjcEG9etqVyN6BHzBGmyu5TWnfW9AMzwgzokCuEjD1mbMDFLRFhdsThvobQE7mepZU2ccXd4WxtGi7EyzTS55e",
  "key26": "3HtNVeUSzpM5yrKHCAzsJuHaXGvyifcZHN6NRfLf3hvtfkdB14py9aR6YaF3466PKG58ZfiyKgUBFfhaGPD5hqXe",
  "key27": "3Dj52zw3Z78HxTfMaazfnq6ShZxDZEtZ9EXG2hmwfxxTQHFdzgobc9rMXV8n9fZReJga7xmm8HbWiTYrVALbG5Wi",
  "key28": "4NmJGv4Gp9UdFR7EAiSZNBCPTKJUoyHhhFb2usiQzasPKxt4DAizAMa3tsqXCNWswMFAWvhnjHoVTRjHGCbHzqcx",
  "key29": "4JsDcW9Fu8B9hVadHJkPjwCcZ9z9VV41NuYoKMwPGwMm3VK9MmenQouxsaNrWr1GrtwtV6q3dxnaq1RbzpMPqEU7",
  "key30": "3HgM8auw7gHZQrXeXmvsBfcFTTbVKYjgmF6v7UK7jvBoxQrkN8kfTv7TzphWRvwFNo15ktbfjASPVGxYcWeu5YSo",
  "key31": "56NMFWhiEbBa4foebWHnHMG3gNyaCf1oo2nCVwtQiUrmE3Q1saYSchAmb742NeXSXTL8zq6QCDxDfQ99tvKTX3xD",
  "key32": "612d8mFrneFDAd9phVP1MGSKTtxm8bnQTVHivSkmbXkRUdDHgjTxES7zezt6xtkuBPsyEYQf5LKkszoVmjW3D3YV",
  "key33": "2jdogCjD7c3kwEhhWhQJGGh21zGeP3S7ivCVpH2wfuxDHcnMJhXukm2NMDGFLVcP1SSJSoz1fnrgcozXYXt5GCn3",
  "key34": "3ZHrr2X7xuSNmrKxbVDemi8P9mTW7kMj9hrbQX2xF5vLTF8tqjx4BLiBfFYRa55mmRAyeG46v8KwyP765itd4BPU",
  "key35": "4dZdTjTXetdRAPcV8LHMvbzHCKoP7nXx4exkt7BWBw7j8shk38vwtW6d1SVtVDQL9uSWvP28YhjivXrp8t4qjkVo",
  "key36": "3JVJBN1uqLtfRuWLgrb7aeK6GhHhmDxizRkuw6W1qs89yo7gKyhfuwab7RorqXWgLAJ27NLnZZeizkfEaDvAnCdV",
  "key37": "58HpUzH1Yr4Feo3JVRgoepmDc7Ap3EzJTRKPZwsFxsz5otk9R8cw1dZgsjMnZpB5n7nXAKQxmbhpw1nxsxeM72Nr",
  "key38": "AWNxVEYBPDFGDz5BVEu7MwMpDFJq9vNXe63SpgX1Aedw3x6P2PPjamU91JyCpHBEy8A7anDKxJDnEAn6BgawBbQ",
  "key39": "MkdddnR2iaE5oSNdrCUupz8CWAYRyDCPhrbjsv87qBU8XkgXM1ih8dAzbznEh35KzvGPfis7hS749TTPXzb5tcr",
  "key40": "aZB9ahpuzbTGxBXxnU4LwGMFaEAj9PrqRpAG2YUR5T9YdNDyN6RBHhtoW2Fuj8gFHaVY6WWuVJWzWWN2eswoL14",
  "key41": "mq21rfd4MtEvaa217aEveQeTSr4QT88ikS6LVcSWEEWox9FGibYS4bCAThTFSeKbEdcR6vUPczADpHNA6c7HDkD",
  "key42": "v87SVJcqUAgsQEm9PaAn7DqEjWVRXgRm3R6uRSeJwyQ9WDyqDEaTYjWU28VpknPnc7X6ERa1EVfLnsEmSrQ4Js1"
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
