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
    "35ntSM7ZEPDvqS5PuQ7SiCrP4AyfruuKdN3P5U5uas91D7bejbJTpUwvU5hBZVtht3ev8iEMFrg8aaygrsquK6eo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22WPqdaJBDt28JSC3G8k5GbXtzzRQvnGQmWNpadmcGDCA7UdcqmKXmXiGqZhAxwZA5WRwvDVWVabFdQTCNXadvDK",
  "key1": "2YADgFPjsKHMKk4Di9Lzy6JYVFkpawonDgjjmCxBujQn9c8kQTaGgXNFeGdJrgbSWhtq1ixKooBDHPEgktYP7bTN",
  "key2": "3693Vv818jHGetJVSUTiXAwQFJKWryKB6di5LFLRCouaUNbkz6wRuoX21EPUAPWvXdGT376mWfrmNc9v4SAvrfqc",
  "key3": "64Thcp78syKFKcrsajsckeEbe45JQYytGPDahj8X2jVZVZeCDjjrTGuy5snLxkrX3fCwtSiUSNFD3U5HCQQfNhfX",
  "key4": "4dFMqDNZa3iuKuBK5HbBaz2Q1E12U1t5gYALewYre9jssqznQFigaiqAx14YRUp1udXADAsprzRDRbKzqcu5kD3c",
  "key5": "3UfDrGGK4wuj9AJDSdkt4duoRuJjcdgianqB4xpkR19mJPyK2dW8VvXj7i74DhiKpe5UJi8hSK87eow2nQMYM24R",
  "key6": "2zAH1veHfvNckmbjRrb1wZD8hBN6xJHJAeMLUiE6NMEkzU7bvjtFfzC6NhKY8SsteK2kgALpAdgpfo8DMAAGxLnY",
  "key7": "4puZKLKFLuBcLKkUWz57Z1TmD2QxWQkztC3R1jtRd9X2zokfkY33EFNcYMez3TwZue2fPn1hKFNZMKErjoCf62AR",
  "key8": "4tiYbywLBc26rFLgE75vpdRjRJ5VQarudLNr7MMYecFrZpwGuh6ghERy2Pfauz5tn7L1aqGLDVweZVrDuU1QXqEA",
  "key9": "2fAfcS367HFtprMG1RxTyJmMjfdJ5BJxus64Tsm47pGPpG9EGn9PpVmkj2A3LFgBAcdRZHSceWpKTAyY5BJTvZdC",
  "key10": "2jb1Tu24UfjRnqcsvBMBjdL9umWe6kYgK77mKd4iNgBfaQU6HjPiVJdPsgoJPxZPhTgRVUzqE51K6jc1wuz2HYDP",
  "key11": "5AUyuEnGQNozvkPijaDiPfv9wfKJfN5UDTBBgAQMtNN8sN8zsYnUxTKJwNv7JgLkrDnVhZvsyTKgCCtWpUGg9GoZ",
  "key12": "58Xnd4iBapG7PyMWpVKP6UgZUzjMSMwnFKJxsiFa9decmWqM9rUEih1zzpoH9GA2k7qPe5nLsVv98M8cb1ipgVZJ",
  "key13": "4uRA4QeV8GyWF6CYxJbsKixY3AX7gc2Hjx39qfWoLpopQM3HLd7uy3BBRNdq3weefoJygQ7HSL7jhvZYZMfphEET",
  "key14": "5KKxMHXrBQKrXTjNs6ZeofZADv2mAsZrp6njVZqvHeeRJn4ZxxHHCkrwD3QERrjoiuXX9ZiQFsPbPyne55ewZNdP",
  "key15": "5wUtwfejL9x74CmoCgVAYmeSBZBtWCPmvJxXWXTLUueUSMapPcqGZupiFtBJ7d4CbqsSFg6x2A5gsDhAW9chZowQ",
  "key16": "3D9m5PBkfeJdE64dYL6rKQ2fxFw9bs27bBM9QAQEJXr1tuJgZuiZq7LWxPkzTzrLcD8JXVXfXg8ajCMoHz26aWcv",
  "key17": "41PtVUVcVZcZvuPGx1MfH8WiNfja7ifD2i6JVpVmzzpKWkGMfZaYRecEJ4Mb1dsKPoRND4m6uvkPVfsKDKs3dAsM",
  "key18": "PqpSP4Rt2y1Uve5GvGdFbUzrRGzTG6X9cKTp2EivcNMxkrcGGc1iTJp8k4X7fNnd26YJXgGuL6GcgxFTyz4bYdd",
  "key19": "356ZHCTUU2VdGvT2Y92ST4gVVVpesjxUyN9fkfkmdjCLeWviB2fcwrbqb3MNBB9uSb8zxd31a4ecLKYShJ6LPQAV",
  "key20": "2uAK5Ay7fAhvT1M1DfiP471zWdWJbWcsXXCATqDp1A3GcYoBPCAeE7yehuB6REeeEKkCshm4JcexgT7rsgt7GK3L",
  "key21": "PHsufZHcG8UNavXU1HLNVqEomEboQPi7ZDGG7ZzGgfozdVVu1Bz9ANJAsLMqX4TGNQxGnSYkm8idwoTXd88DPpM",
  "key22": "1KcwUqjq5J3NYRGKCT3jSi3wZ3eEUaCAtk2rNYrVGRgiMB3c3SH6WW1w9edyAJRGoS8GWBJ8e7vPxjXScHF28Sk",
  "key23": "2V37NANtNURhe83fa4wFzUST4dr92tWN1iiwdHfzxMjNrt2mEqkB5DtwkVnVQW6wmqFz2J4ZuDd7iFvncNcxF8MR",
  "key24": "55tpff1UsbXoYH2BAwvC8rpoYMZzgJsr7krr1s51gpUj1wLhARwBh5kFKGvtiSi51dGUatGcxAcm16z1SN4xmc5V"
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
