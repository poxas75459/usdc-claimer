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
    "4VmUvX2N6wgBeknbHkaGj1cPfVLc3Kw4VmVkaL6YLFvZkkheKq8FS5UL9FfqCd5xgfZAndhko5d6TnsBWLEvxnbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ypJAJTVUeRBWGwApZnfzRQBwTFUrvANrgD4dXBmQrzL2wwhi6yYQAiLK5TjbPftn3rnfYQAKrXqDB31ytJVvKi9",
  "key1": "EPcu5acu4e4SGB2MAvSs9pkS2aKMty3hnu3Mif4hRNAtnnveDix78fp9CWj3VWBhCDiStLquVXLrJj5VJqCbF48",
  "key2": "3NqjouxoEdb7e2tEVzbmMAQBefijELPh7f9thb9vQWpcPSjPE6DwmED9YbAK82SqtN6bzpxoNWDFXjLkKNXS7juX",
  "key3": "7UEaf1taKtt9PRwi6YdUiNPUHYXLXmhVR9a7rBwyjgk7jR1B5fpaz4TzjN6WQEJDWr5kw8T92mqjxRpFNGYWeVE",
  "key4": "279EZRVAjcXX6srtMF91a4nvQje1ijRSHAnWpPatA4ABgPTwL57yuDBCrZruBqJhq5ZX8C1Eph9dF3ywnJgLP4JY",
  "key5": "2GweFybZAGRNw2y2JgAiGS4oXLfNyzj4qC5XdPPYtkumvj66jPjBfPs3qzC4vw7DAXpGkEeA4E2kp2xbeN9K6oJf",
  "key6": "41LGFofnAiwkbYjuxJbyBLvpPvyPGedmKA3nUfR3wyQPUzg148Pr3FQzVXGdFRwFNXPDw53auaDZ1XHHrRMYjTem",
  "key7": "3RpcZURTM6q2qXghEgkrbJMTgMuDgf3qwfQx9aFAhfCsaTBLMmtNvGcqgLdRL2LwKzpThBiMXub7rVFJWuiGWKcv",
  "key8": "5T4KC6DZtmnsraRg9cRfp2X7DDd6QVLsy87Wa5MhtbC91VXZG695GYdunk1iRSz7RxK1enrRYCYzHqVfSph3gDa5",
  "key9": "5pC8Bzq6LvNZTkdqCM4z3J814oBeXMfyoBzYiTErDJpJtCSqtvH7bcny7azA7Z3dcCbUc8UNnNkosb83QLTpuoBW",
  "key10": "5XFNaHwXJ3CXkw6L3SdFzD9ufjxR7cF3JA5GJpkPzvWMKuNwwYdf2TgwwL6HZqrSxgd3P9SCGhh4azbRAffA5Fas",
  "key11": "2kKJ8MTujKbWK1n3UCde8Bh38XKpYLGSofZdoat87AX7S3TdE8q2qjRoiX5oTJ3ruu486wGExrdXaM7x5PdJTCuW",
  "key12": "542cuGzVBA6E88PfdVvc7uiWvfPUrnUpxxwdoHa4Dm5aipfmcGfzDZ4shwoN9MnCWNguVt74eB4F6Ns25ZzXmYPm",
  "key13": "2ye79zjhsXNznzznHHXuFEGhSRfxZi62Dz1wstpNkWvTi4tYpAdG5Z1rBahABba1PeJvDBWf33ZjHfbWttDJCg1J",
  "key14": "35JMEB4khbSFpqtpiKPboVAhv615jobSC8724BcZi3XJk2c2HB2NFJBPmA7KbTpMDfsz9LqDTE478rfmwHRbUYiV",
  "key15": "2rh84ZvL1FecAaE2oNo6SBEQtqXqKcRpkstZPPcUmTJwNFPoqpEZwVypFBHbkCxrxbkWW9sMYwjjJn71i7ecnay",
  "key16": "KBSvjHBXeYV4LsFdYU6fvyZwdtPQz75hH5HCVxcUfJzu9h7Rs3D7KcMLMoJxzoLRfTo6fcoE6rjXMMpSWwztVpq",
  "key17": "4C6jPHZmdcuGFZVt7ZVqd8DY4SbaNEB3cQCgvZZRRMtVqePX6NYyN3YmUoJgJYvpYeGwXmLaZwqqDwaFfZU1QmK1",
  "key18": "3HQMtzUmpwXSwD6CAsQcuRCGRy3Bc3aVFreYapw3ZvfnaYLMpcBybv2rmSFrJW1P6sEES6FEF1sRqjtx2ZrPWhkU",
  "key19": "4BFDc1CCXcoLtfZ7h2g9HTLXmWX74oqJzC7GJECwDQENagTRmvsM5FNfEpjg8HFN8qiw9UTMUmHcjN2RjfRKKxKK",
  "key20": "4Ms1NmT6wp8SLMEyVupdQ1a317jVmwjRy2WBwWyvC1vJpcbnT9TCfRzkt2pe887qXmRYZMcGTBnz9LYjEkCBDhiJ",
  "key21": "4UfyxhtcP4Rg3RzzH6Jq4r6JSk63HEyoxsHkuJm37TgbbwqQDLQMWD1KCQyfF3YqmUY4yvQRcuyULzky25bBQK71",
  "key22": "2SfWt3h1rfiJzNCXqQyWFKMC5g9VGLsxJ3Z8jKHeCvV7AaapWfTi5p8M64y4UcZdyrLgHJtQR44VPqUszqDnpmqM",
  "key23": "29oVERx3CjmqDhBpVCXEbWX6Ptu5bny6MogFmTAhuH4LhMX3Et8AQ7tbqnEAHyfKuGsSU74SQMitSv89x2hkPoTu",
  "key24": "2YgjPJi9qdwrRSAZMG78E4sKqB1f2V4XceLoTjcaqmkHmj2JfZsjgnxn3rY51G2uHiT8BtEiBX2fYikQcQdSiYfJ",
  "key25": "2sW2tgBmrHL27Zj4M6tHS8UpnWV2fdUS5thsVrzwM7KK3q1EdWGFKFsyJnaKicXhfB3fZCd84YBECYvJEGmHgGDx",
  "key26": "4BSzcr5Y16uuru7Kbqr1H8x2MhMegiiQ6NsgZXEvYLzVpEkfvt11CQaxXKtKZTz6e48Tw9B5qFSjMooSAE4wCHvq",
  "key27": "4fghs2toYCgDPNa7g2Lpa2xEFcnvNUmLohbAKZDQ3hS5iqZSfNGhJ1Cd9iuGJkahP4FMtMeoqoTXqYt28kzxajBe",
  "key28": "7LDFiUvnWP56dseDMkvTLqKXbndbX9qZU6tkgUmyUTCVtmVbf6pwiPrhj1haMZPsQLfJ7XJUGjY6geFbvpAv1Ht",
  "key29": "2h9DvEyrBGQP23v11ygVwyU9De6P7srp5obqroCxja2pFahFichkxMGLENDnT87kTSSyyZihSUQEnfwwGdXeFtXF",
  "key30": "4KQwLZTUoQhxogf31HxWN6F97iS8d9qYF5bbhtbG4XR4XcJtYTML9obD5hMXhDURk4FQaFBpszBoWjg9uMZSeXm3",
  "key31": "53RX4gAc3d8SP995P6mKxF6mTzthpTw5bvezQ6NkLv47RMRg3rJPPX3UgruqPe5VdHML2gAis1ywbJzEGFuGEm2R",
  "key32": "7o6di7Wpv47c3BnAPTKQi7uqaaWxsdHDrE6cdtN81y8Tkc6ugzmSRFNT17hpT7B3QNgskLvvvMujQe9ZdidGqYz",
  "key33": "2RDDEWDjTw7vEifvFcmnaRhg641Z7tB1Xhyzg9AsdjuifKfxoU27QxYaXrbhp1LUjHtgMLzxpZEmNxsJ1RAxp2aC",
  "key34": "MLfW7hVcPgwj1D3SVuWeVSmXxfcUWQ7ioiyeCDcEZjjSpD96dkBDSB8fg37Bz9Bybpi8jxKYsQ6G5DXQ3xvBS8A",
  "key35": "5GGBMikb5iedhkvagu283LHodixbhYNA9J6SKFmcZHEvaLDJf9mdEvMXMyA1RpLRcap5MQ65PLdVgTTQsr2xBipY",
  "key36": "2cGQDysM2miD12BGJQz4rwEDPuMFCvJj42NoxobppHW1U2eq1nGVEfSjhGmxz7wTYzfYmvqWDhjEi4cCxaK19goL",
  "key37": "XFDkvGYd5CDV4x1ubAbKgcmbzZDwptqMxQbMKHbPEoXRh3FswxQ12hNEgEVQVkXwy1UyjV7S1CfGVkWZhmwwAYD",
  "key38": "4aMHXPBtNKTcD8hrNCobmx7pgD1oG7dpa4wgdd6biRb5TLo3TbW4amc9hKpy5dKUYPQFY8g76jnvVSw1QyRs1XN4",
  "key39": "4F4MCqvx7A3rz5qZm5WSaPMx9yaGn9L457mKRXmcr7oAdj6qnpjEEkRW8enVovNswhaj7zgKTY9bmXeynF1guXP1",
  "key40": "5a5pxmAWJn8LJCmB3s3PKKNVebw4KVW1fuE4qMqHW6HLW2ryL53UQ4paMxMjH1K3vRsL1h33TuEG5HeMsuks3bqP",
  "key41": "2nJHWWQXudmo3Zi9UCeHhFCPA37ev4T1p2T8YHy2ZLFYzqPZCDprEb9zGyaFrAz3B9TccBNyRr5yQTqoytNtxLeS",
  "key42": "WqS3KhdPrkG8Rx7coKTW4Hj2UX5FwhktYDbneF6Kre4bXASVAmAPG2x9cRWZdz8tqH8Maix623iris4vLpBGcTr",
  "key43": "45WuPZgkGuw2iFYekfVFCHMFsHQnb2euFNvoTXrFCz12k7CLQUak9Z6wGJF45AiM4YMkXHvCM9RBbmTd5rjHpqU4",
  "key44": "2rPhYaADascb8QsA3asGas5VqSGdjW1uHU8kTA6BVbrSdMArk4u1LpbYNAdU8HAaDRoMkk4hxGNixcPH4hVUneMV",
  "key45": "43YYMoGLHBumguQtSf2MtqRKSJpnhqCo3eA7hGTRd7wTawZm5o8dMb5uYp6drstwKhmhwGXKB7hbnJpQsdjpGESd",
  "key46": "4EjVxsbieUxndoM2fLq8tKLyfaRD2uoDSMvH6UW9BLAtS3qEDhnWGD9utHzsx88UBqsrkyjKN6zxvCRyviwepV2S",
  "key47": "57HVGqbMXSBYPYMCXUxAAd4dKumv5sPqygr4aKyFd9ivkPzCSQvYMkivZVMgk7Ho2vmwmmHXsUbdqyyqWzWM2aVV"
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
