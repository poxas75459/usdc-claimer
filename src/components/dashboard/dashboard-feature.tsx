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
    "64xzzLx9wxkNu9ZDvQctBrzMfmqJ91divDtuMqpK5sYHtRcX9v4uoC4gPVRag7F1crXmRC5Pngvo27WiZXrC81pq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pQbHxcj7rbQNvRvzGWXLwcDTpqcDyg37Q2svFh65Yz8fwvtGLMnPHY4gw8EaCKccJsFZYfQQ2osFGojQDYNXNtN",
  "key1": "2q9MfT5CAYCUakCAzNUr94r6mtR87LQJHMzLZF5XnhnUa8pRkEADpqcKrqHgtTa9mDAqkrcRjqg5rwaUuer9hfm1",
  "key2": "55hnNiSuJn45d1564xNP5Nr8hRatGzSnMMFLcjpQp2NQ7oDFZNNBTE2EpzKPoazdNq9VtzwkRwkqY3unvWag9GW1",
  "key3": "4k78V5VpMrqt7uzT4mGt29VdUa4A4QdyvFk3e2dxetTiK7xys9v62izeHH5yGaCeXvQC9Wh8F4BDwzUXsb4ezmDe",
  "key4": "5nBqyNs1RCQFe4KDkcA66TCFXauWR7pYPtAKtEHubM9uQjJyZt16epSWUpknBzigwLYAgxHSZdtHMYwEoHgiSNuE",
  "key5": "4WKDJfdZx9T13KSJFLy1NXiKzAUGhNHTSwCsaoe9eM21mjDwJPubmC6jokz42tUJMNpeUhUmzXZqxcMaBbJQdxJC",
  "key6": "58n8wy6khEDxhZSJ2SDyr67YsJLLW8ws6Y8HvQ4RPRLEfXVZvEPKgm7nLBJTM9z1A3QZgcWS5KjRbxA9guc4CEwN",
  "key7": "kn2EzfZ5FjMpZ3bpNxYGkUGLeQT4aMJzH7swfwJcUH6V3aQjupCVEZdbXGepEQ1FKM5wW6WXVN5i3U3THMs6Wjd",
  "key8": "364cx2QCMw8YCaH4jFJgLLShdWCq8AXBjco1UvGAVMMAuW9iXYTkT7kz8ud5mYQ9FLrpq6t2AzEQ8p2hGRVVVsXE",
  "key9": "2RW7d3g42MoJpisJvpTfNLnLyoMUAKZ5sqTRWXRdfBQUUGkDVBJ4f4RAUTsGUwz8vXfaptto23JDS9GhxLoGhuAL",
  "key10": "cFjTFN5feiwbHY7Rf6UKW3ktRcMLqun6zU6oX91yufpcmvKpAiMbEnv5FFrhSwHeo51pbRL8fWw4b6qK5jWsGGg",
  "key11": "Go4KueLH1j6iqJDa1oydobve9UnewHRAwyjSyzhbuUHEefueqyGNe53hQkVeBJeoJifAfHna6Hi5Zxx31zEQ9rP",
  "key12": "4T3jiT8RmwpC9A6FQgoAYfjZaJtDzdt7nPjdeYscdacqEj7MobisWu6C6pVRYfDZ5zZtzN8MszUZi3xWnkDQ66J1",
  "key13": "pba1HEFHKXJ8JTGomyCtHXHg842CnSw32wZgBgh7fTYLBhofRUem3a5Y5iinA2Qvt8Z8M9aF4AjHNfv2MTjyT8M",
  "key14": "4PBb9AMGNLNFruL8QzqA2o5weQxbaMPYPJUXuzn2fkNLByMLkPpPM5qdcDm77QNCgVYpSRXcn1RwSQ27N1zsZKrX",
  "key15": "23cpTjcpr8igMF5rXvPqDDNshJFmpbnrX8Djd3ga1UQiXe6zDYCoUtaCLN8aCHraRecjYFnE795g3rdY6f7VK4Cg",
  "key16": "1fmikfMRMvEGWRYu2XAcrs4jgbcWPnPpj24ivwLWh6E4KvYdR3c2u7gu1xXkBmvUSS1zuoyJg8HnCJ3mDDmq1q5",
  "key17": "3SGjDhC253SULDMKn2uQ8zAznco4cDRHJXTjcEbNWcQWfrShPAXqa69MnBN7QgQqHcXFbZCwNKb1DH6XC4ZSyfWK",
  "key18": "DPUvKQ8WCmuFxyH3n3LB7xGoaMEA6XcFLb3kgdwxhHsCCxG1m7cpjxc8ztTJmrxiaUhGFi65eUieQUjjtGVUkSu",
  "key19": "63WR4PEYdCaAESDcPKWxguB6w93ZF3Y5J7e7h2Saef5cwD46sRRe5TyMGwajWcATXgqUREG6V7ivpxw8jy7TDUoj",
  "key20": "45BS3tUJaVT7xy7SNmioUFPVouLpRFpUQFcJhYffCHcgmaEMrU5VgzawfbJmruSGZBnSeD9otw3cnLsRUZ6mFZvu",
  "key21": "j4dmrJChgjmE6C4axNwyYwmDkrCqKvGtxeaUSrU1aHxNgxFk3eQr53R9XZU2hn8sJ4wADjjJ8rSKgWFqYX1kLJe",
  "key22": "5A4FY9z4LdEdGPozNtYdJmHHmvYwn46DPKQKto4TZAgGgzajQjnnBNWNFi6ijWDEwsYAyPYF9nsV5Uo4cHnXYLsp",
  "key23": "28H5dtiK4Ue8H5UfDEq7CBogn5RBMwUdGcMAXhY1xSFSxDi5B4vUikVJF1E14C6M4r5iCom3LjZ9uAncDuNbqUYb",
  "key24": "4K7SwriUL23BVeCcyr7zUbuQ6Un3mTuY47tLCHPAAWJsUU7ULi6H11PwwkJwV9dvQotNTeff6SnedaLGtLdUe3Yc",
  "key25": "GDaUrSQdef6pcEyRQC2Mdpk2Azck4HGTKBqzr4EYBWaavWDyCdJPiEG3PrJFfKBkyrYYmUJmEvdT8H81kL6EdYB",
  "key26": "274VCC2dR7PaCXJ6FvKa8DK7QAXm9nyARyJGGpDxmxugWJC8nF8UiF1mnZe2ZUSHwA35ESw3ZfeVS5bRMpiUF2mA",
  "key27": "4VNLYQ5xn4Ce8ZpJD7fnphdn8L1wwMVn26ACDsSjkEy9fkztZ3gpsg7RUtWceyqCHmy92Mcg2Fs9GL3Me1hTfMRe",
  "key28": "5X7VkWvAMGPj2tZw2pa7KNvm5SdFoMaZxEpJgDRMqNpB8EGG1GK1t5K75JH616JYrU9bs21PLwj5TQVcehqzZsvj",
  "key29": "4vU1XMbKknWjD8TjQ3U9gGMyJFA5CiURzxBthjyWdkMNhuFN9fDsZDSDYqpH1gycpsD9QaFxzm2tD5cRkEnjG7mV"
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
