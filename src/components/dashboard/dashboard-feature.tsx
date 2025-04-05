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
    "35ct6vryy4tPZ51S2sWPWiSPNVz4LqYcgRjwmTKdrWbMXuNAKRPefdrZgGqwQbiBP51JgvqKBUp5bFe3wzCMwEKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yM7c8U9PNBHH8KFRHEdGqz6sMa3zjswyhcujL5jYhQtBrmYiHnvh9MnDMMWnbtQoMq2tm8ifA5Y2sm82165GeMC",
  "key1": "Xmrne1LKBKpyoKMM7QYSxAKTKuHGbYfpqkV9jYKuZfwaNJ3dPuvMqBPQhpN4cCjmErKkuZPuSBv7XcXYEa99MZe",
  "key2": "5SB6zYZNUkMTs5DDvkv6STuuELyUNKwmpWtuXTFELyTBXWeeGRrvjimexUGCud2iXMnMnJMJFi4awkSh9cDvLDWt",
  "key3": "67589qn1mcezTuv1YspGmDFg5JUeRkpzgom3DNi2cawMaahPsFXaz34Sdm1t14FC7Fj62dYJPP6S2op5fvxqvM4Q",
  "key4": "3Wye9CqfcNcxErVKRjzUQ1cgqVk5oQkm3eL6QhZnjEosk8qX9kUBbcEnMge93qxWWJkZoiBJqTF6vEagD3U8oBMF",
  "key5": "5Zr7gvmLVQRmEUhfLmZ1YU265KH14uN5iBn8nJjwctFpT5Feg8aMSYPUgS59GBUh9tj7k6hcx8pCzeTZW8VNuzvs",
  "key6": "4nbdjNPh4wUDz8ztUX47PboJ3iQ5vCGSsVaCyoweaf44q95dRVrjLw3qqU64wgnvu2ymiJbfBCoR1sttsp8B9GhX",
  "key7": "29JgH1HGBiKEq9KBw1T3amtfcwtFAK2ebHksyquS45GedhAoCzeAtzuL7DKYENm9gdrpdRHNcXPUefjcSTzKXZWY",
  "key8": "6rMdq7ZmvZbNUtT82dCprpD12dK6xA47wsnozyJGmjE3UHedcm3pMsC3CKBMD12zpZLVw1rZKgHwBxWQD5w8nzv",
  "key9": "3XNMHzM2oaaB4JYjzwbD8KiSeRw1ErsrSSKFanxQWtXFSpC1VQBcfqkqDgHJM5Z9usj2rKGMbQZ2E839ZoQPXKVf",
  "key10": "3AFQTGrhRq83SU7ZCssGiQqr4prtZWgYiZ4NArUdUoAhq6unMS17UrXVpgBSLL91dS7Vz8HGJEbBJG48cRKi2qN1",
  "key11": "23ZzGnSR7nfGiXMc32uit7GgxYa93Pmbk1J5aEuGKgWbqLEmew3ybKY5PRJaB3AYH8SxcfDgWkkWnNnke9QA49C5",
  "key12": "2HvkAStkgtdP63t494uVzpGM46ZpYVVDaHCkmHKDqkradAGNPfXjzFnbDCx7N5ACH48z5qURq9HvTvKN316myqQh",
  "key13": "4fw6rbqDWgKJHVuEmakFmV1H3w8QTxaYXvjoXtQdTB6tdsdEWm1692Kn3DssstCpMrXRv75sGM3ftMh4c4PZ8hAW",
  "key14": "4dCtdk327nzgXonNqszW44u83zqRngiSD9iN3kPr9oZxHNx4fYLBrmvrwJDvjKPLEY12L5ZDWiPCqp5YBhCf8nzL",
  "key15": "2AowM8w3U2sjtiGTdaTjRA4TAA8h3jN1VU7ov5CNGMzauYEZn4JokrfpwnLpTVMgZbdGMqozXYrn5J57Dds5xy7m",
  "key16": "5QfQYARLpA4eCYf7cK2sR7UDXCTCaBDHN9L6j2CFxZf5zQ8zAGCSnNUZBfMdGeAZfXhBqmPVMRNryoBppvMwfVGT",
  "key17": "4s1fE4oQRoUfUywuVhGk2ajqigM3ozNkQC2dLnHdf3tUonyHaAnaxNmZcSBrLoENr5PAga1VJcSyTEUn16kFtvJQ",
  "key18": "2VK1NLFVejRpwrdEqGfKeWVgj7Kon7NYQCBPvgz1w55R6SGaaM8aD51pZ8Qzw5ZYevddJQwcSsENDsEP9qGR4BBW",
  "key19": "5ynXB8ELMksKzjQBUPRTF4Mu9FqbGd76i9Qeyji1qXbUKmKua4JykfrweGNTv66dNEd6otqX49EMRP5hXUhiGkvg",
  "key20": "769fqKXkHHrR29JLNFn1D7CqK6xL2PLjhxSgL7ZTwMmpNhAQNfdEJBcXTiuzcSqTPEQHZZ6vo5ARCAYiF9U9zwV",
  "key21": "2oKVsDex7bYE9icTNjNdYCpnSLwyPK4DSdn7jN928ed7Zbmn7LkKpJagkGf6H7q2vSFFdDPT2GNEt7dCqiR4RgSu",
  "key22": "14GGZBYPSDShoqQeaF8iptJ2VddAjSi1vcnWKuw2G4DURrSH1HqCfU6iTxR2b1VWCipkrefvdv3tpqRfbvqbu2d",
  "key23": "2BzqumtceCxNWBBZXsvAgbGpj3p9ZPmyPCGryWqzJLd6aPMiB42aN6Dz594HSJVu6UoavRhcfgBFw5q9hZ9Bh6DL",
  "key24": "4pjAUdY146gnSq8YSgYS3A1MsCiu9vmzdqe66vuLFLEaV4jYmE2asiPXsgoG6Ghnf5JShjju7KshhaEcQ36eaQ8c",
  "key25": "2fgPJMFSWTu3enSRbzw6BqD5tqxn78AgMB1JSPkLbEQaFvcZ6RvyKDSYbt5jNg3UyF6j2Rn3kkfRoBiikHeR4KZ4"
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
