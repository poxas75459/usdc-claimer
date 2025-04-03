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
    "5b7sf1dyEBsoMvyazzGkNGa75j95WoaAzEwYM1xauYmSoBjSJmZiK8xqbp8kvoTibtKsxn5tRk9RqNBZkz3fxjVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vR7nRyjBf6mXmUuRtvCznyctyK6VrZsGETBb5ViJW4YCgCaZuSjkjCqEaDHipZ7WZUq3Zxa7FVfdMy28SeYmmU8",
  "key1": "26j7KexSNNB9tEBS3CD9VRNc2MdQ4dnMcecG7PyBvN366vgYTGtzTrJJMsrzDNmdnax9nu2WXiJaeAdr8hgzPKGN",
  "key2": "3VL5D3GArBEPd3FNHcTmTWsNxWMJavFGUnmCqZMttZaRvtcXJ9junvJVRE6x8NFvFLf2wcFWinKvPgFY2NXcqocd",
  "key3": "4Em3HCxMXndAUC5BvyvL4qxpsEGSAVEARi2FVLtMFN2HXeJCD7AdsHfTnTpHF3j7r6e6HJcK7BWXBwFp9RouydiL",
  "key4": "i3MS5vL5SM6SD1Lwkcvuu6sisACwjmswdQoTEukeUqTc7HEwZvgPhgEAA6ruLkKjbKxwwgb5QjFH8GEoD96zQiX",
  "key5": "18nJY6gkxmfYySSnEHGEBZVYNN1BNazGvWmbTtstZyh6ZCATENQ9uekddnLnN5fFwqAx8XL6AkDnseXWCkssr6P",
  "key6": "oMTLnVixuijKDZW4uRULn3gVY4P7aeXCYqkj3sRXHbV9U1eM7LBvhJrzwhzrszWkTJDaxsyLebwoZi7XuL3HFWj",
  "key7": "2s2KoSV1XcCVYhLzJYLmgVYFwvz98NWmu1y65tLwj5cJBprUu74LkTjAwxdWyY2WQBZbcoJbxAZ2LJHdMTrZYFmq",
  "key8": "55xbJjQHNxz8FmmAh7Ndy5BB8A3j2Ao7Kxb1djNsnKmthrkR6Hf6W7RJQPFRaj3RUAUcqWppfEAjeXgGpLLHGNPL",
  "key9": "2uZuFK4kFzkWU3Aei8NPQBtYqgW9N6SzLdRFuAAb5hbZjYoMEBTLRm56nXyY38Y8otj7hWvWfqybqwqWEFQY6wKu",
  "key10": "5qvKZP3AeGXimeNauiEog2LcpGZnhF5euajBz8YpVaRZJeXMorsYTqc2FR8HA5gduKz6ZJCX3Vze2gJdtVPSTHjJ",
  "key11": "5THnnPXR2PGJaqoYpyyRS4YtE9u1x1EvC7ds1vgQGJH6pU5D8iQsoxB76guEGxnTF57Nac34vFmKCmfN7va77gyr",
  "key12": "2iJtqYZDLBgkDynmcnS4wnZZcCFja4v6otTYSxXq1d5t3b3SpunmFVjsf8RfzfEvukmbuK73TFq9yH7u81CtyCvz",
  "key13": "34azAjLQ2dZVNwGyfcWjQ6dMVLohmJSSrrECh1CcGG8LLgJL8GP6ndDebcN6NN8vEn4XX2j1YdnKNqrL6KqhRhUj",
  "key14": "5sMmw52emNhQyP2YZdR9d926xeeJHfWUevd9YFs6RqL2pruL5kZq3HEfHmd9WfX8zAZc1pCULkxMSviPAZwJR2Dg",
  "key15": "5HPEc2KmZRmRx3xYHc7bakAkKy7sjV7hvJr5BSnoQeuQsSkec2KpACjiciXRDZeYP6BzABVoVE4pezF6Zu74krvR",
  "key16": "4R5JsEmFf5VkuKbevo8ysfpkzGvo5HmdQM4PsgfEVTNiidiYphF2zT93G6pwPWSKFmKFUi5abumZF3FwqzeiQ58P",
  "key17": "5zdW2JA7W2gtfHjpLR2dUnSbqoUFrXhKcQ2okkFZ8iFBHV4wzPyJ1nXVhoW45Sxamkc32RLoPckEQYgFBzdo8PXT",
  "key18": "5z2n72hrxoYRPfzKfq8oytHrrC3KAn5jTte5yFXnULua3QoJS8SbTkUHf4zdaL11a7EXbFi1PYokqJnyNb6eXpma",
  "key19": "2hVzgkjDh1BVqoxV9o2rQsFZeqRnF37Evg1ABDe3cTz6TXAndwN6U3YZVGdMAw7fumDBycjTvvN6s1C5wRiE212E",
  "key20": "3mJcffS1sgendTUjRCWQArLfWLgnAnWu2PT9TvDU3Acxj5UQnBPqmEKPLJsmsenAaLi5yj6UbZxZNhh9C6TpdwVP",
  "key21": "39SZP2YzHPajXg7xHysoKesRCUn3HsnVyk5k1D1DcjnJdfumvyyqQcZfEki2QBwNWLamvPZF7KEkdKyNENjy4oaP",
  "key22": "5P9pwFEDM5Us5FeR8waxZDNdGdWzFC7wyqENmxeyBbUv64aKRBfVwyUeCLP6VRLs9tJQGvQHcpPs5rZZe9sM5XJo",
  "key23": "3M5QK4tNTjtgHLrd2MtALSsSNu68YW5utq5NM4q1ru5wBCfmQgvzqTUXjEjD7mZkEZgqbfxJn5iQ7hSwxNypsx91",
  "key24": "28iSrQY34KS6FGUXrQiieLcyVpaPuJ1x7BcuAZtuY1N8Z2DZSWoHqmt6aFDMMaNZydMZYwuscvjMZ1P6WiSEo1VN",
  "key25": "2tEpxujgb3SQYLWpyHybzFpLuKdUMhKKeeoTHy2tFqmUsQ659wvc4bP35WFR7ptBx427W4nhqG9Wqn3Kym1HNqFv",
  "key26": "2rDxPF336CJL8RsUcqHGMJakEMtCGLUhfTtEqxafNTyGHXhgGi12XS1Hw9rgWd4ccpuraFQhvzfpJf6Qqdmx5QQw",
  "key27": "63aTet1WGZLqzexCxniH11D3noPWKqK9PRTiN5SLAz8AhdM9BmpvwJ7s1TpV5gBPmNhMeJ3tPK8FqJS9dWPRvUaZ",
  "key28": "42FTiNrpypDd9tca64Q8GJU3QJDmahESsU3xm9a5Q1kdLcZem2Ucq9ME2MBNyD3a6td81Ufm9LKXs9YDPbiA7jaF",
  "key29": "3yeBbNoNFnHGqHXqJ3tnjHszjGqnLkSNck9xmXZj4dB7LEogrD5ziifbgQBB8rTMurXPpZQ9W8fXfzHCupzf4VqS",
  "key30": "3K2mgYHK22fYAAZL1Eu7fPMtzKQyJXB5QVXUxGMpJK6WnLmX3BJtiLtwsJuQvS3pFqjv5cL1wMKGCtBbci4Fxh4Y",
  "key31": "5A3u7Xx1ypwkfCVRtENRCkGxGTekt2T5ciGPHnE1D1oZ5Aak2C3dFmSepLJ18XnMHyu9bVAJJSaUDjsxQQa3kpbM",
  "key32": "5QemuCyLgXAqYmyv4NBgVoUBtpr4yXnUvsPH8N7kiHoJHTqiVvJGCtbu3iPVBfZwpk3cXkY5uFjPsPjGRpsZceb5",
  "key33": "2vmvcgaFaXDEoymyH1GVa88ZuBgHFfkpdxcSo8aj7tNHDLYXFabobQG1UMmcxkrZxsVKUWNTDjtVZAM2o14z4DTd",
  "key34": "QQnPrqvkSwtvMKVWTugjKdGnesZDNy5u1nYa7hsu39DHvx2ppnbx54BU4x9v7qpaLMqgc66y2FW9GRWcthxJKzw",
  "key35": "3hxsK5vbHWtuzfvTjCW17woDJJvo6xd33SFvDshwduRaUE8N2VwxjkkUSMDp1Ax2bTkaHFXERXUSf8JLjRicgxve",
  "key36": "1BDQWHeXVvBxXpotnFdrB5J1y8o2UwoBRJEsu5n4yD2jzFUZS4wC7Yvw6xmVEYY3rxCiBvqzEpZY7Jy8sKxe5Ri",
  "key37": "3WVdnCNPVTYqsvauRbJbb8DXEbCLVjiScPsHBSmcpMXsjXvqVSG7ozwk635B1YYiQ81BMbx8EdSuXxxNoqz2TdZf",
  "key38": "ww1ngcEw2kQYwhku5uhmcnJJ86oQpSM6u2MKZUnnjsBeoYB48wfoKiYNzZyb2wtVRk3yRSv2rTMzbgQ3trZWqnu",
  "key39": "2oCcwNXaDFnmJdQ1dMVwgr85mMsUsiZgVgmepVRhx7w5kQTT8X6US8tynXTaA9Cp5pB5sEYk2dbk3xs8HdHpkruM",
  "key40": "2uSUzxmYhxqPXZPncX9buKoDTHap2FhjTCeQQuCg3wwy9QthaRGXhE5au3RzkpYwwYSBNUZ7G8vbVoH2FP6HiyUk",
  "key41": "5Hs6TSnfFRQSbU1uwjjpcpdKs1AspRRdPyySgaxTZBYgRFocoSUejDXeabwrKc6DpDPyfyA6pDA43ymmgVH23VVx",
  "key42": "Z19Co5SvdZsbxdY1Nzq2CZmJ51DgH8C1wFMMoDsup3eYX3DcqpVdaxWxk3aFCv2xLnYdUnL8P732DTmaFacBgfk",
  "key43": "4GZwk16biz7zDum6h7Y4rJcMQbDbWThskvGnavdrhsBZiWgNQEeKRM1vi7EyK6BcDWfMCfGJ4K8mdua2taSCkm2r",
  "key44": "3HTNrsN1F5hQKEwmqzgpLZsqPQy1E7jSRqEVmFLbNnEYsQKvJNAxU82j2j1o4dcTQ2wvMV99zAXt5rf2CQ9UjCwf",
  "key45": "4DGHU8rKQt8t6inGGDF7JWKkqrqsL1MaXaPLDtwdoCGdYCD6LYsm3aqeorBm6sKXxzmAH4q1vF88JzjJMFACqPu5",
  "key46": "3RJpjuLfqTp7vigXa7TrzsBGcDpA84oKq8cUeF3rCbEztQbHP98ZKPVCKT8m5Q1wHbYZmvGB7qbnDW3xruaHFenE",
  "key47": "41W6VMoizLY3yjGntBCdVGcZAktCxCuVPWCLA9BvVktMtjo4oQWDP5w7SAQCaw2CvRXazapuCWsHFfRugdp2TmDW",
  "key48": "4EnfD8jBGXsBCpHccvjq2q7N7CzQXFpE68yE9S9PnRoy1gLmFGeLLkTxBQAH4NPSrm1nRiBi4oNwguDCNGCEcsNf",
  "key49": "5e93Mt5zSxGvRxFKXCH62qHn3VJwiE9A7dvpeRrXUKR31vLwu8PSyghdWdEewFmqP7Tq3hLxMZhBXQ9UhgKvpxHQ"
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
