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
    "3M32mstxBsP2uJW1b5BGc8ztUC7nvUpVCA2625DTyt2LVDbDSsbdRmcZG4Hbfc3q2HJFt1Mv92zuy5QjrqjmJuFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z7ofinSagnDLCnY2bjuPeWYDzQs8XnitgAA3r2WQkqwdUB3Q7qhuKZ8sM6BM6LqPLQ8bLGvqy9zac8nBAPBwbmE",
  "key1": "2PJ9JgaQd1ExXQH8yTvqisb87G7m1QyAGhXNqDSFp8yFcRoLojsALMjTb83PvBnvMLxntEB7gEz6A2AzBLNjrST4",
  "key2": "YFwGrw8zX9WybgkDYAj1WjMTEGrKrMZ6zNWWq5LHBdiPjoea3SLWM4BY31Fj9ZLuWxAVqCvSZoUnCQugoFFtvYs",
  "key3": "3RyJzjm7YC93i26LZ3Ja481GDYXT3rbNfKJfHpD89888yPebzcdUix9nq9PRYhXCfxvJX6G43EvXFxCFNQW8SLqR",
  "key4": "2nsek5mXeaHKNQUCnjrvJWmYpnhZnRASzWAjep8QaBPVX6BKfhRQBAdJNUSkWUaM9XzTVeMZeP2tbnsdYXg9QkFp",
  "key5": "5TLC7mbh5U5XX7G7gEjSRmXXzYfRhdgqrmDaUUBsq41CPZh8Q9G95znHiQ8wyvoeSh5UE9aqsDcZKinx4qWaz5y1",
  "key6": "5EowGL6BHB5XfL38KjxrG9Wkh98RXzGvrtentCUBtKNfchu8u6hnij2mWFwz5P87qmWaKuoonfhzcAq893X4gCt",
  "key7": "4qunRNRJ3JPNS16z9EHFUufWvtS62Xa8dnHpxPhhCvYCqGSFiwNGhNLbBpKMonqvb72WW5kKPqa5N4VMdmeYRmrb",
  "key8": "cwfzL22MJEaaYKeX6QVpepyJJ3buJFGnr6GTTp1N2zvYgHBf7NeiSTZhfxUuhuY3zs49SzKeQCdPaUoMQs2QK4v",
  "key9": "LSbDi6J69J8XZcm3yYwNoatEYnjDJWpeSihtZ2ASAdU1avKd3M1rmZt2nDE7ys7GqscqxBKLyjr15LyWgtQMwPj",
  "key10": "4aSqqGAnYaTnVuqphD3N8kFqHfR5jLRx7Um1V23J2evMyrT7nD6mNemPPyvoL2oF1Mw5xx6yRRqtwDufeAXKQG4d",
  "key11": "4hcQ4tLYeYDTU6fMaTrQeYaQAPLMhC4UAcn9kEJ8WJBz5QEimwVkZTkNcoffeak1ko6uHupwT48PqcN1XxPBkJc8",
  "key12": "NrTN4CxZhtshtAzsDmqoyRs9NErr2eXdvSMds8NVVK39fHBivcZkvhFPspmXJZiBWzrZr1CVs1dCZWC9R7Rpei6",
  "key13": "2nW6ZEeZ1GY67ML1N3Bzf6kZnMFRUoybapxnH3UwAMUyTM5oLjuCSPP3hMZzRhpJaVjuRHHBEy9GTnLAeM8Qw8Q4",
  "key14": "5cW7cCsnEQo4ncCQuv89GteS1ftgS1SMfBNDHnsx14wvfczXbws8TbmMMu4ybv6pc242YPk7su5DPUPpR3CHVP8Z",
  "key15": "2xyCuTQ8Uj8KAwSondtJ2jdTUFwK9JXHAU7oLp2mqjjbqLMAkxvjUcA2X9QodLtN6h6NnhbtwkuSyrKyrmmJyQp",
  "key16": "7gnFmyfJYhjL9J3mGbWusRMVcSiKr3691pTKiig6DEMThkJsMpVydKJN5HvevzwEM3Hajwuhnt58WdPjgpzUPGk",
  "key17": "4qK9rUjzjMoLuhnMkt7DiVQC7PoUfgQRAC2D66b5eHA72tZbrtjj5Vn3QYjAujRfLBWpk4SQ78b1Fg7G3kkMLHWm",
  "key18": "Lb9guwRqConZzjF6vFnkcm7X8dJvk8NrW2FqxzRfEcxEVYAFg9VttWUYvfjpYDQGMDY5o5WsCZJp556Ewgv5ZYK",
  "key19": "veAFZTr8AS7HX8XWL3ivNjUTsGKsqRGHh68iKyvEbZCBPu8L1wYCzeAmSPDxGv19izvyEd7tgkNuTRJw2k637LY",
  "key20": "4tYFNBEhUPnwZCKXvf8EJnvxdSQ7PAbQa9ze4b9Yv7ybFnEyn8kbSawCFbmJuqppBdgzLUtA2AHHfKw2ttAUfExg",
  "key21": "3WvJ6gmNjtYrni8jsBR3BUaEeWipZKw2i4fFD2iN5tLSvCmUMCqqeLz2R6H3HixZsVhDUTWoLVfgjSWWzcD1mcj9",
  "key22": "4FGuLZfGqZEa9pf5gpXMKCSm72roiUepZxjiAyXgoDFM7VoT2dPcWgPT2nHBydXbpxQAoEDsaVw9M7LeYKNa9ABL",
  "key23": "2DwfTit1eicR2LGXvF3vzSSgYzr9psMLLu3ruKgihEk2Vgig8GHaZtE2WWTdq9PwtxFamkev2pnKw9HLQ3X3Y8g2",
  "key24": "2rqbAyJJdxoPGGLGBi9QxAUa19FLu3MMJ9fp8uPd1x5JfMTESPc7SM8TEAzXDETu2MUeaw3cR5UPk6YwiXCRkaPE",
  "key25": "7tKuuMgqY4DNGkt6gtHuJffxKSNHmM2dcpXhSPH5qWuUdnztTEBjwtVt5A6Exc6FhXHuA6USX8abGTdggGCrhd4",
  "key26": "5PvTQrmjoQFUQKQTgBpZTiz5f3VwH1NVrQ6R1cuNVhts3qVeKoPgmQpu1dGofaQKFUveo2R8tRoNDG8rRh2hRaL8",
  "key27": "3XBKRJCsStB71anVsv3S673pEcHuwotRicgRdLksGgAUuC5ci94d2JSjiMBr23sNFccbXRd7KUMUdPQ246upY4xm",
  "key28": "LesZzpensgNZA2fpEJMkDou5cHhes65JBtUFvmbUk5qJ9hRoddJSaJBH1inj4KwsQommjonPi6WDXv5zPefHBZG",
  "key29": "NWxx3tV5F3ZiPj54CFigdjicqXEVzTUBT7ARSiRhRCSyvdnUVytWzLfBPkaegidZe8NGcPfr5hY8nHtam9gJB2Y",
  "key30": "3LAYYbDxbVc1v8hEsjP5VZJHqSvQATBHSYPv6im4APmsuDA6uquWpk47eKKVsd9pU3ExRL8LVT87unnF6CnNMTi6",
  "key31": "4Z6RvkEvvYL831vvGU9rL3PB6nBbRkoJoJ2EfgzKqpok7o7z7rEY2uThEuRNPqUDMLyxzcz21qR6pT2X4UN83rBq",
  "key32": "2Xmo5pJdxd9eAhFe4yeQHVhgdw8mRVwjmX1xrEvEWQYdV7nJ9kYgrG3U3NGbQeop9qV91Ku19vvBE2jVqXtSQnR3",
  "key33": "5Qx9nT4gc76ZznccnJhNGbpkCLqo2pzN9QEgxSJZtoUP4edzyZUJxsYKbxZ82eokd9uigHTY67EjRYwbenyUz7YH",
  "key34": "31UjQoCPDtE6UnXwJTiDYp1JQXQnouLz44Rb6GsUAK1ewoWija1q48pQVahFcTFsBAanRLyR1GmzZoigeZnRBwkZ",
  "key35": "45nmCdv6WaDkkvR4C89GGeCPkEAxcznyNpw87Drdgq3FiS6MNyfyy1xJz9g2bBJXUdGd12MqwAFdGHDAgKd7a8Td",
  "key36": "eP9gY4ePTKfShvHPx4omQT8eG3m2QDZwmR3ygd7yUq7qDXSGTKXTNkMg1ujwgGbwzvXio59UZg7kELiVFuSkxRZ",
  "key37": "4XVxGWuoXmYsfforKNahS8FFNZT6wrEqA9u9R4etW4nEkYasCdwrC5TiEEzkGfPST91WLAerqDumr3nQxypEtSfx",
  "key38": "3ysp9AtJRKfeWUvjUGwtcBGbKm8GAAQRUgtua7Bf14U4uEkBcs8E5sTNrHWQgwAhQoxNFtQfWAETeUPGhcmUFN3F",
  "key39": "4U6hyY1WeXwTrxPmwf7PnKZq9g3wQp4AfGFJST2NRH42H5ka5ffFaEinqCmr8Bv21F433RdbnSRgyQXwgfwLMXrW",
  "key40": "5oAZ3QDamRsSdAHKF5AnCJSqsf1BPbhZWVKfPdkmvh4p7QsNNFQuURiK63gP92fdxvwhQkFqRGKLYeZPmWF8YrjV",
  "key41": "55RpzbNb1WRyqui9kMMe4bwbYMR4YC29TjY1dgQ9i9SRA4T2n8gTVHnNkmsa4cm3VwDD8Rq8Yx5qy5WmaaQ65xrM",
  "key42": "36zTHiRLNPrfSrJ2FYaoVangMF3Emb2y7Uk7tYAx613KVaNCHD55Z3rpQcsvKojxRqMnufRXm6F9paRNaeNuhutZ"
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
