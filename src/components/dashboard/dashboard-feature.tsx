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
    "5i7prEKCzPpQD1gDFFUPL1BRC8TqHWWUESTLtAZtf68dCXm45XUkpShMU3kFELjHZEA8vGgu5U3xMAzDbyBvnSms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gVFoyCVG6L9cAM9bTGmkdBY21dVG9rG7unRDpWTeMeRgyTgZv4hxni3NocL8cDJ2Qmsqy4JxfiUFD7JtJhhZLQC",
  "key1": "5mm4XFDJtPPEkBdPiRuGezkNbPHnw2pofPGDtxFLF4QjoK1Rti2c2LaL3DJkRmywjecgAST7QqhfSAsvVxzAMHcn",
  "key2": "29tVqt6xHZF4Jy4ck4h2CQvkEQLkpdyhxMvw1tAEYVMwuoESGP83pfy5RVuwpHn2imVCya6DMe6rUtUhr9UcvDi4",
  "key3": "3ZDKf2p8EQYM3hdRP17UEL5Z7AZPiFUMXBESQou3JsckC3XZrVEBTmmySXc5og2qSjQ9WymwbBzBseiSJHKJTS6w",
  "key4": "2rUVDqSd5fZMbULJkW87QL49CXFmaMzkzEs4QNkpzZ9nBqFWyHoNmj7ZMYMbPPj7xtvipjtgWD7SE8knHeeHxVW6",
  "key5": "2F2BnFXLZRumWx28sEgC3D3Env2oRHPwP6p7ayujNeVEYAwNB82zgnoPo1DMNbz5vsJ63fsEnw5v7hgxAESTCkeU",
  "key6": "44bR2Me5bKrhQ8tmftcJnvihhc1YirpAUwGRGqcpiFRC2mptzdqvk2HsQMWzURLJKhRioreNb1ethV71vQ3PmRfB",
  "key7": "5HA63bSgd7vde8ZRDkZE93HicPe2Lj4yrmCCMjkcriwjEp9snvjjk3JBrGtpEnDYZyePzcVpqWzSYdcKXk7FeuWW",
  "key8": "2QfQYG27XVHJDr1x4qJNMrjNBUyRLEGNWvf2aVW6Qy8ufd3DPWRQUzUbt68Tndtjv88rawJYufcsHXsZdP99dgjo",
  "key9": "3TVRvqAEQZkf1HQBkJNBHn4Sw6uVE7RDwqj61Aid4vFooSw5dCwedKNTSR41ui84As8P36pUi7twNHFtNhDe8Kzt",
  "key10": "3PAqoYaQsqRQPzM9a9jcseSLWs4nFsveWv4Ftut4eTZKowQhaDtjnrmb8b4m54Udz9PzAVmdo3UYba72viKGibWa",
  "key11": "4pjrhsGQyMQhfGRxPRwhBSy744nFVvZWN2Psv6KcPSbUvyECgSK5i7fy2GUnA5uC7VbHwmQkPmK7gAFSSi7pUnAo",
  "key12": "2QAvSMdgo5Abo9u9aYr3WfwZjFyg6QvEnBDCjNfc46YCGkyU8GDFYtDWwRdhzrLmpMPbD1hkxGdpw2CDfmhrptTr",
  "key13": "5rLCfniTPFxqphoAt53HCYaGqN8hojDSuZkZ3wRCPcXpft1xJ87zhaYuXdSVaFrdMF2aaV34cwmwUtZwxhaNCLWv",
  "key14": "5Mci9se2nB54b8e498aUXv2p32rpDB3UwS5JY7QAAEnsME6m8CEjgQ5YPAnwM5o9HbZ63eGPXrioXhh8SBFQreFv",
  "key15": "9g1sknd1w8Fq3g8TNzVqQaYfHSdx88Qp1WLGgUbstakhHiDBWwHhVsCtAUp1z2aYkCgUik5Y4gpRbachbCSQy9x",
  "key16": "4GaWeqF7E56Zc2ZqzPCDaK6mNwwYSkBgweF3y2oUTsJ2xZontRVuMc3D4F4f8GU7ZZ87s65KMxf8uu4Y3qzCAbaa",
  "key17": "2FMa1i8r2WFETG4u3ZzZepCLCkfQiFHrSds2zLHL3QsrdXivPLtztNPTzdvHuPcZrmarWzkJhaM9ZvbTAxsZEneP",
  "key18": "4rpQ2CFkRcJLHRxFHh4kAs8hcx2JRZK1tHwY3oC6krsbJ31EfJ2RAJe59DHb6vy7sPsvYgoeQwZN2EJgixtwc27R",
  "key19": "31jKCxmh3mx6HiS3tbF2AcsmFUGz7aDVL7HRp8HGbTx3LSVgarc34UugXyLt6s59a1d7UegjDTVfTJ5Rwv8fvM9W",
  "key20": "QP6xzpKNDecCb8ekkZZgsKvj2FjpvSZy27YvtgUbbxogurj39WsxYFE3AM2JRDC6TwHPtSq5ZhihPNna7iWSmuW",
  "key21": "2bn7WzpnGA52mHEELoX7NvULzEhSidoirTNdsz3sRyiZ4TinqiVQMXafPm51cFbQfm1DkJjJCaAGbhGUL1v5ts89",
  "key22": "5AhMERAmiY7JQ1BXMfbDbvuejqjHhyP1f1rtyhjy1SV5eZySx14FtxQ1u45SX3YW6BmMNj4bxE3Hjom1oxXc8qxt",
  "key23": "5zYZpVtkgwRZtoazRpdHSU1LE4wYgFKevEvbF9ckgxzqKc94Pu7jzrzTTLqfaNkx1wkpG85Me681Z63ou45h7ffo",
  "key24": "jgTkRpo8eXu3eLHs6xshUzbZLP1Hm4z8Zhyj9uD28Wm87qQneXutB9nsANV3urN7AVwiDLVLC2vvgJ71dz9wcjJ",
  "key25": "4eWaR96az3p7a65aZqeT1z3rdkZNK1tMtp7ogF1rNYXC8Nvz5HZdD45NrN2hmBqpYyEyHDUMZkCnq9z6Py6UEu5z",
  "key26": "2Hak8mxpWqC8PvrohFjSG2QFNVLsmusMXMJowtdEsxdNBTGyraXMqs2CMfrMiC1jmjAAwJRdn41i7QGjEQTa69ue",
  "key27": "591pnuXp6DkAq5jumg5tUpKx3Hp41UYxUHE31MCt8o7PC3jmwroCevfCecHTqWtxvXJ4nFfmhJevfFDih3NF11BQ",
  "key28": "2N9Gq6ZZv4TqxdpPGees83CpXAr1EuqRLRLFSdyRh4RDjS45EqqRjfFs4zaxGBXuyuGHFWSZjDd3BNZJ8yBw5xRE",
  "key29": "2xiUnfaa7S3bG8c9V5SgXcP1miJbF9FELz72A2mYfFx9rCGeneQn3fwrSkJvdDJ52UBKLdaXCpXqRte4foAWrw9P",
  "key30": "5XM3finjbip3UzPiU1xCHHdQd9UoeEGJGwDRAZk5bp5pbRG9QqkbGxpMw9tBC4avoZFxQtx9u7UgfaXrKAeevN5R",
  "key31": "3eFdhZeckP7seH5Yq4QVXgVF1rXfGysDqHC5YFWRQy4JuMbK5A6D6ge5Pvj1JfWvWnbAD3HkTtxhaP7hnFehAduC",
  "key32": "5P8LZLg8d4aVmTHpnYv8S2nf5qbwiFg6PnbyJJZEqXdwE6x6ctxAnEEjMMsyYZvKXURudUziSL5tmTTaQNdTZhWP",
  "key33": "22ymP6dPUdzzcrTq963MGMXcnz1VSUk4uWzrWU7DBDu4YSp1oBvAFUWSubjktNcCGxszMmFKSbSZcuVUzvoD8GGD",
  "key34": "31T6MxJULd7bVqiY9oAumjmjMaxcj9o8pmN9v5VSFoB8HurCNYoD66vuw9Lbi8pHuFSHT2HvYwCER3iFkG74kcsD",
  "key35": "3L1ZLA5RAvNbnx9eQDh2DTBV5xTxrWL1BvX8NMivWq3vHwqETbomHzDmYKdAD1gNwVopxxAW9Aq9Fp97v7TQhg5D",
  "key36": "3XABMgMb3FjYFMeHnxcCsXKkd1SxLU6y3QnydozbC3Lq9cpBJYv3zaEaV3BQsCP1yPB9DNF4Qd46sxpV4t7W3ypG",
  "key37": "5Vcb9TeDZjoFHU8DyKMVy2FBLN8raC8qWbazHfNabPNk7kWhYKFu7mKbaTXNmJmPCAcHir9Vhfe7EB4g9yPUFCu2",
  "key38": "4RUrnrGw6eraLoBGdJj1GRmGy5NKVSuSDBxRZ7hJTtxaxkmq7tksknqxVRHm3GRUDrH1BDyZ7NiEBkqPdSVdoKbf",
  "key39": "iUYTxU2T8CUYxuJydmfasT5SCXK3VAoRp1N3hEMeFGZVcvke5sc1T71iCzj7k4c8sktq5NeGcvwQrPTLzQ744Tw",
  "key40": "5jqjfunXmZQBoxey9MYvYALJCao1neuqPjYZZLPbpKeVeUyeXefSDdjWHhCcsN3EGQF7LaKRnLJs7sXNuwtvoBK4",
  "key41": "2Ybw4pAHXxtVRmxuC8QtR54j2f56nKWQgcLyzm7zkEuJCVpAq1i2gnnRugqNbc6bsQi57UYygk9bzD3fTZXTavmi",
  "key42": "5WeKwWPqnpe9dXjn9zHpZMuzDtVoUS1YtwLNoqVBr9YX6SbYCAUvzvFzCeogXCPoZ7AZG5ZVR8xL7XfU8ViLzTEe",
  "key43": "2HP5NkogUk7vV8eN1EUGwrVyMYVaFiAmXHk7z9NiKSLHoJzAvgd62A9fK7odJETfz6crvdmDmM3k2BZ4dB8AQPZv",
  "key44": "4Uyboho9FnMePU7QCtMSK4vbTT14HYQSuJzL5tR3G5QNb3eKti4XacZc2KvhCxYPEu4zkHKBHg5zSL9s1A7XUAW9",
  "key45": "66oNQE7ZPHUS6zTs1qXLJo5det2MdkcLzHsx3xQjKAsmVkmmP8Z5HUxUdwSeEzPqBScwrEwQepCx6huqUQReJMvQ",
  "key46": "3SM3ohhcSNdSPbMNhz5kZGjimKgN1boz2JwJMbwmdrLunQFMZEPBErMrK6ZK9aMvN2Dmis8NEw3FYAdJhoDcJiRt",
  "key47": "4G9fjAjeTw2GnuqMyCLwNQME1HtpTzuGCJQdP1Mb77GnooWEr6mFvn57VYwHYLJvK7Q4WvrhUdpfJQWMh15iZR4t"
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
