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
    "gN3EDidkgD2qbjWCyy1aMK8eRgsn9fEBrKmbzeiXMPQPAYvxmc8iXjDSW3N3MQQA2kJz7gwCFg1FCjx7HRrwbc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xZtxJzuLona15dLHwqUHSbKFt8zb4UKTM68y7YQJBk7a9bR6eznLmaqPp1jhZswXSn6DmntRzq14hj4AFCFJVgs",
  "key1": "3sitQJ9LSFvyjyKtTiNgA9Ed4wXKi2x5GHCVCqGLoLnY7Xw6MUGnz7cqRn5FLsRhxJggtRrwHPrGNaVULuaA7gax",
  "key2": "2rEAGmDJ4Ka2v98py9ThGdgenUQx8irvXUQs7Vj1sZgQs5zBS7ruqqjeX1f5nL5sEHBVMPDEYnWehzcbYqtdZV86",
  "key3": "5DgdjPP5jvBSp3x4MjoN1h75rq3RPrS21J8ihBfSqTaKFYuXbupS1h1hGRC95nbx4ggo39Kckd966u8GhWJqB1Se",
  "key4": "YLRV5MNyG6JzpzhPND3rcex9kbPzNt3FsbCa9Wdhj7xRrfcMEy8SmiafLyhZiJVERmjFdLVuRxR7JKgwhKE8BnH",
  "key5": "uJCygAw8qmHBkx7sFZqgnxznAKz9SZA3xpYEp4UY13TAcj8mW1BgDCqZzSwWxzJem6L9BWysTRzjN5E1wv2Ztdd",
  "key6": "5V3np3JtBgyXtyHCZr1mJXXbf3zEqE23GtooxzWDWSBTE5gVHoUvGtX6cANeLX7E6qZ7ajxi5BkfeLX3Cq3WnhpS",
  "key7": "4VJdea6XXC9dLQzWGNKfxah8DAuQDp9jba5JP5KKHXYx2dspeT9Qq9aMLf9cxqrNf3yqVTutW5iDoMWqZtrpj3Rh",
  "key8": "5349t86wdCm6AmJwKKZBkyp2acCQgz3VQfqZujKDAr9PGSTcfgqT523LmAxqVjQLgqrsggs6KbvSTBFySaEEiJPc",
  "key9": "5pAmB3FHVNvSUxL3tLYBHMkpPznVo4KCavH4SuS6UuhhsqTpG5JL3PhWHxYRUKb9XpvSVy2qETgBufipnn5MjjJ5",
  "key10": "4LXXTRXHJwDQ87F7PeW5t4cYcsckECEwMLCxftePjtNPv9mXUdky5k78g9WxvD4zGvZ4LUe5CCxoAmoniWkVP2e1",
  "key11": "4qvhCfTBpHE2jiwS99N85fGMuaYNvhc7GKiBSz6BzTFhthahj1XmNYgkPHjoxjW6r2QcVTbT8WYCSKyCY4E5j65E",
  "key12": "4ugxQuNikvKAjsXwsq4Tqtv2ReDNujvEQEokBSWh3rgW82aNezYDWz8J8wUhA4frNgNi5n6jdNS13R92w1sL3RHp",
  "key13": "4aJw4qcobVsRAbxoUf6XT3fJ3RDKxb5HzEUBMdNR8vPLv2UCf9GBJA2DDP29iWRmizS7ftAVwunax4fWJnZdnpMw",
  "key14": "3YaYF6CJtTMiizA1GKzS5Tf4bvWScatMyDedGJCwvcSH9vzYWQcHywrnTYMzrFzz3w5cMNyceGYbi2yPctLfRZDX",
  "key15": "yYxqkpkrTuBoQwQYxsXpVmKbEu35CGXf88GMPbRfCwmN7FXcy1J68MgPMn3FE7UvZDw5ox6wjb4q2uv9kyAQyP7",
  "key16": "54wcJZK2Lzx6LWtxv9uPSqme5yRdMo6hGAFc4tR4eGapU7SoAyc8D2217eE24Z2sqovFhcx4844aM2vjCtQhqgDh",
  "key17": "4Ug8EANGKyiUGeLazAWqhAz1BQ7XSDn4qoHjFE7WKnA4Vsi7TFQdgHhqTBab5Edp69mMMM4eEEQMARQvpVSHgzNs",
  "key18": "1Pai73e8qj95tx3NMenW8VjvFy6tRfk27MRRuMfzgVSVTatzMTyRhESqmTJ8sVd75kZ1PaKijEg8MqEZFT2STMd",
  "key19": "5EuT3PFTGkGzdJ2qSPJi3rTik3zoHERwvPe1pV18cYoqu5tmFX4buwCii1wVwENufhXaGDUEsfasLm71Upk7RbnH",
  "key20": "5QDLpNYCy9BVmW3qyyqEYGKAVXwK2A2WgBifVhHEy4L4dpfj2tR83eyt6duuawbJ3snwS7y4HgKNCKiwUkmumqM7",
  "key21": "5K5h58we3yiu5dsaEDzsbkDtrHezk9vMg6xQLkVUyodPyCxhqKsCr1NBUzJVZXQQ8yxk7TggTwUvxS1AFkckXem1",
  "key22": "2sMBQ4GQZi3Pfp9LyyTeTnj6GtawCkk8qDWysUsW85fEzYtyvTQSMCLSdP31ctunBfnVU3QA1iWrsVxbwVyQNtUL",
  "key23": "4Qo5fAyzpn6ECM5byDhGoAJeNpgV37WgLxCaU3kRWznXgiEF7nDCkJhbRfiMQhabernAEnQ2g21kf2dyJhJofVVQ",
  "key24": "2aGUnEWqbc3PSvM7sdy5scpAPCjLBfhsLfZ2ja1UMYzbMwnzJW8SnMgGSDHYRDYmA4mLxa5HDaFX8sDBNp8hWXJ6",
  "key25": "3gtmain7PAKmMg76KhrSGSmiqefnbmQC8siK5wt25xjPk7kHmJeabvwC8Pom5NnFSz32281tEpBEAdiDS57LkAiG",
  "key26": "5zU5wGDpGtvQZbAofq5Rgyd8vgWwEMM9minv8AUQj8w7Fn6k5nfPHiXAxWk5HSu9vh6Qun4zbTC6uRQZMQjKwQk4",
  "key27": "28Cf6XkD4QEdSvbMWigBBmHqbnxHeeWQLFdL5pMgwf98K5B6tTupr4C3j8V5bwT7jcpKVf3bbAkRZztvEYJZfJmf",
  "key28": "3t3ZiZDKUJkHiu1zQpThLco87QwPrKFiSNKZZS6bqnSdW7RiAE78VZEd2f3pbCcv5MaZ6uo6fE8XJGYAGwkpFU1v"
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
