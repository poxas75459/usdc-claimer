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
    "3EYQsv3GDTxXhKU8kDDFrheVDQgBWYPa5K7acUWcE4gGm7kNSenydhR67tENwCJJHfTKDUEEZQU49yujsvBMEU27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58q4EYt1aEPxamy31nryDiRuzM8BTBXd4SJhqXTwfzDq6dppGwi73HiaQUTjp7QNh8ExdwynDANhPQhos47RmAs7",
  "key1": "2eAwFwjH5s6Wh6Nuo9j1JxhtbcFjpz9jczQ1pVDpx1WLqgs9DYGbuFPAFhPf7ytFAZLgqrr3K4LPZdandHjaWQoh",
  "key2": "4katUVFyfMqBDPnRLDoBSxxLuxosDF7SKe3YkVXkLirdv844kUURFFE3WgeNsCx294xCMPFzbmHo2EH1xbDPJQci",
  "key3": "2ap3CffE5HnEmc3DpowoPcxYdKttbPSPYpNhDdBNrEiTnmt3Vhnv5biJHszYd5TesMg6iWNqmtkAWU27Gb3pYPqG",
  "key4": "V4MLwzqLvq7VDGm4UgmW4qKppdr3fQeJZK46DZLm85zeEGwdPvaEyy6WH7mUP59qW5UF866VJYwNef3AQgwt6id",
  "key5": "3gQwmc8iC2ed4RiCEnDXtVbzKFs36nkt5h4fVVWuiWHBrbReR7nuhuXRX7RE9A7fNevyGUBFXo6haAfnLpNciQUZ",
  "key6": "3dutAA9fBU238ksnYworut7Ku6zUMKr56b7bwzoa2vkb8wxG81XzvE6WmoiUa9s6LDEBCszjfmj8GLhGCusGAkud",
  "key7": "43sosjbDXBzmDQNmuzENEdSEmkrpzSa7DPrT2U5agRTQXnVhMkkrnSQbbneiUFuLEN6CLezKtPdw49znbMFFKYz",
  "key8": "4XLJU51ZqTToAiU8jUd5EpqgsDNKCktJVSxpAAgPt9mRBqFkxZjWGQnn464sPrZjsWP1tSeYd6d8P1rseBpPpiw8",
  "key9": "CKiAmWL3f7Ex736kkA1R9vAxv8FfCVF6xQPFfP8eJB1TtFSMqA9k1VsoNrxtqUnQr5iRshxeLXdKCxXnbNyqb2v",
  "key10": "4FW1hiJz2VZsWjnDcyQdNhy6bJtYPhUWk7Ao8bX6PB7EAKTVmhRDVpycwMjgySt7p8JM2B8DyokuPctX2CuxeHsB",
  "key11": "3i9THFDgVMfbFbeq3jizdcteUGBN1XVYtEdGA1E3RxD8wM795EzUq2xG4KfLL6DFzcbBB5GpQ49eSw6jjecYx8ZT",
  "key12": "58omek2JDwg53iPoxP8heBMCZ2HcH9vyYquBjWG3Nz4frp9aeRM6RJJSAJYLBfMt1SiCGt5beQUfBB6afCEnrwc4",
  "key13": "3ke5G6NoQMXCqBCu2K2XeaMGHE2id4KmT3Sv5XVYQTAC2p8nNvEkq9wemPspLx12j7Qb8gXbUJ5LhmKS3fACvDbq",
  "key14": "5HkRxHwnqSW4J1ynMpN9MWY7vmQ6c7bvYqSiJjVVYJsgWshwecsTsuKPeiTcV3MFMMDrYkXgLyV8VpBBrk1B5cVk",
  "key15": "3nUbwASJAZoNTvzwkRFNtqz5m9ucsNVdX77Shew1p9q6q3MFh4c8n9B6X4urHM4X1XzKXYgqb1scRmKSSYJy2wo5",
  "key16": "2xEooZQQpiaTRrq9xE1pL3cBSrQVGwPZEVGQZ7MUgiKQuW57bvqwYXgeQ1X1cPQojDd6jNszNDDHmggXJaR9M4Po",
  "key17": "39njomTy7ovCXbc5mA9i4RCn2sNmTg259Zn5CWfph9n4EukSUuyxkfpkRpnXxPVhkhf7B2Wsz8b1kerbLxsYBtty",
  "key18": "3x2yLW9EZfCy15Lya6U6q9AHP25JrEq9e1WBAZPBxzgG7HFby75mS8xx7V51WWJWb74e3WcZAkTzpfMj6FuZv1wZ",
  "key19": "32fnKKxc5Q1ktqQwnuXrHRpBmWyiAJjWLqu3puPfzdwcRgvX4b9eU5ynVBVd8jLCSeY3xrevkMCFiw8ANqEL76ru",
  "key20": "uubVQ5qpapvapR3fck8xak4kWQYnYvHag3yWZr5QpagGSaiaT8r4m1PGNG1fKDKoNtJtjZLXJCB6EzVgvDANeog",
  "key21": "5U8CLd9cK8xrMSe1HaL78J6ax9HEPLjemiGGch2MmUdjghnHkCkeQqsKw2XsaFWVmcHms7roiqbXgxYxSzBRCsD4",
  "key22": "4Bv8aXBhFuuQmt4fxjqeEskCFU34e8qUQehdAMKRGracsVm1dC6w6sxe6vUpTMrK5tjxzTxxqV1npisLwteLPAj5",
  "key23": "3c5p4HJELCBshLtsqtYjpFXpmzDGhiXeBhaxoxKUMLTNCHBfjwVtasfcfvzg5hLQ5oAiaPwVcEWJbJ3TNLX4tBGE",
  "key24": "4DymW14dvQT3CBpdvF4mqrAMM9MAV82tvkkwfjciohsjcCHTeBiFpk5wHDfZZtTppCo5QQoxFpZyHGyBvpbNELMK",
  "key25": "3aVYxUeb1EysFzHvtNsviVHXEg5hprubevSKWKWduJT8hFrPTddwRum5PJsL75PsnixSMy1ijipEnhEMvkMPup3U",
  "key26": "poQ1uFqNqafWLXA5SzCvKX2Pz6p3Tg2LF1exMif8jiGUQ6kyqVMCkRkNcmrT8C8EEqvFDDXT1RKZUeMswP1YLoB",
  "key27": "62g4J9SqJE6ozZCDML9EUV1WRYRiggeuf9kYwyzwAV6PyKDSTQsB8QmKjJXCojWBajQzwBfibhZHUeEgvtcC6CFW",
  "key28": "2ffHrpohAzVivzXAUdSjQQB9LkGJKzJZEEs5kfgBn8mv1KDG4o7q3tAVCsZ9n41LUUm2rMAYHM7LCFTEVZRTNwn5",
  "key29": "4tgUWumkn2EgLumq4aWThA9fdLX1mtirPHJ5SGNaEhoNzdtX4ukGuq6JpP89EUZKmowoKK7JQALmuw6vrxpsVkwv",
  "key30": "5BEoT9t84USkGd7JfXyrM3kmN9HqMYSirFXrmCmggLfJsWx9bP3mbBGQjX3SZC3P4tz7Q57t3wjfHnkJ5gvaoom3",
  "key31": "5rpJfdkaucbH38YJpYp2UPmQEerovmVajdzWQRVCmjvMd3oDhrWavbTkmBzQtaSdEEwnTucSfLE7cGx8gent7VWk"
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
