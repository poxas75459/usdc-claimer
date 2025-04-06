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
    "2GgioC9Ruz8axJKGnmpBSPBjYU3K8u7SuPUjLyKVi1jaYSPJGmEHFLic8iYHdWV74eXswAHsxB3irsPjFzJH7PsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dS1VkMqMS4wEo6vKEtd9KPDhZDUJiuAGmUznfLizPnQx7ra9E9vvsrACdRLHKRfCGeyhpHtLpnNGiezdt5EaZMn",
  "key1": "3dVcCC8qpDZsnxUPJPHvbdMZi1LuJF4rK9BGU9kp6XW4BNEjoFtwHP2iTt9QGL9CBein4Ec2KFYTgXt7HiKh85mN",
  "key2": "41cLdPudUUVbLkMTiDidyweLJDA1Lr5sUFyLcnmaHVd8ojBUDYPw1pzzbwSdsDLLDh8iatYtUEDyscDq3uhhSJTP",
  "key3": "4km2siAX47Eu8SREv1QsAn758zVoZUikrbucv6pPdcVuFhCBw7uqDjLvwm17VASKz554XEgR8Fiqyzcjj8PWCkKU",
  "key4": "2yzqmxkzTbVxJBKvorwPP9exhd2us2PozocdRytaUWg3AeepmmKX498patzGgptuJ1AtiZgfqqwXzpeWrkaiKC7C",
  "key5": "1GnJBQMZW3x56vkd33tpKRV3ehgC5Xz38aJwgYHc8pgzUvE4pJykHgzq25HA6C6Yybgezq4NtQioySoYVh6rNk5",
  "key6": "42ZweBHHVfR15HW7iStJyQjdJ4KZ7zB8QCA6MAQ5dALtSEhTdmgfJPfURQj5o14KHVTxjTU8qdUQT2TmDaPDHdhn",
  "key7": "48mRZ7WiAJrGsxvnf8UGZbVYKH3MJ5mDSgnnzmhLV8R7Wffv7TjcQWQk2bXcadoUR2bsvxmuhBot5JnGaW65MWaQ",
  "key8": "2tnjy9Y7ka9qvjexgp5wJjQqQjT599yKfJ1rnHpHossVwmURXgtzncxd5yWtgKFbbWMoPRfMtGKXK6qzEzLhoTzo",
  "key9": "4KZVNodhxLYFWGuFQEcX6Vr2hP1Da6mF5qnRa5jA41YDiiZktd97gVs7LqaTggZwkR6QhA5cubrvoya5WXKFrbgJ",
  "key10": "4iEfrxs65cTGjBtWK5hHnmW3URgBoeqgVpDmYfUqawtrXXSzttXidQAfkSvNjVw6jRHgGbWMm7eeRBAn86UTdUk9",
  "key11": "3cW2vWUG6LaqBMQaPmJEu4f9fMbvMCtzwUTCQMkz6BSCKZHrcvs97SJdcmMWsa9nYA2eHUtGTAXiqFR3ZuJsW3fn",
  "key12": "sKGVU4ExYSiRxjkvfidjKsoioWgQj9iVNHH5hkscWV8phFbrsHEogeMwZxzG3zi5p2yx8JDq71KLF6xnqdrSgfo",
  "key13": "2k53nBip9WnKKe3bCb5m8TN1qrf99EhtJjFFMZtRJwUYkdFMC6rTyey5avg7FVaiFCtEyEZCmK6pW7KFu4y6N9Pe",
  "key14": "59PFkLsM8iq9FC4CRiotQRtmVbHNhbdMj1XKR1kaYRJceX297vipBPTyvYLKSgsLbKTu4DqJrtAuE1QCG3c59CwN",
  "key15": "3r3gzmJg4edCJy4M4u3peePGDEZt8eJ4GVSdtGBGrnSwUGzPcbR1nCeJv83SZfhFxqFLvA6wiMbEntoyQVnhmFF8",
  "key16": "zQevggcWiPbXzoLPDQoS26LtEnd1wqCGjgWN7pdfAGSetakhHDE4wLBzMNM8zaVjrEFq4irvKtxRFgPfMnpZMPV",
  "key17": "2Sa1nRco9yLm5w2KCAVieFHYJgY9ufB1ZkSdShuAXxmBTiUt1N7qFCH4ugL2cYhGXGT93xZ4bMDUhWZfHWWVqgoU",
  "key18": "2QfMjUoN4eYoUCEnmPJXsE3gYxGWHeqZRrvZx9qLnZoV2yc4B1jXwxxs73V4bg9ASXmMcwp53k5grkGbwXo72wKq",
  "key19": "5eD6sUm5wt65byVTxVS8R4fSFyzuRUjvKfnHZYEQAJoy8evdRtV2LCsTQ1mcRrcBaMDWz6w5neuJvVWSYYRSS9Q",
  "key20": "21i2wu6d1i6DHwu3h9iaNd4PM2K3w5NJxgBqXpFE4YK5o4at2FgFPRhGasv4UiBc9RQGVhHP8fh8Pjp9Y8BQFUrQ",
  "key21": "4BqP3Uamy6CHacZWa2vT4EKLStSbnm9AvMH5c75sqZK4nQ7EMKXY6NwKXLXAqv5GYp8rdVbaEiW4rnfBYGNzijSL",
  "key22": "D9TavFTF3GRqmBCA4yPBuxHM9FBdHLzP2WS4qaeCbpdcAdh3nj4cfGiaXE9kuBoZSHXyzfQaZkGwqHxfFPz297V",
  "key23": "2EHodqCdYsQFiwC7J7H9XjH2E1kqiCTjZLtLrqM9Cs7635y1s4nuTQWnpwwZdi6GxSJtQ6b8k9cpiQgwo84MTwF3",
  "key24": "2GVQyXcK3bHbmPyUDbpfu2KovsqFVwdrVAFQvLy6iuQoNzMJxDk2y5c4taZL88rCiL2AfXN8wLPXFCYfxmHA3Q1J"
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
