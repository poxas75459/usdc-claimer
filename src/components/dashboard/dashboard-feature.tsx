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
    "aggKrWoHDj3pESDTe5yGFGXuvU2qDFqB1p4akLXAf75tv7UpgXn7AoJBmLkAVNc9wJy87KqKxW1ePRhfJ7AEryE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sGKkJUpb2hcPCZP3FwjPznpWkEvVSNkWmWf9J8Qy3kM5r97xEo9APLVyVxWgFq7eXtq5YRKU3EVVeLUb7Xgnj8G",
  "key1": "3tid7ZHTzYhaip3Jkh9oJn62D44kGJLF9dx3F24GZE5QEQ3hyFKS6ypmuhFfbZgEydB3E1hEF46dLg7yp66WBHTf",
  "key2": "gcjF5tEpMLT5iQNTcDH6DxNt2F9oQtpBvaxNKV5xz6MVcr1xVXudegUoHLZ9Pk8sV5Ytm2BbkAELKSwzxWEBq4Z",
  "key3": "54z1NhkNxKbuLUrTaSePzcsSAaNowb9QZk4ew5MpAKZEnvDgthbxTTR9KTx18HMzjdNUP8GdgPaaBWfPHWKTFJaZ",
  "key4": "4pUDwkFF1fuMXUztwoKxjkCZWXaAqmQAfJhhTsSKRcPALR1PbfwmHUErrj6PnLFXoL4RTyWggRrFquPuxZunpCaM",
  "key5": "5EEe87wmVngQLQ1xVLXuviw6g9MWCF8M4XjWC4VtePgpAck1YnvXn3854r7khTbMiQkMoPfQ7zgP4AFMp7CsAr67",
  "key6": "4Cw66LfcZ2PZpDcT7pmciAqoVzuHAHXQjfpuxYMJ5R96vQiKw6vqBwC8NMsRa839o1TsezgichKfcxJayGab51Fo",
  "key7": "65HkYb9eLVicXA42o755jbhwPYfw2CXk3jTnbdAMgGjQtNUbxLfiBPGt8SD8Vn7wb4b4ArYHUx8bEd2NgDqLsBWL",
  "key8": "2K7EL67BdZ8AuTpDdKyGARAUuNGFan6MLd8F8RUekx2T3WPjACf198wFpMqnEN9QxuPxWZUJkPAX8XTyUX58ZaS7",
  "key9": "5sNvFyY7zeTepRBJxsEYsKWgbF4Go6jfRgcEjmSr4BLLXEaJTWjsnADBH9UbidYR7r84JHgkRx9rGdbezBJ1yKcC",
  "key10": "2qCkd2UU7ifPqbpB4kHNHKGrdLNwr3pK3a7Tiaaf4nuGPjSoKSz2ez7L2n9L97JE6ftDoPABTxJiMJtXhbLt9Gw5",
  "key11": "2b89isoy43DLStdePY5cBQJf31tLGWkKNvEpaqMximjzgY7vXU1c3nQmyDw7wK2QVkd9B4UCtd8pMHfy9mjc8wLN",
  "key12": "4TTpPN1M5T6zPVqvYUUkE3L4bzC8cf3BtbQzNhSPnLZzHcKnNNnzdY4rzJzFnqptQssiSTFmi3b6cVCaEheUhSfK",
  "key13": "nx5cAnWJVe8kAWZS8nmQ8HLiHXygegRGwj3LSWoxw4cSRcqVEPUChbwTZZKBzD9fyAYML37E2xAeqVqLejCoSS5",
  "key14": "WCeVyKFX6PBCQuB145RdWfKCtcAmgtTjV9ZXQ4eM3V8AGGgbofkcr6EmvPfVDGLs3ikJjkmCwFeh6R4eCS6wnQH",
  "key15": "42nEwg138NYn7R4GsxeRjWPwTahqG1Qjnfg9oHmKkCBpDtTxMP2kwCsfJQPmXTwxKgdMPtcNpQxEdmJfq4sDk8q1",
  "key16": "4Q44g8cBu6Uz62fWLVxXjiAor5A5JaucJoXwJMR5xr3kJvJeNTo1fvckSUgEXgov51A8pvJKAaoNdbUoiWGRH1sU",
  "key17": "48p69XjheH5kAMhxrHFrfqANLMTJ1AkU6vRhWgYCVuMXTiZjUT5HhVCc3L3PV88754VRVN66pkqUmH5gHywv93CH",
  "key18": "Kk7B7ZZqYDe5nLroZLeddXFivVD6ZuVwAtME5frK48Jxb8VVezgpsxfVtKCGfgnzEKeCpc7c5rhXTdiJDSpbEbc",
  "key19": "5NeeeACy32AYUGRfqCzYe6JrXrHPj5ngrrACvv9WtW8QPcx5Uz2r3ck8gf15Rb4abWtdhANA3kJj92E7Z1bGCNfu",
  "key20": "4Tss4xFckkTty4RKMr1VwqqW5ucaXczuwvyxgLzmbh3kf8PLPZatFa6Xa1bdPsG2k356tXHzFivm3Y2guHihNdZ8",
  "key21": "2AXRVbXyUQTR1zQzmEfWt7QAjmKMUJzPjybSCWE36Votfsu35Dw7qprUohihZL6oJF9hP8DrQ79kdG8D427on7a9",
  "key22": "2SiRFFteCP1aFzmnu3kX9A6aScm2juDGztEzsYwtkg92kDDMEekVEQrdhkSKqKX95BM68yYKMVWbWqQBzRr7gcHG",
  "key23": "5p1hAJkMWNg21DuytRkPqSyRujAQunWzahu65eoDd1XaYKKXuqQDMKz3i5NfWpZssyb2wqstMSmqGyoncqNLmMei",
  "key24": "UjLAuRCrXCvfZY2oxGm72BBw93wvM6VtgXu2cLpW2Gy7Wpz8pKcV2VNpHVwaL3FQJjfWrXCWvp7tQ5RVMk9KR79",
  "key25": "64twgo5QFJFtMusBKRPKekmUmqWKeNEYBKZ6La9HdGNmE6ehVdz9RZwVXF7EXmZ6c7jbG8KRDc6yXsZkMVaGUXrD",
  "key26": "5KrGKZcaRVKKUvhGcGUfsfkxeAk8oiSdZfPzhLyrVPxYb3PPgACNU4mrjG6TTd8YPnKJypU5yQ4EdgrAbaZpcEhf",
  "key27": "4TfMVivwLUi3wPXXecKAhARJttBHURxA2tjT4FTMtUNMzPNGynJEFxqNELxMe7WWcSKH8tyHYRw2WCNmVArk9WLw"
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
