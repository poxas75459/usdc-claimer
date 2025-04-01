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
    "29iBvLz3jmdtn5EKZX58YNXakWRSjfeY8PotFJXEs77UVdmN9nxLUSkNPmuC4r2LzznkHc8hSn93hUe9CP9TsqNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42e9quACKCTeXsWirByzE87UJbB7AJ3jNQKunGeGh46zRam4ZvsvhYbHeu31zLekAydFEJSUrsTy38ArHTKcRpKb",
  "key1": "4H3ppWfdmczo1E9ShY5LP1WLJMcJReWZisKv9wUsp1gcNFHgcujtag1KoqpttTipKTWJnQkScHimTJ5puvfFQbFD",
  "key2": "4b7kTZfWL7UoftU8ysWgZ7Xxc9uitCBcg7myqZBd48WeVuC9rhVpA447AdtVQVTzMcEHhbttrDiX8wdzK16ofHn3",
  "key3": "2dqmzfZfgEKwgLoezCesg2fwq3ANQ4ttR6Zg2qiLoXtnKKzewoVEmmV23RmVo3j6FMeGmjRowsKeWfuB6uZutp3c",
  "key4": "2zhsTXquP1nmfN17ACGwN46aGg31SXGicKe3mLDP35uqPVAuhF6DHYQUDQXTf25UmXrnXtvWKDsJU3hMzyb1GTTi",
  "key5": "3EmCoFbvL8vS8JidbTPJ6jUHhRtnG71jrp1J4Q5XNJUmAFyK7ZfkXo8jmG3DWSuZyKAbDbCEe3PhrR4aNPDyT47c",
  "key6": "3FSfRv3J8D13wkdBCDFGUSaoALAm2SkwyiXijSUq9KJSrH1tGh8XsjKuaawH8LDi3PSgnt2YYcYPzY9s7rrSauaF",
  "key7": "5VpuaLD5SMrnS3719vZ4ndnyaExWsyVHJwLs3XjCrfzbcEGz6ExWe3CGcDaiaxMuma9MUiyFKcwELXJ7sFQktZNv",
  "key8": "4MjYQDDnctgib4mNYHscNVLgz7byJm6jrRQNziX8LuiFxATgxPN4UN91hbHEKEbQMHPbbvr9GK8HUHpNaD1AjdXy",
  "key9": "5zP4E3r8RHnpeXQsohmJhyh99HNz6wzpvURjxSnpw1dUMyBiwVvKpK5WwJoHrsT82cRE62VVZwxuYXd9FPywbYk8",
  "key10": "kzPB8KmhxwLH4hfCdRK28pLWYneWBDEiMMWHhHXPzXUMwE7LgRRWcqYcCotPyHtGNxMxsERHoCtcAvWrT6dErq1",
  "key11": "2xHC7mAhEHtSC7trtdUvN5yE3FAzSYAm7SYsyDNsTsW3UGz82JHrd3VVGNQTgNVAycovx1vSWrf4SaouxUCvDFHD",
  "key12": "5aDDj2SM7eoz29VzB18KoTiVckSiuU6v84wLzKf15iFS7CVk6zQUm6Wj1UpsFuk4R49XnbjPWDqTex5EmXgUHn45",
  "key13": "5Qg5ebadHSHEqyBqZ4eqXozSvq74EVDdKmXiuyphLQmZvjTgAMpc12Fu74C2Rw55Tz4DTyQzsbbLShucsuSs3nKz",
  "key14": "3ZEL137B9k6Nz3NLDeMTHysdPn9sM1DSY1DPx4CHGgjyQZD6fpCNwusbfiFQ6VpRFbi5Fc2mDA5tRnmPcHs8tuBw",
  "key15": "UJbLAZwCgb9Yg4fusB1ybBf24Km9b9APU11xsJ3X95QBUxnzF1Zg6fsYBgHGWWWYTNQU2m8xvwTsCxYQwBajyc3",
  "key16": "FPYoDqmsSW6fhvf8osf8vtKvUiZWiq1D2tVVAwneN1hHBGEWhTBPmZyQToF8sHqqhX5kRC78LBQzJWBMhpavRqe",
  "key17": "2nY8h9S9tCYoEqsrJtjRPteyogv41hqA9AZwWGxwHYu2qbNFBJg3BkA5uAuF8aXjvLbtmGyFaNyBA9eSQh61tBjo",
  "key18": "2e7wBzHoFuPmfby5GJ5vFHvMe5yigHnH9LLDe7wj1QnjSBSjPSb5DMnA4GSGDnWG6vLEAJUnVZpSZkgiq8kfMTbF",
  "key19": "5JpfDypJf9b5UrnYQ2Ztq6bC3ppDwLxwyEJrA2YMfp1ncNVe9ww2jZUL3JMR37UXNfswiHHA3iyVpUaJisLFESKU",
  "key20": "2KrsL7jmWENpZY1osKCaGz2vdDkBaMgV3agTdmawtLQsposcs2BBx5Qtwc2hTbNfWPAMnbd4CQZMuZQ7Gbhd1Njc",
  "key21": "4yLyYahaF89c3A5zb5p5fvVdiLjnwY68tWp9bXPCqyKvHX8wTwx6NRef4spH3ZxhHQeYTjSpxRbLgds9FWuTZGWK",
  "key22": "25bMpqrdPU55jywF8H8QU9kKPNtj4jBmu1qJHmJo4HyY8Kifh8V5rZiYL1Mfbc4rULYqTGBykqnv24o5y4M8PbkA",
  "key23": "3idHwvMTH6rNvzT84pEBjwtauw2jTEZeJm1PpYsbnrkwJS2QnUD46eyZWbBcAwUAXTZDkbQT6bZoAD8K8PSzmu3y",
  "key24": "3TLQq5o3e6A8uFeEcAprWiJZ29ugdXnTMUnZmVx8mR3jwsxFrGn94N2PUWs22jF8nCFY19Gy8bqv6zmpwHyUy5Pi",
  "key25": "36fNKV4NGq5HUb6Qd3T8bzcnxJcMd7mrjLXnhg4NMje5FxNCm7KbjVC6GXAHcYXJnbTx8X7S2v4ByP6p9T69duao"
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
