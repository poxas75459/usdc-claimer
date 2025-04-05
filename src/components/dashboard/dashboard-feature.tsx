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
    "4wAWPa4WFbPtNboFMV5Ad4rhCDcbB5nJjjv6FyVJro8rynPN9dH4gtoayBk1zoaS6tBQXVWvgGvQQ3goeu8HBs5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SnqadEqNDuf64oFf8ZsMxxnKn6KVWcH8jWx1DNfvcrbv5rkk8Ushdc45oMB7JoWx3F91xzTG2brfE4KmD5uZyU",
  "key1": "58oyVm4Ae3sb4M3uwpZWvHC2cRgAJeDyTyNoZ8ChNxBXY9yUuhFKyqEVcXJcok3sAvobdDdxUQ64dDkGZWhXu5Cf",
  "key2": "jCTFDUzb7xJThxNzA5Pr4hpdQf9vVmyZtWMjhZ9yHs7PoiJYWBqHvz7QWqVCPpYYZq6Mzg8rU5ZCVYZVCAi6z1w",
  "key3": "3N9YU7rSenan2Focb2nQggV2DvS37trKhLy21wveYqn2kv8Dy8bRs3bzvmKY5xAN3sPriHsX1Lx2CSKn4Z8XERU8",
  "key4": "5SvqQuq1A2DdhS2acwgCMdQL3eZK8qrkr8DC5QFQayWPyQMRJb4R9pebj22fWNmYyLyohnYDnrAXZUC4bNTar6Y6",
  "key5": "2dJih5smaCjwSJmFapf1BJEucC6H5VSPpo4gYTYthAfVwpo6yKrm92sKW3XXYjGaA5iRtrHjBMZcheHJcK8e3dzP",
  "key6": "4Lqabdvbzqz5hLxNQ5oGxpSux1g2GyKCPw8bDfrFjnUH7x7abcQ5G5kMTe3hGSd5FJZwaRJb1kaopPQymcb5hctZ",
  "key7": "3ePG2yLEqpA8Wn8bQEuouTed1jUXhU71qRnzscUg8UweJSxn2296mUP6Gcq7D696buh8uZPqur83JRYFxDfnEmeb",
  "key8": "5vXnPcZ4LJGEgaqVXeq99x7mukX1FzrcAiwvyh1EUwDmTgEr2gbUmtJeiDaT6x2VH6xwQV531kH7yMBMwR3p2CdW",
  "key9": "5JUgMvjz7EyWyEXs9Z28WFCL8HJmYHQWNgoi1G7R7zpa4nBxKdLssWQQtrrZFW4P49YoHF986FKq7ExxcpWGghjm",
  "key10": "4zKtwAvxqt5kXnLDG2KRmEpRHDyej5bwNdgka34vgbFL2pc8qkPw9xgLSDaiTUKHB3mXZgpTUnCJo4PdjP4NKRK",
  "key11": "4mGZkS4oTrhJUWTVhAdpsP4RHWaWeToVscS47MDCeAW3FSibFufkxShNKaVKysUJ5fixTyVC65Ao3mWWMgbuDtRG",
  "key12": "3HsxMxbzpPihckv2mqzcD9mgciWmj7XdxDppoNKpdLXiDcctx9eYyAt7QUoNSEYAZPRscbvsD4ghdQqi9H8i9eoM",
  "key13": "3ApKnuJQfzh7kNVSZohJkTvTcRrDQ7zakRpLAEw2d21iwNqmmfZDhGMrMRDpFW8yk6PYk7AowsW1CNqarjLgF31y",
  "key14": "4q2vK9SKGp4cNCZ2KR5DAp8ng3LnZscMoqcXNgJNKS6LdkWkvzevbnYUuNudBcSvYM6CdFRJXyzaBedWpQRS9Pqu",
  "key15": "5Kc3WujAfrzSbVWR2xTqfpJPh4zQwHfSYw584Dxk2oyWzvR3dY6bSH9cijLzdq2n4pbCiajHcFxJuCi9w8KhCPKh",
  "key16": "UAR45xgrsgpn6EABpidbD3Tetbuxx1EJRtqrEyc69DLFEWzY1VVaG8bEFpGHPRNjUJfxDydbPf683anGVgQTF9M",
  "key17": "wMXgnVtSB6DMZCn3kfV1NP57MMrWeVYCWX2bPC8aXmXHtd7SRfunUD1tS56kNM8PVNHvCFnTJJQQj78szzmN59r",
  "key18": "2yUn2P6cepAuMzBaXaZjjwfDPTVVhXdTWtRE75JJgKCVStsK1zvMF8Ti3J217uWMDEPGGZaFV7hk8bjJombGKVek",
  "key19": "4h64jZovmuT8PYK4voENWSE3i3bVEvCyy9du9RarjMobyCvzs2bDPL4G4CQN6WeLe5CrwTrvrG76wZCXYAzqwcLF",
  "key20": "C9S7f9J8BkivVnXjyFakujqtB368xxdrtNU6PGdg3BX3q4B3k9GQinVic4PUDoNf4XxyPrfaSa36rQqzQZPT5Sy",
  "key21": "2CLVG5ouB7rQ58MxzmB9nJ3zmxo7CpF5Btr82uwnxkYME1PecbAtTpNV9tK1jLK1SFyXFAFj8Acgp7mgMwAL7eJZ",
  "key22": "33po1V4uhMAdS1Bzhj18mKHzQvqvDyJr6Fo6MUjeYcta2BWmTkyHpBSFcharRs8sTz4Q9BYtY8NY9HTycuubwSay",
  "key23": "2tkbD5hfSWQiJ4z9TkeYjUz2BiYgb1EE8q6p8i7Rc6WiQaCqvFedfknVyibs4vdsaHmZfrHE7VAVbxmYUymKsJMR",
  "key24": "3u5Gwf7SJkMx3Kj1xXtzcXP8EWppG7qdDYcoARDu5qvB1nBPxwjFuBtZGFAgwmeZXTxwvQfo47rbvJuViUnv59Hf",
  "key25": "4TLvXHtUXhYVdF2n28AEthKTM1RrHbdL9dfxr97ds5ACuGm97UtG87sjyWp3TtqgXUwYP8AGppJ1B26BF7EmaUoc",
  "key26": "5LomF61sQ7pb3YnardQ9oXXYG8Z4d4P5U7893fcfRLmGnpaD2yKvWq7k1LJDX5dKAwhXstdStSpjh11iuN5fBTYh",
  "key27": "3Cmw8kpXt9Yjqtm6yDwjDBTejB9aZiakHHxHvZ4MyiD8YXKiXAdG42CZAstVzd1yqAJiF2L89KFjMvGjYMq3v9wW",
  "key28": "2YykuzhJWZx64RCSdrAWJMqvs5xwrCwo1vbaP2CoG3S831wJ7u7bcV6tzvdu7tCLrzBi2WwSFpvuoNw19e7czUEZ"
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
