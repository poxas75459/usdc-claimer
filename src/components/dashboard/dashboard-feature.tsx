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
    "36rYNaJHG6a1XNcWrEwz2xT17qobjqGsrqsBrgM3pz29npgANy5s4QQWH8EaiRKQ9PX66f7eLZknUtnwGNbsfhdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TQimVc7Gg9oucwqL3hyCFdnCcQ3nTNHuceWHARUKknA9r5fZwbfBFS5ThnC4PiijFz2uW1mKS4ivgUatA83Xqu7",
  "key1": "2myxekXjXzhiv1qmpTRsbQmBkNxg5h4HEAPAYCiqQZnE9ejqj7kv774XPpyCEzy19yDhA8LMprx87BXtMohUEFQV",
  "key2": "ZnYdaBU13tQi8jFDQQPt36MLKVonfayqL3kvNWiFtjmFnLANHviVhX6nFX3DyqqEnpryTz3K6Nxsz3BHjeS8cWY",
  "key3": "4bpuGE7JAF9WqKUBa9WwtseTLTGETRcrH3m8ETRbyH8ZoScoErM6UrDBBn4fEmJnQr3TZVbALnXqn458qrodZcPD",
  "key4": "3XBqu5sUxgwt7UxB78xighQvqVLh7TkExW2F9VFWMwBjB8FjGZTxtYXEgYtCRGFv39EnqpXUVvMqxoPSbXFFRV7i",
  "key5": "639j2wnmpEe2CqMCuKi1VKpLKyqBBJvX6iEUP88fBqRgpfCnFBcAKqUYaWfjh7K9KmCc2GrQwuANzpSxj7D4w7Yb",
  "key6": "5M5DtDcqmq7ZXhXHYB6dktXRnJSBwE1G4mkjNKCNy6udPjttojLZSx6xBo7Q2vAKYtwj9HnuW71vrgUst1bCA4Hh",
  "key7": "EmWKF2gMCwLBBm2ZTrGHHos5a4yhYxCMfjEGdaf6xm5mZtFK35Ard9fpRjbsq7D4ebkJ74QLUkkSEd8bHP7KpWJ",
  "key8": "2r1k13ZdWAWksSMpXCWdW39L1vTz3mqN1Y9AY29TAWcstd4vEtz253UWbnUVAdvJ5ErVzwVX9D5P1X5MYwYMhmut",
  "key9": "3UjFm8KJGuUPVYYpe97c19mRG77su7HhnwVBDKYmkTTknVJrJaFTkkdUWcLVbtBKVhhCRkeg35qoNcuugedbiDEe",
  "key10": "2rAD1MMnmzMeYFo6oxzvQdNiT2L8wm76X61DMVDVR5wnpgFkid1z15aJbZwNtr2uxBTmMUKhq2k73w3zWghCkD5h",
  "key11": "5KTtXjBEn1Qz9YHBbVZQgCzV3YoRdXqQ7nYtS7zijh1MVV3ZSJjjSVZZU5QACUBuJ7vKKtvMMFCnHXp29PaEcJf7",
  "key12": "3hKkDjifNd44L2oGAMPbWU6SQck7CKXALJpcU3dQWV5ZEy1iDEMu3k6hx6wbXyG6HKxgMSfYrNCw99Qg8gowMaNi",
  "key13": "5so4B2MMGM5ov1zNTmP4jUpWdimAeWun7UpM1jgHe2UdPjmAT7bb9EZFJNwxYoR57C2yz2EF6gKsYW1CbyCqNufs",
  "key14": "4AkESkrx2WcdPodNogVZVodZvTcQt6hg86bneREfJ6qKKGwyhYWaua4XNHieazuQcQ9fXMicZbVhr6zym74foEg4",
  "key15": "Us3RFQkV1gWmL6pcSFsiKKsnQxZhLRCcuZpakEBDPS37zNRj63cTfVzL9Uv1oZT4KGUZ8Kw9X9FsDurP835Lk8g",
  "key16": "2aao8seRMqznNt4kjqyvwcRTLwDonE21uYCQQBL1oasng1m3XmaDRWtjH7d3PEkyTmktE1KB9FaSHa7akM8aiWnW",
  "key17": "5UFP9o3Ug5wkGi3rmc3VwLhREfLg7WT9PEBvcxH5NRwgdQu5RA7y2WS6VvQ8QtXDTZ1wAwqL9XZ593qiT7goWHRQ",
  "key18": "5RopJzRVsebHyhwRzWy7yibec4uBwPciFahD77uqtaZE7TCa7h524coJf2wNSdpkvG5nZ2HBerbF95uq9jS4GQQu",
  "key19": "NTFq4CF3Y4QwxQbSL3qX8QHtCepsket1Szy4X4ZK2cvpecjctpz47cTY3BBtdjEenm6Zax81MPYT7ucpmNoHD5L",
  "key20": "5aPm6d3Qdf1Kf7S5j3gUDrGiGMXzCYmJnZLbjbHca5L2i93Ke7NPZhVvvPpu7fj7czAtEuiqSgLGW6LndsuLm6xB",
  "key21": "3Dd7sp3zx68TYXpqvaaTKMeASyirJbkadxbPgLy9KFFwgB43wzLuCU3HSS4YmUQYyZ94jXM9G2w9wBjhWvN96D34",
  "key22": "62BGVDQutDcWe9ASSjsaWHv751qdNNWCUUGqZWVuD8nDpoa41nBdFEfp8d7ZhPa3Qf97ZLqDSB2mvwa97Nscimxr",
  "key23": "2bTzYQf5CZ15arQeuixYMWYSe1uVpRXFmTKZ1SY6syZqHVEeQDwm4HYw6BZbN167s1ToGM4CJBRbXQ1sR32vU1ZV",
  "key24": "4KYaVEHDhRr6NaA3yX6sWNz4ycmMQMgjWhhmJj6KP3PoED5vdK3hD7TcWaJmiu7EfaTKZJXqpCCLf3Qv8V3PpCJr",
  "key25": "3HB6NzRCz2DDRULeJjP7Eb8J7EvKsqyVZ9H26588oD2MuddQLJVCV1jnVCQEzQokbZPgqn9YpifWUdnH12sUuoQc",
  "key26": "4QwDUvk1EqVQzPZnvM198NJ6UPbA6SEwAVMk8gfnmHPLvbFo9zoQKRQ4GhAT3eCsoQ5AGxA1HMu2icbGRaKQZ39i",
  "key27": "5Lt6nAyhqYwwA8zis6Lw6D581iHJacoqmL5BJTGptDkoYtTeRmDzqKvNca8SG8dBYg7Lw9aTgJLUAXUBYvaWe8WP",
  "key28": "5tU6o5HrbmNRrkLoVVVPe8A4AVtiV7oThFdZJWCLxxgXqLyHwBYRB3cxeAKJhN1oNvoNyC9cDGsLZs8jx8ZF7PKS",
  "key29": "64jQ2zPgqNgqeMoVaEoteVp2VexqUEqYo5eC8sWj7Eb2ZEgZgqnHsFAfpfNP4qWdpT4sZdc9DTCV7gbQnjPKeWpG",
  "key30": "27p1KjdkTVPDBMDXtQwUteiRWoTWu7yrPHL63VtMu7PpfU4D9QRxhKPjdafQeaGwpSHTzKY9u6zRwBNJwyJepyae",
  "key31": "21U93CGA4ByGnrvHVqgfqX1nx8UhdAaJ3QNyByQQcqN3RyF2Lx6NszL2z2JBctL9L1oU5v7FGJahez7hop1PmcsV",
  "key32": "4s5RhpHai99tDE3r4va9EVeaLZao8NjUhSMXadM7xWF2r8zBx3A9GrCxBqPvcQqcVy7PtDgqCANR7beETMJJVLm9",
  "key33": "4pHaZ5VP5z6zyXxU9DT99fmuPuSaJArS611jYCH9WCWyoUvKUvGK6GpkAf4WaPUE3Q7Z1wkGxssEgja5LmhE3Jkd",
  "key34": "5qbcvCmvtSdRbCgjE5GxeECUSjBFvKNXLfUKrpw957bwwLf6VDMsMTT72CvBDrqZSCgkYPN22YGNTLiwGtt6Y2Lf",
  "key35": "2ZHq95btRXN3NNhixL96XAEHKxA54AZZZxFFx9PUQAhB9osEG9S9AsAbJ9hPXosVFr3GgNnV7xA2Ttwkrt5VpRY",
  "key36": "4Hv11DwV172iDNpmvQTy6a9uj4b9CrNF18sFrXkJNNgsyknMryHfV6pAKzJ1DGjVD6WhDLgZPDLqdHES2g48Djgb",
  "key37": "53xj59J1N6S59rhDNnsXC1DnnFqpY6ygy3gKsT6AKeXV4TUJTUaZe8LnuMJLDfpuC5yuv1A1YETYTN1UXsdaKqtc",
  "key38": "5ynSTVxxHCxSRerYNwwB7vFjWKoX63bYjKXSMiK9M9R2A7ZskGSPaKsvvkKbN1gEdcTEcq8tjmTdGHbcHS8NHosq",
  "key39": "5Y2d1NGueF1BrP2zn1zBk1DgizSVfmH21ayjfYBJSsvSiTqFsWqSHBeVGf9wfgFdy6b1pkQ5JewNmR8z1MVEV4dP",
  "key40": "D5PtWCX7jU4d6e9JApn9PMVfd9B3iFDEB77cnJEtDHuJkM1tDKE3y94kVmzhszFzLubs9CBwdWoBkq89xxCZbQL",
  "key41": "2v4m1fA3iyz989byLXWonGCSmghDQsbUniwHBP5X5dW6Ld3bVWvEozU5n8y5CvsPR1hzNbcsQPwVPz6VsHVXBVW2",
  "key42": "4oUhHhz2ked7rp9ymbD2EKRaNAwMYGFii57tbgB3pyEKPx7uQw4iRhowmc2tmi9T8ErCK5dbq62ngUrZqniNSEak"
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
