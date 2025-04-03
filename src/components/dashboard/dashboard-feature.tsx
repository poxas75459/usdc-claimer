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
    "54ZYNsTdQPbucubhEfj5M1cWVziarw8Qscztc5Uz1BC9mSHGFmT52LKbuqMoWjydS2SEoRbPXzVeyHee4YduHedP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ggtAGDTRq6wSNaxyESWxua1QD2z7pD2LLLGPwJh31fqG5Dmyypf1U7NdAjh1ThvyvqNNjDNZS32rzY6CDdXy8ZW",
  "key1": "4mSdtHwqCxDeGugtVqeeePqkadGPJQXGikANth7agoivSKNKjN3xFitZMfXso7f24eedGTYg4suTxpjaVoBq7pX2",
  "key2": "3f4SLVSGhn6CMTVr43cQdMaL2vHwkzhgMQenKW1kxJHrrp4arviqPbgqaYBrsmeCrByGCfyUGpANqYh75jkX4a54",
  "key3": "2BHEkivZNF4Gs18ZzqD2Nci4uE799DZXtBTEzgCGCEcG6kcJhd7EBWndBSF3gBoGVp4w1NWNWkN9uwXsMMceRF5A",
  "key4": "29LNaa6boobW7CZUjLeSy32o8P2YnVrPcnYnKwKghYamHi9CVa6yTmpBUWRsnLuQgpCDM8iftVSdqz252k4DpURm",
  "key5": "67Ar9W23jUpKCkWZRBaDHiFXHvCPCyC1VPFJkyY3xaYS6wf8qGp6FBp8E5j6hDoAJDGBwZwqJsNXYoNkvbGL1xSi",
  "key6": "H5DCC2T8jwM42hg28n1JC86yQvtfuKm8iVFT8EjmJ1kkfsfrKcg6wL1Vdkgcc5xW9VLuciKLXfBisGWVUZuuPKe",
  "key7": "5ne8CwWszhsoSrq7vFG54tLr6T38juNCWrPRbw1yhr5uW75WxyiwTWdMWX1N8UCZXEmvqnjGhJ535TUA9kHYwtmv",
  "key8": "2nqxQxQ3ZGCoZzYNZw7K7kK5bqh7WhHeqGvq6S9sb8zyQR2zSqCgW8xu7PQhwgNyxzPHe6WpwwUUJPneDwaeQqp4",
  "key9": "5o4NS1wzLepaKMLz9mDqkJwUWbeGoNNazLVMuWdCu5QE3hvXmcFUBDW1PSPQgoyj1HQq3BnU67ELgaWfJpL382ig",
  "key10": "4vqzLrN1WUvbAfXzxBaGnvJaeTd8S5Wfro1wkWfGamugr8aF26u7sr4399DX2gQP4beWY1yGNCcBCu3bp8LPgBse",
  "key11": "349WPYqqFK1yXmvjaSerxtfvY9hhfhMMvouhp76Vy7f7oebbYCrVwY9aFpUMumFohRLeTEhuRcSuLhhmJTJRBrdB",
  "key12": "5FJrZCAcbstsPu5HuLPMhptJifqMt19XuqzNiKtwpsDBbtMnW6W9AxC3EmpzyUN2FF2doQ6kzq6yoRZ4UR2RiCVC",
  "key13": "3qj7qi6hdMdP1kY2onE4Bh5iinAgAkmgKH4Gm6KQHEFHqrPbttj4x6NJnygJVZMsWZhyZWLnaA3yX3rHm7uiDs4L",
  "key14": "5axGrKE8UHPSVTsVL2CXEr2YNTa7zgyZf3L8BRtrRt9dD9knGinrvpH3FWUNzRLFqBDRwE89J14Payk2GoZoxi7r",
  "key15": "2U49hqasVpXE4H5oGYyRM7fJVGnZdZMGcKKJx2LdLdQxiQEkVDVseZvNxUU9fpLLNmPHYgLiwv41LPnxx5oA6V4k",
  "key16": "4VagU1yHFej1Cg84ZhU6YfAWiEPXZsvJPu8FqZoyUhiveBrcgwngVApqKTYYDKmaA2wSKf8ScYF3vP1Z9oUVxmMK",
  "key17": "ENRgZxrWM4YtKxH1NnHztfRkfc51KBUnaiCCnfheJcvXtUpgQanDpmDM6evRxdo3vPFM25WBHQuT1247bKXT9Ny",
  "key18": "5R7W9mf7cyJVorpPeqWUZWGKQR7Fvhqtora7eygtEF51E2AkP3Xs8mtzo6wE1CNuxHbcWyb3szgUxqNdYgKsPuKU",
  "key19": "4NURxAqVFfytRtxGTVFthxSmqnQKbJ4xoWVrPdZJDaXrhERbSWGBpqs7fy3hHt8Fcmv5oJUrmn8rdKN5iz6uuyLH",
  "key20": "3Ht7gDDhoRe3vBf7W55gkAGAvGxNDBYH2AMChmRMgV5nRtZaTdjscDAgnqvHpH85tp5aZTDvSfTA23RDffEkqmui",
  "key21": "3QJaG3e37zt6DpPeCf4nGsG6qiTkHsemgtRcYCaLTryDgXz9yq1M2UkyxRqUwjx4hxj4wdDBXEf2wXE5EdDGYRay",
  "key22": "45QNqNt46KyAqi6Lhfo8Q5Tj6LYrKFN7FhFEuB4PhNxQUXEjs3mrYF3c8rhD7RVjUhytqYXrxUBLj8r2Sdzyvpfe",
  "key23": "5zsqzsGtw25cYRJz7k8BaTjfBGhPtCqdJBcQf89cdEpPEVkfDN7baaGbp21FgPESMdzSrfXwYztndvPsEg9xj9N2",
  "key24": "ArbvzWiNDX3GNUVBxrc8dcDYNJmV22FtJNLiFYNzV5x3wY4aK8GQ5zs1fS62PXjKEgd1ChdUoe6vnA3zGhBmT11",
  "key25": "4uHcj9hWxiBVbBFW7timS4fXyFEKoy5VUjNhzYgAkhzPeYESaoxHr4J6fCxzrB265FEb2Q2NjkuqU6JRr23LspfW",
  "key26": "2ACrVeJ5fVY8gzAtrjFQ9iMTkTHD3kTVC33p3y2EiJe7QqPd3SGLZreUsdF8P1YDcTezj2veiAbqaFa3ZpYa6wz4",
  "key27": "5MqdwPKpap6UsC4qt7mMqavKz25M9dREo49gJQBD1D5hGnUhbNq163sDymwr7BhYifsaKjmE4xRzPd8msTZcbmRB"
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
