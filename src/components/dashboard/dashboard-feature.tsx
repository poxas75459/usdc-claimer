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
    "2Sa1f6DjwSyKdhgW2iACbicUkcqYpKX4qrv4jAyZbK3D9fati6vFGk8QTcpAK5vudrHE3zbJpucd7hAFGybSVZPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wS2bmXzzkjNmnY3ixbxQuYMhpsASo66dTSa2R6PQTvLriE5UK6VhBTjcKbUDc9v7xJUupmqeuwfVYkFkrQKq7hh",
  "key1": "4nfmAYaJDXmK8HPixyhYXd5ComcJU68nD8iYeE39PXz1YznFxUh2nZ8bwZnXkjeENypb4iw793RJ63ARbXhpbn6g",
  "key2": "28VxyTo8TMCWXKvMjoLR6qrPciNaGncEB16wN8XsGtAYqgAV5fezh45RM1vrfkKsx15niC6qpxshxqguFtLVYC3u",
  "key3": "2G3wC4LuyMb5cKGygRwRNQxK1j9yE8QVxmC7YHRuAT8a7YQ79NWPUcApR5QA6fuQadktUZUNDd1EKY8qgTME4JAY",
  "key4": "64iw5bw3nzePKioUii8Qw1uoGDbvbxXMpigHPcyq4XzaJ41MUbnZAjyWoPKu7Qh4YvJ6WJQpwGY9vG4SwaTE26pR",
  "key5": "5bwBY8fvstquxunDqdawWujH7v6Jv4TWVw923rPRW45tnixEjJjrU1K3ncp9vdt8YtrZqRicSoRajbqPQNoH1Fpq",
  "key6": "2udTTii41SbTVZRzqj4oHqHvQgHkidTa7bMwu2WNbJnWVVgPmABXvKNc2sq2b6bQaoxnVf52QHVCpSNTsSEhwbC9",
  "key7": "2qSeFUyrnFfvdoPRuLajKgYSRJDjB5qPac9vY3YPZewCKPJtYtGregEiyNHAsGTE5pUFAmN3FSfivWqNcasA3tA4",
  "key8": "2wi9JEffXhcXK3pNvYf7X74wb8N1LMhsjP5c3Fr556bn3eiqHmT6y2JoXCLtomVFKJLwFhvZWhwjfKZFV3NZPisi",
  "key9": "4fHJoP1jRf8yecAcpHLPsNihfneZP5MvTx4kxT1vRHiB21RGCLRHMmgW7EEoKmjSJ3uk9SR8U7qACo3MgrFFwDMx",
  "key10": "59grf7JSyAJwiKyXMuiwhT4ekEPnJRwnWxGmsAZ4gLwgQq66K2pbFb4AWZupy1Lg5zUF2YCBmAGzJdY8J56cRsuj",
  "key11": "wRiAJwZLqRXXy9nx8kLs2A2W5vykZgv4hXku7iY4NsiJmHGnyA3ihsieviBNPy4zfAwVc2iVXakRGaejvz1ZVeP",
  "key12": "2jvGFjfLhHU13JwdRVQat8yxeQ4TzU4j5DrphxS9w1AktVkpE7xdj9ZBzkdv9Wcpm9QxD9gPrGAP6BVCdHPcdCQa",
  "key13": "3iGtY5WWwFB8y9cRwRaNSHSkhXprPbobbjhYhErz47WfqYt2xEh9bBvWbdUHs6VTL4HQQYrigTdjZTNneYW6GeS8",
  "key14": "4ZjcoV1Grp8tkFQvKCTtLsupoP5Niz3irDKnLAwgzUJGPKeVFPDCaLbYeFazF2okDbt4CjPWJmXeGF4fibgdiXmD",
  "key15": "LEG2rqgShjoLzbbpkhekHKuTNxShHX6ZkR5jUxmJQQ2pvZoKwkB8BH7hjP2FkyxGq2aAxyQ2UYVhcZpQ4Umzi92",
  "key16": "wWqRyjhG9AXEzomgPrkBT8MGTfexn6whtpznoiXtBVBUZd9PPgap511E2n5GCr6sNy2jgWG7aSkx4AHciiCjxiM",
  "key17": "4TKVfajd7bM17BtfSFha7698aHD1A6nGc3UZ9VAb8fkFBN9panA2t9MfrgVhEGNt9pMot3txd4AkZwTsZ31eKouY",
  "key18": "3pQRLXUvmSbQLpZDhuJmJtztc96oM9oSBPidvwFTvBBHirN1PrBvANzii2TjMTX7kTMundH6EqXKgERHnDVzcc4C",
  "key19": "4TQkqmAAiNgc9pyxXyFZLRXWwXFmGiguBYTo4xKzj7ctV3usKPztUzwLUUt8bPpR4DFwdrT542KZups9QY7dKjok",
  "key20": "AYEiDKm1hqEcPPfBNJmJnchieNQyzMLSuDEYVvv5d1p7f961RUTBk4FzLod7zxnFG9KRtcj1S9wSf6aMGie2DmA",
  "key21": "2mDhvJwtwZsi5KvYUkodBUdUWj6fJoQ5uFT7gq8BRS9qGgXi5PL98PbqVyYEbDQPFqEwbrUHTDngCVy6NVw64xCf",
  "key22": "3sZdwopkRefXtUttssqRCEh6FMhLU7YimmPmREWrBfoqsovNVnQHjnEx69FJ6xrSeFso7dbhvFxG2vf14iSFLdRB",
  "key23": "5NvzFrtBTZ9ZoyswB75eJicUayuyqUtqiQ7z1Gx9fiSZwSNukkZMj4HihXf3pNwMsnJ6fPAhu7PnXZF6KVs1WpaG",
  "key24": "2f4e9aUWwsGJPLdgBS35yPSjQ2m5odS13B78CJ1QRJgMXFUKSnSPdrFKHhwMPEP1vg85FvtekmXchZPqNBqJZLeZ",
  "key25": "4WLxVozA1shNhiU74ty3h2dBPWrYyeSuibYhpTbJZd84NF5ZHwSccrgmMerpiYm3J2hg7Cqtp5uZTbk5K3BZjyeQ",
  "key26": "HYLp2fiokSpKnSRTfPnAtsaNjTdBF6nAn2Q5Vn6yJcTMDcs32wjsiJTEVU7KtRfxmh3yN1VZbPg8Sjo93GZoLtF",
  "key27": "3WtpYuEZYSKHuKqhdk81hLPs8Nrjz2A2JBMUPRJeknmtgHCMZU6WkNpvoXbVmnMr17SZtfWDbG3JezPyrfMxSL7v",
  "key28": "3ffgAdBz181bZNTSXbNv5Kz2v6ybqddTACisonVMazuejGCCyy3EbuvFHxMYo1Rkx8YgfgGDaGhQ3NKYwNPJVbdP",
  "key29": "4WcvZMFar2mHcExK37FiyEbVd15YVa2o4RfgAbuW6AKKLBaPzsCm8og1SpGUfoa5LpHSqx6jw7NFSTcy5CdKC5mP",
  "key30": "2FAqkqeeNDwxGcQmiGZK81sVdCXCcsRRVheMbknZ5wodYtGCJrVEgXBahwDPumkhRzgdLQRVkxLPQQ3pjkPaBkZn",
  "key31": "3ieSZJ8jA9YM4erKeGaSJWC5KvSUwQdw2k4KbqmLDY533rbNPqdPEvNtnfSkFQsERxuAz3tsRZC262oa11qZDL37"
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
