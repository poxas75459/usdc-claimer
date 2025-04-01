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
    "PHGctX37pbUZvnDs69RXYVCnLSXKfXxzw2cZZeVhZFUztiaFWRQyjgRVSUfKEQFVtgMCUa7Nby6CoSZ8o81w3ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jqo3Eq5eRoGMsjygm82KBLW6SxtRqiH8oZZk1ZwK4qujgtWzbJe8snZ1EPuaEKcH1L3SQLD9J4LTYXfupPGUMW5",
  "key1": "2bKbuZh7gzzWfrqzH1EuYGNdJbGWr9xsgiqcvMkJyBtEK6jZWmWAyxvtDjYq2rB9A5i2gNSmNrDfeK782WzdBZNE",
  "key2": "4RcVhBfk8cXsVhusgzY2XoTBTgPofLMSyn5Q4yyUoLaiM6uxWuvQFFS5B148Pu8UYMBhzh8rrp9LRnbMcLpPi8AG",
  "key3": "KKHdEv5ziTBKPk3ar2GguLeZbArKni1DNksoXm8wL2FK9qJJFpMweEGmYQDFwEbDhnoEuRg9ANSA6KEMegjtnms",
  "key4": "KNjALtjUYEysf8T7ApF5X7U9CWSJJTMBRAVD56sc5FyMcTodULQgHsPLa1RpXfjHCgNyWhD3CNLQp44TugWyUaG",
  "key5": "5kMXjLVpVZXXmXLs4RtqSnUehgRheigd2qK2u9FmcrJuHKcmvFSX6izv6jYfXVgVFCdzLramP8V4LsX78g9iugei",
  "key6": "5u4BRwAQYCpd2muKjek47ZHoPrsgzC7pZkjtTseNU2ceM7aEqXi7oBpC7sEcMoAPtFsYRa2v3nuuSowPn6uxEyVJ",
  "key7": "3cASyVoohp7hPSx4nhZ347m73FGKJpeZyTaFbwDzojPKiHv1ouL8euULNAKUZLVFBRdiHMbjqoxNf4yQN1oFUpwD",
  "key8": "3i3JPEwR8sqhRFrqc3U9owQk6rWbQ2YjfEg6grYKNfsQNXDyyu6WBn8muJGj1q8v9RV3WrFLWxEWHpCt1CEN2a96",
  "key9": "37YHW8zMPcvrcioK23XCSWNo43tDTZGwvSfLQ5rZJugdcjTpd3D6AqoRJzF9e2AEoAup4VuuigympQkfxfXVx3dR",
  "key10": "jkxgSfznAjDfppMUMgJBXvV6YfrzYPSBvsy9DnXkTAzMpB1pd5uJuq6yNDj9ddTNBZy7R4F3PA5GuptQLp8kYZ9",
  "key11": "3yEuNUXivKmqDpovUCiwzqxY8uk9yW9P1NTnCMk8sRnZpg3uTGEp1jMxyrb3CRqja6ngG6UjE7mE44Ayhr641fmQ",
  "key12": "tqafqNANGBAb7fRt2jwFgUnWM4LcCvUGub2oAEuYWkLcAwGfS8ZxRQdWDTcX1yp9E3PBBb8X1YZbBuG4pQHpiuk",
  "key13": "3dNWgTxxTQfirPUpcpoWmhXoVCD5nKGHTvu9igj2DZiXco3wrpjr2vfnT2f3UMDpK6jQ2tdr23sczTMTowNNXQny",
  "key14": "3JxJtc7xTivdBYCCkydbmKsU3rrm2eaTor9HFF2mNmHNHeFvHoKybuqu5ET88r6mP4qNavaQvXRR7e7v2o7tXGou",
  "key15": "2RngFe1NFR6aR9zXDqbM7Z8oh9dVbqfkA7uPKzrn2EKFt3qS1Y3bd3mCrRztK8sLXBKbiNZek5oxaxGi7aQjjzXy",
  "key16": "4rqjB3SkpHsxQebuysncWJbfusEUNxSZYpZczVDXEC4PFhVK96pFc3ABqLmdJfAyvVqq2tzvWs3MJhZoS3jyD9ye",
  "key17": "3Rm9Sywksu2FpTxPN8fzpjhNSF7hgYDZAnFXufUTUgHHjVoYUdaG8havwP95GUJyxg8xqVb6LAf4XX1V8dbcFUE5",
  "key18": "5UzwuTS5fGosnEKgNCN75rkRLtfLEpUUp79wgG1KdyX2SGgCieSTsEXfCTg5Vpuvfs9hdVNdgREHVyA8xKkTuV6k",
  "key19": "5SDSRvwJ8d7Ex62xYBo2gXdqLd8GEgLV2sxDjJyaMqnGfA2KrKCqzojBaSxMJ8hkoWEVBzbQht1ZAp8bgasT6Ehf",
  "key20": "QHo3SEEoUve81Yt32EQgUDHSTMhvoJZ1M3hj6iJGbi3iBHPELGCYNc11E1Pc15nLrD1vREHjNV525SktrM2USmi",
  "key21": "4cLMCFgASh3vsjGUpWSoQk9ZK4wJQd5AP62sj8v1ARvEzSUmtCB3uiuTExzS8JRXuqtKeuvfcVJqn2b6iEMGwCKi",
  "key22": "7oGJpvAdbPP4jZcbrnih8UnjttiLM6KVn5vPzDFHpgwfoQgiRRT2Y4rZWdYJ6GGYwC4BvBeQSnfc4tW1X4YXCjd",
  "key23": "4dndUYMRmtQJE2tHr8xiXv67pwK3Q5ugz2fhvr4XAFy4tXNvuia2RS8wkiT167KneVFZCaHwRyY3afhWxGjQir2q",
  "key24": "2eqGU3nYM4FtqsQWmNs7EzsGGhRMSAaw1HhEwSHTFz5pye4KSaUaEdAAvSV6Sekvhp2ehcuMfZQ6gvuFAeKWKXLX",
  "key25": "5zzhnrJAJH9L9dnK1q9VvFdKezbGmGGACmtdHKX3NAuSAUqreDMZsjQvJ8z4zoG2SDu9mChcyPW8c7r8qLJNxmUz",
  "key26": "5Xq2MwGZm3kdEZNP7NoVgUQPtDSpys6SSHQ7E6kkfCaVQiWHbBi7LYXeBJdGsHrEdPbDz96ytmLbVaL7Y1Vph9sP"
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
