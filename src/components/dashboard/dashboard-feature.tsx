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
    "4Ws1DWvUbycurt59KwNojhBUchs2n3h4VZPim5295TL7tYuiuaRZA3vSMtoKoAUK6GzzLs44hwarHRPHqNTDdAWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mX8xb5ffx1Ps9Af1QRPYf8TkTsc3MS9e1HXCyQPLw1316EEc1ALs84KABtn3UgLKcUotAwZahHRnELkBAVkx7CD",
  "key1": "3sXXBWhCrZEfDQCDZKLMijUgm59sjAFco8teoxkvFZvmytFNV9Bk8RSDzEuBZ6VJsLsUZ7u63wqdJz1BYYJyzBiJ",
  "key2": "22Ssx6Q7nzodcBpMnQ2Myb1iDzZPgM28UAUeXtMNcuUTLiqwnj2nRgHH3PxAGg6R5fgW7qwkmt6NeY5SaZeY8YBh",
  "key3": "3w4DG5Ab8dG9paq7ZjMka6Nr1TJtGQMsTQxvTsoBZw3JBZqZnCSedyMRV643EePUMsWiQuRpVdrPWsuLVFMV8UfY",
  "key4": "dNaU6tyaZSpMSqPVY8auRhUMLHm3HtGiGgJXYccniyr43xJvLxC3563geSYR7KnMogY3kSFy79nCBH2y7bCJaeg",
  "key5": "f6DJYdZ1eXVZMQpnwVRvHcGcejwybVnYReETZgeAoA1aEHE2gHdzpjP9a6SJrMA9hCsUPBQYn3F2pSHtCpnaeXi",
  "key6": "2HuBXxcunf82zufpiDa5UvC2gfz9TJhGqDn8ANaiwQmhCAdPsbexLQxiT7GpSKxXsJd5DNuvP2RV7WQ2jCbUcKZ",
  "key7": "4X4qv8YCiWKpUkes5jxayWCa7mF7TRYbD2R8gFXDZzpQQv6ziqhFapQ2mryqitrGkhYejWmcJm8A8uDiSqc7ra5u",
  "key8": "4Sk1QzQGczLULhYWpYVY4fSCV3KzUGi2BebjLDcYxiR9QrEJHwy8NUNf4AZdhS5LRxDozwPhMVBZUWcPZeVrfmzw",
  "key9": "4tYbCse62Ux83RP4LCVS3kE2YDvcCHr4jdxs8bruh8cLZhZ2ZcWnkUf5P9YkQRWWqH2GFAbw8JKGPzGrGahQQqu1",
  "key10": "5nwCoGqSZQ7XzeiXhwXWGZMbumKB2eHhVsuAThEE1s7iRN6jVVufQs9voGQ5L7CGnmfAVYAfp5Uky7aW9WKbmV8d",
  "key11": "3GxFyVELgbiL5HT47LHMCgjXvG6emj6bRPqdQXnWXD8mWVMZQLhE42jRoiGugWksK22N9abSY19D1zKD2MMGN2Zx",
  "key12": "5ZZRuCv1bQfvqXD8iqWCLDAqGRNWcwTDrKfZyLQXxjbhAXdQaRynmMBK7f8svruVtHouxnnyEoF8TkDteczXTEqw",
  "key13": "2tNrsTjvSvvWgYUJmjwD3wB299mej5soKKBr4ptnBWDrABJydz19WtpL8YsV52e74RWZCJY5ymA7DavqYvpJoxQJ",
  "key14": "4i7P6r5DtpWV3UDhxEhZbTmaKbG9XQZWStvAhKqT8xcYouwKffCVBCgBJv2RVqcmP4bVtTcW65LCUc1sDDzmfP3b",
  "key15": "53fRCsJWFqKUXs1fMgapKZyb5rYmTKKCZeyX5cTjJK45n9wK1tNcvL4btDuEoLab9FWZ228LG5kyXetvF2vvUbPB",
  "key16": "4dEY1t5QfRVHDZPGY8RHhYGJUjdwVajVwXzZKPZixBK196BP2WDWuqV7qK3txiFnEoKGdNwG1CijSPAVVV6geid3",
  "key17": "4qn12B5ut2brSis6A7fkxJMVUCYCnWtReYNqiu1n4yvUEN7nH1VnHUPxGFqQrKXL8gqUYvT21EwAy4rusvbipu9",
  "key18": "39y5Ju5C9PwBRQtjEkCW9Z9R2WanFJnmWBmwnsMHQfvaLX9zvbDem7Cev8HVWqhPnT1EqQW42m98RL8NkFCxKNki",
  "key19": "2uhiHNk9xHj2VtFcRSWrsQgLtwMgfPWnVzNVdt2gXn1p43AZi65wAAbWjEv19shmCTQ33tkgK7kb16zJ61ADo7FF",
  "key20": "UtihRDMSR6v2USH8uSRciL5m75hZFCJ1rYdPqv66sJTKJxQNHK6zNuigij4DAxV5ZhLqVKL98yXiabLfAzxQKZQ",
  "key21": "3YLSyguLXw1czwSLLRocQiagF1SG6QR3DGybksGz932wHnRgAeBDD4wRhFBPiRucMJXcTEVgjVTwh4WH7WgsWmRc",
  "key22": "4RUywyANee67tsRZtn8AWERPSjgk8G1vVLcVHVxbM7KnPfY6oQCvHpNxmvCB5gw9TJGHpqHCdDmKy2Forur677xa",
  "key23": "NLiQpBjdZuujPfHtR1AUgWf9LS9gmosPBvTasELMLYgfAsSrkBXMLGU813De5ySLtqAtkytcvxHyNzRvU6ZHcQx",
  "key24": "2EoW8Xjw6SwsUsucXnMm6nD6s1h8we5TTDnVTipwFcZcC81dA6EFFm2r4KvkLBmCFUgUwFNCXjmg3LvT3Gn4rSou",
  "key25": "3xaoFvBEHTXWwKQfDYrtZL1KHVagQFyUbcMu3g6EPAo4Y2jY8v6p6DJgBuu9fLu3yxdU5zP4K4Q5ckpaSmEPND9G",
  "key26": "54hUD2Xt9kmp1Ua31Ca2e2b6JBxRvt6R8S5JJQnLSL7FFnSS7Bpe56feWAUjdYrVn6daGuNmfunKckf4hZBGgBum",
  "key27": "59Ax4YdBYXf7RcnutcqKPcxjQdziRG4fz3JSaSsTqukJLL7gZ6LWpemuBNc6L8tdqgdJwP35RM8EWVTZWHUEHfSX",
  "key28": "2JQQXfYbnV85uynQApW4MXZTnJpMiUiETXzs5RdhUtfYjwNvB2M6Mdg4BJ7haA25J7MUx4Y4Hkxw39UaPJXxxrcb",
  "key29": "5GB2Y5nFbK38f4hMpVoopQcHUX5Lfdj6EW91pv4fYdZfAYXyzvTh1JdXTCa3X9bGd13gpnGaGg73ctWWBxeq7LqG",
  "key30": "2qSUinqBj7ZCcqZpTEHobB8J1DcozuyDexeCTPNCQfrADTDYYn3hzc3rrQSi1tZsQbujNqfH2Znv34Ri3vFdZzix"
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
