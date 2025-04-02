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
    "8Z4qxyKQVeZpW5YZb73xmFde1u6vaywPrvu8F2LvrhaJKhWPtC4GFyVZL1QqzwDMZH2JHTqw5mLDZVQ6gdTAwXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v7m4uk5gwCdgAcTFvuy8jUu4Ev4mP5AJuFL6q1mBUgAy9hqn4WJDHB7xgUkYreWqB2UYr5f9KVQk7ihvXMvRWiW",
  "key1": "5QXjuSC2u1HQ5Em2gVyFd2CsSSSsGetDLceJjuyXpWDnhAKn3BvLY3Ex3HufnzEPST89T5sT3RpkRgc3ewue8cuu",
  "key2": "4LpdvEvTbfJspEUYKhim848zRUPxT7WDEaFEbxnHbf91acrZECdJ3ockX4WYYpR9FfWgruVPCtb73Lw88xaWUPLN",
  "key3": "3mFwLDmf5zDjTx2DLZuSzdaMBTqu6Bk2jqRK3aKv2BJEs3c8yWvPs1nqHKaXqyVBBVJgF1M1VV8rLK2jMsaWSG8W",
  "key4": "3Qv3HALUPqN5KwovunfjiHZsYD6vZCobZFdMbZwuQQveTH7GkQxEZon1nSZnDCg2Vz3Pbmp1SiGeiW7CWKbBwsCS",
  "key5": "5fDkiFm5AYGZ2BQF3RmLUjNNvaMZC2AHHVWYmV8EyoezpoSTbAoo4Ym7ZER1tvQ9hmfdzjZAj7BbMSNPRi9EBQvn",
  "key6": "37HgnwSvRhRhoSFRfSvK7UDVtujGtK15skSrCJPA2hQcvfikRivaRnW3CiwiJHzZcmbdjYHM1TZSwnYhP86xy2bM",
  "key7": "4ddBWanVPey59ewS6KgZG3VqZE1QHcBULdAj7TRQVjYvTFPV7zWXMpai7WDxaANnTPdHCnzKTiz2vL41djfdRAfH",
  "key8": "PWrKmtx8hp4LQdz9j85ShNqgxcwgnsS1rRc9rDSsMEceQXov872XHiKLorMgbKdrCFbKk1Ntd1qVpSsq16nS5rz",
  "key9": "xSzrL6K3fMcXYqqWjekstAq75zhQvpXziYMn2D2PHAXxAdgvw97MXCRikbB6BuMPfrJ9e4ZqdXLncxjgdRfDn2K",
  "key10": "5E1ikWYxGuNnfuqPztsyZUojwyWTPj5YrnNfx4QNxFmiPUqhxzrTYs9hCwZgstMCKSVBhekCyCkbzR8o2PPMWUm8",
  "key11": "4pna6imL8uhE3TtKvm9M2tjPPJ8PQGf2JyF2MQGjrKgQff8gRz4m8fKSqnM3agHWupt9mVk8kqwhmuct8Gg8td6T",
  "key12": "6reSQH36YTXfRXNuJnAXnU5XB4UZiUQYbJhv6jAMf7HoFuKK8TQZA4EiKqCs7HfK7D6kJ2ZnztXVwyQC5oZ36pq",
  "key13": "4yGGJCvKGZmBAyjvEgp2YLWYBQyJQaKL9obAXNF9yfb6Ry3EbCrarQrQje6C3Zj2adcx3Lv1M5W1RD8ya4qrtbvT",
  "key14": "5eS6Cs8Kc1vgFGqowyP6HLYidG7QcPmfckDBJyTeTfWWK1EBwooNs19UKbdiZG8R1XwbuDPRWLbGjs37txNJjLDj",
  "key15": "M6frQgdm77zYV19pW1Ax9Ye55TNQVhVAmXgQwFbTvWi9tUshSUL5Y6mC4AesoR2jXNm9sqviH9XmBQrec32ZbS5",
  "key16": "5xLiLpCUoYEz71FmyZ8cWkNGrs5GtveKm2cyXtv6cRysNixbv9mFrbx7PvfYRH3RppUAJeAKNgTEUvDnr8A5e6Rj",
  "key17": "3r21nLebicTboVodggottuaxH9aL1hssAYqL9defcgwFwrBEXvPXUuQfGZPF4W6Pb255ZGommJdB99G1jVwBBs31",
  "key18": "2uC4Me93ihoSwdhGj7yVEGbFxcoyytjAKuV1drwL39b1exwnH2DajN66ccgrtdQseDSEqkJog6su6145Gp1qDB74",
  "key19": "ZemPWvEAkv1T8SSoVvuRwbj8peYPW6jCrk1r8FDVAdhorcNfz1yKSjDgH4v2hExiC6cZiX3JZ1Q1geELdNiKDWD",
  "key20": "dwZipQFoUuCJk9dfEp3vshxoh2mSwMD9DdCPQrF4ZFz7sjppL7pB6SAXmpn4MotmmS1T1j5CYQGHFmZ2bqHtDSL",
  "key21": "3kZ73axqDDpM4nnTD9uYr2Sov2Jgx7fHV2Uyc5rGVkNTmDbv2DkujmyUFdLqzCjsWrgSbwmqoL3PkQaAtjxBWzwM",
  "key22": "5U6jNP7uidT4BQwDq2nvQZSH7VGEXwjbxFRV7BY9jnESfDehkzhFfQ2jqDQ3V8abKjTnr7VLMo1oZrjQvRpbL847",
  "key23": "ZwaF7iB2Xy6u2gettMiDwxvM1x2Qn9cLEzciKQznPo1vGTKEFSkvYTsatjxgwCgPn3RH5FV9ChRrPWGMMSpDAJZ",
  "key24": "3C3sqW8o9tSuZtzyh3QabPweW1VjyNPxmzvcp4r7wQ9yy8UwK5bf1gnczTFHE7z9B4ZyNfYvuZaXzSRNS7TDuHqN",
  "key25": "6TRorotKqhQxAbpTMD1jaMdnwSQ254jRVse8fEPijxgQDhZXws7tow9fbPahyDhwL7fzSa268xxfD2UsCQNcCGd",
  "key26": "2fXTcLyowD49doExY87yPgjKVKDeuTaFLPAzkUuQDsJDCA8j647Xd3rjTneREoLC6cS78fzRm11YcMQUqPMXmnS4",
  "key27": "4xGvkKpgjNaiJKLEk6emxzfzJaQenW2zykJ2ZEFwCkp7N3ZZnz8quyjrCR2x5cQrSSaynLZwPWEAHd8Zj7pkz2Wt",
  "key28": "5LzeTJHMib4cbinFas8mgu1JP1YiUxByo25KbPZ1kSb9DDUd4aFafe7mfr1tkQeGmLqEXcT7CaUjWLejCBJLZoQF",
  "key29": "2wXuoSL9tB6AVoMPGSWSN9hmy5LXVP1HKhdktar2usVE5Kt9d5PmT559T7CWdhYMeqFZK8Le8Cf7Tm7pq2FyPYR2",
  "key30": "5vB369cqGWaLYTknnwp3tYdqnPfni65K2Vrf4daT1H3YoDYSXPWYPMnoyJKs7CsEaH5HyvEwtKef347CSjPodhXA",
  "key31": "NDHTrcrXXkeMbRyxqvFsVMpLcUWx9jT8kQEyDsd5iKpY2RELbZSRFDe98JsPTBqbEiemihuvh9CKHpRtkxQ3BvC",
  "key32": "34byhsi7rVPnJduhB44VruEZNFSvBZfvuYBxTg7MDmbKBguHGGkCjPQ1UZYsv5KcG1FA3Kt3MVaAwExzF9DDaocs",
  "key33": "47DvijTsToDUQ69V8Zq5d9PnYfS2qcs4Gw7M6BsKabkrCsSE798Ree52xpTBt7rppYuLzZvAtYKqQcdzYY18VzqU"
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
