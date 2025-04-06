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
    "3M9JyTtxJbjPVaTAdRos1BXoZVLGnpn79gcqer2WiSNWYB7jrxhkVLeezTqUSdDZ5eAmzajDKh4jz3FzjmesGvY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oHrNqHHe2PNpeWXa4EzCKPhhrArVnPsKackeehRcKXkuc5iH8GJDaimBuaMrd1bFHjSPETyHyFbU52rVTCDmdwC",
  "key1": "QgD6Fuk4vKXNMSM1k53tJEjWrsJ3hkSzsNmDFCyJL8SomtUVoWxLbJ9FyqjSpeRduCW3zTWZXV8rnk3akeK7vLC",
  "key2": "5EGTACAeE1omn5akh1kAT8hoNzDPfjM9UbBhkr8gLXEBnfMS4bGb1W93kM56DYg5xzubeq8zYGxn3JAG3DtJFcYu",
  "key3": "4TuB2vpieqqUbe9Ru3f1uWNzm3BVhQ6ixSNeqTuDJhog5pJRUsho8swHb8of4Tz3SE8waX2BdLZDNnevvx5fW2Do",
  "key4": "ihwJCyQUutJpCMd853QL9r8tw8XQGBpL8kDT1BCHH8fEy3XqUyo98Jai5QLSKN8QChJv4rQYbLQXagTnpga3pdQ",
  "key5": "67DG3fWU9S2WcgJzCLaHhtXjBNrF31ftn3F9Me4fUasZSaqWyFUdcVCp3PydMz2DHwgZrmMFcUviMLcFccycJsa6",
  "key6": "5WAXojQ3EP6pbHHvwdTeozxmK56cYa9uZYycv1EEz11WuuU2BZ9GAeKTAEvi75efTxyNLmju9Tq9gFULD15deGsi",
  "key7": "2Jb8X5EVbQ6b6cW3KqUVsLkNBFtVtm8LDFbbsBFR2Dks5yBLRipzMZacXDceMkTz6cNaq2J73UWwAKfvcDqWc4Ud",
  "key8": "3EcEU3pha1p4yb5sEqZgexvbhjCJZRSzhNpfmmVrx6Bm9QCdFPZeKjzJ4wnEkm7Q4RcFB5FbRxGqiyXEGYj4w9Gd",
  "key9": "5DnSs4E1JraUmARWf8GsAESdGoq7F9AWBAkkmb2VbeHxkrF235GkrYu1a75ZrY5uCBhrGWKdaMRbGbdyy7NGV6xd",
  "key10": "2NmuWzvVTxtHwQEerkZ4j6s9TnEQUUQFLRCkmp66rDnaC69RvqvrGLurJ9LsxZUwGgy8r58fYKJXGdDunnCHR5Qh",
  "key11": "5MyZBb7BBM652mX9T9tWX3UBMKjYhExGnxXdcSQsyvj8vzpsnb6MxA4agd3PooFRdZdPueWjywRPzfUxsPnSspXa",
  "key12": "5uSe49Rwkh4LuEcopdYZPDDMKhui6PPSLeGUkiMDRPod5qYnPQY7quzeiAHCDMciDYtBvA5MqAwjrmxjCceXiH66",
  "key13": "4tF4KT5gpRxPpkxboGk26PiixxbsYkXakbhM7poBMBvvo3KRtT5fEpAbGHQG5GqNcdbsE781K3a9FZeUGeAvbWjC",
  "key14": "4huKfKZXi1urm4QkBsnd6pWRgajXZtwee2xSkWNc1JRCfA5jkLuRmHD3hgR7e1eoQp42qSb3pRePBKyFKdUzzp3r",
  "key15": "3gPuK3QVvxtDQHWWpQHZK6JTBJ1SqRqX3MWvu4tsFiiUGSE9pPPMKzYkfUQq9dkV43RCL9FcwTD75KnU8bsUvEWP",
  "key16": "3ecLFRHKGEbr86ratXbtjaNS1wvSoafJtrQqmp8mvJV2XcSmTSYNubz5LriLpReqPFJgejbsmoMWM3CQB85uGzL6",
  "key17": "rhDNtRXoH3YuGiVQJv2rG8d2mpCZnoUwddnnWSxXPBfrmwPGybxNhkyiZkqun8H4Mx6i9wUW2EKZ29SHABD3dBf",
  "key18": "2o1SxgzK8UWb5nQWrApyKByGRHc6V8S6CvK5mGoeUG46yLdfxmYCavQChxzjgHEf27rw3eywZEthPUfM3UUUrpuS",
  "key19": "4LRdKmUX5nRsiKST9zBavBvJEEpWcwKzkQPfzintTp2B5Ex9aW9JdXJ1KKDExyUV6atpEHfPJMHmaqn1vuE3E4Ym",
  "key20": "5WpxmkN4odXu3RLcP7oE19ZszKx5favaf3XPnbTvLeS9pvgdWmrBzLsoEiMSeF6uhzCi2mDsHxEpjUBxodKNMNdh",
  "key21": "5EjVmauMoUsFSyh2fkApsyi6CG8bvVhaqBpVcjbz9gHsPujX7TdEA7zUT8Yau56VH1NG53n6GFcVionVdoVeiJ4p",
  "key22": "3JJ4KREn62x6HTG6KKWiCNEVTkypQuSr3GPv5xvJj7RU1E5Z5tG7seJ2J9mwcrbTRxeS8Qd1T6Hkz2fED8W1tEnu",
  "key23": "4tJjwsc5uGVcAX6wQA2rFHjS52dwFdYdkytK9syrLm6mjdunsthAmi2j58QXo6NWEvHGW1w4WGRE3xBpBmBzMtes",
  "key24": "61mQmrFcQEG7569ZEq8NAEhFMyvoAdVrFkjfmHHGYrhzpPQksojwns84ZF2Byaak1XCArAoYHgvEXC45GGyN2s9H",
  "key25": "2qiBLZmHrLx41RdyUmW6VuiLLm9gnkfrs3kmrEVGhCfepcUsnwAEKNZeJFjLb1DmCnZRniBYYmaVG61ph7ssWgpW",
  "key26": "3LvkUKDnGobN4G9yFRsYAA4iLmk8iuPd8w7wBmHvBLi1ztnnZQwHYSxR3VDj6jU9obovv3M7oc7d9cxpK5esZdWP",
  "key27": "2ThaCqE5s2mE9cXMPynx2zz98RQ44GdVc1KNrUM4JUpAY3D3eYPa5WZCW5QrFEXZZLHnRCDyvGWh3eiegKW4cqq",
  "key28": "3LFDUhhAkDRyAwvpivqVTgKqXYNX6waYVztGRkcGzdMd1xyFj2t3N4cED9eGW2gpFwdzAMEbbUxmiEN5AwFhitr9",
  "key29": "47arbQzjGgak9AZqqirV4wu1jus9PTUvLCEYUXhHfwq1L5GkDbGB9Fp8kSa9bGbfXCDcAc55FBXy76Hd1oARz2jc",
  "key30": "cGb4D9cPdAb7xBb8j86nMeZmc5KCZWJiuR1UtDaBjqkVofLoCm1RCzAacEJfQJ3RuKbyxEFFQXQprSNvACZ7iNd",
  "key31": "E15xzoRfBToKeQUovbUhHFRcs1etAEA13n3sWQZTVXwmN6vfDtzHUhnyEyZwvUGpyXDhLgggshSMLMEfZeV86hd",
  "key32": "2pftnw55PbnCbNb5Wfvk6WsWjufvrH7hJASX5xKFQUPCbr3H2H4t8onJXy7TKTZst9aZRUyFFoG1t14vetyC4jZp",
  "key33": "3GPn1p3n1jvkAG9MpNoPuCFXgvCKPzrkzSMD1CCTkHjaLBVJYpJQgZGZvnno5qhp4SJECTSzxVbbEzsczxjzGEpx",
  "key34": "1Dze9AnoC1XQ5kULHGb9JVhmbFRT5NpitMCGtdZbcyC3XgmubW5wyLrq2qQuy1uPoTHS8BufrCcR8moxmuH2RE4"
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
