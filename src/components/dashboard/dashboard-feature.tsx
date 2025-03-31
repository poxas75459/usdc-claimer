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
    "5HkpnvzyJ7LMS9KwfkNDcjXncmvKvEdFVxhhqCYTPvBehsEh4LDMhzu3TrNZfoDKSKikacLqNH1JfWuKBfc8y6Kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tKq3DqsLGCXzcRagB1rekXuKojct7ouLhGaVf4sntLB9ZUnHACuEuLKaJKLNra5ERvthVnq95Qn7DwSU5xuG9o9",
  "key1": "YFZ9h6D4aNatneJwBREgJKtWvf1xmEdKggLpNMBDMH385ZUqv3RRhK2UkMc9PYdAtMRiwGXzQ5XhgvuuFR3gbcP",
  "key2": "3UeP3fpMAdLhyMxrBMVND3bgVfTgTTb41mrrQ8bdSWcYeswiZDdj5YL2ciQ3ytSdXXSW7NvXx5BxBgHizsiLexB9",
  "key3": "3medyzsKXuix1WqWFzfhWDnknocm482pBLetUxWT2XNmTeCZy7derjj9DeDv75wjhJzkPJavZmsxRYxW7xcqXVgY",
  "key4": "U5m4DXPiKzN9VFRte7RiRZbT4TgabWJuGzZmoVGASiBDMQJrp9eqoSAVK6yqkhYBUXsEg2idK6LofMd4XAeWixF",
  "key5": "3AQthKP62j1oTjvzZ58khRfXdDks5Nbb2TJtVMzy2qhtCkLKjkEY137QaPrC5cVUw4imeCTCmVPgwoZW8nJHthLp",
  "key6": "33WJQDUQX8pMQ9oVDbJLfwN7EaYjZwkCggw2XkGgsyVeL8ZEzxVWePfwYKC1mJG72CKVc6uNWQCNkn7ycGRTVVRF",
  "key7": "3oKBie8kNwWaPwBcETHh2VgQo97PAtEGwKTaWsvxvKE9B34ziv1wn2Zq4eze72wtkNucv8GLnSv1kFXJYBUdoYEo",
  "key8": "44zmHy3YJ49cjEYrm4qaZvYCJB71n2LzBtX615H6nEtjnFtoie9Xg8LqCDyQYcd67FLoXUx7Fu3jpuWPQSiXENqs",
  "key9": "4hTrE4EwM8K4x866efvKjAnXQhw7h7qvE3kLJxrpJoHxvqBuNUhtBKfEJF5NrpuB5Rx9DZu3zCBq2YUaGoxwHLqA",
  "key10": "qpoLPG3V7twoviJPsDaM9NVLEQSNFXuEeGJkxXHZW1aDf3RcZwKZ9MHokhWugGYvctxxdb3WVqwAWauNLSG2SwX",
  "key11": "YxFDRnEW9YZQfkcYuoCtKpH7ub4XwXtREhvWCKccyYmVkWGwQBcdLkxRe13ArkYxsrxprudRh73TgmnDytg1eSR",
  "key12": "4my4gTsCXx11ahQPJbYoR5GpmSmewxsXBDZNnUMBNwYVuFfyPAmgMMMoe5ykvRbAohoubFYz9xNGZFzLCTKoExBz",
  "key13": "3XtgHTs5ycDBvX2pAwu2gNj9cDkThNsAmgc8vUYs6ekr8ehixPMpzCvHwoX6L6fs8pDfsRGWdMo9TizNwHEZtTvg",
  "key14": "5JqukS6JNaTkVqbUfAXbkpzyyikvfs2iqwHmQSTBpW6oacnf8GwGZW9kezDHmcKZPMrdt5LnLepDXBYu9ApEE6F6",
  "key15": "3kRpFfXWsv7QoFsCXEnCNdGBd7UcUFFpmwqMNeJCenmbX9uCGt9v5z6kEfdtKMYWCodngCZs4wBh9KHdW27x6Fzd",
  "key16": "3KLTzJ3pcuqAZZpeP9fQs1FnkxZP7sw2EnhjcVBAtEjRnQRxCBrwsYUSKA8pwE2yXMXG2ywRcdskfqwm97KeCpKZ",
  "key17": "2M753MRPJk9TicFfeMeR2ssUimcLnkBVQUQypErRq1gYdnUEDAYvav6HbFtiUCa8UW3vAd1JEEs1XtqT1A4so3FT",
  "key18": "4KRsAXhykbcDMoVkVnoBq4sgnwDYeWTaG59HcNvYjBCEVioCwQLQyx9Ykjgs4ThFue2V5aPxeFiip9AEz84WdKYW",
  "key19": "3EgM5Dy28bvCRHTK6GZPGWY4j2T3wsr6hnHpuoq5ZfkUg1BNxUX7pqbJYcSeCAiHvt5UfmeJBErS6GZ2jX7Szaxb",
  "key20": "3ZQR4gq4fRBWL5iNqgCTAAN8E6sCVk3FVEqNHq1f9g3NUpvnU7PjZgYGqMymG8NJhJfUGreQUpNpbNi7ZR461Mnt",
  "key21": "3yGdNz78hMUHkGHzxdgmfiKE1bzhscbWGXhhJeA45cKv8GxjMdGUd9EgtbfmRxesMQgc8ThG59Z67HkTXNwQeboV",
  "key22": "4E8Xjur7qhhNnGjQVWWaWzUag7ezjiCw1Tcne67MLjDNN4tXoKMBiMXy78ziwCJ4RcHA6Wd1x3ppbU1LDwN4KAvL",
  "key23": "2yzqWwyrVhe2Fer8FWP6Foj9ke1FEoUzSMcsxwotbHucSMrmXv6cwzqFHMGsXLzYW26yAWKK4iNR8pijFrrunNQ7",
  "key24": "eCF5Vei9fzA1uh87PFz7Y9wjD8M5jFBHUNsknaPoGRpeMmuzRyQTJm5K5qNCFhvEYNgyEJJ6mpkjWdGKkLqN4L3",
  "key25": "4kDF51w1EtgPtPiDZydXGukXGHusw71Uu8RamCEDm6M6UAidZHsq6eHEu2j67NFoZ1AowVjH3JSaDUQYaiMU1kJa",
  "key26": "4pkggCqJhrj9YqNNBKXDXyrnDKJvBTeXpejWKdXeUV9WkCj3WX1BxDxyfYp6cFdNexTgVdQnRnStPgJPm1bppQbW",
  "key27": "3Tg5GWENKgxbHNcoJDXtPn3eg2FCLeZAPyWRvcQqDG9YwL5RhJPxNeBFJayz4CjekXQtHTzU2YxCjFZujH4dMi6N",
  "key28": "wKnVAvVvU7w6YLbTpBYrD7iAs95wYPhWsNn4CsapqfDr84DT7qYk6P8jWN9yodhpKjpYZ8PTPjWy4FwdvBNPcQu",
  "key29": "2k9zWvGPJPbE7NMXf28vWutR1hYBdt52CrqQmnzanfpNdttAqnM38ErpresZRiyjedfwRWxoJiJiTzphKNa9LyfF",
  "key30": "2VXB7prN6w9Ze59oqca2yGKGJ4BoXcjLHy6Aw4ztRFCoKDU1RbjGwMh2WPZpAXFkMdricmUNzfkYTkT1N2rcu3hK",
  "key31": "33yyxAr3gsqpwB7cqr3k6Z6PbsXNDmGWLMCeB9jBW6hxTZy8GZW261526jygswQCKmLM7Ga43sg9uucujumbNPp3",
  "key32": "JA4ia8FpkRj6hu3v8uLTz5cjS5yMU5VKoB7LSwPZ71tC9aJG9Grr3VgqyyrehioTF8UWziLu4VYWc84pXpkEsR7",
  "key33": "4nLWUEzgaqDf5BhsL7FYLpFdpk241AKCaHTfbzkQZtj3VBHWNNBCR6HZEZmT13UCQfg7KvrLk9NNdkgvbtJa1AuC",
  "key34": "3kuvGGh7BL5A8rXd4h9c3DQ5DCRcNdxDujWR5nfFc871nJ31fmJcgVvMNiwUTRVHDaa3cqh5pV81a3CNLu5cFVty",
  "key35": "4eYeySFo1zxcxZHygcSPWKfMNjgLozSzUGi5daoYUA529iyfqXqZRxqwuUSgPbHYSRebUN71tovACxjdagKmPhnC",
  "key36": "43YeDBajuNXegAMCPinjdrodnHi5vn46daZ1Qysoe1DDfBUZ3diDLV14dRj1U8f6Kn38enmxCiC8XjaXbdxhvvgV",
  "key37": "4R9wYzjbfLAMgpn6fW9CQamUnXnbtpcuu2KbNey4WLFSgFseREizKtCgzQFeQMfoPZN5LG4mkmrxKBu7XwLTMoF2",
  "key38": "5B3qh1LiQJwNoZCii9peMxg9EZtULYeNz4EpVkLdXqwvtr6tsQKfND28qKAu6t1pQiYJ6QHnw5DVc6FVV71pwnDi",
  "key39": "23vFmfGz3mLQSSSsTjekN9ymc1Qad1AKaSrG4dLeHB5z3ns9ZGs3Fqvv2LZEWuGUQynxGSQHAbu2xUwmybPHgLr1",
  "key40": "gXuSAw7CZyFJ7YLM6uEXK3GaKamZTndec1KNNkxRRuRUMbVFBnSAjJibhrtsB3XXaUe4TKPHq8aJZPEsPNpwaCm",
  "key41": "637vZkLzY9ML6HpL7o1rxG1PikkjKn23d1yoS293AEe85UNFCx3Y8sTxPoND1dsEFZdoc1Lr53Qh66Rbi7C7RhsZ",
  "key42": "3dEkmWEa1nhzkTVvQsZyBSgjYquGwuGxeX1V9V8tqPrK72FfJLipYj8c9FBecqRCrv6QKBANQLwTz28YB32oG5T4",
  "key43": "HwBbTxuvZ4FPDimKmuypZNEdCzxHsuUE2JR9NTPmPiRfS22YZsjoH2Bb4H35Q3uPxWCBeQXFDMF64ZSGc7Ru2tY",
  "key44": "2AEch9s6k4Yq3Fi9uQmCdLC5yKwBPTei5P14hmjHjcDeTSszh67GLHJ6Eirse54gAJ4ji195nbaX6GFjqyeRmVqv",
  "key45": "23vBXYBVZifnKFaBNEWzoUL7hhsRo4EHwfSz9E6Q4sTRUwbb4XYUP7ppgDYYs4jv8tzKrhDRGYFA3b33vMziR5Nf",
  "key46": "4MvGC2NqKSi5feM8gSauQgbZwuBixVnNoPWsejvqzNhKxjKGXGmhsg3qqqpEgd9LCiSxvdK3aRZFB8o4yiqPzdfQ",
  "key47": "2HhjVY9c3iqXHXBMxLVmouMjzEtpCEJuMPz9Lb6syJPaQSXcU1T6i2wsFGj1QyjdsH11QqK5RMyrEwGbGnNNsQUc",
  "key48": "4omFotpBDAgAYPWzptt8LRJmtjTi5m569cDLZ2AoVkrPsRTMMxd6tydYQkxb9VjKASj7bPgU7C9kamSqakKxWDb6",
  "key49": "5ZVzDf13HCf7RDiq9FqCQnwqsKTR3wtRDFv1XPGQ8bwEkU5pWExTmS7hMZ4n4JC2DZLSUSqxDiJptF3ecrqHZA3g"
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
