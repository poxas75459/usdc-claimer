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
    "jSvF3q8X2cEWiFCVTD9cpLupRSbmDcTzd1nKEfjL177xjWEUdw7hBdcDQmt1FpVsyEbyK9CveX5extxdrQQJFkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BHjwWnGJ56RmXi33J9kVkVPURkw5QYjwotLAz8pSaQPUZomeS6J13DfzHDC79UpQz6mevHvLjiExF54uP34jUk6",
  "key1": "VfnTQweM7zx4YGcRUekXQUYF9RVgJLhWnxt5PpmJY1wAkTwDpUkC6s2tdNrPjCu4HkDFLPNzvbjU2DNFsv2xTsj",
  "key2": "5uE8rQBrD4rZ6s7vfhB89wPa4rww1NgWwYaoT27t7uCC93CoYwobiZgCXFhupyjJabJRMJUeKNTMvdWaagh65wiv",
  "key3": "3fxTRfcr6pzeTJwL4spVfz3CH1zCxpeou8qPxnUEVEgvspsp1TPAkex1zVgeR68rXYi8RzwiCTLMFwuDR3kfiMSY",
  "key4": "5VsqzM3RpVXYHefucT7Uo6HbY4F8xwZRj9qBTcApuiHxiDLp4Lz8o8cGUU8F3mTa5fJ4knW2dSrNdKJG2C2beERj",
  "key5": "5rvEG5QxWwCY9EhpbdpPPW9SV3pyzkobvq76h7tjvD9YKDJM8StwWTLv7QL1o8aKZJN5DzhCe8Vs1VCt8wH6Xx1E",
  "key6": "4i1yEmqCZCqSn7X4FzyCeUq9EjfEyjjY339Zrcig5gAYcjTWPpoBh9m9ttJJnCzFYH7SqcWyHyY1Qks1qJwnVpbr",
  "key7": "5Xz4RuwqbVWACFsJNrXbVHRgGQdyL7GmguwNgKvpB2zurZTYqUDqMc4jM4QPb71FxmRrV4i82HbGQ7UXLX3R7Quu",
  "key8": "4SGCafnJqxonBX1QZi84mcarUq4QtS5N2Lhap7vRdQbUurBvmQihwAXrrzpa5MfGZtqz18uNxWkrMiiLWVz9jptq",
  "key9": "42v5yjmeFuSb1MQr3UKYp2iywm65GEnWY2qU3FX2xbtzEj4jXK3h4qYuKFEzbr4TpS7JJceYuv3WdTZHzc8UhFKS",
  "key10": "6v2zcNnaxA214jf1CbDGd5eND5n9cP9AEnWghQUv2GjfPMJUTLvNX7kkSJUywTUc93gcn9TTys3yrpACmCoSAtM",
  "key11": "4qmh9YYBG8kMJMk7q5jQTnouPFpEJd1RpAuwqPMLGJ55KmWHt9wQzWFkHsur1UT4FKQbQQ1RaemBwKHtX8mves1Y",
  "key12": "2CRJf5ptQEsUFA5e5WSRXVr1txqTRiJikZRadZoPERMHpxwbkQJBxuF6Cp7nJ7EerpbteGrthwRAN6oNfD5fJKav",
  "key13": "5Mragj5CNgX2GTEVWWD41pSDmXCJEdkfGQGAiLDx7EmqMzmeskqpPiYycbGbzScoYYmJda8kcJGupQpzaXg9nV7q",
  "key14": "2yuaf3KxnyfvaH7gzNTLP676t8X9rNnQjDCUbutshLei8FhCdKD25V696RMJ1W6Pu3ALHYtm5CZ9T5Eyjx2Hnp8k",
  "key15": "5hFAJUA3SN5bLPzF6QF9uTtnWLNEYVXPfZkHvD7cftbNqFN2w3iqmxVNpkZLFKv24LF54ZVmEgeQHg5LRHJx66SD",
  "key16": "3EtgDTSSYWD6j2Xrmg9D45SjMrdCKySSTv6pdKQwQJRfRsqKubGiM5ZBxXwBt1VKfawtJ5zyAy25kcP5MdC65kRt",
  "key17": "3r99UFmKhqDzL9nj36KLtb9YPVS7vAwmKfxvSQirhKR6hbwBQMuuVrUqtPD9enRNL6HG7QNYV2XzwHzfPbWDbVsZ",
  "key18": "3WvGb73QNYsVnRQUV9yW6HHgWyYK2DGAHLJ1ApcWHiHyiAgXL9nhxbhE4foeABA7xXBziKR2Us8338yNXdyNidKP",
  "key19": "5zGykK8X3ZGUDZVCnuFGZDhEGNmyRbhYYiCrQeG1raSHXp83MpVeTrn6xTUV8CSfKaskwePTVVKi2Q2Uzh5TiHf9",
  "key20": "3SH7b6NHTGpWwJVUMAmjb9QyjrmYRyo7XBFEWrJzCarQWwbTN4T1XrJFWuNz31bgGNvqpdjM9wUyvsuDpLNHe9EP",
  "key21": "2UJ61U1XnCCYL1GANVZ56p7jCN8xbkvJCoCPRqiQ41mEzypYQZMifWQQ8aYTK1r93Jda4BntC7GgYFNkj2pLiKqY",
  "key22": "3DSqQqdyzPDS7novfgjzdhLVhNGfU4aEzRchTaMmkFd1aAS5H7Bamayu1Txv6Ltaad1GBW65df7fyn5j3DGgGMb1",
  "key23": "2G2Zc5RNtiAAeav3iNVPM8suyWjMkn82g4QQk99UANpDRZzhkt6SLouMWMkKdcgDvspWb56dbWtVys4Pe8FFv2bX",
  "key24": "2EKsVXJaqdgRdskEEcuAdhhYaf1aRZLp2GLiEuN4mbvAg19dMyL1fhR1bqhv3zKEBRnuqecvtXbKhPekw4hvB8Xv",
  "key25": "4AfSg3JJg6CQXvVxZqFj18VfvAQwL8C3NUhhWUF79Mv7c62Lyb2UxnwowDvcpgYCHn7sYDqssvoLXqFpLkbCamFS",
  "key26": "4RhuxcpUzbtnCDDHGzpVNirHCGjh81ARjzpMt7XCdLFyNWRJaudTFCRQyWJcsEu8pS3z6N8gEbmTodjy4f6zzoEe",
  "key27": "2y1btFuEYSnjV8nW4z1tDcJdQfepeZuimLbw8T1Vkx97L1crnVCB2gm1FpkWhpm6VBx4GtXZWhrm7CTipPeD6gvX",
  "key28": "5qkAnqjWTAhZzezSt8AE671WfMaGE2CdLn3B2p9LZ2DCF7tgV4TtVH7LnQzwcEmCmFxDuwVfZcfZYkmgDiy3HP9h",
  "key29": "5JHyEEUkWxXoAkT254DL2qeLHTQJ2DrkPbKd3D1jzZnLoNRXBux5XsD6DNQwU9GD2M7oH8WjRYx49SvpV2r8o7UQ",
  "key30": "3yyC74yJUPcvEwD356iANrkUD6WnmPG8mDVrq5kEqn1vjF58jLF95fgk28kdYYJSWooKEh598Ea1RfU7LQAAo2TQ",
  "key31": "4v6HLmP7TFFiJyNRaKQZuHaCsZMdgdEXvf6AWcbk5EoVYV3RQ3Rh232xgTqQzdkYBfwP8xNhEugMRkutcZrapbsu",
  "key32": "2YZ6bbN8Advq6Z6oXSHMJoL42MFQowgBjg5v1MrVgoDdV4RifqE2Zf3rUib4Q1K1L5MDzARd2864FsoppHzi4BKs",
  "key33": "4KLqnfXxn3pifErVBryETXUWov8f6zTcfLtt6Ajtpb2GXXdqyZUpHWYmWEszPMTVCHvF4T8BYTfLXQ8x9ye4vveT",
  "key34": "44TmRHcui8HmtYkV397KS9DjCfGZ9pSVXyUbW7x8M2xLySwQMTPR7RDW8nyBakovgTXcjhwe7rrgnSLJTQTuH8YV",
  "key35": "3RFvmqEoJu1SqLWnG1mKf6iU4Hiy2aS71VjjgYC5MwQ3VwTg4mer7WGDLVFRrcJjmUVwQ445FZTvF5EtvVnQJUFC",
  "key36": "44SHXyBV6aEmSioFTUuQppj744G6yczfg35ATnhXq6ncVsK7SxbF1L66LEFeAJ6CQWymZzxLLSgvAGDUctAP8pEj",
  "key37": "iSY412qfCuFmN7bNeZWoMNRVGJqMX1JEAE43nbK2gDGPZFRrRwb7DxXb6ANmuCATSuca5LiLVRk4ws2Nhjfrpwn",
  "key38": "wzUx56Rb3YHMQni7cDgGDvtFYtEmbQtDUrqnfxbcL2YMN2BdAhCbRo2PvrkfSEgvZC3SrtouHQVS6dpZZo3Hfhu",
  "key39": "3YgAZUFnz8HPUhygesVskR1FpqEBfXWrqZaMt8yEx7udVvQxdpetCEHWPtvGEtEMVDPb3XXeGYwc37YtS3kdJ4cJ"
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
