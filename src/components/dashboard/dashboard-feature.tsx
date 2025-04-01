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
    "5QVi17SHtCz43aoqmUHom9sCC6Uu9bA6xAwigZM8gd4teWcDoKLELJaTTKmRqQSUQTHGFYaLHQAtmkCVQzsj4PnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XqTMQ87b6qZLZR34JQ5JcpeKzbsEVxUZJLXRnaBYUCvhX5uEV7JnxkySjn3BXCYcQt9j4cSEPhhRGBF1msf5efs",
  "key1": "59c5thyv1eTN8ZDzmGnYgizkwHKrmtXjLQuFH6rbTW92NcHNyCY8C3ui7qnNPRnuyn29DwvFnSHKz65TXMzkzYDk",
  "key2": "HfPUo9Tfp37ipwCTETetFUvj6YZzzBDtSderQTD4x9zefzF8Qua1zZUbE2mjmfyVaxJTeCrZw2zFR4PD42QC4aH",
  "key3": "4hKuiXjCdq6dzZipnusCTkbJGSRtkfsTuLmuCNHsvaBA4w6xRi91r4T1mtE7FGx7NmzgkAVZTWQFYevy1QgCAqS2",
  "key4": "HpLc842yZxUYSCZiFcBswxznsVzzuutEt4Wo7hWBhiSEwNpQkyvv3vfiYw5pVHt4hhiW7TeqiC5xA2NLpsZReke",
  "key5": "5mzk7UkvS5FUffJQHGieuVJzM5Dj8eigvmWe2HyghUUvF6H9ApjvXaNdEqYXEP77Jy8vWNG8vVHsbyYGYh7tKcto",
  "key6": "42XpfG6EXakjk8zzkStQKrJTukREnUUWUQfC39ShkvxZt9NYiDZP1saszEDszkRf1PfCuMPQWSBLMhWTxXjpJfqg",
  "key7": "5wRH4L5JSrdYgXR1EGRg79iF71ZPuGQCf3mkxWzjWDZir8kS7RHe2J1kmt1ie7ttLHXuVNPsF6yo1BVcmKrtWHfz",
  "key8": "4CE4CULhD6tUbAcCm2LicR6a4GakoKu9fHJAE8AuyraHi3owqtQBjcHsieH5zbcsfizZMTYovLijTUKiviFpMsTQ",
  "key9": "4tTSGK7QtDSujkCoXNkM3endQi8sNZhJk96842byneZh3ZVqwcs1LoY9zdPjSSiYk2D3GyVDQLa7fk93pziBRvYE",
  "key10": "2cjB73jJ5q2e9krX91LsG5uvTjEsue9vyyGsvU5CbXx61UtkVgTsbNgEQAZpte8jKV3K3zb3CbqQfxdqYUsRzZB1",
  "key11": "2L22dRxYUuU43J2h2CuDjRuAovbnqyen2YgzTzSJGjbQZNJKL9Np3hLKm9zaq2JBkpdh8fR4NBw5nzzAqngfsK5b",
  "key12": "4bpYs2wEAgZLFwdWTRxBpyRpKS9qyDLvdPeCoHgnczfK4P3urqT1ctc5WWxCsEqG7yE3acARWwQ1VNeKbxnNqZ72",
  "key13": "2nNQFjRFyyqkNSw1MfJMLKxuJcUg2UfjtB8pbBJzPmr5SruifPq3TQAQWdXjdAaoSijyxQvRygJLu9s9VhCZ4Qjf",
  "key14": "2k1dB69QWq6cHG4u35hwkP1M9UbJsVraevHjr8to5S6ssR96WU17edWSxd8DJ2RReftkTEhNyMX4aYpRMzHp9Em1",
  "key15": "2H4divsBjbSE8VAfJmm5hbsMVBRcEXk2CG6DZWkdDYE3JgfucmUW6xFJHQDHwhW7hW47zW3jv7Rhyg8kQMfCotAB",
  "key16": "29ZjMV3Jz7vpFFswTGXUiQCPm1HZozwYxVUE4QgDViScJ5GwLcUhurLvBMDgpqcxAQiLwBAjLzTT9YsiH7gMYmjz",
  "key17": "1qsYJk76ReMeucK4pH15A8mjZUvD2YUprv6U9sP3kiLZkv17SjUw1qAF9saMFSzW6kb3oN8pqo1d8LDR2GW7Eep",
  "key18": "5nkbdK3SLQsQj6t9RVN83UMMEx3XQJLwcxfcRSkmXGLmFWLcSyA2CFGi2kDwLPe28apkzajdSZXpXZ3L7Vgi5RaQ",
  "key19": "4xa61PoPo7XVEchFGwnnnPAhu2FsAiRrqpgS9YaVutPMSqoj4jwTUbRTWhLrpMoX8JihMjeQmpLTqfvT56fPmduX",
  "key20": "4Ny5CmckX14GDGjNamBS7oMREpJ3LE2vS3q7tEs1dyyDt2sNBcLt3bkZEN9UYTWMtK9RXWw1NStB3vvCQ98FeuKy",
  "key21": "2Qxo1XkF8PzxPwGdXeJAi28UobkYRQYJxRGDVEVw5dxNoXuoTqa4gQdUYSQHV76Ek1y6YyAuME5QHQkRUeBsFH7g",
  "key22": "5f1MdjUcohSAGUDAiKZgTpfhjJFgax2Gvn9HL6fjk6LgCvbMyyUu5htmRoiEwyFJoAvnVPDTCyDKibBnjqChPy3K",
  "key23": "57eSFgTZfiBYWpsR66V6YgVJ5ayxMEzfToez8fcLE29MCwUF4jChYiAaUGsyn61qM3UwxdGHsSzrXQS4S3ZevRjk",
  "key24": "PY36HSBvSUqDM5YUHcMRxnvismZbtU1pd53Ra7EDrDUgFBkK43umfumfS18Jay3D5GiVfjnSnTsNsoEgArL4M1J",
  "key25": "7w9fEvN8MDtNcD9BhmAb79CEHacQGeXvvTMqFBTXXaMmX1x2JNYaCbbDvcw2Lt7c46sEH4oGkV8FJJCXefWS3SX",
  "key26": "26mEThae2Q4p3hZm7Rq9iaJUESmpiUqyAJUbszDuQwyhaiPHfkmG9NAgosqF86JVMDLu5AS78teneQfEGWgwx9AB",
  "key27": "uh7FUAVnanzBvwwgXE9Teis9SEB84QhXW9tZ85CmEMNgK1zBdfuDRmDTqAC3MZFwsroi3WCv4Di6A8GBk8Nai9G",
  "key28": "3YHZCXFiNr2uBRURnoTTGGi83VXAcc3Mtw4Nm9BB62xv6obg1MWc3M1ZTVb9AfN5TAVgp7jyKhrCSUnHhFFMfNnB",
  "key29": "4UYBECGsErfn3GuGbaMz7W9hB32qy1BucJgy1dzbnm2GNDvMuexYurxDr8tNAoeTBp36BXhSU9hw362HyyrTMwa",
  "key30": "WAm7Qwk5zmA5ihZL8DV7rQdTXxNAMCsm5AcMbJafT5AzGtZE27Wp1mGogKwDxv5rmDMgwjrAzimnfbykj2x78uY",
  "key31": "28uYkwDs76KdTBK5YKN2qUZiAxm1umW4GFVnP9wvHhAp8W2MsMTV3dig9KTHetDcd1imtFCCwJUAqvwYpPBzXfdM",
  "key32": "RLZEok97JU2mYtYonKZePJyLCzD5v9k5fqC1e9vR2MnuBtSokurhzkL5NVK62KzSrfmFRarzffxf1sWQzEH2jMa",
  "key33": "5hdxcWTv2ksJwrxw9jnjEs1qQHgoRV64TZ8K5S98DDEEhRZLZe81tY6fAsBXkH8V1JkRqw6bspTvHJxET9QC8EnW"
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
