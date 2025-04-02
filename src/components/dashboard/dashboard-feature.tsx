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
    "3x9QDwZkobiLFMZpPsk624VGHtvURu1KzwrLAfRkgEL6WG5TxALqUGYuarknKrZGKUyxypCqiSWvBCyps1d2Yq7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ncJeftHLgtEvxm8Xxw1r6K4H7SqV6S3XucZYpDNX867HXHMoYbpC8v6oSRhmwfdZVRhDjDaoqXEP9qP7gHZ7AyG",
  "key1": "2VTXomLHkR6ufW8PwV5jw2hE3P22mPQJrJMwBemJ7RrMuezei8iby9PtqD5wMuo3KTyB7NdLyb3kePwae8i6uMyq",
  "key2": "35h1wAH1taFrxPydKiMULyb8SxsJZ6GJ58wiwoTYgmgScBXL7cuTYEFMZJUh7As3msyoiJJ3FSKmZsSS7FJotzMP",
  "key3": "unXUFrcAUxuieb4AP4kMWnPsxR152FeZqEH7yjSZDnDp5vxduhYNBJvddZFsUBtAgxyGKAshPNS8nu71zm4uVc2",
  "key4": "zqmw9g3Uzqdgmrc6Zwh7YJxtcc26Ye8t3U65eJ5NiDsZayZuRkS5AiEZxmGkrehaRYVrPjhkFmS52VXnGBiM3o5",
  "key5": "cNYhrYAaTYqTD2sY1xJ3ykyFTshyhjxzckBfrSz6Zp6XVK9TN8cRhAXQjcHyTbaK3LXgnTyYWcAy1ei17rdCRyT",
  "key6": "BDHqrH5QPBVCGPMfRyWkZszDrLUW4M7gmTRSEZ8iMkVJ5d2abY3wxhEcbtAW59BnAfJPGwXREzeYn24e1jww6JW",
  "key7": "3bX95tVmvYojearRt7jC9nD3XG26DYxdRyFD3XzDCc6y5LZ5ifPvmS8HmK3npfUwXU9oDbWH2FoB2veJoQoosGuH",
  "key8": "5WTkW15nQuN4KCEYoYp9Q3xdYZaPEJD6pZ6MAv1YNZWsGaKBJ5fkPbaZU3TaWH12mJsYujsdraQeBEfPTMamg4qp",
  "key9": "4KodFbFFLESV4MPWDrURp4HE99ZkhmN5upn3tTYrFrMDwET1YvuiLsxVSdKfXTT2b2UDuZD924XMRP6JraUCkr6p",
  "key10": "2USQQiX9cADha6DK7cUkbUfw3L5ws42iTkoghwJh3zHZhdAHyYprQJAYFFPyoYBAXFkRXjk4ovDFJoftH6Vwp6bs",
  "key11": "v3tL5wztK42YdUhF4Kst33LwARvbF1M38M7PMgDuwcuMn1KZrXYxMwqGhstRUwEZvDU7VJdRCDbu5LSLC5kpp8H",
  "key12": "2MpasGiMyZrkrcrvTSdEgxLsmXNtHhBbdFPkEUkqyYpJJjYEaCzegjZ2MciCZKcuApXcYLpb6c3jXgXVCTBG58j2",
  "key13": "4bVs4pex1SCyDx8k2JEDQEPW5HBhseHeBxifmCr8hUNneFcpbe9H77KZMznwAPjxauEsDU6nrAGo2scJuvgXLuHk",
  "key14": "31kDmf2k9Num6FngDcHuRMBP1kDX3xJi6h7B3qEdSTLFPJxzr7NqQZma5y7DyZx485BBQukxLCyPmGtUbXVMJa8H",
  "key15": "5wURKRU2QdJbCPGMV6NURK4PLLokBadu8XTgYEE4MURQnEevqs6YXRTwjupZvX9AcRsJA4THEaG9qQ2VYphPoUTP",
  "key16": "37ugifZHHuhGWAx9WaNTG6FivYEftvhZqdq826kXeESyL2E22fjugXsCpRtJhjcZ3aRUNXWwD7QRd5vKyNbiS3LW",
  "key17": "3Kv849tEhTemLTti9452a8og1S4MUZmeSXc3fG4sV3KkTTAMWXqSXfnJgDzRXcj57oftkv4K9eLngNFMDPPbmBnJ",
  "key18": "52aRuDysFRcCbxKz3zSLWYzu9CxGabBhCcFY7cM9XjQw3hnsvkGtwaFtioQGcoq8bqMxqkqKPk7e3puuBEKkcp6L",
  "key19": "51oHdYy5wW2w8fRAj2R5srwxqvffiHpo7bRTxwFW1RFa4dTScx8zcVuMxphTYGKxs1hFG231dKNZaa4KJitKPmcY",
  "key20": "2a5n8z1dpVaPcu3sVJnf1by2Tp7d114LAcpjnt3zb6AmncAHqXtBfxPR51VG3oScqVbpqzVwmoJ6Mc6QYZo4yfAh",
  "key21": "4PuRxhtAwsW6s6L8aKpyoDuEvQZiP69LUX9vXheS4GiLeAjNthhyPnH8y9iEBQ85RcvjeMR6txjHpMBFsdPvWRki",
  "key22": "4TRqCvutHXUKYJPBw6grDmJ1STjf3o6v12nZevc4G9j6itqUGK6eGFfaDzjB36H3KSkQBoqwfkGMzGEJwHV32BpW",
  "key23": "5dxeZVV7NwVorrn8iaiEjso9cgZKaecM4MznQ1Yqkc9t9kP9odST4oB4fDBPtL8iZfe85DTzmTaDXCnshUKPjT8C",
  "key24": "5Rgc9XPPCy1JRaejYxAFc1dNUWjr6vg9vSyPwNtjSPywAZ8ThYcctjnTAC2eyXZE92NEYQxnH1rtA6AfnViwSnY3",
  "key25": "3ZPCXjueduoycWDuF7ob7dSpdyyHP6ZnNUZdvR57Qc3vwzz9FhnZJwYR4XosNyXuUa1NUssqr17h1Rdbz6kSi2ee",
  "key26": "42nLGsMCcccRE6zYNKBTiq9XSzbNd1hf1DMeKEYzK4GRTDCHWyZGLN33JPTn9kCkJcaDsFuJmn6YQsKevEbxJne1",
  "key27": "5Gxe8Xce46oAL3CTLFiUWjApHf5T1xUa6UZ5Uotx5sf4cNH94Ykfqz5mAh3ttWe9uxdy2jm5i9cMKZwFtF4zRvkY",
  "key28": "PftysVknsgqwyyAcfAx1Q395qjqcGcJP2ADRJZutmrakKBfdrgiqTerG9FNCQLzJuMmz4UcFHiQdcmcLhaWVTZt",
  "key29": "j9c4CRV5JDKG4ewtwWMxUK5jQj4iE4PG5d9yboJhV4r1kBNq3pwzMjA21JqJtQMFLkP3jjbjos3yrJee5wQnkxQ",
  "key30": "5RCywvwFNP6amcbLBbQPiXL9JLSm7KBMpT5Eu3szhhu5Bq2tDf3ttRZR6VkC9TJpoy79t4tV7WrTB4272ZH14wAK",
  "key31": "22jCfRQQMCYuwKnDvHtUqBucDcHUqK59WutHbTsg9MRRdnzQjrfs1XwizxALTxdgztLxWeWdCPSfHZiCMrUCFUrK",
  "key32": "66yNh1cQ3py6Zb27SNsWqwUF1XfEez2UCT9NV14jYNubf9m9Gm364Mji6oePRQaFdt24mrH5UxBMGxhChSQqLu2y",
  "key33": "5qCy22PBLNmJAD4u2RryEsq4B3MKRYtQkjtdmYE9sP6rx2hhTV8NQ1SroBWRXs4avfUSbJhxstBKwPCj4d21h2uC"
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
