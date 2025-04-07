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
    "56Rd6YuxMbpUZArWrd97G2xGBS4EgQ8iXN3oMvRq2JSpkmLrv14yfd3gTTgWHTa8CWPwABET75nDtaJYjZYbPhkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fqNt3qyC63cCd5yfL3YRxtKHBFwQjT4FUXL4h6pPQqLz4XSA5VQfV8j7uPogBNLYQVD5kbt3yHyktTish4im1Vw",
  "key1": "4VkaGbQPE9BvrB33AEU3rXLLKcBBfKpZ7YMXHsXHwURYUA9WdkfjhCKLEagp5x5TJwvbLsgtKBqTG6wtMuiteCeD",
  "key2": "2x4aqTvKMkiDZUsAYYRmkhwLSfBqrVQnure9AKoUbMhW2k9vzeEvV9bAU3iw5hfJCWUkSKnAUcQcY5K1FEumvTKv",
  "key3": "29bjcbw6gFH7qTcJMGy2G2NpyRBKhJkzZqdAWidn9Z7zCgtjRyxUYfRkky6WhJwRXA6zGGzRa5H29jWp9ZTZdaZ3",
  "key4": "41gN5ZSTzcvvdDvmcL7VDuzSD1h3qijxrJWgpWbCzzRyaXEaZLdSShFqFPNGaBaeEDS66LWHNY9tr3qroPmmY6HS",
  "key5": "4dS2QKcoZvemqea4DzSkwGRSGXBwYvgYDzCu8i7RGmneojNwVeGdtytAtMYHcuCbCUYbDoUYAwizoxzBcZZk1PK1",
  "key6": "3UF1EmEUwiaXFoqLsJL8nrLGhuk6J66ba8Q6rmJ9FALQqEb8jX64kA8Gp1zmA6SgAFjsV8NsA6CjHcsvEtiNRRdc",
  "key7": "eGwcmKVzqJbkzL8gs47sKfy5tsia9R8GWrGVKUsLBJTLFQwbawqoZpTwaL2FqnjWxHAvR1Nz3X1U85zSXWdmstC",
  "key8": "3VBxa8uRGGTJyMYtjArtf1E2ZhSzFMwocLJXwBeKiVQLKh7Fd3wyEXNnZKrHqFpTFtbiqcXCMWPGVFXJUba6Hyme",
  "key9": "4XGhnWH7S4m5iu4qhjuKbBVD9vE7PCXBPJ8ABRzVLNrYuJGkFyDDor3Mukg9xuGQ4iBiXLvsP1wifLefKReM884Y",
  "key10": "4ZiirDQusk94obcanPZqiJka8JMMRmA4oZeMmcS56pHxx3tdPmomyhKgBDs8spVP74gqAHLcE31P5gkmw5hqvduk",
  "key11": "2AerxitTys6aT1v6Yw7uM8s8ZBDC4NRqVf9wtiCRv3pV9i3CKSFVcXpXbjYrc41YFwTzbMsPn8Jqr9jkZBBCh3Tu",
  "key12": "5bqqezQ5TaieuohJeWRHs5yXnV8vghPyeDuDCC8Z4s8g7GteZ9AHMkhsGvHAM9tKbo9ho88vpmVf8ZgQNXJdzfzN",
  "key13": "5CHDc39TbzesH8CmwrMaVA76QLdybBcBS4SH8U4XKs8VdAb5iL9fLzkeDzDHpxbaV2kjP8NqAA8vydGbmKd7DdT",
  "key14": "75HEsdxWojNSAYEzfdAzp2Ta6S5pv1bWkfyyY2J8VDNnbmNYSr8bRfm1Kk3NM5RR8FL8mNQLy7DcX3S26DqwGMR",
  "key15": "5RtsCGSYmKbrjaZ1Eo8fAuWa3TFas4dknGDsXLHM9mAVx9cm7MWt5cqfK3uxD3kDSc5LRRj52yr4NrhXYTHLF5Mm",
  "key16": "4AK88vCDCxQiptyCPpYeb2wkAozgyXDA6tKYqsEx4ZyrgfNSvtmpmkiLy7scgokBLz1hGPftXaT4wT72K1WaybfM",
  "key17": "5dVQAyiTxBED97MG26cGTGXLkWZTCMt1WRjn5einh74VLMC5aDNNmdMzXtPyXrXsuy3zuA8dcoje7A19SNGRHX6A",
  "key18": "3u2UewEnjMtxNinVfMpmfFNtnjqChddp9F5kVBjZj5bQzftgLbpmbFRmNLb383GBa5HEGF8hyqm4MfmaVu9P8U5w",
  "key19": "5V7q43YKfEuNom7egEnXeqsaiUvfMmmAM5TaAhoXySzx5RR86hcs8dYGGTyrKqnQ2BPVnBPiLPuM6CVusEqAFB3q",
  "key20": "5pdGGNuqR2HuXQj1H8t62Tg2aUkkaZojePD4XBCXkbLSwXfxeMgRMvuZnowFYc69pivRb8Bc4dKtEckAcYoD8qxv",
  "key21": "4anRaavSNYM3bumMaNLF7Ut4dYFvDxHPSbancjsJ7Y5dtbryPsuVUEXtuzoc5pkqt6S2fF2GW8oFNbV8XcyJr6q9",
  "key22": "5Anq3J9hMfXJz2AihEFwLU2zPJr6MDxsPLaUmXaRZBXJirn81EVVwMRrUtPH3Fgp1xtfKDKjdMnK8j3LXJRPCbWH",
  "key23": "4h74n3iBTnQrBUnaGYJVa3DdGF8y4SLKCuzx6itAv5vGn3qcbWUZTSyJVD9HNhZqPEgwjiLSySL4RnVBbHnHxKV6",
  "key24": "2h4XDbhs7jmWYmJkd6vhEjAXaVWKKcMmn9YsGsTZWF5zf5wXHa9aG4qBPYYGJJftqpjevmrFet7dfANbZZHENN3J",
  "key25": "71CFvqUhQopXxoBheMMLxsJoQBD3rX5MBuL9WgHgtjMZ1L6CHHMBcCbYvTftzN6d9chwcvVpZmc65YxXhD17cc3",
  "key26": "2NzicncPcLggmrLNPGarYbkhjL3Jc8unYC5PzjP5FXvqzds1KWahYLykdbZPLKTAMfsKP8eZNr4EKyjMjyrcyTVk",
  "key27": "5H5pC1y18VRCnPjN2L8XibmARbEjkv9KGA32DqZi9rajNfXd7U4oyLFx7AbBovqLvnLow5NGdKz48ce8KqPPTrcv",
  "key28": "4Y9ahPbGUSp3bq4G4er314kWX528skaDVNusnahzTvF6CQB9C6sAURgBBQ4P9mFKK3XoAxnGrpL7EMoR3ganfimT",
  "key29": "56pMSRNKqrCFJUauKAFnJuYs7WMNY9e6tzGDVWpwPhVZNQZH5KvF5X5iZjMCoMefAh3zQr1fCSj4b6ZgN3eJACFW",
  "key30": "3uBRdrGpokV1cNnSCTM23s7cAc97Y3G5deDqzcfXNJt4KQMZB48PYTqU4yQQ3zzZwccEGcmeWEMpWVhZHyEbvaYg",
  "key31": "HfKFsDd4FW4p5qBLAkkAdELhyX3hXHRMzfsU695Ma33bhGvJzxwEoLtuipho4r4riBxmmiJwe2V6GFGkgj2oXbd",
  "key32": "4r9iqdmqG6ZiLoc75gTDBqZXLa8upQqS3HsRsiCj65Rwqg1kcMRafxbHeEeWX9CQSDcsqEQAzWj5mZbvwtHMTtEc"
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
