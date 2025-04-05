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
    "23K6qs8EBACCpE7SJ1fMVJq5qYtxDy2kwQXJmGHP8nswihqnmivtHRsQegL4uvPRpK6marBTJMpJx4gMuE2TLXDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "362g4cJ8AmhMWVtdtvjkgWsVZAWprgXzF95iSqBNjXq8DADjSx5HvPbeaRbnpoHJdzEZigc5yZ54HMGZ2ocRReJD",
  "key1": "4dNdaXjyuP2esGaJXnpVjamfYQtAtru1V7S8X2ejvBUPYVeX2VtmmAjZuZPdJVbV8cqLyb14GP3V3rWxE5sqaGNA",
  "key2": "4ABJw9NtXyvxLPkmocXtX9uv1cL25vUgpDxCkLpoMoJg5YwD4oSfrB3NZe27CWdp4wJwhM5Z6N6Z4s6CkhMp9qUz",
  "key3": "5qpY7TK9xkuBcp2BKkKPMRqSUYQ4dmUqyuD5AB3hrpMGnW37XhmXXDd4qU4zaaYewFYr8MgAe9yGaUmC5ThcgKc9",
  "key4": "5NhzDfs4PZMrPhqwXdDBxjcJh98uU9RY6NXjEvLrG3u5c1M2Eid9CvsT5rJb5Jr6LKYrXoLxt5SjpN2L3ReSQuAV",
  "key5": "51nhTE1hy5vtNb9SQnwkeyoUpfYK6ZyZFH9B6ei5D2KYZi8hnPYJTh5U7q7AVATZ2tHYsWtd39vJMuMUVtaQ6VKq",
  "key6": "5zuecGMBdedNy8t6i3EH5dLsUUv93pDZebdm7SLXkUxH1NqrfUT6neoBKZGm6EKRvFgEurKkQ6Lg24jZ4b47xDRH",
  "key7": "zHgXDfo8gKLgVbjAzwv8iKsjTJTNzxoFaosPSeeevsGNxZi1STatRFHSC8csHbXvbNTZqy3JW5AxhqZNiYMBGzN",
  "key8": "4xc7W5pRajDBfMuj44x1d9Eiis93GgPin4FVEoy67zkASC89dK89LRSGyZWgtCGDPWGgdV4DmTbaPqBEGET84Btt",
  "key9": "2htaynWUQkPWCJGpJYkxFqniHNvWL7gHQhL1xmqfV3vdZxCpMoMMhFDokADoHzgghYzYBG8HVFfHnKBXEgDXvQnE",
  "key10": "4dHQQzMemp8DgEFCGNyyPgAszR9VqsrNdx9EqrVnBmtLu3cm4H7dY9kAkxAUdb1gPkL6jvSrVoEM1hvbJ6E4hBoE",
  "key11": "2cxqnUN6iFUheyc5YPjWiES7a7Y7wP3QCh3v2A3fi3rZQAq7ntqzzNZbzgCZmsotAaqkq7CgG495Mmcjf8yt5cZP",
  "key12": "2iHz2WnPEjZVdTe6YNHUBjiEyxCNwmxDFM12cFiZWfF8rRWBdJRPsbZFxZvRkBfxK5zrcKyiSrknBH7yM1mjy1i4",
  "key13": "3eq67JNC9qcTUHCffLqMaL1R1QHiN7E1Hvr3LdGKVZX1DPd2ep8QkiwTg7q6CJ7ZanN8oqitKRPpQPGYPvDCzyKo",
  "key14": "AxcykW9N87zrixbBDJAoT3ZHCevH5gJwbkoC71jAH3ajH7kAHMiTAcvAv6TCbLYxrcv2M1KQ47CHQ4gKwZqSNvt",
  "key15": "5SiLyMr3kh7adiMpFA2cyJebPQdgAbWAqfBojYCz3E6zuxLD9HFqFnc17c2YM5ctPNffDTbxxaKATKQs3AftZhFB",
  "key16": "4YGZVpFN4Lj39oDGyxgKrqp1NZVMBxtxjnNxGLSaxHj6g5trAX6VX2JneP3KoJtEHihEZDoYM7HRLhbJhRWe5WEJ",
  "key17": "grnyYSizTpo828QEg4gHF5pxSZbSLiVFpNdnc5WW7RgDG8WPPwrZnUXCka4vGNhf27AcM2CTdNWaPRrXBfkb86m",
  "key18": "3VMxvRXHG6GHBWZqRjVtNBQ8pKtQNLginLPpYN3dAMvvLeX37KQXg36nyBJMBiudxWJRnkiMiXv8xJMSiJdTthQo",
  "key19": "31BBDRjCfZ3zugqm4YiLK8UxZ3Hgjud8FAxS7hzzLMYfEG3xwQVj5MJNPYN7H7xU79ds8kkYnFnnaQkUPK8tEjRD",
  "key20": "4f5zHh7YKVxEVeJHH98YBXcs4Ff8RU69ik4PzEkfRKJTVueFRousowr98A6gudk8DosNTcUhJWgtvrxwK75Ej8BH",
  "key21": "3gAJF4pCJZzpeeu1UwKEL2P75e7a6sEDdLoPmab9wpUNoao5jNBnyMQFvuAur8QDH5fY4fwrEdQ685XWgCdsGUVq",
  "key22": "abibqPnHsnkyDbD3VtyfxrwBxWoTbbE9ao93oibW7rnZAQNau2pnQXG4DvskFDC83HQC3yP5RJRL8jEbuCuUHWL",
  "key23": "3WBapPMKA8U7934PzmNxodQqVobshKUbfjDonnySJtmCiZFttpTUZDEfkMmtFFfkGzmzSZKiVSifxghRnKM3KzBA",
  "key24": "2DVouWYquu2nMUtpP9xaqFHB5Upxg7gs14VdJW8mZhiAFzag4Qo2RP2Gy4C32i7CN9SDe7hKcjxdsXus2dNbRhz8",
  "key25": "3gCiR8ZP7b6ka6YVVEz55ju63ip6kpd8hjtpKyYoh35H15vDLak1G3x1datNp3xnmdFaLv8W9e7p7Nv4eTuNPBEi",
  "key26": "3GfydWa2RLv5GDb7vivaGpWmWx4UcXSnDZFeiiPM3wCnUgWcsyGFrSSWTV9uib6SR3z7CaFFU4zAS1HgJK2vXQ97",
  "key27": "5c3o5AXAczCZ3bukGCXeWvPDwy9oWGv9m3ohDCb6n8Pbj6wodeAz4VUGqVLLK7zkrtEHKS8L1ggGe31X28kNRb9Z",
  "key28": "2jpzmCPP3WuC5z4Mi5mtcet7qAe2ZwEUJN7GcyWgXL3TfuosGong9vK5VpgDxqeg89rqQcX8SFPhvRmKmVXjPjBf",
  "key29": "FTgoLztWjzLxE3hmpPL3GMdNhYjgvorE5C3VUYf7PyShsURr6BRcotAWXs8BkHvVEE6G1dbufQ7bcdktqLyKjPW",
  "key30": "5MpHfiVibc4BFauNVoESNds1vovFJ5niNcjiWA5JoYdeEvX6c2g8gLotfRRi4csoZAX6amfSRTFfqBDgHTPQEmT1",
  "key31": "pMhN6wJuH1EZ1mikbU6QDVcHGcXRqrFDxTAyfw4yhf3Uo32eHKwxoLRo2fKqN2DKWD9a3VrEzMBEvyuEWnqKJGK",
  "key32": "4cwcS9qAsMxdZ3gr14vWfvUvRZAz7annkXZtnjPRDhvuesRNCQrvtwKTRqAFPcFwzndC2ZiNfQGA87mvzKkLycHa",
  "key33": "2no9j4XnvjpTPEdJ2QjTRSYZaBLGaFpGvViBYEeC3fZzpndTKYivc9xmD6KHAYMwv66xyKe6YJVc4yF7xoChweYH",
  "key34": "yueERFAQXfTyXD2rDLsGLE95Lnw9KjVjWgL27SdBiKgdnKVDmqBHvBk2rrqynvjKoFj6SMhgzB29YWLbrBFR5DX",
  "key35": "D2FpAgk89DUjf1qLCm6Zf7CydAJDaUYNHjAf4TnneDxweVnGimHJqatXew58Pqgx29AEQoWWfc8Lr6vVsTBoa1K",
  "key36": "2TMQ2pFahQQ9FmC9DVYRiniJ9BcGTymVwaCXdHo5JVrv5oF234aD48pxjXs7YCC2mjmbpeeLDaXWVbJ9HcxP1cyV",
  "key37": "4T8Sd2UxQUtdB7MQwwxFeseMHLpuoA6xBMBaF9o3ZEQ7PJaXNrH3H9qfUUjLaR6pMpdpg2PAjbUYjjiEV9jAd9UY",
  "key38": "3Vkqi8MFcTEW8ZB24AtuqPy2oxkj7dd8mwXz2SufFaCJAniRdYu2GkHTuQcqUuuyWfPn78arKbeHibzyKY92RgiG",
  "key39": "5mBFdssU4MupuAwCFsxjiqfnQARUDHg5dhGqcD2qMLDN9nBmoDeuFrHQ1uvrDd5G4eViy24nsoNCqzh7m67S6m83",
  "key40": "5gwt9vcDaBiFfjc2NmKtoVJAbp9L7zgTMvE4kZ5TsreKJMkohYDaGYUta6rb29nUNT4QHdk41K9TM9qbW4RxMNi4"
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
