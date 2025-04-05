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
    "5H6CxBRum1cKe1HE7a6WkFYo2ZHB1CEcEySoDZkYumJNoFsRVj6LXXcnVF5XWmkUDBeCYKaZZ6avtt16ZZpNHgDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52aYsSy451v72MmtVLsakKt8zFyqs4grejiLDx2avv8bkMvzb2k47jvp2Xyp9Xjh8B2uUKkgEAZryMBYYTKMB7W5",
  "key1": "61WtZvDiWqvRRpWrFzrtzWHWE6hTdp6BzPgxHDqaVvuRSD6sRABf3xmzcohud1pdPANQ5pMivedARikb7fkKTAjS",
  "key2": "2A4mfBW4uNKoiF6SH2i9mKPmzhNHgKCCe6v11rGXwwGFtjCJgzP42YSqJcyCNCXbfiASMojSb9xnjqLvJsKHAQ5q",
  "key3": "4GUBjpXeC5iGdSvqBbemNeJycrZoGLHJNm7bR893b1SFEnYV6jakBtUP2e779oD9q7Pm8aRc6dvkCdWQ8J3yLf59",
  "key4": "2p18Th4yVmo1cSA9gFUd197iLd3vWXcJVvYcnB4H2XijS3nPcJoWVctwdtDVt11KRmCHSX8W6qDFDP7ckaiukH34",
  "key5": "5FUHRr5A6gZDR8KvEUXteSXJcaSReibQ1gNJ7rNY2HjivNgEu6UKEm6fJfbQt7hBWZYwMtqM7CdKZTmePZM2UQz",
  "key6": "5pqs44r4cDiZg56eKCVoGfRRsJZiw48ezuhpra2Um8Ds9w3c8Z2euZM8eLxjZsHJ4siAyJ1vXUeZQjRJP5pgBXF4",
  "key7": "3a3tpyW9bSbbebEYU4GKzvtuavsAB4ccirkJxirb5EZpqpN31S8C5G1356rukzpAzZ5xgeyHbwonNmxioXKgvEg3",
  "key8": "3djkeZqo3g1ip1i8RJC9f2bZe3aQuRqnTUdSPEKzTSi2d2K8axeqVRsQGahrq28fptessYVJXAUgkWVE1FpQyRPy",
  "key9": "4h6XiSC2WMAw4ZggyiXJFopKr1MXhQLXMFumLy5ZQtWRQGE19wBH5SQegzkucwVXfvUrXJoz1fLs1ZQAVZeofLDi",
  "key10": "3zHKh4B6j9ge4wv87CxYw2z4MyAnHLoxQ5NUgvLHpfcTxdb7KC2AgUUzh6QgLbAufA3HHdSkrBy7NbL7pR4kSN3k",
  "key11": "sCr4R4GXcvbYmyqRBDxMzcXP9JviXHPMPPJnGTKiHwCjpVL7ywx57snNFX8FM7k3u644em3EK9gjHWggmNDeNAA",
  "key12": "2YRtkagCFdBcicqcndGqLQMRKJxvFU8y1fHxBzsY3rNgVhMuVsW1SkWsKWdR8oi22wmn5FEsgb9PC3pH3nkNEc8s",
  "key13": "3eY6yNWu4jTvTRL4DATZQZJU61NQQ8feJeG6wC4nz2vYEDTWtQ4hTqpxxFPEN2oXie8sbBRY1hvUHdpaP2V3vGd1",
  "key14": "5VGYzroaTjq1izzLHt3n4iECsnVKZU8HtbxYmw5kK6HgKWF53VYNhy2hT2s488FnWzfMT61PwsQZP4baTmxRi8Ty",
  "key15": "jRCXqLTAvzyoarhYh8xaFfEjt1Emu1Ho3TFGajrQueTYyJJnuwmtVAun2WQEwkcwBjsfijuxYiyDcz27zEYsrhA",
  "key16": "4WikHxezxcA3xFzMzmEGoL4cRNSKEWyXeKw26yZKXVLHWXGK21CckH51vg1xiM7V1wRD74mwvgSkDiivgPKJSNA",
  "key17": "4x56UZaAd3h9XBWZZ73kfq2JZgjVDQBu9QzY4eniksfKRigcxt7BwBay6P1sP5xPpRPgFNiJg7wphXF9S4hEeXHA",
  "key18": "2XjkM1CdFsYx4KjC1Nu1m7fjGap81BLrB8KFroiJVUC6fcvdCczLaKenRXAaozjHt63NmaRnGYS9c5wL6WziQ7AQ",
  "key19": "wmDcC7zxNoVkq1BadqqEPmXGowMS829nPuLmYJ2cYtzi24wUFay74Em7pMhbXirFpk8m6MmFmxBbGBexWNih7gZ",
  "key20": "5AqLBq9jxMzGT99n1Pwe6oFEABoJQaNESQuh6bBVQi45wFV9Vh5yV2GwbCq6rv3j1He72w7rFfBaJejAmgXH6ZU8",
  "key21": "4qGVKseKJzgwZySsUbcn1kRgbV82uuTtiK5y3KGnC1EZMEFTm4DCNan93ZWbnsVLdmaM8hxmXkociVK3DiL6VvK5",
  "key22": "2mdPf5otUpQ1DmEd8CvAABfreDwPi7n967AxR79Xv5uKC2sA1uwLeFzE1MtU6V28pZPmgH2bCNugWpH18HBaAS7j",
  "key23": "GbQTD12Et8ENgZJYxhzZKdhN3etXG243tiGoCsEAfqtr9azsEnSwUqr4atqGVSs3h6RhewgjEV6vTghQFuw13FF",
  "key24": "4QGS8bXAaN4cZvEFPspf6BYCUyPpNCVEXT7uRRhrbA5WXRQi9XXW21StjNs2Aj5ZhpkRn8weW6axcKwFTaMqohoo",
  "key25": "52Lj6cSDtNnav7F964XL47ku8VoVro783u6roquyAFmiHBCkPPkAx99ykJ22NboFdHS3KfxbQFJPEUuPjK9Ckb6o",
  "key26": "5zMjomGHZCaSFJnhfAnZ7MqQHhykzKe7LT5n8mczW5ypS8gjJp58QAFJkvH76EDPLwbUjo7xcAxtzfXF56SqF23P",
  "key27": "qP5smCCSJCd4Hz8jhzDHvhjazLVx5i74EmRv2vTDk3DCoV9JPmU27NdjZHCkWRg4UMM8aBQwb3RDEZ4qi1JbuJu",
  "key28": "2dcmEM1u3J5ESP81WTea1n7Uxzk6Mhc3wBqsbH2Xj2T4rf7xH5wfXJUmABu4KvEVr8zduUpZ6wAyy53FLFD52cXw",
  "key29": "2aKsZW1QXCf79vNXzyuDmmVoVgkKs92tWcKYXSQn1Ssak3Yn9jjaEkBkwbcWUcFJDR4n6YKogNvZGoKV879Wmk3X",
  "key30": "5zrrjyorkM4efLE489tVLdyhCQT5p8Q1VyD4ZmHXrC8GH7uRDAoMjKBL558K7SoWYB1UpwD6hHPEvHwSNCZJkxKT",
  "key31": "3aLwBVduH4hfuDmNXXLNKZwViaLaXQhF1JZm4jZtnLy9YvKLubnc5DezsZhb3W79Bg467ygf39sVYgLDubPaUVGE",
  "key32": "SLdThxuWfxWtqwCyN1k2Fb4nHyiT6iM6nbLFjSDpgKnc5fpjHiCpeUNByAoUtRjN8UeDcxpxi1HhXRRAVpsmadt",
  "key33": "g1zSCPxTHN3mBVRPnV7veR8uKVKK1syyruJCEibem3Qj3B8WhHAAjLjDB2FWkNxpp8kfB4skp7fFNsw6vskj5Q2",
  "key34": "5t2hiiSkc2BHcTUEH9rmSPJrMHCS7cQWWjWgy8cMYGfGfmpWFPF2WQCiUQ9k5R2NSiZKGj741aW2Nkg56TpH1VXT",
  "key35": "4bwNSEni2ze7CdvUsQJpFvsN3ukXoyiv8pWt3Jfmi16awaveh6pMNn6xPi6X1crWzVjv6J29yUQckc2E78o6zmB9",
  "key36": "5wV8iSoVVzSfCqz2WaNehHc9BVZWBKd16KkwXAWY7fejaArCpvawDuVWkipSx7uh5QW548p2VVAZ5r6Dih7naJ68"
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
