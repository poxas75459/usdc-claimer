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
    "U4LFRt8qGbuY2ESWB8vXR6vBRG1GRVp2TYRFckERn2vaoYkhobX3um2GzyoqfGxHMmbXmiAHHCB2LzxUoiAQhfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z9M3XTVJvoHiJwsQWRGCfUMAjMnGhkF3yEQofQ4Q6zQE1Nw2o2tCfZUQTD2BesNNysBvs6KFVjCYfEY1WYaUu3K",
  "key1": "5sdBeMAG9gqZUf5FShMUM9ySE4dc7ex15FmMXRECMbvgefZauTkQEEMVh9YHBQCvwL6rfCd7NnDwnWA9aXJuS3Bc",
  "key2": "4Hy2ebLHLwCQxFxwEaXZVaAjKQ2CZFVDndSFFwNt8Zz81dDRkFEPmdpsXkz9odYi7uLtneLYPei1y3ddzzckdmWQ",
  "key3": "5VEQESt7k93MsFUxrcLsDFMK37qQxWotzitQXusgcuSmJCAZkQ69sdHAWx6PHrTYS217dQnywJHe93rxwLihRKKp",
  "key4": "4sS5eE35oFZ1Q7eTM47CNxw1pF7LMakTuKhoG4RDresdCL7geywcRHR8V4FjW9P1nFnvAdVUFeZ1E9u57vUPuoTb",
  "key5": "3njxo8sYjqspHtXXLFwSrgvoV4s8qbmemcbCxBNg1xmT6RToBXDbbj2gbgQKt4GZZQHEZ7Gm1ytDyxfLJCpGoPEm",
  "key6": "PXWBaBaDcfxTYfBCwmBnT6J4jsaxzzuGou9cb35i187KHgrb5ftL7wTzmSs12Xm7TXqGtzeMGZobQArDrb4e19F",
  "key7": "2pNTPu769d5VawhWuGR4uYF1BkpVdVmLi5F95xnPAbsfoCDBByBoiXcR3zgu2JMd2Lmv27XfmaesXttbAxTBjr9A",
  "key8": "5qYgtFhFw2Au6xs5nT8uA4BdmQFF9yGeeS4cDqpvYn3UyrRRVmw4C8UcnCj4SGqfEoC5VcLWA8ypZv4mVqKaSRcC",
  "key9": "46XGgsgcf5sSgNhzZmG6GobQ143rvw6Kc5S5HeBYJQAkPhVXtR9wsEgXAkhkwSUVfKMB2pKSWK7ND9XB2nRpsz4g",
  "key10": "4WcEXA3PC1W177hDJZpEWENGxhzmwJvDwVZuv5MTWJUDtPHGvDjtkW5rEvynFrkVZFpYZc1ZsdeNbhqDbWkH9MqQ",
  "key11": "QZXrPdPd79yQYPD6yM1NCdxNyuxjpXFrAna1NrLPbXkTcRcPxUyFSGbFFPTK8UVFVGY4Ln4oY5bBHGbE99HhJzY",
  "key12": "2QTPYBzf3MNY2fnPr4nmxz77Ce3Ai8zk1vYZpzYekGrBLKrRMRJ7KA6bo5YYZ1JQN5MAeU4Ykrh7dnY1H7AZtjAc",
  "key13": "2U16a3a9ZM9o1Rxh4PXqEwYC2aYQu7zP6DHXSaqdAJHzxqXqKvWmKZ7MaxPvGoVexoqB7LMEcnLC7c1d1JXrh3Bn",
  "key14": "4orcjG7V4hXMDqNzRza6cegFWkhYEQTZPFjm8GQSnyfemeR2piRZ5yWo2po8Zn6z5JWd6K8PapjGF4YnhZ8VNBS9",
  "key15": "3d5npuyHHCGUaekWXhNCHFbZGTXYMZCzLbjdoyrdd5CujPyBUTuubacnUe5kvu7UtzVSSWJRnS9WyDKyCq8E2PiU",
  "key16": "G85RA5kEnLZaVuqMijT2TLBszsk9ps4qMXW25m4rECneuHG1A4CtowcoW1aYFRP9Pvdy4LvGewujsEvUs9vyiQ8",
  "key17": "66CRNLQ5CTu8UtGHsqTe7fzyGbp6xEK2S2MEaZSnbSSELhLUWcB2TGghgBHWHMzf5gnbDnkgGFQ5rBZe1kPzyJM4",
  "key18": "56HmSptnMkfGm7s477g4ouaH1ZBZW6oCvCHMMdiPY3UhHmsKRXVD4uMPinuURS7gnkBEWtVtMcDSqJidNWLNdMBj",
  "key19": "5bEbwaWVD9ZizUvVqqKUi2dcUU4NrRjR9qvSYKzRjUXom746LymySpR36f2am8ycR2R1QHRtGiiyMxFMaU8yLpsT",
  "key20": "3hZfMTcSkswtFb9XzkVWr3Lw4Znt62EgFzFGfh8Sq9Rypv8Hn7qob4YbbRqRjeViwixfAyPXFqo8i6yDf6ZxNF4U",
  "key21": "Wi9Tnd1oq5BCr1LokbF7N5HJVG9jxSRLCiuojBt1o11qX93QSdtnztf2xnDcHZ5C74uvgM7CSzX5rAXRvRe9wde",
  "key22": "3n4xjHboWEmcVvZExRJAx3e684fZVL4QtCh2NErn8w1prSXPJPg3GBkQ9UP1Djv22me5h7zAsCYoioKMsAdqKb9g",
  "key23": "5cT17aEwE6KC6Udz9QL3hFgu3b3tKNDoBrvaZe15K2VFNej9NhMHYvuNPER9f5MFkwEdP9Wc7bda2kj5u54xqgTr",
  "key24": "3XtFewkdcg7Jc3jDYbSgkDw8bJMkfd56JhH1RpSkzyDkKiBH8bHfWoT1T5VXwYhzwvFyQcCMtu9At34VhP1hqMLk",
  "key25": "5q277Zs7Vy1hhjvGjSxPLKoC3L8SdhZMMmY8HEvuGch9VAZhtDqwpv9wpbPy2Tg6do8QhKBV23Ti5QSB3vDfwnoU",
  "key26": "3mQPkrPSpSKm3QSfUtuut4585E9hh1sGqxQ72dLwkJXQG1SzJo4jijQ2Z4sGsqDakVb1FQ6yXAmVCJwnk91NLLfS",
  "key27": "2THBhkSuJio2nZdSp4JnweZfUpmYbgk698rkDyuGsstwYqqURwetzk3xV6j8LZD6uu8b1rFQg7aes56b9YWvHGHp",
  "key28": "2nrwyoaXNpzjbwF9ozRFSp5XZmsThQfNWt9nVApXMYceApc6osVn8DLmeB6MrUi5DwM49mWwHq8am4r7NysAbft2",
  "key29": "3Ud9eNgYGcTptGeFToNFA8Q6khp9uw3FDvFFrgohk9qwsk6nMYC3uDBZf2Y9zbzGA2XDmUYodX5qDSmvr9pccY68",
  "key30": "27hsTgLbcF1YJF6taU4K2eBrLtGi6RmWXizfizhnqYdWadAvhU4bQn5bznCUoNcDVqBbXxZBjqrpXDJ8CppMZxX2",
  "key31": "3prULqmDADiMgb3VNQ7CF4epbL7H9G6CQt7f4m8MoU459qzoqUZTvcbtTrzdySTdhx5v6qBfDfwsYtsCtBsmDV8u",
  "key32": "2FMHLjiBB94CBae7HCpAg2EV3u3ysezBphBe6TpWdsMq4zZz14cfwtfRmfQ7TVK8Uq4WoHgh93WgjMskeVS5b7Ve",
  "key33": "GyzvizKyyfjG5Md4vDvYUT6BXapsX1RgAQkroN5eo7e6wi3QsyvNRy8SrwVoKMFirDTYiFHG2SWXUHSs3umu6sm",
  "key34": "Hh4mXCnceBo9N6vRkA6zTNsFh7sHgTC1AVWnG1vTY9SNoPWGBJCmEFhtVdCqcdKZuKRCGFJu8ip7JDyTN6iUSu9",
  "key35": "5hPh97ryHVUZwFanjpFaQ79c22zR77HYaSYF7NjjV9F4HXHr5V379E5WwaipnF7aKtgQCifhTYLZmJ1rj8E1s9JU",
  "key36": "4hZh8pDLPLkwJuRmip8w1WdW72u5VPonTzzPLYCXnwNDXZJqVsVbEzgpdV43e5VbL7o8jNSuxfdV9jzSKtejQuxG",
  "key37": "5np2WiDTi1RDXJmtXEPKW6qnigvPM9kcFuHnsYe8sU8y2rZN4i3LonpLj67eaJRAQMh11AZsnCFPKz4icVoA9mrL",
  "key38": "3i32u6S6sTjp2zp71tmXFzC67JkGrpFYnKXmtSkiEMCoWPTU7CRJoEnRBUaTQYNy9NVcvfJDZCRNdfYjbvAp2K1m",
  "key39": "5XGNAXpZ87aRgw4qtnKwDJsboonboXjdYwG4YbCJWyd3pLBXnWK9hqtw46AugmarSUi5vJguHEDjmtQsWK7Ga6su",
  "key40": "jKE8Ljirve5z4PJB52wNzxTL4UkbuuddYvbYSyrPLYSiv9BQ4mYw5jwqD6aXaVqhP3iAeXT6ZT21TV4gooYybn7",
  "key41": "37wYuwcoKXhZ7eBsiMgJ2g3NiBAcaTZEMwkMdpzaHbUoj6jADtG8grJ1LSC3hW2vT9mD9uRudTofKKvFNtyERuPk",
  "key42": "YdyD6K5GLi4EyJNq7WVRku3hStSQ8HkUVkFkuYYGxjt54grn38QWfJ7ygd3pBLvjaQxpdmANxAXhxraNwf6YtGJ",
  "key43": "QZ3rLxpZ3rVyznvhYH5Fs6JAcZjtVgFALW9YY8GY4xwtwLLyj9ZXe9sKJrbSJt6cFw5dPNkt57GzqoXpiSdoPt9",
  "key44": "412bQjmPAeWC6U1obfksVP7FgE8bRzRx6A8k1rNvTEnVUhNt71qsH6C4n6ZSQjEyamc8rHNr5F34yHnKVXztQWWw",
  "key45": "5yWrkhS6ZB5QYVkpk2TYu2gs3n9wm7g9oApWHwvPfEmoqoeuNXnHexY2KetTVPABF9K8bKL1YNu5wiyPcmKNHzes",
  "key46": "kzucuwwc5n2ZT4o7gnQqE5GVL6CcZmcTmaNKM9Qo5D7vnvesqJbkTXTUQKm4oEJ613EoLEVuhqyS3cfBYctNVvC"
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
