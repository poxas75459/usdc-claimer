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
    "2ESi4FaM8bQ9DjBUgNJ1VHBciVnDDk6xLpBAJopJoLrauyNV9fs3FQZjnDXGLuEjS4iCeQBiisNbNJ4rY8iBv21m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i1AKBEjjEoLbxCQzcDYYczRwctK38ZdyLPfQ7j3nSMJA5N4xcTfwLtsmhrouqgcHs6FRsZJeA4PCBsX7cLF5Vf4",
  "key1": "kBByLwWzUFzsSPHjZDadSn8Huvh3CDUxR3pUaVBF1qXceGkW3iTEtq2a6dCJaJxtFKvmt7XbWSSUzZT3jUaTQyV",
  "key2": "2691VDRcwfh3oaKjTYsu7r6L1zbW3u67eQhZ1Ncq6hthd8kT5yqYDZd9arKpx5m4exru8JqHbVvww2WJbJohx6jZ",
  "key3": "3F6hpm435pqY59JqUMUuDUxe6AYGVFwg3bspRfqneXoBhmoTXaM6PTzyoYSPcfbZW3WqEgYNME86afh6yqqYtCUJ",
  "key4": "3wZM9cVhV5zjyppdGVXpVcVKWYHPJBhLRMj8XJDsy6wB3QtbXo2jHYGFin3M3vgDMh9Doz948xHEDBJ4RXSDY8Kp",
  "key5": "534CWV689U3QFXMZ1ejuv8b9cLRRJGjjQnQn8xxQjQtkGasaGpYXfSsiAEXp3ataPHkXSNadZiYe1ca4oU31SD1o",
  "key6": "457uCHdBWtPMXFt9UQKHJJMQoRkJYkGRC7HB27VMKc2xJDMMRQ72UNkkVPuTo99bxEX9wZXaTKihzwr3cZNqaBao",
  "key7": "2iaQnxFbi2qZrTXmpvdksF7CSF3C17QjXyNqZn9kTrSwNhtzqyieaMdnKwBLV1usybe51AnkKEt2mEGKcJKjzMzL",
  "key8": "3VRApAmhwAZjmYW6ahGA6AMUDMXArEST5PZxNgnH3ETadPGw9HP36EnN1nh7J3G6UeZnGXxocWaSxdw7kHX2CMSG",
  "key9": "2AYSrhe5Fty7L4pex1oEaPJw18qywrTun3PNwz9gJAbzX9HF6gGimTkHyMXQeg1CX4bPT9dvhgX9mBfyfEaYXRH2",
  "key10": "3wWCyxd4cVSntHdenuaduKJ16VHuNUKCJx7iwTuuMpjxG4dCnCuQwBTdfZiBCVwcWp4x3FJrasvYzvhJj9LDzcqK",
  "key11": "1K57zAUbtBjX4byVerWXUDrgNrGCQkeXg4ft14bxx3sqbtAcWKryxz5nDiUChmaEDo32kGbfMAiYcF8UCto3s1D",
  "key12": "5mzDWuXGVt1Q8EACF17r4WWJeB1df63ZXMqTdKvu77uYJJFi66hXeCR3SMHzaogwjwhbWe3icScdEVjLuiq8jYJ6",
  "key13": "3kK9qjjysrsHaQCpNgKLXJBW9rq5hUasqERJbQXSp5rco51AsUqviCUKNyrYRYVWmFamgjiEz4wsecwZwMTc8aaA",
  "key14": "59TWtsJg2bPteHFfN8uyMdznvki3JYQFpahidf8TbhRdT5ZVwqC2MqfvbdCkqDdqxnHjPo7ALQ82eFymvnRwdoab",
  "key15": "3Cm5NXyvF9sAW19hR6zQqRt8i21VfLjBKeEDvbgkoxCnYymGfxFP4X3CqBWEtCUxJxkYFrvjhjjuHLLoBCFcV5Qr",
  "key16": "3w8igZTgStR3sY4JuxRfCFbT5RimVS7Tcp22smXTCNJ4Ru4fy4bNSe9H2R1Ux46U5hNrQgdiF7rx8txWqmX1UVbR",
  "key17": "2GxYS1Kx1qMN2uosuT39qbafpoSbUFDcyC4z3RCPGEe2JoWKtEyfKuEeXL4ynLPQtQQzQ5kp9CvECZaWYDpx2wtC",
  "key18": "3cdNvsbyj6xeNjeP3a662R5XETvYFZQUHiEmKgq9UY47Nv4DU4pRnE3Z9wXavGSsHvkNy1RmszQarfLxA3dFzRcS",
  "key19": "5cHkxqY9dUCRrboGx9zS2HTyw8hr1fZmSjBBEwki3m8pNtTiXkRvPNhw7upVMKRNFD8PVHX7WqDHAEqChwKzf5sR",
  "key20": "5UMTj5zik9qoQy6eSyQ1bs6yPZN6UTvj1y5RgptXtBeEPpGN8tkrJ3c86VBQEYhVNBxhdtKtmry6ZNf9m7M1yy3W",
  "key21": "4gJecY32fEjRGmFa3WLw92AU7K3grn2zELQYaCgLBJXoJfyw6RFtV8NQibBofstp6SbxnG6P4R5gu1b3FP3kz9Dt",
  "key22": "3KXSjMfQgSKCLkvpYM8hYKFdaJWg8gePhaLXJETwqSnEepn5PPdZDCAaeyTQPyktF4B2fs85Ci6mDE5F63Ewvw7V",
  "key23": "3gSWHAFfJrwgoVcpoV2cyLuHbvzohq7XrsYfW4tpZHsmvSrLHVftDj8RaBkzreGdVnvES62XnGNZn9EtvWnmDHjo",
  "key24": "4yr8qeUebiRZUJv76y3T9y9sAv2hKcFv2VeUMFYk2LGKuSRQNWmkaq3buQs3RTm7PBdVnAhvWNo8o4kK4QE3rgbk",
  "key25": "3JEuw4237i36WiKyhpYEuQ6qAsvSB3A1BgoAhnskrngabeKNmSLtwypvhLSXr1i2z314k3eoDP5fWtY7J2nyy53M",
  "key26": "44gbAmvNj7t9YPEtWZLZ61QRDsjrTycT27GR2RMbejGvw7BCEXE5SCd42Fe9rHySNf7z3irKsb8b9hMCYt1MpwaY"
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
