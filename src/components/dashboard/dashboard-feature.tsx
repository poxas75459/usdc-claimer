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
    "4T5VF1veqkptSc4RRb4YVYKkWgbEeps2thfByQEyykvEKVyrYhXAPxane31iQeXH3waQAZm7ENVjoCPvNykF3DdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HpxTcSwqzd7Joi2wNUgMuU8D7Tnqo3DzLUzMydoiN55BbeZ2x6Pdu5EiTJ7c6rQjJTuJvktrJBqd9j6WyrbsVAc",
  "key1": "5sRmzNLQeNttnfydFAkr2ZvuwkPJTZYWGTKPk2HxHdZ2uvGaaf4XTrd45aWcLdmDBTNX7YdoqMjAJcXPTz6RkUe6",
  "key2": "5fhZRaoTjPcP33xZEjiNsBHx8pzS6pNettYaZTzwc2whxjZimMqqxjARDMcjExA8jJoRrzt2h4gEeDmUBSvAwyhb",
  "key3": "2Fhch5To4z7sZP1C5ShX37TxmKubcNd31PAXJ5AfeXx1jDeAfJ6v4qRHksMsQGjWWkQGcL7dfn3ruyNBTs2pq69e",
  "key4": "3RXP9APhhepzXPpCTzfbPjZPEcfGtF1FqzsFMEDcZ2ZumWB38AJToPU7kPmEnK2HJKSBh4BbCwaFwYTAj39VqiCo",
  "key5": "2ShJW7M4gpCxtf4TtUke5yEZjq23tmNcHqkLCRp1djULxC1hw6dr2hrTZtoQWVPt8w77bKpRRkmWtJeJoTNQxX6r",
  "key6": "5A1p95UhpL3X9hV6MRzLxBZLQJbL7ar71HMuAgnQVgXjMTjMcCSnvdsdcLhTvoG3zQx47Yn9RRxbVq7SHhFoWn3e",
  "key7": "2VM7JnmWsgzkZi3aDaFSCt5ehSdgJh1pDgVu5GthUQnUH59e1v6cgWgdbDn1vLBqd7MH2YEUhWe7nfCszG4HGdmt",
  "key8": "27pu7SbvBh2FpzSaCSU3tQfpQWtHMeMqbFdjK7L2xgPPAF3hj5CxZTo99MtUhW8EgNBiuQ4CtBy1XSzGLUXduhGp",
  "key9": "3Q7CbTnExGgDcpJimMRpBgufMJd1h8au2io89hxdvghdmBy7ALnBurZWDBxzkrMQzvZordjdCvabd4UP2WzVqo5M",
  "key10": "5PisdpjfZPX9XxxkH79pHV5Jg1qvksRcT6zidwgMREcR3scfR2YGySNaGX6oAmspCJB4Jixws5mGS2j4pf9y5vKu",
  "key11": "2vVkeAS2zYs3LG9aXNgfxKFgP9qus55cpEPEmFo6uorHRqKyE6Ldu1hQ3KAq7e7LZiYUDLCfc41rkDCz6g9Vcgvv",
  "key12": "nvLZXsvffFiFsxeZwV3rsQEXzqmvovycvNPfkF2toAHXoY4qpyQxWAxTYK3GoC9V2qEC3vUyMsBcmXsewrqGJyZ",
  "key13": "2v7dR2xtYcTbxvPbyKnFes6tDNQP2bEk7KPmDQon8fRStkgMr8kP5o3owZY46emqKhHFyAKvcECanW2M5RBwnGB9",
  "key14": "58UQkj6EL57kcCm84N2GaNhU23WdBMqM6BW4MHHP5jThRQxEkbMczvJG1uBuZLC6o3d7tWsqTayo3Phtdsk2cXus",
  "key15": "24bUp34Rc7MYZVkHfirNm5fTAk2apiDFs4VQTnLTVsF6TRPp5GZkTX9j299fXvfeLkswNnUGL4w4BraXyNCGWfkc",
  "key16": "4oj3JqaoMN9pQC7UzN7gJFhg2fQ5jCmsjdqkJfKLtGbnR3Sazuy5Xx6rLahDGVe3ovGtr6M7SU58mKHNi9P2sHRW",
  "key17": "sR17sUBHWAAzuXnsWwHCK5joVSq4GJ9X6wWh3bvfdRJZ4SFYufqawYzJqiUyaFsH4G5GHCA1ZzyHXRXcpsY4WKV",
  "key18": "4mvpNYoFo4PeShWfV6ovpoNSWrRTZpCG86aEeYLv9AoFZzF8GbUpajRmNZXHb89atfJGe6seuh7mKrbUeJNexxhs",
  "key19": "2n9JLSgBycqUakjoQZ3e4zEqvGQ2yUEU6CLMfrbtYjxbwqka5pN7DmFSZRMHrBjJuUwEEuT1inbYZ4Dg8hnjPRsL",
  "key20": "5kQsBfyU8LYaPbVz8zGbpzdBaJ1HJkVShzUtLknFPiteLAENqc5T2J5fyxtqDfJpPJstvJt2jJYnJQ6F4w53wSEM",
  "key21": "3MdYAxtz5Sg77TqKP7BRzWLoHeXHkFDeNZSTWUmq7mrD6fjroKvzpxFQcHYpctafqRNhuoxPQMNpUUUEcNUBTzua",
  "key22": "5oyA5bo3JAusYqrAeSchKk7vQb8mQGJcJAKux7K9YwvgyYC4anyXVfzE3FbdjCZVinbeAqXDWspZBk3Cou5hK3gj",
  "key23": "qFvc9WixPJYkvufayBA7Mcib64GatXkg8vURbnmnp2s5YBZJSZ17gMY3DmJvY5cC8Efm6QWigQ6s67VEM69kB3H",
  "key24": "4hHcVKoxiavDNae6yyJ3mCENDjfTWVoGdo6NZJDWjokDYJFfmn9VFbSG95KefyaaoebXfqSo8EJ8Hkc5rJi7mse7",
  "key25": "5n3J3tEGU97YFaGtgaVZdKrVb9eNYd6x7ee2kgsCEYr9N9EKzPNNEkTnkRpRgbBXAgkwhdgc9FLPcUuGUKEiFjqB",
  "key26": "2NFXi6SHyRgCzccrm5qKkmqH9qQBwHir9eCGgPn5F1B1R6nZxBaKT5KcxXgPVufjXYorh1qtxXtZFPRrZkcLVTar",
  "key27": "5qrKXQQcY2FPBDxAj5B2UxB8L4BzfbksxVbzZeCEHq5b8hfcAdyakYJ6DuRV2cz4KTSEoLVGCdh3P1XstQXsuhEj",
  "key28": "39JzXTd9peMa5xyv18iD8dK49tHgsSDRvWr3YLhVQSpB6j41uWFWdXgH89WgSNvEG3WHEeer9E5ZyCKK7DZqfj6N",
  "key29": "12481Pb66R6N89LFmt2ivoAnZsbkeaSiUb99WqWhuKEhzkn8ZVBAcJKHNFw1VBHQ7EPtaZTkXiVBKRkbRLQbK3kt",
  "key30": "5WZG9VhJf6dktuVAXWXRoAYmXt11e4JzC1ZGF3LfRAkXkN3Y4eBCznhnRBxrmKQiuatBFTTFiZQTrPJLVz1ZxiaE",
  "key31": "3YvUp6H7VKGB9iTHVYGEzD6d752u8akvtBrP8zwLj3bfzEXhfsz7ub74K7fHK8yDKX2g2WX8qKyQ2bzDRBJToiMk",
  "key32": "dAdXMg6Qjw3YThLG7n1Y6GRqifcUoE9oqhmELCiQ8w6FuCEfMhHuY5UhJ9MSYXne5jZB8SVQFdJYd4FH5C2X698",
  "key33": "4tCCC7CbTAaxSBQtVchCEBNK15DPtabPBhptS8xk2UBZy6eDC9AFE8n4Ade7QR6RAPtLGbojfnTHbURz7Cno78oi",
  "key34": "KiPH1KkNK7R1rijDKD3zF1vsZDxLeNNNTLAZdUR211ny7YJz5gW6kfPrbacnJX5KJi475nM7Nv2eoYQMUaVHkPj",
  "key35": "2eVNU3jRGvFk5VxMSnL8rxt3cHv2jreM7dC5Vx8bnsiz9JCYtN42eHZwfUru6XCN5P82jHXidSiAcbhWKXmGiC94",
  "key36": "m3Gziu1TAtuN6tGeKP1oJaFgNqRe6xodwSXWSyBgrhcXLJxgGGAhwrKxUatStuqFH678MVK59jcwcUdEazYzZQu",
  "key37": "5xrAr6cvGRqKN4CSoUom8KYtyTSrdHPs5AG4sVNJUd52fkCmJdmRwgTWv4ovzn1fuxvzr7uZearXfEkm3nUr9oRg",
  "key38": "5q7wYym17rMdXC9hkf5kZmgtFaCMPEdTB7nfbrNd8HsTRsdLWUDM1SWmuDMqvNkpEiQt7g6vipUDXEttPkf4yuM2",
  "key39": "5qoVQqDwxm1ormP2SB5Ax6CjHp49X9D28vLhchDuyWAvnKnZUT79zmfSY1rEtWn916z6CaN8d8HyD8H5an4Cw7LY",
  "key40": "2tbzy6qXDAQSkGKrwMoEKbAYSumjLxVVdB3UVqzB85zQfJAZcdW97PNy4tKkAu6sMr5euBDS7WvGrxtxWw3FWCHA",
  "key41": "3NoZZTdDFUAPXnKvXm8h7JWt46JwQijfAti5bxdrfVHsr75MerYuUwy8mRGkcbSpwgLinREUt39nvFujQPNHJj6f",
  "key42": "5PUKoUpE27k1qkkYakyHoKbNVs2KHEVfiMXF5ddEEoiJT1r5QUFcDxXWgwxLFhKUU3SnvMu3mGZQdXUdshpB7hCa",
  "key43": "4KrEiPD5gMzsXVF7cRKhX9VCUwi8E4jrLBvSNbDWgybnADAw3bjqR17568253RHN4yPx7LKdtgvv4Tx3ymQfMdok",
  "key44": "5tQezUZUPFkkSdnbuAeU77FXXZXyR7asCoiEjeWJvJ7wSjPTaFXyPnyF83xmpB9PwUyfraFtSzLji1CLtJgGA7gV",
  "key45": "gesm7puATMyuhTmC55YvfGLWWZ28FkSbinkQgy8Um8Dh9veoZNbJGgGxwNajcaSgvwD3yNAhQTpzK3UgsAYqcEs"
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
