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
    "5NboX9w4bLZDUYce5ERwbrTdk4MChTSUoPuMvCtv2hMJf8tnZ6qfCSDumnyXszieaXSjE3dB1EtFPpQcek2xbpac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RkhXqPNnhR9TztAC5f7cHbQirts4HrvP4R4hDno3XJfbmDCoY5GfGtFuF3KSdBXNaYeaCZAnFxrrcpCoHc86Vn2",
  "key1": "deznxTr8aTD5zHhh3V8juFYvxpn8jssnVBb4ujJGtdbhgv7VAcFEXAJQEfJSeqbukvffUH5TyMpvcRr9GDjTHy9",
  "key2": "4YWHJHm5va8nAyHazbFjHdGfMh7oEmvFkHBgpHySjLRVRKzMB5yhF9p7ejP8GwST9hUpTYijDEf1CNKB1FJBNUoo",
  "key3": "tkq1PE3in94VVfH8bQikK42oTeLWTR9HPQ5kfdBn3i1iTBf5gSt2VDv7FFSqho2NAQfXCRJoDNzw3K8aseJYt2o",
  "key4": "2cSEjusgpzkPFkEwGD2TMkByeFxiJtAGBLVevoMpuRzXLcxHnUthZvGVq6cSZAW5S4ELWwwKk2ANdKAgqKYzZJTd",
  "key5": "5jJ3J7S8crdrLUBM8CpiQaG5Qa8Su254G1s6Y48JeAT9fEqhRV6d94VATdn8gV9PxCSm5BsqA7zmDBaRo4D6YGRL",
  "key6": "3qio3YdBPQkKiYKxtoHvLTa3LiKgqgUE4ZCXGPMdkxyn1sZYiCXQLY7NNNnSmb7AgiojzQ3oFTKaH9PKbpQSmY2P",
  "key7": "34fCRzdYuMC14wM5BVinCSj7XJq5QPiV2Yxo8UEDs1LeWez5dZoUi612FNkjzCFmDZqb1rRH8CQKcHMgBGrhw4p7",
  "key8": "5N4Qoua2X9SKWGYaQA41ckBmU6npdpMyVzX24DgPhNWLEv4BTTDwbg3AkWmNoofx47SaSmzMkpY8EVZpa1jMJRGn",
  "key9": "2bimSk16qYcGoB5LvKGNkSA3dASQBgDn5RHWXbxQWYksmR6QF8xfyh6UtrRm4HjpMX4v478QHnXGZFSyn6ebZBR9",
  "key10": "5KzWP6sAbroLehhz5Qg58HDutv2QdnPKDu94c8WmWuqEn4AeiLhvTje4wVgjjvCzuEAH8V6pRJKMTSN5Eb8c3HM6",
  "key11": "ohQjmZ4c5bYo3B1id73W5V4Ca9HvHeXTnhshHhY38cp6N7ZBK3MvWGaTsW8aX2QzTGBbzUSkMg7fxhtVkV3ACXz",
  "key12": "3dzwVWHeC2h2XYL33SR3KnxpeLygpcgd9RN8HdhWwXQxavYaHMmuNsVR7pBZbWGiEDrjF7ZrWKSrXk1HpVkoyuvE",
  "key13": "3WCVQV7gxCxv1zeBS9bojqomM3UvwvsmHQKGTxNG9HGRc6iJjBpMEfN3Pj3KPvgMfATgKzYrMNmxmDHBDUdZfWch",
  "key14": "oYEegX3TJUs4Znj7u8ZqFCT1yfnvsJLnBUNwSGrUM2Ez7eDdqcEQ3tJDaFmzKfSX9SgbZsyVnrZMNY7tms7SFaB",
  "key15": "gx45SXjT8bds4y13qu64wCvg67eif5C9Ku8uCuALjVpdPHf7D1PYnkZURonxfsLutuGh9P857f5aA9RS2XSN2wR",
  "key16": "DtwdqZTHcMmWMP18GxoPUBMaAPnJ9R3C6NWWJJNTwu1DzFdEQDjqaN4SH9Gg3JA6r5hLGsUchmNks7VWCe5iB5E",
  "key17": "5wrN9LkBd9eeMJHbBnHEUW29KeBLBwp9TZRYV6EsjWB38PCxN4km7VpQpmwQrS9kkWfuz1WqutbQH66qhcUz7di",
  "key18": "3wQXGoXNZ99yajNzwPb2rXBBNLFgJWoP4EBuyzrerBdPz8eaCzWTeoMQHska9VSSi1syfqwu7D3jrukXzxPaTaXo",
  "key19": "2Xpx2WHwb23Xs3mfbRuaKEHcNXzkYc18ba82ux8y7CLLmZEHe6oZc9o4gA4iNCV1ybPwbhE9rTyELrho239Wj6jq",
  "key20": "2XrpsEA1cA5BC6wsAhXRm1tgnASF84iKGSpXYpz6RK8QVBPXbfAw5NKHujqB79R2oyTvNQbDbLLa9UuSiDb2qd9P",
  "key21": "5E7PGL4kYtb49EoaSgzYyzdQkwvAGgHE1nez8ws3xbPiWKHZYar1UHuJRWngCDjdvtS36fE6P3WF3TyPv7ZqiZk7",
  "key22": "3mjHLwe9gjSZxF5kQ4iZG49UgJCCJYqLneai7kGiny83EopesDi7vhNexkcs2dwixwPvrMszTEPEJ31RCfqUTK7Y",
  "key23": "5q3CmAMELWXxS4Aefk5PymcjN2h6UwPsJAajvn3rMQgJY2HuffKPWXueZpp8UsYkQg8tBkk5aAB8653jpjBiVcHp",
  "key24": "5KbYNQmAdy5edeZvtpJpP8tYNQn53Rm8Q7s3iibEopGzp935KrxQ7pFzNUDn8NziWN5g8BBwFUXVqk4fCDH1eT8Z",
  "key25": "3ZVVCUoVKuQGfjbaeTRxHeiKSg31Jej9CxyhNgM4CYHyZ83AQ9DNbboaLJ2CqHBvDb5X5Nns2MyRXJ7fu9gTf3Ek",
  "key26": "3HhMmpBsn4XdEcgspfEvzUpQA5DC71rwfthdr1FFVPHgnzSJpTUvxmWz9g9zBFCbLnQ1x643ka2JrMqzggxNLnkN",
  "key27": "61H8sNxzZMQ7cka8y8ro1W7bigoDdpBpdw5r1PoVisGkgD9Wif7u1NiSZy1pWDYxRKkpW56m2VjEgVXi1EqWPzfY",
  "key28": "4hGTDdN9ypLE6UsDKu6QnU3ysQVrJfN1679LWNNLtrKGyki3rTtVe9wybkinuYbVHG4gomSEHLia9ufLW3GgDQxM",
  "key29": "5sqkFkHkcWNtvSnsvM64odiQNmmvfXyuStodpmt6Yzz11xVhMVDNoDFZWXCaMypM3uyhE9vJYnitezKw7qbWiPXa",
  "key30": "DyFqA789mx1Q4yzW1w4c6EWSZuwxionk2RR7irDygSgbW8WEh5fPCz81ZPvkFqjQJbVhv8qWz4wKGBh74RxiY72",
  "key31": "WPFJtU7MhdAHQspbLQMSxjXMXp2WidiWgGQUsyLAFBaUaPeo6vXSKNfSAAYCjBGMmPqa71b5fxQWHpvWpNYituX",
  "key32": "4BqYVXK5Yggzx8ZXcffgvirtzi6ezwhj348xL49gLXi29v72HfNmdQYS6aEsFLn7ehtK2ZuBNPXjNKWoc6dQqyJ4",
  "key33": "42dt7Y1uZsNAzCm2pH95aX5nXN7MuLNG2bTUhFduDET2tzVuNXpkxdKbYoBP2TKeSwP68S7WRDNKmuu23KoiKd3P",
  "key34": "4gzeFfDpdSZLoQnqSehbfzyayg4JFaiyRD1PyfGe1Z1UUSY9orzYPmMPxTrvAQ1roh9NXozCBTvxAy3x7FGEoDjU",
  "key35": "4L7rmBkUutWsVVAcMhyYqwNKVCwztJoxfQ3KnKgvAumn5jFBfx1EdCzzWa8Sd5ERdeWvcEtx1mbt1d88B1qUc8Fd",
  "key36": "2KeBR3tcu9pSdK2JkNb4GVrmqCunxQ7HvXTNFJnGsHwc4Vriv4Kqpy1VQBdP4KK5kF3YHg99VvimvtsTrE7mj2fh",
  "key37": "dk6GDohtNjCJtDcsax9ipSvUEQjLjTAS7264QonD4reKc44bzsYdD94Wnnq9jQRL6y5d3itEfrR62z7LzN72MoB",
  "key38": "wNGRG4u3coscSHZ5ai4xFK2HLcAzHdsW4ZpQTW8wpXpaqzyDY4ce6ia7qH6Zb3MLjD4DyU6oDXTmDWbaHTtxKZq",
  "key39": "5EHrysuCfAUtnNW9t1Br168NNatFGkAzKSrfcR52mYZoTUNG3WVg39XdH4wscS6Fvq4rqwu3EQXWwQ2tZEzQtWhJ",
  "key40": "5LQvWbe1TvVXqDfPkvu9Mb5sxNB2wRRtaQrPt6uPMwz4LBeU7TjEACo2iWUgt9q6kHkQKTE1YvVuCvUEfeZs9uPh",
  "key41": "57gBaYFhBFLoZUH4QNrAjfTT6LLgfRobtzhuymxiG6Ai2NjxLtTLMECPoe7QzFHLjTVrAtPfNCXPWRRzyMDERa1e",
  "key42": "3X7pVCKBZt9rizFzL9CT2AHbv1yXTsT5iDe18CZ5enviXRumv36NjDFJqd3EMdJ6AuFRrpiHFAvxCRXtYNUV19ZX",
  "key43": "3GmbdLjYWSrMs36vgwv3XorzYtVLiXiNnxP8btW3skshZfS2oQcBb2BjZdgyP9ZjNHscK1tb523KSfTZj2Pftz6K",
  "key44": "5txVeseNS46QmdSSAS3t8ReBu8fatgmDyXF133f9YsonDM2vvEYPDVkct7BvEe3EhqcfAQfUyEBbtsk8QXnFdk1B",
  "key45": "34S79sqSq8x9ujTmsxaKvqo5x6kfp8J25PXQdiTR63vhL4NLG8FkcoSykSraCzJoYPzUfZB25S4kpnZtPkNuhEHv",
  "key46": "39Ahpn9wDRsMZ81ftmBQhtwwkFKLspoU8PzekDLguTQFFdq6NHPJXw5LX8JtykUZeeZvLiGSg7BHzSkruWzVy8Eq",
  "key47": "3x6YE4PBqh5HKs7S1LkVKuL6ZikAkhbh3uNRMs5u6J6rGQSBjr2PZXhJwCybsH5CMHuNveMhTsVF2cT8vqrVGxjZ"
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
