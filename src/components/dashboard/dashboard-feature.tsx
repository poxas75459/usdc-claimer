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
    "5dVNCvpmZeVPpsWZTseRxqD2iVB5hAA7pWkCXwZL3p2ALATDBUXoRbT6KNdbDvJrVbAczhgXHtWBLkkhsiELWNVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vWkH8FTe6ajAe8JuiNNfvp7EWSgttxLqq3AgTnXxX5XpWjsAnz4cZ72h1PoHYCVzN9VoY9ML2mWHTY1WR5Ffqap",
  "key1": "4XAK7EZhuaMUrBagi1yK7QGYxkVTgqKBaUMKrG5NM6rSDizTGFnrr18HstzboPg4R8TpivwZypFKfYqQduf99mY9",
  "key2": "4CiPp3wmTwPNXhND3ou7UxBg28irQqrVywDLQkYSryAaP6aXTe3DV34YjKAUTosnQXm29mGctYR5DHHPqFPWoSCa",
  "key3": "QqWN4t7yDvwSrpinuSnchAcUSyhf6k7NSgJuFfWpyaDE3USU3Lu6c15bKrM7Mk6L5QQBmHkZkhRyiiHZrYJBMqF",
  "key4": "2gDtMYyeSkVbJd2rF1fJttHeiptrH4HrzxkoDPQoqfhkkhQSpxrPFiyQ19exXwNRuTRn7KZbthj74ikc2EvVy37e",
  "key5": "41dRxFz3LhVkPZutNYugj9qwdRTbZ6tXKiv6nmWwocLfjbtEXdtAgnPAcwAi9D6ko8AzaxLRMWKoWFv9LSnAbHF",
  "key6": "3dKBNJQV64w13mq9aAB4rNuBRRu9CYaBocGsm7dtsyqx3uTJprkxByPHpYyzqZn2mAaiCyT5GzAxCtzyYmfgauEu",
  "key7": "5FvD4sKCgV3TtNTkDxYrtUKwnZoChnakmKd2vqSZFJ2tyh29TENSsnPs2Agm6UcXyKoSwyAaLJvMmpVXt24EeWrm",
  "key8": "25Ni5RhuAqgTk6fSEYxnR93pPFuqc7C7Wh1hL47GqUgNjzRwy6x9EDq166ThcofkNnNUQab8GNvKqUzzGRCcTFhC",
  "key9": "2oUqEMZAuCzYdtX5X6Qj5NfJmUCCEUJAZVEBfUXi928pkoMYqnAY9V231hiJ9AtQtMHPyB2NsPApaE3MR5yN7vHE",
  "key10": "fj7uKtYPTyEeN39SdxsmYnCGoAYHgT8w2nb9hNHu2jnybVVCqstW1MwXtFhjUyudPcgvnf5gQqHAGCdn1J1bx8d",
  "key11": "3ZYVEgKomRP7BjVKs2c3SdDaijvSmGEHLkQaTZ2mHbo5ZN8jNYSeiVtS9U1k217XGijJQRLyLNGUHHKY8pHHm8et",
  "key12": "2eFgryqi5axanKFSQbucrWtcZJanRgzFLbv1N8PRedJC7pYgnuKpxVqQS2yo3GveUVexdFs5YRkKR1XifiAjwviT",
  "key13": "4GxpYmX2QGzuZLuZPb71HPqeni73MWbeFcZQV1PTzdMHyKTcpwMfi7dPJceLTNmC9nkU6hRU2SPK6YrZaR4upgbb",
  "key14": "4JKa7oJCK5pw84gBSH6Uo9LpHcijYdUsPuGseeCv9YnXoJxZSG5sAThL3gQ5uPWPPav8qCsgK5UJeRCn34N8pXME",
  "key15": "3Q35PkqPsevJoHvqb137ykGrUAPAspsPQMfHts1AR25CVrjhmVsNBxoQA9xhwvxgsy9vKKqHiY3m9Z5m7vyHWyA4",
  "key16": "2jTdHgRn8P3GwqUSRinnJTU8nbGm6YdkrTu85aGSouX6Z6JX59y4eFLNZrxdU93f7WpD4D62PmWhhyiGPhXTvJXp",
  "key17": "5gM8Y7WkwNktnMpwHT13QeTgbEEJaqxQN53q6Z9yUtDA84PMDSd8pKmVjWUtMhNT2V5y6xCRXpe3y2ZRH32dquFh",
  "key18": "2dThsNVHw1ZUTGWoL6qMBqi6khkDrcksHxSo9F4G1yqkf4CMTE1jbMg1ucKMHRjXh9dA67MqEQ4w6SEANiC76p7y",
  "key19": "2i8iu2m2W3duNZaQqddFdw2YxvhThACFdW6cWjkunQttQdMzAHJSKfB66QxoMpQtd8ctZ3U8dxecQWzZhRzJwN9q",
  "key20": "4WUNNt47qQxYjt3HTkyLHuaVb2oEo9r5uJxohHStrLgrScF3RhDgqF7STHvZnYKmif7TeKJ5q9D16cJtHX8Wd6dE",
  "key21": "3rgwdhMkNJC5HRmbST5mrceoFVdtSirfV99xdw2kMvvvN8wufz9GCdZHnX9p6gtgtYYy8PN2jKceajn86e34zykj",
  "key22": "5GWZqrzV8vUN9QMyuPVv4dd6PgkYtdg9X6Nt2nrsGTr88XK9BDguCLrEUE895rsmJJoFZJvZGvXhK1A6bcB9SpwB",
  "key23": "4AKbJV8FhXH216AthXtb2z9kmcVVx9xtynfpw9HtBHCu2qmALpk2eEsqWtKymVRmJCkkVCkS9GdJpgBGGHjktEqk",
  "key24": "4yhxE19JRY8zPHvVcDijx5BTnhjXv9yPe6qY6k9r78AKM6Q5f8eHJb1nAWwtjjaFfs2qg1xn2KKMma16yHo4fUaD",
  "key25": "iHByeWVURB3h425nzy51vyXS8buXhA6CQRDP8MyG3GkJoN8SwJttJPTunUorPCQoPSJiRD2DnLu7KWFpF4oNq8J",
  "key26": "5mJPiZSU4Av4XXZUERodjqtcKW3eNreQQRJnVRbDCFLhyHtyojR6Aj4xJNKFkrSA7XkRiNxTCyZsnh4dpxctsW5N",
  "key27": "3Vq7E9DJhrcaPaDVR24AHG6a9m2FMevafzPP2cqKBsqPsQzGLhY7TmXRt79SVukGEDWKGLTJZLKT5J2EsxuZALDL",
  "key28": "2k4G3sAgHjsx8caT3kPCgMbmN8fS7SctWoELUvJwoewPHTB6Ep1i9be4yeVSribEqqoVzGre2gKdsN4pE1d5m7LY",
  "key29": "5xsKGz7G2CTv5SLZgPEMTEZpT3ih5UjRc5jew5LZJMnz4Ht8VEQd3ArMbqNETtZ8fcvK5saGxnRWPQ5NEojPmPy2",
  "key30": "Gg8ny9ymwXKoBtQnsjfqFYMfAWq9rSUwKQfVecZkVqXzXYnodFbWR7QeSLuHc2HttzHCHaeiQz1C1gFVHYpuHET"
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
