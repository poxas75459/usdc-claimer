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
    "4MGSy3of1xHew27uCctf5qcJLqiFJ2nDQj44tVBZaVWvH9mJuxNvVsgnnhqxvG1jew5HutQcwgwygan72Bsdriq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5juqk557Si7dTszCA9oz6JJTpFexgzKAp6web29ritPUpyGp2ajeLv9Y8sC8H26UpTX6duVbWxCdoi7UWYXFJLcS",
  "key1": "57PPZ7hpQWftJL5imSfqavYRUEVxPNR29MKg6PcNck4uhbgdF4acuUjYq4fhWz3ybc1Vqv83ekWB34KPpUjdtipC",
  "key2": "43a76Tk5FyGymmZn1rJdgmM392iXfqWDu5ZGwarnzw5f273XzchjSRVDyZwbRS5MtEmZZQRmxroQebLqL2rCDXQs",
  "key3": "4CQbRjVaV7e2ejt1j1rxqiNkdmiZfFYL8SPVXnXuWkGEkGkgADw9suNVX566uoZ3ESVqakF9znoySknsUpHYVqJn",
  "key4": "654nNYLQxqXwbkLpyVBWRxx6u5WonrDq63m5tFbcrfceNTrdkAGzSB7bU7NNyB5rs19rVN1PnVmt924vAkTWAFq1",
  "key5": "cGVDwVC6EeZ9Wdr6hM9sHXUNJmCRPwYuEAFiNUKMqpHm8dRVcdkA8NtfCAQcXdLTNp3eWcNJ9FXMRRsNFBqWMcD",
  "key6": "3PTvrJqJA1VNWsgKKEPR71Cfk6NVMWPn4n6yihFruaLwhfpnHAWnck2GabMsQSnwX6pLWKBxpq4yujWRnSQ8ceXV",
  "key7": "4jJdwc8sMjpt7n66YWfXefqMxVm3C6NHKqQBRYnQZtZuRddqoTybaRWDuoSiz7TvtreB2Q9JbFEinEGwjejxbuGy",
  "key8": "5MXcvuqMPUF9usS32bQ6sZUwibzHBtEHTpoUf5kVC8iws9SJuVbAEVwP7drD3mXHSp5e7DUsHoc7mGjxSxkeL1GH",
  "key9": "4mEmPbC1Q5swDAyAd9b8d55RxHY8MDumcoVZPFKgND1HQzHCYSnfnBNDtgAwAUtszkXUeB1MjYheLEHAkAnJPnj7",
  "key10": "5KpXN1SNSAEBkcZqhd2rhr63xMXEciY759VMZ8JqKQEEwBr43aFtz8zDWXEbhF6GgxjKKkxK9Nz6MeHtJjZLmcGo",
  "key11": "33xCwQb8mhXPGzKAj555QQGvXYMuMc9s5VE8D4BNKQHt75iida4tk6aFzbTVDD54Ve84WTtdSHbPKEQfnYSYAbBY",
  "key12": "42tEUbcjobfAebfjNNdnGEvJywtgx9pRuwERpP7Ut72vJp18UNySSbkfqyNL3uZG8dmPjxppihBwWpFkPXZgoiDJ",
  "key13": "SyzQaSmsEmofRSb3d3XamVcfz6yXq1EaiqEKMqo5MXt744t6mDMjQDtypERZtxrXozMCryzVqHvskDTLi34qonz",
  "key14": "bgoJ3j7YUVvHmSM1jgapmxHLeQ7Xv6zzGMpAPnh2cSmCNQVqyHdHiAzQcHAo98L3ohZMPweVitbTkKp67aFCzAy",
  "key15": "qk8fioATq753wjqYe5Ku1PktHGiQH8iVgMCaaWjsxdXgsDMixkVr5XL3hXgnJb6YD9gZWpeJGgxWUakofUdDhKe",
  "key16": "2eh5MeZLfrMdyNe5XbMVAs8bC14EPFfvkzwcAyBr77JjrDzT8qVP7bvZMenDdK9nHweeFsprqAG99Zrkm71L44Cg",
  "key17": "2w3ka5vpvSLFwFSFzWKxYRvCU3nBNwNTyaLVixpme8MmtSJNv9o2RwQeNEGowRPwJJjjLppiMkXpG52bFx36d2cK",
  "key18": "2vhN3h483QEJLQ8C5Y5Ya1avwG6Mgf7EbrSKVrZEy5SAY1QdNghbnd2E72ygAqM2JCcZuehzKaoz5hm28griCadS",
  "key19": "29yJttuGPHSKXeXzV6tewD9wtFUfbjbnHoAmFCEi6CrmaJjJEQqavgsMQVqmUjaFGB7NWtsW4u1Ua1TvRduZMWBX",
  "key20": "4uEYWnJXGAbqXEGobzxh2LRxwzq7KZ3pHLWRxnpZh8psGJZZuDNr9xSipWzq8BJ1wEvVKDdUTmyLCnd8MD5Tkjpo",
  "key21": "4io88X1GLmYNgY23U8SjmjXaRYroKKcS7YnQtkWGgqr57dUtcxSKeczoEKcpB82n9qsh4X2DVLxaw3ufrxLa1eW5",
  "key22": "26cXjYZ53vtLsef49PhBs7F8fpFDnsMKVzS8yKz1vQNd77Fz9MR2oeBY4HCMQZ44WGTEb5UybH7KQK8NeLTNcUzs",
  "key23": "3pTjrnn4cmdA1ca2Ttt9dibYhuCfSgbfNFgbWgmr6MsW6nfu18eBKpSJHPmmSkughNeEAu1DJwkqGrfaifJ5hTQN",
  "key24": "hGXe4JohfPiDATeftxjDZXtX78ioM7fAx4dPBrpRYRPxx75JWaW1MEq1PXqpse2pa3D23tmCuZguL1VYzusPtCt",
  "key25": "2CcFQPNAHunjVA3gi7di7ycFgvrBN33mxa2hd67DFPjVtvNJJUp6fL2aA3MaimV6BhvAAp1f1aH2fB6ybtrtjaxG",
  "key26": "2kKrWSGyyH9gRCC6r7s44YmrK5okWyWTHVHEo2Q4VhBz6Q6MjZAE9hWLFwxpeiAhQtXjgoPhWULjS4rd5Dp2Br72",
  "key27": "4F7eJwppBSKrtAG9UjpyMn5WyhUDZmhUhcuBpkqJktLwb5Xaw1PpHg6XBJPF3NGzsLaz8VF4fas33UR3Swxf78dL",
  "key28": "4BwyzgvdqnctoZgnvh9mkJwBRv2SeXYpQR7SwaDcm2RfqP1VsHieAmhJSYMigEeQAKspHTtWJTRgoZYydvCoEGmW",
  "key29": "499n5KeQ4ue4owzfqq5D586oowd5KsV4w2bvqHMzuFkWGxy5U3Knk3u7MGtnnFcoSQMTih3e5ePCW7Ry2JoFKdfx",
  "key30": "3FUnAuUbCxCQzaai1vK6zP8KCTQbJG19mBCdCBuooWYWKuUemrdY9T52Ma6xyVDwgXuoxMJ56jhTbFsxekStyHP3",
  "key31": "2fZnLoeT1udWpsrFtUa1DEvnApPK1Lqtd5vzugDWZwevJ3PydLyZR7vi1J3Vio2oY7gBNih9ChZpdh3yyNtre75v",
  "key32": "2oyu1WF9ykKemv8YRWV4acs4y34TJBwjcjaq1kfM1j5aGjEu6N542Dgo83JwUvHLprNN5rCT27omB39og7YA4PyA",
  "key33": "3fZf2Mj1JjZ2dSqQezafhRCsBy89aXcWj1VBdrTno3ea51c9fQhL2A3wUUb8DD4yqHSjgUMknKzcUCF8XSKmzwD2",
  "key34": "65z2y23Q3EUAt72jPiGSn69wyxZhUS2rAGNXjaknQZNs19SETAb1s3FcgnCJTcRop9qSTfxxUVTDKNwUJW1PCGXP"
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
