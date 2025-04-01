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
    "58FDYZcUHUv9UgfEd359ANM6LNwtkjBS7uEjXowUgvpDeQbfYRQ4fdwb22FnBCnqDjvs3pPsre8tFR6dyAY3WAPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61BGaatbSVRF9PRDA3rgMuyr7baXmXJbW9kf1Y2HuvNtECKN1FrJStWr81Akap7CCLXyxJ1kzuMNG7Sa99Hj5MRY",
  "key1": "5EBEYvdK2WjavKftoiPDwaK1gEY1jKfXNQrqwtC3zjM3qJGDtyXZ99i2XZvkndXfwkYU4JreqBVD4Dpn3YWn2wRB",
  "key2": "2mFotTuKVtRnp64JZ3G1i53vUbB7bZmdAwKG9SsTnyB22A9BcYykoUmxZ2ujdeH5PdVDvpUiXtzezADfQPXr2YV",
  "key3": "2PvAYnm2NSNyoEnzPkKUbpG6gRejf5u6sYhkW4gWhTQAJJyRD5b1QBqynftqPgtY4vaxbQ2PdiXhy3KQhRM3T5pq",
  "key4": "78XLPxkKCNxzzf3uvDthJ1aw1eGKy1pWfhC7Ekd3L9bUAyuFP6F2RVkvn57hkihs8TpEr1RbJh8uZvfxBfGKtP6",
  "key5": "5WZsEktSyWucXfzhpfqvn12xJayJouiMA9bsv5oqkua2mewXrRoGQvvLuo2KheJhxQhWEKf1ugUUgxt1pa6WZ6zQ",
  "key6": "4zwwcLjJ1xekHXQZoS49gKNXnKmZ269yHQmBH9nrqFqQ35iLbMUJsKWHcZDhDV3Ev5SizSHpbHyv87wDYfDRvGWq",
  "key7": "5vbesbkUQuRCaQ2dhi88ETEK1RgQkPJKHs4FntoUB1tjTKM9YY7x4BWJRpDSgRBZrcjLQcpksmnUdrk4scgcpQx6",
  "key8": "5JEGg8xodtZ8uVbiNyQAHh2FqS6mVRq6erZrhJM4ii5XFwTzZ5MhmAj2HUB1pmUUjBtLLbV8sTPGxeB2yGprMvwN",
  "key9": "27M2td9NVo7vg66zPvdG3FtfJsqXwWBuktJj2icRY1TXfsKrDvJMf4LfpsKHJvaWZ3h9qqNUmpyivtBM4oexdbiK",
  "key10": "3fSzGr2Y2FWPnLpwZzSF3tLBWBQgnNUNx79r6Na9sJ8NkyZhyyR231mFWqhGgMJBEQPWJU4Vdt4U5cPCvoQgGBgn",
  "key11": "24MU21Wpqo1WCVewJSSbsK7E6xm59wyLHmBKqHCYCgo3EAmvzwzpYJ85oYoWSWvuxS5WUrxYA4ZvFojstFhV8wKo",
  "key12": "4aQiKBuxneKUicH3J8pzFP3VmqwoPjeCWkURHhCbztmqG5oDk5TP6HQmurX1fbpRLmv5e9duk7D8t9Fvqu6N5z33",
  "key13": "2mkFSzVjncR2sknGHDGzVgCjJQuhsvXPs8Fch3WbA4NEiqg1435Y5yE5DAagN7GUaX2rhcXSzbS6rjRypBySfQza",
  "key14": "5tDkbyjQdf3k1TXu9xkcT5GuAHNR4Ce2BUxwGLkBP1KAr2gsi46xc2uLojzqzDrfSDR3Qh8XmHTUwu5K5cp2PzcT",
  "key15": "48xyR1hE5pXqQEtgWoPAzGHSsQGKzERRBjC4WKUecZMhuLGdohSFKfz9EcML4Dmmsdvg6FiGmmoJoiAiV8eLDhBa",
  "key16": "C86n8prCFGLUWHpjvsz9jjrMEMHnuoCE5XCRgKr3NZCnopeNF1tHBgWib5E3nYZJCHz3PDeZ32d1dr3PSURne9c",
  "key17": "2NgFBPVKBmj6GQJh56kj7f8XJ4DSRCJkQ48nwFFHx14Y5uMCMEMMKY7UyhQhDqPCKtbimDvkYj5buQRa71GegMWe",
  "key18": "4hziceyzRWTei9iaQxh5UEtSyJST616aLxLj7eECGBxCQ39e3SqBXhDZkX1h75S5i94Ry4QP4bN9Tuf5Tf2UEFs",
  "key19": "2vXCEifED6QxqbiFd7cyjH7JpYVjh4riN8dym4QhP1kBTXehKrELxXaoGWr1WCp2VHEa4wzD9frg9Lo4oQqBDsWL",
  "key20": "5D5J1SwiqgbWeHt1fnLe3CBDjYG19ZJrdhpCLQu1eJvZTkRYUWo9hHoruikhp4bcMpGTPchqLM762mkDRE3rW79t",
  "key21": "42fwuHqwwVKHcejBudYpRxw14dQ1FE1t14MTakupcqavu39cokMJf7cYBfhaFc1c7r2ETfX7qhZK4H7o7C8X1353",
  "key22": "3e2bkhGmmRwrssNS51A8K3Dx9jfSmkJzCorqYTo8H2QGyjerPGLM3Gu7bNyp6zdbxTgd6K2QZB6eNUFDB2nxoF56",
  "key23": "6xckHicP2DgeQc2VmkgQUeZRouZ2v9mTdViYws1D2tHkczfgkLCUehYLkVfabaCvuS8zwYN9oEa1JnkJPhdQVW8",
  "key24": "5QeRfCq5qYdkKm7Z6mdArRKcSfYHz6iFKXa1phK7SCFmamaBW9NSrKZZLm9sNBuEeNazZxChHE2wcxEvwWGiPJHv",
  "key25": "5NrJf4pDzGhTBmvqjVwKhHU6HF9Sb3Wy5EY6Vbaf5UFvwmAKrCvaFwHygF4ZoksqFSyXi5jjieHmhmbMvC1iijxR",
  "key26": "5Drufp5LAWJxEWnG5Yr5ymimazsiakTafXTxSTnWRnBvjjEqz9A4uyBVBK36UsYiGFhmHbJB1XnaLiGYJhQzkWZs",
  "key27": "2upR2shv8mk2hZZzuaHpXNcQdrLTUM84uRCpJDaKDpJSf2TRfaHQ6zWgQApA4jxzJzzBbTMF26oqrXZWS9W2H5UL",
  "key28": "5CWM5VozwshcMjkaGCpJoY3NCFDnzKsCF866BtCnBN9yTgwevJwf1mrGqd3QuKgb59f4k5zFUrEJqAWSe2SEd8DP",
  "key29": "2ed3YL4iXKuE22TJcfe1WmZZAN5ZgLjHWs2T2S2sAwqGCErjjY29VSSeXnS2snyBtiSgvWpcjU14y9viWwZnDBTv",
  "key30": "3bzggLF4T6PJQ8abdYLSpB7GmiokQGpVwutVozetSXNVoXHMxqMWjc8WRtZAKweRws6j9sQqcyhqQnyBLmJWPEeN",
  "key31": "2xnMv4PPdwkugNjW9SEEKHcuCSvajLpkKtp9Zj84G2vs2tkzHP35kWA5mQMzRRuMgHHbwFLLLkYnbzLP9MJNZtuE",
  "key32": "5a5RqS2tzqVyN3p2ME7tRYNKLJZhCAcuK7YmHt5y88EH63tBaUv3TbDKd3Xa4HhKAJZZSRivkCCtaDvFai77jKjY",
  "key33": "2fjH91pAm3K6LL9yMx8W9gNN3cEzzTBhehm1ZtCxZEkevgEVfCcSSWkKkYqxzXjq2j6W3k81RTEWoJhgTLtBuUfn",
  "key34": "2AhwAeAb5gNcLEQDA8REUgdn9yAqKUCvgWToYFW8fMySYyNhaEucexHgpmkc3Pq9Zr1ygN4zkXrnyxP85HoMWUKU",
  "key35": "4mm13e4sx2DGXgCEhr4uQApuN5bcFvMmbyVWPnih1pEXEbJeVr63937mrjKNMnFpaxRu845pLiwnG74bTxMyrFHM",
  "key36": "5xiL6V1mHEViBHNgrMeRS5dtbt8tPJ6dgb1E16NGcWFgDH6EXKFH8LuQmk1NFgT6YtLQ8b9H4T5HLuKacLkHPVyK",
  "key37": "h12PYYMCbgDzD9TCvC6gvudGfakA1tCiQsgc2nPjSkHHwVrGkE6ycXVT5GQfrrukZJLbsH2pADYLffcNHyMYkcg"
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
