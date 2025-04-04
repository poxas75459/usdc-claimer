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
    "3RSJx14nmkBMnWzs1n3zJ6ozGTvQEeyksJqqteBhEVtHVGDnMbiDqgcvjzyjZmGgJ9sRGeBcGeZfqZ7X4hHRxRjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ieVvEVYXx8SScvbq7A744LLBjYpEht6jpjTXGEeUsb5TytfnaTiELLY8xjT2Aowx85pXTadqP5TMSgpioWu2Nyo",
  "key1": "5RSAAnRjKoJoNDgtrFXzDi6DcUbTMK5PGJgr5tb1wFAaECKfXbtXuGP1Z6Z5uitWLJotAw6gxu1Q6qZYT6pomX6P",
  "key2": "4cw1hop27t5AXUVbS4YQgeJyrgv88oAJjSdBr7F177R2DZJ4r4HDdTh8yeWnNcS4DwfyNkbxHT7aUhFkqLfVi2b2",
  "key3": "2JdLvKkQXpxaMhbfyyTJ1K1vZYMoxPALtVLbf84eZA7AGmZnquaV58Yd5fYT1WHCfgFNLqamxk7xTWBCyLgUVT5b",
  "key4": "3rZAoyYZQHWVHUQVbzaoVdFhV7KdFcxqgEYekgpoyDXAwwxT2Faz1Y7fV2EfuEmA2FfKfrCtg9bBCNDzeTdxTVub",
  "key5": "2tUVaWovfvGnLa2F371caN42WnEf7599JjxHtJX4wiubweRYMNrVfEtCDzcx9u9uvwJ2RjmEhvuMvXj8Te9KTe9R",
  "key6": "26BcF3276ngGcYuQSywM3TxgedJvR5bKA4PX348epJHLpFQg9FFfmmLwEkoMtE7R4tuf2JVvVvGfMbW5J9VdqiwR",
  "key7": "4f3soVrcrEMNohVr4gHV69gbHx6t9sxDP6iPVmKTqj8EwBNWDPqBH51dDCMiSEbaSZauZK3fKTzPyK6Soue6C1MM",
  "key8": "2phrXW8kBXizG3y6bSKXPzjG6jg1M3rNBQkcT4pdBs3RDcP4ysAXu5cWEo2H5ahLYtXGntavBJe6HmaPLArVTFrg",
  "key9": "Ae7k9h5Vn9LFbrt4UgYwJoPPAc9WneruwCmUXS89xTFRmjnmky7sFKgc3Ya9kPQiPb4jDrNSiKvDimvC4MC7NjV",
  "key10": "3AL7DimjBNUEpL7mMgCJNwQBZ4ikHbJSFjwLrCEBudC1kWKHVtbY2km3pR8nTSLsbdTHPc1NULzeKgfCicCt9Abu",
  "key11": "4ENaPwjHzNy5gsekaDy8iB2J2Pzzj8TGKjBwWszyzdDobYG7BbsTEDjTb5Xn3PSoPKRvxahyyCqp9HdNVnri4UQQ",
  "key12": "4UJCeWmqx15ZHs9qTPuoU7t3FJZnL7w8fEvdoA8M75HKEN3sxAtUvuo2dq2XMFnKzz35GSMVkX9M3bsNRWj1DGvM",
  "key13": "4EvD4qQvWpV7TvCzo2gnuBUhCfaYa58DXn33XjmMCbiw6irXuDH5J3topGEGgSz3g4oNcuuAi7vwzYczRGCgCWn3",
  "key14": "61GSXKJc3EwfK5FruD2AXvJkMGDY9c1Dux2XkWyv2GxiUgHBx259NypAkou9JL4HWuaygwnUgUmVWy4sF3MhmQFo",
  "key15": "AFrFvHCYnLogAFyVrXYGoGMH6uNahUVgX7kpwR28z5sEPvFwSKGYZwHZHGhm6WmqsvtBpryESSrrJVvh56q9YXc",
  "key16": "3eLnHUuk4WbMhJEBt1QRXpTTQyek8zt4xx5MChEgBbNjRRCf5ipj6U5ka2FVtvjwzNqTXka4C4mknBzXZtvjZGG3",
  "key17": "49Pwiyva32nj8hHdbKdfwDYW6GM6unNF9m3bMCiGHuDKugMixRsSRykCMkmHEBJbCYAdNs1aCmUN6AUz5nuqNztf",
  "key18": "54HAX41doJbgGemKJANzxWerwPHayTgfSTvqqHopskWvqDV5LvJtpYq2dgd3gwzyWrG7qSRrksEGvLXnAwes6Vna",
  "key19": "5kzjiV23rkRhYDdtguQa171reFYZgKEg4AfSQHiMefYi3MHjL3fCaPP4KwcHJuibUdc5FrpidfCaesbANprcPyBT",
  "key20": "4AbTxxn99jPemAWrjt2qy7DPfEMHpACzBynMfswpFFqRmcfV5vqCAajgAuBUXWe7Fdqe1ohcnkf5VqxxsakCshoD",
  "key21": "7xVwQ8buFyAurFfuXjFB2pKVCr4jFRaZm6nkQBYAFEMJjc5HQSXnS8HzhdabD56MPLMANbkEHBakexkQBGRs31b",
  "key22": "3rm2FgGLHt7xmsBNesJWZqnmZkqbCB8KebsupvxEiHXH12RYMTygfaGhqT27DWLCiJEBFwd7DLyRgxTqR5cLfH2w",
  "key23": "ENpGXYXfPJvJ7VwZf75w8LU5qD6aqZ8whnhW2aJC67EydN4AJGSpju218PkVew35kEJTFP2X52WayQiwNDiam7H",
  "key24": "2evtqEQ7pMP48ySjo7CYbyoVAz5oC2shkG1ZjMiqQe9q2MaazFymPTSsKpXGL2fsNQCyC8qgqJzF9sZeWCLc6HAE",
  "key25": "2nSW3nCjy2SzUwz5WzjEFL3mLqgj8Z3tNXfADwjgpLMXu82JaBJ51NQxoCLzUYamqFWqBRgQ2WDJA2qPohoiXuvi",
  "key26": "3p2bNKMP4P3hQH274GhUES1DACcDUq9MiVeAt61zYb7TYSsbQTNuXYc3CLwUo783xxVftDiBwefrduNq9vXtwR7t",
  "key27": "4qbCzZkD1c1PnhJFhbWBwVM9cRJdKcfTaH9RjXVHVWMnkQpSRaeto51gN1tTN1on3Jv2tzbzt3zi2tnEKTeDqc9v",
  "key28": "4V9jfnHPsB8HHJTf8gquNcq7YxCzJBj43iSgHgTtHR27yp7D4NdKmznUs2LsgZmhuEy695Mi54QWUYVPF4T8NVxo"
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
