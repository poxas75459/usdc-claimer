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
    "5YPZCsW9kW8kVnaXLMTMoHQbPPPhZi7eCTuEuF7fci7Q8SBsYmWpBDC6qo4bqGaDxrUPxBaYSBELKuYQJVk9BXov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sHcaJBpyzGWLSamMijBMjj3SqFwZWHQYmSJdLEqUPXA6UjwcZviqKwc6kgCXvZryJmui38diJz9NrSP3SRnwqPA",
  "key1": "2QHSpjNES8PbMdg4eg8L8d3QmuV6Eqzig7ySE6vDipuogGuKXwwm3jzvWESgUEuSKbZFcs4wenWUcKjPiwEHDp7y",
  "key2": "3XJ7pdsRJ6kEVwYaKqkuaAQNsopYpQMj6Wr7PUMaPrEqiuKEgw4dRySoP5wy9KHaVXNhwgfrSYCNa3Hp2o7sYibD",
  "key3": "3HDgsVLiRhdcSm2hBF2JDD3mPSqEuCuCzwA9kGT5EytqP8fyKHj9YzV9Jvh7mtFgvfxM4Ku5D1nrEVD8hbwpX9AH",
  "key4": "JY7o97Ywzq7nDZHni5muZJFAs9aBgx5zNMiM9HoHNoxws38njmNjnLT1TMjZQTWqVjJQTsDNUg2mi4cg34UBKmM",
  "key5": "44UrG3Ene7WqMhsPgwZdGFhUKRkGTN2MQ5oBk3HMdr5gAZJoQnCqxyeWYz7Xh8VRmtUBJ8sqMpXUYidhuU3jKMNu",
  "key6": "iffbs5KthzLpG9zXVStWMfa4szrSwx2sj4aW9qZULjL3XVME3eUj3Z5rQnQAa7tkxzAN3DY4enXxRmUib1wqMev",
  "key7": "6Dzv85SX7Ud3upn4zscWs3epN7gsR8wdFtnEYBcQGXJNN43X6ZyxHCc7RhPmY4hrDBayQ28Pt1z2MFsmZ2ztQKt",
  "key8": "3gSp8mrXRmWP8YPgNw8u4HPPER6r1nmuArDgrgHcjP4hfw1uiRuCM3wpNKRscFdnJ3Ztt4QiHSCdzetxL8Etih2s",
  "key9": "2VzuZTNNgSMnDymdBcKbYaih511XZTH4eiJx5fSqykPfXhMtLZ8cxsBVvxM3maDnn5V7SPKp7J5WLRKP1nyWqaYp",
  "key10": "2dsqbFEMugieSLm4PfWkLEvsC21xmwBkLPCYtGnN8JtrLoX3nT6YCDvJjnhaxv8KX4YJhz91RTic7JQ7pikiRe99",
  "key11": "mcWtV5RthpSsaHb3u4SdMGvxce5yvVgabJnwsPboqX6kNYbLrohjpiRgmFET2AXEg4aU7GMHpPq1gsiQDFrmauq",
  "key12": "3uqXxRRh27pSHoxgnHSUDZjdyDKruhXF6YneiGinkhBwrXU9rE8yWiQQ2vdXQhfroDuvaooc5AqtW73Pb2U9DaA2",
  "key13": "576jEJejsssGryGZPDbUest5SmJWhBMXpEPN7wVWhqFW9fajmAzZkNNVh4z5eA76eGZYvYjwbjxuXtQb8VQPrcYk",
  "key14": "Po3BgxFUuh8RoYtf8BM1xUJrHCrv5Qsu6k7Uy3iCcXSpLk6b9UGgwdgMdj5p9WPdiUD6HZZSAWSiwpr46Hpy76h",
  "key15": "4U7ssjdu44gXxqscjia2XiogCGGRd856MWgX2EyuyijSBRz9Fm3LXgreqevdHKj4D9Xhw9sCkaoFMKfKrNcN15wD",
  "key16": "4AJFmNLGvpztncezVJkWuNgGdmqmhkJDE9ps98GjCSVpWTtbWc23J2zFvTLJMcfwhgXBr2NSDScWTGYjsziLBMMf",
  "key17": "4dMHrHRNbq5juGTtXnGbvsGy3fhXH3cDC1LqEwJL53bu4oBGTRodcvzGi2c8M7eyo51swxa7CjWMbkigNSZBGF7d",
  "key18": "5m9skWQodTsCBX1wmTbA9hEiHaMVdLa2Uyzn4wwjBx3KYqQdY5NdjJmL8r54gCMcfjqLoYZbwDH78tDnH7D4chUV",
  "key19": "26zSdcYeZbJKpDmExSmnYs36D6EzXTRuPGLtXr44ymJAjdcMaJoNjdJRhb6qnLPHNPmALtLLfBn7cyNmKkPkR3aL",
  "key20": "2aib7jTZecAuxmMACpLqYU7W1dty9tbz4PosvMRQxVxaqZcFFLu3gCTrSezTXQKmM9zzmump4WmtED4Hrmhf45Bq",
  "key21": "21fE1bxio3n2Qcz7RK55bGTYCT69KXkjv8qFY28wAHX7e7SEKd1mhNgoh6uXrQpAnwUfptNbkzTSj51WjfNwmsYq",
  "key22": "pJBPXDS4Yt8EACRV6yHLBnRWEB63LZSHKdCSMX31eijkoDMEU8m238MwN77bfSsdgvqx3ejfEiNw4wHPYZawdF2",
  "key23": "5pB6Gj4fLRUuncs1PJuTVwMJjWzJiuVmRWuGVopQsRh5MntkuzDmu9CAHS1JmVM4gDV2RSugzMxfT62fqk5BXRSg",
  "key24": "TsxcR4utgybLqGWLvCTVFdCQTKN67aSbfiQKrTCR52Q66wGPpt5S6QRaSrLigse5SGLJaQiLpoUPDhaWSNnCH4o",
  "key25": "3KJPGAjJ1xQZxau1NgbunCJbgDRxBdvLhx1gPzH8vUkyoJg5ZcTkoqGykY4cYRnJBnZg5iaYd6sqkTp3C8JyBEmU",
  "key26": "3pA7Z43xjjMdpzxBXs1UHgVfT28k65cTs6UaDybhR7uRiUHCxqcY9M31WKPPZr6MtJ1aFE1NcHzkXvRUn7NvpdZq",
  "key27": "qjRsceYzdDEM6TbPMSPDSGyXYJWWVXGsEg7wtcrvAgXCztgpwjwtjFyqKCBYGj5Rvk5M7U4Df9gmSyk3N5PpF46"
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
