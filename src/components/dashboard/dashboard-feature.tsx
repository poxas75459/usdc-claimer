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
    "5cKDBNpmDKvt9CtyPodCSMW5menQTPCPicJkCFUAM4dN9vpQQCLz2tXc3Q8cKsB6PSQxPvjqGc3BfAHQDH3mvFDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ihh5iAiSj3rrBEVmBcY25t5Z8N4tJBMjARwcDosG5nwwJC8ZrDNEjXXTtdgXC3dGgWuSyqf1cz9usZFwgXk8gZ",
  "key1": "311Sv45XuiruFC9SKAx8EVscMooXvXpZp4xavNFhWa5Pj86xX8yZyupDYXJn3kfvFYaGN9CFU3JkWrn3DHaxnWLJ",
  "key2": "3g2mLnhCbFSiZqvkbvsBatWkjS2N9gGUP492FP88jKNeeWVTQ4836vKPdJr7tnYJR7aJ8smMYLWpnDsVPXBDmsbT",
  "key3": "2LZsvGtZwufuMR3sdC61B3bSxhwhrrWJGurWu8hy6QJYPhP8KLv2uNqRQVHY1oyXX5VKVGb3SGQuTbZp3Wp6MGSM",
  "key4": "5TGGHwZ31fd2DuYHnLqbHzhsjGDJAChtGFVFL8KtEtvoGmBzNkFxc4hTyb1ScbC3hnFAebm9BNZxSZf8D4udTSip",
  "key5": "5SynM5hrvrZ4SpPr7622jboBif6W46zeyF1Um1HiQhNvXMrgP6SvPnyRf4A8Gys1hsSDE4YxwmJT1TeEsSi1xD5J",
  "key6": "4g1fQxs5gMTH4U6nNkwFHpT61jynkFnUPHPWShX9A8Qc6PwJWxyySWpizTVdDApYZw9deENnNJ2u3mJHayF3jxVT",
  "key7": "2WniaxBDhtAemY8E9vjXiNCEuY8qreZUnZrXP4XYuNT1DpE2cjDiSjk9H6S9xLuzgWn2Qbws6rMQBVJjBCdd3GbS",
  "key8": "45AXA6QzWvd4wbBsiFpFYsDN9azHBgdNTTguhzTnPGaPMtRr52iHSMq64TQACoit1bWksM8tj5gc2s2y4x23yfU8",
  "key9": "u8o19349uoW2fh5ExBpKMgiMhqxFgq2zLZ7u6VQNdevbjn49DbkUvbaXBKEFVkoUh1pTKZEoD79BcP6nA5ViY4B",
  "key10": "5Y3UqQqWJvJEpLyTSE2zp4ww9k4NALnFD5iTnnWjRjx2MXrZ3Pr6iA72d3Hs6F5LbQHrocycvfFnoPaJB3z1DnEE",
  "key11": "4TVMeym36UoRW6PhMLwf9ceSGJEepUnz4P3YFaYDnJ9zQBHQDvzEnEorTr62V9k6MhZYxPD2CyMN7EtpQJgRqm6m",
  "key12": "2SuGo3cpYcZYj1n4yZTsEZYLTweMEtFVyi1kzsn5GMJELbbDRQtkqkhyA62GmjFoTvjdHjVFswoAYUrczScxfLiQ",
  "key13": "2AjwNknyXLzqwK3ZxbYt4tXy8eRVVgYqfbpqMaax1w9wWapzWqebxf8jn2ta6xXepxC83uSErvJubTHMwRncurSi",
  "key14": "5FNrSH1HNDgM3aPW3JohDFjHrz6s9JQLrWak4XBypJpMGNohkZ3Dtj5SeRTPsHWtFXKxWKs3PxdR6wzj43MvQbE1",
  "key15": "2PMEMXnJ7VtCV2ABF4ff9F8o3aE6Eg98AdqN2hmnL7KmrCt9vmtpkv1bGzgYaSSwV7i9F9y261Xnq5yGfp1poxjg",
  "key16": "23YY6CsmGdzpRA6gzqPJRo7JMMCpJVKV9GQRwJVPX56rSqFw7CW27NUhzexGH4aDLuVRxnchnwT4dNStSaxPYgSq",
  "key17": "2ktUuTRCvDmzF7yrVZSBvj4GqHzwvbCAej7FmMi18ZCDsx6gZfz4Xeo42hve2QgmtiDbcK6oYRBLsEcgmzekDz7k",
  "key18": "3mMkbM5ezJSQEZWi7GC1CvPzXc7BBUW69dUwC9aAMLLPNJF5RH4pJpPmfMWj8HcDYjd1U9tCL1Uvqa8vWzGT9PCU",
  "key19": "ryt8uqYCxbCnKQCP5qerd8KhJgyvyRdAfqaPwoviQTXHHmqpSwk8D4PR44xEjjkgBbA7hZpNu6gNN2Qry863erb",
  "key20": "2eijEm5BxRogRWJkVsCjfS54RjhG82i4noF6pzzihwJ8ySHe8Xwzd6FkYz26K8ipGzvfB1dwYNR6QtY9pZ44iX26",
  "key21": "4jNjDQSTEBgW1EY5VU5c8iBn8zvcr1b3f2TobWVYKz294CW4HDrytLwftkBdHXfmNVoXz5htLpJMa736wrDWpfnd",
  "key22": "2AF2gD76uBQD1aAUxzGWGxcQEYyov5BX8RVh6GoSHBbcSVuLRVPNgnfuEYJPXjAB9n2AJK1271f2PVpKjACwrvn6",
  "key23": "28SaftYPXAVprtjZd9aX6ZpFPnQFkz97BGNniinqU6poLpdT4CDvf8LbG7t8QoZa4mZjVN93MHjevWFhhzqGXpHJ",
  "key24": "2fqtiFgLqP2GRon71DKN5PQQaX8CFfyeyQh2t4jjyX3FMknMSyKq6SEMRWkJw3A2awXwuLzL4A8JKfg9YuqyEckg",
  "key25": "4kytVgcTz6hz7NFSu7x4Wq3LRTmkYsLvJ6ZNaSZXuYLgMzJryNT6j8PhMRkZuFWBRdknQytC9TsEG3iSmYwwQnEB",
  "key26": "2EGu8r7m7g4Ke9MpjsFpFtXXPL8oWMud8szNQ3YMLAjNEubgKcvySxRYeuHoNZdUsP3rz1MM7CuQxkH3DgknsHYe",
  "key27": "2DpSTJ8ickpEK86o8DyfMUMd9a3FEmZey1nKB6HBxE5c39xEsSPbb3hYAb59YxK5852eCoPynU7M4HkJc7VV79yv",
  "key28": "Vwo8Quf2NDt2EkU2VLdmBmFQdkqbvwbQMiTjMsgtipy4aBhDSFECutiU1jKJGNi5g2xmQGsJpkLmPBX6Pu6KYgY",
  "key29": "2VZrgJXjMgXL1UvEEmvmX2ve6Rnz1zb8YcQaNo9t8YVrBbr6JW3D8RrY2Nz6bCbUfW9cppxAZTBUWVMbKGUMBZRB",
  "key30": "23NQditQaM5G7JF97MPht7cTDhuHgN9taKPpUaJe9kUT4nXhQQR6zkKepUZKCgwVJTEChZot9cm4cnyRrN8xoqNz",
  "key31": "3oxLThaLodNLL5d8if97UtP3LDkmfERUnoCJ46EpCqsPkBufecLkmtsWbgBvHgkBsGcgefFXe26xqoBLZJzJpR6o",
  "key32": "5EbpJuBbLUD575amCwByCpLhzKR9bXhD5JJvyZEB6tRY189HG65cvdRUVAbByfcHi3JvpMf7daG4TUt8Qgt6cLfm",
  "key33": "TSqsTBpxD2zw1MmmT9Q4bFAoeVB1PJ7BWf4vEB9jHtGKrm6qC2SdiMDZBrFptgFhfYy5zDAXkxTukrLK2Kdokfc",
  "key34": "4gG1eg6hkkqohez5tR8Si3PrsFaMY9oXggcm4tKPX6UtApiCQyvmFt6RfGZwtF89d8cQ86my24fTLNB3uWyVft4G",
  "key35": "4rhdhUhdPAneXuqJTj7UgvRBEv9msRnDmxudg5RLFEE5UhiWH9N76n94EjgQNBiG3EjeoqWN8ibdiaXsw84Dfhxg"
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
