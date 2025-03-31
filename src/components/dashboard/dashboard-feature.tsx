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
    "t5bZZyczuwtuuJ5saKeBcz4xPxbCC2rs3fKG6d3gZ8Qgim8D7DPFA3zdAs9hWxS26Qoc2iKwLpwq6i4XYdkEnXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NRhatBQWcmYek2B6Y6ouBcSNgY4tBhP1kXevvL9cLVqmjkEh9pJP8oMYe2nErTCDinbymLXTMgkg17Z6mN54yHf",
  "key1": "2ALtCiiD5ZL97ZebxESEguwBHx5ago5Mx6AXDELrkD1p2xm4V24BwZBkwJN6k4mNgFAwAHK4GwKPDKHBR9PEkf1J",
  "key2": "QU9eZpDg6bofGK66ZYJmrRwx54GvYu5ZtBAyu9P2zXJmMB1AAqHXs8vZdzPrc5sR2mAhdpU489DybHv9ZB6sBtT",
  "key3": "3DhXZQmU7gnXapMkh1X4spGgo3kNAXegoGHKiQ7UJr61DQ7aQa5qoPSPPFTrcAR4AMf2gbvEshiJhmtTn89bmdPc",
  "key4": "2ezGrtcbVfWR6UKNNvu4drdLiPYEARiFGW36ApxYu6My8jGUkaWRLS6AJ2YzWMAyeGkjmKsrFg86VsJWPYiRKqdp",
  "key5": "4SAdmA9pqLJ4oDaJC96qb489sRrojEnm4D8Z4KUx5Mtw4M386v3BeV6PywxYA64YfZoJen5vB13BhFzgkhRS4J1D",
  "key6": "5xd6JN7KyGzDBCj2DmtUHXRLjhgQTeBa1paKMmMSVPfzKvafX3Fhr3wRUqZzvMq4a9DLsSoww5A1Ctigm4QK1FQz",
  "key7": "3fpFuBDWzrRQhhnAF9ieTt17QV6Kq4cndDMvjtk2diadVpqnaPsZr1qYzkMAGp293UG1ktMDHbpLnYGEbtaR529i",
  "key8": "4Y7DKCuMTX7FwW7GawhmAckYhz2kAn1PqH11ANJ28k7zq4CSPV81HntkLkqaMHGSsHhntEQF5JLARJRbprxChAP1",
  "key9": "2Lpqxms4C5W9BPhY16ZLTnN1fJ7noXPTV8RxbRikxVQECct9Z3zHyiYULWTSL5zFt2WHT9NnizwH7PgsNh9LEqVd",
  "key10": "4gZ2bNVrR7xrJuSadwG8BFoRxmq1NZouGqVk7Lm1oRnyEgav4msx9RCfRzaiiTQugxE82dRotpnmMEU5P2LDwZW1",
  "key11": "4pNqxsGfs7MFAAL3r7ZctmrxTz4ooByFsKaLiQtS7TYJEWPmts43J1KVkszAhKbHFmnmjtFETmUZMmCqoDqMiSW",
  "key12": "5Eb5sT8mj5iLdPEDFwPby66fLMXZfjqR27E25ELuNAEw77umUTXLZfgkMoKsBkzgGPJsAJEP4FcqeShNLFiwrHue",
  "key13": "3jMA9JHUwjcayqshFg8nqLKWnwEqxy9SgJbHZC2jadNwnGAMwRajMLPTbc5rLYyJnxJFreWjK86pEJxUA1u7RxVF",
  "key14": "5K7LFvwRoVYBUTc42Q47cbMtAbn5MGYERwrSnR7JA8hLWEYfU3w6Qo7MZqWajBxqVHF3p5v6TSfFD8R3Qqk6HdtB",
  "key15": "661ttKGpRG5xKKqXkMkzKDbjAzioQAxS6782xepLjCPf8ktyBZyRRnsPBUgp2C6h2oH4rtcFtXbaaMarqNjxeNxc",
  "key16": "3suXKWBi4HHyWtLMrVfkWYxVYsjTFgb6qs67SzX45GLySbdEQigH1EEDRPxDyDkyAy6Mogwv6SQTakSGTCEm3La9",
  "key17": "5mbaRcYznwRQrFxyunLXod48acA5HfFn6zLkpSgxsUUJgvg4LWmx44t5gkd8fcjGW5yyyRaJo1VcbaZGPE6pC8ir",
  "key18": "4bveRU39HNHnK7wW8p7hMRr5FCUyv82czypqvHuhmgLKRHu1EqGsSbjNTH4hEdRXPVxJJWEgf8AxeHnULBkxse8d",
  "key19": "5aivh3QhPhLDsHDyDKHgSQcyBgdLjuPjjuk7ka3ZM6QgbHwd7X8hk8SRLS9KjuQBkqAo13Dc1hSZ1WMtkVBZoUmK",
  "key20": "M9zsEb3US5wKhB9GnSKgbDJWGhX7tmfGr2EuEz4R7c5hEGXcyc5iza3N3xwZ99mkhg6bmoZyotCZtC2kXrRne1G",
  "key21": "37to2Ezo1VJaFXj3YG4ZfMufb6g4E3yrcKa4n7y7o7Uzu6MoxRymEsjEV5L8hAepqrAWVEBnwnGmsSrqSfiR7zgw",
  "key22": "4U8p2bejmpBZKjYd6uvfTPZxDvJLBt5aDzey1kSgmVGM7yhMQgvh2ZHq8Nfh4HJ6HpQjMrbhySa5bvyDX7N68jT",
  "key23": "4NRcKhzAKzsGKKHUq3hsBRPKRn7dJJtVHse5GAqgVYAcGp89VchR5AxakFuLwBGqpnig3bYRA89hRigqvJQXu72a",
  "key24": "354TJjHqqmrvkrbh6JkD8fGYvdwMi8Ewh2HJMSHdobPNdUweiqpa9N7mnE2JP5HJKx354v7Hz4EzvvoDef12UjGb",
  "key25": "3fwDzY2n4e5BD4C3t6fU7EABDnzQmmWf5Wfwm7Q8Ya6j7dZ93QpUs4nsiWGCcBC1LiMpaqRfGAYdXf2s8heCMk2B",
  "key26": "P1rVjFAznmWaTiXXmcLS5euUL5NjqGGDZx2f3C6vFQwuQ2voJH6wXXa59fjYz1qhLzAh9SQpGJqk6FnbCXV5Mwu",
  "key27": "2iLMPxyjtnQLK2fUvExvp8gsuUQoRyrErCegPMcgFubCg2WPWnGakj5TwHPoYBD8h2dyoypS3s1brwM34taZtDxD"
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
