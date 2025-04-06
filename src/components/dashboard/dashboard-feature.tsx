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
    "4zjWRZpoExSuj1658LRh4yqM7KwaciaSYqry1L3LAEcHKg5BwgqntHTrF44Sy3arUxnZGMKmc1NSp7v1ks79P4m8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y2izR9FFMpSVThXpSFfeCxudZ9hXQGQqDBcRahd86KGXwLxi9hoShAijgu1vGxWtY4Jh9HMK4iFvxKJsNbjJL7d",
  "key1": "5xneFaT6JCehrWiZ3Edz7ki9EUcittauiTTL1EkMMQNsJs9er2Z9SrqXb6UvaP6LD1ZuCX3bVxFWydkUTGCTvf8S",
  "key2": "D8wGDNxT2vUru3EH9GTL3BeK4MY3Ysgtg94VeX16tzCKjdK7muSn74DhERushb1gSVgNw9jc9uAoZKHK1VdhtCR",
  "key3": "3BCDTELtgPf34UZuemh8rwyvEBjQTt6KBepBuXPPbgEX3LYEyi2GhcekCXAyh4Mtvni6BsFfDy8yeSSihtZo8Q6m",
  "key4": "5iFaoyHT5zgzQqLyuJi6snWeUS2zXw7UnXEdYyjxT8nKF31yaEriCjxcTLG4HtEw5TDTGiXTAyjaejxEt7V9RqNN",
  "key5": "66GcoGecEMgi9QnHh1qULustvkAuA5VJiuHYLbqQZ2KHLDVKFU6CRFUW6u8WVsMHuQDW36h981kr3j8Y4GyNHqSs",
  "key6": "3kDEkAkMyZDTCf7F6RAqdMAy3GvWByKqF4gb565VPM3AmZYat7ucUQ6t1hie7AK8x5kT9Rpdf8iwbWedVFTecfeE",
  "key7": "5QC6gYMofWssoq39B6vknZ1fUV5yaS25JC8XY5QsMHsUVa36rpiMFRRSpEE5JTDEf35HWgSPthArDYq1EHMTBcD4",
  "key8": "3ce7eDW2udo7WZAibhe14j6v7bhEheYxdARFGYpehUwS2pEGg3Szq5fqpbBUN35Pj6vLUdhRLxA3oGtpugH75PhT",
  "key9": "4QpSmQjGBUCQr9PabvCcXapkB6dLTu8jvh62QedMKCMPBYZzA56XWgoQevdekJ2RQJTSbiJh4Twih9fmbuPyxghh",
  "key10": "SxRSwPH33q7iz8M7BiwN8PSXbk2oT9AW2EZ9AJtdFuTFddyJBkhdzdgdSpBkFZTCcC2eSWxYfXvFH2smAhex8xy",
  "key11": "2Ck2WyHu2skHJL6ruwGWWzQ2S7HXpzibyspscWgz6F5ESXY7675hoFVjaepKuiNDp7UMVn8q1fZFUbDWnTZheA2u",
  "key12": "4YFjcHXp3XrWqeiEGi12aRK2rCiFRf9SkJXn5xvNW57WfAS4NzF5vGaf3Pnx2j8NtT5fAtA9679ATzruRUR9ZGLz",
  "key13": "63mccvJHJDsaJc5V7CWLAcVDBQCnPRE5hLBZ79phpe8efJJn4ppQkNQ2JfUFuaeC9NERt3m4tnoCgUacEmX4eMpb",
  "key14": "2ux127NNA6HtAUH37wEiYBC6wnugUW8Y4hZY58pnuzzMyX8iMKGgDRwFQWqgnZRQ3JGhaNLxDGXnF1vswuwMsMCe",
  "key15": "5qoy3SFaLo27RTWEJVKLJPKzbyTb9531PvR9uTaTbo7mhGjX1W3ZcnyP1YYqT5A16sAX2yy9mAkLPNYwG7YCdzds",
  "key16": "2a6G7C9U4t15iLHo2r8ztJfbGYPfBpAfyASDr6WTwNTAMNv9xzxcq5UhxpTuiM2MV3i42Be2yoghyCGjpnTzLjct",
  "key17": "31njkiGPUtj16G1jS5W5D72B3seVfFQEjCWsFFSYBTV2f8SHs2ddfVxHad5A9xcStjUrnQc72CovSU7LKgfFZuaT",
  "key18": "42T9EtKFnbCaTQ4mTEkjbaXsikEyr93p7AvBn78C7Nwv1E7Tmk3pXZnxNY2TMZg8omZoLuPiHUDtjb73diUuFTHg",
  "key19": "27WJ4D6JLXBdseJyKjVg7SvSGCXvzmSaAYz9CqHCxnRKTaUkk8UycCEKC34tjRzzkN7nNehSun2oHurMyFgWm1Ax",
  "key20": "FvADxg4coTxFf8ewyPTiajs96PmKkw4YLZ6JTTwbyejSiMDS42UEDNKNK4vE1wGgLzLYRKwQydVzCaPKLMGYkFH",
  "key21": "WKCr4xPYrAivCMWu6Mfvm6yLp4rA5ZVhFKrwgkYhwsetfUTaCS7NqW1CC2GB9YFwcT9hipcBCr4BRaPrUq5K9mi",
  "key22": "3CoJZKbWFAgKyojEi7mydTrqDZnNvVP8wS1iNQ9Eu5fdcqjHXfgqJzCQgywdewvgPYZBLfJGeSU2AC7n9fs2CZtg",
  "key23": "4rzv6FrFN95NX5QoLmjAN4ZsnDoE8Ya44u3kRGWBovkomAARvWTho97FKDsJSKYzgbjTQ2e1Ns3Uz7zmKA32Dc5Y",
  "key24": "5CT6ZZGyeBVPZKPxWSvuGWsBHvdkZo1kNLH17wijWdVZCbd7exARwNzPxtmKVwe6e9fW73o3sqNgNb7rjCJktfj8",
  "key25": "5uCrzH8bHh3PAXLY72PRGShVRdDgZn684BmyRj8NZ7SKrAUR43Sq6tPkB2iK1Ajzmk52mTWD6hZmFdEMKGEpKJ53",
  "key26": "5jRQBdFWhc6KAzuQr9AmV6duUpxQQqPFiYmPYUfAShjMA5F2c4rRFSVX7BUkw3UhapT2wBGDkuFGr66nWwAirGge",
  "key27": "4V6rbdxBSFixosx1HxURJxCeCXwZnWEZEJ7jEdqAFkne4RkvXpygQHhGVddJ8XLFDXAEjxfjidRdwuG3k2bGn9Tj",
  "key28": "5Ub9gYfbbk3yrTQitSjnZKq3jgeTgxnnR8PLBMJvn7eL5xwW6BnFUKV6XX4SsApxKLGarbuUuJyDKMi724xs4AKp",
  "key29": "3JJKo7QXTD2bwtYzEwxf6bcuQ3qRasvha5Y7SV8boADTjDBtCdKCAvQq7zvbZQpeFr6hbkNLR35FeRzjHgKMqVxa",
  "key30": "24QfehL81HPzdKqKhNPmU5KbPbrY9JNnRK63wqcNn4bwHVqUrdUSESpm8gfdXCS6ztALFtQygsAvxRACrGpk6u8U",
  "key31": "3feJPwoYUFWv56rbrwNcEvkhhLJ1vuLGpyCRGE2v8KmUvxiA65dFh1BmHNmCcoztU4r6DT4stpi9RVS3Bn46HNd6",
  "key32": "7vRbSooGGnhJHXctcb1Q4E3Cw9UZFrKadwHEnGbG7jmynfBgxAPwEVh5dfpJP5oPEUJC3m6nf8TzkKktiQLKUiQ",
  "key33": "AG8GQAnLAichHTvR8w32cp7WmqmuZGwP6DGkZuTRzDo2sCAgkbN1a8sXkty3Zs8wukFkyj6Eu79L1HHNWt4uLfu",
  "key34": "5XfgEccVTX6wWJdNSCXftLarXvvH1T8Dd8rww3jxUTDfkWC7WzKFTcQwLbiqffEALJrxYm8tZFvkf3vVntzL1qAN"
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
