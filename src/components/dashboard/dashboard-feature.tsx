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
    "4KbuSQTbcv5WXa8oFXjkrHct2yeSrurHuX3QD24a8BuW5W1CQa9oHqbrRtBshzsb9PDCcC8MWqw7Dp3brZUQSrFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cWhawXae3iAwzzc5BkqpsAxvQWHVKjBXwpm1B83mb68kvm4wZUWn8iXU711qzFVd44FQWzQguLbnynMagQvsmQo",
  "key1": "GCNzYaRMjBk7jYqvBZCv8jrCbHTGXSNQ9eoZZwJEuyT4Cyybn3jVS1GoLwDGFhCniLDibSbEthcqS5s4ZDBqM9S",
  "key2": "3zfcgsrHnWHnAY3nCbg1xDLrXdRmi1V8nHQdamAEKVioNJUAc1w7ryNPF5FW3VTVdMgfFNssdbHymezsjaWW7F7h",
  "key3": "4WF79GkGueGQi78ahvAVzT8GtKJEpezt9aPz7BoFAjjbFL2k1armbcSrrv7PRQMfz7LJQ2Gh1xN89ZoDRGprZx4P",
  "key4": "46jkCpGEiCsfKs1oJxCauCHkkrp44R6D6kQsPszuRA1eXE4Qvb6QFeAPH6MPyGjAkEwHgC1x6hM1ubfsQ9L4YY7i",
  "key5": "5jcZTmvDiLeG2UNgTop7g7jauU76wBhkHYDSPfo9VNvcUEiK3SgnNZ61bbXiJbKZ5uynjKwUPySAtij4TM7qxCoX",
  "key6": "3i9maRJtsSa47rZrw7w8kRGex96ikfrx1Q984edF67nc6yWja57BaJ1dYbGeRRCnvifdRGXfBiBihNwn1R8FcA6w",
  "key7": "5Y6qLEoqAwKgHe4JaPwi7iQ3Bg6dEJMAP2nF9jzqVMSvYx83nQk2WEsi3UD87NeADc3AELmcded3VQpwPCdq7Pz1",
  "key8": "F5uA3v57TMbqiRwQtr784MMcosPeR8KtaTbwEveieAfUfYrVCU6VfJQbLMG3fKQ9YxmqCxHk2BVtP89QHXAin1i",
  "key9": "3hsEE95LryggwwATWWkS9mdziQa5ynqHg99GbqFsPiCr4aD29LMa6njXqTCeAruSeKZc8tseiLAjaunc6SpjLx7Z",
  "key10": "4BuYt5afgFxWVXB1N43Ti9UJDN3S9tczhCUnW17SUFmrcdU41Pq8GY8qbVwGLWKsn8UsDfvXwz8ux3HVfokasVmG",
  "key11": "4qBwN54gkVys46qJVsz36XEscDQ3459NV5bBAybgPogqDhnp4XZfnrJGzqxHS8CFVPwSQLjKprUC2GAmdY3cNSKv",
  "key12": "3P9jyfZtPJTeHCUHeb1rCuQEMwqUCUcf92xWeoZu32VLAhVbTsp6z95UVV5AyCcPaumHwjgAqNNbTy3CgMo8XtfK",
  "key13": "55D1rEkMmTQoAHK4opSFBZEm15X6bwnp6w7cHGF3nyrMtxaPmmM93Rm3rVEV7s473QFBNnYVmUhP66t2vxk6p8hY",
  "key14": "41pST8WvUfD57Ry9hqePuRyvAzh8neoJMmZPJttAoCJTNbwPPqjeBhs2yJS9rpbY9Ciah1PHRZaJaDKgnN9uycBD",
  "key15": "36odLTXve2h4mjau21wAs3Bb3Lg3z3hckX3Kxzr4WBrR42HEnR9zv4b2HU5J7sY29QtxR79hso8ZChpxUoxpsQ4z",
  "key16": "qysJwWsW56DZxix5jCTzwBUQHJHkgswRWMkuMyoHcdXTRpvi19B9UkD9bBhuVGDbnmPpwRwmpTjoGVTZvboAyPe",
  "key17": "4EtPHUybw4THZafqn3jGdvUTS8VAJY7VhxzZm6Xc2eduG81t9mq75wJ3hkyC7LdSGCnPSSWC4eMWb9c1X3w3nGUB",
  "key18": "2bzzoFwBtgyUW65wU3r1Z6iuyexeNmwmzRjAHzrP7W2eqPZyRjEPwzHv9mqej7xrxW87QcBqVFbSZE1onNsPXQ8H",
  "key19": "4V3bp7or9VmbtuM7jCf4sMEuq2upi6BDVN8DGPR9RW5AgzdMo1CHRFWkFYg4JFQHp4Yfuj7LncjLEFfKmZ2TBZ2s",
  "key20": "4QTCWkk81tfBNKdVVnGv11tzbQXtfPatqtggdPw4ccEWBhJPwLTC6aXSuNsY1eDwhn6umWRp8JbX4VVQSG12YaZj",
  "key21": "5RD1SihcCrewQWNgexdAsQ6obsfY7KCi4iN64V99P4PqfmyU4puvjhjL2RBWu2XtRNA6qNXV5coedu62qo22Yha7",
  "key22": "R61sLBuxJLucHdoFCnDDrMRoiYBeEe2xUs4TUdfFPzEiWiVEBKaYx8DM5WtnHq4jyZCTXeHZFhPR91A3xug2HJ8",
  "key23": "4E6Dk2Q7fdRvwTGRMLAv6uqj3czt8fdnkx9Ds2hwsaqdEz2VXpxgTiJjwj6gYg3RAmEoxbBMA1GidbghvRrrWJYt",
  "key24": "3T1m3V9uBWDPbhxnxCc3VAuD2Ey2Vr69peVF9fGsTUhtGWH4KvvtBC55zUCGNwbq4WvweBVXN7WDEj96LaopHsuT",
  "key25": "23t6knmNvVTRcQfhnrhg6yxvWM57ZjicKj5gtSFhMPUtDTf94ctShaeUet9T6Zcbcr1dqyDcifqkrcme3hA1evZs",
  "key26": "PuVaMo7fCXX8m6C4JFZENuR958QZcbG4YqauzesNot6XVaAwuSpM2pHoVCCBuh5q7FNmsJGo8jJBT7f6DWH87S6",
  "key27": "4xvHNP2mLqarX3Go9jXgF372wpthq5LAAcB1CzSDbc8hQva1dYofiJbo6AZbtkLRgbcAgxJVY3FktVSEjZKSYsKm",
  "key28": "m6XJbKkRZHUvN9d29XFp9hXYjoUp7iBipYkdn3RmsxFQWGYyGTiVNLmVGKeu6Ae9YQNyu9YpuT4qPSd9yrQJsWi",
  "key29": "dReoDK8NWg6uwF2xghAjGojz3mnFPkWi8QK2HcDuCuf8SD5iR9efXbdYr2MeyoaZPoUkSsEN66Fkp3uqNzdDPio",
  "key30": "3bY7txtimPb7YHDpsrjyvhT79VMjFLQQQ1Z2ZRFVxawgJqncbkjFPBUPRGU9fPMdpoHvm5pAZiaFvKTL9fykE7VD",
  "key31": "2dUnaQU2U7FKgMkHtVSbr8dEzvWgZPuRURnJQ7JohW6UMt2Sufnpwvdjyh3SJdZtFTG7QQmNkFDLs2uEGSJLCsHd",
  "key32": "gxQ1arSKnrJ9NpP3nYnetyepzuB1G4GZXw9FhTdKvpBP3HFu2icJLQ9z8C71vHXotNyyimLieX7Tsu3vUTKBzVa"
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
