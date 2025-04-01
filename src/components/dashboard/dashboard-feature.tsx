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
    "fcDZELDws6VGG96jN4JEV29aKftyXkxvrgoJPv2FoqziR33g42Lu1fQJmogpUr3Frir1ByrW83kcZoaRUhQoBPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "318qsehrpWnR4fDZgkNHcQJCpij4TvhvoTXZqb4Zi5KwydtdesoKuvSr2priNaz8FZaN1sL5kQ4rusj4k4BFz8Rc",
  "key1": "2khXe1zDTm5iPcHHCo1ehi26vQTrkEUzcfhk2ocipFHXyjsek28zWJXS84WCJwyEQDxvruYGpzNHtckH8GBpr2ay",
  "key2": "h7pF6Mi8aH68zdMpDKSu1wkPsSP8Gew98b8xmeLaGwYBxECBWGYeJTQLcebcBydTwPobFfrwYRBNShZQLz2oPVm",
  "key3": "2YKHQxZE8waQe8LnT24wgCXDapXb9WYy6YXdoVwJM67UMuMaxT2MtZU6BXBx5zco8C5iRiC8fit8ajtrhs7ZFgJM",
  "key4": "34rrS6SnkLnvcbq6BEH8bFnyCMAooH5B3zYg9ZPUQncRHm8CijZHctQDuCbJVoLSiZw676vZ9hn3qQ2RCPvoeg3f",
  "key5": "5CUNWfJJtfr8NKCGQn3eZdAaAW8Eo7miUScTeXY8a9yrVV3KWDgQRrpjKAAtijgojSHAM5Gcxs16SfqVEs1iRYTF",
  "key6": "3J3bKSsS5tKxJMjpiqTz24m2vxU4u3EVQACvxv6BBT8fzr8cCPoVj8es4AcV7nqbJkyEhJMaviSy7hzRLqVeBTML",
  "key7": "2UCEag8HDiEHLGmYbRFmCh4G1ZvZhNtpWs5heGWzg27B6kddKhCPJae4XhUnT8zK2NuMWLoyLP2udReWKSGFMLSD",
  "key8": "2qSBdGDRfeMUz6xVc9vLt3Au6wpYfZbK9ZXCA9CJFRr4qRDja8e1jEx98k5GK1C83kgXzesKKk3U9cW8zr67Dhw4",
  "key9": "4cbmvQPb9myS4Wob96yhLv3SiCrjgD2x1L7c4Bws6xbFeos3i7qrToQYLMwzUCzH93V22LdaYJ8uzFPCa1PFyP3C",
  "key10": "4wbJjp2JRon66XpFQi3Rg5q4V3rbycrvmMuPnk5UJFBemu871LM3bsZB2pzs9WiVi216K4W4EFbJfwXJmFSAUu6s",
  "key11": "3ZzgpsFUgncziVBzzgzGJ8QV9cKG6hZfAa1Sd4waPBqxgz4hsijgogiNvZggd1mMba64UbmnEHjFd2yvW7r4ab8v",
  "key12": "4Xp9L4dLJAvQkmW9B43V42a8vBsb2EnSjY2eRsnmzvLduoh9VCGvmVW7XA7aa4zMyX8Y7ifzefV7yag25gSsGvU",
  "key13": "2CpHugn44HmGvZ2GM9aEjnWb1Kg8LMQNDnPj7RX3Pa2Rv78qo1twZZ1A4yWUATc7QVTZdR5RmuhQsN8dhthT6FXi",
  "key14": "5u7tD6tHJVDD3yUyTy5HPjYHPjjDE6VnYM3YADPLiiSMRsqgkyPhZM6vVaFUUYNroJv6PbXwYsBWToGT6XoXgw5o",
  "key15": "45CGde8p55iNBBD2pC3xdqRqy6RPjwYvG1o7rHERECw2Z23dvTGjEnyGQFsKLHzYWxvK3JoMWQ8eiwhs8juSMGYS",
  "key16": "2Gbs1eEtpjBZL1y8cJEgkN2heDk4bA7VRAL1DrCyHg16UFH3b7rvf8tpoUxhipyKx61RMmW1Cajy4bhRFXAyr42Z",
  "key17": "5ifKs3dLjfeVb43h4dGgf8y2igygEoeg63F4KczT7F3HS5j4oQ4mAMcVZK1UBeAoWfFxHs5LKghRgzyBvEms6Jnp",
  "key18": "3bVqaV6dyT2UYCtL8XZTa5scBJB465PkVHHtt9ZshwmcE8ZW6iAzYabpidyy5j3Jpba145M3mtaxrJMJYfBj2kmo",
  "key19": "ZL5qJsmwti1ZXzCfH5aZNTinVF9MfAZ9nFdhmvbkS9tZ2xybCRTBUZm3RRskrGApPHGmuLM7rscLUQSrLCeGg77",
  "key20": "5WpM2w2rVGsWgZfBNbWffGL6kuXmahYj2fhbY1MfgYwRFuref5Bia1ac3tRL45k6AvZDVUZHjq1cpXdoRNdpDzTA",
  "key21": "4tZCjoWV5gNMS2oBgDGPcCkp7hQrpTcrCCitRPc5BSvkV19DZFHgXcz9JfKjQfBG2cZ6Wxr1A9Sauz6CY6iYCSBx",
  "key22": "29LGzf3ijZKZgc9f9n4XHYnYHoVgqZVNZwcxL47cQuvCFzHfze3aJdrANowTNjmFvzKReBsLTYh8ThhRK8BHgEaV",
  "key23": "51TqSVBQhQczQQ2zU2tGjjmomkqrhutyvAtAjwmLu85wwgRNtd48hR6ZzrmBYnXJJwPixLW6NHtmnRbn7imoiWxC",
  "key24": "vo1yYacXVaPWXGzx8DsBs7fbPAYD6Nx6x9SaKEcH6Jw2cqm6aajiaqhAztTyi9cN8TSz9WhcTti1UabkeKewqZY",
  "key25": "4LGj7Q7ZBvaMxVDpnK416xZkTrGjdWYD5exA4gkXfhCXAUGqbK4GoVv99ehow5qC1qFGfgU4MANL4ajJAWds2gcj",
  "key26": "5BQDjd7LRTZqxpWc9e2SAC1fsbFiud4XCsPp2K8DpzrrekyP857LKVUV79QTWtCGyobVAmCCDuh63JbK8FNNez5B",
  "key27": "3BUJLwBUgY8SV64S9DjhCenmuev4E1PC2EofB9UU4b8j9NPRTWck9WTUmh3C1pEiX6PCXFGUoxzymvMC6qniBCfh",
  "key28": "2GkhzR9cRwygFCzF7qhxABhvGjLURMbAT8kxAwvp9FzrcN8fz82cYGe9emRAsCd1RYjTSLz73ku71q7qt1aS2znv",
  "key29": "3evT4vmypYLYVNqUx9jxCLaymfmNkJRT14w9ua7mThm56y9w3s5ZYApMf27vXnwG7doPyVvhf2rn8NUcksQRvQa5",
  "key30": "4tBcsAoKokJXmaqCWWUPaFeqUfRyu7R1Z3kYTzBrGog8CCZcS4WjrehudDjGcVNCFSDm9tKNNSL6ohf4giRioqYC",
  "key31": "2n6jtgkFW3ZgJMDNHZCShTxdADFcKnanQeSBJwqFU9WMmv5DgUYTBUtjh4YypjrCriVSBcyxUPmxjU8HGhi4bzRo",
  "key32": "QnDHxSZnm8tCh9KA95tq26tGuoWp1T1yVKkmF7qH3HVF1RYptRaxYNPr7rwcfmDjgjzLqHMAAph5mwNBFqGM3Qi",
  "key33": "4AmwFhz3Vh3L5W7fkSKJPeV5dbZRGbvBhLQXojgwXjTyetv7JaBukvjVxNfEJeDSyQbXVJBHLTdQ2sHD6pNHvLZo",
  "key34": "2hTYVAZApEGxRDWPffTNQUJHa89VchWTB6yyuvTkRNK9SFtGn9aSzyjMfwd4pDKkNWXxskamNarFkjkAtmJPhY8m",
  "key35": "4jnRZxBYzzqw7A8JZNUjBYto4koHRGwcZTukgai1DEUYZ9TGWJ2fHd1qk2Pz8ue3x9Qo3iVkULcZPzFWKcWGJDde",
  "key36": "4DNMnn9R915ADK7xXbiYsdwgc9gbFhV5eFVLXxC4mTe2s1crx5KpVWhPkfyitZ78QHwKsJbtrCqf39TABhN5NseB",
  "key37": "fdbuCHaV8v565apFjueGdkri1GZZfAehEe4vJRaiWW7dWGTjwo1GHRLFWfmETE6RFJ8qEVgqPRJJWFY1BNQkA7i",
  "key38": "HTumL5vCp7KauxFm4Lk7VwZE9ujpBj2Bg2o8YoW89mGx9Znt6ysnMNg1zqAkKNa5qnHRoKj5iZbhxkcacTvfqJR",
  "key39": "5otzKnSvzEbigtrCvCi5236ze58JL7nujLZy5Hp6XGyYMELfUQBzNYaM5jGqCBFybh24ihVSw5rWHcpfT1RvmNHg",
  "key40": "2GFBUkB7V3zDKRPY5TWKXLPLRaGz91a9AFAyoC9cT3SXWxjWmJ2CKg51qcpZBD6MQf7LmLWK1kiksMHkZgVRezA9",
  "key41": "kRSUXhAFtX8EcFVYB5a5C2NV7QrwWh4XfhuRegT4mtkVksaiPtR91CHXCEJWsVv6epy7A4Q1Dso9gq1hhDxMAGF",
  "key42": "4yknsoF7MKvztyiFMjBLmwEHVFU2opKUTwqQDNHmtCtLgD5pHWTYq69hkPKsA6FXyRHiLitD273gR66xMAk3SCec",
  "key43": "2LFav8GZxNvYbNVnf79yTse3cdi5ZN3J4o7wqdkAEDwLSiunw6LtMruHpouj9k2Ldjryu5Zff1Vi1DmecYWwpr87",
  "key44": "y8AkRNnskP9GuDnHdizwzX91xMP6cRvmYhg6ZJ9P1g1pykJ4MBHDjSzyRtGLxKJMU2HN7xqTFLDcxtrWubLnFLY",
  "key45": "61opizzCzkdojhWxKyfx4iFjYqbFWDrjJR2QBDGWmWf3aQwKDf4nj5B1doWK4XDgDGugKGfjDZpYhhqXjrLoJcCG",
  "key46": "527hXK2ibM5PP8R4ZQ9sBBKTXMzQjQk9bbbYssQftDDRHoP77C67VhsDxKkAKdm3fw8yGiu5PURct1PMKDNAP1oo",
  "key47": "4u3DwsYHzoPMkd4z8smVs2bazV2TkSxSbb78rt8U5p7dR2TUasgy7Z8h21HMfN5bjifBW3DyekqDctHV1EGvLhNH",
  "key48": "65qQ49xvYQi3oCKszmAFpo7LsxkSf9pWqG7bTcmVWfAsZoAZ6yZnEV6WTt8S7ebwCdjgUA7FJFftHGicm8PDfEpL",
  "key49": "3BDxie1tehyMa81A26kSagVaPik6qesfG9VvxnYdRFqeERD8N134DQj1AbXMYF3zKfeycpQSsAsVMVWx6eZRLNVs"
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
