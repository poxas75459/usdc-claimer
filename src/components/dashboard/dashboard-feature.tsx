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
    "2pEATen17AfqpkukgN5CmUDN8F1sUxqNfcLKaReJhWJLfP7kf8Z9Kq3aN1vcUJExVSwG3ZSuhSvwpVT6Z4AVoTMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tavCxasKipR2n3vHTeKVJ2EjczBC538SFiB5E9mLp7Kqq5MVCANkL7wureUgJEa6GSHEVvZihJdDuZnL1TCoi7y",
  "key1": "2hhPBduSzCzB4czjCNQ9kuxMcpNFBFp1ECNPKRWCDY5KQeAs1hm19fGxcvhqr8Sz4Gjc7kfmHekR751LEeJkWzq4",
  "key2": "yfKQW7HFG5vjx58BWdD43rDg2Gcsdv6jV2n8F7yM9AyWp5VqoLGTDjtiYRdqopJPHNWdgqugnM7ujQpbLfhKmnj",
  "key3": "36Vw57iZPqrbJwqxc1WxGWsuSktrBsWPFWwfemB3aD5vGnaMnrFKTpd5brZoVkRUW4YboD1j5Uf8hDe58EB2MvZ4",
  "key4": "2sQaExh4TnpTLhBb4K8Fo4cfxCwNK36kG77T2yJNQu9omS2vQtZmAXFr2LCoCeSDPRc6Z67Q22T6sED8M461wARh",
  "key5": "4z8qpRXU8yxhw6rvCtJHtQ96Li3Ko7t4jVbznKvTszhPqpNRZC2pUXmcEtN8FrwqQp6TYAyX91m2jNPWgXwZQ94h",
  "key6": "3PgsAYgpTadbxYf9mojp52QQn9r1mgjWhwYYXEzeLk6QJtbGqSeBvokVapNcrjuVMkNBCqdTBtcFFCCSfoa2aXMg",
  "key7": "4NhscWmhwoBBSDxHo12mzYxZXWPvghUGAwczdDcCUXfWBMDVhJSApCdBQPHS9CrMF8BCqFFwoc9FAMgDw73u5Uii",
  "key8": "voSBiqinW88KRdEc3LnDsRNY9GtkqSESuTjWFGB6fg7ZD3wNrmTce4HCnngNyvyFQZ72bsDSxTXUdn6GY6QvS1N",
  "key9": "24iYvZS6bNrAXPWNtLJYU2tgzkaU1d9TqY8RbnL88DjV6QgJrAX44YPGKs31QLAVxzr2dAPj69k3SNKtifmxE8zt",
  "key10": "2M5dqahbSzZwade4swkf73cJ4i7cAeZ8NHRGAjdve5Z1u5F4CmLhsU6Xbh2VpnZ1zLyys8Tqc5jp9YuJPGhy1uEp",
  "key11": "2Xz7bKyrC8ckCQSvpc92upuVt3eCbzPKrrFVNkzsoXnuaMpeSqsv6M8EKLbBNLCFwNQ3Mx41NR3xoizq2zGHQmYH",
  "key12": "3A51Yo5GjavEzp3iqF61uqdvrpCCYHhNVa99yWNnRcspDK5LfHHazhCLvG77Wg3RiQe1YuiFoXazRFVwr8baqWos",
  "key13": "29QcZNUSwXoDgnoKQLc7tew5X8pvHkP3mD22VeX8DE7EZBWPtqxiH5Lj39yfHMv6Eh4DJzkox6RPoon8Nj8vrBDr",
  "key14": "2nXAavqRg9dL6EcRUWLQKkHUeuAWtaL979C446Sys4aHbz2FJXn8Zx4HrPrAwhrs3yLe5XkRdEs5KxACbQCME9TL",
  "key15": "ZzraHiyPwKhJC4DhyyiuAUJKX6wRfQKuEq5MBy4hoCpH5YKRAUKrGxZKjTdLVygbxeWjcVqgzsZxqYGSNm7bJpD",
  "key16": "66BENbHrie6N6Ch8VU6cLSmrYqwYs2mUuQcaDQSJiD2DgJv4WziSx8tWc7gJ89FHSNMhY6wn1gR7MmZ9WxiiSAnL",
  "key17": "3xmt9zj3KdsY3uTpCjKk3s7w1wJZ4hEc6veYeNX8Cr45DUSAZWLNMCbbQWg7drFndJmcerBkSEQAD8isCcg6iy2w",
  "key18": "45L2SKKWKPKgEAK5ppD8cS4J7zLsFaAEpMXBUB2M86GcEja69YkuLNuiPCyU1LS1ruY47HotmiCJrY9674TWQG3U",
  "key19": "3GMdvKxd9ivL4KNsH8zGkzCKw8mY4KjyDT9wKXhjNYeLFckhAvGSPMgrUkgYCLwdPJM9S8eSqLn3nDYEDNfFRgoQ",
  "key20": "gCEYVQZnfKZcmcGv71anfcU9vytY4jPJDG22SfmXVLY2REzuxXZPi5wdfF1cnyCVE7DYdgCUJnwLCya3Mx488ck",
  "key21": "2nTXFHdRZUYMEn5c9gPL3jGHpAaFHUXpC58tywtqmCszaHAnP85XsEsEor6NXsbEGFsPzGtiTytxCcSSiGoNeXE6",
  "key22": "3HmCiYcRZZyzKf4FnGRcLNLcDAHUM3VE3s54Zdmr76h758oztHSXv9rAcsGx1Lk35RxtBHPXSuRp1htYn7wYSZf8",
  "key23": "5U2YNdJUYkkvLe7y13v3vepJVBDbbdvoXfjjHSDJRsZzuLcCVjfSVm2ennL6ErhzeErxzT5uh8m6LX1NDtPKneFA",
  "key24": "5igZ27snyvm51TSvFLEXxQYzY7h7vq9ujZZwCzC9FWBizuB7dZebWaXJeu4ECNMy6oBEAjS3bcFL4JkkcK63PwMj",
  "key25": "3FqcfBTkGFU3wy4bKkHiHNoF7pb1kpQd7bb1wBQMeF3z6uTvgAu8NpwSFMhZvHtDnMCuwg4ALUbSp74xB2qpDwC",
  "key26": "27Tt2HhR1qKmhy5TkhC3SDEcfqZMFfUs8qH3MxoVJ6Q1CmiJVHg4DhZrZZG7GeMEcXP8k9iS4RXfHwCNxMAVthk7",
  "key27": "2mPnyNmJzPW44YjETAuhYbpfBngWVQNbY4TiWdMh7CPWUQYeFC6q1p9XgEkUZDM3TKFEewNxuqa5jU8La7TX5T1o",
  "key28": "dBgmCAA973Rz48hrjQyScsE2rDJRaWKWjHJeEGkLTMwA9NdNjFeokydekm5CRhkkUCVGHtPyRfJPibkXq93gNCb",
  "key29": "zQ8QKYkf47NrPnVrkciQjGqomF63hAJyuoXyuD99W5P5ubh5Qcvx77DDSYqEFgLH2y7LVnmTGJzXpWjaAqmeY4Q",
  "key30": "5MtohtNPYtgkbVjz1oBnmk7t2Nr7KcrtYbYE78qtcXU8mKunugcGucWxJQ1UNBx6ZsF2c8cnq1uxmYEGrE88kReL",
  "key31": "4pxZDbEkeU1MkJs5uGJMRqhvL1rocexhWKXpJoVnMYYZN4FF3PP7YkhGFTthmzshh3zjKAgNa7Nfs7sezN9BP31U",
  "key32": "4XDu695ZRddpXF4YDjbKQVZ8UxYy67EocfSWyKTkPN1VUtqWLMtowBktJ7yX96Qq5jiovC5RRrYBJkLbNMVZPri2",
  "key33": "2rJbtBMjZH4eEGvbRdP1hphE7fxdac3wXTvY85E5dYpTF6zeQNnFvVmQ3HsrDkbrq1WVZWphRZjNStPdBtv4k7eQ",
  "key34": "2Jj5grpoAT27L6CG5sajDSFbV5AYSPQgy2Kc5UwBSJuEcJyeBFnsejy3KhKd46jGFoyQ5FYxJg1hmur3bTVRNgWG"
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
