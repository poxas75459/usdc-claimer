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
    "48bKoE3U5zxvUTzpZcQmmhbW1t7ykmWeAYaFSNbWybFPB8XU1w5QbcPQDhBnK88PDLh8L1ArktKN2aMZbrpoVYvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "589qNJt864nDVXVK3KKtFdC3wa1fFZNgvRTYRVsH6fPS4NdGN4TWH3Fwz3qPnjhxPqaL7iCuD7GaV7FDnfhbxSUR",
  "key1": "e8ZMTJEX35JDXc92xPhoGi8wWhoBAacAJz18MawsDc3Ah7qirHRXndHYcqvvYe6LDyQLLniLvPssThjo1oVe47z",
  "key2": "3kRCFQpD1wGaZKqEXyrgzvN8eNVMyXSSgSEF6L1URVTGCb8HBgfN3mNhzhFxmdaHRLYPbsWRx8jGsDNwfmuXB7eL",
  "key3": "3Ts5cmonhEaBJx9Q3EukN8eoMLYhkMY6fdGhxZ9H3i6SELSs1QMJcYWN9pTGcmZ1pytqyLRMnEVQb1eEhKwAZY2e",
  "key4": "2qmSaYEj2LsB5J5jP4PWZpiEzU1ER8iZBpxfo3TBpVqKX6kZZ6U9vvDSUFErWXabV3AUv4KsKNMdoa341o4Gwz9J",
  "key5": "WFx9j4WUPsghUsAXaiHQjVkVseJvjbHqJZuBSwe3pkLQ3CEr8gYf5t6Yz1XPj339e2jJfMyDhvQQaDVYRZ1R4Dr",
  "key6": "5xGkQEhRmFTkKn5RT2cV8TtVF3o1px5vUFvvv3XMaDwR1Z1GDMz3KDrpt4efKSa2wAfw2VUm4pMmqo6AxsUrPm4F",
  "key7": "5AwiFkEZJzJsogUVuNy1587DAZourJAfmxjpe7KiFaSxKn7399DEWZ7pDyEzpGDcFkkrxmHtfKpW2gxaD3eAPouo",
  "key8": "4nGH9obWgFaHmAXT1bbfv6RRKeqxNj6EeYMBcyPPionWjbKSmaGapLoakvTMTvTyMTiiDTfghca8EpR84EuCJo6u",
  "key9": "4V7V7A9zyg3eQgJcrLzQxck6zM9bcEyeDyo2cGtvXVW31TrCHxJqrm5PKhrciuzMbFXUiFp1UErkc9WmLDPTUBNX",
  "key10": "h8vGq6oPCcRN93Zo9ecjaUoZ2j5pQQBh6AAV2v6VfMNy3gS1iE4iZauUDrFPMZ2Jg1d4tn5NfHwKpVfTXx7BNmm",
  "key11": "2GUBf7sJqUqPQjS8A5La75wqTFXXLP9vcBrpyaQh5HxZwmXNRmn4xZg9s7a36Hdq5FmYLB5QqtbST5KvAojhL32e",
  "key12": "P55p5zAnmAjQoPjXRqKNXY32duB3tpYVuFyxQ5uuW2wTeWt6xapBkKDXCgxWjxiWCv4YeixTj62B6ofjs3buwhj",
  "key13": "5rwQmbLrVK7B5f95KfXcb7KdWs1Cd4saB3HwHnh4MQdgHvSQmxyPoUrxYt3X6L9tPyHFrpWVpNM3Mrwe47Uwnfof",
  "key14": "65tnnaaW6nakpodQBcDCzesEc6VtJx9VKKxHuMdf1ihxyf4HhnYPPyzu9wP1HBNxYHZYpBSxMvUhUcnCyRe94Sa4",
  "key15": "56Tex4h1EDnVyz9V73jxUe7Qm4CDxHYiTvU3mCzHse9CxTpqh6SyZ48oQKn7CqUvBv6N7n9bj3yt8bKhDBkXW4Mq",
  "key16": "2KbiJUXM5FavB41TcWoXHVZwUBYH6oaYjjg3z41dwXupPCZeRhFKZtsGm3BnF4wR8naffA7iAF6BjvvSNExZx4vz",
  "key17": "5K9optDKdqo5xkaitn3xvZLvoyAEDTBaX4NWNmWygh9aVjYfwXP14QuNxYKfZXSeDdqFD53bVgUVssvxXPdNRA22",
  "key18": "3r8Z4Uf6KMxQZoaWzBJiwyXAERxy7JvDHecRiXrrMQQ3U66F3zebqVaQeE99r816M2d5hV2RKFVh9KjZEkkNqBgm",
  "key19": "1eoosNmpHRGmoHiHghfxqimovAsMvkoPkN9TkndyPV4bCa443Yaw2AHhjgNNY1JBjwesNdfrYgeZNRKYB9gw7dP",
  "key20": "3Qxijvt1Q8Zay2yzENLJ7yWHscLbMAa7TMnP2LMrGVsyLMBJWqchwPDLZakXy6yLpAXbnueBQMyHHwZ7q96ExQuX",
  "key21": "5FovS9FAUBeMbqCassbk85fhXwmR38TF62h3f27PPBKeVDNJoib5byFq1hrs1TqjX2CFnzPcoDh6gQdgJT3Ldx6R",
  "key22": "27tVnX2GXuaiPLmSyzdypLq46juWL4Z7TQ1EuLH6LtTH1mnixxmfFC4KkpBN2wsTVn2T8ekJsART4aNgo8EvEAHb",
  "key23": "25N9YmQkiEjWokujSKA7GSgtPX9iauSquxxFgk2iDdxRLsLLoVSmuzKZhjxUe6w9RgvXQGU1QdCtJgExYVENXRGs",
  "key24": "2QSL8c9Ydcx2oJDrFp8TGBtei2artNXwosz69AgeRJUwxqP53WqzVR5KtTPRdDaS9QzL9DeJojB9jduVARDan3Rn",
  "key25": "5TDD3V5S913uUwY4jymEFfe2tS6YXXof6KS3cNmtYioxQz7R9Qyn7BuH48J357pPHJLCRm6p4m3qjUe9q67GfZPp",
  "key26": "3CwNWcVhd3Wt8fAdfL1oKXYpfLEcrd8pM8wCirqpQwYzZnx2PVxQomJLqLcf2QWvYKyY2Lk2kMWBxMVX6YjYv17F"
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
