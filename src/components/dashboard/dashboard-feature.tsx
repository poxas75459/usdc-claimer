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
    "3S1Yh6rJ1F7t287a3iGhMMMBXjhy9GFTrhfEn6RKDbayqtgMtdyg2UpNeHGmg8LWvJVVAiaoEFdrWacFy3V18KGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JUEYz9ZkDqcpNJeNB1C93sWZKQfhPRQDfQNj3rKMvMj2BuF5egWd4fSjKFTt3Aq7VQFbtvjpnDV1UKRXh6o9Axg",
  "key1": "NTkZJsvamqv2t4aF7mB6NKj7PUsgbWjAmQWhLg9auAqBTqVk65VzeKSYE9j1u7dpMaB38VoyNwMEVvC9hshcUtH",
  "key2": "5UeRni4Es4Wa4gkCTtq4Y9EoDsFjtBNbkgj3ENkgLdwHa3YBy4HpM1L7pbABxnAwnQQD4sUTu2V31HuRLHknfRHB",
  "key3": "j2Aa1tKGqR7b96DJL7qqSS8acD4i9MDsuHB3aYbTVUsujooAFp96eqR468sYw1igAmfMSioDbC57rC3PaLnzTrh",
  "key4": "4BKkjcQpYixJcu8XSXV3jr2p8ipbgxWW3ZA26B97wm6QAq9bPkz1isFtBGJfyR8Wt9nvxVBtkNdJDp1FFzmrcRPE",
  "key5": "3uAFBQdbTLStR8uENHNXuHNof9Q5Pyd6odAGpPSMTGP8XXpBp235jNEKwXaePaWtRsVwmbfVXv2WL5xLmRhd6zoX",
  "key6": "2GS8LGxZtreLiE7jJ9gjqiMYue9BM4JrAUgk9pqaRAHgBKRhUv7g8TdxX3q9mV1WLukUEAN7Cq3isbaiFDq1PrXG",
  "key7": "3o7KzmJEjsxYdEq7D6inmz5uehaZ8JpcJeXetJkHUzEyXiXvfkNc5BTEJpoisfyLBXVrE4SdtBEjZv76ViW9phhV",
  "key8": "4HFzM5hVB1yjgTC2p4qPMEWmXNLumVqdU9X4fasyNy1Srxyk7FxSczb9T7PZ8SpcferQppdEB2e6FAXf9VsiTzFw",
  "key9": "dHWxoxDbGC97hCDVxvXyNRQeNS7ZwbtTfGjUVAV2UuG9QcV49NnifEfP5oftGMCHUiEx1JsXu5FWw8YXHoS9tHs",
  "key10": "5ncXZqk2pddxeDrwXhz1f4BwjE6EpcCLrLG8DhaneF1zv8P2oF7WmCtbcFvmTgaScAX1UPWra9zxMZKtYJSWo45B",
  "key11": "YyvcyT4gTUGcvnWkMQyxxjoX7M5NeDJSv2WiLJ3wKZH9H3nWEEFdbV5XSphEojwjjowx8xVZezVdtQJxo5gNpGT",
  "key12": "3kj3wipGkVrx3JPHT3jJoBYDbNxjn8dGD3ipFKo5839S2neoaRueLocJg68z3ALkRFJCRQjkJTTCBNTZsT19vgWq",
  "key13": "26MC2tPB9j6t4iM5BDUhqRDMUEy4JRTqYemFmcA7cdFtesPWpLGQA6wWYzMBPyprS6wVWpiLttshBexufpzuAfjw",
  "key14": "2gQTnrSfXkL7uDb1UZ8wDYRRhxTZGpmuJtNXDNjxvB6Uqyb9s7zvFQDwnCkHd9oCkYNgztuQgHVexz1SHrZb7P6F",
  "key15": "4BY7E8PgFzWhEKQ4ogEnzowitR6J6u5z6A8zH87SgNPUCAWmfo6yyJRFNHFsmoJgTtQktZe4Bq4A2uR2sdK5bG3U",
  "key16": "ZzkSUaRx1mRPzpMEGEQBSe62TCTo4xEMraKZVJT887SopujFZiutL11648oHm35rtrFjRmDY4SHyA42dsAEgZ8e",
  "key17": "44MirMmra773Kuod5LXVcDKfUS6Rj7M6hXw71vNFCJgZqhoUbFvJWWXZ8sWEPkLGqW6MA8EGEWsrSu9yP1dYDPjt",
  "key18": "nxoxgSBpzGnLPmD6ujD5gPyCraUHqhtjoxGbh1XqY8z8q54K36eK3DscH96oxAHPt46k1SFGmwexyMsahPM5nB3",
  "key19": "3zuS6Ug2eNqQfhKKyTNT9LaUmDGPwSUCqu9UZjuNYtovHr6W267Hfz3DRmzqdkH21yDgtu3jgF9kS7EPoszjZLbX",
  "key20": "4PnXdfWxSWDXTJP7NVXsGyqwB1KqdNdBqgeaRHabF26tqudZLmeNntpfQsi2R9QuJAVNxgNH9q7htJMreYvB5H9k",
  "key21": "5znB5zVv9rXDvnEcSZPg6oPbaU25af37h3CWS3dz3nr2BFGUrU5pZNv14GqAYqhEwJR54sMYYuAJ5Uw3erJGYTTC",
  "key22": "3sKZr3Za8EArk1rksTNdSR74A38JQougw2zurMt2BKppe6R1qsXXcd9nXRuKSdzcmsnZDswYQcLhLVGYqhrZ7reK",
  "key23": "4Sh64jwHsp8MQPDUyTCMAS1KvWwMEEqgxDh34uaPV7pyKDMKTbfWiTCnFhnV1MoqGaJwj9G35H3ZfUUFtehnGtqM",
  "key24": "4CVY1zpTt1gRjgx2b6bZFyrjfgVD6qo4EaQ4tMeTWiNrui9FiWjrcH47ty1UUcPXPdFBnBzAg3mQUvugifMus49g",
  "key25": "Nnw8j4xiq4oGP64rif7tFDEj5yrhkJmeQKyRrnLySTJhUjTQc4e83PLQJrTSw268wm8FnXmuGM7JMA1fHsQxjve",
  "key26": "wD4d8umHMA3S2mDPeB8CQNdekDnJpRREJT8aYirtoUeKb33w2VDfvzGufhwLooWDWLWhUsPSkMLtgzxZqDMew7A",
  "key27": "2T8vFPyEoLYiyhcdUfboMjikomNBWLGcoEbQ67fz7dt8ZFEZiCtWPRdpsTdD3Qrexo6NGMKDrtKhzYacWipNkWYu",
  "key28": "5UoEkpjVcxs3UrLqoUhuvZyzMTo9ePLXoBwYbhjwVzDJ7zHM6vTtKnhV7U8Stud89KixUzAKDi7wgV1ZWUBbBvDH",
  "key29": "5W3pdb9BS6QufuskUtvdaWGaAVSsFYwN88YVBRFb1fQYwMHLU1hyX7vgw4QeGQXSjuCTGDEzLg5fCgfTB9XXnBSN",
  "key30": "5UW9zQBy7gtLhqVtQJszdqfoTi2uuyxvzDgPPNB7jAUc3ybRse4wS7z1po9jUG4KRYmDbTSTeciFC8KBqLTJFTwF",
  "key31": "3UJdqq1RGa8NSTApLkYkwMNfJkAN2WVj8ArLcHZo6iaEA5ri9zNH66WwqbMupB7BUrVNQa7BGbvH5vxoR3EDLxJu",
  "key32": "5kChrqixLqi96ryMjaEkXfAhAKhRHVjsVSyVKgJUpbVW2coTEj5GNqXHuHrbtWJu7XYayppkqB1tGxgcwKhHDgji",
  "key33": "61Vo9Dnsr4sdfPmTzx3a28bSoDY92L51yHY9CFgmhhHbeRBZFWX9h9s5n2YDEFpWVdrLHrD9jFThovCCpgoQsV8F",
  "key34": "23PiNPo5uT28PWa1SY4funqNRPPNM8HauQa1yn8QdyLWP9Ag8xjKBr6FghZ3pJyXrdcmV1X8ncZ8Btbyt7haD3YH",
  "key35": "421DS9DQaYMpZaQc21GtZxEhnG6v8BF4WcKxwyUbvjdZUwqVN6pFHihWd2yS4LapTepQ64NpKoUzhhBhRFrKYnQ4",
  "key36": "3k5Fg15YKjXro4RXbBRuGqDAygQsiqULaNXCLJJQM1sU5qc5e6yw7fx3Ri37vrXAvBNzM1UL3vKSYJvzwGdDonhG",
  "key37": "DtyVUk6hfNvEB8312srbKhos2mcT23i3ZCpcLmJGNaxra1DHYSKyX3Sntuh2LAVDeFp4hzF9FJZ9dmCKErfc3r6",
  "key38": "2n5SfaszP4Y6HUfT2kmKYobzESUTXspVxYLwkicJ7VXW8XeEGSqzVRySWTrfwhJByezCZ93E89UoDqHH4QnCJKhq",
  "key39": "6cvK8MZEkgU1ruVY6ZRGZ3YSFTjFJEfspbZZoACfnwdoGtKbSPBJkViXGp6my3t5rwzPdhJz3as9BRK2QBiojkL",
  "key40": "3dX2g4zVBovUYB6etmNSHSTGvsCx7Ynbahz8GvcWqHYd4k5XaBTNceqnWz7oaCkJNDNjaU9FYMqD258bi6j1BSCP",
  "key41": "4nXwsad1kmTQVL9zscfK7FjfcEQNGUak1BcHG9nF7cDZ8EX5EXXuREcjhux7m7y5dJA3pyshHjMUgvCnh6fW5YyH",
  "key42": "Viuz4h1dGYN7L7b8Vc955Ct4QpdBCuQJx59eiSvGW3MpZp7p94dNwDPpKfd7GhuBheMLTGrhfFacie6CYbYVmdd",
  "key43": "2tp1aSwEAYwZh1uL3dLRxHeXSSkcCbdjmKqRgjz7uGJZAjGX8tHLarXshgpUChbQ7QaqPccrMCibqUjdaUq7z2r2",
  "key44": "2n2xLTwQuTPL98JPdnze3SwH38QktnUDNwxJZo5Az8G37bLWtVyb1mfzZ5hrZU9ZoBzGFQTNQAmd8w24awPghkjU",
  "key45": "XBQdJKjs3z9DTn6q2t3Las7bCMRxT9YUVipui7mmZKJdzYS8hHd2FqQpZ4H6WKivWc2DRcPLWN3TxA8vGvRqwf5",
  "key46": "4Ew1NmrvUC8hZnZQQxd4txNW21mSSReWMecUeKZjTciqKhD1xw937FJNaTbpXRVNoBtf2Y5jFdRxP6ZpgJW7TgUz",
  "key47": "5zYu16TKRmoppzEv4cTALLVzeuybKqwVqnZgzQqsjbtYwGyhc5oxTavFvQUzrGByx432583FmvqhqVEQggjcuE5L",
  "key48": "5NmMLdQzek7YcGiUyDcWiyyrZScMcAxPWrmUHJvUoHaVr9D59ns7mA5CgAmKfe4FRTzTgtw8Xa7t1A5NVmXGSnC2",
  "key49": "3EiQtGg6DJALWzaHhUDcd9ahiDRZGvyEdza92EfqoCXdnk1CVY7vkd7mUkzsLT8epbUtpHGdJcCLUnDBg3hZAn9b"
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
