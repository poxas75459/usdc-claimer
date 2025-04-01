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
    "VEZUWECHD7aUgDa7xEygxLCafNFFd6WmvngzzCBKxCzwEcXV3w6GnkWg6N86kFff1N6fr1FTNMAb685fyeAKiZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LsS6FqNL975Ma8vtRhigkvDt37TNW94VHmgU9Jw91DozsbE6xW8h82B3RTNAEGiTb4DDCYECX91uYChPBYmnZu6",
  "key1": "pf2bqJeotDcqdTJKpAURztvwLCVZrspUYpDE6KYPcfjfRqa422Yo9UPD5PnYLVGZMjwhCG2K1fKBW17GtvtHBmt",
  "key2": "4a5fVQ179gFLQUfNDs9Sv7ogsChU5KFgUKjDnCKSQFZeazsvpYdX2yHaFGBVb3hjeBTtrArWwMWypru8kY8TRXUt",
  "key3": "39hp5Lrn4MCdY2PqFzPTwtxKwT5QCNpAMoD8ynZE11pvPZoo61NYrWgmekZ6YmK3rbbEuXpAZv5jcMCx9xWDiCzr",
  "key4": "4Sn6uF1gGCqFdRfNebXCNExfWgiaJKFhGfc5cPafKv423x75uSryVEsU7VG7bXkPnPsuW2J3APp4hqzoKysE5o23",
  "key5": "3rDRsPZPLNuxhcAudGeU1KK7G91tAyHgDFgoauL7UcGDcwskvm4NdbobGB8tsMUe6MKwFb1F83T8hQySZsYV8Zu5",
  "key6": "3kvAgWSd8pemcdwCkfxXy5TXHThzvcRbSvpVFGc8UwjkZyADpCsMcKxe7VtrAtDYWXYdfuqkaPoN43y3vRNP15bA",
  "key7": "4fftHkQeKFANH6HDfFPuLXEQdGMtjmferiKzjvhassy33SSrA3gmWgRV8MuWZD2iQGYNMTaFvFc1o3T1ui2dqc42",
  "key8": "4pWB2uknbsrAJwu58nnE6TdCeoUWuEh7NFG9xFKTVn3RJVeNWsT2n5dkuD6Q9kZ6ErFuKpytKdTuRm9jmUdYExhm",
  "key9": "5DFwbg3S4aeeuJyybkdtdejSMcf7hzqWCd61zDfjp2SDdkoQeS9i945LESuLwa1jVhPNZC44UeLMqA7SruVD6nSV",
  "key10": "5PfCF2hpofVink3KBDfXfDe1fBCs2N1j1UgjZXTP1hYrvsyMTi9xvsYKEQ7bCzenP52C9UKB8q5JN7c91rG9si8M",
  "key11": "3qKDAPRzHV1gwzdNdCighKhB2z1w9XnTMajPaZwMcgFtCrAyCQaU8g2SiijeNrDtSgyN449PAAKKz458NYHhLSAN",
  "key12": "x9EkFJCFJYDHQbvw1Vq3YbEzjLXEctsk6jVNNkChgqvLJAhHiE8mUvD5sjUmyfHf4nwXPUtNiJ5PpA58tPBEFie",
  "key13": "ZZcpa9UWrUYdJkBuTcM947vHesEK1pFRdmZt1hHAjjYfn3F5fs1MHNPiMqEoH6EYZWbTq9V7XRnHxcW8Tb9Dr6r",
  "key14": "28z3toobtjrv5EiFcJBUWp1k9BZEYdpSgPRgA64dkdmLSVxwvfm175JyD5JsjuHQCRZoZfgFEn5tVPpWyvebdtVB",
  "key15": "29bZ18oYZV8U9uUPBod1eqsT8DuzLemRfAVA7uuw7teZoLUS5H186R2YDZSHGUX9sMh33u5qgNPnmW8o4S7diCYX",
  "key16": "3rx1SvKqE7hmiwkmD9oGPerUXQNbx7ryZg8278ZJsn158rtwMPVZUmwb4EZB13u7E4RN6uPvQTKwPFRiDziVbqvc",
  "key17": "5LF3J5ogsU7jwZadbPzjBjepjDtWkVxABmkKDoZBzhV9BEdFwHCG5tAxC3Ej8CJS1Wbq8e4xX1qzDuHuUVWSWfUA",
  "key18": "4hFEQMN3JaZyq78dPboF438kiodCReVQpGBzHb7BEFKYRpqYD3PAXSWx35WLLX7w42kvosM6Ed7Xonh7X2PktMDZ",
  "key19": "Y72biK7zsPqRownM4EW9W8BVLBXoJSKKz7ZkEawzx1EurFyhxbvFeXPzCE61xDeDPqqQxAQFf4JS31cs9BkwYLQ",
  "key20": "DVdxgr7PwYje2AibiQcS5zuTaPzAoomXmDy2JM5EP2ZQB6BdMp2HMByDoYNNF7t7JKnHw35gZnmxLRwGBvyh5o2",
  "key21": "4x58B1KTaQrYe7m9uXAU7k7Bx8wKMtYCwvZ93NGuPdiJQXskeifVjHZBKiDb3NYz4hL4SnHFvGR7HLLRUy4mdxwL",
  "key22": "3ScMXNcqiogPn2EmgpSj1YBvLp4i7afG1vNGvt9sgGnFJ9dn6LxjYuhA9xRa9EeHQRjJzwV7ZDDQg8T8rq68ESzg",
  "key23": "2RJxTT2Ssqeq3oppi5iCkhzrPntC8boQv3QVmCbQCCtwxx33XxSxp2HUsrwzwQHDL24bj7k9jUXVMypG8KNPhzrE",
  "key24": "32xtDbWdGG3NEyeArSwQ1b1w56TWQq4Q2ax9RjwiWqPHYYkpi5SpEMTFTbWV2fcLTd7KtNsNztU81RsAjqK9RqXe",
  "key25": "2rKEMunv27p7PBtpavWG9m97TgijQWGW4CdSH2Hg4BcrL9YfMC5nX7oxgCghFzJKirhMf6QgkCKwehbpC7kX9TVs",
  "key26": "2JJBAU4gEJgUWWZWhar8ND79S3uvtfQfvsJyfLBFPUQTFDCskJsSST4Ms3RxUWEiE1DmYsUFH2YQui9VAZUEYGPT",
  "key27": "Jpr4AGP2FAbX6YTPMFZ39gWtth3L338qSNvr7HuYWsU62wY8q3atTiCgB6h7o4cxZSeFPFpxqCmLUeCS2FueYdG",
  "key28": "3CZUk2zFheDa9xKARKtfQmAUBe9K8gLFiKNN7pM5hubRBCLjZg8X5TjqQt6bLRoqoenV5NAHAPvdgQFqUjFatofp",
  "key29": "3thDxofXHPeT68fmDLaeN9zMkSDZnhtDicEbBMo5M6mtYe9sDra1LLRY6F7Z3kQ9dybo2zSPTvABAVBdMUENxWxQ",
  "key30": "4Ck6LEn2KD5ehodhkGjW2yn1452wu75LASWpJE9zXksVtxhMGiu9JX5SQZaTnSkoXm2NXTAkErKkLbjLZV24aR6d",
  "key31": "bfb4W5AGC9Tw6vAgY85zM2gouUn25jtScVgt39WSsi5acfA2zNsDsNuwdR9JUe5BUCHPtQNVGh1GhbVH6LZyeUZ",
  "key32": "5cyUh8u3Ymm8BKQJaK9pk5MxW3svBzgeisLBnPN9LVZzAZd2mfDQHL6ehw1n7KvwpvvvG42xwFFAU4gaYHtsha5U",
  "key33": "3uqifveLQBPaNVje55NqVEHB2HDCm7QSUQccqZXYpyx6tLF6WZLJVcdJAvcAicgdyqD1xFAkq8zSUADBErjbQKgq",
  "key34": "46FQ8RUxy1mk39dESr8KAJbEarMJBCDzMro17Ymzy8ejR7TLdmxzzNRs4nB8D7v6okyffyNm5cxukStePC8q6CK7",
  "key35": "3ovLrz95R2di6ZouRxH5AgU9ueLu348dfFQoesJuduKHMY43n7bVUa7WyrrKtAqvD2gipdiBCyn1v4c2ByhA3bPq"
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
