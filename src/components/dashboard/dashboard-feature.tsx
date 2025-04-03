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
    "5RNPgJaiRhQdoLY9iCviY2rvdBtD7XtGC92PywWF4JRPxR3DEwPVKAqKnT21y7Tftpx9cPtJMitYgLuLE2CD6GYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C4KQTMc8oPR2GyVduuvTezfF11GALAht3GjxKDo2wAnLAn4hbQ2s6c3XjvgmXBjgKNBgxrnUEVke8uJ6upJgsYb",
  "key1": "3Mhfd7SFyYS2dGSMw62hF2hmh7MwqyXpm7e4tzmguhWpjYSB48oLk9MDhnM28s91wzg79YtyWi4L7LRzRojDY4ut",
  "key2": "4GtiXraS41cFyMyRHGw2o1JoZTnaGABcDyAaeL6NocoKPhLSMPCkafpRTAxqeuWh3my6aDR8pFfBRn9m1NyhNdW1",
  "key3": "UDhiLqvNoeKo67BvfooJbRjuQFPe5sLxDp5Cc732enDtMT9NCgkDzYQ7dYkjARPEFHS34hxkThgXFiT1WKSBNGJ",
  "key4": "5aR557qjbpjw9PEWkXrPPqYwpi59Xt2CieN3AEu7AwdCuJVQpxBRm1UNRGAqbAN9o5RYx54g9t7Po7BrHrGkpHAj",
  "key5": "4F4zMiCA6uuwvZH1ZqsmMvXEtYTkpipHhe3qBJc2bpg8jZZSsB9UegZsewHigBQQx3HArKvmWE9zN5LsVSbqiNix",
  "key6": "35iKcB58TMrKH2GV8d1bR7UMcJFGVkkZXqyapfqZf5Preqnmy8LtAHLzz7ZBzFUuZ8XcrmQDGHrJDAWZnDZpskWR",
  "key7": "3CntYrQQ8DbHx8q6XnSD75wkjnFEm1arPepMWdusegyYNWp95GEaAcEDn8JL4rKDyi4fJSsV8SPxGRHy8STS7YX6",
  "key8": "42iX2BAapU6D4yjCk1y56YPb9v177khC6ranUNrpCypp8XJGmWrH3mMiwJexNV4tpFPX4kVVyRodq53iuvdRe9xB",
  "key9": "P6sjGC552bHbWnSVAWuXzQaZKWTf2ZuGQsEf9fWmX7qLhZqA5JvjeJZKUTMwsWoGZSCkttvc7kWE5PTgsSEuFFw",
  "key10": "3DqpxTtHT9tyzJAo6Kk8e7dB5wDj3ijhNoawh2KD2dHEX8kiQNjBwgYA77zoYtnFKTFiYxw3m6dW1fMYHe5r3z8v",
  "key11": "2ZLghC9W5jAQ5p8PNzoEGEbqNcmcYeAJeuuggdazpGsndkNAGUKZvALeNqVv1S5pytPhRaGwnaZZwxuCvz2ae913",
  "key12": "48t2b7Kh2L4UYvAYBftSnDLCDR5Pzny68GjTcEd9gShoEQqa3gVmeSdeteHs6ZhWHdszgqF2aGUD4C6wWN9yiEyE",
  "key13": "sricnDo828ZaQsaaiRc3pE5svbHSjFYAMatZJCY5YNfLG9TFAeJNmiV1Tc7oTGYai9QqmpGrZB6ukf1uN2gY2uK",
  "key14": "2xUGsR38BmFesqvP3tM8VvzzBRBoMYRw5FqwLQ8FJEX23HP2xPffgN3e16RkVM3tbD9JPDQLQVjMNmZiS2hFocvw",
  "key15": "3EbDRX2LLUoeT91aaTEPHyrLJurAhTaH8ovPf5rEypJ8a4QUavHNtVcZfJYd1LxycqmG4HrGa8bBuUTnwXJ5LZgJ",
  "key16": "5RPKLAE1BZcGKbssNrLiwKMGzCRPZiWGSYP6KA9jz4iegni6QS3M3j8eEm4eqTcV3i14WSHiB9KnWoMUZCt32Svo",
  "key17": "3jD7McfxJpURCKQ9imxnesiPFu8fiLr1ixXkeMdhUu5JqrLvKBr7p2b5WssFSEwUTMv1cSnsiGrByLuMcwY9PW7i",
  "key18": "5x1SmviSBSJ1EWpDkfT5RtGesKmjA9DWoRWZEc6bqwisHJfFoMmLJWWc9tYny5mgtNUEUzYmFah1sSpj8utscqpb",
  "key19": "3faNS9TJ5wLuWynKFmRrHyL2iL86QqgLR6Z14an2L7d2zrZbQn3ZJCHdt8ckg6q5NH3qB3v53p5gqfAE2JuxAj8g",
  "key20": "5YuMiFjVoLPYHZf1XVFRu47LxHMXhPPaYw89463u4u9kdjxE2CdWYAjdbZ6Qn1nwRcm8PCk8kZAriFLH8e3yGna",
  "key21": "2eMEusQQmhMhQkXi8NTMmnkf4A6cTQsRceRNXn6doo778wotQmWrRQRYFgkXxKdv7H6HKN8ZFaWMDZ5bsSz3KvFu",
  "key22": "2iBmfdtDXNQH9zZMXQCu92YxMKSqv7bGiqZbSUx64o53RMu4kyHJZz28d5DMqN7P9YXvr8hi5YqZdDqVZz59KDgt",
  "key23": "3tpgcZiUUgDVN2t3a8G3Sm1i2MSSi4UZ1ZSi8MUWMnoYPkDsFrekjyxFnkcQEVGQk9K37WAF5UgafnVGtxbxAaqv",
  "key24": "B5StPqGXtxgQ986LHz5NTdjbMvcpLHp1p3g4aDxap2i9uDgFTCCrK3hEsLhoFnZ7fPe6ZiS58ww6pHCCUu3AFft",
  "key25": "3gB61JGVhBFUqpRkG6oac6mvLeWawTC96tTTEwcESFTCHAYz264X6czkbbKbcFfnheEfmkeLRH8NJk8qqW4vAi7W",
  "key26": "3L6Ydg8x51ghuhVRoFufSGMnX89ZUrwrkHbpPH7X18RfwbFi2daJEojYvDa5hRFsgCiMWZRDS8LnXXEqSwKdmFMJ",
  "key27": "5a2mMEcBQHeK5rY9XpMzed3VUrC3kcijHY7q6WamJWjiDNfyvWUER79omL7SKc46EwreA3o6uhBqWChVNKCZFVaB",
  "key28": "4qg2ZgqiZU4TbX1WYUQ6Mz7p28qeHgpPJyz3YASGQm4ksGermga8UmqbhCN3wrAh2tgAYp5wC6nyLWaC5sSsyhan",
  "key29": "rfzAhFPNCuxoc2AXjrb8vWSgFVuiVmzxQmjyXHK5aQpUCSfXRAfju1DLht74LTYNrBuUgtPDka4ULA2dTRngjjt",
  "key30": "2DxfCcT9yzaczFRC6DHbWpFwEVxqtWx7D9EhRnfaEu5arGnEc9Arx3SSPdaBbvMoMG6hVebyM2BvyvHwsJ7Cu5Zp",
  "key31": "4qjGUAWLjZRPdqhn6obusdHDpyPS2QGMdgmaySkgzQ9LQTbbNPeUxkhkUx1QTvsurwWfBAi3KCDLYDmMwUqk7Pg2",
  "key32": "5vjkMsxz6DA3Wx4ztrPS9ZyzZAcULAj2cshrDBUrhmF1HFG27ooUiWAFcjMGYSSdXsihT6QJT8UauBoGvBkdmLjE",
  "key33": "3swBkDcd829c3xgkFUrUb2Tvkhn16re4ym8uyWw2EThkU72PcJg5BQDcDRmyE4sDQivGEZxqDYM5i7baSzv2faXm",
  "key34": "3ARtNDQtYuYVfkj7auhqr8qJC5t6Z8hejx5pK7LCxnZmyKrnEtz4Ff9PNyrYgfMWQGzVfNJ4fqvPXGsf1xiuEU6B",
  "key35": "5N4vMXSpXKvYEosApJ9u2jeWw6an4XEnLR4i7htbTHdfWtNx7ibmCN3GjMjNGh3xSh3g6EbLi2uQQkg4gVGzzxYx",
  "key36": "3xXGwgfppY1jBAX2BvyharaqTZXbtGKexWdSSyNdPjadZA2wWdTx4gKnHw7fFpAAuAwXTQrtLsu27DqjpMgFswAJ",
  "key37": "3GXR3m1TyPbFxpN2AvE4mwebGxMvvwKQFGZw46Kamd4cRkCQVQbRdJ8VxTQziu4Y6bNscDqT5vLWS4Zxv8xX3gE2",
  "key38": "2jHjqCPgVce2thYrnP4qWTmyChJo2Dn1JErk6kTRzBqPDkUx5eCwaRoqaWkchQBbWsDSgNvtSYytnRbTctPHYydq",
  "key39": "4r2sH5yGz16m4DHE3uyEB2kuZdj2c6C8s4ygtw4cLb1rF2NxqTtdRTZxS9kvqY5ShLMqHrMxFnhGYXwCu3AusU55",
  "key40": "2KrimBJpkLrXhUbxTbsLXYe6gnKsFBSdpWKQRzwtNBPxJhCrRL8S4FVduaeXciq73qVPwKHo5ddr3SvwV8Br41d4",
  "key41": "5tHPtgECkVWeJcShvWmFBj2VXZUqcD7nFZ1QxaTiUH5JaAdmcu7C6GijCUd12Z5ZfcLm2koNWic1NwjjXo56b6je",
  "key42": "41ZiPgFaeaHeqt1L8X9KpYvnhsBpkCHqD6aEjGLnbgGz6VLDNMSNgN9UEKTygFfTqw4R2ceauRmTwzrpGfaapjxP",
  "key43": "Xj39iR6bL1xyLSVCZL3xR1PNBE2V73DcdaeYMiaxTy7DguazZG4EAiRRU3Akm81eFwVVspYuuGp21k4XFTXHGx9",
  "key44": "9VwzEdfMAxkYHbzkNiH8QcVEFtCSYiyznN4AusQckoA76z1Va3g5Xhip1xmLfbBopx7xFWyDUCWU5LiXcF6Cpzf",
  "key45": "U4a9jyRP2uZvB5ZDvVAFmH3dWFbUwTm1oeHAVy8eucUadgRRvifYQDByXomKXKZpntVYmAcci3HQkZs8YHPtx8o",
  "key46": "4biuAo9Pf4dC587XNMkreyukqCGZQvC7Cgi25jZkPFqZY9jGX52cppbHswemW9zC1hXisn8tgm5oBj7mwUaX5MmT"
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
