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
    "3sFAYYgLtC2jg1dKHH7tMTKkroc81ftkyvzKEsKoSv4AogPkfJECW89JZwDMffG6PqdB23H9PN5tqLanGPX6ZFSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XMjncYfPseeoRrTMrvRM4B8ETofs4tUULwhqRFgD3iKYe2PjrS5JRdeVVPFxqAgHpcJ163RKZSh7xAoujviEdYz",
  "key1": "5jcCAsLgnAJYLn4BhwJyXeqpejjZgwMWR3KMXsj6crTUyVWBEGQoxxFCwdAP7E32L7oeHzkQTq28o9eL3uryaxXE",
  "key2": "4Lw1xmS1eF79pkSXU9GCy75joV7FfhM9fvYnLbDMQyBoQCceNdtrbPJayjHC2YXTU8WK66xKab3ruT3CcqzNtus1",
  "key3": "66azWc2qx77kCAHVK1fswuphnk6tvrepqDxzuBkXQVhiV7TgKHyqjKrQ6bnUUETPi5SUxP49H4Grg7GKUaCEUEr2",
  "key4": "5cwYCxhg1J7vnqtm8y7iSibvUFauKQDjAmSjHFrc9UQV8Ta3TqDykQi4deMqFA2aDt9dscpqATCJkttVCEaBwgjP",
  "key5": "4KQVo9HMJv3LYa9a63Azb3EfAjGt5XPsztm4LVA1zjVTJTWHD2gfWUnHjjREZEMt1eFzPpxjHuKFR7tRzmQURYuV",
  "key6": "31CVBstPZMkDW4gzrvXfoLQ9dQuScrS92cudyvxHVXw63ZDqzMCQACGDSnoBfQMttTtMYmua2iAgHg5qbktJLBfd",
  "key7": "3UzcuCYdDJgCkGAuGvR9doWQx2H7ytUh8NznUAYjCNkZjZ9JMwTy9xtfHyBbMhxMJxMqm5Qv6RBkcMCVTvPgm9G5",
  "key8": "3UEuZRat13UzaHwV2HSe5vhw9aDzrmXiGGhdyAtoPZtk1tQ8jbwLj4cyLAMfnrvkWXEFypKZTokZuJYDLpeu9BQx",
  "key9": "5Q3p1PvkAZCG2MLcff3K1SQ639WupWnZtaA7nx34FpWX6XdAyZob8Pq61cUHjH9o3GNJB54r3JLLE5xsZXyQnfYP",
  "key10": "DmLLUqvMMmwjhyHYugxWhQKAw8n424MS1APH6XRA4SHv1uCkSNiyXKUcpr3SAHezAF93wVmcS2tvXdfvnMadLoX",
  "key11": "RUBcmVokSUdGM7FzAvEhrGQUjVYCgQVBzLPoxRd4xX4jZUuP6qxULaKcAVuex55JPrZ1m79DsihySgZd7wg8CQm",
  "key12": "6sWqTBMwnjDvMoz36rAeitZWRpEHs3KECwCNKFc4DA9Uez2R1nFgRdXPeCc1HaB8SZnUy1Rm96msar4fuejNNWb",
  "key13": "3R2UpyhDWcJHRZXbsu1cFkyZewzJnEyciP1xDxbrrtKf4J5VUddUAyqe9FN54ehEy2fqTkZVMbxPgdyAeWLWh9pR",
  "key14": "5SkXUBt58EHWQGqR9dsUsj2RPgMH6XVMsNwGexx4WztkbmwcLifFeGRgVUis6n1xFdzti76mwTBXjjwyaZ9XeqnU",
  "key15": "2Wwst33zRhQ11iGBjUQKKwUyRTQYxeavTyzF93jwXq5eD8Xq5BSezYVC8jE8KvQyzahqMugENAPTsdgtkRCUSakQ",
  "key16": "21uXcxswviYe73rHusDNJZtWugPtmc6UTputfDq6UinCRFgHZmoabBjb8A5g2p4bLDT3BctJFzMErfk3gi7xJWXb",
  "key17": "GUjZLJER8EgHyYC898wFJRQ3DvHpnxJvzCSnJ5aMiwrAWGDgYX9ok5YrQqWtmRHXiLjwzbkQBG8kXpiZ6bANXiu",
  "key18": "2ko67AEf6S1xV1QACQyveX7UzcPinVMF1fYamKEaKSMFVwBpoqYgZBeYYReqTKDqekNbdhpj3FdpSszhxMo5bEeA",
  "key19": "4PYkjXuFL2z9eN6YHm8R8vrgGv2vNNSfbvTJoxM2YD6P3bM9WbvcJfHs5oeN3mxKshrrTryVknoe7uad2M2h27EB",
  "key20": "5CxtcRcm6Y1y6wNW5spAo7UD9UxPaqZBARpWXKSbd7Qcwjt7fEAw6YC1zTsonGYTuxC4gupxH2Dgh2T9Pqbto6Ei",
  "key21": "4NpbsroB871f35VZm9nsvMg3PzMppNHoFsYpfxB4AGCUReDbxD3681TjjaWsg1nkHTBwfayvttGafuzBBPRYm5mZ",
  "key22": "5qKHBK6EvtQg6hLsK5iyyN49WoQ9pVMKdUxfW3PmffYjP1cxyNnAMgcZAG4QvhoxxYdqES6rXMRMWjaMNauM1NbC",
  "key23": "5douiuQ4LZ6RqXz7e3jYZKLgSYS6sMdbsB5nDef1mpyU9JGsCUeiegTig1t6USMs67yV5gjJssqMakVBqYyPDLip",
  "key24": "gJVbUMFw8gPJvoNLBYADN1fygayaRMRjb3oa5NiZLfVwir4y9G2HkwuPpoP7evmL5QVAxrVUpvhZavdTAex7CdN",
  "key25": "uz2YeNL1LVModYiHgSZYom8QBTWhgfDsRSrtnsJqgXzbe6Yy7AcMFQqp5rP7Jza2tpS5YeYUgnntGHVHg9acfz8",
  "key26": "KXk7jKDMimRgUdVXDWNtE9XrMQzmnCHExjbBuHi54tkG7wXtQDKdcU6pRZFjMp513aiZWWvBKisGTNeruHLEU9G",
  "key27": "29iyAa2qx1FSiPgbpRhg9yyEEpiMSgW9jASBUEybKdnwUZommWwerL1h138LQHFRyTSkAvQA9JUZkKnHZhpcbK79",
  "key28": "51dCnXd7C9xKYBqRqvonw241x2bDNweaQcoPLT7PKj1VrAwmdkGqcGyamhwh3xcXPT8v8VpAtvc4ByWcm1LRLb7w",
  "key29": "5crVwRH24B6FS4kUjcwKZnFBaXXw1JS4XWS6Z5HJL8dBg3gvhKYxNozQTUW3qrSMWEdJLmehDPq9ZGTpsoD4Mxii",
  "key30": "363wnYfVcqzStz542d9dG6FJCJC5LeSXgj9DxrFQNdPn5y9MvVf181gqzmXtoZwg29xaT3LVjPnZPHPvLvdoT9cL",
  "key31": "4QkdMPm4VpdUwRZvD9Mi5fZgZcTkRPEmQ4CzkChCei9EVghTm8jfGE37hjJjwgjeJHkmEkVPv5cULtYncuftHeSC",
  "key32": "2MqRJSTmnSSqH8Qx8FNx5G1aUPbxuaWP3uCTAKRYqC9DZoNSH4vBXedL6SgByKJy6qeBG7huwxUjpwJu7jm6Pk9p",
  "key33": "4E87GYgs7qtNMs2AMPMU3VPnm57xsio7Vy7jtsr2W8JukUcaVS7SfsSAT1Z4NU6nFuC4fHbqBNc9mmA1X2ABFFQP",
  "key34": "2W6SnZkNDSUK375sazTUjoUavWoW5ztapR1tzXNUtSC4AhdAAhTzx5smqsQZMZ7qWoqxX9aAvHWKCkZJQwz4M9d9",
  "key35": "2de9MwbJC51m3VH3dEovyftEgUt8CxyBT6xuh89rwbPA1ipWB47NYeZkb4EDoiRWfafYmaphuGXsiaBRYEYrjkfb",
  "key36": "4jh2rHBTeTsLqBUNQT5KjYzsKmowVxQRCfz586FXpsowYqcLuGRiAie1FdvNWVEBi4FaUN7XAyhFs2M5trcbhaB1",
  "key37": "2qESDbA54LbQLYaRmiqMb1jgi1DfqQF25GAn9Zfkh4GwTpWX6y7QeitGxx8z3F7XKptmf7FG1yT6aksdFuFzdjQr",
  "key38": "4G1HadNmA2wWnd1Jff1ef59XbR6563rjxrXAnzLFgHRexbzJ1iUUcPgwFWCSx8wL9z6Z6zCr4s4xBybaPk6sEedV",
  "key39": "39NMV3zCYfbgFoA7DdH71dG1AmbKdhRmDSuTdb1YZTHeeBW9urphJCgGkWaqWnCXX7A64tw4nmDDweaG7eEhYHnH",
  "key40": "4bsPC3u9fP4vCzZcFSLy9r2raSvk4mHf6eu8PGkqkjTM1CQCpseBKNumzFfQxRxUJNZ51hRbxCE8J2Sr5TxXynS8",
  "key41": "2a55fpL1UvbmTyHANb7TgPx1oQXXoERuNTKmQz3AkjEygrHdK6qKUtUu6DrUoVZ9CZC9ctsXFAcaox61X6WCYUrf",
  "key42": "4ZRphUUESDG6VwBPosaxfDZnzPPXCDJBTFQNLpBpX9nY5sCHHgY7M5u3tZ8A2Uu24eyfrDMt4hrNVF5ZPjUX4rRM",
  "key43": "3wCmecZs8k8Acacr6HmhAzvHTgm7BT2txPjSDeSesh5sweivV2m4kc9AA94u4rpa1tVvFVUKeBURJUaCaDrrt5LJ"
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
