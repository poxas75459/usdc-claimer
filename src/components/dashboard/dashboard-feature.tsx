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
    "4gPR6rJ7SpricRNvnGgRCmUWFQKbZTpsWzs3tEQi1WfYJxay1jHF6gC3DrGcuEe4Wp5egEsbhQ3fT7JAo45sZJPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45jxzf3C8xHZN1SaLeyqNuXKdNwr3UYoGGnKPR34SkgDWqWJ6ANFQSV9AFja8CAhdg7bUXh35TgbNAV9xNv4kGm",
  "key1": "5cR6EDP9pg3aXFKHqPt5gBVitw4QDoiNurj39KJp3kUizsjdWAdSHpTMj7gceWGeDEooUSV7gSchCBRnALr28eZv",
  "key2": "2x9xNjCfvAPZAYTdobh1WVFyZeC1AF7rZ8tFNBPiyN5NRDa8rwZ4MFLjMRLeXCueZsoGSSYAbZCeL28Nt5dEkinJ",
  "key3": "5m9FFqFjYXpm9JoQCsKpaAKyr3NQ1hVm4yofP3woNNRVffb1hF1LVqnJEo4BKB3KTkfkoBbfzQEn46o5WgsT9xwM",
  "key4": "4mrpsvXH79BMTcC61ent4vWi46Lr9sMLbdoeUHvP6vDcT2njHVoJagBJ2SpWAY1nCSAwtHM8QjMrV7RmMSSKa7Xt",
  "key5": "4TFfRdLzgJcbherrLE1ygawXMzCk1j5PcTNrffUPdmohsKztK7DrFR46kvQThjeYiM9YXzergiQFMcfkAg8VJ9Mu",
  "key6": "2tipjoBnbQdW9ay3mHVLGC4z8SWs83sRFFe7xZEcpzGNvXQiB7sjSopFY7Ye2jCnQYDot2zWUuPTrdWMKw2UMKov",
  "key7": "62kcXE3Hc7yFPCaUDipfPLytf3SkH9vpKP2G2JowqBnZCqYsaf4tDMZvxJR9qpcSbEHnojvFBjqSuddyKPiyT3gs",
  "key8": "59QB8H77YWx3q9eF4MKYm8X7ZsX52FfdoiZEyfFKVwnpepy58eYKrpHsixHdDLwEkfWr9sDUBwTCQKjYJ9FAc1XN",
  "key9": "2w8eHo8uXPaWdpeZUcDeHznTEyBEC25UZQp67KgVvS9cYeqqJdYMUc7aBqnAV2zriXwyyck3FiycMFf2sUigT5kK",
  "key10": "uYcyHwzwNuhXJkrngnMoTvP4yHPBJ5HDEB2HA1sc9hZTFhJxSwrXn5JVKVFdvyrakgtJTY3QX6BviUcM7ipBs2W",
  "key11": "YfPP33bfGpk1PWXJs2kv4n8eKnHjc4DRNfL7TB3iJwCVg6T5QUb4dwYxCgkd8wJBA9boGZHo8Bk2me9dQwTZsZE",
  "key12": "32EqbAfpuf5W36ERZ8KdVueQNktLqJwWgq9jMwezTVaHpK8KKoTD9Zi2QepbpYY78N5rbZaNj4xmNptiKq2f4rd6",
  "key13": "5WKVeirm5yGVhLNq4S6qZTnNLrLi2445jhXT9WA4QPpn1Wu2fPcoBuZ3fL8gd7XV8yuxukdZVDGZEGoJwKoUn8ec",
  "key14": "2oxxhFQx2Rc25cRkTVvGjJdUf2p98EKg99jiU4TouWNaa6vBB2GBKZGzKvFiPywLhYn9zXBCR8GV9wYGdreTK8qk",
  "key15": "4wwiASiGnixPSmetFn8zX3CXdDXapBrUGF1U1Gge5z5bgipNMQtttvN3qBbJGNA7upm6L3Wg32qjwJQj1A4VbYJG",
  "key16": "4hmSuKxVr2uhx7d2rpL3HKPizNssNMSyjuFKq5tfWw4HhbVAxnncUcQ61Gy272apfohW5x7x8HYZbNUU93ep5Wk1",
  "key17": "P1JrVtLtTz4HVr81EQof1aWUBD25pmGGJQY5tGZgy8SEDdCgJ7TXHnSKnCJjZwvotrQcK5xYHB1KKG1DSbLmLcP",
  "key18": "5BK3kDPB1Ay3UTtdHKYAbZbZJfvSwiTG6xZ2VN6KPAkMLZhYgPMYL2XbBWEvCN3CUAQHXTTgwRSWqNXYbjELJ8TX",
  "key19": "3PcfQw5wBW2bqW3AxL3QoSomXviUkshvG3kd5Y9EgFpCL4eTDBbSCAeYWdZnZjwSqmy5A72iLmv3JJWuG83uZQLH",
  "key20": "5m67BS4VD3NNDxsSsXXCeWZ1qXnZAjhdRoHnKvUMutFBHjVxHCTrPHPWa2rvxuxZrybcV3GVTD1vhbzQTzpxZorU",
  "key21": "21GnrEhbKaELuRRffNDLJkncKDGNivY2soTuWm1MQtsNGgxJ9zaktFXYUxchASMhUPUCAYkgdnsy8WYGUagiPwkN",
  "key22": "2ytRi6mbMYRicH2oSsovGXGvxY1N9ydTWZRJfwKuwwvoj9QfMksfX8QQnSu76tG9YpQJS51wZzkhNjvsFhHNXt1W",
  "key23": "52fx5QzK7tSRkEnwaP1Dnjcs6mS7FTELMM7ocwnLRbzp5pPQfexSrw47NdD17B6Qb87hLfBAb9UDbimwA4H9HMr9",
  "key24": "5ntZeMdouBNovYXdbiXPXRUtcfKtLrzCbLBMVfcVF7BCqE4TCgu23fUEEf6KomXPh4iv5rJ35UkgPg4TQ7vhpkqU"
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
