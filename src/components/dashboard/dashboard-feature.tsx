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
    "4yw8J5f9q1Wu5esQFLGiyr7JxctvpeE8PEqBQZ9bF9prvzXzC9Xmg7L6MgmKeQrPnu2QoMBef1HYeU8eow3Royjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lsu4fs1sMspshjLyNoPmhjWCFazBM6ps1u9yLHv2asjMS6evEyi3gEDLUtx7uN9EsMcY1QSgHtRfS3qpUAKLREL",
  "key1": "3t1DT1LiSjyWFsjNXQvmDyoW2bH2YFzgm2yj6td5p4sJDhPhGcBKyUhaTs5jZfzJPS5Yo6NZRxcF29wGbdECr8NN",
  "key2": "5QtcmfxFFUi9FAsSPmazdeHrnd6ePRUqxXoEYYebsY2azprXNYz7FGv39pEkgYX8aFc41FDTy2B1wp1K51WQuuxv",
  "key3": "ccq5s3iTBHMLP9uVK9qiKSZK2wvVg5LESXMMNXwf5dAPKVP6w7DNCUipBj9ijSNDmxhoo9UmaxnUbotzwHJsWTX",
  "key4": "2fuAgEWdMznh76dbioJsGqqXXJ4wo9CJp39aRWaYampcwHmxnCJC6iNCV1QbEyDXSBBH74i1nPB4yre8A5Ysxw8p",
  "key5": "4Jorswo43bzqEYRJdTcn3mQoE5zPTdzws91jppuTSJbv81MbDFrif3NnHhEYYSpbMyUjTwVJmeZ3srKCbDhBgyKt",
  "key6": "fAQUUWr1wPSckUM9QJb6zwy8reRb9xgDG3VHWwgyKgw5qXBzh5FCGoVA1uxdCiRRFEVnho4vtTx6JizgqResVZc",
  "key7": "623uifhjg29jKzh1BDxE1yZXRs8Lapdk22CnpQXniti5gwfyonuCQKnUKpoXm6ozSnWkz3uVwAeX8WDTFrVYzw66",
  "key8": "3SvXa933LuondUA9d1sHnPeCxKRuLePLgfZ2dezwnL9c8FXbU7DaDAg5vo2cHg8BJd23RcrbKDBhJz57WiJR56ay",
  "key9": "PmasXJexkpgpmrdPEvKNGHnxCPg5bePp7wDXiG2B6e3N91SJtpWGifqc3dpNo8HsrvhhrXEYv3AZui2KHh3JHfV",
  "key10": "pjhbKw3eTXhXo4omPvMu6tBu8NcezfYT1zgWPDdCidFyssCnc37fS655t9cWdD22CpTseGoew7UV9wvigyZzbiV",
  "key11": "34MZb6Vqa9SyPLKfh2A2HBqgGFhAWUYuveGYqiPxGPASvendDgmUjySj5YNisdWt4zYGXQy7egHj9LPrUYt7be7g",
  "key12": "4PBDxWm9JHojYz5eKXb6jDzuTXMz3wjQYngAky1gVMBG2gqc4gHyoK8dDdzVVYYtzF79Tdw4aqeuZVssV6rYvdYw",
  "key13": "5BN6RE14QdcZ57KDceP6xSX31xuXUQ2R68A3tgwpzuW2vxyrNmBCCfAsahu1Z1FLSNmoeFvDD2ya2PkoYogHaq6W",
  "key14": "44aC4a7VFgAMaJabDLjd4xYo2xGdrazXdoa9nrMvEDM3RbAgdphQg4xxpaF9mpmDte5cYY8QvrNDUQdUbQgj8Rmj",
  "key15": "27ARbQ8ZkNouDW2ZiVULaiUvrg3mEr6QpDNJQx5QNyriTuvbiWPTmbWCvge2ZxMuPFpcuNCHAeK1NdLybnckt3bS",
  "key16": "4nPtr96ATNyo6BHz8f7aYafkFPRsNQRh5weC3V4U6gGbpKJS3bEp9VaVUUpbASecWiTsnEBPi4AW3HZPhjPop4xA",
  "key17": "5HnBLEDSYqPWYUxxXXeT82HemixT48LmomGULF81B8vBw9ekgjANivcGH4L6mFQM8RBGxWty6dpgQ2JbUyrya52h",
  "key18": "5X5KFudqwrNiDAqXAiycS1sE8aGkw5bugACqAuVxzxa6sCrAvja15xjrffszdfhwXYSNrwShcRj3zn8cxNFTgbMh",
  "key19": "3xiFZHjnupYEZ6f7AjgjCzWccgPDXAJ4YMqGSqnYCkSMAQKencU81Dufw9Z7TULKaCXyRNkVVKFxpqa5ATHi1XRy",
  "key20": "2BHvwr8d5Tvpocj4i5taztS3wvAm5WrpUNEFdGPu5G4mc4yj9tRvyzh9XWndVyUBZWt3dsCoPgK4FZm6UdXiFNLM",
  "key21": "4t1qQpxbcW6Rim7eQWtUuYjaWrKTa56BGys8dRk6Ai4qKKmSyrdWeKtDQ6ovrg8QFsemHU4rHcX4DRiArhfGhG4V",
  "key22": "3K8myXGAX9aqtikSPHdHsuj2oBimmFamtbJNr7nBFnz95dnavYeUi8YH49frWQZQcbDfdZ98HRFPYZnAmMYvGH2T",
  "key23": "zLt2KrJ1GUfVB9N14EdyfkE7pCPxvzSR8kYJtsCGQ1Wxo717QdfaZGpd1jkU7xBQW7eonK1zy77e24MRyDfwBiP",
  "key24": "42XG2HANc7B3w3n9XtfT8XERDKJUGpydNasShmoqBRjT6hr6q8ESQKgxrMPoD3xRytcyH7BgCrCEfVejRmYhXpiq",
  "key25": "2947eDcuaJimmn1tPkfdXNo5qjDqcL8jSTKa3WK5vNWKoXY4hNKpsgUWyo7RQnsSwjkNHFDZT5wwJAyEfhqhUqDE",
  "key26": "m31MyqZbZ9ERtNaJzMxVajMpiVk2sMFHXyaNY711buPLTNm2eSbfW7sQ55Go4bJFPRJmUjhLfe6MAZJVMH6YXU5",
  "key27": "WPGY5FWDx4KnWD4rbgScSzwaUgHqernVZDhzCJBA5wGkwLrq8pRKpNS3kPxhiCvhoB1zLoURNZCyZastesAN7iR",
  "key28": "5378k7ir2rBxcpfsjTh738D49NW5RNwSa5ZYzFmDKCJpoSpeCK7euxzQthoE6hxLKmGLsnAgYPBt97QAStS77dLX",
  "key29": "PxXD7hM1j527s3deppCgNu1oHR6ch9AsvP8BAesYdW2MXgzU9XCXFcXZt4YWs2gnjbKDQzwCsyG2DfgZdZ4xgtR",
  "key30": "5K9b31sndMZ6LEaw9qHns2P4WezsgTnB6274ZMp9JKkPoWi96Esc8KXM4BjwSHwPLFJ3hgrzozZyHRv4eJZRPxVi",
  "key31": "4gmNVZMePohscvmr5vJWa7tb29t4zsRPit3qPK4CasMVMqqjNo1FAaW8cw8b3qHFMTz9YY5vJL8P1JwTJp3UYzhz",
  "key32": "5eAFosGcsQKKS1TBqQRz6vcRGYUDjzxmR8DLZShKpv2aEw19aDMmWhPmm2BuMFyHJ7vqrDrw8TDVxixBUdtTtmBo",
  "key33": "3Hn7ryJURvXKHmZAfpUr7o8ABMy1cmtoCFiYcY5xbokcy32ufxgEQf2nxCWSYq6yLtTAyk28b7ci7kmYAcmpgrgD",
  "key34": "31iZDv6vfgs399EH8FFzDGYUCtuacxhbR7f6sm3gzZKSEMtyHjcCqssfaGHRfnjXFZGmYyyao6WQfTwMQ7zMhrLj",
  "key35": "5RgeVXjXLH3KfNswW4zPtx2QbjwxfqoKYqCNgiWyFoY7yeL8d1R57Z4yEoAH5Yb3BVUqc35Xw6uTKDuC7tuAHkXX",
  "key36": "3qR5QCEJFE6caHFewgD4kqfpTbU3yCoaEeo2kJ7uL9HJHmDHvJvqGQ3zRTd3T5MXBpug5hodhuBXQkdhmc8Qm3tT",
  "key37": "3vVLLDwJopjfuXWrLEujVBn4tLPjc9rAqW75nZshEygDw6KzgNmHZSMiea7AGPSttRLZhUgUEAiEhf4BbgnkKiUZ",
  "key38": "32AdGkQtCp9egbsLsrqrXATUCxqAdZLGSctjtcZnwp5SzEoVXL1wfkpq3YP4hDsj1hpX9A8DPACruATfuCGjBuhu"
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
