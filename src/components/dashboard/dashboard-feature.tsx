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
    "igN59U9kTPiyYwTrqa3ip7xQEiPacjkRWahantfGWhghLAfZLQtQ7FiwcVnMRiLMA6ohMgofVNvW3VG4qYip4KV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KWVgxTRnSAsdsjNVnEq7fzFK4r6DNH6XboGahckhWVJQE4uP4CTkWR1M22MVH6BXDyXX1B4rG62kFyGF1t73RiS",
  "key1": "53hSMwNcGS8WWWNsEopb8GkLy6HAUsuvzt7mt36Cjk5njTSuA6wAum6pmgCkFmC9w8kDbZTLa2MZpjaChJukU86x",
  "key2": "48uoWR6kKcB6KtaGwxZYaJ6CoqTBkHrrRssZ2dbaqvFLT9Fn7EzqaXtaHicutRSqQ7cwapcjxazbbkdpiykGnVYV",
  "key3": "2aJh7c2LNMDHWTsymuFUvZJFATxe46iJWZqEWgbCasCiqCVDP9azwiTuzXFebx3uwPBBhPNpak9SCgT4B37mgZVi",
  "key4": "65WWmyYTmR925QEC2xykazf6H4C8it9dBfxKBkz8uPWot2Fi9odU7UCSCZt3PZ5B9ozuQ354yc2WqBoebDN3r58S",
  "key5": "GH4ELsGWqp5KQ1keBkAxykzJJS8soqonfRREEQbZ9trrTQWBVwAWUp25MV62qhmzV3RhbA8hvc5WW1ECGhLjveg",
  "key6": "4TRoXot1gjrSkcqAhPk2fnHrycXFjCYsooqKxrxcaMvVweGmrSXSCDWudtbUuw7Ef395C3T1HbXf4eUc4v5QbTwn",
  "key7": "61ej7YWASbPyVAbHGvwQrzFivbudBN7xGuFRzzVoWF1CPDvcTEkEpMsgQWLKszJ3Db5eJKf6gnsD41DKsxbf4MF4",
  "key8": "3aXX18K7Luop5cSEgvRr7YJiDdbBUwgZ4YXw8CyS23MsV87vVx5nRYLXZoQac9zfc1PnpoR89owXYCorXGX7MQ1D",
  "key9": "21GepjZ2z5ytbEPVwdKCk4g1EwjxYu2YWzusvWDD3kpzRxi7aiHi2vRVyxg86p4Hzh4fVd2rXXd6PTdNziX3m2d8",
  "key10": "37NT5XJQxQmnktq5QZzX3fjiXWicpkcHeSqkgPyzWFD7EAa9CtCKzpu6XDmUDu5QdfwftJ4oGTdPcFidLhTJtBm1",
  "key11": "5A8UzdezM948JaBbD8TayR1DKyutFT47d7E1csEaNaXhNqLQE6KLoZDfWEE3dRAkwPKvU2zPS6giJNjUTsN3sPLZ",
  "key12": "2BUsbkEfiEkre81kaBFWGe5dKfSp7gonwiWw1hTBKugx5f3sfJw7EYcDRAKVY4SRfZmZ5PhHCmXsD9fLHtaFVJ8L",
  "key13": "233SUvJqGDAcSRSiYX481ceM9eBi8YU2kPfaLhfmNSyPsTYMzjL2gAJ5vXsBhsggqs5Ygt51Uu1oo7RzjMfEVTMf",
  "key14": "4QALD6fHPzs81s72MLyCMJrMQKB3JrPwBc7DjJjNsiU8xjGaVGdBSzb8WHKNbnxBDJztzf8obUJa6QQm2rnGjJLk",
  "key15": "2kXuLvkRyfpRqu1qHhGjBH9pWZkvWz1htGquJvbsYaMhMZe37y82UYg9PaSByHf2PoPTnakDUP5edGmQWfQHzXFX",
  "key16": "WwY3xxptgLHKbPEQLvHYYzF9SVADdvhxk2iZtaqpbMq31SmqKY7KQ7vR7s8pPZdEhAJpQqSkwpXdimG9prokdsQ",
  "key17": "23GvQ7jxJ2YYubButBiZHrXbyse3KNGsXgWBVcJDZ9TKtF2EMvE8KBPJ4fvTWVUdb8s7L7QZnvqZbRt9r8yc27XC",
  "key18": "5snJVkcT2163PqwFdLvFFBJLvCvPJgCxMaCDkeMzLW4macCuJkUSDZAgVDMR6CX2zVGiYFsSitnMAqLUn2xXwgXq",
  "key19": "3mY5Czh5tL21MRB7sq8oMysTKLQGfuDhRoudvGoLksTLNLp2Y5YPnna27LV128mDj7jhQFthc9VnRyJeAJQMSMwK",
  "key20": "3U9ayU1FVRAg8S95Gy4mnranGN9SGPxRXneJ92Uvqyj5TvAX4qXUUN7xfyyCsk3aSFJ2PfrHy3dETtZm3RzQoVxC",
  "key21": "5BnrEqiUHvi8wxCvLpPiEHZoYrKjyA51CvDK27mHMGRLnoYofwnJwWheBVYVCiazthRbxFEdCoLSfMVEkudhAzSL",
  "key22": "2bXRbMMtmFRvzQCtiafThKy6hv9xi5fx92zZtibhPw2caunoHAWQuNxxNyBjjKVLnPG7P29SmopvJnpwg1CTy6PH",
  "key23": "2qkS2vWCUwhXVQQBwLVtt74i3SEjokfttEDgitY8ZopDXt1w3WKeGTrs62w3dWvwnD2icfrGV2cEqeYU28eNMVBv",
  "key24": "4Jmzw4X4qZ9L9k6gTJKLVkFFXRpGNf6454TbPCgdrs1iBmLX56fT59zUuExFUPqiQuCkRwKDfMzte1aMMbffReSK",
  "key25": "4gsEDMhVnU7L5DaAuJvBeH6hJq2rgL26tLDHNE1pu9bbb9W7n8UZRCv72wczTbVrnC6zUgowFjpU1M6Y56VjiuQ1",
  "key26": "5QirD69dyqcYY56MoiXP7GYwsc8UbJ4b6W9DErSAmgxjbqXkKkgWrW3sg5fM4WSqPqScSMAinCB9b5vFvY45ogXM",
  "key27": "3Q314KNZ2UU2ofVrD6SBkVPLowtGZwVzNTFdzQ8wjFD2eB3YS7vckX5PmRnQkRHEMDZMQbM2QBsVTy3ETcEXvLXx",
  "key28": "4wt1KPfdYxno6joQjZr3rGqLnLsuqptoMxT38miCzbYHEZ9SHhD8GtWoP8YStDY8En6wCFqgHLXCAg1WktcYqTze",
  "key29": "42zwJTx732S5yv8nv9WVLom7iVzVt2SkLTiHdJMUF8Ls4vSQ7U8TCFW3SEHzngSTG5B4cp1s1uiqQKMCBLDiZxF5",
  "key30": "mS1cTvKKTSw5D77frCL6X8XHRsrYY8pik9PGNEqU8cRRdfvrYgezogGVd5z8oZwYqcSFayxPagw3YJ9gb6idKLx",
  "key31": "4Py94vWTEiYwLyFgh9SESsvG2qDZBxSE6R4vgWuaD6ntr8KoAwuB8kHSyCZ431dKynRZ1RKpGQAjpbNHSeaRLWXT",
  "key32": "4cQbbJ3RZY5rU82NxbnTT3uR8b14dU8JgvpLE6HHjkPZP92QEzoMh34jDhY7F8XD4SKsV6Gqwpp1wDjijSUriWHu"
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
