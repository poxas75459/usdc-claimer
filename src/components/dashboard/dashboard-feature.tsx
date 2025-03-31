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
    "5zeBSfT51D9XX5uzwn87Bermo63H4LDVuJNitkkbTZ79KmdWSnhatW8ractyA7qkKYX4RVg9AngwN4XTLqH5XyZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LBYD2bR3uRE3Lo9dj7r2D5hEL5F3Q2xuRyiP8HvrrF7Rea3vzB8UhKpjJRM2AVjxhZ5x5ckkMEHJF19vUWB8SQg",
  "key1": "3ibGd3hnJQT3zdyLxdNu7kfLVaZKGKGUWPJreSRL6MvjHd9H86fYARExYmZs1FPZSDVpcNrWCSzRcYDFKCVk4ist",
  "key2": "ch3pdBHuMAj55VncqQ1zG8NmJqvEui7J89HaLVw5ivgF8SrB4boFJdvc22KvMTXtjVwBRvwmogrUjjekYpeHiTy",
  "key3": "5UdSgp5Hb9bMEJBZWvz9dnwn7Zpk9gqpUxpt5MjMBcR5pCywisbfX5NzcydEP7vEgRuvdr5qhr7ziDgVDsZuF2di",
  "key4": "2SKDA7oePfxkPFjTQtenrRY4qaNuxp9rCYscgiGk3KuWkUEiC7xQTpV58rS9GjM5GwiES1UeLvjYps5gwzQuEhPV",
  "key5": "45JHU1WFTLx2xYGTBSEbuof95FQugEZbF1AoUCPurJWp1i9VRmYuWPPayGTnESp5eW3vPRKtxbE5vDE2yEutbYry",
  "key6": "P1Yo3VBpumGnJasYV1eg9pfappuUUKJR8Kt3GGHbW6vpv7HbhKn5X6ZwcJdtS1AzAZXAQSjYzKpqC1ZwCPy5ifa",
  "key7": "4vjPL7B5jzr3ahEGAP6QrGKda9qf2BauR91TC6HMNLXaZUbCZSjyVdWoMrhjwWqT1Yd9Ej8fUvPaHePgWcTxiaHW",
  "key8": "5UmJAf6iDDyYF8cEyqjxKgBhwGeDfEfrDL5ANYpYpjcubaX9xtsToKxL6LnvkpF7bTcRdoDvjQLYfdi8mcdFQXuZ",
  "key9": "iZZ4xrnDxB2fV5PxTLKPJMProjvyUZH3gubq3DZStE2J1b1Doaot28AJPXXXxjFiJQJY1n9D2XoFHetqjztNA9Y",
  "key10": "5hj5VACSywvJxgizAttWDzUjgwysdnh6xUYzgcMSoBY9CUdxH2BRbUm7BiHL5sSDhSeaoLyjA3ebVQB2e8apvGeA",
  "key11": "4iuG6TstUoJyhMd81FoxfhcmJ5SVF566eK3FPsGJctHzdaGxNjiyEFRiY2nTEdSqynRDJF8KmTnY5eAkkNPyFTUf",
  "key12": "3SiuuYcM16WLQV4PzEVrnT84QRqHgjdmZtR72LLrkwh4fovSP6FwwFC4uxvRd6h5KjUXgn1M3vhAmY8Zr1psgbTa",
  "key13": "5J7MxhDxGWEKFWvU6w1J2Y8KtxuAp2u19BSszRgWTm2LCqhoDFNWfyKCAycF8psRN75VUyo9YMekX4bDnN4pWDXW",
  "key14": "32tccHSWYeE1vxd2Sp6bQLapjeZ3PYd9PJeyMSZ9os7cByekG57onmZCdRoqpveBcxRSJeB1Cm9gvkYwozDPSDcv",
  "key15": "jeN1Vc1mfNgf4bXJUrHo4MsTz5VfEETFqxuhXxZNFtT2S2uXhb8jmWBhMccyJKLTuCPMLsfBtVW12xtgDdKeGgM",
  "key16": "5mbHFazMXxTnctcnyXdT7twGec3xXyqEPBZwnXaYiVwpamBdqFb91ypSyx1HFj26413JD6FWJoAgU27kKwszaeth",
  "key17": "bah6uaPbjqVTQ549rUVgWZaLprxaokWbPBqD73DnhQ6GzAutj1EnZNHAcaXDKp4yxDpAR3HJfT4cskiXuoe4F9k",
  "key18": "4KzXr9R7v7CHtmbj3HLHdXNTWQkbQguvEtzHtTgwUkqw6ywMrKB3bTuJsA8nvehHRQfYEpyXuNXdGrXHGDG7JE6z",
  "key19": "28FGxSpJY2eTnYixpMhrz8arRfEJ7pG8xvesgJLpio2vypAiYoUSriHdTfg4ghenoCjSN8Qe7DgvNJBHwXmjNQHv",
  "key20": "2PnQjPH5chC2h9kTCCnTdJoajqi9dAKYSCGxVdM7aUU252dNUbTo3rJ6sR7nVqdmRDNkenfqJeFoxfkUgZA1J2Wr",
  "key21": "3rkDuYz3hH4eEdFFjcGTX9QX8nqicsEHaxF5woy4ySgfbDkAta4PkfcRHLXMSU1ds7dFbjGfTSumxCAjihFuzKe2",
  "key22": "nrvwUS8TTp2Cz7RMx2X2fYTiT41RXN3SABanBGFSQHqpssAYs7h8KcqCtB8Dyr9BMF5YyN7X6fMJuL5aAbnQgFA",
  "key23": "4JjBMXxjCGoTmsaGcWbdCmqfprhm5sxoG6QxuUDWwwejhTBmReSNL9KyczrVqca8sdB2PUNfDeMw1FxPPV3A7CGK",
  "key24": "5HgA1rzmoXQ7Wb3ghWtekLZ9zUBUnrtPqXmLgkxkumoDjA9mKnE8sc2ymvaSiLscBKHXv5E1YZPfNAGHR4WpTjjd",
  "key25": "4c3d3cPnTXtQ5SGTPfd5jMqXDnHXMTeW7Riq1A8TkNR53KJDamrJ9XoW8Qt4VihhvNng34wS4qQPzECxA8x7iu7V",
  "key26": "22Mrciv2RwA3BeB57kHsskJX7cqWCrr5kt7ZV4zUrj5bGkrqarN5AkjRDMExmRrg3PtwcsYfjn3173o3CbbGvwG7",
  "key27": "bPAQMgAaTnXrbExjVGKr3VwXJsUdBhjtYDoe4X8wvEpcQDdkuxiqDQvu7XSvWoCXuTPwtkSWh1tsvTBSacyqjVj",
  "key28": "pGY24banQFvrYrbLTe8uxySKVtgD5jxmDk3kLg5ZUajSv6UMq91VzfxobeYCA5bWiBV5pJXgyDCf5FrR19ywwoR",
  "key29": "2imJPa72ictdJUFkxSCETctUvV3D8cTDsX4qSCTK8eaJds7agNVFPnjCSfckn3MYNhBAV5ZFG59FYPQvmvq3gU8X",
  "key30": "5zLTtafxSHZUjjjnsK3DdtziNqo7CzVATSLVRbDPY97FYXVM5JFCWqbZofjhikRQn7CixPBeG6FDZYoGDK2E1D5e",
  "key31": "5WfpKhx6gTArR8uB345sxD4qamMau6tbQTcRLuarPXCP2pQgVefDd1D4np4nKuCLhSyifYiB8su3pVKBqeeFrmJx"
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
