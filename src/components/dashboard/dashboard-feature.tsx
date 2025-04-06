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
    "36Hwg7kTgqneSGxgDM5WxyGf1qsjzxMBrx2VQMsvSGjzErXhaqzZuMNTuBA1uNk9p8YWT8t6AM2Q4HHKQQacsZhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dDaYeBXRXbMitXrqxp35R6GkiJTDGrMkQ6jrxZgUzLdfT3KDWxqBDqh6bqwybb5GJes3rXjVjgg3XKSjfzAav1S",
  "key1": "i28iDccSXYouhpN1BrrMw24xAvgyLbqnauWXa3YUV94cwKHT9osXopKHinUhrHYd6Qr4KpMSN5C3X3nUEhPr3mc",
  "key2": "4GfG5LjZdU5NxEHaCSBJh85W6yB9mhCfAuBARjCDXcxNPE26cur5FLVmGSeEvYv1GKc5kXf9kUZui7FwKMgrRihQ",
  "key3": "3c47i1CpCwRP4kuDvU8o4woeyuCXiPDeVNqn8scauv9SdVXxFAteiYvbcJeboCir4GJzfKnmKWizMqA85LXCtdRd",
  "key4": "3TjoE9k2A9nkKHD5uyGDBeoHjZi99YPjkV527m1oAiSkxVJ8QQoytVjFooFSDJcig44H84ttUyx9TwjQNGqVPYVF",
  "key5": "2hLkL4sxZwYU9bUQPepNsVRtfTHGzbdMejX1wAxEHXBWz43x9UTbPuTqWG22gbUveAc9UKC1gKKyT7Ni8HMY4Yh6",
  "key6": "2yKyaWh3g39HMz35P7eQ6objqa3Lg6hAQgViY4RjKkZ1HVU2owWJC1pdcWNM1fExkLrBPATMZWB1zmPYdSizgGTe",
  "key7": "4xbrB5Xr2txTMAJ6rScgqJSjVaNq6R8PuFF1GiQN4hpnssANM3n6EVQcUfF8dAGsiHNhtQrVxJJvwzzdrtmtSucv",
  "key8": "2KEQti6s6UR28SL63ytWNeebeqUJoZ24SmkwdtYpqH6kWV53Js4ZCT9mcaYRoFRquYhAB4xo7AsQGncb1LTBbpST",
  "key9": "LPLWXYQhe7Z3hJ72C1tDD5kBjchevynffhE8PqFLbSX8ejRsPFgJS2Hze6GgLjZKE8p8uz8CY1uiTUkNoqiaLN5",
  "key10": "5Fn4oWJcxWzGcbquN5TCJexX7sHNdXaqmBqoqyTfQDxvfJfdPGCRYjF9FKtEByenAf8yPkHW2f5rrhsJmiHCJD6d",
  "key11": "D7MrzhXhu25kZmrLS7K9WQDgBa2S49xaS9R1w8d5DCqAV3DipJDKvDKSWXZqBVLRHVitk5yUjetMzRQ4mH5DZkh",
  "key12": "4MkgtzS7iN97NUhgchzF8bBmwukas5WfQh4xBBwuR1syhdDu89LjkX3ihygRzZ3bggXRbneZmPUV5WfJ24Z85vbB",
  "key13": "2UfmF1iFwYrHe1FM8iamQeqhad5WG3U3z4nYNkTuGK5QaSjSPe4FwEFQkGVFMHBoDJmnHuLtELUCuBAqXm6qb1R2",
  "key14": "4mahXGgpSddzG3Tz7LFTxwkWfBAsL2B4UnfjrsQyyQ1gUX1DepVSfChQPmTAru7eTMh2TdZyVTVFdXyURLG9vzjc",
  "key15": "kM6NSoSJNKuKxsf4yHMH2rHAuHHQu8D9pPKrN4ie6zePWB6TDyYyRRa49JV6J4Eeen4XA6h1vxwqqpzfqWuXMgW",
  "key16": "2f9wFGNNW6zna19ZXwY9WQSGCH5HdhYyuEPjC71JAV9maezT6zmMbM6DaZMtu35hzYF6VBmmVXRpj45QeHMfTif1",
  "key17": "22eysk1m2bDuQbr1aM7ojwtZYgY3cRCrkN6zKfVrF3QwV9RAnDRv7GtRSaSSXJVbZ5Z5R8LrPiMh7paFr1cR6tr4",
  "key18": "3cg8c8XfmmzvAWLmQaJGJM4WhbLEKupSZaTvsDdWxLExpfjKjx4ESRnxetUwd2MDU5JmbCayTenz1pHx5pRN6Z2d",
  "key19": "gv3KRg7KuZftz92aQSBMc161ukirX35Q3vyqFWisuq1JBP4YRGr9zWGvBYyd9MnPjQhQUyVAkqo1NFRsMELUweX",
  "key20": "2d9JdBpj9nj4gaybXV4eNajqfH83aqTNmPvTJjMbvy6NwhpayhEhTKGa5X3HgoeTLZt5NKA7KyXShJYZcyTkDs2e",
  "key21": "2RXLnXV37qYMHbWVL7kSaHFgBSNszk5kAx1v6Yk55db8X58SFCatbiksJ98sPzt3cKFHyrGnBsotZPydiUyjRGQx",
  "key22": "5ZwLQqHspWG44jxACXsx3HYtuwsEmoFdbs2eVw8ipKQyaD97ito8dtZrEvzNzYKdgxxnLfjPYtrX1AE9W6cRuRA",
  "key23": "2KHwKxFSMDGvyZdVwojtkD1hEjQtgtobbTiGfm9ZwziXE47WvUPyq8rUfkF9BZLZoSBTLWLgeLEb2U3kB29XTvqN",
  "key24": "2HCmDD5PBDdL7Di9UraiUud7EfpX1FWfbvoXxPhBzN9EakWcaakXEy715WBs8kYJe7avMowq3yNpXpdYTj6tcuRj"
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
