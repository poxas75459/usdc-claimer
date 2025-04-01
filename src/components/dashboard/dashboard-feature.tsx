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
    "2fq8hCoaCpfnuoqKV58VdWXj8BE4PMB3sUmDmEVCgsa1mpjmUUobhFULBezs3FfmeuH7JXLq4hbYsdEQc58KcGzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44u6dc2oAHprFYfHC99eYbQJKzgaJod2sFvpnPcaxQfcEuUTRZRRmFQtnKJy6QRfuj4dyVNXTqfRVpKgK1jqSH4t",
  "key1": "BE9bia8koTweru5CJxN33jb8WUcfsacrUyizGtDcbHHMMSMNVTtTk7XFemnbCvKmwTKyS41257ZZFV7MwCQ869c",
  "key2": "45mU77seyPvbNoAfMDKwLbsrGvGZto4VyuK9EHh8nBUR2Db5x8AjUEQtW4FHCtkC51wPoXGefC2f332cpg4iFbTJ",
  "key3": "2AFLf5buDBMSWKEwt16PLyaV25WPZJ4UzhbGDh3PAXrqTy49SCVtNuNEcoFhtx6KoDTUUjY4ys9uKn78w3FjfzEW",
  "key4": "57MdgzsNCYXiEhdx2m855yiJyG4WMVi8cSv9jhDGUVEeQGjZuxkdBnPLrdkDGyJEZ1S3tj8EDpY5BpMpc89dWtc7",
  "key5": "3y42dWYndKjeRFr2f8LuJFtFiMtpy138fvmD4n13Z3iJA1bD4p3g4BWha1S2RbHHWcDxb1JvyiY2gTsC2aq94jDF",
  "key6": "5xJ57fqu5k8DdBZ9aM7aK5JKZtoKe8CSQRpMYkb2fmTpa3CvzzeVMWAJ3yVWPPUZs3ne6sCVCnrfMcAYPhrXxYho",
  "key7": "3ms5QS2ZDeM5ENpSff4LSaD37V82ZaczhbPdjfRD3E8DxGXKKyfKcwdAZFdvaJgEFGxrdvbFRY24GeL4xoq7MCPN",
  "key8": "41TFq6jkPKQTwaP7yiFZt67NMSniAh63P9NDf4uqPhEMspTTVToVbuQ1k8nHxbXvZ3F1TBiyfyirRWr4iGjRcPKU",
  "key9": "4MPvqifJe565QhzKXZJ1MGKR9YZzGBU86SJ6fnNueUtS5djCgz5GQJL9vzkMzB8KuDpcZ2J95rbkRv7MwLfeLNqn",
  "key10": "5odr1RZogZVP52mTd9b5TY6EjikkmvCNSecdnDgwpz78dDJn1m7AAPitGVQqHjHewSbrBe3TvMgodkEF2nwxKF82",
  "key11": "M3kjfqNPENXYtNacVy2UCPGF5y628SvBY54amoSHx5iJU7HYFaNfpBF8o1pfkBWX21mf41jsZwCDkp5gYAMN8k6",
  "key12": "5gvdzosmbzj8U3NrC5g1Ahw2yfmh5yowfEWYAEMCvfxg91uNXW9A5YybitUQbaH8AB6Xx8nnZPHP6LEs5zQ4ukJj",
  "key13": "DZuW6wZU1yCwm2jyNfNdZ3Dz5osH42JjAwf8BLk86UUhbJoeCXKADk3XnvdToDdfDDX2cLvkyNJK19ybeDfssR7",
  "key14": "4bZouUFr3grFAfx3sPVjynqA97QT55HpedrwEnuaET7ixdCvNqV6GJV2jevz9d5rng8nTVQHM5NHEMPDjhTEKBFy",
  "key15": "3XBUo7jmv1o2dPngvHbaRiHWTFLAye7Wu7SkaTVybD96kXvRV5NaPth6BpaGwZqhqMhLq4yauGEMzwCmPnuPAoJ7",
  "key16": "nGiDR6kq7hayPff5v3tJtcCVrAjHprsuqdBz84PJphaxjiTZ6oMozVaNubgUDVbRXbYSjkfysmyXDdGMeLk6jYC",
  "key17": "gH4bYuNCVNBnRzgoDrRjarfKdFe9hL6kSCz4F4stsrVryUtkuvGGrGn3dTcX7muer1Hr6bbNnybX1oavidww3KL",
  "key18": "3VNbg84WsJXB6r8Tds5rpUWDywJ7dyhFEsbw4BkAbXeMF9LD9qURZwjaUEo45kLpLqtrkMhhJFCYu2kFRMpiFq9L",
  "key19": "2VYV5Et3jNe6Y8SaMbdzAHZxir1X29d1EATe7nW12eq1mmbfkqcC5aMiddziCP56WamZYAErhBpptjzFN26kapTf",
  "key20": "33UjWdwA5x1vsPQi4zpropyLnauwBxracyRCmBb4L4EHKoDnya3b6qhRfGx7FacnM238reuQDuFPNRZUnXAwjHtw",
  "key21": "1XQ4X488ASrYxca97zVPVBxvDhwPbr9UNE76wZQ9YX3USgJ8A1pRhiXK1FG7V27L7YC2riqzjqXdvWp6utJ1kVH",
  "key22": "5gSdRGhEKvjhLthE51BsqLNMJ7fbie9FCFqP5mhwEB25Ei6c9NEg5o6AC1VPB9875AmfjVnqc81uphpeb8mPSWQy",
  "key23": "cctwvWhhTCnW4p2L17hc7M3n2EjasoZ9BEthkGZfLPxdmxEM21WSkGAp7KFKEHhvEzPYMzriJuyzixiuyoRkudA",
  "key24": "5j7XKzZy3RBZg3Q6WpAnxZsp87vEHXh6iS9XfT52FWqfu2sz1ShvVXg8m6vG6VsUxbM3NiL5VCAR7kiEKfb7mAaK",
  "key25": "3LSaHH7cGPDQrmXWj1mcVEv7phUuuLqD9h8pK2iwbgEdGWsYb3Y1umXPQQRY6wi9B3JW14Q74YyxEwZMuPnNvvnp",
  "key26": "3JDWExBeYDhHLVvkpUJmXcEVBUpVzatG1kpqgHTAnyb4AQAA1yPqUQ8AxDPzVMcr1rpJtGWYUVzHZdW6Q3L9bq5V",
  "key27": "48uwbWCrm8taBBznfBcbr1UtgpvV5PcPNsD2KT1wNjcmrw8h6oTYCWdFgz4c4h8HNKBKzS6VfzFgD2qVMYzGVgD4",
  "key28": "kXPQyQAK5oVQxQKAkjvU4QiuakarGzcwQMnNJVjZaASqAzHqNP5dgPBpsVMhsjADbk4XSgTHkDaDv9dsozSt6Um",
  "key29": "4nYXmBbrNEAudBEUdDcTpHKa7JhhcghqSi2bBjWW9yFSbVbh1wvdLNMepUcYyyQcUAVdmtDxkxr3RbA5ZchSmZnW",
  "key30": "2ARKcvPtZKaLdgJWL3UGirDhEhnN62BHnW6cXZE3NcCuhSeB4WWH9Pq878Ri35Au8yXeFk3z8G683Qak7Hk4G2r7",
  "key31": "2gVxzurXhipVMxHSkR9i8CBp1oG4GueJCbw1Dt8kTttJcZEBVsgjNGV9MKU7RMriBgzzGJVXV2bCPFtLVgvapLDM",
  "key32": "3bpheWr4Us8cUdaPU6wxumb5W1DtckBUCkQcFPMuyLRfnZpeKKEtUzRvskYoGp3EkQ9XDbwLjW6Wf8Pbu26NF72k",
  "key33": "32HiHTazKdusomVToeAVJL3rdAzFjza3TGwoojVsmiNXqSj7psjr9yjmL8zhzzLDFTF68Hbj3H56Nzen6WTFHP1a",
  "key34": "4sGKj4J3bJMz8RQJCH7rdQxQHFKGpzBhsnAWadmYHCM3SyA95qHU2VNj7DboFmLNQxZ7DAqhsaVCAo1Mv1RdrXZZ",
  "key35": "2TYbrNpGntLvCThDRdYY9bcfP9p8Rw2skPoeVVJNHeJ1gQLYxrwe54mbGDrNqHQ3FaxzFG8s9QnGaft3eSCyBW39"
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
