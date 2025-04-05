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
    "7Vjcsx5fUP43kUKjJ4FoGsqSMxViqa3WsaX3zroHFuiKUmjTRX5n8WALViAK5VCDXFMUoYKe8YiHLRKKr9ezWbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45RH49ffyPSYA1qNSpHeSDhA2wkCUrKK2kPiQyrcZnt1iqcQyvxuPrRwkomZG2ugYqfKosyRrvzaW4suXVjrb9Ez",
  "key1": "5NMeN22Lk2jTnGQJvH1dM6bZ5o2rLDgYPGmm3Bvp2AE49eMoF3DEE3EAmnhHKNMxNR8sgsWu2xXSDfko4jvt6BdZ",
  "key2": "5MgRUuiQ3quufiitAgHGoKqgjNy68KSQQaErRqMhs2ztt1BR3X5oYemkprKKSrTycoYoRUwJbDjkvxZzjw7RFiuH",
  "key3": "3utB5s6KrmFG32W5T67Q7BqcFvXNVfSjN5xj1cCpLJX9oZ8KFE6z6XsfXvSvtuhv8tiJTTGKp1QfzVJAu5xXreLk",
  "key4": "4g6zkGT7g3kEDjAsSUtFgKhB2uz2AExpfox4sLFw8shstrVJcE1NU5ZnwfrYS3dMtbETEtHXYt8X8ngZPSVWiTew",
  "key5": "2sqcGVEvsdbZDk9hkqDwSvo2pvipzn12s8FBXqubx96hens1hVSBXd4pNdb2CBPWrVo8D2ffKaDSY5jBEkEuS9Qj",
  "key6": "626qbFsxZMixDR3FPKP6S7cXb1JMiKcRDvT3LgjZKnA9EEDpRVcR2ftRYRLS7DWLfjzygFUg3WBYp1mYkZpEcpTS",
  "key7": "2BorqocXBk5pqAvj8dhT7wYC6ppnJUrSVVSDxgVaWK446hrp12QUDJmqyrKKnagk9fTSddjxEcMdLrfsnibnsY9F",
  "key8": "39QnrrbDAtwMyCgbpSPZLbKku8TKK2444oQqY7jKYdzh58gHSBqCNE1PHWRqtqwWynotuUKyoi8MyS2eEErUgd3e",
  "key9": "5kH8hZ3J2pqBoNd6XucBuxut5QEjsEWGbWHgvPMMRLUQg1UmxC8Arj5px6TzitJVfcfLgn9jKQpHKdTLNQFmmo7A",
  "key10": "3hySbYPHJuKCJtFXcjvuBq9NpZQEeo3wQtYXiTjKSb6sRKjcpwTTUpzwGAnqAm36nydgCSmWHwiLaNvGbY4XigS7",
  "key11": "2Dv437v4NzTZPX5hNENx6smhKTxvFFs3tMSoD6LAXe4rHEymA1pdc6mQw2o5QARiaqgXckCEMzAnmpkkYTnfgsJG",
  "key12": "5dpWXSAUEvvwFt4ADYEutaiLGaTLatgmeuGuumGTJY9cGFVYK9GjVM9bzkroPb6fLbVX1Rf2q5EtQq7AgBJ3LnJX",
  "key13": "5aBwTX1DwiVGEK6wjs8erqt7CG8rjH9bN672J524BUVbm89puo2rG8Ny7EXmenNctWrJP31mWAeHzgF2Fnrpbu2s",
  "key14": "5qKrMcE4u9HtsUVbdJHjq4vpPaEkmMZB1r4GusvziEcqZ136ZD3jrRkgBFRCJww2r7w84fmDXxBmkaKFAWC51k81",
  "key15": "2B6qAks38HLCBgdXZDsoeyaNHw2TEfrU4zdh7z9kbTocD7QWHKkHzoSUSvG4z5d1M743puBRSWze2PFvZLXqRJeY",
  "key16": "4Uv7RqyjQ4oHfruHs2HZo63PSi2S8Z1kvMxF4tpfUC38MNTKJSB6CzMo28waaJXEDBFExagGWZoa4BwyoLiFdPhr",
  "key17": "3UoxvB4vsBFgp6itsMmF4RmvhXweGr4czbDq4GHquiVrkTcuJAods1JSmnxZ9TqxuDi91RXbQRbe15UL1Ze9ucYb",
  "key18": "4LYySFKHJLm3VzhAsewsF6aropcBmbVfTJWZ8YCBmyCdVEoDMjqeHX7qJMkJBoRzdH6djqjoX14ZanbrPquughH2",
  "key19": "5HAxcZjfnwtkBqav1wN47opjrmPYa3XtFWJTbfmwADenbWbJtptpkvsM777Wr8vFhTPKPJJsca5r3ExvrQXhubjq",
  "key20": "2S7v5HJzvE6qAemCYTNxSeyLBUAJFkfyp4ELrXUGTMeQj5arjtwb2N52XL6gbg973qTYaue4qWswqeuur4jVWEWS",
  "key21": "238Fi66QmNA7SqdA7f2BYZi83z56A4K3khgfyYhi6nobyEGHQmRXS1vUaEMsW5wvn2b9Ua9tyzXJw1tYgYBbmw5s",
  "key22": "21pSSCSbDVWZrAbZpWdHg3TU5DMG9qYch2QBmxSjUifQTdkKtFgPLCJz8v1h9R3wPZxdXrghtPhJtCNCQCvwqRW4",
  "key23": "nhe7Z2ZrP4Wn4wJbs63zywfqypfsxYWWk3GJuWt41nMQDxinK38mt7sm4ggYzNpdSDmjyoSL1vKasfQEt8ruUfJ",
  "key24": "4bqv7uhAJTLyQ1WPSis1uu4qFR5uKvSUM5PLUYKjTUcNspg25vLaWrU6ccbAY3ZQoGmVdLU4TU9Tv9rNHAcrWCqk",
  "key25": "tmk2pvJP1mjZZMKNTriEhsDbubXYcKFMENZ6ehgWfZGApnYqukRwGTeMGH1UuDT4uwuaKKKehfLM937hC8LTZpV",
  "key26": "4BhyT7XWCq8817uj95Y4biTxLqu2nmGgcSKTd2i1K7FqtS4ZaV7234D47cXGxNEi8YbaZhUmiEPVsJapUJKmCyN8",
  "key27": "2tkdc6958QkNJqR8LMkm8VHmsK8KdV6PKHbUQTxDopARNVX8b68D4VWtBU9D7yUvMaJbgCHMsSMmFiwNGyxbyyXf",
  "key28": "3RYthiNiCXw32xRKvfqV5hoy5UdDfwuaq9hYcNBKxc9aAPW5xN2haE4SFyiK8maZmupQ8vNtoSdRokKjHhB2Q6zR",
  "key29": "EN1RTbAZRJ5MFy4vK3dA6VNGymhHb9MXXs8sPVy8S1GYkw81wE443EtWnKpNHg4fgg2iNCd3yPFnhS4DA7UGe2B",
  "key30": "2ipPyqSpgLV6BFNdFJrvFyJrBDYe2xZcTSB1WFZCr3WLNznYXRLaVF8UutH6aSf3oCJDvtJNF5vNtknJYSAvbstY",
  "key31": "5Co6qPvZ5WpC5q4ekKtux2AT69dm1mLMNd3K4XRvyBM6S5GcsKdcvJYPuG5erZ4NUsWT6gxU4Gabm8sPAYxNTWLm",
  "key32": "5D9efyiPrz3AuaR7RfJPktcWAEvUy8CEyX1EFC6uj6onajbwttBz7sJFKXrpGipnLzk1oabNNdEEExS5T5ie5vMX",
  "key33": "5zzgT5WXtpkaW2EbBrJEhDKdbHgid5smzpsPVWzRLJTxPiDHRrgdzzc9YEkLa1Asn5ZdrENuXSwQ1L4McRYbWZ5K",
  "key34": "WaQXTbimKDm5VJdKhamqiZddn6mpruTRXJoF2fLzxji5CF77XCgM4B5UuQhMGAx2m6t43foaHGWftMzHkYTMxCV",
  "key35": "2Ta2XRsSQCPZZYVjznMevdjCSDUyqxj95rzL6KnMQNTExXoaNxitoBudExYHxg8rSxe8prz7T9DwEfrFTRmf7DPm",
  "key36": "32ox54A3WyDZLLtBnSgy6aQqkvy36axWQZsxzRgiyiBTW1ogr5bZR3jRUerJyRMPVXPBXFD5Ye6zgxiWQT3zaZns",
  "key37": "3nTBpAobkshYPnEkt6qi1yPmase6NtnPJnZPvADTvcLgfoGNnS8WvKuZXbkbRWZ4yUssCDjor3NhzXykRJfXovoc",
  "key38": "52dCf6DoZk3yKsyFzDDq3RZWyzh58tb7iF7aFj1aGUwLu36zSRh6JERHsqUUQTD9Z3739kcN7wkEpJ1R34VLrSx",
  "key39": "Dnvdzt29ae9rnMG2bfE8PeEUz23Qs53HhGhpUUa2UPiWJ4Ebtth5nrE7iYrEu6JyrKcNZaL9Nov84KPikjrXxb9",
  "key40": "62tynZPcedrvzs36bodj2N8xVEW5SmoLkyp518cxqgcticTKpt3bshsJFeG9RoEi58WqjjDhLK4fumRjTx5uBJU"
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
