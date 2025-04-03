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
    "4rtru6t1G24wdsZqXsqG88cczTa6ynEQ2bB6BeMxJjZKVzLuSJwqUNpvTXSkAUn9Pfk4BbLjvdJrzbkmbGnfqwdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jXAgDVrqSky6zyc5bxELjj4Dvq35DxZFpY6mrKomTXzWbM2Bza3pwrU4QppghnrZYHKzB6eSh5Xtr6qxvj2uwv4",
  "key1": "3tq31EB2yBcuWwMDLmMc3WXWvFfyux5F2zrsWmuaKW5zno1o4DRakMfQMhbMhS3ynyr8ef7ed6Vzj3io7SFeuwjP",
  "key2": "efB4MUkWKZ5Ps1k1xioHBvvJDyeA4TLoWUCfdKLyp9XCdBZpJRuJLK9sjn37SARsXaPsazGGJPHDzZpqtTxro1o",
  "key3": "31Vji2BibtKguSjtP7DoTv55kW3hme4CjueTwoUdRLb6UPhf2DWJLNkeyJHZmNcQQfVKKaAG5dstPUGK3gNgEzGA",
  "key4": "3At64ho6staPyLWqhFPHkD99TJRZh7otubYve4EgAfPQRDzQC2yDgTHT1ttdUAJk13Yv7S1KtKVr3moccvDWBBKJ",
  "key5": "2Qm6P9Fb9KD5SsW299hppZqqkGYtviqDvJmexgqgooeiCoTkw3ND8fGPT8PH9zbRAHoWf5fZ9LjvqnYkYPMN7g2B",
  "key6": "4rNbavKdMRn2EfVbqwL2YNCXmzZ6K1UDGTmF425mParcL6ybUFaj2SXpmeAADfnxpYwxMSfvGCPc9EjoLza4zMtz",
  "key7": "3uq1zJ6Wb1wvC2GyQRBmR6Bdtm3WBz91dWdp4Jw818D1edQnazsVzc3FZCHYHjJWq48XcEWmVmFKQEsqQNoyFsSD",
  "key8": "4hXykE4Soz5ewv7MD5F3d1th4X1eXvnjZHdDReg1R3amVoaej8umEGhPNeDYhufs7RMiY2binBBEst4zfQckzp1A",
  "key9": "5echqGjFm2hiNm4PgEb1pCVc2umpNzcjBYPcu1WNzNwLa4Bq9TdMs14VeNf7wf2Anj1FwZb4Yve22xp6YWiPayXD",
  "key10": "2qnSZZBDhcPo1DnaNJZ5rXXCfn7A2QSJ6Y8HVfNbhnjstcfnsHLVWzwZCJ8YEN9L86YWCKod1JENdmQv9CxgDRSJ",
  "key11": "57b4h7p94ouRd6WkXoffmgd7hNHadfcQqpC8Sb4Yc6iiS68wtzjMAsfh4rby3JQZPJ3Tv6BeCKJaZyDbAiiurunb",
  "key12": "JvpEwWQ1v7EmJxXG6kbDbcGxvtudnpRCW7oC3e4wt6BK26x9oGGy1SjaJMzjhr8zoukJeYRuEkeoVRZ3okFKajk",
  "key13": "4haX2aEjnffVrMCauPX2DxSMKPH3GnydXs9RSwA7RfsGbcoaL6uKZPeL4AiS5QQH9CTqQwqdymfAjAeqXeCZZ6Lr",
  "key14": "4Kcv7qUuKSqdzG3W6KEtiMCpkpeGZiyUUYPFb7VivGXyVUfJnfenKzA3NSEYXkk2xF7snU7zoxhm4ZkCfi4JMym2",
  "key15": "S1e15mBvAzNG8WsTFDiPgHrTPHtoXtFBG7masqvJBCCfKj7QbtvPgNNatzNiPnBa8StMfD6snYxNS7s841Na937",
  "key16": "5c6v1TzuXhbKzYRy6w3NriKUd3RAkYzw5MFBrNPdyxUp9nb3Kij4Snbftbuu6sycW42TCLw6LGYajENHAcBzgoQ3",
  "key17": "54M2HjKYkdBa9Cynh5hEgtuQVzWzVVwrAM4XQKVgu5wBknqWKXeaxj5VcpGdQnFzoVRmBcQJPMEwDdrH63KxhyyW",
  "key18": "tAwxGWr3odDLAcGWjP1XAjPmpwSVeH42wdJYUMLjfdd5khhfzKHrYHzk4JjKDxQdVB64A6QfwnZkarVA2Sk6Rqq",
  "key19": "5bojeKtxGSR6oStDdg585TbaJdbsAjgPnUhxVQKmGePGKKVDutYZhEQWq27WocowQZCVz2doq1ccPja3zw8z9usk",
  "key20": "3rrnj3kvCcB5SCxLjrd3u8qpg75znNfo75tzQ4Lf5yotFfvjzxqMbuJ5m3xezrFRH4NNpiz2uVmJUvV19BvvPNbQ",
  "key21": "K4uPJCUwTw1CVzpqMW3S2Vuy3ekkMokALr7oi62dNQyHcqXaKMByk2juuJkGgRxoJt7x8f8QCj8R3VRjSNcYLa6",
  "key22": "4TdyPA3VYLHwnBHZkSpweMYZHr98Wk8cCxPmNvoYWgKS2kMpb1vTPEUWjBopkuqdiUxPeL8gV6Xv8SV63YGzyuEU",
  "key23": "4JUaSetsaRQjabA1PEgEKRutMKMgmARyKtSz6uxZW31KfH6q1xigAG63osEtetrT8Rti184k5qLv9AA24FRcQwJc",
  "key24": "qBEJysPGzsnSUEbpZNxubfJYFtwtANJFcedouGR6eZW4QrzeWYzks2PnBgoyCAxz27SuYAv6YYAYAAX2JiJcNLq",
  "key25": "5D1dzggaxSfPEsb62dNR6Nj8RftkFNSV3ZUYNA7M4foPHpVDRSYBBy8hXXTP716FKuuJYGHUCfhwrwCWPZ8upo1f",
  "key26": "5GMyvReYnoaDY3jvQVkJg8fr3g8YHbrHgdgzahuCfbPN2c9rtNXzp4ybYAQ9KRLwsCmXgFTtaDDi8tn6Q8vBiS2m",
  "key27": "2XHUyB4WPc3MirbKGCaKB6sLfv6e4qvbMLX7BkYXEXZ3ZeYmxjGkRZBaG9uyLYRwFFzhmiZgiDiVFoHYXuLjcMbz",
  "key28": "2bg84Lp2T3BNfXQyT4JcurfRVW5BHhbWdetYhqP5DkBzfg6WRcSmajuxhmvimXUyzwy123XxDSBwEezAvLqPXw1X",
  "key29": "2rgLK86WsHSPBgtixnBavnkvf3GprwenQWA8ksKZvhcRagCrxsLrXYvd88CU1u4QP4BcL3w79gsXyo7Yz8736sQP",
  "key30": "44uyH8E6sHxFgUCQrTT3DdjwHevHkn8Ym5FGnF4c8C4JxpqHyZYckrDkLLXjuKQKtqjYzu1S7notSAYTGwncm9LE",
  "key31": "4JozqxwoirWXV4u7EoUMf2SNVgLct1zmuDseBEiubkEF37xhZFvJYDijyd4DHW9Cd9kbDcGbJuzBw59DHp5iydr2",
  "key32": "5gYNbPEA4tzhiKG5YAxT4VYCCxseKfan3W7yRKTBPdpJwCHYsrBPd2K3zGKAxPKe8NJrJmVxh2TQuotBZivXFJsi",
  "key33": "2TeP6q52crWdEEnGDJevrhsXf4NxJMUm83ZSMYSSq8iXjEmPYVpYJhLvJzv91DJz66hrpab1GffydfQE6UFtKsCy",
  "key34": "3XsHUYrAa2tTmQeoiWX4f1UHUjjvyBkDRm3eqbyJNL9XtNeLvJ4KcBkZ1naEkekVwxWs7ggYup3Kae8pAmyq2mVA",
  "key35": "48E1GV2THXqr9JJ4EpSapxPCBRZphnMP1pSWZqjBnyXQSiKEWsHXCebq9pzX5HFrWgu6unAjdgFPa4x3fkXY85Bg",
  "key36": "55srFmWUzEiBEhvQ7ca3zUFL25Bh4a3uznF9RnSCVnSmYDeQCWTDhpVtovWBn3cfzng3dEWhT7rXUMqrsFMxmDdN",
  "key37": "5szdoFUVjZ5Ur1y4Dan22Cx5cxBudPjmxxDKPyotKzmb6ysLsgGHkVfetasPXRArzuHvtTVPhxM3YUX2K1WRDqdL",
  "key38": "SYM5HiKXCJFURFo5CKDMxSv9X8YhRWs8c3N7JcTUbVQjoNbhEGNF399S7rdsLTR3caf68c7sozM71F1jHR5B4PK",
  "key39": "2pTvxjR82nghT1EXerq6cdamHes9TLcRPiatc3L3AdknJ6W6KgoxgFi9i4FWhYHTaZ8PZpTiXJxzxeYUEyg8HLHU",
  "key40": "34XJ6XbaXNwHgrwbQWe1WNnJ56teLPJdj6Cfb66mXAHZ2LzqkL5zi5fspnfDoJmYrrHHRaVdNbSpTEwiwMcvmjwX",
  "key41": "4WXmhtUBMa7NtKmywqYd9ufU8378PYpPLn3H3r4bnbxX7Asp333onbfbSJ88pL8XvM14PdJnVWVDpTmjnWNbTMt4",
  "key42": "5yqLKYksmb9xhDQ2oioNrvyvGe6p4qmKun5K8ZC6SAjTbGk4dbKEWiADzK9AuZ262aJXdEenKeZXByrgW5A2FCjN",
  "key43": "2YpCZttQKbD9B7dTRGFgPo4fD22Mky4owCbdhCEDFsFvVyK7XAQTB3geY4GXyNRC6dZsCHSoZVevdJJNni1kt5qA",
  "key44": "4tCfqWdH3cTs22oEDsj6aAc6gMSKaKsMtixtB1C9WfTVok35W4DM164Ua6P3PkGVbuXtz2S1kdWF6Bt7DD1ZgKw7"
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
