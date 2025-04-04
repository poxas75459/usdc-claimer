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
    "2zHJw9TW3jZHYKTSsaBSFQSSRkBdXZxWW8dE3LLtE3hzo57cg6UzLiwSDJgr6XerrcdJpaUjvE6ABop7BxYcnb3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HJfMk4vHPYjoq4fTtft7bxEccPHSMPZwLHaBD28jyC5u1svif7iaGemLDvdRAupn7aPfZSzuipN8pz3Nxbc8N6G",
  "key1": "4JaZLbPRadpJsyngp2Ft63NFT6CF8SJykRJ4gmRZio3Z1nT4LiWPg3hEmtgrrCyfjiTPWHJZ1ZgqcURWdJAvwEjB",
  "key2": "vCwJkwF3zwBbh16poSRVM7zKoSg1k5eQvomB1TziXgz5VjB9FfEx6FVhifvxHBzHGNJ46yD3ugs4LHEiGUFjJcv",
  "key3": "4QkpVEsn85GmAgb4VQPamGd65wq2DLRaFHfnZEdd64WL1a73zUZWMtyzGLCjZr7ruzzrMVFmQqnAKbHUCVrbsfZx",
  "key4": "3HwLoQmc8R54o8ACT1SnXHAuwuuDAb2UJmPAVFSXHZ5k89YZ3JdA69kvFWcxq3yi23jbi48bHa2kAyoG4bgSDSaC",
  "key5": "2VyBKnj4wToyFWMKZ56r7Pza1jiNYmQSspf32xt7MEXPMoLR66EAcAEAdEd71brweAq9Ag7zyfDd5M5MemCpbH9X",
  "key6": "27x3sa9t3taetqCTvXGpeKmDiEaX2HYJfCactSicJFecBdTwwX7pwpgZWtmmwRe3gHMJrV1M5x4pmzHCy7gMZsZY",
  "key7": "wWJSh9VCgVR8VaZXB3XqXormwfMYQFZwGQMsqxHJxmChyu5B8k8hh5FbmnSKdtJ2HJr8jNspMSJsmHWvfei6ivF",
  "key8": "3kk5jwRpHm8D8Y1ZFHFL4D4uo5hdfn9qoyZspV71sufsAG9nzFdmw9NnzNgbkNrTmWxUQFtcVCbwzGwe3VkDptJx",
  "key9": "28sL3Dpmks3uv2RX1p45CEHq7xALCynbGVXTTRqoUHgb7shzsHYxnjdfK99zMY5CbqbDL12bc6Di1nM1v3QeikRZ",
  "key10": "2BzukEHmM4VDQSRrLX7UgxjTyMYfCq62AbgneWzzuBXGhAnek9L8xYv9xU3oi5WZWThErS655rJexgD3bWCiiMod",
  "key11": "29jNeEyvs4fHEY4bZmc1KBYzsZf67GQGTkc3dEj8sgLrRwk2zLgVd9uGqBMX5zSr8vvR3XDLuQAZnfktHgzcNQdL",
  "key12": "W3HP1mdCh7Qn4P3XKPe8oxjEz4oJKycT3pwaHH6rtTxMN9GYR1PUycFtJr2tStnFZq1nxsmq8zCkD9jUuiWK8Ed",
  "key13": "xiDNk5WessYW37ijvaMoiA36PMRHVHy5w2ZFHMhRgJfERxYjQEith5gpo8otsULzCNcFqip8VEiSoRk5wATEsxN",
  "key14": "3kkdc8UpbGePWQzojWLLhGmXpZzzdLuv3nUXTK6WFHUFoKTQDH2YUkUwVcdkvhZDAHyiaXwriQy895te4ybZtaut",
  "key15": "ppUohQ9BRs4efgJqwraERqT4kFLd3pMu6RtvBiXaPNvPciumPsLsaQsujk2eSU9PkDdU9ccXVw8wLYBc5UMhM5C",
  "key16": "w1k2Toge5vDiJ9gqU8gsiMQAsKo6Bbdphs4jZD5RXWhd2tq2YtoGkDRJG7QjWDCxRGNe418DycMrW2wHXxCxNbW",
  "key17": "42JgF1sL78Q7VNqahXq4NHTwVtKV28onqTv42s6wUm1vP4jivq1HfagwUKz2aFubhGipQ3g7H5AUDrQCstDG2EBw",
  "key18": "28owixSmuWUsFRa2Z4F3a2BdZDnCRRzzGTxi4RwW7cCpLtxUXvzXVMtACTRwoPJkZWW33kq1LGVtqYnyBSiWoLf7",
  "key19": "4U1AkBKxqu79NSE5natFWbKTWaxxvG7n7C8Sqv98Q4seLcYu5cNyEqnLCvPYLWFTji6mx3Bj3LEh4X5aGAXBUMDN",
  "key20": "noDoNf1L4DA7R6vF9NyV41SEYqz6xk2UKFufEfngRUkJfGMuFRfJzuGXakWDNXiJxHZowijAeQupMeBStKtLSgQ",
  "key21": "Ce7Gu9vPjLHsEuPJChjmdeiPy1y6tSBJW9wqLZP8vk5g5KMtrJ72sWnMeTjninA9jEcXYXArfy1A2uCufJhyXtZ",
  "key22": "2RqptUgYvd1CDWgb158ny8D7peuCxyXbH7NfcPUkC6tYjKkPLWaznHbxS1pWGeQzn41mhAHzs1an6NHwMTC1FQ5h",
  "key23": "4s4XVrLiYvCrxhw1LoZR8cLK4iVoHrU3eca9m1JyyX1xfSjF1JVPrR4TsuCWQDAQU2gMt15Gxn66GZuy1oP2iLMC",
  "key24": "2nrx2PTpw7HUUsaVrPjgky6TNuSk4VBemAsqt8US47Ups5pVenXQDGwLMg2jkLVh3XNYU7sKZrY8NhLMf2D6iTag",
  "key25": "Y8KLwaJ9XAbH62iu27R99m3cRZSwaGEDpzWxoTCGowGhDeTeiEruXCFURBGNKFZLqEFBPkqkDtTu5R7x3K3gJDe"
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
