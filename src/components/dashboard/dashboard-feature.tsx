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
    "4Hp1TqvTvMkGVFEg34WmbaKsvvf6Rv1TNvRwtEePpXWDW4D4pZtdgR4uSM3kD59U3NSr6sBYpvq1NGDLXnUHL2SV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WmPJ4Cevd7r2336wk9qB8UbBK99CXhB28epu7SCYzdsCNdp2M6afW951ihu6Sm5gkburCe2nkWNfKnRzq3Hcrkc",
  "key1": "2GMFLqTq3MbNtXuH6KWNVf3nnzTUiNEDpRNMCSQkhZ9HnQhephsruvSdrQPWdrFya821we3gcsfuq4isrDN169rW",
  "key2": "5LbngjZZ4QugsXa977FfNHuf6sw6FpAwAP4gnqjyHJctRZr4GxgL5uDhjoQYkj2fwLpQaGkhMs9TDmSKycvMdCP4",
  "key3": "3ZiCC7HKsnKVeE4BUwVpaHr5u4ZPeWrRw2bBpNkyhGX6ovdp9YtSQfU5VeLgWNq63H7v3dWRQRUN1eBaPTBZMEEp",
  "key4": "4Z1jVinYBRX6JgSWuGvErUgbXcaQSS1icFjHfzuMH3XX9dp2sj5N4SJbLU89qfCcPLn64wS4WWofL8DCup94bH9z",
  "key5": "2MDGiQtso16iMK8yhA9tP94BTceQkG5mZ7DNqqVREd1khTfcsXJYqnNbm74Vu9JyZRT5mEPas44FZ9wEHnDbyLGg",
  "key6": "2Tjo46vDMGE2dnXS7RmoPbjPamH84WcuWvbQyGoY79GKTiwvqzaMX591BYt12Yw2yk8hd9yCxWeyJpkTrnETAd4A",
  "key7": "3xabjwK2whN4nvvExefLcymWdja2tNZ7rySEuib87u7XZ8A6YAAVh7Kr6yWA1es1JgrN8TBtBfjLDzKnpvfawdT4",
  "key8": "5Da34kXqjTbA8rRsuJ5g6FLFzCiTyhu4CBmXkvRFy6DMiuWQT5PoNq9E2eV9PZn2kBD2wmcs7Nd23Ex7vLgPLDWi",
  "key9": "3QrTzE8Pjq6J5Txh2uci1gWJwZpEaLeTmR6A4mC5w8MBJZVCD2k8MSdcbm6BLDRkSaPxbNYwHVYrEpwkaqUiqZjS",
  "key10": "3Epee2ui7QEHv5FiyfLnYL1JueP6VSqzV3L66krFR4qU2ZS7nYjZyTza4Fcij2b6dM29TUiytSwiycG6gYM861xA",
  "key11": "211boareeGqBFMKQcp8zhpV4PLSMHgcYH9d1adiHiCtAUAd8MuNEkwmuaiRUXgKbyA1SKj81CHRwGewoyd2ToNps",
  "key12": "66PqWPQ5rAwAyG9rdTGDyN2ynExkFQoz2GdJYBU2DMusJskFDKhbdKPmgqZNyKHhPqth6s3abDvzvHNpXxpWnJU6",
  "key13": "2R7fyfcSWfrMpb1dd9BttDjfgWDHVH7qyyF1qiz6GNrtrznmmD9VcuNpbLjeD4QQcskUbc93KVLWfSxNqbc7cMeM",
  "key14": "27GhPo1hXBd42uUg7oh4jzahLFobnXsJjQWfpzgcnyjWAdZTUPWZvce7xZU83tMULWwfhYGHWLhBThoZcy1HiK2w",
  "key15": "7sWaAYPGjus8ZoARYwLfFA5MBFthJ3U2Pi6HuNTpC4zkmgNNCELAoqgzTb9BBnjPbo5c1Ca3Qj1EiCeJbqsvxaZ",
  "key16": "61PrSoDjehWrmrLZ59BVn5xu6rWYLkT5LmB8Zu5BMNbPRpag7QkhRyxeDBCLd4tfYHDvNCXK37dSKEtMUZ41tZ4j",
  "key17": "45UjfY2pRVgD5NeBZwAmryEpak9YFLEvaqFYhej3jG6EqfdZrc4TWoV69k8ftC7awRUFCbHMv2XEk3gbAPegQqZb",
  "key18": "5XFFy3WPJfa9T2Axm8vvyK3kB5wvKXtzVrine7DMZLpGhi8WPEZX2ZpEeRxYVoooUhAsVT2K1XDuw2hg4zu2kVqA",
  "key19": "NrDnq9j86Q6D1FWUhH94fJUsVWSPU2VeskouBwonagfsQjysWD2DzAmjTEggZxD6LpPBxckS4hPCTPRfdMD8H33",
  "key20": "2VHvAtjun58xJXyMshUfZGoDxWgwTSRJdBJkF1d5X6aycEUW3DppF3KbnRTXDmMRfiBNzpK2wPzZ7FDr871ZMh1s",
  "key21": "2eoX4VdzhoaoVC1ToykiemJyu6RAPkwguL1sEghV2cEBLJZiUaZrpJrFkH8QYLE96TMk1zidUxDPhoCh1fTi38sb",
  "key22": "3BMnnBeYptMGSiaZEN4HuGaN8Xjd8nb5WAEmPkwPpbmQhvUcZgu8fNrncjRJGaKZxcNzqmPLCB4WaschstfESTpZ",
  "key23": "GGiJsERn4Yc6yAeR9udpbrNBAqErQf3QG5zLdnNEgcASqPm2kpumkjPFxjE5tQbwFWeP4jrYEDwVoHP6BEKFrm7",
  "key24": "4Lbeqo8iSw9gdw5UHGQt8JHBNju752wh6Zang1QsEUrSoCrZRrHknETAqT6YWRan3qw9WNkxMPWfNr8qJqso2Q8B",
  "key25": "5Z4qxrEGS4p5MeCQ2gDVNsGLDeAvT8fTP4um83Z77Jt9xjFdBKG3vcbkpTeuq93trQb1z2APxpVzL4GcAfnKdhQx",
  "key26": "5XokjSneTsTY9aPs7v2GMMinkWY6188o6SKPbsteqHYBkSW7YnrcKtVFpjBLxuiWi4hD2trHjucmi4UF7ZSH2X9U",
  "key27": "469Cfnqagzj5cmBwzuzfZZpRpbFouqS3bgGb23gRxETCtAiHJFMzpiugnhgagsAHzWEfW3ak544DqtBNYzTVobqN",
  "key28": "2fzmfXtYpgT2HvFwA1SvYQiEsVY9TVZFXzHqcs8iFwqyfv7yoH7W5jtu3SBKgeG6WsMXkJq3bwZHeoaqqNcMn75H",
  "key29": "jYRuTN2yLcE2pT1gYFJsCXfSWjnNsTomzYk1hyAQ1CasQ9b8p6ZNDsSfTLw2ktiscqy5wRrxd8F1WZAN2YoNcix",
  "key30": "3xNNoeYmLjhQWDDgtYnxZaCL6PAqtEMf4trKexbpLZSH7iLQyweTd7U5onwfGmAwFAAfoGRpA5BarkbSP1pPuBqR",
  "key31": "232BXmnAFz26asbewoa4nzy3u6pGpwbJ3L1kANKn7eAXESxyvP8FDdTDHnyir1MwKiyx7ap1YVz8EmyEMb4ak6Tg",
  "key32": "5waWaD8m85uzkxNF3RsuCvi6Zym2qDGSFscxx2dAbijk8GvhGHhuGrihhYkceY8Wg3bU1AD329dMgFkTnqoY6moR",
  "key33": "AnzAJ5yi2jW3pQazWNgJAgjrd4kE28fkHFxeKAryi8bbX8RYiGPU9evfnnTxMj7APzHWg49cx1PR4aNK1zDxEN9",
  "key34": "4q8wR5WNvdJoNrYAmzcuTCtrfV4rFR2KcNmWA33HshEsGtFeoXw9jvJB7Pu5tVYXXbuxTmsZ2yYeh7jqFhkL4HWy",
  "key35": "L4Eiu3LhQhMmmWUuNsrrfe5rPCRt7En3ofdm1QYoKyjAKn3aXj7e5TV6uT9Let3rj15a9Aczr3knNceEYxqPTtr",
  "key36": "3omuBLCrCFE75NaVUYk7nhLDH7rhZ5M13rkNPm6PY1CQdKzARG7KfFtDrQtFZ7zuue1URa9oCiJK6duY4uHMwdp2"
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
