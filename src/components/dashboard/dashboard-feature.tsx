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
    "3C5NLXf9r8jPtyB6Nj2bGzcuxxRzdq71FRsi2GCkNhiYDh5ZHELL58c9mbzcoca5vmJ3BDCqmWHARdipoYfW8vcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k1g56GSCSH2q3WVGytX6gybvSs5LsVe1ffbyzQqEJ2aWFbGmhnvkJQuxKeWd8XCEDvUysj4X68wLYnv3d3JuXVU",
  "key1": "3S5yjtFJy8g1xznmkzWNAg7ERRr9qxziPnm16uQioShmKAeikpfKjCsxUoU9mNuDhuZMicRfYhEU9oS4ai1vSUNc",
  "key2": "5gmsrdr1qVG7RMtpyctAo77qJnyNHeskBGymgRmpDoi9Dq1GvSeFK1ymuibg792uiLsB2szDKZowScsjTa4bfHoU",
  "key3": "31Y6JzcAqMi7mLF5DEE2KVKvAM3YYEicEpv9hVC37UikxzewLBQpgVV6xJfv8jkCzTdNyY3gdSDqHbHuF9qx8tpa",
  "key4": "4q9CAnDoabyv5J9wsgdhnenP8MdiLKqJZ2HN24uJg2eSAEiNgKapfY4ZhGGwozhRzq2J64qZgRc1Fd5HoAf8tnDD",
  "key5": "56BVNGnLqd1vk3CbVcjgyrKoMZvECo2yQtfgawRUzdjrAmebarAGMWzRcgzTsT72pYYdYPEHqUX7Uz5oyXi8qM7q",
  "key6": "3LC4v8A2niGgHr6TWGMUUzAjcktVxHDt5pL3b4Jx3sQzpGMR1TamUVNVvQR3w9wifx2vUaA7KgS2DY2SSsUy4sti",
  "key7": "5uZrzjSArsJgmrFVkE3rcu1scxKhFAHARK7Yu5TUSCV9FYqje9yyrkoP323dUegLLA5RTzyPrk5dZSC6gWdo4gvx",
  "key8": "4gevrSxJ88QJMGQcqKAGKebHjj5rauUnPyGhS5rBYXP8ErKZBNrLjpYyfqQCDMkZNoNNb7EJ1LzDLTWG6TD4GUnR",
  "key9": "3nSPqi29sa6BZ5YzgjsJVfvUQtWmVYJY4JqkQvtW7ZpK6QGnxtb4HjYG8DmejsQUns4mKC4Yj4zs21okquf8hiBR",
  "key10": "3ZztVCFBLKvAYkYU4tpUEwveoqsrgKPmJUE5v4MU6pqhza92LzNzbU7EvubcSXy3heDoCHRAEQTxUQBky75NRfdR",
  "key11": "34mA48CqsMzfmrbQFRw3QccEpw9gwfgJ5RxaweeYfk7Cuu64VZpxtcbPAjCF7DoWaypA4PrGSmyd11vYEt7P8vbR",
  "key12": "2kEBP1Uv6MshV8fqvUaAnESTzcNxfia4NDcvPmm6meaeiUMFPzix3Wvtmgp14LDWUBjSzeMPiKzHjwGXSVpjw5yZ",
  "key13": "4txcWxsMD7KiEdRHz6xhvyizLZFo2npQmf6eHNfhJZimHqNCXLh28pPKmv1MRpeinYBf58Nxf5i7Uo6J58zh7xPV",
  "key14": "EY4o5KS1J71Wc678V38MS9Z4ciAy6teDwuWDRFSxosJCxmQKtt61AstuFiouHAYMMsaBbwC9wWFw3gDq67YcNze",
  "key15": "2cS6DGge4RAE1guJMCQLVT9NV2d2Dw1Cy4c7xSDWvHwuCXryW6WaX2W8wzFqNgeXD9uWq1TYARDikDYXCxMahRWZ",
  "key16": "47mMK5TtMZQavbsiJht4xcsdp5NGtYnnamJdZxeTJFaufHufc9XCxEK8i33aQVTnZwm1xAuo36PeEEBJkV6yvUsx",
  "key17": "5VNoN3GZ3XJxuozNUf1qejApuq6m1bJcDzoGReo8Vq9dETt3yzpTc8sSbvU7QpYkXd8hNpDTtEjwdKuyESFqKTyk",
  "key18": "oS78iy5v76nRDcn47QAdykXZUYxuGxRPTwAbMhwAY2AgqahuiW8vGV5ACtBp5X24t7kCLw8rnHgbthK394PBYBX",
  "key19": "qtM2fN4es9rPTWULe5MvnHis9BGRqy9gsH9vm1XeSmEgrhAZVpwzi5gYvqT8xY3bvDgv1bRcHb4YyLi6SqRv7XF",
  "key20": "2yPZe7jz2BKDEZXkuw8d13P22Bh6YYofmmRdo93csSv584oZKQCV9qajHcBFznEKj6UTGjPNfw3XLuLejpLaCR7M",
  "key21": "rYZzQF6oYzLzpz2juRDWqAdQLtg4rKzqsn7nFV7Vu91mXWz1aQ53QQumNvo8DiZunYzTSMHDocXErCbZQUKcUKN",
  "key22": "2wvwEvZ4ejWW1Y2LVRPCSTJUSejdT3Rgoxhr6LH4VvDpHLsrHPmaxPiHfans4876EEo2ZzaAMYL4Y99PJrpUsYqo",
  "key23": "4WeHhXKhWooKZTwnx9y2dP1zazgEGTfVKPrFcDRiRnAcjoGHWCTRC9HiNb1u5GZGBdkcpGKhDYcvE3CKmNy5SDNF",
  "key24": "5RMHuYLrKbtwCjrVfjPg1MctVEcys74nN33XLjeZJ1FzkUm8J5GZGvP4ryy6q1cdPB2LCkmHoJBoXu2Vjy1FrVTK",
  "key25": "3J1qrvwjgWj3CDAvsSpeCH4g67HyCRB1YaDVgTSKoJr7awEpF6XjzCWTU9k2QXANqT2ZCasJ7kvwJWRvFxFpHyGS",
  "key26": "Au6iUfaGUp9SMzUFrHx2S6kgdqniboSuw3PVT6D949ABQLa5ktggMNNQ4kTEBFTAegMeufs3hB8okgRSJW7wmba",
  "key27": "3mv2xWKaBM3beshMPZtDw1MSjp2CcKZ4gUfVo1w9UxWVHe2pL5kuriheEe5KnkPCEFNaPwmGWaULSVPmfZ45VY7N",
  "key28": "4e31sZzE5hi2fMgSjVqTAhJkxPBWECa1UfC8jvnDUyR7yrS3o8wsAQRy5D22gxv7ds51RCqEJ3CcZxiDiWe9YGJt",
  "key29": "5hHCTxEctfdF3sReZa3SFsvNWUCefUENVVRTVQtH4aXRBtT7bkL1WBwMkGZQz5gjXfVWF9dctE8jNs9onVBkYnyR",
  "key30": "9H1Rm15DMyuhNmsLeZPnx8kPMGv2RGqdMo1DHVqmaTGY78DkCH1t7z4HXeMaxVs2cetZiqe5zyMviAy1UW8apHC",
  "key31": "5v1LQF4zqA9nhZ5hSLFGFnyoH6NAC6tHnpbSVERNHEA84NnL91QvY6pDn4915HG6zpKpXNpHiEFxjDt6LmNt7vNF",
  "key32": "67qfppD49eLRMkMoQKfaNt6XktMXS9XcBxAYE7XTwDyKmHpqzC7zwPVzsrpdnKB1ApmT3VPxbhT4ZDsSBMQZtdaE",
  "key33": "2pVA1L5MqUkPy1KQ5EM2dRG344K5EZ59MQZw7iiYDErvSk4ZzKNMCtAxfSxYX6WjdcDYi69pvATYXU85oxX3pEim",
  "key34": "5Uyq8TTp28QGFsxjJNoL64ETbkZG39ub1GQJgCsymPM1h4w1NrgRWx7EUrLJoW8YNuVDu9wmTv4fFqwwpStFgjLZ",
  "key35": "4eJw1AnXk98yPhbTcqTLg2NVZeGyYHNiinqncHiVVq5ZgfPcVXDm9NhgMAFc52iw6ScRE6RnPGod4YyFn8kKYPW6",
  "key36": "VDMGbfk3bNuXzKuZPR2BwXFbm3rZsNkDXUsaNqkNa11NC7zaFnMA8jRMrieGmpRGPyyq8e8YEFraenXhe4c6VM4",
  "key37": "zuiULhvK7yMYFUPjBwZkw1t1nYo2MjAoFnyopECH9YYr1VJS5nzwmGwruGsnKtgYgng3xocQDnYpMUjJjpZHBmc",
  "key38": "2CiiddDogpHZxMBXkAAn5TvQUrrBWrx9WCz75xDrijwYCDBmn7BJnxKYarP3pHM4387dRGHPqB64XctMnnKHf3x7",
  "key39": "npT89wvPibaEgbY8MFgH7WhxQaMwCgrpGiMiznYUjY6Hkrmmhaq65CZjtCXKc3UdbevhpPySTPfU2Yr4DghCh4F",
  "key40": "MZwFLtBkF7hMEnpLJUZGiHa9qa86jpcgHABUuFVkFVG7LDDNRBySdvGJ2mCvNfx627HJRbGc36wEYZUKxEVp1eG",
  "key41": "5bt8uYT9XtX9gE9xc4ZXMV5fnn5jjE7Ryh9oNqbv38LWyE4y9kzrvoE7axm5mR2xP4qo5drRnR4P6j9L37G3o4Gk",
  "key42": "3HcpnYnoGUQ31M7vGeJQ3RRLbZxNs2hm3uaxwQcPKFea1xAHkXhnLBSuzSDBetdnHvPqb2x5HjFzkLonPLSW5yXu",
  "key43": "2i48Ugr33djhKXpzrQTQ5h3Km5j8uipV3KxPWocb3PhTnvJQxMuGqdcVxpsjknbn7QzsRikiu1D6kJqRkZ7irtpc",
  "key44": "5jQQguibVfikBianYCEusohgUqfrqYKM75BL7AU4PUVWmsNYpzUQ29iPfPWT3gotq2KY3D3hvKp1f7bJ3RjAxJiV",
  "key45": "2rzXvtFJpeRT83tVZqVveMxAen8WjD7fk6VSYh5qZdBVpLGkGXSWsjVzEnMMvQkDyV9DQuT2FfwsmV1dJ8YC7vCK",
  "key46": "4NNpxFDPerApTeKAfVohTVAzSDJGjaQdPV47BzFgprAMTxdydSdiEFg5WWkJT6sMttXav8Mfpfr95WYhXKGx5q9e",
  "key47": "5SE6AjGTTVJg1QWJfNLtDB13CdBRS3qwcqwq9sxmSpgyUPteC378AqFXXU9JDt7aEe6H2g6k2gWXzm6qyhgotifv",
  "key48": "4yzcSHnVQsSRkokV7fac2QFb4Xn5Bi6W29tnmUWhyWiSJ8FbQzB16nUqm3J9r5djPDpTDXcMnRf1f3XrRrHNoEqL"
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
