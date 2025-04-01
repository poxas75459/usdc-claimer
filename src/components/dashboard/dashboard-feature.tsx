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
    "5cegKjQjMBfTu3mC1BbsdReoSLwhMvWtQgrkAtSRxQfBBjcBu677HCvGY6dkSL3zuHsCaWD7iHjpyMRHhi5nQHdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gdNafvf8RRcNxMRzLRtJnX9UMqay7LUvco86PpP1gMr9MeWb8CETEtq9t3YHXRTZ4YPUpvGRjQFgnGbcsmKCwj5",
  "key1": "5o1mn142mjkHDECgQAdASGQ3mS2wuZ4tMFqbBmjd9iNznhzrxyYvD1PrP2432L1BFTTDNJfPNXkptY7xB3JwG8vb",
  "key2": "4vXqwX8J3uBUjsQBdSAnAhyjTwP4u758qEx6HExmR9AX1H8metUneYKyiVK8vYyt32oTe2Tv924HU1YVfW4HAwVn",
  "key3": "4TepkdPBeB68tcLdBR7Hy7XVY4eAr64PviYgrP6GiMDPeEBLK1HFw1GYp4vhXQh9PJV4wxyoqhSeHsoLwRDNHHAV",
  "key4": "nvAzuSRrCsB8g6X6dFdaefNH9TSpts9JcHjAhiwjkqa5wLnBq4PDJm3BqhUgayvqhGMuGitUKSK4hmP2t5eXERe",
  "key5": "5qkWvwjArtyF2djhszZzEZFy4K5mYiYEQ15KoCXQWtr6G44Kw1qubhkNt4e4AajTNWwQaFLBPWkKRT9fRGCzG1NL",
  "key6": "3UkBcn48nqPf9FhJ2wrSVvj1LhnaGJoD9mApBnoLb7tDaRuv2bMnSUJd8tr58kskUE8SggSvxLfQr2JPo4gmdQnd",
  "key7": "5veTpGfRj3ByuvpeNAWVZPdV7X2byBsmo6w1uvUgoeek6FUjV4xkjGDMvDgbMDw6HXgfJfXynyJ92w6Pk5rZgPXC",
  "key8": "4mMEj8USdqu5f7bqfX4974b4dCRaZvfWFveAneTcjvttSq1ouvkSbJCXMHKiiax27zYFB9sEUNmSEwsXEZz7ViXR",
  "key9": "5p2VRV7qqWTGZ5pbeBTuENGX3PA6KWerRwxszhXN5dfFzxekEQigbkxKXgoSrJ2ijf3q66pWwxG1XGiyVTGZ7prq",
  "key10": "4rZy3ESe5XS5jqsvBjn68M1JTpxP4aMHiTg1papFsYmoqh9Ma92eXJNdJQC5TSprpDmucF5PCDSnhmrKyW7kV3zS",
  "key11": "3ZDdhqeXx3LLggBXayGDjTV5x3RCrDWq7oPAvfEpsNmBcTPGyM3D2Y5xaqfZGmf47Cc85A7Tq3TRNFPftatUV9DV",
  "key12": "3r4LEXLUfdycNXFzfvNXrcfYbnXDhQE8bit689pTLHUH5qWy5DZ1zh8GDwA9iQ6bbDG41SbE5GyD1CxAQrdj1Dyt",
  "key13": "oWZHpDHYY7zthxmcHDUnnNeCrZEoHMXPJuTjKFVudZycD8hZKh81qkSceZSUXgtvcShtMd3iC4sfJUjEncTGA68",
  "key14": "61LuXDoLsPtqQCLEqoQ3j1gCvGyx4d2iz4rjzzfschvHKiXkt3eRvFCX1ZEJXL8ADZYwMnSKfhZNK4rHwRWwpfuo",
  "key15": "4RvYFa8E7RKzBNKRUFJDWSD1V4cchwyJMGQif2Dgqe6vBPAihRLmpwu4HBsqxv7bgfSPJ3xt6L76u5Crwh2Y9Cqq",
  "key16": "6PppMBWBnia1ueqUVD18E5BVnX44JzJTf71vabmGWNCDyNDxNDRK7TyN91pgw498ruwHCnqXJhvTnm8RF6cbnMr",
  "key17": "5ms7NgWsqgurTYV32CmYXprKtUQTPsg5xJH7E8eeDZ1EMJJY3iq8SuLBWUd6XBNCrbxSJ2c1DLpe6FYEz43sgsud",
  "key18": "37jaypzu3rZAW1uTGarKt5ReKp2C2kPf88KgDuv6kZAqX7bRiEYXBcA4VFVW42c9acfZa8MK5ucwsz7bzJfAY6Sh",
  "key19": "3ZuRFTi1vLE5GVbaTMepkTYqEKKfeTRoWTvzP6J47T21guxFYkeaMngVmRM8mFh9gxv2j64R1AaQu8wo27bQtMCA",
  "key20": "5ZFy6ETme3d5BbYwcHKeoaGzBsGoCFRfyVHBtkqzZMECrMvBxw8M6KDcCAdxMmQNJABcJ6qHaFfaHuikedqN1K2",
  "key21": "5bdHHiv2mV2PLwfFwzBcnJX2Kjg3xDJKzBvwmn2c3hbAXnxqke2bZQJW5smVmrxiPb4Gs1ueCMLQVEDMCqtvZpcQ",
  "key22": "3nqs8kPJ7YtEiGybUP2cHnQBEDrrkhmzt2ZrSuwXpNmmkGV5sDoRxX6SNDU8Uszr8ZcPWsNir6QJjjhLf4wo6TM1",
  "key23": "2SJFuqtkm39dAYTH5aqvSJkwPx4kXbYrZquEwZMZReH3Tkm3EEBrYAcJmKzEVwMeFo3h8HuFgviaRkEJAji3hpu7",
  "key24": "5SiybHPs7qm11gU7bJz1k9YyoWuiAW8n9RjYvdKJq6898jbmF8yx4EPmSP7z142s8QGkLCXUUy294LGwQZim3QY8",
  "key25": "5FzEQcFVkZ4RJ7RfPqePoUwT5WpNEk69yf5aHbTxDNxrcCg89wotUrj6EGjGAKJA6py8kTzPN4qwdZQ6SvxuKxCu",
  "key26": "2B53VSXDfQK82b8r9DuMmpqnXtT5F8s9NapgBo4b2gBh4piShKS9KY9TyABmPdB1pmiC7MP7eKNyHxvyNYFa1t8x",
  "key27": "wareGYKEBCHr6yPLBmsvbfmshdE1NRBGFFwG8W5oRJESnDzi2Ax4NQboh71Y5dARpMkFWrWNnRZZG5ELboXbCVk",
  "key28": "5C7sxhwB2sghu1hEAPuYqQyRp8sb6uxG38ZYF3nj9mccXWa3qruewz56ZZEy2WrkMfMkzWACc9fwFnQghMJXw7rV"
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
