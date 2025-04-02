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
    "bTcdT2TXZhbm2hZetZG1VGB1rFw6GjQ2RwthphT3t8C94c6YoiZHnG5hMcfRvqbkxecfVitmHb2xZKQ4aQ7tWxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bmbmkgWnwnWstL3kGSUSkSpzZQRUV3J9brgWHLiHk4Uz8s1DeRkgTxV3Bgrvy92FVYuFZT6ThANU5wmpkAeVgTf",
  "key1": "Aa8xcKRhkTGkMhX33mb8Ts4Bk8C8oZKXZsmzP5Uc4Dd4rbYw6cw9ACYKwCzVN5hadGyRd4QxC9CKWZG3NnjZMKT",
  "key2": "2i2H5C1VJBeQ8qns9XBC7Lu8wCAKRn7armUKaPSsPrV4pKE2EEeVizNYCMKbSGWbne86gTragVSEemTJgxshXbJt",
  "key3": "3HvJqexfd43ruH9zzWcv54nELexgRvN8WyazKs4kmUd9BHagCDJZEfg8SwuJHaK3TEu5Xk2TM4SLHjS4HYL55MnP",
  "key4": "3gxSUZv7SfwodJup7K6or3LkAAF5gBswNNpYnubYoKkGgCSvTGHZXHRFHfSC9fy8cTVcgdLGVZNkFjEEEfzFm73k",
  "key5": "3RAfCCuE8FGKpDdUHwmzfiaiuoxoVLG1mxaLudMVBTxNYcF7doh9FMaDypGWrQzTpt187CCETqiaTkToAvQDMQwq",
  "key6": "Vy5Xk1JHGuJgfaqqnbEgxzeNDfQqRygvLgSrdcvWKFQzveSm7WD3YWo3EhDnk23rQMzXS1tAbr6TPdmyhF9BNd7",
  "key7": "3Myxy94ShyMqNxUnp67Qi2A4HcWSyBPfX4dfg4WZB5Z2dyWDTCA9NYjavFtJQLw5RBZTxe2LQghK3Ch7ikBuYEs",
  "key8": "qfzgnT6UjRezDvqbZJ7SnMmrqjGmGtcHnDdXD9E3u44NpKi5Y7eBjXE4mZGgj219992aRtsYjiJfK443EYKtsh3",
  "key9": "2ELYrH2hicdDnR6hsSKZsmXvsuUcPKLfJB88yJdfkkhw7KggyyMf4agKQQ5p1n3fTsj6Z4PmqZq4NxvieGtJgWNZ",
  "key10": "5zLhH5g16KG7eDKgPSRYoSc1EjPz5DP5qrCkNkRtHSK1X8vbNDxsJoCGMbPFVvuQFJCAP1x7LwkhAz4MEx2FTHYy",
  "key11": "3iiV4bCaF1bacAxDV2zKHNihgvc1oTw2g27xiBp9ue2Kaz5P7e3e5RusDBBWUzsL18catpcUcmGKdr2sZr8Pyva6",
  "key12": "dhih8nk7Eo58N8jzZWUgcmmej9iz6UeyYBabnpvPrYp3Lju7rsb46FDwX3WqLkkiNn41w8vcMkeprCgFyeBUVJy",
  "key13": "4uYBkpwCNDPzYXt7XRqvaxkaRQosLCH5LxR7iGhkVDVyoNUZTwb9cQ6DPXpRDbisF6mDgaqWm1vBWTzu2X2oADRe",
  "key14": "24jhvCvzZQoQ6KEFi64QBUh5ugd7dFiCRBd3V8psRfe66UQtbCrkfEh4wnNjjbLPgs9wT2DCcFrPpkAKv5ocbDzG",
  "key15": "4fg9SgPBs3edvWbxKrb4wkeS9PmoyFiGxRme6aJZ8keFHM47LdXsndisWKR11CxcPe6kv9KrmD5mSMUz53mN8WMb",
  "key16": "3JLxtwsaWt4Grvugy6VY4wdSU77Bm8EbsEFrgPgV4M4bLHjf4N7rcqBvs7aUgjdNEKwZozaCmQRUivNiyhUR9iZm",
  "key17": "2kex6cAUyM2DrtcehQGuesYXr6i9J9H7wx6XUBoY2EWkANvaDHwu1enKriG6TZvF5QvPwd1h2rMi511QrLEgZhCF",
  "key18": "4pzWstkmBxU6WRXaXH8xKvvkUUsCxrFvvMnCj6UEoDpPUddF27fFc3VwqBwUxtmAXJzK2bQaBHLWdy6pHEB4JbSC",
  "key19": "638yaRkntfeisaKP3kubjp3k33tMZzUY1uWHDDcKKARhnUnkTcKAUrgJEevBb67vji4QEXktjUwaHpnpFYC17SVw",
  "key20": "5UrpDDFsSGDLbDmPfNArHyAU6RbUoffzRXygtZS6rwMN4SPLxXBVF88BdCcC4Ekt7p7mvihQ3GnmnqXy7r5yWEbj",
  "key21": "56TCfFe35WVdk4mqxxfkZAnsVkBFPHTuv2Pbqf6AJmQAo6LyV8jVfrvkaq4oTcjAPGELpA8gctvk5EHGbKPriNKF",
  "key22": "3qigk6Zo1KyKov53CRhRJdd7DSHTc1CYJp4bsCf4B51Ed1KSbpMNHokLrsPebMfQSxeD8C6ncsk9d44V4WbkeTp5",
  "key23": "5YZZnUotn4SgSdZmTAVEVEf2Q89ea4Tn89sfwj2seQyHk3GSXrY72ZMLVBbQpDB7LdnwU7tUWWm4zdPwECaJxm2z",
  "key24": "4Z2rEn31jgtU8CFAGeSgKEPkg4CykyK9pxX467uM3p7XiNWLWY2KFfaAzGGKPwhJ9Rr3Jbf4CSPKo22mM15nK8Uz",
  "key25": "3dGTQ4eJtSbzbcCjb8CfsuxA369TyaYSW2tic3e6u4RNopkQvy5FZCS4uc8B71s8tMaq7t4hQYuNL3R1TNNGT5Fr"
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
