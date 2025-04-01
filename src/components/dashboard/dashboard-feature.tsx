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
    "vfTq5KkCJHKBWyzF8JrpzU53UpScJA1ybHmNFvw9978ufa1G5AnpcnEyjw5g1n5h8M1z8ikL3nLCPkx68VbeFJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fGVfLfZ7PPdFjnNXP7zpwY12shWqHgMfp8urykQpzSWhgzUVrQjHDrTzCZuE4ZxWNnZPA8RsEYpgkyuY9nP9UNB",
  "key1": "2a2L6qxQoctCKU1YiB4qUahTPQhANqzvLhZRAufzndPUmWqpdGkoFnuX2Ftdk5jnD8ngZ2nUuaDHPG9Ww9ymyjBs",
  "key2": "2NY4oNkLZWAE9zs1f8a1sHKGaeS1ykMubiVZZRZosnFGfwCsT8f4HZNJQgsScJZyTnspEdGGKnGTfWf2AydpfKCv",
  "key3": "aeDJ7KoBHdpcJ8VwiQJVu7GoQ38RmYnxFNoyUZ2n3JSsybSaCvBbPCW3zuU6UeFG3tLUg6EdtRtv7qnD3ji73rs",
  "key4": "3o8s9AWXNTqH8W8w9yPgCtptenEpE693SjMRtJX8h4GGg6mdg7nWbLJwUAKG8YWbY5BhKdgEnC6JVv12KcnW9d5Y",
  "key5": "5w1kRPaT55QMDTs6sREaUu862kfSed5QQj1RaPySP6YT9DqjeJ3VLFN1pepP2rNJk3ZYfh8poscBHB49nB7QSRdR",
  "key6": "6532588CJ5ZsBTCntgb3qNaXZ6mZnex6afhEd9yzpALVYTviuTbNY4Bg1VDb7WpLbXpwvebs1eFsPtympYQ33Wfx",
  "key7": "4A5jfJd6v84Q7BFt5G1c9txoU9UB5YkhpqowNFZsa3Q9PuwMWCCmqwxN2F4rBeXAciEmHN17DHE7BfKDD4Ji5YnS",
  "key8": "4oSFRr43m4c4ZRMnegtFVxqjeYu4vijgVmxiAhTWLMnqpT8er48u5iAo9Jbn2Q1EBjnbMuVveYUqazUoGY2cy3dW",
  "key9": "6oSQNdPFfhvKLDruVAswyw6ZcrMVbRe34ubSsxyVQKAesGMx9kmapTsDd1ziP9rFKRXYTjhGPD6ZXMVwuJif5fW",
  "key10": "5Qcd7pjbphvei5HuUQTyZnhs9ELp8nko9Bo6hhsG89RfRqZqZzActuyyEyia1WBdNMtN2PRPywFEjjG8KjheSdd2",
  "key11": "3fZKfFGuufWGUFwYSLUMggidZZ8rCgvJVA5qyckrFnFt6duNU1koaPyCroSEwL1Ww3PCBc8MTMAtfnjdjfsPtYGM",
  "key12": "5XhAteKia7K7gZzGfnktL9zJRKXXytF68u2iCTiPirjwkfG9Up9Rc6tAmC6ujbxVDsqQv4Mr1zvrDTgjWmWETLGB",
  "key13": "2jAeUoh7buuoqcCJsZEK5zSJyFY9JKEVxgdWWkQMrf87j1yrcvNVZiLjofcjBVK5ZXYJDqNeAyc8Kv4Mm42ABnXU",
  "key14": "31c7JHdJN5qWe21fr7aGexq7SRNa38zEn8hhVSMvCPsRcwyYKDHuUQqnuuSP1ibnKnn8jRrVcgh332VJg71HPFhR",
  "key15": "55sbRbEHXhZGQ8RAtqwUBp4awwzG8dQabTGhMoswDTjB5rdEAE3iFK9XaskT3PCD4T1wU8PPU28q65TQ33895WwT",
  "key16": "28NDxxp84dci3dziMXcoXcZSZg6pU25UyjgTzUEfGCckkGWrJtGAi4xTgPswhPBxf9aRDxnnNA7s8eZ9Jd5JoUhB",
  "key17": "4KDtRVgs9D7BemJhMULBgiHWn75NF6kH43F5u6zyCiqQdRffEkJBAeLMX6udkJcEwpHp1Z7fHs6D7BPKM86fUaYz",
  "key18": "2bRdqkFi2oaMg7SZTEWPuXxmv825uNDGxoM9844z1YFWHyotxCu83m2Df6Bkk3SkVJttgZcn68BDbj7mW93dwyys",
  "key19": "525hjKeprUDnmWg9ztWKKJuFh3NACx6aFFEF8JEZs4gMsJv72A9hdXKiaMBLnUUWZCRRwqpCf7EM5rd4jJgYQis8",
  "key20": "4dTYnfnUKE11k7J5sQHeqRF4RUsjnPN9xowJzRkZQujfbLQ41gy4oLcHfFNW9bYgrnrcFLvrtAnqJyFAyisEtvuw",
  "key21": "2CexgLM7KfpDh6cSSoMbWNUjRKqrKTcUEusKLR3w7gAmiUK8wytcBEqmegwjt4H8waCSLkGjn1NH6dEUmtsLhhjD",
  "key22": "tveaR3Dusgk24id8ezekDvtXZqgnehpxpbgSRj362HqBGr6jh5f1pMNNidC9h6cBL24Jx67GFrumyusjQHW4ajH",
  "key23": "3uWvfW8g1Vp4V7NSamcjnsVhPocKcNG3Uk8iJNkCYrETuWzH94JAAbnG994cZza3xgbTmN5QpZgibJbvvLwkYupj",
  "key24": "2str8dEFb1HJs8hDDoeRe8gB8x6VBhcnfagFTCTp6VnhYtE3HyjdsChs1DeoFusAfSzaoCJ63UCdnWLtrhQfdvhZ",
  "key25": "ZJivrqsF48Rjb6jd9CtZGhxm3XkyGxAe9WkyHmHWkZvQtLZXQvx55dbDT9tsu5gA5nYqWKrYKZL4tN6Ped6t3tS",
  "key26": "5Dbnjqr2a9h8ky4HvxZMrRJGqT5mXB6ZL4zHjFgGEdTyVUV8EfNFXWG9Z5m3uWVFR1Tgmah2mW6YnCqF4t2n7V6D",
  "key27": "2q9UDhpp1LpGpDiXHdRAbNDn1RequioAsWE6ioesC5JQK2kWZC2waKyVjy14mGM1dYQk3qyQJv8y2XuExfn4hRyx",
  "key28": "5tHqWarjwQj4yVMgbxreKyF3gMvPx7d2W6pK82jfDDtS1SnAdmjEVgtqPh8CwLuB3AxvpD4EKv8R6aU9V2TUGaFr",
  "key29": "5hCeE4GcGfCyqzwGMs1i9Q4pJuuHp3Zv44L4or8hAwSozMBZ3ieDGJxx5aCxQcsPcVZBpg66GwmcP1gXZ6y16NBZ",
  "key30": "faFQXGrU833keUBf7eTg6i3PjEzfmprCahwit2RCjttNWG8sFGPHJa654Es6mkfNssj5ZpCHEQW9CtHe8oKp3Lk",
  "key31": "63h1BruFofdtiTdnsRe967Vi4unjRV6Fk1iG1Z18jaoHZUZT2YXUKsRGL6bQMTjdgF5XSTz4HJiRfAM5CTwsZfpT",
  "key32": "fVVJPjG89qKmw2pPpdEBA5WitNkqt8ePBWM7zNebMd2w9M5Z3o2PATa1GurVbV8fjdJzbrNPBwvSuceguvTq4rC",
  "key33": "2xpjphBdwcKM9VgFpsqqu5g5FDK56hLet2UC4gBcoigzq1kXQXTp6uCBcqZm69KuvUq4cnkyoy9y8NxpcdivnkxG",
  "key34": "4a1Y6pJFZo7DktvJ6WXG7Ys8CJYZ3y4BQDD9LP6XGsvsA56nEhFRvGtcEei53e6z6k52ieneJSzFcZsmMSAitoVP"
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
