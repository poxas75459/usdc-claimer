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
    "2mtYvBccbx5LJcCg5rkARKADrZPJ5N9ouLp35SrXeU8cQMCqNU2KQMT7NZWrqukdGV2THsxzgQw3rzaqbSfcp3Me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aHxGfmcb7VWPce6ANXWawLKweGJWX92sNDgrJN6Vq1ZTDpdXCz7AwDC2JyZcLfCSay6dMNyxmH34hpJ1e6kK6bf",
  "key1": "47renw4jz2i59pMUfa3zjReizXuJJURQfzD1VpaKtwSYpsN65bVj4AELaxFfhjHCRCvaM87k9TR3D9M6m4utAjvz",
  "key2": "3Vy8XZQsVix5yCRyS7Mv5JW73zLrmzpzRQhirHjr2Nte6Z39PZvueEkyaWZPCzTqe8toWaqVVySMX86wJvijdevg",
  "key3": "3iNFk1Y1ZyQ4Gfv1ECAuStpMoJ15VnuM22DfxSqAUaKeo8b9mYB5iQBAcLwvTnHAbY51wXQRKjeG4KtupxNUW59h",
  "key4": "xCvGxDQu6yX1E9fuD93GzusPdJMfh4Ja8g9DQT8V1b3cc9KL6nDTXv8WKe8V71XtSZ1HK2Q5AWwAvRRanSqkzh1",
  "key5": "5hAYKo2wVNWKRbjyWgiQqwPnnf1b9SNZM4U5H5ozMESabiGgKaXgL4qrRxfDijbHe88URBqyiRzV7CDALvbvtwjw",
  "key6": "4aXc9b6BWaW6uFeNfmtjztf8nUepa9KysRJHkfb6EsDfDevoZkKJVXR4hUDSxp588NX3pE5fLN6p8Fbrpb32jbtu",
  "key7": "2oUDhEyaBUFSqkFubRbhZcT1uxo7KFDRtY9NKte6UKTZRfrDf1fp8c8LQ8Es6xpzN2WuHfy2SoMsjKsqCeambKQx",
  "key8": "2m2bpsAyvxtBMG2PjY4BNrR8vhk8Q4YrU4r4z6QAas7ir65gNYvkA58MPL5GFFW49F57n5tgvM85ehKrVZS5gh5Y",
  "key9": "2VS17C2rmx7rhF72nryqyspxhMCPj6HcC63DPk5bx8Xqwh3wr2o9Y1QUd8qjq2LWrFrgtparpvNS8qz39uPaRQMc",
  "key10": "aQ2vSHUWJ8wvwZq78jJQBXeoUu7m4E4j3deSYEca88HaiXmy67ebmgsbYSHss8pPZ37FJzBaiFYM8qqRoRcH2cj",
  "key11": "2UXVTPhZQGwjcsohi5SGbdomZfQfgCHYTDrLYHabr3xW39HJhjG2usuSCQGc4GHHPRBCm7ehWbVH2zmYeQdGdDQb",
  "key12": "2NEChd8CGsnorR1chn8zwfANo1sfsFtHo5ACMW1XAnhL1k9JQ7SgMdcQa551bnBdLFhb32QgzZGz1tvYrRzMef8X",
  "key13": "25TU7pjnjuoBmd9LWsiAFrmM4NsyZwQFY3UGimFhvn7hrjZ25gxHXsWs8tWdX9re1HaZwJRMXiiH5roWmKAMpyQ6",
  "key14": "36BdLi8JugXmUshu98C75YaUZi3kRAQUQPUTJJHML6LEEwK7virkNXErQYPzfQJ1EJacJ5VhLRD4urUADraNv87B",
  "key15": "4hrvtNQGDQ4ZVdkqYubfYj1eDQ4jt2romWdqJCNcMZcCgL6PgKYQdf5J2q2SGWPkL4bZpcKfxcmSV3X1bHqfNXkq",
  "key16": "2sitLtVSJF7twfz1p4fG3kArYW2L1FxhwmdxYHEX7Sn6j8vrWn8A8wjouTyNoQcbxGjuN595y8JLyFD75ThbD3vS",
  "key17": "Y1vY2G8GDjGhGxtkUXWhWiWEuTtYc28MkAa9DcBNzoXbDXTwP1fZrkZ8hWoYZHMAGCxCnN8uZ5PJb73i6xwdG6X",
  "key18": "3xnChFQK5x22TpL439mRoMeb1Xen6UbVbbBWooQ9WXicpXXsvaVZHuzfZNGpNDwXk6ezTzrsnee8HydsRcpjWFBm",
  "key19": "3cN1FKUk6sQ5z3Lje2AUekLVUm6KpAAnsBW6S5k5QngutfAxRVjD68eUvMfBWUXUgwHk7kqF8uFPMPAbXVj3LAwB",
  "key20": "63rn9kEWC3ir21w3DNCP1UggbzEDhU1ASNFAbVCHzMTYHVC1x9TnezkERNQwqx9Cs64GXoeXe6boRDCoDnXWQDP",
  "key21": "4LVukaxyL8P9Ss7JhAfSkdDDf3aRqWNxwBvPXgoZxeFP8DqJxVcomKUCGszmAMhGmfWEGCRVK61awq1vm7jxW1A",
  "key22": "34arHrM5cZHKbR9v7K6Ewsmda7pr6RVstC8Vi9bZ7D9QGQRNYQbnSPCaFmMf6sSYnern47f42drdmW1C5uE4tYTj",
  "key23": "5XUAGGHwphqZkrGwAUJtRi4YLWXhej74c2gCVAsnyf7fTuHBbmLoTXAybLanAmr3KJF9XSzASEBNRYv3yf5gM76k",
  "key24": "31aVHyWvCiELHuJdfejW8cYzdQRqRKvAZqqEG5GHbzTNU3yuEMfXtvxxUQ9tj6gDrBBzZjwpyn6NAgn9s6N3Cgpr",
  "key25": "29FbXSYBQbMt2hhiwbt1emDGDiJMNLB8vr3NzT91TXWSSvYVJ6TQC1nEruqrz6sRSN9UG6QoAWHPNSurRbNM4Waa",
  "key26": "4uJ8Ab6ruXzw4kJBngNSkgRNEK6erSev2wS6CB28tFND3cFZdxK2hzWJhzLbKN5VEjMkyNVG7u58oDppcqeiFBs1"
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
