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
    "4VbHwhn78dTXJdg1N3G44d198vwMpyfncnS7S4qkek8ZNmCgbX9Hxi4TZUD9DJE7M1TesmAd5dZ5VWdzF2hTgGNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BiciRdEkQcto9vBp3sVfGNtBELsoatqyyFGv3TsRYTXV3QRjjR2XpQLhbDrethm33yYzuuf1p6FKDSRS8xDa4YQ",
  "key1": "5waU7Gtko1QXoyxkVCMXHr473cQuABHhjLF4DX3CtvJJb1feurDHqKBHYN6hfXLxcrUnk9zBf4z1xHupSZ8bhpNg",
  "key2": "3tMdLNzgT4j11y4Y2nKUc4DfKtkdWQQNeQKa3srFtdDtTcfHxxzpzQ5GZ3xAc1vSDe61u8RqV7m2Jnqo9LxdwmzL",
  "key3": "5GjoaW1tmtJjYmcRecvozGzLoySjKR7YdmbYEz8FErKxzk8nGyauUbpmNxiw9wUxybPx9RfS25FrfQYzCNfRVUjp",
  "key4": "2siQ7vHeUC8T6P3phtAQPwnAkPrXRYZCjjBkahW9M3vHtbNnN6PDLTkXCPXQqa2A3QCdQeUCXCqY938K7TMNhu6",
  "key5": "3g92d3yqGUHeUpxvi27NuUo9gNEWBsW9SiXKVuccJj7PDXdYNnCHqxWQj5VfVgja9RVCAvP1iNuwnfQE13ey6yYn",
  "key6": "2EidTNHPiU2F7a74mTK2gFn4ikRWxGx3prtVup6GmNh41tjjTVmMhzn9bHd6fQWst5UiBU3r4ewr8gW33wcYGFy1",
  "key7": "66ZevvEZX6FMjamqqG8ZhJNijFbXDpgZNN2f5X6ve7AsQrzC4EUotvUPLvTx9r2AhsMzjePVSZgEYPQLqktxTbsM",
  "key8": "66AmNpbRGYLxmVY1CdqsiU5LADFU74JuFBfpVbxJzBC42yDbfrm94c6NhKCsSBRD78eV3gjiytZGRB7VsNLX6fEg",
  "key9": "3Vyx158u4ejTByNFEJJaStgG1HngpULPALzuibL661MbCqijm3ozqbrd57oSjwYv8cyzLRtzhmkaJrc4WoK1o3XL",
  "key10": "2zNtfxYVbHVdjm8ZU9Qg4PfGndePy6myQMSTCPbBPP5Ke3c8aVqRftSARFA7GZS4yCGBwS7625f68EVkUuKb3Hqt",
  "key11": "2sJzmPYYJSTSASjKTdXTRbY9qbNRW4tTKPWkx4Yqx1B78RpNBD8ErsuMr2RpjKVeyNWChJ6SFmLAWNnxUr1e3Xok",
  "key12": "5SX7ACZV8Ak4AK9zhbYYyszyQFm8Psw5HmhJ6ZSYRUU3jawdcxHjqF9bCg8czWYyiAK15GdXCd63d7htBn91Nu26",
  "key13": "33n7voRX2R11FVdGhNkuJ9F3PwGS9bbtvmv4BU9TQXduigniYY9rcAoeAKXMyQXNmPxoNyo3NKWXPGfDb19iz9G3",
  "key14": "3Vbvr2QGPBWfy4yKei86wZuHPvMTJT4fWRNmgNYwAsNoeZJiLwJB1Xr2om6G3tgB4w1xLy9JoaBJyUhpuBVmqCuv",
  "key15": "YxhRAg6LETB6pAkFbmpY8C1xFPhh7TxQ2dhKbz1hZjHnAhemUMuDptQcCjzJ59pGigZMk8ZyYd82bejsMnwV7W7",
  "key16": "52C3T47pGB7QB9WUb4hoLDCA4Dxwp9vZt6p8pZXcVCnFR5qt698FS1ZuVLjgmUm44VaxcsafoXJ4DcaapQJjZA8v",
  "key17": "4XHb6q8QHPhEQTGhMZYMaLxzAVHSTPQzHztAcbiYL2xsHkapo3BYj7dZzozKvK6TUR33ESBCicPwvxnxBdX8c8aU",
  "key18": "L7wagcxxvRKsW4scxB2DDzDafK6LPTTkMCsWAbGM3bt1pMmhR59KJu4tsMXiHvPgbLsJLDTi7afKvLZccuCM8Jh",
  "key19": "4UveD2o9LFrX312hadsNgwVPSHTqpjwSgFofs8cLRRUEDRt8a9nyibHRvHKVbFYiT5ifYr6aQ9phVvD1GThPBNsu",
  "key20": "3rnsDTbPcjSeyVbg642bgdJYuLZV35bL9NtqqV4vZgD24MUELbHt9tMcZDpLdSnZV8EQ3ZEckVaNN43yb5zNeP5d",
  "key21": "3L91M5mLS627BDd7PKTnSRXkCEDdQA72LFkcJbpq1e89LNgdDfSUREUwTySmJFQD7uXwSninbBe1cDCSEJSt9Uew",
  "key22": "3iE8q8qnXdTA2u7xp37DetbXeRpixSQPUhWte6hiUF2U7AeZYdbjNt2F2joFvznrRHo5Bhkt9VxVvfcYVWJiDooZ",
  "key23": "NcacQp1m46BFEUaPDtz67FghAd6pyv62fh4bRnvCvnV4T54c7UqnbERrvH1G6grvJ7oW4a4fYygdEum1AD2P9zY",
  "key24": "2h6LU7s7erksMZV2vujzfckvksUNqz4JQWWHaX1E2sJzqW9KdUJ52cCcTAsonvTBvAD8xjNyS8JHVh6FRcbTDwYN",
  "key25": "shDrCTFnyxKgqMU5DyDrCFTgb7Dt6LCCPv6BH2365qewgtooUDCUCJN3vQDNogvJV44s4CfHa5Sgjh16ZgxcowG",
  "key26": "2RcX9VjV4DSvFTjKrWY1m655SiChjXUvSRbMSiPGfpz4HyWdSe9fqu65oaNxRwfgjetZRTK3gkUiB47Z5L9ViypG",
  "key27": "5es4sbNaM6M68q4RRoDBegJo38PLm4S7GXmcKWVZ7Ry7Nex6tNF3vra16MS1wyCrnY7H73PeaoADMCYFqAF4TN9B",
  "key28": "4mFWCShUfg7YS4xUpLKYxEZVf1c8zEjekDM3oM9M3JfoN3a4wDav2MhwGG5CbnPnp9Kz4WxJw9xgZJLAKpWFY17G",
  "key29": "3maDmCxVZ7kjf3y3fn14ySAin3QGScv9kTWfAfVjP3X5xjRomu7dY6wbdf2JaW6CycM2DKZShbQL4HBHcSe34Fuf",
  "key30": "43mWcrMT8u9Crj3MFfHX7iRXgdbR6ySwpfdPFFzBBiGMzKn6s44r38rAqr7mEHhie5UhpFW8cG5GCkBp3U6Ryr91"
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
