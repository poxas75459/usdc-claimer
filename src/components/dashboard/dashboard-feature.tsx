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
    "5ZrRWF7wLSWWeGfmUdGnFSVggxQxy1rdMfcEAqhZrEJMHKjZ86BzubpwyXLMsXTVkHVMsASFeFQXqKBMdkFitKSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NZQPaUbqcfF9qYVTezCLx92TZ8TH1BHJrLJzd7J28rRmsMWtfCCX8V8HpRqf51r31b4FPjwTKaVrbXtRcSVjm6d",
  "key1": "5a8cyGqVpFVcwFqXegJKBHhcRdcBVBuZFF2tyqHcFgfaHuvZFHF2KQKJXDjEZtBzQK7Lu2dj7ckS8fVWY3h3im7e",
  "key2": "2sN8KEcLTzBUGgyZXXFsTcBaLJ2EBKNzLnB23g3ke22wA362hP2voNSmcK7Q2HEaeAmfvC47GEL12YRVKrRG28ps",
  "key3": "66TYuAfrEtkhbxdvPLWQ41YCZ4FyGtqcj7KmVjGmbEoy64e4pisjdWigjD13MSMHu7mz8CrYJX3LdzDd5qg22ZqD",
  "key4": "3UFnNVX9KrYn3xMWZ66EA2Ni69TLJb2gw4Q8S3sZnq9piSPFjz7wSFcZ8DrJTh5h2gkMuQK4RfX66KXvTHCts4XG",
  "key5": "4t6Q2Pc5rTEdAMCHpt8PyKpq99gMgt6PxaFWq3eFyG3Yp6C96SRHfjvdJ1dRy35peMBydXAk7WNXQGNvDY74b1EJ",
  "key6": "3jFL7QmCGVKhJ6z1YgUFaw7cqWH5HUoHm1ZqjodoT5Q7LXgSNWYgei892VCBMWbDX5q78x9HwiJmZMNGrNxz9NRc",
  "key7": "5S8Ehjy7Z8iY6stLDiHmRtgQ2njJZURLyT2DKF15hxya53jdjZEHHigjM87oFbZz3VbGoSbLDNiQKkMXKoFfG5yG",
  "key8": "55GUk5NNVk6VxKiBxoSwvF1tRzZ5fM9prZb6nN46v99WPhEhysxsdyWEu9dfwEeiUU173RvixQd42CpyDRDGFa5G",
  "key9": "2Rs3ijZgBxLmNU1Wdy1uLxp8H7G99Vjz2VZN2WyaMG9t2zwHzRFmv8GvWpqyeNzwfYuHbwXUyFzoEYe7mLzsEnJf",
  "key10": "7ng1fbfTTyeG3V95VaJrSJQVBGo8DNQsx7BAKSRX2FmXCAC7Gd8JbtwSvvGBrpQTQ2g37zeQeetn5w3AVVCE3KQ",
  "key11": "5eSoCKjGC39yRoMdSLWyDcpM1JNBGWWAfrxWeQs3eEZAzwMzX2fKHx4E57C2vwHK94B2SNx4v81dYMVZMYthoLzA",
  "key12": "2MD5sNrzh4HaEsZHEacvPZjWchyBzptUggdtBWYu3rjawK7CyoJybCLYYWh8nSYL6qvE8EcXq53w4WMeMBpPNzF2",
  "key13": "3NNkn1HppZvbFTMTsRGkgxJfre1fXK2qbHQoTKEG6pmQMANu9vjJhzTFpyYzx18jVFF4ydWTF9VRGmi1jNTzNuJv",
  "key14": "4ygAxSycXD9RtRr46ddHdCne973Jn4dxrAqYFUYBXpzr4t8K7kjZB1hfHgHisknPCzu1X3WE8MjFkSD4QjtfQHgs",
  "key15": "tAWiPSKHHvQ7Bc3ZDyeDuXB2LKZtJRxHQmL4hFNd62PXZt9QbawSMpoZjijjmz92g3yXzCKgt6i558R9gDfKsR9",
  "key16": "uWb3bWMMFxqpviVsihzfiUufEz35eJLoCLjwzULPkCR4hepCQ8HCSa7xVyFgdM6z9daWHWBkXUQRr3jFSKNuuvF",
  "key17": "3eLejEXXLyXKVHYcCxj4ifMyLxVun4dMvu3L16NMFPCa4QvRKKTz6GcTiu7xPc8P3TW2YAz1x7w76y4SNiyNVwY6",
  "key18": "4UP4iHi44j47RoX56ptCPQbUpVwNGQuEz4K2BVWMHyr5x1k2ZrbpbhNBoSzXCqLUjBoEM7tu8ZKzdmxZUwoyK9qH",
  "key19": "EbHLbmkvspbqzeLor62H754tUiQYN7g6rD3A3Y12gaQpHspCHkX5mVjviygx8kXwPwLfDPWHyxUuE4BifQHtyy4",
  "key20": "w9AUtqGZLzHAEtzhdD7dVFLhk5NLaxVLjdrirCChk7uvBGC1sCA6yKrbqouLFsWWwt9hcweeoKDLK9hwg6nnQFC",
  "key21": "61F4WaRKzQFsJLFLXwqAT9A3NSX33hPKMyTXxkLWqW9mrBRFXrdffhAX7HkoHd8MDrd73hmsGcfMShtVFFAdX1nL",
  "key22": "2MbVBHNvhvy5sBkSMxvyakwXGtbB9DNfc4q3phxtY72i1m5jVJarBzjdRMYJtPAsHBmg4ziijALEXwpZNhiMoLcs",
  "key23": "5RbB49bQqaZjJa8MdJGHKSD6YEUsUHqjyKhFo89wArSVkf9oSBiXXP96yyy98nzibnB4ripyphw5WJueiq3XQZbc",
  "key24": "5yZwf6SpmJrBkTbjZxcTyJSpB6dQANpFDVjmjrukVCX2K7qKVVKRQeHMiMZbiUqK3cGZc45rcM7VCvd8FdMWSb6i",
  "key25": "2UcJ5cJEEgty3w3cZPSjnd5Rs4CwEsmCHKjDKY8zAB8Me7NHKHatPZQHtrRzRNEJWjSR5CWCcDVAuuKmLBotnNi",
  "key26": "2fEKzEubic7t43zq9HSJU5Z7ygW7oaoSwzenERwtZzJmRuf5wViJR5WapdR1gXpmwwfJbEx7Zxj1r9JkbAzCYzRJ",
  "key27": "5TuHNAxf52JhBMdtVxh19Mqqw4bjsJSfHqjnebdYuFy1rUJRfZbCDkV8oP2Hn5QwVjS8YRoSAwzKwBsG9gPB3Q6Y",
  "key28": "2UdiJ7L2q7iDH8iyBqcL9QNuJE2Ev5KMVzGqL1ryfezUFr1xkVRiFhMfGmxG7BWNi2DpngnTQ4K1xaiXU96Hrdrb",
  "key29": "2jdSAdS3q1JJThxFsz3dVMpUPBWCQBRgaa5i9DtxoqTQu5h28eJPaz7eAKS6kKgd8YLbjmqXhSKqC9ajTehEThvQ",
  "key30": "3BWi8xUaTmLqnTh6W1JzE6biiZmMJe9oXHRJMb2jzWLmh4gwb6VoCGCSn9S2VjatDMY3G8PPdLbmmTxn236b1d2N",
  "key31": "4dY5VQUQDWjrvJNjkGMmHzSHiWzd6WdtBLT7WvxcW2YvNQX1QJwbbKic3JJkECBTXSD88hBwgjsSDg79bqFAGJss",
  "key32": "23Xyh4PPWt1UwvQvwZh42WzfH87dywSPrQjGxkycTDCmxqYusThxLCiZqXxfMDNM8cj6svxv7xvGJR2cQmxvzChP",
  "key33": "yRTptXgyhHxycZMi2yrpUjSVSGT6UaC8cxUxszKCERi4ebj2zVorEaBPWN5f69bCN3L6ax5SNTjckf16AST7gXz",
  "key34": "4DWS78q68ZVZBvYJfUNFdrAkUS7azCeAcX4TU7X5ChDwrCBMUZ49hvGze8NwMKUJ8ysDctcFKFzXNJYLJiJL1sUo",
  "key35": "2xeiggNRuZP1M5JgQhAZZ3HKShmPArj4WNUhnX64RTk77gHF6vofKT7fHNRjF4qJM6WMWqCPMGSazrjJqh8Mij45",
  "key36": "5FpVaLEJJVA7SKCrY43MPQEMtBPvUEHXKFoJc1DXcqcdFk1QUXijt6FE7XHaQQGHW9ytqbAU3ZqJLxYooLBNwW19",
  "key37": "4dHHAuaSeK1SKSGA3ieZDBWN8BwLpovXqhcHxire6k5fXGG2fJ8XGPnq6EZ7mdxKwiQTkuJasQLkyKmrrBMA1Rou",
  "key38": "4WmzYcKx2e7JTQsnZThuKuWyYe1eQ3jZP87sc1awDpDwT4ks7cD5HCNWtUXFwtSjZrrq9AaZmDHM3kvGfHe8jn9D",
  "key39": "42zr9AUT9LLAfEecpfsQe9CPHQQQY7DbQUezYuLEi4ame8vTWwfRxLEnzhqpkoUcjPyMTFturREDTc1AayXEm6tb",
  "key40": "4HMQZUf1i6XTGX4f8WJGJJxXN1KXMcf9d1g6qPNz8shccXNm87b5vP9q4thppYSRyctJokB8Ary2ab1RQ9FARyQv",
  "key41": "3VQRAMQS2DFy6gpABKcXj4E3hL5XrCYLdm1kTUVaQYyvYAVZYxyeNu1XV2XuZjSPFxixhG6cPtt8UeFDKyZjBrP3",
  "key42": "3LVozZT6iVMJ3pFA9mYsLR9ZUtfzpxrreP7HX1uucpHqJdRoQaCJ9VW5NmZfcuazNpBuL68ZXgg7UGF31XDW8kp2",
  "key43": "3Xmmd1sfwxPvfNknjezDMp32QMsrJfrGgLJquiMfZaG38hnWeyLKjZh1gT3DS5MMDymXaUqboxR14R3AX8fBY1jq",
  "key44": "3RyAZnQ79TUf1W2izpmeLeZp3ebqZPpLAsDrb18EiWN8FmTkfgqSdsP4yzrVz1TF6MD6HBZP2QEPyyKxtyfZKqhp",
  "key45": "66sk8fGRMqLKPtBxG1Yqbs6GNAyjK3LoRfqysXnwCusG9B4aCX7UdsVE1nm4wZjB6pf5CQRBafiNu3iDb7AQ7pi9"
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
