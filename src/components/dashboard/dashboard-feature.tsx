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
    "25vU2LoH8xS5q2C27N2KeR2jLx5PEkupeeuzCPzNGEo24b4sj1JzKrHoXke7zJBw65CAobgqdAGC2f4JWJ5GkkYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fsGrdnsSA8iT2VmRJ2vVxHitnyAcE4c1cRBQs9QgU3WQRWMM2k8aAnpYLRjS2E4DUzKfxLL8kHoiLAUySvTecUK",
  "key1": "4kCHd7Qh7eVfia5CrNayqs8sGYZi2Wr6GWPebMAEHeXGbLiN91FDEnSCr1mZrUmJMAiTgUzfqEec6mZPFNbzAnt1",
  "key2": "4ZJ2VCkfsWn3xz7b3Q8TBuxsNF3SvcSmkhjD17KUFyWBVbvY3BqG4zZWZgAToVPN4PtjygVBRtS8D7K5PDYuZoGu",
  "key3": "3EBoexCeonhGiAcncghkW9aNdeopA2CwX7LDHe57twofJc838tSVthbdbtd1jnuHxtdWJHMpaB76UepgtAdaKhfE",
  "key4": "4h7eVbRDGDoBS9DE1jP3gBjF3ZriEYkMJGtFmDKXrAadV88pSVn6ztaavFkbUgEvru9o5JeTaPyBc8WEwLwsUyDq",
  "key5": "4ch2k1tv7ZcKN9iWyFqeXPZU14XsS9m8teajmxHxdBU1fRpRDAqYWzsLSMg8XT29vDvBzFpR1TB5okvecWYRNr8A",
  "key6": "4UmYemAcTuTwc7YqzWoeTmZup6uNUj1VWUvTu2MS4bt84n4LTMtU9u9WoKymQgmpVAmNfZCBRgnzo4rCR8H6Qh4a",
  "key7": "44Q1h5jezj5qpdSFotxz5ADSFshk58Egyf6WQRrQexMyHbPoQKFo7ELSa5RRqsAmmUXBu4niA3mCcjV9XL2JdnAg",
  "key8": "4JvWoJrqWX37zJZpieTV6Sz2S3RabPyHLN1WEYdtwGHpThBDA5bjgTYSarwpHbj3g4roQAeQezcgfPMoSfsyMmwU",
  "key9": "5uuJLjoue1n2ruYYuUX3BpNZqvXVoh1smbUAvfFtycSdQJhQYbHnW6KoDG7oLD648rZmW7wuRfj6nwD5E7bvZz1i",
  "key10": "4PbQTk4zx45gdb28EMLPQg3ortjZEe8unSF5guqMK9vo926eDYb7SgU4gPWtdyrgdvkThsJUT1Pzc6dVAfxgyX8c",
  "key11": "2aXyZMaG4jrXeeF55gm1KyqMhTQh9UXeq96YyoTpY5CXHZhn7C9CPU7cYBjqDJ9jEAcif9svyVz2Zi4P6K2mWFEA",
  "key12": "5poAodT43CnR5GqonN5xLA9m1g9rYtY49y4WhSzfooKZF8VBUUc9bPg5kpD6r9UndhDxgAmC6h2wJBzBiYa8Vn6W",
  "key13": "2nvLectr9WeDB8mZTMb16mpJpisVM3Z6RHyLX9U6TkLD3YDrapaWSBLGE2UJ44PVjQUE4EPc1YjgBv4CuZNeNkFm",
  "key14": "3p65nS4wXQMjeZ8hJib78QWkRyPAJSAhEN5PGsvsj6bKAtPzuMfoQabFZTuEwvsPKnwcht77Rf4d9Ca3QshaWcrm",
  "key15": "5dkqk9NpwMK7e4R7R4L3EZeh6aCdFkF6Jd4s2ZnMM2P2YpxoiZ4bLj5Y8uS9QQR9EEAfS6YQ8GobGzxHTFNmvnUT",
  "key16": "2TxNnBpd9gkKYCrEz6auFwssbzjkHBArUjkb6N7GpBmUi3PVW3uBmxZWnSBVMFhhAXX4SgeLTeryoaXUbLwwLYNt",
  "key17": "X2sSS3KKq9GKQSTP1L9sFHjTDze4goPxJFw8xm3vnfBYrKqyg5u7EyFZdhq8cGKNVWnPkj6NzsSawg5UAGtggAc",
  "key18": "98oT2XsjmoXj2wASL2UrSTnvxAeaZVLSYsqArt8hHzE3mWWjWd7Jke8UFzm1QxEgMztzFXB7TNU4Rg4Ssv4LgAw",
  "key19": "J5Yoy2cP6wLRSQbckNjQniKxFepLWQ9ozgfxT6mS8EjVAWHipQCkjjmR1hKoarJnhyBHDqL2BNxV3NGBZqnY9FD",
  "key20": "4jni1eCvnEXp14KRPC8kA8D2bcVoz4P2GK7H61tTiKsvGMZaAiumw7FFTHTa96bR3Q7i8SmMTvfRrDh3sSNRrDQa",
  "key21": "2a8QfaCDZ1vNLBZ5GsLmM6N7NVxToRqvpsAnF9iQDYrrS2MqUaEZUyj8RfdAjNEbkHTXVGkeDTvcmw28b48tTFgC",
  "key22": "4WdnHQ5p3MMMigWomdMw8eEPMYLRecvgL7BSpXoqByzuA7p1coqnmyEuMfg8dH8eRtW2Kbu8E4Z6wVHhvh3Jbnet",
  "key23": "4gNYyEE9Q9Xy7UptHRx4xdeerFRtUqq3QDQTspMF5SCuzffxoNh3x8P5NR1oitjxyB3ekbnZ6sg5cgPkkvug1RZx",
  "key24": "5sD3mFs8jox8W5YDhSYfgPNvfHE9WTgvc5tUoM6FBg2jQjNvUU2DzzyAJRswpJXqiGEUobkDkfjhcNvDobUSiwXY",
  "key25": "2pyt5zsK99pdFBYZuDimsibi1cw42KJvXm8Lpz54XKu6NRyqTTAB8diaThyq4PCiA7pFM6NjPMx7qDKgT9ayapLJ",
  "key26": "3hnFSxMeKwhZMmkvUK6QKS7ypgGZ9HkkLUs3wd4DEoSvLxs7FumEXphSFXcLmRvaEmfEpinixMkxVuv5DKZbZFv1",
  "key27": "4amtjTHhpDniXSamXdSRBqFhMyRcS7bf58Us7vsjmcKvWC7G2ghj7gKuHJUGkiAWiKLDCG15fmXWZMjv45d8ZrVb",
  "key28": "5KCgfiw7WLUQKkNLy6p8TcSPoDPTMfKSBim7XkYvSr7gCMFNieyU3Jh18u5ci4xNv71TeY2Ba2BYB36wEDivR18k",
  "key29": "2nmDFHdbBoPhp6edyuMM6YSXEW5E6Hmhx7Pnis1RbZBeA85LSBP5Wzfn9oTg1SEfZmx7kVn7YjQm7rdT15B2X9Mv",
  "key30": "3oWCmFF8Li3KjVJjb5pZxyLwr9FQbbjkVqiKWXfe2j2e8pN8rjgeUWo615JfUrTQ5HNFVRCZezrstSAUNBCj2kKv",
  "key31": "2nnJQk8UrCNXgCoUeXHwnhsoWHJDjVVK9RDrL1iEGrDdcKDAkx1k78dUgw8Cu3W2QAnPHd2EWNmToAVtPW84YaUi"
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
