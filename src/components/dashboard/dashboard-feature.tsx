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
    "3R3PYihWK65B8SwFYTAZcrHpLRH54vJjV89tNpKECFhCj2awreiVg5Yk3iAB6zkNUHc7GVZ2fraybvRwrnXctp1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ncFVBWqmavrDcfVYsymKpqVHc9tqnrAEQYkPiN69QUhegpF4Gd9rUpRuHB53LSqL35TcjbKWDXvQLN1wjsRajkZ",
  "key1": "2mYJDkcfAhv5MyorW6Q3YxeathapWkX3nCQYL8p5uJkJfc1ypVYRZFPaSf5oPrSYMYehLb612cnWhfzeewjtBLBq",
  "key2": "4MQi4qCzrfCrqsh9QZVrgJiY8LFgDdTLcDt9meDkVRg5CikK9TXX921hDpN51s4jqfbmaBBfizz2DWzQPSVPrstk",
  "key3": "238NvZN67PXW63teSEyFHxYPo86DqxBm8do4ve5BCxsMVt6VDb4GUYKFSXeQ5XxE4cFsHC77cREyG3xxV6k2qAHG",
  "key4": "2uZvGSmnRP4wzgrQjVoChrLWexQFvYw2qrZ7tXjHFN9ceSBhSpYi5hwoL7VEjtZE8WH9dARBvJLwHBvNSFkqvkrb",
  "key5": "4BusddwA29PunQMW5PooPaVw87tsVoFQ7L7VcRd8es5WdAdgGDrRbj55uFhdczBN3HQGqHV4tkHPP5SDeroQJW1p",
  "key6": "o9v3FVq2fq78zc1dKooj87msA5otbTGZVJjjwzMtwL75p12Yf2SyqVTaarqyTJhuQAquhKBeAWW2dTkgHkZGHDz",
  "key7": "3Kcu32qjhKxevg8yttThRMXF8hHi5KAziRP4EYFYE7jgWpuqfR8c6WYigy8FmNhRbHhrqrCcPuEEUrGSkLMmxHfG",
  "key8": "3tyqMtS3aVbExwiB12ckAZgjCGq73sohc3qfAi3RpvTbyc5g9EjpgAPMbAp2dHWSB3Bxotk5W4CmSwaHwq8etPRV",
  "key9": "2np47DXoVbQnzgkbmuUARNQjKkKHHcbtmcS5wyKgu3xrcaRWnMYJqfYDZymy3B3QSqwtM7YzANULqZZBkXmmsJ61",
  "key10": "2vCeBKofr4Fw6V8kiThKyjHnMNjLSDJZBbg9nLXe1MLW5phzfg5zQiXC39rHbXHYbQm2yHZfQLgRm6WDCrdG9Jiu",
  "key11": "2ksHEYgF2aETvmaEUsnixrsM666Trero8TazdvyPaa9fsXq8sncM3PE9eTUJewWwCYNeHp7mTJwFQKbmkY5RBpLn",
  "key12": "5QyQhi3WYjFwiY8xQPmCNTpKwzNydtNo3E3sv4A8CrrAfiPdwXeatjMSLjemBygXAZ2VTztDev9CGu1heR7zGHUZ",
  "key13": "27UV7w5rp75qEWBQWNaGh3GsgZipCyDdyMBALY6HVHeb26ivAPDKpekiAKNaTpejmFFMcsaP6Aq7yWU9wkirnq6M",
  "key14": "5aZZNMn19DAcuyhLgN7iBJ5BUT7DxnvwpXeQ6GDp3GMeHdADmAw4VE83RcYM9nyqX58Pjuzy55iB6GDZtuRDmNEv",
  "key15": "joDThLBPdVJpEGwyMNge1zvT5L9rDFtU9tpfebNEBH5Z8CF6A7q8ffd5PNivZYfgTSeJrThsCEeqpQ1xsnnku3m",
  "key16": "5fsHyCxTRuauJNyHTFQWQVx4nHaCi6wYytLj7EEnHGmBgBJYDsLGhBbqEe6fo87ZL9E1q9aJkWEqW64QQLdo54P1",
  "key17": "3SDKhYPmzHbJDrfmf9ixr8SyBVusBUHsXafYG1vfPuqJkPskNduFPFu9mipVa2mrvsrjmPfY8NygqScJEatLggYH",
  "key18": "5xR88e6hx9TZ4sgTCboUJJ1RLadb8RvyHfuuLtDCUHCjJzgDLnZv3DZ94L8oRWa5Z327Wx32sXx4k76Uz1w1phoM",
  "key19": "3tEVPSMjHxTybeJtdiLkNJUxpCERKZARRHeNk9LjLQp6cxX3MkFYeCZwhKP63hU1TrXgyfD6r2beFwTZfGsbaESw",
  "key20": "5TRyHzPQFYmr8HhnTrytpxjahsZyziXS4vCedRxWhx5KWd8SA1EzudM5byj7kW8aADVkKCbSy55C1kxv2QB21moq",
  "key21": "4GsrG8bWmYQbLvcDsNrTyXikQBukGx5ugR6XM7z3dMETaPqSRUQLwtxyvpSjeEpajL3mu5EqyzQknp3P6F2p24tT",
  "key22": "3mztHE8XobAgZb5ucynPWuuJA89xzm635sYbG46sfvivwJLhCWqvLr5mx1VApVeDkULscSQRJumgqL1Yq7ejzxfv",
  "key23": "4gAuBBrM8i1UJH4kAuXFiM82q5ixqyH4uKA4o6ekZwgbptF4N8zbAUqnsRhf7unmT5KrRSy6kZ6tuBWwtKjcwbn8",
  "key24": "3HcAzESEp545qvVXLJ6EnNjYoXxcZRvg8SxuYD8amG3XvSwFbL2vrSnZm2fCTJgMwu7uYN1y5xATjtYvKij8BQzp",
  "key25": "57ckfKNXFcJfdeAsSvSDBnj3yHfwTfN8GfVZ4zCScXhXjsfxjdLBUerT7nRFEFtQA9n4A2Kzexx7HD5gU8VM5KxH",
  "key26": "kDyhF3F8Y5dSSytJUE8jSxnPoAccYcn8NC9W7wiWLfjj9XHGEEwnEPdK7NoP8QggHRKy9f4renjFMPxDhBhPFwL",
  "key27": "5kTMzyv1Z8KfVBbD6s5CtLJq6UeTXn2q4XqxRFhFbS3FE2gH4kWYw92cj7KEtt6XJDmh318NCxyYDntAWqcvxtGi",
  "key28": "33WfUZ5rLtgibKCWyB6oi6fVUfDqTJXiUEzzJggT9u3hQ2ZSPHu2K66EGFtAtzRoCesnJSXoLD1kgnkJvYnxWZEW",
  "key29": "cZw3ecqE9CCUL1L4jzN4C2BzakktjhERJcqUEVtb7MVmSmmx8sHunhaUjaBm6bjrSTWZHeQe5fDoF6CoV8N1ozy",
  "key30": "41gJGtmrkXdVQPKjQGQp8rBHsPJqHfFHU1T4BDiZgR9HnYQUpZfjv4RP2EWx5AZgGWAaGaZmCUztv1u2tFnnAmS3",
  "key31": "mDDhChSHP3dY4eE2DmJfEvvqzpHMDzusFbd8uq2pTpB3PbGmZkEo9tNGzVWKszHrrPj1QDEpn7g94jFMPWCAQza"
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
