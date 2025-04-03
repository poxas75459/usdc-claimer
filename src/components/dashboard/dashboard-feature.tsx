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
    "5NGhd2FsPZrTFpoKLav8tfFXjpqWt6PZKZjeMN15RfXhNARjfNq3jLa3xGDKYXEFQLdRGYd4aUhuBd1EEbfKb5cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34o63P1DWrrj5cGk8WMgoFUbhJimnhQ2tjdMqFEwnZcJX3BC94AYwsybQAf4WyTDrFhQVn3AbpMcGdykcxewaSAG",
  "key1": "5ysyVTACPd7gV3HXwKJdDzLpdUkSv288uCXkKdvoT4DoSVdUzhXTtcaSFxxpSWJ6UGHqrTm7rYBMPXPgmWXKkDva",
  "key2": "3t2jWGtdCHqXwdtHUVqxAdJVtKqMRdSYe12yGU9xArv62yjH4RRpNsSyFHUSyPJL2MVJ7ynEE97x1q7nQXv4wv5b",
  "key3": "36NF5Ljk73a8Xq896cEUKxggWssuzCaGHCnUc8vRuL4gKWnyBybiQ4DEAgpEqe7szCjAdi5UwonTUgs2uJtozv8s",
  "key4": "4931geUNXeXitT37FtWAwv3CPcZ1prABukZAVNrqGPwNwXxAzqJw3ze1KoP5f9QmyjeCu8wPmdANiNMZ6KFsfGa6",
  "key5": "3hdc5js3CbJjRRh6TQvvdR7PjNpjG6BH2y98PA6xyxxHx6JAds1qKL9azVKD1EWavVoxXnMefyMrGko66rj73Lzv",
  "key6": "3b9APRvNK2EKDYUGHMoydZ9VTETGuGn24TufQMuVUoxHFCccJNXGWZxgaYfhMCavCBvqgbqedDm1RGLncyGNwv7p",
  "key7": "5TmN54rq8ZPBjkgCmTfaBDzCJ2CG8NU9V4AZNhbbHCbcT775bsRKgcSZ54th5NjgGbQFszhjdpUiMgStC11jqfLt",
  "key8": "rRL84eqoC2AiuiN7aaC2kSuk9XUWBczaYXtBKZS66jBuhoL1Xpfm1VrBpYXhdq5YvYwgSMpL5t9WxuBkqxGagTp",
  "key9": "wgi29P4kZra1NfHqLYnWbb4L45W7ZeE7NrhaxthpHLs38qaK2bW3WT1fVTWGDZBxwWUoVLPUNeMR83aFtPQjo9Z",
  "key10": "5aF4cjkq8RfW8qcmtyVb5Fk9DgDGQm9cQKwqv8Jd1BSAr7ptSAnHdnKAtWBzgDuVkdysDcX8ahvhcZBdHTMneK49",
  "key11": "XCzAzeJZx28Xb8FZhqdmsvTbG8izfwy4MgqS7XUc5aV5cQ1ZHpk3aZuKGZaWGa8VZLFrDZZiKkjh5TZ3FPjV43V",
  "key12": "k9nY2Fxy23fi5CrECMzTZJ6LzeGN83LChupiMRPVABobXnXNeipERoEy7gF4F93fi1QPmcopgwXggBVCp8N7xFi",
  "key13": "53WPBZU2uhPFCD5HApbhyVTKzodzMWRzvzVWSy3pk7E6RkJFubEEqBZanGC9eYnthxvvPrmKPLM1QWnYFTZ3prTh",
  "key14": "2q6oVTiaBAfKcUvPz6wjqK642nj4cFAezoFEMbcG9AozQCFAni458gWvwAMQnP5y6KXPRHdJBTSoJGzFgjmpPYBF",
  "key15": "nfuNA1zphpZzWf6MapJ8ciU7zxvSCJ7uTJEpXTmWTp7UDmd487fuQmNmprFQG18MLkgs1BzAYQiqkj7PmKMvMrR",
  "key16": "4f3tVNdfrth7mBySNTpWjhUHXwAtw9mGh4MMEVxwxG8sMRB4CezHdnjUBdZRDJ13HWTEd45fwmDQigV9p5zHs2KD",
  "key17": "2GxgTsz4HLnff7Jd2H2CtnahmZpb5a57W7rzMRwpgPcYz38DTStSjqSXctbCujKo2KDP8XYc6KNhceVEFkTnXXAs",
  "key18": "2xKikdSf2aPDYrcjBXdrXvgceHKczx2AqiJJ27APxv9YNzwJBFvsk8gkqWX5h94EJcTad8YcQk3ZcWvAeVkkPYWk",
  "key19": "4MLDSuHsoYovJnQ37xmMMoPLtwF9YjHQ9VUN24mEeVtG3d1H7xTSVmLFTZdzcC3oH3VpsWwpnyJj2p5uL9Z4uAoR",
  "key20": "471teZdZMWa3vwecCRqt5zyFjnTk8yFCwjKnpxjAuzL8NXPQLUkiGsXJpeyAsU3EY3wUMrbwLVUcSknZv1W87AMS",
  "key21": "25vo3ESkYKU74KLo1c5thZvSThmSZmDUtnJK3N5hVk9d1Mszh8aNazB8KxKKb9Q3XLqFLcxGPVf73BkY9oyftvho",
  "key22": "3Ga2Jb2y99UwKFpn34EJCxcG2u4s1ULjG8HZdQUg4RaY8hb2yCfhUcd3d85zyqJ63d2oZRXQUtRrUTAWY2T4sYvA",
  "key23": "2xYTSrp9orqLV14dWTiTr6WFE4ZrgRwe8vtvEsQ3LREkWraC8M5GvoU93ZL7uz24ugedwengY4wm7YfKBfqCPD54",
  "key24": "5krTG2FGzfSSB1onaReioaGs2z9SVfBduStLhPN3j8YqWrdkmhijWmA4RwN4NEMDXiXs3JSRNgTuKqQpkUwfRhnx",
  "key25": "qK7km6npV88hazM2HZ4S7si4ybDa61ns4Yx2VM2XnHykfaKZaYVYtfB4BndPbtWFo5JeZMKVYSfqY6rUat7B27W",
  "key26": "34h3nUGrBZte8iAYyguzr2VodBG8PpEGRut9myqMZUgQC1ECGiKcmsdaEHLZXPd3GrQuxWjsusH8tSPuL2jx6C9E",
  "key27": "FtWSh824wghkNKHDYJYdfsBftyd5v2qTAjRuEjDAfmBZKajqBkYNMzsoywuc8ZT7bdbQB54PMeCiTMrUVK1qHrG",
  "key28": "KMDwd5Tko7UPatYNJz1xqLUQUKT2Fp3pZKvhSTc5N9CQgHcLm7V3axQarjNJYoc38AYsUTGoygs64GgG76drnvz",
  "key29": "5792USnXZhn7NHtYyr7VXurr2M5D8XbLrLJp7kkgKbTAEpCkYL4FEWqNNqMB7FKXWx2AFcmkFoMqzTgCSpm1qyyX",
  "key30": "5NQkBHQnsWmSfroaSgxm3FKerwbAdS3YqpXC1xLvBfqhPTfZTMU8XUshnSC88a8hRSPofWAaa9rCUmnb2FCE1sy3"
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
