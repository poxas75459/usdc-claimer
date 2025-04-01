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
    "2EETtcSQfrdozhEUwcTutgfKeTBDtcpGxMCFUtktFLTw3FF8dNV2Ek6ngDCCsaoc3zYxGLzySSaXndk1XJXEJR2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s1DCoMfA4XW4nx66aHr9kFx36urYuYA9LBjDyoot2F6T9tMsxDvvgZKvESsRTJP8PCfeReYwU94VGynUictP2ed",
  "key1": "4Ah1ank3oFKgK6k6eHj6dhXr4jdKP9qSnJQB9EfJkwSzht9RF7ctW51HADovwv3VeiuiMo4FGAseKQ2GjF9iVHg2",
  "key2": "5iVmxMa9dPeNANauxyZWtaRyfmV2bGiigNRHP4D6Vk4yZRrN5Ty3MbHkeRkWRq4AoU9iWZFFQqyk2j9os4PJRTzR",
  "key3": "5ufgy9zsYsobkjrSebH2cWzchwNeWYye9oJt2dXw1H4F6bGJ7v896heBD6krjGgNSXZ8HHU8F8VLHGsibojPeMBt",
  "key4": "UCVjv4i32WhCL28fx8YJt26rp2NshmzXQhJQsnyK8YvsTwurdMv616tzx4yhFW3pVH5HrucUmtSMBPhftvgQGie",
  "key5": "3yoRxiVzcxArXpZJsiY58uAn5zVgycGbqbhXbqv7Hd87drJdVpVLjJ9ssqZHQ8H4F437jVY43iwgDFGYqwiagvBK",
  "key6": "5RhHhCRuxHQy5ptZRMHSV7grwoSxHNts95mGY42vL7znQnvcCPPdY8U5M1KnWi9kAZavdt45p2MQs1wTUTYRSQNS",
  "key7": "5UFmecDi8uabr2Ayn6pcWYxx7FVewVCkY4HRQN3FTdrNnZcDKTV8XCvZZrAjMWhbSpGV1rEPhm6YzW6uKThsQ3JF",
  "key8": "4S3LYUSN691iTTgQW8DF7WNLHY8QJ7NN3QuNgRVjXBBrDu2vsiLG4Y9R9NG2o5tPjUgXBHDqxCghVsD6zurLfuwe",
  "key9": "MrDPuFKCvp77xBsHwqjUWKFTa4ubHiTXiHD5Sy4ZXgEaTMUfPtt7VQVsQbz36WfhWSyAjB84yPKBUuKJHW7seFG",
  "key10": "2CDSBtRWo4P8iA5KjhdQeQaFy2ogYV8KAkwNU8fV9DVRVyVEZ8ag8L5RB4ex6jmiX16mzMpQRz3bqgUzjY8qwKLG",
  "key11": "4BV1bYynQr5ASJ8HifCjBL9j6mY9wE6gcvAgLDu93T9TaX1KqKmjCLdE82dfB9iBL9aXTBvb6BWvLViBqjJz69Zf",
  "key12": "57RYQvsu7BLMx6PBAgsDvGWWS5W3SjVKxaPLHVgqRKwRPmaATE93S1SQWTpiAAhJh8EGyyQDQ5FJU1PVVFV4cT5w",
  "key13": "3v2pxJMrC3dofzLGox2KhwTXKRmnp5DW7WXStmxLyzqaN8HEP3x3yku5Hy8iD7i5uaQ8njF8MjxHXMQJ4dFRqaRR",
  "key14": "5ukFKZuCmoFnsUu9AXzF2oCRGDrZSyxk2UnCm6Fta9VDEukBiNEgjoAr641guricRoPHNEkdDaRTGCfMu4xKjw18",
  "key15": "389ojutoeGyzioaNBvbuQeyRr3gVKPdQ8pBetvAihEbAFhQEXeBgiQRz47RafP96Ht1VaZ61g8sfGL6hjnrKFVLn",
  "key16": "4Saawmv4hc2VeH5k2qMRjWeMetseCrvRdEZ2YDnVDtb3eVRU7Ycr5gPCGf8AHp3YT81jgZKi9vbbtdygDZCFhmiD",
  "key17": "FkNAfMeT29cJXT2TKZc8LDmJveexFDvmo4ooz3MVJWc646LtsaboTSWxPdSDLJgMEt1NM4ctDpbtXvNpESZwCcv",
  "key18": "CUtZPDF6kZk5e8H33LqZAffBaWkmynWxZnQ4Z5BpGPfHSecxPQK7eRiPWY6LYeq992Kd5HX1Rx2wewSDGoSncmn",
  "key19": "4psT1q1xYSPJ5i8vEWw9BNJxZ1n4nnHdXJAcyR6XUDuFZyyoi1orNgyJemRmPdeCf31Wke1Z2UVFhN7iUVt3PzoR",
  "key20": "3zQurUc3zcvDiFWZCe9HCy2LBobnHM5uAoqJg2f4Gz7QwnrTEdSfmiRG5jRNMe9baVUa7hxzCGtSfXqgqMevUvk7",
  "key21": "2bGfMhbr49P2mVzPDJ2oi7a5aXxzaFT2eGEr2ZUS8Hz1gkNnby88uSqjPkJwK2BG7dkSoi8VFyWmAHrMTUYiRt5q",
  "key22": "2ZnACnJnvf5g8jeEktxU78T9DkcKPR19wJ9yuiLb8P8pH1EUBdEqKad8Npkh3VJSYgY2H8wvrW8Vmk1k4Wi9oaVV",
  "key23": "45cE2qkUigzDUWgG4N4xfYUUMG7hDX8HaSZ8BhkpxGJpFVAc79gLu7s6WFgs7jBQT4vp85Lz5h4HkUvqGvt47kjj",
  "key24": "2XHJQjmobJvTEmqP2p9bHJpTMqrLZqaSw79Jz4j4RU5JPisQNDvujarDQ1sx6xNTrWkBuwG7FLpTUWJFjAF8nKdV",
  "key25": "62j9EqxB419VY5URGx11CnayvX8XHUGnRh5TAngnoL2GkhUYwvnpSbLVVoMfaJTLZVQvV2AaG7YhwPzXDuL5D5M5",
  "key26": "2NyBL9DeGs6M52hpySeRWUkAtBUZqUzjD3qfStniRjyfwDMSQBRBBLra7vEaHjbzaTY58DhiAA6JMi8om285hvFU",
  "key27": "Ey5iQcxA1nRhEqZiXDaFCB1MFxqiWTuGB6QbhKM5jmmXJ3TJH71r1Q9LCG8enquXbzXviYenebNpVQj4gUgXHjF",
  "key28": "4d1WrNuJ9SWU5uRXsuLVh1DWW7EvY3vbnPBPp4wC9UYNTkvJkYFMEP19KvyUdQLBciQtfj4phSexfpGAQAkZVbtS",
  "key29": "2EpVuaSqY63Ns86sBBtbXKATnk6jhJrv4YdXZj9maogAr3nwBszYvvKZSJTF9wpE7KdbpzbGexDjVVGacJQerdUW",
  "key30": "3PCuxzB4frQMpgz5L75aBn8ALSSH4XZArgwLAeEYDqncqdnRKEqYyxzE1uivaZTYAvnM1Dqu3EV9yKennY57fLZb"
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
