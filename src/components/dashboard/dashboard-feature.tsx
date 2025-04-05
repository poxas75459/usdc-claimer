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
    "67U6qUCkc3xrTnBc3zPKMZnEhKwKtMCN66ykcQqVdC4kUVCeuPwgGuhDgy5XN8uEZFrSJYgR9auiS5xkQmFTRVEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tSFjqiAnebLfC5X4BFsmzYQ3HNJNoGHQ84swTqpdZEVnx6vvEM2uLvEekyd1LuqZFq79V9Dh6zRNhucrrkidri3",
  "key1": "JFkgHVPpLtkNPxsf9JXZ6rhRWcN3pnaKzYreg7t95fHfxNhC5Z25hwXWdbHGpK9UXouVSXaep2C61kHqGRHQV6U",
  "key2": "659Jw5JtekYGsHv6t7TiQ2cT2jvxEAbzPPERjnH8npUuvec4PgfveakMhTjwGtttGkvomEoRLvdBLukbfTzKVe5N",
  "key3": "44YWMwjT7CiLsuRtPF9CvTT4t1Uv6iKd1CHq44HBVNjNtrFxGnqDkRdt8W6XAKXUYqaupJFBgTEx8hWfvaySw6rB",
  "key4": "2CYZieLAkBUCLuQ5zqPqjnr6y7bkeWinCmQhPo8PzghZgVZD7Va7kFdQfUqGjFbRUc9FvP7u6zuz3N3YBCZRkriB",
  "key5": "54o6KZjG8HCRrcnrkQJVcaVHVC21dR6qXmgQtBFHUDLCDoUBCURvo7smWZ6oidotxoRvdtpXMEkCi29M89yELePx",
  "key6": "32hYLf8yZ3Dmo23nEngFu9jJVLuRCmuVj5Yxw1ceuJvYVjGYdUFtxD3ary9X1ggYHQp32apUSXH13wamUGtwCuWt",
  "key7": "4XXAT3h8ayy9MDS137x2RWEkm2qdf9eXTXcLd7Dmo4A9wsv87kdSZWCiJUsWwmSmcBJ36fSzR4D2SrSSWxXAqTtD",
  "key8": "2CHhXXNaqNURHv4CXNehTVVVJNM8rRg45fDJabX9Dy2fbUMZtVxLf6UfEnPvbpas1WgLt86RmXUKXjXvDkKy5wAB",
  "key9": "2XXNt5T95e9Ged9rLNhCtZwjjGxiYJhZSCZ6Rekaq8cRDtyZv7VgQUjMrHdAyzZcEhg8BojS4MXM5DZPkyWRfkX6",
  "key10": "5gPFffK7NCNBLCuvcGG9DnsMmvuvbH83axzsUDiNn7TtfpQGrtJATwgFmqZRDtuFQLr2D3YUDG4BjGiy7RA7jD6y",
  "key11": "Syq6m1fNY5G2ypj8nEBXjPb4Heqr9im9579eQarWErTwk8YH1zQ2pzYtL8y2zEuZRwQSTaFuXw7RWsE6Tu9Phz8",
  "key12": "bFJ9yXE54nb4ZLZFYBpbbCF534Q6p2pjYWY1XLEWp4P7mQTqxQ3UggUbunDTyc8fJUxE7z75tEUjuCPrvziTzFS",
  "key13": "3F8WMLfJdQ5xkFwAk3RJTgWjCUeuDmyQYpfETmvHPP4GiDkagveaXK2WsGwgYnRMhuc4SNoNfC73F4wa2XcEm35R",
  "key14": "2d5K1XoSzfXzGWJGCpSf5zJokXbBnFvLo1RFFE21EKEqikAyUTzeUTnpiiP9rEPeogJ8vUnSbdHQ7PFgPY3JezzH",
  "key15": "GDkq9ZrRqhRsZ2yQLVKEJ536WwJGiwpXKie8LVKtU5yJJRzZr4719Sz7TQsTSw9rG5kpLDYKPbC6senjoVQrhfa",
  "key16": "4dK3VTEUnKgjLz4zXoEDRsFe69oEDWTbTCzJFkP1szMabvpCHQnnzL3NZgEd2Ujm2kLBnXnPCxx3BsCyouM77aNh",
  "key17": "64bmgvB5FmRL1Z8ijhwDSVcU5y2FU8TZNhF8ge7H1MJNXcJdHyQVLHKpf61qd9VJXSpA4yWEDx9xi5gtUHc2xgjW",
  "key18": "3MXouJP2V41RnLzsAiB4ujTskRocqJpFcHnwVPab4n97CUrjM6dXppHmy3QVPkLRbGsEp7uEq14LYL9zuZss9aWW",
  "key19": "5qgRRSRr3cucKvGW6MiZWWDNq3Lg8dce9o88EZsJxMJpsSgaZFsY2knEhpCV6ybWyvWaby9CAABmpqPjz1x5VWpw",
  "key20": "3ba3sLzjnbF64ZiyqpJREuehJPiuU9x6yDBdsf5xLaMgLuzHQHv5AkqQzDPgPCeFB2qSbQMuhRZo4ieekmPTUDn6",
  "key21": "2vH1KdHPRQkGaQiVSrUqrEj1vAd5RAv1DkytdnZGp5Bm2opeLdAMCABH2UpZbjxQYEeewNzqoTtcErg7yqY6zxD3",
  "key22": "5mMUBoxZzj9z6FcKuLX6vSZknku26hdr1hrBR8VxMo4gE433kqpCdbGaXRHZEKHxF9u4q4TwSckAKVE6oqGddDTx",
  "key23": "huzKbxvfVBrRrhh2S9E93aH87t8LZj4FQUkVhg6cxrUynBgutfR7mi6GXvbVmvf9h95fCurvwy5ksdUpBvYHbtN",
  "key24": "35RivqkEM59GHpdqhLMK7rU4JWxvbYxAKsy63fyX5vXPoQmSWPJBQaHLvPQAUd9nzsTGQ5o3waPTSc3ZfZhEeQm6",
  "key25": "svziyxKnqzyBYBsGPDfbfPQzjQ9x7LjmizcNzhnBTzb3TnGcX6BZSaFbcvcKbShjk1we7RtbbpgPpx5EGs1HQsJ",
  "key26": "3ceN2BZi1o65mCZaTadV7HFkigTMQwhE3XD98rLMc2bMM1ucvH21xb2H98gSHceKwQunpm9eQB5EjxTtV3Ug2YzM",
  "key27": "WcSAUdafYRzkYuyCYkysBYSyzy6vjvB2ZDsDw21TZmmUntGEpHLhiHydrPwK8nfx4ningezdYUZ5HUnCVZPzahR",
  "key28": "2KG4rZWycQiighBic5wQArT8Ybv79px3Q5NYyYD3p92tmp5xNxur15ZJV8qzGjwtPyresULNUpFjSmNW5UDhJFVy",
  "key29": "31NjdLnAJrZ25vcSPuBtcBxCoi1GHp3MVTDWSCvhqQTYHv7Wx61tDkxJJnkEsKGPBNP3pYNCvZBvwFUk9ERqutJD",
  "key30": "2bdZeTxGhtprFo5bpbsXTWFqdsghQJwmHvFVMELidNSJmNxcgKF1S8rQ85zoWNgaEfB7SQKNj5nXLSfPpm24f8y1",
  "key31": "2kEouruGHhwZRszfKkMftfKZQu9zqernqPXan6PfBs2nZWD5RARNJqeZb1uMhufAx3Giki9ekQbZRAYELu3Lyw3v",
  "key32": "2D8Gq4Q9htsak8Nf8bdEJSiXc7kQfzoC1ZGwHaZJ73z7ABdPUkmGDoETLaP2SgfVfWGB72ay7G84fVbQtR8cfUtv"
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
