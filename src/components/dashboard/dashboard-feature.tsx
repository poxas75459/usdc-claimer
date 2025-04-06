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
    "3PusftJqwMDxoHsVhkoYAUJcvWDKocuSuFKaY9pKP3reb1h4HDTrSKRsDAiVt2dXttqsN23U3mxQcV5dPVHTtzVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KMaVBETDCzF8UKuMe4wnoAzUC6FcZ693FaA5ATAmewqzMmYbq4Z3NZGqaPnszxg4Db5urdr4cuKdh7SW6UAoMKx",
  "key1": "2Vd9y7c7QyY2QpkmZ4eVTPJs92NRWbPSYspKyu2cZWipaC9PXuBt1X8caUZiK4cNnAFhQL15m73tSkEuQXGPfPBN",
  "key2": "2EqJ7jqXYpYeNgLYpj5sZgABeP8uaHXFiANpJQqtPLCBC1CmFj4KLHD3QuVvfn1uPUofK7UDGAhFw151FbNomwUd",
  "key3": "3eYJon4T3frGdKfi6vA1TNWbtmufya2oP837bauNyETFBdrekesbWxWyvwzECCDjn1fH3hftvtTGkhzTCiexeWz4",
  "key4": "4gWb5mqRorK5zgP9pYxNktDKrbAMp1U5roWX6WKqBwjrwmdZo4ify5c4ndj2WL364y5818f9ZeDo26kqB71NVDam",
  "key5": "4qf5o3XVVh1FvKChktVuG37mBN6VKouniEWLGrELdGnw881HYYUCVno6Dcp5CFCZBrYTYQ3TMKHoPEnYffsCfqF1",
  "key6": "5GfBeuseFHZ2TjVXsrRt1hbdjufmg7JpxQe4S8vLup9YWphFWrT7PkVU7r5vR5bpoLG6gZ1z6X5DP3RBphiJ8fQU",
  "key7": "2RQjksmppxmbEheNehqyDPUxtu8dU7mh5rmzuHGhFWmAPgV7vV5ce5sSCFPqHZMBvjpdXFyck7n6zEYEihfuaW77",
  "key8": "4Hcs23S88cWiGDE5TrGsfm1kg8cLawypkGnAqJ4KYrcMfngXRGgc829FzWQPUwPjmEW3WEwDttz9jYtoAjzmUosz",
  "key9": "44dtUYWe5vKzXnVZjai83wrJ5mDswoLSUuSms5VLkrF6R5S5Vs3JikGWhHkFcPMcrgAhUyQxC2fnPzdK5joigU6q",
  "key10": "5PMgMTrUJQyE5NqiyhwXAWD8CVCAki7RioKEfDFShzci1W1Rjuo8m2Rx5p3Hs25VAkMeaP7uYcE2jSQm7o4KyLsQ",
  "key11": "41cYBPQ98YJNuZG9Ha2zcs8neBAiwkT7rkoNuotPRxk937WghUFDxS2aCXtEhkdfVa7u2hkhiJGcDtE3nGnhaRY7",
  "key12": "5KVv3B4KfX2Cpha6S4n7dD4P272XmKi3uHcVcQ1DkFXYzcRDyfR6JLTtJp8AeCcfAJf2cGocCMeEe1mEihNyQP9z",
  "key13": "3YYTuQUzbEgVduP21vaFAn7rhdidGywqyieLKw1hAYLPE1NjdehF2izCxkgAcVd1XZVqN16LiJBK5DWBVoBrpUPJ",
  "key14": "5Db3tW5pHu6UddKR5Vjqq3yLHeH94E2JPtmaogNYsnUnAyN88XPZEADtkwpKdWVUXRqioCPzKXGdHxn9dtRXUk5X",
  "key15": "FdddbkH9KgdZLLWP3wq3tfKNWGfoGWXKwJWCdqic3XxRiaciXgSZTwJNGznoLnTut7YMNcvi8bUUzk7ezqYp6DY",
  "key16": "5LXiGTkQJ2MBXyCZ1G1GD5Db1eYeAgDAz4MtV1hCsK5YUkbu7kdMHK1AMwEJnsq7mNhd2xfTjRJW1YtCNoL23BRJ",
  "key17": "iMBez1aK6BCcmZxSHAgxHYVaAmGfETdkQtLYmfDQ2v4qxKsP8HP8weHm56D67mkYmF77EJsdAhMWkDjZCZNFcGP",
  "key18": "3tLFcWW4AFbLtJrf1Nx1ZRBy87vhVDzfkUzKYPToFYozEGH5AHicr6p2G7tgNu94qieMgWGjktGCRLx7Cm9y6cnV",
  "key19": "pSu5qGFzuNoSKfgnEmvnvnGUnEQdWUWTxx925QaWFi6xy4g16ZErqbPqsb2XqcVhpSQ9cQNfd6snc6dvDn7qwyL",
  "key20": "itrTfeTvmkZoGoEsxc2UFgRU1X1d3JUQuzSeeieH2PVaqKgMShh82yA63h324gfCSLdramg7tFQaYhV5shtoaRH",
  "key21": "2unKrrehY5pCf6g5oH1o9QZzBcV3r1TNgDKqjPLoATv3C4nJQWAJjAbNmCtFcy1AG6NwXnp1TxadeRDfS5qzJ4Fm",
  "key22": "2jLRyuPQTmq994zMmTN9tyNPMj5VSpn8LJjPQysV94hrhp5S4MsVmAYQHkVZwKrCBcNH3J75yw8hpCzESyyxdT8U",
  "key23": "45pzSGi7RFypmjm56gUCDsc7SK5oLUtQWnauxFvRxFEGCqFFiuoqRihhRb8KoSwJH9nJ9BDACTE6K2geg6M8MeaJ",
  "key24": "2fKmrJF9xMgA9LrZRJmyWxk3maXTS6DGyHiYEtxpkStHAxKzSQoiTNjnmrBWqt9xaoXgmMaxXjVXp3Axak2vqHiM",
  "key25": "rW9FSZSWjdsDztXGrCvStEQhhtCCsLkG5vkhVucCNYnVueL3Md3fybRbe4MZE3tzMncGbX8phoq7X9e3NC7gBLT",
  "key26": "4PAHdnb5t8T2wmp4hsZwS8UuAMVUnax4SsTHjYiaBuhFfUk8JKc2wiTjtuTmkiGLfkyWXhEXCbkiTxrdtNwu29n2",
  "key27": "2hSa193gLrYWa4nMisooaWYQf2hGVD2RY25fJ5mJe6CS1AoxJKpDgWyQdC7EaZeTubULodzTzf5N4cVGk4u4DLD",
  "key28": "3Nu4KLhiau7guKweyxcJTNutDtghkEQDsEzJo6noXQLuAy6kMWGw3D4ZStNA3mz5e7uuSncRxt1JseUeJ2SQXA2H",
  "key29": "4W4D5L8bmNz5RvhH6ccT9SKXTj7ZecTk4WGbawec2ma3CiZtJ8CzjSikPhAY94E4Z7RdQ4Qk8hmXaGF72swmwzJB"
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
