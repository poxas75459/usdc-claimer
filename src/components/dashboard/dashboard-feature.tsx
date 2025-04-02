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
    "4Z8Gds9z3qyYKtiCqcmVbpF5N88E2HFYHAUHrCp5hRPLMkCNpLQr5jrG7NKuPA7zBJhSD7BwUB7ZLABA885UeZb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d8gNSdJQ9qx1iu19kdbKwfhU1zakr5Qr2zV7cf467rQM73ymgizMK11EH3rLchFP9maNSpdA75Ke4hJR11Q5Qjp",
  "key1": "3i7aqH1xxLCJTvih9XMYhefzKyQoFqXUS3WgyLKhEL8TvZtRt9nTF6Bz7o3DYrD96AZPzERpKemKDshDPLAKoYSd",
  "key2": "5XkNwvHBHacqmpXHSmG424LfeqAvHT6XonHFLcKaTue2kcFvG3oP9TG8MzYi9ns6jUKMzZmMsvjcs7xBPiDmT47h",
  "key3": "uftL2fzexGa3918S9UCqChWAepiawqu16qpj4W1Bavdib2AXHokJD6rXWdFEnRZLZ7bvJdRG13dJLT352Mn6wNS",
  "key4": "zaaGEtRV8jen96V9Z1mF1wo5VqLxaZQo4xaKJ1HEpKYxWVWDBuxczWUXAti1BGciou52ygpriTPxAKJkagLERGv",
  "key5": "jssPYpKwaS4jfpYPrFSdz6KgWfK3bw1hCWMxvWijq9cvcaTBRzuDmQJ61jE8a8pvq87CWQhtGJ2cLyJNFg89hR1",
  "key6": "3GTMoGMJ5wTsv4KcGe5YrJqfeA4xkfwcruEozyNXeePJ4vUH8hPHXsb1h9cBVJQurtGvYADHJFfS75JajaQu7gKu",
  "key7": "4Kzx6kTKtyhLF3c2vrgCYyX97Wvdqf55cQ2dXxvYGytwXgy88H4KKbkHrWttYiGr5JbJUTUBeQrFrjQ7AH4iDkJ2",
  "key8": "5F26p2fpjopyCBFWmSBBo2XTwNtT8DKkFbBBai33ykxu4JH3FQXraWq4RpjMsjQMRY21jXehcZVr3aTyDY8DPkVo",
  "key9": "5SfkmKHfZ2hZhHTUZYb3hJT1kdgVh1xZWpC2L3NN1fvfkHHC59opZQrMYbc3XpfvnccNGBhLAs5UjNBLbSYeCzWu",
  "key10": "5XUSSF37thYqE1AXjdkyt8azthZwfDszck1TfDUMrqZB7khFPd34j3jGHsw7CCJfqm8awxY5kT1odTxygzQDh1Hs",
  "key11": "4TxhjFzf77JvxUP3eqxUrbZHjUmipW52FAkQFcebrmCncGthyYaKwSJhGZuS4BjireYoJ62EwGTr8oDyCMTaeCAU",
  "key12": "3hWoaZ1rHYzZdGKj7FcozuGYHDsrYv3o1gtHaqnmrz9koZJQtTUVKeinYaEnYYyCuBTnFMi7oKDy8uTw9pM3osEw",
  "key13": "svWzwCrxgDq8HPbK38P1hqTqn3dB2gFURn4zaDEp66qV7ojZcAAfPPsux9BrxFgVHyrW11BpPX8kG7JcjJznHFr",
  "key14": "5gTQtAxbzvJT4Z138bHs3uvdaiPwGXkpFjXfwJDkPvCjUwRZW9woPVM9fwhmkk31eJXwvUjz7irmggoij9uSQhDe",
  "key15": "5LF7TYoXeQgLwQ1DFYveZ6CK1SGVRfihCiFVfWmzpZ6VJZ4Fyeimz92RyuEEi8iA9Ko3vJ91pYA9LVFeJ2kj127Z",
  "key16": "FUWQGonRwKWUqGjcwqrRJj1h82VAfi19KHtcEMphNhZwk1SYpx6HfhBXkMZvX6LJ5w6TGRKqP7LLj9L5ZX2dckG",
  "key17": "5Lk81v5VGbjtziLWzFAz2rv3tL3Kff1bWDnE7i61bUb34Sfyd67SweGTtEktzvy5Gv6Nq1axvDnmLYNz5t3Q7KNh",
  "key18": "4iXfqdZtGkynX5X6WhYVGvSux5NKaB66EbyZVRuRdoLLfYAi32H2zph83DxJmhSdUeUxjuYrLoiTzM73jkrjKaGf",
  "key19": "35ZaUkZ7HeUgkLbFbZHZ1czCGMXXySwh3ynVp57NxZ69Z2HVBY21dTEj85JwxRALHWqDMyTbUqrCU7oo3h33HBDL",
  "key20": "ZsdSfabMpssYEYAt6ZfEN9Bfv9rXFGTgiCXuPtyztzDRam6bEaRY32DrTRSF333Nm9hmcm3HMbY9xs4vx8D9aew",
  "key21": "cxTUL7G1XG2Th1Nn4pRxL27u2to7EjYM3p6WwJW3p7g9iMD1Qw9px7Fo6yVBcvh8Wj8DDwYCSUfM8jPu4gpWdWF",
  "key22": "28REZJsEbhtKpMJRtuuEmjDka5D1NHGhRcYZfNyDPJif4cL4G5fSgeRdFEGoB74GghqSZ7ivJD6y5YtTxvkbfMNH",
  "key23": "QNQXfoYNBQEYLhiezFgGX6acHgL6NUKC8kqxPwLmWxeJ5XS2Zr1vA8BVuc2S1nXLBZVxqTeDs9932Prv4AMSMVY",
  "key24": "4x5s3xhXwC4zTG89bsei8J2rJFLpaJSyCJynW3VHXCANaPsFXBY6XkCCV5CR6fZppxAgPtEWieqCJrXnjGzyabov",
  "key25": "Dos2nNCHjasJJUQDPe8BjFMJ6iGpENzfgH9pAAxg42ezMprk7Zbpwzw2dzDx6CRPT16FX6k88r6VQrmWF5PeyeE",
  "key26": "4cfNq9fG8FqbZycRvaA3dqb8B1mc4PW2u2ap9sfHwwQmf5aTjTNTCAwRBNfndkj5imF82SkiQxVmXC15ieQTrvuM",
  "key27": "4EDUpQJGnJsFnjS3WnCk6A1HES1FwKk6DZ9pCYaWjnHZ4oYzR7iayXHTCuGqf1ebEQpCZ3MQNCadFqMbnF7YGmAn",
  "key28": "2nB8dM5sJhcDPuAN4uSeAdEGMV5JLP5VoLtqkcL586spD2qPHripyzXShSyP9jeKTJsGZeQp7dCpBA8bmKymsbkR",
  "key29": "5M17x97h1cUPnxgmEWQNSkrR6iFJKKjHsYbcR76CwxMFoQ964LrKqwWJ31AdYAsjwMdTPQxZSKpDJZmN6nNatkoR",
  "key30": "3r4qz7PxGxohsRjQ2hwTuVHzb1Ri5nVMSc1okUHakDrxez4g8V2o1yseXxvkvVPNxjLUGCNyRurF7texD5wGwLud",
  "key31": "4wzJiSz6o5fNpvgatraoGHd7v2oVWYk7L8SXbQURzKJYuJ1VvADvjt9sYnvyLSuFRxznNkra4jpQS1Bo6iojQvnS",
  "key32": "5LjFDA1syLVqQRUzCU4zMRP2BGnUS6mbZiZqrYJBGePEjya32ieyoc6iQrX9C9WKSp2RPCZPF3b7XCCpCpBDzBbi"
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
