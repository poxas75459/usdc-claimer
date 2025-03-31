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
    "t6XaWoLCmujEzqhuqut3Dp4HGfCXy1T8rjy5jUXopiHZwLZYBtK8MwKuQLstFfEbYkCFMoNzPKRfs6w1sCdzv38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HPdqfHwVw23NT85yYUbgatPQfMc3xCQbKzzgeHr5T8JFp51k9jPem3JPGXHXUtPkLmsuV3Zg2G1iEkm81Jekk3s",
  "key1": "28UZLNwZLFf1MserhppwQpdXk5TXF1paoduu1Hrgg2W6Yn9jwCKKbLzJH4ad3hA4uVvSH4VdTTK2KXZHNqXR9HVv",
  "key2": "5QfKsHf4eZQDPSVWz2MWmL5jpDZzXkrQwkfBKK5qTbcL6JuoConVBkfnomYtkMUdb8seQv3iu29A1Yao5feWVaZF",
  "key3": "xCMPhsfFeEPy24J8WHt3cEw4bPtrzmiLFavCiUEr1PKsc8dvdEZPMK3kMacv55Cog32sB6ZUhRw9VGkQAUTKVuz",
  "key4": "3JvebUarWqc6jGyhnzT95U77GrNUNwNfG7djaZ1fY7XYSfk2FLfgQU96FZxW1YTJcp8viNmchN8NnT1z66gQe2uc",
  "key5": "425T4K3e5Uihi3ibdxobZPrrmt1ujqWm15uQdwCU7vnUdQPrz1ewcPr6BcGSBaEn4UxB7jaCNK4cBAL3Z84RBgm7",
  "key6": "4yjfzWKCUQjReweUuqSQcHVohM4E9TA8N13zjcoJ9UPTy43NNK8EQ98hcsfcr5ZK3vEHbeDb95KQcLQeantgo9vK",
  "key7": "5d48eAtNvdLnJgQnRch2aQVLYFgEEeoWy1o16C7myYwmxyixU46kBtfCfnHfMY26pbGoy5LiNDoM6VNvPYT1moUE",
  "key8": "5PsgDLwkA1vSPS93u1vYw8c2ecGffStavUPcq1Mm3nioFhvA5892dTaf5Zcc4G9bxrufAroFYS48crPfC4CwAUvc",
  "key9": "mcWtqPybwB12u2ZkDKq49xnQB7AsJmMSjdNP7F7zZZDuPPsWncQsVdUZEW9wJWbyHin5JhqwmftQQES4ktrDLpQ",
  "key10": "31SqMuPv393zWETvDkf5nKwPwnRPA61dVdV8vfeQf3HyRV6bmkR1XbfFmYULNBHRNqstihtFJmvMguXEM4VbGFrq",
  "key11": "3hb2oVaNyLfk2PSyG8HKe5RRtHTgXDvQYcEo36pTKuwz7rsSF17TjDjhvMdWQbkAc9bztgukay2WVGCqBTXuti5b",
  "key12": "wWFRUv2Apo5naQtkWJRwKHHSkPbqKHGcqtHiDXHRvfc6ZG5gxuH2rqpw2aVmDBS4K9R84WmymnLNffBkB6Cs1cj",
  "key13": "37V31z2feA2t9nbYQC5KMNghLce2XbtTXAaTPBshRUEHNqy4r6iAbgNYgbg3HH2s5hBPPpWRXXyNN7KdqqqYdCMa",
  "key14": "4Kvc3piUAekinPoUKmvSQKF6FJD8bqgbyGdymhyvkyfgiZWM1Lt3QVw4k8eB8x8XzsStxHBJuXRPeqDYB3dJH3oc",
  "key15": "5U5QLSPqDU5DmAMh1ACnkQnHwqf5L3Fpdy8bSb7eN3Y1r9XEwSiErcMKdGNsy9z1tDbBwzfxHTBgqEx8qaondNym",
  "key16": "3T3Acwh2uMjKsi6jsyLDAZCNT3rUS6BQNfZ4YVegYe2ZoYNJf3Ze8Fs4JC1dcajUFmybGrL1PuGCHYiqYyrVotrq",
  "key17": "4hKrXhzBBeNwYfhJfJ734YsA4HvrDTRY52erFvwJp95mamVwFATeGhGo8aeivKH38dE7kgHEfRWFpVTBmDyWavQ",
  "key18": "5LHcrQuRUsMPAPK2JianYa18hKRytKicZsqCcLGa56ngn1qLpzQffLVUzVBSYBpoSE5DnH1tusfDsVxubH5JQoLp",
  "key19": "4k2fiLnBfEtCwkEVQEpUkYJE6TS7X16Avv39BJ6F55sNLi2ep7NZPTTepAFcR2suBPChbcKqznNPgaHx6Ksp9YYM",
  "key20": "UVFLXf8kAiwWUmFm7UanoVg2aVNMgewhLeJvy9a3DzpgSW7GH7EJqtrZh7oAWx5RchbNiR3CkTrZ535unxcg6f2",
  "key21": "3aX8eQANPXFL4Wg9oLutJVJzFPrEsXhaid8FA1roHDEjqNkpnpYSZHaiBnsy7scePU2xVUdQ3dFaDk8o2ScAiZwA",
  "key22": "zYeggjuqahngFYeD7Hr5ZGWza1j1U7yaY2cH4fsHs1LKF6WtmuAe8JbM2f1epbNxurjbCXZfDtqKa8FgB5YRamM",
  "key23": "BcGiszXBxpnP9DwwTCPoZ6b3bDP6n2xucJbTgEfcRaeE8AnWFS9hyJWe8Pf47mL4Sn6mMrXpyKBJJmr44oUbPm5",
  "key24": "4yLJhkDLHEPSeomG1YgFoirdR99XZZ4KzUbWY3CCnqZuS9goVsH8By8FYt7Zhe3aShgfazKJMEGx2CiB7aoW2o1s",
  "key25": "4keiE9F4n6Vh1sYbpai1u3Rsyb2j2KYMfC9bu6xHM5GYJ56HRRa2bwnSmKF2A3WU5PEdgGkcKZpySUoJggiujs4E",
  "key26": "5st6uUt2cJnfCJixJyGmvzYrWwLspfBejSdVVbPTJwP7eEtYGATUm1JbzSxRWGw8pfHeRcixrqUgLp4Kg99cRjU5",
  "key27": "4y71CrSVGCxxspDtZp1avjv2ogX4RhUQvV8XvQjqyzQazUsDhgyVNnJvmYCbXYB72fi4qeoWRRTQwpM7hWsLGFHL",
  "key28": "5JyuWfs1iqmJgAJXBnwh5VyQYby2GBVStGkEw9ypBKqnvCUotN7izV4nN6owcqkQJ8YRJnaatEHvjfM5N9EWsu6K",
  "key29": "5L3UQUZZQsQUcwdquYTz6nqXc3SSbZaMBLvc4czGrnUpmvHLnVc6wSy4TgvCGHDSLeUDpUnfcJz7B5uVvo5by8w5",
  "key30": "5JmPvXrnpFfYxvURMVTKRnuoEbsduYJfeST7H9PHYxTgc2KcJg82sDiKqxGzGvJTAGR5AcZEig11butfnJFJwyFg",
  "key31": "2HrdCEnGKLyRmJkykZRddaQaXaFRPxLVChnvjYQFXGHnULiRrBZQpt7rvw1aDgZeduSjwN56qB2Ru7zM3vrZwo2q"
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
