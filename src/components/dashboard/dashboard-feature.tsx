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
    "5FunZgXDnjTj8nX8R1HDuzZ4wEfDayRJhhirQ8v1ETKoV38rMqEDRj25DyWZjCTBJYCWg3YYJ9ftp5fcdqQrLWHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t79AuhGtrvNLnHNntPEaXTbxsneqkRuWr2thr5c7g53VWVQLFMa86w68ASfVsAEMGhNKoPaBYsjQUwgT2TVjX3F",
  "key1": "ni4USJi7p75QCFP2E4VT5fRPD3mnsz7jWsbEygeXKCJVmRWzJ2aTYTBcrpccC5m1nWdfKxaXbC3YRijpedQJkCp",
  "key2": "58o4Eyd61WLHJCohjthcFTvPNcig9KTNt8qUz7VLZhDun83CxpXQYMr778mri9n5tCEDJBZK9nwUKEJHL7m6ERw5",
  "key3": "24tbaN7aAsyZfYUjP4zbj3WfsNwUMgY6qvtbmzHWu3ZEAz8CEAprA2XaeUw8P2wz86wL7Ju3URAH91pjpiEY9U73",
  "key4": "4LcsZBux791m5PDm6ajHdDmyi8z5ABC6LzG72JhQr9vpBGA5rQfYKMUozNEyDatkZcGynzGh6csBQVUyR2wCSxGu",
  "key5": "5ePiEt9M2DDHkALhuCtfwb3dPUVikFu5DeRgj6YTSGZQ4oQv94BPjRi3sSnagE72rQJyA8k9Hi6saZFECP3781xK",
  "key6": "5TJp44GVV2VoXDd2jpQzEVb4oeBmtZT7J7jVB6GKoh35hLi5VQKhMAz3y11MLfEuKmqDHZyhsRkv1fA51K5f4QZb",
  "key7": "5QkL9kCyuPjH1sXHHM2z95ZrBjgXXqdhRB4SpHqTbRjCd3YLufvewDWGGpjVbhpiwHptMSEXFTMXSSPszeuQnj8J",
  "key8": "Bnw6SDyQSriRYFrWMpwr85L7H26ZxFKko4Cv69QXj4QD9cfg9ykQR1FXrqnEt3rKV8vcCCegApQyKuDC8djP8bU",
  "key9": "45iBd8F6HhsGHFSwiZgtTL9NE6ScJjCP72Hn4wPUf9YSubch66JYtyhMzfdpv695tGQ3c1mpmQTxN7kNB3NVcVXo",
  "key10": "5yKLFzbRvNvtdMm2xNrnp7nU4dvtWBde6ouJh9DVL6TkN4ZdZeaiDwodTt2F1JgczQ4iSYQJY62JLX6z93LDY6iG",
  "key11": "2Lm7rqsHAgWtYPrHuh3CyWAxEbaHCTmRgDrGigCxzrBCeR2r61rbrpDeJqpzwyRCemnY4JXo583uVgxwEaopFDwy",
  "key12": "2LPkEeVVvkJfdkQMjSjARsboRDVTzrzdjaY2B25EDwLzjf9qoJBB86jgAwkF7Mxmxp6Jc9dNqURMaZc42ahdMiRp",
  "key13": "2GAkLDEUePPmEBW8iTUHuMWkupnTCzXaMei5vGkm81HLoBcUCgmwYcMsakmKzhxmKomhJ9xZQEiv9DXp3CnxyY2e",
  "key14": "5nYo4VfbE7fhcp5YVsKcd2RP7F9YS4derKF48WGzSfimHvNN4kcEvVym1T22beiCoAn73Wzd3s6vc9DEouYQK1z5",
  "key15": "2bP1uggerfugu3P3X7nG9tq1unJh63Tg17XZk7q5mpdDRxarov62saFWAbdJjRi2PMXbSnipqgVbVbdRqMbB3ShV",
  "key16": "4a4dPE7t8Baj9ShZeE4EzYHMW2Lz1PHtwTU79iNwDFzVYNJDTG5vQm7PvHvffXYa9GmUbCQJvu2AwdEnbVixGghE",
  "key17": "54boBkESWF8DYAc787NLwZmaec4gpT5PTST8umgSe6KTiRWQynXNu2SQDwJNwFYKnJNbAmvrL8NpGfDrdvwicXdH",
  "key18": "ziRL8MgsvRHP2tWpQTcRbakxtf8oW43v64fTPyL5c3rMHaExmaxGtQk6RBRtFZEGaypdCsSksAAuqP5FfVgyhZt",
  "key19": "gq7AdiwPY5t95mebt1KRj1heMEJmdWDh2GfJvEVurhVT53urVvfbBfnqtzZau61z1zRdo9PHxHfA9Eag1KkwHoW",
  "key20": "MnuLSLZnp22jjwvSMpojKMhsfqmfRGFkDZFe3UKxTKN1Qvch8QqS3LgfE5pwvEs3Q5wkLGxg9QhLnsm4BY1rua9",
  "key21": "3gaMwgMT56CLmx9vwF9itSWHaBaopt42ouZLaxMBshUtpdq1jDZhvT1rTgJFmRLDtXgtbrUHfyAXMjxXphyXcZyx",
  "key22": "3WXs5Xiidovfa88LcaHyedmCqVbku93sWZWN7NMdRTSKMvj88dYqBo9scVJ1xjpvYEBGdVZphszBSSZm9fyd5FSc",
  "key23": "5UZrXSmDLvQWrGMjK29N5BY9sh5oMYMeDt5b9tavdAbQoZTeUV5VSqGbWfwGfogsWhi3HN7dcHw2kRxsB4Timgp4",
  "key24": "4fGoNKdnsWSR2Fs3dE3KAUPDqLWvoWbLXz5U15pkh4j1K76MaJwPA7Lt7zwj4KcXfS25kQ7S5LKBd2cs8ndDnVgb",
  "key25": "2fMXtMqhzyJn8eSKft61EaFG57W5vjW1WTXEFeAzydcgdGaM6E9JoAWPuKsiRh22abDqRdS2yLaYAzjs2Qq1AiFv",
  "key26": "2iTRHXsmKZv7ZHT6DPmciuMBju2DHBxeZypCfxcaKERDjpw2r8Pnxd8s5ovDaqrubNq4zYeTDkBmsd5icCXyHzq7",
  "key27": "4UfHsBqseVb1UyUxiMKe5VUug1FLWqUAMnjednZkn4xgE1JGoMEnbA8C3MCqcjYuV9krVCSehKxSbvfdAmBqMoXA",
  "key28": "sYTqAmi3LL1SnUsTbxYsh7G85zeM8QXMivF3aHERQDL43VDs1xMhAvRKhPjje2qTjPyu5vXYCbRLrtnH8fWT4JL",
  "key29": "5QrAdNrnAB5F4LR59U6Pzz6oJbk8vdicJPVVMW7oYxVgfaYYUPYtdhxSQewcFfhsZaxiGFUngyKmxv5Y4vR2aefJ",
  "key30": "3TFNKGgWoJ1s8Ej7PLgTxoJw3m6bqS94JDdLweNmBUQcRu2NSMAqjoDWCkcFwbAKGqr15HnGBgud46g6C5kpr7rV",
  "key31": "5m2R8HToiwsJUH1cxBfN6wbedXQA5jBcVu6VVRqSGNENPziwWXmbLyhsHaRX8pmaBzNnjRBJkgpnhKH6qpq3kDEP",
  "key32": "2ni6Yn2u4DKoS6tBmRoXhUAjC6q2RwSpjDWrMS21uwKmCKT1TCzFyvThWNHLdioMjquk3E3rZei19n4x69eSBiuf",
  "key33": "5FyidJM7dmQePURH5Tdg6oVvuAexSnebSgibaEnzPwAydUawo1iKTXt1WfTZ8EretdmR7K4LxMmSYyCRHFQtfrYC",
  "key34": "3xuzbTNKUyzVCeYzCTyYEWkLN5khanjefeNvuCmA4F8pg7Z9GaoXLxjLSYnsKUwBP5oqTCRGiNyZMoQcy389VZKp"
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
