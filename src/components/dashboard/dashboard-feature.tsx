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
    "4WTKvUgKs8jQEvWLtZ3tqQfcPeAqLkRQxXKkYdbkGxdFwUajcU5vdxomv9oR3pbY7Yuu79NRHVAKm6wLV5iRnkqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b3tYFECVEEJfaEGQqSNnDLV8Wp6AWavFYkVuqgP9GPtmkMRg5ZYJ9iLsrfc8CZDqGCXtA154quUz6oKU8VyLec8",
  "key1": "2K7bjmNjq9Uf8wN9CJfpbdxPzqxprWH5XSUXPjJUTSmic3K7pU3EoekFHMsLG2FWG6jwQjLn8mmrEzPvWfshkHEY",
  "key2": "3Ffye49iy5EmruJTBidEWq1N7txVYqkDzugQU7mpw1LZtukWxz7fNtJ5UybCgFPmhVS4pNVUkVAJcCmHzbte2s3q",
  "key3": "2P3FDyYZyNvPYzETuxwEqZAiSyQg1WnobCrotixMsMkQywvSMbX1gCciE9Vt6ugkBYvx9rnf1hg7gAZFVB7gHXxp",
  "key4": "48ahT8918XqxUeHdaPBU3qLxeuc4jGisYxHebyyRZXi2n8wXL9sFAdn6X8R85ACtB9vqneEEdXoVkBD1EUzvnTGV",
  "key5": "4zPxQrqCGrzzQegxsUwE5C5cLENZVxTDV1EeUgTJcjz7ytyMPHggxkUeXU7aJyUQHtx6xKB6No3S91qUBeoMgob3",
  "key6": "31XLactJS2mLrfH2jpC2mUiEFjwC2jza7y13rgayYUQJwYLXNG1wRkkd4CUSns81FFanV5kwXFvKoCxkKw4to2EU",
  "key7": "21vyH9252FQ3MidEkNv3VWMRbHPe2dZdUjAHzsHPPyUVz8HkoBJk3jnQKuTCPPBTrGvCFxMgVJ6h8rCjZx357DNg",
  "key8": "47ph7SexvFJaUf5fbREWvbfXFdeAAUzgFxyyMVwW1d2iu6W5y31cjjL9B1GVzhuXBQjbmNbto35Zt3cy4huYGKXc",
  "key9": "57K7pC9RuCxdtEkKpsv5bwoJjGJj6Mzxvkhab5gGY8rkzzmg4nptmrtYbH6Y7M2ugtGYp5ns1nvJLaSZzJyrbFUa",
  "key10": "3NB5sV8XRhNH4PDJ2goWFsKwwQ4DfaSEudtD9ofQY6ZDBeY2r5Sc4UK6S7HmBCo5WkrvNqRuPPCvcGSp8ijNCjjj",
  "key11": "3L8vbhULnYG2SdJuTnen8HPxt1TUNzJx6K1QhUUVPKDGtANuNHy7T5gSpXrMToB5oqTj3Jy1xoJuKd8fhDz1z6FW",
  "key12": "4g5P2Q5Htm3KCFMmTHjD3z2WvTFwgyZud5HW21UzPrnmRZWDFGjDUXSDLzvDaeTXpbEGm4Ru81WJKvDCRhbwsgFs",
  "key13": "5og16QwSKFUsSYrmGqatfzhrhbbkebMrt7tU5po1kSnrH52TjmVmGjmt7oZuFFg3Wfedv2GuESTAD1N9Rwzd2tiH",
  "key14": "2hfchnYb95WJzc5HQ86FPWJMVXSomSjUQwMiZ9HyUsuSgGQCyXsL9nxWYEeC8uL1uU2gkuHZ7puBhPfvmpYaXgC8",
  "key15": "2EwvNZX8kuytfx3gwPJ7UXuudR4dNqzX337N2LKJjbcdHz7dzPkTnCG1mx34Nz2HZxoGe6SDyEbqDmtm9tAuuvz3",
  "key16": "4MYyGZVuB5F92LZBLaYs1S66UkSsG7AhPgoo2WYP2drkTuhyoCqX4ioe9oVQ9zJLMaJyD9MTuhpok1ejcisM7sQs",
  "key17": "vfPeFXDcif5H1rmvVcuFSR8FqGjSnWxZyNWM92AFHk44XSVQqRVSxJrxkSJq9FMeWFzS3uuYsDXbyYzmQz9EfyR",
  "key18": "4D1GvrPRUx2sZusVNTriUWDCCZeVZ4Tzt1dxcFPwHkucW3tWmJdp69tq5gar36oow4MZ98zLZeAXSvbxF4pC8GVW",
  "key19": "3cttatWMcKFe4AabZHkkRcXyDHY6a5NWevMTstRzidprw6pPpDGVJBPJhvGP3nNotS1ua7vYAybTkXpQHUE38xHk",
  "key20": "3G7yda9ydPUFFJinhvB5bxCrPrTqiVuw4TgbC1XmTYgUdFfSrEb8w54k91u4VCBgmectK6XK5YpxuMxRTZVQ49fL",
  "key21": "2GU6yLSATnbrkfnZySZxDpozTmH7wNthFNuss42ThzN9hWtRHiGznaFw1g8MtVY9WQPRFXzpEqBWQCtpjAJF6n7K",
  "key22": "588byLVjwcMZVX1M5XxadmoLGyMDWvC8wbkaG9C3Pr7fUNkVCgvFPwPRykh9NTBvChyWRe3X6uWiknwgNhjGEJfX",
  "key23": "SmvjCox14rdvHVUUAAhCB3zaUHu9CjfmJivRCZWsPr7w7TvsgomuNLce3VC7k2qXrmZXR1WZYwfH6bq9JDEq9wW",
  "key24": "2YGRhFWFi3VwVeqYTAzQHp6iRqmxZkiwg33dKpEs4WsQMTqN1ZuQtRgTWFyQQCzYmKaCnCRhaMpQR2H1NefThV2X",
  "key25": "58jimtjfBWyx7zqZhACMZFiXZiVfzD99UFwELRChwtwR9tyYptXJJrgFV11kjhiMGTRkhEf7jEuFzDonLA828Aok",
  "key26": "4akeoHFVQW44zvmpkj7NhnM31CLjkENc2jtz4bFSVnQuT9KrLvE1JocwGUjV7fqgcBt4ewyEvdbTZYvvZuUZiwXX",
  "key27": "58k8hLhqjh7AVyRiPsY4jsYX7RDiYEekn3rp1YM3A8oxPLJTXEENfCZYHGerjSPVe4UvK12CM4LbrFXTkmWBwoJg",
  "key28": "44gBHesP47oRHaRqVdTGrYuYCW327FDgyUFf6TxWkG1jpmo3h54TvZ7nTF4gDJ9ca8ZJ37dbQx2ukco6emS63HQW",
  "key29": "3VpuMdXLTZVWzzeEHD5zjZxGdNydtK1H7FBr2SLuCS89pSx4zr2Fbmb5R37nRdFV4RTh8E3nMZzAxmt3kLw9agve",
  "key30": "2nkoHMEkW8aEkqstjN6CdXbhRdiPW1ydTTTGCNyUyTCpR6ohDb4X1DL4FVsQDzKdWg8MQSEoGPPm3nKjSMA6Gm8r",
  "key31": "BExPkHgsUpXJZph2nJWYrvmfyTR4guZ8SE2zTgRsQTRZiPxX11TK7zABwZ7uWbt3Anj3YM8bSVfcqFgHMayy51M",
  "key32": "2frt87aHmJ1he8eDwkLqSWVEVcrU8T6ZVMGqbWvBLfxGJCz5bxCkTZhKkB6zo8bhvLkN9MKgaLv7hNvoW8PkYVZr",
  "key33": "3pakW9WzFqeS4YZP48gwmd3DmMR7eD9mja78JnDXwZ4gT6nBAPht8YueR6ixNsDb4ws1EPBR9SeyrMZuVf2448BW",
  "key34": "1CcSy7qUmKH37mqbmZn1ZqdkVJSJBVeRY1F6AvJqbE1WHyehw4n1eZYSMzQ5jtUdt8nBZjpWHzKNaPGArZKdPBw",
  "key35": "fHbDRcnE6tx3WiTVjVDAhMstH4jC5dVUs5UJZ842fYnX2Sh5i7Zy3vsVhrAeoXAJeCXNq9wvRcoN7fsxK46EjgT",
  "key36": "2y1YxkmmqztxhTYyRXL3AsvUyAeMh6Gxv5iXJpTwEUD1Zxv7j8UgieuHu21S8sUVYbY7mPWS1iU355CjiRWihDDf",
  "key37": "2toETuzSA3u2jetJahM2Chv2j29SfryLq5KPDvzvYjJAYHg15LVjnv96RV7MmtsBB6SHWvbebYRdnUos4urW3VGt",
  "key38": "3yn5qvSQyPBCZsno4hGfLt2pWebFANd3qnnGTdrtusrGnhWJKzvhgyYRTPZMXvwezheF71ZxpFeKLMwEDEqFe9D7",
  "key39": "5wMpFMU4qv4JMiHCu9KaK2Bcso2rh2UqPv48szCT5iynp3XcFNd1fkNpyd47Xw28hm3MCnXknHU1RDtMy8A294UT"
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
