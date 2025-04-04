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
    "YD9HSipzcBN8ZC1vfxypw7inuvynjo8txhYmLPowe3zKfk9XmktHw55QPS9TwdxFULPC4uZa2uaQykzhUFZmH4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LnWMSzXR6m7YVD8Xgb8yYwu8DRmSYcQLuYYt3uxh3ZXyP97GMhKUy6o5RTA39WTHLgb9DHcjNZjgubgbTT7pAzf",
  "key1": "3XYPJdseZTT8qpSGWJunF2XwfeZYCmNFBUD2KxLJgyrvVXikqDjs7uSQk94L3RU4AQTHSrKxSJ93jTeA4X78Q6Qr",
  "key2": "49LYsPtymwu4owJkvmeAuNE36rgYjaU5RECzCiQfNDcX65TPFguv64Et2eVA9kLUGLbTA3t4TT8euiP6rxECuuu4",
  "key3": "4mraChDjNzMA7XMo9jH1RzJSkmaKhr1dnRXaaVVbfsDoo8Y6KbDSszNDdMQfveQbF55HQ4Ziufdv9euoBv2y5tAv",
  "key4": "4KRpaozEkPEW41B9Rp1jz6WubyQPYi21oycwJbvcjSF336tSWVKq3rxQ4XWpbpY7iNfwhPK5EvjLbCVr6kXVNb6u",
  "key5": "5r7ES49pysuAGibD9R7qwZavV9pAqpM4SPrMiaJ7W8dAhCQkC9Fwrhp5yXoqztFcdiLWKkMdzr1vuL1DgdkEAsqC",
  "key6": "ZLp1gf8q5ZDjwwZmKZN6ibJpkjeDFxxjUaskx19Tgg5VjZEcD8GXcXHgrXqJbuX4uyndWVGPMJpEXNYXbGV7cSq",
  "key7": "5z95wpxCWgB98TRUBSmoDFC6bmBcgbwGbQJM3pzuUw5xuvFS4qQ1LnsT4qajEDFoxwLYkNp8JRDiYeF4sPEWy42C",
  "key8": "35ngaV9s6B9UdP98gPkGm6AxrN6WeBLFCGHy5grLFg4Q33pXizcoqS5L4rZqrQR4kDVEDx9yariJBd6Ae4531iF1",
  "key9": "2oSd7QNdYXtds4vZQ3VFS5ZxMANcv4bJbYi9Aa2Go75ojyB8xeZKYi7S1iaEhFB8DauzZLzx6zdodDe7gjoL2fve",
  "key10": "4j5qpXZjryvjeKz2KjSdZfPLzivmAWJCygqUFQB8bGeJcuhuc3BhXutJJtc6kjQVnrvL5FhHwznT4ob1MKP4j8Cb",
  "key11": "4FZk7uwLK378XqdhHzAYHM5E3Meba3yQwcCoTTYKq9EcWfy42WNdU1rDNnpQJgdFECZB7QMH2QKLrPYRdCJDzP5R",
  "key12": "3LzzdtNGTq7kiSrgYw7fuxL4sj8gDctKzyowZL47nat8iAnVJe92pgHgb6nzcQaHqzxYq6HC3AaYie6du7kXx6fp",
  "key13": "4B17PvvW2EJ7ackeFe2dgYLTMbCoqpwSJB5sf73NJXT1K34FHDNa2uKfAyBaEkvi9LVFZAbD3GnoPHGHvx8uvrwb",
  "key14": "2Hiforrm2HC3dk8GCAU6wnb8qtNk2s41qPMMtFg54WWS94U23gPPou7zfrD94h7uMzmG8pwVpqDxKyQRbJDbTa6x",
  "key15": "3c6z28iEfZ99DsdPWE3UrkTfwaJzPYnYVGGTwfVYpT6Bk1CmmUYZhRaS75iJfG1n7X5angqjZ9yYxL2tJZfR5Vob",
  "key16": "2SRdfPVdwhihotLSfSUhnL8rHbYLBWJEwxsS9PfwRE7M6ANCPcwnVuj2GF7qVH7a21XyR9PNu3kWyGFxyyamj3HW",
  "key17": "wTL8aAUmq3C67YB4RLGankj5omGtKs4TKNGmjnVpgEuDeTa53X3zMcMTfkwuUUhbNnFAvpGDsvSxp9525itMH7K",
  "key18": "2sizv927FbidJwmoJnGLzYh4yCqfYAiXUGD2xN6v1DRPdQQBLnGdfesemx2pUezvmx5uVENwp9qe1uzppLjyuGsX",
  "key19": "4jDw9MqR7vzucLtxNSyTBhNhen7gHuHR3WcbuhBihKhYDMWJG5boP4mT3RvHg2ExHeYohUZHUhXVwf22T34gKrPa",
  "key20": "4KMHYb2tvav6zVeQHM9ePBU43CruCUvtWvbEGQniimiFRKMZYLvAXxQShevJ33kefH2oWFxUmcihcuoiPjmaFpHU",
  "key21": "5MaRQe1ntMCJm7MZ9h9XPpq3p5qmJyidG2oLHy7srKGVybgwj5FppASxyxq9zexhS5GeCkRmXHedjrwpKBPdk9d5",
  "key22": "41dYPz2VSZSxmt1xbwA6rkS7iMJ6EcZ19SndLdjeoxGo374nZR6UH8K5hs9k9DZAdTwbifEc64A7JHd6Qn7HGBUh",
  "key23": "33cU7UmhVrks2BEnbMNDQTiVttZxwNHDrCwaHKe2BZkVdvuD2SUmDUdeJhT7VJrN6EkEvKvp2YAQ2WrSLR5QbX4w",
  "key24": "QnCD2nakbquqcBTRkhvgdeLDccy2zvSZrBstjMgEAJHqhhnFcrYzVh5DAFdpNNjFQg5bEHxBtXMSGbEzxfxwEUi",
  "key25": "5ywW8nzWmiT41oEtZQJa3vozeFLjiAQxjW3Aj9DDSvLXv6zp5Lq5dhsh7khRVyfKrhuR3v48pJ4T9VmtsiF1gyVH",
  "key26": "TBya8urAV9mrqg1oQvcwiKa6GjddQ7ieRQ73e57iERvMT2yQoKUBCGr8aQmWeZaFhp6UrrCHnGyi6imhYdPK4m2",
  "key27": "2sSZBuAcphmsyyh7pVezB4Yw5vUaTZtwAaooMmTw3KChox4yv8FzrekwnKQTcuPZcpnGKayj31zRmk38crALSEtq",
  "key28": "5Puun6wQM3D3NvjLEU1YYG11J7UnwKAm8CxVjy82oRXcuKVjvgRDyfo1GjEANan9tQCHXjWynitKA7zNxyATtBDR",
  "key29": "itRxKnfYQvVpnqQW83qny56vhc6PDk3eoriz8yvzkhd7JGXBYmg6sHjwNhjsYoLGDpNyBYN76B9dkb34xmb7cDv",
  "key30": "ijBwQoWiPai58fyfwhuNgfy26V8Rh8pdz5AaMFKuGnQzYi42hLiWhYs1TebnbDBspvW6KoTREJk3MbHN7h2GZx9",
  "key31": "2Lje9d4cnj5jALvTtp3WBgYdWmiaretyhD8eGVeKKcf1uJNBdaNT5Gyf4tS7FZ6DeGsK7x1fRgnWrJgam7Ngo12Q",
  "key32": "4sCgwVKnjEoYQKXSQ6cuNE4FBajdx2L3teket1KsGPpBwKQU4MkGJqh6NjFg8g37ggNN4SYdtvf3M5d9ZH15ZRnD",
  "key33": "4NuVaaLgryrjzY2N6rVBcxaKYVnJJ6gvAVHqxXz8ULiZ5QPiaodwyZHSHFiF6kAjYxFyuFLDzCh3e99cjh8gHY2M",
  "key34": "5NBwrR6nX3mCrKfPHMtPEHhzTX5JPyrCraZTr8dJh3XR48kj74zdGKpmWhqgn8BrWW3iqW4jyro4d5SG1QkPLWx5",
  "key35": "5pmuzodfRsuDKeP6Ei6aKiwmXi2GARfxPHneu698WRjijm2MJdxuj3AZEAgLjwHkzJjP63ZB9EHCcLjXCRviy28M",
  "key36": "5kU6xgyVZjMP9gSoqnhWDhqP8UuXf65r6KhAU2P7Uk3jxp7eWhiHwNAxq6ApXpvxVGzKSujsgx7UK4FoeMzoHQzv",
  "key37": "3TL6Lq5ehZ5A2GaKybiXhjhEUNPQSqetyh89wwqUKu4kMEogJrodcCEgC1rCkGCeaMYvW6ykW96vam3333mbNkSa",
  "key38": "4ged6agZguJWKjKFPbtBuKeXwDYzR3h5vJigrk7yLC7ZkRANfBnjGk4g8hUiQz4pQEttmSo55Cw837342rZ1PJf5",
  "key39": "4NoN92PuWUtvPuWXJ1miXairFN115SKUyCEa16x5et9zCN4pjhW6N8Xs4vv3cUsUWMjgRDbaM9YzgpVnrt9iavKm",
  "key40": "u5rW7toeGimeJ8qgFCN3sgM3Ef4fv3oyWsnzLyNWN1KcymuPazQ9CidCqb7kEx1Et3Z1y7JZwPNbqUigeRMH9FU",
  "key41": "29WghF3bnFKHmB73H48CWVjiMdG8jvdyBat4xweNSCLLsYC5oPLygqQeEiHA19QP7xzAgBo6Ggt1W9ij1QBtvbpK",
  "key42": "4xNBPakBCAyUqhAabQA7sqoyH58zxXTqRpYZUU9NPdkM6d3c3cDBZt2ghF85eheujaToG3btz9MYjmw1z9hxrhNF",
  "key43": "3Z39wuUKyxP7RQmZ1F49iZA5x2ZFaJ6hUsvrQVP5zmhccAGLqsveiskZXg6UYnK5kDySCpwzwvfv5x1kLfs2hhfs",
  "key44": "2rGakYKGDd6HJBicHTRjN88qdVFz7cpu8qbEver2qozHTDKMNCoBUaJgwXUnS6PJS6aV3KxMsBNgATT3hKqckayZ",
  "key45": "2kfgf2hAEi8M29xQtNjpDb99n3rfPmmH6FJFLFo8yiLcrFLRgCM5M6sGSTCnRvrH1d6M4eKjJ8LBj2y9udta7p1E",
  "key46": "k7X5HLYedfKQnKKAnPow6ydRB2a8cPzyd3uXwGTFBmFXvQppgx7CCCNvhb5vnoQ8Rfk8DrWxPDcQjePAnAMXPWu",
  "key47": "2mFvLS34gjqH3ff7gcJgqNahz3q5b43e3usVLhKh3WoVPQdhkubRKVqmZBSJATzywcdrozaLDjpwLB6CFur4GHQ5",
  "key48": "5SSYbeTBe2G9Uj3ZbyZLJLHMjLFHJjEKa5daDi1YrBoTkAUTmAPDVReSZZJQ3pXdW6xojHarXQpb5ghJ2Yx9GRDG",
  "key49": "3pn3U7carddZdXzZ5icAUCmNG5uwKSsLVsxuW7uqEGMK1r45xm5eciTGKqgCUyZzEy2mpSaSTozJVXfavAapF2zp"
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
