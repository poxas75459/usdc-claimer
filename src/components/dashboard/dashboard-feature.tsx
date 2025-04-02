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
    "38xKeTH98VUayJThAFn3cBJaMuY32QFf27kyNue8NVvt5Pf4HPweFppLq3NJoZpW126TmjtvKG5Gnvwixets1g9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qEQqdF6VaAazkDGFk3j2RqxTT2rF2NjKZy8ih5CTGt8jv7H88H61oCgrzzqtqPWxtdeQjqkG1VX7W3CuXxBB72N",
  "key1": "45BzvMHcZ59J88MeTr9qzgasTaKB8tCYsV5EKAZfRZdGXUGBt7fkhhxmz28nBMscJepvywt22VQpu1T2SsQw554h",
  "key2": "5MT2CEMdto6SUvVVg5rU8sT4hkMkcNqQr5ewPeTf8dXvuTzjjkUHLHBEg5ju28sVKsifTZjKSfcNyF2U3juALhCK",
  "key3": "2SPcrhcgATa3zBJdDn979oMuyCUsfH9rDjkx861S3rk9nMmUiriWfTtrNenQVuG7SRRkF294ULNQftwHdx7t5WGK",
  "key4": "3bAg5btNcEkmGRjHaMU46kMoUYPKCnqzgCFH7PS2J8ekWbNo24RKRziouwGw6Py1hDhLMvzsLq87EgFCXtEMf6tQ",
  "key5": "3oMSMxUTurLPoUYCnSpirnUXjYnXsE5CKaFxNPyf2eUYTcA1ctmMYLR8tzMD9hEqoRoEk3X9PNG47bLGTrBxgJM2",
  "key6": "2ieKhxmpPTx14a2BFWciqnUXtXmnBmXwAhvirPSfg2NHyRpSkCx83A6qiaPsgr5cwAWKD3Q1AEA5XqX9wwou7nZD",
  "key7": "3jSpEAYGNgayYGnkDy11Ci4XH7VpeVHAs2LiucbYEjMMpuNp5dsCzSDT3ykFRFFQWpKGcSZ7Qg6MK92yrkRGYiQK",
  "key8": "2vUiTgj1ARUJLrBPxnEwMXeuPhYJVZSDkdc7FdcCLqwXEEeGR3FkJuAVae85etyFFggas8szrko5UpZcqYPj3BqA",
  "key9": "5CsxrEeTD6MoMYhrCNMiAnaFX8tEdGYL8zDzH7SY5iT2thFHYbsRqeC6ZJS938aPPrHcKKspo1s8KLaEBPY7EpMP",
  "key10": "4YAhb3pajwJthQpQHngjKLL23WzB9noTyFp8pqRL9vq4u4w8PirSkbVq1o9ceeS4jTnax2b9FgWDmYzVVEVYdY5G",
  "key11": "dT27f6VEpLF9x4hi9iFsHnHZLcztGppFatMWJcotY4jAzn45yVdRWx2L9RjenBhPMTSHKxmVjG8MSkDEvZW1Rmz",
  "key12": "4sAwJZ47sVhNccQgRSXxgaDvT3qP2P7RiPRZgwG61u8WgG2kbPGZNQsZX1sd2qTMvU8JpSbqTF5uwndrS4oMTM5k",
  "key13": "4TqtHmwKntWa1vaYiTwbx47z4xWQh8LuVF3YyCnABMbNV8zkFQSHRVzHuwj11A4TDKWbdCCSojjP6KkJjJDK3KbZ",
  "key14": "JiiSv3WjjSB9PnfytgHysYpXXjeuFweBEKmpz9p4n1mjpXEb1YNq5HXFH9qUQLtnUy6RKydLh9P8YXz73EE4nDo",
  "key15": "4Nd9irSan3YGm7mLMoDLcoMLdXv8doYT5HYP7oFWUYT8ThVQtp5tP2M5iupnKCKyvxDbrFXDki9cye7S67WSVTyp",
  "key16": "fbYzB1kEAec36DLzfiHPpTBkd2g6WscFnETJrqssTVUPFwKjnvc8UHT5x71hMMc4NNKbrFCe5FBzGqkZSvxfDkQ",
  "key17": "44qTeAW296ozFgD8vGDT7vhPexFfcvLU15QznRfvacZX89hgpMSKyMCtELpAxmXTzucLmyxrvrZpjqLhA9moUax6",
  "key18": "3fR4U8NaxhnrfXfEvqFh4p3Pat6xAYN8vVYCknL7YvfQg3myoVS1jSoikRsBw7yCQyQTkw1vKFTj14VKrSakBVcU",
  "key19": "1xd7F6Gz3Noiakhmf83TgJo9B97Vxc7dvAG4bJ87mhpXa18efHyL6KicEQmTZVNZGRQqa7qp8k8J2aZMKMD56Jx",
  "key20": "2kFnoZ3sgHujVkZGAy5d5dsRjTcCdEgFjwGYTsvrQBNiUNEPe1pWR9VnE4UWLc4MVVAuuoqw88RgSujq2hx4deD",
  "key21": "4HVrL5FBtQtmBKUuoTqTC34GBi5a3QHgq4sF2WvrLQTzUSFNMwzHecYYFq4ZC35GJrA6fVYpHrWGtHfyJEC19Eo3",
  "key22": "2NHVFuVyGUAifE32iAV7Gtd5r66mqka1cdjpnJjuvbxohs34tuhgjQKWc5NAibmne5dakSUZxy4oyeuTJFKTqDi4",
  "key23": "3HzweMxorcSfTCuHpgmmio5eTQUfk47kAPFUiKdZ1GGaN8yuXbzEuTAPwJ1ghTQ1a5aiq9prFMXenwAf3bdB3CFy",
  "key24": "oKudo1aLc5sBko2RjRWX6WmkCVPWHPFaPiaiw3P6dfJCWMv98ipvSQuk2MgnXvzhotGsofmvAoQYVcJQXWKiDnk",
  "key25": "4dNHZdSrwkBM6u4QLtFTEPLmaLHtp45a3bR4gWfhef23it2hJQjvjhT5dpVjp43YLLvTGvrDJHLH9RTvz3u5joGP",
  "key26": "5Br3EJEufDVnYXxSUb5BitbMP3Jh4v6jb3BZu4knPP9LGo6YLY6mDSJojrPRVYZ4g9roYzYeW7na4faweLQ8p4SY",
  "key27": "5QTgcwFLD5YPnJG3XJKGmnArftag9c4fzoaL68MGRdya9RkbvJ8MTANY1xj4fDaW9fBtajt8qhDqZ2eC9Er9mwGo"
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
