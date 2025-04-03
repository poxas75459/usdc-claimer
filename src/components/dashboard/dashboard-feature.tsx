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
    "4ihgTkYBjkvoHHxDFUPEZB5fJtMEiYrbP2C61G2AakejD6nDZVUi9HaHYiDDMcyadHU4povDPSuWmC6k9Y5CRaFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fxdfgr2uQt6KqDjokkhttjHQA9MUT9GigSNmCXrK36ThYwVSvMRZdASihxSop9wmPdK8mWCkWfc6cev1oivLJVe",
  "key1": "54VUNsYCwbvHC8Y2TEpc2X6qiV9VS2JYypwCK7daxr1ePP3uCHeTwHdgqRcmRSHbJCf1LoRrgAYdtpUkvueFN8rJ",
  "key2": "4AAdUWoXaoyJkH5nQt3Uk6whyj2t6TbNi3s86ezWuKmPUMmMa8qo4WoYKUHs6uEhxjJvW6ih5yRXdQrSV1YncG3N",
  "key3": "33JgdHazfVkXNmh2Qd8mGxBCapcJNhMohvLmwj7q5gNoptpDQkgMqGJ6jkA1o5q4VxeYBJkFaeFhqPhQeycPex7T",
  "key4": "phdm3oNuEb32QeJKYjb7A7QzULxLQnVyztQDjYfD6HWPsVad85ssrFBDBg3X6sRsqnLStHWBQ1WW44A8RrRS5qw",
  "key5": "2ew24M3WF1QmWG13x1tGzMdFWrXdbrx1czVB8qUrZbSqMp8N82catuHSCGtANHSarVRExSq4RjQ5rxYSLuiWjH22",
  "key6": "2CejwU7kb8u8kom8yt7AYDxKGf9nTYk6hBFmzYEmumCC4QEEFhtMVZLAPMxHHBfA7RasKQrTX9vM3mfadzzLrfxd",
  "key7": "5fG2S8ppqGynTvXFKQjPKy43Bscht3f29bKCG5rVBmdmnDpFBoz1uwSW1R3cKwwyySsQeL9kEvw1GGbHLXohtKsb",
  "key8": "2SbCDZ73QfByvE8AxSFLjPAPEtRsnPHNFTbMvQjb5AkpD6JrvtGeUu6fsVBCDNnFUBr6WtQEp5H1vmUsPTmKkZLn",
  "key9": "2EpwBX6dhjNmbE4z4Sc88Nax3YwC97xydhcuWZ1q3xZBUggbZRnZT6ct1XbnxFMKuTfhkMfTyYxMA1oqvBZJUFkd",
  "key10": "2PDj7ctkWgZ3XnVov7fu1LA8Wb6dztJywxdtRmJ3qe6XRL5CZSkn8t5EHbgguodt67vULfoqXNhBB1zFN7w4PDPf",
  "key11": "61SJPjo4Rnr5Pb8ws93iWYHjA2PWmcFVAa7xghL3CVJNctBFmgh17RBPaxJUZaxXVo3jG7aiT5inBxSf9bwYZAzR",
  "key12": "5JnpAFXXUctCZGpbvP8uM9pDScc1J8SgC8MKg9QAFfYiAe19PEUK94PaBf5aA92rwgJWxGoqqJ3vnqYRfWkfg76i",
  "key13": "2NFtQfvLWNaH4QD7oeg6jYPvgMqHyVGbJ2Gi2bECAoHrmz8g6VKyhBBzERS9fs1B86ZJf4B9eTTptPoqH9XJmbdJ",
  "key14": "4RLo98U8kaLfCo1NVSGLdYRxkJjtsLFcpvP9242bNn8CW3ZnAthfJr8S3vbz5uYV3f1wURJuqoAmtVffiqaWZe1a",
  "key15": "4i4SCGL67sgCb5obSbBRXfMgefcLG9xuSiEThgjGqXAfuRdN57HZscfgD2koCq5dTnqy66Pb1LWQ6cHPG4qYjMYv",
  "key16": "3KP4ggNYZS4AN4pnwCcdDuxMf5ZBxSZhRR1w7ffs2jTTej9pFdaX6XMtE5cveaMZm1YcbRK22stj4WgqhhtcWuPr",
  "key17": "nuvNDVsJmYj6M1TGa223fFZayCTkndDGbiQBTE5ZzJYqs8omq3ksD9EkR5v4pdJvnqX4365TEpTfkeRkWmMxiEW",
  "key18": "35sWX1VaVFjj67d1Uswu48FdVN59kJpj3bEH5fZMFhjyzdHxpYRKQ1ySjVa6A8k1rcgXnJfECbAv8gPgrzLvo8vJ",
  "key19": "4sMNDWTVEVHABkhfsDPemjoA85JYBf6RYH3dx81XZxgyfhfveiVsWrgNmQkvDqtF8DBRAGaBheTFddvuqMhbXD7t",
  "key20": "3CEfPcLj33YdKuL39Azm8QGZQWGFh7KLGqXrruFJM5tbq56x1MwLXPsfDWJQpCzNd1ZqoHZoeNjyufpCWArFEfmu",
  "key21": "3NtZ3kFyuq9kspjqqDEfJ4jRnXSS7wYrE4VwsTunBD4V19TwZMdJUynxnQCeKWmcuuzpw26Zuu9rdYqEiKvwqj6x",
  "key22": "5cWbJFUJwQoT7BSWaogCo5CEHPtsiE86VHzXjb7BUnKFBVt8p3EhtUDUM67s6B1VSiE97PLup77YuboZK6JpoBeE",
  "key23": "3FNrDyshkrVbc3cRL1p9uGqQMDZykMTs9KES8iuuGVMQaAFhazZ67AjZr7kU8z3qBEWemFTQCZvfHHgg9KgWaZd1",
  "key24": "34i45bJ6QrsAb6ZGYBfKFXjWjZX7Htnx1MM84jXurUXZBDcjASrgWxfnYN45X8g1rrsR85CLkBShKaCKr3YSjFJv",
  "key25": "Aj2d7eoKMJoZnRN7JGbmnjZu5rxNT19vUz83iWcmHDvFubTgWqP3xqa7NjBuKCaBR5T9VHx4juvLz8P69d88qWw",
  "key26": "4C7EEm9kPTo9p5gnxhqkVBnf9YZ6NnQ8JBqb9Y2H6BHiFzkYSWp1A7JpRTRUZFQtS4bBCUsoTBAaoo53Eukd1CBp",
  "key27": "4rjgHR8haDxSA8pbYdiWqHKSMfarBreGYg4YY6VtqRk1JUCxPmF7Mn4Kf2WYhm5WjCLZEJruAEm6t2D2Bu2Sb7QE",
  "key28": "5sSw2shXvMw7P1hLuM6B1v9NuqzU8juCQKnrt7RBBd72rtmDjie6TnXmWWQBfkfhPedwkLunNVUFWPHQLMLFycdw"
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
