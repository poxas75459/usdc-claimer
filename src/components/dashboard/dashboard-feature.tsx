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
    "36ibHpYF4itJWBGs599kgtNrjiZa9B5DFXpsPWRmno8CeXivUd53MV7ANaAoW79NV7TttVQmCVCps71g65r54zwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fz3Xa3vLghvFSiGmSCzJVFqFk7RgNbAs8qMdd9neYhkk68LkjZr4FKpjPRbMZXFUoUGF677PtGeMbYUCdJCEdJq",
  "key1": "3nRmFaVGwCfyCSb7tgmXqqmHY891aSgqiGcN6PzRWH4NjNTy8fzw74DQtV91hMwZZzTvszfuqHReWCHhHgicui59",
  "key2": "5UG2Bvs5d4AQcxSriXT9FbDBRhEv3QbaKw4JqryV7gzVvbDtYSim1FAucHaP2zd1ATmxBUguKx7mTSM9eVZE7NRH",
  "key3": "DHqZ5i19qVmPj8pRqD4Y1EX4GLLhC21phzWSmdLnDqz8Eyy9oEE3FwaQr6FeacNpfM1D2A57JcXg5nny8sgQUr7",
  "key4": "31Azg5pMwTZgsq3iqKywqZG8BbMriH3x326AZzXTMPqaDmUGKyALhGwucqg2TXBoTM1VzJ9DNXYnA7dFqyEf3dW2",
  "key5": "36Gi5CeQ6x1UY4KzSGhFBypR9tm4oSmbrpVA4J1TYsxowaMQARz9p2hNrCNh9yqwbP5ECDZcDe4Ar2AEKqZa6B5q",
  "key6": "3RPYg3L2jd9t8tgSZg153XM1yF3sQd34FXgzqQb4KNvjCXUiEtkXF84Wa7JV6DDBfkp7j8ic91bXeiSRzLTxuDuJ",
  "key7": "4gUMxhGTJMibYroaKMJopgn4doVsGarMHFWoe2X72z2cqz1X1hCezzPYn7Z4oFvsqFTKy94z6q5Nx2M1GhwxdhH6",
  "key8": "HjKCt5GQmjAeVSZuQ8AwijiTiVgV2UfzSYAYfahecZxDgFpEN7pWtrFE2rYGgGWVUAgj9qSQHmQp3HWtaJGRmt4",
  "key9": "5JX2cpiPqtzyWrZifPgm5dFSQ7jFWBz3E6wfKqzM5jxtWDPBeREvuauNk48eHtxUoAyX6hnCsaMcn13CTjhFfCZa",
  "key10": "5aCwV4cg5w2rZm9M2opDj4PnwTTSYm9Q9hP52BXqKXjbpjPkwxkFqpxhDcdWEBUvMMugGuZ8cGFXyamp7y9o2gP4",
  "key11": "5ibXGhWzjB9ZWWi15vnznp3hNw5JiXvcfNCAGY3ZfYfnQG2apGKYxd2LLA5kH2Z6vtoCf1jsW92rG8Msrang8gmq",
  "key12": "EE7Jveri7fxvTL9r4a92wK9KASHA9m6yxQHvLvnqJ1zsYR8K566eXgzhLCD2BaAJNgR5Yvd6EzTf4n3n7YQAveg",
  "key13": "3LoKpChrR3L2BCXnQdqnLARZiJRVRck2rAK3L6AMmXWHUyS7GM4naQMj8uLex1zH5GTCDhGDnkTyGfupcYsJQDRa",
  "key14": "2ZjJDp9HAuMNGiyAnfikWQ5dhuvTd9MnJXphbR9BNK4cH43yCHWfVJPn9qp6aEAxetB19K2Stv48hpkYZjmij44R",
  "key15": "3KZCHap85rFZhTthp78nq1DAyRdZTzQyZccwz7nb7xiKWq5YpRibqxrm4Sgvn7tGU1gwEXKSfcEbFut5BzLPWu48",
  "key16": "4qNjYeWjo2Jmn2a8rArqGvERb1GnaLFJxgp2nq5W4dN3MbEmWybYCfEqfzcdqzRfoDwPY8X3kaN7db8za2KoitDC",
  "key17": "1bsu5THkLK39EjhZCLg8j4tX4JY9am3dkq9z9QDzoHSB7Z71WwczJkHHzWmMGHaQUqjVwnbZivhqhJRmZiB4PSf",
  "key18": "5ikTFJZFAWhR7czp6yaEb26Yu442RtSHCMLxba14LdFMvm2tXV4N1X3h3pBcLFVAJZfgapNXUpeDrz8RwVQDz3vQ",
  "key19": "rPAYYgQPEfFP11kbMdkLN1NFjLvTYL4X2Eugqu7QNXb7W6eofTLRyyGg5dAfSpqLHkVLtxVTTa3VSrb7BTEwwHh",
  "key20": "3AiVUGQs55SMh5vVBoSbo6kakMVUhyLqJA3ZZ8jCv9LNhYNnM5CkYMvXm2GJF1B8JfVhraweNhc8xrdckbAj6LY6",
  "key21": "4Kj1jANcMa3Lt9H6heX4QYDgZWGkQsJyshLhinUiaeLxfPWNpUcMbbv4J96r1rn8yF9DciEZK3CeVr4b6Ef7Fhr2",
  "key22": "5aCP4t4B3yQsMBjaFQ3qnixF4v5JpcpzLFxk7sDFECf6HpPf6SjRBaJhjiGptFxxX7ySCjHbi1hNJZ4CbuSqhkji",
  "key23": "42hPFHaYgFiyuFYsJk8yABr6sVGN9jmN65JCk617VsVEW8C8wpFbhGQwS1MUynGbFCzpcNn8yY933hJsoQQcDf6g",
  "key24": "679nrniTeAErtTMdbqHBkKvr7jJ4TVSUtkuinGVkapBxtD5JWRu6Acg6N9KfReP1MAUYRHrz4PGcPf7DajJR12Q4",
  "key25": "65X1ftFxz1gvM92LFAsMvevM9zCqaiDFDsoK2x3HcMNT9JmfiuifrhRCwLc3Xc141uhCvrjVSMrXPVmqmgNBGsss",
  "key26": "JjhkbPSm8qYQ66Z4Q51dE2C512qG6e1sgeypz9HqwBWzTat44FNN85M4TWhuiG2J2DNzbzUdP55dZ1ZSePA9ESM",
  "key27": "23bpoce7LCVgt2FLDgwULSnwjoJ77WYVYjWJkRe6zPsU8ECnstChjJfQKNUsLA9qcetDTTJuxGUggrxqVhtBveBM",
  "key28": "3xTXuXZeQEvWXcBnbkHpe94veJwDMqi1xhAGs2VqhKcvtvRnVhuhEgUnnSshKWEcwtK1WoW1szyXj8JWHJAt1UWa",
  "key29": "4kyhj6C6UwHYYqs3FmTKopC5vkvYgCMY1mXd4ZtJjajb8W9mSWXM2UaBaY1yG9dr1qtr1LJr14NfWq8g5zMvseCp",
  "key30": "PyNKDom5YLfFgaSEtp7Jv1u4DHa86GDK5vwMFzXkL8d8yoeLj4qsand8NQQSud8QGgHfXUSzNrUqCZp5iZhfJsy",
  "key31": "4nqaviJURvTbHRe8RjGqWyJNttgPWD2Pfvgp8f8DPVj2T7s8UXSg4Wx9v5QcG85PqstFaNi94noN53q5JDyxouBt",
  "key32": "5PR5SHoUNybVcX7A4yzK8pbbBZWPUmT447TcvhxJ6D4gbZuc6jXLZPGJPJKJrnmy8dvCufTVcHYcNLNsY5e6Qf1V",
  "key33": "3CCK95xeuvyX8fgoFZtG7vXnq3UR3mcQaorAP4cQES1ijgyr3m1cCbme9cTzEChuxBDY9UmYKyn3muc4ZTNccMa3",
  "key34": "2LVVL2BSes5wzgWqugF82UvKLeZ8Qe4N8khsDxYPCVJXkHd9XMor7uP3HHHU2oAmecNo5wGE92o4FroAVqcZAtWa",
  "key35": "5VTXGqYdXGcgjmHKT8EntA3aZkpeE2V6dMTkgvRxnp7mDEN9Q4kjYSTBKieq2WFjHNp1jQ7SGUaHaZAXQnxRd9Th",
  "key36": "4Hc7zjb8zRzDxZcVsLp9RMDQDLFLuh8TuNyatDBm4NUJG5ivxRFYbyiFhZkLoqFpKqeRd73CNHWmW8mS7xP2sTQ8",
  "key37": "5sZ2krjewCs4BxMKgqvSsoWoMtr31zBURK4J6vvDvwtzwNHWYmyFYHnf3ghvvKE6yndsk8L18PQVY99qMEGd9Wfr"
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
