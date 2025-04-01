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
    "3mPtEWDTyjCs4wnarRtPWnbF4ooUmxgWKi9tDb46qDs9VxqHDLKkBT5NZ5SqJ2rWdirjWfqTaRDc4tFK1XXJ5aMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yUXRuhknqa1DyDBcB2U4goGn4e6Ugc7jwyKHktKJhweSGLiy6d34ScCd15Udk1Cj2gHai5aY74JdFw8AK74VpuS",
  "key1": "2E5WYbXEgEgvAyqy4w2sci4WhQWuA2hpYewh7RwuvCWJFHXZ7S6WYXUm4kqQ176oZf4Eor2BWLRtdk9gtMyHK1VZ",
  "key2": "dWmsn1RKwhnozwtDX4atpMWMoGLrmLZNQeGXNG8ZK3g9rfXXoTkK6dJJzGFZ2bXftdXXYM74evML9g411ErPQYp",
  "key3": "5wczGCjdugcJbJDz5AmMchB1cDVKqpUqWK4RzCCzYQCSKybvcKGUDVHNcRC4YwrFc7ENBL5CC5ECuEAFWJhnA9ni",
  "key4": "2XNe7Uf1M9c1CAZcPTP9u1YSnaPDWSriXQxwYKmuHsoMotDhmhgx7cFHm3YdF1i3jdATqJZtxn8h53uDfXqkTv72",
  "key5": "3he6MN8DvgXoPw22b51f1ccQvCMwjMZ39RgjvP5UoiBnaubWF2Mesq4TDALfBQ91oX6g7K5goFrspLFc8Uy8FW3Q",
  "key6": "438jkY4jGiwTrVK5jUpyQit8vMgBVDmqzcohebsdhZp6RRRinyFtQcy1GtryurWoYDtmP9zF93UTf4Pc9NvhKWq",
  "key7": "1BKeZK5XCdBBd8KNd68ZnUg1MkTGEssukp1J6RAsXSftqAKB5YNtjcsCsPjY9Hcqo5caaWzo2kp7AgmwK8YsQoG",
  "key8": "2Bz1LxN97ewaji7k85VMFFui8LbCYYtvMhH8rLc8dmCbwtnA39wiqeWjbVtFWZvQp98w3rKooWC8RNdN77CdTpJt",
  "key9": "5Jx4pDRZWrKKgjc1oZQAHvXXeoAo6rhkHxmPy3rH5enEmGqPcepxcYf3p8yk8Cdaej4P1PcG1LbboaKpWAkyQnnT",
  "key10": "4pXg7RDZJ8Vk8Dfracy792ji381tzw6ctPEVThQLj5tiVgcnLg5wDXH6ksiADqUwVwqmqyxXFFAUtbM1XiYFsyNU",
  "key11": "5xor8aGvkMFTPyiRwrDLEAh145wqxzQkMQSeNfmaXkkdMRTtPYDbah1CzpK3yJnniX91DfWpDT1F7sf3HuUHmgHk",
  "key12": "4BsFGT8asxy8gSJEHrTpsjfvbCt1CGmjTrKmyCsTfqxG4uRc5BgxaxAUA72hEAaSYSSZoPvaYfyv74cX59cXVydd",
  "key13": "5pafhaWekyDhsb9qogrWsnr5zdZUpr1FgeRu3RaU2jW8EWT37ErrGJLqpxkAhMb1YKrvvc64G7jfUsccttc9Zg1R",
  "key14": "5Fp4qwcKJtZUSXB9P6kJZtyeFsEkfCYuLbE3oXHDNEAGfXAKqXAMkBRdtCX3mETWhYfBcv4G5f9RRj38SD329ZuP",
  "key15": "2e8oc2uoFL2vTyyfqjZThp3gAAJZ1LhfjwqsU8yWuBVCM9zvPN2EvRGRY5PpuaRNLY689sFEkyHk2TPEYBXGnmBj",
  "key16": "3XaQM9fP2qzHzCRUFxsgc23PwkaNdpnG6gYSUeZ1s3p2y1B4Eyc4w2mdAovsinngtjQgTWJwz72XzuPgn8kSupjs",
  "key17": "ZR1keT1T1kLLiV6fYezevDnDucvwuT4nr66BxQ2NZFFXJYm3AAJq6f5xAaQpFxGYm5wSwYxf1akmpAWjrNWJRLU",
  "key18": "3BJmCw1DAvFwV4zYd3BzpwvY2KQT9xZyjqGUCAUCajmiDyw17amMSjhHvWo1TcMKmqpe7bNbwS6Z6ApPXJvLWYqS",
  "key19": "5hXsFQEzgQYHYuh9cYKoRWRvskc5tVra7BxmQuF97JUXrVjQjiKcecdsQvZSb9RS3p69tLe6FJgd7YPqdxbaexFV",
  "key20": "7aeoiXm6WuPov2HdKcpmbHTVM5oEwHujQTnjzmB5xaB5N8YnDGDMHkDAKNyUcu4rkjrKF2YCjJkmMtZJJXewGet",
  "key21": "iHT13WYBd8nSb6Kodmd5MGognKx6tWRwvwZyvvGhejzEu2UkaF3C4JR5BdHQGp7FnMMnSgRFYMs9cXE1cX2KWSW",
  "key22": "5hQqMKKj6wwuZFSD1TAEtWrNmNwnLRP2m3DqQR2tWekWVx3zw47TZPb2VNeVWtCNJfCX1BGgD7t8LbK3cJN2DWt",
  "key23": "4JgvMHdMZxcUKj5wLbffJTr9PsHkK9z1aKHhgAMiwUMKRAkrFbB6yLcu2BatfmAyh9o9C3fo3rSLvNhcbJGD7NGJ",
  "key24": "5Di2WCYbkz29TjSMysGDgE5Hqkqwnr91jHXuHQ5Td6841A5XVtJMQ5KqXwiC4diTeLH9PGempyYCqaV7J4tK3Beg",
  "key25": "2wYckGLfksDdurGDmmWa3JxzEqgBgaAqQHecnNYvmECJLhQAkHZRSx5USuTD1jHJPfub6Rk1NQRLVy8PeYWnXCs4"
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
