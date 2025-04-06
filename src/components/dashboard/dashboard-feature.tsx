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
    "w11AUUJpEt6pCq2yz1QC2ypPRWw2sPiKYGJA87uuvJUvmQRWkEjnZXeHN8fKbyBdvdnCrx5yj1r17RWVGp1Mda9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U7gJb7YaV6aN2g7SxnMkGS8ZCnzxNWrRGc8wdsJJvPi7dhYZk1pp9ucbnKSj97cp7zGEiExmdzB1oPHAjUQsDQJ",
  "key1": "5aU9GrEmzeNydXTLZncR8CWkrVSrBWogMjvtPHgQt776NUU3usP8q2J26TFuJkACH6385bEMBAiWZ4SDwuMxdbar",
  "key2": "48cgztSefZWjy7gLDcX4UEd3QU1Q78sJfKo1ArmM4J4zXBfNdxDN8FjBRgzHKocDVWJ7BHEnADFaZfXcghS3sXpD",
  "key3": "5RqRMMMT6UQcBJbBy6UF9nWZorVKYTcBHTWrcjw9SxqzSsrRx2xX8CBKtv58epdURDnTP82YgpZfZaYBmVBHt9hU",
  "key4": "4sz1QingFSNj72zxfuxZLonCvvEyfLNfLzCaXvTHcJ2Z9bR59yFpXckTm7N9mfX6P6DVe5RQnYHyBhaM7tpaVqgA",
  "key5": "4vs6pkiRTtD1BXiDnfSNxvjQUwN3VRixttP1dYATxCJXZYktbBq94v5q9cdAFfU5YTzj2mHcPHvx9rv5YCXci66B",
  "key6": "4t2sF7Mi7kQhtBS89Lg9EiZ8EedDEKmPsAzuqyU1WRCyahcfQba7zCe3DzuJhTyAKYL34mNNd3gTz6bqs2fgHhXF",
  "key7": "4gLgdhqFYqr3NV7sicdn9haq46JDQmtnee27UuDVH8Sndaz6T3kBxG3YsECoSp6nQLs9cvEUFProtzuTzvgf1s7s",
  "key8": "3LfyxLGMbo2d36Q29YbchrzFhpaVXiwVgLa47ahSuthFMfBY2T6HPcpYLPrhGnbCS17g3tW6CtMGjsg659yJZKNJ",
  "key9": "5wt3sgryakNzUAwETMAbZ7hZnxPSBbMJktx7JoWxRzirnRvGGPJp7QtD7BcysnWNWJmmYMu8tZnxuDYnKwu7ak5P",
  "key10": "3yQ8EXRKDLVoH75FcHFaWqttRbPwxQSjMApiFgcmPMqQy2QYtV3QAFBxgAQtNbYgQGRGL6tfuTon4YPDMgL6XXLn",
  "key11": "3nki88EDteNj14Lmh6NWYo1N8PVr54Nj7QcG2ZFa9CwLAExA2brLKrGxpydERJjvu676o5y181AVJMJmTYcGq8Ns",
  "key12": "48LqtLji4f9fVcirnoBtYKssiBGxbMAxPQRrpuraRnBZip5gqvrzBVLotzeu4ExFruAFJsjcSd6cqTZghSr1eNf3",
  "key13": "2QmQ4tc5Z4wtzhdCh5kmzTFimPMAR8QQDV7jCKT8Cy7A8Ww6cYS1LypaTxeDDBm1SMroWRbbvUGdbsgkt7LRScVx",
  "key14": "3roHPUNZd4cRZcsUfbhFQw3njaq4RPwmWddi8va8w3Tmc9x27BG45Yo4GEPXngKriY2rb5CUYQ5o48Pssss8ft2G",
  "key15": "5xGY4pqSZXoyFXBsbLhjFYa2BNwi1eoG5Nsu6GGDni9YFbYkm5otdrbLKwXNYoGUMpd7vN2f9kUXkoJ9DjcX5ALt",
  "key16": "4ih2bS17TnAEmVKp1avo4AwJGTVkYbouExkBfPgE36WeJPZGwaZ9UTNN4utBhDu7fh5Bxnk13t7Uv3oeJ1wMWNJ9",
  "key17": "31pdTUkijjaSHLhGcumMTFS6rah9aCtxC4oMFvwyTWwvKkadBMEQ5mzkMeetDYRBNH87MFhT8M5cXgMS69noj248",
  "key18": "3zYQhn9Q6T1S4y669SSf2LYaBaNiSKMjjqAQZngzYryeqLyFnrNgvqY9ypi44gYm9ihQ1eXUAxSpm4gPKKdnLWEb",
  "key19": "2T2Lxyy9GX5W9TyV8Hy8KJvGgeb2QkqdMPThND6gFqTbYaqF1ZWqane1JJEoDYMZRZsQbv3RFV8GLFGJ9KBVVuc7",
  "key20": "3dXqx9x6wGxRdA8pBDkwzRc92VQDHRcU4Kv8AiMRiziU9YCaaMVynu59m27n2PfHRFY9wjkR5BFLjuLFm8VGcUnd",
  "key21": "5cptytqUk8iVA3WbFXk9rHEiVgVW7CEkxb7AhGXZnyRJFsToCc1Bw2Ujvqg71uGAJNvTxrnt4WLskpEuzoKkoamB",
  "key22": "e89ZTPgMLrser4fiWXx9micZp3jzr3FeWn6BagWS5CWUnjb5bbfnabLRHWDcDmVUfQCn7cRTknhQdCcpieKKxhY",
  "key23": "3MpRwRkyzaFbv5gnVYW5YEpm9BUkB9fAhhQz7hsMsH6eK5ntCrtqHrY33ns7TDSowJbFyuZjED4CZucUd8ioUFVH",
  "key24": "3WRWwzzJaRYAhzBMhRMuJBQxvgG4ajt6X95U2Z1MmxWvNzLmGfc8Vs4BMJBVhQJjfr82yp1iVzyNasdi32N4pnnk",
  "key25": "5ZRRmZnADnusMJvL5yL5XDiw5rAJpcp3EwmxXXva5EZjqWTtv2f1QStvWJwgULWExeQ6b5A9Yukqpi2Gt8sEixxW",
  "key26": "3jxxSzahahN6oVHHdtdLGGhmQnGP23fEk6HqRHQpskZMYXTLSEq7HeZjQdVabzcPBfjV5ZgbJ7rqDxVJS3UnxW4f"
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
