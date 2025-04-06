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
    "4sqV66KVr2UMDeoWnHLSoRcP1mxkkTG1q1zD1Tqd93uXgd15vPLdSh7Mn1eiRpqEsaCfoa28hyuseRtPCGCYJCYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QgigWKiar6xqYFaRL9EAshNR1o8YR1CzfP9YJ32iv5PoQyY4uozXGvqjzifrmrMKZxRUYYs2Ag7WDrHoZqwf1bd",
  "key1": "4ch3xq3ZszHkD21H4Ky2i3x6NfyLLAHXhbSKtSLoxqG8ykhFg8endBw6YvuNDdSJz5r575Ei2fnk1AtAKyWMgr2v",
  "key2": "57MG3NVEhBvNHym5NHCksQk94BvM5aNmgyYHih438WuVvzxtD2NkaYPQmAsGcATmQf9vX2DXufsRGz69r7UXSZew",
  "key3": "39zDf6deA42GxxsFwiCPX5iM1rUzuDHbNoG4jLLetHrmyaVFm8HA1sZSiruaJsKSZRk1GnecpfVzsqWjuiir5Cqz",
  "key4": "62os9JKof6Uk8mhaW3KGNu3gXNBQi7ePKRV9umTNRhcTogY5h46z86P8K22WpR8uL2Lsawdvh39rgrGKaTSGLorM",
  "key5": "aXzCfpjgL5NniAVY7Xjpg1K4Z9dZbUdCu8C1MsNaK3czwS8YMAD2Cmz7y6BNDF4YrfR6Rkg3pUyTCkoLU9CdFiS",
  "key6": "5MUohbj1tZyvYFNit8tfr9AzJ7MVQjgJixGggCEM2XR6t5w8covw8xC7RijQuZrNF9N3dU2DdDkJzSUam1zPKYZf",
  "key7": "5VsRed5NqgBiaM51nj8gWuPTp5RJj65rhHxRmwbMbcbdQ4NQgm2Jd6D5kjGnT6tV9iG789z9SMcvdZaQ5FwPgJPD",
  "key8": "4AjoQKzKKVZk4ADa8xE8NK479oY6ziXxfS3Cp767dBDshMEE5PPkje3foBucZoqPK2V3GUFfVHEvYnHFNP6VyDTH",
  "key9": "4uWMekyhnYL59mfNToA7G6FBTToGre3FyXG2q6poCmtiL7EQJggZnPrn2nf2Gj1cVec3ym258FztGKb5EFTwUND5",
  "key10": "5vCYPHRCMMBDX9BLxNr9Cynx1WPJ1iHwRAQGBchWP3xPMbAvRHx1SQz25N7jGJQK85sLN3ij2bPH8N6QxEhubddJ",
  "key11": "5iaBjXSXYLokiqUK7FnDs4ndT2VjRhv6Kp8zfiVQrUTBsyBC4QJ2i69vxqSfHFbCV8vuEowJ7cwtdk56SVM4UGGa",
  "key12": "3yf7Y6tLaTE3XdbnS4qaeKfUrGiNW7EDSNNZ5aMoiaYV6uQWjEnDZcUVb3Dc4zRWaKSyu18G1JYAQFnHXkvVF8rt",
  "key13": "ZEZvzRJDhSajjG9D9Ug9sfLaz8sERKwEWwAEf8nRoV5fZnycxu5XNb2XbjaZXzTyX8mSeHWUYTzZrJJHhkT1FtP",
  "key14": "2ftwq7Fi1wyC521eA7NxAVCAaQGQ4mj2gTXuDVT3B9ixcFheze5st2F2mhm6i296g4YB7BNKjBVcEnemeFo511dV",
  "key15": "2UwT4ooJFv8V8fzJYBup78bqCTcFPgmg5gMa5xUAPrGaKD4Zz3nXNiY5MjtvaBfvr2EaAX9uu3Z2GDfU2CHdhoqJ",
  "key16": "4FUYHqTSarWgbdFzRAV99hATNjGJsLzQEgekEm4TU8dn2R51QY92ZQn4AhjU1BBQs6qMMrbD9n1nAtwJ5ghq5twR",
  "key17": "4rYEGN9huG5Bw5bT53MkDit3PgEVZjNXB8UwefMGXaRZYur6Lxa5EchutHhGDSo4ShStMD3HuQus6mbp21uvJ9WT",
  "key18": "3AtCNaGqkXz4jsVbwUrdELtuce7KpJkD6RCw9NLoKVAask6GFcK9KbjfQJCoGC1DYFX8rP7dPtYenpMoRpi1RcHd",
  "key19": "3UtSX41UQXmxtyEGWngzk8ozs43LfwDubBmLkbvVexi6KDDfMuY8Hn9ifzVUo88GrYgf2va6hN27y6cgaQp5iVxM",
  "key20": "2NJpqVu7XuzweuKzRN3NqEpr8dds5PLVyfqeo3Ytpt2KXwf6dKF9B4ByHN5hGjSyg7fkuMRPpuRbbK2NVqwQ1k4T",
  "key21": "53PhgS7KaXvEQwfzDAT4PUFBbjtgUoNQFAnwuKSKKjSmpurJ95JmbWpw5TmiKqy7sdaUttYajfBQKeHx3tKrPTXo",
  "key22": "42dRqviUFQiQZwXmzGumigiMW8pN4NgWcpdZzpJ5kAk7vUmC6CLRF4p7E44PmTeNenrqdJ3UmDYUv7ZHfkMU8vdZ",
  "key23": "XXi9ydXoqAN1VWJix62sjp6GPcxddRWY3qWx1GZEnUCWyTd1RWgkDyyN614Ush5e2bP6ksdvfrW9mgwBgPTgPrE",
  "key24": "38dJKx67zeWjjp7oEG8zLHt1JaNXhr17j5EfKkzjST3Ggch8orZXs2yoHibKEQ7i7FKmisE8JoEcoTJ7RfPMRHhZ",
  "key25": "3q9BmtaMkdeitBjV33vkifGWuWqUg6rJUz85bg6wZ6X3vBqU2oS4TWx3BUMLNQud9zpqhHPWhQ73YAeDmbBbSoAu",
  "key26": "65EaQGGXkyfXUhjqgLWP6QfPTeTDPjf79iegqMsiXh5PQPLXqCQ4QAJMWHFhxoARyjxQd9JfAuzKCawh29inHR7f"
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
