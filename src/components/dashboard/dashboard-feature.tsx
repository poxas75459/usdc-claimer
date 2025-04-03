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
    "zPv8SWc1ii2uYo6aeacWkjxQcrtKYAGcz1gPRQXe422RsxhBzYPvLdubqhJbSnXBXWAmKMEkfFJsymnFsPhqNto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z3ayK9xcVm9eAeeTPgKhNFUUFcgAaRvzEuu5CX7iAeDYPQexmBZjEMBikxduADnCAqrTcHLVP6gWiT2Z2EKH2NU",
  "key1": "2dM9utRszATmGS1NBCu6C1nnQFukuBGjsR2MS9dGDXevfeMxhNFGmVxpwVQqx1XyrWSGCb1P53qr8fkz6K59CvDf",
  "key2": "2qmu584S3Lf6SjPKDhxU5TMqZUdqWZrLwBtFnjbXCbfQicY3P71opTp7ZMaEdT9JKtZtzV2mekmCxs5JwajjS2gT",
  "key3": "ByvzacSY82X2HmJSbUPJgGUshbZWbqbHvwnD67UNeBat3ivhB8Bac2pdSvUN3Hf4qBkEHATmT9PQT2U4Z72mzpV",
  "key4": "svFpWvorqFECuokD3EmLJVnJ1u25xheZrwy422X6EqdrUvXG1hKgJpP87cnToRbsRKPAxvFcH3PuRigj4jFZSZT",
  "key5": "3udaPnuF1VzyuwXqpJmm8N5Yxtt6Gwb7mbe7767qZ4H8HaHRv3X8rU1zy1wzoJYijdCdhGBPneZbEoRQW7BMWqVu",
  "key6": "2sXMwhndHYFDjs8As2QoegyPDBBwNuD9tBeGGbVwq5xTyjQe29sQkDwBbTqigYcUVGDNbpip7fdGLDnxzWkjbWtj",
  "key7": "3m8VPRiFL7UatRSkhipS9xmB88fmcq8xRer8ZkRPYMZgo6gdY2k9jXv8WPPgBVHvuSX8p4jTtrNc9o7enGgQ7rz6",
  "key8": "5h7j68pHYbtUF3ZpKgmGF2v9wVafsW1Saarho1LqhM8RxsibZ5jxmgcofHAfARoWwE6fWJXA43gNv2v6TFnc8L1B",
  "key9": "3dtG6bxEY4rquBx9x8dWdHvzULAZXNTNF4ERGbwAjABC67jefS3b21kLgzxo7baCVGaBZNnpNxtuEd4pL7tyz5mo",
  "key10": "5TUeciNMjCFWAnAhugTeRNFAhR1v9QtN2gqJ8ZMDeu4PgEKpVVY2MHb1KKA79thTrsjn3Dyr7ivj67GKEZt3aw4G",
  "key11": "2xCkzDYKErm1mhqRqpQbsK6VuAhKSi6XMoa8YKmExSB72wUQ93oGJK43Yg3rHF3KwmeT7viVKGwSLYWkB8aCX846",
  "key12": "29HakCgKQPArP3NarNJDaYEL9BiyJXYE4m6QftoeJMLNqTbSBuw2Fo38AzmMMTBSvg2a5X6aQFRr23uu214ahwAS",
  "key13": "3DCdxMc6Bfak75Z4xtrF39yaNCmnG1hPKmmz15Bnr9yKytMgUzKTfeyuSbmWAZpnpBTSpGzZ2RUmFG2Qk2kpub4X",
  "key14": "3mbFWFq1d332NPN2VWDtRuAHsPpWevdsAt9whZPFH6HERqYFfUUSHuPRTE4WU7Up8T4i8zQ1JcSKQNWzwwNjCNSg",
  "key15": "2oGjjyuzXARqya4P8TmjVCA4roeMxAxyj7iEh3CFysS4sfNNzb6RnTsoGN8CyM2BtG2CYFqCaaVyNq8zPdUBmNcg",
  "key16": "2MuATnJCRENwViCUHqtR476a623pLu1zzeDe5kR2z4XfcBhpPSh3tz5d59j8Mhxjwm9H7rcwJFj9CoMtJumqiYJm",
  "key17": "uMqXDC9CrQdQYawXCw6bCi75ZF3tYJNM61yMERyLgjaeXjYtWFn8Cj9XagFuBiBqLTfQYczqdTed9E9i2NJ8iqC",
  "key18": "2ZkUt515hahCJEEZAPyRsRV5nbRK1UtJy9doWgE2VEeaXrfVyuTyAKvG6HVcEKb4qzM5bJ9PR4wQidrkKswEK3wN",
  "key19": "5cBo2XViZhWXkrqAHjpkDPmnsTTCFWfun3Piij8QRf3KGHyyy1cvWFdrQ9hT8n5gvFzNmPT32C4g2GzBMmSy1xzg",
  "key20": "4mcsbMmAKFCdpaN6PyNRrNYJoBkkgsRtfwhvu9FkM8KwpFvHvRyUGtnrc9uEcnTvADQjALk1fmMQqDh6bReoXLo8",
  "key21": "ZwSJSwjtMHkV7rrFHP66StQVPiLTdjcyHnueCaik6k7TEfG25vck6T7sjLw5rVSPFTBetoUJmH7SgR8hT2HBeAd",
  "key22": "2AbSbK73uQ1PD1UFy7UeGGbRnT9wmHefrsBj3ndk5s3ZD3FMBLrn6uh5Fr6DGd2xF5eec6Fqf1svAPxrqcwtLUSm",
  "key23": "2jDKyDLLrnH4YmUkNyvSUiEAMUHKUcfr8dxsLBU3rZ9dp6uMDf84yMUDMw6YeWngBcU5FNhmbkyeKo7kMgiXQtrE",
  "key24": "53oNRjFcjCEvXb7rQuhAo1g4h6ubNA8eaJse216ezwuEghyW5xr5tWfhnk4N2QC8MC45rDHug69oKbQTMq6p9mob",
  "key25": "5hCXyN36zLGUnVYiV4KJuavRCLuLcN8YAxCE1abQycipaPx4cQriQBiAaZTHKLGgeDTsoHEbgyfcSXecp9JY4KZa",
  "key26": "4F1qx9JgAqnaYLSDXGqvsigyCRM1vG2HBWcii5cXjqXUixUhxEeVcbKHeZNHCYBYzBYALFJ47twLp1v798vD9CKL",
  "key27": "4bvUHYAd5j7Mo4LczRpJCfn2y3RsSvcs8DnEkv6gN3ir9N8SUwm7qa4oqoYBq37quXerDkMAa1ccKLZhK6B88DvP",
  "key28": "3Baik11eX9kVBinZrUPKTVPGrJstPZZjoPVB8aAkBDfNFFsgbgnaMKmYf5CWWCFzGYREG6TWCXQ3a97GLaFYR3YD"
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
