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
    "47QNb9kKhD2PYQxk7QfKXKx5dAoTbrBwytMUHHQC2Y8CMqEqcEr4yzNe6veTVHtZJcoPpjviPHcyejpdGy4VarbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g5r46pXrUvMqtPFkVZPxCiprYQD6NK1BsQALQBao4anWWDcHdH5rwnC3LjTZLRNPUoPqGqkmK4trUUxgrrGPHfA",
  "key1": "wTHMLnKdXiJUGYGBE7V6k9EwRpAHoSQTPj3CUhVnttMw1BKcwsEezZaU9i7ZXqj6L82VCwnbSw6kq2R8rpxWTxm",
  "key2": "2CVBuhPW2gzxRRvmCy2hULMz846JnQi7Ni1tnxRNf2jNyNBjJoN9kBRFQ4N1c44wfYGRePJVBg4Biv7fyRXHkikZ",
  "key3": "4dCpWunsDVg1mWEVYwWodLxPkANuaYkjyLo1o8JVQmTGwWV3SQ3UkXtidD26EgQTUvybvMhzndwEKfCLU4UXyCdu",
  "key4": "34sdJWvarGdXsxqt5FRaHLNMLgZSfBmKw1R2SuyrpVCYh2TqvYCrsymwhFEbVuK61i4DuCQ6U7QemjvnE1DU77DL",
  "key5": "2KoNpJBtkKbEALRwquSr17grnysU4Uk3CtsYH824Mww15LyiNWYE9Ux9sMhf7htUgdwvhzSrEpHDxHLLDDAgDpiV",
  "key6": "2BxEQmQBQJWhny8rnE1K1a94HDrnpDLVgHr2bB1At1SdHMHfPmjmG31icXQWdz7wcqZZLwdWYgUYoGm1VxX3znm3",
  "key7": "4nWUSZL33M1Xpm1PfHnLYt5xNNDtGUMtPx5y5UPP6oXvAFwwtx9Ex1MAHGHZQc6PygFxkNxMS6pXhV29AQN3Veem",
  "key8": "27h5q5MmFdg1bAfq4na2Rykttsnrqsz86qwEQC5ADc582CUQvSojvhbmE9qJcNtL5vVRLBWbQJmSRwKUqdRqtGJc",
  "key9": "4QifVi8NkUkDSYqHt3V5Hgaeb8nSmbX1VAEPJT13JhCdr7PhBLfiZf9mCK9yYLEhKQMk1VXWJroWnagkq425qx3r",
  "key10": "4s7RwEw9XS57w4pJEHhmKftkY6GoAEDTw3gXJqZqfAPhu8yKoLQySiiMXqrgw8FwJ8W3eDhKBRXpSP8j3m4N9Fjj",
  "key11": "3CEx1NkFs31c9ujf8uA2jRUi1w7xfgzMXeP9kCttkpFyD8kxdysb93Rh3yfVEXUbATLSkAP6X7Qhz2AFHGoq43eA",
  "key12": "4FAzLD3uFExSCDdJMeRQfgvpirvzayo5K3trNH62PiR3hcG2po4SndSxg7eZdmH52Mmz3j4JjaQdK1HbmnHTw8Jr",
  "key13": "41BAh23rUoAepCUD9QXfa3vD1THEGXgkhAbizzeqykJRkJNtxdbKveSApmiSyWhHBcD6H41GE4aZirLXNF1oRUZx",
  "key14": "3kFuYDU4KkXx7cKZdAfqmXsVju4rQC1ZcugztSjfRrWp6uot3BDpvAKViogUbmijbrV6GCFT4AFKaA1sbdXKnqDU",
  "key15": "3X8mn7GFPdh1wkXSMzBcaMZ2Sx7PvE6fmqd7WpUSJ8T3txy9uSKKKBLjQcW3E5ZQXaCZbY9HPxyYHuMGQrzvE4uN",
  "key16": "2zcdNQ5wk4PzHq9LqLSrudqVZpSASP8VrHk6QjqDK4t1gsgkrkLchAip4qUUBZo4q7zrNBm3Q57J274gYkggWeyf",
  "key17": "5kK6qjU53yhNQjSkV3a6v1v2qeyHT47CKGd2WQrqhhJdxoD9wAtykCoA15ctrJ1K1xAv5KGn8b537aKAKQLUvRCk",
  "key18": "2uTDgq6y1XSA61pztE1rFXd2KhbeBpcWyguXuwcjktF5FXuGGpYbbLrsoeZRi79uGGMd9XjzCuUsMGUWAu9z8UJi",
  "key19": "2DdVqueDaepdgGeWo8qvacW6wuGipAbdAP1FdQc8xHabrt3GySV73QQF9govAn19idwktzqayAGVnTsoTZ57D92a",
  "key20": "5VNPzPyT5zcbRm8fxsP9EmMaD4AG4mRhJF3ggF4usJqgm2cpzhu9TgBXnidPYysQz2APES9F9q7QtnC3x4Tw89rp",
  "key21": "qRdfFkDafpRBBTyWGWnsPMopxezrmETxsikyL2wwK2R6brs8gUXSNaWvVAJMc7jozZ1uosdETeMDjy7KroPEhrd",
  "key22": "62TfKRaTLcReXy91bgtvJdQDJMRUwfmRumh4fvUpEsMJy4vQEFTTAZ4ykK8woR2s5p162qagdVD51a2Anm5Qg38W",
  "key23": "Adi3uxGSjYoW3rJcLoYo4f5tPSrkBSC4HxV9bN3dn129T4AyXUwUbFFVZwwzsDsJL8Vou89PzfdfxF9p98y9ZAD",
  "key24": "4WqyEGTXAHHZL85VwG7WdqoyDM8jkzrWga1FzFZ3TEWdPS4J2qydHSubB5W7PGmrna3UeYqReWcaA97g2dJ3oZaF",
  "key25": "wuBaVjFtLMazX2hPX1FXdWQQjmhhCuNjhx7zrbZKiMqwoamEQTUHykRoWbNx96puVpa3whb7DHSkAF4suDehcNW",
  "key26": "2P3XBd682bxi4P1jTugL1LBA4ZGL5MDHLLND1tjFXiyxsPBW5eNZbnbqG5QYRJCHPAnQsqMmRETHQmxRfULVX38s",
  "key27": "4G2uTuCP93r8WyWUv6pcyAassVpKf4cwiumh6f8SFAsy1L3YvGwcVpqGqzyWxp3qjZ8Seuie25LhHH35Kdmsxs2K",
  "key28": "e1xiXeUTmaMoYaT38Dt6BUPHuwFBC6pbNDKVNS2SHgN6aGz9bfEHGEsmjdWCBR2MSWT95LnyCf4mwGmuGztR1td",
  "key29": "4zdCmPGDFTND3UVz3ikokbSnUQsz9pDGbKdX9oXKTCEs3LDcnephrCKCHkox1uqC57422R7DW77nxQeNRpysQszR",
  "key30": "5A4zeStBMGZqJ7Dtdv7jTmDrmd68jHHuMJdv2WfgU2nei5H8aW1DzYihjhPY7NaqhEwnKbKskPR1z1Cj8esGFjWW",
  "key31": "H6aFiw1CXDZ73EGrgZ2bhsYbFXnJ3fybyRTyQ4E8a4CWpwPfB1VbFYAUiAwTqdfePGF9wWXnThfdGdNaVxvjuDp"
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
