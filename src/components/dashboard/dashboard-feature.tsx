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
    "26NypMzwBC8ejLEzVP1E8ksHN6YczK2TrjkxNpZgECnfExSG4LQYutKxjeVcZSGHdhSbn5kd8ssdq9mqctxdUCvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ge5WWxkmJi7DVyoakFjSpjgt6fthsx9To3XdNSSQMC6BLCRdXEjmkQ5d4GJzcPXrCZKGecUnjajdDZiMYJz8FDq",
  "key1": "63vsRs3YDkQV21wcq8AJQ9GF9Zu3rLAS4UrsTNACp7dZakUiNKJ6HgeAcZskwcLHv4niHTHb2AKSqh43eZG7vk5o",
  "key2": "4vcoLA4GYRKtxAjVEiE3Dy7H3JvGJEVwQYGiwHGxzpQ4vtcEtESJdULkdFXiqzTGTwPJtcv9xHfcLUDHGLCABi3F",
  "key3": "4itQF1ngrQauWn4GgpXf1WDnqNoNhugYf72PpcyH9V9c61emjNkrXZgky5WSEZK9BxRex6Yib4y3oa3tHt1812sq",
  "key4": "53wuz4oTnioC2rmVRcnAJU9ziCv5EpGuyEfzJEnj9H9qefn4ss7dDqi1CdP22estcW24dF1c5TtdQDmDxhgpbmUf",
  "key5": "3v5bSDkCL8yroN9JXjfzYicuQhVcJPmfefUz2vAYRuNgoyMohTqimSVGct6YAqpF5VqBonh9y1r8xn6TeGJP6uaA",
  "key6": "3yJrgxdCqwAbhnFe8FWT9ntyCJavAdmChym1CJnz5wA1ECNfA5weS2fMgPitZo4ZS2zrDSqhJF88mLeiiNheXeaj",
  "key7": "21TCp5PpnbUeRwDXvnRKHvoEU5bTtfTp4wteZ3BtfgYgtwXEcF8JtYPDe9jHn49g48RAJKJqcUFjdwptKMtSv8m1",
  "key8": "N1Deh4LEPZUo9yRe9HEcT1MwRYiTWhGfBqhHAkiJdrUj83kRvTZagwENDysn8uoX3c5vVKH6ASizM2Hk5At3YNz",
  "key9": "53WdR5ajD5vkeQtmuphofg7yckLf61cZnGh4YV5CgWPx2hBjLZXYgpyzBYY1yZjjrnk9brndH72VgQCExNtoLPXu",
  "key10": "5CuYSfTiKFtKtd8BNxcXkjCbTepyoyx5gKw6ZrzhRmDcEZK183kBwSA2nEnJgLTazCmMuioUVjZNn5ehxLLqgxLj",
  "key11": "fjTwQPxfEHnjY85MNvczKcNABj2BYc5xwJCC4hUB3VeeJyJFUJ3ZjpCodq9eeqvFoniRMCZkNkvw1Ty2hLB9Lpe",
  "key12": "3DCaHmm9zivdaDRtCs6iP2ZaeLtMS1BtbzrdeSLjg4Wf8v1iC3dLW7bUoLgXoJP5DKB3QasJnnVLoa21TT4U8Twy",
  "key13": "43WzSJwouSQGpTACoYZkMSon2FCp8eMiU5QWoahjknEoKQtyZqiUAmytdCr3dzoD8x6wPvLvnppcnG6cgbfYW6r7",
  "key14": "84Mh88YKUyZ7b8yvFNi65FxvgR7Jf1VohAPnmcesDnXsq6FYTRitXh8SLzByezvediXdjruHjeC6n6Yrnx3nkFc",
  "key15": "sAabGiMTv6rF2yoFRoXGq2xXHwFhYd8j26gGf36ZQGjVACs99LrFSSYuxR7xYbDEjKGAjQqkgsTRuu449e9iPWU",
  "key16": "2avSaTgaRAbUkR5UaXRZVxQjUQyD7j27i5C9jNDYZhft7RzW4BQ7EQgHUbTWx1akyozjXuKUG3rvfWR4vweKds1D",
  "key17": "39YTH8kJVCuo8Fx1JrpjZ1rsa1AGYtis3oVWFNBp2RbWUToNe6iQbCZVXVE4PeT4VwrCyfPLXf2Dqg6fZoT5KPim",
  "key18": "5nzpvNiBG4vF6krg5PVty2oEFjUzShhFsGr3LbPKhvmEcfQCCvvWsix5M3TmrHqvGfVcKez4f1VcRoPeBVfnZCMS",
  "key19": "2BNT2mJdtVMZW5bKHQVzuUQY1NFtd9buEDoSF6whDsFQJ3iQCpXagqBWDXd34Yr2CsJqm1wbSZ9m6BByqi7WFQg5",
  "key20": "4AW5KQ9bhfiue29oxNzFd4AugK71yBysVbKV1o8SuJNeVADJrdc7thCJvPXYsJb8u17he13SdEGrmG8wac7VbnZT",
  "key21": "42EYXce2qLhZ69k3ejVnm5Ym7dUhqX14PU8imc9KmiE4MLiBUZXdpkTsE8HbaGsmhoVDWKAJsWaJvMgZuf98ZkUi",
  "key22": "3pfKv3iZZQBdonTHAUxudgtcE3Nn2f1RWMs6qT8nuwvdR8SwjFBikLEc6mpTfBTQzpiR3RZda743u5TEvVpnnJY8",
  "key23": "5cVCWSpwHFjVwzEgY6zSB1597ZsyVx29v7Qa8Htzr16hwNV3Wc8e2mgYDdAdbKD328e49GKMdsyQSiCmsGjwgwkm",
  "key24": "2kNJxZyV5M4ztc1KpmQ1sSz4tbVmczfL7eGpUNfgiHXVQC1da5PA5aUVbh67hqDWqcUePMdi5C8XssqMh9SqsB4n",
  "key25": "Mam8s8vjDCintkMLvdmtFeu1gkVbRY2HjK1sLi7FZA4Hc5aMDhb46L1xQdwxHwjB9DzGwUeqYoefKuT51BmPDgR",
  "key26": "2uWgMx8WV6FukQWJS75pGd3HyQd5QKQuA3z5riFFzK5NjS7Qcs1U2yt95sxXrcMun2b6otbtPWcvEYKa8bpHNbYs",
  "key27": "5y7n3VQpz1aYTmAFUoxmcuMUGb8Mc911LkFuDz4SzYMkUXrqKXoKrcoF83sUxJVJBy3cCLHoE1wAPt9vNYQDP1oa",
  "key28": "2zUuQwWfi42Jw9VSX295scMniKVEBYks8bhEujTcNsC9WFAxehsmtEXZWF7vUm3kHrRpqd6jW1rLUUqwwx6ZuXcY",
  "key29": "2Ad2EWuGHK38u41TxNZtLWNLeaNmbVcbqFjMXrsjR1M6uXPD8ijKoeyddEFWV3C2UmnwF23AjCSxtYoXQ46GH153",
  "key30": "3aqYnWdRFCwtts5dZGLRpvsNJKzFv9EDxpUy6XpHfwb1BoQ2cQ6fGuocVVDtQWfZXMDA63TT83oLEQX21MkUKrk9",
  "key31": "3enD3xSYDPpfzzPKzy39Qtx1HySghP2GpYoDiBvxt3yyoSuqgYe61sZqkLv7S39mHUEH4rbpm7ojPXHcq7VC9xXZ",
  "key32": "5SzKS7E9wSsvgvkefDHq5m75F73o9enQhkeePbNVVt2rt44Ur3NuYxp2e9i61kKbnK5MeBaS7rrvrVBVxixDpTLH",
  "key33": "2HVLgFyws2nXChcWVVwsRscagKanuP8qx21C6ZGzRB34UwQ1pXYUKRqv7Ks8v1ScNMqmTpWwUENwRJzDExibRcH",
  "key34": "3VU5VNhuNH8XmwUK9YWa7aChAciAKzyHs52f9iA1F4RS8pAvtV1TXvfgVAnzwxwTN2YWmxrFtx3X58YTA96nZjt",
  "key35": "4NP95eVDwR6BCRCZa8XyfJhBgcTMAoNdaZpvATctkQQLMDyNvEo2te7CumRenpYBKiyQAKdMSWv1xyNFPf2eSNtY",
  "key36": "5DJF5r4Bh2buhf69QXK34ECni4TjEwqHMNQZKSh1BjjmhL6QBRbmE2BBV9AAPf16FN3iJuo63iqKwHVmJ8oXeRdz",
  "key37": "3ozGcfTU4MS6ncWGvH2LXhSXSsqHwYoNyunUbKRDuawtf9LE1mN1NMZ3SqU9sCZuFP7jVuR4vS1Nm8eLAGMpUkb7",
  "key38": "qDyy6ctGMga483T21YSu8iBxLf6A6zydfp5nggbTDrUKASDx4Aw9aysQTwgzVVaps4nSTdsyr9v3equ1k7zK3wH",
  "key39": "4BpBL7ecp2aYkBTmgDg1kuCDm9MUFFDjDp7Ynw6o9UxzF1W3qwejggmVUbwdsUgh4TZ2i3LkQTs18gYmxqm4Nm2k",
  "key40": "4AmQNqsUmXixKapAVJ8XkEXttpWfSPPqMPc7iQFKdWqWqhaDFpXoDqLshsuPp7i2xKxgcfJqi443ZRBwDk9aUMkw",
  "key41": "5Zf9Y3esUiHMGJCfNGGnfa34CqY6DvaDmP9QwVCWSHGpBxPrkZcefmPqdxcbtEY92Ug8RPbXe8rNKokuPuEMGzA7"
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
