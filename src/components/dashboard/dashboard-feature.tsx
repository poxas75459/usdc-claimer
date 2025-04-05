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
    "4nMu2ppMYMurTYBpVz9kV5enKjmUrG5oGnvARsMNza9obp8WrRioSZKzEWFP9Z1iWPL3m73b9DKtzZvdrSjLn4Gd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Ahd8JsLEVHPWXiEuaWc6KLxsCGSdyFKnMahCGQA8uufpUixjyuCYngcuH8gMoJYR6h4BxyXhmk1Mo8steFntew",
  "key1": "2Zj2ZhFTm6rDvSShGcgpRV58sccFmbSV2ocZvCeUBb6Mf1XfYuXp3zC4SSxM7Sc5RLZAZJcbziPwgTaoDhZf9Cum",
  "key2": "2RNRUMatEdgWDwvt4zdmneGWn2bD6dTy3gi5HgrQZstGT4DwHockBWZKeBWBajgGtR55wHoY1upgsCP8tw5VV9gt",
  "key3": "4AHkLtiwGCDiXyzMDYRWizv4U9MhrJa5esnaR2CGPcRGby2djW1Ej4Jnq3gytRxP7J1DcGshihRZXFEmzHFsZJem",
  "key4": "287dnJUbciWH2qw4o3HiZX5TACteYRi1SiCoGdxsgzKsQY1rqbxQZBz9EPGPX8b4Jv5pZXVw67beiq9wirGSLYSY",
  "key5": "bNqn1vAQPE8MbGnJV1v63z8j8Wkj2MdwN8Zr8kJhpGuVUNDQLDCK7qCHfFbpmtAxFYe3mXLS49FpSZBuKZWbEsQ",
  "key6": "5deqzmneMj9pzDByqgrnBEJm6Gtb8gfKzCbtFJW9AQFEZTQi4amqMneyJiW8KHnjubi1mtL4jNfZ5chEWA3rSfZs",
  "key7": "5bAfTv8yStW8h33nCWnKkWHRCfAwo7LFgkZ9U5be3Yw3qFwkekDxJdJMNf1esBhPUJU1MXPNiK7Kw5nJkV86PKnN",
  "key8": "3sRDavPgCV3BCEpYh859XV33oTcEoRVd759qD3A2sjFPRq6sSViK4hbdLSuxtDwwcUnAXEy7po8ew9Mxrqbiyzw4",
  "key9": "417JYXySjxKczRRxnnpwcEyNr3VPCYnGFPwvDSBNLWArqxGv5HgG7ttQxoKfAuG8qE8L5Fya2CbPXWUJi4x7K6mU",
  "key10": "2yWsBU7VVKxYQiZrUp1oLsfgXDEeFJ8ZkZnK1zes2w3YchS968wi2SvJ9kUG6vHKzFpU76fBNvPEoYQZbZ8igXL7",
  "key11": "4feNw5ZX6V53tecNhsGKcP8zntJg4WAaqgoFjR4gXu2HdmiujJf6AA2QUQVCy93ZSHhqJTCW2xLgZonXGmWj8Hic",
  "key12": "2T6C2dk95CBeeUzMxZaaons8D5JGWyhiMaJ6FfFBexqkd2fKb9cxvaP8yYZbv2d8TfCASLqidSehSYU7cbeX2uVB",
  "key13": "oAHarBLdu42MqfABhqJpUyQPUgQ6GJrGEYYthKMdeHuCaKYv5BUPQkBqqkLVsVgBfJa8MdES6b8GetW3MZAiPRt",
  "key14": "2ZrotmTegpmwUsKLPJcasWfAxHNJzV2NffMVCdYdS9Ysb3c2iGJzPVwyJEviNx9BqiV2aQWgEPQmK3HAi3M3EX9d",
  "key15": "YVNschjMbs2aUifY4zGwNiRpWhsd87WmzJG4zpUWR6nNZW7gtgPy3e8gFzZLD1RfBaywQq36BLpYq6hUuraqxbo",
  "key16": "3y5MoGeBVaY1bLoe45DA8eK3ci8y5MXVAk6zGBbwzytMg3sZNAxofWgUMdtNM58LfdeTCXgvQe2AoDreeEqrCocf",
  "key17": "TrXZaE6YM8wZ1efpmqMVLYgz8C8vz1f5M548vUArCk4aVAYhW14qWB5K1YARvuJNjRRuYe791YDYSjcHtfSSDwP",
  "key18": "2Ybe3SP2hemxGRDGeBVWGiZd2Fh4tr1Bi7FiVB3G1ux9wCzPyVd2AcJPkwrpQNKTZBbryvFmypJZHgJRATzidYeQ",
  "key19": "bGxgE9THer7jPxrkkFy5nJU6vVajgsTK1dN6kEJqgALEmDnCQJm7KGkiNLbN5U8dfEerszRTum4NsyToyxxbKE2",
  "key20": "hex3tx6unwDWnwDyivAWuiPNiiMvWpxGwoAmxuXwTQkY4cR1DiSXxuFsfThSHco3xWnoKpGAjBFe3uLsP3QLrsc",
  "key21": "2JdH2HvWRoCCcU2Ue2DUuJsPE5PFQusFt2CzRS5Fq7yTSABL1Tmrq6JTiTJANzJvs4hnSv3WXz4ZeS8LmBwNsDy2",
  "key22": "4TtJqfmavLMJuQjqrD9kzD14Aemf6VBDWQQfgEetFcCZzpWuBFjpq31NJep13Y4b6S9ut7BkcBWKDepXRqV7zjGQ",
  "key23": "5AHRv3W85kWa5zDaLyxwZVhUYBoRgnLLfNU6ovQ9L29fwuRvcYP7Jzj3QS1XkW5ngCLzyQkZNnMhPu449XgBkxgV",
  "key24": "4ANHxCbjDQ6rBaT6Dio2qttd5dMWV51aLwDJeF2BPE1gWqaxE7hYFqYxJstxp79h4k9hY7FQTWkHFNXNpLUScYGF",
  "key25": "5GN5DPQaP7GpgHLL7t7331mQsQuM67o7FLn4Dhn3UwSieurEQtxGUHzXdZZiRjpXCfBs4oUrgfAvpAsPWeqnR4bK"
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
