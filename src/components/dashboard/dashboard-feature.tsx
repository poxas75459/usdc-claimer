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
    "4ZpLqbix1fEBkSKqPKf3VwUPUzzeb7EH98iMGr1hXxcEazTaNjPeBRvLd2nxN8NXDDgs8DjTjesCKf5NCCf9133t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YCq3MVELevysZ1k76J7gfLf9BZ8pGoV47tmrEZoaEgyXvupaXZ93iNtt3cEum91iiR1H54LjJUt2sB9sNrPNBQe",
  "key1": "tG8nL3WrajvCCijFuhsrZ6Hvo4xNh1TEeSmWDz1hVQXvnZiT8DQHJ2J3sVJE73CzUMsdd7Qi1WTzE4oTaBde5Ru",
  "key2": "4W6F3TGkerab5T38PnSrNEt8qUC9CwTG9FtHGfvQtrUtEeshpJJc6amzEMbEAxHThW6VUcVKBAFaNGPjCNbi9Gkk",
  "key3": "4LZVgb9JsLqMtS3cYgDhWCieCi4LdadC81Sf1HqKKw1KA2YLfpaaSY56cZ8d6oZ2GczN1MaWa4PHmbwWqxFzkffF",
  "key4": "5Ao7jM5UAoCLAKVbuBgbnM55FYEQ5uhDzXUndvhS5UeKyVHYJNVcn99ykMH1hoWqFoDRZtgm9iMPhebQF1PubgCf",
  "key5": "2y9DWKoX9kExLRe1rAHiDt8Z6fJkBUSzXZeLKeDH563bU6bJQX8v4SZcFTpnPuJv3bBiuMiwRrbqwcLb5EMNRB1i",
  "key6": "3GHm9xJgM2df7URg9i77hLHeK1wYjDuJfbefw3AaUkxUuuge9VzvBAeW5oiRjoRf3RyZh52HGH7aaeVN3LF6iYn4",
  "key7": "47qozh6hY4bzMzCZdncNptrHBxYPnRwt9vcnd6cFtqFUsg8E4M7K3QWcwPRPV4AtLPV3zjNSHjtj8ut7yvf55EGs",
  "key8": "vQFbMJ2hmEi6xDRrKYiPsVa1i2SrA9NLGEmKNNT252EevoWMrUwsikqvDJ4kRxqXyu6dC6Bn5gP8UjYKTCo5w5p",
  "key9": "359KgB3GJwYcSGzmt67W3WY1SSeQu3txubZxcy2bktLiN1swsBJ42yLaSsAHPsMixpF52XitmVR19rGFgyK5D8Wj",
  "key10": "2mAxnNmqqydFADYMLxRbBJ8k41ZBbwXND5H1HRAKZczek39fgLJxmLa7EohFrkMN62EzU12h9jUdjiKY36fgaKoi",
  "key11": "5Cpzk4GPnic9e43SyHSB6DHsxK73Xkfax74KkdetbkUmj1AC6dj83NNVJCsUC8rsQR5ghM5rsZV4t5aGMssuBtm9",
  "key12": "aUrU5CAn3p2kznpnyryS17256yKygwMdxFGtM9gJJoS1VrCxWPCgcW35gYa12LW3RHa2mZqe3WjSXWRZpeizzVW",
  "key13": "AWBLNH42J9kB7kJfzMiq6QPM1H7gqB3m2ukjMsSwHnxtTVaUZZtYtPM1uG9MyosAeYjhqATSwU3y4dRrQmGad7X",
  "key14": "2H2np66f6bybw4LRPPEVVVtR6LWrURp1AAqpkHHeVAAXpKnKpZPNRFFAcBwuhYQtBXmoTQT793FQ5Ju49dt6yzpv",
  "key15": "5os8CGT18qV7f7vQzHix6sZEjBGhLJ7MjvkF4kX6wHkPdyqmvaM4Wh2Btouc5PpED4BAg6ZNRADPSWJXHg4wK8Dq",
  "key16": "5aZqvAgm6S2Rv4BJYm7Azkwi8ektDBeryEnPL86o5EtaxnDGa7DwmygbHFmqx1pcfWFmqoyEvqeowWL2mvQeJEHp",
  "key17": "3Tw9TUeXZnDC2ZT4qAzuYg65LVkna7rdqDrBFw1yY8pFvzyPQNQaoSsh1fUg4n5FL1KeFGbAWuaNN2e7pak717pJ",
  "key18": "3nh6dPvrMxmLRxTc86pEYM7cAX4LjqfGvjgSfLCd6RTEzBEuAszXgvtdb5L5Zi1DhFWvDrbEfsuN6Ge5V1ZRqFXe",
  "key19": "511XB2bwrjpoyzoBqiqmqGaRw2vgPWtHoHJihRLT5BQ9aw2uXSWWBBFPZYkujFA2nQCCBnC1grQxHEMpCYhLvagM",
  "key20": "3x82hAgM19vxeH3U2b19e9pLc5TLEQmbtHkKV16yGNd45ohLoCK9Xd2gnUuWpCgCUKWNPWxrbdvahgYq5NWKGZ58",
  "key21": "58NAVeo3kNfTTQfzW6t962ogd3ytYLUxHMsmpxMqeNhvtn8Hm1oTAWAKLWs7qb1XyTuPWkQHtiM6trDqKg4xdc3Z",
  "key22": "5f7C5XXpFmNhHSnCnVM1KLbarZnoNvWZtcgTC3z77Jv9TAbokeALDuX4CZRGT5PJDNnWb4T8ngd5tyrmihZbGyNb",
  "key23": "2DLDu1LjoJMaf3e9JKQVuKFwHAUthH774ig5L2oErYWkTiBnK3yc8mmCcDiMbKjCA29sVaxfypBmPnto61Pv6QKt",
  "key24": "nmd4BtZyszs2cY1sFt9fKZuje67WqCrmoojYqTdRXKKSGYDSDfYQc4o632ES1hNNxwtYXHJ9xuLvZ9zxphJ4aQq",
  "key25": "2MJPNrDiMpKALJFKXecdQBvrfR6XNLJhT2imY7ZaD1kXmmtYDetY4GsPBr92zRUHEhQGUVTn18Mjxe8iRT8ouuRB",
  "key26": "4qDWgc2g7pVNmPNYYAVC7AH9Fn5DnkkGsEZ5JzEFnhgfJa731PhduDBJ9scCPUgEsYHh5g7yD9aBunma5VAzEMff",
  "key27": "nX9tiD5kCsbFxJNn6qWoKHndXKVeZ3WSgH2Hrsmv45RKBH3Sh6J4VYGtxz6dUaPBHBaC2cHRnpNCNNEynUSrpan",
  "key28": "3B3pSmrcfstAXErMUEQzgRrusSLVMtRa727hEdaMee9TsYZvJ1UD3hGgMrr6fgoQ6xpqjX2MVQUzzypBuNGCfikS",
  "key29": "3hyhsVNJXHcjWw3ZfRGxKA1X6AHE2L2cEKNAxa3zuR2Tn5rxzWffuqWmerHj4vJ7yaFaT9agppVBNSULhYAH2YQP",
  "key30": "5zJnMd7541tmieq1MiRB61vGu4btPcnJaEDDJpM4TrusyJnD7L5fMNFhUHtSzXe49neii28oBTdP5TnhDhpZDTTu",
  "key31": "2WoFJM82roTxhK5WxKPMHWUgTLwsmvLN4WuxpdD4Q4SRoPtykBssnEhFquid5jwAwCJe3twh6JMemTkn67b5g6Xd",
  "key32": "nmT26mMoWck72bkXYBwZkY9ZXyvygkUJkRRTBGYHzgNQUzLAETg8kWsDZL3L7vrJHAm5LzW74ecxvZEQm1j3JyM",
  "key33": "29y7upDGW3vyQP18C2xYa6kM3vb3cXXzAm3xPyugmwZm4xMfKAFnWUMia2iGFfR8c8481SnNy5oUtZKCr2mmoWym",
  "key34": "5gXTrLQD5t9hT2hyPUPouXUnmcFjDNMiGmx7eNbiiP82PZFhBDayUvQ7iQD3FNKLS21h5EooshgemAQtQMUc9JMF",
  "key35": "mGiutfzGyDuePhJ4PpfBLbq4G2ahc19QMVKrnjEfm2RVtqyUXXMQ4LYoYGx5MC2PLjwEwJe1S1pBT24voH4YDZg",
  "key36": "54enVtvQJBeQan8GPuB2gGjpWQZqL7qiCpRuCmt3rateKH5KMEbhAAprdtft8SbxAq8SAZYzb9MqdJNoJasLaYER",
  "key37": "3arvVR74haudHXpradKM1BkqfbrhZngMmufBzbqErB9FR8xvncK5TNBo5FVPpSEybCn1TPHcmKvstockV6Xk1VAg",
  "key38": "3KGY3dY263WhX1CWBmbWSNUVGA2tCZArau3xJaQw7HoBmCeLCGMxRvG4AEQpSigrxAd5TP4wUjf96CwmoMMbKK9S",
  "key39": "4A5hLbcbc7nCtKpCUCjdXDB8LVTo4Uqkm7KbqvXRV2wnLNooKUauQECf3zostm2gvUMED3dU6VXHj8Njxf54pzuy",
  "key40": "dxkiAFQCfr5WYNCb9XekysHwr93nD6FTS734kZ16tumtPHCLmHFw1DtQhNiJ6fCXgPcoBy6GrZFPYgvTb4s6cAJ",
  "key41": "yLRBWLwUgdJUrget1B6H2svLtDwHL2pTTsmEALzveDop4x4AXRkxYjaPrRQc8dVAPEXpH4C2Ci7yRnTFu5EJsb5",
  "key42": "4w7M9uZtX5Khq52W9LXKJsg16txWGnBFXh1u4yGTwkeX6mr7zsr3j8gaQsnWfU9stLci4Pj894zKZpd5oLXAemRC",
  "key43": "2ziU2J6EDyv3mBrcSPZWiSrAsNsu6F9CHEzvDyeTy4YZiVg5rr5G1yVRYHaUXgAgyWRXds8afkhz8p5W7CAihagb",
  "key44": "3MriHzAVCD77pKNcDY2YLzz4ztVGrkhuMcozAm2HrCFBL6nhqoaYyee5cyLcF3rg7FsHXaubu1o6gVmtGBEg5h5J",
  "key45": "aKqakfnEUNEryNTGKod3FqumSRjGkz5LWFUGmM2MhLxYdQNohcydh9uGzns5b8rewWR6p1aM8CbXMQHSnkyoTUh",
  "key46": "GY1w8AGk1ZZs8qaChynTCpmpqxJdaNtC11Lmas4paW5HcBdt3bkXvnUzDynRj3181Z1r8m12zavoBg4AqiTykax",
  "key47": "3K59pL3FFECG3TgzbzRw9RTdGKteeYkabKDhVEkWKd7iC4Gx7Wu2MzTSm9dJsDKHYuhB4PsWfMukvrii9ufoGTE1"
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
