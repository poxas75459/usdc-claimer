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
    "38xuMauyv6Baq6e8PQ4r3SPrzqKVgrqyq9rVQiGkSv9BzgSMQLSmg4tRtBDYPqU8F7dfmQ7m5N4FmgbbBgaLyakp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WwpDNt3nnLMVL6223GZ8JntjqLNeDxvdUi8Q7Wx8h3hNwbFvkgfk9SgBFQbTRRxzoUWcwZpEcMzbJHUdYTdccL1",
  "key1": "24hFbhewzf8sMyDxz5zcWGhZWZDRrn3sBwfW2q1hn3sKWphLibC7BriQXVEKggaisaFK2rrZYkrCkVtwaJDrirBr",
  "key2": "ihYQ2KPjqFDftJfB8W4ayZqCG8ATGFbsk4xDuPAjzeHVimZMES7TYqEL3B9pza5iogamUYP2QFDtbAs9yPn9NvT",
  "key3": "4z7Xtppu5rkZFJajrWvyB5NxRJ2pr5t5gXGakLZn6FDUz3ra29EYza1Ts22VSkGqkjDHbJoaz9gVNFCGz4rVv5EA",
  "key4": "3Ld2jDvB6ADFqm6fsrA827DMCDs9Yko5QNCFksXGEkBAtuTqUKPwmPwoxzcziwfYesZwbZ913Um7b8hWqPpBjAst",
  "key5": "df1mJ4auV8fCqELNqCPW5WEPSsoTKpfuvHrAzbSnkxNEAptKc3NFEkq4gwEnz7ZiofdzVbQUJgE8YDHEjxhnxbK",
  "key6": "7N2HExzZcvz2CnuYPR4m9cMnzgLYrtfABzuFxxFYDgN8xsEvUadrd6in72yak3qf2VMGq5SqjE6xqd4rYnx8hiJ",
  "key7": "5T4PFFRfqYErFgGVWVJZqa112n6RudQfjJQgqgGc8rKgwRLbxdJNpZeXnwJQgHZVcDRNErmWoaDkiQ3H11hJXgF8",
  "key8": "62L5iAq559PVnyhxG6QjmszXwFg4qnRNvqTPBuuYMKPKC6GgFcERvBJzT67qwYtzdRnWKWtvba6Wrg3LAoUsBqZR",
  "key9": "3cNEaZak3UxVUovAqNDCQ4VeQyKEyYwVgrsf9C9dmadwEtQi2ffeb33rioGsEcdE5idqVVifSmXH3X3AH7pNG5bg",
  "key10": "64sEnGrM8D9moqhyrMSarmqG3BPwVG8EJLwv4Mty5r24hR99oLHYR8y4R1mxBHTZhPqMLDnKgBBQM5zMTCoiE4VD",
  "key11": "3KaSuCpzcd15uftaKVrFocaE6dqaZZxbM1tiY75Y9kogxTEkqwi48uK7nhDbWbfQr2LDuqzAqc5X5Krf6NsjhsHQ",
  "key12": "2uP4zG6M33xy6LbuH6o327PdCJjVLFDPwa2xbfT2JX7WcZMCsAjoVMJHwcdkYAoTADGAewY15F6ptCQNSvDKx7kd",
  "key13": "64yb19vovonZgGcN7kPnJneyaFrG4VSgVMrEioLZX6Vkv9vuev5pM3tQ2X2ykDs7pNFVGuaxrUGXUjeEGvHQ3Kx4",
  "key14": "5J7byX3J7wjaTrmgoR11eg9VnSCWAnBLTjpHwrh8SVwMcd93ZDwYBaAGQ3k3xdmo17eHUyLBvkLNgB9cNaGPpocb",
  "key15": "Y3HitWVEqFRgnr65cmVqcvLxb7kLweZmVtndj69snBy2gXMPxqjU3PHfMd9g48FHs23gJVBZbXQqwrMRmm7zhcf",
  "key16": "hCyeYTrNrH1eWBLkh24kV5WH9pWmj1qDTCwETUSHu9Dae34NAHEnDnEVD6hqtSW5xo8qrW4cHbuaaWvxFHCT9UF",
  "key17": "2CKFQp1poPGnbCvUKSr3CVaPRweRGkcJD5mM4pDtJcBEqS1BYYzoGf51DwCS6fP9bcmHwHtcKkt7iEH8uBpdp5X6",
  "key18": "2qY661hfZVRzf3bzT2WqocH4jZgcRTUVsZx2qbbqYnqyaKFKS7E78jPQsN5MxQkFbLqFa6H2zP5u5jJ4kdadXC2d",
  "key19": "2TUqEfDiBbewy3SCqna93yNmdrude6HkGnacuFbb94SYjijdVmo9YTcqd5dGaZavk5egzEMpbpVkDyowXZgAUPkJ",
  "key20": "4LUKZ81MzAgfJePfRG9JALVpjHogZcCog2JbS2VxRg1sXijLjWFbdFj2g7sxLvcvgPyYVXRTU7xXnhPjeGxjm6ZP",
  "key21": "5jLzadiEUuQ2cGpWiac3S6eoQTJLhW5HHQKbcJvfJScjHNV5gw7qCcEU1ZRz1XNw43GVtmR3smXJNtpdT82SbwZn",
  "key22": "4ZGHT7mXNEUyhFXSXxKYY3HpVyZyTQTfsf849uApvR7tm7FPhufoSAfHHWjdjEj1aFWdjQiEd3WYHg52NAmUqzny",
  "key23": "3BtvuN99eqs9cSdb44wsX6T3bDvtfRU41pZR5CLysXeWzrgvLQRV8v39xLd75SDDw8vrhTbpQ9cGu1chDQwNDLiu",
  "key24": "MnE4aLZUyTBhvGBbKzRMTQ4a3MpGFMPz4YjNeSYM474WfrPrefatTVEFYY4NPoUnuwEyTTKoP1y5RhRNtnP4ymx",
  "key25": "4z97W8xuTyW5fgr6dzMmZnGn3jqoqXB5CawLTUCp1oA79Fc1CfvGivPqV8rurVhtnpmxPC1gZhmSdo4zUK9zdSHB",
  "key26": "51aT5ZwtzSRzETyXEKB2S3QHLwZHDY8cQJvxtaK4DiCvWatYLxo5cBh7JSSJAL7y2va8wB36M6Qz3sbWaNdPHxWB",
  "key27": "4SRFHiQWnbEAJXuUB3ZKVBT5oyYXDietudQjwRXczoLecG4iQoEf2ervEa3o6EVjQKCRFP72MbpWNMzccqWAe5mb",
  "key28": "49LQQmgWsSuFAS6RG6t9Xx6fzakatXC3KW9j4J2hJJwzjFngHe1KvkZ3cFJVtqUVBqeTpC43QxRJdvyPBhkUk2ZK",
  "key29": "43M7GmRMfVTM6k8FpfrG71BYdJJxzhxkjk1nwY5Enwy7ga4A9MhLkGjJupggo3udiGcqxZbS8z8Cm65A5oL3yuhN",
  "key30": "CsjSn4qUeJm5oKnFubzi9wC9gHAkS2txrwS2djyprARqPZEGpUz94LrUSBn8eZ9LXVKuTVWuZGYZfr8xD5HGJ7M",
  "key31": "2pdcqRvApUR6q6S99EXJ261AqA6PPScbZ56Xp6NKQfcWxm2AsKRkGDQJgc7s1ma4Atj55q6wskHbSPrheRPouGFB",
  "key32": "2AjN955hCiTSKYFLqKUSX3aYs3cscnyiR1AHvpSd9YfdkRRTwMMYrEvyJs5Z5ubSG22mP7Ewd9cEEBTipzhMHpHd",
  "key33": "3SdTMZ9oEPd5xrvivsFva6ffKgSSo326V44SEyY8DnnYHnd8tEdbb7mzUj3GmrdUQn1tx7i71JnHfs2dZzziFEQY",
  "key34": "Z3uKdahVkZUgGLZ6Kj7PrrygxZYHp2GxZjfNM1eXPe5AsQLBey75VNXJpi5EN45JbTzQS8r9RNHkvNMdXPyExgA",
  "key35": "5Kph9hLy86KqQMSdyiZGJXpNVrrSGqyL14ForEucHL4MedEH3p7GUYAyhyacSbEKgZ2kzAMnoWN76SJwbNJzK8Qj",
  "key36": "2nsyfTGpPwGSrTTwhK29zFpSZaWs9xzwrrcKLoSPoXgiTioNr2rmzbvjbyGVTGcjLx7GKrnyvF1sTsaeGFBTW6X",
  "key37": "5EzsF1gkZczqL1WerBZXjrwdoztBWTbF69roAdK6jYSGHzRAWM4M6Mj6127GXhr7kbD69vAnB1m9osXttKaCcjQM",
  "key38": "5DZXF9vfBF7buqkH3o889Ji4vof1s2XnA7v9hkYR4vSqqd46uUaTmqPmdh55id1YaMS26GtsGhuKUTGk2Ycxt4ww",
  "key39": "3XdduAUus7hbbS1AUE4bncVKknYYKutJPcPsRmdcgqtph5E83R66bXXCtgyD2JDU2q1qHL2uxvqsiFp1bdWLmEkM",
  "key40": "26GZuHapfLYqphAjM6vbgwL8KNQvgN5JcvP39kjysyFU7Uesz2Biv7Dhcnb7EeCmpYCyMLoeQ3QbDnyaU4tkMPhy",
  "key41": "5ayPUtPpoVUVQm9CAebQ4TCTHHe1AWk7NXCg8NTzLfZU2Uep6JXeJxpnyjpTbhv73sgQ9w7oVRNpz85RmKW6muco",
  "key42": "4kWbgQHqKFCZtdGEntib7gWMi65wdFcQ9ezqeZmnaVxXq3JfcbSHKHb4e6syWwyiJ925eTjUv1R5uRLzKdhCiPxz",
  "key43": "67Q54NRKHENm3nF6CMfGEccXH7Gz2KF1nnNJrkHe1mxWunz6ef7rtih4WEmvJ1s8fRyCqfnddpSw4WHwVdJK3HgV",
  "key44": "3f1c3bYJJ6WYdnb6nWM2SdrKXFoQpLQxeyfxpcDXnhMrHxsGE2eemQwsh5oCKyzfFC9y9xW3ByhA9cj9wtFihhaw",
  "key45": "3x4bee2ynDyzc3cBWG9aKvMa2Ja2HSfARjk5suVAcQEyZFQPbeLNtjjQT2s383aEzy4TJ5HDNigctU7zXXqHAwdS",
  "key46": "2dvBQpTVuKEC3PKCjZhEmdo6hVXgHff4g8fFjHwL5U1CdZ3u7W7wbkenaApwUebZtEwjc7xjwXottJruM6gdjH46",
  "key47": "3cAMY7fRjwqkpE25Be8TqTQSCojvyRbYTJVc4RmjxCRuEdrVVxkkKUgsFNG3ZuDKzKP3v9RSLuyc12M8YZy9DM88",
  "key48": "2zE5kaVoZ18DZ9TH9kf4Jbm4FXVAE2pVQgpGpwhTqFPfBFVyedUmArePAUhWv1v2BZFCn3bYJ981SrMLt2NH2mdV",
  "key49": "47U3BCmFtpj2LGCcoCT5kXcq3pGgozhhpFVAmY2fuCyz3gZJMQGU279LWSYu2P52oTb41NWCFt4q3SkiipYpkR42"
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
