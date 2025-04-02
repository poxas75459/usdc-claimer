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
    "4EFwMf5t1ML1CNJDhwpQogjGCYXi5XTSLQy4LMmezAXEVRKWoVDma3eFrbo9ANtHEEEN46MyVJZ8UK3FHsEfuUG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24yS3tcBKP1uUE3onfUn3EomQhkcpeRMdvfaKUwFtBWDoTDrqWE4NJwQ79RRSuzKihF2wkzoQMpdQNjoLoNF54HA",
  "key1": "4UrWFY5dY9yCSVaydpJBqgRWFGUdnH2qUCdBqWUpp3yvMekWb2PAH9MoaHXzemVdmLruAMNAFFxWTLSydkcVFWhF",
  "key2": "62t9buzkatwDSPsjQqGvsufmwhHfcgb1etGfWBjum52ekXhtX3toe4Q1DSvR3zHB8bwApos1cSBnq4a3bfkhhDNf",
  "key3": "4hd7Lq4RwZjaoy1dy1iTuLE9PQEZ6N5AXvVPuytGH3o3Up6jnzG6qniyAzdhLHCxVubGG7bfLmf91XRHiVuu84uz",
  "key4": "3bmhTTp2JkEuKEdHNBMVX2iGwVigvfwDwPUypHSYBvB7qMdKr61HP8WW4LFMZ23P8XYKE6yy4EFKfEoYp6kX93si",
  "key5": "KmMySYF4DMMknJ9tBWMdy4Q3pg21WmszSSTpW5fxufaceRsotRMmYK9e7vq63KbCMaLStJbYwMt7uvHVGFRWGoU",
  "key6": "5LZ3RmiXqiZBA6GkCeD2GJbYYNR6GZL2RTJuZLvfcPSyUjqnoQmUyB9GCgh4wjR655LT4cJWkVUVuuMdKvWhsmpv",
  "key7": "4HKCVHNzc4a3H8iTTi558e3xQ7FckrwFQTpQFKQGYs3tixEoadCigbV7NRWFcZie3jy3w9qAXkUUsu4U6THkAyA7",
  "key8": "3ujWmmGbzF73CwHDT6m8unWZ7ELPBnghK7ywLb1Jiy6W8UPemWd5bawVVVHvjyy42TkaywwW82fL73HxzLjNUkei",
  "key9": "3kZmSXV1K5qZxNnJfr3sdByHsJNgJTmG29g4u2z1oyATj5XtBpjbXNC37x5PEhrdzHDhVMH6tX34RTySxweWhLM8",
  "key10": "4o1qaDkCCaXbJo9tG1vp6SGgh9mt1VBvs3xG8wNzFm2Sq487eBLH2GyhwRvcedEH9zDNaEPArHTQicaLy1idEB7n",
  "key11": "5nsabYZ2FPXL79Wy8Yk6MvMhg7i17fmbSTi8w8ir5sXxqVpqZxNQBXfZ2QrUJyuPic1bBqtf5w6nRsZ1dudStxek",
  "key12": "64XdTrhKtxsZ7XF5PFq5kJFNWS6o19u5ucswPozbujzeqVHEvS72HgZr5W11TQg2Kh8ck9sDufWzPyXBSjGjWvEx",
  "key13": "66k3b2ELo1S2Y8SRq55aGoQo891rW8bHYyov8XBMj1tiB8EuuGsH72wnKoyUcMwMBJ3unCeQp3XPv3bXRNRV1y4u",
  "key14": "3pzgV7bAKpWiF43AiVSRQKj1VomRgHh1FTubCKZzNSRiHErtTZjBqdL1Uxi2XhA2Av1ZtxQoo2V2NisG9xyhJFxo",
  "key15": "3RzvuVW6eE5jox4T642D4CM2uteo2GfReryT63bYXVFi2MvQJttUR9ezupWF2csiVNBVxVsoA1oTUieoJxpWRGfg",
  "key16": "5NAKPLw57rqqpK9ejjVSNKorcjWBF4EJy3zCk3q6Yac4Uqf8fmEzc4eH43KMBCDKW8tGJwXSQrnetoyBfuviYEeZ",
  "key17": "5VEpxuxQC7gypoCiwFXM4YWvPjezwsaqL83wcF76YD4zvj7Bye8pZYR5fDyNHvY8rqinixWUq8vcfTLen6B9dXxL",
  "key18": "39NFxajGy4eA31dB2nnuU3jYmgM6DBeB1sTT5v1uivUPpbVf3NtMdpaxBX2qYPpf5p6WCQiqPAgzioUVrPdNbEAa",
  "key19": "eCQNMCfDoWTcMFk8qa6H7Wb2fjofucG49vKAcvwvYgqAEvAbcxNqhNEQyfMnQkhBCuBHqgddXnbY2Xf2x5bj28b",
  "key20": "yLZPxmtA2ewHjUYaUxPRH4cr93PUqKLrTAJjM2gQXYbeU8chxNvdpVEvfVVE8Qa7TUHxYzmQqMxjMKhs9VkG8dU",
  "key21": "3HNUxEQPTJJsc1pLauD7ujtuc4h5f1zPGQQLiFVabuFZw6utVq47G58tnjhXnCHEX1uY4vJrBmTLVeBZWq8spFvu",
  "key22": "4zBnZeL2ZoaPc9GJosyr7tVMo2hCH9EanRbUQFqvJdrzNrJT37AXwrG3vuHFgjoWE8YVczzYT6pQchkaP82GqKHo",
  "key23": "h7RkUsbRpHajmmsQKEGg63s7zq6GCDU2EYwweCmZkeU9bq8TGJWuzVrKfGHWotsYETHzErunbNXis2hZSYdV72W",
  "key24": "BaWx3kh9LeLqZnxJzu4uAL1HnV7TWQGNLjrcj69HCSL5Skuihogb4trEEyTaKan1uBVYdVfRFAgGcgimbpTxnXV",
  "key25": "4Ee7dtwgMN2ArKbNSozE1koHNuVmHhn8MQPdZxgGezHHADgNQAaUui7pBFj3L9hnfUyT6f78aLPwZWhQmByX76i2",
  "key26": "7VTrPeq2mYqpXqBHnM6akzY6cTeaZfEarm8Zgimuf7FufXnHr2BFHPB55Ub7Hhc7uA6EUAFSuFq4n5QT43xmw2j",
  "key27": "EMmXMa7zxGEbwCTCqgwaapZDMGbH6nmU85csKv6sXfi1ueL8U2Y1WKMJwbB3jJNffjUMZvbYBQm389qLRubaqZZ",
  "key28": "3XhNpzNSXt49GAZcy4LFRHKnBM9718rvsc45VqdbiFm5gepn1LhKne6xB8aiS42GS1s75Lg9B5iwAma79WHReGuo",
  "key29": "soXU5sFmNBApuhwVhV5TD7pmzhsVXxjXwVdiyVBYsf9rQLLd9KohWDbW43fitW5X5222BADHVSZLvmxii7U16ze",
  "key30": "61uGbAQEaYoGg4fUjqnt3jb3mwGj912AChBMDrGmCYc5DRaaBinz64chjwyuvsRnvdi72tnpCvoJY6P7KtY3pLZL",
  "key31": "2o5LWD8p9SsbPQVhvrsF9po77Yefg9ABrU39Hy3DCFaeyTKUyfo8b5AB2j9R11oLeLzzkC5XmFZRhRWAyGRt5R4y",
  "key32": "5w5E3shmnkuhygW8fh8DGmGw2gtJypPfDkF2V8ha6U4wi9UKa4gzrLLS1qf1H1YocyLcHS4oDkayTphRsaVyNiRN",
  "key33": "4DsKZXdsH5gDrDtjEGN1LXWiL32jufrnS68gKhTGrs9Y6wuqDJJoRBJyRi3KLpxM8TCKWRA5eTxuntkqXSGosKfr",
  "key34": "3YW75juAfSDLwm67JZHpLmxNnCPFZLopV3rKjeqDRTrTvBndee3PnPyscJJzH7jmvKjcvX9anXM89ouL5Ehuwcmk",
  "key35": "sCtQm4tv8oz6NwWUWjNTC7ZCkSmqxCpum3G7GJGG62gyGjvGuiudgwQjba6oyh9za1tonMqk3Qf9p2mtCgeNXyu",
  "key36": "24DHHHa4RjdDD4wYgDtCcRevSwgHjK6DfSVRtmxjQ79xZB6bvN43r5mMDXu3nxPRmz71ompJ2ePdwER23QBc5ZXm",
  "key37": "5FPeASVHbHqPhsxWZqomrreSWgksFHxrVyTqqKcxcmavhWxmVKWCRA8mh7LXoxmG7U5VeKQj42rqxTzbEwG5NSGb",
  "key38": "3drFrFtsGmn17qkjioz1pjSq4ochdPpHLDZmREZBmK6xzbBEmShWRLQhR9dUXrRuirjUKQAMAZ8fERVeyVk5nwJ1",
  "key39": "2Pp7T3nRqYEEqix3M8XYckEBnnPgPzP83HQ246MvX2o27kiLX1kmx6fe3FFPwGnDgLoh9ABpiJSGR9xecCrkX4mq",
  "key40": "4phub2Js4ZNQK9ZvR2HBhKrgwZuwSWwBorFGHGiEoTudLv4ukLovcN5nND341TwT7fuecZWPCrVwUTd45PZZiSYa",
  "key41": "3W2YVzRM9idGuJTS1p53Z2wWoSRZsKDayoeXcsPY3PQJcS9Rrri8J5MPbbho9X9cTE5TJH92vNRVCEWsdLAvoHDv",
  "key42": "4qckPkTN41S3a5ctgESaEb6UWsJ4NY6oKQTQHneBG8w424UDWqZiSsxrERmkyCybzfApbUaHvUNKa7cTVyYnrc4x",
  "key43": "3qFpNL9SNv7eo39s5j8WSmMD2taeKbXxuhnD6p9KmRmpAXu7ZkzabWCXibQhj8iefSuotWUBeeLJxCSScBSGbrKy",
  "key44": "2HkMcxc7ofALmN8LWmZaMAA5SoaJjBGkFrbQaCdqae492PzBfCxdaNQ2ThoNtztNsk5FEk8bUuULAFrGHxTC8nG9",
  "key45": "4wT2DH2SQrS6ZTxfMbQUpooNu82VVsQHFpUKomFfpFzWMJZQnXXr9xv4YY5BwDppxb5vnCj5UEgSVqpAtWZt4mdk",
  "key46": "56JsbJfbvP3p1UgCGa3XnqsJYJ8Sv8hJBm3FtAr9jCSfRhq8QPzWLrLxWbw21tM9tgnT9FX8EVPttZLdFWgUmXNx",
  "key47": "4AFts92s1wsm1dTFoSb6FBh6A2FDRMcAFPhVJQU4RecVoWgPiX5UbZZKx95d4z2A2Yu6GJDMixpA8GaPdLuKCSL4",
  "key48": "4qAfgN6aQq4HCzULnLtFnUamzQVB4vMV1HXpWq7mPytJbWJyFS9a9qhxyMjpR1G49A5zni3Wnh8x9LqCUqjUU5qx"
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
