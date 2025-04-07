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
    "msoc8KtsvcQ127x3Ga59Y9Mpft1uMo85BbGYXgKHfJ8xzW5Nea9wf2SChRnQjrCFWy5rupY8LiwypHwcgoi1bUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qWCfmD1oijdBqxVKdSDdcN5QpXx2MQM7vUNPBeTr4CxczJqFFDePCfNqoejq7RwX7uTRdgth4oyev9wi662UyTB",
  "key1": "SXfcmcudWPNQCwMgLvD5ks4dJb8oQtQTrdAhkvDoe9fxcVg9CczUTo9RGBCJNUgebYAtagxsWxGdnFPFCBujhgv",
  "key2": "4wZQCQmCQN4bLJVmTxb814grA9gSQ4kD1uD4BCGYWq2eqA1GeTwQi63ibxmK297cP4DT5Wau9688qLzY1ezWwTCz",
  "key3": "2vRa3KS53SxenbpsfD8pQ1MyTBH1SQs2g4L9wzT7kim8YdyonfPHvYC7QCtZH8ZEH6VQNQMn6LRk529nmx5MTFCg",
  "key4": "KAoq6LZceSEfqkU2TMEbQUsWpHqa59x3uB4FKxXwV6mBdReEi6kAzKUVBKZA5awdbyyHwnzbx7YwBoRpbGqG3R7",
  "key5": "kzrLNHEHpUgWLTzQAxYNmy6SGciSXVve4zBM4Tpx9GvBSLx44TKc1i2pwLrhaAPdA62gDXvtHk2dGnDyC3tRFA1",
  "key6": "3kxDe7wb4H9XAh9KgJuocWPgJTfdLXiffNpNHyHJdup9DNqUHESy62vNmBqEcyDLN5pMmcD4MGYCkSKnQYC9p7nK",
  "key7": "Rw6C1foje9S9riifMeygRdpbWqThKgpH8AWGZxiiVQ6qco4rX6Ck2iWCbw8zDxgYFmhPsLdm5V6BCp46jKaEveu",
  "key8": "TEzzgDf9myaRLcfjbp33qaHjhBwKEgDPNpsRB7zKecU6wnu5HCyZer7i9PH9b2rGP7cCUJPEFbetydYRbJqzmuh",
  "key9": "486BdqcdAyJWEeBLAdDXej6gWN3tQ3Rvj3YNLm8VTwg9PmoHT8gTpce2hFbi62pkXLxC8Bc1qDz3X8RfFkebnaoV",
  "key10": "2eBA6LLTogWg8mafnBCyB6eAaSuuUBPTD8w28PssZhw5zkwaVuyCBWCJvyV7QDS9LKGcPk6CzLRiTE1RGuQnB9YS",
  "key11": "4qQzeeWAVDUGPVpGZuu8sFZkMTTtzuTzKnnfqDWLKPtykjq8jR5SsjpN7pdQBa6AbEy54zxke6fp33WcRxDyvoq1",
  "key12": "3stDVD3pFwLnEBL8sP71L9kbXGbE3GNkh35EqcCeMRYEU9wKEV2ULVpQr9eycZSMukspjPitM58YAbcG5hprqj7V",
  "key13": "5iNGU1oEej6iSCosBxu7MNnYw8Ri2pgEM9xi5qZXxVSftXmypqNScf6XTUeocSqUub584JX3DV5siuhn5mvRkoye",
  "key14": "5chRzPHQvF699qEo4zznR8xj5Dt2EGKgm9VEfeu4A1cD6J8UFup8jsWGesTUYRUagbtnwB8p1sWHe5HCmvtKQztU",
  "key15": "3yyBkB8fhSdkurMvSbBqhC2DdX42iAKTAEaPK9GbynToH9DHX5WQyXThaNsx9GwJboXYfR1q72dVYZ3KPbTvdK3Q",
  "key16": "5K18x3Faw89Cp981UD8f7JjQqcdKB3L47BWFJPyFf2azz6iPcLshfmAimLU5PXTbA7zT8X9FLER21x1xZsv9uYdB",
  "key17": "6vBTTNPHEyugmBsS9BNB6885hKBVsg5nfrbi9USSccgMmAr2ACHFRpMavQGFXX3Ddk434nzfjE5knA8UQRVUxaF",
  "key18": "4PnScuLvXeTa62DViGeebSBL3v337U8QpeC3fXdg5CkoetdWXE4zX9PnyAV3oDzSdhcBkd11x4LQdLSrBw5YQ9UL",
  "key19": "4C8MALWfUPHs4MJDnLmccVFmFLVpNXLCxpHKickiVgqhDfTpanTukypYoj56uP9fqiwiB4WJ1t51rioaKGs3iWZZ",
  "key20": "5fFzY2JB1r7MDD4LoMxdYoyeXGzcDnA9nQPtf21r1w7BUJnywZqJkGaS2CSf8MidKbsHoHMuHd7pi5x1MvJbh5oL",
  "key21": "5tR4nmnu6BL2Vh4CsFWMvTVsbwBqoN9Pg1xt2596opFSAefYwRqGAggxMoySe8xQDkGnghoFQQDcmLhRWLZobUcC",
  "key22": "2NMYfHRVL9xXHzxpVVTaRNVHGK7N8sifM91R81FsQnxMkNN8XbAoRL8H1ykQqNb3MC7sQP6rMo7JnqDRwGXgV3ax",
  "key23": "4VSXWFnRsu53xFvBbwj7g9hAHk6yGREccWrF3EsixVr4NEfoGMUffn74bBJfJJJoPCig8Ac2KG3Y1AeLXNm597ft",
  "key24": "yAFb36bk6swbCTErBUcAinZYg1HQHqYij829XWrhyLnWEKpSefe2Mwd1Ay6hDW52vFZ9omNBkL8zKSj3cXbDw9V",
  "key25": "2C3vhiwBNM59cqQdxmKzBF9N8CWUWedGuxTu8z2Ci6ekeYiA1vTnrdaps753ZM88anzS5WrcHY7E76wE6Xqnfzh2",
  "key26": "57pqW8GzdBQg5QZp7h1Uvb1pkvqkMWp4o1hp3CB9NXaN8LWafBsAuTkJT9g3E4adkPPxFY2rcDhj8rRU1wjHdbzZ",
  "key27": "2ja2LnKqGaGnphcVNTQGq7JMvJjgJUSyaar4k9MKys5s83RJEZYDeogpUCgpoZxuTSK3GWoh6pfiF3sqdF6jPGJv",
  "key28": "zNdo2TVyZC3xdVUDRfWB6V7Bygv4HgnxsXYgDcfEFoVtyj8F8pvJLp1Tw2TkQjYfNyARewqbnU5DEsFBKyKFaEx",
  "key29": "5F2SP9ndJgmsH4X2ae6oDhDQB2VW6KDcJ7w5h777nT9JRaVHffPYPckwdAwbpXyAE7j91z2kGm5gmDCPcu65U9zs",
  "key30": "35EpR27LuL4ZNF9UUgDAFeW57zM5c6TvQzDr6mF6WZQiDQVTiM8XEaAxWDr3aVDXyvR1fw8Sg57RDw4vrVp6RiLw",
  "key31": "3XpfdQ8ZfCktwU1jY3Ytp1Dh344jAPQtX2BqZDicLN4Z5df8X5xRzHRQH5GCrMqG1YFLwQ8Cbz4PZZm2tx1Z6jGQ",
  "key32": "2YTbpmgqgEEBiiTTE7feRzAYQcJ1xJcip1ovHKqQV2cemQoiBhpSvZunerpe1iLrwsEuzJayeFJc7X9EYRtyNo7Z",
  "key33": "5vDi8WiEhrr6DVKzmDvTUFV3EJS5Ms3hvZ2pwidEBF6ubzNhcbeScv399ugE5zJbgZP2yR7BdSTVKCYqEgMAEphD",
  "key34": "p5GhrLYHm28UFKJKpZH9FaBfHtqtWpoV9Mnr7EVRU3bhii5EfUAC9nxxwJrUBCFVREjLq9Qcs55bGhgymqR5pHD",
  "key35": "4mRJrDWMPkdnV8wYnZT3R5WHdtDHfeRxpky8V33V2u4BciBGBSUSYmfFDG2u1y2cNsvLXSkeKc5TXRcchHYWs74h",
  "key36": "4iSF9QvnhToR7RgLFesn6FixMkuZY7HYeF1nT3jVMtcgnP7dGPTDnVKxXMJgnWZ5jS24TwVekSYtvPwSkgPDkYz4",
  "key37": "27dMj3eLaHvkAU1izQArN7bGqwVTTL2RiJ9JMoraKuR1MvEmXv4d7jBJK6ruB5w6cpSwukR1WNiS6fY3iwVUiVGw",
  "key38": "3CU8C8T8ykXNKZXNEe8YrF5yarmMHoBEwwGavvPDwDKtwkz99barNedM9PMb4KWBoou4i2dSvBbhFba4LA5QiiUV",
  "key39": "4KxMFipfvPK6j1SMmefJgKQwmk5Kvn5tDxSvMsPavtv1Cfp7sLDWZHG8fLtDezGv1RBcNZxt7HhG2uJox1tmfzyW",
  "key40": "3kXxr3s3RcU7X9WRSrYh4Pestu2GK5qmbDzUr3FApkLC5GHpLEq9n6wosegq1hFTmbm4ff3iYcFBwrfEximj1kUH",
  "key41": "5ZkHRGZH7A89BF7CgJUTgW2n4Vin9N8RxUmNWJ5Ca9aPCyRcxLhjP1CuME4LaHKB2KG3JAexBCELbSjSxibbpqWm"
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
