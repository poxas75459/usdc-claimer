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
    "3Ddy34rGwfvtuvg8mfwUsbQo8vpYLbJqkjM7conh9PSB3K6QBvwygcGbkjtPD8RCBkub6pzKTzZCVrBGLrF6R1xQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EM7UM43h5xrG33KaJpLnW3Ajk2BN52gUScVY5vrvZJcwBTxpYHcrsGAFWZCUVXVgAEcWXrhesPJQSJRQi7oZ2xC",
  "key1": "BJ6XQxeACy9b37mXq9U5XGcRA5zeGQgtKTZbMWeruZBzBqscUtF6iX8cRGHx9t4CRcMVy1cWR8upy6hKJr5PW5q",
  "key2": "3VewUniAZQVnzc4rbgKWVs1EV93AjFbhaZyvL3t648L3pSqMXrENE7ZjGCgc9Knm87GJDf7nPHXK4mvRDkTbQSX5",
  "key3": "2rMVKWzGJ2Fyn8NiewoaEn4gD6iWTwmbJjzVFdFPi8rA9zVijcWtpZRSHm4YTBZw6iu1HPXP5zGM7RttE5c43S81",
  "key4": "3qQZK3V3dUKQVYmD2bFTw1qzq23pcxxdUGoqvjD4L9Xg4fi7iMpeMVH5qazxv9Nnpsyxsg9kAcfsiG42VAmmpVnx",
  "key5": "5FzjgsL8fZWuE151t9KiyRumSD4cAQPGDsBe59W5YWzoUzz5gXhPsJbyZxGuFex2G2yyNKKo4hkLiPjgiid2pg7A",
  "key6": "4KsxxHDwVnX3dJ3CpKkJQmXiYwBaWu42YhnqGReVGvVnB2taJRsgssH5apfL6nYpF5eqREDNtyJYDHsDgoykxLih",
  "key7": "3fPm63Wd5TiNRrPe1icEAoeb4vjYAW8vyaod72UdjzDmxi7zBbahXzxeGG9D92MtBPzeEbxZ8wJGwrwxqDztDZxu",
  "key8": "5MAZdz6JYW9oGHP3xwaKDY6kEf8a4CMt8ySaXM695kBDJqeFXqDhCwSS3XDqPzb81L8JF6pEDXgEFNNiMU89p5pe",
  "key9": "kzpnja89NNtZ2jj2HUP8Z2f8KKwzfMMMXRMG4JYwX1gtFvU1J2agP7PsHbj6pELA6Rm7CxWLkpzPooL79ui5M9N",
  "key10": "518nAXH5VuYXuN4n8LyLYkffdbsyvSs9krfTWk6WmiP1DtgKEzrEnZ4vuzjv3K9Kp9sw5NxWUUrUG76pmDN3q1JY",
  "key11": "2g1EWjdSWWmA7peuzuR4GjseyzzjGWNH626dsPQqZWJyrHdMzn8sZkLsCGYWeyHYf5NqYQXvFfBQ88davzwqysVL",
  "key12": "29gNxUh164oCQXWZ5Aire7QB5tAxzP3HPoWR69YfRzAFykd9oshiAPGePyeMvyvwgUBKUGJQsFoXUwk9pPPjnjZZ",
  "key13": "3mgYqrwPH1UHi1vcrarwg9iwYiCrp42XLZEqXiMnNBNCR8Reo6mgLZNzrnBUHBknAM6m47dgHqXi59o1jbtB8kVy",
  "key14": "2C6yimMo6ATNiLpg8ZujiJNNsf8nfv9jnjn7DgYgwzvxqAjEYcBzPBNYkmPT6EoAZKpiuGrZm1gX5qA1JZSQuzSZ",
  "key15": "5DHJmXBuYRedvFqmSnQQ8uBLPusa8xicfmsUV9g38d4haghu5ZXVztoZpPxoFno9s8o2vpS3TE9vAfmHaJEjCeeo",
  "key16": "31w3CnBPdvacSebpv9fYNm9AYBePWzE5Cp7KK2DLtZhyrYNh8Ap9UFdGGcKPmwVyK4X3UwvyzmUFoMvw7FSHJX4v",
  "key17": "5Ug39ZTu3Sq8FgHUZwJ73NiocDuGvDBvetS5dD8RjGuJapZxcUJ4Pp2rbJaxGYtCJSX3q8xdS6xYQ2KyoismFR6N",
  "key18": "4Qe2ArDhDNG5RVjDJJdSVtznzQ7VaEggnjhxWsQu7iznynB5bub6CjVzGe6rJZSL5s7o9cmNZMihQgmvbrp3kNxm",
  "key19": "ZNT3dNdSP24eq4WeSBSMooC5qKVt7EarDWvZjYNoc1PzZAuQcYWree92fw5SPsA9TQyynHSSJkV1553nqywCb5G",
  "key20": "72R7dZMTMMePvNvQdKhj2qUothu3dFfGdFTsoymnpjHJ8NehFY9ckRKqyb3mGz1wJTqzeLu3E2B6yHe7XVnndkW",
  "key21": "3WosVYu8pMxPS3ezsCfdUuqrLXBatpSRW55dBh97TB2xNhE7XiDGSAPE8eEiKkuQtrxVUbJ1iBus8Cfnk3kmPu2u",
  "key22": "3zJtqtxNpaYQkhJ6xmMKHSJMDKFRXXWkcBuz6FzY8LhFRY22cJQr4wzZhJEgcDfSN4rMbWchwn1d7nWrYpXYRWzt",
  "key23": "4oAuN5W4RC1EbBoGBUZXMh8TDJuYFvjarPNwvbbyVJVUvCYcQET7BuSZXdc46Z6yta6UijudwHxDufbjfo6yHyNs",
  "key24": "5oA4dzx8wRPHCkukkirQfBSvj3Cxw6WDUorfxmvZNyfnUH5v2SdUNRT74SjRPDFwA9CsA3ZSYQ9v2Z4NqjAPh49S",
  "key25": "552kLuK6Lxn2ibKNqPoGag9wHyzZmvXjPsCRtXa4MFY1PeWWTFgMo5GhZunVXAmWMkm7Srd2zPA87CAdRD6mXrcX",
  "key26": "37PfXu38JqsPyt4J1m3Xuj2ZkKGhGsn2takhnWfXqPENaVnwrAnhUVeqEPHmTQgiAuyLbeQ9Cn5Py79GJyymohnA",
  "key27": "2k2jwu286eYX2SkqRTk8ydXeEboaQNEqoKVZm6ZhQzEaVf8n5Z8kUMdFSTi3baNPBFKK7YcKWtV3HRM6RvVtLTKQ",
  "key28": "34EMLPpP8trvQhBiUcpSp4kfjiPAKwn6Ag1MdHuLhurRKJhwNwRP2XeemecFLHwpn82VyMAe6Ut2D2oCUCoahv6c",
  "key29": "2Y1C8tVmDgs3DNXkZptedWtSZ1JBtzW7Z1avETbsgDmUpa73aSXBDwJm5vYWbR6jnprqBm2xgrnNAotRHyahBynW",
  "key30": "3CUDAVYB3T3GSCmtXVXqSr6wuuwrvmGLaE7S7ey77pw4hbNU5YdDEomdtaF9PbyefmTJ7eK8qqZLkP6oKRKLHD9z",
  "key31": "42zGY6bKZsJpGZPCKDZAzR4dFydnwRSGEjnw11grcchjxSKAGKNZ8wjTwhwRciP2eaRURZxYNcBvN4hvmHgPTwhT",
  "key32": "4gTDieEzYqThGx3gJvKEcUHNLxZujwNj12aboAumXrs4t6zcmusEtNfHmWeUWWx3wd6o9X7DA4hfASgmJ3WjeDeq",
  "key33": "3Y5414tSJ6duU8hgcLaqwSs2mQPYej69L95dsa4h5RX2RYYWDzUeJW2huSuPcpB8qRb43xSGcEGwzipnfTcJCrYc",
  "key34": "5FdnA4ZeBiTahm74MHHH1hmWhpjDQfEDKyKuxcPe2sU13b7YemYGqd1L77QX2doNge9rtwaaDhWCitpFC3VFYkJ6",
  "key35": "Cq9SpCVJVgoZXnfKmuWHYeP6vh5aTXwQcsAWGad6C5Hb759Qw5EN8Su52z3e25e8Zq2b2Cxj5RmSqRgwR1YkGhu",
  "key36": "4niHnxJFATY2yCEUxryJMh3b3rgxBdHe4AhNSQGEcX62z4BNpYVfk1mWSqrK7RdTqV1E1L6ffEPYntxqkvh2tKA9",
  "key37": "2puCL8fmZY83AoDgDY3ZxP4FuvxbkrwptpyTf8bEcJAi4SH4f7NsfzBQM8Qy3BtRAraLLZ21Mz6eEhxhB88KKFgy",
  "key38": "3cPWWY5Ruz1UYcsJZLjVLW8gBSwcuKNP4fnne17GXYHxvusxCnspPHUwnufTADS9uELeEGfApXnvX1TqAPCJThHG",
  "key39": "5GzDwgo61F4A7LHB6QforxU9hPeiNZVyfD83aJ6wMYRdFdS4tNZY83CbceGZB2D699s6HEj2iFfZWAiryocBG49U",
  "key40": "5CMpMoiZURtrKajJrAaz4UH3EyNz4dwUJCKXPkQCj2vFymY5rv7W93wENoAAT16XDZWaFePM8zCBuF4RvrWA6TC6",
  "key41": "FZpBCqLHBwQ7yT2D86b3ema9eba66eMSk9BYXUJgMKAccgwLbSU2BML6ahVc4NCG9fe7tmVB1KAfePFQ7GnZQf7",
  "key42": "mca2XD9rph3TeRHt6s6xiF3X3bD4vJk4fzEYQSYV3v47wqLF9QBKbgs1o9GCx12zN4QYSRZAaw5K4SBogu7BKNm",
  "key43": "5XcnHwrZuB6x6my9pREC3MQAMKaazWvxLeNnVLmTmCUzgYtv5VhBxKWrsvHhykZiF7mVQASpT7KkSoVv5phAwQNZ",
  "key44": "2L8Wq2BmfK4oXuzy688xSU6gMNgV7CPJrAP9Uc1T9K6wfsHobGk7BkBZc6RN2UENWP57rU6mAoiE7AxEQhSVoDgr"
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
