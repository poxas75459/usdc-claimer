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
    "42c7TzqecMb7sUMs7FafCacufMRtuGMFbthXmr9nNDMwUdnG5uwHQmkA1QD9hJQTfh6Q1CFtcp4NYMy7qJptrLMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yLgcYpZWs14pNfGBWm5nw9mVEP31Wq8ey8fMmCnfGWThtQmzZZdFZMDWg1gFaFFyGNdcQojHC5VRpskRxLAzdkP",
  "key1": "2U3bL74Tqm4rtiMF3zcFZ1YRyzoHmxeaAojodMbZP7BdHh9jhByLx7LxbATdGvNrusFQ6CqYNd6BeTN1YGXvTtPJ",
  "key2": "2G2zkZFjcwh68eVv81f7iX5Kkh3vu7aeZLGgsBhj5dY6Gvv2yg9f6zp8B8f1DSWC69EQFt3gBxPoepgBdCBGiKE9",
  "key3": "5wuRGvmXzuaZDcZrKR7a44jHZaPSFKExFiYwZGDBXAV89i6WmhQ2rvQ86SXpPazyWvfDcaQKiMpYpfDHstjLCgy4",
  "key4": "4vjNSLCaqhS7DJBn41yPMqGY5kHKsSPCPqgKhEyaA25j2DuYVXunaF4oxzmBcqnxXzxhNFTvW3QZGEdAW9m1QxSR",
  "key5": "1uXX7mYMdsstsy17aQ19ShVk4a1w4m3bDjoF2RVzMxe3UJ8iWATf5K1p8F4YiKfVhNhwJ27wTRjhrEZBaB1DbEE",
  "key6": "62z7wX7xVdA6xNKuRqmgVjJpUK6RRcvZrTD3x6bc66Y4ZD7f9MZY5jrRWv7GxR9WXikJmfp5bvwDZWJikUDkLMCF",
  "key7": "5SL6q6bKQc9XfeM9Shyty8EcJ8hhT1EyywD1bDUujbZh2nxjzUuzJDqFABYpFDsr9UygJSSuScSeyaaE3Hda3JpZ",
  "key8": "HEwWCFfafvHGE7ze96iq321cXoR7zEFCb4pf7XYvD65tSwjLHtVQBwWpF2z7LtKKa1xLD6LmYjrN8DBS3DBsuYf",
  "key9": "5n5iFVxWoNU63yf22umbqAeKNNgD35xegDxh8n3pnNByVCsQVSYR6r4PeR58R4z6qYFz2ZvpWKna9DQ1Bavhz8kB",
  "key10": "5tQBuMNzcXo4dGTz3Lxrk7LDZEDKF2kFae63KRtCGEqDFHGVHCNCBDQSyxYJ36BaKbDPVciCYTPa2iLhUvS3WJna",
  "key11": "4a1muc1wqtzJHCcG6onv3gsUHWMmWjLbvgBeZK8p3Z9dATLzJqY2Yt3JnuLhikC6fCzvNzUBMxAsyxxRxJpABGvv",
  "key12": "2NewWVsxUzEZW8F1P2pTPW8595ZwmCHpgAhRTGZ1RJ9oMqY5q9HkpgG5tWKCXMUHDXq6pcHmSpqRNKVGpMn7hUds",
  "key13": "4E5Sz3KPCW5XeNw6rRF48zDbJyr5tsLKY2JQoPigvo96M6ppYkv7B74oEpfwVprLRtFZPeoLYvvJSKZwvkfbB8Mm",
  "key14": "4Ujaju1keYvcMBhZFDhebH24ipD4TgTraGT88VM8Hse1ZSSYMjXuRgKa1Py5KiZK9dgHu5Pnbos4eSN3RWafo8sM",
  "key15": "5LnsBREkoq7bQJLWbyn4AdBcVs5YpAm9wQoWNdJiYVvRf45wsnRBEUZU6qXM4K3mzUy9sdfhk2mHxYgtsqFrMiaN",
  "key16": "w8K2mzMbLoLjgnd1iHfKXzLCbC1Aa7Pv1mnTT2njAh7D7QVnSuf8TWmNBQ7GPtjmqttj57gs3SMzG8Y1tZrKyoE",
  "key17": "5jjqzvT1Zo3Gdop9xxyPPgsMSdpmejbrMrT2XgwfDMudspqqLVQF9eM2eVJVBe3q43bMdrhGxRM7RfMKzuieXErr",
  "key18": "4jAapGp3R1dHYxDXM3FcW4bVyZQPjobKW8Sr7aapsTmnSSWp9VNpsTnwSG7NWyFNq4ebYvZrHZPdza5LyL6CaRx8",
  "key19": "3Dxwu2j5byuYpUEBVH4T2pxNmL5WFtFhxhVzY5GhXM73wUhWCtUVVGxmdMYekDdG814CFsFwbvvP4uteDAvJqY2w",
  "key20": "5KcrM46JNs7obCyewWf2S4tLnLJo8L5ULtc1cr2H48hcuKfeXTTMe4hULz9DwtJ8VC38h2WEBjWpf3mPwYJvjUG2",
  "key21": "32wBmFZ6m9WKuoP9YWshf5nBy5EfYxiZuuoVvzB7Qfuv3eRvedE4dpiPhvx2PyMfa48iA3mweeukeQYTBcebawBz",
  "key22": "5eyk9G6WXarBqLWbL5wSAttRDkrnC9pDrgYURrXyj4Mb4CezMBcDbkodjngEu2LwxUeReyNtJTFRyPPbJ9GW3odh",
  "key23": "2g6zxBwiWJUZJkPH1HBiTrNghEiDChKLxLoiya3LsWKhKMD4pRgJSKnE6e3E5oEfW3bQvKbZdHwYb4imgei14Rv3",
  "key24": "5QBFFTT4PP28AuoUGPS2U3vFQtD98K4iNZbwqmA1zGMXzHvjV3zuSBqUeC44tKrLR8YBr5sEhtjjVQAhLoDU5Dhr",
  "key25": "DK4LcsmfgwtD5VHD8bPjt19yqPygZqk5zr3eUtycixeWidSD6MYmWcEUxcsb9pcPMDRcA7pWGqghBcqHZ1pD4u7",
  "key26": "3Sxw9Ru5n1xZcogPoVa3DGQCjuMmh89iZbrFfzZfFanWrws7FouWaEHXABciPtxgzimeP9QLoAr5fbDjdfWZo6jW",
  "key27": "3A99Y9wr6sRckGFwhnrAP1MtAdMksyxv6tUzkqad7wvBJdbt3yjWkLJeHQYGfWD9C7DsRxBfRy98xkA7GtQpKKjB",
  "key28": "4WFv62yifBSUkCyFV4zcRb1SviWJtgWQ5e8FHXYCRqmmvqYoUGJoRYmm64FQg1EZX6SSfBDmdcuFNtYDwwaNpd5H",
  "key29": "J2y1SN9D3LiXcdMB2QsBJKQ8GBW7dvu9A4jbNRZDDDFSXN4UFNjU4YTUAL3EiSdtyBbgTjGF3kC7U1xPqPLRQd7",
  "key30": "53XqMqHdJbctUe1WckU4B3z5W94ZaKT61icTmr5PbF1AyD6eYkyz6BLiV6k2tKXZyACCaNLixJf1nhjFa6FCPMUe",
  "key31": "2W1ECcBkk623Doz9SCuMuDXyueB9JN7JW3rHUpHb3gsiAngCKBdMqNtsETTz7aFuN1d66UoUahwHs2AkpW5Qkinc",
  "key32": "5iB6oazckVP8ScSePe228jcamfsdnadrJEuTNzDm8YpNQg9s2Y8ELByyGTqWz7ZDTKYYtoxhQ5krky1XKSayviQM",
  "key33": "354cuRwmd4yVurdMz3ovb2UQ7LyFSr83vJhkKKRPWoMDYohMo8sVBVbSfBq9BfwgVqwVQoNCQYWSgwnau46w4B9N",
  "key34": "2MZYjpH9gjFJj9JiwthFJyddq9qf6AikekjAadPjZkWMYBM6RZRnzMN3NARF4YEJsE8VRkfgY2U72KJBUVMgs7fH"
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
