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
    "5ow9HURwVVyvBcbUCFpgg32vhgNeAGZSBzNzSoEARCmb6rAFWEsMLzoJSSGdxMq27G8rNrXpsXd2nh5AV7Kye3m7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LXgApSNn6bmTf8Y6RZSSSMv24zgbxz9o6rLjohPdm3tm8SkARkJvuRAd5qPSbMic1SXYH3CMkHrHkEF2JCUvrAT",
  "key1": "H6C4exvJFs65b4uGmLepQXdHo5QsmHh8CPR3C7u4ktSLBgTu3Qbzc9PmnaD1k1RMNtV2AuszV5ZmwM6VKiBhghU",
  "key2": "2q1RoDPJRZJRcsTRQXE8Ljz16YTVch26XX6f1SEngNirNW3w3bHCEzB2i8reXbjAKCu8PrF9bYn8JZ7WEgJUN2kS",
  "key3": "zpJ3SUnrSMZVCBQWNwJRnTuY7s9nHkQbcvKPzW1VgmpWj9N8FEkVkLuhCKfGyXuYyTDPCWJbGMDLFR68aQ2NycC",
  "key4": "4VDQPWegv6BuNPLjHUzRTm5CK18ZLHchVyjX6xU6gFnLBATJnPpeHcqAtXCNSUhLeWWrSHsW2Ut95MEmEvzpbq2R",
  "key5": "2eoXTFtkLh4akr3P9rWFMmxYs9goXXwqvWU7UYuQMwoBwsDt8FvWyrjwfj4LUhYEszAj6h3TnobNqXaU5WahK1hc",
  "key6": "2wNk92Z1iAkanJ7Mkf4Y92gnNnUFrNU7Rqs7LLiME8cmdKkhZGV4oJ1vTZaUoSNnft8etoeJUi7FBhw5uJnYYTLU",
  "key7": "5dZQub7a2DaWcmm5g8hobchgVptCLpdjr9jpNq8wz4xvBeRLp1GJi11Exju9QhNV6UUHttU6ocajx4AiV7d9idaR",
  "key8": "2n7SL8r4FNnknYBZqqAPnh4dL7j3oqccfJHSgCf9EjbzXhx4ziw7fqEQEWyxEsbrP62QVCjDqpQtNG7AqiZgFqgL",
  "key9": "5cmwUburku9jPZKFMcrwYWd3AWWGTvtbamDQ5WQ2HbHXuxDwn9RzRuUBmT71qYSUQd3p6p6Gx78PcUky4PmU98Dz",
  "key10": "32TUxMvR2kHEDXUrL6R16KNpkrfyMfR7u7xhDU5jJSZptmSG1W4CJCXi6jvqGkiehMCoSnhL2PcUPJ1dxSVX3S4q",
  "key11": "3TaHYuznwbs937B5uREiVXhQLJPnZC5Loztm9imBCDSRJaJjQmu7TBvuXDAbmtMDNAp9BgzMWxLrmXvQUhVpgTYD",
  "key12": "dyCWCARiDNHxLNNt5k7LLTrKrKcUNiZgqoBDXkVxRjJGZUZrrJjiHLCfLR3CU7zptQE6WRx7o6YPdyY11UHoYHQ",
  "key13": "31649pJ5Dmo1bQ9vhMNwV3KBHyySG5rKRqPPxvq7UCLW5v6na2pV2xR5cwckauKTpBK9jVntoAXUjYUFKHbNiT5f",
  "key14": "61ug9yPRLDTXq5n3ACH9fbemBmF7FkZRtY65hzh3KPH1oHxHPW3mtMBp21EjBfAC5KYdnmnv7M3TR1DAxrjiiabU",
  "key15": "4pioAEwV8CHVPJKt2V9wr7TqkC3tgXLyg4LigfhFjsb5d6pu82dDy1fntqPittcTYcLGpe8u8PzHWrccG826A4Jk",
  "key16": "dfYsLb1adKPoA83SCfiXSjoUc1XMGqGCTjzX77owN3zGNL1C46Psbhnj6BXNGKxfwevB9jskujVmLqNUzB73eHh",
  "key17": "25YzaKZ4Z92Pq4c47d4HsD4m9FQsqPKcxGtR5FBuaxtwt8of6qbfUZP3DQCeanjjmYiBuGSCLxM91yWA8mabHnbV",
  "key18": "4zir5LjWF2G9ebHhdW8kjf1jgRbx6SPzFDPUbj97gMoYcxzBR3qWA6b3VEt5MPqLahso82mD9FfW7UkWa99egsLK",
  "key19": "5Bddn5tY2fvztdCnspPxJVoP1BbLb9sBP46dZ5PW5HpoEWEtGoD3zGXY2FZkoTctRbYGHwXkv5aYcz5fmJ4bTsEH",
  "key20": "uQQKjgd4c6TwfBm8ceVM9xNa4vBZvuZodHDcRT5uGMj1sE9SXL5wpJoCX9Q6LUbp5PbQZKK7gdkeHMXmNCNip5u",
  "key21": "3bfXirk3nyMHEuh41nYEymgfpzKbS1dEJHY1rEPBi86cNBW4VYnG5Ss8aE3stYNzfrwbShkek93J1P2Dz96F9tFU",
  "key22": "62zPhf2i8QRRWEGCvbVYnSoZdHArMZkgnKgMbFwSQmNeY5M7AiANjaJyFHJVabWuyNLWezebwSFkgHN3UeZ1PQbh",
  "key23": "5J9DuyDBQwnekd6kaA3JcR7BDV5YABAhGhBEtHZU4doN414AB3if54nKFiGMp7XrdA2actJhNnL7dXo9uzqMHLgt",
  "key24": "UuQnFwTg6wt8xAGKtHWdYHY2t5htuHaNLxRujBtTGT15CUmD2fSggJ1UPMdnEy7TRS8KGGGQpMLMt1G3zE78PE7",
  "key25": "2qstJrYprwomrWb2stomHbjkmMzV5HytB3sNMXzTnuAkYx7BMtAZsEfvp4Q5tvmEBLxeEViohDCSeqSPK1jmY2fY",
  "key26": "4ZMCrc8iJyLCppNreVMoXUrjEwGGn1BN9z72QVsFhojnj3jVXA2nezbeBu6ie5MZLq9oaEHL6FmAX6Ag2GdQR1Mh",
  "key27": "2GWQHTZhN576FXKT12R8m3A1QjASEqL5k87oiqC3sPPcHvn3RpgW5yEC8S2K6dWN82kCJamqn3YHHrPERwZFqKw3",
  "key28": "4q5n5ofsmRPJRm66kFYv8DuqqAuCkcRsZ5HMHSFMtfA1LfRdZ8C4SexTfDd8xfY6LvrJdNXQEwjphH83CyXGV6Ea",
  "key29": "znBxWB9rZxBoDWDuPp5iSKQSBgs261rZMwNrptxKLdtpeUzMst5S13JJjfoZww1uhYjxQfVy6f4yd6bbrv5FobS",
  "key30": "5SesuyLDiJpGhWAMcRHbzUEaYi55WyCrgYcP3nWNumcgyBWukR4nt27DbRzHUpu5haSN7aDgHbTV5QkLh39RGJ7s",
  "key31": "4EX2jR6vp9t682Nh1Y14V9VHkDCFzc9z3J5YrTvUGmv4kjw5SByAwfe3UEDWgpnhKMsDXag29YyRRXvsSygxPWUc",
  "key32": "XkfuDtaqhfnenoDVXimmLU1jJcZd1cSu6medwCM3ucFnS5UF3QxfFktbtkte6u2taV59kQWRPERbQS17fdvX32K",
  "key33": "3S1gh8uFAG3d7sZQQFRo7TkhcsLuN4zaCXoPJcALvxexJJYN1ZBK6GNJkhod74kjiAEVazxqdqrfUUoxRKGGytqb"
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
