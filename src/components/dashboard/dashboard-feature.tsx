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
    "64xFeAvU7xQ2RRa12oPN5dTLkeHWQKmRmc8yvdMZA7xNMKZXx7uE43eSU9YLjvrCPVJLBVBfRcoJcFmtV93VBG8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "byuY6LetEqme6yRH23YirvunC2NCMscPGQq8Vg1tAwHgC9iXXawzafBsDCZQov5AJpdN2ggsFHsSv7dZ8SGGKFm",
  "key1": "2ZT5FWdSmTw6XsC3LAn3F2zwK9dxcwUSsRme8UtHf6PtaC5d5Nzi3CWap14pauEwpJxPWGf6rZHcMFL8v3smU9Nv",
  "key2": "4LLDpQgMf3Zo2g7V5CYJo95Dk5UDRrtL4Hf6YiD86r9iYUd9qzZggmdGQA8XVgLq2dzLvEguHYuRZTDVtyqqNLsn",
  "key3": "2Q4bbsQkYbcomtYhedZ3cfZwq3PuTrvWjPhj9TWqmPBhbFRiW4VZy2cHiG8DWmhxdA6ENvgPiB1d9nU73bUDXMfE",
  "key4": "5HwofYPb3W38AGQXMxxS9rg9PFic5Mu5fGvSBxHEXhLMJNSfu4jrxMnarUr5DqwDVZfo6DyhbEX52LN3f1UmcSDg",
  "key5": "3X2HA1kVMDyLwfnRfY4sNC5vSLpbTJTCTGoQUaJQjZaTrwJ6KuptKAeS5hryRRcncNBX4UNRtkESiHeACp1zs89N",
  "key6": "3MPJctrLX4Vaqg8bxe6EPtLvJYCGL47H93rJSHpmS2qW1ChfUa23GsDeNC1qSgDghz9hSARCecZ54oZjTQTK7im",
  "key7": "3MJbuKsqeQapSRRgKGT8xrA5Uh67tDBDi4dXhhkh45Egxjixg2P6bNjtkxit5njQnY3TV4Y1G9Ye1yVqixrXii2i",
  "key8": "5ze6ua7StNN12YqMZnrkFJqy9MbB1GP6D5QpqX3GFtPaNMdJYZpMYmgVtDfQMB5fAkdDbSGTyinNAihWNjFJSBcj",
  "key9": "riu6RNDn9spzn3yLNwUmKEkP82ZRugc2QZSLfmbAJ6MRqyWU9yXw4REinTMqNPq4qeExhbELrZ67qXucpLNaQgw",
  "key10": "4kSGHCxKNpz5nxSmZpALWfqVVX8XjFNJp2Ke88XtSqz4mhL7uWcPVVogNL9gwiDAy9bYscf3owdb2oDtvqF5DUy5",
  "key11": "38razf3rFzTvwM8TwRovUmWjRtHGCUG5VBCcUbrq272wtpeJNMRa75D2W9vYbp2JvLqAGT92eHqcJchQditMjZVA",
  "key12": "34yCFKXQhpcNMzheZHuKy5h2X8Uw2nVkyT4w9yjHdcNX8NJfwX5FQWSYdttKx1xmphcmVtHRmFLYdSi1PbYPjXAj",
  "key13": "583Pnm3fkrauG4V8riFVLYA4NKncPouNQF2WUrRRP2MqYqXMTr7RsJQjmDqBq2LjXd5uMHZa9oZ1w96otc94KuaK",
  "key14": "isva8SjaiuRDA4j7sV4RAyPEK7WGhv7B9kyzbbmkwDZGJvzA3hyMaFkGa9UV8QmwW3EUspQD9c3te7AR6bM1RPG",
  "key15": "4uwf7J9FETf4zonZhU3Kf1k2ddAdHtsNYND41C27E7RRhkEAby6ZebbPM8DrzdUyPirDPA2GuxmHurHN7iPZf4T8",
  "key16": "2jmgBVUGxmAFXTxK3S4CK2z31815zRmhpB17JwW1NLZD5MjWrRTcdFTR9tYZwSrqRozA9RjUgTZEQpeV9v9z6K4C",
  "key17": "4jyqKaacNETfjJ5QRohTBUYew1DbSxAYb22aDHpfjMLfwtUbqsSBvBFNtf8RUa5uRPCfsRPa9THkkxzh7FZWMhnj",
  "key18": "5C5CBpcKdkDALQXQWcC2adrjaak6i7P3nz9J7kvrrR7egZ1hAPgXBj6tyzm71KVXp3uvC9NeqPxbG2WNTWWYJohq",
  "key19": "4XvFPSVY9E1xDWWGFVsN4u47qL4R1KA7KjRo9bVQvMKpsoUidHFa9PcT9ZC5h7G2wGYEn6QSHCRqYyTtsKuVQeDf",
  "key20": "3cEAteMu3Qp8XpXV8Yt5Q7DNxojkYSLY4TedKeUhfbr2wg3BeLtiQtY8znp8zey2kHuMAMVAcbKxniaCVJUFJFFL",
  "key21": "NksBUgXZFMHz8dRgQq5Lxf4R15vidhKF9zvtJM6p6i6MAoWkiT3SeMV4umoGQ6Zvm1S96kdDi9oJRNT8eqZXnNR",
  "key22": "3XNACeoWwkyXpnT1X5RvufmJZrY2vYiafcQxgwcoBp66KB9PZ3DAUz1Qg8MoGEWQibaeGwUkWKgvJfWg57fxpWus",
  "key23": "4yNZYoW95onv3DUSd9VvCSvPorQG6kbbamtSZuAjqgPmXyGeykRx1thJrFpGQTV5PSAg8zx97AKntL3SYryCgA17",
  "key24": "4fEv5mPr5zJZvBLvH2k9Z8zEmMq58SbjiaGXi8HhGWc6vWiG7HEdLN1XGoDj8nLKLNGwqCRytaa5Wx8pj62p7mVH",
  "key25": "4chsMu6SCvtdmFAcwYwvCLvBgHrnBT6mKnAZhnqvduoDcxZEphpYvtcf5RYw8ZPiaKg4uZGEaAnarM2QFQn1e7zD",
  "key26": "Ewz5hzFMPKqGrXzib6vu2wpNswLK8tCibSGC8xs7U44sHjfStBGkQczKnqNKWSTZfaq9KSPeMYwhhiJ3ifi3kdc",
  "key27": "4MvX7nAzg5J8quSnoTiwvm1BWg2BMAZVKoVA3Ga3HBDQWmGnJ6qhM4B6GXEGiLK38UF6hLRDvMP1kEBii5939cpv",
  "key28": "3i276UeWUec9LPbbKGQokRifHQw2jeNdGoT4AjKsADVqpy73QaLwzHa6pttD9Ei4okmh642Es2pcksj4PkxUjkaF",
  "key29": "3ik7C9tDcSM9R6yp8Dn14bCp7cYnurBb5cVwDsQwjxEemD1WZn2syMvavQCyVSL6Ucq2UMmTTjiu5icf6G89zfDv",
  "key30": "5F7tLNuyfSTQcJo8cAsxAPqWVKn1BbF4ahtF48AVyAUWD8mNas2MSWTjH2jXMKwP26mjuUo7f8Zycmq4DtFYNZ3U",
  "key31": "51fiyNHFJL7RF64ZzeM5NcRgogCkWoAKEUJ5RsPDoXHr7jxSfQNayffB9BUz2eERFK6hFiyCmCTtfTWAVbs9SkUK",
  "key32": "5bKKNYfHLBbu44weFfEMmU2C5UMs2C6Euw4QggY8Xo3XyU3TaCCPYqd271PkdoVcZk9vSbWa1c5DfUGANtbbxhQA",
  "key33": "ni2aJRohpCMo5tKhLmVC96quuMhmxfwDw7sJNynACUimFSBm4CsNe9rgpB5qpiU3tqRoeb4wrihx4g9NRmp6a8n",
  "key34": "4kuHZxTsAC8DGGqpjHfQ6FcNdb8bAEApaDazBjp7S6AU3eUHmozVjVbcKeSooGRQD18BgfzVxtpSUzcvGyQFiNrt",
  "key35": "2SZM1deWTikogqXmGm5yE3gW6Ry5NQfDoiYUTVWzDBf5CLGSFWBXaaQ9N8epjua1pZPSF1MjFufWmpoyhYgFunZ8",
  "key36": "TPTMgb51a6PST7KuMQHVnsoffov2RQxk25XBmh3ms29nTreYwRGcM76d6GbTANhtHwKLZGeAuo5ZaHSUQqwvCZu",
  "key37": "2JoyKF28hQCf3Etz53TwztVKW96axznmuWQ7AivjyGiaWsyivjgeEV3YdZXsZsJhhdxuaqYppSAyEtZAyB5fJDpB",
  "key38": "2hAcyNvoRg9vy82cucSPizcUzgYo2EzijicMqgoUMsc4Pg4xAZwf8xLCQL5ybtqbZisWGucFU46ursY7tEn3gTvV",
  "key39": "4tKFdREEutfNbpDnejd5GpR4zh2eRNmsL34RHRSH7wba7x7e3niHiFSRuLsVK9wnY1Yz9GcqZUXdr2ZGQF4B25MF",
  "key40": "TujwwtJsE7sw8hrTu2jPcbkQBBPiHB8nKkMqF9bp713ZyzBnZF2NYsTwnXsXGbEYPgyyJfVq6EPQa55juH1Rgx2",
  "key41": "m2LHQ3neQd8xhc2NNwPrqJGrEup5hDuMgo3bHnkR26fq6AKhfgzmK4feHaYpJX2muuH5SYCd9Sjdq3cbeXw7hLH",
  "key42": "3j6assbBv7dJtAj41YBoFUJ9Chc6QTb6PzVAz6qzcMN7PCBbzgnovcpJJ6HChMq3o1t8o5qGAv5rrfxCwvqhxGw1",
  "key43": "5Kyganwv2mbjBHpfiBuJgF5VrMpaKZ9qYKxNn2FoPpG4Vnop5rZygmDDgcxXPhRUsQJ62gXXW4vSZP98CmpScKaV",
  "key44": "42RrezGUh6WiNhfR52pyXYiyH2dPAwincz3fAsV51V932HCDbsLXrkzFwm9UCHquw2UbgQV39DpW2uNprHhxYhdT"
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
