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
    "BapN84BfGDKS8sqctgHjKzUHV56zCE9AH87nJnPAdf5MfxBEmkFCbC96RsAkMpBVDYSVKrjPmFDVkyTZ2CkhhBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jKXssfAaxMJQKRJVVgvSCjEKu3ZVwSs9jQm3g5cdXPrRUTAGPSUoJvxp9884g6vZTem7inm9VZ6fjpFR8itpSFW",
  "key1": "53U1uxD4r39PnbwcEVkWL5yruPCQTAYEYmtACgPUp64J118SgrbySKxhyHdaRpC8s1R4JsV34PojV246UfaHVVxX",
  "key2": "4zMZ589Bsss4GYWCoAxduLwY588odmhEgEgikndQ7J6eEpY3ZJpnDWwQ7NT4sS8TeSviRjK9fCziy452CKugxffC",
  "key3": "3T8psEqX7T5NvjWpR9zWXofbBzBbdJs1ZBjH78EgXDzkhJmfzXjHLJZ8DqTKwHDtYdydjLM8HaPKeECndc8Lx3be",
  "key4": "2SdP7ZDfYxmVVBDqe3gDN1gPEzvMRfMHtH2WXP2xUFBrxSmW6T56DCwRzTya37E4rDTubJ4RB1DbcXbJJL5c9FQ9",
  "key5": "22myt8D8r1xdWSn29GzwDdH4EZevbotXu96ZUix7JJwwpVWydWcTbqjQqPfBbmyybfDy4CgUS51Zd4kzzV81ehHK",
  "key6": "526biA7BP4LKR7yPz3YqQHCvAg8fqGTQsJb1vh6GKBiPLfKYVHi5tg52YmQtJbAibRaFBMWxesafBuBTx5v4QhvN",
  "key7": "3RVukVxbnnXjqcwRWnaHvEXdzUAMCvddxfDWPyA5nH5X1KYg4ACRfHwoHvnBFL8ZkNPVyhP7RUUhmrNWn13XCDGG",
  "key8": "4LrvbM62JQEzTcqHPDEyiqUNcCti7CMFC7MswULx3zLhQqizBJmzZowBSr9gsVZuhxaadj8aT2UPv1NSdawAD6qX",
  "key9": "3DNHL1x37RKMk44Vvi8kkoPRw7cgmAaUzFqpUYBRqjvHGt6EMM5eh8MTmwGzjd9KWqx1Qs5hVXiiNhk5AaTeCr7f",
  "key10": "4TyLbonQgHe1wHUstnguvep4HED6JETrZLkEgqWyW9e8VcaBhrDWuCgmzo4p9bwzhhz2VuxJjuFuaqyBuhq42t5Z",
  "key11": "32SFiHtoc9Ku81bNn7gLLkDWRAmQ98Uq4kigHgvvmrj9NhKomdjGytx5S2vkmXmxYbJEeSf1vevxcRRkfp3Z73By",
  "key12": "2oysHC13gi93tKPHgfZB4NVbNeznbyusLSRAsSTh9EvAmr9B5ydPnF6FKwzdTMvcMT7zy3ztAG9sJ1DW5k2pCLR4",
  "key13": "bYR4Cj5Rgnq7qSm7iKUeP9mxQVBBduRuLo3VZFmhM1TnYDTpyvB2hZktTWX3YEGdSzHKHsewhsnxARcQugN9kW9",
  "key14": "E94bwZqy2tpo3zQ4Tz6Vy3qF5nxpL1t3BimuvzGovwjija14HP8yPy5Tyh2k17DBcUwx7gX2BHTzHKzVRxruGPw",
  "key15": "3cRSruCmER6wBVAwHmzziaGtaMtyok6XxNLanqdojBCqZfcV5t3tcaWemXXwvwdmu8T7znCcHbwRNaE8jhbcfiR1",
  "key16": "5CUW1c3LrSyeKT3RiM6cNeUNAnXUEwGsBwK1WwnQSrfTrNFGCGmHyVtq7ZoN9LxABTF92qK3vGLpcUxNiUCgpFcc",
  "key17": "2scHTTvfEZHQQzT3vazQEEaX7KnYwUF964PnCaZzaVfC6hCKT2d5DHKsvisZPEoeF3XogazpmS73BnYYBLTenqdh",
  "key18": "66dDriB7QczqBrPviPh7Qn7LCKVPi8TepB33H33aNJshAvArShUDiUAW9MNW7stgiL5iPHwFdkb6h1EZqUZUbYnT",
  "key19": "5mBuVM3SGfQQmCotESVZ47ziaMaD9HGJYLu7rY7GXZKjyE26yakFdREQztvXMZA3C59iLhJbC3ZEheMM9XMpYk1h",
  "key20": "2wyygVduby7SayzYCHGndSFZczSXhvNSoC2BxoKYAcWoVMzxAtuQDHovEZ6uGm9uSCkLH81Xib36t77mahgtES5z",
  "key21": "3VhEoDfsYPEMV2SpQc7Zhe8KuMBPeNo3PryNR7UQpPEGhzotD7dQ6w9C4tvtPfU47i8nMmN1qhVWZ93wgybaa2KT",
  "key22": "2ReMZ2tiU2dHQkfHDiQqtSyQEU29Ya3CgyvgasYq8VtVHVKezy85a69qUHNfP1k9TYtjE5QGnjEpkaGZhScKYg9p",
  "key23": "pvEEtuL8tYtz9exBGCS2Y5LMLkkaKSeubjznkPFcpeGcyLZ5GvWffJMvnwgKPP85PD5eH4VoBBg82E2HMRFJHP3",
  "key24": "3hwJAHCrxK3seopLQPYhjeDNQT4HhFfCqa65MowA6h8uRGfyM23BzaoS2rbGEJxKDP4XLkKvjmGsg9JJAo5fqvU",
  "key25": "5TZzeCp8S54upuqMNFgjw8mnYbZMgVD7txjMGG3Qk7ghmKDhRjLJ1ngvWnsxCAQ5d1F3zGnrRgcofPrBe35GeiGu",
  "key26": "4h6iCsUR4zxPq9FPUxPhdaPvRRKhCn5wEKghW3S3e8apaX6BDpopeDq8TctfAG44KEbYvNYyQnWgqjkiLSM7L6wX",
  "key27": "2aLGukeoTCyP1h8hr4kkCP9msWo7iHpTg95Nq7pCkMQEw5pqxFMwefzGMfuaBwWt6V3ojPrRv9DWGZv55YRN1XmX",
  "key28": "3Pw2fbYS9umdhm6KAedh9jUjnc1hEJasUjkJe3c92KFZFn52WP84fLVSTjQ7t2bhuKFL9yo7LDLTq1TMveG3BtBi",
  "key29": "61QzmB4p1iuhmo5FxDETBnqvsqxqioDBhpWDqayD1QLNPkuUm3GWemmxuzCMFZZTpPgcc8mFXTXQnAUBHQ6MLBw5",
  "key30": "3RdkyuEw9g3siM3GLaLSitYeFQBCRqmojdHcdovvMieK11UrmocvpNiL5PhLv6KnfPsQmtbX5p2vcbu8gbGQ3q4P",
  "key31": "3VX8oUGgY9a2a6NEbvu8cduq54Ph5vZqJvTHke6xRhFphwiR5yFPuQYJ9tifCfCVQecYvtLfLYyaBaJYrNk21qPH",
  "key32": "2gPL1tQaNrxj4jNrwhCgzfBwUx1QBCuJzJXfLN8aYc3XW8YfEhPwAwDsgEe357UgKfZSoVb5gNkt9GZLgas6jSyM",
  "key33": "4MukhhBsPSF6B2jhDm1p6WJWLEVhoS7eGbpFfNUaZB35FukShfabb1HwY8JA1GNwhDknSi3bqUNPahxMSmY2QKME",
  "key34": "5t2yRoWvBhDjACYkpNQRLDjpuUp85hpBAnjoAMVhjgVhfsCouUJn9o5iJ7L6mjJC4ii4M7b99yJbXZbCci3KNcL5",
  "key35": "3Wgpwj7BojxuxXRKYrft8b6R9Ntc28VLHNMKjSdzn4KWyUzj57z7vXnPqqmyurRw6oHDdeeiNQr93gxJbcaknPvK",
  "key36": "4Huk4aBHhBHvSP3UYKhYoSQidcc9rGWqtFyBy3ugH4q53tdCz3x4bt5E9ZSQjZphc7XgM9dWfRA7BGLZjCiydh1P",
  "key37": "esi7KJX7DYXUSAJzryUfN68HncyunZrSgmi13U7daWWuSvfbLsYR4yGXeMDjHELU4mW4p5x98bJiFdwXrFaWi7o",
  "key38": "5iTEvYjsBgKx1kg42qdhFZwsRdfkSttMfJ23VpwYAymAK9zvBbwrbNyd4hAZH4FxyHsm1BKocbKCA66JBh13pyWM",
  "key39": "2USH9fUhtFUUcZ5DASLRTDJ6tGoPgaXp1Xz6yg2242fbNy8Xym99wU1MtxrgXPco51pbmCBb5LuqCD7e84nU9YJR",
  "key40": "44mpezUZs5prCUWckxkjGfT2JEAkuzMFDEyNRggo5gWQKRs24yxCnaJ8t3BNbvr17WCSFi9EdsYGQpTddD5CcEj8",
  "key41": "51biaZA6yBR9jTmKBvTbyDRT9HTFqmssiZbTNj3m5prpTDf7AV74ZH4fUKYGVPcz5djc4W5LymP4wAry1TQcqVXj",
  "key42": "TJQ6C4DEhtRq9mhgWmXHzE4ywnTUdAwjurstCop391EYhmgAyCDP4X2giv5vpHZhZhC6dZWfCaZYkgE4y7oqrvn",
  "key43": "2xQ1HJKu7TzVjACp8yQDw5nbWkCGCK6QJsk95p4wchyJsVoBve2YhZMmRCvRqvpTLuFxd46q9jyZw6bp86KdmyfN",
  "key44": "ukBCgDYgjRDySR9R5zN6cbVDz8fgkZwjMC86ZeDxeAYgRSyAgYLZfMmQivGaNkTGQxHcHML7TSGK93eVCyU21DB",
  "key45": "62GbCFvS3L2NWS2sMxFqe9C7Dg9A3NaQxkH35Yfzpk84FYCc4m7gUGssL58kDCX5THSHPDV877WRF6tyTWtX92Vy",
  "key46": "3jbY5B82Bkr8BDJYU5KoXkFc5pKgoz2xNUHnp3gnxRHVGYiWJXJzYoxHCv5vpWE55NKEhRaEY4xJqRmgX58tqKf1",
  "key47": "43K3ZFk9GgTY4w4Gpkpampg9aHpCz7BQgFkyvwqrndiDgdqwkEyXkWdjdBihCDce13f4wNqLXJQ11mpcSbtxTRPQ"
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
