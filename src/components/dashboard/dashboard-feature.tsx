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
    "4ourkNyM3QqfpvfxDSYZj8QxN4HFTrzoXzZ4GfEJu6nBPbQ3kGs7wXYMpzqqWojU28TLZvtmSUcmhzbfWBnu9mNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lysry1hkyEnKKngCrrRjkT65aDD3Rav6qyeQsedWyZt5C4CkRxaJf6pacT1XcSd4QUaKd2rXnArD9q8tgZB2YbQ",
  "key1": "4oKrVoPCsJN6fyujsj2HD7nwne5Gdhau5XrWKWz16V2HQ2mbF5rgLuK47QknL727KjiqbU4s6tbjfbcBa9syRowA",
  "key2": "2dyCFwWpAoukFYCtFi3Bz5z6tZy9Wyu575SdWmhQdth96Kqveby6DLtYZUkYhTw1CWAcNcEE1ynHWxGLvp8XhTrS",
  "key3": "3bhRA72Z8MpodLx6wXTeZVhtjv5MouZLrSSUoa2j9rB1rPZUNSfqHnnYmxm29szGuCNTRC9MWSa68Y4NfGvhB3Y8",
  "key4": "4KYwv5CgC9eE1kw9KjoaQdhf7hX6uyFE4tbgWa38ybebHFq8Kuyz52BR2sReNKQWiWLS2bZSkJJi6bNZKhqEepwP",
  "key5": "3ieYnXkW3UkPSkXvbaqJrDDVZmX6kvpFyE9JZmSQTwPko68FVQDctYwGV6VALXKHsURhPd76owF1qJ1uFAZokiyU",
  "key6": "3rXeLgvidSyMAMwPeJFLejDecgTA45xq9FCp9kqbnAqE9h43MuERsN9JoNwoW6rAwt1s1KXEgbd8ifBU4icEeQWZ",
  "key7": "qTm3z5UF8ARfFvebBDCqU1j4pgf9c9XHfDm2Qxnc4LGzAZ3P8YEFstHGuAKKWkHCqMZcsJwm71Pwu7piqhA35SR",
  "key8": "66G7EYSLhcA4hhDgbHf3vpZ3JwktJoEeD4j6sW8RHMHD7o4x6ANaSxbagn4vqfvfLgT4s71XuBNcBKRvDkkU4sAn",
  "key9": "4nick1pACaqWQLGDeELQwqkqKgfydt6ourRGrB8qLJsD8bH3Va3J13HnLwNsBY4Z8QJkfYP7UPuhmxmuc5NDaEDa",
  "key10": "5LAtABJ16JGWREdBBbuPVYRWHAjxaoBR1KDwsbjAKDtvuUpHVGUMVdtyUZUr28oMJvShs8eg7xnU5XQY98XihVXQ",
  "key11": "5i4qq1iNKwCG2cEmkmUkv28Rh7PKjhcfdJUXSwxvHnR6ourQxDAyQ49FKSW2u18gTU4ibwMwNVZkzDMCaDAHj5SV",
  "key12": "4ordVywL1KQCZGBFZv99A6nQT3DbZnZxC7aNGT67Q2AeGePKL5YdCd3Hk9WCjGwHq7vFdbFVXYr7tShxjtJ28pmv",
  "key13": "5BJ9wwwoVknHCXjE5YRidQnXCeUicfBEYPN2tzetNMtSj5z9GZ8XhjkotQJVSqCJJb79nuuxnHHJHchm7d9GFYV6",
  "key14": "XVKfr3uEiqAV5C9HfCGJ3juJPBNMZykSqZSWzk8JtgxQQ2aJJZrakmAUi4qYASUZj2HkhLFciAXqzbkTS9ZPpyn",
  "key15": "37aVBUHKU6EzSBhW3pLiu3M4ZMXUFDRwuK6s63aKKQv3TMZ8ziwNiGUdf21VpNPXERB2KEZ2PkrqwodQqu6VYs1p",
  "key16": "5RjV2mbavCunV2w3wFdNBsxMumt8S8ukqW47fdbRfY1nUSaXAv337zboBgXpcgDGKsnuHqbvN1Rf5mg8Ve3HAM5Z",
  "key17": "4XsecMTHbfZtjmH6QqCys63KxHcRzJpHvHfkrvtAjbVPhdyDFjnL8jYZTNowQxKYArJ5LDqLdbRgxQnYNF1VLEK8",
  "key18": "3jz9C4g4gtTKwBJtndhME51ebvswdr5tmsC2fB1EvLVA1uhcofe8g6hozZZMqeWueG9mrswfBv1ftydrahTSSHkX",
  "key19": "3TTKX7fqupXMQhacpX9gPBJABSxC1WWU6ijqZAJRXZdQXGmj9EGorELQYo1LKKidY9X7BgpBqZ9dUN8ynqXXyFXY",
  "key20": "q4XEUT6bxdhDBkpJc91Mjvt1NB1pHKb1Ka44R3yWsEeJJN1S9o8jBVvbuxx8wsYXFKqiaLXkRUgLBxDPRj7n23x",
  "key21": "Rsb5CaHKGkEEK9jZVnr7QRwSQe7Uk6rbRL8ghvgxpGVqGuaQ3ucAE7o2heKCsYWAm7yv2khigESEpm4znLjvLga",
  "key22": "4LBaGiztA8VPeXVhwb7s3ow9CBWFg8Zw3hfSWnVSvTg3bx4zbtGo8cDbSS2cGBpFAnYHrbP6n4cNEHX4kBjdncdp",
  "key23": "3QueTyWNa1LiKreNrp93xEeuAQg22UYFZs5LBTihEQ564GEcJ764J1QNb8uUkZupo2NzvLL4aAh7ooorHqT4i1dw",
  "key24": "4nCJbhNCHgbPZoHT5NBArB4eYjHAN5fe4DJbca5Ff1L7iZ6qpw6zxtaHxmhepmyDZwE8UCDwXLHesKh2sGhQu5t9",
  "key25": "2zbfhkghgyp9akSaPDFkLbKHhZyRqWFoPU3Jfx86Dd6tYvVjps8sWJU3RqGkycgc4KUZteJkAdiEiP1N6vb25Nxy",
  "key26": "67KRGi3T2itqwm9ULeofKFXNywDaYje7S26FuzGp5JbvtkNj5DqBbfk2Y9K6t3UV8m2vvLT8a4QTiN1eZTKNw6F3",
  "key27": "7oAWET4Sh264Mq8eUq3nPfAmG3pawrajtMCjTr4HHhNFA8pbZRAkSg6vZHKqSgxNfHppDY4T1PRUoD7sDYHL3ZJ",
  "key28": "2G9HQaC8Tp84UgAemG7a87cmYT4s3kGsdZw8g6AuEdkaG8wG42CstqdDRgovjfE6nh6wAmszgv3kkPpHBvs9kmLU",
  "key29": "3kgXms9UmxUGiwRqCFApyweFARp4xvgVBDiYmk5HmEcY1RiDJk1RczVVeiR86vyEYqRXT9NsiY5nDKuCp6xmcwnt",
  "key30": "5dQjEQJNYA65yh4qJWRKXdye7rDzidw5heZwUNFFxjomjPUBiW3VpBkBw99WFdh8iLpYrFgZp6v8VtoDDCWHaBnR",
  "key31": "4Ldn9t1iLvGDPffP5GtTHkva353SEkuMwL1F2ztcXrFLK7SwUsVxdqRAeMHcBb6WEMFiajwDbwWNJN8C39k2A7Xb",
  "key32": "2wzbeC5cvkjZ3mnuoumeefsMpkiES82A6UwPqLAc9oVwSwrFCqaVVhQdj1FTyHeLEiTi2rp9UzeW91S7bZZCjS85",
  "key33": "5yEWUFxPhVzr32bt5fQcaVb5n6KXnSmfAbkMXeNcPJPE3s3VNtG7bXRvrsjUp8voTohfyaz1ejwfSuU8nis5q7Sp",
  "key34": "LpzcPsmxVGCbQ9F1Z8Hqqf2aA6XQTBqjdyuPxLDMUQwfQZcXH79BhFNK6nNDQk6qP8fQc56BXppfTm5mbvsj1Ei",
  "key35": "41E9YtGmmRXxkHUb9ozYz8X684d2k6Lb4KZpLZkhG3wdp8g8s6c2HURg1UEaKnX7LDsGUTs9XENm8ZjGyxxfZxKu",
  "key36": "5nvE4GqvTsgCEFxw5TQyQUE4FP18Ym2nPY2SMDLmz6McnoESRLB3Gif16YN7jSmTqYzNK1zT6VUxn6hm9ffvyw34",
  "key37": "3AegmHykdMjq2UQKCQwjKoExUYRSJqxejPL7dxuE6c2JHVzQ4CSqRwnxhX1S5KrJ68TC7R2HZ8JC8PgactXnNYXw",
  "key38": "3YQ2CiDRjudoAUQ7qgh4VbvzgDHEJeDEqmndeasMtdFK4maMTT3pCKPdeqyyT4Qm88WaGMAfYKknrBc9vmtjySWS",
  "key39": "4pM1Brak6i8iR4q3nUL6NgaPmHecu6A8Qr75CtckbqcXzC7iqy8ZDrZeEvACURKTdvPU8f2zzKtTc43G3S82oYAR",
  "key40": "jg7S68w7cWHv4N5rP3cWFmB2QY6NJhhZnX2nZqmKB79wj7qArtm4S3uPBTwkMpd9fzwtj8byrmS5XLYqdneFckK"
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
