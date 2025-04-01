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
    "Ru3WSkJmqYdD2EHkKcCc7pqE6aBTJrYfaZ8iFP4uNFJwhuj2VNPHMpR2Htt2qgtKfDJs8QnH6HW4FDzHfsdGqAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26fy2gWhDgjo1cRjWs37JF1VyLutpa4Tsskk39u4r1vA1wBUseF6A3G2a62RNZygm3u9Y8K4zpdsLSVqEJiwr1fu",
  "key1": "4TEvFp4WqPxURSTcpLRo5wqeJ5AFWTAWR2QvwtSQAF7oHdDy8UnN1oFDapQXzKF6qEpamTHQZaZ284nRMygsM533",
  "key2": "V5WPWU1fNxJ5NgX2zcgzqTJSuhceHweftZHCQ3FfNfFQ4NaqhA8E9iGt9DWHs6Zt2knYFrXi8zZvLcRwtAZWGXT",
  "key3": "2bWPRJkc47VpajAej7TQW6DR1FvAGjUP9gqNcznXCfQhMbawiVnc7TBGAtZiBaczJZtHuj8E9PVSJMQQxbJAHpgQ",
  "key4": "53zXCB3gnPzMR4JJ78K5JBEquSs1j83kCYtbo3uQf4Vg2uabaMCkQKT328AfjFMeop3cqfT2PvPpzuoG5SR37uUd",
  "key5": "3GY2vZX9kV1LYe4Nbim9rne2pSdcgFP8KA1XRq3ToqXwqYtnxTDy8WbZyWA3aRKxUGL7AmvCVZ24Yd7juR5Zc9de",
  "key6": "BCL7EWY6p88umEpnpX1pvrmP4rJpg9YkNpAfBTCKPV67NKUKskW71vC6kor4zaZ5A4SHYMV9PU269DbHLntZenm",
  "key7": "65xiFUCrPkARnWnYkAa8LCgiTE5AueQJRJ6gP8fRVwEMqEPr71ueTSA7xy6wuccopTc8ksQMu5Jj6E6z2Ndkta4N",
  "key8": "BkJUwZjQNHLj5PBQ1ZRkKUhTuXLThZZtSKPEcaXScssJfQ3VvFz2fcVp6G6BeTMSqXCso1mWHixfn4RoJKpjaQV",
  "key9": "4E7CMj8yRspU9QSC5mQHtHFKXfX8xarPL2LpUYSq78Wu8eZpkqpX2vRamdHjuSNvBxo9KZm6Thd9eXqqCDpLvo5R",
  "key10": "5dDKg7p5gGTLi78M4crRMMy7JgXBUJnwQJJSMptiwyYH4wPQKHaH5jJ3KWF2q3Vpw7ku3ytMs7AGfKHPrGvJ3wW6",
  "key11": "2bMBjigipADhpyWofXTBNxCUJqYABQXckWPNrfAnJwAvBuUzYwdvLcxqmz6pFzfmTP5TPUi9VXYxnLrKnXrDpZbD",
  "key12": "tbfsZbajCf8dcrNdpwxvdhjzxPJCJKK8T66sUw7xudc5pAVj6UYo5UwAr8K1mqpWHcmF3GWLKHDG56AVMR6U18w",
  "key13": "AFY7HG392tB4iBXLxGHJJD86J5xtDN4LJAat3pskHANmVHE9AqvpemNV47BWnu7ir9MwVvuHAr46KX2T8nxhMHp",
  "key14": "3FgVgQAwosgfyyEboE2SkTTw8B9ER4uGT8vFRV9kT88YKKj8QBCwYLpKSr8PUxFXS49SfZFxb17tvN1RnGmP89h9",
  "key15": "5VVLT5UqHtCCqVwhgPCugeQhUFmeTBQG12cYFqVBjWCANUXNHPbN9ajTdpFTqNfvo7NU2DuX2TxP6xGnPLZGBvS9",
  "key16": "3iiTQahCDWVj5ZWnfNDayeqRynoo8jVLKpxTqEbKd6ukwDrUmwWwABEcQBdHr8T6Evz1u64A6J4mJBYpGKWkP2u4",
  "key17": "5TFsEc8CvzmnyyKtVeADxXE1MXwwX1esZbpd2gm5cDsskyuCx9UsHpmrKonrdPPNCyjesh5cW7upUH2fzyMCAutr",
  "key18": "5uFdvGqningifXGJJT4NVEJAExJXbfhDokre1jWFfQZPz64EZ47FfX5UFuY3zfmXWWHdgwADqNM3rV6SAMinvvpL",
  "key19": "5heX2r4yPJNJtoSptcNfRQdtFjs4v27fX5bjqbb3gf5dkjVTw4VYA1NpNE3PKoWoghAVaPcmRsaaJyHsT8UGUi3C",
  "key20": "5cJZxDMREuMS5JeiADSdk9gVv23dTo86C7hf8Ha2VEbhCKXanm9tXb5yfjNJkzKbDvrH8tX3oBMZeX9EUSZbfGV7",
  "key21": "5mNGSMaSrzAuS6icYkcRXjKSRvUaoGKXFnHSkX32icMmRh7kNiyFUp9jPoLAiURDjaEnb3SAGXwPj17UxU6gAPak",
  "key22": "2LaKqD8zeiKjtutYHAWXaxvK2p7Jfeib8pzdZi1pLdnEq2LCGff9FNDirNUwuJYGv1jRUsRAWFKbEYu7sG1sCj1T",
  "key23": "2gcUyBpvnbTx3sdwH8sz8LbkhYsHRd5yrfboGK3cD7Mnq24rgJVZSSBp1mjPYZQQv4EkmRU3ZRr6w6zNe1eXsVKo",
  "key24": "5uyd3NtEsq9Bobu5DtL1x4eJNhUFmmRbyncxaavUJTP5XDgqYn7gbGPc3PoJARzZE44J46vccq34hyu316c6znxz",
  "key25": "4c21M5vRQGVZQD8GUeLWadvKKhVS91ppHHqB5vG9jTx4mdq7nCvqgRpq74F6vQt9b64nFfRzLdnUK2zNCnmBKG9y",
  "key26": "t724b94B9pcbJpj1kWyFVB4WBjAT6FXGJrxLRExN3jt3Ts28nWwc4yTJDsKGRqMHDxjaCZva7RWEwtp5U51ZxRd",
  "key27": "5XPK6RgH1BBbhmsbmM32SGTR42J4CrvAdMRxyDzG72AshUwZ7tNHmDomwrw99DrirHXF1HR8MAwwvQnX5Pq4VY5i",
  "key28": "3vhs6gCe5XGQYTrwcRQacLvyDXu3ZmDW8tvv4dxppgtgLFRRqpYNP3FWKGRSX2tWTcuVicWUtaQvja84qBzTrMS4",
  "key29": "25asxczSXtTXGdxv9h9HuqrWhmf3JqJNCWBzd7FDFCmSiemtvvjRzFLyeXKiPGgcb9BwGGmYdjHKzcNtti3yj63Y",
  "key30": "3gQT4iMwz2vQ2RMZRw69HYRLirg6Btt9nsete7ahvLcn5LiQHwaYbrpktG3CwuxuiYm3qMjtzRDQYr4h47xKT465",
  "key31": "5irfSqAXFZDsT5e8kq39jagV7Qr5nkqEcnG46wT14fZoaDi8NEchh5riArgH17WxS15hajtpoE1G7N76A2RxA5J2",
  "key32": "3Q46TmwGxfyxy4UK17GgymsWE9neqy5CeAPRZ7hgN99JMYAYBnJPveEv5z5XNKAJjXcYM4p7xRG59bbLMD9kVumQ",
  "key33": "fPhpg3eqUKRT1emtHhow3x9a3Cw6FcfPEdLJaX1zvoJBzuUb3a7zkCTZWdpvCJ34gHnPFjCmoaL5QRC1r9zZqfq",
  "key34": "45ESaZRNwLxinMuABLE9vXHDySQtnJFkzw3BLwV1FPN74ggJDx8pfmvN7d6P6c6s4wmTJ9WtcPhQAMDb1U1G5LDq",
  "key35": "vNgtNUMA7qRze7hgN8ruN1Sc1DkXuvs2iHHBxQA8p34dcHnUP9SYDyoKV8ahihdknAka6dz9qhSZwejk9ZiJQcF",
  "key36": "4EX6wmjS7xjedp3NcJReksZNaFZzkrYByy4aUpBZcajtQ98aLoe8j7gLH5AK12cd3AqrNX7Jf9aaHYM8XSx218dU",
  "key37": "3ZU4XRZ6qPptjk5DnNpEKcW5Swmt7hsZWytvHsQLjBvmyYSsFZYWL3CMHNk6WmkZMPSRBnNeXH3NJ2WrXtv9MiLv",
  "key38": "2XPs7PNsWNZsMDPNRjgjHB5ihim5YTKtvq5Kmsq35sZrtwiVwS4NA5uPoPk4YQu3UT9CAaUHA7mzZTF59ybg5mqG",
  "key39": "3K8dxi9i6nNdvSWEmedMxJeMnvKBB7J9mqh9GdBdJZbte4qjeq3RksYHgR7JcbeaJ6fPtQr6fvhzzMibQx9BwJX",
  "key40": "3JwqqzVpwkiPbKqbhw3LM2r3icb2t5pQirGkdqyocvTBgwSXCAEuiS9nS8ooM9rjBn8Y2ecj4mbsK9mcwTYf9Zdk",
  "key41": "5i6DMsqCqsasoYdE8y7KNyTx4s9zxHDMxwS5KUeuBFAK6oXQAkjotETi3cB1PrhSawwzy5tzfXnycadQvCnNR5CU",
  "key42": "4YDFpB36VU66gZKxXJbsDzY5wbVujVsZiFCjpT7n22quPoFX7qkXvpPt9vfe132ru9gg2k7N76pNdUaTpeqhG8mr"
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
