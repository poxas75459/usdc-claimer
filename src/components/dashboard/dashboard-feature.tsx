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
    "bvG5fZkZiFKrWh9WjBr2FeB87LrNJhLs7rruXGUGvSGqHtMWWMHFMKMdvqv2w6cAxQVt3N9TLzL2ZLaK4RDW8TA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "662Z3YhdSfJJnJSS342i3F81P94W7SLNN1Zt2qfgYmFhWjvCeomNhFjDSBP5jXKZsMpkAnQL3xEbxYhHqKYwARJo",
  "key1": "3eNS7FXcTkydU8sD3JX6z9XYHw7T97WCEPYkw1muhCR4gtg6pMJeWCreHYXYZEqvXvucY5XCFYhQhCwCiJKks5SY",
  "key2": "39XWCXFimmqdb6UvR11Xkjxp83GLBv4oHcfZW8SDLhWXHYAp9ycN4joZNRq3UUJTa2v8RDTMDKzudrnbKMn7exfj",
  "key3": "5rq9z5fwFvU8xujqQoXBLhBA4uz9ujvaB2zCABiQwLnpL59Mw3QqcCt5ASPg26GtCVM5faHfpz8rZ1d27JVRXso6",
  "key4": "31nB6uDEFs1YeK3EXzeYugHtqQToWdt5i9CKEKMezeWwyjjVKWrfgp4vWVhHzQNgbau4hQ7e4Uzd8REDS3zqpjtL",
  "key5": "v3Qr7kFWYUgCEGr6u9BpgR7Kgf4H6aF3qp5edK12oHNnTRSQxJzMackQHZgV9otRaX4cCWWkempQhhU5PDfsEo1",
  "key6": "2k6N9zgz8vMX2JEX19TJCx8UuxgSmB4QzKwqTfxvuGm7w4wKsXRqTmi6ZfUo2iXrZb7z7tKnBnxkkwpS3tuULeni",
  "key7": "JgAXUkyC6Wn6NizJhcueDhg3VhjSQzJqmWYzWNV4S8NUJESJALWdsJ2S4h5seUfpSQtFgiYvVAhkWzm5BmN6xuL",
  "key8": "3hXAQYpbmTFZJe2McNL9p6P4NXxM9hLd8TDSqqvLxFvPy9uYDQ8Tig4PZ6zhE8hCVsWR3QinXLiaFngc4TZAUGrA",
  "key9": "41S8RQhPzZos6A9ukVeBp46VUVyyD5ZfhfPEFGkpPAJ2iJYBoftHB16n8R88AZekmj13gC8cRRfFLSbLV9nBTZWx",
  "key10": "GtxY1ZCEpcFm8ZZetZ2Kp5Ef7oCe25GjP6TJMypPSs8vtpjcp22ssZXVXxiogkXy6oF695y3isR1JppqJSGg6sq",
  "key11": "46Au1obhuRF5HRPwxTw5CCHfsfYeoDjMWHW2dwQkJhJuxoJxYJ67WR3ZYRsA3hve3t8LCUruAssf3r9m4ifRHRk7",
  "key12": "4zJdeWsWAgK6uULUUqhU77iUTsnYUtcuHiTHrt5EKbvJEhmHHBhj2okxbuXZ16auoaj7hiWeUG1akeKTCPshsmrb",
  "key13": "64HiXdfzkAEZnHhaxb2yawGS3eQ2eZf3uDnp156WfDLBhYtnBxyTocwZJBACQwPPv9bMubEZdMHqVEwarjakwhrj",
  "key14": "3VoNnuBJw8U4wgmGLSAKTP5YcH25zjyZ5fzgWj3sr6VHV5uTHVoYyMfqrDuCLposSRWtA8N6iUMY5mcF837MWg64",
  "key15": "3dTC5ZWRFJkd4JBQWHHAt9TNJjWJR2tJZYfiRJRxfHbrp7D8NFsVHbNHRpKfyFEzbmYKUP4v6fPN4DobwYod9t2U",
  "key16": "3M7kkwXaR2No7xJan3Mtfb2dPc4xNvsy2AiH1rcx6bz4hsRqRwE9b8brYFPZBanE7p7WBXu7VVhLyiDLUa6h1haV",
  "key17": "5DApfrmei2xTJVRgizVFLWv3HP1cQyVs7BPUka1n6Ac2FpjByBSdEv43EU5zWtEEwNJvXkRoTPm2EENpfN7RUJoX",
  "key18": "5qkbZByzFNWrPCwq6enK3UvMKmqNJzn4pzdBZWuj6awxcR6UjTr112MnwXQfyoXj8XvJKvt4WsKbZPGoMJ9Y8yss",
  "key19": "3irxQM863VXmF2j9Dn4M74RWtXEL4dL34fCXkSs6D9Ea21QXdke3NWB33VPr8Fhwyf8mHwKExZBAepbswLeydH82",
  "key20": "5DxRPxTbgVSsfJPW3tzfWwg9XGPf7ngRcJLNxjefaHmMSghGPJ4B6zvw2bRhdkKYFT9o8m9ssphgZYejMAKwYKxV",
  "key21": "pRFKxmYHsmFLGdDVdtRuoRbVfaFp8qoxZMBzveHppKsKKeHjUz3Bh65tAsCwcCgWaQWvXXy1UgjEJJgfHy4STLs",
  "key22": "64RkyNiTF6c2c9Le3BCVTKQrBP59kQmzSSB2Vsfe5bwdARTf2o56aza2NELGX6VDU433BkJruaAZSQ2sFe1eBKCG",
  "key23": "5jFRh22gU91JeiuaBaSBYaahqrR38BKFtxtiyYgrUAstWXcuG22Awiwa5p3zCVV8Ja3vd3ypswr3hnpx9tfTpNqR",
  "key24": "Lt16fqJLX5qrNK6CMBsXzqcNnGbsyHqVGUsfgAiQFwcktzhVmRYywXthBQEHk2vCGjuv71hXKPEjSoAcU22xsiR",
  "key25": "4Tpy6HFVenEfTzxgL3hpRLy7pM6grWiSVP3PjUkpibRMESgwojKQLseiANQGRzJU3ckF8UPGBKxCjFQxU7Q8ffWE",
  "key26": "2pAhGMJt8LJ5zBxzRepMnyxw6MAbYB1Qh9Sj5D4eV6gNgNE7DzBATLScfaQ4KAnC7r3kUZFhFReTkQYKXbTjiJwU",
  "key27": "2w5r1mcvohWKMcimXRZ4SFknUYQZHKGFH3q1kVCgECfr3LwpDjXAHYZw1Bs7V299UzEmPZFvMj8kXJuPE39AsAmZ",
  "key28": "59y2DzRyKHvBR6nBZqndVT7AWcMDa6kribFEjLf3zZ9UCCzk4WwU3WuKTZWNJojCXauoDtEF21Pvpn75LodAgxkW",
  "key29": "4tfhL1WEKoLNFkVXNXBk4rgSjJDACvX27QzCspqi8E3Cxpn1eHfEFje8bsik7p1rSCwUChqZvPibuaRDvs4ec2Ga",
  "key30": "29V6vRrrQwC3VpyuoAjdSDsraNzHjLcTt688nSHcufLxSExzvXJedsDZ9h5WBHUwhC7rJKKxYHErD9Et5DbeBSfR",
  "key31": "42jYZyQGrfnBWDJEpZKuEppuU8zmPZe5WFKjzgd779SQwRhJTJx2dRksh1Lcwk2H7tAtrBkBimWibyvzZ2N4cgT4",
  "key32": "4r1LBWan3MqMz9inm4weAeTi7rs8eL8ynpqdru5eHtgbvbQJnmpectv4jE6FJExawXUwUV38bpyTFtALDG9nRHms",
  "key33": "38fZMCAqiMuSL467XbkVEM7CpDTAWMjgZ4gJpHPHgTqaBpBcsef1ye6mQBQZqqMD7yXDr3cZ1ieG5wo6AcJ4QyNF",
  "key34": "31pTzyRh3wQ7paND5K2HMW3k7UtCiPXSMp4VKueFBC24PpjuN3fJJFscYtmQQVKgHAJ7v9YqaxwzvBjRZNwR2fL2",
  "key35": "45AgmLDGHN1osYUST619jS5mrCVMBmpyyUbZWU3FCmsdmq7z7mddWaCNveBgzVLT45PwMhF2s7C13bjDefsieZhS",
  "key36": "5BR9bg3PNhptnxVpcmCSquxHXqa9RJPTg8iG3r99ZToWMX9PpmGR1ckiHB1anxpkcajYR8sP1X6TFsbhrx4pY4Bx",
  "key37": "sjBjn8x17qqUJLVLnrfdYAygih61Kw9HdBr4u7dYLUxBBzbBDyZRtQL9CgqEekVpUQJM695RLa9pFfkZTrkMsB4",
  "key38": "wmqCVrWAYndS3Qfizi8g4ytAzEmm6JEB6U4mruQmGpUGiyts82YaECsruX6oRvtih5FR22i3WTWz2biQuBsQkQK",
  "key39": "juRyQDzA11VozTNrXVP45vZRuYZPm7spmzNnJt4h5Px4xnDjFmv5ESa3nJz2ZER7P1Jf27eUPE453ZDeeSEZtpk",
  "key40": "dXUpou9kayhR7LyKNpdp9RBJTChRXTF6qBeXAwoFC8mjRG49XrGjjFwFRzqgNvQMQ7YbKdKzuXttfsxpEebm3eR",
  "key41": "2cZJ5YkTZHR1EUKsFe2kd3QXFfkoRh9f7kjBoXN2PzDUkYpeUs3EbQNH42MV6chHPyG7bnarYvcbhTSjkCWLN11P",
  "key42": "333rGCc4S256cY4inTeHZ4eyZaaf5KA7PtThZhgSNkeKgfFiqY6TokjF9Zy1TpGvjau2eBxXVBjy2dfsT2vYoXr9",
  "key43": "3FmFatCb9Hd3hrJQounfe4YEmH9dUe5gvC6ecHsZTA4ZwXvHkiY5ehTTUJmmWBjJg5hoYLxhkXXen19HBxhSySRy",
  "key44": "3fJWJ8RAF7BX5qp5wYerqRwX1haz8sAeEGsmpDNu2vo8AmXJHEXVrq9aeGo9AtE2DHC7L4a2U3dmDLByuNoFC3xT"
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
