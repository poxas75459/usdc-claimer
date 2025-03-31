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
    "5NbwFjNvs146LtKP5pmNhjgkjLc4EZrTLbNQbofv85AknPoYePMLYc7u84p5ZmvM6dE1B2WT3CHA3ZVAzwBpM5gK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eYeBnDDTVZzpXGh8vRAuPRANUdryjjfrvPwecDL8ZicXW5TntqMykhQ8LT9FvwoYQsUnWuTDUB5cYxg8Rh2BfkT",
  "key1": "3z3j7VBxkMXwVG2ahcVLUgxV862n3YK336FuUEe67p4HDeEJGgWVhzWMi9iSJnLi5whHD6e2cne4cbiHriBWxbHE",
  "key2": "2e8UDJDTRGYCC6u1g4aTuSkyHhYuf7XfTobg7tR4eXGp58xxFLegykteyNru8RSHbZKVnC3cdeZJC4tjC18XEKvY",
  "key3": "2bN3AqvtH5weWggJEbDs95YLqVY97Wrkpv8kWtZf3kyAqirdq1t3yUk5yscYNrvjz6CnVWZAP8wchzrWKw7woGoT",
  "key4": "5yr5HnWQFgE7uo2CGkLocn7MQH4ZVY74upQdQk39NU5KVw3xJ5hZf3xgMRYwL3QLdpYwQtjNLE5G4hKdFwUtKsaf",
  "key5": "647eKhjTRP8xzBrMWKAmepPE8Jcp4A7PB5FcHznf5YTHk2mNPKsFRhBps6L9AoibUV8v5DnNxPX1mm6gg9i7Vkk6",
  "key6": "2hdqASyZkfHqEWom4kSZkZk9pSV63qxiEj5PNQBykFjHQAFrs7o61bdiGoWTp5JPnqrego4nSxGxCWrWYUH58qGy",
  "key7": "4CLnEfvaNo2y7vosbhkXJX59Fn5VSZX17BzgZkg9Eu1oKV2HcJtgrMudGa9Ym512NcodixCG3UWQFycb4Fxiqmhc",
  "key8": "2jMg9M21JTywehBbt3MSn1RCHVzCuCfxDn5BJjQLyNUoA8yZXaTPpxGquhqAVDGg5TEaHtRFdtGUnPJC8UZka2ta",
  "key9": "596x6KBK8AKXZVKTjN5SZix9kJs16ALhHFANvadiDKZMXzHZh3sP6kkWLrtK3DEigQ9kG6oQjckbVgp1ujXbXZT5",
  "key10": "5h7R2CiGVW3Pfh4ddFNEjuibBQ12pmjskNFnAqKYNPLF2WuDFWwZiZwo9vweKXrDRfS3mVeGq1mcavdU2yEbTRLg",
  "key11": "22bNsfdnmgsoC5nLVrsEJbGHuy2HsqVxqpzXHgBmCnQNJwzVnajfuE9DhXsroL4N1GKR2pLzHz7dqLYHnZi3XPCa",
  "key12": "2hPshE9bsEMnFgx9uzG8qqWnwMVJkeRGDSAHbzq3VMqrxoNLdgapswWWzx1EQLDTmTEo5baeyNZAt84J5ANoxExf",
  "key13": "5diTxJH58CYt9WoyqRySZohLK8V3oDzDJwWbFYNmSLcVu8dTdPMeqsSxs2UL1wNMKucDSxNoFi1PAHzqmviMUPBt",
  "key14": "4CanidH6mxhmY4drUt2tWvei7zqkX5CXJSvTndXdy4WnWRup81ngsTKLw32jzLA6B2rESG7XU45NvGntwzzg8nHX",
  "key15": "2jG6evfRKzm9S5DbKWBBRT65zG2peG8gdvaGZTSKkQgrGgGcMXhdSrqt3N2asAQmxWPda5WtntFJCC1ie98MwRPV",
  "key16": "2cnekvEZSXWApeXxgvMe1U6ND4vYR8Nsz43Q6Qd3hUD1YArzMFDpzqFQW7A5ChCqHD7sxzJ6Bp18TK8CCvLNTu9J",
  "key17": "2A7EAPPwptgP2545WNa1comJKHxafBRQfFzPCeFvuiPf5t8gQHdu5gBmcagfdWnsWSUD42x1bgB8AEsND4UXRMcb",
  "key18": "48rQBs1j7vcdiHudZNEMxCA6jqdRJycGtrPdhdwsuMb1VS82DxMbCQXn9w1rkuP97UAYYwvP5FEx2ZahBAWAYdmU",
  "key19": "4hHxU55P9X2cUXG5KMAmTCfMziVBnmXpu2JHv1YVEJMgWsfbSv3fxyoJbESVjoTqvBe59vEE3mMxfzraymu1Z1hh",
  "key20": "5QgMCDoY26RW7wQYyujMhfvvAk8rUhn2XzXzPCH3zL4522YbFDQENrL4VAfiAZMtWbrvPMQZgjpMfddbuPAtDF5Q",
  "key21": "3httPpWevnAvaGJrEYm1D3oqTMhF2FgfvSR5WtCdwcohndDKym4eLDBX3QX6pdr9wUG5ynZuvCWbSPy4iMua96Zg",
  "key22": "4YswJfSCzVTyptFgtEYzuxrEW4Za8s2fGusm8YQv1ZkuMxrAFa5dA3wDkcZAt7XX676g9LZV4h35kxwjhgp8KpM4",
  "key23": "3cKwUVAxehodY1Ahr3TFUgbiboFWnzyVxs5xceys8egcrF9r9oWqmyKsjQNXG3MRE1xLo1NiK9Ud2LbGWCtujHFC",
  "key24": "AUE9tvBMu5iDFHNEju2L176Ks8JRfSszHdb6sApp45VEsPbSaR4kRuoV64kSKP8FBiU1YRQ5QbNYPJu9pUgEggW"
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
