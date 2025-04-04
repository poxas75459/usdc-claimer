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
    "3nSVoEc7VsUaJNzQ9cNUPFfYgozc43tVFZbjDt8GDqo1XdireVPWUFPi5prboMsZ8YEBHVwRtGBUio65dn1qt3To"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H91FTvVLPh1juGJopcgSr1LqUL7opqxAibyjJ5qSSmGFH6bUk2fdaTQBrgdg1Bq8LyARu9ndqynxZj2p7TpXjGX",
  "key1": "znSe6GrpRjHHk97umpzmbTzJh9o9TCJ8J5JjJaxex9bsi2rCqnnRiXm4Vk9GrTJ1RG3fAGhD4cugsDNqh4X7myV",
  "key2": "4hwqdzm8DvnKMZ4wzzUiHYgkKu3F3QcMMaTWgRGPrgzUMn7cEg8j6B9rduP6DZwzAAPE2sCWabWFFKTLvkYmBqad",
  "key3": "3CEG4UDV5nAkreL3eyHoicYrSZuvsu3rWKWgdR2odW12EjQcMjtAxqG5U2TV9XzqCNFxGUoc5ER1KELgc8FzbriQ",
  "key4": "46CRSXUaHkLxLjTdpXktjs87HirCCjpd1Cqfs5Z2yUweojxF8bMXYUiwQRGcKc4Yeg1D6m32NXZvVJ64SQTLcUav",
  "key5": "5vJqUFtSqcu7dUma5hz2LvQ8XukTn2Nogcrj6vLdSKmHYfzwaV2Lc5iqXjjBr61VWcZPuc8vysGW514cnZPGnzCj",
  "key6": "4u7UQ5DC3rkZ4vqSci4HwMubw2Copf841tCSu5DevW21QFZnPWAzD1pREowcxHzGJBFJm5em7pH7iRJb4SLcJk3k",
  "key7": "sLKFUxPuGGxLAPJjnKSypioUj2J7sBa8WBhDmyG6br33vET45unLgqson24tRZXYU3epftLdzdDuNne9HNxzYFw",
  "key8": "64KZKqUYrGjbamT4yCssp5ZmKNYSoDgkgG6cvPYHPZSkEviyc2iNfSSZi2WddEn6Buv3xV8vbmAGh1ipp3bf4qam",
  "key9": "5uL5WPv5ytHR1R3rX4qxCQupCznQkvwLwMpS2SRaUD7NE3kTndMBPZczAztKStAyhjgKA9FSvXsfsowHpcZyPzEo",
  "key10": "2u4ZD3LNeuT2jCtjBjVukcPGUD8k8AQ5BpSEnR2iCVBBqtGhrnRUnSbsSeKz12oySxQSH42rCPvnGsr6Rx3nra7s",
  "key11": "2KGCiXC2oBGYSAxghxXWLyRzPzfWQHe91s1eJ99v4aGd67fDjtvkQ31tGLGQecLJfgCBJ3j1PFCetvgkKsFkDksF",
  "key12": "4aPwGHS22wxTWSVD4r9T1LRMQLLATLnwY8TfiM3GNfS85Dms9vziBweXDf77wUTsc9Vk6eJvxeS5umQYjTMsSgdd",
  "key13": "5afZdysmb1FAUpRLGpMqFbaTbSzTZRhhYtGxcs2XoetEqFrC8CFncfBrpRgSZ8sGRu8FRiN2nv7uPW2kMDU5DL7S",
  "key14": "fxNMH1oJhKyt8nNpqoWPFfB4mEUMw8w3qZT4MPPwf5y8i2SgjQ5icFWn7dcv7zXVtPxpQWTNonsetUMP5Wu6j2H",
  "key15": "TNrEVTBEB96Cy7y8q9zRFiGcrX2PtaongboSmjHR4kHpSaZpZQQNZmiNTngqwwfrQ9bm78M3uhAwmCAfsknwhDU",
  "key16": "4KY93yc9okbKTcEh3UtJ28ToMWFDSVsoecSYr1e7pe78GhqVB5DVJmcfc7MB1TEEfQAsQaSEf9gKJmQRmiedjKXp",
  "key17": "PorzFJawtvysd4okZAnhD1UDJ9NjcuZpAGJYoToQrvDVhUMkN87JdY4DisjHNehqPQVuBKrVx7WtjAZNaB7t4mg",
  "key18": "2jy49Pfxhpfg1LEwYSM52TzPi3RLREVHDaM6AsuJzwQfWMXLjenwf5SZfizuBYqY4ivkZikuoPCFJtHSJ2vB4T4F",
  "key19": "3sQPWrX1XdX7FD3rPhThbYSN7kxJgCu95UkiJveEXCew1PYd9CdYQGGVbPhfUzBWRKtwpgVNakS3G9WHEatmc3Y2",
  "key20": "472oJ5qxBMh16hxECk45t5LEKtm2iciV2QpS2jccyBVRcokZQL4mEKD9sUgFd2hPZjfK9RrhDMAmG5JTd4ykFUhQ",
  "key21": "5vzHMdbvztrP9fSkk7n2BpLuxop8qhaJkPX2vFogmov1FDpaYrrbYzGi2LXxpJwcZiRqBhuAnbt8QNWw3NJDqSPC",
  "key22": "2SaxPygmWhrmvivWKtm53gUmwdhX1SNpX8Lw8LhFuDr4fD4hsm7tbiCmjEaeoDhwUntiXxwdaSWxm3mC9GuK2d1f",
  "key23": "63piAZVgyoEKNiYkqvvTo3pm4HGfbDh8Edbv7CkDGdWFLWREFJw55RHk9JXFFNu6TGqZCLadN12tQLkWMz2MM7Rr",
  "key24": "2nhqyD1Pbgi6qQjevmxkWEhXViX34krivias8jzSdquZuXWMz6Sifu9j5zjm6rvGS7MJLWufsNt82DkYeN8kZ7ze"
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
