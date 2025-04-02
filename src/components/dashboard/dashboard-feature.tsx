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
    "2mXU3eMQrvRx7FxwAS6vr4EHpeybL2vGDyKCCGkLqXPywK3YfGKSWBz8DpFC4KmkvvpnL87sz7LnpN3QKtQsbiqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ig2XrjS3YgEBd98hJJD9MxnqerSiGqSr5914oB16zCqbvAfW2qbEbLGjF59XyVHYNFFLmj3VCTjTSjT4qZHmMbG",
  "key1": "2GhGXGfwFp8egaWZwquwt9xmiLXyqs2cFXhdnY9f3CkQXYCfKX51GPeT2ekSQhbzy2k4Vyfs3uR1jvqFS78xWWyo",
  "key2": "67PHd9MLfw1WcCNB2z6gxTGTzCD9r81n7tx2zgQZCQnAdDaEZ7RTetrY1k13HKem3zf6e4RscGk8LNT6rBqFoRs9",
  "key3": "7yaUTcdrsUUjFDLVDDy7T1FyeXcTubhKZNyAULTpX9RWTkoG1iTaEtDdMjcgHrxnqkfpkZvxVUiiYCZJiFSaKAq",
  "key4": "2rArehYfkZHcfoikbienW3KTiRDTVrDoiyEMdWMQ9QBgvdXDsh1uhoUtBt5mgekQFp5M7ax5E2bocmLZ5XsdkkEj",
  "key5": "5hLsPnW7x5GVUEYXD3mTkgHwg2dvHSSchPSaVy4S8bEG6d7mQzV8FhtW9Mbz2NEZe8FxySnZzMuPkEbeWEXRi45N",
  "key6": "4rmLfHSCPBzAni1eNX4mHhoVp1EhkmMSRCjJv32cg3jCXtysSddbCvyhbTkZsgJoFpPmKQTtcrp9gX7LN6WxQZJx",
  "key7": "2d7kcR1g8cS2Pv6QUvV5B5sqmDgMMvyFCrHALNxGcgX5ajqGyLmaJZ8kVC766B14gtf84kRiPB7b9VHAffJAewBR",
  "key8": "E2a6KRA8LQWKJPX2uu9QFqoQUBNT21TE9XAHXP9XZkuYoBxVxpAf7qSWQ1fHgC3fFqWQRFKpwg3kpP6PHAyus3t",
  "key9": "2sZmNaZKe2oGNCVyBLTVsN48jL1vbmenQuqF5LuX1DXWoxABaFjK6HbekpaceRU8UK15pn9EhpGj6VWt9qwouwTD",
  "key10": "Bg4kJH2g81stLFVYUn6KQCa3DcnaKTSMEVtqZthU5URwZczw6x4UKH1eZ5c9GuayJqt5SS4pApPvHKVCzjtqKUp",
  "key11": "65w1WsK3Pz76hzJYCoVgzvu5C61RU5VsCRMfHX8ncNESqVkSG5M2rKQ5KzqFQe51VXutiR5DHvefnu1YJp9MsVgp",
  "key12": "4vR1FoaqdRepgwLw1st16S3hWb9Y7KqL4zVrbtHPutjusdr8YfogqMf7d5mGfaJbUeDCzatBcAovfpdnxNyiWKCH",
  "key13": "2Mgm14xBF4UEouXG9mgMfffvrcM6GLU8RJRBd3s41ypUTh4wHLRde4QVuvDznmTc9n8VoZMfxKzy55p14E28LMxJ",
  "key14": "2UWnvyzuDLiwxqR3oKWZExm6M1MgsnA1grkFJQig1rFQX2M5t4EPhhnhkXhkdJv2iPm2owTwNVKmENd7wXd9siBV",
  "key15": "49T2yH4HwEiUy8kU63JSgnrjkSGY2YSYdecqtF9YjyHqFZsSKSHo9QhiNY8BFj95ewZARRQxYUKxQU5d2uSHy9V9",
  "key16": "4b8Tb3RMX1sd3gsFx9cAcETbEjPuQupvn7iym7GFpTjqHvtf9aif1vKR2jPpRiSHPDJgEe7BAewexZSpQrJDpb3s",
  "key17": "4kRkDk6HY71uHtL9kwcAUTBNRnc4euXCWdG9nqc2SjEaKCrX4iuPneziYkmzek516VHnCPhr4vY9yVSJLqN7coQk",
  "key18": "UfjaZKMXj7cxoY34WSNe3jArerCGtbAjKnCtZcf3WpV7LLgeu3ijEkPHnkHS6sB9DZzH95K6aTXvvEBpbDACDie",
  "key19": "3YxL8deFsLrpdUrtZ5eEbR7CCthBaUexPXAJXfRxnj9VCcacMiDhvCSXdR8ocsJmSzpg6yWS9dyAB8ZGMWd3QN79",
  "key20": "5hrdbKvfpqiCPjw4dhd7cchuYHUESPqYvn79nsjfAvxADVkZr74Cjc4jczHqZUVYYZjwHHoho5zbqnVkBTsDK8MX",
  "key21": "3omyTwcrYmgBaidR9n36H6x3dbzNQj9wbiSrgbJJTt6AmohVtBPadWz55rWTtPJDhqpES9J1vEyTehATTEyYp6Wn",
  "key22": "4m9DVmvuqZKTtk3NkbGeMhFuMK3ZYLrywe5MvAySKVsiRP8CnePbmcELU7x24LCiPrY761yDbkq6UJccSgk1XTR8",
  "key23": "2R5f9BdYMxVAZW2bg1bTbwMHQPVufCuvGi45x7ik9nBFzrR4ezE58dG2nEkMu8iS8JjC7ET8aG5yzh9o7ZFgTG4e",
  "key24": "3Yyzxgg7VRfyiwFRGCU9NeXgm2m11jMyBZk1tL1X2Gze8bhe9jSfqf1R6oNtcTcwjmy8zfm3E1yzdrdyWQTLma4N",
  "key25": "3DH9Cg6QwRvja1kVeFiHMkuVeRPSKR133WmsrFgGS1Hd4HTbAqM1VFrc2v6M61t95TjLsCG9FuTMEWhjWLxnL2GK",
  "key26": "3jhedGzzi51LAinmwXvZ4Mf4q9uAJj7sDvRto6gn4pdKckSoQWXRpDNypWdDV7DYyC3WgG4U4pLvLQiQa33GRMGZ",
  "key27": "32Xwh4mw6x3XqCczkiBmhmnguL4Z8yQJLMmYjfkMgJcPLMb8LaEaTuP5UeWU7k3emndpfDXY1xVBUcF4oTXSbgyp",
  "key28": "655UfmKMUDEB9UgiWNb63qqsAsJEQoaFGYyhx3fyMPhMpSdY65h8cKXAa3SYDVoVHBDShhrwpb6xbT8Js9CLL3JB",
  "key29": "WfVPERHGccpkf6bK2zyLtP6twNHM5ibarH2bA36hxLhe6jT6EZfQZB5naUcpsbtZiMfn1LdjXXGM4WbkutVKeHb",
  "key30": "4jbHppUQZMEwM22o7SC2hbESy3j35pyqbPuguRpQJJi1tEvZm1osTJ4JvPkZU3i6783D9bFRSHBVz36xMLgSwizp",
  "key31": "26YQ8iNEWiE2eVzsjpUZHy6nLY4SN9Y64BQhrXUddA37Gv3mrPypCGVrwDXFaP9umZfnpdx1xFBVTiWQvGKugeW1",
  "key32": "3YwYCfFuh8ejTrev9gyAxxJB7JaHSo2PBobN9BypV8sCsBgKfhX6MhdXMg4ZA1hwWwttVicg7QobPkrYkQAKEMBt",
  "key33": "TtJfHzRDdTaZb6T8g5eaMbugxLEU3oYw28rXWTTGn1Y84kp9BhyDthKmGFFP47AT5VCF4JhEWoNWK1TpGzLRsyJ",
  "key34": "4G9PD5UK3hvHefCQYFw9SfdrrXEmd5i4T1GppakBxYEdSuikKeLmXVTTtLNXZk6FhWEcmezEV6FmLHGan2qBtzWX",
  "key35": "2WRGD2WrbAJx4joUEWTYfL5KxyVmNk5sMKzy3Fj5h9JN32E6BFrMq2MjJZFnNFfLMxDcr3Myjw96rCkrKhKGWQZq",
  "key36": "EJddfDiL74Cgst4UcxwMKodNXS7GEifKTcFWcjx6atk1ry72NZmaosNc5AfQ6kU8VxaodLvSqXUgJ3tzHA3r4qV",
  "key37": "3U4BxKvut86VEpHcjAxhWS9awesRmDz6SGseEdCfVG3PGfk8FKRjBBxaj3PMvE6yWHgq4ZsDxwZFpCyzrH1aS6Xe",
  "key38": "3oKjHAJxEKf12ZP3TDQveZ8BAKmQpWmStDdS9avk78Wk4td7JiprsruBhAB1BQWW8rEhascJhHopxW934T8WerHF",
  "key39": "61hAo9xrJTqg3qREMnVKSD9xnQS9t9KwgnJesGu5cXMCE98oFXZzKbw7y2U7EiS6RpB3aR5M6d5ZYfE3mDJU8jeD",
  "key40": "5G9GVz3gAFxftsFeSqAdAoizbXg6EXhoAonaTQimQEeW3G8pq21uFzBVHN7zAVRsVDjvqiEPa6HoeJJLTjch1PCq",
  "key41": "qiDGhtsdENhGp2oxSnvtKBdqFD3XgUDNd73uAXTMXgLA55pavLig34v5Q2opbuE35WZNCmU1ycyas6zQVAzn79Z",
  "key42": "2odHifPkRi58pzRQxeANACEhRC8n7wX4VcvfVxi5HpZT7CC3Mzgkm4nKNpVSdTVHL5FwTRgDEiF5azvqK8tSfyUV",
  "key43": "33mS2Jd39kxjfvrfZsCPeVPhVnZiayqhg7B7fWmuN3zjT7zCtbUVkbKn222xtzdEFnHSc3UteYPpwU7x9cjBAVob",
  "key44": "3Lf8Sp5cxQmJKYPNLcZLRftJv8YwL8MpPAiS9yPzKym3ZGyJ8igEGsVZcWYF47E461JQCxgp8EPjC3WXNdybKYTr",
  "key45": "5eDoLgP1Ed3FeBNA8Nu1gqgd8dcRopcjvqDLo4aLbCaZ2hzu1m3PoZRVPzCuB4ZeMpEwNbcc8YHjhamxfFJAA9rY",
  "key46": "QTU51RkYakobuAHL6P8h1wUNmrbTSmrW7meE6tSNVgf9DM54hZMooWhCsuTdKemtAhCbLw2rTdAfNhAeq3zSSMG",
  "key47": "3f2vYQDh2NgtWRg5ijzEwWkT4MbpFecMsPfnzmfwyYmTF7K3fgY1i7Ykd4kNGGZZEfuPxXA3UEBGw28YXVdTCft8"
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
