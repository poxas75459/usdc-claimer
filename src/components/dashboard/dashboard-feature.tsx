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
    "4B6N5N1cvn1RSn3FBjhJE6uaRZ5RSvbEsRpws5uZob83vR6tqPizRMCJabxTan6K5Km2ZYSbjRJbEXwEgoTPXqw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hem1N6ewh2BUJbZvPtvQfBbCUAMYGnUmQKJDg16UE5HxrTrSNDWoRMsDym8WQTV6fXLgNLptQScLub4rDeJV49Y",
  "key1": "3XpZtSGu5FF5NSPFYhg28jJm6fJNLL4DnZmPS1f2TRcZjcn95uWfVadohhwhpSMmtw2GzAVY12mu1rTHNKfLxfWF",
  "key2": "5eayEwjH2NYfTHyhDYycHrLeM5eM7zdtqSuidg4NHe82y9ngHJRVgwgeLp8PuPBrDPYSBjFUDitEhZu9iHFDq5yr",
  "key3": "31qWjnJaMLY9ZErxUViotrAxbJsjku4ewYoUEavbBDw8oVUJ7w8piUqquDPQDMN53PtEreTmBSNcbp4kV9AqV683",
  "key4": "3z9BEMvtaPYnNv9B4NAXaHQE7SBWEmJsGCHpy4cuw5xYcYMbjH5Mt9soUiktmLLuYHtgLEtzxCG15cnmZYvPrW9n",
  "key5": "2mVYuhRmkFDPxEQdfb4tWHboxjeS8TM6J3PpfCpwrGy1HyeG3pWBnHs4E8yXaaoAzjJChtYi441FdAJGce3a4iN1",
  "key6": "3ec4r33crZL9rhSYer1uXBGFA1pV34ZL48HC2VPW1kzBedyHB6vVhB7umWMoDTGgqTiKU2Cg9ErVzaXe8g2moRCg",
  "key7": "4TXfxbYnGqScM8MhE9cT6zWwqYvskYcR3DV7ZioPdsJPBCyK7DP3WBuwPRFPan3YTnxwZmotUyKYq6jrKJ71otAd",
  "key8": "fH9jPseTGLizFTUsJza67NDts57Sw5Trq29wuK92WFYq1rZ2HySoumHYrb4Gqc2VCAW65udJreDdL4XC5JWKVax",
  "key9": "3mWxCgcMf6Phrb54gDjArDZb36mM8XUmeVKe4qhrpVopR2beP3exyFitPV5dhaMKcRKBjSfQ3geqDzjacFxWUki5",
  "key10": "3t1CJo9Phddo2XWL7efEz4LAC2YPQh1L5Hwdv81PusPjfY31J1Qhog8FwYLrAzF5visJKRgMxdd9oMxk2CifwNor",
  "key11": "kK9UPWiXt1UjYGZazjbM5PNfvmUtJeR6xnv8mkGbSBfd7asDTHFpMB6NrkS1FVkmWr97wsyfSWsnSV8HyZnX9rF",
  "key12": "5n4g79L1ypgFRYvSrcEYUhnqUMtNSGUMZf9GihNyY2QoH2KmhjuBQJwrBshYB4e5KDbQMFsh1WUivJ16Q1Q8td3x",
  "key13": "x8o1Rh2kpunHa293zWVPa7KDLb2RsHa5XkRPPnpSKNHqUVBjCQ2JrtAMdtoqFfJ9MVrdawTWCCbRmyzs5afamfY",
  "key14": "3UzgGPDa5KE5ypybcqVWtgLMxcuFUVKjPBwK4p5JVCdst7vQLjnpAFQ552VTzy4kshsvC5mvM2HoL5ReuAD2N6aF",
  "key15": "2LqPZecu6aAKBQeJkYzAUWnSSx1NQVU1gmHA5tvpRRZcDftMq3Ct935EofLe1ttRCjsU9GMCLtAFcxjtTHftN9ei",
  "key16": "5skFnc1vSBwNXiMyftRGMUG1LF48Xx4dkKsaNYzphUvDVsTFd5sibecSCg1kKKdYLJsx4YFiar9Xan1WuGnuM96m",
  "key17": "HcSEZCLhCPD9hGuqRpRtU6t1s7evLmyK7PQJLezuhgF2vdZDz7oJNYdZMbuuvbij87tzfUyeXcJstgcfAYcSa88",
  "key18": "3rmttL5RDGkxAckNJhKhBVwtPwyRGyDS8zJi7uLZHmf1R1VVYMcdPf28ip12k3We3Edqj1Vq8YxLXCVwpAJveAq4",
  "key19": "RRz93ULSVTpqtHP88nPJ9HxifK4GmM18f9WkgSzwe2CPGCkpCor8YhN6Z9pQLKVzeD4PH7xNc7hAwhC6T52DJwS",
  "key20": "2NeWm1MMVjYLoeMkZ8JE1FjeEio6ocT6FKky7BdTHNmtU7VEpV6tern5Wr5CzzbH5LtvqFjZaFAvtXXJZDo5fhaE",
  "key21": "2roYZYvfLXBUNKuQxkw74acqMR9R59QdWi7A1xKsRoZmVSaRfWBXuwBLEj9Ycx2GgKNeBeJGKJEiPErVHNshVamu",
  "key22": "tN4iMp4ehgq3ioyXWxf4bUrtqTgXvUgH2qD3e84enBVH1hefmx5x4EoiDYfy25QjwnhcT4JjY4bxzX4fg6ovtyA",
  "key23": "2TpAteDuLJvWubfh9WB6cSze3bwHVAsQ2xDEw2o6mVdB7EjtZnvzEcQPQrxqHfbHmAeUrGr1FzkT3Y53sjsDvvcX",
  "key24": "gT5xRqWEzhKNPZewFn88zuNQoMm7uMxqDb8P529tzNU7YqcjSrRZLchqVdQwR7zpKzpkWmMfy2MBAwFTR3Q9Prw",
  "key25": "64mH3Fcoz1HTbRvDezYykgJQcfDwiF96Auoakff8U1zkEKfpbpuWLie7gmgYDwGdMCMaox29x2seAxd8zY25d6kg",
  "key26": "62e9wRiZqdBs8KKds5JQ77fHRxc6C9QxtwS3vRbZ6JbvzeethKTMG9LgxBZ7UpmSBEkogHPVKxkzNuvAhMxnNgTt",
  "key27": "4sUuYy7MKrnsKvkHGGgEH9WumKEbChfctXK24toGGZYjxyeXZ2eFT5H652TWHibWeeVSttwdpiNjSMqfwDMf7NRo"
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
