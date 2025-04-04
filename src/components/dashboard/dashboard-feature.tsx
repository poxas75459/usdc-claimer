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
    "31b1dP76giU9NPM1nuMAyrpvBexq8jN4RpTAvf3oJzLuV5pcMFgx3NqCwfDmsNBHtpXWDQGheA4Yw4iUvJgoSG7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hxPBRvSkbBj3cPYZbhELpXF9tAkDQXxB9VXjHTXVEspDn8jnY4hhmLEAbsdxh4kghodVdufdoyHeem2F1TDw1CG",
  "key1": "4KFNcMhA4KdmQn7SBWk9hbYeT3LzFzch4gM3nno7pZASKzY9WYQQoVUAfQUKigafHePYrrnVrBLjECS5w6Bu4ZZ4",
  "key2": "3tDjvb6wqrxvFR9anif4hu9iLhy9qxa2nxj5w7RPsDYbAmC11YqnU7TvdvcgALozJuWNxLEnQXta5ezZQKxDd6vd",
  "key3": "35CqG6SLE9Q4aZytZ4d1Z1KksbbMXxYT4yRHuwF75uZbqdJxAahBDnAW363rVkANhnDVCVkJEx6mazVcPkaRSw8j",
  "key4": "5oXnBrtuTahkwCzhiZNeifUoXx1SybQi3GYgTaMY6WFsUiKVBMBs7zHAMccTRWJLg4VFUvaQ1NorgmaJqCk82vfd",
  "key5": "4cvjtzzsQsctyuKM2kHPJu823c8HCH8QNXNfATVw2ryWBEk17YCEPZgbejdB6tWokKx4jJZEm8EPFA7dQj47xc1d",
  "key6": "SZ8QQpbmv9qtpHaipMMa37KY2Gg1qxFtFqPmkz58nPe2367xcedYnFDYb3D5tPKWtDnKDKb1LqGxUzXYGNWMcHP",
  "key7": "3w4uzTy9UtuvNFEZPAQqNc8z3vDyekwCDtBniWK1MVzPUEYVexhF5zgM4dy7uJKEwLMrtqynpfXKnYR17Q1ukqR4",
  "key8": "44jPHeqMSG1fU7C9bZxzdsai6MyiRnzrxMF6C8doNiFASzKPE1PuCxXftusDas7Ev7QcLh9fav3gfGyHJEAHKtK",
  "key9": "39jgzE5FNw29CBxuN2Z2ykaJBChcwNyo1kSETf1ZS1e3KpThLDwP18U314jETCnyxYC1QiuS4wek7beE5N5aTBMH",
  "key10": "3ApC2giYpD4UxYZHizHuYJLjPaSmpHQzV3FnDCpLeym9Yb67pxTFafFjCjwUpb5cfdRdEeKvamNYUCCRAZriLE17",
  "key11": "3MCBKw7EKQq1UgFnZwMffbPZRYknCgRTG31d1TyY6hiajyuXEyXhaPjBWVdSQepzEcj7fhdhTvARtPrHM79MHvp3",
  "key12": "61kFDLkk7qwTcRpyCiGk546tarTdibjasDFzWJsGkcqJZXwsjn7DTcABFeG8H1mERtT3ka4U5aSMUBaKFLdYHrJx",
  "key13": "5f8U2SkcgzS8gVK4ZBHPjCAPJr49anYsVhfCA3MKCP2tHJi7FvN7ZLAPGcWwQVRJ1itBZ6roXFVAcv2KqpXfSSXW",
  "key14": "21VtidyKJnJAnGJCKLQHsSXCj4WDUnSKWvHnX3AEs3tqQBYNZbKyUGTjsNgHZXLW4smtFTPbdnjDgbRs2GpoW57d",
  "key15": "2BQvvWekGjcQKeDQdc4U3Qr8QvUfTZqxBsj6zfdjNicuSwFvUp8d8v8vgADyzY1SSzTfHs3oXU7x8gMLFwZCdP2L",
  "key16": "2epSRvptoQ4BgSsmbSBEr9inXWUUy5wBma9jaZPwp5tjFG6wSWbSGagNxCJHbk6rwBFVeDi5bGjqCbcVY1m8B8ry",
  "key17": "5DerqcQukze14NnacPzMycoZLpJTZfnpYRDDrYFwrFHCNbtzjyUcZtcNosYggz9xEqkG2ME5rZMYhG656WJ7Yt4G",
  "key18": "5Nifmy89S4xRrEdYcQHpG3LvXHBD7kQdmNHkPAidcfep7bRc6fczoAnhWDfT45LAgvG27UfDHi4ovWdweRsgKc6N",
  "key19": "2XzzCzsxAepeL9UEZr4VDCuaJVPpcztATA1eMBpjvUp94VHEQGubDUxvqoC8qbjhXM1XfUuGmWw3ozny9ZTZqEzg",
  "key20": "22ATt5HnjeVYKhBpqBpF1dWDau8msKXaDugxTQ6FbAcxQZVbGL5WJay4oo3pnFN7XT3irsiJ8BemjRt32syNQyhD",
  "key21": "26ic2vRK1hpoZYougtxtCvziRUKLdhMgcBjaBHusKq5UaFVhkSN7zQqAjSQ6X43LTpLxLCQ9ECiSgKETsjE8376Y",
  "key22": "5xg5PWtdpZKDunk6sJEjDMNWJx1th9KTpmvKR8YYS5tuLvpfbzdpud7oJD1PHqSQpGSzCCsjWwB7wmJffx9EMjfb",
  "key23": "3S58FZzNbGWpVT2YTeU6xPvZqZhXJiZM8RpahthuqB2SRthiGrXsHocGWgpugxjymVTifLGMevYH1FeSXPXQYxB8",
  "key24": "3dN6pYNEcXktr4AtBr1u6nf9oDUe4zibdRBSBWMS1ksFLm8TWjk6w5DddriU97jTJvHSkxDrorcAEceRz3Gqxjnz",
  "key25": "3JJSc9aDkgdddPb1hiM4ihB9jHrDaxbWj6vxy15YHXXjdL14r6Pmj2sS79yqa4oGKWNHUmtXnXdDz3x53gYUWS6i",
  "key26": "2aqYMGdNixfq8USuhreAV7goXiothj7dT6BtnrLvcwhda6cuuj9MaCZ1Mixf7zeqk8R4tp5mA8pt2N9oBfV8LxoN",
  "key27": "5fN9pydmvdiUBoG7iZqdUhfJWypf5HC2gSuhZYQ37Nn3qwrKcVTW5PyZu9C4BJ8shH1gCMrJWxWhjcrtZt1gbBKj",
  "key28": "3WYefq4FKJ7jmrWFbeSRYwPMqgEckj2Pwgr974h7jDZVcDx6wKT6FUi9YtRMww6Z9ySBnPzBAM4UqJpbF7pxnHkg",
  "key29": "254xPNer7SJXUthqo8J99KxznhmBCxguBxz2JxgwpDMyE4CLbiVRjpn8kmXzoeHixiov3hrxhfvENZzBxvSjv3ZH",
  "key30": "5rsYLJj1teonc51tecbhEzrTdF34oAd324VpEgk7VHbXi18F2Uf51XCFbUnxEG9Abn3UtJdLhLntBtq69MGbMjzT",
  "key31": "28HA1xoaBQTmP7q1aPi1ivyi4JHZpZ1VF9Lq9pMbL8ws9PcuhT6ZqB2Ancryp8hib8NYSQTMpbD5yKnnRQCN7BvM",
  "key32": "4g8Q7uBkL9F5GDJB462y7Lk9HqibGddhaWTUGowDDRfocRjoiuwFPneptsa6NBL1txxpK5ucGuPsd3ZMNL46r4Ws",
  "key33": "nvQWCYSh8oJs4cRd9sZjMg5eGBbzZg5Hxs2gCjE9wdaW6bUv7iy7YMh4fFYHPbKTKP7QYr89JAA1Cd9sMLJqADY",
  "key34": "3eS6BfU8cpfmGYFr8Dk5t5pvVpzesxeJkYLUGJB2FTMP7RdVpMKDoE7okR8zd8aSqBWN9nPooqfbwhZeTFYLV5TH",
  "key35": "5xqqgbSPvvsAjPMMhAukFfjk4xSEKA7GVfRaMB4KavKqiQNZdkcZbWw4wcmf1V9HzpQHRwJ4r4T6NBEsy3jJQ27Z",
  "key36": "2b9XWX8qjvoiU2VSYu2jA6H3QBtT5naaZXDj6EKufNb7AJuqDWBofFPSoCiHjYmEaXEy8S45XgXbVRfQ7neeXTKq",
  "key37": "2vVmHUd6yLchBn4vrwLnVKKqR7Skk2x2nmCoCebHJPRCCUo1QtpeHezAQmUmUE1GgnXnaTSh6fArZ1HnN2SBFWyt",
  "key38": "2s86fFW5xzwcaHsQx4Em5VBzBH9vJGPk7vgGhd12aMs3Fn7SiUrYTxaNvH94EJ1yYdvsc7m6wXetyVT6qENtNqHG",
  "key39": "3kQPc1EXBSsk4GiYdP2j1sUB7kutBzSeviCxadAu1ujkeuzoudbKWHAJ5DRkBQ8322a75MsyDXJHoKbU1yNeJL3v",
  "key40": "WpZxU6sUX3AvP7qT765nHF6bYZNuxJgMmEWHhoxSfVg759SBgLcz6qgrntnWryCx55jzwt4kvMukknjaKApRJmK"
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
