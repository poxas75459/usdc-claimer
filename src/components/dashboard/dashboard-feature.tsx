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
    "MGHJnLmKfjZ4BhqbffdgP7sPYGq6Gfzbhwom63za7kVUVwXpvjGXo4uo38QegWt3wysUbHZbdeSg3bJWerfU6Nv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vMfhQ2k56njR9bjy53MDk1EybcWT2VcXsK5peN9z9F8QZTgdYyhwDnCk2AZL3yaKRKhKTN8EdgveXHQqKTsZrG9",
  "key1": "29hVC9j54RBUJGMLWeoG6UaDEL188njn2vCdVVxb5LcLLC7UVLXzL9eigxz8rrfps54X4AtQ8YHUKBzNk2Pxfojs",
  "key2": "55PN5aNd2TEHHhKyYpUEJJGeMS7Q9rEBtT67YtjnagpK1y4RdC3FMf11e2TQEWTo3LrK3pYcmH2Yu9p3gQrNazPd",
  "key3": "2GupZp6MPy3DKLRv5jGHuMUUjqXCQMQP6o2PZmTxyhJuU2WLXNjFcxqfutvkPuDuRKjpefEo9nyCTqaWJcs3Zgs9",
  "key4": "p1h8uKuPFFQr7XQtCtPALyCyXQ8a1A7w2e5jhBSvNMCSxCXQbXDqApvuui4jhZYv9J2UQPsjCPTYmbByXnSTA44",
  "key5": "24k41ki17odPX4PCHufKLF2LayP3kpC2AxnHfaUz5afz3PdpJjU5ckfYBfES2yw5oH2g5V4N8iJKo1PaXMvHnTaT",
  "key6": "SBEUgEhH5CPc9PV1anzHRZzbwjxPsJFSkNEAGUnJUKXwWv5rVhejxrXkwBHdhyhFnRoFZ95Rx388u8wtqBQvmwi",
  "key7": "4V6XsL6HMdfNDafFGHnCZtcJViXrA29QUSQFHRMMiomeX6FQQYSWoCcWwdKyYQnVZRwssWUkL7B5VBXANHTy19qo",
  "key8": "7iWry36kuyuAn3CExvp2TQKwRN1oVqx7vTag9dFHHwyZ9dzj5Nt6gmwyu9eTLt4camw2trKSTe1zv5jWrQtPyQD",
  "key9": "k2PpM3qTHm7k2eMQTPmMtZxt6JpQA4CMeUHYTGTbYUfGQx3VxkbSVEaQkmo6oStCJLP1trRA9behXcV8HqD4nv1",
  "key10": "5TftvrSN3Nu6jYyhDCX1gvvzMDumVgU25NMCxUjxuPbMPZHL9EYZHLvfoLK8XMiCWqHh9tHcvhNjWVz9RhEoUcKK",
  "key11": "4g7m1FjhTUEYJdwcDdVhdw5b9EjSbisAWGPqA7hi3adauz6eccFYB6Ajd5pMEQZHsSPwDSXXLWSnxBS3krdPPpsa",
  "key12": "27PaYJBZJxqZfxd9mZJqLCFq2HvUcuuY23KkcDD1fjo31wYpj61CtofJjxmayscSu4LqyVyTfiNKLQfZTb7RBvSN",
  "key13": "54jdQ16L6ZvAPrgiuzkv23xizmDLZnrwgDoiW1YiDZWMLjnzoToYzoQqLMKVc5iHT21PgQDKu1qHAuZArXaSEUrx",
  "key14": "2XW7aA65RBW1AezZn8L9ThkzTA9sZXhc3Kfr7nMJS4T5ufr2XNRBGZJoCbUhL6fAEPQPAJhiEpcUhwhky9CmJeHR",
  "key15": "3S3qP3jFRjyj3ZR3TiwXvkJ54Vq6WjWVBgDw6Vd43TEitj23VoXibNcr2XvJCi1VVveosnFrJkzA67dW9pgdmNop",
  "key16": "384dutisMntRjEjJRfVTsdP7NDVvg6odCYofWPaooLHRhbkcWd5dBvqHVTJk7fvQ1ovrKvdtcdavybZHgkNaGQCh",
  "key17": "8Za8Gm7swYbD3c6kbkdacbQC8s8HdVHGstU1xTkX3LbeBpehacwciS3a4RaXUhXt97nZMA9Dhwci78ExGTEKjaz",
  "key18": "2dwroG83aSZm7nt4MPofK9ksJvZFz7GdmbBLaaYhLSjCeC79M1G5xzzFReYLCFTsfo8DXoX4C35njzJgksEioTZf",
  "key19": "Q8sPK9pu9Bx47i1omGnm8REDeoFzAmQgYMC3VLoV3PuqNxLC7BfpZWYLrrxknqreRHqctXFh9rv5EsSMbFqABhN",
  "key20": "3CdXrH6bsXNw2Rxeb4KzjMRtqmQyE1Gec7582pjQpwNGqKjXALLWgmjQWcaKdum5WEXeuqKmDLLfCSwpes4jJtDz",
  "key21": "4rqH7k8baEeVTndmAeDAQmkKwcbcPMCxZJBmXeCKnPJRRZK5exefawL86nnTbnNqyVw6bJuRFJSHNW66ELhCcKyG",
  "key22": "4Guzq6GaBsenb9P6UK1muhsF24ZEwAuWEit48FVXqBW5T27c9tfGNwY9oygFvifiqxufP1CU7jLFboavXuPsetGn",
  "key23": "5TaWUvK3MwBMH7sf9LU84fhPm5VoBcrDc5RzTHeX1AG2Cg5kH672b5YBABG4yfTVbTaw1eGdgEHqrNsDj65CGkEe",
  "key24": "5FXeRb5ScJWwfMWPQ9VGgYvUqXEkZ8Ca9jt6DZMEjTzko2MepoTMtdji2sbSoVTuacqbkFDBqrkwv98uqNzaLskf",
  "key25": "5wNJqD5xy3VSP1SQCf5LXioHWFy2N6VgjCUCSmpnaqF6daxxYN8JWMQmaD14gZ9nR5L4wKBQ2CuFFzFE9cMzQkbr",
  "key26": "5s4SvSkjeEVYQ4p7v3JQtNZyk1rMDofjDNRYnfkViLg5JRywMwzvUA4FSoJj1asxZrSCUoL8Gim5NSphRvBtBGe1",
  "key27": "25qLjhZgUWk6o7AZ25QUq5RyqnCzUUpnMydNuc2A4n8HmoErdLRkx7aLjfdTUy7nc4LA9MytXsYKZPWYw83zFUde",
  "key28": "42v4aJi3US3H3kD4T2HCfkBeFhg3snx5AiTyT5UVbQQShqsi99WRgmn4QFWbUW1EEKPVCgsrdKV5Fft7xXFXhbqm",
  "key29": "dznLcagPaxr2BH6u8NzHQJR9yQ7BNBrgWeAVzcxjtsNDrmBR6C67dM3ZVPMou8SATf9ZToLoR7FPx1AkyXpQ851"
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
