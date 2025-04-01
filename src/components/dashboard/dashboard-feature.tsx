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
    "36t32DwPxhR2y5UNACtCcFBw96rPKpSxhWVYr6TWDiPuptVhKuMCxU4jzxzwp4nRNJWUgqSoU353MHxM45E8ZBkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GWtg6AsD11bdzr2kFhYT5hjF8wH7eQXHDKHmXQUhAPqR5fqiwMBmyeyXabSMXLEPMzQNy4fNhY4hhH3rHnXJ4hK",
  "key1": "3TrrHaozUrmkmZ9qennEiPmg1Bko4PRFSwBeXP6poTm1SjFGnu8yWR3fuiqgMPgvBPkrvE3wuwkDzRGYFy6b5X9S",
  "key2": "5Z8pzxWvnQxA4VkKEtMuo7cKM61b8Qgz7ZZAYAcyWf5xDsnyAe42tmUnZxN4zfDkqHNjZG8tSEEPP9Amj8dqT7bB",
  "key3": "62macsmmksJSeoyA3G693rjzc6ymXdnUyJi8B8XcZNCQK93e4JTicUZf9JHkkyuiZRaQPQktmvZv3GqyiRjNiUVV",
  "key4": "5QuKeVpek63f1BwkP4QbwM1KcQs6uwTAxLgterdgFyN6zMZLMGCJXYZCWYfYwoD35jYa8SDFQSgNrBF7uzp5AJm9",
  "key5": "4i2ZCGcAcqist84Lx2q1jnPRY97ssCyaZvvNHqAoVLo7g6aK4GptARyE66zp6GVE7U2UPtRCYdwXccuXytJXMBbi",
  "key6": "5g17nwwpQFgCVeM3LYa31WuULKB1C6PzUGRf4Xu4hdtd8zjr96Y5JFgHRgisUtbbTMfw2hPz1en47wo67ahWANKd",
  "key7": "4GYFyEZHpCfyHJHNNg5VToSotGr7HftPeoGZ4v3zFxbzuPznpZCi7aLtpmxQHqdtKZTkkSaNfGWECSwHLvbFVmnr",
  "key8": "7uSPBSzf47iyMXzyGzQ7No9xLfwt4vcWP5RwWGGi6KCWJEaYfGRhSg4ZwEAexrPUBzYXhz4GNEZx1n9XBJAehni",
  "key9": "4VqjmxayDFvVFtFcv2UdUa5JnMFsrXsUmJ9pHtxaNCgWAjKzYD6hT2CkwBvpzJyWbcPQwkyDUZn6bHMJxi1WsFKr",
  "key10": "5sRmDLfERRDkziCTwmAYLvzQHSm5JsDpuJV776oWnigbjWZvKWcesJXXKadzHJ1KuS6b3VV6UycumAYakuwMzCEj",
  "key11": "2PemyF5JkeJ2a1GmWK2z5cJsQ14HevtNeqcK2BAZNx53heEnnifBFBnj46HQgNe4QuFfXFxFbLpE9sRtHatFRyWq",
  "key12": "48SQYycpnKoKNq5sRber3FZ1Z4p79m6zTU4ZnQDs7GeE2CrQeKYi4WRvmr1ovgLcqaYPxWeJzxmbg7WC6uNUFEqr",
  "key13": "VfZVo1Kbb15i2kwCVFVuMycqCtuE3S2Zh3k6jkXN33yWjGQfjfCh4dQ9v6CYWuRSeuJaqgzubXQSCZ24GSEnCt3",
  "key14": "iMfN2JQtf82B1qocVRC3E4X8ucgNzUvKbrrigWXc6yU53zBQgzpLhKoudbWz8V1YX5NvHVzyb9R2bkf1YrBoTsh",
  "key15": "ZNMbprsr5AHFnjUpLKpZhHFeHHdg5nFe7B93bX9Bxbmc7R4VpKuBrEjofBcYWr2QU5zLo6m5XZwcKXTkihSwvf2",
  "key16": "3P5W6opGd6CsPK6QLoLk3MrNKbaqVtBFEE4tRbrjRGRnFSsfn6eW7m1g6Hu9Qegzj9NqbdzckN4XNnzXSauc6JfZ",
  "key17": "2VPhgwLWaordvM1XDfPTQUQgh3xDMCKp9X92LjbNws2PJfZYmLnRk45Uh7cUw7T8MukXt3hymXpjbGdAP3XKWcG8",
  "key18": "3UE1zLm29M2497w6bbZUVTAKE8F4Hb9mSjMNGEXWYavfZTTBHuCyJa7r9ehdHz2jDcjmBxqUps6AKnsgBgx8VyvN",
  "key19": "3QkArbHxWXouX3ZoPmSAoLxmUGX4E9xLTGVv7pq9aRqEgvA87Yruq1Hhe3irVQAoWnhUdc7wgLmbdZvS4yVfs9Ly",
  "key20": "NiKBzUMsbkXzNkr3xvzv6ngVd8PhwjVCeJCUzkX7PMVRtBy96Ehpq6G3XbavrbY4gxWehYH7GW5izNSjE33cD6w",
  "key21": "2mNip5qq3KSykBhdXJq12zpaLoRjTvVWeyt7RiK2mZLG49niykbKgNYwhT9by2Rm4UxDJpPD38nUGP5AMXTkPbLE",
  "key22": "4cwuvZDXXt9yxH37KEqNMwnNuvwCN26BFdVdpbB8vANpMG8PRG6m5aLDydKKiu2pchENiQr3Xz9vfVyphAZqJuY3",
  "key23": "2iSKsddkF6fuSAQ36f2kpUUTbFNbqXEcXLN4GBEgMwB9tkN2HX78smxNAkNsMDyF3BwJCVZDVWn2GPBG3woGV6Zk",
  "key24": "gM62oCta8kCgmSULEzNinSu4B4MuzJvTFqKM5pH58CHRxe22mpKBsJ1Whafc8ApZkxUSe8BvuF3oCvDLy129iuQ",
  "key25": "4bESRMDS16VD4fwFK4xRG9hjdAXQs3P8AHivqmWitsa4fn8Apr6FxUKXPzDtgxbBbecXwsvvmXQoRdAwbWTNe22K",
  "key26": "3vxaCXXadAbodfG2RhRKPqRcx9JNYjsUy8Pr7eGZtasJaRxN39KohRqy5ogMZyevcEWj1QQWnUdm1zvJuoUpCNEc",
  "key27": "3SZGLEjeYJjkJyRvAkBvWKhqShR9H44rJNfxPPqxqLPozEVHP9SNsL7gsMDHSby9zrFUR3TfnjkoHy3jCZjSMpyv",
  "key28": "5eHqcxUvXWTExtQAiNs2WwRUB6Qhdv3Bm6GGcp48y1MwZ4P3fneuQH62DA5H18DN86eVUjGb1wRALbmA5D6AbqzS",
  "key29": "2R5v3f8ypyjGkFBqNQqdQ2JKzWQwMC9CLKhUmfSCZ64UHV4USngNf95SXk3qUssxF8pTayZpeQv4foch1AX6pjW",
  "key30": "5ufe1oQHqAmquHRKHSmMZxegJzt5o45G2yUpemLR3gL3qXssge5m3Qg6EntgdTVLJfsgWTFd2jXLqJQnYxQrBnRR",
  "key31": "5jZBpUaihNNY5QYYg7UmceDKgceoDMH4d5dmbPQ5gz5ECczciCfXg27pFFhyD9yyLBagDBg241dTihDyxZJrhEUY",
  "key32": "4Qp1Eh4UfAKP7jHSnDgqu8JhvRs81Gmzb7qSmHi1RktTPaWLm7EBtXXGXauWcNtUKUbiHxhJdJ1bQbp52NVpjbNN",
  "key33": "5mvYkj6Q15u4MvzaXGuTf8jUjnyXAnyAbewSxYkUVpKfqrfsfuf83Xsr186hZ7HXg4gMTJVgeUbcQ2XjA7uSk1mS"
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
