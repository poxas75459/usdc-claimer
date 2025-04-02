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
    "QxYbUTzyMpf9ioQu3D9UnNfPuafLg7VS1PAXE74KTpboYECk16r2ePF8WwuWRxbi75pL2gWX6YY9YMWUdUBuCRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NRaxxQgPMKFUhdytWdtV5WTJB9VjMG1ghAo1HTKyZGXttmmGNhvqiNHYU6ZUXaU54bhMvfBFuB65N6CxFobwooK",
  "key1": "2Exzz5qVmQVULv5TM3fND4DLVe44ayjR9SfLLCsmhzL5L4dUdVRVHE8Ru4eRNMxaPjCzPSUpaChYdwijm3JJcbZV",
  "key2": "2bujNX8uXPcv2RyhNyug7mMzXDM4xeF7GnM72ZXYePzPpoEijAk2Zb8bBxhRch2WEU4MmVoeS5HhNETTmhvAXnsE",
  "key3": "2vQdxjhwHjL1D7rZFrtzP3NYpc9ZryxZ4vpak4AgD8QtctUNhqvjihKtt7V1ecaGu8uyNXj12nXQA5rnxtzhtv4R",
  "key4": "3145CxrVGYGpf6SZek81VQh9tX8RNikWtGZcVTyywde57y4T1BByz4EosHruviWZzqoeiJVHnZb6mi66XRjnetuy",
  "key5": "5G8p9HUzAFFD8vavXtyUMEm8qfnx7sdbj5fnkTfbibyvYzMcw4b5PPyh3WwJPd2pgU6iDnnCKzfjhwpMnPc9yKjJ",
  "key6": "55JBt3Kf1d8Gx8UNAofpmLhc2zvQixMhvKX35B9MSgbcB1pWmTiDvfkbY8Q1PZ3jYupad9fheP3BgArs8uRbswqv",
  "key7": "5atrWpyM9epdBVkbrh7A8cJFq76Runobb6B9EH1YNgjcgX9y9P3Dt7wC6xsDkVkwHQ8MfJLiYpKSSaeYCMZvVHEa",
  "key8": "3ySkkQeJzPb4m93CTUttrfy2HLu8LQSZJTbDA4U9J53no1CK7rP2wRC6Jud5n6pqMnKr4ZNGJPDhYXUzcMcV18c1",
  "key9": "3xJKuufD7K2irCGjB5RhyV3XafdsYkjWpcw4yZKV79ht4L9keW4ZiZ9d2eusSVdYynkDsRXs5YMoNZufWxgi2rSH",
  "key10": "5hoFTHzqaVoNs7P743MBe6NiEfwuMrJKFCBgsh4fayzKH6By2kiH42jxqSkDbyfUHTp8YqH526k5D1kAvnPtuxdT",
  "key11": "2NBXSXbRKn3RPowHFqkapGWchDpzBhDHDDCZ2Z1BwdEVmrdJ3MP2SyarziiySW1FMFaNbh45nqeV4GyHdLjWQm5W",
  "key12": "4oZWfC3xHCxwm2ZS64X3ifW24dMK3FCuYdTrjJAtRu3UVoJFfLjnVF5BtDFaUS6EiYXSw2QNxbkAJWxQ1xg3BQyy",
  "key13": "4kuYH2PiYX1FtfTiogbPhcJTBTG4xDYDNKqD8kDtf3s1RqcNYvF1GJus3YmjoBAKavrBut9jVNbXidUCokFjCUwE",
  "key14": "5U9vt4ZXd6SRtadE9eRZ8x8oP191zUSHMyez97WhBc3ik8futCywvdbGZFDvJBFSorf58jbHqwcbWg1dcVjKr769",
  "key15": "4bhKYPvNBys6xWPRCGbThVmrpp3tP89bnDwk64FP3Rq6ZKAVUeD28dDA3KtbujEZQmcitKw1Ue5BcQoTqUaGZYRC",
  "key16": "TDYuxZkLy5tTxQmezt5zFVihRYCw5mArzDcFF8FYLKW7BQsAcjXeBnXWfCxyqXtDfhAW6jB6GszCiueDQ5upA5s",
  "key17": "5RgyKLSuD1PjEVFz51u1yCyNdEd7t8msU9ZwRPVnLdAoiPoQetb1zbpT1qLqayow5SRN2qYEd1WTbZrRsEXooN7t",
  "key18": "sUBeh9oL2zmbQDnewdKBA8JcuRGXAcyQZQUhqmWSZ5iMEqXsgXpsTGDiUnBXLnMbu6XfuWk1mLz6duQDTPiq867",
  "key19": "4sHnDVCaSBd6E4w7PsdJX8Hb7vRX15v2daj1Lfs5y9Zz4Hoy1E32cWwGDwc9mGs3NKKGbDprhcEcEbLwvfonY33p",
  "key20": "5YL8AcnKoRJY2X8BryE6CXdrfjbaJgeTU9SE4JUivS2P3d9y3fw9wDovjRLTLoHawUNGTCBo9ENfhwBktYcLNBX8",
  "key21": "gVijzGG3FC32BU3eyzi36vRsFKLfowwNAhUewQev1Zsu81Gag5msUxMgyRdYwxvEbtPjfPgurTvnGQ5e3F5Btjt",
  "key22": "555DCVVZ4Zgg97UmbwyZAtCovCMexKgzEJswrqqNoFoumM3TqvUP2YCy78UYnz5Ff5daJCfrmtVi8Lx2d1h4yeek",
  "key23": "5DnYWahoUVbtxW7tu7W2yC6QYecorx6amq24qg36Z7ZZsgbmMzNcvKJ9He9mjshBZynT8gKky619cp4nRx6uA9Fu",
  "key24": "486BrWFXxdbMYjiNw7qih5d1upXF6HTMGtaxQFuA9SpZW5iFSY3R4HVSUFivKs2LPS7fLrotgeXpXMaGKxmvMjqB",
  "key25": "4bFjTVBqVWixY7J5nVR4ubYrZSGuqY2YtfP55J8vHQD9LJjD7Gm54GP3sFYHbefVX7o52SwsShMPKE5omVwyD3yr",
  "key26": "4aShj7rDaQ42PGmxJGDCivEvoWmVYoeio6Cvwmu8v1TbnzCJ7Pf4WoZZeSkMY1N153W2EaD9iwYmfnTxdd7r6vCN",
  "key27": "2fzKeVHNT6rMSY95Be7tpEmyvZyo9f2c2DQFbZJNqSAE99szc2g4TmktDFf4uM8CeewcjobMShmSBRCPAELMYHup",
  "key28": "4z1GDrMrFEojJ6K8T1bNhkWAV2kDT1wBZCYD12Ehfa46CBSrSX3cnRMXWM92kN3AL3EF7LJhCEXofSnLcLdosFfa",
  "key29": "63yBP3vdDztd61CPjMceNLczAehmTRrqaRxejGfuCTje7xuBCd25vn3huJvwHBXZ6VjCXUTCe4bUziqDNbqbjQ9Q",
  "key30": "4sYHjCp6VhrQwb3XT1dUGna55brBVmNmjqyCtrpc1LTu8M8kiDdVSfk6m3KzMVqxQUXAje687QMz4bsqN9ty3fe1",
  "key31": "47QqtBYBMoUCk8VyF1FoZw4niSVWeJzb8UvHQy4XTBHhC5KJ2FTCUfo8zycCkKmDHctriVyrM9ht7a5JjW7CnnxB",
  "key32": "3N88NWcuWiAQXdXdiHS32WyLSArgmonoQoe2tnJD2nJiNXvH6YyZc3pUChAhFVJNdeLkkRuJ5u9vqbCStf2GBViQ",
  "key33": "3rV7M3ifctN8tSG83uCBMG6QwdwPrRWv1Lii1vocNp85jxJ4ggycgBaBisnR2uJTJDQVXePrtFi5aCriKESwX699",
  "key34": "1xAfXvKPQesGXzq9h491i5rHCmTxYUxnYvogf4h2mkmJ4CiB3pWq4uBMp6x7ZNxeDcSqVWdEEByt1FEa1YgqgG8",
  "key35": "26NP52zq6M8mQUKKXaBYp1HtqYNPkJi6m7iNE985A9bdD8dL4qNtdVi1bLEZP7ystXJyystjHVyPvf7X4JVd7gNs",
  "key36": "4R7JbxMp4WgDe72YA9TFaEkNrCvTNTsDtk7mYqg8Ls3LUFy3eAasg68wFDnm5iTxQR4JyaLX7pxfima4sm2RVi7T"
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
