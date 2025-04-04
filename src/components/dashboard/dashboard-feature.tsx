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
    "4fFdxuiWpH6BVQEC6U6cjieM74MRhwpasabGoTmfPTYd4APJATV1R4XyjLzNV7XVu9HsfWv9XxiNr76kqSCGnmYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XcZXLrW61TXBWfpHwe7uoFBi9iMiw5x2XN1wNRiyHkfGD35hjCYonKy8BTrwJYC9N9qPajMRpsNgWFLhpwYacCk",
  "key1": "5zcm55Spkh5zDPLk8NJkzdVWqRjUBfU6kQHQobJpwcdzKZA6VRgc5jKkk5ZtNhcWD1NkD75xkFsr5wroqRcBvGkS",
  "key2": "aw2cP3cvC4Qtax3K9Tm9vp8tZ21zk8rkjMZPmTpdmvFcPQPJntMxBP9WMkdamLy8GcdMsP5T5HoujKwYx7H82gg",
  "key3": "4VTrfiWJ9qoGWG2DcFivwazJ5kQoXQfpToVcDwzyX5dB4fPVUA4LbiDi199rVjFBSVxNZjVJNX6sJd4EbApdMMpX",
  "key4": "4RUYAWPS1cKf4sJfbJBXonm7q1wSz39SFj9bRFspR3PaPEwxaSKbNe9tenS8tSFPEsqjQgVNHeE7dETNZw98L1mF",
  "key5": "2J1NfVEjyHZ9CSNmjk5YuymHwquMrTZqB4Pojj3GJLke47G4SmHVqygZjqGpA64mrFUcewnDkhJJTx7U1FW4TPQX",
  "key6": "iz7VKbojf1PzXQMHBWLebPs3TesJs8r85pTy2RtoLPQ7sgLMYab1jL6Lizv8HSWb2AptjFQr4FkbdtyPWQBsjG1",
  "key7": "2kiJM9kKwvstH28j71vAi7SYeAZbvu1LvYd8afPH3LmUGmUwmFpisVJCu7YNbee4DnQWaQNdSCJsUhnPrsPbrp64",
  "key8": "3eadohx6xF5gGgtUGsJQKHaNY3YMd5UmF22d1myGrBrjviYTXTvwLmKm3KKyDBnGrntY5N2RMthJLesmVKUUix7V",
  "key9": "3gpqQaV1iYA6aY78kLt5xop9N5jpGWzquiJz1LUe1YUKdEwMAGMPjg5nQBqk77DBWnemVn6guNzpFpkkN8XS1fnD",
  "key10": "55jcwi66bHudTcNbyHSm4tTnagEg5ZVsWEGpBAnfEBpLfsSBPNnZB1gT7p1LT62MJhuCVCJvnbcxyAtvdcJNZA2W",
  "key11": "2kNMwbzpmaLeEp9iTLZCR6HszxSzSLASHGCkYDoHqgB85twgwPjJZcPNCPUfo9ysBJjPDFdpashMoZfCZomEiF6H",
  "key12": "7NzVPLxQEG6aV5aBqKwmmGZpseRfphw5vMn22yrhPwaqjqqNkCaeGMevPx3NGc24eTWJaUGdN7JGsWL4rBddTmb",
  "key13": "2rwmpUiui1hiCCfdW9q5dUx1JgfnFHfwi19pJkvUkD2x9BhvPYBf4a6PwKHSMn7exk7yxgPgXF5VkHL1DVhduVPK",
  "key14": "bnJqNMdeWPvLn5edAmmKY9AETQ2USfx6rLf2X515jGbaHwyR3J4xaENcpUeKT79JkerRUF3UGtGSyghqQvGxaqj",
  "key15": "5vuibNB6cE42uYTAi2cJR8fbY4MSshoYgsYbTGgiywtah2aYchVZzbTYHYh8FdSvZ9ZAuuwFgL5o6Wt4mP1ivSef",
  "key16": "xrjTuJqdM2Dn6mDCB1b3vAk1Py1XuP3dgNxea2HiSiRD864fEUmfBSWGXVZLPxwSdfVHTV1R6p9RiYodrDa8MCb",
  "key17": "2D3T3nvRdYQYK2MPrcTMuyPw3ohbciCxp44bUaDxJVqKtusP4LR1sjQCrqCkz9HWCwpxD3BCnn35u15PZmTi8wBm",
  "key18": "2GMXAoTtD6YgeBvn2KcWoutjLw4wGSwhP6f26m4DgEbMPYX5x5sodX9ZXbzaJ4ZszMaY76BvNqM3Gw8RyxkDRA53",
  "key19": "2TWZv1Xk3v17EMuiS4HpSKz6cYMCpucL4ojqLRMTbBL3etQQSnc4CTeNGpvjkV1ESrmC1H2ns4h14k9bwMgWeKt3",
  "key20": "3j2VyszPgUFwQys9gKYh4mYnpR6EFgWm24GnDfPBNsWta4RpaqhcAmmJFco7bSqTjjtDWcKpxtFcovC9uAV8vaNG",
  "key21": "4NQSCnAJ4yGbMYQqrQotAKc8Cmh38BbJ5qiY4PsrWf34vxhhTgDwfeXtbuz94Z1Rg96xKCYJ2wkQkjXAhTW6A2zt",
  "key22": "38XosYZSh6ysbStg14cv7a492xp3tBbVCNXg5W1wuF7dGDw1fKfPrwzCAQUo7SUtv5pKpoUNQP3Qj2JR33qfjosL",
  "key23": "59BrArHTKiBWUaNhutBwAnN4ktR3fozeBKXo6mS6sJXoWJxjBYhTiRR6qfAPp61zrD9v5wtFWAW1pKzMsiK6SAdR",
  "key24": "fP8oRD6m2qPTfCkAzfuhWB3sM8z3TiXdZE7LT8dtH3ZNpR8kS52gFyjBLHgaHew438UdySkre8BYydyQj8yRurC",
  "key25": "4FfbxSs5ZFbSxaGjSdXrPz3e36ebbbMJc1faWCbhhrvn4kdGprjiWU2ZaFdLXrFrbkZtu6JpiSsoZj5AVWzVXj6v",
  "key26": "5AYQwYrQCz9XogLkx3eYvaAqrXVQ6r2nfxV2xgLHL2pCcJ9o3yN3QQseFm6K5Pe26vmF78V4AXHC2GFjShwS2xoC",
  "key27": "4t4ddzLHK2B9DW3SG27MSuNbJoM1hhuZkMu29bCQtdirWpAZ5r84wTF9nprUJP4Rva47ezbVg2yq4eH2dpE13bGc",
  "key28": "TooinBHRC2qs1Go7Phpbpx8bDFvJECY5mYQ5pafee8Phdmo7xFhbqfKQGMPEJdY3VH2HPw1pnVhnZpFDEwo7BiX"
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
