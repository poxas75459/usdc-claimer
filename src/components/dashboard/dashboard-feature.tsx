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
    "43nPBgLmbzSe4o6xMVFtTHA3Zxyz7K19GLnJxiZQdSfejubj9hxYUc6PBoFxUK5ampxRZod8mVAX3mzffxJCU9Zv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f6n3sJP7kUjnVkYTaVS3feh6GWg7Kcds2SRPHRvp6GGjZuzDpt3tDhGQ1RWUHnMKeZC9PJ2ueqVSRapzSpArbbH",
  "key1": "Xbh3T4khCr5y8SUdjsqksJrvzKm94ewgTujknFwWT4oxB4PR8bFFZAp7wDrdLwi3RNYncCAjAkx8eYE6oTXmU7t",
  "key2": "5ibQnRtGUGJF5SX886JfnjYKe1huFVeA1EmvXwDwy2hRjDPVkPF7HDqvTgeF6yksHNx65qN2Yq6YhPCEE8xbUWG3",
  "key3": "KSyb6zTuTQMRgu5SiJSKJW6ZQL7C8cr8C7fdoH2P2Uooa3CFx7gttLW8Xh7bHpWN8N7UjemQ3r5eM4SkKfDG1LK",
  "key4": "63SyfdEUzR29LqTPLK88LfsoAoAPPRyUQnPS2C9jTDdJBmmnoo8KPbrbtWUrf7aTLH1Zc7UZifZZ3RBL44EmnNuK",
  "key5": "674cBXksSdQHC8NqtP6qHJc6eA11qVdLhdnUgQs73HvUiSszMQUubf4q4pqKGTbjM69esMbQH1NY9sPK97cpqk2n",
  "key6": "4t24eJi9ZAhpUdEJjiewKist8QDnY4ayaKP5GdhHWuAvW7h8z14p3MqH8PVoHZD4MHChg6JoBP2WLArwMYvQhayv",
  "key7": "5HcWYe2ZcXJCGsFLDCJWLAU34xsRaQjRPYchHr7khjnrSSwYwBneqHNbbFWaZ9JNhgTnHcBNSVn5CLCRaSFFV7Nw",
  "key8": "2M4jjGNoKFaM6ZnKXwtewjYwchvA4ENPXNRXFTc89tr4APQ83CJWtc4kn48aQUh6tQTa7q5TUkQWVPVzfv15frBy",
  "key9": "5MqQTvqefscT98J1hgU498MBVSUU46RK7ZT46HJtjwatZnEy14L4ZozMUhY5PsQKm2uayK5w4amps3B6jSmTkNAq",
  "key10": "4mkJN6XcrDJmQbRY2VBwv2CkFLFRWDuSbgpyh7nfBqFYaqF9vHyqgm76QS569xEvgMrrtXNpMrAA1mFnr4jMN2h4",
  "key11": "5gVmH49iYJKMeYRgRoqGvgL5oDh73g1qSSyVgC3ogu15puUvkw5AtMyopYPbHnSUAtULDqWK5hFdLMuJF3rRbzdu",
  "key12": "5zKTSBHE8umWNKTKVYXSqA7tSPDAYpwbHCPkkHdHXZnNw1xu5G7r6iYVr8j4PMe74hhuhj5rGNGb9QrQVghwSWbi",
  "key13": "5oVQPSDNXPxfanCuGd8Bckqkm7DDctwbt1Lr2bPuMFmUupMmhpGEcJvTPbRkZaibbAEYNLXfHfv89yyVrHo3jWqa",
  "key14": "zmvVCJWqwQ86t6rEDFAdamqctTLXwpKKahJKxCVfFTBtgZmTeu7sthnjdZdwZoQkDR5MsFzxGAL1kdAC26rKm9L",
  "key15": "3jpRCJ1kWcDTa49rizJVXnnLumms733NVriwqw77wxNXRuZthrVp4NPjENHKEefgd2PjtBQeVkkcHQ7jz7waGv7z",
  "key16": "2zPZXgqsggYUcKKgBNJr5Bw2Q5KUZRyLDRJe58Z86WpPt4bhg3JQnnF8TxczhLpPHxyqcv5iDiPEw2hPgLAWh6xW",
  "key17": "4TRNAwTWnEyiicQ5xqSa5Vwg9wsZmLjmg6hw8CCMQrM8hW9FJoii1UpTekbhPjdcRY6m8vigQFdcJG9LyW3YwBpg",
  "key18": "3gm19j1QxDwtS7zcUcAydsPSCoVheZU1BdQXuMkhVoLNVt2gCZApFoNpHx71AxjE9Zeux1Co2DJKgs5VUAz4szwt",
  "key19": "S9Myf9PDSEuXhLYfmfVr4ZCSJe96aGc79j8jEiJz4zAbniojRZddpVVEmPGF2tTV5dT79SeXZykz6XzQRpMtbKq",
  "key20": "4VL1xdUbnYMpdLzBcMDE9MkW1R3xcK47pUBRHJouHtv8K8SVnoicPeqgjebugeTLRDSkcH1LcNipoDa2mrY5E7SR",
  "key21": "5BY8fhbBvPB9kjLxv5VjFgnyjHLLQbzRArfJfHi7PT8diqBWpmtoQn3qnS3wfsBtY4EwFzRvb9FhUiY2UjUqNxs5",
  "key22": "4RbnAhNfMXNwYHTH4wWFkRtnhVtZFS4xsbJpK3GBGu4uziLRaPNUG1pGrkXTKe2ndt1tn4GfNUqq6Kiq6JbVzYgs",
  "key23": "5iqWw3P8Xd8ozw1nY6VLqUfsEUtLbENNNZ5dcTazT2wSk2BdsWLjr8CEB9i9zpxoV1khQQPARHnqNzrhPGJq3wAo",
  "key24": "5v4T1uwVo9hcoEDp5BPwRDUDunFkc7LJQkyY26xS55c23TffJ42sFFgGL63CdBZksgvY58qsKKMepLVK75wvjocD",
  "key25": "2L4qGXyq122oGqYPbwk1MyvmvwzrfxJf1EoL4iiuEyBmX9yaPQdHnQJijbsR7ka9zn6sTLqnMKj6PX94np2G5LhZ",
  "key26": "3GDe78NVEDmjnFZkvrzQGYNCvzgoWXzVePES812Y29vG1upLn46WJRHRjCnehq1U9H7bT5NFmwt4K5KDzFoLaLpK",
  "key27": "3NitRCwHinZrr8SMyiaJHFXRcwBUZcnaf5exTekJ69q5rnQRTuxLZfwEEjJoantN5YHAnG2X9NL6VApGGDg31DFR",
  "key28": "42jrMg73RyXvkdxcqH9S2bGXKE6Jc6nrjdsJWvvDAyvwwBnCAFBokE9jZDLoVuZxw3HAiQZHgZJiXRvMvqmBuP5V",
  "key29": "4p4GYGLKGofrJz5vxL4RMEyWhAwcFYFD3LsLdfSozbZxRWAXHSW9yzpLC8kGQKnX8FEaxqVi4z7SKgshdzpH8qN5",
  "key30": "3i2UBLTsSMuHCAREabAgVgQ7zE9xGRRs2j3ZFzjUDYuMTcdzkHMt6oHJZiVrDHmo2Ae3NzYA7tVNBs3C8VncdGNz",
  "key31": "5ZDsDE4GXhS5HZ6TwbV2BV8ALKYowczrtxVuWgk8SrEYanbxfUXuvfrqnkVzHHtud3E4v3MdnmK78Rbfx5TMJUna",
  "key32": "5QRafRwP639vNU7cRbePqCYAkzdFdJhi5qR2iPx6eg3SMK8ZAXqu7Y33Ur2qzSxVpA1ZTb66jyJDdLJmYHDsDGuK",
  "key33": "3oqAsdAMd7KxQgzFrsbzg68QDcGfvbzFNizMaCWimGBukFxeHRUCxafijrNo4fSSddhr7HQvpbYHLVb2rdySpAss",
  "key34": "58HXpBnXzavbqCYDwmn3F2MrExry4j1AKUihcsLkQ6B3qgKMZRW7S3zcz14BQXMH1wvmfPLpmYiw6oRvd3SQ7NfX",
  "key35": "4JfeXc2N5tVBtkuM1GLzCVqj4ZYzcQ22tnzUY9L9i4PjAWX9TcPYpbFWXTTSYzg7RtswMeabrXHXsBq4yZBokMVV",
  "key36": "3PY6vAXwQJAaAykfg9XPLrfnYKawEnyy4wh6xgTZiRCgqhirayahvGC6NrHeEcYGPcy1cLURw1YvyKHo9bns5FNP",
  "key37": "4Csgzjcm4SPvC77rkHBZ3MtBX9D1WCETX218BzyRSqzsqppBVmE2jGULgTDS4EsH4dmtCyqBMyQbbjhWHdeLKygt",
  "key38": "bXJGYaFay9TL97fLgnnHam7osbCxA96G3CmcWVSSGK98gBwcCzmNPm7C8efKxesBTK9158eyKZgAinKLgzwBLTd",
  "key39": "p4DuyFrhD4zHSv4zQzKeqPHmGhbdepULgcmyxJoQekhHUw1ZpodcU2ZXNBdDw9qfyML7yyyYFQETYopVDhR4LSb",
  "key40": "34YSWPhbg9UNxX795163iMDt7gkEqpz7WeeDZeFBjace15zuBDNAEYJHnS1HAbZEBbkC9DXtcvGocgWX7ja3erdf",
  "key41": "33KxndBd5GpAgTmtca2UYhMpWGr2ZqP9QsNj4kRcuunWr6goieDEnrmvYK9zixActGL2ugzanMy7iyL4gQCyo2c4",
  "key42": "3C5iXgTF5o6xkJN1mwtvQwH8i1PRNFkoSXbWsGiP2YEn17jCvozagXkvRbdNoTQmyyXVKMPKFCST6jbhhn91oVZQ",
  "key43": "3XzoBJbq9HGMzKB7v9JoYFk7sk5ZiLjLHXiL7jcabdwqKCgBqXRYee1Gsn1UqxeBBgHoJXe43MQgbnhuudazU5uR",
  "key44": "NQ1HNkC6JpDDf4FoUjYYemNzRxsGHNHFcC7jUsduKEr9xWT89oLBxCPgmhKESvNM9W9LZCd3VM85LDJGgQL3xfD",
  "key45": "3zzpkSCoi6E98nqSNWj4SQzvfef5WEEXXQ3kEVZ7qebLSdf6mBNM66XS3Qhv4pSebqLU53AnbPZ3xEdT4xpcvYdq",
  "key46": "rvYjSgFWcVhJJqiKM1hhHrTZVTDrQL9RVpKo3fUQGr1A8MRbJXE45iiFoDPjWBqqLQW2iyARQb2KSDgrw84wPmh"
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
