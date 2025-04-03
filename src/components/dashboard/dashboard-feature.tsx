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
    "2uTCfm5zrpLaiwyPQ4k7K3V4YU8FKisYLSA3m4eTt3ArDHqMZEcM4URhLcQ9M5LTS3JJfyCmnUC9TVsMiEqgaTQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29cCNKgGjHwLrpjbbF3grPK6nSrVdXbzHTdxW2oGvsTKQt1DAmViiDTpGMxYwTFzccD1Sjb7BBbz8yvPiZLoMQrN",
  "key1": "gMeRLWZoXmbYpPeeuRGXV3GADcfFb4V34i2koHeWRUUyp1cfAVmYJMFEeXx9q2bLjZsZa6YgLGoWpCYcNjBBT7P",
  "key2": "3trjgNn9fucXrXVLC52gU7cWZ9MqLgHRqxDM4drzUK9XxkUKayquKwPjWGtLWksG34MP8eHYp63g6zgvki14TsD9",
  "key3": "2Uv8KqpWSrqUPeou1zMJUoTKnsRVpodTLpcZM7bjSk4u1kjbmXMNKPxjMdizrJbNnqe8T2zCLazsDB6fdWiT8V75",
  "key4": "4R8CjvanwF371BVKBvWbvi78r38r8yWou1YMVnYQRCZt7sJs5uwHxPw6NxHtpzMnw8s4kZsEv6wvjixDTsvTfvRg",
  "key5": "3G21t3NemfdUBoaCQutbnMBX8hkMG9r9wgpFjsCkgDLs9MR7pDy9qWT7GPDmK88kDibprUKt3qDxAVETK92yWAfM",
  "key6": "3icrjUJK59og9XhXmCMwgKtX5xFvYAaP7qaBmdQ45Uk6Gmt8jfNJDMhK2ToLU9CiZYpHGfMpM8DsRD5NSJn9bmya",
  "key7": "5mP4mB8cBroVPYKHnnvJ2f2nVhiMXRoUy8ssmkKt72CisCzquPxzLnpT9dij4GfNNmDpxJQHSTUFbMnfHwcmHu4F",
  "key8": "WWu8f4sfG6NycKJnzJ4XKAXz7xDTmb4VqqWRrAwiSVisQpTeRDL4f9uNJNr9qzcrDcHf4RbmGgCPsHBQ8xxsW21",
  "key9": "5uS1h4WBh4drtHWcL8JaVxVbC3oATg8XJ1GCto8WEAFTN27PP11PTZMnxsHNGprY28dZefrPQhJSwFwbz9m3iBW6",
  "key10": "5Rfqy1u33VQtseDYEi2Wojuayp33kDNtJ5aJCmsgGjfRDG7M6Xn9EugAwCpDfWELiodkuDfmAfQ6KW8nmGAFTxsA",
  "key11": "XX8S6evMTWsNgNGD8jKoYhJWwkpspAe7RDACQfdRAhzX7Sz7bocUp59veKP6rXpaBzP86sBrCrhM8hYMtK1xJZU",
  "key12": "3upeupfhmG8goS5KVgwgxP6yK1CwXVdLv164DbiKhhcoqGmezAkUGTHV8qJT3y1Z3VQ3c87wKnP4wgumsYzsCLwh",
  "key13": "85hyCBSNuTkisX1xCZKRfDMLkEMEMTFCcogX4AGy42TfCXu48K8mYiw15oPVv6DwtHRmKE2Uy2Mn4QJeedwEgMa",
  "key14": "2vicgQbp9aPBvrBbQb9iVo3PDFhevEia5HZ8XnLSEEhhLYEYxtHYCajav12icxv3mDYieQpDtcRrKUkgxaTvR21U",
  "key15": "3yjtwygmNWc9yAAZQTnRvcuzpErEvCugoGz8B5hC3dCJ2Pdc5xdCZoRyceviaGWhYPxytekcQNyFJZ3mDsGzvZJD",
  "key16": "5zSYf5EKPDK3sVf34A2eXGsyFejQHtBs3a6y21aoVfmqb984q7g4SgDPgDRHWH1WtPtuccTrwPwn4gAV6L89SQZe",
  "key17": "GXKTG42J6Qexp1xJREAyrzLEGBGp3szggsudaxz7FjZtiyzydGKvdEEKvi5yJg5r1ToqujUk3sNFiQRzLZpoMvE",
  "key18": "2DfBabC7FsuPwcymELJ9KnpSV3wsEiMeihxEnbgeWphSf4Zpnuk8VH6gd88SP3Z3B2d2KJFaiXe22iR96UwRbVwg",
  "key19": "2KvdDVaq62yiJKU7Pgaky9KEQAWzJiN7CnEw7PW3o3jXZzQ3zqHZWXwbXtXFLTtk8oP6bqc7D511pmZdBuAitL85",
  "key20": "3ymtcyCy7GhG3MS2XoKmBgWdHxy2k85Ei9cRaiynXVWW45c3c34sVN9QMW2m5qq6kzFRHAdmwqQaG38uX4gVP7LU",
  "key21": "3biMxG4gvEmaSVVGnaWkFooad4RGnnzhnEwxfN5mtHjU7c9qG1hsnQf5oRsePMk3HnuSzG3npCftEjxiEqv9AxaK",
  "key22": "5bZ8LpYoHuM3ZZkXgn7uB8QB6Qw8A9qantQsUZpF7K5cBEnZ7sHtQDcavoT66rRd4JRTVwWjMqFBH2d66e2j5rz5",
  "key23": "5khkNGxUYY4eWJs2R6y2aaPBQVXZDNM3MnhuFxg6X6iTdoZe17xFB3uqKojczkUPzt8gjJH9M1JpFxJgxowbmoSm",
  "key24": "5bMZMoi6yZWW14KSQ9XBUGWpfk55swduRh7Wk8U5PQJSZ8vRcLvLQx9NR27kquyiT8si17yAcBAUSg5FkzunG89Q",
  "key25": "5aeTwDBTYL2HHDoZAXP36fmSMimkcDmJFuoVKh9BTxgBpaFMezvLae2BMR3LJfFQ345E5VVJduuhDaKEhutowDyt",
  "key26": "4rAeVBqoDB7LB36DPup5sBh7G9f176Hpr1HeFq6F4VviywDKyE43hBGBNchy2Drr8c1oVRTiqjfyzmYq6k9c9pmJ",
  "key27": "4LtgdfTgSPc4HzGZv6bhfSV2uZPvUKwXbhxbaEeynPDMv666Gnx3rBfWJGiGd4LdHAahioBQ3PewFGi1CGM9s81n",
  "key28": "5AQPRwQu4zpgFpFwKBziRryuxSW2WKHMH6bwTfma2kYuTXnFZ1w8zhPG6PDQCaKreJLcoDfbMQ8FMDHCHV5ywDXz",
  "key29": "61jzmEAXFwLygjtKaXZdRu8FuMPWvA5w1UoHhWBSPC8vCjUkvf825WKVBY5EsLHRSJAXdhaBvqx1Sv4iUDKbKh24",
  "key30": "3f5QENzbwEerUBPu2vFN1uJGLw15u1BeZ46RtiUMj6LhsFvjYmq9ZiE8iebJt8b8DBUUJcVF4EwKSjWqudEZMj1K",
  "key31": "oXTgoa5kTBx7o2nT4hwpoePHR9hAtTNG4JSj1sZGiCcBzNgR2qzF5x7ttpKmiVLg9TMJ1Y2uQ5fdRvckN9XNHbC"
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
