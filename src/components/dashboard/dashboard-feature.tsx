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
    "62To27M9sXcX1GKdEcMq2oxFVeqXneWt7ZfRxkThA6MR5ru368pmGSC4yeibb7Vm1FzeqvJYLsDtvkLS6aaguMsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPqVsiQUFAUixFwW1665WGcyGDLthPE6kL4H1UNvBvFscX15pT9ZiZWRiR2joFdgqFFvnCCnYsSBnhCPr1rzAYa",
  "key1": "HUa9QmnxuS1vbv2e5YnZ2KdajDkWJDdHkmCGxrUDLLiwo3mJe7fkN9GRs6C5Btd6kNJ7hhCQ5Tm3HJvJzAmYu2n",
  "key2": "31yYQGTu33pYv2KZdfSi9XSp5b92JJp1jL4aNnzC922nit5rjy1ofbLBXmUVSmeYnMeZm4sko5eWwnMdmaEeAEPw",
  "key3": "2X2BoRTDDyvDpDS2EHPtE7PoC1JCeYLEM6DmgzVjKnbvwYLxegH1135of4VxuweE3cWyACVKQn8b2y9mbi44qbqx",
  "key4": "5AVhPYX8t5urhTGPMmXjdTLSxUEKEyRQHu51VqZmVuS7ooRkizcrD7ohNWtLkNfWfpSaKgNmJcY61d4fZNHMBT7h",
  "key5": "XU1aTdsE3m66cbRgDvpn5nSEkfWuJ6vi2N79DPzb93iFEuhqce7ni3xqKboogMrjM4Q5YzUjvEJ7NGbp8uc9kio",
  "key6": "4vDnax1F3VNrdUnz1ZaxZPC9Zq4bizqTzvepqEaXUjSth4KwPKaGR6G7X5D87C5Qy9oPv5fe3LomfermMHysAHbJ",
  "key7": "53481mnvfdUHMJKzKUxpnWba5HnfKGNVpHp6EYsREWKURDgDP6FcuKodoH6RDUGbtS1Mwcvti1tRbEY39XARxzev",
  "key8": "2hTWJJGYgAbo2X7aF6thLBX2F5XvUdqbSm3db1v99SCvMNGr6Zh2sbD7MXh9GfGWRDTvVYnB8qDGVCnJjKUqZSwd",
  "key9": "5sEpGqozcx7AttCdLjQQRPUvWUoq2A6JZBTD4nsen9DS7GoxUKdFrH6ZNRrwggJGJ4Szi54ae44j8vaqQuUGsUTP",
  "key10": "2JHU4i4d77BjdZ356PxfCU7ppHwxyUdfiX2NWRW9nttM5cvhuvTJJTnJNu9BbSAdRbzYdh4xwMD1Z6xXhGKkoJ1N",
  "key11": "2nRdCm9ZfKnVarZWW1Mzir4J9FW1yMX1PzCtvweY36bwb5V3CuTemQDRi6YSR5dfEmzTs7iE46SEFNWzFgW5qGhx",
  "key12": "Bxs6gEai6Esqd86GXe2o97STZ7A73pvfeVihmsWNQ5DmPJJ2vUeHFKqsffjcoCJFksbw1YYrwprhCukP5ec9Jha",
  "key13": "3ak9qassKUJNzzu9UY3ddQd3WB3iAvXHakafBowvsqn634NJ3KxKsSrN8yySBC8iHNt1Lny3Ep3d3cjqpXAgxdUQ",
  "key14": "2X2xuUfBMtchUp9jhToNGBSHt5HtyMybS9pE624VPjcyDhiKZy6z7S38Xx7JK84weoK9q5Bgj77ZCYnb2kG1Erfc",
  "key15": "4jdCeBdAjfEHmPeNu3NyUjC3dYZR6vdzsesnHFeULD8qMErnSP3x9ZfxiSDCs3XmqkgWRF3Fyha3x7wZSZPPBdyT",
  "key16": "WBQxscQx6tD8SzoTaLpFXvVBh55prtuFFAqk23353ecs24zHpijbDp2KFnHmxFQE1dRAvT48BbLeWy5KBXR3vUv",
  "key17": "4YJUGJC9kfQ5naGjbCi3D6FvaG3i6bwwJtitQAeP3HX45U6EgmiCSiqvqcWnSMw9qKrFo5e6q6aeSLFB9XJWv5xs",
  "key18": "22FkCeSQqCQkjbE3TKHPqM5vWk5MRaLnpWvpTfA8HjnvyHCE92Aued43B9rSjabtXrXTf1Kq9ErREBrq6sJTb4gL",
  "key19": "2kQDH8sYEGeESxTB9uYu1NmFnDnauiLEPqBZXhMRWKyMUo7UBCztavGveBbQHutcgwX2gHZg9Rbkpn76zEbgrAXL",
  "key20": "2Das5DYLftjx9AGraBGkr1K8MLdjMJXfQDdiH9GFnwKFsNdXXAt9kSNY7h3dbdMBhJ9apCez3r3Rvmv8d7uj6fJr",
  "key21": "4SNUfZZNSq6vYFKpxTJci4z4NdcEcLrBMQ46Yu6v2m7jNMAED1tdWwvuhLrLc5f7ueU97f4SotqnuEYVGY1btp25",
  "key22": "364B943QKkSK51ESJKwMUXxQQzKtpX8f1QT8PZJxQhwH3F3B8manK9wNBvc87AT33cDSQMCqEZ31DdSDztaFyycV",
  "key23": "4jZkHqHraT6BeaJ8KtN9Mn9vvhAAVvXWVWbsB11ULr7gjNRwEMSsMxYUvwjXkRSiintWLDP5wZ3BvFejZo47UUtb",
  "key24": "5YFQ2HsrGXPHh2GbsGXaeXVMAyYFHUPUVeBwuSSxRSNyij6YwK7GERMdQSQymMyLSuazAeGpwgFH4HMug9GVzCa6",
  "key25": "5PWAQBfJemHq5dwP8NZbbQYbmQ7TobFxeYGC1YSKAkJDE83PpNDkwyaowzPQgBnjmmMFsTCq7kdGKhLaZ6CRgDh1",
  "key26": "vuxaVVoiGcY8teAjLY2eQmC6t5j8eKzMGeVrkVVZt8Udw1TEtr4Eh7mvb8yS8Sx29LT7aLKCngZTqvYttTSHB6o",
  "key27": "4YVXtEBzj5rJ1Tp5jyFjQpG5wKjfaUH1jwrnXiKsxdY21YQHWQi6bnULwkExZNY8sohzED7z1nzaKoFRZvDoXqzq"
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
