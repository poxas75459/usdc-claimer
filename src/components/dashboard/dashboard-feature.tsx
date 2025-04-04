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
    "3LmDKXn96w9ahaDBkWVnCfTKtDx4c9sKmawuDTjffjqNCnR4HXsorUijvrKaS5vNcJpAQSxoCDwD9q7iU9Xe2CVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bkBtxDyzBX6hj9W15EcuvdRtJXUPXq9Nbp2sRQT9cz3Zj7QeNLsZ4RFgxNzX8a7nFUjejsZrcxFz8JwSnABgrBt",
  "key1": "21C4BRG2Zui8qB594F8TfEzSDmpiD4RYyhjuUpez78zJ4FHocfgVLpgt6Z2HoomNQu7nbbGbuNQFTZS9paaELSZ5",
  "key2": "3HEe6g7XAzSWTNoaPbqZQfUtFSrd3vvYUserwaZkZV9B1ko8NV8rr9CQJx2HTk4tWq7tcEP5qfiAqqJJKqAsMFoT",
  "key3": "5siRqqkatrZWZdW2vRYU2m5LKx6k2yjM1FcugKsYY5Z1Gc6iSfeqn7ao3bmVnQiBQBTFex4rYEkbXsLHHTVoipE6",
  "key4": "8Qv64EWNBWERFSZqoxKU4m1oHjzW1yHk8MtfSbP3XHYPGaaqqLrdUrji67Yaey4gaWoV6ZFW7aGLitZ3mBWEJ84",
  "key5": "3wvs64dXaVACFhG7UZSJKJFBchjo8q1j7akHTuB9LKiEdYxAjGkHrWRa2pF4zdFu93SEktdqQMWWPFn26QiSoVuT",
  "key6": "5awgPn3yjsZ8p3TpU3tVgXXHhQXMyQWJxeMHf4XDgmBW9p9i5L6u3DFn9DJHFgvLMRTRErTbzmeK5Ajxm5hc3y5b",
  "key7": "3W1We3Rrt7phGUe6sRBgah8Q7tDii3es4JgVTro3GvFDEM4JPKHMY9WrtQvY4saJQytctkyjeYrNSfnsMxokymU3",
  "key8": "5GNZJEvzqNc1tb9Jz1GEH12rcn9H74oZSMUuKAshpb3TQ5pdM8wZhb555o33sHfAKQ8BbmokKZh4j4TLqXNHAtg5",
  "key9": "pWFAKkTvddHcgfWnYpXpT4tmzJCFxTxEUXa8X7nxNn6LEYSLY8e7ZvtBsippeg3ooymEBgZXomEpHwbjiphjNDD",
  "key10": "4sUWpPsyqcLaGvFNgeEs39HEabdJEvG81GygiUFkq1ZbHwFPNqMWwGc4EkLTiQhJSV9qkg6RFQene6BsJNoJ8J4D",
  "key11": "2NKH4hvjwrYgRF5QFr7nQo6YMbXTtWuLeC5cBJ5iLFGetALkkcurzGb7xanFZ3hsqbK5xY9qZ15nT1w83v37KgMi",
  "key12": "5KJSdSVKN3UYV1sDkqciTWBUfN28C4KuBun1hMerW6n2riYoUBKWe9mRYKrtWWFC2DfpyXwv6DUZQi3LVKHZZxBo",
  "key13": "2F1cg8fADtac3JqvokfowNMqpUty4kcjey56eGkNrwaXqAyWHAXSj5VUJ1pp8TzDqzP77rJo3MXqfDpAxSz9cvR5",
  "key14": "3q2vREBSW8kW5iAa9MK29zjuYqJHk6uHn3jN5AM1YRYRWar89xk1ni71vApib2ggoWAETf7TtWGN55k3NC47q3iK",
  "key15": "3H2g53C5c4FgeLeWpJUynCD1PB6VhoKDUnH7Pa6LY4AZ99oSbfiwxJN2c2SGy6bg8PN4TDwLMAsPo1SkVb8L2s31",
  "key16": "2AnqmR9dsxtQvxumbWa1mEi9RLHGyB6VSDLLiByJoaUVACZ3zqQ4izuj3TQLJEdXrKDBNmxYX5DNuiipUiiN2f3Q",
  "key17": "3ErzmY5zjRv4sJynPVqigDCq1ryU9VQ36v7kpH6Cfd3fVFPosbp8Lk6SurASMWK4thY6MVm3cqZzdM5rqu8K668h",
  "key18": "3uK7Umx4fDAbq3h2xCo4aK2mHNjAC6ixqZ95guZtvYvj3pGr73Zo1ERQQFNNFBvhbq5nwVfPdBDzq71AF95b3A4a",
  "key19": "4fRtz7kZkQBPwvc34h3ouQ7KveX4kiVnm1WFE2VzUvMqpbe3BddUVHunSDFgD5urPR1Z1GEWZzs8K2zeqMaHqBJV",
  "key20": "5Tj4bZr5PiA61SkDU322WrmvQch3HbpAbuFV6tvGFVMkL419V6d6AcLre1RJuirdn6pPH1p8gFHMUQH2yxucXjYB",
  "key21": "SJprsPK3bt4bmgXjAMdai7bQJ6pKE4y3XMCzw851PjaTKZwUoCn69gTvsE7kNkVxDe65XmR2EqJAB4ucoZNniGY",
  "key22": "2fFGAcpjm5T1yTkWYMTMkoDr7DrDf2JDsvyrZeMaXoMJmdHbLgqHqyWJBgopg7zNjSqobnNDuqZ9tsBzbsRZQKN2",
  "key23": "4F8pPq8UtunztE83KSdTQrBMhzbwqNcQQdcqYQyRnkHmCWvbtZjV57xTp2b8XYYfiBD7n7cNBwBAKKb1LQQYeDd",
  "key24": "4PdxXjbEway5jgmsemDWxiPgUkD6ZmMrP51Y39vpYxGGxqdwMvvkXN8tb1AV5eKhVV1dQay2JmS6TMjxR3fs2Pa9",
  "key25": "3XfG5NK52Uwmuqppf5udcVmaVrGCLafGPnQjCXpW4cnuHnwSMSkffanE58b7niN4hmw8Bm1E3mxLY1EFNpYJStQj",
  "key26": "4o4wVLnMDH1d11ZCze6zMHJfw1q315WQpRwaB51EEiB9Nkjc6hfGFht8np3TAXjsdpRTowcwNLkMwQT92YuQXv6T",
  "key27": "39WVX42YiTMHpbd7JN3UrMrpsRSL96WUeKPocv3bMLVC1sjvmNjcU91APMpwN6WcMa6VJdokMnyccmWUBfmqg6dm",
  "key28": "62FMXEwEvnSGYxUa8QAEUHaYYadAqK9eUc41N5F9xzpUWS3BVeVCSzmdRbVgUfD8oea9McpLkxat8RPGdi1Lcq67",
  "key29": "3MXsHzfVd7iJQCyEwEVDo2i9JE7Xzo2w8cKtry2frGR6EXo4ghx5wLxttPMmTExiqdqujneG3aWzoDyuBwK1uCqj",
  "key30": "aRMSApgbn9LhKZBEY1QMhtgPNbozB7D5w6uTZyDrkXYAXXnXQamCmy2cfPGc5zQ44qYqGfeCNvPiTiQ5jmpg41C",
  "key31": "5e5f8vLbczqyh2daJA6suoiujzofsbVSc8NwfyGAXATSR23STh4rs3zHCwkpubwNzjMLeLmKYtXdjYq13B3nLYiQ",
  "key32": "juxf9MDvcRCECUy4YMpzGCQrYSLtLE64Z1R2TYtBbBBA1GmhDb8TxvW1vGTryBZ5jVm6PuwhQmwEnKiGz8u5Z6N",
  "key33": "3jK3FoNUPfG8SWGsA4zkuWnk91u3mjbfUaQ9KfhG4JaGoCry18xWfxpJVt2JTqVXcasKPsyLULMnZTRArS8Byx9o",
  "key34": "66df14aTbWA1Aj4Zzw7q6KBdpLmZNzyg8yCKunoFdHc5wJcskJ5e1mfcq79d8JEqsCgVGv6AKyAVuEWCvDx5ThVc",
  "key35": "2C3NRoAeP2hU4TRAzRrYr16Cp3SCd9dSqxNydL4tFrsXgWpwsfFBJDZ3U85yfHrgacLwb3L4Jv81PDrGo8SfP4WW",
  "key36": "3imexSNujcZ76dDaKoyEaVvmNvjgGcxdfdzeWst3ZdxryUynXRANQ4MUrhsdNjcayBZ9oiXf21xQUCt6RkgrQfd6",
  "key37": "3hWnq42cRuCnviN4tm1sAHmVZsVLCEZJJW1dNSYknwHgD4vbfhJVTUso6EP9FuXTWoGGDVSLr2WfhpHqiSaDX2Sq",
  "key38": "3nb58ab68FxpDENnASDHaynaYoyJKoCaGnqkL7Z8DJVbtN14huixkQn4MwyQjm9BANeyYFeVCGJfF51H9K3whmfy",
  "key39": "4XAAyvG6wivNLKVcGHLqBF16BDjTqzQRKKy8e76waDV4RU67Deef6FKd4VTgbQcjoTE3QyfZWXHGw77UtSFxjVQk",
  "key40": "295RVo8Rfz5Qh5zA1EELAQir7YksgD5JYLTG6NRmbUNehC8PYvj2DoFx6ppaDqGba86DfFqArBsMywZWyLE1yymV",
  "key41": "4aWrTLkztCmu5ZNUBnR2tSCXJwVoKpZPUj4rSUM5ncH1vYFVNA91ZYyVZi98uzBYKrb8ogPFJXSJQn6aCywVKxa8",
  "key42": "2fvkKrDEB7L7mbP1xPkfx4NV8AXUrLVcQz7rsfaPUYXQsbgfG9ADMv1p3ESjw9PX4EW29wo9TVZy6YJJsy2DD8ez",
  "key43": "4gVfpwbtaBQ74GwjWU6tjvXTiynCEFAwTav2cBFCEssHebb4RmX4eJ3iD5k2wHbtLKKfx9zQfwLanYVZJB7HVnvs",
  "key44": "4Y1NZCC6eSvAysKdEResdnGwhnDvqEPhnPXyhdtMdgxGa75TBaQahdGJH8MLf5ceGxBzdr3BkEsVZsNBm88mdcKR",
  "key45": "5rCFh7FZzeD6oWJZeSpDjmWHqXm9RKa817tmuN7Un6xbggHH1E7srFv58ASJ1CikCFaJdt8M7ZfpUJP8U1nTLG3N",
  "key46": "2dKwmknu5wzhsdmCG6qMamx24aE5GGkHkoJUWz2ZDXMjnHcAqCZY8SEaSzMEBgo5tH6ygrqrdF42fLeafmvrafX1",
  "key47": "X2qG7n1K65ARqUNGvshJRm21btjkUVpnZ1ersnJLWH3d7J1wYpyrxB6USVYg6zfSV9ryBCZdNeLVhVJDiw6fcsT"
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
