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
    "5hySLgb8SnV2cyXtz5ryi19eAR8EP3cX5WuHFUamEerqEFKWSEyuF6fNCiUNywhuigXfFie5Ka6RgExRpufaWo2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sZrXEDjqqHQGgb2vaaCcJgXKWTTDBE88TtjHT8kRHDugiptJd2RFLDrhy3mRziAdxMm7VdL5TnAtogWDxDKR4Ge",
  "key1": "24L4WhRVdU3Ne9mecU5pk7okGm41cMXVv5AqjLeaHXcwejmoPB6CsdeWTk3TjALrkFzkPrswaXgaYNL74jp6vkqP",
  "key2": "37gEKQXqi6ux6u2yX2AQRjKGL7w8uwa3yHbXX68M1u5WvkxpdArRUMNW38PMCqB7tjZd6qonQCeXXRJnxEWyZWMD",
  "key3": "2LyZ5RVvrDr6SbAq7aZGXBqaUAc6iigwfx8P56HWxYYjDbJywW65a4cfNofM4dAprZVHxKewL85XgRNTULjWn87Y",
  "key4": "3wzXNWqEoSfDs55BwRxfTx66LSPPf8qeBQLFZVyQCrb4ZNNUQS54KPkB2j8wL9fDAd4G8yyY67okTBWJveqP63Ew",
  "key5": "5ka17v27qLtpJzPfKttw7VW6spTybTDqTdeCc2uWuyAHTVRmNFfsXhm7pDWeq5KgreNB16p4VBwFNiDxVRMEnrbo",
  "key6": "59NLBduMbdM1x8mUSUUBJuAZHNWb99pBdADe9Wf5dJa3JeS8i6iQY5KnUSFofG4WkNoMGXVRmKsrYKwr2gnVhZz1",
  "key7": "2h9v38RFuiMobCwEAxdLgXatoZQKxjZqaVX14SewsuFr1PbZK9KhtxFfmn6jE3fd8agv8UNcCyg94H8MWJoxjW8r",
  "key8": "4MZAuJrMUUZPQQs3cGYdG7N53VLeKPbVBHmJFNYpx7AL7D4oe9kmeykQM8Mx9dWZFEYEL9GSdW3QT4JiEwfjAHwu",
  "key9": "4oktTux1TQqZiWmfe1Qhd8JNubRy9yTXjoh8vBEa9DyeQSoUSDCXAhZtUwEevAHGoRY5VCCe4pWPt1czL5CRoowR",
  "key10": "oRSxdjRgyZLmjD8Et6vAL4U1M1ZerhqCoKn1DQjt6xJfrLdwQmkBFbjgQM5VMAhqTwRL8nVPSKLDMBYDSubKsfg",
  "key11": "5JvDVa5bKLpKb2gHy3UziDjSFqbywqC7XaZhkanKGvTrKrVoiuhJ4qN7yhXSF97iGytpyyFFMyHkbbQ7nUNwgdB2",
  "key12": "4r6txJVktvgenGQtwTun5MK6TbKqogv5ycSCriKhDPJHwEnLHHcYCzrAhQG1S6ygtm9JdASXU2B56zKmvaPpZzT",
  "key13": "2pdQWhDE4wtQZaExrG4eQzcMZ77GCYMjPeQgWWskCLHm4NPciHr4WdLobzhKQra9mmYfQjg4euUH8SYQwu752nYv",
  "key14": "5Nuacoo9tb5sb9Cr8pmg9DwNnFtQdHrGpQ2XUzZhXo2wkzabeXmmSoovAvjBHxH4df8o9ccjMujnyRyosdXct4BB",
  "key15": "5oUSGkRms1Z5BxW3zXUDEstVoRvUxswCCKmbP2wkgb95WAgq7kYCsadB86kQcnYmnDbbvzsbaVY1FggH1Liv3mkK",
  "key16": "2xPuRR24mamDSwk7hcWEu5M73GhPL6jku3kC2qysC1txXq8LkrSE1nodMcXAwx9mEzJk67AyksqTboE7w9khZP15",
  "key17": "5iwFh1dCMg4S5K64JmFiDhjX6XEhin9fNStjitjM74VwAaAxZJBr6DHgVBnRmfGrudFk9yyrA7ob9qjiGMhncTt2",
  "key18": "YkWLFNsxJK9hbjXC8oamg4VKCcdbuM8rRYTaHPAW2Pm9pktEVftvUooXqugoV8J9i3h7FPfMr5V3zBb6Va4Ue2E",
  "key19": "37J9wG3XWwg7BS9PB4UGPxfMoNLJXGj5RPdvaLKN8t3676gTfVWu9S2Tih8BHeCNK35gt3aT8QGfbMLLwdy7KQ1i",
  "key20": "5o6uGA6tF77VY2RV5iHrx4f5aMysbksABVmjHozdKMLEducomd5pRKXtLnmrsVnEapAosm7mMaGYLrM5jBMFKMUn",
  "key21": "4MLFp9BxzKr3okAvPC2GYNb2BFHNqN5s5Zk879QHonPczBMhNf5FizM6jk19YdCZyeBque6zdp52C4p4z9ctf2qb",
  "key22": "5WTWYrsbjDzPtYJKcJw5QcpSaxVhqq36NeHnJDj7gzLbPeEYnjvWgxBhikc1GtpDvUGj7rXg44E2upU2GzqynEe4",
  "key23": "4QQwT7rZhJuXZDFo7y4GE5E9XrsETxdaPAGqibrCpkGtaeWTciHmPVkNrEdBEMbSjWYLjAcNPXRQjzkhD9n6pXLW",
  "key24": "5LaSVrv6abECp5v7gQKmhPXqU8BhnyH1pdexKEvtu9sKWPPfg2xj4rngDnXvWt5d7C4j1cabSYM2ornb3kkFodQp",
  "key25": "3duqs5DXBzq8Q5YU9KxG2UDU65d8hFvxhczyXxvETVUCyYK3DSXFqrhZigq33jhmdsoCEgzMh6pUV9mNxGcjj5MQ",
  "key26": "5GQEHjUvkojyMXPD2FDe51rm32RRqmMbgT22WM6eobc3i7jfSuwF5cQ77htESZjND7fZ3KHmbMV8xT9fWMKU4vTv",
  "key27": "5iCfuH51kSzXbmqNCgV9DJ6pJCxtDjZLhGZbfhQsLe1PVjqiPxpyjc3P5PjPpTMseaZGWyHgatAHCkgVULa4Dey8",
  "key28": "WU7aeb4KT3cXWB2YXgUsbQmKWN5P2RU1zo4FnEjXNX3jg3Y8wEBaWtQBLW8dCjPox845uxnGa81HofqJ3uwLkKC",
  "key29": "3Lacte4biS2VkAhAstMp8skJqrmLz24ZA4VJEmMyuVyjQrznXZcRypdqJByMfKy74QUmQ3W2LVsUEEmJd6pqaEpN",
  "key30": "5F1WcDQwyuDyXoSpXQFQ1jNNQ8N9moFewpxgZakXRwCw1FnkYQEL3aiQ1N758afWk8xfHrhRWw83A5muXkrXih5G",
  "key31": "4SGryEPVzgVKcp9KckAa9G6YGyd8jzLZCfmSzTzEFaYipdqsnH6DWYaigW7oDfwCtduQbNkbn7MtY6wLJ6XP6SKz",
  "key32": "2eC4KaA8MYoWwhLHEBhw5V38JSz44VaPethDtDgAG6sgD61RYGbJrvaFYmyEMDen1RshBb3d4hfhTb3s7xue5YEP",
  "key33": "2Fx5rHeNzTvvURkNzJFpD6RDCs9gbpxp6XTqgnKHVnS8bGYXbjPQTkLYdDNyf3X9BPy5g5HRT7C4jDgASqVwUzcD",
  "key34": "2VTL9njWNS7GjvPiPKmxanPPx7MyzYWAJNSBT9pcpCzgktv5cfJgzbTbJFAYZ3AXZEb8VYpUL3nkku1652yfV2hu",
  "key35": "u4Frqn3iTdqyQpJtcRDpxNXPEFj4x5EGVP6fstNayidRZSHtx6V2dWzDNvM5JcTYJXm7eDSaQUEkSQp9QjgRCiz",
  "key36": "57ooCzizpxkJpCykUgCMb2QNWYhtdLrYiQPYNNxfP2jofou37P4SHcG9gkiXQNeiwucmEYtP8K8rTkPWRFsmfm5p",
  "key37": "5KX6YpgJiVvgUcphhwmSWeqpz3qej1w9vh41ja1344BqiWHj8osPtNYnhudBw4dGHboSDGecapTEMnJwosnX9Fdm"
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
