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
    "5qwdJ3iMYobb4C7nEcaPvJRCM831gt2kWUWPnmoKksqcmNtn18Uogty9z9SzaPR59B93b6WqvBcdDEz56WGU31wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MrEeGvya4UU6EVcb3D5FRt4ek6Fr42MtouveDHRSrCeAkQ1QyM6cNMqzrAuWoEmGdF4Pq7ZUYqcLFP6B1VjajaN",
  "key1": "2KJ7tZNHA8PWXj5be9hGdyBcZrviTTqELdZ2SRQAcH3t154gJz5uF8UQkvTvEnw3fBe4Bsje3zTrYFvqSXSFuvmL",
  "key2": "5TrSp1NTYDVjHcSBKXvpfJZSLvdvQxEkJQrEg1gq3J7CfyUo4YboqNo6xYe3LZZXxvfggR3isDqMW4YXsm4EURsq",
  "key3": "5eU2MVyHqVqD2isY9Bijh2EcGkfH6RG72R8ZVzN4hpoJRxMmFhYd1GR9XiNsL41wwHijcS1ULkQ57yLnVmHUkrtQ",
  "key4": "48fmg7VLTGGwuJVFZmRJoBvR3VkwX8uFuroJHZpAZj32EJM1hnFJavjDUE1a7p4kwvgPVjyJRfzrD2bWNYq8AtLi",
  "key5": "3o9FkB8KQhUSuQLYvR5ehxGkkP221dqmMhHZBvaBjBCed8syTKL2ywPzwd1XPSfmpiXz7P47QbWFXKD1QydFzrm9",
  "key6": "3evwgL5ZMd2utKPFah95MDbuhbQrxWNcU6VE2dhgLFUK3s7gej31wAoE5iRe5ReeWuypKhtUWgjgJGKk6cGYqocw",
  "key7": "2yqwhuiitTzP5okxi1HYCkNGM5z1s8hMCnt4r7qjf9rAjjUEQjK3AZyMH5JLAbJ7zFSKo7KibSzzV25jxduMN7u8",
  "key8": "NeHFSy9PT1XxFa7YGpiUssDsQtER8bSxsqwHySpUwYEtRD4VqQhdNTQp92q8v4eTRZnKBZhkC48xH8fBneQpvBX",
  "key9": "4NeYWSc92fMoQJkDEaDfN7QTGrNvRdtZ15iSP2trpGyuGE54vAhQxZSEpJKWzsk2DgrNCQvk7r2zdnZuq7M1gVnP",
  "key10": "2Wu4T55MAB287rj7WUEfMst9Nq7zvfX5WVGFm2yajFw67hBtLvAJEBBRowFvgmcc4fMwpFdMh9iy4GjfbiCbomUH",
  "key11": "2Gv3pDUuxG32fRLVMAESwCGcfZfqkYefyhX1P53RM6Ut9rgDxvAsp3oSeCoSkxjDi9T4ERu4gh6DhzmdjvCidRfF",
  "key12": "296Dc846JovHsapJSF7f133AGernzBKFdF3oQLYoyZ2VbTgZ3narcXz6Zq3rPSnWwd81be38CapzDWmwWo1i4EVW",
  "key13": "2tiFkXQmgF6dTQfFY7L1oN3CMBD8ZmMuLGUcR6mEYwyjXxeU7TncPMKWt8rraERSzAJijg3yTtb1YRoLRGJ7WHXe",
  "key14": "3nxnyyf32LvVxi9VWH3cFNE4MusssVCd4yfAwfPDxvC3rSfDGrsk9cP1DS19jBvUa4czM8Gu89swvxBsL759y1jy",
  "key15": "7WwZn7rtF9WQbdDXLHUGdTjKoNcDZjhBASanS2vrabFSQXzdxwMPL7VszJ1ziogTkpjDfjXspQMk7rKgQYvm6nC",
  "key16": "2G8dNcNYiSgEtJwLpMANvuXxf6qKab3JQVxsUcWkcpStzS1bdZY2EzDCY7Z8NvPT8HaswngCBH4uj5ATKv7sbjGn",
  "key17": "2UvuucnecHNzhHeNDuyppHaJbVkVLgijooETYKMVz5Sv4Dx8VQ16bfu8a1DDePaN2pxnRJ8EwE5JFzeSww7Q9ExY",
  "key18": "2bWv2J89PDnU6x7quaUZUTcmZYLCS5REiGKzuG6fXtyabYy1xp8CpFtyS3uwE7dUxLxGgyM7An7npDAC1GfUDrqi",
  "key19": "3gqFYk3LYTh3CL5eAkEHeEudR5WDWpnz5xwvhTgvW9EdhqFnPZKYSX6GQ5yfh1xaLo7sg9YPYD1MeY2Qc4FJ55pQ",
  "key20": "3jXqGmfzbK6TasMMPxDoPymi2Jpa4J8WZadj7uMYq3bBxggcdzUjFr1pXZ6oooPu93sox1BsbCJPb7D7m9F5VPQ1",
  "key21": "FK7xBjAdW7kz2nCx8xzwtLUn8EviPozz8ap6zT6R9mEnMGGnC2qMZnEktH7mGw7hzn9TyqZAdwtCxqS29sfkExZ",
  "key22": "s5Z86RGHrHX5sxf6SruyDECza5BFAK6fxBvGcUP7CRMFHzKnjXcYEQB8yHoRXsbABwHgP4LCn85nkfK15ywFJG9",
  "key23": "4itHYUeUkaTS3DvRML3fPYTor7wWKtVJLoDNF16kuyc99PP4Adaw8GZv8R6BBP533HTu5bJsEgE8q5HUCkEmcbq6",
  "key24": "28VURDa2J1bw55VJ9HnE3XAu7Ww2YLSkf8q2vqyqFJ8Nd2viAHLXyLjvSnM4g7YzviAjDMA7YoeG9xnydwawZTSQ",
  "key25": "4sTdhXAHe5WwWa7QLvmSLWRLH7awpn9QrzGzH67e8YnPkio2CiMQSZJgAFDWVUfvhehoqUd2A1sTucy4uyNUMWdH",
  "key26": "HHCzdJm6spL6z9V4VQQPEMjfYovBMWjy1FAmL1MkDqScAiwy1kuSxx6FphuQ8Ra5sW8BYNy4GeTNFhiaBif7GrS",
  "key27": "4ak52xkY6By1Ni84DLeQzMuV36cnvtA1eEkp4JKcHrjT2rKewF3W2ybButFyXVgxmj1dk7C9GfBhodCd7gn9WWLo",
  "key28": "5ZRdi8NnHnFggrS4Sd4NWrbNXLf1Q9cEtii8wQkeKbatdecm7AXkcBwLormJeJKBKbmHNq92qpCKd6FiTV5QpsE5",
  "key29": "5EY7bKcMgycQcbD8bNbASy39cW3DkcT4e68cp6f2nD5FqaJ7UqUrTwoy1MzqkKgFXZyVYMGq6ymorMxp46VTk8wn",
  "key30": "4qwa3CKW8xYtmbif3SKnvjKQk3GXEcLGTDu9KwAEW2Zmr2ux8EeHwxX13HCvuTK8DkSDvBayMK1QX2SHPhLyMPrr",
  "key31": "5mKnHpTCNtEp4rD88KupL3XspJQyN3aDmQepookcr28VNqh5rULvmFo88GbmXpmbBN731fgEWj7SzCGZFSykFf5J",
  "key32": "5mLUB6RbSewfkgFCa8V2qf9kwPPCHZfiu1uyGkcreKfVE1SoaSn26xKUC1aNydYVYwarL2Wq7Gxe7rsX3bieBabg",
  "key33": "3zMciq71WaryhRkCBexKA7xkbGgj9LJBebC2tokhN1xHFSLV4iH3mXzARsFjYLm87CC9rotd2c3BLMV9Jh9MLSoT",
  "key34": "29DHAEsgwqyk7s8eb4xtNdV15K1HTAt9dw8kMNvQA8BUDXjJsvf5WkAdsHWeQqzvxUdAYfTuiLuVnhSyPx2wU35s"
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
