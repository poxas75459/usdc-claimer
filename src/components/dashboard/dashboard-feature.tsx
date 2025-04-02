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
    "3o6rXHLayL9bqYqVK4WHaCEHfYaMDWH1ZxdbZskCtGwgvALCmmvxfLJeq3UKg65Pu7pLJfYqn2E7ntk6X5CKMDqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d5ony2bYyzCQFHYhs8NA6fZUNncqbugiFsRiovwEnm7bopEsLs17mVAy59DQRvy5Qr9bsBxr133np4cpnWYhTFc",
  "key1": "CaDE32kXz7e5g5h3tw3Q8evxDAyBCtvmpzJo1qLEBypwm6Z9gqn7JZKxfdhni2pf3dMUUKiWbJr8yC4jJtvKPsS",
  "key2": "5Qa43bSjg4FWfMFESzfqeWq4Ai6GbULCAH1Spb5u5iLAVUJahczShe73jXqmuWzV8xmTtbkNC9VjZvu9NRiLDTz9",
  "key3": "2JmotAeh9gi9vUWSwPPTZJ1Ek56fCFzibasTkqXxKyzwukNG3CzG6i5YhFwdigXjPAknu126rv7LyT5TCjxx5skN",
  "key4": "2Pp9uQwtCcUYdxKbWfL7yzXg9F8vk8S1nRsVKHggGe4Xn3NRYs1TqNLM1GdRYNd4EurzXRFdixJFTnAD2vaYrp24",
  "key5": "56YWVewxBut1fRYGuaoCfDvEw6JC48mt61eXTPTLLsrB97Y9R1nG3N2n9fkdXcK3wQVVYTNbG4mpUSq6mkovicAx",
  "key6": "64UN8mxu7EDWjxZmMi4RKLJmAkzBC6CSfDFAeZmfERkwNejCxG6EEjfqqJwddRbYuh6kpKF3a85GFmrrn2bRXBX2",
  "key7": "34FCe7mu2MKrR4GbygL3BoAUnXp62rf4BsPiaJuaWysECPLE64eZxBTMJVvaWDRVm7CitYhDLsiCgCyAYRTC9Frr",
  "key8": "41LrCBvTr8WHXT3H4rZgRBdaynqCCXo17PBz2SMy8Yo5NvmzHZrLADsNTQixuXdvELoK6SbVQ7MACaT3B8x5LBu7",
  "key9": "5huMdgMydrCUyQg5n4mFBVVaPFHvfsbFe84ohYioi5FCgSDvoqwwfea1TgwVydH9w8DwczXWCqD5sJkJ8AeZUjDS",
  "key10": "2iimHXAvyZdyJvk2pGrPiegwRRWmgAFkg8K8YncLRt3nWTM1kqxEaj8ApgQYU5gmfrMExQ56hPM8eSCPCKyiSS8Z",
  "key11": "2D9UZXBrvfBYV6n7vk7BXivZyym1kh1B3R8NbHwFCdJsChmi8CvUKpQXTLbPu8wqoT7XX4qy8z1GktzDhB4W9QL9",
  "key12": "dAZgpYkwSpVGfzpTEm8Q6VUto34wu3LGYaA4w6yikmg6dCBo4E9h4PaUSLKtFFo5KQVZnR8BbcUYktBL9wSoPkx",
  "key13": "4b6VoSYSzL7whUTFUAbQzJzBxxPH5gvqv8rsQ2D38tiqr4FKvPPQAE9rbGccxekN5VXtVzZt2c65UxNTZmsVgdXb",
  "key14": "542s5DUdkPJrUtwhjEeSJAUbV4k4vBdDDeGLPUVmRt4EaNapAT8cSrCc4CdjcV64wBck9pCnKwczgNh5cyiW8oWH",
  "key15": "4mVywePU7UTEeJRon6Y8PN6c3gzTZ7UsJceMhyLsiPEtjgNfWhpnDPBfeUQMCt5e8neR1fwByqDM1s4NPBxwtVah",
  "key16": "4mwpDCBf32fs4Ubr2uMFotxPSBXVDftQhJhboRyverASCXDctjuEqDwCVBdSW2dgaawD3RYuo2JgQhuheH8zRJtR",
  "key17": "U6MVtgPGpq4ydwdGj4d6J4TDy4ia6vrbgDQ1H4mef8QSe2ByS7peeFY424FFdq1RErVuoSt9PucQR89hiitcYud",
  "key18": "2yTtXSJYBmFHsLq3XNE5mrQq5gYQS27CUA2sE7QHEkNc25MckSJD7HZnxNNMd2r7WWX3BD2eHD2HDdgYdfEdds5z",
  "key19": "41U3QZtJzGQrg4yThBKzryLyabMHFNu8RVQHJJJTSxJmzjMsH9KcgCyBLomgCoAMRyTjQJ93MPHF8SJsydGf7f24",
  "key20": "31vMBYajhURTmWyW6P9V3xDidoHpd6DGhyRdzePvd1Nz8U7hxYgZ4VEgyo7jYAPvM18hvshjtyEfap4HcKoLtJha",
  "key21": "3KtwjF2DxcQJpfX2KnokyBd4LGeDDevSdnQRb9cyG9otATS3eDgKXvmuYkEUKTYsGzdTT5VVEeDV7PUgkwG2KUvg",
  "key22": "Np9mCKQAej7dxrfhJrAVvstxxKFyoNeDVdWWMPp6QQcLbPyEn7n7y3oZiC8EQpUAdsrUii6oVPiXnHpjdkpxXXN",
  "key23": "55YTQPRmc41t737KLDKqDqCA8mqqXBQCm9eZw5Wg3nfebaKBXx1rADVt8HA2ex57pEuRcR3oTHRrdcRunpy9FqdH",
  "key24": "3yFjYcr2tFigeRdw2rv8dKfEM3qJEpLrbkwydejiQnXH61qVvr8C4f5ZTLYJcoZg6kpim8rA1QiPFp3fxG4VDGsj",
  "key25": "3qtGsA9AL8aEa5UEKf3jjydYkznf3CrxvZiF822Bb7zEf6sfbjY46ApEXs6SFxDQMnocgauAamz1iXjHKreuGQHQ",
  "key26": "3HsytaLHxkXS7Zi2AWiMeR18tma8XgVmZiLeRwgBMF1qKHHbEVRm1gQLcAtTgWCwRgCNQwRzoTqC1txHjT9AqUeu",
  "key27": "57JjZxsjaxWxFLg9Psu3XATaUXi4DKetAYjHe9gXMWm8whkAMxZrqv9e2Tux8xYxqmeCbRoHc2YJ5a4kWYfcywWv",
  "key28": "U4tKRnGEjedChZJJknkWhzkPK7ftqrcSp5JTWNqp9snEgYiTPboGdcNH315JXxtQUYrR5fhd2LerbZX99aWyGPE",
  "key29": "4kZiY3AZmxN2pZZSXX1VbRkh4fSRoBHRwjNBWeVyjHr7aB2gGYFcaKQwpXyFHhZivyCjba3zbRr2k2vQDwYrGyym",
  "key30": "5aRjrRef4DCPPkJNkJpPYNH1m66G7eR2VdpF5r5mNsfkZ68HERidYXG9ZfuD4FBEzi9dSYvAzVr6GUMKd9ZBr3Bc",
  "key31": "4tXv2GW3NZnuYDFSnGGZDRbLRfpBTnoetWqbXkTrfMHYYu7wCb8uxDH2BvQ1U9PGq4udSwWRRoPc5ieZey3Mwmhu",
  "key32": "3GyaBomYYVmhtBGdf3mwkXhFePN86ascLi5ZYZfzEpFTtfi5NKtDVW4Qgvw3jBSpb4rQAk5j7bCovrJiEd9qPDVk",
  "key33": "FCUtFZ546m9u64JYXG697H56EZd2NCmTEeSedpsLeSWeRVXUsmfyNfPPoyadQDu73kx1AJw86Gtj7PDXRPTsizS",
  "key34": "4pY1q8sdDemadrfuKG83m3xF7ZQ5dKbCY4mwppznHPTbHQzxzr3mKnVFEpZggw5F857ijFe6uHXqe1vbeEPdHQa3",
  "key35": "3NF5GXLFrTegS9C4MpL4pVBFzGaDVUJcU5ePy8CzgKvAtJWAJrp8tABEL8wXcjs5yUPzRLUNrfvzLynvKvL9Kats",
  "key36": "5xygN7XYiUiLHQyV5L2pd4FXFfbjbcNoDsGz7EyWPN5wqvf6RBaVPsxLK4ZAVyUuBWqpUMGvXCytg8dgYFb6KNTY",
  "key37": "ixMdAZND7mjsNoNXmaUd4wUXTfs3Fj1sghHnFFLAmzTDHEi268UEQ2KHXQXiz3aLqaPJQYDMvQtmuRgfPfTfEzB",
  "key38": "3guzoiHDGDnL2ywSEpSWPmyKPcLSwwdWZ4PNbHMuGAoieRFwpcPMgqoDNFMRUdwgrKsyj4JAMjjqKRGmsmyvjdb4",
  "key39": "5nsy1Ma2y7AFMtmfnvfN6eHAob3XM7JybzX9JahkS3NCirFEi2FdxR8hP58jM3mmb4SGeffxtsKBHzp6PYpcNjFa",
  "key40": "4vQ5fbneT64fHmG9z45U18QVjoTymCMzwdTiYMvHRx2nPS9Pmtvnz4ABkkfPGgt9nGGTxj3WAeVxuwK2TUkw3a5N",
  "key41": "2stXKuGwGmcZNSDmHKAkxTsF1qPaDwU9JTe92uxAm2JYBzThfDg9dHERoK1ry7J1sJneAVnYcZUa9He9EkjeQ8Cy",
  "key42": "3an9oAkT3tC5utzjtQjPbuygRANm4d4WLuv71Bp3c46cSYvULtY2cBe4PigpTRhapqwSLML6ZQ52JgQGPqbwV9a3",
  "key43": "psvLnmrhQ2d7bzNd8sJ59ouo1Yq3x8DcBiv7Lz7ZeACYQaXcoDwugoKfLdSeN5w58nP8PwvGupKPCjMvnjBYoBV",
  "key44": "5Dz8g2NkvxEYWfugQnWk66Yymy3UvWR6xTeYmnv4RvMUBvkgteC7b1LdGEuLXhv3mPnoxSnWVGdcR8ErZHZET8tq",
  "key45": "5g7b6FVmTenw5QWAXxZwZqYanC3uAi1Ch4czWxisGYmagBAjD4huVB9jbjHEtrYMQ7JW53DuQXDvFbRac5xtixtj",
  "key46": "4f5tHpHRt6K1kL8aMXzALnu2QPRwCSrbQjoWoJf875tDfFJEa7LVRmyafqzRbMDztYWkqeh3t9w1eiux97cMaqf9",
  "key47": "5K9R8mepjXCJbL74MiEhHg6wBqrYR3mdGm1qG7HyR2q6xEEmX1pBXijyMHAS7EF97N46448t6f5Yf9nderPCAtwj",
  "key48": "4Cha59DbjDo5m3D9FpkGjjFF3SuhNsvp2yoQsneQMsm8EnYN2wQeVqhrQ4VKjKKchVeZmVDxJSF3qaRPQperARuT",
  "key49": "3CwVeXesTTA6cLTnEWZ3nWHajvDS2bQBbtWJ42jxx6Zh42oa3wGdMbLVxAymyNNkccCBkoMEqUKWXvkM37kGZZJV"
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
