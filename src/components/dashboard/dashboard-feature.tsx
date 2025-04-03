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
    "56JHxyogSNT1PE3FwqhqbhDx9V74DQ51ZC8gLwftuycJwhGqCAqgc34N5xvd5DsLZeN9L3D3zrHAircqZzPtTqCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o25RjM8KncnNSoumqQi9dHuLV6KRc5TDmb2kHkGWQTjWMGEw4WYrgaZTgBuUQ2WiLecTjLzGBVsmBHmjCmJ8eAG",
  "key1": "3FNNJdwGRcpKGWHhXnThf3x7ALgU2HNAUcPt5jxpgXVxNrtVTHzNEujavRpBgBaCsHVYF4pebZzofYteqstrtQdG",
  "key2": "2Dy6H2Vn2XXa5yb9hCDTXNLxzAk6a4Sz79XBa2LfhKxFkSp6RJmE798P3T9WWDbXn93gKdD5BZe2B6wtk9QQAXgk",
  "key3": "AVdCg3SYhFqE5MhG7b1kXhmwCwDLYDxgyPxWbwUJ6yXQ2sLm5eV2YSRMD9MJ6Zzjh6fs8QgG6ZMBry1VbBDPGWk",
  "key4": "jVGadKzzqdNWo27qih3hFfA87x6i9uV8bJLPruaS4UGWpLvJVfP2V6ncBvo8bhv9YnqPLDpmsDjWM9vmzXJvF6F",
  "key5": "3gsK6WqNg5gpqz7wYom7ctha4gL6VVLudBRdqfSKyaupgRaNr2gBMBNi7kwtWPgXT7bF4Xjvs1pWnFQC7gUQxWGD",
  "key6": "4dcLrz1YeMJWjxVVxeq1Q3BwypDpHE4EDDpje3mv34xWRQKQJTiFYdad7GAXr8HtJSAhTCHf82S1xMgorFGUFTTw",
  "key7": "2j9DmaqVdDUcCLgeUwuFU6oMK44XACs845YGVC7SkBB89R44kswiXns59PkGanKsuxbxYAXZCHUFzrKzfCB6yZJT",
  "key8": "CuE4EqyPHGCftz2WTJosH5WAhtMo5KKiRc4DKf9UxUBDAABvoQsCRoXPHJxwctHShvpQvBPX8T7BqL8oW4KQCJm",
  "key9": "541Twhp8qku3UDybudkReqKczxgNje3FLxEdCCMMmFBuPHzKf3auAkXJY1e156Y9mACPx2nHLRWhGE1K2aJpkVrv",
  "key10": "3ozPJWG1iJRL8xSUsAjFeWiJS6fyzQisPqDQD2zGd3w4Retq8L885AhNvLMYLdjbGuoL4TpYeTNAy4khnG599obJ",
  "key11": "PSaVK1e8Fe2MBDo1aqKQkZ3fMnXkhSYTw3DjMrfijJKX9k1LinmZ1EEgciipozXXxPuYK26eZSP1VZvrcSGot2y",
  "key12": "2RGhW36YHwbVmkYGcY4Kdqqoz4MEehGTJfac5PFuB16KZ2ejF8yYbnkqgSjzYi5oDBC137yWCQ1NPURscFuYrsJN",
  "key13": "3Mg9zCZDoUFQEsn1CfQZd7GV6LXrBf5k3mH8yL9Pd8a3edGC2H61eAZZjnPsyJZMHFosQkWYPB7aYNAagqXFaf5X",
  "key14": "2E6ZcXLCZfM61SJuRdDmc2ULvGXpFdZnhgNwW3WksmoRqCYAzYAJkTJs9kTvdnXMwrinj1GJDibEk8PguHh8uAhg",
  "key15": "3KBd7RKSPv8FUC76cnRLXATThDWjnXZZvUNM4v3rSAYBbvHDYkbBuCanZEdMbTcWgkybNx1VpSmfp57WAqhonsEJ",
  "key16": "L1imVFRVLAEoiAXd3QK54rc2jgjapE4GW7oF3Kvu3VY1EoXPBGdbZpcxUB9KGN2hWsRTnUXSQSL2hBfk11GR8Xx",
  "key17": "3HfMX3YjPWwkrp8BMiZhYJZ12oXppPURDLLuSnNLv2RtHKpLq9SocxbXFYyKHVgxmzn46sLyJ1RgeMnKyoBp8apN",
  "key18": "3ThZoRUvVEmszvR9fhXHjGxwR2DHt2Rwfx8uy4KfNwokFMHz8bbfFXpXNXCgDRxxWPtUdKFLyUDEJau4MLmAt1VQ",
  "key19": "5mB7CnP8NqVmVBCbZSGwyKWLn4ox78raWFq8Wc2UfkHWM1yUoYd3jQ85RimFAfLi91wMtw9kgSLKx1Koefrdu3vD",
  "key20": "3nw2St6eZj3gtV7Qu94sTYPtheUNPTNY13yqCb6LjwuBJajbufLuX5AAvHG3ASbEqHTxhVZ275i8FQqCPjvamUhi",
  "key21": "5GYjUw1gj8E5bEa3SEbZD38EkRZNTxYfe5vNgzgARj9MTJKQsc1exuUVYiWLsyQJUGuyuVdsPdPhooEcLmQRp4g2",
  "key22": "5LmAWk3qrjdPJNHtmoQAdZh6bWxhCqb4ivAW1t9tc1npRnkLhxKFRioR3rKNLNhUhzrkFys8wJGqFZv9VnMicd8h",
  "key23": "2Tr3sgFhF3hHnejQQyL3V281rjzioN2VbYV7dGAL59xvtTvVmhcRFaZeKvknxhtZDSbuZtGWb1KXesarYK8Lzfc9",
  "key24": "46TakpN6KNXpumZGkJ6hrFtFTDdkD6wBzJ35QNdi3zFUJwYD8qU17hrBPh3BYiMioYTEmYKKXLoZkdcGZFKGNTh",
  "key25": "3qnPxvNU2mVHToKWyu7PzdBYzXsZ5of9tzrFY4Pcnqk1uL3E4zWfSiDrwsrtqRqcvvpdHymKBYFXfePxH2qAXrNe",
  "key26": "3n6WMUfzrbh3MpFzLWMMas94HVDP97abZccaXgZ6X6ErLDQHiW8bUFQLmqRd9EQMBoVai5VEXv1tpPhS4g96mHqb",
  "key27": "npQfpGLSxmHqZAFCLLBhFVXwcRLMnsFkvyKcLrmvf7gYKm8rfhxHvHVNpCWnb82KBtZtnrPtwB55NGju9c6Tmtv",
  "key28": "P7y99GGyWTQEbKwZjQjqKM5B83iyhYQdYipekZMSyEYH7gFQ8uFatx8ucjYztc2RccspqWvNrTamyinKpVYbudJ",
  "key29": "5QLWN8DV2st6bqE77dBJ5FwMaUTVCB1wWqq8wkG1cX5kiSPLykZYSFLG8v7PsRt1DCkPxqspUTrN2GSQDh8akXgt",
  "key30": "4RrGWKsu6iFB8YEuDYkV2wRgCio4oYgkQKTijJAy2AMAyddTSQJ574jCjk1R1e5a9RTWmQxwoZFVq855k6Grfgc8",
  "key31": "3i37o7fpgDroJ3ZS2xUxyeaSc9ZPXcxeBFDP3jpwWnbf2oXy8wcMsBqAztMp8f5DxwLAMmKihCkxKZcjVpZSWpw9",
  "key32": "616eaoybzDmLp3pkv3tze2FG1tVR77BgUgZzeMzQgNtEvzNqr5KWxvUt5ncjyE9oWEhrZEoQry9MbXYbtpGPeaYg",
  "key33": "3ayJgWNKP5zPvtTGgnzW2P7LNAoVRyJ8HF5jQ6jQtffKWT4TNf9D9BpqtaLXL6Jo5daSomrr5aprPmxQ53uqbyN8",
  "key34": "2BQzbC9uMeLqcicyMoFyuJn7khRoMfxAT759PNXzi5Hf9KPSNnUiw3ZfbKnC8ZzGtYG9v7o9md6MvsSrEtEmMtea",
  "key35": "3swizrfN4VvGsT7HqnebKUiMj8YMh3iQt3J2oVPQK8gVS1BH6HJZvLg1XRKqocdHh7yA2TBvQPTR7RQmx7wFzarM",
  "key36": "2wx4yWzanCgVHEUuK2kyPZDxvDNQHTcg8r4D3od3bJ6dbPoko4u7QsC5CFsgGUXVeXQ8BJgQp1XKyUCUC2EAZWYS",
  "key37": "4xgNXVotgcD6zNxky7JUYz3MKDDim155tibe3jchnzprvAPG6UeWXzHvb4fGMfTc397nbPyUrj17AbCaqMiTgbqS",
  "key38": "22YLsazL19NdmAqMcChcrumctDtCqiusnR6s4edjGY7ybGZgRnKmxdxRtCV7ByCeUNx737HvDEV95TuTM7Urf8Ys"
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
