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
    "GMcd9FroDJqTZAt9RJ2TdC5MtqSmX7dyHznEY9FJs1y4fctdptQnEWGtRtqPp7t97D4pdWUb4GzB45tqQQ215b7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TAnwtGEjVp1rSHbTQ4mdFg8ZUuEeyZiLJy9W1Mf7MGYDLzLABaANRYnTxwX1w5BuUrghQnXG64bdsjxxjeFhNkT",
  "key1": "4xvVuRwUoFZWfFezQayUEfKguf5go1KuxVbvAXUtUDaAyoTYQ2oQLmGuNwSqkEVLYj438mRYK3USpBS99G1ZM9cZ",
  "key2": "63N7Z21RueBdRqbfwwDtpkksEHoVSTxAsusUcL2fK9AMQ5gygkpYhefUtB7pK1nrFw7pSnPWSQry1ahPBoS2USFB",
  "key3": "4j4iPtkQhfo746yEUY7uBqQYHdL3taHc1sAP29fiDtkNT73T1dtpoyJkdp7Z3fExNSmtF7nihJxaAWHGwCBxrT6U",
  "key4": "3gyfW59xGSHZwJbVvqaBmAnepdZFEF3LHwNDFASRYApZuzA2DE3FECV8oxYwzJAAQHKkhPi57tSAqxBB72YyY1QZ",
  "key5": "4bqBwe751988r5JFyA1iTDHLYMqihnbKDFhRM8paE8nweRbjC2gR7ZeAgY9sgaYZAsX1ptXfpZAxgycX6cSpFEki",
  "key6": "32wXpFtT1Tm7dfgZYsd7waxH2Yiz1JTBAsrsd95cDciub6hUf83S6Up3PwVYetuhMDfMpeYUQr3BK6VKTDYtcMCk",
  "key7": "2g1nepXDikvFYt8NEX1LmbBeV3xqdCGzZVFxm73jhz4YhEBukaeMkGUdCMMPhpQApp5LRArY36xTyzAqx1Hoengr",
  "key8": "3QGgka9pT6ffEMei9H8xzqQgAJ567Cq7WnKj2vqgWGuMuLUuSpapx1Eg6Zvg7sMVf1yiAmYrwKepaqQwMXdi2eyd",
  "key9": "28sodEBmMZMvVc1zm79KfVnK3Gdr7XHaEFxzXenoV4MVXZyjhjZb7dB1GP5Ri8XbFDRdxPjXzMqdzby785mvjxQJ",
  "key10": "3hHC6kVxc4zccQPLgTUWb7JK7KrXZkA3bGV6cJU7KKvd1r9XUkSAfqE4VXTkWhZRZXb11BE5jr31mtWrVNJfkB3v",
  "key11": "jRuXTepnHVDjGXqd4hEM5RPshbnu3WZsYMBy1CCihfzrAjLh2dq3EXRa8cohtNtmrciF1nmepScspC3w6Kj6Szd",
  "key12": "43JJRfmddjmTS957YB6yh8iYz9i36dQA9FhUrKABawxtttAvDAdqAkqUJsRvNoZYxJ6A1ipR1XMitWK3ntCat8Np",
  "key13": "hqGaX1iftMpi6LmrPYZveqQZpoAnHRUBUwtQSpRnbSpWhP5Xp3RJuJfppDM4tedvihDkwDThNTNdMnY88TKh6me",
  "key14": "536BH3Wpo21q88JUxJaxyh9J6abeDVNNWCM4wziUCqoXkfUWbJ2YXLtiDyqf2t9PHDt9ijYTiC2TQxYTtvAsa3Ha",
  "key15": "22BYF9dDsA7ZuLSshhGknWFaU9XUawBfqNTGBcDY4RAdEKGEeDAqFeFgxZZfJWPYTdwGST8MuHvw2GF5KK1EYrKw",
  "key16": "R6MVCBJYMuN7pKPdbExMFjAYAffKKRGnLKr9wMXxVLAZAAmnL82QYZFZZgtoSDG7HhqfxQpdojwTKCe5DkyfCXx",
  "key17": "3NhJGTHq1REELji936twSqhjHKjKsPwgsUPJ6opPX45Wtv2Eara1BMzr1PEcZsbkmYH9cHujDeiLS4r7LGXNdr2W",
  "key18": "43vacYJuKfj54CoHtTDvsPNvx3bPFmVJqCn7e63KYgxNCWM1xpAPPwKh5fQD5UXArPvHceeweTP8HNcrHmPsyY8g",
  "key19": "5FPmU4YuHNTPim19TxF6ddh5NrbfQavQV67QnHadvZua1HgNgTPJ1SRFSJPn1YfagE2vLU9jWpuvjNYJqsZCfz5E",
  "key20": "4afEVt3EwVriVVyqt7DRbQ6uQkgjUgp3FdZs2T7Y2RGHqRpNGgLLyQwnSP8J6JUaqPS6Xf9aBkSkRSwDtQ4AjNib",
  "key21": "2A7aPLaTs8fQiVAEBNR4zhkbQTnaBZNBk4KVCjDsmoQGwxbeY1aQwXk9262pVN1k7myBqVdS2Y21k5DnoU9R9ExQ",
  "key22": "4pKexbrGFQiNsfjLW5ZSi8WUMFJpKPsUaqVHTvZCzcauMBU9YxFJ4TS2EzWXwjq78kSWdRtAVXhHuuYGzeQqjc2H",
  "key23": "63hQTnjJ1oXoodu23fD413JHwgX7wvCKCt4Gp7b33kn8T4EmDWzTkoxAbN38kLjNcEyEp2pnC2mG2kS9x2M3tL8",
  "key24": "3DcBSw2PiHqbH9pYDCbRqRYByB4usxxtC4gxMTr4JgfWu92SUAxmvvF4sK5JYZtquHP32j1hRWPGReVusBZ1Tj1r",
  "key25": "43Qyy3mAe3DKZEMufRhXGupTauc3cAGsZS4yGk2mqgwW4ZYdnw3e1UkQK7353NV42Zy9PyxCtgoh6MY1a3Eoyttq",
  "key26": "YWcCktvpu3xMc3Pz37i2dvU5QMxghfadt4UfP4MPmZf4MwvCgopUN1G5g3qsK9BvGEU27ZmkSGYtPb2cvUxDb3u",
  "key27": "2DYs4DGpW8E6jD89g6y4yrVUuedpku7aCKFrfJQjygYjReijbwzymLZX9XRCrAcb6f1PzPAy6UzscgdsVLkKaebi",
  "key28": "4JnQeJrwwign5ncNCzHG5UH8XjyodtZe4bCa8xQPcyWZ4JJFED62BxbcmfQzF6xukzUuzbNowUuhj7wjsdg5vZs9"
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
