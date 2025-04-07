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
    "2zWQdQWsHtE8guejm9jEG5FdWRtsXzMUxmzr4Z3zLBx31ZeLaY16P37Ch2GjopYKxu8ouxuHuVMkyz4aENumyr2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45eyrL3HAntmNuaJHFbqpxJCh9sFUBseke3Fw4yq8E11Haxiwh8MrJSAXazSjGvsqKCdAbZhm7ngdve7uVFqVz5v",
  "key1": "3AUwAvPeJ5imQmCKvGAuivBotDEMK4ix8dRJ79JdmTNAQRBQscD23RrPwD58wjyiNUFzGbcFqpFGB11k4Pwib5Rn",
  "key2": "4yDRsUsibtozb5PhdLCvkcMH2ZmxadPfAFKF4MUjE6KMwJgj7HGAD7ZZhrdT1JK3So279y4Zyp9xpPwqoASmbdMq",
  "key3": "U7Mscib8kTXULWxLQhYwZhUmkimVzx21Ne6iGsYsYL3hhPYbQhJAHChZrCsGSrefVMXts36mgdBVmozr56iyNh1",
  "key4": "3ConEcfQoXKDK7jvDMNuUiTND2jhDKGqiGDGvQoipGE1aRPEFoWktK3VZXqg1hMLdGp4YS4xw3tBynuVH55zp97M",
  "key5": "2f1vPsTEr3d7Utp2KTDY8KbSvNekCyTAM8NCK27tLHFZgUWRzJmEewp4q2hKW2jNTC4fY7FiajgL2xa94MBsxR1d",
  "key6": "5Qwhq6uoxAdWeGhEpxRGiWGyf9xDYfN5tnaFu2uHHLkfpt1uP4LgpYb7fygtpbcmy512hRm7HUSoR7HeJsdemVUj",
  "key7": "3mE8uPnDuaHCB4FJ7EXsbMUQtn9SmJ59cbZXCDzJ3Rb1FJCULqtX37q4xC32hovQfsZeLKiEow3r5RKBEZdBbFJY",
  "key8": "5nVbJ9fAy32c8UtjXqbkt8dnFUP7LZxVXSTPaBzsD95tKWnxqG1nGxCLWL2F2tJxTYCCtxqeWULckNuNxef5jb7o",
  "key9": "2hRps4BsY55weymw5tW8rLNQK6xDsNcDHWU9XPTEYGSUe4NzANR6MQBUJxa8NX5Hr772xvkPEBXi7FhWUumHuVPn",
  "key10": "fdsvQcRf1qZCyLr1gepQqh6cKwqWgXGPbukBgdNvFerEp1yHHD9WapBZvuvCx5snZsSaF1jJyyyeBBNzb2Fe4oJ",
  "key11": "5VGgY71unPy7CLpbcehx1cV2urYdYxS2WZufY21gGoygATG9eUa5vKP5jkjf1MtnF6vFn7RjHLkuKpBbM2TVTgN9",
  "key12": "2fZRSPQp8Si9cnNU5eNLyHj388EKP7jPE6qggStu8Z6DLmJBXPL5ophta1iDXSndmfU1g3tndxaGmDAtTL2w3mZn",
  "key13": "5vUjJqvxaijBdFm83ztLYiB2UMMcmBeKDySmmb84Vy2eXo39c7DaUUXE5iNWHkUBMtm5R1v7mfqAqfHpjQa2PCH8",
  "key14": "5WVkkdjkhUaSY87C4JwDbVkdqoEo8BzduU37JdweybYwNFte5HGfwYiFMKFevafe2EB9yKHk6k9aS5ipKcsgNAoE",
  "key15": "8okaGvjZKXgzwmmK3QFkGxXKN1qtjsLjWn1aYMKLBRzeV78qWbW8GzWGqbhF46387sBvUdZpcVQ9uiWgkZruQvS",
  "key16": "3Gdr9jHQDpKuQ8RgeFxVXHWSGPRb6LreM6EYeHcSXtaMzcS17f2WpVx1Mxk8si1bqmss79aD4Vh9KLeKE5kgw93s",
  "key17": "3MYQvx1ZVdszqvrY3s7wAUDCunBGqRBNxCCMpcWa27XEp62YZjNddQXLpMJeKWC4yxACLHtgTE93YfBLxe3zBLTR",
  "key18": "5o3df4LnmvXVbJ9UMS1mKv7r5LwCybe37zBdYNg6J93EsbqPNuJpHTsTxBSdJ8LE6NLY3u9cGcTTw9JjdgcwN5Lk",
  "key19": "5CnBwfdPBKfEGktjaJGAHdArrwzVMkw1uqEdCgAbtdLRcdgxxC2YAcVe5feNeWxyo6JG9mAif2UiVeJp9mQtcrTi",
  "key20": "nozhAguVNZXwKddbFzJbyGDrufo6RZiVYTT1BkuzcVemTMNGTbZF4oZd1VkX2uBJ4cHNQjmZ4PXqy6R34Yb1ony",
  "key21": "M4xrQNw69EArPTCJiG7rUQ8dZ6Y7YkgHRW2RsUNhmarMRNRFVGvFi7izDWUSKNYQmRMtzJJLTrDS64btT7Qiphd",
  "key22": "464PGapnsPRrekQuaaf6DvskG8HMC5ZsjfoJTbwmVeNdcAG2SJF8GbXgGZWPfzgHD5T3RTuJSvuEWh2x7QHBXpmD",
  "key23": "rEnUvrF9XtBWfHkSgTaJwTs2CwdY9zZq5wrdb9gLDUXzEgg4sktALuJ4rndFY94CxY9u4CvuSeieD7mg7MrMQAs",
  "key24": "4aW1C5Z5juGin364gU4HiMcUxouhJj1nsGbKh3hijpTXX41vq5SwbHDHbq53Atxzy2AVuJLk4cibR1fhTgRyLkyi",
  "key25": "53trZP8ZMAAwF7zJKP9mx4j7dQxwkfMzwBHf6Jib5kVguuuLoExxfdimLnKHhf1qHwTdSF9hAAUePFQJ2aZ6L3eU",
  "key26": "5mmtJU81VAiar8X5njNgmPzvs7HpMc8v7Jh8pEu9Xjcj64P2koqsVzc9U1wWUFjzUjnQ1WDrRhS8NhFczGMA5SJo",
  "key27": "3153fF5vf5e3mJWpiwqv8Qb1tSEGeMvNWCxtyWzW8opoJEM2KZnXrMFZSYiQN5wWNr7fVNqiqbh5gcnggihmPA9b",
  "key28": "599tj5bzUrMQ6bgrvnnnzFqj7vT63naXxyYyrtJR7qvcfrnju6aRbd8refQ97h7Z2Bh3fV5e1E7SkMX2pCPf5vRn",
  "key29": "5u1Dgpf7RgYrr4kkx1fxCD5Co24trBJz8cfMufFgboZHXzfCtbienB8AaheD8PdwUNEfNSNthxxbPWyWNCQDeF31",
  "key30": "21SiC3wMwbhr4GEHJsoTCe5HDb6wz4HZE7GjoBwFPFBdxwFupsm8MaRgKseEcMfdxy5NeXEQPxwQVCtudWzZsPVD",
  "key31": "63PLUz7gZxd4RZtkg2GL7frBYiZtoFX3MrKSNgZJaDEKznhkYeiiKwc8RcQYYYx7k5Np3eUv4Mmgdq2ic583iFE6",
  "key32": "2Qx3Ls5YE9HYtEhi7bduaanSVe2GNVnqzGjwmp7wt5x24cuCYXNUoLR6xVn42QAwBZ6w27zZSJejBf2xTFfnRBsx",
  "key33": "495yXoW7nZjkHNnC6kNsK8GHJNhVt3RTNPNxnRMnq7CArsKajszndxfEraz4wkEFLrdHf1KwgjaDX8mgP5XxLR3e",
  "key34": "4QJasGtkVexc2v9z2PaDkEY9VAm2xycKSYS2LDKEoBzd7soQ1SrfMmHgtmTN9aRmp8Vd5P7GYFBLqMBzFYtBsasz",
  "key35": "5ApGghGRqtrRJznBD8WsMCeG16hAMrkRZkoDHBUxMzhLgc6NGW26bJS563sPs6KfwvKp73sLutsYdamtCEv4DR7Z",
  "key36": "33gCWxeLsigJW2D3ThH4NzZy2uvotrJggB2eGXQTp2gX1ehriX1JSMvkvGHogTwew6QXfk5L2MtY6AmrViTvuoQs",
  "key37": "3TpJF6cMP6zCeUw33yg4PkuJM4W7zsK1sukUVcQzzkskKemoC1j1RnTLf2VJwP6VRZNwVQMJarnBYZWa8HyeekEw",
  "key38": "4wZNdrkpkTehCotA7ogwXqg3zDjYQkDSXFm9GJvNAEJeRrDUzL7pzq7tXPAqQXp6wzk6mLfEViejaAASqT8kaFMe",
  "key39": "54VkT3EcMsvANg4BT1ufj2XTSyokRbTi62H4NfiV6JYiSK1Z6tSGFwKqi7y9fpYEx3biFRhMLrA4j1Qn8Ro8XaZZ",
  "key40": "24RpXYzAHabA84Wv1Mc5PmfLPm13rCkvnBjKQPPAZqyQSugjWDauynQyQUXfJg2npESW6uuS54rgiCLe55mTAhSo",
  "key41": "41kwoqwQ83mtSTifeLJmpHz5dJ8Br7pY3qRmbHNNDbQk1vxsrJUPDH325u5BMkchdY462RvgzjZakxHFuom6Z7QB",
  "key42": "4UC14Xia2ojJAdpwSN1a9SSd2q1GLidxfX21Hk6PQoFM2fUyFa6Cy4MWCHuxEtEQfz5TJRvuhiGqy9BuVtERrKZF",
  "key43": "4SjebaC6xK43zGJd6qK94F6sVnJaYX3LMGYTgBVKa9P4ARUsczf4pDFrVA8Kd8FtA8s1b6Eck3veQEd1S9SDthA2",
  "key44": "5EZQWPN1qEiHTzg9bQbMhxBcSgRPQELdZUvLvPMJxpZnghpiCTUPNvFVhX81BopJ1YtkEXSEPuhL5NtoGkAH27uz",
  "key45": "43eZP4x9E5mUTQ26DX2g7mTdrTAabVcW6QmCzhwYkus5jewka14M2rkZZcKJ9f3Bp8Znj1VxRcp8NRvgzSGpnkRf"
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
