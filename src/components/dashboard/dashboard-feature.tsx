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
    "51PmKcat5hDi8xewr1NQaA4q4xjVtcSneJk2jBXH9MiHknMjKUebK5ZfazjtqnvNTvdZwXFxpxhGMpYoZtgoBA4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49uC2toy2frzUCwQXYt7bPSCkSM397krEqv7AZ8SXWahaHCnkPyYoMAosAmPjDLQjG5XCbAnGkUAsB7QhgJo3jfr",
  "key1": "zhTj7CM8MSewPtus8o7498wozHE93jASukMozQJhGLVXDtRP6wk1Y1QJt24cA6gCbET5xNYKTcz5KtQVFU4woe5",
  "key2": "HRp23VAa5YRbLJvb4tZuNWk4igqJNo51tHcS3L1f8KCvsSXpkZbgXq1THtUrANGrrBsF5y5tVtVbd9FkDaK3Chd",
  "key3": "3WthPRrAzvkev3Y2o75NSqHQ64BCoNrHFWK5jFBdfdCsw3GEDR8zuGwHSQreJBa6CNm1zCsmzG8NXTPJVpuhxpNN",
  "key4": "2mrYuzz7pcpCCpiFpERvaceUj1trfdTQ51qozHyHZmyzmNHbpds95WTVQKPzyNv8RQiARALf9DFFosCdLayDFjpw",
  "key5": "27xKTL89eTFCS8qgbACY5DZv66sBC5byfDe3pU6oozsHdRGNBdgwSUWWnoKsuviyHaHachr1qdDPm2z4wFih5rrQ",
  "key6": "3N8mv3RBtrGwe8somD74twavDoe9pYf3J3kcA74TcFav8qHxsEs9CTC8K4qAs6KBoCTa8u7W57RB1BFJ6PYSwFGL",
  "key7": "4qqnDb4G3FauMvzYv36zeUEYZCyUDZQ8JJkbS9uZe8HWAHbfBX7XboPDPStcuroYSoTay8RV2uckojoffr9svVs3",
  "key8": "WHc2Mwrr7We7TtcudQDT2MjLzBe8hHvQbu2fqKoZKwwrzr3FU254nnisg2hxpUQREbNQ83dagzjFk5tD32FqdjU",
  "key9": "31fZCLnHmCrNwdoSqwBy3jCWS9p2N3mUMpGUAPYrkckXcvokeX6UKecPkVNDpYh7ZCX6XJXPrRDCMqsr43s6aTKc",
  "key10": "xkgHxAxcTy6UjDu48utnVMA9DNasrEG6Cps65QmrgQWwDoCxCdm7M7pxsm4kavFk9G3Cc5XWxYTGYznLoG8JVet",
  "key11": "3nHyMrbQsb4RBySQBd1hyZ9teaTj9agwBwxhBpGWXrHEn7z3geY3kkS45MFBTwLf97kEUPA5pX5v7AD8Rsp7JHRQ",
  "key12": "XTbDiie9VwiuewkyLpZ178Vp8HxbPxqCtcYAXdxVqK75WvykwaDMeB7ZLUBDbvC6G99xjxam2duMsEMrxXt2a33",
  "key13": "feqp26R9rJkEZWz7ixrH2gXHTaKTFd96aJq7H2AfDKVuT1MH6665nXsrTJ39uR9eNTv2MxgrLH5KgLaH6rL7hto",
  "key14": "4BRShSYpihG1n93SHqs5rTVjhSmGw6Bf285fAQzXyTdUkphaUHdhAC6sHoXpLHVMVv9upoD49CG4DhXX2brmzfxM",
  "key15": "552ykLFVWbErWzphkEJXsRHfgdmtUiFNAaxEG2rAAwwmFcjuNNev745TmZ6qkFqoxwUZzDsBMytYuRTCeuPkL2hu",
  "key16": "2krFMMMAhSFvS9Z3L7H8mZecEZdifjV2pU7bgQm3zgzFRJkXsDUgDTHYNMMFssYV1sfBDNgPPEZu2rranvEU5Nsf",
  "key17": "5NXoSoozp1GyCZPARjTRJSZ3CdR8wzbLANymfWEdbLh2SEYJ5Xe2fdyxXJiLKzDmNTwP7CuuhBfs79it2WbjUWYP",
  "key18": "61yuFHmQ4ZLKrdtGk47uYmbWMWgbAzz3jPJ2RaYBFha2M9P96xr9yJLKrrUzy6CpvMrkhJnaG4tJpzdmStc6Z9wy",
  "key19": "4kAojoLEiK1EgtGhVkN4GWHm71p7sLz6x6JVapb5kfoaKM2A7MWw3mEGoo6Pgv86zHSC5X6jVj7JypS886dXwzo5",
  "key20": "4nRFcNte5iD33XQHfhkao2RQrDdyDvGzfSRo4uzow2HM7vPPZy3tEBCwysf6VW3A1C3eg1PZbkHsnSkQYKqCEzEF",
  "key21": "2P2BX2CeVNjGqEMHTMZNZpz2GUvydT9dr6FKhiZ3k3rcWjrmELGH3uoE5YWrSnkXJLWPoQkS3ov1biwgXLkuizqN",
  "key22": "3ENBnNLza6AH4STrwNXduHSGbhzgG8GedgwAfjx8uyePRFeR4XnV83TsiNNYTYxvWY24JsuwkNd3giMaDrhAGXXw",
  "key23": "2E3G5nihVHry7fPV1rYwd2F7sUXp7Xsw6qTjgHnLMXWT6teZoCwgzLwjV8zmnhjf67YuWq8NoVZqVoB54KdcE5NW",
  "key24": "vtHtyZqU6hMrWu2zPN3EYLN5hYUEtTtCbqSZc1RMM91oEQCRRRoWUGmP45TsrYxhA1G6GCs2nnd5sVgpLHUWkD2",
  "key25": "4ZVQ67EjjpMhxyrAtJ8FisZXW5PXVLQPs5a9QfpXAQdcEyK6BQYC5yY8JThbw762SRuXo1qbKefhbXzEYuDu3u4s",
  "key26": "2wjtioWt5ax94DheA3BZ9AamZ8Fwq81hFm5Bxtbd7CKpfS6Q4G17jRkiFfSksJTHdyLJPzkmT15SBvX7iaaKNbSN"
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
