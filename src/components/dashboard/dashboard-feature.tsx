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
    "2BGEk43q2stAsyxPDSGG67EtFtfqBP99fRMQxR2rX5KL42i5tBdLAFavyBusUiMQeAvTgyNhdAHuP7wWA8hTnfY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G9QHcSC3F8J6SWQyA2iAoARUQBoSkBHV5BkHXrCSg6V2x9VibmFtpf3QXrcZcodgKPiVRB3jiy5kHop9drqZugn",
  "key1": "3ve15ctZnTeAscMrv1LdKeVCc9z9Hg8rAwQQkoqKH7eNKbgUMDe8ZDYSjMyMzUAjpuNuBtHMcTDA1ZjpTP5iDwtx",
  "key2": "65JXigKA3c4gYYPXQoj6FVsr8HCduKBQFd8YBhfs3M51tWGgUxGDPxivSH2yktxejp1Jivn4hdfVh6A67YgLSifB",
  "key3": "3ov6J1vMSkyoBv5ZV6EMtjHGoFqNy62zYdYPddaLvfXWCgYq4ijoj4TH3VY4u5GD3RRe4AZYj8J143V8WWY4EzVe",
  "key4": "rDegb68yv3gWLGJrWHMcBZSWfYm9287M7wHmCY7Z8kSadLmd1dqMUGR5YqRRS2gnFfW2U6wJZRU8P94xaaTSFDA",
  "key5": "2XL5zDFysaa1ZWuNaGeu1vQ4g6BUZWe16DVRGPeViwthZVYfAr3Nqx82BnyoR61TDxsQVJ2vtu4NcjXAAvbEnXAr",
  "key6": "35EjPVWjE5EXQGEzDy4ZKn3dMuQy7GCjtCSUiYWqv4RAkW5GJDuXu5zpku4yHJJmmSJ7qkF2mWRQqMD45hBDauAw",
  "key7": "5spnpPJKYMj8h8gfHCqF5UfAY3CfAmmCM6HyYcRanD2YXps1mTyNNwQJeXKFfQWCeyfnJsKcP2bedEDZaJwXur4G",
  "key8": "4Bmo722KJiQxq4b5qjqRJ5q69d8YTvjmDnpm1ccdHHgQdPSLra7vC3fLkXwZpaidNhTUcjNTvMZdsq1Mnoz1mGHV",
  "key9": "2be1e3qJf9LJ8GwUmwztAXk6HMAJ4uiaXMW6t2JnBHL2dp1z5ZuK9JvY7DC8xJEVyfLP9fT71LaJxXacmeq7HcNR",
  "key10": "2X98TcHXnraGDhCDAbttDfLakiACzZaZ4fkeGz94fcfMi1XY6BADqUy38gf82yyqX8t9G9YQigDXpjdVeFN1aPBt",
  "key11": "zLRwacYpNE7nAvKA5JgjU2wcNofGgYjkpNmMzQWQTmdCiFcxP14LqciWsV52o8MJcRDguRKUPJuZkzr4qoN85fn",
  "key12": "5K9AR3tY5479m3H93v6DcUNbvTogiPZQcnpsmzZ2k1tRBTTEEUWeD9gZFHYfH8rbNLgzqFfRrQgttsctp1ExA8Tk",
  "key13": "fJwrQHSpzyG3shSAZdRoHisSdCaFr2J4ooCjudgmgC1tiij4UHaZWN566eDjgC4wNzoaSK7opqKE5zAUdQSMamW",
  "key14": "51QyfQaqYX4NSfNo5N8NzEUHWjsWBQ8GJ1bsfsSFw9TMiLG4QnkAfkWaDDHdsGe6jyd3aU68eKfX9pUcCY1Ux3tW",
  "key15": "2TPAcQCj2bXc2cJXBXCe1AKGcb3eK3LdnRFPsGtnqSZBT2pqvnzj8zN8ijijS5zX1BfRc7xBrFQYwczpYsqu9iHx",
  "key16": "3KA6hf7BMDyBYZPpKx4zrt6wYDNYDfQzwAoZYagJTFjRffzEbtAiU1U4ABThDigsyDL7wmGsPoNu8D3pfw768YaD",
  "key17": "4dX82vBGgeox9eCmrKRPPBt2X8m93sfBXV8FmURsPhUmxztkbZ3SNRv6Y3MRHF6q7Z5r5prEtWfkpBjqyt5R3xBi",
  "key18": "BueJtm5d468twqPTVcP87v7p1puMDqe49BBi1jZbXtAa5dhQS7chjSb6PKndN38HSUc5BHi3i5BgyjY3pJevsEj",
  "key19": "48AZEg5tLRK1bWW9P3Y4SBczrYN6U5AwbCesyyQqe325coHMhvqPQM9gwiuRx7sTLiqrZuYH7ebxjL4uLnHnfj3v",
  "key20": "4PpUFuxjnojrwTQKrEfrkS4mgv8aVHNPi2wA5S3Rpys6owTL5srw9J9Vqki9dZMWmsUeAJBATL58WwhQyAVEwUNj",
  "key21": "5pU6qiTtgBu3TRbFqErdmEGZF55apPFEDYBbRYHJtzgiXRzu79cjvyes6XNWHRYbUup9bvzsQQQLmJPhSf6gCFfz",
  "key22": "5TYnZbMi3qQ9kGomZrHLCYGZxsaudC3P65w26hKbqHztVZJdp896amsSUP6usfw3WCFjhThmjdFBSr8gkjgEUaYm",
  "key23": "3ud6LhAQSkH9QKHwKJ2mZgjEG7ubdiMHmF3H5RzVvRQGrJ7JLVzyBoTvp9UTrLhGLWYLZJmbtmvdnh8R42eifuDA",
  "key24": "5eq8Jq1Qrqne9P72jcBcKTvspdJ2MF7SotBctfKtNjiRrw8eMtmAC3EATNs8RVfshmQogYFqFdYeHMPNVkYercqR",
  "key25": "47e74H5FijDtJ42uCxTJR9FczJ5ioG8P2unxDu1crGTJBUZJu5GXfmZiULFJGqmwwkYh1VudMApaYFnKq91nc7GS",
  "key26": "3pwMhsQLyGDD1fKVLZHKt4SbTkmGEiFXB7jNr8vqCWemoLDFgL5iHJiwJ529LuTLpWW9K5sbYsTtZEa3wq7CJPvU",
  "key27": "iBH48WD2rmdeYVpHooMo1L3278EPkFBqZ8QUx7Cr56NXCNy4xnT9K6xHvywmjbEecqX2BoYcroaFKbWCQumNhJF",
  "key28": "3qfddWbk9jFzKq26ZWAVbE667Qpiw3XDG8fmjRryrHGt6vxzfVziYMiKxQXsyGwTtutx1cmpAZFwZZ24miie8B8s",
  "key29": "2YD5yGWbDYxUnorXzCoAsTG1R6NFUaspaw3sUR3UaSDKc6836T61BmNUJ91Rdxv9xypfAcdSFgdBqiHt3Bqvuv3A",
  "key30": "347YTQa2eaqyS4iox6ezu8HFbRSwdLhKJ1EoqXvT7rLmnyNbynMEFAbgamYjCdRKvfM2A3kAdzouihZL9vWBQn4h",
  "key31": "48swM5f784YSHNJAp6W8hU9m1QL78RJRSfjVBVmg41m2d4tpVLsMJNj5M2mGUafj87fHZ8cGE4K9LB2eKmTVxDwX",
  "key32": "5fMoA9DaHvm5eRxhRhnQtPRGpzvEfPwgfNyPGpb75P6M56B2zp9S358cPHvP4PM8BwCk1vdq6hk7Uk8d59rmin2X",
  "key33": "4dt6H7MfY6xQnKYz93VPwgGWeHTf8qkaJJ8b7YkAhFTqq1fPq1hTv8gjWn9fMyYvEwEfsWxfJR6nnhWo6sLksMJm",
  "key34": "53ZLA3aekwQGhYF7BnqXfqztQ9PfJAQbEsfKeg9SgUvbZuyx4AAPi5Ve1TUnx6cn8zwQJJo7kyXMsYMRBALt274Q",
  "key35": "cmDbsbav85oS54N3eD52DKz6Pr4coJbFYJ2rK1k5j9vEwWg8ZfiRHfbHSxqmeuZn2JjXFsi2ZMCSoYKiRrYnpZY",
  "key36": "437otyFJT4GkN87fcToBfNjJc7485YxF9Q5gr3TH2XEbDP3VqVsYMZdnEgczQpTp9XShTqa4KaxDsmkmt6bdGpyp",
  "key37": "645rSfejhPyaV4ii7ZbAAjyuxSNM1Y24pLmELf3VTm685DUrxVmis5kHHXbov8KLfAfV1MkcX7wTPwnEHmGy3QS",
  "key38": "4Lt2HHCAYb4kZvVzxdPAMf8CBt3ZD3u24FyXnSmem21H3H6GFiaywFtSdPUvJedsFqsrV2hJFqdfnFX8BMTbyn3C",
  "key39": "2EcPrtUD4odaYpDUgMxvHNnaqgZMBgmbeSWZNcK4GbqiDf73twy3CHGTewhAcUsQ6h5e8ZV2ZLeqKUMb5QhbT98G",
  "key40": "2yC2kSD395SdZWvRoL6AcVAyFmJ45zvFpX8uK6CGwKnyeZXLtJgPEfUpX5ZMMR448EZXTQVdafgU69vdQnyqCGDM",
  "key41": "NkfdNEvjtH7Jiuc344RB6XNhoxLg4pKABwb1CNctV8bEKLsqjow8Dr17Z2NmPtKrqva964MZemmsE3g5KAmvW2A",
  "key42": "5oGGJcy9NfxMs3eLL5o1t2LUvtWuuLYqSeW8NQuYj9nqTKjkSVznQ8qUyBXvcJF8nNGJ6TmdtB1FXZzX3Ei47qXp",
  "key43": "y6gQUKXMzz2RfSWnM1kdRRUb183fFd8V9nQuYyrMo9Z15Pu7aJgtrroTcNxX3PHDmbtj3Ab4Yq49J1USDzZZj3R",
  "key44": "37gJKJMUmNeeh5hK8nELdzoZDg97owzhfnqCTM8yMtkyj4wnHJaeYAuDYrp1H7G91cSAumdjmZuUNYMgTmqHCL9N"
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
