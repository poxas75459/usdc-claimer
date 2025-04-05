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
    "4Mu6MAH96zpboRvoFboZw2h2k9XNCu7imfMSLGfUy21YZpW9FnvBKpPA8u9DRxiGbuFwrsjLdTXY3RzBUnc4FuXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S1owJbeo6ktccjo5WjAxCEwUmXxTj7aM9qGeLdLmv91f3ZkgErqrHW9pdoHjEcPXUrK3ESm1UuyRc7V8DDeUQhp",
  "key1": "2sis9FXPn9xhsLB1wuFidEh96GoXV5RMBCWfvsnBoqu19ZedjjV4y4XSjUeDBUs3xUjSTx4h6nzXiPpxWeZ5SnGU",
  "key2": "5y3LRhp12Dnc6fQmeREhefxkHEWQAXBHkaX3rLyMq3obAVqU8Vfnf6BVQY8WTGgdw8oQyWsVSjQvST3MS5YGy5i6",
  "key3": "592ioTVwXaEYgVzeEqsnYRaXNLudcYoT63hSoXGG3AJDuyBz2GZ7okkTSGjk8itzhSBiADmVfWCf5RWf7Ya9C4wU",
  "key4": "3zA9CTfZiFaHhsRP6ghFnju67bxAoUxNWzx4mz9UBBZ7dC5ukCV89WH8d7JcqZjA2piKw1FzQN8gT1wjG3S5X9ij",
  "key5": "3yegnR9s1woWnX2yvnQDso2vM1CiHAGpWa1oDZGQ2giYC7MXLnmkwfs3mYaRizVPK2BmZzXCzn3GjvaJw41ZhcBT",
  "key6": "4pH7rBPGbFPMVEjpi9rNVrRYz4cBr4E5gNFgu946p8x5e1inV3soGwWUbokb7rodZCCyXKgGUjYqDkNwihW2m2ZU",
  "key7": "4GVSz2tJca7dczFxffF5NtJFB3E9KeUb2Cgr9arJaugP3DkSTk3Ufu6mMEVxPP8NZYBXP79DxwBscRqxXiKYfuiP",
  "key8": "4BYp3t5N9qjxxaF8yR5Kky4LF2Nyi4qPTVSGH66RuRhZAkSsiJFgVFnZDqGQtDCECKhcY5Q43wuaN9MYf4ejGyQ6",
  "key9": "4tjC9H6d8E8zeTWtHKeNaixdrwRKsKpP6ehJ9ZtNDumjKHvjR3Sxb9KwsuHeFkgrSSQv4SZrcZBnDKA8k4SQnrj9",
  "key10": "4ifCTeWmSHMLX5RUcbz3FpcHbLcaRxjaKD9XDn51GMnnLAWmWpjpSxLFcd5p1HC4pvwXVdYYXjrxpP8uGVfxeKhE",
  "key11": "6aTjXDg5g3ZpY7tbWHxDHFpkSZkKfrPBML9ccdy7zTr2w2vZaqZcunziKE9o97ayfn62iFgY5nGhrFC2B62eiAY",
  "key12": "3YTxYhGoDEegpQZ8dr79jpHc4wYkdyfdRzdNMruA7oLruzE8L5UwL966zihreW86Bu38eisUX3ig1iix2CrSR88T",
  "key13": "Hv82Td7m4eTxm5VKUCv6WsgzEUPoDjLX1aS4JD4dRNmrqJttWywAJNTCFTHKpsW8xAFw4dvbkiKvQuLEb1SXmU8",
  "key14": "4xHGktbEyvGHkK713aoA7TbbyWTwBmErr4pMkSg3j29kZ2U8HwcQGrWxJWWLbchNiLEVcizF2kMSVD7JkapffSwP",
  "key15": "3L8qcB24aE8itu91tWZbbRHeKK1f4KgmxTA4ZayF9Zd8Vnpuw3o1M4qvhFQxnLizMUCJPzBYb7xEq1efJKYRG11k",
  "key16": "2nj37BNeHtqiD8kP27pWTzSPqP7sY19pxL4DVgHn6EPevesPYQDqNFt16xrU4qvun79BnZG2WG5p1J3TaimhjA29",
  "key17": "4jTi9m91uNsseKUT6y1qAM5sMemFEYH3nSuzjVESYgmDiQLQMGn3psY2jWy2r5aK4ZfAVKegJJHc9xWh67HmpzWS",
  "key18": "2gbjZFK46t43KB5h3FYKjcWbEBKQtYwxkicrkDHjfMvfgaW25NFyqkSnUfPy5V8q9BUrb8k5iiS1fAhmpfDsGg6q",
  "key19": "2x6LDJvXUV3sfRiErNsW7ECfz7XyTgMyhYTzm11bwSi2vAnzZHeYdDK38kEktSoYWJYaWzQMyVvd4Phzy13ptnTf",
  "key20": "53UqdUmKH3WLLvU4AYVH3eemstcdvm1bgbvaekb3zCFd5Q3BPY8XFyMCxD7WuMSeM2EkL1qThU69NgAsBCMYkZ8F",
  "key21": "UoEc6tUPijDGatJr91352TadBRn67kwVP3JTEpiwkupJBN7yyiCXgdYaswkSLwRWz541XoUX61JouEQgjREtULL",
  "key22": "2cFVznK5mAGCem1QUiuDvyhMPnhRCVR2xe2qKsJkonvyN86XUm3B2uTdXErWjDnWJ4aEQAQPit55AJvqF7qDc2m6",
  "key23": "3YrCMBWMYAnvPAFemYFwvWFe9PhPy3jZrXKyjBfmQpR2GqCB77Ysw999AWeJEPrC8bRc9zittWGdwN774pfZ9Y5Z",
  "key24": "PYhKhVCEJq3simcuhqZRwUYNLwFtJcb47hVs4ai3aKqubKkRfjTaAopr59AojSPLr98A86yroGoiV39NbXYnnXB",
  "key25": "4ytujXcC4YHVyzeTNBAJGKGaVW3CN6W4gEnGrj1Av4F6zFewm1WtWciLPtSh7Yanb6u77NFbDFLR7Tr56ATDH6UG",
  "key26": "3tA8r97eCFwR26DCYYnbjp2KVBCL5iHTgKPusu7rzmgGUdQF1Z5xHmLki7he1wXxtAmn4gWAJLWT5AyDjUrZVqVY",
  "key27": "3H7oGbMdkpCL1Xwy46ZwhmUNZuVisLnyycw8qZrqUqNRq3kn6tkjdXaZW5FHoAV4etvPsDmvnV2NXZ5owgpnR4WY",
  "key28": "2s7w6tyN3m3kwkKd37dJaEYnSPZ7N58G8dMb2K9a8u59a7mnmMUV2Ud1gfNsELQ5KFFEPKq7oP7Kyjuie6onSqzQ",
  "key29": "4WE17yrQM9RQaQ55vKxp9sFQGoC8LQty79H62a1JXV3cvPg67qvCXfoy8jJrSpChEGHWgMfn9bAeaCnH5amMJ1yS",
  "key30": "4xJmTcp3ewedzZNs6TbvMXeZZ3xK2MkomVLMcLw3rWf2QdxF2jvxuGk6Yqhhx5mTfd9SM5bXju9wkch61N1ZkrgY",
  "key31": "26oTBQDu7Kbiov8kc7RP4K6e793LaQSye2qzVcRVCa9jkmrUKVCi3uu8aNHJnZ7P29Bnbs2b3gZ6CfsCVA9ejwAM",
  "key32": "2w8XGiCTgvrwzQ2QV2enzSJe98i9hgZoLVyWas98AbCrqJWTcMRSTUQ9yz48TF8amASfoHFifJAGjvvh8C6FhNr7",
  "key33": "qnKGSmQZUgKmBcQx1p79D4gSFfauvgV4hB28wLxVRkx4wwBw9hzNsqU4yeQXPX5N5qVSJGZcrCmYUR46Q4oN62J",
  "key34": "62CDD5GYszdsYD72wNxbQNT7TGUad7qFbyqAXHb7DD3QBLwZinPEDYjmyajPYKJQnxdjHqtwgjtpky9M5WMLHCji",
  "key35": "2jJim7eGEFxMoTk4UJvm9mkunv2rsrgjY8SrbvNm6LMR7JKgnu2trnLeesJGvEJ1t7WdtZXqCWSercFMzr57gnA5",
  "key36": "4tV6333nCX77Z5KXgPKFe81DPKNgnchJ1ssoX5AvRKwcH3n1xv8TuoGVPwJoLdFGPRa7pr6WJ9tyzaxWPpPzVgVr",
  "key37": "2d3kD8u7HCXPq461p2xYivW6jxntxTu7bMQ224utb5aRAr7retQWmBBdUnJ78V6ovAJE1FBwQF8qArAihg6jf3yp",
  "key38": "23WMF9RsFb2YTsN2HnAe3VC5yC4xzMGaZ3e1Hw6FPFVYNrATeLrwHJavBPrGHXg7mShRy5LWL4Zm6kMKorfj4eES",
  "key39": "ePxkMbPdhTFHsHAf4BJmQVtKBUa9unCVv78yf7iGfy5uzXGakZePmH2xgKofCNx8Bb43vprPmyT4rv1ax5MFhSe",
  "key40": "4D3rPXv9aqyM2BHN9oKAbDD58WvE4Uj4tzw7HFAaxCREPU6H4VVW5uwq24uiDzUEYaYvzdU2N8yefrbRyXfefDXw",
  "key41": "5HX3bosaMG8fjyWFLvJajKPyG1kqHx1HnDeyYGx1Ptx6Xjri4kbShyKwGzNVNoPjEMGNJ9LqzSSJdPy7Um5KxFbU",
  "key42": "TpbSfLc3ce3WsgAaHdvRgrGdGsHYTMgXanuqgwza5vwsne5LMAMDBz2AyZvZKzQn8H3bctGZzXfMAviWVZaDU7A",
  "key43": "4JAXRGJRJMTeQMmA9cF1Bak2AgyfDiePPJTz1BTsK1CUebiSCXD28YhLNfzfJHbxeAu8rD9up7L3wyqchBcc5MiY",
  "key44": "1qUTmGTC7rxSGDTFvV91e5VRn8iLTGpa3kKT5mfKKPZbabtggZTPWjUH5bHb1kqPpfpd1LFFGDyiKTTCzp1muGr",
  "key45": "3KWonM3DasCdFV8LsJGCAjejJDXGEpyLsLKy7eB8Qf1RreuPtiHZVYiw15p9Rqkor4Tz4UNYSq7rEQHuRMkxdA8a"
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
