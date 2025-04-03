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
    "5TeHygogTf9eZCXB6yfthgiMespjNGY4hq9hYKGGjWoLx65oFNiuRHRZ2DJu6LC7KppqQoU6wQsEjcnBLKzRHpQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53FeKCxb1HvtRRJ5Bx79y33DoqTwQ4Uxc8nrbxrq1s1rjdbEHfMCvrMW2Ts5Er2TEZdV17WPuL7eV4dyciwdhSmS",
  "key1": "jPAefBwsu7JNCS2B6Yr9Br2WPdioVzc7u21xbeUGc1CGg7z8d69NHbULFszKM1JoFwN2oNYT6ZGT2T7z3gH5ADf",
  "key2": "33M3PRN9HaRagiL4oJdzeAwyiBkZDs7TULAQUdfDtHZcUcgpHpRR7gz2twDULooRjjngrJKRLhjNBM9431uieA8U",
  "key3": "4YuRAeGJH1s7pZqirMWDik1swn8Cvpb8AkA5GMzsyR4ZNdaUKVGNdksf1ZUgAneFPeU7c4prGEgmoZ5hoinQa3je",
  "key4": "3w3CwW9mX1MtqTMfi1ZPqbRyHeLSKByYSQxCMwkeo4e7WKfa4VjVh3GFd84fyayhiuHus2pCrUBqRxc1YoJMBYtg",
  "key5": "5dqKt3gTe2KVc17ctHrSgGN5jnJoDeLWExMT5qypqGRLVWkDB11ajaKL6qMEjNzUQbUYiyenhspFLCbGB3M4x48r",
  "key6": "3sDCVC1tDijdsw9MThc6KTXSg8a94Fq4dJ6sc9kNQQtWTUUu64ZN1zY8RZFirWLCnP7XTU1VSgqe1rGS9cG3dwRA",
  "key7": "9jDgvTUNLMkQH61QUsfNAenVZtMnzWNtTbDC1R8uEETxrJcgzQzf68NKGPTo4x3nvLq2wZSqanM4jkdXPAvxHC2",
  "key8": "2JQ6rjFvR6PGFYDPFysyMoWPKG7GExVgc7ksaVnvdyQ7hMmC7bYxrPNbo5KLz1HmztVoDnQ31n2YoZXBfvrVhZYS",
  "key9": "2P5vxNXEL3yN8bFdtZTRRnE2MHNa9wZQLZ5Cs9HsV1m4XVWMDnfE4f2fbarwNR3U6HFnc6VEniTdEbpbxM4VrpFq",
  "key10": "5w2DMFThhbE4sjk3bHg4y2tFXR9whRfdgFEMYhAA7L7muhhXYSY8iVPL8wZB1nDyCkKAaiPHzDAmhcwpQyCruh8d",
  "key11": "5fvjEfc7Bboe6TscVHMjgJswt8WcxntvSsxAPjZiaX5uMwrgaJvLZBDGSycbrtmh8bTk6S7fa3URcf6SpUn1GJJG",
  "key12": "3R3SWEXHtTVJdCr4D3gCGhscrkajtxWtApmVxKnQwy4H59Dy6sAK2T3QHnr3ZHVCHv7JPgL1BjU5gQKeuhYc2NUo",
  "key13": "2tk8zuGZkVVDrHPMmVFE2j9XjiSJVvp13ciz1hz8TZ5G6EeiXVLcHCi9q7ezsh1o4gM6Rb5YjFgd2kbdZRNhj1rA",
  "key14": "2nXxpLdg7Ut7JyT6Y5zzjdDM66Z7T1L1v7xizWGqy5ABAzzrcBgWR9RLh4Nib8faLttUB59EfTpyrKvbgiwydtvf",
  "key15": "mKNoujGrQdoYyoAkjoz2JLxHEXrLjhgv4ThhsKSuaVdSEsx93AqasdUFMA7t6gXwa9Zo1BTmextSpT2AG5cKt7Z",
  "key16": "4Pxci9HLaFW965HQxk4eJGeTXxezAZNkghc18HoTtjKcUveEpjq2ahvAEYpcAoF52WVJ58MshMdNaEdaKKDsCxGf",
  "key17": "5uqi828Mmfn3CqsLY2ZoHAMmEXYuqYPVyQTFpoVUgwZaUsQ4w4NqMPCQxXR83xYPbee3P4u59Fq7uyoSphfXJnzU",
  "key18": "466erCdQq6EPQX485Qjkrwj2ReV6YdokzePkox5B7FrX5vZeu9pXisBLXsEz2nNPm9tCnR5V3dYDu1zfQ2SDJyAn",
  "key19": "hQvGdF1WDBC18TJuFT3W8F9n3W94nH8udcBKfd8R4hHtkySFQcgw694GhjBZ57S6UybqUvitBVpzdDZorpsZSGn",
  "key20": "ijNLQojPAzf72X6G9WD2A2rGQGcR4RFyrcYNRre6tPGWXME7JEAtaxswL1YCxozLm6ZkeVL4MMJAVjy8eJEd21e",
  "key21": "23fkY4DYqVLGXWnkrM2isZeGREhzUp4NAgykxy6t3DTg7vbFFGPbF4VEBpQ4eKQw17FVMxBbhj58fkzK5eabcFwf",
  "key22": "2z9TNDNnk55DhV2n9uZwxhJxknLaPnd3usjmJ1bZ1G61GCNb9tdxZPxqzdnTBbeuHXdfZTw3iU6fchpkHfCFUfry",
  "key23": "3R381UVRaMvVaD2Bc81jF3h1arZHgsJfjAFtMYUkdFYjsVardJUG6jLxTEbGV1uS2nV85ssbWW2246wVb4bsXyqx",
  "key24": "jTgmiczegeHYsoxAJHQhJrzEo85dR6khwyajwnubhkGysWButnkPPm7boae6N4wW3bUZN7kq1EFzfKYvR2o5wWp",
  "key25": "AUbACn2BtYpLfUZNpRskDJFadUWcXPZARV1gB6BLKBto5FGPkyQsRTiURZA3Vk5dYa5tWornKthQUvZyBdQHeHt",
  "key26": "31o8RLZDka18LRKNWYhHuooKJVhrGVWnv4pw4kX2rjGZiHH1xDtnoc4H9UCpkCCjQxRHRNJTuasro4LKJpbzE4UL",
  "key27": "5yPzmxtV9ZhsnkUKtZ9cPHUhgYxcBWh4sFmvLFmEsnXEW2mPADU8mCBhEcws3fLw5mgULQuB6dxUUQV43TtwrjHx",
  "key28": "4Xwdax8gcmynXcZiHJnweZXeLGn8SwUBpsrwy8hbAgKsvzhk9fi5toyjcH2iyaL9GUECvbGD5xGzdWRB4gWL72SB",
  "key29": "5GSwjQ7BQou4XLV7dDKkP5oUMfCoMBrDxCswC8mE4iKxqZDUxifGnJeAuTtUcPcvEwwwmgFxs36aH4MnkVApy4zt",
  "key30": "5Af4rRBHoJ9hMovFFmrVPt67FPn9rJPrCcvfMVb91TKZtXegYwU6zyZ2tbhwLMKbsSq5b2XJRpcP619MSxwqA6HH",
  "key31": "5p6ubqYPcQsbC88nEda9dZU1SkwMncvR6ocY7MsmdyD4mFwY9XgoYng2J3af5hzKdcWnJQjEDa4ZmoJkRq4deAk3",
  "key32": "4qL7HAWKJfrB9gzJj1eK7qP7i3DoxKqGma66Qi81Ajdp2yD1VGBcoYTH1Zrv2zLRrXcKfvQ76ucw5hkVycYYu5Fg",
  "key33": "51qA3nMsNvyyDudhWYnwBzSvAJTxpoEK9kDEHHuMPqDJjaRA1KQZeHrsiwfovhgoqb2XuKK7niqzVwPdtW7o2SK7",
  "key34": "62YPyyZ8Dq3QZJEYZzwyz4NwNm5UePJkXdiwZXk9BeT2DSj12nvjrSYMe4zMi2WXRpZGnMhBHSxRgKENEch2gDXC",
  "key35": "3TYYBiQzymdno9reS7b1MLMRFuCotNUy5tVjxtq9HWButKbPKem4aKbBGep93rueaHFjmawgnfzkK3cCYktuJvag",
  "key36": "3wTpkyLrs1naSz4xCzjBuPnXHVQ4pfpRTiEM4oG2v7xnU8JWzn6yMLGLeZ16T79eUB1Mong6jAsAAuJ1nQFWF1xC",
  "key37": "5D4P2SmNcv3Xc17BuBQCDmGKovC5nG3fmcWe6GrR3ULafg7NioJnManLs6rFoh7DvxggVWFyNrZRmmYfRCGUBoAx",
  "key38": "34nib1XeWZPqnctUe1qhzPREapwVsD5EZz617rMV2c3voo69qVRsdo8wP46QWoiCYu2Jr9dtekya5cfDF9qgXdXW",
  "key39": "5bnk6fgQimS13cY7jjpmzkrHHKmdxzp8MJQbgGNATNWHc1kRsXf4JgmjuR1sAwgnKY2PXb9Kx7GxtQiJeWNEk1Ac",
  "key40": "4iYBKXXpPNcfthAxZ9cvFABDpkamZ4zQ8aE7N2hMt6sfyZxiLa4iwPQjC4AiL5TDu7MY5ks6yRtaA2LDro6rf44Z",
  "key41": "3YKgDSuay4hkFd9TTamq3SwtNi1tvvHVqds4EDFv8kspKhzF1Gay4o3JHMF9kVP4u1VQZaqtfFFrqUNnkkgMe5sn",
  "key42": "2csc9FhU5Zq3epnuYuRpgDhH3xr5JjvEb4PPSLVxLePFDGhcDTi6q5cszvx1VsjdVkQY4Dw9dbzjovuYQ4c63kyc",
  "key43": "5kV6zPB8jBkqw4n5PRGDQ4KS8KiKbYjnrstSTmhJhG2qEypcu8d4dE7ZeV39Mv44WBk4e1iJe5YdLqtZuQnp9htC",
  "key44": "3HqjjQxMAm1A4p2bdHuXMgH6g7mo2awFAoRNk7e93MW25o1Eojq61YyqaSqPTLAXgA5svNckp3c6FhLhwE6N3vV2",
  "key45": "5hQhxrMbx646Czutm5ALBcqd3SDdNp1q9BA8nxAteqH3RGzeVQdQBofvJwBG5uGU7R1TqPVQLv76QfPUPQMDHU71",
  "key46": "24GzS7juYeBZPyvXqE3L3jWhB4tV6TzcVT1fR5G5xG2BbGJQBxpaSaDkFeYExc7GYqxp4UJ3pJHJBxSGqqf9yJue",
  "key47": "2sCNQmcRrnGjc6rkuiTcFkWECEsiTY78knYsAGBf1etFgZ84tn7tetyMe1L9xTcdEfHE99WZBVtqWKYyNe9S93Se",
  "key48": "4qX9koYq6AkgUbdadqEFBfUdXj9Vbf6B5WZY53L1MUTGLbE4u2T7Z6HVJLwLfckdWTPcYzfuFYkot7t5JvNWE3VP"
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
