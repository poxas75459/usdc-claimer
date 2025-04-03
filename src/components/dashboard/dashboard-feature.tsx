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
    "4j8HZs2zDEkk8zra3qqg7Vjq9Eycoz2JSHCTj3N7GRiDBSCfdpcwwFzTyziv1a6wPyzfiaRWkEU7fyRRmX9uu8tP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZFmv8wotjSzKBPjPMCMmHZUFWrGKeeNv44c8dT1Fb7xzUUzfDXGz3DCHzH8Bz3ZvgXjpndJNK6m475YPsinyGz1",
  "key1": "2LZ6PAux9fqniRqFjvjZDyv539UZwaac2Z1CUH9wQtsYgk7vX91Nt5vAzjhAygVxphQzcwYpEL6t9Yrgv7fUqiJT",
  "key2": "43LnENzhjjjaoXarpGmFgfetxjBB3eJrtkK5mKj6xMpQ8cdo4dS7Vdx34fnztDAhw3g7FRkykRFcHGNdxdvRzf6f",
  "key3": "im8dLqrWQd4zNVA6CmDkKZaMsivzWGwqL8Vquk8tKRkyP2wzjdChcEDG2d525EcTPTAq4A31Gzomgc25rqMQnrT",
  "key4": "3iQUXLKHp2EMEam1XoXAhGmqZ4aK7oPttaRvYQuJ8FTkvkqag7cF4XF7RLSAKfJpkKJvUhDxFBjnWFvUB3CRCs1r",
  "key5": "4ndTGGZaoHmppdK29BkNbnKPbo5X9zcMuvS5HsiggbDZ3vGHssizpHci5qWEpXt9zNX8P7BQSgKbH52Da8r31smb",
  "key6": "26r5jDaiscrMvBcDhqY4UYzQUi2ia6rJULTduDSf12Y7aHYHqnhpwdrwqaw6JY8QtdZbTw5eLNpmtR6UF1gSXF4J",
  "key7": "4qDURrY11wZdzA67sJ8PPJf6S4auQA9watYVXtExn35jn79idynGCRfPku66NCj1WVe5aUR5eZXMoq7U7VVTWqF6",
  "key8": "5TLqver4Q67CErA8UaLTnxhBKDywrKyAo2HDVApEkBEX6L1NAby5DyJ5YKJMUcrcBPqhwngYSqa5LY6AGY165pPM",
  "key9": "3jMPhSpM1zXnCJrLdskWk4hYY2cVw6o4mJKKJ4Noazqs233kRTcoozap3GJoRwUR1okKETvqM7VxVdEM6K7gw2eq",
  "key10": "3V18Uirevdc9Yd5rveunQuhZrQvAnDpuqPVqwzNhLKgR5iEgpmRkWTd8MBbNmrjhyB7MSG8HBb2JCc944y3iXqDX",
  "key11": "2GE5pBCuRLN4pJn1ihkL5tEYamUJcDF6B6hsD7JPLoroWZRwiqdUQmfnby5cFxVqEiatLBwomZZEASGTMBSTBAyz",
  "key12": "3DzLcm855EuDHEaK27x6NUL8Pyi4rzXb2rUsRsLt651QmUvpRAzg3SbXmWUWvVhaBpgyEByU7UwTq9XLgfSodDKH",
  "key13": "47ThxsYaHBZ2GMDJ8hh741y1nB5McUqPJHg6UPRevE6WHx3VpgtWwC6kjrTU6SzPK5wzFP2jYUqscoCQT9s5rRm3",
  "key14": "2FYaSMKhxJEGxDjUodaQyXr1sKj545gossFkDF3PggnHL3F7U1BXffs4qfhmtuHKvW9iZsWPeGTgV2Km25yVHNwg",
  "key15": "YiLGgUqGLiHZhPaUhqbfRcAAC8fhNQkdMTPGZa1ByFQ2DCqWfjiT2TmYUTsisbSinNFGmHfiVMfiHQxZ17c1FzT",
  "key16": "3zX587iaEK76iCwaeBBE8u72ihuRCFWzR4MtZaj7rnDkb6DchPoom3eiSrRA6T8vAAHMqUqhpuD8raH8h1aDHTb9",
  "key17": "5R2mpQee2tpmnFwMhPxjKUCX1J3TrZqZHeUvhi2e233HLg79ExKpv1F4vZ4iEKKyu5hagvMWCWKT7oCNmZzMreTt",
  "key18": "azJiDvaBn3KCEBUQeicyYByjMTDJJBB3xtdaW6kr2V7x4MGscoZDMkpBWhoiQkwpSKmtKiyATimtFqXJmtMSgH8",
  "key19": "5LtwUTJNbCgJycj115bVnYePbJa4ponBFWb59B4GAZki8Pn4fhUi9pSkPBZRPuH1KsGHumodEwv7rGaGHU3xgFsS",
  "key20": "3jTYKDJ36zTtV2THW2kqJW8yBhozxcsCLMJvie35WaLuLFCopTFvRGoms95HieMLAqiedMWPBJRRZtDQ4UERLYT7",
  "key21": "D1NKuVWdn8BsZ6c92BCZszRjFfbW9W9v9Eh1YU4Bv4iXMTW9pMNACfGAC2nPMvEiYJ95WV4KEVbhdt3Ljaj6yP2",
  "key22": "ayyhL2fjYTsRAy9YvpZvfETUPxv7n6oZaxGAcDbgccKurPeBbTBTuJsvZyGdyTbKveDDbJeattuStmswGyd4zdr",
  "key23": "4ktgMDKmZS7YX173iwXM4YGjjyNbfjDfcWkgRUiVMaoU2ebvmFe5rapDcQgGQo3iTbiL3efdAN4UHwhHqvj2J8XT",
  "key24": "BuJUjiZUxkEEj5Jn8epTqmrJsFoXQxgP7ExP1JvuY9c77ddQhUwRYCDJmDMHkNgwN93hPL9n4vR5jchrPue9zgp",
  "key25": "485ZtiGgNNirnU2tjej2F7MREDTGDme7h6uYDZts9npkQDXU4488hQB5L7w7aagkwFh4AZapdBhxb75LkVMR5DYN",
  "key26": "55SvBWNzTCKmDsRcqREDKFnhcxx9i9scDTzDefihn2tXnP4d9JGbf7nPsFHShHowjYcqFrdF7eNg9v52ATjDcYbC",
  "key27": "66ZLVuMAugvs8cVnu9ZTnghcWuiZdmtuZvsbdaFhpTs5MxMSMRTWuov7uKnYkwvJ9SpYknjfVNN35gNznvaGfE63",
  "key28": "43ziJnLj5qEMYuz771H3nbfsuzCTANq5R5Rjp6wRk2Q2eoUCCzqWTgnSwaDkLy2edeuopp3KRUpHpJeQaYPK2qCN",
  "key29": "Q7sSh97nKj5yP2eYooQGzzinVh8MkSFpwGG3XNAkGxVtHbfPV3x7seAW5viDUrWsLPhCjAo9pceiBLWitXGRtiL",
  "key30": "qCvzj7xYDxrsdU4zrYnXCuzntiFpon7hFX98Wt5T5dGx4reAgDxaUUN6RHLJTe9HyxorgchEhqmQRi8zarmTV2X",
  "key31": "262nnLWZfjYA11iXP8BmdVEKDXpjrQRi37SfsJPLhik7TmpAbMUEtsGdyPSBcZmsX69jYg8oJeSBmf9jUrqB59DX",
  "key32": "2RBcLhnqqPMvM53mxwhY6K4AU49soFcS9f5EP43feQtUkGL5931h8BSo9oVsQeoPhW2bqiHsrecZkXDCccFwLzdq",
  "key33": "2ZHFvWyDDZniBkQKZ7abp9pVi785S15jq1BqtK8jMddxJagtmstLygx6xdX5ETER1oEFFudXDbqbjqw5hXdSZPFP",
  "key34": "2RckgyirwNwqKecZb6cF3xtXqjcRVQDLNsK7M4YdPR7PaRi7b59NvGZozkNH1sUe3qvguVaFSjk4cBVKREMBH7aR",
  "key35": "3Jc6tdHxgeUSgFCzKWN5GjpzYTopzWnvZP55LACXWhELG5jQB3KyuKMh4KvKWCuY7MMPmeGyJdtJ98jifA22bjf1",
  "key36": "3uHRR5Fodkfbx5yQMH6Fj6bCdrRZJKpH8b2poNAvjAR2h2PAReTRmdMuecYizvwxPKdKaULRQuP2n4t4Zk9gJF34",
  "key37": "2QbFP5JgS3AefK9KkokT2AVMwC6Rw7Z3iSuLD4vE7ubA2FAbx1QiQDB4XxANwTPSjxbdRJUQpAfcPKG7uS8AEsHM",
  "key38": "5cvRqHUSHQDkqVa26h45Hkfpt23H1Pzjc26oEbRy3MggFLnRpd2FnKmLZpZ8LthafNuVtawkd682vAEbYC1y4bC7",
  "key39": "5x4MQeANzFcU466teZ9gJhWXEMkQPoLt6UUUbshWKQ4yHTyUwuRmkYUF5TWTXGP6udsmjGLNS815ty6wxu5maro4",
  "key40": "4YgCadQYVcJtgNfU4AZyTa8SXbgw6tPyeZ753HVyNDvewRrFKgwu6dxrLDEYs4JhWarianiPtVTDEvwPodDm4xJ4",
  "key41": "25YtuUHjoW4hB2zGwYKPr6XhS2MhjGVDQtv62TJJ3tFDoUsd2kr9nEu49x56r169XSrzqR7VmDS6iKXk37b7Twr3",
  "key42": "5sBHJ2xagj2PyvRSdz75XKBzjV9yzApuT5ogLzLtCeW9WcgH7cD8rEsHBYN1SANQaq47yBTp71Xy965P9xCNMptW",
  "key43": "55aaqRN5LFNszaZqQDoN7Baeta7c4sYnEmHfazWJiH9GJhnMf7Ua8gkVv4uMRFbNXAJ4twpCjcxESyiVPZcgbteH",
  "key44": "TyvvWKJEqdLHJ7BKcyRVWSCZizuG78gNcu1iZKJyrtN2CRNyMGgZPv92dq9rpcFHyqAE9Li9U36uEWHaBmGYMur",
  "key45": "dwwRpjSw2sytktQgdTeHk6CUFKcTXan1TnGEbJnCU4mrPCAkqHeTbRT1YfeVsth25xRxD46awAu8p9rxaxE3CWb"
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
