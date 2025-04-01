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
    "62kNN9Zy5zoYzMHn8RpefDfoBX1QNRGTCZ9PJyQ2fL8aqzMbPJegZXqGFkeEL2E5FLTBP6t1zvWC4H7wHKKPu6Lk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D8dAys5DLpxjSEw3q4YSFe4Jqvk5NVzDp2cAUidT1gomeT1tJAFmjE5JhACkWenPoPN7UGeDEaV5skELKvcJ5qJ",
  "key1": "2q3YVBYSmAJmGbD7kCiwJsLkbKSonHXP9HrcJjRehbvgcsovp7xZeycXqs6MaJ5L4TpafG7VXj9Dn7Fp3TKHq6GT",
  "key2": "4ToGiiCcvuDJtxSYAatx9Xfq8m7pQCubKvkgk3n5nNDjHqzhKj4DeZfyvWaCK8ZUMbs2iZhtAm7YhLVeMBZHRtkL",
  "key3": "4WKK2LTrbm7Cyk1DsGZ9tuDXDRxVNR99dfmPuznNpqTMuu9ALCe3kXsWwSJDo2nb2w761ZYYR2bHokjQoEf8LM8F",
  "key4": "5vUZx2zg4ZaqQMypQuK1q664mQ4UXhewMh4vBynQ2JoBHz2jMvuPzaWAVJssMTkYPgCU3Mr1ovBhh88jNDkhwwJ1",
  "key5": "4ceYTzBs7HbQmqoXhTpe2phhx2quwjdyxoJii7Mr5XxWknLPqJtkjqZwoYGK52PMF7YH74tCzs6uyHUapK9cij3",
  "key6": "2hpHkM8tdzETcKvZXCmXKAMRAs8L7N5xVJLArzsb9mdx9dkZZ5Z1VFMzTE3sSBcfEyPZGZxHpxHVD48HvEERBDsZ",
  "key7": "HZNBX38HovjGETfjAG5BYsUm6BtSbn1awja1yctjSGgdYMzyzx1N5ENAR4kmzYi5RFWTgo3BPpQqjJUNSwnjdiB",
  "key8": "5nsZtFtuJTPvjnasfauW5Fpdeopp2u5EQgQji1oaPCqmGgB1tdQWskhwgiCmcRnzmAgT6KYCkUthGNafVJajG64L",
  "key9": "4qxjYksGGXW7GGQTCUXf15ewRWLPBp38FRXSkmcnir24wPpcUi9fuGaq1MGH1vpFawrQ2mAzqs3bBRa2sqtQPPV5",
  "key10": "4c6a6j6tBSSw6VAtj9rtuv9xLY3XLuaRLeLQFZpvk9wzfM88fLhGYK3SZoSGR6GApD8E9MyNo7N8WfGJUS25q4Ko",
  "key11": "2UEVpmH2Noa7uvk9RSpSxuJkczPZNJtBezbMfhMY6GwX52nmxEaota3oA3zME2ma2R1GpCtPzNaaQdj5jkPEcjTd",
  "key12": "5JTV62UTto9ois5WtfpHeroQ9aHb5ZqkgvoGhEMMrfnEyzQgP28ZkqoJZd26WUMQkQweGGwLhHApC1iwh4wRTZF4",
  "key13": "4jVPSjoHpRVXERaP5AJGsGgDb8k6VJViy3xfVaydFpy6EpaXVx3oSN2UAC5pb3irkZLqhh1cPpVgPs86iBajNSyL",
  "key14": "5HhzTfD24y4K8p78Kd9JsiymwGHTYsfpkgvUDpCjfktsn2kTZiGcjWMWETe3aCtPfAXdS7oUUDNkdybQwzqSGNzi",
  "key15": "3Q9Hi51z3N95tChmuzm6mEDnwvkNmJr8etDMDVji9atGUmZUvdFzmeFKcUbRtUu9fwc7DFXajgWsxNKQpUrbRWr1",
  "key16": "2iW2WSpG4kFT1SQvZ6d8cu1oKYrN5wLppYe4EsDiDAWfkry96RyUA5rjL7jyUHtqTsxcVb3tCx8SsuwFXhDH2bPS",
  "key17": "3JLMG8PVdAmKGJUft9jtz5GdYff1xLmHQwPF7sTG6zzpvtauds3B9AtEwKTzrDJ6LT2dMBhfYQHewaZyi2DrdLLY",
  "key18": "5jGNeY1owXCF1t3nhLRM1eEFjFQVCRgjT7jPnvgmiLfbmSXf68iJxosapuk9py171e7sVMKwjykuMRfiAFMvWSRB",
  "key19": "4WXahx9a5Rbr7PC5BRkxnwnFi2x2zUgAoDYmFE37nXi96fBnHQRJKzcyChNs6mWnsAPAZ7yA6GiqHoQsd6sReBAw",
  "key20": "5UVswG82uku5EtLdrCCWtdMyi4WvrRZ7Ug1NEEpSAFMxoAxccexuh3VaChWWS3d8kTU6MukSKe3V7ZpXLTs3UPFj",
  "key21": "4Fae345VjMRoEhwunNW3oi4dnSsKyAXiR7yN3H7fTKrB8jdfYxMe26cquhqp9WTDJnGhJ4ZtYDf4hGpg7J7o7yS3",
  "key22": "9qeECUdgXrzuHVKjDV4hxuTwWcVk4bRhnQdirjkpnjKDbBcsiSMUx7QEdBxGxpeHqLfkEGXY4s3yDAXku5pTNok",
  "key23": "4EfmcnMbV3RyG9iX6kyiEnRTWrnj4LAVDtskAC9T8E3Smz58bkDfTjTSa41LKiGjm5SZ1GFquLZuXhwhAhKEb9cc",
  "key24": "5w2skzy4Zfzbn6RSptcphS91ERFB3VXzPFZ5q5GhuWnoFdGpJvPLw86zA6h5exrX7aKuN8dfEumVkCPzB2BwKHju",
  "key25": "WVJKhZbJVw9tnoCNBspddzQUNjt7YBmag6gJYxTDGRyxaNQc2rFr5mFwEjuK8Tv7GgFp6iL2wRaU9LTsUPJ87ou",
  "key26": "5KwGshThCwnNn3x1wzs5wwpAzdDjrypWVAvh14Cdtq2hZdZiQTVbaVUzSpfW8fSEViG5fa55zkNEfBJ5m1BtYahw",
  "key27": "2uo7USGE1Vnqa6Bz6m6pNTADCJuEC6cytDXDX86JPH9RUFVLoarWfQQ1ox7JkGupGVrCLzcsuJmV73BrquDRnSR4",
  "key28": "3oqGpQC7D5ZoAGQ96DcSyYMqKom3vwhRxpzrMsqUGqXo35Yk7aAXNgvZnk4D3vdWaVJ1FRx8n2bLtUbhAXb2s4A7",
  "key29": "2a4VNmxFcgRJBVZePGibrxyWfpHCgiqEHoVoU5eUMQQqA4jMNbCTqTnt3C3mtucPAePs9Dd64PgViFsLLrW3Sa3Y",
  "key30": "2QvgRkuzBCS4AnAVMYJw9YKtctCnexfMGRRFsHTMHEu3wCdp4dY3xzbkMt2D5JFUpnVvjPgpGwnYc3FHvuFyay3y",
  "key31": "jD7B7mghzSWtCU6DgE8kn8rLZhPn79wG9iBsCwhrFuRrYoymnj34kjpuk26FjyxVxdTfMakFytmySgL5eYsMuFj"
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
