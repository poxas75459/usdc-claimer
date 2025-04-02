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
    "35kvTuxbmNkYdK44Zb3zkKFVjKGWTKxMj3N5qp4JpvBiU6A8Qfgn5Ktjq56Ur4riR6fkSYPsm4sHfiuSiepztci1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gYU8TMfpQR8DtuC38n3eB1JN925tSQGQ4VCRuUtSG2BVgDt7JemwTR8psMcqxG7sgCLQfBm4hnqPb8aVWqtaFJ2",
  "key1": "31yhJCjvmhSXjmS63UHnodqtmqfD7rtCvRiBZfvc8y57S6UkSqmL2Kw73MS4EjZVqPEqrA1u1vm1w31B9dsh3DzC",
  "key2": "48fxRUFCG7FWpZoSBprWedetXJhNrwGmsrMXjyazPcHBMrACQe5413dyPgJEDyftEcoNaDvXZEoDcwLeKSxrnz1Q",
  "key3": "52pHEMr6u7UPAZS5WiVxfYu9VJua2QwxgsbPUNcKQW9PKWhhT1b8KyKav7euFVCNp86UUDqPLB4iDFj5hLHXGaJu",
  "key4": "QKaTKNGSTPRLi8htmGM78KARinEnayerDoxgJwpm4qLuccdu8jkuBp5N2yvFDMMaaXTdJipkz63HePEDuo4A1DB",
  "key5": "2TiT89MBykYuNWAgHTWv9hMKHRdjX6cuhVeFpr9txHMiw7yGvBHm2z3UrotTQ9mYQDEj2Tnd2cJhYj7cfVXHpRUP",
  "key6": "pdUZUUTKKu9BF8D7wFRB2Gf5YBxSJ5dX1kauLbuE4e4J49vie7iCdtKXFRHg2oJkvDxyKXP5FgjQ8vChwb4Jnqy",
  "key7": "39qpP9cXqC6kDmTDm1kx89jGFM6EWzisBUhZhvNjWq4mC6DJW424SpfS61AUaWxF7B39jSXHEgbgTxNoubH2N6h3",
  "key8": "3gcVvymjG2GqqwdGcrVpuDkqMSVHLVniiw8HesKk6oYw36nnWtutEpfHFCrVaDNgcZBSJW83JKr8qANHrYFEmeD4",
  "key9": "4iNbSJXnvYixYBdSDBXK3XQPZPTbjNa1QKA7aUG8Wbfj1Sb4E3NfMpa7LSZnJguidDBAzdQ7ZEwsgBnpp8ma6Vi1",
  "key10": "5Ax2Ex9HKv1uViWDpMPrWKosYJgiGtHCkp4Po2pXDBgVtniYLgQMP6VSpMuhnM6p2cmXLfEneixUd2a63GjShLMP",
  "key11": "4wWDWa55Puhi2uGGQVNekZBbSnsGroHPE4WAnJ9C6YmFRPyDKi8557RAHCCdWUsAcay4zdTWgAzFrFu1apuuBz9i",
  "key12": "4okQBwhL5ToHhqV5oiH5h7mXpMDND2Fnz6XWd62o8GFoXpNp5svAxCzz5VCN95maR5jWg2DT1p5aVNw3SJPDNBQU",
  "key13": "66F55oH1H8Xj6PaknSjVYb8t3TeNcQ1xeRALWx8Fob8MHXtdqtwqCeGMTeqH3w6Dat9rpfFDwPoa49t2ENQhNR68",
  "key14": "taDmuCnyf4xhSF2MzTzTzBfpERbNejErjAoVCJZMPVTU6HGAV5dhqTepKKTPLGfL38HYPaTWs2EpFg8bxZRpQ6v",
  "key15": "5CLz1cjcigkU8yfM3SQrDTXjvp2zxGfGzXwQxq16i96jEYKfcibBNRqhasHcxaegpgYYW7tKq2ZtVscBb2p5Ld6p",
  "key16": "5HxLE4hcFeasJn3H8Zr8d8TCqUa5w173os3WdQf3SPWRxiuNcgH8e3LThB7UL8C49QxidQhZMQzm8LNzjJxjtB63",
  "key17": "UtQuKDnhdX6K4R8jvs8JaHhxpDfBbeHxp78SUBgehCvkoSMYRVaEo9XGhsQYUNHhGe3NPHC6Q8c5Jp6CAanqkLu",
  "key18": "3v1X8SpneDwA2UaBmesFvdGodPuj2pwgArvqnfy6vzSvDGfx31fhUeJEHiqvaQEHAy6uqgfE5sr2v8e8gbtsYSvP",
  "key19": "22iWZo5nxd6rVWJw3TrPySCuuTcVmtV4nZuELe8Yik1wtCC8bXXkt6BxSGCTuKtx3HrEtmctQoGGMGQ1i977FPqM",
  "key20": "2GZ8jL3CFudRnR7PJSMeaGnApSNqP6PUm73TSdtoMiNrZxzkt7vabZ8dqSPs16JWe6Lhm4ZgbmFdJMTBiPAkJEmn",
  "key21": "418ouBNPgCPMXxfFvs8G9VKinBy4SMFv4cNBpBP6PcP9fpEdWcbro9ze7F5zn6Xs9vRHmXXb9WXbMPmXrLCBz7zL",
  "key22": "52hDp3GG3HXEnYfJb8gjNJpLEH2vK8sM6fAUY7L9KqcCTtvPHFgVxR21GR7tr3XhUPAH8ahckUFrjA7ahA9U1zzL",
  "key23": "5r6KZrmqHS9BmNU3XvcUcq9qccLYmw5ipnjqqBr22P2ZC8BHW8odooSMGbawbCPDVTHHbAkE2HEHftmXin2AJcS5",
  "key24": "2CFmZgvieER556GDABXHDwKuyymYes4LoLFPnBuv3RmDERsoHATzxcdeonWx3Pi7LD2kzHXWpyzKHqkchAxmnE1C",
  "key25": "424YcoEG8qbTkMaerD2eBrQy7ijgFCZ9xvHtpH8o7PGBP7XwwgTAktSthNMJbMNitwhspGqsT46h9kpP5ccx8K5c",
  "key26": "5iSou1xc6LeZWUqRrj7y5Td5ZmubWkkVm63CUPTrcKbL6rdavFjbTMY4pqjMgM4r78QE1jHocfaMD1MTbzht9ohM",
  "key27": "4VCSTP7b8taEwH3Jb5BMN7KXVRiJRnoy8XmGJkEBt4kuocGeqoPkSPxQmG8W7jTQn2zZVYx3tq2PQptxBqkKMZQr",
  "key28": "bjJmZL7WoRtUqTxp5dEXJcXmHpWXpb4zF4WhHhSGqVDNrcu22GaUoXtimn8FiwiMc1DG8UFS2JVRQi2unGWoeSD",
  "key29": "3cH2FobT9UEHN5gukwhjMyJTjV6ZnfRWf5odFJVYbTnarp1jnThPqrfNA91e7nLE59TAZGC6TXRUHXrSfHG9wdYd",
  "key30": "3jMqVtyVQHj7SBhYpzMs4YeHSHWWjfJEVbxYPxFvrqWGa9Ew6tbW7gzmK8cNSyWg8BQbLJAuPCJ7hxTF3MSiesNt",
  "key31": "2uq2YTYG7vkjNtGC34qwmZixw2v6zYBuA4NrUR1fQisfizPrDP9xGVV9DuoWhVUg2L2EYBTabBdyAGv56abWH64y",
  "key32": "2U6PqyvPbikroQFDhf3oypQzBvYbZ3BnfcYeJyzaYo5KKZFj2cTyKTkVD7rqZ8ZA2pBULLGCGQy2iWcn9tvekNw",
  "key33": "31WiZ5y8YCzExkP8CXQYaDeaxxbPq2aWBgRjDfacs93KcWstsxWYpX4n8CpjqxhZ5YKkEH8N57o2QPBoEPFNbG3Z",
  "key34": "NJv1tcdtXEUCK3EK7JtgWSNjg99GXX31B4HpQjzQctJDTC77QBND6hgHfBiTMAEsxAPJp8nzCYANF3nu3XydagY",
  "key35": "4rVSjKbova2HBauW6Yyjuq84w1s7PzVf783VwKMTFNnsHJ8XpZkhULQdN5Y1XKnMfyJxwsBzhi8KzH4wjY7puSmh",
  "key36": "3bVBw5JBsASDqCXCPj7wZcStpH1Jso6LeifmSkq2jWo1Mm7cf2scg7yJ8GM6EacEHJAWG28ULTxtPncNLa2pEQSp",
  "key37": "Yo459ZgJwetqoGieqKasJthP636J8UxsuSdyabwaTNtMQFLLUZhFpw7uTSqVU1haXKcAzbPfCaAZzRdccpt4WMg",
  "key38": "4LNgzJV1cxs1eLyuToK2dF2EZX4XvVSwmSv84auoAviz2M3kXNxtC4gq491yDfcg6dykZoXUtjjwTDiXfjGP5hgj",
  "key39": "DPVEohWrs5DpjBXX1zS21BRqte7mpFxegd6FKC1qhJRUNJXrvbW6bFZXANuM9fYVpWCcsf588MjqpN1KRKqXuxg",
  "key40": "3PJsTVjEAVqCTTmsbgavMCRLoayba6WgV4eSc6NbXghNo4raiRiUAqrqsyC3M36ahLNSVRX7ZYNbfrEQavpECKwq",
  "key41": "8Fe46wSZWbzEwX9L1ajqyyWKAsMErAiWWPwVvodNjSGy5B9BFqHiPUag9wUHafux3k1iJbrYoiddELkVNeZYtki",
  "key42": "nJHALV8A6Xk2wMN26ycW52FtRnuq1HNkYSuNkj3ux8qTLVBzQaVVcFzCfoVukAz4WH8QKq3WmGE1YxShNwz8quE",
  "key43": "2S4LgaTqyQByJ2jenhYc91xTEe8iAdYF4aSbNxUrUVkUS4sLMY5CSkwBq81NyunGeLWycqz4x9zsW81qtYK9j8R1",
  "key44": "5JUKRypNcysjm7rrcoqdg2NzzWAQ5Zq8uVi3XdZt5EWCtU5KgQvzCvWjHDSNU5HykTpk9z5GjNeC5ZgbBS7v5y53",
  "key45": "BwxvQZEpVjPRspqUsgj1a1sGn1PJQtA4AJxwGQb98wFsbR1KKMwU7ygzPQ6jcswTSCVSqCsQESwwRSv4CW645uq"
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
