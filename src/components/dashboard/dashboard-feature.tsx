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
    "2NKkLv1hyhFDqyja46A1tRSWj33jRQKRfZXEdAvuc29TbEdtiJXHLouqkhLUCr8N7jtCDgAAVe2J2BgJUKtq2A4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AQCCuvpvqrenyeRnVEBjrhEqVDmehCAVnLH2ewpobwCTtNVXJEhdSBj9KrRP7VPg6TeRMBmHAZPkpBF1HH5jA6u",
  "key1": "ZAmfxfjTKPg7JkGpgt9sVrBgDksGaKYsU6q8g2jPgwSZEqWuTjAzjbw1wZ8oKzGNvYu2j1CDCnt689Pqkx8wKNZ",
  "key2": "2SuKR8FrRtr3sFRx3rojjWe7BfUDhUPq4x5hiP4dWjzArtqDev25sc9PcZ14gKSDCj5epVAsVyFQmzYBuZeAtL5u",
  "key3": "5Sp9AVhqvRda9dKNgKA9SajU9pkLccCwGEt15wwKJ1AxejjNy97QLs4gczVLYQCirbpaXLsaaXZLnF6FyiSTHJbe",
  "key4": "2pZPTZUqJfe8WevwTVufSqMGz2qSX5TZdsAst2jrLmXoKETWMfCMxqq3BUxb1MdfUjNrdRPLPJYYSBgfP5Nqatm5",
  "key5": "aBHpLQapdHvKNFShtQkGy4xwg6RfKLsG7DmTXJhiLzxf1foKUuGWWtqzR95q4s9Qp67QzPPtMzjFe3eYsmwmHdw",
  "key6": "5h3vmGmnkV1bfYrH8j8urHsrrsdxYFTBGcMpMnxS4QxsA82DuvjRuRbCdpf4YPKBXg3vjWygLEw4Pz3BYSFrj8Vj",
  "key7": "3CuEMtbT1yr3DoXknadhJ8XeymHXiAfNpRKN5FSvWgwZYkk4eqsTVpRL8jSm2f5xFY73jimDZnE3RFyJ31Z95DCF",
  "key8": "4YwefJ64nyF6x91iRb2J14M4kSVo7XaYeLYq4wu1ggjFweFiUpN8DbnX4wwzd2S2NJaAp4UDSyMdFK9N4jWkgvYW",
  "key9": "4RMR3JgPJGAg289LQBorGymuT4wkajTm8QKGvwZrZAeqTHWTqHiD9x5pc9YT1EETyxwmLhb1SXxmxBmJkzmVcnQR",
  "key10": "669KUJmGLxHKAarYVhCboFDhceZaaBKLXMeMJjjoAKQU9HrbTz7SsGfmnsWhadErfv4VWFfeuy8MKmZ2AjDQg2o4",
  "key11": "4zhU5PwxkeY4M3VEUZJvGE8S5XrEMga81d6fR41rEcRSqtRhQTwAYw4Pwuoj3yfdY2xwW2reUFdNgcJ2Es8rhxZU",
  "key12": "5f6Wux7oBvJ1462gKRhF6LsvfaGg7Bd4AaZpDCwXEniqvoLvYXdXbqAycthNNr65MkWUmQszqa6vwRpQS5FDpHzc",
  "key13": "aMLr27dtMsjLkQeAy5cMF9zmsvPX3QxgRB4VUg1bZH7HmnjV9tRzzdU8511HUJaVQVhFrsjqkVVdS1TWGpFzKKH",
  "key14": "5v8BrRcLEzzuDQ6kk5uDFQEgHz5SybmS1neYisPV1RmxxXxR4TkLYuWiiTGJoLPzR6roDJ2BAMi2Q71c7ZVBiB3N",
  "key15": "5YSmiEJRQJkCyXPFx2PMo91VAikMEHaWUezUFXcvn7duJGgurCMqs9JYjJuSSsjtSKTiZNUeZJuiCaEqHhBzYCx6",
  "key16": "4txoRs3Zus8hxKku3vwTTWdSqujnA8z5HpsL28UxEyEmFuQ9RiTospx25WpFmFAHm4hFwdCzXNNzn2NzLmFdzx63",
  "key17": "5JsNhk2k1c5af5t93D6uMTx6PPwYXD9DUJZsZRRHQihbn4fUnrHZ7ncoVGSvN23cfaZVABMsPBJKPSZPzXZ5E8P6",
  "key18": "4TLoYR5r6cH8qxu6meeby3DHtET5SkjX3BBShPU3sUojzsbAskjnyX8JT3eCSZnCzB8kXFhzk94wrYjPZP2A1NjV",
  "key19": "35pnVrJnUhvRqeHC2SUDuHheieJVvTE6PrFPYiJc2ACnoYzVfNKFd9gkXgd8NAPzp4gNkZNc3TTtVSd4kB2fbcSQ",
  "key20": "4439jY6aEeuVptFQJumv148mWkDWoQckcuCUxQELsBVM85yo14buFL3qcMfiWN3Rrgfyp9F8Bn5Vi3bum9DLeuLA",
  "key21": "4jVKZVJ8gqbZoHYSHxTkWcjWpRUo2m9ZVL124s5dUvRttTQFYd9JLzrYSvfEiaH9ChjJkW4pajkhmknRTdnQxdHa",
  "key22": "4Td51jivA871B7ohbAfYt2JBT942yNoA1kpee96bC7UuuWjEhQZuY5jPJh4Ye6P32iYQuqkNbxDzHorrtQqq61Up",
  "key23": "5869cky6dKw3VejdcTeQhLSgZU8W8xYhCv4hc39iyWQUF69NYX6A5wWLTXh3BHwf9F515FGkDC4r3F9VwZnHo4Mo",
  "key24": "K5fcXyuqJHpRyKqqwtFTH7PTDwr1LBv96jGFL9gub23AQ9xXdu4JYwUi6sztX9226qf4VUTbXzPZDZ8BaS6DerH",
  "key25": "Rdb26WX32UCeGmiCAJQGgutP3v16z2TQ5Xs2iz3Sgz4TB163qVe8juMEw9dvVah5oZorPhwoiTCC9J3uRpQdqAY",
  "key26": "3yFdjj5BoAhN7gsw27QkZZQ4msFjrxPVfcm3ANy5erP3jTgsQWqdPVAPQg1hJoQYa6U9WFaKk1REsdjxnqe4eq3H",
  "key27": "4ckHAz7LCKHAE1wX5dB6LFXNx7xcosxnAVdpNA3xx9suUL61AqNwQNwAkvAGJzW2tCoNJsuSXw7UMQyb6GgWZ4wX",
  "key28": "4YDQREaDWXSTshpvbSsgGtZ1ASrkY5jQVphbueBMrtq5SB1KQn9ye1mS464PgG8bQ4BkSQTSAjT3W3kyf1jXardN",
  "key29": "3ZBKpRSQqs9ZrnnNmkKHs7b7YGVvctG6Dv8kg7qM4PZs8meWeQ7KT4TAH4wjXPukSNb6JCUCZuhb63GK5HPirEf2",
  "key30": "3Jt9aq8gRvqmmhJUBVvmC7fM4t24sQaUjEfwDKkQoviMUqAbrXR8ULtKTmMH4VitnccYZhNVH69eegMQuDFtb9ka",
  "key31": "agrFicTPf5kbAjWDAwekSuTtWgbgKDmS5zjAFnz5fX8K4oEFJJratsV2en4996GdwBk4sXrpms47DRVrjsrNMMB",
  "key32": "5zDEi9jrbKhje3mgk87YpsZ7nwArZtJsvFAinugE2tvajUGGpP9c5DAy7TCc4Z9Vws6SHVgrsKziuH6cVZJTDBu2",
  "key33": "5o3TUbXY67p8NMkRMXB1Wya9o8bMRCyuU3nxHfeb3S4RrDxzGwjaVp5gBnMpVTxw12BedF2fVXfyHuat6dmWNxaL",
  "key34": "5FYzKpCVud1tyyL8123NyvdQqJnmf9YMNqUtFpvQmXKi2QEwmEPgekhLGtRi9ZhAxP6Mgs9vD7Wm197fFdhNwQFY",
  "key35": "F8obwh8xXxUdmb8kLPcitNUvAwhEiZdvzxg6whefPyyCPnoXiEsWX31N2uYSxjJd2dvY97wvhdyRCpQbUWfYezg",
  "key36": "3XhJp9wUDW7363u7C6KxinrTrvCQEZLzjcvQWb6qtoHnoc8mdAQGjAyGEJhkxzc4LzbYXndXNMuHvSFrZuGQ4xhq",
  "key37": "65ALKwZ7BhnuxVSWXS3RYGXUzRcSE1Dk8s3AtXPBRD9WaEoAbigddx81ZxokH6BwoXMjx2wjWHhpQwGGsJG7cewv",
  "key38": "3WLCevcJ7Qz3y1gEQKix3F2hnCJuktEd7sKnprXHgQS8W1EzLPjDYNVSQMeubqTrEHBHwwYqRondCz1eprNF5SmQ",
  "key39": "JViRq6XrnAuMcAVyirzfVN9jbbvycow2f5P8V8ouaZEBsBcBrQAjcVPLKM6kmYf6JtLKFmhhnSxqTU8gHXkbFBr",
  "key40": "37yBPctHAB54nVP9THrFQ3kABvAEPKGChwHZ6g9cjCMBpUMinNZe3is8vpu47injzpPEp74WtxHWcg782nbauAHD",
  "key41": "4ksq28huSt6uT8FZfkdZnpLSABRXWhAHBiCgk9MU4b76gEwtxDhGpzz5wAuTtYzdAJ3k6DW2mrauk4tBemUvbrzq",
  "key42": "hb9xPAD85QHy12gtKCJqZHKEUuCJZKraBqbax9WmhgoTrccGFyPq5PHsE6JEKBZmxiZubRt6xTgfFYn8XrTZ8ZU",
  "key43": "ppCQrQZqrKsXScv1qFpCZTMxLXzJBfiDNzAM4JdZTwELREa6oXW7Uiuwckq6j4s69tMzhpXVsNvTCfDrtt7Zb5F",
  "key44": "zFtbrXE78M2rQkANKNMC6xTbNioAcwmR11w7XszspefLp9GNqFU7ZckBu9Pcc7YCws4nvBxDmzxPf7bEY5KFCbG"
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
