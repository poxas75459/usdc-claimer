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
    "3N6QXmxCeTSWbTFp9tm5KChogRZQt6ERWy5kDcYGoSPYZxGubGZ66bUJLyJsnLt1ckTCNqhRFDiAMS3UqDm4kR1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XK8QvLhDaMhqkcQULNrRoqbHJTHZUpTNqasrZ2U4vGiidyPsMwKJydJv1y5ymreDp4STSCLjqoX3mFvc9pNW1Qp",
  "key1": "4cEk5jCAtdwKPsj8gnJevxx6dUXb4qQkoDTUWd3a3uArGryDv4YCoU2WT1J77PMWMD2ghgC9mcAzWBiUwAKzqTkx",
  "key2": "4wNYNHUm18zuRsu7Yibeov5HsrEY9W1pEsCG8bCDypxen25Fqfc2Pu1vHfP7rRgb6rJnP54dwje8jXe2iDu47QTY",
  "key3": "4JS5TXRZgKcuebwqPJzZVP7CJLtPWMgucKjRaoS68zgwuEdZoe1QzXPYHZLYdvKyyX6LooMo6hLZ4hwSH6mb5kod",
  "key4": "3RvD9BibckSVCN4WPyCPW6sUfue9a14jzSeDidCq243BdjGYgEoNSE1VHZqpCJiVB62bvy9s3swE8sYyn19gAQXg",
  "key5": "5u8QvZAoSDmm22eFNf9PvuyWUkRz7qDcdxSsyQYaqinCi91ErtqUCtH3GtJVAH4cr7cpV7FuWGb8DHiZLkFzwDzs",
  "key6": "6aFkxMuQ4SccvbyxG8zZRg5Yk8GyYkiJZU2tKW5rzNWdsXjCiiThycXtxzHBSGNCDrbkFPHogFXPzkz2Bn75xrx",
  "key7": "4RCGe8nuDUd2vMDmPyUPmbtsWQuP2wPHEbTKmW6UbjCasMbrZCQx53ajoYfc9adHfu7v7UMWYHZzKiPxxyT5hDVE",
  "key8": "oJKYrbzxUCwb3GHv4DwvEhhXGdhVSS8h6exsGhinySHU4k9SKLK6yzGAa6xL5kTYyuYBWQbdhx4miG3BEKa8KiY",
  "key9": "2R97cfmBu9wEQMCrV9YExAhhfHsw2aSERc8qMAH5AwVviTPW3hRsA5XMLCDnpSfchFUzRAJJTfwZjeRw827CE621",
  "key10": "5AgxvxwAkAvJLk2gGnhha9rNEzPeVfgdyB5UbnSPkURfeT32AaFaBy84S6kMgy3TLnLH5BtZUdmtdb6oJRoGvX8k",
  "key11": "3akwrakPsAk7mQE6bwu5ZZeqZ11gAJVmqE7RR3UCCqpvfioE18hjcJKdVVxMhW76KNgdWTvBQQHHwBgSSg874V9Y",
  "key12": "5SxZpwBwFt74ymV2cp11t15SXG95FUgFZPbdigYf4NCnUELf8bHDV3Hvn5hL6sSEZftwvZXkRMnuFKEmu3tREn6g",
  "key13": "4CL3q4cciqTwAN45aTcjh2yVNq4NUgyKzpF6aQ7nAPX6UxaYkoTkxYD8PRxif4M4z8RNSpGm3225fmWMriRUcYb1",
  "key14": "5A8Phewtsra1KwtsScGV6BhcvrZFUxqpCPyD95eVA875fcSQApEK9wvu6MP6YLUHDpsExTYKtazomfDea4dzBrL3",
  "key15": "2wcDnidGd2h3FE3NTA8C6xWADQFKEpHN2LJDR9T19aVT6CdM5a6wNjsMcT8om2U9M2fLtA6C86dAApGjALRUFjQx",
  "key16": "mtKgA6o3S8xoi8ej5VG39VXBC1z6u3bTBVir8rFdLH1YgzQRwnh72fKuEqAu6BmNyYQWRY2df9Hgahf7LvT4Vy2",
  "key17": "2s17A9XMSBxXKi7LEr7gknZRfvSusoDsMv3Gu1zXkgZwRny1TyyXtoHsbjw2QJ1BiYj1wYcjqZDsaE2iTqxsA9dY",
  "key18": "4S1g5VD7xxduaZbSvNWmtYbJtdhejbZjW4nXvQ4Du39vV2s564KEACQXYo1B6JA9gu4ogVrQkjr1BQh4NbmaegKW",
  "key19": "drSZLHZyXSnj3gm6VRdA51pjosSdEGb1LxCp4mU8eVpQk8NRRLYbJpZwAyyvEe2sygcq5KGZzS86QnwBXn1M4kk",
  "key20": "2n8JsaJDnZxPmDUzzbMdfGAy2aMMXSuwmhXtYpBnt3AT6qM6TavwDCp7xnPJjPSQ6DzRSS7yqwe8CYbU92yJiGbA",
  "key21": "gqQZyuvRRHKE5JocK1Q1pssJwF1xR67b7ik6fHEuuHAXesPLRAsqH8rM3ZbwutLaao1fdc9xSA2cGhyLSh2x7fy",
  "key22": "51to9ARMqSpvQb8WuyEapVYYubKbqwxU741sEVhU8oEAzoP4dWrwTLPKg2NabMA2oUgtV6KEZdUj3ANKcAKsTmv6",
  "key23": "XPwMSoAzvNwtaz8Cz8nC2RjLcJu4RqETpoV6JXzHkwjqYPgaFP8FtLN3NRW7vunuQBgwKFWP5mUdX9e8AhGqvQo",
  "key24": "5LWty5jQkvZgGzDx4nBLfcDKCUaaAsbo5Qppunnu3vwiWAhfV7X2UDf6AMrDnBJQNpDNTq3x8jyGbqwHvzwW5cJd",
  "key25": "5vx9E25eWLJBuv6ajdEvV5qM1mPPKM8XfDtYtVud9Kh6KGtNaxzSsemJ3vH617tGfC791xqwG8LcCxEodrRkp3ZQ",
  "key26": "2LXFShqRDcXLt4vdhZiDmJnwyV3ptPrfZ6yC36NvczAzFFWNJEx6uMdEcqBkwr85sYGbSHAde1yvHBubwsdmCKLB",
  "key27": "4gFBNdUgtY6et7TXGJozuHUZ1XB3JpW7zcKWQNuv3iGe41kVg3Aajip7G5LUktyNwP2BK7oq1Pwf4SQB9W5YX8Jt",
  "key28": "4LorMrtp8NxMW9pjXPw71WaCjUXLicnh6diRtjnCjjXeY5atGr3kXYDdR65VzM6szkbvU4HfPfHhxZy4E59p5gdf",
  "key29": "WMmAcMHAJZjqFtDHVBwVudBCE6VcPCcLY3bj1Ekc2ZWk2wKUnrr7ijdm7BBuVWYo3WNk7jxzjnYVNGWcXJvp8aV",
  "key30": "3zpyYBBKPLEzghFS2sjHmaHwvovHRrSnXnk54Aq9EKYTf6btrQry1PrbZH3o3dVsHksy4PCrieChKztBokze3VFx",
  "key31": "5hBT8QuTVU56SvPpuUtZJWXJyH5aXrK9882ccMvQvZCCduq7N7xNMTzRmrB7nAyHGav9uh8aH7hiTCE8JUoYjKj3",
  "key32": "j641M7ouEUeiYwTMg7XvWJ1YSj1eCh2ffvpn3jmS9Nbz1KxzAwGiwqVWdCeJ4RqxP2DycKm5KcqvVwWQaT9PbBP",
  "key33": "3pPUttLqdDRHeYFeZ4wXVFCpkZnuwmr9B11KtwbDqNjJqvnWP5Y3g332A6thSpmJq3x66uZD3KQYREkAR1zKRPDA",
  "key34": "5prRTp5teQTZbCwQpGaTP2jdMMnDzeStdHkQYo2GSn77viVUoHrwgwe9AucuggsDHmJzMFpzutoBNo3fH1YMWBU9",
  "key35": "5X9WdYMM8vUMrSCCrdLP1eQK6yM2UoZ2hAm2QXfnUB8v6m5f7pmUroxyXMu29x1PrSWjnud7Q7B1u5aVLyPv91Kq",
  "key36": "zSjR7cTKrYug3cxhGgm9v6Jg1QiRBaoCVvau7iaJsXN6W8f8CpGHXfP81m9F2eHN4AC2EubZJF2tYeXkCNUGVMc",
  "key37": "3HeZNdVjeZm4X8uhWVb1USjMtr6KVDSjEoTha3i1KpHCin4jHqBtn6mrKKsrQuqnUeoqyC4UFFg2MHErNDcyFbKt",
  "key38": "52PqJRM8Wr3sbSgDNPuhEahdNJ4yPJfbR5bhZZdMooLkGQrGkVYBwMqtzySzBN7yTL1DMe9S2MeHk43PdSN83aWq",
  "key39": "5QJZs6SRPA7pZkNzGwvFKqLkdtN6MouT5537RZJCNvUyDHNtpqFLFkDcvrNNruCQsowNdHhP1pCegqjpxic3LEje",
  "key40": "3xf8EGQDyBF4gcwmXsD2qPWAfP64nGX4YuDizNRnavdMJU7f2fCVfDXwEgTe3AePCd9EcrgagaxynMPZZVKwrYKB",
  "key41": "2uru4Pk43DKKz4cRz9JANd8HnMcEqM25XdpyQkjFhQ3KS3DDWCNwVawv2etRchBmaaR23kB2RbgUyteH6coGUue2"
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
