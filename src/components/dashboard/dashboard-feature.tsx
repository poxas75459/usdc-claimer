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
    "3tf2PJZMnn4kbkjiaMaje4NxVwt82HgpU9e4ZWt4tw5G2Kcx8WxtHjQPd7ccWEHheWEzDodJZpyrV6P1xw3qdWGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rboLhqBC8uGArGeomFwpgZBQ8ReQhhCK12zRP4EyriPJB8bCnELPwbGfdExYk6fBk3dtiaQ5yv4SywuDozp3YHi",
  "key1": "p6U9UPMTpwgTqRYU89t6LsgeNsJKvEpihJwdhrHpMfy8bgpEu6cdJo5rH3a1ipkCKymu2nwpvJrm1eGq4jmBALQ",
  "key2": "4Ni6cA12Ur52FiqwoAy4SHy42FiN5tVQEJnsR3CtsgQH57HsUcmGDVmTXNckpbcSJsYGjXf32qMFEinRUJcc51NZ",
  "key3": "4zpKf2ky5SHpmftA8oXLBaCHk4JKNq1cWpMWr4xUqkt1rvQTrbwKuLVVpSmirBXetLdryEQNd92mESrUMSkru9Di",
  "key4": "37xjYnBLggNmK4aV2Q9ifwc3qRwNSKbzGPY88w6ksN87fxkhaXXUrnd9XoXMWty3F1YkLcKGAS6XUBtqpvZcv9jv",
  "key5": "3iMdapdBYiqKGWKCwdyK43yqB7DMJramxM6Jii9USB4Rq9R52XjVdb1Sxkt98od2mByRwjev3AuW1kW2ds7GPrfg",
  "key6": "B7KdNGbSiwpXCDhh84ykM7CNtJDuK7J2KjkFMSXA4o6bHVNCCa6GaWJpAHegJKRMzjdgWuWCMz9gHSq2kMSbbWL",
  "key7": "26cAG5sR3JCZ8ek21gquLErPnfeTWAM8PoSK9w8HGYqDpvECnCwX5BXEGxCBK46LgG1yL2y24N5AVYibXPKgm1Wu",
  "key8": "3bBXv2U9S6m66CFnj3LKvUJUc9vSajNZWpuxrztdC3XLjoQia8Svr6bQ9XHvpsURGp1q6Jhzm39GwNbEUYK4kyXm",
  "key9": "5epLVVK4jSTwGDVnntKd3YDYxnjJuyGHiEdrEV9qVH27LW51A2R8Dj19rcp9p24Zchnp2YwicPGL6V3goxG3SvC2",
  "key10": "2PNFx1qJhHyWxZe44ZsXkVcZXF8ZUf2agGrobAQmTQoptT9uGr7kbqfZGwZE9HaXGGm37R3x4jLnLGh8aqrchmC5",
  "key11": "4w7F7VASJNnjNuTEfm1dFXTJ9d2V8byPjzWbAc935afdX5TAWv4cWS3tjSonFXuVRznGJYwVRAadAng1zHjpmdJm",
  "key12": "5cf21hYwBqjT2aJs1e4S3MdBee32gxzJ1kfERAAehbKTv6bDahvfMhq8k6cCqcM55i9PNaVVQFaiiHezKFyhtqf6",
  "key13": "oLUWU86FTofKCyDdx76D5V2M9ACK9QAS8JWuK9Hnv7Ghed9UfQKXSqDoL9x7Cf6wm7yLYxjXZyqBkPLoEiHGhwP",
  "key14": "5y1VVSz5N594RXPzaXtCDneG7eBwFVSQQtQw79ZGpEdhs58pWEiL4dn72XeqLV7Q4pChVarvAn5pBu1YvcB65PvL",
  "key15": "2S9b54j5En4mdtikj2AipWQneF5C3ofbBY9UC348ZUEnRZ7TjeZ9ehUjB6gU4zW48rsx5M7pthpCLETdSda48KDz",
  "key16": "5P2W7ZGU3zELrPRPZv9bQHEdaXbFwWshsVLA9QmAoCJYBSTrNUdYCyswzEg3hgq6zKbV9vxnm7NTaPSokNRGve7Z",
  "key17": "2J4CszGPjmQzo7FpQtSpm4PaeGaSgSTusCd7k4K4yPNdH2f8nVhofYzTMmbYdR9yykiNQnir5UgcqdMbJchWL2cZ",
  "key18": "25bMyB3RiVN6H3eFCPhvsXmSn3yDAjC4Fsehnr7Xj25262AL17D4kv12coypbwBvSNQgNH17kUwpJzKR7BnLhbtm",
  "key19": "26C5VHmgr1oVN7dbmCQSLHiGCdjzTuZHvh4wRraLmei42n4sxa7uVCxEW9GxUpgVzdnahunbLVUzkEzJgjGJkghx",
  "key20": "5pKUyoxLBDuKGmtaFP4gVRTM2Jx6SQhDvVU9vV8PUCnqQMttsMhhFu27gsrCpn4nj2vD3bN3NvV6t77SwJVncQov",
  "key21": "5RKWu25qw7QaPXGtpMjqvqzDmz27AqcCFvQgKB15PLiqQxMkwasK9PasLgVyv6VruXjXSweLDTmZZETe1zqBoKBa",
  "key22": "54ZLgSwkp31pFKStPyaYCn36FKNgYCDtqBMMw9g1tMoo1Z78APELnWMhyjRfzjDsPJ81ZRJk6wiNhTF2skmYFUtV",
  "key23": "Y64pRKW51QYNEYy2sGJ6eVfoMrkB7KMfx926haVuXehzkMCayzfbAHNu9EFrVNXiP5mGMe6Sc8ZbUzGre1WP2PC",
  "key24": "2ismqAeCVvUxAKFzJ67v8TmDaRt2tpEuQuyf7rAfQigGY1Y4mtxZgByegQjr1M15fFh71XCmRvmQ7RnmxmDtUafv",
  "key25": "61ZA44yumFBvzaZetezP6WiAfn29gbEjEuzkzFMZx4LC2Kpr8SFK64wWoBVBRPXnFwVj2PEjadWwCCSjS9LSk5xv",
  "key26": "2JCWDYjgZcAJHkpttckFFTeLGc3RwVcDmjxs7fTFfzUSR3nSjUZk7jFXPYCQvHFEAS3kQKJixM4DV6pXfxcpVEdy",
  "key27": "QFr9Uzc6MSyPFGjdMPfWKS4wugCfoSfLtN6ZNVrw74fzJUUBESRMTSims1Bbw7Fchq656QwyXiRzDHSCYjA9mVU",
  "key28": "46qnk368rWQw7129fWtdr5E7Nkn5wtLniiH1yXaHN2ZVzMcrN34KagLpHMcHc1jw7kJUNW7Dxao2PtEigt3MFvWM",
  "key29": "2K3SZyw7VnuH1ffA3VeTFrjcf22dPwRfXPfjGEZBoxxP5Yp4obJyXomvmA2BSs6r3DncKAxPxtPyXpL1tma4fKyS",
  "key30": "3xtgT6EzFWyjHBRyyNZwocztazmthH6xANSSzVuSxTZuFsdUUWft1jhwSbGYcPzMEUpPQjZ4snzHfFPDgAw3Mqem",
  "key31": "4RvjX844oED7NdbWmKmHBUSUjPWrmasc7hwRdcdh3VDQbExHzSqhubeD1Wtr21ApY588h6NbKaJuwgU5jXQ1GwBN",
  "key32": "5qPWvu5Y3VfkewJsz1mYPmNaPi4oEnMhaYMX7BygnGPwuiF57gAySmMkn23Mo1KSCy7UWmx5xcqvCY6L7pS4ppzv",
  "key33": "2ojc7BxFMC4qt5j4svUEMfTCArMDd4sagbB5zPqibo95hxfrtjwUYU7CtBqeFonXPBVuLJd8hccyrXH3J8LWSj2a",
  "key34": "2oneF329cCJ1VRqQ9qgouGLEKGYwknxhqoyENYBc1G2ygZzvQwo5P96SUSb39AoVuZpZbmDkAoNNQ671rXj6Cyrx",
  "key35": "SFS9QX1pvsY5xDnmDFqij1MsyzaZaory4NCe951K1WN4i6rPXV17r4tRZVnkZHgEapbMKicmcfDChsZV3YbwKBh",
  "key36": "ks5Sj3uihTtB7JkqnAnW2RjtpajYgsZ3drMfVD2GZsa27wpz3mH7qW5ASHPQj3wrAkbUjF8gff2tNM2p9mmsnWN",
  "key37": "2iQevg5EftewNeP8m6SJbKXEgw2aYdwaki5cyiKQ3Lkdx27if3E3xfMLswFz4sHzqFfifJ7vNKVVbCuYa881qxoN",
  "key38": "CbSkKhejhrjUFGpDVKLFfALDtEqPqFcJ7B3XrV7vYuiB363iuarrZvGvHgWXcjXDSd2uLXmuXrBovJz5vZ97k5M",
  "key39": "3dq7jQvpAshWxNPur4u6n8CYVwyyu6oT1d4RKbg3Jp6ZZb4omQ3joLyzYYwSJpscJtwwyoNXhA2cocrmuRc9F2wT",
  "key40": "DseSpyqWZnbwa6yw518e8C7Atcixmg6QpHA77ySD7TJUCszDUhVyccBdAWmkM2meDiL9dGviVYL5fM2JrGJFQ3z",
  "key41": "4hTV8PzjonXJrVw3QvpEuC8Y62UurJRiXdXYY5dpuMwbUxEzh6fejKRr73Ewscm4VvDFtxhpbi8zgPVHBhw2CWnR",
  "key42": "3V5U1hbAYwThZdDzZUFUR95k81xe9CHZL2wPPxZqPhw8wdzCifCXEev5vob26u3eJLFymumQbV5kkh6gnHYa76Va",
  "key43": "4kHJ5YUwTnrWvy4nmEWyTovzTPzUsfocXhsfp9RdixMYWbNKPRLyuvh5HZxqjWdkwQ2Rt5kznXF5iidRHucEvMzW",
  "key44": "5CW8vjxgsHwXtJ9HBY9dvjYm8vL4Rt3cksRfGPtWs5ZV1DEutd3cPSPWDkyyVm5Hm6scSts5Y1uHfrpsaAxoejxg",
  "key45": "4Z5qxCqBdKuYYGS5VWSmDDv9zuGXSwD9JLZM74Lj7CMtSC9DektdZQZTVDesnPtT4tL5AGZFSR7PQGyk7iUkDDkM"
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
