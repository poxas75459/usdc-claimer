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
    "2uv6HMMJ2NRFWyUzYmxWWa9G6wWAWYDX8zbahdWATQ7Fpr1fywHZHi54dm8wN95aNja6yzYmvBmeWyRtv6grXFu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4pVmYUGaG3Xpq2vsCFkzyUW1a8ydo92qJf79TRHJ2fEZ1s8BgSgRtFCj5nBvpUudvHquZKeypTEegH2Yx6Bzms",
  "key1": "5Je5VMNGCSPFR2M2mS4fFBpow3vbMLLsLssBKSkKR5faU7UHVwkYYajQkKEzFZL4uREdh1eBzCJc3dGaAmLr9uNv",
  "key2": "2Yo6uifzA79M9YyiEBBEJ1SHcsExCjbWp1PpcLpJNM64FM7PDpRcS46eATFhuw2WFu5B1o8r4stoLYLiwkTwgXeb",
  "key3": "3bj9ZHfCHfNrZd8LsmXzawAYGvHHD9cBxPbJVxvbSM5k7VkA5cHcyvJmKr1GLgmsutnmChwtc7er1aTjVreew9rJ",
  "key4": "5Gn98rBuGaMxQUm8RvkjFmkuM58rVZpbDhhkJfXGXruikF7FqEVLFNah1g1Sdd8PBwGmzgWr1Qw2D4G1S5o4XDv4",
  "key5": "5JwHAcPf8kDekcCyD6APASNqEWhT9F2txecGxRLyTuMfaMqZiHwemWtZcuDL9vgF4hCE3vSGSxbPwZpygKjowoaV",
  "key6": "3QRhns9cVUvtA6C42Q7iWLQpFEZ8vxU6a7s9PZwBg2XKrdBQHaKhaANmrw9JKSzhCi4SzdYdSZ5ByyXBc5JNenK5",
  "key7": "5NbF85LRtgFiRa9Zgp2YoQxuVtNPJer6Y6bx3ZeTUEernswWvbNQRQeodeh259366qpbfvxwTLBaYGe7xZPGRMZF",
  "key8": "3C61ArtHrD9dK3AKGRAjMrEyKLpfDcnWHYuofzPagV1YYsbUan8VGWzaW3LKMb4t5aTrZnFgVgewChBwwSmRWTGW",
  "key9": "r9Ncuk7tKpehebNQKwmPFopzna28CDi2SFV7hJb8BQ9WhWnsddpuqpD4At8bBUkp6kWNF9QMbkBZ19fcGoGSj7V",
  "key10": "5y23U3DdSrwEkPKxKBTTmA47FZBQekDMPuhDr9bVbmwb97pXVCzTXzmGYqSZ86aXGNqyFXt6GgJBpoGMirUdfV6X",
  "key11": "5XdSQ9C6qoKD6FkZFVMXMcCWbr6paa7dXcSUVDgH3acwkhgtAV9wyn8H7fb4oFHQPjtsLbimir8cfqnwa4NUz6Dg",
  "key12": "5P4X8TK6UMzsPyVr4ggFpDc1hjn12DDrGXJWLgCDdsqkAcXetnTS9isxH4JpDbbPxcCeUMiyAP7vyyHQ9TUQgSpJ",
  "key13": "62rzk1WDnb7Hwyw8vLxgveCi258j2ZDykEzExzGjUnPqkMRAcppDSAjWasMqY3bosuRH9KfmkCPAbcLy9R3uunc4",
  "key14": "2eRKxW19GJLCXe7tnBhcMTnY45j9a4v6rzx7xUVpd8cba3ysnsdzH3XuNo2TgdQemxjEd4CW4WAd3oboAtYaX2QQ",
  "key15": "4ADQuaAqDfEFfhCoyaDJgAztVocNYDiUAyyMFFoeQWJ1kDVC4abXfWPnWQG52HAGRRQ9XvbUQnerNwnUUwVWxKK",
  "key16": "3VwfptJEx69oh8BrBCom2iqGunLbBbtkaCu7K3pXKXpcNJLrQLKu7afeEMFixu1ceybu6kYJZPepQ8eLKySU95PL",
  "key17": "32rj7FRau4PnVfxiSPx7jnhjYgwYE9Lq2Ad3g7zwPFKU1ZR8stpJs8bDjG6mnwJUdaxU3vvjJ34AmTVtU7aFt9nF",
  "key18": "26Dkk698ZKxZfUNJvWhmVYYj5cv3ZN6fHhd3K3r8QpqnWkHCgQXUSgBtu624hDwz9Yh9w6PCfriNaN4R4VjshCdT",
  "key19": "4A1KCtVDoNSGmVcaV6amD3j3G2Y8izYqqCXyPvfPByUjuXswQWmvEtWC5kxKXczhziY3j6qyjJ17PDkAXse82uH8",
  "key20": "23WJNpeoFgn1A2zf3vDnRTgWW5jUmf1R1xydg2xvP6KmTDmJrBSL4HqC2MJ99eebH2UWqQC2x2ZAXrhmArEiU4MA",
  "key21": "3dQSJobQe1sotvSBydMZpRYUvr4otrZgv5oRDyB7toTNei2YrNbEMqUFSyeB6Q2WPZ4x9s5Vvi9ewenwFYnSvc8H",
  "key22": "RjpjpLUcKZDAvBSxFMe6wk4LKNP8FLhSo2k8HD65MjV7AzQs3pqH8PAJbAMj2SkivcZ473v26Lz2fcNHdmbPyN8",
  "key23": "3c53bzJPCR7wXpVFWp6nHcG12UxaLBzaqTSFQQMgC1WGUxoSaPzTKU7A4zoHkDgQdo8CEs7a5qvSayzzHax7uELc",
  "key24": "3QoZvswcqmXxE762zFXSqRZTKUhFv8DXeqEQbN3qEV8hu8RBmgHBVtXeZFFgu7Fry6fzYoGbidrrswuZeYBV77Ls",
  "key25": "5ZMz9gj5pZYdhpfHoBwR9fKXWYLjb29cn1kVsN1R535F6Jj5oF3HKMznffL2BsFbHP4Q3BJMXLDuxywsfWXsRERr",
  "key26": "3yZSakz8xdypge71Q1f2FeVkbWG7JC6Ajnp1gh4GUYjDafV4QSVWUqDuMFkNnhfHpnUwWhfevFLgBK9hBVoeSTLu",
  "key27": "5Dh2EgEfYFiucqWm9Wos1enU5YkmpnaRT3sDWnsCnS95bk1hkAYZzoyC7WLypsuYXBiJLApHqDuG91fcJbu6PJvf",
  "key28": "gDwSWN8k8ypToXabkS1miz3uH1Lafvz48Wb4XxgBaD2j4QKKwbFpi9Hbvzn6hYmu2vPpUWwhY87pM5dsDXHfpRP",
  "key29": "3rCh5xX4zagBFnrW151huhc2cTgmY6FEfRNf6scKhv1WGc2UDXKtbwmeeQCbqgRYJnjzM4QXV7GQgRgpwo2dCvfg",
  "key30": "WLQNh7vVKMJbieJvriHuA5SSkhgHAgTZpi3R8zT1CnhUebCG4zBTNyo69xrN6JK4vveR1xjf1veHe1E2fMHXeVP",
  "key31": "2xe1T3j4wRuEtAzTPvYxGNEgZx4czqVLy6JHY1miWTyG1NWm5UeHFbUF7WJjfG53W41Ne1tsYSBu1oFJRWgKnRDW"
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
