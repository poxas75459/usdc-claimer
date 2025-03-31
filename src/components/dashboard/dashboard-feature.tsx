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
    "5TAxMgYqJYfbVt7SmHPbvh1X9SgSWumXuf7B7M5HEjRemfHhTz8FDnaYTLobXFvbTXyE3nJphuj5UM8SvvhHvn9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oUB1B9EMNH4wxmY47NSszFLmaHPkD1pepVtwJ6rci2tcc6DiWq6K2Xay4jSaaM3nQQhL3iKswxc5G6iuuoETWEc",
  "key1": "fiiLkgeRME6sDGv4bF8Z5kzDSjQg7VvaGHVv3S58TZgXvDXTrGfcbayWhnN4cTp8Pinqx7atMP9e6hQUW9GcsXq",
  "key2": "3mfuEZW5RKW4qSJ3Ki7TenC6hwNu4W7CenavHN4ZabbJHao5u9wnmvgsRkWYEgzR6pyQgL7gj1RiJymT7TzeuY6v",
  "key3": "4e6LqzBxHF8sKsRxEmUsjwvcBDWLqatyJyJZx2VrTxk4be2H2XVFRfEcDU6bv8qSKt94EcDHo4gPqfAJcu47ku8W",
  "key4": "5VddsRsZmCpEnCJDr3TYnCctaidR9nu32p7cd1k3nFwzg3mKi9a4m9snJ6KzcUzi4bBHBzvP5hBuG8GGyKvV5sWR",
  "key5": "udd4sF5pMTuJsZuhFcQ5PGcchvAR4yPgkWC9ra6JT1TQZT45MZbTcnapnPkAE7uthPQSWaRbDJ2AwMBwbKndNxP",
  "key6": "84EU6A2EdML1igMsUvPmpYh1gTUqgHw2WEqnxpdSBMsUP2LcxAmG3D27UgTeqofLTj3FwNyGB36ZZ3DqVXDRexC",
  "key7": "Tn8LTmtJLRr8zufw1ee76WjyxMnZ4FDz3cisLH6oBeDQnzMSUkewgEyUXaWRguS74JpcH7G4PNNFLaJ5uT3TQHa",
  "key8": "HpMibdjgUixwEHbxjmYVeombMLn8QNtNj3YjgpzGhhbyyHaUqr71KSUVyGAxUt61YCneLLtXkHa9qjxV5ZFBZwg",
  "key9": "3myKt6Dw1q8Ec5pZnMu2jp3NdsUXGM7jWtT1QFAeRAgXGiDMneeCVQDdmfhp5kjnqnBjT9pUVaYajpCWmfTxxi6K",
  "key10": "rynRnyZkQjcMvfzW3pQihFP4MpV7sAx6VfdtTDhrWc88rHGhrZ9Chm9XyrM4YYP2UFW99VyyWJcA1VQKVUPgAkv",
  "key11": "465XW9eHxRmFmeJqbVix7rDM74q3RUd1eJCLTuXYNYcjcUgxJTsqo56gfneUQZw2cDK17VrXrRQ2iQ7pZgbAHaUa",
  "key12": "2CCddRkNa4497Kq93vYZDGfiRzgPcR4Lv3uGfp9Cgd1CwmSo3ZtE8UsNAp3y9eTQWSPPZMpqZ5AY2kBgms3Fnzq2",
  "key13": "31HFkiMCNjNSPZLnZFFN6QRvfDLZMYGrJiU3TVaZWuUsM2yTWJ1Ee3M2xiBcn4nLHCSzXbKvKqkgRTM2doMk3i8k",
  "key14": "614rEJkjDciBPZhz3wVC6CjXMDjTF5SS8H4Xm4UiiWhveH7Cj6YSVpC97iX5VEXviGVooAC3kKNfyCvc8vr769qA",
  "key15": "QQV7hZRq2yikBwcCMtUmByaShiUuGrSppK1WsDfFAhuZgoLaXjJhVA9KbqYzFviAHj7U45BHBkwzyUmDu4z2jbU",
  "key16": "qytr38odWwECaYCxWBDoaYwHuKUee3nZsQQskzBWQw7LeXN3WWZHGifXhMUPhKhrsdQ9VJy6hwXduHxvAbu8fnU",
  "key17": "3D7ncRebkrmSQrxgned5e5WStB9E6uSzymQkTENvwa5GYBpgbGCp5FdcfiqWCMam2AWcoG5to9oFkpaBH9GDxqis",
  "key18": "4vrBgxusohdBHTPTG2R3gtrpr2bnnsNzvKqBP45HxuJRdpPFZQHws8Hb8q1ETs5oKSSJ9iTCdA368VrZcsBDkeqt",
  "key19": "2hsQGQreYNZWhooPh7Q3R1oqFUdkZCgf5ArrtASh26BctJfLpiLCaJB8pN6iGehFP9gQLtovL2J9CMB2SuGAWECz",
  "key20": "4XcKThiYt1ohiZqTMeR3awdiNePnh2VhW7LSd8XN61ZsdG8VjFy8z13p9yiyrQ4PugxWsHwWLDeV2VmaQXN8bsrX",
  "key21": "YqWpVbs31w8k7X8gu3aoC221wiC9uwwixE66adjtimzmbRjKmhfYeBUx5ktzfZxoA3ienRRaoz9FsDKe5oP9rGx",
  "key22": "4Qcakv4wJhHiRYVuiNqmJraL1A6pTSHxnziDAgAyYNGWB2piMHvd9Tg6nT35DaSZDLGs7kHi8uZcrPEjgaKvNuvz",
  "key23": "wczZnssPC94hpaYGm6BRxPPSuJnH2vYKGg2SC6icGvAPoFqBDcPRAzfZSuSn5DjdfEvLh4ZZ1wc5HbG3ukU4CHY",
  "key24": "2YTiiAwc4bxjs4pvVXAL9QN3u2zPyYBxXU2WgNfUuQXWFGpqDPhrskQJRY13ppnv5uQTeUx23wSLGpwtpjGDLKHp",
  "key25": "2WfbDbAW9k7zdHLP78XGjnzaKLGKHPE8c4E7W8Ncgrgq5z7qjWK7FedmU5RaYV8EkCzzriWCLbU3aTQ9EJSh6a2C",
  "key26": "49UvycwxXMvJE9SqFYmmZtwrF6ZUuPrNKRL3v1gSeC6Toi7p8bmuLCbaWkYj2Md4Nmc65Gowo7RMrKRcgDeCPKQd",
  "key27": "57Z5SCQph9FexinQswFEpgreUuJn9Y2P8UPz8vTij1bkjRKCuqHHMHh3goKVFXXRrKTvCmBfFUZvaxKJFmvgaKmn"
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
