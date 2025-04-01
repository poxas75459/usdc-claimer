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
    "3NwGCbwPXybetUF6YJV2BHFRkzP3n7ivcUXhkAeohoakpyrJjTV3yfTgQ3nMkPcQgjHGZdye7VhJEchq2ZHLAfHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qFwC3U8ZpTXVvnZFXu61tsxbWGLFseMuK1vRVxPoK94S9cSg3u2eYALWoK5nk9ZMwTU1BZTD29k6fJ765eQw64B",
  "key1": "3aAkyM7iP1oSBEBbKSrMttie4iW2e6jKeFdQy85tjp4hpHvqQPXxaaaC8hp91NwqPyVCbMEu4hpELr5EwgR5o7RY",
  "key2": "4GwjHKTX6rzcPfUhRMvyXcWsNuCPbQmoNf8XLt8Q3tjQnT98g5mbop6mwypmgJAUwG8hQbtWhEcTtVKaD5Sh1ocT",
  "key3": "4qjnxfqSWMQuYKgrx3LZKZodSpa98KLqkvLmB9DD41WmvhduhsyKbfjkZUcCUA3vs4k9gFbBUFsr7r3m8qt7G7qr",
  "key4": "598wvBJhX7xJF7SHKcpZbijxFY46ApPQkLvv6WEgoGPTfNrRP1yT1mjt7gAJqoFXf6NgRGoxW13v9XAnAJtmvhdj",
  "key5": "2r99mB9RHR669NVMkiifwct9sh4An73UJKAgNFpTknWf1rEhn12gCdpYvo2CdT3cGAMLvdhjW3a6Y3Qz3BN7Qbyy",
  "key6": "5APqAQi5H2jMZSFx9TFHWrY3e3vfmNrngNMB5K4MD6YAE27KDKL17gTshcGXrXQHiQbKk7HxRNa3MwjuUE6x7jts",
  "key7": "3Wg3wvfuodb7fKxBHoUcg8twLdsQdDsDx64R41p4LjpRBQgji4jfLMm7sU8BviFTyuQStoznCrXaDmwzd1P1fgUc",
  "key8": "Zj6Me8WPG1MdumLTHNt3Bryq2853gnJX2AdBaHnw9QqoWguDrD1MDwzxkWqPKZMb9obJug2yun5BjP1caiwa7sW",
  "key9": "4YD4b3FH23LtGnyCbzUcx3rpVkAHnNyuS2mGfffRiVNCMbWS6pqcZ3JfN5Za1CF1ioZKgZDiAS6vsUVAejhYeYfM",
  "key10": "5mbpY2xzCdHRW4y4VZM9vHTZNKYErrXLpUfPsuiiMZmpMkQzqs5FRQD4ge1fAYiahLgwrXhXrCpBx2KPEgDVPyjC",
  "key11": "PS2z1B11rWtJrZTgC2C3kifRhriRS5qERzExpspZDEj6YetALh1c8riX63CmUa3b1E5LuW9WiwK3wMTjRk6cmPP",
  "key12": "2sFDT2ACnoAMvt1NbXQHeSiNWx6BYcbSTM5fDnLV2Jafmp7BAmKQH8R9xWRJCrDHHebL4qPnywPgrD9LYopxApaw",
  "key13": "5To1EppWooDR9j1KUxCwmR8LUzpi9XieQyLp1GUSmSfMBEyebEmFr1oK2PJ7A9V1WLEW7A8tigWJqn9Wu1aQjxkg",
  "key14": "2JYY2nR2ziYpkJCFYtk8mrhyR1udkYYUkuZbcWrN1xp2zqWy64iANCEw2vjBkR4XRSHsdSaTXugNS971e2ja71Ua",
  "key15": "3QNPpbF48Ma83JrbADyThKAjrriQS9iwTsr9fZrgJQFMRtYnsc5pSTPeyjyNzJeHkHrBkW2zzmbkEAS5GJ7KnyQ",
  "key16": "5at66AKFUFQwH98CDMmHPrPef4ehVLpWNTp5rQEfXuGpXRfNrjc4ZSHrNXEr8uMH8qtPRfhDPHXWv4DgYnpPAefE",
  "key17": "2N4cD2dYBaSKUs2SfKnZSddPhjmWVETFnQup8k5RiVE28spzSBKviefV6sftVgGeRYwkRHUoFcSmhWYxg4Liawfp",
  "key18": "5LJCyhpLqhr8adEAJzMQC6FJMqZToWWjKHKMhaWYEdwjRP58NkiviDmotpUk71rtHgEV7L6nszYSFxSHmMktjqB7",
  "key19": "2cLvrDQpHZyZdvpkAydKgFoLGMn1Y5jEZxTtEFLBY2NGJHpm2E1tm8p8eMgtBUg7F82SmB9fEmPmg3wUbn8YZ5ix",
  "key20": "5bT5rLM6gwnwfvVFonv455KbaTWcvJCzje5Pej8f7EGVp1h4HYpiWWYbRmLsCvowkLw3kjsruVoL68UgHmHF1Jbu",
  "key21": "5HYjzqpngxEapxgXAoADbsRpdYCxM1QsER5rSzfvauSbdyjSnqZiedkpGoZLsmnPgG3vm1Gw7Ht476p1335y3zEX",
  "key22": "4XrvEdaND8o1kB6JcY5H8gCHMqFbxFs6HTgR19447ciJ1EqP6dRy1tQXovc89h8hWqK2EXYkAAeBxAPgovPcehXf",
  "key23": "5M9JRs3C7v9NN734JZkiQg2qkocuUzpqihDqDwQ3XgXEjZyEcj1F2xS5bMu1G9HLtCyYsfymzmo16iYDAexdntJ2",
  "key24": "2WhTm5f97k4XXBpYDLQhQisQqmdBwT4BPhNxXRMkXavr5vymRprurZeUN8E2z3RvSybyJ4WkQDp7JwRUiNws3vyG",
  "key25": "39KE5X25diXQmqUbCebfP5fYGZaUhj6xyGtCNMzpa8vhp7WYdA4VUK2D1BP3icSkZ3gddWEi96fCnVqSUesQgJKU",
  "key26": "HoZpg1N93ZpTd7iB23pe6nhpwsvKXxL4CaoTy98fgAXPLkBTnaKuQsskFHoZMQJukMvMiqEZMPXTk5r4jd5Btvw",
  "key27": "5UCwGUPRJtkE4WU8jVPScRfveNWf5k4zc4hK3ZbyJfUYjZt2LhiFJiqRESLST9deoFFXYCWU5FboqMoxc78BLToW",
  "key28": "2Bmu3BqbRBukTgAA5uWkUFBFdAozX6fdPMRzJjHwttK8pThwCpP9mZWQJvjj6KzMQ8E9zVMwSkHGxLwTCwwoHgCZ",
  "key29": "WFoU3sJEFpizewW167VSiM7V3wZYZumU6GWZr2Y2RcmzZMNWhBKGRDKGPoxGmi4rv3nwTqcgmo3AkXMxjygx45F"
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
