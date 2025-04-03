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
    "5ok5usJXGMeuDiJFjD8XzH4cFT56GWJQjSMY16bdHHLPSTMvWy1N8MvfDUT3a4XEuSPBYYdpcGL5tAHRmPTcAFxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tvb6zJH1kaMQzkrKTyz7BQbHxb5RFm7LiyGJtN8wdvzUYcezboAg3XwLH1SgDXyYi4GTkUh5HyYHjzgwGDeodMg",
  "key1": "4hCrhdDXBpAaLGxVx4DXv2NDVsm5Ww3k6KMGhU5kZmGodfb766yrAMb8hPU5SRepP3a4nHa7wjsig4zZsej4jFnc",
  "key2": "4qKuN8eaCSiGPTvV64Hrvzm1ZjLnc8YJM5KNruMCDW42WYvFCZTndYWcT5XnfouiR9TSQmmFCrNN3oAnivJcJ7Bq",
  "key3": "668aeK9GVuwk2rHgwdpyXUjZthCtKyqnnKR4JLNV4mWrxuLvE7rGWAr28ZUVgEJ15cPrnnvCoKfqxhn4zE8F8QjR",
  "key4": "3iCfDnC943Bk5CYARpUVm6esyFdpMsueL8g9MtaMgkshaeE3sY1JUYM42CBMhW1uGj3T6YqUvwUYXYFQtuGMYNZ5",
  "key5": "4RJncrxy73shfhnHjQP7Awm9PuXjAHBzs17PeXnoBi7fQ3KA1U7bCydfyP7Ki3zBFt1bcXvMHHvAfjonA8rKEdfU",
  "key6": "5G9YsX8U1aMbtJ1cb3ER8YG5R6bD2JM5LfCRBL4PEKqHHsV9hJmUTqh6ws5EfqvKpXNMvnnDfgs1kFR8QUVt31Yz",
  "key7": "v69LiDeNgPrZNLm7Wa89oM7bPpYkKce6kgqK9gErcGWNPwnX9Q6BQSXpSFAw4Y6srns1qH9FMp8S1P4Yh38FihZ",
  "key8": "2tMkAP8nKkUY2EXzjYkbuXxxPVkQdp26pe1ZYugww7PaguCGSgNDEzDMrEuBKiNQh8pBgduTfnNyAHP3mArtrBVx",
  "key9": "5x1Rn4ZzLFWX7cQ4yPovepg2Zuz95LZ45aQNBCFa5qhhVQRuVfLXpL3xDyhtaFj5aqDSu8Uf6Xfm6Jn9pCXDiwmU",
  "key10": "2EVKTi4Y2MRHDEeFdMT5xGjiL9ertmjbpvfQzRJs7PfRW126yV5efC8WwiKSx9B1xGJmsLt3by84hdbibw7FvAja",
  "key11": "3Gvu8BgLFkYDLrrcGtnzLzWVSaRbj9jQ6X6BpDW456LLDuLgkcEBEteVAV7t5xXtkiyN3ybfF7nrKJcHeTdE6AP9",
  "key12": "2rtLUNMzL6XH6tPAiFqHS6oJVwDtqehoMfLa45xK7E78KKGSZrEN7KRiQaVgFC7LvPwjCK7VeD5W4w5nnsWr37DT",
  "key13": "4punwQGttSTRqmbDrrfDCSkJ1efh7d7FzeX4cDP2Pyxowo9hbom3bTwuUkr2psfmp142bWErXnKWx9CaG1PuwJSr",
  "key14": "5cQzfWkhw3CJ2HYFJFMQVPKeSRBFCuYEEgXY1w2nsKZaCQcAyU4BSSSPiwE38wzNNxdMJTCnGsCcuus2c1VXt5dA",
  "key15": "3xWxG99x2AG3XMXqL6vdHA1JqyQPGxHiqKhBDNWmcs3JC85kCFZ7SrPSJR1CfQmhodrNkLNGvVNsGaX5R6ocPx8W",
  "key16": "4nDiQ8YZY9LpaJ42uZeVYYRiAFJcPykyodsSZxrdqBgy9VqGoZ2iFrWRZLJEQXNPxsrutkKDh7uZfZ4BGNskjy2A",
  "key17": "2RQf7JepzfDz9pHVQVUopLraGTvHo5D2NK7ifZ4AkmotEykNEpGgjDWJmpTRcyx5ktMqrjuzQSZ6MAJ8PfJasVA8",
  "key18": "2swHKMoQqF57rncH8qLfwtrNYYYBut7aFZLGyGmwosLKjrLBysAYRRkqtYLF4rqcZH7RSBQLW1aCQhV1WwaCDpRt",
  "key19": "2Zsdo2DHqSazmiJDm9cFpVgdKWKiDgDVMe6vVZH3D1sZU8vS1scb6B2AZ4irxFKgewqmjFVhWtv3ruLdnqVsDgEb",
  "key20": "5oy22w5eEHzRZsVXc2PCZpoGp2gs6fVqK2BA21iJJXuqzzJ34XXXhRuUVxEbDT63AHAr76Neh3XhJ7U5aNtrGxov",
  "key21": "4Vn43JiXYUTq3b57Y8Y76JYcVHYGtiLBftQLYySSzxr3JfAJk33TykLKruQxBQ9wsRNHvpzrh4VkgTjnsSjm6Eky",
  "key22": "2ZXkbF5xSjZcJnhrfVz1GS7eSXJRn39s6pZJkYRJbqPDU1jgD8PHTeK3rh98mBPZ3rpKeT1ueDBJGHGkHf4NQdF1",
  "key23": "3ZFEex5Zwrtp34HEtMD2C4hXFYide4Ku1JMdBfMhZwKpMrNVvAnLkQeGentu2D5bB4eiXx8C61bZXZ9RQ1jsVMY1",
  "key24": "2LTgh55HLXoy8ct5bActBRf4CijnfQ3kWZ5ektfNi5bt6XPjwpE3qBMpZEn1kmQ2EbaeawzBxt3JzDgoo3PQ4Tp8",
  "key25": "4xtd85HzCoWhFFp4ZwiALj6hMbcTBszr1G5aVeAtZMT4G13LiDW8TqM47so1gFLBWhfmUHPeHioNxHeut18qLbXG",
  "key26": "4FCrcFJD3ZdVdJFDv8szFiw64kp3MfDV1RdmJxj9daEW5D4a66Dkq7eHiH6ss6JaZ2birScrkzKtjUBRME7DHCBQ",
  "key27": "4hBm2BTMqwFsdXjJyzrqdYW9Umusr42XauPunRivq7vU7QqZVd3A9rFF5moFTFQgpnTNSR1TbzA3FtPKU8rktF3i",
  "key28": "23PBkdYmByDR7dSzV8GDzoQ7GZ2aYExrsRP6LBqy8PhP6Wv2oEMS2okDS7XyXULCMMS6Rde5dRgPzEE1QpmMJcu1",
  "key29": "1Gto7hQ87AmaKBUf3onDQdKcn1uT45UjBfjNKpe5wcP7k26KWEx7HZcMgkwJuDqGkWgXezyBCsSpS2CnHKLcUQF"
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
