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
    "2piknktfGBrhwwY3dCgR26jxZxX7xYxRUde1B8zkPV1t7aEJxWua8BNXKthbeCbgJT1pYpYQGFTTmYd3qEhfynvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3trHpoxN7AzbYwRckSzWhjHLGw4FS9aeQr8EJxy8ZzPDN6KjLScPNq6HEMFqA7nUwF2cyT73umkzDsCWdPuWoExC",
  "key1": "4PkdbcjoJmMwpKDTC3Ck2ts2nL1HJgpW3puPqkaLr93DqZhaDoDE2ZrkeRsdKzDvExiLFmwn8SSwgdYMfxZrCAQD",
  "key2": "2z457F1Sd6ANe7rWdbntS9PyHEsmEsREkYBSVtuKr7dvcqLqK4eDk17GbWLfruGKfRWe8Se39AM7hACp4iZ2XwSB",
  "key3": "38XXFoJ82ksPwFHqr2q3Gf5wdhzzb3r6w6oPFziw9roqcNNUy1ABK2dzBWxjzFbJErbFcqtHjiUnBXnvjXChE7MM",
  "key4": "j2bsDA47ceuxsrqqBKrzLhst8hPab8LV9xzBhwCwubtUciHsqMn2mXE9zr5K9ZGNTauajm5ttRpyKMrhAR6XJdu",
  "key5": "2RM8WLN7R5EKRcdyoJTrEhum4VxX7C6g3govy6voMCN85Kf4bgqQmpFn14XqzJbRy71iV2CPTS19tV5tVfBvDyEy",
  "key6": "5KMgi15c462L1AWoy4nDYvSN1YtPzCEvYMwJrWuepsHzf3TVx1rJFZSHXzU8pK71tR9i31GyKfe93aoUQbDP5Edd",
  "key7": "4RnCJ1i4ENyGfwy1P5JhraTrpBB9KTuPkfSKjHoikYMrjW9vAMahQdvjTMVyGXyg6Q437t6E54nV3hcRqD2q6Sf4",
  "key8": "2Li8WoHL3mp7M5M4B5S5JGBNPEfUa4DjGTpVwGp7Enxr1EoSFXxctacwvny3PD6Daep8uBEtVVt88Aa8WozZYCaU",
  "key9": "3Tgvr6URjcFaVpzexpECdLtmJKhcDZfrUfkcKmJQUk3mrTPuimeuAmaAsZ34aQZ1JgUkz5PTWuSeGkVSW87yXbRw",
  "key10": "4WJUuntRggM9P8WEZFSVAeY3dD87Jtah1iuQ9syRUv2ruMZfUQmwEJA8tu7r7BfafVbmBtbDhh3BhzCPrxU8MGQx",
  "key11": "5yJ41BE3BFaboW1SQhCWKJQRNZCNnimrgcxiRzThDh73kES3QxKn4642NTdoikDyG6vjCyUmEwLFefT43ZCwDAW5",
  "key12": "3s2qbgVGRww3wDqEKvioDXThisCskEpzaeqati2ep8VkjfbEXJc7yfmVYVG6bBhyr3gfM4KvBWXyojoWQYB6yPBy",
  "key13": "3cLq45HmrSQbpP5LGyVZu1GHhgNm6AN5dsHpSwdye8BKwJxESinLHo28eDasmAjvxYfHRjbJNunoBiEeEgnpkmZ1",
  "key14": "4unECd7sRZXKCJYKJKtbeMdhrnr27JCbvGcGp52bcUKa7n7QsyG4mrWUcS5VB1WXVqc2w7pvnybMrDTNpnXZzTMq",
  "key15": "4UPXLP3J2NcxzN2Dvqn2HahyNrwahbvNVxhg3hP8kothb3xRbDq5awKrhpFW1wpDz8HQehw7pCV6oYBWnyUFpQtG",
  "key16": "4oFrQTwPuMrx6aPyU91Kga5W41aDwir6Ec8KXAKW2D3pFw2CDCwL8LnzzQRy5ErB1JQ9cYEf1ZtwXN1pjaFGsAkJ",
  "key17": "5TTEt47pzr8xPZ3fbzNEGcrn1ByjcvrcKxT1LSt8Rm2xwq6MZYe7NJnyuhi4PKznsWZEpjGrqNrwRMjqFHQNZkm1",
  "key18": "5YpwmJCyraunzkoSieePwVmGNTMVCPySiGbgS6N11xLXN44V6odwrDPqCovtc8VDEWTMggcqmqyifco1McNFidaj",
  "key19": "3GEJeA3yEkuP47zXosZVtfucLzF9KVu2w7nNSuuM8kiusaASGqReHRoshkvBLKhjcLFXVDeZk7xsakwT4we4CiJ3",
  "key20": "2TwUTAznBbzLmN5uUr1wqMQvPxvbkb9CMcH6jQsDB96HwgpFm3ZyYV3PuGveTu8B2SASKCb7z7P4CEjVwiBaQrZp",
  "key21": "yJn8xKeUu66YEhhQVHa3GthF83twJJPqE89mbCL2spvwZvu98oqW6rPB19hF2sEyiwyAcmzX5LYqQy6ion76yNv",
  "key22": "2tcpPSbMaEdqmRAqoMQv5aFGAKyyt43fh1uQTjTkScUrqy8mtQfKQGtUQj3zgKRvaMr41dcBxhtr3aaVHPpVw4BR",
  "key23": "GirpcTB9JaiN1r3eJfY3RwZtuaF5SJpnQCeFV3vV8vzADWBQ89xpPrXtbsbVou9sNCQvGJvTWB7opEDs5SQPJPv",
  "key24": "9A3VL3FsG492roePcUW3tnwKbv9ej6w3jASof46cu7SMhBytmz5HJdbN6K8cNdAyT4YwjBuZfvbuDWMppGszguC",
  "key25": "5P4q6W5LcD28ZYVwyU9aex5xLVp1DrJ8msZB3YsYcn6mMKni3TZaw947P2naZ3UCLa2xfeGbYMnUjfnNK3EaB4YF",
  "key26": "AL1tXALj6H58ze8vwQGAXUeSafzpuBByYfFc8fE4WK4uP5NTYvsruqeaS7Xw47FWkcp9PU98rfFRAqExxQ1pmHx",
  "key27": "ku586VGdKhocnskgcPQqHmvjrdQGvToj4i8dpZvgc854FHTSciJAbw3ZueFmjapaTDsVk9p6SrSdkrxGBLCb7kr",
  "key28": "56UbbF8ADs7b7PVVoTAi295KtHmw6hEtLi1EoFQGDEaFDGsLED1cxasWMqi3EKKpe4h7vw3gUfnsBajyd8chRFmY",
  "key29": "5U51yR4W3vDCeEXuvj2hGpooKcLyvTQMSNLSfqTiqRWoR2vCWsuCWdYTVAsWJu5cwCEkhtnfnFLaAZmQi5pcQKSn",
  "key30": "21R4toL7xnnpTdG7M7W3NZCCT3WZ2e5gzaT6VvXVZhjmwFct3QR3JZcNqigHzxmtQ6Uqc7vRfZYXyqX8vf1wuqUD"
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
