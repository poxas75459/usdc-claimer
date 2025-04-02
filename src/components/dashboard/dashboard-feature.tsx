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
    "5enrH3ZzRv8DeaPXCoYP9izJe7hLHhGVtzujz2yVgFsJkbcV271XvzoSa4yQGnK6Hq9Hni2NJEmCrXU2pBZExfuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3agWNT4NnXu2qM3qK7ZwC69otXWdeqgN2y58V2x3Zc4Vuxsp1Dw9Yv6zKBBCLQ1ntLagneU4KM1WETLsGWLBUdTG",
  "key1": "4zK4zi2nqt9zJXv7cv3HferDzMn66noSBQYquSXN87i7mPZe9H8uiiDsLZGfiMSd3NH94ZbsdnZvCzVpoMQ4QMJK",
  "key2": "5vdGQeiqzYNNy2K5VFpuQjM8DKJgX8Kj9fUHSFBX4wwWYfrCHG7Cd8W8tUk8S3MNNh5DbrjzoATRqwHP7Hz6hRh4",
  "key3": "38vurxcJMCRJZnTXnx5GmDqTEoGY5yHw6rDFfZ4gJJKJXiuBfHLmkCqPkx479t7jaEyW3bX3VuhZ5cBTK1fqK1Zo",
  "key4": "2Xpjb5ojXzwkKTorTUrMVJZmWGPg19RRD7wHnqXyGYfrSo1QYHjAWp9wkuqR8VyL6bVswaipDUHeReCZPyH1f76c",
  "key5": "2kDgpkwn91xno3mXenwgQYwJWcyhYEA6yjaDMQgYe6bM5aTETRjLGqKf4Zo9h4EWEDaBE56e5YXS1c97C2ZF8UZq",
  "key6": "2DyWhbjuu6RJq8RrDYRkWgAqT6LBnA5eHMdVquEjVxQ1WtYwZaG97puU8FKhCnQREvSHUmHM8zPNwYg4NMpABvo9",
  "key7": "4ktr4DPvu5GT18Ntfp9a2SboMw53RLnasqVpD5pccaKn89xWv7sZYXtq9A286RwcJMsrQtm9WWgddzpQmYCBY7go",
  "key8": "44no2HebgBsjPjXFYfNQxzuGE9sZSefxX6WzVR5ByvPFWVu1pH26e7Z58FwpFBfLSQ8Q8TpmbGrasC7drJRGn2YP",
  "key9": "3L4Dnmvi76EhdYo3wBPKQRfgLDdsEDA8b71wbonjmTjXZFd9SXwqeEtafsNhY2MZHoRAwPUzVuGR1RmkTiwiL1eS",
  "key10": "3tZyL3eUv9Cicz5TBk3t3jDsjBCUKeoJ5F2Dpcs3AkNPrFm952fqQQoWytbFY1QFjckM3k6PKyxqH3yyYGugYtcF",
  "key11": "3aEVzr32WMQyvKbeEu3DMKod9jhbuB1D2zGpZkQWLs3j6F4iB9QycGxBuZjomJaJtMRf49M7mvUPVfixanWuUoE6",
  "key12": "5qkvauJ5yo473bCoEpAkQQoyZTGuCMhCFWrN8kovnd9xg2YF9ppjLCGNiccCKFMRpPWMV895mGNA3JG64fz8g7js",
  "key13": "42moxM5gfQfzY1zo6QTbvqfjFPs2rgLguhAoTMKsS2urGGdngHg8L6yoQuW9VQRaX7xFdHcAevg5Bwu5xenaZWh8",
  "key14": "21qxnoN5cNLUMGT44UpNorosvZDXtThFDk9uwncqaNNJRcx8UBYh8KEfL3e4jP9NkkKUK7kEAgtN1wfbn721auE7",
  "key15": "49pivdCRXEjR41jXHgVm6wKv296SzASB52mrfgVjMCeLfMePcny9KdM2hBnfM81FYmJWM91srUoHGLf8G6ZULz1L",
  "key16": "5t2A4WBhSpGwx7TQHNdxcopQTpM7X5Ms3v4JCqewmVQ98NAokKnhLvUAdMnAvL8TC5wrWefXvLze48ehWJHQoc4b",
  "key17": "2KcfWY58KmobaK1E6mAQ2Si1RSkJiTf6pjZG1nC6yXcdvfRJZsBaLxV8xqeRhWTCV9V4gdiaxZn3uhwhjxzY9Nzz",
  "key18": "37EtaJwtqLmFi3gsFKdsMm4hXkibqkGuBe5obxVGt12ZooKk9JNg58DTyugdhjbsYzUm4UHuy1H3xP61guLYaLFd",
  "key19": "25KH1qDetXa8zzTCMGm4F3KrfCbmeVNF3tXcAVTMhg7irtN57K6JGXwXm21oh31Ch4qo1RrTujk49e1fBpog7y54",
  "key20": "5aQA3sJyzPvEzoByCNJhGKksaQy7EBoTZ3VXndoszmQW1Gv5Y97nqREbXNPV3FfBPeBYc9f3isQjw8CrzZHQuXQf",
  "key21": "5hTSD9P5Gzx5JNTpXvKsSmhz5cdvhH8jRkXYS6f372fQiyc8w6TyZPMnB6cGvsEs9kayP2nUtFLTQVkNBRkYhaGi",
  "key22": "5UavBWNt7AgsDYQFAPmwefbHjVfUrWqbtqLT4nahDhzsoqQJAuHtgLhKvzxC44AT8Bacsj9wDnWN9XrCx4j5fyaj",
  "key23": "4nfE2V65uRowbtujoxBVm1t5aB6WvXB41b4kTsxbUginZFPCaCh4EC2F2mPVxkFc42DC79DviTEYzXbsXGxnuJv4",
  "key24": "4UAamfZxfU9cAYdnRD1HqfZBCA8MZFvzPMkJbLbJWYsQbieU1DWa9xz87qDV1iujckVtYs9fHCJ6EjKGiSdVke1F",
  "key25": "4cSZgnkPgufCHhYcdckVgVD9N48rd6MD8T4TBbh6MwJAUioWFygGgaJCXFqFs7A8c7yW4cD37UiNWnFJoUzoLsYz",
  "key26": "5gorZ8DPuZ7MUw8Uj3w9xyhFZ3Mrzwxgx3G2uYPu8qGouSVoMSyuWyc4kaA2hZUaXVs5EML1BdpABB8dVfhYx8qY",
  "key27": "4dc5Wfmta7TqyE81VuvGr9A5ahwPx7rZQbSidUiKjA9HHbwniHwqky6i15dK6uVoN8pRSA4YUSEGxrxwt1pSi2Z2",
  "key28": "WHWGUz4Kd56393QtmMAfFnyCpPcyhyvCQCF5UwkU1EhPHVR3o6Po32twE8J4qPN4nfz844GNgDdf58FFbZu6JgJ",
  "key29": "5SvaWMpJJxA5wikYvUbTbrVkbPsHgWA37NAqJjtd6bk3D7M1coasYDuC5JExzSCs28yRxwuzMA64ou85jsTtC7ZV",
  "key30": "5WCQK2He8LtoqpN6ubgZiWaDW7chw1mouVKeGGZ5pbieRv969ThMKhccQ6jg35a8VZWFvdDZaynhkV6bvpo7km83",
  "key31": "4pENTyDvpFqCJKSdMmyCXVKA2DykiKs8iXwfCZ9MSsfjXKoA3s5BFxkrfxeqWLhs7yseQ6pzR36JFzjtMSY9jaP6",
  "key32": "8PDL2EDXrKAfDrZUsX1YRynYEnbV72dHrradFvLVM7Rsuu8svQL5vDQRSzFnRBcq2BC4aExHv9H399w1QiWai99",
  "key33": "UoGUPjiGwzrBTaw9hmHJ7i2QbeqtfCzYzAHSvstfJsJVcS6cePnnFz3zQUesRAWtd9gmSM8ZBfdSmpdWgZ1hrbT",
  "key34": "4UHCWEGkaH9bsfAbA7Rt1hAFev1CxjCfWFTkSjMrXHG26wooZihiJ8QgW5NE75Jh8x1mvavUPiyDCBq6PCjcJfZg",
  "key35": "39TJm3ojDd9d5XM2Zxcw71TPFeFkg7jURnA8ENHqogDwxkV1iN4DgXindiHCkeMXJrDRgZHKo75rkDWn3VgbeYUr"
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
