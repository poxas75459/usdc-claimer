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
    "5enNiC7Qo6xzcg55CKHqgu13GuG5h29JKhQtDu6isoJviqAamdZ5bdtNrayx3JcinS3q9Ap9k5amcTzx5YMAD6m9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ChqKERgkjyTNWiXZUdLnWifTNSpLfezzrPf2tMgyzv18dCuSrJhcRF98xEVn8XAssZBa3cX6s493dT9AYZZcj4n",
  "key1": "2TMaTTXPpZSm923sjBm5yo9HXuuEW4VfB6iRrXrgMTZ26VXhpskWLRye3iP8MG1Mq8MZE8XvDAcn2CNi4N9DKZSj",
  "key2": "dmUnr6XMCmYUjjRJRoWph5vg5seJtgLFEST4RK3NCRFDsBn3Cw1iWTCiYZoLtMwrH7T8B929pZoWFL7njbTJwqp",
  "key3": "2UrW9JzWFjGFpe5Qw7FrRKzYxezb3xhKXu2QYd2XWqTDSwtb1vHN45uh3qcN1QC88abvygXU27yjU2GqT5EGBC12",
  "key4": "47rwdfedXxQsvV11PcGHn16SuxRUAuAz5eLr1Kctmd3yB7TEGFoBvJE3tLaMpuH59c8rLhc11ALJds7gorDfVSag",
  "key5": "4so3WCCK1BDJk9aXvBmzx9jTg6yik24eTkA6UtsUNLrezFSsuF8Hz6EDkL6Zk4VEVF8EnrML1gJtKxq5FgErjGMm",
  "key6": "56iXPyW8wv2SR9rwb1CRoZ3PY4NrZtdbssUSdX1EmiRqv7B4irY6Pxf2CXFXp4f3FLqJ44gK1WYunynRzf19PY1n",
  "key7": "52Dne9zw857Yd8DAfTBaKqc8UdEaRSoaNzDmQRTY1ZJzNcU8tuQ8cGqUtbt4NsUqVDLPrYagwfFPXH3kSTstJdwr",
  "key8": "5FUZ382hMzEazr5B5tnp3im5Nwy3VnuBcXN3Lj42MjTYXB7CuHAvC2ynAP9PmdZKC1z2FsqkEsVA31ruWVX3h68N",
  "key9": "5jhS4yfbnwdmHhksqZcqgPFqB1zYsnAC1ZiRu8jssuHXkQkHygviY1XW73D7pp787fNkTNETScEKw1uKCEi14dJn",
  "key10": "429rn74m9PKWqNnu5psFanAoJ4jaZzupnCXxsWoPE5atedqk4o2maqfi46tky68X7AXtxAsogB8shLWgUuLFYiZC",
  "key11": "3yxApKixhNkzHxAQzN3w3RWj2BnMHQVZ1T4dUeVa7YA3D3xJQutjitFqfPEb5iXGcPveLB18G4mEhmW6FsHxcEVx",
  "key12": "2wuCBdFXw72wU2YGGGKE8myndKA5i3eQnpFjAoX81SR5AeSsxaRBYSJgbkrApjU3teTBhdZBx8g4gznYPogxgCPT",
  "key13": "bFRWWjHyvoZsztKGQihS2z4VNRnVxs1xSNjryjxB45WMr9EZdYm2bKJXuEQpkR4AG18eCwDtaYQ6bXff7ocQzMn",
  "key14": "aQXtEgRW8Z2aRAwjAo1EVjhjG6vs5ahwtoMwSz78ozu4zJeVV1wAupUrwnQQWXrxsBzkiDR29yCPjDufG45i4wM",
  "key15": "5oQysaKGmvuuFbyiJMY9gbikQKpAhRJFiNEoqvRbBrMNjUkxQNasGDhHKU6DdUAR9oGd6Ko7hL3DBUi5ynywBmNs",
  "key16": "vmyTuAtMmMGvRkzhwJkRhsciL2iTXttuPmrGALyCsqroQL8r1hyzXsKFPXLLXCWVL1RRpHsQNkdTLbscfj1jq7d",
  "key17": "3bkEMzfoxgeXLXXdwWv8RTxJ7hWgQxd5GAcVNpFYNbyfAn424jRP4etsi7UGGXghkRRR4Lga32BQfVx6k9xneUP",
  "key18": "32AuUVKHtbt79xV6HZ6beGeXtC2DY22btbHr8ZoMSwiuU5i1pPVCgLnku1AuecBmaWLw7YrfJNMUAiRv1qmh3jQk",
  "key19": "3fkh4e5ekJEhuhKtFiSbcveQras7HFGX3zJ7GfG4YHgBhBkcq5GZQXMYsAgRbR8Ky92dKvjHJbsSrZGXiQtfCL7X",
  "key20": "5xfkr7UexHwszw1qrbdz254Np7WyNfMNTZtbNBgwRZgMe668GqayPjvxe4NbL2XJPVJq9r9SadQUtgGjqe7WNz62",
  "key21": "2z9zvV8WN8JVdZnMQ6LnSCvjeiP6rk3Fsp5528GMbgDwvJjAo96WkX9BynreZw8qtpU57W1pGrUHoa4t7UVmU5yZ",
  "key22": "Hq1ejsX6aQxZqd59hVf39vRNs8VJ7nwiotpMCTRqYjrBJxP5kbcgyK6NQtZeTDXreR7ptmbqX9VC7XgYik3y95Q",
  "key23": "3jBYgqDMd9mCtuB2AnX6FWm8fZPA7bfvTeQmWHvtkz5af4ydezxD7ux5Ddf6YngKhEeLdAPKr1rSEniBWM4x83ya",
  "key24": "2wdek1p9HYJTtsS8eddDgouwwA2nsyqtoktaWqCiaWCoMAk7wLsijs4WqTnWGPGbP2S4cg7y6ZcVbLeC6m44artp",
  "key25": "LjcSwmMJcw93Kc9BDW12P9sqVJvUoa6x2PuMfCJi745vFMjKSToPYQiQPWAZbjeYpxQ9i2on8y5WULSMuKFWZTN",
  "key26": "KuEWeqth91hnX5ofRA8ucpBuf5A7MyxMMDfazMB3L2ovRKGcYW5m5cCbNzEEDkHpt74QcJqzKj275TPG4gLdKEA",
  "key27": "5GWALEagGJZTAzDKfL2y2yh7aQSyaj4Tqa1N9Gz2DvzAj1Hqt2f7chmegvJfqGNML3P4w8Jx85x38aJG3xcrLAZs",
  "key28": "2hkujbGMaE8had3KbYdNx4AmCmxsSUytPBPCC2Xen1TPynT26AeY1bXMTjuELdgnvdhCuRNafy17wbNwjjWx9iTj",
  "key29": "2yfKAxy8E9LrCmyYw5aezUn3xmeTYAMjKNJ4rYHCGzQHFvqyG8A6bLtYo2s3MxzVaYgWCRhCzFU5pdpQjt7AVEcA",
  "key30": "4vSFcfXSNcfMaACwkWfqCgwo3fEpNCD1b7C8UwSkxHR3cbMqTeVX3iqcevefKSPnT98T5pnAqfkWT6d879Uigw5Z",
  "key31": "2Jw73mRjePZb5SBt3APZn4sd24UdKp2YVBB9RWdStuBwJp9pS1AACMkjqjR1oc9c6cZ4mbteAfBzFYM3cLhBhQYF",
  "key32": "26mgzsWNSfoeACFk7yVbEerVNE54kyuvgPFuMUNkxdWbctpvMhfYjgaCQRydRT3MLjJ3NNL7jefSzbtQPKKryoWj",
  "key33": "5ZmaxTRbAGtwgvyagDUUVtkdcWJeZVTqNvW6xUCy1iGosEEDCQEDAobRegZxKgZY5kEHzKtLvSDDE4RcBQc8JgtT",
  "key34": "3w4Qvr9NJU3hQ5ebXuqyFUvx37rK5ofmvWJEV3M5rtm6AL891aMSHQePm1iniWrDsbtqBGXjXZorCAgQeudJDqv9"
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
