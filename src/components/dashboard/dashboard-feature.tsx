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
    "5xF56LrroU7mXYGneHDJPdYh2gKVK5UTrEcWU4mznVKd4g8VSzNg82YyBpbmeD6ygJwKEwB9XWQL2otcbkE4yvtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37LFhXmCYXV6wmC5eK1nc4hf21hxpAJpt8oQtqhhkWDdoHMqNsohz9rZBXMKjKRR5zkpn4tGs2CfaAziLct7b91Q",
  "key1": "2Nx2mFfkErP9rxuo2EQjLg47ZSBWi3QfhLP3j5PKe1sbFpRMqaMGhq8JnkSUo9VMuNojq6GCTNGrjtYhnELmaMMt",
  "key2": "3sM7UgxRtYp1YSfGX2SUfbRU1cq2qsZibu1jdVqBT3V8ohZw64qDbWy75xc9KRUnzErF6miBqSoossNu5Qznc8Fb",
  "key3": "Bp9RTBcz2Chbyck293B2c5dfKoogAh48Y1YJ1ffzVGsriPHNJBo6YH5V2sKUgXJXVo5DbFJQ2TD4kQxF2V1yaoC",
  "key4": "hWLNuPZexVGwi6SUq33QWE5anxtkp3au3HoGr4uQbg5Eiu2Ygt6ZmuyaD2cRnWSZkEFyi85aRVxpYnCCFnsqdrQ",
  "key5": "3Pm163jtV6pDCE2zs2q8g9FDBV76KLxs3hgnTFqFQmwacU9Uf1451iL5aJYa3tVJrWdsCdM44t8Mfh35Urnh6Zug",
  "key6": "5ZNosb4hiL3Sztq6CjN8PDQLnH1UzGn5QDQarANomMkcuwQ7E34LBeJwTwqP5dTZKyzzwT9tZmq9Gmh7dpNxyex",
  "key7": "6CAKCZQUTzxyQUv5Ckuo7mUeybEaauhT6sUYeiSpDYe1jDoYwpxwtsiKF46c6vJFgVbnG3tcRjnHX9MRE9C6aCt",
  "key8": "5zs5g6dhM8TK3hs3geqBb2Gir8NtwS12VwxJSub5dvG5HRb4oQW45JVqvZyTkAs6BNEZxXuhmArjXmNRS7ZGaWKk",
  "key9": "5SQKGg1hu2g8z6kbssqFe55W5BDk52qdzXMV8GgKRWnYkatq2acmgJm4NG7RSXzeb2fjzf9NpUyN8FWdf1a8VLN2",
  "key10": "KoNsY3SCExAWboNF6GwsyM4oNrDgU6GBAfWnNSe3XVbXauC6xdxmiKZbSnp79nATkRbh1D7gY1K3adWFi1NAfsv",
  "key11": "5ExycMy33B2G9FGBVuFfbm3NMmnUjqVkJFbh6AGZFsE4L1dJsbPMY8cQ2dn69Q6NHr5NuaKxr29fhEQAA717Mb4f",
  "key12": "3buoRXswqzddGhssQ3BDuJppnrgLwWUCvjbQWNFeeZRLmZqSszcDyqGBa6XnABuiUJnhJxoFCujMpXUurKbTh6Pq",
  "key13": "38VFSyCFtb4qoofmFw21XFp3xikDJjCzDy47ZvkbLinzLewrWHS9L1zQcYumevVe5xtWutByTV9fqr31gWSvnLM4",
  "key14": "2qD3bWzf4Qa5ZpAtMgz9aZhhNzz8QXmZXhAuCKW4bvsDp3AMWAtZxJS3QTyGCzbHytCXHMUjWJSSu7b3eLz2trf2",
  "key15": "59rhikDYxiLMkoBhkXErfABpYMFGuVWCjniedbJHp6kk4WCx7LnBwDD8ezNJkebEeMwjyoK4ZKKNeQiG2GqJ5eLx",
  "key16": "3DFopaLQaqaNGnSNwuDRpnETCYXNdKbc9o24LwDcb4zBpDhuPREmU3z9wg5LzUdCrATT6RpsyfGXTBBow1QQvePQ",
  "key17": "3bGY1h5RnffkuqZjqfh4GHbNvzYxdQiA1UNeoqcnzGVeZjxXzn7PMXkfDD9kBSVFSScbpqG6xPq5RFLdHhdg4yeE",
  "key18": "JFBrxxc5vFqKoFnAKsmmZPkV6wANHWdCWvk54ZS9UtwyAPsYJEF8XejrzxJ1Sx9DCoxyX9TrBCK1DBr8w8p4hL8",
  "key19": "MrkPrUUpDnNDsLCVipvTTiUqjbbAHt2sPMULPCBgiaEGHpXUmZH43VcwZc3RVrqGn2wSaqQTRLFyu4eQey5gTDR",
  "key20": "4Xpie8S9ee7ZgiChnCxPeHcZY2wCccL2sNBbpHUj8utghFzoo9zTiiuAgVQewyvFYtv5JZTWGzRxUVKbpbcjem2x",
  "key21": "3nMuDDnaJ9ycGqVJ2zH7zEyqYPADefCue6nuqdbDeDfRZREvvh7Q2mSwafQFRPrmhDL6mVtCTo2mgNcJbNaFUeZ3",
  "key22": "3XkM4TefDvrNEW5JN7fQjKqsfZqfev7CwJzY3WGGfzxr75hruoSUPnJ1r9ug3SXq9TGSgwzjcLfvL8omPPWp6XfY",
  "key23": "56qKN7atTofDcohgMjPZct8ATS75GGQozMPqnmKFUUhStZC9VA7AJQupQqzzvQujtrKZf31EC7F9UCpPhT8B2FNZ",
  "key24": "2C9CUqpqUWYwoconHdmVyZSHPar8Wxvmo28tFUNuk3HeT7TEVdLgbcsz2cr9niTmJLxP4WcUGcstMV45bvwiikK9",
  "key25": "3Gc1vMcN1J1U4bkZXvdBdy6ESRTkavvRrXupkWafkNsNyycTfTLc9N2AfCoE52CiFnZfxeDgTjYFw51e4YLHYmYr",
  "key26": "4RSBmA1cAsK2YPGAdCtT9uqa2bnN6iwAbe1eVEE4nnJcvWhbHfZnmd2ncogFZoQzKdthyEDArjPCLMSxRFssDbCG",
  "key27": "2mHc4T6JCH3vyYL42LBdn6GHVG7K8QmZYho4TnUkkA1ScUzdXc2rWwcNM6AtVQATA5VERUHQYY6oK2DXzt97A574",
  "key28": "3P2PzEkqR2BUcX97X1vPSm59LWBg86cpGqaheurF9FurbaeLwRk2t6FUciFT52PwZM1dSkDCJYgtmoswjT1ihLcT",
  "key29": "2KhThXnwTbmgwgmzi8j1E5iuWFVbFcYU2MSoimvJpY6biEYZVCruJDKWxdBx4en8QWeuHmacdxbMo47ZRjqVVC44",
  "key30": "5s9m3FYsmu2FcX9YURJL4GpoZ6WGUFw7SW6wXBQ6fme5AcjuqJz2bia1uTNDG71ULGk2LU23VJK6LtLzuNdEH9HY",
  "key31": "3gTaDNhWNVPJ2KvQitXwJSvRPaApcg4NHFdoukBjAi6qx5hHZdQssXxkuBJ7cSYMs2NRyGRRhusx9hU1dLzqrFHT",
  "key32": "5RksvRWBCs2p6i9DohoXMciivxvcWt9pr85z2GeXFFusMZpyCg8NQWHkL62HBYoCRZX8jJASfzpibtau8z5ri3U7",
  "key33": "JYunGNGwLNeMdZu7i3xn8qKasotwoyyFindQBF5gJZTYPWeE2uCWm61p96FbaKkfhCNyFvamNTu1BFwaA6Km4DQ",
  "key34": "2M1aHmfLGxAGz4h67intez4P8MH8XTzsXHQfSBFaCXHJU5JiCwTPq91LPhPUwbpufsKbyS5fWtR8yAdwoNZpUVWk",
  "key35": "LMqGKTwB9h647jGJeozYVQn7K827F5tdKVozAEvBhQed9HDT58j6s4oE3rkPpUHPbxAftpPyoSRRTzG45Q4XoSv",
  "key36": "4euT7NvxfqwTfrSjRzxH7LUPmGJHXhDZ6MH5SE8GcwUUSV3myrLBGvUTzHr3P3BR3Qaf5riEoVBPCSJNefLuegaJ",
  "key37": "5yjXXBHiXk8PfUMfU2QrMxskqjJvzQ2faVH8uzM45pL62xyx7ZfV2JVovLjMXtqE6QXE6wBTiuQMFkphgf3Quyoz",
  "key38": "3tL9KPm5qT6wgt4fEKvCpC9m1wuPWRHPhSCFJvf5ke1ibCGCi54RNssWuhsjwEMHB8kqPBwXWeq4X42hJE8542RG",
  "key39": "3kS7wVfoZtqD5eeCUkihjk5xq2ZHAja3AvHLb8MhosvKRGeqsb4GQW5aAsAFgDreKJuwir9y42Kaq5mnssPcxg1X",
  "key40": "2HXV3NM4ouwopKQqoSbBuC3QUU8ZSuuXUCwQ4UngTTKALqGYdauw4f2RJJkTLv8UYoHk2izwmwGz9fWvg1qMoENC",
  "key41": "2JA6bU9s2wc79DaAAFzS7kg8tDp6j7DFFqF5xEp1bRLg5rA9St4cvnDKjAiNXcyNQCuedtiDiKKkW4yHYz3VMvM9",
  "key42": "37MpToHfbQhNs8qjqya6S8cn7kG5CNDd8reqxShKhCQZhKE1wEfBDVtYpWKmo6FHpNNG2Qeo9UUsqSiNtJXU8AiA",
  "key43": "jFgh9bq9dw6rLBnjY2VgtJfAMEcXfJPPTs3mX7XVqW6pJZugyJyXSpBpt2ohcHmds6ipt5TTszPth4gAzvmzijk",
  "key44": "3B9CFUzuAcZEnuDAszSaM7jKaG6PHMK5yTdrwz5gQq9b8Miqrw7Uos3txdkPt5NfkJFXYjiY9qNbkUV1z9FxbVJC",
  "key45": "4JioGSZjjTGw5pWUuDCS8cuBENGafMUkCYsVdTsbt5oJkfd5P5zmvxXDMjMTM8ytoUysGwbvSTuWpDkdKSXF4g9L",
  "key46": "1EJAyYT27sPJ9pUF3fjMApn9QbmZ1BXpQipodd8MfRTfqMMpg62A5Ex4FoBnfnn5RgvJ4GKyko8uXRvta4VQHwG"
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
