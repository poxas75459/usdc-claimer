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
    "4jMP2w9wgiEyMGWcNV9nm7TyX5Qu74fHBFQn13WTvgoqqp3nTBcjZDkhuCndLJNhWLQwF4yPW3BbuS4pypZtgwoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eZj7Ww7j6Wfsbx1VDUaR8XTuiqfu84VxM4ZakSuKSU4UTQAzVQqJMYHagaY1NpXJb4j5c2CnDZMKhp9FEf6G3za",
  "key1": "5vxRDTYRb5YpYRCyWN6HCkLX5J4rL35KSiz4N5r5PjGyr73dp2EXeX6HzKJMkAtd6fb99NSpvgeeSLtDjJ5Lk45m",
  "key2": "3sB3evhHV2ikDvK9xZsJ5wDjMqK5VzdXE5TZQd8jCjTXTpKkXSnME5kbxfkANkVnd1n1Q8CKWTZ1KjZpYEdNKCBx",
  "key3": "3um8J7sb5zFZvfqZP3NXiZ6DHzv7ayGd2Y74VTTGCMVUoh8RM6n2gdwMWaGj7Eff53hZbk5UXpsfmmHSL6gxCHE6",
  "key4": "3majaAJLN7dC2GV2VQ2STeEoqhBGLKWWgNsbjWTh1UJ7dVx9guVcVqojS2GKwFhVeKD7JLzxXpX4G3e2T5dXMyMz",
  "key5": "3YqLxdMharKK2cSbaHYpaxczFfVYmFHBUHP2dMa2gg8noH8mWRYSJXENbyb96np21CqrrJAMCGrxs9J5jCSH3iBe",
  "key6": "5tGUgiDFzTPEmDUtt4JCh7J2KQE11b5dCK8AMCTsSxZNuN8tTKeDEUZk9aLQzBi1uzNEVF9xVh5YPn15YHnhbhKG",
  "key7": "5fTsWvjSk5YMDia6gSG8YzVtZtRo49Tst1PjhLUBoPYb2fGKoWJfNUB9VbZxSzxMQsziUNrwY5r4YYbfwmsVUT1a",
  "key8": "4M8mWU4UFKcwfqigzEYWRJ8ct9tqVS2FrMbKASiK2W1kCig1J9gF5wdzRHNddy4dbajvbf3MFA46jtycadQNtCc4",
  "key9": "PGJfUeqrQHLaP5sxDmENjPbyPMnV4ZQqqvQf8yPMZYWEgFNEo7awPYL7F29zhDhEwUj5LJriidCGr4CdXp3Uphz",
  "key10": "2A38FuQm8DuVW2yGH91zHfhv57oR8eZggUQMSW9Rh8EMFPdr2Th3MUAXuRNfZCg8d3tZ9Nqnh6eWtV9TBEQUCbuL",
  "key11": "2UE5JYhCzdKNsXwU48G3PwU4nYS67nJKgdGozTSyikVqBtPEWm12q3G6bLhGbHzzrSX6cbj9iCzHNYPpok2KnWU3",
  "key12": "PPpHzoYqbcuJ58VvKnSXj3tSk9rvoPGuKLCsKtBnhe5j3uyUzxHuLdAocBBhYQoVCdyc8BMpzBwXULJoqkLyBha",
  "key13": "4Mzpn5L2gd75UjpYBwmd9PCquQP79LY7UprNNPKj6RByFR8nzeQB6CLak7ncAYf1HezYRZ4kbr4yQ9ijyPJ5pgJk",
  "key14": "5EtYVLQodunKyEAkcM9FsvtG8eqAgVN7abChf22SVMWkMgppfTN7P2WACH9G3z1zt1cyW8oLMvkt2oiP3EuB6HEQ",
  "key15": "5xBat86kiD5wQvxPmYgekVSu5VdypGGDrZRjf284GcNUDGgV1DfmEdTMBAdsuyYRcW2LZrmNmW4Lr9Zo59xCD5LM",
  "key16": "2skxX7p8dMJCTfm1ELbGTsmhSM6YmpXQtbjrHEQiDgK5h5RF1kxDKfpbogCYApNLG5jKhHn6BFgEscLWA3j456VR",
  "key17": "RqcFDh2FERj1SyZEn3aGgdAuxxZC9kSQpSVLdeHe7VBTahcf7KUE4qyivHtqyNjRBzgQmVpuLj9FpkYC5u7DkfF",
  "key18": "5JCbX8t1NX6hJsgadnjrMLrVjytBMPTuJG66XwMXigiibbEeXxQ3pxM26dgtDVAX8ZSFkjqsAx8AdLXi2gV62yXj",
  "key19": "2FrfsFmuNABEiqd3fs5Ts2M1FzKjpfWXxFbBge2nUpPtwZa93LZCH9oWeoyUhQSMqyrk7d8Nvh88QSCVj57NbdNB",
  "key20": "3VPCoUYYFundHQgazv9LuVyCTwWDgz43UC9tvTCgLYYrZfFej9a4MZaC2i26kJVBNt8yivKDH9dQctK4Q33RgxSq",
  "key21": "2ahMMMGW2aEsN8VyQtL5EjGyZh1T1KLs5vdxn15Pv8zaXsSRvVERLVQUJ921xcgTM8Dbp98niTurRprxF8Ez8p2Z",
  "key22": "41RhmAsBumRN4wLzLyph1i79xNEXaTmJhu1zCgukDZc8r9K5Px71WozmRCn9By4Mo2cRS7NGW5GrmMMD4jpVxMu",
  "key23": "Tbr8Mxv7gaNnQnMghwjFbkb9wimDMMReDYRMQJJupQEif567X9gULzBEsfVn3xJcKSjfquMX7KM4hbeM1zYbf76",
  "key24": "t2thdQJWpjrVQHxkiv4dLntaJqJBMkzdbGZ5LUwwRQiRcRyCaLEV4PTbL3m1iYtoKC11MmaXLWjEjQhwAEbEfsc",
  "key25": "4VEVXY1rQAHcbR1YAbVKUTu8XyZGQpLiQZZYbcHoNpYWTCNvDUnDoN8Yx1D9RCo2yNG2gesd6uyo9VKVrWxubZ64",
  "key26": "3AbKUeknLYF6WxgYjLjoUJghbfDYdTVuLRqDGFh8ebPA6qxSN2GuL21ohApdnHUgy2zvXuVofvyVBWUJmBnJGqv4",
  "key27": "3wKeryaVMjGmm6Sk8Vq84RdBNfejnVWULTzzzN8TPpAnXaspyw52tKpT3iJjcaA6QraJeDvbaHV9Crd37rtqSxGL",
  "key28": "5r4bFwX4YZQ7hkErShhqPWmSFbFoFn1SbLuKxEnbm4B4TXw8RDDsJZAUFhvUgjRbd6LB9xHMLzpi8YDiUTCtzV9F",
  "key29": "4tPt6uncbg6kzs2qrNMEkakRA67w6JQDjRtkc9DLXVtUS8hhQYRhXdijLhKa26jghsxZPA3mC4QLGJpBHsGmXusZ",
  "key30": "2iyTkYEEzDvywy81dNDkJrLgLtHKok6JTKhdyUpBdiR15pXUHN1GF79hX7xL5skq85jHggoVEJVj4aM9PsfxPwLE",
  "key31": "67nVhFpDUyHHBc79N8stxm38Zpm6WUFkctFVoTJpuAMcQsd7811xj9rbLCUfHJVXn4Ho7wRpyZjPE5xpQuccRSna",
  "key32": "3dvHegXRLmH9zkz2CtLiwgnh9snUUX7j4iucVv2DRP5XkTPfmdyuUXrVxGga3ob7FGf3WdacTvGKBA1TAcBcj1nC",
  "key33": "5QqMfehHeyn7pii9Ncc3rwfZUhFdPUrm7uRfGaocjivuqtJxCKmH6pbUiEQ5r4in2CCMkDcFJ6tgSeygtZ8jjkzB",
  "key34": "5H1S6gLTUtmM3RSyYZVZT6gTSUR6um4REps9tZMGec4mmSQXN5XqrovoK7RNGUB1FZ7iVnKS5iXgD8xpMmzHZW3y",
  "key35": "33Y8NjwgwUu87r3wesnsFoGuKz2VAtsVE9uT91NXZ4Tu6dnb6dfB5kGJ2jqUBtD2to1QA8CJFPmyx1RBzhVdKv2y"
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
