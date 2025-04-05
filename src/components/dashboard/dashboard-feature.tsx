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
    "N4WcGvrEQ97kaQiFLEvpnWJz1PP7L655nQs171mfpRN1WL7WWbVYsJbsHwKuaoD2j4giLMcXjoXnofT4iiUNqG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rRuTxmjCWwDa8v3mKior1Nd7tWGLZv7Smhwf6LJx4idZPm6JkjxqfVdmsBgadJXTk89iuiG7LyBkkZ2s7C6seWj",
  "key1": "4RffmWN1E1ZGSWB751GEQss2DVSjR8TP5LSnMBfot2qJ36p9McZEpddWCU7UfgWywP7fBpQ8i2gKLpPZPVYxjtjA",
  "key2": "5eB9ZCC1h5HpZ7sK3BCYosSm8xmWdbNsDLfJg4Wnzt9HF8MuiPoTCtLeZpDt9TYPncg46n45E3weZMXFxcSF2RQJ",
  "key3": "5U4hzvgebXtG7xqHr3q6PwcjMv2LkFyWT6yx1ZhPwEzxmwuoCJdpvfnkAkyJwqdU1SkUQPmQij5ZMSAwetNdQhtt",
  "key4": "2tzsoxcRzdHu3pUzhfhFNUYssMtYomkQwt7mCWEqetDhaJJJBHgYrBh1DxcZvadkepfbok2LtGXZs4xLZq9WRg8V",
  "key5": "c61eJzjotqNVm4GZcDyHVGDR3Kg8K4F1bUjDDNKXUAwtFPEhC7eZGVomiFGXwmuPGsmwCxJQyEauaLYZtMCrRy5",
  "key6": "3D73defYLVtDrpJU7NRBprrJUgmkxZxZdmYvrtf5BXhQzFhrPRQ4WB6NSkNGz7C5fMGwcC5kfrpWDQjESoAbBTWf",
  "key7": "433CphhHBhjtG1bPkz1ryDHeTUkijsJMB17yrWop9dThVe8JpdQvxidGhh9uj9JofLV5DVs2Mya75j3TiAHZYE6Q",
  "key8": "5JFy76vghzbBbCrttHhdwVZGg2cyvEbXf4SqMaHBcCUGV3jtgFTprJgriYgi67scpVDSBKyXxoHjss8GxsiStpUo",
  "key9": "5j3Qv7ReY3ecq8Tv15k9CWHhUcoKBpfcvZiQT6nmbvBgNUzXTN9yCcbsTykTts58TrY4XkQfTCqCCyRN6Q9ZKgiZ",
  "key10": "35CQd88Uqt9CwaCLjSiA9p4rezPeYHgC8YxZJ5rG7iRUeFDSbd1x28euGcVTqaNyzaPDsqhkMd4vwY8wkwDDH9wv",
  "key11": "4QLafqBxwxig6T5in21djLuConQ98NmbpyzfxrCgPoemzM6FQbDZrF1ACuV3ECoTxtujoNscRTzJwavZJGkPq92J",
  "key12": "2P9SaCpjg3tW4rP7yQTnuroQxH3QFjexGqdAYwV7HkgtN1TN243jW893U62iKJZu9fYzCZk5fhg875Sq27gmqPSV",
  "key13": "5gXPTZ76PHD4d9E8tKG3jUpqHa2kSfSa97afKrqx7dpbA7PiuCP8JXDj7vh44PegMtEdNKask4PGRawXNDrHURVq",
  "key14": "3mQux5tXPjcSGiHs9mvttDQ1bYUh6zvTqG8KTy9PfEMMutyaTiseKF6C5A5DTt37oXptZtGjkibSZvG7ZxzTV5ap",
  "key15": "2n5oFvtQn6X78pGP5DK8zL3KFgjLc3PXKkk32s495qAC96gtQeizAx8KcjzpWhKjjp9aY2kuaQVk5ZbPPasMVutE",
  "key16": "2NgeSNWKen2ToXJ77Js1KPNQ4ACw3cEoBAKkocwTefGbaFP4n3b4w5vMQMZcBAyQ1138eLwimLMrtCqj6KAgno8s",
  "key17": "Nk5UJoPprU1ry54ESN23Th3CjB6NKC19rrpUMsMAVwceHiuY3M8izWJiBgk5WDe2Ru4SHjpVEynzyrXXpyx5Hrz",
  "key18": "4R38yoR4D4GXYwqR4qtK26ZY7sFY856yQK7MQQALytWUmHzYYSR5BzXtT6P38jMHE7uumXsNfFdfGuqsE3QqYmQy",
  "key19": "2xn4J2nURqBRRgm9qJTm5aY1SczBUAKKCpXsjxfru64qzRXvrGCMhEM8e61mG1aYkjYZ7gqNiEX8Xdroi5Vn7dQQ",
  "key20": "4H3gKqNCpjrt94ud2WVjYpigedeC3gsh7NXRLrSEkUxpGBFWfnUa8mGdBrhz84fEAYQn37yqFueKdmmgQ5z2tuim",
  "key21": "3DzrSFoogUDt87q3nDJtBEdKYoW1TYB6uE2eMcryiP3kSWu4gCyEz1AQY7ZJkuof9uWLVKTi87V9rUBcW2WNWe6G",
  "key22": "3BeMeYnYd6p2V4xtw8WGtCeHsYR83PofyFvE97Ts4AWKsC3dYS5ammn8AbW74aNvsmf3GgRMSg47tUHemWUZJXu4",
  "key23": "5yFzLCqREvMevVmobJpJoDc4M3DKg4W7dxjrECGwdhrXNKjRLRKeJY2jWXaGyiufMRH8reVKYaD7sbCCqFVchPei",
  "key24": "2jWGn3zKnJgG6ysqt77cooMZ6HCzBYAHs8pTBttz2ao3qYzKkjDDyGz5t87iVmANAJAaLxQHh6bKBep7dRJ9BZn9",
  "key25": "2iC1HANu9MaJRfAhqzLDoz1SSQhoWQPcaEARJxyku7yiKZaQAJ6dVWdFEDb3VW8kcXecG6CRGi2d3dyGodMBZxgz",
  "key26": "52axt2Wt66rXhLpQwcLHhftfEdWC53xT5ASjeqK4LMY1zkkrNAis9JGBubEQWUYJqCWdbepgSdyWQkayyDxjzqpp",
  "key27": "4L1yRNMDWwBRf3mCsG6wSVn4QqjNpFmA2fvTbbM2KSyrBJ4VDfrdnei1P2wBvysjm7euQi9kpvoGagBuxcWWtVEm",
  "key28": "3FbvktFXA2KBFZr4bj5BwZzEoMJCmemVnRpecc5DFVGfH3nnPri2waFKq6vNmwDtPMvMcvX7T9mNB7chXs8BMoTE",
  "key29": "4M28YLcVVWHt8ofFtjRfLSq9CAtrihy5Ld9T2CCVnqdjFcZaeScqw8cKwWwf4GbMcsLViddbMmbanGVQhueqrYCS",
  "key30": "3GVUaQXqhwKb3UeAV3Cv1fYUkjsCvcCh3pTfxj2r8RD4jdh2EUR1a5wjqKoFWGRLgu4eSG4ZaV39f6B5zJGQhkcV",
  "key31": "4buf94VbGj7939xTCuX7ZoXZfUnHiF5UTZFd3SKaZBAWgVzPnuoXfbJqH2EMKLqaXpdysfq7GECgNxgC8cRzZC6D"
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
