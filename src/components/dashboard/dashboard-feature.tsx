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
    "4pcnekuJCF24Np9DRRfqxDPmncUyETVpgWzECcCL5poYLzymBtjJeE4dkNaJHS5WaRQcmhGZy6YJCr1ta88jDSnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32DinGf5f6iTZ5c5j1ryVTerCxJqZPs9ZK2HtSVAr2AyiTXUDf1w57wyV2W31haSaKmTc3SH2Nb2mRv9gAiS68NG",
  "key1": "2TNB9mG4oBJqJEkoCxGaMRFMbosh9XBqMUMg8pgAw21RqcatubzwS1BGN4VkAHWGwwcjK2Hxyapo1zrK6zSXuewN",
  "key2": "47RYqTWKhJ8sEne3jEhDqyLP6UwRb2AomZo6DWVXCsfaQ2NvkPA6CKPL6dfzMWNEP5iYdsSLCKCjbQ96zQZ19XyV",
  "key3": "HEC7uK31j5cqVMKyWmLZZG1vQkFK8YDACbm2WTAcek1wS6W5NuzFymTNzeBQuXwRbbiPXTf6DiYzeLTu6bfWr93",
  "key4": "A6VjmwCVkSdQkKEBRhEAQf44AxScMoo5wgnaMfYxXQLBVhn4zn8GMpjPK2R8errLAuBLBUnduYckpmMCgypXvj7",
  "key5": "kgYyVnDmFrEaMbiQXvB9mrXdymR3QA5DJPbui83uC4oh8dxZSZ2GqjVav9ARNshxmtc7DPjo32MxpVz2tNJi3JU",
  "key6": "rBmnJ7p3zDD8tfDbtF11pidepd1R2927eob8eBvhm4eicCe1w1ZijSLjfdhk8SkRM7ggFbtrAkbLhLoKV9kDXEA",
  "key7": "fmHhFrPwDZjnBdM1X4MiTvXrW2y1V7btBVm2PxoSLxXZrfCTBcMBbu47AeAY3zGNZPJLn9Nw7e14cN36oJ9Rya1",
  "key8": "3AE4pWSaFaYqaG3XHj35JgnuKzUtL9fDDrp9bLDhLNJKFAgyssXhfMcKepHLnEyR5U4xyqLCLf6gntV1EQFkrA7",
  "key9": "3oSkrNPiCH9AZ5REPZNMLfecFFWAowJZF25PGrVqicP2xydEwWx5CU9y4edRe82rLH4Co6bmg892wybrtLVL5Tfi",
  "key10": "3bNVfsaRHvJ1aQucZm28qNLDs9j8xcFxmLakwvEsgNw2nxU7tit186MeTVq6d6cmhmLZVXSZZqzx2cW8gY7tLSLv",
  "key11": "EGeDwx2Vjr92jYTvqTeaKegy5VzY8AyAxsJKYg5tyMc3kNa3HXp4pJ8BX3zmxfVNNZ9KurVpPiLoym2UcNZ3raG",
  "key12": "6YQAhBimBYYhpQ3aGy8ZsyWk8tmjPU8PQh1DNJ6WqCHBT9Cn4mSrAjASf8vehRHgoQrzwxtoW8yhZhSa1iV1wMf",
  "key13": "1TMdNhVK7HGV8wAVb25Z6tjeqjUeQeevw1KqB4KHFF8RbGCMUdNESsKqevHwbo3mVvvPMqLQMyiEMvvqSMy38fz",
  "key14": "Kk23NmT3vRbmnRVHJ7JogXWr6tb1aqdzhh6rMVtdJG7ouPFUBvSAGCfMcdDYCCR96JLn81tTgX7d2HwSTbDXXDV",
  "key15": "3n35RhbYcN9Z3cff9tDhUJFqfU8FUa3GE5z4dq8FqcUf5n7Ad8c22C2x7wH9sDEWfYvB7uxjMaEipwhTPX9ashvS",
  "key16": "2TRvnYhToaadvZPc8EPpgb8EFumAYSAnDyRgbZCVfRVrm37NXB6VZ5LB7mGxkPoTFNMPRMxYBJeu4cjGjuMttsQT",
  "key17": "2HC26W2Psq3nWmiwWsuQg6CjyeRaNfQhK3ViQFHx9itgerK7UC3fNaikLbK4DQvjiQtyjPCYkAtTWdhUtqKrqFaz",
  "key18": "4MbTgYqKjqmtecsvBoiX7jRrW8DhDo2VE9SzYMNz3ZSQBBxV4BFTqSzPg7BsGx43Qkg9FkmfHaUVv8v343TwfbLe",
  "key19": "5hT8srkoDA4FvgDe6U1xDr6KCXztAMEYwLsfhYqquMzBTuLRAoLCXoNY789Aa8Ehdj7aCQ9qAYZaVxap7VJCFVMf",
  "key20": "2CXXmpF1uHmQTJ9kHKwwGBi3ypKuT85GjxG7AcjF8uEyLV1Hn4taFwqy3h8ir1EHcsUa5G5VnCJrrrFfk2EpT9p3",
  "key21": "4GtXNEpybbunFjAWkYDYd6SLQJhkJTdfstoyg98BD8RTfi6pqceneJDZ9VgLN8nHj79vTvpPy6wkcNLSEzrS6wJn",
  "key22": "4Bo2L16oUDxvqmEsr8Z4LrVgF2QrGybTeqpUsYmu1BPMbonGPg3mU3G5JWMCqYVN62ZjtYxHK9rxK3qp6UnxTJ5M",
  "key23": "21hpKXnr85AXdHH8nDGLCp6u5a4fsXx4LG5jC4qpinVQZNQ2f3eb7e5tzr79xK25LxJiz8VKTZx1DqcobiXFHLQL",
  "key24": "4nn72TaZUQh5bP8yTg935sdRYQE6S8NVAZvgWtd4SVgSMFxqVaasbCPZ4xAAUPRZDZZrW5mVREPptCGMrzYUDyXa"
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
