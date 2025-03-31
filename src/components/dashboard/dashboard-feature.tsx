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
    "wLLDYtDoCChJ9vboWk5zwoKU1uHcJb8XJcNbPvZJ7LahwDfqxPciDsM2r2Zim5SQ2vf6ncQGLMkuPvZjVbLVesE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AtDgyaH5qAwfU5UtYHFQpQGJB4pAiS5KsTkqsQiJGmWLNPhuynqyJRAQ8UL8o3yfuhS6DqUysARjxA6QvKiM4BG",
  "key1": "4agQVv8P6V3tFeJSHVMD9fkVXi7VSaSVuCDvsZKMtQXwJXPG1VWoijAX9gGdVFdMoFNemSMgXVU1FdWMrWuaE1B3",
  "key2": "1w7LEmzfjnk8x8zRDKsSe4Jmr18hxegDWu9VjtA5QmmeW4C5VrrHDCk9GCXDByzesrCpQdf7KemdiomxGxXsTxB",
  "key3": "4ZVNLGA6T4gSFx4APoZdedKs5XyDbsYXXgEK87z86PJNFJDsZnv6nccHnFXjAQHSP9b9AhtQkwwHJzDESCwq6QBp",
  "key4": "3LoJpxgRSNJ6BN8zHyAHjKXTZ9GMBRj5m8XBZ8rNs9Z3EVLV59We9UycRukTPPi5fHKZDUeNmX6p1Wpn8TyhYxyo",
  "key5": "4C6DXuoTVU3MA5mbgNzo4U9vXF18scwAZokJ4qmU34k3BvztYzUx5v3NWW3yij5UhVDvhRTKphRxRkecgqeiaWnR",
  "key6": "3hjHEBTiKgVFYo9PnPRUGwP7CBUgkn6Wkit73sAkwdumDYHkSpNhG8fDZ9nxdtAVenntNeoz1iPuLa17vRyt7oFL",
  "key7": "5rm4xmo21Pj258PRBe8pNVfcYws31DZddhsbB33oxEaYidRiLFnqqtJ1mfEwqDpFyqDcjqZ1y1He3SN4NCUXDBVw",
  "key8": "55SS7zrnZ7otu3ndPUw3XQXzDLgtWp6zvwuL4UKNLJpYiPhSPs6Ryg3gmMwfpGyEiNEx22JYVu9YApGU9vveww7N",
  "key9": "4Bu5kedQrTRDtSHmrg8Zc8CJ3WgJdSGFaEmggKj5VyeVu6fP7NvNhfDtac2vh2qyxndg7D9JHQM5aWPHUkovo4La",
  "key10": "2JSMR5UvwBd73RyJeb9bSW5vbv7stWyHBqHhSquRYrwwwKS2nWdhE7CCuRYyqNjucpZxXeNzRzSoQGseTkpmnehR",
  "key11": "3JegEhnph24Tvz1fu2dFp9pkN5kVofUV194gfzyFNYAjvJcD6gA1VmoVYcfFHb8T81v1citnPAvkTPXQnP2emVrC",
  "key12": "22zZZZJwx7s2jzuUgqhdwCtHF9rLLoGKVY8yGyVnS8Ujzq2fgGM6qKzZjMPVgPaJAvoAWmEu79MqX2uCuiWVY7XN",
  "key13": "48guHDdtcP3HWiBTdfY1rXkvUWx5yiFeNwWnr31t4cNYat7NB2Dcsi2dewADSknzgtnn9qYgnBHTknuuZfKurKfv",
  "key14": "28SceGfLhdvtjJzrzbGdbCJdt49crNoT3gwpdbo6YsudPtZZ5Zs2anBno1yvzacMnf73jGcnFgZWbbiZFe7JhhTV",
  "key15": "2Ek8CSwp1Yyr2NBgmk1bRcE13B1jbALBYsjHxXLjw193bYhh22ZeyLmWd5gdRiQJ7gNUJsbBVMjAnaeEiMPxuwjr",
  "key16": "3ZzrQwzc38NsacFnuX3vaC6ZwKsiJGJYwCK99qFZ4yGCKwtonu4pMCcu27JEUiHGNRhiU8nPn6oGiXDSt4cdeZTQ",
  "key17": "J5Zt7oF1vT72SKi9AexVx1FLx3ZqFdziUizWS8r45VwXrdBEvsJuJXrJ5KXbsFgXS69Ji7qCvNg87ZRzEgT6nbg",
  "key18": "TE2J7ME4dzxh8PT3WQMCJeBsNciX6nfy1RM3EnVrDVsvghU83HoVe29BbzdXHZDv4SoJpJZGfmpdomRfCVqxMKr",
  "key19": "5NwmzSX82y6dVaewMxaJGdRZXpTR7c9JWC4QRMd4279tAkGzp3ytSnHJH1HdFi8JVemgNzt3w5zg3M6MorWcauhx",
  "key20": "Qb4wQvQUtJbGmhsZUJ1pBnDrPjhaJksB2iLAAagYHBGuiUTwxWUuMdcKfsMhS4JaqFKwKUzQnS6fEodtWqapFfm",
  "key21": "3QmhyyrtKM9qzDQSrid4tGHwfurMCNdwTcc28U54RnAnp3NcoHV3s5241RJtSgnC6PsnjDWNn4voqkKi2djiy6JX",
  "key22": "63hE5LnK6zZ5ihAaYiay9wT4dsh6bVDk6kJPZn5AW4KGZ4Mn7392sRpd74tu22YkejwSMk9nLS1tYmU5ZV1skDem",
  "key23": "rmXzdtqYd32bnEweA12Uoe6pg9LrqkLcchDCfayXLvy6hhiTQK9uD62HRMvrmtALSLje27sY3oNLrahgiGL5qtR",
  "key24": "65xRtYg8zQvho5s36F3Q4a9MUx36bcWbWe5xnwHeoxSHuPAJcHLorzvtPsB3QPqaSUWFr6fDYbcZsqifnoN2VUM8",
  "key25": "5d5yjFpgeaMDLv5L3Z1s7QJ9NbjqTtWHh9sLAoGtVBSmR3eiPSFdDzaUvo4vb86XhkTSq9519vZa9Ghzo77Uni2z",
  "key26": "4et6wnpNXsgxkvZf99Jpa5HwjLcMcVszNybq7d4kt2fruvLm5a1AR6KZGb7P4T6AGjf9HCEXmBPfM1aAb5L2uXE4",
  "key27": "57j14mqrxrCgFFg3yJ61S7x6yvoRWUYG7QaRVMSFTS648rPwyHow992VTGWWk3T6rsexi2j6zCkHnzPWMM6dRECF",
  "key28": "2cKG9qjNGezquhU2AL39QQKk8ySmjyYNfPPYqrdbGrgnLjeC3TUCX88jSNe7QjYiPLtrBZTsQj4jM8dc6ArZAadd",
  "key29": "5V1UBP49PyEocPyLx8GEh44YWcWZV859RpUyQYHehHS5gLu1SkExCNU5Q6ykuvZ9kMLb1r7hLXXyv5FPYrXpDzgx",
  "key30": "t9m6FKpRCvDyJQXhVzdaU3UUg5NA1xEvzoPNCKGnRELA8YSivWuG237wKbscxK8guygYNwXoHKxmz9J5PGXZ16b",
  "key31": "5y5GXRvZjqwGHSm9M1P1ggV3yhv4MpUnYragnp7LkGYC2mX9HuxfJdW7uX7TvJqrFtJE7nWB3SX8YDERrWzN2wPc",
  "key32": "5mxuzvF3g4j25R91285zg6n7x47S1MuecKYtNLGauzNxyFtzv5AsW4g4PMipXzD77aYBhfMgFciSBB8cWfborrQD",
  "key33": "4VGtNvnhDfNZqMPgtudujX7x97jFCwsHGGxcSRoxjAc8F5cChtg3WkNsqqTSiivb2FX8TweWY4YMV8oL37urXL8j",
  "key34": "2VXSZNF6Q3BPTyc1p8XbdCTYpDWYNQ4wTsoR1q33BcDnmnLMGyF8Y3bSM3SuZjWaCva6gxF3qx4krTCtDQjXD7k5",
  "key35": "Nno9xwGeceSgWm1yTuEZLvZGqZqYEMgoiuC2sk8ohtw4HZm9Ua32cwVdFThWPRYAeQBTGjmJe2mnE1g1B2UUgW7",
  "key36": "dn634nERXAW75LXFFwHNpn8pDwLCSkqh7h5v14Z89x1k6JbFzuu4b8a61veQWZjTmq53WjPtZm8GPnETZf6a5aN",
  "key37": "5ZWf5RKN6wrLtkjGEQ7cD2uyHdjApok5aqb9SP27KCu2wut3SUzGD6kLbZKAVsamWqHSrH8CPuVbvX1RfiMRLcPh",
  "key38": "39yNr51cKcqCVRnXvsUGFqTXQoY1SCXub4KyGHk8f834dxvJFR6pwXdw751DFg53AKRw29rC8xcxapDZn7CsStA4",
  "key39": "2XrFHPtneH5vL7JUkwdpfWTVwNn7uFsv3MB7wMykrpTxLhphmzamYYn1eZUxcKd9rC1nYiDZxMJAYtJTo9zfzJjX",
  "key40": "5uWubLo2MGCzfejcxkwdxWrjRcXsZp7nXWHgjSBcBsv54NnkbKnJnWSQcwPD1TiXuB9LEp9xx32cG2Qeam1sMTdm",
  "key41": "54suNd9hA9RoieySEzhxf3AUQbmj36BYLRcCCK7pysuY49PVkSpgCB2AWRqGFH5vUtRxRexKkTXxSH3D66yg2Bjm",
  "key42": "2q53gN8YbWKjNepSs1CEkkSXGVo3NJRmBC8ixRfa2C8MSw8CzYZymVozwd3bBN6CaRt8gRM1Ur5UDHE6BT5TXna3",
  "key43": "WJnkqUCBj3YGdyKFNokJSe2KetmnfEbpeQQKJt4UQsMtcWBcpt1S5zFUH9nKMqiSonTmmrbbniKUFx3SAdjgaFb",
  "key44": "2TBcnXFqySUNh5PphW8Zz33rx4SSW1s4F9pf4rfFzPTsUbDVF8rddLhmSRaJLY1QMXZ1AmT5bjFkphAbZsConE2z",
  "key45": "63Jrmp1v9xRD9gkZtTW7J1A4wWvZfz85AQ9FDzoeFegG7NHXeLm24Nk5ggkn5mPyvFmDzSPoWxxmV4GFbgae9DpW",
  "key46": "5tBVy6yFsHw5XRfAdohzi9yuZE9Ufru2btJCeV8152aRGbGE3iXpVEWHSKBqKVd4Ur7scMHdUpMAiHfiDR8sphkq",
  "key47": "5bnmM1hLwaGWoanzXJgFGk8aQEzM7PqHSMM3MuugXw31BaBEnSoZkCMupfQWSJzZ1qePFBuA7a6WfGsCWdWnjkxw"
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
