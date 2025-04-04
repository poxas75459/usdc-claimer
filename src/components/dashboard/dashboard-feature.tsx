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
    "5VFpKS1YHV8xmvCmbPxiZieEV9t3YvBBsVmbKzYD24xuN5avTyR1ChPxJW1bxC1RacvxRKBWJZa4bmuP4XHZsLDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U7h6DxpKzPEiAU8TwFJUV2Zzm4Synf9h3XxHdWwBSyuU3KnUxN2M2dsACPLJf12twZrEJXUVjFQK3GENDNV3nJi",
  "key1": "3JZCAQt7p5L1hRdvFmUeYvQgMvwDat1DSxcRYmgWaq23VDWBDVzkKpoC3id4pVYthjY6p6VuLY9UkYSCrnJWQsAZ",
  "key2": "2WoPum1p41rxSxmGwHLuimHyyJmup4BG6chJknYJMhapSUXs4ZRb2PZBYwv32vbP6PqRTDFwqnqRqpwJftLLmB1e",
  "key3": "4twQkhstjFCpJpahH7m2rKBC1UsfVpDF9VRkWk97bfxBTPGTRdXUXT4LqgpRkBkViVgfppfafQnRYmd5XuaXFg11",
  "key4": "5x2sccDVCGKgUsMwM84PiMSGPGAHaGggNfG5At9JDyPSQ8aghYwU1DeyUmMeXCYD1zBTCYJmwPF5vEVxSAWRnUXg",
  "key5": "Prqz2WrVdb6eeFbSC1Ac5Ejtvm4js8b6skU4qbN21jmZkMD7tEa2di94LhtsvE3PQKCzYsnD8vKgpDK5v8T7fzE",
  "key6": "4Po3kEUvgR9sLWDBN4MUGYM83bcVt4meDhZNXNBm21BhAFM8mL3W5dyion4m6ouAEauK2UDrYhjap5bMBrY8a3vN",
  "key7": "2WAHTsAKVZDDpvYcbns3CfBia8EJF4kkozhobL26kVtfTYhDEH49mNLp7ZJBcFV1P1FgCbWJZXxmGur2goeUNEke",
  "key8": "okUGKYCmH4mAaGcYHvqwb7jz3kecN7Twy5eKvAp49sz59F6EYGQtu4AiNfMzThfBvcTRndnB7JTYj8aAFaFyb7R",
  "key9": "2ffLMKTcA2C3CBNKqQWk5we2PUSbDjPNxX1V1QJfxLYBhdxnsKgnUZbHhRtHydYcomCezs3UnYW4ks3ErYnhv14c",
  "key10": "28YpZBnBFsLjh91z6doeoyG42HqvPTv2ik7UJS6xKihh1HHnfFmT9U6cwMbSW6ft4LzeRVWMg3qyewevKJeoWWeV",
  "key11": "2ND2wb5eCUAGp7cidYgWzdZBZPv1WDRF9EAAJC5aCpV2qZsj3vfrR7CCLwJuqAwgrQwz3a8wY5PWzfhvK3KP5BA5",
  "key12": "3zh2M1Wynsvt9GJe3Q8wQfGTk3R6DXVbTQxKpS3kHMZ8SFDU9YmgFm92TPjS9jZzkgCoogLTEYzNmVm81sze1MGk",
  "key13": "5HezbHrEx2No7fMK6hYH3ywWgxyH7DHEn4N2XignRDepczLRKjYzdWBghXzFmEeq1X8RjaHhHqH2Hu8FgtcEf8KD",
  "key14": "3J1c6S4eJRfHDNDEQvEQqWpm5c3Go8Sz9NiUbQ2moBoQNKjdMQ617pUU3SF1oztP9Gh5K6xdmmb3VwNp5aRwpcrU",
  "key15": "4n6tD4uX8h7JJj55GN52T3Qf5ywCudS2kzH8hbSDzhGR35umuu4fcCWjLC6rhMihKvVeuototDGuNptz7R3wXr6t",
  "key16": "4XHeouig5NbCRMKK4WoP5QSK92X8jZner68wmsMMikJZU8uGJWj2em8K7xb4wy4bojhjgeYW99sPvurAMudPooVN",
  "key17": "262NYNcVLZjAS5ivh64Bf69oyz72oDua7PFjNsSBXGajBypGZ7BbeZKxPv9ohVbxrkJq34FcRBLDdtYYtZDzdAUG",
  "key18": "4o8E6Bi7pxzFBP9KZViXmd793UsWhPJVrEFCuVRgu84xogCYDtr7cfTtVieGDDavhFE19mciJSxT4o2qF8AmuR59",
  "key19": "5rFirYmid8FywVyEng4SwX5HT9vqFwFnY1vrW5yJsxgbWciKLgzW2SWCiihAgisbagwMWUmDxwvHgtjSnSFaMrr8",
  "key20": "4cXn7nLhFJ37W8YffYPt2g5w1k4qmnTP4RxFh3Qv2sBGXUo6PU6SyS4kMwdY5LikjqRABFAkqFii6VSejy2dK2Nw",
  "key21": "5mmmzkpAgeLPrN9w4npLHfw1dMD8zhDyPMsMaxmfNw6ZVmmCywPvCezYi85Xi5Z1jbrXYpCWgqA53tw6QQ9TFAuW",
  "key22": "2DBAv3nEHW4tACVrK373ivY3aKkgnbh1GZjpfcorLvu2iJaUwV9DRwcgJNBQ57akLkZ2mveQRW2tY91FMzr4yCPi",
  "key23": "594cgHhN8S9rJCrWC58GUP2TwvbZp8icq6VJLqYXrhCTpWErrn6ium94Ca6ZYPTJAMwbrFE4s89Tqu7wXJ6mpgpo",
  "key24": "42eCVMyu4GE1idZ1UBH51TtHrtFf8EeePs4SVLZhePag7cs3CveEZLDjPsJRguDnRT3VSqoCRV91rKcdKZU2o5DE",
  "key25": "A3Qq4RijvVR1njTPM1LTv5RPpTgWp7TVXsDxAkXxp492C8SzuS5jWkmeYEqH1aHq8ajzEparGM96FmoDSCZnbKm",
  "key26": "4rViURZryFCyVZRRueUTupagXQqbh9eFySU2X5jSrWP2SC9g7Q6awiy6S7H9z6md67F3QJf8Qxq1p3WkQPgmQRkE",
  "key27": "2nmJQzoFZGj8LyHmLrwzudC2QQjir3t8SFXzYMzjc8YJfu531kFydeRA9tGDGntq2jMGy6WzKhZdXxEwNqoufFA6",
  "key28": "2KiKDfrZz1BzmMUN2Vvfdxkq5NyyTkfYv8CLdesMjVmfBHu2x4bpuhBCF8fDJrKaWFbtzhoGvJwqT5U5g1cFfgKS",
  "key29": "5xM9hjk4m8pSNdzA6taTemEMUg1nvpLKuvUp3FWbrarG18qm2hdngvkxVBEys94NX6KdyB9s5hchEA5qUskbY5PZ",
  "key30": "4CZNjNmGA3pvEhuv2WFkmBh9eHGAAs2DxHsvGYTy9tbk3MtuueAcfb2LiNjfxy1uJMrpHsgekSikGPk3bGhnLbG5"
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
