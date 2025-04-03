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
    "62S3pDUFPTTPmvhCxZ2YKx8GzhB22nRF5mBzcUCXCPud47A7rsYVDwJPtzNrzGmGxQpnCP4fv8z9kaSM2ztoAHtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vXqvCE9419gHMQJcVtT176u4BgyxCgoLE2PixL6VLNZMZ2RKavUKLDUWbhVAXmjV3dib2C4mXMNnH9ok8USVehC",
  "key1": "fxkwBv7rqigWXNvBgABF9aYubbtp7JQCJLp3eBpELcQTgJYkjKkhRss19thCGHCe6tq336Ka8pLoexi2d1G6pHt",
  "key2": "43fcQ6yi7FMej1qjj33q5TKcUSj3sDgriVfzEZ46Ps1RQuLjVXqeh1QHVhPBS7cwWEzre9okTToN8nafLQHx9fes",
  "key3": "66JKt1JDcW5QH32QUf4Rq7JHfoaXxwYVkMNNnGp7RfCB9wZ1Jpq1vo3pmskyNTipe2fC3njY72oZMqEU1Ee67erX",
  "key4": "4tSBSgwx9SdB4WtNJMzjUqMceCfcna2EWaDhm8zQ9qwiBZ2772aENJ6wVrYp8L2eYGyCoVsLFcC21juXAZRrjyoL",
  "key5": "32wG2V2gPkY9EFVfoNHBmoD7EAMa9XYGnmdjXq7zeTAF6yi2FycYiL362ry1b1WW6XxqmwDSeU87ouPaRCD9FCKa",
  "key6": "5E7t6yhixHdh3nmTTBwnpMCJkxf9CP4RyqDQ816vFZhxvBEjw6wuSeYQA9tTbTRMH3ojQMX5EX7wX5Py25WxbJX9",
  "key7": "4dsDw3ZdzuZGJxbbiEp8Wgk9dyK2x4Yr9GLan9N18axQ91J8oRWx5R3GY6nRvpjNh94VLhPMfwQ4FWTrFq3uNv9G",
  "key8": "2kNZwFmsTANhGX7vAEfo5kEarPEiFxR4z9jgGdrBphAX7gXFSTbn5qMR5XWfRk11zMfqbtfoXBVQD67kNUNDxBJ7",
  "key9": "4iS9wqPrUdZYxpZXPz35DPEwEQvZrzEkgYcvSzcRj3ydFw6xW5Sv4LtWu6Udp1DXn42Sea5oUmPJ6Hd1Q4enRJTE",
  "key10": "5KbZNVLSDTCyrcYh4VACqBVjwphoHQ2HJJuMTigDoD67g931vjSNqwV49cxwE9umdJtAVwAatvt4yvo3zrUqaPqw",
  "key11": "2YxCTkV7pmaN3AHWKaof5U19eJMfkZemi7bGKpSAcJCdYJeummj7pVe2kSMbZ5USPd8kr7LKJsmxmcQf3ZpSuyCp",
  "key12": "4amCH7675mSrtRnfKUEu1ooD7EFgjTbpdF3UA6ZWeeX2ueFTmCsUqS9J2c1SMKdSe6jBzCPNBn454WXq3nuLBw91",
  "key13": "4D9GC2fbtXKZCrkadexk7RRKKgXD79bLncs4JPwy2dRjdAGJADJEFxoJtWCt38epUag9uRhoaxZckQYwGkfRnkYA",
  "key14": "AxAuiWLHB4qP6kSueom7dQjviHF2qKhpdoH5PRsWbb2Zsh5LUwqy1X5yWfqtxPebZLNjWZaBi1ewqadXnQEpvok",
  "key15": "2VzP3uGM51H6ZgMtBdiH8uakB6pGhBX7Yy2iMLpZNEZa1AsPY8CwbSzKwUjZ1SLr6WH8wka5eQoK95295M3MbEwD",
  "key16": "3ZkREARXEUDTQ3V3y1jgRuKXVfWfqCN37q7Mm57rYL6LudhgxWbafB4z22XUS4PnWVvbx7KuaDKFnDVUaUya31pJ",
  "key17": "4oJuwRnAdRvDSn8NLYDpH7wo33u4dQtSC99MricaZZqip3z61EKmaFAEFZkqENEXEEDbU5UV3djQb7NZNqZSmavy",
  "key18": "2HxTUqaSdTk3TAs6Vyg96kjzHjDXs5vf3QNrAUeQgYMJaSGuL249nxdp9bpURqEirPPzAjgSEyEo81BrwLPhDLrN",
  "key19": "2dnL7YAUwqZDDbkvYMqbNNgoNnVxY5uMRtUBTSt4yZT4tiDGp7vEDLesrRwZN5Shdp3hQ8qDM9Hu85dSmvZgjdCk",
  "key20": "3U5UH9ahiDjwZz9LQyufkaLoTtgeHn2PFA6E8rnv5ow5Tdsu1nzDqktnb9K8DnQV1Z9sFQadJQzenoZV6LCQ7a9U",
  "key21": "33vHgeTvueVK7UYCi9JHvrtpw3FpWbjzGamuWYdgCyhyWmgBhSdLTVG31EadzGDsc3WgZUZ2mvGW4DReNWZzMZjf",
  "key22": "nsfQPcLL5Eytrv7fkhCfrmoNCdbcQceye7t5WfgLNaua1KSz6hEP9SMRMKfzDx79qsQQBRpw6ZaS2uiQqfdDMy3",
  "key23": "bzB5Jmv47Z4evwTf9ww1CENBTzHg73G6SsMyKtUKJYP1jGWdmmzhAsraUSqWZ2REAZrDJo5BJyu5yS1um2eCU3B",
  "key24": "Kdz8VWdnSW4TL2MXeeCXmsbp5ibEUqhbdS9WXJWN4h9cTGvuCspkbi1FbA6gDj6gcYTufdfdJhNN8DieT7h37p7",
  "key25": "5tJorcEiBryv1zpm37JymQitYQLm9oLUpbFKRwfgG7pMNTHVQwQa4S8DrAzLjWa1KytCRLXgADpgG3LiZi4CWhRn",
  "key26": "4PvQWaeLzzTVDWfv4XmoiKTS1Zv3oEJsqmJWRxJFkNgJZgF5aXKqT9cowbouAcwHtQTvDD9wdqrb3SAh5pkTkBKw"
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
