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
    "ynmDENA5LF5CWLiydnDdxE8vkfEehoqyb7gzthEZZqzQfncCwwrcSpVi5ZpZjPB9VZkjnKSpEFtexevnjBpjNQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KpFzov1pesYv1WP7ZPYHKNMwFAcwgu1E7JeK33BfcTf4HVpAUaSLKdYbvdgyAoqXhrzugVFjmAwSvcFJCEEPE4W",
  "key1": "5DkCqqCMFhJFr3pVayr4z1ybPHfWY6gPRdDRC2gwuZzFuKaRXuWgLkWR6sRyRC6y6yFsvwbWXS7BdbA4Pwkx8Yff",
  "key2": "4sWhz1PaFAgBuvJj4h5QTcoxjeQZsbeKj3beaQmFk4QBZShkSWgZ8VukKgtvSPdReGDo3N7y9m3wFqneqGuLhmTY",
  "key3": "2J3NpUMQwibHwUPVyKw7Bm92ay77X4go1Jbj1JfNuLGep8K5wzRY1uJbUqwgoC9W5oFEG8V4tPCBpkuGwTAyjTJ1",
  "key4": "3TWZYSuapkPSy8buACBLa514hLGRehLtgA9eB5BasPc3HNxDDXMQBAq9KKFwe9eurYv9kGnoJHjzFL4mAUAPiWss",
  "key5": "2xnVbHJJUw1hmh2iMec6sjFCXy6c2hn71ja7unKewH4ae2A3u7c8BsTTbkVowBaa4RXxRGP9PbEJ88LjTse1mcqU",
  "key6": "gJk8ZRByvpWUx1d85FYR9HPiMKDevHpjYiZRgJ4BmhYNFuzXVjrtCoURoEsMU9d8TQvghzn8LvgY5Y8HN5C5gDx",
  "key7": "CxwZYEWgWTHvgVTsoSwjgn7nQHcHTzhPY1FCiQxbmxPJSprR1hSNAqcrhoxKF4z3uZtaxaMmDJCKB9hnpqgs8Mb",
  "key8": "4446C5uMnbBbGUdCi5zv21v66E9xXoxT6EkBerHnhV5ZLydEzkS9p6avUrBshMFTWb9eXNoKMqiZ8nFjDuDqk5dB",
  "key9": "HnAvTUCyimf2WKeuadwWhvGmRH7oJnGgbxVDP5JnQY19WU26MzrBnkRTkGxfBVU3v4cEu2prbmFdAszAw3XSvNb",
  "key10": "5ekucdF55u33AJ5itJS5siEyJfQCQdVpDhnkAuRTRP29WC95YR57JxdqC18kz7diJRCbEVZdXGP3Qn1c29KXv3GQ",
  "key11": "29NRQpbPetTxjnxzHETaHeVzJiVfLpxijYvNpNnUf7W5oYtkJFfVum24ps1BmMyxmVKLsQ7VXahFMj6q4LhjjsMc",
  "key12": "LjSY4Zj1SwhuruMLzCXNaJ83ven31RCaK8qCJPN2ZU36xj9CVHontcLhJsmSBwd8smzaokEmrWKK2HC21sxWCsa",
  "key13": "2b9UtiRaW93H4cSqhv3hwE6pX64GhPvj31iviPjvSPYvd6j6UkbShrkW44tLSaenoi84TnZotEvoJBCpQCnWVBb3",
  "key14": "2hLL82yvpqJGQ1whnM1XpGrQr3jrym3kfppmrFBvyGpjQjtdBSh2DLntZ1jyDEVqjZABidLt23uzospabLVGqULV",
  "key15": "5fK6LJ4hSRocSf6zedYzEuANSd7WSUgDg6EpFhnKZVJwwpFuPoUEMVBC55jKPNP1Ut3aJXRqNJDaZpTsspWAq856",
  "key16": "wa6piod9tSLJ96qoUgSjCec8TGHFfJ5ZpH2PB9xeHBzFxEf7xoj7vxWtnTn7J8t2u9CDgQck5WaiAZxBp63qfkj",
  "key17": "4pvJixLNcTYV96wE7mnNpAwj581B5uW1FHaXw5gmRcuoemNMQkEiDB5Ypq3XY1Vjpn5nzzBGEC3wLDAVFXk8jAbs",
  "key18": "XCPhKzEn3fhdPkvohtvgQK98B88rtMCxAgchHNTx8vTvxqjoKSyjhJsBJZ7hSi12beqoy94Lab1wim5X7B7Rpr7",
  "key19": "5kPRmsj9mwrn4hkgyDMXL7SfjwndaKpDrTFXYYyTHqSTDDUXDKieFzsWK7wFBudk9oooMe4cNtuHEBTQZjU3TM2V",
  "key20": "2J1VsHhhsmhHggKR59P6iT92oYny6ipoXwNi3aWDM9Ch6qwaq9rL2LKVeNTk7v7Zmy1tZkJpNy5BrasTiGWro7pn",
  "key21": "5s6WrjHd8DymSvrfv4vkAyYabMxxvXTP9F6knWnhbWqtPiA1nr8ZsEQ5ZmWqqav2m2dGJfWiQGBSnfRgsvbrgxUD",
  "key22": "5M3KFvqQbHzCECiZnop3voJC9zTey6a9K9NTU4wsT21YgEv5i5oEJXNdNWTUAeebszt1JfnWWmKgYCcmBGv58qL1",
  "key23": "3io6xYpx5rSknowxD3LvysAcKmSrjqRkzj9eZPBjDMxEY2fW4fEcfYXJCuVVz8bXGn5Ei4WjB1JfMDdTaP3mJwuX",
  "key24": "2ANchUbarfANxBJYkv2Rri6EvqDwEbhAbHNyfyEvG1ACv5LjEqpXow8h1rQS69u4CEV1K2PByYwbjcBKVGqKKXCX",
  "key25": "2KSHgkbszxbwaKpFFP9Sfp41CgWhg4WCtWcuYU3UxMrrvphhc7jr3bnuKKpfQB9W7uBk9TGAb3DpMseqVzZxVS8Q",
  "key26": "4XEzUXibRSyYpNPbVBUUjmCjTE51unNgecFARpZLCZjz726GGC4AnoYKetYMmRw6PLS3dk3dNDqEy5P6DvGpaR64",
  "key27": "igqwF5ptTPaUNcSFYRd2w2gqBm9q5RQmzY3RPHr11Xfw9Vo9sRN5vn3jWVdPChazPG2NAcoKZKBeQbUYk86Cvr7",
  "key28": "5jYnGb85fR1mjycUnknBM7vWffSukeRsexPaQ6TzJvNkugAkMNRDdPZGq8ymmxPCteQcrmxQtbWL5EP9Jn6Js87U",
  "key29": "LEB5c3j5qkacRC7knVKTgzsNLpfP5P6mCk1ehXGvP36UfqtWdBAmteAnASvhE23n7NSHAKPWNrYXxGqHuULHTDz"
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
