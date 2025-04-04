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
    "62Zm5diJxeJxx41WemMyQb6VDvkAk9uTXjjTLUMmn5TpALcuZCrfA7EXhsaBCVkcQiNhugBmzrKPLfwVHBpoiaTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eJiSoPsxqnT1hqVVAwyJHJvjkCzqjTZ5m5vhmLdKgZbboRUB8FHP6g6N1KYBvRN2ztAofKNykedrSEF5zCbdCS7",
  "key1": "5bFMfsPrHoPPTB3NTSHMooRejWDUawrdXd5huUyXvNq5E3yMZ6n1ztLrEYLpr3Hnc22gwT5QzML39db831bytGKT",
  "key2": "4jGeDGSaRUdTdcNje3xxNsuT8h1mPccNgraxSvPSBtDgdw1jiQaqmT2gWuZPzMURc3LBnsfHChVVR95HcbsWXU4z",
  "key3": "422sod1eaMsYJfhxnuERN2vLztKsFwVrti2hUg86nYFKZHZptM6bRx67B58m81Y3xDcvF5ztjgk2xV1TpDkB8yWg",
  "key4": "2z96SBzeF41vt1Ldncy9vvcDhtBx6Ant9BozuY9ghVX6ZKpJGQYsdB8t8ue5JFfpMQFqLKhakQQFgGb1hBZJNouJ",
  "key5": "21jdr4f5aJCno7K1dffXTkVHhaDEHZYCuGhRUkurAzqDDUDSUKXcXgvJcmAUXkWbZRBqgR2yisSrFXecBH5zcGZ7",
  "key6": "5MueX7RDZnLb5Qgbx2AfyDSi3brgiXetZzcSghabyMq6JQeKBUWdE2bUBUrAmU6udcyUZk5bEUsP6tLzDkDnYULA",
  "key7": "638uKwMrXydeENyf5P7CmC65EUyErzLpdscyHFog1rY1C8vV35T6AvNpAhyKgUx42USi3uMz3rSRQ48d7PfWcyWK",
  "key8": "2pbxq9ypUn2sgxsX9wVEiCKv3gvZvr272kQiqcb5oDshBpy5VVUSEG5PHvcGv63QyaoMZHPAv1tqu7iS5pMw4b91",
  "key9": "4GFzyree62zu9C2HGrdJNbELNpVd6SAVbHDX8GL1mB638yYAGsE7mRpQz67bknZQJZ5gT65nJerFVBVpD7n135H9",
  "key10": "3oCBcRQyoDofeWpyQMr4hoDHB7ouuUp3xpkpTzcCEjSZMCbKwpKdX4WLrPhAkQmUuZJFE3XMg3jpjVWVaj8yV45J",
  "key11": "2PgJjXEtU4sx9sRhaPS6yMfuQatHPTM6YBuKGLopavuH8TM6HzSCMpP2oeJqxCjZpE4sN3cAXp4ZAgvpSc675eky",
  "key12": "65JLDN5DaxTXBN3u5YXVPNDREYCA3v9FCV8BUTQ2587aXCs8sA77us3SNQDGoNUsqDr7pGtpu7H6MBKndTe4jXa6",
  "key13": "4vPRRGyKyJH8aEfEX8hFJx5UEmXDcugv54huoSP8St9K8gURbzoP3k5AqZNGnLLkeuJHZLyQ6W64PLXzKT4aVWS1",
  "key14": "2yzbixMJomLifpfRd7GorTxjVme2eCe9VaaB1dwp7NyunTYXAG1RUXii5RwtUsPPNvgTowUjgoMjV8EN23WwPwWK",
  "key15": "4qZj5WrGssRmjw94Atszu5HZtRw1CbZzmgUXD97P2JsvF7ehTSR6uXKfFC33gR3NBCNxajp7yyJSXgY6FaummWtG",
  "key16": "8NJkWHWH4UpM8FNJChUhrotBinhzrkgpZnZb6Y7Y79jiSpT3KuBptX559DpMdVTJyLKHVRMpju8kZL5rYXzLPdK",
  "key17": "3aeGKup6Xts3S58MPqesCnjdNCMTZJzPu7Lrsvq74KhhcGoYUYsw3ZQJYihzmfRnubapXXcxYgAcAsKGo1LQcZzC",
  "key18": "5pwc312bySQb2Rgmn177sA7FbsLCz7EsQ5FJb4SzkFMZ8pETewdoa5g4iPYLUkDn5Cb6383LJJkdcFXRMdNPL6HD",
  "key19": "3nszHbAycTVn4v4zft6mETAsDdMwrFcWaGfUMLuWzwBr4DQdsRkai7oXYL6G3wWZ2FhQqLngSktCQWFskD3xW9CJ",
  "key20": "CKfC3psisD84ogifMNR1b1R69Td6fvM4fiFKgHhVCSb2jQzq1zUNhdRhzUwJcjxi8NgNRB8LVQdeNUUhHkNqqkL",
  "key21": "64Bno1xUCaSaS78oQJr9STc3symyPWX4dfHU7S5nqvZnyyWXqNsbtcChyZfoAwQnFwdibaepMy7jMSFcrzEBGaRw",
  "key22": "TrG7pVbtQHcGDui5gRyfrBgNEBZB3Rz3Qn1MDvQMRCP56FC6WefCKUkF83CRWS24S4a5dak7gFFPjroDmeZAM8Y",
  "key23": "2enVxgmaYLoyDhsBXg9hZsxoRCcxSzMii54uJG2CEweHaT5AUVGW1m1ghf3miFH76WXnvSG796J5DQuVqVbKspfJ",
  "key24": "31eLoTnzouAPPfsmEbk1GaGgzLiz4P9kJ1rn7TxRdohJUBvZvfkcCNKT2ufWnASyUtFPGWdAaAyXishsfAyCPd7T",
  "key25": "5pRqP7V4eJUZjA6orv2SMKmq74ETNPGqfatD44UD9C28ZDiWet7WogCSHuEsCJtDoGiHVseCrWdikicWTt9N961R",
  "key26": "5Uc9wgaFb5QypUQ2eB1bXLwLPAoC6PThNLmorsVUPWJTwBcP87DeJaMkviRSkHdv2DoNSXuMzpmd8fRzQaWyqimD",
  "key27": "2KnyteYTancYavUMWg1ryJqcmXUJfpmMeSYEDXkypAAXn24RST2cz1k3NUyWnjVuULRiaofWjHjdrN8aFpDgoKpW",
  "key28": "3SLvyeVgBeEZbMtVrTbHETt3qvfGSXZaGEYteMHApotgzUv14wbMf2VgA1Vkvx8q3CzUz9JgAu5ttRvguw3gkXhG"
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
