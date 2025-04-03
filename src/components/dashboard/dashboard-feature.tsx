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
    "4BVg3HsPTCatXXoezFvNHi7MnZTXCkCsiYAqJZ3qXtRn1nJf2hAoosfDxcn8x3jAv6cdLdJejcR9Eu9NkiiJEtwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PyTpHPYhqSJK6n1VrnEvVPommnejnRXuztE4fdmX7ARGGaMErZZWfrawn6KqrSn6uohTuSEX5tF5LZuSzdfR94D",
  "key1": "JPGP1hghZ3KykboAUevj6UDiNDHjaiY3eA1WHMcp1LBgT7kwWvKFQQsNeGSSLUQHMvUp2G2MMPc5VS9D6No1KV7",
  "key2": "AuQVYL49hZbNqjg4mVHFhGgy6JzvsPgQf7jDiGkRGQVCxt5REM2JFPehSBCN9YbhYTrY9kHEVRyPR87PjD8bd5f",
  "key3": "2CYWT6EEhjDJBmaw3P4uMSGbzsxUEeKmFrUoXPVgFPszKrY4g1DP627hJq7GuLCXpaFZvzxpybkPrFYL3HW2sPc2",
  "key4": "5DPzmMyFHXXHMy4BtuiPg2i2nnNSVrdnSG3vBrFCLAy3xjnLPrLaBZ6m4X76tyfSVBAmpQXSAL6gMLusc5951ZcN",
  "key5": "5gEV4sCTvESfahXMKoKZT5V3NzXbVGYyfqwhfq5R1c2SVJmR26kWhBpBuUBZTJYXeG62rEtjTCvQrgt6ZHvsjNF8",
  "key6": "4XVdDUhFdwgqKbq5zdMyfNDGdQUUFA8g7eU7rhxqmEVqM1TiWDR3xWirSrM7KNwUZRfDVDFvp65qTZKzDmXiwTnT",
  "key7": "4LVUxD5m5GrbgBDvWbgJPPskbu6DxCQsE3hUxPbbfYeStLTwRe4d62FifvsBYAoPYGQKY3iMusNS8qpYEFS7Z4p9",
  "key8": "4W4b8tL5ZHFRH3QDbHPTozi3qDexq8zZV2jNw2ju6YU5EKozkDmurDfP1iMbqBWP6ScwjJvU46chnaVSJLG6Povj",
  "key9": "5qfaGHmwqUqM3R4AEbYYmbK7S8Pgucb7yyU5UFRCMBquzVZzA6Ux7FfRvy5rpSevjbgackbACq6DkCefAQAgZozD",
  "key10": "5JzZGmNwqCC4ezVSkiBrA8KYxvjAANFeyvtbbwiR4xkEpZ226kHxuByWXimfmsiGayNcKzNvvuXtTJ6iQT8bFLAf",
  "key11": "4y9U6sbDX4SNQ8mfCPVt1aMc8h3YV32jNECgjBhRRDzPvQUCGA7U8YeaHLesXELakvgTdeHkX2ixmJ5YTBmgtHEQ",
  "key12": "3JNXFAfZVq9znj1LtTj1hrQG17u53WyKUzhawjnkBQF5akZfk2ERWhksYTozELhjj8HiwkFYbGPkHF9a2AjYNEss",
  "key13": "5M84j4Gz9NefuFi2onSwRmiXAHCB3GA88ru3hMnxBmjRMMwHgv6TfYf9ZX4oPViVT31WZ8bQwuhAUxSCfCKYuvJh",
  "key14": "Xmyq9hb36ZqSEnC6DQqv4ZLcpvL4gvt4rRuq9oy7T29k5o4kCftRxLHMG6SqtWnv3puLdMCNLPHATsBrfyVK76d",
  "key15": "UPs6N8PTU6ByVHeJaFnV29JBbo9uEqyzN4sRa1ULwgexP7kEdfV6Nb8Ngefmn26epU552Mt6RWotokns3iordDn",
  "key16": "3rs71ygDGiSCCj89KDYiM9mjhHVLPNSFJCDjEZxdAzfhfFq361xG6e1Mkw4R7meygKryYbY7ktyk81orvevw5ARz",
  "key17": "3a4W8Mixanjwi6KeXoT2tzBfe8xkTUv2cvWzPbuDYXZkVEX4VvfFvuuPZBNjzfWUYY2ywKAiDFRW5fPfs74wLPuX",
  "key18": "24x4RFvrMNZ2fGnpocMsbFV2q6XXkZgD6H9YAL4N1PC5G7FhZ6826kQvUwQowWD9tUbPVKzNuBPho8pwaXSFYUhS",
  "key19": "2CkSNKfRXm68U2fESc9TPUdEstPAYJtWjKA9FKmsckz1sJsdUYc9nVxqgG9z7xbT3SJEmaDFAKmBhz79mBAcKwVj",
  "key20": "4h1R3TTcq4JFDzrmM5Zk4VJbJc7f9NKT4AFY5esorAVUMvnrEeuD6iBjwmVqshGVuDxeTmAvG3rPf5Pd7VAZZyGk",
  "key21": "5NzbbJiZB21VqDMEGt912Wg6YxDqTppTAHAzprAfi1CZUWPMnMdZgMiUpxvUHhmmB3mfCmgzPtiVGptTZq8LRumA",
  "key22": "5CTtVdDSvUCmKtJx2yDeScCTBSBQQ4tYGQiuwWw2JCXbdafoN2eQFNwENLXRh7dH4X9tQCyDRnJBmp7DoSu3Kz6f",
  "key23": "4nEb5Btf89SdTpUTYE68ZDFj1dVrSTFnibH9kDM4MfKBFFmpTqzvtnUahvoPmoVavinDkoPKzrtsfvy6Bp9ELjSG",
  "key24": "3qBX3ZKXfNeqnWvkFzeCTJRwbRRPNpW9iSLBEKNiKxQRr4eYadDnoJjcB9ngknakb9Jsdqr4EfzoAGfFu1Mct884",
  "key25": "5XXiGmYvWHaGANBFAMYvKTnMyMrQfnDET3s5dQXtwe5fYgfb412wNfvxcjZAoy5M6ThxnYjnZGNV4n2Dshi4ZEuH",
  "key26": "4d4s4j2x92z6mMhGG5AB38CmooUqaLrD8P1cfhEDxaXmpD6bFPem7LHM9ezTBoR9Gnk7hwmDhi1h8GEL6BgjbYm7",
  "key27": "vqwZhra6E4y9XCGYraD8XPqoEN8pkrvdn5hZtFVZ8kxf44b2SfSYeKH24UYBEvFGnbwUgMHa1K1Jzg71CcqUN51",
  "key28": "5nBBBd17TQQdy4LxHvLH192jiVfs7DyDrMv2emp6Txk8Zf4gLPXVE3tcFEeMziT8bEWxwBoeGjHYUg8aoXhntfFn",
  "key29": "LxwfzMGxzEQFbGqURV3YB2Z2VPZA8idS2BT9avpJEK9R28F4RHtNDTehhF3BfDDf8SXr3ZC4cp5LAxpsTr3v3fu",
  "key30": "62W53JeyrWKMKRhRTmbftMfgTrbhQLfzXQpUyeCpQ8df65dAAiQ7K43QcFsQ1z1MVqf9FnTC2pH3ZjDgPcuxTe8q",
  "key31": "4gTApuewLxCmnC9EZrqjEnM1zJPtbyBXTpff3SDxjb8fzP6SqP5rpphCmarQCpZWPcxo7wQfYxVX8KP9eBA8JtcA",
  "key32": "5ZFJGtHuYxJAmFXKPhMFzmNo65BP536rBPUbxb3KopFgntwECipR22kEhgcmvUY7JkxZS9mTo82kH1siy1Zy1KXL",
  "key33": "2SZcYggaapXPNNruEN3qpidfR1z1pDqYiP48uPKJaEP7X67baYrs2YfSCck7VtzzYPU6sy7Ax1PKhz5QPAm3EBwd",
  "key34": "46zw2b73d5aC7zVVdd9emrKbZXFP4QRRumetTCfmXfHRjS9T4FZ2fqtkMu7tf48aBmtpEJM1n69na8LwVA1vx5CR",
  "key35": "muDbkNjE8vbqvTbkC2uPFAWcCQc4X1J7Zi1aHxRmreScsLstynpCB8HoidkT8EW28g8ifyeRi1HfvPrSwiGoQFx",
  "key36": "3EK88qcc5WstPnpSCJcwFVFK9g8FP4252Ld5Wzi4wbY9ShG1ixvXLQ3TCenjeJ57Xm6PHa8xiENe3ceXMZsY3vvZ",
  "key37": "56vne14Bzs5AZnYs9VUqJFvCKRULyxg2ZYwURZXHgbo1Fnz6x31VRtXt7Rj8nzya2rzdAcbtRDp6cby6hVpsPYQg",
  "key38": "3dH8THggha1V9Thh35somTSfA245XDt1YN83smgmzGzYtUvzLqr2p4oeKpY6Z2mAhD7ocK6aQFcfn4NGLRJUENCH",
  "key39": "2ZpjC1gXeyQmU2ZBTBAe6inb5NrMXJDonUDhnxcSy7eJtvaLf5Rq8wHhTXa1z98RYx59Rgi87KUwtnWKC417Nfs5",
  "key40": "4rePpYzG5g9SzWUyPja1SHSSBknZLd4jPYzV21gRfpq2jatw4Mg5uGhk8DaZuERjb8kaXvAAPDNrZVyJHZv2YW7u"
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
