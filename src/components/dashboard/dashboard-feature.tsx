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
    "5hUzsY3fGpfCvRJQokXiS7aeGi2WJF1isJ697Peqt2CPGZLGT91nBaJ2iUpiqrG5f7prCkZicTsVvCoyniGSWqFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aMrEKBpRkvNo7GadX2CuBu1vh1qwD26wTZVJsYjfaxLQbt2H4LQhkRCLcDbpmsuqMoHwYUpZBve4jgS9y5AYZGS",
  "key1": "3J8YHQznfc7diU1UMhpxHrPcN5bzoS8uBBRDvEHrbcZUBuUHvV3rhYxYM9gWEmMAmvygKg4JWPPsHd2CBdsPfNbM",
  "key2": "5L7ocn5hHEvpZDbnz5PoQ7GaVNULSCfrZvY2RXZMuwThW4SC3AF3VGedQjyrognt4NAjartKHoPjcqZNhNzzFZ4i",
  "key3": "291qWi8F25vp7S3NJYuLR1FCghoauJoHeNrVCf8tEkMp49oim1f3fh7U6TBMQ6s275NT9YDBL2QEJRZioBr7KGng",
  "key4": "HroxwiN2BVRC3X3nF4JwCNfAS6wNDqPc7ggYj65qN19UiZBsgSRQv1mP3ejURtxHdZzkxZ5q4UmKFyD9jX589iw",
  "key5": "2kdErmyUXzFEfrcyTnD9H91KUN3QeSy1J5F7t1TE1sGfoDcWzKf4DAYbYUxNjWXa5x3KFJCS23r1YnzMSRgvyVgu",
  "key6": "oJKf9nxmxoNg7aEcPVTJSt9yUayYLWW85WvxVNoQupb4U67Wjfw1ZFC9vkALCWXZKsjBVPFHZQqyb53DHvwMxUy",
  "key7": "3XXwJjYtEQd2rrhzfnCSjypGsX18wKzJSpCS4GyhYLUDBKnFuyevNTHcqBvgVzWsJmiFpk9Z4XvEs783XnzWHcrQ",
  "key8": "3CuWSE6tdhbrsEoD2SGjRVzjvapq7gsjyobpQbecEciVvUukdCVnqhD8G3Y16oiQ89c6ubnGp2fzSWxjkJNWHkdY",
  "key9": "5mCyarNdGHAAEpYyLvE56UchcbdKvkvncDgqXx9LyipgPsANqyABD69KhJZcCRtgW4nPQKn6PUn4G9tB8UCQZwxX",
  "key10": "4we3wFnMRT7Y6XGUmFt5tkRdZGWwbnL5KgHhxgoFe1sFVeV4NAAFB8rkZknUVTxMA3Npvup1YFK1BoEyZoQaoRE3",
  "key11": "2PW1JFtXWfVnnSfuH28yHHT9UAU6LuAq2HAbZYzcMS2TcWYhWJ98se2J4EJHa6WGXWoAzo51Fpq7YdSzfe1aEKhy",
  "key12": "32Ld78rvHnUDFbZraZN83s8paKhbaq7EHRWKDD6JbJVoSKBP73g1L2vADQUehPLv5ih3EdJUUrxafPpgYad21R7d",
  "key13": "5ssh4h4tmntncrfK7nSCNR9saYWLg7JaK1LyDioDJaj5PbtcGsMtv1TqZLSiNaUAsY8yfMSRRnDrn6XvADrZ8kH1",
  "key14": "4omPikX93maXdnpQKMhGXxStPHBLCivAdehvF7zzVCjzXm7TxNigmdMEaqyR9GB9d61nAEjAUyFjbGXUmHMjV7Uz",
  "key15": "casyk9pYatbFRD8jFJ2bRRjCtvcAGkfnCLB6HZUmJ9d5NiGfEu2Kirnq8qN2PUeuJGJbVjsNvXYVqrG8Ken4Tnk",
  "key16": "2XPenwWaGsRDtzzNHwmvR7B8FmA9J2zCcYtp2gCXxDFTSUC3zg9zNcFtFKmw9Wg7CmfZJku6wffnFGusASwTsD6y",
  "key17": "5ss3xkMZ6zyfBYBzP98bDxsD69aCqRRYEGkSBuMaPfHkGESRFHtZM2mnSsB6aXLtxPZkwhX8HSH2iztDS7wBuuQC",
  "key18": "4CU749G6jciMftcCguyy899qyYbQsYvBKW2dKuKhDu7xEM5Jjdi9xzGatgojSizRnTUDxsjALxjCJGvHWkuAEw9Q",
  "key19": "LZvGi8M3RgmJUzcApB47uhEaCvPf5t6DH6pyXoqn35iNPSP9m5s45gwHCmssLrzcGCCk2yocUrhbuVGmGj25ib5",
  "key20": "6hsyPXbc3uNibRAfutVrUJhv4mw5oa9VP1TahQyHtoHvniznZzf5eZhxoS6kzsQ5zCabrqcFXHNPYT6tBxDMPkK",
  "key21": "3YLg5bx3vKQHsDyQzQ2MRmDdmbKs4UvyYCQk2mfkSVv1AgJUjRgoVJpgxq8qcNxGWfbg99juuCRspcmaUmKBh9hf",
  "key22": "42fYR96Rwkee83vqP1EVjwiRKFQ2DsuJLvJ6yi7TmuSWB8Ny1RwjJLH8sJPFohsAM5UDFhP5zAWZ3hxzHYcVfqTm",
  "key23": "5Vt1VqFgp5EdAGc7opMVninVWVtg9DQn6cacAfvQ4FU5x7Y31oGxZQfJMDdGzpT5VG44LEGuCV4mRYpFVQeEN7nU",
  "key24": "53Bz8Cz7YtXkLnKdZub272sQBZA3U4nvzwjFdJMyftbq22P3Rp4CDHjqF4rErHw5UHoYTXTzLNsJK3jMJCrBDEPp",
  "key25": "5d74VSztAMunrV1d39pu4XjhbYprKJcqs285RStcVYbH9srpwUeZnFQ8vhwdHxebQ7PPQ3uzbXi9XALnuDzXrn97",
  "key26": "3vDAUnCLxB45vkEEckAdo7N3daBZWMp7zJ3f3H9wzbmmcJkhR2tsXk13MkaHoKHfo4Sj1V9obZ2SRTMvqUdxQ7Zt",
  "key27": "2DWukh6ZsPJQuHWuE4TFkRq1rGdNoVhq8oeQAtab8MzwFiFbSphkH68NxZcxNsmHDBF1bXuWWktN3UEeoVnjhX5D",
  "key28": "yZC42StvNM2tctG7Tv7DUDHhUv7vZ8EyLNhLSPr6yvUPuS8b8qM7vavnDNyAJ1HK1yepxoL84PTzgSnAW94a5jJ",
  "key29": "413hix35c1wSyTzooUBbt2RysriAiotkszqnL1PBvBFWrrW8BVxPLeoPf8s8p7X5K7LpGo2s8Aptwv8jKF2mJQh5",
  "key30": "2hqXRico8V28s19WrbUVJcjGa87YvRm2CKccBN3hx1Q11xu2Hf9V26CKjDGVtpwh4FBJ8eYnPdZey7wDRaMDJ4Va",
  "key31": "2YCwke36CsvfxSH4x2fjnDBZJhQNgzGgF5gZ8ToRj5mDxHxyT2SRPFQ57uHoXhAUaeWzs5VpdjHHqsge5abPkq83",
  "key32": "3VwSgeeFnm9DBSNkg1ytJDNfAwF3ZfEaH8UTRJgY5GCWduc6ytJ6o1foLCtnWoSpFi21T5qe9mf4wo46f5rc5F1B",
  "key33": "27E7GmnerUVNpNC3CPKk26xs3VNdSU6g7ZVVATEzeQ3w5J9GvepJDAETMwFUXaKekxZEs8DJo1jMDnaoXMmG8eiu",
  "key34": "33EsGGAM2c1eGxUCNhQfbvytYyv42p3uASzQxh65RrpnSbo1Yug8e8b8nTxyiNWBSu1mFafHEW8XFKzdEAJCqpQi",
  "key35": "3KSTzu9Lcd3Y5dj43RZ8VWj3WhtLeTk531jufiVCotXjZkDaxsJAdYqTkWznpkamn1FgsLhsxG7YjkjDJoyh6qkX",
  "key36": "4sDtbXgNnUXgkdk7mamxhvmc9waDT7oazYh6K6jyAqVo3KtNzZvGNkFhtojnuTf3uDVsHhze2rx1LUETUjF5nknR",
  "key37": "4MLy6PjeDy6CQxMzx7CyVP5U7GE8KteJXkfSEaMnfFuHFDpK9UCbFAXcn9M6nYogq1uuqpxdo3jrjFonhzXXvUrP",
  "key38": "64YRSSNFvHfwm7gv819Un7CJLt1SPmay6eDGFFqrY1nWrXNptTmiLRGEbLg1nPxojjqYs4BbGwE4rhS8RQ49cvC",
  "key39": "7pFREaTnVvfWZ3E7uLcJ9txHm5YawNxMhggjN9nBsv5GmYmPt9H7RBf7qyxy9apiJoNWdCXAdLDaEUUyztJTCkQ",
  "key40": "5cPpX2ymbXZL5yGNUj948SPydph4bCtbVUYgfovtPZCbggAhaCcbV1GQcuSDcXbMdfcDuv67ahq9EuTjxS4tCnB",
  "key41": "5ydoJ8HS73y5pRqHRfiAgEzP6fu4FDDTRzuGUkcKNCgGb5cKNBa2MHyEiKT4mz9jruhfVABZbURsAdpwronu3ReB"
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
