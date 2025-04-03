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
    "bcbHuZD6wF4iJzYofBAoE39jnVhXsfRcWidsYR8TjDg6C7wBHDRbQKsfrg4vDeBAQo5DMvHj6Agfq3BhZYVJMGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iv7nU15hBLLCmWJ3pfg7jEKyL2c56MMAQxPfZnveAMpLwDpJgkBpiYcqaPzR1nG23BzroU9wRT7RDoU4Z6vBQ7A",
  "key1": "avWozQq9yRVaG1MiQBHYDq9ctUNRvaoy73F3ni7op49Za4Cxh3fGWiPy2SNdGRi6xHnPutQBpDf5pbTmLP2hUss",
  "key2": "2pwqkNPn4GejtWk4W8dFRK4LDsbsGPEVe2FwWi8mYu3GF6q6nHi9t3nFZjk67Twu5VwCrf4bVwdV1UVGpMVDSAWC",
  "key3": "2ksoa16kAqdoWcdShWKDtJRJ9wQsZYBF6zFVg2EQbyBYRt6s9QZqGdSpadaRx7PaZ8PxgUxtiqmZ3mQWJZVNjkUU",
  "key4": "4QpVAgw7hyF66YD4Vbka1anvz9cyTDxmrLob8MCZJZ3aK9QjrMW41beDt59VEuPocpozgZ7TsmcsWyFhEUfQnCT",
  "key5": "5VMZXZGCi3U6a5LygjNjytf4p36BAx3h7h5KaMf7xf2ohy3KdTroxbmW1yPssqHeMwQkZDhgzp7ZvZagrrrQs5gq",
  "key6": "3CNmzvpy4NiJ25yEnwcZ3j2xD8C3TgaHkw5jNycBxsdFv7yx2tr79cx5bFJM7sq4g4j5rpyEgD9wyTGToWWLucLv",
  "key7": "4DKaEbh7WY6ZwrHUqiPsT6EEtg8RkPW4WcioovHPAr4wHZX8XUw1qR31DYhavHkyRucYzfTTupXR7wJ5MyCT7Kex",
  "key8": "4DF2PHjWdPdBaipPnSGXZva6z1RFaJ7eyMHa67oQtaU9NzRfQXgghSsmDXfp2pCXRVvig5VEYn4vLG6yuRcb3kYs",
  "key9": "dTyi5EQBEBpYhVwyMGpZggmKxhvGQP913n4HoZJxkkQn9yYmx6ER1DCiRw3Fi1sLPGyoerZVbLtHoeiwU4kHBgw",
  "key10": "FD9m6evmRLjVcYKeWgi2Mv1ZHwEKjYFPEjA6G2scj93iAera8Vze3vzSsbfwSxCtq3mtTfif8omG6HXZK8CB4kZ",
  "key11": "3nYJco83cEgDkTxTmpeuVJZp7PHECZmAusGYEAKmxePZr4SsMxX6oyMY1jUhGBvHQPv8CQ5dL6FGsfHFzuXhU5Cy",
  "key12": "5vhRtzGhqmjMhSKTsLX6DV5d6KVQEYoJb6wrgLPcxfT72Tv4n3LRBQTBqCBSHArMsUmjs35hVSfqaBVXuno4EGxP",
  "key13": "2wA9x6yzTXihZHzu1QbL3H7M8pxcRYpt5dXBPuAu9SUykXXhU3fGwzM2oZ7sm92KrR9hVDCdHKoWBLPgf7Rdpq5F",
  "key14": "424xVWewqFBTo692b8P3msfX25fkE37kRg4e8yaPGvhsf7ninRfZNZVAnaNAd29ALLpA9qikvWCpDsAVFHgmzc6o",
  "key15": "3ni9EbjFWX1t9M43p7YRGnDAFpX9NQui99Dc7ggoqLNsyWnDDUW5rjZ2ukGwm5zHoTkAQbZrYh9Vqpxv6Z1LLsW3",
  "key16": "xoy147JMwceb8aQkYptA5z5PZmmfLnXSySbe9dLpDRB1BvNPf26PzWhU5tewPSc1dkr2PbCbmk5kqqVCq4GbXn9",
  "key17": "fHBScrEbQwSoaP6oGfPSaSqUJ74xPgBwcwC1js8qTJGf3bgr7MHnfgP2bFMCeX17snAiR6Cu6xo5TShFGzn2VgW",
  "key18": "5Yi9VYS2nq2wXaNgnBH3MEKP6mHxHhnAGY6WdUhWhx67tuMGnSRGnTBRwGUEFrxYtK6qGnww6rZfpNWppAm7VEzV",
  "key19": "2s3ssPLFyZekQvoaEMn7pJvhaWgp4QJtEvjjDNNiWcHTgTSTEaVpyFBKJzQA7atSxZimRsyu4HbYNcAbDrfm6YVs",
  "key20": "4VeYPZNCEXzJEHHNzNrrhPekCorp8t5rCKrKPqbUdMy78th41Z3DSwSEYnEGsRLeTsDZ1ohu8TZkXuhJ6afkJZn2",
  "key21": "dUNegwP9Gjh2zaQtkEnRztCxRUAsZxZp75yb4K3XX2kYDmUR59vQEDPBAJHjCkEHMFxcjnxAmsTSzXNduKT9Yij",
  "key22": "3rzPPKD6vTJ1Z1M1dkWkUcqNpe6jDz5wz19R2PkcdLei2G4t69wQwQgMKdyRbUxwUSQTcYo4xvzA5UtatjByQo3H",
  "key23": "eENFw9tSuxbV4z6myNWqNhYzgcXswWXThjZrgkcPU9HHLjpvfiR1LrP8sAhQ4qgn6P8oNEVejHStiM919hSsMDk",
  "key24": "wCzcV5YCLHvJDU1uhnxfDgzk3CdcY5TbrmhmnMckTr5KhyCSW9G8Vm8iSxwJX3wtG1eSYf7pBynsriJkpPyw3wG",
  "key25": "2oLN1TDDMLjCMfUPdR6q1mvJ8nL3BFDcAkDCtUFjCJKAHqMu58SWfVMZmFhHKQP9UsbGeH1CfcnoaWmncgTYeD7R",
  "key26": "2SfHG6GeBe3LZyYV7LfWRXUb8iscJnDmhfCG5oRHPf2A2amTuuarSEUg8KUp2PpjM4inMYJmm4wZ9XhpHaBUU3t9",
  "key27": "2o7EVS7upX7PsTQb3stDD3QaBxfjgVdV15rki4KezPG7caPq4gqaHPbiSirce1mtdHU1fQ9hi6ZBRxazuhdv2CKB",
  "key28": "5ADtFn4ejZEt7t2SpFEr5v4NtwUWeryoZ2sNiAiYtkxSStcMr33U5XFM5rExchAttZkW81Av94XMYpud4b7VsxuB",
  "key29": "64NJZA34cfukAcfP8ybcfpUnVLdizqpddGucsa7xA9ZBTfEApPE8wavXQjYC3KaGBAKptjH1exZpQr3eZqroProY",
  "key30": "5SsoTXbrccr1NsFqMH9whmxtsMWozDys64o2rKaQ1YckLssYUieGFdsa2X179RcTH6qb7QiX4MzDTWDDzGXVp4cG",
  "key31": "5b7uhypXFVN1uxAuxdCjzMTAvG1MZzFgpdBLeXnDtZHYuW91FMWmWoq4671E5LKefkqVT95BDu1YzvurTeMF5cDv",
  "key32": "5q3bANDYxbNf3zXFzKMjHscfX3z4RGNJuhztje4DF5tDuLFn21rRoGnxYA8DEfWnZVUaq3BNjb7xxdpUFTAG2mKJ",
  "key33": "5oCSPA2isrzh2R5TWkFqEXXCQxMDRdoPGZiWz6skBCgNCvrrc3qhYTTZRHJuVmdWjWmYPLPjWNEckhib51ncZ8Ve",
  "key34": "45McRgsDRvfLGD3CNbQ2m2PtwrzXAqrWredPr9FWtKfWbkCzD41AAKKhLtNyEvrGhsN3gn4p5LYv9GJ4dw2tt14R",
  "key35": "5oK8WXZ7iN5ViS4hiizEX8VwWJLqCBdk6yncNoFpUnuwrLMBwV6Kja5vKzsJq5xiSC7U6HQkTU7hTz4GgMPoXsKa",
  "key36": "3qBqJKwhDjevxjZ9dCT2poHbs5dbMqkzqQrXJGTeKoNUdxdQhxF7QzVpJztcRJwZR1NyAHB6URGA1vDDEX2hL9FG"
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
