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
    "2drsG1JzRLMS1ZoCrWZXKf31KLMYjUDMocx88RG8C8sbkQU6qkk5QB5DP3kw6SSsB1BvTFpJU14qf1tWbx1tJrnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zpJzfykLySdmrJpGTTRnxejLd9yTWSnkg1d1n4kTTGLGgUTdzpmqqcWieSQv1wrFAokeSzPmWuyqWk4eKmpnfdR",
  "key1": "3K4fmYVaK3dkb5ZysYAHT6DsYdUGrNpeNUDiMeQ5zk5eXAKwjAd7KdZRCTSkMDqbM6ZJYEG9ZkoLmEZr5KRi1nGE",
  "key2": "5dDSp8M78NFwxJGwsh5kUT2QWgnwwAUb4kUqWQ9Q9oKQHFVQCuZBqwv6VpfV4xRH7RzeYCSL61FQonE24fTatNPG",
  "key3": "2PfsP6uBaVAU6U7pVvic8GC42GFgJ6try7omG1Kau34yH1xqm51PN4jakmrdv8SvNpyB1SYvXdUfbmr5p8Hx4Fu2",
  "key4": "37iQnpF7SA5hc2MJobZWTmyjVxUJ6xmdRQfSLDJ7guez62fqnex87PdcLnENjpp1fkYVdf5vmshNRrsQEdDXiRFi",
  "key5": "4TjiG69ErUjcjbtuFTUwijS6Qur9Dj84MwoojGjvCFP9zsMktUm3fN4gFhZNkcXDvG1YxFdBG34oKWf28q6pP4G1",
  "key6": "22pEacu4mfAkaVPMsRYZATKzxayagrFDzEHzF5DF9hq2Y2B19CxGsnaHk7A62LYibXPka7bbCEhGHMvmJFaq9xKq",
  "key7": "54RhT8n6hZBGhQjhpjjMh8Tdf249fQZDGKujDVtaWrx7qz2AWpnXLqHsmMnS8T4JmaP7mfZu8UbhUPBma85wZFQm",
  "key8": "5ugz81krXL2c9ngJWBzpN51ZFMuxbX2fjT4jgKTjAVJi9uv1iLVguQfVqEM8D9YWSRTdvJuyNtjb2Lbk7DbfeKiE",
  "key9": "65XyqKjeQMrRQPWc1PrGxgCRPmCksKZqptJSm2AcdXbnDHzGRW8kEykpWPTGPPKgZXmAg8Rc6VS6kogEEc6UYZZa",
  "key10": "22CsVQh5eih43V1vmnYZ5h9ALFwCXsZiCf8JVAA9iUojgxVEY2AhXVWfpznutVwh8xyZh31LpJEzs7Fs7taRDttK",
  "key11": "2dGCN7dZmBEUjU9e7RZoja4L9H3bqb92dZB4LDrGpC9FJiD1yyE94AXNDq7DQT3is9Jg3M6eq3BhLnAfQ5CEzs6w",
  "key12": "4ptWHpvv7TQZTUCHmUXX11KsqgrociLJxE34MxtVGTses2dorLK4B5eENknXP8coRzrrpthVx6swyHbQy94skocu",
  "key13": "2ZYHoTfiNH4AJt1Du7Gn7Nn3KdnGmUbC85n6R5vHdNWkuLud7bkau54CWsavNoWqyKvpfN3jQzgv1oTJ4urE4oBz",
  "key14": "wzUaFqhGUgBEPmh1nLt7m22zSgUsqFGKhkQh4zJBn5mLdBoUHnAGDgSEekajSFhADFZqkTTKjW5ac4XPLaaArDb",
  "key15": "58Qb7dGNqFiLFTkghWyGjKxSDaWRfyFAyQMRqiDDxjcwm4ZGrqkDYzDppjRN8otGVwvtxuf3Rr7kJvUtRNZcyjp2",
  "key16": "5WBweGN1W22bqEG5787mHcMZuWiLx1WKWamEqHjhXH8RgZ2MiCMpnaHggxz59PoeaoddM561bCbFq6HiR4FMYSpt",
  "key17": "25yyJpPjfr1t1UnSoM3wFhRWULe9usuqSA4zmiG9KLdrxNU4NNaRkZXUGDR6NR8cMm9aiWWGFwp8pwHUL1hmth4G",
  "key18": "5fZQzX4WzGDcfSFLVCT6NfRjeqNhGwkmCnG9hnxFJ1DBWZfEQ1HtE5ZGyejxSbuV85tTH3uNmwJjyBKy5XVtkZTB",
  "key19": "3weEowT1uBP7xbWX8TgDUcHQhK5zyBk43mzGDEeUMkFoghrrZZCUchmZapmYd6CKkafsCyExU9FSG1cg9Xg9gNx1",
  "key20": "5V1uAq887Xm6j2REq3XJ9jcsAb3GfdKvqLE2fLXW4SmKiCroeVgxH9Zj3ccH3m2GwBRzy5LFTZfSesTs4JSai3g4",
  "key21": "5P4ZUKehgtLzK2ByaQg9c72xgTnn9xCw3coL2GV9CVMz5dU2XaXzuZEam8od8J1PyTpAntMfFS457xbzqqu2bnGP",
  "key22": "3w4GdAb35KkUkJqNTz7huaB5K1CYEWABuX4UdB5gkgif7usSmhrdzhmqLyHiXyYXwZuapAVhEyE6dkYdi1wqjLGo",
  "key23": "4XMaU3pcVuJ3m5DoDDmmaceiC6wxmW2ZgybRvGXbYGQP3aF3auo2Gu2jMBeN8hUnZb14trzBzcHv8ys4ySYkwvTY",
  "key24": "b9moYYQB7E4QD34cPm4NKCxszgLnyk9XpTVg1aZytPsJznkYcaBq5Akxv14b9WwEHxca6m7hXsnZqbgSderdWNT",
  "key25": "E7RjY4EapaDCSBEUGv5Ji13LbEiMyyF8kiKRXHJyup7PJyUVxSyZ2PCh6JWxnSo5kQ7oJUmJujDPJUm54U1aSQi",
  "key26": "NGy9xufsg7hKkfWBry9oSnqY62ZkKWw7oUxngA27rmu9EA9iiLkCx8o6ozKtwBVtRBzfNcmGPLdQ159QTVLN485",
  "key27": "46oKXZK8UVJf8jNWFUgRrqckfYwqmh6Udt8dWmxa2htKWny3HWG4efe6J41ejShvVWF1zpRawwkgu4XjChMp4t4u",
  "key28": "4T54oEnxJeHpr8yJZBAG2pnDCDPuQeidU37VPu2K1hPxvAqYGhzhKgqJbjg9LV5ptX5tgXDRZ4J6yHeLZ3mUGMz9",
  "key29": "2dSDhYqPPdD3H1N1W1j5ai4x1f8ppRGnSUYa5619AP7ZMZNUaT6zSYe9R252oNMmB9LMophc4QErQqqrqj3tsvMk",
  "key30": "5z6iZtYxsWyhqvmAmTKFhvi6p2wQpmxgsfyBv77gdhMS1uuhiXGnSivUJo6aLcjBD89APqCQP7kb1v3u3BgHcrU5",
  "key31": "tGZTSfqf9YV5H47DLFGhBDw2QKrCY7RqbZhk4WLnyUyKaPCNn2M69Tt2R4ew4HwFLZ1FBMs1g7XGW95w2CRv2sg",
  "key32": "4XDKbFZ3EtvnytPAM6Rkwkg6yNG8k64oxsmGb4R2XEvKC2cFCmoGcAgBSa3XisYcxB6bzi7etJuEQFw1YDQCaSMD",
  "key33": "3CB1jHhcqNR6432BX7w3J6xJbTHkfx1m91CaeEh7LSmoyhLEPY7P43vNfrMz6nK8puC6NsicbV9a1dGAvvSxLFYB",
  "key34": "4zDi7YML9xp233FmBLTNy33WjnXZgfziBG7CVJDLG2N8DmncsrfpDmYdjTLZPDaZ72nd1t9KMD8tzqwaysAjPYjj",
  "key35": "5UGb6NFwUhwBG95LFNLyXaSgikP81e1k3S8AMFVR4xsdTbe9sxQBM6Tr4GaUSnar6FRcoqcbRt2KAaTDNcDqtZeQ",
  "key36": "5Agf7rGHBo5aARg6yNcatHAM6Ed5K4RtxqusYNiwN7SxZbHBPrZGUV1mKWrsLyZ4KF7nznu5pNK7dbGAQQmMTmgR",
  "key37": "43UWBMJPn57c3RsEMQnmnZVR4bKykY4HMyxTGpYgkHmiNzXGrzLR1SkJoxdAidqSbaGQxSgqCbxEH8ZbdPuJCy8Y",
  "key38": "2MjnDYnY9RSTuDXFhF4X1yWjW65nHoEB2p9jApptB3uTGETX9ozqxZxJwde6bb1iwe8Y8og5rjaxTKVkVs2SoBEN",
  "key39": "Ga4Ev5SnT8yvKGtGrxDJafffvsqaPztpTrZreBs6taJZoxpnaxXsVQsFJejdbFcaDqzefV6jS6tV3SKy52kiHsN"
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
