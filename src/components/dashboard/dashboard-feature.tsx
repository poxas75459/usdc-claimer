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
    "27q1sbBhyinTK289rBdjRVZVeKQEetb9pSG1eLbD4fgxtLwK7qtFfCnFTqnEGvYr3UNgEDuzJ6fxg15tDxCz9MUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S1uebbmy8MvHM2wMtPgsLASJPGDF6QBdVo6GoYbYirCzKKznNee1XwCSK75gjGrn9s1MKeKUSG1omxE5kY82Qa5",
  "key1": "49LRWFS6sT9sEVjSVEcyG4Ls2Yb3Bvq7Z2NGLbbwB651QhW6sj2MQX7uv4czvAp38dZ9pi6XscirpoqqZCx5a4we",
  "key2": "2Uc7KDLpff7JMe6Jj6etwgfnFyJPjbBEebo7gaZWCotiVGwDPeRp3GSkA1XbEYdmEgSof5jZjMEzXAR9bYP1FNDe",
  "key3": "3cPH2MT43pcx31yqViRU3aRFVKFrNnjwWp7zDc8mKv85krXLmjwQH4oWiGVcihuYUoQKPDkmazRsbXd5Fuv5Cyvp",
  "key4": "2JoJpr3Q8iM9Qcjkfu8R9yn4hcJ3rVtC6T3XE2Dj7Kg2bhUSaF1qr3hdZhmQ19QhUBMTe7QmcDmPArjDyqHjrGYN",
  "key5": "SMdEWKNQFRxrfA5CHssYdFFybcFMup6VDGZR2Fp14kFqAxDCstXFJpkNnmRM44f2BHZGjRj9W1BGakaYstEUsjR",
  "key6": "4Hq2H7dok1ZEPkzN4wJbyZgwwZyhFhT2k5nSL4vXjz22jW1gMcHktyBkLT1gABCvfNDFRcYzYRjSmrvnzJie9E9C",
  "key7": "2SX4wVy2unKCarWzSr4jsSeDoC9sYqagNKewFSnd11jjGuFymP9M6GhKgJMp47g4jaPnFpDkpYR5BP3UkLZZgk61",
  "key8": "589SpgiKMS4JfEazdD8n3bRfyvhFLMjnsm5EM1yWCMAAhFS4ZRi5fMxzDLmP8dUDh6quF9Tm3rmTARgxxtbWCvdW",
  "key9": "Qga4EQeSV1SBDAGozL4XmP6J8VfR58sCUwBTrBdmHpGMEeDiyokNvdgHDhdZaPg187Yo5J9q2413cCkCGHCvNDf",
  "key10": "2StMper9ZpHhE1BJ1cLm5no79dTsu9GJnmSpNkBNMpitq1UMzJQuA6ViGYo7iiYtfLsFNsmnn7ZuTMMLc1MTxBsx",
  "key11": "65E8RznPXdFptGFdKLNikdE9XWkCx2uAFEt4vzk3GHAwLzH1eQFq8CYk66m7gYS5QihBgZGZ8m4MJefyYYish92C",
  "key12": "4PNnjPqjbxBztQBNxKrYtWnsHZk2cLwg3PafrVWWPsRhJBrWKWgCS9wu3w4YjZ2azTo9abKaRNPFrK16dKmfiHJm",
  "key13": "4v64toYawpjqATw8YA2drt8TNhiF7rwar57hZeeSxJJPoyaq9qqsXgiLkC12uffATkESMhah63mWnYvY7H9F3Xq",
  "key14": "ciJGpGCXTX4Jd3qEdQTo1vZCg7zpEw3NnAAuBy3nDUq13Pok3q3Ft2a2zJ5fPpjRYMW5kjbFon6DRDTwLcgtBJd",
  "key15": "66B7NqeziiHDxxcpED4e5LXcqQ6fAsVP81LtU4JvoAfFTphVvbHtSd9JhJFYXMbvGcobATXcacmMuXqcwTRoyApR",
  "key16": "2vUxadAiV6kHvCeyqpDuN3aw2piKUXzhCy84zj17pdx4a7dmbMirWt3jEqBLWFfZBSSPETsZQhG4Cdq2z4ULsJ5w",
  "key17": "3jikdgnHq98DkQYQa8EmP94LLTyxCF7pduiwwVDRANqA6YE1EYmWKoc51n6CpTy2676A9EY2x2PFmTD6QyS4zkNd",
  "key18": "3qg2UuyLaXfNBb1hM3UsESB6pe3GjTspZ4ZkZxViak9fb6QdHu55H5JSqQKPgkdwaa7iUQfHrwVaX8mU2GCfG4PJ",
  "key19": "5QUJEfCNk9BYSfQZiq3Y7zk9agMegHamwJ5yYuKdmD7UYMmgNsBj5qXTmgK8RM6gTZeXbvcuCVmQrrcGnKHAwpfx",
  "key20": "47qJ3o1WyygBDndcz4Lh3p5kEhMYYuP8iwAyfsDdwH39TUdds3wPsfpvJnn33G4eoW7p7xNKAEr6nRuSAENxQCeG",
  "key21": "67i8Fyzotd5HavayRUhndufFonSG9n5UUtAN5q9TDSfiighKk3gRyht1gZRy5Hvp3vVTiPe6TfKLDS1RHsi4t1XY",
  "key22": "5MVMgobkmWhXg68FwhTptWJxjK8oSNypWhaFSSUeeBLWFTtMMTCHsGu7QNJfVQt1yEuiQaPZeBVPKpW6GQBgMEMq",
  "key23": "3faoACLxoyeDfsHhtkS3XbSxj4L4hZMUcZU4zqs378P1TJVLMfsfYaXJu5rHYXr2ZSjvbop4qcPV1nfeBkcUWNYE",
  "key24": "afcSPg2sWycWNVv4CtCeRQht7h4pEGyXgjHDDQdx7AzMDWUPexSV6CPSkXUpZTjBqUhB9grMy4RvZMazME5DoPB",
  "key25": "5hLQzv71An1rKUzjHS2rs7dCe2s6gr1SDizaKcoWqAMg82hMNk7JHNPjLT6a9kWqzcMTscz4TLqnqdn1hPkvWKfr",
  "key26": "4zpjP2uzz3BmhvpNNm9drP3jp3fiRee7V3qeMwuLLxKMDtQXGdvwkk4CFntzKLTZEP9phfh5DE1MFvv6SDetp3vm",
  "key27": "27wmu4oxA8gXv7uAsY2Bjf3MNgBQXt2uVjiJABqtJ66RxHVFd8xYnBpsjzQ6zFBVbqCRpfuA2HsQwupZKh2hrbh9",
  "key28": "42LTootgnTBa3hZWwpQwZogaxqnBkwyE4a1NL3mtk6HPxA1H7kRq9LqQBTVdJ6DyTiipaZ9ki6Bj2tC2qzN8e9Fz",
  "key29": "4cY5K2e4ypG63RBDgE4covUtQ33awVZXqgnwxTJs4FDXcN4i5enQCiFL2ExmLbDxo9STNF4xrcq2MYZt4JYb2uww",
  "key30": "3d6sLvTFmmybQ5tmTrjvFFsmbFCFFFtaeEU8ggoGyBGcBR4FFBr5uppsGf9ojeWmWKLgaw7ScieL4PdYg3ojFGJH",
  "key31": "5pBSz6qsMqWF6shQmHVh35UK646SxfczrFAfNj9Q9cYosSJwsSXXt86u5CtzHzzQijvGiGFtZKEzbMFsTfyxYnKW",
  "key32": "3SfUatwQm5qtHPpGxdNgJSpzyMmgCTYstc1186hrE8Nba41rr1g4bXMZYTbgwqMxvzgJ4HSa91D4sJnWQi8LVpFX",
  "key33": "cSMC4ggYnW6gdZ2RxXJgbzRpN5Zh2e1ZZMfwZhw8Ds6NU44VqgndosZSXNoaLvgXbn2g32iohZuNRzXpMBB7NN1",
  "key34": "2cJyX9ynP26AL57NGEQY9SfsViTG1eDYUPX44Fix2avi1ojtMfP62FE1Kir6z8aMnq4ica2MpoWrGCob79Pbcm2n",
  "key35": "5JBY8kwz6NrseEuuMkNhcRGzTW7rS9yK4UENuAa7Yde6zfYv5DQ2g1Frquxp9QhUkN8rNA78jCAWxJw41HMmcnQZ",
  "key36": "3CmXqGALdfWXrVaZfbnGvokoQcbBhZN5LhUr6JCDqD2NQnAfvqDBeGS69ZT1N3V8h3JCwgDYzMuXGvtcQUL2TJ8u",
  "key37": "373VoFSsdNB2xsTz5VNQ3S59gSXcdC4jQamTgjd8qmYkdmf323NjcyLrBjEwsHdvEfWvLKte3YHZRAkKKXWjE1y7",
  "key38": "3ZQfZ2Yubr7ryKcVsTKAG84wLQiuwdrC5TCUJcoekARHLsoUP4qgSZ3nHYMWpr2p8xo42KnoeymEfs6rfJYxKbPz",
  "key39": "3QczFKYzaSip31YDkVF7JyC3weyWY5SE94FacDDchuqRU6sLppdsir4jHEHbfhGHcjUSXtsMgREotuiL5sYDtuWP"
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
