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
    "41vPLLQee76H1k7vRQn5NJwpQR341ZYFPo1dsu4aA1TWsmCGRx6oNrcnzZvr1qLRMGXjuWjuF51WGqQ47Sub9hnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hQy4MdJfRHLJQw8zAMowAEAzA4YhM7E2dTTGxW7bSRyvKAnc1HxNTxZCPqGXBD5ZCx73ALPeYrmUSWM8aeP6Jrx",
  "key1": "AHegM68QorDTxKonUxZpm9AwD31nBobZLG43eUgouAJLUeRpsgiZnYAD7qt7KiFqSPA38WpHiRgyVaj5vQXfvDp",
  "key2": "hYs9gpYfdJqVHtN2b4sjJPLPHwuzi9t8Q29VcDR22t1JRZ6isj7ZEpfxH56PFT4XdAPHzA8DA1TLMpCURrxYJKA",
  "key3": "2X5oKL4o3iGcstWtz2tKJASNM6npUbdvyApmtEuG9cJFZqajdKTaCNEVGYxWYSdWLFLHjsY1Q48tJ2gH5j3mW5zr",
  "key4": "4bTSyoByuTK8qUwAPsFwBR8Bx87NbSZTFnbU138CQ6QSPUi42Jhowf3hfqNyHWjK1awnajtBCEChcjBieANYY2v9",
  "key5": "3eC3odsGXSShAurWXt35WJE5bfH5En9YRsu8U467dx69MzV78HaWJhzT2V4jFxTJJiCsget3bnnGVq3R8beXL2YB",
  "key6": "uhChsNF4fH9R3ZRaYmUtV7LHkuF3ckLuc13SofABWxLGkFFjn1TYzKFSqN2Cgz8hjE7MmpSbg2AQ6yDdL7wACrL",
  "key7": "5bu1BTeEuYZng4ihnXVQCyv578rqJaXwYsfRHeW16gG5cKXcndwqQQBuJSoYD4akdvxmE5BMg5H4CSLsg17uZECv",
  "key8": "2cxCbVF7jxvwZGg6zbJ3t1iU8Sx2gKQPPL81vaMtCedYXANeYTX2bCRYRwWEeHTC8hLsstBP845VVTx7419v5wSK",
  "key9": "Usgm7KgnZC55BTvS5h4yJV51CpYCTzzynB4y1VhraguwdL6a1WU7L2oWNTwzHbM31iih2hkgaJjsXJoqmtDiN42",
  "key10": "63spX9urrMcUNH1GZZjxH2sKBnPxWiuh73UDkeHi9tjVJ5pkiZmWSegkc84Q3RHJCWAv8vdRvXnP6BrmSSP9DERB",
  "key11": "3bihBsKr6Y7ozmJTAb4Ci8gLEPDEyB3p5vGdqxABssbwHPZ1WRVme2d5YxPj3ZUBcZLrh2dWNx8zDN6QXh5QE6td",
  "key12": "XbeXA7Q71ozMPEzb91mPbzDVsiioPPcCcPyKgjk9gxpeGZnQiZmVM2NuCw2tDgDATneEGPM4ysj98LcngvfJ44m",
  "key13": "3arnetCU5qYWGs8G8R6SdX7rWK4oZTP4qtMzkjYiz6pMb3MQMkpdPgeHiZquNMCw97V1JNyHBnwPkHSTNhZDaGD",
  "key14": "5NNSfGppxFQaSKzazvXh1pdFzkUdWqx49BcS7QfhARrx9LHkUkr4ndXzHvcMBc1TX8Qa7MxgTfDa6kbBMrd4gi5N",
  "key15": "3JNQUyiuBWsDAPgsB1kqTzLFDb9fujCE1odtywy6jzSpwC8RXrXFBiT6xHDXJzDUUUF7Epo3tnu9W2PeJ1BGKZZm",
  "key16": "4BLh5xHQd3Bi78rWtXPBiAiYAN96oTCEXV4t5eU9zy18L9RDHnZ8tyD4VFDTdJBEfhzMYLBG1hEJewFGTDmFdL9V",
  "key17": "4XSSHrJ8FxbWefqfrXSSWUXrjDy7AHmxTHc15884bx1ZwV87yebzpnUFxfwdcNEm1M3t5TkKDYZipmmQBkR7K2Qw",
  "key18": "61o31rqPJzDSRGJXmawStj4o9TjqiYzuYCT48cgYXUigh729iSPxtWn1s8zJHGnig4YVio8m7HFy1dt7SBV4AVCP",
  "key19": "4mHhvkk1rdToXMd9twef7kgQoqVXLxFjhtugMfn3Vy5FkiVdkEs7yzYnGwfZ5VYWmwRdo7HWNY8nVhATJfTqG4Zx",
  "key20": "3ZNdoTNK8kixmnD1SUeh9ncEh23rDMmyPm1vwVcKPfVNcpt6Wrdr7y874sZsoEmiLLGWzqGCXpnq2sFPUMqJhbRa",
  "key21": "5AVz4ZQf5uyfu6QdzU1RKq367C9wJaBEioRLDDqTf6Smg3NLzSx8ZUQW7wp8qyzhMgsUp1AK2dtJFucqyiCMWAx6",
  "key22": "5NadfdPzuhdiEhqTkJncSSqUJy3FJ5siMyXH383rVz9KLo2Qb3oJo6a54ay4gEMGJ2xoVNghdZFzTTodJPPKTX2G",
  "key23": "3VgVMqfqoi4dMpigG6oWApqGvEgCKtA45Gnmf2T8rKecRrp3a2DRXQu2w9xggTfR6rWDUn9T6kSZ4vyqDntEJyHa",
  "key24": "5L96yUV3gx3zuovqpQr8Gg9g23XCENg39WCcMdrs2X46uNoEXrfD7JCc9wztub7n2vBV3X26dUzaRuRiSpwb387D",
  "key25": "2PpXK3QQrATviN99SZoAxKWF3yu4y7jeSczTQR1Qf85wXBnwYA5J8JCKezPieEhZQeMyJ6jkwCrLUy9cQYNNVXkn",
  "key26": "2Pzdm3gvnb3Vfx4tA4uwvnUq431Ywbtb4hfT3JmQMhsAtunyHgKupL2UFUHiuySHZw2VN7pr7XU6a74BTkfnjGML",
  "key27": "vSLTmd8eMvvRWUJn4bukeGJYhyvwoXfjDcyPsEutbXUaL1sXf4yRhdjiwToqoQb1bA8Lrvw6mTQdBDLmKcF846G",
  "key28": "4GFupDfWUNsJzR64xfjVXXwMmLD6b1LPtwhDuFe62HEaVxNQyX3ARK35WSZavPhGWEUV9VGgy3s16UfaBbnJaT9",
  "key29": "3VHdVc1dTxr34XgUEyyiH8XfoBjJgX3cH7PaXjgsjqG9nLZ2qTFR4CVh25fn5wPYXG9FiHBieQ1UBALZ8j3AmYdn",
  "key30": "5NRTFBc2F5WJokmR3KaPcqqnUysAnqyJ3YxyH1URUHtbPVYgfVyN656CVZT3sL2yCJXwMUfwbWud8fgehXD28Bdw",
  "key31": "rVa7duyKsfjMiau2yppAYfUrERp22atGW9kBJiQ1VtzUUVgbtMeuQWa6ijVczPTxE72xJg6JJQneMMBvT8LnJfs",
  "key32": "3FyfUAajrfwbV4LaBY5drBfAXfh4w9XxqJ93LMvjeg2D4KS1G7XeBNKYxqHzqPyBkimTnLCiJt5uTSwjPDxtALSk",
  "key33": "3crptj83krCjyHRg8nYstVHTiHfRkjy72CcnPowLiS7tC1tAh3Ro9xeADpCpiEbhPzMk6SCjUUJqhejnU4pMjcKc",
  "key34": "2nfGeQn6twHNm7YR3FTX6bVPHzvHHqP1ow8CUKLw6Xxa3b9scMbTsgfRz4mRf43v8hkfXd4nG8fb9Wuo1Mhg8du2",
  "key35": "4EwnonkuwfAzToegA5QkMBTnsfz6sBJ3g4kHfthqjBDpqbQp8WCrUwN5dc3k5JbwcCDTwBtxoNAyGp1ru7k12zW1",
  "key36": "2pKgztVGwM5nqst8RZFkLxWuZESUwpPUFom1nafDfyfrUBS4oi3RmXDsNfsUtHgw2Qp6aQmW38ddqq7FrjK8qoq5",
  "key37": "3YG8naFgRthGYMPMRe11UDEGZaBAnP8VJchWgp5uwxaSgoUk6C4Fbkzh8qs5nFK7mf4T617gGXiqPH7sDNTsadVa",
  "key38": "32SFzNfiLoQCdgMWm1xRXWwWaWrXZw9zTD8KJkyz3o5Q62yxfeDo9yWDQqVgk4x86rx7wQA8a8x2F3GasmpnRYQ2",
  "key39": "2AHwTE1MSsvaH3nU7nHNdzsq9k8FojFoLNE5jWm9nY9QSHHdt9oU4tB7aXrs7yNk8oY95amY2oL64ZBJa9yqmNr9",
  "key40": "48gPRDJ6MLdeSRTWxfeKZm33dBhL3V2gBynFZdTzJ2856aiWP9YPRprh89Frnq9efJpXPjwKpWN37XK67jDYjH8b",
  "key41": "5xKgrVYPziWtGcWkW9c6izLJPn4bsFwt9rnke9gYhB152Qc7NUrxhjWTnRkqNhYP3TXWDg1B9aMGTmCLhj6FY7ab",
  "key42": "4KeHAPjKenW16xWUUFsG1vQ3MuCnYPLuD68h497yJMLqij3BgLLN8i3XToP85WDf76BNyW7TFtWpPigEGn3U1S7Z",
  "key43": "4mwjCyTMspteFg6fad1s7FgBi4kQjTzMnjozCZxkiCYtMaysUooRVr4KsAZjDDvvwVwppmANzbRrG9jfXxqv1Fjc",
  "key44": "3JzhVhCPnqABDU6Nws4hQDVTB88tK5EYGcyJdm2ZWS53Gvy5AYZkTFm7S5QVs7wZPCBjUm9UieAGHMD6DNNb7PkD",
  "key45": "4ijGA1wCYb3pM5n78HpXYzzMn68ZwimGH18V5FggtQPG2cFQ4vfDfgUnHKCSjHKHQ1iKmkA8DzAGTdPPxhp2qe1N"
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
