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
    "2NUBpJsSF5sLnjHbYT5EUiPAUWTjnniYkFhzuzqapJpNZ1BKBYj4cd8RCs8m8u2Ddq1Msj2uQ6GChWpKrdaYx6FH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iZuLQCzyKaj9yfjj9oTPtr9bLY23cfqgEH45RUP13b83mp5nYW3BoaLvn21AirNTu8LixUqbqPJ3jHKWt1APo39",
  "key1": "4dQTSzvaA3smxZvKh34P6swkHDSzsw1EfZz3mAb6uoi6rGxHLh54xjP7jZ6FeaFb2mAkMJv34qe1KDP1dMCY7Dd2",
  "key2": "5RRkF6zrAp8SayF18Qnukwbajreh4LE8qnnQKzhMNCdkzPicwSMiZeNmTSkvSg8cTs9qLFn33t2YsYNHw9AkSSQA",
  "key3": "5vccb1KLcWTEFRdzA23jRziQ6bN5e6UwcdD8227DZQ39oRuKQY9ZPR4BQNJGV8mddph5pEjVfMANX4HtcXa9RzBy",
  "key4": "rZXF8fUBgDpyj7CHwJe8grLE3Kb5rtPWFih71X1DUzxLtau7MRhTqiWBaorZcE8vSpd2EUFFMEp7bKa9UgSAELp",
  "key5": "48M83Sf546nmB7t2GiUYMeb5hA2ZNKyiB6UdviAGyTqqLzRuXpAfEAXftH2dhyjBVBYjZFK8QiuDGBQNkSVKZixG",
  "key6": "5kpdFJESVUUzYb3mmmKG4CmxDLC4KxNooeJXqhDUdNf3XnnrpMruBo6N2ZG4i5EUjkRy3Ma241ZhhyhKyPfZA6UJ",
  "key7": "5uSdrVbXzGV897RHoSnktXRRacEPoGZtPRdriB9kfXg9g3mpsu4jEwAFieYuch5wni7J7BqcsBt7jd1n8vPe89Ni",
  "key8": "4EfKwikNZ5p7pb4e3TS7JN6RB6nEbihzpkG1H6LuAtxEzmRs6rzNH3o3hbXKmCWJE915Wa3si85zzgzYufWmbBNN",
  "key9": "Uz4p7prmjjXgpNyik19e3XgVEf3Ew71x8XnLXfiyDDRHPFZrZJG3vS3KcWJxsQG2pTZf5MZSLJiSdXAdjAShazp",
  "key10": "46qbEYtuyy959qy4oufQP9DFayu2FzEZNyVqqDyUsWj7u77z6fdgkPyNBqP8Zj8rAibetD7fmMxmb2JpVRKKkFr3",
  "key11": "5bVgbVjknG3EHBfndFcL5VRv2mu3hnC4uAxCDJbMmFxiGfS9JgqcnoyqUBXsW2n3qzcRATrQJvJ6HNRJg5xsxcKY",
  "key12": "3giPzuLQVP9z9Tv3hjRGfegv15ZWiFTGuLtAzG5QS499yD8FF1sjkdWagEep7ZQT1sC4SaggBXcrow2rMKxxYvA8",
  "key13": "3tinNY7PrMyPbWsVLSfydsair4DqiHt5TGAsuWc38B9J5K9LJ2HgHkUrxeVyyL92pLU14BvwxspL7eT7gw7gP1ar",
  "key14": "B7ux7gm7zdipWXBdff4rchhXPkxwF8LmWYz3UQW3iGfuTE4qDDnyDgadgWgp1XiMxd8ADNx2rPffwqBvvSD6PdR",
  "key15": "5Hym1EPmKhkyYMopMmdLLBC4QMbvHGnJFW2YDMDXmHyrcF6cMwei2Pp1yuuDD1PY95kzaFq2h4gN7HShmC3ShXSn",
  "key16": "5MAjeGNLbc7SphshwR24WXW3MypZupJpuSuNkW82czJj9DXrzy5CSfMn4FnJJdsVM1pwdJVEeLXPCKrJWyyUJaFL",
  "key17": "3yTe3wBM4XWiFzR6nNmsoAxFRbaZadiGRhHcUMJ9EsMxoo3cHr1pNU8QZk6Hfg55wcPg3owKq2DaBbEADi4ZnFfs",
  "key18": "619e5PW4ttiYUWqbJj791bBcCtPHNsfv6oJKhBRC82qe6VGy6fTtXLCn9pzCEzTJsPV1UTD6k6hFw4qt6C52QnRR",
  "key19": "3jgSkqYTn4uD9ujVh2wLBgoyF1zg6E4rWTioeMxJJuJVseQecdw6Yku7XCS6djybGji7A7e3C7StVCqWrEhx9iw9",
  "key20": "41RK7gwEgRgS5QvTXC7nMZZp7dbudC1g2R4i9gYJf5qRPsxsoFb92kEspab9Nei6aux746mQAQ4FYqiBEZkiJG5W",
  "key21": "41LagD9R8YMotiUNuJ45FdWy86e4hSSf2noTMUrYTnYzFSopAeKfYWKiTWfqwW2oVKEn7jG9GHKeC2yfRE4HqUJj",
  "key22": "2AJsaZMu62u8X41wcniDzrzhMz7dynkceJ8dELXD4ambsRkFXQqP97tD9n99vfBWanNimHp7mozhHKPCVVAETf3X",
  "key23": "4hr68gFWQGsC3U1H1k9Z9DTBDU3PGm8htcAJ7u43GwL8NDDQeDZs9nPGkcFJW3B96Rg5t1PFFoerHCjAsXqshM4i",
  "key24": "4J5Z5YUQ6KWdF1ojELmEPuYetrLwkfMrCrxtUYFyANyaR175tpwZRSobwxAjmkn8qqyYpoPNgcfkFNJabQTvvoGy",
  "key25": "2RXwHgFeBL5PMRwM9aXHnNbUd15Tpt5nn5VXQvhVwcMo6GEpbGHkNEEAUh8vvJMrsTvyjrf8CuLK2VHhJE37F98p",
  "key26": "4JEv2QA3eGzz8EYzSXW9vhBmLVXL9ztEQcDnLqAwi7EXqycQu7fsVdrAmLsiB7XXRQCdfhbPNDNcak2D81nS419z",
  "key27": "NzJHJfsrVzCtmB4W6dQZXrZuNhx65XMVCCJ21JCAsuaqNxSD2qHFRRU2Z2bUpdTXaXu1QktKc9TRtC4soPZN8i9",
  "key28": "HCR5Q3mezsDS1YZNqGoiUEB4pZCmEtbZvJcrpgQkyyC1fmStajFj3jmQP2GiuA5Sot5Gj3RLkN5bf8YKrTBTBDA",
  "key29": "3RxX5fSC9rmq58gxioPq1Y15NESXrz9FpXeUKxyYTAJXxisFNHHi1uu6Ngi5XCUACv94HwHogrJphfk5pyX34DqS",
  "key30": "2jaKEbp1YiYj4Couct7ZAq38sSvgQsRYVU4ZYs3eDvM5T4PzmTHyuxJs1Lok3LhF7u7Hnp8tmLPHmK4z6PfFLeAv",
  "key31": "nnUxDkwqv9cVke1V49L11jF3Y9bhqyZ1YQ9AvVfNAxjFV32v895ybYYy3vJWaK7T6SzgjjR1qXuY4VefgxgKWQd",
  "key32": "3k6NhD7hAYavwkrYr1Qfvk8WqeKULiKWKiczTLgUMyJgn8wZFLFozc33g54jzmqxE4yV4MdX9aQGoGUV7CV2qnco",
  "key33": "3Z9Vnu8Gexi7CE1RFK6xmmcwcCDzapH6mQqvMrrsUetDuAcyPnLCkzuJ6ybxem6Y9g5KZ4UPY4MAkZHkZEk6e4FF",
  "key34": "5h2bp7UnT3JB7TLia9bKj9DKReJvGzCngEhKn8euSSNzcovdKhviHbcyQsQZrnFrmq5qiaCyrTPMUQ9ZLY4DXtC5",
  "key35": "2F6aYppPeuGLvkYb9NkseQtdifJ8uwMJGUuCxm9k6N5xaTH5cwdw6JJNV37uLNiV9N9Jmt6HU322xyKHnottob1a",
  "key36": "bpJfeR7oAHCPKCKs6Gz79GExhKpTJaqzdoGxDikLtc6dTNePYbmFxFDGB4VpzUCCpL5nQjuqdPUym57MB8agKzJ",
  "key37": "TiChXBzXct4knPU9fPV8sztrVgZ85rXGz9fNYm7HXsAmqyNSGtdM5mQmrSZi9KmNh3AbhADGM8V1hoST2sGwRHi",
  "key38": "2ghb4w9rg8vRNyKSCNzpfDjuapeq2bCByHiXR8h1iWd8yPxtNkFFFE2TjTcTpinwP16yoMidvTHzWqtmUAAtiD76",
  "key39": "2VPwDLGmZFAMndai222ntCysyfdwbCmbV8c87Fr9BQozr72NxSnsCWwDVdo736SkfCuGQC1c1c8woGbb67gXyNWC",
  "key40": "KFaatzsx8QjkpxrcQxKYaFwWZunTJM77gwyjBWBKKNJpy2c7nuViZtrgoCE6YCqxhFauyg482TnbYVXT3f2aYuJ",
  "key41": "2UzvcUXvpUG1kLpLz1XahikCVdnHRczgF7Ftbfz4onUpc8ParzDuJS27g2Js6mUVnanaZaj6Mhn5eaZkYkhM7eXq",
  "key42": "3DGtKMt64n3fxrtXGzJ4pw1yePjJrTq44Mzz275nqrG9dBoAaQQAuBnTryLsWjLDoTKFqhuBiGM1iCSPepP4MjTx",
  "key43": "4ivqnr5djBC4fCQxhfREHxRSw2HFk2qqs3s5K8gzbZhL96KRKoSM5CMkYtXCc64kMGQYZ9R7K7fEv262EVSZZoNh",
  "key44": "2iKtz1ntJr86rMbERs3AbDiwvQMzezKaZ1HkSTd1BhAHxb7Kkd1H2DhtiQpEeggdSonrFMEiuUDsdoN1wSF5ZE76"
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
