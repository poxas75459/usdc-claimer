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
    "2kwueLZNnMLBDkw5RZUR5eLBb848wHrRE2k2Tsn5rkF86KudnxL8V2FmNtAL31pRq9hUBhHJUy3GY3FEntpM5JqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "362onPrcAjQkV8ZpRw9Cd1daf57TjdmVnRGgSZQafsMkVKixjnzimbA1NyRcmqkxHJzTJgiEnvBciZeMNDWJDeLs",
  "key1": "3neuQ8iC6rq2DNovGn8wt2aNgYRAr9upCYkjRCXHCbsZNcc68AQGLDjxNwtFgDdiJLhXJzQ6KppMMy44XuHp88ju",
  "key2": "4ogHFcnsRdqacMjiLLpNqXoPJZTajNG3X7vQSLt4wBnE8Y3Q3tAbYm1msrLHvfCWzU7ChURgfcNn9UnKjsoZzCGs",
  "key3": "4uAsuEHBEwGvAKKkpU2u5CQdv5haQrjrHcycPyF9D9oAnN4jenfH13nYGPXHZBEjiKVfNkW9HoXY2LGXy67HQxVz",
  "key4": "4uusenLRFLQXjvtJhyqs3r4JuLZpFLQGaBsDy4gWi2J8hy3ZzZiBCdRrZYdpZFLiPJcGbSk4Fengphu45XvP5hBc",
  "key5": "2EruNgThBktucqWbpPnJr5i1zxdo9ghLmCaFGptKamRSxEZUpYbPdvP6TPc7jLFbDEFYDi4ACZCDD4nh4fG77CC1",
  "key6": "2vdNK7FnqTZUYrnmEuoHbeamJxwjXPZkMc9ruxZy4DBGASkrqduqqJe2akqh7ir5gXXa2Y7LmBkRiN88bNakWb5M",
  "key7": "uryC7rhV6WjevpTBECoFMvDksEtwo9H9e1uLeZPsBzgH1oQnVLTNz5BUxNhqqtg14uKywoJjtfw5mjYz9eY5cA2",
  "key8": "5vN6bbg3AvPmBQTScJ34DeMnTta2ipeYCtN5fmbHY9bdf8zcoWwv8o1c5BmxuaU9TEYerae6AWr8LPLgC2c3imNY",
  "key9": "MV5ENycGgC3H85UgJ8WXWAgfy5uhpjcyNgU3XogqxetDDmvZKPar94ViF6x9cF5GPLy4Q5Upno2ZopYNTkGt1rQ",
  "key10": "2k2yHB8De69tV7YsqtpdZYppoekXsb4ydfmDPKkpdASUG6aMLvcTX1hjMPQBVWKfHUX7tEaqAKmWkZwfGoM7DYav",
  "key11": "5vSF25XV3tY9JaTGY1oVhf2RMaEqHpWLMVZv3SdPokE2ppTZcTNCXEDPymmCkUbhxR3TdXWH6N9Hy7LW8uTrE5fm",
  "key12": "2EYxafgHtLQzFzrQ9ARrDd3Yo3znfSyDDKDKDfJRG92RwePPUdYAWZcUQKsKCRFVDUsxMX5bAwce956Dd7JgqzBP",
  "key13": "tC9sssXCpbdp4o998LN3MGudoBxZHdeiUUjwv8bfKkQ6MRCK3iKQiNBFdAuqTea9praYrSP3uPtuNpgYm9i5ySC",
  "key14": "2ynRoLL7jd22FN1PTmLkhve9yFWy7ueZU2XGxzDNQmde2M49Pt4EXzdHVcUWcgQt4cdpkwSb6tjvazYJCWL58UGu",
  "key15": "3zoWVzF8GVBG6tJMH6uHJQiC4aMXV9A6j9AeZQxgchwWEEkiMY5FuABSdfTzqYraFkuryFrzaUYGmKVCRfkXoG1K",
  "key16": "3t6B8S6q92zhqMyM5ppeVc3TSHeisgFtZVMThDHGdxyYJHTfCZRYFYvxGaJh1EooybPaCztfsnSWb4mHoeJnLKrq",
  "key17": "JrUbLwDRmvtNzrjF4yETH6nKHy3f58ZbUBh1CE7mhkrQZpG4EedZcNKSCFM8ikh3ogGJbP9Y1ndTAaLUhf2czip",
  "key18": "2zCBRmWK2QF5AHAWW4rRvSgfQ2kRpLQhppQKSMon5b8yJZv7dzh6nSwB95fq8K3JiaTSFkHnvVvZnCwbcpqDD2fv",
  "key19": "58Q7LUD4hHnTmaDNjujxuqA1G4HivUW6ZvQt2r68pQoefKFxNqVfnXPEy4Yn4GrSfKVeDT5YFtVnGwiLAUi3QYoY",
  "key20": "3jvDoDoEzCssXcuSedfoWbvLrAkEZvJ28sKubZbmoN9TDuNC7qS5WwrFWxDP1qfzTFVV878WbvkCrFQU67HvrZ7r",
  "key21": "saSDJGRBNEjdTwcVyZmDGsg1kTaYZyBvXwoLcxVGusT5zKjsneDLcZzPaUZoNEMHJEgcoHxxVxWN5mzzCLkMiGL",
  "key22": "4Ghbk7iZ7h3qdn4PxRYg3tWvGYyoACnMTksmYqmMWgqXmysBUwgj1BWzcs4CrDNrbT53zRnwbHrUY5tZfSf5MMdg",
  "key23": "3vkrkjZ5QppFmtCyaq8aM7hwNkYAyKRNy9asvExGNeNEn2V5n9JSD5goShhXDbc4nnZxJB4h4HG2uzEu2G74zHj3",
  "key24": "4eN9top3iFBeho5r1RsYH2ANm6A2T6fCwLU1BTQ5x1Kt4NgJZuYuRQ4zVg1c2vmBjwnZYzwQK4ZQivLUvt3HPbuF",
  "key25": "5SCr44eKPt6Sq4Syk3e8YqLWQzQhDAiEK5X8emLNwMkGCKQpKRnFTopRs9RM22DQAB9hA7DMQqw2hUJnbi4nfYQC",
  "key26": "4zUTRckVjjfzKv2amuEu7kWVPyGtirUKMojZP15SF6pL1893K3QNVKzM6xPb11Tv8NqcqUgdNJVYY2KvyGtwJmm6",
  "key27": "4Wm68ktxneNrBHa1Ne5xSrn89wBScsWA9KJ7y9E9bKdt6HBnw3RPkoKecmCha39Qtt2DTs1mF5WYqAjcpVAuhKZg",
  "key28": "5Zpst4kfJbLkPUnvGFFcKTS16jpKUMPqNKT6AhY5SgKikbd89AfgKWWttfvauPX21N9DSs4cQCc6EFKdw6QueZpV",
  "key29": "3y9bEiSXTAbd6kaCshxuyBJDBN57ETDdK8smVPDr4MNmqPv8yLf57eZAMakjqoQuvuVovZHUvSGakoChNSwy4ncM",
  "key30": "RUqoPjhaTrpEpzKWGEQYjjNUvVya4gHBvR2c6aUP6eHbfGBsczHbiHxQCQDLGE4XtT8EVmaszGC54BqhsuWykbV",
  "key31": "2hngkEfrJN714HDjpRoRATBqxiimAahnBGDvc7fSDToopLzxQeijEsL4wdjcEm5zED1a7eVHvGpuERhSgHsN3isf",
  "key32": "4anUtqKpZZdbcrRjCfdg61SRyxbQNDaq776pBwLtBmJnaZaKUBXsrjHF1PGTcYuehCr2XWbSaTRkdqYTDoTyCim",
  "key33": "HMiYrXN82Ydk6ynhkaQRSCiLeR3QKYWQ5wb569PAZUf5g7ajHJfo5X5nnLDUxpLE8Z7atqus2WAMGnyKvo3whwc",
  "key34": "4E5qMhfHFk6vg8r9AwRBUmMGrVFhrXA7vdR5yf6fYR6Sv2z1K8qAH9kumaG17vG7qQChyu9gWJM72aNDyutQA8Kj",
  "key35": "Aonpr23rW62EQ4RkMYNwWLewCyv14hLui9tQnn8wDvokCJAHMxLxKmGC5s4ZvxuRp3fZD6wjxGj5GPUnrRmWaue",
  "key36": "39iGVMhgwddssbqy7twnvtU3eef42sam3nDUAAXwmj3qDepE7q8JNqitcgd3MvDDidUzRoBu2G5iyr9aN3uwaL9S",
  "key37": "5nZ4t1cL5j7YLXQ5Lid6i3Vvjd1Zv1dT6PSDtw6BT8CzK91Qv7Py74tYKN9B2svTbE3EPn2rrt9Z33eUieXP4Ccm",
  "key38": "4SvgDLNjJRV247Zebf8JuABY6o9GfQjsVGmNmhDgCjBpP783fYYWssDLAJzKoqUWast5J7brb3BHjiB4xJMQ4L4",
  "key39": "KPrghnLeqjMsKTJHntujo7S9PKv69HDK8jWzbMfpyFopMGSBppF8H3SPMZddAbBmikiFzz1PmxWDqCVndykTkJG",
  "key40": "3bVDXKVhsZ3mokeKkemyhvrDbhztxJuj7nTj1EYVemyjpVTrp7gXNXyBjZS1ML3GKQKVCGPqCyZCeDfi1NgmKBW6",
  "key41": "1skXpp8GM9UmTY9fH3Lc528cXCfrcCzjLcTgqgCATuK1c5bcjypWLuq8RCUjuzzzgBqAX6DCxPbyGRy2qwjBFfq",
  "key42": "23dDtqVMq6jD76NUfv6K3XLXdA2NYCMLjoiiLVhX8REhZiSvbCJ5Hf7Jcsvk1gKcKvhxEBeGdtLWzBBuAWqxccSR"
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
