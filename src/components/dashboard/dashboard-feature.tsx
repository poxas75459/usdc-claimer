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
    "25kf8vLUdNJjFroRnDejz4RYXM4Wodj6NuzVDdEkXZnyRUubHa2KN1UMjnSsGdeXUKkdgwAq8dfjVY12B66cCkC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xA3uLmv2HYhk4EF8KZFH7RDpGaLiNCvb7hRFNATzxbW1TmquH77G7L9VHpv3sfkz2P1N16Sp6vD5p7Pati3i2gC",
  "key1": "5G2WBx8Ky2ExzqjBT4iddVMqSzVfW8K1bLk1maNuzocaejRvEv6B6dDUGwmbYp4EqTo8pZVJGDa7GbRkF4hsSCMG",
  "key2": "4jR1nMSt8sEhqLJtq1FxPvr64XiVj8ksoxnyk9XuV1mAx1gFtnS4fPTj4Q7s91LrUG5zC9XgsEpuwvYaot9eBu1b",
  "key3": "3Aamhgz6Mo2jQazLhFZQugFwnP8fTpNpqEenKqoUwDDxXiF9VX7G59p82cizNGDVsggQs5rHQXAeTbrbBotxu26f",
  "key4": "SSbMXEk3FHpagvmHG5PLbcS8kWBWAwrdg1noJe1UBb8Wko6q1ZtxaiK7EnX1UwYHeeftiGTjNYpaze9PXmBYEok",
  "key5": "58kPgLDrNhhSER77HfkB9r5Z5qASQow5qgfqPEFif75xFg3s6GhncCfmvewFtTm96ef6UJLEZ5hgJks5uJ3GmXoZ",
  "key6": "2yaznZ5iYF5oW7hyoS7TsoXzNkQ9YG98nka1NiEH8CfSizYrUpr6ikHx1S7RbBELQSYbi4UJJmNSBWzQFKzsmvfs",
  "key7": "c3sVKRXNQSnfTbFwAsGC5XyYm4RtSdxBLCqQuJTiWp1iZqSZujkEz3p5w2fSz95GUFs5oYMQPMPDJ6SZ6kLJie9",
  "key8": "3uAFEfzAH6ApYWLwwWbDzwDAzUYF7dRXxFsTf8aJJNuieJsorHGpQfk54HQQxTjnBowA73FWjp4ZdLdWV17M2kju",
  "key9": "3j3Yaf7E9iehDZ3LKRoGXjXwCDqUtEiQBDoimKYReKvTijmadZiLGkzKUPpa7f97XiVTWTtVBhWf4g6NfVJvN66Y",
  "key10": "5bFVNXwizUe16LXtTCzWPFMZqSmQiinwscBDQzN5RYsehvoEAERpQ3RWzNCxq4VrAmx9TW6hVUxnxUfv5kr3svQ4",
  "key11": "3Pid94JuY3pLPDJ2gg8Dnj1BGxE5YePmbrHsVZSnc54RBbzfoXoAVTQoex5eaNCqkzXxqkJNJSVVKCBY9EvuvDRq",
  "key12": "4aCHwtvPU5uG6Ghqf3uQMjWtAqFt3i1EGtLLkL2j7mV6AVKBvKnNbEQ1vi5qvXCedRogvKD27CkUPpuurC6DRzvs",
  "key13": "3rFcyDnYZSe7VBRYNYrMzgY7sY4otQpQHtqap5vMtEpLtPQ5UVcjVWjguZNd2W5za9DJsFBLH8bjCdLhTCPceM2X",
  "key14": "2Y2nPyYYSoXWTyQ2ihqQmEK7R9ZosLi34WsKLoenW3n81g6qn916iwhcJK2xdUY9UhkYDwW8W4WfRX17vHboDST3",
  "key15": "NQnQUMDrJDCyrWEg1YtqdnE8KFJmN8qocxWN2fLYTMFhiWY8k7v1rawnHEi2ZkxjuiAtwqXV5F9H6PWhA9zDB4h",
  "key16": "3fAyhgRFuuNgbKiDeGkkb8jUWu255iPH3CxFc3HJxTrWrpEW9nvifZCxp4m3u6J8cRZhyMuUtvQsGFJi7Rk1HAGP",
  "key17": "3PRxjBEWjpD1VReXbHJR6tNGENyYpSzeJ3fzjeBMWGC57FqsmCmyEeYZmDF8EZK89MwXdDYQaxuFp9Tw9bzkChrs",
  "key18": "28ete8hzeuk51DozHcANoTonptrzEA16DZnSrHFvg51vAmWpg7ueSGJDpc9Ee56WT1SbpYUsE2NU5TpD5DYLQr3a",
  "key19": "5ZJ1PJJufqcE3BanFp8GpdKRYKCoHwJts5DnRuVtMQKo8fCfstD3E1sWvZgsE2wcXTZZ4cNeb2ibsc5dEAmtXqUo",
  "key20": "2V9y832LxUsh1Y4VFukM1fJYwU4U1i6XfGj2oABtcDVk5iJRJESLLDyyDpQtsHgYCBLN2RtSCtneiEZyXZXbaLGw",
  "key21": "3p7mwsLJpgCbZMf3Zxx72XRrLfNQKyN1YZmfDSbPVyyLprTXiBpqSYYaH2sdBuerTpfuABssrz3MFMwK6V4mttLt",
  "key22": "2N9bTP2RJmD3sLDcdVDdMkEMrezGn4GrBz2iTF1EncF3PvJHWVQ6YcRWEJHCpWtsRpjD3nizTaKc3516YwkVvPmV",
  "key23": "43WCs3ZMzqp6np7N5ytEFrteE3zz6DJmS16DQvT7GsinR9zsNEh6YSKHtjpxTnuSbfjTvXz5znwEe7LmFgV7mQ4w",
  "key24": "8ykqZomsZv7uSwVyQewdXyb2yvaSBKskNFAZbqYtefoR7Uph3cV5qGr4DA3zQTJjsuYBxEpvHrTQDBLfZJv26hu",
  "key25": "47gp7s5h9ru8y19NkLxgWmuwmY2pArUz7RyRt3bx8LZUHFSYB59pptBH5csGtPLw4hWqpdKAnqZ3B7vufC6BTdPR",
  "key26": "4LpMPPdziiPha7ywfpSedbkazxfZsmfKK3PfJRxgAuP3PNGSCEKjgUDQLf14ZRoLtDBZXP9Z6j9xjw1qDRbzLYzu",
  "key27": "r9P4K4cruxvWw8L24MdqmzdCjkLgQZTvnM8H6YdonQtyHHfAGQAy2Xh2EZu3LeAywAG2MCcvYZvHkncskRgqwKs",
  "key28": "k3HcrGyuCDtwF3iHHDjdzepohofdnsFKxjHVcTrfgiEYsg8tviLHEfLiczgH3SvV63pF2zFaNqPfFVK7L6C3kJR",
  "key29": "4EHyLtLF7WzHHR4HRqACYpWkFfS1mEYPpjLnFMmtG8ysyG1EDC7PQdQm77X4WMm8qAuVpp35Ndyc7FJXPNAd5i3n",
  "key30": "5ryhtZJrbSVxiGv7exknzYzeTUky3FHuzepkizEpCgEwHb1oG9CPjTYWgHBWPhqPA1StQuXNVxhWkdGThtbupnZ3",
  "key31": "4YoK5D43DJwACoPSBWbYcdcsyneqGBTvYtU6X6SX2obP9avZFKGLbbEqRUiUtY1zpwX5d9yGP7R3XKnVgEvjfHRB",
  "key32": "3ZRchB1Ntjzajjbo31aVniPe93TfqhPDjofa8Q31vbiFtaSvJuspWMFCDDzNapxfHbdKgBFPVRoFymtMWNWYkoKN",
  "key33": "3TtNWbY3g7GvpNSA9PQ9owCbLRHxYEhHmA68aBssjCCw65gMjTzfXvMdgaP8fXuG71ddSDNsiHkaoBvqMvxQyNrL",
  "key34": "44rDhkmAcroFMTRu5GAGL8UdS4dvUz4z7tnUCkypsZGNyPvCkfSeNUXUhXhEg2dBGTQXic8CP4RKrLMxvTtfYjRm",
  "key35": "34UJwFJ9pnSobxUeCwoLaocZeWrSVn4adT8CyxpvvjsdTGUwJ28rEbAGBgre8Gssp61jSo7enEZq2Ywp2iN5k9Bg",
  "key36": "4ePPcFEXpA6sZFu4s4xPfingXHVnKK53h13tDPyD9zP6FifkC2ZMa4y3r5oe8p2CD9rNP7oDX3cRKptKNXJY4fvj",
  "key37": "5Kev2STHUAyzXmoGAVdX4eSBHqn41kgPmNkaGuCQFGjwmZJYVUDHBCwNyNySnwGENCwDn9RLUWLDGLZ6Gh4FB1Fv",
  "key38": "3gUc6bp7nTHpVBDB7evHvjJAehAMVnb1RHhYyTDiSAMyPXRjfLLuXatLGKnQJdXLonw6ReuiA7nu5nfDycmSXvW1",
  "key39": "BbiDvzBMMkmnGugHAsoPQYtZpCCBjm3YgPVtKVV26VXeNMvTmeoG12bYmeLxXZw5NVcPWH8QUQoApHdXATwGSRP"
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
