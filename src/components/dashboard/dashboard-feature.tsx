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
    "4Tjdi8tjJ4xgJoRYp1URAv3RZfCZZR11s5qCzKB5ry4tFvKM1eaNEpVcebdjGqg3v9dAXjfTMffCchegLWzK45Jm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JonaqoXBAdzYizKpvH6SUk5jVPFcU9v7FPSXjDsBJcMKmapW5t8dLkq3QmVSK9wZLW5GQBSuRtMFXB6HAWMjzd3",
  "key1": "2wF6vJjxPZESfZ4Rd1BPsCyb4MQmbxHuAYKeTUnFneY8qQeVZRGBR2jEMYHaSX6rQkfeMs7Po7eTujmw2rVywE1r",
  "key2": "3GVZrmgHKdgcLMe7HKUEzpspHdyBiP5WNQKTBxbDc54MzEV8Aw2AgVMLVyWXTo8mjyJQuiW57U6ihQmDvwUh6qKm",
  "key3": "5e8kKvrCLwcfayhb8QrnSBTwT2YvVHswCXdJoTFkBir4a1oModmvTo6abu5r6p6yk9AmH359eWy7rkxXgMPL9jkn",
  "key4": "5ixxcKiSSMYpTXU2bmDLDafWa1MrCi76gbpzfziAuLxt5zqgxyf1P7XjCmgJcWrDqyXWxf5NEVhtWHqF7cBAJSbv",
  "key5": "6pzz1q8MxhkVJ19ZcFUqGvg1sAaB3fDSUqwi8kJHWqgff6Zey3fkESQurP3gQYVXmpUYF6Croo9LYickAJK9kwG",
  "key6": "43GYfKtFCezDJqr1JCoiARMwS52tfcqZnQ1iqMNpr3iKsp4SVwDtCqYF3Eo2ioHmD7qix2SwcduoSAYq8LLCixrv",
  "key7": "2hy5fqL9cSAcJkogLvXvzzk9hvAZfP2vhbNDcDgp3S8p5UwdJYCJyA5ivWkiz8nTw1US9NpJgDuhkLLxNRH6AzgW",
  "key8": "oPHowfzvx2bRtedQh527p8oenxLgzWFMe8f7CWdQKsDztJzWEKQqxKx8A6eAT3xg9vRrKw5upBJpJm8hs6PwbuB",
  "key9": "3Rcnz6wYbBmpMExPRCAfHveQ25oEPeeTVkzdTEEySxeToFCyqWLG9Bnpd3aAhy5uqPsYjE8DKGz4FAtjdu84rfvT",
  "key10": "3SjS2ArpCnWf9QNYTT8CUMwdMTxhH8MTiRnTzfzYNTKFCyQdbuShSzWwJ7QBnF6qx2ThCn1X8Vegz7D6kgnVQ69D",
  "key11": "qzZPpYXGW3sAS1rYPTEncazD7mEJEf1sP8nQumEEpKXk3V36Eqwu9SDc72xzhPRYrJFuFJCRSZgHkzzdxpstypA",
  "key12": "LWuX4T1ddzefEMLtCbGazBr4arJPZgGF39nGRE1Sqnv1aDuvwkEEk41Nf19NowPhBhxRxx47b1rPfTuoW35QtJV",
  "key13": "5DH52EH4hdgjTY88YdWpTYnhaH3MCqGFyHCXUn8UdFUVcbxozcBJmDDd3uzpZeZKxQ7VEC8h1r9FwbSkH8JhggcS",
  "key14": "6eU1DuqPwiUdcT5TktuyewxKTbW8KmGRcoL8bDfefi561x2VYmN8xuzwjC2QTJgACtcBdkpqbr9SYcLzAHQTw19",
  "key15": "4FpZE76Yf2MPYwd6VkXqQkwLobjjQx6jjMHCTnXQq4oempFzwnLTiJB2VeJVmkdtrnYAUDA8W9xigxmrtCa4JiT9",
  "key16": "3baV4nWTk7HJJhauHngqYPcXqo2JpMrjvfXrLypyBXWBPW11CPhKUxii48xrgd6CXBNoor8zMaPtHPZK7VR455L5",
  "key17": "5XPD4BfhhbnJGuRVFsdyJ4c19KNTS2noj9jpqPpjkWz7XRJVa3JwbZ2t9iU6acdfXcDXHPwuY7M7CR53GHEmSw9c",
  "key18": "4wMgNTvBeQmxqMxzzcXbDFk6uXS9MGRKkKmgxS5B38VnHBiy277EibfTVMmWE6cuYQmmS47CyQoQZvJP2Q3jWK14",
  "key19": "57RPL3ZJ1toQqFYLaUojKiM9jiSZKFqXX6kLtrhETNErpc7M4iUExqPKQUBG1mseE12HtaJtBnqJHUiUJriTdJZJ",
  "key20": "23Fmy2L5uwrTgvGLa5oqP9p559LLoSq4JLozvKCZBohnNPhMCEFxgiFrCF5kdBPS6nLi68uPe1p4Ksw9bnHx5ea2",
  "key21": "4wgJ2dTp28zfwu7euPkN8QE66Md7ZsJidWTmNkXdaSQkfcwPWXDzHaAECLi8sYyYLVSMZ2Dca43sew98knjbfdxF",
  "key22": "3REZW3JGknHRPbN22kFr7EfeTBdJ154L7AMp2WRmQjSDihSF1ywS3tFc5YTwiF4EP6DSpXPnEGJh3XT2XGFVsZDh",
  "key23": "3Lcy8K8heGibZb6aFB5FURDKYygbVPpwfDsbxXo5gxUD23K1xbpQdSDLncsaTjTvdijrKjwEm5d2AANF6JJfQQvK",
  "key24": "2G7FXU8ipPUgM6pHrf6ramDLpQckFCyfgHhq8uex76QtW7F1dLcLZHvDUFPzk2r7WAHXFYCCzNVEgeCHbpTHzDFa",
  "key25": "5u6o5q7yKHdyYp3Nfjn67jipgJDGNzY4yeMbnYUGAD8trZScwfSUcCVH69RsTWCBo1U7PNrmjC8a14gdzsRWC1bm",
  "key26": "4yQDDpKqSExBoo5MrqgvJPfoQ6KugCLjGFKJpf6bWV3Up2u34RJ34j4pT6CgesmQMZDAeLyJSsAYdno5td9hYAmY",
  "key27": "3LveWtSim5cVHKeVL9CZLSsv3pG9iNQZpkbdLYrmJM8CHsF5H1Pf61Wgueyo2DM8yiPDLWA7hX17jQqqzzw8tUdY",
  "key28": "4YFvQzrAMjsm42oouFGPiRW97HeYSypHCoJd9RuvAv5v3nAYCMCAhrcrtvStnLvVA9x3Xbtbb8EHBQ28tw341oyp",
  "key29": "3g4Tug7D5UcjW9EUzGwYjrZhoKT6ka4vdYRN6osExxcK3oGcjX4H76QHBRa1WjyXZ95i8pBrFQgG6MeuAb6gVxER",
  "key30": "2KihbEny1wVnJe6UTS1AA79nyFbXzpe1mRkdSQYfWAMEvVmbMHoDCTotjDo98AZ9YEgbC8HC2BzaEhd7mKzgS1cY"
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
