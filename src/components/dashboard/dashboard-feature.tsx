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
    "4UqTF5tik4Lvo1hvm7teEqN8p2XW9muFn2UmPhMndaEX82CELQGXmJEiLDL81im3BPVnMxeu7ZNHxEa5um7cT2RQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27xr2z8ZixW1711gqPWj4kYDztJHziJ1uTW1H7rSVaiXLK2wdCkgGN5nxrpAtMrCMqSv68wPv8vxF37fVk9QBiXi",
  "key1": "2ChZaRH86Ek82uL5SFJwt2hFi7CKnz8PUud2a9GBqxQuHrMEmohJ7qkMCr1roWtVoj9gGzh8xUB8VFYWGe71Rusb",
  "key2": "45vqNFkoW45njh9pn1ER3g4sCQXRhfADgpgh6FfYSmettZFwwFKSM5HepzQcvzJzUxrwUHNpG2KFtmV8FKY8zZVM",
  "key3": "3C2AwB3gqiAwuAtejTW9D4VwmNAQPvocwKRLLSbuaRy1QbwSpSK8PBPLZ6bCepoHSnmDK3CCytnmVB5XhMg4V94k",
  "key4": "2UdJPH7SDz55q8XxXtX9nmhcMbYRBZr3uX6HuY6sZmguudKDvEoHhETsdqW9ZGAh2DqZe6tw2iHdxmcu4kEJS1De",
  "key5": "2VofZcoVmUVZazuXSSgEJxnuVknNEZ6HKJX6CpRqPF55CYSRSJ6tEfuU2MtKsywEDioHvby1gerSkMabcJdk57ST",
  "key6": "3YNwV14A1Y5j9zDJTg9RgZLEiXbhnt3eetVUGzZwxnBuMk9eN86MW4sAsRMZ3fo5Cc9ybs7p2EmXeiW7ugsjdsDp",
  "key7": "2Lcfz8Nec46Qp9Mq5gPQCbcGF3uk9uoc4Ty99kxFtjCx2L1UcY3bESZ4EncjS1Rbx5T3aLRMTaabkc99AXwTXqMx",
  "key8": "51KdYD5cLVgiVhbeuQka5kexfaYk93cay4zQJtZnqjjU83dk7H9ddeGbUW7ZFKZ4eYgiprBmTB95qyUd1HLA2KyA",
  "key9": "4D5wREWN2v1fiongZSwF1wiY5AdnqC7a4amAVhqVdBVSu2k2oEJ8isYw6QWkbzFmQALpG4sHTZmjKmidGXBvshn8",
  "key10": "5LK9E3NSYrLZefJVTSn7e9Tea3w7aYy8eALHmtrdwNkghXwFCEHg6u1bfJ7JyoLdTwcX8kmNQ25WxAPu7EoRQeGh",
  "key11": "4HmSbEGCeDAuF1NzEEcPWjJ4ay6HB5qzkMK7WZoYy798xwR9FdeKUkrGBJrzuzoHQ4K8hwMXxdtfmE1Wh4SPw7QS",
  "key12": "5oRnXqKADsNUD2cLJT3vegwssmZ3SNEdvzZg2Ajrcmajf4xKJFrYHpryFzKTa9ZCEgEvXz5En6Zni5ghkCtoEBPt",
  "key13": "5qX1KJSqkG4xgE4ecbHZ4bwt6hGWCS96LDw5YMfQJWnShsfKA2QMzwcqaQ5nV5m9SmPhZ1nNNqphUR5dV2KU5a2J",
  "key14": "5kUDC71kSyfXAyof8YT4yP92qCRF7WUW5DwTWKDCNroaSw4BWTn8V6vYVKg6GGnd69k8PAgz7RqFgQkxXCnxCggh",
  "key15": "25MKHp8ytxKyB4HEjQLLTGMbNuE4NR8gAv8WCd738VXPfyfToyMpUAaLEYD7KV4q966PBbdEkBaNw95iQdiyKQUA",
  "key16": "7QnYn5ahRUD9cTPqSuFppmJUHh9LEkHHMqnMNxQjN6L4CQgr1yMVRgSnX6B8Ja9pSKfAv9qgAxmabCSGAVLgUm6",
  "key17": "3jGG9xMR7xhZBb552dh24aTogBbvWQCmx8eWaLDxnYjXwKGXQ8csiAUiw87qJGMyoGp8ULepgthRM9UMAx25Hqac",
  "key18": "3jtEoZCwQ2LCHTtiNxChtjXRRKj98sUNBHtZ9JKT9rJYYzwyXdERRU1Cm9FiuvHMEn8poUBbNX2iz2bKK1fxanVe",
  "key19": "2CPznXxUREktaF1R38CJuXJbemW6LgkQt5Q9A9Wmur52xwbEgB9f93qxitSdUiq2gj4NoFuYg4vFDtFvusvZcxJU",
  "key20": "3meHXNcFn9Jn31UJYXmPkAXXhQ68ZtZjYqkAHP9wyYW6eoLtEWA8tf3gJodPYbtPSRiXrYM3Cjab3Cjz6BwzxAbX",
  "key21": "3tuQDfNm5KcQDKDwa2zgbT543AoRPGVLVJJ9zz9kTWiHfpVJUk9esoKMYRR8re9kQTB7EjXwjMfRaypU6h5ijXNe",
  "key22": "485PUcjBGK1RCNHR2oKYjH81tx4YbDSpwLR3vF6SfXnT4QqqZADYCM4zKSzoRYWMuo8X1GKcgJaekVLW6gwhbAaL",
  "key23": "26Jzxpuhtu6qVTvaCHEAKvM4TiJYM2mz9HJuqkptsDtomcuQFzatJagmQTfkjrz1Efb23oCEVJytiw2qpDzm88UJ",
  "key24": "5UTnYqRCXKXXDsAFEwwT7qFCexdMw3smXr4n2mhqvJ1nHRSVy739VAFSZ9ZK3pNreFG5Sd3VrbXihfawXUfP71Kw",
  "key25": "5d1eFGpEzbwNLn2TVMrj1G9ZuyLFwXPztGeD9yU3uEZ2gEeAZPkzkyr7ZCdnb99b9Z5YpufgKtSEGtaaShhefSfn",
  "key26": "5hLejX4yBTaDo4ZURpfbQpgHDvUHVpjQP7bsWQmRPvMJRiRLMcsNmA6ZJEnUB4ThWPnirzrAoxeT5PxCBPS1Zj1w",
  "key27": "5T4iuo229tpYpnsYEq3FpqTPTAzoawUNoaEZv757Jgmysd8vhDvhcFFgCvvH2dNsL2H94rqaYs4EUzhmoYqWmyMA",
  "key28": "2Nt8FS8S9NaHKFZSdKTdBecmwfseEo7G1u56NiugUsQTcUZHZAJsZg5wqouS1tj4hxQyJ33vcTxzfQV9cKAGSfh",
  "key29": "2piuDPAdv4ScE1N4RukprTLsBMkafbsDABdNGRWrSexm5zXDW6UZRSVcD2zBh9zpHyQbGexSQeETDKkVVkekKuJx",
  "key30": "5d528dnwYbGyr76aR3fys7md3pnixW4wo6W7wjkubNoCmBeHucvtDxY7vXkQgqWnpYnmiDK2hzmZDLUv9HFhujAd",
  "key31": "24sC9heANRUn53swNEK57uVBKCWhw7eLUdwsCSbyWry2oFeaRMbuePBT4iydfD28gS6gaqzo5d6m2Z3VbY8ibra9",
  "key32": "4BbxajXgiF5smHV5yeaj255MMeJdYA2VYTqqRv9k3KDhcir6H2gKbEDkwbyemECLydesFnG7mHhThU3SXrFYVPXT",
  "key33": "3WmD1UCk3hK6Qz1dk1NEEW6UWMgb4kWSojgmA5rqx8tyjiAnRGoanmgWZiMRhVbPrCW1SEHGyjrqYTS2vLtghNuz",
  "key34": "5pfyxqnPMq19DGdF8mp82axGCCUmjSJorQgWCLeuTvkSmdEQPw1jdKJoX5svkwZjAENLo7amPVp1oC7YMwip6aHK",
  "key35": "5mrDgE52sjhWfg2fJNPSdyQUz3tiZJg82AevjvS2qddct6wVzmkErG2MPKV2RXAG7Bgy1QFAf88KcJujhgVCeLPE",
  "key36": "3CxxCazJNx2qJUFgYw5cUUnimGEVRkwZ42CjFrF4Eu58922cJfTV8vdtBZJQ6nWx1pYEHbcxmKUvbEKhBFrdfp5K",
  "key37": "4KnGmzsK64yE4TH5iYZzABzVutd9Ded6XaNgdo94AF2PLLUaDQ6VqXpzhvPbL9BYirnLmUcabmsmXo7SNvh8GN2V",
  "key38": "5kJ1ctQoxuZfnKjLBXDRai4YiypPMGquNfvpnuzno4SFaRMffH1BWY6stixpDLMKezNRAXBwPD3Ct6Liox65hc86",
  "key39": "3QYUcgW5KkrQV7iXnnyin7LN8zYEfcKSeuMrMDBPk2uC64gGSfgktyAQ4F12Z673TBoZV6QLCsRhFQMEDjRFx7Kj",
  "key40": "cpKjqAKv8s5SYQU8xRB2yDFrByt5tKPG3ap6q181yhXqHPempByVeUFqrJ7bXDbQKTyLQVSfMrhYTiEpBQYkCHb",
  "key41": "3uc97NijGDv7sT9ryiBT5LC1J7dV44nGu2s9hfNgqY2JYhzsGV49jmFWUQke7xRYLyJpXpVjrVMHXsEynR46wvnB",
  "key42": "4amJbCKr6GEmKzozWQEVVJjuHw2TpMb7GFAF4raZ7DwABYVNADxp4iKvRN8zLDrTtewG2jrWxv8VbWMZZf6HoE1G",
  "key43": "4wAp2n13ZfM3Eyo8uHumDJeNAraiPw8CS1mfNDpsY3MNLKCXAvG5PeSs4mguGJZoTGiyy22sDeDkctZUXE4xdobK",
  "key44": "3ow33n2J6apBZBorgzLvPfniG9BUnqLga69i72tMSnSaTtmWVDHm4uTdvJP2BLnNj7ZtSbBVcjd4GaWbKC8WQEM7",
  "key45": "5Na5aMr3TvqktQHKxaoM5NSRTsmWDTEvTWj5cqb4PDTZqpG3UtDKy5J4wghYSKmKGu4hLG51toVoQH2UhzxyHbCn",
  "key46": "5xT6bNfe14da6iDiWjNqdtnCYw1m1bd98MJ74PPJqL643mZS23baQF3HMQREgEQPQdjMXDhVkjfqf5PvXasQGcPx",
  "key47": "4bEZCV4eXAJFZFvHQhhFpMfGw6JBMtMKYs9GNHrEnZtJ2FoXXG7psT99ng99KNHZnJ4vq8XtLUx9QrFcHDnEDzi8",
  "key48": "5hg8F1vfKvrfNjjwXiEh2YdgHYb9pGDWirpmsUpsXMyvFEYRk8D29nskJQtoub1dqYWpToQhSu3grVT7ECxxm4qv"
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
