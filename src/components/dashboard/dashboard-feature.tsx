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
    "655ZRG7cXk6PkMBZ47FJZDyovZ5n4wahqyXzA75DjWzFw8HLA3iH9xTdp1oJHTR13Js2yqiLhMLYkEJ2H2BRe8wT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n4ugEwQowoVTQZGzKGdMapPh6WMKfvKA2QV3jEbAVM1VdMY8raZ7Q3EVG3tu89TVgKvdXQrJYH6dBpFAeGuw1wF",
  "key1": "3KKMgtZPh9QCeNedvKc7wqdsqc2UVrABffZu5oJPGtFmq8vv2ZEUNnXrnCrBxb5DVYQTtLsv4EaGUWWE87bfzNin",
  "key2": "27hMyh2hyuT36yLS6sZR1wtXuck1nLUh9ZSDRw8eC2qUkqWUvzG7NBVMEg2bSr2J7r56S4HjoEKkwm8Acp3DDq77",
  "key3": "3X3vGBWzeGrn8xWxC4C9BANLZuyT7CGoytWgfaihsgiiPndb6pCbKtuPTmyj8tQK44DEu2HbcqJVsaorL2XZnq65",
  "key4": "3ZPVSepah9XB4zyZXS9YfrNCN8V5FPwSpjGjJZrHRJEPCQKfuGyNhV2r8fQj6EtvYEgp1etHPKRQHgJtdNFVhMUZ",
  "key5": "2AEABrBDaRHmtvbz5i3BQ8h7r35ofpso7yG818b3C9uUR7cDNmP6UqWTtqFCtXX5LZaBgk2KGWaA3Fmzdz3LAujk",
  "key6": "622qFNdGuHSLgTEWt7MfVRCSbXcLpoH7fLE7RQfsyUAvg6TpcDBPiYHAYFoeFCgd83FGJMBBf3KeMT2P4Cd5gsVY",
  "key7": "32se5bCxjHkR8AQfYSjQF1WknP2W1ocs43fpheRvQBxuJvW4P8p6HGLRWjj5mgM7SukqjnCEB6r7wpsBzUrod1Cp",
  "key8": "4WBrooXCiLqEEnWqdBwWvqgwCxTYQiybskmS5Uwv5tGYFJJC7W2rzr9YuA1cSS2JW9jNt18GAbo3njrBEpdrK8Do",
  "key9": "2BjZWF2SSaGfN8Mcwwj9oonhm6CeH3ku7eJ44JDj1f9fMTs95KUHofLwpQQkDJ3R8nPWVzXdPGr3Wp4qw5VRvi7u",
  "key10": "3GckVYVrbX113kGK17gZzgFMfeQEqUyJMEcFm5TfxR5Wi2sVvZwTqUmY3FPSbXW8wTTsQMRFet6g1qQ4icGwkcmk",
  "key11": "3MwwB1rks5Yxvqwt79HPxtAn5ZkcP1KCdvDKAih1Y6HRsYzVWsgUnmkyJvZfqq4y2sRPV7L1Rhc3VxcWxAtXJZug",
  "key12": "4QnSWCfgTecKvovTQ5yNwpLpN63DeHDo7AR33y1V8iEA9bSzu3UqorxXVpye1nPGMNL1SiZ1BQRYrva3ubUxVUL9",
  "key13": "24FVgmTWPnE59f7Pk8ot7DQnmp64GAVroHjtSQMZZGQH8hkJwkvS4yAFDRSMWtpmA3vcd2f8GMH2A1vNruLcZRa8",
  "key14": "TJE1VXNR171geqzfod8816N5At4nJhujXJCKaiWrEYxFaBuSABBs2HK786ghh8x6WkQpagwd7AYYdxWywDyXErv",
  "key15": "5m6aybHyLF7ZcACtebk99UZcV8G9UKDyyurYTCbh3qMfMLygfHgWzMLwBq8w8awJAQ3FVuGcMU8aTscH3yxSLsqp",
  "key16": "3Q6R1Xt4QDq9FfidtnexmtBw4tmcddy7fZeAWfXW8ugnABgqM816wjjavFPv76U86LUE3CMUd46zdmSwFM72u33A",
  "key17": "5sePTXRpxa4LiztTQkHDaLyoGA8gjng3GoB98DG1XapwhuRusrUVARraymA34ZsQL9dAuh3DQiEFPZwFN9GyGiC9",
  "key18": "3Re49ckoveUQ62DLhYopLMgMcvf3kVKHaBtPaLzMTgvsk4yHYvGZ9p6BcFafmfLLNt58KtBZsND1RnEkWD91z3rY",
  "key19": "24J2KpPAnQxVzogeKXDAhYREqjfpybDwsNZvfuKfbEvNnFTHBpNZ48wp2zFLJNmvz6pJQkkmZGx2KRdbHkrn4Pep",
  "key20": "njpQPkt8DPHFjDLzz1JT68DbrDUgpfbSXGK2UCD14gU4NeKeegN6i4BWrTZHQNbJYPEnA8ikCGB25fsjk65mYKv",
  "key21": "3JCGdi3He79R53JefiYTkahTsMMc51pNfMg5ZecQnxQqUoRXpmCancJrWRhnVniuNufHmNgscSkhK86MYV2Vwx1B",
  "key22": "ge9YtGnxxwXcHmv7cgsw2vQWDmXGiRDb1hNjN2d5PSAtzZ4h5yEErjfxGjfHJ4Cpr1SujihNzrr6EwfiGKwDTUs",
  "key23": "3nGY4KCwaZAWRjrwM7spbqEz4aZtxeJM3VpW9GCHXXv5nocRekW15pxBxV7uBX7dZYyBqcx1U8MJch3A6GuiXHup",
  "key24": "365kd9hpDaHSBu4HyFP5MoK7fodwh6f7Q1VCnWZEjRSpTXyUk7RaSjkwV53iC9QwKE4XqcNm5CiaMnvsMj9X3VZH",
  "key25": "3Mqimgz3F2quVu6z3Bn6r5JZPJQpgpNPvCaZMsW86ZE6BHqe8wvXirKmfyq5hRKr22cG2esDUoTUrMLLiWjqzdbw",
  "key26": "3wjkhXynvP9iTHDFzMM5K3jYocamnT48HYx7iEp6mnmVZSVQb9qorc5mL6hnsmbf6YvjUzSbJjLHuS8bqSxzYeJG",
  "key27": "3xvXao2o9cC3zbDATUmniaqASgLXNEsj7vsCeh7fU33Fm5Tc5ymHzSLBtErr1r322HRSiHkQjriwfJriwRSruUoL",
  "key28": "428gCfkEvT6ueSr1Nc6YydSLY18t4XN1uXrUyDVXgybjtAwgNugySPcjuzQFt8udkBpwf5cfmHUuhaRNCRq6aVZr"
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
