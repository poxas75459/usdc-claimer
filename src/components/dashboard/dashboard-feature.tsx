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
    "2faPR7DgzLKzCuxCtDMyxfA1t1MBLh7jWcqShqTMXMG76Q7axcK4Mr41obCVQKPN3WDpWsN8qb9Cy1mHYBcWx7mo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CvxHjt5Y7AhYLYGL89u3ZanwVjA2idAWGrUWin1RKShvLp7WQJ1NLJJvvGhUqaDWJLWEWkSM1idSHoaafJcDQ33",
  "key1": "TdrNY5GHwo5xaXCKYVb3VV6P8JbDwk1SgUEmMdNLNkwpxXTbNazwd8ZG4JnCrS4qCKTv4Lcomkr9MSHuSgryQK9",
  "key2": "2nA4HDunY8VU9N2qhCCn7hLs1ucP7BZYiFsHksXJ57vkRXsq1ZjYmmecrZAGsSXBvNr9hKjsrF1yX4DcEqJA1MC8",
  "key3": "4RcUGiwBBaYSNTWoaGoPbePwJZKtur2CmeKfBdPMnUD7buewiD8G5aKzWSSiXZdnd4jbkhjKJaqHXPfhBjLiVAT4",
  "key4": "3i3Wt7UosHgcsBPUor9S5EmG2ccQ7W3qVnuUoLPysknsFP3kFtiRjcyGLecBzBczP7UxHCrRt5SEsuKw1VbSFaap",
  "key5": "2hN33r9tNEFvM72YNHm54PXgZ3Lfh5gxATm1HA4no6n3DuGcsyrh8BD54V1iij5HFjrPhVhv76iky9Xrrw9Dmkxt",
  "key6": "5CJxnDuvtGC2bgYcCaGWcaQeqDZv4UApcqy98Xy6CFgoNQrtUiYesmDhAbK3JFw2ZDyv6SdKq2NJNqqnNvm81KF9",
  "key7": "47Sx3fppueYDKifmxMqnj4FuAkpUiCWqxzax1No8jXFPkkwpXDnNm3pZwV6NegMYxFhtv1fEmmsMULXK35m5EoRk",
  "key8": "423GMDjaGrSbG8T9t5JPAtSYnEBTRBj1dEBpqibvkkFWgGYt3HK4DsqxudHnUAFYb8qaehgYerjoqrwHiUHKgubi",
  "key9": "3yxwJaxk87GsR4FVjaX1NVU913ZL84jbgvn3Tr7aYT2vnTeykpZZnUKNGxo2EkvuDBqrUXGzXEGva4aABcEZ7M5M",
  "key10": "3HkaFU8RA8sNS1xxiP3cQydRxuqusKhRqX8TfcauNVee71ke1Ce4w5qYN6tCGxScsyckgFfip7KHkp1h62DrZgAG",
  "key11": "5qpPFW8sQd6ZhrzZgDtJwULAWCM3UCY7P536umt9Jm94ZMv3eVQDdrSSDwQewEJYk9749WEbwqcFwVX1XsqdCuYp",
  "key12": "6afGGJVGhewuTgwYfWZDvLiSWVoGLKTZ6KFCq9t8SBo22puNNeNUy4NHzfR6e3uNF8igd1N58xZFoP9TiCn75as",
  "key13": "6QJLNUCAisMRpZJxcXWUooMztvQ4gaJKeyRvZ3gCANubCvq6MqQWxSCWkPABQkkr4nrmnqm9XxTA59vV62PNzwu",
  "key14": "5Jax7uWZEcfzDKsiiMxGNxLzEcgxvkmyGTjA58k3sceHS6eJLXbxHV88QEj7HnY4htTiJFKpoxBC83xdxhNndwhC",
  "key15": "f6s36dut2GcR4UHu5747JRy6wjypkY21zJYpbHQ4zMC3tiR6Z2JevFkJF2HyNW3uefzLmpRKkmvUpiNC76J8edt",
  "key16": "4ug4GFynujNUPLSKb2pPuMrwPQBRMuDJDQGy8ViHnoVdBdebFzvtHzHdeE3QbHUjmCm5YrvKDvQerjU5JAsVEhaj",
  "key17": "2PNpdYHafDsJf3MxDNLdqvJCu2ubMgayAn7HWjEJWui2w8v2yGN6iCfJmqtdQTLQ1CNu7wkyW9n21qjhcLb5fxJu",
  "key18": "5tzFZoiCdgUjdMKbTiMn1P33F3kmG8KwUpoHSfvBRfNGoYzeoQqSGhLTV8NYscvGb74Vk7PvPmtSFAbteAvot6zn",
  "key19": "3sbTCQtAw5TdGjNxGMkn4ZifNsWHEmCptjuYxoBL1vJMM21pjXMPf3t1NQxtYPiu2sTaPvzjZoUjzKPbvVBkM3xh",
  "key20": "2uv2AVPRQ3qfDaGQLLJDgLDCPoUmBCE8vU9G2wXpM3peXFJUGAcjoFunhZ3C5yZ8bQFVDZVG1FcgsL3yfoyziyB",
  "key21": "5wF1P4VmFSPzMtYJXYJnHdeFMQeM9wziUyLwi28Lu8DX5BdvT2FBaX4EUzFzU5TkJjGiZwL3fKJEyn4eKB4ydae5",
  "key22": "65CPjw5xwCG28KVLERcdk3RXrx7jcRmLGHmSCUYdPQQFsjfcJCdUQnfDcz7xYhCiZQUynLww2wSUcFHKD7AWBWKW",
  "key23": "5XdwFq3HiLNiiDF3GCsb5kse4B36LJhLcwDXHyh3DV4pfjNtVP14XEuktLyQNUXkQbjH2gtonbcT6VrpQ9KWzi6K",
  "key24": "9z9tfoA6bfj5ZczB2nNbkQc2aNaVvKN2Sb9hidy5AqMTLhVJcYv5bvR6PfiZPUieE4zizVD3QK4sUotAZcgLQdg",
  "key25": "2xZawL2N371QuMChQ3hanp7AnoqB2KD3SGVkwfpmsx2mSfpNfdP6SLP7hdEPBD4BPbiCNqemwvyGMW76MScNpv6s",
  "key26": "3HQvyDuYow7MoD1rujeGwF1B5dnio14VTNuC38q2sGMCd18feRzjJeC2LRUjzhqzwGhRFeKT4UDQkMHvfutXveEn",
  "key27": "5nhgspbNmeT6tAHCMP4vaZVSZUnvMEEDVMBUaArhYZameyFRLKPfajnbq2ys26Mr11Pc4maw1zNALztaRwjNSqgH",
  "key28": "2kD5UDVaoib1hJcCFbnVY1q7tCgszewMjUHUX6TjKkuTsWrXthdZorAAXLR459KyZkr4xzKwgKyvFX9VJ39pV747",
  "key29": "5ERe257wzzgXnH3vpNbz7i9QCwVXTsfhBjj4kQjyMfmG6PYC5td9cf8zppUMpUfKS5pDDr7kVfXY5vs5fvZ8bT6F",
  "key30": "tnW1KJ6wRgrzp2K3rotkGcExrNGvGHZajbhrzoAMzBXoQYEp9STTKhUoUdftpnbwXb4wrq8GJnDBVPuvKCasCqx",
  "key31": "59aXNzxCnRYPubgDvYX9EfbimjZXbUCXxdwE1cRnaViWTaFppQ52ZGCtmqvdicAj5JG7HyXmVPmnabGnVcNFd5yu",
  "key32": "4DsmQsZw5pAjrAtAHQpMjrwhN8C1pdBvYaBhY58geV2aS9nmgpdtxvKpsQ7D17mxctBEm3tkWSr1Q6XxYRVMGnVa",
  "key33": "2iHQy1CzxLtVPqRReLMPFyW3eSUfWidNSysPRpEhTfU7jYgLGxsAzAD2HkWkssA2umtCLTFTgh6SAXrbzFk6VWR9",
  "key34": "3xC3Vqx5bVupkExjrjGL12ZhfmimxnhFbG9bwHJU79Qi5bobC93itmVrrjxBDnHfmP1fpKCjawWitNeu67NoPhFk",
  "key35": "2VpCWvbqrdNpNQCvJCtHHhHspLA43hkGdmivTwEA2u9G2feqiyDVK2TyrAjECfo7w6eagoQJq4wSnPg7DVzn846C",
  "key36": "621t5fbzQKDU6rHQJK2EJ6uuyXipp9mSPuqxq4Ay2aMog3pfjTTMvLY1vpCuVLfNKtuFMtsXx5dQsdDogpCiAGb1",
  "key37": "4xXWxgfSUVCUjrU9Mc7A6GaxyA1wgivWXsnRfXiQPv1ieGUfV8JmPcJmSSLoqtjsiS7ME1paXZLk66ZuHx9oD1jL",
  "key38": "5EUkz5L4BVdBSrN9J9ch9Zz9sEbzKKYy4RCXR3mpWF6ZaMNTx4nDTCrkZgW9NBXUz59WNekdZMaGVP6tVX4RHwVy",
  "key39": "5yYeHWYgtS2ufsT1RgzCMbbjjPHKeuMaawyXKwwDUmLwLp2SbrU7RgQ97RoFDbCTPrMSGRDSJtamfjqLU5nrb4QW",
  "key40": "2ZzhYsnfVe4dv9d5a5y7qQTXJW2La2xihxpQmsP5XpdQmJy8Mzn6QngsNHJz2NTKWF8zCj9EyG4M9SzAgP6uPptE",
  "key41": "o7nT76Y2x8kYeGxCmvvaqKmGsXRC7PtqHHfmFPWtdWMDKqxcpxWNGZZHA7PYr1gssjQnfkicRJLnyhVS8ECGhTy",
  "key42": "29MuE6m2YHrnV5gQQxGRn8pJdVwGF6WhJkhLbLBCERmYXvvabSJSYhtUMLHgFDQhoJpDYPB9XjdFvyt9AHyfteSn",
  "key43": "5wD8Lq86GLZJJLCiCP3mMFUjczJgFiJzV7o5moWZ8uKimnZKNHgbzKm5zbrRtcquemAchXnicCsCo1g38EdxqzjD"
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
