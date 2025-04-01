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
    "26C69rSmKYpnDSPv41JukDHqzpG8GBrCJo1FpE6zDQcqfVXnBe2gBb4SyRPhreUafdyStzz58RLqQ9bsjzhjwsaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zKt9Rr41uVW7hjNTfjbXJag75189eyU4wnX8xbwLp8e5XvX9i3j4poND7XEjpvAEoQEGRJmybtsbj9tW7JURmVJ",
  "key1": "29D6MbVCcphMT7we2tX3v9Zro9smcKre1Svz9seXNMaSG9qt9SWELCbz2G31B9HRs6zCrs8xWY7T4zK4dWmRYdLF",
  "key2": "4P5h7CC4DnpFyM887KvktK57vhjhVHDonNgCFHsCavgpjA9eFrfr6JVDJMKaQ4pRspeSyxuHCU3ghG7EDtjd8QEW",
  "key3": "5LuEHqHnBKDxrs9a359ieU51Dg2mHF5FnSidZkBweiT4zPnx2XuWeYRxh4orzxCkGHxdfdapF1ZYM2RSU34WTVuQ",
  "key4": "3Qffv5eB2erkCH75MV2NDgTByjp4LqTb54k4DQhphbYiQWAom9oB3Ra1qBFaAvV7PKXRYuCYaQPYGj9LAkYG6vAx",
  "key5": "5P2yufP3khLcM5UUC2pPVLFhP7Ty2zGGr2x3b6PSBwXgCyK7FJJ9E4CUs1B2wjYDFYnv9qtiCtvXZiURYnRYvLVj",
  "key6": "L58hky4PpjxLHLMLwxaTBhuzpJY14rUyB8SbVXeXpmcALBktegbT1KgQhoz6BjE1VU6fcadgreLkQSMH6tWob8r",
  "key7": "5swnEDz2Kny45DeU6EYxqU6FiWcxvFYMea5iKoRyzEc6T3ntsdotRQMZv1QE5prdpQytBMAaPA9zYdS1zUZbZ9E1",
  "key8": "bLgAeuCn4kX9dwsX6j5Z5sSYbbbLNASGHU67pzXuTDMzuhVFHe2DYXCRDcPXaHvKhQEBPTmrEVpLuZfyfjvmVaZ",
  "key9": "3kWVzwxbvDSM6SD2uCiNBmfGy3YsbszkmjLjKxvW5yLZe8Nasb6dkGvsJMCnEMbUZ5g9bpHswJNqhFWBYvvuZ1H8",
  "key10": "vyfhNuHJSobHiTkkVKvnu65tEeLhisSNFSjqfjCLrp86EQdivQArXoydgxutCLwjkN2xtgBqG5J7GznYbXpWG3t",
  "key11": "37nSiUzb3Chh1Rx4ikj7T9nq6z3ES31k4wp1oRCZHJXN4h3nMcNm6u78PCRYACPkeBWhdnZzone2JrJJKCitm3sA",
  "key12": "47S2F8ovyzigp1wACEp93gSbW6g8cRvPbnuhFeMRVzRHSuaDJtWJwzBkSgVk3JcaUzGeHD8vi9Vv2CVpkjs9cunf",
  "key13": "t7dgVccCK4XozoDH8gpXc9pFmwD1kf7eYkzv8XnWRrbASgzGBppCf5Dk5Q5yzC5Q9D4HiZZssAQeRnqUC2J7iXe",
  "key14": "2G9NvWjE9dumYTbA3fQE4uTGcjYsVrmc5XiFh5sgn5RD9KasipLCJnZCLN7ygWn7AsgnyVSzvmZdoXjGv1Qu3ttT",
  "key15": "435ZPyFxoCeGogCxFrHKSfGN9Ry9rL8dyTnm8pP3DVQadav4ASepKJYX2ZhE7AGRLUnouQnSHDPSDtrnYHot2FuP",
  "key16": "4dfmU1f3mhF6dbnFey83QaEQah3SvNT8hSiUZ5VP9H1uZLMG2f1aMHpPVqndN9CErNXSSXARWQTr7B3DKmMwBh7U",
  "key17": "5DZQToezWCQTgSpXLnGbcHckAviuXv8ZJNYCzm8HQxyiXdyPo83zXDyLsDpUgvBw5oenYMhVmMJgDnJVy3YUFCED",
  "key18": "PqY3oVHN9FU3dJ6zTMh4nJR4vjqTYgY2i8VUQ9FLC5oGMdKhbwhcEyeskbagSFCBavLGbWkRcgkHXyxbFVD1EVg",
  "key19": "4543AWZBtqzRKUwkSn5Nhn29LA9WWq292K4E82hC3ZLEkMzvn918oCbgBNRwzaE18VCytKbZgwdbbiD2iX3Ct9PK",
  "key20": "2FMdBbjPYjXvAYE9PQw6ZRYQBd8jsNU9wStKDycfQz2apjcXppoPUsA2Wh982i1Mv6Pa8jD9RYrVEiYe7dGnkqJy",
  "key21": "6dgQpsW9uZrQjXryKcLqoWw4N5gp4jgTJ2K9hiPEkBnU2yzYhugKBgSciibcGNifWvBLVTHP81JJ1mSxU1kX1R6",
  "key22": "3dJMFvueX8VRywhAptmCHiUKgWHJJ3LwY5MpAmBcqb9ECB4JWKjdUeZeNmHkbbLqEENprfarndeCMW1giSXx8u1J",
  "key23": "3K399itAz8JaXU4cv2TtQCXWLsmvjtdB2DGBB5ZqzUob97svV8Anq6Fjtp8S6R4V5ZfCAneEDrG9MFx2dc5W4cS6",
  "key24": "vguvK8oiiDTA5Mo7MeCjexiFMV32Vkq8c6UaM69tu1bgn4we4LZ1dFtwH745XdCphhYh7PtPPUNk91vdqbPCY28",
  "key25": "24cu6pZT4RpwqXBaXx9tufkC71VGkE3K6RKJXoAVhVrkQfNNTn19up3BvHzXb1zzEnebHFXaYCg62GY9A7ypnTvr",
  "key26": "5Rycn5XDyukjMnsNpaVftA6X2Agh9YPCDDuDB6fbZtRT4zd8zp4NU52ufWtUqu6ZCzsGwA2sXi4xhbCMF1Vj52xx",
  "key27": "3w7WtcoC9ATuvfeXFEDj996Zyp8umWmZDNwvKgtb4BBxNEwYQBYLzESBaNvmtV1RgVPXKHPCiWvjsAmaPyWJwiD2",
  "key28": "CUay16Ygm7dNzLkk2biLrjwdioqEib7hxcGCNPygX71u16iBpF1vpWif92RdpxLeX3Uie1GMgsqkaqcnZSAcK7u",
  "key29": "LBMNBcPXeTr4kfPHG4hoQfBfTnxjaxff6wq8UD6MQv3YVivze3NQhde2TUjT1nm9TG1A4kQP2NkSWoFbcoHHDFr",
  "key30": "4Aatbb8P6Jk4AGDwbiop2DNBT59PnuchBAt1dSMyySuzKu4QwWg8BDbifqfVaaX98SBFkub9JZE7KeRdXhjJKs7Q",
  "key31": "3TkLeG5gfb7G6DsRQHJ8JAZsoFeYvp8eKyNkGCHrEiaA72YePL73FHj2YHsf1FPD2NUCBApmnN8P6w9Z56CAchmY",
  "key32": "anFryzbiTvnZvg8d1YC6nrXAKBPaWnsRkucrbWDHrXgo3RKXEKhxcexDM1GYyhzAMj1oaFUmwUusCETPKTCUXfj",
  "key33": "3Ge8iVm3pyqRKv4DAbUbru4umZW8bVNaHDPTszoP5SPYG2dSU8v31sXUcHhVTu9nPoqg6EsmjkNUv7hrFQZ2dQhC",
  "key34": "3NWV1Hij9dXacrgcSMiMSxNJJp7kMomRNzsMjEDToqLHZEF9zp3xJHBZEBD44mysrbkFnMgyQARzDw5Qvw3pKdyc"
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
