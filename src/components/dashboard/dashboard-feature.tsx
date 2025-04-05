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
    "ofQJWTUEnkR5bHDzVb8zVrCY5ccKN4iRi5eKGFVJpx9UujPkMYWe14sZEtZZBpXrNAQA74QUXZnQ1kni3p2fjgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kn4MhRgSL18A1yR6mPcrcfqynFsuLSWnjhnWqVrvfMyAJY26qbhzoS5HCx3UJj7kZSsnD2YkYqgJse9acCbwwsr",
  "key1": "4uZKBT42vwwr5hd549a16LbX137SB7Fo4M99Rw6uu8pK2pUGB8koWQg3K87mbDKg1WpYZo4SDKrP4TBM6SsGnweA",
  "key2": "uFNF7qVxuYysufTtPULqjiybY52uFwgM2zmGHjmDAT8uPTJkBhRho5grWLZcWcvoikfRUbpEQUPs5rR3bVBfSyW",
  "key3": "5TxeF4RkTaFJ9rdKARG4niJJvmBB7o3Y4h4jDepBJPGpnNv6t6Kx2BzJGnrxzVpyj4kWxzC6fLwZsvL2u1DXpY1J",
  "key4": "qgVgd1XTrwANN3mJx6A1oywGyigpHyhJSK281MRfboe43pre9c7xrAE3tEpobKPt8dvWwewWrUjPyZ5eZPA9Zwr",
  "key5": "4bjc6ZEkmfpfDbqnxfYTY6Bb9JnLy8ST28UuTwxUV4hLm3toWAxnc7P75kec7tcY9kXDWd8P15BXN8GQgvA6HrMm",
  "key6": "5KoqnrPwApPwnBe4jTZrh2g4XKPR6B4WqFbRBiwwK8FPe3i9LJjVfDfiAZzom4nHD8Rjm4MRWYYM3WaXe5QQKbXj",
  "key7": "5y9N3Jo2CbdAxcK7EsBd1BiXYqh7stKDWyTRQHVNXQaH5U2wPP3dS8ahNb79CVQRDdvSvAZYtMd77teGtN8vbpjv",
  "key8": "2ttAa8QyZTK645VnxpDio8GePVRSm7nQkLngzGWn95pu8iQksT5HmRsJMW9Hho5N4UCx4zotbRA1vFMQGP74Q7xA",
  "key9": "22EMJc8PXjha4tSg5w7D2fWhMCxJnX2phG6Kotf9DF1TrGhok9tsUb4fETMkYprpg62JnpbJCogmdzoCDoigF87P",
  "key10": "4eNMFBo783J7X4GRKMC7xvXvGAiPkxng9zrKCS24YPnYrbNRWhB5xhJVJ4HwADthWKgrzxKXXMxaTBxVn68VnXnR",
  "key11": "d4CeTuCvjKEyS3cEemHhBvUKcFRa1DAKLigQ8nUg4swkbisa536nMQYZueaoViUi7arNeS8FYfra9uDTz9q6xsx",
  "key12": "3WvACkB5A79f7K5m6u9kFQmFHZxawJ4WMWKJfa4CJmAnnwkEd1Pe4dpSBaCmqKqJC7sXg5dPwvtVT23QyM1N3qXC",
  "key13": "4YEaWSkEEvGakz9qw9kS6RtCuMYxPXymrJkPaH6mruiCQt1MtJXgSa4jShRTfrygF5G2BXPQkQzT1UHN61ZBwVSh",
  "key14": "3kHATKB2SbGuXEDVzUMSgTLV8kkxByzN62HgrWBtVXtCyYLpQSvPSwdxbV1NzttxXG1DdLEeZUqHGEyB2dk2dCc4",
  "key15": "49CNF2bWCS237b1zEkmWTSHuGTMCbdEMhnmfY5yVLkfThuAsJ53feS9NycqdwsYrcqdvRPsByfkP6rN8V1DRMpGb",
  "key16": "2omc4C24mkJgE23Bb1teMvdngYKhgA5J725cuRBJC1Sxhz7Suz8q5RRV2mHCmj5xF9nRUr9Ux8AisbzSCCHZ7hgw",
  "key17": "5nRD5JGTW9eNVxb4RNRoKRztexy96eXTSkqBDBm11kJrZqYU3cmVmR3vPSYdFYVZkFYHASk55eUmxoimG6A2Tr1x",
  "key18": "Us4e56WV6DVoRmphC9JbB9eJBQ1EpUW2EgErtCdoR9tA95X8nnb8VfLA9J9AQnEZURm5RbKMj9rppNoh2pcYonD",
  "key19": "4cvMy7uJAuwgGhH9CQXsfDSUJC2oEJxQMumKPWGjW9XVqoAUjfTNMgquWtMDhrGHtQXLdgjfVfb9rEcfqmubFmkq",
  "key20": "2A1qowp66zDpK4suhxRfykvPMaUCAjjUor2KqujtJ1mUJ2CQysidHoDuou4g3CBPY3bYfAi28MqTXHcRey7mc5JH",
  "key21": "KAqH9hh77tTrB3xMJ5MFCn6ueyuW9mjsQYmH9pJgFVHs9bwtbifibdDNhvqF1cQYLd7ypCePyiTP3gbPioTAm2z",
  "key22": "F6yo4iR6X6BGHhFPw5D1mgdAwdvGh1Ng6Eu4HkDWkxNkwQfZiXHJuGW5NjRtZNXrb11pc72D8u5THyiZFb7tmG1",
  "key23": "2P8uEv9QJqYauuH2ncmWzfNWWqsNXjHrHTsvT28dyMAx9JzsTDwzV8eCDaDevaeNjoVknffrycGmqP7oeEpGApaF",
  "key24": "3bhEfTMC9vvLsvPAmds6JciZp2dTER1cEeDmF1gb4JHw3tKnK338BWRDsm4EtUi4nEx7vnXxKyfwdLQb9mQmbvU8",
  "key25": "5N3NZs7sbUjNVdpHMD2m5rkB865f1Kvp2o4UjHM2MqvL7J5EroZCQ3nmaGKVhsXcrL6eKK8yJWzKYNZkHRPi9qp1",
  "key26": "3DtZ3JjFmAb2Z7c4WA51J9on7VBN1WTYVov7XRrj1eM5JNutjqgo2Ja3xPhuESbo3H6zPBhNU4iX4JFrBemwpsLV",
  "key27": "23HP2EctFm3ow63DuuG6cT9tfxQ6vsdHwpTeKsCsTvNVSNwNw96BD5Rb63HGjTNcegpeHJaSf6wbCzJgn3dAEisK",
  "key28": "2N969UQFnN86L6mX1YcDJpuovR49m1XaHDMNnpBk1L5WieGte28Tgm99wFJuNaur6cAV2nvpJ1pnPUE1dRfTS9dE",
  "key29": "o4W6PqkWccAaXy9R2AAEbXJLpAJ5fBz351i3z79oz9jESxZi2anLQLdqhxdwQH5E4rYkV2rWxZviQTBGxUtxU9p",
  "key30": "618t6NV87dVnfVyxdmxGDdv1hhVY3qWfooY4PbHvVDptF1JHpyq6powbuoANhh5gzdjNvLgxa3TyJYSsYtYzg1Fd",
  "key31": "2dsHq37HUznt8MDmHWMKrvKHmkwTcdmE9xZsAnyE1YxDwraVUYNh5XdFUJBXrbpNqmtcM7VFA3px8tyjEPqmLqXQ",
  "key32": "67Bp1xDJaSpYgJniXysdXcSsUaCLVp7cLDhPXqzmW1qMo5E3LGaPam8sJB7TEdn2XpD8ZxU8WkKzuA4p1pCVVJqa",
  "key33": "43aRgqhbeBnaWAiSdX97Ffhtny454jrpnee4TuXnyVisYHGb3g4RsvA3NDhbHghJeNVEtNa3uXYVAYzV1qKHFNTY",
  "key34": "4ye8VUwLZRfqy4QetqjNSmgvoixH52hFiCVjdP9mXjarBdCbJgiWMn9aMQ5g7YgoU4x76wJ8FzduB6YjCsVUZY73",
  "key35": "5gQ1nsyqb3L4FRsEBMFbykw1T7QPLfuxpYVCYpd2XcWQstiFDTuc45PZPi3PQdX2w1aUj9h3N6DCDs9b13WE99iP",
  "key36": "3KqEEJM3jGnXMkebVZbnrLeoGvz7yDMHFGbQK9wVSgMdEX5iJ2FrZ421toYup7t4377PLmkwbDTH5bBaUXKctkcY",
  "key37": "5u2ytYavAPtLx7JhYhoMz6NR5pBbrcRAEFL7hCtgVuia4tTBTi69wDjdYE19mmsqQiUjRVxUwhdfpTPnx5w1GhV",
  "key38": "5z4ooi3QuvhYt4GnVRtLR2KacsvEwxJv1CCrynehvNjcg2pjLZv9qbA7nZxti1JREu2PeKa8Qn1NGfxiMzhMEZZK",
  "key39": "5RcVgtLVr65j2dVSnwsWGZWPbwNUfMATa7zw24R73pbsFVMg1Ba6brRYHe5zc5A9QceT9nUupkvfmWpwgmrjNho9",
  "key40": "2H59XWHSFqGG1FXj1e5j24HWXx7aBGtxcKKMBTC4NMCkZ5sAPZLBVkyS2UgDSqwfPbqkpSNs1SC69mMVKzhxN6g",
  "key41": "3S124FnKhCFV9fVToHi8RnbsLNHxBcYYxh8FD6jVGzw15BAKujsMtyNafW9m3k5hT4sZkNsfmPTGMK5HCExqvRDX",
  "key42": "4FW8vmqbF12p1ANh5p5t1wMa1GhXeUGzfwGjDm7aRk7HggvVzynFxNDFZJ7hs1XVHbPsqRzbA4TYjjHGqyedBLeC",
  "key43": "J5qG3jmCKXyoE82MvpGRQmja8D8wC5c4q1sJNYVYGqF1jGXt9yZuZPvXp7YqtxZWdX1EYZWigrspiAUonNTD24f",
  "key44": "R3WyxdSEJrnYhpK4RrEwhgDB34Jpj3sjf4jcY9WPXcYZ9pRU3n8URMc1SxUXjDczaUxxzkmz732ffwvh19Kh88w",
  "key45": "3aSNP3hGE1cYLswEVB43Ps4AKssfyvAHAo7LXtYp81MuenBWCkyd466qNnWcXS54Z7Prqrx6oUAvMi7rrq2rm5au",
  "key46": "3iymzTd5LYbvWvp7LYabbD53o4fPQqZAZ2e2HRSRUGTQ6f9GjTwj9SWiZfTZohUwdL3Ncr1B5VTQPre6gRmSJEpT",
  "key47": "3oaksZu5EVsJjRtuWsYnX15rivyrrVDstg4L1pq9QGmiULXTrgsgwaskSAYXo8Vxfk3qK4AGqGTWCBtJnkE5jR7D",
  "key48": "2axMjKLinbyr34SGcBdFVPEywHgHiAqsJtPMwSsqz5zH5vkdiaabfqXihuMpeD7fUgehy7Q8qwPzscETzuN4At5C"
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
