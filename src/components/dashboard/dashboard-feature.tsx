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
    "2mpBnaKmZx3hwZBDUFQiS7q3SvUDNxXxJuSeoonBw8Nq2LTmmsd1Vit9YrgfwFr4KqHmffzkw8No5N4DdKb9tyJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JHSgT1avPi3spjGbYG8XshSunG5EA5DXoELHUeugRYLWq15twJKD3o2ftVPuMwabY78ZmVkgZCr2pXYdJq54Mej",
  "key1": "2GadVHPXoZ4ViiwE6mDG4FiTCwK7iQsvg5TFKETFgEnpcJcQkmDDh6cex2rqgLEyRLLQRLHKPiUeMfTMatu32hxR",
  "key2": "3aC5JEreXQ4d6t2Ghskg156VfqJeRA9JfY3U6UT5vAgEsiG2DumLF6wbvnPGMDYf1hH1Ct9o6Qybks4sSjijXPNc",
  "key3": "21XVmYF8Qy6eWusxfn61ZLzGMpsK3NVTRdLmN9KTwuouosgbh3LyD7DixeRrXfoSiyzQ3AHbePXkYsoLhYwPYhQR",
  "key4": "4P3Skzwa67UYPMWkTUZTyoF4iux97ZuDwnvvLBfNSPRAkryJgcccqCbdXgdM3mbb8aQGZ3MAkbngfU4WaXAL2SEJ",
  "key5": "t6KyDL8HxjaWBwpuYQQcjbLoWr5c2fGCgPbdc9rSs9PBWEztZJSZvUk3xFHchYjxLsciFsYwk5zyBdxsapAZoxx",
  "key6": "5zAHTaf3ggH9bdVvdrf7CwnYNZok5W3Dt1hAzdJYYg1kB2CM1f2kz3FWMVrr8iMnFtYvHtSRCK5X6T3yFRDF5Zex",
  "key7": "2FQVEgip6ZjTgqXHVMEpEyQLZgans7BfEPF2MvuzDsh7GkCEsLBsD2rdRX2tjK2DkXvscWS2VPPscF3rsRVShCVR",
  "key8": "4M9eo9g7hK6LpJca5w3YeArmNQAJRmpoCjwaBCFZsceb6y2VpoWCErt9tHGiQQA3qyWRNuJxFhgEfoC9abCybjqM",
  "key9": "5ssw1N6WBzhVdw2cvZo5MAsjauWMPJBy7MWgo7UMukgjf8Su8GvxiNcvQrgxMdCgomsStJFNjQhHbbGFAhsyXdyy",
  "key10": "5JfzdHGDjZquJVgi5ZEhXBQwWYNC4GLxhYENijbjg8MQ9xYdwjM3mpJ4Li94NGd9u3H26DUfSuqVeBPvkrEG82F9",
  "key11": "53gFLDnBaM5L2SENXnF5zP86qGCZbC1Q5idBPChN8ADa44aRMzVJfbaYfXnqFMeQgtBQUCPJy2gpzpTz3HVX4Gzi",
  "key12": "3vuzHvCLNg9VNcPE1vxbDcRzPhPBVKcj8XXJBCXmXdiZvRMjMYdzsvxirtDoz48hoioCyGxaMGuXgVQ23CC2SQgz",
  "key13": "647Jhrcsbd8adKtdES2Es15wrmpujAWzpTEK4vNBYUSsDimfCRNA25C5qKGujojxwhKXuZhHr4KGiQgYPFGhnXZ8",
  "key14": "5fTN1hFqzXAWAmj6zax8t3wMmhRUUSGPf4KoHcJqxYFdGoVEUhwr6JiJBNGayVwATnG8wkSDWhdJLRFrkA5s16mR",
  "key15": "4ff8VjvJ9qSMkZpZKnd6s7z5JRRetLh3NCxsQoztkwrVvtfULuscRGDpWZDb7Ho5XYNmZiHyv6qbQdWWHL6jqUMG",
  "key16": "3WJKLNSf92g9vD6cRdhtcxXHms8q9JaaEP8U6BJrsRRnejhda8ir9gVdYTLa2bTUhMevFCC1swjya1X11eXLHQPE",
  "key17": "2DDUsVRMco4f5aUWZnSqLaRsa1cEk6qEH6r5smmyGVpPcyheYxY5AVmRgprq45j3xp2Wj5Y28xHwfbeZJfbsmEZz",
  "key18": "yb8Rs7AcbZh1ZUBAZ4gRLn47KQAkYHBudyMCMRxKfC1HrwsCCgFGRTGYYaRk1k4iyLsvKCUTh6TZFXAN5v8r51g",
  "key19": "4od31MKTn3ARGRe42JZ3UCZBJXuANECMWSpMsgHHAv2ecghnjYVbzno7LSmYq3nN9LDjjZeRS9DUHappKJeCRNmb",
  "key20": "2TgVrWMoj1b4T8HZEjKtrQCgQPEPaKioa9rLQRNx9x4C74EWu7oVNDiFtc8woTSn4EotMjvRorY72y261PErJaTH",
  "key21": "2YaQUznJqAikejxKXHtUPPfHSJ3LkNCXm3ua9KfSuJg1TLRYN8wbD7Vp1sodKxDhs492ZpYFgarEySwFygqRusQ3",
  "key22": "5boxV2VupoohX9cvgkf34RZAWGvYyLMBfHV1JNR5wSRQ3Noi5faWeXXxK3UuPwNSHdsHxSP6dk57Gs8iSgT7JZNa",
  "key23": "2TJJJJd8zHzSk6XMz3zRehpBNNZuveyEUYdcNxgWkyyWVQ2HzuwPiShmqj8KanShXwonn5CR8VspQEbDJy9QZsw9",
  "key24": "28THg9rsdPP6qhxoqn5F15WaKfTmE2nGMiJmCdc6aavX7WnX6EzqyX4uRW6MMzXretzREWNzeWkp8FXDUgNyKoUC"
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
