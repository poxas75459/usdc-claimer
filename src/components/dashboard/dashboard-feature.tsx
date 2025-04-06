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
    "45xUF617oWzouxHJZUwkcEmDhoWR5Q9Dh2x87iUyGz5KRhMgwShtp71EkhtoyoGB7AAF7Mvhz9rArxutjvkfD29F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xtBHrrH6p3SB3dgzV9qU6ogivq2uFBdPfmrXV1hDBux5LCaYp8grxLuCfwo3kaMtBXHFnq2DFUHGRUnzQzm3z5",
  "key1": "3YewcKe4RsuCWGCMRnofUhVTHhkgS7DW1BxdPXBW9bRuin2bFY3Ah9ReJq7cxNJYosj1VuweCRnMFPhAzzx3ANv4",
  "key2": "3EQyDEmUH6R4hc4h1MZiY4b6WDuWChwJHvGyHucHeuqQq8u9D4wMrzR1M2LK8hq4DQaFf1Jbjd5WAJQUHKCpGqqg",
  "key3": "4sZNqRn3jrVYDvy3BvCbkH36JoCbNN48qC2rqy4W7HKdC9cxwi9nprdRodpWqpUGYkvnMmhL7KfdBoRkSPTMgiQ3",
  "key4": "5sKDPozPMqyt1LcimLUXiuZg7Py7MkrehmU6hxC7bWJi7kZVfKruNwX15q3EvByXyB3ru5zHZ3X6pEsZbW4FujQQ",
  "key5": "4Npno7Qe5TsjUrgYfHUyN5j9n6xqyeSs7Zxg7fShKBn6CTqiHWvb62wModQsjFqE5S22JNbChkQvNwchPrZXrADC",
  "key6": "tBhyww1F6CA3nCxWg9bPZzTGPGWve53DZ282Qu1iZ9MVbUxm5VTnEnK14xVVpEDA1CHfCC9SfebbnvdqX5i6FPE",
  "key7": "3SRVJwgr42yeED3vdgPyRbCcJb2fcjDygK2xWtrVLNDvicfV4W614c8EhcX61Y6u23sf9ehYdHqSUjZdaMCmJBr7",
  "key8": "489mgG3cSADGVaM4gefgRThoLwAXtu5QpVUfU3Nz3Yrrt97SXFp5pXUiFJjuNZ4qirzdLq4Bb2pjW9MZJtQr1sAN",
  "key9": "2QnZsmY7k9gUfErx2rKewe4KBMY3yrCwdicvUWCPvDLZCX2tynqiheJAB1ZZGL3xBYfWe9SwRxRjwYmTpPRKvANd",
  "key10": "61rERGE52a57GKpLe9MDMrvxyST9gSzdfhJ4xeiusfq411BpaLi23vbCohsAFKrwYeQ8oh7QmhcXNHG3ZAESimjy",
  "key11": "yQUfkZGj25xe58q9eXXQV2tSPC76Q1fv4bZuZZDaytnYur2CvZC5f5PU9EWerJu3VbbWMeiPsuGYviAUi54saTc",
  "key12": "4DtQr6Sj5QUWEYyh4iF6JTeopZLuQquzCS1B3akgkUvQEnxiVh3SaRubkkNz8paverHXC54N3knV1zwTH6UAEJqg",
  "key13": "35zZvC4TCaU9uZRgcszhWqsSFBBFKSW3xKFhfzJHjeSno6Kc1JP4KhHZFZQFciucHgKuBTeZxCAYDkdY2c2Ys198",
  "key14": "37WA8Dy5tWUVCBaWSTG8ZuWCKBUr8N7PZgLGEWoVvE4oDXf3fsRsGLz2an1FwyfxZEpiL36gWtUnoLJ7YLvuRSGc",
  "key15": "35ME9xydrPbHumsVVmRyNgiyzfnWfoV7DMwcyXWvdtKhBdjchwAoyKYdCchg3XSZNLqJ1JxakZ8qTMQNVFJzWvra",
  "key16": "3p6hbFS8iGfunm4goEZBjm8kRByVb6X43zRMFqikCTJ2rvGEeKUsXRYityDydDU9TZCqM2bGterFG6baNw3ZLZQ4",
  "key17": "3KW6atLnMAaTz6rJMrukfxq2SXPujnzRT4bHAfHSEVpTZRdQ3rRfYnTeHgvLJMPx6io6WiD1rDrYcZHe9jcusw54",
  "key18": "2VfreM2nph1tQVLpjPk4yMx95rYXxVDmJcyiR4NnWcjXanBiSNPmiiUJAERiqVUPnpubvKJxNsQPDqCYBci3439q",
  "key19": "3G1X43cNFQ4Bzxae1PZzVWfJ3nPb7EfXhv8LSyP1D3MuPeMf6mzZkvtAvVBD7oFMkGdLSHBpxjWhgcCcHWW5ui8z",
  "key20": "2nsB3xwsNiW716YS8S4zDQPu6DcUuR5cu73S5AeRtUbzyBB3RNUqaAC3D3PQ1eYcVepwiySnEJAdBqwb7ePBxjAC",
  "key21": "26Swx74ntCiq1Rid7kzXi6m1gV2uc5KNzLnW3cnuL1wJCiryn3asGGu5NNHAdLQWPMsc8RWTVFbAJCtbQVUHUEmi",
  "key22": "2QhahqjYHrkXJDczkCzmJQ1cdfEogEX2df3s5UY7X32hkmYLMx5aEqotgq53CnpsQWsYZzVRt88eiJWeVnfuvL4q",
  "key23": "3H75md7rW8Uuh5eza75Ap9heK855jUo2TbEMFHxpMWxe4QMSxJu9WV9CfR47jNPdWSkuihAVzZp5HtNajQSHD9A1",
  "key24": "mo7KJ2zs9rUV4APWEx5bXKqz6HDuZvBsAr1h2sJR6TdrDC1rYNVs4v7tYFVGEiPcXn39mHrwAkjCnfyEG1FvfZ8",
  "key25": "4Ny9eMDeurwi988VtmsrRmiyxWqmeQi5LmmcGAeo7SHr4Epppyq5XcMtCyFvPBTEm3QZ9nJs2PQUYApwicwbzDb2",
  "key26": "2Ze3UaE9rg61gNzrjGMcKXBMhbudF8fecb2pxCenkJ8x5CehbEjDFDAGU5G9hjYRTVBef359Q6BzfP4v4rphVMik",
  "key27": "4f92CX4dZdJ7ZrybAfzkheQidQd2pBEx8KwuMikXHfFWxojgEgqo88C5eSbyZhFZdjcZsGEXrLT7refgJBdUjpjF",
  "key28": "EZ2XfeEACSPYUyUzZxNhbuFZdfyHodpNY8X8cZVHWTJGjq3KGPA4s82eJReRKMKtEVpyhhkkr3VktUDqc9FJnWn",
  "key29": "ER3831VtRv9MxvkEdYPEnCzzvU76MRtv8GhZC9GED5mkqmGXod3aZGaqBnAkuu1F3Hkgt7q3SToQCBsMwEPwoLB",
  "key30": "HqoFdgERYfq7L2F274QwjJQCfSujn82ujAWTTm7gYLa4NM67P8Adm43RGaoYbyaHtrXQd4q6DBT9rfjm6xPNCnk",
  "key31": "38w9KKYwBRgyETVGG7aSHYWev7DkTy77zXLowMCwJBzrWjfgAWxeutAZV7rT6sCLzRn9b7nfitmks75TdvF2cHD7",
  "key32": "2aFV7E6zYkyJTNNCMdozA43o47C5VFASWtgYJr3AV3czo98LTkdKw1jmZTNjSbfAeUxQa8C7toV8WFjbCtCnrVYp",
  "key33": "28sG7Yh7vk1HnNNc4Lugic5oNkVLnFf8L2NNoUEn4sjhoiqhZQZNSfgktAVRsXMtuCDwmtbYFQHCBMPX8n1UDmbn",
  "key34": "3NQ2erpJJFFL3Rdz2Xwf9PWJQaHssm4h24QzY1KneQej2eAcUiUdSWZAGiSMfu36upfqZD7fhtutcFwzpSKAdRhg",
  "key35": "3pePGEXXNg5nWQF1uYGqnjRLu7XqERkCFBNrh8RZ3xim5GPxvtm25h8PZbSS6iJQfC1rS6N4GxCMTyY7XopyM9sp",
  "key36": "3nbdcEgL7PgpodMyVZNa5ctZh6JkdnTtbBKR1GVRsFS6veCbjH693DnGBxo2q1fSvwHSGNeKFBjmXccUYJLdA52z"
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
