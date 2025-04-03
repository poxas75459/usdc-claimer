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
    "48hGV6vWPdWcxsJBpX3bSmydWqPcQZPjshALWQDAchVrqYBZ8kxX3ZM2CiJ1P8L7MJG21Ms7w5Hx5rMmMDNWbNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QDN9LXrrpZvusbSd2hh2whQgF5qdno6yEqxhkEARphwsYJ53PvqSWf4qvvacFA85PYgGvEaT7NtGKLG6yket3bY",
  "key1": "q5HzqomEjJSgEJ6cwKJkFeXJuZEqcQXgz3NWDaUR5JEqdhrQfEEyZbMXkxthmLPmiv77KoZXapnxroeFz55cdNj",
  "key2": "58f1aLxPZZuwp6rCL5g2Mn7yL4NBWsBc2v1jD1rDLwNXr7skSdscKDVgk8raTAtACMb9h4hNL2F8HctM5ZmSH86t",
  "key3": "2np8JJrU5dsqTYZiMBMospf5ng7TSNZVvRqhMc765feBoDqmpGguddAif7jjaGu9JJbdfeaP6epy2GnsjDq3ncfs",
  "key4": "45wwyDV4hZDTqZKvkwDMdEBtDFnPozrsno5dMHamCUSyekEiUCBxYJXT7aCyfbz9NrDECmY4PeHEo7kPudp9FnHG",
  "key5": "236g6TfpaB1AexXuqgmwjGXiNwrecoX46CyqSM2aLof5ZTXXpzCjPUqrNJCyCAhrwE9zVxGqfRjDCvFDBqgr1epH",
  "key6": "2m1CD8osRRgZUszssUgp9vKABgEA1Xf2GaKHcgzaw4A7yehJ5RYJiFRQpK8mqhEbSjraz845U9bZc3XiPsrrk8jF",
  "key7": "5bLyMbpku4NeJV4KCVq3VVu3os3RWPbqjdvMbyku7MaoktHS4tcghanELnudzax2qeTHsqVvX7Hfhs4XtF9fwvo4",
  "key8": "2ztBqd1GKVKrVBHjMF2WjQ4YouzruQpEZ9tJ6rUyrGzu5JTTHF8nbKRnXJYmzu7ZnEMeitwE788cFwks4jxNyeEV",
  "key9": "3VxeaD8tK49D5576b7AigZCXwNznHE5qN3V9SDFqCrUZKfd5tynHQaV56TtvJFdE62i9bwj9H3cRiYmU7BZ4RDzw",
  "key10": "4EhDmmCg2VprRfq77p5zdCobkQidjC9oQZUsautguYU2aBnZhnLmKSqDjZT5Hqkx3Y4WGCX4pixxh8syEWbfZZMu",
  "key11": "59pUqD69FpZrmDag645wuJZLExqzhtfJ1fPJYjhuBFaioHpZWHy9t6odTodt8dcjam8fJySpaqp2aNN5JEWy68Wk",
  "key12": "37emMkH7iNb1SUnZ5WxZEoVBKxrzMsPYrzuh1EBYoffKh1v9udDG7KkQrNEFpM98QVE44hBKARyWkghKpa2fpDic",
  "key13": "5ESLDqWfwFXTQtmaboNMGE3cvEUif3r9JF3Z7NeDTPT64pAQPABVonJNtzmcZ6FfCCmVs7BGjhoUg54hqfk8UbrC",
  "key14": "2aBH3FiEWvdfdHswaz35dUjkKJ61VfyzEVLBYohsp35GiehmjwUijqVdH9S6Wv9WL2mmotegCXECQXgsh2WV7RL8",
  "key15": "3PhVY31pC2mUDrnv8Agasz864uTK1RkdUx6daubCUpGifaGy3KwAtYwhozdHsvAR4Cmpqo4r1RzDU7ykTnRVZtct",
  "key16": "4xKYV1bYsjT569VX3WDenwLezUyc3CZx9mANQ3q5frnKVDvshyHgMjx7oRTh9satoDzSyBsvX7zwuuMKBXHeCUHp",
  "key17": "5BGEN5goRz5ugUoPTojqkX8ULpS1qc8h7qWzZqRGPsqYNqxv8BD2feQudoiD9MUkBqAKDUZfRzxFEcRrJ2PXM2Mt",
  "key18": "5hrQvU7A8JPx9ZdhYo6rzvh99nMCX2M4dww53wLBMP9oZULHdGoZUDVtVkttmVJwKoFEBATG6NttsVsx2wWfJvuc",
  "key19": "56SwSAxdsVEgXeov7px1Y8JCktQ32Tm5EfYWwttvMHXciQ16LVQxXEEM2DBgjzrvVUKH7GuoZwhxqZZGbw9jWiqM",
  "key20": "4skLBn5TPEkx4XtQLNJb6fX4Rrq89sUAsSaVz7ePropykCabtRdwjNvNnDyTjU8ttHZVKSjRR5dJU8voWs5XjrS2",
  "key21": "2Wfxdxqhavh6YVRtQW4QLF9zXNwvkzF2LrEgMUncU3VheAM87b1ycKK4yScTNT8Gh8iobfqh9wqR4YWW6LFWXP4Z",
  "key22": "3FeZBcruRrXU3WYAXoNdgYvQgvg8YxJohLUSJG2AS2eobaxFMfMkDbwyvdpksfbvTSzF6rmNiZWRsv27y62458a3",
  "key23": "46u133bUCTZ3vhjcxGdAQHwvT6S4v9JnXLEq1mvk5dw9kyLJFSDrPz6SirKGyiUeRSwwpX9VG19iQSmN1AptGbSV",
  "key24": "3uFizgkkZgQrduKaSTG4E45VGPHpDDTZMuXx9qUKTxw9uwYz7idcHRsFKiXRv7kLw74DN8Uhsp5F2xtkWmpdMH4o"
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
