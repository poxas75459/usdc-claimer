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
    "5L1Xx4FdkJ7JugCodR47P3JYVCzPopNQzu7CkZgj5EQSb5mWLs48hcPjz79Qx5SwtsZdK37DnXE1gcroRrGApGur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iBxYBToLx9upwAjaLLBcpcFq8yAZVt26e6121JzSTEF2EPcnmiSZoaHMKnVoYBvmqVzer6sWfDmovASrMnSg1zv",
  "key1": "5sfpSFiUybgFu5YpKphD2nTfB1sZ6wtYVigNAzNfXrvSZMjopsvtn5ktFJws6k5RYkJsK1BaERx5ucoBYm6cJB7Z",
  "key2": "46DtDUjMwMpYesJN72Yd7DB67DbqV9igdRd9XoUcPhKPByanpnWZzoVqk1jd7waqoCVESB4yL7RSbLPBK2pqtLsw",
  "key3": "3QG8ensAe1VqhZbyZMLNRkVAupMET8QUfutjPFUeXU7fvPQzJZTT67LJTecvUBkiGge5xjKw7wExCKCR1dVomumy",
  "key4": "2vpuFRuEThkscZfUMYKi5QneD4SY3cGtQmcW5gFRQBJZgGGPQuKHJLLMZz6T1kef6JBn1mB3UaL6AQUR3GdZdhgA",
  "key5": "2hSqQuLJh72WmyC879cKmwyfp7XBqnxfWFsssiQLJAHdyiMTbFaka2z1W3BMYs6CEiWzDMQjFkfxdQ9VFi1bjMR5",
  "key6": "4Y6MDbyB6CsaZtuLz3Ftcv3LPCpaYNU11cPTYyT1P6gko26ddrFEnuXydMh6Ksgmit4XiXKx61S3iJ4TVDVter5j",
  "key7": "4tNMYJ3faBh6jmJ9o9GLrDaW7m6wSTaFyVBfQ11pv5FvagmUUrB8NUexj5MsEY1JvyR3Py3kKv57AstM6VWt7yWH",
  "key8": "4qi18w7XFQupsfNMAFSm4yf7aGa2bk8fS8FMEFXZkpkbC7kM18L7Lj68Hh4RFrY811Yyx8A7UeuBRb4jtZrewBTk",
  "key9": "2sp5SAKa2WnhNBwAqnK565Z8at53dUuapPuUNLEHqSkSw7MANMma4NuYUuY7DBsuh117NegkHiDdRuXwtyJcRUmc",
  "key10": "2SvEcY8Z5aceyxHNnu4Av652auNi9GQUYjA1Na5bGnBfru8cx8hguxrsf4SrvNNb9GTnnbyW1MTyBCnr9dA8Jymk",
  "key11": "LEh1MqRDqcZ1XkRehU6YSeE4RMKbqJb9aXsnyhZRSxP1RXUpptkwQmsRFCfgpZa8jxX4AYXcju6VUjRrmKVSj2N",
  "key12": "2HzmW4iS369WPYWKiNLgMetL2pLoVWk5kjLeBSZyUWXMqp6P85vyTmWgDvPrZoN14cXowkV1UcDM2sKSmzUiZYfX",
  "key13": "5iPGDbkory6q4uThywa2TcmhaLTMp3v5aouSjq1jdkmQA1fpAVGcmq7321kMWw6s8WhUpaTdzTe2nd4TAyjxDfoh",
  "key14": "Mvhiphx2RCEhAZ39CfwKvbqqsUbvkpFj9ZmRmSZcLtUB96smg22g11K7Lc2bdpKthKntKrtMhcv5ZUkgCD8xHq5",
  "key15": "3ibqZEpUr5vmjeXfsNhJ7HrVhZVxYai6GkBCu9va7LJWRFfDFmMPx9UjcKgFMxqgYpoFtvz9DbpD9obq5wkbxRt2",
  "key16": "4tzXHxfmfuebtWt2L86qEa4oqVcuxYKUUJDWmDjwr7Q28Cywxpk7wMBHzCEBF5xXBMrqwNRZpGJsrw8jS3LToifr",
  "key17": "2W5ZuT8wk3ikCHuqeQLrjjvvBtJBnHEL9LB86rZCEs4qJ6wKXLnDpvucm7SpH5s54HQNVa8MJ2KM2CSKRLkimdE7",
  "key18": "2BdgSZSSatXNLTbxvvJ8VY18PWWRUNLf3HjxkPuHBby94bbtm81GrhqToNqC2u2tX6Bigco7rNAvkAMhFTrMCSP2",
  "key19": "69rwNN4AQuSSv1AMCBM3X4arwNTpt4GrGngt8UC62NtLLVW8tysvn2v7pYvWFDu86vjvMzuT32UzLRp9WzFBcCT",
  "key20": "5PvAaCwqHo6WdJJspUPDiNS9pb3shybtbrapNSyoxxB1PVnLpeRCiKHcN37ceagZ5VeQhYjURxJTwKgmVBChVo4K",
  "key21": "5ho9PVk6Gscz6yvCt6LuN8tGgGxBeRZu17hFXpa2pnArQ1dvc7FQkbumJrbpM2mdcfrTayUEMZrSe7XgLXEEUzG7",
  "key22": "4kJ5Qo8Qq25RrJiSQjBHdnKQ1fn9Gotx5XxVvNBF5QCfkCrTuibw5Ab4tckVxVeqPu4c1eKfsvJcfRR41FRaNkiv",
  "key23": "2Knr9dzbUs6k5LtxZcb7MbpafYhqXbMiaZwkV1PvjSfT27WeX3n8hMsV7zSkJ1Y7xF32Vo76iyJ9x8VAtqhEoJ2d",
  "key24": "4fRtjPxZh4mhVtNnoSkvw5v49zCu8LymxD8CfkwcAVsawXkLD8hij9RbR9jy1xvfFrvUw2owPkZBrmY448UWK9ep",
  "key25": "UNu49mpKNm5zLKspXxBgcBjt5THprEJKYHH7xXs4yPURmPBfY8gHNDevq1iSHjkdeAyxu4XaQL736DSQrv7XkBF",
  "key26": "67f5VsX8EPoH5btkHD1jEUX2WyR9SFTcuccrtRz3mijLXsuGS6xq5vxhCzUc4spmBmEecPKEweumnB2jBvwWSYiA",
  "key27": "47ZSvb4JEGKghTcgBbTECKxf8aDi7oZMBooCF8AQvGnTnfkj4RDp8HLLKM6JywtBfu3GAonYo8SjC8UVum87QAeg",
  "key28": "5SoKQXRYWUABWDegVaEc7ZfHAcNqyyXVHYAFDJGcMaq3xYS8t9ia986dxTCDKgL2yZCZVSTZfzaJWMB25mfTX19F",
  "key29": "8qf2uRiRNBkSf7QE1MuEyC1v1eZmc4hXi9ZUqX2Lrz1NWA7dxmHyywrg7dbrTta437sp6dH3Du9GsSETVw9Uast",
  "key30": "677QJUUFWbMimL97NuWWnhoCergUR8CGQTiWTQbo7sSnEFkMifrYHo4bnBbje5vCsmMxzUUQ2SWpby96CK6aQzT3",
  "key31": "3VyqFkk91hbeDUsSt7MUgASswipLisTDFe9sodnzHV14djBFbXCK2FryFNo9u86rttkknDLPgdMhd4j1QqWsdRLg",
  "key32": "4sNYhUvnLuuogpcWmheGvdFfkFJcVMzPk4wSUSEA3YVWaRDYSHYDKz4yjDg7Uspen5MoyAF1PRyCjEZxCpr3zPSD",
  "key33": "qUpqQbVWHJrDRrsc7roKA7BC3TcETT7XcmePXbnHJ7y2en3amG5qBD83Si25Aa5uuU6wGDJDW1oLQXn9GkuEeCW",
  "key34": "3jEHXJ5h6ZFq7dadvnic5pqzX4o85YoYVLeaiAHq1po4HKUvwNgV34RK9mn2Chbxcd1FsprnXuMMtDZnZh1K92rn",
  "key35": "3JzH7MjhTanVBaTLRsSEPEgCKGQ5emQfCuP47HD9takBoTRsJFEAoV5G2WgXRtvBANecsHpKftKDy4ygASds8BDc",
  "key36": "2LroACKsgXhN9hqRZEsffPJab8JkRccBQve2BVe4DNWZWv59L41E1A1uyvxGYCTc8b84M4A1wonx6XyP6Yv2eXyj",
  "key37": "L9aRverr5UvVr3ffLZmBRC2sxkivtZ2WVtxdwrHSLAn1dA7rg5LdyT2dxHKTD1sUzSQMneYf152DUN9DLLpav3U",
  "key38": "4PpmSMosYL774dKpDQZGsq5WsEU39kX11vHqPPBLQv4m5swbTkGMwekS6y1y7U232xb7xtqujPf4fmjRggrScvXT",
  "key39": "3xXy7R3P5r3npTea3XQ5bDA2ahLGEgm1FsqnmrXdVrHdg4bHme3SvBnfnW3kLhrx8oJX6tMNYKtp7V13QXxrXyn2",
  "key40": "TPqdmzA98DDbWwsyKmsiqjSbhKZ8ZmFFJ1qQTNcLGywyY7zMyHQAZjV4YYetVxxuwjVSgGFJb6o8nxUavJYi3vN",
  "key41": "55wgefNZcMXv7n39v8zBQ4jTxqQkw7uNF1oAKZtLjdZCw31vv3ikUd2NXz1m8L3aBCqHYYv196YcCySDBfCfGDjc",
  "key42": "4zfayH8myLsrhRuWDnpoqLZ2GbQvEtVYd7XM1N63ZJB8RHK2wEuCYrPzSBYn7sARkEt9uBb4CazLSxNpDMkCs2ha",
  "key43": "4ZtvjenwnJXnPFs8q7QNFGaKu4PVK4WoVyVJG2ebzfhHsfbmHCoKHVtmkEwp1muRXaiANCzBGEJeY6FZhynnKXBj",
  "key44": "tDL5Wru8oLd6fGYVnpD1KKBRi7FZMbRPYnoDdimkjTnv3S1nMvsDr3FPVPqwbaiXwzPgmffwvVXsHfd7P1teEuU",
  "key45": "79MAGTRDfA7teB4xGpRR7pBLeV56ktbrEq3YazRw6514gmszPfu8PRn5KQ8QFySt7Nv4cx3zavxPjR9uePzT8Q7",
  "key46": "5QUtqCzh94cQSaBTK446FeChLfAvPJppKBbEHcGBiicnt8bc9U5LCKvoXxYoNLSD5aPYKEhXw8VkYLoKdowWeoUc",
  "key47": "4HNe88TwMSiWxoLKC7zxRynx1atE2wiFjGWaYCgNB3K9yqFHYLzF1BPCGPVCuSWkVqQZvM9abzrncyHmgNiPPwvk"
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
