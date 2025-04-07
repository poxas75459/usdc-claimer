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
    "5bG4nXQoeQAMfumPq7TER5n3doaZbyTc5qrFQmgUPo1BN8xarXLUgTng5oQnzix9scmFN88iWVs5wEutrF8XMqts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RFSjPHWvDTrX6yuF2gS7Tnpe2gNzN5Kz1veZYepgid7yf1yRid9ZboJ5MGjK2dPHEimBe96VXD54EfB1p4wVnoW",
  "key1": "9NddxY2zfBZCYesD7E8C3QgcHoJtqZYTHA4CoxF2pTbsAsSE82X2xGhJ6kruCed1PBJaCjFAR4xBcVbV7KiU4Zz",
  "key2": "3zh2odFoenRqPtZLu4uwYZV6xNwixpZeWhASc3fcdtmgvqM96TDMf26WdekzTY1UySZf8wrgPn3pYFh42knqmPTc",
  "key3": "2s3CM2r7BKn6MprKnzwANqh9Xksu2hY94uYaFqCNEzLdVXSYa3SxZ9qBqNjtWfBZG5AV2Mu5b3KhHRa1oRN8xoQe",
  "key4": "3KofrvAH6HbKJQJwf3pbPEBtPWTxddcbaU2N5xtzNe69bu5MsckgPNU7GvSdLVx2WaiAftAQR2DbEjx5QrRUjfku",
  "key5": "4Nqe14esp4WXiY2fRvUFtppydPme6R4ngEfUBrWC2GY2kpQBdZoSGAb4pJHpSa7JNpaTkGLDQrCQgGXTznEP83wH",
  "key6": "4PREiXwoXeqMTCcHuSkuBiC8P3oCUbgPrH2wTDh2eVbfvGG6aYq6i3XUaoWxHBrVF6268BF3EpHfBSdBpLYfKAio",
  "key7": "624cxMkjmmdoL2PUuyv6eTa9PLyJ9GAmN8jssVrZZwbnZVhtZnN7u4imvxcvhnmuGL5RwZYBj1ZB3SoWcL7bqrMY",
  "key8": "3RsJ3GrnskVyVBkCSNJAVxhogsjVEHHmaEd81AenHrECyZYpmm8BafHKi5Fcgp4FRF5BPtJN4nPWvRhEjLAhEGQZ",
  "key9": "5EgbaJEehehMu3oWwZ9uAthFZCxpztgv5SJ2fkFmdp75yXB99s6YHG5RGRFpU9mHxxETABPhz9sWWeVoR4z8AYP9",
  "key10": "5H7qy2qE4ZhjNrybgnG3gX1CTYqwkKMeeCMqa78TH4njmC6LjNnfwJEKiq6T3uf79GBdMcYn2BbjzEtyEBjXj6VN",
  "key11": "3CnQkCRfNPNgyMEmExbd8jic5zu4FzpHoiSGtkKCyWFC8vt2NkXCQSgsLXxEsVD2bw4M8AvcegajueQSQbd8HsU2",
  "key12": "4EV8v4BKj7ae85egAwBZe2erdkVLEqRukWLxU1SD1NoWiRNcq7fX46KCi5b4UJSYJLF8JmmGpc2ZpShAPiwuDJhs",
  "key13": "43wFuihfGUTax7zqEsnmAVSzrYFXdiA98vgLadSooTPsY5W1nDowcZdo4UMbaLLcfvV3g99dJMVto51emdw1hgje",
  "key14": "25iNT3AX53toYMVRhvK6mjxqHKqJ5YifbTu1YMzYy7983DW9Mw6TYnnZ4ZRTg5aw3cY8wAwZXijxYPWqpUmf6sJm",
  "key15": "5BRaCnjPUPQvsfJmdRgNxkQn5PtQiSjh8ggynxe1PcJiECGVwTzp3n1kWP9tNYPgNggropUDhvGDXPAVqEp8C3vh",
  "key16": "5nLhXr99bF66SGYCnzF6sU18nqyCB7R3V4qnkUnALr7htweuHiBcF8zwmC8BL3BdiFVPkqrP5renkMKLgeS2tawo",
  "key17": "5bLs2noALU4T929NENJNQyjsqc4f5XTeHkiYnJaSqeg7vVf6znyT1k5y3rAPFc5CvRMvpSyetNEhGNGKt2DpLT3V",
  "key18": "4BpVPaVtdYmpakemjGD5hV1bVbsiNchTDJRh7LW7ao7Ttt9hKbSccRSg3kPuetmArhLiezYN8Ft3dw72q8YkoGo6",
  "key19": "2yp9PunMoYCUUn6d4CYzovMwybAwWyak8cKurXEWTzs83gdD2vi2zdnkaYEc5u63k41v8jzmFqwVsXdaRbwVpzPK",
  "key20": "2edX1jDvBXXqKvcsdhZ5fRYwX9mhphF6aRbVnRbPEqQZJAaFowHLm3rKmoUNvckT8kiSgXhvwRGYdLRxD1SnrdD6",
  "key21": "2kPnwHPqWDgNogdvmegTi6VbZ6mwjWCczsNizXzVMzZjhdkkt1oGnoF21tiqS356a9BiqqoXhWRj99QrTXxPn141",
  "key22": "5JuLxZdrkkJ45TeGeE6kSGVmYA49UgL8SFxHavjRmdstDpTHBf683xCipvDxryCCcFnP99GBhBj4n1JwT81SmutS",
  "key23": "3GLwmEGmYmF6XGmqgPEPJiRG2BCtvPXe4j42fQqj3WynJEp6G5tPNkDJT6dtvSsdDWTvB8BzvzyYc1LbiUdTS3As",
  "key24": "2PmwCSgoeFZzcQE72qLFEFoRTseTH3XpH7cpii76zfoHdjLXMpbBEV4EGt25HxdDp6e5RQ96ztgVm5FPtiv26SFB",
  "key25": "48UdMfuvitMLmHNTGrS6e2cNcHaEhHAKR9jyQEucY3pzth1JYoZo3yRvjWxu3tu4buMgzuDjPmzi6wrDDmEcpJ5T",
  "key26": "2ra4VHY26e1u3NPT5aEZgXaWr8qRChCuNUNkw7f1KCDQ59WH2EVmdP9iTMtm9BVxdLoC4VyYfpsu6pFHo6k4UZbU"
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
