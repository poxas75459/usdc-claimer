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
    "3s99cp5RyWQnKtABujX2g2vXhU2rqbHAZcKmEM34aFDL2rdmcdvjPAPMk4e93xw2Ts97E73wHJyV2MisaMDcvdrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r3wTnGbWenmdwDTYW9Ta4Jwi1gasH2ooPEoHgP6Skt42ZHud5HggTKC7c3KELuJmMe4Shk8zFm5DAJhFUvgL9Rf",
  "key1": "4m8Asef5ax2hZrTMGWdGcr7p1ZkbWVFQKXCeoDoBJJhih8StbVem4k2zPqUtmvgrRXWT7grui8H7Vuj1rhjkC75x",
  "key2": "22kkBgZ7okpVhXrW1CaDVQ9kD2Hc6sG39BdmRAoYYDa2LeergZ1Gd12iG3meymj7y9aFmKK62zxtVinHAYButRoq",
  "key3": "3G3sFSvH5VHmx57aYo2G6ybw2bWXvX3ujKp4sDXkmB6MRCSogQgZU9L6bRU7QTE5bQHZQiKcUFBUEVqPrdNsT3ir",
  "key4": "jB5QXQsezf9V1FwpjdiYuu4nTSvVZVZPbg4oLYiPwf7s8K4PmvVkB1Sx3uWRF9pmnQnEFV9N4H8o2rwQCTUJZqx",
  "key5": "5N5THrNq4HjPS324kafgFPiUv16gEgaARG3kCD1HoaNCEzqcKTfR5d6hHqLav2xm9oefpKf3iRFGBAEBDZnNAbb8",
  "key6": "JTZ4GZVDCKCwUpxa6XnjNHJ1Zog2seLrwfvzpHDgdGxRKNh3CdFwoZMfG4dydec7r29eAZ9XRRhREUJAmfxzcP6",
  "key7": "3y5FgVT9XdAZXxMduBmqJH3mCmnGAZmKw2b1NaVrE4w3LdswL8ko9LNwJrhF7t3QRxvbj5FBLbY1ELxfiquCsNwo",
  "key8": "3eSEhZWt7ZBmmfnnHuYQQYpVmakFZfvG6u9y1NWbze1EzFmXtnoj8ybEjE2HEGugfwGP1dsjPau4C5jYUtHoxC1i",
  "key9": "52RabzjrEerHiqk395t73dhGde2rKU4SzcHLrdGmbAgmvfwEXwrTQtU3dXnSDu3oBfw3Sz8S18hus6wQZzV9L6KF",
  "key10": "DtzGZW5Jiwad7LpRrjXg8HMqzZYNXH2ZvLVhC9moJXjmYHDYZThVqr4PH5mHQCy61veuEdav33FgfbFmG3jVwmv",
  "key11": "5TmFJTyM4g7NkuE1thzeiomeeABk4UmAyvpdsNkvQyxtvnzfAsu25QQVoHJ2Hf2MLyB6cm8juDtq9MsXfHtRUfCx",
  "key12": "3c3tAMPhpxGA6wzH5wUiTFYWJBaYBezFR975zzKHtW2nAjWG3ZTdvkVk7RQKR1bjZtuvjAqSy8sR5NAdfHBx9rJq",
  "key13": "LgooDSS8YnyY1ofZKy3MsesLxyGUPVLPeEG3ZZhATcAjauLgyqcwmKTvyeFBmiZXYsdv7e9WR4CsyNUWwVrsWMg",
  "key14": "59HTyv3gHdA3p337thJMoCq4Zchbvq58eYuZevEGASTDosbS2oCMFHkSvwNYftCtVuCuWCSWnyhEuTdon8EmJjqh",
  "key15": "3vrM8JMBM1g981HTSBi9mjSuN68yfpMehCtCpKfbVMn5TqzoHWouNFjqCQCzhcBkquhNx8JvHJYkdiiYCd48naPN",
  "key16": "4MAzFA4uoVEjoi3E3iZBU6DU4eKLbYLbeF9DLFEMHRpG5RghJpMrz79TH2tjKK8HtyXzsxxtUBj4tm5uus1fNNPY",
  "key17": "446sXbJBBxMBQbvxTvRKKTv3hbK6LkYbXPT9NYhvKbg25NXkgPXqEDg7dAmSC7fW2DCutV3tJFviThD84zJ25uYt",
  "key18": "2ckdsa5tWwkHPZVQcQdxMNhQuSmyU9kM3STNmqR9v78aVRwWfDBE3KqDQRQsZgJrfDmPyD8usbwCfgQxws19iCNz",
  "key19": "4tdSPvgvVkYYvLeUCyDMDee7pAtKAar156xTXwG8q97rpKLvh5Wi51LvMefhJbUiLSan5dZVq9bRUA1D93fZytmC",
  "key20": "4vMwzpKNjBJLuDNKQBMokPZ3civzPjcLCb2UVhnZzxDBnBK2ncR8iPRrn9FejtPHTA3kHNYVFcc46xy2dkVSKa9v",
  "key21": "2AxfxBCRQx7xU2ophKgPp4YuWsxJ3iYoCCyehgApM6VGqHVZvWGv6zxUcTM4VVkAoRYtwaVAR1Wb4FscC1tsvkcM",
  "key22": "36cm761YwrawDAdopqpy6a4f7BBaPhrc4FKHpZwckhtgDaoNVpiqTyV9PrJRhmgUT4A2fW457BDga1VBpejyjLxK",
  "key23": "4wcaM6vJhmuXjYLcVsq8fnRz5oZyPgNXc3Pqc1D1mVby5ns9f9s9ZdHAUQXrwh59nfWo6sRvPZ4vN7burRL8Dwuo",
  "key24": "3w3tzVFUtC8YKLZKjPRrNqgYyQZCgq48B9vJPUBnDuPnQtkS6HKba7bVDZVi7cJdNFLDvCx4gro1S7MmKApHc1ys",
  "key25": "3uH7cinDjQgdr5mPahCjq8jx3yB947fRgmUUHSh7Q3ZvF7fNQEsuMUkJ6okRuTJmgDdASYDqvafXJsi2dGF4TRiR",
  "key26": "bd52DgR5a7KfUuj8gDCpP9EnpfTMvDE24gF4nzz8e8obhRGsPLUoGU5EkNEBfWWZaenRHccXGk6FsuRjoR9HQqo",
  "key27": "4LrXPb4JNNJFAZ5QiypavthDaecSkuD4UxLemnTjmQpWXoqUU5fvzC1kiw72SQUnwxbhKDCUz1yunyz6Yn1a1w3E",
  "key28": "5Sckv9xYcewSyqFVg163g6hztevNBJY3mM8g9MhomG32b8kKF7B6m4e1PRWSCaAJ3JqYiqc4iECvAeHbNSc8zfDv",
  "key29": "3dRG2C8bsqkV7ib6pTzjT4Ktordcijw934pqyuC5aYcE4pqZRoWJ364EGNFW9pBsXGX2KNR42jZep9egARrJaAHR",
  "key30": "5e17379ubDGix6U5K4qjNBqM98dZsHRUXhXnDSSR7FA5H31pRqF5NQtoGVD2YJZgSkoi9n3R7eHoyR33CUhPVPCy",
  "key31": "2cTN6HcN5pDiyKT4QaNciCqygzadi56K5mC9VhwKj8LdrUZPTNCbR353Y8zGzHiyMechWKToega6y9LXrGqJTUp8"
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
