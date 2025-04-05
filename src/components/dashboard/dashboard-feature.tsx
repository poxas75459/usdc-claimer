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
    "32SZKQW2emQCob8kL3HFD4GFqv9wmSqGw4w36EtsPcVGwk4dNi4bHApiWS3c9ubVxRd7HUxfeNkwfbfMjzRHSDnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rqKLXqxu3UY2H894V85JdLCDD6LUjLKHS36H3hP2M3PeRhNohGbkc4s4bmbYccRBpRTwiS7ke6EU3985D1TpkWR",
  "key1": "5YpXkuW1uREHktaNohjbMyR3UAgMQzZSRbaxMR6Uy8yx8L8hwM1qF24jYAEWyJWyUqdBKKyM4og57FedbNRK5h6K",
  "key2": "4UD3BzkcARRBtr35r4UfCEQ2fDq3RpC4WGYUKHbcvvMdmueYtpYiodWJCUJGxDBdjQ4nM5Vr2WUHKYX9ikKeGojt",
  "key3": "3nSTc9sTJLExug9ogYcsTr7vW61Uftw5iGMrS1cGVo77JW53XMPQPHevFBhaHCK9fvmQWCKCdKubZWTpcoiFHi4a",
  "key4": "4F94vhpQRGvwmmVhCYExU4x1kg6RHsJsnMewLqPFRgKqjRQsFCHWJjVBePPyFVHSGeBvj2vh1s5BYi6AiWsWVBCk",
  "key5": "Tw196ApvUVXe86tdAP3VSw1zehZbMrmPh58Jr4r2E9ZpFKEH3CV5rN6wcHiubdvCHZPb7i9VDj1W8Eg9ggUwrnd",
  "key6": "3ZLpQvytW1ufXfnGSuKmUaTQp9dTQ3s89ifQbXgE6yNEm8xjXfNcZi7NuepxU92ECgxQdsE7EhgX6JoJeowD5ksP",
  "key7": "5ayoKzMbzXY8gEc2LEPFLZCUJ7ZQWbW5jLffKjAB1o3F7t1t1H89P8xohEj9MPoHvsRT9c9PBX3d8EsJ3G4CPqkq",
  "key8": "56MEmHNWHQmgZJGz8mDet3EBe3iwveH9MbqwsQaorvgndcCyjjBHcoGGRR4BQoVX9WjvdRFpF8F2wgfpaMbFUsAe",
  "key9": "5Y36LHx1qnjmHtHjv6FceCZfhb5wsonztN7vWqpEtu5e4aFpGxS4b6WFKd3noEBztaduTtpcGveBNPhRHd4p86B9",
  "key10": "54PzSPCKoe23mUZKdCFSg4aytfcX5LNZqUcu6U7Qu6tEWPKXrqgqpreVTwmEUMWFprV1izsKUHxaP2HZ26ByhhtU",
  "key11": "23i3jFQmcVnQ7EVCYTQD5PedGQodQpKmdFMbVjHguK6oySkEoKhGaTB2NZvFfjc73FGgZzHHrYGbJQjYCvT719Q2",
  "key12": "2yi1sLj3JngbjWD5AJzwNmiU66cYLFaUYsYjG7V9wSzBnp8XRNkx7PuicLXFTPTrz4xn8qymfEowH8g7VRRmQaQ3",
  "key13": "k4yZqAmxEa3xFUc2nPXCwLU17eNZ39D5zDxbSHH1PFd8rh6w7DxXuTL3xhrg7vEqbhbNXmF6yrzrxsnso973d4V",
  "key14": "EC2YHjmEc796iXyuCcjsnaRu3wHLeAw15fdKc1DV7HFoYiUVZiUUJPNuMVyVdzZ6wLVjtFv3K7C9gUCghapUvEP",
  "key15": "4pcAfNPk7b6DnSWGFfcam2kixto3WGWNy3ecqZ5wkrfh5kcS8v6wuFjNvMdDD5wNFruUoNM1i9Q1Kj1irvaNMc36",
  "key16": "HV3kXj7tUUCV8xxSKW8A4P7VagXEbgmNRCk4wiJrkkep8qCErPsFuXTCrUdexNLf8uG4rQ84H6Z3xPrpQzEcLDf",
  "key17": "2PaobNb4Zrs8iso8Xgm3K632FzAh8q1KCpKWaz7DtpC8hCe2QMiEC3QaaocNfy5C7pPKeEqmCzeAf6D5o1cnQSa2",
  "key18": "2SPzhfd5d2amKQEa7gxRKSmg5bgqtzszbbUB1XU6a33JVhXcYQcwkcDPmVn3nH2vUR5Lqpnonhu6PTkHNVs6XrR8",
  "key19": "3YxZjy4iDhK2u8CYnHwyTUtYnBwFv2b5P5pnF3XYnGAsUStGAt3rXMj9vCM4wHggXkAkebuq6mWjghbLAKBzHuC9",
  "key20": "46jTsi3BNsm3W78zPzHRN7MbsWb8aCAc5eXZX6sTacP8mH9UuJwx63SfQzbmCAft4txcfwH273dQLkLjyrXY1oXv",
  "key21": "2UrJdveUhKLQrZHcdkXL1REq2uBcJWkdCSGrHkn6kc4oEXm2cfWY1eYFrwVtSzX8rr3dN9QtpyQ6oLq1DrfxzBv2",
  "key22": "5tRnBJ53WAmu5sr5DbCb1pXeH3Tg3CXWUBVkvVZujCqDMpyXoWfB5m6nT7Gwz9SYTtesxboTGrY52VssBdi5Lwe3",
  "key23": "3HY2CmQKTaWFoAzY4STSC1r22VBXZYHv2iLG4AgjCxqbBYmk58PqY5BDhu8bhzGf6Q96LmjvgchW4AeF2AwCyMJQ",
  "key24": "3cA3STj4qf5oLrMdKFsGRX5GDuj47gkZjandTQ7oac694khn9wxMf8cQEGgk6iRfrKy4DkCC8L3U6N5uVmR9JxzR",
  "key25": "kPFPfnLPEGsmLkZXG3qNwHCySja2W1Z7dCLA9KFV3mQZXJ6dxdz7ooJWJCDr4sZGj2Hf9VmBYXFSSZ2whf6qpUm",
  "key26": "3GDv491gU2dkCRCzzEG8Hze2op82Cf2XZUa3BuC4L7KvT5sGhdfZ1p1MrRBTXWAvoo3RBVC3yGDntQ4a6hinppyD",
  "key27": "3dtYQqj11kGJVGyZ5WKfrWWt7UqPuhjgdgGbR3eG2yyDarsGAQutRKTBrEeexsJJT8fVLY75r1sfrvHcUg5PyEW4",
  "key28": "ChwrFdH5hv7i2VCWxfLLmPd7JcDxSuxwXcb7vzbKS6iDs9DVoDwCRigUypVeZybPn59qYc7jW5bVWN7aEhjxQfh",
  "key29": "QhW9E6j1TLyVALkwb1bmGdpfaRSCAMcDAiU3RcPw1uu5nic7ndknrfBh3xhVDRXe8hTGhUL5xain4MN1UaJzLxJ",
  "key30": "3YmvjeSciCzYd7JJFzf6GCVBveDTeXKtUFugLUipkjJthi2X6V7XyYAsuUKbb4kA18TjwuQvsmWjMeV1TgLM1aPB",
  "key31": "3vL3f4hwN6X1GC9zYQv4vvWCsEFLmjB2PzjnJ6Mkjr4ZaY7AHXgPfkQKqzf9ESQKuFZSdexCu4qZdhphxKN93zem",
  "key32": "66rUCjnagSb5GQ6YT6BSbCwgri4B6yuyGDoXw3BDjxsQdCJkwN1ZDUN9yVSPva9A5kudrT4zpKrcz2DV4LN1zzFU",
  "key33": "4b1Hb16hnr7UA9Mn3S6yPRmcJYdw7Dk5n8nSGGGnm2rLjWcbHA46z2uPm66xoaFUvsSg2UiMPpauVSQQfCHY8jWm",
  "key34": "2APcckkDFBwHkpfrd4JBV6HvdU1np2izYBkYpiVMLCCEUXSVx5oi1DXELuxwVViuSXLCY8JRL6wBhnHeTUJqqECa",
  "key35": "5oK9cWf3p1zkHEbnnrRg4iQU4y54W85oX1rYTBdcazqDnAMR97mvJe5b9sFpUayAGiSVYfGr7uPPcjytmq3xnpSu",
  "key36": "4LQP4L2SfKMDUqe5hj8DaMs2Qbn89mPSgMc5qARFttTnDRTBf3My77FEekpgt8QpA5fP2rpczh8oiBoHJNFKrAJ9",
  "key37": "AXvgL5NAUy9N5MPWfVUqpn9V7zjSquUo1Ydn9suFwor1AdrVcXCfKefN2rBs3k5CzER4r2r1gsLeJc1QQM7iU97",
  "key38": "4hrzW77hrXmbi1XcSYNmvDUtWHyiYWCJGe6v3qgGrDqCuFGvoy1iC44TMdDfxpUEXe5bpmG67oEiSCpuE7xsB5Xz"
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
