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
    "2AySoXKAmFKVa7hFrU8Jsx8zDbT16AU2225miEz5sjcHoUd9uxN6aLRWsSxYc2GsdhZ4ZhqjQ5yDNzM2QwrQB8Cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RF4KSKsr4jjQwQv61QGkySZ82AY8HcYMcT7ec4xCyfAswwQYrDGvCW7QNDzrWsthkxyUXvJhEHwVbem6k8GVHoS",
  "key1": "34ypgRtasM1ThhoVAPVTJkeYz6herABrrbsw4C7UetGuwQW37sMH6Dxk5TuMZpK4j25EjytKqLNkkuSHALaCvTJy",
  "key2": "2g1AkYmvc8a6bqS5JPbwYmuMnVbbnVUzAtirbdGUQqMDWzEARBDVJnWyh69tmrFjq78mHGsj3E9ozMPZzDm7JLhc",
  "key3": "4ughZT6UhzT7XLmM2e27jWfhbzJsGtNm1ELRzCGHq8cSCdzJfKjpgygySi4YpnAv4LdsBLKZuSMyKooXwTuMTCVn",
  "key4": "CU99sNrE9DNp2rPRNAUXaJRcLCGc9j5D9zJshVp1kiRsXLjW54ecx8heMuAqUzGA12wezE2WQs85P4goUrjj97J",
  "key5": "4LQckbo7Am2TvF9T12zrJ22Sz8GjWcqEYwBoUjJjKrppLVhXtbW4xzm77mXB8sBU5NLTeBRXjxr6vGm4jQmVFbTc",
  "key6": "65MT9SD5wtP4xzEJD82FX8JUdtzErEoWuiuQ6AKwoL7xKujKMck8tjUULB9CHYVnH1mmzD7kgaxuTZE9x4YkKi2N",
  "key7": "4YCk6szFBu6xZdbcaY9gfEPPqbg9P1bBwnjpDwVmESfZCYfh64xZYZd4MxnPFRActPVm38Y5R1KnFgzJxfybcLs2",
  "key8": "2KPphkb6X1UBfBUcrPQVt19kGLKoHcrfniuL17CAb4c9PynTBctJwCVVvr4dQ8m9yj6CSapCd1i8mTBhBjJDfPXC",
  "key9": "5KcfbCefs4BZ7PsWRh6Z4Dxcfstc9vsEttwqX8AiauZym9hVKFiShSBed4iMmX9K4Gi7KD8QqLCkNvpt6PNNaEmN",
  "key10": "2Ep2mqC1jXQiLfoYbKtFqXrm8cyCvvE7BKBceYXXx94ZKgMrVAUGgFffFcgMWtfDdic4k1Tx2mfrM7sU68vujCL7",
  "key11": "4uA75S1cpgg7Lt9yXNurCVUMxwQWnV8vManm1CtVgvcQNRBS43o13juSyqyvC5FwyaD9h1soDj2vqLL8HQ3dUKc",
  "key12": "28fFc8QTLrQb859p7D9vz6dReVx5XdLqvfD2CXLVGE4ujLN8GgAHBDCR28E3kvR1A9Sw3SFusycGBgW19ofrap5K",
  "key13": "5jTUDfvKb4JFB5kYtybD8dnbGosAUQGrRxF2Dq95BS7Myz1ZP4gHYYsLJCdvAUuMappQkQqaZ3WvwfziMnWmRvvd",
  "key14": "5ncrEBmcEXUS7ECyw65CrjeuwoF22ookDXxD6wJeSJqgpBW1TR75sDYPCVYgdEZWN2siJN92f31fagoACwadQYif",
  "key15": "4nvcxzqCf7yB2KXYgiHwe2CTh2aFuKRr3Y3pxreuUUz6B35rD2dP1hYYbsn1RV63SF7Q5zrSDpjpE22Tfg9qZgH3",
  "key16": "5yykRkFUjyQkKjruJ8v5VCJ6efmvUTKyLJ8YwVwMXLXpsUkMVZNPTeBA2HX7G9HBvggdaQaVi99bVi4k9pG76Wwu",
  "key17": "33gso1oNWtuLTxnNvWBeWHMyw5d9Hr11wubon5MSqRdhbspBhJoYXpggGqDVuxQkYmwHmhJLpB1NAKmhRMxMmW6q",
  "key18": "23XAFK8TLRsU1GwmWWyzmDRDTDomVX5Y9qcz8VyHF7SZG4oR1U8ataAxD3TM6Tr6EKoQp5xNWMgdPofmUf25dsBG",
  "key19": "nDdbZ2FKGAGT5jCYehM7KYp6JfahgLWityDwnkVNTSu85Jj4ac588SQMAsN149rNRQ2JEhjVtS5uvm3LC9tRMu7",
  "key20": "42osTtsNXf1XjPKyc8GEdGT3JGRAkvT9f5YpGe5g3EbGSbnomqxpPjsP2qXyjP3js8y6K94Qy45diuiAYDWMBeQ7",
  "key21": "UTu3r4XRb54xgxrYNjw4Q9ibTCVSe9Egxg1P2Qwm9dSzML9pcwfiyaGwCFyvo56n1a1WznT1AtxVJG8pHefBzC7",
  "key22": "49ABUthtUL52wjxrXvmshVpBJNm6K8zFWAGXJjFttzhd37nqbvYLZpvR3oJSBstxnkEVJ7eAaEYznzcPTaw8vvDu",
  "key23": "4fFJNrGkJYxgHUDAkfwYZdSxsNJ5hLNt62dmjPH67sEA21sUAZsaW53CKRfcCifnNxVqiCPDMaBchxdx4uo6Kkr8",
  "key24": "3DfkG1rtJxpNZT9iwZf1PUqFAh3EcRrbBgQgfz4Uc86hDciyQYSe48RncP6eJS8ogupdiXhcyM3vM5MPRaACEZty",
  "key25": "5oVb7ozJieai4p774Wb8h8xPsmr7gSTB7swhSq1wZpxSvrTJWTjSYy7Mbaxz8M5WdzhMLabgb3keC25MNvPVkSUK",
  "key26": "3wXJT9KZSSoHSGo8ve6XWvjb57KqkRVaZWdCCHWw57nASUtezeX4hxruskXftXJWkZsqA7gD3rc27DQjp6fgLVtx",
  "key27": "3vsWEoHuYS1tsAepqNbjdNqCn31xxRgfRobnT22fC4RAd1VWdbed7PNtAQ433oNznUAR8FQK3AhZghr4RKx1zFhV",
  "key28": "5MnDQ9nA8MmQvAALYFhATmAAjwxiY2NKLa5mSuYWSn3STp93CSaoLMzTqAsQnrBQUpwJ59RHoVEyo5jWawh7wWo8",
  "key29": "T6tEt2uifKCi7dB4d8hu8ZbjVFnWDw7XXStLmdf5qic87aqALkGCkTFvryYhjR8u9LrCp5jZ8vXLXxZ3UzD74oQ",
  "key30": "5EgnR487tWbss7SFk6sxCuCsDRySpZ1yCDGzZbiF3anP17i92RwvntQhUPwnJgSp6dCrPQPM4xZ9psHezEZuHb4b"
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
