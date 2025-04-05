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
    "FNkdUMTVsECFxcjDRbVN1Jzv4oA8jTQ6xKih1uwBErjsAownQmhCeGnRgWvEMZ1eF9XWrGaiHmEf1Lm3JiS32am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D2n1QrLEZY2APWLaEmTLBpPnzb7NG7RcXzfZfe9irmxByrarqDRyWtAWTD5oCsmoaGjZxbCU7zbq7hNB38Wr19u",
  "key1": "5VD6pimzP5fjBPqYZkcoMoq6FqRLsSmvPzDj8QS5kFyHiRJm4DbyqSyLkK8SpSxabqVW98Jf4ogpwJYsRxV9VsnQ",
  "key2": "5uetWFfcqZPxABUMVkht7c4iBFBmaJXcPXKMUBCJ6AAk5eKmTDhDGLzu3VWUTkrAzfB9AACdsxZ5jR8Z8u3Ua81J",
  "key3": "tHY7hetegkdnBf9SPQ8Cx9PYPJCDzDzVtij1jep7NdJSL5YRw2w9z2BRLjYs8otkGMNTcWtEAupG3ieRWHxJxEU",
  "key4": "5wAWS9RwnQjEzWaUBGr7ygTrMQyJcsKYN1BSewMnGwnG7hBNuaVgSCxaP596n28Ln3yuNxgjZjEneoHqGFVG1wNw",
  "key5": "5VZvG4LNFnczfUzduYc8LB3RRb4V7W8SaEf8zcjhtr2LzhGQbpFjMVmazq8Wq5ZKzE67NsbsHPU8xL8fnyh8RNaH",
  "key6": "G8m2jAssYwuGhPrVs9sNGXKziKyQcwTmuxVpzbboVioA8dpHdMSHvhv6mn3w1gjXFdubF1UPZUztFagHiHEzcez",
  "key7": "3gRyu8xo2fFFwquozEiqQiUCPPypmfWmxmZZVUqSe63QK5V9nyNAcXcHnjtKXevCMPs6eo42PqAQBdovEfRUc4zu",
  "key8": "2yyFQaoMj5FVHn8b63eEvVeJ2FY9CYx4D8aU39fRpXpPqYFekTLuuQppSoVwFdDic8KNr8tDxbqtoeEGYomiYw68",
  "key9": "5h3iSWVWPXrrGX2Js3Co4j97mWBTm8dHiDLJq2srPcshs6X2R9xNzXMbcGgF88VoU6XtRGH3bN4NZv2sPQCgQk2n",
  "key10": "3sZZNjcwqbdYWMyhuQxcyxdULCGMasvtPtPnvv8GmMow3ANcjrj2RKx41P7VZKReNPXoUQmK91VGvnpita7Zoja1",
  "key11": "MzFQx5ATKWC9uSmM59S2hfMXdPUVVsnbLcaoucjXj5KzByUvS4r2FNzwB6NaCD6BfnnXDFtNbHX4sG8P7NNA2yr",
  "key12": "5vFFgGGEE9ihBAfDCX9rdnwtgaiS7fV7bvaqmqfDWDSRMaN5x86ACtyjno5hs9V4EprpHwEeaxuaWV1pAN4Rpfyr",
  "key13": "3nbAN9y2ThZ9gTUpsepuYQEvJEZmpRz1CbQxWTWn4mUjRi61fBnQWDw8DjmQ1HrVsd8uQSEK8YXHoZpJsBX7hBd5",
  "key14": "39EZ1hk9qd1C1Tg71ZE3aM2eRBbhNYG9HxcqBrPtNLqQJT3pu75ikHXef96VwsFdg3tBaeh15Gw76cEaixnK81D9",
  "key15": "5LCycGTq6ATYTBudQQb6Af3PYZZMNBKVz4bZBhUcCkNLB5g9Zz3b4SNXmUjJAnFHzUvGFYmDYWZ3LZfWbPtfT8rk",
  "key16": "47MVUDqwDJ5LEjgkf5drHQrtc7JAGVeLEZKPU4EaCudf34wNLa1yu3Vs67qEcDNi74yEuLvB1VNXTtsYuGUZKPMi",
  "key17": "2pAZL9bNnz93pUCideTgtC17jWvYEHbfhvyoiHJC6ZLQMMi8kUvqzH5e6L3zZNHXvwyp6frovBFRcswJ2GVwF8Ki",
  "key18": "3rJCVJdszXutugje9Wo9y4PQvLV9AYxpYgjGhPQ9JqgWdyAFDBApjSRdwt4zHwMtHowHkn1Wvptyi8gRHBtopJ3G",
  "key19": "HX6bdLGjehoHRg3FsT1HYKE4QkP4o6PeQrZBtkzvnHZwq9ksB85TnE14rUVVG85d5wghubeU548diiHB1aoYMu3",
  "key20": "4qUC6cU1z8HcEdJ68AqVknBa4p7pWJzZWuAg9HNFfZxxQZveytMsSarZm7mbeBwvG4NrZpAnBopDF4EtjFymeUQS",
  "key21": "3u2Soee7KqV3naVqPtmTcFuJoKie1TupD2oKHjaKZMn5PBazxxaRAoM1Dy9iztBpLbxdr4oteoq2aWvNUyPLUsN8",
  "key22": "673YgcHmZhZ4yVP4ynnisXZgzBMD7PWq7kqkLnMTLdZB3enkKHgHjNcSqYFiaf7vDa3Yx7Sft1sZdewYD2ihgmjR",
  "key23": "JL2htFfnapbxZHRG9DDZ8XboeuvxD8xBZUykAp2zwqiuVkPMFjC3URohwfsWL2zL5dpYNqQUuyNaywkYPE9EW4g",
  "key24": "8G3fy3gwb2bUL583RidsdgE5SYegXp645YrcCs7ecBhgZx5pFWRhZgY1939JrsfhG4uAAGuSgPRrnujaenqT1vh",
  "key25": "3jvWeAjgyZZSjjaeciauMWGVxFgMJVLr6Vci2PwwhtZ6kR5XaaVJzkXNLvdXhvrR1WYY7Nv98XBptKpnQ5YjGs4n",
  "key26": "2jWv5PVnxNKqr2Nj77zDaEm2M9Dh7JatFxzXyb89egmyM1JEp7ojhUi8GxjyhUwkPbfbroCKwkDaiGpy1RMFoegs",
  "key27": "Hks91cRXFRJy1Dpz9okpJRpDmbUjgaTxCwdfwcdcx8mxitV5kAkfPa9x4MxtDHJs7amU4saUg8LCNbBRcb48teS",
  "key28": "3Lkvosw2tHoKpw3kx77TufWdMUVpi8jqppth6bBQtpLz3aYhuxKM7qPujPqcapyJSc3euRLzZiERZcgmX5qbV1eP",
  "key29": "7rrSFFyUVrogKJgsa6FZ1skH9QqAe4zm8VQT91JXYZhXPWiV5d2xGJ7oB4Z8VrzBsY5pkv9q6tEJqQZ19ngcy6C",
  "key30": "57a4eb9VCRbaejxfspTM69KfsSdu25KQ4QREiqS84M8V6WMrqGyNVqMbyViBUQNP1g9Uv1QBPKZEwAAK4K4WKtgf"
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
