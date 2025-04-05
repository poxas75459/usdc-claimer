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
    "419CMpcPJsXZAqFc1tgH15UnoEU4YejeteJceZLJYhnfeXW4TdVQeaxEcMQaKjYraqZiifBndvuyoQDiEaAUqPmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PiiRB76eDv4XQqk7kb5MMaT35FQYe1uzGjF1PzMfAxsqc3kinQtxkgQr6Bh3Wv9peePF951Q6uLFaAupeiRNzXz",
  "key1": "dUENWThLWkMho9xNDFyMEnMeFLY8uLca5VSKoSeHEYy43CL2FEJgrbYZ2MezERnQmE8ypprcApAv5bLmrLm8v2P",
  "key2": "3Eko36dGtHhFA9PEncKGLf9iUDADQ8WgomsTWNSSWgkBTNv32cczbGLz2nRrEaAmj2R65vKVNnTLo8wuB6TwJWw7",
  "key3": "a12VKZT6YsvmmP12utfa2PXCnYunonCgx3BYcC8xZJi8Fm8SDWfiUje3YrWXWGxqrzXXyyiPEYvoWSEs1fiXXL4",
  "key4": "4hEVFoYsR2KuFqaR8nzTLzXZ8znK7QUnggbWfKmZuzTYMNc8Pce5kK8hGCqHszJeJHhWvyGUFNddnZtC5RFvFqeU",
  "key5": "2N4irRhWe7y1n3qxjt7Rra2wunVba1GZUihRJ3v9shAFMxXMsnkTKp7cC3TwBwNPKzEGS7NRnhK4E6wQC3jtirNC",
  "key6": "5343D4Siihz6iTd55mDTR5bc2c1oHuQiASoESdMi4zMWi3gAUGghCrJ4T3sfNruaTGGeZUjY1HeX7Skp4Xx5rSz",
  "key7": "64Gm3J6vUE9KDToSocPvknc4zRHUb5S5csrk8NiTBSG6LSnPKvWx8dZjrQUrgzh8rG3a561v9o5njSM5eRWU6mrp",
  "key8": "3MtQ5e4LnBdogydxhyQ1JKqeCiQEiwQdLe8BMQtuse96YyP45RNmDdxgG7DhuoQTvJaHNGfYfq3MeL8Ywv6W1UJB",
  "key9": "2fuULyqjAd9DGXV2odQpzXViMhkUBFzi9RHeaWfyvkJwp75Sh7wYsRzSDFmswiQ9teR2Yo2KHJNjJk2aLUiqZTKN",
  "key10": "4NtYYjDGG9FjPfXbyHin79xmZoHFVceAiEoJkg7pRdMrD2YNyLkyPiv1WLsAa4ggDPdQ1xXTyVKr3n7qgr61aGk8",
  "key11": "3XCc9ujsr7A73a9WJYDhcPNYEjhDASUkcQcRuevzAPd8BgUJQKwpzaanLhWMebXRFGUGdUsxVHXb3VjN9596VvWq",
  "key12": "5zdMoiFJrvhcBHNyJKjmN85CxD6fwB8ZhyEtbjqGFF1gtUsqn8Koj1AFGwP2UmPs6TFCd9sUYK8jaM8qiSCtqje4",
  "key13": "5Ef6iWAnBLoucBPWtuUjSvSXeD7gu9GCVeco9yXN6pwCFhiMXgVnQfhAd6ydYVhexZfqrhHdLZiS7Ldz1m3H6GBw",
  "key14": "5pmcAhmd2fRTjFEN1WooaGLhAAJwq6LrxPZ6BgwW7VgdyZJgiMkyhS1zAQ69wEYqzEse6FDBYTqBsEtoC7yvGF85",
  "key15": "2SZkN2s6dzLMkSaR3KnqYGt6auT8FQkS7dGZC3u9Aa4G1BTH2VXVc5JRwojdDZgkvQx24zFELaUC7VBLGTZ73CpX",
  "key16": "38fMuQ2Ry5jzquTX58EWyw4py3dfMSfwNVo8u6No3reY2NfbY8ka5R46CAtmNHerY7E7WhK3DYhhPdpYQRnVPUMF",
  "key17": "5B34a5idVJCSWEDBg5rfqaFTJd8BwWozPosXtHKaEF1yWV2w3NQxCfVDYbiXXVn89QdjbJZb7NbsAXrzi8rkP1AN",
  "key18": "3McAVNhBfCKqwcPD9zuWLeQm2z7wVPv5CVzxPtZKMLp7X7fT8MSYBKFMC7xJFYtyLqW3nML8NWgyDw5KLEdKcXTY",
  "key19": "4V2vh9G5hUykd6FL5nRzKdnCLy7eu9v7jig6mKSZ45S3g77xksD78rKwxgw8KKTZooFzuiH1mkWEQ4a7CjqTvcDv",
  "key20": "3S7WcF1WBRGutBBsXAUK1FUcYpRV6TtwaBggMBUPFBQKbpidF8GQoC6fy5uVbVmoB11Ui3Ad8JGrEXcPGLjDiF7S",
  "key21": "2MFQZkMUuRWrpFFkidHKYcXXpCtAwqr3raN4ZcRtYp1aha1e6UHQDDSRU6j6nr1oXKy6kTqDpAjANGeEyuLNZSFn",
  "key22": "3mYactS982uRAa88WLpudJyMZ58Gq2im45igbXRCfgnBynhTm6pAjVBRi4V8YSNJm9JcNvRW4JWQe5f7P5HX76Mz",
  "key23": "3SYkFAVijmsYGXnXVEAeXzzV7BFCpJGaEDZ4T6gzQogXEjVSeAwzUbLoMxWfFZFFCvqmTbAwa8zqq3pHpUXy7dta",
  "key24": "3UTfY2EZZrE1dqGKptjuW4Eo8DrLgrhbTnS9U5A7Z5zbkLJmsHfeCHLWgFh44vEjLSe2qUKy8qveUjor5GfGatCf",
  "key25": "2HHxCN3RhhsDW6ttQ6VJworFEY4n7qKyqKi9rGk5Gmj6pqyHz5dZyab5fAvY8rxTyXJKoxeJSCiHTQ8VgdYTmoHa",
  "key26": "3d6zdc23prbJj7ecC3owfvg5nrShjjdZa9TmR9DUZNFSYcLcF7mL3NQvjSB5J9HbQhtcSTtscfXBhcF7qNhjN9Vm",
  "key27": "rXezTSkAEUGtXCRCBw9wX7rs8jzL3ZoT3pWw4z7farvQEoDeSXCcieKHPCyAceVWPrqRBwVVxhmNVUeJnJA46qB",
  "key28": "4jLCWNuWLVFRyKeKNWcefSjvnEavnLXebwdoApJGZuu7DxmwG5Nm4x2HF2ZrAB8ewXdwLJZqnZt4sTRazWFL4Qgz",
  "key29": "3W7mmBRCLh9u3Pe2Updmm2YZt2wZxRkWps1BED6sEGT1faivYZJewZGbXoehgnwwSRJpi7BMeiq8kVH5VdEk8RXg",
  "key30": "3JhVK1jVVVFL1FiAwJ94xETXSF9LmR992yhXUk1yjSsY4zTagFouRR8hTFtwtrJp2vqdmekES9EScbNMzzmaiLNt",
  "key31": "4qNY3mPjUtZRZyewxfCzk92YBALagqZodwY9LGujZJfrews24Eb1WoTZByMEhfe165N22ervnXBFnYtpPqMEgeCJ",
  "key32": "28Leqz2qQpT5VTLWvVk3b3pc88KS4WiniWRLdweJ2ajLqxxGXKBFuZ5v5JUD6FLgY2NYe5sdLDobkJDSBHZ7QZ8J"
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
