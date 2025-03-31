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
    "3BitTxDDnmsNA1vgqgQRPWoUKfVfJZ3PwmYFsxFuMNisZy6SJqyjoQWFeiptiNRcuFk3VohrMvxwV7FoMwRT3v2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66d1ygWTzEBtgz9xRWs3FacTmpxTd6sgJs3UwxrDZ3G3zTj6EXhDjFEQtFXheZU7NEi2TfFKjpuHDLQ7khRm8Xoo",
  "key1": "2e2z1QCrosCjgKZ8rkquiyp5BP1A4HzdaDECHLFqHxKCpdtznAfDs8ygKH2WqhVLs41mFcrxT3f5xizqyszGRxny",
  "key2": "rK3MBGC1CQtHqwu3BEiX5j7jWZhShBWTrCQ61E3TfgB8NMXqB5J65qBfZcFWZJugtsLuEGfWTJVBmuw3Kvh3pFb",
  "key3": "22xusJwyp9TAkYofrQJsTCgqrhCUraaKv1GnRZmkrXR4Mj7FoRbNFefWEMtXddhpcuoUSfTqw3umsadNXYoScWU6",
  "key4": "24jzqGkFTTRNJG7qJ7f7WNBRGZTBPhVjHty82571hSzeWHbqoNjUaT9RVw2PsFYc9txKG3dEPDLSGJVxVLwNMtTd",
  "key5": "2aUjs2TGEE3DXRiE5qsJZpHFhsLid9kSZpCBuTcAkYogBy2tnqwtRBBdAevsnf2C1giFU1ppSHkNSvhGmLPfAG7g",
  "key6": "4V3f2qhsBJbwYCEX4K5GmvbHbfEBZzTzMz2ri4kSqFzCt9UYcDn2Mcj73DKPUhkgsEN21Cibd3rJNBhUSKygJVGa",
  "key7": "4WUuSXLidphHAGoa3DDtp2TVDYBM7ycsemPACbBM7NAsKEXfXCCyQZNHuvZrLHbYKmB3Dr7W1QDrhJaZz1st1mv4",
  "key8": "5wzr7i5phNJ5KrxyyJnwCrLTkHBqjBkF3eRFVWhUi9iPaDiZ6dME6RWHLbBdufJNh17w5fM8TovXPSwcc7EZ2Tr6",
  "key9": "5D7ruypNxsTLiJJyXftswVVc5mQ7d9Wv5tnhb5LfjXYz87JcVupZMBNQPnGerEygXN4gX23QMTvUW5i5idZhi7nM",
  "key10": "5n3KWDQuj3UFqRfDsrbPZ6hyu1vUjo7BfRu8i6bW6DTfzM7StTS9tyyzRPJGU95753UUzJMzESekqf6CmQJEgLBp",
  "key11": "66YTrcg1LN3bMGs6fq2NFr7LswroamXhQvYSMNyZwjUjmWbVh5mKH8okBW6FjBrmw8SmjjpdrrMUx9S2JuiLXxqY",
  "key12": "3hqsGmjf52iDc5CTvrGwjAYCZiZZTftdYtRc7eEHgH7BP5N7nqTcNvmLCmYgLbQpmAm2mvVixhpwqheeYKprEtCq",
  "key13": "62sEQSfQaSKpZnksRTBj5G1J1sqo7EUmyJKDbTSVbLejoWQ6DEnk3MiYjq81erASabC1yUksXiEqrkxMUfc8hnWM",
  "key14": "4hahade2YFaz6m49j5r8ZmyEoRQWLLyKvore4uLFELRGT9CVUcHa1L2t3QJBcxWkigNJ4rKoPp6jyKtMXHkFL8zf",
  "key15": "4VgA2SDZHKX94NkGEnGydXHCiHwaUqeJmJcy81iWmUgkhPcPmzeWmZPF4YwGTTt8pomjycdUMQipxcVjYU74zKgp",
  "key16": "yr44U2qYFwVtTaZpnd5zii8pgJJYHzGLKybqjWzdWL7YwqZ1RkPYaBqhG9JVceTRY9MML97oX6qizeUusLRVch4",
  "key17": "NLFbB58Sx5ZbGNYn69c4onqeVW39AF4TyQUzjPToceAXVZGUj5JT5vNRNMk3Hp6nQNcoYcMfqxtJNFtzz1eJwHw",
  "key18": "43Vn3ijqmtfufPZiD3anhPUxKvJ7xmmQ5eBmkyjS2ioyHhxGSMNbc14J6d2W5FGGHPXqj6XER62LC3812HoqJnoA",
  "key19": "Ph8Xzk5i3KZqD4D4Ba5WUaZdYuQfxsM9fRGbqjTDuiPLaqK3L6rNpmfADcA2zDCd9vCwYibUkQ26dsrqpNqPmXv",
  "key20": "cJw73hhod33JPoDWkwMZr7VANQK7pAgifdxzME5ZAXajrxLefLx6qto2znPiSDXmyWoCLnvytwU5bWkqxpH5Tr6",
  "key21": "4q4tGWRfRG6guNzoGmyiaPAHF9XaPnnAfUcY2Ys81ET44urzELmmjKmgq27G7d867D5NomD2GFrxiA7e4K6N9osJ",
  "key22": "2tPiPVmqh2QRW1gUzQKPYWvDCTcBLtaJCRLD2TUqxsdRDhX4CTWk9BUpSVDkJkBxCQFGnzVyXomST8DmJVGeDAk9",
  "key23": "kBcSFj21vi3nCy2gCo9rBB3mUFrGdnVVYHcUkHXftqdoJko8uyvnjtyvxuRNEvzigQR2FDE6tPwYAUpfP6N7gBQ",
  "key24": "5yt5hpSR3FDSmZk7gtYrW1wJnYoSZ7JB2TsGi7iizeKby5qAjNB5CyyTV1uTBnpQwzcqtRXfdzkVPbUeJ5hN2W8u",
  "key25": "5rAS6R3j2bCtpnmhHHdEGqpJJ82W8op656C4fJbLTNqDXDf2VSCVAfXh1Sj9Y9A1mR2kXf89wCNvA6Ps71hNNQvM",
  "key26": "2fWVMXWpmtDdyQHs56gt1WworoPUiDh33JzceSVuWP6seoghfQFfaDW6fh5tDDYvu7AYPBVaDG6e9FELn1T2LFCb",
  "key27": "4B1khTnoyzeCr69JYNtJCW7dyQ5eKzkgAZMfR2HNQKedqs3gQuiyrxptbqFVx5ceeHMYf6NwC6wLkCkfTYRZu7Xa",
  "key28": "5BAW8UTreNwXN2K5CvE61zQivEYoQrCKVRShWcVf7wFtvoZ5Yg1qmF3rbXp6UaMhqq5XAkuWUVj9isRy9kVzzUaK",
  "key29": "66eqMz2oAkhqREemqbNF6zY2FfGSeDxu2XyXS63osqPTowyfoi5EdaFKqMz4b7YmKF51SKYeddzKwKozndkrX2sp",
  "key30": "54PR6g7vfnCxpmgF945LYhJxDvP1JVyVLbT7kYB5JCaohmgnnzLtN9HPnNPbvStSDM7w7SFktkMkJLYUo3XpJcc2",
  "key31": "5vSpPT1vVCzjBN7NgxVzCQEXphH78B9RuBMeCJWGuSspQtMCVqaQRs8FBdhC9iBuGZt9EA4EbJJ3zEG5uwSGNqRs",
  "key32": "VCZfaEvCU8sit1NyXy1gPdzdwh3vcFh5CvAJKsx4RNMC8gvPQKTy74g1A6DYH3KtuiYc66DU16YBmci26qagrH4",
  "key33": "47CKEVhDghvB7fs8vDMikbo4fXyquhCAJhkdwWWgjH9f6G2SzV3Qh3qfwUQns2afQGvALkD4qLW8xoeqX2Z67DHk",
  "key34": "4VQiWBu4FKU72F2p9agJR6TVLEYPe9F3B1CdbutRxE2AJ1L2nDvisFNSSjJFU1dg1bUu5A2TpjdUKXrwdUKfaFtV",
  "key35": "eHKqe9KU8RZbnosAWef5ZEfAuYy576YedRadcc6qFMExsBTHYj4nwihoM3aMibfNfxDS4Q1SzFdeJL3EFNdRmHi",
  "key36": "4HFJDw3ouCxtzTi8rfAqhkoHZ2HVLRsT6Fc2gW1VUkwin9BftJMRND6WnaW6YMfnQu8vFbpAXL3CGo71MY7hmkWg",
  "key37": "2rmmKuUHbxPYndG3edRkoD4QxNijMVs1FftxAtHYz9RPR1k3FmD6Dg9tDRbkLAfa1c7gkjtmLLhxwtySa9efTo1e",
  "key38": "R3HNbvsgeXh99zKUjgX6wxQ5odTp2wEZxkcQFDKbjgDj9HJzEVqcSpUCiDg4iYdHRwgeMCiDzCt1jnva8RLoU54"
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
