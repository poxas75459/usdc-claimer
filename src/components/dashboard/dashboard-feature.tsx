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
    "4zkeFikC4AiwKpGK3aCQSYYVgh7MzEyYixtxTPD8ywTLNNL2Cc6deNkqQm9DExc6pN43Zpba2iiAMGn7dadSNg5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zxNHxCy1bnKc2xsGML9FpuGUxN3BgF4qXviUKX7cdEMxYkqx5rp7AscQR8ajcFV7bjJLW619djYAqaxhLcynxKH",
  "key1": "j8M7PYDQJ6V5Wr3AQnmoGMrKif3zYFCJjHuLT32RnsPu25oQttMp6uWXtLzrvmFhBVoKitWtL2tfm5uwsJ8aqsY",
  "key2": "2Bk6EbVatScZAcwXxvVrDiB43Tkc9xjGyG7dcpr3ecnbSbjtdPHB7irwZDzK6GzS78b6ZYoXfEFEWPHiCqHWmiUz",
  "key3": "3yH4NG52ghLHtsYBacyHPKQqFVm8fGa2ZSYUW7g3kaE74Uqg9iB8XqGp7Y5huhoKY1nNEqdcJHgJ3LMHprwu2S9U",
  "key4": "545ctZimd7fz73BmFx1EVgzSB98u4eJEUYWpedZS1iJheBrJjxDNdCxCWsKAoZW2DDNrvjA5R6BghZpU1skRpMAn",
  "key5": "eSxiGt6wc2z8452NYAmxey11D6KrYXFak7G4C4Mg135W2vGj4zvQVsK3Awx6AsNAkxgrYXtbs2NZQEtgLRcMtpR",
  "key6": "66gnzHFPJUKQNhum4ZvASff6osrzUuRPsshZdDvM7YtLo5bzuwna5H5JMYjKSSXpjyjnFFszuwJiDuSpjZnjmMXF",
  "key7": "fExMpzJWeq6LVize8FGrmZFGkFUbDzDFqQASSmjQWRDaHvEMfFVE5XZcux8XvxMRQCjV5a7K85EVJ52AWYw7vn8",
  "key8": "qPwu2VSW1bD6yFT7yzTf8p1scqXuYBLqqDfZra4onKY6imUYaACCGCyYJgNA3cEPqysLsjaP9AdZQHYKaLQosAV",
  "key9": "ErPQjE8JY9RZu6MX1z5uKQETJr2D24fh6cZ7ioowA6wtuk5ML6zYyktTYZZXtpxLnNMDaF9fE7CzomPTdoGsjUv",
  "key10": "3mB2iTauWdwBqFx1F4uRuqj96J9YrGT4FoiACmNXvDhseTw6HoeHrQMFEYCv61eRQVRtyMiiW6KUTg6ZnyCUhwRo",
  "key11": "5zBtaByMa848ivQTw4875QD3pmdBR8AguGehUAmDNpozwzrcBHthFt5hvv9SAFKeLFVUYseR6Qa5GFEKxRgLiBU1",
  "key12": "3GL7n9PKbrcCoFtTAbBnWJWSBDMdnAcugNzM4R2d2QSHBhqicL9MMKAWbbHVTziqz6EMK1bmqfC3k3ndasS6QPk5",
  "key13": "2LudtXuoPK1367zZ4PGbGJ4BFWmcPgxAxLLgQAWmqKu6pqMGJyqsWtpjmh2XLc4JjksQ5byBYxeWsg2AWn2oGoua",
  "key14": "GSasvnB46kT3yVuJ99GbCjLhobkNDGX19gfUmwr1J2N5RxnGy8KMrDzvtB1vEqZbHVTo7MipKfmg761fPfAXvxx",
  "key15": "35PNfNC81eTM69vkKadTPabH6JfaMuN78pCPnbb738i2jbeKT9mAkFCGancEdz8nveK1iQ8QXNCiDfz4eby2TtKs",
  "key16": "22BcbLwBxgqkM8tgpQqxV7mfKY7KtW3GyzmSNo3uYx7pdxP9kQ6bPpCXiJKDDkmtaBCeW3RXcWrBu89juWUsu4iy",
  "key17": "46hrtRUyVVQ3vDGcZnbrSrhAiHesRqGsjbbG9YwV74gkQMXEEopZBYSjiXZLvGXyUBdTaUZ6wDRVBHbFzGpwKXhY",
  "key18": "5DAApZMBXRCcns6JR5MqWa46rpChdAXo7xBJVmCcViorrrupD5M3zB3WK4E7CBDv2RQcUXSj7yanqBpqcvAQVD67",
  "key19": "2aaNQTGoZYXgoUyZowmRC5kDjn7wTtYQsxXt3v4a1RRnNdLgMmCPzG1w8tnBxPP9YevHb6MYQ1Z7nCC8khLybuco",
  "key20": "5Fz12o3UGKyk1vf8NDpguqQ3qVdW2QJ44oXvxVU39oxBS49uU4SgfUxPUFeaweSxURxfwDDQgQXyFfFEjdAMd2Ye",
  "key21": "5C9YBPH5pEiFwsFipDRHdXgkeqi33Ahbor2KbipGsnU885AMNKqA59jAMqUqUK19THeUor6XxtttR5Ph5du1DtKZ",
  "key22": "MBJmSMkzHLTsX7LPBknC3rBZDoiDmJooAUm4ECajHmGvWjJrnSueewwd1rL4ZBcK3NbbUyaRUbsbhoSWh3ARPDh",
  "key23": "26B6anVNVJZ2H5EyRp5EbfFGV5bZPwShEwkDk5RTtFhbe8hwipvgACKjhG3QkrRWsiLwmYaRhQCvTgRgvNqrzsTH",
  "key24": "5YN9frgjCRUss1ribLnhXsmmRoPBmWJJbsMq8G7NK7oDmpUcYqpGRX6PE1L9nBoYJ2s7RP6owykP2CpYJmoSx7hH",
  "key25": "4Btebg9he3F4DiBy4bkExQuVX2fqgcyWHR2C48Mc9q8k3Tp5f8ZrisfiD9oWoEKTWdLFieSvJvDo97mxPeuLAfvH",
  "key26": "ppFZftka9UDRtv4orccf1V7gEVTUqwzYubTWtiJ4xbHVWWXWsyFrXdCMaFVfXEae8RdT4vR6ui5UW9RXDUXQMov",
  "key27": "D8qLPo9cJMuVvqaQHgavf8ouXN5H6V9HXSdtfamJ692tedoeYSVAwjG2ZrV393KGLWjbn1VPnaFQiHHswNbNMMg",
  "key28": "2SUeZQSr9A6Ai51uwETe3qrMbSNAnv3htjoYGNrDvYDoFRnnCmpBHmnxUd6cAbzxMuL7TmJZ5d3mKL2yZAU5tzoV",
  "key29": "4KVCyh5pCBeoFrfhKcjCfAPx3Smc7K9pNDcBQdACSg8PZgcEWrNQisoL67X1qXjwpGhp5mQmj8TJTFGfWyYY2sFo",
  "key30": "5NAqiVLB1oY7SVNfHDRdoRzLSYfotimEHTawwiHMsU9qk6yDh2LxEX8LihBfDDTDkqoNjrYL4s7ATBJExgdzYtbe",
  "key31": "4gWREobjLg75Q7C7kkbCNbgmkHJeuKKB3fRckYVEHvBLQRoLKyVdczDuhcC5xAh7GeVemCDaw2mKfssuCHpUDFPq",
  "key32": "4ffx5MVHHFBwGhRMhcfUUMwzLstHzTZ5WrtGpmx9hW8jmJf8KPRFqrH8fPkHgdfgkVJqikxcr7epnEZMRdxJCmBR",
  "key33": "2h4ShDYWTFJCYSCKePczY3DGka3DxPFM5ax5DgBtHkBXpoV5uULrQSGXEL6M8D73Y4EFniZ4hWzWrRX7VvWNZzDi",
  "key34": "2PhAghZqpoTNYBHfpxUpkdKBpfXGLx8pGsq9y8fsW3du9rQQ8deycACwBUvnL57u4RfA5YeKT6HL4nttLBf5PSWq",
  "key35": "GgHmFiZkTxAQZzVM7h8CYtjZ1kaGinbjHDCf8ggy1RvZuqbrmQVguvY26Qak4ebXQS4iPuDKAUQjV5JRzUuzopd",
  "key36": "5BHdwCRXXHapAJor4qqCGWvavGwMi4QTF5ca38o4Fr1XJ7kjHV6KGaEqY6gnvWu5fAf4mzPMgkEArfkpWioNqQiX"
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
