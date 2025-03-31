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
    "39ednDpNxmD8t4RyD5fdgtUqUw5Pn8xY1acWnWeQYsNRRkxpaUMsjyCEsMTTvqPncrqw2r9BBFtfQbxdFftAMvQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qX9fMmMmjoFLiN1khJLAGXsDLs1mifHDGzF9DywGCFGiJALBonzTSfhMZbW3nWVdky1oQbJhyUfbniSWv1jjB9Y",
  "key1": "3C76p8xQqyYPuSDqLX1KuG11WwnCtmCXcZEctDyn4uwpsqrWY9o55DkXnA1Dq7kw4bgXTGoZSQvmTXeg1Jdced64",
  "key2": "3koPQxRXEi36BeG5ytq9QRrwHqXxirqE3GoPBojuniPM7yNqAPfZWGNYrJSmTVLHNe18f7LnTmXdwiVGZYdsgwqH",
  "key3": "3mDLQcfKWUMib9ZYKmodeKscTrFcSGsSB4oG71wcUB4mYdDhiYNpC1ZjgyfWScoRUbgBnkuPdJHFg7sKkKHTEfPk",
  "key4": "61DWSFmD7U3MTDehzK5qGRLWAvx8ZmDupzEjujp1WEB5ZA8V7MdkhYrZnoDakHmrkY4EpsxK5JQKQcErdKEfm6aN",
  "key5": "2Qt6BCRmy1L2YAy7V6vWVGjWeHaiVJLHtjfQ5ShoztDnzaJ6JjcwbKGTDL6gDXLgFdeJM6zR1diWyLqUrkcBU5PG",
  "key6": "UuhcyF81KgyZtt62byZmqpVrTPhx7zVWLCuY5UiybJosP4P7xvjoncwPUf6La3MoXEVoaex2vVU5ivuMbZzwaT9",
  "key7": "4f8KCkkE7f3vQ8JczsxTR6j9eukyypBEN6GQWqckUuhfNDweG1fTjguxwbeppNeqxtYoKQrsZFqeuNT4YXisa13V",
  "key8": "5DSEgD5r6qGkTvgbVvTMXfkCReqLzfYXPmbJQk6fYoKRd1HWFq2pGrn7g1LpzvjYMnWfootftWL7ygNiZLgwvpZr",
  "key9": "54ZjgcMkCc6eyFzcVV4G9QDePEtDopZi1sm4KiqjmT8r5rbUwjH9UET5bhHmka65CYhsxcZKaUFH1xSRNRPikmJk",
  "key10": "5gM1qkViKNRaJGU2Va1t1rDS4VJfAB5tV6aQST1BYtxikxRzRs6gMEuENu3Si59Z9Tc4v7K7cRk1dWbJqvuU5nDA",
  "key11": "3NxgbB7B8A1wPyCsSy9UcS5x3hGiNM4BSbutjRq7BJ5MCTnYXamXyKR9MTVGcW6wDLDBa1r3CNxVsdg8amJWXrXb",
  "key12": "5maDEa2jXuPj8gSdEezaNJuZ9uihDW6cHGu1xtAkhWTcEod4JQpUbJJofK8fx7a85pLYhXp3Hw7q6E5rESH2Jj3b",
  "key13": "5kTewCZq7X98oUNL9tyh3SvV5ruL5Vjf1h4dgwyZ2u6aAasUE7CfPjXNRvDGSkRP18XckadjE36vaGHSyHkuLKRE",
  "key14": "2Ytfsb6G9Q8rjE3s8RimiU8i3n4W7Fuu7yxcGCfHgHeBuL41tnN4GFHkNKnHpRbiDezBvA34QP1RFB24hz2gHMf5",
  "key15": "63QTSfNgnci4Pt8vTmpgksLi7sB8KeshoQ3ozXXjwqtaUUuxVDHE5SLrZn5jYBtdTV4ehBbL2wD53MaWgY846bpN",
  "key16": "4fFqEeN7p2vP6h9FAsc73bi3jbrZU6S3S1vAxtGVZqhrgy2QPRixkRvqVz3WgxAnNqXP6sgUSBzvfVE4vF6krUaV",
  "key17": "2B47KNbPGscU7q3Fz9Jcn5m8yiDSMNXPrmoGpKcZkS45Aw1ecrxnMVu4HDWu3C72mCJpQ9LodscLKqjyBszW5EJh",
  "key18": "Y6obfkV5K2YQJDEG8ReqZ7thSVxYEvWMjgDeSHQKhiFqrdf4nFNfD6Yhjdzbi7ZdV3cU2FbMHoTu8c1SZPtfuAB",
  "key19": "38uCEpKmyKrJJows22yrJjrsaonQq2N3kWUnSgEao1EtoaaKZdzhwMeTTYAZCJii8UREhmgxsNVHuGQt6t6YAReR",
  "key20": "4yxGFTp41HqBU5WFWPkD9Ac7vvDLFyze5v5pVsKUH4a59riZ2fax1zR1XbMe8Ch5VkutDLAvvsyZaijSgzeXvX5A",
  "key21": "2CwZcJEwFjTXw515m9D7gR98CjZs7tM8Cyt8ki6KTUMd3WXhKHeACmgPcEV9Zjtwjq7AsZrvgwPXKcHEPfdvXSaW",
  "key22": "22f5jw3oC2nWVwnL93mE56ajkdo3FkbUXrayMDteTDvdWBpGtLfkrENPVvo3E2HDThz2FGmRNaNA5tJJ1qut33PK",
  "key23": "5p81kW6Z1o63RpYCPiYciape5ayZcv6JJf7HNRHLhXVmWAB2faKoneBbJd9f4JNv4h7bpu6pRsNmYgNVPHw1dWk1",
  "key24": "VnuhMKuYLy2jwSx9gAdbJ1rdZuSP952uUaPZyzfGDt2FC5KoRiHcihjxEMJLN2zZUceoXUPpEowF1EYyBrs7cz7",
  "key25": "5xMmShHshkNPd8BBPgyUqfTS6TGARfnu2sT4Q1bndjfTBGRHWBXijLuU8ukt5Ryzm5mYWC416LSsCUv2uqNjZCSa",
  "key26": "4kfDt7a2kzXKCiR9XNPk9BBqtQ9am7uWNpcEZMbxtdvrzbwgFUNAH6XWs1W3Tnx6fWEEGeHLwWQFuQqtDTd7dqhs",
  "key27": "5dSPHm6hfQFRS6KyYBrem1TJa7vyoFnRjiQAam4xFaiL7KcrNErbP3Chp9GbNP5LN4nqKQhUSdsPXAnCSJEhLRmS",
  "key28": "5hT3pUr16dEo28vTabcZzAfy5cJeTWGzBQZToh8nbjbinP5WLDRdU9qFG7UY1iZcRJk6F93uYUjJbxCWUGQRsMbC",
  "key29": "5K6rvPw93NmFFvE8fYH1YWKkJimq48uouHkmj4dQSMsJVf9qrQbE8RGSwGqCi8u9GC1aoULuVJ2tAZHuxtojaDqp"
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
