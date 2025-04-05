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
    "3eSZNg45jtMvkBaqNvAhGHNxNPASxMLJThXjDtky5KZWtmQNaKuqwVp7VucVkcwaH37NaZy7Y4CxxUupoyxJpAoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S9WpmtJGVybejUbAAGmohNp9ofkwL7CwXa2Y9C4qDCWtptbUJM7bPPz2fH1HhcC3JC669TrB9YeZHe1i3wnFooH",
  "key1": "63wmcesC3XHpkV9pigtaQ1SkVoVfPzZkwtLxct7yQ8jm4T4aU7prBxZJbyCfdCmZymsHB1nYUV7msoep5SSdE4E5",
  "key2": "3iH8AdG45BbULomH8X4HNKVoaHi4L6P2fCiaLDxurmndyHZJtJdqQQu63i69JuUQnPyTZZHBGt6CGnschMEbq9Us",
  "key3": "af9HZy2ff25h8iRcXeF8RPrYB9SBGiopqExgBizx2MgvW5HDMmxjAxjLAbXeKNo4gjqDAzxqeZWpGnSZCZ28t1C",
  "key4": "2HgojMoyvG4es9UhA8casDYvrpZ4V31xdrTki1T68vng6b2sjFWMdvGsh3RkhYiJ1D6Ai2oQss8uRnAmYV4qzWX5",
  "key5": "3B7hqRbXCGDTnqzks1czBACaXruR4Z56Hp2cHBrFFfgiUErnRfyyXyaBaadYoQgjuTLDYnwDAg1H1VviFYkt6viR",
  "key6": "V8CnXLJFCfkfHJpybwymTpLFHYJCUPNwdwS2SXfJXo34Au9B59ekCAM6WVV9YiDEm4k1RnokajJ9hGBFNmiGBPa",
  "key7": "2tWAjE6qBWHEXDTdx83BH9akBRRrUbPHG4Fnivk2FjLdJADrf5JWJ7o8ZwAGKifJJm5z7bgBRvPMt8bcuQyMUbHT",
  "key8": "D3fDSjNrfXwicwj2VTdppwaPWBvPPuHvpKXQYroeYVY61rxdYd9hVmN41oaFsayDduJw6a38bbcdzkRbMKmCWRK",
  "key9": "3yXivrbDr7VLC8M4kzexqCyUESq1ugXVM3jhVf9UCg9mKaS4KB7Qwi6RyNJ8zau79n8cbdUrDzP4hrS8EFe2thvk",
  "key10": "SKnjutiyUbJt4TxJhYeKZydUWj49Gm1fMW34MTmYEAgKwHpZ14n4jnHzBAsJ6hwBriGKxQWDTYRCGXu25rqmXyd",
  "key11": "7EbA3nDdL4ACcChaoahGxhts7bBikBzZ1MJH6xPQHrEqHWcx7kXzSHdiEqULGQMtbhHupEvHGqwqBRDLUR31HqX",
  "key12": "3NopbMmdeumsLSgjGxvvWJYT2AwcBskh5VU7kFknCtJwB5YHHPXqf8Q4CR2LDaRYmv7kLF31Mr4GLpcBwrmUtY8w",
  "key13": "3kin7kC1dqTFw18SYezZ8aoNAFm71V2ZKeiAdZx6ThFcmWAXYCf9Whk5hpC8ySRfHmSt28RmLAtSiLe5MCCX9KAK",
  "key14": "5rkgP4hWQs8eVf4cyCfiHdgLF6xWXVeiqsVmGgjszqDxGiR4aBbsZSEzEU1ZJGH7cd2S17btSRwC3KMp86dzRN7M",
  "key15": "64kFbHoAfWugpmRqivy7hxW6G3D53ZpTcobrcp2whnKVc1A3fnruvjTBwjqwYWiHTKxo4GQ2JqoEJRZddRbcqHdn",
  "key16": "38TAbVJViob1QFSMWore4bjZbU3nuXVAPDMdyD3dTrK5RnMkDrL2VUD42cVFEG6jSyScdrG79QzfNjhgECXBYsAg",
  "key17": "R9UeyCLpWrphvvnCfBwz39hB7yc4ALPjwHvFN6jo5ZQfyDuLa69XMn6AYWvGDo4LxfxYxeUcJzsjJ6RKimLivAx",
  "key18": "2qk3iUfJiTzvFgpf89yD3dFxsZXnQYmwiZUftf12V3vRywaPiHNUZGZubfsyLCLd4YBpu7aksJ1G8zDuCzwgVdHJ",
  "key19": "2vRp4APMi2pbX6ZvxKzjg7QxFtqx9p833uMrJPn6qXEDrmCQVYTH5Y8qu1BNeX5WeNJ1kg18LGooBESczr594m3C",
  "key20": "w28N9Qvwx6rW8s1xJXsRMwnvMo3E9miqDNX4nuizryeecTeUJVusVbaVf5ibXoXxGCfuPwR4iQifZGPE3XZTabK",
  "key21": "3xNkhjJjq6fC8CEDtsAuRXiyHhwh1yhsj463gR33xYQPonBfhzA115MsDUmnHAetXKxKeFK9bLnwrJ9zeTJtcCo1",
  "key22": "4FVGXbAouf66nDa7df2nzTXGyd8EqFCgiGDoffru8uWvNiwN2yfQkMSYMrxD9VL95bTFRE4Q2GDvPcK1WHxLDgmf",
  "key23": "YXNLtFcakvb5tpPGezBMxsPVknEqo3zuWN3ABsEwcB66jGXeJn4WzZTnB7wf8ZCHundJ5RQ71Hw2oHy5xp6c84b",
  "key24": "KUyfSWjGn42uWqBG1oMHAyDH4gHUq7EqMJE8PrUo5uV23nyjS5K5WB91eUeD14C57oBtyh1eY8VECME14JKw4Mr",
  "key25": "3TaZPBeNXR7ixe9Zv7SHdgULTmRAMbEBgAdSn5CRfbhukcSY6Wgfj751VKsqCfFPkHdnxjMn3PubbKyMDJLQvcTT",
  "key26": "2iTpHztYpU1WMVvNG8tNXfwcKvUAjL5jnCwQLwUz4xDTrCNivsMMftwUSRjzHhdhC4n6pSLPqjgrkUaiUWVWsAZM",
  "key27": "d7Hp7p9AoEhxgeiskyjswWi5LyWW5wt78yRZBu8sXwjuDWZdQJHJ4kj85drrbprhDUaSVSn4BN4cgGV6AgbfXo6",
  "key28": "4DDmub8Uqjmikn8xaU8i5jjMGqjaWPczQvA6oWaAJacfihe9QkSRD4fXzEMWagKnRBvjgVF7DCWGdEKoMM7r7AZ1",
  "key29": "5wuVCqh7PvZrbzuTh1DeHPFsbY8YjgQ7meeCfy3i2k9wZd2SomFhAaysvmdZDNT6EPYFhwpcUueivTYx3LuHBSnD",
  "key30": "4PCUysCvjutn24hFRj72uR4noF8vc5HaEthHgzjNUGaqnaZ2JZmYhojE2WtBGFSG1j8DgTFqGs5CersiQYSwuVTv",
  "key31": "5ivzZEtWniQSKjQWvZZqNoHE81my3QaFUokKkJeZNwiwTLzm49ZFeDZNALAo7vN6LzXGt2z5z6U46Yyt1MjNofV",
  "key32": "2QpzTLBvCL4B2B4oJf8QHkab1Ct3x8sqqCEuXRjjzg3xvDgnTNR8WoS1STYgbkx63wK356wKL42Fn76p31H5TRBq",
  "key33": "5Z4rGPyDoDBzAY9X1hHS5mg6auztyxPs4tNmTcuJVWE11rZ3aVmZe8R1PCeTSnKG49RVKYB7TLS47GQ7rChn5SFA",
  "key34": "5bnKoUJf6vdcGAbjsbC7RwQpN2wz69MGunfPWPab9vksmF5my1egzm1cCzvmq9T87ezja5JcbaFjjVhSCDRcFh78",
  "key35": "3sRR1Bjnb3CwP56sm9dpTid5wc7Es9W1nm18eYo5nF3fYAsAEnNP8brkZZhfpLkq98hsC6ioqPRXZwNAUCg62Ryy",
  "key36": "4PxZHxbrujvD47V8sGcNa5FSB4HfybcSs5vpxJFg5wDnRXsXo166wtvm95vufYNJQRqzDBpMoQntBCpwu8w1ArRX"
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
