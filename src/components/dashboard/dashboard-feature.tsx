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
    "3GSyRticreEQWg6dgtLbGqJeBhY2kpP5TZvVwxCTjq2K8cVrHoRwrfHApwUVK6X6mYdo7EBk4Z7QBzgxA2me5ZoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fptT7SPQAjSMX85dyjaFwJhAkoffLsQv3kyw26Ckx14mTmTGFdCEhPer8Lq5NGfFTtU3bJ96bejnjiUE9jk8qu4",
  "key1": "24ddrqs6Vn6HTbM8FTT7ofnsVcgLAM3e5Va6142iyasWrd4b567Pr6eWVLMZhA8XrtEdDbpkvZMtmUon9zQzfypC",
  "key2": "31XEAdjGhF8kHt4iu2WZVMFaUwi64HjGQ98dHnCLybdqQY3a1xqZkfQyLvjaxFMSuTRZ36gsrj2Zx9J8iJyQ784D",
  "key3": "5h1kqEzd8KwPP5EFayvMmmaQVAV9TYFdruqoZ3yZJGaKf3b7tpwgrkUf5jUcGumPPP3rcN2WagGFpPP57ug65WLY",
  "key4": "5LrAL6fRurVtGk8rz6ahmBagkWToe8SA5x8BuaMdnJUETiLUUdcasqisWpn5UuVo3J5XrhaacdPqdYYWgSRZa8Qr",
  "key5": "2mJaiNVSMwgrkr4E7rRCSu1P9JjZ2e4rKYFZdsmPHSByPExeE65xpXpowqPYpSMaKHjExaUFhuzV5EFSL3uiVPck",
  "key6": "4AB1t3RospTt69Ba5kNkszba7yf5tswPnkUuvLEw3Vwywts7S3mLm7Jm42kdmNvbZVbS8LF3gpHUVkzFD8kLi5TU",
  "key7": "34Vkz44J9mjc1rof4A4sPGfkokJeaHPFiByc8ZkWQj4PqbAyjLfRLrgU6d4yvjBayYs1qcEfpfUgiZdK9kswrxpD",
  "key8": "NRSMkqmZ1DiRcgdtZ3C6FonBR2J4gVfC7Hct6qLEE2XTWZTJS2xeofgstBngpuUbKN5XzBesykhgjEXuWNZuU17",
  "key9": "66xjqsm4L9rvwmUqZKrFTWkmJsTPtef6UVj3GB6QxHwKeK57JGWZM37zsCb7BFTVKmrp9oK9vMxxGHGJPCBQhH3D",
  "key10": "5xejo3eDY7xWGAckA1rWHt7UiCqpLB3XHccrrDMMcCM688Z9U7KfwgAYavrscU25f88vH4ef6vDsubusUUjqwXET",
  "key11": "4GZZAcaDZtrmMm2oGQ78zHs3BCGK19x4Ufmi5LuJG7ZV5WrGkjyZGejjaCkaWUCeYTFQ2bGsSTd7AiTqGyaSBNYw",
  "key12": "65Swvk2kYgqMGqGg1AaVXuDpSdKHZLZm5SvKVWnc4LEqqmTszpSsF6G5SYyCo7EW5E5Hvv2bHb9FEcHYVJhAYEd7",
  "key13": "JgcGVdYcHmbycC2LFvCSSZfvhEakUiQn4fsMftQJJJzXcBLGfKMEKpgTvWJTBtshVeuDgPwVoceAcdqtqXpz3wh",
  "key14": "DVemNthYiMVXHkYoAiW6czsnhCTmdQSji8mgii6W8P2YXfTwHTtPjpX2ceFGpy4bHvqYi6agffBUT7e2izEwjhP",
  "key15": "2GMHgk6dCcxfWB2RksJwPdXgDbpTbE9SaoWz1qYoUqD4hHkRWsRrXbDYGfUBzdwELeyknwgA5UutFUtup3YW7fD9",
  "key16": "3825CoJ8xXnc2ZpsgHsXcvypRQfSToUh8Piiu6FJVAsbwkY7W3ZXi9QmXv8htabyo1c5CKgr1ATskXnPy3sYP1ro",
  "key17": "3ZjPxjQbVqv5hczV2ZcTjAT9buELkgS6pUMQmVFfebtmKuccTPNZ8MW37gZRHEtHMoo7geZ41rTWVvUDD4a1R4MQ",
  "key18": "4RvAAQbvUY6k7ydy3WVpWZWaf8e8GxTvm7TCnn5a3kT9vaVUDwqRoMu8BMq3EM8yUyu4AutxXKZKsqEAdF7armYx",
  "key19": "4Qaa8txjaMHN5i9i7zw78yLjFKzyXgtwcoYUCq7xUHS317THEETHd8dC3chSoNbLY5a5NAtvKG4t3y4G6h4UNeyT",
  "key20": "5QCoyFdw43EF5CxuF9ykXT6wVWhVqbgfbHGTogb2yh5uLK2Z11Xu9MFR5R9rcT1Lyw8T5KDYJ1SLh1NJKe1j1KZK",
  "key21": "6nb9D7D7bjaQVsQ1qUN1AfhBw678VdEKkyVuGGF3BhXv3wxrxKjZ29t2tejLsSL51JUADxxZpQoGyqp3zoBsXt5",
  "key22": "4wncVT1q1fQAP8Bj4UzRFj1wLccMyKUvHLgjTsx95mfLHktbBo54LHCToGWQ3ysFUJZoV7PkLBRZtzkLEG6LMycb",
  "key23": "2cbBoAChgkAZ1atzhZ7jXj5CJEphCaXaGAh1CXdtFjHNjy6uu8t4Yz3Z8zqMUsYjCUzvpBDuUtTzVT8mdDiUDgos",
  "key24": "5xVEuYyFzoMsFCYAVbYnmN1G5T5bQ4S66iQodCJ9ZsZES6Rw3KJ5ibTW6vyGCCE4XjsDDMndWwJdB9A1g3rzn9Cs",
  "key25": "4ne11b6Gy12CZe5XmW3r9y6SAxMYqrvHxuV8yWLRjkHoepQHKjFb6iNK8enCfeiNVh9EB6HfMVYwSVjMFQ7Sh9ip"
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
