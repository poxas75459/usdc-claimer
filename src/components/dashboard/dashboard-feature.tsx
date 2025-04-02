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
    "Egg7325KwfHPSq12Fqv7TzsaoTAfZEJNME3myC22c9P3xZKPDKDqSBvzqFjVyT63ERNZL3RzCubbhtMz2cUFbpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MNAyBNgaNLdQCowceu5ujoggJUv5QRVqr5gB5DFTfuYsgKy6ZxTpqwR8AgYC1VBmCqfihDx9zWNTxpPbjSsHqM",
  "key1": "3nB6w3mLgayEt2Bcj2Zuk4j63nhD6LJvpmZ8MZ5QqoEDYH11YTkei1wQK4VJdUpTZ9aNWzVd59JRXYF4i6nQqeKw",
  "key2": "5kTfdGsVcjuU4QMN1q23AFWjW9647egzdcKiRT6xnARrk2nKjLjXhTGtD54v2nqnAW9QQ16kUjSrKnCZuxkF1VVG",
  "key3": "2d6F73SQx6ZC965uQEvTByE7URJj9Ey3Zej5f38nqRrMzsbGssHEFZvxH1yjVt2V4uisnyRxg57oJrbBgBdazmR8",
  "key4": "3LAFdheVkPogE9T47ox7seWnN8Cy7tjmTgsmwnJvsx4n1G8QkRcLZCJiwKmjASDX5VPhxuE5q7ezezw8Umcdoo4i",
  "key5": "6kZaqQwMvk6ASR7kCtrRAUrpzxQ3Sv3KEwetrcZjqBKAnVVoeic22vUB7TeLvmWfeoKDxn1HqSF5zbsDTRgobyK",
  "key6": "3tc1xwvjXWLww8Sg9GpuHaQgcxo5efj1N7nmDLkotXozAkaYGyMrBNJJsVs1YrZMoe815VwnYK3vdXVREAd5jxrM",
  "key7": "2eXbseptecdDeLZivEdS2BU8B4GsALNEqL8MzWs1Z566JqPQWF1CGGqKpLFLd75XFuwrFAUqdFPVDKCyzxVaMvxo",
  "key8": "4AG2aeUG8dcKDfSUeya6QrFA1CLRSqngU572NFrjZAELv4ZbPjDUCYpvz9B4MWYDZXMHe5Nq7N9kSJu7EUgzZxMN",
  "key9": "2ZQyu73vqviTfmZLSrhWzDPZudAWm1zhmaywQLudPVmMQNSXTFxwELgEENZzxFg4tYo1tVM6KZYEzZjZpX1gTAmc",
  "key10": "tetyvhRB4Nzn8CU8WBGRUCm6HmkDe5mh19p2eKpeg5Qw9MnkJD2dzgudeXh2RDYh9eHasWrooA4mZgMd6bPfKhz",
  "key11": "4hCgcPWA8YMuZNsUTngkVgSg7RcMfe1GsjHJ9VLvZVhF4gETNsq54cMyKZ75v1zX7iJ7pBp71TYP99yo95aW8Vj4",
  "key12": "4sriodVp9vHzpRj4EsFJFknEbWxomKFoz3rL4oGjLF1V5vHotbkdt7U3A7fdAP3FrrYETwyf15jomyiz5fJjxBBA",
  "key13": "5XfGGYQB5oo5vNNKcCopjtAh3Ahd3z828C7nNXETpbSQ8iPRWxuS6LDxKz1VNzDd5xFaqXCgQh2QTxKpZRF3Pc6s",
  "key14": "2689h6i2PJws96foaGDVdhcqtpmbhgi2u3HStB9D2eKzijdrrA9VCfjvUi5jSLM641aAwoY5pBZfFJFrvGdYg5T8",
  "key15": "5VGEg5tAYR93DhSGqcRZfTWTYCHZ1Du1ckqq2tRgFvZTtt7Xhni9ZQVtDXk25XaFDJLMAQsvaRWz58kmSoSJbRNs",
  "key16": "3EPrT2PXvUuZpMbTtkaqQDSLHb814NSBigv7EFG5An7i5oyhcLsq1LZm3cQPD77yXt4xheu2qa3KyCRVy6qC8FeZ",
  "key17": "2j23nF7CesHAq7fwAFvEZX5BWCasHusUfyTMTdwYT7MkCdaUdGR8rR6A9oPGcvYeRGymdvcRQHFEu1wfJHwi4j73",
  "key18": "3puMzyekf6jd48b3Lq4Xy83gQuirYDLWxRDUrrAMP45RpFWiJBaiFnX53dqkm1wJq4QEXSkVFFd5UGT7jq47NBq2",
  "key19": "3UDw6DYgxbsTCbPwGcDdoAfygU9T6deuwA6Kcp4jpKs2YPYXNhwPtwsmFSQ4Pxd27Rd8TMxpMYwJ7Z1swPzp3sMC",
  "key20": "4MiMLtdYG9mG5tGJUWJKGGkQneeazJMrMJ8HsvKSqTEXtBLsDAJXVGyc7HMhkwaU3pyp43svdk12ENSxP3Jt8Ybp",
  "key21": "BXEFgj9ECHcbCyrXjKN83TKGeSmuXwgVQYwRsqD2Nv5x9bocRSsjrZNp47zoEBZH2iAQa8SkEAuJq61WS2nbjz9",
  "key22": "3XSLuK1EyQQeKRKWpaGTLckke4AanP4WZiENp43bGKhqAuNiDVDjPqvUEg2sfX7vHzWtxQMaRjhYg9mnyPjMfBLP",
  "key23": "5ecJvTzJxA9XQN4UYcp17UpuFxKvBGBo9bw4NX4iGoCKYwoUqDnczfp893CNPJnyfwcfeNotxTjKik45CaREhYuS",
  "key24": "5SUaBFeRNwPpu5G9kRuv6zsQ6Aeup9zrTxmjPnjMwXwTBtECjf2MHvVQwung3DoX2xdY6zQQjEZXNh2VJHXmfuTD",
  "key25": "4zWnbCE3JMVJoUth44LPYDSiKXJq2oC1o3WXWdfan8PyBGyA7EtbPCzEYDjheMYJHpnGi4VUM4URV1zKcPa3VE17",
  "key26": "3uzprVFdpCRLHg1YTE8Yo4KBZj2TXGhVBYX2cgsTupEciFYSTxvDDt6roW8zD6Ww8tTz6NTpKk1faXtUooTXU8Sf",
  "key27": "4WgerUZ9T45XZyL4u9CXo2Ri3JzG3ifmujHUxsPfibkY94QSBG86VLtkJhbtpjTBc9evfsbFrHFxWv7xbos7NUbu",
  "key28": "kRcQpkv1XoessLGhrKG1DTaTdV2XqWTyxxkUdHjQYNGofRAiVTRLCtYCkxUEMdy9zZxjhEexQdtgm7u3BY1zdAG",
  "key29": "4Mnv5LmycEmhJzYLu26K5divYSLrXdcJwAQu3noXmqPkzCZ1w3LNCiwyevhKPtq56VyjSFqnAooJC7jDjLRRAHmR",
  "key30": "3VcAvfaVxc9WhwWSB9TVuYqJFKcGgNCxzdnmvPHyfYYiU8WwTmtZvgDhKxtAayov1mVY7LdZoCDMDgtNJ3NrLMCu",
  "key31": "5EEB6xNd2dRXYC3qmRkvCcTFd3NyZPcMjFvUhVt9M9oMAwXns9atzrsExiJL7SSAHqM3q5jMBJHhgJuRrGGQKoZ7",
  "key32": "4LV1b5jnKsbB6YXUzvWADUCraCRFuPKSNPeBuQqJWdXFYqtHAbrkGZWgSHhgBKaK1BEz2KxStmkNy1xNMu7Y6jtZ"
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
