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
    "24gqmxEL6LR3qcpfxzPMM6hKpSMaBkLJs662KuAUWcQCvy1S37gnUzUthfYGae3m1ybfUoWPA4S3X8tCFiQwr2oC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KDdyo5Fj8TaoRDHgkUC8aXy2MV1Rcm6dSpQaPq28GiyeFbrrisf2u9g2Yb3ivMVbVbxF27KkgEnK4iG3xS4quxe",
  "key1": "2Yzf7eTrgNuJrfWtcaqSSCLaB7jnGdq5ttF3GkwGRzSYjFqbWN6t1wVETFw8oPKKNEf66u7dLf6PfBbTrQgERsBs",
  "key2": "3GFugi5WgcLjAFMtbECeXtBRSJY2ywh6VGjLi6zJBA7y53J9D2Uu5hE8UQ2beXCLaZosnDn57KA23onX6Sc1jUW1",
  "key3": "2kt9x2q3yF3snBKwFGrfHbsEtS3duAh62yFH3HzaF5znTEqtF7fp4UHDsnXM9tjDQzRJmjchF2HCTZjnfhUnQBnm",
  "key4": "357FnJdCnusxweC47eGRuLHEu5Dqfkv4PLYVmPmv4Xbz3tvM5v1t6eK5BkrWKDn89nS2fmJXdEzBtmywFJUUMeQg",
  "key5": "5KPVNnE4CpxYTMhu3KXCE4TuFGva9T8qRHei9qVLqBDZdNqGY6w6LffwrPdGeZHaXLmk9pKmQkuLZ2gV4vwdWrSD",
  "key6": "2c3Nfz5DPCWpeKWxn7MPJJV7kVC3Yr84GN7rc8e1vCtPSrsZkyiw3WKxa3LEFCxpUXCAashmfco9wjwfYS2htK6B",
  "key7": "5ceKLcHpJJHw79SCrxLfe3rkpRjTn5cLeNfJ9XsPVgS3Y8UYi3BdQHjgjndRn26ZwSWkjjCee8dn6UygUp1bpcwf",
  "key8": "3PWYxkRbquk8PmzxXt2qjuGsdtADdLPHhwuXEa2WRTHbp2bCbh9GoSj9MKFmSSxqoQigEnDbCdFe2YTs3txXW63b",
  "key9": "5ZCuq3MvzHZWyPvgp578LkhCUYE3BXZAumhFEA3i4EnoJ6vBZt3BxK2A3bEQxYBGji2BQKkJRd76jryRUyyNkyHe",
  "key10": "3UDkfQ9qnXrZ1bWpGnVWYSi5MkNtvwwQrUpCHo4Xf1WJnRL5WrrbSYW2t9qo6WcbGpkXNZU5BUo32YNe9TMS8jPq",
  "key11": "436dRr5UwPhrsKY324mQQmwFziAtujvhBna7ajiYFjvE7kW44e4f6mdC7sf2a7ut1FFBvhFqqL1wZeNLYadqDR1J",
  "key12": "3T5ZFyBz4y7QB4eiTjzvNoBg47cZUSLjLUG6rL4DLESyDVjKysNVQKfQcpNhpASNCy9EvzfwDQVwUNzXf97MmqvV",
  "key13": "4F9oEiMY4iB73723fxPYjMoxcdAUwR3NpPTmF5TZBkyyCYr6mjFmvrKMCejWpQRj1MCg6mhXKEVHzRL7JHbjj1gk",
  "key14": "2iWgPf3p1GJhZD9fCwxkouQW5CvrsPLu27poz5Y2Qfb9mLeFX5TKgPHfMaKJhAsbjYpD2HqRwJ4EBGzMjJqynorK",
  "key15": "2wVmNBjzgx5sxUfSgdQ1q8V1v5zZA2pxs6LcCk2hx9tPrUpd14sZoPBWpKxnkshuAH9LJncuzcKNjkYuVoZPmoeW",
  "key16": "33522mokDiRGmzf7uYXpdadfYBSu3m73TQVYTtfS8MavgjLbp4x88ZaaGtQf7aEiQCPGo2C5D9h88tWdiK21mGqz",
  "key17": "3rJKMFHvi2x4qQuR9nAJyUJ9nERaKdBhoXwd7KxoroDXYs2r3FZQk1txp89DM571xKsfocGKJor3WDoimaKrskdC",
  "key18": "4GLPFVZmVQb4K84xzdWaDXbADjJEqZgmjwfd9Len7mndJqyg7sEY8GcBJoWcJDsa4rwyyCYRTEQ5rBNFthBJqDP7",
  "key19": "31MRXBB28F2HbpiBRZ7tPS6BbiHqLAan2znSEPbZPxksdfB4XK39pN1mDbdETaFnA9tKkYzSSDA72bNntcXaZs3F",
  "key20": "67mCve6X4wt6U9FEQu6vgqXnwb3WFj3AAFyMH1qyxmhQb3Zq1KyS8JZBih5NKPbxcm5JLLouV7c1EA3ZEqzJSpX1",
  "key21": "NYUXA9YcZgQq5rm8ixFppYaj2haUsUGAAzaLpWr9YYkm7wKvcDDQ3vnYtG4Cc4vshLSHMerDRiXgHZM8uPSprDq",
  "key22": "iFUWPvRkgJEzaswcwZfvtuLnQFo6Pc2GSTMZqKEM1kaXaztdStyRYCFzZQisZk4tT3EjfqrVqosatTUh19w6vLu",
  "key23": "2VGWVqtBGU4ZL2F2fKNevPYkEK8YE3SoxL4qj4N8dXD1mGb45x3TAPyyaB5PzPniBmdvyDyGGqp5dZQdc62LHS1k",
  "key24": "354hj76PBgxCPQjD2fxViTmCspoaRjSPC7stAjvcCQ2nBwcQTsPqYsHhZjQWot8LbUix3nPCGt5SyXZPcWvwKj8v",
  "key25": "4swdB2xPYvebZkRuRuETtha38shabz59ruDKbyWfPCvfsZ5ZgHQroEkpKheKCBbGAtKyMcz9pjcPFcaxDWa7J8x3",
  "key26": "45HqBttdGgB4S6cmzqwJiLzeLs2Dk5FYZCpvsxG1bKauoWTDhEWLMLCkHDVcUZZZFqFu2SiCesr4S8dst6kzR36g",
  "key27": "5DZvNQLYB9zGTm879PkRerfxp2tW3x5JtEW1JSwmzaBPQdMG8K6Lo5rsfMR5sKCSbm99pJMEgjLE4iajJjkDUztM",
  "key28": "4dNV66CpNtzxotDrVugnEwKc7i61wLckTDUJkugtqgiVna5MXbHbzMuMbr9kQM6mbNze2xsWVUCcy6V1sf4fMBwo",
  "key29": "3iXxPwxZiE8K2SSYi6dMhwQB4vkuQuGDzXqXeMNB8XgHE3k1DuvbsRspeJqz1RwxKAkTHtc5dRQLLPQjWQ9NB4oU",
  "key30": "4tajnNQae4o45XWAxrtLDPvWy4DUBPZt9wRRCw1d7HwoxPPd55NuWeT8uEqTANVRRsfHzYEWmtEXZ2puk8WF2Hkj"
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
