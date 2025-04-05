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
    "2KU7TcGTXEAt8sKfsEwptxJwjGgRoUgutDUw8EBuWZHUnVpFZrYoCqz6wzRkfvkaA8psFXYH9EANGjB2KrX1LCbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bZHoDqZoDc6Yj7iwv5vaEAhrNSt4ktTTKzy7QQEagGK5z5gWGSrWapfe2E7xUzm1jGF7RYhUMpYgoGCzwbXoxSe",
  "key1": "TMySF7Gi4uacqvFGpxXTm2fKrbUv8zRDri87ZahR6Eogo8tyKSpZhKnqBnznQByhgT3NfTxf65vNxdebZPfFWL7",
  "key2": "3133hTuJeWEDNCEXaQmfsUDKPRmV3aPcKLRE1abVC42Fdvyx3m943VekvE99p9QP6mvjeaGx6skmxfJC8iWvcCpa",
  "key3": "5MhUKtWUYdxCTjmwxAxJin6tRoGqDwLS7C5igwPEffiBrxTivywQXVENTTcCR2LT359GKSfwkB8RQ6MAmZuAAqmY",
  "key4": "5BuPrxjZhsnqhRpMUWjLd65nQJbRWAW6fP2fjahpRpaSetoApP4EPomidBzbyJ4HaBxp1rgQ2wjMLsZ1skGhcxuT",
  "key5": "4TKLLiS7VXaxpzbZZMtE5Xkt1PpDVD9b2v1h4yH3TKS27akTZzYmuSSKm5VqXdmQ4P9q4oX6NkigpafpqwAvspwC",
  "key6": "4WLyyNKQtH6gvS2J92FHz4BFYX5GxuApapPDD5orWchcLZwz9BSuvZNRxR9LXCbLwLzoLCgkQqGEMvuSTHkxQY4N",
  "key7": "5bvsztR9Dff9ri86CnvQzr7G4XJeeyAx8wK68kjP5nnrBaCZkSKGDTcPStCMDb7EjioJqD8Emw1A9kTwoTqcFYJk",
  "key8": "5R5miKTngsv5VNzrBfHuvpNivbSaf4rRwFbQQhXb263GkRYhgy6oi2hTYjg8Dz8gSxujuwqLbRKJrHVUbCc9pr7m",
  "key9": "4TJEnzocchjoDAfNLCCTbmYPirHTSKYmkciqmH8sfvePxnpH9FNfXMBRWNGKSCdoK3XirhJi9ASADroNZ5Bmxcj1",
  "key10": "25PcxiWmSsWsrhspmT5wjF7zByatzkrC82uJaMkgvJBLYxhRqfUXPNCga5oRjSDJsYFjc2YdbRHLaoZBKE2Sihpi",
  "key11": "45ps7AuXeQrq4ybrvd88CVELyVhruHALMVjP1p8s3s22Q3cZmHSatbY47DhUewwaLt91Yf7LGiNBc5tAuDSSBYbT",
  "key12": "6Y4enzwj9btqrqSaACSMC5R3LKPJLtZNr64mBrvzg7GWbpGjx218s93rE3MU4hR1QR98gqggiMGQGV3CPfcGsk5",
  "key13": "iqShdSugDSMmXaj5y5o26NwgtL1n9YcXoFETnM6qFLzeQx8iA2zgbcLgrPxxxdnTif187RQkPfG24vybv36EaGT",
  "key14": "2gHD7Me5Hej6iHtyp4wp4215BTffHACVVDbPneu3juiKC3sSyvomjgTrRHuTbXcXj42zHdPEeVj3wt8EJjQMk9ZA",
  "key15": "NYBs5KtgNiwXqbHsYg6nz4qJKUexzQjSozyBRcoi45jR8Urdi2uswQ44MR8q8T7AzLGieMkwf6wNc7Y6g3X3LZq",
  "key16": "eEntGSstib44aGqByQVn4RgjKUtFy3fYFknjagd5Y6mGvVe799b3bvZbrmUcBe2MvYkiQGuJWDMQnBUn1XYGuRq",
  "key17": "2JD9cVSnFET3mwXJ1UaciatUUxHoucL1XkYJRUVdetXHsNkxCN3d7YSggpbg1CAvAopcgy1q1B9NCNqBoq3qqTFq",
  "key18": "5y9n9LUtecHg7rJDXzhk7uzFAXcBi7ZChgYDdtnXUSSqXavZjofPbwjtU6NKo8NMFGNUYoU8s5swTPEYwv5sDB4V",
  "key19": "42bU9ZftmL5zvMLTFLCX8mAGSokVa2XAY52Lij1zfe3ckPtFAa4dJYtNcyEePAt5n5CQAJrG7gKqbDxsUbELWMhL",
  "key20": "3moSDLwBY5VfS7pfoW2gfiin9KKvAuQGBcM8dgzty1N3da5ax6s4p4A7mHQjQKx9bicxoDAXwNQ7U1wiycPgQpgr",
  "key21": "3a3sFYeKCQSWFQpJEZPixbwBzof1u5TesDwrsutYgNW8enegxbFPNeyW1RFsozsFKWE3hXbETisHX38hJqXaYmLJ",
  "key22": "5FeydcBpQCm8XDrfcFyy4uH2RwLywv799YFSUW34QRjrncbdtWjAUTk1YRdJws2EB45Xqfv7xN5GfXRfg8X9mECY",
  "key23": "44ZG7EpfCtPz7nFJg7tEwHRQtz6quJydG4tgERGwRaqMqDgL9HjyMx9SZWXgeV9ZGJoYQo8vhKihtnk3JeGXR7o7",
  "key24": "5pZDYKpi1mWUQ6L8kiZHsefrAhSzi8acsWMjVnCeQ16XPBd8ETEJNpWYcFeU1R35Bj59ksM8iRxBTBh9iTQcLRpV",
  "key25": "3XJnLrJVFiFvzde1JcCaoiAE4QcrKDNz9xEkJRAznPnVuA2qywUa1tgTH1du82AtBu98GFosVAPu7Dod2fyDcaxt",
  "key26": "JWjavorQhFhYoM1H2YpLMrgSk1VDjsgFJgy2nxhrfoQ421xUoHRjgx6ECXwLaQH8ZfS3NWeAfwWQnv2YfZMMqBM",
  "key27": "DsTTWZ6HK75vgW9cq3ZmkLVtNX2Q4yc1eieoAVyZSADbp23Jin9dPgiJcWTHuxv1hhZcP5g78ufSZfoPjYfeu51",
  "key28": "HJ3MZW2XZoWBzkXFRRUAbzLQfsHPnZdqnJkFYVCtC352BknAanSDVu9tzJtyH1R9kNnfyoAda4jr66NP5tt9bhr",
  "key29": "3knA9R6BNzT9jPZJuRRHzzdofQcx4o5AWfKzMoz1MNhtufCidRhJD7jsSoD3JkXYhQMWmgixZpyjV1eXjL2VCeyL",
  "key30": "3xVuz8ahym9Yu48UdiJ8JCHwornzrfCA5pc7hnhY29UnSNrwHUxu4Z6pVSVvom8ufqbooUmXAyv215SowqYoaDZV",
  "key31": "3ht9c1BBxd6YXyPuM4EG65Mg5RiJB5R9uwhhkCGFH8YEDD2brepsXNtTUWsdHJYBUyqhyRz7M5WgZAuhoduZZhzQ",
  "key32": "3zWyo3MyVpBSNG2anqrmApnguL3vjH5V8oEanXJcf7agofYNrE9Uq81CqH9JUaFVNNvwF48YPHqjCQmRSfnFjqDe",
  "key33": "4XwivVABwxNH3yjtzTZdFmEh96EjECxmuxEqeg3RQxxRBXy7iPDr7SfHzcgAfGXgr5WhCjooqnFG1BcCWK8UsgqP",
  "key34": "5VwzDLYWEtZjD2xWSDVcLnwstF5c6aDzsYknTb51NuEvmusfjERY36xHfGxihZENzQPZWqXBbpyWAG5FMstFUkfr",
  "key35": "5CW7zop8KutPbzjivFtKLABYK5NmVX9cjXBKnPjoHPmjNpcS3aeS6GXdstez433upZ9RVAsV7dnU5DDwwRXyHx8s",
  "key36": "4MFk8bewq4W7yxsaXsHX74aEq9pWGwHd5ygjhmRwDnhwVDwJQGNY6ExEtQxu5mBBSFkdSG48sDjr3pWJojHdyxzh",
  "key37": "23jsFJfhnbCn6jzfgaoTcdzZuTshFj1o7JEVFPuTDpyuDRkVQzajxTwQGgxTb7qh4cHkaotmsQhhD5gHhcYYMNr2",
  "key38": "YhvRnsXPcMLEEGJBG7fytyF4DFufS5c2RRY1Zeq4MbrNCccvgvmS9XEVMPbaXUoKxQt2vkn8C98f5FMMqx2L3NV",
  "key39": "5uth2X9oV9Qu4VgQP7vootjdbBPmMFYKyEzttfHkzp5dyJjXckXSBsnU8yyxpDGhudezcgJ4UwNKr9htpfHRgGyf"
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
