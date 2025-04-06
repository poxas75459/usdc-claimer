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
    "4Vce19D5BMcTS7JWjTzyvKo7t5GSRHfvxHHDX8WkiySccdQrdaDMZjs27LLDncRmEFLf4XFD6mpbtsNBF5f8Vopm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPgYVYweKw1ikdw7xU7e1zijswUdrrCvYv3ShbthndkESPgHwC5ActEyt9ucMBqBs1RF8CQcg7xBhesZ1aiKvHg",
  "key1": "2DrcpmsAmDugkveNYswtUWm21mvn7TKbq5Y5CTonNyEj8nhSA1tAhvifrp8PChGR5iPkU3t2rWx8vKHvVYXfcBjW",
  "key2": "2bEpteCLvDbhEy3EEVyY1u1y8mmoefQngjskF3ELPCrzhLJYDquK1agqkuuWjDpYaSxfsf3bkbKAuWdxpssSzp7K",
  "key3": "diUm2bPu7iqF9ZK1iuH1dzN5ENDUVUbNAmAmtGtdNhXwH5SpCXPUnZcPfWazdcVM5pkRoCEw2iLfVZ3sr9nnusF",
  "key4": "4HfYzQ1rHEaW3HbeHzJKaE7hJ3byJgvufrXe5h6Txk6UgGkQ4NiFZvLGHpCbgkZhNvcesHQVZK3HETzNo8v5KkyC",
  "key5": "2LyF7UqUiJNykn9X9bS1bTp9mDwutd2Q3Je8aES8trdj1xyEX6a5izEJN3mFsh2h7aFWhq9yR4eSgqw4GgvKcczR",
  "key6": "2ofibsp9rk2W18Ntvz68uUGH6iJHhi9qgFDEC62ufw3uH6ZFqu78bWp8KAUCA8jLVG3AkTdo7m3FnbdW6yhaFEmd",
  "key7": "4FiqxKXw1npuEjX4UKXD3k7R8qfsNK69ALBWVqxLMBRmQG67quob9DBmsZyWxaU3LSbrCyYBLfKewRMvveBkExU4",
  "key8": "LRe29L4HxvZAML5gaE9XnfTJyBqWTVVULiRA8RFARxuNdorV8CQMfkiYhDF56Ht3Vx7HPkgUY5BumUGp6FBj3M3",
  "key9": "3uyaeitBGRtBumQHsmDgaMapUuQcoRiWid4DQ33b6yv8KxFvPA9JuvAw9deiUT8mT5URzyR2Q5jWboED86fc6GJh",
  "key10": "478k8JjGjTykvciA48CrNGmgpRKqePRYnBWkDjZ2CdaKrLFEAW9aUPKcfpH1ZWxk5wmUbU3uw5EPHSPT3aPHFmQa",
  "key11": "44sNVjqt3hcScisCm1QQ3wYQAtSTsBiVUUiKfjQbRvBauBVbYepoEAsuzzncfHZs52TuXU4A1Zkof53CgbDvCUqi",
  "key12": "24xsfYJmFgXz5R2V8SmY7jD51dS43EpbrAwSf7pq7mYaSPCdssTM15AteKq6GG4G9KteHw7ewsf7r9XgQr6mZTQz",
  "key13": "45ctDAsBtV34rXALwKkGGpChuxiUkraDTdSQAJj1KWCY7mRWxVN6za8GJxVqzwXJaiqjLvt1UrWdKZ6X2y9z5XvF",
  "key14": "5JFi5oi1qYsFbnJkJjGgtT4RCz5pZLmwGUASWFYpiL2XKcts8P4CPPEZiZezggGhKPkUh3sR8dsChAMTjZDps1dM",
  "key15": "55qp6iVyryghc8pSLVHT43D9KkGhnJk1Qe4kfzruW86AifRt2zc7MaYVVpfgWik9TgM5rfKDaG6fopBz3eXTeYxb",
  "key16": "3esRHKuWyzFPciBMYEX3TidWEpkCpnPW4LKpQNdnYDoWXbNFS7B7Wx6GZChpjrRbWuPkwpC6uuFWTZGEcwLkiKgg",
  "key17": "XYePGAxHVDf9xKbV5YU9qeCYGpk7t1dAX2PNwqsrS78Dk1skn9TVrp5Gah47rH5n35kEuMiWYPByPtNPFTkcacK",
  "key18": "3xTKVS9VsdrXRRV2VJAhDcdTstnEPs6jRepTQadYoULE1E4DxzbYzLzQSQHu4SR2fA8sbtcxxXfVC1QjERBVzG1d",
  "key19": "2S4br8qMYsMHcDTwq9xSBy7Q8UeJgXkn4cfYrV7CYr91iPWrxDDBAHotT5rcAbixkJQYUFma2iEMD4zvMowYW6CF",
  "key20": "62Ugux9zniWRm3yiH3SYSde2Rt3nnyh5uLaSrE5ucqjnZLtG9aTaxXJ7CfXaUiHzxpsbCBaF8aAzoWMCCL6Y4eBo",
  "key21": "jdaeaMiMSvPzqYvmHGdN7ddjMZrK1d28zD6hnTboggr16n38DQMeMH2a7RMEcQyz2dgLDVCcJkWB1aDjJJwezou",
  "key22": "3Xkm8UqVXBS5fyTu4rn8mUVW7KwQAWCmwnfbu9W1jqQAE8XxqXQfEa1dCoK6p9xwHrwxnky6kjTxZsPucy6vNSU1",
  "key23": "GjTWqtTUV4fB5WrysZEpCqfKkphrS9K4Qx97nMCVW94L85RbR46peV9411Fd5smmwSBwcvkgKkzF8kUaWSdgxNN",
  "key24": "2gmT3dkBzNe9tAF4fvVGcrbsjMhC1ztZ7LDHCV4Cy37JY8RsEAmDMbh2svoCj38EbvF4hSMmud6ZJ3V3tmB5VUyU",
  "key25": "4cTncqtFofqzAMgPnqQ4GgN5RRJQer5Ao43NebKxf4RbQxnRFqvQWiVs7mfoZUaFY8P8FbtDkko7exm57R4T9zAZ",
  "key26": "4Gia6Msmi9uAxC3iiqN8CeyGeVFAmFdg6jvrrFcnAzNvXndeGG9Zc8nMEXEPvNBqHuyJjekkDdQRbCeqWpWH2J1B",
  "key27": "4E82mcv1b5YdFNQJDCrRDGiqKtDCmHMsSs7y7NVEBdcWCU5YPRKWR2uVhvogRLPRAkxrguSyxGdwaz2zcP7kfsS2",
  "key28": "3mkrhfBDWjaR5uSU6psWsY5W5WfvtkLoE3SyyYD9TKmmGF9ZJ7TJMHNZVik789k1bTVbaLM8oUoQdPFs4o9YgEoz",
  "key29": "5qgeRkmuHRquTp2WfyyZfyrbp8CS2YFjzk6zJAGthuuD3nPWECctqqoDtg88USKVrpWViJpDJsm6hN5jWQr9v5LP",
  "key30": "NreQ1zcHC9x2hCFacL3e3AAftXkTxppa6BE8nUDbE81g5GmApxTnshVR98Fr8nGgqjKPLpjm4qyTrS9yryPTLCe",
  "key31": "xjLugGjSXuGBxKyJrAawNtzLss8ws1jiVMvP8iUQ55WifNMBHBcHvRoJCZScofZ8zn73DNwxD1h4mRirku2fURe",
  "key32": "5uhrSvMBjL4tq8pKyCa5k8LngHd4RW3tFoyaTbEL7LqBw5Eca17yxn1AzcmoJB5MfTj49NoE13LH2wNX5t2xXVB5",
  "key33": "PYCF1DcqLg3iX9VyTUXc3NQjpcmj8JYNF9VLecyozgp9cPypxBBXWHscs1MxoeLQBYvngsLG7uqN4z7LG13RyQC",
  "key34": "4rtJkuic1WjpQpjbaDM1c96j38xtcDTQsf8VpJx4Sw5zTfekCw3TFbY24gezbgQkDGTsrrFGDkbLqgXGBimFLjMc",
  "key35": "4o4mAtaLVppYW8Ucc5Wj1Un6eibzJighmicdTXpFi7REzxWNMzJnezxECxysp9A7RshkjWRW5mLrVNaUze3txDcQ",
  "key36": "3ru9CnhonEYBPxUVPFdM9Yy47yrpse8aM9WZPz7TAMkpDmVjEg4rGkC31VWdJaPzoh2PxMhFVg8H9v2Wj4UEvwVF",
  "key37": "Efy3VxnSqeoFsCeKDDiKyD4SC1V9z49Y5ohz5S2LTg5iZWCkHaGvhRzRc3rf7VtZzr5grDpvP6Pt4WwYFNEw9fa",
  "key38": "4JwukvBrBoNZRkpwHsWmHSam5J5XFLr1Kx9ArLGvNE2hX3EBRYbrZb4mTLAdj98X3aQBKGc4uXBkHACY4VjWFCEy",
  "key39": "5uBqUn6Ci5j1yWQW27NRcUeaXfX7NNSJQNTkioMp5dLWkQq86Xf4grE2W6oXQFkCdUmB8NVg1Wr8WXaLvCftGgcL",
  "key40": "2EyGAt7zUBgmbDpomR8HKzkHw9BU1AjqtmVib67DDz6iYax38xLEd2dPStjmfGsxNfZNZwPHY9QEBhojZ7tjBckp",
  "key41": "X5mD1ZBBa7nXAU82HXFmNL5sC5NxWqrbim5EMjqHUrnsV1K3G7TWV3ycJTCJ1y9CTesfFmZRb5MCMrQtm4rnGZc",
  "key42": "5PG6WVAUe4NbfBNikGCjvBw4BzxDF9obfuNmHbmgFb9LnKghhfVf9LVcamqnbPJoUapsYLVAimiHfcjmuXJJnzFG",
  "key43": "THzU5Rrmihb5eycmVEwsmobULagpEPFPaE1Cxqk8FBy2u8QRsQ2dcauzcXrv3eeFZZkVj2vRv4ahoW4PYrjGcqR",
  "key44": "f4jBN4Jb5DtNCvz1q4WMnvAa8mnNpENNGHR1wRdpkHFk8zTmGzAgBaQcBW3wQMRKWKMEd98w4uFjvFVh5SnmnKj",
  "key45": "RjA8rUXZGpjXPra8Rk5JfVdB4UxMAR2Sy7tdQxnw5mjQLwLwqA8nXMfrkybjG8wv71ifZQZz7WzzVTTivzv35Yi",
  "key46": "FfZGmrJ9JtxuGduRGrhDsWtE9x3FGnE3pkJTFWhB8na2WA6nhoxgpHA4PAP346cyMU3oNR7pNrbjtuf6qKi6rG3",
  "key47": "5z7TtQUQ1zwKiYJJySFJZMvxJgS1Tmo9tEmKS48DEM1A51rqqrrzN9a4BzfD7NWWmFooEEBMoH3fYghLDeDyEC62",
  "key48": "2Hvk9SoNdBE6xzJLEn9SoWqLeQZ8wPaA5J9WE4GEsaRLVdSS138bsKWiQCYBsgGtRGy7iCX8fc3hk2FsrsKFf9ij"
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
