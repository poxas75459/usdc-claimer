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
    "4HATv2UBmjjA6Mjtcg45nR1xS9ASZdRXMiEWYdrDr5e9JJUh1WPbF3XB4JDgtkaNmBfY3NVK82bErLrtmg5cwA72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SNUuut2brV5Ryhwvnu1syhiPKtoumm1AXqpqD3bSzVGiTuh9n2RQZxsG3Hubwmgjgc3G2PJnq61jFqinqmwtXeS",
  "key1": "23GLAi75wrxy78MUerursrWAHJBtjkdm6nxYNwTuKmHu8bouLe1P9DVAbpxd5ZieymwWjXbAe2cpyG6dcyChxfjR",
  "key2": "2uReLDFJ4GyfRsrBoRVe1WRoSxAmQ72iYJmqZFCrYgvrtTW2CfZpzhaojpcT9RLTPMuQgbX1Jvyr5xtr855V2mLz",
  "key3": "4iqFxHAHe87iXrJsJP7Qmh1L2v7o6WiUsDJe61UMbyigy5bSBdd6noWArQcdKZCrrCF9NQiVDesrFpsUpstCz56H",
  "key4": "64Fe4NgaAwxGJBc9WE7PR73GPeLJEnR9ruNsUyJoakhgp8x9UFuVSq9gP8KD3caBp58LBLwqvJ6T4Dd8Pan6hR8J",
  "key5": "YgM9jdPFYd29pxhvnUUPbe3Q7EvEoMVt5uYa2xeJw6GumVPWWReuEoPbnM3RX9ZS26HZ2pSe8PYVqFX4yxUTvgk",
  "key6": "19LvEVqmQzt2Trd16KCwfhwpBa8Xb2advfxSLwgfYZuhSFAbguteFzniSjQ15GGCJhtugZaSogYh4ZBszkeL2BH",
  "key7": "2KSYuuMKugFAfGz9dQGus4ndmeez1rJshDNhfwyhrN969SAuaGrdohgddjkyKoecpEJYMvJBYnbfDfzVT7bk91kv",
  "key8": "28BwssegroRpykJy3ci3LLNFxW6Dur8MJpKUKU9qeTGS63sacxu3x1ZiSPbV73bituwhKfcwpmysfBUiphVHXF5j",
  "key9": "2mn7aqEK28BwJytwXYNiQuDKDEn95M6bx53axqV89vEFQCyUKfQsxhSNmLUMF5WtrMiVjm6XwhUtuR94czgMNGrs",
  "key10": "26FVMD5d49GH4MAf76J9WeqNvLDPBr7KtQL6KBM8YjodXU2uawoyEwhMWBYk3ZA6AVcZawAGGhckNwbgHGdPi8UQ",
  "key11": "gngbXeH11H22xMKi1JFXR1tkH748f7TSp8DshXG3QH8GTPXUDdok3uf5Y4JErsJ6sXd5LBEDM1SMX4fsNrcygaD",
  "key12": "3SCyWRTLcjyKq527JVwwrSRPhHiin5yEP8Kd4ynSSFGfQXyLxXXhLayqLbTn1kvxL65EUmdis9hfwCUwr3fB6MoE",
  "key13": "2TNqeWjRGzczChNaSckgSV6rBTq1nbxzh3jZj6JnHp7tvLCuF3FHdx5nqqaoK1KFY4fUPPpWccAgsJ4WqALhMsWV",
  "key14": "3VAi2Wihyy5EPBou3SwjheyxCHxbq4R2juLQGgmd1G4oHHJG4HbohnxLB63PBisxW2H9JKLAyXy2hz7Ah3NX2Rxi",
  "key15": "3R5SPqmHPU2pS9z5dgbcCDtrGxxTHwYgn2hyiH5FUibeuykL29NvoWATy5taFqnPdGzWW9KKLsDcS18d7bfJgsD3",
  "key16": "5VfpWsGY56En3zVouvgLUdF9n79S4xsKHBNSFGXZYhhLUMZSMMwjv9RdxEAMvxadCJ9MfYJFQ9ktvxnxvvkLkDQA",
  "key17": "3mYMMDv5fKYhVbdho6yEVuqGFL5zjxpmphRMCSDA9ETeFQdDQAuAEJ2T4fZgDF1ENEmN8BKBYMxdkZLo78t1wuZ1",
  "key18": "3pNEJmvdG76zVBUP7hMpmcikdcipQrmJk9adBAFSyt5wGPFqmr6n6Z2xvgPu58yDZ436i9sanzZJjymWG3SkQTHu",
  "key19": "Bw3oifcR385YdU6L8Hiq6wWrwz7uZMLuSMN5k9aou2WcRzX7NjejRVnSA8hnWL7iaEp7Yx5SKtgGBXnwTmn8QBz",
  "key20": "2M3UjgP4dhcsg45HZUHhBUQvKQUdprRXtFCTEfBZX6Z3ArkbQhrYgZ7nH9DdrUMehNQQycvWDcyxKQY5MwDRxuFT",
  "key21": "4DtKcjKwqF127Zf1stYy2JEp9Q5q9wQDtge6CNXx1BnSuXHvZu1ArJgNwaRz62DLDSyF2UrVDGXp62fUE9RLzJ6U",
  "key22": "3hBjigTsjESejsEKU9VhYYhWs7U5GnsCPjiS3cx8ND9KhQBd5YhsehzL1GauKu5DhuHTdhSe4MEZ1qSNmgxvsKr2",
  "key23": "DhLGKoh6ohvL6i3NGBhB46jydZMwvcaSgyUu4eAiNHkfmJPBDA5Gt6QTxmfs1RiLaf26qdgiscfHrcZfeTuV7Rd",
  "key24": "ox61evx68XA52Wh8puuhds3XBPKafUmKczrtDA6K1dX9Ca8HyvTx5qTVkjhQsxZt6WEobgm2NvrdUPvaCNxSumQ",
  "key25": "2kDbVp9ocXLYz4SjUnMZ9SV3EPvwHvVMr4FqQfhx799PvvntLk2QnGCSnDoYkj8MTDfGtroY7CUdHyJU7WUQNguV",
  "key26": "3nxXVpS4nguJRPe5D3jBctVtBxunR5o6zda6pvpmhpw1UaVDLURkW2whuzCTXXd8siPWzYtt5KpGxr5kqKEp4gd2",
  "key27": "5srucBPh9Bk5fRkrmFh1nByrUZbmyCUMHi9LTrsMj8g9G8PzUefGWXcdGmCBxtzZjPoKgtaUdieMdwyW5WU6UD8W"
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
