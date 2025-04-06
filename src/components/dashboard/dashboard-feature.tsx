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
    "5FrFDHGHyvzYDjpyxz88QjuSAt9bYc8mfeimP1RKLNpPAbcRgLnB9oGjSTxPZ5MqdbDvxtL2q2uWbSTSjFbMcQ56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c6AFq5nyuZ16MJaBTgLzshVykd8DpLnCT2iJ5HuJUrwFm6fMekZi8CUr8JwdVKYc5MPwdLbx3hFpYEwY8h1RV4B",
  "key1": "4K2EDi45jCPSRaLrmsiN2qUufz7DEXfJzVM5jFDnLCEi1h1ztBVzEGARoSYkZn4Wd9NVEJsfw3WKoRynKhW7s18",
  "key2": "2C9so1SNadHmCZEYPpDfGZxVUGLRYRjPax7SMhVLzQGqtNjoGa76ZHTfNRebm3PdLmbTNZhpvcazvLLSQ51SqbMb",
  "key3": "3paVBTmk2nBBefAkJFVXc6RbFVsYoF2h7Jcw9z3g755SsPCW4QQMLcD6NCxgiz76ZNShwk6ZFEVMVpNUo5k1E76F",
  "key4": "5PMyiGnkUcxjTuzz95GQoNkzK5kdVDQciJcXQcoonui4G7CmRs17JxCGDNTzhdxjjtXm5uSDG18U5SpNFjTZX3wX",
  "key5": "2miiCK2HWjgNkoG6zNHQfYZGy327UcJRXZ9zD82K6jGEfCdnyuseZxf5naByqApCYLJyzCXRh9s4omteqV9o9ebx",
  "key6": "4Fxwzxai9cspD6iDNQABjhnwDA8ufCA6DUAc2HxwM3Yxmr7AADxU3gFQ2M7z9ndAScNJvyLRSdGQeKxT2R86VPoy",
  "key7": "4FYUskJsh75QXXYeBMWwMzV2mRB4fKyytYtnNAwMaXHPWRCvz7a1yR6r6s3EnkTPYHuWkp3Uh5F7T7ZRrBEswuMA",
  "key8": "2b2gCCxphFAfWv9X2ghTUqs5zqDQ9KyGXwwuGdDLDwAyDeJkUHSL5Fu3rSHEKzxiTQNmeXdcGNv2HBKezw6fwVdJ",
  "key9": "5bhdyBr1g1FGKMLXgQ9uHfWRVQXPkztfbg4zXimHdvfT5cDNsaccwvp3VW9sgqkcLD5D4NYab2xgwqkLjwygWdp7",
  "key10": "5aneA74GjcP8n8B71qLvZqLNQr4bXUf35xZPALsiH8A7FZMUk2hD6usNpMESrJFapPabTRXQrfqixCPHtAEyQJjx",
  "key11": "Uj1y79QbmFWJ7TQDEsUsWPoyxaEukr6v7H25gmHNeA5tCvQEGDaFn9uhX7a9VVmMmLiV3aEtxpLFczT6nxvqGR7",
  "key12": "2m3sjPKVBRFEVE9Ay42nHYs69JJwzsswvqCsrtoi4LMFJfvVRpJsgdU5TEiqe8DrinkNiLNmuRzd6ZATM8SJ9Ef5",
  "key13": "Rf2JkxiDsc8MQpmhf3yawzgqfbdy8zPai2bsg9ao9sk2DsuNrk5Jc8Y9wEoCEXvkFuTVWkqGqGowaC7kVbTbUvr",
  "key14": "5k5dfAZqmepUPEHL3H6KBF4SXpnucvhTsW8T5cZBSBdsqSBE1YFLbxjxcU14URgV3DQFPnfCmSPDMVwfEBxc78Rp",
  "key15": "3bbisioTgqett291FkTxjr2HqCv1rDYtGpUs7qzzJdwMoSwUpdkeePCtAtYxTnnjKPEvFpqz95D4i28Uz6AvrTM3",
  "key16": "67KWKyJCzirPUubcweRVroF7TmhqJTg5UtaSzgHCWUSM7YRisinrwscSZ8d1jVKGPNr4ku3VbaHq6ssLWSqrPcG3",
  "key17": "4yWEHL4jzwFoAoKoegLgavKJqCbjxCYZp2389Xqx81ZiXfPbE6q3JxsLRGkfENufGeBDk75QgUXECFMcTS1MoxgD",
  "key18": "2G5WgfR7ckxJvGifERKQ6ob7zZ9SC95ikZ4V31qpccK22gdv2t2ERcq1k16SpA9exudrzd1tLW7S1Hgw2LfMuViL",
  "key19": "WKG2o8moa1jaXWp1SWCyT6wPpoGWJLGQzHPvs7Nrsr9HJJSLsgEcmAXKri2QSaT27WqfEkUEBkFRuqqTSS2qSXH",
  "key20": "3M7cufq6LFLtXjhGD2rbrDX4zcoahwHGqsC66WK6gpsmjJbjBoLSAZoimxEmwgBF2kyP1uFLTvuUhjsBh1FdPyV7",
  "key21": "49m5dTPJisLThJz853TxFMvjPf9LCnVSywCDf9RVn15bXkbBomyjHREnU49rXFHyAS7PBAtk8yFiVR4c4KgXmgds",
  "key22": "2jW1ypDradiSciM3uEnnkN6dbDaU2a2Lk13WV6zbQB2yswaYkBoHSLobDGURKzzhmGidRrk9cVTLzGoGPPXQMAUw",
  "key23": "3pjzPervovYN3Ye8FjkqeGLTPjzc85uLDqM1fUASHPNVivEesFCV5fBYeFmCgGAAHwztas2pmRjEWszeq4cB4ug1",
  "key24": "3D8chMMUAkncRM5hKePVx2WQ9VT5ruxfjctLPJwSRDQbkhNgoqdCbaRy2LAg1Gh5jKdAkaKH5zRKEi98njrX8pVb",
  "key25": "4DzQM6X89K9T78xzuEKMcqCuBWcEu2Wx77m4hWFWCQRxEnBpQ8BnNCHCH65VsC1ZUntm8crq8zfi7ZsVZaAoayNc",
  "key26": "24JEk5XTauMCLDHWs1KgfoHLgnBTLtEgwB6iceeMacPiqScd5rmrrbxaXSNXxG8SfhJEzcdXuoBw2Kgim4PkuDpU"
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
