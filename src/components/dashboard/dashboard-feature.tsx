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
    "4eKnTpGGbEGBY1QXYjpQbe26b2oNeegTNrTQERnDB5aVXvaxVnWndyReVG2M1BpdRJtwdWDDRoExzGTuGMvU8oZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ckKrYYRC8WRpw7jYV5z95YS62doaJnQGUvfEWPNDjDHpDstFjNfQ6ZgjBKF37iC3rm7ur4jwsxzZX8RJJYg8hVp",
  "key1": "5ysqpyHEtZGs56jCpP8u1P7X6HXKRAriNwLARreHrCdF6RT2WqbU7YXgGjLFKTaQiUEdfo8ZCiV2sBego3jGCWSN",
  "key2": "Gruu1YYRSv6JURCBVQ5LgVVvqjrJFXUBHuaGXdNrNFrwLq9Cc4KNaZXdrUcQVa6Sg7hkJTue6YhHzWVsTufQAio",
  "key3": "4Be8KSkYyurpcXiLBHZqjswuGQqEAJKeD1Mzghd2L3dKpKHWUEFNT94Y8HNLpWksqgDifQAgX12fN1g4RvbiDYYc",
  "key4": "5AQZcemrWnxsXFNaUHkcjrm6wrQxxMeT2vyy2TwBRfbV6TaeLChhPmm7iaPd5fto7a9NuFq7ZJDs5jqbmrJLzXfY",
  "key5": "fgMnoEKrN2ivN1LW89GCwVhPV8ptiqYYp8JSP2ovoQsyVGPdpjcwSiRLWGTzZijEm4zV7zxVUDEpscEFfERSuua",
  "key6": "3pmubnNhKEa5vB24tJgvY2y9cUj83jEmGp9c6RfyML6njGj7w7wTnSozbHLqf27KVsEMhN41go2kY35UA1Q7HUEe",
  "key7": "5NizpgntceK9J2YJ4dgL9ssrHTdhYn1QTt5GNFy1kVu64MnvZq5FiKj83d39C7WadxM8n3TwvuP4bcBHebSRQJU7",
  "key8": "4dJ8KJXe1vBFjbMzxLneCBoFZkN3yv4TTt16Dpcyw2XFK3kfkb53AhzHpcUtmvR6xcwTHTR5ppanDPUaYuLCkWzn",
  "key9": "5mJ5xmmM2sVsmfGaPdqMVfZ6R2w2oE5cm41RBexsQaRNtCo6aPcKYLehaqew8zNwX7fXPVzimxEvub3dwC3LighD",
  "key10": "xyd7gwP43UNf6RJzUwu6cPemiWDd6dQNNm6ETWwo1MdnfFdVxdcJxFQtnk8J5q5sXGTX9ysZXtLbYtCLaJAqqm9",
  "key11": "2QAyy2RScy1KWNesXnvzpXSA7apMvaDxrmGLcsiNhiamgWxVEWLuBXxkUvD8HJr418WBbG9bsTwWqgqKusHGfdpw",
  "key12": "3tEdtBKnMuJySh2n4KMpZiiJDjTGM7PVadZhPXjShUxyJFCmRi463rqqzVhWhJTHcLjGEMEwSxzq4CBS8krmpC7",
  "key13": "637Qj8XKf76GVDSBpsTBxnLXzTa8jHZtbCszhBnoL7AcYoEfaPdG9zskbLbaS2kDay1CbLRmSSAWRQHGz5bnh4zJ",
  "key14": "37JH6n2hkfaeq6uXnfyRurrKrNyeaN2QTv9jAFrUEm9YGA5r77mFA4vuH6MMA5g9vAcdrVuRBZDE8gGHPZmgB5C1",
  "key15": "3rdvLcikq2eqz5QYzD2Lid8xSTaUqcPc4Y4gVLvm97UHNwLfCEw2m6WAGEDiuv8wavYGSbXDehUA3oUo9MsNSeGe",
  "key16": "zHVJkqVBUhAJBTJ7NNQ2KEGbzFFmJWnoQaNEsPyu3bDix1WK53cnSrRGkemBN8YLjxXYyAN6xws4XAfnmCtD6t3",
  "key17": "26LmvdUo9FJxUXfwNQUwCm1FnBt2SFoTFw2f9bvphuKdkTKtqbeUmkE2fryD6d8eEAF4evMGC8vcfEixfTU9BiHZ",
  "key18": "3XQux81kYg8nuhxtDMrEiNon7WCHcY6UVsHtUAw2KpAV2DinZaEm3D58zY9gai1qtmkYrkKeeV6GNnwZYkDxYsrB",
  "key19": "5shtRTvw1ygRdvcrNi5bnYbE7v3z13yNFbKDzfrc9QibtcBV1MCJAnuecABcu6cC2kFVnEcm1Uj9gxJxEuBJyFFR",
  "key20": "226JXXKc1umwxBGEBM3dzKCMNBuzn5LofR6MExj6i5ovv9yc6BPWz5cDAVncPFHmQmjoTkcvwDM3uzdamCS3wnXm",
  "key21": "3gd4DdwRhKCN1F3gWN98F6taR78aJDa72pYrwi5QpUZ99E5ikQ3DKvd6drmWHDXVMFosVxjj7ZVyqEP3kidmwQ3Q",
  "key22": "4Lnr8Lr1TyT9HGHEgiYC6TRuZ8qrCqVAGsT4CRi5D3apMe7ZYbEmicq2fLzcwDg51pivQyocrm1sbYVbfNGEbfEC",
  "key23": "43Fr2VG6Y17Hji2k3g564sN8TH8DbKGEw17gpyfNxmiXovYAzhPXWbWXmx5v9TEmeG5U1JuC549H9U7ecBVRWWf5",
  "key24": "4bk4Y5eUzTJv9V4cteB8KYTeVgezyXS9R7rwKda9HDzgUikXchdyc1QySPejjxKZd5ohrS3YoYah8iix6AVrHWfx",
  "key25": "3AhpENfTST4g8DY9nof33gUGZgUW7wxhuyc8afwGhz926YZDLhXMLZxidrGrhFEtoLv9F2q63Xw956sWew8JS2wQ",
  "key26": "2szHa2qtnBAJPeC9JLQuTHjueXuSok8oVX3W1h5nwCqC514YHq3fCUPmbZiWRMPSpcPNs5toPRwPXRcRBKaGKKF4",
  "key27": "5ZTf82sRDA2aDpZ3jy139oXiQiA8uAMSXvNZM4sHG9QZEHLMBeq9xhbq9ndyAHkXWbBDuxPBHPBzpzsjgKxJoQqW",
  "key28": "4by6bLZdoyeYRgvPp2PoCPFgR5ap9zPLBetMJ3eWJzxQAepULmnxhbYBR23Xx5ZxVHi1YKDyAcZ7rqkGTUmns25m",
  "key29": "pxDJGkVUbYXxp3ERzFJkQ65GPM4jNuUiRLT6BkphGYLuNUQiacZEmCXGHKuH5i1M1Z7kkvSU8LnVDbnd7HJkUPB",
  "key30": "4EC3e72of6JDqwS9p1adXE1NzKoxRUccppVz5WoDxSmjXKL5RrYjN3k7YbeVg4tr6xcGB4UJQ9jhmXNYY2eyPfyH",
  "key31": "3ZATiw3ctMWbD6vai77ARtGacA6A446q6oqZstzEXDxSLDiLaNu5EoKE7yPhFBDk6WHheFTH67BS7xtKvYpwuNQS",
  "key32": "469UmgfUwtf2LK3zzU6QEAGLg3Dw92XiNyVuS8uzUrum6kb2HHUqh16cazWEtJirXwWeBPSjAFdqK8qQHaoCKu3S",
  "key33": "4j3RvLw6P8oaeu1YpA1GXrhyvAD2t1uadF41MVa5yL6iBXEYrYhdneuRkXhzvNvGWwmS3aKKVVgDjSvCAnWzvnkw",
  "key34": "Gt3pUDebF3cRv4ia5BgE9TdVA6uWsDobVH3LXvgMNQrgKsWK5LcEkxNysWLQbwHAKQsFSGh5HG6c7aXwEDb7cdq",
  "key35": "3TfAX4dwKT9rKcRzMFAD87be2YvuBYEJaH43hH271eRGZyr3qvPEoNVYLQ2WNvQeLEf1o5LA4C6NMNyDLsFJwrNH",
  "key36": "4m6XeyxykS4uKeNjY4pAQBZdZVfj469N6v9ZDe1dSDKStRa7dNH7KXhh75XyFzTdwodW8pSVeH6Nx7ZJKK19Ps9T",
  "key37": "2nwHDTniJi7BWJdwiCnS5KES6sJ2tCRmBSB9JMg5XTa7o3t2T2ZCRaxnRNj3QaqNhRA8tSMn5Vy8UHbCYapZmEFG",
  "key38": "6U7emYrhGdJUAuqcH4SAJs5sAAe6TPFdSwNUrimn6LPRcKJ4SKjWW6DDTozqxPe1wumt13SSyysaFtAJm9nSGHL",
  "key39": "4wdVBnY22uRNGqLbUv6YgAokUTVMyg4Wq5QMtdmQRk1pjLRFMsR1zmAVYQVZGGRPkFdJZoU9D6v4xiaA5fQspyo1",
  "key40": "6y7rDnNRZsyNxzXPSq2iZHjwmjXboGy3zyMraqQButm5SF5m37UfuJC61pQTY79b5VhCUdDc3U3KQ5GzYAaFD4P",
  "key41": "4zL9JVf94AHsjE8oN5qVf5tUvDaJ4UEhnTizyZkdduXsiRSmrdqaY2c1TzcaEhhNJsBJ9ezE1yzQF7dKSKQueHWn",
  "key42": "5ae5nCTnjkCPMSKdmMcGK9oZCdKWGEZmiVY2im5DircQzKkkMSMF8qjBK3d5kFsVohf9P7N5VT222XQfS152bsVf",
  "key43": "5EQfyvjXUbnX2jHZ68vYiDaQFjdHEDp8psL4pmrCZgA7F4JEu9ruQ9He4EPXw3Ry7Q7mErqkeqPaminNTWvoPEFz",
  "key44": "651ow9F1JrF6t6mxaoacRqVRmMzZdTBQMtboWKQVCAnfki85cELci2g3ygXyr7WSMqh4R6WoDft8rUJBdmVFfjEv",
  "key45": "3Wz9UFy5zNHUPKdoHxoP9jY3tR9zBSndWd6BpB6WSHtjtLzrfB1LQokfAZYpuATp3zV86k3qGhgdc9gu9zo4veqS",
  "key46": "5aYkJQJvRiTs28WR7dSxV7FkVjTXZGwwvqoMdkXGkD9Nyt23YuCYKTBUKtrW6jra39vCd3C6LPrHjsxV5RdAg4Nx",
  "key47": "2sJNhh3dC71RPyAz32e5uBXyz335BQn1itAR1FUQSy5aSBX55iZp1vrw4mEVEYMZpE6qRCtyDHsWWxxUgZXsP7qS",
  "key48": "42HoAjjr1Mj4Tn2MZY2j56ESNkDHDqxh8J4SNgyUg1xneTfaSxFmnMye4TtaEsB3pMLMeLQ4n1KNRmroU9DMX3kU",
  "key49": "4Y8YBoyXn3GB3ebirYeeT4XuprdPzswgpMkQQAsQKWgDh9Kd5jTKV56M9KqnhxLv5BJFMAHu8yBtGCHwURaNr3cq"
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
