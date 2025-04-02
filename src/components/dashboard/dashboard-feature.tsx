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
    "Gxzm27q1HDfLiKKmJdh6VhkoHeJcMQ52zCXWFdwkHwtiCUi57DyGtAZjZLaPt17oXCYgX7MYPJ9RSm8kc5i9wps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q93hrsYKQV5h6GfznQDxBUnscagjwMPLwD1yyeHQagERae1He9efTsM32zHRB4X5aVsZZFrnfFWQEEaPcjv4gHB",
  "key1": "NwU9vaQzscn4frz911jUFSFAtRYrh83PCAA3rnYDmJtidHtS27bUY8JfTNpUJ9hzWYHQuN7Xp9YHuEiNEfYm9be",
  "key2": "2bkBfsv9tbvSG4bi2ktFgG7Q93tUNzo9MKFRNaX3zCTD5s3TiGWDzaD8oBf5jayFJB45CstbJ9MDLmyTLpycvnLk",
  "key3": "52JcAYDPPRoJEqeF7MZtj7rL4W2SFnoY8RykXMsrnfUSMgccWnk5YGLZ3EbXNxHivg6Vb6tdJnKDck3yt3xm4Jqa",
  "key4": "38ugKUDERpLjLuMN77hudC1FoBc2jak8XTngDCMt22YbRp2XWqazH96xH5LJCExtWabPFHaoJjQevHLy3eHo6cQR",
  "key5": "fQgcEWGZ6ARsCU1fCRSWRxQcAASLqgqMCvCZDRme5Cm6954k1yGYCrNoFzfdAhgL5tELzeMzmQ6aUMVLToKcbNC",
  "key6": "3u4sWi64oEQ6v8iV7CDX9EQ4ezdvKPnhqKSpNaJV2YQYwomo4s7obwNbotkhfM53HMPoEVMpRQEEtrrRGdhsGyvY",
  "key7": "51cNVfQdEnBRcxu3M8TfHHEQqSRcBMo1UJMPoeqg9mPbUBSrdP4b491DLe237xuwmbZiVXNs41N9VKwj3pgEHZeW",
  "key8": "QxBm4qQsJqdmcfq1mRSmPm1zF3LYiBuG8CRMr1kZHtusAd5f4oLPG7kLVaLwcxs6qbNmGYcKzPa9bM9pfSYqCPQ",
  "key9": "2iZVY5mCasWjhgpGiAZPJyyMnecaqMNKmpwb6tT4YjfLaKziu4cH9eoDJpqXRc6VkYAe1tNmXiD3XcnSVLbHBNkb",
  "key10": "3GDtSuk7vwL2UefxUh15LcwPfvvyivsVCEPyXRhKVKp7JVV6NyHrCCyz5A6FL6ooPVbpK93WVnht99ELSbTPJys3",
  "key11": "5KjqwiwezVfNEnDRbnhMnaYF8j1732Syw1yPLoC1i1dTDL5mmkFDPzVzyHM1DCfUSvfFcFXJUKtESwk46es2kupW",
  "key12": "5Xn5AuUZ8GQjbUrWX9Pqfsg3W7kbEz57Q6W3o9zaTJyYV8W3K5EXDewb4TzThtNx4QbMU7h7vWEB9cqJzZnFKc9Y",
  "key13": "83CPDbiM3ASBkhePBW9jADWnkTVvk3QWovdLvcgVANCC6REFdrHUeKgUqJe6gpYTUP85UbBveMvHkxHXMMX2q9v",
  "key14": "tjiWhSiAZ87YXXi5BuWjoJ8aL42kKrF5Xezv99qR6A5WMmVSNprTpTA1X2Yk5h2hNKHYVJWERLBFNbfhA3cpYTJ",
  "key15": "4WhBsMDwE9J2kkiFeXhCur4cNZ9Pco3gVD5y9GJtttztpCgKt44wSoARhxiwZRfUtYWSamsqPDcuwKNKDUnxTP9x",
  "key16": "5U6Vgz7TwkL6K2sGkqayXw4r7XxiDgEhTsX1J4Kegx5NjRMJPPqSVNXfV9z3FiCnMiayaTxFT6rmWxjZo6azGP3B",
  "key17": "5RQV7THN33yBfdqEpYFddxFb23nppcHhKAEveax3bjod8Td9ZvVmyTsBjq77jGwxDPEbNbuyNH3FBZVnN3f5rrxN",
  "key18": "3ataXgg34p2HkGwwseigKV9RfaMN6wfvtuMKh8RH4txwkntHtvgFwgBQ4xhkbLounCp5AUKpe25pV8XQQz4x3DKp",
  "key19": "5q2TJAUf6ixpRJZuZUUUDAgzLMqTXZD8CRcSDvpaaiw7ATVae8jG6nb1mNaaJSYjjsxEM4sbGMySvppPNBAGmrE",
  "key20": "bjDvjtLW376ztg5VavS7HwPZSXVrQ9MwqZknYkxNyYJ4rzPaoVHWjNgW37rnwgtRGMQ9wNfw9BAvvhQz2toxsbW",
  "key21": "31Cu3GtLAEDoC3C2gxo8N65pLkazKhxcesX6QmcfkUwjrqMLDjzxxHmAFApYg3DUuJ2F66Aw5tiCq4PP3o4xcYrP",
  "key22": "3emwjHq987o8CweaUTvAKyTri1BRTjdfZsHsZV1W2FQnzT1BgJBerwRihHG2P96UXzU477cpQKwiZgorunGSkT7F",
  "key23": "5HvbhewCmFRPujMxm1XE3YDpnSUxCBRVtwJy5NCP8RX6wYURFo1wxBBLHrohsay8at33M5BdhKuf8EkYXDdeMbJD",
  "key24": "66G46jmMrquBtmioczKT7DujzXDSWjX8sn1v4hAGZmKrr96goAxudHr2oV3UiMmao63tVoKE5ywzMSPsc1K8DeEj",
  "key25": "5oo7PheHE5RgLMX52nhsuqfRM9NL8oMYvdhCBU36Yu6V5yWa463KsWZ7HZyCUuDco1dRE7Tif1cSb6cEc22D44Dd",
  "key26": "4uv7yfBLu9zFEBKNEdY8qVh5TsuPvvE87p1wnzVTkuD5mcUAyJ19rLy9p2SoQ6itkDTN75g2GaeUc1DL8Nm7qepk",
  "key27": "27qxzU71m5FwhS28tg6Coqrtok5Ncm3G26DscRFSL2HJ3bH4nNNBUtJK3uUJNPXguZG1ms9UzHAMo5SfLRaSRLoM",
  "key28": "hczjoHeo6QBHLSmVwW5FDJEqz9KaQztFzxSbYjJUEUBBZvazyYgCz7yk66ncm9cnRE6ARnnDbtZmWBP9r99MNh1",
  "key29": "3b5JE9XTJDgyDh1d582f7f53NB12WjsyPXUnumWdKiXA52WcfrBRgumWKm831iUZ3KKGW42T3m5RE2WdSAxa44Nb",
  "key30": "4R7nMK8xkRUS2HjTDpzUhaLnM4cbzkok3TXXqwTykwFijxRNcDnyW4mfoe1SEvi5M7kANeQEbuaTbKyvdRtpDHY5",
  "key31": "nQ4mNQyiuAwV8f7yZa2P3niBBuE7Pbh9nTaJCkaZBdTJjtaF636hcu5CzWcVKEikgcfQ5cKgwtDaxcmre9U9WGm",
  "key32": "4tKwp8NoeSaLeAmbZQMXYrGnmgc9gcT1QqEP4K23dicfV1aEDCQCspfZ3YKCuC5sP7dHRVr4NU2Vpd5v3njKXzpm",
  "key33": "2mhnU3eBm3X9nxjqnd7AjAppWiNDJv1ZG9s7hCR3saLbD9hKrMb8g2PDoY4hFin8qKhAszM6YJPLPSM5NdVUWksn",
  "key34": "4bGLaFy1WHdcUT5wV22RfUNyr32hwnCpz2vugKpwnm3xN2jr2nqDYVVB7j7oCYAPwY9c5WZ9qvE2KXb94q1jFc4d",
  "key35": "2CuzFseAJkMs6o5h6CrzGbXhL4BEz1NavH1ogxrm3EbzgEXgFiR5FComSUcknUb1evitFLQNk1teaKQCN18ovwnZ"
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
