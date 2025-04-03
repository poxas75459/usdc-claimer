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
    "2BFhRP1npNmnp4RkoeJsSNqsX5DUBVnBMyFiGsDzZFBe4WYcYtKpgacs7m7h4kTdZA3MJHrpC7shh57PuXS8cMGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dYSrQyPab9jNywoUxbugwa17u12yWsUEyM76ycSHxufRT3d2o2SFheajkz7xeEQu83Wwfkh8ByHhotLCh5VyGSD",
  "key1": "41LZfMA9orApPwUya7y9qJ8P87RLaWDC8em1wVNThGcDrLAQkuA3u3oHjkzfoARgRyFJjGzSzZhaCHS6xrxHwhyP",
  "key2": "5HAZc5HXhh6YRN9Euryum9zNZocB3vXPzf2qRGDXkhAexEYEAgF6joZxQSvfvrSnRKNR2MKhvKLwTy5hfoDwCfUh",
  "key3": "458xPm1SQqn5ft1kn1EtR9F7quaWux4DpfGeZjmeRz1LerCGgRdpdrLqtdJfPyxv88bpP9nr1gFfhwkHPun1Dkyw",
  "key4": "56SpHzWQA4jvApdEsRGD6hsBtQ5vb9duC1F5AnzekPQzQojG2Noqvpk2qsxkVMo4p5ceAPAasMGDkuJkJCG6yQ46",
  "key5": "2xjKQUetYUyvKryR5eqAk7hEkt4APe7WVhjoykwscjMj5QGtQS2siRrgyutem3dqomnkCKuc6eD49hBHV9FLGvy6",
  "key6": "2PzqUExtEDED3ELqbasx2p8cCeqevNVXfCeAPHP2nbuPYAEiLd73VBLi7jg8YXyjgEw2AYDHQQL48xaEpV3SxwzY",
  "key7": "5viv4LaMWyT2LaXFx24QPRLHohke4URkB3ZHCAzMJTE94tCS8BXTqhof5JchC3g7P5MeFsYKChsrmqYCw2EawJYx",
  "key8": "4QEyBBAxopksDvDR1sgwBJpWGGrV73YYCpXRjdMKUrzcBtRr3HvptGKxddbAorQSnkt6TYppYHmtcumMhTa1L2cE",
  "key9": "612dshCTECS1rpqkpmbcBJhJ7nczQjEoc1MCAFAD7thnFiPPmnWxeRRwu1dHT2g9GftskQpotcvAHJ2gPebUFDJf",
  "key10": "5FNwwkLqNYfHCgEhojkU51YbG4rnmuSSbcsb9h1Cmnwi3x4xAFcm93UizBgN632tqhhzt15tgcCcjZLfrD6ndR3S",
  "key11": "2PshvA2188gWefPeQMQQfCaLvZzsroEup5nsGcCDPyhQZJb78G6EKkzqgUfh6PTk9Ej5S21c3Xrf1SPwMeaueW2D",
  "key12": "ZC5jpsRmKJP322hGYxJYcBQYkqSPsvz8a4JK8Y2HyJFmvCUozQHyytCdozsfFCGaGkaCmjXqkUZJpyJ1WEEKBbr",
  "key13": "46N5PXzP5etUJh5Rn8CL8CaxYu6QXaPHac7GGhJwAw3UycPL8Ct6XVPMFrPVUvvs69Fn1ad4hNsuYf1ZQoNVPz98",
  "key14": "5ovXjbAX9U8Jik9SN51ZToNAZzaNyZ44mAfRU6vf4CA3mdhGsVVifFTC7gZMTqimbv9hVVUxgPsQzDGFjiENksfJ",
  "key15": "4yFeBbayNYe6WmXTwyWRaepwzHUPaRqsZ5cGv2ByrUFTxby4Sdy3DpuaVrU6CntxMNPNJv8cHtyEFRjdFZHbc7Xe",
  "key16": "4KpYpjXuJNe3ijq5JMQCWKyvchqbAZukL9MDxjd8YgduvBwZp6SdW5Ew2VhMBC1KWE1ywYzGXrf8nTQqD69kFVWS",
  "key17": "htAhCP7HSwGoGmHqLUtaLYrTJmcVawqTHUJoFE9y2EFpTPaS9CFFcfcqJVUrhJxybpTdRSX6MKcDgGT4cxBKNCC",
  "key18": "25hAKz7PLxzukg41RN1dzAnQip63dvh36kx15dWJVoxdjLRH8cXEFnBFKy2vpkLqiqHeZoFKE4X76dB3dA9puXAT",
  "key19": "HkZRKxjkTDC45PyuYzaCz5wbbn9XcFBdYEekgpZETtHo1geQz3MbLPJFTXp8hhZxWnmFdsUTdUpduRviuDvvnf8",
  "key20": "2sNN9T5HzYHMq5kbNCLg1Ett67CSuQAWQVUsF8cZdECuJm4Z9FJaheRxTXD9T4PCVrEUkqw9d5oyniCjcfy3Kp5k",
  "key21": "4XpGeCVord42Eoh8F9T8sFnX8GAq1xu5Qdi1ytsi8CA8GMXDYnLyQbTSgaLTfMhkcWbmsW5fo9qMeM4MD88DG81L",
  "key22": "Q9Puj1qzM27h64RW6VRn3yXz2kdGwRz5yhzqBmF5RkZXwfsiCKWyDqwd3Wmxqn86jHLpaxuJATwpRkCvzS3He7n",
  "key23": "55yQ5afqYfs4vG5xqXowaKqypCo21xQebEWdFb8rmBwyHEvPYw8RjvdUS9i28t7ofUocad7wyVtGx5sJ5gC3Cmfa",
  "key24": "61G9zLQVDfhy39AEBoFWQeQb242j5VJMd88qxkSQmxMP77m13enso7VkXEgvxUWfQsEct9U6G9BKEiherGViyEXQ"
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
