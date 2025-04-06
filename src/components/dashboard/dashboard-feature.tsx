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
    "26UFdaNDwgT6QmagMpvQSTZ74oV3C58ntYAMvTrLnDpsasWD4fsPwcMbtPeBS4CTf2PNWRS5aXL8fdC5WnjtdEsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VftSXJxXzxCvR7HTFc4KZHiBf7KgjjdqVBj58CtaZjUMbou3UG5zTzxFrKfLyxhFmiiidXcP2uMZJv6gyNS3Rt1",
  "key1": "31U9G3cPv5LztCHpuPgaLAkgNaWCFhXbWLpUh5tNMowk9EJJZFtZoJA2V2Uo15JdRm8fPwAcM72KBZpVzn4J6enC",
  "key2": "3feLZ84ZW9CQKepyHc4zwT6oVA7iouNXkMxkPSBYaGZbjDxznxwvz1okTW5t37wpqE6RyD2AxvtAboG2zH2bjZ9Y",
  "key3": "2f5dnSMS4EPoVc4H62PLmsoaCozDeZjEn2ABU2FKai8ZxoWZeTPntDbPxAx7hqHYVhG7TJ2opZK4APD3Xt5vNA26",
  "key4": "5sPqeL9tvt8KeMxpsfHtX5JSjkSugDiDWguVpPGzTazUhKHBvWQbAKej4JbwAvN3FseCCTcCUd1AuqrYXDxPuCjX",
  "key5": "3LZtvnDensgjeqb6WQjmFiqvfmD9f8266ytW1PcQxVFKcb8xto5sLqTFsN39JdmL3K6pqR7fL6LZ4iuU75ZqBJBr",
  "key6": "3aUeNz2UE8evTbK352C2pn8RMpnueP3ZWkJrz7KZSsUe9oY6mvnMLhGuiyLArUs6ZxAYkF5vrL9n3i71MjRLVkNq",
  "key7": "FebbU54nNTajiGAdbh8gQbxEjtLGtfXNaujZvau3UHFyQsj7Jtv49ArGRwi5RatqQfdVTyXdtHDBaJZtEcqmaD4",
  "key8": "2r8VZVyfrY9wjjgtijnbLrQnikdsj1H71DqGL5kY5iuDrhCUHPFH2cnPU8ZTN3JHXD2oxUrJV1iRzMJbSQ7AJuuW",
  "key9": "5S2zpzApjLZqxs8ZTwruuCRrx62XpEqVNfTJTecMxQyaPu2TT9DyTVkHgzenDG9dHtwpH6XhCYHuTiZTTG11hXdP",
  "key10": "3KWajouDcYAmvBsMq4doFtwamkK1niD8X3mmZdaPQqPZVYv5u18GXCf2r1prUdznM9HWB1RX7CdjAbp8J9eTN5m4",
  "key11": "5matqK7KQcuSGmx4PSopn8KjDZ9iEpTnvriXf8ovJvTHcScLzNu3t4vxyR5iDoToQgFqzdNM7wvLSBjiw6avHG9F",
  "key12": "3SFXUg3Pq8zVzktDNWmW7R6qkkR74PEqb8zAq35Xg5dMvpxxKrZGhhcwyo4LhQVWBZzARQUG8maDVRBqYxiLi63z",
  "key13": "3TixqZWA4YA436ZScZPE9YgsyCqpAgCFWhiPHdg14QwQHFC1QTDZzmKBtfT2VjnwdNFt1Nu8Vk3KVxjm5ghjAi7B",
  "key14": "n9B4eDde1QWPFmJPgoiEDkPxihXXEDq8uDNZqxzLdAwTncCB7CXDKyfZw3Smt7uRyst64zgse8SJsPBj3KcEwMF",
  "key15": "4fNfMATmjmLdh5TH9DBcR5ZGkMmSTyrSBTMfxRoTBvK5symK76jhqx6M3Lr89AHWaqWSxB1DySafb8AyXM5o2iVg",
  "key16": "JQXCHmteWg8QPZryzb3XuX26R3JRjRSF2GzDrg9SR1yqQdjXU9J953vNboMtKiyQS6m9iuVkCGTCEBp8EohwRVq",
  "key17": "3WAjHubfYvQf6FFDy3aJAsZ5ANxU3aFcYCmLfe4Gb56MeSPJ96jXRZE3rqaSXp7fZQpf4aGkDhHXZTVD1CkauSVt",
  "key18": "4tL94WjfqpwLXFPT7mE5pFb3aVtFk5xvMcnQvfM7nRXbuBULrzeNqgejPZRVaePuYTVC7N4EBV9jGZebtCKzWgcF",
  "key19": "4hWNB4TrpLyfPg7nFdgRdCZVvMiLuca236GypauUoBHSrdGyuxPV8T57oEvxj6vvKZRbF5AWjKdNSjcvf5L4N7jQ",
  "key20": "4gQfrUmw297SLQMucZX6pWE17KLmxc2iyA7r9zSokkz15qXQREES3Yzc4z6UdWzCeRhMhSCoJV7dFQXxJmN1vs9J",
  "key21": "3WeFXTMugnTMYfMYvBhi4kM2JLAoRkNi8Xn8PMyh68mHKWSDBbW9gPBXfxByZ9yhReuLfgvrh3hLhqLQbuUpnAhy",
  "key22": "3rFSbuJXX7pqU3eRhWFEax6B4jThCvtbjsrZcRYDi2HNaKcoUXSPxTCvhenf4kdBJYNB5VeghXogsju8mfWSMwC4",
  "key23": "4GspLhCp4bRThuyhJzwPa3dKDscqBNYMDDaREzbpBPSA78t5iqb8433Wo4fJs2juaLqpFxSUFNgWUiq3ega3Pfcp",
  "key24": "3zTMhTUWxdXcMDrTWeD8KSCqWVZxdA3htJZ6CR6omKfAjjiWGbXvB82Y7qHBzX5eehehudy5vhXPWuZYWNT9Fdy",
  "key25": "5PgQmZA7Tfr9geqAerEpV7gpQjiDGngqWj4ENnebJuLFFLTya6JHQH7YZRP3qYoeu48ZNFknsijRPG4peNP4GrKP",
  "key26": "5czoey17xQKL2Un3w72akutK5VqD3KzdQe3nRQKqpH2tYrcv8U6NYwTDFEHbJwz6KkQvjZtnwKemN8XzQ5PXeVn8",
  "key27": "4Kkw3376K4Hje1MriGTSR4ySHp8XM37gmZuXu3eCS1sAm2zALt1PUhtr4UhZJdnRZcGVY6eWagy8bjgJxs5ZseWR",
  "key28": "CH5R5RrUtujEh8PcihBBXt13eRDvgtNgpNZ3MmN8UDwvdsmPzC27L1kdC656YxNFFUN4rCYa5FJRqQzQh6TvbTM",
  "key29": "3wmGnuvv6V1CSmYJrY6sjtS1VzY2Tmt4fE4peu6FBeBGRkvWY78EhFQwMBES8DEQW22bcTpTrdrndmgHDQ9RcoCQ",
  "key30": "26fer2iyKhUXjCfjiZBq3646CGq55EsAJhc7ivWtcR952VebaMPZHCTPL5RYnMqKBK7Ka5i3t1EFhg9kRKHhschH",
  "key31": "5h3Ln2LCTcycjmmQdZAdriWVh1z8FxhKU2cUUyDR6hKyQb9oJcqWNQW5LDX2bneYXAJWU7osD1HuEBhEwvgurkan",
  "key32": "3Ff6tfv1CPDpFoNaonUDj5EAH4RcsQUSC54RRr9tpjhNfLDhv3BuPnn5mP4Wpv1qF1i6ggU16ByUELJ9E9F79btb",
  "key33": "eBWcr6GPkWXRxnn4jqoYMwdCWgmzjysvvxDhGCPmCRtzGf3kxytAi2zBxyPzWWkvUsKFNEeb9cHRP18uPX9QUpU",
  "key34": "5WeF1shy2vj3Fqzv4wNJvNMqY5uX8z6xUSuT296PRZYveUszgTDk5PrizcUdHxz8MeBM9bZPhmiX6L4yKcwYb6tV",
  "key35": "6eTUu5a9yTC2dgVtqxzJTaHuBaiXoNA5F9HisJpciuPTaMVXgvh2Z3noVUPok3bFZfzF8QBYTSo3RopAk759URJ",
  "key36": "31GoTiKpjNhVYZmAyHjKSR5KDxjTR44LfECp4UqB69MHRJcERCJry768V3RD8VQifRSPWD6yRALVnh1G3mTjGwjv",
  "key37": "39zKXYCUjwpAHbW2AUEmWpGxBPDRHd99An8DUMtS8GGVaxtxEj5AA4fVUuarpj1r5XaWT6yxeB3P1LCiy8Pgq5Xd",
  "key38": "2v866v2LYVWygfM9aoZsCwMbSpiswtTgua4urZCSdU6Q8Q4qRBtTSHzDW1itoQgQPecG4zjxhVKvL3zN6p5Eoe9b",
  "key39": "5wkcRtAbWCZfnyZXHFkoUZ4fuSEispGcbP4i6UCKSqwSeZhf2bnCEedYPsCqMK3eyo6iq4Z2cL6kDiFFYb3v5g4x",
  "key40": "FTsycRggcSJfhLFodkwovnsS8fZrHTKvqSWyQ7wrcdHbDXMzkEnn3CMC6SDS8K9ohcgekH5XsWeggDauW64mn7B",
  "key41": "3mdJGPTsUuin7Mo1jN66auMJjgnxipeFY5KpYsufQHYwR5a4JwAjQ7EBGQ6dXLSwcLa1zm239voYnRJhCagJqUs3",
  "key42": "Lioc18p5f7d363V9V3mkvq5sLff3n2a6kQPHx6VhRSFZrZC37t1JPa4BTuZ1Svb1YEBAtZwH1WSdSWXnk43qJE6",
  "key43": "3JwdNRVnuino8LYcNZ7ebv64D6q7PCJ1qRRAqn8CRR21FLnLjeyWk2ZuV4d5rZXMk9tZfCp6cFaHQ9yzVdwByXPr",
  "key44": "gb6GYPanpkkypPCyHDpQsQbeV3BxwhLxq7jy3SHZ1tnQPVkzj1U6dNw9HRsse1tzukhPgjtvg8jMq4SbtLeDs9x",
  "key45": "4HvBeH41u6hL5VdakKRiv691yAr4o31ncaJ3jRBTpVuLFcCMiRAeqNU5qSxtAypdB4mPBUCEUwLgZy74FET4bCBT",
  "key46": "2mVCJvS6cXaPJsh8PJp8FaiARd4fsmzc7wMcCy3wzphKp3eYxaVJtJSeTe68a5vShaGoEVC68HwieefGaMNWrh7R",
  "key47": "4HYwm9cSrnkBAAU82cntYzwBeMAqqfR522vKafu7F3t7w2h8Wm5afU5wUEzZE7RWC9F5nmCSq5zPe8mwpEcj1Mze",
  "key48": "MeqdB97tjSomNTjJvNHJVQ7P2bWkkr9LwsVEBnB2xACRXHiLc6LWKnwZhEpLryLUMS2S3S5tbXNNHdVji4JrJMN"
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
