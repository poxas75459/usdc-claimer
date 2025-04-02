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
    "qXkuUX7cA4aQPZDtFM6CF2BQ87o5m2XHJwzX3x622AYcVuonNQcNRCMi56ZZq1Mat9c6ViRi2vLjaeZ4aE9LLuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zMKQd4nKEsrs9Rser5RsUU7Q9GPR2FxzuRBDWuRjJrnFwdgMdLKH8zSsUY6xBLFVwpHEGYC41hLFa6W9MRU5cEv",
  "key1": "UthgB23z9YU6TjdLuTLeco2mJB2tUgXhqxjwV9neXfTNnq82bqmaCpgEmTfReqBbTVSSQ4g5MWSK5FpNBZmHxRc",
  "key2": "34pK5Nfqz5115JC4KT3UJDoyNEvxzqiKto7mE2hZ8MkDEgZ6jHB9NdGGtp3JRowQjztvp4Spg2YopBfpoQEh7QHx",
  "key3": "5znqsE35mhBgv4ATc1zzJuAxCzfYUdUPx1xjJTCFZSZMbEFsiY1mzxLhWKdP1X1C2mRyjuisPTpdUhQavtcQXyCP",
  "key4": "44v7Z9EP5kCDprzBfbkVwcqutTXcyzZxFVcKiN1ExkiXfVozQWyh1RHZUGgTm4JRaGDfAjMyUi59ieG3zD28gqGb",
  "key5": "24jfxHT7vJdqiehKwafhBeJUbnWzY7ZdgzEYFPpmCMUju9ch5GfeDFYzYFXcpA3nUYpgfnfb2yz96bwntGfYMRWw",
  "key6": "2oHwrB5PueAK3be7jLCuHExbHKvaf3TwVN7Q6guqe8cLUnw9yssXcRNdgtJDaXzquDVMvwVTwDoCAPMpQJmYo9ko",
  "key7": "2QNbY26Fdgjh424AVJCsgx2bnSxfsWH95naY7aVcRCoEkSzEBXQJy8Gufuhsujomu6A32ts3TspgBGEcbrWx2WrE",
  "key8": "3kypt8Ld5bF1u1g3Ph91MQ8jdq6VQ6HzB4CX8NsCTzTsf5o8QfmxBJ5vzqaPmAhaDxFnPKaFENJX9a1kgdAqkRPQ",
  "key9": "Cp4PjN9XS6eRFTKgBqnHt3efMe2k3KVFzMwsPsXf79gR5RSmDprPh4kPusv9HSRd2vwy8TVyUo4ATNZuLJNj336",
  "key10": "3SjzSDUHi4AC6WD6eUtBDNLoxLPeACWFEKqmFum4SqGR6G7FeyURxZ1rxRHnBABqQ8oz2VuC6KErRXmsY75exDV",
  "key11": "2gvmUWCmcdGKzGCUZwAcurCzQNt4rvaD5GTuGPrPqfQTeRC7Aepkn5V3miaT1tCnygXcMwCY7oAykrKTSoe8wkaA",
  "key12": "4vLyrzhuTh5u64d25VMiH2g5R2LTzygbqCBdWTGrfnzwNYoAy14aj98b5VCLJYhPLE1EQTLqQBDPMqJ3uDS5coff",
  "key13": "2nYyvoxqL93H1yfXCKnYXcEp6QgXezYbsMz4kUXzj1WFAerdH49MDgsbGbefLzaabxXwHepHUbERFALo3vEMbXvN",
  "key14": "4ZAU7vw2Uzcoi9nfX5HTbbRw4DMxoRH1VY4wpfCScDrp2qvxDnK7kuNjmQSRzrascrMUeNspVvYuyRn7NNTebavd",
  "key15": "pn5quks4rwzPdLqLcBCKAL1pg34U5pGLyrAdFBYZFC6CmF3R8RspECtyPbYwpDsSgtfrvJ4aMgzCiSXRwWeNVL1",
  "key16": "597GEFhYTwyuJboNJYsq5q879rbzT6ZrkRn3yYyEiBbvtrHrMNLYS9K1c9HYWa6XvKGdaxSg9taDn1q6D9ydMiQ5",
  "key17": "3hvVWbZRts8XKbSNssGZ9eCJifcMwgRzkynqmgLfTcKy2vJzfBRde61f6UbKN1MiaNaGBfTtMg6jpgaJ1T2E5Ls8",
  "key18": "3GCe3accDfCqBqy9uNdVowK7xM2fyn44Z7vN2XkfqnXBJTnqBENvR1c4y1hDjsjAaBnVzTVrMKRVY8APd7FPnKMn",
  "key19": "4DpoCHGm9Eg7rG344Yu3uGzwfch7cfSoJ55B9BBPAtxvDCdPsEheWhZsCzStbtb2yHwH68GsjxKWdjx7dVZjxZF4",
  "key20": "62p7QAam1GAJNidja4PDrsTCrDhaPXXKSCius3NCynHG7jtB8TJkhMwwRWiNPT7nHeHvkbMvsrJtxSUzzSbmPs4Z",
  "key21": "zDbjtDgVcCxs83pMGuQYVocdNUd13cUW3BQHcC7FKA3EpfUUtHizTmyRgMjRGmfgijb8bhj9KFgoHrA3S72TVmE",
  "key22": "3fx4M9qjB2bHpyRLkuvSSUjBtkX3UNmmwdhACuMVVFkZrKdJmt8y9DSWA4n9UsKow7K77PQMZRAAF69VZKuM6kDP",
  "key23": "3rMcbM2n5ZDqP8sdkDKpnPuemwSSAgnwhwWjM7u5NQwoTgmMEWAkYaPA7YoMHkYtza2vxfZ3eHWjzAqHjdzWE6i6",
  "key24": "444GeVy4qaEZfoMjUGCDEAYrz4nkfbb7uUaWX32GqGRBNutWA4DZPSe6RUSAVmCXqT72BVBcd8GRpavarjYikutL",
  "key25": "Gqdo59H5Eus4b11pv6vasHPfF7JRQ9cR8Y9fY8P5gyxdWQzxpuazB4mrFNnzGehn4g5KhFJkrmPZDUNDs723cuS",
  "key26": "vAYTK3cQbk2Vjd7TsPWBYBbzdhdY4NtgtmnihgY4S6tmxmXS2S6mgZANkyDEhZXonydjfnNXhwCRggSxftLHiR9",
  "key27": "3er1bRoHcdbVE3oLzmZGnLJrUxj3tx1yZwxjsEmXLx8mQN5NtswJF7C3N5r6zXMHNW8ayat3dsAEogGbkTGjC1Bb",
  "key28": "2sVibJHyGeW7dTCn1e4BEESkFwDFsqSU8YUh74XCMWTag9QUNNLA5nUg8iohcM1ge86ZTFsLLki1xgSVkrxoxZFP"
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
