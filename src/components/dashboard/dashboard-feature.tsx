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
    "4LydoT8qhqjXYJv7C5GWwN5P8Z6iv9NmtARWkE8EWXVfduGH3KKfAh2Ua1c3JmMMsLUjPn2TVaoxtV39wyuAssWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z2NannxLpdEHruZgn3SK3hPrNF2NqQDTaNJbFDFtXXEvpKHFkP2PyR17z8QB4myVNpLWATqQwExapMqHBSNpr8W",
  "key1": "43oiFvLkiJ8uTGLeajZULX4sLmsepfRhipEFbzCRbFXd9EapyRUcDQuXLnSUuC7D7EtBJD1cSmxGME4CQM549T9F",
  "key2": "4v1PTA3YPrRoznb5wtHWsdmVTgz3icfLYhKLLQn19e9EUBtLNzCwbaxBoa4uQ7hSQ5UKMCJzA1XYLpskFsxmCbYx",
  "key3": "2GnJ6yi97DMgHZsfb8bjNqVChf6vktbo7SQiV79ZXmC6JwCHSu4AHTewwUVDT9uTQYNC29Ewcd7i8VECTj2fWCNz",
  "key4": "5rvFmREdSzKVm2dqJMv9KmySWZcu4B8z8ZkL9KsoYkJRV6EMQs4NuC5PXwt4J1eJWQWnPxFudmV3M1eUL1WM9o1x",
  "key5": "32uFSiF2VStRLiSLh4AUynmz1ccsPgwdh3SG4gaAoctHwZKYN1So85sPyF93qqim1UNZWNkeFWjEa8vxzNeaWTFx",
  "key6": "61DvCf9arMm6C9AFByX4dL9dMUda1Gm4Pr7DBZMoL8btRPc73UhJTYsPMu82wjCmtBEezMawDZbxL3jEwExF6TfK",
  "key7": "3sDTDkw4JpNT3ytnvvvu439hFcNDMfQzdnomgDcPuXgQbC3fMNB3Kek62ymv1HDp2J4dkQ82Z1koCoGvGnLHXayj",
  "key8": "2YhGztk9jRKgiU9cWKyyp3m9QkU8iUKnT1WHsevzQsF8y3HjfKjFDc2QhAiK5JMAyjomJ3xZCRv3wDoYfA5qfybU",
  "key9": "3g1RVQfnr2WYs7vr3pb7FPUXPCqSk1QctRMxhJVxps1VvXWQuWpzmjrLJzmyGwzYb3kv5X6rWhUJXzWS4iDvVjRR",
  "key10": "5GdwKDF11zpBDEpqaRBhE9jrR1kA47XzevuJTTYSRwGcVyfXHmj5zK9E5pghAZWHJ36XtYVQHnVCDhMiRRqZi4LS",
  "key11": "3aThns3umAshR5p5m3nVoidgaZjnK4kNtHVbteAVDJZGHeVCRCyH5BmbX4VJvZNesx9CgT3Wvv8iKMqB2eTpfAvN",
  "key12": "2NHQMSEAoRqm3L1uDj4DEUDtbQ8wKaJGHphWX5iosSf53M4KTaLq7cPfjYTJvuXeiFarDAxvTkyt1t9Wouxcov4",
  "key13": "5N53qF5ySSQAcenotVW4FZrhcHjjrgpoH3caL2XvL23Jn7xYW5QiKQ1CEiasLSmjr5CY6iUZubcmLGQJmfMXbqHD",
  "key14": "2R65C98F2EETGJb1UNq77Eg3fkhwmgEZ9Mg3jGMoW7QzNG5yn7pahB1Q1Vds9uCEtyDp57hTo5p5DNXhbGSs5ACb",
  "key15": "22EuV36HF5TMrEWW3EmTPSHM3SHG9bZvF8DwMZuNHVGsVWSgxRu7kVgW2pqLMkHdEeMG9VyctFPky5o2sRkErhLD",
  "key16": "487T6g4KNbWne9mCKFpvWKCWGr3XzT9Fi3WFyojSHJUKqiqmdmXqxSgFs5xxTmuHvinbV56Nt131xTjPdD9DxF9y",
  "key17": "3JV2LzqojWMkQQmCEmJUAUp9pa2f4gZ4SdqZThz3MNLv83BThYjei4bJ4G6zR4Y4f8NXhJanYvHbPEaY6JQ9VMRt",
  "key18": "48vNKEiWxPXdJ3H5XrGM3HJaGyjVWivnDbwJv74HevfroZvnUWvHzHaKXS1K9oeykcPwcTBEiBApxnoGMGyrWwjx",
  "key19": "5XEJTNLGM9vq1kaZVbe3aH6kq8w7CxtSUhDd4DYDUPLGm7YkKwo5B6izqY8J1hy3pHMYTNiNsQ1rdXBwLLRLBhVM",
  "key20": "3rRfhyHRiojQP4zw1kXvqk1mJEqLMjwuA4HBzwdBw5dgwckRguxMqdKvcfk6uw9rjA3cjqfyh2EYfwg5zrkg2e7j",
  "key21": "4T4GZZf671AfkgsnzACQfZPT2AhE9qH9dd43bw8cuUdfvN8xFEpQ2WbHPWPdp5CviBj1qtgUhVhEhCrp255DkKXx",
  "key22": "5upNjnLUQ3YVTiMicUFJYAzkjpYuufuLpJGWrZfD32ZCRV1AznbKmpWxqivbvgwzMuKNoUmkAaKRnUC8FXYR9eDv",
  "key23": "4FKT1kSzmwmY4qhs3ANxWv1yjbCbLNuRPk5eGrcdwAaPJTPbyryyHpP2ndgxMEfBa22fBYgioyCReZ8PhcToQcns",
  "key24": "2YQX4grpJ75PzNqLwgkFtm62qdL5gMhECyV1yGcYZZxzePSfzNq9QHRcSm1WScyB6nWhhTbmhDoPJMHzK3yh4Pe3",
  "key25": "54iTzwETk4HrvZZvL5qRhcPTNVasyzZs9P1W2WBxMTAwSRzwrjZtAsXcEBKaifLTCvk2yJDzca5f9fjB92FN5u8W",
  "key26": "2vg7UuTybmydzm3NTKPr4CqKAuZTuUopcGkD5tWtDGYWjBAKUTk9rP3ftTorZ2Ad7Zrxke1VtZKZjrrZevHqp5mp",
  "key27": "335ESvcTXKUXHDh4K6GoJKwCofdPLgRGJ8m2d8sAvkpEJBKqFLDa5CBA9aJwenzU9jjAgDEKacdQoAVhFpFhtLyG",
  "key28": "CnmDj4mvq7fBuG9a2AJHp1yQRcyqZqtTCrSpg8K1Z2U5zAoW3gNhDvnou1ZkS1532rPzmbQZTTLuFFwDsoiLhT6",
  "key29": "5hRKzRdFNt8RTgedYVPb2g1H1wETPaZyrhkRUYig8TwSarfA9im2fp6p6GKsLig5WZ4K5172bKkfE18Kbcx1c2Pw"
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
