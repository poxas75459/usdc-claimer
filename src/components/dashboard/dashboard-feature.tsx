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
    "42bawq2C2PXuLUkjPDAcAuKiis9DeWxEysKDjg6Unb2euKKanAWBVBUhxydQETpuLJBDZJqaamCXEYNfeXSGW7QK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E7BMvL8U3syG4yRPeHE5GWBF15Fvf4baWAmdccmro6yYWtvgz7KAAPHbkuX43o4TNdNhbVHRGn9cNLRsedj3a8U",
  "key1": "5QRR1PiWjvDrdSo8WcH8bQuQKCk1avpMKWVLnxEdzgZ4KH96MP9aGFVXabmRiZ8g2M2j213SakzugoowdsazUqPQ",
  "key2": "58NrD5K7QzD2RNeRwmdtymqSMHzoRitUYSGopftM5LCkMhGTJdPQKWDTHxzgsohEw4oYAY5AuW8XNTmMyZJS7t3t",
  "key3": "4zRS86NPDbYkqC3PbCKJS5dy5q8PpwFQiThGvHEPoJPUSVjghcj3npFVZxGzKhKNJrA4Si4QCgTmj58Fj3kVzt2B",
  "key4": "3M3wJZEBvBAh2BZnakHU7pVmBVMPDec1MwzKZcBC4vcZXQ8FQeX2PNCfQT58EYxjVD1i44UrHp72oUuvxbUMHTqa",
  "key5": "2JMCqQoC4eENb9hbPUYdvtL6guKvfAk14vKjoH9ccdBZLGDE6XBf6EF4BCttzEhwvB2Qzc6ZhTdDXN1kZzoEufLV",
  "key6": "5F9fC3YiSc64YUvJi3ffdE5Jkcs7Nqv3x4hAi9znoYakJqQREhfAcZeCgwPMpxn1Z82u3x68A2aVr1MyVUkzgkCz",
  "key7": "2HT5bq78sxpU9sNkFVHxqH19Jp1TJ5C5fRts2g3HJbAcqZLm9iivCZ7FnHUgdpnTPXUfRvPkjr3ZpwDLnwKcE7dN",
  "key8": "4ubADsK3QiWd9bRqUQ8fcjZxooaun4obN9P6AmGVAP3y1inZmwoqYKDprWbkUg519khcCY7jkRDavNGVtkoXVaAM",
  "key9": "48Hx1LPaZpsowvWZrrkLbC4YDCLb5a3wCN9vZAJfCVC9SR5QwAHFkd6ig2Bsp2mah2BZH8SgWCZkcHcXZxkoLzyZ",
  "key10": "Mxm6SE4x3zuC35wWAF5KKuKqbbQC6qPKxgyN6aUhvVJpUznuqZyAQkc8HUZmdEMChQ5tcnZQQSDiYg5ZpCxDrv9",
  "key11": "2C179h47MwR2Sff89ydABajPARh24adgiY7iZpFMW8WLFbMKCo9jjuW4QZwbWGoPMJeioXiZHeEuV8k9mVYnnnMH",
  "key12": "R9VkzVf2mtaSmiJ9LV2Ls3ZweRKS9zQp2k7VTvx9EHqi2bVrkK55APKL2rmKFDE9G921emmvxDxNVQtr9AMbyFJ",
  "key13": "BS2mMNe9Fk7zvTwFwZeWaXV3orhr2Z2UETGHoTMJa4bERaTRt5ws5mFSH9sEFuTxD1ww9UEqWa67CqdM7GD8Exy",
  "key14": "ssSuMou4Rc1RExdbpMGX9Riir6PpDvfNygmMwvkAWuRWd6DBS6ua3dedD9yoQyLsdWDzEYzdMMhrYYwfAT4n1Fo",
  "key15": "BZVc4NfY6CeFRQ3iVzBDa4GhypxgJGdW8ZrqLkG5bLceyThcU3ptXz7NzT858whSSVbmmwJ9xW7eV6PrFCV6xDc",
  "key16": "429YT1UuS4GbiKgiV11A4Cb7HM1ro8S7CvTMjEGmprMRdNp8JK9k9iCZo5a188RwNEraNpn7vMsztCp3DMcBTJm1",
  "key17": "7cWVYjxTRw4X3K9yBfgwgt7hKNZZoQzT59Bi43ZULN7s7wgtTjkPvCgznWtQVfUZdsKwrc8NsorkAaC7pAhetUZ",
  "key18": "3wfe82FfKaK2BgUTmqALyjckFvyttJFEsLCA3Dzs5Q9xpkMm8qTLxnhFUYZ8UQTYQQN8EZZgBqw4XzGMMvpbCxAH",
  "key19": "48N3RL1hTQHkHuu6yAqhD14WqGEDsLVmXrKEuEY7cmnFzQVyXJrZRaBhNAhYqMtbyb6vdsiwKiiGMrk8WNKgovjC",
  "key20": "56rf8RncS7gqF3xA5KgpmRhEjJZgqHjwcPD8vqpaQmwuS6TqMtWv6trCn6vJKUm3fFCjUVgoAEAUN4tsAUvHckpU",
  "key21": "498x3xRBLGxLDYwdQjrHfvLTQgtX8AZDCnCw3qWHy4pfP9nydGMrA2kamBmMVVhYsgusLUpUKMYHkVcFz3n5CSmZ",
  "key22": "4ZhRn5aLxvtgkQUGWnBUZLLDUuZYm3yN1yEVFAbtr2RkvuAj6BTsyxrouTRv7afJBCJoQkwoiUEyRXMBV3DefNLQ",
  "key23": "4CJ3Vus7MFqEgf8aQ4LDFGJG1Ajxxo79EXiigFe7NTj5V9t5zS7WYcHBxsXvghY9ygcCR4kL7pY4TgGDtJEBtEMh",
  "key24": "5LeYBDrrf6BsMVEgwECzKYBayHWUFVfWDunp1upaCSgsrFbtJdS2Kr37EURbHwHmCQn4LkKvcPSFpMSCHyCfvJA6",
  "key25": "iiw5FB3mFyu7WJM5HBik9o1fxwT4cZuzB2QSngiUF7VEqk5iR5vfaDTVP8bVmsBf9vJrx56gjYfb1e1yMsBEWm6",
  "key26": "49hwCaLzEKXCchew6KwVQde42ncTAJjki2Cxx9CWRSTZJCLVMyYbxZppTa8pVJPErbQxx1CxFP9z3TsCXt6spWyZ",
  "key27": "4AXX6Md3XvYTcZRYwAkUJwG9hS2SLejgQnm7uRNFU2TNtyKFbeRzPSbQrs6hXBieLj7yqyJkhqSduW7CF1XYqg6X",
  "key28": "5oMQF17JoKVpfQX6TTzspDgyVSub6nuRvnJ46VbdcL6q3cEmFNrgiVQxz4o7oW3aN9whvDMpdFM8YNWcSPGnBGmu",
  "key29": "64vLs3J3U4hr94B1Kf7CTZuU4r7wZpwDD2s9mbKHnofGboh2tdwmiYPu44fNEuGdS75sJAZ5FPFxgMKwwAJEg1hG",
  "key30": "3H63X1vGZkppG1sVB3YL1KjxngoJh6jKnzJ2D897okR99gnbFWzQm3Q76RZ3qbTxmpRjpxSJDfPNbpadr7oACgXf",
  "key31": "pC5Jb8jVwF8y7aj68c9TqZwXuAdfbwaFwMpXmvqC8WzGMHJGMXHQQPdVcXgbkjDY5Nq9noin9vJbPtYT1XwjTKc",
  "key32": "669rJ28UtATQ4rYh5QkpZt7bRBy9gh9wGW98tVqB6ZDMaUCBCBZ49N2hSwiJ9TN1A6yTvTFPjwSNzwwvGaHUsgF7",
  "key33": "2dWacJjqkLqUZR9SJ5qV1aQ2kzRp79PCSNiEgNzPSaA5mM7tgyfNmFgYXM7sUMFtDq3kCQnjmFyabBEctrpkvdKL",
  "key34": "49Dc2Bw8fkKeEgm2ACrsg28xP7iRYsjkmifjDoMuWunRJCdJnKNHtHVYzBgNVBZZHyphp6CoMjpu9fBkHfbXDmSz",
  "key35": "47Qr9fytiLPn3zf8h45hJTu2qEjxXJHgkstLf1ZpbUD8RWnwpxwG4ajdaN7WT15k3noNsMS1megAZMpxgS5UcsyB",
  "key36": "29DZPbdY1zqDeLr2AbvSMbiNfcHLmRRnpeU7JccMQCWpJhd5VF6xp7DE6giNvc3tBHzc71paWSMLBUunS3n4VQ2P",
  "key37": "1rE6EtU7fAViLXTXXJPM4xLayA51uxJKggjFV5U8DgxLTCu2EJX6oikLnzpJgkgzxjxJgvbPL4n31jqpiNWN1s1",
  "key38": "5YPVCoX6M9hQBFWqSMYhaPq5utY5WAX5sSXZYnotGLe2CBiSvSyGjS6486qcLJgM3QXu1gSZxAoA2djQy2egVCoz",
  "key39": "XwGbhVpgeuoah6bH2dJ3fNtSGcA8upxw71c1ADqtgG1rXqjRQFMeUbCzSnoG7SZY2QWEMKXzZvExwoa2MQuvTDX",
  "key40": "5Uev4mb2TigN3Yqx8iCVNuPzekKXQuYT2v1SNxcSb9ZHJVn3VKLS8fu7UMrryHFj77hYamiEv7jiLHaYU2vKnNt9",
  "key41": "5Y7FbnSckW6mcfSrrbhYKenFndixQmvx1SaxteJ21LpftwsEnNSMYQvbnQrSdBkMQNhZSFXSsqdsTCuorp2y8UEY",
  "key42": "4vfFXTFECHTiLwyGhCLgT6ovMCkjPZN4penJHGfWJjtozV2PsYbc8c21Ah6zAdyVqLmKPfFT7SMiHHg8q1dZdvyA",
  "key43": "3BfRMYq4DXSBgq4ukDFQjdtKyJk2ovxYRsbKMeJhRRAB4r7LrZetknkacAbANHk5TXY1Q3qGVAfnEU995yyjuxS1",
  "key44": "5i2Ec645uFJWH23w66xZ1YZUJBoUag3phh4wQgXRnhfQ4jssvdFfB2fuSodrBs3qNVNvKgY2dkfYYZimNDZEo5w6",
  "key45": "NXMJR45jaN2RQNDYPRsmMDLPegaACAGCVcHFs9qZpJvoDNgbMkNk8sYVsdJdVoGZzLTbQXiWMuUmq5jRyTomTTR"
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
