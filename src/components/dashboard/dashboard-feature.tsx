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
    "51rYZJXaf9ws8dSrphb2ZANDW5bh4LF2uQ6dJQ7BHPdoJAETtEtFQb93QLDUwo4Y5UsGZ3DSty8MwNLRcFCwz6Ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xoZ4iKXgKJg53BqF7AVgMLu3PiAov8oHvUNzF1g9nJybohb3n7goxX2qd5kF7bLS7BvVWXxeY5VTcFXqRZ7mAUs",
  "key1": "4bDSEqynG9BRos3qu6oxDnLuvkoDVdFuUVj2Bts6vUdMVmBoFC6owLSTAdR3aRZm2jXSSZMiNZuBBi6jgcHYBXUx",
  "key2": "5aBtP2b1KUUFo1bXgix1PJVuzZRRQwqzMGeyTqTbmCSBnyPzjqbDkpwno1mX5oRds9RSfHXQUoUyqpypmuV3Hebt",
  "key3": "33Q5tK95ftNRFpnssjXGK9YLAebcdRpNPR1rmLkBuqTkcLmgf4irDfKaibKws4MoSTG93VEYKc3QSvxahm7iXAr6",
  "key4": "5a3J3z18e5kQbGGwo5oreiKiTUpyHs9upcenqmjteUkf31TzWRZvTup2in3sDb6pahg98dkf2ZuDHPsD3sQcRoXK",
  "key5": "2sUQpBxo2epdLNw41e4ECLq6BfjLDfurM9redZjJfKcvtQ2aVDqYxtSTc7JhKkTWBMWjHJ5j6CLahqLFJ8rvBtYY",
  "key6": "4XR3V8ugnf5gp1fPjQR7Ybu2nkJ9vvpGDz3TpYxWV4i64DvAtzrXQJfW6bbNrCSf7TE8F8cQBBXVBsvWwaAkJqFs",
  "key7": "3ucMzZurEb8EGV95C14HsKPSBHQA8wCXDUCeJ5xGqsN7Bs8nv79VQbB5QZDDLvLJvSJBNHCxt5NAPgKzeGGjiJsj",
  "key8": "4HHmxkrguZebgJFM3utuUtvsooQx5wAJsaxEcBxSKaj61U2qfFxWP61AuWZ4Q4hscFLSWNkGvu7DZRyrbhZrA8BU",
  "key9": "bb3nmp28NciRcXxAkSjAcSWgs4fZxpUuRd1mhmjj4ez9q2W1xLsJCVGRaiuunXGsHCB1VyNWJKr7RzpGZM7MArw",
  "key10": "5RxVLUJjFjwcq7fAd8T7N1iRZkKuS864bB1kKM25yA6E6UCL2s8Y5CGnWKXBYCicGa8rPSuhhmsgWbEAcqUdUahT",
  "key11": "UDua9rPocbikd9sQxUhBTK989UBTUzSFAnZhJVnupJeyqeSz4R3tKHFRKcpAicfW8wvBWS27smtDToo58pW1wPt",
  "key12": "uW4XEdn1sA4ru9YPREuMQSWJ5HGdkzRJVN8ZePd5UPjSZNShzTZzzpFkpyGpJJzbyZtL1ihZNw69jHgvFzHbjCJ",
  "key13": "61GWdMRycFGyNW2WSbquTQmzMrcpKBAEDE3EemBh8DZU8ascqwcUkbDeMwCixiPi2vzkxyW4N2Aig7DhPjtiZfCn",
  "key14": "5LuGWQBvddrHHvXQ8BvF2sKxrUtzJiFRVz4NUjuLZ7c1RF4k1Cyg8155piPZM4w92JWPPbDCbNAwqyqKCWyo4T67",
  "key15": "5MMHR4s59igAeSdnPGu4GKTJwwCHQgzpzr66HBA5kK6EGM5CHhEWxCLTT7Krpxue8vpEGx5SgbdZNRuFqV1mSvMR",
  "key16": "HpkkLXv5dXxou9c7PZdYkPhKTwPj1MX5QqGWacdVNa7VqnaBXc4RuRubQv6kPwBwPJkGqqdkwjDeA5j8UrGfyHR",
  "key17": "53p3UcwGTmFpSjbapJEnRnxAa4PYAx4g6kCPHQ8bRX2YudD3SrTF9hdNCtCwTDauRKYkpgTMZxjedso433eZ2ves",
  "key18": "4xWJdgyiw2GrG8S65QsPJibbqKKzaMAm9fNLxHd1qtzbJDgF42RcVfyhZ4G2EBzDuLSPWs81iT4qSrxu7kKzkUAX",
  "key19": "tsbpTA95aaV2NYzwwPF3DDcHASZ6agjNLtUb7nCcuMVadSaWPLKZpAanwHU7qiZ7dZLUn1JQRkSfBVFgnaccAcW",
  "key20": "4ZYgtxcFwsjErawLiRNLXmY4L5eeg8JK7XeqZiKcJJ1Y8AifZx8iJ4AgfsLFofZZ1DXB9BCeqYRoCEMVGtsEnts2",
  "key21": "3fZ8k776EzJCsUn1caxBxfqKzSC7ciZEvELUBReGdDfodBg5JHUuS2b1SGWam2RUyXZ2EXARBszvrngUivAFKCbt",
  "key22": "5FG35knnv7S3KdGeGheydTgDzBE5BZazaomowyC6Mdu9YZbDSQK2Co5fztzWEXLaqpnzGezEPmQYsejkfYUuj8TH",
  "key23": "4ejZM1AWCyWiCYcdDydQNqi4gkBdCqAqqjHVCUGQ9qTiY39LNN3jWGKDVfiSBcjJLwyYEmkLNen5nPSuYcDoozXJ",
  "key24": "j4MgkoeZ58eWkPGtFk2BhGGoPPdCzvF9tg6PMT3k34zhaF85aU6QofzaDNpXg2oeEyy4Cst4BBbb1N9TSqAftFh",
  "key25": "2jcY5VKWa7Ue33xpLF8agH3qACcZsnp4xYHfhibY1WGLeqQi4hre31a7KsbUFzt3EhQoYYcrEWCwB8sMPKzvd3ZQ",
  "key26": "4eDQbhMT43AK4cfrVP8CMcNVkswSGryYLZVHnzsZZwukVpPhPgtx5Y5ERhuXqpby7y4Fh9ZonpujVuGw6UoquZzX",
  "key27": "4McFDbo72ELocuL6Wjky3YK1omT5579h8TS1pczz9AqP7zfSaosA67Tfk5PzC43SBHVRMzPesyCHM6ikjZgMSAMW",
  "key28": "2miRzJ5o83UsCPk335tb2a22pkHLDUNU7qMa6k7SThPMFHESRYpLwsXSy2BGJyxunCueftuehoLfijyXjkeqtB58",
  "key29": "3wKToAR5M7ci1TjbYnUxqMSLhcTbXce4ajWh19gmgZjKcppKNmx5JZvZoGMQMM3PLsbwSwUHzqz253Ga22QZKsmP",
  "key30": "2ZidBh3bU5Vp61xwJr1Ydz3TNthzE698xR6WEGQBjMy633hEp5mpyii9K6uKzXYMKm6t64si82hfrotUdePT3H5x"
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
