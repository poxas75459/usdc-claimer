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
    "2j4XA17T3L9Z66aPwGPN7dMjfGY7EkfzqFV8uT8E52drRuC6wDpPuJX93X2vPyTz4iXpd3Sq7ZdrYTt17CwmsB1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xQ5Dxj3PiQGgH2yktLxvp3nN51tWniAn8zcmoVAhFJZ1f5J3Lm8A1ZuuTTL7KuEw3zQc2ddtyg3aReYPUncbEJ5",
  "key1": "5RqeBpmy737Sx7FHqAkvDhr8vQEXWVPdcNpDR6gprcgevfmrUGZC1ptiSTk2fjydj4hmXiTAuTs2BPaAKyQAssx1",
  "key2": "5uPgqbeAZKW1RY4gER8TiW1PsnCwpSqnLhL6EoaxXJBiw8Fi7xwy5YnrLMjLDfTQBbhfFMXAjeegXKNRDvBDGGYf",
  "key3": "2Dzrk2uRGMMQMXph2kHQ1ivU2zCg2ZyM5hQRDAjZBcALaMtsNCgNjNkgj6ZVt17GnKJ72mnAmhXPk7sSPcwUpjNY",
  "key4": "3UxPt8GfLp639vRmZDuk7fDoNcm1Sn894XAn81JJVUb6Rp1z36qMyV4DN9w1tFBc9hs1TbD7iQ499W68BS86SdPn",
  "key5": "P8wHwWPtddyjPB8s2A9D9tqPoZutTq1zNfLSWS8iguvojwUTfeUfwiYv4ja7JNU9YCLaHnUmgfvLsxYDtQ8sL6j",
  "key6": "2mSJm1tLYiPYE4vvsC4T43cn8XAtbT4NkEKp8ijmeEXxUzaG4SACJwsMybF8sfhAqaAYzWYgcdSvJZqU1XWnJpfK",
  "key7": "5CbAf3oKrzYiAjYUaVp5jicXaytnNxqAQg2zrTTX7HM9jKY3RgXuNY8VdshH62PVTLTKiPjA2k5NcHR23TdVB6M7",
  "key8": "3cpGmcvSFgKACGSw6Yj7FGiF5zhR857SbhYqeHcSxs6dwM7NcktoVBzJsowt2CrY8VX8KjY2QNzSx3xSYr1X9NuG",
  "key9": "3R89GqNBRfwRoEJbZhW9K99NpMRaUXbC6yPcQVq1tGYQcddATM55Yf3KZWPD6TBMcUtv2YBCzVaUhsvna9LaxCeK",
  "key10": "n3dxziCbE9WpbQHYW4raagqQUn7S64xe8CTfQ8uiAeCUXpsLmcpikJhmxcuKjt92SpVS1TofE4ao7juNmRoYKTg",
  "key11": "2tyYPvoj1vg24AU3VeYn8ujR4GsRUyBfaCkkvnejjrt8XghjPuSnBQo9xgnmXzdrckiLeRdDKfAYBroUZNjgPCvM",
  "key12": "W3aKupKUZdzH6AhENfGotaPyoA5cGa3rqF2zFSBSivF2y6wq5yMRiFsCubepA92WQjfhpf6axSZ19DZ7atYdSWj",
  "key13": "m5FVXhudV61MtqS72Tga365cWAjsVd7EoQNP5B5aocyJGmqLkrm26Y9kf8pcHmqNbgGCWd4aKpNgns2RXM72STR",
  "key14": "44GjRcdQ41tkTzYjHpHpVtFSGQLFs8LAJ65ezdvbmq8KzXECQ1FVHdzKaEAyL6ASE4viZkvLGeLkNCa2H6RDQJe4",
  "key15": "4wGnCf2F1UW3sXr8jhjiZd8gd5kW8wNecDvaeq4kAMQSyb8Sb6CnSWMkwND8CYXWVga1XEaFAJpjgoWU4mLYMDri",
  "key16": "563kg2diVYg9mX8bVLaWusQ9x9SwQKZtNfjh6tuj9BLvVKyB7HqyphurGnp6QNkhKPLGzbKyh9BftGbi2PHeRW9E",
  "key17": "64bLGXicPi8kfF1f3xDJtP3TjMwv9naU1Yp4ccLXVoRqbZGQMxDwbsD3kDRRATNgQhHCfuxZwCcohdgRvLtEhtQ3",
  "key18": "3NaeojUyCnawbJQg8rxKkVqywnXiWYSF7qqyyBFWKzXn8L39zJrL4PSmiGXJC5vk1A45gbZRG1sZYLCq9gBqswJS",
  "key19": "3dnWDkSL6kmYsvFupD1dRGkyVCigjSajP6PrVPyVc63tstVNPD7j57tDevuMMwX5dgfDt3euCwA4afa6wvXqZAaS",
  "key20": "5MtFY6HYMLjL1dCvp6Z5uYSD7h7h9xxDkVsxymSpU53Ws5mvU1rcuqnqrMw7VnDWKLYcZ1FaHNwbBWR36GEdKWS5",
  "key21": "5HyWfrVcD6gtsfY8Vv7igQQch4xzL1wByFcYLAvSoXP5sNbavf4S8yVjuRjCP3MsgGKLY8QsohHbjgcQn5TgoYUx",
  "key22": "5c9fo5AedvnoQcu5sjtP3iG1sLm4WLgpkZma12x8QPM2zF4EPUPhMRDG1HcpNGBsmgm4vVxzqePMYRDU2wKYUks1",
  "key23": "43zmf2zkr4rznPcJBAtAyrCnyuocSQ8MMNxmd2BYTJuJngwTJHMivfFjev9SsmurEW2o2vn4K2nxcLTLj1EojeEL",
  "key24": "2H5KvFRTRXj6vcL1Fcpu5ZKqSnZCHwjuvFCJoDRvrMQ1o3GvP6v7bzkG9zXzQfZbkVJ9CFP3PDCGBLhMdxZ3aA73",
  "key25": "27KBWzJsSXBjnow4MfzCDstHudmRmAgwBf1baDf6dRFvoQmQtrkvCrVMSiNtLVmpcs9F7CgWtwaL4vUeLbsJeNmE",
  "key26": "3dXJDXvc3jWubit9hUBnryD8uW7EzR4Az581fa9rAFoKSAkFrPfebiq8EsufKZBHMFS5thHWqgkqDnnXeUSywcKu",
  "key27": "EmKRJYcEWAexSM5mwLuoAwwtoZgYY8VRdGpz5deeU9unR7ad8Aogs6fveJw7aUBYNCuU6XWMLHojc7LgSop2JGh",
  "key28": "314XBVu6jESAQV42qP7z17hxBiZNRv2pBWnrTfcVEo5GUF5oMRgmRPC6VEjSZtdbwzCsJZ5jEnv4dVf9LH1xTM6L",
  "key29": "5KqPaR2KMZsympp4KrU2Dr8YRsZwq5s9LjnU8haUKj7whpuJcTjbdP4uQJjr8UpcCS14zQZQTEWWD1JwiCdA7gLQ",
  "key30": "3v8jSuzufpp136hCmYGw8fMSgw9YhRuPCJkaqMd6S9AhEP88z223io4QNUUqtiqvnkCn4RYSHSJyMctvuSWBggHo"
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
