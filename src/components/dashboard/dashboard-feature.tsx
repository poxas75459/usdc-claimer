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
    "5XVMGnnTKnNqPWq8r5Fabz2iaZYLhcEZFtmXoEbyNrHdHjtpDghb1Y8JZnCg6cDn7Jiff2JfzKbtS6TUvpGxSu59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a1WLqp31ZGgTCxhqGiFc489xwG9hVq4Pm8y5cx5XEcsDfuiFHicwCcqZ94ezbkrYpoh2iJYS4dGJm8uV7K9RH2c",
  "key1": "2UHWvW3au7e6bKdz6QUANqrFYa12dKLmP8d1aaV4hVmAazwk6J9D3toPxiKwLkSdrbJkhuFXFMBfBLAsDhsPggdZ",
  "key2": "4iuwKacny5uJyUZvW8sTkmQmYTFgy1dkDvQgqvqDitENSP9ebzgKyfqbcyTL5H7KoGvGaTLCEwPnqMGYcDGrneDV",
  "key3": "54oXAzatMGTnMaZ4vKyyA8kSem54p3xURPu9PHGn61KE3JyTBHjurGDGSZ2zM6zFbXbMscFrhJXqvdmUt4wWXKf9",
  "key4": "yDPVLFvKtgHGiNLJEmcen62LUyA1rvbLRNTTUJmxHwiqGogz4BLUJ3Ccs9prBDDd5hsbPbZz7Ub8GPeNSsZt13U",
  "key5": "3iYreMWsceRtL84Y86R2qBbsMim7YbUy2jJTdfg1FeCn5BeTxVch5rSRBpzRm6TRjnApzGH5SdMu9adSx2vhzUDu",
  "key6": "3vEpEqWVsGtyuhwbjyFk8D29pQdSQcygPJFZX1scDFVE8iKM542H7ksHFJP2FLDmt7Y3rVRstaqXaDD8875RsCyr",
  "key7": "2dyftFDzkf7Q5vMLVvCdgpTQGyATjSXCqohQGZVjvGRFJ6fTcZXQydF9P9Bj9NPbErLU1Yy41eCjLUPhHFC4NyM5",
  "key8": "3Tg28ztV8qJhnmF48LXXTCoPZuaSzmZsMvsB6dwR3G7CMTXi8nJLvcMiWCapFkwskQvvnwk81KewfaU5xvMUqjQZ",
  "key9": "5oU89aVhgFsJS4pqcENzAu4d6YvcrRuN261kY36cqi1FqSbRTou3WVVH6UH1QD8dNAH5KAh4TRg5824PRasDXeUR",
  "key10": "4XhZQxyYiexHUUv5pVJsTziTuKpLxBkoY4wBcUZsAHhYjjmYaEtDEe8YfyUNLqEZmpouHs7JF8TWC5RjG6dxf28G",
  "key11": "25xgiZrr2s7HjoAC4M1p637o5YQL4MPYPFFCMSjis2tiLfJNmxBz5RYcR8kykjWY4ZRNyJ5szohJCtqTEZPyZieG",
  "key12": "37K16sn51QWoN9DfdFe9RLPZoXqBmjYVShferRnzmGg6wbDera2PBPrmSrPpmaMqGWz7MscJuxikBL7z1BdA7D2d",
  "key13": "2SmdaX8qfTBMXMMEJmny3QQMQq23Dy9LK6r3ebfeBLnZtLH3Mna47Vk1LEwkQUaoUhXxhCdHYSmGNJvYcqZVdWm7",
  "key14": "3NwmJfoK5FV3eh4rTw3yEBbJRPJcASp7tJHvZ7vEtCuFFmyyS2yX6kvkDKKmGLWqzucWa5XhCbTve2s3LiambrVU",
  "key15": "3Zw1xzXe7PyUCd1bBTbpHBWDgLn8KgcaSh5RVgdQhRCpqbeandFL2HTaaRVUvM1XqujgUh4bN1n3ciaWMEGeKaRD",
  "key16": "4XejeEob3tRYsU3FxzC7QtVgGZhc731cAGYmUeoPRAmuNAmC6Pk2dcPh311UdD3aZN3DLGMgH4qGfZh3sa8iG1JW",
  "key17": "4dWTnuHSHehdXS8FmZcfqDeoTRmZ3aUDXP61MuLhMbNPcTgLDn9jWoXPxV9kqrGfmzTDZQ5mXBaw8WSrHoBPbC9q",
  "key18": "47C5a7qqCBKhzMJykLMj6xhYpA4sp117xVag1eUrv91t8LVAdZPQuQa279vhKBxJDSi88Hdy8MDHhfJzuB5ddD3S",
  "key19": "3vmxATHBv8TR1T3Gh3QmptggYZu5PhoC7o38YpfTggqxV5oqUF2MbJoPRkg8aa2TA1L14Qy533XX3rvJCtd5PW6a",
  "key20": "3hA8cDhAFuKXx4YV7kUxpJ6Kwc2KVcCSCR9gR9KiPvYuqB68FxyNKdybd4iGCftvFhJmW7nwRdbk8AmFWyEEqS2U",
  "key21": "3dX88tynamBxf5qhhACztGvbzjP8DWrrFM5yw4W9wuPPoPvBDmr3qAhhwmEfw2SSCw4TJTPMJof4NMFv4kqBJsax",
  "key22": "5waYm6H7gnEVswFPbuhwmuCvC34BT7HGjgfkr9bz9jLGF4QQLEDD4p3FoErmfr9uJbiFePBwQZe7kCkiUm34ikaK",
  "key23": "24MRpibvfH69ToRfTFbVYSXU3dfkGnfbRhHBzKkuPEQNKTU555yj22VmeQFQ7mbEpbgjuSAP2ebL21QLNZqUV2tj",
  "key24": "4Vu1QJwsqnrJZnQPVQoZeYBvGNoxXiXWJQ5YVFinQtSvy9c7HPbZdaP7CfvCiBtS5C166R9CFeRMdFyypEzVgcUb",
  "key25": "55Y2ZLWY22L43Y6MtsnPuZ3j84iH16khENrhCpmmw9VqeadgcKvevPY4eA5ZeiwZNUHvzDuzVA4CutVYa1qUmVgc",
  "key26": "2cn3zdBvKwsAUPEW2i3jGxwRCBZYZ9qkQ72fQCnG5zN51upGdnifigFoyWjWetZsd4V2U84GzxWSmLFhRWBNjKzs",
  "key27": "3sre2fKoTo6FPNCi9ziGtexurdiVib13DJ6d6DEBt6ga8SQJtm6RDWDyoT24agEyt1L98M7GfZ8bpJYpyNynCTR6",
  "key28": "5BUoiLLC9FPvPKc9dMxaxonVMFvNDD5ivgHPhVxG6A1acBRVTjqAdUmL1ytfZVKKP2n7pPL9rTSkAjRYcYYHF6c",
  "key29": "32Gcmptau16epaQchvGTsfNbeKUwMCiGaSG7UkE8Dza9uwuWDsnEsVxkVGQDNEyoknh1DU2JFiua8iCvHyqGdfU5",
  "key30": "EQbjGw84P37j1RegYhpvZWJss8RphyiZvbBjEMVMNLYLimPAqwApA4XX7cfQ5Fr9d3Li9o49rnTYkQYQHGNuGAZ",
  "key31": "4e39SzhCzETVo6m15jc492sVFidMX7VS5F1XTvpixGVsDGWvHq68heTtTgLCw8CWsAZZSzH4YGtuUZLk4jUKZ7qN",
  "key32": "5w9YjrMorY3bWoHqbhrcqUYUzSyNzhnK1ZR5CU5bHFjLicfoao4Bndv2nz2qB8xAApQvdukWetjAgd73uq2pp5Ng",
  "key33": "3nyQVChW3jaiG3XV5bmyz5Zv4fDgMHaAFZ48ESdDpgF6ow4xBnkUsV9Z4YPfiRXiv7EnC4JSDbcD9QRwcRKbaDiw",
  "key34": "3wHViMerMitEQKTaMv7EcJW898KY2YeC989ngs8srQCQKikmRwd3cfZp1RB3ZQQgrjWa2PoFBG3BUYbCayCtyj5r",
  "key35": "51whjJLqFutwwVFgQRxQH7YgMdzLbrwD47XsNrdsH7EYz7bTqfApq9QY3NDnTrbFYdUGTpMLmiddpQosqgCdYF5a",
  "key36": "3WYN1vA8ssX5J8UhNaH1CRvpFH1HzV6qSqSY5QkJaM2NPZx3dahr1oFEcx6XuPc5jBL71AjuvrgMq56EGcTBCCoY",
  "key37": "63cFEc1tEB813hLqR3yWtS47NKZJGKrfZGDegTJP77F18iDd2qjWmLUGkExsiUnc8yavwt1P5KGikNXMM6cZfeYa",
  "key38": "4MDFSocrhqgoWihmLf9TVk2Ut14HwV2QzA7em43G55iBH6F4xbsys9m8zrf9pwxNzxiPcy3KyaMJULvhW1bfcKWq",
  "key39": "5vsRAXkHZ3Ned9drNrVR9V9j23NMh717pA5m1aUdjgYq4uc1oXtnPYTHvRS2FTCALPZvoifnfi1zNBTSF1i78F9k",
  "key40": "H6MufuW6PfzeEHp9eiuWAFSiduAwKmhF7FK7LmQoZBoRbkHhgsc1nbrv8NXkN9yip61hhHZbj3i29Hp7FYwikyN",
  "key41": "2aDD6FvEK7SNBjpJwg74KZeH1BgxEH7iiDYeWBHizAxWKaCm6ZkEVpbpinmiXwL1era8uKtsHPfZaL9v2mVDsi5n",
  "key42": "TkQ1QnjbQQGwfetg2A9Brkc8d5JTzTPnncBCtNQBJ167aCkNCkjeGD8AhK9UBinbUyHcPvV17CmCb7fjwUfc6oJ",
  "key43": "3rF18BRcKgCqxcHFebWLVCXPCzxGPZBTr2zdu43d7Uxrh28fntUsf9LyQ85JfHG5dZu5Dfvcd5pFM3CuutJxN5K8",
  "key44": "4a2iguRoCn14HjQXVYfEuNxuWfVs1Bo2jEuJHJfL7CDXnCZhLN4CQe4S3KnVNs9MfnLb5feZBpxTM9ths6rGU5Wg",
  "key45": "38f1mmiWJSH4zkMmUzyDD7Ww6KtqbCCRcjGFzPhJ35HJ8gBUEZuQ2kbRyUT5autw9M8RRgTJut7PfEPjfHzWnUXD",
  "key46": "9sb8SprVuJfiEU4pbo8x2AdJ8Zti37xCXYDuHAeugzMVx3UhMT4pckqzJvL9hkn7fAh3T84EgvXiiJoJALPTcpi",
  "key47": "EKceUCgtXTXiLv8wzGmMdcmD6EX78Xx9Yv4Qej8gdmtdb5BQW1fWfBupefPCwN3ixKyyNDazP7c2Pnbtz1URxvU",
  "key48": "5qmiQLPBMd4FyfN9B2yjak7xZ27PMG1T5mLkTXUZBrnUBTQsBgRyHhxewnmZ4ZwwNyTt7GqFEvqapyQvPA2cQ3ac",
  "key49": "5BL2bU5JDU3QgVbkashrgjQM38fTRRqJym6iCFobDkkKM2vqEwdJdG6XvWiCh51kKz6B62yVUnAMpqwYxjHHn3UR"
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
