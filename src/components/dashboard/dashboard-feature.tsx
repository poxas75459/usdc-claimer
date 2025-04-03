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
    "5RBwN2dnTN6NWjKLaXqMLg6bfUB7aQTorSj78b7DyUWobw78g7Z3EG9Phbc7NXq36BgoJXPPSzK15CGUfH1ayT6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tz2YBSxMGmVTGnTa7nGmBTbdmqhhv3VU9BfEGPRnvSzH6oAb9NS3zcXBXThdwejqvppzFnYhkRBMVv3hV5GZW7f",
  "key1": "5wdJv6sCsKgQai9aMvmMNUwGc6UkQfhEH1RFeC6Gie2pnDDRdEafP8PDRSxsPd7no2yoxymodMMxPMVuRnu3TEQg",
  "key2": "5iemApQGWHdZz3iZ94uWrKrPCMuJ4HPFxT84R48nwFcGNjbDSfRa5Z6gFKFN95enTJkaJuVqtEV8JN3zzXdefbeR",
  "key3": "4kKVEMhZRswdZEg1Y8SiJwWUxPgdCzWTQ2YteHDXdV19fJH1asdNQMgaT7ee1hLpWwc6uyCRHYLk7W5XB5NzVUTd",
  "key4": "SCiDP6a79XpWXZn8HT99MtzyHQVpesKLbBjJEhPAFQyiuTLDZX27cauwUAaBgDK2eS21B3ZenddrygAcXvUD8sL",
  "key5": "2A1vtvb9sHEnQK8siyzGTKm5BNdhL7yBaTxFU95gGR59D4VbGm4ax3qJe7ktGFEb1fTqk7EA7dE3DorkTKQhy6Db",
  "key6": "5SURpXTQcWJfX6MsDhJgiibvWpw83JYJpid4D5qSdpSpcRWqFoaDPZiCfQUkdskoiQGB1kjJnw2iVEmEgLEBf1K",
  "key7": "2U93eZpG8rjEYPkLuCkWV5DD1XhsvdCS5TYmtMqodmX7btc2ZHNGANJUs3B33Hnky7Qqqj9zUJMD9eQJb9qDH2FW",
  "key8": "hvMSfaxbREFhHwDNEAsyjwk12jtoVVEJh8rYbPTYDWn4NxJ6DxRHBpK3WcMYivz9uoQDKZyy1pNkzEeWaesz8LF",
  "key9": "5GTMSmxUFKEUrhJ1TiKaRd89oTDLbKLrcnqKvNk5ijEgJJ3n5TiQiDzodJckvDKPVk5SmcDugwoW1YQTJyuDsJbb",
  "key10": "4PrahLqiapeCg7w3ACVXBwRZSz9u5pLidQ3XvR5vYTqcxDJpVt32A3XoCXRDUhBkQ2ZgZHXoTcUfK2TtMpyPHbfw",
  "key11": "2Ns2NDthsvmMPVBDoG6VEQpuozEu89vJEUir9oMS3V6mFZoZJLDaZq8u2QFm38V3h9XCiubQYZJmhTAPix4UuT1u",
  "key12": "2H3xWX2qSyie92LtXjSsPzhzNy9s5siqCjJ5NdXCKnL7crPXbsXcw9RYBXaLrb3NeWmQjefeBXAryfasU4mccA5C",
  "key13": "5wYQQqCcbw8F5BEBAwkvP2dp2pB32EaZGx97qEFXrq7FksrbHgyxiWUJ3jbtvsnDTxtGnNEzLhNrKKEzbV7ccrdV",
  "key14": "61t3AyBYu8vUZkjudD6UfGPEC7Ry7BqeeTtmkuuLiUuuiviU8htVu6xgbwSgyAbPfWoHYU1SvAhCVUZKhgnXg1SE",
  "key15": "3ip4s8tiTNrfQC4aDbUFzCvnnGgJw5zS6ZirxHxFaw2EnGf4yHnjnYFF5QkXtwM5jb5dwoMoxfjL3DU3qdKKFc7B",
  "key16": "5UvUkECq1M6BmgXaqoEKaZtUkPLUP4sxenLhDzwigKDyWKJujpZHuEPQFHZg3pFo9aTZqHReQtBEfKn6LS3iXZUH",
  "key17": "42qKubN2WdKmoARmcm6aLRNRbWLMTZ1rqhRq8Wd7sfCN3LX4rxMScQJnAnHM7KjsEjHKNx221NSvYYZXwYJv2c5X",
  "key18": "3mA4iWeUpQ7PCtg7NKgBsQheUTAKr1hfq1MC6d9zSCDXDzT5RjAUhEpzEmeLDiuTFNCuq5H4a8P6C3PbyqXbFKxd",
  "key19": "5DEddcuaeUcd6wbnT5MqXC9iaWQqwJxiJzHrAGLCVCcd8PZG6KeV4UQqFPSiUgbuH6EgamZLzK5bnRXe7SEXjRGN",
  "key20": "5rdWFDYtcMSsTXyptLK8WybKFjMdMNUds5zw45qNjkn74XFrWASjhAYGd6d3yXk1sGWbiV4dGr4N5bz7iCMGZEWV",
  "key21": "3wRxoiG5xhwzQu18QNWkb5eY6AcWHjvR97u7N163awWeR5ucx1L4BdLzakKcL1BnrqJiKrUvZgnQZLiJoYWPVGSi",
  "key22": "2vBHiQBzTKg2PsSWuFHWqALPe2kELWQLV6XTQfFY94TsbPnJHTP9rmkj7f56Q38nVuyvUpy2usHnmRbmFnYQXYbq",
  "key23": "3VagLk6AeM2VzUMkZwAsV9jf6VVTyFrTzG7XpyHxXTJWTVPtLG9cmLXqG3oSxMYLpPM5Dh5czBPW3QPmMfwMgPMW",
  "key24": "5YCQSjKcBD1h4eAHL9zQgrtHsqnseXT1ZGvS21RvLGWC7Lq8NrPkeqmGL9QhAomw1UiCbyF5VDLZYVrji2z5TVyr",
  "key25": "4xFb6zsEWCXXdi5Zzjxc8Rwhxo4auVAq323nDaPSktSvHeSFDzk7hfrfrWsHdB71ANhW9EfUSDHebNEmUt1h2Twa",
  "key26": "45Prt7SeG54kDxxfvZYj3cKZrwVUhaqV5VeU6sBbJTcDH2oP3RnD9ahYGCHpAdFKVm55DuzNC6E9WWSVPAKsNSUL",
  "key27": "2PTg9cAXJ3mo2n2vzevV5GmaWAmwdfo6TPtpcRFsAjf76oitCzsv5ZhWZYx8f3taH9XaRmonuor4SCWWVtby1Mba",
  "key28": "37DyeXf7nXG3twN8vnLYiHj76Pp1EYr4qPEGN8sXTVP1zSDTXR6h8CDTGNs18qFJ5xVdHpeJJ5PpSDNKzaRzLyCZ",
  "key29": "48vc5cwgHExW8asFwaxWV9ABaXDoEqRKwtY2fxhuH2VHBb6RN9PLopFxv3kvXdvBFNFkhqWCjs7iSBf5wQGHdSDj",
  "key30": "5zZBpcojVY7Ac6wJNYrL7Qk5fx9meeSTpZZH1NPLGHGkwWHr1ySk3gFkUufZUrCL44oPiEE5Wzr8k6qYgRpLaNdZ",
  "key31": "5WrQoDyDpPMyhisVMABFKgqENbra1nG7JDGjKGxbDJwTtsKAPasocCdvcckj5PzsNdhGZphbowgryVaaHGQVAD1v",
  "key32": "2zahP3mqMT8r5gT2nDqvyRhQYVGXVuZq2XPLMUVSPj3Qxu27yWM4wzMxApHa4paEE7oQGp8uLmQanpQ46v8ujfmU",
  "key33": "2ZAyFftkAkM1XFT6EyX4YGWd67XaZGPKvoPFrFK9x9bVFnEYTqemwi2oEuN4SuEPiYzQQWyPDDWztENmwYf7SmWz",
  "key34": "5BCNFNh4sE1bnVSQ1z5KBxLZXPFR6DfgiqDyhSM7Yu3h4LAjw8xeZ892mN2b47vDVqpbX866TtK98moYE9NQxxFW",
  "key35": "3QCAgY9b64NJRCKmtNG3aWv22sM3PGRMd6EbCHCNUKxNGXdCsM4xGnYzuAcjJmVZtVQr8JyHJKAtqsQ2rtaqGbC4",
  "key36": "5FGkjAoqUA6bzJUvEm4niMwWs1yKSVqaQZChwc8xjAYq5ZhsFfXZ3gAFP5DvAw889f9KCfNowmyGnqB5hLRKhEVP",
  "key37": "2aYr62fpnA53sg7wyMkbxieLNvJ52mKYcceeaHeo4hfgyua9tVvenE9ZXDuEXj3rqRAyEzBLiYAtQFfRCMiuZQbS",
  "key38": "2LWzs85pXC8PUt6ov5LNinsKB9kVoEagEjHADhDm5T1uh6X5J2muX67YFnqkwRuFCyXLAxprTFDtE4dcG4Ub5BFp"
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
