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
    "2nQASiyjHmHttwuSpJLPMgF6A1yrMJKsMEUntKtjQ1xRdctAVycRiGiQtdELKz3FmYMRL4rATPuPHCjaCYZV7wXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VBfvhvPNkECdY8kJTRSyEKo9nwAts32pdikKisS1moECtq95yS4UuXBYsmRPV7aA6UnUxgpC3H7thA7fvREp3oW",
  "key1": "a9WThpuYwYubzXTXNJGjpPwPoEGDMwZt4pDRenkHtmvUdukRGfe9NxZwY74Qt2umpacgf6Vj1iE46tteHJ7ypsx",
  "key2": "46FYszR2jAUG1VWgZLgvQNJBnx13Azz5F89KN9XJr6WeQX86KFzHrSz5JE52xGwWWXT4qa5LcCxWVbsyLFsVPP8L",
  "key3": "688d6R4QCibaWiUEGZuLSrw1FAAeobQ9H2HBHhCEWHsnSMZPXgjzx2NG6dgkdZ8G6qnQkqr7aQsG3Tng99EoyX5",
  "key4": "4Bco6x1vcw3oipW4GN5tWvQWCw9ZZRz8zZstoaMdy3KwbKovQA5h2bf5DLXzqGzxV42D8STPFiytoKF6K5gs5D1X",
  "key5": "4cQWUn9143w5gLNx56qibkTmWigt8eRhuzo2tU123XWPw5FYD7eonRze9RpyEfzGhMCQPKHk5UHRcJ3LU9Uf8wXo",
  "key6": "67PQjgSrGvDhqSRaZpus9Mmj5jEn7CeNssoa9F5KpSSctKSLx68seKZTwMaWPv7Ffh7CK6k6LtFjyCfaLBkbymhi",
  "key7": "21uYGDfbVpfNDthVorYPXqf3QDywFwij9FH4sMypEXbuGTqDJSKZs3Fgp5s27w1JeBVjdoafQf6LP1FYwDxTRLMK",
  "key8": "SkiU28mS55TSpNtLbjjuCuBR2VdfSZBKuh1MUWDL3Z5Y1aWrAXvb1rNiPxP5P7mNkSX85U1HXvPDWsuYH5x7Xi2",
  "key9": "5XQ2Ee4Pryf5dQEc6q8NrJjuTGcLo3Eth4bgQdxK8ge7DyZqUiYwEEZKUpUMeLNKABihoshNjBTdKQYfgRTS6Eui",
  "key10": "51krBQwRGCj3dC5gELkVAozDjD8GUEi62H3EGnTnuZTytVYxVFXwYQqhWz4EayFCEHjktyJ9q3F8efPWRJk9tbog",
  "key11": "SL9dk2hqgEKe44PkMAd3XrWJ5RuXW2ATw3k8PHn2wcYH1EhqtGWu1WBLF9kniKe4p9d3Uq2LG3sUtiAC2rxQhyZ",
  "key12": "6JwiDaxzFkQPh4LniJi8Jq7eq6Qe8Qd6q7kJ5hQyJ3cDr8KAS1XePEBS1LYAUTMUz5VXLgmjEQHLsJvem7mDBey",
  "key13": "4Nzj4uxebhzNCee3FQDumKaTqJcLcJWF8gMZn3QnZjLEC354qPMG1Pf4kkfeVaqDWajKW6Mbdw9UYSbLUd8Mxvsm",
  "key14": "47rVnCR7FDEeEMk8aarQrPGp6Hwskn6pvdiSEZ4nmH5SJmZQmbXDywuyh5yru8mmpmP5rnRGRcRn4dWNuU5R84R6",
  "key15": "3q2xjvVqntHS3QRQDPS836KFTejDGXYLMeFmrmvCvxDby39F6HwHJCxhx5cUg6VcAjpKbbZhtdA3t7sYRiBPR7N2",
  "key16": "49mtSFUEkdinQY2WzGLybRbQZhdjZtk3eKL2yMfurEro17s1NLdv7Vhqk2czSdNxWCxq1UBhf7gdTQVnsSxwSwCK",
  "key17": "3Q37qVNrnrTdbCz7mzJeTged82k3NgNKn5Xhe8HXeVGWwrq7yDP396tGM7R9YNymcGkE6hHZecHfUWmeg6WYzh2C",
  "key18": "2snmYkir5GKCPf6RWP1GrJGAqG6L7m8f5URYHoAnBqAEL6LtLnTM5H1CYvqkVxDYLjruYuSqnfh9vmg9d7isU4cB",
  "key19": "332cpwqtTzp41oM2mffqZMajBAcMLzjcRYismzRFs1B9We4aScqitTCLYvFofPSMXMTpijL9MuhbiNJanUhMskCy",
  "key20": "2P6U4Ay1VJGd8ZEzjCA5anEFQTXjr4XT2dwCqBDMWgcTpz6K9yg9rEZohoJsz22L3v6hwmHBqX6ag2kTTMdoeoSH",
  "key21": "rbY4ggVSSew6JkdMLqXqjERDLeSgjK71FdLsShjdsBjBEsEEasYtfQWDWyediprfax5uJgwMS1QeDJ3vBvM534x",
  "key22": "4F5ZtCWmKR2TCRc69uujQ8h1Wr2ZheZJZmVgbxSRGKHCfbLmMpUuTgbv2p2DsgC2VjYmEjwwe2aMnSo61Y9YYaq2",
  "key23": "NSeV8wsnn89yAGBvUchYJQLXzhVvEU3y6vk8KZs6jTQbwgx34Vjbhw64pu6GKvxhzVTxnFqx9civ37sm22KwS1C",
  "key24": "2RrtJELFtLo8p8M8tGPXYeDTuEJ5PmDKxXwUsd9YpuZXCdFSo3LyHBhZ3aZS2jMtgWWpdqYbEy4sEybGJGhMWypN",
  "key25": "6SSC4mpLYRZgQxBhLu9dg2V4oBFkMrpkswmmFvzTpDHXiYi1WJFurrbiRhohUSedc8HQqcDLo2cFkVRA4siPPHr",
  "key26": "5DQUbpv292rzaWHeoCM7Bfu65Kt1G4SnBJX3CWEuuz6YF2U3mmikusfoMYibH47DAhDxDjo8AizaTE22KAW8cpb2",
  "key27": "3hfnkmwPDidQeqCg7M9mpRHA2HVKAv9VJmKWT3Ex9Vg2f67n7zYcimZ7F1cHpkPtE3YHjkBNXb6s8AvHtnCoFWpH",
  "key28": "4u4Hg6BaK9Xqh5GZ1T4LZnVGNCegK6PBqVN1uPhBrx3tvar1W6GpqodeKk1D328sS5mgzjA3s1eTCB2CP8LWpqoQ",
  "key29": "4phw7fQoVQQAykVjZZaRHjmq8jGKV8AVqAfZEjYK6sU319bUR67hRsSAJVhJxNPDtZYHETZb1KosJCEwKVXP4zEx",
  "key30": "2WU1pD8eMeWASf9k4f7RsgwZboNgVKVVycEyytQpMSLiNX29PGDwedwKHHopUmVDAmeLS5Sbwz5ZoRpuTYZC5zf7",
  "key31": "2FyXXFmsTChQSB2XRTbkhPeFZDGzo6u58MrwuhLgWcSf9jzhumuNxh5AjBjDMm3hHcVaWZHn2QnejXBNGidXi2En",
  "key32": "39nLQTmQNgVZAaW6aJWKvcMGmnVsyvjMZbnqeiYLhxHFjTsUMkB4tcqTZgLyULeDLmF1kNUQnBgf1axpMcoVsogp",
  "key33": "2hD7BwVpAVLsDX1EobfHxyJp6g9sALc9svLkVg6XKgqNjS8wcbBtr2PGzpinYnRMf2YprKig7SGEFYiEBkEv7Cot",
  "key34": "64fWFRDT6fuz1fnhshEwXFm6unvJjPAM31GaKUEp3jXBGeGQ1nt3HUayoFH5Wn4kqdsT2SeciwvWderHmPQUjuj6",
  "key35": "2Pg1RTBgZikZedSUFsetfJ1UbnC1KQq19DGa2e1iTojaqQQQPa49sSEjLnfMo3vTegWJfdrWMRtgBe7iPAkB7bG8",
  "key36": "2xdcjSy93MaPjVFpowiPQ7chQpqXPeCvraVNgbASPk5N9gHnQ62e6Ev5HQDhqSeRQRpHNCPeEYSdJESMyuqk897P"
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
