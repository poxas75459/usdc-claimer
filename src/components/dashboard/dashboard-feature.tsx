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
    "4RaqaKvFwLKRPzAfzRdC1W6fYVjnBVdG6tGr7J4aXWw8RA4DtciPCh32YYXcskrUSZQDbc9iBKP72gR9HunbKtDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xXTZTXqkH42TtkphhQqozoa1zU59PXzdH4Hz85KXKErVxfwGAWTmcHohBqDyMJ6GiqkjBuoD34zSzUoCy1pW2EC",
  "key1": "5Fo4b164m6kKqWF15heS75Yjiq377TpNUQf9G4p8BMoRZY5oWxKckX8Pk1TDhodit5ENqubSuNLPXhA8H86bqT7T",
  "key2": "2a6dXKNnuunLJWkkFTx5tkkcY6ZnuDi8KcqBaRiLUeutAXq3R83EJociXgToehLsXAWx1XdvwYtvdW6WcX71EZja",
  "key3": "3tCLD7XnWmY8Wj7jEXXHJ6QFufix2dR8Zkjm3APU2i42BbsaWvqtxAvYsNKyjEv3PFGRteznjE6yWBXUzxE7vEyF",
  "key4": "4T6hVKJQvSk4jJ2AWxkNWdYiWQWnp1NDBzus9HmP22u3DXMo6rchYSyHKTYAH3fR8y259ph8Xqm1ZZYr8B93FsrZ",
  "key5": "5PH3jPYojVE4okg5hwGTNFTwbDqvsWqpxg126CXxWx5yyVFTuDMzrrtuqJK2RyYx4czq3SFZUXkRvKHPNuoceEpN",
  "key6": "49zc86rvV7XrDYooMSeYJ5TgoKNvkZK8Ns5xe4QGv5BN6Zp9Ha6QcYGcfvjmBVnm5BgSZbHLtH4BEKqApqX7BtP1",
  "key7": "SByJKX2zAwz9VvoKdUuwx3jmUft7AS7MKzmU6HkB8VfmmcmYvJuxMrkwYp4ZkCPSrFz2ALUxLnu4kAxuJPuAqUu",
  "key8": "2tGrLkukCNAESii2QACJjSQC4kyJsLhhps572YkrDMCAitu5L3NLg2DfVTbAgM2ATD2Ybry2zUJyDubJT8wMpUYU",
  "key9": "uktrHeYVx96gLCXiLYMEjkMU83eNnnEihDHdMi6zq7D6dCRLpjsfqWLcXzudwSkXbH8tGnv5EdDHenRTdRVxp53",
  "key10": "FGM3Xn7zNANLUQHNHmfBtxtH4m2YhbJVXmeudWmUy7nuJGUzUpWn9wsQ2MDCTM7XXbWS86D4tSUQPCnSao9KX2D",
  "key11": "5WT4pF5TNdd4HWKf2YUkLaFy3xehPxYxU7jFfh9CajbwzUG5qBcBjDVpW6nDC34UbWS1qg1PxQwVUHx9h5ag3zsx",
  "key12": "3FPHn1tgJQYyUmdtTm1m8Q5YswhDGyJNZd73WJy5EipSygvYNo5csJhLPPnnqTE1XyJrt1UCgRakVfZ8vMAz4jz7",
  "key13": "64LKNK3Df2eyPMs4yXE7QS2gZD7DdzB51HMvw8yCZWK1p92CCbCEr6VYp3w9jsB5DpaEKgMe7qh1XLLPonozkKek",
  "key14": "47iieWNiQ5TxjXpPTmvvah7MhCAZ8qSDe5MV112QxbkVdfzyByZt3rurmraspjvPQR2qUv2Pj1ybPzjaTYDpVkzo",
  "key15": "4vwUq5treSQsiaPf8pEQ9jXvBoCrg4QKyiVgKTTy2PAeVF9u1F7cxPW13ooJNuh8D28xGqbmM47aaNQsibtTnv16",
  "key16": "42z9ZxZxFgrDaoDK8J2fSG1riGcXwcCnZQPXJ4Vv1RPpZjgDsQ63CZGL2q88967ZAUS9R8t5c68WijDfXYJd4bB4",
  "key17": "4J6EqW7v2frjEoDxvKWkvVR3dwXT4ZQZgB97AkAX4eFAjUH7vS38RaZUgPoGqdf3CLENusHW31AHyvgsyDDm4CPP",
  "key18": "4UNL3FjPiwg3DeueenKXjV1dzBQwwr1cztW8PMcQd1VT8Egb5pQLJnXQirs5JjsQfAufiSxAut8snSY6H8xs6QT4",
  "key19": "3apU4aiHNCZh9PJRVGDNddHGfUvafNMiSWtrVpanLSxa2U1oTkeEzoUkdjdACUL8rx72bVAatMyaG3uK92y4bQS5",
  "key20": "4c9ma5ux51CxyPNbiUmz1BL5JZMRvzgRDZdZaoNxMbKZ81pgqKVYYJD3XPy3dWhathaek5F4kUsHPaLDVgqcm1XJ",
  "key21": "5gizDRmrMUgrd7jCwoohMgwDYf4gtwZjHtCNDx6sjPjnoaV7kkLbkwEhoNZ4Xt1jN2TBv5jP9wvjVSe4ncdTqaXP",
  "key22": "4jdzHTrxZdKixTjgx8DkbduoL9cy7AWud35313EJ258o2vT7Drr5G6yeEMxMENdV5bmSF5bA9nGmgsvxcL3EKeQ1",
  "key23": "41GMUzU3Se65WjSdV4W9322ho6xiqF7rNkHWTQxTjBdVRNxiS9j58WJ8UFMDSLCWcs4wSfwYMVjB7ctDgFHe3Qi",
  "key24": "2ck5AQgjUupJ4zhiJ6pGQBxqYmC9zzxmPACCh3LNtSbUtY35goJhN3BXyXyE7rUec1BTGDSgHzvzPAsfyoUh2KH4",
  "key25": "4JGWmugQMgD7Za6gX4zq6sL4RrZAG1ZRM4zVjkkCqd2rqKJNWc6k7ji3g8Jm9GkWM7VeV7Ap38qasFWuCPjT7NjZ",
  "key26": "5zPjmjdF9QdDvmusuLMCpprENSsXYTAWjzFe4HrvpsGj9eF8AJJvB8vc7gUMC6WGbUAsG6AwqYDDcr5j5CjKPVWR",
  "key27": "3qLVLsMt9MhcXzZxL5cjTgCS1BKWFGoTiqicxCBBnHw25RQHRUy4qGgY941xsCVoogXutC17F1gxyzLD69nVPmd8",
  "key28": "5Lb3GzPDVQaAq3NenZK5rEfXgQxKU9CE6FfFc564SpZqDmX4NB2AcL8aQtiwgTLpQ59ywr1FjyhpLy222vwzUGpb",
  "key29": "3RH5a1MsB4SnUL8FgQJgyd4D8nBQThNzi9xka9aBXFkwFZfss3skKRsqkFeKpzdnK4v6VveAxD3eyRWZSGWD7XBd",
  "key30": "3H24AjWDzgcetkPbqJ4gTCqCMwkvpE8e6rdqUcwXRYP221qynd9iKuujhgaqh1NXruqJ3Z58ngpNDoxM9ZzropJV",
  "key31": "5DnFuc5Cet5evJS94cEcyvUZgiFshmqYFxMJnJyRkCH6414BMJ2uYXXQW5Yy9gYdihFzcsfGaypRuzNEX7pwpDDM",
  "key32": "2t8DVUo6riYfFXtcX3P8NLDhqqiYYWhuNAMvDUMCv3FkVVzkP8iYGbMYf8BskS5Y2Xuab5TF3EsLCGYqfvTiAwak",
  "key33": "4voUqubEB9EhCtEx5g23ZXHvCq5g3x22Zv7XEPmutznMfa8xwJ56emdUCKKiQD9JoYsZFQnqTtgiZcjL9YPuFuHw",
  "key34": "AzsAD6m4JtD6ZdMfzXmZTqiHjPp9NhwsqFCCGrU84TRo8X1uHJobS5X3pTYRVRfFxG97rD1yFLiwa5BLdb8XfMd",
  "key35": "AwdwYzcsEouxx8G5iFoAthx4zTWZh12ZaNWmB98V3u8jePMUvX6rsnPmNFRFTmWbC77r4R9qMDyVHgDbqr75w97",
  "key36": "4nCm4TN3PTfqH1y3SL5NfqFgitjndiEJWjxyw7pL2fE8UyBDfWP815RgufLggjXBwYppdWci3bjstuTeYypx62xq",
  "key37": "Y6EPTnmuKFcAFc5EJiQL4REiFDqzysPuJQejrHiFgNPn97FshsxsGmrFz6UFbzFVTR7AYPo18dXvHGqb1CfaDSU",
  "key38": "4w9UGcJnAFUH5ZmWiGBEdyzHjNPA21kVrcUaTAXR7gXKqKHEYvskuAaN16pAt44gw1aCEUecCT9PMwTugzBqw1rg",
  "key39": "24azx3GvyforW3D56njNn6gtj372YLgjS1NJEEPHxJhdQhbhxfy3TZRkaxrvtFJEbW19TX2Tm76HTBQFPfzjSpqX",
  "key40": "GZs9gGWHWWHbfcxUa95M6SVTUiUuraq3uPZ8yC3Kw9YuaEshRKN2acazmuda4n8r6hBvh4GfGNPt2Usw9PWuDJj"
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
