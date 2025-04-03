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
    "5arkZ6d9Xx2WLKWJX7DRhN3TAJF4EPdgHonM9jmCtP8q31DTLZzfHmq6DF6s2uMckRpcczjMaa7jPLiTAYo84kiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fLojpY8P1X4vtFWCdMwdTW8SRSbEQeKtb6RdUy7ciEMZYdubw255JJqTV6GYnF1XStzX3tGP5wHJ7AFGtwtbpWc",
  "key1": "64bvucXqV4sPNRfmVYfmuM8sjbkauY5FUMy2qMLamxwerUibBw6wPtAH6o6NhAgeWdmSowGYUCfVKVqQ6Yn6qwJn",
  "key2": "5cdCqD1jMPusPh91koxNHPgWDiHzsGXqC9CSb9XVsxc8G5coyuyAs1UyCsiMydEnzkmasCejjWUjcYDCg97mYvg3",
  "key3": "2sLh9BrxpnuZMW98zrMy76rzhaRvZibqV5VTB3x1a199WGH286wyRoEocodYfTPM8tRJXexpuR35VWMR9Nkbv3qm",
  "key4": "5qE8ajnHcvJqWqXBpUphXRfV56JbKqQYNscjeqvhHFiqXDsFJhuyq7WH3EGA8cVDiaf3afKY1GoMmqEbgFhQmE8Q",
  "key5": "4fCaTBWa7yn2jxDfp1myNhkzSiAyVSztJ53ijyaizGtFe7Mfgtp6Wpfw9Y1F9ft9we87qrJRa9P6y4chzmuTTExc",
  "key6": "GysxVg75a1Bx1BG2sPXrcGJRh5PGX3yJUTy7YL4sEFTspsgghDevMehCMdk2q3Su66KJrG84rMV6vmzpJKw2XMS",
  "key7": "HPwcx1VUr3dyTuXcDomH5RdPsHzyQ54R6xtxYsmfU5FECziYioe1ps11rbXHp8pM3u9uUDAkT2cFeWwpoFdJejg",
  "key8": "3NRzeYGCUqwaB7Lu6KcHteyAYWqYi61LJZz7Qs8X9CwKD7WRSfuMqsKcf2Y3Eu4dZuNsyVLftZ8jY9aTWHxCgT2y",
  "key9": "vKjZyMb9LAiBa31AGDoxxKgREQ5Q5QJfoGTGFQnxsD5KcLc1igbXKg3V3H5UtUxFZR8a3W86fNjw3aEj2wmRbb9",
  "key10": "3X7hFdVS3Tg8JLF6TxZXvBcUKuLzLeoN3QHYPpbEQUjejGqt99ViRDnNGa8Jhq9LR9nUQDQ1oac2c5AuxmD3fkJG",
  "key11": "4GBt5ZKocBE8mnWZSgHRkVtPTKNTpsAuGN189DrMvVfcY6FCFvskbNCsZaxdMEbCSWp2qfwkbC32jxFu25jRbfE6",
  "key12": "5UjZfbMGPekX7FBtWfAKkuGc8kqJmEtPncDYrk18my8rdVNYu4WrdBj4U7soQWfs2FdrPA1f9Zieb7snXsWVjoo3",
  "key13": "2zNaJL1tHr77c4Pm1T1bHziMdqtiQATMNQHjemu2JS2NNh99KwrhPAnBZNmRt17NjaZDGzooLZZuDWZd7k3TrDb4",
  "key14": "3i8BSBhvwafN91QfcF6oge5hMXmWC9A49ipU5betizXoFv1K1BwyjeSm9r5Yp4JxuX8ZU9nFJ5dkb5P6au5qGrio",
  "key15": "4QwxdJu3oXW8vMmmkvQdMm8tUZVSDEvF1URH8RbtjMwrSa8L3qXuxPoJVzNpvrxxWHC6x6vrY3wqMvcznk5fsoeU",
  "key16": "Pp4rMmDfxLexb55KLkHR5DgpAWJuhsrsptdMrgNaNDSddy2Sjsz6Y1A71NSjSSmUTw6aDfNPj31Tg8vYTp8jtZC",
  "key17": "542m3athK7Ywge1fpzDLW5Hq39mfMWdTC2FByvqmjfRzSJUADPVT43RVfogb8ccFjhTipMejWCWxMqEKAPFqaBmr",
  "key18": "5bSQasyABRLgFjRDBdqyvKLjKuGBvyGmh2iow7xfyymNphHPi2oaSohJeTyJui13eWNbhtuaAWY1wq1fUQdv3kBs",
  "key19": "4w4mWFWLLULUTkg1qyiHxnZPTitYd1HKNFnfiQ4ZEjoV4vuD5cLqhhwDpCfxS8DQn22GW6HSqdnZP1MebV4EUNYr",
  "key20": "5DmCDpMcJMPYgg7RQyGU2z1DssScmGWr3tzMef2swHzPY56yK6ZUpJYKYr9ksd9C6wbdrZfBDFoj6dAsEdQSZJeM",
  "key21": "5M6kkpPhaoBLZewjE6EEgQc4QXHmoJvxRatrzyzFsavCLATfqZ3H87jkhRFn1LmSgm5gAgfzYrw5sxLjMzjPus2j",
  "key22": "5tJVnfF17vZXjD1xnWiQSLBR1zNrV3GhoaXpovCZ4ewD6tT5xVMu4cpvRcwWicXC6Vo1T1dzhgpTc9TPG2qSNjYD",
  "key23": "1FUjN1v2u2kjghYrXwgUM9bnrhTswyXSVN4Atgk5WLAoeLsgyB5CvH8R1GfJ9gmF85cM3RgS6ZWUCrhoLk6YtbD",
  "key24": "3LaoYibax3qdtySyZ87nSD6XA3kwCPA1xP8dUiKGNhqg97kdRbftDHcDs9KswWNDGvXWPgTd6YjyS7tGXX1THtZf",
  "key25": "3ffTPWfrLKJvctkvEcoR3n4yX8Bz4WsqW6rqpf95gdVxenjeAChvVmL8fEbKsBRGDRv6uvBq5p96JkqpTacHKbxb",
  "key26": "iNaBmExQrpYjco7hjEVZsCBjRWoM3YA8Jm8rEqz1E737A47NbwtxRkY2Y4nTwYLVuegrjSDmss9aCh7LXZQgCuH",
  "key27": "sewjuoRNWqyUWvoNuHCUHo4aF2xLn42zg1GzRdrBY6VNQPUKB1GGgNTCYTeza79K9sk6VtudvpFGhZqTqk1wrDp",
  "key28": "2C1MPzzHTW4PLLTrobJH5c2Mykqp1j8Mqks8LurfZdCXpWT1rmgQoMVTy61jaaMos7mB6mpyvHFZerMSwKcqcq7P",
  "key29": "5y2ssJk9REVn8tUfeFx44mqrdvbi1K4ZurUe8mZs3nNF2LykeWMECSf5aHHMn3nG3S7oesK8uTPVab6GWTwRkKdG",
  "key30": "MpTLdB7CtpWYgXtFtV79vw2nVp4su9mgHqS1fcuaPXp9zks5V6p3bMcKx9uyXZbj7z9FURdZyGSmLNChLWhMXzT",
  "key31": "51zhLuF4uQUmP5WpAEMKPj2xphiYgBDRPQPcJLEP8yaEAxgmwvUCEMedTRbrk4wLNpjbSbJisvceHgJ3L5puubFE",
  "key32": "4T4ViUM9fd3EeGjkCUFVqsQqgMiYSuVQ7a8YQSNC2cuzA8Ax18Wfs4ASYrmUmphn4Dcnjbf7GXtFJPYx71758DW4",
  "key33": "5P8tKhixD8FAfBpDJYPbdGUrZn8DUAeQXx4jFbo6FM9JrHygyRCDMMT7RFuyEJEs1JDJznLjiYdZUKsfSYoLJhhW",
  "key34": "DeLynzqua5VDh9DRaCQmjLdL3RgACEdpVxkEre8STBhmowb7zQRt3YDkbrwfvGLL3NSDTB1PPunZPHv2vPKtd24",
  "key35": "knptNCLVsrqZuPeJhFjZpaHc8kTxfmDo9mD1hACdxQn2XhJcjNwD8BYCj8FMN91V8hp3wD5ZTVZpoZD9Hn42SGS",
  "key36": "5j2hNeugBriCBYmZ1FazfCYhkdKzsGDnTNrVf4dv2aUPAAfMUn4FLkqzR4JNWHi26HPVUzqYZCMtxwR8VmPB13ak",
  "key37": "4jxicty36jfPBopQopwp9Nupc3hHwVMKLourcSyTuw7VGgW2corhqDMDsNvcudBPdfAEiK1JeXyGd96zgzADP6qb",
  "key38": "3LVp7S4mD1NgyNW9F2MsLKxHrCPobxrehZ2g5GUhBzYEMmXX2Zrs9cyopz51j1QvB5XBQ6zFzex5JV1g86iTyPP5",
  "key39": "5JyefV8ZZXs3NDThSb8FDNG1KaGTR1E8T7nHypCbA1fGhfFEZRmyJPWb24FPmnXqCy6osJEy7T6oewMXs9ytAZRf",
  "key40": "5L1XqgGzx6FfWQQFBjxUMwPWvZRoYBkrVGhsXZG13oSpJbTvZVeQGFo5FVf8SQ5diqtz9brkxiUdFqeAySvBquKN",
  "key41": "5jKMhNXVRP85cxtQdinindTG1aDcXC4GHWmjrweZ9zr464KGcWQgMNfUQwqozGwJDPpCGJAfYhxJrYmGzN2gvuNa"
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
