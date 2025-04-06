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
    "3uoZSzwntyePdM1VWxvpg5D3SRDvPkBGNUWwZo4p73EkQLXD52NN1uCELotVouewQm2ap2gKrBoueB89vC6kgmG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zWiLVwTDRGeTsc3UaEpBVhBmwzCtizfg2fyELtpjYJHpauETU8fLyXnorswE3F19C88p4S3QgSRdeAVLf7vUJAN",
  "key1": "1PURfxQG6UEAxP7thWFV3TuHw6DEtRZCbGbN8dWnUU9V2uBsf5GGH79WNNdVHTn1tdPjEzX1eedUHxp72W75MA2",
  "key2": "63Ck4rG51XKPFbqZfDugivPi5Q3VG7tqidQmUxCLEuCXSSnV7qWVbUgn8rntBsgZvDYRY6JXwDTWNd3cm4kYjGDX",
  "key3": "3kj6HdCh3D673xYjCCxvDzifBfQ2kpF1Ds7wzgDGKUBFZBqqE74VdxMk3Kr45T72UmS8rgs3jheDoChNdXWCBACk",
  "key4": "27Wjz96dPf46tSd2GYmc1u9U1ynogfN8WnVs1D8EupWiUEW9c7JGDXbyuUyoZimvLo8Q3KavPXmqV1HCRae33T2P",
  "key5": "3XVi43jxrRt5TH2uaXAxwxo3FTp1jYWf1aZRcTd6ypRoygzyFo4qSNr7RrtujcfHQKe2crfAMdJ5sh6JnFPq92TU",
  "key6": "4zWvMAWXhUXxDGXzdKqckRDVvzMDjoDavWVpgH1KA4VCHaToyTd2qLfH7h6QmY3MakX1HNJBXYWRjZV7nanYhBPo",
  "key7": "5kMgViLYJg9RKKVHECRbuUYbrhdfHMwMWAZCqCYnbxfZabWb75GCnWEu1jUPZiWmH9YmJ6nCjYcXu1xn6QAnHvW5",
  "key8": "5fRPMUjRon5pcQ8CHLSGsu8AmrgzGWBe7KemYPCjwqKNozJMBTNSDfCfhkwnUayDBkjmVuzTTGMm43FBiQyR9vFD",
  "key9": "2qZ8q395YbYikTxStgQoBfTgnb4REnGGfaAks8Gy42HHKsrNmMCiB5YjJ41Wom2QSKEKk5jobTS3S43JmWaJthFB",
  "key10": "2FJgry3BSFBsjywifnhELPHSAUbPjQkEavneAcZrtUjzuonhQd2EAsGWk4gosLdssXY3kDQoGxWUuLtJCNhd3C65",
  "key11": "5m6APKno8kq5mSnjPZjC5EMn8GFdFzLwzfsKFL3FwJvpWzyQB2F6n1Bn6rKDQ8hFQaWFHm5KAhjNfs9MwBHzBurL",
  "key12": "2Vn2rzV1CybogDPNUMUg4zdRmCXKmaMQeXGbGidwUdUcuRDaUcopSQ1EhzR6xMBbwvqmDpAdtZp9yXiaH4BpE6pj",
  "key13": "62MSvpNgjPmy8w4JZPNnYY3XJqqDHBJEq3PeSPb8ZPFmm73CPfDMnpSe94NK2kf8TjXjP4jDsXSJ3J4ddzbLsSBD",
  "key14": "nvU6wc8DUG4PURXs7aPWafh5szeLYQaP8gqNpBTJAYDRgmoirW9UBC5fe3pfMfxwiXJMQ7rYvLAD54UybZXEpgr",
  "key15": "4XL39Uq6WwyBUcc4nAcjyxNt7Cnci61Q9FyPwbtgRJNWCeYCj79WSskYEr28ijahdvz9Am9WqCG3DEEFun7q5cEq",
  "key16": "2zXmnnGTeKMPfgScgDgMXuon13Cjwimn8fMGNbjuYdKy8rz8fH2iwDeXYssgJaZ4own5Q61iwUzj1hhWDQa2Gf4v",
  "key17": "5eM1vfewhiwhxbu5mVCD2HPgbtG7JyedUfh5C5QSwN3c8nPHDhbRULc4ukjyWkyGQVPQigTBLzTGcFwUYm2VbM7b",
  "key18": "53xVZ93UqpioBZhBmieo9s1TKkYApEdukrAh6P8bR7N69hReeEgLYyyKchowZJfe5U2pNNwh1jjgdgFRoboVodkK",
  "key19": "5jsLh7CKT8bvVZ1RMKFwgrozyMfHk6iVguFdmS9JATrsGQNhyuJPn3E9isVJS2keMXJ4nmhvZaSvAWydnSN7JBof",
  "key20": "2Z3JCin8827QXbBjAgbt8urJ3AZpni4xkd3GtPkx1DdRpQHQ9Eg53xoebmrAQo1KWXwByhSJxtzPDLMTL92eUP2y",
  "key21": "5RhYW43JP6DmU4xpcNAQM8uBasXpfp49DwCD1qzjK71D5FJaQe5eebijbtS6MJNk8rsTcaRLJ1rhpuAdcbxmcMfR",
  "key22": "31PydAYAPYcT76nSvveNnriZGaYrFNn6kqgLNTifRHwaxcHcccdahQVnPm7LU965JM5qD51YM91mFzUnNWbWZHJt",
  "key23": "2HirbTX9ihAHsGEJx82Fopx9QV7SShpDD2vpNs85RTpx48UTbhqM7SSuVkxJz5rAVdG6Z1eSaVkrqdFDJbNBttJK",
  "key24": "4KAZ5XpqVmhTygoSxjYwBCNDeWvRi2QsFWKSpUYwEYmLCQRDYrLPJPnxZnMmkoTnE894oHpc2j5UXja5FEr3nhzf",
  "key25": "3G9FuLERooNPn8WPvJqA7ftJAkdXH4trfT1mDKhEuyMpJRgAzPjDkF9qmXCvaob3Thxs8W9jousbVXK3FtUVBxXy",
  "key26": "2jzztXea4qJoybUhz69fnRfcwe7RtRWQBwhMMCmA6m2Ra1HXR1XGp3EHi1gHtPUJcxrQXeUYqqyppQqrae2HctmH",
  "key27": "ZotpiWx9tYzzMZ1ichJW8AdiqU8otQ9bmH2q5rMG2oNyoQBsbWr77xMqCS8QRJeqby1FfKdPwSKAxDU5gZ2Pa6P",
  "key28": "HeWCE5w3U396fAhoEqY6XArAJkMRncidrK8bKx3CJKTxxaZkFeKcEsDd4PVxuPUBxQdDya9h6MZgEM7a5tBf2JD"
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
