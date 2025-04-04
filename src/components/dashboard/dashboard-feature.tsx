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
    "5p9EMkxEfpcfnYM8dxg3a5hLeNwrUSKmtKRb9yY8YVnhcJoAy4tw84MZsBsXxCEF18iY9xh8owDgRwGzYuYGkX2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPh6MdvJ1SL7PHM7PaX1KyNA8KbX1MV9bpvsoRfoDe84d2vxdydAvRK8kajarJoR1tuTor685UyvubRnNB6ws96",
  "key1": "37bF328pcLwLLqFv3xzoW5KbEh2CkagctncEWven9kkTbnnJ9iUh4524ikvUhDLPBhesVLRSc5fBwKM98FvRAVui",
  "key2": "58quLA8tZXjPRGzabSvDJXtAVVmUwY92joKVTehhJPKDDgVB4AxdKXHZwMAENEy16ZACvAJJ3CK4hXqtcKYZZsTg",
  "key3": "4hAvZHG9r3Ntkk2ZCyG2jZnDTFQ1N5foyPZUTmpvm3RjJ4Uo7X7k2m4jjvrRCzP39jX4E7RydzBFd9WKiTuHiruh",
  "key4": "dnaMV6juUME9RPRH8Pg7cUgTvuBRYXq2VApsgY1e8zHVbXbvPvvZQkMAY2UACNcnubpG6YXsthciRQrmTXPRZxA",
  "key5": "5B7hWzkSLNPVvq5PwdRvWsu2WEj1uciZV3DGK7gnJAfrtRwPHQ7UVgCNioo7MZJPstMnhbRZ47ZkhDH1UC5vLMw8",
  "key6": "2b2dyvFiMpV13apm24JxFvn7pMAfsSjMUiPrGfTmr13PMVp8BxhoJ57Ydtetyrodr9DFDW8TL9NLsnwWKGJpaWii",
  "key7": "5XcZXZ5j5fyG1kX7ktqDFMvzd7r4BruDjxJWQaHeLwTiwVkyj2Z2Fqtsf8veCtqUf5GFwgznbyppbSh86eQTx83N",
  "key8": "2eHT1v95mKV5WG2Z8TzVqonQPSZ38GjDWXbMZQ49D6Dov76skCjWohySyQ65cc9E2dwvLSq1GMQX1p8ug9FYzFCf",
  "key9": "54L5VpAj233MXfpjxMVprm8vwyjtrNiRo2CxEkcJCo1emp9aByrvrhHd67GoVLyrTvssxhepXwXeHm6S4vGQj3To",
  "key10": "36rupwatNezLfWm3kYJgbXUHCwXZrw5JqztXEHXPo33yBVzGyyCovryncKeqWnAiBWcRKgnLWscEYc37UPxLG3zb",
  "key11": "4igy6mDnJR2kERtb8xU4eRD6vt1CQ4brvTSyjzeFL4tKBxH6qQC8kbyrpLbkjC9djWYbyBruxm2EyHFXg37pSmQw",
  "key12": "4BYFh6DVxTcvaeHUVQkhekCxqCDSPm9cfinb9ymWFu1PBmDFV75v1Xj6zGkRrjjK7ntq4AAvrChxg1wkjnk42yqg",
  "key13": "56BFVj1xgnFg2cBrTnLbMAHjdBVKKtro5uuUFv85a8bZXBtWTbyJbmyVcQ92BhyrQ7Yj6FuD34cNy2nK6db5wggf",
  "key14": "2cFGM59UUwYLWuXUJikA3RjyTHTfHVvsrqX3bX5Ko5ME1bNMu2FEzL7QvU7S7eDfiRSPGaoZ2tqFhCvX5pQAKej9",
  "key15": "3XHzS1LFqEc77mgyFTTKvfLkwgzXVF2riP57djPFBrsQrfFVrYY6XYgRJyCpupmFq1BpVngotVRk6w8ZWBnHpDuV",
  "key16": "2AhUfXQrSo3GocjE1L17SpStwcp8evdtJU4NEeMAh4neDaJPPuov2bWDREVejfxu5gYdg4KU27XzAQDLakyWc3bG",
  "key17": "4ioMRGnS5NVmhKBxpsewLbQg1pUqzMTiAUF5tnEafi7oXNhcZYMAANTEcw7Y2XjmKMLgo3X6kQoZS5zfe2NW3jMo",
  "key18": "4ZNKcjEXLLxAB9xXf36ZdGXCRLDLyzmuxcMdLxRtWczp5N9yjqrKyyWgucoRhPtPKhTfAktz59sLPR5SyMDdj2sn",
  "key19": "3xCfmBy18k9Xj9C1c2R8RkNmTSJ5YdHwWScUntkA8DPSmqXBtyin17g184yQ9Ync6g8qCiHsTy34RM8thhHyrnof",
  "key20": "2fNSMdF9NTKsr8WVQtzE5Ud48iWo63c393t32qRi82GbhHu1WA6jGqCXBSs1kJgeKYAQwmRzKs1wwBMyKH2UxbYz",
  "key21": "3Nj6FaaFG35HRZBmAguMZzhmeCRirz3dcSRb4RAa8hjuoFTS5nRZcZ9B6ShWqZRJnAtoSc91n8MsNq4bnLmYLzrD",
  "key22": "4wmJGwBvhwNXkCyBXRTxvC27fcMRTycMe317gxUu5jie3CqMqkSJSK2A6tMtzWT4pLh23YMkaPT6z8HDYGrcovwN",
  "key23": "3pDMfW7jWEGivYdyCmW18RYV8MVCYGk2zoayW9bYTRyYu2PBbetAs6LVMu8qNmKQfzM16DR2QNrwsGKwFZEV2DzA",
  "key24": "3R3uo8SYJx2o3EyD4QTthvGMCnHDLi4XCdrq7Gu2Wfx26YmLooDpiSNRh3TBX6WZ4csntZ87qqQLmAocwhtbLYV1",
  "key25": "5GM1C91NxC5H5fi7DMQ9p1Wfxg6qQAQVMMVyGdzQYASjtgtvWBxi1Z7JhyV7ULLyZyYz2oDXimcKkfVnjCkrUk8d",
  "key26": "59QAFPJzHqgpq4kR7CsuJk432sW7Z6HsnRkDUz548cwFvxMDjmmZENBKp4Je7BY2BxZXup35ononp4AbX3JEQnqG"
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
