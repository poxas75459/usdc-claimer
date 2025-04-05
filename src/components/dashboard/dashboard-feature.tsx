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
    "5qi1FgMi7mNMBRNyzktCL2zZNhKwCSTJZbZ9QEpDCKdpJne22qcRq8fxgY6E62Gauzw3yDmQPX1yttRB3NEwFVUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bbpiGebVWMfqrHaxLLqKBEqQrx48ajx1ay5k1j1zZs6NZNYvXLvR2aWkNFKu1tjsa8FGcrceLatSGViPPYYvFrT",
  "key1": "5dBpcyhGSK3Z3t8AfgmK5rAH9dpJnoemN2nQKmc4EX3mB1z1YgrUfwz3wVAnXK9diAE85A4GX5o8WRRphESat6pK",
  "key2": "259JhPj3pXPbmBqahJNeDvFQQgzVZ8PJbF6m5W5zrTLqEQ1vRZNao3wFno12AtWC6biT1BehfweAtKuN9UWw6XF1",
  "key3": "2H3LqkoE9anoZGGgkcqC4H1mkZCE1VKJFuPFwuH9ayDfTYnW22qTQvbZMtwJ6aerjy9g33EQHwjhEok6B7ffhKSB",
  "key4": "3LCDYSGDb1oTcT5fPaQC1b8pysk7GnF5nuC7JD7yWdby3Vf4EFb7QLzudAB1p2V4YYJdthLUaRyhYSjU8FANwuUK",
  "key5": "p4vVnAmJL9zcYXK1jms7R11g9mYS7duuNhPY4x4oje2MYCBJzetNr6V6Yc9Bv34N8CoCNng4SQzcUWQ9mXs62jF",
  "key6": "2AQ9M9ekQGwfPzThRxKkXpvbcot4aontXXKNeKb6QBTgqmzC4j15tGnAnAfnAbHfcu5wZPrx1tCaE4JV1jXSCvUk",
  "key7": "AGS4TSS9PZAprRT8Twb3wHusijCKdyXiyynYyoQYpJSKi3bU8tM6HJB2Kk4HFEjNr8HrQLhBaybiamYEzatVr1B",
  "key8": "5M7PEwkGNMDMvzo86J2vRkJCeKFYawhUXXwJJyD7V6NtYxZg7LtgnKq3vyX5s78F2sCJzJxdmhyA6camLGVwXXrE",
  "key9": "2aWBdy3YLmxPSGShjG1krZ2ikTtveS1qBXpaf1joX98csykf5U7vWGgT1CnCpkajUeZtruXddStpGKETSm6wcAXA",
  "key10": "nX3RPFdmQXJLVDY4SYcL6nWDhA4KMQC15m76cn3iCwej1FvqhH1JGsHwa2bRT2zYtvxcCKkJ3oNrwW1Bt5xQPVh",
  "key11": "3M2E1MCxe1Rzs5zfiUCPK2tRRqvWhGU88uKULJEY7yMeoSwfzFt61qzTZkxsw4mxcX7NamPKZSGrxECunDdDaUgZ",
  "key12": "3VkN8eD9M2LGdQZPSUUbLSNEaGNQZec6Dk4jccKvyRPeqMCwFjteqiJdBffHPgQvEMqDQFNzy1vWYCyxZg6FUsmD",
  "key13": "2qNUhgFBuQqUhtiAy3tAQRxJBBWnEB8qray3keGQrnqigBnEpNxqPNaKfxf2zWpjtd9ddr8N2dHaM3pC425XRKrv",
  "key14": "4qepd8nxvxv11KDoaf88cb3V6E7hJc3CnAbs7PT6f6jYFBYJxrDqUv7hSvT7BZaJYLpBpnyWeZzx1UNVJ4uR228s",
  "key15": "sy9NtEXEZijXYqGQuE3nodV4KHuqCv2V8LP69vSx7Uz2fUNP3uWDdoYFL2v2ZJztxKBw8oWVnU5xCf8sNDot9F6",
  "key16": "3fQbw588KABK3PiwHW8FueQSc3kJsgssfomEjg7Z7WFeVGZkeMGjNdpTHy5mkQAYVFViNqA3dx27Mi3u7UT18a7T",
  "key17": "2aU2quxn9oxih5i9Qgmz9MNpHmgd7WopKgpJSxYzZ6m5LsgLxMfhaqM4s9uw55STBenYiCtTa7fvdSTmdg1vBdi8",
  "key18": "2DWcFoKShSQtHqCT1uABjxvV73cYgZTxhVZtEmPTY6SnTvgYft3poAV9xxhNY1p8sB3JT5srp1ZZAHTgGdWnCTcx",
  "key19": "3SGbdENePsrUg5ngtbQdcYUNyBRkkkGVB3ixFRpP3cvVLhbn7KV4Ard87Ms5Kg5kCukoCLM99qNGbpEuVooHLZzo",
  "key20": "4aQXcEFq8odVN8WC5aHCbGymFJ8zJuo7WrNsCAroVUQvLQDKAEFGiNJrW6MC1LWYV8HLgZBbkvHvPVtLGL9tefhx",
  "key21": "3aqgrkJBbT7vJs3gM5cmaymB5uJgBoeLjB9SBV1MrC4YsizCLXe599JmGgS3E4veRTDFPTkQFmuKjufGAiciebdv",
  "key22": "jqju3anp1Lc5RQWQQmyewSqEGd9iPNpt2E4aS3qJs32Fe5kRYPo7QrWntU1PiNQU3HWu9c9wY6FuBKhe8gcTwoT",
  "key23": "23iSe1oiNKur6FH1PVRCUeTxCfKQMcB75nHKnzsoZZEpk7TPqRkzAa59wDnZJRSiTiFyrchJzenEJ7tqd3kFy2wh",
  "key24": "8XHr3ovqHNKkoRiq1ZZHmb9fipP8V6hyjVYuxjiF2Qa867Fpa2VGqgCuvneAZH4WWrpoxRcuJaMKLGCKHcqxMi2",
  "key25": "oFUFqwD1mV14FU4G7WWrBTrRcbaKBy1ErLjoUrvF9xkjXUWZszceSsdh8qcMLUt2htcVj31FT7DkTbdaCPqhyVr",
  "key26": "5MBHjT29Utd6Q9Rr2H4E3XWDHRB8MuyUJXibZJg4qMP1SHgu2usrekJXFE14Jji43zFXhdrzf2RdsiFTmtDPCfYB",
  "key27": "2fPvWKDXDqHRYw43oEcCMsVM4dDMwEnHmnbvvDNMwKYGmij1Jmx3cxUzGTLNatgQccaPzWCaaCQySufD1e1Bq6Zv",
  "key28": "5tdsd7mHqXtswegBArdFpHf6aaezB5hPfhhsVmPdgb4HtPH7zD777masizCWr31amQp13p5MFLJffB7326QtotY2",
  "key29": "2VmM1rbmANzEsRWc1GS1AYtT93pJnVBQdJg2ocDHVshEojpd2GFR8SaN8NTvLP7zoukTvVgpxLWzjdxrLgt5pW4",
  "key30": "5PQAkQLVDHZMoq8uB981Sk9a5F1SbMZbRLsonQPDA3FZ3a3onBbJiSbCpSK6pjvjB7XsLGpNS2nDjwiq7Ndi1Xzy",
  "key31": "4SCc2FBscZAmPWzWzzdGGQxTDpzDXBtwA1cstVSEmpJ6zEdgyffCKqfUS1kqsymk3vh2swy4hKt943izZBXqZZKR",
  "key32": "65Y3eS193BFYgwywB4hErL48Nwvps4MEDSbnqkGFA2XLQEKY4ai81HKt1hkUoXVqSVj735NK9GwqJ5rqBo9NacNo",
  "key33": "4PY7j4CP3xkqNwci2T7y7ydCThvHogXCSXRCgxzaZvVTZuQduJH6XR7gdgh2yVAZeJ5izbwtUTMY9YNZDmAhVa92"
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
