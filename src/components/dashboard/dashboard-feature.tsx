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
    "2q2o3YqUvLTjK59YRS1AoQ6hrmK2ct1jJCxBfnbY559zDhqrQRDYDUisMLuVhMqoVTBfSZrXGZpjiCwg92YUHAWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yLF3V3g1Q4Bj1iXj66NVppH2QGrRpgJvXU9VnMnbJ1RsRNbzsADeo9C7emvnf76e264yW5nst5359bDpZrzmkJF",
  "key1": "QcNzcK3woEEWYxduq87uYouHFtbNFv1hPwSKfbuyHUWRCuPnSB2A3yfJpp8usLzmZ5zx7ayTt6f6DGeKq1VSt5c",
  "key2": "5N6Hd1z7d1bK28fqxLqH2otzozvpq4G6eumYpDhYnyJ5h76FUaoCdnRPXyf4tMehQNpeLTWMjwSSJTyqDhTzviJU",
  "key3": "4Vn8dod9cDMLb4cy2cbJMkzJfgN34S8fPFv7m3KZfYhKD83BpcxCPsakk7oKcJQRCv4At4hX5PkpPTHRaxZhX63S",
  "key4": "5HHiYmAxkt4P8GQmifa5P8JfPQoL8idp64GWaxAeeMLLQ6tUzThHCE3UVv7ufpZMxojEovBFGbuh4i1tzSamYehj",
  "key5": "28Qe1QBAgMT21ffBxnNrJi2kcLjUffPUY1XdutPuy5jrnFi41yk7gaDSTDzZqLXFiE968E5HJBDe2YHKokYkFETM",
  "key6": "33YpVrTJMHemrKchfF9tQBZuFqBj9GqPeyRPq7MuDtVfYevBFjHhPecLAqLKp6wFkQ2Ty37Qu3C2YoiLJtK3X7Zv",
  "key7": "3hpCBRxvDyW7EvgUJZuQhMnWuRwZovuwf8bqWprToBpTpBTLigNDJ5pq6WHjhAXF4iqtFaXm11zLiJGXQsmwE19Z",
  "key8": "3r3857Sf3PEv7eeHrFgj4oNAAGfpTRYCDvoSVKwZw5U4URojrkWdkyexFXTy8tjLmqseYgKcXPTYKJ4hPgetD9jD",
  "key9": "27PVxLCPZmb9kPxDq96DUQmQPn8F1JJATTWC4qANghwjZxhZr4KTsxFpaaPgiFymrBuUUjykwpLPgWSkGrFErRtW",
  "key10": "3qKk7ZWyiF72SPoy3NZm1Pz4si2aQaHhyo1wbMtY6zWS5ULm4B7MUCGP5E7Ebj6vdsWbMYY7DWTiLkBeJ6W3hnpi",
  "key11": "gCxxoFubQe1LrphABZ9QUHZDZ1fhAVm43sTHVnMs2UoV9TYAuwZBtcmRoxzZJrwGUVqZo3k9tysJznCgTZcJLtE",
  "key12": "KCrMWfpX3B8cjAmX58JrwfDSHy2NSDh3m7xgAJ2vxocodREkVc49TiYZqyRNPUxBUXRgbzDwXBf2bWgnUEGKwWa",
  "key13": "4asHHDmKuag5LoL9skSbQRSNvD9jc4YDGp3ZFMSJZ4NB16PAm8aYwe2ngj5f1mcygLTj4dBe9EoffJ1BZ3cmNtt1",
  "key14": "39bfo75GLD8reHCfnY7TZtrBKGdsYuG6EnHxmBSMPnphMoc5tymvddcYKj6DdWkT1AfsHkENouRKzj87jnPhao52",
  "key15": "4hjiLqDdsdGPuySmaU8utiparGYGhTLqG4J29ubu9G6LSGkqgVwBsiyTzEg9StFEbfJHnx3jdKfzutPh9wcCKS9W",
  "key16": "3oQo7AHi8yoSJ4K6tcdN8aewuqnrRrqXeDsKyCcGeRtf3LMp3XJLv5Uo5Q6eJ9ZNnpLChvCWFCE9SZQU7EW8LEZp",
  "key17": "4RfE4LZZnU7BpcvE598mVHeg2pbdXgfz14xugmUJ1LYHntdCiCNU8AVKL8iHC1XGtPHy7kFXYQJSzVoTDj5hojAu",
  "key18": "5WXnZyckx7HmSfBWRauYKCiAeioh8CHax6mesRS1ixm646gNkDWhusxWsE23rag44df6hBbwdpETY3HDJmuboKU2",
  "key19": "2Tz1vyCcFpGmjWd7P3o8ud1J8Tohna9w7ihyEVWM2AVZjziXCtrERgp1HfNntPTeJMEwiT1r3miBXijYU1HtgARo",
  "key20": "27r753YAsV5kTFQJBZH7JfAji8ddWr6doczeU9cf87TaiBcCQbmuHc8qcTGQ3vuH9FgkFrARb89jfEhQ7F76Cx1D",
  "key21": "xwLvAeBxV8cta5AmsbZ1UTFdEUaPzo6dYzVG3Dehbv445obv67fzAFGwARaqioMR7vPfpZDbkVnKPU7gN3taJ34",
  "key22": "2NrNA1gTqFqnzZTzUoiwftjtPPnkDanXMiQSbwfUN9PPRMEnRJs1M7uj8wdUyfBHMnk1NE6Wn6dBjcudDjHvRNSD",
  "key23": "QWNyd7KcU9W9vd3HpaPgkTV32TiQ4wqmz3Afzn4xSUUaTDcngjCA1p5CwHphqyj6PPbxjNGwujwMBotPZCvafzU",
  "key24": "4sBte36CkBkMQ5zBiaUt2jgvZHbCGRj994AbRqxEbtLfaGVHxSyffbwKM8ZzS2awzNuUjdsQQYJuYywsWjAcwMcD",
  "key25": "3feoV3FTwqPCAzRCZgUATmW9EKnAAAZa6e7uYhhbn2jZsZPMZpfxazj2M1KbLeXVosRGUCSoVTdvS7TxM9e8RtEN",
  "key26": "4S8m9KGDUGrjd9eSrivrvP9nXQj2gZoUAAV8zeZiQrqvCFwUoPkLZ23myWJWwxs6NDJsR1DKoWY8Q6V2FaRekLZX",
  "key27": "5bhMP7F2ZogiNx7XBhB3kQyPtt2T6HMjh8xnziivDa95tnscFW8WRqfcH4SLuVbgJvTSxtQMEymBJRMRqfNe7qbj",
  "key28": "4D3fWjUSZ9CdV6TGsbWmYysKo2egjRFUnj41LJjdP8sBK79NQFjx7LkKv5ZzcahTF6z1TiSQo6QjqkUoxMvuHQSh",
  "key29": "3HLLARR8mqcNri1iz7D4J1rto1ATsFsPXqUiipBtQP4h6DArwKTm5bPyxGXWPFX7hgnn7FeBPcg64pvbUgWthsFw",
  "key30": "3X5N3kmDoVfFZRB7Er4L2zu6hshorgBiPwJvXtXk4TAM5VnAeVn87XJffQ6HJ1iweVG5uumtUqsrwFHrEgTxqNK7",
  "key31": "5qMcwggv6zFqBhE54ADWJUSn9Zv3QcfhJj16zq6RcjHaHu1n4GsLdjofXazwq9DqfudhfD5M6GnW8XreD5fZqhW7",
  "key32": "34vqhoHXX24pD1rkYVv4Uk7U5orLGDPAvqb5WPnhekeiLvdJyeWA69PuP7g1eu713KFcnQvR6U85Rjs9eyTisc8g",
  "key33": "22bVJqZWZYxFWHbzRBTkZZQXUEsjPpBdTUKvgA1nQgcZC8RkrgLGbZjCLPmAbHix5gTqZnQgpTYsVUDUCyTu6Xnn",
  "key34": "2nnVRmrWME1VS8pa6nWHShgFFGA1RNiTueupddfSMLARHdZ1U78Y3KpAFz83bDMCsRSn4KFHhiSaBHHBwTQjd9Jf",
  "key35": "5eyXT5fgmo4zUiWvMprwPP7vjSWwMCLmzst9U4doWXYEpeYYMXgjVxravRLrK1KdxyyoAmMh6TWevBNyNHqQcdMA",
  "key36": "3HFMcyLaX3VMhu9rp8ctRT8Qxsat4FyyJ24m9MHpeyjj7fNehZjdM4bgvU4nKVdBsersHkfxYTo2PTy1v4ts51G4",
  "key37": "23jWz31FrDC2dcQjk43KKz72Qo2n42BRQU4zzSTaugqoMsHRgyP3F3bcs3hL61ok4XPQz9DoxCvVWmW3dDiwPo3N",
  "key38": "r2tL3nGMhc3cAxZBWETzLAaT6JD1VvMH1ePzeQH7B4K65mHnR1LcEE7Xv93vvVhXG3wNLr1RYJ6tWwyZmmnR4Vj",
  "key39": "3SJL4hMxVAzJmrzmXTxNWbFTqEtsFixBNWXnnAn4TP8o9kdeNRzzNCD4kPAgzG2V54NHWFR1MBVTBPjDkpZj1BZL",
  "key40": "65MvNte2eUZVZA8t3eRMXwtyH3mYCCQjza73wogmu3jqzev2jNkXbf7o3Fw4P5JqVu9RniHQcNWWzXKT4ghMjxJV",
  "key41": "4GPifgv1AkMx6gRF8ZLDm95jHAY5epALrzFzPJ7Be6SXD98CRq81UkYf14bD2bixwaZaz9AwS6Gk9tha6QdP9mDq",
  "key42": "56n8hWdy5x3zLP68VjMb4jjyKDqP7oLoDHy1rZ3vS1zzr3MGMsGrrg4FonPCxRJurNZKjKcXTnSUm7G9595q8hiZ"
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
