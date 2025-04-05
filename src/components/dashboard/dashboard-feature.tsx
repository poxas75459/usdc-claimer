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
    "5LAMwLrWQnktGDPE8UNfqYXG9nh2ed6mhks4R132Zdu9xKVU6GpNEC9wSuJQNFxNQ3FowwN1657DU1FH54FqPRoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9YnUnLtgSAESZ5NCLc6RHVj6kFKPyv8exHFjvdwtwHcehHkqr3gDe11vMaA2hN2SxD1auFg6kH4o41mP83dVk8r",
  "key1": "5ZPKNVkB4bEtHYnJEZSMNAFGrhAAyuWd4gQSyHCr9yo2W5ja85eby7kZRzXD2oVR5HF17mYYhZj8WraDTDseRrLT",
  "key2": "2x7Exj6y6QiBUTYz3jnAbuajmHw2gJnLAyHPMWKwh8LkFXGxJHfA9Kqd5PHZNY3dSXx4PDpRj6KeqzrHfFbYpsGz",
  "key3": "53bxFNnCz1j8ZaYuLjFrrpC7jo9towwgirFbrJ22ZRwxH3Y7SYqYgFZS9ur3fsuoEr7rzxW3dBsbn4hBARruWtQn",
  "key4": "5J1BACa7wzhbg9S9LihPxvbUeCaoJz8cUXEGWP7CUVvzZ4nry1X8Qn7RAfKoJFhzoKdEcLGFgQAFmaNbdWF9LPAp",
  "key5": "47q4NuMekdeiWMtzwaTb4A5Xc4rr81vKECNYGJmNsdPg9VugAxvBzCmYJpEHDhfxMW8vCDJVmrFRudhdmaY8fX1Y",
  "key6": "219RtfvBD6wrNQjM2LpbtZkhk6ea2druwxnZkJvkk7HdLJRFH9SE319uG9FhnGvtgVAMg8ZTU6hthwh32AsWLiUq",
  "key7": "4UYpc1ZSckv5dYe5FqKKh6JG738sDi2i9zKKbp8fbMbTQckt1QpvLsZzt7yT8E8SzfxtUgv3kZnc859C7MZPwLyr",
  "key8": "3TuTGks4rQY9odhaumPmhHJN6958EDVSBd8fFiHVN4dnr43xq7QQhGu7Y7r4bBjdB5cUd3uaGmcYbB7euGwMeJ61",
  "key9": "5iBskNvSpAkwoCsr1LdB7BLos3XEbLKjyEiSbvEvff7HeY2bkhWD5vJGccKhAYz1HKAPa9CH1RNMNKm8poc7zMMF",
  "key10": "4zGGSNV6uMAZ7EzVxwhNx7mz8w5YrBYdde6GegkUy1NSQiPfHBY1Rf1QHX8PuDLWuse1xARcctrL5Q1xSZ7tMU9H",
  "key11": "4WVTXcZC5PBceQWwngMFiU3pvjGzEiwMZtQS25QrjQwsypPtXPiraL3tATr8TbinPXDz6DaPY2FGTATHCzTFhPoQ",
  "key12": "4ePaFGjKtJt8QnYx7xWhV9VKnHmfH4atBT9cBSN5cZu9UK6B2s8ZZ1r7VYdA4mJhCDA3X4KuAhW6MdrCFbT4HkBe",
  "key13": "2FCNcPRjEL3e5eZfF4nVCRV2UPapcv5nBU51sHDJ9ZLjrnzqobvfUsztUwfxFfoWCtrkzZ6oMEftEbHWDQLvmCK9",
  "key14": "3pp2W7XmP43rvTuiiRQ8CBQpKFXDrdJqLjCrX8HuQZL3TacaYgUkcLoQukdKVJgEsxymJCD7bqDDucePGEMpGYbu",
  "key15": "4TFSTd9EF2yhwDYD6p6PnfVCWuU9CPgKHq1aURVzgtnQ75yvyCpP1J7D8XLBbbJW72ThRPd5CoQhz5oYGSLSmiyo",
  "key16": "5MiAGFUTPr8dq7LXPDAh1DNhnqGZHcdCuyYD1ivUEKHDxPDVHHxVhSjN6e5bFpa7r4p8fJKjkisKSw2bV9ciYXU3",
  "key17": "3qDeQ4NTne6KLzh1ZHkA1vEKG7n1kCsme2Sp7sciS6mrpitqtXGWKPXrrY8995WVP2tJMEm5N171H2YSwE2mYaUJ",
  "key18": "3DZKY7jZbNFfjUd7iJ615Ew3w3eigN1gMmzk5yNTH5ExQjWqZ3j6PkNGFyGAtf1aTzVztk9yEFbpPjnS5KoBqvxY",
  "key19": "4ZxkQjv7HVbSVVqpQom6yWQBHGU1FCMFGLXTjyinz9G69AWCQkLrWjsD5qYmwpUgzpsacjTUvJKBdsQKmRywqVBx",
  "key20": "42etNBf1V9jtL7UiPPGLUt8oF51X6NkWXJas2B2y3hRkZ4noC9Y8vadAxyJEX2YKmCdR86UqrD4SKvX9CCpyJ5iu",
  "key21": "46F4BFR8pUx32NTZ1LZiiqHdHVvyLnCSuF8cHs6AGaPXNHXX5PyR496RpaK2WFYLgG9g5Xn5aoQVoDovPD6BDjPZ",
  "key22": "43ksBr2tVXfsboYtQkcv7MyyGU32NMp1DTuKj1QyuXb2bjRCVbXCdWGNWaS3P6TnCciridw89S8k9UFwK9M46iAt",
  "key23": "257NQf2Jhns2BGc1t3XRgJdnHDpX4YXZoWj5cPyy36nxJKpKnHdxwLn9ux5ccP6mrBxwyxZdVSgXLCsW78h87QDL",
  "key24": "3MjSSfyX8Z3qLiMvMhPKXh9js7vJUSW2L9JLf3vJWoyaAeoGpqirTwtF8rGyopMEiCKgHis9jar1zqaZobJYabM6",
  "key25": "3TDBchnP6ivwuEMu3niusjyZAxkWXzv7Ab6EE81uGHkZk3Hq9ahJ5r2BzZiTvHpvMVrstpZ533YSrKwR48KcUibn",
  "key26": "5q6N3EoX1MfXr9hhf5CLnfYFmi3p8U7EstLFuUyWm4ZBfSoNNMa5W2ZG6y3oRAuCeTaHYt4AKwKF1JtfpBazNTs5",
  "key27": "Z6dVLzuDLKQxBYJVsGZF64UroyhG7PeSAHWtHkBrwg9MunyuLPHfbUN6nYNaFVBgp9afMTAWUhGm3Aggu6WWpgh",
  "key28": "4PBi2kwXHh88AgayXrjZwMGSLvYcfvEDrTwBT3haujpeGBF8qXw7P1wLn4dL13A8o8vUTqGFqwj6tpLBZff3dGUc",
  "key29": "M17wfkPQUPbXXt4M3PzD1HMyBxfu8TU7DjJ3qeYgM7Qjmh7H48W83JpmfRi1ifG8EQ5iAzn69yKKCRNoyiJ44H2",
  "key30": "4wqwLb7mkajyMqc9scURtSMG881f7PmTLqdjihxBKvzRQiJwg5GLMfo6zvaamKqmFqai5z5LPZkSaxB5M4QQpyBm",
  "key31": "4JKZpCz6may9XyHWERAujcCdbqMzGAXcgxeGZuFiR3WBQ1MNWBQ2yp6G1kJvpbGc5PDsJwjfp8tZ9UJWCH2R3rcA"
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
