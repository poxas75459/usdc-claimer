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
    "hZLsRjuogeSPgDBi7CtFrGvdTmD2uEyFiazbEZLWpv8XktvVs882wcDw1G1jzXzU9VaGeegP4LPwDtHu7S8SBe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VSxnR2e6RCupx4Jpiji52tK5f9kFTxG5KQ3bbRnqyS1nAqfRsiZriD6HJS1vg6JX6WLF6TxgUFKy5ki6XDFWdSD",
  "key1": "52uKU7Nqj4iAJwA6G5WVCghXkC2NReCZw8GHNDtQqSqdrpP9X617WMi3sUXysatVGSTZAAzF8Wqo8kQxPrAWkM36",
  "key2": "211yqEG1HRQ26V1YqtayA1NQ8sfEtS2sSGfgpgTCry1HBEbQoHoqR1jgf9UTUBDVaU6zSVMkn3Wd1oN3bQtVtkre",
  "key3": "2yLJD9sKJMjhcULMFrn8EG3VVLCDNu7irTV8WNZBAxCCtR4Yg49uwDipj9QAyb4uwtXJaUSLzbdwRTvWE6sMm1SP",
  "key4": "5X69iUEijTX8H27r2Qjz8ivM7gKzbeznhYdZd6o3eBbw8NDozYKXDhZqbqeh7qRUVDoMzNJueHELZHcWybTwWZ5j",
  "key5": "27LCLBvsYtYmeeL1Eoc8EkawLff8UhiyvwnHkXEjRC4NhSwSrcqddBoUvMkUSv8mXP9Ei8BDgtqAuuaDWgSHt9yN",
  "key6": "3UnKkytLEYrxDzHB3RH5FLdJcJUJaZugjrNC5cmPTH6FwLjG5cJDQys9ueCRiBWyvccuRPeS9pAx2LK2wjvFD2Yt",
  "key7": "5VFH15t9r4e8SfeT4zLWisih1AnokfzZ3qENoAnnoVh7hkFsBVvBC1oLfbRGtKhZCRx482uARdfHVUVpJMhgbtbh",
  "key8": "vjtKqfYqCt7Je1StKLG4UGS3axrFL9Xoz1tLT47uz4GU6X1dYTJqEhwnk1tsjt28yN3QHgPhaUdQD3fCNkrJtos",
  "key9": "Ajn2zkxwwV2fA58bPpKc4BdtZXZuzATh7SGScNcTvqTKSZYqPYE7kLrc9dW7fxxpiPWAqZcQYyB6AZByCKTXdBP",
  "key10": "5a6nWZEtWNrfLWqzmYoHig2ckTTDWSYrzeL1eztHSGT7r4kQMBjz4StDLwEwdQD2DthFJq8DvdQ6L92zvedqu48w",
  "key11": "3W99uUdpFbtyu3yTKso2CrP82hviSp14WABGEBHxaGgWmTnaFVvkKJgoD6ZfnSiSeV7iUpYTL3FDd9yinkmKBxE9",
  "key12": "3un36xcuJyN1xgqT9a1g8ArY5p15jT6zMQ7zvho99u8RLEy4BCPFYzMM6TuFSGw5GktxuX2tL4KwjMGi6xX2oV58",
  "key13": "5UuaBvVjxN1aVS7y49K5749hDv5Ko4ec3W1WhvjJynvFFkX5PY9WZVKRupSu8R9Ch9MWTJdKKXuDvMBg38eSxnBL",
  "key14": "3xfqxYdHvWQ96fH8Y4RhURSDFzqETMsHrcNJB46bH8Kcdkv4HBPP5XURKAVG7pdnaZrqu49goA7f77w21s9u6KCp",
  "key15": "UsYs27HFQnVXCuT8nBWmjK5S3R4vQPyX5K5ku5WBGqQtB8GKdeqLaFnkQqe7aHBds4D9hPCFDRQ26HRcGVPYN1R",
  "key16": "3ubxxWEY5iMULjT6erApBpbcD9b2JaqhNKGXRSXWg7tgkHFNw14aw1f8vS55qY4mWBrmYTG3pN73xdJ3YXmPYGT3",
  "key17": "4WeL1sL6iXubS7ENA4BFv3TiSgZXe4Hhqioq692nNVXZsQhK3uP3coDSaXmt3ewdmZJoopsGpwrxqnuprf5z89GG",
  "key18": "39PaEDETvh2rRvKy3Fjq7J8nEWWisEaXm4h4X53Zo3zmTKGBtEwVnJcPTt5x1PMt9qQeheqjQUfKkPGi9GaMk63o",
  "key19": "KitRmEduqy6ptVUJkwtmPMo2ggBjEHte5NzDnpzZbbZW67N1UyfTZ84qTCPR6Mv1XnRMZR4mBxLdzCQduhQHLcb",
  "key20": "2Z33gBxaEYFoUZL8RjcJURFGPuone5r9yEsQ5V93G5Axp9v9ZJavcBrfgaFaaeqcFZ7bztNBdKy93kvgT8vQX8p8",
  "key21": "58Pkjf4FNDPcUSS33yP5dgiRsEMLChDzyboui3awpFy9RuoxvC6B8thgRSW7AjFAehHmpeZckEnEjDt1ywuiVKja",
  "key22": "3T9rzgs3HKT7G1qBRv5h9v79KEH5XPuYGGRw9W7stvWEcp44N1tFvmz293UXQyeBi3v2nD3sa1j7Xj5dcfnjEYt3",
  "key23": "4wdYwPhK5AYr24BghGEogrW23FzcLX55ADUXfbMZjm7cSSAFGebcbzaxCQfBzZ66dRVuuE3EnRQjk2QmkCsedqdg",
  "key24": "5ANDdc5Zgdb3W4HLLPZoxRpqyDRDg6CiPEuPxEqdU778GEEQPJRUe3fg7ZLKVhAK9E9Ez6hDuapfr5P4SGWBdA8p",
  "key25": "2ufhCP3vQh3x1UEP3YVVK2ugdF8v9w4Zi5dyWtgRecMxeKaLEy5AP9hBHSZVfZzUinSGFNN6hNAwbzsubAiwGoPt",
  "key26": "54ZsTdNi83QxCpudbHgteyW4uF3TqQns5G1ptFgHQE6i3j6vwihbyAYr5cxYFPtjn3qxmqX2YRhQqnxd7cV4sUmq",
  "key27": "4TwWryyWA5hzaRHWjYfSFakUEQvqBvNcznAwXWmfCv3AhsvaRpSckh53Q1eQxUAJZUZBdzKYuuLhX1EWHsbnmrxT",
  "key28": "56ZpbDLVZ8kWwNxmiWvQykM4ENJWenR2fcQXMDDLNzkA92Ktznrq77ZrnRq4JBuJgLSowyDeYWRvsTrPzxHDHBKU",
  "key29": "29JaWaLrpDANYUzFX83SAs8uBcBbpocxDQkRXhCxSKc2EfuegBRg1FnUyVwm1C47nYLzuVbgv236t64VvVvZopdm",
  "key30": "tZaVsnSR9QqWEczHVoc1SvAScowiUr2bfM9CSdyCBzGUSSgn9Xz3inkvUc9Vd8eeACMS3rgQtwEXokGn4c9ouxL",
  "key31": "2Qzz1j34zFF3cxp72563yu3HdQ3LThqXEQJvsVUTNwx4HA2Z11TYAu9Ko9D2wpm48RPAcpFXhJy9mVfYmsJBZBLG"
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
