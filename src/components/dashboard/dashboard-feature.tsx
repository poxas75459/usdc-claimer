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
    "2tNCs38SEMXAmqJCqu9o24f64mWsYArwFr2tGapsD62zS7aF9LepmSMXBb7RtZSoPQ262VwD5QJXiw8qDBuk7tY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n4KNW6WzVQJjag2DrPqbJ3EDyCCF7ThFYXA33c46iQCdqtf8fPJvTTvbx6G2AQd8JFc9y2ThVjPyBXQ3Fu6anvz",
  "key1": "4z6KEcnmsQhuWsHjGBxvb81iBRGnurbrwnBSMNeyUcoimVTMFVQYk3sUpHVuHqErpenVjBZDsGhF2bvyP1CSECZt",
  "key2": "47yXH2iK9fLXimrHa4ftCuWWq3ahm7LcXdPNUYwYCUKvQfA6S5kWsG2GkboLrNw17MuJSpjc1UFdqUvwC8csvrMy",
  "key3": "uRG7kGfJ5bYMSsEQC9rDWwvWRFqWu512PBnvZGjbcGgQ8PwgdKKNMhiniAS8hhXoQN2r6cvhEMSRQZt3PGsNYYK",
  "key4": "4e7UPziQ5z32fS1Ho6GVyLzdP3znxXh23tDWuMrMFZ92cAt68S6Vp8SP49EgrBTc7MycsWKCab1nka7Mc6iXJMvp",
  "key5": "Uy2pNNkDsqz4ob67qpPkZG8EC6jh2VXer3cFA91juNH8EEvgrExZKXNF4Fy64SVzoDvJiK8hhNGLj8jZQwY2aLQ",
  "key6": "2NB1wzCuzrABKLYpdP1RFyaMCsytoYjNaDnoRD6kuGwfN3qUVYav93USjdRi4epuFt6yXQxHJ2D9vRBNCHrBUQ8V",
  "key7": "2tRYgFopXcScLbgHZaMuwmHvNo2nTiULWTbR7APpZPymCMj6CZaCb1HpBSnRmXK8UeuubmQZxgpZ5HfdN1xdPuZ7",
  "key8": "4ZZ7M5g4Kc68jwimqZExkR8fTwjmjJMTP72hp8T3KuJEapV2ht4BHjvWnYa8HHRo93NiuQmxUkKvYPhPw23mQ9Hx",
  "key9": "2PqYE4kFsgaqTzZjipazbJzepsGcKCiHQY1yyfWvTAgNynhgw1AJUHc23dQPaQyppJKgioYEkTLN4653AfPXFjGq",
  "key10": "46ZQKGpdxki6KGoGJK2wsYNKbwMUn8jQE4831E8r1DjAB9REftm5QpyuZFe6n2ZDHPtVZhjcFWLxPCFXxeSJ5m15",
  "key11": "5CCHL6iGftqdnskyzqpqL8aqJAUYrS7u2zouomBe4GAPrgApctXiTp2Byf9SweqjFpp3JMGsdRdScBuDnDiAqVgt",
  "key12": "3M16ZpoGYEb2NbGkoqzwDhe6RaQjzsTgZiUBQCPzxwTsYeAnimBgdSzdVJMteiiGJZk22DZ3BGjuyeVaVJJdjdt4",
  "key13": "251ozqhzcRoHJ3drjBmkccZnGhmSoQu8QxxYFYLyD5BdvjtSTHPZfayyM16ytxdRq2jLfeCoCqiKGTL9Phte9w9b",
  "key14": "5DzoG1XgQ1z7WfxU1CKGqT3S2Hen8TEU9RzwseVYHFYNX7d6yWiBoceUDPLUsmXGXW5djYMiAbXkjGsYo3t3Br93",
  "key15": "2sq5Kz9ixbGEWgXxqHxW7wDfyJF6D5cKw8msBEAezG6BoGhmDoBCykqcKF1F4cFWWgTy26k2qyBkKRPw63nKESLU",
  "key16": "56ZFFC5mJF7bczpFqemFbfko3UWsbevVPSVvyc1kiCHXkpAfQczWbBaY6NLnVjqFnabJq4ECEnHuPWB8vExK1BDv",
  "key17": "3kn2WupRUgj2bQmHA1Sq8jkq8W2J4JUSorDmq9qJbbxd4Cfh8dd2yTwNmBgbSGVmXjs54WkmmR8Uyc5aUm4esnP4",
  "key18": "3QDMwr7ZySNsCFRVZbbwFgS1t3dCyCyxh28BSnkoBXjoGePLW8tt8HatPHbJMbGdfBCWFiJQRH8TgkR8zeEJcFzg",
  "key19": "35G7715jRHTzQtiQV5EVsEmoK3QCwTNvSZuUi4zhNpBKZNGcaSVj6vQhMG1ZkTCL53QnRtzTnfEh7aPkESMaTJ1F",
  "key20": "5qLtHYKvZ6bjBbAiuVfzJWFZjpWPSFhL6xnzXx659i5GubRP2vd4CWncWgggaQ7rgCkKVVsusfdbZnznChSyv2WV",
  "key21": "pPscLoB47ce4DcvxrnSZgDthXDPh1BJeGnNT5daAk8JxqiKUTQ1Frrw4SRxQZVSTu4wZx9vx43y9XaCbXkcygs6",
  "key22": "3MHHMft5KPN26VmVzeYb6VVDgnyc2babSFjzkWc1EYPNUvy4wHcj2PLtdVDTwhgDrbD7cCqBLnvfscx7P1cSsbe9",
  "key23": "st15icxQeJ9B4uxFTewYLnRUfxT3yVQfLZqNEHcnLwuCiyu89Z36LLATrdRnLchJsvjumXRazidoanUqufhAu5b",
  "key24": "4VjczKhfu9h9U4RS13VtrY1mJb5aJbpc8XgBaXBedY2TSqEV2SBbjnrA7zEnn6z5bh2G56CTFD3ZTqo3SqL2pecj",
  "key25": "3qiDPLf15Uv7HFnnojULrAX2tc9K4Vdkdhut5MrteiQA95KrXS3gmuHnXD3Sniz9aTxRBP7ZMB2fG8tvTMBEkYXb",
  "key26": "kw5JsddLdwFJGh3738qToMuWaLAKYP9Me5fNdE6J3ERHakthrmccPzK8dze8GPpdQo4FRQEzeraQSRQ6J3CgmXK",
  "key27": "34B7PkHJ4SUQio1mJXEoQDCn2pZCyt7StKr8PBQmHYXdvZXYkg2mQNSnxDrxmgnhT39dEmUAGBHPvWJRBqp8FrHF",
  "key28": "RpZ4bocwunPJ6bNhfMujx1veG8JmCTNPy8QB2TFvnq7WKKiwvuQXYXydGBMnkQTLCD5nRaZaYfXar3fqErvW6vn",
  "key29": "5aMhgb2epXwTVRFNFgUCpBUruuC9V7tVopfXFWp8VXigwUXP8kYoyAMWux6HXqdfbsEHRu3AYceBLw3utPyNqRak",
  "key30": "4gybuBNet94b2Uq3AkE97CxQXJd64MP5Gs6gCsxrY1hhm9VGE1XUt7i5WvCBsVZhq4fDbYfzR4wp5XLGoYnp2b3J",
  "key31": "RTQZPyNQaSny1uSZu2rvWefbtESPba5tfC5sg1U56idTvmDsq6Yf9HUJQ2W7K7D8VHHesujYMcRDnoL8uVAZtwX",
  "key32": "65ftXs6fPBBvf1o5iDuXN5t2cvTjrG4QUaQ3ADeYF13gxiN7Ea56iiYm8iSp9CUMNYX2UvQFC46Ujqy65zFrxA3r",
  "key33": "4LCq3unqqCe2VPfiVZzzSv13ovXDp7LBqKgoHU5CePn3rLqgxZ37yikypvyx6vFXRFeXh2HmRMdtuP17xUeWYWiH",
  "key34": "5L83mDK2d53hQiFBQApWUboKn15sBLPB4vWpnvkXUPdJ3k6PtV7YxhPkzMp5fTbjSDqcTWRR5dZd4wMeWNh8ie5v",
  "key35": "2Zy3drWby4cUupb4jQk3oo1wWeg4e7JbduuczQtT8f58wM4FDXZn3wDUpM1jWVLJCnegBLcK9PgsTztBUJja1nme",
  "key36": "4BUijR9gXhTU7YYoCq8wKPQNhRKwgjWTreDR5bhMFiQf6A4moAeUW5DvyeiHNzWh2tBnWuoUNNQssEsSTu9JQW4G",
  "key37": "4DdmGBNFwMxJ7nbc3mR1m9r4LuR1w1brawu3XVvUQcnNWH2ycqbaxTYcu63nMyTuz3ykoVkes3YA1n4cyzasZp7c",
  "key38": "62MnorWqArMjv636aR1ENdQveE1ujWuySbqQAYKxyhQh5VFTMGczuPGAUJscspRjTDB84vMR2Gk4gUnBh8p4NFh9",
  "key39": "3wnkYfNAKiQ22vYNwkktSn3kDHMgcXYCRVh4s2MjNxrB14ZV15DL7ktgpDyyv6bYpBi4bs6cwamU5XyLGcDoWqm6",
  "key40": "2i5VorfRdSegYX4PLE5QhWmBo1eZVrYkKUvHnv9dzeBb4WXjJvpLTLYgLYdiiwBAst7DhAXefHxoySgqZH1JkrNR",
  "key41": "2m3rstom7hM3dq9rANgphWX75zsBBV1GCeE96Ct1iEXjjpjK7naBen6Jmita562XGriotE9sKVy6bK91xw2nDX7D",
  "key42": "45qCKDZ9fL3qu2VZ5wFm6wFVoic898Y92eFNxQRna3s5reHrKMsqCGPBf2G3BsyCAQ31J3M482kveYhNxXkof2Bz",
  "key43": "44rwkfVLDTh6p7xqst5dKhHPoKKNin7AJBJwygSXRDq5h9UCENmTAGBR9xBQszJNaUMxhqfDok87kHHZEY7Xmwkd",
  "key44": "5akhSXmLKWDaCgkHoE4QngrWTf944M2Xbex9YiGEkQS3RD8bxk91DLXqrZp9K6W9qab6hgefQocLhd9T6zCUi6PK"
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
