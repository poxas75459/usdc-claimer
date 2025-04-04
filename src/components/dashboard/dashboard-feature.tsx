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
    "3PBZXnvMtZkQmW35qr5p4gwEvgb46eD6HQzWsBWHvigb5WZQzuSeJww7XRFRW7XmPcs5G94B6DM5jcPTmvvwsFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uXqAYXJmvie4Pxftye32ctYGGs5gbaSjZMhwArmKsWs2i2PLyu2J5Q91x91rzVFw5WJZFZpWYZAHHKzQnvYRdh6",
  "key1": "bnWWoigZp79fDQ5TxD8tdKabY3mkB4cyqBekGSCk9gnLvoUqKcpqDrZnRCxt4YQrVKr9DCVj6ZyXc3dpQDQrwLR",
  "key2": "5Cjhym1Ldkd1BQVdYwFRoQpeVkHFaJ4R1AaPHto3gPbxXaPuBUBJCvGGxBLSDJYgJr9JeyjbGkZNwK7o4fFg4qvU",
  "key3": "1MzgLLm5SgcACPiyQeZLbbj2pkkpa5nXFehqaNJcQKckZPVPTrYMkeoPyAq9p1kvxQc1ZW8stw4G4zYYxhtgrd5",
  "key4": "49ptegGVyqWxCeYnGvqPt86iu7CJNjufSK3aCos4oqvEDhG4cAg6ouR98fG52mAPKahAo98DDYLL7zwa94EQtxyM",
  "key5": "5SLuxcvPYJ6zLx9ch7er5d4rL9ATpdykhkF9UwMW1x8ynbPDSVhmQ8oksajAqv94YHzY1Jk4Xm6MQjTVDM4iYkC1",
  "key6": "2ymA3Rx52GW6YF8vXUb5rsd1PCb37uERkSemGXNQ91Mt2BKsLvAQ3LpJm37FQweggfPi657HJoSNj2Pk7JwEqJEJ",
  "key7": "3PkZSixePBwCtFx3C4RYPuTr2CfdgXJ2GBEJzg5VkPcecrF5m3TMbFkikSduku4jpbrpMn6XCSrTsZyfq2F8id3G",
  "key8": "2e82GpJK1z3BpBnaGxqKV9QJ3gbmevATVkapbBEBhsjrR4Q4cSBLjFdYwYTrVCGJLZYq6jBNuQPE8M61MBeBHYxA",
  "key9": "h5YPCpSouZP7nkUBXKmaux9EhB6wShJmqHgqiGnQPLBiZEHtCD6wkGf4BLVZXjaRosHeKFobDpS6MNTT82nejmE",
  "key10": "3TgxndnAdDFErpPMG3uU5T89bqiCw9xQ5476PAPpc5TMgTG8aE7daEQZdJKdcpomzSPjLsY9MyrU4qEtHbRbs6mV",
  "key11": "5uMQVdGQvuoetMe7DVSt2H2eYtL1s4q2Wc4QB4pzZqDkTkVrqdUWCon45WkS5dW6rZawLJgEPH7sjT8f1BpHBHiU",
  "key12": "c5b5v7uRTaaLqpY6VGmjWwMPyzj3L5dy9nqPMwDBbBYym6F4X3ZwHGe2LVxeigVYjmbPyNNVY3YFDReNXkUT8CT",
  "key13": "2cXyyCCDzUvmLNgL2gRVHUekWDugjFVDzwgjea4pPMgPiNnnwwKJSQyL62MZSA5TejbVQ9CTpDW98nwk8gHgyAQH",
  "key14": "2HG3P9Xpq2wWdDMryfrccWkzN95AGMSjv5A2d2zcS3gz8VcGJaD8Qoi9naX5aPsfkwECKpKJH5AgGvBj7eL3A19N",
  "key15": "2m7thwSDUhpVeqd48Wbp4qnLaLADinj5VYZZXxEHjcqDbjKXttqndFDQtUxdrpUN9NMWY2UHhiMjmGGcfz494yxJ",
  "key16": "22r9vUJurxPdQGczpA2mnJr6YzRwxhrqtBRbz7y61rFaFhNbPPzJuY3DaVL2pKTSwnEMAxq8yGgBFZN4vZhViQz4",
  "key17": "46q8rz8LEZVMWRK2adWptoGmydKs4tf7ziSi46fPkKu2fxA3HrpPwH4z4VgsqmsgFTQMhyjbgHJejeRACJJaRfJK",
  "key18": "5YWS8eXWPrUQgnXaAGCh6z1ouAkzoWaNfyxbipnEhf76jyN53etzaUn4V6geapoTxMPrGJZVXHXEBskyLcPJz9dU",
  "key19": "H4RufBX42TL2cNdstevXxya1EJyWfN7r3f8WuBvi8VujknsJxXXdqi1EjipaZ66nDWYJVtEZ3Q6aAy794jrGnor",
  "key20": "5K6DwL4i8xzMSqp5WJ4ogosm47KUufCySRtEdMHKkg8kvoF7VqwHhpHaGPZ1GnhST7wK6YSHDu4S3LRPTaEvJzyc",
  "key21": "jndBVMddnQm4eKb3LLusvSvNJa5vRLpewt9ygeRcLsDW1ymyoxvnUEP73s48mWjLpM9Q243m6cQMpF5wNtKHn42",
  "key22": "21zb4xH1ZGrNcJsabfgyTzKFpeNcd3o9qEW3GXucT4ghR3R7w7yojJfF46cLhergVig9oFW5UR1zKFtCENvrC7y8",
  "key23": "2gRVSZX3iKmfJKiEqK4cKuesF9YanwSQvgQQvuB2JoR4fPPCa47j9TQK4JSDBZUKkVmL1xuKnzuHc9T62huZPDRQ",
  "key24": "2VjZ3TT4315dgpKdhZdeHCJo4JdH7veprkNJX62Nh2a3peWsCkWTf8GAgeeGoJhFgGhG9sxTVhn1Uzwm237VSFXY",
  "key25": "46PMo2ZiSaTFS4EkPmD4LGozs9R7smtbV3HCUqeq7Nv1pQQXMqxi63wwNSnTm7P6gW55b2RYTvjH2pLsPujEqFhc",
  "key26": "3Ybjh1BwFqYvq2JZLok2bPhhxGnpWJDvfRibmZPCr4UCrzXuQEkc2dnTv33c39uazrzsGagD11oAUxXY9QqvxLtP",
  "key27": "SLt3SUYgQYqPgffFoSu1K1jsK36wNzF3MfTrmGuxvsvZHQWVWojjhZL5gAsfudvw4gHM5VQP6jrVkj8WTzsBJ3n",
  "key28": "5TGqwgBzbhDbrXoikrtNxyERB2hGWkhdhh53PA4ZBs8AEpAX4xXziXLFttm9RY9T1tFvBjmqvm4ducKqUq98CThC",
  "key29": "3FPivVgJt3ZNi2bw79DTvTRGvdZWtGdujqHh3ZJFthtVcoQU1tqA6n6J4yMVTZ4BRZKCEF54ZEM7As3Qgq78UyBN",
  "key30": "A2TSKqiZkmPw7FjXcweqz9pzeEXLj8kBqdukSWvaRP8Mb4kfDokDoK3KBcCuhAZM2i5hJbdFQFHGkaDYNzUy6Rd"
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
