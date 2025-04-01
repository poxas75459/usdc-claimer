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
    "4Lv27xnmiUkaJ1guGXPSbwethJPueArohdEGPwbMERLMbN9LbGAoTmsJQyvGpgf3oi3G73b18DwGQyqPZX5mAZS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mmktx6TdBjD1BX9yC8jvHKEtiNBUyE7o2P7vcWDGNp8iYUyKndLpzKsKqEHk8qsGLTf8xVMN5zAxvn3n9X4iC38",
  "key1": "Dyvy93sEha9EUWoMgDSK543NdqPC9usNrKxHjt4787RuEriYLoaoyUcdaQuzWrRVVUfcFRPrCNqar3C5kSaRJED",
  "key2": "39CfKjFEhvJacCy3Pu4jXyurh6xT5Jcki8JVFA1891rCfAWisNBemoUXY6eh7igLJgsZJgbuYSU6d6c7bycCmaUj",
  "key3": "5HaYZFZuLiQKuDEWStqmw7AxE4cnaGwi7UtYruYFXcizRJwuFFhJHmDVwFzW2hfEAksajhGMVvn4iotfxW7wAgLU",
  "key4": "2S4ZTy1oihA9buj1CbcmuGevyJyFvrcSB45MrJKpxGjnrdqDXZNggjJy3YUvoJZdGJDEsayZQnUrzfQkicL71zv2",
  "key5": "5YS6zQyWe8FUxG7iViYAYz46E7j865DVm3qj2r9rZ8Sqt1XvhLP2d8E9PgpRWybSjXS8o29kdkj7AkwgxnQcJLjx",
  "key6": "2pjb6P4KDUqB6i4FvCHxBADFpgxzEHZng65AQASMRguJhCWyhQ7Byb1ZQDGwoZjScBguQCTy2pYsNvAv49HzE9PS",
  "key7": "2w8YGeqJqQ4dR2mbZNz9yjWe2nKr5ui7VRqxGfQM8Kd9a2V8DircXUHpbNJFcD1qbWaK2sk4rJhAb9VMvLuXgpQn",
  "key8": "Mn5fE7go4Jt9Dbw4zJ9s8aUPY5h8S2Gfk16ALaywD6jFr1eQpUUyaq2AQZjJRxhhUqaQ6NcvGfesaKRjuktvJrA",
  "key9": "4UrY9gaBFJYjXwZbs3hiK9g8kq57s8gZv87DqbENeeFc6s2u3mLfpbyZFyNeCvkEF3P52vPVFMxzRV1jaFAphvtb",
  "key10": "4QiEzTBZMCaCRj7JwBQRiBLgPsZWNPiiiBhrXbjSXrnCMT7d3yn2DLSwwMbz2fp96DH98F9mbNCFWeJisPhwotNZ",
  "key11": "4ApLjxpxjTzjJ4aUSCBUVhHFDWdPTKzKXyBupe848MDY7rjq3PaJZ9FVLZG2zzqh41zYATWyHVdsY3TipJdfRXi2",
  "key12": "399XLinDnJyg9wHYenAMYyXaEKwENj1ZgoXQDxRwbqeBVGoK7MjAcQYU8H522rWPMG4tMb1Ay9xWhCwQJmFqj51K",
  "key13": "4DJ4PpAdCngQ3jcpowyr3oEJp2C7A9CfLtmcNC3JcAtY4HkRTudc46br1pBiQfFC9AFRLa11dsKiBNxKgciRNDEZ",
  "key14": "2GcewpvC71ry6cRgEVZcNzcJ2QduSNuoxGZRdv4x6WjcPag5epXc1Yd6hoiJuLom3xagnoaiYcbKMV7YvKFvpq16",
  "key15": "4jAxL5r6pyJfRdNuJTv7sLG5KzgYKM5rhjeg6ff2mqGgAETjHDFy8kBggtHnvUVDkcowdRz8foEnT3ury3sUoyh2",
  "key16": "5qwzPeSEqnNmfWULK1bci4eU3UrxJ7zwexo5tqZHAwwKNw9tPkoPNNniwrFMZPSve67LYjmugfA2G8keURCLWSFE",
  "key17": "v242SaENTkGSxtWfV3jkyPD7YFaHbZp9VHc2Pem9pSZ4FszfVBdDqpLAMCYafBS1SKHXgQ6hM5jzoWijfwdVXq2",
  "key18": "3naPL267jpt441r7wqorevQao3R1K6vHRjW9PtkstbrXkWHWm2fiExPrKqEDKS1unqU3BSpBHgthn5gYN7Hos4sr",
  "key19": "3xTh4GcZXBohZ8cJ4AWqX6C5UxZMc9JAv2U7DKQ1UkrysW2vuWuizP7ywutubwPxXe9j8YyruviRMVSFhhFEXjAh",
  "key20": "3W8EpJU7JoWfVoQAVosrz89yMkuZakqFMEbrzGUoqBJyLrkMdtXEzJ9Nx4oSJdjpW9kbgzDfW7fmAtbuqLDcvMdq",
  "key21": "3PgFfqNT4jkQXdLqXZuCzwc4gZWMx2z5JcUWCcdHrAZFC24kX8eFvgnrFusfKC3nMpJ4KpC299gpMK6GBR4BDPxV",
  "key22": "4Nfbjz4vAUDQdKXTcXyc8fobZJjprviZtDsgirkFdUvgVrdn78X2SHeHuyVGqMZmZQZKyddqyutpADJHSyWELhhf",
  "key23": "4KBEFTomrLYjk17CsSXFzzsr5nuW8csZmtftxkycLym11ZAirvoNP8vwhWM6jhQNhf6yvBeNQo6FuLoD9jk6bcGB",
  "key24": "4jMRweK73nNKfF3f2c1Av43x4zLwwaucfFjbnE245KGXiJ39tURfTyGwxZBDfBsoLWVqVYnh4gjwZ5oxaGgNgeZ4",
  "key25": "83ENvi9zv2XVands7bwKdCH8QYgxuarXigGnWKxQfbSDe3UQ8Nam4uxHsqZLFcQ55BTgLtiuJvFGTe9TBAu942s",
  "key26": "3UfGDLW1f9rBHyWYV1cwbSVeTE2RLhUys6EnFuWhWVWJg9tdR6ELUjtBB8QNFn7E9Hb1JVzsPoR61xcAMP8ZYW9M",
  "key27": "4GQVgatwYCE82XeCcXZmafBxgQs4kK6ztTYRVuExokfEmSf2hzJefmVUQBDjUc8qwxSXKvDXsz67FYWKxsN1Ng6k",
  "key28": "2PWUjoK2pDybBsDvhQBEqWAG8tQJcxWwsgHnUui6MvcPJH63wN7D8ai3o8yxNiqUvHrBvuPTGRGovKWDFatBTShU",
  "key29": "4vQ2M99YTzz1o7CHBM79hkcUsZbhyLoUx2guM5WRVmRq8yKs3kDedk5pmRr5JTAcsMVvETRgZ1kKmAdSpKS6ngJD",
  "key30": "4CSnt2ULrzXRi7weSScm21JVrimF3dJHMWpKfhk6UwYGepvn8UwCvNgkn1TB3g9uiQGmRfhY1CdoVM5Z4WuXQcfq",
  "key31": "5fRQtL1ujkjryfDkyXiEMTkJJsaDPYac7S4wEqgr9Jvq5QRfJkdQWKTNhEmMCxqPRGqykWeF7Ayypu48TxFvnRW4",
  "key32": "x9kz8munKsfUyjHvtGQ5HZ3WkeSrhLCHyGXjCVcUwRuRunFCzbQnXgWpn4DYr1w4mdFMyzH8hdcKHr49Ks8oj1h",
  "key33": "twmafydY1AzL44CnHDYPko9CbxLGoWp9nQ3y6KiV2hTK94ZePx5dcY6roirmpxYvQwg3UR4uY4RcrHt6ugKfoaX"
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
