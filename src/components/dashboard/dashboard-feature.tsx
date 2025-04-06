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
    "2iypjZ1REhYrg5EhRazoW6uxnPtzBHjGjZ3e555kgFX22frK612fVwTKM4E5zbfJXrs6SUusMaAPFGALfTjJgVUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FE71WspXPBMDkYBuprm8fQobvMPq6pYN2ntw5noF9gBeuDUcPSSRqQZwiJAfyCzSA2adJSELsTKW2v9NAFkaqL7",
  "key1": "62d12VUDuCGFMD1t8799ooGttg1NWHyc2tNkQkR8tUZgYvwtDkdyXggFxiXbEixVeu51Nm1YSJH9M7fAG48Z3oof",
  "key2": "5mwDwSKbZHGFpQGmHMK3yh8JyWjPQep1oEXF545TVnFsVpr6b6wFRkGxTMLxwSixvsKvoNg9VsZ3J9vQmCtUsZc9",
  "key3": "3F15Uzm8b46tYbKJoQsmC2dqBvrj64fWzRYg2NvYN3C372DmhojkwpWkASRfk77stpMqtpwprm7sLNxkUS4mgC51",
  "key4": "uUjE9CmV7FKkpDPGeu9gTtkpAjDK3FJ6Q2KXz6sUHSBstja9i8yiouY9soGk1oco8LRCTGXaEqcAAWjD8RbpjP5",
  "key5": "5ADyLV8aHTYcYDjfgiSmm6Vtxo9NXzYEy7GLNh955dGiQYTMBuc2YQ5iHqjFpbbEkgraz4tYyifk2sjd736uMXHN",
  "key6": "47bg65UtdubgtP8CWqsVEGMao3WannL9iRJEgjGsRDtMa1Mq4NEmCsvYa5KDLKe4q1PZq7sjxsQwnayCoDBQ3Y7t",
  "key7": "33AEa6rNWxpG3yad3W1Mx6jBoC2RDeTREWZbFxq4Qm4seAPQ4BncBNopKypcLGPtKCdCc3cs4At3psRKg2PPhWEz",
  "key8": "5NJLJ7sD2osFfyeTB27Q3NbsGBDMcMDa8S3f4vcMhfntXxLvRt6hdsQD1ZQ4GYkBfxbhRwZbZucKtJYiYNZexWrq",
  "key9": "5SfTxQZuyXRf2meKNKFf4MhwuBWUUX9kkiKEAevRJNVMkWAdYbn8Sfwp6CsUZdZxdEreHk1P6wxsM7GqdFSe5eoQ",
  "key10": "2U3yCpdrvfiDi8H1MLfz9Kxfsfj3By2wwRF6Zwne7s4iYiBhCKQBmoTGuKZqY5GmtAwYBrgAQcAAk35QbqVehDRC",
  "key11": "mcrwGWiAj2qtFu15mAMoRENLte5smwsgRC36YHUrLJna3XhJBec7nFk6jweM8zWxDaXBftQ4bbhVQVtikLe1125",
  "key12": "TR2HVQnucLbP1cob9zB2LaDcoMkfeVoFursf53iRejm9LSWJTM6c1U5azw5TncDAVfAob98Hspg98HGMpcy5xkH",
  "key13": "3F6QxmAMJhfHncr5KRRzLGGu2YSBtc3ShtjJtCn6NuQ2XcPQaMDH6PJM3xGEYaHqvhTWEGCfQDC9kbKnCRj6Fb5F",
  "key14": "3Cn4BhYgpq72ka4ozA9eug4dyucVx3pnhjjtJXLSaLG9cjRXu6FwN8kSptXvV2GYfasMDFPG9fB6VVP5iBaU3kab",
  "key15": "4vH61hF5WvMFjvzPc8MxYsdhj5y5yN1K8pXpqJnzN5uicceNjAmvNbt5tB3zDNADPH7EtA4m6mmoV912ZZgV4AHU",
  "key16": "3UL7u31bXvj5XfyDu6sbgQbHsWEJr3pYBBsrsPmcJcmd9Thyis1AR4Mgycoh9eMJyVpg9Q84wC3YWyXffv7QhKev",
  "key17": "t5Zk2REz28zHoXq8BcjPodnd85edE1eteXReXmxUysYXLTuEJKNRV8an69RPadykeTsFUBFF6Jb2TF6cgqvMgkE",
  "key18": "2eetFUiJpegmEf3oSjHdZngBFvSMjbHSwWvtwrNxtsS5CLY1G8pfpa46yTsiUW3CooBemGc13B9WXbGmoEyNxoPb",
  "key19": "4mwbvxEXkNPxZKxRFDP6wRpuyRzGPneaCDst7RnQcboe4FYVSapcWm79J68jZSb3GHz894z58c36SVUayc671RmZ",
  "key20": "5ZNxEL4VgW6utS8SidSead2gRHCHgY8zBBG4LTcUhERYDdbs3rNxAd6z5PHK99WSHfqTVVawDGbcnP4cHMYCtLd8",
  "key21": "665H6CTCJQJ2XHADFTdd2HGmvUZc1bULHZmxc7hy2S53W5pUtEV6pDHbGcN4zxqEvgMFJLvJyFx3MvUTcyrj4UDz",
  "key22": "27MreehWoTuB8Cm6pQDwD6fYgdNiMX24KBVsYiXGPnjuLWLbmW3YwsTB6cPBG6GKKV7vGH4m9AMuWeJZzUjPX2VS",
  "key23": "4GVXdxfQjBnZzqnx67kMKWfudnYWpZhr2mp2i599KNsEHffrEqBeE8aNNpyQTWirjWaUdxF96kHzkf5ffoX4KwW2",
  "key24": "4cuCS272mEsPDY2vAmCkAY5nzrMZGj4uVyTgPZ3HoiypX4GTcscM5kFSdFRXifLNKNC6VF8EbTE8dCjZW4dP7xsx",
  "key25": "3TjeTYjSYPhQZvr4z8WmhgXV9q658KyRTVKbzYTcSMr9MrFnEo2kM1Jj22zCrAGDNNaUHKJFQxBgMJKb3X1ecwFd",
  "key26": "2sr3c6W9T1BscAKR4jxJpvdjvyMSAVP93K2jRZeKNKL6pxjVHCTKDC3cmmG6yYFZ2RAL32N8SK7WtrBDoH3rdgg3",
  "key27": "5ihVTXRtS6xDmomw3p5W1PZ7oAhprXNMwQAEwC2QwKaRYrFSZE2WhiUPUEvpJzCzjoNPo5J2U7Rf1rAQ26oQfmdM",
  "key28": "3XPWVeA7kP43uRBbYtCJrFqq8X1T848EEn2y7tdLCYPufbpCTHH8mjFiGwgNfnRgnEK3Gbit31V4X5TsMyKJ9LSi",
  "key29": "4K65WjYah7ihyRd443uxBsFG34Eqvz7XFdDNMaspbk3x21nTXaPSBcHaBds6WQt6mR34fDQ6V1f5GVCaE1TG97jx",
  "key30": "g2GnC6Yv6uM6ZrEJ4qg8RSxcZYuEpwwdEyXcS4GviVKtUFSKW9KWz2FktGQoAhPQ3hk9q3QB1fyZaeRPGQCKS13",
  "key31": "55riskueeGiySJjMYKtjo764GQiF4BJb5bGjVCknaoxPSR5eCW7sZyaTLCagiM3aMSEWavXcQUjKu3QAUi9CvaKp",
  "key32": "1A2nMG4WijmqiVZYuoLCZq3viEHKNGy2irgmDAsjGBLD7eZBjfX9q9sCV45LsC33HaYHzzijBdD4dEoDRhvwUEd",
  "key33": "SNE9j5dQXiaPS8GZYDgW2fbDfKmGZ5eLLwkq9qMjrybQdiLsuXpmwNozAm7XUamorsEWRVpiQKLLJT3YysmWw7x"
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
