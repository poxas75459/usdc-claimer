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
    "532pSC7R3SgqkurdVkWsU1EEyQVSmBvbsBs2vUGX4EDFsGPoTGWtDMN26LEHfkNUUVBhepDBfKi4LhpUMMNU62rR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mDmh57DbvpXU27F4FmbFZyfKzgrRnMHpqMdafHsW8BnKorr8ohJshgrFTUQtk6Qmqo8DrHaUPZETnaQjpNdRois",
  "key1": "3dQ7HWKTAHSpDvfUJSRK9cQNvZw9PtqSiUr4ZfgWqRAGVUPknb3euZAS5nLAr5njbvLggLJvFWfkiPcHQcCrZf5X",
  "key2": "2RT469m1gAfVAUP94aaauYPFJQ9ibHH4SGbFk9GdgnGd5JnXKFkc7cSt5cT4NVHWkR5YMnhGqy3TU9THqGhtRz7D",
  "key3": "3a3fqRyy8iy24y2uj9LwYemv6KX4e4ow3eS8itpigSh7EoXj4Rh2bWjQ8KLJmzpAxbm5zxR7BLF3hw8MrXHe9pvN",
  "key4": "41XLx6h2HXAWGL148Apf9UH1YB46Xg9KyE4dUm6ta819iZh5r1DA8UJHJV3TcgBwiNUSvyrTULWwuUDvM8tA1HAu",
  "key5": "2onP6LiwKNShGaFDRLNkdPcv4R5T32cUKwwMx1qHx3v1hFTFLPi46MiXwnoByvDENz9SG99FqUeFum6X4GTujCGv",
  "key6": "3473V2brFsHNshEguTtLNRxeJL4BfkniSHSp98NaavaHKPUi2qHrwxEmDUBb1rs3S8q3zRnbveNB5kkGYqFQN3Dd",
  "key7": "4HYnvoX8CPFwzSqbvL58r1XUXQayDNgpSLmMqtW9w5B6CmhaFaV9Wm6PjBTHtidXut4ycZ2DAgJ6Bc93Ks2AViM6",
  "key8": "2stAS2qenRRvYGWJpcgQQHV8Q1PxQmdoE1ybJXjDuqZFXmMCkv3Wz3EGjaVUPzTBPjb6nipRus2LUtbAnQVkhaRf",
  "key9": "5Kn9EdLqq6172KRD53qYxosiXRYABLcbXxGFuWv916xXK4ipcxs9CmqiDaigy1Sj228eAQ73Te223EbpGcAYW3Mr",
  "key10": "5aZ9GXtDNScjizTHCfujML9o1crJ8ZReVUd9yxJsB8MG8yMPZL3fAJniyjdSzJ7ffqsm2WJZ3QhkT4rtQvySSJJs",
  "key11": "3MCsVJWWN85csChdnaXJfp2Q7PbeFwjBYcaGVMQxggrGZ6MTbdKUwUXDzxxVqwqD4RzBxK3UjtxKgcdGAw2fkPRT",
  "key12": "4yRQq9ptvkmVqKhAyG2PpgQCGkC68QnFx9DZrw1zDbjPq63nUsz1zgmaFwP3CYr61zqWb8sBMCJtUdA2PzkAu8Pb",
  "key13": "2rd8oeRDAnw8KCtvhtF5eSUxk8DsW2XXPSsgGesQZB3j4BpXPMU8SuWh2yif8Tv5qfdyzbC6bQgYhiUxs4oiLgVR",
  "key14": "5vMCoaJexTM6gZatSz1AvRbfWuRE9Jpn9mDFKNudcWmavNdFjyiMc1VzQJ8wbfdfX8RAtFrje7ijrArtTJYUmGhj",
  "key15": "2YP5icPNJ7hnpZCoi1rNYtED3M6EdK2d5xFWGskEKdsXpyBm9u3MFewKt86mT1Sq7euz32cCqJRGoNJkARsSN6js",
  "key16": "5S8WUBUfZgskb845oXL5q1Y3VgXF9zkjBqwTBm5nZar8u1SiL4Tk5QaBho7vcfZNRvS4atUS9rvGTEmWhxqverZS",
  "key17": "4T1hgCuygW16XaNPFBURMHSKjPizTRENpXJvPsuG4tVQgNrzQuWhoQW2MUqqaLMPecnFgN3Uj5aARdbwpwmGd8sb",
  "key18": "5f9hWoXcSEH1sdXad58f28dWJTqkHwUrUrEtnX24DBgWH27MgMVi8b7qoUR8N9DQXXDUgcTJNCB3CvbvpBgSWxQz",
  "key19": "2S3mrBu1vmqoVE18McnQD8spf5THhpv6Nd3jbbyynxDZfT37X5wbCb2hwF2BCG9hXXiVA6GF6734QYzcu9pAzUxk",
  "key20": "4b39jjZRFUxPVk1iHZE5A2ZsMNwsyxVhPEud1Jz7XjLSuSv7mRP52VxgRt2sUir9iHqSL8oLsZJ9RpkwqQdHpBFQ",
  "key21": "5mABZ89q3quUAPvzYgcwdjpMhGTGWCD6o4etaT412wstq456kouW777iP3EWEwCYGHG5tXUUvEtWPvbvprbBEPRV",
  "key22": "3uhKK7ofexd6Aioe5gjhPrFF4ieNqJcMHuJof4cDBXDhQiENL2QaCRDD8YprHAJaLRcHAjNBi6wWiKTvA959eFDb",
  "key23": "33FKqc6nQjrFxyvAk5c2vtukwLLDSsgABHF6jiDf2UCQz1jY5wcPm8gGc2G5XBkuHipbdWn5qPeXLnQyhhVu3Hqy",
  "key24": "sQoBQVJerNXRjc4WPeiXQq9czYRheAKumhXEdW4B6cG7cK2wX5PJEZdg6xqyArcymCdoZJbGsTYqcg7RaBDgcqw",
  "key25": "3Z5NnfqpkcYgCm7pCPLamSsnxchHKruiDsdaEURLiN7ngvvKPZGVULm8KzSWDFhFiKmLymxRMAAjvNnBCBtaHRR",
  "key26": "2G7RAgNWmKkc4nWt6s2GDk9sPd6MadJnrT9qvfxo95Gk75sFJy1LsSg7pS7zQvu5jkkScKbxQd4ZEBL2P3XLTKDQ",
  "key27": "gj7QvXXRmPYiwkwku3FxKa9Tib4o2ZFVbVEFMe6vwNuRv7P7sJAbQF8KUBKEXuFsJPj4UF2yYyqK44kJ1N7RCiv",
  "key28": "58caexQFQF1GQrjDtLH5qaRwPuKjkMBfG3T35EzDxfAmkGBMDUk71qxxNYySSnwcdTn6DKjE7GM6PDHvhAtvWhk5",
  "key29": "2BtLmvpVLENdA5G8EMikvKHCSHYG3gsHeywj9EQijKspjjkBwj6P7ooAZX3qEAefL3KE65cVpiuFutuSjqFP5uvi",
  "key30": "g1QVSUBZKGXsgSWR1TcuDyCCKDmzFzpAKFpLWBUfsNAMsgML1jbgX9cdTPhdn5V9N5yvWtssF7UXMA5Jn6Fxw2A",
  "key31": "2FXw8gp8K2d1RqFHxdsdEpLw1K61rt3t99SWSiCqGFbXw37qCECqH8cmRwyeHD6NK9146M2NzDCvWvszFaBoseNT",
  "key32": "2Nno4jDGNQFk9fZyhra6xRT9ug2mjNcNTi8RdANxisYF5bMaV17GHMc9vd92X8kUShSJk8GjwN7DNRHmyay7nmXB",
  "key33": "3GWTVXkbtM6QJMDnh6p8ktFAAMpwbaPdjwPgog7hUQquwgG1CkrvxwSSACmsBGRGTwWgBY3PJvMSeG5VbkvExqkC",
  "key34": "tYj3Tf4NhJ9jCwCik3FwJ9bauKmvfGKJ5MmjTsVRRFxHGXGowrTzB3KCrBQ6U7drtv8fRTSL9ArR5V2sPsGc32g",
  "key35": "37hBtvbZixbt9rex1WZXepevpkyi3H5YQ69hJrmRzMGhM7hbmTjvDwiESHcMg2k3RbdLppJPUA3a6gPb8SysYFQE",
  "key36": "2fwK4fpCycgwAjqGFtTxDGzChrvgoFYuQd83n98FXW6SZBCsxYv6dDEV26oh2QAmKDhhd5qMGUoe7q26iuz59cQU",
  "key37": "6ENgAxDf7dbq15P1xCm9fkP4onYkGdvzdmvjWxR2Af2obBC4oWs9wcaJNSQpR338uoL5scFFpXEvSHyHEhm6jZ2",
  "key38": "SRVxjoL9NDEFqme5EWou973vESndehdF6HNkNwt5frc1hLkz5j5iwwN9Gs8Z9bLPkptH6F7ZXNMDVwPkkSkWEze",
  "key39": "29wyQe17WNSrdUcrbbfhiQHyDchVo99P7ToPuMkabiA8mfAVGQAowbirxHSVHyLXaSJ6tAhbpaapvDaovhissLGJ",
  "key40": "2TaaFvGXx82c2tts938H6xTrG9BYRGbVubxCRB5opqKm6KeHJNgkLQ8hP6PkiFe3fpmv2oELRKKhAWBNKNSrTozN",
  "key41": "65b5pniESvh6EPhQ7k8jh8SjLLQ3AHZx1GanVGg2Afy3y2aFRK1qdB3mgreq2jNkQiw8cHBJN8iiVqPXbF4TrbZw",
  "key42": "mkMRLTzptAuWYLVkidRzv2uVC7E5DDx5HVUfF6Q46cHmn5x42uyQAjupzEwvwo7aQKgFLmViJDrEb22BoL39zyc",
  "key43": "5bpBhxvMHQvwuy7LBtSSU2iNqCvsNqUo8ee9XChAQrEFGcXiWdDS32Eh4gYdn6UAJQCwenKjJRdLv9UGtrEQpV62",
  "key44": "3nXmWLWqeyfz9MyDPC4hicH3afy6W2xY6T6rVnLBB6yT2iQ1SQCFXUfkUzEMBdPLAqDBWKcHkfjVZjjwgRwBGZQ2"
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
