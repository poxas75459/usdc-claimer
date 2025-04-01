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
    "7Ybx8o4DgtRnSgP8rZgMMPX2LWMq6LCsmuknsZ2511nwx9oz86ryWqDjoTJpXw12UgsEcetB8CEgwmt9ZNZeBYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2queiJ5JN9UuTDocMNwjz3FPYsRqA3RFKGXaPUJuX5cYXejzC28QVTMYkXdQG2x3SkJq4HfRY4Q9yj1H236KauBb",
  "key1": "y7eYBddjEm8Hr7cAiVUW2HkqknNmYyujQQJrqhE1QKk891wfo7UYwfRNWL9WxAASeGVQEUk7rH9SvxTpzcFJrtW",
  "key2": "QqMjK74u8uLgykZYcpFi9LffotoyFdBD6R8fWdkvX48T5YcN2GZgsme7i6527cHAeLhJ9aLFFNnX5qcoJoJBwTg",
  "key3": "4DZNU4GkJAePCU9BYQdvUhRigE2w6kAQztf6hTHC6j154YupniiY5TVwuv3x7Zrk5EzMo46rCmpFdaQvYLRna4cy",
  "key4": "2oufd5AZ6uoaJAN684KoKT1jCw8vtcAimuSvHizSwNwN6Dga6VAJQW57QerZTaGBaxHii5wqnwPM9WYDSy7M89LF",
  "key5": "2dHzQhsyYiH4P5HnkdzJB2r9S1wCAtSG1pP6t7YfMqVP3jKoqXq3yW7oVD9BbdLFMqPKUac2ZXRK3A8MxSMmoNve",
  "key6": "51RYQCcW5DxgaUR8v5WpSb1Ai2P5numPyGfpxmDxoVCPdiEkHVUcX8amruYbsDGFae53ZqtJNrm3pVoQtD4c15AK",
  "key7": "4hncncVmduvub6yRPaFxt4Ya11iCZhFjuB12oXDPTEQDvLDAx7cGTgub2ubhJQSARAHg2AhhMKqKCsXrzsmr56S",
  "key8": "3hK9CwvUS4BNnqLwrU3WDPB8JErYuNyxmgd49ka6z1qmJmrNK26WYeiU6qQkKMUKXJUH2hrAkFVes1ytiD1tM2eq",
  "key9": "DfZna9r62CyEoohzkn3hG3z9L7S4v7WwQ58UvzT7dQdf7hnZhLeosWTKgpdLuinoNtXhzaCHVZw5kro3Dsd8MfE",
  "key10": "uqXEnE28x9tzx4sbogxjk7h6kSybWqbfCSyLmEgxxieKXzP2Et7eVKVo3RHb3XvE3duXjS3fzBdrKGjWK3QmVNy",
  "key11": "29xbpDAaaTPHHizazEJJDYpBem2YeZZi4DKCgneNbxYtcypKn7bHGzyFxY5nC5TbhHyczkrR74mqYwBcHBq4TaGV",
  "key12": "2df5SYR6LBWNHNrXJT3gkPbGntRWN9dxFCQH2XULTLbMVuoLrt4rqZDPzeUVWjQ4cj1h1CG8VrXbTFya2AZbfwBh",
  "key13": "3DUeq5PigDk4MNDycaXYXGcQmxV4j49w5vak6t69etpxJ8d3XCVuWJR8FRyQwEgL3GbChGtFshmYdfyC7xY7zZHx",
  "key14": "cnXbWYqCXkma7s7jpn6nB9cMkwS3Gto1vM8j4ijwysUKdXpE9LbT5H39V4GrEScMgiGMWRzWdVZzqhvnxeXydUw",
  "key15": "2QpgZ7sc88yxEeK7ShnDXPar99H8U9RiNh1Snz74z1UcAMCoHFnRqEgPc442ARK3i5kSyoiHWbjVgy4GJC3AfyjF",
  "key16": "4xxVHbrZGnLeAp76gzFivJBC97SN2UHyD3wGKqkfHSRsAMFg2Th3MZiJvYRebqh5FFRiXosQiwghamUiiBMbXtgV",
  "key17": "u8t9uWdUQtRAeMGsJhExzhTijzeoKkbhGnGk8ue6iBdGB28XF8ZwurHHAxi7XEbA8n9VnDu2hjRxu68Ne1QfoxZ",
  "key18": "5kWvCewb5qT4dNDg9rWXt8mbNLpPYM67M8eTkquHZ4KZAPpYFuvyrPpBM2chAkcHwB1W7c2RmmC269dL4xsDss6X",
  "key19": "3uyy37zLK5dUYdqvLHQdHoyeKMc76TFXfak13daJDeQFxYAAFtbCjrBsKArMAsC4gJ659nmc8jaDNN6zSRVPMrSJ",
  "key20": "32EDoYp3MG7TYQPt8RShbHUnmEHJTDTFK1YPUj4bmwTURV87dAAWtP2x684i5joTFAxSFMZN1VVFfjN52s3ySUWD",
  "key21": "2qgLJzipz14FR2u53tADb7w6BrxevpAKeGjUDQEsWzHAR1SJ4ZD8sKGrgiHtLPxjWGB84Aw58cqL2XyEiBhHfW4n",
  "key22": "3YRcVbLrv2kdFnUkqdSw5Ys5hVAhKT7ju9TWBjKu4sFrwxMscdXoeEFtMi1NequkR1pMvBb88HZZVC49SCqz8UFk",
  "key23": "5yfuAcMesRAbkHgeVCsPDKXeNdyjps4UhepC69SRZppe9WZco3c6kgeYboD8g6fnaosyoMS8aQbLwcjemaCqr8Em",
  "key24": "5APWZUhSvsJrj2undGu9Nz2VS8mbTAYmjwpNuGGmqJxcyomDUJ5ghuLzVBgkRnuonqtBNxfPdb4rpRBQ2LLeeBAF",
  "key25": "2ou2K3UqjaZjsTebdHivS7XVfJtTsVyJn49J6SHcxUG2tghPskLgRTXqnkZ63R3scTP5hsspyss84ASJAjXqmhaB",
  "key26": "3MiKpRFEPABpdrLwpZYEoLGuruJPYMukprVD39hgnYrHXKmGBZ7jwmitXHoKLnFmJcBciCRxTR4bQkdNVxixu4bc",
  "key27": "64UAUCZpMUZStGf35khKRsfNqVXoU2XPWyXVPPQhtnGk7iQDryXPucd98qU9nNFD7x5bThQjXuxQXM2BvxYaMRtS",
  "key28": "4Y46i4YZETNDb2bbHdFJnhUvfzh6GY3e2LRLKh88Vmqh4WogWypWcixv3TYhdwbXej2UnvS422oQKJL3XUXQNbPB",
  "key29": "3TkSMeMqmaB7Fc4aFCZCMAmYS7DLW9ccmsaejbrKkuyt1fij2iy3PtQbfvpM9Pr8CRm3beM8t9YtvxkNfcBnBBzj",
  "key30": "5bQ5ZHvou2ASszLDKdEaezCx8mzkySMN1GENVwkabj7TM6uFcJTJueAPwbuyue3a7mw4fciRTvztBso7ErgqTFze",
  "key31": "sCx16dPfUAdqBy1s62JChgMTjqv18JfaCMsn1dFxYyKBnysi6Lo4zogh4HAsfgujTuhcRQNKAstRnu8Naj6r99t",
  "key32": "4x4JwuF8qPTBGK7M1V5nhUXzNBBZhJtL4KaEFXzeNardJjs3iWnJzMHz4LNkFEqT5dgAUeiLqCAEG2asdFZAo37H",
  "key33": "v9HEmx8PD7y89TVfhXUejNb9WJPBcHdktLXVm3Tq8cRG7UKTJBaQAHFLnLU6cCytkuEbLyTbmm9KEnLVBHTXH3c",
  "key34": "5pitBw9QZhfCZMsNBhvNJ4VHy3hJou6knjLKFHttxnVwLNMQwnHFaEhQjdZRBB3vmYb8of1HPVCDX5zP5bTsW53n",
  "key35": "3cmHux16jYgNgRfpEc43REUbGgdpsxvaDTtWbbdPezU1wALTgSZy8HUKLwwsQX5bs9azy8C4E1adoyQntFkgLSuU",
  "key36": "4f4z9QVjnggQJHSQpUMhDjnNorbHvTKa3SYki5CRAkn1ZQ4MEgWMQzFyVN4xUrDHvRXaJT3NxRhMs8834qDtYynP",
  "key37": "hZGda13Uf1QmjJNERu4obPSPzT4qEYzvKMy1TJpRWBgGGopqBg1NtDqhqzRSUiFDu4zybUcNYdkWtnLC8EVgSWK",
  "key38": "h2t5xVS3ixjB12RwcG8hUzVB7XpGbU4nvEGtP2ZNPr69UkWBDCSzYCWhd2EwsGe2cuFd7ZpDKKASrGi7qAPNoCd",
  "key39": "2SHewnHPtmoXhoG97Apw4FZPx98nduZBr6onWHuqkycGS1qduDJwnqJjE2LUUjwzpgzo9xuDqLqaxidfYpKiP3L6",
  "key40": "61dCErWe7izxe1y8kBco3PesHnji8sYUbXCpcDQ8drWeWcFe7ytUpEuDgUot93xc3iR1BEGUoeBciG1dQKgWD4Qv"
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
