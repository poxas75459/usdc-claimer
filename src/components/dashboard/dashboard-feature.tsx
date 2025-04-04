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
    "3Dmvfsg3mJjqy4hHcKqqPvqhSQ1hCR4WijJ5LMvfNRsio3jqu9T72TeAgaDmUXL9VN73q8nV7CKJFJWmstLw4Hz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vWyD22ScAWBxYgapqbXGwDx3z3QxnMBBDk7KrQYYsMiEwhjo1VCVvTH69wCEFpEHsNa8N7rfUuMQwNFBA1mnko9",
  "key1": "5L1qM9AdaX4kCJTx8rYAEGrrKhGb2SdFnapyYTPXzwnfEnEweigDxyFswftC8uiKdRCzimNGNTBXeHD9uxR8fdxY",
  "key2": "38zG9GyKt7yhKLmjW8ZroUg66jZGwB1ZZuBBRP4SXnMk18Yi5ZEB3PrugJg1LZhoc2rrT8BzbyQTzVQSt7wMUJrp",
  "key3": "43nfY3UMJ7Ri2iZRD2EXGH5ahfvrDqb88XNnYAqubWrEn9FACgd3PyAxhuKmZWZQ8AqqjG2iTV1xTWiiPwRrw6Wn",
  "key4": "f7rKEcDvkfE1qBM16MBHyYWtyYmksZswKDYTduEot9NpUDTXk9yMbpYwbjK8nVxUwR6xLyYwzVxsg3BVMmKzY7S",
  "key5": "3XU5iRvajHLk6zEzCsRkRVtRuVyEuHf57a3VMU6sp4H84ho7jnMSUYhJYPFfma2ggFJ24CYhiU1b17HM3EQ4RgK3",
  "key6": "4Xb3Dw52dEojLAQkkhS6oQSt8XqfiUJSyvoeKFosy1GJDefapHtWfzA66h417xms6RW76xnuAQxbLgi7btPLhgpo",
  "key7": "66fYnJxuhJiHtKSFgBxzSsopCaGyzkwC9bpKJT35WRDuyRPWJ5GW74HQzwnfV37R8vMxFsHYDVkHTpSQRbULmtif",
  "key8": "24SRQmAWBR5FfqRgs2fT1oANqpM6VcNo4T3mjSWxzm1uoZw1GnY58VouBKkimoAHUUhDL9kdNu5qwGBucX271vqj",
  "key9": "3i5bTDsq4k3b5Yp8xqjAHg92aRvCKmW2oAsjXojyfgQEhHaba9DwKqR68RMmLQBddhUAn7KY8bhCMYTTZDErXn66",
  "key10": "5aftKQUyAL5H5kxHYNLi7PgYn6H4wRVK6gKVWNg5yR9JQQxN7E6otrQpqJX7CccmzAEjuyBRJj9FmsJzx4TaLyF3",
  "key11": "2H3gtn5e1H5EdvUayx1J87gsUZczVnfUidpvAVXigRvLFA1bPVuvUeHDzsr17bzwQobPLF9DdphZxoXa8FTjht93",
  "key12": "5y1RdL22X5zQvcvwd6HjeVKKGoaPrX5qy6CH7W7VuxxGtCqP4888U794pTzk42yE2E9cQVgsiocqqCNvfyhZUbRd",
  "key13": "63Y9HtiocQLP4YawdrCMqnAGGP1kxP2YL7u1DdoMpiUdpqaigTxvxjZbVoG87DHRfzQRyNHfupboDUNkYT3EezHj",
  "key14": "4XbUUShCUpQPab4AwEnAYkL6dwZ61MQY48x3Qmj95bP3yNd9TMymh8izn6gatiDm8STyLDtuKL7nFinsy1vBh71p",
  "key15": "3zZ3vpogE38herKU7wMfqVgCruAWq32s7VTkrKjGy3RD9MND76Qu2jvtZ3bxtVXdPkT4NrhCFRGosqskofgGeSs6",
  "key16": "3se9AqMiNfQZNvDps9FypQ22E9KaTeqhMQHcEKuNn7B3NC6LaCDn3FV595qPxvtFnXa7deVo7wHtR5292NLjanW3",
  "key17": "2YPJqcj71sUzPziFqJSjhHcynLugySt6LXdjexf82FT5gThDebsfk6cr2jmfPC22xCfYbsnVnAhHod32hMTKHHKd",
  "key18": "2W8tztKJC5iX5JcDZXFZEM2aC8uArinYUKGAB6gt8Vvb4X55wvXnTLnvjqhEGqUTz87Keq6BjWSEmZQCfEHD2Hwe",
  "key19": "7DmA9KitTUrcQzst513sE6YRT1offfsrQmsn3NMRzJ88oGVzMAFaS8AwR3N358BwpEu7Wbs7KTbpB1tHTJ9hyqN",
  "key20": "5fXRGnU8yBkrnQCxkC8T7RL9ww5QSiFxBATMmRjtDGinKvAjTtjGmV7tXm2unJ5UyngtdAUJptjF7xCZmUsKyfEZ",
  "key21": "5PHynK1bhsPDxp9FKkseLEJezFZxBrLeNQv3mYxHTGWRSS2sjEMdXbxBATCt7zQYxSfkEKxQ4Mtm4cJDpXHRzApM",
  "key22": "37qAuxZ7xoQSQMoYB53eDTiaqMfxB9Qx1Xc7wU1gX6Hr22T4Zp2tqrp81x21c4fPwcntQv9nvkT7YwqHwfckZc86",
  "key23": "2yMCLmsub54Y3EUAz83qU3CMFM4aZeWnepHCNfrFQbVQ6dyjGrgzbjxFvTxSQc9REhQxfscN3v1henQnCq97rSkn",
  "key24": "3XV3MKAaLGgkPdVzMUwFn1KwpVXnfa4s6vDGLk68ftNqx2JpYYmA4x9vZvLmEbNv4b5kd4UzyYyqnoyPTFNsKRDZ",
  "key25": "TmS21s4nfuVxWDeAGuN6yZWMTSLEc8Le6gNSF6qfxFUCv4fcn5J7pVQCuPUWKNL6k9kvANGweAgkaDsKCSSHHbw",
  "key26": "3MAh7GA2N1LaMzmC4rjuFdXNGrWkBvdCcx8YuSv2WMDns32msRN3sKKN48n3ggDb3PRjuo4zbEqvTvGYjnm7kvkR",
  "key27": "4GjQu3rCoMfffhSYmneyaLeXuhPpSV16Maw6Ch9DH52cAZMB1Xe9EcxRtNfVxkHVesegstn9ySi3AR8XBEqHym1L",
  "key28": "4pDeNfaz1hNx2SuvucS8VHUt2NE8MD5tSVJ2N1CxqJ8hXVERQdYHR4sGRiqNqBY8CbjKfHxnjA5XtynZHUpFqQSq",
  "key29": "5dxz8bthxiNy4wwa4ZmtKx3Y29YfRjXTpXjTkHx73DkzKAko2sWQVS1yWXc4ZLaEigFgd3JLHhmr61EQWNZo3K4",
  "key30": "44yXeGddhLKnMJu9MYPjZFREk5gtKr2S3T4RHAGkSRH9tFinzzhB9yDN2wZJJ8xTju4EfumLpmWkrXRGUSdVAyZJ",
  "key31": "4qtfup1ZDy2qULARzbg4xmR3QQdhrhYDHtRPreCtjqmA6ALTcYRGqUBfwe1K6TASVZfBTgowiVUNXPpEGKXaG44v",
  "key32": "4oEBS5vxAqzq1NZxMgfHYF2hr3DfjkPq24NhuiZkbSzw8u8RJYAg4wokDuPAQKNZ9x4Y4k2e8g3HnBMLj35uTxB7",
  "key33": "3riXg6vpxx4vCEEmN4GZMgYM96NLKMuKsqMuCvcvyeyJWniHQxXth7GVpRewuWHCMPcuNT7YVwxWv2Hw4ZD8h2NP",
  "key34": "5yCQfhc4E1SfFuq9EHZgN21wM6FMuZBRuPFmDCLZgGU2BAyhi9DVSNdPbo8iUXBBna5Hx1x3SWqW9kg9HYP1ofx1",
  "key35": "22JjpocUqLMnPbZAuh5TcdWw4qxKBQFPoroxistQqoZkdJ1f6fKVWNwEX1h6oKMKH8bqAGPubLiEbRvKk7GavWit",
  "key36": "5vr8HUkPa6jVUNRoap129H2Fack39vUcJ3Q6LK3p5FxQav5us6Nbhktep2PvVgV5cnaN4DJJHBdrhTX3QjZohfL",
  "key37": "2vGCG13QRvRPCQvTT6rohXJyPr25XxTjr3ioKYxiNVMSb26M1Ak5w1HVX5Ycf3wFsVLfxxGrdvbFahoZYwp426QM",
  "key38": "whYTQwp1Tfk3YVMiRRi6hCwVy4FyBHgCrDvb8qSDFe5aMF69uJ9ruruLWb3Csd4egTABjAmmphxreePy8U7S1VN"
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
