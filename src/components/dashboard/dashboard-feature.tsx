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
    "5BKbXo9s7oVLermZoN7q2aPeQmB6pZwuFoqpKRmXXiCQUSV6BWD33Jbq8zYATAMmfqphvobBBZA7zsPraSpumgQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3ZaGGsMi8CPkxoyJzbLvxEh5khtYtRkdV8KxK3cbJEKicqSszk1LuFfKtDYxo41ZUE38UXbqfrzWcinnDq5BXq",
  "key1": "2ucKUW7cKPTJqwek8FVAKj5VLoDafHHaYDLmH1vdADMTXoeCtfZBwcRVmdduZEskdBBWf5oNE3KpGoTabojSvWPT",
  "key2": "3jgJozygZFYKZN38BAZUnseGiTpxo1F4BTjDfW474KccZykSagZnLozJvbRRntM4YrprswsZ83fPs3vXqTGKmZ5e",
  "key3": "4BF2WKMKQEq1fgbaahHukmoRd3foWgr8QBkYQr22mtzGdLeBU6sDixUgUZ8FLLvL5JTwPdziGU5nPqP3nZSMDyVz",
  "key4": "3HpMYDZfmLcHm7oGHdSPQgACpwngFmTZAP8B1s727Whpg6rW9gkMUhTL2bJ3VAinB7K2BTewnEcMcWkVsmx32Wa8",
  "key5": "4YDwiGhR681S8RNXnTAf4rLSp51kyfPiYoTF4JEiakSv9cMXBw7Cnbh2yXMVLTCe5e8XU4GYxqmMvMu3j6tda1gb",
  "key6": "59DNek5PEk2a3KsWRkLKX6AcbNnLPDCY8LJCWWWjVM55js8pSKiicMUL2Xiew4xqEpAXnDo9H8G1s55PrwMDUERq",
  "key7": "5c8YxnbP4LXC7tjjujLfUwChXVd2bEvJmeDjmuGa8jXfxAsXR5p3oES3zsuQMN1ojMzbVea3rk9eFUGGVvWjP3ox",
  "key8": "33qp9rR46S7oRCmJ4WvS4NdAxin189PzzEXwE46gys2nvAB616fctqB4eu5SfUuCoE9i54CNX31zWQpyMVdyhCRu",
  "key9": "DSZuDnn73VWuHzigtw4BUfdALY1P23tyRzzijUNY2bbaQS4kioeors9GPjikRAHuqycUo3d9NQ7KJgjm5arnzWQ",
  "key10": "5PVoY4sJoqhHqZE1giTwyDosFvS47zUVgti8paae1hf22GqoXmjdhEifXgPsbPCHg5nRJqjtP9wy6q3JJqJnKCto",
  "key11": "3fZaRy1L62kK2JzL1bGNev5nCYUeHqJ3aHcQVfo9N1CtsvboJ4gpg6WC6y4nHHLzit9Uws9VqUVDwDxEBHktg8fT",
  "key12": "33dtgyZoW6DBwQk7LVf7aY9ohVmr2ho227pvnHDrivkKDbXs86u8W2JNXuTLkAdKwACZWqhPWrymafZEff1octoK",
  "key13": "3YhkvK95NXQLyNEzRD47hSvcC7FXcmEG89H7f5wX9KptyrnjGSSmPQYnuFZE8bE4zUaTHkfWwLyZLVUmmE5JWoue",
  "key14": "4fXeFG2KASfjxLJwqd7eJcsVSFpYnmYgK88o7rbfMf6r4nwy6kf1hpBR49m7UL8AF2QFcVo9Jh566kAWAHBbW9QB",
  "key15": "3NEsouKFT7JJteCWDDNsPo83y1iehYizx9Tkpfv2UawBqq91v4boSBNnDnub3Uqs2LjDbES81PgaVqzm4eERoh7h",
  "key16": "2K5yebs72UrvszTQ6nqViWTFNPFr7JJ5WgKPoMTkAP7UgPZnj7Xw3YKHmSpscbL5iCVebsRLfa3kCD8BzJgK5zk8",
  "key17": "21S22JSekxM9fG43SV3Y7MgiWRmciUm6WXp7pRxEcE1WLGe3SqCe3YTt8u55Dbhb4RkK2gbeu6FSaW5wDZpUs46D",
  "key18": "5RJaaXtDJYpC3i7Xa5Mvix5Cmw4qX4jZdVYUt54sxPaKBu4uhSaxyaWH9e6cbwuP7QRtmGch6PsvyFLSyL9EqPRW",
  "key19": "hj6mgnbC6zSmdczRUdMDeM9kqNsTrrzpXJpGTsmXfNgzPM7uGqMrL2n8LxFf8BGrL6arXH8qGpG53v5Nivu3VAu",
  "key20": "22oJ6adpigftjcfdyy3ppCGNd6Y9ZQr93i4uieo7f6kw7BD8McRsLUNEka6j3Sy8pQsvvEypMckTXpuEJr5XcZoC",
  "key21": "5Sgp51QTKJBUtGFSmk4m3FCsXXemcQdQrph8HEMsZXyUzUKCDVkyS8r5tSzUMMFSKLnFjjkNe6wT2Gk2BYGoUvf",
  "key22": "45vygM1dM4yHoXNVdNrevN6KNvB9LCxdnkqAwxLdffFgtJmFP43MnZ6UaC58iJtUDcfdtjZY2ow4mBdJcBFyPDzi",
  "key23": "4osEd8snVauJmpLDiEbD8uwSX4iAy2ELKSSNMVGAAr6sS6e39D4ZVy8hjue6ZS8gJVJprkmZPa93gftiHgKbeg1b",
  "key24": "32UioP5vrqj4LhNu4NNgK2yjCiTrL2mPKh4LZqua46FeXh26XFxoYAi66JX84ksF22kkkyGDDqMVbZpwPzwd84yu",
  "key25": "2NDT5cL2fVGn2CBFomRscGsurKNrSPmdrZAt3Fxg2L4GiHqRV2VF2aMP57BeDjXmQB84YFwxfsGsgnUBsL7HhDgV",
  "key26": "5XLhfCzLbWj5LcmiLfkVwTf4JXRRRGCkMthYdw5tgbDZzHNbd5KQs6Uhv7xNTBThqjRGXsPeMRRECUvVB8ney3NS",
  "key27": "4CpeEpu9Gmn8RV1kivbb4X431YzLiWfHCresNim755no6sLbtf9XttHH7MMqg3VyXBtc8XkGyr4tWuDnnymM1g7Y",
  "key28": "5i3XQtKkbnTojoCsuCHCALPHY3QXr4xBdE45k5vr7u24SeDNkp8TK4AMVo4w5QAY1FtyA2tATsmEqYubB5sdiNij",
  "key29": "Dq3yaHrNcZKWQzokbhVFfLoApeFEd2eep4ebPpPop1VX6tAAnwpoMNg6j4MzHur2gi8Z51Mwxe3LFD7rC67JyRZ",
  "key30": "5pPtm95WWF4aLrCXKmdRs6saoYzX1NwRvfHVDqNioD9NfC1niXAdFppG36U4an9vPYWkrrx5hckPviV3bLQiCp4x",
  "key31": "2PMh2F3znmHF5XoM12RyiJhDe2HQcUFL5N7E41X6yKaJxzXBhvb2njdxYkgLwH2Ec9ZT48BXs2Bzuz7KEepFvPDJ",
  "key32": "5icCU23GppR8QFQhVF97hrsyg66SagL6GuqzCK3hJrtVKhmWhho7CvSjgAFC3nd2YBowo1TNhcvUYNytZmM7j9Um",
  "key33": "3VLJGWdBpwPa7jgZY3MmdkGjZZtr9sHTMzY5Dv9AGpdZ8qFyWj7FsrcmJHzSKovT19v9wQfYxQSaeszzvUPyAd43",
  "key34": "49DYeQiMmdnT8TcWihEC4ayufhtp852QoxR7rUQrYBE3Zh7dUG6NY161F5UMCmr6CogpSwNuWqBuS9Pp6tTnwRj5",
  "key35": "2Wv1obMsde2AzCds9EG4iF8rsaq4JhffDbGj8hzG344XThbRpRA54nWieFBootWP4tmqHNRSLCLwms9CC6GozQH1",
  "key36": "4zuwcdE7QZBov5ampfGbV1GoL81E7c2wUEchnvQRVfdVyuCBfootkWHoZpiGBTnpRy1Je4Xu8bS76JL2skSGtjEg"
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
