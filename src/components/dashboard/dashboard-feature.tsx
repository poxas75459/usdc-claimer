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
    "4WwJyprnfJXrqSjNEapg9VhYeZwbhYPpKyLAjXNByvaPaXUFD5sXnu5ATm2sKcCRFekM6ourbQCN6v1S6tS8DogZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RvmTEY2S7qSBFK5tDKL8osBZyieSAQ94BQ95BErHu4WXxPv93QNiU6jX6uwLvUGBfUdkn9EGXJFgZcbdpMY4RhW",
  "key1": "5vzD6FsDFNeaScgfV9vQmZg9GuT4QTZoTYiNBWz1JdXQBWKkEurmpj7BThkw217ZxLaD1msd5214JRRDed3wCNqB",
  "key2": "2xthdBUZM8myCy29EivZtP1nzBPJVZZivsMLh23G4cANerBSNpPYRRaV4PWHxTzgd9uLa5eZLfCoGt9zpjukNQH3",
  "key3": "4YDcLssZVT4exUwj4BhTzqxdi7XFC7kQgEkJkBzXB2cnutZoMqhUZMfagttG9LPkocL1tKPz5jqq6SQwUiEVn9Hr",
  "key4": "3JBE6qVMTeNcu38TPgcvVtomve8uqeJVjp6V18otAKc8asq4rWuYd66MzH4U9NLzvvHe8qnJhpukdYuAU66wnzhR",
  "key5": "2eQajE4kCvHtxjh2fu4EKL2iQGTr2X7SyNLY6HiQkqe5K3qWSj3vjuKQBUNqcdgUXQyoSBDLnNshzhok6jA9MhfC",
  "key6": "42yLKK7N2qPcrqG6tcVqjydaH1gEQZgYD9jQUbAiE15yGRSroRT7Vz9XVzAHAC341es4qwHt3GDkQn4QGhKkMFKR",
  "key7": "4p8cPAjnKas7Bmz6cY8qF67NPjrAhewRCZY7DpVqygANd6hRfTB4NPY7GVUEqx5dKUz4HMJf8G5cuqWxkK2s8XzV",
  "key8": "5iXg5g1J5wgV8ePZfWhW64PJoPjzBV5qg16Vpjm1ExE3G8YPaWXC9GP1fmv29fquGqRQFiB62AEEg2mg38McgVnw",
  "key9": "3pgHDFZuVpfcfqK7aZyyszTkNJciQwyzD6rxXLVQxBiGLwES6aRwZCAiKWGa9Er6bnhdcRRcbTiytTUxEQDMUFFA",
  "key10": "459noMXJCruv6ZPT999aLSUeRRFvrpHuXvmaJqGbz3s1xrYQb96FbEjKtJR1QHJSr6SrhjU6jJgjQVNXeFB1zjha",
  "key11": "5ax2achCKtkmc7wUVAjnU7g5rbJNVrQPpboY9tNkEjdvXm9h38j1VqUXTEBBhQv3DchnJUdReVvRDuV237uy6uie",
  "key12": "3xBKFmF6mSjdjshDrYQ2VZJ4GyogTaAsQv6Uayk3kzkKP1Q4uouTDpBTNaRiiAjE38QpsmYJQfD5qcpsBmUXPPbQ",
  "key13": "5o9LxKeV7e2ore1ySP8TFL5i9TTSvgLfhyqbBreXWJPwZyZuFtvf7k19D9GbKwVbGRoWxd64s6Ef8D1KdLUk5h18",
  "key14": "2BuiVHDTtodSe9YyHxUPEHLX2qWWt6nyda8kShNi4dUKqUZU4Xk9GjuPwpS97ZES3LbRERv9X5xVnv2jBzJGMcYG",
  "key15": "4JS6UJwV7gTrT1jzgEDgvyejL29cvrRx7jSYyoDLS7DKYH8jA5EvAMSA3yAgfhkbCE5qnzXqS3pZRWYVvChmNWj6",
  "key16": "55JsGzUpDizaXmF14ARK5urJkVc8oRnnr34mcUwyBED2BeAGBLwxb7gtfh955iPm466Cz74UuQ2EAdWugaRcZusv",
  "key17": "3vHRoZhSKnFa8fEFB3xzwm37fpvqBSScCg1d1A9FmvpUg7tLmPPCxCEaCkyHE2TUdmYupMkbwJj8Aau9nD5WpeHk",
  "key18": "7ginLhtXSHoKnbFScLnNzBXB942K3s5NkSK6eHyCV4j2L8Wy8zA4Gn2XmByUrScC9tGVoRBijo4hvGbNBjrfesT",
  "key19": "66sNJaFoVt55YZww4CU5AcCe7EaMrqBRdbr8XRACcVhdDLKzGYbygMZxLp7VvJtapwBX8Wg3Xmt8urymhJSU6C8y",
  "key20": "CgyfNbtyopc9UGD62h3GEbVYNCafKK3xTXZTDjZv7SfxEFfqi3QRt67D9DRwHdufYyXhVJyvo6uTTGrPB8ZDgbs",
  "key21": "637ufUrR1XXegviPZtutinHyhRVTkFTb2A6igTyG3edhuT9qwmjrQwPBgGZoL5xBz7FheZKKGy7CXEwtDzQjPNhd",
  "key22": "2oCftJMpbXwG6WWDw2N8wyfKAqCNWtze1Sb38p6u6mqvfGPyzPMhgbWgpGf6Xdk6eJkiQ8nXZTp9qxTmQfGxSWCQ",
  "key23": "2Lybhwebx4DbfrHTRRyngpubZEdu69N7w45Tqgr44Py8sdFFZF7TNdY4sJd3TyE13k2d6b9Gz2Ce9VsYQoKyVdJK",
  "key24": "4vsDL8Nez7u9x4TTnWWkUdNRSVyaj6ZZE7VHdruZ8A93zjRSNtoExQBj9Ak5vhLbyTAnadFpMBYmTDcF6heFfoGb",
  "key25": "37gQ3KtwaHu9tUFTDmVaDJZw9q8HBXYsUGkHBvUfCQ1zKhQpvwBFCaaR57Z9h8VYPZRNNzovAjbNCrWqS9LxCeWs",
  "key26": "2XoeT8g8jFY4zPoP78sdF1CorVqBnh9gK5ncaReDTDc7X39LUQ4dMtNCBCGBzLyWooFzER759ye1rurVpuFnEBCG",
  "key27": "4jXkxFe3ziSBHjJeWBLumTp7HeFadifeAi2dmHtxWPudL1vDEN1sVZieeBovnbvWE1XFudWkmsU8AaNe3eaEVznZ",
  "key28": "4z4YHfzBfFqcbAe3UcthSKZ8hpcKhBWemtMC5vabZa5SLsochWQzmtHeH9CYon5Kd6LhfKbGCmwJERBVKxebzbUZ",
  "key29": "2Y4f44eGH4LZJDRASMs4HtCzYARLGBYY4ssseMJNunf2hmUUGPDt5MX2HpfABkoJa8amZN2gdu2SfZAPEdURKs1g",
  "key30": "3zqAtWsm9wvzzD4DSafSpggF9MSNGWHKAALiWTPvEA58V6iE46XJXfK89ZXpmNvi2yDMrVR6S8e5Y4SpDQycX9vv",
  "key31": "5jc4tXU2CpMBBd14muo8NfUwAJtvibouNohThbdGt9FeEvYaKiYhqnGsM9eVx3X3dG7WfdDrqse1KyPAXTdainWF"
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
