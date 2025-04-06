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
    "5ouDcjqVAaUGXnjz5fj2GE3khMnuNGAkrADmubsg29wRGWyJ4Ju9Xp2bvHREvMRyKJKXQ56S5wmSFXivfoKSy44a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kEHP7KDv7iMT71MFPEREiYRiNms7yhgh6Q47CvbNwFhYH8WG5DW9s2fSJ8xgmHQjsXFL745wKhBnFEiPRF8CJBq",
  "key1": "4b6BM4tQp8rRnzkY7K7kFxKAPQeWKYpKPRZWpMD8Km9ysEhAnefz2JTy264NNwq5PB3WQRirKXZ4fdyS8J5fmrQH",
  "key2": "61oUgs8cSustTN1CUE9gzUvUEU7UTQeBRrXgcpgfbvPjuWmSvJtKbUR1p2jTMD8DwvsZRnZVPxcfSaZ6QyRkrhDN",
  "key3": "31GkWcMni1kJ8EfLd3yKsubz525xs95RZu2VkJbzsKqyFEHNByhju9xdoc4s6aSQEUuiSLhmS2mm4qjoJozjWhLZ",
  "key4": "5yxDbcpwH5EorNxg4fanRbX8Hf31RziqEzDEbpKQK6XbEZ4LQWzpzBmoJ5TimSAfr1fxFfmSpUXGntV5hMfe1HZR",
  "key5": "DGJPND7YukSRTrXnNSJ1Bh7rNC5vXrarGdeeHiNWwT8KFFfocuozjRtYVrK3w8WBjzFihde3cPuR7tRWxKaXWZ2",
  "key6": "5jPNKh4M1MSF7AWbchGSitkg53fHNvgk8iQ3CQP3Kis26fs8D6zt3XLY1bRx2t5XakD11nJp82Y9VTuh5mSyDdo8",
  "key7": "3nXAJepy3xX3d4bKBNDRKxbpy4vhVLJmcbCUttMNa5ynPdQnpUT9a5KEeQLJ3N1k6q78WAktmk9NTgYLUkkiCXfk",
  "key8": "awzMqeLWh6yRXxW7wu2smbH6dFya7MhpA4xsUdEh65iTWwVkftPVGxKgoqofdXyEw9hXjap8uK5v23qgvmtbaF8",
  "key9": "2ZeAvfaheirqM4asigEWXXG82uNALdUHgcmkRzxXAEmxt6wKH893eu1ad4HecepdKeVM2Mvr1MEQSW246kdKmB5d",
  "key10": "3ja1hi3MhiHAaaM6dHudGULZnoxf91aQzjZbq7qCDwWBe5Uka5B3y4JSue8eRBrynHqxxAdoS61aMmtSwUA5Eetu",
  "key11": "5ozwMGdDAWxYf6YZwawMTJcCaoRL6jttC8b7ZWWoSeVSCBzou6q74W4i8iMVVnfLnPGP9ArqodHZvDCewZcqGQdK",
  "key12": "4YaGEfF65hUcCZc7fnk9TnQkmo2QqXhVumCxKRpq7EpCpyDTz1tpNZ3k1BHpU3Tkit9ZJMtQ6oXyRAsML8EQtLmg",
  "key13": "2gtD7ZpYFgBcBPLH57rWfo2nVVXakGyhPEnj4WYmEfYAsXfkcqZh8ppV7sWMqdNkYtk5Tx9SY5BA7cpHQsvjm44G",
  "key14": "2VKXf4DyMAUZCJsbSmk7GfNEgj9Rp2sHvgKxubEFcVkB6xjkYKvTjoXDLL8nwEo7HmyvQYZVMJocXLdjiD5WK8oF",
  "key15": "dZM3rhS9eFULNfVJT41qpL6Hjb65UhCZ65THuEHTiJiKSEdrn2UZpShzkxjFgBRw3MLQj9hvX9SrRVCcy8Nk1Kn",
  "key16": "mLoF8gJQDY37MQTMtjZ2Jvq9gfHRtrWB9yyRN9iDxtzQ4KfVYhAaikWCDAPoBUKD7cjJgubZt6DFXZ1E6cAfRT7",
  "key17": "3YhYKn2SyqeA3xfueFjiLsYCuiny1iSJgYwbBFvxi9Q1eoMDLVYr8fukzKnpvUpU4Kh6eaK3VshwU4i78YGFXy13",
  "key18": "FShk54tx71D37DyPdTXU9JKeSqTuyjWZKDhRGdiYfQFmNuRojNsQGUSZ5gCHRXadEHBQbKta6G46joRi1VQKVYi",
  "key19": "52xCF1D63LyCoxJdAPXqaAetg9KJNw7yFrStMezmX2v7RetysLNuNxGpuGtfHu1ESbdSE1mRPwR4jjdoYowe6Nmy",
  "key20": "3E8meTzFTYLuhTBos64K3xy5Y2SzjH11hD1mM6okk7NkgBt2J7TPxgdS9StJK3nDhCCti5SK6pfKj3i7SmaFarTm",
  "key21": "cyn3tzgx9aqDMeQXVTgUFXFYTtoEsYCGNSWDLiGtvA5DaegtgM6w1diGBtoBT8MiZUo9XgwbgrTQw86mNMSZfns",
  "key22": "2aqNcFzs1D6zU9uFgBjhUa3pgsyMCxKiicyJdo1Ckk2qXcUr329z1BC7d3itJPhywcJ5gMg13CU2iqdKGuxTA3dd",
  "key23": "54cCvHJG1t8Um6f8WEy6RxxmzVAkSRPc6LhC2kZswLH5Rox2gS5jD65JqrjXDFhtS6YEdYpp4vmk8mJ4Fo8bWMMa",
  "key24": "4zN5g2nqEf7rNct3HmEGyaLVu95dQHXRJuBj9WxbvY7bBJu6WawSxv4nXN55JuiXfbaWfvU6wYNwmJHhZ6avmBHw",
  "key25": "3m49Bp9RRxhaFH8HRjXyv9kXNBm53rRgFmQN1p2nEiuXgPvURck3fsAQBvptCjxYnVwz2qQCdA81eNHwLQbg8NAr",
  "key26": "63Xy7MQprdWP5RTCjTCvBCZr5zZGyGsaDmQYvLGsND9LzhMGpsH6FmBjDVQ5DoCNATcVGe4MUimvZnWMMyJKGwx4",
  "key27": "4NbMm7no2HwGUvEoX1c9gkx2RriYXUTYdzfKWeQB7tRrt4EvtMJnexUPDjtHtn4z2wVxy47FSb6AZvvgbdMnmzKc",
  "key28": "3U3iAECK7gvjqWqDPNoLdHfVzmchhRX68vZbqatC1RrHGNvXkbtNa5gphi4Py78WoqDXpUGjqPqKENBPJKQZ5uh",
  "key29": "2ppWgCEHxTkTHEJPbdW5nGrZAr24bzHNFCzfb9nYzGs5YNQ8zgnMqjFoBo5ydeL18ZHq2EyPJ1hgtMSB5239n2yC",
  "key30": "5TGWLy96rmJJXqiDvuAw6NVTSyYqi7nWbCJiq2zQPA6PAjUDVVHvSdQPkvd8ohZc8qdf36DW6f5MEFysmHJcWasQ",
  "key31": "KBL6cbFNYMfRVcyD8nJi8AVhukcicnoRMiTsGSNV1ar9oxngXS6KifJqsdBFKWLVBe6Rxtbv7eqGUTNAYEB1916",
  "key32": "Dio7ZjPGG5YSvu8inQ4NEuAz52GLUrFUavJ8gLiA2WryXsueo7ikGQ7if3chD2uELFBtpLSM78DNTxWd9tV1f1T",
  "key33": "5kqJLWrS5Jss1KvvmBbLtVGW6y9G2AP9gv1y1XanhWKWNsKHrV4TX3VBm1KBVd4RDZtX9H1Q71hbDreTq2HWjK56",
  "key34": "2PoGycZ7HNb4izHTrzns8uL2KdnXzmr3pgCNk7Vgzykcjj1FHn91YJssHLkAE1j9AYYHHBPxhSfzBoAG5MN3mNcG",
  "key35": "2YkHn9NU8gMMTMEmhNQwX1mKyvp1ZGbDQdKj98FN95K2j3WgEzArmY1JHAzCTHEkjRp6sRhVXr3ipGNQrGnUz3Bd",
  "key36": "4jSDpqoRy73fwJwqhtXfTtdBiZja4EjTjTM8uAGKJ43qFGDsmtMnXbsE4SDrAodeNkqoDvA8H1xgS7ZUanJvExPN"
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
