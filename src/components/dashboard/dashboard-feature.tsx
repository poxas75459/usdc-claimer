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
    "62nX9g9RMPGvesGZDGqrHh3xnhgkaWZak1BFK2jQEM4RjigVQzJxu7KofcMHgCeW3gftxzDSUsNhFZho2KQAWopL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WwXmpBcxansZ57FZfJ1xk5xYN3uY6N7EHzTGSY8M1LB21JYmfw2MeeAbK5L8Sb8gpDmZZmv9i7FXZYYZSs7KjSs",
  "key1": "jPN9fBgSZBS9t6r2fMwX16PYDtBYu27e6vDS699uE8z89Dh2tJaeECyaH25SHwzWjPQnd13Xw1npF5U2R1tXKnw",
  "key2": "2ZXWJhfrSxFds25Bfuh2ZMFA4KfHybiurPRCNsFNCtSfNNzfhpHvvEJ5scMSK4P1GKkR8damiRP4HV7NJvGzRHaa",
  "key3": "325pYCjgBRp4a5Qn9JYYeVM8fRgRW31p9rKREuYuD9QwXLPTKjWvQDRBEbX87qM1gy776fYnu6hPc9suoEw9qcaH",
  "key4": "63eXf2j82YBJJwA9iVmc6PvUztktMVbc6Uun8Y25LW4qKRhBdoEXyZAGvyBW7sn3Gh4oMFrnnaD9VYihUE1LZ99b",
  "key5": "ZfaEZNBdQwxuAJnsCJSDyAZnDREso9qPdSGK44iw1e1agPdAfQs2YGhGbWFyj27mA5WjMZfy9vGYE2cLxxm4poN",
  "key6": "2AwBc72MvJt2iVKBc3dRWeCq2x7Tb9jZXbaSqvM5XxjA1zYWonsv1uHgntbC6pMDYUwvMWgabZottXh5qingn676",
  "key7": "pC8F83oGbLjs2iEbB78dzdMbyg312t9PXYucPNTzw4fGyciTbzn2KnQCe4ipe76ogaNBfF72JPVGEhbFSu9mBV4",
  "key8": "hmr2F86kLgJQKG4peiFbdUqtHScfkeahjmXbbyTM4yfVmPepcpiUvLeKgRuH6j52SQzqzKgzzAT7kxzeKAJUfUy",
  "key9": "44zA7iuGwvhe91j4htp4Gp1PmC9tzGBpe3bvSTcgMfwc3QLnFCPSpAkw9TaCYndW5PDTgN7z6wTBuYuCpZrKKzR1",
  "key10": "2un9gDMpYUxPy6nerqJs6JvhebTrRYAaK5LLYxxxecvp5bBmf9CBfTR3nioHT7TxhZBvVErCZMZykyUK7KKWesv7",
  "key11": "5Zoaym7d92e6NvsJf5y4bveiuJRGGXEkwWesRRK9Z66g59EqmbfCfREtiUaRTrjYNP64HEseYFR97v6A43v8gcxV",
  "key12": "jk97VtLNgw8cVDg4k5jnVSmwZbyNTkec8YHYtgKdqvhwwdAyQJ2thi8WmfVnv9d5GXB3qZq6oUL6ZoDiTfKDDpQ",
  "key13": "2dfwWGByw1cTKoPDRzfKf4eY1rd3VtKhzsHxMu2cQWcwHhzUoFeXhiadUPfPsDR44vVUZKgXni8iexs33Xd9TRkC",
  "key14": "29tH4vi9WKbti18bxx5gehs9Peb9cv5DpX2cMcxPai3KK8A1ZCHGj86ybLjR4y4iwKGtQeUoZUXyj59RJV2WALZ5",
  "key15": "52U5vVQpKLH3LzwozSMxR5EVunLg3qNQtWMaB8g1fNXqWaaBT7axDxXzJeF938zEAFKuBkqLvcBuCGGFQSL7htKD",
  "key16": "5RTArLmBhPeXFq5qLgsE1ej73wWFhgWaBKirsYyEsNB2AYJYDSv5uHsTwaLqfRaUWPN5hZFyfKomuk3su8LSZtSF",
  "key17": "4hZZNNtLYuNPF9xEr9saSsBu2iaEyadX8hAyJjpXm3pN1RM6XCMtRRLC4vE3ConMG39NPtrxAs9t4RzJiskMATDu",
  "key18": "5u64HpgDLBL2Hm9rhz9nrcxGXenDsh1WHiC4bX9wFYxEXnLsDiPTiWmZqK53Pas6VtpzniqXUuZEUgggbKZVocbD",
  "key19": "3XYYPzmJrRedi7xgvA7vi92xABnwuRNE4iccMKePK1oodPD7PcGqrRNzcU8dAzu5ArW4NKBbyTtpuCViVYhHH6K8",
  "key20": "3TfjiAEKi8LKh7Ljun9NzS97T9S9JFqQnFFGgep2WBagmipoSY2aE7RewrsTeDyjTRENgzGfVQCLGRoh5MZnmxau",
  "key21": "WN5j8WsUMub4aCX9higvQ2qbsWXRVXG7M5LQsAtypdA44abWVgYF4Vd9vXRfUHQe1StKewwsJyn6jbh6eMnrJ9d",
  "key22": "469K2s2KSNW5j35E5eTZ6ZwmtdcydxicjuqeS9wzmHNNNZyJRH7gNtPr1PKKqFNmvSLaUwzQNRBYyYDexxGXCtyr",
  "key23": "5W4QeGgyN12JE3iuD6QujJkxidwJgKNiLdoUQMkCLrVxRwHJcYN5BDFjBHtZc5wL2vvv1FH74YgYeQRqkCRuEMdC",
  "key24": "5n3dniSbRpR6M3kFFQKMYuif3EAB5dNi4Yfo1ZzBtX3hnjvsUVSiTHV65JornDiWmXQnYzew2Kt59zcu5ms9eUmY",
  "key25": "PnnWKqq4oQBqGY6MQddfvpKxJ3Fqdfidccd5KpEVvFAeAZ37hUjovTrYmNVJhTsw6b7XskPoYMJBXVpnvMsSyL8",
  "key26": "3HZngQxrWq68KsKNbukDYSuXoBDiFVCwfRoqduec7rZvdcMoCAkY9Hs1NKyZx41eakPW3pcv2E1GFPcbmKq7q4YJ",
  "key27": "2nTVJjeCjw4KFGPbDmCDUsh4LnjUtH1FSfbUEoEAAGdrUUm5wNRtWYrciFFkVQoM74H4XvjChcLxs16ZfDgF4iDH",
  "key28": "5giRyR23hUy7KQJo4gag1ahZ5KTDS7EYqF43t9mUcASFnun1SPdeX4fovJpGnZt59vv47MgkVJio9cFFrthBFWrc",
  "key29": "2YGoK2EqHpyFfhUq5bNkG8EtJ97CxrsnxV91XN4Yk3HDe2hrB7RCvKyLi471xqp1djTZuWwDWAPhR6gfj4ooyjB3",
  "key30": "3xR6kcMXZqRRWWLBNU754K38M9HQ6DDQVe568FFoaHQxpLZqowcDMAK7PCYpqzfgxWKNKg7toMQZ6spSyqWcZvQY",
  "key31": "4BRNdc4xsnHXJXRco2NM39B1QH3iwNeZJPohbDEAB8x19Qw6KsdLCdXEBtUGsftjCTuLAi3Jv63mvKV9cpuRykH",
  "key32": "jPA3jdcyVEgri6fuLu4KznNJf69hP9YkTBv9fKVTGGNuC1c5ZUCF2kJBxo9BhZUzYVNGCgbkU4dzAJCivquTcyr",
  "key33": "68cqpcuHT7nx7ExUXHEBeZ4DY7R2QdXPMqZWoQQLBGNQVzbZkA2HT7jWS9A6svu1Ju4sKoZeh1JRmqM9uSPeiXc",
  "key34": "52RLcksXfeQi5b8M8bg8jiJVcGkzz8sdkriyhccjpN2DFANJcRp9UzLbzjwSzQpBVPnebaebfiRSPyHTcNb1nbKX",
  "key35": "4QoYb6zay3mfWy9HyW7bftzEvamqSXXqgvffbkhTvyM97daNFnxswb78Yn2p8e1y9AC2q2VWNmwBRgTDe4oaLCdi",
  "key36": "51DpwXm6B6HnZkspaWYiQcfmXBiG1XVymtoTYs7Dcqi2tB2Juwx2HpVqDGPbnhmYMUdciG5qroSrH3AhkqZhNBgP",
  "key37": "4TeLTStKq4NqD7oP2P8VqPjzaxgnTtg9SYuJRGgFDzEdPuUiysoAr9QWxyM289SzxCkdPfPz9gDfY31UqAhyN2FA",
  "key38": "2zeM9CKukv6jN6AMbae4bVEBLhKtWJTGsx1cJsd1M4qkwpdQc3B7rYHFqdNrmwB28fVW8UCD6kuaasVzW7nXziHo",
  "key39": "3BVsYY4Dq5wj7B9GmQq9ERGTQQRUoVwatzr59r2mLedgADtCjYzsVwDwjrzKnn8waSdoaKQdQxrVMHcvU1BdvoUh",
  "key40": "23SxJb2sUEurhaKvsinPh93JwJWvG1fp3Jm2H5xAU3bqTD1onaUm6TLNvU2S6noZiFHKNCWLeLBERGTuwTFffa3W",
  "key41": "3nDzx5rBdz7DS7z89vossBA95jBHQCS3kt3rvBxkuVoH5MG6jEhCQQo9SVD729223bPRz4529kD1mxDPXKXpgixS"
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
