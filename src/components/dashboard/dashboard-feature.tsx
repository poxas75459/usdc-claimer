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
    "QiuwBxYt4FXjtSeM1T6mpDJGBc7D1adqMhLjtzjbtEgXnCmiyZHLYsWR9fwNumnNqkGhWgHHAuHqQVoWGnUfPpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38DvbFJEE7XZHcpvZAGRHSaTiaKnPjRmqXcMNRu722GFaz9rRTaF46nVTSB5A81bmkSP1TNtapxUJzHcMJKDrpLR",
  "key1": "j2dc3MvaUsEVmBVfpQ4sfHwV6XxqBXEGKVDtnnDHwcsh2HCSvyvBt5jrHx1p1JZWwX5C6USrrUF1Jf4WqGyG41U",
  "key2": "3PJMn3wQHPhS6EWoWDoo3HATmnxdMsKCSsrhUzcQ4Vtb5qbznouq4g4mzR3QhkPDsfh7Vd5rHsuRYhv8ZzZjKEFw",
  "key3": "5bEND7Qw6ST1GYSp9wtQMQ6zQ5Zbt1kyPPh6wxMT1mRs85NXYoBVQ76mxSWvDAf4xKytinqjjmrqP6wLhKh14gQQ",
  "key4": "3pAYXX4vtBbyVS1VquWRMJvLqd5ktb1F4ngqELn4Gdf7ivhbQhWGtauPL9CLqj9LL4EeFaNH2SkiUg1FqEoMWQ9R",
  "key5": "nyUdFW56hs8i1b6Va6pRnQoghsfyoKpwcyKNGzFgMwbWpJhfbisiejDAKnsDmRfoE4BzuDwbo7SkyX3esxnwrxx",
  "key6": "2qCvfYinryH1iFQsrzfCZRhaYrvMwGy2wvAoqgnKSqba4oDU3MmKsbUrDjYjrvFNM5iFZ5yiM3X44PJ87Q6LrDd9",
  "key7": "4GLcs42UAJXgTZYo4ehCMdK3KJpsZypFymDMb6uDReNWtmAEi4eMP6r345SWuyNmM7FL13Rb3V3RzCCZEez92KWf",
  "key8": "u4pWZcPr7J1yXhqpVNMskZBTCzKLpGpcTwH3TWw9EwZLNjXVdmx5aKTwrcNQ2DViBaU4bMWpkJ4gU1pWgVWBJow",
  "key9": "4oYkKDMYpiv7FNnbo5QYTSDSvnPCxTNQ4XMMdw6s7BR26WqnWYbLcog7WhKgeHQszovcfG7vK82kcuw1HRTXMCM2",
  "key10": "4D7HUHujpbnAFo6sHufVmqn1QENHb4mFLXoL3M3P5DYSeBNR6m2H88xwQPyz4b3jh2Ca2p5qpwG5cMkCK8aEcWFm",
  "key11": "3PLtPHhSXVSvAhA5GYLmos4PjiecwrgDywe4LyHVPWw73RaW4EeohRsXiFZq6rszXACe5WfyEQ3GjM38VyskKiZv",
  "key12": "q2M3CzojPQMWxtMUcHYLjBLcYmESvZ31xh9Yh68ceiU4woXq8PcJgVepzPTFrZ8RfHUUhPJUSfC1nTrvYC94MJX",
  "key13": "BvUoEGTJjHNn4EViqZXmoTVQh2iM9yVtQLzMg5QWsy6Tsppg72T6KmdF6Z8ruAKMcFtTngYkoERVkgZ4agYoJ6n",
  "key14": "3zxUxDr9MfJkpvyPASr2KCBwNqLqiG3nnkh8U1wSjQXvR8uTP29b3PwooWqniphZGTDKE7hSCJMgSanTDPqJ6Qxk",
  "key15": "2VEK88RibvGB6csXp2UQRMJoKPxWzoq8z49ixLZtG9jX4GVzLDaeguwJ8LTUbXh2mAtZ8GEoFVxtbxKqbqKKpp8x",
  "key16": "5Cwm3BPSSUNgP2RroaAzohMcwaRiu2DKMSibYqexJxNr3Vxb3pLxwC4QzwKTXkxxxJE4uh13LnRrETqpYWuvmcLP",
  "key17": "2Wf2V7gfVTz9JnYTXRtE2uFXJEFmpxUHDCJepPR1Kug7WLVDnJJm5t62bU7feYzcRZx4afVQUkaL9Rr3VnLjAHvM",
  "key18": "4nLuwsyZke1Ahgek3azarWdNq8YN4yjgGj7vBmqVFzzK93bekvJDpfcnuufLTivCrZP1WRnsokmLgFknHHFRpQKm",
  "key19": "2FMxrcmeg7rG5mcYRjRURH9nwpBLSXKTL21BLtWgKoFjAFCw2ZdLgYcmeFjYZmKpmUL76pz8werRTcMyUJTadAED",
  "key20": "5TcRQRtd1Gdxpe1aB3mUzLcejPzLUbixpLhEgyLqgetU8RYUyjABMjJXm2MwUCjMC66anih34p9LWmBqLRfGQdsn",
  "key21": "4xvF3S93DTrnjbdJgerEviEc7MQXYzZCE5aYC9oWum1Zensqq4Yf6wAodqiiq474vHw4f2s1sf914DoQ6tsvqLcZ",
  "key22": "2M4d4fLRchTizemH4Xr1niwggfPBVzMv9J5UZ45cqJcCKaYNPziyqp5YcHcHKKZrgNHzwjZmBBHnJj5uNF6Gn6Wj",
  "key23": "boKnrAFKMWus4riufWay53c5AFivkLLAQij2jfUjXTcuH8bSamiC3Xki9tm7qKHHBRtb4VY5JSBrLRajwc6bXW8",
  "key24": "sVd1VmucHWP2X2msEpSS4wQzkJm2r2AGLpK7Qhvc3QsBL7bNAfHMTgZC4iXvka2fcLtELPtfrutTzWnFQMe1XT4",
  "key25": "51S7cZjRAcqmGCnHdeW5UuyEjUhvacM4HM1FjEa32o6fiezgiJsMqmw3knAbiKSmzApAU5X9izbabQfSNAhCAPda",
  "key26": "5uzzJJdCvtsZoKArJxaHU6BZpwVG4Axq9coeBcdLUGxgp8Rm27JaxxNScmBD1wFGrDXhYPmj45feRPCLHdo97Cqe",
  "key27": "5xeyA3vibUXYDjkHKRAfYX8BXAWSoiZ1BsxfBNYpErkSV8Chiqy6TNkL51QoGdTF4ZHqXCXevYX3fcw7q1ZCsXS3",
  "key28": "2AKaNRSs9dgViWYFF4ZZnTJqRKtj4hDSns9yES7bKCaaA7eBrA8Hbyvq6QU9jFCjj2cdbLvbLjSSnbywrew3z7b",
  "key29": "46HLRekNRG9ZN4vqrWexbKxnFfoGy2hU4a793FxPnWECytRuDJonvh3C2z6UojeET8AtFHrdCgG1MqGabDZWr9x",
  "key30": "5p6w7AieJQ8btouvTkdKRw8S1EfjRagvW1L1GPiRmPQpMuZiTwZZpepW1howMLp96EXVan7PL24aQ5ajqVR4pESr",
  "key31": "62Ny4ogRDHHaeNQxgUcCtDJY6bLoQGhgDYB4Z3bjGoj81EJs3WB9TAmC1NCg5tnCkR3GxpT2KupspBaCh33JgTSP",
  "key32": "3rv96nDgxtBryKDy8g3Uo9n97r9vZo1AJTgqEN4yFVko6Ab89ssui4nNUnvW8wXe8xTYTsdkrYSgKmGjvFLxR465",
  "key33": "4XYs5hLVNmin3RSkY88W5bmFMs8v3LUknVve6tEPLmfjTgEiGKyPVLLHxndNLMentxXtxtkRr6xXAQh17CttLR98",
  "key34": "3JceBY2a88CDDYvCBUzKzX7d4YyDzqFB7MZVTvPyK8tmmCd6LeFcenoez7ghb27jM4fwTP55eZZ35rCnNTrPoJKZ"
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
