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
    "5yGzsNGbx3om2Q57RG6pKYBbDtA6BafE7TwWPqrVFJDTui7qTF6nakeKBxVvUa9paMiJiU1B717wUWdnMm69NpTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ca5LX822vdrM9Ccmrz39vgv2EMvoKh4DPVPW7WiVnPgsaeUKW8W5xcZ2RkQV9MWZX7wi7aFpur3QqVz6tFXXBQ3",
  "key1": "5QdUnGH8yA4S6Ue8DMYxEHfScGAxVr51c7ETqSob4uniLCwUGcaVZqm1T1imUhCCWKUKQYexgf3xitXdmUF2ernr",
  "key2": "6gbAspG3Q8CDeBmY9HH1yxgy7kx3Y34HAAx6KN9v1xy5Tx46PxoKky6b14KNspU8sHRTnnuXAmVN3pcxMutpEj7",
  "key3": "64SNxaLMYvUWgXA8TkKi335AadMTeDxqJHQhhbrUKnMZMafzGUshTcbpjcTffxraMR8z4dEurxsqvPC1D1aAW3GG",
  "key4": "5mevZhGWsefTSnTjyWCuj9vJ1gQnxy9u3rNN3bkwHfhdJbbLsTtPGc3eDTeJYBPsd8hVhri5aBhB4MCP3uzr2pWH",
  "key5": "UR4Q7pjMQy5Pq8j7rdUk3yVaSuFwW5y1xx5MDFoByfuquFLar29j7YzXvMhRZA6agtLzBKPVS8f1Uf7UtBn9pP3",
  "key6": "297K7EH2fKpajfJ9uuoWXU3KKva8o6psmbpTfk85jCCHL7RAf9E7A626UXLHWC42AUxUH9e77gbv2SJCRwsrYTjG",
  "key7": "4jVncBaMVQBJsw37KTgv6kJMJdmDF2pchyjDWEXrPkKcE17M72CCWadd7VExQtg2pPScdvV9MX8B5ysvHzvuvjee",
  "key8": "4zxHJXniCmNLBmeho22b6Uca8f12snUkYcMfvsVo5WfnCZeoszfnEqNTtLhYriUAFGQhHYZzYjw4cmJyTRD8rbug",
  "key9": "4YJ4ich11LkKd1K5NJejqaULpuemBoKYuJow2Aqjsfgb4zjoFUGvGekDG4JiMpf1XbMsUXvSgmgcgMwzX9V1UxsW",
  "key10": "B9CL1t6W3MouUXZ94FZWGsAdHyBpYqmSyjQG9CEeEUpZz6gH7bGt5JSv1vu4xwELLS1WSqd9BZZUjwjbHytkjaD",
  "key11": "h5tuKh1TkiiZN1LGp8SB9S38Y5nncrcLytTdBNwihCYA9ER9KAq4EcpKUQon8hyQRdZzfY1uzaqiVTgyHhfXM3U",
  "key12": "aWp5dHEmCFRREhWHP5sp8ouryFLRq2eZH4wFBbegEmXZXu6n1r6yz8h1NAasqPjVCTGg539dFQbWeuPX9HaDwgN",
  "key13": "5rWxEh25tzjdxWa5vZTw2R3QwEyk4sMXisqMaxK5Ys5vRuqPC279hwQNJm6A1627CAFQ5oRzEo4SKHtqenJ4o6Rd",
  "key14": "U1hsyKtGMuqFPUyWbufkzxP97HoWkjLfcAHisJXCjP7vkorQrrMAMzk7FGikLpyn5ojQdABoxiNGpKxX759kfwB",
  "key15": "kxGf92i2YdrTDyEsuKEV2HCNGMBdYqw8VWNuJ8q4erBUstVG8z7HMVFcmAd3nPjw4Jx8CWikdmu4VzGQwH7KKF2",
  "key16": "2buGXF93L5xc3EZuNFoUiqMpp1dHEE1jykynQJ5PFufhV58KmWf4D6yBXpCjD1KvnZiCarff4Ai5WthyGmaHKAAN",
  "key17": "4dGjn9k6SbpSuUWdi6HBpZ7MP1Q7J8wj4u7uPJdMYfyLP8sYJnaVfr7LQuP8Lr1Khkwz4wmzpZMw1irCcEgVjyo1",
  "key18": "2yLfq4gQ42FhB1G7fZyZg4g88uirrhTRFASXoGvxJVPDSpDgpVPDiYewSpA3H7YAugUWgVAV56QEokWv9SS35Akc",
  "key19": "XnjUydJqg9TWJZcxyuB4Z8KA5zyHMLwf5FeQk4ayLYxcUWc7uE12UrL3ZT5dkZRjrub2ZzrGeJmJZQRoFQQbrwP",
  "key20": "465eA3PXMjTj9rGtVtDkU821kbc53vh6LjZLLJpvGCSXrmvsNmRVSb7i5RaykUmiZYiJxC8DS2XXC57eTEM9bLzq",
  "key21": "euPpB9YZGSL6sTP5zzhCFVNsvKpKxfE8kozC1LGL8GZ4qjhi5AXxCVoT1u8nCS4eKX1GBJARbZkSkrMFiCHHUC6",
  "key22": "5fB8FqsS9UZewCzZMnbGNDcPZK6hjc7cUtfcnB2t4JsrGnvNWMuGPiEDM8PuwJczi1oocqkL7En5SsGfSufW7fcB",
  "key23": "2apyFDZxTK4yjbrcVxwvBocCXZ5qLcetEoD5eEyMecLAMfWNxvLPHFmTthPrSSbKaAqBmFRxWBEfm7U3TcVXwrYb",
  "key24": "44avVJAthh4yJSv6NyJpJtZ4VTVogT5QaVieS3sCeSfmRtJpVrZc4GUya5BzqU1ERBjatRjFV1KBHQAMtCPok1SP",
  "key25": "rN2EtVkSBBHS3hhyEzDGiuhdoNWR9AjzqRYiVH58TvXGwum4dbifYiFvrbMwPTZhV8wNA5GCrwiUpfZ6oKG2KNr",
  "key26": "4U8ZADqJyzKmE1iYPWzWyQTy4jfWjPPgCKP2KNTDVS4EDHJbcMLYKqaDSaSdZjG9uAhUtE9UQo86D9fBE1rFoci6",
  "key27": "2E4NzaQ1dF3SnoTyLsAmWi2ZQ8QtQHpt2PcyoELQwwC3MgLpZ33mFaMihTVDgHAa3dPgEGUNi4xzqqKUzk3TCi3A",
  "key28": "2hQ6f1sKwyY6eejeCTzskGwhv8VkWWLAJFAL4p9PMyMXNeUpuRn2shaGVY9HudtmXjW8kQMNWNV6DAxEVEe1swjs",
  "key29": "2BcJ85gS3tzkk4t1FdZAFRqkNarZb7RZojT9yAFBXaqYkv9TPcTrVPdpTbUB6qDFGgVmSrAtTH9UZCenhpDUKSi7",
  "key30": "N1AxZuKwrrCa6suHHMiXYhELUibzpwg76FQLksKnrjUD41284QN1CR9RKbNvdbqgcsXvt32WujyCcGEWjk13ZRc",
  "key31": "6348QMJHDrEzfHeLZjZLxHz7ohm2eY8d8SqufpRFm6rH4FrjN1UfDxzXtg4KtiXBSAbUsRbZoJubjrtJWsHo46QL",
  "key32": "ND3Vwmd1LCApASGYg8fFWdAQgyvrnbXQ2ZJMhiWdpDSPbcn25aEqypbggbsBigruZvNvwxhEL9BE1JWjwarhHoc",
  "key33": "5qPcSfKGKEw4mtetdS4NwR4QqR4uDFxB11UGX9NuaEDHPiQYc8FFEv72aWfZhaqRUwhsoDvaW3Wm1i2m9AkDmQxe",
  "key34": "8Q8hJUrdFVcMPn2m4q4v5L4kMdQfy8mAQYjHbrCEc6svzKXeiKom2hRiDWwPt4pLGXSYcNb2GvYtRfRouHP1UZZ",
  "key35": "MtvV9fdWxozYH292fzJiFAo5JA2DToTq3KgRm83mrqdUphxXDn4ztSvDn9K1dNHDxjjtJHtFvJbNw7P8j5jREuj",
  "key36": "3Dsoe6Cyg6U4TkH9w9VKFpfjEH1zsCBX1e5fb6dEw7f5aLPboGujyW9LRCioWGLwr1qvoFX5MzNTgwoWiMztZKG4",
  "key37": "3mGJFXamPyfMA7bNYhB896xkteNJem3RE6rMkb1WYWo2J7fatSpdCCRZQRBnGQqBXqgsvRkEQekHzBtowznTiyG3",
  "key38": "56wN3Q7N5hpN16bP1xr8ug8KJvXagThMcTzyJSq2DkwPL1q5noBZbWk2LeRHGVc5zs7BhhKRCPXGAdQHDpbhdmdD",
  "key39": "5XrMpaoFouZhTcYPb1GgDWz7RLMdW2FogLCk68dt7zY631Tmh2FUhN3bi96XMnvZwDg7bXuocFBwCTKSUDLzp4JJ",
  "key40": "5XcGttoq2rLX5fJi89q5zTJu9jAiZCpyCgMTynVCXsu4tfFwcV5S7sTH2sJWt8V6KYoMUuTHm9P5ie1nFyK9xtwR"
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
