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
    "Rea5WnxzT8jKUscaALLciikvcEiiezApHpBunCR6jJKzV15vHW7He7ih9hjeGhccu18bY9BWucU6X2ndC9VLY4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n75mUT4ie7SBbuiiGkd7VnKkncZWDKE51hVsVCSxBGdnJ1JU2wMkt7N1hsM9VSkGqHDkj7e4HZ1AX57SUfxen8z",
  "key1": "3BdkAkKcaZzdCtGdMNat5LKcwRZayQqPbsxbswT38vTCzNrLhQhZYqks6NDamKnJK1MV7qYgKAd29UH5biTzJCsJ",
  "key2": "5gELNrquHH9FXo8Te5yj6YUjetpMPS13V8zmVNpJpngxg39SZv5rgfUjxK4ksRjoU2HEPHrxEU89Jp3Aqp9wS9Ce",
  "key3": "GtWRU3EN2PZUPSJu9EdVdzXj1dDeWoSFDYvBhBjc6Gze23Gf3MiZYhs1SvTj5QsTp2e5VMZGmfH2YjMUbdRHpL7",
  "key4": "eqzB2yD4TBSaARXnA7LVv2HZtoYZNh6MSrtZPawsuW1Mq8nbz4TV8WE9xWoHDTH5q9jj2kXSoAJWwCTBN5hABeB",
  "key5": "3fnetcRcLnZFTrBTQiooMHQRd7CPwAjXdek9bg47yHNR3oXX37L4XQQJ8tRHWhMW1kESuDVurdXQowKv2HsPSEUS",
  "key6": "jmygCSTiXd55uG21b7RGn7bCZTUqwZfKufvw9z4oBZSFZDMbPvxNYf8TY1osBtARE3XCHhmdguBWkFxnYnPbhHD",
  "key7": "4dShYg9aGMh3qxV6VXJw6X7q2RQPZuEkSH2PKvmuc2JRTTvcCAMReVf2VqLUVXkYkX5gfRfUWNQAbLMTEWrijV5q",
  "key8": "4qPjbmPRVhUaDi97viKUSuZL6c3D2xvpnffZm19RfYjaaNKpRxDhjcinYnXCD9ri2YihTv4mNo9EKGKsJNd7MUaa",
  "key9": "5nt4DSAf1YCJ6oeXTZXwLENgAR87QWUkvkf8XdHB4Job4SM1w5kx4RG51mejGjCN1Z77W5LQWLKSDciLQmDkpAi4",
  "key10": "2zfFonNrtxaicLNT4nkGpPPfombpN49AgMTs657rYjR4sa9XvMNiaHVLMoZo66qLMvoNT7Sk61h3vBkHg4yS2nLZ",
  "key11": "e7pEQfFfZpxYxuUqKyhU8uffpsGz5HyW5s2GptmufeiAEVMGGDaQZiZM7WRjDz7zm6fK7bv2us3NC5ztmr2K1Yz",
  "key12": "3bpakqjFry3XmHTRxgFhgMYHrsRR6rdHUWxyFwpnnYFZ9eLAsqwEnDxzDRvVk8J5sZyLfG4Ks9JH1awBgf1Pf4Lv",
  "key13": "5HCLGv23xEP1qKTXVrgo7KW3688djbJNWpKSsGdUxC5LAxk2xPU5MGkMs6TyLfK7NabsY7mb7k5eKjyVXNADrtXk",
  "key14": "2Jkg4EYuAYWXBfS5BbcYndA8FfLyrtjM7sfy1Q3MxmCTjRX95omeiSwmQ8NULswPKJW9zuzq7Mwe5pVp1nD9ph2w",
  "key15": "4yQckQHwcBPFpidvwpC7TBrVEiMuDEZBda6axr7WPYqBVfGM9NsccMD1TTSRvzhNBLbiku2FmXFmQznSbxbRY6mC",
  "key16": "3Zq7K4yZj6PJMvPtqHQVe9ZFqCgbUTKNzDZwtV3eBUjkYCANvMxLBPZ8WSsRYzcp3JsnYKbCM1xcsnTMogv7aEDs",
  "key17": "4cnhSiG59s1ErvsMX7DjigPesQVTteTNCv9umNCJkvZkVSWtQZrmEamyHxEATFxzZEuhqT1cSTdkAEwSLdsCNr4t",
  "key18": "34bpHSmgWVLycGgDkZLwVMqVU39TSN4wXCFqCA36U8m4LFkTrJGhtN3smkMEmLrn7crCpRVjBu6NZZocVo8Frjxz",
  "key19": "33FyNCEADVfHp9nRLfD5SZ9MJeUh6zF5mi4PHREiFx7AEFXdMKJGu8tvKEsQAt4ySpd2tN23AWAPGBF6S79CUME8",
  "key20": "2aHA84jR5D7seyHvCtrecEaM3gyWhrvpwooFRtwVNqoKVEMYF6MB84QCCD5JQ7s5HuQJwgunPjUoHHo8BLu3JLa2",
  "key21": "2U9eZf8Lv7HdUpHsLyXrzsUiecpwNAW2acTUeKecLU5mzBhVZGSo2SBrVtRhDMitxFDcvNEi5aveRrPYdT3D3m7X",
  "key22": "3fdEiqk5A9Va5qh9Hf6nJVcfgukSmntuXmsFEGodMiSHMbzXYNe1AesE5gxwaisYY3oXvu1vbQK2kuso838JJWqX",
  "key23": "4yP1bsCnJ5xyJBibQZyJBgmnRSzVSKvHH7Nn5GsUccYtRZzc4oFoLZxF2xfBQAh1pxSCtgRv4junkGcFqLBUKzJ1",
  "key24": "4pt45f1TqMmqqvJDbyiqbZRYoNqgit2BbdaPHMF3D4Ptt1sKAoQWsAxh8Pqg4yBaBkoz4Ef4yKzUY4mkgYKA6pUT",
  "key25": "5sVM3ZGdQbrefNNUvxhTH49yj1TkP5Nh36JwyaYU6n6VWaDMStt9WBBNpc2g4u7ZJKFb4FPtUQkuZSEUywZTsZ5",
  "key26": "wdaoMtRLAQK8aYcQ8i1GQsUPy7ja7kiyMmDJzFfWmJkP6yFn4riW4X5428qcDVtfwEgRWZGjCBnTtbdE8TDG1Fv",
  "key27": "4LGScRzQeQSZaLTQuWZreRvGdnyZPUQGio3KZNnDhC4PDtV76rTeji1THfktVSQ21WzLcjqMdMBbnGBMn1fas41c",
  "key28": "49b46KHwxKQj89WEoNCXryHUpEp4r82wjskHDf3fmcrUWWzkamwka1TJWnEF9eJo8yC4NaQcNPDwvkkAEdpRiDcU",
  "key29": "2NH5uXQPA5hFXz9ZD7UDDT7GpvUo5rytJthAZPrWkPVSeEzYRNbZRndYLHnG6k9j5oDBpziRKR6sa9TsTrsLiBEn",
  "key30": "4XricbPKhKdmD42PzUxDaRT72G5q9BzTpcJrBfCGiRXrLqoEZZbpspFasbvZXqQyKhBTL3isMAkiguCW5r17H23A",
  "key31": "22kzofHz1xpHqt4MzY5BZzKxME4DBJD2yz44q13yca9VZEYpAa3vUS1A7ZMse9P3YHwh4eZWXpFfNNdjLy41ZoV1",
  "key32": "3vRrv9FRmLDR7mLANisSo59F119ZGpUGSgZXMGwqjTXBt79viX8vNdjwre4MX6V2D7aZZtuHA9qJGzvpkw3JS4mF",
  "key33": "2uUPFscLaRiS7eQT6xJ5Z9CLKe8nhBgepyt4CoSFw7X3bNq29eBhsfXAw4862phFdxK3wBHuWCf3f9KnVVoAkZd9",
  "key34": "5LKSVFf9LiwpoWeumKgCTPH4qc9J11LtNRTxUYS8twDQWgWTvTwZQznB8NXXb8TQ7omWwWCu1KePzyEcds9TPkNU"
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
