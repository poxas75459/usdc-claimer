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
    "4dSwCZm9GRtTFD5Enu7qSQCUJhP2czQ6fN3U72DJHYGvYB3swUuqk4AxZy1RcMiW1VBo3HSrYFeHTEBzhESorheK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yWLjTqoc5X4w1ZorrNnM23vWmjr1bUp3pC1zvkjZVW5AHJVFEDwwGWXrQLsDvRG9xN9UvGnEUJSRn5ijuWgduqz",
  "key1": "3R2uKSytRBgsoJb71fFZqUz26iev8fhGzunRcUk9SUrFcG5yE6xsVSt6xiBSu62wE9TtFyYUN9APjHCJe9LG3fSs",
  "key2": "3j5jcek1UrGj6ZrznHvaksb3k2ANsBRVPY2kuGAxXeqBsgCGrundYFDVJH26qQcvA9BEkqTia2WDiLfSu5m2Mgzb",
  "key3": "2UHzKcZjVYsWgt7R4qUdXR6GqpZuW1zrt8vrkqZcSwiNqUwGrLNbgQPsebGVhaTHLvwwcdgN4FNq1NC3sQzqQcdU",
  "key4": "3ahJHT3o78tAhkjvXJHXxYxkn4qLNovGKVfXZbBmWaaVxKDsLam4Cf8nPeP6PgbiHUFh5NRGnQJ7iyopS43gPcro",
  "key5": "2ebSUpPASubet9c4gwvFf84fDosd68FUAK3HCxTPw7gXaotPkgHdqFG4n3w5BHzndHqjkF2TMhJnsNoMHbNML51L",
  "key6": "4LrQKByuYWdfjBrUFfPeZjdVpa8acvVorZhjncJxptk9stVAHfc6vTqyUd9krCrdDyNNNYKa8utTMC2aTGKeHXiC",
  "key7": "2iarHYEAVGcZ3iNFkPNjeerkXadenSdyXXzHco9Vy9i4HUYVjB8QJAgjELsCtvcjVoBr6DVxvkXXeeCwsNEjSAAZ",
  "key8": "44BgfDYf4Rztx79wAgvr1EpZx2CCSxneYmeUUpsf1zrqVW1qZF9Vf7C2m1M5dC9e6VcUgeS57agNyXxQFAU3bx7K",
  "key9": "3nYQ7Z2xfdDhiBH8KVdgdJRz9AK3v8yvVQgVEPiVwvc159uWQa6ccNBSKzHwRfega1vyMHJaGnevkXGKetoDkbGD",
  "key10": "2YW7VrmaXvtvg284Qh2Kvk3k4noHnbFWJhGSHmM6sa9cUzpxhMfeAB49sF9tBUUZy7H1qqQvZ7afZ4ZC6kVpMZUH",
  "key11": "3FmKqTFxacEqXwa9RzRp9dtkCsmGfxuHYk3H1MWTDyAhbLWXjuzUesgxTfKFBrf8r9fcQqaHj8RDepftEjaoW9oT",
  "key12": "3QTk1FBtA9E2moYYf2J4XtWJyTjnA5vbjHhKknGQtS6CpSTa4FBdLzDhLn15NuD7ZqFLHGny63apHc5tFTUxxDJr",
  "key13": "5J12Aej8wWSqM95PNJgtWrxQdo92Xthafy84xsC4WDXmwW8geZH2hGq9Egn37mUPko42oYLS54xNTzrcTRoDbwDQ",
  "key14": "4W7cQbSwP1SCkQkAHgerYdt3cmeMoRpYJMJSR6porhu8ZJwAQv5q1Rc2BimEJXE7zbDe9WomPo1agwzt5neztbNd",
  "key15": "mmkoFPYUB3yMJ2N2QDr2PEMfaHduFfvBp6RsrBngyytSURECrDmTcBXQrMNmC27c2KyvoWN7hQ1KpMTzq6HGo8i",
  "key16": "2sMJi3qeMe2Yj6qv4A39vUMESA3nUhEoiENZ8bgK5U7cWEYriosUz1UJqugstMboTc2iajABtuCsdc9a7SqXiK6p",
  "key17": "4hMte4rbFfurC2pAuWtwuzGnS3VZ7c9BsofpNKodgDAT9MkgFQrEmF6Qut6f2yw6QhptJnr1J3NJ7CijFtYtCVty",
  "key18": "4BUzQzQGeHrovNmBMCtbF9FhYaSMP8wDGeFgGavUDEp1CPH2KRbMTtnDcdXwjhoZCrQB7wintCo2qSvWz8nqXeQA",
  "key19": "27guE8aZSg16nDiyCcoL5oRKAK5sxaTDFMnVsSFntyn7PUpF4r9HqNaGKcrvEvbSWkPhDPBdcwQxTYSVc1oeTzTX",
  "key20": "rMfcpxvNER3X4xSkV2F9xfsbydCvxRgjJQ7Tm7pdgD9Sw3FSJjipSHkAKnNniuu13c5kSEkLqso3w73PkPxv23F",
  "key21": "3gFQMRJ7o2Z3NvMhyYtytwvnGuvVVxs3DfsJpwjEZMw8fui14HLxXK78Ps1opmQiKhQcd1WS2KS3zHkfupZ9T2SK",
  "key22": "rSyXr73JXDUxuB4dqLyydSo4YZ5qoeLP19xmQWZPH8Cjj65kpNMz4MaLgB76xT4y3Aceefimywc7T3bQW5chnhn",
  "key23": "63U6UPA7VP6D3hxMDCoVTAh4ZTUv6f7umfGJoXQGikyWrCKRkkJoiBfYVjhi4cU3EKcZnMPv5ELBm16a1j3wNkTT",
  "key24": "5SRBUA2D7fFE9BHXNgzNRoftqmEYMo8dB94Tw4DB9eLBdB3LFPSjpd7SRZTPiD8Us2CXmoQNYZVPZ6qLyUDe74pA",
  "key25": "28zvQUaQZ67Pn62F59pMhNBBpo6WE52inTySmVWcMvY9mR618sQWz4qA4S64XupSEHa61ZUbNbXW1drgRgibrGhq",
  "key26": "rkoeYRXRZntZBJkh9NXVZxZS4wVNqVFjZ6gSbZjBVnGQJS23maBED3SHyBnNNkp4msvFjjuYqMvADGnNuLqAJMt",
  "key27": "3QYMAuYNEXzn6kdjR8ubTnh4jSJYdnnB5gQbNDm57nSXsfFLaknLMbgkhXfxuiAPzfm3HCzx3yHCywpN2VGioLbE",
  "key28": "2QhQUxgKu8oCuKaXigMBFVZ4MXUqzcW3wUsKYKeXVTowFHXQADcxLzY3F686LmGFrDN2MdeRxKfXuqAdK5vjqJEn",
  "key29": "2kYg8DUG2ywPEc5BLJXRnHyMHAnFqgEZ1xseUmrenTriBifkZTTZfG3ypTyszMuhj7rcjaLutSWDaKVX38ATkFrF",
  "key30": "3Z6bFzY25WLAD1grYRmGL1FF5CPMoiSoz83tTUvB5o4o3A1dDM8q4nepfGz5HQqt8Jy4ZWXFq6p3nk9syFF8VwVi",
  "key31": "5G5PkfVxniAqhQJiz4Mp3dt5ZNvYi7iGLthAGZAMtod1gDAR4W1bsVVSHxP4AnCmTZQoEE5dCDCMfdtrZW44dxgS",
  "key32": "2PqjEp5zUxDUh12MbyoHtiNeU5JwhjoLhe7pBZEdqqYo1FZNLAJofEmtAAPQJC4nw9G3AbcAsL6QHat82pqSdWBM",
  "key33": "4W1wizqDMMYaURtvdgUG8KGYprUR9zvdtMBxuPZ8DTvcJYvYyJDsiekcH62fJj9GNCYD1FcqGfQXAS1fvJCHnsyX",
  "key34": "3Y1XvvaNJH1jxLf8UTiLavm3s9PQiCTZszAYTvkxmMYg1PuvWnZgKugCW2E4nza1uuj1ZmVNL6RpmVivMLc6W52U",
  "key35": "2YvqJ5sAtnLEBfVW7C69EHnkS16SEbTkRbiNUusdw4pYtaeob3k1wiiE43UEKG9jCUQjBpe7MJmh5Dg2HXATWnHo",
  "key36": "sc8EwsWMVstrYcfdD2U1pQ8t1gXLqaVRQqdd6gejVKWKXMuAWTztUMb1xUytf15QycHAhRZm8BZZSwwtkNmX8Ms",
  "key37": "5fPSPqiTpqrtUYLiHijQWCYUZickJ1mLK1aaRFC8kQ4eiCem9yNd8YT8tniRKDBoLFA6QB5irQ6dxjymPECSPbei",
  "key38": "5sDJKHJMzrgrUFdS2RfcFVfaL2g2piF6U3XtVnQkLYNjkkbp9nC4cfvs79PFTBgEzC1Ad2XC47KnDw2qM9ntDPDW",
  "key39": "3y5ZPRuvPz77mCtMXYnDuHNuBH4UFWV1K7nJMFpNodQhj2xHHiQdNgqKhN47Yocpitai6fNyh5oKikSffW94jjXq",
  "key40": "3Mr6cZPJCTpH3d9wCTwRF8PZ3jWuxdnJJwpZhsU3mDcyGeZpyuc9QT8voaRGPWgMvAvs9XSpqV1oFVr3smiEJTve",
  "key41": "3GgmKZuQmzJMUFyZ1TLVPzSieH2SNXezE15SLffiQZovsictgTi1WCpqFdZZHz3Znqrc7dtaiyb8rrBVWNmV5Nop",
  "key42": "5MQuFpSbzhiDcJ6QbXTyZGFPRVV3crNzMqCEqT4h4v7icEsfzvVJpurn982aJ463XrHtjFRXgFp1fXUfVcmtQ9qm",
  "key43": "BReh12ZFXx6XWBzsKhZp22ULmM155b2eEAEP1qycCQCRYoEGHfszAxoYYytrLib3Htxdm1X2TJQMscVmGjEiMEN",
  "key44": "4s8jZq1KUU5Gv19P5SNuArzJXmd57QBWVfD7bas9AYjQiyiToQ7UbVsJNbhMQxy6o3pBxsve8UbNskDG299EHrn7",
  "key45": "26jWJ4aCESS2G33uLG2ejq4Z5CJXPbyvt7HepMVw4t65RgU4NExh3fFANRWkL8VHoha6C9sKGEGsJbWUUWyeujPm"
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
