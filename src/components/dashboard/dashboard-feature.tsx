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
    "4tF3NEsrC1aCnJ21BKqKkr3MuxJpyjsPzFyovm9S2uQYjF2ERmXguJHDifGMg3KYyq8LRAjCTyXbxEs95nNLPU1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kruTCqpcZFMz6zrEX8mbPuUwwoJ4P774cZbqpZ5XG289HFn2TnAYtQeK1m8JfeXiSZoD13rSG1baRr4vnYNPsA7",
  "key1": "2LFhxwwNtbqnvoY1VGejMiirnQ5voo1mqxCMXLuqPPMNvK5D1FTEXanHSjAtFSVkkpxMSLx72LF29a6ZPgNDPAAF",
  "key2": "VeGqSYXezo5vLDAQ9MfyEFbEtxjQn9RJ8xjsagBS2Y7xw86Um5GFakNmAssDo6ow6ChujzSm4HGdM12DwAWtZ4v",
  "key3": "2hnmrvoBpr1zB8tiDSCCNS5kBzJWH5vGoS7VjAb1mEJ4wv7gffKB7cpQQXNNp5Kihe6JRWpKsMwfdvkfuGX2aapz",
  "key4": "3wVQT3ZiGcaXEfGWFubUrV8wf1Hx9N2rb9nrNfTQtVK6dp9EpKrzQafdFhsuQEZ6Ckva3jQfZM4zn4ZMCmnN7khi",
  "key5": "f7StsxX1uxU6ZAiUUVjy4ToDCpQEy9mLnBMy6TXhwRHN4BcDtb7MHfaG1r2cRWfNNBZ9K7bhn4g5k3kCfEoqFun",
  "key6": "5bc1oA8eQteZcvdjJT4ukkZ1pQXuoMjhvGzUwVWvM6CMnQ1TEHjeYpe5qUBT592UKL1yMhqa8xtZzd7r5nEAZBg2",
  "key7": "4GNrVT4nCfWdSh34rnWycFGJhm8qNS4Sh7dwjhkqfthGb8mAC4mtTuoKcvEUuEZbCXb55WgAyWkgrFHPBxvYU5N2",
  "key8": "4No2RCBJ8kCJWwcseyGEE3izuSgNzUihWueNiD56wtZJrWMxhbSCR7fgRf1imFGkMf3WBknCNsNPyhnM6sPDQW29",
  "key9": "62oPemRBLU6Sy17jwomSa3vHRftx4P2Zxbvo2hAgDmGGyd9H5kVBbmt9pBqr3FLFknW7ojkjbhkurLKNgbJkEBLh",
  "key10": "SfsjngYNJk1A5iZMHHwQBhZ16dMaD5SBDXqtiUsGE5YhybzpLcvTL6DWNqr9d53iCAsvGXudoj16KoJkJCEAeqg",
  "key11": "3SRMPc5QrH9XEMxskb1Lr9UmMwbe43rkAcT9pg3MvhpcT2Bhjf4dMFthmGyQqEJ1yEbkCdKRKe4oGCvS39qy61Zp",
  "key12": "43T1AFKJGwnKnUvPQatksqAWyvsC8Br5tiHNEDKPGvWLLqu8MFq9sUxDVwzN28DQxBgu1n7VbaaLcjHP4cF5u5mJ",
  "key13": "5ZdAYss3ZA6ipgRkhfgaoAiqpbKX7KhQwM86JqRQUaToeXhnj3q3syhoYXyoQWMSYK2r8UGTTfBWFY5dzg5i3i2J",
  "key14": "6mPd8cRJCg2fyVnmdVo2Q7MJoCVzGLPR1c6LqRkqzf5jpSFLV8LMeZKnJ917FuSBUQSpYJKSgqV3rKiD57phyAS",
  "key15": "FHRkLJ1TJLdvYdkM9kQEhygW1bF5nNfGepZXYvbQHPD97C8hUGsR4Aga7AcfSJirMDQuvem4LbR4RDWWkcxg93g",
  "key16": "3sFoR9UXet4G8ZAvxYEDBzqFJMuTU7KfQV12JKUDyKy97hLUWHXj2pP6kn46T84nRfoKBraDKFhMqnPHUxeP14r5",
  "key17": "4k47AungoGqYeuv8w6t78vF1iQZBnE6UK2u9W28oJV5y16LsYaevHupsxVLWzQP18C6N3L2fdpejWRp3hz1Zibqc",
  "key18": "4GQZkZAvKHdHNyJy88S2YNxDAeGsv8KzKkNQz7Mh9KeyYbCqo1FNSEaebgqFLAiTZGAkVPUE3UUk93B7A8MxmW2x",
  "key19": "3wZk1a1doff6mR5Nq9uUdEPZ98yBmMz1bRcahyijXDGxUpsBmWQ33s9XKpm2dX4WACtsXf4C9S1Kc6ND7Ub65HQ8",
  "key20": "22pzSUZpoYRTu98zCKuiceSV9fZL1hbRF5CreKSq8xfMMQoVscvEjG1kfh1RcBbAP47QwAwCTkqozUQXmuLunUBY",
  "key21": "YZ84HdNxZF6g1W9pjhCEoNSu8QJ57nFXd85Vk8erDJyiLzRGghzpBgXXa7r18iVomAwNCKQB27ekXwP9dLTxBss",
  "key22": "3Me5gpVbcz3nRWC3KNfiporjY5fw2qH7L9CCRMj2XuZztbQefcUUscSpnRfMSsTTkQ86iFGky1BHkWf65oPfLs69",
  "key23": "3jXRzpemHRTPi63KPnsYbpvBLYqQVabn86HvGUAm7b9q3c2quU1FSvVxTwm18dK27KJKS3Jx1QaCM3vkJxt11o7B",
  "key24": "49VM7wMDZXo3xRka8Czw5HaWo5jjEUF4bD5TjvQAbDTzJr4xk1NYj3dsiVYudSKCJUse2gHNo7QRJFzAPkEWaiGu",
  "key25": "58U3y6CqaWtbR5p9JMDN4Q5hHayLM8bezkFyemLHjLFCtGzpDg8FbXyqR65ojrbNBCeJEYugMDdHY5ThW8dxNbCJ",
  "key26": "3Qxp5KA1fZYqnzMpygHa8me7avqoERNW8vWr1DfoG7DwAcEQfnPZ4twLBqhnZ2TZtJBYTnA8NgcJqBbLJyDoPB6",
  "key27": "CF4ZPLzWGLGkRaRg5iDbbfypwH1BkU6XrNfcrvEnuX8PcB5T3VtMJhAG8CoE4PvvwDB8YYmrTjP3r4NXX6FFAfZ",
  "key28": "5YnoztAzD5Vy6JkRADbTtpmSYWYfJid82u43RNK8sxigpxc4ypWFwtrJHzbSDiMzL6amHbq9tDsuCB6aQNKuWUQN",
  "key29": "2pnTgmWJCVW7s7SfkBHxC5hfc1pNdQXnkXsyBSaXjCij96BoWZtJFvmncZQTE4QmKthTmTXd5pbUqLCzhPVdcG9Y",
  "key30": "4kmJvVJBcvGTQgfE5xNx26H81U9P6WvPjKhWX2wWhVqyaYJMXJpBAPruaW3dtJuQj567VQe4y3nPfy6m2RAissVd",
  "key31": "27qkVVfct2LcWRspzCLyHoZokSUikQ9NqKDu75WqTnQ1CPQ19hysH2rowfE6fkMy4xG8xdNkvQacdinLhMhZzeXQ",
  "key32": "5nwiG245UsweEb37cz5GnTCeZy1DXVUSzHAQTEW3JioxLZQfw44UcxBiC3qE5utf1qFubkZeg1yqMVNxA1984t91",
  "key33": "27izWrM5Rwcbcjd6Q62AhwAoBrZhtHyqd2w7nyhxqqqZDhcPN97A6rDs1RrKDf33tZ27H2FTtUpi1jF94he3Dnsp",
  "key34": "5axYQE7hiPKRxt714G9iZwqgQncNDKFh7RuLSApfUhbFv8ZnJTqBVAJSJxKgBTU4MjgbGTUCtPVKsUo7rCpiNrKW",
  "key35": "66u7bp9PKUp8bq5gbwgQCpDMQvqJ2bfHLb9ZjzYoxja1BfZ3uoEGVPfFhXETDaWjDsX6ZtE6Et76HJbScxMsQHeZ",
  "key36": "58ssLc2LEgM54gupjocJcsEMcsDtBSUVoxyN7NgkLH5gMvdVfAJxyczyMwGCVULPdLjUjTZPby1xfmRbbyV6H1jx",
  "key37": "4MVUHZdbiCvE5NhZZ1Q9JoPj26sRw9ECQA7KKxmpE7RoahkT6TuoKaEnhWMniNAi9QRVXGz2iSFp2MmzRi7o8cc1",
  "key38": "2jPpSZgBEwg3tbe3onE6KVMvAZvsSAGXRkcmsfeQVUkNGzCKBG3yTTNXtdCmWXd4nWDY5LGuKELKMEJRQiFBkZ9c",
  "key39": "4EU8SFUjCT6Z5PFJpxU6FjLiaJ9yQpByqNbXLd7v7gouKHeqc3MxoQAhMHzKQrcn3Umf9qfQHvSfXsueTXdUoLxV"
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
