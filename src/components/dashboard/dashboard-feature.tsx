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
    "VMGMCDqAf8MkmdWSUxwQ2E2S8ts1kRUGAnBMwhUBFrbuzWE7Mjgh9Jea75KBBiAjwMxPJxAyLCFnDojsFCtW2Bg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pfp6MpB6Vyj1BRGq6oYb8L46oGsmU8tsvMajYQcP6d4EmocfgUMi6rgDUNsBYQALxUx4bFCGuu9So6r6tgvEWTf",
  "key1": "3fZrd3VKTKHwUr1Y6jk3Brdn1mddUkmHP2N7a1T7NWJBUDEZJcmjWUZns5rjRfQxGxNEr6vrfSKqVnH1ZPEAnTry",
  "key2": "3j55tdxEG921jr5jr36sjjwZ3Rg1d7kgpD9QNyv4yp3YSj1UfpzaLxAZXq4EkSdXz3tVUv5RUuoGQb2GjqwXLFG9",
  "key3": "5dSjSaV7CZaP3go6HhNtZ2rDdBGjCgHGM21icxD8YudE2RoCJrUG8kGdQbPowb16JTNrNSzJecNxLik7Ldd9zJfT",
  "key4": "2vGXJvpwwKxkd3syLnTgThwE1zcApgQi8Tno4pCsJGDQ4TmFZioXXc31tBQ9dUeEcCKS95mKXHhE43TsgRAGHFvM",
  "key5": "4J6165R4rAHoKuZzst5UWQmMoHesZLzFZTcbHifH5oX1aYEK2x5fGXXfRLcrZLkCtEWVCN7QTe7LP6jmd3CciBGo",
  "key6": "3cTbYMTFB87v2wEXtSXfRPFmsBvYMZrasKi1K2CACHJcE7g3B2dyN5C9to2oeCyBPi5C9NzMhEYeVev6c2A2kTPh",
  "key7": "p8SsAkF7xnUvRv3muYpxpscjcy6rQaQCcoL2EDv6uAdHJ8V7f3GXiwKnCdVRDsZkB958HjrMKdVexUPtRp33n6X",
  "key8": "2ABAyVxjCkpHo4PnyMNmQupvZRoLLyBfz5WRxeYqzPbUiN3ugBtZK7zmd8GbcLzUhTvUrDWXzfpD8bpgKLek3KW2",
  "key9": "2Mc6XPQWgMZQS2G7K9N5dAN6V8uNbch5LtQLKhh6MZ1u1nQv2WSQ5WACcBRXs3VvgjbzT41K9JNx4je7KkcFx9ed",
  "key10": "3Uvvi5hxEwdJo839TpEobafnEpYDaY7t3us91S8jezvu4s5PXRbLKgySRwyAMJLHGiL1aSBdJCyyyQjTeMqy6kV1",
  "key11": "67qqsT7zfZwd9G43L3zC5RgnSaJyCRQmJ6dig3sGtjFxqfoDg4P2DVQoB7tzXbLusV7tbHxDemgqnECeAcqc4xCH",
  "key12": "4nzzcHXNfViXGB6oNoiugScJ3qKqhUwHzXHu9K5U8RddqCmZJZz64zJXUJaXrrYz1Gz1XiaB6gAQssx5aFo2kUEJ",
  "key13": "67FdcdyoXVJam6kwANzFGM6f1A1QVqYhAZzr6GDnftfeUFFhSzLVSRfhxyTj8LJDMPnxZA73QZpY5U4uj2r9vtDH",
  "key14": "JXeq7bd4fkvXC77PRxmLNMEBPobtFr37U2PApBMca8mGm6ZmRMJCGxWrLkkzyFBcBEJbX7tAdD2hnziY6nc262W",
  "key15": "2AgTWMYTPsVemB4RMSvcNumJkD2TkT1RScNR21Wdw2o5RmJPdUrRYEN433XGPE8SuQeCfGPxWV85qz7R4Ua5RocV",
  "key16": "34WVvpUaeJVwUsrVZ7ruexJgohNdrPoS1VJC6cd1Z6WWLBFssqjX1XgjUp1VFwJco3LLhtKUAMtGmYwKFFknWUT3",
  "key17": "41HNEeZ8FfncrLJHejgf43K3mMkPBugcMHxWcYmUT32bwVp6nzj1wRfgVx5NQP2YsdBf2nNCSA3z5j8Fyrn7i1NG",
  "key18": "2hbwhNQ4pVwnDdtVfDroBTGyV64GNfApebCTvmmKpywojKtMN5zk48TrWjUXNQs7t25fGxhnRynzcxBQZ2AjmDUi",
  "key19": "3jymsoDo34c5Cwsdwx93TvimETn2BcUkTq3pbSeTj68WaX7sYXgJ9NeidDrbrV7JdWkSbymRHDd1oQYL4LF4mhhu",
  "key20": "4C1gPDUVu9dSxSiQhWijELKZWYT6DQV2k4YSVQqh73VjbparDtCfAXqXqQrMKaEiyawghtB9cqATKL3tjJXUeSCB",
  "key21": "4CFbXe7xympgk6eA1EDR7Qjh4PmgxMNTrwRFAkh3rSVWwrJq1wGYryVTvryGi2R3visDmENQ4YUnDhcqfiRjycsq",
  "key22": "3veJMSWemonR4GHav1gsDuKk2WVgxQyKLf1dHfGBpYYZfiuzaWw2w87Q9Qe9rqAqViGQoaTvQED3ieFifK9AYgom",
  "key23": "4SkMwMnSPuUpZbiL9yfQ573UBwtmqVrEEB2pickhBxh8GTeVLxeps8JTMEXCcQcYhTLPLtDLGLW8hiTgmCWbQRTB",
  "key24": "2yykuGv27WZRPSXXvBEK8WBAnNAG3N9CMvypUfbUKP84fLe7uis1sPgR34pJ77hUKvyxTNyBaNEzEe9cTtNJZPYB",
  "key25": "FkHoqFGixpeoh6qJhCZqQeskwJvC7TwC3UxAQC38TGNLFtVR4Gsa6vCZP15yx9tuFaARy8xmbyuZgEX1iTTxToY",
  "key26": "3mTK4WUbCEiNRLEdv4cyex64cd4PviTghM97sXs3xCts5S9Wnz6NpuG7ELx4WoFpmXhRwAKMy23c5SyuAWny6JL3",
  "key27": "67a5nCXUjtvZERcDGi6YuokRuC1XRThvjncu1svjQapCXP5dubimFi2VUbyZ5ieRRAmH7BYWiykPadsQPZRCEHYW",
  "key28": "4C9YCZWiheLPifDFSC7hWWgpCPgwLhZxe99ffVmAWeRsEaLHiB7D6Q1NHQc7L9aWFBNe8nxYcryUHXsVL8UhSvUg",
  "key29": "pkWNQkVpinpWUAzeaAWhGwH9Lk4tKpuLPzjKuqUj4xdS2mnZiE5kuKeef6MsBRy6UBbJTmbL8ufMtF4JqoqaKUd",
  "key30": "5K3NxYDw7D4vHMnU6KTeYuVqs3xmzAjkCXqcae9xAb9gsorFXw4NkeuRkiXuP7o6yWkrg4qbZWbnApRgEfYVFPrS",
  "key31": "2Sxf9ioCAGmPQhCKJkZsd2L4XwaG1kfyguy2uQTYoLt2uequ7WcnKeu7YzmhKdn149n3beRqpnc6xYm2gVPpL2t8",
  "key32": "zTNJDvC4Pvoa8spH41LGvsDcYWCJzjF6GSzwsh6RXBmacdfxSbvZ3CYWtAFJyoq78Fv9EXxrvYjC4RLd8x7Hzsz",
  "key33": "3vyZQjLbf8zqXQwf1LbbbcjtK7FMWfDQxTbXfRNaywtSKD4S1qvCVD5ZjKUCBZxQRm7hDck2Tik3aDX5EvoFAfFr",
  "key34": "3GNsJp9XKCqoJDgEr2L4H8uGDFJn5ZEpo43rNRxZy6Ct5putdboJeoLULn7NjaYeUSYWP2YnZ1rDVTW3ps1mpU5b",
  "key35": "3XP9ZNdMDZ1KQZM7X4QQtn26n3yDzfjLmU3u3vRGK6X5K1uuFSyfH1Xe97vQmPCHBFE4TgzRn83y2RpXaJYRwwJ4",
  "key36": "5jcXkjSxLVQZjvLGgYU2zwTzWBE7qxeJqiyCYAuVFfHnL1zjDHykEGd3MDWf3inNLVxfwUXXuSaespQUqC3SDJEy",
  "key37": "28AqXj96Qc9Sm8yu4qHC3m3a8rBUTx6sCYLhPRmtWps6vpwFjPcQ6AQ5EUhdK4q3je6uVV7z1iCRc6RFN65fRPhp",
  "key38": "3KcEHbJb8HuX6HfaCZK4SgYc7usf9Z5m2aREx92hqXKM7o7DvKQGzDAXMqdyzQ85WkwV7393XYdutetbjHhhQMXV",
  "key39": "auPgXYNZdMy9zTa4vHRDtckMXbb8aJ6q1wcFfMNhfXMHCbktMVDmCJMK48EcEgp4AUbV6itihbFua67Vjw9Tmt7"
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
