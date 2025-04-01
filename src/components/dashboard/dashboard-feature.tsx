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
    "ab6UNvdMf3KsaJXS8vyjcnCtD97RX6WDobxUohjj7sKBuS3wpDtQJxvB9hN4TVz91Mo87QyrgiPcgJNh8W11iec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AbpWQa4cR1xjqhebfZw5H457jmj6hMwb5YLB4H3TCYpo8njDh4YPzxzorF4jy2Wq6251ML5q7gDLSfN5Edpwz3b",
  "key1": "5ZwYkAeGb4GNiEDycz2Vt8o19nW9ue5jVXaDJd15XPZTMN2f2VN9UTHxT3ZiwUa727KHtPc1Z26b5hSKSCPMCowt",
  "key2": "4CMo82ZYrbLqtJfVP4otCfjp84noamcXQF3RJEnRYWY1c3Bzas4wdPDkS66i2jHFxRekpJ4kGR7Ljpf42SCCYzWc",
  "key3": "tK9FT1cUMWr71UHNmpbpZpm8y7r4mN59vpz8UdFerJqxygKGxvnvCKR8pHwNthRnKvzk4hiU2hN52dsZuJN2oDE",
  "key4": "tdRx3Q4EGWEU5rqx2fBh1cZAVCk7nHqHAW91ZJUKgN81CtizPCDNgTGRCsGJxUdKuopHxLvUw4WbSs823PuVz6b",
  "key5": "5U8EmqChFctsV39r6pLjiQ5kh5LxTeUde1XR85mdaGDfWsFzNz4k6zEp1qXma37PeyNLW7CPYgLsGgBqEK7f55DA",
  "key6": "HB3iZvv5mizmuPy5wS5X9u6UjdCt7dMNe2HRRG4gb7xoULzx6yJ1wWKTs66UzLAoLEsitBHM2GqpjtiFvD5Wm9f",
  "key7": "2E37Mp26kE3SJPhXN9zUfpLS53P4DH7qEdjJjHiQrNmFgzvqU1fmRmiiEnNtKYMrxoib1AiTi3ayf4YqHaGnCs6a",
  "key8": "4MzehWg6Hb3G6xk4Rma2KEmVebuDa3Aqk7QPcBqw6y9NxQZyc2dAoAzjALgbEzCXTfqwPJRsaxadWNFuBegfmXCU",
  "key9": "54dt6vqLYUfKgn1VLvYu5pUsVNJq6RJgev9oo8zE2FFfZ1VZYwdMuPfyoP9pwHqoyWq33TF1d28aizcjqJ2ZHXU5",
  "key10": "2Rhb4Qc3HNnJxoQwaUBYnwdoRouB78dAQAfMHeXbwfEkofEvQ8XaJcUFmP7WNHrdWcFq86YL9QiJvhAzenSpe6Le",
  "key11": "5FsHJQzKatDAS4kNzLYS5DFaUjduy1YKT8vmfNmqCaBhxM9uqZZZC6NEvRd2ZApZBAZargiC6xHk28Exjpyzxr6X",
  "key12": "5eDMaeJvnrWzL3sPAcHj7d8pV2qJh5zUY1EkJ6jo4eeMkTybKBj8NxWTgoG3f8y1eL69xv4wXtUMSxLsjJicP2g",
  "key13": "2PGody1dxEcAdbYv3Fdg6UgiZ8AjCMa4hs6LN6iKhFnZQHSyksSwwWStVdY1KAoAvtNdWTLG84YLtbn4J4TuhNFA",
  "key14": "4UsLSoTquaw5wywGN1E1AMUei6j7jjuKXZu63WHZVwEkvYEmuEKhaVXNdosYZQhDxsqPVDPCgvcUPgCpmN4H7cPQ",
  "key15": "3a1TDdx6TQEoQr14xFchK1CSQMCMseveTBj2a6HWmUu95Avq8ZFM7qQLL6gjhz13vTBHUE7dDSLFnfQEhYqmKnaS",
  "key16": "5UzZZzUz86Pb6ddkq8AggUaQTzhgTPY8kdHrwBDoSHuiTU4pGRQu2KZxCiHxrzHC88HKCtmtJudG2RxXETx8qeXw",
  "key17": "2M8UdQvpBTSAPMnE91pH7CMTQZ9cXQrsYgamd4bw7PvyWTj1n5oAqLFk5XqPKhk7RLMKJynv576SiQAzTwsQr7sm",
  "key18": "97T34f6QdjqcN2nsx3ESiqo91hdVh6m2t6Qw5N3qdF3rDGNUy2Q4W537ydqXPyS93gmR3BKQpy2JsPiNPfDzdnz",
  "key19": "48eWd6FWFSroNF5XWSnmu3iXU8Ch5Nc23qHVT6cghqZuN13wUtLTyH1YVnxzup6zjw5mDpxnxPUt6QnpDyRW1Wv5",
  "key20": "63g9iHgXbRAUNbzgkPBP7cu97ewKSt9cotYFsfDJVEjQYwK7mdFHhC3XfXK8FU685C9Bw824t9AiCxb3MRVvfsTJ",
  "key21": "3LNjxTMsJadeZtSbMo2eQn5r2M7hScdZLCBMVfAsUNK1xjbyESQrkVJZzEMnfGGFVAjJv312rFWzfJnetx95ZxGh",
  "key22": "1WsVmb1oFauUS9M2Dci21JskPb5ajMyeGXAaynLkJHk6yqBj6JQbfiDZRVsXJqTxqDMRkK8SF8Gk6argj5xgaCh",
  "key23": "4khQijAmgfSPbvSC2i2HsTmfzifD8Zmbboks2mtC74Q2N6kkELwDtb3koYDifXvBcQxTaducF7zsaFZFZn7SqBDk",
  "key24": "26BgzpEHzgfQbTxwqbhRNEiPweRnSb9jUe22AjP45hRR92aKfWvuRTP55BfDg8rBmzuA6iec6jnoQuvNUGwQ4Bcu",
  "key25": "5DH2mfYEx6zANQtvj84k6FKxFCxWERv3vdwP4f99XNNyQSNVsRRGg4Ly6AzS89x3S4RtjEmZrBGBWsscTut2qGh5",
  "key26": "3Xqiatz3qN3qpAW7c3u8y4cZH73D3VdSV7TYY7gmUHoH21zET66fjYsVZ348Nnwtqh5HnaWp29Z14A3J5bvdoq2s",
  "key27": "57fCm7VpQnwtvFWXsVrQ7mJQa4pqQbHwSMF4MT2QtZ53H8iiASw32pPw7zey1T3PfLvEBkeV2iz231vUoJ1ZRdU3",
  "key28": "3BHu6PCfoz3pupYRaNZC3FuNmbfBgqMC1ZmQMToWqveVakgqwscchnyvKhbx8f278gXwAqpCpUa1HzvPLBZ4cSuK",
  "key29": "2TPQq526zkVLEViU3JJGyywe4mFrtiPFwsS5WobouCqqV74ngLsh71r27BDMHzANW1tMQATPKrJASwV8mVZwzP2q",
  "key30": "4qpQ4tZgnW5kt7ByHfTG8pJE67AvcDoN3kg6Qm1Xn4yRuQdkTvVwN78WyydrLxbxaaeYRMMPkvP54ifXchywT2JY",
  "key31": "uhaAAAfdudW8KYrQJFTbgb4WqPAKGYoxDRYnKMmkd7i7ZwZwb5ZtNzyayVskdJcUa1Q8oWSHk4HsyKFpZZQN8eo",
  "key32": "5Fff3oSvSUhEXcMvfXfiJEE1J13mg2ptEMrWwvt1zrXNdaa7J4ioAhwtv2ayroD8umk24SwWBpGn1WnpPdNJXBT4",
  "key33": "44oggF3GQAJsezBLyAm92aYGGEVifRo4M7eTYbYv23Q8Cx88dJZSa3MBNUpJxi95EoUkKJUUXKkspB7yhcyXEbWr",
  "key34": "5j1w7AHhTgesWmYMF9EP8CuktK6F3utzDw21oGneNPQeUDHBP5ejenfcubr85V6NVXXv5X8S1SZNW5iguWrrC3ne",
  "key35": "2DjVNFvu1yBz7Dz8vptHBEwDpHYceC6uF8sYYmPcyTFAZz4fdbsuMrvMrjD91V7cYXWtFEDK57URjD3v4jV6harV",
  "key36": "wNoDDxvqYRTtL9B8aZt7pxW3BWpegUELt7jDMMBhDdkRei33RvoYcqFoPdSd4BPSVRjfe2e5BsAgnr2SrmDUyG8",
  "key37": "5A8Q3k2LxrbypWpychbpn7uBj8G2dpMXWLTHQy8uHnFYEaimrrqsWK5CopVejDG6sEZNNtxY5GafSVxGDDN1gzjy",
  "key38": "54yVQxBRU6gsczyaQdEFUTPiC4kyZUDwy1sr5MBZ7q7JBByzgBYFFq9DhNzzUzaQw5YLyxSYWuyCfoxVqH6jR7ec",
  "key39": "2CovVvXEXeXRSPR46uvY6i9bLRk2U8zdtekyoT4Mr2sxsjRoRabyN7Mqi5kT9gwAcdqFHeAB97HQHUu42VjCi5aT",
  "key40": "3LNx3sjSJfyzpA7aYamwVB8XuJdgyu7GYRdhjQ2Xbh1PeQiFXerqmYf4cix1f8EKyqazn4A59JeMbdAYrr9fA5p",
  "key41": "34c1JaYrpJmJJUVafM7iKsLnFULqHkQ11QfdfZ7WSSyTn44Wn4NmiV9uusRQuiTwMHpsZZYrGqNFi6VaJJH7TzBX",
  "key42": "2NQtNxzoMXhePRFsJeDdBKqRRchT4QZ5XzjFkauX6sVXTcXyHhS81Wst49KrKNQYHyGVQku3ufh7SR1zS3n2F628",
  "key43": "5KNPkL4EfLFpM4aEJYzc864n81m3zQTYJExbALDnn1KVtmxx1KArrsz3w19w6t2MzgQdoWBcNVi8jspp6jwcKzga",
  "key44": "3Fv68kUhLAFtGQUUcFpwALyX2Za56ZRanFkDQ4q1Wj9zpsETWBDeemSmQgwwbPKHw3yAFT86PqxPi2o4A3H7zUkS",
  "key45": "w5wZ6gQfvV19i4BRh1NcBABawH9ZMoiQy7wWcPttxv1LMxWhJxUdtzR4zN6mWsHHnJJuj9JqueWRM8nVQXzMF5Y",
  "key46": "2dLYVhZ5rcJ778yxXXdCUpiZw8dCxjVbb7afv51RKoYSJr8QaYiPvpKW6oE3Tu5LHHbwZbTb9p934ntH9SKdNyHC",
  "key47": "jkcEBuydKM8YHbrKhuuoWQwVhgSe2c2Vpw3xhny51nDNXh5BhnrMvTDnu2dfjHCmuyqhERu66ZaZRoCYGsT2zP3",
  "key48": "iMFNuh7jBy7xqT79KMqjrKQvr6K6haCG9qoVshGaKzTjAFrbcRuivGBL45KG7tHSZYvTekrQXeyUSaUkwtJVufE"
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
