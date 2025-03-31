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
    "2hs7KqazdzGkLeoTEj68yVKUqQ1e2ME4GDuxqjp9PEWx2ccZBAqmgVrA2cPb4h8j1hZTQtjbH9D5mBCJTVYVbqSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YhU15Ez55sxVcTa4M4hmyzm3iSpfMpyJwqdammuAgHpAaGrpaNDNUoBxF9GQCRFNuugpzszLfx5PkBm5YyUn7ZE",
  "key1": "3bjoK6wXFkx6duZkyHiQtHmr7oRHU2Dwsi4dJM6aAPtLF1d16mZw4HWXMMYh8bNiVrUS8wDP6EjPsgPowfw3zUEA",
  "key2": "2wGXJkdfPHhnnS8bJNmyFuQdJ4kR93L3YhCqe3SA9xkr567N7RBEU8t3GAybw6aoqo4AhEWAmnLtuFPCvx4qkZ3s",
  "key3": "4UbqwxYfb9NcDiDvs17tRd7FY6KvetV3isxP3EJxacoQpHzn7842Fn1eNBwGj5PX7SNCdAuT1tTHdX8V67ADkjRA",
  "key4": "3B1w1LyThRzu3xmUSbYgBpqwHZMZDnBawgzgQHAmK6y5jjcEyQuYMf9H5dx7L3oFsmZ66j7nX5Gjru6B3siUuTpX",
  "key5": "KKFkcFK9uQaLopBcELy5nHGjUT2X23uujZwSQ9uwfUk9Q6bzT4krjnzwn2ne4Boh2oUVh9DCMWbM7AGWJnXQCQn",
  "key6": "4YzpyvBT9SEq3KzJBevmrZLAPF4Zmp1EVfS299HBRvGiCTprWLaBGGuFLiLbeKqV6BDAHAeYoe9UDVvwSyb856X7",
  "key7": "24MQrd5Dwq7GbW2Nb9XqoVw5hogBiqWRBQPNYeEzUfMo11RDugqqyJBPzpPn6AKbHMozRT6z3W6K5jxShpNeFXoG",
  "key8": "2tUfBUHSgQDhabxC9QpxAtHqHPApaLZhGKRGnNuwWQWnem2MF1PSMd3Gjoo2cVETE1Vz4Nbn9mJ52Q6rcJpvHkK9",
  "key9": "3vKistNCSsVYvzUDdRTwZCdXaVGGPdnU1tDjXJqFnhaHc2bCfsgbxw171XkECq2FApB913tAYWy8aJSn1GD6Rh3h",
  "key10": "7es9FcvbZawPeR96ayecMtuqE9fMxW74gAUhJjgUNNEwVXtuUqSMA7AfhTisJhCao5g9J16j1GCsW9r46yPHHs7",
  "key11": "3URs1PqxQo8ciH7mBy6BNH8e8eVKucYi63VGw7Gbs3EBTmYnYxNErrPsqFGcEQZRwGfERszG2K3HWm5kDkmUmmiW",
  "key12": "8MsS1HM13W2GQP3TbME3fqRTk2SYkg3Pc3PzDxPfVh2XSgQ6B1KNbyUzMKaX7wbbg9Qch6MHNS1p2sgboX95STM",
  "key13": "2J6UHehqca9XEufYH3inp1HMuDVqBJhdXy4VwHeytibnHpJs2SJeZpoNEGSyCi26dGhiy9vp1K2L2D63w4puets",
  "key14": "2nfYDLxTgJGBcvGY5KjprYrFwvWM1raP34wDFRWzRq5SNZFsxp1NextAcCJgv2ryV5b86tgaEoU2JFWUnxvft4oh",
  "key15": "5YcyMRsyQGArQ5vq3ysuLeWB7nyJcuhQ1VCmHywXC7d8BHTLJNJHAmAr69xbLsK9kKHfgncP9vqBZJz4JjNbpN7n",
  "key16": "2rqrwcN8zZt2T3eYdobaGSB3MYzYCGRis3ar6abH9L1ZKLPiCqURzTuxzzxE6uFSsoBGXs2cq4Q4J61f2KheP7E6",
  "key17": "2Dcrz9CAokwDNcsnTcZpMNAK6D3qUR7H1NsazqpXtMmde1eUxueWmzZcM3HKQddLzAadLtJuuVXc2PQskP5jXMBz",
  "key18": "4BKRQ7vZRMcg6iDaGvZEwU5y5tq2PhAAF16xyw3pyFnhabB5agRqJpcho77gBG2Uq3ULkDS5mqbFPyRDy4KZa9oD",
  "key19": "ZwbgdmAVzRxMXZA8F1YthetSbaeMtdGvoUU2qbS8n7HF2ECJaPzHmdevWL68TtzFVFdBnEJyD7twAn5gTMTePHw",
  "key20": "4AY36Dr5RjF2HxjYvo6jqTuZx4pfAFsdkgYwjxtEjKKGPaMuqyr7ANLqzEVN5VRDZnvB1bnSMoskKQEqwySENuDp",
  "key21": "4upR4v41bZJ4suUGmq4Bhj8oxFvc7QU1Cvp4Hohzu2DrMpuxEA7V4dcDG7WYqZd1MBiEqa4WkZiCsUTfakkMMf6v",
  "key22": "fQC6eY1AgdZYZhb3Zy9yfNGy6ajAGgqirL8eNr679CbmPSY9YTy71FHFSEUnsAQT8o6WFbRMBz47rmqUHPxJWj5",
  "key23": "4h3iG5X4RHW9Vwkz3TURxYEsGNFqoKqEWrQ7TaEiYMq5ZWbzQ26nDRa75je2W64b75MtjU4G4mY1Rxej1uEDdLgH",
  "key24": "2HuKbEvyoCCf8zcKcNmHZk9WWViY3nxPB5s7jknXtPaNThUx3CKQRgscRjmufGeBbDRZe4XcQ7EFpt9bxNh3xAw5"
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
