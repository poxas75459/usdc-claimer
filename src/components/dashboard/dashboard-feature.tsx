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
    "3C6pWyUbpLttHxNHcXnLNgnSa5upfNdRqFEvy2oqdhM6PGsQ54E9h4xhUQ1RTuwmYgZayWHyYirW1S4DiX3dMDcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4txxz2hYSUzkUnbd9Cn7etyj168pd5NMNvBo3YcLvpaa9XH1Vdw9Gct1pKXo6p5eYLKcjuc4BHqewaEEjDS5La3Q",
  "key1": "2QjV8ej34yzBp8dyuWBkEk7GD69XgRYdkLLvsnpGcMny6hFCqhoLZ5rBQb5YMYAoQqdsJnQwig2yJKQwXoUmUd5d",
  "key2": "5CmbwxdV6sBB9JWkdRdGpmeUtGRgTrAM4oCFfr25j1d5PorCkcjwRe1qg6VvVDwcocZmyHjcReHgSikX2GiMzWfo",
  "key3": "34t31vZTrCJgGLQcZVbVpnNWGPx8hdeRaCwaQ2UoVtmFJGfeTR2CotVjdWSPiq2mtfDk9SC8v74oo2bNpB3BnjXJ",
  "key4": "2KM6frTL5jCFNnWh7FdkeZ3uG2CTuW3nF4V7LaXmebJTLDwDcGMAoB86VqkXQx6KfHkXSum3CzjFnB34XBxxq5Lb",
  "key5": "598zt5EgCh9XGxZAo6MSqMcVfQNhup4xi5yT7trCDCwwyofFBDAqhBV8qYY4VJzP5XvTnps6ELKyxmKYK2tca5iS",
  "key6": "2FFipmj95wP3PmhcySV6ftM2ikRamUARrcWb2HvVig1MDimdkfxqjD82QtZsEL9fNDPbkM3WVDLnwzdr9NhXpH7u",
  "key7": "4to2LW8gvhQWZZHaivMweF1Fekd98FZfFX9Gy6rBH3U6qjhNhrmNNvhWuSayuccjpq8uT4XTiswA9oJUraxzeqzs",
  "key8": "31a8VP5yW6NEUyggknYhQR9GVKxCXDVYKc42Wh9doRvkiK8gFnuYnijPyHq4Gp7RGEPGV95FQWDNRgp4Sz3jHJth",
  "key9": "5PKSLbepS2ik9nFHkBf1FFQmq4hqvepQHmnnDE62mgHwwvsKHtZMpqxEWPkJJbF4yee771oFCpLygLYjkUVagVnQ",
  "key10": "49kTDcaBRm6cLXBTfHhGbzSy77osEPUndJGdAax1HSKb4KZrWWdMaKw2UJnYzM6mv7kaX6m8ZX7Yee2Rqg617D9N",
  "key11": "3bUrXEMcUBzcZbo9Rgq3tGVyoxu8LxHgEcMHLWwxSBbozivv3PKa31djmB49yYD32UQ5EZ5gtHYGp2kepWaJgXf",
  "key12": "5ZMkByZVM6ZR4V518PQEW8Ys3XmaLr6DSaMzgL2gfhCABMcnH7BwCvvndiasqUF4tyPCCqxoDNRSApwrL8bY6iFy",
  "key13": "3eNhnWW9osWUPzaoJGLNiMc8isFYgy9MqmxcDiV61yWPBrPYHVPzTWDajADBD4RHKK3KjjdDafEhfbV9XGVsyFoV",
  "key14": "3qoax8BrqZ9x4184Svkry7XmramLVYkCpZNAicjoUKH3vqCKrGHvcwnQCRdtcEjAGK522v68RJgqgF9iV5k74odf",
  "key15": "5VKjtRDXUqMirPMhbq9Ru1XCWMLhT7wpSSAKcxSAfXf8gf2JctfFWTmkuMYvMfeZNc26eLzUZsvj2ffLMJytbUoV",
  "key16": "kvGFCkRhFTiRM2yELGGrRbDsieAuExwVzY3z12aQSnvJ8eT34Zjq1qiWnyiDZmQfgDfa6iuWB55o9XEyyfHkfMt",
  "key17": "5b7txBBUaQopGiitJjKnyBn7u5ZK4XRiqeVNN79WyuAtwMQJ3R44avdyfV4Jhb4XCgXEap9nEDacgHn8AWH58KKy",
  "key18": "nBrN7xEYmpR6r3DZHT2EsTpvxjBV95PA4MnytSCTVj9ieJGeK5HQKDR2ixyuHewek5MQkUKMeTtdkgqF4gsoH9o",
  "key19": "4wpSRss49rZ8kvmK4mxeHZMDVvrkV2dWPvakwKMW1vhngk7pU8yQvW96wTu2vLsaNj98fxMRN7pLJL77bg9QdmXX",
  "key20": "5Aj2Z9tHRdamrVcy22b5Q3Y1MsTAsW4j894KxrArFd58qpMZtum9kFCRkKyTMZsaecPyXNz9yqFG7ocFGkNc2kgo",
  "key21": "64SHBbWd8jTZfViimbv96pZ1rp3t9kYYGqBaAhCHavY7FMecBq6MsNvr353LhtJnKy93V6E7enE1k4EScVeBW7fN",
  "key22": "1euAP7n1h9B3YRinvsQu5kcDWZsAHNmKo6rumdKwzKmyKBdZABKiF562ij4WcybGHp4sT4UYNT7p5wxh2p3rQMk",
  "key23": "2TQ21TmY51RFbcxAofMzRKUWZrygcQcap3Dx9RPKxLsW4dhSSj1Yhuf1Q9DvgmhGqfzdLvzHQrjd6wBQjybmcgA1",
  "key24": "4S6X4hrxkQjJkQXtMypB5kdpoWFWEZvuSgHZiG3tyuLAxiB1msM3mVqr4PBW6CPF4mQpBYSQD3KPd5FU271Vyw89",
  "key25": "42uMojMxY8Ugpjz1Pt4hrbMTtZtaa4j7x4pLgZmujVWMsuDfrDwHcXvPEAaeYjfAHocFuDB8VuwGcA9WzhqSf2qj",
  "key26": "464dQmE8zhrLanyQ495gvjgi8GSupq4TTHpNUqVQGvuyG28jvFKXoDAbSPFVsNXRd8Ba3sd32dLUuGtXdM6tZLqH",
  "key27": "5pbCeoq4eqb5kruFFKyogWptjubKnS8MmFhXhfRe4PTK5G6798ZfrvS62obvFaj2krCJKnNBHFM2T3p9P9gVCWJi",
  "key28": "cbATuWvURsT4nxjWJEvedH12QuLZvzD7bpE6YiyHoCi8FPMiH8mmprnSNjHeLjJSfAAn5NkzduamwpiFoENhPA8",
  "key29": "FhDJXDhLB3No7sn7ZDQqd2x6NJQtj2fzgxsr7hXGmocJoTw37pWMFgXHEGowPvm3z4UaXZERxjoCBN6qJupR11p",
  "key30": "2yqwDU1fwabewonUhxFdg8jaxHVS39oMxDLD6wahao7yB9R4nMX9cTF9zrXhQPv2Re7o1uhcjoQUrG1vHS3y9REX",
  "key31": "65hzKQkeH4aK3nBzCmo1ndGkUGnF9Jh5mEhUfq9KRMLY6vJD3TRdCB219gFA2UfehUMNM4CHk6Gq2pFjjwNF1Jx1",
  "key32": "oB1MNdpaNypDcRRUVWoN781LZxZzayS2XRmbZh3UYWmK1KzbrTmNKSKKirvAWRdiZ4PN6km3Hd9nKdPz7TjY9Nc",
  "key33": "4ob81Jnq98Ascgv8ZoVyHyc5nBVcRqCKoJMaLwRGEPfWQcs9HzBTt2tm35GcnEC3sxtSij3NtPHee1j6XspdznvE",
  "key34": "5Bo7nZFDrq3gTKEPtZZbbCiqRMJ9bYjPMLsN6dfbFo2StHXfxpVQMTXB9TTKrN8NqjptArHP1oFZrn41fShTk6g1",
  "key35": "2Wad1fLy3WFfWX8oLsUv5aut4viL9GqEwyppUtMophmsXYG2SrmhxQfQLYUJqfhvwqhaCZN3Z76mKsmYUBf4ddsx",
  "key36": "2F5hQnYoFY9jbBc74wGNxzgPSh7MBtMoLsuxfGLyz7P7ANeDzEaunYCKcLB1NeGeP7WtvizyyGPDo1QFw5Sba4Hd"
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
