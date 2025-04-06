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
    "5xeAG6u1dENz5738k9ENBWB3KwNYJBtPCvXPSrg3iymU8nwnnnjDgDXx9fbA2mbqj6Px9eVezh7ktZY182Xw8Mgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ifLiEcAKw1sg39VnWZo5yKGRVt5TW9QqdStV2DAbxR4S7qDLyws4bzwjt164VUQZ3GaYhWaiwZjhX63UBSKvwdA",
  "key1": "2nMpmFXo2Uuf53mW4KiRWVaSL3XnUFXwTHB2vNyvm3b6jAEZYJgdzuNkWv1WD3yomkEY6YYNwGzXNbJQgWV8XCdz",
  "key2": "3hWyvLwnuQvWxnVcWevR7LvCen9xSBJtuzCPzjvUXMyzmPFaSfomt6zfpj2GPbvz8AHVqY9LZc3q9fkQMHdkw23G",
  "key3": "2G9GwCJbd2vk7kDWtfjvRbfX4MNnVAbBAz5VpTeWf7KTEUwcdzF1PKPMW6aRN1XVkiCsfXFHYV9KDSVa3LDFhV9h",
  "key4": "2UAqjxfkRiSrUmoqAbPrqE5iH6Q4yzqidHfFXdNyph5Rj6MGcxn3TxJPBhCpgNPaASpRu1fhQVuqAjBd19K8YfA7",
  "key5": "tc63NF66FDHF8XzWZKmrDKMqxNfygH3piXmE9KUchgxfx8QBw3L3mqE1Qus3gRe83qGop16gq7hebFTnUn4sew7",
  "key6": "5ST1Nn9UmbimBpp5aJFB4zMjfiPwCtnyur8MeMDk27bMS1AcieeNn4HBfgAtQRRb2NgjcHJjpoZu8g9hC9R3JaB8",
  "key7": "k5RN1vBtDrWycWFDQx7mM2PfZkQPeEXS2uwsvy4XhnN6Qa5xt9cUdCukkvhy8pcqvwzNSLKkJokBctgERKMJr5V",
  "key8": "2ynwsvBo4fmcifkaGQRizSWZR6gDCHtTeF3JWFnGav5uqDUzZoKAXV86ReyADcNMsyGni5bhqQ128dJWLNyjRcRC",
  "key9": "4NEfxQKeVt7D4sf2LzddgCP6HYAt332PF5ds8tiZBqXQMpobZ4QfuT58h3PAdkSBHCfNAmUWgMx2hA14h4oX9amR",
  "key10": "21z5x9hfbir4x4jm3pZXybgKfpGJVUsuCWNZVLKUda5Zru4piWnLtDoJoWvQwPPZ5oLebBHriFECgb9ZnXdoJZVx",
  "key11": "4e9iiaaFTTrpfKDqZ2PsvQ1hsCv6moGkYUzMYSJYfaueXVfUzUsYWYAGMaTzhyMTTc3Fmxgf9sBosT4SgSouxY3D",
  "key12": "fX2QTjX4LpDCM6dNLciLf5Mjd7zRuAw5sn2HxG5nQ5KgPQ2Ug2UVbak6am6s9VrLHYK882RjDV7vbHTQ4JxLz9A",
  "key13": "5sTQhE9p7BgRWtY1SGbQZ8zVTLj9BW7MXYoPcWnCJBLp4s6kUWwn3wRPFVJaSLrWjvMLvpaNhsMfwjWcWFNqJxJM",
  "key14": "377LL83rh8tHk59Zn8urqrKktc6TsFkmMPmyHSfYvrL7434ka1NyCremvNTk6T7Gs2arSvWvxNG1TUBG5AvS1pqD",
  "key15": "5Rnuu2KE4z8tSfU93DoPTA8EqtdJBoUU1WZkB3CDdZ6s8eyxqd6wBhkGVnWenaQQtQuaSCrZrCJGLP6CMxw43hqL",
  "key16": "2Zq2M2pkWHPKtYqM23bq97Ayf4nP2UBrry2WWytZshaBqWNhJeH3gowNzrGmiMS8qrhvDdBCjZgPoue6MdqZWmqR",
  "key17": "U6QDBdQedZYS2fAE2YXiXwX9SzMt3iMTQkXRV1VE8Wjo6eLoMzP3TGrmtxbADATLGXhdfU1dQ55UERwURLCp8jU",
  "key18": "2D39496odxES3ihLFn98ffUy2JKTceKvsBtkHCfoTuQ8Gs42awCHEnD3bmwji5eYE1bwxZWDNCu9Lr51SbSLBcwv",
  "key19": "xY7NcAzyLpmA5Rdorc6pAjW4aSnCPTSMfpxSjwfSqieAkuSvwgrYLrx4HnP8mZDy1TkJMjD3NdwpygZz1Zg2Fss",
  "key20": "2y62pC8mWsjyKHAwtWowPebCK9gjHSNSLLZB3Ejn1PUG8ixJYn4TXU6ATaT4qtXfsbF8XUTNyyzZ3pnWoaMcPBRM",
  "key21": "2VuC7skhhe3hMmUSw3kNvS2s7aG2Zvw7HkF6UDuSUxbVSAsBL9bfuwS6rXNgjrpgcEc7bbZy9DwFMt4Sh6H69xPn",
  "key22": "27vDvGfL3NBzNC1PcD8u24RPJrupv1a8B2FjqJZYMo6Zcxp7vZyDUF9d8ZxJjM59mx1L9mHe7ykKeBFVXFi52BPp",
  "key23": "2iEonLDWoB8J9MsLTNg4qYvzeeVGbEpyGPn3S9Z7Szq4hc8QJSyT3zvcMjCq1UsZ7SCQp2GcoeQTJrLUL2qZBisC",
  "key24": "udPT1tNKJnXYivqx2haxmVozLo5guWhKvp4wTnzs24axWjY2Ezp73Mcsre96mscNfr4MRwd36cPtpoGFDdyGHGj",
  "key25": "4T1Mo71Vwb5eDCamfap6pqbUFcaPzhYrimrKQ4EPeMG8tbUuQuqhtvxxBnpgXCdwVYyTMuYW2CW8QoPRQVPXVNs5",
  "key26": "2QqokMTscibcRuCdS2uGmfZJB2AGkAKg1eaSkQ7wv3rvCKAdz3ydk3wiDjtVwruuRH9JSUxor1evQZSwePrZv4qe",
  "key27": "45pwWp5mp7EsgyiX9uYeqsCXYXd38ST61Nb9TRWxEQtGySQxaHXtViirfn7AHExUrezAQbq3aLj2RTMfu4Lrtfww",
  "key28": "2SuHNjNbsyYjMsC1u3uCpbuqxxa9yEvjPkVv8CcsmY9DHsVB2Bjxh8i58me7GYe3kZx6BWU5FkoXZTSudzEzQ9QQ",
  "key29": "2XGEN3X87FsZUorC2ek5aJGvTopvgHPYfQVP8uAH8rExiv8Uwx9xuYY6R5QTtbS4vHbHNRi7M4JhJKPhGxCmdBc4",
  "key30": "49oHvhNoQegVrDDMV1zkpK8MfrBnDoV52NAEYgsMecaWMsbuabLiBy7VkY1qK87vYJZjwAkyTYnrj9FAncFrPyPd",
  "key31": "LLAZv5oDnvwnoKm5kvvUpNYhLsjHDkJ3fAP8Nf4vA3cvBTCkzXs5FtMjBWmLFV9br5xTei4ov3HKzZzQTdg6kmp",
  "key32": "sy7NPFAtHnesEqWytZfvXFB9oj8EE2G4KmbVWzo92EijtqM6ipC5ixAV1fKyXS8zP5kkzFGUBKfSAZxhpJn1Kmn",
  "key33": "4SzFPVNtv5VFDCNNcX44Y7mYsbzm6tfQJsFo1Ph1xVmjjueANqaP1hV29fGoVpwLYagYif23qTr1Kn9drvj9CEi3",
  "key34": "TEXtD1hJWfNwyU9Wdnt8J96Tjcgvi4yXjRrYBuMDwPGo1ssgRHiJeaT8XpPRdVfdBxrMpq6o8Kay4hCKzqz5pb8",
  "key35": "2PVa8YPhd6TDoMpxyf9zhTShL9qV6du4GSWcqsFfhcHcugemaKvWjuDsqYW2BBWbYYEUaDtGNjP4ZuXserujjUGf",
  "key36": "2QgsLnZDEWiMQY9ZytbxQ25txsyBc1nQvsL5GkMAJVNdfqUPM1CAUbeiYfANeFKufuyGBoBirby5rN5SA4oiv3pr",
  "key37": "3a1sYoGSzEMwL1kqtRLyNVcrB4vaRAzS8mU5yH7pHC8xXWy6erdynBJf5VQdU3ryJCBFacfzgeLo7tQ4LyEmeWfY",
  "key38": "2V1ur63TtdpVeWMjKnTCb3jze7tLG7CSqkRrnfQo1rBYigKPbvmJCYsQ5qTrK9Aire4zzFvr5hHWeaJDDY67UhAe",
  "key39": "4pPFJBhv2pQnEWevZ7qa2br6yMJam3ZzTgczZh5ay7wVAv3Han8F4frSG9uqkLJBAzp4Gg4mRRU2n956TJiA96oW",
  "key40": "5yfMVsjQBSpgftCR8DYqsnxtCdKvjTiqTVrbpEfrsLChKUUNfE9VZPJQY61EwoUpG6BCYMZR7JsUDdxRQFRw28a7",
  "key41": "51oMfXSxWPXp1V6AmV3BPWVbCahPAJe8T3J3tUkbj8hVRdFb7svWzcEbRX1AsDmfbMHMfmKZFMTKtbKSBbu4xE3Z",
  "key42": "4MT9pDdTQYczawRcjzVBGfsVCTHv15sbrJatBLx4ddAbeZ4wDZnNvNtJ5mWoDdsFvnzvVxQcz1keU4SZjkiGdjRj",
  "key43": "27goPqTAmCVKtDMJfCoPAjTRgpDDygXqcT9bXSh2zR8rkz15S7j8gPxn7ZD8j7cGhgoN7NPq5CC2U8FzvBQRH13L",
  "key44": "8mUEq7qQ7XvfW2UA2vuWBxBoqc8p9FjbV7De3tr5xtisF4syxhdMydCckP7NEbBMKwim8msxXGq4T8QVPXCNebK",
  "key45": "36qwv79RHuRhrJhQShCTeCxtjDC7hdMhMexDYr7ni7heToV7cww3XppTezdDf1Hu7CPobpNd97tWKaBrmiGVvqLP",
  "key46": "znYiRTbJsWGSVhmwqx1LjZAaZ5KWcGghJV2uzor8oCa1ucBig6V2teGvcob8gVea1EAb8UEpLToGPYvEk7AAqyB"
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
