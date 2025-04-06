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
    "59dyy9CTNTgesCz25YjSo38fT3CpggccTxDtfFzGBu2EQXmgV2wzy4mmbYcbfiFLU1q2xQvVsW4pPY8sTKXADX2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pRugEmG3hvSfhXsTKd12h2V5wUUFkPNcCwouy1dBfWUYvkCBphXoas3e5LGXmtDBu8yCZiZWVjojeizWJbqUYL",
  "key1": "3iCzWmDMi6PeYfXomRWQ8Ae5L8hUu6BH2K7BFERmVxHoDhF3xHDfSsWeX4o913xWgJNKPZcqLTMATSftEdGBPeHW",
  "key2": "d3ykWFeYkdomyYqSpctftBrn1JML3sMzeGdKa7PVJrcA1UMjsEA2LLug4Q4BEKw95t8KD9zPMvhPwxqCmaMj862",
  "key3": "4YyPD2QaBDs1SuJ7UMjyF11SsQhWYcwkYJ3dUhfjWPXeCD5PiszhnnRS9bspRb6BETCojzTq2cSjPqJ8z9Wg8Sux",
  "key4": "5pxqpCA3urcyGD2hZYwDithAxAxiNpiFGPfe6q12SnJzoHE71hCVErG9Y9K7JEW2p7YrAmYz8GrC86EiuQCquvA3",
  "key5": "N8Znj6HeBAUh3tt1KbLMs1edMM4V7rKyzSEEYRkxaC6yLoXmd8ovEiN7tAB6qRJUpNQjTU8rhePtTjYfN9bbuLc",
  "key6": "3yCzXp17cZkkLKxJKL4PpRAM8NfLC6P5o7TfcfBG5HPvtqadbbzjezLg9YTwzyDMwsjKcGo9xncWhtBBuwBdx5wz",
  "key7": "4oBrqmt3gBo8EW6gQRopokhQVAELcMmywaTR7atBPtLFxQujkXuzk3BjHscBzeeKi81Am1srzW2BPj35qgGhAfj5",
  "key8": "4E7EicqD5ga9yqYp8mZfNfz19T5y8Wj6ZpB9nD5QHR3vjnfTL759paMwysUhpBuaCfc2AzTJ5kFBrdnSpkTm3Vwf",
  "key9": "54yUPM1yET5K2jbDgbWRwYikXSnwojirchdzMuSUpBu9K3BEuSjK5dFgd5FrXniKdorCrVoCkUuZWQnVcvieh4VK",
  "key10": "3fxq5sayCmWgtZ83TKpcJC7yAdf8gWD25HBqnhCWNZCfSuXPmxcS9TgtQzmEhXKRb5DqoQeqfLHkmjAx1xpjjJXw",
  "key11": "3i2254WMBiW43LW9EogZNQhiVpUvh1PJ1jLFujMvRECUcsnASQ6fJkgjHYEKKDXVUBkUn6CLGRVE1GoUB4RqxaLz",
  "key12": "5G5LEZiz1oUbfX3YQK6iG8grae3fBgq5NMDY1k2344G4ywkPSUPXZKvRyCB3DiXJv6pEWbDivos6NxYhHHsVGG6c",
  "key13": "eAFYwM1hZBKqLYYnRAu94am29BnTQs4RMuSFsyzeppkxXxKDDDr4Xtk1rzsaqqHgzY4AupvezPknmzwtzEA2r4M",
  "key14": "3BT3YuzLBXztcQc4iUNtQ8vvE42TyxKLHSJ1h36tGFfdDa3vKoNkQuEjfDg9MgWVnCSxJxx1K31aEUMhpc9GP75W",
  "key15": "4invP4YopNBrukNFZCjiXjRq7djDUzdSS6B4D5u37Ugcrf3VVypWLCd6avJe4dexLi5SyZsoQx2MJjRiCW2i87uK",
  "key16": "5YHrZEbBYwhmH75HXdUNv8Se1Z89prLtUcwuo1sEk13sRwS7mbQpba9xwSu4A3D9fNEkPu8eto4BZ6zRPNEbQA7W",
  "key17": "671zT4pZX5SXbez6mqPPocYdHG7bLUzAmZhxgPuAVziB9QZNXZVq17ws6NTEz8NZtkLCiSiHiuFxyqNk6LkHdZZm",
  "key18": "2jMxhc2hcU1Xx9NiP2HzAipL4Cos1KaQJEukqahS7NpBnBTb79qRxe943rtwnEpmVrsqePifGRBaVawsJ5ZrxzTW",
  "key19": "2hXBAt3CvmUdK44QWhi3v8xwMp4W8aVrUtYQ7TpR8RNb7Te8tCmrdRWXUwNQ72ZbRFMb3L7udNXwfzYeK6pN3wnY",
  "key20": "4opgvfgENd9eJxkmPUwE8rE1nxNsTgh8zUiGceLiBNKFiri6y8D2ukuajmtvKpVqnUuKrfedPVR98cHQP9e2Q5DB",
  "key21": "A9bzXEBjNAynpCtB2xkirhA4k92teJW5VBJBksW9HXu7BnV2WXB71DruVtwd7Bg11FUCHtQEuSmx9L9qpG26cxX",
  "key22": "5kyxaxbwRDU2k2iNksk3JdVTjatQAzoSUNtezgZzYqhu57jWVqE2suw1Dqg9CVQGVWJUF3mm1WhD6HDmmKpANCvs",
  "key23": "2FYAAaKZ8YDizWmr6kb3bRK9jnpmeYC6SENsfxsE77u1A9csqRYuUe2tyTk9hJXVm9H9qV5vGCML7bpazbsfPtB6",
  "key24": "3RUj39SDPCiLitGKjzJ8F9nimV7Tgu5REiXQehqzMHPD2vdBT5XkG66DhLct8y1DuYLDTwtCb7aZoBeKte66oAre",
  "key25": "Rej7yjPFT166rs6JVTy396MPp45Z3PqNRqjLYqchwnByeKH2KNuQJkpZnykhBhLLLadbeMd7DZSxz5Fw6gwZcBk",
  "key26": "4ppdpi8hLB43yRQrfUTxZWzy4UX53aX76ccryStuHgQCva7Go5rxa4TApcDt73bucMfTXe1ZCSetAaNuLxqPbc2U",
  "key27": "5YLcqLotLcCNqzzbYQ9egSWuJDeBWhMRWwusVneXggUxkefqXSZqKEUDQ26rcSaFZ6ZftEV4U4Wo5XDrzd531N7G",
  "key28": "5u52T69rpasDGrzSiqc8c9YFV3DruRvT6c8mVBvBfft2F8aRPt5H1GSrMg2bQBkX5p386JchcuGNN8wwiEtypnSJ",
  "key29": "26tZhRB4pBHKW5vJymcKGa5jTBxf882CFHrsx6gr8rGC3PyWVNuXdyNW1N6igNJVLUMEz71LvbGeQQ9hgNnTPgZX",
  "key30": "485Th8hFf8DjDvT3je6VPeiXD5bUAZH1cKtpHGz7SqEwLitTfi7xCkhhkw6udNPYMnfLc3LJAhLVsXYfSCDmXq1U",
  "key31": "4qLuuXjnnMaw8BoRezcsd3PZG76WQDWxyuQAUZ539JzwmNbkHgdsUjExARNoXkGXqGVmd4i2QDZEyszjazhmuxgD"
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
