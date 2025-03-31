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
    "qp9ndRSBAvf9ZFUeDhychvRR2p55S1yn5EJB33e8b8fWTowzKMg5SSzg6JPQQNcoUr5JnJzCzWHxqi3dWim9PbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56TAcM6pfFkbvg6G6Fvm6snM9QmJxzZ3fEc4TXcRHmcUfaXuzVpciBZfy2bteoZws5QaA6yYYDhw815MspSSJzJ1",
  "key1": "4attZSoxbe3LTed2AFNxKStkJXaKV1AGtZaX41DCBp4tbvPCVVu8oFt7ecSS4pMpKeWaC38QhriYuNV2UmdYDfQc",
  "key2": "4Uufib8AqwgQJcgFRwoyi3UE8892ASRSTdirnVUNMvGFWPyEoaeezyTNtLe36c7FFUnghbiU6LrCfR9svE1TjYLf",
  "key3": "3ZVdoJJFJ2mmdo1GJ3DSvpNT1cNBzhtEaWffokpx4VYNC57myFE9JPy3T5NttXiGwb8kQfifG5gAHMWtvtai7Rb",
  "key4": "2z6wbALhnmPYaZ7zDsiLaKv1sR1HW8xkGKxMhmN4vhFgBd8ahmhFPgxJp3E6u3VXgdvTjZ7wHHXy7pVWmneGSf6X",
  "key5": "4poiNuRbMnHmSrbgVUaocy6tyTJymRJ3PzCTqbvghNhsG5vFMhqHyY9zCRmRo93t48udEgLEnPrHuSgsHyhvftfq",
  "key6": "2bsjvzP3py7TPpLExWym6jpmtmi5oAtcy2Axx7AMGk6itRtRmCehN6u4WSEEYAHMesLbgWb5NEtWwSwrHxrJDQ7Y",
  "key7": "5uft6r66yYvodNMJuvb2xjFiXVyrYKBcNWPSsJyFrPnJizeAJ6PCuZLTcBiFUT3YvoBru4tT7gkVCrhtusjhfHx5",
  "key8": "4yJHL62GbquTYNqX9xcH51KoN1ydPA6jZVKcka6G5TkJr3PDL2dr4TzmrVY5zHGUru39De9nLZ4PWmXzBFfGFLzA",
  "key9": "fRKwjbr1AkFej6JWi1tamcLKjYsLgwRWSkLNhF3kTej5NM1QUUY9NgpmWWpqhwZJD8ZAnV5GDzBdxhV9rtqUVwL",
  "key10": "5N4D5GZPBxSty7kYCFocuiLbUJm7kihVh8xACnqBumau6cUSdNnrwLqk4zEnZSLvePMyJTMtdNbVAAvf9WyxbmzY",
  "key11": "39dQ8VTMWME6Rmucs9i3USSaogkjVGLwMuJ8Z2HkVnnpYM3cRwZToicFMjiuApkkwnTcGBQ2qm3jYwh7LUFX6NBE",
  "key12": "X3aU6zZaLs8YTGweLqtzf381ArG8nkpUPrZPPfuScvrM4qw9wiivarQQnkANm8cCZEX7j9DukEseAeMfCVV7tbM",
  "key13": "7o7bc6hZDPrrcDG4tun4hr8Drd49wBFrQKXSMix5WNrvXvAa1GfjLM5ok6bJdSvkTYoocRbA7vPqSxKWpXk2Web",
  "key14": "QvHMBAiU6jRrMa4pxWqrtakh1RjnBgbaT9nJkz4scG14g9UFyp48WjgjsSS9A3zQe4kYHSH9FHFysv2zGL6W25M",
  "key15": "5vShdxYDhY2qDJZL2XdZjbkCBBcBf4mYNyV2WpRM4HN2ChS5S7agTwcsQftJpZQqAkjVNxPFH2UBiohUwE2UgvWV",
  "key16": "3NCiQLG9wchpkRviaayMaV2c2MGBnGVvCQixZQGpSnq3bFxiEvPSYs2FHL6BmpYgPUZPrzghzsYnoDiEN3hxkmkw",
  "key17": "65pYdntCd2fYoW5KJAFdcpFxe2vEZTdNt8JYcoX2THpjXd9NR7gF1ipKF59SJnzAaGFTVBpSgcUjW5z2TADVwmRH",
  "key18": "4Zzff5CPmntFJPorEJWumnUFifmEnU7iyo3oAByiM6axRnk5jhwGBFZs6usj4VFunPEPQihGamuNP3B64EhrhdKp",
  "key19": "25Boiey1eRGfprzmq8nvrLivKQJ92j6kskjEgzTmG3Ck9UNCq2LvdbTvP32Yb5xwaoLVtQ4eGJ2krrVaTtP8Kj9C",
  "key20": "4tHbsZySwCSjpeUcLyKADniw8uwE6J5XwKnMirqJLGGunAEnwnjixZQiPdLxr95w7KmNznV3uMo1rtjtDKUsDJHi",
  "key21": "3LLgPeahFWwTPBGt7pJQQnUdDMYpSzdfkh3u2EsqXfK27D2UYhX7ANGGYnCSeiJEpSHXDBZn4fW5vPLdgPF1bJCL",
  "key22": "2udf6XA1KLZFSg39mUscVsJgmQuSs6v5LUtxM9S71Z6Lg5rQjmZf2FKm3S9pCXGTRj9YYZwpHRo6G85qtg9wvZMe",
  "key23": "4gggwBtdAy2V3XY2RAedyd9dmKNM8DabfBQkMKY2fbJdeHnbspXSYDtDfcq2ZTm9BfaVaT1Wz4nvXZak5qh7JnyA",
  "key24": "2awRCsVXj4yAvjj642o3iHnvSMi4Szh9xESw8Usi3bQHreeaQTtR872DpWYVKgoY6gJujLbifhb4dHHWnPXs5kRv",
  "key25": "3DA2zYrxdMaMMDqJih3W6b4MAocobDpePQtnTLd9HKpSCeRA7ffL9W12CGX5hbTwy4C79rx3C1mEgmk1aVfs7pU7",
  "key26": "582UxsX8Br1bwjWgxQppMdGTox9emeniMqdvYaFBQC8NeJUjaJwiNWDBUimoq5GS2PJgvrPrmmLevwvEJEfjV3r9",
  "key27": "37wY47QwCQtbMCddUak4KVPjVTtiM9ooNpgHUjrjyv5g9bXNZFio5own8g4e4JHYoMDP699NsxqyW3k9FXmm1QkB",
  "key28": "2Fdx7mFf9LdwGU7uLVJUcRrnyigHTLrZPoh6YrfL117C1H97PQCAeB3DmKULBfbH1yx41gCqWv7ogrL9mzdApDY6",
  "key29": "5wZKUBs7L48dgvqjGvtZwGwcvXoBXyEuG1Xm7fxD2371wPyD8nfsw7nEgYo7v2NKogrdV2pSr76HAo1ebHRTzALt",
  "key30": "5fHuiJr37jy5Kbtt2yizaSgGEug41V8huUW14KjYQs2cNvCpKN9JtmtUbhmpUBSUS69MM5KqWA9vZ2jJzai3HZ6z",
  "key31": "3uzWuRBj5rAYwTPdUiLaCDGw7KKaTRiehEZq5asWWq63pbY4nQP6kwa8dXAjukDBBVppVi48iFAzJPnwGCC1zPJY",
  "key32": "haWuNkjgHA1MmBGDTspAfMRf6mG5Bv6wHHcVoC1aSRq7pkYnq27C5qrZasFQ9J39MxPB1BHE1m71xetEtijjZTM"
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
