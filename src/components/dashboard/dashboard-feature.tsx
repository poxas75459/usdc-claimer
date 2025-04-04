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
    "3vgZS17owJznx1JUPt1ZPbafG7R7jpZ9LVF1B5Wtx8mHfKsYv1pdRSxENH3DgF9qHQisWiQKVVbDqegRdgb8jsGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NLJiJ5eGe9i6rdHCLo2iLqAJ1g9vab7uyS9LkJDWXrdrQLv84D1GTffqwdDasjXva9sdhT8kshKx69jzb1pnYmM",
  "key1": "4ne3zCL2HcrGq2AUb573aVBaPBzJtJUtYVrBfUSaMqMqEVjUJsHitnCjaiLNLsXxhWGxvQQqzjp3ings5J2AToxY",
  "key2": "kbVL2inrofecBKh75rf9QxG5gYENiUuWFr4MUWw8qcoN4z346dk9cejU5rryMceGELzCkTDLyChCHv41MjUherK",
  "key3": "EjVkwsyeh7ycFugfKZrY91PizgxkALmHB5GDqzPpWCBRZTihTzjh9Db9NK4ize7FQKtCV5iGyai3D3j5EZmtvUh",
  "key4": "2ZkPwWnfCpzfE3pHpPXvpDtP9t9CCdA4W2WCvDcE76VhByF2wWwKZsEVnh2vpHz18PHfgCwkDsJky2QHYMi45Uwt",
  "key5": "3uS95fdu18UCaY6SWpypL4bBNQeRokmeSpWFeq5ztbV2pL1pr8tZJzDw3ean61EVpnMJt8SJXkGi7qoKC46HwSyn",
  "key6": "YmsJVLCWUAt1bqoNAcZbVFumb3P51K1VSDBzwY6mbJh3C2GhzLWazcm7omEcFyayRddGtZpowz8gFZcqXtsecKP",
  "key7": "3pvZwtSfEFWkdm2yHsfUxyaa1VZti7VSb7pH8nFMzRULWpyVWfUPFMF5E5AWmn5dDsur8CtyBdwwCMCdTU26ncLr",
  "key8": "3VTX3SJR9kjjDhLDttijva5mDYeBXHHFSDhU1XM4ju1VgDsF4GyabMb1TBgTo8jT2tzSJCKhujddnBqvrsunPv9V",
  "key9": "5Qh6p859Rq5yFyVLGBrWLTt2ZE7FfKXghGN3uSmyjM9kyr5BdhsdkWrTHAxco8ZLdV3zPHD1pNKFRrzjUVMsmf7f",
  "key10": "3JXJC4tZ5ir5x7ecmpL8Cbz9AtJquso7hqWKv2jtdQa5nL4orQXwTM7fJGzjJ27AbSyLG5fY5proaSmDJR5tuep9",
  "key11": "84dtar3JcH3mx1XCkNYgehVMvBbNgWavMruXQMenEKejjZc83PWT5ze8WVdMNb5ax98qDLscdiw1GSzqw5sH3a1",
  "key12": "2e9TJwDuUg7AQzF2HLeqcqDXiGuGCjVpwZksNWM2pkz6STj2tdR8aSYQyMmin8H2KffChDuhhbrvuUUsVmpS21Kd",
  "key13": "r8aCd5EMQFwru2YVvpo6UDvBNAhLqL9gtvbKaz2uv1kkFBCpsA5gtNSmbYD4Btb33KyDbd8u666C8Ji9UT6XRKX",
  "key14": "wMwSRgSkcNCuS6ThMYAHkMiFpT3uMBqpZpryttTaE4kLqJV5xtd42yPcPDuKyk9oTfzYSUexgnXzvsy8yEYcwNJ",
  "key15": "4UhZLvqzLhbnQFn87dyj5anyvSu4hCAHuRK66gdc8af91NMrxpBGGvAZnHpXrywpZkAMNsBHJcEWcMZ2enjptUwo",
  "key16": "5zQYFWYmvXMn61aPZ3dhnMvxAZdMHnyUVh1PGXBW1YfwGJE97aoyLCTdbuHsfLbnPjix4eaqQGKLc6HFsgmvPphW",
  "key17": "4oFaSJCxseytukv5WUFWF2ZUCwxeudntCL14mETT64Eea2JvBzbFcZxHQnpLWHHSh6ef6TL3Lt7TZjJSX4FeSCCs",
  "key18": "4tWjxnBzbd3VpQogzY8PSSehfmXZTkJGwugFbtxBBd4JfZ9fDVQ3wriKRmDX98UVb4F2EnS6uBThunVhsRMRs8df",
  "key19": "4H5beCqCrtAs2voTZCcTViVtNCtu6uPYYTeDE8oL9DnUq15JHPeytcytFub3d4b52Ybjko9fodk7YG2xHHqyY7gJ",
  "key20": "3XSDtRJjFuq3ZER34vTLuZyd9addCKZsdzcV9tX9WQLw9EVE9HcM3yF8wPNGB8YDj2URX6cuoHrJHi7p7gZWVMio",
  "key21": "2F57ZUKYHzx1R4mKsjEeVYYq3hPZesq5mC3qcwyBSuFk4ifCA6cknagyL9FF1oRH4RXiUy9H24Yx54d5ZG8qct3C",
  "key22": "3opgTT6CGQXRc4nVyHBNjwBuUoTX1Qe7DSCheeZiHmSYpxJYmV2feNrFJJctZTqCi2nU2BusNTiaG6zQvf75wuW7",
  "key23": "56BkGmWqiG81yHKhpACExaUttEBney3cHRZGvB1zQzjapRBkmTmEqkb1m8FhXxFSsvYjmeCCNjuHU5oAAA16ztKg",
  "key24": "5kYXpC2zzCv4aRvPRdh6SFmvKdGorPzcyc9X4t8thdM6E8gVnVJbgt2J3LgjRChGsyXkzHZb55yhDj9qVJLnjNHz",
  "key25": "KZmJZMm8oALagDPwNyzcr77YYfYuB46459yuh5zpruj7sxvTeqr6UYgSKNUVURUJnH8Ch8iB2UTbpumWPCzeWXj",
  "key26": "4EMdRw2y3Zvq2vRVywftTNvynLdJ6gyWmFPv7Yipfxxhf5jtpdCtzsqGdR2rXfHWZRVpqBNT9D95yD49JjBHZAWk",
  "key27": "2r5xk4hGZtbvzwh73pqpYEr1w96c1fXBiepZLeFf5arF9mRg247bg3Eju4vTR2SayCfJWuQRp9NYACUZAESUM29s",
  "key28": "44gPPcdEFHUz6VjK1LqTftvvKFqr9VeJex3eTYu6Jj986MXtpQiYDQZ2UZhMeFX9UHLEBkbWHjyHBDDQYaeUTCzp",
  "key29": "54XZdwPRkH11vDH2QngmSTDhyeH6dzprF6CmetH9C9UNf82cU81tRALQzkeX4ej6KnKd33Yxig3Dh5fm5Cw4bR47",
  "key30": "pKDU1Z3pr3DgFzPYfGWWbdgerJcDSTMa18BpwtuPctg1G6As9WuSBDiaQZQbkCqdAXuG9S3saybnXj5wYWVKxb4",
  "key31": "zcov2xEDfo4kS5HCFks1yDvFR6ojLgRZ3Et26oGf3sh3dFzmQwgAboeRsnp4xyf2QqX9Gp1WEv6zVVtiZW28MRo",
  "key32": "3db1wKwN4bFJ9E1eWr6fDCpuyVmhv1rFETazMthiM8XmGNXXh9vc16AqiGRfqQrcHjXGXoUMPKDtd2dfuRbUMpBy",
  "key33": "5KZXpPGpKGzGoTPs5pLkz3inN7TadWcspdLvngTufj3xk6hX889H85c4nCbFpzdXgg7rgCuV8KyZwdqkiXLwhgam",
  "key34": "5TbjXc76bFP1BQk2BWQBz9MKHmkqEEFT3Sej6TRV617PdKmUaxxH3NqmFkKydoFeSC2b3bVyMmzMNyxkUzKV3W92",
  "key35": "2EQSbGLNwsaH4QMgzzZYyoQpCMsfA5nXaQQfjUZ6Ve1PQLf4fRzQocfRP58mLZfB1WWUSCpnBZKXxbH6PMWJagKp",
  "key36": "34FEmf6ccCa4jQT2EQSqFvpXuqvKggrzut3RuvoNoVRk46RxCzvDRMywcBwTcm88hp8QFeDcMjAJUQDKs9J6Wzcx",
  "key37": "4kHW6zeaQ8vsWdx9cvAF6XTxj9koFx4SwrvLqrtfBqmBEP2VyKttUPfbaM4AsVQEcz343mazitmKuTtu4MYTF4c1",
  "key38": "24AnHVMJkchtaH6qoHfnv4p5dCPeAYr4xbs6rWkYJZqxZAvqe3PDWhDZ7JY6mGnpq53j3LCCFgfkPNdQCm2pDtv6",
  "key39": "3jMU6NqJxyf3BhqYK2kddsALsPoNTiqty4CDB9M5EAYxLytbLBoHdy6wSGMjQZVeEVh2NSR9dySjKY5GXuofV8rA",
  "key40": "3ji2S791ZcMq92qdP3xErptnWwGHf5ALW7W3fBkEGwkuYJdNAmHriu1nqda8zakv6WuzjAwDyiZoXnKNpp5rz9Eb",
  "key41": "5ib1qeHwMnVzo4N6o6zmxq6XjiRFrZgr7TJisLAhJpUwzufswCRNabNCQ83ryqRNftdQiARC55x1iMcg5LjkQ3D",
  "key42": "647wVjFSzc8KdwxvEB6tFC1vYE1CynANwB5x291CCjn5ERLGGDYh3MCy88HNcULs9T9zVg7cBnCJBCQefYTNXUzt",
  "key43": "2qFipPnHMsePLhwG8EhRrimTZtpqG8Mfy7RdaGMy9nFGwqBWGjisyG9Rah8TKU6udfGrCiopooxgJTCwG7Gk1tbA",
  "key44": "wJK4gd1uqXfSiNVjB9KTGRgcnSQ5TWrpE2349xUkYERzdhawA143LSgZFtQxgvFn6vxfCVg7L2tEnHb1jJT1k4f",
  "key45": "43F3Y4rvzTCX9TFEz4GS93YtqhnjBLwoVcsMfEfM3GzbD7GxaSAqGCb4TYksG3EAe899jQs2HcFotQSWcCbYfvxo",
  "key46": "NuGFNuhuwcRSvpgmUFPLDYBETZPwRTik9dgrBWJ5xVz7dVpfsc7GQJVcAK2dREfdEzKgHj9aPTwezCeRCXNKWe7",
  "key47": "4JexTCD4eTnpv3APZ1MUUYvXUvoi35jyaNTu8j9sMxoDghLC3YvMs595HK6HkTetM1yWTNgewLcES86tvVhtsfBD",
  "key48": "49Xs8ak4ZJf4Uvi1hndgcEqp2byUbemXcW2eR3xZgZF2mWCo3s2LryVYiUxqy94YP1MJVdrUNgWufaQ1aot32Ta1",
  "key49": "2e4TPSs8oGCiLZ26oM4sDxL1jGfV5jZ2fi3gHkY6gcrma1Rk4aVyUkzBMeLJTatnioEui2P7pWbpZLePLFda41A"
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
