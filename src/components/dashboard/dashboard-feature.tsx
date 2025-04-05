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
    "4tzGy1i6smoELYDKB5Q8Yxnrmiy2BczdnZ5YwqLmxVN7zoFkECM1auHrKwgGvGyUfGPJ7i2UxhMVwgikmZZnxegT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62kBuapRCbN1bTGECNrmkf3McZTHE3jvJ4uoUFWnd1ePGU6V7zZRQRezHmPtGSdiVdMCoPKBaKT62E41pkiWHap",
  "key1": "4xeEtU6GjWJuWt8pFpQRcVrZ8DfwcEGUNngCzPX4N12iyxn6vp2Fs638bGbRaitALvzbVQGbCruUee5zD5z9qSMd",
  "key2": "67N1CbxjVHmfuCJDetCFXZz6XQ32diSXvUuQSUuY8rtHyXr3g3yeocrMHgxMEbNEbUHdontkz4xFFm9Qf9DEopaZ",
  "key3": "5i6hNSY99ArY4yhTc8LhRbBzmoACSj1P4MJi2rP74KoUbFRd1YTZ3PBL47LkwP9NfX22NcZjYGEgHNJHQxXfFq51",
  "key4": "ju6YGmvTLt69fzyYcKqrBepmRYmhhQNNEqXp2LD2oDqP76SgAehsKUw29MacbTGTvzRotpBik2Wfngiy9X251Tm",
  "key5": "5i7dugg8Jta6RQ1CN2DbgckCMbYWru2xrHLayRwUsEw7yNaZr1wrfZANVszZwdztJ8mdMrCALMtjXDaKoZ22bp8h",
  "key6": "UGUQSRJKyy6aCizhNTFAd4auDnkuakXswV7GQhDp5RtDrwaEEkJREtnVVV8XTMPmKmC3AMFtBNV7ncU95PiB9Cw",
  "key7": "2tdUv7up4T1QfHtCrffCfLf9jY51snvVUwX25ivKU5eLQzfMUAP3RmdK3H5KM8CNmuEfrsSG4EXRJ2vLNDR2LbSb",
  "key8": "55QUrV7Ue91JE1QnbiUEHGz6azdG6MXYp6WTDfPykKUCfkP57jVRAjRuCgY7hDRAXeYFZXJavvGW5CfRU5xwrFNJ",
  "key9": "4ucKESyRaWB9Qkvzwn19zgFtmrNXRKYkvPvc5qmQyYJKVhz9oHJstVAgpfbZs9bT6m9L3xDc9f7EK5VDy6aamBKh",
  "key10": "E8hQpxXzGEW1ftCVH94NT4JNHR3X4HmWTHG6EzTM2YWhndEhtXH4hs3Zk1n6TWoUzXqDnJHAKPpADERfBXtjKAN",
  "key11": "wXdSQuTHKzAqFH8n5aWBkNnUCpD6y449TtnWqbSP9YvNBrEZ7QDfsuj6TFC1mBawDLWuZKGhhScxWP6wduZ5vEE",
  "key12": "2uUF8uoH7yNwTdFL5rHCLEfkpz1NX2rWhGX5CgbFAYT1cjr527HhGDuyk64cU3nmrkHU5xDviMQBJbRQuok3ptn7",
  "key13": "2xbQnRbgsk22FuM7vZwWg4SX7vqfWKCs8xUJxuyAkCvQjWNXxmXxGpg7ucdSGjGTpeMbykUVfXPxSLrb8AM8b7Yt",
  "key14": "2ak9QNPGGhvA2f4mdPoET5BrcyopccLD6Q7W93phhGxqaxa2eBRaamw45YKLosMG95FCPQsVgUvmayyH12neauhD",
  "key15": "4LPP3jPDYq7KWmDdADpFKCm4CRTW16Sq9M34U8FQE9qrQTMgQL5TTHgV67QHZ1Keo2KQuyEwe8hQqgeUNop6FMr4",
  "key16": "3eurE9C61mLLnANBdnzyRsPiyEndoAfQKGfNMfoVACJSMiWgbSw6jyU9bhHt3LYLDSfcJ2jEo9SujtaeGRXfGiJc",
  "key17": "25XXw74A9mg5D1wpWdWvmUNdhTDWYFXJFKBMuJabKG7Y17tVC7HxV2os4wcVbpNxYj7srvFWBGghBnXt9ZFuZ68z",
  "key18": "4EQuBZRKVDDfoxauTgdfrN1c23LSZmAovjda8EeskcLZHYN7QMxrjn1P3UvNAo16FZLuX1GYQ5JFb8nuB5UsinXj",
  "key19": "2pSSgKW2vceXPjDkeTmMKxBrMzMbkBPvSH3hiZYh1bD6w5Kdi7haZCcNJNy3frawWRtYHvNFi9ybuuCPiVQgUjvT",
  "key20": "2ynjqhiL9kaZyyWnVS56GSHLseVTiCncmC2Q3BxDTu3f7NaDLp39KwY88fsbqszW1SfQsPJLTDJXNvocArWW1uGx",
  "key21": "3dQ9SQU74QZ7p4aAiF91iC6aY8EQfmmqX1vbhCFmkwqyLuxYzCy1ifnF5gjrCcBEx7tYNrUgYtWg2pHSnvMXT8wH",
  "key22": "5rkgKzf63aJH5QHAFJu4uB7aF4LxEuB8XS2rGJrin3UjsXjHsdUr2G32Dwym9t287igv3XtUaKNLwnCVmRDEXQGi",
  "key23": "2iQU7mp6wzSSa6tqphreJHmeuk33ZnhY25t1PMdpZbsBYe8vVQpCvP54EzfNA5uVm1F1fYhSWVQ1tHySJ4RqLcWX",
  "key24": "36j5xr18x67xKGdeJwduZUkyeVch4bK9N9EMWg9MAbuW15KYQgjtUa1RqVqUSaiwGW5VuJqJjeVwEmPnrVZ7hCbM",
  "key25": "3iLSXyhhbBiJq1NpiYA83BjttMAHr3WZnmDjhBiupjsZUF8v4v7vVkCiN94bdPFgtDshdU8dA5ozaiyPAtvQPwgZ",
  "key26": "5Mhfbji38oqyaHBAXgLScPJUAyER58VCbzRiMG3RvgqDvqzbi5dhRn6tZnB78UyPNL2YXDqios2s1YmLBgQ1MCcw",
  "key27": "24XttMby6A1gc4GzTBzC4hxziFTQP8s9Xs1CXdrWkKmJsZexBGaLAC6Lom8A1JDXvwCw3DTffqhwgXp81hQmR7oa",
  "key28": "PczKqevPwoyUDMbBXDm91DsGLdDUWbpw4kVv2RFm1quj8YRDWK8s5QDxKQHgeTGddFoRyyY12ZXn34NCRkeoCW1",
  "key29": "5emUAMesZMoJF91UDVeDx8Pk9P6bbeWRrhNSdFU1wWS5j5s3SvZzTCYQrEerjuLYAGeHMSEZnVPtNd1bmX1Vy4vc",
  "key30": "4mTYV46CCMkE4VsyNZbYqR5aRApxtvLcwaxm8D5dSTGqqMHyfqYftbnK5Hj8zwQjKtJ6hc98nPcYugq1iVXGrqej",
  "key31": "iYaP6Y4a5QpZ1vKETvL6Lv5fNb3gEivsQFjGED6Zt4ZJq8ZDhqi37KkwL5QTPtSHPhqQFZyyyyJhWNSpCLHqESv",
  "key32": "2roWgeLooxwc9zjdEfuSccWiKFomNai8UdA6x9EeiXDkVmB2SrrBXBLjEiLqJnFZHUFqcmGwzarceotdQx21HL7Y",
  "key33": "2jKwtYN6nwZzkA6vjXZpU2EtcHmi2adQVW4uRsZ5JpK47Jnp31aacgAY91SFzf6Pkh1CbAtb8KHkMnw98kLWUpqi",
  "key34": "wBfYKfVpEiS2ymaeLvb4YpsDVaLH8HabDTnSDvXYXZM4XxwHeCazv8v5mavCQP2ynDsfcM4Xf6h1fxSZ36zjJfD"
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
