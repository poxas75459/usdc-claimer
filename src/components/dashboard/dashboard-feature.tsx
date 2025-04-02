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
    "5xza5XiUp1pCxJni8XbM4aCPVxXJ5gXFczKL6mtpn2SL7EikpQq4XCmWELCxiCwxhncK7Uy6BzPpUDVzESyrDCWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Wqk42DCRurP7NoP56pqGrtUPB98FjNgNC6HxVFE8WyKkNgZxMz1Hee9sgBMWn8coQa4HNxqaPfeXPXPEzWKcVp",
  "key1": "58J3TmvPyyTLiXMAvxbyGc3YuiN5ise95S566g698VKUkzMvaP4MzNDThF6XpHYo8YhtENByYVuhsCBWuqQo131B",
  "key2": "3TEYnUBopiFud9YfFg7A6Y3HwXU2hjrmrJMvRJhBHCYvvJVA9LPQDZxedeTj2W26GBKZAtEGoru3VSLXvXqCifwj",
  "key3": "3EbTZxGWo9FajFb9cWTPRypBy9KmWrwAEQ4eWj4ZVujfnEFKBj29Lac8KadLwKTsKtkhMzSQXgnhSkQXjVEvdBQw",
  "key4": "36S8SsbV7eYY5hP2t6i6QsgroA7uUFPETtVHrdg82JmV9hDJAHmnrduPaPWGAWxXtgSWK2JY7uHvy2rGjGPCYT2p",
  "key5": "J4M8y4wXF1CmDJufqevPrYTnS69HhDbHyn1cjKoJcf6mxpiFYwBqAYSK99y3j2CSHXn5CVXPRo39EgorRmRTmzw",
  "key6": "5nBrfQTnfjm9crVc7bpMkUWVpqCFDY2GMVqTesqRfF66gdMx2Ui3wmZJwR7ZHwJm5nVaxufKKsn5J3gBCmeg6h9Q",
  "key7": "4zhKWCjLcgfUgwCV46fNQTdyQdDYmU6QGiyAbgkj4G6pTyB9KHfVB1nGbF8BoVS8UmN2EhajV3i8KgtgGuVJFAN4",
  "key8": "2W1FEjrw5rjajjNi1NCYWtjAb9McG1K8hJKG9mVauPdpTGNUMe4Thh5faFQgTx6xaMimTUyY7HkyYRKznSyB9gvi",
  "key9": "52TU6JqaPxa2B65Hkq1NuLBgvHVgiwwfhPgaVPvZk8Toduk5zbgZjJ7Q2ZtisYRsKcFRLM6BPJPYXTc4oP5L7N2L",
  "key10": "3eFdMugc7vVDqNhiSXn7pTeB7tnLQtP9h85ieFBzSHC4ESoNJfkQGXUHcE33PQeHhZWUHSj9LwgUXZGys19JSmvu",
  "key11": "4WBHvHq4JQU7hs1r1L218ixj7AYH3ts9TYTvZckSUP8oFgdUZdt6fzCfjefa9J9MCsW9aXjY1PaHfbJmJssPiRJL",
  "key12": "5smDuj4FjmMzP7xxDoCZDNeNYqhW7RdNgtzxnyBfMax1AtN1rt3BUfi2dvR2zwtnYXNC3mijvAfn38G3A8WLrF9",
  "key13": "5qTAzMykhswVsegBj54VNefdGwWBhsMxZHLko95tjaXDjQwQtNcFSmi1kNEx9x9AK5ycSQrFqXVzuez3EnVYGSrM",
  "key14": "4XzbdAsTqXJRMknemNQbxmj9sNPF8jBKBvuFuMnAGDp2b3JRW7rxVLQ4HDuuH7c8aYdLBR9AT1FruoKbc6632RB9",
  "key15": "3Qww6f5iMuhJJUUgspLqQGxBupSucHQHPZEENkPq9Grdr8EfRV5JxfonMr5ssWo7Bb3mjVpcqU8iqAnBnwdMQATG",
  "key16": "bQFnDiwfez9r1HKSa2vvQCrydqWib7QoQeG7uUHssJwe5FdwJq2QsGxp8B84BV3QGPSHknv5B9JcUNeAiLQ38Un",
  "key17": "2F8mLVpy6G9rVagzbuXvtinAxYRMVYARSpQTe6E79nnk9Bz9PtY18XtHp83P1ypDrUkRBX5awT7kUYybFKFVuDBP",
  "key18": "5aQ7q4FZmX9J78d4EQTwX1RfzVHNLHd5WAXvhUEYEYvGneJqYF4Py6RC3s3fnhL1PLdJc85B5tLFujaShQpa8Vbr",
  "key19": "3doT9BanV4Jq7kbGUzuoU6HpFqJRuwfNfbZwJ34JyRuyrfQTRz8zzYxtfHgTqcgACMyvQUFhwpUMsRextwh3h1L5",
  "key20": "4UvYpEYM8pMVz2V86ue8H2VFmwGaTLAn3s9De4vaXLq6xL9p4yw9Q2AUiujY7vBS1Wh76QDZZ7cs5zH8WL5cg5Yu",
  "key21": "3vfaPLiXoJ8uPSNn1GTcgZwWUN38whKUUmKat8N49n1TPjfKE8EWXjA63Ytw61tafrq3goT8be5Ztqp4nY48MzMq",
  "key22": "3Hbm4S7rxoMrZeF2zv1szBCy9miMywruSbBz9WFvebfJg2wY6QwqEc1QZDTMoRDDUk3zBpJ5FRrHmhestnGrmi7w",
  "key23": "4CdbuDrwL8VzaDFyviiSUB64yxCj8SkjiMCho9RVbMDhn17sbBeoAbXc5rS7uZZeHoBPdXxT4bDq2MuQVZNcv8Bu",
  "key24": "2KCXfgGsQmAbtgdFRJGLEpXe6aFezAWR5Z8Y35oWgLQdpcTQoFDDKK4Y7qYQmp1LZRLr81Pvo5HBoYCAvuSYN2zB",
  "key25": "JQFmLMe7ccF9oHHbzaZ948PMimBVMwrQ6g3JKGVMaudkNfuffLF1K6PRGwYmFZWsidv8ofuMJ1L3mDzdEBds4Bx",
  "key26": "3EyvCWfXkvn2SZZPtxZxEnXEhhgo1t9DmcVeg61CwXHMfyxzXYivpaM1DtfjULpEKqFQ4BCeEXcjZNtCmQjiTydG",
  "key27": "3UpxdkByHfwXxFyTHS2qUmQ4iBRdrz2qUv6G244FRxHdAhh8pa1Vu518pc2Qnoef9j3t6GhMf7Dc4gnrPQAJ1PgB",
  "key28": "2jUYoYJGiseJKz4qD47zfhp2fLPVSWhBgysdZtDroWsjETXZ4bacojS1kGug52UQFistKnDgkW311gnp6HHWtLCS",
  "key29": "3Esv4QJbhUPDrYjJLBegSArFGbnsQoRGYsUYjTwMTFy9GF7rApAhwSXox5Gd23HgY56kW1sTUtEUKeCrmxC4XVzU",
  "key30": "2FF3CEG2zTNVGe3GYh6Fwpxsy82cf2cvZzuvYFHH24botk8Gu33FT4mw1WYffMv2aZ6tcSASjhFPBtwcRaoyBDaR",
  "key31": "5Yhiu8fR5gKWeHCnn2cXGL7MM1vsX2omCMjrAkc5yXbin29mRTRppUfkrtevGHcRXaKKuTQngSMRGp89XxnvmXtH",
  "key32": "376ZcQcsngf9PJhgupEhJgSHEpoPam3dhsydNCW8bjnnnUhendmjN2qGo4wQwo87XBwMFsGtxMaDuHkQKc87wXty",
  "key33": "2eX6JYNRtSqQNfEW6RHb2rDAPF7Hti5xC9HdHvDJX7vD8RTYgg6r8Dvumne7CR37pCadtybxhn35EmT2PQ71MDnE",
  "key34": "4h7LgTYfdU33rjjaMMJxPmGanS55MEoeA58PXApKyeMnPV5KV35hGKV1hkvMUYmJej4292opAZ1uixZyLS1VY8vn",
  "key35": "5xfj7bNfxjAtCik2YbGCwVoVjhd97toRN6wtbqKft6CRsvbS3pzLxZnYfAxExR83v9PsTPhgthq9bnSEth477Yrx",
  "key36": "5rcJVgHScQwkCB1FjTzEf6Qpkp28RrDwF2ALRruvkh9eT2B9aqriv1EeAGk5nonki78j3HQ7ix4Fgn8QQnyCWcnT",
  "key37": "2BPuwwfcAdYckQDvu7n6fD9oBNvEaKFsgHVYnfqBqEKKxUBVTesjn1NC69qwa9FELkJB3iy9CBhFRh4AoQoM78o2"
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
