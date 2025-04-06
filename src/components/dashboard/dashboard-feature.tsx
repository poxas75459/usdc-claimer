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
    "4e8xGz4X4mC9baG4yyhaQYnBDUAJ7sEtEs4365vaiL9hmSwJwEP99Fbf1GvkgBEUYA4Wno2gNxzUSBGpqHUyTCrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SqQT7JMzicets8EJefrgyznkh5mMmK5uJTMMyKRgGPytmVxkD3G9oBgsV1TPrs6RGik79kARFfDcNjQQrptUWGK",
  "key1": "2QhBzXSPC2vZmiPG1Nffv4CtW2BXGGMeGg3fSh7K67YTvTGq85QwXQ7RfjsksEDDY1MQYvQz6o8xdtDE1owtg9Vp",
  "key2": "4cRuYUxEEAbX7NgXWfCEKmCGyUCZaFbvAJ6wp5vACacUjaow9yzrhwYwvrgQ1gmBqkfi9LHpEbAhiYMv8RiW4o9a",
  "key3": "3uWJSXya1TPmvDwhAsdHyxeRtLSHcR3xarCKhYhuNFESCZpitaWfnyQHGY5njzitHVjj9UyGJuo4HNeDt8A3sWyh",
  "key4": "2waHE8p6j2EXsYpXfxjecee3PWv7Swd3VNT21c2XzDmBXaFtgKYoudrc3Nd2eaVadfsaiEA3FMhpsk3NUyVqG16Y",
  "key5": "3SZpKnix6xVKiAgh4JtT7ALTZviDnGh7ccFACbjTEF12t5sotZrM7crU5Q3dEqEtmmzeU6nG2TjrHLptKB8XuqiX",
  "key6": "1b4VYZFykYiLGVJVV3tBDaj1CmdQ58V7Qnt6To2Bps33jLzDzHousLny95amPLfWeE32yyqEGj6yV8DejyNBM3y",
  "key7": "64zZHxERYX5dh5kGGGqj9kjZrdQceCx9LvuaDu6Z7GsRgnijvhJXZMYKkG4185WSEZ5yUHpjWHDtxx5A3zkCVUcm",
  "key8": "3Pde3yKooew5eQBG34H9rfFEUZPcADNSA5DtLBQrnzwWHxkVDL8LkEn5cpvnX5RxKzPpJ4YxeUW6PeGJkmk4v5RD",
  "key9": "4cd2T8vyQr9n6Nu3pFqv7cXyGvKUBe1641M2UD5VjGCcqzsFVnyKWc4ZxEBS5X8DNkhyz9XuUvLSY4bZJa6mXx6R",
  "key10": "3hxB1MfxUPgNdHpPoqPJeWikVhLSestLpcB7xcVf7uAiX84qyeyaHtMt4bN3n7rK94XDridaN41FpDZjE9n7aigv",
  "key11": "4rwDvvQUpcPQvN8MbnbcZbQao1sF4aHobqUsu39ktU2m2HG6aftS1WSbwHjKpfKsXsdyyZMbax5ChjqLqAtUN4QR",
  "key12": "jqSHbJwXKLCogDJ3Cwn1j1C3ZddD61qJvCd7v9sUg9FcpYq2Jb1jDhwhtwqiPjsiD5umUtq49RUJbc3Q9QLs89A",
  "key13": "3XkDkY8xFqHzADB7NCuqf245Sw8mSH2UuDW2LAjtMt4uyfBxW9q5W21BcWgW4ppdwt3qJCDvDspSFmYuEafvy9P3",
  "key14": "5AU49o1yFo2xsGiVCbmGMRjgjdH5g4WxAw24DSRN211eyu37mmyFoBH2ah13YFjcu7qXdCkFGb1W5iDGfAN6x6a4",
  "key15": "3tZ4EDZEgNeoeWhNsfc4ByEXbH1yEtBJFD5kymhA33MqNtuDoKswbgwjj5mWpmZEyhRkMUTm4TC1mpC64saYxJCL",
  "key16": "MdHGhhYvKV89WW251UvKzou6HK18856DErx8jxt9yDS8VG3MADx3AZKs54ZE5KZfL4FUkJime3TePeXsoRFuHPt",
  "key17": "3wFFUk6sQ9rnnhu5f59KAfTFH1WybjSX2DcUu4JEcCQ1cNhppFYWiTNrJ7DKhf9VZpbQn5P9PLeQnnsWfATxNUm6",
  "key18": "2N3wQfk8SeDRXpBEZjtTQ1T9wPSzX7qdp95MkUKsv74QVEiutnSzUTQcRCNkTYH7EwCDeYHG3gK2uSGr1cYxNLnF",
  "key19": "29CYNkge5jVY16NGECPkxwscKmQS9AaSyH5QvewiJsf52gxu4GY3rjT1qzGrPt32mFMxpjUagmjPGGZYpq8WfxRP",
  "key20": "4npj7FoYKg7cjZEUHJNjWfjnGst966SrdHApWEEGMExZ3ktCfh5UF7T2Xs6NhvwvT2zn7vXdAsA7K8cRWHed2LZq",
  "key21": "2BkMfQnkLNiBgVgbR93cHvy3kQeAiZFVeHrFs3KLf2fp1AYsdfTHtddCYzmAML7bgfERhosvXo1JJrpb1TbTkvku",
  "key22": "5FMvbJuN6NWUG1mNh5u2jQqkLmBThbAFsRcRx1hRiXqTASzuvtVsovh1XBHZf4EAHQLiZwfvjby1TsGjh8NocHBk",
  "key23": "4H8YbwQ97J4VMXv4kjsX9vS3exu88SUnszKTwXEjwWULiWCDzbY9Rys8HRFqnnwRVvPrqtyAdJdKVqgp1AxWVTpf",
  "key24": "4pCuSMaASqSbBbx8PC39PLFuyK5BJfWH889ZhwuDn9yH2ERrrh6xHhkk17WGKspXkaWHfnnHFte7ocPSAqUmJrh4"
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
