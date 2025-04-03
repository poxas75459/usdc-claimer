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
    "3rhhVwYa9Zc8fVXpNHRHTUZMLZH68nvkyd2qj3keU6oQaTB6R3zTqzzquqCUFuG3xHCQnbqsa1KRQTomnAGXrJcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nW54hZXVAmykf6fPxxKMGVoUvR2kVgDrL2mMrR5AWFQ2Fspc3c3ENhcB8FFbXkzxRECt9bs4nswiN8J6ZVbwqwN",
  "key1": "2UVcVWqpxiF2P8jk5a49fumrg6bhPHUiY35wqUN2ido5wBj3C7MavX6V1A66L6XPku7rEMbUJPoX45m1L4dY5zee",
  "key2": "4ESsCPC7RuXJ4tsn9XtCbnwDKNCD3rwy27JwFtPtL8EGUfzrfv2t8L6f22fy8ZP1SgvfLe6pjPKL1384XRbT3cFa",
  "key3": "5UEtsN224p6UN2kUWdPuoEYt7uMXdxbdosp7UBygBRz5vaMEbXtCWtTQXCCnDuJcbo4MHrAb1AztiYUHCkM5Mvm3",
  "key4": "Wy1sxXX7Diephw6GoH239Gim4fKuUGHPBCEkVh4U1gP73xgNuraSCb1QSR7Tn1kHdY1CS9DWPP28mWh5zCfuzUb",
  "key5": "2YdmwbHAsEhFx36qJtJPWm9K7g4BHTN9nJroUraRfwsbsXszWbnWV5Es2VXswBJf7tDxzGXKeceyCXkUVpf8PCTG",
  "key6": "2GnUPNQLnNhKu8K7JiTrAGrqEYz9yJXFBnmsgAJibBnxAERyDqmRSENrBvfrpgnzbmqZb13qtKgNWb3BNhUP3r31",
  "key7": "2YjD5zwAoqtDhUFaMd3bjLyeEwhC3QHamZaStxPgf13k8yrPLxZLQ2wnJfTd3uYFSJHEBJDV9VS6pox7GqPEuckF",
  "key8": "3j37vuZcewR4AxmxcXeJPfWojcJn7Mi9ruKmPis1bVADhy81tJftkafPZ5wbQQhfg5JGTwMQxWXawJokSd6edqch",
  "key9": "5tEUQy3MLKx1aSmyN5nARSLQHsxzSY7mQ9MCka34Q2ZDy4Cj4FoBgbUr3MeTYAueoqDdNnKow3nuMFT2RDjHeW6s",
  "key10": "4R1DJr6ULxowXVSgVjJQUWjuMK5oygJ6GENLNb6ZJBMjy9cTtDLRkWxhDzESktrZFHss7tmFL6LcdTfE5R3nqZV4",
  "key11": "R715z4nCkyNQAVnEjWxrDDKuYMSECV8kNMDKu9gScVrFBgbQcNN5Y6fZJFgDqwqTRDsz8oJV9rKZcGtGH9HrSuS",
  "key12": "3xNsp3wrWrwGfzz7h4ZTpToVMz7Rn3ogtLeTFzpSm2npArR5QMbRwuxjydo5wuoEfrbBpjxknPTqAq4VPV2RLeZ3",
  "key13": "3ov1ZdfJUP8Pmb9VBHYFkiGfHbUAQV3ossp1rz2HaJnKnMoDtuc1hQgiD6skXnG1WJ9m5ZMfBgDeU6j5X4MShu6j",
  "key14": "B34J6ZtD1WNsuRp9nGbisZA5K7Q5gabZvXvMgrJcKX1VAZZtF1n2obCLpjLauXr1wnumNS3KZyfHYcv2QSPqu6J",
  "key15": "4ZmvSGizmuzThVmcz3hQjvHpXkYXRxY34q12AcwQZ71Z4MPz7ivaG5u836bXNvUZzp79kEZ4i5vSdJsi6Pi4VdsP",
  "key16": "SwkD28gjxt2FiHpuhmM2J3auX3CyJXad4wqAHNbZaTR479T7Hdi2LDGJdmL2dvMtwiJNx7ektJxpogBHxxRNXXq",
  "key17": "21BaRbxzqBbSbKqoVhcLUhgvjMiy3Wsco7hjcHqWZHMwKYBotUAXSAsDgYEMUXMBXVAGPr4zit2eWLSRXu6KiNMx",
  "key18": "3Ha9bf4ov41BNtrtwqqoAzfMZRE2AE2K1jMXQifMnce8ZroP3MkYFKwQmgnRwEdAHP7EQGKQwzvw1BERCjZNMEWs",
  "key19": "4peAhXEwcbPhKHJekgU145178TVTZtzfy9AnRBBhWKRfYDo5fpRHMAGKeFBwp7e74TRvCoZD3tjFxWDokg6DYXAK",
  "key20": "2bt27fck5PGAzydg1q4XULuvReaN7ppKHuPQ135X12d9yaJkuQP5knzobqpsgjnQyujLjBkcaGqcHwsCZ7dPvqwK",
  "key21": "36fsoCwyVV5NWPPAyzrPS4kJFzray4vkziinpaPdfj5WvDB5Thh9smAhXvrGbdvPxAZywNRTaSp8mQ4Fq7152YPj",
  "key22": "2pkFG8HLZEsR5LCiqnmceWysN6UbeuY71WZJDYoaVF6K9kd3CZyUBRyWnnq1MnFyjhZbQ3wprrkdc7tdWPfDcZsD",
  "key23": "3Tp6NobmWG8SFQq4ACXBuYE3CZe23HrD9GKfLPQpT8xedNR9oG1o8uCxCMkSXJ2bo1ixxPzYNtCmF7aRj9A7FVex",
  "key24": "62tCEMxgp9TxeAG7LpAfBqLNLecd8V1bWMLUfS46mz8PDTqhFAD25jwMDr79ZmRNKNwRFV8k6SKTMxpntjuTT2tP",
  "key25": "mYq4XEDYtuhEbnR15cMHDPCUS9BmgHTc9xEaTcFgP3NQEJVSwciFQA9zoVTivJEy6PPxK5zSetPEgdLs1mc8zpw",
  "key26": "AP9t37QBeyebDKCKfhES5HqK88A921BXCdPLvGhuwqYiStj644iEoBu3ifYW5pjhbjQkxJFL2F7udzaXaQm28VL"
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
