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
    "51B8KFShDpefS77ioBATa7gJTkgiyKmAbcpBurxmg9ym4dGJkPe6UNJkhCcaNhnzhrADMdQR44jfwr5P576Pjs5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6w5U3tKQQ3hnvagg33PNkLpT9bnde9iStdyGKubayCozYUGRrC5aLQKRtk3ATzmBaA5JwvcjcsHc9QpY1MxKraJ",
  "key1": "3DWm6zfLwXSZ1TEU1KeqPwrxNwdZTmvDwcz9rsi2MpndrX9Z68aZRUmx4a4b1B39tJY3Q6fXzfnnhtU6ByHfYZs5",
  "key2": "5PgDrsY5Xwz8MWVz2m7QnZi7TSnxHpd3aQT5HLpHbmNBwZUxsiqwHBSyLHqCcEBBJbcue71y82bbGQq2EagTofpj",
  "key3": "5PrHnpemNMvQqcBtkMDQ5uiREfNZ2GDpZUkQSjFcHHXk8hWkKJm8kbFgja2Kvjd1muBQ79hEUDPYutXFcf81wVsi",
  "key4": "26kkq22tgK9TSHV3S469uMp39Ht86UYYxVxT9Bsm4JW36h7ummZY8xGCKcmAMY2fqDPb9zVHAxa6993bi1qXhUeo",
  "key5": "5iuq1tTAiPvXuow4AG8yrkX8JwE2yPfxjM8iHJycWt3u61HJPRt9wQQuH9GdvC7YX7h9DEWyUtYtTtVyixpSh16E",
  "key6": "2BxspFQTr8f9yU4AP9Td4d5EttpBrNp5prLhMB8yUg7ch772rH8tGR4kzSnUrBKpnL2iD1PewtyF9FwZAhGdhooY",
  "key7": "3tjeWCqu1ph3vjDNuaBDtxRL6SYa49aUX9unHTBuV3cR9UDjqo7sTs3ZyzvCw3kGAKRVS4wHYvoNvewKHrARppdJ",
  "key8": "5XkCR6pc5bx1RyWMY7dodcrQCVCYKxtRizbT6MUqnU64XiuZD1WiN83ULbmmCbMn5r3DTXHoQXMuqUxTNHmqmJuw",
  "key9": "4w1V1yog8wTogbo2R2ry4pKjPjk7PQ3dgu9Hav3ovMm3SxD832QFxNAbpbx1PraREriEQ344SnNF1BhgrA9LjHCy",
  "key10": "3k9gY6JU21CrJtCgBAyC7JFe6xzewrME1wgkVT97gBQXjRzzJAGfoCYBxWt8KavV1pLiuWBzxwFLbzpyXHgWcVDH",
  "key11": "5BrR3csj7ifnGQVRq67YziTY15cjXStxvVFsWECXAxj9zAWqwtXBNPwL8dzAzMJzR7FQ56Njwb7M2JXjnuVAiATr",
  "key12": "5X1FtpQnp8QQbtEH8BNBDNDQhLhqA1456eT2228o68h1YHbVmVnPN1dp8gmAod1MyWxTeWJN29eAi7N6JSzPvvDz",
  "key13": "ALyS3ZBZpwgQdwr8nkyxnkgirQBQhSjiMJ4DPZvVsgF2rfRme7y8L779o1e2jAoKdb56qAGs5FumD2vBEDqa7zm",
  "key14": "4jzDtLd3FnpP8MSRPYbT7E8R4cXuxBBEXGGpQN1h4iW9wJwuBEpwMcLQBUrWayyQfGWqj9mXwrxMikyeJNXeaUcV",
  "key15": "5jF12oLWykq2SAwd8meobCXar4Ce49gn4kbUdt38PQ6UZnnQRDKUubpkQwkzVpYXsWhK7p9mgjDHAbB8RcKkY4Y1",
  "key16": "3ki74cZ8CZZ9NpHd7RqbLbMdenDqWiXQcn6Kt9QwDDyuUW7v64wFxJuE3c2YawpoeH9V6Z6guRBHxktbLp2z9qMU",
  "key17": "5qDAf4ZMp2fMXuBvmz1uWWwJArtUK5nfhazHQrgS68irCTzo6Y3sN8rqfBazSmQQoe2drCH1JtHGjKZYU5f4Pg7z",
  "key18": "XkMNJCknPijjhg3TAFwTZfA5hZpQVcsGkzxHG29ypUbBJmGaNGi6k87quY9NKK2RkLg5D8kZEJUARGb8nSW2fT6",
  "key19": "eumdJ5PmnZaKmrTMAgztciZP3ym1At4mBFPNhTH3XAAG72uiH7sJ75fZ37eHoYsvXL4vQTxuzPVdo5BmfdFwBRJ",
  "key20": "2UnyvU3XVtH8qkixxD2HUmfQp9vMEQ6XTmW3ZQZz1rHtNbyzJ2YKi3WyFUwnrpKXVhMd67V3wprW8PSanJFcUJsy",
  "key21": "2KBaD9BTiY2tExVFaWvzKpKqpxqagTvfmVDAbitnjp9faNdKv6CUSYsqGcQr1rpWEm8hKuBf1cW7BygmbALfmTHe",
  "key22": "2uQ1w5r6fdGj489iBPrSG9aJnQU9DHY1m9gBKshRYbA2U1Q4ctuvRDNXfu6aAyf5dJu2fDCgtf8jUiDtrYiqBH89",
  "key23": "4uw6q9qwqYcYypCDqQveEJPHAyaGPUkXrayyVG88j3NhrDnr6LhSW2fHmWf3mb9eXFUpvv4hKTKgjpmC5Utsiahd",
  "key24": "ZF4FARQc9WU8gRcj2xKmR8K4g7NkzDaYSARmRrdRGFE67TF7d1CkXUUKaaeN86ZhHGA2GHyW3Szg2AwgqHpCCTW",
  "key25": "2QbwLg3tn9VTngtLjodu3fKd9EM5hWGxhJAJ44KNLfqwpwhgfUt2gxtWM7BpEjfWEMy9XZDyNfJBAtuwcVRwNU7p",
  "key26": "3DVSzvVkk3hXfKhtHkUDQ3DKrrjTrhRGd8KfgTzEjCiETcyCdN5FyT7cnuq22Aju1PQ8uVTpVR3u7qBv4qdZyb3w",
  "key27": "3F978QnK7coHxownqDLNT7dVvVoQPpy71M36vxewVxPrrKEbcNoxNfQLGtsxz9W8iTEkGsCNxPC8nNX8TFk6fyAB",
  "key28": "4enP1RP1uD2dWh82NdgABW6gaarW8srx4ZYLL9G436VpQ4myt7LcpjU8PWBxB5oaKijQzasfACspBA7Tcyys2LLV",
  "key29": "FhiPXcrFgMnninEcShPeX43iN8YR22H57XXRdJVUMU5rjafGHuat5mfShcjpmdcCt1h3x8nukQAfgkVJnDfZpec",
  "key30": "51kEg7Jik7X6pWAB2tWn1jp2LEuhMqQ7cFJuwzQaLzAXVYrWdPDkDFbfzF8gg1jLwkMRABUH2pwLBdkbtdDxbdSF",
  "key31": "4LfEc1wEo6ND6yvSRuttw8hbFbQjqpPQgQFiTbRKUf94Dq22wt5LBHhEJmAAGVjXN31TjQUm4YFwgnontxqELYnx",
  "key32": "fiXZN1UizN4DyDDhKyyA1bfJ91pCPxg39DfEZtaM6VD5n2R3Jf9fRQ4T2cvxeBkjxubukheoQtgwEqAo754GmWe",
  "key33": "3mBx2bg5YXRLHaCP9FPsq4s8MKtB9UpowH7qKNvAHLuE6nvTmvo4ZWb9sBmQkRKs9siFKkgZEkkCDn271cwgJz2h",
  "key34": "4LBmQudnuKPw59BArWcZ3sQcWERqC6Py6PzRJM2CBwCEgbqK2qrZ9MpEikKR7hkuj2Cb56K2AeEQjRvy4jKAeGEQ"
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
