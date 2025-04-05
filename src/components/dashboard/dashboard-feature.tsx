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
    "3HMkDgbtLgAnTa8uDBYMewJoGRRHedD9DPcvCBnV4y4Uh3qaA8Qq1VpeKAtRj1E2v6JfkhZiFDRR4eS8T82b2zXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "575Ng5niaTd2NwwXGC2h58NQaar3hY5jwLARwRznxJnpdPWm2GSZT96aQ2hXGk789p8Cb5XLfqjrPMecjpsGKwUD",
  "key1": "jKW5xSmo6qnjAqwZjGwZq1wCWKYfwGPy74bNtr9zyg9YzHCaemA2WozPfKujne8PPCxpjDkK4P2eHKHuBbWgH8W",
  "key2": "27f8p4FtMcpUbQ4qWYGRDvBaFQ5z47P77iCaB1Bkrjy3z8hrGMZrwYUT4G4NohUsuohJdY4Brp15YBSoNjNaGBzr",
  "key3": "5mTqHAjnpfZMQ2tAq6fV1svuHeCo3zPqKBwNMeeYhLdeujW11Kt8qwahbxgzihDT4558tMz9iDWuWs8D2JZFvU1b",
  "key4": "4fq4xDDAcSEDMWa1Hj61s3qsa2kX9MStGDiaUGFXwCxCdheNMSuizUWrtgVm6LVVyySfETN5hkGskrD3vmby3Fr4",
  "key5": "3W91YqBhUmrsYwmFZp8QkabbpT44nrtetic4nCFkNQxxotJtXKfFTF9xYkjnCe72uQQDwF39FqKKUCPWhR7mzduL",
  "key6": "2A6y7UmNJPfxNmgJvKf9GaTKQQq8MKSFnQ7K5pgNNpd1NUa5jnRz1c8RA8hwwvA8546Voczz2gGppXjipUGr7TML",
  "key7": "5cxC8qW2GD4JqgzmBEjb5YZWNYMZ2qVogoUMbxg9PDnMwDdCxZVhjPyUmZEsAYL3Uoe2UYTsAG1LJs2HCodU14bx",
  "key8": "5mfHKody1Bwyvy7sYSwL5U8hckq4sCVgznj1Y2HNVhsCetRqWbQjXTkAtMUbK5cxVkNsBmURkGV6UNonFTSXUhkB",
  "key9": "3cu5sfJ3UUNn2SuT2aDS3HZDeF5jsfyV144xQAR5m9BoWU4jftwNayk9EuTj9skTjCjAsGemmeKraVz5jAA9WZ7G",
  "key10": "3Rnsif8g8y6VaJGszZPJPZ2xCYfRAcUA44NQJWATGRW1XCB3y6NAx7HSZNrGUT5aW6ihKQeBeMCK7rezqSe2Jiof",
  "key11": "CVtDZhXrmShxYvikAt8gcJ2K9zu2gqW66C9Q3hEMR3TTkMf3sLkPoDC1bDCbcZwmHLvL2A8PG6jjEJaxNqfsYz9",
  "key12": "523bRhNNr6jzAdiVYUmzZJnRLFSaicHFQy63547b6ahUMfrM85cgC3YZikcDqeY7E2e2JLJzPsk8WQfETzpzJtcA",
  "key13": "5Gd2DSAZu9u47FmehNnWqHpr8uviBoxuNopgjkeHv8h6EuhZ2VjaqRmVUNbpUwPAFuaYwL9CfLqAGF14DuoatWYk",
  "key14": "5DmKL8EwnSwMe62FgAg6dRK42XRm2WREckvgy9VBrwegiDrUnh16PAJ3mvXHwtvispXRmk8Ghrg7m6pokgcSK9EK",
  "key15": "3AvNVVzVTHUfoRzmujFTtwvmHqSq5GRtXRg8wWG686pJnXsJVZgc11i1aZmHeTGkbftB3ZTSS6KmzqCrcN7rXAK9",
  "key16": "2y5HGVMUfjYg4fYTYGQ9hXcSm5QL3Yx1GNckx6g9z9tLUWXpEekA6yvW7E9q2sSfJYdmyCdBxpP5iRTK3YYkVeP2",
  "key17": "3oRLDFUEQjm7vnyQ1Nxa3tCoTau5Mcb3Sp1ktoF3f8ywmKX9ar9y5apfjAcBDeL6XXgfcMA5mhQUaMeNTmXiKAEH",
  "key18": "5sfWPWWNj9y37oguxCSnPkUGwKvszMNdEdnYJBLCungBav9nLCqiWKTBRMCNVEYBSWaYXPGoeaA48sEqSNPyaHpV",
  "key19": "5CzZpiAd7dCRbJVYU6M1SCLdUVvzJ777tSYQccXm3Ky5YRDqYJQ4MyxuoRMCSkJ6qtSezV1B1Lf6ndALQPGWH5Mj",
  "key20": "T5mFegMvZ93meWc5e2BgT6RVyBM5uMdgEWhuBTnzVKirAYFDDrduMHVyyNoGzieatcmo9jNkbMLrUUweS3KSxL9",
  "key21": "2tcFEqAfjgS59Ma3cM4kZzL6TwpMsb9e1cCcQrDEiM6hQVT3ZdBG9C8v2ceTboKdeBfnvmcSEeUSpvm3qZKWZLgi",
  "key22": "fUzDVXrjMLpnGDp3621Yn5PH3MPDsEupD6yUR6PVEJHpUjHadha5DmTcWYRoF1BrefdX4Xqmbo88DaZS7Mkz96P",
  "key23": "kxp9XpWVsF1XQWoNEB5STAg2zgKjBUQYvjATNPLjUHwWLqm6zQZcxja5QF13dC4pDMaK1UzcBUVjan1FQS8hbGu",
  "key24": "3sbTSBCSZ5ELHeMxeXZmCy9PwJFCDrLJQ6RfyM39skuymDNSK7PcKyKZjVnajyiYdkDvxND8Ccg3SXChwL7TQCEK",
  "key25": "5kHW7MEdqgay4GYipdC4RVcYHzXYaZqaZj7MoAYCJRznV1ZLfwz17C1UJ4LNEdRSyaajfv6ekNkAXQYUug9AF6rt",
  "key26": "35RMesagyQWeqGTRQ3Yn8cMNFESggT72jSbYfW8MVAu8E7f8Ve24VJFY86WjAtjHeHsgzD5Cok2UT4t1h5Wp2C66",
  "key27": "X66eVS6qCwyPf9DywaNrw3yaD2ombUFHa33m6jXSDe8BxVSfGFe47XQsmEH8mBmq1hJPVV8LYRLQKNeJq1MCf51",
  "key28": "4zPkHmhnEvxPgRGVNE1Dt5QoxX1AEHymuvSWsYhvtLg5ZkkqEVcGKFAGMWDGs1b1RazDgGWmQz3chDA6jRVXLMcw",
  "key29": "4qS9sRTwpza7J6AJxEK1Kffkf8xhMJ7UeDngxnKjtMZx88kwN9nZDPHWxK3G195oqEU4tcy9Mm29VqLLvXMXYsgz"
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
