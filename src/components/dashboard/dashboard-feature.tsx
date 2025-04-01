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
    "3gzvx8QMdpy1YJM28SW9DnSs54upRZVUMubxqr9FsSzZ39bP2QMG8Rp4LzPGfNivxuSM8KzBpg4NfLA32Y9jACAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KJJJAkFXufLuZcuc2VsLJpxDqDTyujiYrSYnBCx7dsWVcpDZAiXgd1mvA6RvgssdbPCMXUbwiLca4czMmkJ4Yjh",
  "key1": "3BwtVWwStvLYm3NoJkDkYqcWq4isNrVP54fr5rBk3oGHAUeJiCH97mDdJNtFuPhqEL7f7KzFmhpWy8qcDn7h6uNf",
  "key2": "4wCHppZuaasPcfXvqRAdQFniwsWh7sCjCCy2nCrTNwxSXPTYZ7rMmsyon1CeX5n3TJqSD12B6eaZsChM8mj5WXbb",
  "key3": "5ujUzchwC8S7i3TNNgpg1Y9GiLU4BFeULy6XLXegiGDHPEU4bf128spZu7ST3C6ASbpUWvNvvztiSPs9fnmpJyQ7",
  "key4": "3AcHZfNjkY4fVkb9WsSWWQF3BHjRSL4ocG6SHak8X4NkSLgQGHGutd4YqH4a7D838WCYu9AGfmwb1J25Mqe1pDfn",
  "key5": "5UG2Zm93CFEYn59rAj1dkxhK87CYMQt7twcDjmEWmzBG7iCdmevPgRxkWd9Tjrt4PjeiKZAtUk1ZixK5Eap2uVEN",
  "key6": "5PbNnsVsypoj5uRa9jTURNfc5QC6ubsDyFF2DfFAeWEnMAtMXtD7UwmuvEvjfgBtnAZS6kWkLmPUemP8pQgR34n3",
  "key7": "2tYrKvGZAFHyXcr5CMwizYcoQHmfwTVj6fp2t2SambLFXxTipPXmg3GH1KPyQQGaeDjRLqKeEo69swqbR4kxZwCe",
  "key8": "5WPq6MSoaSo9iiVMZMbEQDQB3oQvkA7xC92LqhvkJi6toYc29DKrapHNGj7uLw1h1XKwxAYU3oFh8AiEe4kQKJmv",
  "key9": "2VMuhnY5EfqaA9mJ4vV38zxVoCdcfeiRhBHYrupwHyrJVqoq9hhfFPVn14TvkmYdZvzo7G1grDGuXhUqrqER1Dwd",
  "key10": "4RsdTvTUb2ovvj9hrcpeBnr8LUT7q8GKx39FhYj8jyqaXBKxntBDRZDmTiDaLT1veJJzytisnjyMnSbngSdi1hhu",
  "key11": "5R2mydtnuy7Zxd4w8CySyt83todJHpf6iSkyYnwK2yaceSbNieSnqzfFaNb9MPKKUUR4tAU4VmKQVY6v643nzx4x",
  "key12": "oooxPr6oxtxrFd8NPhXVVqT4FwUjUsQ3LPqjG8Fggn7DJECGCZ4Gid3Xa5AT43YiTQ4JAnYRF3uncmgr7Cx77Lc",
  "key13": "3nRHdSyLsLA2Vmfoxrics9YuZAVryAumqjDNCdPqhiVYz7Khdrpf5UWovpJhnnPHh9m5WDyzdhqiyoPvzJhEL4xM",
  "key14": "2BUgoB7oSCRfQyWqxJ89kbR9prY5cjWSzm6roNx9k6v9eJh76G5b1vrbYwEhazjfemzBH6pwwaM3EnKEeJhjmUYH",
  "key15": "5SGRFyiXFfZNXp3kERzggxaRN6Yx7xZszS8cHcjeLNaXgx9sU7yAuoLmhQxXYLuHxmC1guGKvHnjqgr8wBsFKpB4",
  "key16": "5ww9CBCkRuVjh5MSBty1SWckeJUoE4vLWRdUd4RF5wzpyPyaGdyGZxN79gotAyGxmht3GR3Eh9YA78BTiJhnjKBF",
  "key17": "5sq2RkgAVtgz5cP5Dfi85nGtSzUNDP4eTsKMroLLkKGEofh5wAqeuv5qAL1yEXjjANsZiJZbVeRqzeSKEdh53VPz",
  "key18": "cQ2H5cPSgFRuywvSNwYrXQotCMDHAh3tLfxdNh5j4cihMDBVfGBRwhQ4mZQx8egFWwPAcKRn6c2sxcDtLUJedmg",
  "key19": "4dMgTNYPfcpBUZ54xoLBmFZNEvUMAPXYJ9j1R6c1xM74HuLiQzEFNH8rfN1gwQPCBKJMJaxKbR4Jjj4x1XfwsGP4",
  "key20": "5Z9PxC1QMMbp5otcfGwcpvMBHB8WrZHHXJxAco2tABdPdrTHytsZE2B68LYH9SHi1QG2ptbuAYtGjvvUxF1NTm5C",
  "key21": "57K5zhEtPZQrHqXhBXNKXaq2gXVVqWzkHPdfYPEEJuvDqbaYYL5YUL9XdyRgxUTZokw9aMC4quhLq2PPRWCGfGa9",
  "key22": "4yhLxujWyBhBQkcNYDBFMCeZC4fwVCJxE9J1f4SjAf8BapfpJjrDtaFDAsAJ8C7XYBhhRx8VdnA4GN6bjDBHCes6",
  "key23": "4Lx1fLkSUve4HKwowJXJtmpQJKuDwxX79TujN25CR7f7CqHHkR92jFbho9CWXoyGivUwhUcpu7JABjayrGALmtcL",
  "key24": "Xfu3KTtb4PVBZUWD5S36YUcu1Td9NpSFPNA4P7NDHUjNJXH8w8g6CjqytmEGBQWpk3M7gKothjExxSs9TSiKzpm",
  "key25": "2S298A8217nvaVGMdVp7oAYWYHq5yLbBoCXYf2omwm7pT2DeqfDqDeF9VthuQFYo6Gf6MgLJskaTEi6P6DqLxvWR",
  "key26": "g97LHuZYu6xB1jxd1H2nQZiurx1zrNU5VbQt3aXbeULTabqqmEfRNj3X99qw9QyxTeYS87ZYoU3RebiTjwC9Pew",
  "key27": "4Mb6yageKbyXdSxbBJrMZU1uKNeCNGafcMy3oPTHY4T491iEhG5jrkFgTCFF4NhSMs94dm1AxjDn9TpTzJNSKdnX",
  "key28": "5JEbHk8zPSe1Au12FXR3yG6urqeDNCa8WtqHFWWWmcK96NNj6tsBgQpjv9wU3YAJvzHunHphBBzxN7t71MoCSkrB",
  "key29": "2uEuCBNnYdn94UTBgCtucG96Su9xmPpRy45vo9ojdiF2PKnL6EqaZxch9dJcmSCSzqVyw3ZYR8wW2iJdq7pMQy5G",
  "key30": "1tZepRG4fRnCtz3MQt8XLKjr3nz1Ej7vXAn8zyPCWMWeP3rMr78o6GfVbe3UaZnmssmSxRfvxoRh8PXURdnRM13",
  "key31": "EEQuvftvReeQAM2sTJYwp2E9hYcNE7cvJyM3JGCUwyeZW4m3hJ3C2zpMXQEGUMjobhrxwsVMkT4CSGswMRtbW4Q",
  "key32": "5Z1iY9kqW4qtUyZtzaZm1ny4y4E7ACipcibLyaR3SCLBXyhAGPXikGMNwSro2XfaDqtmova9b7pjmkiqgrrYMvUr",
  "key33": "3wptGxZmRMjzFjviTEUPhmDS3T9RpTEDJTyAcdyKuARSc3PEVrL7Y1WuLGpYL1Gh4GdBQT28TaknUnXXm5rUMpe7",
  "key34": "5dqiVpWcVGdYn4qEafDtf6fBRmWvfevDtcvZiABA8rB3gpxXMqeV3UUXyFw9HCSoG1SqSeNnLCZQdE8QgRroQNfc",
  "key35": "PVcQSWerhUf98LNY6MUpGQkXkRx1KhDrqnqfV9ApUzW5oiYo6j5QoPmAj7oSbA1gpLZXfwoBXGuXZbiaPTgD3rb"
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
