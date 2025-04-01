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
    "LrPBgh5qeLbKbfmNcUag2zaQ3kXDRYmDembsCFjojaZRty53nyj69DuFujBG3ssWbz562boNVNEYSA9Wa6q1PQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxSF3gNQmQRkxouEuXTkkK1yYLq4Dm9DwDbfxfYCKFJZD2qvcvMvvsuc9aHt63WjWQw2Sd4uE4rLBcTpd6TK1oj",
  "key1": "53W1cHBauVz9vv7NN1i7ziHs5KLfN72YxWkuQ5ZKVEAv4Hizo485YF1QuBWB4xCxkLhqkKR4VwG8xtSWpLUyNhFE",
  "key2": "yfNa6xAjYW1kWDCgdy7hu6Lp9yLJaaz6D9567bvZodY6Az6uySATKtYU45jN3bXumsYoBtaAJtf1RWVEn9Mrumr",
  "key3": "4iCEHDnq8nsutSpQZH6XWp9Cas8VjpxCrCkNB46QFEQNmtki1dD3x8kh2PtaRdkcX2YJUNMQzK2BTjUN81ZWN2yW",
  "key4": "35vQd9Sq1wWWbHMWcUUUsovEWhkQxJfg2bBfjnSeczSbgeonWHjU5ActNFFzkniDJSCDBSKYeMTE2ctNzZtNUGFY",
  "key5": "5LVP4Wh7v3KU6nQd47JrUNKN13y1JMC1h4b4rTkmVLfLJow9CmLZvcipB2NdKYfpykzeLPXZCJjfidcoJTajBkx",
  "key6": "4HBSq7TsavVEa2zqNyiyyXuJYcpvDC1xPFobZSuzHqe3rYzg1YjSGZvoJ5cFKU3sPNeyBaJm5w19A7LL3yRraMLC",
  "key7": "5yD4BAjDaZTRJJS4Nux1d2EEUvSr2jBNnXinaZ7v3kKkf4L1R9rfnyTCfJqS4DQ86k7fSTNFoAhjc5tBeMCA16Ee",
  "key8": "2hznG1HFZKuXzUnhAf8Nio3SoJmhvt4TvfLoHMAZPhJ1d73Vjcv8PN5YnuF8cVLsqfdwqAMqjUJ1Vju6FdpEU9Ad",
  "key9": "S4msGX4vvFNLkqg7xdnVU9wqAb8hJts7CBFw3PQKiNx8MsVGX16MTBVKaCq9pV3U85tcRUgbQsxVh5fnYkiarYZ",
  "key10": "4bwNLAjCpxQc1o4Dr9XTaUpk2XkxhtD6tDmKd3mUPoCEJxoa4fZ3FX3oxBLuJnhkATZwxQCUv98XRJ75JgLRGSjs",
  "key11": "9PbtBHoUcEUy6BLuav2hTLYtDaD7hCytvVBZ6teWRFPcUBjgj6L2eRDwFMwU1GQubV3axxsDRQKBKZGRrPDurpK",
  "key12": "5nsvZ7Lsn94Ucb5GBTTvsuk5gq7dntpsHKBskDMJ1X7yFn7mZ2yQT2VoCBArbaWZST6tJhX6Zjbip2NsKBR3TeSB",
  "key13": "4jgman9HgZj5ngb4d7PmEF6Xz9sYTUcSCBgvDCqi3XMhUusNgkGQBr7c13KKmsEQ4wWUFzpJXDrh6DtiLRhdKXoJ",
  "key14": "5MuB1fHaS41FLsfv7KBmESUvN9MtZuXib257jtJcBH1rfnPTJbv4NHygaLGYkSxHAt41hWgiMKdmzqoyXZYbTHNP",
  "key15": "4Bcg5GTfcg9ySkqv7ZoUMFw5fHuqUvL4Pq1H9S7krgNZR2E3LPqJPXzPYx1zvae8GYufgdCJ3yS4cmRvZ9HPTrJx",
  "key16": "5DVpty9EKFeWPsz9VvHpouVuuDeceN6BtjeGnen8KjACYtZpvwrVSG7833ht8YmLC6ti49QaHfh6q4w6NxSwnh8",
  "key17": "4dMfTfNq2RDTKEz4Ki4oJ7q6iPnopbPkYZrxX84sEnEmTVkUcmY4MCvXcGtLSsuJvEG7sPmnXm2xodoNyqecNR1v",
  "key18": "5cM9FyiRsez2DqNieT3mALRUBFe53XYeirGriyaG8VTrLt9GJU34w8L92H8V4nzorxo3wVJVXFwbhe2Fr62ZGE8w",
  "key19": "2gv2yw5W74fdCkvTetQ5iaDx9v9ZthWUH7tnXTHq2EMYFtbyiWA5vyRr4t6hHjcLAghx1fRvZhoBU8RSzE6kZWqs",
  "key20": "3WMnu5CWBvErA8hbGrALJxn4WVC9p9FyJBs98NV9o1z2yps6TGyyg5DirQX6tzki3xthjB2dn83BmT9ioT1Kqpsm",
  "key21": "th3ng3CFpPCzSqfXqKvy8RmizuuGBMkV6zquGyidenJv5nGc5dpqnC5aiJuHWDxJgQEDitVj334tyKs5zo9Sxqp",
  "key22": "5LtXmzkz3BAj7vbqSMXytPZkLZkRep6ethA1QzS8mCpKuXqGezkmdQ31sXKqpQsRXdeE7PKHjAGRFHF4D3shuJxE",
  "key23": "4SDWX9YVHyYTzKAuSURp2Ct5QfprZhTF6TQrFQcxs8fKYgCEYC8aLQfzCNMwnd2riJYg2SHHRE76SNAriEnQM8YD",
  "key24": "zGthG1VeU2RmycyEuuXxVodj86qwm9Qiua68cLenk5QWUvnTN6xBb2EnwL45FeQSMmgK69Ksnfn8a2X2WjDWbEn",
  "key25": "3EXnBaum9T9SBTZU1XKzZ2KTxcw5DpwZn941TPY2reJMu2nWndounpj34c3RS6sZ7x13teZDceu9sdNnorLRL9zM",
  "key26": "DqLobLYHCfm3SrgJFjZmBQZXnatkqwTJP1DvEtsi1kgYiii2hv2mDYmjaze97UPc4hEsjz6TFtBA1AMtyCiYa1B",
  "key27": "5WRUr8tjh8EgRZxWBHaxCyAtGP5af5LLJGG8hCbe5A7h3m5Ah1r97iBZC5rbezBsB8WELoZoNg97QYd2kiSUnjWx",
  "key28": "5xdnf7H7RjBeU9BPYo4kjo7CpBm8eMb8i1TdDmcKLsBvxQVBzwhUu5BckNJg5epSQXDbCx29qRc2vdHKmJEp6yaE",
  "key29": "3o46hqnow3spJYjp2XmZJ4a5DewpZKpJQawUTcoYiHrZSsFzbUJazAiKru9BnQcdyFapi7N35PjH3ougF3rF7wYZ",
  "key30": "2dDCEciUeTqtq2WRtmgEeBAdrEyeGdDoiqUJKxNZHpxGHQ9k9q1B2E9aAJoAJKNUrmdaMg89zW6kA4Gxw5onuKLM",
  "key31": "39K6DkKSiB9dyizex9D3zco1wQgaEfvvVu7udm2NCSDvKJpF4LgdCWemKMvcJkDs6vJqABWmv4txNoATqj7SoLBL",
  "key32": "2GNA8o9eM6Pk6bmTaXTYV9XoSB6MEh6NWihXXRTnNWwV2Y95TzWk63WsAHZjDzWM6QToxQeCygQ3w9jM5WbvNVia",
  "key33": "2reTuuuWCFLUYHdt1SaDNDBKnVbyRpFWtQ5Z6NZj2jeHgS2vzE7c4DaDvRSwzP5NNk3uyoGo1ph86vox7c536HJd",
  "key34": "5bYaB9j9PL6YqnrP7tfCYms49GAAysmhLFHKV953oCpGUaPFVRruzrscyhRABLQ5MQyt4qzXhBi4zxZGzLZe4k6"
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
