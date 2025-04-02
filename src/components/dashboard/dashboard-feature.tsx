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
    "4P17aHyXPMyb5Dc98pwGUkJkUXLGQyGfUxmxAKDpcx5T7vL65xkbeezjGf5vYTGkzAkZFNyNnxkwFdd1wTMRygzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MQ3hwBHot15U9VjDAQii14nJsxaZRhZYzNXrCLPgma6wfiHonhj568wod8tZMq3734dGsWmehCNRm1PDyunjXJH",
  "key1": "4e6Z7WogAKhm4YyqCqGfHDZ1NRUMVfSBuoyFMAmTNJycEu2rJRcbvcLZ7enYZuWbL7wsBwaAio5VXzdSiUyLx94C",
  "key2": "13WWq4cAR5DfaEyw4RECYEadSeqNymZFjGtoPwzSe4CANhhjac14pyNQnuj6pvNcyFw4m9HtqNFoE5LgUddqUG9",
  "key3": "3GV6UgtLR1FdHfMdajuSZvtUSkn3gQVCWedJxTi2XYRXNumxbhuCaAp554QjuZ7gM7rVwZTans7ig12PKLRMSaFT",
  "key4": "4UV8RC7trgmnyFMUUx3btgmTNJDn5fE3k2mAFHtoxZCXFTQEj6FV5dYR87gLXsBtXExtcQkafuYQyCit4KYDGkCY",
  "key5": "4J1W7f8JGPRSse7UQgj6968DwWo7cHx6u3mnoev6JVPkB6zuQK1UNfDqHRuVu8dZ9QU7LqM6W4eqFkMTtkTy3upC",
  "key6": "3bc7SH9Liym7kUa6nbH3LsDN1NLGy5EdAuFaZPp9oCUcMS9Pgkz19oEZk951orf2oQRFDFfNEGfVAnwdDJiVg2Ec",
  "key7": "2gPQ6t2w4ESg4NKewJhyKkoAArEWe4ZPzGUKYz68wZXxWJoLeKmdFjLsQiYLgYYxSPkCoiLtin4PeK8kP4DmGUnp",
  "key8": "58WYTvNVqecvVgU1fmBdatgXjVVy9fz334JVjW6phReSoUscvMqnbNA5b2GjFiMnRRv3BnHprz1Kmsv2TLdjzQCG",
  "key9": "WHx8Awgi3Gd2UXTr7qgVwZ47HfBeAnbVVGrFNLSgGJmSRPLnrk1VSUMnSBoLPTYi6ok63T6eWrh12dUgmAkyGqg",
  "key10": "zpq94Vz9CMWmJrNi33o2S1eWKNi44g3QncViNZgx7giGXuMFPZb3oCX4YFCFpjbNeFPHvVbnJLMj5C7RquA5cAi",
  "key11": "NMyktKYuHFocCDpPFvx98aGbz4MbF294Pgu7cBwqqewc8j6APR5gKWjSRYXpznztahQWXNw2qDAYbJBMettApRX",
  "key12": "28CxJ5DUuvFKqcEBhYCCZs6TQtRjFNvzKd3fjNg5ZwRc9Gvd41EKQjxr9HCHP5NXYehMyEiEjXQNfLpTdkFgGawh",
  "key13": "5gwfF5L7PUSyhkax7uoGHE3rY32n6DxqqZkCG8AeofojSmMeiwvgLt6mb64usEEtJYtgU7nN8oWFpC5q3riEHpnt",
  "key14": "4Ruw4XWdZX9gxZozDzbk1MbfV7ShdWc37M9iq7buBaxNk19Tbp2Y4r6wgYDYpt6S6GXa3xvXuZ8VBm3ve1HwBVCg",
  "key15": "3DzTkbEJVEJsLJRYdjSPXDV8YWdoSd36cn8miJ1BSWTw7RFuUrsTA4yxpZmRMbPRjPh6BCt6CSR8RnQ25EcLcJER",
  "key16": "3GZKn8ycKcp7Btbwu3gog4SJ7umtABzgKscSunzaCSKJ1fC3eoaEajWwVCfwGWWzns4XH9A2p8zoddkQDVu1ZbCr",
  "key17": "5FPUJzYXhvoUpCm83Nv24hZdmwKoW1VAkNU1jJ4XMmd6eWrQKngZnt5h2sgnTebfqryCKRh4rHSQmAG3dAQJLh1E",
  "key18": "fcSN8WdUL6yC6NxSjK3zwDJCXUTZMx3sL5FwPEE9AVCberMLC4XjCtaFvcLm9gRFFiXV3auCmGvnKjNrfXwJKLo",
  "key19": "4DgK2w4jSUfCMiNrdqU6HwwtLKAY9PsVGcqk5MED3pDpsfYj3daKi4J9a9J4PNK65BtRpBuLt6BGMExoUYvj1tEr",
  "key20": "5VLUNsNHohuwW6QgQ9dyUDA44hrwnD1ah7U2Du6aYULnj6wwjnAU5xdGuz7d6WhHqNREfZFKZf7AffZ7P8zhGCNq",
  "key21": "kgyNPUpg6FACY9KjMwCHm2S9JYV2GAxVkmbGMnfMR7pDPhgQ9xu7iHALX1XzNwnPytRmTGskoQndVHpVULjQF3h",
  "key22": "DDsehPNvWE88qfg8xuVaL2fPHDDKeh2aDF8uo6QyxFUjCTjXUFa3vwR6Rex71aTgobQzsoUABAZZrw4Ry6pLuxy",
  "key23": "2fFH16exKVEHv2aoy3XnQcuuBTs9ADukDGUpUgQGzjHQL7PXbiwppmi2nbxy9BxoZ9pCAwVLrtofB39XTvjx8isf",
  "key24": "3XUnKRctF7QLCtGBmtQTuxuRBW6tf35Ka9nkaneZyBmERrNQsd7gitNcETPuCqhpnqivjN6KarhxhSzkorAudwoM"
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
