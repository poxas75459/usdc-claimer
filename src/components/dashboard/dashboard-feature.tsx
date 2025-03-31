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
    "SQtsHsLjMiH4ekLK57JuMfmhxqeXaRUTgTqTpRwu4wPpDpJXHZNubXkqFwTNMpnS7ifuDD2VEezmu9ew91Pg6GX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C7pSV7wuZRn3XdrwhoQ4ar3NsZ8TgGSAK5jmRSiasjDQjC63A9Bmr3AJb3F8c1VWQ5n4wxfaY91iHEo6a3cwmgP",
  "key1": "3hsGMH1umLGFBgDsDtcGkXG8HmcWmQXfB9gff1GyF18g5j5PGWWz3JX4h5WCYx2wiQwpD6RswuX4Ai23v6rJn45N",
  "key2": "64oKCar1ytMB8M9SftorvGVx5gZLhngCFTeJcPpZxBHzMsHtLyrdBEb7UwaP5KLCVXgKWYtc8fTpw72z8wguWMb",
  "key3": "3esXJDLeLJpEzNSUzvqQVMCgyao1pZhrWpojiW8iZoFTVmP6v3RajMsaRvqx3bRgcgMMVSPVUXXnfL7oeUftp7xM",
  "key4": "1uStD85H4tKV8qPJkAg3px9X6myp2ErwgijqjdLsoZv1HnLExhY5aig81LYQW35pUcrAdvV4aJRwgCf6PqXtALG",
  "key5": "52A2KEYkyHzbEQV4qm9rs39HSKcXj6QqMDSzzocNccN4ZSJtQEZQXaZqx9KEzXTfGR3VxHhT2SjGL8M3z3tDKpr",
  "key6": "5gbwuMhXjHXxDwfW2HxG47c5GGF5V8B7K7rhj2qNYwcAfWReThMGqysCRETK8HkxJiFrPLFWo42RsigVVcM2AtMc",
  "key7": "2kE1nPBc5fBtfj3RtQ2RAKqhronJECjvr7VRMpk7Rk89WhZcML2Q7UgATSpJJLqLqqmkdSQ12QductySx55xdiXG",
  "key8": "3C36Cq3qUxHtdZuzmQWHjfDZMYpiFMNFyfxu3vmS6Y8R9iDFRpg5DGoLPFdPDuDYnkrn9vFZtpv6P1Hj1awawo7S",
  "key9": "2cviPYBxQWWK9iGsnq1C5n9YTzKF1Kw2MqSpezywuiNFZ8c7E3yc2Ho1GNba3uefXrvVTV4uUnLf57y6nhFwP4oR",
  "key10": "2wxGDX5doDHxqxmfni2g5uzbtKNvEauoets7LqUpzbwAKzG8mhzjQBU2pM7srVZozcp8wgH8eF35tr2mb9RMsDhE",
  "key11": "3tAFtRyqS33QZHqMj5uAa6Lnhjx8JMidPuvKnU15NmCV7xWfj3ynzB2Bi1fYp5G6DLw9jdLiyqnQH7BYJuXH8irh",
  "key12": "3zCdPsXDwNNJCq1vu5TZKUjD6GGDRYQmg9LnhMQsndUuR5PKMwU7auUmm5BqGHsNuxVe7ZAcf7STy3syBDvCqSyF",
  "key13": "x5YmYWxeUtRhQEDgtb92jmj4MWHZ2j9h3Mk42aZiky1AGHtGpes8kteKSS6xAcLQpmhw7cbiTMMrePNBHXUfVKf",
  "key14": "RnmtUTiDxA346RrSwvxLFQUBCtThdg8WswaVwMX7G83aGUamLHiapBCd9TydYxy7F6DE4Y5Kg9fAFYP6sm8EX3s",
  "key15": "3bxVcg5jXUfRoVg4j4PVgmbDaz1VWLPyQ4fPfy8SYJho8Du8QXqP7gh3tUqoYhCRAcRq78zN2ip4rag6DBaeHkrE",
  "key16": "2EDUEbBUcdGPtSJJQNsGxctxMLrs4qu8z5CsH6AnYEUHXdw5xQd1aks46LvCJSdc9cxit4AEthh9HAhZcVHepBNx",
  "key17": "2nYGbh4Q2kqCNDTGFV1j6BusKwFdMxShxEiqNy7DZU1dR6ccf27TMmuLu9JRVHzymPizZX1t3KNuM5RBWSrmFDjh",
  "key18": "2ScWRnzseafATSmVYTwDYzXgXsk1QNaGzPGe7y8kVGvx7UYYcoLTM5D2nZVjVakheNPs1XWN9MXQ5FYdtSyM3BWt",
  "key19": "4UAb8wAcHREko5AQ3oje4FRQFoyBh1mio1193NyXMF9o1xJz3d3DGad44Vgryb96nDT5rVbWvhUAd7JMrxsY4w88",
  "key20": "2hcizzVkR8u2XpAbuAtdZiBXJESJrmWFmDhhyxUt7kRte93ESbogXkSkSgppRSuQcTKQJ5bsKcCrcy2K3ieRubtT",
  "key21": "2jpRDdMRunufdCY3wzukQhrpuZm1qkrqe6juYvxu8oYubjTEfec2E9pswySWy9fPvDKnAzZuUkeJGo7tufxJCNdK",
  "key22": "5g58kWWAuqbq5hLxW8QMKJdksUZ6gLnZ9NahspCpcvKUU4ajasHHY9UQYM9z3xaHwwGeTriqpZVDUyCLhawQMw1o",
  "key23": "3TAutpRpRETi5E11MHsBBCyoj14jS6XS9hGFjVbYpDigWTn2UnFH6w6GrHXk89P4Xth5yJZuKK9D9TXBc2uKiFfi",
  "key24": "21E3QgANguUQteShD4EwveT3zZiKcuSXB3xQuU6RV3f7D8xaxfLoLHvsPrfMR6YPCZ4xkqsAHmBhvbzv8QqsGby6"
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
