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
    "xfAkALGarSHEYKfxR1KdpSz1Veb6yWUn8x9F9HuXmMVo8KrWZtH8QQXEFvoLPHWqu7GBY3Nr2EAasFGT3nAqZoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jgzR38SQNikET4X4NrZo7jsBzXNwbkxPN6fdUw2jZC8YdvhtepKZGbZreatQPjAbyjVMt7NZWHBDxFNjhgfWmmy",
  "key1": "2PyP2xCAnYLek1NmLmu1xspd65kCuDv79GYjte9eP12EaWA2rbE8QKHoE7BEt3m1zuYMWSc4oXHE54nBW6yvxz1K",
  "key2": "5PzJtSNHMnCaNxqUFdMjcUYuqcM3sF3eSnyAriXrXhq9u6cSt7Uua1fkVNb78hdzBkxmCb5de72xUnqqw8bHHN2e",
  "key3": "3gVL76jc4FyeE92NALpPvhsrh9zisTuVyAW9sLvCNR2BnoSpUfwQKu1NScZzhSnL8PSSJp5zhtmcL7VJ2iexuhGw",
  "key4": "36yrF2xMiJTv3u4CuTyGsZDpYmvmFwt3fJk4Ama3gnYekiUsxWVHxnuTdqZzN6symqzHCDFdAz8AUSBroWQtuV4",
  "key5": "SyqnkwNtpxRwToTVYwyrKui3qAQrvziUx4WVpVWYooqjnCh7jvYo8Siim4mj5YgL6LPum734RCwJteL9ET1yMCB",
  "key6": "32QSN38ZvoBudHUskaCsUyYpbUZX5VFkjm1SGX9zp4JJTQfU1P9RjFzzpYNCR5fcoWBQeBYxbd3Xq2SRdyWA8rYe",
  "key7": "b8QoFeK9oVDXYKuYQoWnS674RvxdJJrp2UZnLN2ifBSqwn7ZNc4aq2pKx2JpcsWcjm3DF8u6kTG6LJXuQxkGeHL",
  "key8": "2ehkwTpS9RMGS9CPJ9KtCacaW4YDk1HEqVDWygRyTAzMfsnuLSZq4BCx2JnmxmWysPKKpWjjPGRsZ73SGD47JJLQ",
  "key9": "578WwCRg9rhhrHCkbaZEzFKRq7oUFUDgsNdsDHfPL7ER7eZcA25cnPq99ydYkmJtogNrU7t2VMyyHEBpXFYpoxhN",
  "key10": "4wiGfeUHHYqZjDJ8FQfdWC42iTkHqSHYRKUQ1GV7rGtrP4XJHbEfzFz71rXGomnkANpPLHU3vCyhwdKVmaU5eBhz",
  "key11": "4cyxh4vukPwdm75jFcZ9zppcVpvtRPvD5rPNR3NAMviYX2RVzjNKvTMReBGjQvBWQYTJVdxboedTAEARsVCyC9MB",
  "key12": "541qPHCGPRoKiAsQPHNix9XEizLAsTnnw94McMSz4MRzqRmibsZqsoTZkTXGcjV2CzVYCUsQefNPEs3N5VfrEuPy",
  "key13": "5JX9yCEBguSuAHqKbfbpfKvpumf8JsonSRRVHdAsfipempLYR9Yu3CBeXTGMotCw9jwyeTELTPk7r95S96kQ93tL",
  "key14": "WkhDu6QMoCfrayPjPpRXMWWkdEC7dLyw4V4d1MhVFBPMQBzB5ZU94waCTZEfCtds6GvWsML7J3ujzxyht17G2xB",
  "key15": "4755fmoUmCVPWooteQcfp6tMqz6RRsnhVWHP4NnEHQH2V3SBQavdMsjd2mcYCTHX24CmWJCDcRgSXwBLH6kdzAkv",
  "key16": "5MmQ7VfiwNK2ex7jA2sSifDNUnpcREcRfi5heiUusSum6LKhWrS9hB7m9Tj6F8yqNhcJwZrq2STAu8wjWK8DKwCn",
  "key17": "2vRsSnK5BFHxiEZ5CdzvBpYNFJsEUTwGE1megcVmBboshercczgjbZhc7YSSWtRDbZpL6cKKcvKmtRcgXMxoajQC",
  "key18": "3PTmWMdNMXiqZ1fHtg87PQ7X6rdA8Rb4hMQTdTiUWMQnDYcf93Ysbrj2LzFLZGa9uaMdr1tHRxR7zutbdkyy6Zym",
  "key19": "2A9V7zkoqZj3YpctRehJovcj5KEGhMAQoT5HH3HGdSGpQF16inHgYbGhv1f3F9p2z4RFstxrgRjRU4deu4WmwJdc",
  "key20": "sHh1DXNyNNQbSswU7maBYNdHSeySTfCefSY8WeQtKYqSVdMx4uk3YqaraHPWW4cmFWfLL2oZLoMqw1itHtrcHw7",
  "key21": "2iWwJz2vfFYyfMhVA9pi4vrgLufGoGdLNf5rjaYfvQEpZVHmGoQcUSpVaaYC6NWPNWpMXbfxkETyBYVYZtCBnjXs",
  "key22": "5oMHskr5kaRhZHoNLPaL5g8os2EiZNhdx7P692eWmk9pMoNtR2mo35XZdy3J3T4gUhRMmv11oQNjmdVrc6LP2LAg",
  "key23": "AUn6YF4TZ1p2Hvy7KxZ8jAvk1E9V1pwBaa9DgkbmiTzcv1sNFqGsGnydJ6WNaAdnLDj7pTiqTNEhmNyYwaUDj5N",
  "key24": "4GV7dTsju6TRjejvZnPHBkZjLFC7YZ12nD8x8cXtiMUaF5SvRo4PXKbddWPHn5oo5okXXsLMGMNpEBR5hjjLCDyv",
  "key25": "5jUbFkArzMV7bXBCpaq1UUndAnzP8mgduE9M4svD5iAZ4nm1F1yf9hSWq6bmpKMfYd5Jbn1fhB4qcnmM8fCHJ8G5",
  "key26": "2aGtdVqRfSSpevmt3XEwvkN85ABNMgRX3y8f2BvKgvWbQKadU8dm6JxgNhTDPxG9zVP376QnUNFXxtmUmBjqrLZr",
  "key27": "2Mjvxi4861daUSYQWyqr4AHbqaZYxpbSTGPgeznTi8n8HDUJpDyWFqWGirXXi1vXPYhgSjzjgzKUB3zz9tkZiYi6"
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
