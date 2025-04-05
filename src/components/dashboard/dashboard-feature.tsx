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
    "2FbnSxj7hSCjAYwp4XbmfCZhDt84dV753JimNVUVV1zJAZKoei23y42eHjB1YDBu4enCQEdTUNQa6D3pFP7CEG8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YvxxL7DB98wNiru8R6g16Nm3XXVivHVrQsqFNxRyhFsyaoo32pMs97Lgk8jyqo4YEBxo1oEEAaCwzUNpu7Lehoi",
  "key1": "2b2vVnqRHBzXzPX8XvC8ausYGeXQNJh4wGZS4YjggNT1S8Psy747sY9ruqoVFtHbPMbx6EmaRtWxaWCfipEiL6Sa",
  "key2": "5PyKjwnyVQZKiUXLWpSeQGm1kBc4xuDbo1JjbnTvEC49ayTeu3m1cPXrNPKYKQi562pMapViRGrFbCCrfWKh1P3n",
  "key3": "2nYZMzv3u6XZjucGrC5LwGbA6BVc4KWzwmx9ULG9XyWR1PR9inyt4uXnUNAzocJE6Hm2fdkeGZSgLtNgehwfYqgU",
  "key4": "2cA5FURyiYEQqXEqvsLZTTfW3jji1hAgbudGccecKNJzqseN5CVP9KHkoxBALhPQXQkcb5YzLLgHrhiiiLkW8dA8",
  "key5": "k2K6PP12nyFH1FVXP2UGWSTaKd8H5zmfZckTWugwu3qpMNK73UiS19nSJq2fjyzWcqdDnMtNvz14XiazjHGKMr1",
  "key6": "59DvxqGoHFSeeiJMbpv57Fp9RXT31qzibNZRDchqT6vNbYwHG1MgbzFgPZ515Lkft7TgNTMYhTs7ArrLjN1kRj1q",
  "key7": "3m18x7QzAvXaEzMsVqhECdoU71jZfNyCD2vP12C7EZkpPp5CjpKYeuUVx8fcX74JZCjjDfJqjhCqoWU1fAT9chF5",
  "key8": "47EdiHrPUDoJEENMrPg5LSzjnsPTdKWK3dYETV8oAgwqvK32p6tamvS4UZZ5kJ4d1T418wEPur3jjAZTBprFLAsc",
  "key9": "57iSuh2KCZ7e2ugAtnqDtgGdkwgEt7tkHugBW3ihis94c8nxfY2NFfoScRMsaybn3j7fBAUEKPgdiiCpBTxRF463",
  "key10": "tDMDZT4T4FR2YzifMEeCiVjiSM6EQhzPkEupzLcP5vaA8vt994Q1d5LKBbCqBpZMTXNozWDvHZV4NeDJy7LiKwn",
  "key11": "2wy6o5tjr4zfu2WZop6SVqzFx9wcrUBbkLHmhcBzuBJN3XmfMD7PH6iFLVEKNGY1eY31vCCsdtWCtS8NmMyGbMmG",
  "key12": "3UZC8rWauueDVStL7acWj28zAHSybwxbNQXPkB1oRF2ZxYUhSWoqEDGCXddApAtpb8VvSsWDekM6NH5tABnBuPPh",
  "key13": "EcUUGTbrbDarJR62thtyG767WYPiuqqKE3xCxSisy1JyVcA1E9eR2uLKkuKbJVb21TWbtrivnxXgTMhXCAJEpqY",
  "key14": "24aSXTxNWXxxxSZMYj8CjECH5YMUerG8k2V2MGvQ6goFhT5FhHKAFsARw9qpDfiFKXsbhdxg11m6PKGW5KgnYrSe",
  "key15": "4B3uznhU9gA1cq6NymnNSdQpF7YZEEp6EPvCoCstdUBurbdGdSCPkNJfX7d79Wq6SQ7UXA8WdodvZRynUHeixnq3",
  "key16": "3jGzgFhFTkRY6pnmQjTGoDr63wuB2jPDAgR6FrLWpJbPaj9Xc1WHMCocdWGcEVnwmi1x5erDurRWBBBEevVqU69a",
  "key17": "5x6qrjeGarPgFNuCRhhTc4Lr8MWFYKjSVFYAE8kU87ZeyVKAU1vamHibivyXKXu9kxKCjuW2XCA3YLrkSXUHoMyR",
  "key18": "3meyAvGzae41rHtNmAfm6h6qJK3gPAhQgYMdxUdVGwUCNgSQR1cJa2urJKkwfZhkeiAv5HGLtftMSBbNDhDwjYLC",
  "key19": "43LSRFZEq9muT6sDX9bGjB6C6EEgpmdMkpkekNgQw1138ksTzYt4d15EzFd5HqRZNnq6FG7pDy9bPybAA5Kq965e",
  "key20": "oHtVc1AdJVj4s3nBjLei5fzxoSjy3fpoosoa3V5Czestqyw9EMo5qNDBjyKomTkRX3sN1KG4hY7woReQhjZTiS6",
  "key21": "48kYC3ZBsyDWMkqRAfqG1VWgTVg1uNQTC9WZSpGWhkD7ssW6pWEFBMbAyMwe6BwXoQPAVmSKdz8YbAwS3ScPw4NE",
  "key22": "33RwBj77U3LVmH2qc5f2ThGrbMm2A8VceJhbMg3o1gDkd2cpzw8F4rVjN6SDgmMVEPyd7n3W7xqp8yw7bY4xJew7",
  "key23": "2jKNfEfDvwM36vn5u2snV2Ewf15SHXSobMk6oguGaFQ1ddhpxr3s1XrSTkVY87p7gJZ7SqA4rsdJV95w4LjLR9eD",
  "key24": "4YsM7UR6um9q5grm7Qv1x8SoCDDdSFYwcvE4pGS1mTJpZxVdRcZkgZFPBDReHJMQCzPMu3KsYpxvMfaB5MhtK2rd",
  "key25": "mjiURqMwdLYF5yemHBfuHZ3LDxAH4mHrcFxvWdhvYN1pJdPLbwagvWPFFhzDRKkX7bBDbWmJo839mSas1Kb3sef",
  "key26": "4kMGbtYKBhvCM1MMRkuPdzdNL7mBkZpX9tzZhJtp5tjCaG3tMe6gRYRwwxcjMLtqzRhPXvrYduEbEpeUKeBsk6uJ",
  "key27": "4wWYyx91U939YTWSpzUstaZmfsf51it4GYLYeQsW79i9MMwMsvCn17dJdvUyFD5AG7nqhiC5Zfn7UJqnsUC3fS4s",
  "key28": "53UmjvF4isdCvMd3LJer2ZHcF5cHWw8kQ6zRwdiSEjXp1TwA8UG6JwaiWBkdj9xPB198gj6UBjDTxQfqCTAJm9aF",
  "key29": "4GtrHw6Aua6EuCtyGxRS69PVjnjQkidwKqocNpzdDN6TN3Ehm4sc899CeWAaNULviTwjXfVLa6mY7hMbwcPSczyA",
  "key30": "47rK3oED128rdtMMvfKEG5GkgzCCFVBjGBinP9wVrWW6bpFDxCVhFCLdgKJmRLQnX3sZQDcbUtWrmtgBHUyT91yM",
  "key31": "5BBFVd3LkkETwtWx1vCUx8KUbPRvjPWn7ZfVe412BXDZUJAcs5ZyaHeessDkLHycfPJQY1EucnTYifsEy8hbQ8fr",
  "key32": "5zLPJA96tnv2dPDCksxnMru9nVGrPQNDntZXdo7P1MzDtS56twFYBAVQn3wwmhMVqdEsd1a97z7MwLT1RAkHp8gM",
  "key33": "G5V6XSeeN8yXFugx3eyxhFWPQd9cG4bzBfEgdXB4dtu9zbLoZL67Hp1FwJtffwSx9AgbUjKmZCt4tfPuY3MqaTw",
  "key34": "hrXaJjYwhadTP56g22s4k5jEVjN9gSdHCXQRbCsHdXcBWTJDxkxZpXVpEHoz2xAkLMpjzfV6sfij4HhG8SeiHNE",
  "key35": "BFprQBcKJDMGmyafHdym3dSVYDh1CgqixSjYEt7p8ysbMaGXnYyYyXSDRnJ9qL1dfsYrAZiKe9aciAh5Xs3YSuJ",
  "key36": "43JEjWYSkuikoS7PrTecvrgiXXLiWoV2Kcz4yq4h5vky8d9hJjxoJieyKoZx886eBHaVm2pEBgHjbLvrDRv6M52",
  "key37": "65MufH8hggVWZmsk91D36Rw53sEwf5JncLemyd7PSXRy6eYBHcXMJu6atBt25Au1EgPLoo6NTfEnVSyqcZjzyejZ",
  "key38": "517AQ3qJDRpWDucBmHbn3ubxNw21uNR2Ry4HeUGoMQnkozBSwBYegokBG7k4ni1PVg6Jp7nyTUqDxH1i2YHtN1rp",
  "key39": "2MWjmCJPX3k3UN8cZGtCvbuyLAAcuWURShJtCkUnkz8D3Uwme1AtuhzGvk61zGTMHxan7BaTKn4kSUSvPjSBrmdQ",
  "key40": "5k6m4por4G3gxBMbFNFcGYz1ZhDwiZJmnv6jVchJNoWQxMN8RjtBSeB9SD6f19DHbiuo1MDHUw7CU3zU9BjxN1me",
  "key41": "5zJB7mjgj5STzF9whnmLmHZUrZxJ4R6nnG4tP59hQjzqbsWgNgsWJT2gm2i3n6mmDiMgkVao4r4mAPBb3KtJyrzF",
  "key42": "4BmYx9H125FcNqm3XsLU1hkMaYAQoocdHPsAEahvqtv1ug7pP3FZXZWRxmnV3yFpRWUCZzBaaa245fLs9rgsD4Y2",
  "key43": "2N3hmjh7dcX4Va7vrCu7XamG9WaB2dqRmuLh4K9G7ApsfRzZpaCbudCMuqyEg2QJUDy8bSVw6RbYH7CShuGAFJKs"
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
