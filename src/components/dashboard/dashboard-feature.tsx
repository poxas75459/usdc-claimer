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
    "29XnQSG8PCSedgDXTgwiswnXbZNQQQGwUfuEwnmWBcTuXpXKiJJMrG3QyqNBy6mQxLcdzesTXHyKrccLkFjTMaGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YRtGP1vhXPwL5v4ojTTe8hgv56U8ZwJd1oumU6iJYUFmDLrUQyqa197Rh6RCg1rbmYJ7bMVLTFzXar9nTHS55ur",
  "key1": "YdKcfsvGsiHKN4X2tHQQuiXzGK8v5xy7985QrZoLrngezbnmRk3khEaEoe9rg24hAxaHQ45J4WgM6EmfiTLBx8w",
  "key2": "4KpFXX9smDQp13yB1RNBh3JTUyDptwXth8yzfU1yUAWna98GrkDeNtrBhAEwCEjzPD8B3ZdfFPTgxy9Cq149k6bD",
  "key3": "5Vkfm4o3vxx7G9QEs3XmNFpEThJgCvucYTKjSrkMHZfhAhh56sk6sK3BnG6UKFJyieBhp9PymcLR9ooZATHZji2o",
  "key4": "3XwgUV9ybXKV3ywFXLbHhiit9nasg2LeHPk1ah7YqmdMBJWSnq2szu6DLMuWc3tiYJcYxHHmyXQBcmChRPpofuwf",
  "key5": "2zGW4nw1dzr1dGrmAeEMWzKgitHVdZTfakqEh4UnRN2FUPUkeB9sws3sF4enWXWjjJ8bxgKcYirJbmciJDWGdt6a",
  "key6": "3k5P5X3H4yTBaeypjAvqDABeZ9CMBinmJNt2tKKAh6MvaNCp75rTK83AFups334LSfy9PgbcQ8Yh3vKAo2LRJBLP",
  "key7": "3bkmSBpEf3yuEuNzkxCFwiVDLFVrkSyQzxUUff1xAM8sepcG8xkYq71DW61b9dFYNSitVAVweTcg8AnQayB35tdu",
  "key8": "37bKqL8FCbjC3yBxrunXbwCczmCKZWHgnR4mtbz9u1k1pAikUeMkoPRqUxfjLoK5RZkMjCXTQ9sYu1yx42az2CCL",
  "key9": "1QU2TNhZgLe4tv1oYR9armzx9VZm6pwspdJS7CAWq9vPaHJhLRxucsMB2aG55k7SmHj9kFaYj9qXepsTb2SjjxT",
  "key10": "4ZUp1uFDZbVnr4Jq5LCncSG1JUvGH4NzKm2zsFdv6LS1w1fc83fnTJGohucoPzztGtWJbcUNaGxwtUVrYJGsQtYW",
  "key11": "4f4qxCoZksswrfUrjySqBfwGPb59QbGcTG1UWzVWoQupbZssyRAQXZA81nyvjJk1Je1e3B8BBZom8jRWBJjwnnKy",
  "key12": "znB4YB8tQii7EZvRtKvpK7avhTNzKgbvjDZ8RqVZv4NZhuDMcfJ2SwrLYiqkt43UwDe5HpPKv8VmyYhN4mkD6F7",
  "key13": "4SL6qezX4JwdixBVBiUcqB8cRVXfoewdCKjPMaz2BHzapkRN1me2oFWdXGRP8F4bNVSSRrituYvGeL9ntgfiCiih",
  "key14": "87K1H1xLFPLzH7nFVrtCcDco33nHTmoSYDsvFEKDheGHYeSyE2UFx2ZRKZYFUhw3R5kuXR96sjn5N5RP1sX1Tor",
  "key15": "9eB38sS4m7Z2A7tNhrMgohzMTdQNdPbtWhCp8HTB2UhCF8bLjDghMVNPanbsm7Mx2yewnyogUTDJQTg769pqDTE",
  "key16": "4e7MTVb64ztmMg5CXqvrGBocvPP3k4zgJF3z3yXmvd4NgVnrKWCRQardWtFctfEaJnacLMdBFZAGg2L9821A1z5J",
  "key17": "zGxL7mcQEXUGUEnWYwAWsGDrEBSGNXiYrcKscBdvK1iAotsCMYCEiHuwhLM1AuaQD4Q3r1XvEoUnJDbJAwydbFB",
  "key18": "25yXAHohFH5WXMvHFr2mwvjzy7kgYPWBTzN5z6ZH6qeXQDQTnb6BZqR7ojxPeXSj27VN34uGdFrB8VzDeN8GfF8N",
  "key19": "4emiixJKvuuzSHuudC3BVqJMcgMwA94zkYk4vxkLoq47E172Xg65zQb4xU5UP9HGHSMRWNj8rpdKAnGrJL63nUBH",
  "key20": "Y1y35Ejn59Bupi44AxgfgeoqEx4RkSr6cNCka579DtGz9YzYWhDBuEsEsCCHN3TijaYYqkeKpS5HM3qmF63pgDc",
  "key21": "23MeMZfc9nizCTwbxZuauzNK1TqiRTpLQ8R1vwfVT3sCMVCbKev9kjUMyAGobAcVgpaDRPSR1Uh8eGM2gKHHhMhU",
  "key22": "2kXhXaQbenGqaLxRaFF9c9PtS557GHLJRfEK2kYGvpnfowvxf414zSbbfJ29wx8NGNzC4aco7HUsBFFtQVu9xLjR",
  "key23": "THxFYKGLUWTpMe5x17XLyaobwUdsz5fLp8V2xbXJ8u7E5261GrzLXgb3RX82qpT5mnNXFaTmLJ4qwj8dkD6HDNM",
  "key24": "3Yey5c2ysf4NEBWxLGFfm2gDwkXHQAeoHf871u3Se9PWK4KytHcv99GU8cTzDMN6iqWN7wxzFb83CCspP34RNZF2",
  "key25": "65KABebrDuPQyFKXu3YrPYfJaEv3VGWqwdA3ZYV9wKVyW1ZzEdq77MSkjoCMePW5x7od7xYugm5ZRZZ4jsMe76t8",
  "key26": "sztBCHbtvFrHuzdAsqT4Zm5p7kkzRU7ATB4UnnDo3jqPE1MfnBF8EqbsvZwDXCESn3GxLsV336TBB8uP7DN4amM",
  "key27": "5ryhkWL5MBe5PkEcUHe1yU6Ytff5PRYSRSL7XC2V6hisUtVP2fNfETfXjHXFcoj5wLPDfpKgvFa5w2McCLHqkwF4",
  "key28": "2DfUMgfWK8UtarmV6DvKFewqZskDZFYXKLxYwgbUUpzZyQpBWsVL4SVbx7amNz3fQCECXPTU16bWzuZr1koC1nNR",
  "key29": "2N6G1qd5VfT1SpbJ6JasLA4Rqv8q7xNY2SnKXkSowJXMF8nSftpwSrxzCcjDC2xQHpMTP2qN9FnCrdjZJD8fFTuH",
  "key30": "4r4uwXz2GjbfAPgWUSH69KKKLrWV9bSpRvPjkinvwLHRtfYicViqBM9fEKnbfNDUZxs5eqzKCGsQmsrULCKdT356",
  "key31": "5FRkT3wCgnn7ss5BCaKHU6Vj2NwM251YMRfHmZ1WM7d66SSW4vnzLdUJ4rAkpMfCKQbEBdtGBYf5Xh5FnjTmy9AX",
  "key32": "5eFfhymMHBEjCaBhimDE7Xfji4Q7hm4grCxpAo5Leeha3QJZFbSYGP9e6xAtZyFaWSLmqV9RG8Vu8xZCCUcuJWRC",
  "key33": "4Xr4ufWK23ma97BerRCRVgcGPZmiJdf5tGQHCiBeZv2wBWwLQNomkhrQjdhk1dcmoMYNnTC5PXyy8rrT98QNxurJ",
  "key34": "q4UcHBdQW8fZNsSZuM9doKEh8y4K11peVfBKzJaMXWXhQcoiL7o2xYoDGdiXuSoUsntw9rgtoZiaAL9yLKwizbZ",
  "key35": "4BoUa9KD2YQmGzxFQXTbv9F6z43LJ2UXUVVAdNDBWvvFELsoknjphLaTqFfEUkijWtnPGKVAsm13WaJDVNYyvNNS",
  "key36": "2uNUJvj2TNrA9yyoEFzBN8rma2cHrGRgbwm7fCvbLmyJkdEmXVC14yDXEbwbqomVBSzvPdBEejg4qpk28So4TDmn",
  "key37": "3Zjgex97nXPToziyzQ2gNp2MgranXNooHHUr9V1XBNvjBiahTMRAHYHTWSCswNbZL7MUabmSixazD1xSMUL75u88",
  "key38": "5xGT92mQ4Uk1smhghhiZFnVyJGyymiU9ULNWbUVwBuu9Hoxb8ghGpQqSwbbBdReSqAqrcnaqjdqmHoj8hPdPBf4W",
  "key39": "5X1fFmbo2HA7t47XQShV3SxGQ7HyGuwWh5jhcdmEMjbjssBY9WzxomEGfyUm2tnjAtVkp8nF72VLGP1JCs4kgsKx",
  "key40": "4GcxiQ8UwT4jVx8eDanbX3vhk5N4DgQU6XSw97NSzBZtgiak5zfJgzMh43CXoC9GL7oitu8BBnHySdqSDtZDiLcY",
  "key41": "4i5Nk9MMDX13chAUqRYNhj8uGogoSFWhEnAQou2nRxHRCtQtssMRdVgr96qoUiKSu1hgMZe9hJuyUyKWCfBZtUiS",
  "key42": "3WdKZ8fVwhXRg4aEMoJdNNGAERDwYrKzdunKG6zT5mGyuzZGKun82cz3JqazcYGxtFpwhDEAbTbjQFKErYHmf8M2",
  "key43": "5fEVCKp9JnxP2H8WHNWR7rkzMyUvMQEgVuue1fHUXHkgjMFSwiSqDLFkJ75qLKbwWYcNrnm4MBPvwJLapDZYv7wS",
  "key44": "45LdQxRSRczJRxdByay8zKjwYdNYiZend3jHzeQprSxsmBHzWXKDDK1YoiDEW7QHtKcJDCebRLAyoQGUQFmZoieX",
  "key45": "3JFmVFHn6X4qYXPH1TUXi6TiKvwdEZXQC69YVbV7MFRc8WEf1N9Q8drE7MsEuD9HczcUSZnJocyrHx8SP6oywdkv",
  "key46": "4YkgUuob1WkSQBfeQQ9DpsHLx42PpeN4EU4FoGgYanB5mWBbg8FbdupNBUXYFLxGzZH3abvFgpbVoKeviRtk941f",
  "key47": "5mneXEcgCdAAkRCxKj6fmESrYydK3ZUt8Yt5GJf2S8J3WMLZ2DoNNNsJGJSHL2TNRnhNM1bQNgc3vae1aBMaFr42",
  "key48": "5UY3TmHxPBtY8D7GFnM5zE5brNeDLnpnULyCPbms2y9ohPWVgKNErn1BgMbDbGNfiuRXExr7WHxUugjXGYbuBCGH"
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
