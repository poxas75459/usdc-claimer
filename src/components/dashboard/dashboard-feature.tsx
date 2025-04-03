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
    "4kmQ7tDoM7Rn6RayXDyfk3r6cEYh21VzoTwQFt4d4PjYUqKacd5r7dXvD552NyQk1AbSqg7NHw49hSMCmdkK3Sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u9JvDyRYMLFRoTZuYsLKJjFo33YBv3gbZaT4XpstPmSWasD6qA3vtzMgqdBzvSqJJrN8uFMTaFK11tDGhD21zns",
  "key1": "2Yb2bPkiD7sFanueFfSXkjEs9gvrKPWBXsuiyXSwUCqTNyPAV6PwVo4pL5eN8YPRhardF9xMzG45AKutoJXUeJkv",
  "key2": "xpp6MdLU226hnmSQRdo3K3gJwVNTgJ811d41tc1W8ZBdZQ7LSJjR63KhBGwp9E9HPQtAtG8HzkNaKd7vBYGUrEc",
  "key3": "4ADPg39UzyoEYHkpjAQP9L6vbDfZ5GLrAYWbqBGeRhXX8Rq7CkNxCKYVjQp3vrw13N6ovCp6bTnQDwq9gv8VP86p",
  "key4": "2xUukAcLxMPy1SBxseTdmKADmCKhPRnyCMHqmi8ETRzdd3Bj3T97AJNeJNkQBPKaWUV3SrDvXWBnSvPihyvtonK8",
  "key5": "48AxtZ15mLYg3GEtsyeSW6mpkeWNmGnrBmYp3iztf8qBFvBUtEN4XL48wgx5ywykBfXKzz9cGktVYyLMLqngzkjV",
  "key6": "cPKgnvbdqULeNCm31LT168AfEbGvYc8ZCBGrhnRZeUPo3zB4TYgPWNF7WfvhrtQMjrHriyoMMyFUurKzjsmEGK6",
  "key7": "3zRPMS5t8QCx3vPq5WiYzuMKKr1zxVgdTqE7PvkbCvAqfA5DUAmZRDmoWxkoidL2kA9JNFoghAC8cevwqsRAmqdX",
  "key8": "49s6ZqWGPQcfgixHs4FxU648pu5nMxvgW4wA6VvwqkZfBHyFKaUiSjJi2njRaToGBVQQivBHpyHozfbur6doBbiv",
  "key9": "aLB7dGuZyqp7dCw2fJgzNdnXLN8bK5ep4rf26sYS1U5EYqqfMBLM85gxELAVa3osz8YxhZ3qiuRhZbTagyqckUT",
  "key10": "3hJWv8Jqv7iamLVw3HoULMZfBTD2VCZXxrAXCuhV7eJrppzpp4L8pTYdcxpSBbFgTUvfd9GzA9L6zfDFdVPnUj3G",
  "key11": "3TF1qZqYCR44BXzQbmhtWAp4QsQMjk6DKMNurJV93XSC77CA3RGqkgnr8xVtihoysGH3CJRMBMD69MFZcjghU2wq",
  "key12": "4cVt8hdCpt6oYUQ2t5Fb2JfZ64gHCtBUmuGRw6rFbsEz2X1Gztn6Hx8auPCMX2EzoC39KeAWbCc7ToukX53V8M87",
  "key13": "5cPPHwMZG1dJCZCBxjqxXFv1BHqnMS6T79vfJnEmkypBsn6fLAtgmAFYEfharE4CmzrVxroywqGhYDXJ5CHDfdJH",
  "key14": "5gpWH9n6Dyh9RR2ghVf7pKAYs4fj1zA7fSpftuMh1DT6N7HVyE3r22e21n2yMuf5VgbbJM8yjT6m7wpK1yCmNpX6",
  "key15": "2L9HLnD6En9eDoHEDA6ddCgH8V2E7p7RWeAUc1UoXXCqgzwZRsN382kwf56BRtiuz4Mt8Ctj2cFGu7FVumWvBn8L",
  "key16": "2Mwd9a7E434yRxJLzHZMHrvj4t4F4ZgozYnwciomt81nKATyPFRogbUKejeEutaKJ7pWsjzCUBHWaB8H6KkCXsyh",
  "key17": "4fmJs1SWqczDpwBdCBBPWYtAbP62PribPwYiGiKqagS6iGRpH7ixKiceNG4pyKbZ2jCbPoe2uRqq7Ji44ubdDBAs",
  "key18": "3hx4XMTeDbAYwMmNLibDNcdqmSs7y1o8F6JMrc5p3P1bbNQHukKaS7X6r5FLDXRqqzwwoe5S63sGRMV9zVjerQyU",
  "key19": "2KJDg5dCKPu7wi3GW81mbnXzFWTa3NT6bGxFazGqfHokdJHUL8V4iKxGKzaQaC8D1XgKKv82YbdaVDCAm1ZKsJp6",
  "key20": "5j2a7b1tHjYu8EKiEYavyHWG64t6MnNYVbSdCpLBn6YcDohU7xhxk9yzrTEWsqVdnGHBAJWSovuMsKnV3BbShGJm",
  "key21": "4gCE5EpPDWuefoRLEncJwFVz7BYUzRZMDNRZQpUTfmkSxmri3FGUdPh7KGCXhisgCLKx87jFQf5ruCfYzLV8T26t",
  "key22": "3P7hES6wUZ5RaMCNEAzTp3eYhCT8TgegPqAeFZ2PB7AW7ZbemZnDvnj9kUVGiFQuAh4vsmzKXi7ZrEtKy8CEy74h",
  "key23": "NM5X4qMy2egmadHWEQKS5DEWrWTjbFtU9Vx41JyQM3Gj3xvkonbPf4qyMdewVvPRjHqWBPesTPrQJbEwgUytjPb",
  "key24": "5fCTTXD5DeJ6Uo74VhTCP9Lck4iUPj4n4jjyUtdJJeSX3s3JEkTo7bsGo7APUD8SgR2FE3n4n8fJB2H532NMkeQd",
  "key25": "4QMx2bx3WCVKJ8MfwFitr3wnohEajfS4qTmSyeuM4hSLWVaRU7YATyMqfLm68zZ7kiq9iYazrFvALWGXgyQ7Gvu7",
  "key26": "4LUcYvkAEKww2wcS6Kp36P5WrTMnMrXJyA5GVSfpBXzBbvXnJYFq4PgGDbznjf4xhJ8VvnkAm3yGAxzNmg75To2N",
  "key27": "2wFFgdtjRSkxfAmFPEau7W5RKFt9E67WbUpEZZGAmwjvRYo7gEd8Tqraa6dQF6XvQ73WHrhH6FAZVtAV2DnygGjF",
  "key28": "5Qca2Qg4yiVzEASi7n3QkJkoGUQHacSAXDUDTrAUGGob9vtgYdLvDVpHdvFu5rin89pRmxF6YibxbwSQNQRx3LfS",
  "key29": "2XeqQXzb53KPVDfD4iv61s5yYwUJYtuyxmctHM4pEq9AwmDMx1zu2QYX98VzjsE4Q4rAGx21gr1njTRMY6cuhQTv",
  "key30": "44yprAtQ8Fokqyy5uZGhiDoZNStQ8eRkTKF4Fen7MosiCMNUmKiSkfTa6VS2XLga9EfCJQmem8LKFTYwPHqQ6xNi",
  "key31": "3pWBHX1PBjcbZ2jozYat58iAStErReFD8q5RrLAswN3svLgHfFSSAN8Cn7T1fdzohZBxPvwPrddsM7jhzXxJEtJr",
  "key32": "BntdwoaxSonyfz62KRYeT1sMeMRGf6Pie5esZSRoK2nvKm2Csk8E5RhVftaiD8cSjjj431WvVoPCRb5kv3UVcyr",
  "key33": "4V6sx3QktBWDJ47UtPLFZjqqixohJBjVmesRFYs2h2Mw9mVBJVFxoSm2MQKeHN2Uy4FTMPzBWbJiy1qpDQNjKZ7D"
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
