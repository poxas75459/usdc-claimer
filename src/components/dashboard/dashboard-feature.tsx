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
    "3TrgqooPWyhsswfqqsHQAZY1kgsMwZPmCgof7A1Sf84SLrvfur8ZN9RWsSSMNvRx4w4Kto5cgHjSZi9PW5HmvGod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R6KyFpmqu8dc53Dkgt5jKsULcdG9TKsgByq1jvQHH2wNLKqTNYw7c1M8GdckaBKrUpYMePAtHe58ncyVFeTva51",
  "key1": "uTnTLweTyAA29YbqZjpVy5zhUxpq8L7CrmU8JVusce8FsA7YxJrPSsLSYRWtoyhvZCLoUuquPH5DycFg5zxzcCd",
  "key2": "3LAAkaS2Gj9Yb4uwe7w2nnzsq95oEi5ofVM3rGCsoM5X7XZQFLZVcqYJR1RmEk1Ta6fN2meePPceBUiE51fgPpm5",
  "key3": "4vUcLNyHHdpcDpwnsU73NuuDhvHgcDZvp7pb2X23xzrmaWDnkk8BCH5ySqdANzEY6PZqgoyxWxRumimKyojW1ZS",
  "key4": "5YxReVEs9jnubx2pN7WKpKsR6MttBGTTHwgHxA3N7rZvBG5Vzu626bKWN2BdYNyDCjnr8FJuohXDjJ2Z5hCFzL34",
  "key5": "4fEYinN1KBUG9GJAEjFLaG7QuroNjaEUtt5Nsi1E9Sdtsv3XHNnAnaGY4fHZXzaLnjM751bH8YvQM5BX4KwHa1Mm",
  "key6": "2TNGriYyMNra8KfH5Ar9opBu7zEX4YhnmMfieSYWmipiDgW7jvo9HYPqPhKmV9ewbU5h772VqY7HQWBUGiE2u4n5",
  "key7": "2suyM8cm3GB2Sw44gqfF21PTKZL7Cvx4dunEt1RAXjzpBoBrCskxipSxqQevwMcUqYYDsg2MfHpy9zBUvBv3AzPZ",
  "key8": "4kNL43taBWpLwXoL7jeAzJ5oZVGchHLhNEdxBKdiMHczYewXrFrEvnCGTDfw5vr2Z1oqiGRnhvSPK6wThHVqSL3H",
  "key9": "5FdgHMzGxiRvA9L9dEm2SVHgY4tryuMf6yK7pKEzXaZMNNFxNfyfYDu29TCVd5uzHZubZMkBcpMvrA9iHJjXvu2c",
  "key10": "4M4xja2ZmnwPVcqqmMVr7Gn5jfBJXnp5t9AUgv7PEqLD86MFaw6rsihgZkQXNP4YqKM2AhHZBBjnSfWaCJgCeRTe",
  "key11": "3D7cRRYBewvHTokkYWbpvjU4aPiY7rk5uGwkFEvKARNiVNspJeYuumB62yvtbFyKPDbYEoiB4QsQYDC4KMY2cG6U",
  "key12": "3RRdx9FEUEAtzGgoZyvJ2RVRkMSFsjjhjqTbPCuZTL29NTJ8KVHoo82P72rzExhftNfDaj3m7ymzS7sWxREspF3Q",
  "key13": "5dvj27qoy7FynpBXFGQeaoGAp4oz3R13AcD3bDgSQ8dwyHCDHPBDK5ywYqckWGWQEzkkJ161qESnpJSJQEgKKAjP",
  "key14": "mbBhhwUruWtTgqMUXe1PzzkN3nWRzYC8zNhfRowqHyFdmpauQCEdWW7m7aJQZni8kJj5iKXDNhUohvphzG5SPr1",
  "key15": "4nFHwd5MhEDXevekaHTxwkEzND8xBrEd8Li8o8ko9W8jhT6Nvsnkt2hxoKxTd7QGJ5JiF5QLgn59B26juWAawrLZ",
  "key16": "1Uz7HzHEw2p6VbZmAsAmmkUHbgaWWHyjjXvpzH5W2THebhLaQyB7oejrEUXgz1E3A44HVsR3VjzuQqks6KaiLij",
  "key17": "51bUKQ4sBjQZkCDWncAqa4LLbPa1TZDjjnXc2ouhtZvtBtf2WrTP5NECyGEgwxoSMBp1K1UF32Dx9Sbe1gDR4Yxc",
  "key18": "38AMjC4S2FyGQs5JJXthuJk17LuZQ4dTA44NSryQERct44nu9tj7xT2xz7aJU2vA9U7MpyJuLXwvkbd3YP7eHdbA",
  "key19": "3cUeYehDdxHUnqbez9j6x8VLyA5HvyHmNZUEuchVmNWj9traVZaiu3tiKcgL4WnAydamksa61zt7Snz8qTmqghx7",
  "key20": "3GSPGUhxV9s6NW81fnW3MQhmQ5B5L33nZBGAz7g1XuWZLFQHr3AFxB6q8hxuQMAEpyqJbZHvsGbwg3bDPxFDM9v5",
  "key21": "2EEZFsvBfNpZ4zubrKbE1Vo2GgZMBkuYvaUGLC1AamJ4By2E4311PTExi5xkwNT8GmJPXAnifmYbieFna3HcLQLG",
  "key22": "rcZDRxDBembmJ1Jn4gUv7YQmzDJxAaaQqsRpr4wDtKgnKkiqkf8iCx7vpJFMm3iBAh93CwBJwMBJKkDjrUHqfms",
  "key23": "2YKFrjKVVKr1jV7V572whH77y1TgMMYsTqeuxhbdBu9vSjDqzjb13QricxLb5tcS9EQAr6XjutAxuadxJM3GC3q6",
  "key24": "2tAkZf71S7Pkcj6WGhLq4au3FzVP4ajiLkM8N8xrpzQYKPrtUmdioZ4cBbT7PGLm1rWKccZcUesGFyGpRmR71o42",
  "key25": "5dGAmM8YMCdWSgRiYeFapjQfsbHuZKbq1xtej3GRgNLMDXHeX1BYDvUehkDop1Eo7Vq3ZaTBrRtFYUdJFgBMvqqE",
  "key26": "yvBN8vZyu8VbtJbj1Ux8GXAidCFAQgRZmWpDNthgU4HuiANRSTPwbea9cbFqv4TTo1UjZZho1qppWs1hFXA1htX",
  "key27": "5c5AJJbAaqC9iGSpPohoiTNm7ZEGT1geR3FmQqFWjuMZkW8o2zjZm13hofy8u6wgB8dHXWFxh8pPrbwjiJpejiHs",
  "key28": "4jjteT8yXDfbBdYpeumQBC6sSYq5BXrAXwao5sdNLRzS98B6E37p9TfSbYBDoyMdsL96EUgu7jA8JPcszCQjUR3p",
  "key29": "2iDYLrNXKiVn3XsVYwQb2QbS9u4seMaXXvuaJLBiMNYhqS5Ujh6WB6iosHxngtaCNazQXpMYYNEHzTKP8xv8wCNs",
  "key30": "3gybddgGfNHkU4b91663NEdeEQBj9ns6uyufgXPogjMav17jTk5diVHYq5CpWFvKYDYEcNdrXXRZ2qvNQjaqG1tm",
  "key31": "3LLBX81sezfQ54khj2Ywt4h6qRoRMLYKUDHTLCTVCTew7rYLiKRKUmNPdFzHyDVP1wQosmrVSRZYp7iY94tGfKpd",
  "key32": "FVM6K3ZaaTTBAGNmgFgEsJpmqMrAcy1CaRj8xVVDPV339SdjyEFvAcT9P5YASadZKE8ersfdUp3NEMhnK5Xs938",
  "key33": "4kcs5YW1nEDB2PaYbQdfQ1Cq1hM8gntKudw7G19RnKcn3CkBLtzCMKvJFzKMSCXG7tw7kVNwFmRkbinGmekSPdLe",
  "key34": "2knSMcbL98SoD1X6vPm584cMC4aSFwiBc8XgMEi47qo29SvHV98TdZTjHc6mq6G4W2ouaz1MQRsC3ShirngL7x79",
  "key35": "HKxwEAm6vLRL6aW7VUQoT93xRXqwMEHs71hcsiq9Gffs2XHMYBK6hJAL8TYzyJQou5DY9wtwodC2w3Vu2Ny62Vo",
  "key36": "uwwxJ66Tw8wNNE41vuGkXURp5qKGUM2FEELqPwTGVBghvpe22qhLQ5VHH2gy2souuNqGe1qJEFp9mZmR4FsJWQC",
  "key37": "66cAQaRQfBpXatbtQTAUCFxwDNwEGSbrhJxocTLTKVZnxVCRw2WPLBEEqd89dLkZ6TVaXpo8AcdKiv1MATDxjkdA",
  "key38": "48g7kdknvhf1SXNFciQRdQquRABnQkdyKYvbghF2RPaVjZxqRh2wCjWsa14sqYnijAJZ1aXPe3U9NLQuMJCw9uqT",
  "key39": "4TwZnvgMHYwLF9WrxvbZ2SRkRo6knStFpLnZVabXwou1tX516sAB3iUouk2v6nVD2NFZ7j2gP9dB8s65TfwxtAXi",
  "key40": "3qPbn2ZXaj3LQL2TShcQyDvNj1wykyDVLWVPQ1MXGiEZQQb1Wc4nsBhrkiA1PKDsDxPpkpNTWA3BRxsS9QPtFXLP",
  "key41": "2htx8ZwT7WHH6SwKbUpwyENeS19wCjQtEBLQuf77HziQCCbv9HPEqiEoenMyjiTkXo3bW3LSHEL2gDaggHGE9doN",
  "key42": "3vZVWKYdaAVtpD543ZYf8AinGL2br1od8g1FBcgB2NG7BJkmA4WrC8p1WK6nkY3aVnVjEjJ5aJzJutu5bUGexSF8",
  "key43": "2ZJP1mSB4CWt2m8bUNSZ7cpLvh3bu9gPT6jEAhxV8484hoKbUA9UqHgpRGqtYfbsfMs5Z5SVTvC3apgXRwFEixgo",
  "key44": "2PtKQG9Rt1Cd3fVjYPLuG86i5hDuqCkvM3vXafic1a3Gsqs5wfQ8K4V4tGCcRyp2gKf16JZktx7gaZ21GkDFF7Nh",
  "key45": "5ET7TASGBRdY9j2ChbBSNLC9yiQSAjuk1hu74xfa4JGHREF2mCd9jVYoJjd7wRPvaUBRaJgDKkVgfr7nUD6DhD76"
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
