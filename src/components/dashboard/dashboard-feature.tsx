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
    "8UhFrYEyL1kQyzymcvEL34vkCqbxNpbrtuYSpvENaQpT8ffN4moBqhRLxiCEJUEpnRutqvHUj6iWioDZsX1J4P3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x7avXEL24AWYg5x13TqX1nca5fc3gL7wrK3zCS1sM2fbvrwqhr8qJACytYWHCpxyGNvKSucAQroHZsEzdoY5CnE",
  "key1": "3rv4D93oNWWR5z6NJQQqnJre91tZ2swzAj8agYvwzHbzfKGf563WspHHtz5feCMj36J2qwvTP7Bw7QxnvMtEBBfB",
  "key2": "54gWfssnKWHe74qvQ4sto2r6K4Tkt8xMuVFVf8PsyXRmYJFSnQkyEfeVuGyKHs3fLBwgg46LEDabiy5ioZJPZjSG",
  "key3": "6i9HPLkS1ofdZB1MZ3ainuuuoCsoeMZ5Lhsouq4t1SPVebE4GpVRUGrRef7vfmLyDw7NnwGW5LTCXAxG4GSF34j",
  "key4": "2waQqTbkkcRWwjwVAyNMTLdrW62HkUseWdbF1gxYz1fCmwm1vsEhMJHJFG2pN1eHNPo3BEmKEZTTFS9x82iJww7o",
  "key5": "56Gf5XysJbZj48gnXZR131imNMffbKMm2Umvdk8DPTCdaLtkUBqj2CM4w3tr89UqwqP1hNQaATi9wkpn62j5W3xa",
  "key6": "53PxE1i53USn9N48FSCBuMn9dBnUg5fAi64UW342An5nfttjFqinYK1AkrCNLwHuLThvhbMFy6mybSrh998APPCa",
  "key7": "37BnKPTPXJCdprfgrLEY3D2ku6R12zPs4RbGo1KKZ2kfou3Ja13YAiuJDkb53bnn5RbxkT25YFN598kAoeeQj3Uc",
  "key8": "2EqhwHiGhyKPyg1cjCEmJimBTEX2BvAmfq9EhoLXSCyg8GC1sjTHjaqKR2XKdDzJhDmrYEw1d8WVMuFY1iSVbLdn",
  "key9": "qrZ13r1AVPQ7ZuNN4vcG97uwcKYWsMjUqxzLeqm6CcM8e1QnEHDNFrGpvWuV5P9juAFYh2TaWS8y44WTSavXw5P",
  "key10": "3NQKb6T4G1JoNM88S1q46toDAUKXjNQtJjc85vBVzfBYiHtMGNK7pky9GNeTPcbFWZeyh3KjXm5PzU57gzLs1NkG",
  "key11": "3bcmvcBB4h5Y6snrWVkv3v7rxWouHvWgbKNyWUsU4H3hiueiHXNJQd5HFKTtcx5TbB3rpJtrXLdyw87sQw1sZUCF",
  "key12": "5HJgjkdCHvfH7Rsinif9Z9iRFmngWKCDPbEcNWZYv1uL7dpuMSHPH6BFTFH7d8YRRmA97aAWj25kNtNTqepZqJ8L",
  "key13": "24xwa2zAUTsZ2NKLtZcUhF21iZttiTwMpJrwYeucxTzRQgPvJ2dME7xursQ3geTSFHLwdAxAvhSrhAZpS3kxLQdF",
  "key14": "318honREVMjt9Ee62SmTGrrHHDgxKuRy6Zi2pwTaPNAVi5KTZPS215WwwBbdj3kY1jcqo4eFc7Q9g3F3atUidiiX",
  "key15": "5a8uvUDfwPptTTTtbkiB8YNJUVEqdHY517SmMprEg1E3BCDfJjMv5nFBFmF7tY8rBoSPENTFpq5ehjQB9X6GsYUz",
  "key16": "5go8qrTKaszKrHLGd4nPDHpbQpDweGFMbDacDMYxsQ97JAKcRVSDLA81HLWbWGpZxyDrKxa8pLFWQJ1DapFY1mSm",
  "key17": "3njAm5YPCDgJPFBanhN9xxmiZ9deCxqz7UfYFEJnNfCxfqX4giMmps5iYRbpvGJjt5A7yFADJZ5LHec5DtyLvWGz",
  "key18": "21fmwJSUA5p5NmpjCc72xJhbvNCC1sWJ4crfzES4zHaSTB7FVoa9s3rYyCWnNi5rwaqtaLq4gSZP2AEGUnuMzCcF",
  "key19": "5CGHTyfXpHZfjryeiuyD2gUUx6nGSK2cMnZZ8qUPAzNeykRGJFi9Y5eYDmWdfh3ycRC2o4Rj6w72qZRZ5z9KR8Vi",
  "key20": "4CVcZGnqMAgGccwhbm6iGtxRWdq6ZGm6Ngajd8viCMs1VJab9zGjizu6WWbXpVzBBqKiDYsNkUNXjX3E96qykCLj",
  "key21": "4xyQ9XPmGe27dnT2JgrNz9W11di8Ynk9WgUUZGtMu1sL28678RzGn2rtECMKKsbzuiuZyhoJLbd94TTjFr6Xar1t",
  "key22": "4AQhrAW3pypcBYUH4HNykaGz8CciHKNHm5Cnu9xmoFkTLJJgiHkVrNjmJLyErUwSXBU2F9KQxiKK1i2SXrot3UuA",
  "key23": "3WR5FVWNAYM9GEKu5KbRPiiAXwjSwzPUFh5Nfz4QrP97QD8GG7YER4dAEEwrLZ8aT4ft5Ww7tRCVQeMj1h7mG83",
  "key24": "3fUYN6Pqsh6x6bPRZje9ixhrN1XsAe2QBVmDJGa7zZLsAg7Q8JL5N2iqvJpaxFp6w9v4fLfBXQqjxtLVZ7BgLLYz",
  "key25": "5X4o5oeMJYLrJtXrfgvBiyjmWRztpnmBbdV3NB5CrgdJxQTEvNAhJeqsmutJ3rz1G4jsNV7jeQuxyrnjXMYyRKBs",
  "key26": "2AZunHLinJSqpsSqTmXH55N6GXtTDZDKXebRQdJrzoLU1kJVCMLFZzBsavQ8QqvUbhSYZ1YzQheRePVhug1BzMjQ",
  "key27": "2B46jJDhG3FeX9FtgoMENXgK6Ah1tqqD9ScHQ1CBfLAt86XSLX99CQkjebVUmj24icPMpFc5Fd3QkL3ZGjvA1pe4",
  "key28": "5KqHj1mASic6PnptoDRMfe3cfEhQriAvBHy2PL2jruWzob6X43DX6PmwoCfhcEdPoffB6hTDwzHiZJsdr4EWZMx3"
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
