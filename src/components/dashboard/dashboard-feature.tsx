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
    "5EbaqRYiYVc3ojD8RbjNu9hNLGCr6BVi7CVXVUQDDmChndqs8p2DMxLpUceSMhsQmfthUVt83eSD2d4ZhCUmZVnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtEfZ3Z19RexRGCTqYBNNsT7JTkiccabdtHUp6sXCpGuCEQrxvD5PoqU7Am5bcZC5PPcYu5yN6rmG6X4SS2y9FE",
  "key1": "4WMwC6ttDK28ZhnU91NxBizpEQBX3FRPgm7woVacXfqVs6FxAhrYwW7xZoLofcBB5K9Baddvt2mKU2itxau2MULZ",
  "key2": "53wG4gGEzrw9g2w8igJXKnVRbnoN8yd3pfVje6Eu35xQ7gk1q5fa5myPvZc1LmcbWB3GFapSGxvzByQXJhhgcszE",
  "key3": "zACoy6E9ftcYWwR7wwGHQawPAWJ97EBiqnGFG3WoVrK9cZhojogJwztPkrMmVVPZKUFWiDpNoozY2ckayAKn9EJ",
  "key4": "2bAhfAvGNFbXzbfDs7VhiSH9hnDp66NdXph6A6Fvh8iwneUK9MVaEw1kmcjfYvtzaxPSxqmSz1WHc8xpxYgsSeWQ",
  "key5": "55pYA4qtJT7qyyCTvMJiR3HNDsMmcoEccEcXeAQMxTEwmBVuspPiDmWun6huPcmacKMypErtmDQzis4rsUNjzsiq",
  "key6": "5knwgXZnbZiYR6ioXCL9ZNFENbx1VqnPQuM1VLRmquU9aSyMZjXXi1WMHAzpLFMnJRGE3ixnfJtzNjbNATqaqJE1",
  "key7": "2meVHDnSfVjFxh9cMTs9KsMmjZQk3Aesc4wNwU5QKsw3QAQUN6zzWdq7VnfsXgvL3DfQxsvXfSUgWmuUv4f4XHQc",
  "key8": "2qd8dzt5DqQaoSxYmLGxeF4ZCcLwTqj3QjfHCVkDjVSmFi4a16ndyrZ2ipBVUV45tL5vniEaPZJ21jNNW85H1x5s",
  "key9": "26yqKkqXrk2kjDHoircFGy58RsxHWejudbuJzGHf5e8958XbBv75Nk9sMLYBgZcC427hodrd5FQrzmnncxYEYhkh",
  "key10": "4sWqkPNma1ZrhNNTJMqrWjpsQLAgp11NLJjPm4xFcwrs1pCtxNQBfcFQkDF6rjG69RccSMkLYZ3T3wy8n4zL6mVf",
  "key11": "2PdYcPgLmKMmLzwunaMUwKhsA27x2X8LY4XpJhJTAqZRjpGBKbRRRKKx4hZM1i1ChJLzH4TuM7Tct6HWvFZbheg1",
  "key12": "3G9ZLF5mHdFJYM445roBoSQPvuwh8up9txQwsShxqEWXA6z2FnTk6t4CKvRAqqnSjeBzQfp4o189NMRNRsBQeXH4",
  "key13": "2i1aoJ4Tra1xwTEEFE1vrLYsgwzUJFrVzk8135J2xHedQPErrZMF4USvKqpmdnfrAPUJLshBWHzYtHyeeFop46xq",
  "key14": "o7HbV1jLtN1DxhnQB5oK8DGBGggndajHtUCrnEcELMMoAg94TUpKmfUko3iKoMHru96Tko6CrLf94hbXL52znAG",
  "key15": "5J6LNXTqF7JvMmihkBdxqA3eE6hAAjEU7i2tEMLEMgjZieHG7dDh766pZ4f72uoCpEfnwPG8RTPzyD26yUMxQFgp",
  "key16": "4KMgYHMQqs1k6ECxD9TmhmsUGBpzZCHaAXJ7e5QD86babASoGSw7AER4Jxz1idmNZ8x8QSnophErxGiH8V9qUCug",
  "key17": "28FH6NotFGkikEeapL2eAiLyJjEdMHqCMrav2EWGSLo8AHeBEcwRAkRdmRTKTiXotxFf8RHJH8K1pzaE92ohSpBJ",
  "key18": "DBQ4otSJTg8VrKM8iye4oWz2yF6hhDNjd6dRpYTsTp7beCkgACS4UaAhTJuBFngWbUTM3iHPrUA1yE1h5BwL5R8",
  "key19": "4xuRbH2S2NaKVZpGBTya1zFh6t5XvZuiVV47kj8W7t6smo5E5mi2PS1T4Xaqa6yknN9AphEjau5Eqo7WVBLrRLka",
  "key20": "5VFNRTfDTMWEieos3KGAW6J1R29wAA9hnSLfF6rPcRzATY3WP8VJaSi2k8bGKDxqh5B91o1F7dTR9jqWcs5uDmCk",
  "key21": "2xFhf4BFy1qwo3yiGepxxAhC6hbSxKyFppMhf38KoFX67TkUi8mm8eyhaq74fmjDJEkiFS9FfRXrQdiDFtntN5xQ",
  "key22": "YpEoWrdzT4GYan6UycGnLL8ac1vi45MtyGR41zgCZM1AQ11a9axpi4QPkKigz8YpcL5ApMfvWqp2HK4CSohXWsu",
  "key23": "32Hg5gk4CnqY44UXL3fWVVthkJJSNTxwKkmrmBj18dSR6Z4VbSJfiN2591HayF16NUpJLvytwMm9YD7yGKazw9br",
  "key24": "5CDBy922isjJxQP3kQe5QDUEaWeTybBpNP3pXBmvnGDwZeWkrzZus6euqVgvUnyeE51RgTBv4RQNpszwpvhMn1py",
  "key25": "2gLaQv6W43rSErFXgkVKYHKCT6ACRoNg2RnnfWZLFMmJjABKjY6HbboqRUQF57SuxEn13q2MdMDnEPwzhpkr3fnT",
  "key26": "4gZSKCJTjsSCoAJ5rxvyrd5xVT2ytdyw2npjge39M8Aw9iqS8owicwNrMpUv2TQapQ3AjpDDF5EMnfTAc9D9JNpL"
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
