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
    "4Yy8HG7wB1V8kNywGZb5wUTqsSPzq2fopyVxnbWkUKUZFnsMMLDMk24ivoxCoSAcsT4rbs9Pjj3TyXgdGDMEtQnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s2NahtYGabtR7A79MD3fv5Ysj1dyLLVK2RguyGdjhkKJP7U3MsAbnWzGxLUyVktw5CtBvtfJVHyv6VLov4GR7iG",
  "key1": "5vLYDMtQeURvs2SdhQ6dwbuyqWa3NFANeS3qLoYjM54fSKYZFEB2gozcGoKkNEb2jMyTqRPPBUZjbBcQTVTcpqbw",
  "key2": "4STZCpWNFivYxEPcxX2HQL19RWpYbZ77ryyLmhm4Gb82XFS8vEiNXXkhXm32NzBrvCpR2GVpKpAwBxn1XA6sWQ1b",
  "key3": "4asUn6hdLSi8UCeT18Q6zmvMgGn3UNXEBrtGbSVnjShkCHr5iVGfhmoBgoX5VrjEb73xT1h7zcjMFbLMt39PvBvR",
  "key4": "NGsHEKhUyyR197x9MbMQpsXaPm9w9vV2Wnygkf8N14HaYbkXbGLwbsTWvstadZkQtR98LEYo8JN3qepwgvnMUU2",
  "key5": "4NQqnpPx5TM4Gp8fe2z18QsxvuozRN2KUcRb1ikLVEUov4QCCMwCkExmALuWnsWB4UgbWG1FFvacdRXMDxbbc5Xh",
  "key6": "4WZQnMbm2LHrhERCF6GNdko6GnkXVTJFgnYrKWdjmLmzkJUwJ8tjescGWkdF4pEUSr7gPFdZ26748K7DQxfnodUx",
  "key7": "2KaVWpxSe2G7PtKzy1MEeFqQR2FcVWqtA6j4sg7pWiu7mYDq5iAxDQMAXtyvsQ3uBrsQtK8abP4C7zWzraQtpyUV",
  "key8": "Nohe5NWSLk2dnucBqgKntNtHn8zCRjKbz6VePKU9cZkw7EB8xNZ1a3Lz7MPJPtxLPsx6ssVCCChHXxUjRs7xkBq",
  "key9": "JmFuH1kJtxrRJ3UNb2p2qyKe9U4eTuc9SsPU8NWbbog1qQ2q5wvFEqfLtjZynPXg3chqQC69AX2QX5fGXwnUw3v",
  "key10": "YHnPQvdjzoZepu5a9zeTPME3CTDanzYq3wXaFjTdcHuUdfjE9DKWBz6rFLKJpdjmM2W8Zyvc7JksnrxcwUcjjnD",
  "key11": "3nRYANcmv2WLyxQ2S2onGzvmXEjboi9zZV3EGebSG1tYHqSktyoKUkUsnT1xQZGBGHCvmJeMrTqaWMXz2qwamuU4",
  "key12": "1meWtVK4tUXuZxSUN7abU7bdry7mekkEHRtBiLPyDVAMGdCBa7Z7XgbFWn93z2JUYet54KtB4AoF1bdYDJ86KYG",
  "key13": "34iRemTMQ6pTNfdLdUdzcBR732EdUhtsXE99qTMF2MFyx8cDi7JreJxVd3GVbhoLHVYecrS1Wjq7bD11awxYbCoc",
  "key14": "5zb8AKknhYUsJ1emr66gt5rfDTsPdW9AAf8K4HCn1h7y6GgzEjJ26RjV2x6okPJugT5unooM49vnt2SZWRFYnRnF",
  "key15": "5QZtCm35fezUuC6KjYwoyKGpqgs1V2rScYCsjaecG39fh3jscXWWtty7qcscjpMhuFzGeJkfDhkSkMEQgwN1Vx3t",
  "key16": "cbMyTjUfnrNxjsHZU93GeAun9hetsiuufwsFEDrw4rRzbpmXVBxWGrXExhxvkHn2rMQ6GHBTzP86yskWpCPrUiw",
  "key17": "5yS56LYPQzagQEfP2QP2U518C1E1YADigPPDZhUDMXsUHsz5C6DveiMoJ6YXSFh2gEyMkwHQ4yBoSGbpAP3g6wGv",
  "key18": "2cHv2Frxnf5YKWMFF2p5pnKBgLUvx4bPkbbKquxLsMcwpBMG6GUbyk2J1p2hqqZWdjANH7r3zjnh3Jpsvn7mQtmn",
  "key19": "38oiX2iAM5iErjhRpK9dWfJmmu4zG8UqaGuFDCizBpU9p3S5XXygmbwAN4GngyZqp57PweAXcKLobDZicrdP6Zrc",
  "key20": "66YPZYV26WWt8oU6wrajbjnysr9wuREmJWoxSnNthViSGoRWfy9p5FDYPmbnaZVVdzS9fWjXnDM9DoDUhSUQp5fw",
  "key21": "YDgztcHd3z63ESSRTaqT4rAye1nQSgr7ANJdT5hNvx6fbzoKC3Mz8C5X8j3nYcK7H59zPDonj3vcPygTduyz6KK",
  "key22": "2UuB8uLkhuwu6NGqFrv6kXXNHEDfedPLAKFm5MkjNdtMY7kPhTGq6Fih8Uzqu6rmrKcDiub1WAYbZzKP6EQPSyPZ",
  "key23": "4Kgg4NwTUheuWUNnXphPFHbbvEsdBm8fSkLLzxediFEo8R7KiXkZvW5gtQxD6owosU6ytMXyjZjqCUCLsn5LNQ8r",
  "key24": "4CbkH9WatZQsqJ23WbVMmmKmhmnpfi7B1DQdqezTsEibvgj69Z26AhG9EbSP6LJPi6Kk7fY4vESWgbNG1bnRkC1r",
  "key25": "3HEucWrjo14nWFgnnuZ1WJPrdpbfseuQLZU2yE12JuaDyz22U8tToNW1qqVF52NhjgQC18sqFbWDy12yCSjjcfTZ",
  "key26": "4WaXXKDg3749KGJXM8GBaZh4WVzpooG2r9qBUhJR3RemNEfw9WRH6S7i5o8HJVJwTYMVm5gLxPdFUboLfwfrdxtE",
  "key27": "5eKUa2r29Fv4Jyf9z2ccbNL3rFnjrdCMy6ZozyDNrjBD7f3PeN1hM8q9dKbXnvHx7v7RdE5Agmm1YmL8HK7tBRzJ",
  "key28": "4AHmiktaPEpNhLPM9KRAqH8r7KAd5eU6wKh5q8LxDZzm7KDVhzLtQk4Ttw7vvMuyaF5HbnmJG4k2asJwwyiEWs2M",
  "key29": "3L6nCzTciwXcamur69ehAtwWwTEMzg9P4J5kQsQjj5E46x4CW2WZiSFNKVJoCcyJF3EUS5yHFgV15feCjkh6JEeb"
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
