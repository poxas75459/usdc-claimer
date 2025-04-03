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
    "3dN5BoYDqywChqVVxi1V9QKJNo25EGGu5L4qcBvuCSeUUG4uJEMy9JJKnp6ixqwM5wqJhAyLR8GXXvz3qnfSVcKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eibt2yEJAvGa3EE1Eyd7pK2WW3NJhJJ79heVhQz1J1H2kvvgxZ9B3RNXGq3qjthHXkA8knonYNgLQ1YmXPb8omT",
  "key1": "3FyNayCJ7BwwPkvyz2dR8cvkPoD81EVXyDVRjFTz3LzQ1GBm9tFVxTKn2GnPpXHvB1vucEBYGimyEgjqXEiNYRJe",
  "key2": "5Q4V2bMkXfJ6XM4XLyQjJUU74KMeEwpoVkE9wu4SHPyZzwMwaGJnM11WRp3tmujTa9P9i8pqCNnGEMa7MoJdZQ99",
  "key3": "4okJVWwU9wvwzDGx4cD3y24oNNKQrRzjWmA9RgSar4BkDDLEULuwwNqhcSknYwqiknBrR72DBGrNWfDTu7qSWdkB",
  "key4": "2SE12FqfEW729Ptw5su6NFQH4wKm6Siy49qAdwu5TAHYbqaSyvyNdWsEamdKL1ragQ8QAStzrNgkmeZdLtMtSybs",
  "key5": "414XxFoEKqEZehcyEPd8zg3TdvenLca4dE4ojoAE1no71J99Pd2nJZnXfZ39WGxZAUpcbSqzB6nq5AsnHMSpS7aG",
  "key6": "98J4cCXVhGCdRNrMwuxSfNwyU2uCXREUDUzUdxnuQJRn6BNZAkPtE7hERA3jRd5KaGhZSyuaqLhu9AAWxAJ2CPM",
  "key7": "yyxpmwKRCCPPdcF4KEhaLXsaLiHnQtuZDARSGHopi6nAm2rimhwx1apKHKGQYzoUKTGpxwWUZCFEQS5fUu1BCi1",
  "key8": "491ugKAToMxSZyP5bprgATZznQv3tAkQBXh9bamm2CJ1XPx81KBDhwxzHhv45muSWmDKcVhRYFueFpeBUfsZce96",
  "key9": "3MKZkD1e34YQTTGz8M1ZD8nAwVDLygMyR284aXCDPDsqqsLkcrtkxBjHUX7uTAdFrsyN8JZd3Yyrojxtj2u8AL2h",
  "key10": "5U9bHJq3CRZhruMkbkyxUe5xGG6jc1jWTK3k9HvnsevGmMaGcxbkoPPrCTv84JUBzd1j6mqXbrf987xzt5FDxRwN",
  "key11": "2AL584kgSCKYyPGcuEMQktwt9CuBYNN3wGCyxcPSeHRxwbu2Ra7s3kpdZMB5UWSeFxux81MNvWbmcE6UtH2trpnM",
  "key12": "4RNCt3nEVFAzJoLU4XSso5qUj1oAg5o3g73QQFGEU8P7FXUpjj1sUJGBHsjAcNjzBvy2jyrHs8XqeDpTAGgFs1cB",
  "key13": "5UUFmoJM6nwRFMEckjnFXgqUCGtGXo4V11af7xLbhsUopBRWv1ggYVZQ4AXihVw4gQkHVpn4QFFzycEb2L2kFqmk",
  "key14": "3RteVT6qwqcvRA9thumACTrAKMftv45yTdbF3y1tZJNxhhXKQtSY7JpdtaTEM8uuLaBKW6dDb2V7W8BCn52jnCPz",
  "key15": "61ofkq8HMFbvGEM1tLwVhRtQCqJM7QShLeZ21Nj3UDmsC3KNdm18gE572XmCt23gZMEzMxUf7YXmhoTzfQza38Xg",
  "key16": "4bLBCv57GHFQewPc6uyPEbSJh53RRLuSNJ29YZ2ddScKM6QFdASyPNiPXik7Sw7cMHsE2dbSjNLMJg3rCHUGBs3L",
  "key17": "2XoJee7oFBD6EKpA1C4PHFwmjRXXte4GzG8mwCaPh7reiGfc8fHJmgw1bkdD8aXJxVL4twJ9ot41EUi26QJvbrhi",
  "key18": "QZTHHsMTViQ95Nb9mXC5GSYzb9cMYrT43hQ8U1ZmNAyjYbLtgKDW5hbM8rbwifyiEaVUjzTVBeG65yEHeNA7fVQ",
  "key19": "3fYhVtRPAZUZdmJJznanzjHFaVu6kEVtenXcbh4ssYBbNnFNQh8gffTbobpwYaYaBRsWbd6UU52hGfnawV8prEQD",
  "key20": "2vwVtFpkCA8NrSMww6z1waBspQGi97FQJ3Evgs9W114eUVnxe81sYHqWFKKoCLMKCKZvPigptWPfRxP6GLai7oMG",
  "key21": "5zfTE6jxsSmbbgwPsWBFM6shrcu1k7HDJAE8Nyh2jC7dKGpJrEqLy2UwUhzZeMYripcvjBZt8hwKtBQoKejyhtxy",
  "key22": "4kYqkDAmECcfAnmq6U8Uuc7zAsGE4EJrq5J3XqEqkARPJmih1GKukTvyZexFGSpcPpdhYx4UG9L5C6bvTuvWw8fK",
  "key23": "4Q7vzneXPX9oZhFLaXdoRcy2akTj7LtLmqZoxSs63v7M6kfqkUsdJuy5iCZby2C7pLvEUrCgxry3XP6nqwaiiAw5",
  "key24": "4Ns1aexqTVpguMWHkP3Tf6VzvsyVX1NqL9ruvwZM7eDXMJznCoNMWyA6Btom2FvzKqEkdwJmdvUYmvWDpi8wQ6MN",
  "key25": "2tyHUg79xQhQhzJxvA3tjx4FJbDi7v57TRW5jRnf2tngNsBVNt66hnTrtXDAVYRfT6Hihb9zknHtShF5nir6e9QV",
  "key26": "3aSMmFX2upXvMLpBsmyQyp61BUrSPUQu2AJUURkX4LmDGDfnra6RFZ9evdbSQDcECHYRraVhmBe56P1EeAKDCDPL",
  "key27": "1V5ccvKmp5XXX89wZPhCSviMC7iCESsS5Bw6qBtaJ2nijqCgEmxZccMcRDLx6nxApZVHvtpxhz7vdLcUNx6szLg",
  "key28": "MRwy465av19VWTLtkLgXq4oS9hPvnSJZHcAHM6kkmgQVpkwsiWZHDG7rnU5TKXSwmyAZ5kZ87dHpf8GineAVasE",
  "key29": "3PC1GKnJEP8RLJ6v43ymd611hvvuTLVR2wmt6T8GW6whuLyEG8rDBQ4bdUdZvTYsiDeyeEhs3a4uooL975bCspaV",
  "key30": "21YNA213nETBuruBs3DgJzPD3QN3enbxJVuREDhcwSNgk455CoqNSRqeq1YYMNABFtXFMNEZTFzMk9mmAB65YkJv",
  "key31": "2DQ1PsWofhTJPsTyfo5rsZRQGcEcSkATiKfj88s21NpFZDCzmQ2RNHqnvBWCYncGfcEGKWz4kjAcuWtao8hFAT2P",
  "key32": "5hae7ZM3NA3bTo5oDo55wzEyHa8dufjfmTqVQp32iqgqY568MVBNmQpoMAPtQJ7c7YqMNRV6fQj86KX1wRg9PbQH",
  "key33": "2NA7zsXRFu9YPYvFtoCAV3gmC4EH6ECFwwec64waoc4JvfhuXhzcQnugPEXufYo9K8czWzbrm4cRNPTxsXqAsYeR",
  "key34": "3ghhywyjd5UGkcet179kLwNE4kgbBsKkvZX4o4NXUmaFcq21wj9qWUENYnd2H24iKvDEpib7LtSJEdYQTYEUhaKa",
  "key35": "5f36ZWzJVbC8wCK9DoQHCq7hoQQaxfFvu92Cpgbuspqvwx4hwbbUZWkyxQfQUdspbDjq5EWWAoBHgy8DBrdGL5Qy",
  "key36": "2RRgGXfZ5UDcyMhbXkn8Y3Z9mgsYXTavxbtuaqhmTTFz2QkknAgUCJ7t8JWDLVe3DyVK6YDq3ykV7xUnXB4rVLaP",
  "key37": "2Bkntru1xE2dTbTqeKT8CotUFZGmS9iR3LYDGMkus6Z3TRiDzGxTdv7RS3o6n3s3XE45G6jcSgfmyLG2CAzj8CH5",
  "key38": "fMt85ZiyWLjUtShPNgMXqcb8gjbzVoYkrW52EfzXhN8SGUL7agfKzKAHXwtd8UZE6GsA7yVc8hTtWmcBynMQvM2",
  "key39": "3tvUnat8Vyj8Rsvxfa2JcXw7UygWkQkmcSaEXL3XqYxvS8jAsdRYHJmX5gT5giJtzcd5Hu5zTpGpMinjjVsUUFzS",
  "key40": "4dg86R1pofUJimj1raiGVgdexuhT2Dd7z8Yepm3Vci3iXKTzELMkmdvuxeahCtU6iWWF2txfbuHAm4pNSxGoz914",
  "key41": "5JsUziRM7Pat68yt7VrCnfwmSxWCsnrnaAmuGY4K7wKMtyVYfzkmZhtS4y9ryR8gQuMNcgCDKaSVMAAVZJ1yc5VU",
  "key42": "2ZAnpdxB339dVDw1t7VvHS9YRDYYZR9BtLmnbtdZJhriQtM12xQQaQaedsZyQZQvJkTYRQ8WaUqdS29jwjKnVXvc",
  "key43": "2rDNYqi11JmqDcb7Ct1AJrVy7EWFnbsWQkaKDJUsc2FHHvvpGPmpuU8Kqf6PQStcBFc4wWfa53RTHqyuzU5yGsoH",
  "key44": "5uWkBLDbvsCxcpA8o3UfuuGDkAjvAPwp3LnHVenoVKvDwuFoopEQKoKdQVDzS8UNpK53pdGF4HYtBahwNjrJ8mpT",
  "key45": "65q5u21Vw1o1koHYSobdXtuyg6oRqaqQDYZUQ94FjETnJuLhDXuGyrLpz1hEobcWHbnoY7ayzY9HFj523UrjQjkd",
  "key46": "4qSWrYAP34R1cqZsSTZzBtENi34WkX4Gv8dwWDbvbKieRHbPJ8NkMG8Wehdm5r8yS1gjLSu4DtkZmg9ZQkiCm1i4",
  "key47": "4kpbFwTpoet2Z13aZZ4VEUhv3eW79aew9CJ1FUwEUiEgEoQzNej1HreYSGqFqaZoR2cUntQid5aGrm6EnxJ2puC"
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
