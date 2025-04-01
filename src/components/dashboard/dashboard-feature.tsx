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
    "4zqKtQYFVUmftdGkGp14FRhN3dspNZg1iPisRkqMC6YZWYZgbvu91RvDBhL3ZoSruKWdAuFLRNaR1pJCsiY6vvZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JdDGETUpteEh8gn4cD5DD9SdHJCUKwtdfmAraR23ogdBbCgfq41Qw7ZhzM2MAqnm3UztBHtRhdapFkezjjdVthv",
  "key1": "3adA5FCLjgdGRwBK1LsqFHsotQXZ5pNVfSQNp6msg8TdCbnYXX1S8sqAJk1B9zGRNLNQoj2kd2JfEUaRUtFsU744",
  "key2": "3RzmfPA9ueAmQcSfTyvqnGg78sqsF1Fv2MoZEoZ5EZExhAQgM42JhiMKffxhzZDzMbeUkcdV5ofVkQK8k6BiLcyt",
  "key3": "3dq8UR8dUM5gcUb2HiTP9uNYBVq9u4PyApRizJLXtMcN5miD18ACxnCt54BLaQmF1GAwAxuwzXJuhzcgdhdN1BsM",
  "key4": "5n8EY7DYXFTXWEHCTowAoffMBe3VUv5ktGSKxW7pru285Px8AhDdKta8Dei77R7tbX3pjzyjasg8wcVLi8YZQyiK",
  "key5": "5ZGRu8V5BYW2KPo4eMWMr9RPt8bXWZmSinVfZMiNbM8xoyveqycCCKxQ66HPrFSbRNvwwZxd58hRvstJryNwqmXG",
  "key6": "2CaxxP6DicrF7oP7F3zKLG87CJ2ETnvbY71Szb2SJ1RqoEqkEKLuGYQTxQdRmV2QmWE7rSUu5toBFhrHEam3LC2E",
  "key7": "f8QUgrHxXGi6seT8CYsmbpf2KXZyyJwWiCxxHVJYL9ixJVHHFfr7D9swjrYGJEykNaLji5tPdoNwLdS4iyZHiyr",
  "key8": "2H6eU3jBdBApxRVTkPPfBBWB45ZmWdMVpjj9LkHinmuZR4k1x5FEjGrNBdYrhzGCV5t8KynaifiDfATcFDeYUomS",
  "key9": "5Ly2tnovUeBTUfqy39duiBakLYHwLRqKWofB4dxX3FzU6QVaLyQa1uHJvN7PvWicEDmohBv877zsJdhh4sw6kFJM",
  "key10": "61wQanF5PpWYJp2RNE4u6xuSgYRt44wqn91RehrWngadUxwSEsxtqZ4Lb4rkJq8UaGpA4mr4nhyu2RxH5NBdCkFe",
  "key11": "5QWNRcxcLdS68UH9mFkkGtq13aUpqaZiFR6451h1hqVXnALFhsReEFPmnaqz7dk7Soiq9YWu57GwZuGZfBQexrzP",
  "key12": "5JKEFHkYkoWrqXYi6oQK1XiLAme3UcqUt6CtkkBFYcyrGU9BDdxzCHpVGb5zYgstWgYZ3w3hy2T4pUpcRhj1CuYb",
  "key13": "5vx6iUhmA1gBid4V6dGiDUTm3j2T2kzpQxhp5RCnstjrr9Dr7ULajvcGD5HSfhBGLBNYTCSydE7BLah7Ka5LGNUq",
  "key14": "4Cuejin9Ld1HPcEDzbAbz1A6v4BbsEYMc3rFs4JdCh4VxLMtF1pYSeBD77BVA1UdCyayW1SeGnZpew9qVhEkBYAR",
  "key15": "P15jRZaVpMpBPxvdnH8jYXe7QVVT5jM27LF4sayK15a9MhYsAF6AVvHyLt2eUxpNuxpWAG6vKRDtKKqXypokMsg",
  "key16": "2CpStdfdeMrp58zKLoHbnc6oBkWYpH3pRAEjMekba3dVfDBhRMw4VB9NHicukofKBKsoFHz2k84faL3xb1wZbCzU",
  "key17": "4TyZzrW8emDYG454N6jmQVXuWUnUgYEuki2uaLdy4JRBHWRBZrERJ2PNxoJGUFC3u53z3tGQBbq8oFw1sZhwGB7P",
  "key18": "4EWPsWoeZpSFwPq2zHTvfPad4AGVqDex3YHMd8yxV1R39usYbQpWNxQ7BUAk1pNj4CqpHSHnDiLKx73dzUG29397",
  "key19": "4JJXRJt9cBM14vTjeQSPUstF1dD54SgyzrDqhb51siBxCwEmitqTLrqvrqJPCLtjdzfE27huGtXMBnw1B3hner3N",
  "key20": "28B2UGsGxCZs9EAXVrbrLftzLpBsDzHVmfXVGCViVaXPEPbsSZF3JBkD9tb78Wba2owAgbXpaDwbgoSsp4N7kcQA",
  "key21": "4Hr6EeyLspUmNKBhaYjip9Qg9RcF7nbxrpoBAW5e6nVEexhKt4utGYcXRv3gA1LSiaAGwBnEYFZ3EM5198YAEqsJ",
  "key22": "5N5hCiABc4gqaURWcTc9ddhEuVFYTe7zUAc2tCPhTJJw9STfEvmg1M8A1XKsB9eMtqmEaY8ax7sdyaa24Db2ozZC",
  "key23": "4th2DjfmkJE6uNTQNMpY6RSZ98tzh8HguJopfjBtizER1BXy4pEW6EttxtKdTpRLffduPn3gSGns2Dkgq6AnGy3i",
  "key24": "5rZ7oqygFFuAc2LffeiVAjVAdRqqiBwMD2BMNSUsTgYMbtX1bCbfLn7Q9HwaYokWnwdbCoz2qp7U52A3Vn4bPnBC",
  "key25": "2zsWshU8PdMPfzJ2qRjeeuP2HPDe5WK2ev2deRrC4UD7BuS46X6kKD4YwUtthNcp6dzn8u15RMRFTVMZ25vwhyt8"
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
