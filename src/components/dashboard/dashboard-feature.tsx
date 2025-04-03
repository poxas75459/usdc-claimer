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
    "3f18XARaR5KAJiUpXnSoSCgwt6etsyAUEpSWUAtYk3gTM6jhcApTVMkdrjjGGc8dcNQ8fTHn3Mpt7d3Q47ZRbrXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PPHcPdCxJipbh7cVq5CJjTFzDinxNB53gLRQWRw9opNgY8j7skGaUSPMDmYuNEtKAfs7jiMKdVTo918P3aFAhZX",
  "key1": "5EBsiUoqbNeLLcBx8zMtdi8LrRs8b3YzuuFQ7NJmLN7LUmUEswA6YEUmfhR8aqGnyYS1yH4qjVj3H8vu31T8DLQE",
  "key2": "5PQ3zv4P54j6vCrwtsRc1LG9THVmrsokvyJLb5bxoBPFu6eAGQzaVSN9po8w36MxQshSf8LzMLEEi3hcWcuf6bkD",
  "key3": "4cneHjyzy4rZVCjNdgDzY7bK5BQSWwrN9YXBbgc2aS1M3z6RmXTEYXyvKstAT6ACYH99p2xgWbCWtLBHVqMVhytN",
  "key4": "5RCdnotf3apnEaLAATDSKJWGutgvYLA7myvpKshMzaa2WSwdf516rpr8ASoWBXBSdrgqtGyYSybEdmFbsDAmUanm",
  "key5": "BXq6zDUvsnSiSDqFKNzJLmuh5PKCzPrms8NSTTrPdHqkcj4Sc1Qx2VB1KR7q5gy5ihHBBp97fUeup3QhLZ5ZuGk",
  "key6": "63DbSMiAVhcyWDv6qge5EE5v2E8ugS2BH4gWcC4fgXDPfvPB2fcULPre3WA4JEbVhuk1E6UzRSwTVWRNjWPYYRdx",
  "key7": "5LnuY1NaxKNz6huvUEVEBzypmWUvLTZBSaWMnuNE4JCyfd9L32QuS9Pw5K6i69nyH7KLzBMaYSLzfNw9vQZK14xf",
  "key8": "4bsso9r7gwLCDjPJFu3zcJJFre9uCNbE28Py4PZwSa5CVZs6wxRPZEdXakgyi6RAr68GgQw2G9uCAsCZh6QiwmFT",
  "key9": "4SL7BbUd33dTqqrCewvTAEQxAkUFxySd9oR9FEXV91KyqvE6zUZ4N4gApZC74g1cEBhFC3VzdD46ejikxNDQKfAZ",
  "key10": "oYLcrskiYCh8jCx4cbDjMrm552pkD1JBeg5Ebjd9fWVuiFFHpSZpUZUzAH1RCpdtMjkpEwyiYedAgv4gDtn8dTr",
  "key11": "267uNdcwfaPqBagNVBg9JJDbC1aDyVUZhEjm3TrsL9QLvUhg9Gvu6Ksy2zQL3qSPQnuQpJG34mk5e4BQZ9ZP3qK8",
  "key12": "241oAPzBVFzsbdvZVnnHvkURPKm7PFJDUKij1pBUM48kM8JGMBEdmEm1Diysvbi7UE5dULuDPhStxoJvf5VWYY6e",
  "key13": "2Jswdta2A4Gx8Vag5yDjvJRWduyVJSX8TBpUgTxGLTegZn232hzkNJ1vx7oFxQ6QQPNeHqXaZRvU5wFaNei8z6kA",
  "key14": "3Eu5aP9hp4FxjhhKPfR5u2bdmyizsa5bhGt7fyFjEkyAk5GLN4yRaHPczrZmSmeCxZsNJ1VB4uAXeVBWpoZt664n",
  "key15": "4HtDDqShyKyvNbe3BPzvSDVeSoaKYPpnKFAXHUTDekMbVVsevucwmL5r9fVWEogVYWw25JHwuWWVBXPsP6VvHv5V",
  "key16": "3uqk5o7ktg9CZ5mVaVtESNGmjB39CsLExk2UNDMhKnxiiCzZio53CEc9shtfFUCbwE27retZAHfcrKUT6B3zqFK2",
  "key17": "5gfA282dMVFb3hV4XTMWCzh2ZSTeAdhFPkY2tDZtokrwEyiKmLEEKUdgF4dZzStU8QvCkyUCC5fj47YRyWR6iRbu",
  "key18": "51azcZSWRQXdJ3x9S3ucbhHpQRCWAqpu8szByuvHH5qpeFbcFY4gkLD6xMth3LsC56BB6BA4C3B8rpSonEfsNVom",
  "key19": "5a4ub3pqasL2U2r5RJxSrgJiZz3EuWuZKTuJX2ArbR67bp8Fk8tifajUcd42E1RtkRFhHjeQK4AWchYk87y55RHN",
  "key20": "5dd3BnCU8ZZvqGgmwyFnz6NTFRNpEasGhFedy9kXaTqEqYZJ88Y38CB5sekeisd8eNbsMMPw4vpfX5uQtR9mBGN4",
  "key21": "4T1uPRTV7QZvQ56dVpL2hMQudGwG8jkg659ppapQLhiBTuTvUSfpAwfvYLPtKNNL1CDFPY9guXQLNoNwcY5qovNa",
  "key22": "2NwMC5wjL3Koe5fT8Lz69MH2oYcyKey96bTQqED5dQZDKQXQSD9WyFhtP2PE1nEyatfqYNFA1RsrbPUr7EyB2hA6",
  "key23": "4MK7enwrPkmLuKYvdAackxBbHBU2a5g1qj5QN56w2ChPbdx6zidBsnC1FANEhRKqZz82uvf5CyMsKtW28AxoFLPK",
  "key24": "ikeYNuSm69si7tW8ztTjaur41QtkapPprP5uMJ3zGFxx58JNRyfkZLkPMFa54JsuH6meE1QZYYswu4SeVprMKdH"
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
