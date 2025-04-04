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
    "5pXb1zCog6WaqUP9pNukUVBq8WvWHyRb9i8hHXDpAmyYGhFw7Q3PJ5iZqekNCnv4ji9yyCvcuJKKaVZgbY3kko67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "624dqvbZCMCKZVzMUU6EtFz9sC3zZepgtumesnWDQDo26EHuKykukosehTu8NSo2Soq4zjkWopcK15CQUQHj1fir",
  "key1": "Hujw6BYqRbYyXeN4oHhHyD8Vs4Ya3YUQT2SCPCV34cLoQ9PbHPGfj498sJ8EMEuCXZLeo6jCsQCD65KRwSaVWDM",
  "key2": "4vsBrXMmVYpniRZV54KFAYmebBLAkpWSoJWzBUN4K948n5Dmrc3BHg6J4fDq2JwNronyb93TJTrASYUizAdZPiFU",
  "key3": "dEqQGsmAojgU5GTje5FQd4yDFadSv4UDQoRCFwY1FTA9jJbL5HryaLAgqinPbAq9UZy5kPCL3S8ZDhjEKpU3GUW",
  "key4": "5G5tRAExzJtSAG9QBjRJTZdBYw84f1Kwz7YZ8mrn4HrWtFDcCzXS1oVM6TxfpUMrmqTcdjRLtmbxR7Kh2jm6SAxY",
  "key5": "2vmCezf6oV7KkKuSQ2xxk1tmg5uzvvQ89vteXGs3TA9bCMEBgZX7dHDTJvwBbnikjqcXpHcK3YBxFB1Nf1QjqoyP",
  "key6": "MWZuPPQ8QkneR21Vr91VuzY5kFQT5MtTaZF2z7Hq3YeQiFqqXit4n3gEgpb8c2soBkTRfnNDY9voXkhpfKzoM8P",
  "key7": "2o8b87Ymnze3hjAjcMCkrdXR3WnVfF7mJHgSvSxQbqy8Q3mrLUN974t77wsnwDZ38uwzdyvvtd72Dx5UyTiDaPDE",
  "key8": "pxWWMDkp5oRbDswT9r7MThGDEufv6Qy3LNBegfMvC6essHBR7Wu3SkGxgTc9jYwVKFDmepFatptRyVQKXBnq7eZ",
  "key9": "3VmrPJaUkdgDoufJZEyPjtT9Ye73ZiJH6dzDMHQzPBSrTEwrj7geHs8zepC7vdmi6deZGLVw4XRdMc7jM3NQ1Gv7",
  "key10": "5ddADgpZRuBoZc3qsdxJsmwpeUinLfueJTRugycEUSpswK1nAy1D9cou5sFpRRNFtLKze77E8AwFFypfyexpsE28",
  "key11": "PucYJcRa5LKNrN68YUj2N5d5UPf7qCSJJkgiqjwzVjQHekduCMJfpegi7dvcx2KSNUZwAnukcoCv6yth8YdVqZ5",
  "key12": "zVLhWrKLBB3i49Js7Se7geVJAMEcPDsKyWGCrZSfDzc9trRUvbsYnqQhit6Vg9ri6nzHUHn2oi8gv4qzZ58UbR1",
  "key13": "KQpMHefd8CiUFuMZ6Gf22KALaggALWZxXJQUoUztarAJUAbxFQHigBcQb1riorcXw95r5wChND71fHPRMCAm84i",
  "key14": "3B1NuxVe1dLY5GX665nhg6VFELwLMsSteMQpUcLBytATeTBgGqE1t36J7HUuoJaBpxbnPJYTa4Ev5Prj5Zs7JMa9",
  "key15": "5ksRkJYcALzMZpvsiJvoTV4sQx6S2Z6eMXGZYmgtyaFUskwPuKLSsRPQzuk5wyP59DfNjQjmDPT52SFU2TYFo9WH",
  "key16": "2SuxgJq6ByKyfCgGKtxBQABimf41QKDsYuumnr69yHq745Mjaorh1pp46UMh85jTAeAN3GKgnZoJseKh5qdPmTwn",
  "key17": "4Evo27ofrze4dbvbAmstn3M2DucBH9RqUriEvWGSkhozXgy8o48FbCDWA5YYRbzNfSPtWjuxYatpqMP4YHmC7cWC",
  "key18": "yTK98AUjLiBvQU7Jnnjxq4CFJoL1FADodqnhTL7chSm4NoKMqs7Trs6eNrbYkXS1uvUoNBmTqvRghhx2oXqckJh",
  "key19": "3xPVEYsDTRbA68Zx1c2z2Kin2rJRZQVChQJAa3hK8wgExqguNL6ohNk54GbZPWFRuyyk5GLoyBQqJSSd7RjrGzTn",
  "key20": "3y3sLrjDdrQZBVSaZk2WAqWeEJcfr8ojoJNHRiq7hnUYZEy1V8nEcDdAd9KTRMtEToAyh5pQKsHtXsW2933KUqvv",
  "key21": "2zw4gWQvfZ7kRD4beyeDZN71D2hzUrdCnuVAVQgpHSujHMTuPXCLrpFxieLVUy8aXitGLtTzytXECkTseXvCwDRH",
  "key22": "65Kc4eNEYHU1KgoiHgkXxrVbGf8YonmD39MY5niZNR2bFQ97e9Yph8yurUfdvoTKAKtE31RTej4e2B3ZNmnMxJqE",
  "key23": "44VSp2jnsuFe7S9xQWYkgbJztyfjEZa3b4LTfoAGT2Ybp8DbuaFwn7fGSXyc17eBzebaiCzNZY6ALfT7tTwQjt9s",
  "key24": "2ixhuDTMV1HrvCFHqyXfhk8sUWhfFCqt53Zs5aXdUGftxPmpXk1bFcQhC5K4FiJMNbCbfoZPnhTNro6oqXihkpvc",
  "key25": "48c6Ezd7ScptJbKYwPkX9MrhSGsdWiuv16pwvZbj47eR4ACqHP4oJzCfU4DCe9xyLDQAViC2ngeVfGWYUG4qDk6S"
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
