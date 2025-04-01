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
    "4b2DbecVGn8UxnHTsFcJK5YTV8axmB3UcNjtB6QkzPChshyyMuM1Kz1rotLLq7rB3sKZKbgEjE1CFU5Gk3WpR1cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hSsVuSNHtt7gH1Am1YwCgjfCZtca4KgJw81Ry7BS6gr1jtcN827wAwaxa3CjtgFcK3Nz2n2nHTN3KAWxyQHTChn",
  "key1": "5Uw2EVtanyWhm4MTSmmW146Y7dv1PGd21GZRqhMqrBRZAfhAmgxCgwZ8P4aSbaHVpbyVN1UuoZUJHDsAAcDL1A1k",
  "key2": "2n2uiQFtNHJSkXcoZDQpoqS8wRg4s6y7NGZaDgo1ydcYtSNayvHb9pGriLuRXdWi7qHDfbb9QjbqM3YYLYW7g8pv",
  "key3": "UNAqSvEaHU1PrvADSfmddcXMPPTNbh2jyGEFzLwF7UxfhHdmTWQH4fr8eBykBPSRVDfqZ4CgH5BNnh7JYoVY3nD",
  "key4": "3psmQ6zsgwNywam8HpXAmK8xDAf183rc4jba9UnVVcPiKW7oktNsvuZxw2n6Q3s4nuuxGzVQcRBXFnza1YjaMEW2",
  "key5": "3NhqHpYw9uH2cgfC81GpbBzaEW1mJ19uqdVtfseNdToWYznwRpB1RRZvGRYDN39PW8r8EJU9gUVWeehkd1tyFYFV",
  "key6": "gCLq6FnVG4AujgrzEwTQMnTbps1MAa68AbfTYYQCP7WXPuf7gMfZUs5Ax8fcoiwa3Wh2Cqm3917wCn43WhwTmN9",
  "key7": "4dT4xvpvdiPcxUHEPpwc6nyszRwBBxZsCmq6iiqfsuG9pYfnJrC7YHw5cK53rukYisUwxyx8Zd1azbFio4kJjKJW",
  "key8": "4mCEokGrMb8VnMfv1TJhzNizGQWQosqQboqCfhnctyzA5yRqcmpFuaz48mRMhZqrxxiyaFwSLV7iUd8RT3intfZF",
  "key9": "5fnuafPpNckc1KZDNhM99LHZUUE4mpZ59ET5FngPxNjekL6UMbk3zVsY2kdXX5XSSnZS933MBdazEQyUipCmamUW",
  "key10": "3GtYN4tAfpGah6JSr9hK3NpffzBdFeJjxk6AT7a83bwyNYKXTv4YTmWzJokgTyH5UTrk6jtthJy3FFFTX8MMW7Zf",
  "key11": "3nGmDFestFFTBTa9cGPc8FvReWGBEpmPkS2P8XfS4DgoRLUqHb4uahnb7aAkuTpcch4nrBjnRKUzKJxXkhCZVxnh",
  "key12": "B8iQi74SBniyCWywhXZq55T8JDehwibFEZGR4bes9C1jSoN4U2gE9cMJULApyQfpSq8T6o5qwAj36HvqtAEU96g",
  "key13": "4cdz68dsYbRKHcUqz4jKPszJzejDsT62LK9S9BbxP5u8bZ31w8ZRx5wrjQ1gMxZ3HjyRnw38ti7zB5Lky4ACQkkY",
  "key14": "46uFoMV81gnmeRNShBwDDCy5EqvBkwope2jMp89BBATN1p46a3BHqQHwPxLDeKqvBDhaSUNQiiY8mim9HUziPCWo",
  "key15": "4VoAt3FBYWMb7PJXsnLDBgjM6HfXcBgFevYthu2m1RvKZytmZv4jvC4bBVQvaAsz3djDdgnk8skpC5mDyzQaXK8P",
  "key16": "t2VDjydAk9NCKtxAg8zs37QdvdPT3Jr4X78kUUGayAYEKR4aZQbBDRmEQpNJZTVWWqqdJgZgFdAVfZU2huHBESD",
  "key17": "z15D24g1cHTAryxb4tu6WfW7S3YyuNCuu5n8iYpxAyNYstSSXDNwVDvtgSsGoVc1dG2VjctgcnJoMo5HZmywkCw",
  "key18": "3rneqxByYwPDHbEGTtmsAwWV7f33c9X1s1LYYjuAJpgQ5xdnxAYJT6s8PBX681spw1o5TckTUu3ri9NrzdHMH7nT",
  "key19": "3bBtZVAJNoEFVB599BXpZNJ73aocSVJbNAPB1fXZQpxYhTqZy5H3wgH8DQbeyW54MhJwpQfQ4kQ4G7A6tEF1jpvR",
  "key20": "2pJ8Gbb1P6pFoLm6iH5Hb36KXUqq5fjBg59y6GQKW6ixjx3G8qpz48QsVj45acn9QKGw5jeQhhGCcspMYrxgK3Vb",
  "key21": "3ePU6wWNBLTjhc3LTkmhcpzW3U7nBFB3UE2N3LDx28KNbfWq2Kp5hMKB99fcDYnvMZ6K2pfNTY3syQkyAm1WqmRQ",
  "key22": "2haWg44srtD5E7McGKevwLHDfAknheJrBtKoescCoCK9hjma5kr1vxWrJTLrjDVVd6RD93jRMcd7d8eZra8qxRso",
  "key23": "51D6dGTwfcW8UfmEoQBuootwgGfa9f2WCxu6EWL6h8bb7qC3BqLJ3YPtTavdb5xgr336B7Uywv9nihcWHi39c59J",
  "key24": "5q2Dq7QqbbZdPJa7ZiczBNXecmhYLYnMQHYQ35xPT3M82uW4zH3rxxgiquWFfCViWJRpxmXvRtdJ42WyeKzMuCjs",
  "key25": "2ngUERPa8oJLb7ANLyrBr9CsQ6KZCGaduLHSdCxwJguiYapMtRNPZnbFh2FWQjusV3U2zSjWN3vLLKx2gXp9T8ff",
  "key26": "2LxWGKFqF8QPaigjAuszHkJ7JWpFSwPU2eV5qnmCeTeZ1BaoaDfHdRdbqB7NFTUnji2hezMbuoo3TydPArYgfnHk",
  "key27": "2CWXxuJKptSa1XakjifxQkCSGzfym6JsBjGHEkchxruiGWQzMsqSP676huTfDzdSQTgzGzRKK9ETwom3Zc2eUTUR",
  "key28": "5t92ZVmAFrT3G5iZBAikpzaLH1xuag1nWxkbDQrFZtM9esgWdLvJiLmERAgvsZPVoS8ranSQoPEmv5y3REpKbAx6",
  "key29": "5P5FmyKZPsbzKpFJvhDamAdN1K1FQnVryp3ZtT2foRdSag5QaBN5Lbx6vimHRvFo8SKGN1ZWCgcwBmRhAR9pNuxg",
  "key30": "2ViwyPuPp7VWaPRSyCFKXakWFxu1X7JgBc9vxhsd6QgZKyavmm5FHEfcruuEJfmxhiGF3Sh1H13bVw2BVKXVwRRN",
  "key31": "mMq3bCG8J6DKQ5muM8PU8ZSMnMXXZT6VCs3zVFz1tio4vx2defkRfQJdwpqWgh26x7JppY8XV7ERUwT5kbyGb1g",
  "key32": "3KbKAMmVnq2ZZWURqjWEVgtiGEJoEpoBvpDThHdcU71Hd31bNcN2e9EKjJyPT1WeEcHqgo7AZmsx6fBHyai4crSS",
  "key33": "5Rkce7znGsN7aoxyU2A8XoYL4V2jjd1tJ4Mawhy61ZjemqxiDFHqxevYewxcVpefoUPXmdFsL95JHAZULYK4H5pP",
  "key34": "4VmGaRnYUu5iP9Xoie9NtLLrjgbVtME4kYnrQHxfdioQgHz1tC6FXwdB5SM26AbTek21ZyDjPxWrQSgExM9C4oFf",
  "key35": "4FZmJh25u9w6xMr3NoiWzA68KxkVFBS5cBCxNcDQc2JxotPEPmgjRTFt8Q3KtWNcSB2ugyoQDdNhzEZ6PhQK6QKR",
  "key36": "5md7vKyftpBNwCH6T6PHHXFoiRrZQ8zPHvgyqtR4a15jpwiLLxRc6D1fZezg8nZAEJPTHT1JgQHQX7FKqp5mHQy9",
  "key37": "2PNiAvHDNEWog3QN7bmhoV9yiRE9vAsvFG6ySGfB2QtgE7qUw5vVY3TxK9NRbREKkNHsW2mDp14dWrxwCgitEgkM",
  "key38": "5ck65LWgw2vdeZ4ubaefRhSbXBVVR3wUXwLLehBHRrUeMTeMRg8vra2ZtbNtAeyhKp3aZJwKkkjfXN7VR2ULRv9A",
  "key39": "XBCVk6asZ2hSSmo8j7ttedTAfU3vzGgdHFTYKVpquw4dY7jwAGY72MBkCZZwNJfmCaY9pXekCsJuFcayHhSYnos",
  "key40": "3vdqcf4N49NzvPsVCFx9zVeJYPHRA7B1LpyfLwjUkACwddRoBQWxB3VXR2uxSAPZQeV45WAiLMpeRtai73JSQRpz",
  "key41": "2Jmtgkks22GyM2K1hnGEdYurcwmPKjPuii5P4uEDmrSb7xRWEohQfgWaZ1GsAsbf24ZXtEU346Di35zooeJLtjLk",
  "key42": "ipuVguyxvyRfA5SDvM7GWUZTNc2NYPBB6XAeHuR6d2dXgeobuyVgvJFL7hSvzc5eUZ1VfSRoh9SwKwo4xuJMoRU"
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
