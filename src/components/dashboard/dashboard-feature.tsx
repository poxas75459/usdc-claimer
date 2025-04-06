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
    "5ozLGyVt5SnLeCDcLAemFuH3vFZWTGhs7KZ3NMQpAcDJwzz1irTeQyY5teRmnNYepcQahvrD3PnhkQeUjQ89M2Rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Wx7HZyfdT8Ktx2stgSN8YM3RCXtzfsJLiH3ifAknhwEKydB2dxpXYhVRvDaNdoEHchFaqaidS4tbK5j5BgkRQr",
  "key1": "5Lpymkx4ojSZHeureeti8EHN6jNLA2VYGcfFP8AGgiayJFt6NcaV7HR3NwM6JA8p9CPYg9HcQD8pZK7DouUC3NbR",
  "key2": "2FCAxPRx1EpfAkMQfw4mgCwrJVDurGppaVUXT1sFngv1GRfRRvx1UNeZ7g7ZZ7a1WfmzjJiQPtm8e3oASdXqW5iU",
  "key3": "YbpN6Box733tdPipQLKhwjowGe2QrjMb4DbdG4Hers2b6KfMchtHNULmuPLaH65w1zZpUxpR48mLMb4Cb9dL4ar",
  "key4": "uHy8YyXWPwfVCYYTpLKLUTimvFmXes8zmb9Ra8ixG5YrwDgyB8qwSyaCqN5XiwAdQ4kogJkQyfZncSnqafNkx7Z",
  "key5": "3g974g2GN3HVpU2L2oak925QbxHQk9BVX998Tgq2N5gojmimZoM4ffhe2vMQm6d5Trw7VvimQYDt5avF4cYDtq1Z",
  "key6": "4EhsdM5rc1YQhTuBKasgAXcmhjPNB7tFQKUkAoT7YfKBTtgrddjwnCCpFD4H1HWos7QyF4SHVGdt33ZeJteY3huY",
  "key7": "4sD7F6R4r3GvxQjGrNQhQKDmdXvu6yRKWceh3zFi2RezxWc1euM4mGuGgiBBWNQnowjjc3JSapGhuPoRa5sckook",
  "key8": "3JeqyA1juAFNBAnMPh4pZXbBfqJAfbKznu23vJvFq9KTi7i4mdBMNt2B5raNLhRw1c3BZnvi7icR6ybU7cNvKTeh",
  "key9": "2LyYhhH88fd4ZQMuf8dFLtEv3s6gvpvWewnzsHuG2ZRVDajh1C4aZ1BEew6ma6rSG76wHBo4c3y9YWsXCyXGBQbt",
  "key10": "2hwDtrxFX1mz3Sywa2qf5NhwvZ9pAfVy7UUKNt13cjPykWBhusHSXpimh818FiuzZ98Gxh9CYMuqUEC6585P767q",
  "key11": "Ni3yggVx45dPrXUHBQZvGnzs9RV4VpcXoVwrmE9orqfpHr2ZEpsrb7P1GDSxKE9Z7ztjQoTYQgB8BUtSyJrmVd8",
  "key12": "HCKQt33apphKhb1VmmEYUTvMTbsQigReUv8fxoVvAiMQx3vUxwdRWAFwq7f26GNmXjryUmEdySCL8VuP9jjnnzA",
  "key13": "5jccHmU7mgqbAvBYBgBZ2gWqWyiqCCNSYKwnXDQETzGDRsQiqh8Qkk2Aj1fZsVY5PsDBFfxT1dq4oKViLY172dWq",
  "key14": "26TG3Yc8iX1uxdvWobvkfYEPGod1QbRxf6Rtcc7KGSDKQChEY6QYuqjQYQixuTaMRff7e8rtfoiMXyzK7zQXfeon",
  "key15": "5G8jDuAwNKpjTBHd8oyDepRFioHonLuNNwrSSH4zAVtuwU5Bi23ooGS3uLDMxkktFGH3Hz2gnZnwNTfFqtvdz62A",
  "key16": "irUEsFouFcQCTctXmp7W6h42P8hxJXAoNkuJEGsiXd7ETErhVfKb6KZ8n2Chm6PQyHmT1k2tas4mZGVcvWDFXPj",
  "key17": "4kGu9EcJ2EswrQMT1QKqSY8tqozxkeD7NoBdSvcqggEpKagtdkHZbtCduNwHq6795xZAKELnB9MkMj4K7xYhgk7R",
  "key18": "5bUG6cHL5Xhym7JmpL1DLoEhsUThVhn9DMp8R6LvL9iugqcRFPu61aUEphJJcNVt7CB5Q9Z2omGoBUa8RyB3agSk",
  "key19": "3MLpR8AoTNhzcVB2mitvEzYPWUbYjGS2DoxYjZ9GnoNwqJCgE7tkzcmKXGbWmbjbieBBJwwrYfYvr1HR8nLwnKzD",
  "key20": "3KfM4D6WTUPr2uLjFrkSbydH7fKk3QhME5WRf6D4iBhGZxp4xsaPhXBhC6SHKJHNhdfcjZhUZrDGCA9uCMxbeiDE",
  "key21": "3tJsa7pvWp2v7bfP8dD18zLhWRKncGN6byupQsC6AdSuVhwcrFmMuRbjwVfhGREWiKqr1f3XJEFaHJt5eQdagT94",
  "key22": "4V5ZJFNxykCUcTtHEVoyYWsoyGHoZSYWucutfER6RddZ7ivjxHNT5uKjctxEhGMY7D4F2VWe8ZyHEHk8LxTmWXRr",
  "key23": "3repYGyewJaLFpAnrodSomUwHLh2GWKFK7N1BQELdHCk63ktuzUM5Kxx1z3tSC9LJAAtBg517b5EDbqbwXGUdEhp",
  "key24": "2AdXjS2PRyf7cXqNrC5bUZPB9VGAitZn29YKsXPxmLRYPUz8C2DXUw2oebaxtbQQvqqxoEBekQVzrwSShSpX1oSi",
  "key25": "3UDFSjsfbxZcgBVXy5KqWSAkJ8oSDDKATL9daKKt9dPm83TDjXZugNGojB54GVLDzSScjFmeAkFXcZY2tweH7ZbS",
  "key26": "48mK2cnBCHiJL4gDjovcuzS2y9xTytHnatxdHL9BGi7zYtUAYGvxQgTAS2gv29R6bVT1mzSBZ8yMZkZqLMMHbZQB",
  "key27": "3Z15CE5ZEjbj1VYmyXf5VUEgsiM6YrVEVpLzgdcDrkT6xU52MjRny51DhzQjsaCSBHuAbiUSpL2rLEsgpaGStqz6"
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
