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
    "3JdiJ4cQTRbfe1fMDRVdPWSDQUt9WP95G9yjYkVnw8kcSaBkkHf9NtdoDHrroUPJEcHEHRp3KUEfsZeCFJVodjVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66FBywpNzKB9gTsJuV5hthc2tDSm5cjxp9UFN4qPMWG2RADsh4yFDeDa2S6dS4cYZav1dt87EbdpBdau5B128rr3",
  "key1": "3D73jHJNF2fKUR7ZkbMWS4N9hYnkGbHq66wshqtP1PUutNa61xento2dMRacsd1571rRQ2Dcz5PEqUZ2vDRVyJTD",
  "key2": "3Q9hd471nbUxjCJ1TuqjNKE2BrboJLgxGpCs9xLny9tyCzySi3HQH52XfAqEzwEPJm2dTSPMFL72AidiatAWVpuz",
  "key3": "2QekHy9BxF6DYfqzAwSXxNGTh1X9udHK9Zi7FbKqkGuakbKrAeRonUGaUL4UsrDZzRMjZTTPqfhbXxMjWbU9CKX4",
  "key4": "h7Wjo2D2gvoSM8CGmc5dTcY9WDJUmMksBfFJ4mnDu8gaDNgthV93vmhkshxpXsfw8RvGegm4frUB7rNduHC9yFb",
  "key5": "2ygWFWzfYEjyCUGefA6oa9PDtQys1dp1vzadQZ4V8Pi3VBCV5ZihnDKUP9tSGsLEByjAXSZAbTeVyspLMdhs6K3K",
  "key6": "2bncGgck61ci7UdxTRC818WxdjL7H1Fgz2BpmF7M4qUanTwzDek2GyPMXtV67TCToSZANfSsPesmGjs5xSn52Mn6",
  "key7": "2aYVHPqrQGfEEAVCwWdySsfgHw4M1zn7j21yZHeUUy1KGgndz1RDd12ssA9TcjbPp2LsdXtEdYWN9FqLehSNL1dN",
  "key8": "5PZU9tLzZB2wsqukDg2VMJ8ifxC6F9s9UMfhdEnLzknBmfBop5PjdQTm2Z1NME5o81ftXk9G9YCh4oZ7RViryx43",
  "key9": "Ah1oaUxwThfWXs833d8XYiB5SdgsBzh3JY9oUQFJKRfH4i5GQyWbJgKU4uFR6ha8kmxToRJphnkMJS52Y5kUF8P",
  "key10": "4mPHPAGwS4rvv4tj4D9XBLXKQkJFEJ1CE8JwiPkpeXz88Dt8hGKLZVt4UqkotkFaigu6yBY2gtmps5Axn3UZfaew",
  "key11": "37EFULdpphB1j9rPzuW7s6TzW2XmnhiQGEHEjUaMnhBtMaqgwh9P8EHDK1JpZKzzAz92EyUABLo5mkEvFRfB3Dc2",
  "key12": "5jbgfkrzTRNfJ3sNf934j1WFW3jWARwqnYtZC9t619BaLgyBWAFLiHbZq4cumYikHS8smdg4tgpX2epRtwbTDD3K",
  "key13": "5GtHtxA7wc8MtAJavJrcc3mjCE3oo5w2dDnB8k9uVnQb94RMcVrT4hrtv4Ttq7zKYqgraXSqXE8NxaG7fbSMWVWc",
  "key14": "5FG1StiRKCkxhoZ9gtE6ZuMrggtEyfHqYfn82ojAzzj9e57Z1Vfpf3YmVe3qwVVxNgPtkyhWHqeHMxCLTPC17Vg9",
  "key15": "3kLPWBbanRkaY7Jn7V3KVTgdTzdwsrjx2YdRKCQ9yr6xN8X9L9nhhwSRSyijifoLoUgUaJE11gm1NPfKnF9rgeT8",
  "key16": "4SsMr8HpqYgYvXjBPpURavEuBLZHRVKjdEVaeTN8aoW48soJdmXFAAGsUSxZVY35Fc7GtZAvvM8xFmBYCwP7FgTP",
  "key17": "3gDofq9XVQhGuG4bkRaBuPXrLLQDNrKiFB9mHdRh8xknsg221AAnzwFbDNcUwqdnTwLwx7hft2nTZoBh7AdfLKys",
  "key18": "45ywoidHCX7ehHiEqf362tA4kBNTU1ciV9czEpx7Q32RAMfCHSWmjWZ2wGn87djDFD5KBqLRKnGQ7v5PsUuUEQQQ",
  "key19": "4iQCCMYkv5uBHFkw5YCdR3F9iLJBbtJy9R848wW2XwqCePYnavmBkrYxrL6ejv4u7gBdTH3uo6Ljo4jsoBBXYnRr",
  "key20": "4782VtNnpFXWCHsQxEWUYZHmBj7x7SbiiuCUV6dL2woir9FrtgzrKJgbkVzmKbQEscxQ7Ju1VmCEpS5MuYEcWhFj",
  "key21": "3uKVq7V3JsRZJ1G73nnH6PPiifoJeZEf3J7AvgvmTcqLH4FrSBELL1Ror8mKSpG1NQAB8TAaDdDYJm4968BfT7YW",
  "key22": "5UU1bb6ePacvjR7pKBEgChY45XN66CtF6i7TB8phPrD2ajmKsqrJBdK51jxQRiPopSmh19KitU1VKBm5BeC2Nq9k",
  "key23": "23NBk94nUHkRXYoLXS5seS2KQHLuPatEZUwc9gVUW2qnhU3DCkoV4zntJGthWe9y4ENvUaiZ4RQWxf5fC19B7a5c",
  "key24": "416CWhxbzEeD9EjPmpdUx57TCVPXTizxrboDrXJxqVU3B6LaviAcppzwrFopJ7hfMQAG9gkwQ5kf453RFDzuVZ8u",
  "key25": "eFkErv2rVetjxnp33UaN7Ch3SSAmT1EjJcmRTcgnWxuMVVsrwyGDjmCjgcYu7hizfwxkbtC8fJ1bzrCMKK6h6dx",
  "key26": "3qCRTcp2HV7Bu7LJkTL94K5vUoFRQwhQgQ7wABzd5nSw51aG1ZEJ65GiavUrtyDRNedAEC6DGzuEpk2VusQcPKFU",
  "key27": "2AHfwfsQYHmKSV4XqNweNuL2P9JHp1u5MrQvaJ7t5xG2qeoJJu9GckJSJkKaXjnjha6bjkhdZG3M6TLr8f4pacQt",
  "key28": "5s5wytW2zUFxp1pWpfk9S81nC6zocuSr25qD66Li8M3YVW4a8yME5q4LfTsZcczcNCmYUyiVXoGSH2kWX7YbqnhA",
  "key29": "3MYcWbzLSYcpGVNfayZkZaymHD9vvnZTWxx5zGoCVBPpvtTJrSc6m1RE1RxbVDdpW3bzarxv9rBZVACHAzMPXHXb",
  "key30": "4qkFb5mtj1JgvDMMTGtk2e6Z8b12AkaxtCdSndfgNE7oRBjcXDX8pzEWcSAdcVzQ9NqkBy37Uq5V3yEntaBvtBcC",
  "key31": "3XWgiTZYsYHp7icJaenvVxo2UPqkRubx43qLt5ZkSDprzUvgpXATxLJ8dqUKQQAzUaT18Y18jFMKdkPJD3gS5a7W",
  "key32": "3TnzTRLkawHUrHRuohdkFsNoEqjyWniFwSaRAR8Bs2xZzT8vUctmc2jrkT7Yanzsaq1Xfk7sGC2PZMddKWHwqGzw",
  "key33": "4eKbffXZ4WC1BtX3KXdBYuYwifTJm2zzWiQs3rjhAyS9ZZLbGBobAxhCJwdN9m1MeiR7THfdMpvt9QEydRkVXFGT",
  "key34": "2zzsvzhqHSS44bae4BgwQx7S6CrXzEQA7MVLzU7ywbiXnzKeV8FWyLDVAvYo4gP9AXecCUoGZ9gz5oetfY6qpbeK",
  "key35": "2U1j5zkXxPWJy2869ib6QqHb8WUrt127765J4TjC4xT4crPxxCfcJ9NTq9BxCA3WZ9SFvoi1resVjuUx4TrN8T9e",
  "key36": "2qEm4njEQgtV3PnyEiUb4ug33s6dHbHuPsaWuP14DW6f1rZgFjA5fd8Nk2HHwWaihtrX9nhAgKiNo6vQWn2xPuxQ"
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
