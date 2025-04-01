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
    "2Tn8fGRVwuf13A6CX5RPZMcT3qd4q2zwJmkgm5JXA16fyuwmF99pvTpCXNsQJXxfucGEP8DmGT4S1j8cnDoWafM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hhsixNyBJzLR14txoxXiU6scL1MLdjRYWh4hh9S1GGpvwY5G7RBDYrCMmFHRqFT7NuaxoXqwjcsu8ReeWU1Udnq",
  "key1": "PApeJAw6YpSviuW1SgCHU7R6ap63JNaxuj9ssFUFMWehZLNLBD4cr1KtUen33a1XyEXASuRTRR7w3yGqbKvnCPd",
  "key2": "2D1pMhqfdR1qMDrEk4JYKMgSJzFb4DCYqf7ACXTLeDsM4sTd1pt7SUoRib7LBGzz4GT4vPrbPHag2oX64wBEUmWn",
  "key3": "57qt1MNYSJpZ3zv4tKmpDWQ8Pxc267a2AKkkknzQXaVJpMfACeRjatpyGxC19wbLkoZE7Txn4huHG3ePXfun7TG6",
  "key4": "4KMCygLeBdMjNSj2LUYEUUB1kEs61oqSa95dWB727k2dRjzCakNWHNAogsee2ejjmJCdHa5nL8Jy5pV4ngKXkDcq",
  "key5": "4n2CCnN69ednuX8dTNDmzdQ9AyoSm2BSdSJUtrqDr1KD8CPqUP6xsFA4484HrmE65bbTWCNFVjnC2XgDmauc3tcZ",
  "key6": "3tVR5KasAZBWWhSrXCiaYNPAmGpympH9Zm53mY849sSrKTkMiEHs8bAxHYyeia1XDdZaeRsmBREoPGvQ673dmrAM",
  "key7": "8PiKVy4bkWcaKDmxqZCjonzqfEc7pfmCeBUCaTDJ5s2p5RgAts3rFD6qhAYhZ6m9E6kXbtYUbVucp3MoeHnj3nP",
  "key8": "4S7XRzYDmCRsH7FR2uX2aAXkye1DUaSkZanU9t2wg8iPUFYsHF8qcmuHGqVy22W5dnE72cZxjVr1NPhFtLHfbJjM",
  "key9": "5SH1rdm5c6mhqz12JVt6q1pEAmWnBnUKL8QGTSigXmatDwJkye9Ea4F5kvKYYJs8gcSEiou3An6T8563hDiKt6EF",
  "key10": "5vKpEKjDU4gBJtFzYjNvoMrTUdQVQs4w9nYmedpnzQ8KhjnaYJG7DeR27vCkC8NB5Wz7hyiPpLaWtkBoRvds4XsM",
  "key11": "4tsAhyuiYKUoXzFwDsd9pwCsJdRKDJA1XSWiqrKt1wvzgsYUgVFA9rzDwVkNPbUrDygDwkHehM1WTN2iZdhjHwp5",
  "key12": "3dzJ6SwTGcXKP8Veys9NxV9PxQnoCPaJdrLCcQvLgqfczJA3Nd6knScHZqL83ngLjL86AQ5mEfKHYgv5jXGZ4vF5",
  "key13": "4j3N24YRzGX8T4wwwtf3jwUy6Ensh6tnoU1YqnP56rvoXTVW9zJBby64eKqmcj1QBeM7oSK5kHZAatps3UhmDx2z",
  "key14": "3BBiN63KNqXtonsnjKfgpX5tgojXYsMS7vGWFXoZcD5u4rXqFqjLaLLsip7yhrWmuh3ZyBoHHQ3qu9oW4GaDJE8g",
  "key15": "7m2fasmNe7PD4PDm88eKNoLByUTZLD2d2ixidmcGw6kKqzXXJobXyAdw3Yue63wjdchBbhdYZgVtQDESELmSANC",
  "key16": "5rdpogcKduqbHeuSYGotZSJcdKrgWxsjvJVQUsfTEiKyjcBWvtUv1KdiA46xYCGd29jjR72z6q4Vm957QPZRoS5Y",
  "key17": "2MEzdFjVDWH2veUpWsi9iZxBqUxpmqs2m5CYBGuoBttnPiQyFgN1LHqeYy1qtVqjuTFXLpnkMdvYbxU4UWpyWcpz",
  "key18": "2HwPmHjufvRxPjDdsMqHh7botGjycNJqUYHzxh9hHRon6dqkhTQKzLWFnGpMChNX78aKgTy4tVbY6oDitEWzbAMA",
  "key19": "2kiCmfXpAwJ4iCkUkVLYVv6JdwjKwMcirjiEuBzuvnLVFWSDNr21yqRvffoNnDj8J6PpMK8E4x4eGXCGByyPrNQv",
  "key20": "2VCM9JaBkG3AmPiDvzKrpFp814uYqQ5cJJxLm1narJDZREvKhhcqa5SRLK6p3SDFzFubtNe1FMQY3N9UUDZHDJcR",
  "key21": "5qXvVsdZoK4LrdsVAysYBZSJ6B3Lc6mm6Ximv57n6NCtgFcoT4n6vKCMVsJUthzbepqq3ujYkyisZek6fMVBe4Wx",
  "key22": "1niRUSLEYSWfXy4EKHdhraNszpRHLKquGPAWtTiHCgJR4N3UWSm9NNXrzZK1syE1d5DNcWB7AvfommmXUkzD75V",
  "key23": "3j682PAtSeGnmzXdJEGPedBAV5YhGX2GYefF1teBaLiq1Ci1XEUa7qfk3tQbiYBLxNF2pTjFDzJrgzdfggmJiZMi",
  "key24": "3xF9yZoQ2WUwP6K91Se8MDnhXggctmB2vL3txpZL4x6vtsJwxF1G9KfwVTtD5gvmTryjyV9HWhAav3npcgsbMgWh"
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
