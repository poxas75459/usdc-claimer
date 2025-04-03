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
    "64eqsGBmU1Njep4YgR1noxFV2AoTy6tKKRV4JDhs5nXfSebhVtcKQKJ2tbfD63vkaGhGJ48TRwk6miaY3jKWmtN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sexdwoUK7zSi8Awrw9iaMBPhQKtZPrxf9JjkiLRoYYySSdr9iBQz9z68GdNw6LKEuMeUBBt8NoYY5Tu36qVBTz8",
  "key1": "2F4tFnSfp2A67d939K5gZ1f5dHV5pb65AnCzi1jD1MdWLGjBbuABzG6eC8ZVdTr9k4AYgwf76pv3U7y97A1H9aYG",
  "key2": "56HC3Lgjmxcdyy5esteBTgvKDoAhYzTHxCEum28vusaPhGRT6EqNta7SdSC2xDRbKJFHbtv2yhvvSj37cdckAgYa",
  "key3": "3mpwwxVguXCZyUUvGJH8W2cCuP259nZ8fhXJH7qG2H7ywmvSAnZEq8BnkZAVRv5rCZa8SvX2AQZqTLpoTv2ccBKh",
  "key4": "6HUz9BxHNbszbpHEr34mwcYWKA4peL8eAAmTb2guGuD4NEKS5fS67BCNjFWAhH6An5c8HHESpaWJGj1LdPJJBvY",
  "key5": "2EfYG7opM9BrsdXEhKhzkMgKi4LBzrEh1KJ4mUZZSQsCcfh3ZUtXw3Se3bKnVrBLbNE5w5tXmZWk8zwzJvXvvpuH",
  "key6": "5YBZwPGSXDmutFJ8AWWLw43beXE7xyFbJmmYYbiRnmdaNRiSTvJNwbgco1tho79QHHTKgyK7qAcddd8BgrYh4ZBY",
  "key7": "r1Hcgpy45emRhS2CBTWJmyhoq8ydUWqE4ERerpVEBKzy7nxVuVj9499Vp4LN3DPzwJG8Y9FCszc1Xas8M7MVDg2",
  "key8": "3PznSqPEn6hnykwT6HJmEVv9AuTom2bz7Dv8Pn14GPWxuiXUoRCd7QzwEhniAeNgFtwK5ShpsfuMhwpk2fjpmmJz",
  "key9": "HVq8tVSU6bM9ZSRvxDgMKMLDRoDXHvuBu171GjopxttJTGyY8bqgwpEPS9h8ErQdZCEnCRbwi1CfmQi7kMyEq2g",
  "key10": "5rtzQ77PChdaQwivEkP9hCmNHz98JB6wgkWCd2VNDFE4seN2uVpffg6qPG1J4FjYUa1EqNgFVxHU2i9yHiBx91QR",
  "key11": "4HUP7x9un5seMnhMEJ4J66bdR4a3wwCy3rCWZefqh9bUMhQ367HUqda41fv89JQo8P8gPMzJpaRh6FDp6uUxc7hn",
  "key12": "5XHYmP1vLF4mnzAQW6ey7EA7TkgyV6MYTjdrUcXP4n255HbDw6L1jZCo589x4js249MpLDDEwFXHBqxp2wFt7b94",
  "key13": "4fxiuGUNE2MSdmumXYcAGGiLvyhAMBigcz932DbTW2FDjyKsCQ4tqQbF2srwRfR6W3aWYiTQj9gTXrFuXsEQRTvm",
  "key14": "3Faf959j8fCJejmHUScVaRAt7zFoJXvVXw8oMMqBqZo8y6SJjVoaE7Nb4bHXSau1BcRnA9PVTbY5Swgzxcv6TStG",
  "key15": "5CtR83RMANfdBYEtnrgu3C3cq37nRD3PM1797umopcRFfLgRpNUzyJdh2vByBzxHRUicQj33qfY6kYxJ6HjVtgFT",
  "key16": "2XKP149a62HGVoubmyRTjGRoMYCbn4LGYhD35odt2xFDk3VkfPXEqSLKoDLecAfZHtA91n5qC8AX5hzZgh5zkQcj",
  "key17": "3dzdoy6hobzLsAjRogc77oaw6JZL96LcZyiqQuxGCdick2yYgvqtTe6DYJ8tCmCZDC7o49fTYVk1ebA3Us4DoMYh",
  "key18": "26JMWPpyou3Ww3VJbweNb4pyD3vDQkCt9swx18CoL88DzdoTwQxjVrPBGkMgyPzxvGbCQg5AMafkAdFCi83yprKs",
  "key19": "UpAKb8utX3KF2mA2qhtAPE1vjA1NcYqEhE2fTey7hGu8fPLiTMCv9cx8g2dx6eEfh2AetqgZqodHGT1meohA3Td",
  "key20": "3NrA5Lrq6ctetStnWzccYxYnuYAQGkceC2UtyKujWDPRGqoUk9UJJrouq6sAiTpeo3sv8z4XE2fxQyJ3M1uaZgQX",
  "key21": "4hsURTDXYEnEVcWb64ncGJc47twrrYghaksoYsqZf3LgDQ99vCFUPtVaBpjkMYQMEfx2hUw4pbo4oAzdYj98eVf1",
  "key22": "3oDM1kssVcp6jSWjsNiM8eD5RY5TBHGRpULPRHD4DTNJ9RD4na1Cs1NAuUCBT3vTnxGaDveREf9R14QLBPjKbCKh",
  "key23": "42cFLKheipivpgMAFhRzEP3EMDGDnLzSqRM1hBH3cTHGrggH12tQCf4j3Sk6kp9QwJzVtVMVLk6x77SAsb46iDaA",
  "key24": "4tJ3Gq7vkiRX3jJai6hqQDMS4pXqBDy85Xk36nYATRZQmxhRujE6RLe7Kuh9ps1yPNHYxbub66LW6HfKDv8E7FEA",
  "key25": "WYRRaY8vKsewCCGnaTxCfuJGAMPq3Nsyx7Tej21JZk1x9KEiVwh4fSckQq63urZudksQWf3tdWC7oh5wdT4mNgR",
  "key26": "4GNTCEwkFckb4EpjTfBm8pVdr5z3S9KknrTmV8VefABru9c7FNRRo568NAjTXCQ7ie7TVSg9Kiw9dVNFp7pvCNSr",
  "key27": "55VKGu2juYUT4qDfVpZqfy5EJJx1d8ysAHstLRmg53nUmWRVaWK5uu7WYCWAPVtDvU2EgAbggtDb1aK8Mads435v",
  "key28": "2uiezBZYpTXoriRQS8My7HNgwd7gDowGXGhEu2q961bpKuDQqGENGiBrWmDueQ3uKbh59TY9iGfqn5aeFtyAhCbc",
  "key29": "82kEJMGHMnawNnPtzz8H3Dn1qZHNhQF5dNxCt1K2xMZF3Q9PPm2kHJTU6JbmMLnNmXVww8ign39dkCH71pizMdk",
  "key30": "e816RRnSY7ik3dUAxCrJ4BQDVSghHswwi6qyj8K1eRMWJkzCzmBgHpP47VETDfLbGy8gfag9Whm2cVthqqZwLVv",
  "key31": "37UgEYZrEUqCUeZbTCW5MNjHCGm1C6d9QwXHmY7sPAR2SmqJwXC58zx813AuNFUiCzJiu5zfwZQbTtn7N6prqDWp",
  "key32": "3oscKh2Li5HAjxG4RodCzUPYiEwG7KtRnx3YJfMfXmxMyZZ9LqdWwVxQYgsKToZ5aji3eoPrmNvVxdc7hErbhdSP",
  "key33": "xKBahv75p2wPPogD9H6efnkvLpB8RdExT8HfcAFvNR1PLmuf59ZvjHRRYwbvizf57HCZWgT1g3kEUxdKbnJeLhb",
  "key34": "4Lp8C5rrsiqYmwmKnLAyhU3qfWtWjQ26dSeBoNH3ikKSGN9RmhiZNXpFwkj57Y5Zsf9RbNJPR8eNdCaJX7BpZKgz",
  "key35": "jvDaAi6b49hbuJyS4FUcbSBekNZJ4Ek5JSCVikX62aA2Fu4r3MSvQ8bBatDNV7cpcJ7BE1qRRgAAeaY1L6Tsi8Y",
  "key36": "2V8zzYqCGcUHgeCU7B6gfXTZMYRY97HbUQmwBz4ieWd4m3jdKXU3XM5JA6TEE4hXgWYVk7Fj3T1WyhxpNyQL3NCf",
  "key37": "2YD9dkKBasLL6gzXukjQ19J4AiDnCAnXFFN7NJBKp19uvJhiGVh5sU4DGyFUXdHCTTXLsw4nXUFE72rDf3ZRCvhE",
  "key38": "2PPxCNw8MjnAd3w8L78AkZzEQz1zoazsnGjKK2spRUDWUyz6zUDhPhXnhSBPXYCMP7RxcMjn8a8WzL2Cj1i4aCrW",
  "key39": "59ayx3Cfuqt4oL6MaBHrYBFNfVFBndD6bFk5UyR1cBLFQqyCFaUGhXCDfU9Lz9rx148xMVt66dVgZD8rDjn7QU58",
  "key40": "51QuytiBEQLLtWiCF8wkbfnmWEX6JjYwBA6be8FLogp6g7YeMCvZSjzv2WNKKxJ5UYXBKRk3bDupYW5LswzTherH",
  "key41": "JAeW7bFjqpa1DwR8HVRH6tUyEhumDTSyaM8eo1QBFeSuxKtKePbVBh2t2xtZQQ5X11NWBkGpakfh871AVu5vshe",
  "key42": "3sebbqYBtbuZ8tUp4ZcwKp8PtpioAkwRDrNd1eoQbmTrc8jiENDMWK1xYqif6fBsAHrPUrTwy1j6B1o2cZNo9UY4",
  "key43": "pMar4D1QbgDzs876L239RhUdY46qBgBX8BnzA91E2aUeuqGMbMhtifxsPDtBCPY8YSbymNfdWMTQ885VMYveuMt"
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
