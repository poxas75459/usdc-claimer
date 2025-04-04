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
    "3Hb9jkvvUpGNvPj32Mo3Qb87Qo2RhSefwDxMow4Uiy7DhqeQY9XdvpKQugHbq4C7K3i7G6AUzndoBmt9kAUwxDoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3taRsxVuNk2eskg4RAduiU1RAqTHj35HKQh5ZAUXFbnPTMWRshPEe7f4og3ZT5rDwmCGvQCyRWRW3nq2oVjb8Um6",
  "key1": "62bTCxxmisr9sRSkNeLQtvz3csd2YRRHqo2VhLoyCpsDx6dsp7mLYzqf5Fz5TXWvvaoefGDJKJ9kmggr5JCVJsmr",
  "key2": "5PJgmiXWEw81NaiBmk5nn36AWincE8DGqhCeGL2VRmGryFhbVC63v8sS2PaHFteCUMYLR1fWeDqz3B7A7NHkav2n",
  "key3": "8QXBW83ZBTUHKGN7PKYYm1W7d2XknkqiNNhhC1G5KoMcUsgPpW3teU3PTP4FRe6HRL4q9FeEegvZyVCLXVAwo33",
  "key4": "3HwBzA2xfX61gzHpasi5EspvTkwboswh6fsMR4CDzLSVtq418tHfom4xC3bxfyi7pSrN1quJKdY2JDgdPR1CiFXi",
  "key5": "3Yf3bRwVdu4eWnYo5PeFLN8dJAVK65AuJLm8SrrgkqdwzTZjWyHuXZwQgTVWYHAkRK3Q81cwZdENS4kmiQKTMBw9",
  "key6": "4BF3Uy7GUEjj4cEYsrr7VepXsjfgXGdD2F3KkihxoBCdbiPaQciHPJVENNDKc3FG32JLWxQBBP2hQTb6q8xXw2c1",
  "key7": "SY6NLb7d835QXn4wqnsxZZc7t53RZrnJjubz46xjwEHh7Zv67wMLr6HLyGtssA1TNDmAD98GSrE5AqvF9Zv1cTi",
  "key8": "4bV3FjeaTVdUZuF5t8M17A1pGuyxSUt6y1Z2vjZwBxmnZWwxteXhBmGBZpCv4wKmjThx2F6gSd6Lx52wNoGfctjp",
  "key9": "2mAVpvSkMo11ayjwEJhTkzunpcP5CbgCP5xqgf6QYSQV5UQjtLTi3qxKAq4bQKh8DNyXmqpnZfjuY4ZA4cZAs81",
  "key10": "dJsQpuovjcUM2BccDtjbJS84do3NimRt8MEQdAoC69eV7VkbKoJaC5YkSVDv8dQSHgVLZxoUZgCgnv9Zjt9QrXb",
  "key11": "3EZrbsMmUMF7hva2jDsGKF11SbKFjZJP3LYrDF9iccdoTkXWL3YNE65eExRM4ftBK9GkFN93CMfZVDsGkUa3SVd5",
  "key12": "ENQcsL1GbUZM9WATGaAkZy8LjLtmzxL4AKbubQCNDLvDcTcSpTPy7npGdg7oU1sKAgDP68Hnjo9MVTftieZYP6p",
  "key13": "yx6edfUVaDg3KAx5i185B6qwv9cs87M6cGjz3fxch174wRCKf86uBa4Mp8NhgfarhosRyhU7XdhMmyPrwGaoqjo",
  "key14": "3h49VFJ3aK2c5Fm3tMDgshVBGbbfmyVBBwviBuTs17pPTJk2qS289e3kyrNmnv1uwZeNWJZFhpUZtuJgiiWQwayc",
  "key15": "2anPWgY9uPx7zoXSM3SrVc6LpQBZxRrBj4fVHrANEpkmwmxsJMgbCx3hLiCUt9egBmaMGxdTixTgWaMpfZ5vavDw",
  "key16": "51sXqehRzvYegW4vAsm2NRit4sDFqYBqTPPcEUEnNVQ6jbwCeEtqL1MRPUCpbqf4oFVpXq59kW9jKBZ7m4PSy8rn",
  "key17": "2PUq8CrQ4c1TpCsLwARXFsdHfLUE4TiDMY4wvQEwRd1ufovNzknhvceCBEAXHr6yXVFv7qytSnHnshuT7ieTGbLT",
  "key18": "2vJZ766r3rm82MzH9CepVMSBC4Caa2R5BHXDFpDWtnvAR9SewAbZLZtUJQbSgRqp8mhFSzXtymNszzNfRLYRqbdF",
  "key19": "eY82JCNW63WP6rCpboKoXnLehEYLFxH9nkAhKxUqe6ndMDCfZJJ7TFeH3eqQsxVMRJNZ12J3J1ohYWwfkSrcrtx",
  "key20": "4AFe6RqBhf7goYoTrujkUiJX4SxcnHtLWwcYshuBspaBCKf7ca9Dq3msbPMaiEZmSD3DcjCaeEwULqm4ciaLRQ5s",
  "key21": "n4NAE97HestYumdCskm9Zj9TvenpXWDokzpspVAojy87xVVTMcqjKCQuhJtSCWGc2whw9g7KtTctMeSedPPC2eQ",
  "key22": "5JnRMc26qZa9JF8v2pNXTYtF2AWgm2BtLDFWCgX9TGS8TRoCRNbifUm36Tfo7UQuPsC9KRZtYypvUpTzDdbDsMD8",
  "key23": "34TrMhoX8V8utgL6JXFhaX4oSUtbUUMCtv5AwG6wk9aokcoLK8NTV1wSvTz95oWxbtVyqiEacuJbJhwk4kfGmesE",
  "key24": "4UYW7GgJ3QCqWJ1nwjCv6NQPCXJackKnKyGKkLyUQti1pwYFthz5NxS3usaivNS5R6KNb7Wn1HT1toaWFvQrVtSe",
  "key25": "j31egssaYzT9MvNvCvhvr2CSfwv4oq7wTk2w4EC6uWHwA4Dwoxdtc3WDb1Pkd5FG5DitNGeAfUSbd5FZQeXMQ5W",
  "key26": "5pkwzrVpuwdfDkNg2ZpnwopTRHbTWfwRfmrMk7DfLzjghonXYFKLo85yMn698f9NjJf3Dj9icw3GzstaKhtJsWCg",
  "key27": "pK46oU75cJdwegx6kPbWz53w3LrgUszA8yj8fnnZiB3TZcTvePLSoUMgHaZwsubNPJeESK5RzxnvngP2v5bmFak",
  "key28": "2ncGLwe4JV9m7p3VxcaGPk6pLyZewBqd8skLfFzTEZSozbo1PAmurEk8KusLu4R7ddMRFEgdH9No8ECvtszzikgB",
  "key29": "327XEAAjvaEWCzw7ArNz44hLbGh6V11hQWz8N9ZJ62MHKtAgY9NvrDFAZvCrKdgyxouddCpB8H22AjuzXekdMxVB",
  "key30": "2a11rBkbLckEwfxHK5jVqo2JqSbEYXo3mgadq8K1eKZ4ES3dxEpQAJekwAAnZahUW1mdanGxJVss1pETXAcjNFEM",
  "key31": "3VK2fZJrgJWfUJkoYxbh1mYcfReTP4jFdEPiJN3p9jHkF8E33dGSpjYxye8vVVbTAHNS7FHtjVn51cawUKQ2YkhH",
  "key32": "3HnGnKDm8cPmZBaE3YVz6FC9NqBMPDnkB51CQNhxMedeUWuqd6mGbp2JyaUh2B6QR1o9WFqMWpAjkLTvTE5Ctoqc",
  "key33": "4MsGGgooFducdcvSAcRExVbieJHxkU2Kbw6BmpikZyQdySdax7YAKc79M4NntWX8Kqf7UrSR4UvhcUiHARwgRktC",
  "key34": "3TNLqXULyUg787fexTnR6ZmPR8uayub8Y1vMEGCyB132sXpz95Vr2FBvXxGR7wA7sZF8p3ZssNkEKTKHeemHNmHc",
  "key35": "5wvG4JnkAdrn8oiQBbRybqFKhQevr5QgTL5527NA1bCPjsgwk157UrjtaYJ7he13tPQk2ZD74pQj9P1ArumhTgJ",
  "key36": "sGfd7ptTAaUgEPPhA7bC5kN1sE8f4Cu6FzjoE2JUba3hRW3djbwKnDAsswqbSQ9Z4ZUjhrqaKTqdaNifHQPrEjR",
  "key37": "CujVFT5Te9btU7Qxh7PkmTHHgFtAjKKDoXquqzWAidGYDszojx57KMgAyLCtZXwbF3h7KuFG4aYkH1PnWFMhh2n",
  "key38": "6498SZDn24RFUcYBCZnrSFQF8yfbhA4XcZnTm9UjQc1jmpgvJJXoB3TV8CdVoXhp2oxxzZsDMv6PLXrDVLAU21KS",
  "key39": "MvKzeYZWZsgrNUFU5nsHDdaWa2uhDwkXgBJn4V7ZzC3HkamGD27Td74pDCrvdF3UgWYCSb1e2XXEFkaBgJbQVy2",
  "key40": "4HJPjEKWuQcNxyDjp1fY7n2kor8AE3GwMY2aw3rU5GDqZHtDKvmWtz5EmnRoM59k3fGQaZFjkPB1aQGigUWShpho",
  "key41": "H1P7ZEQrjvKttyzJ3hwHQrfPn3dZdHQB7bdhWv1Kv9xsngb9TjRiNB8vgdJz1kkZr6dM8od4hbkWUgJpgHGxd5o",
  "key42": "5Hb5m1JnRaNj7PfH49q9bydKZ3yDDxQo1KabdDSe4dHrvrVy6HQDJWxfJc7RUP5mVPaw8qsmSKFEDALCi3B8YpWz",
  "key43": "4H1QZhPVqeYBQtzQBdDFAut9hfZ9kUkTrSF8ojVTRMtGWaKHMsaHQUhuZaan9JhPsVAjSKaENZtorBuwKym4BdyQ",
  "key44": "5i1SSfPenDLgqt5FM6iACNEjNHinviAPd1xi751mQPFFfRsDY5oEL9WGCAEsDdbaMUdFkXZJTNETUWUAkNTuaLJm",
  "key45": "2WtUV5dwfh8soBbEhEyqrQxa7kpUj1XjdBHMgSMfxGNTFeLa9atucYQDadYi3pi5TDieScoGq1Mr9QCrdtwamfC7",
  "key46": "kYGPeCmDojJDYVvhV9tmNwYg2hbR6zKsBwYnWp6NzLK3BS6CguQzVxceycgWFcE5SPsVMdRU7ZAV5LdYmV8DiPb",
  "key47": "5b6TEEe7ngQHQ25fxWK5ZGxDnkfCqr2fQGbqmNhDBT8fENrZhzsA9TJz2cfR5Ep9aefWX71Vh4X746ZvxbprWSZT",
  "key48": "22taTHSovH38rsL2Pf89xzJwVvDD9jq8V4qzDmqbP2vd93RNVGHUE5F5Z7LAPpiHSLSbL8TsbHML8CKeBytKcRm5"
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
