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
    "5y6LyaN82SkSoVD4kWP7BeFFgqCHcHEzyCZQQfpGLhRe4PXMyBwiExfpoS7SJguhhsgCmoLUmoahyxad538EwToK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GtBAoW3oiF3iBZUgkj4r1djYGH2He6EJ5ogXDWdL9NhPkVkZDQQ5qqgK8Tnkuv19tUpqZMWKuQSXigqhErTWZad",
  "key1": "23WHakiHeKiak3jCcnbf63CVFj5jEVyPGCBVcdNTaiUsCuYhCDckZeGg1ELk4XLVLH7pkQigcqvcBcNDkix4XroV",
  "key2": "37mGWPG14nJ7h7hPq3Uz1MoSJMcoNaWShJWaTkcK9jZhFrmvPUBu34bpv2PX8fDNBDnAesra9VArL3gCEqSiz7Qk",
  "key3": "riPDiBzk3VmxaYHxDj9mzEAjf4ASGageaJSzFVzGR539ZG63GKeetUzHD3LBCg5Qt7pQeUuQzyfE9Rv2kX8rLUK",
  "key4": "tuxCBCe5SGVTiGiMJCKKexVychAswzsuC7txzf27u5fw58nWEAehWcSPNAjSF49PE2kTPuJ7i2mFL9szdDBoi5G",
  "key5": "3E5MJZrCwBCpMDG96G3JJ5v6GEQvo81PURri1RnDSBYq8YxKd3rXuGHSsAXm8eHiQqZHrQJMcbpYAgqAkg9ZiXuW",
  "key6": "3bzYoBAqwJBNUcGiKmCRubGn9wNrZVjpqxskKF1JqkMiMGpDSaTojuxQ6kSUKrRBwDn9xNbrrbdpWEefqU8ipS6o",
  "key7": "2huoxfLsQCroEBQtLAzn52ecC5sn1cu4c4XxnBvVzECNix8p86X4dCpEbqRW3UhcaQQWBHcCjguh84zjuUMWc7Mb",
  "key8": "3BNpqvM9SRor87rqfF7HVKd813RCE3sh3f9DfbkHw2FZUo7gR7wSPSLTtFGRxc28rYDNaNfTB6pm4sYgmVck9TzX",
  "key9": "2sBjZsngBNdMvCfZuEEomsicYrMhDxYG9zvUPSiUQjzC1gXMqGvGqr2iNhxGrM4v1yAUyK9qQhxnXwcYP19qJcDH",
  "key10": "5mPqVmaXZFvwTYoahh98k8E2MqxtP9cxjNAfdAQ3hpUvRyD9Zbgg5D1tNg9GJ8zM7rcJKAtjZoaitgAzraeKiEYi",
  "key11": "54MVi36CER6Uv3zL31qAJt5y72trJnGow19Dwj3VyrruHuaT8DncXptxyRjduZHsoS24sWxxFAwGEJHksoeW9wdg",
  "key12": "38UFuoTwHJhrNTDnP4YCwVFp5XspXx5gkFrfeG8Z4dgvWBT9DDMToutV3XndL9Jaub3HYRwy8jFR3h9tGdL9BoRr",
  "key13": "5ZtFNCEmvhJwC7MmWXVDm7yYtPpfTAsr1H4eqqUic98RoujJrbcbVaqP74yjyayTWeDTd8u6tNfDKU5kS6rZ6Zzo",
  "key14": "4bHdQbfSjQd8iqNyJrcX1fJmCjiw9hLuHfFVBFutTUxWQa4auUmM9QNhdK8cgSFjfU1Byxgy9UB2r1KKtGe5Gh4X",
  "key15": "5i1YmWUVUm5pYF3CPt3Jyvsbbu165FfJsk1pE4my3NSHVVFMQE8tbN7EgpH5JGoKiRzjin766WBxK1rLnaPi1mcP",
  "key16": "4q3RXG6mBM7BeZKp9tnGRYTKN5c23VndEESe4eDkdKsV4w3QFCeELPh5d1P3mcDqK7rqD4EB4woMPcZ5WkkfB85i",
  "key17": "2cs5THdzagupAUvd12DXGxebKycuCufuiT9dKXFrAA8jM4MNqPW1hPwFLCkGZNfeLbi16yU4PmyLoRfujfzfsfJk",
  "key18": "45vQqjUS3CysSxXxXf1cLuyQZM4rdbD7ke3D1JwF7BiDrKUhCHHBePasTjyr1iZ3cj8VA77PmgtJ9zQmunWZSxTs",
  "key19": "4LQMPYkYyFda5j9nVTmo5PeQhxdi6em1gv95et88RyTDzgC4dLcJdfv5hToxR32vRAYRiv6nzwwgtnEE4bgRKQCe",
  "key20": "3PGgJR4wMjEB1cGcMpGkqPFwb7mj1hehiThGPsNGwK1aFmc55kYfSQkggtFtYx7AsiawktYEpxwZJqiLKMXP4h9W",
  "key21": "4V9Zh48Zgv1an8f8EL1jiZz66h3Q9GUAz1QavvxX73mEWw696ZNcpLwf1hiHAPdZn3duJx2zgaZdUkF1EFKvnqAd",
  "key22": "2MJ5dwRucNyV3yAyP82ZUPePCGuQHmokMHkQuLfAxGaMpoHeevG7Cjph5ddZHEQXGUUtWN8kzkLoPBQJQcB7Yn1u",
  "key23": "45v6AM99rz9DwvX4dcXy1aC8uu5kUs1Nr5nUeA1JiZzRwnPLAUkyCj15GoVkejimmgAjGkCnoazDqSTSKg63wP8a",
  "key24": "3sJ3BF58BwmVquSHftzT8sSKax6PjfhRHFYXi9q9QxhcAKoF8c28w6roiqZUdZzqd9bWaRDRqA4CPcfE4AMyi5KZ",
  "key25": "4b6CLVXZvmdHk8B2AzwVv4PCNswBv4d9dqcvdRA18CxtJa1aejfW1FF8uZPL1xgiJ6AmaJSztaEo2fKQhxZy3Bm1"
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
