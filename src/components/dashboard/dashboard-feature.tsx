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
    "2Nz4SjMkDvraebRLGtDTkjzkQw7PpBwFU2jE2ZF9znxnogVPhMZJYqFDghn94DDJuo9JWv9A9o8iQrgZUaBMgVhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YG8T54hDha54YHSZddLSUSvS5xAHrXPN1hdD6z5mDahmpR3HMJQoqhDsYP3c4Kd1r42nn74xB8ZTvrGPrxUcbPr",
  "key1": "4cUXkbQXU1CUFYGRyZ7AzsxEYCBhC57vuP8ZzMD17rNmxw2ZM4NxcX7945XxJR7tYi2Kvf8rdNqfiYcrXTHiMa8C",
  "key2": "3fX23dC49JkjA3nXPaRgGvwE3VpGvSBXqZGT2NmRmPBogwrFGv4eNnwG6ZBut9tEKuggRjr4ST213PRDhmuESV6c",
  "key3": "5QqaA13imv8MRjfJP96yp1qx9dKW5VVypxi9cwR841BvBsSmbC7VuJud6nKofJJv9CvzSHwBYkEDQFVeue2wuQqF",
  "key4": "69JdqGKmdzkCkFeCXkjXpaXUog6ZZSRWtVk99y1cPgqjySiW8Jzmb7DnAWH3sdUvwK7ZJmWtY2XoXhTwyXT1uy4",
  "key5": "X9dV1Ea3RrwcR8SjUwigMgeSuajwUE2txgYZyUCeztf82Wk4far4iN4MtHGeGTWoXPWCi7swdou8dQCr3BydQQy",
  "key6": "hDcZnU5Xvjnm3j756JXz7nMCAVs3vaM3SvXx32qtV1U2LVD9QsDqpnzoJRpWSwA8jxZhKY9ZHcqpkJwFv4jN5zW",
  "key7": "4Hu7Wd8PiaW7Wdx72wFzNi9JsPxc32sfztFjLB2YNuiRz1KtcmrG93UwAuPZmwQe5SNNwehch58u9gsNL9rjPzVJ",
  "key8": "5XpLb6iKkBJR5H3RYScnUb4roBFEcbAtGiUjLwHW4BnbTiL9E6Jd8916Sf5wt4LmVyTHCHd5RSLfCZiX4UGdmeab",
  "key9": "2J3AoxXyEm1LQhB3CKRSxZkBHFi64UHN8Xd1eFEi7Y2iGSAVLV7eFvEjhcu8rR5WoZ9nH2yRcR2EXzwCVDRtbbuB",
  "key10": "24BXyYrWLkhBqAxGTuZHHETSM9rCwDCXQfYTuETVAo5P56kHQkEEP7KryQtYWnZRNSqxs9p4Zq6iwdZo7JNLMD97",
  "key11": "2DqB3Nc1k8D8JCRtGUWLihdb3tHvZ6yw6bjCyFSMaRcRhDm4LjVjCSF4qyckooJBb8zDaZupGrxkNGgdPqU8Uyv1",
  "key12": "5HVVsTYKKPjRsDyWhACR2Q5BNuuSPuyCLEz6caykDaadVWkS2zwyuR1r1P6pZvgQ5gxzXDxiirERXQpGy27UHKdm",
  "key13": "8q687QWSYGrHq39HYBusgZz4WA9KkZuc9dw1V8RjH7M4zzWMU3jyeqRJDzPzX1EGJCHTSdxdKxQAH3VzywPmLSu",
  "key14": "4b2zaeHRPtCpppFGiPkT7zG9pNK3dBwGycSzqpssVKdxfdDpTwEe13UUUoepu4ampdGeDXTfek6N2psAFFaR7feq",
  "key15": "34LLKgaBqxEfi4XXaEiFt2ke6fwyzE3trvFGDy8hwWReBvEvhzCyMd2C4NwCp9q9wfC5j2D5dBFsrqucDcG2m3rS",
  "key16": "3A2GRTbFd8oehv42rqS86SFaMFL8oUjPLPB1fUpXhXnikdLmEVZP8KkV6LLU6ZF2AxeYuM992UNg6kxxQQVCqv4m",
  "key17": "66MLTcx1g59mUG8iy2B3JXAnuSt5iinubPPkrcdcEawHzqSLhMkZQZTZofiGFrrPNGUoJReTVKtPiycuqX3eF3SB",
  "key18": "5CYvpAEQ6cAnGYbP7BPsS8b73c3qzXG9v2G6xk7qrNQbdaP122uh7eES7u4znDDxxSAL9bEuidqZUTKTRhS8h5ub",
  "key19": "2Wjcp1nXMRZDggehL8r7QJHn4FHscVFSbQoQzJoNKztabDrzYMTcfCheSLdL67NTMf3PzZaBj4fWfLmDvP4V6MFa",
  "key20": "4npVSxzws5VtBedZinbjA81AXEi6iwv6rDTiRxqfpA7PcLDzzauurRJkSpgBU9yGWgrnS2ChJkEnmMNerpR9kTwn",
  "key21": "4Q3pRWL1yxSgMwGWh2CPxhwQBYbhE4tEY3iMCh8uPEizMA8U12FqnHL6BPtb5ysx9DEfSipWS7yYNGrVirn7ghUe",
  "key22": "4UD1FNHzt8GLvUjUH8yFUKULpuvYciQU9j2h9YKeC1U4zwjXTHwdYhx4FC24u6fDzy2LNesdGt5QzVkjbJ31Fkk9",
  "key23": "4PgVCBqWRFu2g1z1LYJnDPTd7RL7g7fJWjB958q4bEzKYtpKwbUqoADpkAHeJdXLAQJMCodqkDNNktEaaTQw7TJY",
  "key24": "3q8zrCtorjrR3vryKWRsQqbSnpBWM2vgp2TjmP9VS42ZpRhn4mHCh3ZJ8WQ9fQwC1cLncFB2m8wnG9UN5GbcTqnS",
  "key25": "52p9vobAhs2vV5PdxUWbsnvNJvxyhyZ67xPAqKzLFVUFhWLGkHPg6xUm2uQt5zZ5QYuZTmHmN2aYhpruoToLUArp",
  "key26": "1nLdFvJ4EgZjrVLCM21Urv5LFPkXLW5sHWWNs8H7Eprz6JUnxEKLgFvZVMwBSR4G5UF1CdPPz6fGha8RmhE5GMg"
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
