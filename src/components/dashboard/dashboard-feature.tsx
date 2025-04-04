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
    "4yzZy7GS5i5hHAo7vRH85GARGJ1D2uSTitVX51RRRn45WHJG3dbQsJbeDps2aH34rDiFABgCyVetjCHP1eGb155k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YPnQNfr5KHwTwz3jmDzgxXLkakvDYVGm2f27voXpMkbAyRDxmZCuURbbJPs5wuVZqaDffMW453W1G6dycUKV6Sw",
  "key1": "QEqyj2oxev6oxdH1Y4VMQNkMYGtHeCGTKsCorKmkCwpPME7s3Dh2XTeCgqc3U4PA8hjnvQS8XfjQjhf8cAZbQtC",
  "key2": "4XichfvzjBX4KaGesmXbXD7TXz5MvfTrgv7cb8P6GqcTvSpynnNvvCmnpUBcbnkJxvJuLKZXqMht4aW3Em1mCK2J",
  "key3": "5aAUdTshebP3FFTAaZTW9jY184KvAPpsbqR2EcSL6y7VJ6QpXvXe3pWR4BYDyxhWykrQTiH1yga6VN7p8b2n4anE",
  "key4": "45FRAXiWNsinZVoKJjVkgS2BPBFvfqKeoCKMLTFdS7xd5QpeyhzbPkiLNkXVWvK1LYJkesAxiRWH1uRDPSE7qWci",
  "key5": "4wYstJGD2RPizySvtMcoBNwtS8zRnXBsToJ9JMx1tJfxZYWfZh9hxLnY8i1dLDx6jBa4usbGSCgtwqxrW9VvUL5a",
  "key6": "4DRWcfFxCuCWceSJCJ1tXFWbLcaftzbzTt69mCUuDAwnxTJ6HGmWh72E4E95reWLknFSYjeKKFJvJgpqUWSg86Pz",
  "key7": "3tyKLehR9JV7xWWXx77KhAtxJqWKNAYhEtiWHLfxMksUuh7wV9kAQDZunbhFJDAaARoSihFCSuFGQSpDGMnri3eK",
  "key8": "3BTsPNw9ijKHCumyWgRVk9kB5zZbLqqDq8S73EcPv84Z3MCmKquxqyAmk4mYWJ8CVXYEK4t3WqfdfSVfWRH3h566",
  "key9": "vxXWzsAA98gYG4Bc95i6SXczufH1WubtiWVzZmtjGWwoew4JSu1KfcLYm8vs1VtNRHLGJNHzFCxsbFug8825maU",
  "key10": "C3zAJvDKmZ2LpRxQd9mqx2eLvCabG9NSZFYhhZ8TYgwYb4HyTHJHWmn49o1atkv2RbMGzFM7tZJeJCU7NCnQRjr",
  "key11": "4fibNWBtVT8ytPHeDREidTK4vvvFKU23iKq91q6hAgDvwUxR9uKn59jY9QDeohL291Q6vcX8zbTFa1mGoGFHtJ1b",
  "key12": "y8AYU43hYqww4zAsuoyMXGsAnYo4virGEd7dmJKbhcayFFRP4H3FiTiYYi544B4sejsdLxTEAPg3D8hi2GeV87J",
  "key13": "4gHNw9zAqHFbbaVNWkRdYV26zPF5YUwj3rpn7qi8bZvRMu3BvLSPqJwSJgvKTs9ci5s5xJ5MBk2iBtz8XcA68e84",
  "key14": "5qBfma6aE5xaS8Khbk6KHFfyTHso9FR57DDFx73JYDYRivxurnWwjoNiKA5goJcjL6Po4jcDU9cnytEF5rXcuC44",
  "key15": "4UA273yqotJ32116vaNd8M5hWtVXUYCDGwdcfGXMTbZwZqtiJAUJZVdGb7rHDsDb4eXH96ihPBLkAQHLzZBXnEMq",
  "key16": "56tmwjgnewy1qMqLLZ1nGMDD7NxJK3P9vedW5k2dEeRUhRvjYaYHcv9ZSmqpo1GyAgCk8kRicjntvdLopmnUp4Cx",
  "key17": "vvsroTU1z46R4ZZVzrEecHVkLkGko7YzyewYUWH1xJKBioiuxKFngUk1y4qdxRYv2F646u2VsGWrdSFPA6ddhHP",
  "key18": "Qpe8ppkqAGqEmxYEXt9cAu9dZwzrjCa9K9zww4Qs8Ms6ovxjwJkWqodUTLANLLBnsFutDc3VCui4QV6hoTskFXa",
  "key19": "7iinT5244Kkvgsf5x6Mn7AH3AMFsQxTLJCwFdw4EK96MgzZKUvz4fzMyhaCVZBXmPksp3jafcQBEkUgtbGAZs1w",
  "key20": "3JegFeTAG1yrwDFyuDgMSPSgqEvYSDXEjknqejfmMYxFQjbe5jLP2DxVZiPJk9uudCnZZKQ3jQAUkYC2uCSp8QY",
  "key21": "4TBXM21qBZCGuUA357CXPihjZiCz3kT65n7dJHAym9Ugc7Y6FAxuHR9R1MCYxxjKseb7X1tJQGo8DeWY3D24VBuT",
  "key22": "3jaHqWFSA8uKFiifK6xUsvaT2F2dhC3jQ7vrtDSJKbHAjuMps8YxUZC2p2AtbAZ71nNJw4nxszWoNbqwDbzqtQvf",
  "key23": "44bT5KiMWZaS5p2GZ9ns33tC6UBN2qP8oazRBX67QeNSbdQBGrbUqsMvPueu8GuoyK7wyHXJsw2SHUJKFqkasuKt",
  "key24": "4uXScLr4HRs1fJWc3gvjSHzMTpcERfjJRYQ9y6fKWf7p91YmXWr51xcFZqJ6B3dBbTTwMHUhppNsddozvxUYuAce",
  "key25": "5k3EhxJyGthnH55GdYh5VWPBAfbfjLXHMPfN9Y1atrBc7RypJ3yLJvzwgB2csciEPa993N6srSXJHjqtP7tQfWvD",
  "key26": "5DpnBxFxc3Eo1vv3uLyaJJzHtueRoVu2ta9v6NRUP4mUjZmeg9BHCYnPVjV9HgbzcpspiaUoqx8wHjbZphkp7EMu",
  "key27": "h9rvPgNpFxwqmGvmPVBdoDuvzXYiCxeW8doruYNyjStu2QoF882fwE9YJoPH5kF4RtTgxSypKBDvtNfqhoTxb47",
  "key28": "SKMCaEnpqZ26ycmdMT9zLGm4bKC6gt74P3a4VNn6J1BGrjw26RW6tHKmn59YKqcmFaW19NMH6y9L3p9pj9taL49",
  "key29": "2Gh7v92bbJ66xdFjUXiWijEJCoMtSPkib5bewjjZYxKFq6FsfKMaujgU5fLYERGb6LUanWGzRJjWhgc3eAbLXmWo",
  "key30": "3PSjEQvcSQpPx3EManoGyRnxqEgnXRLfUnrSYrmmRsGahC5oeZVF498heo8U9Eoexak9F2vyN64WR237oQoTsQiw",
  "key31": "23L4kdGBiFMjXP7odMhE1YAkFaJjDQTsnAeVsDPvHbCiVqeUmD1wwDWYdFz6Pm6HsZvn3Gh9vanRVgZxF5qjpxAk",
  "key32": "5ZuQHpQ8xioV36TfgGoqCNdhciMJnmeW31fxm2qZT5ZPPc6JKNNpxHfxHBAJzKfYdzBgJ7sssMYa4vpjHxQ6rtDL",
  "key33": "fYVxJaFjjDxdkny8X7mzVnwd7H67xDCgpQHYCwCA9D9M7zyiSxmcWFu668RQ7LPDoWL6k9ZyWsPit4gRNwojpqF",
  "key34": "9jdJTBqoFRsF2X8SdCPTaJ8ThurHVPHvKSXhHpsiyaNJ1D7y8w86rZ7DfVDHURvSeESL7MXoxtt5xtbiqE5moY3",
  "key35": "3DkLByFC9snDuGX1K7vTr8abJc7J7no5ayCYifypac8y5T1WN1phB81VU81HtV2dijdL8SLxaMrEmEFWUqtntkSM",
  "key36": "3bzwbxe3aou24opHi3n39fSRdMa3SiYvBVBZNsVoqnmaFeV4pHiD7tkZwxQJv4E3hUUV8Y4UYSWdSiNJGy73798Q",
  "key37": "vQpyUXMDGr6ybvBWu3xeRNyN3973XpX8VGz4p9FGPWmUqG1tSn6ZDa1yLKEPKBnQdHJ2t3bXMVFMVCXx878TKJi",
  "key38": "4Pw3i4MQXGyhBYuzJDP6sBE32XeB5a5aKEwXmDiNEca9hoHsmuXrN5pUyhHwFU4jCdSy5sZYadxTuwNXGKfEH8bW",
  "key39": "2xnJXwTsUBkQTsrTk2WBXkNurSMFHsnANUM1vXtj6vWEsaDBehcaVDHd22ndrmEkFymZZQdb2krXpttN7mqHQf9p",
  "key40": "2Eqcpar5Y4AgyBLU26aBtYyYFKVNfpf1GX2ckAD3WXGA15bDrMZ6Bvp2FAbqauyMvBhtq1BBeZ44D2YaruKuW9B9",
  "key41": "4MdnMDR272mkvw48BmmGFEbGSvfkGAeMsmHrwVBpMmDeKyi7mGvLygbcNx3r2QSSR76dNkWdNDkjUaJGDgGQzgyQ",
  "key42": "P2CRVpXYMBKB9ch6kTecY534Prr46ypakPFTf68Niue7wQT9AswRSYAivZhWzFDmLdPswGEvRiYYgvWU3kbeuJF",
  "key43": "2FRgK2tDHW7KTwyMVVkjPEUFeM51NQJAJwUrdXzRb7MeuVnCyeDrRiessKUa1g46iSftU7oL23LZ2Eyo9uSzwq7G",
  "key44": "2eUV2LMkeFsrLXqQ2n4LwmtgiXpSSZWYkyvSHD8YbJ8HvLrnkbmZrb55J5VwvisVvZS4HnnkgEEhH6jJDnQBuHV7",
  "key45": "2n7oiv8SPJcE3JyvqzbFXC2p9EYa5VnsCyp61b2V5psVcDDqzP9nhKx6NBW3YheuueEjagwbdvQrKL7rajx3kFH3",
  "key46": "3C9YeVspkiYMp7R5bfKCe4TnVF28BHuvtYC7Vav9L2b4vt4RAFfqks6aYDQFt4qG2UU3HxgvFDxYQXsnQY9Unx2X",
  "key47": "2SKSdnHpe7djuPgXpsZk2s33BC1xw2nxZreWjj66nPeTqbymvZhFmJhJew5FHozGhFpQgJKLcGGTorLxYr6oFPaP",
  "key48": "mDVrUyBtnLEM9vyznrVnjfAQ7J4VHnxYbaX8rRQAbqjcZxqFjNyfBsW4f1XFSwtxFdkgtBjubH5n6KoqAqpEFbA",
  "key49": "668jSgMg5y2a96vwKtwFMhR8rxgYajqoQhYveajEp4R7STYwuWGFFoTAqWm9jUz11uoQYZz2k4RUKGEY6Q5EdBoy"
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
