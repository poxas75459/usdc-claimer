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
    "5atdS2iDn4aSu8p7ZaLnsar8RqaoW4oHMhovQC5HS4jCsbtEkCRPMqFVcXG9kgbzUWjs15VNQCCzzRX3ScJxeXdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z1yUPdpwFB7PxtCU7AenFPn7HForA5uWp4WVAD7hcnv4t3dMQvRyCJG1YGtHKR3KoyQxb2ALF9owrMfVnba4zLf",
  "key1": "5cb5xupFjyNZMAeuvfAiVr1msAhCyFeA1jtcNNP9Ht3n7TptPQcXywvQxVVCF3ChNVuvAcpXgYgVmTJvtbepaEnp",
  "key2": "YLN7QSwNQTM2GyJPhiPK7v527ecmtumw2FpYBxiiSiXX4CuGdQq65zwKbBfmuqwh9AHN2eFrFM8KKw8mzMW4Tri",
  "key3": "4piFwkaRv72v3Rckw4TdSdRhzUL4pp7ZYiZNaCEUsVP9D2Hv42gbfx3AD5UjhzeCQPMNfUHnf79c4xr7NavwhYqd",
  "key4": "28tHsqoC74MBdjpJQ8uaryxzXz73T1rNZh4rzahpskuD5WavAZUrqFYL3zYPQaoEt2tDJaLhvtnjf2idQjaWSyG4",
  "key5": "oegZREna85bR7DcvsrhWSZozToZz4nvHDqRL9xh6YWBtzehdGrsBNidWvEtpkd7kA8bxfQnqvdKefTMJP3WzPA5",
  "key6": "2VMw7DgtWRxAVePZz8byKgm7HxJ9jFYep89nJCSmp83pm6CNCo7tG5wZDRf9cAbmj7erV8dqgcPJSTfWM5M1gyWL",
  "key7": "4zWpZ21w8uHC9NnziLPjCJMjih4VBgtkbDZPumjdqPdCoY6Axsf75X23UDp22SaT6Sc9Bh9a2QpcTyUBYFTQsVBR",
  "key8": "gqKZ8P4Y9d4EJGPhcPibqAzSKycUAFi3377yt89UDGyMVf3HaG2GmcnjipA5UcwefydYyPs41TUs5fFkPnXC61Z",
  "key9": "w2jacxdaAJfey4mvtCiznRi1k1HGAjePeZhnuRztGNzHmYaWsdZZ8qvKWH7imDEFa5pDtchTXHPa41SzzePvqEu",
  "key10": "5KyBgDCAjxnWuTHikCcc1XuNkR6RDNV5ZzY2mfUAawyS9FkMDvLfPWLupRgyVkTRj2woydBwaFFpvo93jHwzkBBK",
  "key11": "2jCkyZg1mETVypiMUghHcrXwWzvVp9E7MNqybyG4pKuj43ZStGfgzt6eNSDM41EmLbiY5w48G3NUhgRqrtWnjBNs",
  "key12": "3LiqEZAfVk8SZAtsvzFysfVr5yGoXsAkczjko7pq55KmHsz89T6q2M4wgzCudkZf45JABvXQ89rvqeeGJMnEMRCN",
  "key13": "3ZyjRGAv5g4cqntbYn38fTvhWREn5DL828qfHyubF1v9WzE5Dnx4WwkSTENuADjUt1dVkZfgyoFtbeE9cxhQvsuL",
  "key14": "5cqKZ2Ti1KEjeYeL7wtH1sFeCfPW3Y2oeBPqnet1oDYUfMrSZEWGfzJfp6FYRvMo2hA3tEEiDzkJg69pEgSUbShu",
  "key15": "5yLAGJW2WEsZE4LQNJSRrp2uuxKBDi5k8poLbL757PAKLi4zjQuq1opcRV7DBvQzfxs1YjQhgxKGpnnUeEyAqPAv",
  "key16": "3LfopRtkA657HrznRfhjaswEWFy4f1ABkniWVxeiTL6WcvhPziacSzFqSuTbvezUkE5aYBC1vo5yaqCZNSnLVa78",
  "key17": "39Ka7yLn5bPH1dtY1SE914UzkaMWugx2xyB6hoJpK5mNo4SfudCE9J5VfHERWyFmMX1YvjsNYocg59YwswBdtABE",
  "key18": "51LgVqThMQiFFp5miJYJ1CU2mbXSKAwgkJSVUbfQrVnE6VUFTHXRsDQGY3Ung2fYERtRYxbLBhdueNyMRa2J2S6A",
  "key19": "57Zkrxoi5Z6bhUtuDhGXLKGhcNePYXKWvUnyv54War4s7RHpsc6NQr17bQfSAbcaoYHJ7ej6mdv3hSvJp7Y2HNYZ",
  "key20": "5xtNAqBzEqK3nBzMu54MBGdafCpAgCnC4zea3tV6oUQJNUesb5wjaQ8JsbjyoQvs6JYbNunU4W9s16vHKNZRiqs8",
  "key21": "2SKKRXKeTGPHGA1vTLdE9f985j2E51KjENtijpfnLFtQRAHw6ymZiPxtRJpaHkB1XiJhydYpAmHsZAbjR21YfvfU",
  "key22": "2PLEiL4baXast8vGNsswy9GjZ3LRWLzNfvWfQuDDR4YQwwxMVtTfnBsvBiXijCjnMZbkvCjd8Ha5sHUH2wbyL4oT",
  "key23": "56r2TGbxJPNLkC3MV4VvAMeXQX1tN9LhutiDgNccqF8wftC9LmsRFNXTFAQsYQ95U2QaRMmW5HxNU3XgtvNX5F2M",
  "key24": "66rmbnDUzMCUvQWNvwCcrL9fK137zeRzxuzFJu13LSGXSeW8pmgUBRQ816qQVhJoahTa4uFyVHtWHgGRgNDc16dQ",
  "key25": "nednvG4xpTQ1WUY859SGbFzPf1T6Me8rjfhvhfKEJ1YKnhaDSzXUiJXSwMioC3nivUG2cLaSjAa2WhtSnonWrLg",
  "key26": "4vZKj2Jcrjah637kf6dtQp3unUmEgSorDw9LkWJrsxVxScx6GS9RgFpHAydTm7PeQepXvHXvYHD3DhzqAXd9ecW9",
  "key27": "31Ez3CxS9PwcNTA32CzgVmQhmDoVdcwxFFeUrwYvMhfzTPrWfsfF45ifYBCFxHodjxo1VdmhM2rPsRJGQoGJH7eU",
  "key28": "4Tsv4bq2btjbJkL15eWY6TGwUzamqhpghEaJeKPrmZ8n8M7z4psGPfydCzndQjh7fVvHuFYUcQQQuajKQJaGi7Ga",
  "key29": "4kJGdURoWGdHsXyzv3EV2GVR2HjEVFkg61weQAX8zcAy2eFLvoh1ZLhajDyN1drEzwCcwm1887u7sqD3BXD1qJtE",
  "key30": "Ssrur1ZhPt3kwu9fTfhdewEkEJQgaMkjcKntZhtDNNbFATT6GBpZw7vvjeshuBRFhrA25Pa7TUCrNrYqMsjkP2X",
  "key31": "67FbWtdG9q1wCQfhVY5mBZEVHn8Y9HaMyRNtSS2tBRCk2qiWhSa6MgN3h1J1TaFdNiorz4LEqCYmLdwzDikXwYMz",
  "key32": "58MXZPR7Gmf9Vo4ecAcwNoiDU3KT1RW2NgNpcwsxQGSKgHoN5Ven74MaW2hF2URdEe6zRHgvHQm1PfmgcTDRJtZQ",
  "key33": "qMTAEQZ9RAFqrkYwojf4LH1phkWBtMLyGWvQh13z59deJpfHMroHX9A3iLeQB3obvRVsotmiwk65wS1BLLSrcRn",
  "key34": "2bAAYD1WdeLTg1MHjQ8YAJoiuxKLQaE5HRSWod4Rgb31gpkfK8RFZwXLGnghxMQqUqQU7dMLxYoa7RqCfpECuymr",
  "key35": "5jqjj4neaHSn8mm51HMdE43dz9gmXo7NW7c7Vx2g6CtF2QSm6pPZx5JJBZBjC8MNhE78TQyH8nULbeFQ1ZLR89R6",
  "key36": "4aPEASowuDFzUHxJyQWP4yGyVvkS7ANLJ3smDKc9WuFH6uYam4D5VK5NkQQbvyJzLjQKH7Fcf787uszWjpKD9toa",
  "key37": "4cazUamaqdMXxriV7Wk9rWSYjbcuaEDGqAA1eUP1RueBzzhFFeGwzBdPp6dVeY28fAKt94uo6zDS5rz1mVvqHhU",
  "key38": "5j7HT4mBBTeUfBkfVmsLKnNsxUa13ZAdJkuEWPgtGgnq8x4KoAZ84abYypFGQnqMEPHv2CKYcJVYko1r7Xjrt9KF"
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
