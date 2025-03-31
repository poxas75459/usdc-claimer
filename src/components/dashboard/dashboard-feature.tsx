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
    "5xP7PqoSDZ6knxCsAFqpu4cisRUMjz2toV1ppUXy1SneRV4T5QtwESuzorfr6TVBWo9srbrs5uKXaX6GcbxcjfTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55yjdXMM4UgP5VPQGdYn3ZqzCFVBxjGaHigKa9BZdfR2naAxwTmCjBCW2pqRYgEdmNpFuDTLoFF45D4rD4WT9ntJ",
  "key1": "5bPLxXzzM1vEK4zMHyFHe3XXtjHSA1PzM4LTgqgqpUcWm4sbyTm3cf1wgPC6YFrZoucJGUSGQCaEFQsPaenFy5rZ",
  "key2": "3L4R4T6PrMUB8ZxK9NJDqxsDVxR8p78AoDcrCPtKeRrqXmMMXyUcx5i3PENfpciVUCh8tvoY9tcZCjq1Qqt61pZJ",
  "key3": "5kP9NYMH6vEvFmyYxhHFLsNtN3o3o8BsTPVxjZzajRjUkAMMrNZuTQA6jqBj7BzM3T7TqHiPnCxM9sjUzLSL3ahy",
  "key4": "57KrXefCkRhfdJBEBEBuVqiVwnRVJFkaAeAd4bmr9oFPmqXmZxLGHFMLEywfbDYuX91eyqZeRkDWqBCjsDJF3Lxu",
  "key5": "YnrkAkUGq1rrNgkaXXy64ntMAhFjQvpLHw6nGFXKDn7Tx2VD2iWafTySGBSti9iXueZFRgGMyzavoSjk7DxACvo",
  "key6": "4kAiE7tUqEAsbvxKCMPwVM6YepvyRWzfp7ocfPPLn1yphXAtvhUZ2nGGC13ebSDYUm84sqJMUy9RqNYcaeNcDBQw",
  "key7": "7F6kwjmSnTgFVwWr2Z9rwTiP8sugX8MSKaF896Uq1hfmyM86Nz1rCS96vNvhMzWsRCBBX7VHf8ensWvvin99tZ8",
  "key8": "3VbEVHAVAxWKWos4PeY8jU2FgimmFmkwinLC581ARLs4fY87VmmAvsaBz74ma3PJa8xCX2YghiRQnSzbsSLH7nfT",
  "key9": "2n9jMeriwTykghwg5CmKiUc3J9oFAdFTbqpZ4snh5PqdeWRzMTWcvgHCMy93yK6Aj3UGEZUm6mgZzR6UsTAZbMjB",
  "key10": "2fasXybzw34nyCRZAhsFXQzUtP1wiC64pGT9xyPnU5rQ7ogvHHGh8hqKsmSzdcNtdofNDHVTQKANTDDJ5T9ccwcd",
  "key11": "5p9deCaWV2NzeMGvsg8adVuAdD7rrCAgZXaP954JeL9WqthX87urxWZpfubfBiy4QWKZH27818ZjwjGgaotrcdWY",
  "key12": "3XvbLEMeSn1JKGw7vtEBtUJ17S7dA6Wwf3dhJ1jC44TCAvmoFWG4DUvbbNZH2cNELKaUncYSABWktQkKvMwN64ce",
  "key13": "3PvYXr4zRHn2bkcRvykU5mNzZMx3uKDUGKv3Q4k4Zf7i2kq1Z8rXqApQyic2mW72rtepJ7bgCMMXsvmcV1YXULF6",
  "key14": "65WM7PtTw5X2FhVAN6VHBTMYbacCxTJzq9ojPGoz48rZ167chRo7nXMvSTFLDZybEiHbzA7u1kWLukHbAdwdCcZE",
  "key15": "2W2UH7QvmLtVrs7ScLji9sK9zjWsJRr3vqt75ngh2a9585mtrKHA75x6S32aKsNePZUueTxjgEy1GMTv1oT9J2nc",
  "key16": "2HUqCno6RdQEVcUmuyUHo1HmeXr3eZRBSrrczXvvHpFWgWcVfn5Ryj6TnwtFXqjdpua1wqiHuBQ5YSMXs58suhGw",
  "key17": "5kaSAAEDKwGSEGhhZoreDn1ZYqYdDw7ZkvN8qYUJNngXv3XADZTxFqEMdTwqKe48fnymsF9y8HzYeJCV3ue267dL",
  "key18": "2zzXrfjYXLfDWYo9uWLYztVLXttGvWoJF3CsrEdbXK1KS1Dbo4HK8ighrQeuHiecvfwSbUMmmtdYR5o9TH5pTf2e",
  "key19": "2uUFvKmQeFSDPUV92TWWjj7ynywKtbfpPB6GvWWAL5b4RjYMKoxBWduDZuEYEMWvBzVy8RKR7gMroC8ygF1D8kMT",
  "key20": "3pvT9zK7WcfLnXr57enXFX58AkQg8AZ98N8MNERoYmRYwcSmxfASAhMHrPEdLUXRvmTa23jzLaTEucz5h2EMp3FH",
  "key21": "4NNPjTAGCSjAbvbTDNgavqD9grsBftQPrPfnj931aGk72q1HuCt8hb6FkPoN2riHpupapJvYBD5HDioVPnSLoV2C",
  "key22": "5fQ1z35TBK6cKcyPzc3SaksMhnqTvXrSAyaVjDFjpbJJwk1dr3Txjm4Ef5rmKd9X7hCtb9q6sjFYqvktPfrFnjBA",
  "key23": "39yr6U1G83ygCG36UWyGFoEKGRbimtFPFfdUaamgjMHkRTr8ae2v7J854Xu7QtMvqTHoWZKeDaL6WYbPk34ZfHBz",
  "key24": "5EGzM54TG5vMeB9VcCeZMo6aHMzVwqzN8JJeiNeNGYTony9YCkcPAphKBLQC5TrSLgRgfBAsF1Di9ufcfSeB7ZBB",
  "key25": "5d31vgvifGnjtCJvdqQBQBbYS4QwhzB3LgD2x5zB5Ao6QR5rcfULad7oicLbRL7vRpL6v9C67L4tW4DwWDoPi8Be",
  "key26": "4FhPKFNwGYTxofE6dsWMmtCJ1V6kXcE22hFfgESmMijsNZggKg5MPvZ4xhKxXEBjN2kzC94TzQLidaGYdjeZx3Mf",
  "key27": "5xtBaywbLZYMXWK9tLLcCjHj9rUj9Vnd6Gffw5a284dooa12kyXXA4R9m5wneirD9LjaxEc4JNDPukTkMoZYk2bS",
  "key28": "4xjyV5MjU2MT3mfQGjZyoSfX61WkeePYDDmDTRDNmhwdvp7gLtTv3KR5MeWxJjn1eEGJCxeE5qTgEAw2SYi1TqVU",
  "key29": "34MK5Nqb16N19G9bUCeUsUnk1ww7p1PYteFqZwBtbsjQt4bMNsHCo9yZGmsJLfEQyDcqHAB9qwufKpa5QoWJeLrn",
  "key30": "2Tt1jK6wnhXdKrsSz82CD4GcuPxHA8yfUq24UcD4fjLcTGeUvbPm6sDaReaTFns1odkoWAkuZMbkNmqt6DeWR19o",
  "key31": "3Ddu1G8nhVGxbvT4suVMowQWJSjZki66NTHqUhac5u567LhP9CeEjyDwyRHpNmfjMGDMNqhuKsXV9CvJBWZjmddQ",
  "key32": "3f42b2i8CwkC5DcgUkoA8g9ZU5YSrcTPHWu5xRCbCpUmb5rRK6hwAzLcdPFaT8nkGv7xVqEPeM2zagBWyGG8kdg8",
  "key33": "3uMHQJz1e88xSf7APGTzCtErQhP7QPbA15vgW6Y1xk66DbEZS3biE6LkGB27rRzMhZzgZoti8s9eeEEkZj3DzQGP"
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
