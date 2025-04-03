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
    "493tpJW3dxE3Uiya2VqvpbqEUMj7dorKVkWrr5AkTgVCAscrZFMuNbZH1cTNRz4UUQ9rbd2S9ar4oR15Wfzuu3Db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SXRpiMazPFzwMTkDWkZ7gL82YTKDcbz4HHzoHETqB8rFHdkqwipci5tiajUW5ato8pRDiNwKozhZBfRK3tSUZwK",
  "key1": "5KWxFULSRqcfqykV9iTVwtxXeFvyeAJfbSxyCtzdbWZG7fXdQ1kfK8fdJJQ4wFyTdxkyGASgrWrMBXzXSpct8stx",
  "key2": "3SDeCHTEYwyFqkVqi9hkoYzcF4E1NFDWRPPKRPeK8iaGe2mymU2foDtiVHwUph4HLf2iYVQSjhMKsPkmRLuDZ5Yd",
  "key3": "2qw6jpmWVcuUj3tEHfcBs3NvjtzYDbGX9cLfxrUouaLFyeX7phkwf1i5ruQomyEc7irwmrkXJENtkbqY61QkJa4j",
  "key4": "3umMk5TXSLgTsPD9hGpSWiHSmvojHRnUYnJ7ahSSb2wqmTKoeChQXrYt1z9iiAoC4G9U7mAhDXtKJhmQJzrzhX5",
  "key5": "58XeLwVKApL7pcoUmSwzb65D8TqvozJVo8g1pZKwQQq5z4BgYsRW87hwf35wuELzE4YuctLPJsBzzL4EM8HdnLix",
  "key6": "52RSXeTFzR4BESNWEvfB3sTf13s3rS7nZwSnyPtdTku31TQ7aNtVfu5kjpw7L5gr9DYrhYhgzrEkc871SLqzrkZH",
  "key7": "5UsW1PBABk16CP4RGuhCs8Wu8S6Y9aGgARfMr79QetMuaTa7zx96GVcv3odMunpZP7euWcKBUhQZLB7fWUTbGT5B",
  "key8": "4s71dQJseXPmKs9gbr39zNCsn1aQaamSu3NkraZBzxwdUW6ESPkyfpeMyZGgyLG18cLnuwAXgHCgQuciK9sztrhK",
  "key9": "3UsWSfPrnsJu1X4YeqytPXeR7NEHZkUXfrc4Xhzxrf5WvoXHR1Wt3jW1dcKxZwmaLJqTudJhoKESiUqRoeGo9ACg",
  "key10": "2TADYtdnyKuhpNzy1wT3TjXG2jdzqvd7AdZyrFk852vbHNVTngcnZ8RUYFsgGedy9xKcqgLdCpY7fswdvaDpSzzh",
  "key11": "kmTGZ5PEUkTJqqA87MF9RLPmfbqh8gNg8oqA4bv39iFduB4ye4Kq8RCXAmjoT64pXZpGjEuY5V8oKbKudLmrjvA",
  "key12": "2ifwsDfvH3djLLUybJ2i7V2aGTbAKawEjm2MtTTgqGTyjwmSoiChNbpovPWYjnW4ALU9t5ToceBocP2hpXvne67E",
  "key13": "2qePAxBSB9V2KP1DhDSF9zdA2xemxsBwBCtTDo6eAiSFV1YeCtRZUbkrix4BMt4pe9bVPSTfp7QV3v4uHcd6rdMF",
  "key14": "5atosWvthS66Tig5PCxG5Sj6HP2QNhJ6jpguicR7DzcYPM5YF1ZEzFsxuXNtxb6X3gRinno7x51LaZ3cXXnZi327",
  "key15": "6tvysWHFhkXNGmgp7YQzrGpdKffAZ4hmefBmfQ59NvZb4A3EKiYzM7ENgcdnaseuLrpfeG8upWkoRNrDhkD5EYY",
  "key16": "2VepLWNhay14MJMjey99nksakYEuwn9YRxaoZMKGHpfngjDygY9HgqXd5DsrX4KFZSTKDWQPNrU7SuP8kwRzJNWP",
  "key17": "1Gz4PEYTT5qR8WuoyFCq6ZrVb92AQ1aD1p8d9zvu8UowWBN2SPZ9fq5Zan9ies2GsALdXMDWfT9JSNzs361tJ2v",
  "key18": "5JLUFmb4gbSEVf8fwAwL72QB9L6W3Per94AZUN1FiXrbHqQsr1FWrjMJ4YqdPQxtTozca18nopTxCZ9899G4vLCU",
  "key19": "3WQVCHda5waJvtayhRiN7eVuxEUwF4VHZjzN5b1eRWTfdwCAsakp7Q2FEi79m2KqtuPEYQdDFEjLuG5eB3i4jkGh",
  "key20": "FZv8n362QhNwBheE4PgsJZQfD1uLeGtzzaBxkCoKfqfaZ5KnHiKw7mB87hpQwF1Zuqxn1eLChyuPsJF1xdsGp2N",
  "key21": "5SiXSipCCjvaE7NBnJVzyvnMeLDZBFBjxYYkMfKnLPq48RPDmsk4ygLrUGRFsickbV1RUL2Dnkb9jCb8YhXoV766",
  "key22": "262aVQjeuytpFmjdGjPdFjVVcD6tfzQoiP5c4z934CqCQcGWsFsPsakCVK5pvWAyWGZDiq1wSzckHFqMfcCaNf8E",
  "key23": "25ogbPzycUoTtKYuukZrpnqpjrqBfQRxCQ7JS7NHZXM88AKyTcB4h4nGoD9c39f7cpLitsXFouNGNjoj69QZaPzk",
  "key24": "4GAoS1sLY1fTdcXiPY5C3ZZ53J7pBD7ErTchD95Zsqv4KEnfjSyiab55RLdYbBZDxpgaR1tbfrkrmFsxUwC46GBs",
  "key25": "2XPxndRExTwrvceMWWp4UArjhUj1NudASSdGyJmnRcG99nrjFi6QgP1RCFrkJzLS114sGoZSqDdVAppY9Ec3GM89",
  "key26": "Ez4hnfopBF8WRfCkifecbUfFSwEtsN1KMQ21PLCauyip5PE8ShuU9wR1JDDtXVTdEk1s26jGNSErzLnASGoJf4W",
  "key27": "36WmXSBWtPLSQdLAiij6zNt6G5WBhPF9gBxNLm3xGjAiyowBiK2prettkC2t5z5Xf5AZ1aEUHsE2KXdQGZXVua2Q",
  "key28": "3AYu9haZWAJ6U2ndqo4SqxZ5rTAsXXB8ApHGbu7yRRUw5LC3LTQ9K5E5fRUnssGyLqS2L71teat48p5VRoNn4WVG"
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
