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
    "5XCXsBWAaVHBBY8yxAZACXs5pKiYNXQtSbV39pk3MEiYAyAFUcP36NzZUn6arRzFpZ713c1TseZy6LArM8y8LUAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nqXbTVmjNyjq6DMYRsgwakwSGWWg5vYaG9LuPo1Qr8E3iQ2xUiUon4XsADs3xrEzzohnFKX9MFGXUYgR3ekkhqx",
  "key1": "5JicpuGRu5MgT3ePJpULe4aEkwq259fP3XHcPstBdeVgS6Vr3P9DCuvo6vsJHeaXjWdQbiXP36fLTpiqXjZ57Xez",
  "key2": "7qhu6wpk6FBERytsP7VbqaUEuA6PGus7nYPR2LFu45AecAJXgYKHBu6AusRHKpfwHggf9TSrRzznobD6GrHCNtd",
  "key3": "AnszonsFuxjNybQLjiM8oqENbRRUo9qa8hBKyUShNgRmdm1BJ6enDarHUV91NuAXqR6V1GuwgZyPLSQJdYFByBt",
  "key4": "3eMveWnbpBVJjoFmnzU3RMV8x2XZm9XjbaEbubsyiZFMCtfZSFFvUfr2RqPJdnJmLDHCCtvMQRoeBFaBMxXSQBpp",
  "key5": "5EGPvnFcQaH5yUscdjoMAKBxeE9M7pRtUghwASiEPTKmQzgnhrcCbStdHpVuymTRDtcYNgLn6U5ky6rWazwkzKHn",
  "key6": "3PKicduTbytFbzGc29YY7rWxPw2Y7uacCjXiXZ9o8w1bv9LaRs2qCF7EVM8vzqBHKtmcXShPdvAB3fqjBsyXe7cM",
  "key7": "5rQEqLARTD5nnDVse53TMKpMw1FNuHz54emCAwpS6i3oSjTPUZLv8axFmQReUaZ4RGQSBVY2brUEAYjLUor2UAFx",
  "key8": "2NXBzrgtzUB9q65PFRJEcKDTnQtyEHnLYdf41UhckPz1PcBsJcr7DHhiY6y4VKwwjE97TQMkoQBsdUuTGsUZTfNr",
  "key9": "5CWYwjoCvGmZAPgSA5ZodpSp7nBMMQo992ASJmrm8H5MxX291mFrQnQ3n7BLP9nxzYcyWp2m4UTXvY8geSPXzXjA",
  "key10": "52TQ8DnoGtH4KZyDQjFj7jCRd4vkNF3Bz2nXMgrEbFF3kxDt6uC44UYf2Jpv82umVx2Fkzza6vQCaF7NoerVMycJ",
  "key11": "44LWhfB3DwzFju7Zk9XeMUK1PnGsbM2gDsdZAngkbwLYY8pa1uiGsHUFwQxFS6ZAagM78V89XaPjaTaxL1k1YURw",
  "key12": "znyQNqWBtfLYkbEKeHGAP4oTkVrNPTwWECdguysZ6p4MTTJEhBeVcJdUw1vtASqtnHLbmumfNoP2h33KxRSspnu",
  "key13": "3jhywJituEs2Mj4m8eqXoy33JGviqQYhZds9Vtq2Yqi5uHaQFsWd7QmacGitRGxpZChRm7buTnHDgf8hkTmb6JoY",
  "key14": "3HsS3DMunm7VyFLUdwNGLq47G2KTN9tVD8sauBeZWNd6Z566CqA8Cai7jMT244sxaptNwq25d7tsGCMFUx9EMgfQ",
  "key15": "45rd5Lv3QTNWnLpNJVS1mTnhafeid5QwKNn7HCWVZ5uwXphFLdaXszbAh6S9JHcocDYsYzXZ3cyiXhmjY2QDW1Sx",
  "key16": "31AwK6GpP4aokPb8RUpgQNjRpMNuJWQcfKHA79RPjaDHsHhY8dKKouQbLtk73owHwyxVffzECy6TiWLjeyis2Nno",
  "key17": "3JUQVNmGb48DLo3PW6wiy6G53hzx95GLunfbxwHZj5kXtFBFiBsiqRhQTcgjEnEp2ajD92r61DoixGfhFkmhBYG8",
  "key18": "4Hk91Zr12aTHwMAXZoMRFuCd933UcoKcpuDcV8n5dLD9EHjAJt97zz77daNR4RVLV6LBf39Qz66EkBkiVzTs8djB",
  "key19": "tKpc9K7gtjK11gu2YXFqpPKn4SMbkbFicLHCEKo8xdLQBxvp8ZTcEZcEeYKVY8Ajuuem3cz7wZ4eSv5KGLkergm",
  "key20": "3NXnyVr2tdVhTGHPWCdjFhuejavthupgwQG2hVVVfj7yMHQYi1UQbxg9zV6kdc5yVqT9j5McqueuqMRcFKxbGfWu",
  "key21": "3KUy2fXPPrLfCNshPdK2TgEWyZZdTwAp3VJx8S6RBj9RLHuVqxjvrKXGspuMRtTvjvQYXSMP5uzhNeaxVyG2zwc8",
  "key22": "2Ee6CpMEsPnfpwSmAo6WfByVYscm64tv8aS592oVNP8FgRFmFntKhC8oNuhyj7HYVKTQacbJZLfnKxPgYf6oBHwv",
  "key23": "4s2Y6zrAgL7fxAjUNFpVEe6NF9JKhQCTGdick1cR91PTNiErmj2uVQEtzBoitUhf8HG4MiSS9ycvGfhz8eMDR4mj",
  "key24": "3JzK9q3WjupZinUibMytN5irNX3EK6DXtWUDwu5hLUKZKouDzpm5dY9kDcfFdxt4vweFzJA3LPaavbhoh8yfoQCr",
  "key25": "3oKcdMaSjUujpRh6BwnM2KNx7LjEWAT7pTsxZRfpzuuQVefskXFDto1MATCbpGdfE8mVmNwW5uD78HExucXBCiSM",
  "key26": "2ZoiG9SQnMNDmKZnKVusU5kGdEVWiyjPRsJ4jb9Dngy7b1UEwn5uSdxoKyxZBwnyMbu4s8xM4HYVSrxy1a5CLM8X",
  "key27": "4ES7V4QDmmqCgaPnMGVRc44Ae7YRAMatNpZkkuoLnuhSVx85eZvXPJYZ6QsovKyqTT5by12yKX6PrFSr2AMiDYvW",
  "key28": "3uxaqrHfBfQFBWrVvxEmNF4fXaNNEDVDHzkVwmp2Fp3zdUCQfUa4Crynoix1qBpLoWYptJiipSUY9Nf4iw59TzD1",
  "key29": "3hsLCghSTDAnRk165Qrv5u1vbzFgFRpZfA6HMpcFm1XJQDToofLY4c11f486FQ5kFfMT6UxvZfKmN756Jq1Q2wEe",
  "key30": "5HD4U1eWDsXjY1bcfa42dfsQEwYezNr28WzS3sQz4ke8CsJsowTCQYcoXuHioB8JHZCJBt4QRQ9yaXfsPH7ysLCF",
  "key31": "2HjaWTCHw1oh6XrDHxUqgaDqXrPtmdJV4S1ieNdzywY3945UHZHVeUtUWQrvyUQvc45AnG8ZoJBjuYA7pjnyDUCD",
  "key32": "2BWaky3oDaeYEzCzbfW7y4yh4EECm436ziNYXCbW3jYSkQ9G2wJBdWNkAWRKU3z5XSDuF8EuW66tZ1eCrNHiF38v",
  "key33": "3bFRRsAStvYcXaJNcoGgVeRPfC57jFzMGLmwAFdwB5UnweXW8zsNwjue1y1ukfeHafbJ2VmF6RdNTWard6E2ufa6",
  "key34": "2bHRGtXqu4Vm51htx2QDaLttMPed5tFK8dtcFGQBNNpkXF1wwxNhbTDtjKy3MJRHa5t8G8LQU7DXeN7SqiMfYtqi",
  "key35": "2DNUw3yQzkvHFDr32K62hdNFEBznJCrspXCmj1XuJztbq1iygSAHZDy6ypNGuaTCvmv14WiM44v3GFBWak8aXJ7r",
  "key36": "Y2VPpkGRm7sB5hZBFqMu5BxSnc2wCvbY8RLfcT7PfuWa99omAkeKSRUYjJS9NkKmRbsK25RWfF1b2ExVxQjNan8",
  "key37": "4TuhCygvprNACo9sK2aMy7EGyNrBucjCyRnRY1SVGVg2SoyVAdhsgqCQm5hjRy7jkbgfHRtWwKgP99qU1KCpXz9",
  "key38": "rpD7xxw2p7mvcUovTsp8STgXcd3HDVJu45gDvApsAHyy6q7z8GnGEBRaxSa54ZmEP6N4yipGLGFGiYJLmYrUi3b",
  "key39": "4zuddbML8SPhiczcjXako8zcvgj9GczkxfpFZ2CU4TnPCcF3YeAY68SeC2N6KBs3hU5VeG4j6W54rC6RBssxncEE",
  "key40": "j2XAy4bpZ7WN3zLf5hMbeHbsweM9APDiutqit8cX9oUt54RmyHFg74aJLYy8wS9hewVwbH4mWXh8svkc1g7dZCY",
  "key41": "5SjshjzoVtSkgSKztrY5KhyjquP4mUnzt6zRv8fc1NGH4U3v2By5FdXbf6y2TYFXoCXRZ39Lk65VWdeiLtXgcbLo",
  "key42": "44rh6zVEC7chioyKSmovpURxLMa6epfPCfnf2keEAM8xQJuByipMynwJCa1qDiioCFfJe5ZisfUAcd2RBM9yNLNS",
  "key43": "yZWmLzSzBKv5SyzqSQpjUw8kwesMUGY3oaPjjPyo7K2Nyb7UqYDRemsYyFFY8987MF1Wp39cTEC5fK6ehN2yPoN",
  "key44": "33GqEWv7tjjQS2rHx5isC9TgWipBfjMvJnSeKcNxJDmjxfwGeow15o1eAVHR1fhUQfbaSfjbK74zfdTuiWNNL85m",
  "key45": "4sKsWhfQFAXRagxv28y8kHi6saS2LXrbC49ZuufEdQRS49szcRg6ybGH9XBRtrWr2tjXtQDokEs7PsiKKsKDDtz6",
  "key46": "2uKD3PxXVayJqr1M5G55gFmvjbGG2KcVstxc6wNTrTDzZAW112nLW6Gj2MoVcAdJJTcpAFgxTFA3MzrnEy84zmBy"
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
