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
    "59mEs5eDC3hLaV5kwzs2MJU8EipVmxo25GoaaYFcwn3SmeR3XLSxqypxGj4wLFMJrWLy9btX9cWNDW47tuLGg5rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KPH3B17w2X6qHWvUDjK9owgFVDhDXHC1RqWKAwd5iu7YnKWKaPwbjZeXd8yn4zNs3FUhK4hKp5uqZyduoYM3gh6",
  "key1": "2mHzTgSyz7R4uEypB7s4M2zM6DvCJpLx6cRoNhqYHBTnCkirutCj7TU98TUQEWG3vCygzDX8tXMKkyFbZ6ihrm3z",
  "key2": "UuZhH9tgzDqcEuKw8kurJenAkF1M4hNmEkrcc3ryFk6pHQyYJuLqoA6QtNq7x2ndYr5opj9MMFr79enfrvDHqLb",
  "key3": "3p6JDu2nATXF3KV8hU8Bmv3Z3FVRR66rzvfKnJqjn8BWCNJVjWgroHLymu4AfVpQa672XEV1nS5iP1fRaVyq8Qtm",
  "key4": "4gYhs77qxhrC4kWtFmJ5iNdwfYtu9k21QRaUkURjPopoprR9rrKw4KkwXXmDfcWEqjgrGrUNozScpFBjUKjwswZ6",
  "key5": "44i2RPYBsUyUQikabps1C7YZ1TzRs64M4FPzgxPGSA7LuGX8u5U1hDS8aJpimRxj9NxudZbtducLpqnbyvLW1aby",
  "key6": "2W6V2CMxuosgtLoax1YQtpeGF198zaqe4MWkwniyd9EdnGjSCEDJmQmMTKTzQwbvkRrj7nnqKBsJ1HP8uZ2Zb2qe",
  "key7": "599qd8THdCopa5DeT5o7kSMo51iTqhA9CAzs2JEYLy8MPPji7U53Xip8xuenCcJEcLiiFRARQKkxTT5ePKh3f8Lq",
  "key8": "3qCDZiUXVU9wCvqmxqjufqfwKk6pNeM6J8kfTJS2guNohkmPDvvMyuiNzfgZvnxZQa3sbnc9XfoKKyE4SCytAQMH",
  "key9": "2Pjo3ugmMGZ61Ejb2JRw5rvnykmsLhEwDjbYchkyS2fmbJxSCCwqArBz5oshUdefsfGTfuK1xW3g1YDQj1kPR6zB",
  "key10": "4D36ZWiT4HTNTW4ofsy4garqiv19g68pU8RHpApRVUTW8VaiqWfmSBGLMgWGN9CK8nGDbwFfXNBPiUEURsn4ifHR",
  "key11": "YjSLkpdwKZ13mdDKE9fs7pTq94fVNPcW8ojBEMVBrEYwgC1rmfRwSnyUiPmgsPVwJAqJH6nWBitCqo3TXU5S8wB",
  "key12": "WMh4Z38V9zMT31YUubNfhKyDpMZWj3HARRPag2mAUEGVa4TZviyibDSLHXrH3dAxPWwBof3ribKoiCCDaXmMj4m",
  "key13": "21eHUbB23ksLKg5rHYHP6sr1Gg6Ni5iL8qf3dYB6wdWtgTH8gCwZAbnyUpXS5AmP1g5UddVwpqr1fqPnFCCJrLgQ",
  "key14": "4Vh1UgJbfn6nQRNTewfNDavGHo7gPfqCxeCTisJEQqVVR5MadN24EPyVKWHT7MjUQreN3bGfWGZ8f3xj3GezFVsB",
  "key15": "5c598ezYS1SRK97vfCk3eGAVqmbkt1arLC7JJcsq7kWmGBMX3NWpoqFeUT2vnLdjGjv4duDsqdSzkWiox1gywpFH",
  "key16": "38y4z6jVLgffaLHFhrwekEJ7oZPirSmK8ht6GataFPPiKSJoJkoqp4HfsY3XZgZkvPkSonQLt5gSeRrN3WijPt2r",
  "key17": "t5SPWeV2Pi4ykKE8B3qSvkTsex7x5YQ58vG6SbQyZETiTAPCPPQc4UgRE8YJZ35HmkGBZtnLp8XHMMLEnzpzu1X",
  "key18": "3CSjbM5granER6VaqxzrQGJR1gZh9UdpcEFsHUKLKCXFuA4mNnFYhKGzqUBnT7NNbTD63V8qDg7GvFN35Hozuf42",
  "key19": "tv5VA7cyBKin2aS4x6q1FokQDdgsdBRDJundmWuYB3MGNqqEuFJfM982udhGZdQhuuLLezkWY3nqCZhc3Mva3bN",
  "key20": "5ZPYuGms7cULeuq6HAwfT7EnetrxwW3P75sMGA6TBxmep6ciVpGotsF5T7Z31Wp7SWszp9oEvUu1569iRoR5w3Tz",
  "key21": "2bZzd8dTrMy9N2ePSrKc6gttw7tbMK7nSpPdfC6kfwzetf1L6aHjMccX57UbHKvvwNJcp1WdRjm37An7UALf1P97",
  "key22": "4SmA4td2Br2ZMaf9a4Ec2vZnLuQgqP4W8FDdyF51mPLQBZ4nQ2nGdpf5RaR3JJ6uFEXaie3b5J74383gsuaQdUbP",
  "key23": "5rof3tAU3ieUsBX3dzbxJnkoJfQbGdVTBp6YudKw8W8vscaXv9V39ZcXicGv4geg5WVEpeoMijtnbEDQAcnKhXP9",
  "key24": "65M59SpWmJ7eCTtbwGrsciWcfMcQqn4jFhhZZ5yLWS1MsX6Ew5KAqZvV6FjnK4ubLgFU6ZJrwufaZzayDtLVsnbu",
  "key25": "2WMdYzLgzSjU7erP2TNy2m6YKedC85BeB5pDZuaRrRaKhti9hVkTrjMwstBpYHQdSVcFLVktDCfySApTVtMGMrLK"
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
