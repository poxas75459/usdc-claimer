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
    "3Tdv7mVjELA54ph9v6BQYxhYgQ9oUS4PW3bsDCa2Bp5kYo5NAMCoBwAhL4G5qvQnTxerPyLNDnYf9vY2dhektqEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F9E2cEkUYZSmxvoLJ6g35iUfLvTJ9Hty8BuycwWdR6vKLWGigg1LuRNuD3f3AGiinSZaXVezfBRNAXsdxktE9nt",
  "key1": "5XcSwXrBA5RiU9sPd22KtA82oryQM6GN5gFs7hSrxr19zzDjDyqpmGeNF7wxUg2jhxpWeSLnyXhJK75ydwfXmF7R",
  "key2": "5ym6DJGrcMvfYcYKmnTq438dFEJXkKikzYbhvVnFxeBvSW8UVtfT5WNcZCaKaFBRHntECawG2fXDYG4eHdD9DUUm",
  "key3": "2B5Vp7gtkiKxqj7hr1rhRhmeLqETZiDjsd2zZHcX2aKnNb84nThwWH4bxsFHFCUpMatgT5qKev3D22aSMBMGW3vB",
  "key4": "4SCLCzdsJQ1XJJ8YELDEGhAzAXwo3gw5bmLxodW9oyFufhUvpUp1qXrMTH9gMDeGonUHFZAnq2yn5shcGh4zXgSE",
  "key5": "2P6aNhhwf4EhT5E3b1RVsvCt5bhC77hXShA3ChQBQMn8E8KoHVkew4dR813dCURzK6QJb657sRLZM8kE3sPnKgej",
  "key6": "4TRbpC6FXs25JkfUMuYHLBAzNkcVAgzGBLVWgGFK92BNnDLbpkp5vGdHPXa4ndst9eWbEAmD2ywXXu57Kak2Zj8u",
  "key7": "2YrhCi1Ch4A4LzegmwP86CzdUH7g9rxLbooHjGF5asueraxZX3g8jgBNXk4ZUMVgUuoGncEELxfCq9XAX5GvHrVR",
  "key8": "4WRiu4htMqCpPpYTMfjmireL8BTZSA5vDseS8w5LWV8AcL823uj5eP7xmoTCr1wMWRzcrKq2R1QNH8KaXbBtt72B",
  "key9": "5mNgajQ8TRm9cgJcpxUKCd8UfWQ7vGSRXn65dZh1Zewrj23tCDRYbiwKkAZ5341MeNdrCFbNAy2Mn7BWY2diJKFN",
  "key10": "3UU68HQc7AGV1PZh2A5PKeoufTaj6sYyqXYCiBSb7kBi6rCSJS4wYSJDUXetoK9Lqq6JxUhQYBnwLuCUbDXSGNzZ",
  "key11": "5EXm7vABJwF3uFkm9o76HHMdjc6ao9dwG5Vvaqbm9cJcgTGgv2cEnwA7KjFn8HDyaDQ3J2btekBsBkHa2ncN8Jn1",
  "key12": "2p3B9og2qVn2sV4Pb45kihMyaS9HeZqzYzbaaDGbQEqQ81NGuNMKnKdEhdgajF37xEJS8pp6gtJL9QSTVLLeFsrU",
  "key13": "5qE7bD3C7GJuwNM7DHH5bCfVoaWKfKSqi3Q5ocupA6v41ywBmRwLdfzNsyaGpCYhM2JvJ4TwMMxzFtWkqFtpvqet",
  "key14": "5KD5wkJfgV8Q8qds89uRt9AL4eeD2ZwqTBEJDKhKK6PuEUgpoYR1PAC3iQjH2piKLRXugfdBALxkA6bK2uJPp4B5",
  "key15": "2r7gjbDgrKqXiyBfUxtrhxW8F5nWqo3w8ezMtjdtv72dsa8ZnUr9v3dQwgE4W7fjQBSxduNThgUZDfq8yYgMaciF",
  "key16": "3vV1fPThpNiyuPxf3xYWj2sJVZ1ao8vqqNRCG5jjg4FexN2kJZP1EbsL9AGCk8xswMMB1dpNnwKfkuvCPzsqR44v",
  "key17": "EUayQu13Kgx6fG6wFNYD4nraSKjboVeh2J6FxHt4Vfp3CckjiuMbAj3jFnAJeiFwaaBqphc7PVb9v1GreK1zAzW",
  "key18": "ixX3R46pifrJ9MT393HUNpHRAsLMbauQKafBgYJXX1smWVx9wgqzCEHBFrQwdwsXZXiPZK3TqcndM8htWc3eWL8",
  "key19": "5oPXb7FndLQazMXJZ3ZiR5nt7e1uhcpfRXrhp4t8Fjsze6EZS1NbBtLNthooUi8f8CEmQQp7h7j5vCW2UBghBn5r",
  "key20": "2xnJ6viku3Hta6YxoXWcNcJr18EZwZcvraMWTF79x8xZMyNikygfLgmYqeDDxXPnTbSFHraH1qSyvuxSLCxJQcmm",
  "key21": "2E1HWV87oAhEz73ML6CMSnUUjvLFxedMoKkojT1yTknCS7RL1iAhkTchB4dWBXLWqGfYpt7GCMuaRNKfCcaHTCLC",
  "key22": "2jakskyWfpvtDB7ZJnA6SFrktGR6322GTHad5yX8swtDzc33RsPimitKyacJoNKgET6VE4dgW6q8d6imKcGo5nJZ",
  "key23": "2KAiNyVP44B2euXSCh9tKfAXKT8tjvToybWrSANAaaoaCUErVLxZTpPnx2HcpiZAokhAy9AZNfbMDd3jkCcwbuqk",
  "key24": "5Z1Nv42kczWtN8EpDQnzmLpZKs2toziYzHTFbkwnRvaD4kNBUnyac7GLo8DBBMASEx6RGNSJUFzfrsqwf5vSyEgR",
  "key25": "5fiU3Bt6JcxpREPzqaXcYbB5aMv6sNDQ5NBmLTSMCKj4TJt2bPXJ5SucW8fAxFTyKg1t8wnQcnCz1GUCddi3mod1",
  "key26": "3DintDL16WMgGKCVts9gVpyFymWy5zU7H8T7od4YCZ8KDixi4HzXSJRFmHdsfbTLS8jZWPGnqnFDVXXLXdNc6YWw",
  "key27": "Vp8B11xHsmpLPN1usTMCsqYfGprnNu216grPXZ8d92GnzHsWgFSLBD4kPcRSfgAeTc8ToCQW4Ctjy7mDAxudKKd",
  "key28": "5oKAmhfPRpXVCztxYZf1N4fufg7VtuNQCY9eS6Z15SsZKQjG3HFuhMSQ28dWyiNTYfEYW7k18wvidPEScJzKmy6B",
  "key29": "5j4GPjDMFwneZVWPNbasHVZBhhbrpwxpa6KwZ9PMoKv58F8fzGj3RnP4yLbNiUsC63vFmpBMGwVNRF7t4sP2619J",
  "key30": "3PCEVcfF29ygBppL3kkzEcAFPNjEzsjwapwirsq6XcWTDii7AW5Q2eFSS9AGVo1NNETpxBuSdaMg299k4fB1Qucr",
  "key31": "32JEgs3ZxSGSV9jEViq5wZUfuJkqrBYykP1v1qxZgBwobFCzYvFMvxeE9kYZZbztV5iLvuZeFtdKmZRC1Pbkf2ox",
  "key32": "2HfRsKDHiZ1AeTnJA7XFGgvw82mTnT3hMt55s9ELic2e3Ega4iBNuNKdwpy2ujeSEQfbT6bYtvTCrhgGpfJ44Zwz",
  "key33": "2KEjRnMGqd94BTfwWvHNMXvPrc2fPwkFGUnPcswKTK5o5JJxMsRSRAW4gLyyrTNdHdyEosBdiQWAoJqEDrzxhC5K",
  "key34": "6qMvUE1wnhMJcHPxTEEE3waTkRNcZ2QHq9BWAkHnzDTb7ySJwSEeddtPJnvRAgRPGg53Exegm1X2HNribo1Qsnw",
  "key35": "34TzmpiFcGqxsMT4HxTMsAdirAKyrcDB7TN2ZHh2gdiFNAcUjbpxAVXzDRrTAckpbmg5rGqzZufdMXvCmUBo4c25",
  "key36": "3iFMCxxNYoCCgf3n5jNuxSbE8V1SN2EAyNN2sXngFsVHTefZqdqY1wU1mmSS1dygnPEKNY5hLz3H6uzhAwow2hTz",
  "key37": "3UC2LbpU4cupfZ2aPqKqAKkHFipTD97n18VsnhWm576nveytJfirfjqVtDtzbWMGcuSCcawxf9DB1JbpRQQw2xp3"
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
