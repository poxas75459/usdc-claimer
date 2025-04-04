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
    "3gKPk7Hvxx8eDcGeJ4iyQRPvD3VvqSLKXew4KGpEF11XXdxqtt9DmieDschfCwr3DFixeSa3WieyLsyzx7Wci1wD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zgL1iNLHsNKq2EWipCLCMqhrQZuiDxBmsVffThM4gQrfrW28embdJHm3NcprNWTPXuN38bgpae2scK6NhU4rWWx",
  "key1": "5wSDKiHGc1M2CN2cn9n3Q6y6zH2sxXWqzSBJV2sQPHx6A1bKPPwkCs9iRtPn8vkvFv72DN16fkovXSY4mJrKSFsk",
  "key2": "48fxtyMhGH5fNDu3dH3cv2SHykyQi5xqZ7wXmGUFRJ65DhQYKgC7qqDS8SwHGnMpddzBjbzP6UBMDNNDTsr4y14D",
  "key3": "UQG9452i8FhYVr4iokavFhUc1V8MGAXyatVhi9svP2x7NoVh5oxFTadSd1qWeBtcYj3NwcRS1nX8PMxCoifeHMe",
  "key4": "5K9ezvwTBpyrFAD45ZYRco19rGHUapuqP9ybFoQx7qcYgokPLqhf3xrgtMTiCCStsZBhu5z2T9kk6A9MVSYtKUZG",
  "key5": "13vBNpAH98tcE6pmuCRqxp3q3zaobasJ9ZwPxQJqWyqHSm3SSN9tLSSXZc1J614aL3kv1qs5iMHHBT2Y7Yv92XT",
  "key6": "ZupBDvBFkw56LWLMuWAApUpEbiepb9QA7GVMiSuzYhvWYCy2QcNT6WDq6d7c7by1tcXGU9W1DUKCQRCmfaLedhb",
  "key7": "5CGhVeRo3kkm88S3jngyozVEuTGne4UJU2h6SZA3ZnNe929DEi4yJZSFhXavZbkZ1B9wmtg6yHRi36c3BRNwZgaz",
  "key8": "4oD6WkUT4FQsNU1Sgr32RaCXSmYknEmVqPJtDHrHYsHBQhGF3hpXDQJTEwK1xfeTJAKAJSHm6Jf9cYRaodEikD1E",
  "key9": "55r1zghT9UfDNSqTKtKp55TzjvYmCYw4V2mZiVnKXKJ1icpXgX8LZicSsr5bR4fSQiac6vKDWmqkerhornaVDcqX",
  "key10": "4D7TmrCBnBiKtKH8p5cRSQpbtDkkRsiWREeTLaqjPwDM6Aw3xsc8LNCyJfnKu6iwbLme3zbznTKWAmpMzrD6QEu1",
  "key11": "41KMMqKKs7nbJDfryaznspnzTqY5B8MViqtGtcMpjCBwx9vdpvhSfGfeezcLnqcHhtoAqXmkadUrRmUhMoyvNSfQ",
  "key12": "3nTdejPXdhHTh6eYER5Pm6hEaiGdGTaGoyrFw1B7YmzjGGc4YAVUEvZEnUHAZDnVKzH9UVCXZkivtWoWs1RYfLJU",
  "key13": "Vb2f1prPFxyA86jBxrqSD6hguKs4b5V9CjJ2wuSnxUXWdDKJKJM1F5Fi4zs9otga8sdQuCtNYKvWJsYYC88uSWK",
  "key14": "EaBXt6bXQhVbNoBiqQue6YRaRXMv91FH1SKQBV2jTLRwqvHRxAGZ6PHzs81kuKLuXRrF8KMh2MYiPcbiMkmupps",
  "key15": "2RM5qF1Cuh5G4Dn521GvZWmikPmBvPD1YPoEZHPKAoY17qC7EC1GCVj49eU9AmsJbsviLrGyidgxrM79awU2uUQT",
  "key16": "4ZDhEcQbLGgKPQvgzm7UXhY6AM6J6QX7u9DKd4iYJ98cP3dEaTvbu8TbBbtho497SSg4sQ2vMxpu4pnCk3A1wzDS",
  "key17": "3hBx1Snt8qPEmSepDgWo9snQ6tCYHhLyXnKsRtMWmKSJeWqH6cj8Ci7UMcssRqRnYdoPfV553qLa1BA6q1QQTatW",
  "key18": "21xBkz4DvjXRmf5Kom8UbDcTighkebWmLHXFKNUWDLXS8nkjPx7F9zkB3MBBUZrKDFF82szCDhNxsgscUQffVjgc",
  "key19": "3r1fz8MrBACUBsgm6n5JGkWcVt2qTzbLcP4TAK4N4tXs9KQB86GgYxX9ULewscEEdWtjCzQZwtVaJ1yjPS8mCxhp",
  "key20": "4Q4BA9uriGovmJy8yZxFG2V3G2AhtJyNXfapQoexgwBz92Kx9ZzgTAyFJZN6Bw4hNxeDWHjoq7dBrNZYD8pwKjzS",
  "key21": "57DCJf5ooKTLzr1D8iVvu4aAZ6uKMJ3DUNyU2g9CobQ9rsSq2kso1yaqBM5kumpFUbQjp4zHZphFoiK5Zak8HMq2",
  "key22": "PXPE7QvUW3rRsz8ML3jKVSjVGoZxp4Zg3qnoNCx6j8Lyx5xaDTw9YYvQVYrsgwWFd2bzDmNbHQeU44vHwGEHzs9",
  "key23": "2ub4z8gZexGaZufG1ZS5Vuwxci9fM6oCHmmVbFCnr3eh2cKahAov8CJtZMAggh1yRDWaUw684iiwqsZEXRrW5oSc",
  "key24": "5PHBKPyZ8hNqRfRhwaRQi9g8PNcb87DGpEXmjWXwWzTYupMyfbUAZJSw2C2XDRRaWtKxo3ywE9xeKyYb7Ku3E8CS",
  "key25": "3D8URcJXT21EtHmbcyRNzPsACE2xJEkzwyRLkqXFFpCgVAq8oUNku8S9tHzRYcWv4QvxjFzZddvW5j5UYA4JWLQB",
  "key26": "dFde45RcFsgLANa9fZRoqbnr59uRcvEi3Cb2fahJD42b5gishA5LbCCXgBVWM5X6ikpYEUoYvegStymAaXEYUy7",
  "key27": "5iEpz8PZ989ToNwpvcdmy1yKbYtBNmpgixHctqDgiDpYSBqG5bLfjLp15PJ5eBMNgcbu9WmVYpEDNuG2xAJXagWh",
  "key28": "2HMeutByPbCgcsg1Bm8wKztwbLKQYpmLUuF2Nfrwc7BBXYjpkwnfTwFpYLFkdvxszQ4hEP5ZZHHG6UYPwphQThNA",
  "key29": "3bzVxSeKrc4EqKwwpF47DsSbWU4t5BpX6CyzFxUaQ48jjPCkQU8WYa8Z4XF4NDcMA1tb1zPrfgsQtuJbcihxpYre",
  "key30": "2HQpuqANzXc434K1Ksz4cUHh3ei2w4JY1vfreJMMVhkdzrnixZFw6Ce8GNjM45rPy12kkQY6eb6V7UGHuxPRBLXC",
  "key31": "3fNzqTJmAsgos7tKnp6qKyAtbPExfSqNWUsQPh3N5CCRRwSZNqMb7Mk6qCswBWs4YpenAbHpnncpQNwqh9LbMQPa",
  "key32": "5FxN7apknvk3uR2mTkjVioVo588NRd9wn2Uemyg9MxAkcbLHJ752LCSEvzMePPXopt7P7UBETQBQtE4NktRyezCM",
  "key33": "3eCFG1ZWR6yWMm84CsxRGhwD5Wv45QwVcKN1Dj158WnbhYyuuuGsZihyhEQgQSPHqWNacQGobLzvtLV3WrJCza3W",
  "key34": "3iZGuika2Zs7z4bYo5eC2hX55rwk7vqNiyZA1kaZewnq3ENKdJdTXn7SQdxLoHWSZvG3UHWX3N5iR7Ko9i43Tr52",
  "key35": "62Uga9bx9Zbv9WUbdUKKrH1jVqQzxpxzJoA9y8PZs2DrKqBJJ1tLNGgSUWbuWSTknYogD8X36o1ar46uipqAAi8t",
  "key36": "tHkUK2V9CK59hAfKZcbkCqnvfbJMkMD5iDPbr3L8V77uunWk4ahYdMmNcmmogF74C81nXcKyBcAZ9Cj4zg1RZBL",
  "key37": "3LfhmZd47KAeNcQ9MGncQP2jyPLF1SXac9DwUvNRLgdQv12aNZbMumwBL56m2T5dsjKfxYNuf3ZFgjFkVksXX1DU",
  "key38": "Fpa2NTN8yxvpg7V2M2ei3tZ9VRZ8nsApBBskrNESAKPvB29d347Sn7TW78gz2qcn6kSTsZCgRK8BDFrQuoFXN4g",
  "key39": "3S2Jt4wswE7TbeNS863Ma7vuJKoKCHz4UYCRZ28f6vf6yrkYJiyMa7nQ4WTB16SEWM84seQeRQ7Emw5tMS29vXjN",
  "key40": "op8yfZVSe5Vht1FgFameASjMSYD5rEM8y5rz8bRyHhzRQBwpvMJCnscSXaQ1JMEvP7gVnG2qx51xKKNenJ83uXD",
  "key41": "2WQDUxvst2YLLUPkMYxr7Dy29QQxRD8LGwYkLaYQmr3k3utAVYhTmpQU6fscfPJ1GbNBGvJaRxFc63kfV5xDoYRm"
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
