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
    "45aL3XtVTggbz9RhjSwTwxC6Got6rDdhmteCyJZbEZpoRtmXsKcxftpnbkNewJVGtm2hLwyytNd7Sgf17nTqaDZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36krPDcV4yhXCTyToi3ZjoUEhz93ZmkLJRTz8GkDMMG5D3eiTc7YKHVESV1itvB91iwLdHMfbDKd6exegtmYmeBn",
  "key1": "36DjYJ1rQA23QQLaxmXzTDDJgbbP7MzhnZAa2DvaksZkM3RtC8yyGGmTPjm5QSHdahRx4xqegwAGfy2HdiaGVSYE",
  "key2": "5aDaj7pYtxc36Jpis2qv1S2arxumkZWTXGak41ZWKRxworB24W68gKsGp78fttYy1uQEWcrenvu1NdHS13oEKJ8g",
  "key3": "Y15rwLAptobyJV1ex5bwxy3GYeNXvcGLbnzWo4442XxThpcYfKwRCUtMrxdDeJJrQdejCTbfLSDmVuGNpq6wwZK",
  "key4": "2ekLpprjr57ywuXcgn2b1SZLkn8abfgS5fe5ks7fCpk1WVNh8usvMwEZzx5zFsfX1vvLLRkWHzb3v787JMVoih2G",
  "key5": "3Mo6WGewRMEPM7RzQKgMEJpCb7Azephpd6PWm6sEYgEe7bJEV7dSfGugQkgKnxMqx19gCD1zxn25pHN1oF98z75u",
  "key6": "3x7azMW6STjDA4AsGViAWCmLbkggDqn5TVAR1TR2j25AAip588dRWoyDW76kLjXbJ2tXEAKP9QnnsbS3DttpT5p4",
  "key7": "bURnAs12qAjJDrj2XUvo8uiN6DVmqtBH4Uh5QmSUaGDvFR4vzjM6HPqFc69C9cwEWcoiiYKmaZfR6Y5zEvRfqwU",
  "key8": "XyLH1L8Jd3ppRc6RThY7H8whphKorFPtXuqhCh7o1cgYundSCLq15N6hfonk42uB1yNCatsTS6BFMPhHe8qN3a9",
  "key9": "4zbvDh1f1ikk3JVPNbcr1zEyFtWQGHB4vbquMit7jjo7DJkHvWb9xJQKzDy4uxexTMjDU4sKbRJ8wLu2WbdpULUM",
  "key10": "4EygZA3WURHqLVTjJgcmoG9xsoPWPtwkmbcKtRBUqaipvrRsTuUrzQ91LQaPHyZ8uawWMfTietSLFCCJFBpwqfgY",
  "key11": "5KvJxmQhdmvChyr6fJrnckE8jELaSvxTbcgWuKhqbcYh7uCFED4Zovfyz2FKYDijAiAe1S4LthwNM21T1wrJZZy7",
  "key12": "2oH5YVv6bdRYLv4VNDa92w7WYDwomhbjpKqPSsp7as2htzQcT4f3KTRNW7CpB5mbFR9ZkMXZkXWQD1rkvnqGtFAJ",
  "key13": "25zVjERomeEZvtD47A39NwW3ce2EBPyCE851StFBqWBwRoPeYvwC8XCJWCDvxzJ4ZVd3CqzBtkmY1B6xqZXBwMWB",
  "key14": "4cxw6ZpYK86BFr3oTHA2jjEeMpNxdgXD8QV3omDb8DNNz9uTD7q9cMPj3Tr3K8MV49d5w82oH6j2MnMV6kmnBU3o",
  "key15": "37fExL97n13deYG4R97FYkDwXA9w8zoSxZWj1sPJ96dKRNywTQgGzpCsvcjwzzZueSv9GZTtWBAL5BVTJCzrwkVV",
  "key16": "5kMKYB8j5wLLFpBcttFeo4pPJLKJDPpS9pFkD1BpmFJum1QKJw11e53W29xca9PCZCJUEnveU1WAxydw6XDf4hia",
  "key17": "5QAneK1qVymepemJx9kZXzn6o7B1WAHMHHPTc21UmtZLqygrdzmKfJtv5rCk1UxszARVv3JJjqqhWBQwMAqbSDdF",
  "key18": "3PAgEA86KFqHWCEPgGT3CtZA2QY1kwJuHk5eRgLiDioxzxD7r7P6nLjPrKwig18M4dCEkj2yiZDqUwMCDG4VVzRT",
  "key19": "2zEDdZwcKujceARYTuyxrXiePUKSQbzSoN1Np1QPzAoL85GBLxTXudZFrCeVrH8YurMKZB2w2b1ke4AvAoGqKtrA",
  "key20": "4zUWtcwLtwk1tCgY6vLahfDaG75EMm4tFeV2Y1ZRSPNCf928wH2dbGjp1N6nUo8Js7zz6Ak3HYFstZFv9Tdq2SiH",
  "key21": "5k4zhGfCRHoNNmdCrGxynD6CC4PGL4QRWZhBLLoCRZY6oseXLGH6HHe8JyZ6gz5j5GH61V4xnqQ7GLPNhxvpogur",
  "key22": "5gC3HSoZ5Te4cku9wpfw5R4vqJKojV9gHsguuSUmw2kyPQbw4YqshT4jsjAJ4MMxNtvAyrWtXgWio5RcLdrZsxM1",
  "key23": "LxaJLYrt5zdxqRrS8xauw5VNRLGkQcQp6uJZsDHJmqjczybsyW9pJebQ7avT8zEV8F1Sp5qBTmxroZ7GQHB4i9L",
  "key24": "2jjQMVCT2RZHTjUvvMzFuNcEofj6biyzrg8x2ndz8REZuJk2hJJCsb3e6E16cainUUFGcNpkzGgZCLZavxKweL8V",
  "key25": "3vDTxgiYgmTc93x2sbPf4a6Wd3KBBHwi2opFCE2hhTXc1RZGqGjiyCoTBMjAErs4RLPqxrxhcqCZLDk9B7uKitcW",
  "key26": "4gtyDCU8caUjgrPhipHQnoC1Ta3SViBeMHaDZSYu4exQSGe8iW5UDNY7NThGh1oYQrAdeqR51Rn1o23Rfq7RKUr1",
  "key27": "invsyUkNbWbx4tm9Vr6zK6Dqf17Wpk6xPT99HZhHSVN9hRdXVhGicb7m3j8g9sNFJZGszPF7X6ACXErhnKJHxUf",
  "key28": "3Q1jFGNuMvABwcHPMzo1Ym6cCLRM64G1MCA29kpwa1R2oZ1H4yvMjNViRhMTH2rkNRBFtsQag3i3spBwa49n9rqT",
  "key29": "2YtUf4m7kdUi8DZu722Hq3PNh1JQCwpv9TDf1ENV3buh9UZz7jrA7W5oZNQng8S1HpNNryeYnwsLenCjbpFYSvR3",
  "key30": "2PdzhsVdGvuHsru3pGrjndiVgAegZAtGsFiHeSyBBevrgMibAceRZbo4PryokBiKMEafJhUFjnaUJJytHeEEhKGK",
  "key31": "2RMPpnzYUSQzx92VpGtxP6WkZDhTkt7LMWPjHoHR1Nt3pwF3a2EDNHJLnCYmVuRuJuCkc3xjewqspGfe34ZCy5bm",
  "key32": "4YqdBPYPZRRhCCLMUk6KvNu3CUCyC5qwySo1wqrfqwPByT2WdFAM14K8BFWGbwSpTvzN81Sm7VCJQWfanaWVMHxS",
  "key33": "3xMkzCsBZkvGjMNLcjMFVPHdAzwoWYyJc8oJk23TNwA32PUPewk3ZtSYNMwK7z8W5coLFhVGyt24VzVVSnShRWee",
  "key34": "2mqdAoizBEWnQ7jJTAXde63VjrBr2rLKHh8WCPeR4epdLP2D3nVwGXS976L2cPtUB7WmFACK4SxFcbnthib6zUeh",
  "key35": "RFRSGDnhUYBhJChTZeXGppKdUeFW33M1WrWBrWxrHn57dmFPzAr41uQCpAV4P1Cm7Gqe4v8yfgSWDKT4ZoHd24a",
  "key36": "3rGWaeqUr2V6U9ziAM6acGPyEoPyR1ZKoj8bbqHTJ71qmjigssSWdFY7w6tHuXPjzWDf2nUPG4CfFWAHiApLmvUg",
  "key37": "4DpPHYhuHukW8Gs5QF4nJBVUNusXLQazf4F6fgFGYYWWMxGKvtbWgRVwSLvpSVck8mhYG8NSNKZfne1mN167KeHw",
  "key38": "555X1EF1Mj1w3Td3j2hF2t1KZt2YMNgZa1DcVKNqxYDRFAMamjRwHhkp8BYWuKVRunEYUURFwbSSxmuwYskt82sQ",
  "key39": "3Mq1yJ2sY7yWjviXH3YRwNXorDC1QoAxuRF6kDr9cxbYhnXrw9voLz29VdQ5KRJWh51iyEUraofcVTF18wVRxX67",
  "key40": "5YAjLczwgBxS1oW6oMw4dLERgrAKEbXz3NeDPxZqeiqTbiitGCnwAATW2sxECfFhn7ta7jg8ePXbFxrH8JUXyfGT",
  "key41": "jaNwzgGat85sahXixpm1MSmNC7TJeB1ifG46LaTxH85f5yEPWxGu8pUmLkj5xptqhXHPxdszXgxDgNa7Fcx6K1S",
  "key42": "3r5RrZkKZjhvYp1C2MsQh1vfxGAoFM2F7UyYKsQmB1jVKeMmtG9haWz1FeakbKBxpFAQvPZzR6dQ2Nmp3rZsW7qd",
  "key43": "EAY9Awg5yYnCWtmkZAtKYuKK6yDPo6fxmTRCn9D85dY5DVoMUwdmru45SR5DCgk7AVzGd4pmqrqBoxnRthGakj2",
  "key44": "3sfc2H6KkNUXeRPFSqEmtECMoQNeDueLGsPLodBu8i9t8bsBK6rnZW4M5gUcxvnHuJhzxeguBe8pZoWQu2oTxgmk",
  "key45": "2RXswottw3Tc9MBNL8N6G6b3KNFDJKuRMokpn9n5fQwBmcLnLaocXEbBhhisecuMJsZETyPhkyYNcVB7sunYS6tj",
  "key46": "3s73hngcAYpv6oZSxUeQaSoEq87p7YvL6nGMnMUh9L9y6aAygvLhMNT4bNseM7KVoi1YKYoDbQig2tP5YudUWk2E",
  "key47": "2CbbCqQ2a4xnQWHGV8CWXHXjXr4Y1x2MmtgEdH3CQngJZqM2c4Jx2ije7FLg4Re9B2QwxKWfAiDT74bZVR4nTSKm",
  "key48": "4hvJ5qpgSZjKN2jC2AEGdZqSZPg9k32MzAfd25MGN6uLzF7qFnYfvyAVJe8J6KYgEkG73gpBL223CLf64DjteRuS"
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
