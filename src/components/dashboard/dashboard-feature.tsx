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
    "37s8C2yZgsiCSsGPSKzagyCuoDei5iyhPk7cm1MrY8wKSDnT2t5dBRJzdeDorBRKaaFZLS89331ArvXhfW38CWnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yvx4CtrAEzE9HXocqimszMaQt8tTpyXEZzuUXdwmqSQNypcM6sK1n1dEbbhE6kbWaFixTwWyZqVpEQ5f6BWcc6X",
  "key1": "3uS3yXpP9t7ZoAMmAs4cXNr6XueR1XpWUPMErj1yw3D26275m5ANTCndamfroNhzyf1difWATjnn98BQPNEVyksE",
  "key2": "2X1L9fmPe55FoURfC2G6LUSijXWBynrP2CjVYukF9L59sxFBwHF8G7CH19ttBYq17PkahtNCNjGtSqAaCTZ3oBM4",
  "key3": "2hThrVT9MoLnLJcFpQhueGa4Fc6ZPVhcShyUuvQWFuD8UcawCCtTWUkaWdLUGX1DpQTmrPKsaJUUAF8jk89nnAYp",
  "key4": "5Kbc1a5XGfsQpuNsoT879NYrfMxnEGUCW1CxcpBqnFm5F9MJLzLdGvxVx1QBppyVZHYndeHKyRDCxLrvtfgGASug",
  "key5": "zWjfZ1vQikpjzVj6sATTTg7DWSqgE8vdUJGh7fVzv9y9qvxAbdTmadHdn7MkndpotVp2VfpZi7YNwoGp9sETubk",
  "key6": "JVEKWgsUGfUxG1Cbx6K6Fh1HCFcbwcK9ewutq2sSo6r3sshrD5nskaPKrMNjpVbptHSQbutfE3FyePpVkf8aHPt",
  "key7": "31JvFGtxA3i7b3maR1ZWG1zKwk6DWocEb5zzEVe1wAC6mRwkRwZkiPf48Q3JtDGVmhHRE62c6JwkzQr6BWi42MDd",
  "key8": "3MqQ8SdSomC5oMrikrybChyxy9djFqMom2hS6Pm45cU1sKnrK38ETx1ZR4Zgtdtx4tgtKEV5whfcpLYDR37fjcTe",
  "key9": "3JakwMaFZMqHss7ogzaSaXdM1kK1g5ihztwq2GxGTJKKQFzKRLLH16VsE2LNkKtYoyJct4Mtd7C7X784LuxGb1Pu",
  "key10": "4JvuDo4FfpC53EywHfoRUTAnseFVETVpdmuhiNki9YADRE3512G3WaFDemUzN5mW7gPPmXrZEerSVtSwveEhEebo",
  "key11": "59qZXHN5MmuH1jaPtBuXNgjcZXqe9Jc8b7xD4uvsRJUd9HiKoxXM2J6QFgPjrNcL6GzzVjkcdhHeQWjozKx9sFcf",
  "key12": "cvnTGM8DJAcQyNKYLJQSUvrKdxRmCMZFK496FYn4tWLdjXaBKMnYnVGTkqgp6eAS2njB3aRkyeNychCDaEbEHsK",
  "key13": "LScEHBgtjdfGZDiELyCMXH9UxDSJbPtokySqJ914FcrGwitGtGx4iKNjrjtf4vNgroCCUHReUqL6h71TQUkCLxE",
  "key14": "5JKmcJjbmjTkrgJyxMTnqAipjyZ1H5F6qftXefnsXMXT5mvLaHB9t58M7vgcMwDxEX9T35LkoWby7jrAyPWfsV1c",
  "key15": "m2uuv3YWux9tPoXeDK64eaDE2LtUda2y8LHDp7dyK9Ftufr73b4WTzDuRPevsF3MDhfhpgrWVatLVxnyPwNb31d",
  "key16": "3yTGCsxr5uabjKXYNxGnffmScTAVY3WUyipgkwuybxfd5ZfYj4j4qZwjchzNgtULj65vp7SXx16z8uamx9oBEXAi",
  "key17": "3Z7RqVPHG3YyCDL34HYGAFfXN3xb9vBT4NrkUGEopAbW5Nez3x5eaGmpWsx9jVmhMtTD5TTpP5N6ummeV36zj9Xh",
  "key18": "5bhoy87Dn7KRP6E8rnjEx3TB7hX2pQwUNwzi5j4kGBCVLjzoeZYcvPUiNYynhYtYQELufBNaERCukYg6XVeMX5Jv",
  "key19": "5K1njWqvyj5Rss29e18163QC3ECUTqXSMhwDDPN55LPd6SHdWvAo1MbQY71mPy3Jt13jsHT3KZwsK5vvq5hb7AGD",
  "key20": "2iU87XRHSUZ9UUqqPf7RVafj4Gvv1XtUVajg3yVAQzmwuugwHUYHAJiwhjUakVrjzYufWWGWibLsbyNjhaAfYXvs",
  "key21": "5FB34MaqqXGTxg1WLpdcA4pT14qJQ3zTMg1sksacx9mKvDCbQMSyGUKzTGVvZqFEAHFJyD6qrbgCgZF3PFwaSQ1k",
  "key22": "XgDkV5dq1W7rED1BV9SGksvKZEiNDkZhhwTF4yoS3Fb9gfzHWhE7BEJVAMJqKicXttu6TWMAc8GpGWfDUDR7AY7",
  "key23": "3RwbvPKi4dwD4yW9Y4QbvhHfbD5FNr77UPCH1R4AwRUcyB1H6eKN3y5hYxvaYUG3vHEYHjcHTUMWY1cWshmAM36Q",
  "key24": "qQJsFsYUP3MJZbz3i1wv6GCsQQaEZgyz83MkrT5haBvJMMTVWfbr3oJUuoHTSY1tMsyEQ6VJWoPtBJNFox1g99R",
  "key25": "3crprWfpP7xo8uXLUPTcc4x26F5MeGbYJyDD6QUoeVtmsZEFrDb1TSLgtkqRDbXFw4yLQweaABReNXdxTgc6jNNN"
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
