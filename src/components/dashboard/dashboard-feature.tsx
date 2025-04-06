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
    "3zP2wqT2pFTBLxk3Qekn8zjduA1ko7wDH864x19s1i1JKswYpYUHS78f1erEL2EwQ6C2uR3g7F87yz9W8uLuEQt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tnAJPokqUqz1GUT4mUmQUV2UUgiFFwj3QbtX37YzWjtadJkGYBGv7otpnMteqR8FskgFujeDKPcHwxUxKPBtpAT",
  "key1": "492FUuj9saoSrVf4QMH7uK3Dv3YD5cUn6tGGDp1EdSMBiSuMejAqTg9vLEQGKnfLc63xzJ2Lcx23W8esTkcsAoPp",
  "key2": "66eiyib6wBxE9vx38KdnZkDg1JkVgNPtTF41Er3RpEL4a16AZ4WWLavfGfQYNzwUueXJfP7YTM7R7CwxbqiBvDhb",
  "key3": "576B9PqYhym92KUAgnUnp7E5UCSVxFFSw7qaSaxzNG9ETZB9AYufxJ6Go7tQvrKe3U8uc5sdzQniV6gMncq19SBB",
  "key4": "gyujZx1xAqE7HzADS1v2MGp2L1HtHDqc4YnpeVgCj7gg2oL1rhcFEKXX3QZs1ZWRkDZEHupaNd7SwNpYBLpAKyz",
  "key5": "4UhhVHndfQsFLyWGdpZNNXYgeSwJL59wJjTWZ1ra9b35at4h2HEhj9C6cyguyFfv7CNsetUUR7pzn22xWzhqPJ9U",
  "key6": "4Rgvq8BMP95SLZ98bgHZvdCiNo1e5Dmr9i2Qu2MrygL7hY8VZpLidCcfxgB6geDRznRMzQbmMei4Sv5mYwNVBZXi",
  "key7": "3NXLeC3ZBSHm6fVi5RgoB8rvmU92SpvP2n8HUsj5WHKHSFYUeyq7tSU4DmvFuWFzDQRUQ6itiyvE6Wy7LH3EWZGE",
  "key8": "3sx3xfJ9xVYKJifkaTe6dnHteWUXVRZwrChEYHWTcASKCxsX9pAVKa8RcsxckeJvRhCwDq44bFpNfXo4piakpo5n",
  "key9": "3tvJEtcMB6n8SFY6r5Gji7MVQXko6FM5vfsA7GDbrnYs8X1LCe7o18S26UBSXWb9PMWjmZ731kUSfvwDZ2GRqtuD",
  "key10": "4VXuPoF5VyoE5jLfTFr3kP72kxAPyMksHNMtZhtafPs3XfS5vGYrKUg9FsXrzKJPs5SteLXyAZPAe6g6HsQ1fYYq",
  "key11": "55wuGHSJCv2zXhaQKNS8AJp5yY7oq1CXqFMzvEF9mhsdovurUfsZ5RJn4qLVcPLVD8zJGPMda91dKZaGqpQZzLie",
  "key12": "Tkyf4vdJ9dcgRNNg9fmCYDrzfz7pcPvJc5g9JnTxWe5BQd6oTQhShL9edJ9YcMZvFHsxZRh6LE9r5j2VKiTVMum",
  "key13": "CftCuGprhj5uWAgsWafUXs1pNE248pujUQYaxvxrVV1ngwvai7orrBFgbQy5swrQfhCqNyAfXLgt17ANzv67B5M",
  "key14": "5YzGegb1YnNZsCTQV16gqwrc4dxbeD8K1HfPG2PED5vaE1H7FmsnDvXcKEhJ23hA5VrHibxkoU7GfYWp1mAMtjpa",
  "key15": "527QJW2q6FTWpRmtLEHoSz8eUKw8poDj7oNfyXzKRQHxgPFhmVFXig893rRhzZXcwqF1LSTdJVv9TChgzZc8wCTr",
  "key16": "5BDEo1hnrXs4mZAuTxNFKkjymv1cU4ZAWqEvK2f84HR6w6imQSmpMSWjAwjvYgejau44LJ7cXfPhezd2i1vhBRSK",
  "key17": "4CunzFgzaz9FHevLxUhdG9nMQKiGhSWLp6BUh7i4GTQUBkyERUGapWTfcHJ185XUopyuyr2kbm78qJZEmPRidjMR",
  "key18": "4iW4wbgWBqzQ6yLBAQ4K8sqwTt8KJKczaq7fXHuNgeeX2rpsVPfG6XtKn7XcWjTQJjg81gis4PXqkVM7i1S3KUJz",
  "key19": "66VMoDJmwpve8p2UEeXjcYe7uKCJhxRGqzow1XaBNG55J4Pq1e362QzPAavcwPJx6mnjeRgAJ4ouM2JmDn1UnkG2",
  "key20": "hpk16Www58HpFBkXhY8iM8xUDjM8aCAu4VKjqYhoqthdfwgHxQNmyk2ELn53SABCyB6YbHDFP7TRLfhrDdb4b98",
  "key21": "3RJaRX4Kx6TBWkd7YKuviF9xxceBFMneukxojbXC3JkLNCY8GKXZXCmwKEZpzqsHThHXm3p1EEHA45p2N4uNygLn",
  "key22": "4EQn6BZdtS4Lkum6R5sz8B6h8ZoQEFJoHvoahid7FZGEJxrGuHLd6DgCHuW2HUYrm8ahKbLeuEmwu8rk9gB5Hxp2",
  "key23": "5yBUjPvRAA1ajuznwzuqggXePuWHjrt5WhcqVarA7vVkqg4bKWsEvS7ckfBMK8xopF7ZyZSMuHTshjbidweUGWf4",
  "key24": "3wEqTc7R67qa23G4kXk7ZFraD1Tf5NUBhTWULDYfUBeE1mUnuovAZbsNUh5cUqiQpni4bhNBXUjWiNE8aFJtSrnf",
  "key25": "4QTG5mrddFEZJf1xVFvqgp4Xr1ZUb7Atxi6fSKzNjjqYQdVAKs37WEVeKgqJDGP5QgL8U9HnKhxyjQ7nL3orKRaM",
  "key26": "3r3P8duw8ungCE749FsDsj85u8swUCLu6MrxfTvGrhyN9VHK9uDVyvgx5mUKNsiucTg4E7nyuZTjk8XVKsTTzz3C",
  "key27": "4oifEZ1tUneBHcib1GKTwe21qvRZxkRbNRAXjmNuLCxQQqfp97eCda8iveWdr5WbXvUN8V4h3hQXb3pqj1WaxCVF",
  "key28": "SyLzMSMwFVf76QzPp2xsqq8fhSF1Pe689eLr8tFzpTqaBuzhRv2Xm1NRBbDUiXJ2GBi1oshCPQcDf4d2rWgVAEz",
  "key29": "suBkSkGeHbCrhMbai63XbY66EFBzR8EGNME5njJVY9WHsE5WP8LYG1ThxvKMhBtN7C2YFvt6Bf6XE4W9M8ZYZBL",
  "key30": "2H5t6vijqgRoVumPcP6gk3Bo9gYjAqtS8CPKQn8fvZ6Uz929yMB22WVV1XpUJZ4E6kGv2JhzoQefWVGH2YpMjhwT",
  "key31": "39fcSbQgDvYC8CWLsRc7gQPtsX4ZNLM6zXJ9iYMZtu2T4pLYjyK2YvQ2paE9hAzFeoxtrtD3FiseCaeZX8PthrEq",
  "key32": "5Lhxnkbs1238xtP9fFoKJjULnU7NFExWua98kRBqbd96ZRQuMJRWiDCPBUD1EzzDdoF7PXWD7N35cCFst9CZJCkn",
  "key33": "3WcwbybZBymxATugXDyyzQ2qAf92rYCQTgjG52XZJM6Q2apvAojZHEkw2pJApYLEQ9o943QUKUYf19myrjZtecCc",
  "key34": "5t3v4rqLFjfFt8sULA8Um4uLxpvFdCAhLEsDiMoKKVdDdE3iXBwijuANGdduU3nxWrBr2RqaDu6tx8neho1NX3o1",
  "key35": "3KgTJhmj9Sm4SLMqKvT4i81PXghaS4t7MoW7sX5iEuE6777p37qj2YS5CGXkAw3phN6DdXvXmpLweDPBWTzrVd1Q",
  "key36": "5VpvMhkhQXzGGSG2sZYUEmsAy4WqwBpnQivNhi7VZRYj1VD28cqoz5gxCW5xQ254JmYmSA9PSQmD23fep6DAoV8L",
  "key37": "2PuojByKY1nYndpzLR689Au24baWUTGZnPi6VSpuntuc1CJWn8T3gDy2FewmyePgK3ybSHUP75LfCs1gn2duy7MM",
  "key38": "2nbMCH2pBEvujcgnNccqnPmHcBx56ZXpFRRvhXrH7cm6sUS1B5XAm8AT2LzANErfdXR1Wd2jf1wgynqfrAowWiAa"
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
