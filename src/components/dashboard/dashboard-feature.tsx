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
    "5xxk5bLc1tKCZ1jK3SehA75t5PyRmgfw5TWxcnfxm4jF1zS6GCLJ55kKfvrNM6PXBR86HMXq1jAXEaAsePRye6jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "424cb71vtwVGacRJ5VuTKDxyP6X4VrYo2axsigaQ1eNzUpqrvCSeyZLfvHzrjscFCX7bsuqqBbtbNhkERpukb3og",
  "key1": "CEeirY9JRqz6RvEoeSHtnydHpXi8uD8iFTjHDs6VprXMjPrMb8cPxKDmGdTFpEaYsHchLS4Dj5kusnRLBFoMAvN",
  "key2": "3b659tznRjv1hKQiZm3wgHXz7zW2cWKvhBmtrjUU27YFBrK8Xt2fbYe7wT79Kyvgz9J1iP6n89rHCF6vNrwzRJ3A",
  "key3": "3bSby2odsKsZcFTzhYe1ZJR6Hh4zxGeatxfUcThGzt5oe3pfkEC3hLU2UQYByFVwS1w2mpPZziF8QkmLTQq7oUDw",
  "key4": "4VHEATzTEUS7YWtSLFXSbxQAHLqFpVGPqNTHgqfYhS9zn6MEMmRGAfy39px1bxoixoS8LFJ4ox6Yup1yxZhrig99",
  "key5": "2SmWn7xaWmcPGZEghhbiGwPM3rc5rZzMt4TfLvKzWNpRJkjPPgHqdbAxunu1QSTEYZApjwkgkmtd2qsTWBuU6zLk",
  "key6": "47D6pNnUADccKAbrvAVQ7gjPrpmsx6Y71HVBopsnQ3JfynW7vzvV7Wq1QktWWep8DgJY4bzKY4gZJNaqwkZ6QjsN",
  "key7": "3svWTgLx8JJ1NiQ1VK8xfw15gydLnj6D2bMyLueHSjcuFzSYQjW4qD835T28aDQfxLqgMA3KZqnwKCqfLkidwzaJ",
  "key8": "5QTCytXvworEd4cJfNUatB5mN3P29WLmojz2y9pYZyX1cRy6FiqGSESBMtcvrDfWEgD2RSWSPvazs3fFS4pRdGvc",
  "key9": "4TAoxs7NBY4Lr4fy8Foc1CXxL6gPcom8H3NQxjt1pSYKB2DJQrH7iyA6q4se4tj2wKZCvM9Kr7FioETY3WhCE5Tj",
  "key10": "21vAcEEZgvXxSmg92LraMwSBbqUVLLh3CswLXEtQQh5nuSBhyQ1avwdd368hexe2aKTA5gukhrG6hRvCgXXuqB7a",
  "key11": "jKTZrZbRjHGK7VZynKzsNU3npfMfWs4E6A5uDfcDAZyzgTC1A2w9us5bEQHNuDwpKc5TMqJSW5kR6Q2zLPzVk16",
  "key12": "3Tq9inH8Eg6bt8nGz8uJxzWW7gwWV59JJnCn6PK2vfBUq8YMWnoV6sJGFDvnV618b478ebzVEBGBMf1yro9BJr2M",
  "key13": "TwkTX9vFpP6TbUqk4ffZ2u8WWhGtgvPD17Yj91RgNv9Cu7BUgMdVU21D5LpxDGAPUCi1g2xgLZZz67pe915rHv9",
  "key14": "3KxmDfPJWYxP8Vbc4QYJtR3thC46L27VDa6xVHpgJHXhfCGBpGEXUcWzJ6tus3qaQJFA2NHJr31efefaiugcWFZs",
  "key15": "2srPvNq1x9N1EvbFGmBvPpFnQg6B8cDMUheLTXGCW1A5w6N6Lh795dTZs6obqZo5op43neRWKinQQrAANK4QJF7X",
  "key16": "635m9ba9HAVM8XyJWdKHakru3RuEnDodm8F2gQqSBVk6W3xdi6LoMrnNhtHKCLCV4K98m53hzBChXBxnvaAaciT2",
  "key17": "9rFajxsxdFK2z7WrhYUTd9ZWks9yqog5YYcfg1At1M7nseC2AvtCvTK1MbEX6sueoZmM5GYC16sThWYm3e8gHEq",
  "key18": "5yyJ1APLF34x3CSjD2foZ4By1syQCNExzBkWPcW4bfH5qyDBYv1XCsAZ647nDJpfk5nsjiC418whnG6cgxxujDez",
  "key19": "3GRmgNhybBivLJr3EPwVQhGQfxnRK5SVtZVeijhgMiSwaLE9MYrL2QJmxfdN8XvAQwKtyNMrFWy7YLmkZjvpJFNH",
  "key20": "37AWeuKUt4Nf5F64DcPfqUtTsXbtvkbCnA1dAiL5SHvzvCvc8L1wruYWrh6idwFS1DP2ks25Jk4UBeN5QhAEnhwX",
  "key21": "3swq1Xigda9877aHmtfxricdzrzTkXK5skQnEAcqrrd4xukx7pXkEJ4vej2U5cnijAJkv6qdW52oLzQbW4yU77er",
  "key22": "4762KM9uBARfDuFj6K8Dpnp6P86uTKotYNCVFeWwXDFM8TBDThKEA9vXqLQ4F5R5ysgsUZYdjPJGHqbLjCjHtV4P",
  "key23": "4YKsAuNmLaufSQp87Mn56vmgj3P78Ajg6JTuhyWVnNZsgpEPm4sE2VWExNBE2oxxKFYuMqLSsNvha8XmF9s6fiPF",
  "key24": "4gKGtjAfRgHcvdQpYf17MvqLjxjZ94nQbdt9hxJhPj6zzcaPFhxCc4QKLTwK2wHcvwqusDL6YscXwKasMiictGT",
  "key25": "MSexscf7xmmLF4hUWDyMwtugHPf74yPGS4Q4UBkEhJBWvvWvEevRq6b3dhM2toSuxAR8eGQnT22mx4jNNRZfWW4",
  "key26": "43N37B7YsNsU7UcPJTmsGCTp9kySpE91JRj6kQADZuAfmamM1uvVUCfXU29rxovTbu6XtbsMxWqoxAwCWyvmk27x",
  "key27": "3BWMX5TRuQC3RuEYQuXPVpcwkLWZqdfVQpHrV5TJyovAL8UDJHerr8RoHSR9RBC1mZRBsT7w8EmuL83KvEWSyo8C",
  "key28": "37yRiTmHH9WocV2sWE4xEih2XMnqmPn8RcJMMamexoeSPmpeNjwNbYBK9AMH2hno2bJsiY3vNjKUGYZpjsyMZZts",
  "key29": "3HfdjsUebqcNj7GGd4AbZtAoUfjgKhe39wz8eeQmjaGNbSdRuUWdFF4FZncXzB6CjRWHoJPJ1aivASrTkmfXegYs",
  "key30": "Gtj7swZKgB4ZCjSs1heLgGk2LeTS6nzw1141z8niDDKUdTXMY4w5KvDuvGYvkSpu97iFuxrcEPABqVZQCwhjEKc",
  "key31": "2hQCzYCtMYEbccY1vyRVuPwG7SQRp9ZWm9eVbRCzVyQtCSVWmEzsGhZpD3e5RSk9QcQCqVemffJm98vZTqjcsxwB",
  "key32": "5Qu276Kt7xNkToUQj5AW5QviaMmrqPwbZB5fiRF4J3tswDwjDSD8ZBn7dpbhjFCn6bcrgr8hAVCE8yQnKJg5QYuy",
  "key33": "WGiLpJyxS3SePDjB6mXEtBrpgndkEiF4bg1vGUB6D3Kn2ihPyEHYMD8jjQhrRfhHygRVyUtmDLgvrDK2byrxNif",
  "key34": "fCGd9LDqNgP8fDnkVjRf5gCy65utfgRzBaZ8qdCyLoAcwe2MPs6eP197Hp7R6aoxAxcv354HJG41Jr3g7nM7KvN",
  "key35": "5RpMPFpStY6WfwLor5wRJCfpAczHbA4XbrnDPrdatp1mTpLjSJyWvyx2KbSJQ8JmK8jsdm2HYook616T5nqsrAYu",
  "key36": "f2zqvvqoY7J3yo6CokFFofGjSnNw7Sy2mZi3HzAJHe6Lu7SCEaxXs5gbJoGLHGcmaZQPKyDwdv9Es4GCXnhm1Y8",
  "key37": "63rky5sUkh26Y6cLnfKVCjH6HSpnqroKN1vn1fQ8DiNFs6tRGMa5kgrtpHM5u3Mb9tUUGJUxsm8enc65Wg4sX2z1",
  "key38": "5x8qSmFtoXUr6FAaUhk48HbPSp8eV77dNLTwiSLg6iEVKKb5wgDyJHRoetndLcGEEXTVx4F6s7QTW6MzryfVH4CF",
  "key39": "3Cr5eRvYT4hi92RNpSCPi8xqzZYsyrvemTBwKxB9MfYfeWNfMvqEGjm1AfVHdVtWXcgTbA3j5VHRozN9th3FZvCj"
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
