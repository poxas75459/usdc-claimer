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
    "2r7pVZ8UL1Xh6eDdXqqnRVkxGHuR63GTMUmJnoMycdLAF1qr6C5uWnNpFx29AsEScheVsaAW1jW12QiVTB3MASht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uw7W6TffuStMfBw6x5k7iFNgjPrezsp4xnVDn7oCjKawZSYSUnbbxjzQ2jeEE8QzpUc9rEk8WcPJwzmqDWeBR5",
  "key1": "382Ru3xZCMB329n3HXoPwvr6Xce4QXGfr4h1bR3uzQkbvTMeBA92Ki2GcYVn72CqkjysovPkX4e8rLEG5VheqeGv",
  "key2": "2wEVn7JtFfATAhJ5Vf7Ba3pQvqhon1AqWNfqhbaL84YhdLyQpY4LDq5w5qMiEpgGz2iPtiUZw3zTJc1mGVncyQzN",
  "key3": "2aYSsXT2jmpp3Lbo8UhrL27mT2c7Wv1bL8EDyLZ3ofd5HtneoascA9X6BAApYibDNNESQeiybceud1prz6hxmCvp",
  "key4": "4VhDoEDwu2fGKRuazhS9dFXA7UJXmsS66ZTcBEvnAeFyZNpfxWzuSVsMPTRVtg7JJEupgrQAKus8dxspBwnk7sSV",
  "key5": "vJ632tXkB61puXy762wD9Ze6am9ccfqUdysbVZaasEzv8eGmDaUsuc8W9ZqNaWXk4uJX87s847BPPyyPtA2cAM8",
  "key6": "myTpNY1h7XcC2fdVwEfPWQUFGuNvnzxpSUUrLSQH1paRAEjQqUHbdMuA1LHsXKfaDC8CDzvSMeiVbwXqGFm68ZF",
  "key7": "3cPjxpLxSVB55Ucn9DABdBMosSRaNQ54eLkihzEYCBHoEsToNaQSijyeWDzSNg8qcuunyw78EXVvaamze8QKu2x9",
  "key8": "3uESocoHN9W1zdeZkPnxbfA9R4jnW8Hv9yFzQAfaH6e7CvukGmTPnDd4MtPxUwZ8qJi37u5uGsLFhYQpv56KL8kv",
  "key9": "2wcxNgA8PMfM3h6yuyL7ZTAvt7vjm6kU5JaPtMPV5fbwYTLu2DDv9RVEeYtZqBcpdc63XzprBDPwvvFTd9ApXomZ",
  "key10": "3yLv41CqddpkF8c8uTHy1dgXsaw4jAbm5sJHy9jiXdPJ864eAuRhfZAi2FzvauAYbRbvNwmSbFgP7WUEqgASFxX2",
  "key11": "4dDDgCxgotqbrgWZgxqgQ15nZhTCBHY9gJm4k6VKBJXV4QiJJBUENt2wtNZ3iMqTdTejj4fegTmrgMCQVuSnM6pw",
  "key12": "3gQ985h7NnycVkXnaeKkJXENdwfWq6y12B6GzGCivnyvhq9BsJdmPCBP56iFvs8LVzLfXJb6fR9cyarJKjeeoSeZ",
  "key13": "2reENNASJF7UX9bYhPXv5dGiTMC2K6xpb3UH3fNnyWpBn9BTghfWw3LMFUyyzvUZuvZ7kMVTitKuNKhM2axDSvGu",
  "key14": "2PpdGAsCoqH2jWTwhdDGAJGkmESfH4RcFGzGxFo4dLhF7q28vryjCSo1moamytAR4DWyaxdWpdTavBExNw6WYeUp",
  "key15": "4QQkuyCgTTRSCSRjDjaf9tKyHddX8sDyQWEXxKdcwtYBAsBbSk5HXLhbmyu85YA4LNnW33A6v9PMqPgzh4oND42R",
  "key16": "3GCsAiftUa53jS3cnZQyLCWuiumKVeySWbnUxgRUaE1PcDT6cpLW9zfW7U9LhyHdzLU3pD6oXVqHCZD1rFrqfSbh",
  "key17": "4gGQHrr7x4wuTfRCCeLm14yiGHtDQtnx8yAoSYyrPW7qzZQvDxwkiWmC4q52a1pdV3LefiD5c4TMQBSuSRdyNPp2",
  "key18": "ZNoTB3Sg54MuJFd1xANAXVGB6xpEwD17Dmf1fHvEKynW6RYwW1JMcdp6fqDi3MHSL7FURXjoLtkh4t6a82LageZ",
  "key19": "3J7B9h6iE4MbbNtsFC6sSJr4yXjvqssA86ZeXiWtv9kcZk7d6eMNs1tyB6YaNfD41NuegEQVbzyrn5RNkjbSMCCD",
  "key20": "48ZCeNnSpmfhy49Hf8vvwgj6ANH6AweibQgEB9VxpDvzxc6qNqnheo8FnmtMyZN6SPfvvi7oPUJ5sqRd6yacu4YD",
  "key21": "2ZRYwPLTJ5FJNcfr33MBRYf2DUsNGYEGLJYaat3PyZt9zVcVbSsxJ9rak4vK22FAx6reyriRDE5QHrrJ7ubZUkrf",
  "key22": "3Be7B5P8Pg1yfqh69J8RgfLdt1PfKsqKRorFYEnE79jZ5qeEmDkdYa7D9TKhyRHa43KzsGt9pSWcCAFjLX3qjJ9L",
  "key23": "3niYD45DxtwZeJEXaMZdG7Vg9fgEv1h3oxWaxTi7WTeJr1aukrni8TLrSB84iut6eqajMKGG36SQmxuAnmxSKiK",
  "key24": "4v8BjV64kq9qQRzZfHKHKQxTEpSL4bVG8XwqedQiTbhLToaq8VQfKtdbBDJz3sWuRN6tqvRbRJH2rdrQXn7foGPi",
  "key25": "4ecNUuZ31RJWyyeDJbY1Fy2edjqNcGddjHZLGaPYUczwa8XaQ5vkPBSccgh3uh7mwDWBEUbDvaU4udoHK8Vux4v8",
  "key26": "5KSCsW7H7fRgCwPu2BmwZLzUZDou7jpyL82cNuEepqv8xf65nbq5GDCq5RkzK8QWByYwmXRUJjx4pDFkNgCgZPQe",
  "key27": "53wAkaDxEnbDZsbyTyuRLWxDxCuTkmmtbCzvVE8QQTNJXVKkBr1PCxmZdnvMP9EQgyoZ6LrNVNuutUycjcQhYMXK",
  "key28": "2X7ELHsBWAMfZXxjND3LaT8egFKNxBi9h8DU5WUrMBDHd2cDGvFEhCLYQGbziY7iuQBzQTxchqnDBKH3ansdAkeX",
  "key29": "Mp6geWJJcjDuaHwbRyWBJzkhMxYhMXMb15n4gPr7nNvEmzUX5VNTXbxNExGCb3YHMAQdd796zNTc3aDAfhVbiJu",
  "key30": "3r3BByk41oeEBaEHGLKtsZwL4m8ahnNxgF3nbG4R1EqSHPFTse6SFBqXVWYxrJHwE6zmsDhutugw1639aeJnw7xF",
  "key31": "2E1cZm37XGYCCtiPiLYo7bhgs9Pt8vYzS6vf82hict2Mfv3tGqQbxx8Szuimmv7vZhf7vwmedWH6jQgXCJijGmDD",
  "key32": "5qV4rYZhJDYBZJnhJxV2oA5bL4y4JtN3QxaDJJDyMJ4hqcAW7EbQUQLNMrAvvkXX4STC2MhFGsNMJ6pTuAx3AHK3",
  "key33": "4GwhXte4pFtD6VwJJWYDEQk3WrgFy7VUfh7LDQ31LipTHza12hUGJvhaCQ6EeiwDFMs7yghWCTVb6ixyjC2zCpon",
  "key34": "3kuqzbUFdKpx4MQqky2r3GxAUEzB1tPPhJZYLXMemvVQpXsGjq29iGgKgGbMn77tcyohJWGM2X4e2hrgErv8hqsd",
  "key35": "2TaS5vsswVGCTWWsm87HUM2mB2JvRznRgxiZG4qvKzeVpChNq91Kgkp7fqSNSBsycacM7EXC3WctRpaKVKKk55Zf",
  "key36": "4FRY3FauCxQqmTQqLny4RBXEJ22V3nM5sNsF9Wjjh4ob2JEuFmqEh3PRe9HMnHwv6ty21Jxen4DayUtgs6C1LA4x",
  "key37": "jk2ujh4xMixietrV4zzsTjt2aeGd2xn7cKGyRTrgfVjoizmqtRyZugyGdpv6mvaM41Z8qVkeHdBSRNvib8Pq7kf",
  "key38": "RwdbgvL1g2245RmNhN2CggX1xX5BAhq59G5Q2xNeV7Ln8kqdFDP3zKVLtnmiJqSaTXQjyXn85jT39cyo3kJF7Ez"
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
