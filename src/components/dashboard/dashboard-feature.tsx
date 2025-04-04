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
    "3t4PJWy8zYSfVAgYHiP5qotFVJ7XPH2ZfoehTfWuz7cHFwUi5TkS6WZXo9tvSB2zGQqGg8xf4Wrd6QgFT1gY73uH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RqAbnHeXLCQ9EfGsX7Kkg4u2P6qa5sFrz6hzrypa23AKhcFCNmvsRD7Woibevmg1WAP4rxcqdMnZpjKbWJejjA6",
  "key1": "3LR3GqRjgQUTrbHMAoAkLSahNkQFCjJfM4PkWpx9PrMm7wKmp2sQYLuFTydSaA7thpGPhKBLHPc6RbYsd5YG9SRS",
  "key2": "4fZhzmmk99GPvNDvoTa6FPU7mG6MsTZwthXNF8nNAsRqMoNsTkqvx7ypNGXf2VR2nvtSQVdkMBeykwBHDafqVakM",
  "key3": "5QzwFKPHnXx7h83E5g2ySERgHH7rduLMZKTTJ4E5njhSZbYWPDHVrep1moqqrw9xsHH8EKRvkxCo3tNWo56ZAWoE",
  "key4": "53qSRapaCV1grdGcFCfH9dcvekYMQLctJXvV2bAVqhjZjweDCPVCuERrqkA475AkR33XyBe12Gntq34rezPgkNME",
  "key5": "2jvnRFMBD312FUwbGSu784M8fNHyc8bVH3MQAEDbXXv8VMwZ7zstmfvSFpzHCFpWxdYsCgiNTAdijuwhWvY4xQkp",
  "key6": "5yqyN6kn2BVz91nFHAToZH54ax9Z2mwfmTJKXwXnVGwmYQN5E7nX9xEZsP5ai9zeE5neoztLWxdjUKh2xskkGoFG",
  "key7": "5trdQFG89boNaqTjxGh9mqUz3Qdt6DEWn7uqQPsQ83k1dhL93HVanTddFZBfzkYNkHod7JPKxPd3UTLT2YkaRB2L",
  "key8": "8Z2ZiQ3WWMKre9jAhh2R8Z7AsdKRbdHpjPCixou59VMcjvjjURCijEuxdpWey5kHSA785vvYtTr7nj6cNvx4cfB",
  "key9": "4LBUY51Jkj2MFTBUAzTeHvk9nR7kUsyfEqRSjjKAnAC41egrhGQ6aG6JqYAMjjgRR2nPUK8ZWhrheWWPX2VMDZPN",
  "key10": "5iGSsGP1u5exbJo4GTS8d5g6U42Fs66usixBL18AmwK3nRBFgDH3XqeFRepy7FTNcU32hEYjhqCoFRb5Cs6TCTyY",
  "key11": "61PR9EzZYKiz9e2W37Htajqv1ph72TJDFc9fqJjmkFmqf4zgorQ85uhddPNZPQ1zstZhQAyzXFyG2NWLfxnmFRYS",
  "key12": "26iYkaMGZJtjH8XNV1WDXE1fMYQpku2q9kiGb8e138eK1VrUd964C8x8BS55YwjCfEShyf4p7pYmDFoVi236pLGd",
  "key13": "3j9LpTcD9nGqtLaTGhsRHrRoHjc2eukWUMkrz9UCqHqfe9xQnADwknK8r6XHm4DoU3hWnL2v1PdnNz1eW55piQEo",
  "key14": "2S1V5sb1YqtfhADUBB35ZxA95aD3brfERz6rsmDoEZo2UvzxqpETo2UX2t6z89YCWQQzXX4QsNkq1SVKBNu9v5PS",
  "key15": "3xXu1b4b5PrpdKb7rfnRYf3T612CTGMBmZM7MJr83Qqgm6XaQci8PocfRa6b9wkr9uNpmhThDkhDToRTJq64x1Sj",
  "key16": "3jKCGVpKSJkYDz8M386choiDhCqhwDpGyJBPW2k2Td4YAqt6KhXz6o3svoQdBom4hFHxLc7J4djcqDBGtwEGHpNF",
  "key17": "4qKJNdFu6HjHBwhcaost6Uberw2mpYkzE8jTBeyUh5ojVvFhc7khxuhZdw7XCBxYhkKXLpHyTiKp2zpisYsJZs99",
  "key18": "5URypUneuZc7xtW7cEYuNdbAHvLmU471Qf1b6shGh7VLvjj8iS1RkWGNi7q8Jr5rhzppsyY5LLCGiwa1agfJbaRk",
  "key19": "3BKVrZftTq6mXm9ws5Wskpn39QtQvmEtCD2Y7WhkXPq4xpiFvyJJzyWD3PA3CqLmngFaSHkqSLvSCE6Z85YYxtgV",
  "key20": "8RAEd3qds4xu1VjAmgVNLB1nXhNBk6iimqNGXc3Hhx1PdZSf57kGpuBhxfLgVUzHseTn7SCuEsCX3NVBZyxQAyP",
  "key21": "4Q8fV4ixLcEKFNcoNVagKAM1syAAqLqN6uDWbNipfL4CqEpgixxXFb61Yk4QAtBRvrpmNZD6t6jXeTgpn53TGCKc",
  "key22": "3zeMH8nZhkyvkmavm4afPEJKcTfs9Crb6dJNJ5Cpaez1L9zuGLxzduF5wo34nyPgYiEHatCVPzS1EWSuXd4A3TW9",
  "key23": "4V3xsWSoRyAz2cvaTYd3XgR7Db4NsyvWCWw8X8dhq2P7TGyQaNrauhmnDB7L5ucWK7wAap9jMhnTcqawpFeLHvD5",
  "key24": "3dGoqSYQdMhhJ7uUSvRR6ZcUpF9hweVngiruF2cCqWVsAPZuosfBHKBhwij2bmT5o7H3E4YCwkYtc2AJBRVLcYbz",
  "key25": "4d9hgq34KQ4q4amBrVdFpm7w3QSGr6b7LvPpehRuazT3nn43HjtrMfNSuEzntwdu3sdSz7oSp8zjAWfstv1BtMaB",
  "key26": "2Q1ebUnikNyhnQiWtePCMYEUz7pBG2iomzYjY1XgAkA433FrRXYLXAjnmRdnMmZSgbYE4phqQVWzGQNqD8sK84qP"
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
