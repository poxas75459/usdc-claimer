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
    "589DmSMKVEc79agLGBHoLtZVzGLReBHWMgnHKD8tLdAUNhu6jSSUs2PGZuQAQo9r6xTMe1x2BKbAnYTjhqWvTDxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oKomr1ExgariNNu44dskyEM9gkuwRJ8SUdUJBWFirFLscnWiqE3QKYufe1XNw2HzGhveeuzosyvP1fokR7CM6Kp",
  "key1": "2UA7ywHtGE5XUXaJbGhNg2Gn1dqTrJg2PiesioJDdsRwhu7cBF7YWpp9WAVbHdgkEVHMcTb3UVdMn2r5NhWHhizM",
  "key2": "52NUgeKi1MgZL2XPg9jUf5thrwNMYDMvRwyYHPpWkvNws9B1rTaW2GKuUL4kSpRfjSBWC8htq4ntue72w2aDhua7",
  "key3": "2GpGA6Dz8cDFKVmCuka7nVayF8biXtBGKG5aruSu1F42XMPpVwwxB9nh2zAeRv2nkiFjnbSjrZi3rJsCJBN9wNao",
  "key4": "66565YmAJ6RnRSpV1LyeikTSpVuwYzdXs8FUwNNFFUVRfUubhJnYN7cUSDvLnH1AKU6CRt5Wf5ignWL5VR3HzAGp",
  "key5": "5q7Wn2S4bBDvyXNux7xF8piZoeZU64PrdvroLV4XcWzsd55WFGKKJpmgHdY7C5ZNvBUnEbvswnxq8fdGvuhcoH9H",
  "key6": "4TzCVWt68cBixGJF3gCw1s3z9NftMAK3fzaMVouUcvvsNvUzKHDJFVq6wEd92VPqCx7HHVf7rfqV7jDrbK2pdKdR",
  "key7": "2wV82qb8ssvoNcccfBySQnKtEFvfDuSGT3wtvgCc5NtZ1QFHeVHxiYTAaJFXa2T3AQa8yJPCpsnVbYjxmMuacRx5",
  "key8": "4JdJb2C1TVPC8VhoaqJog7TjFMWyxc5pAzbugdoQ4ga6MbdqvAi1WbZUoSe6XSXQCTsjMyDmvpxif4DyD77Rr4vf",
  "key9": "5kADGmYyzogMXUC1nKToKMKMs4A44MHdpJF7iaQv3gW4dzodtPdmhcd9898LVvBx3KjpMy2wgh2bhNqWjUPz35GV",
  "key10": "4knD9yEfGu9Tq3WHHqfFNJds4M1NyMSzFAupuRh5b9cXM1sihwuJ5pGneAkXVZKsaMkLDtzji7RPZBgf1RBNhfo4",
  "key11": "YtDTtV1CtYpbGVtWSRL8kJ81V8fw92TRALHYqCFZSDD2GMQnRMtwDx3MRToASYbaoqbWiFWHn8iXyytcwrvh6UE",
  "key12": "rPa3P6Jh4LG8QSnKyEo1hU8Xie1bHdskPWFZhVwgMKL9CjwMZ1dgiMPru9YVXrSbLGdpsgDrtDQ3CeuLwqk5L7C",
  "key13": "22HVQWYb1hPWKSRMoUMiZYBwFMi1x7RQaPPsiapHKNF7TM52obAMipScBYudReZhK9biSk7cwRNZVYcWKT5w9v1y",
  "key14": "5RuPKHxkkZtbgQTbZJU1GMxeepzPGETsi8SUmZVHBXHSJeKBx73v7x5WTQtkA3K9nXsfAJgDB3cZKkWRkcg25RmC",
  "key15": "3CvNuTN5XWVk3TuKZYP2N16cwHSm9sRfEgJiEGh7RoM4q2X7T3XvaCwMX4wx2TsyNa1TMGXyCPBXYGBpWGpWLPEG",
  "key16": "33weNrGggY2QFtXQMELmAuJ13voyrbTpWmZep9qKS7CnNAcWUXYzXvE5kUMFW4pNKdXVrDnsjVxLUMGiBJ4udwFJ",
  "key17": "5EqFBk715TXerQCSuKWi8twmFsQmj6RGMRmWtnYbMSs6yZJEzTV1DKHgUqu917o7hFCQTMmjHXp2VGRQL4TpdNS4",
  "key18": "TDW61p1fHA1uFojx3adbFrSUhog4MVZejJiufAJs4cadC9cnvuq2KE6SQKXis5arCmtcDTcmmHe4G8aG37E7Dbo",
  "key19": "GcTHEsQDWs1FUJQC8RLnaPtXATgApaVL458GzknNLDdPzA7QSdhrswNVHxAt6cxbBATfyRqc8rESZ5ms5sNgNv4",
  "key20": "5qn7i1NEqm9c9AzdCCE45hrkS7Vz7MVe6eujzMTeWoPM2L9QRL2euKHgUXbyj3i7bFtnYDPcKb3QKVTbzHdSwiP3",
  "key21": "29EUNH4JJHcUrMC6GUQ4p654n7PPnLUzLMgCshG5sRhSgHvq5MRj2w6QwfjqButqHo8CRcEk88RWP9znYJFcvJx7",
  "key22": "4WhbU5zW3yyvdFLjB9sjKXFAoZCgUmNWeuPoNM3ViZVVJTNrjqWHj9aCSFVn6h1biYXTULkCZyMMKdvUVb8P6MPA",
  "key23": "5ZRy1KnbxSzFA4bTwbTL4vURHP34n4JobFmrph7DLskbjV3qLwjqyU3VpCghETWFbAqJ8cVdXBqY8Q3vYgVmLqSt",
  "key24": "5TUfcm8ADWWMs8Dpj4WStt9rtCAYK89LoSJRz6RLhjYczcorEeC3XbL4ghEt5Gp7YrDUjqLH3VQ9YAdFUA9zXYYa"
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
