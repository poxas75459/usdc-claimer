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
    "5qHqFhr8xZGAHvGLWijWUfg4tuaUZTkNBM7Fb1hYz9K7fueyDSEkZYFfxD4ohXhredDUUD7R2oXp6QopwCQWYngJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jg349wtSmmDsPf4aYSHC7frbSz79sMedD59KvfHsvX911MTa6vFfL1JhGAb6xQBmct1hBUWDkAEauVHxjyccXSy",
  "key1": "4L8XEgTm7tWCSgoeGYQbZjXuLF8Yr1cVB3r8785UEnpNdXNmrNeuzJc7j8xczwWvpDAjw1w3Bax66f9BGGEt8uZx",
  "key2": "4XNrqHTN1uu1ajvMMoAEAMr7Cv3CfkpB6PzhwkgzYNK7wqTVHuVAKpNfkupYZd1XC6pYWDaah96vPasmyTg3rD8p",
  "key3": "5x9ARwTj32Tmp2FDVu66DaLMhpJEpNccfyjo2eFVZ9nGL4C4PjANuUzXKbrm2hWBRL1qibnrTbpSZMj4mnMhYi26",
  "key4": "4jPR9QzGzkVUb4j1ima3RPWS9yAe4ZkvNDevk5TkvzThDZPQc4TWn6Gw6ebHHpZqi5xr8Z9ZRzpiqUZMq1P3CQes",
  "key5": "41GPWfrEqnXWQhqdQ2g8XTEwkWYmFoT9veTEYBVwj8KDsuZ5XNEhMJh7yzXv9hZ2u1sXyebXMq41cVHKauD3huLM",
  "key6": "3NVYDHjPVEstLMtJTph6RKWY7SqRtNh2xpDHt8rHxu4ngLzDUW4gZW4Hp7rN4WfxVwpSVn7yFgQpnL5jcYaLpJr2",
  "key7": "4ZfaAD7Z2RdqKkmF7tMY9aMLcKFvEu6ezVGcMo29jDCT9x7fiX4R5MLqNgp67bmyRFby3eshsUKSY5yxrLwN8t5T",
  "key8": "3qHwf7WCfYEmQvGqJrZ4WZQRCXtpvFpjQvumXD8dk95xEuVtW3xveNUiwcNLEwgRbtJjnwQXCdp8TPAuStxvHVi4",
  "key9": "2NyCcw3UfTXpC2nvQaUxjn8fpuCc53AzAhQyxhEs1KKQSiKX9Eagf7E7fo2n49nLQ3Ly13oQqT9ZXarnL6xAGPi2",
  "key10": "Sf6MgJwNTUQrgFrB6g8AoYHuh32yLx8nwF57d6yUj6APWHommCUEzgKL4XsYUPVS6csqMBBRDW8WQnA4U2NJXaP",
  "key11": "4LgpgQL4HcvQQoi8ThejPxEJZVUuCBhdidJzcLyb37UCDMvnx3YKgn2UuKKFkGKdLNswGYLScm12qsSupRPFiKuc",
  "key12": "gBzJ2wkosyHPwo1anomkAkw222Qfb6hEqNd3DtXbgvABtTv3feXmtYr2nRzTWCQwVQvxkcvqTaEhLEiNNGUwEHm",
  "key13": "32CnJDdzECwUKeWz67fgBkbqJHgTQSkyTwcKgLHcLLDtd7NCmsC5nUau9VEEgoggcvcUuNGWjB4ZbMTkRGaDfjhB",
  "key14": "dozh3AjVvK339Nu1YXDESXTvQzewuz6hKbwyKKHJMmYnQV5p8CfH9qtLrCbzK6Rthyg4BqZUNGpGBnG5xXbghqj",
  "key15": "3B7t8Cq5WNwLRYJfGSw4Vmxo9NNb6xKsGoKzwXxY869rMQRzM4ue5vkTR3gfbLXQhqmyEuCf7DCgCwuUXkHrDAi5",
  "key16": "3Dg3buo3fKNN7BZzbdSVM5Efi79AFmpsbSzN6wuEiDMDrbLcwPqxtAxnXu4fTXKhPBHauPeAx9VgNgmm2EubaeyA",
  "key17": "5UExsQaADjDMdcyd7qhwdVb3Dz33XcGgJxt4LB95WSop2DVw7HY6ufeqwYr9UBipjn3ZbvFs7uAC8zeeazebTe5w",
  "key18": "3a1vhwadaUcVFVtiJGGqaTArWx74fB81aZy98mCqKuVNzTikUCWP16JL7haUrXMdRALPSuoiEPNnUDKLkYQpy67i",
  "key19": "mkdhPYn6e4N5xmWRB7881xfdqbHpiTV72d7imgMFHWv3JvqkbFVF93EENycp25R8HGqyZVkU8Kvwsvbe5gzQTP7",
  "key20": "67aRrsb2TJFMZk6vpSLkUfuMHAeLGS4y6mpLdzDUqU6YbFhKhj5GVbYrCcec8HYDUwNHnbKsMFnGWhc1xNHDRRhi",
  "key21": "2PvP7sZLRqGYM2wU8VDRghSSJL141dD9hDx7emeyWpCHJZEk37A2azFUSCptuqutDdrXnQGqEsHpXUQkkLka6XwW",
  "key22": "4NgXACX7pm3GFWTLeqFuRQv4LyMZKbyEhtGx8dwa4tLVw3119PcixLtYypMgkbxWthZ3Z5vtLsSZnNgVFkRJBt3N",
  "key23": "63ibEWwuTKksSxWWgrXhwjrbB6FXa16MVv6VZzCppdi8yMiZvTwg3wGeycsayr4SUvATtXDpgsZErVMu5Lib4YEM",
  "key24": "LRDVkdUzUBFwVK4DpTUSvHZEBTuayEMikZPpuem64Lj3shfAduD88ebLATQr2dPrGpxq1P6CdcbdFg61g3mUbLN",
  "key25": "vQeeKwXVtToLdfuJ9cXDt9Re6HkpiEtdWcXPV6rTxUmtAdiKoyvXbNwNEWbnp2Sw1Hn3Gx83vRnn1oByCZJT9Na",
  "key26": "5GwnrBfCTxmWmcVxvjYzueQG4ViYFZWYbSP7tCTJVcKXi9gNW4cyBq7MgLVLVodoQQuX4Y4UZc3WnKj5RupkGQgf",
  "key27": "2X1ygzdonhiYWHjEDJwiskGHfDjE711AsQcmMnW5Vi8qGyqMAjKrkH4GNoGiYohBqYqcqPDTiq3EMxjqzFLiwU7w",
  "key28": "2KZ5yfWeZ4eL5bTUvP9T2L47mRkYgpnJonbqYzJemGerPrVJ3sraPoz7aJJtGQWWFRLqS9g9HbdwCewjbADJdns9",
  "key29": "5enkGJAukr2r5rPZPK5KhfabwreuAETYSoQHYa2NJM2osRDUqXHRswMCcLUJwcTCNgTLnK5cK1KiBZMYHQTbikqQ",
  "key30": "261SdjheRP5yGLTQTBriEgqmXfj4qsVJvmZTqPbkonyHVPGoq1UQu3ZTv7xf4KePoxvwBUbJDBiWjFG2KYsR5eHy",
  "key31": "4nRBUSk1oPuQMj2GXuSfubs5oaks8N4PCFA5AGtXKdB7gtQ1QGhfCWiRNFDuAs7ZnagXKyuYN6A3zMkyyesZFWVs"
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
