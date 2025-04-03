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
    "59UVAMHpjFnNb7SVc9zJq4kXcTTxbJJ56RFNbsA7cpriqgXFXACBdT8vStf5a3G2gvgrWLW7dbieqwfbTiRmHkBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LNXYWW3LuPP1W69j5W7nB3ALZqZWqYi1AEyyHGW4f5qcctjNVNxQ5L5QSGmCS5TWDW8TMVGwXcxH2UUzqEXGg5h",
  "key1": "s19jWR2CtzuvZ8EeMf4XMu4bdDAPUwT29L7FacLTQuE4NpLnCKcQsondkmW5KX1mwnKtE7vp3na4xSS4XNC6kbV",
  "key2": "4akGCWnWn9KTUrgEw2e3noKduMwQmyFWiupnF7QND1roxnvTUpfztB176QWfJcgHxBQvg8cwf4diaq5XUr8ZCt79",
  "key3": "67HxUzgLDhA3HZx8bdimnASxDSbNwrSxAorAK7F4Li229TLmrCH8roQNro58vU6H7dGcs7pNP8oWNYgtVLsS3Ryb",
  "key4": "2yUfkQ4pJYT1xx9UY5oa2XkXLrrUVMMdcSGRFL8jxmwe5vwv7yfbHSnevDCdbwEygF3M6ohHSmEAg38rftp12JGQ",
  "key5": "5PyZ1Ve8wRpAoftEsqw2Sap1VXe9tT2CMBwkEoAUfFNEZwmVfGnMBesm7Jib3xP6WwGY9PUyLdXCqqaZFQEw8rGg",
  "key6": "3DDjWXbkMzVKEUqEjz73D1KcuMcTn2j8qRW9PpR73X5iTbeQwTF7PxzhkEkKyJNz6H6w7HuvQ6bDX9H8FWEpBrMg",
  "key7": "5PSRDhJkefZPmbkdKvYJMNG5RDdqNHoUJF7tfkH6ujDZNbMXLVmUth9LF1UZ3z4LezcLyhpmgLbcQccVYevix9up",
  "key8": "Z2iwumNLN4jsot7Q6BDRuoFDt23RZtPX67x8MnU6LE76nbHcpPL9XgbKMk8WHF31p2BcDLF6NywTJ9WfqA6ATHA",
  "key9": "3sHWU5NqY1322Yb7P8F4rVWmsTG8kB5sruqH1soRooaHPH4n2KQAXqj3UmbmjYVwJvdX8t9tL7az8CrGyqeQwAoN",
  "key10": "5dmrXtBS4XNSmtFYn3cyvkcsPAQvJr7zHmWgX4S7b8AQvSbhKBsXrnPfRNiok9ZC5fSrpaqRc2vTZwP9Qu8tafdK",
  "key11": "8ytT6MkVt76xigvLa7Xeak3q9PqMFt6bh3jGfQ4pqV8hkSsQYAU8tCUgRrezdNAghZGyQ33JoNeHirw1wZaywD5",
  "key12": "5LGuXpBwQQBWVc75A229ecUBD8wicuFnacWcskVt5c8pKmXaaFAiaa8NCGjPshozRNkdSvbk7ogmBWeYTnLqUA5e",
  "key13": "X53bkZrwQaznskLtnY8R7eMJ7jyixtaQkPQCTr233nyxEZnBe2GcJtuUKE1HyHeh7pKJa4HUKJnTp3WG3eHHRsG",
  "key14": "2EM1yiB97nw5a9gZm46efXyxQBurMpBFDAWD7A5uW6d26zVUiaCA8VR9XgFkxztRN1rwat2DJDsiHn4edELECrEr",
  "key15": "336a6dCZBE44e6rDwwaourr9zLUYtMcT5eERYqn63MtT3nYzecE7m82uNWfXcUef4vKcNQqh7BKsEuQHFP32Fn7M",
  "key16": "65t2zuMKug6nn1ignQXZ4NVy2ix9uytZ1uksyuKBu3LRjrc6T4yu2LFb5o3mm9rZCmb7ysa7NssSjAugrVWv36GW",
  "key17": "2XyhUNViNf8LXKN7jCknCu2hGx1Fw5TVkEnkNmNqNWQcumY9KwV9uBMFpqgfbu4PmLuBqS34TGWz6j66thNyepnJ",
  "key18": "cVbDPCHLyMNueWqeacG5JtWKSTnmnPhsNa7XBpSBJGvHnjYQihr27FioiUc74TVKJ34jHYQqnPj6U5j75RVpUar",
  "key19": "3TKE2UTfdG9xHEG9KxptNNFYCLE6pcPNcYZNhnfAankWMDrwsXJFobWCjwrJHoAhu6a47STgAp9f314jfiAkfnYM",
  "key20": "2ZNZ9LhUjo9fs768CGAnnTPTy2UGZR2F4mjtccuHMxw8QhxgCH3mFF4BnCSvF1wsieqnf7KyEbHcytnt3xzT5Rcn",
  "key21": "4gsDtA1CgbWYb3Be4CWcF11ejF7cH8ff9kVnXEMRbVoEo25xVtL58SzPWk3UMFWg51BPkTStrfTcLsdru3BQzpLa",
  "key22": "4NTzG4yZ6kxk9nznQyiTJCZ9LYvBbUJMMLJJcKA5MjprazzhEwrW8DdhJAUkbR3AhhCcmd3mpE1aEWghhDEm7waB",
  "key23": "5dRhVWCWKx8pamksWq43QyqkKSeKw1DezQqn1n8bHasGK8UGFEcLh2uwn6FMvY1a2HLx6tdUcGr7nRhpt46EqHNM",
  "key24": "qYRZm19XAaUVpgaLvz8XMV4wVtCyGQ78iisNnJCiVMKoxX1D2RKxJPYMEKatfJgUHm2c2qpxNo2kU356wP2Zur3",
  "key25": "2wdi64UKQf6RZhnohJgVhg6KTvdPwgiumPtMV2rxoPWv7N5uNaiEJEuoUTy3FwwRRDJFHfuuvEWe2hCSxyJ1gGXq",
  "key26": "3NQ74CD22DMzxgLDUZhV9Yj6G5nc2axNTyowiFBPX958kPu7FTVzRkrtUCg6LkdSuPGeyAUVb3s6cfQ1oKDkTLnx",
  "key27": "4bVmSuad1wthY2zRFLJztCiC4AAnZwK2JMyEFFQohXdrLqxeZG6pxkzkhxW6M72wk1EnHc1Bxk9wc7gpyWdYhoh9",
  "key28": "5jz7kFVY55Tehkc7fjxjSi2kgcA9yMr6PxperFEXTK886dvj4VYhGVz7WKJUVBZEavfhgAVWVBy3hJ5BsKT3Xgkb",
  "key29": "4gnFVKMPzxoSwqDx8hMgaigpQGviKgoq7iUomobPedy1MbAe3TWbyo2gURyHVvL1jBzLBvAcYDwSFehk4XXWHXyj",
  "key30": "3jZR3itUQK6so75njKzKdPp8nVZzXk7HSTHTzo6fK2LeVToASsdPbWgr3QahaYKNGz4noKVTHGLhegJAyk4YXGXj",
  "key31": "61dHPixj8PBfMYherkCbScpXcLuFFvfoqWguh6prqaHcJLHEP3VM39tEyPG3P9mHqS4cDxEDzMXtZU9JG2fBfW53",
  "key32": "2s59wEj69VXVNWZtKdvb8BtZVT6KZqZdYbHt1APUrGG1hcAnKHtKWnQDpDGtR8HnJJJA21SqJfNedoiuSy4V9CPN",
  "key33": "Wywg1HQKqnS36QFjLjgG1MmytncA7x95dPGNhYrMZLmf8D8rcziMa4em1EVEoP53fPRLt2AZpr1uBYTYdcx82wT",
  "key34": "5Tx7VRunokDN2jodATeYoP6ssiCcdfdfVkaGJv7E4As8dnbKc2rstvdpTQW9NbhZvJRtmCzwxaJN91nYoRRkStp3",
  "key35": "4VWoRfM1hJJouGy6oTHPfRXSiWKhXcUNqYQLPps3xXCJNF3y2oLCqLDgPUmSAJeXHTRCc1TpEfa3cJZFAsGn9hX1",
  "key36": "4qFTjzTNW2BonM8zPJ1LfSthAHSavVP9NTbqJKRdqPo7RQs51JjWfCqhK9BCgqZrF6NKqhwXhQUVKFdTK714FYT1",
  "key37": "3inxoGu7mcBC3u762tgT4qCaz25PU58Ucu5tKEpA7CbWxQHJdH5kQSRVSSoxrMFtEzvqjWadnJyUj7dPoFzocXFp",
  "key38": "4ckR2HuuLRSutjmsYxqC8UUu91QzoS9CJdEnRL9qgsTnA38QGD9fELhEqJV38b3oMrwfihHYNFMB311HzJDasZ78",
  "key39": "4fKeCwdEearWWJHuaFJsFjS3SKcbsfQsn2SBduaDPSyymA56JaC3oRUeoihEJN3hy17QZDRhThM3jbakvsqrgyPM",
  "key40": "36bvLQYfy7K5Eb1EMi965fWHcxixwsw4nnUD9X6HBmhEjZZELjNXWwweYLzj3WMKML3z5hUSSmCyBecvQmnszjks",
  "key41": "54vsVFTAqnnCrQFY39MefWGASZva8m4KYmra6Yo6KPsa1uYY28DEBNMXrUzPn5V7b1Y3VYYAqR37pM5x8EJY6GTX",
  "key42": "2zjkbZVxf7qWhQAHZ5VHqoYvRkYpv7Jm2VE7phPTuFYpi7MuDYqx7VrsVpcdpvHCpeJpUPiyZBmjHh1PwPgGDSjG",
  "key43": "4AWnEFnbhgFF8MrrfeCicbB5eh8QPHgSfcuzxD3Nxmfv8oDpAjJSVwuAB7wfWcckPpaw3Hcx4noRrje8hUFvn1ww",
  "key44": "ZwH82EgSpx5egLgnMAE3Cc1QYmQPupUempuN8GbNqMe3X4RnVZsnUw9yj6sSs4SEBGkWf5epkYM6C34FksLs569",
  "key45": "47ZJT19XuWgk1Q4QvnQ4TpokJkAgUwjJLAoyhDDBNaCrPKcJKgFbqsADiaTfg5f9fEQr7Eh2T7jFrMY2fM2Gmpmk",
  "key46": "2W46tZ5NuZ6H3Ey8NntbHJMCDQEC5obDxreLyveJ5e5wzqXeR1AkCBTVXWDUXie2LTE9WTMP31Lzh6hqTaBhJEnF",
  "key47": "3oJPLVBVyBV2EKNKJXoP1p1ymDQbFvBoVdQeZfm4piYjmCJvbC8UnZJguFziEtWKiyNraWxX2kzxtt44iTgmGjAt"
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
