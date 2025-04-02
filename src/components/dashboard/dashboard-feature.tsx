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
    "ip86F7wGp9CsXNf5DZgkmNH4VE5r1MGumkMxNjpRfd7k4RkmFh6mcaWjNgi85CntiSpcv1i9jk9pq7ZgnTCqCBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bsgCGjbnu3ahqtXhdzknj6ggcJ2i3sUB1fRAZL8rbcGQifDGSYCNYvcaez4jWLazjZ1vdg2BT2BYZwvgZ6NRpA8",
  "key1": "31CGiNUDsqUS53u2ieDWUhEa5ANFojMQM5fdpwcMJtBPWsPcMVK6bZRfLmCFrojvVuehbGSQHPinD3pdK5YeApea",
  "key2": "4vznwpnjaA6otnySpHer7DvCXsBy9LKzuRKVY6rdCAjjHCfpdDivMJTKSocJXYpqBohjw4pWzMN6mzHETK4KRM5M",
  "key3": "jYCctWqt1igohte647nxFTpRmQPHNfGjHMGKat7JEV1MbdqpnJGAPyjQFLa36PiYtvhCbhHxhwBDiMGJggqGp2L",
  "key4": "2gfkeE3oX4oEnazfdFeTbGCGANkP6Q5tdsCpNgaarDEgEU7dyk9ibXB9fqP8nSWzUi9jBXgbDA51FBnMtBwJp3Vn",
  "key5": "3aQzW6KLH7r49yCUaYFgY7m4SjxzVihyx1gju8NCFUxDRh4uZxc4pfzhnt2YuGkhoCenp6dbvfSbAmich99STZoY",
  "key6": "5Qa4eTPooUVMic9QxKojaf4FeW7DwEtN89SR7w4Zcuc5nk7RNrmjZ5N926R2NH6xjXFLYrE86NAsDnqsYi7h8h3a",
  "key7": "3DuXKHUZGjym9Ty9AExoCH9dTTRVP7iYVHjwmtg1m9Lwzwouuh97SVQ3h1LvagcdUZ81rSYDvEeFePMnaBUiKubL",
  "key8": "4SwaA45SXpeobMGMAPLT7efY2v2zTLRfs8n85xiDajRYHPReaFwSNxLtBxBBZ4SoooiigXUwSEfp5LJqA3sbUhtC",
  "key9": "iWUBxV4aB2vD3fHscoihtq29aTApsF3rddQmLVzxxWATfSoKCGM35ysHYe55rKr2e9RNtTuawMisYYgdiJfP6Ff",
  "key10": "mvdiQjuj4Xbrx7cTXMuitvLtBQKriUZYRyKy8G7uhdSRH45kXRVPjrvmi4vSXLW1vxk5ca32KB5PQjkHCLEFxNg",
  "key11": "5WFZQcXpkncYXTq9xmRypDQkAnt3YhCqPT5EK3iWKiP9AToWx32FCaJaLrFwWntnriJUHEGLfmbWbB6of6xfaWqF",
  "key12": "484iiwrr1zzig8mAvyxsmi4Z3Z9eLcTaYzvxiKcFguk9mYgwSJAfaMK7KnZTt8mATymLFRsv3wFXG9sE8Z9WsscX",
  "key13": "4eYKgd6t4QCWzvZxJUc5sAouE14R3VJBr3J4yjKwemt74YJtZy47ieeyjbk6a7jv9QaNepenaidaNMtDd7isaQa6",
  "key14": "262ExXauUkh5DQbpDAR46sgY3WZiWa6wXZzj6LjAeP91Vexhg749RHfDvZzQ2BfPzaEFE6ZJU85tcPQLHYu4sN8u",
  "key15": "313TRH3L5DMjuRxB9WzqoKxezp9uuUeHWxFWiWPcMgRe3SXy8NTWnbSqGqDc39BWtrSzLDmWuPyfHL2nYJ7KJurm",
  "key16": "3LFgj4MpMCFc6yzNAKpwdLy5XbjKwyKrMnckjdbFk1Ceo6rm3k4W8qwqSyoRxwjxanpFoV3UHDSM4YTPGLFJqAY3",
  "key17": "2zqoP4JfyyAMkmNewKMkaKKQ7fkru9XYURfMnmVeEA4LF7ugwiEL4H176geSozqPC6Zm4wuXbmBhpmBNzfAVYZuS",
  "key18": "5a8UNHhrWqrgsw6ecLysqVoJkBnHhY9118qiWNp2buBMpq6AK1u39YUFj9nPMcqMTg9hPTfrmYLefi4QrKFbbozW",
  "key19": "4iTa2Poc8FwiE6mp85RTAwjVzs8cpjzcfC7suBC7qQ6GyYnqZjRJzG2UbDuUw6UP69xC9cD9kadKLp9C1z325gA3",
  "key20": "33wqXnZVhfdvRVvHgDH2PGkUN6BSVfjSCYVp4KbAxCkjP9itmpiSfpnwHqJpBrcQTzn8iTz3HTQiApsSG5r6FRBu",
  "key21": "2HrSRmPKhfnWcidJQVM34dYh6KKGS3X1zFymhEzXuR84G5mXwZm6R39KwTNUKP5aCxpBfr5bu3UxaCyJ41AAPeCF",
  "key22": "2py1KMPwTk3HnHoyJ9pnFTQkboyjjBzoH2RzrkNxetZQ4HuCtrky64TbBrMEMqHfEfKSyPqWWs7jkq6hXWgaA6oj",
  "key23": "5shA4DgpLc31aMeKQSDUJ8nVMrJkVuEzyiExxTC36BiZE6uZTaonyE9WHvHWxyxtjBfZZHndC3ZCV749RYzh6ikv",
  "key24": "xHWMdKx9afoc4E2WZSJkvpKoK4rK68Xym2M3j7Uv53uiCN4qADiyKsh2eR7gCzkiifDbEjJuX5a2h5y3SdbgAVQ",
  "key25": "5sSnxKyNgLYi3ivXHAMQyja5LkhEukRbcU6nsVMJB9JNojWYcN9tC87JbebwzTkiNDTWT1WNMy1sNAjGAUEkSLyz",
  "key26": "4GSWQtvB6cueDJdthaj3KBGckJNWf8o4zAKVwTvGwFTs1qEvFDzXtNA2vQsKQrHNVsz8gVvJBRXfmQ3etmZGCrh1"
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
