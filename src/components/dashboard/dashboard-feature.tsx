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
    "4EcisntxXLibRHhokDumSPtGNKnmnVNYaaB6a6EXuoYSibW8WMai2ds3r3tSvfCMkSn6GFm2piJX5nuFf85Y7pay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gytbwY7RMtCJQ81Xmyog4EpAoSEFuHuTUphTxYeAPdtSeFnambk5pzYPP45vRXhVzRDgdAQTcwmjAabtbRUizEr",
  "key1": "56jwXwHCFaMjYSkpNA1t4V4z5ueMQ6sxBVjvT1AhKZYZB61sUbVx8cuF4tpvtLX3LEUjY3Ttc7c5svHEi2tc4S1D",
  "key2": "4nAwcGDHqxzB7c2JLAC67mVfHvJUjZfSUd8S9PvTPKc3WNVmjAhidQz8EmkFZjXzyjKXHQwLBnR7oDsBeDT8cuBd",
  "key3": "23rEX7oJbGBUu2w1e1A4p6UJNxZdTdXhE7LCVn6GSDqu57kAz7FtfGv37UQwjg7MbBDbm1h5rrUWBQxt5tFoZVr1",
  "key4": "YMfEcy6AiecXe91wRuEEXx2mYAB8QKdRTHiCENGwU71gJeqAmZ8AshfsfBt23y6FY37CkYFedz4Jn85YcCGPV6G",
  "key5": "35nhkrogSZeJfV5ZtAEkPgWuo3HtynkrTPKDffm25Gkjd4FR4kyWFvnge2jAZazsHUuCpdLqMSoEVbmjPohEokQW",
  "key6": "2gdNmzyx9SypGGpbbATfLbUDuYYX4rfvq5XoSAHNn464T5Wfat4v2eg8N7PmNYovf6aw81kaKVg5HZ2FtPZTPWvE",
  "key7": "43hQQE1ENM2ESxN1PPok3pYnSwGRRbKes7i1XKVJfMZx6BksyuKGG9zQ7vKqDWQ1eKKSrw6SugJ3HMWRaL2adG2x",
  "key8": "4NuUDKrm6AojGw499s1ZGPtqd1LfsNjBFyTxgQAAEBvEGZWrPc1R5ewyv5BtiSdqicByBW8MKhX5H6d6MAnfTgcK",
  "key9": "3saqNkfkqtvLoidHNbGu1hDgxWdK4rcszpUdbKGy3h6YMewxePYVv2u1woVeG2qet9ASwgxG8Bo2CbsTfcZ3ZjD9",
  "key10": "iE8C1GFNfHndA9sSPMac9R7WvK6kMgEXoXLTaP9BkUbxAJuNrS7xd3nzKaRZGZFXvDPXqEVZWTVEJnJzt78h6kb",
  "key11": "LyQ77mSSnoFPxt1XPQbAkXcgXn2QcebfJVL22e47pEjEqhAKrsnDcxyMvnG9ZZsCte6TFdftx8eKQJ84MKzdMAR",
  "key12": "2iRQEvu8TrcpkC5NeMi69DWPP4kLXdyf2nTN2kCc3wt4NqiUNwFxpLEY4ytEMoWm4CjcuDvFD3dmyHPQKpLuwpQp",
  "key13": "34tWsw5qTRo1HxxiJqsQAnfcyFi849ZQZVpZ7Uey9zpVcgHGLFNoAruFHJF9iToFwYyQiRUCBTa5vf9iqmsym3nj",
  "key14": "1Btd2cifKAK2zXh4sELBrBouUd8RCpGifGbDyQyEcm5B5dS4Yq5fbYS6XAT77uh2bGKgXqinGgo8jktKYg2aEbs",
  "key15": "58WMGJ7fLxKJ9CCMY6ahjJmD7NJ4JfeCR8ARtKyy2CLSe9oDBv4T1pEtCt2QaAbAW5EwZciN2t7gQn9JtvfSFpTm",
  "key16": "5VQDRReyttF2SjLLzE27RamLRB8H78SL1s9NZDAcWkT5nPoyrWvGDSrzitk8pyBCVi6khrn4x3L2XVegy71ArpyB",
  "key17": "4pH5tX6M73k2e1kzt4JPb1XaUmJnPUiNwDcb2W1E6DXThBX4V69AgDuo7okMXpf9AAbuK62t3c29oPKX7Jc217w6",
  "key18": "3Mn62J1w18gTcZsc3JC2V4ERxLDnVseEeEQct143jkrX4Bb3Nn96qmd23PZVrK8zhZmDiFU6NA9etkYNe6ky7QJw",
  "key19": "2aumcoNq7sj3pGzJ9Qnnv6PdP38bt7U1F7qBfSnUtwz9MX11Uvp7xWx6iR43c8WF4R4k4m6Nhq7WXNCQgvRSZrnc",
  "key20": "414S9XqzcPoKnjUW2w2GdiTsVRHFpAiS4Z3sgZhABSuQLXbVsx6Hba6uS1aQzwGEkz21ErwtwXYTLFbc9xcebAfb",
  "key21": "4FLSr85Ko3cnbgWcduwxuCQWgFC127n4hoFpdLT1gQNb7ijjXgpKHNoWSuqPjdykkQ2iMbpG2PzDzaT6KwAvGH1R",
  "key22": "3XWcpYTTcJetWAh3ufMK7spbdrRj7NUa74MN7Y7F8Y1EfTyu82hSNs3LLi2pHrpm9vMduisEPByr9r1WzU8QrcHo",
  "key23": "2xX39Av2Ut5uKgrYN3LSdK3WVzrhfkU6b9jSaXuxP4HgN9NXP8xv427m7VyTXLR2Z4eaxbN78J6f9SR5Rh3C6z6q",
  "key24": "2k2yTRA9SUTAJ6bJ88E9g3wH9Gtykq7wLgihvd2XBDZhmdKmMmW9pmWBkXBRomxEmdf2YJR5jnwck1THzVsb89kB",
  "key25": "2KYooLeRDEGY5TUoQ4ja6wUxqQZfttAWb6UKvH9Tc8bazU3SzAhDvp9NfuhLydpvGeykQPBGVop1soYycfJaieX8",
  "key26": "2bFkkc1ovSXESMDCipLai8HQ3jhXrP3a45ibAnWCnEzfRhvZ2rH13ydbg1imRLuiJkqDefkPcCSwu5U8Me6tGVr1",
  "key27": "9EHV5LSFLmhRLLxFrwAuvnFZcaRmn2bJTU9Hv3mtLqLTAM6acvb9ULQfJn1jQ2oNN3qMVDHi4MUWHm2wGYCC6TS",
  "key28": "3MjiZHpJakTc1R2YgTGuWpgyw9Z3ErezDDsKpB2Lj4inW47jMZ1pbVqwrsh2pLN3qqdKy7sZbiBMgUJuFHRHHRsr",
  "key29": "2eF1NLY1uiQAYpJ3Xh8odFdSVTjydeYLVuHW9ash5m1sF4hFHJxHJU3o7h959Q3Y9Qbxgx43U2Ha9cFrjL2MBP39",
  "key30": "i9nzEBam6FdUUkkrMJJCNy3i3KS9RLL9aD7RtwWeqkyfyNCgFc39iS9hrJyrVFxnZpcCa9iNzS21Sm3D5Wrfw5a",
  "key31": "46UCgumThr6BRU3Zetn6ZJgw45Ddjqyn1t8MXMTcrn3D6gY4RrCtueWsZSSy3c7jzZH9X1wnoX6nHor6f4iaTBpv",
  "key32": "3yEapdGhaoyntNsSuFoMhiQANyBf5MeXp7ZdiWoeXuWPrBL58JgmAuZ3BFnPCZMXdrk92gL5M4zZBsrgVNRpbrgE",
  "key33": "3GfHhTXEKVPTDyUoYtQ7NTnxvqvPQAfgWf1kFaF9gL1yXoFvigsWkFfggefoKGXG63PWSoy2UDK3spkuBa2o9bEc",
  "key34": "5NYFWyRv7XjjZ8Q4fdvozEpaGRQaYox4C13JpmnGSfiiVEQLjT3Aq1FZwdb6iRXshuUr8586NLqRPsbyQ5jkKiUz",
  "key35": "2daNVy4mLKHAJYL21fVE7QykWqE58QAUZ9NTvqvjDt438AHRLgKdoCeGSeCGzNaN21UDUiXwpyA6RSuRv8UJstB3"
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
