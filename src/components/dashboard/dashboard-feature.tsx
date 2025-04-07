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
    "2HqUfJJY3Kih5kKWv7V7YwwqLtch974K9DFTa1o1wMQw3HE78eQAnckpYQQF6Xkx28ztev1Xz75PBU2JRMDsm9kk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i8ziF3ue6t9WhzQcNHR9j8oBQrj29YachEqsi93xbjt4cinERejh5wm7imgNHNFCwmutLAtt6qVfpWdBRuEqUNs",
  "key1": "2Wv6zCHW8QefYQdJxAuUh2K8rGqUbX7rivVFJGHGEqqkGzAjKvP5i4D27rJXAwC4avWypMZH3XG9jKoTuH5KeHS5",
  "key2": "siqZGxdwLRYjGnHA5Mgi9ZJrDn4mrodzr9Sjx4R924rd6PLKjgde9RvzzyW998LE3GBChgVxwqWc89zovdnEwuc",
  "key3": "2AA72WsvEvzvaSiT4zSna11L4XJA9SSYELESisB9FbHvTWExRo5VAMK9PU6pYNLrNU7zeohxwJzQyPn1BG4u75KR",
  "key4": "2z6Hxxe2jVAi5fQjUTaEPG3PCAqqEbrwFY6B5cyyNvL3bGgVDjTsuDPaa1ro6cc6NwK2b1pPinGmbaSqHvgtgMr9",
  "key5": "29m6bWMyDMJkdVhxgv1HLMD4gokdLVAdgKGSya2xTAP54iMAdNsPMdBnSVoDzQBTqb9w5tzLv3deQZjohBT4X8e5",
  "key6": "4EnRb4siAjEEuUqAni4mLKpfoHgVmC3DKjKKbJDjz4PH6HyD6zxjJfEkGcPPdPJTRDuEZYdfCzwFTsYt7ba323oD",
  "key7": "4A54sY4FoPg5KBwXKCkMVMkQH6bmEwJgxZ4D8jeLenanLzF33QFmSomzkyaUxu8yVTzcVFuY4WwRJeYDWfeessPm",
  "key8": "4Yjvs5gfhybi4ZJL5wJhYuMnuSABx3dZBniXS6W1t9G6qs9aZHZQpwZDq8kFLLkyQjHsQ7pKvNJdQd293dTUUzwS",
  "key9": "61HBmaYvtJQgQVEtWFABCVsWcS6VohhEWPEo3VPR7QgZjtaEyeEgG5htNQ79VcruiTFVhLXQ1MWynytYeeJzWKaN",
  "key10": "24LSmBmG4qPsW88TGVZoDc1fwpwTuVfLbX5riqN34JZAmXLCC5DANRiYCrUzP1hsJcFSNVe22H2FEvsigJrxrHMV",
  "key11": "xsMSbSRqhXugLgYyskWvrPpuvNXXCj4rQYC6pjEb8RQH3AMMAWfBD22ntKbmGEFax131dUpd1GwjCzvwrhaNZvc",
  "key12": "3ZCJSscZFm4ZdFkYsDGyWfGW3MDAqPr8VxJcm8sc2X4SpvVhPAYdUNxArytQd5JtZyfNf2nX2CaEKy7R7iByKLYs",
  "key13": "5oEYznspL2kES622M14x3d8JzhYcz921Fu1CkcRUVX3R5ULLbkBs24k7tLSaNiprSAMq2ySws5qEPGVRkJWVWnq7",
  "key14": "3QxsjYXEVJ6bdeXhCDntgkTjbTmo1wMD6ayy6RWTHQAfG2Kg7DVqkfKu6G4Qi3ou6ZWBHyi2yf3fs63o3f2AiMxn",
  "key15": "5HZxrRM9sbTyKaoBWJVUHmdo14m44RUy6cnsEvvnyw9VyPBzGTpudvc4sAERukKgMk9D2PafCBM6oDcgz9USd4UU",
  "key16": "4XH71nYGmTX6P4CTKbKBjfWtqTd6bENJrgx8xVYXN47uiW2PPDWJt7zr2tKWwmUaD4yF8kmFQ4mSWAWCmNcDpCsZ",
  "key17": "5TJkY3PnJN6zXe7yUQUqGuhbkJ5scyUBLxjfoR1mBVaeKDtRCaZAt281HJKxaVMB69NgpF4rhhb1h8ZLApqm58bq",
  "key18": "nT61yvagWD2cp798BzTkYRacQyCVVkNotw1sJF2QHVVgbR9UBh1xDDMLvJitPmMfkgWv3omxATkGhyGZAUExtc5",
  "key19": "5JxP24jz26wzmZuHQrz6X9GQx1NLBr6Zv4R6eDiGHK6cpKrPxoqhVvKhyAozWyizTzH9bkgE9EiYdqjB4aa6xUx3",
  "key20": "2Dq1R5JZtMQWHEBNbDnwfeotuE48Y7BWhvdSmffgbAWyNTwWViN73gVSrR7btTDZWJvT6ZNC5W7uvuyMMnsxUMyU",
  "key21": "4faCU78eDdEiFTxmBGjqd9mWcBYjNUDTgziDCz1EHBbrQYJTNQJ3VXaHpYQJRcmFCJqVpoy8wFdrLgrKmEoxCiQ7",
  "key22": "3pEx4HBUm17VBTF51FhYFtjC2Yo6heEgsdy3inZ7tgr4y35LN6VZXEJTbFi1S3K2YyoEw1g28zHMxrPGKJHB3Rh7",
  "key23": "4yfMoCzy7uGCVvYyu5KFbFwszSmEdLXTvpVoTjS5JTJVbeQ5BfcPtqE9a1jTqwUK8yThVYnwX6Sjjin73XzoUsGk",
  "key24": "3nQksiiPnWkNhUwgJoaXK866rphu2UoNGPyMXBXJz8hEcSSxmcvWGY2o5u4HJWXv6mkV9ECqHo9o39wJU49PwdKM",
  "key25": "2qqFkSsys4AvSN67gq1AgRPJQwfmiDKjBiDR7TnyfviGqCfVrN582j65SyiwsAjTm6Wp2gvU6xEtSLYtMn767ULH"
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
