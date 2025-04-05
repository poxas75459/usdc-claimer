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
    "3UfDNhXkRjYyXboDwXsCAHNx7vgzjk5yriXjwtmsaSHEAiRNtfyX3SwgsNhek9dq3oSgD2x4fUbvHAhirSBhSgkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CKvk4MHMSqhGd9gV7GpB66qq5GQ7nv1TuALYEVv5oiNkyHAomsKetUbw1vmaDm4PjCk3PYvsXQdNFVNzoCXcC2Y",
  "key1": "37yfNqfGKzaT3S2n7d4awnea3XViGnhEyechVjjdaVcP6u991FjGCir7ELMtQ72dShZJkr3hPHnAnucUBmm3zBEo",
  "key2": "2d8bZammn1Wz5TJYo8i9s3znbeyVUEiTA7NzH5dL3jXEkdHbJSGw8BMkTUx2H1ALP6WBHuRiQ664yfnxHg8UKi29",
  "key3": "2fJW1Nr8Zmq9KmXLx3sC2ho56nBMcE2cRTGxfAnqP2gaAPDncQ31aw9m5MR4y1KrHJyp6vkqGo6kf9bgm1Qn27b3",
  "key4": "5mrYsjHkY8VnT8s7QsAh4mehBMfTjxqa1zhcrhBF7dADVRxKZJJnjhSnqep3fUDeXnxZTspqTyZ5HLqgDjddr768",
  "key5": "5GNh8eix6tKzBxT1qHHeMj8eW7DGLHMXcwTRsh9Ak7RaKhUmCzcpzEVyFoKj99nwUym6whFGj851nsQH6qdJ4he8",
  "key6": "44APtvS1wGWEvYAftuiMnBuDzQ6iTsuEMWf14gTSJPsDCC8vcPf1ocPFBYvo9r8ntdr9dFisDQaPV9Vmo4aVmGpK",
  "key7": "2cGexN6oipDsLCK4m2oJ2iySLc2w2CGQvMPggSr3BRbdnEZY4utsCTKXvcmr3Cutcr6rpULjhW2gbKr8E6PpndsU",
  "key8": "47tYFBVgkcoGUBmXJ3StCCPqN8udbvtHMg3wm2auTktjWmMfKUNHNUfuwVkCdNgbpyvVXUTcYPDELtSs6eGVt57U",
  "key9": "65SRr1uqpppMzMZw9QfqMeMckCJfRTrh3Dw7bJE9Pe5vJoNTwMgWJzYBvM2v1yefz9TAZJjmRCEsY9mt7H4gCJ87",
  "key10": "3VQQL1BRsiKTpYpvUuLHDonLsLRg6Tgn18kqPMvPL3WFgiHFzpPc6hPriPHQGghepXY9ZggywyzjtnwPz9xd4uxr",
  "key11": "5yqttryWJCEuwmr7x39hphYPpws9yLbpJbTswMJZyY7gnSgiAivj7EWFNa9uAzJcfYrvfMjjMdPuMSezyDDtR6yG",
  "key12": "4xtZ1symzMbWDKpFwUnPkEkJYuvGybUUhyjwr7h68husXbPTV4BzRkY3Vn5EDJotHmPH9q7hSfo3qEpYhUBDy4wR",
  "key13": "2nYUPWDMv6oHhegHFnYaYWBfQdtDtDnjvN1b6afBL2AK5y9NkNWowxmp7gVeXkdfRjBMLHST9BeYVxaoqPYgyuKC",
  "key14": "5x4mL6HRvZdfze1VTWur5A9Q5z58fab9YbC9wKJh14TdhnEURNE4jZRnS1iWXLKTnaXJjYXU3kmhdHvgXTWQrc8t",
  "key15": "tEzvn3q2cT5KrpTVqR4iMrWe138AyfH12Di6fGCiKQh1wfaLRST3RX2AYSmjTru3GW8rSKQdiumJMdPiMGYKKJq",
  "key16": "4rB8tdmoHugJYe6jnazukRbyD6r24DpuHJGMVdyqMWuPCGnEmeiDXdVnQw1sFpnuyDd2BfBGkvUJ6b8ArbtMh9Ym",
  "key17": "2Ay2LeWDVANe178MfMYWw2dWLMVyrRczGFPUuCHMxGWJ9zLAvotUbpjE2BvxUbynuvWuHx4rFxjY2uxduiGTcwzu",
  "key18": "Hd9qV8NRNQM9LBiTHfqU4YHDCBAZWjxG1BEEjLDbyjE9Jh8g6VEEpApUbC92HvCq5AYBmEtopHAQGwWgfy1yNs4",
  "key19": "3jFtWQXfsQtKRwX9ExND42AuggDCruxrBufPjvqDPKrGS7THDQoB73FB7BKwZhd3RmrJcesQoW31X47DwrFz3o3n",
  "key20": "6ny4wADdCvLSm4qHpfVnRukztFUvu3kqkpq9cd7qHgY3crhG6HUicztHWvJd2HebPzSRXeEEpL7A7u1KJrSDmAj",
  "key21": "kMaWG4CGb96mGfVSHbY2T6ev8KggE87xDYfaKKfZKmQsjS7gzd2K4NiecyfbfBh5tLVHkMT3mZ7sJPAZFqNfcH4",
  "key22": "5VxZ4y6Pk7QFkJ4cdXGoYSFJbQvVUjyp5xsTD1tRtqyw1eUVjsb4pdWBmFrYtdfoEGqjrkSW4yC389CurAphzw81",
  "key23": "2S6JZRoGAKkqZE5LGbkSUrvXbCJs57tCqrtFgoHzn3fZYZT9vdciW25tFMWsj31uSfX9wA4dH7tzHSBSXgHknYQ8",
  "key24": "59B1Tj5QaeCuT13oFtoncrbWNsuMDJNkwHPHHNd3jD7bgfJUw6PVmCChvWAm3tgiomqJKgPJxe38kPrfqsnwmypo",
  "key25": "23orT8B6mx8xEBFE3CB9H22NRPCGwaZRo7tb5kVnrMj9THQwCEzGS5JiGKDhH1rKPtqvFfAnEB2sL28vxmKCNB3x",
  "key26": "2schceMryLGZu7MrYXuFVhuTKESYBatsC7iM44RfWBKSfxkkCV7QL4ttL4JfEy4XTA6NTF3rAb4LJmPpYUEC5pCo",
  "key27": "4HP9Csatiz1GCBeeCFzzPgQJPL9PM6rmnhu4BAC9hreS8DWpMwe1dmeAuWQk2YcBZx5WRekgm5WvpQJHnd8crMKt",
  "key28": "2UNkUonxEFEgY8SYEhRWmrp1qdT34F6tooUnDWqGkrczUkobESSwi3oRHJPdc3tFarrivHV9MSZgYtos8eXdPSRU",
  "key29": "5aF7wP8PDxfq5Wq2asSeBx63KpEmGEWvMdEFagyCLHiHDX61gciv7qHf6xs25vn7rgwuNUQHAB7eitwoVDAh9X6R",
  "key30": "5oJa8QabRGSNT17V2g5ckU2W8d7UvuaEDCU4tWvCzdPntwchb3X8CUAFz7QhrmmA7GSVD7nLnvJFLYzUPfzDNQjE",
  "key31": "3DWWCzxNJbFb37y2JUKkRZtHGss2fgg4xCL9bhrCnRJgCExdzo8ztsss5wCVG5Vz9KVX2bTbr2gsCKrXnKRV6WjD",
  "key32": "2qSdEGwVrPZeweMbKhWPr9CvchoYeToFmboHhyRjwVXv4FJoPJN5h1EgQd5hRaHQqr9eWuGQLQyY2wJ3pJBN9cbL",
  "key33": "627Z4cKTVPfCaKfbC8PXuwo8VFn4p7Fa5tno5LxzXWQhdWj4xBd3fjDNH8bg3pfhgjsgRCyu8TPkwfMLumUsCELT",
  "key34": "5EMQSnxNJQbZqw3DdawRKxVDN1hH2dvH2v4dyNZuADUv3kEjRxh8xtruzpZYNjMtDPvgdjZhyiFayJZ1HBLb2b6f",
  "key35": "3b3HiFCJugJ5naTAVMQ7e2HaaW2FJb3ZcNSDTD2b2APSa38c7xBDdgv8bcmL2r4m2Gwj2DjUNjQqpVDV33iVc6Yc",
  "key36": "3qnrtikWaL5x74Cvkp4XLUz8S3aXggTvtk1aLCphbekRgvcFa4pzFsGuP11cJURPXLRYhuvAxMVuaw8yTTijt1HN",
  "key37": "4TDe6uLUiBECBBmFhgJZbizhUFwQBzc9k59poTfrZK7fUQR2QdJeSRPTnUa3LkqsWJx5djStZuTiu8fRDJeNQxML"
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
