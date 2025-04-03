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
    "3wGP23j2H8Jxhw2YwSSxhBtkmmdw2L3sWNB21cMYAKbPY5qgXW17idv7U7PBfKut3p2icbJgSmwLjZXwhDiQ817p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zi7fjEZ7UrNymy3PEiDC27sDRGTPsAyH2aBZmtfunAUzWE8QRQThnxG4oFmWnvRGce9cTKTfsitSmkC6H4ebAWb",
  "key1": "4Z4VkTyXzmEiwigodS399E9d5MT7GXKcyyavd5hZCzPZre79BtnbjQ1CxADTGfX9YUoTsVWcnj4TpoNk3kutyBp3",
  "key2": "3tjiGJiBaYHfpBL15av8swossA8gP5Gc3eKBzFDG4yGt9oJNyXr3cwGHxtXCFKT82sRT1b3CqeFngeLuHXYMM69G",
  "key3": "zCeno2LhNiyw4MPnSUcZN4akqYRE3H4F5pejHaQGc8vEB88YB42phVds7YHS8Hcar68WKEiNLTXQF7ppndn3fbM",
  "key4": "26jowoPafqXNgNm8g5j3nfZsEwLfvz2aYpGi6rtvA67LQ5HMEaZsbN297wCBmTsAQDEVcJgg2EzBdabtnB9jiWSa",
  "key5": "2ZEzNRvuQhiSstAjxpoBuPfYcERNTEGgPB1tQaz1Y9vywRXq3fTyYsRrj6iDkNh9JbANXqMUxzGHRJuocCEkMrY8",
  "key6": "W8fxSAwuCLmwdsSEFkYNmugktVUt3oAuiofXkGJkhLX1d1qwgD6rafbAn9zSgQFKaZPdUtgiHbqsbXYUwJtWD1q",
  "key7": "73jpX9op1BjrK1uxYZXuomq7iT9jst8UmqADjNmX3tWojVWDkv99L8uaHSqYwJSDAxqvuSdQ8KuYwUvEXxWKf9R",
  "key8": "2yne6gavbYtq1wAgp2uk5nX6aUTNKTZ9JNDJCee2r4ZZuiiF6yDXXz2mFNa6GLTK3FkVcjzERRypYwbdcdZQNmDN",
  "key9": "4BdrEG2G4kaQwSFZrUFYQHtnXX9vhFeyzuHfPW7FVHUq7mzufzwBMMkyJwiijjZ5pc9qcKwgMZPbTHCvuvAdC8X6",
  "key10": "5ZbHsikU14zxzjeAQD1KGnAtYnkiFjTMj3s8JHZmMCTjEAddx9i93xzk8LtvZzUGVtPdoVpaYo8JXZmiLWYvxPbD",
  "key11": "4X3u8VaXgWWPmzY8FGK2Vx62NQ14xuENLh1zKqUze3ia7ZD4HF6XokJM3Fwc72KeKWvQC5dGTupN9F4XyMhuH5SD",
  "key12": "2FsLB1GeQ66Wv5foBB1355hvHWR86BdzY7MEgqouV8SQVR6U6t6ZuR37ziUpe9Ae4zDwVAYBhdA5FWUMmDBhDijQ",
  "key13": "dXyLbWE9cgPaTBfdkX3q8uXDkqFLFuq9eZPKRtnNCxqwZjNAf1nNRVcLr2hwt6hnb9hCWgmsZn2ZKKjEtApcP4E",
  "key14": "4wwCcjqo5xhAYSFAVBVEWwyaFti59zqrDQtU6RueiMhGegaXxie8fRiHqPcgBqM2MFBrssp3ktzw2ovvMmvhDGwL",
  "key15": "643QonDRCjfehJizVZMv4in3Ghsh2a8x9yXqU51aaGZBeV8B6ghHo8yu5b9j25h54RbqRQAcCjHChJ3dwmXGDtZG",
  "key16": "2Cn7C8873J64WwxRiEY97v6D5uEps584UfFD7927Kg66KE7a81gd6qjN7icEjed5aZU85UM2v2uEQcHxS5N2uLR3",
  "key17": "3SPXA5MfB1tyVRsCUxbmG6w2GKQKZHBqjcpzxZdi74DhmF319wYy4ULEBqzFuV2YuWJ5XnPFbhdUuhb8Bf5uhFNC",
  "key18": "2E6tM8PR7XxuJA82W9aWjySPJanfRyrANqkwJnWZnhKJndVKJYnsMC3uFDxZKxaxYKdswovM1z5Lvy1ySErNx9xY",
  "key19": "3RpK8j4qG4SppTq2xGQHLMyuYAAW9CJiEw2VW3rcXSJtDtGdx4iqAqEhtspWhNCT2Y9n6F8ghuWAZEHKMYwLkvEq",
  "key20": "5CceLAtE1VwVfgZ1RVi6SGMTpe9WqLpPv1kpHL3q6c944cSY6y9NzrdMJsyUgPPCGsDJoUsnRwFwVP87DAhUa7u6",
  "key21": "5amq7pvJvXk3V5JNRMfcqiHQoddCYhW2J9VhM6K6yWfdVuym3U5dhNjW6VLJbfWctP5f1dR8L2nj9cJcyBmM5sCo",
  "key22": "466fXdYK76rhuBaVB8snJZkYMrhCqy1FNPMRN4j2hfd9Ad1QbjSHtQN9nd2Sma2DVQbLvbyDaPdBHj8Sqp3HwxgX",
  "key23": "2Tf7VRYGtsmTPTBU1fp3vQsvK5veAeN6X6jgHBkhrRhKGk3rzydgNCied4qUYeJvaUveX2WiH64VoBPrZUvBM1be",
  "key24": "5Z3nFZerYwJHsFBXVYp8bwKREiZMdc5oL3tY1ArSzA4rGs8jpXY4aqye7sQvwscyXKW4ZcPm6xrXtFdS4hHYH8zf",
  "key25": "2D2GoCmMhxMHn9KTsTnxDTzyd6yZ3ZKSnFLrBdKAwS2vmajSUVZa4SDb4vsLRsiDraKEyezp7RcwoUcyaeiabG59",
  "key26": "fJPFs54VAawv9vcT1L9uycVUvyysJBw7mYpB2yp1J5ExdWwLg6hW5AkEXcRsPLNnpR9YWbbuYWDzbVwG72TikuN",
  "key27": "NL7pyNtUiiDGWMR5GdMyjTf7DYCzk2zvsj78vVyZWCFv521y3ti1x24fRGs96CxXgHRC24wEp4zDdkMMro2c6Yq",
  "key28": "5ajWmn4TmdNvvREpet7tUg8YRqq8M93tXhgKHvwjwJV82N3eZEaScQziFoDrYDgtPyb39HWuZg9EZrxxg2NDnfKm",
  "key29": "583xucHCnv5rtjGU6HtZuDB26RHHXfVHBqZGdPmSqbFdugus6ZsYNfTx1g3vJfYUuSWpg5XUTuXQW9vCiF7NzCST",
  "key30": "4QUgn1EyMz6ieeMMnxSpN75A2i7t8MqGbx2Mom8j8MiroPA4NnUND3mrnxT2xn3ww34fLV9xXhfryam3hXP7nnNh",
  "key31": "3A73pvhCr1gnbXfAngckBFc1BcKA6JigX2HZkT46LtzekYDyyreLP26nixuSYw2QTKKLP95xYACrHqoLDcrULkrM",
  "key32": "4gGaKnXsZeRLTbHkhpv3KBtnzrQ7YPdKvFBJkDVc6k97JESuWco2dABAgPC6XkWai33kSFNq7fBhjpfgsequGWcB",
  "key33": "6VM9Eq2qHVjoghWTWRHzXxDwuZZ5S9rKeHxXWSuazgbLwQpZcmoDXU5Q6AXkYF79LbK3Abxo9ZLjsuu8amWEN69",
  "key34": "5X31rt4agVjL7bRTvfBgt6eba5iBxrxJfZ19uwJvkmTeNw5NfTsLh5fVTQ52w4rMDysqd5KzgiFAFZ2Z3Rxo99qN",
  "key35": "Nta185YLmJCsPRS4JWb9GL3vBurUoYBUkDfkvF7cWVLEfjnwA3K3uwUrwSS2kUyhU1SF89FAiCRMQ5K2trNcUqu",
  "key36": "39h8J1HMda5vfc4vVSSUSARZJJG4GDSbmdKoGN2THAFETk9MaBepgjALS5DMGZvwdZqcM3881n7HdxnGnmp1rgJd",
  "key37": "2Q4FGyrCn2jmSbFpPAz9qPrkj4DWLQ9n7W7rn2J7of4BCNit7TgXjo8H69ZhLcjGBvdRxbU4JumeaqsrQDHTMvQe",
  "key38": "qQxP95GHyaXypNBhZ8HgzAkwm2PNFuk6Hnb8a7Kg8qz1PGWZ9hQP2vMEqbo7LJRB5tDd8Aerfqrsd927teGUBh1",
  "key39": "35k2YNKmfNz8wFNYK2Gd9BqEJye5k9x16eiW88SCWRmMzj9oKYSWjByKoNG97L9tqttBiq3ozZcUVjYDZAfZvswB",
  "key40": "2ESvAVtC7L1pxXBpCWFz63EBGjVc8Ft4BnDfQoYmiBTBadTnYpfuHB1Bfnaz4AekALL5xQiy73eapcbFD1BD47jy",
  "key41": "AhUVkdUNjzatkMEK8UVU7yu9Vn8uUDFkGCmTVaJZ7YEjX3YLxMqvv56ddhPpq1vfnosWqyZEVFpa1oC4CGRGmvY"
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
