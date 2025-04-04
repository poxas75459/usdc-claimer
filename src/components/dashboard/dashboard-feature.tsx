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
    "3whpeZCpZW7KSBTBBYWgejPkRmGvNphSNWUL657CvqAb1GnSP9Y2yxKDRGj2qBrrYuh5bZbAkKTi3SkCoA2P1LDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rd8uWzWk2h4iym479B2DgtzDQ7oPuLBtqd5FtDAW4T2AF9XYQsWKFV7EeWbT96QiqRs14xTTHxSDvsxf8PS1Hhv",
  "key1": "5oYArmt2wL2x45ss3zufxqiEXSUZbf9jyPhkPome1HoqV921L5QCBvCfuBGFpydjjX6fQ3Se9j2qVGCUBD86FECp",
  "key2": "4cpEV6B4miGaSrYrDrREWTebxzTNG9uLUZ4BzfgTjVBBksqbzTemnt6UunNZv6pmX6PM8vNBNu8cVcW37Y96CcPq",
  "key3": "2PjA3td5zVGq3VVrAptKzPfM8diwEGHx8sCMTjJ3dskmnwbn8RmiaipJ1TLMPJ3ZDkxabrjMMDMQzVNYuxMgaKZn",
  "key4": "4EdZ9rqFin7U8T1UCmFKikivjT2cmbvU1FNKujorgNJ8rF5LkxFGmAFxcm2bhgWRPRTeQxG3by8Emdw3bKprRqVo",
  "key5": "5gUwg9wbFS1tgFDKdqMp6Vg9kPLq2Xc7SJJiWCnMRysf2gdbr6WatSqyp6LdH8DzhX3EtMKJYs1kjdVpyDfa9jBx",
  "key6": "5xnqFeFKZ1AFQ7oTS4BDp3kbbRQ1eYrDRmj8ntUkXPmdHDsmkoVj9djaQXMo6Poqg1VM4NeEGtv746aq1t1bDbeq",
  "key7": "2qvHWoHmzN2GWEsr62Xk13gZzGqEiTWuBG66GB2tDvTAy75k9AHVGRv93oz1QVawP2qjT9EphWkqHwWTJf7uMgS3",
  "key8": "3PefbTjm5o1sqTtcvZZiT2z1LrXVSBM4WobNUc3MNNqnuWTezHrN5cj43rZKo9yZKzws5TMjM2d1aZhjps1QpCbH",
  "key9": "4CsUMjuZthr1HfVMNmLj1YAqQHxN97T8KdfhmHkmBHGxSMRhyXG7D7Y6LPMzCkKSgNgGsgyKTM2SdnjKLivXM97x",
  "key10": "2b4unYtGmmBj2bUWkeMnUyL7M6vuNeUFTpXjYKgZ3mGTQC4qKHpLPAtomMExewH4uvH91T4F2E9aNULRQAzezNBe",
  "key11": "2WH6zMVJ71KoEURZazWZf1ep5triW3sm3QydXDhBLfKGQcpP7fDGnTE6k92PG29rcK6AMSNQAoeDigpFfnpC5fmp",
  "key12": "BjKgdzUhLV3G2uSBRm3HXdGkq7RNvGRxVaX9yXDGsiYA96QRkYJcxQGodBAeECN2fAjnxFXNqMSvY6GswNNyMbt",
  "key13": "3t39Yokbx9sXgr8UyA3o6yCe1rPJs47PCCV16d4UxbTaMe4uNuGW9v2moW4GwTmLrtq71Q2kUEWBJrShManzptQn",
  "key14": "59EsrF7eV7Rt8X5iPHJCzogBCWVjGWjW9mDjvAb2HfPMQwoktgWaXCriSqR1tSAMus2scVHtvW7f6iktiTe1Se2g",
  "key15": "4Wo1XXwG85VP8NahmEZoY9xWkZ2qWMgVWa7iQmtLGkjqojzD2Y1cmWXNQdnLbLEwMRmkTVfGWTv3dFNvV7CGmuT6",
  "key16": "5WQqu29PytvrHZjhJmFGpVWrn8BM48a9Q8qT7f5r4sfTNzaeFbfhA1K9mNdCem4rU9mb2Axektg258n8jvPGdu2b",
  "key17": "52V1KDWH5W4EXqCa6vTvDvtMj2BgCtYMR4HpiNexhn5kGa4F6ZEC9AydsxVJNdwBXuFBY5tSwCTkHSGzw1v85EmS",
  "key18": "5T5RUQ2ExcNzy2M1agbtmaTwb1txWSoBZ7zFQ1e9M6qC17UYUefjEjfzYD5K4F5hupceeo5zDTYAtvhiDkEAFz6J",
  "key19": "4EcrUoJR1mLg1MJMsUn2aKF3cT8FNmCFhKUngf7NHDJiSnyUUFBqm1X45kyXnt6L6PXkj1UeMQVTyofqouAz5EhS",
  "key20": "5vbxyWt1JhEP1K1h2EyC4e27NTz16d3QarTPdFydvzgpWpkXZdq1iBZEutZhWLC1LpgLGdZDJuow8LaFasZbu4N3",
  "key21": "ZZc79uPD2UVo8iHR7WevUjbhq8pdBQ8aVxkHY9crdSz4jcMRMjqnsiDqNcjCxFqPWiCGd6sWbR3zAcXPJhVNgu4",
  "key22": "4WhVb1ECxdUYEKpi5PySTWAYPLFsPpWnZGSjm13FDMxd7vFTwiUykgtQjACRumMYmcrMaN7mUNUMnCasTQ5AsJ5L",
  "key23": "5uK2Lueog8NcgV5zuhLcbgM1iKbj3UnNq5fCod3f1iztpW1cxjiGpnhVuXRwMfP1WgY9y66pY4BtgDFbgmiKqtM4",
  "key24": "KKipQPdCUUM7CTEn4yLh8yEUyz1PCD6kNCEYm6TXGGA4y2QwQwffjxaX3STGQkXHn2Zbkb1SRxX8sJrD7m1xhjy",
  "key25": "XqQLwaS891GTsKNt6dwKPahSchLWEMCZynCXPk97rUPESF4tCZPCJZ1b5wiJ7RJAACEt9XLEcJKvfWV6bNCZps3"
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
