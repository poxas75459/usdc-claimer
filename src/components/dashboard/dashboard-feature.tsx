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
    "jLhw15n8frpnuLEz5ypqtjQsk8rgsTdqK881miTbP7eVtyvoWctF68UTWvhMTqmwh2kKHfoQg9pmQkRA9Rj3dqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LoPH5uQQzzxAbsKQQYHr82mNa99Dsyp364KThgX3AYQvTEhxRHeJcLsDTELemYDm7SdKgHaV7k1NnDCNpvMZZcg",
  "key1": "ttErsgvYmsMuXeuiUonz5keWzDt2fA4opHxkD4FSTJ3B9XeQmQQQbiSTqatLHCEm3EtCQAdxHnXzJjomaq12vYt",
  "key2": "42MDAzDmCNnSYT6t4VaLqenvNA8AqL1jVzVJxfpw8CjF9vcFnUWg1Hi7KjGJg2k9MEN7bTMX3q3Ptzca5ixfJ55A",
  "key3": "typqrXDN2hB56qbfLwN8VmH8M9Rem8p3MaUtEXccoTR1EvoqyeL8mLEsD8XLzqQZQkLwM71y4Q3Cn1wE3f2aA4A",
  "key4": "5v6RyG8F4z4cRVEg51zFFge8Lk9pztPRbMtbkCjFMGyBx5QH4xW4M21mKAvhFTQzD6JtAgsXmPmGyRNmTwMp9Uh1",
  "key5": "3x8kF3U6WsJ5PJvx2CkfRYrrQEnDzLipkaBogcYFDM5Ez96oQrHr7yax6ygDNH4Zr6na3bMjbWsZz84MiBpnSfbq",
  "key6": "2Y75UoNYQPVvjQxBfVmpJ46Tyx8kEqopFTn6jHY28CYZjK1FJvURZaCPsi1RjXcXZCDDw51WdVbaxPFiUaogYEgF",
  "key7": "4h22BxyNVhTarFLpkw7rvY5zW13c6pwiWycbx9JYF2tDgUmyA1kjX121211myWdvcGPXUFfFSzyZVaA69hQGQYfA",
  "key8": "2V7EptiqoBqBH2v16tWY6RCZd73LzWy32F1xZMZwNYY1DNwc2UkCwPmVtsu2QuRB5FmCpnwz4dbhkYPa8EZndR1V",
  "key9": "2ALskJatKRUiFqmV8otdKiQxXVcu1rmPAJTr474KQD5kTut8ZYoU54YsbgxzZSsmCqL8W3fvRURyAveVJJmrdNad",
  "key10": "5Qem2TY5XtP1QcRpK5PDLePH4iDBPV6GCA2NHPU9Y3tQ6MvDd96CVHyfCKiBeDTosQQGinSLXPEQ7Na4Q6tLaBV",
  "key11": "2MaBPkUZgtDY4Eve6uGEQqZgoJX1PWVkTqoZRfo7tA5WfSaoSBxuqf7aJVaVLWKpVKbzyWn2aDgjAxooTfWcqBNj",
  "key12": "3UhAfzdSALCF6i7YGJWuXbVxMR3oHW9XtJC23JHm51ZoSTh7dS5ctFEAf5PXTrQeQdB7zRpW7TrpmdxEuiS4rXfG",
  "key13": "3k2ifUTu8NrsgvSKkAVRSt3waeaXvp7qhNB6G1z4VoPzwdnB2MJkFwh2JAzxe1w7Yf9nGrppXdg1xo2seh8hUHnR",
  "key14": "DVWkX2RwJJwgQZKgAnfeHJYxg4HGfUmYR75reh9XgKhANpAWrGDWt5UJrk53VB9TZNnNxuzDyzS3tsuKA9R8QRb",
  "key15": "BmFyT8XQtYpuXHTEM1qoge7u5c69sGRH7kVyryf9Pm1atE5CxG6tVRPwFHUMXZyPFgHfcmQTHbDmKjfEn7QuX5N",
  "key16": "3Yx6wJnevBe4j8RFXgmMEQdWDAGTF7aZ2jUeAArGC1rmq2iumMy6fPA6P2mb9jXr5WBq6qiNfc555va814WqPQ7B",
  "key17": "2amMiigMrd8yeCkkfBsKsHvCEr3s7p6pgZt2o8XYMsHGrdmq3P4he4SPiXLHwxibK7FrNRdF6VRc8g65x5qTzSYG",
  "key18": "5mXmkqVyXWpwiaiHrMH5sryCa5EKHJysj2KBn2LfnqbvseHASFgN5YdZp26TjmJMwJgVGKnSRiRUmmit4NrVhXgg",
  "key19": "272pM2yj3bvfZ6G5SNngKYLFJMnv5vq4JztvLhQvNFsEab6sTfaRoF9u6zZfiT6Zz9mLvy7yiDSCszZbmHfPs84S",
  "key20": "5Hsg1G8yAqJfvvChypQ87wwCarXVDBCh5sUeAgMZaG3ex6xZqCJ7szHEipwpwwsMwwQuEbwHoKoGMZbBu6DULvY2",
  "key21": "3m1bdpBXUfJpYsMzQ6ywX491yb91XPzWsvmm9c8NZWnL5ysyz3kVTHqUEPuXsfN15nvwN24g2Qf4JCTyYnHj83ZD",
  "key22": "5WtKkr1fPJSvSn9ZmaDCXNd1zU91mgpUmhtYw91jCpCX71DGvqiUXer7trYaZDHDQEdKRNhJVPGqVYiUJgicJspx",
  "key23": "3i3sW8NnetQEKjZMZVdhnEnNAXYEMvuqxRf4qL8vg2CGTtmFuJy2LPNH7cgWLxaidhntoSTGqVXEH595TgT13W2Y",
  "key24": "3KNRhV2ivtW1DuJWZeTxbskNaDoRrJQ5L15dCeGECZ7ZDrMh7e6e9HXfz6WbQjmpxJ2Famv5ez77UhB2jwJoYLof"
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
