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
    "5nFdBd7WChtnELAXpdjagXwsPnLdYVqcToVcGTKjD95f941ksk1RSYY6uxVrgofjLYUHB35vy717UqZAbiu8LKfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gKUNnapDyDmB1vS5LVFJhe2feu5EJbaNZAgB3mh8VPs1HuVCnbsQY87Dxw3zcd4pHBvjW8mygwrmqdgfXXUBrz8",
  "key1": "doMTvxH2G91WKVnzrf9amtns98PCjdA924enHwbJmEdjn5cNavdk2yJP9HhNX4i1haUinemuafhTDV2YNUEPJts",
  "key2": "5q4d3R47Rdy4t8L89zEfQnPnPHa8ffHxk3NyrbFbGAAPnSriAgAup6DurtdsxyFihpKnLhpWFEJVdLtJhiSRVevg",
  "key3": "35CNhfp2PqRNHh4CSSDMxLngQEMgiykpJcKp7v8ApNruxKjgmpVmxiQ1C8oNL3PyCAEwDcVKuFDNqYvGLDiCPh55",
  "key4": "3KwCjFunPDH28PBho1ddZnEXnPJGch3arctxcapiNsQWL7orTixMbvsE92v2ZYX48YuTLgxZUjyMgSyDQFqtViat",
  "key5": "2czFVqEDhqJfACYUFJW4bYbdHJ2AgNAPAA1YCGGxzJwcV8houptTGJC7L58Q43sQ8hosx2fiDCse6wBCECNMCSpY",
  "key6": "4yLXhaRXLjmZZXoxva5xQe7Trz53m9RBnqQuGmquAnAmqQM55AWiXZpjYjDne22W1ufJP7yfsYeKwCobW8BTZSFN",
  "key7": "2DJSaztpCd9m12P2GNop46u7mABQ8BYWZFECNMJjsR3RfrqtB6reBzTYrmE5HazLccevReYbpmuAfPMeh1oB78Vx",
  "key8": "3DE1ps7sy6UWvujcFR4xSNFuDh2SNCh8ypz2U334FZVEBBT6SEEJ2vjkudKaL3CwAaZ48vSwTbZPjBq2SoVdSRMh",
  "key9": "4TeuHuvSmNaYLeXznvrLESfShu6K2Kg1VV4ta9Sh2fbqFZNbBDLMZ4oLDVcygoLxWcLJf3fjQPbjyWQL1RiisHCd",
  "key10": "51PoXSkyZ9vAAcV3NdatyH3oKSdTfCCnjDS3VLNyyduvyA3LFRfwpiRhw24XgprRKbBrFrGKgPKe9TqXF15EKpHY",
  "key11": "5hZGLWyus6Lzwmk3dxxgwvi3X4rZ56DhWEAPaEs2CZ5Uv298oNuSrFk6sZf7QFagZxFrGbvEUtxtbgBPhRy2DHud",
  "key12": "5qZHyqg1Xbnzb7DUF4oGLN6XwnD89tpQaYNvNtfwZCeqAMHB8jBVzHS7FY2T9ywVKjsoBKu3GwzNC8k4F8PX8FrF",
  "key13": "62GouBz6S35xbpQ8tyNWc9KrCJRHpDBKxsK9ntpGsnJm2mHHYZKvKpb271MhFe6ZNMrgNbMvECSXRzmSZ9iw6dom",
  "key14": "2GpSuZfPLnUUia2MNyJg6n1VvKra3LGXYf68dJy7bkZtaha1Xe2LAq3q8kxmsAb2XxKysdaFfAzz2J3tKtkKY4jW",
  "key15": "5YDomwKfFRTCTRq4VLzh4XYtJouN6RPXb2YZV9HfQdLa4aubmCU9njWb1YgeywNLXvUQpaqZLgynJ3z49dmZjC8W",
  "key16": "yYSQEXnDfnxHrSgUQmnJvTiyR9bVzYvCacpooW5TSrDvLcPQrftwDMTEUf8o3Kk7cN7wVYAGTeuvJdsXKs5NwJG",
  "key17": "4m9tEjiP2KotNa8nXQWB9mwEUqJq1SryrAF8qK1QVRv3dUmYUvqbbRUbxFoApbHR1RvsSuoZvh2Yci6iJYyEz9uY",
  "key18": "3nMS44iCJ1a3NETtQ4riH1XoVEZ98FADpZgPXZYsavAKNjgWpaqAPiV5GNdB24isCLGKkqoUi1MkoLeuHyyu37YA",
  "key19": "4icMwp25Puy7xovUiHwoVq3G9SdpKiNqXhyQm4wcvpHenknxcZjtTowBD13mb219SW9N2JtJcCADoTvYZHnyRyuT",
  "key20": "2QzL1NGxM2GQdZWjkFJz89yjAUZ8ezGwdo9A9LRXKaJReZ2KdHt9m2pNGUPNQSMPHomgRYsYrsfKACRPyyhR3iYG",
  "key21": "5tHwQwL5upbYFrcJX5D8EuZo5o2Ap6wh3FWFSqGEwPHNQxm2MP2JWmsebwHDLfViHhjNHsDsoj83acxgTxsTdEqj",
  "key22": "Tsp1fsZuWLDro9U8w5t8FucC13CqD8jVCtCmaFb6VQonHBiSLvDu3PSuMLCCCzQ2zHNpdXmwFswA9QYN2WuBUF6",
  "key23": "4jRUF2rL1BNseMwMMbk5pKiCkzUgtUhH6ycC93d4Pd8Ce4txutUzKCK36UikvmC6cu3V9XU3phF1eYxpbkL7h2et",
  "key24": "RSApu3VV9yusDExCJDjAib3iyo2NU1mEmAVN6FX2ndYaumB4oXZR9GLzqCmSKBEvPdYs8zfJkNPnroKaPqzqcUe",
  "key25": "4HpGfiU2qmbnuf3uYWtp4KuKYXLje8Eh6XjXexAxsTRjnfeeKQceN7PnDH7qjmTinmqstwBuMAXWEGpLskR8q9Cx",
  "key26": "4i3DpGXJZatxMHpYjakwDk1idQZVw5SVvasFBsiiUKNZTschAqagi9HNd1qgzqaPw1grUWRaeXnXPhTbAeekQ3cS",
  "key27": "jGpcELPD4B8uGg3rMgbqAFEMBhKz3o7q2FAbUbRjWYvgnzSNd2UDDYjjWn8eeHBFrYRBMSicSVQXWrGZJ7zFaAm",
  "key28": "5x6arQGuBWeHZeqo24pByvxC5ZkApGWRucDu5iH1KuvtB9BJNLcxxRGueF3fST8HRA6CjKFMFk1tHrKyc7Dvi2ME",
  "key29": "5oBBYfShbeZN2Fe68vpV3bVh5eiq5uXqqK3dDaq2a1ShPD3uiAJKjxi4bBGiaBVzecSSFPS5RDcsGZHLjmeZBQxH",
  "key30": "5WMfiGFFukaX1S4ex12Drp5455X4m9Nds9DJCrbbPit2gCy4JtjckB4f1xpUdFG4kCyk5NgiM9zEzTXUiDoy3YJn",
  "key31": "39KsEGmZqHEu14FjrkvWBWj6nMPTynzzz92r5DVyt9yzm5Gt4xWK6rYmqvL6myU4DhNVVmerG7HEx8YvT4LrQyYL",
  "key32": "6oZFt4N8iVgPDP5VveaYUHUXcuVq4bfAbeyFuCvRnCYSUo8MrhjbXuWPwCFMnEC2USuKFtaqUhK1Hp9vgv9hBvB",
  "key33": "5fBwxjZuD6DZ5yiP6fE5BAXxqYshJfhJDuHVQoEWKSjXaq8cRPsUCxkDZUB39sS6MHxhKRxM5PaVg89HHqtyJN67",
  "key34": "64x8iULMkeMno92DAqGUo4WpiwPPpsrBgXYAikG6sNbDFE9NSzEqyuMvU164sqbHihbEyyakLeNPYbGcD8ti3uJF",
  "key35": "4jPRiFPDvCjdQhmN7fxv9KSaPKNo6wAN3mGbq8AuL11a5NRxQhdEmayGGGYVm51qkQsTKQxy8xnWmoBsKZSXYVth",
  "key36": "39sv2cukRiodYUnYuXDiF7TSfR9vywQiYQJtCXAHebMsf3hkGcyprSb9n8MHYDCzQiPyMSg98qtKsbC21Vu1q7DW",
  "key37": "xMxjaxfZiinKhXNqDTo3G8jiXS5STLujNojUvkF13JEaB7dHMinggirCLqQeuq6tQdYxaGXBUNyas3MsQKDYpho",
  "key38": "2p4DaXrNjHgmvXFZGRM2kFmaGoXc5KmVS5NSs4xKw9fU9BbtAAh1jUFuMrRrN6ZM3MyNcuAPE9qt4iFkU6Kk7EE8",
  "key39": "4KVn48k1vGTfLfSBxAvgwKF9uva8NQBRacd3Zs9hJFGLJ63efzrR8DirPMySi44djruBAgGvVPxqwYpXd5w2vpeS"
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
