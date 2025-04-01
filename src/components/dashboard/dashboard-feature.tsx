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
    "3BxR6estJngQqDDMJDq7oi6LPBoef4k3f7W3gwmD8jtTjptpTN5Fm714nVpRiSwSS6vV7A1reg8zcVFNwbcTckfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q2dCvBD9mDSSW7dCBg8F9pFpTbLiGVu3qPjAJtqxk7xL7iTemHkW3gp6jvwgc17ovj2UPF3EKeRQkoy38ziqQax",
  "key1": "CGYpm11ZAzY3MiuyJ2GdX2CbE5EmDsXPxQqayDEjVhjnAF8bj1oe6yHxA3hRGytKrSApU8WAq4kRx4kM9LhPoTR",
  "key2": "M5A4x43i3F7r4cCuMufPxwskZjJwxNpNmfWrRAMn5RG2tMq1GV5UAv2WR1zpyTSamYuHxLaMSJvy8LB6fqHhw7E",
  "key3": "2QjkrKygGfKvkynFF3Fd4e14UvB9EQWpnntUQxuh3Z9aDnV5NFJ8NAbteceaDTtaRQJReaECrJ65XvZEYvVoaV7Y",
  "key4": "65Srce263ZFc8yAoRmkSW3JymtznkcJLwpKcq2YyWkbm5GfQq9Bbqq7wyjVHcY2CgpSqivXE2vkbxphyeYn15hNC",
  "key5": "2VrYR5g3bvyVkmxxHSGPGXSrFpYjgVg6erAsaypZfJsTGTNg1p8t6X2VACVNUemZCA1j47zWqiU21gGzbAzMuvXA",
  "key6": "491sxZ8CVRPwu53n5CxJ58oaGQE4JwhdPWQ8i7S7RRJ2ES4juD7mpDvTdhMuNNx9EKAudDqDwsQLEpkzSLufTYky",
  "key7": "LBAzVPwqrjGQRdRnd8F3idcBqjDTfuiJX7pqx5aEm1XrR7Ez8n9uMCcigJwWY9tCv66TWaqdnwGVrjARDLwC9ah",
  "key8": "skMXMay7ZzgB42WAvuZ5EsHWsiUvstDuzALRM5TNN3jc5njVdanQPTRe81Vf4K2yYtWEHLpUtMwTi3G3YF9oABp",
  "key9": "5VJFMfPjaQ3NnvGCNWQm3iPfBV2yFoCNDMoEWe17DNXPjPh9vCw2bk7yp4CGX89y7S1c1UkVbzSMxVHrWG6gu3bA",
  "key10": "4WhN6SpMHuVD168WonEYAt9w5FFzrTnDuoh84qbyyFEitrjdYFZDCrUpSsMZLyxRiQaCeMaJziZEJvSXsBHcdR9Q",
  "key11": "5opscD1e6JCSE6fK8AFH5A18JCKUcdEekmMfpRrCNESb8D8jZhoiD8MPBFZ9vUQixYLiPkSdEWZazPVqhXR5Ea1d",
  "key12": "3bagQC5JYn8U9NxDF3vtuWJ1b9zF5vX6nPavNexMR93qD2NNW1HFsDeArK8CizgJ7YKTruPfDAyfyWFzcsrAj7xB",
  "key13": "2RfHsAjBpQK2q9b6NWdBLJNq2hW1i8ttE19fzKNRtczU67e782ML8SznnDWBGDJFeyarTf7juwRjMHxp2rQFVLXY",
  "key14": "2ok6AEfAK772CYT9fpixTaxxQeTwa3B6sJxEpnNbS5XcQUbzZMpZcUrqbJWC6iamjCXDuZ7onga6jrhL6E7NAtBH",
  "key15": "67pTJPyUdYGq6KsK95HwUF7yT4y8cthcURm3i8zXjSj2WefeVyudwHwCafaHPAqoxgM1zAADmSNCyQurWUXpj8LU",
  "key16": "3UBeDeA35JBjbQRkV88uNErkSarGSGFXxf6nner3mvu5zEMHsEjk2mCVgpRs4UevCinnvxpmqn627bQhsXJJR7Hr",
  "key17": "o7mceVvGkuJGUGcc8VKcZ3FkMwSfv3ubo4qNid4pi1qpwSgkHcZPaKQ6TUWDqSXBGQVYTypVZiXXre7kw4H5Hc8",
  "key18": "FP2Qo7KSgRwGXiDgveMDBNFAhiAMMNNdZ6TFAYTHzazAHh9APtFqkQrAWKKCiGD2hTeRGPPTmxYYEVY6qa9JFPU",
  "key19": "5Wszd1egZZRRyhfGUhp2qusqXTUX8nojFT6smgDTtx26d1BeruBchojRXZyrbfEc6qQYn4s1bqvUFi6PCm5jkHe6",
  "key20": "5b3Uzqr3EHtt9xdwSsoLVwiYxvx97BAzNibeNqUtj96RRMZ8H47RtiEVk85Kptw7aqrc1rV5pVUwLES2sXmsrb5D",
  "key21": "3pybPhoQ1Eb9AR2hYGa8QRfGCvYCik54jWmXVyzPEg6L47UtpFi875PRtGLMtYMFL1VzWNMH1JytzwEHMx6wNP4w",
  "key22": "53ZxVNUYVrvRtu9f2NKLc99GQF4HHVD3eXsH6uATGnsjUYbSKM2MYRB9UYRvkHNsZtkjooqijUJZ6D9jKdadyLRM",
  "key23": "cUCiH5UDfBSHZnQ1XMYhF4XEu1hkmaizpcDxNz2wsK8oDs5z9CTRUF4uLULpYnTUu1XcqrmYZxPgZAqBHJJu3Qz",
  "key24": "4nU4V5RbK6BLhinXT1SLCf9KerDZHWomKJe6RxxcaRttKVL19dXna2cUXLdZQ36wgW5tn817wVNjwraWNedqmA4L",
  "key25": "241W2LVyCZfy66MVvmn7wzTfm7vWq9RTQMWR4rweHVwNWQgYz5pSH1qUgXwr1qFTzrh1wysp2pC4jYfxX51Ccakp",
  "key26": "5Qic36dUAxEn2zda7DUxpohRxDzskAh7DhBDAk7nrdKkREQ97jkjQGE2mJ9RtPFJPm8sC1AAG42WGbNDyqv85QdZ",
  "key27": "4UxMnsyRfvmp4LmUgM93ir3Hi3M6Pdr6QqPxzPpB2Y6YK7NA6R3PEUaZ4oT4a8twztNB142eHM1tJTcyrWkbYthF",
  "key28": "3KGKhLDNNy7yrk67tkU9x9kSTnPtFURoLT41fn8H8XFQmFFFLuiiiojbEJznzQZwhx3STrcmpt164kKYDpC8CWhi",
  "key29": "38BRGMhRm9crfCkxXHpexQQRSHE34HgpczHA889RhhpYHytC96Pic6V6aXgKuhv29v8DKZPDCM4mNdrTQxFe6uR7",
  "key30": "2VGJdWjYRLL6d757NHvX1ZCKKXtUnxUH3bs4ATjMjnu38vddch6aaeYbQSo8BnmAx8Ntt1QYYUNK3voPUzEYqQtX",
  "key31": "5DKM2YSB4WJfZAmT14C5oY42w2JGuvJUgrUrAqhkeZwDG2h6pabRgeqXYRaZiBRR1AmrTb9smNSxoyB9Fav4KS78",
  "key32": "2eNK8UguHVsPy4XRiWChGarJ1x72uDhEeRmKXrRMqUivFXQeY6gM9a8Wewo6U3Gzcaao99ZcZJgCNxwfBEHvjmFF",
  "key33": "3xuQoXfwzKnjGRxkW2zF9sBWVmxa5aXyWgGyL9GJD7NkzcrazB3wZFqKX3tbGYpVdat9LDQRB3ncWtvAgRx6UpCy",
  "key34": "3JuNyGbDXC2Uj4EcVaxP79chkuqXx7DYqJSD6rkxPw7f9LVvtNm81vgEdcxt86c8nNeLWsX7CQXE52jYjeuaF4UN",
  "key35": "3cXHaSg381vxbTxk9pwZ8ztYekQpdy9655Mkev2YoxtsmztEJppfULQg1mWRbNZbDpQ9cLExAGbWf4LXBnd1WsRF",
  "key36": "C1jQQy9D4BXqYG72ceJ6JKYge2imfYE3Eem4ZJTwS8zMZTwJGxPNhtYkWGNa4mKUeAmfAiwveuufXLMsHyM1BD7"
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
