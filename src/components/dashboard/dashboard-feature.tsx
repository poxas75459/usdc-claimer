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
    "e3215Lbd2MJtoqzucPEGybhsBPTMhapTdzdRWw3S5VwsziE3NND1w4kynt6qhQ8de8jVjncBbRd2ReJayCgWG34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26NxHpLRvjA9Af4Jgy7HG4wjuknH3wvbttxPrHCwXpGLsMWQTwZd8ttGGEeaQ7jdFj54UTD6eEF1XA8LrQbX5xbB",
  "key1": "fP6Jts8dpvZZEuSuFjaSiU1BGaDcPBiQ1LCLS95ouhs3qEaAdvBPgxjqhucQtETREDCCQ7zVQpum9du3i5Ln21V",
  "key2": "4iW1Rn5cHg2mAgWeW6Lqtbzjcqk9t2BvKQzdFVY68r9MEUjfwwwNeJt7m7p98bHxYmaycSCNUFJCsTbrpuVMeSn5",
  "key3": "3RUuM9qswG9e2n5GcmsoWyN9XgBqYb79UbcXL6X44P9BULrfBQQ7tyNuic9ZgAnXTGsNXNLbBYqFEnAQKSLXXUiJ",
  "key4": "4rjdqqqKrbAPkv1vrPHx3RuPTTpeg2i4UamnJSGYcsLJiYK74gC5BsbZVaTySpkvt247FfZrJiiFnAjsaJmhSd1V",
  "key5": "39k264J86jQDS6QakbRSy26nXdNiGr2dKMTkaS9ix9pPoyURCx3X2wVvMXor7xndtFh9jVSdt5uN7tTh8hcBZycd",
  "key6": "243zqb8cjCZzGFWfYZH7cEqk98U8etQohdnoCVAmD1DoX4n7pU9k96RE5gFV4J65T1jyjaKtbjBFGjipZx1xwgQS",
  "key7": "2NBY1vTVFKmm7Uj1djqN2SnDoFtik9e17q2Xa2siZAo3Uv9tDnjBSmqyBBAh94pgLaZyQKH4WanfcmzyRWQ2353L",
  "key8": "Cb8xxuDsYuNaugxZTwM3iej4ApTtunxf7SrqT7GmpfJgbvzqw7YYBQAsCZQQUbRwZXYt7JrvfNDfBdVnAPqhK3e",
  "key9": "55ke6X7sTJpiCx4eGCVAgFkVooPgh2UUsH7pZ5J65qPnfVqZZ6jkmMJuYSaqFPGpRhGrsTWfpYDjZukkLep2mz8G",
  "key10": "4jTnjEvxMF4KrCLhiAzvU3nGRE5fP6WhgnaGgaFsjNQb3t8qUyQFjxUXBY3JBWEXpfKfPmRvrsvzsrr8Ryq1TKae",
  "key11": "29T11nYTC3uDeo6tiki9vsrb9MXy5x8jBqLy6YWcZsrg48n317AC58q3o4rf3Kjao8NoggtrRsfdStihNAVNZwid",
  "key12": "28dUv1v6TEFRbC5EqBk2LfWDXhfXvhpJiMjn3bHhaYqin8KibZ3fgeJvHgQGVkJLsEHv8s7YRB6g7BXWLavqp1vr",
  "key13": "4B1ygjCXLce4DeZD788YDk5UwsygKs5RdF8hF7VXKg5V5YJqPTn9WLRwonnG3yvASNnxdpPw9Tvg9csJSUUNyCdd",
  "key14": "3BVd15HDaQEVobCf4H7TqGMg8Q1oX7pfgCRoSpvf2ujmAQyJGqbXw37csNMmJHxBy2vkn6pcf2L4a9b7pHtMAmtB",
  "key15": "2eHcKsraQJ3mcNJkDQMV1wcBa9hNWLxQJCuZPCVZFkE9X4ktc295baZPqoCyCCKrk3LW3gqWCifCZhkm95ExaiHM",
  "key16": "4mqqZAJ9frUMnpV8x3tCKP6xm3dahaAdHzRtyhueAHatW8bNic84BoF6vt24SomfJp63Q9S4yiVVQkT4oUYcZ47B",
  "key17": "2VatXcomTNaZyByGR14pLmPiR4jv5dhw6EYozQBP6zriByFRhRCXsYTPcTarWe2JEtYBx1Ks41BpTYpLcAWQ2Dca",
  "key18": "2hjx2DXvp7zrpvE3wEfJnfvtdkcZ4EKMnKmVgBkShhoDBGMyqMpKqxGGJo4ia75QGpqDN9eEGfpfzKRZnmDXn6LV",
  "key19": "3dJ4fyg35rEL4HNYgAtPZJR255LoS8MnEV4eKVv7mrjjKBV5NcHi6XzSSo525oEuA9bjzHX8cE5wxo9dV39nHwK2",
  "key20": "65EhFo1rkRQut5VEtYMndrrCSDyfMaeJKuXbKgLcPhCXpnZ9Ey7ENTaM3o4Nhe9LQPuZkz3QgtUUmu9Veyqt4jbH",
  "key21": "43MsCNrU6y8A4BwYTVMwc1EENKrVDePsf3mdFmr99RYK5AuebAy1W4LACisdGKyJ4tioWZAmfXLBNQT8nebB6tdY",
  "key22": "2DW9j19TydouzrKAcw5iPhTwzdFmRQvu3nuBrvbYDYHNDgoKVQ3pN7zJssmBTLEx2CogDYC5YwVdGBFmvTBZ2uLB",
  "key23": "4bewHNQwM22B7qq9rZMryk7L9mZzRX5GqQVLZ2hxPGUdUHV8Y94gptj1ZxMqjkfVNph1w2WLfePXi5x5BZ2TabZB",
  "key24": "JKV8Cms34veiq6G3ZhhqAiiwa3nYnadsRRbwHfqCW8F8gkgUkvSyd3G43mevinvvYPQpuiSUfB8k6XU3MPpKYkR"
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
