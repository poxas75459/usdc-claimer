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
    "3FtWB5ZtQP8hQ1zdp9iKaA8k9g1SQNFW4sHWdusys84j7xNaPJAzwva2aJQnwmxZqghKDZ79GjZLXmA62hPGMDit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R9bMWkhuXadsj8bi7oV5Kfh7Z7bata4wJ4jka4yh5tNkwXCzW6LSCji5midhrjYHtan29o5cgkP3Tpkyb3wV1VS",
  "key1": "3uWyaNHGgcjfdtCkKUDPjq17o9qXLTCwUBDfThY82NCWBdPjQyb8hhiaTfmGq4a2z9D8remp3eBEDy9sfFPdGBXr",
  "key2": "5uD22rZA9qxTDpgrxqRF9PiZgttENjGGo5wTekkknx2GuZPSYtwAX2BdLRaLh1WpPJupALYaahh751b4hSzhhQiz",
  "key3": "564cMsSsrQz341BaLYp5VXcMcg8MhCBkUtGbDxzi3BVtYpqvJgsLcFsK8w64CKHJAyANK7pyV47iRQDKs7GqK5oK",
  "key4": "3mawgeyXqapLi3STDKExLtrgZYvu19Y46JRv6dQ3mbSVEnPk6qBMZ7w9zXJBxpAZa1AUrFt9dhL9oBr3DwjEfvUr",
  "key5": "Mjeb9gToFoGJvAvavMA66kHgE1HjqGjqaDZQFoqQ5ACas9RkLdvMLgZe7RzqotQHWmN3ope9F4kaSGmHtayBydC",
  "key6": "5kDKXpQVri577QTW5G9DaLfBzGoVXDPr4yAHyra6hCSXW436qdRGgdxHJyvnuEQ2GWPhQD3JFfCMZxL7zJLBRVDa",
  "key7": "54p3KvQqV7DfzdSpBkJ78yA4xmVJUyhoNrNkdLuj3HatmJkSniky488YNVijNGf3NZ4LP1e5at5PAw8UpZm4UpLw",
  "key8": "H1eap4CErEEGxsZZjFXkg3h8Hto96xqTiWb8cmCKA5oZGM8fg3QCLdzc1NRn4ZYTCgysTBeFaL2BdHLLDAiE1nt",
  "key9": "3Sw9MDAuwXM6LAtGJFHdBYWMUQaKEHajMZqVXYmHb7FQAGB3wUiEFp78kzP74yNHxqZRFuNaeuJPBmDmu1S1kpYU",
  "key10": "5K4P3xmVMFMVQQZgjZxWavDUU1N6rqJpFB1AsZP1VqCNUbJE8yjrEtfK4jfbmGGWm68GR8hNmcuMYuCFBDD67k8d",
  "key11": "exoJovPCBgNTGZEWidUJEu1jknrDYsE2P1iBwFW1K2a6ZjChEA4WC3a2BJVMfPYL6HsfDH7bLEJH9sAsTHrkv4s",
  "key12": "T8DpjFN3dFX9MbTEWRyhErqqeEkdfAegKMpNh9qbaxrcJ2TbThgkwqTwG8hciSnbLGCXs81ytPex1YezCUdYUzM",
  "key13": "2LCXkDzDyQn8NPRT1ZKkymYeYhTJrRnoKt1bUzCUfk7h8HXLeVWsA5aU7FYGgbWg3n5cGHR8DUdReEaf71KCkZhL",
  "key14": "27NwfziPBy6nsEu363s6xTxUvnomrGnAcnNNXrLTAnaCKuvpuQ1gei375zGqqJTiUSCLEiecnC5twJxjjPrHAp3r",
  "key15": "2d1K1ERo6ounkofh1P55RQAf6Ec5KioQp3K2QGFkw2K6iWULpczuzxgijPH5zz64f7sYkDKC18PvUhGqnugJMVA7",
  "key16": "5Dkzgii1d6z2arTGktQ9fXW8rxFoULekc467nzQzpWMEq44bpdnkd5RcVmS8AqXL9dCmH4jFSb8fXJCECE1kA3KT",
  "key17": "u8NBaF4Ywj9m2AmEiMmQRaPU8tFME1NR4yPRmfL6AnXSorozbzM7kYyy5aUQGGSL7q1bqcDocFBofP1sKE3Fkma",
  "key18": "hgyNLEemPLjVEMSrfgbJ3ksjgjXeeL4LXT7T6EjBiFpGCxVhPJJ93zX7urqVhnJrsehoo4PzbgMaFL37LGrxgwT",
  "key19": "2FzDpqSq8nj27R44M3rtGvagydtx6YLxH7ubCsyNZ15FHUNR56TkE1QPkE7ACTEst3Fvz2yykViUTnXqqvBaBMMt",
  "key20": "XPDSSyVx6tB2DonafxoUnETzFx4LgwEFVho9RZYuzsba4raBhyK5G9uVt7JgSqPXH8bQ7TcEXaNyHV4tzDDTrZ9",
  "key21": "5qkQSbCubKNJ4UaFgtsHFeRhuu7VTooRSphvj7pyR4QTCDNMGaAq6DAFZBrifZfZdms46FbKCXGFuLMossbjsdZb",
  "key22": "ZXXCuX1MikGWJogRVfWdmdEJmbREyT6JgnfAQaF6CWnAGY7C6et5KtJSyLKksYu37d9y7X1VkeZCWDK1v7ugMYS",
  "key23": "kjYWnoGJ2ZQGDasu2ceBXRmtj6rxN2nQK5DHssKh5EB4YoGGa3T6y546WNA879jB7VyjxTcELJxZDMFVqcDBono",
  "key24": "3X2VoTPbiZmAiKPxuMcEo31SJ7Hzt35RFmDaJ7MbEEezk5HyqeytDxpVhCZe3etN1Z6LND2B7MJqBYwu4n3rgHuy",
  "key25": "3bLhCJpfusQFrQXL5JUGiTDP934U1WxNGKbQ3MJang9qL8oXDEMYUFMJJXCEpyPKLVjEHeSAr7uSSnznXNQ72uk3",
  "key26": "3qtvNxsMztnYosejV1h5uwchGyU3MzqqhU75kT9CC19CNwu6rfzVeA3ZRDWZh2TXQoJiKfjG7hWbyYvp8iXMyruT",
  "key27": "2nKPvD2YDqjbEHKSh2v1QYQYoquwaepKD7gcwHo3f2pZFaXpZdyWEYkiG6cxgbzaeyYWcePDBybS4zQYTi1dzp9f",
  "key28": "4fAgx6Gbo86CuyzS59SeRgbC4ERpvoTwvFpS1rAJ7z9jRKpJWga18D89YeyLASwcXXBCTBCUivQqAMQ3nHuXb2jj",
  "key29": "4RRkdaKpwC1DnafGAejWHDF7bDamQwntnkbrMG2QZoXwk6mTWnPxNhgircFJMuzGTTb6A3DaMewWfeZNLaCtYZc7",
  "key30": "2J7wMtLXXBwkSmMN9TV5TtLi4yKFUdRuk2c4975zTVsYzBkJzudq2fiZqQiCj9Ncjx4XYVgJs1sFvKQwNXgjk6un",
  "key31": "4SKvNsYoGt7W8fEi5gUiZwKKx9kgzt8ZuAeHErrrPfqvxUtso4ubfBExyMveULVi8AEFjCfMyk3vWqUFTx6XjfbV",
  "key32": "4htsZPGuRUf81rH5bkFg4KLSnUhEGzNd2wzPwsH5tNkU17hrxtZVSgtVmwQL6WLWSzogFiFdByHcA34bMZp7z8FC",
  "key33": "4Kf2cjubEPcnzxaZrxTxuzFbB6XSJp9Rqx31fNAZzVoL2MEwakwx5FXjZUWQnHUbtnRZvSsMNtc9Um8AySrYBmND",
  "key34": "3LbzjNr9wMPngt45QCq1JUnoeeCuBuUBPxyJEX5vgbcgh1TakupDbZ29PmC6bJjH41VB9z7a4bwHECGnMCkpEmBN",
  "key35": "53KSnX2mbnL4tWq52tnpHJQuYSSvCuv6HPfeuJzkYRZA1QrACYvwY5D4DBpCHMPJnxNF9q8WNq7t6qCQfTEARab8",
  "key36": "4AJYYvNrgPPeLPciwQtF1F1ezj8rf7hTwt2jaUyvXkibAH9DRyWUSa4DigXxVEMvgJboFfLHqMhs8m4vX7WCXJSF",
  "key37": "2kTiyAViFpRP9aY1V9cHQV4roBgt5oazLcJfFNtez4ybs3EgDKZpWNKkuYWY68QmwX8ed7LgeQMa1uuzLSEtw7G9",
  "key38": "67pvQyBxtLAgeooiX51f5dP3W7mnahGwEYP3bBzgeHXxzVgKLqGXDZwL5BZN7x52UTLpeD2x2MVcYJBsHyxiApvZ"
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
