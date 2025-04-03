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
    "3yP71fJpxZjLY38FjBtyzpufubmPkbxXSrHQyRLYLAByKcz5mQUP92EgZB7r6p4zYaMLrGM28VZbhzppkJRdDvcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oJu7G6mh5bfUhjcXzeXRPvJqpHr9CEG9reDWMjcW47AyEVd4qvAygggcULEoDWKqdr7AwAiDkuALWFJwXtHcpLt",
  "key1": "5EZRgRYZ7YGevYptEYmzGgZ29m1vAtpbWdf4pwBnjdeuEg64oQWpbSuWM19xke4WPHzpTnLemAMbTjHhKqrZwK41",
  "key2": "2apTVpa5d8TZggGSqw5wHGRynpvjWrtazj3EnX3ReDCfXTwi28XLR9wFbrs9z7nHemzsnvRGoWqbX46cX4jURQRg",
  "key3": "3fJpnTsgC5oRH8zHDNMrNpPKsG5y4XCxM19C4D2ispGuEz7c229espFHHx1y8Jbs2M8kA6TrFQiQcnZdU5c5mJqA",
  "key4": "4FpromLXmp9RjdeoFJCH6c5Kq8Zc88yyYHLj8R6XTTZT1g7Gndnxr91uwbVWqDYUU5sKb5Drmq4BdmRJYG6kp6wj",
  "key5": "2Fx6As8hbdxjYX4qjaXM5g3pHJNGaczMfKRGeBqwyJpfBRp7MqSXJzkKVHECYyYqGJQv7aT6umHp7P5AY94XSs36",
  "key6": "5Tbyuo5Z7UAUTctoSbmGVYJP6BBcCEuffNCD2esFi81r4gFricBDy8H1Hhwt9GJazUvsgt1d5AFQxdkxhPPWWHme",
  "key7": "2tGmaQBdLgiaQvWJBXMDNFUtVg4veB7QTza27PfHrtRscHeds7e6y5PuDKgHqL7Ppv9UU7UgomtBdmfkTT5vBGPz",
  "key8": "5XTBPwm5ZFzNNDw72PoVo6jngU6V63Q52zoVBYRBcYBkxAxdFLEYXkjfc9VSYwpoxWabJoxuXNsCS42yZoBLV1dN",
  "key9": "3Cu1r975NfWri13KtqBFaSdUnbrSntY3mzigdDD2WBkpLSCMgtph6s3jUGdHSQButp6jK2vPmczfvGHaCvbrRbnW",
  "key10": "5Y3htkk35CT5Yi6NaQEA3c5eCimxELbbhAimFpMdM23JT3hfW4xXwgxguDqZC9w2nrNQwSxnS9EFZ3oJpoSf8KLM",
  "key11": "ma2x9TfZE4zgXn9r6npXFnE49iarmpz4N1dFMJcQC4M73Gp4yEUxMYx5RPvR9rcg7qxK1xxt1xTnn1qz8UMsfSy",
  "key12": "4HVbDg9NrDRmk4j2N5TPDULeiABg4xsoPer1ZUmVMqmd5CAbQRGNhun416B9YwmD48ePiHNx2biAXfscr6jXsq7o",
  "key13": "5B2ENVTQBzd82n8bt9cNRzvaxLGssQ2NkhmekvXyHMUfoCXyho2DGgzNN57ddBrkaFcLVXw6TzuGiUYo72ZgYTtG",
  "key14": "63jLUUUMohPy49WJgMBdLRFhAMPHwnHJ9J3TSq8n2TcMhyPPFnQ2jffpQZFKeozA5Vv14tMZA1zrWiLPLWuyEs7B",
  "key15": "3wvbx1m9dMdXFXnMgsGwmtP2BGm53SrUnwKy1h9N2whmLsNCdpXLMD7DRqSJGKgvwkmymsZjBULJsURBb4bDFy81",
  "key16": "5JqjRMkRU3qNiDZK7MqqyBS3XZDsmKEoCfMp3UaF1wp36Xv4iYaG1ZfQCundmyPWrimYqDr6RYRNousWEtHpyXNK",
  "key17": "5Ri4ApG5y5faram9LEHKthegMWByL1NY5SDZQyfPMrsNyrMtPhvYnM9msoei16EcKggrNATk7p96YmxgsNgujm4c",
  "key18": "5sf9Vm9JKRXgFM7W89EuLAQgQ96E8djm1Pp8S3r2aRA5y8pCutcLXTPAoc4Fs3zbfGBsMe28ZXyj39EBGqsfFtfq",
  "key19": "oH4z3n94bRuFK8A8tkAxGBtdEQFkEvun2CakTRkWddfWJHGaKCuHX744ykmmY1aMKZ2Jewxkfw2E76v3TUd41Gm",
  "key20": "4fER49AfYAzqStNwv5WJpQwcuco7dyYrGfjLZ42YtcR2kLdXDmwHyXyCZvc5UJSwhqQrzR882qSbS48ZmqqGnJ9x",
  "key21": "3dgrTy7mnUpahiEobuDKf6mt2QY2Lx4wnTF2FzLvuSXvwxSzg7LdyRct86vM8XTbLu95U1SbhFNJWcDBdPjqZjA2",
  "key22": "2VoCfrdh2hj9VZ3LsVHYiwQbwDobu7dr4NAkweVSveDUoHWTbAkUkSrXcFkp3qstfcdoE9omvXD4cuPaXqtAw3MK",
  "key23": "2hE1oU16C5w2p1NZs5F27MkUdhcjQzvLqy1tZwsYkt6brCuELtRrnXB1euKiMWt1fBJ1cv5S4g9fbyxCCbnqQof9",
  "key24": "3sabfKmaJNrumPKyfvdH4r6cxaozhUS9MSDSi1bXxRPMtPwV7WWowuVb8c3ye1Gn4bx48qswULxv3AeZDRYTKUPp",
  "key25": "oxT79Pp6wb2pgve8FtxRFZNj42Ej4BmYxMeiGN4EW4x7LP2yEHBLhQzVkEsTv7bpSUEWJWTeYWT6X44jwbBrdYC",
  "key26": "kCRZ8aAfYg3Tcs5sVn9b2xEJddLR9q7cnbVp5PC2BaHJpp1ZeAMq4spa7ib4QqA9Ricv18XJc7dDXPX5o9E3sLy",
  "key27": "4zaiP1et8faki6AsyokQ85BvKD3GUnpYHXnsKd1Q1TRzyjkCvdH5xKRVdc2LQ5owfdYKrf85bab7fh4QBGRPHpQx",
  "key28": "2HCqb6kU538dXjDHL9Zim7SQ7sv3hnsyKKeounxoDkKKA31vaBVCUwRmw8e6PUKaDYrQsdmLRhaYh321oYr43JYr",
  "key29": "ywQZR8ByfDdnixEZmPEocAoD1Pyc2scoAKxBCHLCuwMraT3dkwcV7jFrt1hQYTeHuUiaJqijim3fuHpRGZca6KV",
  "key30": "MeVFGMe1GQCYJJVYQ3KUn4gKV1XHL6hXZ6DpoxwjdqsX3p6T1Uk7eiKDMuh4ig2GVHo4y3hTRLUiE23tmoeWzmE",
  "key31": "4Bzp9HpKoY3vWhTJiMsdkMCa2ptzosaCWHhPmWAEQ1qrVSYCNwzhnWftyy89CdJ8B59xQJm1GvEP5F9msEsmDdiJ",
  "key32": "4KbkUv58gZctD3RWRfgQZ9bvwKBqNGHW9SdAHmUu6tdFK6yfiCEAXFHSAxK6KPSUgPdjNa1Z5uYhFFRS63nR87UR",
  "key33": "4aDViWExaT9AbTFba7ddRfftBf13M4Wpz3mNK9qHBVjBAEjXjv1horh2aiXNoNHjhBxcnBrzdDB4V47W4HJW7bt2",
  "key34": "5rMgAHV5ouwVpj2AkCfue3iqRD43i2pHY6An2pFAwdQuvBUgUdT4WrSjGuJMGHBUJsra6qrfZqws23NjznaBx48n",
  "key35": "5kzpqUfndUVNxMP8xeykV1p1zkY3tofRpv2QzYiohVsiLrQQs6RXj8hD5UZNSV3g4uBA4uPbNgGQZXWCwA1RsFKZ",
  "key36": "m12LyRrri21yxdPvvTxErgK2ewincCbku976o5bbtKhQfpXPBWHKiJZr6nr2JcCCSQgw7ZqgYhRnu6Fa5VqDyfC",
  "key37": "2nKqFibGhfNcEdKwUSkkLCL9uNLmTYXbenJRAwgpFLtZF2QymZeF7CSpbXXjSxeo6WSx8sV6B7oNrapDg3CQnTwZ",
  "key38": "3UvvCkLanSRLHoUR2ph4FGPpiEzFdwsGTfUoGAMS59p4tKaYwsXEsjWHLDFHMsuQHkjNXwQwnaKWWqRXaHXJRoNQ",
  "key39": "4yRLhuS2Fiv52aHqXoEs9CThbWGLGKRGFqSbATo5aA4F7uxvfonfoepJ6WVn4T5r23gihe2RxNcHwMiUZfn3uRLT"
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
