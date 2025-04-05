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
    "45N8p772AbwfZ1XguYRLD5ZofRqFs2hDiSN3TQsKay83XHWFDeeHA59EJ5uN984vkw7DGMQZTPpkknhyPzq4wddE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wukvn4g8DQRecn8fSsc9SwsQvAdrQXK6RMyhVN6XaeFjNv5eiCAECSVdq2EE1dTzCzutGXAKE1nhNeB3RatLAmn",
  "key1": "4imAnHYfiXXwV3krfTXCDXs9MuPy1yeqT1ivoE3m66m6srqQGk6Ug2yiWgTgFXNPY7xoSC97PSfKkCxtijc9vR3E",
  "key2": "3d46vCn6spi8mvNeHfb6fiGjmd2ZsTGMUbVcxuWJLXh5qj7XDAC7npymp5My7m1oEhzeeGgXFA3F1BKK9WQzNnwo",
  "key3": "4i8SNaGhXMLZ7P6Tz1u8bFtNgteT7fQAWsX9K6Chqx4S3WVkrvpDVCsuJcFFDh4NnpPfm8C3XidanJP7rtEjdMiX",
  "key4": "4rgxqz2FnyEnwszxHwLQ8BitipD2GBQijeVXmhSjuTrYfc5qfUEVdq6LYqhfZ4L9LLtnJaYDAJyPH7zW8GNhJXhL",
  "key5": "aQLTe35ps9EqkCT3uGJFvxsjCFtGwLMi35x1xrgGYD4gCk9WFkGixVq7SKdzEJu1uP5TWBDieFK2Kc7YWmQFtJp",
  "key6": "3LT1iLFXWAjBhGT8dzCGtzkAi3Sq9WkMbAxJuS5o8dtxuKmY3UbiyPHYM5Nx9hPdZ255aXpy4joSqUwFND7zxtN6",
  "key7": "CtBgX6ETcyPUKXWw9czpg4pRhVGghVkePQZdft6zUjk8p6sg4NNMxHTHmVjuQLe18QQR5wBv3scmA4774aLpsyv",
  "key8": "3htwkpgmYwqWYLYdX7rS4Jy9ak7qMee1o9NjdTqrNHiHNy9MtkhRygWPEpVQ8dxVXCGhVAdCxzkxACwps6VTt9TJ",
  "key9": "3Hmb28Z85toR2SvgR5sVHnhEbNe9wvwu6kVAcemaLe8hjP8pQPnSw8ffvChYWzkNF2D6QRXLkBwfJeg9x71V4V4w",
  "key10": "2C5uhr6uwrFJ7yh7WuuTdEn5hN7B1552rgjPaCvJTntvda3WCqCaJkd4estBZyi45n9Rgt9DpKmwqw9cXgufkzVW",
  "key11": "RfgS6m8P7zqtPByt3j8GKZAVCsybE8dJ92WU6w554keXJXjRSX9USh5knwRKYbVQ3es91E3jj4QhQ9YfmhZ7HgB",
  "key12": "38tHkXF2YMMC6wNKw74VMF7QJngYXWtUgDqCC7smtnjymoMoP5qbLREwmM5skMC9da14VnfG9SUcWWWdohcVSn1y",
  "key13": "5FXq3iQKhkmWwgRuiCwbZSiSHXyF4fW5HaeRQtpvK8tdFda4Q3Nz1jWQCSmK1LEdmmrUycX1f3Lgc1SMFqdnBHbs",
  "key14": "3P8CoS3AtiUwPniqsPVKRqVgVfCVuaVvUySNJXgqPXLkPs8jBaWyhn6PReY48P66uMVK2zidVPu6Gx9kcKwxLXmQ",
  "key15": "Q9seG5NfWPfn1Kreyf3AUV6hpcKTEDLsp7MHpM3FALT4zkAyvuJdH1NHYwevLL42SUfkpTwDi6GdaX7nVGL97Pm",
  "key16": "5qqXUvW9L22eaUAWFa9a6yp6kHT8BP4gnoWNZnAK5vrUcWhjtpFPj86gfP7o4mrbnTj46aGUExKLskm5gNiyiCP1",
  "key17": "2f7MkbovRkMnLcC3WKXndkJqWsCkYM77yP1RpLXQuAzFXhEtBqFTL5zivt1V1n7aHEnab5abeCmMAxVEjLHhUVav",
  "key18": "36aNGpdbYAUVVeua8949YodpmNPtbUBewEqz2FLZQgaxzcHCeQRidgzZqyv7XZgET1uNo5DJgWUmV49gXaokZFPA",
  "key19": "2apNBRSS1h7v9Qn1fYg8bNQDASApZLYasqzh4BSSwig7HNJtXeZbBFfqXA86WkKqHQT3Z7jG7xX7UkSt8H2DYyuz",
  "key20": "5YF6QXJWstkkKmDrEmYJtVHHS19HNeboBC9JvNi9yogTjyH8cjLHjLvgkVxFSFNFoE3CfqefjdttMf9ocM41ozei",
  "key21": "RXBsVS9NEmAo8F4rFWqYdbtdb2Zxz7gxNaBe3cJhEwgWGzXagWEeZUELUjFRAMbFAnH4UVyaBJrxs2gKg76ec4N",
  "key22": "3377FpMygWSBckSEJv1Nqh3NRy1YaoehPm7CC9o3JQZMjLM1LZqZ1gFkVgnADe6wDY7PM6XtNrkWdfAtC33BFEui",
  "key23": "4FgnwgLKa7P1eV7FK8FszpofmsFkdmpvVazuKddTyN4Jx5LFWrb3NFgoWrDeyV81LmTojsNAKtzBH2Ji1UR5TxPw",
  "key24": "7vtvNc4LcaXEwxKq8WUqnQ3fwvSF2pRZJu6atfqo5c3R5f2WYdyE3gingvPg1n55WF1PL65osF9d7NprRQPHSZ1",
  "key25": "46yM2Jctp9PgLxfYJ5z2YdnboXj5iRH1gMjhJhfYVMZWxGsnZzwuZVSDRyuSW5oehTwvo5AFioekhr7zRMqGszyx",
  "key26": "5MriJNF8F5QjWrcKwppuRdbGU2VpSJN41VFS6Y6KiMkGds4eKUFMNQ7qZydMYXXHXosU39gkN8iD9gmmi3TRrKhR",
  "key27": "4wa95CzuvmZFJvGNK77rBUYpWSfZVoQZmc1VjNpYEoGUSfia7GQk71k7T8TmNuAeMyU4ajEJK3nnYzmyJLUtaepM",
  "key28": "2uiEYEEuaJA9X6y5Nmh5KpkbpgVs1KZLQ6VXoshJyV6nxnYvpPkMJzkitDMALPj6jmqMwW6oPnT3yaWDYgc1BbaT",
  "key29": "2R9ds4td86kv1eaAg2kqnfpnvd7FK65eB57ouds6E9GggH4jihTANdhW3mfFhoPF7ukZ2vybF7PUwBgEw7chBCpJ",
  "key30": "5kvS7rRcu3J9zMRWDqKXMuyAVsM2A3fxBJrL4qZrLdf992pWktTi7zuEZ2kJEx9gTyAyeiTAcaFc9VmzY8FfzaEv",
  "key31": "2wB2KJKmo1jZfCZNZjVrDfJbz6KvnkJhB4cUHTxStytM6Jf9APSVcBEKhfeP1xZCNcwpvKMiHmsYJk3D6X2FqMoc",
  "key32": "2KZ5xUBgS1n1hpxyoSVtxsMqhQuBRSMLyP5EXjKJPEY8HjjExkZvojpVmhytasPcKyAcJfQHPugxXKGQapctoiTm"
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
