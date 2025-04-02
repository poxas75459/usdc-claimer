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
    "3DaahjtUSxV18eUUayc3mzGaFTsYPP3TbtqE6Ce8Fmf9WhYYs3hQvAwqKsrJnELxfzdRKQZu1YVDT7RSN2hbgcvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DH8zzvMU6wA2muDq4CStzRNx4Hw8r4ZNBH6yH21NyjkqHHuXxikmm6cru2k9iBCfyB6ek7L5GCbhBX8nWuS3Yvh",
  "key1": "kSrAh27AKgTGGvor1Nfxd5BURk73AF5CV4rcxymh34DNKBW4Q6FCnJSAfFaLGYbX1WYTp2XXNmZv2o5J6whqctQ",
  "key2": "5VBEUc3nM8vMgisngYToLGC8KGFRG8EKKdGdhc56StZvkJTixe9fyg2UB43cpWGf7DQEBQ3L1jk6UQbL1jz8bR3n",
  "key3": "2JnJVxXdJudkG96ouNMxnd1U9Y7cFbPk1D9GLp3L53CEjfex2vkrWHgwukxBawomKSs1tN9BxdsDLiVYvM9TVAAH",
  "key4": "QV3WuF5akYuXbqBCkQyEazzesX13mQMMZZij4Pef1grPpvhmq5e9gSYmiTnU4pF7m664TbYuXjSMHp8JTErtdiW",
  "key5": "34veEPRou67iELQmEAgPZfiTpH4doqN4Y56MzwLSQfEGxEGu7pfQiKQgyMRDngNHS2vfNurYgMbmfFByDFZ55DDm",
  "key6": "3SAnyyVvBjcEeZWeDeKCzK8r7zf7oxQLnnhY88GajjiFwL5HEY6LNLVQBWWHBd1CcLfyfZrCwVnr1Uia6PePRcHj",
  "key7": "5W3oCRTXxuTn1wvemB9MzbBCsNLSbedeaSMQ9HWNmdVq8LnnLdkowkoBhp4ESeBCGRJvhNKcAY6q56RdkaK7M5XZ",
  "key8": "2jiGAWjGVqsdheYWsxLY9uuFFXmdPjnHKRkCoKDJZRoSNtxC6LbUumitExqF23DPqj2NCsiEPneGn2cUhrvkJWuN",
  "key9": "5eZ5UVTZE12WHibjJZ79ifQU8NuT5yt1WYtGUBJxkrDbCtV5MTxMkthjkqw4wrkrDFkSWLyVo8f7xc36L31PNeyL",
  "key10": "5Vy9xt151rfhdQaQzctZvNWEyDCxspPNrPitGkh7U2ysJoHqudG4aBWLqyhQNdk2aEqhYumeQnkWdNKVZ6MSaDaF",
  "key11": "5D3Qa6wDwEwALVzxg9ZKrEa9AiaLLne5prKPF7V774thHH6Vo6CmLLE5tHLZ6azgZMmqQCWYSpVG1gg8vwT5L39H",
  "key12": "QLDmHm5wqsKBfkhnAoH4vVeuWQQY4ntqAQniAkKzRcCocJcftStBKDJeimUXtrcq9gJE3YbUXhEEn3Qk9fWWxvK",
  "key13": "2fn4kcSUcAapC42LfRqG2tqinJvpkXZ6RP5FtpSKEyW3C6zC41ST2J422eUtGL4MPggxGQSJJTobQTB4MfNLVGeV",
  "key14": "4nTTtEwe9US9uyDPSxdzawgqwSQ9M1Xk3iMFE9ruBMVoaydKdYWtCPWj5CcPwiyhLpT7fNkba9JJuNRcs5QPJmgr",
  "key15": "3yxCNYNzxEu2G2txxNUS442HvhXFyX7aGSav1nX9BieYYgeAKoz2ATcKmgb2ARLkvBWQ3oVoKvJa6fNBWkuuJePY",
  "key16": "4VDcZi94rfYZM1zV8yEhakBFVGHiLfPaSjrNT5RajVCkw45STBZPWSCEFhmjGuUKnQYk3UqG7Nid8fzibJiTftvr",
  "key17": "5cVVCKBb7fcNrYUWWmvjwcJimtUy74bnAMXZiVWV1Zd6wXJPYdeBiC3KY3Y2Nsh6sJYR6MGy6TM6cejDpT9jUQQJ",
  "key18": "5qM3Kvpc166S2tiA5RHRutvzQwdMTRkDT1fSAHKcssEVGM5ESGFV4fBAUJKAKnkNKwtuZNi6cyCKpvFvvTyT4GRk",
  "key19": "6HFgWQcVevjrCZJ4ZiDKU6J2BXoUXF3By9Z2cExo2HZe1sSNfsiZkpAbpSMmVin6F75S4F9yMdsMgiP7vPuQatH",
  "key20": "RGdKNWdeHbxYPTaTg3bVosuEy4gEUVoLnaBxrigNKdu6uVqqGtV6EXpeBDtSBemaUkbxwkcJRxP88DkvUeG69nH",
  "key21": "3yKBMVJXWcCngQPXodXQC2U8aeeLMbmCg41yiAisCSZSU7XDQ1zjXNC6qd6ryWN71njVp98rDGd3xMcy5oFqQuD8",
  "key22": "oYcNWLKibqo24rraLvZh2gwJHzzkV9cq3choZGQx4mzgVDhxzUcLUSGrZRzrYhMz7MtYopT6KueSCJcup1WQtio",
  "key23": "2hdWqH6masHX9VS5afrjYbAEjT1gF9Rkh8V4M9EtjrCzHwPx7HGz3MFMEdVGBjXJGJJ3c6rGPpbcq5B6NvpuLizf",
  "key24": "4AyWAe9ZepzMG5TEgrQ1PzUNMuFiKD7D5Fph9R3ozrGv93ZCM5sC2qvdXdj1MqhP2FuPGTXgCZiyTBLuZi7YDXdo",
  "key25": "5BuuaLNBZnxNp1Bred8VFf2zbjfpcveQ4R3kbDy13BSAv2RK8yvZdGAVXj9LxBFwwuMM1eE3nwxJXVwSR2rBh6ey",
  "key26": "2L1CuLys9mGS8xoRPmHsox6Uaj22jw3wBMK8ig89CMEySSpg58JkDiuqT12AgtC2JCRqVSCcaN9Vd4eVZ8ThzwmB",
  "key27": "4pcQZrJkQjqQKkEkUXmEHbTyWmkixK6QhShRa3JsybVk6oTSC2xhuw6F7RYE9FAiZduq5ovBQnXGMprRBUCUUnLL",
  "key28": "7ASoHEiskSd6KHAGedrcjXCBhybCEAedTkM44sjFaPuC54f9azXm9do8uRWDe5kTda8nZFXrJjjiFtpFcjQAisF",
  "key29": "5sPGZpstCqrx5zT7SLCyofewZefqKa8ApiNWE73ojEjH2U2qTpCoAbFqyrwJNeDZuAWF1ndvEvkGDaqj5onY5TzZ",
  "key30": "3vWWJFbt23kA1M287a2hkyEYzFSBhrjBxLxEzpQcR4wA8WMDMJ11iaPW9cjA2ntHUKD5njyFe2JgtUic8Es6SL9Q",
  "key31": "5mS7C9TJJsq6rusjDEi2vHcVqxtiwc4koM27UkYguhPeKfYbJSaLdkk7RV24BMxpnjZn3WSBHRKBL31gWMuBLWLn",
  "key32": "2iJWnAy3dqGYRa9LKcicjjPWeim8DdkwJ12oQgkmVtXYuanem7GjEVTnx6NDTHirK8Y6CbpMs9jP21VRs9AiXXjF",
  "key33": "31SFve1DEbNifbEdqdwrUmBNy6zhQ9vdtubpPUtRaUVGE3PUrDCq9pv1szCynFw25oihizCCdt1ShxsAkRCmzcEm",
  "key34": "54mqbnaMexxeQHceg37c8gXnSSidudB7q2jMh4d51tgvUuzTYfYm4r18xWRMbfE3yb7skbW9CEiWdHTZ83QnZ99T",
  "key35": "4Lj85tkHaCktr2TRosxy5MxsBv67cmgHrJb8kUZSPzyr8oHbySPoWoEoNW7Hzr12Fo5eWg11qEvbudZJTetoQqVg",
  "key36": "2oh75TBLbnJVKuZEH41HUG6VMh8N83dCABUuoEhXx4SxEy1dTFdCZF6fLhhYXkZb9DyPDXzFK6PQW4jADtsaQCh7",
  "key37": "5eKD4oihfanUTGS1SPFtPR27jxSjpK1iLdCPTfMfBTwrxof9taV8EBcZA518V8iDCN9wwPUPaJH7vJJ34ronDEsW",
  "key38": "3RBYn3sQojgbCLZWp9WFc8yPpSmBxqEZvGqBBhkcv6iyw8NxfuDsheuRiEBf5ej9o2z5Gvs49afViiuverJdGpez",
  "key39": "3Xm67LQ98AWy2JtBMm1E6DBqZiXT5MzJeDuniYZMNqNTmSra9H1NF5uqsbR7hchGanYM2oH8MJ4P3R2Z9cfWUjgx",
  "key40": "3jexBZdgzWHJHPWr7CGsG8FkCPnGwWMZc6APcdhzN1L6MmobmZAP51VcfdDFvfSqCbK5mx6eubNNqRMQGLDMCGt1",
  "key41": "LyaUEiuVEQuSnyduuUvam4wJPoE9Fudjgdmao7ip17iJY2Pvzk3E99ztytLaqbHFH11jqYk4XsemKhd57uegXz1",
  "key42": "3CqoMamxCHKNczZZsAWg3g9Pf7UTJzN9aTj3zyQYUWXNephWEpXqBRNmee2idfaWLwTDASk9kSdVMmUT2yVjhBKu",
  "key43": "an7KzSCoarDb5SMBCkD9ejYrSHKqyQ6X1t4RNebisKGSajy7pzs4QgJABrkZYitENfTjjb2iWNbrgsDQfzPwsnW",
  "key44": "5zrwvB3kzEji4uxBRFa2epn2dVKKW21n8RccoCQdcejnuoxCeVgnmNXqQPtEQb6dABerfzE7YWSbjqaNiPNRv14v"
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
