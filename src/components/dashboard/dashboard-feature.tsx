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
    "3uhLevzQS8cV77UnBv8RReDciiiyNryex4YRipBxqxwsqR9JFcvjo2BeVLcHV2caVpj5xH33iRAJLtkNdQmttG3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ATxaVhPSAt6hDfymLqmvwkqiMBTxDNdjmZQdGMmLKMsxgCt6KwGa4JFkP3ruLLVrzikSG8pFDsy9ZXdDcrfDRJX",
  "key1": "4aKGgYMmH3qgotaNMNDsrJRQ79M2gj8iCXMPF3oCezfB4nhAMxmjJDMsYXpTjRxdw1LsH4ZNgeyiq4sFS4Rqoa7Y",
  "key2": "4zHRB4vjFQiCNMPCkhmWfdCLbs6Tv7rTSAbzjfgUsip6nUVnhxyWzQ2BNhefeKvK2ppZqH7StsiYibzwxkTmS5bG",
  "key3": "4FcCG1yLuCXmn6zYq4wmXKGAKiY2t6k9247KCj7YQQDigqc5Sh4oLA2DHcxaz36AnCRditggki2MPaYPbBFWHf43",
  "key4": "4198XtXq3Tikujxgj2W5gQPmVugKyVFpozWcPKL5Kj6YYvANubpicfoGneMRb477j6ogqucDGDvZuFpE1jhc1f8Q",
  "key5": "3RU3N3TEBmH3zY4xq3F1rfgeGTXecLSqNDBKNtshLSCMFgxwo2c7c2EULCqY69Ug1iviugMno1waLRxQp8NcERDa",
  "key6": "4Q8D42uifv9Z4QYksK6T9t3mt1rZ2EKHAaGiSzjg7vKWV8Ruy6VScD7RrhWHkqnZpXbHHMUZfeqeJ8hpeMVbUj4Z",
  "key7": "1MLQttWNqpgzXc6cmEqiWvFndmj241hcDs85sCsQ76QGXNeC229DLV6Ghutygpjbm9Ab4prPzhabC8JF8bQZ9Rr",
  "key8": "3Nk7NnvdvxWg7hTZVdowG4UtTtFiaAVdTZDSkDPSyjFELAB7TBeyWAnG7ZnizgZHoVQx4TLQjSVQttVqzeFvZAuJ",
  "key9": "BGXf4FxjkHxuXR12ADUEEkyiRkb8xNg8o5NfVxg8am7QMFSqGWNWuvaS7vc4RT7gJZHJSDUWu8UAM5ocrrPsCfW",
  "key10": "e5GQSAe4nagc5Emq6AcHQ6C1hHLBqPsZpD1gn2J3Po1Fsa8q948MUVJGGsFGvMMUp1M1BoMVFbkHctrfi9a6ax7",
  "key11": "5vppA6fLEKodFv92qvu2WW8HueYYi8BBLZriqQhjtfBWaWGehs8mTHiZpMY8yTXBtRHzE2peJPwY7HDFQM9tadJd",
  "key12": "5fxJHJ27EQTcbMzaVFk9b8rJiYsAodz7nnHvYEBCtFzZZE67zbFKH51trxyZDne817CHWS9doHsU3t74pQbsEk9C",
  "key13": "32nLHYZmhZt2Hn97ZM28x3UFS371QoxVtJrP3kLXxhyBzxSvyhkHpkKA3F6p4STnx7PiAWPSJ8Wy8BBHS6faDUwc",
  "key14": "3sCWBpHUGwDZx6fevUkCvWAp8FoNvZ7X41i3sCFaNvhvFfvexRvfdkZCyGt6qWMM9Rqxg56ZdzUbc1DT3A9pDXN4",
  "key15": "4fBHz23tfNXJuJqC71xsmUuhExYEg2mx93DMi7ZHKNJd4gMGF4TbkVqirFoqyM2JfV2LQtiouVtiKmhaBZhhhuzC",
  "key16": "42P9fatTgb1bCXzpnkae6L42EyMUVkDS4MtrU8cBcggtn6FhxjQeiaQpKWEFd3xbWRNuXQmaApnAaE9B2o1ud1FN",
  "key17": "ZpC2A5ZvBys3F1Tc3Kskr1usbHQPEJFgNEVbKNqfPPE4VRRN5c1BQ5MLNQnkwJTK9pJ7fSpZyhcReG821neUAHp",
  "key18": "4ptHjituouEZC2qVxjCgEyzs4cbDBGrVfLpQYEK9YBpc9NsaEMUjCRjrVAdxzBR2G5v46GinAuFZNF6Qjt9ymKqo",
  "key19": "4WfGmap1a16EgUD3U1du4Tg8Yk1g2rCK1WAdU1AJZGtCKJA5hDxkgBeaehNZqGdSHyTE8HqNMkAg1PQyJMjFDgMz",
  "key20": "3XHD6gi6tdTkcuLpSSEzHJeovEpfUdedwWCzeS146gKdmNQkit6gMHp41Rv3ZH1TSP4QT9YQrAzMnYtbLEkYwJx5",
  "key21": "4CXpgBDpLbrCzGqbcwEmj6KcgC2eFUeoyyQUkARTm5dw6j3ugGGFPGFdARyzAXMBpq8NYAqufjdRftwk5vfB5wT6",
  "key22": "2NUsDBiquYTV1cfZ7kg9X6sL1eL3QK77v7WT9FS7ikD5jx63SZzD1uNkCYecDwftTiYDQXgHSMCbk5RVtefwpd27",
  "key23": "3t2p9HL2uQiBr6t9CkTjJgiRZDdPe44EMCRRxcASWjDryJom8CGr1P5dyPMLKi2r1fbN6jyUhL9A37CBqJxo6rQ3",
  "key24": "3nNnuifL47eF1EmpauU5mVXawWLUxUt6bWrQmTsJNh9urBk9sqVA5EQq8zF1bwnEHAjRx2VUtZAcDyqmo2Kss6kD",
  "key25": "3MsuUgzkb2SKPNRMbU1jyzBg58HJPB53M5tPpSjXDZv5woX4iT1jzuzoZD4xjx9zDjLA67fKd5BWMJRnEgPkgZGh",
  "key26": "4WLH9WV1pP1HuRfywHF8nYWPbGskXjf5cNf1XFK13FVmmtWv9eUdN1N8Ma6cvBCTA78F38yvjD163bAi7JTQdYgx",
  "key27": "5LHaFWwFudmhs8wr3yrYycBQox1G9caNoRXtMmGra9HGtjfRwgYcxcMkoXTZozBUXGo4m3FRRtZPiMjpFpVSCFs8",
  "key28": "UcEfiGm7V1Kg81vY17YsaRqmWDC2HEFbuRifhLKfyjH96L5aGmA652yu4pFBVNPv7ydJnZXoyUG382MmdqqaJAM",
  "key29": "4wdAtD8hxCyXp3ByB4mnfoYzc4QAYCP1F6x63vrQemYXsBf7goyPfZL28wYvLHQLWmvyxG8uwSqAmkqCkjQAEJ5J",
  "key30": "3bpHK2TeSTF6XcNAbYC62cfM5kb7bw3PSFQt47dWnJT37mazH62Lb9GmAQTATyjgqt36bV2gprb3iop7rrYt2AaT",
  "key31": "3fVW6nzGibdtkqYjtSPLFWFcLMEMwA1ptdo8LhuiL4vuUgyuYrwnwj84R3fCPgzxRQJTuAGT2vDVsCQQcxrDFGit"
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
