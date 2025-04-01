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
    "42K7HCov6wQRLY5FGDWF7WTrZ3SuBncc6oCiAfhxn13irWdohkYoeB7fY5JSyW3CTKu4m6DQSmyZg5e5kTKSqDoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YbWA4bvDQRbv2boCxGGMkoBE6Vtn3EmggEw4Ene4k33KdpywK29X9PBDZA4rqSbnqXo4iU9cuzD3XcgTTctzqxB",
  "key1": "127ZhvxEpgddbxLyMMyxV6J5P1BRc1CpK836qMDPgDWRRCA6SbbTWWD1iU7VSP7MiiFPGqHXPyQdkxEu9xMpTNZb",
  "key2": "59FkQz38a2MjRMhN5NDWjM9GNhdyVAtFtyGbKcBzUCJq9fKy3KZVRnSLJWwRVkqQkgcabcFy3V7RYcusAAyc6w2B",
  "key3": "24Jy2bowxxYEMAfbqhLL5qkVKvPUELZj5pFjgXfcnfNDVXURJqS36ZuoYRcZQuEGxMazvsog5gMTDMKSCzvk8TFi",
  "key4": "3zTSBTmKLH1yd6hirYuapACe8nnjAeH34KGx8shAh7coVtYKKFvYtMAYV7kvH5ue3G3QUy7emsY4zVauE82Eh6X1",
  "key5": "2n9WVzDzYUXpwj5g54JJafqjyGBqYKdi7xAqPimidupWp4yohfKhJTg3TF7qMDueHX6wYHFRiWMWtpGwtHAH2XXe",
  "key6": "4cM87RC4uce94cECdNyBPrnHKvdz8WGuckzqwdVHJnNcuYAg6ViRz9B9bjbVzBRp1YSshZGftQMsQaVQx2BviYdP",
  "key7": "3aivjbL3C5RwA1pck259m84yKTCZqpfDuuc29eyJ3pvqMZNimWu8aHNjdFGBCEXhFrCNNkjwaMv7LwWPxE4niPd9",
  "key8": "4yxFYntMVvrQ1JMrW7ffAFbBU2kXJPAgLokZNqakWeAmjhjsHM48jxfNh4Nf5KhHsUWYt1ZanVthU2zjb9vcYAnX",
  "key9": "4fVr2Cv3gckjfueUj5QwAYJcZuVPURvu3eivLPFs7f6hsHbjquVLHCGVf35278mHu3zabmmDo6hMz2f1pzcaFWAF",
  "key10": "28H1P9h6vQVdJyocyZ1MmMGa9MfS2CPaEuLfrjr2SsxqP221b4GRcsZZfQgy44KSXrAWtCZeoZXVtHSbFCh7QwEj",
  "key11": "UfwMLfZegNRFLHvV2MbRNM15qtY8jNNUUMhsHQScJUsQNUahf6RhqsZ9JcfKrjjsmdHJrDESosCV6cwwLoBpbtM",
  "key12": "53HZnSZrGY5MyuBKAAAnEvzupfPw9XGufq8qvdjBS7hvfhheusJR6EPMrdM5qtKBx6kyH7ZQww1dCQ4tpoMKszXH",
  "key13": "2gyuoufbNi9egb6PQMcyTrpGk8ezrYS3qtF6QKb1r9Ca4F99txLtZ3XyAL2Hrcp7zp9DpSbnhtDBDVKRbw38zGjh",
  "key14": "3t12JLfW3evPRx5JkMvWBzyRPqH9MBM8PZbxPXo439rZuJyvr3npxH16gVocEkmV1susBKTnRtaCauZ3jU97e8Fp",
  "key15": "suPaFweaZEtuC8WRHRhfhKCbk4VZ2pDLrSR1YptWAt6BfKNmynsKhoUFUkRPvvXzwWkR4pwAR5Vmh2QAk2qL9nC",
  "key16": "JCYB82hmeM65q89Ac2BNENDtn2GsK5DpsgFpNs6esaN2BgmG1dzk6cW79D5GhajdNZck1LGvhuvAG68fYe4xceB",
  "key17": "44zUXHq17jqozs63APtofy2tuyeopP3JhsMLami3voN6mptSnVcpTfoZeCdQRCNJ6THNtNEuh7gKAnvmJHSqSNkd",
  "key18": "2EsbswkqBFCX8f2pxqT7VfpC2qKrnCCFKupWy5vrjjpkpCFQbwsF5rny3SPSMt7A3CHQMiUcQQdP6pQyZs14hXU4",
  "key19": "vTwm73V94huqp25qV9hULbcTftTDkGaVGLmJz8moqEeg3KwDRTdnuqAWU2RDhf1TThsaN25t881Y6RSu3HQVbUW",
  "key20": "3yMCCkLCpoQXwh7AFQypFkcPJ4hCBcv2sEtBGT3kayM3uENsTC7hkVrH8SeQY1Ak1WnxzqCKv3mkZAe5xZHSzwZF",
  "key21": "vAR39kcYTojzTLDL3mmvbAY9foCAFgQsNXaSn4V1ECXKi25vGMT8bevDtfHhv9BcL8aEDWXSibMnokSjgppSnvD",
  "key22": "3SoyHS2DzEKM9wqPGnaroVDqdptao5RHfrauCQEMmfiC95EHDExsKtLhs1evvQt2mMRY2ygKHNv2ceE4mUiyEghu",
  "key23": "bTXSZpFpuZZg9ZwQsksznqsWmpKT4czgava5mFt625Z38kfAyVyxBa3db3uEaoc7QAYVdCuiAFnqCxtceTAr4Uz",
  "key24": "D6Yo8GpJCBcXe69jsuAQvBXAuPRvMmRma4EwssMA1paPi7YiEQq1WePtZtVaT9NpaEhwWRgbuvS9cCLkbH3REXx"
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
