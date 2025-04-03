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
    "2J7t2TKAznuEU2joZssknXfgBwvEv7unufd6s6r8P1SBg7KR785x85XCpDezqvNMcMkALGzrTT3FHKyXBULRNCTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3APxvhPrkAKagPXidJP6eRUhqXc88Azu5GhGmqPqqYeNZnpBQowsJMFXZ1Sdf9m9Pedx3qydW4QHzNHvAhB1ioyq",
  "key1": "4iZR7TCruP664AX4Hgb1w6UZRhWM8aotvP8b2toUjdZHtSGd39xnCLKLji3HDRPiZ1A7Udc9E8sy1PJQ2PW8J6tk",
  "key2": "8Ta1ofTru75gMcGmDjRpdXQCQ5TUZ11AGnkXFaUS84ToV2wyuJiSX6jqXAHsKRLtXKkAN9r2bxcuoQ87JL5WLWT",
  "key3": "62sQ3LJS6gzEFefVFE36BABuqDxfEr49FVvhYJhSzwQWe3gr1uHHDBFeXa6MitcHoh1xVUUXycopLiJLPSTLaze2",
  "key4": "5pfBffeZ9eC6Xi89D6T5JNC7AdW2HobRbdjnc7Wkveabngs1bHGQGZFJCv49gdPCGRSBPcg6q98UiYLLfryhYjZ1",
  "key5": "5FCRfqTEZB7vK1pWR6nU5vJv7H8C41hRHAEGVpDCK1WpSJY8QRU6yue5ip2gqD8BFFttoYNKi28FTgskWTkwffdL",
  "key6": "QzN5Ne1zjWdYHppExc5d7eAVh8Ge9TV3yEKEekWyyLBRJW4m12N43Sgf2HFJmdgA4ZGwjs8jHPbg2tQqoFoRy5B",
  "key7": "4yP8WNt63hmi1oCUUTUMKMNMHExDycYNW73LnmHnS8G619jfXWrsriMf38qc7TZFjfviqng2mQwFFpHz3PCGazhu",
  "key8": "3cfCeJuVLS91G3ghd5pgaSd7YqA38fooyU3zWzv1qxqq3SrbUw5XkTfbTMSr32NPRrPKmqMDoiXj9e94AkDWj3ut",
  "key9": "45iqik3dqshFJ6Pj1313F2jr4gJxDeyE8WpfKUhf1L2KLuj2Cgw7p9YUkFRgNTEtkpyvVd8gEos5KtnVPBNpgvPV",
  "key10": "51pboeGyqZKaWjuDnFkpVU8WuvDKXqdUe5w7QdQDa7JdsRLnPgA26ALkDY12Q1gm8onpdfYyzc9EmbgVq9L9uXWu",
  "key11": "vf49MSaFfB4h3q7TGyuNBYNtF9jg2R79bybSLYTUy2JDdYkkj19TceFwktMoeNFMsmkzD9ZLF6pY3wR4Wwm9YjY",
  "key12": "2yZELueehdm2esPPD1FE3Fx4ofjE9q9d11WiWuiQBSJuVoWULrU6MXvS2oHEaYNhfprNUAEJKKgbACwNrejzW2b1",
  "key13": "45HJoJXbhf7aGNk6pVA29WpNS7Vq35RVdsP57NZsEJHwQBPBaUeEpTB3bpeUxDyqXVw64mNrvpphz9RTRxLFanDf",
  "key14": "48YbCZXHXE3qSMhiC57ueqjM6hashXwz4o7AcyXRAK8X2zeaan2RRhwjKjnLsbWS9zLCfWd4mhxAFRsxYkK52Ero",
  "key15": "3xo8ytey3z1cbHgHdct9DwBf6AteSPAv13RXwXCWzBcQUpEr7n9ALKtB54CxG8xpvtnQoqsYest7ZeuD283z4pnM",
  "key16": "5yGXMg7fJQyoU27uGncQGDUm4KPfYjYKy1DyWSGev7dXSp5fnUum2YcpL33AEk4uANAUK3wmEM9XWJUVHVjYP1Rf",
  "key17": "3qifi1pUfq3fQAzPudvStmNEiqHNztaeKm8Kf5EdWG8rPR58KKDkjdBXAcbUZBWApurymdYjvWL35E4Ud65Xpm3S",
  "key18": "3HxYZG4HuY1pvvAUznY9kgvnNZrm8anr5acUKpDTdwLTZaWA6jTyJBrqtuuEppDkUEGnLGWHrTVqi4RrC7A5ukU8",
  "key19": "3hmB6BJ8rTVZKyx3nyRPR5PHc5AoyjSS2nqMfyiAYAVfQrCRtqNL56w15o1gKndQ8jqVbfZHPs1a8zciNW5x1R1Q",
  "key20": "4Ht1BQyGgA8Y8fF1K7aqhdP4vPbPVMBcWJQY9mgwn1qb5WZHLrmJaZxfrCX5NBttLfFr2aPcg7NwG64csrnA852Q",
  "key21": "YyJHssPPCpfenX8gW8Bk5kQwDoDBbPmnJgdMLw6ktP14pL1mDYJZDprephmCU7EUNUqbDrrwmXDfNqvFoMcgt8d",
  "key22": "243vcqWC9pMJaytfBUQayEfpButKGvZ2jQBoj14kUXf4BRJLDegseFHALQnpZsaXYBqZhcStYi1KAtxKoFdWrJd7",
  "key23": "5R4ZWkRJXWFpYUBk5tuCeLvGuMKM4af6CEHhVgNouyRpcdYHd98SwbzEEvPrQcmVsdGycY7xuzV78aBQrjw2cxSY",
  "key24": "2swftPAHyVN8Qten1NxShS9bPNDL9UJgfuWdkAza5aXMuFv5Ha72XK6BW4UPM53WHjssPSBDwcKu3jtAo12Ukigt",
  "key25": "5j1UVRcJdU8r3VW9XnF7WYw65tiKd42hqKxWhBEvkySHBjkAwBJ2nZWbgFCbMSg1diQgK3QmABYEGFKm5tUoENeL",
  "key26": "qpuK4MhZXUV4LRkLosQ1fBiQGWFCDGbEHue39oBTG4rSyS2qy17iGHhM6K2cmWbkKuyLMMYZpnPMzvbuxouWLag",
  "key27": "5u4U6uzwVBHasTtzmQYVmj8zds5pm2Jho9VCCjcqK4LXBETBW8VWVadzqxFGS4RD5nHg95u5Ebp7crsb4uQpg5DN",
  "key28": "UPEpgU6EveuEC91vCYipNCmK1fr3ASD18kxdpymFGRMyNx5XcToSbMBCLH9Dp3uoFhRaMZXTmGYPLCvA9Ye9ia8",
  "key29": "4g6Cx3TA8FdLEYbt3FYM1rygTpFb3Y8GwtXosFWt4GzzLtHFFZv2CkeaBfy7DngXdT2TfZTUvyQpKRFmbGjwXVMX",
  "key30": "3Wti1cryczHLedkfbbBvfPZSAgFvKzWPSa27avNfpNv6H9HEdpZn1yFaytqx45ZUw7VrK3NQBKukQfwTRCz5XDuG",
  "key31": "3KnxmxnpqMFkcj8RVnKvb7ypQUtRHJaBcNAysRUBVVc58ubAzVWm3Zbu9t2CHKqmK7h5DpnL54AS8bjsZ3r6pdEc",
  "key32": "3Z3FAjgQMNXndiXuXGy48184LttC2GvCb2rEobsNNf4iicGJZkXeyn6q9u4aiftEDUhzsifnsPqHwc3LfkCfoMnE",
  "key33": "3zBaamoZJfwKciucuYS9YnpbqWsukxFMSFD4SmzSLqD2KWKMsne53B2kTLnB2xhFDhfdZxinHcU3XHjtCgYSDrzw",
  "key34": "2t11AYCczjBU7mvsQ8NSbTMGYkwgcw2F3jDfQkr3uRBHoMbtmPPuNaJW4Xn3WMi4QPAtFJZf5eCBN9nbBaimJr5U",
  "key35": "212VWLAjENPAhPAprg7VK6aLYv2dtqTdLrWiWW2o9zxGNbBuYdEh2vwaUioh9hGMT2K4KY8dQe2rrGcYkBqfGu2r",
  "key36": "2pN25W2mwTnXcQFv2ZhvT8TcmYFcVVwxjS4QN7fRdcdwjRuqYLkYTGCZphoW5MGTWhHMfghAihNdKPdnerhNF1ct",
  "key37": "3W55KLqTXDQ72wAX7KBk1XS7kadCRk916MCWFtHqjpKxZUqvnhcrsAdrrC8qYjmnijtthvZzEKcW7tErkAQKCJEz",
  "key38": "5dXz1nWtaEJUk4N4ivKT6CNuwpHaiMGiwqByUXEZL1f5xavE4EZa42jGT1z3EeQn6mf5GejkSD5sEquP1kU53odk",
  "key39": "LgVQEKP4PjJuiXwt2q3NdVsvxcpc1zuPFZ4BSMW8K2zPdwHherto4BM4xXCzs3HV1i2qrvKaQBEUzur9uyXj17o",
  "key40": "4LjMnQZKJeCnxsMtj6CXTXYciCEhSgwckp2Ahy9diLxDBTJ466553pdt2PqzKwKYLRMnRFNG8st5ntFcBmtLQptj"
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
