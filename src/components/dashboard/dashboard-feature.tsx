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
    "caipXT8ginGuy1CJJHQazaG3tUMgAdryL3pLPTGH7AC43AFNicco7GKDZhPPTBh1dywAQzEXEEzdLvgbyvu5SkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38x4mfuKYkrAzGvJ5TshjdZ3z8yAR1viAjHVWeX6ZAHXSPCtDRrPvBYP6zJrQk2WE7FdpadKqwNu6S3k7Da1aFKj",
  "key1": "ERg7cZ18SK3ST7Bf6wMRXPyRRRdLy1RML9sovwdeNZid2CKgsYGK4aSC6JzHhfQc8FWLi58KhuUexLRxMWyJz2k",
  "key2": "7XeWuFkk6S9e3EbQPGxwgniCXvWtqR5QNK4ZbTchmtePwXnFvb9vHm7zQwJCNBtgRYz3QFhHhy7xp9haNu9Ezn7",
  "key3": "3xvpjdusNCHzsJbSrHLxNzU4n4akB6U4n7qpB5y6AepbQhaP5LqioAmT9zq7reMrF8xWRvVVuWTaNdCtXxuMr827",
  "key4": "3rj2F3dvc24VYqaTRaUNhXtrmN9dKmos8JNQmgY2oDCrGcC1CYq5JmR48CocdUhUmoj9ubNEQFLqKNoud3Qn21z7",
  "key5": "46rZaLn78XePaGXkzQ5Ly7hEf4zGWhKWNyaTvs9ynnfRnrWZfDt2CeQN1MnSR3dXi4ZBiEqWMzMnay5Ck84FWQDV",
  "key6": "2RpBUQPFS6SmRLxaJYJHPD1kor6QwyZErn8bHgZeuZcjAJcKyWvffjEMtnaeLb29SgbNtx5edB52GNU3ckwkySrd",
  "key7": "2nMd1qe5vCvXczznm6My14Hc2KJWJ9aZuBC6jgTmdXcX9VEtNFRjcThhJE2L1nG2EYs6FkDo1vZQtB6aDDREoPw3",
  "key8": "2CVxtKHwg5YhCdJtPg2WDFDs3zaY28njZh3KXGwYCokwH1MEe2v1upZuK6EzzUeYiUnvdT4k6gT6mYQWGRSxfEfM",
  "key9": "3aTaFynsn6fC5cf2R6EJL5q7q25gnMTa8t2fonnfbSgtVUriUVfyTVpn7Co5gy8NYQhpzzXwf7SPzbRXSozhSMvS",
  "key10": "5Rd1BCb1GbQHGa9nJcviHB34KVPd9A5MeUMBR1YDJo1pwMTw5tzhQoqnq5FkBgLwXRcRk2JVLAmvzhnkB8DbfPMb",
  "key11": "54fK3c6ivVQj16chucvosDwkZFhx8jra5tpTyBrUi47fLkEZ8aTPX6pVgFqBcRN1j4vcopUkYJbTv2N1YBDRGMtT",
  "key12": "VRmahBcAaFB7xM3mrBB3Z95tvhHCLMBs4NJnubABohWKn8oapeA1HBoNadey4hRSGEhpguoTQ41UUYgMZcK2ueq",
  "key13": "3cP1fm1mtc16B3oGGTiHoLie7btj4WkfFK3sfwkYMEX6pRW9BvdqB3pCqp2FHkiiPPK7YWrFHCbpdX26iK6wgBdW",
  "key14": "4oL4b94WaFyrf1R6Lu3EuEnkrdkhnbfhszrzFyCX6hoBcSfMKH2iL68NjYqGRVAeoQxpGRhQ226j7FKqvC3Job7H",
  "key15": "4T17S6DZhNsG36QVs5sYa8YsK8HTMqP4mKxyLfRggBqN2d1zGh1h4MSAfPu2FD5E35fe4wq4BnNA1DfnqxWUnLax",
  "key16": "42fyYwNnNKPXPw4ZXx8VVY34S8oKhpK85ZdS3WxnCjaRTknqVebAiJt9GLiJocm2Nzwfc74yi6wuCFHYtfbw5qf",
  "key17": "35mfYQisKnKgC2JaSyXP4L4JDvy7jXeDDrxjiEYPrNuxkZYx9mn3u6VWyau2KpVhq3UV7JV8kSM1QUXELxaweoPr",
  "key18": "4GG8Ckb1nBepUKjib1bVaGikpnvFsYBH7EEyM41s7JDs4gNhXw3qpKYLkuqRv8kUM7qFtCQi4wz3T4rSy9vViyp7",
  "key19": "26pF7syUezqugvHsreukKJsBgJkyZzPMEu4DCoAm3xx7Fc8RTM5X4C2RbUQ4Woha5or8kXxZQEgBXw9Vbj1hTqQW",
  "key20": "4U5qfyUYohUimYb7sgCKJw9FBemnAy1kWo5DmwcWEGePwUbBWuEoz6zCekEBxTwHP5h8p7mSXwAxbfqWxWB958Mu",
  "key21": "2v9pGzwDy3JmYB7cSgtp1Eoje6nYbQsKZmnhYi7AWXEa6SLJkd25cpDRZKaqmxJZowyPbQCqGoQ9TrYGnC2MnV6k",
  "key22": "3vtNn8GqgEFa2G73T85oj5BqcjBzFT1mxo3XgHT4dGRihiVeNvAP55MsxySV68GYd3kfHHbdahXv8PvwLknFMRwa",
  "key23": "2SqfP34dNSgK5rMsgDWVnNGVJCobo5fxmSkUkitUBrLabcoBoqGYzKbw7PfJBRUT7h23DE6z4RfZjMnhLC9h83Qe",
  "key24": "5ssSDoYwhK474NeAS6gemswekZrCrVED19hLKThNXXdwu8BeHYjUzxxxzmZ4zcLwhPjQyN9b3Sgk2Qr4QQ1K9wYk",
  "key25": "AbaK4bhgtJayUXDabidkks8ydyQDHzmDAUd1tzMkJm7AmYyZapxAsveQE1SsUvHYe747MQMWKgRoYScNmooBQfE",
  "key26": "4f6GL8GvLzzRGRHkDKFuq7qR11GLLyoZ9PwqWYnsxZrs5oMvoiYLkCojQg22WJifXDt775MRN9yPzZvorYw8BoKW",
  "key27": "2tUKmrUoW7mYickCFtptsCQiSp3ZM9z9srHHXj6DKj7hoksRWFfpdJPGhUzNkEpLdvxeANitUkaD8jtk3G7ydUzM",
  "key28": "3WG3EWcqyKoSPwkDkhqEeYfQ9LduFaQ5go2obESbLJ9QyN3rWiZzsAtKnz6z5LLfHHyUDVkW4LmvBS5yzUvXd4Pn",
  "key29": "3ooz4uxuqnmw3YYT7exAScejS29m6LZDCFZs33JhWUyg6DySy82Y3i6capsyyiXug865bfo6mFWmYBTJ18M3nJZb",
  "key30": "5UPzmdRvR8ufaBaJjKQ2WG29bhtB9dNep9h62UqvruE5sSaCNuWEAs7VG7kyMAEVsvqzXqbLB6czNSGHoR2gFQWu",
  "key31": "3JtnNF1W5rtXwmG9V8wvhxLEYhyeatKDcDoJkRMpiDzT8XKf1SVhMZiFvFyAu9axyajiGaoLNgyu9A3Sm5xsJWGH",
  "key32": "CpxuET4tqGxSpfVYycFcsypSZaDjYr9TKEcMLC5L4MKGWBeNzUA933DybWuVJbDihH9Nx8Xs8EsLa8vCpcZ1HzY",
  "key33": "51xGxXZtuTiN6W91x7CjtJTY2vmj6Tm6YXcAqR8p8M3t6N9Beaa3LKfNuFZ6UUFXiDTbHYY4gHSJDjpAXiM2WHCY",
  "key34": "3QHsFD95spnNe3t1293KSQjq7LMFs9NXBdpPoVvfRxporaKNiMUrKGWCdHXwR3RBCLCCKncCBc57C8kKgb7WEuv5",
  "key35": "5qLnY2mFcghM51rvBDarsiFPY28zsyCqoz4vZLiP64ccK7oqBtiazN59bNPq8ATcw2GfDsffsCeDwucvJrZb2STv",
  "key36": "3CvUHp2QDXe3cjkNcRZa7zfs6Q2D7RE6TU6pnRMs9q19j6WAi4EqR6h2UxH8RzwMntPLRzmsFAkvtGZEw1NC1Qqj",
  "key37": "3DtEBkZVmV3GUGnktYGF2YcFrha7Tn1sH3rimKSyUQQorxaNXoeYi88UQdtJzXqkjkdPUW162XAAQPNvCs7nfGNP",
  "key38": "pkkLQUUcvk68w8LT4PPxrJBv23VSwMsyfKyZuBUyEFrruFE3L8bRTW3yfaxAuNq8SfyBJVHxEFe2Mc8kpifKz6F",
  "key39": "3gMEU2RDKqP6sgDQeL42hdDSEeZvAR7Lkk6ZyNp3QaVK1UmFH1Ce8UF1Qr8Zga3PVhzgDmDZXghDWyjx353LefrC",
  "key40": "CdRhJC2h7zFTVp1ep2gCUKz3PcrsWqmyeXBDEGaNZL5jZjfRfUcyXd9PTCu51pC4UiwhjuN2SBkhKwsVR6CDMVx",
  "key41": "2E1KVHHX5RKbSTnDHRvaFrhevDZ6DFz4DamUwgPipsXqkiSbFWqasYKQtxxaeLT5UNJz19DniHo8TmChSyUovgCf",
  "key42": "32UfKdfu6u8MsAv1P35dqy4AwiBsTH1jbdLZKy7NifF4Y2eb73mirjVmsrfy7oBDh7pz4dxjZ5pJSJ7Ar4juJBxL",
  "key43": "5kLq8dUM3VRTamjv5GpkvdzYUT8JWaRnQ5KVQ5tkWkG841fx7vjxMLpSUh2GXs8jaBFar4GU9i1s2eFTXeyQMFZh",
  "key44": "67VgWTMYgnUdVUMMZ4MZJ8mn13u7XxrcmAGHtdERh1c7eNDy1FYbWcF28s6cGEScb8KzrcBocgbBvtANuXG4sv7x",
  "key45": "41tJvP2mZWBjjwng9HoNq3PXLHTz8py6eD77UbXk9Qz4GALghBgAGRg4HZbu3JVgfoaBUxKjdeqvoVHvi18Dz9mg",
  "key46": "5MhYvT3m1kanb665iqxzdjmB1pHmqiK2JRFnsEFVVQhL16roGHgH3PyZV1LLE6Qq4v9Be34kA5tpPSAUoAVEbU2A"
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
