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
    "23oz3oiQ4WQwukzHtvaWN3MV4hK3iSmJeU1Uc1q4B4dJBWB91wSLBZhcGHgkBMCcAysgdNZw717GZrDoEpqWunfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22cdK3VJpP1PD9usX3XeGgKZtaxdF6ibuAWUjmQQUDVbTKUJ6MUfX4aD1FcCRhBesWmnie4sho14pQpN3SyJFoTy",
  "key1": "3ghsc2qy1WdefNYaPTQ8Sovs1U35XFZM6AC4Ti3eh2f5ymrRkWV2Z4PGSYMWq2uSDuR73QdtXhgzwZdGGFfqKUFh",
  "key2": "5FvzE7mSjihxrzdBxUTJAusWQWeCMfzdRkjU3cgD2fW79sYNwE9y7XL2Qxfd4rQnis2F8QKQL7zxA245UGpeRPnK",
  "key3": "4GUppvKR4YFQfU4CJVESdkwFm5sju6VYBmapnLqNm7cnr5zB6iTP9oEpwMYNZfBMT6TQ41rzKvRwZA2E4VqphhNq",
  "key4": "5V2SRmJ1AB9DUrLduwrwRvEqEq93gfPYWQ14hqEDhJ3EUumPic7rPJwkJMSN38KhFADVbLL5km8urdTW7eebwi2u",
  "key5": "3JZFvpU4SipWKvpXpbQQZjnEEsJKdRP9PEW131MkZ6Nn5ix7qRtviBomfg1xR3chqyG5QWPAGoRqNoCcgdAifZzp",
  "key6": "4eQC2579Pb8pGpWzW9NELejDJK9EgKSh1vK1nnXtfanpyjAGvUDgGCcRxsnc59rDHCdPb5n1HEo4p1upBZZ3gw1S",
  "key7": "3jKS9XQPPW9MJamWbB9ZLCWvMa9yFWpJm5MkJuR5as36Up7iSWsXELA1EqnsuTB5zsCyFkhpHHPiP1WxAZw1RFjR",
  "key8": "Fin3d3UdcUQjgKenGJygtPTtUvsdr8g7jwP1VhFJV9nGmKFpZ3FeCRtPAvWKsounpw57qZn5TEPtHfuHNexzDRz",
  "key9": "4XUGvnw7X6cuDruDiSHhWCeWZaNiFnJiGDxmcX9XMKXkC5AxvCrpeZm5xpJhv9mzhL5EPgQoPrPdoCN7tgTHTGzk",
  "key10": "4scxqfUGvucPgk5s6nKW8et2qqy7L3wC4qcoE7hZhGLWNJTQGmUmA1JvL61opgVZPs4spzhFnW33Ezpt1WCXvq6y",
  "key11": "4XLw7yvtcN5CMcwgxt3RgSWKSdeod8Wdf6h9NArkxeouhjT1UYLXBr2J6ftiyXkxPTtxEszMkuZcj9tdZQHkhtfu",
  "key12": "5hmjUn1Kyb5RmN4BdJUE8ZwGqtNeQAZFUB963AtJtXdMgURGbYUUssbRgRrJqSj6ojxgZcEZEzNsYaJt767pfc9D",
  "key13": "48QjaTheFVVNgrsFQ99unStJRMM7CwkDa6GyWhSmLDrDFjexkizd2BEBfR2qeaUHU9ovrbYEvEX9iUw9urrkdTmJ",
  "key14": "59ZYH9FtHVP3JqnziedBL5mAPT2txzw9tdwuqYbtsUsjE6QNcsMCheic6S3Sr3nLC91bLPeL6CqzcpP5626Ccm9G",
  "key15": "rnZ6rq7T4VhGN9RbcRmmbYsEhiCEC52QXAPsuPQ6JfkXR156K38QJoa2Y8QzN8yfmLQydsjRCqLwfyxaNR3BesJ",
  "key16": "3Gz9kKRJL4o7Baup2aNyFbVwfAmeR6r71yVXTwe9GqcXdz1USmtpHjyxNhhForyzz7s3iWJnfvYoH3s7SWy3hAjb",
  "key17": "4EPjRfknbdNx9DFJPAjax994Ne4ffKvb1ijkwUosj4W5mKhbpPf2AWufQhsk5PGMUwDxDhb56hQATp2rXnSqVNdM",
  "key18": "4PfdSp3sp7VDjwfyamNkX4pMTSjQjdRVn2bNfN3LJTiv51QmzyjRxXQefYUTsfrw4R6fzrdMSS5ZwyGRyn77cPF2",
  "key19": "2UHJSQfHyEr6cR5U9682ec75TWbHTGEz1Mz5uJmq1y9BUstsGczT3vTeuAaVyh5hhLDdEJY4asKT3igDGkLWzdRv",
  "key20": "25PTR1tQoQ2ZqyCS66bxV1dCUPRprPWuf3YRACjQGsnUa1mN1CHsTT4aauVA7naomeVjHmcvRxAvuadhoP7hqRZW",
  "key21": "518J7ZA3wHwq8G9YpjLebSyzU65Wanj7BGo5CwqagMHQnHMn8jjtoG3kmxAse42rsygiCRLPNeLohzFgxKV1c1ku",
  "key22": "3kLwFLicijdqruACg2B1HJdRCxCC4Hx9T78HHxuKCScDUB5csjVYqA55baS5RuYgH9ofpAnuszjK1epXYJiS8iKL",
  "key23": "3iKzSrMQYXX7cmGRp73ErCW9mXTXFf31kmN5XrLTPkbj73mFKz3vUTAQe4a9waKWgw6U6LqPCrQFmBXVSYSgUep5",
  "key24": "4AH8XdTCoGhkDeqhVoF1KCAuz39rSWMFp2NWXA7sq8bRwABWCoG4hT9UGvXPM6S5r8gDuDgFe7q91tR4Fb3bWor7",
  "key25": "PJeezGytbaLY1r1iQ2t1YQC4kgmL8KmdAKLxNen9PhrbQTQz6FBCFUSezT3Qny3xrYCmVw9f7HgydqpY5EWvcxo",
  "key26": "4ZxTwauv2e5GW8zzjWt3hPophWZjsHF2t9G6PkRV1QPWoobnViRWfV5QRJDvZaor3RMxntVbSpfou9eMfbEQH8QL",
  "key27": "5bgVA976KXR8Exe2op9reu61rdG1Gykb4pZCWSCiCH6bDwuSqWZbSPqEkyHztZrBsWEFc8TaPDkk9afXSfgzXWxS",
  "key28": "2yFEbxdFNaj34M2VvaErjG8HcTWrXsQnrPjwhAf75DK7Uxzx8sy3JdwvRakCHyH6DczbGKjZjmmj9oyRNhbKnN8x",
  "key29": "fqKdjUoB1wgdrWdKqtV58z1gbYtyB4EVoqBnoZ8yrt14XkgaJTvnyQX6mz9DNmjTjzHNyy5ojcXKg9b76Xnrn9p",
  "key30": "3XKZm19jcyAsn7j7vKArs86ShjLckoshV8cft7MN2xhwcetAckZf1nyqCvM65rw86se2cMo9frmJy2KQZ9a1xLHB",
  "key31": "Sn3mw5hBoAGMrVQEekgJtYhXsa4Z1TG9BUEghFgRes4PqKnHA7G1bxxWbH6GYNSWEkv8qwqYfLMfuBqa6n8YUvf",
  "key32": "2F12GTXNQc9V7ZsufZQkS6fvEGXw9g8kf5i549NYpQQMmckMvWh12WzBhNuvE81xMBpzufsySpH6KhcPiDJNV4d",
  "key33": "2yfxmRvgmE1sEFBepyqDv5BnaSA3dFxEqtEQFL78Vfn7bbrcQR1Wp3jMdTv3NtvNYazkfZavYUg38SWnFjWCugEt",
  "key34": "b9jnuZFAHxucAGygpnicuqprfzRZvTAZFpCeuXdnBWNQ4Ldfom8UrJ4MNPvdeNzeLKuF2vGvreRqzd3h9jzRGA4",
  "key35": "4w7GoCNiBvs14bz11rhNAK4DPLQNpiT4rSZWudsNxdafEdZhhkvVrowLTPuq1vmv1uuVJaAU1JWGVXfHJ9k9Fb2y",
  "key36": "5jznkDEh9Nr2rRyTYa3ve2trtfusK1m46xAHQKYnAzRGa7xNqAd8P3bqYtJq3LHmkWMvv3T2TRbT1KKSC43NPFqH",
  "key37": "634YACDLiGMxfuRoLVznCTQ1hkqeWkwoUw8qtDw8whaNuRnZxCyCdVHvUGkZSQXU8qLrR8kZsJgqbLMuPTwkzoWU",
  "key38": "3S3e3NquVueVi4mifxuviBvmc6YxnGwBWWFrAFPgLzbt5zG5FvafGF7QYqrygtnxYLi3o6sd71mWFJjHcAaV2QGw",
  "key39": "2HdjSQGUd56yBbvEMHdtHpb1t678Qm2TAHAC4V2v5NiJxf9B8dNREe344Tm5ajNM6gWHitY2vwqx5smAbMTeyfv3",
  "key40": "5rhcJpMBysj5KXeToMpzaGRo52uReBrBXyx647zQMZ8mBzWsWj7Vm2CVFhJ5qur72KDD1nkStPpeLp2Zd91NXsg1",
  "key41": "4KpenPsYCBhtPkrHdEoS9sMEb6TFSNCuThvvpxyt2hkDHwvJqfeDfgFEyU1fmRRd11Vc9VqyPXiV1vqsyB3rSx3r",
  "key42": "3TuMuZyhQegMQXp7h44rz6iCCnnqdwJnNmDq44jpHcQLYjtBSYHREUZt3H62tkoBpWUbuvaxPGq5XPXGJPzKBqqa",
  "key43": "5rGCAYgQhgsitro2Ky4KeYneUL1mjCufuJXELDfTBuBv9GdVYvDbNcGhfo7Um4itRCZ1cTJTAHFRG4Jk1Q3kVAEb",
  "key44": "2j8RnYZUwjqyp5DZavmQhFeid2P6DEa6VdWQUypT1YUEtaVTPJU7xfugCUNCRHWevLv4cr1uuh6quj8Rwx6SgHKP",
  "key45": "5YvrP4Qnkra74b3RU8ytsgeUmfseSg2rRBQmEek5Prm5erv2AdhU9uq3szApgLNDMDqyKmPyuB8ZmTE3CPbFq4Wb",
  "key46": "3L3LuRuwyaXZtPk9Euy9E6xrTDTFL6QTFDxGp9mhuCzWMgBToE1Da8hSHoDwe9CXRHPcCDtGLBoQSGX78bDLdFsP",
  "key47": "5sskg4ZH9edPa7kWLbEVj6W467WTQrHQEsRzMCKjSvhyBoNJqEg2rkCXRgDpFWaSUozbgLn8VCumjC1zmCuL3wUC",
  "key48": "4guQ9TLkDLUbip8qWiQPrdHpDxvtsEdP56ub3mnMMuFfRWeXpj9DeryRA5QbUzFHpnh9pFUeMRPZUryhsf1Nzj3s"
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
