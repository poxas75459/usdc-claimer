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
    "5oEYMXtSVNzbcySmMTeJjVZNgPiXD3gcHeRYPPqLmFgJsa8ZpP275uRBV85T3nrc8xjnf48LewTH9hAJziZsf3fW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E99RpazLaPU6hwTe716Ge7uHh2bekn7DvEXiqPMBQPMRY9JJHpmHatByg9j8Y7RVoKtGnQwmtpB8UoaEKnzu1e8",
  "key1": "o1xdGpV9ngXMu4o6P7Hm17PS3guWNCuSbBkekP7bYgsUifp2BrAfKGq1xkKFtyV3SKYZuqyoovMwCKVSXgCDeCF",
  "key2": "2pB3jfErCv1q6f6nGL5r74HB8sP1TRaGVDxCnx7X7aMQEwgqgxx8PxSvJGZQRQNRy1oKkbaDdUQCYno9L6j931aS",
  "key3": "3ui6t6Ba7c3utpMfbTkKEyHfCG9AeX2VNSk3CxJMic7h7KPWfEdM5tAgQxw3RHdQPY4u9TZRBBrBuGPXdorC4vMt",
  "key4": "4cchgCLm19jUXkjTdo7Y6MGK3XusFjEoeCiiKdjTn21ozTzYwxtL8nAMFjuA3XGovwYvk1pVvaqAhAJYY4yY53Nv",
  "key5": "3iQbXJPRvhyaEUeESg38MzerEDyJTC8xrZxcr8zxABt3KxupDTksVr3GJJJNFnRLny83Ro2zXs4DmCLWFL75TAYE",
  "key6": "2sTbBoNHjgpX52GaK8yW8KTNAaHGXWDUV1fyMyicNhxHp9ZkeKkiGcBq2HyPodMsa6xWCx7i1y7N96JizB6oAK9r",
  "key7": "3QyofgtyaxWLRjmLciquxmXHbABQfMfZW3cYVTA3HPJ6boaDPFNwrsBiJtmyKg95hBQ7KdQ2bLEyyMS3JCJCuW5b",
  "key8": "2LzFMwwkMDMiwaQ5vkmb9U4jRkd5k3i2kQMyvWqxLWrcj5w8ie8CkzxHovRYGhcNBfcmUkPGuSLkhKnBaisiVG9W",
  "key9": "mkobYNueDe81Qvkw7XcYhDX9xtByEnBFkFU8A1bZCqvM9oFXfbHrQM9Q9SvXt79UuLguxEDHjxWYknXXyJ8q3Vo",
  "key10": "61bwy3rGn9NTtV2zPwpjXcMz2jC1bJ7vMH8XDnVJoEed8iqoBp7DQZRBeUhqZEN8QRkgh2NYHGwpvwmioVnhBbQG",
  "key11": "ap8ynVpmwxv6RazC8MvRYfpiQyoREQ1Ft84NhugFneSzmAL5dJZHcrXz88pwhnMzgcyLSzLAPiapAMgkJ7QCE1C",
  "key12": "2DMiVu8x8MnPpmAxD4sXD9NcLxTZ3c4b7MUqPierUkdGhtT5e1neq2TfbAHMSYwfqNVaTN6nU2gDG3amKeYdi6jH",
  "key13": "pDGjvWBijkkxQxU5U78feiYtSpAs679BcJ2pEEz3wmb3zX3DkiVU5hux1nFxrT6ppuwvtJPd4Ytd3mTBWzH781Y",
  "key14": "R1geFe9S9vbS4kVpCt6UqahioqBrd26ughAbnpgrt2nxShTWUMWZVTLsS5TYmy4Q6vyffuU2eSCRgCXdD4AehJh",
  "key15": "5qMtftxcBGC9gQdwbKvQbb1HADuqCmnRBiLeTVbNsmG4yMNEJXnDrEEWLTibBahZ6eRXBY6dZskU25qxkFN16zzh",
  "key16": "4Wp43bF2zbNiGxv9fpA28yjUBAhy4P53vC68dcRRMtXhs7naKMmxk4qcrfAjhA4QnCKyJ3j5JoYDXGjY3eAWPcaf",
  "key17": "4y8urqSy7z4qQdqinVp7Weuua6KNGiZ2GrkRHKYFJwcGszJDqFiee5KpEmjmRFDkEeZu5KdYHBJhGhVNxDfkQWrC",
  "key18": "3KS6G2FyoH5CSfJyZHZ1rVFUhboMZMnH1z1gPUgBJutEUCa5KUAm6fEWhGsyBBsgk1GtVqKLfJ5qFGPYjFnnre2W",
  "key19": "5ZMV9xYm6NKNVxgVKUhgZVv5ZoUzwB272TWmrZXGNDEquY8gwxtUEAew3XsRb32cEh2oNfw3p38Sh6prUNykiiUk",
  "key20": "2KrB3VyvJRKZMwf8PCTym9jWKpB2ZkPwwgNFNciH87cc3xbyMCW6saZhPT9M4nqRE2HpbwkVmZtSQ2bmMcxZt2aD",
  "key21": "4YMwKi56WoPF9BWPd1DHtFTGMMyYhviMMChnY8K5BH1jV5KhYV9Y5VJXAUmnx91MbA9tmHZYmz74Upk5B7rkoz3i",
  "key22": "3wZ35XeY79iJajFBLv3zbwS3FfZYzBoHmSqf5iZhDwhoo5K6RcLVZCGZwX7coCq4ngnnR8eoLPdrpaPXiuaxxrfd",
  "key23": "2bK1F5EdXfwcA9RtyFKZ3HKgXiU34N6RrNfmxPBfSedsL1LotXVWqXi55Ed28ec7kUpVqs7c1cXPwe1nMUKJQafy",
  "key24": "3ZHytvXZUtPKKJycTv5ivSifoU6RpQbSSjm6rK8EnRFcuU7HpnmL7U3xv6JRxGk8Y3kSnLGu4CCheGRPti3ZxCUx",
  "key25": "26xFSve9N3ABMeurRtBW2Gx2x9HgN1vqadeTmraE3CA7ebMCA9ohgjaVmk4xRXmrB6AmRyqMYp7MCo3gw818ATxw"
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
