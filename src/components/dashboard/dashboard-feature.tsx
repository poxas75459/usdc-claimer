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
    "YB46eFze6tmUAQwwSUqzQqanPmaEETppY6QQ2waMxVPoRM8sQyWduksQshSyjn6HHV8q8XseAho1eHkM4gDBFaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dXW7ws4uoByS2WNukyAh4cUmoSBU3eY2rLLtwEfQ9YyRYXhhHPZadVdZCuQTp3CkG6oz6CMvm2m4tp64oiejrbi",
  "key1": "5Wfu5nK9GTybnLZF93kFpWtRAKKM6UpELV5daJaDDD2rox1Qn6aHh9eFH7FuFtdPFB3qsW2GRa8r6bjyExBVLkL2",
  "key2": "2cgvHXycoaNU7ec21ijKWWXrxideyh2F4fcBbyHgnydUZN6dB4nxAMs8n5Ap93KVeUjX4iBuBpaQWAeJ6zmjGPGG",
  "key3": "2LwKnZ6zVd7HYmKc7mK9dgMw9r3Z2n58bVk1VKqnW8o7CRYkJEjtA4CqGh1BB5GSUta5PbwpVctFS1JXnndtcV5f",
  "key4": "5Bqej5UXRGXNrc6zKPsmRBsEY4LvxfjtekGuAtP27MG6kqMCiRuHwpDKmDVnAk1oZjfMx3nBX2D5VCbBZiAVi8zM",
  "key5": "4YYhUWKD1FxY6VqfkzpysrqbDGpao9onfewEc58C8rzMnBFbHqBtAkZpd9KorV3ES4VPwamKeppeyzLtzEsg2KbL",
  "key6": "29jX3oXhHKhiaCvjVeuSqLmXCuhvZJBmErTLZcGZgBaF7qg5pzv1PYZuu2Nm7pneFHRCk36gsnv7aCxwPkJY3x8k",
  "key7": "2xcCtvdPjVWprTSKa2zRMxBjmduuWnQdR7dQkShYj4KhfKjc6n1ZagUso2z1KGqFDNSb1hu9bacgEUu1H6RR1Yez",
  "key8": "m2LYwYCE1s5maNi97S5Mr3xzDZyrS1QbSWewDWsEGnGT8dfWSsU6F8ukTQm3mDW71pLhxPUr7EavV9MNHATthTV",
  "key9": "62eeszuFfpJpX7raouxCecVkdTmpk6Zb66GNWcWGadu1HG2nEBRXad1ktcwUyNXo68E1KKczpeVhBcqp9jVtawAb",
  "key10": "4XfXcmPJx5CPMGL7Yp4s9gU359Ah5ctobLmwDXBYoRzcLfWKt4MqBACoUenJzmVCUzqSyjT3KmxLftj3kuVRZWC1",
  "key11": "5s5v8UQoSfxvU3RGY5Xe5znfnK3tGMVCiCsULVc1VwTK6zq8P7dPbz4JQtySJMQFPeL6Ez6MQYCBmefMHmTEe9f5",
  "key12": "5ooV7a2zX1KBKS7Zc7Aqvq4q5vDCddbtiL23QxUdWafnnAGE6iNgQJTLQq3mZzGBuNUEhJ22tdmxtGmqy6EPJfKg",
  "key13": "545N6jWkAEVw8uBVoH91xHoSDrj8dqUURJppf6YbAUwrnrJyfR5LEMgLLv8SxmV4Sqt7NXY6SqAncKJnQTVtgGpU",
  "key14": "5u31eHLahakyTpRqH5sjRzKMKj4wtJ6mTHz39EUcxdSnh7vGqAopbPG6LzSbw1WgBGovwhVB1ymXbMVvtJur9W5C",
  "key15": "5Kgmhajca41VnDvXEkHDui5zdADZLfizpHdq8ahxFRqVDk5dJD18qeZYJLAgCwTprJJLKySxAqmQtwwUz5wgWuGb",
  "key16": "33gh9s2p4rjrsgtQMpdLsTeWfhhnMvvcx89v5WvAuF1tbwhsP8BKj1LHL7ZHUtGmAQ52aztg62Gfqb7PP34DbNWU",
  "key17": "5hPMUdB5yfxbzxB6rAMuEtwA1dSjXQbZV4gKzwktRgFcUgHGLXGjvBKfwUQgR4CMyMuNQWWPafEZpkwFv2soZJyk",
  "key18": "4dzGqRcEjf7cbz5RFSZmvF2fy9DdUuxTEBsjkiMjiwKUKNh5XmLaX2Pnf2y2jaBzraexu4eZqHR9XKLB6q2figuo",
  "key19": "1pMF1ucZYnFk1RSwUEeF3QYirNs1qJqQEK35nQSDa77LNmzc26c86Nfsw3TuZ7vMJhpZBiBbh9Pxk1iPL7bQrF1",
  "key20": "558ktZqz1U45DpndNAPBjWxVP2iqK7Wtnznt6USco1t5jt6An4JXRB63F87LjHtt1Lo6YBm88TznN2u3f184hq95",
  "key21": "4k1KyRmXYBgBU4dDWXvpXKas7gi1EsEpVwdR5k2qLtmUynxMRcdB2QYeuJBaw4Q3vtUcXoUUPAw6VxghQj57J9BH",
  "key22": "5sPEAbqGc3qvjHx8vdtBoB96CN86Bn63tD2u1PnSsyRWL122bJsxLbbXRQ4KjkS5CRd9c6hd2VP1viSUDGAP2PDS",
  "key23": "4XfaZnG7zo4SYEAipCbquzd7zznuYyp3XKf7neGAeRsfAcQ2sqerLv6os3ygdA8G8Q3sVVCNRrMcPeedKTr1Fx97",
  "key24": "23YxCUL11JD63VaQiYkhXBS6wUEqWdfhCxR5NKsQi4o99APyBXRLQ1TCTSBAU7miLLr4uRQyvdKoiBcgu8uGBwfW",
  "key25": "rrn9smqdVf4nE5RbDU5iye4BjLfFUhoBB8iTX775JNLcNaiHvfAKLfoLSpdeT8ge8g1Wm4vwCd8t3bzXkFcikdm",
  "key26": "5TVpfYLcpXHwWYp52bzTuGsxW5Q5bQhEGENWrL3z1M2EWLBHsod5vQHnY6LkiCazAmgp8P11ceHsCWq5eLx1Frt6",
  "key27": "4wk4tSomuxMAAbfJpot5uVbVBqeH8PLpEMTNYwwTiQ53weuj2Ai1LuJiPjxBoQedVLNwKKLYUKmLp2yZB2QCTjZT",
  "key28": "387bhFWKrbWbpnJzGDqCc9oDQQuVLg8SaHQoZCpuKEPqAViXTh7UKoJMaCaJ1H9ihfSdhqNRFZY6y1gCxoAhcc4f",
  "key29": "4eU9Yg2UbwDJZR97VLdYFF2W5xZz6xQdAv4vYLxs4nT1YXH84NsXUYsPtCuSE6G2S2TgiybGD6u9nzSG4hbtpGnL",
  "key30": "5nbmLZZ3GeF6uQxGQbXtfCtjnz2Rp3v9DT7qA2b3CZajESC9d2nGAmZ3s75fnhSg4kj3AZyb4AMaYCoYKaT9vhVH"
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
