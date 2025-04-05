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
    "9XA4DWQeNrkHKdSXZyPmb9pjCMmHBg9e5eMVn3pvtkqSZ4bEfP56Gf5wcoydfwB8aHt8dWdQ3nJxoJcQs2koZ4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Th2zcDEJs1qgwKXXFrP9PvecUM8EGWNb3PEhPdoN6smXi6T8pJoVQfbUDrzpCuZf6tt8gyhCTRZ4cDXAPTRdKKr",
  "key1": "3Dgi3Y5qdgFTjT4hFQhkyaWznceStDE8WmEpoAYiqxT3tGL2RogqosFwDNXHwmgjHvSbq8JGKHbHSbWqzRJqBA7u",
  "key2": "2BMkv4XwaErV8PMTR3Lu7gdMQYykB6DjfUX5QsLruyNsjZdgCLQJXvxtHVZaxMW4mNJ88JtfRXgrPbfrZMebnNyv",
  "key3": "3d6SjStRJPtWh9Xi5BCRZnR9DucJRdLvFz5dN4kCUfRcHGfw66b5mUbHtnFA75uidTJLceTMf2CpaAqrKkSWHAvb",
  "key4": "2Mjw7kJebCqjgKwKUoCWKjKkukTmYZ1zbxuH7BsrYAYmzpb9q9D8WmugmG2Xvqtwzzyb66ziaC92wivbL61SNtVq",
  "key5": "3a4NdPnswEFxCSw8ZQzdnzpDM8UDMDzx2ogJ1Vx581NX8UxGcphzapysCmcXd65DLEurPzvNZpnVEm2KFGVgAxdt",
  "key6": "4yzYisauEusEoFceng9hBrChRF61gYxeBXivV9GQN1dCEWTTGmYrNxDYKQwiBwa9o4kprCLW72erb1UkAKwtUeia",
  "key7": "3EBAdfn3n9KXDU8L2gfYany1nbagWsc2TDuBtKdH1QaGshX8xEyeEZByigtrBVNbTxYNX5a78z3qWMLfLHzLotir",
  "key8": "2Kw1rjmfSg2GQWNi7vzXutejgYBsfxv9qBxvNhfdLzhwS8pxbaFMfWuWFeqyVtpJHzS21aFxnCS63ZEpvhhFEyUN",
  "key9": "gewMFWmZucsGvseynPgbcywtghqVHzwjE4hZMLJD8ud7wNzYNiXvKnvaM6qTBqwCYDuBCAKwgRsv5fExPpc56QT",
  "key10": "SB9zoJhxEXiRUnpkXLAex96YqqXXUH9zqjnrcDUkjjBgbakYZzkDQggYtLDeKLmbgr6n1RwwUXA3jh6t9BEjmr7",
  "key11": "2548MCi3AA82Qx4FnQ43uMPxoQATemJpke9wqjE4goFcLo1JkHdhbTyTaBNgqQzhDaxdTSp9K8BPu8BPKDUHXErK",
  "key12": "2podi11Xn96uWm87uS4hgCUdnUAhsiCj95rnH2KChBLSZzqxoMTvPGDP2UnhVXDX52DWaK2TknmuggM6JVfF1BaR",
  "key13": "wQGTCDSLBX8xSAXQcdaAgTQ3kMtByMDz9LwbNhF9gcKA1FH6nWwEzvaiiKrYNTnv9rw3mxwrkR45fvTcAco5AQh",
  "key14": "38GBKuJGGLbrzHvv1rjLZdrEQ8VkTht1yTR3tQ69fjaaCrzJdLR8rMUUp6RYpCtWWzAQhpaPW3zbUatWsA5JCCtT",
  "key15": "2xEJ3rfVnQThnQzQBuJQerXobuWPhQQw82yB5ZizMK67XFcf6UgXUMQ79YeszNuRFY4y9oAkqCYM4dMziCh9bKku",
  "key16": "21DF2VkZ1Zr6Y2AWsMFD7vKfXMajd3dpTgVn4fx53vYxDTAE5GWTwHj97ux5o4pRYVhVZCbDTa7Ke2bW6NEbvL2T",
  "key17": "ZtAsaeS6TgHmmAMSs59VQ2DcCYEN36XzRzmci9cWQxqYJrsMrn36Syj3jrbhmbzzeNFd8kaPpdjogZAxdbi4FGA",
  "key18": "4iTy5y9Y7Qt7YHKSRtUaiRuYCDLGkMXWFhdpBSN6DtawSfAoizRS9Ckzc5tauBcomTzLiXzy7M1RtXNwrc5XJJpx",
  "key19": "3rj8ce1veDrbLfp6XhBtbwdb23n1pTms1BuZSv7xyHNjaviC8acbnToLpFCYnzSmsXyjhvS2zrweDBmZS3VA1Wz4",
  "key20": "2gzsrrYrKaPJL4xnD1YoYP6SpXVwCM7b5j9Kccw81SvPoRaQYrg2VME4AtqCgCrRQ7FdZB6cnoSnvrQMvxRdL3F5",
  "key21": "5q6LWum2JC7HS5ch35asLND4mbAvDXuMkdstGQWje8aNY5qpe4bwWcuV88upbFTryFfAeF2NaCq3VyHBN5o5yxAY",
  "key22": "2LAp377SwdYpP1fXHfkiadChXNq8WDn9M7cUnpo4nuCA4frtEEE6236HU3SSQrHD1jwNGEtg4MXoTqVSGvrkA9zZ",
  "key23": "4Aiyy4fbg3ynQkqudCPKqk6CGBdRkzSZpuY1WQySJGeY1g2Jb89m975qyV7VwGKvw74dzxPYkNWPMXdxCdgdbNNJ",
  "key24": "2cCGRQt8j7ajmZom7U8TeuRevM2esWcdrAq4dAu3xJ2Bt8ABHDKpCd7q3wzjBTQZ8dahs8cgodg5FZMsvrPEKi9Y",
  "key25": "3jGWjLd1N3UziEy2uSxHpm8H2FFXNdnd7RAy1wHKhLy79fViw6nvv7Qiq4i8ZjK3j96gmxJBuj8QTrgSwDEVSydm",
  "key26": "5htmmc8jsRK5At7Ptc4KPTesrEyN6izmyDGUFFw9TUvm5sNB9hgbtZ7YKeheCpnNiaoPUUc9arqKPSYLcVtNvq6H",
  "key27": "A6oQzB8UVKRXuJwxKdQBQXUD1F9cPEsng6bcczQESYyTjrRpCC1nzzBNuFjwMXwXpXmfD4PkkDap5Y2QJEJaiaC",
  "key28": "4WwXuQp3rPCwyYQSgcZg1SeKW2d4YozzgxTpb8gXXkLS74ULrjbvzaJik2nzVfnBWYLN9D82dcAt7RfwVoSVDtX6",
  "key29": "418ZbYekEemL7Zttq32UQPjLuHVaG18iMwc26WSsnqDce17t3gfaR124doWwsFWnt131vmPHVXCWaHd7tiWpP1SV",
  "key30": "64mt5YSxeNRa75FfpV1n8jJRgz8hHEcxt9VYHE61PRRqWcRny7CK4y8FXJ9YBVRY44dCQup2nmc4AMnZq4vi9fVB",
  "key31": "5PndcsdAvUBTJ4xCPwRuzYGwoDMNoU3VLzuWmBpn9QFUzVJHWM5FgetWREauCM3qzTFNPMSfCXoLwH8N7wQKKgrP",
  "key32": "51x9tPEZQBNbur5woAQXBNXB43nX1QcS3a3a9pyttaefG7baNFiYNmGixL9PMw9umEhCPidWDUEu1H2iLh6fBi1w",
  "key33": "3ZWUDEhSGYU5Day17iRijWBpja96fXmALGfQtK1Zc9YLwMsnGfy2vmpMUPuuhLvyia8MNV5Ufih5kRMqgwEUahkn",
  "key34": "5S7u5keTo9Wk2DfWkd39GFkt8Aao2avRX2UjShVt745r2zhMsSrZ1uTAVEjodBVbABgJySFAWM137S6DAqnzJuHu",
  "key35": "5YjHSy5MwDULyZHA6inebTJt922YsR7fK37XZ4mcxmsqiHTQ7ZqnEZMrKYwT7bFM52XYapQmAqoPVp53TESUmxdj",
  "key36": "5EziN8eNHuDJLgijFC546FHx85x4Vx5Fx27YdNoWatyFCCyHgTdm1E3Yuua5cNroU1E9WuyeTBZDE55vwEF6nTG5",
  "key37": "4Zm1G3ki24yLqWTbG3hZ5tbn2FaUypeLPrTkvUi7cTjzgqci1UBvaeob2g4oBFcFV6AMgLCKBjmwLvokNcMtDzGg",
  "key38": "2d37F6bc6dHGEt1zxXyWRpuGfkZ5XWDLUcahcKyzXn5dj23Rp3RVeXyxgdeijW3RCVEYH8wjUQ61WexZQJUbc42k",
  "key39": "4v4h65u4maZCjEjTd3GLaehbe4RJVzeRuBzqt8wEJ3LxSSHeG6jKjAmtN9cwrhA74iDjNpq5ZyjJ8TRgPzMjHdZK",
  "key40": "5KxSBAJwAEnvXymEChxTpj2yz3ZLJNX6LtiFk2QFKXgphdFZ99rGVUnrULSgmhPVjhsiZcrZce39sD82i5B11PmE",
  "key41": "yCH7ykctVJya1rm4P9yHwXHw8w4T8ptnpy99ZZ773fZg2qQw3zLXw8eCi1ni9HyDXUCpzHY1gkvvbFqqrqaMpPK"
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
