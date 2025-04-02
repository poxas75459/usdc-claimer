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
    "PWjC4BpeLYqeTSBKYM81DM6QTax2R3ek2bHf6vkUvL7c9XtHiX8Z2nHshPqWLg4cDGCdAsGLXo3LP4eQjisWfPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37keVafVqLQQiq24CD5jRkGDCc4dJnzbdibMqF3nB1P5GXMFrDCL1MoaBSFw5CdbLz5ya1TQ5f3H6UqaW919Pg9d",
  "key1": "2AcS8czvBznRhYwSZ3iKtYD6AQkGCNUTn5g1gKNv6UUUZY8RbJ54nKd1aEpZ7TSbwM6JjBFBFynUMMfpCgyrJvBp",
  "key2": "2t5BnCbc6xjEcZQuXvw7DsPCCYAWE2Vc1ZpnH3B1uUxSYW79soN1ZrsDJitwHYM9x5APLbP5QEkqhKHcWHmJrZe4",
  "key3": "22hQ2gs3z5VX56afCeRQLmXzwyYH4HXBzqYt3wBdEbFBM6eNqSRv3U6HJMJbxy2wDBSJWHGKF3oHanKeqVTmiEKX",
  "key4": "muHJJ6ZcBJHioGFFFz9aogPUrLdNVVENZfPTjfLWSxq9t2JzW55LNd7cdoXK6nsFpYoDvn5aXMKvqXNN1rrFzB8",
  "key5": "5R4ArCg7GzKAo31hc7NMhwAJWmSSNv4NGJfrgr7Jvo5Hp3dDyC8dSpZ14WSrHh2KsZ8Rpb6vUWucAMRwBXH3FFRV",
  "key6": "3YbL71UxSkoFavvbJWVgrK7i31avVpdeuDmXbFhyzDA25pdgyS4RWeprJRwgHH8iEw78FMu6FNLin7noDL3z8xdx",
  "key7": "3bs1B7Z45uUBgHCCfbG87495a2pmBtBvV2JJFrfahDJzmXTEDCVAMVjcUY9hQL5AmbkVtayK7eiCKUD71NXqF231",
  "key8": "2RifxuCFDwsgboNL9E3jGjDJyaFbHMGMhmqjgTuNJFGcwkHg4cXZj3BBNEmEHTsYMwmQPHoQkT3aThetoSWKcAJP",
  "key9": "fEVpqFYZVDoMrEuYxbUgbNLjSeEDAi2TBX3czY7jURJdkm6X7rNRhD2rhyV66XpTZdB36psGPtMY7spSmefxWM2",
  "key10": "p5LHum38Uck5GVBnq6hQdGmP88WFmggv8KLF2ip2XednuwnkdAuTxXxGq437KdMV8bWwnL2oeVPEQRButB4DSQk",
  "key11": "5UWfnuQchbQfKc8g8BJgAYkSffsnrpc4sNEhmZsfMRndBGBm6NpSHh2eHUCg3kWBXgaUXdxtFLL2U7oZMRfMAREf",
  "key12": "37Y5c8QBbYrjLPnErYAyC6Wcsh7kvzGmYPSUrR1MHbNNPhMw4PbtJVhyBca9MzX7ZcChPjSj1C4k6Lp6oBtwQpXT",
  "key13": "4U2FRMDHS5vd8JUsixg9fERz8zz2Urj1qvDTJFPqnRpSggsQYByZLpUfjnecbibNxQ5aHJwiPgHzE1FRMXrhw3XK",
  "key14": "5Lsx1PanAkgTGcTpwhgZ4o6s74a7XCs4nd96hshtssNpnwNZcNMqXR2418sa5B7U7K3dbC2Hyg2rvYHStz12rujQ",
  "key15": "3VfRNZmy4S4bNRKYn3UkK8sFYi18jjRFyHJzZneoSsd6GirEUtJ3xxGsnRqns3urWM98Q1vbGLC14tmbwGAwftUW",
  "key16": "2VfNwWkj8MRY3CHMytSaRP4gGr4exqXLxpSLG79LLiMvNG9Jkp2zo5rTPShpRXw6A7FvrnKpRp19PEvwWQKzEfRJ",
  "key17": "4Ks1L6f5pimanLyriTiCEXXps26fMFsLuJ94p6cqAnwVRmLSiJPRx584GrCJdWYxnvkeStgnMWUdnKecgXa45fEr",
  "key18": "5wm39UAK2kLVYMSZa7FRHMJYobGmJ1Jr8HEf1Yp5xePPa6pJNL6Brq4Qx5nuMCLyC7Uc5QjTm9u4r3R7XD3dkNXV",
  "key19": "3GShaHFS9vaxrUNgFsWaLf92W9aqXJrrP6HTpqk75GEoeRAaabgjSLzdGbS87we78Hjx2J4v6k8GtUTYPYpYq87z",
  "key20": "VSTggeF8h8zdLwCkpDdbzs515FqM15qN85QzkcWUNnXmxj24A8bYcA7GWr5TGosX6VhWkp1LrWDHHXgzpRVURYm",
  "key21": "5mQdh9B8zvCWX8itVMzMfa9zr2b61pjQknhi3xA8zszpxHrMt8Qd1QELgKScTrnrbkLNN5fJRHjfo1tgMG4vA6CZ",
  "key22": "53Y45WZN7m2RrnaKEBfE7y8JvrcNR9sCJvovB5U7EKPbaQ3QA37M9eXwkzmVfwh2PYjCuUyNFFdc8qZ6vE3zPaNR",
  "key23": "4EbHNr7SJ9PW3rKNTnsx5MbfSbepxMs3v4ZvsuHVtsv4TbXutNJe5ZoVHUVGAFPGnsGXef3Z4eYNpRhAZ7VqXLgQ",
  "key24": "DWmVf2RUVta8rsM3D4nQoPSqvsBe5t41n9VYayqAqBhPWnpXMbK6NsvuynVBqUuaB4zKXFTXimjTa9WJJhsfKpd",
  "key25": "3kqLq7PjyHYesGz82w7yb7H2xk1ZXM9D31a3pUDNGBLVrHNVrvUyn3XLVBDp933hwBSbPj9UYxsniEWUP1pN9YU5",
  "key26": "2FHUwxUCmhk5isnz7Tpu94fbRd5DtGJZj8jVEdKrNkgPaBkFy7fop88Ep6pjkAQjWufrFUG7M1393pvcrcNc6uDU",
  "key27": "8hToRaN6N6rKRtbTp4ASfJAj5y947RpX3rMLLXF2KWhbj99MMVM2iwoZSYqVQq7sqSBYTEcg6jdeKLLGG2msA9E",
  "key28": "31WKT5wZX3M41mxKvj53SafkWffpReNWJS5eDTkjFYzpo8bs1Q4rh8SGKK4G2Cv3aQQ9H7smhxhBaqpqJXNSTvgC",
  "key29": "5m5CdcinnyHe3YKgcKehMsjSy38GrQBUkQNdYP66ovYj2mDevB3hPLGkbqTKsszMAfbQMtR76Xky2o3mAeCartLf",
  "key30": "5U8T2RJRTQdY2EnzBFteWp9XxmGuZDXJ7AaJghrReXFjYgQ9L4s69LBTAZEMzSc3sM6Cq8Lo5D4J5EwZWtaJCzuG",
  "key31": "2nmuxfwvcwHARbjcJvCqz8HxUxwsdg5L298fytKZ5N4rLgnCiCDZQCXBYeAGbgYW3oes3YcJJLQye2R4SkCocMuH",
  "key32": "21LkFsG2UpR5fvhBJSituxbbXhVNuu61MC4E3UtroL1EvtRmiTfEjs45tofNRAWbVycdV1dZRv93k2dRSrHjPZxw",
  "key33": "4oQiEKNYqj4NbGc8YNGECdM63v32ahLFKt6V7PTPk8XSDWgx9HmM4AMsec6n78rYzfySP9KbbfbLPKwL71soTrL1",
  "key34": "5waB13Po8Ee7ryoiedpKJEPtm5Yy6JrwZoJHgfqPk525mjxEv5SXzwSM7YN7h4LaMM7vUsjw3Sff54jQGvbjhTpt",
  "key35": "5t4Ha2Uc2wJUSjMunZam9VyLJBz6LxUfJaA7ko1STxgBLtKiM6nsqmcQ5KMNppAbZXgXN2f3cw3tzF8Ck2X9kb24",
  "key36": "2QQeU2FFj9xRiUdmssgSsoii461QNRnca9rVm7EuioyGqeeqxoZ8S7d4LKvK5GdHgwhf4Qo2TmugjmxWNsXh9LDi",
  "key37": "29YmJEwFG9HHiBVZLcyX1ZJ42D5EcHgamshNyngao9NL2j93L4iNfX6juwCusvNyG15KEySGBoFeGxhe92BdV5FP",
  "key38": "62uCxiVwXWFvsGBBfwPpfWAP6Mnhwk1Yx4oNXZ8JHDmGfL8qL21stZ29SmR4LbV4RU2qy6FQhu8PRL4nswqfeaaa",
  "key39": "4SP7n5HQ32r6Z1qCY7WuQWV1GND9HSiP9L842A1xHDw4UoeZxd4tv6GsqzEdbtX4EFap4CgSfGb7He6w667tXBBF",
  "key40": "4YjQhkjZp81RDMnEANxzmGPkeghaNrnGyqu2rTFLAxESNXuTZi88DtuqpUdPJX7JsraxJ83VrQjDohanaacX61Yk",
  "key41": "5wDbtNrFAiyeTKUgCCAjcMqRKQ7Y6p567Wt6q13PEMxWuz7WkiRY9VsLqPCP9ufw3CsBjctnNNiPe5wYg7jiaA8C",
  "key42": "5HLY2C3og72hMfDzLox3T8vcHG7qL9zExb4fGHn8T5fy67yitmAguLcqW6CDRBqauuwzGx2jRdag6CwwfAW1RcGt",
  "key43": "2WWcD7hCnHNq3QXuW9NFbdhKfrPGfSx7nqVLbr9zHmQ4tskuZwYdLWKaNXrPCWVs8YEYmWiEbL7wtJNnb9TeKocL"
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
