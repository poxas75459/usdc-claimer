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
    "2hHT6wuwEieWg45kvxk8PJqYHQHwU4o9fyz4N3M9gbZWtMT8WSBTgpmKjFCPNFco8ZhxTV2L4TZq7juDuoRBuWSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rWRhCLCGMNFVPGGW3nS3TKkWXc36ub67BQQJjoryiyqZcLkbTNa2Q3PheUuD3WhwgvzVuqK5WJdUP9bC21cvDsQ",
  "key1": "2xuEhjNJN3BqJTWzGsJmdRCMyReZMirR4xuHbjgtmDcAifPuiYuM66vDyuzveYcQ2c4AWKY3JsHtwXxKgrzpHmZk",
  "key2": "5rTHqaJFPYp4t3mytogYhVL2fSGLPZ5jYQwuHmCBAtRnbr7n8zKMq73NKLvVFVKDyHwn8biGotNCPC4yhrcmm1XY",
  "key3": "2ZEUQgcEgHDbTWHiMCRzxoGSAgMrPWSmsDYwmPShkLupEBt9SZFWAMsjdkFpoqW2Yry9fLUX6ZtRrNK9D2r7dmih",
  "key4": "mYTGrVX97cVb8k9WCsDwQX4mapYnLvG6tuqRGGKCShgsabX9ovzx1wVMoXFAvVHfmxQhFNsksS6QxkpK9w8xKYx",
  "key5": "3suuKqr9WRdZGMaackQARnFMjP4QHSBc5uVxxpQ76Pp9NvRyPmujEH9mNyctpfegxgdkMgpEF3TbFAFsg9fMdvmJ",
  "key6": "5VbAcpRhY1ms38UCud3KUGwh9NWQ7ewENemrUcemsvJ3jepwj8qEeMhkqjjC162BdYWh6DkgWk7W6LCtPgmMVHFL",
  "key7": "yMCuZxiRS1CsciESY8hdDLK2VywbGgcyEZZYCi1zTg6UcHhQkGnLjKbtd7Y91o9RPgeZ7UummWo2eSfWy9hUMTc",
  "key8": "4WTA3bn46vj7PnjFtPchSo58yLhwSKeBJSvpcY6v1HXZKxHWMi2cgu1uMievi9LuMZXfJtCAPv4vAYFLjLQyTA8r",
  "key9": "5FUiKNKkvEFN5kSgPH1qnBqLeHwMCbobpqTamztSk9F1Kmd7Nn8cueoyZDtezGxZWbrJkaY7WHVBT6fu7PqwEK47",
  "key10": "57w2UxZsErjZcBUx638wu9FA5gFZ9gEcHGt5ak7dCxBYpU2GjyV5zL4Z6wWM6xdkUipL4bs2Lj24i6TEzets6obJ",
  "key11": "2hD7hhJ6EZnqV2apCy5vSoMnVTb3UnnRcqe4vjRBtqGhybHWcvBqgRXY7oHc4EHd55R5dsUqxNApFeGANRtYFm78",
  "key12": "3JgVJoSEPgCnvsnP9G5Yjc5TFySdjYrTaw51SN7RwgBKAHbLsYtkME8q36Z6XmYiAkJLcxMGho5C8xdPhvvrera9",
  "key13": "34oa7fFD38xv37Skf3j6LYgAFGcreudyZGt1SRRb1LYevmcv5QJfDfRr6VboWnUPgeERRvN9TyzK6UsnTRVpRZSx",
  "key14": "5qXyfaMft3efnG9kZB8n9vFoiiFUkStR4i4Ps7JzgLXkEuyLfSUAmcbd3DL5CPD1nstYTXMBrW3QFTGinD9FMnCe",
  "key15": "cCEWqfTTu91Bueq3BCDVtb69Tv6CjP6LxKD7SSJE97VFtT8v7y3PkfMBtuqCoLrEmeWCiwokcjFQQQb6EoBavJn",
  "key16": "2BNQm3cEsaKAzSAnFHCSKmmW8jFEAabed7fQtyiBBF1TvNJ6MTg9S2HDwP4v2ErqKjWMZwWMnwxZBeKefhcUkfnL",
  "key17": "3HjYR9Vc1dJ9r9SCPmGTn1VD4qxBJsLMpX3XrEfmcJLRRvcmSUVYhXWebeJHY81PNyiD9PZWTXQRAdZDP1eR7uXk",
  "key18": "29tm54UU6P3bjEEsnTkUQnzGnCEu8radgNWpRuBxXXCKo22CUcD9egjXsXHSahn49u5dvCmz56qFYi4vqRjiuEn7",
  "key19": "2TmVMZ2wtXZ4UTYnfNcvqzK2vbRmGyEBVFjEcCBVXfHqaPoxffzyJnw6k8KMTTfEt6RhPufynjMkhu1WSjbLmjtH",
  "key20": "2j2sXqr22Q3bW2LxeH878m18CyFKgqk4cHAWC39mHTod21zueq3FhhkW5PnRYgnREHYUV3dhJQzo71DZoDzobcoQ",
  "key21": "5S7iJNap2aHzKVZGxKUJnVcwkMTYJrejg8rVRSzzppsrVktNyYK9iBZFFieYBfXZCG88XnNGAt9tHpaUm3HPCcub",
  "key22": "2wYVZR28fL7UAxYg8ZKU56LSzGBDntn8FCb6xS7KVcDegL5uurVER58YXTR16QEgJPtkvMpir2mWHoC4ir8Lq5YE",
  "key23": "2khscUmgiRqETmaPjFBpLVccpMExufnLWD49QaenJ2Y7H8QAFr6XipMcWkTWE3oLLcub78cQyTRHsjLyqSSh12em",
  "key24": "22Wm3h1qddAdDYQT7Qe2dkL2N4zxim2YZmBdjmtbLWjQbwjGj3hJaJT9Xseuog8aTqrDzuDgfeVMhv3MtQVyRrBb",
  "key25": "2dxvM1SMywaSuwhk8RvAEbbcskXf2nf1Zk9GfaecGBa8Zh3qtTxGFeRwRKkQtB7TZhoF3Ta1v9yG8xoYVMvGQ7p4",
  "key26": "WR76R75wSXjHvXfJYNSC3r9HVDKvaK9oNDzXzWmPCXUu9MjweTTK1PquY4V25j3BZVLURLJh5wT8FAtaLnm565T",
  "key27": "mFfV3WYHEW9mv3FoE7pNRRWFgDpM6ChG6U8ha61Z5WQ7pF4AQc6wDEKSTq8JSiz2VDZvSAXgnZN8R6NpuYDQ6YR"
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
