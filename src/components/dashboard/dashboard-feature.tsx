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
    "e4B4o7DUg7gTuJcq9tGEUzcEeBoiUJu8gSPyRCyJWdxzQF6TnpddRN7HqncinwDHRYtcWkYSEMA9AX1Ch6SToMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HpGdpp8f4k1dyK29Co4qcXEsNR6jEAWxrRTbtBjdRfDi3zNtExRgbgRkWeW8PkDoM2or8fXq8Nxm2E72nYaVHhm",
  "key1": "2oongPJ6Lfr2XwL9ZH7jQHtVp689Yiw9KdESjer6EJ68J5fM2EsFGdLdwBrodiokBxVoorYyXXuGWsi4UDHYB5ga",
  "key2": "4TzcZiF4wDuW4fedELa7mWvh8D6JDcBviyWiZk5vwq377e1qtmcHUJGvuaKR7nnTfS3D6ND23fsnZ38ka5ogWZqj",
  "key3": "jWbTokdKUk24suBuFbSY6aSwW4WaF1QnuntuRxEpHcvKpU8oAm7es4Bae6Sb4kMmb2yCYAAB26QmApDkNPAHbew",
  "key4": "3taPhS8H4TJq9BZkJEH51FLvrMFeuQyWgpRs9M1V2E7qJUUbcMYx5ik8WPd1kz9vKyA5KVmaGvhm9gRPHzzP2RAd",
  "key5": "5L8rs1zwoY5kZh9mAUvKhV1XxDyogHxCtP4jifDSSUMvVowB9UET5FitLYa5Q5MgsQb1xhpky4gDcrox9L5gfzA9",
  "key6": "5w22YPWvFDsYDEpwLqzCfiCNy6xScGNy4EVAHJk8i9FY2BULRtigjaEMwHv5VLwSDJSNGKAqhgzuj4yCWgHJqUvB",
  "key7": "2fCccePRZDiNnEnbRSeAY54MvRZRPnnbFoNrdMbSFiXS98MUvHw39H3fbEsZGH1wT68qE2zsSC1G87idgWfxYxRY",
  "key8": "4gqXij68auvwsKLQeaJWYaJkD2rn67xkFtbbxfn8tBngCnUVH2NFbPvqPvdsRfUW7F1A4UUcNJoemS5uXho5Z61Y",
  "key9": "2uuMAy3ottPMe6Np5YawbZUNimMmjCv837tnb9MahjKiqq2onkU8sKpfT8BjaQAUSkWkDr2KWUMxQwvrFPfq6BBo",
  "key10": "4HmPVqjq6ETPfvn2nMxRQRhxTSEoRexkwhBC7ZgYDDw68zHFwUZEi4J5L67vHmCgtNffwFavDbWt6jWWQmRvHtRC",
  "key11": "64AKp9bY88gpVTZuUsooKSmwDcnHG3ELTqZvsUT5Pj7Pgt2qAEwsx3v6vNEVyUMkgqRFn356PQPCnJ2Uy6QoFvSe",
  "key12": "ymhoDwLib7CW4s3sx2MmmyTSYxnuMcUuLxbyYFZ2YtMgQ9LWwMGMQv2YYY5o36F7Se3MLui4JoL7AM5xjfsL63X",
  "key13": "42wB8XpYYAHmKciMnfc2Kxc1KwFGbFAB83SWq3h193mQLT54e5A9Li2YDi1givERVGqo62cHTiLSdjdQPkKM1hbW",
  "key14": "HvZfnHMd6HCvvEravGVpBNNG7ufM24WuNYw78n81xD2nDbS1XPfd4BAv6j49kxbn273MSNmMTMMEjT6xeVffEnY",
  "key15": "4kAUWi96ZDxFzSdQFvyNVvg4tD79QurWF8dj7sbq18oXb15EoPeuKv8YtUEU2ochdBYXaeUC8PpwFwSkyJc5AJpv",
  "key16": "3z5j36EbD9vwoS6bgPHQyVgnBZFtr6FNxNAbxm2sUkUzUHEJxs4e1F3WcUsWS2KbysNBSE43NjseDZ3CUdQMY9Xn",
  "key17": "3pKZyDFwP3TzZFMFXsXgTAqaCxW741oJ5wcPf6esMX7pFdVQpr3iRakGbScD8WiCLJk4HLjpeKF7bM4LQeR3miSo",
  "key18": "4iRgtEP3vyvvHER8NyDKj98na2zWX4SN1KpxdckHM37bFmF3iGhefcGyRqaMsKYPGyCtfxtRHzzdP8ezGaPge1yX",
  "key19": "4Xyatg8Dm75PHFDqvSydWJbM8HysRye43ZFbgccifqaG25ZEGGDTZfS1rLHc4FKVtCLTyC11yUFZLSn7gEk4cSSS",
  "key20": "2wWoSdt1nJEsU8Xt8Ln8fE6sAsEiWc25phCaBvVBLonLiJta5URBawAF28krchLp4BhBE3Zk51XxtcX5ryT6PRHN",
  "key21": "5xbWttcraxago531n1BEgypn8dXsu5Xwrv931BqG7KWRwmzcpzSPUwg42Jr4WbeApmDVyk7tUjyyvhdhc2pLbPKW",
  "key22": "3HzVeLdfKpMaiaEsWgdQjdN1WZjGKVuUdZLrKTVwjfZFsRGpE6UhtVZ3UroRhQySzjJfJojDLfxgP7hwQedksqJm",
  "key23": "4qjyfoPk5yNKRTUKvK5JZv1zEek1xtvc1xcR6xXTX6bGxAXWYUZcn6hXtY8Z4sVN9eZX4AgjYU7bW57XdxEcooYS",
  "key24": "pQeTpJpBzn9CSoeQuen1SFru3gmE1Km5ToigCq8QK6ZuVW4pJT9dn1Y3P6vNhRp7mLeK5THej2J3N4AH6XSqtyy",
  "key25": "2HD7fQjctLHTTuRZweicZPGudXB8fE8g9k2PZmJhnk2gWxtB5qXCA1oXXvSvdkEyz2NHRFsStQNjK6JP1AcFpDLW",
  "key26": "MrnddRLmZ1Kf2pEMXeAbH9rk7uDykTBRvuneGUqEdpuWbKJAd2oCT1HiFfqFkZywYkaMPbrzDyQGC2ugfuRtTso",
  "key27": "3cyLYxX7afjme8pobdmQqoAt5egcWZc89mD13UUwwJGof44Pb8fzXqzTTsuTTbcAfiHz6eD7XU2R1uiNLjrJ7UZL",
  "key28": "Z55dK6jace9Q3tXmBrYbg8m1zeV3cb9nvr7gUaU5RVX6HsPzfXhpekyMiRvjoj9Jp8UshosuoKLFCG3CQUt9a42",
  "key29": "59isSvFxehdjNAhgT1TYNJAbgCKFcz4H2c2PPnhUC9nL24sUU4zpRCofa862PCcFdXfZZYTnhum7evACRVVamsyH"
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
