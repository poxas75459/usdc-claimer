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
    "hBEiScLtaCbE3htbM4SysJXgh6LiGRTwChRxXh84dsXrWg3xSgCCfwXmkWkUYcY9YLZ4RqmCTvsksBfGCYfoL5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LLe52zbuKBY3SsM3vNVD4a2wr4GqnEm1hUqxywwUegmV3LFYN3UWHRLgKAiXdR7f7B19SW33GGR3XwCYVewk32B",
  "key1": "2FxeHV7bcY78nAgkojhX5doUnXmyRexXatJHCnsmZ3MxXvyBsHqoAr28qg948uxne5J2iyXCfmno3xtwvSaLjc9u",
  "key2": "4hsLCYJSbvGGMyNbfiwetPMsfGhZwgaYsKM95fHhP62r6wVHRDGAhAyvByVQRL1wTAEDdcjqV2sRHtq2WPFvzmYL",
  "key3": "4JuqrJiP3QdYn8EBgXJmU7uJKFtCDKSfqB5HF4ToDo6aUturQjRsB3SAh3gZBwe6ySxQSrWKYJnLDQbs9AKyRBFG",
  "key4": "4YKy8YBkFv6jisi2ye4RMyDJeLR724y8SCPhfK4tMC6ky9b5s9xkG1GNxG5sKgMDytAxFA88B49s7wBZjiJkicrx",
  "key5": "2cvWuMuazuN13uWEGWAiTVxAowWQkY4BQ91TXLoGAQieyMbG2fVUyUoozK5cHT61Pqo48wFJdDEMXizV13p5rNQR",
  "key6": "3wCtHqKXqRLeu1nZmg55x4iAYCWbkouhzcyrkBh4fVMf9TU6XjoAFbJLKa4vYBjvMKHVC4yiP7TuW1H6i7BkmCBd",
  "key7": "s4jPjGdX6PJ9SSsVJQ2wY7L9ASH2FDdGMWn77mB8YvLm3XUdwayYSUnyAFaw2hUzdnC1ixYqCwoZkSP5JeHHThX",
  "key8": "36rrigKx2kk5Q8Qc7TdvJVetm6GXR9xbJwhngHgNzZzzBq5nRKSw1rWsJhvgvynDhN3qhYQDK2iyRQtxrt1d7dPr",
  "key9": "UQNiUaN4QknTCmVJPkHVxM3LG8sCC1LY6xiN1eZvJco3oTbchTGwNPtu79ELbDDHZA6gEfdPsjTWK8gcTFxJFuG",
  "key10": "uYPFBf46p31rCBthEW2k1AuYgp5E1JmgVGu2NjzUwQX5jXC99YuYJrdVN17jGfddU9j85R9dkxJgRNpwnftATMH",
  "key11": "58AUQT1LtwpVePd51NP9PwqB8LCe4os93zKcPu2ZVr3PavULP3q3toD9xRTrTdRcbZdKw969qEXnWQU58266CAiZ",
  "key12": "4RKHvv2hwtpnYabo58fvRmAAZJXWYYfgtVCNqrP5RNfdtnCb9tPfFv3Z2YAKeUAmF69m7Y8gw8sTs6BJ9w7G2zLg",
  "key13": "2fko5AWNnApufjK8dvzUSj3eCEb9bMc2YTUASW4kvYVdTtWw5ffxu43E351inWF3WWpa7BeAnkDMbUD15HVhGUsc",
  "key14": "31G2cqBkSCPPj49N4BXDfTW4eiBs3BxUvdp4GM69wGcfcVFC4rGGpQLzBHmBHe6EzTqaVuiV5eF6CafW56L2pKLX",
  "key15": "2oqZKVsPzxohZ2xcgo4wQGTrKnbb4cyT63n3iMQCFx9gX2Ysrtpo3t4S78veheWByGBpgj7z98ENXS9j2XepXDLy",
  "key16": "XQG8zxtmwvtEnRuJBvXwqcPkCa9j7pFRfYShJzwRApAxiu8j88htnWrFyT9wRVvV8WVbv7yZ65u6pm1Zke3wgHe",
  "key17": "5U4o6eZYvK4kAuM9y1hjDraVyxBPfdTUWMmtEunLjovpV1TExug5MSXxmrRBeFjHS57yQtZ5ETjmyRkdVdijrXxE",
  "key18": "2AsKczHrpmN7c5RGHfEthHGryNUpaBRieSqoZKaFX4tzNLNd6GyVrez5CxiNRbCdwPezvqUnKhm5EeTSgksuzAaM",
  "key19": "4s5iVqBY5tnH9wTH5fLV7HtmLqhtxZjSpfa166t916TYRs5iC44JAZHEdbhzjXyom5L7vJ7GCc9kW3wFS3cqLx9c",
  "key20": "3RPrfERb9met2oXt2SMrZDDEQyXC9HH38jY5WxWK5SiiuG94Dh3neoFV1J5WxyJJNyN1dboyduA58uGDbAwGoqKj",
  "key21": "3oBdaDh6isZpou1HqjrutfUYKFgFt5znGx87fRhBg5c5F612u92Sn54nWrEPLJWquLtSnqtQPLphHZ851zNy2Kpe",
  "key22": "2bQVVpPHAM7w1Lt1HS2Q2B7U97WV15UUMM1vMjhcP8mYKrbvxBp1RdZLoJgU5UPHcAJDEFtfZwW1s5szxcWwJusz",
  "key23": "2kuv7HXdFAk9Hi9cNWNXDkgaGgHabZebitigCuZhmRxQsBmaQhCVX51tfRWQmHGJTsvBAox9bhgYCyR6xGxJFsR1",
  "key24": "5tg2DBK7HaeF9CbguGRZxkqmmbNknthc9ZBgiFVZVy8t882tBkj3qs8QM2hb47cCzxN6wD563n1cKB7zf3gwVKtw",
  "key25": "3jdTcw7QaQJ2ZvHpHEbkU71TAQAv4CUtgQqsPrKgpFBVHfasJ7tdagxtRvDiFA1x2eR3X3d2EKaTDopJTds88aES",
  "key26": "3YPzYJGt4oamepMNZpwB8NDDBmjX2ZPnSS3GJn2UTMrVDbdsdgzdy7aJkdX1BSjHqP23MtE1fxn7mTZrTyNM2Wue",
  "key27": "2HSUMNq4ZBGgLZVfMdv5HyQE48Vn5gR16ZeMtKyy7tXq877YuPDoDUb9x4KBJeF5tTaMMuGbTFbQykwzXW439LJ5",
  "key28": "3k3YeV3HXXF2gxVzatUt3BYucGFy5aVHdzm9KKeJEZ4zmaPSvyRUHNSmCiTUXK11EJaMRboZLN138tSeecXf5Y7A",
  "key29": "3NSXydCg5tE424dnCcQuBYjVXJViByAT4tsNt6vCazhrkkFSGo6pNy4ziUYziRK66pnbMF2xv7PJQ1BWa6GDZ5Dh",
  "key30": "5RKhYBunehEz1WH1NCMpTspzzxHcLxYkLmGvjJ5UqfJCUEcs2id1CmWg3DuPKueVDQteRs7YSbN6gHUio7hBuaCA",
  "key31": "3DJNo9jXWxePRDiMmwWHqCuF66eJDmrd3Qf5wQV44frWku1gLkjPQ4eoisQNCrxAJo4hyrGH6p2LDzcg4mTzGDb1",
  "key32": "2sWCydKHqcmv9xN1v8SNUtC15kzoT9vMPpiEyYxsMiCXX66DU6Myn8goDPrrsEaRZYJhE3yAf7eb3Ww1YSBWUy1X"
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
