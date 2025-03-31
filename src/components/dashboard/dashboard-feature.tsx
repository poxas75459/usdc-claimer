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
    "55DzMUYpDJ5ixdrN5eKvRMBRy75qNopaY95FnyUtbhWRX9LofaA9n6yEYZsgPzF2MCRCXDW5eF8pct9uLEsNj2nv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g95vxJ6sxUf5KATrQW1wLmT7etj6CBprrqEnQR1xxYsxcP62sEc2JepxdpzSWErWSLWQtFQAZpC3RJZQosjHcBY",
  "key1": "3PXRDspShi2MaA4D4Dmc8jj6H8HEQbGz45uNRAE5XijWVPjnTngnWm4jgWcjo26X7xkBJaA8cv9ADmVtAsteNTKM",
  "key2": "2kwbkuK2QqB1QjWQvQZfr16Hs7ZcAU5Buq5HJivAQQwfR2YAcB2tfesPMhMEJZ2UzfP6HqFSpuDo3aZdpeVoE1ZU",
  "key3": "4L7PGgafEpLPvp46jcL1rn39T2Fga9Fup4mmjzVHqaqcowBUFVW9syvcRv7viiSRSnyv33en5gUXtYFSxU4tks7e",
  "key4": "2Yw5apcNiewt3Whq31oozBdxHX3CV85aRi8AQSCK7ojiVa4fdrXvLSYYRcqwSBuM2Gmmn9CRE11gLv5x8GkvpAqp",
  "key5": "5kxMYG373KoTzF25AzihmZMfHAfouzy87HiU2bmoFnjdasH22sB5oYH7WdYATg8UWuugYSJido48j2QCdiqGvCz7",
  "key6": "5hov52AAVDoHDpQodVgDYpwxoZDJDHJWYQuVALYWmR91VHgs8WpZQWfzBPAmTifUf4ZPqwQmBzXH99G1LWCftqZH",
  "key7": "jytb43ZtWRzB6pRHNUqb4gWU13fsTogd3ePJteduX2CZAKVW3XDLpsjZezpByMSLQczVnixrws9diDQBfybjriA",
  "key8": "4gL42Ht6C2tUesrQqeLuwRSRfoZtvLUwNAucgWJygGqwQ3ESbo94TAFoazD76adWqdXqv8xo9UAbfBQ2bTPXkECp",
  "key9": "5RwfrUxMGU9PKBpi6USvYB7rn7UU6E24xsvLUARkkiBWiXn6LeEPREs588KJXSuVEwfhMhv6pDKMU32DcRkRkZv4",
  "key10": "3jpMfs6NDvritXP6KjUXzUiwVKd64RwvaG5z1PmKzs1q1n1VwsJR5jsa44XLiduPc7Y6DhnN5iyubyaPQAv4UJDo",
  "key11": "55T2U5J74E6wLQCrje2sZwEEB5uzowepwVgjmG9PNJ9H88WK91wmAPigevpf3yHbw5npaBKic6VdGXsQ3WARUGJL",
  "key12": "3GUtPiTqfU37vXtZ4sBqhmix1zKP32yj6aVxvR5p9BC6J3wX2CaGpAV8e96mu7u6yawT5BLHiQYCnB1x9uKPmcdg",
  "key13": "rGNoEPfuHmcJ3hhCb1XVfqt2HfiSFaKVz6DRffVTgHjUFXeabSDKEZ9UM2yG5PCp9AfAwmdC7Eo7YDFNYjcP3Jw",
  "key14": "4ngZChpTY6Cxuo7tCE5uTDuAsiuoUTaR1g67vZXNjAwYVig1KzhEVkpYjmmN2h3KQG5f1fFuJPZUp3Y5pzznCkaN",
  "key15": "5ugPLLL7YLYttTc4yCw3mxrfvriL9AFkZSfpJk932EwnQibaq3Yj35YgSPPnWg1YhBthkjh1QjPBXkGCh1kjx1mY",
  "key16": "mjCSoagvp9arbhqrzZ2oSMVAsQFpSLcDEn679K7onAa7isfso2HoSvM1hbkra7gWHTwNeeEXxyEAi4uWH36Pz6X",
  "key17": "CzGfegQwnas4LMMj5GmtYTAb1czBy1b37o3fvD4DMSkjCMi1WtW7AJCNXT2tma8WkZmBxGMyuh591hw5GbZFq6K",
  "key18": "4sDWgFqWvPASBT6FHSAEJuscf6J4MVqr1Si8fWKBCyzur3HLbgCWSC7QtfjUPkUCfhHaV5i4VfzYfkcycj4NBVAz",
  "key19": "4ETbKjDpcUDomz3aZLVp5jKmsgnJYQ8HLHCTGWDjj8bGMQbdcWK43khvbigEhXFfJUwKFbUwSPLQJT92q3H9xQie",
  "key20": "2yEYmjYPJM8jgbBfbW8PKypx4BTTTgRwcUk2x1udzthm4hEQkH3aKJx6mKLUSy2pkSVEFZKSXRa7JnvjidoKyXLv",
  "key21": "2pkzSPViWDWo5KsHTKGKTpXgp717yc2BMtDq8TgawZACBePqWduoAo6FGnLxcP1q8bJPgYFzNiCoMBLpX8A85ZkD",
  "key22": "3CsFCxAGFeC4p4EsruFHKWH6htC4ZrstX2LcWu7uvz4HPVAvZL6r51mJu2XXfY8oZN9JFFjukVDYNTPngr2VZDyV",
  "key23": "2u3LrhToAN14qEg7w7dFft8NjvnCxmkEngh2p2KKbd5ZpsWVtCFgW79bk1WT1E1t4U8Jte5defsMWy89UbYKdz5y",
  "key24": "4mJEZTA2bHfzpiTrhxzcgJiv1hBtj1Guj3PmMZStcqCHKwLoPUTUwSAcKPUDLtZQa7pcAxhnSLXHBPAqbmrRkk6P",
  "key25": "2A7URejq9KPSfc6LUKVagniURyUYpEwE68vAmEQgf9SqNCvX8yc1LbCPJsoJmq8aixZ1DRRBDdYvv9Qbb7ZbNTef",
  "key26": "37zvHrsoGTnzW8prX6BtYygwx4XiBigkF2FpS86ta62LPvWN7iafFZScQpihWohxKJuSA6SdB6dVg9Q3vRofYowd",
  "key27": "ChSVz13CE6HD5AtqfTrAd9sS7rUzKhJQy7ei4jT15aK64JjEPe3bks6APMfgc9CgdFawsDkgLSCvuasUVPFhNJY",
  "key28": "31qemekbzhZgRxaVQu49xQrY7ScAEPbVouVsPrMWGrfQFkvWaCNj1DEeEwG2vvLykpkQoz1mSc3CdLVwD5NTRhR6",
  "key29": "3uYsx8JToMRP8z7LLaBwd5uJuZBcEETXJMrJrqiLPJUkE3Ln8KELavqKGA9ypmvynK2FY26ZpCXwo46sUbYrAhkc",
  "key30": "3iqxUskWRwgj6G58AfX1Ac4STCFmnvHKbBdEcJKjG1ppZ633FG7nccn9tcBEU64rHgd34Gb8SibC26t1cvt9BJxz",
  "key31": "5paycTRv7JE7L4v8q5rspMPVWHPvPRCHZgWi3Ca8Lvpo4sNdBMmiSKu7zsPN132XXUNKvgdCNNQtfMR3YXUrcZBz",
  "key32": "5275DmFpK7cNPJujkqWok5bK2dXuYxZZCVgqen5wNPHJvN1uzhQLCW3ARN7XVnKxuoEdTYYrAJXbG4QiF4Yb7aRv",
  "key33": "3zSSg76yHDDQ9ZCikaHvruhE3wQxoCKX5MeQHKbiwuFx4vgFZLjD8yb8R9mMuXuCFdBWx2utej843FacShyEq5uE",
  "key34": "5HtUDF8CCgfNf8fW62hnkYXFSs9cssso6pUKYTBSaPNjBQhZgmKC2Gh8SdZiUyrT1wfh9YinbKHsUVRxPdx8PsqP",
  "key35": "2qX95gh7hKxMs6jNUfHN3Bp216RmRGkhe7gMvkDQTfUJsUXrEEvh62D1fGV9uxnLhs2wEHYY1xxzGnE9ZfU7aPhR",
  "key36": "5zqbWpr9Ep78jVQKK3QT5VRF6g4tLfw8xAqXohA4Fdse1AUKUh1ie7YqKyJc3xy9RfogE312vmCh4YVSu5BLf8Dx",
  "key37": "5t6WuJ6C5AcHxuNAVQNBmZY9Sz38eNHvzGuDkKcBboyC7PXqi48dX6FkPoyqnBUTEuqe2Mm8k8bV9Qtsavyu1Mnd",
  "key38": "4b4NdoSaXgQxgMeadmDhGQSecCfM5rGMmKj9EKovNjMbSLZeXRwJwbPS4uQjfcHi6ZZXmxgfZstdJyZXjQhcCfnG",
  "key39": "XdK9pefTLrCaHWzwKeEQZkQeexnjJfZq7vtNiKjpvcw7Pk2TuNUCETzFZxGTQnC298vKhKCLGJ4Di22Wg8Wezoi",
  "key40": "9rQqkQouCM8CGdNevnS7vaKYaZ23AkbcsKYupNyFGuL1JMQ291ak4zxtgbSfCANew4gaNNVUxACByuqVgRFGSbF",
  "key41": "4ve9SoYQzcNcwGTCV14mrURg8kAqv78ExE9QFVaxKvNr9PcovoxfqHrCSQQPoVju24a9os2hgDteNNzBsAytiHGq",
  "key42": "4r1F6nPUVUQiFNkptQT1AquTYVHhrpJxdzM442DPYozCK5VyMgXswnW7vuyyTX56sVSBmYNBQCi6azY32fF8Ha81",
  "key43": "2XEhAh67sJp9UrcDz3sL17hoMY9N7PeAna5HJsECNMuzpVUG4aNc6ZfK7tJZbLQUqytRbDjvWzSQH8HvEP5b8tvC",
  "key44": "239KYhqYC2cfYFHzx8xwdqfi13cuEkWbG2pZCrRi92sF8oJaeedQQcXG8jYKZUp98FBVk9khhoLcDvZUkKZozC2u"
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
