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
    "3CSRcNT523LvEr6ogbhUcPVeYdf3E8bGU8sQ4eQwdSoMmmrg6BFkcoh1cqPBpvoeSYjWrGu6GVGckSNfyzfWiTT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1L6XGA2pjGMQYQzXdH812LSSw8HjFHkE9aNjoxDHG6iGS2qzLmdSVL4eJZ9gkHwFCJsnXhnDHdD6PYxtD1igkAj",
  "key1": "5sSP7xbWDza8wDZeWoEn9nbFZ8scN6jVGk3vQUjb9UXUizwj9C4cwHsjtXa1s4Vhvw3tiuHZs6Dnc2SZuLS2XAn2",
  "key2": "46dL6swxdYV7DqdXApTTK2nYRpYLWQkwp4yZ28Dr4u8U2YkRo42M6wwcr7bd1uri2CTNneMGm6rvSCSfm8XpiQb5",
  "key3": "2Vy681VD21bygfCcs3JESMWhjj1LgTM3gJQRnS5JvVQFnTjmB7SUJyH85MBVdpREPDgmSgmXmi33V1cDYj1pYHTU",
  "key4": "666t4kh8DySgXLWmuxREqU2gnLvpZzLFcKWyNWsnYrMjdPKtFwY1w4YXhVmzxmazDhtvL1LpeMWgydu5Vq3mXgMc",
  "key5": "63BnABD2KmEuhv5apKeP8t8tk6o3EAyDQ8WNKGx2CjscpRfYpzkyTXp664xBGwUmoRvbG4WtxeLcr56eScZAaxwk",
  "key6": "2SoFoNtUowwev6bE2fhLMAWZvAPoG91ikzKTdTbYrtBPKZNrGV23GNesqpPv12qX2rxcFMqBjF3TJw7iSoRKoiJK",
  "key7": "3qciqeyeDY7Ldp6zkAopgUqB7YCq2zo6GNShFnkYzf7W8Pv8DhiGirjLrnNoetVS9qTbSjA14yfe2B4urvaSg6Nc",
  "key8": "55MB4PokYPFYgExgVQY1XpKgUUdGGpbKigJth4eqmVF4T79CC5pybiGzatPjReQwRjjq2k3fUQLZN8TZuSdEBJS3",
  "key9": "2H8J7HeZjwSkeNhPzQNrCEUNHXXiwH7jeN1n5pLFbeNdq1HvVCPHAko9p9wE6buimHCKJcH2LQd3GTQJKNAPUTXs",
  "key10": "4feCnjc7GrgkXVEhRNUoBWwFXTZQdWULsC6eVS9XssUbNMcUGs8atrYPbhAdhSf2YxyrbwubDZSV5oKKDufy6ttw",
  "key11": "2rJAaByKwEtKB2oaFiDSogRAaQXivAM8Un9zh3ALwLXFSgemUUnqejFGxxrKke2HxMZEUCCk4ozjLCoyr2jt3nfR",
  "key12": "SUQywJPxSiBWPHxZGu9G5vdcudCdZhbi7nWdVNtxjfMTizTS1iwwjgc9fgdmESb2Q8rtxZjQ1bD15uE6TJaJEjP",
  "key13": "Qss4maVzSLxC2LCMHu4suVQQVG2WbrEADwL7tUa6zp1LQ96hkypiM7KAjcFpTHpvYsf5vcgZRzoFaqiNtKitAaL",
  "key14": "MW5S9tH9A5orVS8aK77vaYh2BbbPfTMWYvmoNsu2SwXiNvHBQTqEfynR5CmYqsQdvsiX8nhjEjuW3y5feFhbHuk",
  "key15": "eeVtwLMz4uUwfoJuWgPQqHCDCXX3JH9kA8UqaVrq5Hk4KWgVZMcfjpb3yX4rWgtmBJd8iyAPrnhTTtfSvmbNPpT",
  "key16": "3fQD9xcZ2xqvSVEiSswQfue2EQB1MbFNF1sFTtrsrBxgXjpBw18UeEzDq5qzQRUf4cLG64VueiXj54Zj55puitmS",
  "key17": "24vfBMUmKHmN3CffBfEWkmqRYC7AC7WWtxoWQhAYTaST8x8io1gh9HsuHE3QCWruNzWP1EADjFju5wNrJDQiUAft",
  "key18": "5SLen6e2ppeqw5RfzjnVGee7rN44UqC2DyWDMN8qwep9Rwr5AZxsrA26PU54ntq312Acdrw13zNBvQ2wZUX4q8ap",
  "key19": "jJbsBzKTWPAAY9JLpwyB7y9wPKknt2TBHm6GFVravyCSvdWZvWxNzJiiUi3TaA2aqthuNetphWTtouHgHNepHop",
  "key20": "5yoJoMbdx79V3myqXNJtZdm2CPBXyQ4qQJcsWow62vahP4HfY8cQZT95i51LHsiQkiVXvRCXS4smygS4HPJLvXt",
  "key21": "4Vs9NoKnAVet8SJCH3C4Mpc7RVtJjWXRBNxet4m9Q7GrKJSLXZFD9TWcU4yKXwgq6PSuWXMg3d9gsNQbUpvFsYbo",
  "key22": "5ERnA1g8GxmkgUMiPVPidPg3omWNXd3qv7zhNV4V8KNyMyMgMzc3pVQfUAmgMSSFanzu8MXQTUAV8ngEszXgNLmm",
  "key23": "2dm3C5tKWu1FMiPnc8UMB1xKArkZw4T1yv7qJo7mR4SBwTRZx2xFEkRWU2bLf8qZNRREZomD1YZSnx6Wp5aEMWfV",
  "key24": "4kKG3F4rfY7DPyCzgWxczA41nziBgdXRvr5cwNyeNJXDvGp64XXZRUS4KGd1eSPri239ta83ZST2GJ3XN9ckpbJN",
  "key25": "4GeSiUR21vTj6Rvbf8RAVkFQs9rooQbXqS5xs4Rt58ZZTsk2vFxbpFD1HwCxq5j2Sy7G2Ane3zFyGzAjor6HHDPR",
  "key26": "5BoangJx1pBGzA46pSTEsQkyuXbjBJHKA6LVLQ8mj65cEpMQwrgffPs2PW5AihNB9wtVHhZaLQjw43nGAq53Z4RV",
  "key27": "2EP2kDZA7jb6Q693cMNrPSZNgzyB9EU1pZaxhRfEfxGsvSUC6tExyJVbrhq9R3Yw8nuJr9NaVPWU5cmjkZiFcme",
  "key28": "WNtycAzrng4Sz5LYxjorKHQzjTGs3W5oivkyYKtW5WHrAW3Y1hokKdPiMKKKX9tB1BYvM77iTvagocMr2mDMw4v",
  "key29": "5Ha6a9oKNd1zvvqUydw7cykWFoR2UTWyNLukecAJjK4DNZwvR6e9wP1HnKwsyXU8J5YURaH7Yhot9kVFrGt7mitt",
  "key30": "cBcpjJoam3ZC6Wa3AT7Nb7cT89Eus8bi1uq2Efumxix9CZu8ayim1B54uq53SmVGDrMSbAdKJAcfYvpWqvKAo9p",
  "key31": "35REQxCUvenibUbep1st4doRE4g3MMFLvW35BJTUGgDGW7MhLEqUuJCvP9Us8HzouVSgJt2T2BVZ8LWu2FjvrFKE",
  "key32": "3soSyLZMKjZhhBu84zvZh1xfawzcA7bzLEQeCyQThBtJHevk3n8KPLJVdzoHLBSNviw1fbMukW5E8w8EBVHc9q85",
  "key33": "3VoTr4tLQthLVU515ZJjXHyqXdgijT4Zf1KthesyCGBTHskbNKYL1cEA6vYHZuRf2zrsGJMqpb2iq95aViNRyQ5T",
  "key34": "5UHbNEQT3B4F3EZfz9vTKV5kkjq7Vad43yk2RFrugfKnjgf5j8UAERyJLwb3uMmCPZGbD3aBPoMRBi99Uv5jUfTc",
  "key35": "48wS4CGcus7Q8giUfoCwxqeEvgNkji5vX79n9mSEBQ8oRGC8WZrDeEsPec1hGM7BW8VkkTH9EYPG4Jbv2sHJm8tJ",
  "key36": "5aTRXWJfpGPqqPEXn2fRdKE3LXjcKomik6bpq1CohcZUKwhUAxghohB9zgGDJLG7uNTdY3JYzu1gYbnKXCiR9DYy",
  "key37": "mhiTngv7wnGz6ov5h8mZ24Gk26Eo6b9g1LvpurcMsrYYwZRdVsdYNnUrPVoJoKtU1Y4fqHUKqbD3HUzs3aVZ3mT",
  "key38": "czswHo5zXZKVBYFUN1wdsq4HX5dbao6XUeKSU6wvqP5L2KZRxWeTfrWRyScXoJz7W8tGcRPgNHhXMPnwAjvEuPA",
  "key39": "3waNYqBKxwQQy9xUWSZccovCVDQ2YtbA5CnUF72gbrNXoMZSSh8eZAkJgmC8iTSkskUzeRiY98Vd8Wstgsroiggj",
  "key40": "3nf44MyobYStTX1wTdwoWKPKtR94RJsE93tC9UQUAUiFQ3F7b6DXsy2jDbaPcD3sCmHqhf9DGPR4wbpd9EUrzzr3"
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
