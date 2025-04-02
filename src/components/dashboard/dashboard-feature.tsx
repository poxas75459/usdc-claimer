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
    "2BGUdeNzfxniJEB37thnn117h1amsfxd9dkuns8ESbhdHJ62tXdu3FQKoNvzMC5pJWWkjn4nCweStxYAswcedJQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NayuLYWVntqCs92Y93DjzpYHtw9nAdrJ7NBKKZXyzCJZ6NWpKBZKxA3FFmJRBrPKa4APaV5AQSXUE1HJP67XYq2",
  "key1": "55QZrsTvwV2ecUP9UJZBouWXxhrVB5vkRNGoNKmykh5Vte7zCXzSf7jnqByS62XSMfPn89mfJrgHEtmt5yfKPPEj",
  "key2": "N9zncGX6ybmRm6tYhWbsJAdx4J8jM7DQZ2g8yZv2irwjLpW83XXSwQ2Mg9YijiZzWKzQupoEURS2pw6BksqHomS",
  "key3": "5CCKa5xN3FWkhDCwwJvGLQKy94VGVKP9vEfRGEpyE3vXaB97DGGTXaF5HDshhmXUArTf6AaGdqocVWKeiwMk93jx",
  "key4": "3qW2bUFafFC6n6gyT6QtuFZLgbFcM7sA6oGSmamwvgrXWMsVsgw3USSzsotKVVD2QRA3ch1ztirqoJup4YLcaNJP",
  "key5": "5nUr42nHPFe5apFdGVjR6e7Bq5fJmo8s5JdiztANBZ5HJties4xgXXJVUpXEoCBHV48HAxo8Z9cLWGLGqVHK6oD3",
  "key6": "3zJPCmqH9Ak745xBt7m6dBmZb9xTcMUFixyLAMqWDPkgekgEayDe9Ndfho5ZJ4cWjDSerkeGbLWsusqurXPSZnYv",
  "key7": "5MsHcDC5gJm4LvP9Ng1B8Cuiyx9aveq9oMeVx5mhbNabi1SNPAPunPeFL1VbQNa4m23hnBz65DLq1HmtWRLBBrtN",
  "key8": "wWKmaVEaWevmb9h44CnDo3qnXiXQbkqrU1dFuXD6tvx3CzFQQnCGWWPVoKod13zMpounEjRZ6KfGHXoovyRmv9V",
  "key9": "32baXRZ7vphPnQBTc8ZfLPZcq6qptnVXJz7MDrnNn43ZpJCoHdPpsSrrwDPukNomtcHbV9ZvQ1NkZ8NQBpzuWtwy",
  "key10": "45ykih6w4dSHFzFXA6XCUTHPF8VAU6LksLSzDxwVwS8Kf69cqBgh7GZEUVYjjCTjAGDzAxJQiQ3enFVWVGeus76w",
  "key11": "2fCFMAkxqZfknriaNq5Y4QSmSrbe48kPmec4QQKNBjUjxS3k4VtbhNLDeuiburtytmk4Wiv5v5xdGrkThrFwaaG8",
  "key12": "HkNLtDuTT1u6eSByVdwAbR49CcQarMijvg3kdezMY2DHU8JyN5cRsphUYeeNrGojM6sMpRkU6wUSRvyQ8ZiLzHu",
  "key13": "5pozoriGZGTqoAcPjPPD2nWL1M4ceMb7BonLPRY1PA6cJAiBnxS4atXdtqaGwhR4vHh6v7VycD3xdG9CXizBATsY",
  "key14": "37xu24zgpUx7iJGAeyzvbqPvo6RpV5dFKGfSG6wtBNzD4G1WuGkHAGQyowdEh2SKyiMT4KzyyKWpxrioJiqRKAT3",
  "key15": "5RR7CiCUsCSfBPM8M43wubiyJh5QGNg5QCt4Pt5fQRfuhZsR3JQpSRrBB3boZEbJfW6GbJNRtuwPt83XoSY6QCGN",
  "key16": "ZbnqmDp95GKSntX5CwVLHBpJ93qzwViYbkYPpz1APA1jftj4oFLskMK1AEShYdLznVw3BwygbjPes7p4hpSCgNr",
  "key17": "2xk2Xo2hb7mTMn9rDfLp2cGViTyaNwnpnxd3CtjdU9CsRFMaPKKUoqVFfrHuW9X5nJVRprnywfhRQRQoNfgwoLYo",
  "key18": "62w8f1QCLTEabuVgq4uEz8QDpt24fkV7wKjYxtk8LX9rsk68sAaQcnsvcF4s7BJeh7AuMgCNgDN7J2fpbQtftzUZ",
  "key19": "2Ubg7c9JwXwv54bsnQ9nQipxgtkcbLEfpKWBTHo51odNfdrj6Ao8L8EfSnuZdRUgmTWwzH75AZhqCJd1FrsF7NQs",
  "key20": "fU18HgT5ys4sJRxCar4XVGGcaSMRp7czhEcyCZeQCmGkvm94tt53BDcgqtr1L58HAhaT72Tad5DmxKTHKZniu9T",
  "key21": "eQ2w9aVvvSD1tDxBtXPJHepZRd6Xpq5uyj8SkCYFRSmLYpKa5LMNHDy9vdp3uG1FAiR8vEYBDhzngtR681iYASC",
  "key22": "isqn5tCyRk3YVcCKmPyq3R1m4osCqjqzs8g3MKkKk3rPVBiWN1eGkwP85Vr87GqDGMgqHLKdrPa84BguH2KyJWF",
  "key23": "3HtLiN8hJp3bjotSUzARPSTQWtY5rk356sB3i3r4YsgWpN9vY538dSSW6oWRZRgBngU7r9EjWC9yGoRAHV3BwKdf",
  "key24": "4WbZhCGQbm2z1YzdPyybtLgKWsH5wpUTfChWw6GbgccQE3u5UkPwXVHhFVMP6QTuNDNdEVhmcwWuPXJyirAoUdeZ"
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
