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
    "4mYtBxrnZdFPJPjrqAMphPYttZwfKHE9BxXGJ7eeZPBH6KvqCdcAPtKfGb7jZuovANZZ3GVxtDG6KzC4y17DXFBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HLZ3is35J9Uh28F7KiNJv4Ye8kgEL6MMEPkjRFf8nb7wSbapLe5Eqvc1uaNcNKXgxxKy2Lkksrj5ux2RKzQJCBb",
  "key1": "L44tUM52h6rkSSuxjuqzBffuyYNDuCvTNk8srjVnZuveeK2GCd3tPpKdqRAaKLqicYd8oWVDuFYRnHe21wxpnkT",
  "key2": "5Pq8PSB9CUiEiY1pgK3Twa1Rcy8NZJkE1Ndi7uV9NziG8jDf2p7BTbqSGdVYaW26jJM37KKsAgbsquxZeXggjp2t",
  "key3": "4bZZrkKAAe5JdL49gwC457JMEPaubv6Joxv8D2SY18TNF2nbCRwuxomTXzNmA76fE7b232iA9iE3ADryiZSHHq2q",
  "key4": "5FVNJ5giFqcV13GmFHexF3yQmGZ2bYD9oQm3hvAFqEMjBUyeTP7kGxXUaTCbsmEuFDSa4PZgJuSE2BVjdFSsAgVA",
  "key5": "3HLhssZFdFX3xqYaYNWzS9KAzXUwhduWeqkGXA8erD4paMroK9dsPYwerYNWQLbGBmnEakq7Qmcx3H78LRNnYacp",
  "key6": "2jzyBhKjRTyJu7oG6jpQQN9khdtuTU2B1zRaQ2DhQXRtZB6Fc4rPhaRnHt1tSHjfyUh5wVn8iKNgDU3sJwSwB4ni",
  "key7": "2GeNMikM3az23YHFKtyhzSoBKqULa3LZ4Xyf35n2729XZmeNLetmB1PY2wPTPY5Y9r18XDFSjUTuGQzbb4bUe5BD",
  "key8": "2JvMUSvomdBJMCDYS4YhPzDxJEQFoddwj8ANGuhhUpa4a3LYdU8ZcHujgZVzKzfpvgDsod51ZQ7ay7EtJ6atLgL7",
  "key9": "64Gmat3GTbxqfBouq94JNsNNL1XeVkk4Q9nPDGKEcjpFucz1y3qCDGfXniuWqkKxUB4KyGcD4EP6G3TmUdwxCKbD",
  "key10": "og1UPA8x4GgpPzNg6JuMkLc5weyFqc9dfv13Kcof3UL5QG25bupLDVSjUkS3BAuS7fCKAsxWwTKAZPQ1f7GVQXG",
  "key11": "2BYwNuph2JQBy7EJzyw8JCmdcKHoQ7SVmR5au8pKp46gSSA2ypPX8SV8iXcgRpEPhN9PW9dw7gwY1U787URiNLf2",
  "key12": "3LePBW1nQep9P2dxYpquQ2uRE2CGGNZXDxJiyepnHyQkWMVsvsPa4UWC3yyqFDViomqf6FJamT73p5FsSFBjrscU",
  "key13": "49dZZgLPkiN4AZpoxFFPfMJbPVfMRdX45Rc5zBTDXjo8N1Q84tLnFAavJ4EjSMNP8zGMnv4hniqc7UJcTzCooxWd",
  "key14": "SAAzacv84g7pDmDHD7HKAQGnsBoze73d9ATezACAjbJ5xk2pVTqMJPPetFsn9koRofJmGBeiaSkUq9mR9twQeWx",
  "key15": "aEhsvWk5qnd762mhr95cp7F2k85jJjSydKE6vdr2yu2HejZRQ69jzRzPaBpcnjVih9QHKZtiusbpA8w7NU4rKTf",
  "key16": "62zHjTyQ8MtzJ1zHUw1zunjeboCuFQmjgET5vpnzJhn7qc33mE6kx4dkhgYtFgchg4o6QWpGP71UZw2yuH7zHYtq",
  "key17": "3nPudntTt8h4ZoF8tTw4agmFF98cfFC2b4SecAkGNKFVbptkZm7FPt5u8pxKDTH52aceBFgKiTr7By4KtEFgDofS",
  "key18": "21px4WAgToq8Gyx25MSZA3zoGWbyVpcy7D1vAtCp4q5Rh34Qt2Kfyg1pLRJTvt7UWUqYRftyi1GRmhw7baiXiUDA",
  "key19": "4EYyWWSRVkX1hmG17Togbs8P4BR8obbz9RpufXV2jmYcs3dRdAPfiTQfyuMcgEodg3oPaQXsLDvNn9LFc1zDDvdk",
  "key20": "2RZmMUKzJ8eN5NSrB29zEY2ZpE7DpKG7jFWUAA4Akrx7pUPND5SsCR1hKb1bB2ArqpjaVfPzEfVM2ZDeNe5d8mZq",
  "key21": "3yJDHokfA9hozzyvybJpL4QzUsGJfrQVEnapSeFSS4hBFQnRcFmtCyYN7wRaCLw1GyoPfSJY8MpXyRNs1LiEg5RM",
  "key22": "k2gkbqFEUSKmFZXYqEdRPqTKoZLbqo8B7PkE3hmZNH7p753rE8YzdC32Q5QKpDuUpBykU8DM5yoABr5oX7BAkQ9",
  "key23": "3i62NycncrnGrxaJYZC3f2Tkji5B1X1WHgRcuJgAXTwwu421DZuwS3qsW6Zc6Sy6VwUYk5xF4hdVUVNjzhw6kzwR",
  "key24": "3GNpavejPajBCFYviVQyGtd6LdW1RKzsaCDc6q7WqbHNb2xkmw2KViYF7PW8u9sM1Ar2MVZySrJaQuAw13HfVtuu",
  "key25": "J6ytasvhTb11txSZAfG99RtErPjTNDQAfggt8BMtErJuoPp1sxriCDXvdayuHNbRNt3zAmFYu1GNsm2SSXuJx4A",
  "key26": "2m8bCbocpkM3jHZQ6vnLdmRJKxk9huXuNsUXaygSt2k75FZh3n9MPQZG5WcB8QKq8WFYniVjDswCsegLFdAPhwZ8",
  "key27": "4Tvg5RJqtuJRFFg4M21ywLb5X9hE3WrWJfbz84sXif1XdpzEksDjMXDVLN6kFukbgQ3tX1yfU3SJWkGf1oib42VZ",
  "key28": "4PfjuLYZc58AhDmmPTHZtg7Thjqn3aMrC16tRAvSU973Yin7W4Fp9LQV4SMYahVGpwdbWECaEPmvNV6AQQ4JkBVQ",
  "key29": "FJSffTBzrCVZEcEsdtn9GTMpedujBfr9jQJvjwi6fVQN6QNpCFjQKYj6mmewiVoHT6ZRwu52rSSrkn5vwT5U188",
  "key30": "3j7myqvrTmvpD6MkAyA5YKjh4xQAttUYak8LEFWf884FbNh4v1xZkFrZFkWMWLPdJetKmWBpXRC6VL9sZPwkHV8c",
  "key31": "2LxHnD5newpAA7Fm1KCdqwtNF7hefazvhEzKiV8gHMdB6dLstSMhU8N4beMNhqUnGEPoDYSFpWNQ3GaqCVK2nv63",
  "key32": "5nLwkBxLcqhhhVHcLvGZXfJijsD8byPBvC2qSjaVSmBgdsVDGfgbD1t8xYYNM7ceQxpXxmxVtSJhBE3T7QDdoCDM",
  "key33": "5VC6mJ2LPatJ86MDmfM9AnKUjhmbDNdDf1rP6e4voxboGeYbRTsdex5hKDL6CAdn6XzfXGi8DXyid3VFheJSM3BX",
  "key34": "L8Nywdxk5iwZocuuXLpVy4RZsXJYwoeGBG7uwgEWXAJNbWjZ21Gz4JzJhdFtec28rZYmQD6KHQ9rxJcQTxS1Ljh",
  "key35": "3DyUEottxCpMY36PM6bev9mrJb8CACBHKbw3aJvq9Td3HX2xCzrNqhTCoxW4hAtYoPAymhkcGVnVE4B5cCxsBuQd",
  "key36": "25S9JingiLu3M5tkcMbH1XNZEHUubAtNnBevVmMSBZZytFDdMDAuwX2DU4KJNWKZxCJB8WMxiQr7rYoXuYAs6yky",
  "key37": "3pLhJreANodTKiihCD5Ki5yewv1wby2m3nho9mByCzwf3eZoKxhMgYJ1QpNqMBJUzFZu1BiHhchaCHwmCidjQH3v",
  "key38": "5uNGHdEgwoKWiEAk2GFLejiFCrYyY5uq6sckAHN4x7LJayQhhLxrvmoKqUwz9qHBcVxFXYEWYNc5EUTmjL1Y1Rrm",
  "key39": "4gdbspB2LdCnX58rxoxvYAbx8F9ETc76AgxEoLSKXGqa2BxaR1FsBX1dL2yTUaQAwqLE2k2Q5seCcaL5nwgfSuQX",
  "key40": "CuNvVJZ4yANsWUNP9xUXRo4Yd8xhRHWiAWjBHMWjgWiy662NdayVCSZn1QCaKaBWB3HuZb7p4kKGdwtYbsSqnSv",
  "key41": "3MbJow2atrbpBGKZQwq4mWYFq7Hz61C2aYvi9jNnZMjPedF8nLxgqj7A9xEEGXgrcEzDndAizxpHAd74J9hd8UqR",
  "key42": "57Cr1SkhULP8LKP2bkDyymY5mfkk7jfLqarUUupbdBsiQtLYzscwKT8rjer28SG1HNQBcS7hJBCXx2RvTgtFC1v7",
  "key43": "5jNmoLrYgfE5iQ3gMWdofde3b6CstYHayKtuyc3GKGU5nhcvsRqgrpheXLuewYuvgZaos82jTjVdkXnJbM8d3eRC",
  "key44": "3viiPYqrTkz6KMR2UUbR7nQsCWdieeRKKCnon3bndCVzvQayNr7hdztvXdF9DhdqbPDHYbfx63EwjoKBfZD56XCT",
  "key45": "54TesRpBVz6DJPBsGJz284HgdatNjmUNYaA3qfnG18HKB5ztrBChiehy4hmqrJbr6Zs65brvttKe9edXsZ9mSetD"
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
