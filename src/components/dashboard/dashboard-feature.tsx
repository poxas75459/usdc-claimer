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
    "5oeST59sWBHEZUyJgCge7mezxQJHJMP3Hj6YgQUHkaSbJkY7gvwV3KY7TVWD24FHSeh9ozJ91GeTzMTXaVWrWRhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C4YU5ZEiddK3JgLAPVtvooezF8nkwzUGvcTCHrzRpAFa2UwYAkgopQ8TfqB7c4SreaLUnvh2oD4oXfcdKsoTBUq",
  "key1": "3cJk6v2K4KuUwoyQ7T3vxgp92u3WGn5589Ky7XzQmfB4rWE8mArLSDS7To4P2jBi3qyvcLnJ5x88GJfNu1byut3W",
  "key2": "5xgsY5Y7vZgC1DSRfmC6seAjV2Wmd6TAAfPpfbpVdQWMxxKnXTaMcWKqJsiobmcuVghDoV7yRaF4DkZfTY9Ubf3p",
  "key3": "5FpPJFvC7WhtYTeJKV7YATs7ddV3ezh92zNooKkYCG4ppmndF5dZhp3EJVrPzN7Ypqao5pmSAd1dPaNRsALbyLDJ",
  "key4": "2a9oGtPdAjAxb5Mi1DECBzajbbDzEseiXM8yEeQscxcHTAX7LNRg7dPCVxzdEENZtYepFrzqjpaPFhLPXSgRtUUY",
  "key5": "3cH35rKgKVJsFe7kBH8yXiYZwoHDJvnHWvwHp1sAVnbKrxx7BnCqhpU3xqXmtrc7334yUA3me4riAbbRe6FPGA2W",
  "key6": "4jaK4EqCehE7FKdPWkCEfFeKXMh4te449Xxp9chCTT4rji383mRZ5rURAr85bvFuwc3Fnnz156yuEZ7uTNoW8gxN",
  "key7": "4dveaHPqoobKM6KYSwP1kxp36A84T4HjeeaG2ZaNv27GfxgSbuYhfywJepRBnY715PXcisknR51geuAowx6THVJG",
  "key8": "5GbMxyFUJHrtDKV8G1Eq9DuVX9Y4fTaNrkfEyKzL2bCzsSZHY7NS1fHy7jT28zKtDvcojDMKWWjkxCKnpk298pP8",
  "key9": "3f8ssMKyubabvG5Gn9evaDqdz37khLu31GqLE7GYeW8u4xq9NEMmEvQBRTAjkLrLtyRtTLBJsLR38egtUKE8Dsoy",
  "key10": "5vwZVgrxcg9LGiGGVK8joGRGQwYCRSpSQ7Yk6hNB1qkR9bMeQQdWbCp9Sy55euQpAjgP2m2mPqWDS9H8cUNmAAT9",
  "key11": "33Mj54PSoSNijDFUkFLYTiiPWvVsMkLswqZG47Wqit8SfapJ7zHmTKzB9edRhzfhvv4TQftyZkfo45jtPNwk2JYf",
  "key12": "2vLxh3d1pFgnWmi3TZ9CeqtWmnPswNCd6zTouRVccsor5LLqbXenVsUXReCuZfqCRcCi4NArvDvqHJLupA7Vo3TR",
  "key13": "4Fov38k7g97Bp4YYWSq3TdjVsnM4P6VNna5RWoAfqWDJt8HRebxrDti35M5znQ5Y63LZrwwHHF1VbwpP14Qie6EH",
  "key14": "4wW5hPS3wnMDWd1ehmMUNMk3jM1LyB6sAp678aHeUixNF9eYy9Tn7GbXNLdTtyne1XJYbWuZkgC7CcdpdySfCcyb",
  "key15": "fp462E29ZZ3HdvhCWqsNTAGpLDkNR26Lw4kHkNzq12dYstxBgHygeWnWsoAjZY6nibFER7kC49ngj2vQi8ezQd5",
  "key16": "3g7GVakzt569FxFf5QmKXp1YnJqqQtxvKxd8EmmMggh4Pq2jRW13UpLcDdDmaiNU8YEPuBrWpXtYH4HdmgSgqAJK",
  "key17": "3vYcJeeXvYZGCdjrqmtBtHx1Lad25KUDFznfKmjUUrc64QdWh1tmbKRcv5QWhkhidPkfwj4KGK6yienksfZyYzPA",
  "key18": "3Cw2Sa5nFiW5FjfibxMcgMfNKTz3CG3KAeSsc2eJEzden4hdDxPfaVYbnaTsPfYwYS3bFPCMAyVq8hZyUmSVQdsr",
  "key19": "CXXGZ5MEH1QbmeDo6Z6FnG3SAUob4k3f8wRHBnurNQtVim92jRzt7RBJSbfGhyGARiNAhWgk7zho4rEP3rDrthB",
  "key20": "2FbFfUjKZHBbJc24xEn4R6d6NoW8yUa8N8r3qNWtJNfMe2sJicPvxofn12EafUPSVME7b2xbZdde5zsaykTyGc9U",
  "key21": "4pgKAsbojPy6rjLcVvHC2RJ2EAXUixLg7gKM6VPPJRco7PcPvybM9DZtBz2S9geQgTRh4h5zygTN3sqiSysQQHif",
  "key22": "5QJq4xiFLJ8oTYP9fmcUQmGAr3szxeSWK9ihfWErZjzFpe4vykdV76c5a4uToi5adgx9ZcEfdva9DqAxJ1t1oRDG",
  "key23": "gSNpqPYUBvt94gBN3DjRvoQMhVNEpKvbTVhJexJYvag2hZEB5EpbYbi4LzcoBmi2X3gg5vcFUaL3fF35MYTg8dq",
  "key24": "373SrUi2rfiSuKdz8pKUrVmCG1mkyuZxUNHaxyqA1RyNoyaoPPeF9fn6JhxJDQmXUrKT4QfVmRU72rUWZzX6tTSa",
  "key25": "4MtaN1vjJUNmsmyGkwZF4Qo7r5wUJd8DnZWZ2JtQLPikqieC3V1EYisqu3mCXJXiQMEHK4VN1cae7Wz3dyxnVQuD",
  "key26": "soW4UQVddrBKjZxJekX3fJvxhDeWhrSiJrd9y1ABXNLpcNKpqYD47srn48wWUxePBxoBarL9RxNwBsEmnUfdCNp",
  "key27": "4Qgh37EcKRpK752d2RPBxm3w3ZzoTPHZuUsF1vft9RAtUNChUz7v1bJN3tU2VEdKBqJi2HdgYvGh97hFUEGSPfRm",
  "key28": "4bDmnpsiw85LV3kRpP2GsXHVuhMyFRxm1GwYRSBHGdkECMN9mQoQQ6AF8siduiAFYZrAhdsMUGZn7iTGjuqhDsZ3",
  "key29": "522FqGeS5cnpXEzXDSfSNs4KXgufbYnCweBVXAr83L2RMgiv6YqCRLoWvWwdqnVdwtadAo2AP54gCLsfo8zchVzj",
  "key30": "4GJwDtXunjLansrcPYeNV8WtPrrHHaupRPiqg4iq6qV3LEXW33ECKRX8hEytf4gXbJSM23ptTd4KJFNAxsvjDEHM",
  "key31": "43nNYqyYAXBmzLHNmbLVaQNngaDvngCPHgVkPYrfvQfef7SVgt621rvcM1mFf13QJxVyxNY3qpPwXVvsUkKjS34h",
  "key32": "5poTqJEwNJynj8hGV2hX8dcE1cTG7DRQaLnxtiR6ssqWGK3hnBRceEG9dNHArbBaH3Rn5Z2bPKLqfaXUv3MiKrBP",
  "key33": "4uDCqc6bKfRAnrUgurWyMR89QwU1cZkiYczfd4pFSyyFnF3FVd7dNAGqE2mrSJTaRSoWXjRtKXvRyM9teFJ28s13",
  "key34": "3CQz6SBaSw6VzQMNwY9qYprF8CppC7GK78c2PgYwkcAZPcXNNMKdpz9Xt3wdP2SGnAzJ3yzWRanWDz5tTn82YT22",
  "key35": "59is1Q1ivpgaa1XcEtL8m9oL8y1ko2SMUgMBtZdiPjgHUouD3ag1tWM6xJifLpJ7QDxgxRaHztYYupqWdoeLc8mu",
  "key36": "5KAWytQEbNtZdSWswAdNDLstx9Po5Ux2juNBwG3o8zULokBMtZ22xWQs2zfWwgfj3D3qahQVHB4rPdgwujAhZFDx"
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
