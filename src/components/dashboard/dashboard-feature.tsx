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
    "5vUCCbLns9jd7J1cQ8crAEpXGtdnmENdEmEhN55EM55vvJFtPGeFVSg7kSzT4X54HpvALP1dRN8LjkymKBsvfYGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9JBhZgCudpAEaWqwuuNKeLXnY75a1daw2RwKGBnT4Uz5TnPxihaf4YhnK2sYbjXGUL8wpFMiWfiCo4yTAG35Jrd",
  "key1": "3anaP7cqhtJ6cEfiydwYKWxvbPyQmAWYb9ixxqaoMUfh5xQFPcqHZHtnNHHvPPDNtDy8mBuX53ahg5zVziPv9fSA",
  "key2": "5xtEpuibTtdMquDxVXAPsneBpA2v9YZw6rP2vCAdzRNZWLK8ugWf5Udj7iiJd6FcvaCMfEPZCAKdMYL2zBc4e1zk",
  "key3": "Kn7wDSG4AkiPyMAwPDePspT8BhKMVrLRoWkAYnQ79LMsS9FyMNvNH1Ed33je7AuG94CsJreLhpewGmQ7HSpuusW",
  "key4": "2aQkja6ojgKekALsSvhA1QpdE1k7xAy6E7PkRTfhM5nafQ2zjjp9N29nRXWu3k3SbUyqEy7xuAcKjYwURa3suzen",
  "key5": "atrTSnqxRpWdDxRk934BnWvxzoajQ6Hm8SCM5XAZZEJEam4raJEcBgygmSQnNey9XC3SkbtuaRa3E32gx3Rgcof",
  "key6": "3YcvAdSyFaEEDmZhwCfbBmbzwiXHzaceusHugvmHJfq6JDKS9fnaMyhJvyLPjMoznrm2panrgUndTjZWuM9R9FJa",
  "key7": "458jqPPGT5uR4vYbKWVhAk62CDcJAs17bwDVhE2NCDBebxA4AgNjbohAvMKGsGbN7SMEd1D8MChcJTWvfhFdevt7",
  "key8": "4EidN4CEvPDQbyJgL1jMrCt9Xa5c9Q58aB6QVH4QVsKPJR39cfc9kBw6CbG1KDTQAkf4i4E13vKAUR1otaHFUHL8",
  "key9": "d4WBUcsox45KQLkYMs4Qva6sseVkoiD3KZS5bZ4wEnNk1Ke9yrW2eNYCkcH3F3cr8uCwogBDKhjYt8FCuYF8FjR",
  "key10": "5LXhbadHCA6WXQVHMuPSsRouqfhaxYffV8aaUxq6xPZ6hbgmLifGLV8WDdGZYjiKzEzD9vC74VGodCXLfBXyFKyV",
  "key11": "2FwkNhcEsFMSGengqfEre9LNk8TDzZittWofnYRarnubTUEdrWXJJh35N69dJ6GxXoYpPnb7cZvo4f4pgN5eLr7i",
  "key12": "3VQSaahTiQoK4f65HMP7BUUR5n9d9d6vv3m28V6FJdr2YwNBf8Rr5JuEqoFfSjQo9KSgpeuLoJQMEx2oRJrnWygr",
  "key13": "273zuw9RQWj2JwST3HpfgFPVap54AwyiZSk19UAqmntyfeYgrbZzQSkmRuDXddYfecFWvF5nPgrrRwWnFcRBxSH2",
  "key14": "2P7d1yWYXfGd9AuDqWM7yzVaoHi5ekLEHyMqdLJbVJbp4SBc6yPmykToyLBwH8dVNi2soCeWA4232fo7dzCCAu49",
  "key15": "5ejMXKdRmWzk5FWRkefH3cjsk7BP1Zxi64PhAEAm5796JAp8BMq1hAP738ApTJYRhijaJuWREtcPLF8AWCLToGF2",
  "key16": "5VTko9FZhSZSGwTU13eiPjDYM5ym4mwAmqwCYMwSmvNnc9vYQpaDgCSBVvLsJFMY9qhgtyZkpiHX6zviTuEhRFDf",
  "key17": "8SeymEKNTfMJV7uW2ZEy6c5aqhrhQaMCoGX7eaQxTpfXfR2NeQUVHvPFhexUrvDbqCpxkApUu1inLgm2NgCNVnJ",
  "key18": "5BF5J2oqQE9SLzRn8QKPVeyXzuUnt6N3noysTJvpyiPFks7jmPpP7n9X5EnBvPZ3LKPQRgodiLYp6s3BKFmSQBAh",
  "key19": "4CuyFEuJEDRE22bRnHMGqHUveRbNVcPLnXbRHYwBHsmSAHk4a4AT551W3PGpvSN9m6nPbKq2XoAkfWSQdeRMEWnq",
  "key20": "2ut5oB1k1XXXLqpEpsQJ56XqDXjFDnnM6o15vH4KsUMpNbGgbCkVqyGsbLQkuvaxjQqafshgwJTz33pgJmcjoGDY",
  "key21": "61mQwrHFwFjnH8aEA79Lgrk4X29mDvpjpw9opnTTDGrFUckaBQRk4Qiv6xQTPD5mEaAu5T3qnqKmpytjoKGp66Qv",
  "key22": "2xsqxYQjjs6y7j8e2vDqrgGu9WgLnnAHvF19TyZKnCYa4jeeSdsP2KqyuogXJVJ6ut1vQKvvjzps1SRTbTzVtymB",
  "key23": "5k84jZxTKuukEP2Jo5UZXjvkgACJD4BgqVeuH9WNEHpWg1jecBhrNkcQbDp7pt7rgwnu7jFs5ThDAfRF472VYRy2",
  "key24": "2vG6fwsptL217yYpXuPX8AbaXDHpVhhovHv3bgSDS6VggtfrEw6MahxxnSH3QvWQS8cv2wazdR9rW5cX6Zhwvf7R",
  "key25": "64fJoems3BCxhJU6gxXCTWeXuNzH2zZ5wQEbNcUp9jeKhMx4kK4UwPueARHv3vuSUbZwS567jTfaY1Y35qjv2fUE",
  "key26": "2CcZyW5px5N1H7edremavGU4UVSxC6hKzz6EcVTxYbAHhfNpJo5VRekQmNjuZeW9NTrTTeJ4pVA4RJFgFN79u3SJ",
  "key27": "2HHmxri9dG9aieGyAUm7fKXvqJhVPBG1qWAb13pdzbEnoYvyKdTJLwZE9Rm7jt2HmpLhpG6oHJabhinpT15MKArn",
  "key28": "hP76vfwhSFYwHqQgi4BKF7FBchE7dyeA3StwU3qoEKqPDdriVgzAqCKPgrj8iYRMb2qZfHGWiobgzrf3S5YCT5d",
  "key29": "5gRmNK14CMbUujMS4T4gdp4z35Qao4uLs2Tt7ozPpy71suSoepnFKr95MfB2fTwD2kCCxmRFZq8kmkLmP2pjqWLb",
  "key30": "44xUZCm7VMxetqeUzwCmkTvQYq1ECJiPfKTcuvoBvdLTU36BCnvfL4kMsiQqtEZMisunkKRQLu422ELf4YBFBPd",
  "key31": "4EPiYAZbGLf9XZwjCXvZqngnbYjEpvDWUPwtjL2asadhczjAYCb4yUE7uuwX7Sb4wEwX8RTCiGPRQyNdPdesh1TE",
  "key32": "5gieRRKvCHUUe9aR3zx4Uy5nynWsWoNKYSDTC3dNv8r3zCZb9S5vtVZc3NkKwP3ERdtaZRHj4ziNVtw5GzRkecmZ",
  "key33": "ngpj1wDLMyJjG4DRfQgh7VfNEnTMHaSpSBBHVrHhQRwRTPXeFsSD8NzgvM2KdhmTPbYHpwDuGjX6TT73MYMh7az",
  "key34": "2g7qzv4hZ6EArYuZQckQHTQThj9UYvJZwwFCKV613XHQY8sM1qgSZRvLT34674sFcjcxaew3QDAKUcwoDR3ihsF",
  "key35": "7atuhtcbB78GFier9yK3SupgYLT3USJbhVPQmFtsxDXQfqK4iLHLZQTzvRUevGEDR5DNmHQXt5TKRziuZTpri8x",
  "key36": "5VTjsV13ddZoxA57SGfXB267dYG5z3TjeqBeMb2iMuADBbWWqnEMm3Sjx1U9CL6wZ1ujonXBPynTfrHSqaCaKZte",
  "key37": "64nzqYJUhesMk4Er75HfuyMTMc6CKVaVDsvtYeQRgfeoULdeoubaJssT3vSnSvi8syXtWEkw1GnKVJwcSkNtA8q7",
  "key38": "3tpCuF68Y4PUP8F2ULajwGx6iRc4TZnvdhdZpqTgbiT8dJHxyRbTMiemjcEzN9x6iHtzwrFMrrfdN6wEVKUp3xUg",
  "key39": "43HQxQW4zqSf8HYD57Uu56aiZ5PkJ5PDsw2VxXy4t5gWZFAyuveEHm5jG9ABwLkTrhoKvyFCBxNvmK4qRcAmtkbV"
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
