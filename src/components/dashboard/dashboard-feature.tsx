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
    "3V2EPsx56kam3dKR1iEuBH5rvae7hKyAQiPtCVUygjRS75gQGC1L2vd3YZDDhmiAyTYwuW3tZmGjnKdLnCzXFd9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3czaURjHAL72KM3o3qDFzh69zdaX5Aqo9jb38Vdo1KcBQgTGnvDwqaD1XUpZdSnt3a5gNKEQr9zbZjbhe27nDrkM",
  "key1": "qykmEyDunhVvuVnzhrqUVKgboykkhYjCuKeRfHNqXTie6QfswYTbD2VNHWf8QDHLk5D1w3j9WAKncXGrJihiJLk",
  "key2": "VHgS1Jwt77dGcWwiY5Ro5JwNAAFNjB6ecjin3CyAnj2U8iYqWXLKaRWxoBxjgqz1W1qKRCEqKkgJbXqgC5sZEWN",
  "key3": "5ST7UMnFa74fwwqpzgsv3iyhnAuCTM8jeEBKrMRwCL2ZKYHoRPfaRYayJSsCBJUhZXsTbZRYt3FmcJ9XgLazMutY",
  "key4": "4WWD2nv8s6pyotNVUkY4AJNKrqPhHmtDXWUMJ6ZYEiGe2qdwNmZQvSm3M9aDjLGFYLP8si1nsURVYRwWzexaW8r5",
  "key5": "DkfN9phHA4nwRn5FowWSyYw1S13GBMdhxymqCDsQHPK1QdiaeouATrtD2ryx88RQBTHVTFc2jwyhtaFTeuqTeMc",
  "key6": "BmbHT5yzN9iyrZN9huWqnufGbiAUem1seR5zaDJMLebEzreBd3gQa7srHNxtQViiZkKVQtvTKPyjXCZcFqpoULC",
  "key7": "2wpkwrK3GijE6HDkeRsAinGZky6xRdY1yifYmmXD2CmUVKQpGQGWyZoBT2Lp2VbqXBCrJh69VnUiKqkrn6FE7faN",
  "key8": "gLsj8r6Sqv1Sy51kdfEG7tCjBGmXNJMYwcDwPWKRBVX4x6ne1tJCE4D8A8uZFAdrtH7qvSfnrg6zMMbrr7XXbXs",
  "key9": "2zp9GvYp7LgUt8XxncMB1TNZVxBvggzhqdYWggy3YVJeWqssVAHB61K79mk8wzvESiC5JCWjDQuJtJFN2qMwnoCM",
  "key10": "2HzNTsdLpEpLivnfHh2grZFbeaadCwY2uJ331HvZjCo9esSMt1cHmMuRFrxaM36gqeR9VpC9Cu5J1HBzCjtzzaKL",
  "key11": "3L9fjhg9u7sFvQgPdzLkU3FpZfVJEGd8AqymxW7g2FaHYCtbEvPuXpDPBPxDrc7nwJGNS7Y8HTM4PLoTgeAaVDR8",
  "key12": "JN4hky3Y9xtPSdqk7KSoBdQw8FpccTrHwkGtL6tc5oRFVQjgGU2eACGyAFqN47YfMZUnJ2jhTNmSVswHZGbT7f2",
  "key13": "3kwe1y7U7YREvQrZzGk7QEnqwceJjRgdMiX7qnCKLNoiFHhGD5KG3rinNGYuiK5MTweTVYVBdgdMKp4UmiGQ4h95",
  "key14": "2jzR9T6BeF4kRWnkMdHXDPkRJij8sDAJuUMAup9KhSuzzeUhEBbLY1pF93xUhiQxhZqGcSr7rBu6s1AF68Cthp7U",
  "key15": "5G5qXBGRrGqXCmvG9fmB3WQbRS2XXJHhd96PYRLJVJ3qaDBaCDZu1ptVJjEA3otiWJoPaGDz3ctrwJKMTWfSC3RN",
  "key16": "7EkDJGRbDx93zmNbTCpgweKNfrEDbE1uurQZLgCp5SaDFTWEZG2vTrVKjVdudbJfsJKXNEyKrHRbUe2iDpyhXqE",
  "key17": "2goXuf8QCniSDDk6FRVmUuULGMgyM4HbWSLS8eiFwh9WDPR1dyh1GgApeWZNVMugGugp5VvY1Sr8an1dCCSv9y24",
  "key18": "2q8CnPMxTGtx5x2wst3HhKpci5Wtu5S2F9sahpgsAb3r4PaDwqp7xGoRqPFgfxyMuogM8ATNtMbGAqEgF37Pidsv",
  "key19": "2q3JJgzj49Z2ScNy73hE8oMv3fZiwV8PeuxmdoaFAS2q72a1tZPrjejhtmi3vmgTmvayEqJXQ9UViwiX2WC8LAW1",
  "key20": "3opeByPUACbkjg6PpSBqocEDSwUmUPcg8fFcCvHXVqxgqo2Q9ESfeWohmFEQN7Nr6tzECn84jUheJWBQaC3zDKQ1",
  "key21": "5hA7fFsie6K7nvrvQcw1huw5p2QJCgYc53VCMukXzH5Ne2X5N4XKYCja2pshjKx4XL5hJwMq5kbDZvn5wSDXWz2X",
  "key22": "5wbSEqADFWZW9wipLGXDXmmZLRcCK423FMTJhD9UXmPhEKXJ2ThvVTgV54PS6QM2uG7KPxD26oiVm5tf9fSTYidY",
  "key23": "zyZG9ADpzir3cj6cXFtR5pBvVvouZ7dG2oUBvG4DGyVzHK7hcYDYfmp5kzuYwfPPJVxNpMPyWC5JHqfCGfqPCeT",
  "key24": "4DyfTewt2b6jg6HK4kiwoyY3qRVLBhkNF2XSuHWTh4sAMEJ66yM7uhUDG6oUEstVdb5Fsg1CsejfC1EKA69sy8AY",
  "key25": "23BGvcsK8vYT85Zgckzo3JeUYHBHcDb6RzkR5x5SfF9e8p4o5KaQPxgskttpWkoUXGvfvu1FWdH7LYtZpM1Cq7UE",
  "key26": "5uGhGVV4fox5FnyMrTF317m4bA5xSisq9v2Gcbtq9eKHESSeqzVJM5qXeN2y3oyx5DMfJS4ks4Rb9HGpauvMzmnv",
  "key27": "u3rVQ4tcNzj6kmr1g4LiMikheBuWzVfbN9dmzWnFQp7nV7c9Wd1bhNo3Ppemz6KvL1uReFz3AtL88J43FGhXPv2",
  "key28": "3LLP4JUqcjHu2dkFtEVz6UCe9z8UBqq8DUpoaxKqX2igHeWMmAzYDDmcjGU9rT7eFX32JrgRnbiY4Pc9gEKPc1eH",
  "key29": "5V2sNbUamEmDxooyQMSrYcDVrLExgBJYstVu7WT68MabvZhGj1oJUdgr55GZownQPBaLUuipoDAoeeKhHBvsSjRt",
  "key30": "23rxjiiNPMqHHMoCqbFxvYdarmz8eU3RNHyBuuAnZZkUT9QsQLdczhgLnNy1znd1JXijQ6DCqLrmBXjMyCkrk6Je",
  "key31": "52Cx71AvEJFyHJeSK2pFVzgFCaH8PKVe5efhu2aeMX9fWYe7wepfDUaB28a8iZNZejUgT3ZG8KX8BF2abXS6uomU",
  "key32": "nwELaiiCAyntcBHVJ2XFuSqW31M5qXYDirmSRWbvEEUJqXamuzxKeqhn6B3eGFyAyiJmkaLkGb4Ffz7vdaVJArz",
  "key33": "4Ucs3X1ayH8eBitz6VrRCNdE4BEMFT1yH6oj2CDoXx5CuVX28pxm4ZRLcQbN1SkouqiJn5YCGyjZKpBviSA2twE6",
  "key34": "2ygiCetVk2gkyKEBFqoUb6igSgmatx1QjdbMYXq9NJEBeehxtszoDA4kpz113HT6wMwRoUt7gyyvjopc38kEEawW"
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
