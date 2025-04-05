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
    "5f6ZDhT3TSRuPS53FUvZFDnTWUqhN4KA87tkZhKGGGFcBwDSKGj4dTiifcci76G3o5yYBALMxuH1nQ3UsZNzTXmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UGUr5KmXj6mFugxZudaTrxo8iRforQoAoMCByyFTCy24oeKShCtJezoj4D4tJwcT9TTncvS5Uab5MPTxS5xzHc2",
  "key1": "cYDxngJbWRyPPCN6qUSbYaq1xLjKaCaD4RsxJvYtsgpxBBtXmeRgcAYFsUssN4tcH1BNdDvt9hLWiEWpUmhJr81",
  "key2": "5PeBU17DxPEYtXi7QyC5ABpJk4bZbJ7gvXNTJVyVkUthyfU3ytK9cnKvkZdJq9A8aiRXzAFCeLeuA6hu682StygH",
  "key3": "2PeHb8uWmFNRC8qk7xfJkzpmKdz5X3dmmxqippjomiKJ9FHop8CRU2V7cnibCbhcPXfvmNyNGpMRt7BrRCNwagt7",
  "key4": "4f76bzam7VWG8EHaDmAFL8xhi8TcxV3a8vqz8TyVLzwosG9UL95KLe3xQYoLC2JCYFty8EKuLved3MJNrgXusBfP",
  "key5": "3nL8Yhnf3Vu8tHVwrCQDdXCEhnkviCiNJKJp7zXZjaUStqewhbv1fP6GdKuVUiuf6vx7UkLPh1bASYsL6CynzohX",
  "key6": "58znX2NGRU9extxKc1GqENfZHXuMpnHrw6XHTrcDHenbikqHuyEnSKAULqzaKbWWzwb3MNaC7EeCkRTh8RPYUnq8",
  "key7": "3twEfZoyqqGBgECSpNCGB9rTZEb7hnaXSeEbBBHXzdSt8bv7T3fm8f766Jdxsu8aKd6SAbbzLWz1fY8rXmYAm1ku",
  "key8": "5bRXqN3Gon2Qt6XMatifhsh5DhFmC1oa8zBfWugDYkSeJAJuXz1JQiTZvTZXHJ9U1wESC7PiHGx8aYWQ77LXu8Lz",
  "key9": "3FoVB7bjCV1QXGSJQJWgg44JaWkitFZQgnaVgo1EdWukj5e6HjZfNuW1x7EiUrrvWnByaDGwfsoX29g18iXijizQ",
  "key10": "55NKonZkffopPLANyzSyHjMTKN8ZmCyysgukw61uuBJeCVbFz5MMpa3rNgJ3KbGtmfdD6YJ3hqaAZpgdBKCHTSoi",
  "key11": "4XspdeWJ7R8BbksyZvKd6YRxszPjaQxnk89GQ2gRh186JysjMg6f2RQrCByFuHRCoPW6oogdDqHF7kvgaBes9P5M",
  "key12": "3MeH9HS59E2AvuAvXLfZYsvxLgcMZnny6zrybTJf9VTG6RcXAuR7oPVPabbVYjZifG7o4XdHUk1jpKke97Rr476h",
  "key13": "2ywWRv1ZrtguUaN6CyoDcCM3cRKm7vjmcCngB256o6VNhs3nuHrboQpvArLFPP9FcuTogVxdzLGxSvatUSKhpkii",
  "key14": "4RhCNagp86FpHs9ZpTECM1swbVfX7mHF8gT1Sbfmb688qMGk2aKCa1t9Kok6oJw9GabwviqDmpCEt6mY5itBYAz",
  "key15": "3psXWVexJ6GzbevqGGkzgUFJEuQtikexgKq891w4mbhAUMMwWR2VwwToXoEiZ7od1u5vkNGCGQ52X4H1TNYrGgf",
  "key16": "4HumA8T63JRtt5MuB1TJ7d4cqnjL16bzoHCwBbh8h7y2g5GnHbTKcy4uEn4uR4PtcvvwYTeXy9DVQ5f4MSrGVNLV",
  "key17": "2h6VfLTqv9Ra8mnVPRe8yLh6dn2LRTfaRKxUVAFxtSugF48ZqijyMtUCTZTJ14dW6duNu9xuTbiMSzvaC4zrEuNg",
  "key18": "5QxuHiPqdEvqs1HfrP1TS1UFn3qv9SyEiEbAaisyeV9wy2tBVgHUcBMReUd4UmdeZNzmNPPXrqBG4roxh3p5VJjL",
  "key19": "5Qggp86FB3Hxu1Jbu5cg1yNsjA7yb2apefaaGnuYGLkxYhcnaufgZLEgxAV4dwASRUToJBqbVqiHAraan1hF57FX",
  "key20": "23aboy99g9JPB2PA85P9ATJgPRDyrAjNTvsd9kWF5bPzcpqjqfEZLKQHbbcZ9uU28pH6FRfyZYWdKhg1Wh12xCv8",
  "key21": "4khvZoN4K9RLePShUZvSqViChE3psUBocH1kmFD7WKa7eJmULMn2QRuh47QE2pYMpM1jobUQ3f9BPbwmWcugVt2v",
  "key22": "3MrZStDeaxBTdmvU6ZVx1bB5q9vib5BSXxp32LmbFzEqdroPPYLJdBTHYZXMvyw5gySuSriz7HezX4tSe2n1ndX6",
  "key23": "3pg3CUaMFS9DvjREKzB65N8PEVvnJZ3ZsnwFVkgZZqippCmPFF58C8Xqq2QGpeYWVNYfbQ2GsB2zFud7eXCiQb8A",
  "key24": "56xbZLmPXUMKozRf3uJxThWXrvkbUUx9T66x1J6Xet3cgEhm7mojdoudWMbKtMG2by1KRqzPTdt49A8cVr1QVNqG",
  "key25": "FceYzFaUP8bqAc4cSqB78gw4vAdWHo3XDTpGvqLE4Mhs3batFvxT1ERewdUhvMoqhgwt8cNxGGio5uhK4gzneVF",
  "key26": "8WM382Wq2x3nccuvDqrGt827Msu4hnR4eeTDuPsJwRip3eBvYGFPQLQ3BZJerH3CAKc1RMG8CXvwunaB5ZYL3sz",
  "key27": "5bSE7VYV9awwqB5oaQo7kVtRkadxcDmpdWQ8U5BwdZEUej9HGWwBnU4NNsWCTPmNt6ozhcFcnWijmwqhpb8xeuA6",
  "key28": "2dp8K2tryPJfJtDZPdLS91WCwcM4YPiRbQNp6wwPoUSHsXeeTDvXsxbK4Ai2w7zPefmnAGwiptZryraXbBtpnK4t",
  "key29": "61xJ7PyyRKcBBCvgv76jiy8S53wBF4MsmtMqtLgRKEmJXj6jhPRdYQ7iJgcXrfved42rE2e49g4iCB9Ap28THTjX"
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
