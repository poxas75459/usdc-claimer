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
    "nbxN14jsbHNr8cPHVfpdsv44waCXm8ifXH38vihWr6rRn4D5u8cP6peDTMf6Y7xhoSn4cy2GEngebdmYtFYxrfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HueQV752GsMsd4pBPm9m1aZxy74XA6FtqiCNUFHCkbUXQqcMVtdGAyVCJNMq3H3uvggss6A5GzFx8FxJPtNuxfz",
  "key1": "2m8Nt3h3vo6AJvYL5KNLC2MB7XiH2PZfwvS6eAaMhJ994LSyHSk62634ZeY385KsWgz1sCCZmuFXXuyzAHYR1zhN",
  "key2": "tcGPd9LY8pM1UXKos4pqUgppiMxsqUnZ2iAzbaoJY1snGQ81YLoGQr1MQfjr88LQr9sDvheGYuXPrcg9DP7r8BR",
  "key3": "4GSTTFYEGRDNSFLyCWtq7DRSnEmMiN2ew71a1ikwLyRcNJC8aPZkBJNbNpDFK4CvmtNdQP5y4ynHn7UE7gxXZxgf",
  "key4": "3e1hjWUVhhCKC8yvzCNhh1kz2ze75Ng2VEzYFag2CARuaHRBAtcWTAGpGaxu72KtT7T9xZQnmQ4uuUTqxjo4rET8",
  "key5": "3fq8iiVdhetQPExMuwZMbP3LUhq7Fy39Dd47UsHBVurTr1P6WrF6nY2BcxVahB4JHs1KoqCU34G16CKgsucPEbAc",
  "key6": "35GMKq15niMHMy1SBhuEbnTW228UsJ4Vskv2FvnYgQ1yNdKfWAKWxq1SBcSL6AiNRwztX69hbdnJTRAfcFpfKWsx",
  "key7": "3iZWkNRvBCFysijreueFaJgs7utNCVTN2fvzTsCvqM9fDQcUjBiq2iP3mRXPQH1rAYAQ1cuU9gVcDXhAqnHQex8z",
  "key8": "AbmWbm3XuUy7o8RdqW7HXmA7jWtiRrLGCn7ybi8zqvLFqio459DFFGmcobCS763QsrPPR319bqobaGjRUEUoQJE",
  "key9": "5qgUsrqGTihEb1F9TXzgYHQRywBYkoNLK4bymajRS5xRZyA5u8DacbPENXpHnnHGUnzFUHuhaNMp74vmtkHtxTFm",
  "key10": "5UxrPW2ApFJSfgCLK3bjNnGAM6YV47gZ9vikPeiqHzZbJSGBgVTLusNcxzQoXoSnCJ4jhihWub94H6kP7auP5r4i",
  "key11": "2jVT2E7KwKo5fgm91pQENS65m6kM47ZjoZjhtQV6N6GdrBcChPShQBEodtCG4FvTfikYqr5yVRaij5aYvZc4dv1j",
  "key12": "2ykyvAxvnhJqYBh245z2ZUAwvbVLm2pjiR2e4FM3Bf4K1RvGZ7mMYxLJhSPp2J5iC5u6CQj1xV2YoJMRXhi7NsR7",
  "key13": "YdCjk1sAoMhfqse5VGd3v3gsNwAcZ7Py2kzcZwq6Sn7ArbjWKqx4foF86UpvWJ45s54CgX54x27DXavh3QAbbmh",
  "key14": "2AeAh8ZrhHey6zN5RSCKLZbSSa7JWcSbewb4EXjY6Cd1TiEc1WdpqSNwD5GeuZZXgUQahwDDbAFzDYFfsBCYsHJB",
  "key15": "2B7wYewZB5Aja22bpVw1MgjqQApcoKWihwyJ2Ytz1syYcUhxCQi1KTE7MKc5kdVTwFazXarwyWMzMkXAXaqUYdnB",
  "key16": "49gPi754JpdtsmDxy47kqFiPGnWj8pRNN2np2aaDb2GnRuoYnEzZyZZ6UW8iQvDY3HM6es3cpvZpFZtcokrmefDh",
  "key17": "3W1BN8CqBBShUqq9AusJP5RFqKaqGyvFoERZ6BkfEfRKxpzGUfQVo6yV7Tiv4DnwZsy9QoUpbWT5WHKAq3xgFgsw",
  "key18": "5MKZGrKchVPD1hQsu38JTxxFDVpRTxRMaQF26n1wEeNNqizDZ5h8f1PMFaBhWoJipbtpSydGHEExhh7spCqxeZKb",
  "key19": "ihA3mN3b6s6rfFiHDoPqdso7Xo5AwtuvcYVnYq3n3YTkkghHMBhD74ynK5yQJDj8Mxmucu1FjziM1DdtTkxvB7X",
  "key20": "5tkCJovt82icwAPiQLg2HVMyKgdC91T19fPQm1N9URJxcjP91FYb6nxvpdAnC35etgSFU1tG2cKRwEp3cPPsoYXt",
  "key21": "2McQXeg2NmZm3tUxCdqibHSDXTbFXpf9QpRbzEoA1d5FLNK45VGmJjMyBjCLP1C72EGWB7EKpSmC1rXFRE7j4SaV",
  "key22": "47adCup3LQhSB4uCSLxEeGHtw3R8WxSnrFuyNY9UijQHmkbVAb7MC3obU5kyfWXSJ8JyV46rRJKZEc3T1tgER24t",
  "key23": "2xLLVvem7K5VZcq7i4gRbee45bF2h6CkBpcnrDr75iESRbU4zFLKwspKGTstVez23oTFKtdjoeskt3PjPKP1cnZ9",
  "key24": "5qapB2McfBM8kRsV5gq1fo24D3LtWeZkXdvcQyaYiAcfcziprdYznVbcEREASwabnujFrEGmwwews4nFarFae4Hg",
  "key25": "3zRCGMQQpGevoY3qXGyNwGQbbA9L9T1j16e8mHSqJ94HFqHysYZYPcm3F9x5ZyjAG5zPZJNEGHhUfq2AH9WDYmFn",
  "key26": "4FBdSaBKmcqsXhsaaryomj3K4DZgT9cqxeaRjFikbcUtfXeV8ebiBjtz9P1nnsZ7MLSH6aaRaV6GDGJ7YBYnm92i",
  "key27": "5EGRdiJgAYbEWZFmpaWZ77kjgG5p3LdMgF3ER5F9sEWnTCJHKR5WF3EEuwhTVFCtYyLVJzrxaqp8rwxjbgYCPYpi",
  "key28": "2HB9zgHnYc5XuZ3faQENGTT8d6THPMCuyUbQxoUPWQqmoB2AUXNcpjVJYjXFea7czVEAnxZjaUMD34ej3PopobME",
  "key29": "5MFf1DP7bUHgWuaWVVEr3xPpxR7nNv6xNVgVaTpH6nN8UBZcRBzt9jre61WaGSK9sijfyNYF78qvD8iNdeX9fE3j",
  "key30": "pPhHsYnxkoGwSJSxUBwLqEMMmHzGkPgFVnr4yq1MPo1TEQcjGCJ7uznCHwxA25o8AqL6cowVJDoV62J2cvkHvhJ",
  "key31": "41z7N3LQmxbGDj6JaPaamusft5CA57ysX9B6ph7hTiU6frs7X6UWnobmoqTMTyqR7EY4RsRRiTouNp4hdD7R9zWf",
  "key32": "hmTv1P7iQycWjSs1jePCH98Qjyza2JdzRP6PRp1Af27ecD2p755cJV3k8ue8Ns1ezdxogJKG14rDsDVfgywtW6B",
  "key33": "4JYUqBzQdmYE4VP9QGRsb7WhdRNoaKAGrTNzt3jRCYCVJ9g93ioHUS6C6v2N8ARatzdrQNQvcXfmvdhx97yRn5MF",
  "key34": "3DeiKHG8wpyp1H2oKJgfq5EdXUd1i8uDP3tK7i95XWdw1YMtsVz7oVWCACAeki5BpABwD5ciAVmQNsH6bNfpDcUT"
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
