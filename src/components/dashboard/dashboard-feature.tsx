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
    "5dZzXtqUM5saUGUmq8GMNZKheLyo15ZZHfEeuUjNnup5jjfVivyZeKUQFoPoKmpEcHfBbeQYzhcryRg3iPJL6syb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PoxeEkAWcttzr7MggurDrVN3DgWCApvJN921aAVvHxFGnQ3TXYqP11mHGMUPb7DM5cHwc9GgiSeTb2VzZQ6wcq6",
  "key1": "nTtSM6x2cPzgbWoFz66dPn2khwV3GnSGWqCUkrefsvkXzRxiPR2FQ7phpLjbV3vfry5Uj7P9CgHAjvheScPJ2Q3",
  "key2": "4QBDHNWa1S6VMSpad8LRRqi51g7vyJ6v7JsgCNZkjQqqnWijtpdqittoZphUHgGq3T4VFyGSwqDPt9CmtFnuQMMB",
  "key3": "3Hb8mESm8p8d7GBPSnhdNxsAQ1Tst7216if2ESn4mjJb9EDtyM21nvuXcGEVU9swZmPH26fxdAKWFMBxDwhfuGVS",
  "key4": "u95eJp9hYLeCeCfpVn33pp17onRtCC9ZnAzfuGD5jAe56PuS6jdJhVEv5GsBnW6FRbsW11iFoz1fvBgKP9wZJbS",
  "key5": "5UgRUu6fMVdTafuoWrNNRzxqTinqXhh2wd5QjxPhaLy43RoiV9AjJ5TXuAYohyazdPcDESvgRdNo7UuXq5vMoFyY",
  "key6": "xinWbmeRafBqEkMES59dFUx2AAAUx5cVLnv2PQ5nh3ceM5e7yu7VnPaU291srix2nRy2fxD9QHHj1XiABvdjwtF",
  "key7": "3KSnn6Wp3H85sMRh3mmEEwum9WuFn9uXLfqxJkvissavnLBmqSxtHc3PH3Downkapx6KhxLwoTVhdsnhVfSvqNsd",
  "key8": "5MotVGp4YePNRrRBxFrpPF7Q6B5cM6bpMUigT5QvuDnu4PD625Sw93NzVPnycmUWGPAoEfyt2ZyDsUrEZtPoTcpq",
  "key9": "4BztFNbAxzEqzEqiHSrJkYM4aLRskcXUy9yuL44ns6hGe7YT3rNaZP68NxMnT3TcPxuVtHJdf7TWDW8HXEvNQ7p2",
  "key10": "n3zMX6fZrN7aGsyiTaCqkX31Coadw4ZBRVZUv5Z24cnEP21UnAgxqBLJTNwBTrdbgDPAj4QxGzyKVYYV5FbDYxP",
  "key11": "5vekvKqZ8G7Uv9XYVs1C4s9YpmDP51rcAZd67gMxZvDD9572GZHDm5P8U5qK93bv7QXborfuHC6mHhsJpbsS2Pev",
  "key12": "57S8Eh6NUR986TAMDwcs53srKAvG9MM6Mt16Kv6GWpr7e8hne7agTB8K4ZcYe6rnBEm4ymxNkgPX9Pqf9x2BfKew",
  "key13": "63pxbnK9yu6wqs35ST6yWx5ZAAdzwP1R8V4KT4DMy6fQ62hFk5eZuqbT3WaC4cegvNkngK8X3jWWvZe3vaHWL9ai",
  "key14": "63hgdMserYJfLJYKxWccVDbU1g5hEw8kVpic3zypKw3fAPQUAdJavT5msExBrT9R6waTWGdUPdMoV5r2msdUHdbY",
  "key15": "53i5Ut8Uk6ZurdVpaWwDvd2PLFjF2k3NcA4Pny2Tq8uQhSjEAet9r72HZ5hucB3XsBi8N81taeTXPdAnBPvXuywD",
  "key16": "3RKXCDPrtbrTs8ufHRUZWkE9L46QLUV8QYo8L2LwLtEGDTXQkxx2gwrVn7xZyuMrTZLqy4CCJbZfceA5CFh8qnbR",
  "key17": "4vHqkjkX392XRPU8ndwLCMDsECXS4fpMZ5zyp5z5rb3aStnDPqdDTxQkdSyCdpBTeE6WhyToTcQTfAgGPNGBFHJ2",
  "key18": "R5YmWHqwxMRuYD9wwZq4UAV1g91KBXX2EWDP8tQYsM4AjD9JoWJVi7DKfQQfBSmJXYBaCdUtERoDCSWn931ej1x",
  "key19": "25o2r8FHkVa5WZ8peUH6pVdNgJbZ37XV7BsGgjQLX6o4FyRjix5BM4JzXeYHG778euneibvZXToMagn6X14Wg3Hw",
  "key20": "snR4FDqVcWuMRVJaxHFk9MoaCgKUhyN7Ga6PoEdq3bt4DRAbHpqVv8dvj3K1fsx6MtHhnw7qV9GXwHwsq4znZft",
  "key21": "5d5BBkgjPe3VCHFkkQkZBJqX12yfWYbggY7DyK7zcFCY9YBAiXJT1cfzFJqA8ZCgTXVvv4PxohPZFasT35RbMBP3",
  "key22": "2fWipS8vtJQPTThgfvk3AJC6c863FNh3iZKcz9dSwKem1uxVyDEEZGT2mxiJx8pxJUv86pUMQaKgBXqHaob7RCSh",
  "key23": "54H4GEbz5hDTMFR3NWQ7Rmvmm2VX1ghYZRtgZ9coHnQbHE64UJiZm7EQD99YZGgJPsoUwjNSE7zj9zWeCbb73esL",
  "key24": "2mdayWgjCksTx3T2WtQL7RjE8BrGEz32WP6yyFBNJgmV1CaSohjarBzCjCyUuwUJRK8rCyhQQ8BRDkt21MRrL1Zg",
  "key25": "FarsWj1QVTufUjfvc4c4JvPoXL8hpjnQqDDTx2eoKDcWaTWvk2v6CB6UTPHpmkyQ88BmQLrrfGp76YxRMcqijGq",
  "key26": "3FN2fYZENNhZhPWearhWvTUUm24YTQLSjcSsCnachum4b1JbiZTN9Gde2tAJJ5VdcPoEaSPmKeM7bAvraNx1cb5V",
  "key27": "4rbw8pqHComtgwqgkTKPPuUAb71kkXdtrnWwYKEEWXP1tcQvKuDnJD74z8yuzxPXw6sBT5CbaodGPejHaxtw5ZLo",
  "key28": "5teg6ohvbzXYwPHvozxJmCxrjZCMyS8PkrmQDARa8ibnMKAZi6VGFnySxXWyk11va1AxpB1Pi5rzhGrigS7Hrmmx",
  "key29": "2Dy6WafrPmVVmJ2rgdPzC1Vs327yAdEuvaBBNnSJQqBPvU7F6xY8xBBv2V6UcKEnHsdXCE3h4xjHZ5TUmUiLXWM2",
  "key30": "5syWjpMZUmomCV7mjY7tYbq7be7w1PW22nAugDWmYimoKY5X22nwKfTiVXMdtg3uRq9mr4R9gsqhWbp32W2RjoiK",
  "key31": "2e1osFSBMUX3piZRaWCJFFBWxbHpoPM7Y83QB4D421ByeyRkraMSo1MREFHD3dYJdvm2fKdDbWEx5aa3VKHTfYJR",
  "key32": "4JYjc6y2hicgXyvLMvW2n8Nit6UWpGQNKoGmt4dDPnkBzri1zoRKdywPNphvyMeJgpwgn3pbXB3wJ1zxVKXRZw4T",
  "key33": "4mDkJyC4xHzjAdoh1TuzTYXBL5wecZwLBvFZawPYMkTH9q94MRXNQRnBaTautcqd3rNdgCSoLRNZ5Zmxy8NH6Mbf",
  "key34": "3VQPeuCfUb1VRwPe1JPJJ89xJN365CRPQvZbifsvXhuwBWDqUEihyDpp6ynTN8jpqCiFRFRtudJCMtyJyyhBV18q",
  "key35": "44EWdwV2kPztYyu95icdGMoYzqbVHrn2rUVv2WKESx8rw5NReX25caGjb8H2bRFHTMyTc3SrYsv5MAb41kAsNjuc",
  "key36": "4vgndKnx6P9YDYHFYfvJqmWBnG32JFRUzsQEQx4szg68QER9DCsg4jioDsVr6PPTub5kEMU8v3CehQXZ7hmW8NKi"
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
