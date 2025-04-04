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
    "5hCmyLuqCfErbCNZRcxDtwB45iSwKcFbcQE6SwrjCDsEhg3HawB7LAQi9YZxg4gDSW9yVj9BaLqCpnLD5s53KNGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k6CoQRYH5eQm6My47jQ7JtBxKx7LMJmpcjkPBYsqkATLsSQz7Tv8wXBA2wCi2uN7TgerSce4dMeGiXGnd2ydQhE",
  "key1": "5YbjXhfDcY8VdpjYwEiamTaoCPamBGLYjaziJxAzKTMo41K8frGc3a6zYHfde25478ET27t2ybQYPytwA6utXzUq",
  "key2": "4iQAYXi2BRQc3t9eoFYSmbzbRMSfJMvVv8JBKJNitGuFZ8LZnu1Kk1urj6NGUpjtUpnBwKjyESNiCRQfbNs6carh",
  "key3": "wTkX2hjvR9YJR3kwvhGXe3gfNVGzpAFSGzAC15ZwP9rpc7oYvPQYMuHBBrKAgmvzsZDgskeazjy2yyGXy6NzMYN",
  "key4": "joUxQg1g9ss7cnjFU33qbg39abn2ATDG3Razyu4HAJPdigqXMgCFkX9pofwckK94N4HTPVXBPJVhcbUMjcaST6e",
  "key5": "9FkS4b8o1Q6jzQibhrWt7YmJ8SP9h7HnUfKLV4touraX1fniM1Xeah28ZTFCTKVSQWNnkQ4cueesXYdScGu4P9Q",
  "key6": "3ebQzkRLi3Z5MqNo4g5uQdTMoXb8J3wDAa1vhwL19DPLgTMnYvoYESMuAZw8h1ndmvjone8oqrro2LMZWiUgnJeS",
  "key7": "You99YZKDRF7Mb69VJkXugqAzirWnNbJGrZfarA7zu9SUNyMCgmsG6odcZXu4NmsmeTGsYJDtw7X9WpVWsP5Gwn",
  "key8": "1yDmWpcucNvHsnwz4u9yU5bsxvn8dxxC6v4QDKHv8R3fJdCq4FSPc1KEvfaQKc9Ftnd1bNZ8HFRSgjPyHk9djUM",
  "key9": "W9ukzcJycNEsun5Kdz75GXbVUjmU4EnVVaWvb6tcUp8kYmBpXEXhcq7A7r6S9aDjYntJDH2CzzyuKX7vjJ6W7XL",
  "key10": "3EfWgPXbeck6us85LLv679dp9UU7Nvk7sHrf5PviufcnPZLUYGuHLnPp7bkrv3Xn9kAoP51YH2iPCTh1uJvxm7QN",
  "key11": "3kD13BnPZxGrFJxgYcCWVra8HrbH9uqnQW5QQ5vY1HdhocKPv3KLjd6XyqtfcasJm1oji5rbBAAcUZK9MeN22gxT",
  "key12": "kQEYJoGroNDphfcX9APeGjnJazrn2dSJz9zSsbzkNYups59VCjEDXnHFTuPAHQZXk1BeuR7gvbC5psaav3J6jgV",
  "key13": "5mQoLTeUsUtuzz9XhFyDK95SghxrDnpfo27LWvyhufJd9vvUHeutgor6UsXUPgQjqmrxNXT7zEzcmeQRz9Beqw8j",
  "key14": "EhLrMnpNf8gV88vDq5iFyHVBgWVtYJpkwL9CXG4UQPEaEUneXFYPNFegzDRg3LZErC7ewrbnxNekGPY5EEqicLe",
  "key15": "8cRXKbJ1EPTER8xbAEPjRoFYmkumVt5CFwt9BXU8o9z3L1ceCmn44N5RSomxHWf1fPKy9GGyVvxWdiyheunC6Gv",
  "key16": "J8MRSEGCPWJhmEFyKhvy5zaS5Hy9Sq5rV3Ruj62Si41xJpzCmNcGtqMgtdtZjoG4QEhG7xCXQkEcv89Dhgr3MPy",
  "key17": "4yycMenFsv1oR2xrmNdWgvq143x7z2oczwSutGnG9Yzud4ewMrikH6o1cfQCVbiSQTgYshHn4nkkfcbmLUQsKj7",
  "key18": "42YtCpztfkJ9tEnHGmwByvBNNkefJQEQsaw5m4439t8PconX4jNCspg6qncVvC9kbPfE1KuhU3X1GPsvtCnEPgqp",
  "key19": "3mHP4XBiCdpmXrqPyCcRKmChZAZRERbqNbDcdxwCLtsCGoCB2hx8XhaCGJDQyfafRA7PzVHsrUHznKYqT41V6j2j",
  "key20": "2o4dgxdjNzjxbV8GmstxWeJuvWg4sX2rpjVWY9CvWJbwHwS68U9Syb1exY1uzZvGZeiFdbGx9Ln8sWS44uG3Ka7h",
  "key21": "4xdrmeQq5ky4BBxW7hF43k3irVnD5rMbiL4Bdb2JfbKuE46z9VZ84vEhXvkBsbJeqsibBtDsVnsjdR4z3FawCjFj",
  "key22": "5j5hCE27R57rR3SxRHTFcyfuSKqJ4TgTG9gsoH6r84WbuhseHM8dBi5zxNa1Q1GVEDm6oAqyzSRQj2ya6ZzQBM48",
  "key23": "5RNwwPJfZmToQis3yfy4UkB2ToLruV8Y9PRitMxmGn7EAJxzMGWHWZ4CgPbzqtZCZUYzfTwiok8GYEYWxX68Qsqt",
  "key24": "2hwR2yFsoRrTkaxLZtN8QQbA3DAuEnj7a8LWguVZkAGVTbuvnANRxBBzj13HreSwVgdRuHzB8JfZApQhvLFXnhmo",
  "key25": "3J7AZTa4wKT6dVawbn1Naz3LpHyJRJBmoQCJC7kxdqjiL1DLKxDcw37qHDMwiuazLCugzNaMC8DdrEaSgW19ouv4",
  "key26": "5Ky2puUus7327sD5DwzSN6bKrBYMXaKVhhZ96PQKQNCnnX7xk5yTeyTY5baMXEB6TQtRGRMcGyLKvUe9GFdpGxN4",
  "key27": "4Zr9ro7Rokwu2MPnQo9aBAbmpXjKax9qA7XZZyXafEVKhVjht6BkXztHtWBpaRb6yzbHUa9AcUWVvDFUDEsbtyPo"
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
