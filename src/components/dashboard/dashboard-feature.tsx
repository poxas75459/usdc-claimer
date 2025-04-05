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
    "HS4Vf9rM1V65DKVS1e2hzkW7Vd1juM8tbFsM4gdv4dZHRdQnyfQQew4TPURFNcGR9uCsijgLt1q45A6QCPVD7HC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WEekCLvmSkkZ4fnF7PVFTkDGMEwPjsurNVXsLRKHp4RQHp4CuPLCG7azfdwDG8gAK7Gp32643wQdrSMYBCQz5pb",
  "key1": "5Kg7mcHUn8AbH9cPWfCbWCkuWbaSCwrDT9Q6BBkYX3vkhxezJgC3E2MvR6Lb7q1Xtt9iQzS1zHkCh5q5Sq5C3bFD",
  "key2": "4asS5SZeqgTUzCTWUhzLrmCdzYaRBMUBDQi9Wj3WdaT7kbCCPvdc8LnEPLb2w9BHVMachjFYuYRcxoUdv6NePJ2H",
  "key3": "4usHaKqH1Ne4WVarg5kQiQBSPypAUk7itv7dPydqfbQLbqLGTgJYczpLd2X6yG62NyHEny3cfyzJu8vqXCqFKVVW",
  "key4": "2wPqLqP93Scbz8sBXcYLRjTWkRQqoAjk3gjZwU72DrfzXanPxfk6DTD6pcqbYgLSDVgJUJumRNXmoQMQRhvizYsw",
  "key5": "4W6YA5jrnd6M77P4DtYGyaJd4YH8mJzWzQoa6m34K5edqVfXTtAgKTig1dpJvi3oii5oVvZ1UNoF3355nNiSKWmx",
  "key6": "4ZFsAkWU22pX4oiEitCMoTBvWiZoSvXbKKmmGs92GJCdGAMj5ckS8nZPiJvVfc9cwAjCVqTVJUsuXcttuH2NnmVz",
  "key7": "3N9yDyryWpYPLs4MMccizxJ9NtJfSPspAZdwGCE3wkCPqfkXcjiy9x2qo8cxcq4yAgo7bZkYuuLc2GpRQBSE9G4n",
  "key8": "3w91YHryuRYchp9sBCemE17YzXPg5nagSXfaw4apE8FF99Fj3PjJyunw1SKtnabFXpGLSrsbws5q3AHfKxWrKVK2",
  "key9": "2qL2zeYdEN2Q2Lz4djT2BUxf5AZ2LYgcsyyi6X82uFT8XcXPB7nwoKBHi7jAkbYw1yyKv1Lxxfegxfj2EzRfSySW",
  "key10": "2u8nCWuWRp2CVe1ydAjbJJpBoL1xLsRq22EXqWBfNG9QEf8DNi36xU7JfK2ftH3uQdHzSraDxrNkmEACDCUfUtfC",
  "key11": "5VoQsT5vNM1RZ4jmCEckpe14P4w3EesWxjJFAyW419p5hyrgGkADWZQ25T1gayyhgnXhUuMGKW6Hp5x8Vfhya8kx",
  "key12": "3RcMp6cLE8JVD4dKdrfvugXDEDivMdvaokch8VHkjZ7nLF3YLDoER5SoaHBaBP3bc4J5Cy3oHosWxQZhUsEnpdKG",
  "key13": "3mV2iNRoZF4dXugAn7grFTKfFV7aP6kYxj3NX3STG777GkuaQ2AkFVjcZwRXNAmWHMjZJe1YCLgFFe697R32qZio",
  "key14": "26QcmQzJeCr3M5taP9vCwAnL7R8p9hvoFEqtqGn1EPKUgYB6Pa7U2U5MLjNmkA6jYVap7NKENr91ug8dKCL8wCWB",
  "key15": "5EP7mQSZggyUqJRDGqnSTpwjgE2YToKhR24tYsEqnZDC6VU5aamSdzjxfQ669SViCTZ6hC7hnehVD4yjLZwy9L7S",
  "key16": "286k3tUVJs9xwjWmGmwJvRnnv2g6XqtjULnymkfiMyEUpWUhTY1ywVsqkGVCSq6EVhzmvThT284uissmbJyqU1Ek",
  "key17": "67hkKAD7wAgpBsV9GyDGg9Bbsxza1icP6B51kF3aoQNxEcGkqZKNXcX2KS7TozWtiZAQXyq4KAD8mDzhUv1MgJiU",
  "key18": "5gzQwRCJ8AS7ao8weQBArKCjD8Mjo2xtrJQxSSGKG8L39vjTLAN86fi3wf6EjVfLEEPfcnwsk85SFeabD6r5LojM",
  "key19": "2D7mGiVeDZfmkMmWvcVJ3PugtDJaKSvBM7b74XP3GDoxHe3fcBSupFxDCHmteztJNDuoT5xs7JYPbbMHPaasMspi",
  "key20": "2KkZtm9dhxZVvc93MXv3yk3Yn8gpH9U2B7F5WSaFNS9YQCQUnQEhFjrBnFKJPSPh7XmxKSqBHnrVsqfeGfqPXzuj",
  "key21": "38bK275Y4xgLX4oQKf4rNp6nqb3xeh8JzuFXdGpvggcXt7AxHDmSPSC2Cx3RvaDaf5ront8iReysQ16ZoWAx4BSf",
  "key22": "225bcyUjkWQ8oMiwHinaQELhoMQ2rnbLn5w8F3VQAmLryoB4Y2BCrCHHTLExRVWfuAezcAMPyNdmwd3HdWaS8TPy",
  "key23": "2Jj54km1GXoBRVdbP8x9MvpdFVSqNh2uPFny7cfNbpdNSX2XETmFBnHG5WCT53pQoXSvkbRafo4MTcWJQ94Rqcix",
  "key24": "UAAbRBf8rMDWAKf791DMnMNpYZe7Pvx3WbT8dF4sQjSBtDBfrfLd5S1T1jZffaFejgKr3kdbArTH7tHJ6HwL2cB",
  "key25": "5dK3V8TMobTCzq9nKHjfQVHzR1SMSh1J5HxcgYCExczWEH7Yp8GgefUgGcZGiC43pSCf9JMP3ovx6nYGiYRLBe6Z"
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
