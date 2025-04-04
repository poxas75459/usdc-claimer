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
    "2Xev7tXGtRE3ctmQarvBV1bcrhiC43H79nBpmyGmMAZ3f1PBzcjJoVSmjCrrGNFqkaMf7KeBjacg91gWcrQvWNt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eaptNLV4cRSeYGP5tvWaB24rnUiwww6W5hBKX4HnEEnkWfPMytL4voWwmQgoE9Zc28N7kUzGdPBGCbu3Nh5HNAG",
  "key1": "2w12EkWauVTaH5XiNaUx6gMufBSht7wV5yrCehAyHhzmKubiojSGfhWrndgpKinZqWcB3vYhUA2ALx6Riy75UCEv",
  "key2": "JGbkxhsuUzRCCd3eYmbi32UeC8zJW2Pgc5xXqvfG5T5SGiktgZcvTU3cvUJK6NFLCiw4MBjz79PCDDKdL4hLAtC",
  "key3": "krBapdvQkVPKQ12ALZsTpmBTdWQK5C4BC8EkjvV66cE7iwv6qqaweVnuLgLgK6AN89zSrorCARiVqGJMT4TKWZQ",
  "key4": "2NpMybdJApfJyJ8SikZpngNExo1ZoGQtnmfpqffMmcb66utwLpSdMnU4FxqqUmrZrdDHBh46QSogMooYPDrGyAyZ",
  "key5": "56W1R4dCnvBAs7btcH4NrMNUdTrepFDS9CMdje1mGbCGgV7urs3mS9UaA6AsunvoWZZVkSD3tGHqKf41LeyXYdx6",
  "key6": "29iMo4f4Hhch54CqmE6aoyaERzc8fjvsMCDBPsXU58hi7D5VShf6G3VtTRiB8xYBgS76q4pWEvhyWV9NnNxHR5CU",
  "key7": "5cNsgkMEYLjk85CdtMgAdrukR54MinFU82jiow3MHAj8N4fVfgCXNCZZu8tjryqaBn1uQ2nWukmoCN2QJuP63Md6",
  "key8": "2tuYoFK6FV6S85dsk2DiEGcxEdWs6wfMrnbiYv4QJvCeE7emNBYipGoZnJz4HoiBv1uJJ2kSiaDZsEcUo2UPNsGz",
  "key9": "2PQ4UtJk3bc3sUEmADi8TmkyyZcbTRvonDS74SdtrnGyVXA5edC3i9GKG3j7MxZRYieaaVLg2KBmfBZ2HnhnVqh4",
  "key10": "4cHDUFYU6wmfLJRY6kg4j5Pzwjb944RSGbRUoGXR1UMr9h612M22SmBNQczXtJuj8cWgJqDbcJ5KAbCiSqGBqvG8",
  "key11": "2nTy8gyB6LqYJZWeSRurttXa32vMDREnGUrTtemHphuU6wbFDe7bxeLkXhgZKbPER2A6dokzGp6xgPvF7G1YosVN",
  "key12": "2gEHSL7wJ5dfptuAC3HgXMycL4Lm1iEMu62N1Jxyua4v7JAzDPMV5AZLQCoa1ViWMuR9icriboFYVzGHe8SLysvg",
  "key13": "5asejjMxDhqCQ4TYhwEQXeDhx1AMGd6Lm6v7G5x6yYWFvZAM1Uriz8Whijuy2cHYujvdpvR6dSCVvdo9ozMoMUbp",
  "key14": "5qMFr9rNSLwT1MGp9EragSWnWkLbdr2BRTdLbf2TuxmNyxMA9zSFM6JzftJRKEtVjhXWJrDVGtbFRtKV1kwG1eVc",
  "key15": "5xhpABg6UM9nyCckmv4o7EReetwULSbC1eKEwMSzNJouo64yTF5EPsSsJ9opbw4aT6KTb8u1W18vZF3LvbsEXAb8",
  "key16": "4GVXx71Kj1bLz8yq3myxATfBgM7C9HB8vYSpX9DqJjmCDfXrE2aRGm1vX64HKyf7HPTdKa8d5RsCQ9fRQc5mnf1r",
  "key17": "3EMLuPGkioXZvsWdVN2oPMNJE3DG9pXSUHomBrgyYFiDjhmfuztPa4EaeosyHWr4CHxnBeNoCiYS5RcGhiJT38Z4",
  "key18": "5m9Qs4867EwJHT13X6MUy7mx3S5b8JRVN6T9rcvkhfxoT1bJKy14MMx7rDEqZzj9nidJQZwSTAojzQVwguBNudnq",
  "key19": "51kpbnudsYJvhB4S4wizxUnFZt7NUS3PtFbxXudwM4woW6VJxAta7PSyvMBZRQMTnSiyMR8EL8BqCP8zjW4biB9Z",
  "key20": "FK9zHGvifMjKYmUWQKWyS1vk1A7DN5qqqDDE6UE97JR7pbjtMn7AmqwV4ACCNStYzom66o4KXz5kBorX6VoA7rp",
  "key21": "4LmnXuT1c4KcQS6QixoqBTPN3B72v7HHTZte4cEF9wDuVGCjboj9quziWexurddMn2BhaB5bDAEHvKAnkHvfMhpc",
  "key22": "3S7RS4XfE5afCc7E7mcbEZZpYW8LYAeHAefeUT6zGdcJtBSm3x88k8W7zgWUYuHvJsotBdzAvRUq47DLHYSJdmFA",
  "key23": "2WE7ZVEFvitMrhN6dT95Qom5KbPSCty9wvKDaZaFnywTdzUmXozAxKfGWp8cvaKyqBzc5bvvRMBWFLLYekygKpCs",
  "key24": "2jnx13YksuXn4e6nqcic6t6RAb37sSnseLXN5VFQbifgb1ZpBu7EH8HUG2WQP8CUuGpxsD6mqBd8QvS5deVoQybv",
  "key25": "3NdUSk4XZh7rrQknXqUGZ6kP7FebsCnCgtnDwiCeYcRJspmuYahAVDbEEKZe5yrj6pRmYNTc9fgMRA7W7ztQE2sU",
  "key26": "2RyE9tBCpk51pp3kmDEMXFwTX6YCdNUAdYAyWd1EWhzAhof28G8jubSMSoQZPFmd4aDgkYRGXhfSpH27fsRg14xj",
  "key27": "2tPqmPnQGGQQyqoEQbkUp36REUfFJWZMssgDJL14891dAe5fNrMaFrFtcVJEMfS1qDfhE8rEjQRnyR4iBDRejG6W"
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
