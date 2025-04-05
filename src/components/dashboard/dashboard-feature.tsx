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
    "2o6Y6o6Z7JknF1GHVMmqChdojWnkjeVasEze9hgcHQ79JPK6k4y3EZpk4jZSWmjyy3feJaBG6b73KwEEjLhS1sHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SbDWi4VX7X7XSVhYhkZHUaTnz9C2uVsNL3EuZewwB2iuwKjWmKj2WG1sTdm6WnZ112Z1vBEazzv6VPdMpBFW6R8",
  "key1": "5iSsrWtcUwYZxXwueqNk5KqLv94hUWWFnPfmDaCt48gh4fYP67S9hYhRdASsuxaNYzsEPSpTRkN24fQh3SkYEwMQ",
  "key2": "4deCqqkV86nPHGecVZYuHTaDKH7fyYrroGd4jpmewqwhPB5KFYKP1fmfwpLJLM5H3seNuMBqFPV5vxs67Xv6xAWK",
  "key3": "27FaEVnmLrwk1bV6udBzgJUJUX8uSRi7ruVq6j3v2RyT9casWo4tWKjsCqfS9TB3REpytHAMcqH2ZCyJV9mcR363",
  "key4": "61uhn9Z66hoAJBhabLJ95oG2HkzyyWc5JE7fT7MGGMvDESSyfFhTDYdBMjmQ1odTDpRrsnWQ3PjSVDt2BVhYLvpk",
  "key5": "33fpTZG9ftXr7BQnU8P8qWBYCfrWVJspSX1h2azq1M57NtCkKNTx8FxjiuxGhLoWioWfFrhDpyXbFQMnxfzpY7JN",
  "key6": "m27pgNREEWnABXDdbbaZCwfxAHJNcFUtnPmDrtDDwHw8onScBcz1M54Fm93EzVrpgYgtEUpzZYXCLBYFFibc1Dz",
  "key7": "5YVzc9rn6eS2rYcEm7AaeiJqGhwQEHSNmAwrGWvpZy472Y282FSz6TkH6eoX6pXLB18YLPuqWudVj6b1XpbhPKgx",
  "key8": "5rwsveFdnEoMwXfDFgCQYLPDqpdxJGPxYkG2kUxrMvAoPtc7Vubsm6VfRjjJ2mCGBGhZBT2y1ZiGwoMJ7ouMt67r",
  "key9": "43xjyutyV59ym8x6gnXXrv8Z1QRCkfbHHchdt5bBJ7bacWRod3uw8NPemAdfNZBwP4gu2SbAFJ1TTu4oia8tw7CP",
  "key10": "ha7LpygwK6RTo5hgJuwN7GH3QXyMa4QFpaELzZQWxqk9YRfij7AbY4CuLzn8VXXacg3Q3SL2SL8F2fXWZTJtPER",
  "key11": "2g8ygrhyuFBgV6vsYxC8d44XwhNjeePp5NkNxstqejcwRiiakZkt9WUYvEEhXRof7bmpgiKppYnh8RSfyJZArzC6",
  "key12": "5xRpJQy1coxo1JLLyq69iUsRRAra3sjoJ7w5HF9XWvxjKs9FxS5iDTTvfV5cDEM248bd9LShrhY3uFRoV8u7vuvZ",
  "key13": "3mpPPbupJAxKrCxFCw4nefUDTEFzu3eJwo99QaaxhJ4gAzPDk1shEV4TGqAPus7kb2ZC1SM8pfnMQ1xP9E898osG",
  "key14": "5ox5uTnxRZQtfu8z75kB9LKLxJoCAkrcX5KiuAgwFYenGSgLx2UHu7dv1rXXSPFns2MW6T1nvBXjit3fuYmxtMqV",
  "key15": "51h6BGHAPCaYqG5MxuZjxownDMfEfhiRzyMJxa3Kjdz6Mz72NMoaB8cwNEkNW5uSf5znudA8PrywffP86j6A7xWv",
  "key16": "5FnimMHYAQJ6Nv1KnR6fAD9ztiAbkCnD1BdovJmjaJugvzdDKjVoCs6Cx6TVTidrc8NCUUroHDtEVy1bnGLmV2gL",
  "key17": "uUA6qDFZQitsRe5CtmnVBCnWeZjTRvezcQfKHTyLCAFcmxmrAi1rHnztsvaNfNvk7g9DVTmgSRGXjLCVx9mcCsZ",
  "key18": "2tVo6mxZN3DydS9tFvnjp3Yr8zyd6HDayRJXE8sxxuWx8Y3MCUDakAsRriTCSih4R9EzBQn2nM3mU3Up5eHd5iYM",
  "key19": "3qbXFE5EkT1RdF9CgEgNZsDjQzxgvjSgfDZaMiWQ8D8FPWjT4x5Xr32ng13FWKubCmrH2w1ajkLn5a9oc59hqRQD",
  "key20": "3TwtbfBScypbRz9e7RYMGrq5V8BAkCktaDakZtn6yo4syYBPhPk1nv8gSykEvnN8a67Za9bBZ92eW3C1XFUJgJLP",
  "key21": "4NdRUP6C1BTXbYbgW8RDCrwbXAuFf3WAQX22PPndzsXznAat85dYMeB5qJt5MLtZEbYeacHm7EMFthKe9DJTVQhu",
  "key22": "5VB4928DFdVmWRctVQMizU86k1JeicGhS6TeN5jEJAuM4fcZsctSiCPukap5LvHAVxtuwZ9GXmiGifL28ZaoKyix",
  "key23": "hoXwYuH7rZzUBxnAdv4KyRzbasaUVMXgjdkdNDvU39b9o1u2mmU2viQpFh9VfCZVBdqKiWkKrryoCUHGCSkyaMj",
  "key24": "3pnzG77Wq745Zs9VoM9VbuhJbEcXbQzuQg1UPzDxc3bhQhtYeMrrzfjhMR16BhsRuA5nHvF3ZTAx43SC26UUrw7c",
  "key25": "5dDfyctuZMJakQN7GMSNYikLk9mReiP5SLfM1CftpCMimWdTerB6omyVBsCyp3xvGR77wBPv7LGAjVXtvvzTGosN",
  "key26": "2HYvHQL5SqVfeY6zJoNpHwZWpXEvXLNa4oNH7bg8BqKp6vtK3HM6dxp2tXtpvr5vBfzXbqtjs2K4T9tPqLW8sSs8",
  "key27": "4efNXbgBszQE8gC5AMkAedmNkGPLLWiq8PnSjyY6PXP5Dtx2hL935jaQ5XhWKncAFHZJ9qT8FVipbPEbY1PgFD1r",
  "key28": "66GwDyz14n87yCirHbjT3mPxYZeYghJwsVaKjhjTt5bFX9U16VPw1Zxn5L9XiWNfRKq7YQWQqRvFEPAn1pTUvhF4",
  "key29": "66V79x2R9YqbKeuJ6fETAH6HNn3BiqH6pmb4Tu32PZiALBTRf3Lvgb1i9W3zj4BayiniX433nvsEXczCuYGHyYLM",
  "key30": "3gUkJNGoW2khz33zAGB34iJd3eAkJkAuT3xt9arKuSQYCqBMbzUuzocgiJMScSHZnouXc7br7RF2gVU9jfvBu9DD",
  "key31": "5spRJaBnXcoSczNgk1wq3kbEhcGA3DMBuzUmjhNZ3wMQSPu5LeYbE7Xbi4r3ipbbrwBT9iNoiambk9RTy3qGNwnx",
  "key32": "2kwvaxfzR6jM5R2aWWRtrZeFsWEuPmQxGoqAGDCmu9DWuULynNnEt3byUK75Z2JV534j1hYbRsko3pJwAxeYowy",
  "key33": "4iwKAY3mc2JF4bUq2KPaXUXLF9raHZKqbZ8nEiaestVsBmfGwB2xx99omMJfo4DBzfE6pbxLv4TV5Db56FEZZv9B",
  "key34": "2H4q2Ad4u78aMokM1aRACLKgPbWy1UR6b74ZEkbk6ws3vsjAhCBCoUXu5AKwJs4VB7BdBBHhbuvySEsF1EReubqC",
  "key35": "5hpksdTJdEfKpQUXCSWQ87Vr6DDsgqTUG4cyUS1opVjgFhQBRjo27LxcpBvKfnnFYT7iRVgmdssEQoN7SvraLHJ6",
  "key36": "5fcv6yrPfm7o28RLZA5CHUgBfhaCXxwztxrxwnEacmHYN9UbEVPUbRDB1QFqagkLeB8ExKKugxUmFdfK8YJYM2A2",
  "key37": "uhbChdHKnuCE3jyrcuNy7uxjJFhBEiZ6MLjYXqvDApkKUVGpQHmpe6aZaGDTQWNMCH2b21LWxT25FLxFfwfN8V8",
  "key38": "x4r27F5PJM8YkLgxExREfNHm3989b3tmrYLkKPpo1RfivByTvFtzhhwbTLJkSrzV38R9bf36Qs6APTSgUMuM4qT"
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
