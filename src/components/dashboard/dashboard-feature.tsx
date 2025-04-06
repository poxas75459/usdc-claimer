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
    "4z6dEzJUC1fU6FyBqyZVTfSJH47j8Uoju1cuas9zThWEfGmbLfAxPu78toCaQzJxq714CVjjauouux3ztp9yjPVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wrsksHi2UgDXiXwxyArrwFo54mfu4rnu2xEgHyxCuXSs7a8DU91PFubFHbCu1njmhwLK97VEtj3xpQ2bHj9fWSx",
  "key1": "2UNFFA7MNmp1K3EH8Am218QCSz3nD7KQkaitpEJrwDN5X5ViQu6FG8RBHn9Zr2DcFJjmQhmHXAfNvKB9t9cQDtMe",
  "key2": "4juwiadWvDdEJxA7HYDXoS5SQZ4N4TYcqSwY6WGgj7ApZAqNB1a1NqjEVwpskLDhqVeohcHFdGZ7GVux3x7khHws",
  "key3": "5ymEU8PFntJtdXnnKfDyF88wXswJbFnNa7BBRYTTd7UznyJCRhGaXd9rTyAYBMk8gvpNkL8WVjSjGqvzeZN9cUF6",
  "key4": "4mgSrEc8bXC2r9NKfGcr4Ns3RjzVkEUfvoRf4qHL1re4sohp5nf4hkHSPn6NZewmnBuNuAfmg9PVqsvuCsfjPsPG",
  "key5": "56ieRAAeLdJ9RZzR5nqX9sDKLBJAxRx1d5NQN5iwxK6jdiwsvqBQhRJueB49VCxRkDhbi8r2zfW79nprYyL91c4W",
  "key6": "RdjR8PKG9bdcbK49H9PUjMpheVueaxXTsBZ56gxTpdhYW8sREDJbnispe1riqibtKa4WmuQ1v1yFy8i5nyZKNCw",
  "key7": "2LJDT75Mu4nGFqCj5mFDDUFW6XdkrmPYHxgVCPKh8NkAcqXAPPhW8jmLRfiRSqkPSwBM4xkp64MikzZkTGSiCpie",
  "key8": "HYSPxXSqbpZ8uETc66MHPwzm5hoSWJjviiEzS6bek9QYPDXQ5we5qr5GUoj4g3XfZPbzpqoVrcPY3z5x1TTVx3q",
  "key9": "gDxUXURwQotozPgn3y2icGiWcpbVNGViVZ7SiG3hGmjxh8Wg2iTnYUgfjz29B1QbUgrdAc7SCQ6FnvQVy9zFLFV",
  "key10": "3R2C8Z3muLZ2VPVKLSiUQWgVUd1ZjHkG57AcVG9v7gtHo4e1hYRr9zWy8NmUuL8bMfUvezvTAFT5YZsjV1f4CiYU",
  "key11": "5kubT4pgHnnNUnMZ7mWrwiM2WvWj9mdCPZ2gyATVQPQuyCj94ejFateNG7QZx7HRvQA8n7bNMS9nf7dHeNfFSQXb",
  "key12": "M7n7fAubMunPjDkqPbUVcXieZNddW46key3MxFtEvAztC64uhLh1YtuCDn6UnSsKQmZeyeG5FyaEywpw11ZtgHy",
  "key13": "32m6ZtqN5M3HtbpCTrx3gpTJvV1RdkfGvNs7yAg7LYuwLvP54GnknZy6jVVAksugec1HLwveMbin9bo55ShCSoxs",
  "key14": "5PwNgYyX1DJ9zaSQ65sNV756pUoA7GZu72T8gSYbQkdWGqUw9LenyNW8bdv1DsoUy893VnBUGFmF1AqLvmPvf9c9",
  "key15": "5gNwAs8kxBDpaa9ENHKgpYfzbydqCLNUHE9pCYTXjnrzSt5bq598GdG1X5a2nHtrGJB88bgjbhwM4PL71AucDaAb",
  "key16": "4S45X1U2LoMsBTfX1CkT36z9h9hv8miDaBSAf76yDWMqd2YkZNpRJozwBG3aH3tnHzPc6brpEyZsmE4DyfpEetAE",
  "key17": "VCfPsu4fiVz8gDvRgFexYfzJ8Lk3YHFAiU8Dzc5Z3g5tiiWj41cAhbLPPBcJKzmx6J5T6ppREw3nqfToDAjUfQR",
  "key18": "2XVaM7qWdawH9noF5G2aSyaWZCiH1mmnu8A5aKJ19JLSQuwWu6zLQjx6KEYRNvk5QTjLDQ9xutMWANQkp3Dffhbd",
  "key19": "4MmPowbuXdBP3dLW4duF5HjroEAbyFrEx21MLpMaCgXS4scvvVSnzWP6mCyL1oZRBQi5toxrvMXroPBC1m1gJBRb",
  "key20": "3es3Zu9RFH1P3zVzFzfDLuz7Z42QTBYgueLqjLPKkkjoNEH56RiLHvNdrDCEYQ3mPebJScmovfW8KeMoXd6aFkm6",
  "key21": "5hZ4wMc8YsR6ioC32rehr2RhvMLs5jH3HEE7Q7DV3e6XDH54QLL775wRyoEVhiT5YgL5Y6PxN4GW9hA9vJs9keQ8",
  "key22": "2KyTJsuU6xbpodvWTzXdAVd9u5n5YRNGQfHsgQp1n1UtzKxhRmmH9Tgk2QFp1DQEH4UEB7j97RR7htVZA52usKY3",
  "key23": "36Bd9LThW53wjyUaWcQ8CwJC5YT1SUsmem1YnPaaPpvY3y6WFPVq2sbL591Vw1BC97gq3iZYDdMDE7S6pVRLLPnz",
  "key24": "2e5AApY1DX3SZTSSm9T162cET9VxWGN415Z7umsmZ63mScifYvqFEfc2mXrhv5KcYFdAgKR8DF3pHBqxSfvp3V2o",
  "key25": "38FEj1cBqgutmLHWeAXc55VZ72YmpXt25uWZTCLaqdYkRP8zk99SuSvar35Tpo5MR7MF1LVXaVJep1JzmPucpmFL",
  "key26": "2ZpZ59MgxtdSsB3CkYjPxF3DhFfyvR6ipFFDGSRNk7tJngbPJBHT4g9AkMjj2Jqvg88KMcXwpgUKfqHoYETLRbD2",
  "key27": "YCiobiYb7GgHkg4NXa8XVSFeizhQ71TaQuNxpyxP7FihR9GeLE3GLxjPeU1bgpd4JSCGSv4n2iCHWWZZYwCYc9p",
  "key28": "d3V3PXpHPS8idHPWyYMP6sjZxddHHj5tNtmD6GoknUuez9eyqo4FEz4Nxp5nrFJDmB1ngcjQk2go33rsbfcH2F9",
  "key29": "4SWixJ5x4ryDy36uNayTGUpqM7phNbwtdtsmJrTTRqVfarbKncYiAtqMbx8yPrRWg6yvmmdN5Y9b8p7qJRJ6B9Cn"
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
