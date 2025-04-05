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
    "3TfZa1cMVTR8EjtwrP5c4JTi4QQBrdZDzwADwUuQatRS4FwC9ThnbCRsn55TptzyVG22EcSP31m4oJTpxhsN2jze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gXDGcF5Lpa43poDseebuLV9bSzjwPFXN9Rrz7xazaWnU7rotdAbPBhjLhPbt7UamRiFaguPvoDqDJJK37uxNT3S",
  "key1": "A5nz9jRyXYieSFsZXTRYnrwzPdizYsoo3SA6XmhfhXnpE2q7W5Tj1LN3JShz6piaVaLPWLRkaLip8gSBLtFx7CG",
  "key2": "47UU3Zx7RqPUBxWrmskhS8i6uL4PihcUNU7dckUzrUwWFrEBGETBCDcacEGWqt5LwfSw4DeWzh3g9qcBcnGRaVRh",
  "key3": "4zcXCkr1kJrpuw2XKUV8CuftiR73cdSbGeQRaHBQ7EAXSic7tMCcF6UZjWPYYNdKjvPJKSAzgv7MZ8vySha1kPHz",
  "key4": "3nZPmivsMZ2z4UZTDVaarcLc24Ut8jfw8opANna61c2nZFc7RPVoAnrq3rMNMseXT1niedgbEZPZNcZGwh1mMEn6",
  "key5": "2t7K5jQRYiRJAx2CRKVmv59AUbFXFXKTCQk1k8g4vLWnYWoFS9GgRxCTxqMW3ne4CS36aL28AbJuQntGWxfmVv1A",
  "key6": "2LNDaTSU2vmqG8i2VcxdqRPFgvGX7JQKro4Cg29mH1Lr8dB5wpCPFfSxeJcrKF3aSUELxVXGb4bFmC4EkYgBSYUN",
  "key7": "2Ju2zEKeL7X9JYk1LCFs3E7EM2BNWtH7LxEFce5eMD17hY9oY2zXc7Ci16ATDcUf8aQrQJiYoMskqdXAqCf1vjt5",
  "key8": "4fJpKeY4jGRoNGVjySQQjrHgmDybht2NZdY2JsVhsp6ifRhnDvN81LaCPuaxDoFXDau8RiYFCmqeoJXbftsbzAHZ",
  "key9": "2qudjfSdwm2Ea611Wt6KmFSFE32r7qH4VnxHvtQx2JGketu3jeLhmN3kdbhfvJwZPvjyAGoqoVHSn85yJWgsBXnW",
  "key10": "5DFksw2NhAn2S3jdboyBtxeLbqKWBYyBDG7NW8m2k5xgeUVo3hV4xSggHsms7bxMFAFTr4aUPux1fEHCcCV8bcJy",
  "key11": "41tYm5UYFzZeDD694qExzHGBTjK1y8UuqxAfMEr76cLuFKpH6bVTSr6LusCAygcC1gEDARJj1gZNfNxJGbuUqnj2",
  "key12": "Cu4huDB79UEGWx7ZfMSwG5RE8tsNhvVyQ72v6JzmUCRDpbvV7sySRAKtnWg6KVhmrnPi4zSXff4jbT7kjQLYSUJ",
  "key13": "41hQDFGmZvHVewKux9QiRZUmvcoseXfmaoCASBwrgbbrJe5Zj1WRFnq5TeUJ2PciENtxnPDAvBiEpsKyGqdoi7xu",
  "key14": "238ZxDc7KTZte5mQmArpFQnRVYn3WSZPbYfSPD2dcnjQEkY3HrzHp7qjstrjvGACfrLeamhCmmcRNrsZFGGPGWbR",
  "key15": "3mzSxvz2FghdtHtEmSGCYA2sGDnsjP9KAYacQQLxWA9QrwtVHs39Zz59KtEiNqEK91VfUVMKhNgkfNVnhnmfmYy9",
  "key16": "MTTHpm9bSzaqonXRPsyCcLc68Fd26Rnzg5gZYYt5kcPky8QnSAnUteCv1dLk4dwehiKQz7NH1nGShfSaRAGRWp5",
  "key17": "3ULpNyEx4wJfD89bBANs7tJfkHyjBQa8Mvg8gg6Ec3MJbgMi6hDA1oBQ4EjEYZa6RLEVTYk4NDjqFKnoBKEEU3RA",
  "key18": "3EcTEFiZga3LkN35bgYZmUAxR3G4aHTvkazBEU5vDGHC97tsbMN2bF4Jbo4TckDKxW6kZbddDQ7xyuz52iaXsw3m",
  "key19": "2xRJVcnysbGEqPuYwNfGNG9eEXqnjsY6apujwhhyPb9jKRsXb5BTevM4gVBxX2ADLiAUmNDH9puuKgjDdH6Fe48y",
  "key20": "2yuCyER7r86GwLXupLhQtMcwXWxhnQg2Hf2yVwHBfRfL1v8FGkm3kRdiESWnyP31mdUXAhzYEocf4Ensd7U3XT8D",
  "key21": "2feSrrCWPQJT168nZv6HApMJn4aXPHEH3HDSWwovNsQdiKC2vwNDDrFSGYTGPHu6HiBzfcyzmPmDfh1awdt56iaW",
  "key22": "wmEeNLAhDtnZ32c5X5uRkBuL57T5sh94m3zqk7LfTRFxPcga2ApzPco8ZKgYKWH6AJrVWkWFYatMnVZnY7ycjZ8",
  "key23": "3iNTQPdrwxuWux7nGf72oV3uDTYya7WsJiTngkFNPmwRCdaLnY5JdZ5zKQrqtvuzzY94StXVyhitLFfEQZ9Vbsw8",
  "key24": "26dC5tb3Lp5k8iV441QP4sQZwZwAKfyabW98DUgkZL7C4zoJYMSLJe5MScuonKfVRcEvVCLfnbLQXQwNStaHhTWA",
  "key25": "a9gJLJ7hse6XMzJVNCYN8iqK62iFUefNc6tuDLHh9aYAdi5Vzyd3o6aqLSqCmvcFXVg2srb2ndGNrLHbAD4b5ab",
  "key26": "2rKzzWz1Y7zxokaMbuVke8DCMS2hwmftd1Ry3NWFXbwBEP7gnW6BP6qqqjh4b3giiN2w89H2vLkjaviAmjmXRkS9",
  "key27": "4mG4aceZDx8rprKeQp9g3hz5MH6kPBhw6r49Eom7wAEcdW79z1BrPR1kZWV8cZAdFusRKqP5Ji8LniEWufnzWMrD",
  "key28": "4rgQK82sTYJBZJQfTaxFsHTs9zBmWyy7PRSKRTL4uP3D7pjJvnJ1fxWdBc8bMXYENQgoNqXXayyL78oVFVo9ak6d",
  "key29": "37ockqrsN4GBtPQC9g9UUTyFLcbKS2NbGNfTs6AJBqYobcUyKtp5fQ4QUTkyAYdFNhc1vEHdrQzVPggWd8Ka9WSg",
  "key30": "3bNi4W4tVT3jzL53uz7BsDg17aC8FLohvKzAnhBNFudWZFN2ekuxseDXpTRp8StWG2E5WBQUr4mGJFH5cqEaTvLE"
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
