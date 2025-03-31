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
    "2Wmzmi8ERKZmNecGhhYapktvXPS7vuK3VYyr8pc7XP1csV3JBb2mpwbN8JR7TqeCEAz8SCwH69fUnFaG4qmJMBS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tfr3qUGGMteFzbWa3riSLS2WFN8gDtPq6pjSTjJdnsMJvWxDruDbnGBD7VBDwb87rbDRHgb6hMPPTTCJm6utg3r",
  "key1": "2kmTeN93Xybij8qpi4BPuZPb5fetXGFBqXjBetNGkae72bAJdYdyZoCRVYXRjCbgAAdHCPULGYPLfbjshqcmytMx",
  "key2": "3eP1VNnJw9sAcs2f9tom3Bgs7oRMGjgewCvkPtJo91sy7Bc2pHaPsw182JBPUng7iPsQaG78TZDYcpuRMMXNgbSp",
  "key3": "39r81JB8ziu66rqpSJgiipTUXJkTd1Tb3dsa1YGoEmpnQvqxKtT6zAwXbRnP3CFLobHpRQUFmctVaX1UQDfdXroA",
  "key4": "32pqdKm7KAKNKkgL3yCd7ZPXKwLwyyM76fX9GiAFZk6y7Lrwy1HGheqGPPUaR2sSMLFC2fXBGZeZKL5hQPcYiLQM",
  "key5": "3xUEgEukpm445uaKwLvkiLYGDxrydcMXdoC7XyvyfherQHHMfsZGCJPNF8CLASEqcavQE5rukVUxtMb8b9PGTZJ4",
  "key6": "LPsxDMq1rr3gMKwegDVo8nE8LyRbPRWhLS4xnJAhy1Ve6vHwj3tLtDYbCLo6qVNhA5zvyqnRk4gWrzkzF6ydhCD",
  "key7": "4PGbapQGk7EEJCtFjnUrZTMjWJHNowipCJxjk9AU96NS97Duq4AcrswM9mHfKRFj8gUX23GjggFaZc9MfESwVGft",
  "key8": "4Y2oahMipF2sSvMu7YTG1sXtDTyMuBXNCqUUemCA3S6Bi5TfZEdUfyE34ueePwCWg6vYfabK1aNXzry5Fur8gXZh",
  "key9": "5cub13phCane7WjAxht9tzHLSQBHDrf5fJpMXhrUy7rUsVEJYbow1v3Vc2Njh9Z4c8rY6yGoZaGp9b9yNJGMLJ1c",
  "key10": "28ix9tZ5HETkjwy9BfE6rZvTzRe92FKEqVJrUZqnHasJMLD12JJFhqKxZJ57J1S6u3QEsJXTnjAqKt4htfEcZG5t",
  "key11": "PACBYNu2r5jJ9hRBYSbcJ19YoXJWZgWBGZsFvByTxTRNyya8YKUK5Ta7Lc7ZK5sKUeApMvRR2Zz3cBBpTcuje8d",
  "key12": "ttWsEBc2d8jQdoLEqgDWqMfYAPDEPbUMa7etsZjqCAfC2Q2tK62UfAyLE33nK9nxsvhJpwKGaDzfqX1v6knSiPs",
  "key13": "4myjNvE4guqVDgJo6FnbqMod8UCHwYaFeCsFDsansJ76V14z4SvZLRpPMYwnrEoVBzRDbXL88tEiAhQVNKPzre3Y",
  "key14": "5gSaH6M2mjEHvCboy7c39rDdCwMfP2uNk2vBUEiHFGvvVCnmrH1ZmMK22tBb5wuKh9UCL4AMbHwxy8ZyyAvGbCoo",
  "key15": "2UDK1iBtF8E858R2ganEx27gs9yggYU8rpghqR3gvcKrivfFXxSQcCc57VWt9YkFDyh94SuDuzGNWLhuovGu8P4d",
  "key16": "5KLoFZvwmK3sqNVpMeyjPGaeCyCezZArG2zdh6ZpGrTP5TxSN6wQcQEx55JNR1kEhczL4StNX3Uaf6oysXmbKixP",
  "key17": "46R1PrnfkDGKyZks8mVVwHvRujThu7SiMoxvEwFwRQb83ioyzwLqBFzhd1u58xzHfe7YjMvNETz7Y44Jrqtw7ssh",
  "key18": "52dkpTTm7JXNR9UusohQ5aeawkhab2Kd534FnThbYbd8i7Zy6vGoDhuzA44rLyu1Ci2Du8tmB8bQwq9rb8e5QxHF",
  "key19": "NM59qRXpKWx9wKLPisxqrnEMgEtnVC9MiaMRSbRQNaD1CajxAu7RapL2p8KBtrwQtezj4GyiwzfwMdiiYSkCckj",
  "key20": "bNudvX7QuXKfsy4T2e15eB9Pzf1L6hz5Fi8yiTXGPKg8aW6ny4G5FxbpqzQHW3CLvKgi21KpHbncyuTqCpMT4Jx",
  "key21": "3s39SjbhiDfNVWxfV6pt84Q7XYRuWea24TN278CG9KF79QaY7g5aqaWMyormjJrz9wh7rafYSMt7ZY6X6k3ST8pP",
  "key22": "4A6YrEujcca3JUFFc5F9qLMZQvcFzqkhpDinvwVdTGW1vQZbiPSVxfx6YT6HqzLEKQouGUEi424uYmF2BKeqyGa1",
  "key23": "5PtmpFfrSDzzmMBn4QNDAjfFBJ4Pc4WomTXhWQhrHmwjZ6oiG8q3pHtJHhoB7z1CieGi8ddMzhoCij9jHYsk2wds",
  "key24": "JUuY22kJqTLWUoBKsoBNqWa283gxUZCWHAYYG6rNN1s1s7xx6LeZoZw2VvdQ27Em1XXgHvTTEJMSFJduYurkQfj",
  "key25": "44RZeNnKQxxDwBaJhimLUJdZamA1fwCFeTwEsNtXdsNPCKvKxSKwBppjVSZRQLAH9HGtfPEerSVpDkKscycadX5E",
  "key26": "ULFQ3yYPUomNx8D7wi9V32gD2XDMogWnUBWfVieth1rDAJGmPyhHLkUScWszqohDi16unN9zDPCn9KPpBG9AzfS",
  "key27": "3kxswFGRVeKC4TczVX5pzT67aUj51jM97iXjsXwqpfLvcrdW3GPCaGKE8eELeHnsGmaeakdqZvwzsHabiL2BRXNS",
  "key28": "2Mx2tWM1k8yNWKjkh1EADa5rAkk5k7qLDUzipdJ5VUUMCdyFbJesFTqQsbk8ex9uKmEca2L8Nmk4bxbmNdbhh9gk",
  "key29": "2r6u4GzK7Y7UUgsoqtAyfHGxXpnU43Vi1h2Nvmj7cBY1f2kobmyfS7ohcEU8buCRDSwZ6fN6zZiFAGiqjueUfL6q"
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
