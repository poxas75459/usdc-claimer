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
    "2y2f9VH3JrT9JvwrTRAGqJmrV9qGMaAhyx9ZJSgD6Laso5TZ2pHxYnwoSrLG6eH8X3x6abPYQ4a4ksG3z4z9jFXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tCUwQpWVt6fUojTdDj81gt3TB9zBZ5C5ZWSUd6XZGk5d9MwBTo9RiygyrjGPWsitMA4tJjjHjbsdLX11W65NHpL",
  "key1": "2Mp4Q3qadyth7XceBV9GBAYQm9fFKHPRsWRudbddKLN5eqzWg5ZDePHPvTHJdUf1NpRqbR1DGPrXehAJtX7E5njc",
  "key2": "3XqMqGUeGzCvmaMGMFSBfvs5CZEShbPpeGED9ZG7iEqtPoKphwZMwDstVxrMoHiGc8N31Fqox29TvXF74nW3v3V6",
  "key3": "vTdNt4BBiTiRn7WayNzTA4nKNakbWa3NPg6X54NWhYmwPSDJHpnhpqp4PJRxGsRJxSB8EjVD6L8rQxmq1d8ffNP",
  "key4": "4BTRxMMq3EFbZqsUH6MiqMoaJztkUWBMdtsDEfejzDSAatCNepXYQ7W5MXKscy8Bqhccp7m6Lyss7uzqtFL2razY",
  "key5": "464iRDBLG9axcYide3wkAoaM4zi1g7FC35GmADWkzeq4PeXtgkrB4qxMeS5qiYEcDSdzn8KT724ruFKEjEJ5JdyS",
  "key6": "PkntxLiF5FYUMumJw9ciuuCcai5ucMR6bMnYKfHHtjp2ntdGC7hXN1Qdie5gYi43LVdwkC8LSrhMLzJFoKdkQou",
  "key7": "3RuHcjpw3GRjwFSz81EnMi1ZsW8GT1inEwDgQgZ3J1im6M3tr91tnthn4CYbu14oKp5q4KeAYNiTEQRbHTS7zoXy",
  "key8": "3cNBGJV561A92u2AYB9ij9pYTRhZQ3pRCKrSvYBcu5H54AFFQyXkiydoR75tzNGoxNAXPydNtFTzv4KkijbLCfNr",
  "key9": "5tpe6z8StNkELmGESABySHrmbJZjHmPq7BfJZ8BffTb4pjP27QSqDXdWL4kVUbhv2scjw3WPzB2LaaX11sKCwhHn",
  "key10": "54pSFCyhNie4f3wCx2pM1aLFSGzTiudZNgZr9iAztsFsKyxUCnz43y821pZwMSq9MPzwETwEKsdjFKHFXXyNfxAC",
  "key11": "4ZfBi1gdgS5MMffEfXwBv7HdCdAAKA6g3ripriM6BobYHvEL5noMFY9U7jAdP1D8JVYvTeie4PMvhc2zYAKbfpmY",
  "key12": "5AQY27d5Td8XdXD77t32cmCCHLeiqrMNJJrZEZ5syuEUQakzRGoM9ywoDEuY7e8wFf2nwbYFfrAG8TMJrED3AGv3",
  "key13": "p7h3YQHsJ5QZd7yw1AacqzKD1u8SUMfhMATkiuX2qwHN1H4eHRpd3ywZ2VpvVCyEMYhvyheQsiHS4NUQ3vgEq1t",
  "key14": "yG6NsKa7pkELJRaThWw4yLoWQvdfQY2yUPateeVbS2Xwf4SXAAVVghYnfFgn1qKTr1ccCSuccu7cDYjtNxQoF92",
  "key15": "Qw5boasNBZj63tAwHaxBnyg9KPzaw8rQ2SWvDgrv459uZ9zB7r9QfRfZnhZM8Vjj7TUeCid9qcbgLWMXdHACTSv",
  "key16": "2UrCTkgSrvEVQsrXu5fsHpMQuifPkQyqnhkKvr6sGtY5t4M6YBXQ3rM2uzSGyvEn9dhw4iGbNXiafJz72WXD1phr",
  "key17": "4gAWFD8AVMdUgUNJA5StQ3JeeiafZatmhsDQJ7RabJvPENcurbHDz69EAxjtythSbADR11KUCkvKYrrRwntBYGSQ",
  "key18": "4eh6neSYQRm31hAEbC5KKx1yMypMoDaPgEwvUUnQ3N2rRoZdx4ZeZTrFSNtXrrcHJBHRBx5xru5Muqzz2pV3YUKe",
  "key19": "4bgK8yJtbNokUewWLRZwqu6Re3C1zc2pBjYy767KJvz73JKctvYZPaLLA9v5QzxtqA7KACrkyuuFRcWMC9q68PVP",
  "key20": "3GwzztqgrGetDBmG4mQP4sLn4nuR5jqNmuWjwe832hfeZYK6eu4GyFVA25kAg8w8usMRhU6k1ReU1SzddRH1Zg69",
  "key21": "D4zd2Brgm1CqH3LaRBUy3Kb73UVYP6pTAmKW8u5o3pB13yz8Dc5GifKMAdAXnoJ23y8KDjoTrpMD7AZf1ekyBES",
  "key22": "2EgoShd4oKeFbey16hCYvSyHa6yHN4aFKu67vGNQuh2KvbdwQrj2RrqRt11dr3fSg5heyhaHWmsrPCqhu9dWJxxL",
  "key23": "3XYCJkX9eSHmJYQD1k65xv2YbSPnXZL4YShCCXJZp4z1xiXBHi9Enq8GBwP2jy2D8ZHAAd7r2cKtNSVpNY3nwcmB",
  "key24": "4pfraueGRh4xtaobEcnAvY31oE3rGdXfq1zM1CSGNrsGt2yLtbA2tigRjup69Y9RcT2Q9pa2mxyrdQFnDQkAwQ1x",
  "key25": "z3iztCVuhwWD4LaggqrsZbHVWV6erD6m4yuj4imd9EbcquKuAGpX3KHL4Ef1DfFgP6pTvWYth17HVLdQBWLAqr8",
  "key26": "5M6D9HrYvsvNtsEWLNkSbyWYdGpoLzFSNNfdkap3kgaryvwe3Dae2bDVjPsTAFJBECeoPiCYv3SQTQs3b8ecdAyt",
  "key27": "22iisz6g2vhJvpnH1XJMRqmo13tgqbD6PeeXcGXVEZK97BL4hmsBWCZbbXLruHV6nLeFKNdsuH7KzF4Uk6uPZccd",
  "key28": "5stovtTfKJoM1xjtjxL2bjekTxQfZUoyupMKz8pPrFwJz1FpbPGUDM6w7xw4err7iyXqdyxovnFjFYeSgqESJg36",
  "key29": "4WQiTKZGUQ1tNWgmYhTvmvLvZmA6SDux6pynEZ5E5YTtaUoZR3nxyTTybWasiQibHMnjKe68LRwqKuoJsxdUySd9",
  "key30": "4cmU3Br2dZFBhXTj8eM4Pp3qaRSneQNeVCaD8kT3oMQUw7fx4R7nNtgqURmcLW5HX5mcwNDvM3Sq65ttDa8UDTtN",
  "key31": "zHpD594WzrgwrPjknx8jxRLUxmtWyutWPZVVd5Ju362Yy1bjaG7RGCX7Gk5PwpjjTPxneSCCPYsNvAvcQDEQV7F",
  "key32": "2mXRfj6nVosA6x1DDDZVSHKM6w7rJFSqvc42L9mN7JzwC9XaJrQ5HFmvUXwhL3hmPNCpAd2drhv7czhFJ3cf9z8i"
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
