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
    "5vvGRi6FxWXXQhUR1LsinfkLevp5L3m9NVuiFi7rjdmZk2NHDKCs36LJZ8T5qNGw2nZBnmJ1HWEuqpKM7rNk4vKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cU4zHaCuYEeBmg1YAQo47g5YBKDwaagWeQN4ukQhhKRbUJt1diRpViEy4MdpNvHT8U4TwxAzHn1AiwfMMuLKw1S",
  "key1": "4PWc98FecLMjHZCFRBFBKkZAax33V1XuevHRFgNwoVPWiWukkxfXtrp6kgg9E3SUkfkG1Udp6Ztfhz6AFs9CXTwN",
  "key2": "4jzkSDHyYisDioizW31hBqkqVmafnWAhVbamrzMtFdVWp3eYAArLwbN5xPmGjWPaKadShE8LnqpdzaZ4ycnA58kS",
  "key3": "2gASqybHpo42qKbeTpRveAdCHmjmHaTxALMGgNoF7idkgNrVRtmDXmWtkdf6fGMaCYpGRH2paHfwt2HTs5jPwBfT",
  "key4": "yeQTMEBrgPsXMyc1pngvu4VQfyFa69kLZqFab36C1N5qNuyrjuYVwoWtfpZeZDd4AGWjoCngdJXBuNCHG6RxSWW",
  "key5": "Dymz5k91T1axESUbdv6eeZG9G5ygm4BE4DrFpsaTTTXuLu7cmHA6uhRafuE21D7w9BUjqCtDMr8W46c9dS3D2Qt",
  "key6": "4H5df2UA7pwwd8oPWRshS9WH2AzcGyRKRzaABTxQvuJfSoXb1JoKBPnQcn5ay5xXTXw8QDqeq24ZJCJSd5PLWpth",
  "key7": "5A3DZf9teesWZsHMQVUekJfx1ME3VjziXM88RZDFFWKKxr9iBAgxDDHdrxY1MV62t1RiAAXUY7dAJXNTCnYcYwce",
  "key8": "3bs45iCHfBUGkbDJsTkjXM3n7gDRby8nwmaXngUXCJYqp3EjAbGCLkt4piCDssfVpfRNEpDzEFqWKJMKMmYxiNHN",
  "key9": "z6avsxzcaQ7fvFWpbveRxbmReTsauF4RknjgcCezN5Zbk9nMSLHEmtdeX38AEq17u3rLu1Rjzc7oiB3TnxE5qNe",
  "key10": "2abwDdeAGBn6qQUvzAWqYEKBodTjh5frmBi9cAsgJTXmLycGP6akG9dhvQw41VAEkduXrHXdB6XdtvtnkhuGbwWm",
  "key11": "4Czzqev4xk9fGzP3RMm7LTfBe4NFd78FWFHEB7oFDuDcstFTS8LDQxV4WuUuSaNNaSFWn534tjFNgvtQv3ZEa5VK",
  "key12": "2ksspbX5PYM192ni8XnDYkE5Ju2Q1cE1FSjWK9TLoQzyw1uN4M8udoLYgnhkk4qYx8acxamN1Gr1Zo3N1gzjxw8",
  "key13": "4FHdVaTp3uh7CBAr5DhscXfPavrU8drDenK5KYkj3riVHkDVm24NVzG2xtZFqWMaMjYKAKLRHyJXkwAao3Q9HtXp",
  "key14": "5yvBLEM2oEV4S4uEBgCogXg9iCH4rhv1RnJmQNjgtBwNGMWJrX6ubB6jcTxC5AQ7aLCQr3ZRQXguCUf18aZFGGsn",
  "key15": "639EPZ6GLgkZtgYwmj3QmPBPc2Mm1bL7iW553yDVugvYi523keKEWFbykrjiRgPbHGitHB1u34ieGXYKNoCdNanZ",
  "key16": "5SEqnPiGuJXhizFhAKccRpvHdR7BpghrbkbRiQVbKZiMtSYm5ynv1kknQo5T6LLzNCTDecF2bm6TPERgTfUqgswK",
  "key17": "3RRnpMPx4BsAsdihTTDxcCKjQrZ9JjiQL6xs1Nv7gCUBVjnhGrqYPQNpi53R3CyfkMqt8kS4gZQaaDTes7hva4RC",
  "key18": "4FuBZQU6YgKnEXXyhwFjCq7cqivjThSBGNkpoRZMvwX2JcStNs1DTP2Gmk5npCv9k3QGGg9ikzEmiyPo42zezwiM",
  "key19": "4ZiiPeAHocvSFDJ9M1n5URG5C679mPdWba2E6QybYzD67fyBCVfEo9RRvxaz8kKQ3qEYRfc1efChyqVUnuuZWtJn",
  "key20": "3ELLi5EkqcdvNy5uTNX3GKyQ1HAmuwk4j2xd1X77whUdW7smYGjUR27NMtEsyQpLcmgiQAT53wHiB1GekUGWQnCe",
  "key21": "2uVEvagx4xpmQfrEWfL78HwBHwyxdLoYCDkigkwHbU3zE1yYbZgy8qWoCJ9iUnPxqXxFDqJhebS3BRpD3EPuq9Su",
  "key22": "33VD7XMmwbgUmKScjwfnPsQB7qrGnjegM1wUB1JeeC1r2EauNywvg1hnJs7GWXCYFvZqVs5BdgYuXf2JvqPJojya",
  "key23": "624Y4wELcbYB1jcD16hPYL1MtqRCJ8RmX4T19AA8zjFcNuPd9iYQtoAYYcWsymxmDY3xXEm65NDPweP65K96hmbm",
  "key24": "iUmW6QV4hFRTKe9FEQFrEBrvaNiwAcNVs8B4ZNxKTJwLCzC9KzsPGswTQJMs6hU7dBtmxQsRRJ6etmPorKoUenR",
  "key25": "4mowYHDT7Xk8RtFH759C4hM3nPpjYiqh4neWWKpUTJanjVh5icfbQF4bb2WrGJE7xGJN2j9oSjXdWtJHj8n2CSgF",
  "key26": "2JVCWJRTaw1q3rJpXgYf9Ugrk5HmUYSAmEZhJQRXiK6RWywuHvy3VWqWV83bJgP33U7krE3BeiFGd36udUq2BeWZ",
  "key27": "2bniiKq2BgPxm5HWQYzS983hPdoNrC86v8PfXYf5MdtHyWZKu4s2xNwgNLaTUume5kTwxZbjuzFjYEmZ8T46Qt84",
  "key28": "TThA681VG7cbu5qjAJCk2NxEFc8WQFT3V6VHWAkXxoDTMESAbaXTWyexzx8VWGpZKGJhF29k3A8rXKjD1uxARQk",
  "key29": "23xZ39XynJB2WYi6v9wNx2aCjDrCwAvsfP7edaVBG4nmFNxSBx3VZT9ywwTg9RHWzqumzra6ovZHawLs7wKFQEEK",
  "key30": "ayrbfBzzEBAxuVQZyv6Ymi4qJx2JF6777ZDZPzqPa1d5Ypf5hmezYvxVRYY15UZCc7qZTD61grxT1dcJB8PGWmM",
  "key31": "4JRTiwPamnbG3tF7eQogVg8QrndSvC9E4K9sM9igBZXkmQfVikJNuxJJtuBsNevhc4DB5tkJrg3GmTpnAMUYqmeT",
  "key32": "5f2sHV9CbBE572iMXehSR17rokbzxpjMPAfREPigcVSirC9LEgvay4xdnw7fDsYyc9xfpesNWM69Ey4HL46CVWyi",
  "key33": "3Wxjhs94dbpKLRQjB6XE4ghtesmXFUY9ywtZLygmEKN9eixraVi1G2dLdU15K3gLxUUgeY1FdPvrYAMJ3VPCkmbF",
  "key34": "5UH62fRg4PrfipJQUe7LZDoaAv6ToooGUavfCWCANu4uYPmNnHzx7a1SJEFhfudiP81Xfq8PR33yuZ1nJtQxHotm",
  "key35": "4iREycU2mVieyCSF7nGWvVLErv5MRHjZZDB5hXGXhn9Z1kvjSmdWfdXgBsTPgPWcs2DgkNKP8ySCYtTAMfyGxgmn",
  "key36": "dML99QN2uaNvoZJdHpTHMPtGY2omUsts4Z5xEVPtB7zfaoRbz4a5C8Pyjhhf34srHAH447i1v2kCn6SFTgmxmvt",
  "key37": "59C4XkC5BhHtrrLeL79gaehSwrQSpqKhrtrjtvNxtdWnViaysPSEabNBWh5wzm3h4RxpDsCQxRLqjAPbGWF9TdWx"
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
