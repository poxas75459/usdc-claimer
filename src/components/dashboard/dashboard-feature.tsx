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
    "2kobDWiRTYX7Qz1MKDyYNgrdzGjv98Q55eTnvs5UgAJSh1a99ABunfSujsPiHDC1uGEtwnHqLC3j5X748Du62d8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dCZC7qyWnCaHjHYusWtoRxuvnsEWLHE6CWdN5FK4ZctUSqmJy62RncvhhbJ3ZEEYtyZXAY9FTKVKbLDuW7sstPE",
  "key1": "cUj2KQ99QcvnWaTusQdhdqCJw2fuvKMKKuyCPakuwhuvD7Snx2aXkMiqwbWQ5ELeH29RtqNY9qqXY63fDNQDQAt",
  "key2": "1NbqojCyr52SozPyZ14a2bLdcuMnoXkPFu7ZvPr6Ne1S8bWNAuM9ps3fUQSa86xeUUYYY1TAo9xRaiLyydFSrjx",
  "key3": "jcRbBoA9wGSYHCv7SkruwSoPyEYuqnmFpBwFnTzaeYouSikCBXXr79AyHaoSBABi6vrQ3UeAfH4YwGxH5vxJEFf",
  "key4": "3cht1MiY2vwACDp4dSTzjCuFPAoP1K4qDvQwLAVj5ar5KEkmwABCGmSSq4x5qk45DodNuQ1Jq4fPB3giobzsqvmw",
  "key5": "33nJ8hYBwfYQKbPbwbUqCJod9ZPK6bpp11igNetYEPMKyo8Sqjoij9d5VdqjapFfWEMLZz4Vq2z9jTmCfMpX4phQ",
  "key6": "4mhZskAERR3ueaN8gYE8fwYhUKTazgARKTkWuPwhN2mrBaZL5KTrHn7JoM45jsdbpTJs7ggUa5TzZDGpDdupjNhH",
  "key7": "3AGbtxFrGwn5GHzoJqi98NwxgVsWzSk1xMPv3yegSuZkJH8XHC6VvwPGC8pwmXKGRGKLkJXxxcSYDaA5azx8LZe7",
  "key8": "5e4kKZs9buhegYLfynQyoYNzXRKbxVA2kzDnV3GBUEHmwgUhkjuWd5jKkYnYHEjLNyVtgQEaPypDtgYyWKypQi1U",
  "key9": "5SNEmavV3TR89jK5akpXubFrMhrxsbX2xzzFHkNV63FGmyobj1mc9NpGDeCm7GBX3Po2A9Jif2Jgu8DkauDYsDDm",
  "key10": "3AULXhRsRyEakU2ac2Fz8CUY44LQPNHHYRE3WbFJne6oxSgozE3dxmQikGUG6Kpq9N1aA46PsJuUjt3MDgNqxNVR",
  "key11": "3cdBQwXETryP5aK1MKcGN5tVDBx1jvVGkvFTXtYkPNFYx4ixCAngUQbCPLEmaM5PdR9ZywJJhxWMKNv1KXMvbLfQ",
  "key12": "DoF9dKhM93L6fMtm7zbYDHW6WNwfPfcTD7RQJK5DPinWSRsw8Qxg4jii8kuZH8s2yqQjtiuKAdaaqExxUKHXh43",
  "key13": "3aztYBR7bc6f4kV7FEFyEjGYm4rgggkrdZoeRJ4ZJUJu6JzyxcQv48HkPRjYRc3BTCCxsqtFp5U5FJ5DpuqjJEs2",
  "key14": "2uqPsqY6xeycSFrJTMdvR6DyiYkyW2hbBcs9TbvfLP313SZ3B55M2aKUcseqfwDYTRK2M9mLBm3YMpSPXrp2iMu2",
  "key15": "yytntjqBGcXysCiqSGHGSa1ZmhCjWxuioGqA6AA5b6G45RTW19xwmQUDds6xuz8LgfyBTtrfRdHBePjLX3U7r4v",
  "key16": "2pNZjtWDwP365v8GAyDVMRv6XDHq3Sk9fCCQ4Ws28H8SMrwd9RoRCNFyY6YuNmMBZXaPgB5jYWJW6r7UtD5YhTQZ",
  "key17": "3DUwwqW28Vwd5W1qv2rizMqbJtXs1Hj6o2yCqmNQ3o25jxgSTUqjyzVGcjKuPigbVhmpDPzLoLPA2LJD39ASa8Xm",
  "key18": "XsGFLBgWbDLD693zCyAk1TFycNzixWrSoiZmrEzWKMysWH73oKNEowrL7VoqPwZTdTZvGHgyt9HxpPg9peBfE3Z",
  "key19": "5JzA9r4ERSAW6Rq7fQ6MTbJPW5KzMndnKDebiEiXuLkcxszV3CCvDMNi3ShiZc298tesDUkqvw3A2eQD4te3LWCe",
  "key20": "29wLj6pkNyiMZG1kpr5AfiQpbvaZyjzPyMDv3MYHq5Azu2UD1hMjHmv5UyKvjyhfSk3Wr4XKoAo3Ygn2vMfPf4TN",
  "key21": "5UQcQaAi1ppvF7SLWLrJrDnGsDs1pBQ8jbR1W7tjC7xxcXHrGQizv72f1PkroGtg7ULGKyWAfu9B9ebdCjerN7Vq",
  "key22": "5gkYpzJLPGxxa2VxseBHSp9qH6PpZX3zDmU4xA8hyCju2Sssj2cBr6XFsCCV84weSfyoM78XJt7Fw2hYys5XUNAd",
  "key23": "1U9ezVFNnx9SaLjYCsp6W6mrFLENTwBYWbsA1TXvAVyLp58GrqDE9XW5VstXgP8VDEi931p9mT8kY6TDbXQtjR3",
  "key24": "314tm3VPvA98fASzoXacznNaHQ5N8rUZpr6djPqZN7chH2VmMGMUbC1wYgW6ANkzMG3matHsX5Pq54CubNt5QjN1",
  "key25": "5vH3t1jpYVC3633XWDHNMktE3iMAdaV35cKCwfSduU65sydCczNzVMurgqvkPgtgvBNVpz5aAqkK3mHzXo3CbakD",
  "key26": "5vNNA91oZq3FF6S91CtJC4nB6ab79TeXrbXg8WV4f26hbgbbjBeYcyRDT2iM6hvdHCCY4LsSrugpNe97Fo23uEFj",
  "key27": "AMA7Dh295XvKXe2ivtZCAYtTeyu8btLpHqK3Dfhh4ktCFkc7kerToza4REu7dVE5dg6ine4k2cu9fGErCeyBQNC"
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
