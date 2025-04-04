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
    "3jschXUihvDHuYZqahp6ZSL6M1QkkRQMXYAFsv1ic1vUfsHNqzQDWNb9DFKwQqq839GiXUn2jphCxw1UUPvqRNEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XRhvfGFZfAj5Zw4PVaKE2uNztjM4y2UT2xSc3BuMVf2vVnEEX6kvDVvKF5kBKNcShMDr3HbbaYBsak7itsRQyYb",
  "key1": "vzXn4wPZmZxwNfdM5KAQYVeubpj3yaWaFGrB62QQA9KnQa5qEHDoShPuVjuStZzxjL1Zm7Exmm1dKn6nkH6oWQT",
  "key2": "2rNyhRQwAYD98EEyqGT8B6eusYkWTdcrPFsTVUBYHbg1dGDhFp4rKp6d5V8q1eWMidvCafk2TjM4xy2BrCtkauKM",
  "key3": "67pF8jNQQkgdhcyt1X2mAj8YS1RJzLdZiwHnuGF7s2sHacCmcgV9ccN2UFG59cMnaR1XtB7RbCbSynyvmz5rg2wX",
  "key4": "2eXjotySvZQCPSW9czRpAW8PkRSXJG9sdeB5g4h7yuRPafKUNg3He3HvtAwQyM3TyNBGUWSBZvk56k78w7zmny2F",
  "key5": "2KdkHmBu88bMSHfmGDy4EfikV3JehGcWTGe3uJJLrzHpJj5TBn6Fd4mNYjwtRVrYBgCFX1KMZjTAfx3w9Bkt8BnF",
  "key6": "3wSq8FSMeeD4TMWo4TxGFpX5y2aE6B7wxBCs2GRKpVHyqnsmztqkLCXj1Ys2BqPRCzBir7VW4gAK1NUnpvUd7WuS",
  "key7": "2a4gtjTmzxmHPSJaoNEKmAR1G9caT4SjMEZkgxzQb6eQeYs1BSMyLgUNRShLY6k3dKTam9Givwx251HpM5WGsWs4",
  "key8": "BmZ8HdGJPbkdi2kQc38vHp3teX69TKrtGHjGQ3U3HZKR5vqHrGBB724KCZC1BQ9VyzzfMft2ckBMxMNcgdknkBc",
  "key9": "2aNBaPB7nQdexbYGvMu1LRA24XVkDaHSY9LxnS2bp4J1AtmDZWi5ikfVdVG9VbeSEVJrtguEJ8zE2LohiTiujSkj",
  "key10": "a74bozr27TibUBS4TW3kUpojGoduNcZb2z8H7BbDGHsreUZPYZZVu6xmQzinZZaYNvxjzS8ek7vtsM83GnJnCQx",
  "key11": "53p9Z3J3jeAkubfFSwoVg53147UrwvnkDUuQc1WKHNY5NPcn86kervrxYZ5qqTNHwwUzUgoELf7yyzFSrqjR3nRZ",
  "key12": "5ETyGzJkSaQWZR84UoeUPnqBnDkBE4ZiSeTN5JEQ7ZHLMriQd5eCLaEc12jzoBRaaYTdmSct9TeeNrj46dSVhezg",
  "key13": "5GDZL6Jv1otXie3PP3FPqLHCyznagKb4Xus4imkXhvZCVikymcGovYvoybaEkUEseUA6NkrQVpUGz5ZKoiH8bxkU",
  "key14": "4UeVD1kn3RV3fVyhJRa7bXQu4u8wDFioBRwohT7cLm3NZQ76ksiVgEJHiGmvSNcLEZnP5T3Uytr77pzg16VYrG3E",
  "key15": "MpqMLBEGnN5E1seaomLqihVFop84Uh1yzQR9Eak7WPWAioPiPB2koUCbaqrXA4hkcSaDYo7fh3YXU56QDe5Gh4n",
  "key16": "4a6QVZWRWeNEr8U8mcM1SMHdYdsCnx6JjGbVbLp3sZrperfvHGDqGiXYMiopKgibpF9LfVMTYusDnpaWycWnWK3r",
  "key17": "3fgWr1pxhrbTtdX3M2VTpgn1hmrqJN2ZRcLEpS8N9BEHySWGWixihBfYQQEYucnSmPXC6hvGEhCweuyXkPbjwtv6",
  "key18": "3BRxTYBD36NSTojf8PNtUYGKZa3jBNzCcnhqPW3zoYQCEak1V4wzs1ntzKB7yik7XrDh58FoX4QhG3FrTCpLxF8d",
  "key19": "41bksuzrB58QSWo4HTCfW1kUroRwTziGAD8tFFSCW44FHHoHYcC4JQuEQsExoHHsv7t63KZfHcGDVTRKUaBzdZx5",
  "key20": "2jdBJ1Ye4GbHZJXj1NjuRaLptXrH1dpw14mnQ6ivKBFaUgg5C1Wp5BCxrojWTF7KroRL1VVrd6U8jbpGfThhQV6E",
  "key21": "2k6m6hPmvmv4ktHFgJuy4LpxMs1S4R1dtXitpGCd83rUkvFb4T3sp7BBtuXr2TaErYJ1sydgkkoAMFmr9Co16iSS",
  "key22": "2qDTRM6pu2fE13eJJkYZnwQhfdBKUBvV9Poa1XTqqka7wgMi4tmEKYfbzt7hcc7ZiAPHASCY9nuz7vKqYe9v8kcK",
  "key23": "21WRzPrqzcyfkMcUDiE4bmUCvY9b9k47mJwyMhoWGKeA17otuqh7HVDqQ6uuzQDHLMWt6RZMjqwVDg1Au6x8Ja4d",
  "key24": "4oapkAj4Dkz6Y8wdTgU7SgGYwdyqtEG5ixZjiRuzN4HyEEizJUsiNk2VBHzCUKXKnGymzrNZGdgh8gSZBn34HPaj",
  "key25": "32tyGfFW8WQ3DNDtPzSRNfBxLrD2a3KEgHBjzjdMTrPiWGsqh3A48w6traBMvnEmNDGwsxmTH6bBNnod9p4BLQV1",
  "key26": "2Y3aXi3UazHMZLok7MJCNz88hTwwnj8rH19PDRTX4wwPd6GBzhqz2YpT4j6BaLS2dLHp4ocWnRMH1dndr9RFnS7y",
  "key27": "5ZuZ3k77gGv2jHjpAEUiVSDMuEoARnq6RmuTHmwVvNpfcUZt4qTM3zXkuWwVZ3m86GaQxNaYaNsCHd47W8pLTmuv",
  "key28": "21Py6HBBPG4NSCfsLNFxL7dd6Aan63NuyD2vMrEfARw6nKnfHvto85xhdfQhAwcyiUjni3sh1GG26NfAiWgR6JWT"
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
