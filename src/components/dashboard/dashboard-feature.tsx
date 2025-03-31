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
    "3t2b19xfGr2H2KQ6tGEoq3xMZVKgQkzak43ied5MmV6TJMg5aAiwwiEexcZFx1ZRdwujmpoZGUrfk2a2V7SheKaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67HgjFjiKnbXJCHnuFUcfkeVAseqFo2maDo6po6MVWVjS3usMtktVpmnshTTP8hNArYMFp13wGz9xeJvUZu4TN92",
  "key1": "1gxmQUPCz6LZLbPWhme41dnu2qe5T41cRxS47CeRuPG2BEcZg6soVTNBHcMMSvpsCfcGuibKAyCznwJGRkKDjKo",
  "key2": "5WF7QmiG3txyuVGAwQaSBeDJLYpTis9BU6gCGTV8qvASjfG7gDhjmnugE7fniB9YdZZZdNfVeGCbZzaWPiYKohRD",
  "key3": "5J98qH74EuJAwN9JkF5CJZf6rGWb18x3kfo3m43B49Ro8kyt3fZwNY54BBG71yBEzRrA1E3GHKTmzNwdjhTSonPG",
  "key4": "2MycHLv8wo6ccszXuxABnefXomaeTXyFQrDaU3asd2WjUwkctMsLKrdV9xdLmoVrj47gwHMZTzCpBrEzkRwKt1sA",
  "key5": "L5NbNKmvBQeY2D97qNXGyBjA9nwZHpeCF7n6rgTUWGSamdLaKhKuJeiVjPZLdaVookd86nR9TjEeJitCkSMQyHo",
  "key6": "BJUb399a1yHzzCo3Qvag86eTzGeiKKSFxhog8i9Zyp89jq2JxSPxNKLqc2H1covfLD1gb5ihwfNHrXzf3ynSGUH",
  "key7": "4TbvGSZoGNXGm4tmsQE8LHQ5BXszQvR596fnaVuRjv5eXKixvd5nxtuJMNVdPXJwFdRT4xTPB6WptRRriUnam6vF",
  "key8": "3SGwPLZCYR1dTwNdZTe4nL5bSKj34xtuYNNXGz652XVMSvcgwT613b6qm18wb41EXJHU81f1HR5H8VXoqEhzEFb",
  "key9": "2Fd1xzw8Tr84rS83kf3n5DG9fuPW76Jy5MD6v66d7inDN6SYYV3thgSiwpY83PYVotBUEd273XXRyKQxELptfxuo",
  "key10": "3XrLPjikfEVRKit29GdVbDqHK4Ry27cqa9y5pdcUoNGeq9mzXnCcxmPyAt66B2K4BWFKiD53jge7AUEZNXh1CRyj",
  "key11": "55X2BNgzdExhvvFz1cvuXeipWtkj3DgpQ3n3zmjeLHJ6t5NfWigTbHpNoLiin7iNPZAi129nw9udgnCq9BAkcy45",
  "key12": "4o9DDYSBqJjWLTWsXA19g3mw3FPiNBQx72frkyGdAEd5rX8ZJKc6GxjNogTzqmxZXCYy8wn6Ryo9SvAyGFkDsmxC",
  "key13": "rCoHSyRqFdkrCBudjJ2CgZbuHRHa3caUaC2fU78SC9zQmhQAWsuteC8rxhYwwFv2sYyNY3jriRMtCu9AjepfwBS",
  "key14": "CeT2b9kkXZXeLTprsyb1GhspGGEdoLVt2sXarMWB7VyqRr3PVyF29RLKjwH1ZpWD5xCAVdqnz2sJhFFL4hMSCsa",
  "key15": "2AuiDeZB3p9eFdK35MaWQbBCTfSUZcw417hpfZHhywwprMfWsGfnag7BTAHgFDYFu7hTe54uLBZwj9LjzWb1fDUr",
  "key16": "4ACt64vhGmpHWhsZdp3wanenSM3U7SvHvsvyErQsTCDWfWZGcwRZyoborB5SHYA4MtPzGnHXiLazhmqh7kPxZK8j",
  "key17": "45kAQehaLc8ckX4qtk7WbcCnPrygbqMMn3Hjhh6KKB57KMmzygVxSP4Q8K1v9tMG6zbM6et7FUsPzED72d3hevSJ",
  "key18": "4sPZp7NuWntkWgL6kLpmhxCbQ6cHc9aaqJj1rhX3aCytrNNjbXym8nH4wM4kmNv1xCmqLoE3FTsfeA6Lr92rVafp",
  "key19": "1jwFc7GSPziLHYZAJiJLzGGUBPVbK34LpW6UnY6Cgpi9xSoBwQuXxqvZFhGaargnY5N86JsvoMYjWqkMn44EB4q",
  "key20": "YoasWC8wiwcspVyd7du6PjchVueGTjxkn6cmtDxcR7v4LBW33LgM1t2VrafQbeAF7iBELhSvqApXyr3vm3cbRyZ",
  "key21": "4rMVWEKNJbnnWyKktFbGNmrx8LhB7mSb2qQbcUVnweaUJ8bMNBL9NXtmEonMK4DztEoS9jWuAMSTA6pXkWWt56HG",
  "key22": "4J6f9PPFofVP5w1pZbHLwgLu6W9vtXhobSPhcjdjR2KDHydFXkLHttwCaFy6bEUuiYz8y9MTH7i4WcjfKbAushhw",
  "key23": "4uidCxHazrMx9CKJV68yVXgBxMYq1B9BHNfKbX4ZmXvfxypZZKkCB4tDBhUyJd8nPLWafLX4xWmLg7x6Av4khQ3a",
  "key24": "2LGWqpLaq54KigTV7eD1gA7dbe5KSxNrSBNHnukJUqkHdQyR9SDvS5xLDMM2B2JjmdhuEMR4JmwzV1VpECEcDNnp",
  "key25": "2FF6nTAV1NnKenRJ7zV6rxMQnFZChf6LDaMWVGfiaY27wKAkND7WyscqYEJe3ftN3ATowXGYUS5Q1jGkjhGHNPNz",
  "key26": "FsDjHyfQMDXPm1fSEUMVGrDCHRdPLv3cY1R4avGRuLWRFPx89qPYDXyXTaJnprYxnPjeV18UTqpYAhZ6HPbQu1j",
  "key27": "5Lp2J2ikcHSxLpsXEjh6iNwD5ZUuGnVqZiaLJY6oVDhtsutmK8KFiaC4ESaSenWy5JLg5LasgJsXT9NToRt4nT8p",
  "key28": "5Rv9MQsC7w9idTKnPg9o4kfaitAMj3xPAJKV8LEzPc9gaFHxojn16PhJDFxoiu6vTsk3GHctSadWTuypPMbMo7bX",
  "key29": "5AXeuEUt6QRQBDCWGS2mGkRY7M8jXrD7ytgHAJhH6SmwDH5brR79b2awe7oxEuSPFMCV89HE9CaVJB6ise1rkGgS",
  "key30": "3H5Q7VsXguUU6q1ick25WrPg7a5zrQEU2ZobL5nkVUzxwpETjE2nb8tadSmXnqvoZa7sDQrc5MRcvajfgSUDYL2w",
  "key31": "5TkeTKYoRD1mXR3aPa3PzfDVFZ3yq5NUXZXagZgGx6NRGQ8E5haXU2EewQXDaRLiM2uDG4XpGpM6uPxHmhm6UBXF",
  "key32": "29m9ht1oFrBBeh7iVr8KuVCSnGEontFkeRgoKmF97cw8Ktos7fDuGa2nLvhTm33578jTWVk6vw55RPjNSkkcube5",
  "key33": "5FLAZi6N1pM2aUwPUERgYsG68Ue8ifG1Ds5gPJiaXQc1L52cJNx9Wkj2tDoZEo2adW381D5oHzqus8HaYoXXGtAA",
  "key34": "3RJkyKE61qQN3KhTHmCGC8RYTEVkgBGQae8rZDThRCRVJ4qCfLnymstxrPvbmEaQEsZrxbDeVegS3j895LUnxH5s",
  "key35": "5RDj2nG8gwrk4iBPi8pDQJ4wjhnGorkU9aZhRSkXHYgL3JyyDbfG1f32j98SCVEMANnYLhYtN4k2xmPC9wpDur17",
  "key36": "4NvYQXQss277PVjadqdeVHvRKQ7c926Bauz2TDStpR4ucuHmp7ZggBkwS6GTM6uQmJSUqH5p83u1L5dSupSjRPoP",
  "key37": "51sV48Wf9rsddyYdL9c3uU7ZiGg1e8emUNCTxxEV5WDaZkNpyeXtnPbbzKUhiZLy7gduJ5naTXtyFuyu2EWM7Ndk",
  "key38": "2YQvdFXvsKMi2hnH7Z1V1iuCjg7mfXwmQ9bf5pA3dTCJmzzenT7gzCHPGuNZwfT3prQDvnKrNZpEVjBRSMmZBhra",
  "key39": "3jkMSgC2DDQCwok3mEtVyzGETybZMh5uW1aGNUWHfhAZmjmvNHhinSM3YyD5K63Gze1fKTKE2Dzb5L6jk5AiLq5u",
  "key40": "2tX4gQ9o9tcQoeScxZHVndvMeFyoFGMgGsyKFT33GWnR6UNCH1i5R9YkdiJKvh6ydGJC8wKKkSn69iLRyoCkgVUP",
  "key41": "2ZWbQMcaxW6rdtmfzuJoRW6njRnmMFpAHQ8qBD9vZMMhZ2zWq3Vk3Ti777ELwDuJfeb6QhaKKoTW7XEvLFkjSDoh",
  "key42": "2pmPyHiX5hZm37CjJeEnWpQv6hKcfK8wK631Pb8KF1fjXzax6UgTA31iP9cyw1w7tVxQMvyyrM9TtaF3C67pahk1",
  "key43": "4gLtH4zkyxgo3vRBmctwuYAVkjQDQPQQbrjcjxSAB2SCbtnrB6UeS2RaFuWUKFRvdLxiLn13h2cJATjVeNU5dYfv",
  "key44": "2THe9km7vYXs3qpi1TZjWp512CSDNM5hf1zvLLXSvPubD4t2ponSMNkb4tnQ9s2qdxyP4hP5HJtnoM56oDZEY5tJ",
  "key45": "35gTP7yHdSBFsKsvbq9fy7ArUPQyaZYYp82BLWiZJAjV1iUG5eqrnrak6GApMdFQMpY6Uq9EBr5ekjezzYdApp6m"
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
