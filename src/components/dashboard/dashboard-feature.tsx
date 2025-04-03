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
    "3TynTUo8DgLX5bZ4NAejGMkMtdwSD4oYwTzSvEZK3imX2UcSozD7sRQgdoi8uES8sRYBw1C48Rdd9jdezCVdppya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z5ypyShuJLrmzFpiqSviefK8fdB4C7BQK7DBsaYRgr6cTzAaTamtXhjyTNhLGUKQNJPYWJ1giAVVLLDQ8rt4DpE",
  "key1": "2zvchsyizFHEybBcJqN2FgNjEXbWDj1WdepMCir6n4S3VvG9XciJviRHMoUkDRouMfcUH5P74PRv6j1aBgo7hqJq",
  "key2": "3tZRgLvT31kHo2C8fgHXp7JbpwErLBaSSk1Q9tpaJxcx781jp2qhFjLrVs8EQ7SnePBpZTXUWK8wo7T8SNRpzUWV",
  "key3": "2NP1cdiysv8q8shpv2xKR7Ff7LacbMXNZNQ5U1HGUFA6aCJJeeS9PQFPdyUTUnQUq8wRn83kTHNySo8MQfJRrYcT",
  "key4": "EjddxbGaWAJVdQCPAZ9P47FhHCgwSJNiVPgr9ZZeejXaaw4ScxiFibhhMv7CV5VYfLRZJVmWgwWXaqepHCtjazZ",
  "key5": "665SkBwd9swFJtZj4ATHLCusJSKXeooM5ZuQfFJztaZiKcgzoxiv5fQwkvZbMj2qhBJGQmXNkkkn1EtgyEEDHGLv",
  "key6": "5VXHCaPXoNzwRnMG8jeCYfhUowsTj533SoKUPhP3evpGxJiBh1CGphK7J3yvnGZm9RibTXnG4Rf7FNYiTNkZ3sL1",
  "key7": "yRQAjWPrrfJsty7ZpciX7H3mdE2ptnDqWtsiN2qoSTnBfdR9TVATcctBhmjKL5jsZLC7d3kSxKDCEqbUGu8cHff",
  "key8": "5GgqJN4xGAYr8DgthVvaYAzETvD9StWpDo9GeXg6bcrgCc41kFfZBrSsZKDd6roxNndTZmmKZETfeCNnXefdCapL",
  "key9": "3iYneemeWhxFegdwHvqeUixiDVyajFwWcJyeQo94JMcBCcsAM78ZQcef2VhNh5ruMeeNo6fGcwtyBvKGjLvGTG88",
  "key10": "5aGax5Y7vEZkNKSQTpEtDMWYaHuf8qe89JMjvAryy2hbNVzxx8nSjifuy7pZtCig59jqLtTmakReCdbweLGcZp7c",
  "key11": "2NZjVRZ765uQdiqpb45RyKkB6UpchmToN2wVmYpPsGDQx6qtPoyfAJPEeC9V5znZe5eRxivzLy8yCtwDngqAXCCK",
  "key12": "4gWdiLEZBpz5nsPnGMDWzRoXj2UbsvigufRdnGejRnn3RVwE9q2YkfdG82gK7tWk5oCsvWT2rzS1ii1noMKg36Wj",
  "key13": "2zaop6CM4mz31NFqqQFKh3vFiSMZTPsG2DkNuPh27GiHuQf5M8gBwt3t1hkddy4yQwcgciVnWUiRkPeY8HbQvQdm",
  "key14": "3yeLPNgpGv9TNMAKQSMZxYqZZ6ovvJ9avKo7BPGpMjgTxgXVynYMgemtYE9YnF7Ayt9XY63mq5Z8QXW3EWUi7aYx",
  "key15": "4WSkux5btx7jUVXMbrtZENkEdqHDrS2P5CGYqFx24hcpH2Qpa8scAN1YAHurY9UXkHHWRXuZQ8h1iFk3AvuVFkU",
  "key16": "2FfZRLMsF9ydvrLVvsP8V2VXbUEG8qeVhMuLyeZcYDLGV6KpxsYWWtxmtXxwt31cQdCr1kSb7ZqZVqR3sZb2hzYF",
  "key17": "46cVoQXSMpfX68ZHPtD3mp2Lg7qtnMKPskXJiXUfb6bNbNtgpRuL5BYf6picTvybpsdJHsFqhfXdFBbA329nCk2W",
  "key18": "ArP1WErLhLEh3MmJ54Qx1gpBQwGwYX6wMYn25PCKcnGkcarLNBDPKj8Yy53ZCeW9qxpKtxCAYLoqLXfpa2dUrhv",
  "key19": "3BB1bY8UTb2KXMGeoJkMVW26gzQCVdTBNh1db3FBhZfXCF6p1hVYpdZBk6HjRxRxFjyLoP7TJhFzXNmmpk4AKf5j",
  "key20": "3zyzLF9anwdDufKjAV4RkxQRFEA3tXBBZH3XgHRS2HBWescoRVLEUNi2LDJBRZb2pBt3JcbUCU5hjfPMftNb7fsT",
  "key21": "2ZpMe3rqpiDU9pwwwcRgQ92x47YDoV6xtGw1DHtgkE1H4Ka1LXm6RX5abhS3FMdWcVjoocXMq42qQYudjWzDRUuy",
  "key22": "64r1GQdF4RbTmjAuHTKvE4kQWBLjdmjhUGMr2KySUZmNVhkzKNoTXysW6UDKdZEyhawxLemqzkiFVRgP4WAtczt9",
  "key23": "37akPAmQbefoWUqLygcp3bwXemBLTohiismHm2yNL3DtpvsA1CiDXmN2SmbfPnGfhhwPPtKGCLiN8XAJtu2bfpBm",
  "key24": "552hvd4XGtaGfhNtGTY6nuhez3HxVHQJSXJWSto2sXmmibMuypr36HWXsEkSGQD9ZkdNS8vHrGBepT2Pi3KsbzXz",
  "key25": "SwEBJdvBPuJdEGC7582us5eYDzqR9LWnzGFG3tuMzsVuwQBtAvm57nHZDJqou15F5DJ8o4ZmorD7HT4qtAKjzDx",
  "key26": "3vDTNVqSSqCXuYXehUuXESj2wyPnDgrEnSWQ19kwqcBz17afJhuB5abmv1bFgaxjzeMZH7qbvqzPJo5PCfef6zPs"
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
