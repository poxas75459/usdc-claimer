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
    "31NMRayFLAqbW4FrXzoRVGhyFkpTkfwkNFXtRjjX7Pbq3DHrfziKimipP1ihKKu7URW2ShEcHsaKLgNpA1B48xvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33mhNWvthcj2oBxbxR6MtLn8nB62VFELcfxn4jdDJmTnCDp1hbshLdvBoaFBqSxwbUpVCiJxjURm4XYbokKbx3zP",
  "key1": "4pEc73iXUMiciGyfxjUALogBXeGvDPW8kxek9jVAtrVYnA2f7pmXsSLXCisXAPeEB2XtpFWVrJnSEf4wB2pjpMiR",
  "key2": "259eWauFsWBMzUHWNiHHzSBMMe7Hu8nwYXxCpt8jGBwKTzLhq1HE7fG9MgYbvQhXiJZfYa9Q9fNTqEGa6WrsFVnk",
  "key3": "5g3D2fRQajvBYvXohht3fPByPX7bdTe6oGW9aizLRPEgL8dgBAxBJX3rYznCjfEo53zSaqxYe2uMGGcY8oSmc7DW",
  "key4": "631zsA72gTAdH8o2HfSM5dGfCrSb3o6WYMwA635AKpPRxbfrKRzHQDgMY3k1HoeV1dppyucB815iiqmysFTjahTU",
  "key5": "63aUrpqdmhtm9KJsmSKcfFyvB86PNcGArMRthfYNA7KuYBidAWJWMLwRbLcsuszWGYQttXgMyWh3Gwhx7zxRxsQm",
  "key6": "3Jt1pFmaTScmURrva2npQPNtVK7CxwT6pBYnVY1R6Y4To62CMpgFjo4Cz4Yq53QR1GXhbYYuEuueMVCbQA82Z7E1",
  "key7": "31F8KDpz4oBTr5ssQvCjHbE7CKzif4yw3cysp694AB7UyPcC8PvVixk7Uk3Hr8mBbGaz3h5bfwyAMCCWumDL3hVg",
  "key8": "2pHYWzXMAYLV34zww9bJ3Gn1Bp16q28keV7qBpgyLwTPbUFHWExwKWJJSsAK7Nii88uJ9FeeWbLp8B2QWFwCNj6M",
  "key9": "3L1dnohm5jVtKZsrNJkFJP3EEwy7ftaypUjxCKqq5WfLywNVEGQRA34Yq6cRpLk17qBdZRh87SMprwj2G58ZKcjB",
  "key10": "4cQsMnx65Ztb6pbM84qAJrZqN2kvWUEZs26brERpiRDQEfiuRrBixzWrCdY2ZdqBQMuVbp912niBtaojHpWsNa3Z",
  "key11": "65EtcZv73Yd4oyRAmLGXFMTVLxVK91HNBUzKfdZRr96Jidqj7CdD7grjbiEmawTDXotxgAJAozRRxVgYgaeDNyKK",
  "key12": "2qezQ8BuNY8QHsMZzXUN8YBgsWyveGEPW3eyNHvrT7XZvR3kQyX6UJqw56YXJ5ciMCVZMttdtAr7L1VFkXb736Ka",
  "key13": "329Q878sBtcnTBvuL2xHT97Ubx3aLAtZx6eRzarETFswq2Yc9RbrnmnvGKWsZjA6RgHmtLEq56V61MYCtSU76Ydw",
  "key14": "67aeAAqKuM4PwMTvEVMDeWHc9cym69QuwsJ7tUuLUWRTzNXkbNuyyR7VVU7qN3MHW9MS759w6vrmz9i9KHV9jY2e",
  "key15": "2n8tJ7F6uYdu1DsGte4j6vzHZkCL23pUGPRVe9jwADPvvwtzxYuzQs85Aw3nX7i4Z6zpx3GHKcWfxDtgECDeTTto",
  "key16": "4izyn3oPLAuAxu5vdGr127Wu45YxjcBYJX6zz3qu5wsXFUDqo5msp1Xg1x575DGhTugBuYvWjFkeK71oPMgiG4D",
  "key17": "nTZ3Z7gbF1v4sNxipNMAR4QnFHrreg2UdrJrvLZuMsxwrJk8NEeaxsQaRMzDZocTLhV5VC5EtFfKGse9Yp8SAuH",
  "key18": "4ref9bYXTHjaRD87emWwvLLYz9F4RhN8vDNS3Ddz9odcgjb2smGUe1cznJcnK5LR9mf2WbpK17WQSWwRDTjP51YC",
  "key19": "T7TFaf2zo256Yh7yQANdcj7GQcrVyvZmnJXcakFJY9gdUYYr85iLZUdrFENEZdnSMVd9MYKFrfzhSd2KntwZEqc",
  "key20": "5CaDVQz1BXsevxapS8c2Cj2WxWtsubNHsnkTsQpbo7vMjshf4LMgJyNhZQmF1VDB1ByqEd97YW7w4oXkc2q2LZ54",
  "key21": "3rtN3JKEGqep3MoTHTa7cGrq6yU5KxxYqSFBCrnodfRJTiUZjQ2H4JNV7MS9eC8Z8Enq4swwZTMGWEZ7nbn1NmB6",
  "key22": "8gZspsTmPbFMZxoRdkgcPSoKF2VP5m6ACfzXmJxyNiwJF9ZVRPNQ5bXZdrVfrRkKgexAxGKnjKSspRpJ2PMU7XH",
  "key23": "SRefmKPHQfwyufxqSuT1iRrw1Y2FoSfJXBiZrhoXm7SXFfK19FFd343HDmFpv6ez7oPk8MN4aJV72ZpJCHeWchs",
  "key24": "4DUE2xL8ibCgB6abpUsEi7SeKFsQcMyCubP4hmjcaaUoDx5KLZPvTEsLnLEPutmgBVhUmfpDfW92fgnzcvGBfznn",
  "key25": "2pVpzMcjNwhVuZK9u5qyAbB2YyvcQ9t4LNnZecSKUYSwDz2ZTiJsK8doonysnqgd4JwLWXXMVaAMi3roDkUHa8Rs",
  "key26": "5gMFwb1fKzXpARVVLU5A8uQy5abdLcDxN2UgaW2PjtL4Lpi4w6KkoVjz4D57te6FYbz8mXeKpd5p2potmTHmTWbb",
  "key27": "5KwHwpZaarEAJWZqp5XDokih1M3zsyjjepVxVd88ChdHjFVV6xwdhKDWxpiBDWpnagsJgykY4qpvoRwCemKxAkTN",
  "key28": "3yR6sCmMWr2hrTtaqPGX9tEBA2eiA6SgZDLHpFnuhug1WBXLg6fby8VxHHXJwRJuvx5yHjjuk5JstuZPa7tGfKJ5",
  "key29": "2ygo9njoizoXboQjWeXRTSkP8VykyTHJWvSN3kddRMKJDbSKAo3YTieMeGqJY9xczMokba8xqT2pyDziAVqdMjUE",
  "key30": "8CgbqVeWuq9fo9kvLnQJuHCmjP1b9MZ1eYkdSfd1KL7jx7btjiuGoYfy639WWx4iSncMAsX8EKj4wpCWs6PhiUm",
  "key31": "vwUU8WBZKx1pA9ceEUA2k4oXwosmS6nZWmM6kkfveV7Sfu3DVhQGxCtHZcG5eQPVeSpUj1eHeAD1qUdQFrFLw7f",
  "key32": "4J1YTy8XsiQAnBdWMi6VpNZKKKnq5reQnj2z2AYyxdr4wyv8Ha4dX4AGrZUWhTx8UuPGzKHYvM5CrPh2ZBXnFaZS",
  "key33": "4Uvxyq3NvyRSxWJBux9HpxMNqgvNqCrShRRf3RYRx8GNfHN6H6Xg1xseVuz4Z3mg8t6reKud87dixrz9ADpyuAGq",
  "key34": "4U4nRAwHnWaVKYRL91sRWBWw1mkW878AucjuC9itEZC5WhYbSgXP6gCf2TqEkVgbYWCrhwkgwPqhwMZdRsgyZGnH",
  "key35": "3xHkN4hzWw35Ai4HVJNTitooCpm12SLwHY3ShBcvvMhfE9KsnSYragyXJvJcJfy7KYduTVcKiHZzYaisH6ccjmu8",
  "key36": "3zxpikogGx5gcdoK3JxC9fZmJR7JcRh7NkGvMWbvm4QLp9ZUpJBDHg7iCsoAhdZJmqFE2v3APKz9wpq6siwQpYEX",
  "key37": "4gSe5wUxEnDi6oQJKMPffvbySHLjZK7yi9FYjGCACoZ3JwB8jXyHqMXjio6kkRaNKC8gCG6UdN6VfFMyjTNhwwdZ",
  "key38": "4fYxZj44mLoqoSFViv22F78dgWydRN7fgTTdrDNQoQ1hmHMdMhEoQDZrr8TeH6iLhjBQCrg8erk92PPv4tQPgbGW",
  "key39": "5q8eq7xPRoiHPRRcsFnrUnqdXCbzCLMDG1Kkq4TEiRNmHjGoLR6DsZVJ4zYGiSeteQrxxoe7sggm9o2Jb7z3Z2j8",
  "key40": "4koSJFcAAW4VgqfiyEYdm46GAosMMU7LKCPaSDrNyxSGKuBxa71CmUZVJufTq7bzvVbiFm5QC4LPnw1fqktYakze",
  "key41": "uTiyXt4uKWxwYwCAJduy55ZsBoS4hTJxTxZADDniaitFhEwnNes4f3GQbv2dt9C6zEdaXQ46TEJpTSeyYgAJT6A",
  "key42": "5rz6tvoqg83rjndF5JS8E4BDei2yHkPcCfyfkesyerVcuZHaT3dmBrLR34kMLaFkPSwomFf5xSDG5h6age5Hiodg"
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
