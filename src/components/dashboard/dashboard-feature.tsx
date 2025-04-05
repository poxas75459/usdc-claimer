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
    "g316eR7Rjogcu7s2mbnHvtPBZrVYhPbheN1Cso1VkJKUQu1yTGeHqVT9m2vCTPRt4AWgVD7Kovk1C8amj4mNEpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tkZpWvQ8fNz9QYkw2ccbKYWdNdBk8r3Q2aRpXS9p6GrmPsbtUFbxVJToApqfhJDpdRdidkbdHGTB77HQiUnvHwE",
  "key1": "313vbXYEKTtWHNSakpmFkQQffxpboxy5tNbbrUHJMsHuDjjWPSgcgyC6KW3rvHgZ2JHNNi644oPG6sKvJZHpKfg6",
  "key2": "5nRTFnzzN8dgaaHN31fMESirArocUah9KEcuvLaY82yL6GZy2ymnWDGRxBXcjDaBTunibXqLMKV8EW56mRH4Fzgc",
  "key3": "2jqkWJX1Z789fUgj1dBpCBzpjkPSU9FNSkkasD2y8X3b139QP1BNMwG4mXS2fpwC4i41SC6FcgHv9jbCSkqXDCfA",
  "key4": "2PmtaaZxbec3XHjCaPD34yqFFs2jUG7a6QkkdMvCNu26NHo91Lzb3x7q1meW8pnUKYaoZLyZC25JmJwE2P9ZmA9U",
  "key5": "5pp2ciM8ndZv3qGqpRTAHhThjyvpUeEmrNCRABRxp7ewpvZmoEAxsQpk73k5nmTDv3p6cjtWb6yH7P3mJo98oTH4",
  "key6": "45G6PdFHYBBYaUbiB2Vn6Hm7cZ2G1HB1aTxgMvb3sFiYQKSwHnABN9kvTTaUS4kGTMvgBF3L7trYPCtjTCJMtRjq",
  "key7": "3Qdh2pE8woNQ27QnADwyUPfybcnZjo8BhX1bSaBZHrYrTYue147H87UtCPKVdaHKf3uD36pnKarXkUexf2z2zJLh",
  "key8": "5j2mkQLVj4Mxw14gv2MyBoonWtNJv82C7AK6HmUZ5oFv38MeMXVaCMJ8axAtiQuaJajxxnDCDzk22DCU1xZ2pXHU",
  "key9": "BZ3HoeALZ7iaRzbW8bzLf1RXMKCFvV6LsruyBY7qfj5fLbaR2HGYfJXeF54XTnnqeBvrCqbdNHjTVDUBKyZRcd9",
  "key10": "4sEfwPHNKzEPshmhRgzaVTenvwqG2KPsC4VBYC68r64tagnF757N4bzCc3CsBamD4XLDb9TfvsdseBhQDXxiFspd",
  "key11": "21WGW78rauoCj9Ta431NcaJNZfrcms4zdhxD1jNLSYsXUqQGXADfPDeN7XABFyTH9121nHZhJaR8hXh1cxMarGmD",
  "key12": "63DNoRxmMdqPngK3u4XU1vp495WdBaa3hoFLL5WCcZ92HeRBjR96mpkCtbR2WfMGXRD6CxyBfFPt44eGdv3Nwp5V",
  "key13": "CxGWhEzu2M8vZzFBvV52ppzE8Y2w3xsuFPHFDZeUt1rdW4qrvzMA3pgsfA5VrFPdhT6FPNRe3JmHz9cBKs19cBR",
  "key14": "4CW8xymo56bjpLFE5WGyPsGJYsyVF8TBUy8VriyeVjPDDCHxyca6RNWA3j2XE4YUDQSdSGprsDca4b7zTVV8iBNx",
  "key15": "x9BYcoEM5EzN2keh9jfna8BU5jPYysmCsMWMXQ7T1YNUS9uGXhvpYHMR2KP4mWFKJk19GJU7J13WqnyxsG72KxN",
  "key16": "5uf7mQgPazMuQE2pjGVy2nDSDbhLX5xayNsogxqxv3f34NewqMAun2DV7LETJThf6mEipt4WNmeKsojsAXPfyCzG",
  "key17": "pwkURdAdrXZqiW2ZKz2uVQ6r7TyVeaXD9SGBra9iGnVigpoSCdh1nr9wLDrc36FgfDtJNjSnPVirFeBj6jeaxjN",
  "key18": "2QvzLdwqht2U12sXVe7kofD21witzWkxzVyUvAecaGANt7CUnxtw2qQ1efkf4mk9uzEFpyXZG5sXWmdN9qFzqspb",
  "key19": "EHGHXbZHuTdkzGRnNbHanDWzvvx5RXpgJfi49zkmNKTeNPKdTnP6SGMABVKYHcSUuasqTp7F37SGVvAKa1DANmt",
  "key20": "22ZtVvzL1mM9H7fDNUkG9xUabXqZKoXvbTJvRHVPHDKk5M7VSBhYx8cA2RtxTZf6XBWErbAAXW2f8uRxtRGsu2xq",
  "key21": "3kJAQM2h7NU1Xb1yEcMRHCr4vbfjmsJumfGzUL4x4DaKD4TRSKEGUjM7Yx1r9rxDR8jkdE2Dq5ao4rGJNTRHR2ME",
  "key22": "5jMX92pnMmJTmoi5rSCg5i4GL57kNiUVrnDtSyAKXqEKCwJH3Z1UwRzzdR9WCbeqgFSar8Hy6Ybji88thqumpfuH",
  "key23": "5iTXZU5eeAFs5tGvLLktrkLH45odbnHddDiw2Wop1dFT8KefdEsiH67hBTzMzehMrGoMBQLHqH6ThAuB5SodahvP",
  "key24": "2X877BXfqqdc7Nxfuva4NLVVPFiFFP4hs5ttwipfAhWam1jGpv3r1dNTxuAERVKcHQ2coiTgA1NKefFtdGEXsS8L",
  "key25": "26Dhu57NEwe8M34rwPEdRtCLtPgQZN5hzSofDDz5a754kdmbcxKviRYPikAmaJnsHyQn9A1LtGsv6Qpg7x4jdxCT",
  "key26": "3pL2B6kKs73NdFVWRd6WRD87RWDCs2aivQGYnycavJbiXUikzgCmpUfBVnd8EYfhaFVuE3gUxTDs6eTyvcDXuTM2",
  "key27": "5R8yDgBDgpVtQw45e3zJY6sNdjHxrb8fj9wc4j1DaGGFtj6TEB9JuH51jLZ3Afmzx26rBPNNNjd3NjqnPvE4zQ2s",
  "key28": "4w5rcxa4PPoN7R295GriWMueb5UDzTcfhrzKSwWJEW5ng1WxUEJGMwgsnfAQVKc9MdXW28NVi7U3sARDvxKTHM5d"
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
