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
    "4Jr5WqX13kMsrBJiuD5FRnPSL2ZDrETb3k8xbgzt5w2eVRyNukyYVRpFYrZZ7WgmGRBtdJ9qCcAP2F35pG5jmXvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JczCPTkqXEJ45tiuJtQZmBX8xGnEhWMMa8JJ1vR2YrVtzEjoEJfSpguGgQVDPpDZRNcABcGQ6bnfRakdEhyEvaD",
  "key1": "4hsfDnUm4pwAm9z73VHsa5qdhXgxhFv1bKgVafESjsMBDQyRX8h9fkb5C1RbgiQ9S7qCSsoHxyHTBoUmhRvgDzVZ",
  "key2": "4YtAhf9rnCurcdv3u6yC63GZTuuXPo3nuQDzC9X1ZNChs9CiAJu9VMCwSTtgLrtrZKk9JEj6UU6om72jkjpdidhb",
  "key3": "tsnr4DrtvxSUj6UJGbAwsUwRE1xdWmygtmdcTqWSkrNpAfdVCnNUfnzWFp6v9sqeLu7YgWeGZVhnUiw7ANtvejZ",
  "key4": "47Pvw486jVbpFUEpiuAYHQxGnAHEzAcEanUK6W3Br1pwM5Z84hwUEEarRHQk3f8CsqaMhxxD47C48kRxH9c6GaRS",
  "key5": "4VRfAJx3V525TZMpGZfFzkb2n4mEg4FjJ6t6pGsnHm1fByA2v3J3U7LEF9QnvaHUrzyjZrMe8v7EHB8WCnmFAFBC",
  "key6": "3KBiLBJB9SdTyKXaeRRL5mSjJECA9gtrxPNtMpkgbGVSZGWGrn9SaMRcWMuzPrESccjywo99vNeNEhiApNNZpmjr",
  "key7": "28JyFbiY8Bu8dMGrjVKxvEzgoMPHi4jyL75vFBtkVQTDc6PhnP5ak6DzMbZrzZfJd1EKLvZRztM5UsutsH5GdygQ",
  "key8": "3ZB3hnXUxsY62xhMp3pnvhu3rfAQMt62kBZxGktrRqNSgMG6YGMLt4dwdsbVkh7exnSyAV4rRn7CJEnLmsXdgJoU",
  "key9": "4WqMuTwA8JuZaGGsfo2ecf3hF9mEJjoAMCCjsh7p37EB3UUsF4mopVFmW819LWtyZchq2fNSpH3MsVh9CYg1MNLi",
  "key10": "4xtsc2nZVAy4YMBwYsLtonCQnZKCU5vjJkxDtHwUyuGXHohRhAeAHJPAxKwqBedQMLZaV229R1KGdmbbqZTgtcV7",
  "key11": "3LBHPV76MrVcezJb7hgXkGWJTB4T5gfWxPDNpz5EgZPkUofvsCX5qvbqmUSrtpaQkMUfFb5eDYgvDiAcxA7oLedw",
  "key12": "pHwnS8AgCHyt1kKji4uXpiGmyDzyr2DE5XoLcFTfasLmZ7uoCpryXwRo5yztKGqt7bjWBxCW5dnyMNeAnikqPQX",
  "key13": "a6vqAFJQ47VXpPUkwDL7TQwUHRKgUmo2g28z7y1aMGhuoHk97qEXfmfTcvTJGMuzkSWoYhXFzfSmsprxkA4BzmC",
  "key14": "5w79UKRNgd9qDXHP9YpXv7NM6aqpzySBbJu3eFxB9utgSCPn8S3N2mZF8cxSExfEicm2uWCKdPCLNvmT6NXcShWU",
  "key15": "44JZnrmh1uVxXGjvXmufCy7QVevxdV13EshyBKBRRJ2zK5vWDKi71AVqWu319XkViwfnxLnvboVQSVeMUr5WSmJi",
  "key16": "5j7VAHoAyL6f1CCGRhF8okDTHzrMrBDwVonkWcW5U4garSV8iQ3V94NsF299NkLuUmGeHi3tg6WuMzzzeDKaZ7vc",
  "key17": "5wcwGeT3YPn9grsdiNjQ61s58LLqkD2SstZ2ynbeEFignR6Z8cJk5BhBYmvz4CLzvf3jU1H4JjbNjLPqV6bqMfFF",
  "key18": "3L7KHYg4EDeG7fYgGDBPMqmH46ERPFwifJ5p2CAKphtUrdGxfoi6Zuxz2sobUAk1u2tnC5D1FfEaQ7nGxFodAyrZ",
  "key19": "3j3AicQQjP42gpZ2SmozNiRcnLpgqVapuKhuMz9ADgf6eKfPGbGMbK2ToKzCbkbSqTUzJCt9ygJGDJMQ6cyZBBRp",
  "key20": "2CF6AChZ18bZ5ne7C6C77x9F7jeVfRwMf2NEjZE9ppEiacpgH134Mh13amJtr47Ua13bkxTNL9wgik2qCGBKqfs3",
  "key21": "5PNwdXQULtTATB2VZAidDGBhoaxPWccPoUK1a3yNjADkqx6gXHWTowcLKxzhhJkNEaW75mfSrvTV6X6hqBgrjvQs",
  "key22": "5MQJ3Kytai5a3BqxV7g5PgYPVT8D2os5JieZWLZVedpnfZCSHQyxZDgrT7EDtbJ3gUsaWANygMJwvuvrwfps4k6m",
  "key23": "3YF9rCnYe9qEJtaKymxkH78F6141hYsiJXuCy8C859N7nWTb2ss3JMKyfJ5W3f6NiTZFABegj3smr8BhXxdX5RcP",
  "key24": "3xFiZpSWJV5dqBykZfymaKn1zevp9YFUpP2t64hmQrEBaaXa9HzYCkT87cvmcwyw46w4RNDky9BpuzrQ1Wk8tc4Y",
  "key25": "2i9BVjCAwMWMKV4cSkTC8ckhBvxdMkNkS3YN9gZzF9rGFA4pAt5QNm8N3g5NK4AX1UXVadgc8v11m1MsbbyduZJB",
  "key26": "48JZzCgRLiTanbV3LZ3FW2wnNNQdwGD9kMKExUbEoyaJyXoPAsd3SShEdcUYWraCrwKWuQDbCXfdRpPSxXmytfD4",
  "key27": "7WFoW5UdoHHRvVToGafeCFYsShZPLrA5eWTNipYBhCTnczE9B6NAzyayNWSuHPVfnb8CiYyMorreBVs7UPPkH3M",
  "key28": "5wW1uFMchWJWAVGE9SvrTKwmefe8N3vYhPaRpkVZFU3diVVPy4xxNWU6TKS2nd3rvudSmngi8u7T4mzpmB33WW5y",
  "key29": "5gXwV6p9qz5d9mSXAMWZPewejndhysCD5U1Kn2ChjHpsPhyStn2dtszQLquky4VTxgAVNLmeh42P6nPQN2jx6MKy",
  "key30": "nva6mqLknY8h2BNTFbwCrDHtuXJ476CLpRPv1G4Loe6ydbXLKEwpbqgfzMWyCTweXdd4VYyKwhQviZLFywpFm1J",
  "key31": "5ZvjKUKiinpsMzZCdf8jWzcBf4YUsw9MoP7fVFK7T7wYxzgXUZQgkB8A2vfRvHvpovj7SueHidvUSWdN2WKGQ4Cn",
  "key32": "3vq1TTRAop8WJUSZ7K9Rx5qy9U66dNR4TDCba4n8zWowNCUGrdadhHfPcsdP69Hj2v4mDKiYLRbsiknLKFy39LxL",
  "key33": "23Pu5yVJwHXBNjy6P8mQwbEbRHzkjvSKSY5L1LY2DbEsfbrQbcJPF7J9y7sa7xRCdrY5XJMvhfHXdTrqz6NBJRjF",
  "key34": "5gNSEoDEEQBKU5zGmoH131kpMcf34Kp9Ps6ZDpzGhdhARsZy66acsdTDr53FjwB5vcH2AeYrd3tjNrw2d2Yu6wBA",
  "key35": "42V9uSUDER4DJhDMcQ1zxSDbaQNPzyMhGstDY32snXJLXEJ74DwSTm48kCBaWZyt6ziD64MGEy2Gm1SqA79a7Ajz"
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
