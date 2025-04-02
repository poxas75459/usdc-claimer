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
    "2H5qnUxJjzFejzuQpFdeH7g1zGT1Za4HCAJF68zcDWuwyaNCQ4iri7B9aVwvpmXrp6KbCuenS9ffUnJWbABucYQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sxXPGNy48iFKmbgVhw6AD1dVz5QoV4HeFMaewF8wb5NPzubTUDxi34YvtZbvrLuQM6EAM2LyxVZM1nmC22TYZco",
  "key1": "5xmSQXr59jXjh2T7F65K6cmpokcxHCtvoaZxa9CkzZyU7yAxTGXZEJLuyJbCkvXZQHghuNtCQ8fSap6JuqtExLbG",
  "key2": "49WZwUipCgFn5DAxqauLpvpVH533kVhgvaSNyVUxTcEL8zy1Tx2PA9d3J2dhF8GuYUm9iejcK6MVz7M3MhgyAhB",
  "key3": "4yEu7BYSiJbK26poXnbeNqiKYLRmySJuYmvhuREggbi6M3SPfQGpU9oErioYN6Tz3553mWwN4tMaTUsUNZD38TE3",
  "key4": "3N9v98js6Ehi2RvAb4UsQpQvYdGg5QbFXZXXp5hRj51ZpPdjgNdQ3Um1zq9BrDNyXE7bpnh1SwHnepG4PKq9WKL7",
  "key5": "2qmPkPc9T3BqzvwXEdnrUZPiXXpaAE3SsKrz2ws9qjxWpBFGQvYyVC4gkf4nhyEWDnt7FL1P7r9LgUUvzgnRAEbq",
  "key6": "5jvCuUU2X6k9PpPrJyWLBiAXrq5CETc1xYbCqjQZaNqgw3yptHnephoHpEcyiRRoueyiFomqT2zhaqHNSyKYD4Cw",
  "key7": "3QobwpmAbbrRmnoU7WGptsNoCyBkjNL64azSUA9BXXcBCnAKXHiYg6xKFaj9s3Uq8UZymu2ciMKySKZUjxkafxqL",
  "key8": "5NwRZnsNHahSsh7PbhBXcBoV3HyMj3UZCCX3LKXpCubP78X5ykcA86foj6iYsneowZMdqRgp1ME4xP5X3No1Y3DG",
  "key9": "3bYbjYnApEvinjKJn4rV4HNk2rL8pSNT475pcR6rL2YxFraXMva8nNTjEjQtrC5nvzCMJ5mxEnDqh3YFddruHDSv",
  "key10": "5ZCPXhHXYDZqTKhTFUHJuGCWKPwFaBQaE8dTjVayhx5qbSBnQj2hGbViztC5zagpLbC49EaMTHuNNUffC9ctxn1P",
  "key11": "63F6ikAhZjz6R6PpiT5ZJdZpwJ3M6nSdVkmrwkhDRDDErBs4TJZ4t8jpF3bfyhLZr34CrHkUt5wF4j4BLka67c23",
  "key12": "4x31pV4AijE2YfcPSxLPD5TtmQVZQFFcnxzx6fm5P12tD5odQ7pLYzTaKziWSMHcjgY17spZSQKb3G2rsZBSnzFc",
  "key13": "2K1UibL8nPTeBwUF8wVsDWsUgC15Fd5szaE7xmQ3fBzW852yn2eoK3eob3Uf59PX8HmYuUpviyhzPUr6Q3vVgnQo",
  "key14": "3iw117ZZ6w3D3spY1Gp8cEmRt5Mb35MppkFS5f5mrWU4LakbH1wjWVdHAajzYRhW8meZio9KhGBWwCh6PdwT2ybc",
  "key15": "MujCxR6KtpGZtaod3f1Ya3ouK4NRCA47u99wVSaGd7ncLJME7GmD4hkXUFiM6EukRFyhFa4s9U4tn5h2FJgiXLe",
  "key16": "4tgZqGUAVtPkXepG45wDgNQ3NwtW5GEcsyDUXmLbM1o8HPrKY88DVMH39yseA2B6CrKiughJ6i7epQzNZfizFN2f",
  "key17": "td83GStLVmRmYJT1TZfPGmBoGakbhJY2jUTmibc3Xa8wQUSzTDrs19j3s3u8ah5SAPWkptiSEHtm51w43XXJzYf",
  "key18": "NcJkuwiqSKsohTQoaPPnCNofY5MYZgsQXr1ecH3Lw5k3iNTc2v9rjxoeyhqCkCVks1BAaxomLypphZyjzUAcmHK",
  "key19": "5edqnzpGeRQ6wxD9Td4rRAojXFCiMuZKESvfne4PNTgUg5erxw9iaQHoyoocvnwXRZkavTxK4KvznrqJLBonxbPC",
  "key20": "4Gxm86HgGXXUEUM6xTXtsC39WCe7CioF6TCfYxtBTYWnWFCPT4iDhcHyLjyEkcBMLzdrCqg9KeZDNryhtgKubdhe",
  "key21": "5xq6P1CBnG1fdNQ9JeYddtuSiNX8FfjU8cUYXxh29cQCYyKkDv2qmc9HzMGsnFEh2U4yLkhhUfPiaFpjYV31vLhK",
  "key22": "5CSxTeNiUrqEW7eg31WA8Lkaxmg1GgqqisVwW7cU8hAr3Z7ySHC9bctxfGeLt4C3zCfUCvhHvsvo2u323zCShZ49",
  "key23": "3vWB4wFFwf1sXCnyZnHRUnCLHSAZD7BFRrudMEgHqMSg5DDmnJL2bYnjpgtv7x2d6jgCnFAkWiVH9UsTE5zpw12e",
  "key24": "2vmFwx4zcsKrJte4GTWXPubducsYp2Z2J6hdHTHBikTFVJNUtu7Fs5m53rz2q6xG7q6YdQpos8m3YsgV7Gx1q1nf",
  "key25": "TJdrm5vCPDNCGaS9iRABwevYvzrJrJrtF1vGyekqE8LaKX7THWjF32Q2oK81jNqJbdg5ox3RR6RSjPfaZVjsDWF",
  "key26": "2FVPQjfMoUoWdT8Ck3Grn78AeGpN45tjfiFSWa46NLWjgpFzV7jdnUF9KkJKS4n3huLbRDDSiTFwnrKx5MRRx2Xb",
  "key27": "4UcBgUCUbCJen3mpiVBxNHBkawxjoQKABKaXngwJY6JWE2sYTNLnjVVAz88fQu3CS8SuqQUqsUsfN5yrcPq1Q5ys",
  "key28": "rdYASkPxgv3K8Nui23T9YSdj8QZvCRFsNH4QWE3FdZpsM9ewBfstuvHYV3LhTHfUCEZCbaHbpfpZaaVEng23BnD",
  "key29": "3MAexFwAGqCqi1qj8oxem7LjnXXRjQMH7VEvz7ujMG8a3mmN3jfMBvpiM6ftPy6gusmhdwChiLd54B4avCUXZSub",
  "key30": "j1VWkxefrtoTsaBVghuGwYgNEmVnH4GoNiLgtLHvVvVUDUeUWTtCZ6bi6nG5oECqEYUcFvprefE5YNzKQPdh3xE",
  "key31": "66KvMPM25wscFxMHwqZoFgAmsh6XiQLkpi6hgT1iB7Md5zE2WANP6nz9oqAGrE3GA4ZCqRR2y3TvVCWbakbiJjhK",
  "key32": "5UBXzLrAjmU3tSp3VMiWGSFgmryqmJWrDKR3ttT54qmfVTEFm3MPCDXWAMRyvbn2bHNbi7JY4Yfdv5m5JYYNZ6rk",
  "key33": "PfMQkDNkySpzxzutZGYh9pYtRMubPYLL12jLTNye1d51KyRJPJSrkLWcMhHSoSPXmLr7pNKghdEekHWZXM2MfQS"
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
