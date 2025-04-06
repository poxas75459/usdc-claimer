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
    "4VarjWVk5dTkQKH6ehYVsYm8dZha9TzQJc3YnwnsmcxdBuSUT1outsnH3muiGbamg9Mk5a9BVxfB9LgpitpPygfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yKg7dKNVqxG9pL7wSZfAkSPPtCXcXgEamhD3N7XWX4TijTLcFCK6vRdE1hWsGT2hxJmkL9z6y6kdVk8PofkPQav",
  "key1": "3FV82ckNzsqaUkUcPsfdUDkEatciR9fwL5WU36Fikkwc66UY4XqVcmMYahJGeFGWjXujo4bCbtC1DfPCwgVqA19Y",
  "key2": "2SzbhWLEfT4A5h7BMsQBKCqkKQ3EFCKFbADVLKsATcLmpjKwbcygFfPa3KmNGi5NCU2t1TJnQEqxn89v5d4UbMvX",
  "key3": "3MBE4EEtWyz412sDd6Zk7SL7G1ZXnBCkNWq3Gp4Qaa9gBBKxwtq4fLnM6dzf9VaHmzQKNvh7iEXnHD4SZ4pNonAX",
  "key4": "4pVxURLNQWvgLAkK7Vj6EQiNB3Ec2Xe7qBqkqq2PUhUwBqTYKEWnnunvmHjdFfkaHxqKjZPPqjXgX9BMXb1vrJyb",
  "key5": "2sTKTiCd4bySGGRfjx5u3Bjze3UBq8uMVuE8Q63kuFuFHhsoSiCJPViU8BH9KbYxYmGp4ZUucmDrVhFWUGgMyDmV",
  "key6": "VZcUtRanww6SmPW7Pvmni6ZgTUTwucmor5qGVCEwTi2YPTYccp1QS6pVsYwkQdmtwWYjxpM9SAjGSac5FUJZVAD",
  "key7": "5G8ohxKM97BGmy7WmoFqkKqcMfAMwnQiWX5oVEqFiEj4kDuMiCCxvdPho7ZwC5GSWnAQWJG3BeAGCvZ1dW6VAoZG",
  "key8": "37eXNdyaULoWTxBw5ptvALqKkSKbdF4wHgLzyFePPJeMQW4RCLi6DUWR13PfH7cMRQpnRppq1SX19bsu9bhEDtCq",
  "key9": "3fF29hVJg85D8aYUVrSpUrZo7B786vpoxr1VU7H2rGD6NG3Ej2Wr3BCXfaqPszfCMYjkctXcz4j5iJ99fHGfzfNC",
  "key10": "2irsWhm3yMDrddpcHb9qBo53ahHwU2Rf5etb6eUsdVRK5MNhBruX3CbhTKRnZ7t2kdnPD3xoQsGz5R17y6NbTkZV",
  "key11": "4n5uSDQhA6AtjTrMQm19Kx2Eo3Y9nkV7x6ZHg2Lchc5nS4WC15wmVzLfoPBUeYeVSMGALq2XAjFwaG2yXBcGNcV3",
  "key12": "2VqyhTfZthy2QdVeUmKsLewqi84tFex6uCWWJqSA33Cj3RvgAkqQoc9BtG2Y2UnPeMvC4RLywXV9sN32GwdYLW1e",
  "key13": "4rFNTvsuvqCJw3XFMpksextqHpkNUp7GrUgwF6KmaNsc1jrZc3AU25oG4jPJWgdudx4QsyDh6JiJy6RULdDcFYMb",
  "key14": "4mS6dEPV21U2KdkHAZicQwZv6UAuBet7HwrLtv9f5xrNQhYjVmnDyMa3wzKHDsCt6uMZUeQtGbN3PVvqyrMtQckh",
  "key15": "2tJeaXamWHz7ocSbABbTo5nUqdMUh2rBfJt425R8ZBK7Zgqv4et2risfqnQKstTJgP5gfdDwmZbimGitHDwboXzF",
  "key16": "5jLXMNKJkQ5KuFLxeCG6zNsZpRRn4LDXHg97TBEhgm3LR82sDEWbqfvwzis4YgVTfpQXyj7Ya95xMqgMxtn4Ji9P",
  "key17": "3ZW7LzNKiE7K1AZiJi15YGXb2e7TB9W6pYVuWxmkvPVbUxYC8D1qpVXhYqsuzX71BaVaEvGnXER6zTSUHJYWPkrd",
  "key18": "35TAPAnpQAxCFG6jjMdGFCcuSFQKX6zD59mVpstEcGJgw7Br9eumkAkKwz7tc4bahx9EbCo4DtjGfnLbrkCZneMF",
  "key19": "63oxZP8vk9YbRVW9BdZXwa9rkVLTLm4shubBhCE3qS9Z9rSuKGoK9BraeGJPkd6XcR9W7AqMEPtyuKWixiMzDKPF",
  "key20": "4ZCSnjtFBVSVJ1iHx6yrrsfoTzAtMEEqJJDdxL3EZQPMLzxoCiKQNBcRNCGCFwAy8bY3fcHyfZgiwoQM55B9F6KW",
  "key21": "5NYBUHjE15RmDVh481QXbepZX5kzGko6Wtv333RiRTLbLs6xbqUYq37oiJB284WoCCxM9ZajPxMgMSUxGAZYJX3R",
  "key22": "4iJF5rjACDDY5bwYTUeuzmiEWgQ7wBjNmaCk7n8wo1vmaQHhd6Kwq4tdbeZgBRAxzMCqqRK5XePFd5DQF6hDiJs1",
  "key23": "3za6VXdD8YwrM8Lum8CaJWo15nTX8XKfqLFBJMyfkPsS7zkJVsdWpMn7dAXZbepy632H2B9bFnRNgjq3gwznoeMg",
  "key24": "2YeUwwYrhhp5jZ97wKJGwCzW6CKB1gFEy5qvtjZkuVkjf39htoSjiNFzEqfJawr3jV5o1k13FLn2w5boJBNwBka2",
  "key25": "7ij2tsyGXEMFAWmHxCWWXJtA6oJy8XetrfAFvuyCQfRuHwarpzq8D9EYegnfV1xRWBg9uiteqZntmZ5jkZdhEpu",
  "key26": "3Er1mbXrQPjme2QqYNjnPc4MEzx3XqEzMRTrrXJEwAwXCMr8MdXkdsjnScyjePBizpntYSGCuVMRCEYTBSKZX181",
  "key27": "2sDwYgnb5BpsQTBR5S2HqSfWQyGLBXNVCTNNTVvckvqVJLGJXPRLCq9VEM5veT21a19N2g49CCqcK2mRa2qeWaC2",
  "key28": "5Q1veFTdjrxpLAgAuejDWSC2qdCGSZAZa7xz6TQGnjTd1Z2uXz5UMVUP9nNvwHXnhL4fLmQuw4prs9FX317UPjpj"
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
