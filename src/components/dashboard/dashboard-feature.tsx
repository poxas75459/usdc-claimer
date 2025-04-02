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
    "3hVUpCwSVdzE7tQ7gxjEp33DLCApN4x58ay1PEJuVn4JC9uhC5h3CYJBcAUUULTSWgC1qt1ABFWFENZrHwqgwXni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tSK6vpzrFCR4C2dRRU3wWPevaKH2C3HruKT4VvK7sCPGwESG1zQmZg93wrgGfxEYXfwvvRzzBTUpGDgApPSe1EJ",
  "key1": "3dKeeZQmwHDtss37PWGC8HyEr4uJYD8EbSpX3BEpgfEckg7V6DEyU31KDFa8qgZFHDkgvEEQSWVxshBr8fi6okQh",
  "key2": "s9SSb8LrHxdHw2TXXhT8fMWfHrVeQMr4RxwpDTgJv1qP11VP37KTvP2RMCZLW5vzgP7y3sP6dzoveHnNVds9euT",
  "key3": "4kpuLABTuSp5wpUr6aWBJeBj94KpraHQH6okCi5kyBmLT4iLkjsEuJ6ce71opyfvNQTnrtDPcSCpMKieYoQtn9jZ",
  "key4": "dVrw9vAdhLVDe9GdpBQKHe55zDt5Jvs5MhHExgyZZagtxT2zyzQ6TcaJToEsPz6N9VjwZCBr13arSv769YLttdq",
  "key5": "EpBvoKup2dunbtT3p5D98gBBmaMPoyWqA8zYtscWEWZ7cV7bh3jzqEc8mdwcZuQWYpBQrbSKVRjjFYP1na1pTdz",
  "key6": "629g51Lk1CWJoCK7vg1PWFHFVmY2HWiwMoCgtA6cMD171DGrHgt69rzLQbEDFkAykpSDqumkRRJoU6ueD8qs1PVr",
  "key7": "5Ms8r1U7Mko7HC53y3aiaeEPhj9Zq7oFb2aNPrTcKqMu4nnTvepiLYSAWShYymyF67MZYzvxN47tMBvuhYqWgisC",
  "key8": "3yMauPf3ctrTBgpLcAcvHqNoSqw7anDE5peMtBevcgE8uBrZYo3oJP6XNJRqBNZVvKd73naqc6mDzwqJpT9L164e",
  "key9": "2dfvrWbz26gKykHDCLBLPy6EzvC6uL4K7QA2wQfZeoDVD7TV8JumupraBtsgypt4WTALfusBBjnCR9hGhJspmDpY",
  "key10": "RvRCpkegNuaZrnV43dfd2C7H4CMTXnWxQ4obPFig9HS4DyscinAfJbxDKQZaR7m3LAbRPoivYQsaCHh6nHNFox2",
  "key11": "5tAdTnT6rKv6CzuNE4ThwnBhJYy56oBsz3GLK69EGjPa2jQdsGqxSkXmSHNfwvkUH8XeEkXbt2XCLvktrNwKPa5U",
  "key12": "7NmCSy9kZNGMeCqybPjcukB1gmqA2xdamHm6Wjae3Mz7kn6P42a2kE9hj8wAoL6mQMBXMxfTbZWbVMixxrq6yBo",
  "key13": "5MUU3NPngGU973yifrSCaftFBzvynRaqVX7TcBt1vV3CGRFoqhhZry8ZiAsXeHB2y14W2DqUJofK9qTtmHyHdcgR",
  "key14": "2cQEGzZbcmpRQaNCohkYDPmsPsLW2EUgEjvqPMqbpbC6o4GHmdfqH2jMo6o2Sgtct66J3VUbFPytDXhyCpEAtphd",
  "key15": "5wmRsDRYnZ4NidcZpbq3fBETRHApbnbVKieN64YFtXguJpybjaivZtfCjkw8a9pw4QaFsxeY2iarXU5NPRMnufCB",
  "key16": "49Q7WgPbjvQdS1RtsGLtqiE9vXM8VpwHNKVavrbjFTgwFNFKbCu4TbyYzAvCexcJ53vyK2NBdDEQDgPLGvQWKGVU",
  "key17": "2HmFDAcw9579RiyBhDLuGakBJCf6gRDohthquqtKxDdqbunJbZBY9hr1GHAkvQtxCkBmE2txsQdE7pEzozxAiQQp",
  "key18": "3EEtEFz4UFhA6awQa8AUca3hWeT14Axe3B4SphLwpwRrvVzYgByUNyWKx4qZsdjuY2LTmQibErGNXtSzbWZCtQet",
  "key19": "34nC21Tq8f69anWaHyTkbT1P8ehkY3J2J9CBg4aDUyW86J826RFheQoLtdK9jARvmSheb2zbdyGYHXKtT1Ebs6h1",
  "key20": "5YmsaeaPN3uEDd58T6WJd5JRfE6AKkfgw9W5ZkpxT7o9R2LjK7MbV5v9cVFtr4rw2th1BFakvzxHZiroADS7CUN2",
  "key21": "5m6YDVhwWthfXfWHas2maqYWc4u4iRabB9CDGpCaJe5PbvkwrXNNmwFy5BahA4eRHDfXJ49z6QtGmDem1ykJvSco",
  "key22": "2Utp8hazWeqr9mVGpq9cFoCBPvWPFvQ8psrMkpp3ssTHAPy7Sq323HSBtd4QSUeNsrKoBtMSoiXknBtfMoJijwFz",
  "key23": "2vFbsYvkAmxX6svSLoiWjYNJM6wVjC6mPjP9CQH6aKNPbtiSXoN3E4zam2AjFK3vaiWLZ1ourPxR3nSo5RX8ayBe",
  "key24": "4o1taqQ198JHthtPQY7DbFJHkoEy5fFWi7Uuv9FTCkBtHud1bU8JrJqjkhkW59HaFYJBez4rEecTdyTYCukCALyp",
  "key25": "2xxoW4mAgGsXY3jN1cN27P6HvNmyEVGgoKFEjvNyCpRLfiEweVuCu59pTAbFtbx1VXwr3L4jsMTeahErNrEVuWqq",
  "key26": "2EeRhoGBNzLDCXeUDC9UGrTocXrMUXvNu8obfdn7kXHYyvK6n3CCAnNApJrPsmSBd1Zxe7QzQwQFXYN9TjMcu2p5",
  "key27": "268vmp98iwhz9uZAz69E2QTr5UpzxKP1iPHxrSwH2pbnazP9bWwMeiCnoBexJGEcv83Tz9s36HTMCKaKFK2rk9cA",
  "key28": "3Sb8qqnPSj2XPUvYFan9NL6cskd3PERfVz64iirpSEFrJN2KR743nFoszMRRDps2WmwJwBdJpbUjddiikES8LoVH",
  "key29": "iSuK6NqHZ9dGfmBkP94poqNCT4A8sfbRVLAajFpupaEXCFzCy9ZVCgeraAXbenXd8bVShgiA2Lb71t4RVN1HqGh",
  "key30": "5LviYHoicTNuT3V4FG1kLXJhj4pTY6HTSVVQcTdjyKkG38v4RTEXWGDDt9dqp4XWW71QWzDuNDDSkkRwPCyFBPmP",
  "key31": "ovYHjpK45mpEPru5gNdUVuRYeytc95khnvFvxyFuPS5cXCmTXqZpaRtrzyjoSRK1bkizGQKnAY5EKNM1KbUaWtq",
  "key32": "2jV7nH1yxAt5CMvR5RHSnmynFh2PJtgkRLfeKFJ3QQ1MmGWpbTUM2GduW6mVbDsSgAg9fEWY4uxPq6CrwbfRLVkZ",
  "key33": "3M4NJMTcTdCCrbxMos45FnzEAnshGB4v8B7XAeC4ESG6k8MB3VyzhijAV2UNRcc8LeoH3aeiKZiwYAFvqvXmkCdp",
  "key34": "4pXRrb1j3mtc7vtRQTeWTtwEuxG1pt3Sx7oJ4pKobbtAZC7eYga1cxgpGbt4QHszSX8xyoWAroQA13E2ci5frFPs",
  "key35": "5ZhFYt7TzLggnRdUGMcipqQ72B5pKaQXCG9U3QcniLVPXtrfvBmjDqjVDvb1GFVSQCAD7otYWZZX4hJGReXU3Kjz",
  "key36": "2QiWBuCV4ekV7xHHuRUYRQs28Z48DcEfc9cjt7Ezz8Vs74m9THEHmCJndpHeyZMei4DR2FrLxx6CXGqVocspxXM3",
  "key37": "4byMeM9dWLAtAXSqg8pMufUBsGEVSXL7NaZ69ynKPvW3vG5CqCGh6KewHhMnKwZcj9xSLAYvK58P4ZFxHzfMwgDD",
  "key38": "2brU45c9fQuh1ZaYef6ciEaUBUK8i9253f1KUh3qYV6Fh6BYBWsFb569n8S5CQWSzs2oNK6KjdhmxiBeZgi1BdAn",
  "key39": "26cPxMdifbEQf3fPFA6RUK2ssuWtxtX2kLXZHP7YHGc6UrbzkAy2u5mkA2LwrwUMeECWRZZgT4ZZmCegkmiNi9jn",
  "key40": "f55DKraWRbeXGzDwNVhngANofoQNYjswyibq5huDSKVCoC3f6ZtL2aJYqFvJ8wadiDaqh4s69UkkHEy5MFpDXPe",
  "key41": "3cGC2RcBGQKH6GwpY8a7Hf8mRiPWxuo7PNAdGd5huzDvMDkFqcPgW2sNDECtYKeSqyyweWxtBaSnCHYautTzt9nw",
  "key42": "2fFRk2SEQAFzajiieZn5afB9ms36hcKmf8rJCGspzFixkMLSFPX5KrYuBqL6c98C6jkLBeZJ8qHEqzZPwmFiNX7B",
  "key43": "4xi72vBtQKVRm2o69tCMfDoHeGKUSjmezW2eNQQ9Mm8m56n85sRgDZA5GZ5Wkt38idGLW94z4SbbF7oJDe9YYhvm",
  "key44": "3Ci7A5M7WLnudyTWt1WAsPWe3deKuCfewRvs4wBv9YqU241XXaU4jEzYiwre6McYVQZUA9zjQsf2XwJy4nJk8E3r",
  "key45": "3biJLoNirZfjTabVxdUWu4VhHNT5McNU3RpKfSvfZBmnrm7SgUnAYjyHZCZQgBMbZenbwcZkFkKNpYvGw24Cj2hh",
  "key46": "4YtCfMDW9CeNc4KBGhKJEGWqJFfDqaFom9RQwXMCcVLnBbpBntpUBoVSbSGBcnxatRY7mvdTrpbY8hNGut7jD2Au",
  "key47": "h41TCpRtKYSJnvmdyCcjYyyNdgJFvq3QkPYf5cuzr4S8YiSNyui2Ma32r73xPZw3GtnepufWySwza6PAXeAL8Bj",
  "key48": "397GtDyB7Qdp7XPzSq6RVt5At7YFKdHcgjjAYRoT4dA7GTFpwaTZCUF1XSLh4YCweae127Jf2aCNsUV85ghAq3vk"
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
