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
    "3JAMiKr9Gko3mfMtQwb43ytMAF2NhDbP6f6p8Z3hBYy3hTpPk31TnHTupY1Gmnk5fHcoZnCsyQtTDxNjQJmpNAnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H28eBrzM9iFcSpuBtqaMEEpgBKHFpppV3oktk3ErLmgSgFHNqU3oerFZKUxqm86a4RL42uYNn2cg7jbiy1pFqmr",
  "key1": "3k9NRnXTKc3p4pqTgA55JjiobxCmhobCF2pWMRSKHYJQVcMzrd97QSJEb3YivNr3QDjHCdmWgyLGhaQRjwWdcCq",
  "key2": "5CqAJrLAoYsu4FEtEEzYiTDrr18bykixmtAUAkwjRBz8pKCm9GmG4s8RXdicNdn7WkyYVWrT9oB2zQDpSLgU5E3F",
  "key3": "DBLwjkyVH6uE75SKKRMemDbJrP5oRkDM8ASjvfoxeXZAQ3wqiDpcGNrR4hUjr7rkANYT2fQYbC4c9S1Bw1mCANf",
  "key4": "5EfDfSPwWVbicASgahbQu9EcUQ5koG2V5Mtdz3JaQv7XYigxK2VC2s5A9mMVU4XnUchjW7vWX894FDaboCiiWigU",
  "key5": "2H44w8LTAapey7upbmGEbt3axpF9jnvvULQF3XygHKK33ewDgaGQpfJhAth7vbpseW2v7WkBZ38oT6cSn5qBc7Y8",
  "key6": "5G7tiEqZiZK4hS22W8bRQhF9YNXm2eWWkcUmPSyv8uZnSFVNE5HqRB2ouLpLkbdY5ofWZWZup1hJbwWgFLiwEg5e",
  "key7": "2nZp7NSThyoSZnTpUTRN6oMYmeP6JjoPqspwv3f81Qj95Xr8YgXH4PHnWDBzHe8UHPvctj2xiKvCxjb1m5viemF5",
  "key8": "43yJ3j7P394Q8wex6cb7PcfXZ9T6Bs1P4worMfGKhaEGMrLp3mePJiPYbuUrsx7JMJdnuwzYBqerK3xtyZ3t1msX",
  "key9": "3c16HoqSrrirv5TejvTGeb4m5CFDoCELu76g5GQnBQPpFTibi8Lxb8Uv1dpcW8SLMr3u3nFWuN6Up2bpcuTvFAv1",
  "key10": "3rpEE52gUXiZ1MSUSbBHNctpTx25TVLQWGi84fRrt6Ee8VJ1aYLQr9DBLSKtk1ekKBBm3Gd8BHHH98M5jsCreKxF",
  "key11": "4CtshBeovrgNrXg94WZ6Fo8JwUaj9kQBPbQ4MzxcV2tAD7hSTJaxCWG9wzGsaoGkUdWHgBFWaHHcf3UAJ3tDiCDJ",
  "key12": "5JoafEEQ7RQp5Gh1HLC8SioGVXfZWM2hSzBvXU5ASGwWDgibP1vwYJ3gG4znz1zPD931e3N9NZgNN9aB6ESYgCfJ",
  "key13": "5GsyjQUqdBCj1Tiy47o6wLftn7HGDGXwsGL8ZJ8rCGu8f958LUE2xH8WLHUrr1CRs3NNP8pwqEjufvhzLVK4v262",
  "key14": "2ErtV9QRGqVvMMVQnSCeNZ1cvWRHejAhksJ3B5oqktZ9udD4vm4bi8oN5743s17MjnzNiZrdfao9RxZFU3piQa4q",
  "key15": "3Gz7uu53tCH2p4QtsrhtfA5S7ncdJgNisngDqK1PVzzTbtT9UsfkSRWMzXFdcac11RbAdHrB4qTDDxSYLS8cXZRk",
  "key16": "5LbxZVX3EBHHy99iH2w2Xg5M2AhwE9QXYGiYTwwiN4Z1FgFb1LLbafvRDhxtwSp2663HVCnsXduL8TRdA2yzwuN6",
  "key17": "2bWNciE3Fn5afPVaXHDdturRGtbFzdkW1CDfgJ6HidYiKeByh8z628r1XUwYHrWhL8VrrVuUCyA6gzko5LarkzY7",
  "key18": "4biPJcXs9YogFHKFJ1niB1P725VfJeAWssWsvX5XF7JwWsMTsAQEtpuBUyNKZWHnaPsCF9qoFUnRx6xnDSpgC5ck",
  "key19": "VpNZeVH3NpMk9GWJkcTxxQwsq23YPjeatvanyasCmyKyrMxkr3fN6DR6rkS9gxUuFfJ3x7vTnWVzSoW9vwiUWDE",
  "key20": "wFRAq3zvAVCGBrt99UucJBpe2BDNRLtV8X7fzrxgVnR55RdeJhXwk7rQyUQG9YU2nHvVw33haAiCHyWAXngpFrU",
  "key21": "5YsSrdwKoyD5HJ2rq2p4fL1KXBcAPPC5ezWttY4LbLQmZdAqqKBXxSRWQAfYHufWujcJfyZqniCtnnQSvzsHrTG6",
  "key22": "4YkZp7dn12TRMLHDG2uvToBLYmdqspg82wAufm4NWbTKc5P7z5snkFVZXfRGKrCiEddaQM98HRg5SmNSd9zrw3GC",
  "key23": "49AqYaCD78EfXCnuzc6mMzZnXqtmEhkTaHQA2DnYdCfEQ43Gv1nZsTiDdMVQMEayMLRhsP7jCK8h3R4euwp6ViiA",
  "key24": "i15SrrzqsDsxLg5T1wrrmpxiytRT3MJXbZ9v4U4jvfFyNJkzS9cSb3vNTe5aRXqGzgkoMtMhnZKhecY9jV76oqw",
  "key25": "wLNcdQdHba5i1j4zxKpyxF9pSVSRPa2GXhLHVkpZHiJBpUuGJ8PsJ4M94Sr229z7gRTWYqWnhmKVgawfTtj3KpM"
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
