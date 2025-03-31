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
    "2Ni454nQRAnHrniUUicfFG8jPpcTmmxJjCfi9YZ7GrGkPY4t8VPqZukJSiTdFjGcQQwzYQD1ZzAu7LvyEkPcrbAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2chYUUYrnxaAJyW6mhx757HKyvNA4mjgVHe4e7bVSzZBbYB1VUK1xXBxDWs1JpUxhagTnViFy2rwZeVWBjZwRkxj",
  "key1": "5GykkYbMECtQAj2pCf4uryeagnXXvvGEsbzATGwjyFodgB2ToYTf62yKHY8qmBLAD9SaW7vBaViJP2jicfHCxSeq",
  "key2": "ybNUbJGyfuowhqmHjTk9fPn4LLjDX4cWKRKFxbuiX8ziC1ncgZmX1Y8tqchSnVp7k8UH89CJfTCDVwpyet1i6zX",
  "key3": "5EcJRQfALRhQT5ZzRUBcAALpg98weUFW5fTBJHC6MJMzinEvpVGw5e1oFTf7Gf46M6FqdQm8H1gBcBNqFNMN328e",
  "key4": "3ys2Kd9BZuyKhVqTucvhewgRBk5iwPp4XDKdQnmKwhjvgMmCqnv6bm3xT7Wx4myHFPtfAdpDZgAbJGpMS9vp7mHd",
  "key5": "19JcTez7UxPFFwY6D4TMEMDNmFGBUAyqeW1cNASBp9gJiyVLzcUyae6WthjHnpXhZhKhKmPwoPJAhMyy1PDGKzh",
  "key6": "4hvX1t3n95t2ve42FJvFBfSPNyo7fTcTSZPLEjQJpkp4CzeE5DzAxuQQmReu3JXGKmFudZCukha6HLCJUHMgneNt",
  "key7": "2Tzzh2x2Trfvx2XGp9U869ZoSYqxjZMbQzQY8cJgjobeXa3wvgRditBXPqmVk9AXg5HxL26w5CoaWsU5ys84qqdk",
  "key8": "4j3anCVAgfmJV5htR154QTNPxVBd2CybrSQSoJqp7DRRDNfqoyEZzg99aeo6PxVhWycg7fe2DmLEvNLDHWVcKjYH",
  "key9": "3xM2tcM566nQvb4ZbpeaJikRTQM5GeRfvvCmMr9CcXCen44nzQok1Yqm1cawmEzj6qCFkxaXC5QhxRD98WL8gZEs",
  "key10": "4Y63KvxJmQyo1hgMTGzG17TdVCZ8Hu2w6994P4AfMQBSMkGZusRhEJWVZzUUCeXUFmM57XwnG8LzLGGfqvBszHcX",
  "key11": "2Ud7Qvm6QoCbUtzCPnFjGCEEqMX4AJKu8hCocPpSM2n2XaBCpBNjiFNnWeobw1HAUL8XWyfNZ14abrJdxxu4HQFT",
  "key12": "61gnGAyeC4FmP7ANUdwTzVVvrUDPLZ52TRVSqkroyvcB9sRm6MWavyHSJPxezyEN8vxrXz1UNvj6s85A9uUnq29A",
  "key13": "a455kdm5gan1ByFoZ9acV1HSwkfH7ozCmBZkmLHqFxAX5Fh6jsdodMdktFTUqE2AVeMyTcx5z6tJo47HZQN8mKR",
  "key14": "61UtCeCTdvMN9LUUSQHvRPJkf1YEu34vu6X6eWfwCEgVCkAtahnugxuY6HYQz26SKE2yVvFcpw2jpF58rUvPPeNZ",
  "key15": "T5ktWV2HiS47kcj3EFFgCR1EEgUi52obLujs8mfxgxyrGekJY9Bna7bxbQsYepqcK1DGz6Upan93j2dL3k81Upg",
  "key16": "TampUnshunzmfcLV1yrZdYRimgDGyrHNJiLLgBAu4e2hgWZ5H44DRNiDgBjFwaUQZK3RhWBYLJVX9UDAe3N7955",
  "key17": "3jisvSeLWQBkCXwNCxRNsspCCv9x66vwYnEhudEyjmGARRvtn78wXpR69sozVrxdV6YSLxKSLSs6r4jZtXLK2MVZ",
  "key18": "4sDRkTgR3UfNTLq9bBqAsucbaKioA39NhLMPFCesGH6ZvFvhJP1ZWwTYn6SsAaL7ipNDuQgMrmR3eUSUHUY99Bwn",
  "key19": "26rY966zGUKCSvM2dP5AqsWnjUEcs4h5tMiRxA3XRL8x7eNTN4LLcnfAAx2C8znksLbU2TLkVDa7VZ8v3gSVLXB9",
  "key20": "4W9UMvTG2GjKY156wV12qS3RhYaNSFUGsJmEErvwQBwdDYKuHQ7CSkgmdtNVTx71xjMtzkrTpEsvat6KN9ZQfn19",
  "key21": "3iVu15KQPg5gBxzh4iuvPshYPvn99hTGPKyWaf2Ey6uczB5jJQHNpnCHCYXbNuiq1pddYmoPpkqoAiskU6uY6wg8",
  "key22": "3XxxWmaB1MYdpjRxrYxCZwLEZbf4GsbycQK4pMg4jXsWVF454L4per6je8AwaXJ6Gu9YscHPjcUbMEeiYZHN8m2X",
  "key23": "3PGMBWEs1TNtcZbZoPc6iYk8cYVKZs9hHacBcPwuaCJncZggjb9cD7DuFMnGMg1SUtjd7Ga2yqyRZ2Pew8YqR9wD",
  "key24": "3rxAuFp2PYjYsi3oRwNuRQCJPqX4Uym6niShBpviJBdLz9nTJszEUWem4iPsRy9tUeEPE9ERXgaigu6Z9RqJcBP7",
  "key25": "rUqJ2jhGPeaj6jNTN7XVf43jEfdPbFM6TeTdKAgy8x6M1uDYKr8FGvrKNQbPAsMYzN4Bu7XkjPa8nGV883zqqBb",
  "key26": "3g5QdW55PZRQh2pnaQ1AAbvxxhxEhyTTaNavKc71QmWDbNAgzg4zcpn38VNYF8Y2ieQU4eSVQG1qfduQYzkwN16P",
  "key27": "58yzvUq1KRo3zwUSE1xasRFyB2m6GQZY9g1uzgXZ2CiMP2d3KKQbZ6V2H85MQyK6eNN45VTuDoynxtX698Z8HCQr",
  "key28": "4bhiXcCUv6nymmWaBcAF6ACwQ1Skc3PNjs8X1Y1geZvMtQ5hfbCJiQTzuFK52gco7HakfggvDhdJDyXNFbqxJL2F",
  "key29": "48rDYYueom7ZeBUvCxwJPpZ2RcinjpnXiXhXdbCnWszMddSezJkANdSiDWTbFsGb3VuLtco8xhkyfvQs6DnMZxAK",
  "key30": "qbBrGiprxesp1jEiur5HbwfQpzQVYE9GBNVw1SBqaRdA8NfX4NxTY4AP2rhYYp91xME6Pe3zahzBDPFiqfiSqkY",
  "key31": "4F8zJmJnz2eR2DY31GvZtWZns1xG6K6Rw6wj3JCKirnk4ZqBvFN3XPMRqNyNBdfvzQYYHU53nGFrp8uk8Aw4KFe7",
  "key32": "4uYM5JEMHPyxjMFmPFqFeHCt981QEEKgpPNBjXtSxuMCkMzhxUKagmpYUacYoF9FhEb6PuLREPHFtfoBdhsgALer",
  "key33": "2jrfqUeX7JKq8scff2AT7xBWPYGCQy82XaJwhgJEFVRbAcGYsdokZXBc5Jvq7ho3pEBdNSATCucbfmMiH9qngTqq",
  "key34": "3hfu34ck7BRM4NNTRSC3tuPM2y1fiPcsGmdP6iYKtc2kY53maaWmfBZb7bAjhwgC9UFr37NNXsNqtQy5ed5AfS8o",
  "key35": "3ce8vRS66iFquQ7pFL1KpaEW3Gp4vNQ3o1Dxx1ECBGwksvGb83Dq992zc7WszFdfFJ4sDM9udo74mg2eAWPdeTFF",
  "key36": "2WTQJbSAHGbBuAmyhwH9JZAnhZXbcKidGZwZNgrJS9eR8FM6TwsRkGHp1TAXRgeRjW2LUCpvFbwjb5RjqJtbp2HR",
  "key37": "2zHMe9EQ6PNCxdnMKjHuYSFkX51sWuyq4AvKqHMp2S3Rr27UE8QqTReVfdof1MYtzL19y3pVWZciw4ix1BvMA2GK",
  "key38": "2ewoMmyFPjUckqnsHZjr427j8G5WHUDMaN8hHVyCfMsoQ7T5HdyWE1k5oJUzGFC3LGToEVcBKsgWLgeLpqsfevpf",
  "key39": "2vZtdxrHY6tuqJfuhnEK3r7RVLq2vTGECUKvdteNbw8Zn8TXegFffaLQ9DcXvQCzBLGPUKwqz9kqRBPAGNUXbCy7",
  "key40": "4J17kcd4B9Q3Qvb7y1b1G37o8uSpYp3wYQQF4H4U7YKGimhgwTyNWudY9BRbdQ19cPqbkmtdXqqvhx5oYAm4dKbx",
  "key41": "uA8CKKPma4tm9WZpvkKW5g66XjV68KL3ENCorsi3xzkTNFn6ZhMHfezBeh1g2nRFKfCGPFfmjZcQc1uAsykXMwy",
  "key42": "1RVtYW6cnmvtCzpygQ8dc2nQS56Kbf8YReSDSnG3hGk5w5mk9s33RiSgtKNsELMsxH4NxK3AwgvNuKWmnVuh9t6",
  "key43": "3rxn4d2L7tTAeNi8GviMCQY2b7qHG56xEJoYyVgZ5bUHmcJZjZcbgAEr6ikidB457AUiWkKYvFtM6o1459eujRAU",
  "key44": "J8EZQQ7jkn81bYAVwvxGhmT2CSCmxUCAAAFeTcXmsRgHUZvG198XdeT4bgU4Xn6LWTzH3KAXoujxiZggTJnxzSc",
  "key45": "5mRK2RpXQdA8oo9R478je9dUe2oepFXxnzcF2E7thDJp1ok4dbf73mBjgo9RwvRnT2ErXXjagWdNjAyHMgfTTNHN"
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
