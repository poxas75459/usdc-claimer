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
    "ZcaAYHQSrntgTfCXt8hFpPjbjmqJGdTY6vG75KnCnktNQ1Eax4XYAUTLBF6mimbnGHi9vk88GrHYJ48CnYG5mbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BfvvKtg4HEuR9W8qWgkrS8G1yi6c91uE9EXz6cRB7jhcZmHinR6AYGKN33xbkrjSK2mDswHHYf45X41gULCiP4P",
  "key1": "EkZ1qwjhT9fQ2ZNigK4dthyXYnZKBiroB6rGtV8nwMSsDjnJ4x9vDbsz9oa63MuW6mm3EigWn9v8Dy5WCgVuUv6",
  "key2": "4h6y1tLZT631t3hq3giYvrJRNNYe3RciH4hWcfzetbqAao8u7nuX536abDKynmxcQ4Af6wsjb2v4y2ni6CrFTrbz",
  "key3": "3CrF8b97oJp3a7MfvKmxcHYQRzbMxMTHUJFFj8Qhf5XyiHhDaSTe1q87AkbJVWQbVWZQ8763Bb2NH3TtijHSCKJs",
  "key4": "7tTGoXLMM62btow1QXfkHkoRYaEVreR9cNdHZMCGfdjq1MKi1JJUwRzfezGFThuvbzTUEDSHGJ2MsdFs6wY7XEw",
  "key5": "5kBAmgtcEt6X2thuAJvh13CPq9Bw68MRCzM1H7tPcZHWj7WssboPHjt7vKDQFhfMszYq97jSERBgqZSMbNkCu3yT",
  "key6": "34qa3uxBY9A7YUg8MW2JWapVtzRJVkHS1zfpbo5ck3ryaTuabpfNZSPBbRfGaKKLKf4qBECqQa5Ha1aN5CQ3ZrHQ",
  "key7": "New22gKesGQwwMhPwr7C2ME3wszNQWYTU7pF7Jm3Sth4SZSikb9c44gFt1n5Qwp11qcCsLuPjkUWuEfZmM74oh9",
  "key8": "42VyJuXqXbXyvGNPvPWB9qVKKeQGtzoyrTxA9Mu3Q4ACT5yUokYRomHz79saz44FM3vPzBs2d6CwzAaT7QCFriF3",
  "key9": "2a2hTL23mHHzYCLkL1jSApXa7uVgdWq7UKf8vpkVsrf9ESSmvi8Cx5mVpw6hchscL3DS9AJsjE5jv6njaVSgYiz9",
  "key10": "2teFVzRwM1f9aomaUCVsGtD6rbsUqqVSmjVkAA5K494PDhLguY8q1wCxPj8TPHGRHL2EVNz4XieJpQL1WJkZj9Rx",
  "key11": "26jVbDtYZMQSQ3yiHJMWpVXeA1rLC7r4KWbeT88MUaMGMsgCbmCWPUYKhAZwRVVwx42V11q1LovPpm1iFGfUsSaN",
  "key12": "3trj1JpyHs5awut71HHw9rJZF1Cno4Bactm13npYSbjDCAfnoM9qCYtiUqRjShBqofmLDzWHGo1frVHyfuB1aePf",
  "key13": "2UxtECeRmgmBWUvcCvvHFDHzrCK6yWB8gghoCvgeFzYTRt6QZREWicAQD3nNUGdMR4LV9XUtpAf2ZV6s5Q4BV9Dj",
  "key14": "nFX8mm8dXbKkGE5RwPExpRpZ6wWz6ZaQvP4VTrStmT2BqDY21wzugzaPJork3RXzBX6CAEELWttgD1oMQPac3R1",
  "key15": "5hwQ2KWdeNQaNmTBiBDXDztFP7fi72Bbx8ShmLGNs6TTnv61F4tC5XrxL27RzHrfJ4mRPz8RjkA8Uqu3nf9EAkSX",
  "key16": "5bw4ThPaum7ZeeKzwvXY1dGDY9LhDpiu7kg23eoPgH5w317APXTQLU61hQFztoTi85s3Wc96fQ6D5bV9NwkhavZj",
  "key17": "27eJSjcYR4zcLKLCwGtqsEaUYXwPPVTzW7jMVQ6ozfVjLxjEzi4kenSjeJ89wpr6FJaEbKBU2AvE17o8Lega6pAv",
  "key18": "2s8ZMLrEc1PTfb5es9qPqNCewQyH4Jcjmz7EA5uEPn8x1esWkzKh8tp15Jbvi3wSc3FkEEeBqnypjMJ3G7KXMm3G",
  "key19": "2s3WJWN9LpgkiMvBy47GC3GaNhakCHfdWZnpRzL1YbTYGcMdk2b98MBPbmoLbAtKUB9fQ3T9kpeKgKCG1M3HWwpa",
  "key20": "3pzno6DNztuKRPEU85TRJBLBB7afE6aAMEM7Wn2pe3EcSE6SXpQJLLii4SLR6mGC9p7xTLyvxUdm81GNt78nPjFj",
  "key21": "3xkYz1j6C3PWes6Y5gY7cxqanJZKZu13hxX2ZRN5LAuifVR8u6Q3ChWZ9XeDUaxH31KCPrBLKNCUEbET89Cv999E",
  "key22": "qnVLNJwquav9udShyt7zNvJ4ZEczkd9nikdLJWPJoyT2DRTSMpNdNmSRWZDdt8heaQqCFBgkRgQYmvwHcvQKZU6",
  "key23": "59YJccLacwJ3nWhk7jwbMvBz7oc17gqFrNyqrk2VejCovrSkXrf1EvGJrjLxHRwqtV3zF2owLZGebGarTzbGeZHu",
  "key24": "5cnhKSWWsWKgdfh5v1q2ofBaZyLhT7wi8kbayZMk1Rvj7UarffSGDXoKKc7hjD6NHdkCCXcMV9UG4qVkjBrwXjhF",
  "key25": "XcCCfnKfjvdRATRpmu13ZQFn1fpF3xM1iTAMku2TBi8NTgnYWMP2DhWWyLZctA5zobzaJkEXCEnbz3ZkJAWk3fM",
  "key26": "gqSckKp24NHHT3BcHApv1jYPH7x4JM9sSQpPQWgnTv9u55SFDTWgWguWC2A4ojDju9yyGRp6h1PcjwxbhqXHQKM",
  "key27": "4pXdmB2GEP8EQX79BjZyXaEEvSD5zCiVW6NF9FcNhdnXCEDx8r39fqjJmBZxvpzMFzcgY9qLGTjzZ4XT2PC3Hue4",
  "key28": "41rmExgsUT2Azae2jVY1N4zWMFnMnDzvfghXHFitXGHbeRmLnvseG7tzUYsq426d6tybhCCayCQF5wMUXAt8JQy7",
  "key29": "663qw6gVbm1domKbtN2PYLYmHAi6qjxCvrePWT6x8GzKDoxE5TpdU8d5zgVXee6ZjQePMVnCGMYVBDifLszeEhAF",
  "key30": "3Mes2XV9YZynK54Ukqbk5xBarxLuzuMCpy2gZSVGsEdt2BNoxTZ1fXio3AY5DyaSaQE89FQzqS71hBGuA4ECBK5Y",
  "key31": "2xjBphtJFQGHAqLpcL51WcTzDySm2VLWUAMi5NtaeozEQh6fahSQbuVvDAwV868McjvLU9NHPrGmADWK1zKYr2Lk",
  "key32": "PjPYnY8KpP68YJjMPmKA7fdRb2WN2TUi5yEuFPJJCepaGz44Cb4m2mrogv8RPvYpBY2AjnScHP1c7FyaDKbvDU4",
  "key33": "5P5YxN9GjUqxmgehiW3fE4ssZEsmDk9Us4ZpALJP1NqkUoun7FNaosf2ZZXhuiMXxDwYd6yKiK1WsKV8cYqg9JTn",
  "key34": "3VpLt63t2nbG3rHaBMxrY8XzSWwBocF4n14KxDUwYFz5rC9ViUNcY5mNTYLS2WAtQRPvYLiXCVBAZ9hyZkty89Q6",
  "key35": "MS22TdfHQ3V76MMd7wf6Rjypx1PbmbyKBpRQCB6w2PFtNFTjMeKhQNJrmPY2xVofnQs1cNxaTx12DdaUXGMWZFr",
  "key36": "3jYasLYbTogZVKvPKeEeW3bjfxGpxU8GdmQ54hQhpq1bQyzeJmdc47Le8BdYqLtmacZweqEjXjXQ3uSwBhwx8GEh",
  "key37": "4Dn2g8EQLTmc5nMDFw8feb4j9AeCE9vp7BoWxHhmn8RnJkzvSrRf9Xdg4gkD8rZpcQCHYUsLWgSy87JNfVAG4UdQ",
  "key38": "5P1pRkJneS1UPTv655HoTGbbGEqTYwgJ69RvH8gs84aJMJASNY4G88qPN7zHe6mHbTEt99jJkEGgkeNZjQRXnuN5",
  "key39": "2rQveqe87tvJExJd9aV5qkUSndALVEHppf8xp1HEkqBjxKUBeE1CSmKQR6SG7UJRsmWkwL4MG1LPqYCu2NMfeKcj",
  "key40": "45HCPYx2x3VNwUdYs8KAD1x4ZAUYYWLoRcoNZiirGRFwZmV6jZMHvVAjM69spCDCnPhTeNwb4JeiL8DGU5SKWyXn",
  "key41": "3c27QKMuNy9e6CpN2cC3V4eRFzp5cjKoBhvXifXQBKZ8R6hAjdHbgt2bm7ENWQgcHPGPtDiGCLhnkNP38FUEzqp2",
  "key42": "5kehTy2k4RZZnnFEYs9mbhmbmLbhePtBkQcin7ctJ1fBzmn1q1Umdu9NcKySrfPRHU16FkeVTce7WTBwuYYF5f6u",
  "key43": "4wZj4ZVFSwZf54MU1MeUkTw6uJ8YHng9r2GdG5ozDHDAWvXyz7Fz6SYXG9hLFsTJEmcHA8qEt9hSJzJ9FVewHiif",
  "key44": "3xp6ALdz6WzhTnTzN8RYGVHDFJqQ2tSnrrp7zrWf1TFUnC9hxEqudMKXJryn7LUoZBkzPVVKWXtQv2pF3VGD28p1",
  "key45": "29qUqxWTZ7WLPatspREjRCnyU5GuasUEoZVWz655B9LservvsaaSGbXsHLJxTfpii7vKSSavLEc49Xf1eW9C7Trz"
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
