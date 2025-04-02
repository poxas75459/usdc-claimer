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
    "5Ev4qLDQVFZqDpfawap3ct3cW8nqvTqSNEhFzvR9zSegdSRAcGjCzLHGc1b9Vj32Tj6xjUhUGUaNChAgcwmBFVrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25k59RZCVL7dKyMbXkeqzi3T5oycau7UnAwv5ocU2DMQZy7QsYERc9LE3gU47bpdAjt3TSjeKzUkAQyYrMAGtuME",
  "key1": "5DXs92kdcG5zk7maXbZNBpNxHLmPDyvGNG9ER9c5C8GHkJt2GB4rzCJrGdnbeYdaUmydzBS8XKGY2sDYiKwJ3TgD",
  "key2": "5eMUQSzkooY8hkJ8syT1Q8yz5JbTXs6ianZPFeK3NZHDeoeLMiEBxcVQjm4UFuAzu5T3rNnsrLqwCAQ2ZKuBuGiA",
  "key3": "2HErjZpoD9cmHwngQmFzF2UGXM7JsuCwz2QdBnFARXFAn7QA1SpAHVhRHg4CCJG6fdCi1oZLgt7V3jm5jvaVz7Ve",
  "key4": "5aKZNhWbyMn8yQZD6DXCxY6bqJLFRt2uUam9At8rdwK7Gig4fLEMMH1dpvTdbvUme5WqxSAT4qAUeKz2XirFizqB",
  "key5": "3BhQuTGSyciVErXQz7x47UmjwLkX8veAwUcEhePjKd8Jw29SNAAtHceUHRGV32RTkDwYXykE8PZwWQn6sVivafnP",
  "key6": "3JG3CxKcryMJhuvHHukJMBsWUDgPrEc6VUZUyDqWxk4n1hAxvactDXkkMkSzjsHroSbDkpJ7SLSbRERqSmmJrA4t",
  "key7": "t8X64Eix4GnqSag3tYaMornB7UXeB9zuM8ioQNpC11Ma6FVYWhMjraiYYf3Jis8Jacjxr1gJaPixAao8kovcVq1",
  "key8": "2FCzRgJvxH4LHSjDZbqPtWQDRitcxnmJcQjZ16fds4TVv56rX6xYTwZCXtpPyfAU1J9VBrxaEQEU1bhi7TUKF2xa",
  "key9": "kL83x9nKpFBGTiTKFffYENShR78U3JS8sJjYeXqtgADNvJ4vjncsrm1c5u9VnCH4wsLXwQG7pM1z92WvBE6TBth",
  "key10": "2b58KSuARMXT5bNhjw7MDK8w1Wp6s2EcorpD9xRSKXWVt4ineLmaMYee6qLzbAmWCHm1mPUaviYxAhdASwBDgkot",
  "key11": "3VsLVfEchBziVx6dhjmaUALV3eA3HJBeAf1JQHTtCEnryvZkWsYe3Hbeng7qX6YdEMkBuwLmbiVMshwSNVrkvhpX",
  "key12": "3jgBkBc9G35jg1tsYxMSie4L5H6m8Hn2NxaxufwGoFdxVem4iUfWTMix9PChuhhXTDnUDgwW8qn26BRBKp16zmv9",
  "key13": "5DMVFhvzXQ9YDP4nuXUCBYpeZXLURLRtGwM2tFYdoVkNH25cQoprcfMbayGVsXNzWZrTnPf2jTyuTk3BG8AT6fQz",
  "key14": "3yKn4T2CWwydoSTkPRjvA6D5Y3U27MNJbbGm2iCdFQvU5mb53Hk2SRZQVh1cfYejFQnrRGLd8yD5PfkqhXS5biwP",
  "key15": "2GA25zjMVyLBjY4GVVt55zRw3UWMEszTaRmbDRS6m4WpkxZaU8MUu5e8ab8cQDQvgTjF9pSLdVG1KyobQTecwSy3",
  "key16": "5PdNpLnMQtbYVxC5XzRnqvqR5Yu4CNK2GrqvQRQutQx9rgLQU7Wg9Zz7Dkcj5YhrG1DEWhu1p7CEnp8cqmPtfRCV",
  "key17": "aZVwBuC7MLhPviEW4VUyiQqdF64wq9AzEri6EA6Lx35uDGB6bnSVKB7RMzhxoGfmT8xa6gJbkL3SgSZgE5DN2Vx",
  "key18": "2tgbW2RqeXDhxeHSYzHnjpsA8S1SHAjQvicwm6iASVtjYxfdJRDTeSu8aJagjP6qMsAHwLARMwGRNuhXaFoonuQb",
  "key19": "561AgJwEYYdvVpv7TMKnkgDKZHLYCiHmhYhMGz4ri3Zw6mrveMXTwZmo9DKV27cRqtoBUkUwWVn2h4miurxAL4Tx",
  "key20": "29rQECktobA2U213gpaozRwCvfW5QM1CQSvbCaC9AMoxAbMj7Q2TCRfajT6bDizePYLbn3bfSVSF2QZS9G79d3YF",
  "key21": "3mMo9RdHwmUYgBVZcXAio1ZmHhrKEtHnb1fMkv38ZEJyWSK1ZN7aneFV42DC1dhEKkfr1E6jpakCPMwHMK6y3V5i",
  "key22": "3wGiuV49VTZQs9cQ8JHEbn4nU3NY3T1wTtLsfVYJxizzqe1AffVQ2no4k2sE6MbqG7PGgHcRNbSkby5JbFBrqxqj",
  "key23": "rCefALY7W6cvhz5NyQTPM5rSEJPLvXpuSiQe6v1nfCzaZ8BPHQA8rENP3RE9EB8944etykomAZy2kPvQkqn7XcW",
  "key24": "4aipexYjhHm7yJgTXnAmjk4ijuT5nZEEngAryxcDcR6Zmz5DfpwZfb4x9zG7VDe8XN3TdbQM7d9YjfEZqEZphWzs",
  "key25": "5gaoA5u8tVtpf4ApNVTfTDqn3C1m1e4WieVgQMRX6sGgJJXCTVmNqYyFnMtXQA5Z6CeCnbsYur8pUwxutraqk7n8",
  "key26": "23AxZp8TnedCxSHoF7EbRTeXLC2b8Kvy6Y7nTjuUZqytUqvG8vDFgHQtujt2DNYTiHe13MzK94BUj4siAxAbZ1C5",
  "key27": "4EdytfPFpANHB4GxBGUjxjfnKfeFd3PVZg3nZnLng57oPXzyXXp6n2UAarHq5auze7Qo41mN7fECLCyjWSQXaMmx",
  "key28": "gRykEEDDdf9EDtfaGtVRt24b7HgQUrxJwZ19b3udbuKWMYBT3GWfMK3cHs1AHespo2Mppe9pZn1i4EcqBYZ2E3B"
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
