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
    "U4g9VNoTuRJrhh6gCP9ihvyCkqwrHh2BqwrXKrEQ62Jf3NMuAYPrC9u2jFRHuEksUq8CNRuw43rzXy8Mf7n9XmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aU7KrMcQTW13uVcFADxdCbKa4EJ6KJ6HgYWjvqSxedQ58osSLuymSY3cfBcq2GqTEifTL4GBUQFjQ2xF9BEzyUm",
  "key1": "5JiHkqUJqC5uBireMmqLA7bvRw424eZ1JCFdQK2qiGkm6Q4cmf8Cq1ucvDqGBrdcFvPJYW2N72wtehUdGsWaK6AK",
  "key2": "2ttwNEPqN99UFu3Prj6yt59GYQSVykf9xPvvtpRYYuVyQ2bLrYgdyVSPLDXmckrWRtHtD26Ecw6kqCCaFWdmBFDg",
  "key3": "5EGRxYCHRG5duQuqFQKyhyZUV5Yf5EVoEyiV7AgPnZk5bC9ccpz6vXGq2vXPaZefXDwjvXBqKY5BhsQsgHsqSVEP",
  "key4": "63685FDhrAsSWv9JfxjTcjYAr1tXNj8eGj4W8QujfXLU1e253Bp6UbTkSjH4GB9UWKRJBUZcneugVCce8wM5PoWL",
  "key5": "4oi97aVMezVP76hax8U6SVsTQh8yB85sHnXwYpTjcujUqhSsSDXmzyDnjrE758ttRF1nQvdEYEDdfpn9CcKPxbg2",
  "key6": "31imQnNBSfi9A8dFq5vxWwcWPxDKvet3pXh5AgPZc57FADrX7PS1nbZ2uXkrDXQSq9eozjGtrJDLWw9p6BDoKcFq",
  "key7": "28Dw4YD2ygYyQvCf9dWoFRPm56ASCFfo7P4YTeDEfrVkTYebmf3bFmNPKusc2NthKfgKNXBpxqEpxWABkDyxYQmh",
  "key8": "rL6RMAMjXT4RpSx5JeDTmvUcmni2PkFWPY3cR8yeDB7eP4r4DskotSFoFSwmLe3RPUyAxdYQ1YMMtZ8FJbHfWhr",
  "key9": "49QVipBF3LqNzjfrTxB6Pk7BHpAfaG1YxAtb23cPsmWh851s2NffFXEKEHEWeS3ciY5zHWxntZx61g3NhEVVGx7U",
  "key10": "2P2nJX95xJ59VCswF4LaXNNvuacD18QEj1HgjqnyUmCL8LoP9P81vQKDKu5MvT7Pq6RNYg8ehP4Nr1G4UB4NZWfx",
  "key11": "4U5VZztNCzT2iv2ty5ayLDYVPp7Hw2B3qBPDzPzmBtDLFrmb8UzdEFXV89XszHAAaKm6wnQ438Q2i5s355Uy746A",
  "key12": "28fAFYtbM52xYoqLPzJLuKsEFb8r2xBhMoGZLggHkxLUEPVBHuBj7h36y28AMqitEd4UbD3iyBM2YBVPw8Q5med6",
  "key13": "5E9JyUiHJhk8jo6M84UKN7QUj7Haa9j6XjLetkm7Tn6TR62pdCfgL92gHHKw9EVmz1fw55d1XF5RuRC298dExEJW",
  "key14": "3Mn27uYDPUTjADLudM7ordLgxQ8hQcALm1q6KrftrhsZ8LZYKnMwfCN3rbGzdwuAizSrBnmT52fqtGSfdNhD9A4C",
  "key15": "5U8BKQpeE1FSZCCgVHFQjuKkhmAVLkBVHwoYBKkStzBz8bqxTY2nogrGg6SB7Mfx3c9Ajsn57qteJuf48qpaFnsR",
  "key16": "3Rci5Qsfasa1s8vt8GZLtd3YTSYJ87dgevsZCu9ePHo5y4DnJUhJbPGKiMsJnJ8w1QfNk4rEKG2DsnYamStGf5sG",
  "key17": "22qA3A8nJ6hNTbh878B78X6J5QaxMiJFXmsSy6GKu2xJAJ2FvDAjs8mHn8yStSri976UnZbYQpnAQcm9AkdmKvvm",
  "key18": "3UUDDzstD56smAAwzHwN33vkZCUnYvLSnVQkzH7Ds4rWVn7YArFfrNPgJbcAxcZiz5Su4tnU58GhxBhBiXdB5xxz",
  "key19": "65XmSNbwjaJvjALHRuWbgV9xLBwi4z3stYETNpwbK9m4nWYkUJMUP3SeWoYCcA8nQYyyLFEnP2oM1bZg5D67kWCS",
  "key20": "2ysxxJGAUp225qonBxok8SYb3djtX9HP6HKfkxnfAvGLoqu4SpmR43AwXUJZj2cbMyPJhLUkGRXGsnYupy9J4KBi",
  "key21": "2h7Wdw2pGGbmWY1x8g22dvgzehEt9N7mVtLHrCgMiEgjKfsCezrKkg5jhNpiyAFcir3KhsTE29C5EqLXRsuCsALs",
  "key22": "5ZpMD4KRruEJixPf2B5GusE42MtTMRFM43NxHhwHMgJ3W6nC5KeAxipM9q8sXGmJv48eetAEFAJvq2bnxTQvAYJL",
  "key23": "zHUiBG5FuK3CsJmtTpCjZk8YELH4nVL6q6bVs2NJiNbEiAFtwVhfNWf2juh4wFP8q7uKwaaEMQHQMr9qs7k4S1R",
  "key24": "1WwdiQZCf6UCEoYrnn5wpVGE1BMZGRfmniovov2b8MmmagrRLXhqudQDY2yjmX14Fzu5ZdHjiyHuroKgkPGp1g1",
  "key25": "BKvPjnvVy7N5o6rwmSPSRtw3WzLF66FHP6bAasjgEiShP4UyMbydreXwMDz7VB2uJMVrFjR1grhn8dBVWHcLZMz"
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
