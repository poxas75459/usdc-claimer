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
    "3N2in1NdobJnMwpLYatCjb2GeVH4SrDUfj46JoX3VhxkkRi7eqJ4PcVYSmkqvjkJw2mKDfSSeqP4fCmQgzFgj6ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tndD4cfz9SDw253f38TGok4H4EAzZEd7V5oFMBkrZ6aqWAoXmANQFz2mppxj6rkHHPoRxrVu336kzbxQvTCwXTd",
  "key1": "4SpL74pi1S6M1MXYQaLN1CwAuaxWNmJ9f2W9hkmEeXGJLRh853jy7MhvZMkQUGSAToepBgFH1FYUtrxZSE2xFAjH",
  "key2": "4BquaqxmxZwaoxaBsHFV21Wv8ytYTZ5rKqXc1KKTSQcQgiwfPyYFS2A9gAja5bLZvxMcPau2PH7Py8NYZPRsPwKQ",
  "key3": "5NLrdH2Uy7gZfe6N5YkzcrJhn4RqdNGrN1iZBdxaVjyzzPkv4UowqzSYYpHgwLJhqaJDE7dh5kh4U7Ln1XNx3Srm",
  "key4": "BGYF8WqFA4B9Lwh3z7jagBg4GdT5GbEefryAzQt5w8FwWCxav2NbpoNa4zTtm3jqAfRMjz4Bo5f6YYtGCZDzCbu",
  "key5": "4QxYBZfM99aSNyvzfRJepr8L4WHTu2gPSSGexuKksUtcHQZYvKMn2AJQFvsVDZWh1JnvbqZ7nQcVUH1uzBz4R7us",
  "key6": "2bUoxYEP8BLw2xR56KB9juvT7zuUUXT1VsMQ94JnmhFwi8w9UyhahYrg6WQH6xkMjoyQbmYUcaPXLazqySXYxKMR",
  "key7": "4wr91hhuUktnQc7e3evvTnwqFCTLAA8K2f6MaiFbJS3retfHXgpbAfrGGcB5R6hjH6tjhe1ozniWmSoGeDACxfVt",
  "key8": "4JsQeRViw2Lc9pgRixoSyv2xxUkKkdhhmmLQ5Wcy3odRML78MZPB3UZrUhfNhKP43YvnsR35h3CCo8FCfnuzvZUb",
  "key9": "3eQv8sCKdcZ514f2Cajk7u2h8ivMkuJsNn87DkXi3jwYqd1zuGXontErPgXRvcBDVixcx9mFG5JWbgW5kVHXXKVr",
  "key10": "3dqwUgiURKTHRLs9nNWzKyKQJbqaZrti5EQYt3aLKjKRAN731yMazNfn2B5C7zswsJLzuU6pzXMCN13czWAz2LQn",
  "key11": "3YVbcKmjvV4sQMi4o3PbhU56zNWPWBoCsPR76kPe2QjEhL1Y5tKgcfhpvW8qEJzx1bpkM8vjJuQqsb1RtTFcHfum",
  "key12": "3sPw83YpFuWZa7EgyiG4L7haLQzK8wjpAskKNCFEhGnnLhHdqq7Si2d5TMBqds7rAcDW5KNaQCPPxVY51Xz6cKDk",
  "key13": "3cfDTBH319jx5y9noW2rGKE6LJXKPt9mcxbTHspK1VMDjmYWun6FzomzwA8ZR2w6bBtavDYy7ELZ5fUJVDVkMVMg",
  "key14": "3PQoYYX3uTjrEc5ga2Vfkd9SrGhjUFtbKYSoVZKqYph6A5bHUFWJKEETUvjTWDwUUegQo8BPpWHgyJJq91MKn1Ve",
  "key15": "WsDFgPraUQ424FWkPu4rSz6AdeuALN5vSTe8qfLgQADLpPzfSouWf1RRWVY13bx4N8n8xoBy6kS9okq8z2pcBM5",
  "key16": "5vLavsSZuX741aRZCzyZMYYytzkNmMJrxMHVpPRvLjxPGwAy3HWhGgstgKEbVog64HR1up81hyTLSCNHTrxaLmTk",
  "key17": "5QzmjCi6yiXhJZ3P56f4xpGdwy95pUiys1edBKnHsppF2Mnmfydnr8ynP947k2L6Lkm4qeMj5Mxktd9s9LMgxZKT",
  "key18": "4Cmoh1pYjcLoqumHJcMTsY6XgkWxTeG5DZZF2HP7qabghnAPxwFp9zcEQqFqURcc6t5UZEJnmAHZTHHw7ixgfsfq",
  "key19": "2KT8ZFf7UBovDKiXsnhifJGYpHg66PyNEhaL1WbhavDxg255WmBTzDizCRKbbj1g6MHoyvzpEvwS4shQZFHTvuty",
  "key20": "5NbGQBo68HjRqRWLyozmAGYyxNNrysUxEyrJab2joprg2YxvtpwidmvHcR6n7yQig2Rkgrphi1wRspe1ZEh8514h",
  "key21": "33C2eJS5A1HTPUDC4QS9QULz7FMCgzajCpoVpMqAfkXc5aFdRxcaAqNUd1kFAtvPNCi245K8uD7B3g64CFkigK8D",
  "key22": "5sUZwsR9iUvPZbNbQKz8fSN4hww63GS9ZTLFCaGKYXDUKGCDCnBr8Fwh9kWgFkWALYFb6NYXW15UXF4A3ERdXEe3",
  "key23": "587ZMmXNBiEXzoKMyf1yXStspUjnykTiEySdLYRigUYYSoHGqra9ukPARUvk3rREui8H6ykDUSv1pJ9NSp2iLv3f",
  "key24": "4ZunT4uiEwjEq65wvjUGvNzs6SH2BFbY5vkxwhZ2zZDWPmfNavJjnmZnvRwwTT2R2kM2KyJ89p3EiZ7VP83oUXnk",
  "key25": "2ELcHFDHodWytwv1Ek7vYj8M5bEXGNAp3DY9SVrubj5PU7xpU7rjPN2ngmTNwSRP3mDet53FF5G5RKuKNTKGqUiQ",
  "key26": "2M1PNQddk8iTeZ51mtmMgr4SYuUkA1a8LVUCE9kZYUD2im2f9aReQeX6EN8mc82bMRdGwBaohaTsDEZ2VmoEjbT7",
  "key27": "457ukPXU2chxfLp6zyCauprtFDBzPX7pfjZB65c4cQPQMTdzdr13Be8f9re1unKu4hzWd54eRpDwJtRetALDpwmj",
  "key28": "5xpaNKcbYRNzQf3vw3vjzFVw9fjp6fge7PPkMz4XVtT2vZd5H5pQZsWMqRohi2XhKsA8tLJx2NHw6by8u945fjNF",
  "key29": "5ajd8EZAL5VvbczAKmxcQT1qNiaoukAdBp5PvaYUBE9GqjcRqi4sVWniUx3MA2hhgMuTGPPd1gCgskYdaGNmjfau",
  "key30": "2cPou65gmXa6dF146s99n4Pn1KRRwYMuJu1w5FUBBAHLvJNCsaQ4FMwjeW6dcSXSUn7oDMyPdkHTusZh6iA9ywGr",
  "key31": "434WhjWmMCRowjAPPVcc5uHQmZXEjgcydZPsVvivTH7uj6dcjqVas2SYr9nUBpLLbTmGDcSo4D9DLst69e2q9fA7",
  "key32": "5d2VTBgCeWeyyYFFaMLhHCmQ1yGEesudbgYaZmg3roVFDpERpQUV6LiU1Btzq3BxSYbEaPZvTmePXngA8trBZmyR",
  "key33": "3D4nWcstHkWwQ6B1nCg8z7reoay8SGXVgSrQfyNdaxA5izsauPfssCHw6eBscgHvGEJbtwKamFKujzYbLeggNo5",
  "key34": "24st688ujJ2k2VpbxCz8wXacCAmuEfwZkFFjzQic2f4ZRaY7NBpqwZaxiY46yjRHuKM63y7iaAhFZMgYEnkaow14",
  "key35": "3kd6CUdyfoQqGaGmoH8HqpoMdgioEh4gnjPjYzwB8wPQqSzyeQWkdbZaUYg5U8i7wDFwxB8xwMDKUqdu7kHovSSX",
  "key36": "2rYzirDyiuAfWQZpURhjvrpz8GiDaLVDSroaSUVHxw3yQ4u3hGUaCgbYt6UAqwvPZCXiaFKcoqR6iFoaS1FFzeFo",
  "key37": "2xfKFNxbeYhCGfuTEcHHwGbKMR8G2dznUupq2b9Gd9VhBxr3BcePvBLov6MS7GPA4CukD1rfsgv4qTaCbDjtW49z",
  "key38": "42vTV7bB67s6EWz3me1qANcq59P8y5yTrjZ7piwJEEW2EKJATYdyAgK3KLquJHVbP7mD58K4TcvHuT3jfmQ6pu8h",
  "key39": "4yHg9KBFAP9jW1HwntYgPor4GBMZVhCf94JmBBa8SpRVkK8ntpg7ojpx93WvnURAkGESB6WegyE5iedG1nrwNR6N",
  "key40": "2zJz34YFXNvPmWrh29E7xATKMBNsjAuuL7pUae38PCYGLFTCE1cCekom7GhfJYLkUmpNXVEL68nMJTNzhXuytquR",
  "key41": "5KVV37LamT8XoJaxU7U81kJDUnSQAE1Ru2n79R3vFdoQdgTVkbEwbGGcL1BdPSsLcQzJm7YnuqQBtq5FffS9jsNu",
  "key42": "66GuJGhdpGnZktVZfPBHXL1Ee2zSvkhTSeh2jNNKAk7kCr46zsnjYcHYkX3G63m3eXssadQYVxKu25wMK777BzbB",
  "key43": "5h7Hyskf7wL4Af2dqGRsumHXNuaBkwBm4uBh2Ve47CPLuHaiC46AvA12MUDyLX3JNtdXaccGWKsAUwcfN6RyMeGc",
  "key44": "fzbxS7rHQLUzbkz88oECmupjqptLJtbkaPojWRN1DYWuLkhbgbiqsQWhwLJu4TrrLpxPw4emUXZySyMdta6ErQA",
  "key45": "35QSAnWZxi24gKiXsaKmjF7T8iNEdy11bhijHGw6Wvbs2uqZdNqD3aZR38xxmUzhcdNyrx7AoApYPbyM6qg5ENit",
  "key46": "5WY2QPQTLLwJhyfvUuG9uRatXohjC6TJTPBYLLYa53AHuuc1JEdkJxBfg1ePR7GzUjezVsSHG5KkY9dr6dg6ueHw",
  "key47": "eXDt1J5BqR2ZKH4sZqPTv8o4YNVwXucNFpXc1QC7HhGi2JTm9T1wrNEH5guMP8DsuiuHfeyVTyhSeJcre3mBpKW",
  "key48": "4fuASW1umufWBSKfwiyVGLPa9cPk3E6iCFtu6GSG1BrytgRqQJZdf6Q2CjdFd6TpjxRaZgsnaqBJSgACJtaJsqwU"
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
