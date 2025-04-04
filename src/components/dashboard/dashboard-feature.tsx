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
    "3MKu78jPzDeVrRPqLTtu4gjKLkUTdyYKPsBeUBUSMXDi9GgNbf7F4w8x4RTZfeGWTnZajQDC2WCJZaPpXSVx2e7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ddj71cTm2p3WDe2zqdExf4WA4KgJYZKYnW8G3A4BbEwqeSEJKxLGrWy1VBb4yee2Kf21Mh3AUrgTZD9zkKbPyd3",
  "key1": "2Z5s8cQV3LiaFfvrhr5aYER8oSuaJZrWkphcfATyAvj26MVctJ25BWx8FK5U4YgvwTHqiHegK58cKqvGHXnMFnox",
  "key2": "3YgEDiwBnoabt3xXLvvEjKi6wueEekCoSZ3Qr8KeLMPmUaRnV1brRecqZUMbfBeo2FjEtZq4BhrmaUKLns7tBwgz",
  "key3": "wvCZQ5deN1AuC23QgsmsZYvvRHsHzwHF4teu9AtZSwGqScuZ99E4Tiv2G98FjwVR7tbNntX5GxQxXw71LwvP6DH",
  "key4": "3sVVg6mvMR47W1kwfkABwYBtFAf6cExbgQEJHmhKRmSHi4GX9rHnpeSNJ975TyuwSgtAUXqexyjNGqpki19m9oJh",
  "key5": "5SiykS77z8ARJn88Fjpbc1WVRxLiYH6DoXJfvqZ1nj78ZKnqgdHmYTsGLkF9MdKgeVVzKcVuVZZCmSzCdSQWJV3c",
  "key6": "55GpqjtqjyF82ERLjMkvadLuX6rKJ7SnHfXcbRHJNnE1S41PvQBe5TJqUCX3y2PsiTLDRDhZtrHqGAo59DwnbGNy",
  "key7": "2sZ4Jegef5p6iaFRuqtcX5SiLTyQ5QDpbfnK3xMTyz13vVfUwktBZvrf5YLdqYsu5ZCAGuyQ1TiXzGiHaae4oUYf",
  "key8": "3me3ZRofHcyze1FQnvk4gj2ZckPkHixvjgR64QNSHXAdZ6nzPKZdwGrfsfFPMGEXSb5wAwagTgfncBDoTmWSJRcZ",
  "key9": "5esNm3XfYhT5X7h3aXBUX2ijDnycVEZDwruXGpVbxx4xpqLJuTWSxAcvAyiLHvBsPZVHNFrNXvL2QpWepagNUmn1",
  "key10": "64bdTnUKfepdpmpq8Q1BqBLw2t6SBpPzavkkdYT9NktTJuHzxRSY6o6EJ6yV7P3b1Nib69pECoYLFsVNm7CL3W6J",
  "key11": "6jfgortpVsw5CvGmFP9A9Pmme52Q6EUrM891uvK1qYxuapogjEXBGG16wgfjhtn9fScc5CCUDVzrR6zFgT3SGWY",
  "key12": "FwpV3jro1Hkj3Hga717VVgM1yTgVR4LBn2UCan3p2FCoDqY5FNcjjWk7Myiynco5TvAByGjKWPPmVDpgf8cUFeM",
  "key13": "4ShckjZ5i3ucZMUXWHM5Tq5JxTwoVL4ypKCkpYs3cStXyS1hhbjViUew2UgsM3euy98avd6QgSBGXScJTdhbX2ii",
  "key14": "2VybTKnVsFh9w8Pj3oQ7fp9vtfLB5BJUQBGpxuZ7EQkAG7pms6VGRmLzAmUb1r96Zg6pLmygnKahNByNVqXyNCLz",
  "key15": "2ADQ5Krr8pKjKatm3da3R777PnJehierYoVZrin2Eo9x5vNxXmrg1dm4NLwmgAT1jJEed2bbpULiMd49SdKLSi55",
  "key16": "2k67rknoEDcuxrwk3iP4DAXqDWfry3t3URXQT488nTxBYg5Yx4AetqKVe9PgvZ37CQiGd4DmnbcBbunJaFgtgiv1",
  "key17": "4kiorxe2SoRDXGLsKUGJfqbCvrwhbhxJr7GbxqV8VqS4BxbtPpXC4TTrKfPPwFUAQWmePnoiKihHiLy8teqkp5Rj",
  "key18": "yhWwJyHriPaUhgJz2honJyt69YEKkyxe1hftRT2BqqwDrF2wbQrJCBLdSahUnq2jR4pgZCHQfdNwyQGixyFpwD6",
  "key19": "42aqFTfg1B1uX5MbsfrbtntKssn4Ci9JZAeRDpkbhDuvqwzAu3TVVk4ihF98qrgTuVpWvv37EWNqzAisrcR3RNAY",
  "key20": "HxhBpMVtF9JCkFr7WDyJ2QZfUci7MthxFuhazX4xRKRxLn2vBJ3Yp6AFsjGrNuSyQbvRcCvZsibMM2MVMKNr8Zs",
  "key21": "5QnzBVbHtx3xL9GZMN2EeRvgHY3zP1KioX23R8teSiUfZyffYn2A6FobWdwqnwhE42K2DvSg9T7VXzTnRX1bq44J",
  "key22": "5LWYpw6FaCDxp4NU3qQAANDcrKM3UGok3Pe2tkQF54kMv4T6L1TgiUhtDw9V1uj85mEG4LkZnT9YYvHvJabn3kBj",
  "key23": "2yoq9dGukfssMYfEQAR4Ao8ZcfRWb385y4gTus9MYieAnBUhuEpFMZbhzSpHmhhBwn3QKjoBGoMHce39dAb4JmPL",
  "key24": "274xu1uvzkw2TPwkwWdcfwc1RKBYX7ES11JzZXQwoU2nE3YJjkDja6dDyqC1fcoSwuacHftGcZa7WSN8VTz8Age7",
  "key25": "LqokwvhqXFRBhSYAV433o3ZYg5iFhfRfSwGiBevciiXRxviZDUxZZ22ypLnCNLuwfBeexfbopGSLXbfTyCFWv9C",
  "key26": "5kFMmqgsg8XeF95JH3Vhy1Z52iTySsnmtLaPhbCZQCqx19gSqr6uuNndZB7yLzXLF6HvoMDYE7P6prcrGveDT9r4",
  "key27": "4J2CUtoepu8KKnUoJ3rRksKPNWKzrxnZmxp2qzYBBUHwWNXhQ1bkXoKHLQK8dMrj4FrX7PvrV4wGVSgENTgFq1wh",
  "key28": "3EtNyHrqwc2Yp7aTxSDMMmhBw1QbXEYdKqxKRkXbr9QUCJBcfrQXDMYrAdFDfEstcRpoaWtbwSUjZxFpg7FR49Qg",
  "key29": "5x4FTe6J3nAab6oyB2xsi6fAmBLeP3hh8vnFjnrMKjhSco8kRmR8bP4XgyUMKkFJR6HT5wpmi5HwGVwqGnTQdU4e",
  "key30": "3FpZTtfvh2yDMPHb1UVLzUxtxWDULgsChZnp4LYvvqcWu549arSEZrUaJ9omwoTyHBsqFVBTHdNnenxzuA9N2qX8",
  "key31": "4by7LZ6Kq8tG4FiAs5W64jNk1ZPuka7yyDyZB8PwYf2asp5CTH8iqDE8wLYcN1iLELifD4ie8d3BXKPpN4P5ghar",
  "key32": "2ukSbRbHDqjohBy6RihQgrPscgDjpVJpZMKNpwyqDWmSZPoPoMKSebhR9A3iFhymM6wu6UbzPmeCwXLSoZacGcE9",
  "key33": "4zHesFXa7hCUoggqhWJf164Qs2Xs6kND1RwkAZNULbwid9dZ27c79v3q3gg5i3FZvcfFNftB9RFK3A4gDkgLKh8v",
  "key34": "yDqfvy7925SGSUQpBwtEM1XyrDGZa8L2RQnCAoqQ5uNWBzZgstAXM3iPFKH2CC81QoSrwCJmh1LdWjPxGLVoDks",
  "key35": "2bb533mG7zAigVRKQN6K94VFpeve18BYi7mZvYiDqcuXL3RdqTvymaiySr9zvPJ3sWqrBTKvkJxpWkDLJdDJVzuU",
  "key36": "4UqCtnqZfyCVtNinRD8MiBcET4coeci7SyDhJEJKoDT9bRpKEJvzGxAWe8PyCka2zCdMSGgMgf9yB3db8JVEA7aq",
  "key37": "2dJVhT5U5P9KGzgg7XPckvYFRsxW2RM4YCMiXmsPAbzEVKDcX8UUW2FwvU4j4QktgHmRLvBvLVzppfpj65F3V6iG",
  "key38": "3Ec6MDbzeGfCQGLjFBHZC3fU4jYr7zL4prnZdqvY6TnjzqjP8Nud4wp5poy1DP5B3FsVp83MmitCKrH2stTeoQk",
  "key39": "4e2pC3LR4MpjnE5GP5MCCwDoh2EbKmtoMXPnmFrRrbQMyfxrDhZa37bif7NYcP7awPKZWk5iFV76p5WFov46uTZc",
  "key40": "2QvoMrE8FnZon2x6evrASqNetyaDnsK2RXjMtUYjSLwyyaz4yBjZrwoaS1LFtN8mBp17wGQhcq1twsxNG2cwLT9J",
  "key41": "2f1Z4e93AZ4HM1hFxMyozaZAteeqMboxUEUU9ppFAYuuwezHXbGyqcEjNuejSNJzewzJjXGsYxU1PQsF57nP8DMH"
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
