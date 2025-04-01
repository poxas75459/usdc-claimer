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
    "HuUaPHKr9NvD3zd9pBa7oYu3vT5i9WoJNGriAvrMgfKygJjjKZHBxGZ2yX4K6q5GfsdjVzzTCRere9jCEFYW964"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WdRp6HUHsQ6dyow3jsv7ARo5nYeSR7LLRLXTRFXQkeasurLGAwgVn5tppwgngQdcKMVfXsrWkv5tmkrwAi6MCwC",
  "key1": "3PnhK6ysyipXJyGUjqVt9AQVWrVRVMPa2C68bWiCadqrdtVbvMYnHMEzy2hFaeLEYNeg6yxzvC2rMGtzdu7brmHM",
  "key2": "5R323LwiaavYciuNVBvWJaTqQTfetDPeaHFzFoWH7hzjBpFWWmvwc8QHV2VZZWY9i7dXaeY2DwuALKhZTjckwZUX",
  "key3": "4PL2GpEMLtXbjwdaY1njhD9GMUFwn6uksggCg9Bx6aVYhPjid6e8BoEmvBPfGgbez1Bsqc2zZkqtWAff91gRoL47",
  "key4": "46XYyZczf79anH89ECMxPaYV7Z9vyQL8v9VNK8j98CuJMBjWcDAdoTeSe65YECPVV9dPza9DPT67EssCYQfqS6L2",
  "key5": "3ZamNu6aaUCpUydBQzGyEz7RSvq6zgNGhsGYLRNYUEjFYzbQe2YMiuPu7aWAMBbJqzy3diByfCQGCo2msep8KjL7",
  "key6": "kEQ9hr58cAekhGBx1AwqroiR9VBDnGnhEM6ecKsvBXvafk624p8X8iC3rYwFDyc6rG8dPKM8XVcZc6bnH4XCmmb",
  "key7": "99WTMSvwDFuJPpuWwjFqv5Ujgd3P8KMdWtNZaQVNbs9GK3a5kXCigf7PDYk8hAeqNGGAWkhKuxsqkYVUpo5yuZU",
  "key8": "DHgV7FJEQN75iW5KaWqFPkocHM6Ps7h4a2vi5t33bv585VhpD7orRvMLF4udgPVbUvqxsRDLxXZ19JxkowMffHA",
  "key9": "4i1s3fmBakyUrJUMscbQ18bApWDUM6ndRNZos7tQnHjXYUsk3ADwNBcEsYYrbaYcHm4REYgxPCeErbw3tqKkdAPJ",
  "key10": "2YWAcT2VwoJQirzrVXFkUm3NvPZQJuP29kL9DiHkCcZidttA3DpaBsMypAXSwLqfwnwmB7WfRSmFsWfFpWro2AcS",
  "key11": "3cAHzGBkbqcAtddFQGLdisqvw3wq8ULXAwRz1QajaGZGGLS8Gs31ACpPGbSGigQfLxwcBNw5wmRjHM34b7pSqxKj",
  "key12": "tGKszBtqBLxAYpzeCiiZEJMhnDp7CydxehV8WYkudBXdXra7kcYDU4hd7Vk37bwsLpZcw2NJDenLqrj5tcFhGy3",
  "key13": "2wrvoVtNVbkde5HytHMcB3Fy96evJ5mPnxQ3KnmLevNdamG7hqbNPvwYTdqJgCd65cz9G5sgtqTb15gkfTynxf7u",
  "key14": "2qbHz9TsMijkyp74bjJfFS3qCL2fyepMahs3cWVrkg1zNQfNQecnhqPoPamYotbkpZ8LEYJyhFDq8tsHRVA4LVcB",
  "key15": "23avkkfWRAi5zDvcpdFZDFMRTHnD1bDxeU2Jq1qsZwmoNiuck2WQZa1Jhm92XyEPSpmeuo2xhCHdPKuz9KWYYNSe",
  "key16": "3H3JhrWtEqdcFWpaBJ4jZbXrF7VzDVZkxzoDGxBNJC1C92Zy2F5rQMBumD8XvRKmin7cbU57F9CP7L4v6pDMXELa",
  "key17": "4NRZuKGV8bojaictWD3iRhUio1ypt9uZEbd4nMdm4neMk9Y3t3aSayNgZBAiRRSkve14dKKKqULdXnzuRqRg84i4",
  "key18": "5mitQBFgvQgxBTjahzxYuaWJiRmrd3bztwqH4xMVS1AsSgTJS8HRqiZCY9gZcjXYFgNs2ufXr4zWkz5TNR27fvNL",
  "key19": "iiWEPrqaXEk6cpRrEdQwcPCT6GmCU9gz99XEgoUsYYtkMjMp3F7iFRQmZMhEG4kgkjYtzurEomKeFpa5PSXMQJq",
  "key20": "3ybCvCgTAig9ZMJiUSFaEH8QWHPaDfKxrGApkZXKRSbGakAVV6SryHuvwh7w17PSb5xAmjeHiS29q8ky8qWCKwUG",
  "key21": "5YpFKE9xuRde5WtKSEDtBth6LJQSEqHJBGzZjuFzGT9QV5Wao8YCQvXDrqUyNxiWGeHz3tYcRqdrNorhEEoJJm6x",
  "key22": "3SrqM9Nw9ndxmDthHZhvLDztjb3dQLR4diEXHyVNUFjWqE8wT9D8M8gT6vqkt9fRsJu8fSk2hdYEAntDMRof4Jme",
  "key23": "5xho3w2pyp1xMw7ywGXGcrWXn3FC8b2gWiQnvDzp53KS8Fvzojz9dHdQveYtKHuH4CpEu9uRi8cSPEtUP1Tt4Z7A",
  "key24": "5WycLhk8zVqy1WMY3TNa8o9SL2SaSyhaBPS2kmnwYzPNzNQBrHVniqDQBtVJG92iSLnYJ4Z4HdssAusa2jhy7QR3",
  "key25": "47KEuAXCZELpmfi15dRfH8M2HFLPQR74qLUK5SDifhx9D9F2aqFo1efN1jxYgRqZeSttXKk9ogWrPwM8yMkwUaXg",
  "key26": "2LgbPTRRyXjNiztNEdTPheN1UDhjtoa6YW3sTsBQxd3HZeDsuVYxrHYNGLXWMxygoE1ZHUU1vDH1V6M9gt4zYdtb",
  "key27": "5kfKAqP8jdj4TPVhH1jgcPTmGQ9haMPK3moXrSzVHkxPPXfjUzwttJYiFufE6NmN3np7ENTm6mVmnrUwYeDDtTTN",
  "key28": "2sacvhnQ1Jc34mhFnoj55u3bGtVVDRkHh1Jp7madgZQvYDDz9o11hcAAxuN5B4jNfeLGTtdtx695vQZmF8w9hG4M",
  "key29": "24XidvZCzGVtVarvFkTs1WNqhhey9BN8Z97n4yGhUss62TqpexqAxZd5p8Yubuz4U2t6vavMXaKQCB6Hgjc231he",
  "key30": "4fcLbn1zPQemLDE2Tq6gYgeHGwL1VQv4LWU8ivQUia9cJMjcWHVGEN3U7ic9Lhh1CbtQg9a7DxyQob5NsWbXFYW7",
  "key31": "3wNPPibyPLr1GL7GEk3RSjBLMppMDbZ94w5CrGnDZpfkkW9UjrmcTp1ux9kgxekLWoEjd8NbzgDZTUDYMYgrebyu",
  "key32": "3nZkW6Wh9RMx1Yia9xBXoAQY4DFCfxG3bzUEQZ5Y1pwmhWsGed29AeLP7rcSwusAaUwryf2UwEQbnFiYFjt5dp3E",
  "key33": "5mMMRGz4BeBjhu2GoX5Ygk71YKPqvK9PjRLz5ZYeX5ZZk8xxeFRKYBng7wAxR9NZYKPW7sDz7jz2eCQ9qVK1RKaB",
  "key34": "4EaZTjQ7bGtwN8SPrehA5xJpKjC395KQd3FLcNhMa4CPhac6LTGDZBeC6xN2yZs57BBsUGtEnEBiefE7JKmLDq4f"
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
