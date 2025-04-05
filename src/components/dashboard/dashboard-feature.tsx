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
    "5NGZks4sQivxSu9o7VPPXxdz94LYy9jodGjAdWhaSJzEcAySb451EBCRhZSVSVVGZUjoUFFAELgoztHbrJeQ583z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vP1ZiVxEeqcCaLh6tNUrFLj3MRbmoRvTUbhVJE1fKp3raKhy7W7KAJZMer2z7ZuDhXKAQXCKgiYGVyk66FMhYEe",
  "key1": "5CvPDTPQXzQMCRJSVC9jKj7frvsqHrrDRa4ZX5DHiJF9N7fh4odyrvMCjkJv2TMod4Aa4pqy4ZQR8cBwXksYCS1o",
  "key2": "4WWTUYv75qT1irCZMFSnFsj9piY9dx836LLRiTghjg8Tk26JMa6LwVP8YrfnhHpn6PcCJQtY6gd4duDYamWHrAGm",
  "key3": "2i2VomdJSkm3bB6QxbC7hN9i1yXzZ8Gv7ez2niqFUhjQ6dkhGbmMjMxrZKMmqMu175RXm4k7EsRjckrgidGbpS1b",
  "key4": "9KVSeRZ5jGJE7p9D4mV4DVuCsKJjFEUkE4JcLwFqRqrEYuxgwoHUhLR8GitqbGWLm1GMgoDGwM8eTM6UwuiHUxq",
  "key5": "4MZKdAG2VTw6EaJ5P3Ee4eieexkNTZrRHCwWxdaDnR8PXAf63nGPQEymiaLgQUp91v6WZMeyw7Go8bTqkxhJdzQ6",
  "key6": "45KdAY5nZxcvpgE2vh3PvfYYvuaSBNejmeENQsF5wNwqEms5PQVpNNkdRBUryniQfMHBcEYyE89HCJqmPoKCDMU4",
  "key7": "3GLdeNc4SUUABtYiPRtrafmyBChM6Y623vGSwrF1qCGgQBwkccJxuvVbFfDzcAckQTJhUq6Eo2inSvPENf8Z4kZ4",
  "key8": "62adxCy94Y6zxer8QdyZnNs53C1dtaMMLT1TdFGz67VAeBLKV7Hh4JezZbBQ8mMLtQFQuzKvPY62F6EW1d1bUkdu",
  "key9": "4EoecCkMUBStRg8TbuMSufLUoJNZx2XxjTCsgbQDpAscL8L2ZJJxKqPfGQeQsX3MZL2EBMtZRGniM73K7dwD1Z6J",
  "key10": "4qaw4GwfKxKtJbJkQz6PJWJ53m1qgdkKhsN7LYegPQQutSqLhhd3WoxBPsgWKLJ9P3jDhhezzS8P2MBDdXyKh2Fg",
  "key11": "3bnCUH2UZVxYcxDQ9ns5h3wUTx1qgk1ohywpkECHaBajEbUeTEhirkmLcW4GyKGHR2JVv38qcLCzWR2beiVTn3eo",
  "key12": "3WFztg1ct1z8SAtPKDCVb2U8YHBoVCEYf78xiZf6KvYBKwrB1UoXxrF8tSmNpBUSy8JgcnRZtG942MzPpoNcCpE2",
  "key13": "6DZdyHQignJeyUdDQJQekDUBEMqSzGhh1TWVzPGC5LaVDCWfr29h6qGB4byKS8k2EJmQJfVs3drF9Ktb3ScteXm",
  "key14": "3MjabsnnrzdX64MJCP72sabc1ZMX4uAm754QngNPcroftcyWUi2xw521dbKrBxeG3dPNam5xgFECKoaz7aBZZqhG",
  "key15": "3rHNdDiPjrGQNn4NnVfifFRNfbYsrB2YivS6nW5UtosBFYVDxvpFQMcHxB9FXR8bKTV3pQu91pRytchGcg3A3SG5",
  "key16": "1262GjrpeXN2VQx41pv4YL7kKA4nuZPV8cG2ZNtp9uJVch4wUzG5ZYY1T5XGvg5i3hSZygCM8j8kJeTssSMaBBGc",
  "key17": "2vdFHdq5Sut7gFbzrMHHpYcWYvGHxy4oFnGVBCVtqMBokjJqaE1aizM4aZN4AjK8ftZ2Ge6d5aFBWk2RF2QHPVAA",
  "key18": "5kxgm4CEdvzvLjMPUzKJJV7shg6or5m78pPdcfEi1TuVFPbuuvzsaFYMjc9od6gA67LLzo6guEZwCwycSKTwD2J5",
  "key19": "5fbQJPZN9WtjP6ns5Msds8UENpgkeMuqCJxpscJxCXDsrw79N368WSAdv25RTQoCLEoBroAuwaiXRVBsh9h4HDtF",
  "key20": "5mAm4cEuz6g2q634Uqnu9gdfZjYd2pyGEWJNRoUnV9TdqLKF9ZxDtuNcJkXKyWYsvJhXk9J9aRXpgFk2kC85E8oi",
  "key21": "37DbKMr63mt6LEMonJn5bgcPa4JBMFx66FQvSXRNZ234eMZqP2EEymHGd1AWLJvivX9dSdD9zmwQo7EPNQMaHDuc",
  "key22": "3LRArW1GXuU8RuWw75maFLkPcJQmdaD8hD1VWf8wqEAQckWApgCb24K4AusphmnQxmHuZvgHE184PcMTtLfEeiXJ",
  "key23": "65vouR3n5us7d86dPBLVSfopBgJsX9TeZ6CsqpAbGJKHpMwxmaQYsT98pLJ9ATYPFtmbCCJqc1sFttFyMMeE4WfC",
  "key24": "3rY7fh67edwUjhZb9RTfwE85GZRU5ETfHgUNtUYA2iD2nKiFrM7aNg9z1mC5bYtqyCoMo7ChxAPXiMn398UE8Chj",
  "key25": "PXb8U1YnPVd1eu3i1c121esgtftuMonXdgktzfdvLKyuKDRtE4ES99s9wiGTnscrZJaqAQfSofakRyt987vJfLQ",
  "key26": "2Z2kWaaTDuZt9mEuwd57dn4kAYeVTXKdu4WK7D6pvtQS82ghv9Kg8oHWe2AidCpvyWYMMFFX9naqCtKgxxLGQFBZ",
  "key27": "5JdWSP66UvmCkseMzRbLZDxVcCpmFMDZafrFTg1qpWAbBBVw1jqcjPZ6eRMSVL7hcYZLBP6F7Q9ERtQbP1S3Qiok",
  "key28": "359awu2hjYk5wP8YVr5XnGfGQqm1VhLNsyjh8Ghp38WP2FGtoyGqr7HwSm3khqX8oH9aMPhK4VPYDgwLmsapEeNx",
  "key29": "4m8Hb5ShYutH3SacvSABTbgCMRMvsEsoGsrb853WBVYk281YSxkYdiakXPBxvLaZfyJHBsS5ddrU7xjJMV2cnpTY",
  "key30": "4Fbo9HKiHizTZwyiusWe4DMaUREMYS4SL2aCPK1qo5VpCFKRgXrL7AwaV5D12QTiNFumVJDC2ZztG3qBiha4G8YF",
  "key31": "4hNyWZ8RVRwmwwwUbwXxBbEXzJiuhVLyxo29h6Yo1AZHqdXZYJPykhMns2t5dhf6G17rLqtfgnrpqjH9kNfixFZX",
  "key32": "xAeoq4CEeuxJJpvrSxWucCheTwPh7SK2BRtuP4AoSZafq7KKxEZo56E8bzzPEUkgDQtHkHhYAVRKgnDGK7Q8Atk",
  "key33": "5LBnfcRXRPgEJmqAabQMy44uc2iiU48gFf1s9k6M6ufsCkYQUvvYuocn36ujahWwoWohHXvX2JePfSgnnMUa7AmS",
  "key34": "4iEaRpS8Zk2XSeS3aRGZ5XUqQcjhJwyT7nxuRTKskt9CUP69ErEsFZNJZVgky6Qu8buVdcEj5K2VZju6RokxeZ11",
  "key35": "3mZBH8qcNsYago7rfMP9LyZTwazYZZGbPZe6TN7vJuNCM4UQapbSPSa1dVU2Hostz7D3hdAKdEpEaA7TMThDM1PF",
  "key36": "62cg8h5dUBRKmjv7XXXV3vHh9GwpvZ9WTcbaWKBqdYfEN772n3RStbopKmNM12oEAVd8emnN6g2aou9TN1JsG3Qp",
  "key37": "tTLkYJ7g6TijWUJNFjuH78Mg16cEEgiHU21GRXXLtyB6EAfuPe5eKFWSQTzkocFhdxi1ka8MSfSb3QAzxW5nu67",
  "key38": "36sqZoPDJgwWqpN4k6GJXDkt7pzuFst7Z9QfMgW6xf73Vy1y9WbENZmuv6c9gkcpqDc7EiFyjx5Gg4t7Bc7wYpBt",
  "key39": "4xminFhyr5LsqveX8JviCrVghLK726oXsX5bauCRr7Es4efnFuFJ9LsYAV6a2JsAyeVcxrTKAKTwTdY5duRWpa68",
  "key40": "33DQ1Y4xmrtuZMjo4tx6Qo7UvBxdWysCy4PqyTf5vyCsuZ6Ga926GQYkZsSVWm6C5et473SZG745jtNW6DV7VbKm",
  "key41": "4gzP94ADqXxEzHjS8P1KHHw2ibvywDpTwqKaRNa5589Ak9JTnpm2m9SMaJfwwkEPA4Gepo6m8eEF7c5fDjJvjir",
  "key42": "AwJ2EgNYDprytMkEUwYUALRZJjoNN6TCNxiuDG88nCwJrs2A9kBm2onMYosT1eXhYA81mDrBKJq1mkWbHxSczH1",
  "key43": "2djWffHigzg6GWbVyHFmS7UeXV6AY92swvfdyCt3BKJmw5VBs7absj1EyQNMoLxLMUS9aySeuACHk78vBVrVU1Fh",
  "key44": "384ASq4fMg8u6UcqS1DUP75qH3bpGmnS4URypsTXYEcU68qTGt5HC9NJzjcd2TbwD6AEFTmJmJCgwzmmC8WLFwp1",
  "key45": "5ThQUKCJnQjKwE27CxDUJiPuaPFxnKv9TXy2JJH6VqskvXXoxTwrU9NGkQjgZPVdyooJCz2iMwurZZ55vFpPfbAM"
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
