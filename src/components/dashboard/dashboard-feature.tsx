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
    "4UhF3r5D47r2yMXqT1HScREYMKs4oWvBeWyvVwRXMcUrJfHrYiG9gbiqiCZf1pLn2SQfpuksAwSy6CNdEPU3yUFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JvGGf5fVgybaxrozyjKrJoJBm2AFNr284umXvvdsVekgWoCdCaEaB5o8xiFYcdWfZrHWa6W9pXgeJvp9qJu1r2B",
  "key1": "5XVb2VS56i9ZZwcwPZCnh43pgCZe6twDAWYMYMPTJA9wK53ejFNhmZNNuGcq4GvAE6877tW9XHQupBZSLvKrECYw",
  "key2": "4yA8C9t4xy8K5Ub9razuyoUAcpWVBECh3rkEijdCDe3Wk3zPKWJggNwg3XvYHYurC9ARg9LzumNZbGFE9hQY6PF1",
  "key3": "4rXDeX7aTcaCY5WxgoM4ciBdLdB6braJhsss9p7XHQhkCe55c4fA4trQkept656hnMJuf3sdCjWzqXyMDTsiqAdU",
  "key4": "44UKn3dtdoQ3j8bEyb2QHKvn4oioPQV4BwDqzg1kDGpQ7RCDxiok4v9GJ1FKEMaZSZoNrVSHyhPjkZLb4rh15Ts6",
  "key5": "D8r1HJqrDamZ5mteeEc9DxUwFrTuzEUgyktKLii6EzsmCM1FgszEW2pNZuwZMntT1ATfno4zMmFumfgXwi649Tq",
  "key6": "2BMt3LGxBNJg6rvqy6w5Vgg3gYNsYV4bEa3Hxn86NFx5vQ4TAeYdWkk8zYJrgZMA6AKmPjCEMG2qBRhTG47ygmMa",
  "key7": "32Weev6oonJYMWp8AbxHmpPx1hH1H6XfCtABCeoa3Ku1NL5QsMpzPropL1U53PKjRC9LED214FGhGLaeDYZ5A3eX",
  "key8": "3eyu38XhWca5Xp4uWRxsc535pzUH3DhyGTfUenPYHxi2Y5WDy6Zd99YG5gsb6jKEi47MxMCy9QXrkXMefWxBEG5e",
  "key9": "2jaVJLB3H8GzWXDyoAharSs2yDErxPKoqBsu8osDnyQi9k1btY36evWrDY93aYGB3BuBDyo2FuyfJDopyGM6XcLb",
  "key10": "5e3e5zBgfsfS7bqwouMdqnLQKvqJWcpQTqx1cgvNbca9jjsCSx9K34VNgdoc71eTcY4DePzRrMqMKuvo3wWqhaiL",
  "key11": "Ekurch4hzGejR7i1mFvAsnyvr78v6Lq1zVBBbM7VXrckZxfHTZExJBQktHTQYWvQqxnf9eueYKDJmWNSdLroGLB",
  "key12": "2db4SXbuH6oczqQuwjjmYHAaDpJB5ZTosxo7eTXG8qdquqE4o83odGJ2nhvJuQkUpcVNYhwQvKrsS2dSvc5u8dJ3",
  "key13": "dyaNW8PaUm4KnaEgLfnmGzeVhSTGFjjCaw75HKFjkna9FjS1Y2XHPVS3bjxSQcHKKhUkDDmksJLtdnvDxMojRoP",
  "key14": "2TPC7cEkKAyRnAaBbKCkUkHeK7iZX1E5ueyRTcuMPBpq6z8wGURTii8CjpRcGZ1xr8Wdx3eCyMj3RJ4knSd4egpg",
  "key15": "4xpg2hAKVX8sjKpt9kjyBN2B6kvjwMwz9PPZw57Xn6znjsYGnKjUM6Rkc592Z8Rb3fBacc2KEdVVXA8cZuqKkJTZ",
  "key16": "5TdaTh8moTSg9gFXCnxoG2d53b4euLTqWJWPaDBXQnoPpfn2K7WKkHhCd5EgwaxuHNKc46LNBvBJNUZkma823XTB",
  "key17": "4asdSzEHn5icD9HU1waCcCJWdoP9eUB7UZ3b9i83FqdBPgA67phA3D5af8jy62N9KThqTfEXvpAo4Rdb8Fwuzipk",
  "key18": "5Xb9LfUhTE75aghtWw1VYsrpDjuV5vtiAtNgim2czEmZyimKvMmx9zpym8GLy4ULke2JdJRJ3QeYmeU6j4Lk7FSo",
  "key19": "2ny5QrjKvwuFS76FscnXygPr4qPFjv69TwLX6H8wSCPdMpmPSLHF1XHAYvb9HxVYExtuhhfzKmZVfatmEXoRpPqC",
  "key20": "4hLa7zRQwvzvJiYXFmiUbgMDbFZ535qMhrgmjwx7JBnNt5qqWVeXo3WUvYJZi3MaWSaVz2a39BZcNLFadUr5a9xt",
  "key21": "9mY51K7cGiCBX4xovbr1FDnJVsTpemNS9zMGTyQqiC24vao4pgMi5GUPR8pSdb48pu5f3GcqKbFChwnAf5czhcj",
  "key22": "E9bsGeFnpcHAAvdTVtdzkAAD5usfncb9YfFhyvug47AcaLs4LWZzshNMGMKmJB81rzrdA6Y8jxFV4dDyad2in3Q",
  "key23": "61d2Yf7dDWt412tVaekbJxpvbCAVaAqjcYGM9hnrPYzkqoafsexoMCLTYKrXcXzeH8n8UUqHVbM31DNEZ2jC9iP1",
  "key24": "4iYqNnadZyYn4m5QX6EPBeRnYPhSASXvQjeaFmLVVaQKKo1bNLvUMvPKMwV45Fb4TiQhG43TQftPG3Y44QAWea47",
  "key25": "4A8iKybbbQrrdBfiR5ph3B6QCDXXKwUXCgYfTcApTnprCv48uyAeEYegTKPJyhhmkv7RjPQMUhLXX89M2FnLfcLN",
  "key26": "5i2UaxL71oWXfiqAj4hMXBP6u9tBv2xdZf3vo2LHewo1MZWP4jWTf7zpwJjr2CirCyonewera5Bdj9qs8CkZd8Wv",
  "key27": "H3UnDh8a9K5nVFnGJWoHYgQPPoLRRuDhTTGG7EcwMbhVGKjtwUY924sn5io5NgQKwucPzQRn242cwMgdtKA3RZg",
  "key28": "wb4Bzw1aGXCVWVrfecBgyu4NBucXo8LkeYRkfySNgHDMriNMkXRx39uwZoGVeiRuAbRjoKS4sNzdTMfXLzAajWv",
  "key29": "58VvBa7dAyujEmchmZNLha2c77Gw6Pc7mVA1z4orhYSagJvypDHT1bUsG9i4wEQSXyfxbfRMzyxLwNLvBsKBhXZK",
  "key30": "4h2XSv72HNJgs2yWtGaVLoW72V7UiAGcDLz1kEnPXiM5PzFkwmYeHTxrqvbWhpCEYii1D3Ust2SPFwAB2dvUQw3S"
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
