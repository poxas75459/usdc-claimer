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
    "3kFzwKVGCR6kXC5F8oiP2isumfQStSif3nAs7N825tTSyhciJH3D1TE5z2XA5nA1jUGj4GpAseLEk6C1yVWEwQQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nBNnv6bvCYVGS2GGmjYmeZE64MMdR1BCmXKNr2R8vHdEuX65PuPBzR3fp1uXgM4PDtTzN8knonLqk9Y4rfj2db9",
  "key1": "46XxNbyYSbdnRY7aJUh8XmxmXemND4T7cpAHRiPiZGiwM4FXiCqY8KM2cdvygjRBPFAdxFCQDJLp3qc1uhXWzqjX",
  "key2": "uNDXYivRkdut54x6VfJ62cXYX2iK2fdjhb4cCTto3UmgJNVFFWW4GvGdsBzodZ3Y6rLAhj3nb6twRaqmZ9hSCWF",
  "key3": "5BFUQcptjN4n6K9iraCtttLPmgJ7VHS15R5r7wAag3aDX8aKq8av9vKFfEWGGJiwMh1ACGmpx34aJJAmV5nmYpno",
  "key4": "3mbccry1bzSqEVuViLqHG8ZupzD7Diwpyq3C8W81XECjgmyiDjoKB8tUbgz4GNYKketSNwrHnz2Qb6gZurVJajt3",
  "key5": "2XqXezuDQsHjhLv9C7cNmKW9ATMQfXJDkMY8KqwQpEiyQBWW7Y9YeusbTiKq9DY7gdL2yQ6XBL484RXFYCwVn3kd",
  "key6": "dRQkD2ap3BydSEFTNhXiV4SEzmQHJsLwFEJQEunMkSGDyaMu7TnbJcNQshhjdfzYfYRmrkTtxPPoj3S8UKE4tFy",
  "key7": "2KH7pjCX2AggsLMu43VXXUPWRq6wcvpHXi92WADbW9GSr7sQvA9aDzeoyVRnEPYdLjmMG5hGBDxc6su2w2ofvd5i",
  "key8": "3NBWJPfBM7VYPrMqPdQUTSpeB5ptnkTohsA43a2K8teKcms4W7TSjD2a7VSCy2X2JUuA8kypgyXfdbcMAimhvPmX",
  "key9": "61Quygu5nTaqN9ApQq8VxWseX1Puki5GVEujPyyiDRayKNJo84erxCfwqCcHdJGh9ei47fAuNRbuYV59xqhioNWC",
  "key10": "NcsVtUpfw2ro8zFhbqz8ppBaePQzbSg5D7xiLiYPRYDJdcfaQZa3Ron2CnhMepNavsRrSHkzXgYAoprqLeGBTmv",
  "key11": "3i6TQaYqcUn4oGcfM2kRoL7qPSE3aMVDwcfAAxbsM9kyQVvGRrav3YR5o5tzraBHj1aZ7CXjFoUDEaTyaiaKnNbt",
  "key12": "YUKvJsHg5hMPFrmw1JwjTmPRKnv8EY6s78ECR6anQ235dJuKA27aBV1UZccrcHrqHAsr8JwtjAxfqyERfGMzeMr",
  "key13": "5AoWETyZ98FXcbQycKm1p3jYk8j29qQXpdCEgTuAhy8yvdP95evdtbcg1yttAhXhX6nWpVYaeLmUNcdbkK2HYS2",
  "key14": "9mEdLSKSo9N37igPbmKot8NxeJDfMG7qpUHSm5v9UWBbbDMKjNSofC4av7ebznGbdg6T1UxcCfSJVatbdKwp4AH",
  "key15": "389ugqAtX2pwtahanmNMJEDLzucuM8E1zyedFWrxjpACUNTLFEWtR93jZzD8hw5PQ7J1yUqSLKoy1M9qVhboAVK7",
  "key16": "hrBrdovripbeKrZkVysUbaz3XgcPVaUg3bTsaWfhpqVEC2NSg78BqupTUkKJRLL8yrat9pm3prbAzQudoBZVmQ8",
  "key17": "5LDuDwcdzCcBYwY43rey3aZa1X1EbREhvJgU1dStGXLiMmTd7W6eQrw5K2gm2PaDhrVJxD1XL8hHNLDjAzNxMPRa",
  "key18": "2ELc1priK4cUPSdEoNAzvuo9LFRCyAPQmhvez9bHa2hXn1LkAhDfefvfPrBFqMnT8U7JZwXx4p3f8fSW6C1HwMQp",
  "key19": "2YkcQrwMWmuKxN6TMBPH3DsabwnPbcGFcEi3b7kP2qxgxPPtJmBbKMVnZYQRRw2asdumYHYkXamZRvPnNMMC5zBZ",
  "key20": "4HbZ9GsPm3gTcUXbMEJdoBuX3sdxrrWdKxKYvdnRSWegSK5oA47mxQW7kYJmV9aL5XbFtN7UEMdVhSFrcEpEHwmi",
  "key21": "311ym1HUvf5ZZ5PwVZPHBgywea6YU2U7NtbeNsR8PGZ49MmqvJnBpGUxT8ZgYgP4mVdra4qecqVv3XWcPkx6twGG",
  "key22": "2QPvZdMBQhV3rf6vZFWoxpqCLk8i1VQhriGCY8tVT9kcJcS7JCVVotndMv4nirfbYsx7xg5pDYQKK2UavaieVhwv",
  "key23": "cj8fZTRh9Fdo5Qth6Kau76U5bkgcqmncJyQLNNmpjf39V9wh5UAgBYyMeDQcu1bJF5Grftqc8UTb7Qm7KJzh6M3",
  "key24": "126HTB1k8uRRvPsuqW6KpD3TSo97zESdZ7rAYNq933bdvUJcBfRQUruz4Txffh2u8rqHiUCotfwb7ZozW82D4rcG",
  "key25": "35G9UEVcUMfY2kSzjDnSZuCLh53v8JJwqG9A55JudW5oMay7sdSyvZcLvnGcieUWHWPKbT7QFWr3qSN9zyCkbQAr",
  "key26": "2Jw8YmFn42obxFsqu868MVGLEt5nZgBc7G5opQ1JatwShV7TA7JFQcZFqgDLSczXPsQwLiBhoTPdrGsx46aRUb8m",
  "key27": "4xbqHhgYsfPTVUHn34s825vFREBGBsSAewaixmmHoykYwbijwcBUMg6D2EnaZb3gcTVgg6XMVmsCDjEqVYRDKRur",
  "key28": "4Yx5TNkUs2b4CHdouexptUATVS4qDT7QSrjV1JKNXq2NjKs42m3jASbjnJD7Dhqztymc6ziJhskG9WVu8nrAhiJK",
  "key29": "7kgkM3MP5HB6D7N8R8gfTptC1EsFfLRz1YEoHWHwoQnBXiENNiEyuPyNK3CVXnpHPNbBCb8EyDP6vAHwZfrvL48",
  "key30": "5Pqv5VeZbxduFLESskVQQ7BPxrrezCeafTsP2LfKN8RvcFM5ZbFS7wuc2AHVKFfn6sqCBDcNSEwCvdFyeYaa4Mvs",
  "key31": "2CaDyHfxMkifm7HwXSafnnbNzMWNUVeuakVnkaVk5Ygh8bvHK5c296Cvtf1StkTe6sMFirwrAsLQZs8WtFQTz4Ry",
  "key32": "5WwzKgUSBCVT6ob2KMQBqF4DQuUPF2zUsYwppjueaGa1o4Nk1j2dAGQRRkBusxfzDxqx7DPATwWuwxn3ZsAyTo2U",
  "key33": "4gacojaDLr65UdCA3BntPaCPb9K3zkRurjffxbQ9anXVrGGHURdcsnCdzyki6E1SbrqtoUUV6y91B363z31un3cg",
  "key34": "LpJWRf3xVf9AfDZe4yMwhhNKmKpp7VEnWHadkrpedNXwjRe1ury2AnuqZdHMiM5KmQysRpKmhn2GSeeAXWdbvsJ",
  "key35": "3A2n854UZ6jPLsjLzxpDtPuKDxQmRwud1hUgV3xn7xkFsNTwtJpF5aJGMixjgrZq4VvDiTyqQJkp9Gc23ekdrUTh",
  "key36": "4V727gec94FfXcEXH1Fk5NPYpYKZVgbrzHhHhEeii32jdnpt1e5HQt5Z4ze26ZcT1XtJqVMuFScQ7jPWkLsGHVcB",
  "key37": "53nx2JqAHCwhGRbCXXFZKGcSQ86ekSnjAaFdB9HbBfwYqNKWSxhbQLYP2JxTJxbfaPCVVkkvKNkJnZamzb3azRgc",
  "key38": "2BqtfRworc1mALErN8qDCx5GbSYj7nD2f4XEJTXJBu8EWV6TKM4GPuZscJ9AfjvnVJHo2ytVF7EkRmvywmmUCusx",
  "key39": "XGAz6ysYPJrKRATpzwW6y91LhZsBYqSLLjK5EzqUBFqtNGXYEDwdPRdArGFZQ5825DJyVGfFFr1zzEj5A2K4JmD",
  "key40": "29M1gU94yPMLJxXPetgMFR2aS2zGLi96CiV1QC3QJXbNR4QU6eUvxzqSSrGK5VZc8zeaK1PAAg2b5rRnbg5TPEj5",
  "key41": "ie7ZtXJGuKm5HV14dRwAoMtyhtyYbDu7oRoufEbkG8DAYTTWP5XQCN1P8xmfHpVmVERjv6UwEtNE6tx5JjB5LK7",
  "key42": "2rqD6tTakSK35rw4wHxGQPzsxUa21btdBoJbZbShgPpHGdDK4RLx2zW32SnQibXxQaphhoLpXKZ5SmrFzrnqffRZ",
  "key43": "3dbsWpxm9a19tHLeptUcnvxHT88Dz5VS1SfPLt3dhAwPVqEUAAJrLJd3EBLeKiAjsQZb2LTnBFcdzTgpHpqFJ54b",
  "key44": "4raabnFsTnCCttwhY672cxdWNfZAGDjs2RP6WyF5CdjQDbQksG8diiDB6GK7x2hTHT3KVuzTTH8isrD7BFGHUpgs",
  "key45": "TEPzRrKVgyxVBSgJGbjwFkdftqvmiKB21kK4qA3tan4Yys9WymZZgDTyEZTE1puF76KqLPXxjLN3x3BjKkGpK8x",
  "key46": "2Ri26EUfD1z6MdR359WXZFGoGFdnuxjZkPjghcDKqxvwhZT5juPH8zct7cvbxxTCCCo5C3NncfuWYCYHoAhcgGup",
  "key47": "T5m5ik65f73rex2EuCRsrj3GTuPkSx7cWU4MDHWnvr6wtFUg4yfMqUfG4FFaop5DiukboFxrMULWhFoWN773657"
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
