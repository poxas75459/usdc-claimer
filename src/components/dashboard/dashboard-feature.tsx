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
    "4Da3ihW6vrRs6xf7yZtphPAJox97KEyPVhMNzVpY5bUFLdJa2bdkDwez4oT7UBipdwyFHg7hMW5X61sqNh6XQJmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dCpRSudS3zDQankMhWeWDqx2iJbcWF9XzUMm5W3xsUEwWoSomoc2bPEeXU2VQaKJHwZowDXDFPkqbCCg2GJjbDZ",
  "key1": "2dAQdQd6JNBcokcvSvKSBwT96QiC86EKcSyHfovuqF6ccRfP4obHeQ1DKX69kpsKxN3sL5FBUTXjHkppCfv9Z1Sn",
  "key2": "3JfposbXoMqMYa67KmoTiU9sLKhixmceraqKfmunng7Ld2kbWoU9MyzHS3HHD9yVJXP66VRppuLNxgfRNfMjuFtD",
  "key3": "5AUU4WVsGpsG8bV7ZLSjwJw8ZRc3PmMdvZDJ4knYqtPTKa6CLmjRgX3aEaX2LuKgsExDxbmgjHPrkYLQPdpGEZL1",
  "key4": "iYHZj6xxXS3x9UQNBK8NSfo32wCbBsmjw2PSaAGEYe2yGcd19oH39qk1QdFyNc1fyPBycUKzMc3JbLN5LsXkety",
  "key5": "4C8VhozUd3KREXMuyCEZg2VdMz24vK8zZ1g3Xpkvdb5YtycGETU1ekeXc3cch7cTiWJYxctEoM4i97YPvpbKtNBA",
  "key6": "26UhbinujDHH27JtKGMXdsv2PFCER3eMHVEPEjLYHiVL5JtMFCsddMvZR5vfTJLtZsxb7Wsi69XgHdg5KjsPKPL7",
  "key7": "58qcNW14JD8sLmHHcrAWaDW8uM8ZaMicjcXdW4gU6oyFqUoVqc7gA2XEVzmNLKtNfJSAv9ASTYjaM78r2pE9gV6y",
  "key8": "5e2emHMU6BKDY35H28Le7Y56F2HqX4FqLUfzRAEybYCeZcJ9BUHWiGU6fihd1AGUJ3mNqrBJyZms7N8A3X96pddK",
  "key9": "4YXuYZtW6eWeV9PWVJcL4ZqnppUx6PhVyXEsfmHAZMrpHPzWE4isdLRCAYPAqCJhfyR31jox6Vt4hZs9rrunBw2b",
  "key10": "Ht61eoWDmgpFxcSoaWvxXR8GK7XDiTgLc67f39KSy7DDxZ4v66gFCFWGDiYSqK5YMDLKJ7SBjWSztJC9YK65QZX",
  "key11": "3PsELSDfsekinubHJxp6G1Cq3t14SkX4aJr14UTKRtzg1Frd6xtMhuoyurnmkcWS7mia9iPTDPZrzJc3cMewWkLR",
  "key12": "32bLgRAEe4kQQ2sPwgUrLGycBXgEGCeTpD3sZYMmVqSyE98HA6nSuuqH1m61oPbopnvcV48hY2vWbrp14Q4GTPpy",
  "key13": "38Js3NLzdM1EfDZzEk5gqtjjcqZQ69vfkjp6pgXNH56KhsoCjusB7hMduEQdEUXDjSeywa5MUmao7Nt3mMvz7UH9",
  "key14": "MLr8aeNzqwLyoVWyjbWmkNYdNwgvnYJE9NcrxwQZq2KSZ5aDMV37qbuJFp5sHKPSkyvtEycxrS4vf2KpsKLpR4m",
  "key15": "4irDGkELfw4z16BxW8PpTsJHmuSa54bzjYysmJ9otCy4qY8nuZc4i5LhVAJecZHKrk7Ub7zN3GdxLWhv2tSAnQvp",
  "key16": "4ReUbHQaFt4oKSRK2BbdW7hioTLyXtzuPbchW2n9fKD6839tigD2YSHy8zUCjN1rRwBET4ZYFvFHwF2oPeFDDsh8",
  "key17": "hR5VU9czwAQ5b3wdUzffG84c7BL6pmTqx88ZDen6d5xL2LBFBmArFNVzyrfQusA1LsxCdJdZo2W3wvb7FfHMxdJ",
  "key18": "DzinDJ89L8E4dd3sPhEi4EA8hkVCvaQSvZZYCTDdD9Vg5KFhuzBJdzuwh5MaBB6gQiU3ESKYU219Y7meTYutRAP",
  "key19": "BrXHU5qFgkJ7VzNYYHSL6WKSRf3cPjrGo6L31dnqx7EJ5TQViTmjJsfjUdtnZwwq7UcKFDNBXPE8Vn4iePetVob",
  "key20": "31SgtUcogK2UPf3uoK5vdFwjBSZzTXjZoHJ8yhqUrgPBenjjTSVbCuvufL2mnLafQHcok9TqpqFX7T1BVEMgQBtQ",
  "key21": "mXZ4d6rJoZ7tzyUvWCstazY1G2hKwLvghVRUh4iwwuaMUhrMUpqEfGN2F7BJWwbNoJBV5qHpVFZS8TBarkL5vkE",
  "key22": "3DqwApVgwPzeTjH3pN3GLY293CRFGBWkgBeLzsYKapiZjSUR2Vx1nEQgwxT1oxUis9Grqn4aE5Nk1UrjGDAedQMq",
  "key23": "4Eod2N31qCUZyRtqmzHBvqtnXi8zCLuYqEcQkNaNTiPExZtYh9vdNqLrddWZQQtADSjznRUrRDSyCjKpiF6qbxSN",
  "key24": "3Abkf6LKKDU19yzqkBbemtMfzHZRhhma6LbFmJXD7njSHSveW7gAVoEaw26jSY6MWTtRuYoiShZb76swFZdPG69o",
  "key25": "3wD4rUYp8mEGUip7nFL2hGmyTkmKKnjm8UowsAfRfYDLToPMMaYSKAryRbToyWt3MfrTnCUGk4vqxrH1YjJkqoFy",
  "key26": "3MP4eMUcrMVcB8yC8M3mz3ijt4UkGmkSGhF6KQa1sDyAPguGNY1MyfNyKheTFEELaLdJNnnj7c1xiJBuV6zVBTUb",
  "key27": "66YyvaYWPn8mu1sWGzm6PPHz5EGiKTv3br7k2uLuZ44xtu1bkc3ERf36coEQ1GJDRJR1unDjoDa8AhDvdU6R4Kef",
  "key28": "5NdEvy5ZMbA2kiWwNce8aG5yKqzA4siczwncngqAr8LfBsi76GzD3UxPxobo3bLsdPHqt9JTfNkkWBQUELxApg4G",
  "key29": "2yUPdS8mEHJgwJDSmm6CUMpYPw4U64UKBAQGpW7CFUiE8FGcjFrN7BkmoLa8ZGCMNqwxtA4Zr4Es5A6BpN3Q74fD",
  "key30": "4q15aNE4JfqWsG15sXAgrQ3b69Vr4rYzeS3sZmcHQcBmSRaqTF7aXyTaFtcYTEXCL6BT2uRGZ7e9yqHjo4fRFif9",
  "key31": "2odyL4ZFTR4LMxwrpAmihe6JgCLksgBjeaLYnSP2U3j5Mnoaqn2XR7RASHPk2mpAJVJWFGB3Q9vaAHiobtJyGQ8W",
  "key32": "3CWhKX926TwGTVjHsDTC7uPpkkDGjdiQxmw4i6v1JaWVqQVCApqq12g58FxVnYQnEzhg2V47HVmAqrKq6GB16KpA"
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
