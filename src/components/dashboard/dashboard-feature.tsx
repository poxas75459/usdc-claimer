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
    "3YRSSdEEmR5v7HyRCdmEGECyJVmo2jtHhsv2pY41XNfKWH4jVGWTTaFtzama5s6H8JTDMDY15PArjqbHzQmX2nHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D39MSAdQAwEYnY5D3BcrmTt8Q61CaDxs9AoK3WPy9jxTX7v2jxjgvb9hLrhZsT2HpEqBYLTaDu2YTt6FREJjZDo",
  "key1": "2ayFzjCdMpQyCXcSjXcKDfzcKy1cYwDM1a693BWGxw2EmZeMs2Ktcxs7NYyhmpvrRCmRtea8jfeqpBVHM1M1Pzon",
  "key2": "4RLjRAVRVCyYeiM7vCu8bX9YEUTjiytnqEcTZDMzwv5AamGxPBJTcr3qvtAMqPiS7LxyZe82sNLTxQPmG83nvSnL",
  "key3": "GE4RjCP4zQ2jDwoA9MZA3qNgPHYXY5iEaK9zfgXCd8pf1U6GVEWXB7x5ix6Uy6gzmvpuUMy12gGqagnSaRHPkgK",
  "key4": "43NvsGHV47x1hbxQh8L1bS62DS3pLoWhjWAxB44GEr5aZdwQ93gUqyjvLGQ4cS8k4RcEWgEzu1c3Jk5vG3rf9o1A",
  "key5": "UMBfzCJPMdVdXzeGoCyystVCeDYtuu23boxQXSapmXhyyndUv1qnyFjykfAK3E68gmtJRjee2mNvfMa4KRUYCEZ",
  "key6": "2hdRcLnMkSDrCi7SweGVF2v7jFcR5JGRySPSxFRGQRvr16dg8oHm8vH7PWs5oKK574FT7pF9DDVgd12mGd7vYuzW",
  "key7": "21b8d1P6DLTnZeqhiLiRejuzWWJ3cbAF4HoU624fBREAWMLVa26Rn7VcU9zDPTAzbfmBqvYXaTje2MR5xcvjwSp2",
  "key8": "3ZD4BT9f76rSXxGFgM4DLMCTzEiKjubEEeZqgRhksPL6dWosakZPhNu148NUJCDRiD6FPtGHGhSHWjatB8Q8SYHE",
  "key9": "3mCTAW57pWvuD7YLAfnpZGhqUjiqZZf8FP1FmpFG2EVpik6HnhuTsWKa3qjnSd56ncfbHbw423X4f4pyHumntUM9",
  "key10": "4tAcmMWp9ikTPuFx52888rKoX927XooSfzfg21Sqaw12PUpaKa3GZe2MT4d7fcrQGHJr5xuPkrp2BnymcLjBZnEE",
  "key11": "3DhCyJUTwKH3Xu4vyvVS9BfVDqJPJUdEtimABpgFUCW9d1jYbairhsxqu1Ro4saFYHGyYT2GPtXkS5uJrEpiRKR8",
  "key12": "4X1THGNpbQ37t2bUMpkKFmLHUEKo7HqK8tgSHZGdAjo7DeNLvxRFWVVGMs4whRRU359G8CxCJDXAv25Q3oeFNUkA",
  "key13": "5j4L5au8aTmALQqNBMeHzNRJdJc3tFfjNrKu3CMTfdLfuEPgzBzheJsSBKZf7pYbPS4moGwAhQhLhmG4k47Bg19K",
  "key14": "2j8ynNn1uDKxbFKFHhbxELLca6cwHqPJM6rRnWp9SJ5DArfhW2wTqhGmvN9pj8VGtrKW4Sk6hX9ag7YUDHtBzKzT",
  "key15": "5pZAV91VbtuxaC3fBZnc982AMgVsC5MjsT7NbbYXAFdqiozYrbXknyVBQEHLtV7SymmUAXG8hzBNPnBqryUTCscq",
  "key16": "Z5jH9LbQpsShyHP1s8cxqyoPs72BqKqd9QBhqSkx3med9kD3WCJiPxNt5fPBxnFsdF7FApTcV7r5jZSBbeMotj5",
  "key17": "3t7RjmASU2daNE2u8z2Bb6rn8GsGw1RG8odzKU1r7hdsLExTVaQTDChLSXRoU9eoRPacJnz71oNpqpb6ex4qMs6K",
  "key18": "5X2xmm25iTtL7dkisxCQFWYPXXxCzDmyGntrgTKbfBfZzSwwayvodVjSvDAzTpi6byiJCcGwmax6V4vSiHyEd3XP",
  "key19": "3dBi2Xr4Kq2muT55YTLDSAgMZEhWa58JDY3PKZYB9vUh1hzeEQfND39a44J28trz4Mon2Bo287fgyPa8dJCRZqtV",
  "key20": "YJrqtooT1dCjwhXkhQ16NDwQGWdu8swfxVWA36y1dtNkJvd4p2qc34hB7QH4pP1nubeNBve7fjkLhG24C4KYVvx",
  "key21": "2Siyp4Kyzzw5WbH25nUdWcWvYaWCe1sedSG7QmQYG2EPpmzojbZE9BEsNC1bASRJA4tAxJ1ajBXhSZUB15usi8hV",
  "key22": "3AqiMjEo1KD22KySN1MnTkH5YLdt29ynvmw29p7kPZNGQSNbU5cGT8vroFUcMTzzkEixiFepJ14C3RVxxKuLJALy",
  "key23": "kJDbnYse5LsGZv2oFy8mvoGxEG85bapnHC25sX2J81C914VYYngsu2983PXdQzDz8KXUpLwFhT2zWe39NRSu2ei",
  "key24": "5jd2wQgsL6BB9JD6NjwtnpNDZzQiUXykXL33UEknja785xf8oQcR5RHxTnD2dwrD5ok4yhMpzJ5s56zZwm7gh5ND",
  "key25": "RESKxHBpEGVX8Q5uFC6XxWQDeUdaijhLHCwnbowd1YEUnD87k6TBRzx8i4KZ32Dn4852vMRTczyH1RLvD7nico5",
  "key26": "5D1c9mj9H2C9Qw5SMdx3dKqvbAn8hU5bfRZ91V4W7PVNPVYTfh3LHCVGfJAa3gMYzDRe9bq7NexCMcV2RCbQC51M",
  "key27": "SfLA2th5D8p43J5CzZFbQFzaAfBS7vYH6stjpWxu6ZR4AXMg143c9AYrVxrAh8P8PPumF1A3JADouqmuLWM9Qgw",
  "key28": "kdQPzcKx97xAc7Xe5fuhTo4ZJQJ4kqo8cR34VfXnMhtKC3EGRUAVES8Ru3e5uhzZeELMVCj2EW1wu1nB3iwhVgd",
  "key29": "2c5cunkBEnyHJCQNBM1MRGHceGGXrd9wUPhyFRZC1iymKQ3CZq5pRnXhjYWxxg6ja412BmpLjpGgchnWKjh8Tk8Q",
  "key30": "s2JSshNEnxi912avHdFrhdL4hSopGccfrsFxKepZ1Tgb7puyaZSWv1F9KQLAhp7uaCk6RVfYptQwxLHwET4DqKH",
  "key31": "M85yrcjL7M5kkCaek4RufJ8jmBRSqz9MQzpoKNCuYC39gQcV46HJw6C89DKuUmaB9DKf2CVpwtpYrnT9JrzssgK",
  "key32": "MYu3Aw3DKiTPXiKhKAiNkPAA5Ctho5S1MQ8xgivSc1dYbit9hwvStA9BV7uNAemSjPQRYqd1Th3ZHRUznVXaF1o",
  "key33": "4VcTngP3JsYwU77nAAXY71RPpGADmBZKaSjwB6WhD4BnDAhDwmMwFkqTcmiVXdDGDSwyE8eTL7AbcsfH66PJC5aD",
  "key34": "5rz1GY2P2d3YjrekbXn5EwG5vDomx37CXTPeeH3iCd5TkbkwbLg95ce46ooQGmHRXnxvwhj3XpN8hju3pVYaEsfd",
  "key35": "563v5VrFTNk1AJStYF4d2zi8o4R5915tWTnXu6CS4TGVWtGmp9ytsHtfhgL49LWAWxxkZb9E8p82bhMowh8ioqu",
  "key36": "3z1s5jNZbgqT9m6HqW8K3buDcDt4tYeGMyNuhD2sXL3bQcSxWfnrKP535JHjNm9C6inoqT53hdq8V2hD4iadeyVK",
  "key37": "5vQUsgwMdpdJtwbbPb4Wq4BzxwgpagVK7SniaPL6nqKYfcm2DxWHsUGV1XVhuU3zx853pj13krhDk4QRexeQC3HW",
  "key38": "Mo2GJXMxbHKPyqo6vxugEb7J5eRD5eEL2DcaVhR2zJdPySQP8W6Xbup5N6AusEi1sq9CbD8MxoKeYnaks6xHYdr"
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
