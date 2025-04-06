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
    "35E5buEPdPoR9VfdgGyoqQaqPo2VbYtLSLFwnxPCpefMBgNPQ9SPaemSTpnPgf3JAEDMFk17MNkcWcAJvWAgTvga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UKnz4jK5vmUUiKJwwR4dqh1E8AqEZGXgYmCCNaq14ShRikhiPna4BsSwquooeDSAuEnYxMNq4fyGqxQAsnyHVB7",
  "key1": "3niNPdGgn4Pm4ZsQWKNHe2p25a3ErFytTGpNyYqwUzHzeeYjyMDPzBbEW1U7k1YcAJHTK3jJujFnvBBS4WehjhnR",
  "key2": "5yAckBu5YXWnMB4j62j6uYDYYoyvHg8sbKWvPqVZgi33CrCfZ5aAmDh2cmcqT83wT9xqrU84LmCiFCdjJyU3BeKA",
  "key3": "gpBPDhiUPkor4HRTARKPtptXfkP6ZBA12MLFRM6n2cdV2GSqrQ31KoQ6jmXYoYKWKE9ygPyPD3Ny6h46XiVctrn",
  "key4": "2MuxvZ4YsdXrwkVvqLQCDetRCVyTpsxBnfcEUUMH4ng37c5SHXUcjoCaD2pvwXmvq6xwgEhxH9HcmJ2Bcf8ydbuV",
  "key5": "5R7smPpxAzPnpdd31sgBPVKjLCoxpUzbXbmpKsLpJnmDPjPfnKGSWjtVRk9Tz9GGLpj9by4eqWebop58pZUTzQ6T",
  "key6": "2LEzcVetqZr6y2GHoFBN5Bs3jqLAuqj14gxRWju52xkSuEyxntCuMQbg7LCtLPjHMAcGmKjfY5CMsC6oqmao56fG",
  "key7": "2fzMa2e9MXiy5BywWptUahAsQ9EcdXse4ETtYzPHAom14PppEP4TJr34i66b3hcjuXcxMLgD8XFGCyHquomcSjYq",
  "key8": "ZebFH5gTwM78dbNBDpkqVceKWmDEzGhmpHhspD5gbic3pR1yRDSrgkawWUxo4KqhEbbHgYP3gGgjUuuhh33dBaX",
  "key9": "5Y1LAScCwQhGp69ovPUeJVX7eFftrS6FLosZaBKdUUyAnz1tQwCb6T89WXgc3t6bQndpgPnWy5DekA6aWMZ8Xkhf",
  "key10": "yqr1vG8VfqDWX8paR4cjvUNndtzkEkpFzLzcGJRXVdPTeBFyLTzAeocDhUMkksySSTYz18hTDbcfS76xxz2zJXb",
  "key11": "3Mffn8SifzprRpUip3CWBtphzoh1rDgJ1fSwoqWRK8NSSPRPA5Vx3XSnXvAUSHJpZJCEeFn8k39mY2Sdk1RLyMpY",
  "key12": "JNdEsNk8nvg3rAFMykcnaAyitmZqso5GNVLTvLgsfFBhUErfmvTjKgCgYkPYLaDD5kEYjau9WmfkvSy8Djfqxgf",
  "key13": "4FqYN3yc4c6LSYRj9Xo6WPxaZ9qidBrXMojMDyx8jdCHmzx1VHgtf43KfhohNnPePPHDC1rXyRTaD8dem7mYeDGB",
  "key14": "5npETgkYJaLX4TD6xQsxWN7D7pR8Gt32chZVTbcaF39UQ6qXVdk98u3LWqH77wTM1Qes1aAomzsN3BnWDwDBB5FT",
  "key15": "3Yg6DJ6aC4Zi3BDCsndiLUMgNu8UBfHujWPdMexMAHFwdFaL5oRp8ZuYkTgx4YM7ZDPMJ8vCgEwhQPZvDusLiK6L",
  "key16": "NbRroqv6DrJDM9qSZfuE1mbHpq1HNdvPGyDJkmgupjhWnDNzXXFeDmNwEzEga8pUb3LXv4ZE5JSLD1GeFDYK7Fx",
  "key17": "56UxjqajNK7AGMBceVzESPT5hAr2m9AJQsGXkDt92spLPKDDqzSvGKSPQ93mbJNCvH7BkJYe2CC1Q5mj76GDiFoF",
  "key18": "4UpYxd3mWB2DE788RnHzt5AKnjitK6UZpWx5SG5Pyv3oBx8qhnhYSyqJmWo2G9J8QFVSRPoiQ3V1YFTQ48HR7G1y",
  "key19": "3De2tcFGWLwNzvLsTTzLNp8zt4XBsg22gbzRpgfMr1UWtiiLp1dPa7vpvYzJgyWKRASRU4DBJLkaredYzcB3Few3",
  "key20": "3T5ws4NKt8Wt15b35uTWZ3hYiW6mhA5xPgJ6u7khAa5zbowpq9cejLzvMFcxXyy5VzzpqZbiCfRAQtsYNe6VmyRB",
  "key21": "2VPn8HtGbVZ3n1PSCYiSodWQmMVjDuvxp6fFMBZKk2bjK1Lp1gRHMhGN2WkdyXxRbYnDV6qyAhmxFu2hr63xjA5A",
  "key22": "5QYtwiKZmiHzyPzNJHjA1PPGdhhLb9F9mWh2zy911VPBvC67CNJ1Y5Au1rjZQbv4SHnEACADhtnpwCiJnb92AudG",
  "key23": "vRnr6Piebm8jNumNgQ1wRBgFjZHusab1q81UJf2YFRRAgboet2jvkE7TfgHqXLFLuUjLdC5V17NCF9pXSdT5Pbo",
  "key24": "5rTExAyXPMV275oEBxgPGzFDenBahKi2kHAW8m1tMAPRSByU1AmjYG9EXppFTEKRcnMKbz5MfdPTaKGZowKj9F5C",
  "key25": "3XCPaF3sTZ1GUtPjuc9Bv67X34AXPiA3XUUP78s4LZ5LssUpFunhBB36iNC6iRD9zkvge3Aw4MkBcFGLrgz5ArkN",
  "key26": "4ruvdZhaPAAEkMPsL99nfLHykAExGzbq535S3Tj5GfyQP7jkk9gxRq2WHWzAAJCUUYxHETaCMkKeEzdbdGeuMR5Y",
  "key27": "5jEeK1PNFxbjiXa9syMgMWyBfhmJFNUY7cFvYnG1DFvdbdwae5YU1c6bAKVkQohLQx23ftLv6SBXWUHAgqDF5uqB",
  "key28": "2sw5QepRnwg9DAfSpofFUy1vmhRpxn5nj1SDPV1dj4xWm5hecKDqmYrRX1ryEKy6D1LNEi9ZhKkMBQ95DwfMzuiv",
  "key29": "32nJ4ggj4EnLTSujKZUZxPp9R4M6dFTvNceL8aUjBzUa5N3Q6kP4Hrro3LR9MeQ6f4Z58wc9eYHo3pyzFQWa8qdd",
  "key30": "2tH4acRTwpEJ2WN8tMUmcbGDcygLqoBKeemBCmx74mv5vDfxZKNXNqBQrQCrM9bkGVvaDk3qVG1wvXNTKNSCJZsY",
  "key31": "Zf1N1fFuBi1YHrYFJXAVhUYdAPdqRTH7hHsETG68pJE4b8u8PVemJdNtsFjDg4siriCX1vENPNXEPg9N1WiNSGa",
  "key32": "5tbm7y4CMc7yaJjxpb16Y2UhctGW9hifQZXXU6yaQzZmUu4kmEJatDJbThzj2SsFC3FFYY5X8J57Ae32wZTWM9hE",
  "key33": "4LcZAm9q9uCLAWP2DyjtQ78kECV18SBWpLWdu4MJsmiTeJYQms2RRqxBGVMPb1hQHRJ1MMiJim8oDkd6ASM23m6u",
  "key34": "8RQF37qYYacTH8vTv3LNkr5pXPPerGMpEQJqD59zj7ad34TnyV6ed1S3XwB6dvuvcNWtJhtuGbcmYT6oiji57RV",
  "key35": "2LmmAvPuUrzAnEGdkRiHKEZ3UiXzpmxJ2RXFbvDpthPR5eoLv3p3VJcrDRznpLb9P6VMURcJzoV2Bxtpj9hMtPQv",
  "key36": "5aTsFUBeG5PE1fS26sVHnShAegpjAaACpMUYfro3s1XbKsVBeNw8ye4F4AYyXyMzNSG5APgeYk34R9rV5mu659zg"
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
