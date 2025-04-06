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
    "22Ef9fgU5qemNhA2dPHjRfh1YNUfYF6A1BW78ucdaJYYhocPAQ5dxNEU735ui3zfaL9GEuLKDHF3QfUWgomKvqgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SSskNfy8L2QMxxuknBUZFS4gj4cmHz5cg5fRDVetZgBX4afevpitwAHgFYx6zZRLgKEWYvg4AxPZ8L7YaX3AiuZ",
  "key1": "1gHanCpFaWXhwvmFP1HnKEHNLDb75odUiAazEWxcQWjCkpg4wFLT6xw231pKqpQzWYskgvqG43USHmdVS7TRgfz",
  "key2": "3pjkGHuGNqtK22dbn7Sc2aKZZQPsxuE5B8AWp2E1CTQTGKrkG4iG4mD7Hiu4TiVs8u7RE6rc9dK7pMJLVr7EGxUo",
  "key3": "2B3wHd2etcDRcABgd3MzehrCEGp11EPJV71jXbguN1k163aWTheJSJnA1r3g9JLmh2rKCss6mu3hCGgXGezV1oyT",
  "key4": "63tGoQY58hqYZK41SzCQhW1kCwij8y54DGzDfDXwRFPnBPai4WpqPFKjeAzusPRtZ74dvGHqKLG71t3Dv1yVvgMq",
  "key5": "287FVAKCMhrT52qPvJ89bVx4QKMjmQfAwzMaQyksZyna9wPnFBtrK93qQWUTucUNRdnuHDkH8J1MLpCAPomUUVD8",
  "key6": "YHZf9X6hyHUwvULCFoe4JChvpnGsdVPoWFbwHCVgUJFR23n8wq8SHuzDUF6ozamheSVgwc8ud7nsXnFJUAs3qP6",
  "key7": "5H5fEq2FQ5NaBRoFAbLyJfnYLbNwycgcnPSgaum89cFvc1nLaARUt9CkMG9AjmcbpWvSfTo2QkinaR64LWEq8JKB",
  "key8": "4L6z7Bi6HY1LayEm6az3R3AAF5adHPkpHDvikxtU4GsCykTsJa53q14bf8MukaAhhyDFJktBn3r2MiqNcadhfy7B",
  "key9": "5YBeCVypCk2REaZLeKqfnSW1LCo4BW7rDJ6sJXCwiEZdYdVG5muNogLT88nMeJN3pnvDDT1XuhLEYS8S8hfPQaw4",
  "key10": "2rwTdVfNKu6AruzwKjU3rtRt6bBHVWBZHqspEpyS8a5DJJGfyRYrU734k3bbUUSN87Z43XLGdM6MmW8W1hF6FwLa",
  "key11": "3odziYhuZBCc73DhamDifa6An8R3RVEKFFkmZKk9X1DUohBYNWmJ8TmKkkts48usLVoXqHtMo7zdYU28biSgoU6L",
  "key12": "5XtkjSYy3gkXCZiEqyvyj6bEAcnzCNHeLZhnc3Lzv4ZGB8WaZQKETQFhPzBWAWvDz2aJwAeQn2HgigugzCiaDnXg",
  "key13": "4vFfEZqh5Paort7NPtEMA5bvXfX5jPzRb1E1yKBJgJ9rXavt6MZ6J6yqnKhorcSuDaUr9CjuwtidpbjbEGkKPrkv",
  "key14": "4CzshTV1JQ57awTkyRPqfezxwhLJTb475vVXSP5HtHN72SJRh98FVsGhwj4TBGnc3ss4Bd6MwgdSgr2KPQSWuWGG",
  "key15": "46KKY4uFz9M5Gjd2PSykWN6ffuqxrcAHzwgX1XhM3HNW119UBGQtGZgPFTemGxK93JKKQFW6sdDPiDzzoK5eM3Xe",
  "key16": "2ZRdTGuiJKxpziBRjTHECeS1gSyyshEqWNgKVrV3AhhFrac1xSCAavHrjQekSLr2iLfhpJhhx7KsV7asDWKGuVcN",
  "key17": "5PWNXzs6pS2quhaBvZZ83bQboXQVQ2LZAY81hA9KA2n5r21W43UBHKYXLt2Vt9W4DAMWvGV25cpUA8ZZzwyXDZn6",
  "key18": "3rxVyAXp4Ed31MeQqbZ9CB33pAAs2b7HMfyjvPAmXwR61KBiAsAZudxYWNhRemAkgpRGZDfnzhxS32LHsS4nnRAZ",
  "key19": "4xQNkTFabhqM6wP3aHrqHoscHBzCLGHypcA9uZdBsNzoYBNaUYyR9WGBw86uGXHjWT2RHovhomWMAz2LwkDRMvhS",
  "key20": "3Dhyj4gdpqerNQEV1u1DYqTuERpBXNMkKjA8mvuUb62SXv2aY5vNTyHd2dr3MP2J12b3rJRmRvSENUmwH7LhGW7K",
  "key21": "5HsKgb9DM5qSpSya1YfTNdHekk6J5cjAnrRvT1Fs9zM9dCNndd1kACky7oJbAes9Gn3JQPbGf2wmjNJ6K9SoFNdz",
  "key22": "4U86pW2ucUJ7uXiZaoW7j9Cv2XpuhR9bN6fL29pCY3qKEZNS5tFas6GGzji9CQUEUDcR7vd6SFPd4HrA6cpdBYLQ",
  "key23": "ku2f5ArLVwZj19FWkoWn3tmbm9v2TwnRayeobkod2hAk2pfvm3NpSBTXaCoU9e3RTMyqKWdeTdYeT5LvSCXg6bB",
  "key24": "2gTbupbxKKXkyAFGGJrpak7Gfwf14TfaosENSt9MmrBUTYrSBAcdeV4A59B3e3DX712KPKD6pZHksZvfDWUufGhZ",
  "key25": "3RprK2cyzqNFqAxMXwGTMznZDuGryr7p3ZKSG1m5QGpc1wD1kRvFD6KKGqSeDLr8zY9jgw1EVjrAGgmUA68zHfEg",
  "key26": "5Qhs3tAaGtQdZkWctM56Vhf2A2qvfTVJUK5vmjaC7ieqRd5aSGStWmJwKJabL9sawsS2BhMLtKjMfvDbDjQSRFFX",
  "key27": "22mELz3Y5Y7iTAqevKEQ2tzj9dzhBThCadPgdLeY2JbqmBL99Qn4zVXN9UX5vHi6whWVcdqDdDuekxbaN3wwmiKv",
  "key28": "dRaYCunuXc9jgMwzwQ6nNeLntnqStGLM7SubNzUT7wbUoLPukdBg4kYm9xqgb9F4SZrNiJBxBBjn9RD1GD11SAm",
  "key29": "2cRmkRASoWgDUXZSfwXruDrhxGN85MXGtHwiLudFEcNdrprVGdsqzd2FuvJpis46pRzLzn6BKNUeAr2xmBA2NYHk",
  "key30": "odnNtawzc936qbqx3FC1NYA3QipK5PHn4Nwg9uwc2j12YfoLemrsbD1Fetw73WaM6mwbh7KN1UxBHqLSSHvwqpu",
  "key31": "X6J6oTvGKRUJxFd8PQemjKSHwSqRr1ZdCyxf29hDSvEi86bpAtpoh4bWDH1L755D2V3tUBLuXFfYCj8HZ5rxqm7",
  "key32": "4SpERXqAVMzxSh2ey8ipsTsyacFQepzMTBx4mLqyQBxtQFGehJqbsgkPXECNFFLAWsALkEtgbmW22GZemwDc7KQz",
  "key33": "48GDYYLvs3KBXdbATkmT1rYhqDovPjKCoTKekWeNTS2K3P14UEKbgLqzsyJReUsZ5PLGtRdhUYmAxFPGRF3VQhGN",
  "key34": "2x2QdKp5gaqws74QFqe7t8JwfNtjxjYjGgEecDztSLwRLVCHvkNDCHSYpowKWbnnLTM1nRE4SgCyxqHQMWbcP3QC",
  "key35": "3K6yGNaiGcRzWiwHYJr2LKTHPaH5KD9Zv4Hr1McVFGdrhN598ayB4FgAfWaNogA9fgHg5zerbonL8b5Bdbts4AoM",
  "key36": "XzfF1vek2idLGF1c8UZ1AbVNKF5iaAjH8GwaJxtWGeMz4ao8nz58YyjfTmdWano1b4HrvD7Rpebzg6D9YEBWchu",
  "key37": "2oK5au7TNfSZHoKfz2GrnqifZtuJWHKj1LZQDPLZTHALDtDqmapesChexFrbUzjrhiz3Nbzs2EWfUFiqpYpA8xcp",
  "key38": "5yzNrUevxWzLmEH7kDQE2gckaxHWfuqGcSf3Sgo1CzGSrTEQXZ7JqjLT8mjNNi65K2nBaaroczfFDjgJUYA2PvCu",
  "key39": "3a1rWraRFsobbsBneaq3uMSbKAWV2zDSBrLfUJiR6YLSFDjfV3JN54FMuvE3xuTTb6JFTAbC92Qbdox4fPZF9PmC",
  "key40": "5kGSJTPgrYbyH7QVeC8bZgRLrvFYC37Qf7fv8dZUNWA6qnbGvKExuQ9qTZXbAsJocHCgJCvX8ZGtCJkxj1YmgC7f",
  "key41": "2UaYp9QgisfhPmf9ZB4TdSJvAov5zmDgpYMJdEggxf2hsmFyCUUCg7CpA2H4LUwQ9KqifzExL72wPDoUogtpYxLR"
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
