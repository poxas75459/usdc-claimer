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
    "21UbgUX2qWAzLqsJwy59nCQE1rTzc37iCmE79uZ2Pz24oGJKf9df2DNvCDW1xu7QjJhF75Uttxef1JEymAgoiZk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RxErBH4GdVosUDHzdqqUxxkv4r798eBcFRkvq2iQYXdbCes9x3KDhgUSSBv9CqxJbWmWZwHrhvDGMy3USgHda8P",
  "key1": "3GxWTuKSpHmXNAg9W4wjahgnXtVm5N6MLBxK2TMHR1BQ8PU9h1SDye9w7wALhix5c3QyYx1rpo84z9dr9Cu87Z25",
  "key2": "2DqkDVnfVSZBxWPMcEXKvNpPvVfjPhHBT7gqSuY5jpXSVFMHjfgi9pbzXUjQayYTkeucoaHKRmEkzPF5brkW74ig",
  "key3": "CB5ffiFzAFQT6a2Upc8xBJ5d4vdHhnuNKCjuy9QzfgEitdNGPacPMjkp38BEkXs2aUHDyREF2HdAetY4e7Vo49W",
  "key4": "2qmZJKeLszXQUWctcAfhVqpQ3Qsf2w8qpvQhTbgVtxdB1gtv3nxCPwXUbNCEETCDKoba9ANAzZ2FryNHJEH553VR",
  "key5": "3ihqLjJXdcK4eb6Spr3h6bGVGC9dVhKQPihevAkCrvjo3NzSAc1MWetFL4SWNihSQGpsTS3Cs7GjRFip111Sx7vs",
  "key6": "29ThrR9WGUSWpSNKE91NJhgaJnRDmVnhoCXh4EdPCsi8KPZA28niZDZGhgvPXFkFYtGSfQgqVQ86tuSyoB9gT97c",
  "key7": "3BEXmxAcuKexZu11Uh3wdBm5D1CHyn3FToS5zJAwrTWF5V4HDyqztEsgQjf1RV63iQXmUXwpgB5np2RrGyYorcAW",
  "key8": "3szyVR3z6RqWjyqJ2bpUXeAP3z2HbwM8qmJTc6rKaaaYackEpdsNa7UN2tQu5y7X2TdB2zxvLqF9MvpiB9f7yfmB",
  "key9": "5b3RkidsxpHTK46bXEsrLNojJKZ46Sz9EweutjG3UBwYTseZMyUaCyEBS8JwgqfU8SoGrjQmTKFVrgoudUMvPJ9r",
  "key10": "DqVpUWVgR4zJkGGfCP8DXVgniEvk34KY2mTTdcvRwr6StRUbgASNEC4rpcie1cACPjZzk7H8JPhHRuiDbdvVzHE",
  "key11": "2HZbqKUCjZCLE2Lo45yFXfep4nTtE9oRCSnkn3iUAtLiNpGXSDFRWhZhMBqbVKv55kAwpqbpkKEDwzgaz9q8Upxe",
  "key12": "4ifKCR8vpL83iZZbf2TZPHagczcjFKE3bCm23hq9XXqhh6QjKfyTeyESPShth2D9wsM4gDLReAkA575j8LXWui3F",
  "key13": "5NTtKLeL5tyYJLC4xvJcNfDx64MmzoMJmu6nbHRLkxX5h6uoebZMcGNCxEDeBXzQrXBnH5BxBTsqGNeSZWTPobgm",
  "key14": "nCM7vyvU55MtxXkC3Pzb49p82pTea2SPz6KUNmCEVaZDNYSNSyenY2K6h4FcjstBqPWYhJMwhRw31cfNhXdLr6Z",
  "key15": "3izhicHeSbuBsE8DVZ65MsdJU3vHGY3YZkVqVUbuP1ow4M7PcCHxhhKySJAcnkad2ztcHWmK1RSWYFPMoTdwBJK7",
  "key16": "4xP25XaYfYnwrWFXuG6fdLj5xsHvbAdTwaRSHT6qmWvATJiynpV6AZCCkzBfhTHTuQNbbMGvV3pFPNbmbNGKDhjP",
  "key17": "2QzE8QVBPQ7UDgBj2CS8PR5gqShooPZ1mdgKyYQfc2ErRY9AEQXEbXu88DdoGyCNS8XqfNfDFmJCWufnRhmWdE5V",
  "key18": "4QXyweWKeK8gW5489fAx5gnAozeMmY3NCxUwsdAj6ab9fLinmyaWDYoc2wpbkHvC758mxCkA3chdTRKDkjrYHhZ9",
  "key19": "5Up5td2KgU8jfxDHbRKkJJ7WTTpscapmfk7ANmXtfpaFA9ykBLM2yczMtSySN1yMaxqdQ4AGh7ksnEmVBsJrosbc",
  "key20": "2MMnKZa6se8yHRbBbVbXADvyfkxcr91Bhb8Qobu25oHxogxXdPz6KKqb8x6pBQLpz2i6VfWhQccErRgZNZPUwFZN",
  "key21": "3aF1nBZoVHenVUjZjwwookRWqvh1mbc8Uibkxf7CF2Zxvjc39iMKj4ixQcKBxbuzmhYFZQtaiJVaJK2ESpBXP3v",
  "key22": "2s89WZgG3MUhDGJS2hn11bLUxdkEsnfHSxSfvNVyXhEsr7DETCCGdMDiJatvnT7aozi9k9SJsAT5hNU8edwUiL4g",
  "key23": "3oqu5Z63mYspoeoYtdwoPr7Tt1CtxohyG2oJGUzdYUuvhWfcd5EtZ5gWGefdrNcxkfT6ZcgxBnwUJQpuVhnqNfKd",
  "key24": "3Ggcu1bR1gStMBk1fbRfDvghvyZPkPQXJRuAn5ZkrWCpShTbcW93FTSMiyczLRuNoFMgMM6raN7ef4xy9WYk3Jzt",
  "key25": "3T2FZG2aA2BobtmKBJuHgn2FE29bwkvLyaKeLyLkFf7FFUjrSuvaa2nthkUHbm9JsuGmfWeUDtAvPaAzZHtGLDfx",
  "key26": "4akmYWF4eYMzKSzyDZ7n4WFFpBbYMxSGbfx3naXWZQxKhjKicqb33JhuQkKp48eShCoBZr9YadfkUAM8PZ3hmM3X",
  "key27": "5kzKqwryMAw1WxVJAbA8egAeY1JLTn6PpfoiNq5Ef4oGtrLMyyyY5hRnFct2GRthZRX9BXBW233e8B62DzPcy1uS",
  "key28": "EkEgmc9UbLJLW5tBvyLwjoFxAgyxDTgLJzXNkXEWAvCWEDk8RWoVxQHM9Y61udD36AYwDLpmA1dP8E9ZWrQCmh8",
  "key29": "5fw7kDz5yunrr5adC2Nx9dRNbruFddfxgtoQaR7pbP2STQnp4mZMgRegEhMLFB716mubbf7h3tgsVt9hUALkGYe5",
  "key30": "5jwmrJ51TR1wjGqo512kAM1edSrukPn4NfdAGAQteNpfP7b7Pdo2hoL1RkWb4q47u7XtUT2ksCrqFMknoNCHG36f",
  "key31": "4ZMEZmPQwAWV14N6M88gvLWCtMotEAmu6UUCFfVdoFCEzwiZt7PvtkWbnLTweEqyTQBN9v88VT1T6ydeLdi7dXCK",
  "key32": "4R1cEgYJhEucvigeKgxrmVvx6K5DULTXufsQQyN29zzoFAFL4kgRphtb3iEuQoeFpwz2zeCYdkWK1T5zhBsScprf",
  "key33": "rBVBgSfZh5KpVtHCS9Q3291YskTr7zs5vZdtnbYoDuxqjvS4eNsLhV2owJgsePQFoSq3xBz576VtdB3zSASBedy",
  "key34": "JdcAzWzQyvw7Yfk7na4PCPuhcAGHo52unoDSzYaiM4WvbhdnFYaJfjdaaKFoWQGK136pFNWSQ17kxPbSRyWBFCw",
  "key35": "4t7Yk9AGqTrbxayNq5V2smxkAZsLuMFpNMVz9WkGsSG1ry19aRzd7WTM9V15k2iF1Hnxzyz7WZZzywGG37Rhwsro",
  "key36": "2YXDfDGqqoXFtuRoTG6svDsKWS3qymCJZhNFvqSNMhnErWF18MNNgV8tYZHA6kAX5DZgXCnr7GVKch8rTr1Ck5sq",
  "key37": "4gWY9okW4c89rJBb1geR4Mz3dWX2b3AL9krtKCkCWCP9xtmxMyv35HaZwUHw6L1JMjss5H9amAVHRVBR1Bb3J1Q2",
  "key38": "65p22LTe4MRgYMtouLmHehhzZDZbgq8LpqMchAzcKweXXrwU2iqTs1bJgsJ7ihgmiC1ct4bSz7NkZ75BscPEntaw",
  "key39": "zkqmvQ8MZ36ZzBkbxkLQAimME3HyHiXJw5Cc2gPuuJhusoj4kD9g5X7DPLMbuYUmhQrvXmfEouzc4Afzu5sipTb",
  "key40": "2HWaG8pyu65Jwd7gxcdmY4ENwsndVBkpuziZHyUYa5ru9dgvAdVWu4zQMeAzkbNaJJB3LZBK7iX7wkYpG4heS8ya",
  "key41": "5Zp3RB1zxYSBVw3qL25sxVbm5MPQxHQFn6SpCgWr3LzX2yGDyd8XaoNMq6k5Lz6wfmx7BjrXsdGsoi5GCQVbv4iV",
  "key42": "29o9WfftWNt8Y66mWYVm6ejGQKM5aifQREHuY6hsM2Hor2g5jbV2gPkEtPNSsSV6F5EogCT3mJX15vogccBpQt4i",
  "key43": "4pCvSAhEgcHagt2EeFdjWRdUu7TbsvYdRjoiFXKSvzjmxfR9oKxLnaGABJWQrTGUocUsrwDub6ueFj9eA3wXHFep"
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
