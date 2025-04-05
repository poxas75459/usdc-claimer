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
    "2kA77DPhECfoeqxSD88ewsXKJyea9MG2rZNoqSzKv3LQf3vhRiqHxPapE1tdRbVyRnKCS3Jvtffh9FXHeNMquJQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f9yEGpaktY7zZ9G93HXcswBjHhs6H4bxrAE58Yk2Y2RYAVS8JizAQoGXqSpyv7cbLsw5nnjDypwrPvERmp8f3rC",
  "key1": "5mo7vyR4QYVqu3PHz9uXbtQUKA98wbRtJKBb1Ks9xTKi9LGzbanDfZLYP5Ff2Vahzs4RQLhw7kCqhdwg8cCY7zNQ",
  "key2": "2XD9cq6dVaXhEJNnoK9DWKkE27NZfKs5QxiS9SCycnqjTw56NqvJfbEtfBxsty2tweFD2yR1wQbDZYMjm3rgkmUU",
  "key3": "BgNucfrzrUUEd6caK5jq8cK5VGZSyDyQEXSDgdxLcCyd4Rm3x22t8jLN1SvrWmFe8RVuiWrC9R1UT54AULBsHWa",
  "key4": "3DCdMYNwGcXSBjtk2XJ13Ld9DEftSN3qmgWyHwrzMixXmMrWg3wDggeA8FpQpo8HBxoRgaapJ6qRJid3piKAmqbS",
  "key5": "2M9Z1kcuZMeWjNii4BbuntAbjGHSMgaovQiDsiaQFM7wVdNC7p1s4BaracuspsmaKBZqu6R1eGumhfQB5FeKVucg",
  "key6": "5haAPNaZzrkcQScaevYZGHJG5ph1ciVGP7HJTjEB2hisJgXPMNhoaCi9vZbQHsncufodgWUVLz8ppeyWGX8pUzgj",
  "key7": "2xVTFdbHnHns4gcd6mMPnnsnjiYduKP9d83TA2H7bXbmYqhru548VKFRKzSShRLG3nFJxVpBJ8fRBS1qMUCLd9ev",
  "key8": "KPjR4jZ6xKsTFBMch72rjT7pWYJP8WoVyW1QTKP7sLQvhS88hsxfmr3g8eh7S2HCE9ET3Si8eMEVvef8uprWQsD",
  "key9": "2wMLYtUBTH85bxTXECWMkGpqgiixtXJV7f6vztLRtY5u7chyqu7RmnCPLvfpnRAFtt8LDRRScJnzdeBokYKS5ArL",
  "key10": "2A1ZTQBK4uaFCF24P9KLM6AgLSDsjiWEMjGwX7rDHihZh7QyATmLCu4qNqaLf6pSsn1bvciagr4QnfFynr7NJ8tc",
  "key11": "3BPh2S2jtjaPYZMZYgdwfRqiztPrrfcedHupngyj7Kxsbfb1WFhQoEuV9Z61G3cXQBneB3jsSTC4yTxgEqoTRN3T",
  "key12": "5W63kGhfRxxBT2eWVETHQtVNkzaaxyztpuYB7E7mmNNkEBwPyaHXk6pg7MpCi7yrkSBvDnw6Ufz9nWE2rYgMmbti",
  "key13": "6W8DQ9RV87N4A6iRfqDrjF61DTKnRYFLgezUtNYJBbNFpG6HQSWgp9EKabxBjFB8YXzqjbHNihcfjS3mAKqhQJj",
  "key14": "45M7iHBzYK7xifzBufUjvrZDCG77jCC6nxbrrF6eCkr48N6pTNuKjwJwzB5BF21fyVkoN5tW9JqCb4XUcUxuxcGt",
  "key15": "3K44UYdi6w7X2pp9gjsnMXzcu5oKksY8HGxcZko1Axb3cy5PrwiiuRx5fWyxTX9rtKajebArUHD2kWymr6kDt7hH",
  "key16": "4DmtVW41APRW45Co1FrayRJN6aSrQxb9UXU3ygUG5yJuCpRGKT5DkfSqHo6sjfd3bUjbDntCNWSByjiapkPThDih",
  "key17": "2pjyJwb8f6pQR3nUf49kqpPKrNyy6CAgGUSq3NEUuk3Nna8oVbiHqYtbxQAKW7rTJUQio1cwhGRNGZU8LhuEG91S",
  "key18": "2fUt2VYfgoPf6bwhVqhSQXe98tU9eBnuKXXBZthAtY6UTTKruQr3zSjfL5cktGJyhfq7e435eCMXK26Cg47PWvif",
  "key19": "5hmSCwjy3qzyJ3615mSupudjpX28Ri9TgFL7DHwigU8qf9jUqgHriumRp8UD8BMpEgxQpeQKHGDrDQjXZrFbLXfW",
  "key20": "3mmGuMB5sEGvMZWzjgVGYdL5GrA7uyRJdt6Ap6UEMEbRy3mDhWEV7z6JartxrCJUA8FChHqhtKxDELmvXAiwMxFv",
  "key21": "52L6Hh7oVgoJiyrYqwW9qMWMQiQpQsWAdWzLumX7QmR7tksuJVUjVb5GBuaB8SFcCb1xgoA3qpLh4BuiHp5nNkbi",
  "key22": "2AmNc8XTaSEiEHdR3X77GtmHy3Goh1g7phKdo6AVxNpb4WcaxTjBXe687EbUdvU4zZ87U1QSn51mEBbFmAxzYkca",
  "key23": "2w7XpLRNcVfwESjyVL6uH44McYtGQRzmWQpRxYeb5eU5m1xh4NtMRy2hLBSLx6bJzytaMXg9AaLvCMGFjCKyiGLr",
  "key24": "26BPyTwRe7xxYYvb9fLWm747d4BcDCrisRcmgBEuraprSgJFaoqjWVtQGmPz4MWEZVc1ZnJ7Fn7UmL46abigzNSV",
  "key25": "2cJ3eU8VzfggrrWUzvw149aX81naAXDWDWouohoeiGPAenpCwMQjP4r3ADZKegH7a3QXZvq9j3obBMJzibQMsAuC",
  "key26": "4B7Ph6WWAzLE8UqhoKPDxqDyVaVaW1nicQdtNMxFkyEHMNBLm1HTnmAoQruTW3YYGDefa1Hu7bBrx4QG99TNFieT",
  "key27": "633BUp7vwZ9MXumkVDbw7RnYZjipk2jrh166YhtmvkmWYXsZJFXTLpYty3eiZZJEABGGivAVEXQpxGUw8fbHZoB1",
  "key28": "4yHj8D64X7xeEr5hy6PF8p3pEochQKknB5UTsWEGyYeJmYMKsvMsfLhkVxFewugMgVWhkX62ZEeAS4bXZMGC2ErY",
  "key29": "2ivaJPfjH2wh1hxEre6Gxg9BHJVyAn4A43vUsxDEV3XE4avy4u9k1ynwJ9UizMiNscPZPi9XKShyXw6HhTW7Rt1v",
  "key30": "2M34YUcwmwKyxVcPXk66VCKUp5EBmwL4HQhuU1Ch5EyyRXeY4r7dgmnwRqx7SmLJTJu2yCfK81mXvQurJmqVdTwh",
  "key31": "4wXsF6iyqtoU6iSe5so525TW8rU4yDgbCWXqH7tSSZCg9QNiFoweN4tqoxicz3mfeyYSk2JVBfEvSL2CiRxGEmCB",
  "key32": "5CneXckpMCtjmAUY9HyBmk7gUeHw4VufRtwgNZZHcDqDNynCfcg9dV1tu4gkvmNsNVvEtSoQziuVQ9e67zZMpoQM",
  "key33": "VveoJPALQNV4gaGyQiWZgrVapSiFqhXgueGbax55ZtWCt5Ecaf8yfMriaU8C8HtFRSpfChoGDYiKR4D5FhbkTwr",
  "key34": "37PMCE4Y4VTS8ietjDYMqMecRQDTnKQDHfebs3eoyJsanNcpXskfKc7Yj43Pn3h2AhmqAz6K8DSNJagkQ7FH6qyc",
  "key35": "2bdAkbHRLGoDCVcrhN1VwjNt3tuN1gJygf17zFWwjxKXjBjMRAB9iXGkpcqUYWtxtdpFTQbZu4ym6TexgSeZDyBh"
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
