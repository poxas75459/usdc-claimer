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
    "3skYsE2qRMovkDEYLv3cYhvnhkY74uxuPoyf1yHZsFxakzT91WvnzDkvx136xUvRgWy4yMFCzz2wDGXa9dF6JzFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PmuYnGUGKsJRxLWM4zpBThc2C4eH2SYK5KTtEZEafR9PhnQoh1xTzkMEG78yGmTaTLqKHcwwsHxTPQYqJgCpo6J",
  "key1": "5qxZsjomLzoJScSyDxeBb6rx2dAbU7DHtGEQw7js48Cqh3EvC97RSe2YvZ6xp8uyyq8DmVrh3ukeHr4iX33j5VMX",
  "key2": "5JJxdvZqgvcn8EUSew8pTGmWv7o61JGh4kJYTz31cbWG28Ykv3wtrEiCKLQ9EMPcPUHhKMv7pAMnqcFD5LYaMczQ",
  "key3": "N7vLnSRwWgEGx9ZPaN8U7e6UEpQcRQfuRQPiBzEXuWi6xXFfFhgKWe9ThyC4JbjMvnNheJPfW4MZo8NdvzwnHWo",
  "key4": "4sbBaSMJofuTaDbSiTtwp3RdKRTTcpgpKHaoZ691Bf9vFveP9S8PdDupKdFV1x8hhn3mB7Xqf9EjyPn6mS2y8GpZ",
  "key5": "4dnC6aajy7uDdNJwBf54KULf1rTy2djBLfUjnY33WUmoXNEB3uZ3Pnx141SRyvRPpHLYHKnCtfARxkjk7b9dmhdi",
  "key6": "2dSYVPwvuyQAcsiwYMM5PW4e3c8Rgb2uh8uGTw8bsBM6Pop1JEh16bMn41sVuCc8z8G2d8n8xPfgN3PioHg1j4Fi",
  "key7": "2RfKnkozWdoEHHRbpgeTbbMihDL3i1wq3r4jN8tWQTT8HzG61NQwVNqWLEZetqoW7E6gPAXsVrfx7i46AArZ5Jzf",
  "key8": "52stYFPTsai7E73pYABcfWj6xyNnw2ND7sGKE1HPx1AFGX8RdBY8JnUY6N3yEm6TPX4ideNphRWFjB1zPys8KeC9",
  "key9": "4hhvt9xvLcyNM3mrnBoS9JFgMgX3JUcYFzvauGs9UBVDCVJ6i3HHntUyH53ovmtfTzieh3WdCxHoSy3vHchjMXqR",
  "key10": "3XMWLnaKUHDkqA3uPvRELmoMjsbvWa9VNQi2FmftUZETLWQsDUDGTgM1WAyyq4v6Pa2abDhWHKb5JtkVmidddCRr",
  "key11": "2fCemiYW5vPCb9HLQ9MsWNPkbjzy2SMuZtAc5yY983NXgHwb5LdViBk4fBDFovBQCdkizkQQi88rodQFGAnTygue",
  "key12": "2uaT7mqehCmECobjNLjLxYA8EpjdpcCVeXSpYMeHRmE4UgQGRHiEWwrFQCm2kJxvKEKCU6idaChUSV4H5z5rkTMN",
  "key13": "2zUEwgLFX2iwjnTNZYDudpkukAg14RDi96yiBXEXY27WnKXYvZYEwaALJ24fdTMBqTQbD6BaViqAQp8S71tAeZiX",
  "key14": "UR3Z11AfBPsUazfwh6XdG1n3pvJ6wkzwDuDgjXaTnbzMkQ5CySFG1n6ePHr7PAtCJoWyRbfzyWnww2Mh1LjT1oh",
  "key15": "3keyYkNpm9rWf68pjqvMhc4cHZhFXcvkbZuSDSX27HtYgcLCPjjVuSzEMMWKConnpr51oZS6c3GydZE8XyKUPZ6S",
  "key16": "66zwVZWqc2VPYiFerBZFKevvgkXAZFRotHN7bxxp4pZRB1BcUGD4NrsDv645BYX3J7QLfc3zAieZdPvrv8w7qsJ7",
  "key17": "2yx97ejM2SWNsHo8EbTMnMX2C9teQdswJzw7jepK67S9uoZzfzXTB2i2chhM7tB8JK2YT7AXTvenvvRzJkcv8iZt",
  "key18": "59ZqH82VsqeynRSMmi2xU1awe4WCNEkRLcvUdaN3pRET1BMCpCmjeY6BuNnKrs6kYb2KrUkDTYcpaihBFvJLGTvw",
  "key19": "2PtYEnZPnd635o9gqMM74MFVPGZ9wh1isivsyAacbRH78WAM2jjAKRJSn7v6t4oY2VSuWkRYdw8ShVNViUQAT2rA",
  "key20": "3fdSRPDdsntxz38SdTdQiESJipFLs2NFu98p5wKpG2LwnudxT4NRTZRopowLYaSMBxF7RYkQFjui2K6NXTv2tLa5",
  "key21": "31L6SNqShFfgtEXAn4YJgDZYskRAVehZXF8AkTxtw6XmpybG5aHWKhKZTZGZvyb9nYZe5AGY47QVR4hffRNMmUL7",
  "key22": "5UyLWKXZDUzSfvR4UWTjP7TNvrxdkcWniSLoeZsthhzumgPRweXLukkoVcvi6uzRV2avMxA3DBxEyqV9rbHdCj3F",
  "key23": "4u9ovYrfQ3GddcPFHaGiMtAfaHwxp3y1fDHqdzqyJJn15yTsyvPSfYU24G9P6mtmi8pAtWd4sqCjeRbKFB1U3ZY7",
  "key24": "3eFyiZdpeYhJhDH1ZGvThp2JsH2CBnNPEQCEKB2x9purw6GePAVuej7uMNx1Zwd2MvFWA7Su9YGRrX4XB84rb2br",
  "key25": "365XdXMMdXL1VLZjiFvCFBzN3wNgBqZn3cWUo4BXNAxK6z8gtDcvkSe9mXSdGYb4ARNkHPDpJVyMw7nkbecaG2he",
  "key26": "y7iYc4oV9pRhzRumousEnEdKhCVvb5nU5B6dFRPnZaDKokVbDvBzqqY9HYWtnXyWtAgU5nWHh8CHmitcXo5GfW2",
  "key27": "4DJ79NZ6PZ4VpDBXorZFGWRVeTNtgMVbuTiQi6MFSE1dExZJmMjNwRKqTjE8ThWaCyjd1vBQfMfrGS7eQqZkWoLK",
  "key28": "tU1GjDUFMvfpeGeGncsgirepivV7jHD3ahb1DES71e7C22z2ytNjWfgMKJ2d7irEZrMs4B2rv7fTMgikRg7594z",
  "key29": "gTh4CDn4Cmq71y5gjU4uSLF8StsGGfmNERWqJrMiujxFgyRXD7MobgbsfaiBya32PC4XcGmynbDjA89xPfsocKS",
  "key30": "31jb8ATnARQBBGqia3ik9akQ8VsDcrPYn9LiBGocXYVPrjGRnvvgimgpdNzUpudfu2fC6tLLtvvBDedfnK2AAVy",
  "key31": "59N1CrGrrBjtCJKxvLZo2YJmuZuYven2LX1zqdNU2QQKasYfTiUzwnDykBGqRJCHZJiHTWXrcchyQst9rXqCsAzP",
  "key32": "2YnafgyateYw6XaSnEo1BERP1Lt2wr2W4TDRrz882dHf3f5fapLjoxtsVYr2dJ3utak7goXKH6B6TSWEoQCkEZng"
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
