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
    "2y5L5AFQtF4SG4m6nJraSKpH3bmaWzQ7d7FptF1k3mziyYcktMnXRDPRPfBTHZnsZJir2pMqvgKhtNyYNeBXtgp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43c7KzPWuTGi3dWj3hDLi2qrdyYF4cCHp6pguHpyc4JFeXhSWQ52G26yf3UTJVqrefbqmigTfDSdht5tZqrdP7L4",
  "key1": "4ziEX4YLLtrkGSqVe6D4s8pdoXyNo5LaWnSwjzLzM9UrADZofEWWVmqWkgMG462SrYrMzzab3F4zZw265LZQjgjq",
  "key2": "4fTbvxUtP1YCdY2dZh7RdnacosxA16LyuVqXYH5ceuPtDocNqghh3VTyrjS8tiUMUEfZCNCtBCdjPEMyLaUM4jRy",
  "key3": "2mgurePyMVqzabJX65Xb4nyLdWerDtsVWnyY8bc23AQzCEJqCFRku7JfokAUmSkUwcBbJ1JmHo5u3NqK5cGhHdTi",
  "key4": "52iJgoAs8GKLKE4YyQmcJ1xftJ3FxuEDQQQbxJaVZ3R9CBrW7PNLyTgsrhotcjA9fhAyNe5Z3R5xxqADJFNkE57Q",
  "key5": "uuH8Y7Uqj4QfEkpmjAQ4FvqiTrgSo9vBS2rYm74NghsnifLvJHLen1uxkpyVUe3jyv7evJhuT5eqXYV9f217rCQ",
  "key6": "42DyihpVG78mim79kZQTSf1v94mKpcbhwBU2bGBNpMYW8nD9q2WBnBscMbhBnsrikCCqr3MJ28Ey2zB8QRVbbdRY",
  "key7": "3XNpZLCufUExmdnFHqXsHi7HAAaxuiRyRwNM4BqhqRahUQ9FFKWGphPxzxMDmxHePsmtgWSPEoLeBS1jxudrNp7v",
  "key8": "4Wxf9SUmUgN7KoezdSgCTEXeU76SYiLmpUXDmArMpTEbsBq6wiBnu88S55khMrskjGuAoQUMdJ2EmDSzeyEACpnE",
  "key9": "5eyEfGcodvAfALq3ZfV4ZyTbV1DaSJuAV5WUVp7ZxvNoRhgjfThVtQHqkocu5Y9qc3A3KBhLPC3N7KnZnDW3Y1Bh",
  "key10": "4uUEEQespVohajqjgvcWdK7YdPb6x8nZqd4sbD8uHC2aYBr8ZjSjRdnxqFSMrjeMGuUBTRoMtSxYyxCL3Px1NB69",
  "key11": "2j7ZLs7VBUjkjupbKzy27c5ZaqhdDVw4oRdWx31mtV8Gfe2JnxkHcSQtm1ZGo8za9b8aLqhApw5oHtPHdQ9eGqFc",
  "key12": "3N2gArpiA131FCkJDhbAZRAEdnaxTviENCEs2EApszRQK1SwS9MxqK6HJkoTfJ6XKYjRaJAgA7YdzSqFTF7EyxF8",
  "key13": "39zFj4q3nZ2xGBwUDfn9RQdrViehbeKJCjWfdnVLD5MvAC4Qh19Q4bdSw6DSre4hQrhnxHkGfDG9cimmoPekz7v1",
  "key14": "2FuaEzjXqtpUf3VptU1b3AFpUs1hLM8gScybZedQ8nXTJ3hYe8FSXzWQ7iBEsSjxsxDmztef4EoWGMzyVvS1mSoB",
  "key15": "47GSpv2aJaJAvBGGQaMeEoMn6vW451c1RiTqwRBwJDpu41obgeWfPCy6vKn9y2xaxTtwZN54VqsAmZa8x5Eku7Z6",
  "key16": "XKEm3um2gywBR6w6NMqFj9LHCvNaPUUYtiHj3dYwrDXVfVbu1t2dkWrUoe5keDzec4crnhsdjd9tv2taDLMkwam",
  "key17": "3GWddRxeDDmzEhjjWN4E5k7h6HCYVcxEs5NmavPLjLEns76zqWZtBRDumxyVjsnWkGWzcm4rMaJEVg35URRJtoHY",
  "key18": "5VtU6RaG64dmNV9oZj3sFXbLLU2rT4R3HyN9ts6hBS8xrTTjbVzzQZv7fjavcPKNCymycJJuSy74A36tToW5msfM",
  "key19": "4V7T9embZFpWBE31GqKv7TsVTYR9K2AngoVerM8Qn14A4mdNiNDpRQ3tP4Bquzp6GbLxZ4XxqyBzVTAeUAAC86AL",
  "key20": "4MdCXcEDb9nb21fwgYZjByRGjqy5JaXYZEhRWKZXB1DQTQpFpBP1PRDXUsSx9VYXQ5BrqKbeq4MRqNymACsDEHmz",
  "key21": "5rkSrCHPc37sBvSid5wvydztH4wRvsTA3DtxcDCeywip9ySWSouhr6bdq5N2okzCtHGPDJ94W2HZdaa5YVUuw5xo",
  "key22": "5HUjiTPwajY8wVUeQ9fWa3onAKA8Q2NdkcZ4b88Qt9tYHTz4VPqyf7PBZ64WPUZT4FnVgH2AizK6FTrAqE2octCY",
  "key23": "5bDsBrS1VaWvS3MZJtvDZwm4Z3grWrtZ2QJUPGXFFa4yAd9uwE3PB2nmWQhkDVUeiVrzsn2qLNvWFdXD4spiHD7j",
  "key24": "D3w92cfWg2RBNHA4h7dPuMzwQWvRUdB6T35dY8v6rFhjCotQ52rJJNacSNoWd1uszNEf5XvaSntBRF3gici5XEk",
  "key25": "2gg7H3vK713t9vvQ9WG6MQXibhWTcouZcquv1Rn77XCpYkjiSaSdbGxFpDv55ZhV16WKssyUHicxeLEryW9mp2WG",
  "key26": "aJYfmMBtCD29LP1QdogCWxwurJZ2xbWeEtYi4GYPict7NcxSShfPUvDvVvQjaYNiXy1KcCrVqEKaNpBqbFdwXtj",
  "key27": "2ArNgvHGxaXuA33vGXrLVuvDFkMxtrkf37M3rF1yRk8xWGiJUkZT7pchjeetbcrriQzne2Rv1K7XuxiBfKyz6GsE",
  "key28": "5mhgK2vhphNe8pE63s9RSifS1hUvxft4zH2DWfeCzecq8fbANfpuRHATWuNvmNxpzePJUak9ETokGD5oA9eN4ifq",
  "key29": "8BAYh5bwc2MpvMZvb6Fhje3PkYKTXkXW8QoMkXx763TyWzgmVsiy8NXzsQ1ow8YVDbVcMi3pB65HiNcxfMP3XRz",
  "key30": "3LCff3FcSGcf7bpGhfEHPf7aFkvw8WeNsikj1yNm8DwocQ8zJjesMNzadKQhALi4sazB3eEGZ7aqdJCfSCjkKy5j",
  "key31": "3WnkQKyCZhEzYDRYfBVP7UsGtYtCNUS7gbfpR1vPrGdyCdbwirMBw5ipLX9bREfG5xcauRpH2czq7q9B16PyCJvd",
  "key32": "5RaiZUfbtR12RB4jpYMF2CuSo4q8cLXrFWBeihQ2dE3h6fswA4T4RY1m23CZ8eQ3arS1gUxddC9KQCS75rCVtwqh",
  "key33": "2SwHdGaT991UCSsJbWjoukJv3N4dVpdRcbhdvaHZkepbr3FqsjHtJ1JbQShrMHMTgmpfzFxmatbDtFqKe4bqz38i"
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
