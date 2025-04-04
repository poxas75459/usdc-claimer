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
    "3znZYoHdPGYNNkqa1fgbBvoF1Q3bT9oDwSG8BazRS11WGs9XyVNUR6y2p92HWASrcpr67Qg5B3RtsSJJB1zbo2Pi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BVx4z7W3zWXh8kFKEqroKLToTM7mwrg9buiKN2vWVwBtmfBW34xKGHB8JaWG1LwW3jfpBpgJyjBuYZspPGRQazP",
  "key1": "33Bu8NpJKRVkizszCDKbBzawYj7ZcN1ays322GtKJnBxS4y289xTnof251evAGfGvnTNcg2oYcxzvPjz17Jhzqjh",
  "key2": "JRSp6uEnm1y7sEHcfQknn3gNqKdqAqd2SWGgq1mqyys1hPvUgZ3MQAD3me6KGyb3QpzPJiJRiBMB6fmjYzsjn47",
  "key3": "2dZKEBjM5BMi3XRWR8aZ7hNakB258cPbqWAvDMjjw6VsYsKMg5vFWXPFk9Pi8vHRa7hBgyvX8cVSNQwCYMp9ZH5z",
  "key4": "tgP8kGgiDUtL1pJB4PA33Zfvm8s5L1Dx1yPUSnebY9bCwKxDFNUCfztkfon3NEsMMKxm4bjhBEP52tvD9PYSNu3",
  "key5": "Errdj5TL8Zf1QshBG1eKkD6Rqg5cLW19aiTYBepGxE63ur5z6oQtP41MRhKGFxtjRdtNzx8miw4w9hM2MwobeqB",
  "key6": "22RV3iWSpbNYVSxSYQxcLDgDSfoY77QDqRQ6kdGeXjStve3ubETZAu9CeBGAUPaxveYfQpwaYhtEVDjxXwfn5ayq",
  "key7": "3QVEHno2DTMqaDy7oFu39PaZVriB98jRzTn6UmzqwFYq2bwYTMinovFncux1qeGuzeXHpb27yshWwVz1nm8ZPVCZ",
  "key8": "5obWJKjpZ2mhYyGp2KKQEDWLucyEvPYbhgVG5DDJrpoNT28hZxPPozzbw4uNzM9zQKR9fPCtQzwmogQXpYMi5fnt",
  "key9": "3eJ1n3Qtz2fqbZ7jEQn7zj3qqFWCuwVXuf6djCojEvXDvKdjLU2z4nqZ4k5Bk3SPGJC6Kyoms8ZsEkLwSgTijHnD",
  "key10": "4UYqeXbKV2QJqjRBh6XYHiF1P1ixRHa3HsrFsmeuMXdzEK6MNzfKb9NXcnA2G1cXyLpjxts4xHXgLWuVQrzXKLm1",
  "key11": "2Nkpr2Lb37PEHsVmdkWDH25gRzCGgrkcwD7u7KXob5ZdWu7Qgrh9tbiqPzgaP18ETGtva7rxTEFWkd5g4Mo1Eych",
  "key12": "3yGC73GxhQGUgdyv25ugeL4Xy7LhSbo6befR5qzgtKLtbSaWkuvUVrg91a8HF6QZkaqdjVYNAsEmAArjwS4VxzB",
  "key13": "2KpYJVVQXCPdEf3f6rH3tY42fedADEr3igfhQvfe6LkacmXcrfeKd6dvsPWAzxEruR1UUPa2LgPxTRaezHmdqsNc",
  "key14": "2pC6TiNeHgLYis64yJaRzawAhNh7ZomowJQp8jmQWvHSgFaxiGW79XBY7cRsquWYaMPocZtwMkqMi2YNa3QRXbTV",
  "key15": "2iW52HRhdReuP8Sf3Jsxgn8K6YD59qpKjY47N6KovTnGuAQsBrRXdzXtCbNrmjTQg6o7eEbuNAVGbr6L7Np7sG7",
  "key16": "3LZRtnpkNAPjGw95BoMAoSyvQTpMSZod6iQAsQBD18bm4mYCjxmiVnP5sCdA4D3yhT4SE1DKoarHmUZcbhbyp4pL",
  "key17": "2aoaEsw4c3iSFyLxQEYpiZrZrGcPJaypFNkRk9YrKbHgvU9CdoE4n3Sjw1F4MHRccrnrZdj2j3J7LQFEyghmaFKt",
  "key18": "3Matnq8M4utWfhSt8HCp7XFGCiuPuqaXoZF9CrhvYWKPdRPjH6TeNJbj22JS7ybyhXAzMpxPm2y3zUXUrdj7H5Wa",
  "key19": "579y7dAfEh9DepTtwxSNXnPVhvJQjcdcs1qPxeHkzGw8TLi73NbDzYEEPaFmrdS6GhT2g6N3g74FhegNQTuTXSM4",
  "key20": "3sgU1cNHjwJTeNM73pSariMaZwik5AdiL9XdtbrdTFecvM92nf1ieswXYE37FWL1VbsKe2AuPf4AiPmJJtY6xDtY",
  "key21": "44DpAP48Pk9FCChFPdSNAe1da2ZWZ1hfVrSzfJj2GD7YcDmWjmkr1gYhW9BJKLPVnnRcBfY4C9w4gpQ6NUund7eH",
  "key22": "5cDV8j92BBL37CqRvMv7aN4rSoqjgg9j3uw8RFKiTJN1oKuZyrw3p1FdGVvJVvamimXVvXAs7SyWAaBMGjK8WkMq",
  "key23": "3SyqzRrATQVYxrHNBynK25Q9kZVcSqdanCJCD4XRF6f8f1oBrn34omxH7YTThUguKzsDggKHVhQsg6HmQ9HHe2ZP",
  "key24": "4JDwhgJG4yrPjrroEiVVSKSCFeQAZyk9LAQGYTLPtLtUoQsKWK9U8bFsydUSpynHw3HUPS3CTQxEAeavXswVCsHy",
  "key25": "4yLyCGkYrfg54xw1Brzj9DTAGFmggc5LCJXFQNEJeqEQ33BDhEoQeFmFHXm7hA7HfGtYJtjT8VYM1MUvUrPmdWzt",
  "key26": "3GZyLW6khojvMbUvYdvZdb1Km3EsdKimnN6j4U1Z1s3KeZhs6X3G7uV57Qqz49JpSNNvbHHeW3Mcc9srnPkCRPZp",
  "key27": "2mNiomvBfxRqpTzrSRx5sGYH2wwgwnwFhXofCSkMqzLVxR8eyyP86mVhoi6oWi14K6WPY53JuxmDddhCYcANVik8",
  "key28": "4eDi5zu3u7H5WoDPtJNLKEbW8ZGwxfBMWhFh6YXYL3Fqk5yG856xuWBbgAvXkEYn1hdxdfi9W5ujYLgvkU2knCFE",
  "key29": "2A1q8mqVbUhNDcVPFgXFf5htrDBGuZQDNr27z8uKC1z8viW7ojYsn5hQU2PBsyaMdeHLRRSm7nc7WhSgDAMYuM13",
  "key30": "4bg4QwnAffMtfbrVzaLNszUAup3rdkmRB1Pp6a4LBTBXBSJaQzFPDNmPV1UqfFf4YLyVYZngVpkLy6dfcg2emM81",
  "key31": "56Aeukv6dtvj4zXYMxJaRYBAuV9kLAResXwGQccGHxR99Xu9suhNuQraM7wgWnWHMLxV1iqabQk5ZeegPaHUiYj5",
  "key32": "2qyiBYBhH1zeeCobaK6yxWQG8Gw1vwHCBYrWa3wXaUFiueRFfjbZncKR8NgWioypqTxkzD4xMixb7B81ihy1XjiT",
  "key33": "2WiD4neSTZeE9bUUJyneVfNfBTEK2HstbHrKeCLiuJ9621Pz9oiLCjjvmLkBuNDBSpSgZvVmQzXkJGbKpCmp8xRG",
  "key34": "2LSMBxURduyJMSKr9vDMH9HT9i3niAupEMLXFAi7Pi6Y9BikHD86PgrawkgXZfLfMQ6sW6QXhwJKU8ars57euELq",
  "key35": "2qrrF2SgSfXsYHW15Hp5x1t7wCbb1xYzoASLPvuVVAdYv7oT2nFV53kUcBMov23zEFqh37yD7KjvzJnWgo79zHPN",
  "key36": "3r2FnuFDHPzpJZAfWWxdQtcprQeK7cFWbMYLpjXpYqx6XMhPfixCHTA5aZsPntCj6gC83jvTrWqKBE5Hd1aPAYTQ",
  "key37": "mQnmzYCgNoXGNA6bbGsVKc2SaRcFqwKn5An6sYPa5g3a23EXudxVhCKEdpMDy6gZy8Fmgfid5YyBa2gWgTUMnP8",
  "key38": "Js8c7s3X8xqxxt6JffiQN8Cb5vcRhPfL86cAYHGdAyACS4cjEo2AcypmSgaQ1gxdQzKdA1t3fFvSWbAZ8Vu3FcR",
  "key39": "3AdLnBuP6EdX13huywhGiygQcuvvVCQ2B9PmAGLtR6ik8mVZ6uReJZszVSrrMDkQYyz92JSgDyYWZ93s3SWJkH2Q",
  "key40": "2S5D44U2kfcE65GDjk34PMMV2C17CF6Q1LnjzAX5QeAkp49DbYjWJs8mjWhdcipkob5FoAWDAS8r43pEkigwHwit"
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
