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
    "63wuZhjYhCdfhvHxfadcnqxdpU4dw2B7T4vvmMQzn4ViVWsPRkFfiV7Uys7taB1D9crcgXuLCNfF97ij7PJBAtnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5URzVunvSGiUfTtDenaZJ8xCuR1uw2e37yPpCgjruFV54KjoYaHYugt3TBuw7jzDY6ucyzBu1VAF2CNuRfhBLH53",
  "key1": "54abF798KcEPBVmJqpSSMpb62ch8hBs5Y5gAHfhzQS2rjkqgKsjBproPZZH18xrwXkdnHuiUuHZZD77uLmgZaTAu",
  "key2": "2pSiejS8wiqzDSbezArvhbAzrQM1JFNcBJdChnq1ZSEjzCvgTPLviKQvAPbtCzC7P1WSzgzfJUQERnwnhDTfQvXT",
  "key3": "63YUiUYKBFu9385EjUfk5QVpnhxZfE6CAAewUGLd4A6Qts3TJjHyb6KaZQ9x8rmCRxEJTnWdoibUJoqrnNAE3hJu",
  "key4": "2oETSgHs1QRNRBZhgvuS55Rn8H45g2aMz1ybHLYM84aE9Erx6AGCx2SHmzNwoeahkGnAMrRVfQbaNQSHTYstZ222",
  "key5": "5ZTvU82s9zGxJfJuZkUCw5f7dYW3cKLsK42bNmD8hFhYqS2ccAh4zuRtDpYMdtY7h2RuGhTpTnWbG9kNDusfW3L1",
  "key6": "gf1X72SJz7LcijSUymDbJcbpW2vvjHr8fYRNDMzRxJSAQumRxw8pJtB2MmqVgBGL3A3Y2aTP91jUQromqe3pvHH",
  "key7": "4dGBd7WeQQq2kK9YM85K4iaaEqKo3QjqY61xTxYdnE7RUCMFwXcZh2Q4Mb6a1XwyvS5pJuESxg8UPUZo7n3RChcF",
  "key8": "3WuWazSXmZKVVZwALrkbXRUpnzi9xkfcPdALAKTyJmRVB5VCftCxkbYTv3Z6uXH4ujk3bt3NeziHT5gsGjMhJkHm",
  "key9": "5uoa2oucgkkj6QJdKAtQwZLTn473VELeXCwjuGzwhmymJNRW3Ax5hVbuuGgiYbGd28qgZgbob9dYtnsnHJpBoTQL",
  "key10": "3L83FZZcHxccDsf8UeESbGdNiZUtPyX5GPKBVCZWd7CBYhNasnV3uotwZm4Ptg6A8NS8QAwyb8FJ6b4FeYwNA5wu",
  "key11": "5vV9TRdYzf4bM3Uq447LqkApBsLFMiugLdbR7men5opyTPAMmjrN25xE6CPwgFqWdJg6EdbJZJzzd64bu9gb9bCj",
  "key12": "3Rd1ojpjNrZ59diCyicFVN9NNgJa6JDY2eQHF6XWvguBZ6WRiyADMv9R45YnS7fsSbSJaz4k9ja4wDRiVpBUMUMB",
  "key13": "24hfRERCRHS2iotXCe9upfJJaG4kRzmEg7tWanqC8rZxT77BfkxEYnKZUKYFah5U1v7VPqYW8QzEvXWKLp12bXC2",
  "key14": "4RtPrHgChkdpwkeMZe138mJJSnW39nqsC23tg6FE9pRt1wMhkCzTjQVTHD4UMfLgMoTdJX8qF7vTE3ggnrF96fe7",
  "key15": "KxCxL2B67oT6T1g2KnYQstdqF5pXobAiegDkv6bkT1cGNp5yR5yKyypZpaiRSiJn2n8rSVxeTFeikUVhd9FtWy1",
  "key16": "4Q6ZrPqh3Jt6xJ29koGC2CaxCWULUFdxhdMijCpRiuCbzwJNUDRqDXPcQqKvupTcUAS94T2AkbZwajnd3sRBkyfu",
  "key17": "4rQNpGdRceREdVacTKoRTnRoj1croKfL9fdUZCwW4gyRdE8HeZkGFMdb1XMm4yAPGLEuCRBYzYDYNFBBeLEBNP6j",
  "key18": "E4bojTr4cXTZiVdKCDdVifnyTtWMJKGh2rsMYM5yp4hKqYC8RWiMEBC5HC2DHUHRAm22A6StPqLqvVvKEUfkgRs",
  "key19": "48V9ZtovW4qURDMNsUkP4pt5s54JJ7eh7XX6Btysq3CZTXbAJnGYrCCfi8DqiyJfmxfoqYEDv9jSCGyavwzLqnu8",
  "key20": "2osoqzBzC2PgTpbzomoCEvzb9scJbNK8JD2zD1gFaWGGaZVxyAEJBNMapbGfnpHAfprj3VaodPRrYbLMaFxjZ4Y4",
  "key21": "yWVVJ6964KodnwKz9FALLjH66KT6cRYXZYATXfnoSjSqo5ScLsu9KbDbxwQJ1nFuKd2A6pD1JFQzKrRim3Wr8x9",
  "key22": "Q9MeR5tYHwEL4Gt5sUv9fnjKv3HfKN1hP9gR1yJChsF6ELa39fWEBBtq4hYnnL4LaGdPnRGoxXWA5VSTX7WuGKj",
  "key23": "4CRdhDxzQjKB6UdsMLw64C8tHUUX4G7E7z1ZHkNF5RQ2oK74hwoQ7fup8Z8SPTfWnmsBUVL3bCzieire8ZMWysid",
  "key24": "429RR46ymaJ9Q1punwtb8vBUF5i8eGu2nUyb24p2Q4SrcegXYgH4eiJX5uFGu6ikxvXF4RJkMc54QY1LG2ytftHz",
  "key25": "5bh7kP5cn8GmS1abak1StkXUmP2275ioTXLCPmpxP8yyTrpwchAJq2qG3VFbJ6ga6wKF8t5KnHFoqhqjxCt4GA41",
  "key26": "2TanCmYtLbJG4BG8xmxeNJPVx4WmpHdsMwG2ASCwJBxdwXTijYxFurfne2ziBx4PzFUPKwyaDHVSzbQ2PPwqSJBo",
  "key27": "4iqSkKz1zXbXbZgaLgWMQRpUjYwxruviC7qdYY1vYaSF46ZfztkhKvDDHpe7dyArETQNh6NuaxLjzWbWtDb7Bzbg",
  "key28": "qAdzorZ8NQSvPtCTXgMa22Bi4zKKDMXPM7tfJA9cT7MtBvyR1rVLb2Cuby3JRVYq89fdu6m8PbvCs3Nk8mtx4yY",
  "key29": "sRppWe8xpJ5wDgQ4wtPiEwUogB5NpvtxeYHmYuyV8GPCzGY232VF4AJPoLJ88QNMrDWrRLqZwxpa7HiTdU5wZFD",
  "key30": "53LMwb7Ep6TGojuGrn8NmCvr9KRCQqPnP3TRxS8X9FS8LKxLqNbxFRxSvGxJYCBVzk7oTfTz1k83vCS4msK6ccJk",
  "key31": "2SaRHiHk1Xx6foL1pfawUoxV3YBqnrbR26D96fn9VXdxNHJRXr6n6nBvfwne817nAWSdxzJJwb6YAtNkbCy447W3",
  "key32": "225JGS5XnYB8aPXNzeudev4hXE1eGiT2yCHt4fzwMxKyKz9osTrzou8UFGFJtncAV9WTXBa3mVFKk64jAfdhU7t4",
  "key33": "3iiWLbWeSmPezaZkj79rb18Br6Awrw3GCNuexu9qDC53zeqVHN8eHXMUY4D7vphouJ1YgCeGjq1VkTUGR2pUvMav",
  "key34": "61mNz32AvKis4WLYAbCUP6423FAgKx9NWGvf2TcDP81CWCX5qMBQ5ftqN56jJGMGoprhaA897oZ9DxyDGQZoLW8m",
  "key35": "5QXYzmb9w2fkL6Au8bfpJfFxV8vbrotMFqGV32q5mCGvKob4Fbv9AazSR3gDsY5pAr2QVv52V1BhtUcs9JsA5G5f",
  "key36": "2UyPKTbF7GU68HVk1G1gfSpaenVqd8Kvq8kScnbCf4mtcj7ouDV7JBZ1Ea7gwGoPSCen4kMbqeng5ZyjGCJnhaCt",
  "key37": "45YBbN5xs9ovEPAiVJ4cTVHki1W12fVKCtnz1wEqr4A84xWySZswXjsm8kqwbnzHy5Ubx2vn1QuQmrCcntCTe1sk",
  "key38": "4s7vrSXWCPZhZ9i5S9vTQhwDU1QA4CniZdUqKw5DS4nadUc1NDMDuoxwfPMTEGtfNm56QW7E7rYyxXT8fg6gNoJr",
  "key39": "2Rxqt5fbGwaYYo8jsGK58t67jeL1rbWXxpSiCt9Q71M2NhUhugrUgNKUuhX6sddVDhj2auhKaa88AJHNjjJNvro4",
  "key40": "zJjQCBT4UDuVJFAHF1BWeKdpdLBxK1FsdGEPxEVtVop7k7ScSzxpLGCVbfwyj4MMqbJSxPCVBDCfq7t9rsXTg1W",
  "key41": "3C7aaWRw3PXn1VyK3m2DAUFzBzWkzvTdW2euc7MWJAEiJcEHb6yPT7ZDMT87bQymHA51VZWJRjH3F7kWHQbxbcxv",
  "key42": "2Mk64NnBUSACbnjbTr6W4s2E8VgRrJy7qpprBD5FxQRNMEetK3LQHakhhvU6MRNtKkqiim5ottnRRAnnpKpxVf2",
  "key43": "5LfdQASbHBboEe4Aw7Fo7omkU5qcuZKmgrQFGCfDcorde4PNVAMrSbCbZU2ZUSC22VvNoSsaNjE1TzWY6Msna8BR",
  "key44": "3hCVQkyYxLJ8Qkk18SiPH4GQSxcQdkSJdvEwi7NFT5r8UmnH3qMLWj9nsoyMmHF1na1ytVaQBx9Dcu3wVy28SPzP",
  "key45": "4C3dPCm9VEp5qsn3ZwpFVySRaXW7mN6vsiupxJPjBqJqguxSRwxw5iDKGSn63DjGpMFqaUfn4sAHhavmYvcxvwc2",
  "key46": "54AGdSf4HbEZpnP58jVBqprtbwtB1y6SzCxzYQbD2Xj85ji29eP4CEqzrJsVDfo9X73CsrzqhugSo1o6e8C5fqWa",
  "key47": "4eageM6RqjkB6tSVwSyn72u1BsqXfFwbR6geSg1DaedPW7H1wFx35b1bvac8QqWbXS35QMfdUux7RaCm3fbzK3eX",
  "key48": "3uTV5jWTNarBkynof3SmuW2d16uBSN7FfbSSUJF3Fb5BPev9ucoEKfFzVnoqbt8RKDwm7kbi2DXCdBSKZ3oBP7a4",
  "key49": "5UXiXo2PoCWLjzENdhxZJ4Tu3feFJSiG47S7e63YcYKkkfeA3B322fGkLRUGptqXmftkCDSRjD88PQcuhS45Bhfz"
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
