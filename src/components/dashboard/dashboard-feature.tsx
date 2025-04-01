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
    "4uCFnEc54Zw1D5cNAn1SEj28rCupn2yEbm8h1QzN6GA46b9LvFM3R6MnrfQVmDbFm5GD4ySSJVRkaNNNGNbZzhMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EiikS4GTPR5c7Uvxjdd8qGKZH9KjsBFLQBf9B2cwruBRLJiXfzt4CeD4JGaLuiHRRiX5nviehXdBPhKKUXBSEkn",
  "key1": "4eAPJ8qZ9FECAr923uPmSoaqZ2e3DTMWnkxQmxEPLb9iRcRQdLzRzJNGiEh28QTeKyFyvBdzG62AVEKfuFhEUJLt",
  "key2": "WNZmAp1UKGbHVZpBeEYasXoc6C2yjJsEEGZVZBhgAnY7ra2JaTXNG9YFrXtr3Rpkho9nW3ST2RvgRB8vrjLfWMY",
  "key3": "mhCJossq4Z7AA1GHAw6ZDshY6smxYkjxjUoE4CBHCM2uy4hVtyYVm1yVCkDQT2aAAFwkRTvpeuxRRVh5ZFndfaP",
  "key4": "5M4ELC4cxrftuEta6WmQmWRpkiPCB5shpPrdDAx7Riy9C7tsjmLW8EwgZXoKtARS9giP7B58YYYw7hNS5No74T3s",
  "key5": "48tNMaCfC4GcvMJK2ocHoR39TbjdmNaUuNeyo4RkCHuWnuiYoG3doUcDvZMiY2x4q6an8fqpJiKg1JLeXLo2USKz",
  "key6": "5dmMSx3RZd5nPe7R5xvcahxDSvmBYxEa99cRfjkHbQjy9R4JVe6eU9YvSjasSviVMVNcb7NzLkWNXTiMXruvDYjY",
  "key7": "4XZzw623tw9HPB2xbyxk99FXNn9kcvbhCRL73HjNvgWT6CtC2hTSPs727iPKzymCLh2MCdNF97UY7tTKoMYm8gzy",
  "key8": "BNUnx88KHEbu8QYqJmAGBxa1v8VmAYChVZCdXPrpLLogu5Gv1WwLKkD5qRA1kWsgG5zhAuRjHTXZSvZJHSLr7xr",
  "key9": "2WTqMLrK6ALxfJRkdoiJBCpYNYXqREq1ZMp8HLYXegEPgeXzbiVTPomo54J1Ur5r9qz374at2rso28PJrRdqFap7",
  "key10": "2sBWmvpWkkQrwshCgqEm5g1G6fw5qyABRYUYrvGNebZ9RV7Cz9GAXRTeUbabt8YJXyyy2zMuohK9FSbrDzJdDLLG",
  "key11": "5gitQamX8GB7WhfZS9ryuZccfDUmfA9PHfM69Aqtf2tDP7KgdJBXtGyzygDnCfYQnpHJ9jkfjCAnNC8PVHKFsQun",
  "key12": "2XVfoAPWkkK4ShyXaC3wNfdSkgDhti7fwfTNGaJ7fVCXFNWaUN97nVx4ufjdw7MUoSK5hZkJHFp7hspmny1hsfTm",
  "key13": "6ivqAEjY2ynQNVMmUCsw7fL36UGTeZLyDpaudzCTAELt9kTNvshLxU4w7hrLTWtnfL7yDyNQbE7xrEiCNwu7HFx",
  "key14": "5zv5WHUAcDufcL7JcVyT9RJ1vMy1LmeHLTLy1eCQDRJakU6QSEp7ZySKuVTY6V49LVioXpEM1ti3SSHsgHYvfgLA",
  "key15": "4dtuf9chNNwZ8G9xLBvXTEBkHLtSsZ4GZhU2bFmRirFQtHYFGYbtqusM8quu97iZ37z7YqRTHp3VXozdtp7PPj3y",
  "key16": "LkhhdYsUhhKJN4J8zTTCyheC9vHUJ3MxCDQWipMiMvrLE3GNQvCXn2H6EPZ5UmnU9o2ySJcKA1Hj733maGwPqjq",
  "key17": "2jfAPu2sca72ZAsWzoeK8FD4mrVwkayAkNt7x2ibESaGaeQHXqU5PWHxKHdCQ9yawYwkcJCVrc326oj8kce18Mtc",
  "key18": "edxCJ7RSneDpZ6NuPjv1cH6ixHZi1cyrCr49hd7bWqKVQWtqrjwupJntrDFEsbS9H79mdBnVfgbBa6xQjKmEpEg",
  "key19": "2LdPrDX18Kntmqi6fBo95JDY8PqiqbLtYKFWvX5LoEr8HC5g2SM7gqTmYW4Yfoi7SdW8eU1CGkhprAiQ4x1gQ6qp",
  "key20": "45ZoDXpfeUdy9DCknGUzzAvV4MMp1kPoG6Qco5XfMtAmGvgdeL61y8eZvB9KW1m6qBJMY3RC6oRqANjU7qNiiVQq",
  "key21": "3WKBP3M1UVA3nVaDttVRNYq6RN9GU5UXHdSeg7qfDKJ8T2HEaKgvSzPd4RBGFiLza6s4iaSkLc9nRxCMUdvFXMwg",
  "key22": "3quswWx1S8GAgdwBAvFPm1RViZiTbdNWLuZV67mS6icgv6BkdfEk3HjiwhqGaivuJg7B8xY2yGvr1A89Ke4eibu3",
  "key23": "5A6wcoyLEFvLN9ymKmPr3ZHGwkCd1eZYh3weESQgpihfAfAYwzqQs3VEM3ULEHkWGoxz3x71nn9mmQCALMc5sWkh",
  "key24": "5mxaz5ERhXNzzZo3SypJ7G7JFDo8VM27vBZva8MvqDuEPU3zCDsv4LJyyX6QfMQxxLjTPu4ZvfiaWtf2284PKjzA",
  "key25": "3yV2TTK2n5ueVjzPYe1WmP7pe1Ei27cjYxomtyF3qGNGpc3N6V1PFa2NBrU6mb5hMRsnEQbtLc8jqwndGBgv5VZb",
  "key26": "2JRVzAiJCVpkoMZn5H6o9nQaJVXJxLTW8ej7L6duT1xVv8cWch61hZ2K1uVH9mghHx3YLN4Wze5RT1FBoPnafa7g",
  "key27": "57QGpQwh2dF7tVCCLxTfLoASW5Ui2vYmU6tWiQPqL9Ve3tJCCV2wJKBgJBR2k2AJ4AcpudhqHjT7yux3neBn84pu",
  "key28": "3N28n3ZaveH3Hn8sfP5XtXDFvY3tRztSME9Q2kMuU3iExRuMskb81f3cwMyVfUSm23pxv4GtUUNtAcigBSCsuy2d",
  "key29": "29FALjw3MATtPLCD4oC45unBKRykt9KZGUKN5DuroviVMp9KpMHsomPyULjVFAtRnjZVQB7NijeuyY3vZXEKAnoL"
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
