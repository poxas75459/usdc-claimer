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
    "ZukWXbPJqtwWAQCtBCWXNCyQDMBandaHX6z4UHRUX5zuSVfz1CnABXDbRQnTEZvMiLEiMRNu878XGt36kxLQekm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49P4TZFLw5nNjcgTDkPaf3YuvPfBaKJhXWUGcrGgQyJzagyBT9iUBMXsGiFb6iPZaBLwd78BWtQ24nAEnKTFrWRj",
  "key1": "2j5iNiQyPAbdy35DxFk4meiA36z85kCd2UwdmjQfni82JdrB3hPqhxJKLpUXa5Mts45fQM6Z6RBUT6cEX1QfqW4Z",
  "key2": "2MeRdT8Mvj7HQK9uRNSg25h8oemDR7Xx6bYVue5VkSCmybAz2U6kYZM3WZEGP9KNewAu4y6v2DjKTXYuj2t7Qkjc",
  "key3": "366GtbT2oXgokLiDKCoRKJnWwJqZjrdSWE9QzGJHp1EN2ue482eatJhJBaDb6xX5z1g2KyFjtnmdg88VDLmnZzz1",
  "key4": "McAJUgX3P6zVtiNBx4wpwpFNfEsT7hYydG38TcDJ45fEuZGY18fjx8gVBvC67hhSMqjGZCCuNatSXSt1AWGKvzr",
  "key5": "5E7ePg8Eex81VXsd93sMsdQ3hJgzGtxvMK2v98iGzEszsitR7gUmWVLGayrrBV4v5M3VWhWhbq7NwVBk72iBi669",
  "key6": "5A5Jc9aWhSdVgAoJvsfs2rX6jdaT8US7yBg54TgRi6ukQZbzniwYE6xV7J156rTi9wMRxjyN6RdUWy6CtT3i8AYv",
  "key7": "2RdkLb8NmFB56iyJLJMoAk1JvM8wvbb9pTvg9zAXZiHN3t9h4Bs1Li5SdJya88zHxDQWq4F6E2h1gA4MXPzcEwuN",
  "key8": "218HYKUWDkur6Xa2MqUXBTj4FmNtUL1qarUqhofX3xVqx3z4u3m2rDWeUVvZCLWdnryGJ1p55Ku6jvE3fpEvdocE",
  "key9": "5dYdxo2g87zQKHg24rGkYaKvH9DDxXN6FvedWuELnKoz6aWdsVamfeBpgmXjVPpeCbdf5gcokttikbLRPpe86jf4",
  "key10": "5sQa1bZgXymvZ328X6oG38HonkruPzTCJZJerr6AYQ6dy9QHGvuN9UX9ogpPd7J95jMEc6vEyS7W2XL9SkFA1iWU",
  "key11": "2yoFhJ3SKRgcdx993oxQ2c3XehEQgFgoNY1d1wsDSD827nxYoD8qaUTQceB3zDotEqbaA77SMaQsxQ631P44fENZ",
  "key12": "8wt923sgkdNkA8Udd2MvcGPpyzCGoiGwcpunP88gUzQYjnRQZUcZS3j5ABwutdvRggKJbwzJVfnHnkKoz8LuvsQ",
  "key13": "et7L5Ua7hGw2H89YVwS5Ukk2yKCaH52Tq2uv8UD8F8UWvvPABfQyxYUP5JkcdwHeAXZJCFULdEaPV9ATEDuBVvS",
  "key14": "47vAT61M8z2Ti89jPZNA3ycNuUvNerBqbq6t7SkHH45SejZvv1e9xs6mN19Yq87q6TRP4NT9BJriU4V73L82UhX9",
  "key15": "3fxmyahYggJAkQeX5e5LjA932JTJv22opCoZoEtyqChxakMeLsYSZDGL3SxHqa48qSiNZF1F6T4qxEj8xWXtX7qz",
  "key16": "4KkThPKKiiRGHcwj6WqMB6qkEJFfbnSoszM5sfgJRT3H1LbjN2CY1r5gsdZCASERhmhzkpkkzXrMVPUQG8iGqDfv",
  "key17": "37BqA2R42bzFbomntqhgs62ez3aRnSEbVambB3NpJm1kXHNknmLUk6R9DDHX52FRpy5ACtnpSP1PmQf5PQkqNmXZ",
  "key18": "YdiYm4DPiYZuJhy7aCWTG3Nm5eevdbSTiN8mzZCzU3C5ap9qZb4LRXCR9wC95bmgze7ujNePzYJMjK5AMRytwsb",
  "key19": "2jKAS8FXVBBLC84PXTujbRxeLYnxtRtnaX7QFfRsM6W1ZJwohdX9coifHViQqbE8kk7mpY7GzgkYB542AJYb4Xui",
  "key20": "44D2RmaojVnksf6UEQKFWhUW8Vn92oAg3gBBfAarsck4QAAqDW9ksh1oUSuXQGoqEBRmKikJG2QbQarfqqCE1BeQ",
  "key21": "6aLxuQ5QKwK3o7YviCF3RS1vEwSkPuKM8ubr2hHDVVHq85agAHctkX5rKjp6exb4TSJinH4tkHXpAwRzcdeaQeY",
  "key22": "3SDR8ZSYZminuWN4y7MVCT3z54Peevsp2dPwTZ24siuNxTBM9vRLZEBuLYiMtqmEm1NnCvMvERyxC64CytSdCnu6",
  "key23": "4HEG9agorV6qyoDQnFAqX8ZPmVXWX1gL82ouUi4xjWskEBMRESfzSYY8JZbjXHb3DSHCsv36Vpxhgr6WAXPkD1be",
  "key24": "36CDY9SP7GA8eVRWwASyVrJudp9G8X2ZGfiypHKQbNajqk1ynnFam3Gw6sundi972Tf7KCsfCjx2ezMGgagkRdkE",
  "key25": "5YXDfncZ8XkcSG5Mseid1osJuZJ9ndZJLgwCZhjPinghB9kYGWz6LJuDxoMtgoFuVqyYQ2BbijwpfJPLresgpL4",
  "key26": "aY7zCK4ZHqPTZC2Gc93C8t2EU77ZCryoacGXRqmf8YUCc3L4BUykrsdKCuFFLRFMD5Hxvn9fdB5KT1aCAPpxNkj",
  "key27": "24ZYKqCcwPi8Ws9nCxWmH1MHe6aAfEoKBqCyQ3z9BJAbM9vzM8EyJE3qvxHtzqAPT3UaVWLKRH6BWG7uHQR7oBcR"
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
