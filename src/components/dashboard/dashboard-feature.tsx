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
    "5bWV3UN7HbHwBWa2yLXvns6NSQJ9jXwWvW5qDtFE9akUodndV8nZ87iSkT9Ga8csH1mAkBgoz8GJ8wHH1Gug1n8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fT1x1bkJyw1FoP3U6hHBSWEQrGUYS9bP3UsBJQ1t8H135h3d7bRLK8BMpRj3P7CAwU8Lmeu8ZD1i5TVAfNe23jf",
  "key1": "5zmMUmQZdBLLa7t7ZMDkSvuhvN1kgEWkHwW8koxgBQz61aR1eXeTcyiRJ1Q9NkoxYAAt6p9i4eEcGNoZExA2FVoG",
  "key2": "4BdiMucnRzPrqsypojxFEmnVJ5dGfJhxGswMBuGE6BdsgfTqhgGHBGjj4DtY6oVg1f3MgcBgSekfucCp4FM4cy1k",
  "key3": "2i5RJMzdojtd2aAYqzujJi8F3o3KpR48KdCWoPwzwxqHJNd5LBRchdzhLWTgRzkpsPbYQPxfygc9NT2BpavGErh7",
  "key4": "59q7n5tMqUz4PWsURuwQhFE5eR3t7px77PKBLhN9d9rFZj9EpjL9MuPyH3FTaft9cxYJvWNKHVrGfEiXSfaTkY2w",
  "key5": "3aeCevZg9aZ5DLMEYsFptdaKwtYuzPSDooWz6nS8YFF1mHW6KapdV5KRQ1LF7xu5fbg3cqedzwfuweVFrcKtT5QZ",
  "key6": "4rsg9ccCsz5jLBmMsa4qD2RWdVhYxEvrMSmUWioBDf6EWB693NWbgZWNLfZV46LUEMgNtE8Ah8xPK5MrUHN6KZSe",
  "key7": "4BLyuDhCBZuXLgP7RzyTnkvwyAqRZK5E8tKMFr6uZAsC4ni43RDz7gNr3txX2qWPsaroQ8wh6kjcLbHD7oW5xCiP",
  "key8": "kYYHgkya6eqTy1z82t78ZVHr9hZ8t4Nsqwnvc1xYBUQdvWfKPdBk6QFHgHHg6AHjW5bH7WgiCUMgbQFwFmaxpXL",
  "key9": "5WME2oAPV7zv8gzHoDGkRc23cNBaqFRZme6jsrHdDW29k7QaXoCsAE5RWaS4k2vHEtb7EQGEH56QStot7k9EHKmJ",
  "key10": "jubbP8JxfkU7FB9NQNPbfrGQBB37VAPLsQvEv2ra5f5qAUeUtwjrA8j7VobZBBGvNJU42yX3vRT4a69N9MLn1Nt",
  "key11": "4nkoChQeYWKwF2kWYyZFkx29kohU4qo6HgezoAapeXuWJowtAgM39eY3BMM8JYbEzAmkRau5gXUzFGmNrCVqpn1G",
  "key12": "4wbcgWeVhTm8RrJYPcRa77MBstgt8EJegH8nNHfnoigVc91nEN3xNz8XFR61aM2KvgEZxp1Lg9sGPPj9wTwJVeuZ",
  "key13": "4AAuD9pd228q7LJ5tbubPxC6hBgSv8qdtW7Q18unrmXpc3pcFcGPH6YMFAXdxrvw1KV3WjQ3B85v6TGa9bJyvk3R",
  "key14": "XC2Mf8NJcwZT5D3LCNgUWy3DxoKgCTPbpH6goyySmwrA7baPwysrXmKTqi3HWh554AZ1TVo3xbYrw5REV8nZuXB",
  "key15": "ppuxhhcPSjYZx8MPMRjctZuy6aJL5JVdV24U41XuAsSsG52ruBT3UTT2cpNpN7JYWWf98iQDFcNFFCE7uwYRhvr",
  "key16": "2wEvcMMt3mVEzNdCS2zDLoM3XYfzFVgf98ENGeA2B6pfpn1xBSKfH9b6ZBpz8WYzqDqK48swQMRntiZxWNNkkhkR",
  "key17": "42t6JBfGStK4gDWvEt2WbjwRH8mbU5CLkCKL78SrmcYnxGcbi14dGqPhrTPhpVXeokfw7k3K7kH44FMBA4PBkJhT",
  "key18": "38iJfJGoadasedGthJVLmcDUenAXmMuLXNb8VoTRBTeiyfdVn2DUdCGaLgXvaP4MesQuSYf9FFQw7cXM8HmXYaGp",
  "key19": "5xHKHUQ6oXDB4xEmjSW519QPzwT9UwqYJnwqviN2qUPb9ZD27gNk6GH7JcgYTdArDyzfDsiNyHsup3fefh2CdY6f",
  "key20": "5rqGbdf4ibhVMUoJfAUCJXznhcb3RCjf862of1nKU6kPbNuTJ8ZynHfMtBw4jorhQZkJp6ugMsn7ZrCFqit3gafH",
  "key21": "3ZMRqHW8ag3agrJqMJKe1Q1YYTk1gVGEacqaZPX7zHobY6xeVeruf9YNq88wuow9ifrb9Ud9KcHLsur6SukqJXfJ",
  "key22": "u1tp1hPBnnyUSGjuc97SxCtyqF8tvUE3S5thbNb4ZQk2AxQBMqCaHMrwGBsFaAoM5cTRRodMWbnac71Um6GLs5h",
  "key23": "3KHS9YwAaYvDCseaZkZNZn5PhURncSHUv7KBVSWJUvWC4pmfBvwWXixrcWGFJbJTaGXie3EHHp411XVaqXiJcJde",
  "key24": "3RLWA6Vvzrw2mf7dcNta7dTfH1ZALJEWRL3kXQ2UeB8FanGvAYVnk6xUGxaZwJX5dC7fX6BbV5aXHuvznF4C8isg",
  "key25": "35N9FYhvWoys5hdKSSbkZp1B4NMEpT63UrfVgkEjrUzL4Nc6UvUsjUBnMu64U5oMv4AtgDR4WZPc6iFWQt8aAP3z",
  "key26": "455gzK3Pb8bxS98H9jb27fY2bGhofoazGmsBxm4czNpWP78sZfjQHQdrBJdzRkoXrxZNG182PaY72UyiaeY5zBrq",
  "key27": "4wwwyKB4ifRmjjx46bg7FwBiYx9oMRZvoiLjjPzKncbMDFD8JaRdQZNdk9XXQ28y3ZXVX2bc5FdUf2oXTBLpSa7n",
  "key28": "3nxBvoxDfpwuVRswLEw4u3KNsBk3KmHXeuqRDFT7X2BQhBLq23v4AoRZR3xUJdukkPTsmJcv4Qio6b4ZnFZPkXvD",
  "key29": "5iqUFdPGXt8jLywyKSQb3BQXXiGSk1NDB8HJ1k1pKBz8Huf9fL8GqEetMjiJABd5tDprrgpWbUgzrqG5hxM9qqi5",
  "key30": "AARtiC9bfJFM37NBUhcsLNxPMgdsoJpzEdzqb72FusNujfLR9o6TUqiJbDyCrMNhm6toVvcKFSzE2sYYntyUZJQ",
  "key31": "5JiPC34r3ztyPnUecfkuj1V4xSP53uxnprQPHg1GYfZqdMHCGJhCY91UgwpbCiKJa5mrrKLdwUmdknAy7L4dcajN",
  "key32": "6EYGHe8op6iVjMWCAWri1bhmyNp5jhqEkWUmzAhJZgHhFaRgZYf3k2h8iUuooygSijrraLVuLmw2hKonmrRKXBX",
  "key33": "4wfjoiS9vP5y1xRsW24stmEJFhbB1DKRV5Pp286EkhShHU18PT6JMfV1AWiKw7bwdD84ZcpAsFVQPW5kARhZEe93",
  "key34": "4EL7jgDf1VA7VL5hBiKsuoQ5tSj5YTNYJv6Grn1oQPPCqaVCXqF2CTwZTCR4RpvN26jL8MDDR9Hy6vrkZXRnwERj"
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
