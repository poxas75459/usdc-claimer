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
    "2DfyiKytTCSBVmRquwPnBBgH869XvMjszyqcD7h8vzYomRMaaBabAtYdr9UmzJ1toT8ChPbjRzxQTnncpgXQAWuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YPecPYTTFHYmvwdARBDsBGmaStFQu719iupLpwbT8YQHqxsb2jifEZWZ2sVDtwUeW4rS3r7TEuACUEWgyAJh1gE",
  "key1": "bx7HHozCezQokhHStLBYo5kFNPxv3MFJFZ1i173tGsv1pwXY9Xhg76TzSQKbijBdSUvai1cARrY1STYtyqKr9o7",
  "key2": "5djiKMJTX6KLNQT97qHWCJMvHhaeVS9NTt8rBV3wYuEViRAdbGKxdqMT1LA5GKJU3MLhhx35FWwj785dfv5w3cWL",
  "key3": "2JzAt2swyJUquupDTCbaADPGCEGWSoQogW8W4x7YMwmaw2DguB4MqSiVaPkNx8jGGsx1tiW9PsvRPSPWAB36iYuv",
  "key4": "4eqBSZMyMCunndMfXg647A9SZMJ6yJs8WxizsrSUM4vx2vHKonEfwHvnffZ6dKYm8VyAjKhriENRYGaknxYkbFhn",
  "key5": "5ncDayj5d8uybMQqBKUzGPvq2S6sJozRSnZBFPMPTve2GXeiSYuTpfDQxmvq8zxsevNpKx2puFDwX2nPkWAaR9jv",
  "key6": "2xpgEtrTxfbqw3s5j7CCf3MBoMn2upE3mEPLDBseYJJyYvFJEsWkMo4aM7jUB5co7WekiP9sQHnQx68P3X4XWKhX",
  "key7": "YX2rdWULW6AatXJ9j9n57xnU7RzKeXATC6UoUvWTRRvmM6tpoAzSsYZNvHcaeum4FBpsMRtbNp9yqsfMiCx7r6U",
  "key8": "NHKZMDC3cFkAUiQTsPk2qXB32htjQZyZ6pN2oMAoZd1MiPEJivqfZ7p7divZNdvRzfkYQpiADRERYu7uM8zWtTz",
  "key9": "4Rkye9Kf4wmqSGh2J99h96UUbUGQnMfhJjoyXXr5HuKhWbkE2ycqHjXGnCfQC68p7M3nG9zSPdxM39uNUNzGFaPk",
  "key10": "2iwvVxW7gAspSxz2g187iusnJeTbq3QKTEcu8SBsmWHMyHHkvnfLLuETAny4oxT5vbK7eJXQyTDAWtLQ32ssnToT",
  "key11": "27UpQr9tY4u8KtqKANYm4MUKijZbTwqepGPBKUtLBVS7dvf9LDyBp38rFcB26QsiLR3QzKHL1FPJzqSW21C4uN69",
  "key12": "3MxzaVBhL56F6g8xuBcK88EpNNgMAVTS98GwaUHRkwqs6zMijMVaGWpjDMHtuEVLdzpAahkMw9vo7eaVr431xMyu",
  "key13": "2WH7FwvyZMVCLTXiPKcMjxFDxiNyNEgMfaxixXLAr3RskMbv7vMRawYTyfkgDd3Qv9RjbTrzEzvtgwCikmcFh87w",
  "key14": "5fDehC6XR5AVo5Nz4ZaZ8PmC5FX5Gmc3iSbDdBHUnrAWtc6cFGMteK1TqyCtzWGC9f23uXraFxnA7oLt7TbtcMPh",
  "key15": "4Sv6kohPH1Zoy9KgTRTmM6bMHd9a7fa78swmPC5Dxtubh3QnrK9ohE7bdc9pGwBZ5h6spzAidqbbiAfB6TqsC18V",
  "key16": "EFLJnTQgQmKybDY6rBNLUyqELcqFbrmsYtNeBs9sk3qZ4ENntsUdU9QKBWhZsGAFLHfbb3696sLCvoriY1JM6Ya",
  "key17": "7AWVz7eYDVYq88MQVYiatXM3HGRMwWn3s51TAv4XsYzZbxW2UQc6PQnoetEg4zUHxSdqgSP5gTToQGt8Mpea1yf",
  "key18": "2AaKVwohG8PDAUSa9LG61VueakFJCXFPuo9gaFA9EmNY37N8WXQj7qrjrvTAgMSmuT9seo5YtEq9JXBkMKbcWtmm",
  "key19": "e2rFN45gmTHgLax9BBYZzJpp2eyEYEBkSoipgpukuoAFTMDXpNAuUjeUGZaU8D3AYPzxL9woCqmJ2YVsHk2J2ec",
  "key20": "2oj9rRFYekVVFanbGUwKpS3WAbMP5r8GqnFjyPr8pPL8ZTBTjrUS9nLuQFPY8hgcDsESymSX8xFR7EveQqyYSdDr",
  "key21": "PhcRXEkMtHSWxAkK7yUnD8Pcii7xLRfjAW1FkegdnEQ43zzHiyVRMM8rzKtC42mE15GhXNUSCnkC3agDovh8Fzx",
  "key22": "4cUTC4YwFZWNjRxm66gugXgXry267Xpn5gMNfvfYMESj8aCtKkkx3tPS4DAMj2dTp8TQpHx2cmdADxrcpBiaPqp",
  "key23": "3d5vosjhSaK4zxtwxo2dr2ojycQDj6h8GnHTw5ENMMh3EFA79Qy5DdL7JQ9Aa1taJMFXfzTyiutjceYmuDB4wu4z",
  "key24": "5MRT7B4xw2Y1pwj2Ht3RpmgH52mC5Tf394DHGJcwdvoqG6h584hwaxNBPaAYmWKQkNFLLmJtTeMrLLjPKhqNWWMb"
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
