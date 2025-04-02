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
    "3vgzdD6uYB7Axwz4sFbt9SZPz2bwTHvMvu95p8u2HMEQm8JsREbudhEwrZNqLjchisDTD1WWes8t1oGY1rAjD4LQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26PpauGN1KbiGqVqSRLdjxsgNWBbtA34vs5G9akmbEnNcA57qxAfvHk2TeArK5RgCxBjjC3WxiU3CLkrNDctHUDo",
  "key1": "2rBF3B5h1w9Sr7gytLTHwMVMPUqkcJAX35EHPsicphqjqdirxBGGaC2J2vAPK8a1e18dhkGJzCCnzoREtsxedaiN",
  "key2": "5yZA7A4x3ZAAbe9Nhs19QFMAGsfiqdfidETfDLTTENXGZHrRioompoJSJF6ULE5r4FdeUn4iWaXZd7EWovS1o7aw",
  "key3": "13j8yD2XHJ4mNd1qrh4DupWrRho7B14nL3e4Q1UGiKXm6PGk7BMmhVwuVh4GErzd2kHtKbbdXxA52KCBZUn3tb3",
  "key4": "3uWLXagHM3X2xNGHt4DhEizpco8Hox7b2MhESSnGs3onbT21VVYo6MwA1nKyiK9vTyHfuH2oWaJJ6FMqCqaFzhsT",
  "key5": "2AFzLs7i7yGwcvuR1aahJFcJCYLXQJcnCRKhM1AdR3X6jNFVaSb773xj9xT92iBDehGTrxVMAqhctfrzX2pfjDTR",
  "key6": "HwTcfEnev53mk3XRx3fvTdY35xExMoYeboRGvEpvptSFdib5uFxQa3ZSK6qw7LvX1hJoacGdhpxMp31A1GkCWCj",
  "key7": "4gDjdpDx3nowPfTEVTinana6serMTV361mNxZkZMDMirF3uXSE3LzZwbKnwoL3GZJGJ3qDw41wepe5rXgbU9A2UP",
  "key8": "24G8zkHTwmZYMbTCRRiZLQEMEqe8xuisjrn8DTppw5Karxt9TfQt8SUZU1UXS3Efos3aCfLvLN2dCtYATfQgrmS3",
  "key9": "62Uw8RyiA95b5QCjz5ssacTf92HXNfyo544Scfer9T7MhmKLpxB8JfP3rtDxhdNEin9K6co8uYHGoThJ6aBVhNjD",
  "key10": "2HJBbf9dAv9hrpCnZiq9TwgBveAcZz5wdo2dXho6EVNrR8m6XwJYzN2bzmP6F5LSp6e8ja9x2BPWaFjQXGe1PUrh",
  "key11": "5Mu9p7qpBF51RzG6GACmYjrxN3Be64gbp6ktyyDAm3xsheVwVWaNHTp2Xu2V5EPG9eNMqdbmy9gUpudcx7TbvTNR",
  "key12": "449Mz253DkMPfrG6mL2bchAh2j2ue1FRP8BmQGmXDtvPrh7X9m49mJNDvNW5WXQSKGYy54nUs4ntYNPtkhMnumKE",
  "key13": "2UwFU69xsuAEwrMmxdUmpwgsKYTwmAcstGmZDpA5EYuAQZwSmroCChHJ1goBceRNpNQsqz9quVkTfcc66E4hd6WF",
  "key14": "4XpV51K8iZEnunb6fHAdmDxSsSFwPX8bEWA9BRvsXd5Q69mb3WFt27aWuxJUAMcZ4d5pcNP19XPCGzMy9Hkz1bBT",
  "key15": "3kQv8iyWTdfYC9ZdLVr7xqFpdP62uJB89KeTboUyCFLz5d9LXwz9HNzSLzGZWM3iWx8yLdg7rkMoWFYuDLq5pQNA",
  "key16": "2hyzyGqZGLiRm8KNF6C4198Y4CP634TR7kjYcnvcXhkAu1ApfSMVqm8gE36YgRxJvCiyHaEryPNTuWtEYozYNfsR",
  "key17": "59eSVyXRdMaqeGRkhi3QP5DKNcgfLJSrRDvHCRFF9MnRK8N1cNEsB15bSKrLDZXtjr9vmFR7Z4HWGZBtQw8MW3yQ",
  "key18": "3bFkfyGhjoDxZ7iEfMw9DrqFsJqoUwLtknppC7ctzkGMExbKBGboiWq3YN4YMkAF8Jh5vRNeSqrta92xgV4pkJHP",
  "key19": "52irgQ4J9Nhnq4FwCRfZTY1ZDCHa1FuyCCBFrUFU1zfUroqzHYMdMv6mtNFxXwCUn3spEz1hJ5Vb5wUxoed36pgn",
  "key20": "53SyXp9t4BxJiohXzJaozxEGLhKHwqVsoD8YoMzdEjz8VaF9pTZXVmcLU15UiXhbhusX5MG5Uiw3Jm6T1piS1hbb",
  "key21": "VsoYPT4rEpmw1igJEFKcEMaYKNAjkQ2WeL2EYrhqAKQo3DHut4P9yAr2ybmLqfguMtcxCrHdGc2UNF3YqW1CPV7",
  "key22": "4921mQEufvDGH1DYn775ixzs1CYEai1wA8nph4LQsXSNCijvg2dqJuhxYtiaNiqnMe5g6PKpE8sTrGn646q8vkRd",
  "key23": "sqpkjjws2Bn5H1uoHKFd2jGpJgCq3eKh7ab6TXw4rRQnCThFtTBbEN1tw7GXde4aSFTuNnK7NAYSAEaZzLgXnJ1",
  "key24": "2iQo4A9TZNZEu4pAxMCZCs1FE1t7ihRKtP5pnHy4iu5VGwC9eanK5H9kdJKfHZVQRAxvPnDkYRvTWMQKG5jA5Xxz",
  "key25": "yiZ5WoBbo7LvbnZUE1cJrnCtEAC2DfmJUrKYhWBgiU9kytVSiehueH1KfEttALFQL49HN93T8xJHbBWz7cRxF9p",
  "key26": "5HeT6aSVpQm7XaHx5eD6f3FcfYpG6MGvH8s7HcfS6TJK2Fh6nRHmA4Hy9XqbepSqbxDr2j596ETgNWqWk7qer6rk",
  "key27": "4erga6rHSi97PMVCFfBKqZr8JvUziCCM4Bw7wSHW6kLryN3Phs2cQq6b1GAa6FQRQfYETsjQQek9GRQBsVG6sYXP",
  "key28": "5sWghu2e8uD174ZbL5FLbT3ef6RyivQREmfTcfsReBPJSWpJJ9kifdrkjawJVNQ48JWPydwqDL983aYhMGW4KZ2W",
  "key29": "5acKaKfBRiGX172drSmqfdPKKbzhNd5LXCCkce3u95HupA2Gaf4HJf28efCDSnSBvNh92LiSV3L1CYQZ2iiodDAv",
  "key30": "37Ts1ozkJehxTb9wJX4KBdcyCZXN89wLiSCcqrXpUurvSX17QwkQfcfdUuKc63esFZeLDP1XM55y5xMQ3TUMSTa5",
  "key31": "4gEgLAw51o6BLAJVP4QfNZkQHGoUu5YY1WVcRA1JTdqk9JFersCpD3Gtc5pe69T581XBVRfQQZJ3K8XunZ1PTVdb",
  "key32": "mHw5LhDB5THoHnaHG7KWbH49Skd486G9SYJHrodmadMEsdsjE5FEPezeL4t5hzrwvjJ4qFubKH3nEop8hvLyw9Z",
  "key33": "VCnjawagC4bHLDJgjfwWmQbEatMmgDywXRJjGUq1yjMCQagxfBaH41djFWugK1bRN9Ak5HCccNf4g7J3b1djMD4",
  "key34": "4b9gTxsSD3zoi4FPDzeMKKek8z7PfrkZVF81UtJCs8b1E3TnpLUiTtkp7VTq2dQCKZfpoFPzojm6eaqQJ1S92DoS",
  "key35": "8Nm14ZAPxSCcu1b1xTUvW7rDxjFBh8w4Wj4QLecEVy1pn4fXtR3CC2z2iGyp47aJqGB3PC2TikhNeWcu3KSr1Zx",
  "key36": "5Ei79ih3P86hVN2vZrZ6DV2JWujjtcMg2J8TQhz67bV9E9gNT69QweeTnFNUSK3oKuRk1DKSdDJKJcyLGGrBPCTQ",
  "key37": "jN51kU9vcofTJLHSx8FT5SA6eegeUDntEZijETuXQi5pHQAGJgUjw86XBesCGRtTHimrBZGA5GYWurZat86xNkV",
  "key38": "27ikRLDhQNvav1ay23nzWbeycXc2yBD6xdqhidyRnoBz4GTV7vsS3jfaFF3aFXk5rKzRjytz8xEArBcrSimNY34U",
  "key39": "3S8hhceR9XNSQyUXMEFW52snm4fGSmCN8fgbpREqRQqBaCuLhqZnzGx4esrdvww4NdAMJgqMkwUcTqKrnhv39nK"
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
