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
    "99oXwNiuqGLwRt8rKv44TNYhDkNKSdMVGHWAtrPEv4j3oUJ1NtgHznfbKXHn8gXchjrp771jPKZ7G4BG71wHnXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aMkSsT94L59CZx518haVRGhVF2RMxCBHMgJvY1QSWJtP2PpeGLVFKx2NvSJ8SXgt5AV1f7Mj9D3ZxsNu235ijni",
  "key1": "3hEptfWb5zjLwRQowAsNqHkbfcGV9G32zh4zAGDqx9LyvxsWte7kwxAQk69YvM7dmkLcEtbx5th2r3XGxBYy9zpz",
  "key2": "4W4cGpjGJ4HRnzNPxcB9WgXWwH3zZNXRK7QqfaifUN1sDmxcEdjzbDZp2zSyAjxfyW4piMMaMdSr2jCHg9YCu25a",
  "key3": "52GyooQJztLT7CpK3ZAhyTLCHHhkBxUp9S3oViVRU99shqwBEbkrM9h7fBhQhf6nvWepzz9Z9cMJ5xwgUhLfDAJR",
  "key4": "2mSHvhGrnE5cNief7AGeqh33E2qfk1PERwL7msmyQdcwcBGF5NiuLVUf34Q2EXmRNDwXzGcwnBNpwEmJdX4WX2aW",
  "key5": "5QvTV74bkpFaZzoKzmfytdHVV5vTpLSsQVJUfHDdrTa66zdH3zLNPgDj4CLkPiFk3VB24zZK2CmKQPy8RTfjEYuM",
  "key6": "sU2Gv2cDZCK64PeapWyd5acg1mADxyc5bBWJXhXSSAWJA4UMFC4iAYgLKqLHopz3tEz3X8yamRmntn3qY1Qoc5J",
  "key7": "PPYryGmdNxU5dDKrxYs2kUn5A5YiXkYgZ5aVT5VCPQ6bV83ekKWo8UxLoQnHBTPZVKWK8VN4JabLPzFtQdCY9QY",
  "key8": "5pdHvtkp7RFe3oWepGFQSJPtZBdAJ9XcqTyVXgXNsfcMjh5DT99QvZonEiseowtNufPWds7yB5tecJUYbZFcsdRv",
  "key9": "64ecGmQe66EZmLefggs7RSWoU36QJocQKWKWvWH2VHQBzdhYS5Cukohxv9EAMQC7n1M4aU5qE98w2oLftBGjFFBK",
  "key10": "FtzNGRpsnvNQ3UpiK5HC2QjYw5o8pUFpMrHBwA8EabEg6QmAJ575991LAR6PEA7ExaGnykTHcHzNsrCXY1HP2eB",
  "key11": "5MuSzgyCnjzH1gSLwR5RSJ2SJoA7sX3TbNxz9kaw5P2LyKBQQx2xYz5G7PVKUYStKDw3zZ4WsEcsWVsqfbi54ECU",
  "key12": "4CP1DwvWhyeP8uyUPNTcngZVwKvgDPoYLmyNTAuZsk8L7iFv1EJ77dguf4hJTYUNbAbvm9PR744k3HF8WRSdj494",
  "key13": "h5D1ngimtS7hvfYivf2M9YiaMvSaGmzDWPwABj8gAP3b69wzkvhFSPxTrEobNJLUu2ZJtVU47i1dLjRL1n67UhM",
  "key14": "2VXnSaM36TZuqk5wjpkbg18DBk7pwLRehTVbAQDEJmvuSMtrBNYzKfAnu6Ch29juVSxcRq55wttPSuPiPDut3DnD",
  "key15": "2X2acD5JEEZNWi8MGLALS4uKo3P8v5Hnt8oYvxiKQQFaFe2UjZN3nC9PWNdgQ5Cj9zLpqBqDVsbTMk5hSDRev67q",
  "key16": "4utdQLs7e87486AgCDf8nRS417tFtnLfY1tfjqFxeYkypzcajbYC1gnXsCKihfgtiHQe9RM9PqzyQFrQCLpBiLi1",
  "key17": "HwBfY8k9io497Abnc22KGgzAvGJHgJb8aQuo68QtaLfRLTyps4p11euUZdCzwoaqe85RSPaCedhCDaHPyKKC8me",
  "key18": "36f6CYkNSrFnrbfHJqdicqUqogVsgRSD2sDbETjZ83vKrWsRay3ToUbEBLmWr7BgyHwTbk9LEhofkvGgUqgbdxpy",
  "key19": "2d8EK4gw9YDC4jLP1Z2jnfoFPkh85v7SujKNKtCmRakY6kQFgnq9hWg8DHwiK1iWV1SdA3sJgadr2kovV9Tzcdaw",
  "key20": "3faMLz8zYEbEoCnJfkSz1hGrZhyhCFN2VqZaWw4DLVCJNgijxHYszVPS9rboJQ1na8z1mPEBx15NEB2iFaHFWMfG",
  "key21": "22mfP9yCWgNg4dqDzsuqWLBarTBUtNiLH7de8Du2osUWvrEheFPycKgtFKGVDk9VqqmCkfiY2qRLaoartcnaKe7a",
  "key22": "2DJMBmjPYRymNTpF5nxVbdXncuoPq85JwBK7dREoNnXJStmdQNPCeAtrC6wSaBs3xHgttPRRV9qAS95BWpdHoXRf",
  "key23": "3tCP6uG7RnT92XC8e6jXipsL3bDaz8inTYg9N4JhGVx81W763HX9DtXRKaAU4BUCh55bAzRnGQRgLvMVRffMJonK",
  "key24": "2Zb2iH2KizQNKnFEWwKm99Z62qda36sEHxNVUPyytPTX7ATnuFG3pHmXHmzFBRvodyvTrPxqWt97PAY9RuUtoHqz",
  "key25": "4S7NnttSsmF5Ud8jZsVtF22jWdEt4bWeCKrQ7AL1YMMZCMgKVabBVEsWRbpcY2e2x43ftMPPenEUmSe9aZkJ4a8i",
  "key26": "5NGvFywTgLiKoFj1qAJ2cJcixTvXMTWPpzbrYx6MVg3uEUzVqyuJsazBTndPQMdY3ZFtpHowoB7fBwVEvid9wjqd",
  "key27": "31ETuFqHwGnbzhUbNBTKGDnDEnKY3bCJ7GbGwctKAhUeXwRp2fQU8icoA3GUTTpdQ4dhqgbbP2Xy7LMdFG1mMQZE",
  "key28": "Bwxw2fAD5tSqVYhdB9MYsVShpH58L3bKQwFeuE7c5YTuVuj5ysZDDCzF8QN5U2ayj7zgdTLLvSGVUEHr9gzSGKQ",
  "key29": "4shyisUSLJELeNoNoQtAcGeS8nUf57owSqy7JrdRNGUZ83ggKLfwcMHmMBSaXt85QqsBqocBuuXDW6u6nycd4x21",
  "key30": "2imBRgwQcekXL2isuiDWaT4kfFMsFMezQU3baAnuDvxpqLwDbKNQmuR7hsF6ez2uEWXh79tgFAMqcmwFEV4pTet5",
  "key31": "NL9SNBxhMMZ7gorF9tMHb3R61zgidVA2thDHLN6cf8oLEMU4X59Nk27sSasYALbHtrVA9wQEWTKwaQ4RsigjLVs",
  "key32": "5U78N4bpKDKx3DkP2tPht17SWHdruzRQCvUSzV7ZTtWiTPw4SVBGdLfDSH5Q8m2g86dj5CeFmX3gaMdeBUnw3QN1",
  "key33": "HiHW2mf8CMr8ZuhmN5PAUrFowS41jgF5Av3BgqWsqVBSSQbarG9Wn7NfyH4bmUxQvBKLvxZFbztHjK3RDVnLj2v",
  "key34": "61vVXpf5b64ZX4bUCP7q4RzmaM73XRdFBLgLRpp57fZ2ohztRW9LP1T6hjru2hTr8mX9CMAbWHFL1B5b1ayG3NCU",
  "key35": "5EMGXg1QztiHLGvzFMB2VMXTjy5wBxD1KtkviJmm3fVm1qBbzDyikGdUR3rAVs3viTJy26cuDz78RLuuBCVQDKbX"
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
