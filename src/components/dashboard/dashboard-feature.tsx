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
    "2a7vV1SqjrmhdDjnzYA1ijjXiCZEZmhmNWZ24sNbBZZ3cGQpSQbrBP1wk7pyJdCJG5GyeVS8JJcrVuGoW6PWpyGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eWscXa6ySHGtZ9bTfLdWFA4VrP6SYSM4UtkkaM38bkkVSJR23sMZxdKur5gmQ8B3yHC2McSnrrtZnx3JwQ2miFq",
  "key1": "44thPZvXPoXXpAVaAM6M8AjRYBh5A18fFGyK9WyaHjSKGPHsZvkDrgfrXjTZP3YhMDv4NXEf5JN581D4t1KJF23z",
  "key2": "VMXuYfZGwePuc9JPBpx511zHBYGXVA6LBVwtFaGNxjJe4LgUc163E6HL82jdQYbLPPJyD5yix86bSprGk6Dk6CJ",
  "key3": "4SWHHLvAN5dwWLUkaLeyPSQTbdTNLwRxCJbCFVBaHtaB2fpPcfv3m9PRHNfsHSUXJSsKmFeBDGJr4vSumYn8hswS",
  "key4": "2hUHnNy2k8ykJrKcw2Aq4xuBZs4JYCohXJhSCauEYbjB91aCyNxFuiTs8f7ct7WWsFRMwd3V8UazTLJ3UxeNACk4",
  "key5": "3reKhDzYCx6Ts9KzowvunTb54CK621GLymspyQWwcgKbN8ssEEsCWcPmJY4ksiVs1ENSVr1VaCXbr6s5YrgM3Pm2",
  "key6": "58posVpk3PjXqzzdzFEQkxmusjCVmfAFidwJHEbfZQtfqj2MPNYMPgwntoDWqCfg2ErYdCGi3ZwUAisSzXfkfiqq",
  "key7": "2mv5rCmYBcYoW8AfHN2HbRSc32TjEwxu41oj63VJ3iGRLyTRdd7dSFtsKDwY6n7ZNAFVtKPvdnG59KQj7t9GkYY6",
  "key8": "4jpgpMrCX6a5DpcC5d8EL5nSf7qiKXTFswidPGkqzyBTm2TUiRDvJLMUoB5LWKr3FPnJxVcxcU3n7oQQ3KUeKguA",
  "key9": "3RC6th8pq9XH8tTWhFfoZXmzjq18CF6g94AzedJQMPWqiZN49MFBMZzZ2LVjKpyqppbp4gFFYby5fs9WLtMNYwMk",
  "key10": "5UxPyMo2mnFHR4eLKzDpzxDUGmBPBARDuLtYTU5QiZKsbeqzVRdJsyxFtCj11uxj9zcXkusUkTDaZjgxJ9UzSXPf",
  "key11": "xfLTzSaCkEEvsCGNbEFfsixJzane2kYCuuDVTxKPZfRXUbkva3WE32z8t95B68dDb2zxsDXpu4XyGDRqeYWZ9vB",
  "key12": "3cEMoqUb77H27wNTmkz4GxfUaNSUWiS8CaPMUJxu2KiaCUQYnT23xcNFYtgtvAgvTMPp46UgHUWB42ECVN1dztgL",
  "key13": "2iB5q7Qd4AX96BoD3y4vheLYPzX8MuadeLN3sB7NwQVs2aEvdJHSzNbnqsfCQQFgrJkScTqcEefe4qsPP7srWpVC",
  "key14": "2ACHQWqiXAJGziXfTQ2r5FYQsYhUcTf8JpaiQnerowQAX4gjvCtuisJxkFh7oQgbiCHT1RVNp6cLSc4zCThDFaRY",
  "key15": "qqucVbQDBuCFvqHTekb16GLbiptEHEBkXVzdgTsB3LoRr18FvMvpxVtWBhVDNsRM2VfhzsxytkPnArx2xoik5zw",
  "key16": "2JhdhJPGiGqKRrcB2Pe6yujsmYJHeBXAAgpv5x69mjX9fnudDQrnpjRsSBMoYu4UBnjVg6pEkvWFafhCKHawXZUy",
  "key17": "5t7HMjPscofgfQoK1oAuJKfoJuNLevUeBZ2jbfUXNCJ6Ry4gUG6hK352s8kcTCLYfG8MgwfHTiWC42QyZhnKZQtt",
  "key18": "nzBJPhStAcYq6mD9tM3MQkKL2jqqdEzmAmsqymAkWALskGEMwdcL5sDefRLHq2R1Z7azjjAusxhGv4VNp2SLWCD",
  "key19": "KfM539JvKVquyUoJ5eHftaK4ECNBo2RumGAJZfsVpZ8eee8FgfogYPGcNDcGNmX6TbjshKWMiEkot2cEusk6JR7",
  "key20": "5YCrjAf3jCSGZ3dVpuDGXZFkykGbbAef7cAqYjq5v6hQ3nU4McxPRDybBZHwzDdUZ9wGMNBukFRJvmXDFrXBKK38",
  "key21": "31oEbe3CwWPX75B7VwvyE7UdhJn5jLgFc6oQbgwkv4f41Ab1EmHLyGBrNLLb2NknEWd7kJSJ5NneSuhkRnNypt9f",
  "key22": "2HXPLTpS2pPwGJMjm5FJYbUdtv8vJU4CqNfmXPjhE4k7tE87wEea7kn9dLb7zAxjS8Qi3upHVE2ZJz6TxN5MkTjq",
  "key23": "2KGQ6L4XUb94urnnCmpNR5jJPnGgzubGR8yr4yGXp4bT9xuKiqMrkt5NEDcLQPQQfV98yxvxDkrjQXH6DVSkJY7h",
  "key24": "3wVPRLKDL4WLYK787vXKbHDeDZtz1g8NfVnhPRzJTtTfjXLMScKg56d3VrFW37QgKzYZubBSJLX6NGwxmELN3cf",
  "key25": "2GPVrnPoKHjD1zgDiWLFnbJtgN9CnxRgLShDHYHse5GrGGtoww7AxeVkWdDkpwvtE2TeBWzwUotQZjGs2z11pUHd",
  "key26": "2YLC4LFWN7tzpnk4o2GDWBktwaK8i4GfeQfsJ7Wrpu8sfV5kLuK69M39KGvxN5wRhssG76zwUHjMKzNtAtseBuWS",
  "key27": "2VjESbsejGb9QEc6kmu9dkQvw8PHMnXZf1YbFwtr8m3UFJsLUnisDhNZXbRMwJcRB4iuAN7Dyr4aFsW1Mzy9ittV",
  "key28": "W5KTPqy22wmuBHdNQM8o63KbcrSrkNUHw1kfQAq94kbKLjLVfMGTPCZjAKDqERuxZ1UEEKrkCCSAhfZr5etH8JR",
  "key29": "4ysGZ5fSQnbnyoZLcDgm4jpe9LWL1DkJ5yHidbb1jRMiSXhPy9N7UkrhkG66YmeTCvxeiUyNJEEQ2ZB9QZNxc6f1",
  "key30": "5P6qXJJg9P4brJDdcpzgU4w9fcoDdACS69af85nuzi3WTkoHJqmNEEZeNndt8r8pGhajVvT3SzsDiVQKLKQGNhbA",
  "key31": "5q46Ye1sRPjtkGknizR8ZLhCKJBt6hHSprz9Mhcvuwvf3bVtJA6u68YgoUqD6zr1r8iYjqfKbCN9fpJc7NA8ixiz",
  "key32": "5enHp5HNhbQp3efJdv8SYom6ZDbW1eosq3ovGX6x1KpjFw79petMsMQhuzRbHwL5cijKxQWYDL3wjtmnCYnCQWTS",
  "key33": "5nU6AKKzD4GMFjmpVmjBuZqgD8r7HVq6jAj4n6ibDFQiZV8uchJEDsCu6Pw851Q7rmtm2SqufzL3F1Nwr12q7qZ7",
  "key34": "3MMs6XFurzDYME4r6rZwwDNYB2yxbMdyA8TAfLSSEM3TRyrq7mgGd8KW5AjBggP1ShzhTgbmJcQR4TCDNsynuae3",
  "key35": "3PzxsWpzXXUbJd7ffGVEkY2abXCZ3nyKZ42WZRZ1dHtZhiAmwzbXDYAsBLn7Y3t9v82Q7tqg9QauYzMJNoCjF5og"
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
