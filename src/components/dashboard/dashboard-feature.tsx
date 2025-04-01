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
    "Hv4kzL8t98JbfwjLZJas8YjChQG3evdDDYPPsNDDrrTP6pF2St2SUsxuqUjSzP5mEht7uMXdmof8tyENtQej2Er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TKFob2EVFp1f3d6UKxiBUQbMP4zdRiEL7oesDGocEmZkWqGBSqeEZtRo83wkdfnGb8XPXAFSgzNCkAu6SZsQmvV",
  "key1": "2YSHDtj1jq5M6VDexsWQSm3q3RaLLq7ZSupgzX5s4Boj1ZzAg8dxvwixFRBXzKz9wWcyfcayXKx7pGUWXxkAttBb",
  "key2": "5v3gLegMc7LwQ9bjoxqLHp2LHzxLFQmx2eNh8JLvvHSEwLw85kWsa8CKAQeiDrsh351kj6nwa4HA1PjVns3PUgKk",
  "key3": "45Uep47VF3nnd4zePSMsxJPp46Q9HqN2AkisgDLtBUA8LaJocTLGsodwXEdUWgzUYjMaXKD5X2twirLANLQTHuY1",
  "key4": "rbQFZr8NERDKvPGKKf7eV4oRjQLZbFd3rhKsC4qdz1cC9vvBZFoq4vhhz5NdTZs3zkhokEKt1jg9erzUg6nJNV7",
  "key5": "5sXUYptsV5FPJyXVt5JQFErjDWwv3mwB96pHmiocrsX1NEKA2z77KLKRXAmjyQ5Xnkb5proaRAAacfPr5a2ZkVua",
  "key6": "XipAF7kNcNBDQL7Gayf6gfvA17Cff97gXBnaSHSp8VjKLWbA5e7qUoPBKwPAFG6YMVSmFNoDTHq3KeCqY2rDrv7",
  "key7": "4ETodBu7yK6g3nYmpYXV7K9Zb2mNdFeViTHMvqaLv7KXVFkuFqnfxxo5vLnP5RUDiQnTQY5VjMNJ3BCjafAB4hAJ",
  "key8": "4neXTVwfB5PAPvKehQrQ9GdHyp2ovMyXzqKK4ZCu1VdNBw6onwABijFtMHtxJR2sbg9C41eyRbfoFjAKVeTxEw28",
  "key9": "454cWzRyRxbWN8z5DwVw1WeExwvm7ueyWKfzaHTVL2mo6weS7pQQ4pYjbujsuDd4nsP8C3W8DyGFTBni6T6vcTnY",
  "key10": "5kMGYTELG92fasXWCDksvtKYYkPhoxfoELPQbrNuGJK21PhG8jrSLnuDEAi8KAxXwovPUzoofoYp9sGBtens141C",
  "key11": "2PKLvnyU7AAgCZzV82sF1xXrBPgCAuZfYPJ8hreYZRD6Hw5Uke53iWy5XtU6ENCoYiS6rhuJnGko3711pQe1gBiG",
  "key12": "4R43Jgp6m1qF6w7Lf7545H7Ash1CDyFs1YEaq6WeVnEjES5E9h7kdxfXpNNhnodysyRbFWp1xp2wvAJoswTa1cNL",
  "key13": "E2mto7StCLWNGWuQxNNRHztMUap2b7n31yttayQYqSYAr7wqn4onXLJ7tvQvAEpG8dLaWiSna4KjRmtt9KB3ySX",
  "key14": "qJnKy6jJSYxJSqJqeje9Gy5fKktB7J8DwAEoJ26AooskG9vRwFpr3STXcoSBVtM7oR3XRTGvQRr3GyFBxSJ3amC",
  "key15": "64KocXaXP9V8sxLKgmK1hzZ86NqTMLHAPawKFtp6wbkmQW1SuxakRMN3ZJSKEyiTVvXYZNrqoAZFoe9G7RY1dC2c",
  "key16": "jFvf9EDWe89PPALL4hUA6LsfS1cUYqXFL3m616LN8NQ8tLLEUzUtZ63VMsVEoKZhViBFXbv9R52pyTKQvAsJSRX",
  "key17": "4bF6ZMoNTfTkLt3hZurFerC1YFqAfEcJeYrCjsbk6wtWhYYx5sHQJ3fUs8cU9rSNXwTrtgePfCBEUNLzEHjncw7t",
  "key18": "3UcEDH9JXVmJRc9JMQHPUxxhCokFQuznq9MeE8xgYjCV7pZEw6EfaoW124DgiqPgvfwXCQupp54qSFSmzSTs2GiJ",
  "key19": "2PeBKzZneQH2YgV9f1Sgbb6mgWMttEwfzr4d5RWTCdDbityXr3jMyxeEHaeT1FgdTv1s54ciTr59t4wVqYbpyH9s",
  "key20": "55o72CFVGq49YZh55LVG89NrGV98ezkWgWjufHFc3AKRaEEgcis32YicSi4TXxFn9DiBCrTZYRpJmzCPtVZ32jTL",
  "key21": "rfUpPfxoHz2gsWyQEkRYtS6743mg1V8hzaFkcQsrsj7KxE6SHT1HpSfLsYc77CMYEfNwDRhce1Cp2szWcG37eo1",
  "key22": "4szFA5xeNpyX9K7AKMTQtr1Zt2yP2hSZ4LwSthRKV6ZH64hQHzLN3dYnMxxPNx2GNdXVXTrJubStZf5sX6U5wYeT",
  "key23": "5LkKmZi8bEq7hj99k44xghCUYHKexc5v92eMvkrTvjiUDbBBpKaS5ajALT4RAcGK6JG6g8r9Bk2vD1UwUaHS4VTe",
  "key24": "2MYtrB9YLfaqnoGrM9gVcXeyjrKpknuhy3cnraZX9Bu4CCcugMMTw22FKHojB8b6JjMzCxJiJ2SDqEcWrvSRRnFb",
  "key25": "nFDta91spKe5M32i9qUXoEgvCdCu7BEhqtE6H1hU2PcHDF6LALVk7WaqJakjSeCXR6zGrTH1cFfeoUXrUSDzVJr",
  "key26": "kdUbpxeWh6JH9rEnnYoBDvYDiY1ynC3zR1foruKr53e2vfjS84F8XAXmnsoNNVKHRd2psMd7kKVAMJL1TCVBC9k",
  "key27": "5Ardz3UPb9MN124pnm2rYqCqU6RwU2SLr8HHMWjc4ZBzy1bJiNy3eYZKzcF9L7monLkm7MfhJzN3FoqAfD1nQhcP",
  "key28": "2mUdc6YKs8Lrm7NeK9gpzyCWmdBoqnBoMkmUqsjtAbWmHgPBzWRoYuRi963cq9rKFdtFizo5RRndqR5joazSNq5j",
  "key29": "rzUjHzHvfzkj3Zz7sMGP4mdfsWEknBvmrRJkhZiDeBGSC1NLHWCmGG6qLe6zHjfJ3RZSx6c1T86cRaMKjSitBh1",
  "key30": "34sDXZB4FfmBVoXg76QoDmJcD78qzanD3VwM5pFHy4MzhceLn4t3QsuB6Mbetx5HiLoSXk6bf2umkxj7KvBcQ8CC",
  "key31": "5ixpuoBnrpyJfnuHSGSjShq8HJwoZQ9Davqsr9R8qbsvRwSBDAJNseYYtXJscxEhAL4F53CMy9kTRcSq4iBncVnp",
  "key32": "b263hysT67vUX9QEXDADfKouJLwnYsJtKb4Uswof1q2YneA5bVzQCLYrJ8tgyUFS8sngR8c8Ek8jWbNs5Y65H9k",
  "key33": "2EsyGYrLZYTLyUJ79BHWhfmpHGJHA6Vz6fmVpyoQcsMqHa6Dgr7TUSCPFps4kUo1j1ZBd7QMDuW4kjUJr2mtuPtF",
  "key34": "siCi8ynMRKFoj9VZfxEV1VudPzWYWiKzeTp9WR2TToqFVqRUKyR3MkTo2Likgph8AA9ULj8GbmCcfo8jjXtshpK",
  "key35": "5biTHXstg4Rciuifb3aXCi2PgueSg3pimvXosvtsCfzUVfjcjuy3GEGDnj7pBcd7qM69eqVDb9TRzFqL87PFvVB6",
  "key36": "253HoGu68P437XVd7XYQdDV5tBhv1uNTGwvUnfPLFEdW7diAiM61dHeU49vdCb2wtka5U2XbEBtrdtkQjqREfW5T",
  "key37": "FCv7h7DRe3jCV1sNiqomSxFY5hFK4sP6K2gvfJqJDTFV4z7CL6JHuhmieN9HmdqzN1C3zCpqNiaUZAA4Dw38aJo",
  "key38": "3q3jcSywvgJKhQKaJW8WbVvxxZ2qhH4GTo3ybQAc8RFWdkmNepJjTA2FvKBng2tesgTq9Sr4ZGus2dFcocuT3fsu",
  "key39": "5rJE8M284WPbdCqHibWN5bFytVTt3QamBubExNMbwesoWcksvHTiVyAiKGSCeiJp9CTHD7APxKMZrLrZzYSZivF6",
  "key40": "BnA7RVzXeZuHWSRhiB49T2uifJsmssxs2jw2ZB23BekmAd6PL9ezVEVJArJa3J2TabbSzWso4FapLv1emY8TNH5",
  "key41": "2yy7pj6WsT6D6Qzeg9ph26ECeJVrDB7B8xhwoGa1ePdM2kBuJBfpd8U9i3yiQyn6orkqnETwkHYauMjyffMQeVQU",
  "key42": "4n22snSA2DdGF7AysRup3EyBxBKs2JEbzhWSHaBMYL1AsfBL4evAbAW59ttT9WcAVLzTgNqPuSys6CFrmLGkisA4",
  "key43": "2qcbo2bgJnHr9CxvMsWw4emV9GrfM21DY1LteXVeYauUPG2e7cDySoSoETt2ZAnEXzCKW4Niw8RhGdRvxqBZmoG4",
  "key44": "3iydUFEebkvrBje1ZWZscYzBgck6tt6uWxdiJSnKAYK2MEu4tNEQibcARAUnXuevLpy8RUJvw9izJ6grADd5qAyV",
  "key45": "4NmnQRUht4JradS3E3prR5jzukcYBD4z7CRjb7cD4BKU2JQ5FuHnyRWfrQG5JJtFty1y5cEqWD4zBsd3P1ejszTT"
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
