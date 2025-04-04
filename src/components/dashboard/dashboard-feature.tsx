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
    "4QV3nUekThKAK9XTtrvAHvJH8C9MjhSy5RJZFpDTD3gNYhMGihsJxwGni6ez96kCwtHx1ajBoCnKqvLfry73BgGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KkfGwbTAPhZYgHNg5aDHj8LNqXmEe8BDns1bz1koi8ksrCPND3TqCD9o5baBe338ogS9fhxRGdHMDgJrM4jyLrt",
  "key1": "1yUAEkZmpQczrFiKbbKVYijuprVVN47NrgFCGkcLewfvRhU2x2HzTJigx1NaHh9V9oFBBzFmLXwzkmpKjHmY6Aw",
  "key2": "5VcGtpCssiVSa6wiQEnbHNm1BRa1zb6HbNE7KmRrA7jnVoutScCNnfkx4d8EKSiX3SdEF2ss2BJNWdRvKfkjZnzp",
  "key3": "5ChHEL4t1AAUZZzgJ7n3H3GKjhM1dtJWTi3ii4ct64Q3xttdczGvc4A5CYFAH9vBKzjUmFgZXwdBFKKheD3ZmgRB",
  "key4": "3h3PfQiBoGSjRn1F2V7xS7shULkVFKo7ncDX8bFmeQdhE6qfh4wmocQhDEp2tKrD1ePJ9chroyX6wt5dDGk46mWn",
  "key5": "4bAqdwqiTnJmpatXHcE6CmtpMUxYREfGq3JTFFPGRLS3BKMbLejHa3GSbtXS8niygyeLDENBGcQbbYLZzogk1HVZ",
  "key6": "3niYSCwuxHEGw3HKrtX3gkzAG699N1KF9qXXDpGuMV7ct7AfoeCqjpcaifUPQYGaiNHhdJ6WiuR5fM22kQXMorpS",
  "key7": "3YfKsQp4tbPqiAWyojUzGjLRcZVqySDovYVjqt3i4qbAqJTMLnLv4oCmfREbZVDPu4UjVQvZTTBFMgC78yHT1Se6",
  "key8": "3FLNRNP8bybSwhaexvnnxwygHUSBTVS4ThcqhDqp5giKBthBJJxYsX8NxLQn8Z5rQTgsqojnxpMRYoM4W65MpVr",
  "key9": "4FdLxnstyyRJoNorgEJ5uXz27rQDpzNahMkzTr77r3MTzeioHEXAq5ufFfMQwi1otpCVwsGZt7NCh6tpD5eAnXj3",
  "key10": "53XhEkET5ZWgdpYuZE26X1mf5pN7skZ5EMApHpQs22LY8B88ZfvfLSmqXwtNrabS3FWKWNdTRuaiJzeF6xw87VjE",
  "key11": "ehPueJf4ux2tmMA5JS8HHEhoAvXY3kJKkfhpb8L8rTYZhbP7nZGSxi1Jx4yRkv7ocRdbVnWF8bKpaGmuwpdn1Uk",
  "key12": "2w2ty4wjoVqSPmYALkngiu6UZnUQw18HzCof6G18ouKhix15RCnwLrDMuxh4FVwDSzp2kHDwb3YJ9QS4zeFadYxu",
  "key13": "3ukEAJG3zgPEiz86PjAfM5WcQycsEytxjyhs29EBLDZ38FdkTtmC5kDy2Bq11Hc8Kj5EFjStq4WjAtEeG8Xd461Q",
  "key14": "2vAK4eNzSY4y31tx2ewGeoHNjZbA1RvLA5jRRckRyhik7kUgJziDMoKYoiTwnKs2ygujPaxDotp6ek1P7cUzJrSr",
  "key15": "65bfnxHwv8h3NsdsntcqinYTZZ1vsBHD2eJwMgB7WUu6xFhT3KdcpSBA4ktYe7kKhzHGBJbnWNsQCWGV7eUXQEvt",
  "key16": "ThYPit4goeNjaZqcTismBnrjFztHScSuHBUqaV7CCwJju4ZbKkNmANQB7HtrKK8zwcH86pbb48FURHWDo17sZwK",
  "key17": "553kzAMJsjDUr7ki32SQCmw7tyag9ooDbXvhWKt68NvePbMR3t2meFZV9Mazdq2WL6uTTfiJKESuJv1hNf95ybar",
  "key18": "4Xqate4h38jXjkm6ovgwdYwF98qa2mUNsV3dh71PNySoR8vbZmijt4hezj86tNmjnWJSFXtPeNcskdSfjiuUp4TT",
  "key19": "bdW3Fg88HZXZmba76piKTpCLzE8oPpJUhCac7KLepUj4TCW4h1xkQpGEatgRpawUGC8W1YjkbGkWRT5VqtR9DtE",
  "key20": "5EZ5sufMok1MCSBCp31VmpNPxW7Hx8Qyn94Shv2HynKwTXDSduprZD15zbocRScNiiESJn2h8haxMR4y9MdoVuUs",
  "key21": "35XjbZjPc94dif4bqdhaJS7XxuLyMXa9kLURLXRyRVoBMrFFc1GnWNjPS8xKKPTzCCvBYURACoKsEvRALFbQF236",
  "key22": "p7nrRqEf8xpX8YQzZS3AdzbATaFeNrAZoEuP3ngRYduQbGVwx9mEaoziy45aG1AJRDgojjm9JXyrPdWjjS271Po",
  "key23": "5jCGd3c3ERREZRMxdC9YfSvNWPsdhGAkoDnjqcMNwML6X8mDhWFWe4PpKXQoiNe43HBraeVkDvQPNCSafwnNpddP",
  "key24": "25x249Ggrnih1YxWxgzDuLWPqzaoFALgSfVf5XSsvdBPQ4vwn7h9sjej8fwMMWmVsqo2g7wCZZiRoXq4MKJoUeZ2",
  "key25": "2H3T8PQgHfDasbjVZnoCQQiAVTJxFeWGSQu3KbyJMN5REnqWf7xDpnKeZY5fPVRhy7YX2scL8KYLRnQjxP8CcVb2",
  "key26": "246isRd98Y3ZXRSeNUCbHAQB44LMVH5bGpsPNrJ6DpYT9NHJVqgxiURQXoDizEnvrMsY7hhhrhmU384HW1grRvFT",
  "key27": "8n1J37FPnLPn3pDQ8WZE3ZQewFVhLg8PLMVjuY9j9MgFq5Lp1ANTWic2X5yYC4RAixXftrpBVt3a5oNDuJdvaJt",
  "key28": "4Vr2jqCk3ZeH5NQCUC6iJ4gETS1mKUBWH8MQwSLrxUDVTfQ8qNuVY7Ezajg26NVgf1dZUXaQGTsLHfENbggL287r",
  "key29": "3tdyWnD8grjfXxxJraipKwcTyMUQZ73Y928ZChAcabEJQoLBsoehxvmafsimN5Zb8eR7ZLAuVizMqQ5JNr7hrfhe",
  "key30": "5uxUmuSroEq1Xr3yEH1aFkQF1Ki7jFn7rUPdA55ybZu6faKQWDtHqR1e6YxHSD6W1X6qt5D2DJM2vaFvEMQgn4oc",
  "key31": "4TGk2BuY2TaL9cNXR2Pe9vmor6ey6yCGPVQssRiDhY49v9pZK6H9fbcZXwHz3TgZgWTqgZndkriK5XKThtTmte96",
  "key32": "3ffxj3R1Rz2eQafetfrEhbNh8JMFEY3o4aG15VsjgZsJxQscE8Awcz8Qsr9B2Zf6mV7Z8BaYgmiJVPRN31t8Zg21",
  "key33": "29KdTqNcLBXx4NTc5t3pdLC16bX4SZtBcxNQtTLiVdUoCkdK8bchjTtTTLD5kaQ6qqu7VXqfHeEpg5uCznNWpn9Y",
  "key34": "3emj8gYpWCySpSTDbfbwjX5P4JbnvjzQ7s9ennz6PyzLVcsU9RJXqWE2WwSBi5aKHCgYgihLttQFWCrEJETgVxMw",
  "key35": "3wAg1NcpkJqPTWZoroFF8gfCEyv65XtWkNpsW5y2yUSUg4rW7wRVAJzh8TuoQBHsQuJvTDqxMGjSyt6bqCXMrSUf",
  "key36": "5qkbrKtQg39gvAhbCfmpKuLnPNqo4ca21UgCpukzAmGXYJn2aPqzgTQkFFD1WRPPFbBXUDGKWmWybJrfSzMcemYu",
  "key37": "q1Zge13rzJ7EixWwgKYsv2eZ3HhT5MKu9ekhGmQXTLwL5CxVCFYsM6y4YLswTK98KE1bqsyrFzUwdX3oPrvuKat",
  "key38": "4wN4TbrXhbn32ufGHPVj8hWV4SyV2dx3KULsLyMwMocfr14AKvKVyNigCX94HBT8NL4eSR2oVRkRsbjw71JSKfY5",
  "key39": "2Q5CWDEuhAQTFau6bsrJjLXQrN26F8tWeCoxFqA3mSuKef7Zm1DDxa8mhGDnrEt8qFkVY5JsdYLFKYqeErNWGxpg",
  "key40": "3p6z4kUTTNYYUYyycQG5chmbji5c3XC3CQPQyVzrvyfbpUq9nBcHKAaZV6xgD7xCEwWV8EXByt4tismHR51r1wc8",
  "key41": "rmTc57kNvs72SVwfXj51KxC4HnbxULhtTkdNxepjJX6QNT5Abu9CARs1315SgZi2iL68Nn9RXJmepYWekwYbfaU",
  "key42": "4a8iSQxrnvCWKq3me44wA2TfFa9iwyMLnf7B24kUTs4HkqfSSaKb83meWFbUZyHLN94b6HioGUzedFjw6v6cTYaU",
  "key43": "4SfTsPCGVRSsSh2znGBFVFbWPMwXHS5JFqsegZisX1NK11u6RsndtvaBkCw4cEj6vtd8xMTj9vEDRYPy3rFz9M5v",
  "key44": "4VoHEU6crvAojaY4NgKcS1SpDNEwmKBG3K2uDVTJsjajeUFF91a2VjjtRNUPTDLXd8qA5UnH1bRhxLGjXr6Kuyn3",
  "key45": "4ZquZThK7YeBwvCFw4p7ZJiAmxiAGHAnDweEaiZAR2VNCjvfaF2pQowFMeE5EXYc9M4n3XuJ6n5WHoe3N8mM5Ezv",
  "key46": "2UJmP7qNbisD8BfovbvKjRtpuRVixXjVbW6ZkwsYVxEr6zyQmBmQdLqdxZsNALqxLWpe233N2F9nyPnA9E61arUG",
  "key47": "63qn6hQp6c6HqHTjCTYvQNQwg2S5y4P5AVa2jMwS9smuoyhjWsh5PHF8s2nUwk6GcatSuibD7JCdUMLHkJ6fKkQM"
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
