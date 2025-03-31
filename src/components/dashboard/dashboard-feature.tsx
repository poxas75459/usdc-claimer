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
    "8FZyovZP4LQR1Z4dDxFgVT52hd4hYzMV8BpUSap3fMV6LdZX8693dTQ4EqPM3zuouN1guw7RMufgS48pTwjLVW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PWPyLoomrJTj67EwqqwTAdAPmPm7tp779eNghmVs8ybK1HrfJkYqKG2pGk2xyMevr5Gb9cGp6kcUN4LXhgewTSY",
  "key1": "3y2u4jUZJ99eCk9bqshJWVPA3WYe4UNs3XLdjmrez68CnsTDR34SfqSDeZsQfnEMhWHrGDdawgFrbL6kGFY9Mvqh",
  "key2": "36P6K1niSSdmaaUmBb7bcd1kGPFQBGGvZmjotFYckdz6QPkgMNNuGpkARDLvdT1B8eZrX83Uugy5ukWP1huExJXe",
  "key3": "5DJbiXBpiB7mEsbSUKVjHbHFaVP8jbeDey7cUzYFS5bv2QvQCuvFLGswv7dQQMABNc7kkULW5c6DHWZEHqbj7wjV",
  "key4": "4unnNmtUmX7cy37RUJa4ScYXvuDK6Fcd1BvfgWDNievW1BzDsDQVwKUQpnVQayYHyzhAeusDt1Kb8diKJ8WNou7D",
  "key5": "GcKyBgkvcHdK7knmtWpzu55ZwaFG8qKrn31AxJa6826SGy444cH7R6xDGRpzJRLpduF2Sz6EdhUr2ELZwBa1i5e",
  "key6": "4VBYGNCaMNDBma91bXmNppEv65zvd1ApQwC6756HbrZd4fpvSzASJYUf6sLX5hFR4eXMLhMEwvX9rDANu9a4Sjg",
  "key7": "5rWohiHy3EtzLpTxaiuE6GSQoQmQYo1UfjGNq2DfvJc8bvruu9Aae1NYN58DYg6MzJVs3Z2UC4mXx7PY9dyeW9Vk",
  "key8": "3mdiEHvtsg2obAVb4Pm5EycLLv5ZzzjwA1EPML8waQHXmfNdQ8P2iEVhpLHjxfwYSA2P2kvvcRXuSMQFi9yJaPBt",
  "key9": "2odqSFi6A1uCYn1qtcRnYuC1M5E6Aw6JqwfvgUUAs7Gvjq3Pj7UQZ9uZYWT5CB9gZY9LMqTZtkWwsq9cT3rV1TMm",
  "key10": "5wD7x25YPRDRrpWWU31T2zJsdLrMcT15FXXCFRPWistqr4PAQhjcDVLUiQFskiGPK3tXjf3PaW2bjxAYh54XVhuY",
  "key11": "28xBmUxaSiVvBKqmPCdj691Me1yEavox3J3xz81cwpdgSxfeUy98XeE81f67gFDGKY9oj2UYjs9cFWHgEzca36dE",
  "key12": "4KGvGzAkLoKrS4kHCS3QRKy6fTEbzc5FWfG8FtgWGa3Gmz6weji9Czxqh2pqDyKHx3fcZuYArPFJdV3vBVqwKtPJ",
  "key13": "5zkDG3mWkeragWajDG5Z2Z2qLWgKTAWZasLCq47TE9cNg2BvJQ6ACBbcPEmzHKJE1YvLQY4d26JaFvN8w4Wha8uE",
  "key14": "7QZcbMEH1cP85y2L1xGUfE3C3JkGvXLcPrKqfNhDvP5VGTTMnhs31BfhTEL35Vi2k7YjZX61Fuf8RWjFQUHxDuq",
  "key15": "5yaUxPk6xivMGJ8aveFLWSzZ4YDZqAiAqp36db2Nfc8B3K4y9QUcc2STYAuu7z8zNjkANZeX4N7uWPyA9thKDfB9",
  "key16": "M51U5qKrbo112giV9Jmgdo2qDF2NiKsYm6FgHZ4GzSvn1qWX4N5ov1uM1KQxph6rRc7E8MVoQP6UoqXUMzbKWJS",
  "key17": "GsBHseLTkrUcy7Sr8iuBmcy5BHB34DWTkVNdDAe4Q3qwy7barLKNj7jVCrLyuWWf6qgCLuM3RM3hTNDkY95tXXJ",
  "key18": "53KYCgXiA7KNcpzdwWg4xfdLMQJ4FLcsiMS6bXAVrgafq7GXKD3tp2d1kgkwYRdsjWa8q8gf26JGoZFqNSQH2NF7",
  "key19": "2hgd98kwbpYnNQru3EvzeGnbdNzUj8vfubkaSscq56X9bfpiy2YXadC4w6YJgHDTfkp2Tdvq6bz4HUgvXmVzLdB3",
  "key20": "3EBiq1B25oJwu9xViUfXDJCjPwC2QVrjDNHUGJLK1RT3sj1wgZQEnhP1nLGBEZRAbBoihuTGyNbx4APhhqWWgvrV",
  "key21": "4kjruDGjXkMV9bYkAQrPacx8RefYtfAxfDjBcRn3vGdnkQvuX5nnVaxwPuZpJzzQbAkeeyNbUTKdUkqMg3wR79bx",
  "key22": "2QPjBNCoZpfNBAGBU2RnHiVQYV5LfBuzU245v44L3sZbHpfVm1sPECNFKn3hUtXDgcvQrfkJPENJHMR2DXPhpj2q",
  "key23": "2i4iezZicsc3qPzNYzQnwdk7mXC7ChfePsKxWBfmTfX3WJfCN7vFPGZyUTmSyYPfLxCqD3FkDX2Hn8EZ4tK9mT1Y",
  "key24": "5CvwA54bZzjQhgJ1S3D5FrqG7PZ935Fh4c8p7pg3pHRbj9H7tpGALKC9hPgqkeQTSZ1AdDDqK2ifZnphrgRBog1k",
  "key25": "3KQx8ePGsHcWRoCeKV4gQGMfaLNor5yxCu7RKswWSqgsNVQNF9TPpYeARJhazEfpb5Q3p3hcNwihDV81dZEgjnfx",
  "key26": "4evR1xXRokNkWo3j4g58xbEUYnUcfizxFdxM11aBvoyHkHYJRa5NCpdm5vSdhpVrjYKpnsarEJa2ecYQjxF4Gkzr",
  "key27": "4JV7bqr2J1UmT6U8wSD8UDnpJGBq2SXGf3vpqEpv839WRiijsNL7dpUUMjQsz1VmBsxgQLHRPZadS92KQGqPQVyo",
  "key28": "2ZPQSgEfjc5twf9Fz2Mj2RKQ5HgfMk8U4TNKkUfJTKp5q8MXqvFqoy19sMgvo4uzpTPHo1BdJM4JdWJritwqN5nt",
  "key29": "62f7o1U56NSSFnKQRMUYsKiRwWY5MZGJzLmcHttfnrMPp56XDBVwK5vEiJP2RtAbPpHJagrWHqkY2q1PEyd7UcgZ",
  "key30": "2MFPhvXJzYo9ruipuFS6emayKetmbsLBLjHKKveQZriwebqU7yGRbsygPSk1VTJiXUPkcwUCXTUc9Z8gSvm5KbJc"
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
